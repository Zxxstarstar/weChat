const gulp = require("gulp");

//	gulp.task()	定义指令
gulp.task("hello",()=>{
	console.log("this is my first task");
})

//	gulp.src()	用来找到指定的文件
//	gulp.pipe()	用来连缀执行gulp方法
//	gulp.dest()	转存到指定目录

//开发文件实时修改,上线文件自动更改,浏览器自动刷新
//1.文件的转存
	gulp.task("index",()=>{
		return gulp.src(["src/**/*","!src/pass.txt"]).pipe(gulp.dest("server"));
	})
	
	//	gulp.watch()	监听方法，监听文件，执行指定的指令
	
	//2.自动执行文件的转存
	gulp.task("watch",()=>{
		gulp.watch(["src/index.html"],["index"]);
	})



