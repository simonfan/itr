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
