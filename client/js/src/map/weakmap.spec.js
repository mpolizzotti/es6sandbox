describe('WeakMap Object', function () {
    it('should not have properties & methods that relate to the entire map.', function () {
        let map = new WeakMap();
        expect(map.size).toBe(undefined);
        expect(map.entries).toBe(undefined);
        expect(map.values).toBe(undefined);
        expect(map.forEach).toBe(undefined);
    });

    it('should be able to find items with the .has() function.', function () {
        let map = new WeakMap();
        let key = {};
        map.set(key, 'a');
        expect(map.has(key)).toBe(true);
    });

    it('should be able to get items with the .get() function.', function () {
        let map = new WeakMap();
        let key = {};
        map.set(key, 'a');
        expect(map.get(key)).toBe('a');
    });

    it('should be able to remove items with the .delete() function.', function () {
        let map = new WeakMap();
        let key = {};
        map.set(key, 'a');
        map.delete(key);
        expect(map.has(key)).toBe(false);
    });
});