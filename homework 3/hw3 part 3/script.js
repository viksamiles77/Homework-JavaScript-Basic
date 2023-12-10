let accountBalanceAmount = 1000;

function withdrawCash(amount) {
    if (amount <= accountBalanceAmount) {
        accountBalanceAmount = accountBalanceAmount - amount;
        console.log(`Withdrawn: ${amount} $. Remaining: ${accountBalanceAmount} $`);
        return amount;
    } else {
        console.log("Not enough money.");
        return "Not enough money";
    }
}

const withdrawAmount = prompt("How much money do you want to with draw? Enter the amount:");
const parsedAmount = parseInt(withdrawAmount);

if (!isNaN(parsedAmount)) {
    withdrawCash(parsedAmount);
} else {
    console.log("Invalid input. Please enter a valid number.");
}
