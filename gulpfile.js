var gulp = require('gulp'),
	sass = require('gulp-sass'),
	connect = require('gulp-connect'),
	opn = require('opn'),
	autoprefixer = require('gulp-autoprefixer'),
	plumber = require('gulp-plumber');

gulp.task('connect', function() {
	connect.server({
		root: [__dirname],
		port: 3000,
		livereload: true
	});
	opn('http://localhost:3000/');
})

gulp.task('sass', function() {
	gulp.src('./sass/styles.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 version', 'ie 9']
		}))
		.pipe(gulp.dest('css/'))
		.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(['sass/*.sass', 'sass/components/*.sass'], ['sass']);
});

gulp.task('default', ['connect', 'watch']);