LMS.controller( 'SideNavController', function($scope, $state) {
  $scope.changeState = function() {
    $state.go("books");
  }
})
