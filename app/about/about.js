(function() {
  'use strict';

  angular.module('app')
    .config(function($stateProvider){
      $stateProvider
        .state('about', {
          url: '/about',
          templateUrl: 'app/about/about.html',
          controllerAs: 'vm',
          controller: aboutCtrl
        })
    });

  function aboutCtrl(){
    var vm = this;

    vm.profilePicture = 'http://placehold.it/150x150';

    vm.fullName = 'John Doe';

    vm.social = {
      facebook: 'facebook',
      googlePlus: 'google+',
      linkedIn: 'linkedin',
      github: 'github'
    };

    vm.location = 'Surabaya, Indonesia';

    vm.summary = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    vm.education = [
      {
        year: '2003 - 2008',
        institution: 'Institut Teknologi Sepuluh Nopember',
        major: 'Teknik Informatika',
        minor: 'Image Processing'
      },
      {
        year: '2008 - 2011',
        institution: 'Institut Teknologi Sepuluh Nopember',
        major: 'Teknik Elektro',
        minor: 'Video Processing'
      }
    ];

    vm.experiences = [
      {
        year: '2012',
        event: 'Third Country Training Program by JICA',
        responsibility: 'Lecturer'
      }
    ];

    vm.skills = [
      {
        software: 'Adobe Flash Professional CS3',
        level: 3
      },
      {
        software: 'Adobe Flash Professional CC',
        level: 3
      },
      {
        software: 'Blender 2.7',
        level: 3
      },
      {
        software: 'Adobe After Effects CC',
        level: 1
      }
    ];
  }
}());