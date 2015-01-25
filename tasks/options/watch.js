// Watches files for changes and runs tasks based on the changed files
module.exports = {
    js: {
        files: ['<%= cfg.assets %>/scripts/{,*/}*.js'],
        tasks: ['jshint', 'browserify']
    },
    gruntfile: {
        files: ['Gruntfile.js', 'tasks/options/*.js'],
        tasks: ['concat', 'copy:dist']
    },
    styles: {
        files: ['<%= cfg.assets %>/styles/{,*/}*{.css,.less}'],
        tasks: ['less']
    }
};
