module.exports = function (grunt) {
    'use strict';

    grunt.config.merge({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ['babelify', {presets: ['es2015', 'react']}]
                    ]
                },
                files: {
                    './dist/js/src/app.bundle.spec.js': ['./client/js/src/**/*.spec.js']
                }
            }
        }
    });
};