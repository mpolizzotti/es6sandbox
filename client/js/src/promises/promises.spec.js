describe('Promises', function () {
    it('should execute the callback function given to .then() is called when the Promise is resolved.', function (done) {
        let promise = new Promise(function (resolve, reject) {
            resolve({name: 'Matt'});
        });

        promise.then(function (response) {
            expect(response).toEqual({name: 'Matt'});
            done();
        });
    });

    it('should receive resolved data when the callback function given to .then() is called when the Promise is resolved.', function (done) {
        let promise = new Promise(function (resolve, reject) {
            resolve(1);
        });

        promise.then(function (response) {
            expect(response).toBe(1);
            done();
        });
    });

    it('should fail when the promise is rejected.', function (done) {
        let promise = new Promise(function (resolve, reject) {
            reject(Error('Error: missing parameters.'));
        });

        promise.then(
            function (response) {
                // Success pathway.
            },
            function (response) {
                expect(response.message).toBe('Error: missing parameters.');
                done();
            }
        );
    });

    it('should have a catch() method to catch a rejected promise.', function (done) {
        let promise = new Promise(function (resolve, reject) {
            reject(Error('Error: missing parameters.'));
        });

        promise.catch(function (response) {
            expect(response.message).toBe('Error: missing parameters.');
            done();
        });
    });

    it('should compose when resolved with a promise.', function (done) {
        let previousPromise = new Promise(function (resolve, reject) {
            resolve(3);
        });

        let promise = new Promise(function (resolve, reject) {
            resolve(previousPromise);
        });

        promise.then(function (response) {
            expect(response).toBe(3);
            done();
        });
    });

    it('should have a static resolve (shorthand).', function (done) {
        let previousPromise = Promise.resolve(3);
        let promise = Promise.resolve(previousPromise);

        promise.then(function (response) {
            expect(response).toBe(3);
            done();
        });
    });

    it('should have a static reject (shorthand).', function (done) {
        let promise = Promise.reject(Error('Error: missing parameters.'));

        promise.catch(function (response) {
            expect(response.message).toBe('Error: missing parameters.');
            done();
        });
    });

    it('should be asynchronous.', function (done) {
        let async = false;
        let promise = new Promise(function (resolve, reject) {
            resolve();
        });

        promise.then(function (response) {
            // Executed at the bottom of the call stack.
            expect(async).toBe(true);
            done();
        });

        async = true;
    });

    it('should chain sequentially using the .then() method.', function (done) {
        getOrder(3).then(function (order) {
            expect(order.userId).toBe(35);
            return getUser(order.userId);
        }).then(function (user) {
            expect(user.companyId).toBe(18);
            return getCompany(user.companyId);
        }).then(function (company) {
            expect(company.name).toBe('Unicon');
            done();
        }).catch(function (error) {
            // handle error.
        });
    });

    it('should execute after all promises with the .all() method.', function (done) {
        let courseIds = [1, 2, 3];
        let promises = [];

        for (let i = 0; i < courseIds.length; i++) {
            promises.push(getCourse(courseIds[i]));
        }

        Promise.all(promises).then(function(values) {
            expect(values.length).toBe(3);
            done();
        });
    });

    it('should resolve after the first promise with the .race() method.', function (done) {
        let courseIds = [1, 2, 3];
        let promises = [];

        for (let i = 0; i < courseIds.length; i++) {
            promises.push(getCourse(courseIds[i]));
        }

        Promise.race(promises).then(function(value) {
            expect(value.name).toBeDefined();
            done();
        });
    });
});

describe('Async Generators', function () {
    xit('should be difficult to read with regular aync operations.', function (done) {
        console.log('start');
        pause(500);
        console.log('middle');
        pause(500);
        console.log('end');

        done();
    });

    it('should be easy to read with generators operations.', function (done) {
        let value = 'start';
        function* main () {
            value = 'start';
            expect(value).toBe('start');
            console.log(value);

            yield pause(500);
            value = 'middle';
            expect(value).toBe('middle');
            console.log(value);

            yield pause(500);
            value = 'end';
            expect(value).toBe('end');
            console.log(value);

            done();
        }

        async.run(main);
    });

    it('should work with returned data.', function (done) {
        function* main() {
            let price = yield getStockPrice();
            if (price > 45) {
                expect(price).toBe(50);
                yield executeTrade();
            } else {
                console.log('Trade not made.');
            }
            done();
        }

        async.run(main);
    });

    it('should work with errors.', function (done) {
        function* main() {
            try {
                let price = yield getStockPriceFailure();
                if (price > 45) {
                    yield executeTrade();
                } else {
                    console.log('Trade not made.');
                }
            } catch(e) {
                console.log('Error! ', e.message);
                expect(e.message).toBe('There was a problem with the trade.');
            }

            done();
        }

        async.run(main);
    });
});