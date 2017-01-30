LMS.config( function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/error');
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: './app/component/home.html'
		})
		.state('student', {
			url: '/student',
			templateUrl: './app/component/student/student.html'
		})
		.state('admnin', {
			url: '/admin',
			templateUrl: './app/component/admin/admin.html'
		})
		.state('books', {
			url: '/books',
			templateUrl: './app/component/books/book.html'
		})
		.state('requestbooks', {
			url: '/requestbooks',
			templateUrl: './app/component/books/requestBook.html'
		});
});
