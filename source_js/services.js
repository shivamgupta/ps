var pustackServices = angular.module('pustackServices',['ngResource', 'mgcrea.ngStrap']);

pustackServices.factory('Users', function($http, $resource) {
    return $resource('https://pustack.herokuapp.com' + '/api/users/:id/', {id: '@_id'}, {
        update: {
            method: 'PUT'
        }
    });
});

app.service('UsersService', function (Users, $q, $location) {
    var self =  {
                    'newUser': null,
                    'userLoggingIn': null,
                    'loggedUser': null,
                    'search': null,
                    'sort': {"name": 1},
                    'createUser': function (user) {
                        console.log("createUser called", user);
                        var d = $q.defer();
                        Users.save(user).$promise.then(function () {
                            self.newUser = null;
                            //toaster.pop('success', 'Created ' + user.name);
                            d.resolve()
                        });
                        return d.promise;
                    },
                    'login': function (user){
                        console.log("login called", user);
                        var params = {
                            'where': {"email": user.email, "password": user.password}
                        };

                        Users.get(params, function (data) {
                            if (data["data"][0][0])
                            {
                                self.loggedUser = data["data"][0][0];
                                console.log(self.loggedUser);
                                $location.path('/subjects');

                            }
                            else
                            {
                                self.loggedUser = null;
                                console.log("Wrong Credentials");
                            }
                        });
                    }

                };

    return self;
});

pustackServices.factory('Subjects', function($http, $resource) {
    return $resource('https://pustack.herokuapp.com' + '/api/courses/:id/', {id: '@_id'}, {
        update: {
            method: 'PUT'
        }
    });
});

app.service('SubjectsService', function (Subjects, $q) {
    var self =  {
                    'selectedSubject' : null,
                    'subjectsList': [],
                    'ninthList': [],
                    'tenthList': [],
                    'getSubjects': function(){
                        self.subjectsList = [];
                        var params = {
                            'where': {"courseStandard": 10}
                        };

                        Subjects.get(params, function (data) {
                            //console.log(data.data[0]);
                            angular.forEach(data.data, function (subject) {
                                self.subjectsList.push(new Subjects(subject));
                            });
                        });
                    }
                    /*'divide': function(){
                        i = 0;
                        for(;i < self.subjectsList.length;)
                        {
                            console.log(i);
                            if (self.subjectsList[i].courseStandard == 9)
                            {
                                self.ninthList.push(self.subjectsList[i]);
                                i++;
                            }
                            else
                            {
                                self.tenthList.push(self.subjectsList[i]);
                                i++;
                            }
                        }
                    }*/

                };
    self.getSubjects();
    //self.divide();
    //console.log("hi", self.ninthList);
    return self;
});


pustackServices.factory('Lectures', function($http, $resource) {
    return $resource('https://pustack.herokuapp.com' + '/api/chapters/:id/', {id: '@_id'}, {
        update: {
            method: 'PUT'
        }
    });
});

app.service('LecturesService', function (Lectures, $q) {
    var self =  {
                    'selectedLecture' : null,
                    'lectureList': [],
                    'getLectures': function(subject){
                        console.log(subject.chapters);
                        self.lectureList = [];
                        var params = {
                            'where': {"_id": subject.chapters[0]}
                        };

                        Lectures.get(params, function (data) {
                            angular.forEach(data.data[0], function (lecture) {
                                self.lectureList.push(new Lectures(lecture));
                                console.log(self.lectureList);
                            });
                        });
                    }

                };
    //self.getLectures();
    return self;
});


pustackServices.factory('Videos', function($http, $resource) {
    return $resource('https://pustack.herokuapp.com' + '/api/lectures/:id/', {id: '@_id'}, {
        update: {
            method: 'PUT'
        }
    });
});

app.service('VideosService', function (Videos, $q) {
    var self =  {
                    //'selectedLecture' : null,
                    'lectureList': [],
                    'getLectures': function(chapter){
                        console.log(chapter.lectures);
                        self.lectureList = [];
                        var params = {
                            'where': {"_id": chapter.lectures[0]}
                        };

                        Videos.get(params, function (data) {
                            angular.forEach(data.data[0], function (lecture) {
                                self.lectureList.push(new Videos(lecture));
                                console.log(self.lectureList);
                            });
                        });
                    }

                };
    //self.getLectures();
    return self;
});