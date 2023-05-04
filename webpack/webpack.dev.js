const {merge} = require('webpack-merge')
const common = require('../webpack.config')
const path = require("path");

module.exports = merge(common , {
    devtool: 'eval',
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: true,
        compress: true,
        static: {
            directory: path.resolve(__dirname, 'public')
        },
        open: true
    },
})