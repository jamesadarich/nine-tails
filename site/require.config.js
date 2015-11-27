// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'js',
    paths: {
      backbone: 'vendor/backbone-min',
      jquery: 'vendor/jquery.min',
      marionette: 'vendor/backbone.marionette.min',
      underscore: 'vendor/underscore-min',
      ninetails: 'nine-tails'
    },
    shim: {
     "marionette": [
          "backbone",
          "underscore"
      ],
      backbone: [ "jquery" ]
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['start']);
