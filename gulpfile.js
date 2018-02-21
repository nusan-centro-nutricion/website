const gulp = require('gulp')
const cp = require('child_process')
// const gutil = require('gulp-util')
// const shell = require('gulp-shell')
const imageResize = require('gulp-image-resize')
// const del = require('del')
// const newer = require('gulp-newer')
const runSequence = require('run-sequence')

gulp.task('resize-images', () => {
  const frontEndImages = gulp.src('assets/images/uploads/*')

  frontEndImages
    .pipe(imageResize({
      width: 1300,
      height: 975,
      crop: true,
      upscale: true
    }))
    .pipe(gulp.dest('assets/images/large'))

  frontEndImages
    .pipe(imageResize({
      width: 650,
      height: 485,
      crop: true,
      upscale: false
    }))
    .pipe(gulp.dest('assets/images/medium'))

  frontEndImages
    .pipe(imageResize({
      width: 300,
      height: 225,
      crop: true,
      upscale: false
    }))
    .pipe(gulp.dest('assets/images/small'))
})

gulp.task('jekyll-build', function (done) {
  return cp.spawn('bundle', ['exec', 'jekyll', 'build'], {stdio: 'inherit'}).on('close', done)
})

gulp.task('default', () => {
  runSequence('resize-images', 'jekyll-build')
})
