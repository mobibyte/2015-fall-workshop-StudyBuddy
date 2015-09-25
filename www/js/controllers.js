angular.module('starter.controllers', [])

.controller('MyClassesController', function($scope, Courses) {
    $scope.courses = Courses.getMyCourses();
})

.controller('BrowseController', function($scope, $ionicPopup, Courses) {
    $scope.classes = Courses.getAllCourses();

    $scope.clickClass = function(index) {

        //var myClass = $scope.classes[index];
        Courses.toggleCourse(index);
        // var popup = $ionicPopup.alert({
        //     title: myClass.title
        // });
    }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
