$(document).ready(function () {

    //*********** navbar background change from transparent to solid
    var $document = $(document),
        $element = $('.navbar'),
        navbarDefault = 'navbar-default';
    navbarTransparent = 'navbar-transparent';
    fadeInDown = 'fadeInDown';


    $document.scroll(function () {
        if ($document.scrollTop() >= 100) {
            $element.addClass(navbarDefault);
            $element.removeClass(navbarTransparent);
            $element.addClass(fadeInDown);
        } else {
            $element.addClass(navbarTransparent);
            $element.removeClass(navbarDefault);
            $element.removeClass(fadeInDown);
        }
    })

    //*********** navbar background change from transparent to solid end


    //***********smooth-scrolling
    var scrollLink = $('.scroll');
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1300)
    })
    //***********smooth-scrolling end 


    //***********highlight nav-links
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top - 50;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    })
    //***********highlight nav-links end


    //***********statistics counter animation

    $('.counter').counterUp({
        delay: 10,
        time: 8000
    });

    //***********statistics counter animation end



    //*********** for WOW.js library ie: fadeInUp

    new WOW().init();
    //*********** WOW.js library end


    //************ baguetteBox js

    baguetteBox.run('.port-items', {});
    //************ baguetteBox js end


});
