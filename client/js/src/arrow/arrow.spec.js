describe('arrow functions', function () {

    it('can provide a compact syntax to define a function.', function () {
        let add = (x, y) => {
            return x + y;
        }

        expect(add(2, 3)).toBe(5);
    });

    it('can provide a compact syntax without function braces.', function () {
        let add = (x, y) => x + y;
        let square = x => x * x;

        expect(add(2, 3)).toBe(5);
        expect(square(2)).toBe(4);
    });

    it('can provide a compact syntax without parameter parenthesis or function braces.', function () {
        let double = x => x * x;

        expect(double(10)).toBe(100);
    });

    it('can be used with array methods.', function() {
        let numbers = [1, 2, 3, 4];

        let sum = 0;
        numbers.forEach(n => sum += n);
        expect(sum).toBe(10);

        let doubled = numbers.map(n => n * 2);
        expect(doubled).toEqual([2, 4, 6, 8]);
    });

    it('can allow the use of the lexical this keyword.', function (done) {
        this.name = 'Matthew';

        let t = setTimeout(() => {
            expect(this.name).toBe('Matthew');
            done();
        }, 100);
    });
});