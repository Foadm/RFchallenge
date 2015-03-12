var gulp = require('gulp');
var connect = require('gulp-connect');
var karma = require('gulp-karma');
var protractor = require("gulp-protractor").protractor;
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
gulp.task('protractor', function(){
    connect.server({
        root: 'app/', //Our application code will live inside of app/
        port: 8080
    });
    gulp.src(["specs/ETEspecs.js"])
        .pipe(protractor({
            configFile: "conf.js"
            //args: ['--baseUrl', 'http://127.0.0.1:8000']
        }))
        .on('error', function(e) { throw e })
});