var autoprefixer = require('autoprefixer-core')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var isDev = process.env.NODE_ENV === 'development' ? true : false

module.exports = {
	entry: {
		"./": isDev ? ['webpack/hot/dev-server', './src/js/client/app.js'] : './src/js/client/app.js',
		"admin/": isDev ? ['webpack/hot/dev-server', './src/js/client/admin.js'] : './src/js/client/admin.js',
		"admin/login/": isDev ? ['webpack/hot/dev-server', './src/js/client/login.js'] : './src/js/client/login.js'
	},
	output: {
		path: __dirname + '/build',
		filename: '[name]app.js'
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
		new ExtractTextPlugin('[name]style.css')
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}