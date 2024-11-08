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
          "css/task_v02.css": "less/task_v02.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['less/*.less'], // which files to watch
        tasks: ['less'], // anything we can write
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};
