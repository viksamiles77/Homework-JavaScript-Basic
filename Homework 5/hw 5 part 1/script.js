let heading1 = document.getElementById('myTitle'); //first title selection
heading1.innerText = 'First heading is changed'; //first title text change

let paragraph1 = document.querySelector('.paragraph'); //first paragraph selection
paragraph1.innerText = 'First paragraph is changed'; //first paragraph text change

let paragraph2 = document.querySelector('.second'); //second paragraph selection
paragraph2.innerText = 'Second paragraph changed'; //second paragraph text change

let paragraph3 = document.querySelector('text'); //third paragraph selection
paragraph3.innerText = 'Third paragraph is changed'; //third paragraph text change

let heading0 = document.getElementsByTagName('h1'); //heading0 selects all h1 tags
let heading2 = heading0[1]; //second heading selection with index1
heading2.innerText = 'Second heading is changed'; //second heading text change

let heading3 = document.querySelector('h3'); //third heading selection
heading3.innerText = 'Third heading is changed'; //third heading text change


