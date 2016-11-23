var app = angular.module("myApp", []);
app.controller('myCtrl', function($scope){
	$scope.editTag  = true;
	$scope.fName    = "";
	$scope.lName    = "";
	$scope.complete = false;

	$scope.users = [
	{id:1, fName:'Hege',lName:"Pege" },
	{id:2, fName:'Kim',lName:"Pim" },
	{id:3, fName:'Sal',lName:"Smith" },
	{id:4, fName:'Jack',lName:"Jones" },
	{id:5, fName:'John',lName:"Doe" },
	{id:6, fName:'Peter',lName:"Pan" }
	];

	$scope.edit = function(id){
		if (id == 'new') {
			$scope.editTag  = true;
			$scope.fName    = "";
			$scope.lName    = "";
			$scope.pwd 		= "";
			$scope.cPwd		= "";
		}else{
			$scope.editTag  = false;
			$scope.fName    = $scope.users[id-1].fName;
			$scope.lName    = $scope.users[id-1].lName;
			$scope.pwd 		= "";
			$scope.cPwd		= "";
		}
	};

	$scope.$watch('fName',function(){$scope.test()});
	$scope.$watch('lName',function(){$scope.test()});
	$scope.$watch('pwd',function(){$scope.test()});
	$scope.$watch('cPwd',function(){$scope.test()});

	$scope.test = function(){
		//密码
		if (angular.equals($scope.pwd, $scope.cPwd)) {
			$scope.complete = true;
		}else{
			$scope.complete = false;
		}
	};
});