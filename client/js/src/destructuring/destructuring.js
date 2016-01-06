console.log('destructuring');
console.log('------------------------------------');

/**
 * destructuring
 * Use of destructuring with arrays.
 */
(function() {
    'use strict';

    console.log('Arrays');

    var doWork = function () {
        return [1, 3, 2];
    };

    //let [x, y] = doWork();
    //let [, x, y] = doWork();
    //let [x, y, z] = doWork();
    let [, x, y, z] = doWork();

    console.log('x: ', x);
    console.log('y: ', y);
    console.log('z: ', z);

})();

console.log(' ');
console.log(' ');

/**
 * destructuring
 * Use of destructuring with objects.
 */
(function() {
    'use strict';

    console.log('Objects');

    let doWork = function () {
        return {
            firstName: 'Matt',
            lastName: 'Polizzotti',
            handles: {
                twitter: 'mpolizzotti'
            }
        };
    };

    let {
        firstName: first,
        lastName,
        handles: {twitter: twitter}
    } = doWork();

    
    console.log('firstName: ', first);
    console.log('lastName: ', lastName);
    console.log('twitter: ', twitter);

})();

console.log(' ');

/**
 * destructuring
 * Use of destructuring with objects.
 */
(function() {
    'use strict';

    var {color, position} = {
        color: 'blue',
        name: 'Matt',
        state: 'Arizona',
        position: 'Forward'
    };

    console.log('color: ', color);
    console.log('position: ', position);
})();

console.log(' ');

/**
 * destructuring
 * Use of destructuring with objects.
 */
(function() {
    'use strict';

    function getData() {
        return {
            color: 'blue',
            name: 'Matt',
            state: 'Arizona',
            position: 'Forward'
        };
    }

    var {name, state} = getData();
    console.log('name: ', name);
    console.log('state: ', state);
})();

console.log(' ');
console.log(' ');

/**
 * destructuring
 * Use of destructuring with parameters.
 */
(function() {
    'use strict';

    console.log('Function Parameters');

    let doWork = function (url, {data, cache}) {
        return data;
    };

    let result = doWork('api/test', {
        data: 'test',
        cache: false
    });

    console.log('result: ', result);
})();

console.log('====================================');
console.log(' ');