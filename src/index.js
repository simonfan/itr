//     Iterator
//     (c) simonfan
//     Iterator is licensed under the MIT terms.

/**
 * AMD and CJS module.
 *
 * @module Iterator
 */
var deps = (typeof define !== 'function') ?
	['./iterator/array', './iterator/object', 'lodash'] :
	['iterator.array', 'iterator.object', 'lodash'];

if (typeof define !== 'function') { var define = require('amdefine')(module) }	// jshint ignore:line

define(deps, function (arrayIterator, objectIterator, _) {

	'use strict';

	/**
	 * This function returns an instance of the correct iterator
	 * according to the type of the data object.
	 *
	 * @class iterator
	 */
	var iterator = function iterator(data) {
		var builder = _.isArray(data) ? arrayIterator : objectIterator;
		return builder.apply(this, arguments);
	};

	iterator.object = objectIterator;
	iterator.array = arrayIterator;

	return iterator;
});
