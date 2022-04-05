
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: './[name].bundle.js'
    },
    // entry: ['./public/css/global.scss', './src/scss/media.scss', './src/scss/specific-classes.scss'],
    // output: {
    //     filename: './[name].bundle.css'
    // },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
}