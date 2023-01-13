$(function () {

    // fixed header
    $(window).scroll(function () {
        var height = $(window).scrollTop()
        if (height > 60) {
            $("header").addClass("head_sticky")
        } else {
            $("header").removeClass("head_sticky")
        }
    })

    // backtotop
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn()
        } else {
            $('#scroll').fadeOut()
        }
    })
    $(window).on("load", function () {
        $('#scroll').click(function () {
            $("html, body").animate({ scrollTop: 0 }, 600)
            return false
        })
    })
})