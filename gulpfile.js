var gulp = require('gulp');
var ts = require('gulp-typescript');
var Server = require('karma').Server;

gulp.task('test', function (done) {
  var tsResult = gulp.src('test/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        module: 'amd'
      }));
  //return tsResult.js.pipe(gulp.dest('test/js'));
    tsResult.js.pipe(gulp.dest('test/js'));
    new Server({
      configFile: __dirname + '/karma.conf.js',
      singleRun: true
    }, done).start();
});
