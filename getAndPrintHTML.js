function getAndPrintHTML () {

  var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {

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

getAndPrintHTML();