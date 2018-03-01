'use strict'

/* global fetch */

const ROOT = 'http://localhost:5122'
const NEXT_SONG_URL = ROOT + '/provider/playlist/next-song'

class NextSongProvider {
  constructor() {
    this._idx = 0
  }

  async nextSong() {
    const res = await fetch(NEXT_SONG_URL)
    try {
      const nextSongJSON = await res.json()
      const nextSong = JSON.parse(nextSongJSON)
      return nextSong
    } catch (e) {
      console.error(e)
      return null
    }
  }
}

module.exports = NextSongProvider
