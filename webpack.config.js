module.exports = {
	entry: {
		app: ['webpack/hot/dev-server', './src/js/client/app.js']
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
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
}