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
          // 'js/_main.js'
        ],
        // dest: 'dist/js/final.js'
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
          src: ['**', '!**/excludeThisDirectory/**'],
          dest: 'dist/'
        }, ]
      }
    },
    // Minifies all CSS
    cssmin: {
      combine: {
        files: {
          'dist/css/_________.css': ['dist/css/________.css', 'dist/css/________.css', 'dist/css/______.css']
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
          'dist/________.html': 'dist/______.html'
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
          'dist/______.html': ['_______.html']
        }
      }
    },
    // Watches files and runs tasks (as defined below)
    regarde: {
      all: {
        files: ['index.html', 'css/**/*.css', 'css/**/*.scss', 'js/**/*.js'],
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

    // Uglifies all CSS
    uglify: {
      my_target: {
        files: {
          'dist/js/final.js': ['dist/js/final.js'],
          'dist/js/mobile.js': ['dist/js/mobile.js']
        }
      }
    },
    // Removes any unused Css from key after analyzing value
    uncss: {
      dist: {
        files: {
          'dist/css/tidymin.css': ['dist/index.html'],
          'dist/css/mobile.css': ['dist/mobile.html'],
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
    'imagemin',
    'uncss',
    'cssmin',
    'processhtml',
    'concat',
    'htmlmin',
    'clean:end'
  ]);

  // Creates the 'test' task
  grunt.registerTask('test', [
    'sass'
  ]);

};

// var toAddToPackageJson = {
//   "devDependencies": {
//     "grunt": "^0.4.0",
//     "grunt-contrib-clean": "^0.6.0",
//     "grunt-contrib-concat": "^0.5.0",
//     "grunt-contrib-connect": "^0.1.2",
//     "grunt-contrib-copy": "^0.5.0",
//     "grunt-contrib-cssmin": "^0.10.0",
//     "grunt-contrib-htmlmin": "^0.3.0",
//     "grunt-contrib-imagemin": "^0.8.0",
//     "grunt-contrib-livereload": "^0.1.1",
//     "grunt-contrib-uglify": "^0.5.1",
//     "grunt-open": "^0.2.0",
//     "grunt-processhtml": "^0.3.3",
//     "grunt-regarde": "^0.1.1",
//     "grunt-uncss": "^0.3.5",
//     "matchdep": "^0.1.1",
//     "time-grunt": "^0.4.0"
//   }
// }