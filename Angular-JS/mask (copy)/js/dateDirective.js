angular.module("myApp").directive("dateUi",function(){
	return {
		restric : 'E',
		templateUrl : 'template/date.html',
		replace : true,

		link : function (scope,element,attributes) {

			console.log(attributes.maxyear);
			console.log(attributes.minyear);
			
			scope.clear = function(){
				 scope.validFlag = false;	
				 scope.error = "";
				 scope.errorMessgae  = "";
			};

			scope.checkDate = function(){
				var date = scope.maskModel;
				
				var d = Date.parse(date);
				//console.log("a "+ d);
				if (isNaN(d)==false)
				{
					console.log("valid");
				   scope.validFlag = false;	
				   scope.error = "";
				  
				}else{
					//console.log("invalid");
					scope.validFlag = true;	
					scope.errorMessgae  = "invalid";
					scope.error = "w3-red";
				}

			/*	var rawDateTimeString = date.split('T');
				var rawDateString = rawDateTimeString[0];
				var rawTimeString = rawDateTimeString[1];

				var dateArray = rawDateString.split("-");
				var timeArray = rawTimeString.split(":");

				var year = dateArray[0];
				var month = dateArray[1];
				var day = dateArray[2];

				var hour = timeArray[0];
				var minutes = timeArray[1];
				var seconds = timeArray[2];

				if(Number(month)>12){
					console.log("hello")
					scope.validFlag = true;	
				   scope.errorMessage  = "month greater than 12";
				}
*/





			}
		}
		};
	});