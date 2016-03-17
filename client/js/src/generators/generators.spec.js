describe('generators', function () {

    it('can generate an iterable.', function () {
        // Generator function, under the hood, is creating
        // an iterator object, similar to the ArrayIterator
        // that was built witin the iterators.spec.js file. 
        let numbers = function*(start, end) {
            for (let i = start; i <= end; i++) {
                yield i;
            }
        };

        let sum = 0;
        let iterator = numbers(1, 3);
        let next = iterator.next();
        while (!next.done) {
            sum += next.value;
            next = iterator.next();
        }

        expect(sum).toBe(6);
    });

    it('can be used with a for of loop.', function () {
        let numbers = function*(start, end) {
            for (let i = start; i <= end; i++) {
                yield i;
            }
        };

        let sum = 0;
        // The 'for of' loop is generating the code to
        // work with an iterator. It's calling next and
        // checking the done flag under the hood.
        for (let n of numbers(1, 5)) {
            sum += n;
        }

        expect(sum).toBe(15);
    });

    it('can be used to implement filtering.', function () {
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
        company.addEmployees('Tim', 'Sue', 'Joy', 'Tom');

        for (let employee of take(filter(company, e => e[0] === 'T'), 2)) {
            count = count + 1;
        }

        expect(count).toBe(2);
    });

    it('can take a parameter from next(param).', function () {
        let range = function* (start, end) {
            let current = start;
            while (current <= end) {
                let delta = yield current;
                current += delta || 1;
            }
        }

        let result = [];
        let iterator = range(1, 10);
        let next = iterator.next();

        while (!next.done) {
            result.push(next.value);
            next = iterator.next(2);
        }

        expect(result).toEqual([1, 3, 5, 7, 9]);

    })
});