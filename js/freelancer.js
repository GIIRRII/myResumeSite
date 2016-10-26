// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });
	
	// Animate Chart
    $('.bar-chart').waypoint(function(event, direction) {

       $('#aqua').css({'visibility':'visible', 'height': '0%'}).stop().delay(200).animate({'opacity':'1', 'height':'95%'}, 1000, 'easeOutExpo');
       $('#pink').css({'visibility':'visible', 'height': '0%'}).stop().delay(400).animate({'opacity':'1', 'height':'90%'}, 1000, 'easeOutExpo');
       $('#yellow').css({'visibility':'visible', 'height': '0%'}).stop().delay(600).animate({'opacity':'1', 'height':'95%'}, 1000, 'easeOutExpo');
       $('#brown').css({'visibility':'visible', 'height': '0%'}).stop().delay(800).animate({'opacity':'1', 'height':'75%'}, 1000, 'easeOutExpo');
       $('#red').css({'visibility':'visible', 'height': '0%'}).stop().delay(1000).animate({'opacity':'1', 'height':'40%'}, 1000, 'easeOutExpo');

	}, {
	   offset: '80%',
	   triggerOnce: true
	});

})(jQuery); // End of use strict
