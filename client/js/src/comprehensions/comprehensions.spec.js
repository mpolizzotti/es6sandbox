describe('comprehensions', function () {
    // Comprehensions are a terse syntax for building arrays and generators.

   it('can be used to replace for-of loops.', function () {
        class Company {
            constructor() {
                this.employees = [];
            }

            addEmployees(...names) {
                this.employees = this.employees.concat(names);
            }

            *[Symbol.iterator]() {
                for (let e of this.employees) {
                    yield e;
                }
            }
        }

        let filter = function* (items, predicate) {
            // Array comprehension.
            //yield* [for (item of items) if(predicate(item)) item];

            // Generator comprehension.
            //yield* (for (item of items) if(predicate(item)) item);

            for (let item of items) {
                if (predicate(item)) {
                    yield item;
                }
            }
        }

        let take = function* (items, number) {
            let count = 0;
            if (number < 1) {
                // Returning in an iterator sets the
                // done flag to true.
                return;
            }
            for (let item of items) {
                yield item;
                count = count + 1;
                if (count >= number) {
                    return;
                }
            }
        }

        let count = 0;
        let company = new Company();
        let found = undefined;
        company.addEmployees('Tim', 'Sue', 'Joy', 'Tom');

        for (let employee of take(filter(company, e => e[0] === 'S'), 1)) {
            count = count + 1;
            found = employee;
            console.log('got: ', employee);
        }

        expect(count).toBe(1);
        expect(found).toBe('Sue');
    });



});