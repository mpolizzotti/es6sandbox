describe('iterators', function () {
    it('can iterate over an array of numbers using the .next() method.', function () {
        let sum = 0;
        let numbers = [1, 2, 3, 4];

        let iterator = numbers.values();
        let next = iterator.next();
        while (!next.done) {
            sum = sum + next.value;
            next = iterator.next();
        }

        expect(sum).toBe(10);
    });

    it('can iterate over an array of numbers using the Symbol.iterator under the hood.', function () {
        let sum = 0;
        let numbers = [1, 2, 3, 4];

        let iterator = numbers[Symbol.iterator]();
        let next = iterator.next();
        while (!next.done) {
            sum = sum + next.value;
            next = iterator.next();
        }

        expect(sum).toBe(10);
    });

    it('can iterate over an array of objects using the .next() method.', function () {
        let sum = 0;
        let numbers = [{num: 1}, {num: 2}, {num: 3}, {num: 4}];

        let iterator = numbers.values();
        let next = iterator.next();
        while (!next.done) {
            sum = sum + next.value.num;
            next = iterator.next();
        }

        expect(sum).toBe(10);
    });

    it('can be used to implement a custom iterator.', function () {
        class ArrayIterator {
            constructor(array) {
                this.array = array;
                this.index = 0;
            }

            next() {
                var result = {value: undefined, done: true};
                if (this.index < this.array.length) {
                    result.value = this.array[this.index];
                    result.done = false;
                    this.index = this.index + 1;
                }
                return result;
            }
        }

        class Company {
            constructor() {
                this.employees = [];
            }

            addEmployees(...names) {
                this.employees = this.employees.concat(names);
            }

            [Symbol.iterator]() {
                return new ArrayIterator(this.employees);
            }
        }

        let count = 0;
        let company = new Company();
        company.addEmployees('Tim', 'Sue', 'Joy', 'Tom');

        for (let employee of company) {
            count = count + 1;
        }

        expect(count).toBe(4);
    });
});

describe('for of loop', function () {
    it('can work with iteratables.', function () {
        let sum = 0;
        let numbers = [1, 2, 3, 4];

        for (let n of numbers) {
            sum = sum + n;
        }

        expect(sum).toBe(10);
    });
});