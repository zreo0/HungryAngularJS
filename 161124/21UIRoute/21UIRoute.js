var app = angular.module('myApp',['ui.route']);
app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/index');
	$stateProvider.state(
		'index', {
			url: '/index',
			views:{
				'' : {
					templateUrl: 'tmpls/index.html'
				},
				'topbar@index':{
					templateUrl: 'tmpls/topbar.html'
				},
				'main@index' :{
					templateUrl: 'tmpls/home.html'
				}
			}
		});
});