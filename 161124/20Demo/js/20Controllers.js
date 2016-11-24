var bookStoreCtrls = angular.module('bookStoreCtrls', []);

bookStoreCtrls.controller('HelloCtrl', ['$scope', function($scope){
	$scope.greeting = {
		text: 'hello'
	};
	$scope.pageClass="hello";
}]);

bookStoreCtrls.controller('BookListCtrl', ['$scope', function($scope){
	$scope.books = [{
		title: 'AAAAAAAA',
		author: '123'
	},{
		title: 'BBBBBBBB',
		author: '123'
	},{
		title: 'CCCCCCCC',
		author: '123'
	}];
	$scope.pageClass="list";
}])