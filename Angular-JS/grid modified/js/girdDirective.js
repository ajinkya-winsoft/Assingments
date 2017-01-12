angular.module("myApp").directive('gridData', function($http,$parse){
	return{
		restrict : 'E',
		scope : {
			resource : '=',
			rows : '=?',
			cols : '=?'
		},
		require: "?ngModel",
		templateUrl : 'template/datagrid.html',
		replace : true,

		 controller : function($scope){
		 	var a = $scope;
		 	console.log(a.rows);

		 	$scope.orderme = function(order){
				$scope.orderText = order;
				$scope.reverse = !$scope.reverse;
				 
				$scope.symbol = ($scope.symbol==="&#x25BC;") ? "&#x25B2;" : "&#x25BC;";
				console.log($scope.reverse);
			};
		 },

		 link : function(scope, element, attributes,controller	){
		 	$http.get(attributes.resource).success(function(response){
			 	scope.rows = response.data;
			 
			 	//scope.$broadcast('gridReady',scope.rows,scope.cols);

			 });

		 	var ngModelGet = $parse(attributes.ngModel);
		 	  //console.log(controller.$viewValue);
            scope.$watch(attributes.ngModel, function () {
              scope.cols = controller.$viewValue;

              console.log(scope.orderText);
			  	scope.orderText = 'name';
			  	scope.reverse = false;
             // console.log(controller.$viewValue);
            });

		 }
	};
});

angular.module("myApp").directive("withInlineEditor", function() {
  return {
    restrict: 'A',
    require: 'gridData',
    link: function(scope, element, attributes, gridDataController) {
     // gridDataController.setEditor({
     //    title: "Edit",
     //    field: ""
     //  });

      console.log('linked withInlineEditor');
    }
  };
});

angular.module("myApp").directive("editorInitializer", function($compile, $templateCache) {
  return {
    restrict: 'E',
    templateUrl: 'template/editor_initializer.html',
    controller: function($scope) {

      $scope.$on('update',function (event,row) {
      		$scope.row = row;
      		console.log("updatd :"+row.name);
      		console.log("updatd :"+$scope.row.name);
      		
      })
      $scope.edit = function(row) {
        $scope.$broadcast('edit', row);
      };

    
    },
    link: function(scope, element, attributes) {
      scope.$on('edit', function(e, row) {
        var editor = $compile($templateCache.get("template/editor.html"))(scope);
   	  console.log(element);
        $(editor).insertAfter( "#popup");
         $("#id01").css("display","block");
         
      });
      console.log('linked editorInitializer');
    }
  };
});

angular.module("myApp").directive("editFormLoaded",function () {
	return{
		restrict : 'A',
		
		controller : function ($scope) {

		},

		link : function(scope, element, attributes){
			
			var oldRow =  angular.copy(scope.row);
			//console.log("old row :"+ oldRow.name)
			  scope.cancel = function(){
			  	scope.row.name = oldRow.name;
			  	scope.row.surname = oldRow.surname;
			  	scope.row.fullname = oldRow.fullname;
			  	scope.row.email = oldRow.email;


			 
			}	
		}
	};
	
});