class FancyList {

  constructor() {
    // declare and initialise array
    this.array = [];
    // check if it is an array
    if (Array.isArray(arguments[0])) {
      this.type = typeof arguments[0][0];
      for (var i = 0; i < arguments[0].length; i++) {
        this.array[i] = arguments[0][i];
      }
    }
    else {
      // set the type of our list by getting the type of the first argument
      this.type = typeof arguments[0];
      // get the number of arguments
      var argumentsLength = arguments.length;
      if (argumentsLength > 0) {
        for (var i = 0; i < argumentsLength; i++) {
          // check types
          if (typeof arguments[i] === this.type) {
            this.array[i] = arguments[i];
          }
          else {
            throw "error: arguments are of multiple types";
          }
        }
      }
    }
  }

  getLength() {
    return this.array.length;
  }

  getItemAt(index) {
    return this.array[index];
  }

  getItemsAt(index, number) {

    // check if the amount of required numbers is smaller than the length of the array
    if (index + number > this.array.length) {
      return "error: the number surpasses the array size";
    }

    var newArray = [];
    var newLength = 0;

    // create a new Array with the desired values
    for (var i = index; i < index + number; i++)
      newArray[newLength++] = this.array[i];

    return newArray;
  }


  addItem(item) {

    // check if the array is empty and set the type of it
    if (this.array.length === 0) {

      this.type = typeof item;
      this.array.push(item);
    }
    else {
      // check the type 
      if (this.type === typeof item) {

        this.array.push(item);
      }

      // throw an error if it's not the same type
      else {
        throw "error: not the required type"
      }
    }
  }

  addItems() {

    for (var i = 0; i < arguments.length; i++) {

      // check if it's array 
      if (Array.isArray(arguments[i])) {

        for (var j = 0; j < arguments[i].length; j++) {

          // call the addItem function for every element of the array
          this.addItem(arguments[i][j])
        }

      }

      else {
        this.addItem(arguments[i]);
      }
    }
  }



  insertItemAt(index, item) {

    if (this.type === typeof item) {

      this.array.splice(index, 0, item);
    }

    else {

      throw "error: argument is not compatible with the list"
    }

  }


  insertItemsAt() {

    // set the index from the first argument
    var index = arguments[0];
    for (var i = 1; i < arguments.length; i++) {

      // check if it's an array
      if (Array.isArray(arguments[i])) {

        for (var j = 0; j < arguments[i].length; j++) {

          this.insertItemAt(index, arguments[i][j]); // use the insertItemAt for verification and insertion
          index++;  // increase the index to put the numbers in the same order as received in arguments
        }
      }
      else {

        this.insertItemAt(index, arguments[i]);
        index++;

      }
    }
  }



  removeItemAt(index) {
    // used the splice function for removal
    this.array.splice(index, 1)

  }

  removeItemsAt(index, numberOfItems) {

    var n = numberOfItems;
    while (n > 0) {
      this.removeItemAt(index);
      n--;
    }
  }

  removeItem(item) {

    var index = this.array.indexOf(item);
    this.array.splice(index, 1);
  }

  removeItems() {

    for (var i = 0; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
        for (var j = 0; j < arguments[i].length; j++) {
          this.removeItem(arguments[i][j]);
        }
      }
      else {
        this.removeItem(arguments[i]);
      }
    }
  }
}

module.exports = FancyList;