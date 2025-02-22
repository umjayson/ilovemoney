function lockZoom() {
    const _0x33032c = document.querySelector('meta[name=viewport]')
    _0x33032c.setAttribute(
      'content',
      'width=device-width, initial-scale=1.0, user-scalable=no'
    )
  }
  function disableZoom(_0x3b3f52) {
    _0x3b3f52.ctrlKey &&
      (_0x3b3f52.key === '+' || _0x3b3f52.key === '-' || _0x3b3f52.key === '0') &&
      _0x3b3f52.preventDefault()
    _0x3b3f52.ctrlKey && _0x3b3f52.key.length === 1 && _0x3b3f52.preventDefault()
  }
  function preventScrollZoom(_0x3f6721) {
    _0x3f6721.ctrlKey && _0x3f6721.preventDefault()
  }
  document.addEventListener('DOMContentLoaded', () => {
    lockZoom()
    document.addEventListener('wheel', preventScrollZoom, { passive: false })
    document.addEventListener('keydown', disableZoom)
    document.addEventListener('keypress', disableZoom)
  })
  