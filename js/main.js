$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // click event on toggle menu
    $toggleCollapse.click(function (e) { 
        e.preventDefault();

        $nav.toggleClass('collapse');

        
    })

    // initialize owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        // specification to scroll carousel
        loop:true,
        autoplay:true,
        autoplayTimeout: 30000,
        dots:false,
        nav:true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')]
    });

    // click to scroll to top of page
    $('.move-up').click(function(){
        $('html,body').animate({
            scrollTop:0
        }, 1000);
    })

});