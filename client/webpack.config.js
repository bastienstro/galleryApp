const path = require('path');
const webpack = require('webpack');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'src');
const outputPath = path.join(__dirname, '../build/')
const IS_DEV = (process.env.NODE_ENV === 'dev');

/**
 * Webpack Configuration
 */
module.exports = {
    entry: ['babel-polyfill',  path.join(dirApp, 'index')],
     output: {
     path: outputPath,
     filename: 'app.js'
    },
    resolve: {
        modules: [
            dirNode,
            dirApp,
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            IS_DEV: IS_DEV
        }),

        new webpack.ProvidePlugin({
            // lodash
            '_': 'lodash'
        }),

    ],
    module: {
        rules: [
            // BABEL
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    compact: true
                }
            },
            	{ 
			    test: /\.jsx?$/,         // Match both .js and .jsx files
			    exclude: /node_modules/, 
			    loader: "babel-loader", 
			    query:
			      {
			        presets:['react']
			      }
			},
			// STYLES
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                    },
                ]
            },
               
        ]
    }
};