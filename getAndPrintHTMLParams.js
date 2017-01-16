function getAndPrintHTMLParams (options) {

  var https = require('https');

  /* Add your code here */
  https.get(options, function (response) {

    var bufferString = '';

    response.setEncoding('utf8');

    response.on('data', function (data) {
      bufferString += data;
    });

    response.on('end', function() {
      console.log(bufferString);
    });

  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTMLParams(requestOptions);