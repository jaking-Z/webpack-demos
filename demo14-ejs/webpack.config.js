var webpack = require('webpack');
module.exports = {
	entry:{
		main:'./main.js'
	},
	output:{
		filename:'./bundle.js'
	},
	module:{
		loaders:[
			{test:/\.ejs$/,loader:'ejs-loader'}
		]
	},
	resolve:{
		extensions:['','.js','.ejs']
	}
}