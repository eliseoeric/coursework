const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/db938ea7a79649affdcaf6e629eb2441/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
      	temperature: body.currently.temperature,
      	apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather from Forecast.io service');
    }
  });
};

module.exports.getWeather = getWeather;