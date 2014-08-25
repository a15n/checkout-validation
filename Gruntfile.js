'use strict';

module.exports = function(grunt) {

  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Times everything
  require('time-grunt')(grunt);

  grunt.initConfig({

    // deletes everything in Dist, except any git files
    clean: {
      begin: {
        files: [{
          dot: true,
          src: [
            'dist/*',
            '!dist/.git*'
          ]
        }]
      },
      end: {
        files: [{
          dot: true,
          src: [
            //place files here to delete from Dist at the end of the build
          ]
        }]
      }
    },
    // concats all JS files into one final dest file
    concat: {
      dist: {
        src: [
          'js/main.js',
          'js/jquery.js',
          'js/angular-validation.js.js',
          'js/angular-validation-rule.js.js'
        ],
        dest: 'dist/js/main.js'
      }
    },
    // Stav this
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
          src: ['**', '!dist', '!**/node_modules/**', '!address.html', '!Gruntfile.js', '!package.json', '!README.md', '!TODO.md'],
          dest: 'dist/'
        }, ]
      }
    },
    // Minifies all CSS
    cssmin: {
      combine: {
        files: {
          'dist/css/main.css': ['dist/css/bootstrap.css', 'dist/css/normalize.css','dist/css/main.css']
        }
      }
    },
    // Minifies all HTML
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          useShortDoctype: true,
          minifyJS: true
        },
        files: {
          'dist/index.html': 'dist/index.html'
        }
      }
    },
    // Minifies all min (10-15% savings)
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          src: ['img/*.{png,jpg,gif}'],
          dest: 'dist/'
        }]
      }
    },
    // Opens the files
    open: {
      all: {
        path: 'http://localhost:<%= connect.all.options.port%>'
      }
    },
    // Processes comments within HTML (see here)
    processhtml: {
      dist: {
        files: {
          'dist/index.html': ['dist/index.html']
        }
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

    // Uglifies all CSS and JS
    uglify: {
      my_target: {
        files: {
          'dist/js/final.js': ['dist/js/final.js']
        }
      }
    }
  });

  // Creates the 'serve' task
  grunt.registerTask('serve', [
    'sass',
    'livereload-start',
    'connect',
    'open',
    'regarde'
  ]);

  // Creates the 'build' task
  grunt.registerTask('build', [
    'clean:begin',
    'copy',
    'cssmin',
    // 'processhtml',
    // 'concat',
    'htmlmin',
    // 'clean:end'
  ]);

  // Creates the 'test' task
  grunt.registerTask('test', [
    'clean:end'
  ]);

  grunt.registerTask('clear', [
    'clean:'
  ])

};