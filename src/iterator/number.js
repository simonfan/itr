/**
 * base
 *
 *
 * @module iterator
 * @submodule base
 */

if (typeof define !== 'function') { var define = require('amdefine')(module) } // jshint ignore:line

define(function (require, exports, module) {
	'use strict';

	var iterator = require('iterator.base');

	var numberIterator = iterator.extend({
		at: function at(pos) {
			return this.evaluate(pos, pos);
		},

		length: function length() {
			return this.data;
		},
	});

	return numberIterator;
});
