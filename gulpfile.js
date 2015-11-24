var gulp = require('gulp');
var ts = require('gulp-typescript');
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
