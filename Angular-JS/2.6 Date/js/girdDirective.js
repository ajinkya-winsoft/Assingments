angular.module("myApp").directive("dateUi", function () {
	return {
		restrict : 'E',
		templateUrl: "template/date.html",
    	replace: true,

    	controller : function(scope){
			scope.display = scope.date.time
		},

		link : function(scope,element,attribute){


			var endYear = attribute.endYear || new Date().getFullYear(); // default: this year
			var startYear = attribute.startYear || endYear - 100; // default: this year - 100



			scope.date = {
			    day: "dd",
			    month: "MM",
			    year: "yyy",
			    hour : "hh",
			    minute : "mm",
			    second : "ss",
			    time : ""
			 };

		
			scope.dateSecetion = {

				days : function(){
					 var nbDays = new Date(scope.date.year, scope.date.month, 0).getDate() || 31;
					 var daysList = [];
    				for( var i = 1; i <= nbDays ; i++){
      					var iS = i.toString();
      					daysList.push( (iS.length < 2) ? '0' + iS : iS ); // Adds a leading 0 if single digit
    				}
    				this.times();
    				return daysList;
				}, //end of days days function 

				months : function(){
					var monthList = [];
					for(var i = 1; i<=12; i++){
						var is = i.toString();
						monthList.push((is.length)<2 ? '0' +is : is);
					}
					return monthList;

				}, //end of month months function

				years : function(){
					var yearsList = [];
    				for( var i = endYear; i >= startYear ; i--){
      					yearsList.push( i.toString() );
    				}
    				return yearsList;
				}, //end of years function

				hours : function(){
					var hourList = [];
					for (var i = 0; i <= 23 ; i++) {
						var is = i.toString();
						hourList.push( (is.length)<2 ? '0' +is : is);
					}
					return hourList;
				},

				minutes : function(){
					var mituteList = [];
					for (var i = 0; i < 60 ; i++) {
						var is = i.toString();
						mituteList.push((is.length)<2 ? '0' +is : is );
					}
					return mituteList;
				},

				seconds : function(){
					var secondsList = [];
					for (var i = 0; i < 60 ; i++) {
						var is = i.toString();
						secondsList.push( (is.length)<2 ? '0' +is : is );
					}
					return secondsList;
				},

				times : function(){
					var time = scope.date.year + ":" + scope.date.month + ":" + scope.date.day + " T " + scope.date.hour + ":" + scope.date.minute + ":" + scope.date.second;
					scope.date.time = time;
					return time;
				}
			};

				scope.date.time = scope.dateSecetion.times();

		
		}


	};
});



	