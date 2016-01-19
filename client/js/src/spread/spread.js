console.log('Spread');
console.log('------------------------------------');

/**
 * spread
 * Spread array across parameters.
 */
(function() {
    'use strict';

    let doWork = function (x, y, z) {
        return x + y + z;
    };

    let result = doWork(...[1, 2, 3]);
    console.log('Spread array across parameters: ', result);
})();

/**
 * spread
 * Spread can be used to build arrays.
 */
(function() {
    'use strict';

    let a = [4, 5, 6];
    let b = [1, 2, 3, ...a, 7, 8, 9];

    console.log('Spread can be used to build arrays: ', b);
})();

console.log('====================================');
console.log(' ');