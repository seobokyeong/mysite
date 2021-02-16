$(function () {
  // 전체메뉴
  // var hamburger = $('.hamburger')
  // var close = $('.close')
  // var menu = $('.menu')
  // hamburger.click(function () {
  //   menu.show()
  // })
  // close.click(function () {
  //   menu.hide()
  // })
  var close = $('.close')
  close.click(function () {
    window.history.back()
  })

  // 헤더 스크립트
  var goTop = $('.go_top')
  var boyoung = $('.slick-dots')

  $(window).scroll(function () {
    var scrollTopValue = $(document).scrollTop()

    if (scrollTopValue > 580) {
      goTop.fadeIn()
      boyoung.fadeIn()
    } else {
      goTop.fadeOut()
      boyoung.fadeOut()
    }
  })

  goTop.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400)
  })
})
