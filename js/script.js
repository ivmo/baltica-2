var hamburger = document.getElementById('hamburger');
hamburger.onclick = function(e){
  e.preventDefault();
  hamburger.classList.toggle('hamburger--close');
  document.getElementById('main-nav__list').classList.toggle('main-nav__list--visible');
}

if ( jQuery(window).width() <= 768) {
jQuery(".main-nav__link").on('click', function() {
  jQuery("#hamburger").toggleClass("hamburger--close");
  jQuery("#main-nav__list").toggleClass("main-nav__list--visible");
});
}

// menu scroll
$(document).ready(function(){

        var $menu = $("#main-nav");
				var $height = $("#header").outerHeight()

        jQuery(window).scroll(function(){
            if ( jQuery(this).scrollTop() > $height && $menu.hasClass("main-nav") ){
                $menu.addClass("main-nav--fixed");
								jQuery(".main-nav__link").addClass("main-nav__link--fixed");
                jQuery('#header').css('margin-bottom', '79px');
            } else if(jQuery(this).scrollTop() <= $height && $menu.hasClass("main-nav--fixed")) {
                $menu.removeClass("main-nav--fixed");
								jQuery(".main-nav__link").removeClass("main-nav__link--fixed");
                jQuery('#header').css('margin-bottom', '0');
            }
        });//scroll
    });

  jQuery("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 0;
    jQuery('html,body').stop().animate({ scrollTop: jQuery(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

	jQuery(document).ready(function() {
		  Revealator.effects_padding = '-120';
			jQuery(".fancybox").fancybox();
		});

		$('.slider-for').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		  fade: true,
		  asNavFor: '.slider-nav'
		});
		$('.slider-nav').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  asNavFor: '.slider-for',
		  focusOnSelect: true
		});
