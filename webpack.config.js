const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        compress: true,
        hot: true,
        port: 3000,
        open: false,
        historyApiFallback: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: { 
                    loader: 'babel-loader', 
                    options: { presets: ['@babel/preset-env'] }
                }
            }
        ]
    },
    plugins: [
        new HTMLPlugin({
            title: 'webpack-starter',
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
}