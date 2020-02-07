const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
  filename: 'application.css'
});


module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'application.js',
		path: path.resolve(__dirname, 'public')
	},
	module: {
		rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		},
		{
			test: /\.scss$/,
			use: extractPlugin.extract({
				use: ['css-loader', 'sass-loader']
			})
		}]
	},
	plugins: [
		extractPlugin
	]
};