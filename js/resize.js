$(function(){
	
	var winH = $(window).innerHeight();
	
	setTimeout(resizeFn,100);
	
	$(window).resize(function(){
		resizeFn();
	});
	
	function resizeFn(){
		winH = $(window).innerHeight();
		
		$('#section1').css({height:winH});
	}
	
	

	
});