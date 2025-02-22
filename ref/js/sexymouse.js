let lastTime = 0
const throttleTime = 75
document.addEventListener('mousemove', function (_0x48ed84) {
  const _0x25a4ae = Date.now()
  _0x25a4ae - lastTime > throttleTime &&
    (createPlusSign(_0x48ed84.clientX, _0x48ed84.clientY),
    (lastTime = _0x25a4ae))
})
function createPlusSign(_0xe9da13, _0x2b1b49) {
  const _0x4e65d7 = document.createElement('div')
  _0x4e65d7.innerText = '+'
  _0x4e65d7.style.position = 'absolute'
  _0x4e65d7.style.left = _0xe9da13 + 'px'
  _0x4e65d7.style.top = _0x2b1b49 + 'px'
  _0x4e65d7.style.fontSize = '15px'
  _0x4e65d7.style.fontWeight = 'bold'
  _0x4e65d7.style.color = 'rgb(255, 255, 255)'
  _0x4e65d7.style.pointerEvents = 'none'
  _0x4e65d7.style.zIndex = '999'
  document.body.appendChild(_0x4e65d7)
  let _0x4e3897 = Math.random() * 2 - 1,
    _0x4acafb = 1
  const _0x2df826 = setInterval(function () {
    _0x2b1b49 += 1.5
    _0x4e65d7.style.top = _0x2b1b49 + 'px'
    _0xe9da13 += _0x4e3897
    _0x4e65d7.style.left = _0xe9da13 + 'px'
    _0x4acafb -= 0.01
    _0x4acafb > 0 && (_0x4e65d7.style.transform = 'scale(' + _0x4acafb + ')')
    ;(_0x2b1b49 >= window.innerHeight || _0x4acafb <= 0) &&
      (clearInterval(_0x2df826), _0x4e65d7.remove())
  }, 50)
}
