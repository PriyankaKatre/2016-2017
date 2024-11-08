$(document).ready(function(){
	$("header, .indexnav").show()
	$("#portfolio").click(function(){
		$("#indexsection").slideUp(1000);
		$("#portfoliosection").slideDown(1000);
	});
	$("#index").click(function(){
		$("#indexsection").slideDown(1000);
	});
	$("#whatido").click(function(){
		$("#indexsection, #portfoliosection").slideUp(1000);
		$("#whatidosection").slideDown(1000);
	});
	$("#contact").click(function(){
		$("#indexsection, #portfoliosection, #whatidosection").slideUp(1000);
		$("#contactsection").slideDown(1000)
	});
})