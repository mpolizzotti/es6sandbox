describe('Arrays', function () {
    it('should return the first matching element using .find().', function () {
        let ary = [1, 5, 10];
        let match = ary.find(item => item > 8);
        expect(match).toBe(10);
    });

    it('should return the first matching index using .findIndex().', function () {
        let ary = [1, 5, 10];
        let match = ary.findIndex(item => item > 3);
        expect(match).toBe(1);
    });

    it('should fill in the entire array when .fill() is called.', function () {
        let ary = [1, 2, 3, 4, 5];
        ary.fill('a');
        expect(ary[0]).toBe('a');
        expect(ary[2]).toBe('a');
        expect(ary[3]).toBe('a');
    });

    it('should fill in sections of an array when .fill() is called with arguments.', function () {
        let ary = [1, 2, 3, 4, 5];
        ary.fill('a', 2, 3);
        expect(ary[0]).toBe(1);
        expect(ary[1]).toBe(2);
        expect(ary[2]).toBe('a');
        expect(ary[3]).toBe(4);
    });

    it('should copy elements with .copyWithin(to, from).', function () {
        let ary = [1, 2, 3, 4];
        ary.copyWithin(2, 0);
        expect(ary).toEqual([1, 2, 1, 2]);
    });

    it('should create a new array using the Array.of() method when given 1 argument.', function () {
        let ary = Array.of('Bob');
        expect(ary.length).toBe(1);
        expect(ary[0]).toBe('Bob');
    });

    it('should create a new array from an array-like object using .from().', function () {
        let arrayLike = document.querySelectorAll('div');
        expect(arrayLike.forEach).toBe(undefined);

        let fromArray = Array.from(arrayLike);
        expect(fromArray.forEach).toBeDefined();
    });

    it('should return entries from the .entries() function.', function () {
        let a = ['Joe', 'Jim', 'John'];
        let entries = a.entries();
        let first = entries.next().value;
        let second = entries.next().value;

        expect(first[0]).toBe(0);
        expect(first[1]).toBe('Joe');
        expect(second[0]).toBe(1);
        expect(second[1]).toBe('Jim');
    });

    it('should enumerate keys with the .keys() function.', function () {
        let a = ['Joe', 'Jim', 'John'];
        let keys = a.keys();
        let first = keys.next().value;
        expect(first).toBe(0);
    });
});

describe('Array Comprehensions', function () {
    // Comprehensions are causing parse errors with the browserify plugin,
    // which is why these tests are currently commented out.

    /*
    it('should create arrays easily.', function () {
        let ary = [1, 2, 3];
        let ary2 = [for (i of ary) i];
        expect(ary).toEqual(ary2);
    });

    it('should create array values using a predicate function.', function () {
        let ary = [1, 2, 3];
        let ary2 = [for (i of ary) i * i];
        expect(ary2).toEqual([1, 4, 9]); 
    });

    it('should create array values using a filter operation.', function () {
        let ary = [1, 2, 3];
        let ary2 = [for (i of ary) if (i < 3) i]; // [1, 2]
        expect(ary2).toEqual([1, 2]); 
    });
    
    it('should create array from multiple comprehension operations.', function () {
        let firstNames = ['William', 'John', 'Blake'];
        let middleNames = ['Robert', 'Andrew', 'John'];

        let ary = [
            for (first of firstNames)
            for (middle of middleNames)
            if (first != middle)
            (first + '' middle + ' Smith')
        ];

        expect(ary[0]).toBe('William Robert Smith'); 
    });
    */
});