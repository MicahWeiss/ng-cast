angular.module('video-player')

.component('search', { //Dependency injection []
  templateUrl: 'src/templates/search.html',
  controller: 'appCtrl',
  bindings: {
    searchyt: '<',
    boundf: '<'
  }
})
