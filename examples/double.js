
var ac = require('audio-context')
var fetchAsAudioBuffer = require('fetch-as-audio-buffer')

fetchAsAudioBuffer(ac, 'examples/audio/amen.wav').then(resample(1.3)).then(play)

function play (buffer) {
  var source = ac.createBufferSource()
  source.buffer = buffer
  source.connect(ac.destination)
  source.loop = true
  source.start(ac.currentTime)

  window.onclick = function () {
    source.stop()
    window.onclick = null
  }
  return source
}

function stretch (ratio, winSize, hopSize) {
  ratio = ratio || 1
  winSize = winSize || 2048
  hopSize = hopSize || winSize / 4
  var stepSize = hopSize * ratio
  return processor(ratio, function (input, output) {
    var slice1, slice2
    var len = input.length - winSize + hopSize
    for (var i = 0; i < len; i += stepSize) {
      slice1 = 
    }
  })
}

function resample (ratio) {
  return processor(ratio, function (input, output) {
    var length = output.length
    for (var i = 0; i < length; i++) {
      output[i] = input[Math.floor(i * ratio)]
    }
  })
}

function processor (ratio, algorithm) {
  return function (buffer) {
    return new Promise(function (resolve, reject) {
      var input, output
      var channels = buffer.numberOfChannels
      var length = buffer.length / ratio
      var dest = ac.createBuffer(channels, length, buffer.sampleRate)
      for (var c = 0; c < channels; c++) {
        input = buffer.getChannelData(c)
        output = dest.getChannelData(c)
        algorithm(input, output)
        for (var i = 0; i < length; i++) {
          output[i] = input[Math.floor(i * ratio)]
        }
      }
      resolve(dest)
    })
  }
}
