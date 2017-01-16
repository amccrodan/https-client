function getHTML (options, callback) {

  var https = require('https');

  /* Add your code here */
  https.get(options, function (response) {

    var bufferString = '';

    response.setEncoding('utf8');

    response.on('data', function (data) {
      bufferString += data;
    });

    response.on('end', function() {
      callback(bufferString);
    });

  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);