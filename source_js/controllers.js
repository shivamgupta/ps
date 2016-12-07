var pustackControllers = angular.module('pustackControllers',[]);

pustackControllers.controller('landingController', ['$scope', '$http', '$window' , 'UsersService' , function($scope, $http, $window, UsersService) {

  $scope.users  = UsersService;

  $scope.createUser = function () {
    
    $scope.users.createUser($scope.users.newUser)
      .then(function () {
        console.log("User Created");
      })
  };

  $scope.loginUser = function () {
    $scope.users.login($scope.users.userLoggingIn);
    //console.log("here", $scope.users.loggedUser);
  };

}]);

pustackControllers.controller('subjectController', ['$scope', '$http', '$window' , 'UsersService' , 'SubjectsService' , function($scope, $http, $window, UsersService, SubjectsService) {

  $scope.users  = UsersService;
  $scope.subjects = SubjectsService;

  $scope.getSubjects = function () {
    $scope.subjects.getSubjects(standard);
    //console.log("here", $scope.users.loggedUser);
  };

  $scope.standardFilter = function(subject){
    return (subject.courseStandard == 9);
  };

}]);

pustackControllers.controller('lectureController', ['$scope', '$http', '$window' , 'UsersService' , 'SubjectsService' , 'LecturesService' , function($scope, $http, $window, UsersService, SubjectsService, LecturesService) {
  
  $scope.users    = UsersService;
  $scope.subjects = SubjectsService;
  $scope.lectures = LecturesService;

  $scope.lectures.getLectures($scope.subjects.selectedSubject);

}]);

pustackControllers.controller('mycoursesController', ['$scope', '$window', function($scope, $window) {
  
}]);


pustackControllers.controller('videosController', ['$scope', '$http', '$window' , 'UsersService' , 'SubjectsService' , 'LecturesService' , 'VideosService' , function($scope, $http, $window, UsersService, SubjectsService, LecturesService, VideosService) {
  
  $scope.users    = UsersService;
  $scope.subjects = SubjectsService;
  $scope.lectures = LecturesService;
  $scope.videos   = VideosService;

  //$scope.videos.getLectures($scope.lectures.selectedLecture);

}]);

