const apiKey ="e4a22fbe9309213f033de7d8e937dd05";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city+`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "weather-app-img (1)/images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "weather-app-img (1)/images/clear.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "weather-app-img (1)/images/mist.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "weather-app-img (1)/images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "weather-app-img (1)/images/drizzle.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "weather-app-img (1)/images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "weather-app-img (1)/images/clear.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "weather-app-img (1)/images/mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "weather-app-img (1)/images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "weather-app-img (1)/images/drizzle.png";
    }

    document.querySelector(".weather").style.display = "block";
}       

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});