(function() {
  'use strict';

  angular.module('app')
    .config(function($stateProvider){
      $stateProvider
        .state('about', {
          url: '/about',
          templateUrl: 'app/about/about.html'
        })
    })

}());