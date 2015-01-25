// Browserify is a tool for taking your CommonJS-style Javascript code and packaging it for use in the browser.
module.exports = {
    dist: {
        options: {
            banner: '/*! @generated */'
        },
        files: {
            '<%= cfg.dist %>/scripts/app.js': '<%= cfg.assets %>/scripts/main.js'
        }
    }
};
