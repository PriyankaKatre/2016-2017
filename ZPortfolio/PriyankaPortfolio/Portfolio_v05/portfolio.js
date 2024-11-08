var myapp= angular.module("myApp" , []);
myapp.controller("myCtrl", function ($scope) {
	$scope.imgSlide = [
	{image: "images/images/image1.png"},
	{image: "images/images/interior.png"},
	{image: "images/images/resort.png"},
	{image: "images/images/resort.png"},
	];

	$scope.slide=$scope.imgSlide.length;
console.log($scope.slide)
var count=0;
$scope.next=function(index){

	$scope.imgSlide[index+1].image;
}
console.log($scope.next())


	/*var count=0;
	$scope.next=function(){

		count+=1;
		if (count>$scope.imgSlide.length-1)
		{
			count=0;
		}
		return angular.element(document.getElementById("img")).src=$scope.imgSlide[count].image;
	}
console.log($scope.next())*/

});
