'use strict';

angular.module('core').controller('ContactusController', ['$scope',
  function ($scope, $state, $http, $location, $window) {


      $scope.saveContact = function (isValid)
      {
         $scope.error = null;
         if(!isValid) {
           $scope.$broadcast('show-errors-check-validity', 'contactForm');
           return false;
         }
         console.log($scope.user);
         // $http.post('/api/auth/signup', $scope.credentials).success(function (response) {
         //   // If successful we assign the response to the global user model
         //   $scope.authentication.user = response;
         //   // And redirect to the previous or home page
         //   $state.go($state.previous.state.name || 'home', $state.previous.params);
         // }).error(function (response) {
         //   $scope.error = response.message;
         // });
      }


     $scope.send = function () {
     }
  }
]);
