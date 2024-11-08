arr1=[1,2,3,4,5,6,7,8,9,10,11,12,24,56,68,79,80]
function iseven(value, index, array)
{
	if(value%2==0)
	{
		return true;
	}
	else
	{
		return false;
	}
}
var result=arr1.filter(iseven);
console.log(result)

arr1=[1,2,3,4,5,6,7,8,9,10,11,12,24,56,68,79,80]
var result=arr1.filter(function(value, index, array)
{
	if(value%2==0)
	{
		return true;
	}
	else
	{
		return false;
	}
});
console.log(result)


arr1=[1,2,3,4,5,6,7,8,9,10,11,12,24,56,68,79,80]
function iseven(value,index,array)
{
	return value%2==0;
}
var result=arr1.filter(iseven);
console.log(result);


arr1=[1,2,3,4,5,6,7,8,9,10,11,12,24,56,68,79,80]
var result=arr1.filter(function (value,index,array)
{
	return value%2==0;
});
console.log(result);
