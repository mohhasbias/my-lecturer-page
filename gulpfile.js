var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var connect = require('gulp-connect');
var inject = require('gulp-inject');
var angularFileSort = require('gulp-angular-filesort');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

gulp.task('wiredep', function(){
  gulp.src('index.html')
    .pipe(wiredep({
      src: 'index.html'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('inject', function(){
  var fileGlob = ['app/*.js', 'app/**/*.js'];

  doInject();
  watch(fileGlob, function(){
    console.log('file changed');
    doInject();
  });

  function doInject(){
    gulp.src('index.html')
      .pipe(inject(
        gulp.src(fileGlob)
          .pipe(plumber())
          .pipe(angularFileSort())
      ))
      .pipe(gulp.dest('./'));
  }
});

gulp.task('live-server', function(){
  connect.server({
    livereload: true
  });

  gulp.watch(['index.html', 'app/**/*.html', 'app/**/*.css', 'app/**/*.js'], function(event){
    console.log('reload server');
    gulp.src(event.path)
      .pipe(plumber())
      .pipe(connect.reload());
  });
});

gulp.task('default', ['wiredep', 'inject', 'live-server']);