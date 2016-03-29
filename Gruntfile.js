// Grunt.
module.exports = function (grunt) {
    'use strict';

    // Configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    // Load plugins/tasks.
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.task.loadTasks('tasks');

    // build
    // Build the distribution folder (ES6 to ES5).
    grunt.registerTask('build', ['clean:setup', 'copy:dist', 'babel', 'concat:spec', 'clean:teardown']);

    // grunt
    // Default tasks that execute with the grunt command.
    grunt.registerTask('default', ['build', 'watch']);
};