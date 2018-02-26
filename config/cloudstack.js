var Client = require('node-rest-client').Client;
var crypto = require('crypto');

var api = {
  baseUrl: 'http://acs.local:8080/client/api?',
  apiKey: '',
  apiSecret: ''
}

module.exports.signParamString = function(command, params) {
  params.apiKey = api.apiKey;
  params.command = command;
  params.response = 'json';

  var paramKeys = [];
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      paramKeys.push(key);
    };
  };

  paramKeys.sort();

  var qsParameters = [];
  for (var i = 0; i < paramKeys.length; i++) {
    key = paramKeys[i];
    qsParameters.push(key + '=' + encodeURIComponent(params[key]));
  }

  var queryString = qsParameters.join('&'),
    cryptoAlg = crypto.createHmac('sha1', api.apiSecret),
    signature = cryptoAlg.update(queryString.toLowerCase()).digest('base64');

  return api.baseUrl + queryString + '&signature=' + encodeURIComponent(signature);
}
