var app = angular.module("myApp", []).run(function($templateRequest) {
  $templateRequest("template/editor.html");
});
app.controller('myCtrl',function($scope,$rootScope){
//console.log($scope.rows);
//console.log($scope.getColumns());
$scope.columns1 = [{title:"Edit",field:""},{title:"Name",field:"name"},{title:"Surname",field:"surname"},{title:"Email", field:"email"},{title:"Fullname", field:"fullname"}];
//$scope.grid1 = columns1;
//$scope.cols = columns1;
$scope.columns2 = [{title:"columns1",field:"name"},{title:"Column2",field:"surname"},{title:"Column3", field:"email"},{title:"Column4", field:"fullname"}];
//$scope.grid2 = columns2;

});