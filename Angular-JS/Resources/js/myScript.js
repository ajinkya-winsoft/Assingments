var app = angular.module("myApp", ['ngResource']);



app.controller("myCtrl", function($scope,Resource) {
	  $scope.message = "hello";

    $scope.showEncryptMessgae = function() {
        //var msg = $scope.message;
        $scope.Loadmap = Resource.Map.loadMap({networkCode:1}).$promise.then(function(response) {
           console.log(response)
        }, function(error) {
           // fail
           console.log("fail")
           console.log(error)
        });

        // $scope.MapLiveTraffic = Resource.MapLiveTraffic.MapLiveTraffic({}).$promise.then(function){
        //   console.log("success");
        //   console.log(response)
        // },function(error){
        //   console.log("fail")
        //   console.log(error)
        // }
    };


    $scope.showDecryptMessgae = function() {
         var msg = $scope.message;
        $scope.message = encryption.simpleDecrypt(msg);
    };

});

function setCharAt(str,index,chr) {
   ;
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}
