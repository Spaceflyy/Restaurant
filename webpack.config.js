const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	devServer: {
		static: "./dist",
	},

	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "imgs/[name][ext][query]",
	},

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		],
	},
};
