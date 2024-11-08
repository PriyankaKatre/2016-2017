var scope = "global";
function f() {
console.log(scope); // Prints "undefined", not "global"
var scope = "local"; // Variable initialized here, but defined everywhere
console.log(scope); // Prints "local"
}
f();

function f() {
var scope; // Local variable is declared at the top of the function
console.log(scope); // It exists here, but still has "undefined" value
scope = "local"; // Now we initialize it and give it a value
console.log(scope); // And here it has the value we expect
}

(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a ));
console.log("b defined? " + (typeof b));

function foo1()
{
  return {
      bar: "hello"
  };
};

function foo2()
{
  return
  {
      bar: "hello"
  };
}
console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());

var o = {x:1,y:{z:3}}; // An example object
var a = [o,4,[5,6]]; // An example array that contains the object
console.log(o.x) // => 1: property x of expression o
console.log(o.y.z) // => 3: property z of expression o.y
console.log(o["x"])// => 1: property x of object o
console.log(a[1]) // => 4: element at index 1 of expression a
console.log(a[2]["1"]) // => 6: element at index 1 of expression a[2]
console.log(a[0].y) // => 1: property x of expression a[0]