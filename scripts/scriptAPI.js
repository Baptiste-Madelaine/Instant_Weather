const postCodeBase = 'https://geo.api.gouv.fr/communes?codePostal=';
const codeInput = document.getElementById("codeInput");

let codeInputValue = codeInput;


document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();
    fetch(postCodeBase+codeInput.value)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log('There was a problem with the fetch operation : ', error);
        });
});


/*fetch('https://api.meteo-concept.com/api/ephemeride/0?insee=35238&token=7fa72ed46c441a1e1b051d2f92ab251fb9d631106607663f600e8325af307829')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('There was a problem with the fetch operation : ', error);
    });*/