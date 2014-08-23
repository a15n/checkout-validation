'use strict';

angular.module('checkoutForm', ['validation', 'validation.rule'])
  .controller('CheckoutController', ['$scope',
    function($scope) {

      $scope.checkout = function() {
        console.log($scope.checkoutForm.first);
      };
    }
  ]);