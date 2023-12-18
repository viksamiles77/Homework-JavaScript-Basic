let arr = [];
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        arr.push(`${i} ${i + 1} \n`);
    } else {
        console.log(arr.pop());
    }
}