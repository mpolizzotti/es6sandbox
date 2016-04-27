describe('let', function () {

    it ('will provide block scoping, unlike var statements.', function () {
        let doWork = function (flag) {
            let x = 3;

            if (flag) {
                let y = 5;
                return y;
            }

            return x;
        };

        let result = doWork(false);
        let result2 = doWork(true);

        expect(result).toBe(3);
        expect(result2).toBe(5);
    });

    it ('will provide block scoping for statements.', function () {
        let doWork = function (flag) {
            let x = 3;

            if (flag) {
                let y = 0;
                for (let i = 0; i <= 5; i++) {
                    y = y + i;
                }

                return y;
            }

            return x;
        };

        let result = doWork(false);
        let result2 = doWork(true);

        expect(result).toBe(3);
        expect(result2).toBe(15);
    });

});