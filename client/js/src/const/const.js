console.log('const');
console.log('------------------------------------');

/**
 * const
 * Use of const keyword.
 */
(function() {
    'use strict';

    // The MAX_SIZE constant is scoped to the closure.
    const MAX_SIZE = 10;

    // The MAX_SIZE constant is scoped to the doWork method.
    var doWork = function () {
        const MAX_SIZE = 12;
        return MAX_SIZE;
    };

    var result = doWork();
    console.log('MAX_SIZE: ', MAX_SIZE);
    console.log('MAX_SIZE scoped to doWork(): ', result);
})();

console.log('====================================');
console.log(' ');