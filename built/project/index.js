//     Iterator
//     (c) simonfan
//     Iterator is licensed under the MIT terms.

define(["require","exports","module","iterator.array","iterator.object","iterator.object","lodash"],function(e,t,n){var r=e("iterator.array"),i=e("iterator.object"),s=e("iterator.object"),o=e("lodash"),u=function(t){var n;return o.isArray(t)?n=r:o.isObject(t)?n=i:o.isNumber(t)&&(n=s),n.apply(this,arguments)};return u.object=i,u.array=r,u.number=s,u});