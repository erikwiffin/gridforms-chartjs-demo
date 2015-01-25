// Empty folders to start fresh.
module.exports = {
    dist: {
        files: [{
            dot: true,
            src: [
                '.tmp',
                '<%= cfg.dist %>/*',
                '!<%= cfg.dist %>/.git*'
            ]
        }]
    },
    build: {
        files: [{
            dot: true,
            src: [
                '<%= cfg.build %>/scripts/*'
            ]
        }]
    }
};
