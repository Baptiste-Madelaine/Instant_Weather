// Wait for the DOM to be fully loaded before executing the JavaScript code
document.addEventListener("DOMContentLoaded", function(){
    let urlString = window.location;
    let url = new URL(urlString);
    let insee = url.searchParams.get("insee");


    // Function to fetch weather information using an INSEE code and return a promise
    function getWeatherPromise(inseeCode){

        // Define the URL for the weather API, including the access token
        const url = 'https://api.meteo-concept.com/api/forecast/daily?token=499016347b7f5474105959879d32e980720a47b5f693345e42cce58642eba8a6&insee=';
        
        // Return a promise that fetches weather data from the API using the provided INSEE code
        return fetch(url+inseeCode)
        .then(response => response.json()) // Parse the response as JSON
        .catch(error => console.log("Erreur : ",error)); // Handle any errors that occur during the fetch operation
    };


    if('content' in document.createElement("template")){
        const template = document.getElementById("template");
        const template_forecast = document.getElementById("template_forecast");
        const body = document.body;
        const clone = document.importNode(template.content,true);
        const forecast = clone.querySelector("#forecast");

        // Call the getWeatherPromise function with an INSEE code (use this later)
        getWeatherPromise(insee)
            .then(data => {
                
            clone.querySelector("#svg_day").src = "../images/svg/"+ getWeatherInfo(data.forecast[0].weather).icon;
            clone.querySelector("#city").textContent = data.city.name;
            clone.querySelector("#maxTemp").textContent = data.forecast[0].tmax + "°C";
            clone.querySelector("#minTemp").textContent = data.forecast[0].tmin + "°C";
            clone.querySelector("#dayWind").textContent = data.forecast[0].wind10m + "km/h";
            clone.querySelector("#dayHum").textContent = data.forecast[0].probarain + "%";
            
            const clone_forecast = document.importNode(template_forecast.content, true);

            clone_forecast.querySelector("#svgs").src = "../images/svg/"+ getWeatherInfo(data.forecast[1].weather).icon;
            clone_forecast.querySelector("#forecast_day").textContent = "Demain";

            forecast.appendChild(clone_forecast);

            for(let i = 2; i < data.forecast.length; i++){
                const clone_forecast = document.importNode(template_forecast.content, true);

                clone_forecast.querySelector("#svgs").src = "../images/svg/"+ getWeatherInfo(data.forecast[i].weather).icon;
                clone_forecast.querySelector("#forecast_day").textContent = data.forecast[i].datetime.slice(8,10);
                
                forecast.appendChild(clone_forecast);
            }
            body.appendChild(clone);
            })


        .catch(error => console.log("Erreur : ",error)); // Handle any errors that may occur during the promise chain

    };

});