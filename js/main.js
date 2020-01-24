/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){
   // mainJS();
    /* start typed element */
    //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
    var subElementArray = $.map($('.sub-element'), function(el) { return $(el).text(); });    
    $(".element").typed({
        strings: subElementArray,
        typeSpeed: 30,
        contentType: 'html',
        showCursor: false,
        loop: true,
        loopCount: true,
    });
    /* end typed element */

    /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
    ---------------------------------------------------------------------------------*/ 
    $('.templatemo-nav').singlePageNav({
        offset: $(".templatemo-nav").height(),
        filter: ':not(.external)',
        updateHash: false
    });

    /* start navigation top js */
    $(window).scroll(function(){
        if($(this).scrollTop()>58){
            $(".templatemo-nav").addClass("sticky");
        }
        else{
            $(".templatemo-nav").removeClass("sticky");
        }
    });
    
    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    /* end navigation top js */

    $('body').bind('touchstart', function() {});

    /* wow
    -----------------*/
    new WOW().init();
});

/* start preloader */
$(window).on('load', function() {
    $('#bodyContent').hide();
    setTimeout(function() { 
	  
	  $('.preloader').fadeOut('slow', function(){ 
		$(this).remove();
		//$('body').removeClass('preloadBody');
        $('#bodyContent').show();
        // $('#bodyContent').attr('height','0px');
        //mainJS();
        // Show animated elements
        $('.contentOverlay').on('hover',function(){
            $('.content-image i').hide();
        })
        //$('.content-image i').show();

        animateElements();
        $(window).scroll(animateElements);
        textSlider(); 
	  });
	  
	}, 2000); 
	
	
  });
/* end preloader */


  /*  nav bar */
  ;(function($) {
    "use strict";
    $(document).ready(function() {
        $(function(){
            $.scrollIt();
          });
        $('#access').on('touchstart click', '.skip-link', function(event) {
            $(this).toggleClass('focus');
            $($(this).attr('href')).toggleClass('target');
            event.preventDefault();
        });
    });
})(jQuery);
/* end nav bar */

// //////////////////// progress bar /////////////////////////

    function animateElements() {
        $('.progressbar').each(function () {
            var elementPos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var percent = $(this).find('.circle').attr('data-percent');
            var percentage = parseInt(percent, 10) / parseInt(100, 10);
            var animate = $(this).data('animate');
            if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
                $(this).data('animate', true);
                $(this).find('.circle').circleProgress({
                    startAngle: -Math.PI / 2,
                    value: percent / 100,
                    thickness: 10,
                    fill: {
                        color: 'rgba(255, 182, 51, 1)'
                    }
                }).on('circle-animation-progress', function (event, progress, stepValue) {
                    $(this).find('div').text((stepValue*100).toFixed(1) + "%");
                }).stop();
            }
        });
    }

  /////////////////////////// text slide   /////////////////////
  function textSlider(){
    $('.pitem').hide();
    $('.owl-carousel .pitem:gt(0)').hide();
    setInterval(function(){
        $('.pitem').addClass('align-center'); 
        $('.pitem').addClass('textBold');
        $('.owl-carousel  :first-child').next('.pitem').fadeIn(1000).end().appendTo('.owl-carousel');
      $('.owl-carousel  :first-child').fadeOut(5800);
      
  }, 6000);
    
  }  


////////////////////////////////////////////////////////////////////


/////////////  rain 0000011111 /////////// 
function mainJS(){
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var H = window.innerHeight;
	var W = window.innerWidth;
	
	canvas.height = H;
	canvas.width = W;
	
	var char = "010010101010110100101011010110101011";
	char = char.split("");
	
	var fontSize = 20;
	var columns = W/fontSize;
	var decY = [];
	var active = 1;
	
	for(var n = 0; n < columns; n++)
		decY[n] = Math.round(Math.random() * (H/10)); 
	
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, W, H);
	function draw()
	{
		ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
		ctx.fillRect(0, 0, W, H);
		
		ctx.fillStyle = "#0F5";  //"#FFB633";
		ctx.font = fontSize + "px Matrix";
	
		for(var i = 0; i < decY.length; i++)
		{
			var text = char[Math.floor(Math.random()*char.length)];
			ctx.fillText(text, i*fontSize, decY[i]*fontSize);
			if(decY[i]*fontSize > H && Math.random() > 0.98){
				decY[i] = 0;
			}
	
			decY[i]++;
		}
	}
	function cursor(){
		c = document.getElementById("cursor");
		console.log(c.style.display.value);
		if(active == 1){
			c.style.display = 'none';
			active = 0;
		}else{
			c.style.display = 'block';
			active = 1;
		}
	}
	
	setInterval(draw,72);
	setInterval(cursor, 500);
  }
///////////// end rain 0000011111 /////////// 