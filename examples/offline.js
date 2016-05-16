/* global AudioContext */
var ac = new AudioContext()
var load = require('audio-loader')
var play = require('./play')(ac)
var ts = require('..')

load(ac, 'examples/amen.wav').then(function (buffer) {
  console.log('Audio', buffer)
  play(ts.stretch(ac, buffer, 1.1))
})
