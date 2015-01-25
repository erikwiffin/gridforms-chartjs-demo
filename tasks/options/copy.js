// Copies remaining files to places other tasks can use.
module.exports = {
    dist: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= cfg.assets %>/bower_components/bootstrap/dist',
            src: ['fonts/*.*'],
            dest: '<%= cfg.dist %>'
        }]
    },

    build: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= cfg.assets %>',
            dest: '<%= cfg.build %>',
            src: [
                'scripts/**/*.js'
            ]
        }]
    }
};

