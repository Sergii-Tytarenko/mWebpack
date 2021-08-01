const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

// constants
const isDev = process.env.NODE_ENV == 'development';
const isProd = !isDev;
const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;
const assetName = () => isDev ? `[name][ext]` : `[name].[contenthash][ext]`;

// Css-loaders
const cssLoaders = extra => {
	const loader = [MiniCssExtractPlugin.loader, 'css-loader'];

	if (extra) loader.push(extra)
	return loader;
}

// optimization
const optimization = () => {
	const config = {
			splitChunks: {
			chunks: 'all'
		}
	}

	if (isProd) {
		config.minimizer = [
			new TerserPlugin(),
			new CssMinimizerPlugin(),
		]
	}
	return config;
}

/*  main options
---------------------------------------------------------------*/
module.exports = {
	context: path.resolve(__dirname, '#src'),
	mode: 'development',
	entry: './js/index.js', // with polyfill  ['@babel/polyfill', './js/index.js']
	output: {
		filename: `js/${filename('js')}`,
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},

	// source-map / optimaization
	devtool: isDev ? 'source-map' : false,
	optimization: optimization(),

	// server
	devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
		watchContentBase: true,
    compress: true,
    port: 3000,
		open: true,
  },

	// plugins
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './#src/index.html'),
			inject: 'body',
		}),

		new MiniCssExtractPlugin({
			filename: `css/${filename('css')}`,
		})
	],

	// loaders
	module: {
    rules: [
			{
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/i,
        use: cssLoaders('sass-loader'),
      },
			{
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
				generator: {
					filename: `img/${assetName()}`
				}
      },
			{
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
				generator: {
					filename: `fonts/${assetName()}`
				}
      },
    ],
  },
}
