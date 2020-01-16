const path = require("path");
//const webpack = require('webpack')

module.exports = {
    publicPath: "./",
    assetsDir: "./assets/",
    lintOnSave: false,
    runtimeCompiler: true,
    devServer: {
        host: process.env.HOST !== undefined ? process.env.HOST : "localhost",
        port: process.env.PORT !== undefined ? process.env.PORT : 8080
    },
    // css: {
    //   loaderOptions: {
    //     css: {
    //       // options here will be passed to css-loader
    //     },
    //     postcss: {
    //       // options here will be passed to postcss-loader
    //       parser: 'sugarss',
    //       plugins: {
    //         'postcss-import': {},
    //         'postcss-preset-env': {},
    //         'cssnano': {}
    //       }
    //     }
    //   }
    // },
    configureWebpack: {
        resolve: {
            alias: {
                "bootstrap-components": path.resolve(__dirname, "node_modules/bootstrap-vue/es/components"),
                "@": path.resolve(__dirname, "src")
            }
        }
    }
};
