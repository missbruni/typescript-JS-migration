module.exports = function(grunt) {
  //Project Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '-'
      },
      build: {
        src: 'src/index.js',
        dest: 'build/bundle-src.js'
      }
    },
    browserify : {
      build : {
        files : {
          'build/bundle.js': ['src/*.js']
        },
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', ['browserify', 'uglify'])
};