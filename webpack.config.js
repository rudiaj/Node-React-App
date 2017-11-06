module.exports = {
    entry: './src/index.js',
    output: {
        path: './public',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
            }
        },
            {
                test: /\.(css|scss)$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },]
    }
}