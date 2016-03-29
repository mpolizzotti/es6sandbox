module.exports = function (grunt) {
    'use strict';

    grunt.config.merge({
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'client/js/src/',
                        src: ['**/*.spec.js'],
                        dest: './dist/js/src/spec/'
                    }
                ]
            }
        }
    });
};