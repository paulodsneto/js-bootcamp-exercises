const account = {
    name: 'Paulo Neto',
    expenses: [],
    incomes: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.incomes.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncomes = 0
        let accountBalance = 0
        this.expenses.forEach((expense) => {
            totalExpenses = totalExpenses + expense.amount
        })
        
        this.incomes.forEach((income) => {
            totalIncomes = totalIncomes + income.amount
        })
        accountBalance = totalIncomes - totalExpenses
        return `${this.name} has $${accountBalance} in expenses. $${totalIncomes} in income. $${totalExpenses} in expenses.`
    }  
}

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Paulo Neto has $1231 in expenses.


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job Payment', 1000)
console.log(account.getAccountSummary())
