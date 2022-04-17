// Declare variables and capture input. //
const givenNoun = prompt("Please provide a noun.");
const givenVerb = prompt("Please provide a verb.");
const givenAdjective = prompt("Please provide an adjective.");

// combine the input with other words to create a story. //
const crazyMessage = `<p> Our school cafeteria has really ${givenAdjective} food.  Just thinking about it makes my stomach ${givenVerb}.  The spaghetti is ${givenAdjective} and tastes like ${givenNoun}!<p>`

// this will display they story as a <p> inside the <main> element. //
document.querySelector('main').innerHTML = crazyMessage;