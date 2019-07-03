

console.log("webpack ")

// webpack 基本的配置文件 
// 打包  
// js
// css/less/scss
// png
// react 代码 

const path  = require("path");  // node 自带的模块  url fs  http 
const htmlWebpackPlugin  = require("html-webpack-plugin");  // 操作 html 文件 
const openBrowserWebpackPlugin = require("open-browser-webpack-plugin");  // 打开浏览器 
const extractTextWebpackPlugin  = require("extract-text-webpack-plugin")  // 抽离样式  
module.exports = {
    entry:["./src/main.js"],   // 入口
    output:{  // 出口
        path:path.resolve(__dirname,"dist"),
        filename:"js/[name].[hash:8].js",  // md5 加密生成 长度 为 8 的随机字符串  防止缓存 
        publicPath:""  // 公共路径 上线打包的需要配置 
    },

    devtool:"source-map",  // 方便在线调试 代码 

    resolve:{
        alias:{  // 别名
            "@":path.resolve("src"),
            "~":path.resolve("src/scripts"),
            "&":path.resolve("src/utils")
        }
    },

    module:{   // 处理模块打包 设置loaders 
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:["babel-loader"],
            },
            {
                test:/\.(png|jpg|gif|svg|woff|woff2|eot|ttf)$/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:8192,
                            name:"/imgs/[name].[hash:8].[ext]"
                        }
                    }
                ] // 1.png  1.qwer1234.png
            },
            {
                test:/\.(css|scss)$/,
                use:extractTextWebpackPlugin.extract({  // 抽离样式  
                    fallback:"style-loader",  // 用js字符串创建 node风格的 样式节点代码 
                    use:[
                        "css-loader",   // 样式代码转化为 commonJS 模块的代码  
                        {
                            loader:"postcss-loader", // 转换css 格式 
                            options:{
                                plugins:function(){
                                    return [
                                        require("cssgrace"),  // css 代码美化 缩进 
                                        require("autoprefixer"),  // 自动补全 webkit moz ms
                                        require("postcss-px2rem-exclude")({
                                           // remUnit:75,    // px==> rem  300 300/75 = 4rem
                                            // exclude:/antd-mobile/  // 排除适配 UI库 
                                        })
                                    ]
                                }
                            }
                        },
                        "sass-loader"   // 编译 scss 为css 代码 
                    ]
                })
            },
            {
                test:/\.(css|less)$/,
                use:extractTextWebpackPlugin.extract({  // 抽离样式  
                    fallback:"style-loader",  // 用js字符串创建 node风格的 样式节点代码 
                    use:[
                        "css-loader",   // 样式代码转化为 commonJS 模块的代码  
                        {
                            loader:"postcss-loader", // 转换css 格式 
                            options:{
                                plugins:function(){
                                    return [
                                        require("cssgrace"),  // css 代码美化 缩进 
                                        require("autoprefixer"),  // 自动补全 webkit moz ms
                                        require("postcss-px2rem-exclude")({
                                            //remUnit:75,    // px==> rem  300 300/75 = 4rem
                                            // exclude:/antd-mobile/i
                                        })
                                    ]
                                }
                            }
                        },
                        "less-loader"   // 编译 scss 为css 代码 
                    ]
                })
            }
        ]
    },

    devServer:{   // 开发服务器设置  
        contentBase:path.join(__dirname,"dist"), // 服务器作用的目录 
        compress:true,
        hot:true,
        inline:true,
        // open:true,  // 自动打开浏览器
        host:"0.0.0.0",
        port:8000,
        publicPath:"",
        proxy:{    // 代理 

        }
    },

    plugins:[  // 操作插件 
        new htmlWebpackPlugin({
            template:"./public/index.html",  // 操作的html
            inject:true,    // 自动注入打包的css/js 
        }),

        new extractTextWebpackPlugin({
            filename:"css/app.[hash:8].css",
            allChunks:true ,  // 打包所有样式 抽离
            disable:false ,  // 不失效  会抽离样式 
        }),

        new openBrowserWebpackPlugin({url:"http://localhost:8000"}),

        //自动引入
        // new webpack.ProvidePlugin({
        //     React:"React",
        //     Component:["react" , "Component"]
        // })
    ]
}