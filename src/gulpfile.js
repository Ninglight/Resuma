var gulp = require('gulp'),
    $    = require('gulp-load-plugins')(),
    YAML = require('yamljs');

gulp.task('jade', function() {
    return gulp.src('*.jade', function() {
        return gulp.src('*.jade')
        .pipe($.data(function() {
            return YAML.load('./datas.yml');
        }))
        .pipe($.jade({
            pretty: true
        }))
        .pipe(gulp.dest('../dist'))
        .pipe($.size());
    });
});

gulp.task('compass', function(){
    return gulp.src('css/*.scss')
        .pipe($.plumber())
        .pipe($.compass({
            css: 'css',
            sass: 'sass',
            image: 'img'

        }))
        .pipe($.cssnano())
        .pipe(gulp.dest('../dist/css'));
});

gulp.task('img', function(){
    return gulp.src('img/*')
        .pipe($.imagemin())
        .pipe(gulp.dest('../dist/img'));
});

gulp.task('js', function(){
    return gulp.src('js/*.js')
        .pipe($.uglify())
        .pipe(gulp.dest('../dist/js'));
});

/* Important Tasks*/

gulp.task('default', ['compass', 'js', 'img', 'jade'], function(){
    return gulp.src('../dist/**/*')
        .pipe($.zip('Resuma.zip'))
        .pipe(gulp.dest('../zip/'));
});

gulp.task('watch', function(){
    var server = $.livereload();
    gulp.watch('js/*.compass', ['compass']);
    gulp.watch('**/*.jade', function(){
        gulp.start('jade');
    });
    gulp.watch(['*.html', 'js/*.js', 'css/*.css']).on('change',function(event){
        console.log(event);
    });
});

gulp.task('clean', function(){
    return gulp.src('../dist', {read: false})
        .pipe($.clean());
});
