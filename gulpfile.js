var gulp = require('gulp');
var connect = require('gulp-connect');
var karma = require('gulp-karma');
gulp.task('connect', function() {
    connect.server({
        root: 'app/', //Our application code will live inside of app/
        port: 8080
    });
});

var testFiles = [

];

gulp.task('test', function() {
    // Be sure to return the stream
    return gulp.src(testFiles)
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }))
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
});