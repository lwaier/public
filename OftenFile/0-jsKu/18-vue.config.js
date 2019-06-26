
module.exports = {
      css: { // 配置高于chainWebpack中关于css loader的配置
          // modules: true, // 是否开启支持‘foo.module.css’样式
          // extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
          sourceMap: false, // 是否在构建样式地图，false将提高构建速度
          loaderOptions: { // css预设器配置项
              sass: {
                  data: ''//`@import "@/assets/scss/mixin.scss";`
              }
          }
      },
      devServer: {
        open: true,   // 自动打开浏览器
        host: 'localhost',
        port: 8080,
        proxy:{  // 反向代理 
            "/vue": {
                target:"http://localhost:1901/",
                changeOrigin: true, 
            }
        }
    }
}