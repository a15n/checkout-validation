 angular.module('checkoutForm', ['validation'])
    .controller('CheckoutController', ['$scope', function($scope) {
      $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();

      $scope.buyNow = function() {
        console.log($scope.user);
        console.log("buy now function running in js/main.js");
      }
    }]);