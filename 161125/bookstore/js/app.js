var routerApp = angular.module('routerApp',['ui.router', 'ngGrid', 'BookListModule', 'BookDetailModule']);
/**
 * 把$state和$stateParams放到$rootScope上，方便其他地方引用和注入。
 * 这里的run方法会在angular启动的时候运行一次
 */
routerApp.run(function($rootScope, $state, $stateParams){
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
});

/**
 * 配置路由
 */
routerApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/index');
	$stateProvider.state('index',{
		url: '/index',
		views:{
			'':{
				templateUrl : 'tmpls/home.html'
			},
			'main@index':{
				templateUrl :'tmpls/loginForm.html'
			}
		}
	}).state('booklist', {
		url :'/{bookType:[0-9]{1,4}}',
		views:{
			'':{
				templateUrl: 'tmpls/bookList.html'
			},
			'booktype@booklist':{
				templateUrl: 'tmpls/bookType.html'
			},
			'bookgrid@booklist': {
				templateUrl:'tmpls/bookGrid.html'
			}
		}
	}).state('addbook',{
		url: '/addbook',
		templateUrl: 'tmpls/addBookForm.html'
	}).state('bookdetail',{
		url:'/bookdetail/:bookId',
		templateUrl: 'tmpls/bookDetail.html'
	})
});