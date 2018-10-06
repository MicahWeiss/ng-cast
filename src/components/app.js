angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: 'appCtrl'
})

.controller( 'appCtrl', function(){
  this.currentVideo = exampleVideoData[0];
  this.videos= exampleVideoData;
  this.onClick = (newVideo) => {this.currentVideo = newVideo};  // arrow functions keep context
});
