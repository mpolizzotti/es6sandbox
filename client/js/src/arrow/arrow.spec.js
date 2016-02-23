describe('arrow functions', function () {

    it('can provide a compact syntax to define a function', function () {
        let add = (x, y) => {
            return x + y;
        }

        expect(add(2, 3)).toBe(5);
    });

    it('can provide a compact syntax without function braces', function () {
        let add = (x, y) => x + y;

        expect(add(2, 3)).toBe(5);
    });

    it('can provide a compact syntax without parameter parenthesis or function braces', function () {
        let getMessage = message => message;

        expect(getMessage('Earth to Major Tom!')).toBe('Earth to Major Tom!');
    });

});