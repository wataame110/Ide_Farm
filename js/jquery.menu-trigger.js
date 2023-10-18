const trigger = document.querySelector('.menu-trigger');
const gNavi = document.querySelector('#gNavi');
const headerNavi = document.querySelector('#headerNavi');

trigger.addEventListener('click', function() {
    trigger.classList.toggle('active');
    gNavi.classList.toggle('panelactive');
    headerNavi.classList.toggle('panelactive');
});



$(function () {
    var state = false;
    var scrollpos;
	$('#gNavi a, #headerNavi a').click(function(){
			$('body').removeClass('fixed').css({'top': 0});
			window.scrollTo( 0 , scrollpos );
			$('.menu-trigger').removeClass('active');
			$('#gNavi').removeClass('panelactive');
			$('#headerNavi').removeClass('panelactive');
			state = false;
		});
});

