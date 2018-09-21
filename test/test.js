const FancyList = require('../src/FancyList');

var list = new FancyList(1,2);

//testing the getItemAt function
console.log("\ngetItemAt test:")
console.log(list.getItemAt(1)); //should result 2


//testing the add method with both comma delimited numbers and array
console.log("\naddItems  test:"); 
list.addItems(3,4) ; 
list.addItems([5]);
console.log(list.getItemsAt(0, list.getLength())); //the list should be 1,2,3,4,5


//testing the insert function with both comma delimited numbers and array
console.log("\ninsertItemsAt test:")
list.insertItemsAt(1,9); 
list.insertItemsAt(1,[7,7]);
console.log(list.getItemsAt(0, list.getLength()));//the list should be  1,7,7,9,2,3,4,5


//testing the remove one or more items from a certain position
console.log("\nremoveItemsAt test:")
list.removeItemsAt(1,3);
console.log(list.getItemsAt(0, list.getLength()));//the list should be 1,2,3,4,5


//testing the removeItems method using borth number and an array
console.log("\nremoveItems test:") 
list.removeItems(3,[5,4]);
console.log(list.getItemsAt(0, list.getLength()));//the list should be 1,2


/* //testing error cases

var list = new FancyList(1,2,'no'); //should throw a "arguments are of multiple types" error

console.log("\naddItems  test:"); 
list.addItems([3,4,'no']);     //try to add a string in our list 
console.log(list.getItemsAt(0, list.getLength())); //shou throw a "not the required type " error

console.log("\insertItemAt test:");
list.insertItemAt(2,'a');    //try to insert a char in our list
console.log(list.getItemsAt(0, list.getLength())); //should throw a "argument is not compatible with the list" error


//try to get more numbers than our list has
console.log("\getItemsAt test:")
console.log(list.getItemsAt(3, 6));  //should throw a "the number surpasses the array size" */










