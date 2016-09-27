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
        dest: 'build/index.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['uglify'])
};