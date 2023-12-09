const yearInputAsString = prompt('Which year were you born?') //year input
const year = parseInt(yearInputAsString); //converting the string to a number

if (isNaN(year)) { //checking if the input is a valid number
    console.log('Enter a valid number.'); //if not valid
    alert('Enter a valid number');
} else { //if valid
    const allZodiacSigns = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig']; //every animal(element) has an index in the array
    const zodiacFormula = (year - 4) % 12; //calculate the index
    const zodiacSign = allZodiacSigns[zodiacFormula]; //the value is assigned to zodiacSign

    console.log(`Your zodiac sign is ${zodiacSign}.`); //print the result in console
    alert('Your zodiac sign is ' + zodiacSign); //print the result as an alert
}