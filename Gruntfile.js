module.exports = function(grunt) {

  //Initializing the configuration object
  
    grunt.initConfig({

      // Task configuration
    
    less: {
        development: {
            options: {
              compress: true,  //minifying the result
            },
            files: {
              //compiling style.less into style.css
              "public/css/style.css":"assets/less/style.less"
            }
        }
    },

    imagemin: {
        dynamic: {                         
          files: [{
            expand: true,                  
            cwd: 'assets/images/',                   
            src: ['**/*.{png,jpg,gif}'],   
            dest: 'public/images/'                 
          }]
        }
      },
    
    jshint: {
        dev: {        
            src: ['assets/js/script.js']
        }
    },

    concat: {
      options: {
        separator: ';',
      },
      js_frontend: {
        src: [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/bootstrap/dist/js/bootstrap.js',
          'bower_components/holder/holder.js',
          'assets/js/script.js'
        ],
        dest: 'public/js/script.js',
      },
    },
    
    uglify: {
      options: {
        mangle: false  // Use if you want the names of your functions and variables unchanged
      },
      frontend: {
        files: {
          'public/js/script.js': 'public/js/script.js',
        }
      },
    },
    
    watch: {
        js_frontend: {
          files: ['assets/js/script.js'],   
          tasks: ['jshint','concat:js_frontend','uglify:frontend'],     //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        },

        imagemin: {
          files: ['assets/images/**/*.{png,jpg,gif}'],
          tasks: ['imagemin']
        },
        
        less: {
          files: ['assets/less/*.less'],  //watched files
          tasks: ['less'],                          //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        },

       livereload: {
          files: ['public/**/*.*'],
          options: { livereload: true }
        },

        
      }
    });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-livereload');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Task definition
  grunt.registerTask('default', ['watch','imagemin']);

};