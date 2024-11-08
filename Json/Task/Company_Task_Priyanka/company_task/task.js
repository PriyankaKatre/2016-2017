$(document).ready(function(){
	$.getJSON("json/fulldata.json",function(json){
		var data = json;

		var date = new Date(data.client.last_login);
		var month = ["Jan", "Feb", "March","Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
		var formattedDate = month[date.getMonth()] + ' ' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();

		// Clients Data
		$(".companyName").text(data.client.name);
		$(".phone").text(data.client.phone);
		$(".net_position").text(data.client.net_position);
		$(".dealer_name").text(data.client.dealer);
		$(".last_login_time").text(formattedDate);
		$(".main_contact_name").text(data.client.main_contact.name);
		$(".main_contact_position").text(data.client.main_contact.position);
		$(".last_call_time").text(formattedDate);
		$(".contact").text('('+data.client.last_call.contact+')');

		var date = new Date(data.notes[0].date);
		var date01 = new Date(data.notes[1].date);
		var formattedDate = month[date.getMonth()]+''+date.getDate();
		var formattedDate01 = month[date01.getMonth()]+''+date01.getDate();

		// Notes Data
		for (var i = 0; i < data.notes.length; i++) {
			$('.notes').append('<p><span>'+data.notes[i].date+'</span>&nbsp;&nbsp;<span>'+data.notes[i].author+'</span>&nbsp;&nbsp;<span>'+data.notes[i].text+'</span></p>');
		}

		// Trades Data
		$(".id").text(data.trade.id);
		$(".buy_amount").text(data.trade.buy.amount);
		$(".buy_currency").text(data.trade.buy.currency);
		$(".sell_amount").text(data.trade.sell.amount);
		$(".sell_currency").text(data.trade.sell.currency);
		$(".margin_percent").text(data.trade.margin+'%');
		$(".Dealer_right_name").text(data.trade.dealer);
	});
});