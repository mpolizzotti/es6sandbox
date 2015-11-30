/**
 * Arrow Functions
 * Example implmentations for arrow functions.
 */
console.log('Arrow Functions');
console.log('------------------------------------');

// ES5 version.
var greeting = function (message, name) {
    return message + name;
}

// ES6 variation.
var example1 = (message, name) => {
    return message + name;
}
console.log('Example 1: ', example1('Hello Bob. From: ', 'Matt'));

// ES6 variation.
var example2 = (message, name) => message + name;
console.log('Example 2: ', example2('Hello Steve. From: ', 'Matt'));

// ES6 variation.
var example3 = message => message;
console.log('Example 3: ', example3('Hello Alma.'));

console.log('====================================');
console.log(' ');