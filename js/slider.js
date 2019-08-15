$(document).ready(function(){

	/*
	$('.paginacion').append('<li><span class="fa fa-circle"></span></li>');
	$('.paginacion').append('<li><span class="fa fa-circle"></span></li>');
	$('.paginacion').append('<li><span class="fa fa-circle"></span></li>');
	$('.paginacion').append('<li><span class="fa fa-circle"></span></li>');
	*/

	var imgPos = 1;
	var imgItems = $('.slider li').length;

	for (var i = 0; i < imgItems; i++) {
		$('.paginacion').append('<li><span class="fa fa-circle"></span></li>');
	}

	$('.slider li').hide();
	$('.slider li:first').show();
	$('.paginacion li:first').css({"color":"#cd6efe"});

	$('.paginacion li').click(paginacion);
	$('.derecha span').click(siguiente);
	$('.izquierda span').click(anterior);


	function paginacion(){
		var paginacionPos = $(this).index()+1;
		$('.slider li').hide();
		$('.slider li:nth-child('+ paginacionPos +')').fadeIn(1500);
		/*umpteenth child == enesimo hijo*/

		$(".paginacion li").css({"color":"#858585"});
		$(this).css({"color":"#cd6efe"});

		imgPos = paginacionPos;
	}

	function siguiente(){
		if (imgPos >= imgItems) {
			imgPos = 1;
		}else{
			imgPos++;
		}

		$(".paginacion li").css({"color":"#858585"});
		$('.paginacion li:nth-child('+ imgPos +')').css({"color":"#cd6efe"});

		$('.slider li').hide();
		$('.slider li:nth-child('+ imgPos +')').fadeIn(1500);
	}

});