var gulp = require('gulp'),
    $    = require('gulp-load-plugins')(),
    YAML = require('yamljs');

gulp.task('jade', function() {
    return gulp.src('*.jade', function() {
        return gulp.src('*.jade')
        .pipe($.data(function() {
            return YAML.load('./data/header.yml');
        }))
        .pipe($.data(function() {
            return YAML.load('./data/body.yml');
        }))
        .pipe($.jade({
            pretty: true
        }))
        .pipe(gulp.dest('./../dist'))
        .pipe($.size());
    });
});

gulp.task('compass', function(){
    return gulp.src('sass/*.scss')
        .pipe($.plumber())
        .pipe($.compass({
            css: './../dist/css',
            sass: 'sass',
            image: 'img'
        }))
        .pipe($.cssnano())
        .pipe(gulp.dest('./../dist/css'))
});

gulp.task('img', function(){
    return gulp.src('img/**/*')
        .pipe($.imagemin())
        .pipe(gulp.dest('./../dist/img'));
});

gulp.task('js', function(){
    return gulp.src('js/*.js')
        .pipe($.uglify())
        .pipe(gulp.dest('./../dist/js'));
});

gulp.task('font', function() { 
    return gulp.src('font/**.*') 
        .pipe(gulp.dest('./../dist/font')); 
});

gulp.task('dist', ['js', 'compass', 'jade', 'font', 'img'], function(){
    return gulp.src('./../dist/*.html')
        .pipe($.useref())
        .pipe(gulp.dest('./../dist/'));
});

/* Important Tasks*/

gulp.task('default', ['dist'], function(){
    return gulp.src('./../dist/**/*')
        .pipe($.zip('Resuma.zip'))
        .pipe(gulp.dest('./../zip/'));
});

gulp.task('watch', function(){
    var server = $.livereload();
    gulp.watch('js/*.js', ['js']);
    gulp.watch('sass/*.scss', ['compass']);
    gulp.watch('*.jade', function(){
        gulp.start('jade');
    });
    gulp.watch(['./../dist/*.html', './../dist/js/*.js', './../dist/css/*.css']).on('change',function(event){
        console.log(event);
    });
});

gulp.task('clean', ['cleanzip'], function(){
    return gulp.src('./../dist', {read: false})
        .pipe($.clean());
});

gulp.task('cleancss', function(){
    return gulp.src(['./../dist/css/*.css', '!./dist/css/min.css'], {read: false})
        .pipe($.clean());
});

gulp.task('cleanjs', function(){
    return gulp.src(['./../dist/js/*.js', '!./dist/js/min.js'], {read: false})
        .pipe($.clean());
});

gulp.task('cleanzip', function(){
    return gulp.src('./../zip', {read: false})
        .pipe($.clean());
});
