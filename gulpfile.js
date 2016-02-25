//npm install gulp-jsmin gulp-rename imagemin-pngquant imagemin-pngquant gulp-css --save-dev

const gulp = require('gulp');
const cssMin = require('gulp-css');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const jsmin = require('gulp-jsmin');
const rename = require('gulp-rename');


// Optimization Tasks
// ------------------

// Optimizing CSS
gulp.task('css', function () {
	return gulp.src('src/**/*.css')
		.pipe(cssMin())
		.pipe(gulp.dest('dist'));
});

// Minify JS
gulp.task('scripts', function () {
	gulp.src('src/**/*.js')
		.pipe(jsmin())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist'));
});

// Optimizing Images
gulp.task('images', function () {
	return gulp.src('src/**/*.+(png|jpg|jpeg|gif|svg)')
		// Caching images that ran through imagemin
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{
				removeViewBox: false
			}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('dist/images'));
});


// Default Task
gulp.task('default', ['css', 'scripts', 'images']);
