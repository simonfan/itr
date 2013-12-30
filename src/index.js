//     Iterator
//     (c) simonfan
//     Iterator is licensed under the MIT terms.

/**
 * AMD and CJS module.
 *
 * @module Iterator
 */
var deps = (typeof define !== 'function') ?
	['./iterator/array', './iterator/object', './iterator/number', 'lodash'] :
	['iterator.array', 'iterator.object', 'iterator.number', 'lodash'];

if (typeof define !== 'function') { var define = require('amdefine')(module) }	// jshint ignore:line

define(deps, function (arrayIterator, objectIterator, numberIterator, _) {

	'use strict';

	/**
	 * This function returns an instance of the correct iterator
	 * according to the type of the data object.
	 *
	 * @class iterator
	 */
	var iterator = function iterator(data) {
		var builder;

		if (_.isArray(data)) {

			builder = arrayIterator;

		} else if (_.isObject(data)) {

			builder = objectIterator;

		} else if (_.isNumber(data)) {

			builder = numberIterator;

		}

		return builder.apply(this, arguments);
	};

	iterator.object = objectIterator;
	iterator.array = arrayIterator;
	iterator.number = numberIterator;

	return iterator;
});
