console.log('Rest Parameters');
console.log('------------------------------------');

/**
 * rest parameters
 * Rest parameters are similar to arguments.
 */
(function() {
    'use strict';

    let doWork = function (name, ...numbers) {
        let result = 0;
        numbers.forEach(function (n) {
            result += n;
        });
        return result;
    };

    let result = doWork('Matt', 1, 2, 3);
    console.log('Rest parameters are similar to arguments: ', result);

    let result2 = doWork('Matt');
    console.log('Pass nothing to rest parameters: ', result2);
    
})();

console.log('====================================');
console.log(' ');