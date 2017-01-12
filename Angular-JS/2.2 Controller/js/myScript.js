var app = angular.module("myApp", []); 
app.controller("myCtrl", function($scope) {
	  $scope.message = "hello";
    $scope.showMessgae = function() {
        $scope.message = "Welcome";
    };
  
});
