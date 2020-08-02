$(function(){

$('select').styler();

  $('.header__burger').click(function(event){
    $('.header__burger, .header__aside_menu').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.presents__slider').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.presents__info_slider',
    focusOnSelect: true,

  });

  $('.presents__info_slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.presents__slider',
    focusOnSelect: true,
    fade: true
  });


});
///////// scroll
window.addEventListener('load', function(){
  if( window.innerWidth > 900 ){
    $('.fullview').attr('id' , 'fullview');
    $("#fullview").fullView({
      dots: false,
      dotsPosition: "right",
      easing: "swing"
      // Callback
    //  onViewChange: function () {
    //    if($('#pr').hasClass('active')){
    //      $('.sn-big').addClass('active')
    //      $('.sn-big').removeClass('stay')
    //    }else if($('#form').hasClass('active')) {
    //      $('.sn-big').removeClass('active')
    //      $('.sn-big').addClass('stay')
    //    }else{
    //      $('.sn-big').removeClass('active')
    //      $('.sn-big').removeClass('stay')
    //    }
    //  }
    });

  } else {
    $('body').attr('style', 'overflow: auto');
    $('section').attr('style', 'overflow: hidden');

    $('body').scroll(function() {

        if ($(this).scrollTop()>0)
         {
            $('#logo').attr('style', 'opacity: 0');
         }
        else
         {
            $('#logo').attr('style', 'opacity: 1');
         }
     });
  }

});
