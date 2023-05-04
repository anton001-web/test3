const {merge} = require('webpack-merge')
const common = require('../webpack.config')
const path = require("path");
const TerserWebpack = require('terser-webpack-plugin')

module.exports = merge(common , {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        minimize: true,
        minimizer: [
            new TerserWebpack({
                minify: TerserWebpack.uglifyJsMinify,
                parallel: true,
                terserOptions: {
                    toplevel: true,
                    mangle: false,
                    keep_fnames: true
                }
            }),
        ],
    },
})