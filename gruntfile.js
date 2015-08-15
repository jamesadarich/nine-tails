module.exports = function(grunt) {

   // Project configuration.
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      karma: {
         unit: {
            configFile: 'karma.conf.js',
            port: 9999,
            singleRun: true,
            browsers: ['PhantomJS'],
            logLevel: 'ERROR'
         }
      }
   }
);

// Load the plugins
grunt.loadNpmTasks('grunt-karma');
};
