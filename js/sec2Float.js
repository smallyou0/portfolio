$(function(){

	floatFn();
	
	function floatFn(){
		$('.content-portfolio').each(function(index){

			if( index%2 == 0){
				$(this).find('.content-img-wrap').css({float:'left'});
				$(this).find('.content-txt-wrap').css({float:'right', marginLeft:5+'%'});
			}
			else if( index%2 == 1){
				$(this).find('.content-img-wrap').css({float:'right'});
				$(this).find('.content-txt-wrap').css({float:'left', marginRight:5+'%'});
			}
			
		});
	}
	
	

	
	
});