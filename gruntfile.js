/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      myTask: {
        options: {

          sizes: [{

            width: 720,
            suffix: '_new',
            quality: 70
          },{

            width: 115,
            suffix: '_small',
            quality: 50
          },
          /*{

            width: 1200,
            suffix: '_large',
            quality: 80
          }*/
          ]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['**.{jpg,jpeg}'],
          cwd: 'views/images/',
          dest: 'views/images/'
        }]
      }
    },
  })

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);

};
