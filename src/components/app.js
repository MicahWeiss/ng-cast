angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: 'appCtrl'
})

.controller( 'appCtrl', ['youTube', function(youTube){
  this.currentVideo = exampleVideoData[0];
  this.videos= exampleVideoData;
  this.onClick = (newVideo) => {this.currentVideo = newVideo};  // arrow functions keep context
  this.invokeyt = (searchText, boundfunction) => {
    youTube.searchfunction(searchText, boundfunction);
  }
  this.ytData = (data) => {
    this.currentVideo = data.data.items[0];
    this.videos = data.data.items;
  }
}]);
