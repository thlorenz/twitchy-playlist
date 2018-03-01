'use strict'

const assert = require('assert')
const { h /* @jsx h */, Component } = require('preact')

class CurrentSong extends Component {
  constructor(props) {
    super(props)
    const { onsongEnded } = props
    assert.equal(typeof onsongEnded, 'function', 'need to pass onsongEnded')
    this._bind()
  }

  componentDidMount() {
    this.audioEl.addEventListener('ended', this._onsongEnded)
  }

  _bind() {
    this._onsongEnded = this._onsongEnded.bind(this)
  }
  
  render() {
    const { songURL, songTitle } = this.props

    return (
      <div>
        <p>{songTitle}</p>
        <audio 
          src={songURL} 
          autoplay
          ref={ref => { this.audioEl = ref }} />
      </div>
    )
  }

  _onsongEnded(e) {
    const { onsongEnded } = this.props
    onsongEnded()
  }
}

module.exports = CurrentSong
