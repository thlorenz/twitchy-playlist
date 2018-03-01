'use strict'

const { h /* @jsx h */, Component, render } = require('preact')

const CurrentSong = require('../components/current-song')
const NextSongProvider = require('../lib/next-song-provider')

const defaultSong = 'http://www.tannerhelland.com/dmusic/KingOfTheDesert.ogg'
const defaultTitle = 'King Of The Desert'

class TwitchyApp extends Component {
  constructor() {
    super()
    this._bind()

    this._nextSongProvider = new NextSongProvider()
    this._getnextSong()
  }

  _bind() {
    this._oncurrentSongEnded = this._oncurrentSongEnded.bind(this)
  }

  render() {
    const { currentSong } = this.state
    if (currentSong == null) return <div>Waiting for song</div>

    const { songURL, songTitle } = currentSong
    return (
      <CurrentSong
        songURL={songURL}
        songTitle={songTitle}
        onsongEnded={this._oncurrentSongEnded} />
    )
  }

  async _getnextSong() {
    const currentSong = await this._nextSongProvider.nextSong()
    this.setState(Object.assign({}, this.state, { currentSong }))
  }

  _oncurrentSongEnded() {
    this._getnextSong()
  }

}

render(<TwitchyApp />, document.body)
