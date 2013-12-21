//     Iterator
//     (c) simonfan
//     Iterator is licensed under the MIT terms.

var deps="function"!=typeof define?["./iterator/array","./iterator/object","lodash"]:["iterator.array","iterator.object","lodash"];define(deps,function(r,t,e){var a=function(a){var o=e.isArray(a)?r:t;return o.apply(this,arguments)};return a.object=t,a.array=r,a}),define("iterator",function(){});