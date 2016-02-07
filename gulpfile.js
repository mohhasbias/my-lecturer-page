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
  var jsFiles = ['app/*.js', 'app/**/*.js'];
  var cssFiles = ['app/*.css'];

  doInjectJS();
  watch(jsFiles, function(){
    console.log('file changed');
    doInjectJS();
  });

  doInjectCSS();
  watch(cssFiles, function(){
    doInjectCSS();
  });

  function doInjectJS(){
    gulp.src('index.html')
      .pipe(inject(
        gulp.src(jsFiles)
          .pipe(plumber())
          .pipe(angularFileSort())
      ))
      .pipe(gulp.dest('./'));
  }
  function doInjectCSS(){
    gulp.src('index.html')
      .pipe(inject(
        gulp.src(cssFiles)
          .pipe(plumber())
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