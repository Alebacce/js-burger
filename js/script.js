var calcButton = document.getElementById('calculate-btn');
calcButton.addEventListener('click', function() {

    //Controllo che l'utente abbia inserito il nome del suo panino, se non l'ha inserito non può
    //procedere al calcolo del prezzo finale del suo burger, altrimenti sì
    var burgerName = document.getElementById('burger-name-generator').value;
    
    if (burgerName.value == 0 || !isNaN(burgerName)) {
        alert('Inserisci un nome per il tuo burger');
    } else {
    //DATA
    //burgerPrice è il prezzo base senza aggiunte
    //takeIngredient: seleziono i checkbox nei quali sono presenti i prezzi degli ingredienti nei loro value
    //validCoupn contiene tutti i coupon accettabili dal sito
    //userCouponValue è il value del coupon inserito dall'utente
    var burgerPrice = 2;
    var takeIngredient = document.getElementsByClassName('add-ingredient');
    var validCoupon = [
        'DISCDS53_BU6RG8ER_B2LBURGER',
        'DISCDS02_BU5RG9ER_B3LBURGER',
        'DISCDS41_BU5RG7ER_B5LBURGER',
        'DISCDS43_BU0RG3ER_B7LBURGER',
        'DISCDS97_BU3RG1ER_B4LBURGER'
    ];
    var userCouponValue = document.getElementById('coupon-code').value;

    //LOGIC
    //
    //CALCOLO IL PREZZO DEL BURGER ALL'AGGIUNTA DI NUOVI INGREDIENTI
    //Accedo ai vari prezzi dei singoli ingredienti e, se questi sono
    //selezionati dall'utente, allora li sommo al prezzo base dell'hamburger
    //
    //ingredientSelected è l'ingrediente .checked, quando la sua checkbox viene spuntata
    //ingredientPrice è il costo del singolo ingrediente, nonché il value HTML di questo
    for(i = 0; i < takeIngredient.length; i++) {

        var thisIngredient = takeIngredient[i];
        var ingredientSelected = thisIngredient.checked;
        var ingredientPrice = parseFloat(thisIngredient.value);
        

        //Se l'ingrediente è stato selezionato allora burgerPrice assumerà al primo giro 
        //il suo valore + quello dell'ingrendiente, di conseguenza al secondo giro assumerà
        //la somma precedente + il valore del nuovo ingrediente, dando poi infine la somma finale
        //e il quindi il costo tortale dell'hamburger
        if (ingredientSelected == true) {
            burgerPrice = burgerPrice + ingredientPrice;
        }
    }
    
    //CALCOLO LO SCONTO QUANDO UN COUPON VIENE APPLICATO
    //Accedo ai vari coupon con un ciclo for
    //Comparo il singolo coupon con il valore immesso dall'utente, se corrisponde
    //ha diritto a uno sconto del 20%. L'operazion è svolta nel ciclo for in modo che
    //ogni coupon sia letto
    for( i = 0; i < validCoupon.length; i++) {
        var thisCoupon = validCoupon [i];
        if ( thisCoupon == userCouponValue) {
        burgerPrice = burgerPrice - (burgerPrice * 0.2);
        }
        console.log('dentro for', thisCoupon);
    }

    //OUTPUT
    //Stampo il prezzo finale del panino, il quale risentirà ovviamente di un eventuale sconto o meno
    document.getElementById('price').innerHTML = '$ ' + burgerPrice.toFixed(2);
    }
})


//DISCLAIMER
//Se a volte i commenti sono troppo descrittivi o ridondanti, è perché servono a me per capire meglio
//perché faccio un'operazione piuttosto che un'altra e perché quella data cosa si fa così, in modo che mi
//rimanga più impressa nella testa. Rivedendo il codice poi a distanza di tempo aiuta a ricordare certi concetti.