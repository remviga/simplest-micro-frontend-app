const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: false,
    watch: true,
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        chunkFormat: 'module'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
}