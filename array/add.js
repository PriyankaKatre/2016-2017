<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script>
var arr1 =new Array(3);
for (var i=0; i<3; i++)
{
	arr1[i]=new Array(3);
}
var start=1;
for(var i=0; i<3; i++)
{
	for(var j=0;j<3;j++)
	{
		arr1[i][j]=start;
		start++;
	}
}
for(var i=0 ;i<3; i++)
{
	for(var j=0;j<3;j++)
	{
	console.log(arr1[i][j]);
	}
	
}
</script>
</head>

<body>
</body>
</html>