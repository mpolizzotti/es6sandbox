function getOrder(orderId) {
    return Promise.resolve({userId: 35});
}

function getUser(userId) {
    return Promise.resolve({companyId: 18});
}

function getCompany(companyId) {
    return Promise.resolve({name: 'Unicon'});
}

function getCourse(courseId) {
    var courses = {
        1: {name: 'Introduction to Cobol'},
        2: {name: 'Yet Another C# Course'},
        3: {name: 'How to make billions by blogging'},
    };

    return Promise.resolve(courses[courseId]);
}

function pause(delay) {
    setTimeout(function () {
        console.log('paused for ' + delay + 'ms');
        async.resume();
    }, delay);
}

function getStockPrice() {
    setTimeout(function () {
        async.resume(50);
    }, 300);
}

function getStockPriceFailure() {
    setTimeout(function () {
        try {
            throw Error('There was a problem with the trade.');
            async.resume(50);
        } catch(e) {
            async.fail(e);
        }

        async.resume(50);
    }, 300);
}

function executeTrade() {
    setTimeout(function () {
        console.log('Trade executed.');
        async.resume();
    }, 300);
}

(function () {
    var sequence;

    var run = function (generator) {
        sequence = generator();
        var next = sequence.next();
    };

    var resume = function (value) {
        sequence.next(value);
    }

    var fail = function (reason) {
        sequence.throw(reason);
    }

    window.async = {
        run: run,
        resume: resume,
        fail: fail
    }
}());