(function() {
  'use strict';

  angular.module('app', ['ngMaterial', 'ui.router']);

  angular.module('app')
    .config(function($urlRouterProvider){
      $urlRouterProvider.otherwise('/about');
    })

}());