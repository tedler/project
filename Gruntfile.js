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
              "./public/css/style.css":"./public/assets/less/style.less"
            }
        }
    },
    
    concat: {
      options: {
        separator: ';',
      },
      js_frontend: {
        src: [
          './bower_components/jquery/dist/jquery.js',
          './bower_components/bootstrap/dist/js/bootstrap.js',
          './bower_components/holder/holder.js',
          './public/assets/js/script.js'
        ],
        dest: './public/js/script.js',
      },
    },
    
    uglify: {
      options: {
        mangle: false  // Use if you want the names of your functions and variables unchanged
      },
      frontend: {
        files: {
          './public/js/script.js': './public/js/script.js',
        }
      },
    },
    
    watch: {
        js_frontend: {
          files: [
            //watched files
            './public/assets/js/script.js'
            ],   
          tasks: ['concat:js_frontend','uglify:frontend'],     //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        },
        
        less: {
          files: ['./public/assets/less/*.less'],  //watched files
          tasks: ['less'],                          //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        },

       livereload: {
          options: { livereload: true },
          files: ['./public/**/*.*'],
        },

        
      }
    });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-livereload');

  // Task definition
  grunt.registerTask('default', ['watch']);

};