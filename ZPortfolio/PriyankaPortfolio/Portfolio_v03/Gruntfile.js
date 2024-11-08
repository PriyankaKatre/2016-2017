module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2
        },
        files: {
          "CSS/index.css": "LESS/index.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['LESS/*.less'], // which files to watch
        tasks: ['less'], // anything we can write
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};
