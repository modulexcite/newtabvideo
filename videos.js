var videos =  [ 
  {mp4: "http://giant.gfycat.com/ImpracticalFocusedCarp.mp4"},
  {mp4: "http://fat.gfycat.com/BitesizedViciousFlea.mp4"},
  {mp4: "http://giant.gfycat.com/AbleRevolvingBinturong.mp4"}
]

var random = Math.floor(Math.random() * videos.length);
var mp4_source = document.getElementById("mp4_source");
mp4_source.src = videos[random]["mp4"];


function loadVideo() {
    var video = document.getElementsByTagName('video')[0];
    var sources = video.getElementsByTagName('source');
    sources[0].src = videos[random]["mp4"];
    //sources[1].src = 'video2.ogv';
    video.load();
}
loadVideo();
