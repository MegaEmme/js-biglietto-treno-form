//********************** */

// soluzione MILESTONE 1

//********************** */


// const usernameElement = document.getElementById('user-name');
// console.log(usernameElement);

// const distanceInputElement = document.getElementById('km');
// console.log(distanceInputElement);

// const ageInputElement = document.getElementById('age');
// console.log(ageInputElement);

// const submitButton = document.getElementById('button');
// console.log(submitButton);

// submitButton.addEventListener('click',function(){

//     const finalPrice = distanceInputElement.value * 0.21;
//     if (ageInputElement.value < 18) {

//         const discountTwenty = (finalPrice / 100) * 80
//         console.log(`Ciao ${usernameElement.value} 
//             Hai meno di 18 anni
//             il prezzo scontato del 20% è di: ${(discountTwenty.toFixed(2))} €`);
    
//         } else if (ageInputElement.value >= 65) {
    
//         const discountForty = ((finalPrice /100) * 60)
//         console.log(`Ciao ${usernameElement.value} 
//             Hai più di 65 anni
//             Il prezzo scontato del 40% è di: ${discountForty.toFixed(2)} €`);
    
//         } else {
    
//         console.log(`Ciao ${usernameElement.value} 
//             Non hai diritto a sconti
//             Il prezzo del biglietto è di: ${finalPrice.toFixed(2)} €`);
        
//     }
// })



//********************** */

// soluzione MILESTONE 2

//********************** */


const usernameElement = document.getElementById('user-name');
console.log(usernameElement);

const distanceInputElement = document.getElementById('km');
console.log(distanceInputElement);

const ageInputElement = document.getElementById('age');
console.log(ageInputElement);

const submitButton = document.getElementById('button');
console.log(submitButton);

const formElement = document.getElementById('my-form');

const divElement = document.getElementById('ticket-printer');

formElement.addEventListener('submit',function(event){

    event.preventDefault();

    const finalPrice = distanceInputElement.value * 0.21;

    if (ageInputElement.value < 18) {

        const discountTwenty = (finalPrice / 100) * 80
        console.log(`Ciao ${usernameElement.value} 
            Hai meno di 18 anni
            il prezzo scontato del 20% è di: ${(discountTwenty.toFixed(2))} €`);
            divElement.innerHTML = `${usernameElement.value} 
                Hai ${ageInputElement.value} anni, cioè meno di 18 anni.
                Vuoi percorrere ${distanceInputElement.value} km.
                Il prezzo, scontato del 20%, è di: ${(discountTwenty.toFixed(2))} €`;
    
        } else if (ageInputElement.value >= 65) {
    
        const discountForty = (finalPrice /100) * 60

        console.log(`Ciao ${usernameElement.value} 
            Hai più di 65 anni
            Il prezzo scontato del 40% è di: ${discountForty.toFixed(2)} €`);
            divElement.innerHTML = `${usernameElement.value} 
            Hai ${ageInputElement.value} anni, cioè più di 65 anni.
            Vuoi percorrere ${distanceInputElement.value} km.
            Il prezzo, scontato del 40%, è di: ${(discountForty.toFixed(2))} €`;
    
        } else {
    
        console.log(`Ciao ${usernameElement.value} 
            Non hai diritto a sconti
            Il prezzo del biglietto è di: ${finalPrice.toFixed(2)} €`);
            divElement.innerHTML = `${usernameElement.value} 
            Hai ${ageInputElement.value} anni, non hai diritto a sconti.
            Vuoi percorrere ${distanceInputElement.value} km.
            Il prezzo totale è di: ${(finalPrice.toFixed(2))} €`;
    }

})


//********************** */

// soluzione MILESTONE 3

//********************** */






