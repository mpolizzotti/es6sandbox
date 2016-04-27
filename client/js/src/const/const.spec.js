describe('const', function () {

    it ('will make a variable read-only.', function () {
        const MAX_SIZE = 10;
        //MAX_SIZE = 12; // Syntax Error
        expect(MAX_SIZE).toBe(10);
    });

});