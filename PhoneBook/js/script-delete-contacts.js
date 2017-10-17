$(document).ready(function() {
	function setRowsNumbers() {
		$(".contacts-table").find("tbody").find("tr").each(function(i, tr) {
			$(tr).find("td:eq(1)").text(i + 1);
		});
	}

	$(".check-all").click(function() {
		if($(".check-all").is(':checked')) {
			$(':checkbox').attr('checked',true);
		} else {
			$(':checkbox').attr('checked',false);
		}
	});

	$(".delete-all-checked").click(function() {
		$.confirm({
			title     : "Delete Contact",
			buttons   : {
				Yes   : {
					class : "red medium",
					action: function(){
						$("input:checked").closest("tr.body-table").remove();
						$(".check-all").prop('checked', false);
						setRowsNumbers()
					}
				},
				No    : {
					class : "green medium",
					action: function(){}
				}
			}
		});
	});
});