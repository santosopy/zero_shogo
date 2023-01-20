$(function () {

    // offset anchor #
    if (window.matchMedia('(max-width: 1024px)').matches){
        $('a[href^="#"]').click(function(){ // 通常のクリック時
            var href= $(this).attr("href"); // ページ内リンク先を取得
            var target = $(href);
            var position = target.offset().top - 80;
            $('body,html').stop().animate({scrollTop:position}, 500); // スクロール速度ミリ秒
            return false; // #付与なし、付与したい場合は、true
        })
    }
})