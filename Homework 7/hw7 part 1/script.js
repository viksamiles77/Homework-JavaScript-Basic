let animal = {                  // creating object
    name: 'Oskar',              // name
    kind: 'Dog',                // kind
    speak: function (message) { //method
        // console.log(`${this.name} says: "${message}"`);
        let messageParagraph = document.getElementById('dogMsg'); // selecting the p element from html
        messageParagraph.innerHTML = `${this.name} says: "${message}"` // putting text into p element
    }
}
animal.speak('Woof Woof') // the message from the animal

