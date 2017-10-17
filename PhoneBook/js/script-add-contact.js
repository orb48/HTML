$(document).ready(function() {

	$(".add-contact-button").click(function() {

		function setRowsNumbers() {
			$(".contacts-table").find("tbody").find("tr").each(function(i, tr) {
				$(tr).find("td:eq(1)").text(i + 1);
			});
		}

		//вытащить данные из формы

		var lastName = $(".last-name").val();
		var firstName = $(".first-name").val();
		var phone = $(".phone").val();

		//проверить данные

		var array = [lastName, firstName, phone];
		var fieldEmpty = false;
		$("form").find("input").each(function() {// проверяем каждое поле в форме
			for(var i = 0; i < array.length; ++i){ // если поле присутствует в списке обязательных
				if(!$(this).val()){ // если поле пустое
					$(this).css("border", "red 1px solid");   
					$(this).attr("placeholder", "Введите данные");
					fieldEmpty = true;
                } else{
					$(this).css("border", "1px solid #A9A9A9");// устанавливаем рамку обычного цвета
                }            
            }
        });
		if(fieldEmpty === true) {
			return;
		}

		//добавить в таблицу строку с данными

		var tr = $("<tr class='body-table'><td><input class = 'check-contact' type='checkbox'></td><td></td><td></td><td></td><td></td><td><button class = 'delete-button' type = 'button'> X </button></td></tr>");
		tr.find("td:eq(2)").text(lastName);
		tr.find("td:eq(3)").text(firstName);
		tr.find("td:eq(4)").text(phone);

		tr.find(".delete-button").click(function() {
			var elem = $(this);
			$.confirm({
				title     : "Delete Contact",
				buttons   : {
					Yes   : {
						action: function(){
							$(elem).closest("tr").remove();
							setRowsNumbers();
						}
					},
					No    : {
						action: function(){}
					}
				}
			});
		});

		$(".contacts-table").find("tbody").append(tr);
		setRowsNumbers();

		$(".add-contact-form").find("input").val("");
		$("body").find("div.notification").text("");
		$("input").attr("placeholder", "");
	});
});
