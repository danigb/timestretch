
/* global AudioContext */
var ac = new AudioContext()
var load = require('audio-loader')
var play = require('./play')(ac)
var ts = require('../..')

var SEQ = 4410

console.log('Loading audio...')
load(ac, 'audio/amen.wav').then(function (buffer) {
  draw(document.getElementById('source'), buffer)
  draw(document.getElementById('sliced'),
    ts.stretch(ac, buffer, 0.9, { overlap: 1 }))
  draw(document.getElementById('overlap'),
    ts.stretch(ac, buffer, 0.9))
})

function draw (canvas, buffer) {
  canvas.onclick = function (e) {
    play(0, 4, buffer)
  }
  var x, y
  var data = buffer.getChannelData(0)
  var endSeq = Math.round(canvas.width / 5)
  var hm = Math.round(canvas.height / 2)
  var start = SEQ - endSeq

  var ctx = canvas.getContext('2d')
  ctx.fillStyle = '#efefef'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.strokeStyle = '#333'
  ctx.beginPath()
  for (x = 0; x < endSeq ; x++) {
    y = hm + Math.round(hm * data[x + start])
    ctx.lineTo(x, y)
  }
  ctx.stroke()
  ctx.strokeStyle = '#C00'
  ctx.beginPath()
  ctx.lineTo(x, y)
  for (x = endSeq; x < SEQ; x++) {
    y = hm + Math.round(hm * data[x + start])
    ctx.lineTo(x, y)
  }
  ctx.stroke()
}
