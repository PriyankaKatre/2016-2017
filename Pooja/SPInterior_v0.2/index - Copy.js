$(document).ready(function(){

	$(".slide img").first().addClass("imgActive");
	$(".slide img:nth-child(2)").addClass("imgActive1");
	$(".slide img").hide();
	$(".imgActive").show();
	$(".imgActive1").show();
	if($(window).width()<770){
		/*$(".slide img").removeClass("imgActive1")*/
		$(".imgActive1").hide();

		}
		if($(window).width()>770){
		/*$(".slide img").addClass("imgActive1")*/
		$(".imgActive1").show();
		}
		$(window).resize(function() {
    	/*If browser resized, check width again*/
   		if ($(window).width() < 770) {
     	$(".imgActive1").hide();
    	}
    	else if($(window).width() >770) {
    	$(".imgActive1").show();
   	 }

 	});


	$("#imgright").click(function(){
		$(".imgActive").removeClass("imgActive").addClass("oldActive");
		$(".imgActive1").removeClass("imgActive1").addClass("oldActive1");
		if($(".oldActive1").is(":last-child")) {
			$(".slide img").first().addClass("imgActive");
			$(".slide img:nth-child(2)").addClass("imgActive1");
			$(".imgActive").css('margin-left','5%');
		}
		else{
			$(".oldActive").next().addClass("imgActive");
			$(".oldActive1").next().addClass("imgActive1");
			$(".imgActive").css('margin-left','5%');
		}
		$(".oldActive").removeClass("oldActive");
		$(".oldActive1").removeClass("oldActive1");
		$(".imgActive1").css('margin-left','0%');
		$(".slide img").fadeOut(0);
		$(".imgActive").fadeIn(350);
		$(".imgActive1").fadeIn(350);
		if($(window).width()<770){
		/*$(".slide img").removeClass("imgActive1")*/
		$(".imgActive1").hide();

		}
		if($(window).width()>770){
		/*$(".slide img").addClass("imgActive1")*/
		$(".imgActive1").show();
		}

	});
	$("#imgleft").click(function(){
		$(".imgActive").removeClass("imgActive").addClass("oldActive");
		$(".imgActive1").removeClass("imgActive1").addClass("oldActive1");
		if($(".oldActive").is(":first-child")) {
			$(".slide img").last().addClass("imgActive1");
			$(".slide img:nth-last-child(2)").addClass("imgActive");
			$(".imgActive").css('margin-left','5%');
		}
		else{
			$(".oldActive").prev().addClass("imgActive");
			$(".oldActive1").prev().addClass("imgActive1");
			$(".imgActive").css('margin-left','5%');
		}
		$(".oldActive").removeClass("oldActive");
		$(".oldActive1").removeClass("oldActive1");
		$(".imgActive1").css('margin-left','0%');
		$(".slide img").fadeOut(0);
		$(".imgActive").fadeIn(300);
		$(".imgActive1").fadeIn(300);
		if($(window).width()<770){
		/*$(".slide img").removeClass("imgActive1")*/
		$(".imgActive1").hide();
	}
	});
$("#owl-example").owlCarousel({
	autoPlay: true,
	slideSpeed: 500,
	items:2,
	itemsDesktop : [1699,2],
	singleItem:false

});

});