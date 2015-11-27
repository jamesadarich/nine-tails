var gulp = require('gulp');
var ts = require('gulp-typescript');
var sass = require('gulp-sass');
var gls = require('gulp-live-server');
var Server = require('karma').Server;

gulp.task('test', ['build', 'build-test'], function (done) {
    new Server({
      configFile: __dirname + '/karma.conf.js',
      singleRun: true
    }, done).start();
});

gulp.task('build-test', function (done) {
  var tsResult = gulp.src('./test/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        module: 'amd'
      }));
  //return tsResult.js.pipe(gulp.dest('test/js'));
    return tsResult.js.pipe(gulp.dest('./test/js'));
});

gulp.task('tdd', function () {
  gulp.watch(['./src/**/*.ts', './test/**/*.ts'], ['test']);
});

gulp.task('build', function (done) {

    var tsResult = gulp.src('./src/**/*.ts')
      .pipe(ts({
          noImplicitAny: true,
          module: 'amd',
          outFile: 'nine-tails.js'
        }));
    return tsResult.js.pipe(gulp.dest('./js'));
    //return tsResult.js.pipe(gulp.dest('./js/nine-tails.js'));
});

gulp.task('build-site', ['build-site-typescript', 'build-site-sass'], function (done) {
   gulp.src(['./js/nine-tails.js']).pipe(gulp.dest('./site/js'));
   gulp.src(['./src/**/*.ts']).pipe(gulp.dest('./site/nine-tails'));
   return gulp.src(['./node_modules/backbone.marionette/lib/backbone.marionette.min.js',
                    './node_modules/backbone.marionette/node_modules/underscore/underscore-min.js',
                    './node_modules/backbone.marionette/node_modules/backbone/backbone-min.js',
                    './node_modules/requirejs/require.js',
                    './node_modules/jquery/dist/jquery.min.js'
                     ]).pipe(gulp.dest('./site/js/vendor'));
});

gulp.task('build-site-typescript', function () {

    var tsResult = gulp.src('./site/ts/**/*.ts')
      .pipe(ts({
          noImplicitAny: true,
          module: 'amd'
        }));

    return tsResult.js.pipe(gulp.dest('./site/js'));
});

gulp.task('build-site-sass', function () {

  return gulp.src('./site/sass/**/*.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(gulp.dest('./site/css'));
});

gulp.task('dev-site', ['build-site'], function() {
   //1. serve with default settings
   //var server = gls.static(); //equals to gls.static('public', 3000);
   //server.start();

   //2. serve at custom port
   var server = gls.static('site', 3000);
   server.start();

   //3. serve multi folders
   //var server = gls.static(['dist', '.tmp']);
   //server.start();

   //use gulp.watch to trigger server actions(notify, start or stop)
   gulp.watch(['./site/**/*.*'], function (file) {
      server.notify.apply(server, [file]);
   });

   gulp.watch(['./site/sass/**/*.*'], ['build-site-sass']);

   gulp.watch(['./site/ts/**/*.*'], ['build-site-typescript']);
});
