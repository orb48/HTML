$(document).ready(function() {

	$(".add-contact-button").click(function() {

		function setRowsNumbers() {
			$(".contacts-table").find("tbody").find("tr").each(function(i, tr) {
				$(tr).find("td:eq(0)").text(i + 1);
				$(tr).find("td:eq(0)").css("text-align", "center");
			});
		}

		//вытащить данные из формы

		var lastName = $(".last-name").val();
		var firstName = $(".first-name").val();
		var phone = $(".phone").val();

		//проверить данные

		var array = [lastName, firstName, phone];
		var fieldEmpty = 0;
		$("form").find("input").each(function() {// проверяем каждое поле в форме
                for(var i = 0; i < array.length; ++i){ // если поле присутствует в списке обязательных
					if(!$(this).val()){// если в поле пустое
						$(this).css("border", "red 1px solid");   
						$(this).attr("placeholder", "Введите данные");
						fieldEmpty = 1;
                    } else{
						$(this).css("border", "1px solid #A9A9A9");// устанавливаем рамку обычного цвета
                    }            
                }
        });
		if(fieldEmpty === 1) {
			return;
		}

		//добавить в таблицу строку с данными

		var tr = $("<tr><td></td><td></td><td></td><td></td><td><button class = 'delete-button' type = 'button'> X </button></td></tr>");
		tr.find("td:eq(1)").text(lastName);
		tr.find("td:eq(2)").text(firstName);
		tr.find("td:eq(3)").text(phone);
		tr.find("td:eq(4)").css("text-align", "center");

		tr.find(".delete-button").click(function() {
			$(this).closest("tr").remove();
			setRowsNumbers();
		});

		$(".contacts-table").find("tbody").append(tr);
		setRowsNumbers();

		$(".add-contact-form").find("input").val("");
		$("body").find("div.notification").text("");
		$("input").attr("placeholder", "");
	})
});
