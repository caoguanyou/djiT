let gulp = require('gulp');//引入一个gulp对象里面有所有的gulp给的方法
let load = require('gulp-load-plugins')();//自动加载模块
// let {task} = require('gulp')
/**
 * 处理css
 * 处理css插件和reset.css
 * 处理js
 * 处理js插件
 * 处理image
 * 处理html
 * */
// gulp.task('test',function(done) {
//     console.log();

//     done()
// })
// css
gulp.task('concatCss',function (done) {//合并css
    gulp.src('./css/*.css')//获取文件
        .pipe(load.concat('index.css'))//合并并命名文件
        .pipe(gulp.dest('./dist/css'));//存放文件
    done();//结束
});
gulp.task('sass', function (done) {
    gulp.src('./sass/*.css')
        .pipe(load.sass())
        .pipe(gulp.dest('./css'));
    done();
})


gulp.task('uglifyCss',function (done) {//压缩css
    gulp.src('./css/*.css')//获取文件
        .pipe(load.concat('index.css'))//合并并命名文件
        .pipe(load.minifyCss())//压缩
        .pipe(load.rename('index.min.css'))
        .pipe(gulp.dest('./dist/css'))//存放文件
        .pipe(load.connect.reload());
    done();
});



gulp.task('moduleCss', function (done) {
    gulp.src('./module/css/*.css')
        .pipe(gulp.dest('./dist/css'));
    done();
});

gulp.task('moduleJs',function (done){
    gulp.src('./module/js/*.js')
    .pipe(load.babel({ presets: ['@babel/preset-env'] }))//转es5
    .pipe(load.uglify())
    .pipe(gulp.dest('./dist/js'));
    done();
});



// js
gulp.task('concatJs',function (done) {//合并压缩js
    gulp.src(['./js/*.js','!./js/jquery*.js'])//合并
        .pipe(load.concat('index.js'))//合并并命名文件
        .pipe(load.babel({ presets: ['@babel/preset-env']}))//转es5
        .pipe(load.rename('index.min.js'))//重命名
        .pipe(gulp.dest('./dist/js'))//保存
        .pipe(load.connect.reload());
    done();
});
gulp.task('uglifyJq',function (done) {//压缩jQ
    gulp.src(['./js/jquery*.js'])
        .pipe(load.uglify())//压缩
        .pipe(load.rename('jquery.min.js'))//重命名
        .pipe(gulp.dest('./dist/js'))//保存
        .pipe(load.connect.reload());
    done();
});

// image
gulp.task('imageMin',function (done) {//合并
    gulp.src(['./images/*.*'])
        .pipe(load.imagemin())
        .pipe(gulp.dest('./dist/images'))//保存
        .pipe(load.connect.reload());
    done();
});

// html
gulp.task('minifyHtml',function (done) {//合并
    gulp.src(['./*.html'])
        .pipe(load.minifyHtml())
        .pipe(gulp.dest('./dist'))//保存
        .pipe(load.connect.reload());
    done();
});



gulp.task('watchs',function (done) {
    gulp.watch('./css/*.css', gulp.series('concatCss','uglifyCss'));
    gulp.watch('./sass/*scss', gulp.series( 'sass'));
    gulp.watch('./js/*.js', gulp.series('concatJs'));
    gulp.watch('./images/*.*',gulp.series('imageMin'));
    gulp.watch('./*.html', gulp.series('minifyHtml'));
    done();
});
gulp.task('reload',function (done) {
    load.connect.server({
        root: './dist',//根目录
        livereload: true
    });
    done();
});


gulp.task('start', gulp.series('reload', 'watchs'));

gulp.task('build', gulp.parallel(
    gulp.series('sass','concatCss', 'uglifyCss', 'moduleCss'),
    gulp.series('concatJs', 'uglifyJq','moduleJs'),
    gulp.series('imageMin'),
    gulp.series('minifyHtml'),
));
