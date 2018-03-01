const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'./src/js/main.ts',
		'bootstrap',
		'./src/css/main.scss'
	],
    output: {
        filename: 'js/main.js',
		path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						'scss': 'vue-style-loader!css-loader!sass-loader',
						'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',						
					}
				}
			},
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/],
				}				
            },
			{
				test: /\.s?css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
		    }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".vue", ".css", ".scss"],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': path.resolve(__dirname, 'src')
		}
    },
	plugins: [
		new ExtractTextPlugin('./css/main.css')
  	]
};
