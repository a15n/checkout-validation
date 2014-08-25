'use strict';

module.exports = function(grunt) {

  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Times everything
  require('time-grunt')(grunt);

  grunt.initConfig({


    connect: {
      all: {
        options: {
          port: 9000,
          hostname: '0.0.0.0',
          middleware: function(connect, options) {
            return [
              require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
              connect.static(options.base)
            ];
          }
        }
      }
    },
    // Copies all files
    copy: {
      main: {
        files: [{
          expand: true,
          src: ['**', '!dist', '!**/node_modules/**', '!address.html', '!Gruntfile.js', '!README.md', '!TODO.md'],
          dest: 'dist/'
        }, ]
      }
    },
    // Opens the files
    open: {
      all: {
        path: 'http://localhost:<%= connect.all.options.port%>'
      }
    },
    // Watches files and runs tasks (as defined below)
    regarde: {
      all: {
        files: ['index.html', 'navbar.html', 'css/**/*.css', 'css/**/*.scss', 'js/**/*.js'],
        tasks: ['sass','livereload']
      }
    },
    sass: { // Task
      dist: { // Target
        options: { // Target options
          style: 'expanded'
        },
        files: {
          'css/main.css': 'css/main.scss'
        }
      }
    },

  });

  // Creates the 'serve' task
  grunt.registerTask('serve', [
    'sass',
    'livereload-start',
    'connect',
    'open',
    'regarde'
  ]);

  // Creates the 'test' task
  grunt.registerTask('test', [
    'sass'
  ]);
};