var autoprefixer = require('autoprefixer-core')

module.exports = {
	entry: {
		app: process.env.NODE_ENV
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
				loader: process.env.NODE_ENV
					? 'style!css!postcss!sass'
					: 'style!css!postcss!sass'
			}
		],
		postcss: function() {
			return [autoprefixer]
		}
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}