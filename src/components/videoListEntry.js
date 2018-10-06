angular.module('video-player')

.component('videoListEntry', {
  templateUrl: 'src/templates/videoListEntry.html', 
  controller: 'appCtrl',
  bindings: {
    video: '<',
    click: '<'
  }
});
