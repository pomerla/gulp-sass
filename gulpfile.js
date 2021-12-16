global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),
  del: require('del'),
  imageminJpegRecompress: require('imagemin-jpeg-recompress'),
  pngquant: require('imagemin-pngquant'),
  path: {
    config: require('./gulp/config'),
    js: './js/**/*.*',
    react: './node_modules/react/umd/react.production.min.js',
    reactdom: './node_modules/react-dom/umd/react-dom.production.min.js',
  }
};

$.path.config.forEach(function (path) {
  require(path)();
});
