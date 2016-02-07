(function() {
  'use strict';

  angular.module('app')
    .directive('appTopbar', function () {
      return {
        restrict: 'A',
        scope: {

        },
        templateUrl: 'app/common/topbar/topbar.html',
        controllerAs: 'vm',
        controller: function($scope){
          var vm = this;
        }
      }
    })

}());