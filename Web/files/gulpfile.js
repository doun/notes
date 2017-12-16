var gulp = require('gulp')
var vueify = require('vueify')
var browserify = require('browserify')
var babelify = require('babelify')
var jest = require('gulp-jest').default
var ts = require('gulp-typescript')
var tsProject = ts.createProject({
  declaration: true
});
var jconfig = require('./jest.conf')
var source = require('vinyl-source-stream')
const findBabelConfig = require('find-babel-config')

var defaultBabelOptions = {
  presets: [require.resolve('babel-preset-vue-app')]
}

function getBabelConfig() {
  const {
    file,
    config
  } = findBabelConfig.sync(process.cwd(), 0)
  const babelConfig = file ? config : defaultBabelOptions
  return babelConfig
}
// = require('./.babelrc')
gulp.task('js', () => {
  return browserify('src/main.js', {debug: true})
  .transform(vueify)
  .transform(babelify,getBabelConfig())
  //.transform(vueify)
      //.transform(babelify)
  .bundle()
  .pipe(source("build.js")).pipe(gulp.dest('dist'))
})
