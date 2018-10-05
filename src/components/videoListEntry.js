angular.module('video-player')

.component('videoListEntry', {
  templateUrl: 'src/templates/videoListEntry.html', 
  controller: function(){
    this.onClick = function(){
      alert(this.video.snippet.title)
      // make a different component?

      // get the value (obj) of what is clicked on

      // set that as the new current video
      
      
    }
    
  },
  bindings: {
    video: '<'
  }
});
