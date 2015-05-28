module.exports = function (grunt) {
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),

        uglify : {
            build : {
                files : {
                    'src/Jeylabs/Laroute/templates/laroute.min.js' : 'src/Jeylabs/Laroute/templates/laroute.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};
