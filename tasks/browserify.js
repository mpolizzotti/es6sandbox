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
                    './dist/app.bundle.js': ['./client/js/**/*.js']
                }
            }
        }
    });
};