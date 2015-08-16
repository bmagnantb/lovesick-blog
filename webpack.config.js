var autoprefixer = require('autoprefixer-core')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	entry: {
		app: process.env.NODE_ENV === 'development'
			? ['webpack/hot/dev-server', './src/js/client/app.js']
			: './src/js/client/app.js'
	},
	output: {
		path: __dirname + '/build',
		filename: 'app.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel'
			},
			{
				test: /\.scss$/,
				loader: process.env.NODE_ENV === 'development'
					? 'style!css!postcss!sass'
					: ExtractTextPlugin.extract('style', 'css!postcss!sass')
			}
		],
		postcss: function() {
			return [autoprefixer]
		}
	},
	plugins: [
		new ExtractTextPlugin('style.css')
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}