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
class expend{
  constructor(id,timestamp,price,category,itemname){
    this.id=id
    this.timestamp=timestamp
    this.price=price
 this.category=category
    this.itemname=itemname

  }
  category(){
    return `${this.category}`
  }
  price(){
    return this.price
  }
}
const expend1=new expend(1,131234214,23,'food','cheese')


function calculateTotalSpentByCategory(transactions) {
  
  
}

module.exports = calculateTotalSpentByCategory;
