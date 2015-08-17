var config = require('config')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer-core')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var isDev = process.env.NODE_ENV === 'development' ? true : false

var devServer = {
	client: 'webpack-dev-server/client?' + config.get('staticFileUrl'),
	server: 'webpack/hot/only-dev-server'
}

module.exports = {
	devServer: {
		headers: { 'Access-Control-Allow-Origin': '*' },
		contentBase: './build',
		hot: true
	},
	entry: {
		"./": isDev
			? [devServer.client, devServer.server, './src/js/client/app.js']
			: './src/js/client/app.js',
		"admin/": isDev
			? [devServer.client, devServer.server, './src/js/client/admin.js']
			: './src/js/client/admin.js',
		"admin/login/": isDev
			? [devServer.client, devServer.server, './src/js/client/login.js']
			: './src/js/client/login.js'
	},
	output: {
		path: __dirname + '/build',
		filename: '[name]app.js',
		publicPath: config.get('staticFileUrl') + '/'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loaders: ['react-hot', 'babel']
			},
			{
				test: /\.scss$/,
				loader: isDev
					? 'style!css!postcss!sass'
					: ExtractTextPlugin.extract('style', 'css!postcss!sass')
			}
		],
		postcss: function() {
			return [autoprefixer]
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('[name]style.css')
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}