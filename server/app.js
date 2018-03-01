'use strict'

const PORT = process.env.PORT || 5122
const express = require('express')
const cors = require('cors')

const debugInfo = require('debug')('twitchy-app:info')
const morgan = require('morgan')

const app = express()
const createProvider = require('./apps/provider')
const providerApp = createProvider()

app
  .use(morgan('dev'))
  .use(cors())
  .use('/provider', providerApp)
  .get('/ping', (req, res) => res.status(200).send('pong'))
  .listen(PORT, () => debugInfo('Listening on', PORT))
