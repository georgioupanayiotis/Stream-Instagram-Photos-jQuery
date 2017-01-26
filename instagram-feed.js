$(document).ready(function(){
      var token = ""; //your access token here. Visit http://instagram.pixelunion.net/ to get your access token
        num_photos = 20; //limit number of photos

      $.ajax({
          url: 'https://api.instagram.com/v1/users/self/media/recent',
          dataType: 'jsonp',
          type: 'GET',
          data: {access_token: token, count: num_photos},
          success: function(data){
              console.log(data);
              for( x in data.data ){
                  $('ul').append('<li><a target="_blank" href="'+data.data[x].link+'"><img src="'+data.data[x].images.low_resolution.url+'"></a></li>');
              }
          },
          error: function(data){
              console.log(data);
          }
      });
});
