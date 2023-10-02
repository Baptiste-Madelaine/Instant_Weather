// Wait for the DOM to be fully loaded before executing the JavaScript code
document.addEventListener("DOMContentLoaded", function(){
    
    // Function to fetch weather information using an INSEE code and return a promise
    function getWeatherPromise(inseeCode){

        // Define the URL for the weather API, including the access token
        const url = 'https://api.meteo-concept.com/api/forecast/daily?token=499016347b7f5474105959879d32e980720a47b5f693345e42cce58642eba8a6&insee=';
        
        // Return a promise that fetches weather data from the API using the provided INSEE code
        return fetch(url+inseeCode)
        .then(response => response.json()) // Parse the response as JSON
        .catch(error => console.log("Erreur : ",error)); // Handle any errors that occur during the fetch operation
    };

    
    
    
    
    
    
    
    
    
    
    // Call the getWeatherPromise function with an INSEE code (use this later)
    getWeatherPromise(50502)
        .then(data => {
            // Handle the weather data here, e.g., log it to the console
            console.log(data);
        })
        .catch(error => console.log("Erreur : ",error)); // Handle any errors that may occur during the promise chain

});