LMS.controller( 'RequestBookController', function($scope, $http, $log, $state) {
  $scope.userRole = 'Student';
  $http.get("http://localhost:8080/books/all")
    .then(function(response) {
        $scope.books = response.data;
    });

    $scope.requestforBook = function(id) {
      $log.debug(id);
      $http.post("http://localhost:8080/books/update/"+id)
        .then(function(response) {
            //$scope.books = response.data;
            $log.debug(response);
            $http.get("http://localhost:8080/books/all")
              .then(function(response) {
                  $scope.books = response.data;
              });
            //$state.go('requestbooks')
        })
        .then(function(error) {
          $log.debug(error);
        });
    }
})
