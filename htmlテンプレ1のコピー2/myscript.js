$(function(){
	var loader = $('.loader-wrap');

	//ページの読み込みが完了したらアニメーションを非表示
	$(window).on('load',function(){
		loader.fadeOut();
	});

	//ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
	setTimeout(function(){
		loader.fadeOut();
	},3000);
});


/*  slick  */
$(function () {
  $('.single-item').slick({
    // 矢印キーでスライドを切り替えるか [初期値:true]
    accessibility: false,
    // 前ボタンの要素を変更 [初期値:'<button type="button" class="slick-prev">Previous</button>']
    prevArrow: '<img src="common/images/common/arrow_before.png" class="slide-arrow prev-arrow">',
    // 次ボタンの要素を変更 [初期値:'<button type="button" class="slick-next">Next</button>']
    nextArrow: '<img src="common/images/common/arrow_next.png" class="slide-arrow next-arrow">',
    // レスポンシブ設定の基準（window/slider/min） [初期値:'window']
    respondTo: 'window',
    // レスポンシブ設定
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],
  });
});


/* topへ戻る */
$(function () {
  var scrollTop = $(".scrollTop");
  $(window).scroll(function () {
    var topPos = $(this).scrollTop();
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  });

  $(scrollTop).click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

/*スムーススクロール*/
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});