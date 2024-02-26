// First, we'll need to fetch the JSON file using jQuery's getScript method
$.getScript('https://raw.githubusercontent.com/PokemonTCG/pokemon-tcg-data/master/cards/en/base1.json', function(data) {
    // Once we have the JSON data, we can use it as a JavaScript object
    const cards = JSON.parse(data);

    // Now we can do whatever we want with the cards object
    console.log(cards);
        // Fill in the card image
        cards.forEach(card => {
            const cardImageElement = document.createElement('img');
            cardImageElement.setAttribute('id', card.id + '_'+ card.name);
            cardImageElement.setAttribute('src', card.images.large);
            cardImageElement.setAttribute('name', card.name);
            cardImageElement.setAttribute('subtypes', card.subtypes);
            document.body.appendChild(cardImageElement);
        });
})
.fail(function(error) {
    console.error(error);
});

setTimeout(function(){
    document.getElementById('svp-1_Sprigatito').src;
},1);

