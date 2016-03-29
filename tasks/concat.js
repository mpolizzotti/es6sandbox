module.exports = function (grunt) {
    'use strict';

    grunt.config.merge({
        concat: {
            spec: {
                src: ['dist/js/src/spec/**/*.js'],
                dest: 'dist/js/src/app.bundle.spec.js'
            }
        }
    });
};