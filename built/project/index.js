//     Iterator
//     (c) simonfan
//     Iterator is licensed under the MIT terms.

var deps=typeof define!="function"?["./iterator/array","./iterator/object","./iterator/number","lodash"]:["iterator.array","iterator.object","iterator.number","lodash"];define(deps,function(e,t,n,r){var i=function(s){var o;return r.isArray(s)?o=e:r.isObject(s)?o=t:r.isNumber(s)&&(o=n),o.apply(this,arguments)};return i.object=t,i.array=e,i.number=n,i});