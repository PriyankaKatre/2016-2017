$(document).ready(function(){
	$(".slide img").first().addClass("imgActive");
	$(".slide img").hide();
	$(".imgActive").show();
	$("#imgright").click(function(){
		$(".imgActive").removeClass("imgActive").addClass("oldActive");
		if($(".oldActive").is(":last-child")) {
			$(".slide img").first().addClass("imgActive");
		}
		else{
			$(".oldActive").next().addClass("imgActive");
		}
		$(".oldActive").removeClass("oldActive");
		$(".slide img").fadeOut(500);
		$(".imgActive").fadeIn(500);
	})
	$("#imgleft").click(function(){
		$(".imgActive").removeClass("imgActive").addClass("oldActive");
		if($(".oldActive").is(":first-child")) {
			$(".slide img").last().addClass("imgActive");
		}
		else{
			$(".oldActive").prev().addClass("imgActive");
		}
		$(".oldActive").removeClass("oldActive");
		$(".slide img").fadeOut(500);
		$(".imgActive").fadeIn(500);
	});

})