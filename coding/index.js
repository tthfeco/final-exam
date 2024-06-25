/*
Given two arrays of integers, write a function twistedArrayIntersection(arr1, arr2)
that returns an array containing the intersection of the two arrays.

However, instead of simply returning the common elements,
the twist is to add the index of the element in arr1 to the index of
the element in arr2 for each common element.

Create a function twistedArrayIntersection(arr1, arr2)
that takes two arrays of integers as input and returns an array of objects.

Each object should have:
value: the common element.
indexSum: the sum of the indices of this element in both arrays.
*/
export function twistedArrayIntersection(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    let value1 = arr1[i];
    let index1 = i;
    let index2 = arr2.indexOf(value1);

    if (index2 !== -1) {
      let obj = {
        value: value1,
        indexSum: index1 + index2
      };
      result.push(obj);
    }
  }
  return result;
}


/*
You need to create an advanced accounting system that can handle basic transactions
with some added validation. The system should process a list of transactions,
calculate the final balance, and ensure that the balance never goes below zero.
Each transaction will either be a deposit or a withdrawal.

Create a function processTransactions(transactions) that takes an array of
transaction objects as input. Each transaction object should have:
type: a string that can be either "deposit" or "withdrawal".
amount: a positive integer representing the amount of the transaction.

The function should return the final balance after processing all transactions.
The initial balance is 0.
If a withdrawal causes the balance to go below zero, the transaction should be ignored,
and the function should continue processing the remaining transactions.
*/
export function processTransactions(transactions) {
  let balance = 0;

  for (let i = 0; i < transactions.length; i++) {
    let transaction = transactions[i];

    if (transaction.type === "deposit") {
      balance += transaction.amount;
    } else if (transaction.type === "withdrawal") {
      if (transaction.amount <= balance) {
        balance -= transaction.amount;
      }
    }
  }
  return balance;
}
