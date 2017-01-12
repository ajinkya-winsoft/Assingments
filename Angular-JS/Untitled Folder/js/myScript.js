var app = angular.module("myApp", []); 


app.service('encryption', function() {
       this.simpleEncrypt =  function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            c = c.charCodeAt(0) + 1;
            txt += String.fromCharCode(c);
        }
        return txt;
    };
    
    this.simpleDecrypt =  function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            c = c.charCodeAt(0) - 1;
            txt += String.fromCharCode(c);
        }
        return txt;
    };
});


app.controller("myCtrl", function($scope,encryption) {
	  $scope.message = "hello";
       
    $scope.showEncryptMessgae = function() {
        var msg = $scope.message;
        $scope.message = encryption.simpleEncrypt(msg);
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

