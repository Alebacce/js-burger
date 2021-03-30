var calcButton = document.getElementById('calculate-btn');
calcButton.addEventListener('click', function() {
    //Prendo i checkbox nei quali sono presenti i prezzi degli ingredienti, quindi... takeIngredient
    var takeIngredient = document.getElementsByClassName('add-ingredient');

    //Data
    //basicPrice è il prezzo base senza aggiunte
    //totalPrice è basicPrice + il costo dei singoli ingredienti aggiunti
    //ingredientPrice è il costo del singolo ingrediente
    var basicPrice = 2;
    var totalPrice;
    var ingredientPrice;


    //Accedo ai vari prezzi dei singoli ingredienti e se questi sono
    //selezionati allora li sommo al prezzo dell'hamburger
    for(i = 0; i < takeIngredient.length; i++) {
        var thisIngredient = takeIngredient[i];
        var ingredientSelected = thisIngredient.checked;
        var ingredientPrice = parseInt(thisIngredient.value);
        console.log(ingredientSelected, ingredientPrice);

        if (ingredientSelected == true) {
            totalPrice = basicPrice + ingredientPrice;
        }

        console.log(totalPrice);
    }

})