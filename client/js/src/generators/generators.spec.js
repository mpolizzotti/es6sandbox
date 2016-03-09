describe('generators', function () {

    it('can build an iterable', function () {
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

    it('can be used with a for of loop', function () {
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
});