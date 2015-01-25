// Less-ify files
module.exports = {
    dist: {
        files: {
            '<%= cfg.dist %>/styles/app.css': '<%= cfg.assets %>/styles/main.less'
        }
    }
};
