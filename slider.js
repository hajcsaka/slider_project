// Without JQuery
let slider = new Slider('#ex1', {
	formatter: function(value) {
		return 'Aktuális idő: ' + value + " perc";
	}
});

 
let deliveryTimeInput = document.querySelector("input[name=data-slider-value]")
let showAmount = document.querySelector("span.show-amount");
let deliveryTime = parseInt(deliveryTimeInput.value);
 
 
	showAmount.innerHTML = deliveryTime; 


  