// The home page's hero: the cursor walks through the headline once, showing its markup the way
// the editor does, and then the jet takes off. The jet floats at its place in the hero; clicked,
// it flies a figure eight and comes back, leaving a fading contrail (as on the app's welcome
// screen). With Reduce Motion everything stays still.
(function () {
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // ---- the headline ----
  var h1 = document.getElementById('headline')
  var spans = h1.querySelectorAll('.f')
  var caret = document.createElement('span')
  caret.className = 'caret'
  caret.setAttribute('aria-hidden', 'true')
  function at(span) {
    spans.forEach(function (s) { s.classList.toggle('on', s === span) })
    if (span) span.insertBefore(caret, span.lastElementChild)
    else h1.appendChild(caret)
  }
  if (still) at(null)
  else {
    setTimeout(function () { at(spans[0]) }, 700)
    setTimeout(function () { at(spans[1]) }, 2300)
    setTimeout(function () { at(null) }, 3900)
  }

  // ---- the jet ----
  var NOSE = -35 * Math.PI / 180 // the image's nose points up and to the right by this much (y down)
  var LOOP = 3.4                  // seconds for the figure eight
  var TRAIL = 0.45                // seconds of contrail behind the jet
  var wrap = document.querySelector('.hero-wrap')
  var place = wrap.querySelector('.jet-home')
  var jet = wrap.querySelector('.jet')
  var sky = wrap.querySelector('.sky')
  var ctx = sky.getContext('2d')
  var home = { x: 0, y: 0, w: 0, h: 0 }
  var flightStart = null
  var hovering = false
  var running = false
  var visible = true

  function measure() {
    var w = wrap.getBoundingClientRect(), p = place.getBoundingClientRect()
    home = { x: p.left - w.left + p.width / 2, y: p.top - w.top + p.height / 2, w: p.width, h: p.height }
    jet.style.width = p.width + 'px'
    jet.style.height = p.height + 'px'
    var dpr = window.devicePixelRatio || 1
    sky.width = Math.round(sky.clientWidth * dpr)
    sky.height = Math.round(sky.clientHeight * dpr)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    draw(performance.now() / 1000)
  }

  // The figure eight at `elapsed` seconds into the flight: the offset from home and the turn.
  // The jet leaves along its nose, banks right round one loop back through home, then left round
  // the other, and lands where it started, easing in and out. The curve (x = sin t,
  // y = -sin t cos t) flies straight through the crossing, so the bank eases from one side to the
  // other rather than flipping.
  function figureEight(elapsed) {
    var s = Math.min(Math.max(elapsed / LOOP, 0), 1)
    var t = s * s * (3 - 2 * s) * 2 * Math.PI
    var size = 1.8 * Math.min(home.w * 0.5, Math.max(60, (home.y - 20) / (2 * Math.cos(NOSE))))
    var x = size * Math.sin(t), y = -size * Math.sin(t) * Math.cos(t)
    // Turned so the jet sets off along its nose (the curve leaves home at -45 degrees).
    var angle = NOSE + Math.PI / 4
    var c = Math.cos(angle), d = Math.sin(angle)
    // The heading measured from straight down, where it never reaches ±π, so it doesn't wrap.
    var turn = Math.atan2(-Math.cos(t), -Math.cos(2 * t)) - Math.atan2(-1, -1)
    return { x: x * c - y * d, y: x * d + y * c, turn: turn }
  }

  function draw(t) {
    var bob = still ? 0 : Math.sin(t * 1.6) * 7
    var rock = still ? 0 : Math.sin(t * 1.1) * 0.04
    var x = home.x, y = home.y + bob, turn = rock
    if (flightStart !== null) {
      var f = figureEight(t - flightStart)
      x += f.x; y += f.y; turn += f.turn
    }
    var scale = hovering && flightStart === null ? 1.04 : 1
    jet.style.transform = 'translate(' + (x - home.w / 2) + 'px,' + (y - home.h / 2) + 'px) rotate(' + turn + 'rad) scale(' + scale + ')'
    drawTrail(t)
    if (flightStart !== null && t - flightStart > LOOP + TRAIL) flightStart = null
  }

  // Where the jet's tail was over the last moments, thinning and fading.
  function drawTrail(t) {
    ctx.clearRect(0, 0, sky.clientWidth, sky.clientHeight)
    if (flightStart === null) return
    var steps = 36, points = [], back = home.w * 0.42
    for (var i = 0; i <= steps; i++) {
      var elapsed = t - flightStart - i / steps * TRAIL
      if (elapsed <= 0 || elapsed >= LOOP) continue
      var f = figureEight(elapsed), heading = NOSE + f.turn
      points.push([home.x + f.x - Math.cos(heading) * back, home.y + f.y - Math.sin(heading) * back])
    }
    var width = home.w / 260
    ctx.lineCap = 'round'
    for (var j = 1; j < points.length; j++) {
      var fade = 1 - j / points.length
      ctx.strokeStyle = 'rgba(115, 191, 255, ' + 0.55 * fade + ')'
      ctx.lineWidth = (2 + 10 * fade) * width
      ctx.beginPath()
      ctx.moveTo(points[j - 1][0], points[j - 1][1])
      ctx.lineTo(points[j][0], points[j][1])
      ctx.stroke()
    }
  }

  function frame(now) {
    draw(now / 1000)
    if ((visible && !still) || flightStart !== null) requestAnimationFrame(frame)
    else running = false
  }
  function run() {
    if (running) return
    running = true
    requestAnimationFrame(frame)
  }

  function takeOff() {
    if (still || flightStart !== null) return
    flightStart = performance.now() / 1000
    run()
  }

  jet.addEventListener('click', takeOff)
  // A click doesn't focus it, so no focus ring flies along; the keyboard still can.
  jet.addEventListener('mousedown', function (e) { e.preventDefault() })
  jet.addEventListener('pointerenter', function () { hovering = true })
  jet.addEventListener('pointerleave', function () { hovering = false })
  window.addEventListener('resize', measure)
  new IntersectionObserver(function (entries) {
    visible = entries[0].isIntersecting
    if (visible) run()
  }).observe(wrap)

  measure()
  if (!still) {
    run()
    setTimeout(takeOff, 4300)
  }
})()
