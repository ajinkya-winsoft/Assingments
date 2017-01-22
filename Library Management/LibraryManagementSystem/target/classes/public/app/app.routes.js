LMS.config( function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
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
		});
});
