$(function(){
	var t = cnt = 0;
	var aAni = '';
	var portfolioTop = 0;
	
	
	$('.smoothBtn').on({
		click : function(){
			aAni = $(this).attr('href');
			$('html, body').stop().animate({scrollTop : $(aAni).offset().top - 67},1000);
		}
	});
	
	
	///////////////////////////////////////////////////////
	
	$(window).scroll(function(){
		
		if($(window).scrollTop() > 60){
			
			$('#header').addClass('addFixed');
			$('#header>div>div').addClass('addFixed');
		}
		else {
			
			$('#header').removeClass('addFixed');
			$('#header>div>div').removeClass('addFixed');
		}

		if( $(window).scrollTop() > $('#section2').offset().top-300 ){
			$('.content-portfolio').eq(0).stop().animate({marginTop:0, opacity:1},1000);
		}
		
		showContent();
		
	});	
	
	
	//////////////////////////////////////////////
	function showContent(){
		
		if( $(window).scrollTop() > $('.content-portfolio').eq(cnt).offset().top){
			$('.content-portfolio').eq(cnt+1).stop().animate({marginTop:0, opacity:1},1000);
			cnt++;
		}
	}
	
	

	
	
});