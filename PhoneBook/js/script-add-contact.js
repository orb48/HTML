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

		var phoneExist = false;
		$("tr.body-table").each(function() {
			var inputPhone = $(this).find("td:eq(4)").text();
			if (phone === inputPhone) {
				$.confirm({
					boxWidth: "30%",
					useBootstrap: false,
					title: "",
					content: "Контакт с таким номером уже существует",
					type: "orange",
					buttons: {
						'Изменить номер': {
							btnClass: "btn-orange",
							action: function(){
								$("input.phone").addClass("red-border"); 
							}
						},
						'Закрыть': function () {
						}
					}
				});
				$("input.phone").addClass("red-border"); 
				phoneExist = true;
			} else {
				$("input.phone").removeClass("red-border");
			}
		});
		if (phoneExist) {
			return;
		}

		var array = [lastName, firstName, phone];
		var fieldEmpty = false;
		$("form").find("input").each(function() {// проверяем каждое поле в форме
			for (var i = 0; i < array.length; ++i){ // если поле присутствует в списке обязательных
				if (!$(this).val()){ // если поле пустое
					$(this).addClass("red-border"); 
					$(this).attr("placeholder", "Введите данные");
					fieldEmpty = true;
                } else {
					$(this).removeClass("red-border");
					$(this).addClass("standard-border");
                }            
            }
        });
		if (fieldEmpty) {
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
				boxWidth: "30%",
				useBootstrap: false,
				title: "Удалить выбранный контакт",
				content: "Вы уверены, что вы хотите удалить выбранные контакты?",
				buttons: {
					'Да': {
						action: function(){
							$(elem).closest("tr").remove();
							setRowsNumbers();
						}
					},
					'Нет': {
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
