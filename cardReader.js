// First, we'll need to fetch the JSON file using jQuery's getScript method
$.getScript('card-data/example_cards.json', function(data) {
    // Once we have the JSON data, we can use it as a JavaScript object
    const cards = JSON.parse(data);

    // Now we can do whatever we want with the cards object
    console.log(cards);

    // write card info to the page from the object


    // Assuming you have the following HTML structure:
    // <h1 id="cardName"></h1>
    // <h2 id="cardType"></h2>
    // <p id="cardDescription"></p>

    const card = cards[0]; // Assuming there is only one card in the array

    // Fill in the card name
    document.getElementById('cardName').textContent = card.name;

    // Fill in the card type
    document.getElementById('cardType').textContent = card.supertype;

    // Fill in the card description
    document.getElementById('cardDescription').textContent = card.flavorText;

    // Fill in the card level
    document.getElementById('cardLevel').textContent = card.level;

    // Fill in the card HP
    document.getElementById('cardHP').textContent = card.hp;

    // Fill in the card types
    document.getElementById('cardTypes').textContent = card.types.join(", ");

    // Fill in the card weaknesses
    document.getElementById('cardWeaknesses').textContent = card.weaknesses.map(w => w.type + " (" + w.value + ")").join(", ");

    // Fill in the card retreat cost
    document.getElementById('cardRetreatCost').textContent = card.retreatCost.join(", ");

    // Fill in the card number
    document.getElementById('cardNumber').textContent = card.number;

    // Fill in the card artist
    document.getElementById('cardArtist').textContent = card.artist;

    // Fill in the card rarity
    document.getElementById('cardRarity').textContent = card.rarity;

    // Fill in the card image
    document.getElementById('cardImage').src = card.images.large;


})
.fail(function(error) {
    console.error(error);
});
