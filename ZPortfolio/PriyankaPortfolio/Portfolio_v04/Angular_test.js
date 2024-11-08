

angular.module('myApp', [])
.controller('myCtrl',function($scope) {
    $scope.count = 0;
    $scope.myFunc = function() {
        $scope.count++;
    };
});
console.log($scope.count)