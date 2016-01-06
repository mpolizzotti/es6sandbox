console.log('Arrow Functions');
console.log('------------------------------------');

/**
 * Arrow Functions
 * Example implmentations for arrow functions.
 */
(function() {
    'use strict';

    // ES5 version.
    var greeting = function (message, name) {
        return message + name;
    }

    // ES6 variation.
    var arrowExample1 = (message, name) => {
        return message + name;
    }
    console.log('Example 1: ', arrowExample1('Hello Bob. From: ', 'Matt'));

    // ES6 variation.
    var arrowExample2 = (message, name) => message + name;
    console.log('Example 2: ', arrowExample2('Hello Steve. From: ', 'Matt'));

    // ES6 variation.
    var arrowExample3 = message => message;
    console.log('Example 3: ', arrowExample3('Hello Alma.'));

    // Less Verbose.
    let arr = [1, 2, 3, 4];
    let arrowSquares = arr.map(x => x * x);
    console.log('Example 4: ', arrowSquares);

    // Arrow functions allow the use of lexical 'this'.
    var radioStation = {
        broadcastMessage: function (message) {
            console.log(message);
        },

        broadcastOnClick: function () {
            let button = document.getElementById('sampleButton');
            button.addEventListener('click', () => {
                this.broadcastMessage('Hello, from planet Earth!');
            });
        }
    };
    radioStation.broadcastOnClick();
})();

console.log('====================================');
console.log(' ');