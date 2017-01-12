// Custom Directive for Date Control

angular.module("myApp").directive("dateUi", function ($filter) {
	return{
		restric : 'E',
		templateUrl : 'template/date.html',
		replace : true,

		controller : function(scope){
			//scope.display = scope.date.time;
		},


		link : function (scope,element,attributes) {
			var time = "yyyy-MM-dd T hh:mm:ss";
			scope.time = time;
			scope.dateInstance = {
				day : "",
				month : "",
				year : "",
				hour : "",
				minutes : "",
				seconds : "",

				displayDay : "dd",
				displayMonth : "MM",
				displayYear : "yyyy",
				displayHour : "hh",
				displayMinutes : "mm",
				displaySeconds : "ss",

				secondsFlag : false,
				minutesFalg : false,
				hourFlag : false,
				monthFlag : false,
				dayFlag : false,
				yearFlag : true


			}

			scope.date = {

				
				dateFormat : function(event){
				//var time = "yyyy-MM-dd T hh:mm:ss";
				scope.time = time;
				//console.log( String.fromCharCode(event.keyCode) );

				var rawDateTimeString = scope.time.split('T');
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
				
				
				var keyPressed =  String.fromCharCode(event.keyCode);
				console.log(year);
				console.log("legth :"+scope.dateInstance.hour.length+" hence flag :"+scope.dateInstance.hourFlag);
 
				if( (scope.dateInstance.seconds.length <2) && scope.dateInstance.secondsFlag){
					var char = keyPressed;
					scope.dateInstance.seconds += char; 
					//scope.dateInstance.year = year;
					console.log(scope.dateInstance.seconds);

					var diffrence = 2 -  scope.dateInstance.seconds.length;
					scope.dateInstance.displaySeconds =   scope.dateInstance.seconds;
					for (var i = 0; i <diffrence; i++) {
						scope.dateInstance.displaySeconds += "_";
					}

					if( scope.dateInstance.seconds.length ==2 ){
						scope.dateInstance.secondsFlag = true;
						scope.dateInstance.minutesFlag = false;
						scope.dateInstance.hourFlag = false;
						scope.dateInstance.dayFlag = false;
						scope.dateInstance.monthFlag = false;
						scope.dateInstance.yearFlag = false;
				}
				}

				if( (scope.dateInstance.minutes.length <2) && scope.dateInstance.minutesFlag){
					var char = keyPressed;
					scope.dateInstance.minutes += char; 
					//scope.dateInstance.year = year;
					console.log(scope.dateInstance.minutes);

					var diffrence = 2 -  scope.dateInstance.minutes.length;
					scope.dateInstance.displayMinutes =   scope.dateInstance.minutes;
					for (var i = 0; i <diffrence; i++) {
						scope.dateInstance.displayMinutes += "_";
					}

					if( scope.dateInstance.minutes.length ==2 ){
						scope.dateInstance.secondsFlag = true;
						scope.dateInstance.minutesFlag = false;
						scope.dateInstance.hourFlag = false;
						scope.dateInstance.dayFlag = false;
						scope.dateInstance.monthFlag = false;
						scope.dateInstance.yearFlag = false;
				}
				}

				if( (scope.dateInstance.hour.length <2) && scope.dateInstance.hourFlag){
					var char = keyPressed;
					scope.dateInstance.hour += char; 
					//scope.dateInstance.year = year;
					console.log(scope.dateInstance.hour);

					var diffrence = 2 -  scope.dateInstance.hour.length;
					scope.dateInstance.displayHour =   scope.dateInstance.hour;
					for (var i = 0; i <diffrence; i++) {
						scope.dateInstance.displayHour += "_";
					}

					if( scope.dateInstance.hour.length ==2 ){
						scope.dateInstance.minutesFlag = true;
						scope.dateInstance.hourFlag = false;
						scope.dateInstance.dayFlag = false;
						scope.dateInstance.monthFlag = false;
						scope.dateInstance.yearFlag = false;
				}
				}

				if( (scope.dateInstance.day.length <2) && scope.dateInstance.dayFlag){
					var char = keyPressed;
					scope.dateInstance.day += char; 
					//scope.dateInstance.year = year;
					console.log(scope.dateInstance.day);

					var diffrence = 2 -  scope.dateInstance.day.length;
					scope.dateInstance.displayDay =   scope.dateInstance.day;
					for (var i = 0; i <diffrence; i++) {
						scope.dateInstance.displayDay += "_";
					}

					if( scope.dateInstance.day.length ==2 ){
						scope.dateInstance.hourFlag = true;
						scope.dateInstance.dayFlag = false;
						scope.dateInstance.monthFlag = false;
						scope.dateInstance.yearFlag = false;
				}
				}

				if( (scope.dateInstance.month.length <2) && scope.dateInstance.monthFlag){
					var char = keyPressed;
					scope.dateInstance.month += char; 
					//scope.dateInstance.year = year;
					console.log(scope.dateInstance.month);

					var diffrence = 2 -  scope.dateInstance.month.length;
					scope.dateInstance.displayMonth =   scope.dateInstance.month;
					for (var i = 0; i <diffrence; i++) {
						scope.dateInstance.displayMonth += "_"; 
					}
					if( scope.dateInstance.month.length == 2 ){
						scope.dateInstance.dayFlag = true;
						scope.dateInstance.monthFlag = false;
						scope.dateInstance.yearFlag = false;
					}
				} 

				if( (scope.dateInstance.year.length <4) && (scope.dateInstance.yearFlag) ){
					var char = keyPressed;
					scope.dateInstance.year += char; 
					//scope.dateInstance.year = year;
					console.log("lenght : "+scope.dateInstance.year.length);

					var diffrence = 4 -  scope.dateInstance.year.length;
					scope.dateInstance.displayYear =   scope.dateInstance.year;
					for (var i = 0; i <diffrence; i++) {
						scope.dateInstance.displayYear += "_"; 
					}

					if( scope.dateInstance.year.length == 4 ){

						scope.dateInstance.monthFlag = true;
						scope.dateInstance.yearFlag = false;
						console.log("iiiiilegth :"+scope.dateInstance.year.length+" hence flag :"+scope.dateInstance.monthFlag);
 
					}
				}
				

				

				

				console.log(scope.dateInstance.displayYear);

				scope.time = scope.dateInstance.displayYear + " - " + scope.dateInstance.displayMonth + " - " + scope.dateInstance.displayDay + " T " + scope.dateInstance.displayHour + ":" + scope.dateInstance.displayMinutes + ":" + scope.dateInstance.displaySeconds;
				//scope.time = year + " - " + month + " - " + day + " T " + hour + ":" + minutes + ":" + seconds;
				console.log(scope.time);

			//	console.log( String.fromCharCode(event.keyCode) );



				//console.log(rawDateTimeString[0]+ "   "+ rawDateTimeString[1]);
			},

			};
		}

		
	}
	
});



	