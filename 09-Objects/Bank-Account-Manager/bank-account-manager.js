let account = {

    accountHolder: "Sumair Ali",
    accountNumber:10001,
    accountType:"Current",
    balance:20000,
    status:"active"

}




console.log(`Account Holder: ${account.accountHolder}`);
console.log(`Account Number: ${account.accountNumber}`);
console.log(`Account type: ${account.accountType}`);
console.log(`Balance: ${account.balance}`);
console.log(`Status: ${account.status}`);

let Deposit = 5000

account.balance+=Deposit



console.log(`Deposit: ${Deposit}`);
console.log(`Updated Balance: ${account.balance}`);


let withdraw = 3000
console.log(`Withdraw: ${withdraw}`);





if (account.balance >= withdraw) {
    account.balance -=withdraw
    console.log(`Final balance: ${account.balance}`);
    console.log("Withdraw Successful");
    
}

else {
    console.log("Insufficient Balance");
    
}








