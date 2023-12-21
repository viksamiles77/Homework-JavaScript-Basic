let numArr = [2, 4, 5];
let list = document.getElementById('myList');

function calculateSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        let li = document.createElement('li');
        li.innerText = numArr[i];
        list.appendChild(li);
    }
    return sum;
}

let result = calculateSum(numArr);
console.log(result);


let sumResult = document.getElementById('sumOfArray');
sumResult.innerText = result;