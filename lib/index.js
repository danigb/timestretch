'use strict'

function arrCopy (output, outOffset, input, inOffset, size) {
  for (var i = 0; i < size; i++) {
    output[outOffset + i] = input[inOffset + i]
  }
}

function stretch (ac, input, scale, options) {
  var opts = options || {}
  // Processing sequence size (100 msec with 44100Hz sample rate)
  var seqSize = opts.seqSize || 4410
  // The theoretical start of the next sequence
  var nextOffset = Math.round(seqSize / scale)
  var numSamples = input.length
  var inOffset = 0
  var outOffset = 0
  var output = ac.createBuffer(1, numSamples * scale, input.sampleRate)
  var dataIn = input.getChannelData(0)
  var dataOut = output.getChannelData(0)

  while (numSamples - inOffset > seqSize) {
    arrCopy(dataOut, outOffset, dataIn, inOffset, seqSize)
    outOffset += seqSize
    inOffset += nextOffset
  }

  return output
}

module.exports = { stretch: stretch }
