const apiKey = "ba51faed36c635b662c65c96ab8f7c71";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";
const searchbox = document.querySelector("#input");
const searchsubmit = document.querySelector("#sbt-btn");
const weatherIcon= document.querySelector(".weather-icon")
const errorMessage = document.querySelector(".error-message");

async function weatherApi(city) {
    try {
        const response = await fetch(`${apiUrl}q=${city}&appid=${apiKey}`);
        if (response.ok===404) {
           
            if (response.status === 404) {
                errorMessage.textContent = "City not found. Please enter a valid city name.";
            } else {
                errorMessage.textContent = "Error fetching weather data. Status: " + response.status;
            }
            
            return;
        }
        const data = await response.json();
        console.log(data);
        document.querySelector(".weather").style.display="block"
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp- 273.15) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        const weatherCondition = data.weather[0].main;

       if (weatherCondition === "Clouds") {
    weatherIcon.src = "images/clouds.png";
         } 
       else if (weatherCondition === "Rain") {
    weatherIcon.src = "images/rain.png";
       } 
      else if (weatherCondition === "Clear") {
    weatherIcon.src = "images/clear.png";
          } 
     else if (weatherCondition === "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
            } 
      else if (weatherCondition === "Mist") {
    weatherIcon.src = "images/mist.png";
                  }
         
    } catch (error) {
       console.log("Error message:" ,error);
        
    }
}

searchsubmit.addEventListener("click", () => {
    weatherApi(searchbox.value);
    searchbox.value=""
});
