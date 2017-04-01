'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
// this is where you make changes to where the sccs is stored
    return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 //delete sass: to have it run all the time
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
//this makes so that when i write gulp it will run gulp sass instead of having to write gulp sass
gulp.task('default', sass);