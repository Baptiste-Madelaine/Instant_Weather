let inputP = document.querySelector('[name ="CodeP"]')
let validB = document.querySelector('[name ="submitButton"]')
let regex = /^\d{5}$/;

function isInputOk()
{
    
    if(regex.test(inputP.value))
        {
            //inputP.value = inputP.textContent.replace(/[^\d]/,'');
            validB.disabled = true;
        }
        else
        {
            validB.disabled = false;
            // use trycatch

        }

}