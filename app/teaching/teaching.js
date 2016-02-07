(function() {
  'use strict';

  angular.module('app')
    .config(function($stateProvider){
      $stateProvider
        .state('teaching',{
          url: '/teaching',
          templateUrl: 'app/teaching/teaching.html'
        })
    })

}());