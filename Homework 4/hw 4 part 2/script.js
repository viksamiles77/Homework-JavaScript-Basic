function validateNumber(num) { //function for validating if all numbers are typeof numbers
    return typeof num === 'number' && !isNaN(num);
}

function calculateSum() { //function for calculating the sum of all numbers
    const allNum = [5, 10, 15, 20, 25]; //numbers array
    let sum = 0;

    for (let i = 0; i < allNum.length; i++) { //for loop for calculating the sum
        if (validateNumber(allNum[i])) { //calling the validateNumber function to check if all numbers are ok
            sum += allNum[i]; //if they are ok the function sums the numbers
        } else {
            console.error(`Error: Invalid number at index ${i}`); //if not, displays an error message
            return; // Stops further processing
        }
    }
    console.log(`Sum of all numbers is ${sum}`); // Displays the result if all numbers are ok
}

calculateSum()