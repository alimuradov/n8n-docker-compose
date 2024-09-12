var https = require('http');

var options = {
  host: '127.0.0.1',
  port: 5678,
  path: '/',
  method: 'GET',
  headers: {'Host': 'n8n.alimuradov.ru', 'Accept': '*/*'},
};

var req = https.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  if (res.statusCode == 200) {
        process.exit(0);
    }
    else {
        process.exit(1);
    }
});

req.on('error', function(e) {
  console.log('ERROR: ' + e.message);
  process.exit(1);
});

req.end();
