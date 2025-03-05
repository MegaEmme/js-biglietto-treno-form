// Chiedo all'utente il *numero di km* e lo salvo in una variabile
const kmDistance = prompt ('Inserisci la distanza in km');
console.log(parseInt(kmDistance))

// Chiedo all'utente l'*età* e la salvo in una variabile
const age = prompt('Inserisci la tua età');
console.log(parseInt(age))


// Calcolo il *prezzo del biglietto* e lo salvo il una variabile
const totalPrice = (kmDistance * 0.21)
console.log(totalPrice)


// **Se** l'età è minore di 18 anni:
//            - applico il 20% di sconto;
//            - mostro il prezzo.
if (age < 18) {

    const discountTwenty = (totalPrice / 100) * 80
    console.log(`Hai meno di 18 anni
        il prezzo scontato del 20% è di: ${(discountTwenty.toFixed(2))} €`)
    alert(`Hai meno di 18 anni
        
        - Il prezzo scontato del 20% è di: ${discountTwenty.toFixed(2)} €`)

// **Altrimenti se** l'età è maggiore di 65 anni:
//            - applico il 40% di sconto;
//            - mostro il prezzo.
} else if (age >= 65) {

    const discountForty = ((totalPrice /100) * 60)
    console.log(`Hai più di 65 anni
        Il prezzo scontato del 40% è di: ${discountForty.toFixed(2)} €`)
    alert(`Hai più di 65 anni:

        - Il prezzo scontato del 40% è di: ${discountForty.toFixed(2)} €`)

// **Altrimenti**:
//             - mostro il prezzo.
} else {

    console.log(`Il prezzo del biglietto è di: ${totalPrice.toFixed(2)} €`)
    alert(`Il prezzo del biglietto è di: ${totalPrice.toFixed(2)} €`)
    
}


