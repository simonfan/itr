# iterator

Creates an iterator

## Installation:

NPM: 

	npm install git://github.com/simonfan/iterator.git

Bower: 

	bower install iterator

## Examples:

Array:

``` javascript
var iterator = require('iterator');

var colors = ['yellow', 'green', 'blue', 'red', 'white'];

// Wrap the array in an iterator object.
colors = iterator(colors);

while (colors.hasNext()) {
	console.log(colors.next());
}
// logs 'yellow', 'green', 'blue', 'red', 'white'

while (colors.hasPrev()) {
	console.log(colors.prev());
}
// logs 'red', 'blue', 'green', 'yellow'

while (colors.hasNext()) {
	console.log(colors.nextN(2));
}

```
