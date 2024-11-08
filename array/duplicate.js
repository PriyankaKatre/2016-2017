arr1=["Ram","Mohan","Devid","Donald","Mohan", "Devid"]
function duplicate(value, index, array)
{
	if(array.indexOf(value)==index){
		return true;
	}
	else
	{return false;
	}
}
var result=arr1.filter(duplicate);
console.log(result)

arr1=["Ram","Mohan","Devid","Donald","Mohan", "Devid"]
var result =arr1.filter(function (value, index, array){return array.indexOf(value)==index;})
		console.log(result)