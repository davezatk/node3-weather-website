const request = require('request')

const forecast = (latitude,longitude, callback) => {
    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZHphdGtpZXdpY3oiLCJhIjoiY2p4ZGVwdGZ5MGRicTN0bWxkdzhzeDJ2dyJ9.z9iwor3_42-wdBl5pNm3EQ&limit=1'
    const url = 'https://api.darksky.net/forecast/8758601aacccdadfa9db5cbb34a171f2/' + latitude + ',' + longitude
    request({ url, json:true}, (error, { body }) => {
          if (error) {
                callback('Unable to connect to weather service.')
          } else if (body.error) {
                callback('Unable to find location.')
          } else {
                callback(undefined,{
                      fullSummary: body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.',
                      timeZone:  body.timezone,
                      currentTemp: body.currently.temperature,
                      dailySummary: body.daily.data[0].summary
                })
          }          
    })        
}

module.exports = forecast

//const url = 'https://api.darksky.net/forecast/8758601aacccdadfa9db5cbb34a171f2/37.8267,-122.4233?units=us&lang=es'
// const url = 'https://api.darksky.net/forecast/8758601aacccdadfa9db5cbb34a171f2/37.8267,-122.4233'

// request({url: url, json: true}, (error, response) => {
//   if (error) {
//     //console.log(error)
//     console.log('Unable to connect to weather service.')
//   } else if (response.body.error) {
//     console.log('Unable to find location.')
//   }
//     else {  
//     //console.log(response.body.currently)
//     //const data = JSON.parse(response.body)
//     //console.log(data.currently)
//     //console.log(response)cls
//     console.log('Time zone is: ' + response.body.timezone)
//     console.log(response.body.daily.data[0].summary)
//     console.log('Current temperature: ' + response.body.currently.temperature)
//     console.log('Chance of precip: ' + response.body.currently.precipProbability + '%')
//   }
// })
