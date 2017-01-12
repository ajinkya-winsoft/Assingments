angular.module("myApp").directive("gridData", function ($http) {
	return {
		restrict : 'E',

		controller : function ($scope) {
			this.setEditor = function (editor) {
				$scope.cols.unshift(editor);
			}
			this.setColumns  = function (cols) {
				$scope.cols = cols;
			}
		},

		
		link : function($scope,element,attribute){
			console.log("grid-data");
			$http.get(attribute.resource).success(function(response){
		 	console.log("get");
		 	$scope.rows = response.data;
		 	$scope.$broadcast('gridReady',$scope.rows,$scope.cols);

		 });
		}
	};
});

angular.module("myApp").directive("gridSearch",function(){
	return{
		restrict : 'E',



		link :function ($scope,element,attributes) {
			
		}
	};
});

angular.module("myApp").directive("gridColumns", function () {
	return {
		restrict : 'E',
		require : ['^gridData','gridColumns'],

		controller : function ($scope) {
		var columns = [];
			this.addColumn = function(cols){
				columns.push(cols);
			},

			this.getColumns = function(){
				return columns;
			}
		},

		link : function(scope,element,attribute,controllers){
			gridDataController = controllers[0];
			gridColumnsController = controllers[1];

			gridDataController.setColumns(gridColumnsController.getColumns());
			console.log("columnss");


		},


	
	};
});

angular.module("myApp").directive("gridColumn", function () {
	return {
		restrict : 'E',
		require : '^gridColumns',

		controller : function ($scope) {
			$scope.orderme = function(order){
				$scope.orderText = order;
				$scope.reverse = !$scope.reverse;
				 
				$scope.symbol = ($scope.symbol==="&#x25BC;") ? "&#x25B2;" : "&#x25BC;";
				console.log($scope.reverse);
			};

		
    
  
},
		

		link : function(scope,element,attributes,gridColumnsController){
			gridColumnsController.addColumn({
		        title: attributes.title,
		        field: attributes.field
		     });

			
		}
	};
});

	

angular.module("myApp").directive("grid", function () {
	return {
		restrict : 'E',
		templateUrl : 'template/datagrid.html',
		replace : true,
		link : function(scope,element,attribute){
			console.log("grid");
		},

		controller : function ($scope) {
			$scope.$on('gridReady', function(event, rows,cols){
				$scope.rows = rows;
				$scope.cols = cols;

				console.log($scope.rows)
			})
		}
	};
});

angular.module("myApp").directive("withInlineEditor", function() {
  return {
    restrict: 'A',
    require: '^gridData',
    link: function(scope, element, attributes, gridDataController) {
      gridDataController.setEditor({
        title: "Edit",
        field: ""
      });
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