const {
    argv
} = require('yargs');
const path = require('path');

const _mode = argv.mode || 'development';
const envConfig = require(`./build/webpack.${_mode}.js`);
const {
    merge
} = require('webpack-merge');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* 文件遍历 入口 模板 */
const files = glob.sync("./src/web/views/**/*.entry.js");
const entries = {};
const htmlPlugins = [];
files.forEach(url => {
    if (/([a-zA-Z]+-[a-zA-Z]+)\.entry\.js/.test(url)) {
        const entryKey = RegExp.$1;
        const [pagesName, template] = entryKey.split('-');
        entries[entryKey] = url;
        htmlPlugins.push(
            new HtmlWebpackPlugin({
                filename: `../views/${pagesName}/pages/${template}.html`,
                template: `./src/web/views/${pagesName}/pages/${template}.html`,
                chunks: ['runtime', entryKey]
            })
        )
    }
})

const baseConfig ={
    entry:entries,
    output:{
        path:path.join(__dirname, './dist/assets'),
        filename: 'scripts/[name].bundle.js'
    },
    optimization: {
        runtimeChunk: 'single'
    },
    module:{
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }]
    }, 
    plugins: [
        ...htmlPlugins
    ]
}
module.exports = merge(baseConfig, envConfig)