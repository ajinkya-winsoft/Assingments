LMS.controller( 'BookController', function($scope, $http, $log) {
  $scope.userRole = 'Student';
  $http.get("http://localhost:8080/books/all")
    .then(function(response) {
        $scope.books = response.data;
    });
})
