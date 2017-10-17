$(document).ready(function() {
	var sliders = $("td.request-col .slider");
	var inputs = $("td.value-slider-col .value");
	sliders.each(function() {
		$(this).slider({
			min: 0,
			max: 1000,
			step: 100,
			slide: function(event, ui){
				$(this).closest("tr").find("input.value").val(ui.value);
			},
			stop: function(event, ui){
				$(this).closest("tr").find("input.value").val(ui.value);
			}
		});

		inputs.each(function(index) {
			$(this).change(function(){
				var value = $(this).val();
				if(value%100 === 0) {
					$(this).val(value);
					$(this).closest("tr").find(".slider").slider("value", value);
					changeValue = true;
				} else {
					$(this).css('border','1px solid red');
				}
			});
		});
	});
});

