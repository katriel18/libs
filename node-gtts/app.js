var gtts = require('node-gtts')('en');
var path = require('path');
var filepath = path.join(__dirname, 'saludo.wav');

gtts.save(filepath, 'Hola', function() {
    console.log('save done');
})