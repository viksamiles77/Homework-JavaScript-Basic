function checkTheType(input) {
    let type = typeof input;
    console.log(`Type of ${input}: ${type}`);
    return type;
}

checkTheType(true);
checkTheType(77);
checkTheType("This is a string");
checkTheType(undefined);

