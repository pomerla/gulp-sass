module.exports = function () {
    $.gulp.task('servereact', function () {
      $.browserSync.init({
        server: 'build/'
      });
  
      $.gulp.watch('sass/**/*.scss', $.gulp.series('sass'));
      $.gulp.watch('*.html', $.gulp.series('html'));
      $.gulp.watch('js/**/*.js', $.gulp.series('scriptsreact'));
      $.gulp.watch('js/**/*.jsx', $.gulp.series('scriptsreact'));
      $.gulp.watch('img/**/*.{png,jpg,svg}', $.gulp.series('allimg'));
    });
  };