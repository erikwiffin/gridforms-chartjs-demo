// Concat tasks.
module.exports = {
    options: {
        nonull: true,
    },
    vendorcss: {
        src: [
            '<%= cfg.bower %>/bootstrap/dist/css/bootstrap.css',
            '<%= cfg.bower %>/gridforms/gridforms/gridforms.css',
        ],
        dest: '<%= cfg.dist %>/styles/vendor.css'
    },
    vendorjs: {
        src: [
            '<%= cfg.bower %>/jquery/dist/jquery.js',
            '<%= cfg.bower %>/bootstrap/dist/js/bootstrap.js',
            '<%= cfg.bower %>/gridforms/gridforms/gridforms.js',
            '<%= cfg.bower %>/moment/moment.js',
            '<%= cfg.bower %>/underscore/underscore.js',
            '<%= cfg.bower %>/chartjs/Chart.min.js'
        ],
        dest: '<%= cfg.dist %>/scripts/vendor.js'
    },
};

