let path = require("path");         //引入path模块，通过__dirname获取文件的绝对路径
let htmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry : "./src/index.js", 		//入口文件配置项
    output : { 						//出口配置
    	path:path.resolve(__dirname,"dist"), //__dirname用来获取文件路径
        filename:"bundle.js" 		//出口文件命名
    },
    plugins : [
        new htmlWebpackPlugin({
        	filename:"newInde.html",            //生成的新的文件名
        	template:"src/index.html"          //修改的html文件的模版
        })        //创建插件，应用对象
    ],
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [['env',{
                        targets: {
                            browsers: ['> 1%', 'last 2 versions']
                        }
                    }]]
                }
            },
            exclude: '/node_modules/'
        }]
    }
}