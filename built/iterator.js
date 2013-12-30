//     Iterator
//     (c) simonfan
//     Iterator is licensed under the MIT terms.

var deps="function"!=typeof define?["./iterator/array","./iterator/object","./iterator/number","lodash"]:["iterator.array","iterator.object","iterator.number","lodash"];define(deps,function(r,e,t,a){var i=function(i){var n;return a.isArray(i)?n=r:a.isObject(i)?n=e:a.isNumber(i)&&(n=t),n.apply(this,arguments)};return i.object=e,i.array=r,i.number=t,i}),define("iterator",function(){});