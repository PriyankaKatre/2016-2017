/**
	This file contains the solution to the assignment problems for chapter 2
**/

/** Problem 1 **/
function str_reverse(str) {
  return str.split('').reverse().join('');
}

/** Problem 2 **/
var array= [{radius: 5}, {radius: 9}, {radius: 2}]
console.log (array.sort(function (c1, c2) {
  return c1.radius - c2.radius;
}))
// then we can use this in the sort function


/** Problem 3 **/
function length_of_array(arr) {

  var counter = 0;

  arr.forEach(function() {counter++;});

  return counter;
}
