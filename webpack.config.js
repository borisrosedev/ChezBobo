const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './index.ts',
    mode: 'production',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    externals: {
        // Utiliser cette configuration pour exclure les modules
        // qui ne doivent pas être résolus par Webpack.
        'liquidjs': 'commonjs liquidjs'
    },
    watch: false,
    watchOptions: {
        ignored: /node_modules/,
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 3000,
      },
    module: {
        rules: [
            { test: /\.liquid$/, use: 'raw-loader' },
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.ts$/, use: 'ts-loader'},
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {},
            },

        
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
              { from: 'public', to: 'public' },
              { from: 'liquid', to: 'liquid' },
    
            ],
        }),
    ]
};