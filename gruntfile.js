module.exports = function(grunt) {
  grunt.initConfig({
    dirs: {
      theme: './public/',
      css: './css/',
      js: './js/',
      assets:'assets/'
    },
    sass: {
      dev: {
        options: {
          style: 'expanded',
          sourcemap: false
        },
        files: {
          '<%= dirs.theme %><%= dirs.css %>main.css': '<%= dirs.theme %><%= dirs.css %>main.scss'
        }
      }
    },
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({ browsers: 'last 2 versions' })
        ]
      },
      dist: {
        src: '<%= dirs.theme %><%= dirs.css %>main.css',
        dest: '<%= dirs.assets %><%= dirs.css %>main.css'
      }
    },
    cssmin: {
      ship: {
        options: {
          report: 'gzip'
        },
        files: {
          '<%= dirs.assets %><%= dirs.css %>main.min.css': '<%= dirs.assets %><%= dirs.css %>main.css',
        }
      },
    },
    uglify: {
      options: {
        report: 'gzip'
      },
      my_target: {
        files: {
          '<%= dirs.assets %><%= dirs.js %>app.min.js': ['<%= dirs.theme %><%= dirs.js %>app.js']
        }
      }
    },
    watch: { /* trigger tasks on save */
      options: {
          livereload: true
      },
      sass: {
          options: {
              livereload: false
          },
          files: '<%= dirs.theme %><%= dirs.css %>**/*.scss',
          tasks: ['sass']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('default',['watch']);
  grunt.registerTask('build',['sass', 'postcss', 'cssmin']);
};
