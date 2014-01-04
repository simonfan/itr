/**
 * base
 *
 *
 * @module iterator
 * @submodule base
 */

var baseDep = (typeof define !== 'function') ? './base' : 'iterator.base';

if (typeof define !== 'function') { var define = require('amdefine')(module) } // jshint ignore:line

define([baseDep, 'lodash'], function (iterator, _) {
	'use strict';

	/**
	 * Default initialization, custom .at method.
	 *
     * In addition to iterator methods, arrayIterators also have the following `Array` methods:
     * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`, `splice`,
     * and `unshift`
     *
	 * @class arrayIterator
	 */
	var arrayIterator = iterator.extend({
		/**
		 * Returns the value at a given index
		 *
		 * @method at
		 * @param pos {Number}
		 */
		at: function at(pos) {
			return this.evaluate(this.data[pos], pos);
		},

		length: function length() {
			return this.data.length;
		},
	});

	/**
	 * Array methods
	 */

	/**
	 * Methods that alter `data` property directly
	 */
	var arrayMethods = ['push', 'reverse', 'shift', 'sort', 'splice', 'unshift'];

	_.each(arrayMethods, function (method) {
		arrayIterator.proto(method, function () {
			this.data[method].apply(this.data, arguments);

			return this;
		});
	});

	/**
	 * Methods that create a new array and return a new iterator.
	 */
	_.each(['concat', 'slice'], function (method) {
		arrayIterator.proto(method, function () {
			var data = this.data[method].apply(this.data, arguments);

			return this.constructor(data);
		});
	});

	return arrayIterator;
});
