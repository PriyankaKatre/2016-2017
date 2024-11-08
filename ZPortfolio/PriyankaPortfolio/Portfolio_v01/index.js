$(document).ready(function(){


	$('#patterns div').click(function() {
		$(this).removeClass();
		$(this).addClass("selected");
		if ($(this).attr('id') == 'pat_1') {
			$('#body_pat').css('background-image', 'url(images/patterns/pattern_1.png)');
		};
		if ($(this).attr('id') == 'pat_2') {
			$('#body_pat').css('background-image', 'url(images/patterns/pattern_2.png)');
		};
		if ($(this).attr('id') == 'pat_3') {
			$('#body_pat').css('background-image', 'url(images/patterns/pattern_3.png)');
		};
		if ($(this).attr('id') == 'pat_4') {
			$('#body_pat').css('background-image', 'url(images/patterns/pattern_4.png)');
		};
		if ($(this).attr('id') == 'pat_5') {
			$('#body_pat').css('background-image', 'url(images/patterns/pattern_5.png)');
		};

	});
	$('#tools').click(function(){
		$('#toolsHolder').toggle(function(){
			$('#but_expand').toggle();
			$('#but_collapse').toggle();
		})
	})

	$("#colors div").click(function(){
		$("#colors div").removeClass();
		$(this).addClass("selected");
		$("#red").removeClass();
		$("#red").addClass($(this).attr('id'));
		$(".middle h1").removeClass();
		$(".middle h1").addClass($(this).attr('id'));
		$("#images #img1, #img2, #img3").removeClass();
		$("#images #img1, #img2, #img3").addClass($(this).attr('id'));
		$(".wrapper nav ul li").removeClass();
		$(".wrapper nav ul li").addClass($(this).attr('id'));
		$("#work,.maincontent #slide_show a img,#images #img1, #img2, #img3").removeClass();
		$("#work,.maincontent #slide_show a img,#images #img1, #img2, #img3").addClass($(this).attr('id'));
		$('.about ul li').removeClass();
		$('.about ul li,h1').addClass($(this).attr('id'));


		//$("#body_pat").removeClass();
		//$("#body_pat").addClass($(this).attr('id'));


	});



});

