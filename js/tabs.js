$(document).ready(function(){
	$(".tabs li a:first").addClass('activo');
	$(".secciones article").hide();
	$(".secciones article:first").show();

	$(".tabs li a").click(function(){
		$(".tabs li a").removeClass('activo');
		$(this).addClass('activo');
		$(".secciones article").hide();

		var tabActivo = $(this).attr('href');
		console.log(tabActivo);
		$(tabActivo).show();
		return false;
	});
});