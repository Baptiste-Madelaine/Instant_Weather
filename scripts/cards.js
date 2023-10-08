
//We get the elements we need on the page
const optionLat = document.getElementById("lat");
const optionLong = document.getElementById("long");
const optionRain = document.getElementById("rain");
const optionWind = document.getElementById("wind");
const optionDir = document.getElementById("direction");
const numberInput = document.getElementById("numberInput");
const numberDays = document.getElementById("numberDays");
const template = document.getElementById("template");
const template_forecast = document.getElementById("template_forecast");
const body = document.body;
const clone = document.importNode(template.content,true);
const forecast = clone.querySelector("#forecast");

function DisplayData(data){
    //Map all the data on the big template
    clone.querySelector("#svg_day").src = "../images/svg/"+ getWeatherInfo(data.forecast[0].weather).icon;
    clone.querySelector("#city").textContent = data.city.name;
    clone.querySelector("#maxTemp").textContent = data.forecast[0].tmax + "°C";
    clone.querySelector("#minTemp").textContent = data.forecast[0].tmin + "°C";
    clone.querySelector("#dayWind").textContent = data.forecast[0].wind10m + "km/h";
    clone.querySelector("#dayHum").textContent = data.forecast[0].probarain + "%";
    clone.querySelector("#daySum").textContent = data.forecast[0].sun_hours + "h";
    clone.querySelector("#dayRainMM").textContent = data.forecast[0].rr10 + "mm";
    clone.querySelector("#dayLat").textContent = data.forecast[0].latitude;
    clone.querySelector("#dayLong").textContent = data.forecast[0].longitude

    //Adding the picture and rotate it with the wind direction
    const windDir = document.createElement("img");
    windDir.width = 50;
    windDir.src = "../images/svg/wi-wind-deg.svg";
    windDir.alt = "Direction of the wind";
    windDir.style.transform = "rotate("+data.forecast[0].dirwind10m+"deg)";
    clone.querySelector("#dayWindDir").append(windDir);
    
    //create a clone of the template for the "today" forecast
    const clone_forecast = document.importNode(template_forecast.content, true);
    //Mapping all the data on the "today" forecasts
    clone_forecast.querySelector("#svgs").src = "../images/svg/"+ getWeatherInfo(data.forecast[1].weather).icon;
    clone_forecast.querySelector("#forecast_day").textContent = "Tomorrow";
    clone_forecast.getElementById("forecastWind").textContent = data.forecast[1].wind10m + "km/h";
    clone_forecast.getElementById("forecastHum").textContent = data.forecast[1].probarain + "%";
    clone_forecast.getElementById("forecastSun").textContent = data.forecast[1].sun_hours + "h";
    clone_forecast.getElementById("forecastRainMM").textContent = data.forecast[1].rr10 + "mm";
    clone_forecast.getElementById("forecastTempMax").textContent = data.forecast[1].tmax + "°C";
    clone_forecast.getElementById("forecastTempMin").textContent = data.forecast[1].tmin + "°C";
    clone_forecast.getElementById("forecastLat").textContent = data.forecast[1].latitude;
    clone_forecast.getElementById("forecastLong").textContent = data.forecast[1].longitude;
    const forecastWindDir = document.createElement("img");
    forecastWindDir.width = 50;
    forecastWindDir.src = "../images/svg/wi-wind-deg.svg";
    forecastWindDir.alt = "Direction of the wind";
    forecastWindDir.style.transform = "rotate("+data.forecast[1].dirwind10m+"deg)";
    clone_forecast.querySelector("#forecastWindDir").append(forecastWindDir);

    forecast.appendChild(clone_forecast);

    //for each forecast, create a clone of the template and mapping all datas
    for(let i = 2; i < data.forecast.length; i++){

        const clone_forecast = document.importNode(template_forecast.content, true);

        clone_forecast.querySelector("#svgs").src = "../images/svg/"+ getWeatherInfo(data.forecast[i].weather).icon;
        clone_forecast.querySelector("#forecast_day").textContent = data.forecast[i].datetime.slice(8,10);
        clone_forecast.getElementById("forecastWind").textContent = data.forecast[i].wind10m + "km/h";
        clone_forecast.getElementById("forecastHum").textContent = data.forecast[i].probarain + "%";
        clone_forecast.getElementById("forecastSun").textContent = data.forecast[i].sun_hours + "h";
        clone_forecast.getElementById("forecastRainMM").textContent = data.forecast[i].rr10 + "mm";
        clone_forecast.getElementById("forecastTempMax").textContent = data.forecast[i].tmax + "°C";
        clone_forecast.getElementById("forecastTempMin").textContent = data.forecast[i].tmin + "°C";
        clone_forecast.getElementById("forecastLat").textContent = data.forecast[i].latitude;
        clone_forecast.getElementById("forecastLong").textContent = data.forecast[i].longitude;
        const forecastWindDir = document.createElement("img");
        forecastWindDir.width = 50;
        forecastWindDir.src = "../images/svg/wi-wind-deg.svg";
        forecastWindDir.alt = "Direction of the wind";
        forecastWindDir.style.transform = "rotate("+data.forecast[i].dirwind10m+"deg)";
        clone_forecast.querySelector("#forecastWindDir").append(forecastWindDir);

        forecast.appendChild(clone_forecast);
    }
    //add the big clone to the body page
    body.appendChild(clone);
}
// Wait for the DOM to be fully loaded before executing the JavaScript code
document.addEventListener("DOMContentLoaded", function(){
    //get the insee value on the URL
    let urlString = window.location;
    let url = new URL(urlString);
    let insee = url.searchParams.get("insee");
    numberDays.textContent = numberInput.value;
    
    //All the listeners for options forms
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
    numberInput.addEventListener("input", function(){
        numberDays.textContent = numberInput.value;
        
        for(let i=0;i<forecast.children.length;i++){
            if(i+1<numberInput.value){
                forecast.children[i].style.display = "";
            }else{
                forecast.children[i].style.display = "none";
            }
        }
    })
    //Listener to be able to scroll horizontally on the forecast
    forecast.addEventListener("wheel", evt=>{
        
        
            const scrollSize = 50;
            if(evt.deltaY > 0){
                forecast.scrollBy({
                    left: scrollSize,
                    behavior: 'smooth'
                });
                evt.preventDefault();
            }else if(forecast.scrollLeft != 0){
                forecast.scrollBy({
                    left: -scrollSize,
                    behavior: 'smooth'
                });
                evt.preventDefault();
            }
    });
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
    .then(data =>{DisplayData(data)})// Sending the parsed data to the function DisplayData
    .catch(error => {
        const divErr = document.createElement("div").textContent = "Il y a eu une erreur avec le code : "+error;
        this.body.append(divErr);
    }); // Handle any errors that occur during the fetch operation
});