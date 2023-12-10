/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  var result = {};
  transactions.forEach((transaction) => {
    if (result[transaction.category]) {
      result[transaction.category] += transaction.price;
    } else {
      result[transaction.category] = transaction.price;
    }
  });

  // Convert the result object to an array of objects with category and total spent
  const categoriesWithTotalSpent = Object.entries(result).map(
    ([category, totalSpent]) => ({ category, totalSpent })
  );

  return categoriesWithTotalSpent;
}

module.exports = calculateTotalSpentByCategory;
