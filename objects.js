var playlist = {sublime: 'santeria', outkast: 'roses'}

function updatePlaylist (pl,artist,song) {
  pl[artist]=song
  return pl
}

function removeFromPlaylist(plObj,artist) {
  delete plObj.artist;
}