define(["require","exports","module","iterator.base","lodash"],function(e,t,n){var r=e("iterator.base"),i=e("lodash"),s=r.extend({initialize:function(t,n){n=n||{},r.prototype.initialize.apply(this,arguments),this.order=n.order||i.keys(t)},keyAt:function(t){return this.order[t]},at:function(t){var n=this.keyAt(t),r=this.data[n];return this.evaluate(r,n)},length:function(){return this.order.length},nextKey:function(){return this.keyAt(this.currentIndex+1)},currentKey:function(){return this.keyAt(this.currentIndex)},previousKey:function(){return this.keyAt(this.currentIndex-1)},map:function(e){var t={};return i.each(this.order,function(n,r){t[n]=e(this.data[n],n,r)}.bind(this)),this.constructor(t)}});return s.proto("constructor",s),s});