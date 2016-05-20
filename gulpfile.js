var gulp = require('gulp');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('build', function () {
    return gulp.src([
      'bjorklund.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(rename('bjorklund.min.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./'));
});
