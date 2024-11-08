/*$(document).ready(function(){
	$(".indexnav ul").find("a").click(function(){
		var linkhref=$(this).attr("href");
		$("html body").animate({
			scrollTop:$(linkhref).offset().top}.1000)
		})
	})
})*/


$(document).ready(function(){
	setbinding();
});
function setbinding(){
	$(".indexnav ul a").click(function(e){
		var sectionId= e.currentTarget.id+"section";
		$("html body").animate({
			scrollTop:$("#"+sectionId).offset().top
		})

	})
}