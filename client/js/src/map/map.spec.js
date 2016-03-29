describe('Map', function () {
    it('should contain zero items when constructed.', function () {
        let map = new Map();
        expect(map.size).toBe(0);
    });

    it('should contain 1 item when one item is added.', function () {
        let map = new Map();
        map.set('age', 35);
        expect(map.size).toBe(1);
    });

    it('should return the value when get is called with the correct key.', function () {
        let map = new Map();
        map.set('age', 35);
        expect(map.get('age')).toBe(35);
    });

    it('should allow an object to be the key.', function () {
        let map = new Map();
        let ralph = {'name': 'Ralph'};
        map.set(ralph, 29);
        expect(map.get(ralph)).toBe(29);
    });

    it('should contain items when given an array of arrays in the constructor.', function () {
        let name = ['name', 'John'];
        let age = ['age', 15];
        let weight = ['weight', 155];
        let map = new Map([name, age, weight]);
        expect(map.size).toBe(3);
    });

    it('should find the correct item when .has() is called.', function () {
        let name = ['name', 'John'];
        let age = ['age', 15];
        let weight = ['weight', 155];
        let map = new Map([name, age, weight]);
        expect(map.has('age')).toBe(true);
    });

    it('should not allow duplicate keys.', function () {
        let map = new Map();
        let key = {};
        map.set(key, 'first');
        map.set(key, 'second');
        expect(map.get(key)).toBe('second');
    });

    it('should have no items after clear is called.', function () {
        let map = new Map();
        map.set(1, 'a');
        map.set(2, 'b');
        map.set(3, 'c');
        map.clear();
        expect(map.size).toBe(0);
    });

    it('should remove an item when delete is called.', function () {
        let map = new Map();
        map.set(1, 'a');
        map.set(2, 'b');
        map.set(3, 'c');
        map.delete(1);
        expect(map.size).toBe(2);
        expect(map.has(1)).toBe(false);
    });

    it('should call the callback function for each item when forEach is called.', function () {
        let name = ['name', 'John'];
        let age = ['age', 15];
        let weight = ['weight', 155];
        let map = new Map([name, age, weight]);
        let count = 0;

        map.forEach((value, key) => count++);
        expect(count).toBe(3);
    });

    it('should support for of iteration.', function () {
        let name = ['name', 'John'];
        let age = ['age', 15];
        let weight = ['weight', 155];
        let map = new Map([name, age, weight]);
        let count = 0;

        for (let [key, value] of map) {
            count++;
        }

        expect(count).toBe(3);
    });

    it('should return an iterator of arrays of key value pairs when .entries() is called.', function () {
        let map = new Map();
        let items = {};
        let first = [];

        map.set('name', 'Joe');
        items = map.entries();
        //console.log('items: ', items);

        first = items.next().value;
        //console.log('first: ', first);

        expect(first[0]).toBe('name');
        expect(first[1]).toBe('Joe');
    });

    it('should return an iterator of values when .values() is called.', function () {
        let map = new Map();
        let values = {};
        let first = [];
        map.set(1, 'a');

        values = map.values();
        //console.log('values: ', values);

        first = values.next().value;
        //console.log('first: ', first);

        expect(first).toBe('a');
    });

    it('should be able to be constructed with an iterator.', function () {
        let map = new Map();
        map.set('1');
        map.set('2');
        map.set('3');

        let map2 = new Map(map.entries());
        expect(map2.size).toBe(3);
    });
});