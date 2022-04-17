// Declare variables and capture input. //
const givenNoun = prompt("Please provide a noun.");
const givenVerb = prompt("Please provide a verb.");
const givenAdjective = prompt("Please provide an adjective.");

// combine the input with other words to create a story. //
const crazyMessage = `<p> One day there was a ${givenNoun} who really needed to ${givenVerb}.  Given that the ${givenNoun} was very ${givenAdjective}, the ${givenNoun} had no choice but to go home.<p>`

// this will display they story as a <p> inside the <main> element. //
document.querySelector('main').innerHTML = crazyMessage;