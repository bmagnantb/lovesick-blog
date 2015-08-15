module.exports = {
	entry: './src/js/client/app',
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