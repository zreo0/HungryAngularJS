var bookStoreApp = angular.module('bookStoreApp',[
	'ngRoute', 'ngAnimate', 'bookStoreCtrls',
	'bookStoreFilters', 'bookStoreServices', 'bookStoreDirectives'
	]);

bookStoreApp.config(function($routeProvider) {
	$routeProvider.when('/hello', {
		templateUrl: 'tmpls/hello.html',
		controller : 'HelloCtrl'
	}).when('/list', {
		templateUrl: 'tmpls/bookList.html',
		controller : 'BookListCtrl'
	}).otherwise({
		redirectTo: '/hello'
	});
});
