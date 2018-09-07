const path = require('path');
const loader = require('./loader.js');


module.exports = {
    mode: 'development',
    entry: './entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "./loader.js",
                options: {
                    a: 1,
                    b: 2
                }
            }
        ]
    }
}





