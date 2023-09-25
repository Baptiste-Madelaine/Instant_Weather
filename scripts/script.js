document.addEventListener("DOMContentLoaded", function(){


    // Function to fetch weather information using an INSEE code
    function getWeatherData(inseeCode){

        // Define the URL for the weather API, including the access token
        const url = 'https://api.meteo-concept.com/api/forecast/daily?token=499016347b7f5474105959879d32e980720a47b5f693345e42cce58642eba8a6&insee=';
        
        // Fetch weather data from the API using the provided INSEE code
        fetch(url+inseeCode)
        .then(response => response.json())
        .then(data => {
            return data; // Return the weather data
        })
        .catch(error => console.log("Erreur : ",error)); // Handle any errors that occur during the fetch operation
    };

});