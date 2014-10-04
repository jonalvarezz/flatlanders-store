'use strict';

var connect							= require('gulp-connect'),
		gulp								= require('gulp'),
		historyApiFallback	= require('connect-history-api-fallback'),
		nib									= require('nib'),
		rename							= require('gulp-rename'),
		stylus							= require('gulp-stylus');

 // Create a server in port 8080
gulp.task('server', function() {
	connect.server({
		root: 'app',
		port: 8080,
		hostname: '0.0.0.0',
		livereload: true,
		middleware: function(connect, opt) {
			return [ historyApiFallback ];
		}
	});
});

/*
 * Assets processing and livereload enabling
 * [css] : compile stylus files into css
 * [html]: reload page
*/

// Process CSS files and reload the web browser
gulp.task('css', function() {
	gulp.src('./app/css/main.styl')
		.pipe(stylus({
			use: nib(),
			compress: true
		}))
		.pipe(rename('main.min.css'))
		.pipe(gulp.dest('./app/css/min/'))
		.pipe(connect.reload());
});
// Reload the web browser when a HTML file changes
gulp.task('html', function() {
	gulp.src('./app/**/*.html')
		.pipe(connect.reload());
});

// Watch file changes
gulp.task('watch', function() {
	gulp.watch(['./app/css/*.styl'], ['css']);
	gulp.watch(['./app/**/*.html'], ['html']);
});

gulp.task('default', [ 'server', 'css', 'watch' ]);