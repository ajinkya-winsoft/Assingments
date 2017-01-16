var myApp = angular.module('myApp', ['ui.router','toaster', 'ngAnimate']);

myApp.config(function($stateProvider, $urlRouterProvider) {
    
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

myApp.controller("myAppController", function($scope, $http, $state, toaster) {
	$scope.isLogin = false;
	$scope.user={};
	$scope.calc={};
	 $scope.pop = function(type, title, message){
         toaster.pop(type, title, message);
     };
     
    
	$scope.login = function(data) {
		$http.post("/login", "username=" + $scope.user.name +
		        "&password=" + $scope.user.password, {
		            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		        } ).then(function(data) {
		        	 $scope.pop("info","Welcome "+$scope.user.name,"Login Successful");
		            localStorage.setItem("session", {});
		            $scope.isLogin = true;
		            $state.go("home");
		        }, function(data) {
		        	$scope.pop("error","Bad Credentials","Username or password incorrect");
		            $scope.isLogin = false;
		        });

	}
	
	$scope.logout = function() {
		$scope.isLogin = false;
		$state.go("home");
	}
	
	$scope.displayNo = function (id){
		var old_value = $scope.calc.value;

		switch(id){
			
			case "clear" :
				$scope.calc.value = "";
				break;
		    case "delete" :
				var text = $scope.calc.value;
				$scope.calc.value = text.substring(0,(text.length)-1);
				break;			 
			case "enter" :
				$scope.process();
				break;		
			default :
				$scope.calc.value = $scope.calc.value == undefined ? ""+id : $scope.calc.value+""+id;
		}
	}
	
	$scope.process = function() {
		if($scope.calc.value || ''){
			$http.get("calculator/eval",{
				params: {expression:$scope.calc.value}
			})
			.then(function(response) {
				if(response.data.status=='success'){
		            $scope.calc.value = response.data.result;
				}
				if(response.data.status=='fail'){
					$scope.pop("error","Error",response.data.result);
				}
		     }, function(err) {
		          $scope.pop("error","Error",err.data.result);
		     });
			
		}else{
			$scope.pop("error","Error","Text Field Cannot be Blank");
		}
		

	}
	
	$scope.square = function() {
		$http.get("/calculator/square/"+$scope.calc.value+"/")
		.then(function(response) {
			if(response.data.status=='success'){
	            $scope.calc.value = response.data.result;
			}
			if(response.data.status=='fail'){
				$scope.pop("error","Error",response.data.result);
			}
	     }, function(err) {
	          $scope.pop("error","Error",err.data.result);
	     });
	}
	
	$scope.half = function() {
		$http.get("/calculator/half/"+$scope.calc.value+"/")
		.then(function(response) {
			if(response.data.status=='success'){
	            $scope.calc.value = response.data.result;
			}
			if(response.data.status=='fail'){
				$scope.pop("error","Error",response.data.result);
			}
	     }, function(err) {
	          $scope.pop("error","Error",err.data.result);
	     });
	}
});