console.log('Class');
console.log('------------------------------------');

/**
 * class
 * Can create a class.
 */
(function() {
    'use strict';

    class Employee {
        doWork() {
            return 'complete';
        }

        getName() {
            return 'Scott';
        }
    }

    let e = new Employee();
    console.log('Call Employee.doWork(): ', e.doWork());
    console.log('Call Employee.getName(): ', e.getName());
    console.log('Call Employee.doWork() using the prototype: ', Employee.prototype.doWork.call(e));
})();

/**
 * class
 * Can use a constructor.
 */
(function() {
    'use strict';

    class Employee {
        constructor(name) {
            this._name = name;
        }

        doWork() {
            return 'complete';
        }

        getName() {
            return this._name;
        }
    }

    let e1 = new Employee('Matt');
    let e2 = new Employee('Bob');
    console.log('Create e1 Matt with constructor: ', e1.getName());
    console.log('Create e2 Bob with constructor: ', e2.getName());
})();

/**
 * class
 * Can use getters and setters.
 */
(function() {
    'use strict';

    class Employee {
        constructor(name) {
            this._name = name;
        }

        doWork() {
            return 'complete';
        }

        get name() {
            return this._name.toUpperCase();
        }

        set name(name) {
            if (name) {
                this._name = name;
            }
        }
    }

    let e1 = new Employee('Matt');
    let e2 = new Employee('Bob');
    console.log('Use name getter for e1: ', e1.name);
    console.log('Use name getter for e2: ', e2.name);

    e1.name = 'Gavin';
    e2.name = 'Brian';
    console.log('Use name setter for e1: ', e1.name);
    console.log('Use name setter for e2: ', e2.name);
})();


console.log('====================================');
console.log(' ');