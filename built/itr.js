//     subject
//     (c) simonfan
//     subject is licensed under the MIT terms.

//     Iterator
//     (c) simonfan
//     Iterator is licensed under the MIT terms.

define("__subject/private/assign",["require","exports","module","lodash"],function(t,e,r){function n(t,e,r){if(s.defaults(r,o),!s.isArray(e))throw new Error("Currently subject.assign does not accept non-array properties for accessor assignment.");s.each(e,function(e){var n=s.extend({},r);n.get&&(n.get=s.partial(n.get,e)),n.set&&(n.set=s.partial(n.set,e)),Object.defineProperty(t,e,n)})}function i(t,e,r){s.defaults(r,u),s.each(e,function(e,n){var i=s.assign({value:e},r);Object.defineProperty(t,n,i)})}var s=t("lodash"),o={configurable:!0,enumerable:!0},u=s.extend({writable:!0},o);r.exports=function(t,e,r){return r?r.get||r.set?n(t,e,r):i(t,e,r):s.assign(t,e),t}}),define("__subject/public/assign-proto",["require","exports","module","lodash","../private/assign"],function(t,e,r){var n=t("lodash"),i=t("../private/assign");r.exports=function(){var t,e;return n.isObject(arguments[0])?(t=arguments[0],e=arguments[1]):n.isString(arguments[0])&&(t={},t[arguments[0]]=arguments[1],e=arguments[2]),i(this.prototype,t,e),this}}),define("__subject/public/proto-merge",["require","exports","module","lodash","../private/assign"],function(t,e,r){var n=t("lodash"),i=t("../private/assign");r.exports=function(){var t,e,r;if(n.isString(arguments[0])){var s=arguments[0];t=this.prototype[s],e=arguments[1],r=arguments[2],this.prototype[s]=i(n.create(t),e,r)}else r=arguments[1],n.each(arguments[0],n.bind(function(t,e){this.protoMerge(e,t,r)},this));return this}}),define("__subject/public/extend",["require","exports","module","lodash","../private/assign"],function(t,e,r){var n=t("lodash"),i=t("../private/assign");r.exports=function(t,e){var r,s=this;return r=function(){var t=n.create(r.prototype);return t.initialize.apply(t,arguments),t},i(r,n.pick(s,s.staticProperties),{enumerable:!1}),r.prototype=n.create(s.prototype),r.assignProto(t,e),i(r.prototype,{constructor:r,__super__:s.prototype},{enumerable:!1}),r}}),define("subject",["require","exports","module","lodash","./__subject/private/assign","./__subject/public/assign-proto","./__subject/public/assign-proto","./__subject/public/proto-merge","./__subject/public/extend"],function(t,e,r){var n=t("lodash"),i=t("./__subject/private/assign"),s=function(){};s.prototype=i({},{initialize:function(){}},{enumerable:!1}),i(s,{staticProperties:["proto","assignProto","protoMerge","staticProperties","assignStatic","extend"],assignStatic:function(t,e){return this.staticProperties=n.union(this.staticProperties,n.keys(t)),i(this,t,e)},assignProto:t("./__subject/public/assign-proto"),proto:t("./__subject/public/assign-proto"),protoMerge:t("./__subject/public/proto-merge"),extend:t("./__subject/public/extend")},{enumerable:!1}),r.exports=n.bind(s.extend,s);var o={assign:i};i(r.exports,o,{enumerable:!1,writable:!1,configurable:!1})}),define("iterator/base",["subject","lodash"],function(t,e){var r=t({initialize:function(t,e){this.data=t,e=e||{},this.currentIndex=e.startAt||-1,this.options=e,this.evaluate=e.evaluate||e.evaluator||this.evaluate},move:function(t){return this.index(this.currentIndex+t),this},evaluate:function(t){return t},evaluator:function(t){return this.evaluate=t,this},start:function(){return this.currentIndex=-1,this},end:function(){return this.currentIndex=this.length(),this},index:function(t){if(t>this.length()-1||0>t)throw new Error("No such index "+t);return this.currentIndex=t,this},countBefore:function(){return this.currentIndex+1},countAfter:function(){return this.length()-(this.currentIndex+1)},range:function(t,e){for(var r=[];e>=t;)r.push(this.at(t)),t++;return r},hasNext:function(){return this.currentIndex<this.length()-1},next:function(){return this.move(1),this.current()},nextN:function(t){for(var e=[],r=this.currentIndex+t-1;this.hasNext()&&this.currentIndex<=r;)e.push(this.next());return e},hasPrevious:function(){return this.currentIndex>0},previous:function(){return this.move(-1),this.current()},previousN:function(t){for(var e=[],r=this.currentIndex-t+1;this.hasPrevious()&&this.currentIndex>=r;)e.push(this.previous());return e},current:function(){return this.at(this.currentIndex)},value:function(){return this.data}});r.proto({hasPrev:r.prototype.hasPrevious,prev:r.prototype.previous,prevN:r.prototype.previousN});var n=["map","filter","compact","difference"];return e.each(n,function(t){r.proto(t,function(){var r=e(this.data);r=r[t].apply(r,arguments);var n=this.constructor(r.value());return n})}),r}),define("iterator/array",["require","exports","module","./base","lodash"],function(t){var e=t("./base"),r=t("lodash"),n=e.extend({at:function(t){return this.evaluate(this.data[t],t)},length:function(){return this.data.length}}),i=["push","reverse","shift","sort","splice","unshift"];return r.each(i,function(t){n.proto(t,function(){return this.data[t].apply(this.data,arguments),this})}),r.each(["concat","slice"],function(t){n.proto(t,function(){var e=this.data[t].apply(this.data,arguments);return this.constructor(e)})}),n}),define("iterator/object",["require","exports","module","./base","lodash"],function(t){var e=t("./base"),r=t("lodash"),n=e.extend({initialize:function(t,n){n=n||{},e.prototype.initialize.apply(this,arguments),this.order=n.order||r.keys(t)},keyAt:function(t){return this.order[t]},at:function(t){var e=this.keyAt(t),r=this.data[e];return this.evaluate(r,e)},length:function(){return this.order.length},nextKey:function(){return this.keyAt(this.currentIndex+1)},currentKey:function(){return this.keyAt(this.currentIndex)},previousKey:function(){return this.keyAt(this.currentIndex-1)},map:function(t){var e={};return r.each(this.order,function(r,n){e[r]=t(this.data[r],r,n)}.bind(this)),this.constructor(e)}});return n.proto("constructor",n),n}),define("itr",["require","exports","module","./iterator/array","./iterator/object","lodash"],function(t){var e=t("./iterator/array"),r=t("./iterator/object"),n=t("lodash"),i=function(t){var i;return n.isArray(t)?i=e:n.isObject(t)&&(i=r),i.apply(this,arguments)};return i.object=r,i.array=e,i});