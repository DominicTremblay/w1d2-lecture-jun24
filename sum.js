// Write a node program that takes in an unlimited number
// of command line arguments, goes through each and prints
// out the sum of them. If any argument is not a whole number,
// skip it. Do support negative numbers though. If any argument
// is not a number, output an error message. We need at least 2 arguments.



// extract the command-line arguments
const getArguments = function() {
  // remove the first 2 elements of the args array
  return process.argv.slice(2);
};


// check if all element in the array is a number, otherwise issue an error message
const validateAllNumbers = function(list) {

  for (let i = 0; i < list.length; i++) { 
  
    if (typeof(list[i]) !== 'number') {
      // if (isNaN(list[i])) {
      console.log("Please provide only numbers");
      process.exit();
    }
  
  }

  return list;
};

// will loop over the numbers, skipping any none whole number
const filterAllInt = function(numbers) {

  const outputArr = [];

  for (let i = 0; i < numbers.length; i++ ) {
  
    if (numbers[i] % 1 === 0) {
      outputArr.push(numbers[i]);
    }
  }; 

  return outputArr;
};

// Take in an array of elements, convert each to a number and return the list
const convertToNum = function(list) {

  const outputArr = [];
  
  for (let i = 0; i < list.length; i++) {

    console.log("i:", i, "array element: ", list[i]);

    outputArr.push(Number(list[i]));
  }
  
  return outputArr;
};

const validateArgs = function(args) {

  if (args.length < 2) {
    console.log("Please provide at least 2 numbers");
    process.exit();
  }
  
  return args;
};

// Add each number in the array to a total
const sum = function(numbersArr) {
  
  let total = 0;
  
  // Loop over the numbers and add each to total
  for (let i=0; i < numbersArr.length; i++) {
    total += numbersArr[i];
  }

  return total;
};

// prints out the sum
console.log(sum(filterAllInt(validateAllNumbers(convertToNum(validateArgs(getArguments()))))));