/*
var say = require('say');

console.log(say);
console.log('init');

say.speak('Numero A-450', null, 1, (err) => {
    console.log('(before)Text has been spoken.');
    if (err) {
        console.error('Error');
        return console.error(err);
    }

    console.log('(after)Text has been spoken.');
});
console.log('finish');
*/
/*
var say = require("say");
var filename = "myaudio.wav"

say.export("Hola David eres el numero A-2002!.", null, 0.75, filename, function(err) {
    if (err) {
        return console.error(err);
    }

    console.log(`Text has been saved to ${filename}`);
});*/

// automatically pick platform
const say = require('say')

// Use default system voice and speed
say.speak('Hola!')