$(document).ready(function() {
	var sliders = $("td.request-col .slider");
	var inputs = $("td.value-slider-col .value");

	sliders.each(function() {
		var handle = $(this).closest("tr").find("#custom-handle");
		$(this).slider({
			min: 0,
			max: 1000,
			create: function() {
				handle.text($(this).slider("value"));
			},
			slide: function(event, ui){
				if (ui.value > 100) {
					$(this).slider("option", "step", 100); 
					$(this).closest("tr").find("input.value").val(ui.value);
					handle.text(ui.value);
				} else {
					$(this).slider("option", "step", 10); 
					$(this).closest("tr").find("input.value").val(ui.value);
					handle.text(ui.value);
				}
				
			},
			stop: function(event, ui){
				if (ui.value > 100) {
					$(this).slider("option", "step", 100); 
					$(this).closest("tr").find("input.value").val(ui.value);
					handle.text( ui.value );
				} else {
					$(this).slider("option", "step", 10); 
					$(this).closest("tr").find("input.value").val(ui.value);
					handle.text( ui.value );
				}
			}
		});

		inputs.each(function(index) {
		
			$(this).keypress(function(e) {
				if (e.which < 48 || e.which > 57) {
					return false;
				}
			});
			$(this).keyup(function(){
				var handle = $(this).closest("tr").find(".slider").closest("tr").find("#custom-handle");
				var value = $(this).val();
				if((value < 100 && value%10 === 0) || (value%100 === 0 && value >= 100 && value <= 1000)) {
					handle.text(value);
					$(this).val(value);
					$(this).closest("tr").find(".slider").slider("value", value);
				}
			});
		});
	});
});

