module.exports = function (grunt) {
    'use strict';

    grunt.config.merge({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ['babelify']
                    ]
                },
                files: {
                    './dist/app.bundle.js': ['./client/js/**/*.js']
                }
            }
        }
    });
};