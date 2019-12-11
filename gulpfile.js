const gulp    = require('gulp');
const clean   = require('gulp-clean');
const fs      = require('fs');

gulp.task('clean-build', () => {
    if (!fs.existsSync(`build`)) {
        fs.mkdirSync('build')
    };
    return gulp.src('build').pipe(clean());
});

gulp.task('clean-dist', () => {
    if (!fs.existsSync(`dist`)) {
        fs.mkdirSync('dist')
    };
    return gulp.src('dist').pipe(clean());
});

gulp.task('copy-assets', function() {
    return gulp.src([
        './src/views/**/*'
      ])
        .pipe(gulp.dest(`./build/views`));
})
