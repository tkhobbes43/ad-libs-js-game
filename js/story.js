
const givenNoun = prompt("Please provide a noun.");
const givenVerb = prompt("Please provide a verb.");
const givenAdjective = prompt("Please provide an adjective.");

const crazyMessage = `<p> The ${givenAdjective} programmer decided to ${givenVerb} to the ${givenNoun}.<p>`

document.querySelector('main').innerHTML = crazyMessage;