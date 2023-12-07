/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
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
