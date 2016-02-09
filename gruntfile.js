module.exports = function (grunt) {
    "use strict";

    // Config...
    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ['index.html', '*.html', 'assets/**', 'css/**', 'img/**', '*/*.*']
            }
        },
        // Run a connect server with livereload on http://0.0.0.0:8888
        connect: {
            server: {
                options: {
                    livereload: true,
                    port: 8888,
                    hostname: '*'
                }
            }
        },
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks
    grunt.registerTask('server', ['connect:server', 'watch']);

    // Default task when run from terminal $ grunt
    grunt.registerTask('default', ['server']);
};
