describe('the class keyword', function () {
    it('can create a class', function () {

        class Employee {

            doWork() {
                return 'complete!';
            }

            getName() {
                return 'Matt';
            }
        }

        let e = new Employee();
        expect(e.doWork()).toBe('complete!');
        expect(e.getName()).toBe('Matt');
        expect(Employee.prototype.doWork.call(e)).toBe('complete!');
    });

    it('can have a constructor', function () {

        class Employee {
            constructor(name) {
                this._name = name;
            }

            doWork() {
                return 'complete!';
            }

            getName() {
                return this._name;
            }
        }

        let e = new Employee('Matt');

        expect(e.getName()).toBe('Matt');
        expect(Employee.prototype.getName.call(e)).toBe('Matt');
    });


    it('can have getters and setters', function () {

        class Employee {

            constructor(name) {
                this.name = name;
            }

            doWork() {
                return 'complete!';
            }

            get name() {
                return this._name.toUpperCase();
            }

            set name(newValue) {
                if (newValue) {
                    this._name = newValue;
                }
            }
        }

        let e = new Employee('Matt');
        expect(e.name).toBe('MATT');

        e.name = 'Bob';
        expect(e.name).toBe('BOB');
    });


    it('can have inheritance', function () {

        class Person {

            constructor(name) {
                this.name = name;
            }

            get name() {
                return this._name.toUpperCase();
            }

            set name(newValue) {
                if (newValue) {
                    this._name = newValue;
                }
            }
        }

        class Employee extends Person {
            doWork() {
                return `${this.name} is working`;
            }
        }

        let p = new Person('Matt');
        let e = new Employee('Bob');
        
        expect(p.name).toBe('MATT');
        expect(e.name).toBe('BOB');
        expect(e.doWork()).toBe('BOB is working');
    });
});