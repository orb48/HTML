$(document).ready(function() {

	$(".apply-filter").click(function() {
		var inputValue = $(".find-in-table").val().toLowerCase();
		$(".contacts-table").find("tbody").find("tr").each(function() {
			var findRow = false;
			var row = $(this);
			row.find("td").each(function() {
				if (inputValue === $(this).text().toLowerCase()) {
					findRow = true;
				}
			});
			if (findRow) {
				//row.css('display', '');
			} else {
				//row.css('display', 'none');
				row.hide();
			}
		});
	});
	
	$(".reset-filter").click(function() {
		var inputValue = $(".find-in-table").val().toLowerCase();
		$(".contacts-table").find("tbody").find("tr").each(function() {
			$(this).show();
		});
		$("input.find-in-table").val("");
	});
	
});