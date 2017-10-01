$(function () {
    $("#weather").click(function (e) {
        $("#temp").empty();
        e.preventDefault();
        var city = $("#city").val();
        console.log(city);
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=3fb2e6fd0d59ae20f0721e78f2974e94";

        $.get(url, function (data) {
            console.log(data);
            var detail =  "<table align = 'center'><tr><td class='left'><h2>Description : <h2></td><td class = 'right'><h2>" 
            + data.weather[0].description + "</h2></td></tr><tr><td class='left'><h2>Temperature : </h2></td><td class = 'right'><h2>" 
            + (data.main.temp / (10)).toFixed(3) + " C</h2></td></tr><tr><td class='left'><h2>Heat : </h1></td><td class = 'right'><h2>" 
            + data.main.pressure + " hPa</td></tr></h2><tr><td class='left'><h2>Moisture : </h2></td><td class = 'right'><h2>" 
            + data.main.humidity + " %</h2></td></tr></table>";
            console.log(detail);
            $("#temp").append(detail);
        });
    });
});