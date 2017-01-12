angular.module("myApp").directive("gridData", function(){
	
		var a ={};
		a.scope ={
			 'cols':'=',
			 'resource' : '@'
		};

		a.restrict = 'E';
		a.templateUrl = 'template/datagrid.html';
		a.replace = true;
		a.transclude = true;
		a.require = '?ngModel';
		a.controller = function ($scope) {
			$scope.cols = $scope.columns1;
			console.log($scope.resource);
			console.log($scope.cols);
		}

		a.link = function(scope,element,attribute,ngModel){
			//console.log(ngModel);
		}

	return a;
})