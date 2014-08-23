'use strict';

(function() {
  angular.module('validation.rule', ['validation'])
    .config(['$validationProvider',



      function($validationProvider) {

        var expression = {
          required: function(value) {
            return !!value;
          },
          ccv: /^\d{3}$/,
          credit: /^\d{16}$/,
          url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
          email: /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
          number: /^\d{}$/,
          phone: /^\d{10}$/,
          zip: /^\d{5}$/
        };

        var defaultMsg = {
          ccv: {
            error: 'Must have exactly 3 digits'
          },
          credit: {
            error: 'Must have exactly 16 digits'
          },
          required: {
            error: 'This field is required'
          },
          phone: {
            error: 'Must have exactly 10 digits'
          },
          zip: {
            error: 'Must have exacly 5 digits'
          }
        };

        $validationProvider.setExpression(expression).setDefaultMsg(defaultMsg);
        $validationProvider.showSuccessMessage = false;
        $validationProvider.setErrorHTML(function(msg) {
          return "<span class=\"error\"> " + msg + "</span>";
        });

      }
    ]);

}).call(this);