$(function(){
	$('a[href*=\\#]:not([href=\\#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            var h;
            if(window.innerWidth > 896){
				h = $('#gNavi').outerHeight();
            }else{
				h = $('#gHeader').outerHeight();
            }
			if ($target.length) {
				if($(this).parents('.menuBox').length){
					setTimeout(function(){
						var targetOffset = $target.offset().top - h;
						$('html,body').animate({scrollTop: targetOffset}, 1000);
					},100);
				}else{
					var targetOffset = $target.offset().top - h;
					$('html,body').animate({scrollTop: targetOffset}, 1000);
				}
				return false;
			}
		}
	});
		
	$(window).scroll(function(){
		if($(window).scrollTop() > 0){
			$('#pageTop').fadeIn();
		}else{
			$('#pageTop').fadeOut();
		}
	});
});


//Splash
$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');
  $("#splash_logo").delay(1200).fadeOut('slow');
});


//Anchor link Bug Fix
$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 60;
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});


//Window Reload
$(window).on("orientationchange", function() {
	window.location.reload();
});