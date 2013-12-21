require.config({
	urlArgs: 'bust=0.02688813372515142',
	baseUrl: '/',
	paths: {
		requirejs: 'bower_components/requirejs/require',
		text: 'bower_components/requirejs-text/text',
		mocha: 'node_modules/mocha/mocha',
		should: 'node_modules/should/should',
		jquery: 'bower_components/jquery/jquery',
		'requirejs-text': 'bower_components/requirejs-text/text',
		underscore: 'bower_components/underscore/underscore',
		lodash: 'bower_components/lodash/dist/lodash.compat',
		subject: 'bower_components/subject/src/subject',

		iterator: 'src/index',
		'iterator.base': 'src/iterator/base',
		'iterator.array': 'src/iterator/array',
		'iterator.object': 'src/iterator/object',

		'iterator.optimized': 'built/iterator',
	},
	shim: {
		backbone: {
			exports: 'Backbone',
			deps: [
				'jquery',
				'underscore'
			]
		},
		underscore: {
			exports: '_'
		},
		mocha: {
			exports: 'mocha'
		},
		should: {
			exports: 'should'
		}
	}
});
