$(document).ready(function(){
	$("#slideshow > a:gt(0)").hide();

            setInterval(function() {
              $('.slideshow > a:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('.slideshow');
            },  2000);

$(".indexnav").click(function(){
		$(".indexPage").slideDown(1000);
	});

$(".portfolionav").click(function(){
		$(".indexPage").slideUp(1000);
		$(".portfolio").slideDown(1000);
	});

$(".aboutnav").click(function(){
		$(".indexPage, .portfolio").slideUp(1000);
		$(".about").slideDown(1000);
	});

$(".contactnav").click(function(){
		$(".indexPage, .portfolio, .about").slideUp(3000);
		$(".contactInfo").slideDown(3000);
	});

});