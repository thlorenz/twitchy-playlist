'use strict'

const express = require('express')

const playlist = [
    { songTitle: 'laugh 1', songURL: 'https://freesound.org/data/previews/152/152911_2771835-lq.mp3' }
  , { songTitle: 'laugh 2', songURL: 'https://freesound.org/data/previews/403/403058_6094808-lq.mp3' }
  , { songTitle: 'laugh 3', songURL: 'https://freesound.org/data/previews/381/381374_6456158-lq.mp3' }
]

var idx = 0
function nextSong(req, res) {
  if (++idx >= playlist.length) idx = 0
  const song = playlist[idx]
  const json = JSON.stringify(song)
  res.status(200).json(json)
}

function queue(req, res) {
  const json = JSON.stringify(playlist)
  res.status(200).json(json)
}

function createRouter() {
  const router = express.Router()

  router
    .get('/playlist/next-song', nextSong)
    .get('/playlist/queue', queue)

  return router
}

module.exports = createRouter
