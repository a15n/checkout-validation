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
      $scope.states = [
        {value: 'AL', name: 'Alabama'},
        {value: 'AS', name: 'American Samoa'},
        {value: 'AZ', name: 'Arizona'},
        {value: 'AR', name: 'Arkansas'},
        {value: 'CA', name: 'California'},
        {value: 'CO', name: 'Colorado'},
        {value: 'CT', name: 'Connecticut'},
        {value: 'DE', name: 'Delaware'},
        {value: 'DC', name: 'District of Columbia'},
        {value: 'FM', name: 'Federated States of Micronesia'},
        {value: 'FL', name: 'Florida'},
        {value: 'GA', name: 'Georgia'},
        {value: 'GU', name: 'Guam'},
        {value: 'HI', name: 'Hawaii'},
        {value: 'ID', name: 'Idaho'},
        {value: 'IL', name: 'Illinois'},
        {value: 'IN', name: 'Indiana'},
        {value: 'IA', name: 'Iowa'},
        {value: 'KS', name: 'Kansas'},
        {value: 'KY', name: 'Kentucky'},
        {value: 'LA', name: 'Louisiana'},
        {value: 'ME', name: 'Maine'},
        {value: 'MH', name: 'Marshall Islands'},
        {value: 'MD', name: 'Maryland'},
        {value: 'MA', name: 'Massachusetts'},
        {value: 'MI', name: 'Michigan'},
        {value: 'MN', name: 'Minnesota'},
        {value: 'MS', name: 'Mississippi'},
        {value: 'MO', name: 'Missouri'},
        {value: 'MT', name: 'Montana'},
        {value: 'NE', name: 'Nebraska'},
        {value: 'NV', name: 'Nevada'},
        {value: 'NH', name: 'New Hampshire'},
        {value: 'NJ', name: 'New Jersey'},
        {value: 'NM', name: 'New Mexico'},
        {value: 'NY', name: 'New York'},
        {value: 'NC', name: 'North Carolina'},
        {value: 'ND', name: 'North Dakota'},
        {value: 'MP', name: 'Northern Mariana Islands'},
        {value: 'OH', name: 'Ohio'},
        {value: 'OK', name: 'Oklahoma'},
        {value: 'OR', name: 'Oregon'},
        {value: 'PW', name: 'Palau'},
        {value: 'PA', name: 'Pennsylvania'},
        {value: 'PR', name: 'Puerto Rico'},
        {value: 'RI', name: 'Rhode Island'},
        {value: 'SC', name: 'South Carolina'},
        {value: 'SD', name: 'South Dakota'},
        {value: 'TN', name: 'Tennessee'},
        {value: 'TX', name: 'Texas'},
        {value: 'UT', name: 'Utah'},
        {value: 'VT', name: 'Vermont'},
        {value: 'VI', name: 'Virgin Islands'},
        {value: 'VA', name: 'Virginia'},
        {value: 'WA', name: 'Washington'},
        {value: 'WV', name: 'West Virginia'},
        {value: 'WI', name: 'Wisconsin'},
        {value: 'WY', name: 'Wyoming'},
        {value: 'AE', name: 'Armed Forces Africa'},
        {value: 'AA', name: 'Armed Forces Americas (except Canada)'},
        {value: 'AE', name: 'Armed Forces Canada'},
        {value: 'AE', name: 'Armed Forces Europe'},
        {value: 'AE', name: 'Armed Forces Middle East'},
        {value: 'AP', name: 'Armed Forces Pacific'}
      ];
    }
  ])
  // .directive('addressTemplate', function() {
  //   return {
  //     restrict: 'A',
  //     require: '^ngModel',
  //     scope: {
  //       ngModel: '@'
  //     },
  //     templateUrl: '../address.html'
  //   };
  // })
  .directive('navbarTemplate', function() {
    return {
      restrict: 'A',
      templateUrl: '../navbar.html'
    };
  });