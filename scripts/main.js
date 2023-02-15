$(".nav-button li").click(function () {
  var text = $(this).text();
  $(".nav-button li").removeClass("active");
  $(this).addClass("active");
  switch (text) {
    case "1":
      $(".ads .content .title").html("豊橋駅ビル<br />カルミア");
      $(".ads .content .description").text(
        "毎日暮らしのサポート・生活ステーション"
      );
      break;
    case "2":
      $(".ads .content .title").html("おはようございます。");
      $(".ads .content .description").text(
        "毎日暮らしのサポート・生活ステーション"
      );
      break;
    case "3":
      $(".ads .content .title").html("こんにちは");
      $(".ads .content .description").text(
        "毎日暮らしのサポート・生活ステーション"
      );
      break;
    case "4":
      $(".ads .content .title").html("こんばんは");
      $(".ads .content .description").text(
        "毎日暮らしのサポート・生活ステーション"
      );
      break;
    case "5":
      $(".ads .content .title").html("さようなら");
      $(".ads .content .description").text(
        "毎日暮らしのサポート・生活ステーション"
      );
      break;
  }
});
$("#scroll-to-top").click(function(){
  $('html, body').animate({scrollTop:0}, 'slow');
});
$("header .banner-right .logo-menu .menu").click(function(){
  $("body").toggleClass("show-menu");
});
$('.slider-items').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 3
});
$('#search-form').submit(function(){return false;});