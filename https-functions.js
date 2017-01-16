module.exports = function getHTML (options, callback) {
  /* Your code here */
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

};