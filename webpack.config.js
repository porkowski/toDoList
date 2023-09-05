const path = require('path');

module.exports = {
  entry: { 
    index: './src/index.js'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
         {
             test: /\.(woff|woff2|eot|ttf|otf)$/i,
             type: 'asset/resource',
         }
    ]
  }
};