// Note: The Set object is a new data set that represents a unique set of items.
describe('Set Object', function () {
    it('should contain zero items when constructed.', function () {
        let set = new Set();
        expect(set.size).toBe(0);
    });

    it('should contain 1 item when one item is added.', function () {
        let set = new Set();
        set.add('somevalue');
        expect(set.size).toBe(1);
    });

    it('should allow objects as a key.', function () {
        let set = new Set();
        let key = {};
        set.add(key);
        expect(set.has(key)).toBe(true);
    });

    it('should contain items when given an array in the constructor.', function () {
        let set = new Set([1, 2, 3]);
        expect(set.has(1)).toBe(true);
        expect(set.has(2)).toBe(true);
    });

    it('should not allow duplicate values.', function () {
        let set = new Set();
        let key = {};
        set.add(key);
        set.add(key);
        expect(set.size).toBe(1);
    });

    it('should have no items after clear is called.', function () {
        let set = new Set();
        set.add(1);
        set.add(2);
        set.add(3);
        set.clear();
        expect(set.size).toBe(0);
    });

    it('should remove an item when delete is called.', function () {
        let set = new Set();
        set.add(1);
        set.add(2);
        set.add(3);
        set.delete(3);
        expect(set.size).toBe(2);
    });

    it('should call a callback function once for each item when foreach is invoked.', function () {
        let set = new Set();
        let count = 0;

        set.add('Tom');
        set.add('Dick');
        set.add('Harry');

        /*
        set.forEach(function (item) {
            count = count + 1;
        });
        */

        set.forEach(item => count++);
        expect(count).toBe(3);
    });

    it('should support for of iteration.', function () {
        let set = new Set();
        let count = 0;

        set.add('Tom');
        set.add('Dick');
        set.add('Harry');

        for (let item of set) {
            count++;
        }

        expect(count).toBe(3);
    });

    it('should return an iterator of arrays when .entries() is called.', function () {
        let set = new Set();
        set.add('1');
        set.add('2');

        // Calling .entries() returns an iterator object of arrays.
        let entries = set.entries();
        //console.log('entries: ', entries);

        // Calling .next().value returns keys.
        let first = entries.next().value;
        //console.log('first: ', first);

        expect(first[0]).toBe('1');
        expect(first[1]).toBe('1');
    });

    it('should return an iterator of values when .values() is called.', function () {
        let set = new Set();
        set.add('1');
        set.add('2');

        // Calling .values() returns an iterator object of values.
        let values = set.values();
        console.log('values: ', values);

        // Calling .next().value returns the value.
        let first = values.next().value;
        //console.log('first: ', first);

        expect(first).toBe('1');
    });

    it('should be able to be constructed with an iterator.', function () {
        let set = new Set();
        set.add('1');
        set.add('2');
        set.add('3');

        let set2 = new Set(set.values());
        expect(set2.size).toBe(3);
    });
});