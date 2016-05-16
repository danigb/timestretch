/* global AudioContext */
var ac = new AudioContext()
var load = require('audio-loader')
var play = require('./play')(ac)
var ts = require('..')

load(ac, 'amen.wav').then(function (buffer) {
  var now = ac.currentTime
  var factors = [1, 1.2, 1.5, 1.3, 1, 0.8, 0.5, 0.3]
  factors.forEach(function (factor, i) {
    play(now + i * 2.1, 2.1, ts.stretch(ac, buffer, factor))
  })
})
