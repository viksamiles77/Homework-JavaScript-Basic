let firstDiv = document.querySelector('#first'); //first div selection

let firstTitle = document.querySelector('#first #myTitle'); //first title selection
firstTitle.innerText = 'First title text changed'; //first title text change

let firstParagraph = document.querySelector('#first .paragraph'); //first paragraph selection
firstParagraph.innerText = 'First paragraph text changed'; //first paragraph text change

let secondDiv = document.querySelector('anotherDiv'); //second div selection

let secondParagraph = document.querySelector('.anotherDiv .second'); //second paragraph selection
secondParagraph.innerText = 'Second paragraph text changed'; //second paragraph text change

let thirdParagraph = document.querySelector('.anotherDiv text'); //third paragraph text change
thirdParagraph.innerText = 'Third paragraph text changed'; //third paragraph text change

// let secondTitle = document.querySelector(''); 
// secondTitle.innerText = 'Second title text changed';

let headerThree = document.querySelector('h3');
headerThree.innerText = 'h3 text changed'


// imam malku nejasno bidejki ne bev na cas, so selektiranje na second title, mi gi menuva i drugite h1 elementi, ne uspeav i so children selector