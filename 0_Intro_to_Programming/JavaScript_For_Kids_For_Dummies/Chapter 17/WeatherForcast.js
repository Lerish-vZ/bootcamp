var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var weather = ["Sunny", "Partly Sunny", "Partly Cloudy", "Cloudy", "Raining", "Snowing", "Thunderstorm", "Foggy"];
var maxTemp = 100;
var minTemp = 0;

function generateWeather() {
    for (var i = 0; i < days.length; i++){
        var weatherToday = weather[Math.floor(Math.random() * weather.length)];
        var tempToday = Math.floor(Math.random() * (maxTemp - minTemp) + minTemp);
        var tag = "<div id = '" + days[i] + "' class='" + weatherToday +
                "'><b> Forcast for " + days[i] + ": </b><br><br>" + 
        weatherToday + " and " + tempToday + " degrees. </div>";
        document.getElementById("5DayWeather").innerHTML += tag;
    }
}

generateWeather();