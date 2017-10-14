$(document).ready(function() {
	var sliders = $("td.request-col #slider");
	var inputs = $("td.value-slider-col .value");
	sliders.each(function() {
		$(this).empty().slider({
			min: 0,
			max: 1000,
			step: 100,
			slide: function(event, ui){
				$("input.value").val(ui.value);
			},
			stop: function(event, ui){
				$("input.value").val(ui.value);
			}
		});

		inputs.each(function(index) {
			$(this).change(function(){
				var value = $(this).val();
				$(this).val(value);
				$("#slider").slider("value", value);
			});
		});
	});
});

