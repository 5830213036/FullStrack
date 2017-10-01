$(function () {
    $("#weather").click(function (e) {
        $("#temp").empty();
        e.preventDefault();
        var city = $("#city").val();
        console.log(city);
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=3fb2e6fd0d59ae20f0721e78f2974e94";

        $.get(url, function (data) {
            console.log(data);
            var detail =  "<table align = 'center'><tr><td class='left'><h1>Description : <h1></td><td class = 'right'><h1>" 
            + data.weather[0].description + "</h1></td></tr><tr><td class='left'><h1>Temp : </h1></td><td class = 'right'><h1>" 
            + (data.main.temp / (10)).toFixed(3) + " C</h1></td></tr><tr><td class='left'><h1>Heat : </h1></td><td class = 'right'><h1>" 
            + data.main.pressure + " hPa</td></tr></h1><tr><td class='left'><h1>Humidity : </h1></td><td class = 'right'><h1>" 
            + data.main.humidity + " %</h1></td></tr></table>";
            console.log(detail);
            $("#temp").append(detail);
        });
    });
});