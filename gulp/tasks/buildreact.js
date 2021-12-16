module.exports = function () {
    $.gulp.task('buildreact', $.gulp.series('clean', 'copy', 'sass', 'scriptsreact', 'images', 'svg'));
  };