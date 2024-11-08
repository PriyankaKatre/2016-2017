$(document).ready(function(){
	$(".imgmenu").click(function(){
		$(".wrapper nav ul a").slideToggle().css({'display':'block'});
		$(".active").css({'background-color':'#fff','border-radius':'30px',})
	})
})