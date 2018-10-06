angular.module('video-player').component('videoList', {
  templateUrl: 'src/templates/videoList.html',
  controller: 'appCtrl',
  bindings: {
    videos: '<',
    click: '<'
  }
});
