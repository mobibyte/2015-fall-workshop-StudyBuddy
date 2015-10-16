angular.module('starter.controllers', [])

.controller('MyClassesController', function($scope, Courses) {
    Courses.reloadCoursesFromParse();
  $scope.courses = Courses.getMyCourses();
})

.controller('BrowseController', function($scope, $ionicPopup, Courses) {
    Courses.reloadCoursesFromParse();

  $scope.classes = Courses.getAllCourses();



  $scope.clickClass = function(index) {

    //var myClass = $scope.classes[index];
    Courses.toggleCourse(index);
    // var popup = $ionicPopup.alert({
    //     title: myClass.title
    // });
  }
});
