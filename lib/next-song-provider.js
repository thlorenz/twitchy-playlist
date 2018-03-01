'use strict'

const laughs = [
    'https://freesound.org/data/previews/152/152911_2771835-lq.mp3'
  , 'https://freesound.org/data/previews/403/403058_6094808-lq.mp3'
  , 'https://freesound.org/data/previews/381/381374_6456158-lq.mp3'
]

class NextSongProvider {
  constructor() {
    this._idx = 0
  }

  nextSong() {
    if (++this._idx >= laughs.length) this._idx = 0
    return {
        songTitle: 'Laugh ' + this._idx
      , songURL: laughs[this._idx]
    }
  }
}

module.exports = NextSongProvider
