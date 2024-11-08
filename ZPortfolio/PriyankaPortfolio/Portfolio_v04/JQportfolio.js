$(document).ready(function(){

	/*image slider*/
	$("#slideshow > a:gt(0)").hide();

            setInterval(function() {
              $('.slideshow > a:first')
                .fadeOut(2000)
                .next()
                .fadeIn(2000)
                .end()
                .appendTo('.slideshow');
            },  4000);


            /* page scroll*/

			$(".indexnav").click(function(){
					$(".indexPage").slideDown(1500);
				});


			$(".portfolionav, .seeMyWork").click(function(){
					$(".indexPage").slideUp(2000);
					$(".portfolioPage").slideDown(2000);
				});

			$(".aboutnav").click(function(){
					$(".indexPage, .portfolioPage").slideUp(2000);
					$(".aboutPage").slideDown(2000);
				});

			$(".contactnav").click(function(){
					$(".indexPage, .portfolioPage, .aboutPage").slideUp(3000);
					$(".contactInfo").slideDown(3000);
				});

			$(".goToTop").click(function(){
					$("body,html").animate({scrollTop:0}, 1000);
				});

});