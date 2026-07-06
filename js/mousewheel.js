window.onload = function(){
	var Delta = 0;
	
	$('.section').each(function(index){
		$(this).on('mousewheel DOMMouseScroll', function(event){
			
			event.preventDefault();
			
			// 파이어폭스 예외처리
			if(window.navigator.userAgent.toUpperCase().indexOf('FIREFOX') > -1){
				Delta = -(event.detail)*40;	
			}
			else{	
				Delta = event.originalEvent.wheelDelta;
			}
			
			
			// console.log(window.navigator.userAgent.toUpperCase().indexOf('FIREFOX'));
			// console.log(Delta);
			
		
			//next()
			if(Delta < 0){	
				if(index < $('.section').length-1){
					$('html, body').stop().animate({scrollTop : $(this).next().offset().top},600);
				}
			}
			//prev()
			else {
				if(index > 0){
					$('html, body').stop().animate({scrollTop : $(this).prev().offset().top},600);
				}
				
			}
			
		});
	});
}
