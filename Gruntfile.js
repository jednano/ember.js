module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            mcrv: {
                src: [
                    'packages/ember-metal/lib/**/*.js',
                    'packages/container/lib/**/*.js',
                    'packages/ember-runtime/lib/**/*.js',
                    'packages/ember-views/lib/**/*.js'
                ],
                dest: 'dist/ember-mcrv.js'
            }
        },
        uglify: {
            mcrv: {
                src: 'dist/ember-mcrv.js',
                dest: 'dist/ember-mcrv.min.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify']);

};
