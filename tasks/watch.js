module.exports = function (grunt) {
    'use strict';

    grunt.config.merge({
        watch: {
            scripts: {
                files: ['client/js/**/*.js'],
                tasks: ['browserify']
            }
        }
    });
};