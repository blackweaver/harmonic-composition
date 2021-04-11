const gulp = require("gulp")
const sass = require("gulp-sass")
const watchSass = require("gulp-watch-sass")
  
gulp.task("sass:watch", () => watchSass([
  "./sass/**/*.{scss,css}"
])
  .pipe(sass())
  .pipe(gulp.dest("./public")));

  gulp.task('build', function () {
    return gulp.src("./sass/**/*.{scss,css}")
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/'));
 });

gulp.task('watch', gulp.series('sass:watch'));