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
	
	 $scope.pop = function(type, title, message){
         toaster.pop(type, title, message);
     };
     
    
	$scope.login = function() {
		$http.post("/login", "username=" + "user" +
		        "&password=" + "password", {
		            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		        } ).then(function(data) {
		        	 $scope.pop("info","Welcome","Login Successful");
		            localStorage.setItem("session", {});
		            $scope.isLogin = true;
		            $state.go("home");
		        }, function(data) {
		        	$scope.pop("error","Bad Credentials","Username or password incorrect");
		            $scope.isLogin = false;
		        });

	}
	
	$scope.displayNo = function (id){
		console.log(id)
		var old_value = $scope.value;
		//var displayField = document.getElementById("textfield");
		
		switch(id){
			
			case "clear" :
				console.log($scope.value);
				$scope.value = "";
				break;
			
			case "divide" :
				divideNumber(true);
				break;
				
			case "plus" :
				addNumber(true);
				break;
				
			case "minus" :
				subNumber(true);
				break;
				
			case "multiply" :
				multiplyNumber(true);
				break;
			
			case "half" :
				displayField.value = Number(old_value/2);
				break;
				
			case "square" :
				displayField.value = Number(old_value*old_value);
				break;
				
		    case "delete" :
				var text = $scope.value;
				$scope.value = text.substring(0,(text.length)-1);
				break;
				
			 case "modulo" :
				modNumber(true);
				break;
			 
			case "enter" :
				$scope.process();
		
				break;
				
			default :
				
				$scope.value = $scope.value == undefined ? ""+id : $scope.value+""+id;
		}
	}
	
	$scope.process = function(){
		if($scope.value || ''){
			$http.get("/calculator/eval/"+$scope.value)
			.then(function(response) {
				console.log(response)
				if(response.data.status=='success'){
		            $scope.value = response.data.result;
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
});