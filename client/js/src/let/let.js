console.log('let');
console.log('------------------------------------');

/**
 * let
 * Use of let keyword.
 */
(function() {
    'use strict';

    // The let keyword provides true block scoping.
    var doWork = function (flag) {
        // The 'x' is scoped to the function.
        let x = 3;

        // The 'y' is scoped to the conditional.
        if (flag) {
            let y = 5;
        }

        // The variable 'i' is scoped to the for loop.
        for (let i = 0; i < 10; i++) {
            console.log('let i: ', i);
        }

        return x;
    };

    var result = doWork(false);
})();

console.log('====================================');
console.log(' ');