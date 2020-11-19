// Tutorial:
// https://www.youtube.com/watch?v=mj8_w11MvH8&feature=emb_logo

var api = 'https://api.giphy.com/v1/gifs/search?';
var apiKey = '&api_key=dc6zaTOxFJmzC';
var query = '&q=cat';

function setup() {
  noCanvas();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++) {
    createImg(giphy.data[i].images.original.url);
  }
}
