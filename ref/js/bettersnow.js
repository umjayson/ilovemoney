;(function () {
  const _0x4c5dbc = ['*'],
    _0x312d14 = () => {
      const _0x272e72 = document.createElement('style')
      _0x272e72.textContent =
        '\n          @keyframes snowflakes-fall {\n              0% { top: -10%; }\n              100% { top: 100%; }\n          }\n          @keyframes snowflakes-shake {\n              0%, 100% { transform: translateX(0); }\n              50% { transform: translateX(80px); }\n          }\n          .snowflake {\n              color: rgb(255, 255, 255);\n              font-family: Arial, sans-serif;\n              text-shadow: 0 0 5px #000;\n              font-size: 1em;\n              position: fixed;\n              top: -10%;\n              z-index: 9999;\n              user-select: none;\n              cursor: default;\n              animation-name: snowflakes-fall, snowflakes-shake;\n              animation-duration: 10s, 3s;\n              animation-timing-function: linear, ease-in-out;\n              animation-iteration-count: infinite, infinite;\n              animation-play-state: running, running;\n          }\n      '
      document.head.appendChild(_0x272e72)
    },
    _0x360f38 = (_0x43eb27) => {
      const _0x398775 = document.createElement('div')
      _0x398775.className = 'snowflake'
      _0x398775.textContent = _0x4c5dbc[_0x43eb27 % _0x4c5dbc.length]
      _0x398775.style.left = _0x43eb27 * 10 + 1 + '%'
      _0x398775.style.animationDelay =
        (_0x43eb27 % 2 === 0 ? _0x43eb27 : Math.random() * 10) +
        's, ' +
        Math.random() * 3 +
        's'
      document.body.appendChild(_0x398775)
    },
    _0x3b572b = () => {
      _0x312d14()
      for (let _0x3a4d63 = 0; _0x3a4d63 < 11; _0x3a4d63++) {
        _0x360f38(_0x3a4d63)
      }
    }
  document.addEventListener('DOMContentLoaded', _0x3b572b)
})()
