var app = angular.module("myApp", []);
		app.controller('myController', ['$scope', function($scope){
			$scope.firstName = "Hello";
			$scope.lastName  = "world";	
			$scope.fullName  = function (){
				return $scope.firstName + " " + $scope.lastName;
			};
			$scope.names = [
			{name:'Alele', age: 12},
			{name:'Blen', age: 32},
			{name:'Coen', age: 16},
			{name:'Deu', age: 31},
			];
		}]);