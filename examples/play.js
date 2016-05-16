
module.exports = function (ac) {
  return function play (when, duration, buffer) {
    var source = ac.createBufferSource()
    source.buffer = buffer
    source.connect(ac.destination)
    source.start(when, 0, duration)
  }
}
