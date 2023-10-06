const postCodeBase = 'https://geo.api.gouv.fr/communes?codePostal=';
const codeInput = document.getElementById("postCodeInput");
const cityInput = document.getElementById("cityInput");
const cityForm = document.getElementById("cityForm");
const errors = document.getElementById("errors");
const regex = /^\d{5}$/;

let codeInputValue = codeInput;
cityForm.classList.add('hidden');
//cityForm.className = 'hidden';

document.getElementById("postCodeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    try {
        if (regex.test(codeInput.value)) {
            fetch(postCodeBase + codeInput.value)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    if (data.length === 0) {
                        throw new Error("The post code is wrong");
                    } else {
                        errors.style.display = 'none';
                        cityForm.classList.remove('hidden');
                        //cityForm.className ='visible';

                        // clear option 
                        
                        while(cityInput.firstChild)
                        {
                            cityInput.removeChild(cityInput.firstChild);
                        }

                        data.forEach(element => {
                            let row = document.getElementById("cityInput");
                            const option = document.createElement("option");
                            option.text = element.nom;
                            option.value = element.code;
                            row.add(option);
                        });
                    }
                })
                .catch(error => {
                    errors.style.display = '';
                    errors.textContent = error;
                });
        }
        else {
            throw new Error("Error: Inputed post code is invalid");
        }
    }
    catch (erreur) {
        errors.textContent = erreur.message;
        //cityForm.className = 'hidden';
        cityForm.classList.add('hidden');
        
    }
});

cityForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(cityInput.value);
    location.href = '../pages/cards.html?insee=' +cityInput.value;
});