'use strict';

var gulp								= require('gulp'),
		connect							= require('gulp-connect'),
		historyApiFallback	= require('connect-history-api-fallback');

 // Create a server in port 8080
gulp.task('server', function() {
	connect.server({
		root: 'app',
		port: 8080,
		middleware: function(connect, opt) {
			return [ historyApiFallback ];
		}
	});
});

gulp.task('default', [ 'server' ]);