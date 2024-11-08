			var app = angular.module('myApp', []);
			app.controller('mainController', function($scope, $http) {
				$http.get("json/fulldata.json").then(function(response) {
					$scope.appData = response.data;
					$scope.last_login = new Date($scope.appData.client.last_login);
					$scope.last_call = new Date($scope.appData.client.last_call.date);
					$scope.date = new Date($scope.appData .notes[0].date);
					$scopedate01 = new Date($scope.appData .notes[1].date);
					for (var i = 0; i < $scope.appData .notes.length; i++) {
					$('.notes').append('<p><span>'+$scope.appData .notes[i].date+'</span>&nbsp;&nbsp;<span>'+$scope.appData .notes[i].author+'</span>&nbsp;&nbsp;<span>'+$scope.appData .notes[i].text+'</span></p>');
					}
			});
		});
