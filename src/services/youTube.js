
angular.module('video-player')
.service('youTube', function($http){
  this.searchfunction = (searchText, boundfunction) => {
    $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search?part=snippet',
        params: {
          part: 'snippet',
          q: searchText,
          key: YOUTUBE_API_KEY,
          maxResults: 5,
          type: 'video',
          videoEmbeddable: true}
      }).then(function successCallback(data) {
          console.log('data in youTube.js:', data);
          boundfunction(data);
        }, function errorCallback(data) {
          console.log('you failed to call youtube api')
        });
  }
  
});
