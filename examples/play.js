
module.exports = function play (ac, buffer) {
  if (arguments.length === 1) return function (b) { return play(ac, b) }
  var source = ac.createBufferSource()
  source.buffer = buffer
  source.connect(ac.destination)
  source.start()
}
