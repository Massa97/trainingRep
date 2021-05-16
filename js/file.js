$(document).ready(function(){
    $('i.icon').click(function(){
        $('.nav-list').slideToggle(2000);
    });
    // When Scroll Body.. Sticky Navbar
    
    
    $(window).scroll(function(){
        var sc = $(window).scrollTop();
        if(sc > 50){
            $('header').addClass('sticky');
        }else{
            $('header').removeClass('sticky');
        }
        if(sc > 500){
            $('.scrollTop').fadeIn();
        }
        else{
            $('.scrollTop').fadeOut();
        }
      
    });
    $('.buttons button').click(function(){
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
        var filter = $(this).attr('id');
        if(filter === 'all'){
            $('.images > div').fadeIn();
        }else {
            $('.images > div').fadeOut();
            $('.images').contents().filter('.' + filter).fadeIn();
        }
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
   $('.c-panel li').click(function(){
      $(this).addClass('active_btn').siblings().removeClass('active_btn');
      var p = $(this).data('role')
      $('.content >  div').hide();
      $('.content').contents().filter('#'+ p).fadeIn();
   });

//    $('.pop').magnificPopup({
//        type='iframe'
//    });
    $('.slick-item').slick({
        nextArrow: false,
        prevArrow: false
    });  
    $('.scrollTop').click(function(){
        $('body,html').animate({
            scrollTop:0
        },500);
    });
    $('.list a').click(function(){
        $('body,html').animate({
            scrollTop: $($(this).attr('href')).offset().Top() - 80

        });
    });

});
