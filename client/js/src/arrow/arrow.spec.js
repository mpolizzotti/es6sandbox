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
        let double = x => x * x;

        expect(double(10)).toBe(100);
    });

    it('can allow the use of the lexical this keyword', function () {
        let FooService = {
            doSomething: function (callback) {
                return callback('World');
            },
            doSomethingElse: function (callback) {
                return callback('World');
            }
        };

        let FooCtrl = function (FooService) {
            var that = this;
            that.foo = 'Hello';
            FooService.doSomethingElse(function (response) {
                that.foo = that.foo + response;
                expect(that.foo).toBe('HelloWorld');
            });
            
            
            this.foo = 'Hello';
            FooService.doSomething((response) => {
                this.foo = this.foo + response;
                expect(this.foo).toBe('HelloWorld');
            });
        }

        let foo = new FooCtrl(FooService);
    });
});