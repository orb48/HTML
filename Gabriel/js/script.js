$(document).ready(function() {
	var sliders = $("td.request-col .slider");
	var inputs = $("td.value-slider-col .value");
	sliders.each(function() {
		var handle = $(this).closest("tr").find(".ui-slider-handle");
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
			$(this).keyup(function(){
				var handle = $(this).closest("tr").find(".slider").closest("tr").find(".ui-slider-handle");
				var max = $(this).closest("tr").find(".slider").slider("option", "max");
				var value = $(this).val();
				if(value > max) {
					value = max;
				}
				if(value%10 === 0){
					handle.text(value);
					$(this).val(value);
					$(this).closest("tr").find(".slider").slider("value", value);
				} else {
					$(this).change(function() {
						var roundedValue = $(this).val(Math.round($(this).val() / 10) * 10);
						handle.text(roundedValue.val());
						$(this).closest("tr").find(".slider").slider("value", roundedValue.val());
					});
				}
			});
		});
	});
});