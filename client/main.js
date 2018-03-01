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
    this.state = {
      currentSong: this._nextSongProvider.nextSong()
    }
  }

  _bind() {
    this._oncurrentSongEnded = this._oncurrentSongEnded.bind(this)
  }

  render() {
    const { currentSong } = this.state
    const { songURL, songTitle } = currentSong
    return (
      <CurrentSong 
        songURL={songURL} 
        songTitle={songTitle} 
        onsongEnded={this._oncurrentSongEnded} />
    )
  }
  
  _oncurrentSongEnded() {
    const currentSong = this._nextSongProvider.nextSong()
    this.setState(Object.assign({}, this.state, { currentSong }))
  }

}

render(<TwitchyApp />, document.body)
