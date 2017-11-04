$(document).ready(function() {

	$(".apply-filter").click(function() {
		var inputValue = $(".find-in-table").val().toLowerCase();
		$(".contacts-table").find("tbody").find("tr").each(function() {
			var row = $(this);
			var lastName = row.find("td:eq(2)").text().toLowerCase().indexOf(inputValue);
			var firstName = row.find("td:eq(3)").text().toLowerCase().indexOf(inputValue);
			var phone = row.find("td:eq(4)").text().toLowerCase().indexOf(inputValue);
				
			var hide = false;
			if (lastName < 0 && firstName < 0 && phone < 0) {
				var hide = true;
			} 
			row.toggle(!hide);
		});
	});
	
	$(".reset-filter").click(function() {
		var inputValue = $(".find-in-table").val().toLowerCase();
		$(".contacts-table").find("tbody").find("tr").show();
		$("input.find-in-table").val("");
	});
	
});