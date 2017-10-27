$(document).ready(function() {

	$(".apply-filter").click(function() {
		var inputValue = $(".find-in-table").val().toLowerCase();
		$(".contacts-table").find("tbody").find("tr").each(function() {
			var findRow = false;
			var row = $(this);
			var isIncluded = false;
			isIncluded = $(this).text().toLowerCase().indexOf(inputValue);
			row.find("td").each(function() {
				if (isIncluded != -1) {
					findRow = true;
				}
			});
			if (findRow) {
				row.show();
			} else {
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