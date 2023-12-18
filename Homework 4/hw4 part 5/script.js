const arr = [3, 5, 6, 8, 11];

function sumOfMinMax(arr) {
    if (arr.length === 0) {
        return 'empty array';
    }

    let max = arr[0];
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    const sum = max + min;
    return `Max: ${max}, Min: ${min}, Sum: ${sum}`;
}

const result = sumOfMinMax(arr);
console.log(result);

