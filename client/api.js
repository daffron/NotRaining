import request from 'superagent'

const weatherAPI = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID='

const mapKey = 'fc04e2e516b1de4348fb0323f981a1d9'

module.exports = {
  getWeather
}

function getWeather() {
  request
  .get(weatherAPI + mapKey)
  .set('Accept', 'application/json')
  .end((err, res) => {
    if(err) {
    callback(err.message)
      return
    }
    const weather = res.body
    callback(null, weather)
  })
}
