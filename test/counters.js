(function(name, factory) {

	var mod = typeof define !== 'function' ?
		// node
		'.././src/index' :
		// browser
		'iterator',
		// dependencies for the test
		deps = [mod, 'should'];

	if (typeof define !== 'function') {
		// node
		module.exports = factory.apply(null, deps.map(require));
	} else {
		// browser
		define(deps, factory);
	}

})('test', function(Iterator, should) {
	'use strict';

	/**
	 * Counter methods
	 */
	var counters = {
		'it.length()': function () {
			it('returns the length of the object', function () {
				this.iter.length().should.be.exactly(this.values.length);
			})
		},

		'it.countAfter()': function () {

			it('returns quantity of items after current', function () {

				var iter = this.iter;

				iter.countAfter().should.eql(this.values.length);

				iter.next();
				iter.next();

				iter.countAfter().should.eql(iter.length() - 2);
			})

		},

		'it.countBefore()': function () {
			it('returns quantity of items before current', function () {

				var iter = this.iter;

				iter.countBefore().should.eql(0);

				iter.next();

				iter.next();
				iter.next();

				iter.countBefore().should.eql(3);

				iter.prev();
				iter.countBefore().should.eql(2);
			})
		},
	};

	return counters;
});
