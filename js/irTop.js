$(document).ready(function(){
	$(".irTop").hide();

	$(window).scroll(function(){
		if ($(this).scrollTop()>100) {
			$(".irTop").fadeIn();
		}else{
			$(".irTop").fadeOut();
		}
	});

	$(".irTop").click(function(){
		$("body, html").animate({"scrollTop":"0"},1000);
	});
});