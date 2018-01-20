var playlist={abc:"abc1",
              def:"def1"
              }
<<<<<<< HEAD
var artistname="ghi";
var  songtitle="ghi1";
function updatePlaylist(playlist, artistname,songtitle){
  playlist[artistname]=songtitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistname){
  delete playlist[artistname];
=======
var artist=ghi;
var song="ghi1";
function updatePlaylist(playlist, artist,song){
  playlist.artist=`song`;
 // playlist[artist]=song;
  return playlist;
}

function removeFromPlaylist(playlist, artist){
  delete playlist.artist;
>>>>>>> 83b52c5019a991f683354e393110cb9274483cef
  return playlist;
}