$(document).ready(function() {
	
	function weather(){
		var URL = 'https://fcc-weather-api.glitch.me/api/current?lat=52.379189&lon=4.899431';
		$.getJSON(URL, function(data){
			console.log(data);
			updateDom(data);
		});
	}

	weather();

	function updateDom(data){

		var city = data.name;
		var temp = Math.round(data.main.temp);
		var desc = data.weather[0].description;
		var icon = data.weather[0].icon;

		$('#city').html(city);
		$('#temp').html(temp);
		$('#desc').html(desc);
		$('#icon').attr('src', icon);

	}

});