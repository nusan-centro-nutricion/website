const gulp = require('gulp')
const cp = require('child_process')
const gutil = require('gulp-util')
const shell = require('gulp-shell')
const imageResize = require('gulp-image-resize')
const del = require('del')
const newer = require('gulp-newer')

gulp.task('resize-images', () => {
    const front_end_images = gulp.src('assets/images/uploads/*')

    front_end_images
        .pipe(imageResize({
            width: 1300,
            height: 975,
            crop: true,
            upscale: true
        }))
        .pipe(gulp.dest('assets/images/large'))

    front_end_images
        .pipe(imageResize({
            width: 650,
            height: 485,
            crop: true,
            upscale: false
        }))
        .pipe(gulp.dest('assets/images/medium'))


    front_end_images
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

gulp.task('default', ['resize-images','jekyll-build'])
