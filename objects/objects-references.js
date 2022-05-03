let myAccount = {
    name: 'Paulo',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = amount + account.income;
}

let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function (account) {
    return  `Account for ${account.name} has ${account.income - account.expenses}. ${account.income} in income. ${account.expenses} in expenses.`
}   

addIncome(myAccount, 100);
addExpense(myAccount, 2.50);
// resetAccount(myAccount);
console.log(getAccountSummary(myAccount));