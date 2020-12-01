$(function () {
  // 전체메뉴
  var hamburger = $('.hamburger')
  var close = $('.close')
  var menu = $('.menu')
  hamburger.click(function () {
    menu.show()
  })
  close.click(function () {
    menu.hide()
  })
})
