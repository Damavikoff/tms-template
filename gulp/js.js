const gulp = require('gulp');
const plumber = require('gulp-plumber');

module.exports = function image() {
  return gulp.src('src/js/*.*')
    .pipe(plumber())
    .pipe(gulp.dest('build/js'))
}