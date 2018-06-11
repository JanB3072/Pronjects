var gulp = require("gulp");
var minifyCss = require('gulp-clean-css');
// var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var babel=require("gulp-babel")
// var rename = require("gulp-rename");
// var connect = require("gulp-connect");
var sass = require("gulp-sass");

//sass编译
gulp.task("sass",function(){
	gulp.src(["./src/style/*.scss"])
	.pipe(sass())
	.pipe(minifyCss())
	.pipe(gulp.dest("./dist/css"));
});
//合并和压缩重命名文件
gulp.task("babel",function(){
	gulp.src("./src/js/*.js")
	.pipe(babel())
	.pipe(uglify())
	.pipe(gulp.dest("dist/js"));
});

//启动监听器
gulp.task("watchall",function(){
	gulp.watch("./src/style/*.scss",["sass"]);
	gulp.watch("./src/js/*.js",["babel"]);
});