//coping object element and value in an array
/*var o={a:1,b:2};


var keys = Object.keys(o); // Get an array of property names for object o
console.log(keys);
var values = [] // Store matching property values in this array
for(var i = 0; i < keys.length; i++) { // For each index in the array
var key = keys[i]; // Get the key at that index
console.log(key);
values[i] = o[key]; // Store the value in the values array
console.log((values[i]);
}*/


//Sum of square of array elements

/*var data = [1,2,3,4,5]; // This is the array we want to iterate
var sumOfSquares = 0; // We want to compute the sum of the squares of data
data.forEach(function(x) { // Pass each element of data to this function
sumOfSquares += x*x; // add up the squares
});
console.log(sumOfSquares) // =>55 : 1+4+9+16+25*/



//multidimential array


// Create a multidimensional array
/*var table = new Array(10); // 10 rows of the table
for(var i = 0; i < table.length; i++)
table[i] = new Array(10); // Each row has 10 columns
// Initialize the array
for(var row = 0; row < table.length; row++) {
for(col = 0; col < table.length; col++) {
table[row][col] = row*col;
}
}
// Use the multidimensional array to compute 5*7
var product = table[5][7]; // 35


console.log(product) */




/*var a = [33, 4, 1111, 1111,222];
a.sort(); // Alphabetical order: 1111, 222, 33, 4
a.sort(function(a,b) { // Case-insensitive sort

if (a < b) return -1;
if (a > b) return 1;
return 0;
}); // => ['ant','Bug','cat','Dog']
console.log(a)*/



//forEach() method

/*var arr=[1,2,3,4,,6]
var sum=0;
var arr1=arr.forEach(function(v,i,arr){
	return v*v;
})
console.log(arr)


//map()


var arr=[1,2,3,4,,6]
var sum=0;
var arr1=arr.map(function(v){
	return v*v;
})
console.log(arr)*/



// Find all occurrences of a value x in an array a and return an array
// of matching indexes
/*function findall(a, x) {
var results = [], // The array of indexes we'll return
len = a.length, // The length of the array to be searched
pos = 0; // The position to search from
while(pos < len) { // While more elements to search...
pos = a.indexOf(x, pos); // Search
if (pos === -1) break; // If nothing found, we're done.
results.push(pos); // Otherwise, store index in array
pos = pos + 1; // And start next search at next element
}
return results; // Return array of indexes
}
console.log(results)*/



var a = {"0":"a", "1":"b", "2":"c", length:3}; // An array-like object
var b=Array.prototype.join(a, "+") // => "a+b+c"
console.log(b);
var c=Array.prototype.slice.call(a) // => ["a","b","c"]: true array copy
console.log(c);
Array.prototype.map.call(a, function(x) {
return x.toUpperCase();
}) // => ["A","B","C"]: