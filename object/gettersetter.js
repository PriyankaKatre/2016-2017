/*var p={
		x:1.0,
 		y:1.0,
		get r(){return Math.sqrt(this.x*this.x+this.y*this.y);},
		set r(newvalue){
			var oldvalue= Math.sqrt(this.x*this.x+this.y*this.y);
			var ratio =newvalue/oldvalue;
			this.x*=ratio;
			this.y*=ratio;
		},
		get theta(){return Math.atan2(this.y,this.x);}
	 };

//console.log(Object.getOwnPropertyDescriptor(p,"x"));

var q=Object.create(p,{x:{value:2,enumerable:true,configurable:true,writable:true},
	y:{value:5,enumerable:true,configurable:true,writable:true}});
console.log(q.r);

console.log(q.theta);
console.log(Object.getOwnPropertyDescriptor(q,"b"));*/





/*var obj1={};
Object.defineProperty(obj1,"x",{value:2,configurable:true,enumerable:false,writable:false});
console.log(obj1.x);
console.log(Object.keys(obj1));
obj1.x=4;
console.log(obj1.x);
Object.defineProperty(obj1,"x",{value:5});
console.log(obj1.x);*/



Object.defineProperty(Object.prototype,
"extend", // Define Object.prototype.extend
{
writable: true,
enumerable: false, // Make it nonenumerable
configurable: true,
value: function(o) { // Its value is this function
// Get all own props, even nonenumerable ones
var names = Object.getOwnPropertyNames(o);
// Loop through them
for(var i = 0; i < names.length; i++) {
// Skip props already in this object
if (names[i] in this) continue;
// Get property description from o
var desc = Object.getOwnPropertyDescriptor(o,names[i]);
// Use it to create property on this
Object.defineProperty(this, names[i], desc);
}
}
});

console.log(function(1));