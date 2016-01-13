console.log('default parameters');
console.log('------------------------------------');

/**
 * Default parameters.
 * Use of default parameters.
 */
(function() {
    'use strict';

    var doWork = function (name="Matt") {
        // Defaults do not protect against passing empty strings.
        console.log('name: ', name);
        return name;
    };

    var result = doWork();
    var result = doWork(null);
    var result = doWork(undefined);
    var result = doWork('');
})();

console.log('====================================');
console.log(' ');