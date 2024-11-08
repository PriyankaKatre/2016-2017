$(document).ready(function(){
	/*navigation hover*/

	$("li").click(function(){
		$("li").removeClass("activetab");
		$(this).addClass("activetab");
	});

 /*navigation hover*/

            $("li").hover( function(){
            	var index =$(this).index();
            	var liWidth=["250px", "250px", "250px", "250px"];
            	var positionLeft=["-10px", "250px", "530px", "785px"]
            	$(".hoveranimation").animate({"width":liWidth[index],"left":positionLeft[index]});
            })

	/*image slider*/
	$("#slideshow > a:gt(0)").hide();

            setInterval(function() {
              $('.slideshow > a:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('.slideshow');
            },  2000);

            /* page scroll*/

			$(".indexnav").click(function(){
					$(".indexPage").slideDown(1500);
				});


			$(".portfolionav, .seeMyWork").click(function(){
					$(".indexPage").slideUp(2000);
					$(".portfolio").slideDown(2000);
				});

			$(".aboutnav").click(function(){
					$(".indexPage, .portfolio").slideUp(2000);
					$(".about").slideDown(2000);
				});

			$(".contactnav").click(function(){
					$(".indexPage, .portfolio, .about").slideUp(3000);
					$(".contactInfo").slideDown(3000);
				});

			$(".goToTop").click(function(){
					$("body,html").animate({scrollTop:0}, 1000);
				});

});