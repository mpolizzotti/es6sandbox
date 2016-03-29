module.exports = function (grunt) {
    'use strict';

    grunt.config.merge({
        copy: {
            dist: {
                files: [
                    {
                        src: ['index.html'],
                        dest: 'dist/',
                        expand: true,
                        cwd: 'client/'
                    },
                    {
                        src: ['**'],
                        dest: 'dist/css/',
                        expand: true,
                        cwd: 'client/css/'
                    },
                    {
                        src: ['**'],
                        dest: 'dist/js/lib/',
                        expand: true,
                        cwd: 'client/js/lib/'
                    }
                ]
            }
        }
    });
};
