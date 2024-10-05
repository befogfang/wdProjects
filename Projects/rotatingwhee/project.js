// put some money by user
// determine number of line
// collect a bet amount
//spin the slot machine
//give the user thier winnings
//playagain or no money left


const prompt = require("prompt-sync")();
const deposit =() =>{
    const depositAmount= prompt("Enter Deposit Amount: ")
    const numberDepositAmount = parseFloat(depositAmount);
    if (isNaN(numberDepositAmount)|| numberDepositAmount<= 0) {
        console.log("Invalid deposit amount, Please try again.");
    }
}

const x = deposit();
