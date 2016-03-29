module.exports = function (grunt) {
    'use strict';

    grunt.config.merge({
        clean: {
            setup: [
                'dist/'
            ],
            teardown: [
                'dist/js/src/spec/'
            ]
        }
    });
};