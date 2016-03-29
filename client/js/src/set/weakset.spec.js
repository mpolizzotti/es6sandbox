describe('WeakSet Object', function () {
    it('should not have properties & methods that relate to the entire set.', function () {
        let set = new WeakSet();
        expect(set.size).toBe(undefined);
        expect(set.entries).toBe(undefined);
        expect(set.values).toBe(undefined);
        expect(set.forEach).toBe(undefined);
    });

    it('should be able to find items with the .has() function.', function () {
        let set = new WeakSet();
        let item = {name: 'Joe'};
        set.add(item);
        expect(set.has(item)).toBe(true);
    });

    it('should be able to remove items with the .delete() function.', function () {
        let set = new WeakSet();
        let item = {name: 'Joe'};
        set.add(item);
        set.delete(item);
        expect(set.has(item)).toBe(false);
    });
});