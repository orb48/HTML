$(document).ready(function() {
	function setRowsNumbers() {
		$(".contacts-table").find("tbody").find("tr").each(function(i, tr) {
			$(tr).find("td:eq(1)").text(i + 1);
		});
	}

	$(".check-all").click(function() {
		if ($(".check-all").is(":checked")) {
			$(":checkbox").prop("checked",true);
		} else {
			$(":checkbox").prop("checked",false);
		}
	});

	$(".delete-all-checked").click(function() {
		$.confirm({
			boxWidth: "30%",
			useBootstrap: false,
			title: "Удалить выбранный контакт",
			content: "Вы уверены, что вы хотите удалить выбранные контакты?",
			buttons: {
				'Да': {
					class: "red medium",
					action: function(){
						$("input:checked").closest("tr.body-table").remove();
						$(".check-all").prop("checked", false);
						setRowsNumbers()
					}
				},
				'Нет': {
					class: "green medium",
					action: function(){}
				}
			}
		});
	});
});