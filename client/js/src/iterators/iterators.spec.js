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






