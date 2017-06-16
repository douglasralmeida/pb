/*!
 * Recurso Botao Volta Ao Topo
 * Douglas Rodrigues de Almeida
 * douglasralmeida@live.com
 */

$(document).ready(function($){
    "use strict";
	$(window).scroll(function(){
		if (window.innerWidth >= 768) {
			if ($(window).scrollTop() > 130) {				
				$('#back-to-top').fadeIn();
			} else {				
				$('#back-to-top').fadeOut();
			}
		} else {
			$('#back-to-top').fadeOut();
		}
	})
});

$('#volta-ao-topo').click(function (e) {
	e.preventDefault();
    $('body,html').animate({
    	scrollTop: 0
    }, 800);	
});