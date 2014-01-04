//     Iterator
//     (c) simonfan
//     Iterator is licensed under the MIT terms.

var deps="function"!=typeof define?["./iterator/array","./iterator/object","./iterator/number","lodash"]:["iterator.array","iterator.object","iterator.number","lodash"];define(deps,function(t,r,e,n){var i=function(i){var u;return n.isArray(i)?u=t:n.isObject(i)?u=r:n.isNumber(i)&&(u=e),u.apply(this,arguments)};return i.object=r,i.array=t,i.number=e,i}),define("iterator",function(){});var baseDep="function"!=typeof define?"./base":"iterator.base";define("iterator.array",[baseDep,"lodash"],function(t,r){var e=t.extend({at:function(t){return this.evaluate(this.data[t],t)},length:function(){return this.data.length}}),n=["push","reverse","shift","sort","splice","unshift"];return r.each(n,function(t){e.proto(t,function(){return this.data[t].apply(this.data,arguments),this})}),r.each(["concat","slice"],function(t){e.proto(t,function(){var r=this.data[t].apply(this.data,arguments);return this.constructor(r)})}),e});var baseDep="function"!=typeof define?"./base":"iterator.base";define("iterator.object",[baseDep,"lodash"],function(t,r){var e=t.extend({initialize:function(e,n){n=n||{},t.prototype.initialize.apply(this,arguments),this.order=n.order||r.keys(e)},keyAt:function(t){return this.order[t]},at:function(t){var r=this.keyAt(t),e=this.data[r];return this.evaluate(e,r)},length:function(){return this.order.length},nextKey:function(){return this.keyAt(this.currentIndex+1)},currentKey:function(){return this.keyAt(this.currentIndex)},previousKey:function(){return this.keyAt(this.currentIndex-1)},map:function(t){var e={};return r.each(this.order,function(r,n){e[r]=t(this.data[r],r,n)}.bind(this)),this.constructor(e)}});return e.proto("constructor",e),e}),define("iterator.base",["subject","lodash"],function(t,r){var e=t(function(t,r){this.data=t,r=r||{},this.currentIndex=r.startAt||-1,this.options=r,this.evaluate=r.evaluate||r.evaluator||this.evaluate});e.proto({move:function(t){return this.index(this.currentIndex+t),this},evaluate:function(t){return t},evaluator:function(t){return this.evaluate=t,this},start:function(){return this.currentIndex=-1,this},end:function(){return this.currentIndex=this.length(),this},index:function(t){if(t>this.length()-1||0>t)throw new Error("No such index "+t);return this.currentIndex=t,this},countBefore:function(){return this.currentIndex+1},countAfter:function(){return this.length()-(this.currentIndex+1)},range:function(t,r){for(var e=[];r>=t;)e.push(this.at(t)),t++;return e},hasNext:function(){return this.currentIndex<this.length()-1},next:function(){return this.move(1),this.current()},nextN:function(t){for(var r=[],e=this.currentIndex+t-1;this.hasNext()&&this.currentIndex<=e;)r.push(this.next());return r},hasPrevious:function(){return this.currentIndex>0},previous:function(){return this.move(-1),this.current()},previousN:function(t){for(var r=[],e=this.currentIndex-t+1;this.hasPrevious()&&this.currentIndex>=e;)r.push(this.previous());return r},current:function(){return this.at(this.currentIndex)},value:function(){return this.data}}),e.proto({hasPrev:e.prototype.hasPrevious,prev:e.prototype.previous,prevN:e.prototype.previousN});var n=["map","filter","compact","difference"];return r.each(n,function(t){e.proto(t,function(){var e=r(this.data);e=e[t].apply(e,arguments);var n=this.constructor(e.value());return n})}),e});