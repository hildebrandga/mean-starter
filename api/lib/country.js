'use strict';

var config = require('../../api/config/config.js');

exports.getCountry = function(req, res) {
  console.log("getCountry code:" + req.params.code);
  res.json({code: "US",description: "United States"});
} //getCountry