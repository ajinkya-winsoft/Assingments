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
	
	 this.complexEncrypt =  function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            c = c.charCodeAt(0) + 56;
            txt += String.fromCharCode(c);
        }
        return txt;
    };
	
	this.complexDecrypt =  function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            c = c.charCodeAt(0) - 57;
            txt += String.fromCharCode(c);
        }
        return txt;
    };
});

app.controller("myCtrl", function($scope,encryption) {
	  $scope.message = "hello";
      var textMsg,comp;
    
    
    $scope.showDecryptMessgae = function() {
        var msg = encryption.simpleDecrypt(textMsg);
		var complexxMsg = encryption.complexDecrypt(comp);
        $scope.$broadcast('encryptSimple1', { msg: msg, comp : complexxMsg });
    };
	
	$scope.showEncryptMessgae = function (msg) {
	    msg = encryption.simpleEncrypt(msg);
		var complexMsg = encryption.complexEncrypt(msg);
        $scope.$broadcast('encryptSimple1', { msg: msg, comp : complexMsg });
       };
	
	$scope.$on('decryptText', function(event,data){
		
		textMsg= data.simp;
	    comp= data.comp;
	});
  
});

function setCharAt(str,index,chr) {
   
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}


app.controller("showCtrl", function($scope) {
		$scope.$on('encryptSimple1', function(event, msg){
		$scope.textMsg = msg.msg;
		$scope.complexMsg = msg.comp;
		$scope.$emit('decryptText',{simp : $scope.textMsg, comp : $scope.complexMsg});
	
  });
   

});
