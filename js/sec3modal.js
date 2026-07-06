$(function(){
	
	var imgSrc = '';
	var imgH2 = '';
	var txt = ['','','',''];
	
	
	$('.design').each(function(index){
		$(this).on({
			click : function(){
				if($(window).innerWidth() >= 700){
					// 설정값 초기화
					$('#modal>div').css({ marginTop:-400, marginLeft:-325, width:650, height:800});
					$('.imgBox').css({ margin:'0 auto', width:500, height:700, overflowY:'scroll' });
					$('.imgBox>.cardImg').hide(0);
					
					imgSrc = $(this).find('img').attr('src');
					imgH2 = $(this).find('h3').text();
					
					if(index==2){
						$('.imgBox>.cardImg').show(0);
					}
					else if(index==3){
						$('#modal>div').css({ marginTop:-350, marginLeft:-600, width:1200, height:700});
						$('.imgBox').css({ margin:'0 auto', width:1100, height:650, overflowY:'hidden' });
					}
					
					$('#modal').show(0);
					$('.titleBox').text(imgH2);
					$('.imgBox>img').attr('src', imgSrc);
				}
				
			}
		});
	});
	
	$('.sec3CloseBtn').on({
		click : function(){
			$('#modal').hide(0);
		}
	});
	
	

});