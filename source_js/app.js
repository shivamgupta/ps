var app = angular.module('pustack',['ngRoute', 'pustackControllers', 'pustackServices']);

app.config(function ($routeProvider, $locationProvider) {
	$routeProvider
		.when ('/',{
			templateUrl:'partials/landing.html',
			controller: 'landingController'
		})
		.when ('/lectures/:selectedSubjectId',{
			templateUrl:'partials/lectures.html',
			controller: 'lectureController'
		})

		.when ('/mycourses',{
			templateUrl:'partials/mycourses.html',
			controller: 'mycoursesController'
		})

		.when ('/subjects',{
			templateUrl:'partials/subjects.html',
			controller: 'subjectController'
		})

		.when('/videos', {
			templateUrl: 'partials/videos.html',
			controller: 'videosController'
		})

		.when('/videos1', {
			templateUrl: 'partials/videos1.html',
			controller: 'videosController'
		})

		.when('/videos2', {
			templateUrl: 'partials/videos2.html',
			controller: 'videosController'
		})

		.when('/mycourses1', {
			templateUrl: 'partials/mycourses1.html',
			controller: 'mycoursesController'	
		})

		.when('/mycourses2', {
			templateUrl: 'partials/mycourses2.html',
			controller: 'mycoursesController'	
		})
});
