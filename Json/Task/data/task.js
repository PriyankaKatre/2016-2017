$(document).ready(function(){
		$.getJSON("client.json",function(json){
			var data=json;
			console.log(data)
			$(".companyName").text(data.name);
			$(".phone").text(data.phone);
			$(".net_position").text(data.net_position);
			$(".Dealer_name").text(data.dealer);
			/*$(".last_login_time").text(data.last_login);*/
			var month=["Jan", "Feb", "March","Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
			var date=new Date(data.last_login)
			var formattedDate=month[date.getMonth()]+''+date.getDate()+' '+date.getHours()+':'+date.getMinutes();
			$(".last_login_time").text(formattedDate);
			$(".main_contact_name").text(data.main_contact.name)
			$(".main_contact_position").text(data.main_contact.position)
			var month=["Jan", "Feb", "March","Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
			var date=new Date(data.last_call.date)
			var formattedDate=month[date.getMonth()]+''+date.getDate()+' '+date.getHours()+':'+date.getMinutes();
			$(".last_call_time").text(formattedDate)
			$(".contact").text('('+data.last_call.contact+')')
		})
		$.getJSON("notes.json",function(json){
			var data=json;
			console.log(data)
			var month=["Jan", "Feb", "March","Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
			var date=new Date(data[0].date)
			var formattedDate=month[date.getMonth()]+''+date.getDate();
			$(".notes_date").text(formattedDate);
			$(".author").text(data[0].author);
			$(".text").text(data[0].text);
			var month01=["Jan", "Feb", "March","Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
			var date01=new Date(data[1].date)
			console.log(date01)
			var formattedDate01=month01[date01.getMonth()]+''+date01.getDate();
			console.log(formattedDate01)
			$(".notes_date1").text(formattedDate01);
			$(".author1").text(data[1].author);
			$(".text1").text(data[1].text);
		})
		$.getJSON("trade.json", function(json){
			var data=json;
			$(".id").text(data.id);
			$(".buy_amount").text(data.buy.amount);
			$(".buy_currency").text(data.buy.currency)
			$(".sell_amount").text(data.sell.amount);
			$(".sell_currency").text(data.sell.currency)
			$(".margin_percent").text(data.margin+'%')
			$(".Dealer_right_name").text(data.dealer)
		})

	})