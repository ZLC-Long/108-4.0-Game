// Tutorial:
// https://www.youtube.com/watch?v=mj8_w11MvH8&feature=emb_logo

//url search
//host 
var api = 'https://api.giphy.com/v1/gifs/search?';
//public-api_key
var apiKey = '&api_key=dc6zaTOxFJmzC';
//q= putwhat you need
var query = '&q=cat';

function setup() {
  noCanvas();
  //compose url
  var url = api + apiKey + query;
  //function loadJSON
  loadJSON(url, gotData);
}

//filled with the data from the API
function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
  }
}
