//     Iterator
//     (c) simonfan
//     Iterator is licensed under the MIT terms.

var deps=typeof define!="function"?["./iterator/array","./iterator/object","lodash"]:["iterator.array","iterator.object","lodash"];define(deps,function(e,t,n){var r=function(i){var s=n.isArray(i)?e:t;return s.apply(this,arguments)};return r.object=t,r.array=e,r});