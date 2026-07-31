import TypeIt from 'typeit'

// =========== Typing Carousel ================
document.addEventListener('DOMContentLoaded', () => {
  const $ul = document.getElementById('typing-carousel-data')?.children
  if ($ul == null || $ul.length === 0) return

  const strings = Array.from($ul).map($el => $el.textContent)

  let typeItInstance = new TypeIt('#typed', {
    speed: 100,
    deleteSpeed: 100,
    lifeLike: false,
    breakLines: false,
    cursorChar: "|",
    waitUntilVisible: true,
    html: false,
    loop: true
  })

  strings.forEach((string) => {
    typeItInstance = typeItInstance
      .type(string)
      .pause(1500)
      .delete(string.length)
      .pause(400)
  })

  typeItInstance.go()
})
