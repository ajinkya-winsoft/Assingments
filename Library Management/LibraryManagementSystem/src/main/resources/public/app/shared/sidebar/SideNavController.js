LMS.controller( 'SideNavController', function($scope, $state) {
  $scope.changeState = function() {
    console.log("view a book");
    $state.go("books");
  };

  $scope.requestbooks = function() {
    console.log("take a book");
    $state.go('requestbooks');
  };
})
