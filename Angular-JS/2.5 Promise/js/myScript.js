var app = angular.module("myApp", []); 


app.controller("puneCtrl", function($scope,weatherReport) {
	var d;
   weatherReport.getWeather('pune').then(function(pune){
	  
	   $scope.pune = pune;
	   $scope.$emit('statusUpdate');
   });
	
});

app.controller("mumbaiCtrl", function($scope,weatherReport) {
	  
   weatherReport.getWeather('mumbai').then(function(mumbai){
	 
	   $scope.mumbai = mumbai;
	   $scope.$emit('statusUpdate');
   });
});

app.controller("delhiCtrl", function($scope,weatherReport) {
	  
   weatherReport.getWeather('delhi').then(function(delhi){
	  
	   $scope.delhi = delhi;
	   $scope.$emit('statusUpdate');
   });
});


app.controller("ngpCtrl", function($scope,weatherReport) {
	  
   weatherReport.getWeather('nagpur').then(function(nagpur){
	    $scope.ngp = nagpur;
	   $scope.$emit('statusUpdate');
   });
});

app.controller("indiaCtrl", function($scope,weatherReport) {
	  
   weatherReport.getWeather('ahmedabad').then(function(india){
	   
	   $scope.india = india;
	   $scope.$emit('statusUpdate');
   });
});

app.controller("statusController", function($scope) {
   var statusCount=0;
	$scope.status = "processing";
   $scope.$on('statusUpdate', function(event){
	   statusCount += 1; 
	   console.log(statusCount);
	   if(statusCount == '5')
		   	$scope.status = "success";
	   else if(statusCount>0 && statusCount<5)
		   	$scope.status = "Failed";
		   	
   });
});



app.service('weatherReport',['$http', '$q',function( $http,$q) {
       this.getWeather = function(city){
		 //console.log("city : "+city);
		var vm ={city:"",maxTemp:"",mintemp:""};
		   
           var deferred = $q.defer();
  		  var URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';
  
		  var request = {
			method: 'GET',
			url: URL,
			params: {
			   q: city,
			  mode: 'json',
			  units: 'imperial',
			  cnt: '7',
			  appid: 'e5471cc3f2f4dd55c3dccf8531037468'
			}
		  };
		
		$http(request)
    		.success(function(response) {
			 // console.log(response);
      			vm.data = response;
			vm.city = response.city.name;
			vm.maxTemp = ((response.list[0].temp.max)-32)*(5/9) ;
			vm.minTemp =  ((response.list[0].temp.min)-32)*(5/9);
     			//console.log(vm.data.list[0].temp.max);
			 	deferred.resolve(vm);
    		})
		   .error(function(err){
            // console.log('Error retrieving weather');
			//console.log(err);
            deferred.reject('Error retrieving weather');
          });
		  // console.log(deferred.promise);
		   return deferred.promise;
		 
		  return {
			   
        getWeather: vm
      };
	}
    
}]);
