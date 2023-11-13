// First, we'll need to fetch the JSON file using jQuery's getScript method
$.getScript('card-data/example_cards.json', function(data) {
    // Once we have the JSON data, we can use it as a JavaScript object
    const cards = JSON.parse(data);

    // Now we can do whatever we want with the cards object
    console.log(cards);
})
.fail(function(error) {
    console.error(error);
});
