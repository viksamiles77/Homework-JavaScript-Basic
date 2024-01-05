const words = ['Java', 'script', 'is', 'fun', 'to', 'learn'];
let sentence = '';

for (let i = 0; i < words.length; i++) {
    sentence += words[i];

    if (i < words.length - 1) {
        sentence += ' ';
    }
}

console.log(sentence);