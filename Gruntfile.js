// Grunt.
module.exports = function (grunt) {
    'use strict';

    // Configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    // Load plugins/tasks.
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.task.loadTasks('tasks');

    // build
    // Build the distribution folder (ES6 to ES5).
    grunt.registerTask('build', ['copy:dist', 'browserify']);

    // grunt
    // Default tasks that execute with the grunt command.
    grunt.registerTask('default', ['build', 'watch']);
};