document.addEventListener('click', function(event){
	var t = event.target;
	if(t.id == "getWeatherForcast"){
		var city = document.getElementById("State").value.replace(" ","%20");
            var xmlhttp = new XMLHttpRequest();
            var url='https://openweathermap.org/data/2.5/weather?q='+city+'&appid=b6907d289e10d714a6e88b30761fae22';
			xmlhttp.open("GET",url,true);
			xmlhttp.send();
			xmlhttp.onreadystatechange = function(){
			if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var result = xmlhttp.responseText;
			var jsResult = JSON.parse(result);
			var t =jsResult.main["temp"];
			var p = jsResult.main["pressure"];
			var h = jsResult.main["humidity"];
			document.getElementById("ShowTemp").innerHTML = "Temperature : "+t + " Celsius";
			document.getElementById("ShowPressure").innerHTML = "Pressure : "+p + " Pa";
			document.getElementById("ShowHumidity").innerHTML = "Humidity : "+h + " %";
			}
			   }
	}
});