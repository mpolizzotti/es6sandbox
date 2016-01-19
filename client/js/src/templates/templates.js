console.log('Template Literals');
console.log('------------------------------------');

/**
 * template literals
 * Combine literals and data.
 */
(function() {
    'use strict';

    let doWork = function (name) {
        return `Hello, ${name}.`;
    };

    let result = doWork('Matt');
    console.log('Combine literals and data: ', result);
})();

/**
 * template literals
 * Build urls.
 */
(function() {
    'use strict';

    let category = 'music';
    let id = 2112;
    let url = `http://apiserver/${category}/${id}`;

    console.log('Build url: ', url);
})();

/**
 * template literals
 * Leverage tags with template literals.
 */
(function() {
    'use strict';

    let upper = function (strings, ...values) {
        console.log('strings: ', strings);
        console.log('values: ', values);

        let result = '';
        for (let i = 0; i < strings.length; i++) {
            result = result + strings[i];
            if (i < values.length) {
                result = result + values[i];
            }
        }

        return result.toUpperCase();
    };

    var x = 1;
    var y = 3;
    var strings = `${x} + ${y}`;
    var result = upper `${strings} + is ${x + y}`;

    console.log('Leverage tags: ', result);
})();

console.log('====================================');
console.log(' ');