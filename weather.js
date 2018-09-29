$(document).ready(function () {
    $("#getWeather").click(function () {
        let city = $("#destination").val();
        let url = "http://api.openweathermap.org/data/2.5/forecast";
        let queryParams = {
            q: city,
            appid: "daab60fac03700b51f256bbde6449103",
            cnt: 16,
            units: "imperial"
        };
        $.ajax({
            url: url,
            data: queryParams,
            dataType: "json"
        }).then(function (response) {
            populateWeatherTable(response.list);
        });
    });

    const populateWeatherTable = function (weatherData) {
        for (let i = 0; i < weatherData.length; i++) {
            let newRow = $("<tr>");
            let date = $("<td>");
            let maxTemp = $("<td>");
            let minTemp = $("<td>");
            let humidity = $("<td>");
            let weatherCondition = $("<td>");

            console.log(weatherData[i]);

            date.html(weatherData[i].dt);
            maxTemp.html(weatherData[i].main.temp_max);
            minTemp.html(weatherData[i].main.temp_min);
            humidity.html(weatherData[i].main.humidity);
            weatherCondition.html(weatherData[i].weather[0].main);

            newRow.append(date);
            newRow.append(maxTemp);
            newRow.append(minTemp);
            newRow.append(humidity);
            newRow.append(weatherCondition);
            $(".weatherTableBody").append(newRow);
        }
    };
});