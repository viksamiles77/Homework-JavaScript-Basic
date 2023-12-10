function convertHumanToDog(human) {
    let result = human * 7;
    return result
}

function convertDogToHuman(dog) {
    let result = dog / 7;
    return result
}

// console.log(convertHumanToDog(10));
// console.log(convertDogToHuman(10));

const yearsUnit = prompt('For converting DOG years to HUMAN years type "dog", for converting vice versa type "human"')
const yearsValue = prompt('Enter the years value')

function calculateYears(value, unit) {
    let parsedValue = parseInt(value);

    if (unit === 'dog') {
        return convertDogToHuman(parsedValue)
    } else if (unit === 'human') {
        return convertHumanToDog(parsedValue)
    } else {
        return 'Invalid value'
    }
}

console.log(calculateYears(yearsValue, yearsUnit));
