
var uid = require('uid');
var mockData = require('./data/mockObject.json');

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

var requestHandler = function(request, response) {
  console.log('Serving request type ' + request.method + ' for url ' + request.url);
  var statusCode = 500;
  var headers = defaultCorsHeaders;
  var responseBody;
  headers['Content-Type'] = 'application/json';
  

  if (request.url.includes('/classes/messages')) {
    if (request.method === 'GET') {
      statusCode = 200;
      responseBody = mockData;
    } else if (request.method === 'POST') {
      statusCode = 201;
      let body = [];
      request.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        body = JSON.parse(body);
        body.createdAt = new Date();
        body.updatedAt = new Date();
        body.objectId = uid(10);
        mockData.results.unshift(body);
      }); 
    } else if (request.method === 'OPTIONS') {
      statusCode = 200;
      headers['Allow'] = 'GET, POST, OPTIONS';
    }
  } else {
    statusCode = 404;
    responseBody = '404 resource not found';
  }

  response.writeHead(statusCode, headers);
  if (responseBody === undefined) {
    response.end();
  } else {
    response.end(JSON.stringify(responseBody));
  }
};

module.exports.requestHandler = requestHandler;
