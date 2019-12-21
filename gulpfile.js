let gulp = require('gulp');//引入一个gulp对象里面有所有的gulp给的方法
let load = require('gulp-load-plugins')();//自动加载模块
basePath = './dist/js';
jsonPath = './dist/json';
// let {task} = require('gulp')
/**
 * 处理css
 * 处理css插件和reset.css
 * 处理js
 * 处理js插件
 * 处理image
 * 处理html
 * */


// gulp.task('concatCss',function (done) {//合并css
//     gulp.src('./css/*.css')//获取文件
//         .pipe(load.concat('index.css'))//合并并命名文件
//         .pipe(gulp.dest('./dist/css'));//存放文件
//     done();//结束
// });





//从考拉转换后的sass文件夹下取css
//todo: css
// 移动到css
gulp.task('sass', function (done) {
    gulp.src('./sass/*.css')
        .pipe(load.sass())
        .pipe(gulp.dest('./css'));
    done();
});

//压缩移动css
gulp.task('uglifyCss',function (done) {//压缩css
    gulp.src('./css/*.css')//获取文件
        // .pipe(load.concat('index.css'))//合并并命名文件
        .pipe(load.minifyCss())//压缩
        .pipe(load.rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/css'))//存放文件
        .pipe(load.connect.reload());
    done();
});

//js插件压缩转换打包
gulp.task('moveJq',function (done) {
    gulp.src('./js/jquery*.js')
        .pipe(gulp.dest(basePath));
    done()
});
gulp.task('plugins-scripts',function (done) {
    gulp.src([
        './module/js/jq*.js',
        './module/js/bootstrap*.js',
        './module/js/swiper*.js',
        './module/js/swiper.animate*.js',
    ])
        .pipe(load.concat('plugins.js'))
        .pipe(load.rev())
        .pipe(load.uglify()) //压缩
        .pipe(gulp.dest(basePath))
        .pipe(load.rev.manifest()) //生成rev-mainfest.json文件作为记录
        .pipe(gulp.dest(jsonPath));
    done();
});
//css插件打包
gulp.task('plugins-style',function (done) {
    gulp.src([
        './module/css/*.css'
    ])
        .pipe(load.concat('plugins.css'))
        .pipe(load.rev())
        .pipe(load.minifyCss()) //压缩
        .pipe(gulp.dest('dist/css'))
        .pipe(load.rev.manifest()) //生成rev-mainfest.json文件作为记录
        .pipe(gulp.dest(jsonPath));
    done();
});


// js合并压缩
gulp.task('concatJs',function (done) {//合并压缩js
    gulp.src(['./js/*.js','!./js/jquery*.js'])//合并
        // .pipe(load.concat('index.js'))//合并并命名文件
        .pipe(load.babel({ presets: ['@babel/preset-env']}))//转es5
        .pipe(load.uglify())//压缩
        .pipe(load.rename({suffix:'.min'}))
        .pipe(gulp.dest('./dist/js'))//保存
        .pipe(load.connect.reload());
    done();
});

// 移动image
gulp.task('imageMin',function (done) {
    gulp.src(['./images/*.*'])
        // .pipe(load.imagemin())
        .pipe(gulp.dest('./dist/images'))//保存
        .pipe(load.connect.reload());
    done();
});

// 移动html
gulp.task('minifyHtml',function (done) {
    gulp.src(['./*.html'])
        // .pipe(load.minifyHtml())//合并
        .pipe(gulp.dest('./dist'))//保存
        .pipe(load.connect.reload());
    done();
});


// 监听文件变动
gulp.task('watchs',function (done) {
    gulp.watch('./css/*.css', gulp.series('uglifyCss'));
    gulp.watch('./sass/*scss', gulp.series( 'sass'));
    gulp.watch('./js/*.js', gulp.series('concatJs'));
    gulp.watch('./images/*.*',gulp.series('imageMin'));
    gulp.watch('./*.html', gulp.series('minifyHtml'));
    done();
});

//文件变动重新加载网页
gulp.task('reload',function (done) {
    load.connect.server({
        root: './dist',//根目录
        livereload: true
    });
    done();
});

//开启服务
gulp.task('start', gulp.series('reload', 'watchs'));


//创建项目
gulp.task('build', gulp.parallel(
    gulp.series('sass', 'uglifyCss', 'plugins-style'),
    gulp.series('concatJs', 'plugins-scripts'),
    gulp.series('imageMin'),
    gulp.series('minifyHtml'),
));
