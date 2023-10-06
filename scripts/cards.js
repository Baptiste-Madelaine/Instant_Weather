
function DisplayData(data){
    const template = document.getElementById("template");
    const template_forecast = document.getElementById("template_forecast");
    const body = document.body;
    const clone = document.importNode(template.content,true);
    const forecast = clone.querySelector("#forecast");

    clone.querySelector("#svg_day").src = "../images/svg/"+ getWeatherInfo(data.forecast[0].weather).icon;
    clone.querySelector("#city").textContent = data.city.name;
    clone.querySelector("#maxTemp").textContent = data.forecast[0].tmax + "°C";
    clone.querySelector("#minTemp").textContent = data.forecast[0].tmin + "°C";
    clone.querySelector("#dayWind").textContent = data.forecast[0].wind10m + "km/h";
    clone.querySelector("#dayHum").textContent = data.forecast[0].probarain + "%";
    clone.querySelector("#daySum").textContent = data.forecast[0].sun_hours + "h";
    clone.querySelector("#dayRainMM").textContent = data.forecast[0].rr10 + "mm";
    clone.querySelector("#dayLat").textContent = data.forecast[0].latitude;
    clone.querySelector("#dayLong").textContent = data.forecast[0].longitude;
    clone.querySelector("#dayWindDir").textContent = data.forecast[0].dirwind10m;
    
    const clone_forecast = document.importNode(template_forecast.content, true);

    clone_forecast.querySelector("#svgs").src = "../images/svg/"+ getWeatherInfo(data.forecast[1].weather).icon;
    clone_forecast.querySelector("#forecast_day").textContent = "Demain";
    clone_forecast.getElementById("forecastWind").textContent = data.forecast[1].wind10m + "km/h";
    clone_forecast.getElementById("forecastHum").textContent = data.forecast[1].probarain + "%";
    clone_forecast.getElementById("forecastSun").textContent = data.forecast[1].sun_hours + "h";
    clone_forecast.getElementById("forecastRainMM").textContent = data.forecast[1].rr10 + "mm";

    forecast.appendChild(clone_forecast);

    for(let i = 2; i < data.forecast.length; i++){
        const clone_forecast = document.importNode(template_forecast.content, true);

        clone_forecast.querySelector("#svgs").src = "../images/svg/"+ getWeatherInfo(data.forecast[i].weather).icon;
        clone_forecast.querySelector("#forecast_day").textContent = data.forecast[i].datetime.slice(8,10);
        clone_forecast.getElementById("forecastWind").textContent = data.forecast[i].wind10m + "km/h";
        clone_forecast.getElementById("forecastHum").textContent = data.forecast[i].probarain + "%";
        clone_forecast.getElementById("forecastSun").textContent = data.forecast[i].sun_hours + "h";
        clone_forecast.getElementById("forecastRainMM").textContent = data.forecast[i].rr10 + "mm";

        forecast.appendChild(clone_forecast);
    }
    body.appendChild(clone);
}
// Wait for the DOM to be fully loaded before executing the JavaScript code
document.addEventListener("DOMContentLoaded", function(){
    let urlString = window.location;
    let url = new URL(urlString);
    let insee = url.searchParams.get("insee");
    const optionLat = document.getElementById("lat");
    const optionLong = document.getElementById("long");
    const optionRain = document.getElementById("rain");
    const optionWind = document.getElementById("wind");
    const optionDir = document.getElementById("direction");

    optionWind.addEventListener("change",evt => {
        document.querySelectorAll("#forecastWind, #dayWind").forEach(elem => elem.style.display = evt.target.checked ? "block":"none")
    })
    optionRain.addEventListener("change", evt =>{
        document.querySelectorAll("#forecastRainMM, #dayRainMM").forEach(elem => elem.style.display = evt.target.checked ? "block":"none");
    })
    optionLat.addEventListener("change", evt => {
        document.querySelectorAll("#dayLat, #forecastLat").forEach(elem => elem.style.display = evt.target.checked ? "block":"none");
    })
    optionLong.addEventListener("change", evt => {
        document.querySelectorAll("#dayLong, #forecastLong").forEach(elem => elem.style.display = evt.target.checked ? "block" : "none");
    })
    optionDir.addEventListener("change", evt => {
        document.querySelectorAll("#dayWindDir, #forecastWindDir").forEach(elem => elem.style.display = evt.target.checked ? "block":"none");
    })
    // Define the URL for the weather API, including the access token
    const urlfetch = 'https://api.meteo-concept.com/api/forecast/daily?token=499016347b7f5474105959879d32e980720a47b5f693345e42cce58642eba8a6&insee=';
            
    // Return a promise that fetches weather data from the API using the provided INSEE code
    fetch(urlfetch+insee)
    .then(response =>{
        if(response.status != 200){
            throw new Error(response);
        }
        return response.json()
    }) // Parse the response as JSON
    .then(data =>{console.log(data);DisplayData(data)})// Sending the parsed data to the function DisplayData
    .catch(error => {
        console.log("Erreur : ",error)
        const divErr = document.createElement("div").textContent = "Il y a eu une erreur avec le code : "+error;
        this.body.append(divErr);
    }); // Handle any errors that occur during the fetch operation
});