'use strict';

angular.module('checkoutForm', ['validation', 'validation.rule'])
  .controller('CheckoutController', ['$scope',
    function($scope) {
      $scope.submit = function(object) {
        if (object.$invalid) {
          console.log('invalid');
        } else {
          var userObject = {};
          for (var key in object) {
            if (key.indexOf('$') === -1 && object[key]) {
              userObject[key] = object[key].$viewValue;
            }
          }
          $scope.results = userObject;
          console.log(userObject);
        }
      };
    }
  ])
  .directive('addressTemplate', function() {
    return {
      restrict: 'A',
      require: '^ngModel',
      scope: {
        ngModel: '@'
      },
      templateUrl: '../address.html'
    };
  });