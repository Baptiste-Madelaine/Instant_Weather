let inputP = document.querySelector('[name ="CodeP"]')
let validB = document.querySelector('[name ="submitButton"]')
let regex = /^\d{5}$/;
//console.log(inputP);

function isInputOk()
{
    
    if(regex.test(inputP.value))
        {
            //inputP.value = inputP.textContent.replace(/[^\d]/,'');
            console.log("valid"+ inputP.value);
            validB.disabled = true;
        }
        else
        {
            validB.disabled = false;
            console.log("unvaid "+inputP.value)
            // use trycatch

        }

}