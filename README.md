# timestretch [![npm](https://img.shields.io/npm/v/timestretch.svg)](https://www.npmjs.com/package/timestretch)

[![Build Status](https://travis-ci.org/danigb/timestretch.svg?branch=master)](https://travis-ci.org/danigb/timestretch) [![Code Climate](https://codeclimate.com/github/danigb/timestretch/badges/gpa.svg)](https://codeclimate.com/github/danigb/timestretch) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard) [![license](https://img.shields.io/npm/l/timestretch.svg)](https://www.npmjs.com/package/timestretch)

Yet another library to timestretch audio on the browser.

The focus of this implementaion is to make the code easy to understand. There will be examples of how to:

- Pitchshift an audio buffer
- Perform pitchshifting using a webworker
- Realtime pitchshifting of an audio source

This is not the best implementation if you're looking for sound quality and/or performance (see FAQ).

__This is work in progress__

## (FA)Q

__Are other implementations available?__

Yes, some of them:
- https://github.com/sebpiq/paulstretch.js
- https://github.com/echo66/OLA-TS.js
- https://github.com/echo66/PhaseVocoderJS
- https://github.com/Infinity/Kali
- https://github.com/0xfe/vexwarp
- https://github.com/mikolalysenko/pitch-shift
- https://github.com/GTCMT/pitchshiftjs

And there are probably more...

__Which one should I use?__

I don't know by experiencie, but [@echo66](https://github.com/echo66) projects looks promising.

__Then, why?__

Because I want to learn.

## Resources

- Time Stretching And Pitch Shifting of Audio Signals – An Overview: http://blogs.zynaptiq.com/bernsee/time-pitch-overview/
- Time and pitch scaling in audio processing: http://www.surina.net/article/time-and-pitch-scaling.html
- Basic Time Stretching (that sounds remarkably well): https://github.com/martijnvogten/timestretch/wiki/Basic-Time-Stretching-(that-sounds-remarkably-well)
- Time Stretching & Pitch Shifting with the Web Audio API. Where are we at? (pdf): https://github.com/echo66/time-stretch-wac-article/blob/master/ts-ps-wac.pdf
- Free small FFT in multiple languages: https://www.nayuki.io/page/free-small-fft-in-multiple-languages
- FFT in javascript: https://thebreakfastpost.com/2015/10/18/ffts-in-javascript/
- http://code.almeros.com/experimenting-with-firefox-audio-api#.V-LzSJOLTMU

## License

MIT License
