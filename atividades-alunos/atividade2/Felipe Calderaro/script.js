/*
  Nota do JavaScript: 10
*/

const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const tripJapan = '11 Apr 2027'

function countdown() {
  const tripDate = new Date(tripJapan)
  const currentDate = new Date()

  const totalSeconds = new Date(tripDate - currentDate) / 1000
  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60

  daysEl.innerHTML = days
  hoursEl.innerHTML = formatTime(hours)
  minsEl.innerHTML = formatTime(minutes)
  secondsEl.innerHTML = formatTime(seconds)
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
}

//initial call
countdown();

setInterval(countdown, 1000)
