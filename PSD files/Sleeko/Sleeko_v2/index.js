/*$(document).ready(function(){
	$(".indexnav ul").find("a").click(function(){
		var linkhref=$(this).attr("href");
		$("html body").animate({
			scrollTop:$(linkhref).offset().top}.1000)
		})
	})
})*/


$(document).ready(function(){
	/*$(".indexnav ul a").mouseover(function(){
	$(".homesection, .portsection, .whatidosection, .contactsection").css("marginTop","300px";)
	})*/
	scroll();
});
function scroll(){
	$(".indexnav ul a").click(function(e){
		event.preventDefault();

		var sectionId= e.currentTarget.id+"section";
		$(".content-wrapper").animate({
			scrollTop:$("#"+sectionId).offset().top-120
		},1000);

	})
}