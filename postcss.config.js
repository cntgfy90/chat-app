module.exports = {
	plugins: {
		'cssnano': {},
		'autoprefixer': {
			'browsers': ['> 1%', 'last 2 versions']
		},
		'postcss-cssnext': {},
		'postcss-font-magician': {}
	}
};