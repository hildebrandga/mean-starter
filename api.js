module.exports = function(app) {
  var country = require('./api/lib/country.js');
   
  //countries
  app.get('/api/public/country/:code', country.getCountry);

}