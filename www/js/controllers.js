angular.module('starter.controllers', [])

.controller('MyClassesController', function($scope) {

})

.controller('BrowseController', function($scope, $ionicPopup) {
    $scope.classes = [
        {
            title: 'Economics',
            inClasses: false
        },
        {
            title: 'C Programming'
        },
        {
            title: 'Mobi Learn'
        },
        {
            title: 'History Pre 1865'
        },
    ];

    $scope.clickClass = function(index) {
        var myClass = $scope.classes[index];

        var popup = $ionicPopup.alert({
            title: myClass.title
        });
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
