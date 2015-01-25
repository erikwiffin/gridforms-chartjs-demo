'use strict';

module.exports = function (grunt) {

    // Configurable paths
    var config = require('load-grunt-config')(grunt, {
        configPath: 'tasks/options',
        init: false
    });

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Load custom tasks
    //grunt.loadTasks('tasks');

    grunt.registerTask('default', [
            'build'
            ]);

    grunt.registerTask('build', [
            'jshint',
            'clean:dist',
            'browserify',
            'less',
            'concat',
            'copy:dist'
            ]);

    // Pass paths and details to the config variable
    config.env = process.env;
    config.pkg = grunt.file.readJSON('package.json');
    config.cfg = {
        assets: 'assets',
        bower: 'assets/bower_components',
        build: 'build',
        dist: 'www/dist',
    };

    // Init the config
    grunt.initConfig(config);
};

