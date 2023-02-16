const gulp = require('gulp')
const less = require('gulp-less')
// const sass = require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')

// (require('less'))

function styles () {
    return gulp.src('./src/styles/*.less')
        .pipe(less({ outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/styles'))
}

function images() {
    return gulp.src('./src/images/**')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
}

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/scripts'))
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = function () {
    gulp.watch('./src/styles/*.less', gulp.series(styles))
    gulp.watch('./src/scripts/*.js', gulp.series(scripts))
}