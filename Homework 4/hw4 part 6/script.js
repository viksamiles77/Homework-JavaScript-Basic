let first = ['Bob', 'Jill', 'Viktor'];
let last = ['Gregory', 'Wurtz', 'Mileski'];

function studentName(first, last) {
    let fullNames = [];

    for (let i = 0; i < first.length; i++) {
        const fullName = `${i + 1}. ${first[i]} ${last[i]}`;
        fullNames.push(fullName);
    }
    return fullNames;
}

const result = studentName(first, last);
console.log(result);