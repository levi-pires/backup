module.exports = {
    entry: [
        "@babel/polyfill",
        "./src/main.js"
    ],
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/node_modules/, /old/],
            use: {
                loader: "babel-loader"
            }
        }]
    },
    devServer: {
        contentBase: __dirname + '/public'
    }
};