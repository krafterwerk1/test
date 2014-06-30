module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        //input
          src: 'js/global.js',
        //output
          dest: 'js/build/global.min.js'
      },
    },
    watch: {
      scripts: {
        files: 'css/default.scss',
        tasks: ['sass'],
      },
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'css/default.css' : 'css/default.scss'
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //sass
  grunt.loadNpmTasks('grunt-contrib-sass');
  //watch
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'watch']);

};
