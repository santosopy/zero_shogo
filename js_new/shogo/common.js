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
    
    // side header
    function MenuScroll() {
        var hsize = $(window).height()
        $(".side").css("cssText", `height:${hsize}px;`)
    }
    MenuScroll()
    $(window).on('load resize', MenuScroll)

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