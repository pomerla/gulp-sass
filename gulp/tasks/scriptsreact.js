const react = require("react");

const jsFiles = [
  $.path.react,
  $.path.reactdom,
  $.path.js,
];


module.exports = function () {
  $.gulp.task('scriptsreact', function () {
    return $.gulp.src(jsFiles)
        .pipe($.gp.plumber())
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.babel({presets: ['@babel/preset-env']}))
        .pipe($.gp.babel({presets: ['@babel/preset-react']}))
        .pipe($.gp.concat('all.js'))
        .pipe($.gp.concat('all.jsx'))
        .pipe($.gp.uglify())
        .pipe($.gp.rename('script.min.js'))
        .pipe($.gp.sourcemaps.write(''))
        .pipe($.gulp.dest('build/js'))
        .pipe($.browserSync.stream());
  });
};
