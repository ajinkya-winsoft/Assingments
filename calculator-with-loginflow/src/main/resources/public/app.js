var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        })
        
	    .state('login', {
	    	url: '/login',
            templateUrl: 'partial-login.html'       
	    });
	    
});

routerApp.controller("LoginController", function($scope, $http) {
	$scope.login = function() {
		$http.post("/login", "username=" + "user" +
		        "&password=" + "password", {
		            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		        } ).then(function(data) {
		            alert("login successful");
		            localStorage.setItem("session", {});
		        }, function(data) {
		            alert("error logging in");
		        });

	}
});