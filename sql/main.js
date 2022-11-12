'use strict';
var request = require('request');

var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AMD&apikey=demo';

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      // data is successfully parsed as a JSON object:
      // console.log( data );
      // console.log( Object.values(data)[0][0] );
      // console.log( Object.values(Object.values(data)[0][0])[1] );
      console.log( Object.keys(Object.values(data)[1])[0] );
      console.log( Object.values(Object.values(data)[1])[0] );
    }
});
