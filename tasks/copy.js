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
                    }
                ]
            }
        }
    });
};
