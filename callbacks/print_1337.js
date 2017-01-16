var getHTML = require('../https-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {

  /* Write your code here! */
  var oldBit = ['ck', 'er', 'you', 'a', 'e', 'o', 'l', 's', 't'];
  var newBit = ['x', '0r', 'j00', '4', '3', '0', '1', '5', '7'];

  var html1337 = html;

  for (var i = 0; i < oldBit.length; i++) {
    var regex = new RegExp(oldBit[i], 'g');
    html1337 = html1337.replace(regex, newBit[i]);
  }

  console.log(html1337);
}

getHTML(requestOptions, print1337);