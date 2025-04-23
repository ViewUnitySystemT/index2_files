(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function u(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
var ia=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if(typeof Object.setPrototypeOf=="function")ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function w(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function y(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function z(a){if(!(a instanceof Array)){a=y(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function pa(a){return qa(a,a)}
function qa(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function ra(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var sa=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ra(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||sa});
function ta(){this.D=!1;this.u=null;this.i=void 0;this.h=1;this.o=this.M=0;this.P=this.j=null}
function ua(a){if(a.D)throw new TypeError("Generator is already running");a.D=!0}
ta.prototype.G=function(a){this.i=a};
function va(a,b){a.j={exception:b,xd:!0};a.h=a.M||a.o}
ta.prototype.return=function(a){this.j={return:a};this.h=this.o};
ta.prototype.yield=function(a,b){this.h=b;return{value:a}};
ta.prototype.A=function(a){this.h=a};
function wa(a,b,c){a.M=b;c!=void 0&&(a.o=c)}
function xa(a,b){a.h=b;a.M=0}
function ya(a){a.M=0;var b=a.j.exception;a.j=null;return b}
function za(a){var b=a.P.splice(0)[0];(b=a.j=a.j||b)?b.xd?a.h=a.M||a.o:b.A!=void 0&&a.o<b.A?(a.h=b.A,a.j=null):a.h=a.o:a.h=0}
function Aa(a){this.h=new ta;this.i=a}
function Ba(a,b){ua(a.h);var c=a.h.u;if(c)return Ca(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Da(a)}
function Ca(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.D=!1,e;var f=e.value}catch(g){return a.h.u=null,va(a.h,g),Da(a)}a.h.u=null;d.call(a.h,f);return Da(a)}
function Da(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.D=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,va(a.h,c)}a.h.D=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.xd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ea(a){this.next=function(b){ua(a.h);a.h.u?b=Ca(a,a.h.u.next,b,a.h.G):(a.h.G(b),b=Da(a));return b};
this.throw=function(b){ua(a.h);a.h.u?b=Ca(a,a.h.u["throw"],b,a.h.G):(va(a.h,b),b=Da(a));return b};
this.return=function(b){return Ba(a,b)};
this[Symbol.iterator]=function(){return this}}
function Fa(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Fa(new Ea(new Aa(a)))}
function C(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("globalThis",function(a){return a||ea});
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return ja});
u("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.X=0;this.ab=void 0;this.h=[];this.u=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.U),reject:g(this.j)}};
b.prototype.U=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Z(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.P(g):this.o(g)}};
b.prototype.P=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}typeof h=="function"?this.ha(h,g):this.o(g)};
b.prototype.j=function(g){this.M(2,g)};
b.prototype.o=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(this.X!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.X);this.X=g;this.ab=h;this.X===2&&this.Y();this.D()};
b.prototype.Y=function(){var g=this;e(function(){if(g.G()){var h=ea.console;typeof h!=="undefined"&&h.error(g.ab)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.ab;return k(g)};
b.prototype.D=function(){if(this.h!=null){for(var g=0;g<this.h.length;++g)f.i(this.h[g]);this.h=null}};
var f=new c;b.prototype.Z=function(g){var h=this.i();g.ic(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,t){return typeof p=="function"?function(v){try{l(p(v))}catch(x){m(x)}}:t}
var l,m,n=new b(function(p,t){l=p;m=t});
this.ic(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.ic=function(g,h){function k(){switch(l.X){case 1:g(l.ab);break;case 2:h(l.ab);break;default:throw Error("Unexpected state: "+l.X);}}
var l=this;this.h==null?f.i(k):this.h.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=y(g),m=l.next();!m.done;m=l.next())d(m.value).ic(h,k)})};
b.all=function(g){var h=y(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(v){return function(x){p[v]=x;t--;t==0&&l(p)}}
var p=[],t=0;do p.push(void 0),t++,d(k.value).ic(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||oa});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=y(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ra(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ra(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ra(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ra(k,g)&&ra(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ra(k,g)&&ra(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return fa(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ra(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=y(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(y([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=y(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(y([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ga(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ga(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ga(this,function(b){return b})}});
function Ha(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ra(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ha(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ra(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ga(this,function(b,c){return c})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ka=Ka||{},D=this||self;function E(a,b,c){a=a.split(".");c=c||D;for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function La(a){var b=F("CLOSURE_FLAGS");a=b&&b[a];return a!=null?a:!1}
function F(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Ma(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ma(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Oa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(Math.random()*1E9>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Wa=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ua:Va;return Wa.apply(null,arguments)}
function Xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function $a(){return Date.now()}
function ab(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
ab(bb,Error);bb.prototype.name="CustomError";function cb(a){return a}
;var db=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var eb=globalThis.trustedTypes,fb;function gb(){var a=null;if(!eb)return a;try{var b=function(c){return c};
a=eb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function hb(){fb===void 0&&(fb=gb());return fb}
;function ib(a){this.h=a}
ib.prototype.toString=function(){return this.h+""};
function jb(a){var b=hb();a=b?b.createScriptURL(a):a;return new ib(a)}
function kb(a){if(a instanceof ib)return a.h;throw Error("");}
;var lb=pa([""]),mb=qa(["\x00"],["\\0"]),nb=qa(["\n"],["\\n"]),ob=qa(["\x00"],["\\u0000"]);function pb(a){return a.toString().indexOf("`")===-1}
pb(function(a){return a(lb)})||pb(function(a){return a(mb)})||pb(function(a){return a(nb)})||pb(function(a){return a(ob)});function qb(a){this.h=a}
qb.prototype.toString=function(){return this.h};
var rb=new qb("about:invalid#zClosurez");function sb(a){this.Ee=a}
function tb(a){return new sb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var ub=[tb("data"),tb("http"),tb("https"),tb("mailto"),tb("ftp"),new sb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],vb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function wb(a){if(a instanceof qb)if(a instanceof qb)a=a.h;else throw Error("");else a=vb.test(a)?a:void 0;return a}
;function xb(a,b){b=wb(b);b!==void 0&&(a.href=b)}
;function yb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function zb(a){this.h=a}
zb.prototype.toString=function(){return this.h+""};function Ab(a){a=a===void 0?document:a;var b,c;a=(c=(b=a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Cb(a){this.h=a}
Cb.prototype.toString=function(){return this.h+""};
function Db(a){var b=hb();a=b?b.createScript(a):a;return new Cb(a)}
function Eb(a){if(a instanceof Cb)return a.h;throw Error("");}
;function Fb(a){var b=Ab(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Gb(a,b){a.src=kb(b);Fb(a)}
;function Hb(){this.h=Ib[0].toLowerCase()}
Hb.prototype.toString=function(){return this.h};function Jb(a){var b="true".toString(),c=[new Hb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Hb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;var Kb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Lb(a,b){if(b instanceof ib)a.href=kb(b).toString(),a.rel="stylesheet";else{if(Kb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=wb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;var Mb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Nb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Ob=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Pb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Qb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Nb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Sb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Tb(a,b){b=Mb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Ub(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Vb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Wb(a){var b=F("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||D.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Xb(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Yb[c])c=Yb[c];else{c=String(c);if(!Yb[c]){var f=/function\s+([^\(]+)/m.exec(c);Yb[c]=f?f[1]:"[Anonymous]"}c=Yb[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function Xb(a,b){b||(b={});b[Zb(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[Zb(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=Xb(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[Zb(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=Xb(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function Zb(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var Yb={};function $b(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ac=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bc(a){return a?decodeURI(a):a}
function cc(a){return bc(a.match(ac)[3]||null)}
function dc(a){return bc(a.match(ac)[5]||null)}
function ec(a){var b=a.match(ac);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function fc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function hc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)hc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function ic(a){var b=[],c;for(c in a)hc(c,a[c],b);return b.join("&")}
function jc(a,b){b=ic(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function kc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var lc=/#|$/,mc=/[?&]($|#)/;function nc(a,b){for(var c=a.search(lc),d=0,e,f=[];(e=kc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(mc,"$1")}
;var oc=(new Date("2024-01-01T00:00:00Z")).getTime();function pc(a){var b=C.apply(1,arguments).filter(function(d){return d}).join("&");
if(!b)return a;var c=a.match(/[?&]adurl=/);return c?a.slice(0,c.index+1)+b+"&"+a.slice(c.index+1):a+(a.indexOf("?")===-1?"?":"&")+b}
function qc(a){var b=a.url;a=a.Zh;this.j=b;this.D=a;a=/[?&]dsh=1(&|$)/.test(b);this.u=!a&&/[?&]ae=1(&|$)/.test(b);this.M=!a&&/[?&]ae=2(&|$)/.test(b);if((this.h=/[?&]adurl=([^&]*)/.exec(b))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}this.o=(new Date).getTime()-oc}
function rc(a){a=a.D;if(!a)return"";var b="";a.platform&&(b+="&uap="+encodeURIComponent(a.platform));a.platformVersion&&(b+="&uapv="+encodeURIComponent(a.platformVersion));a.uaFullVersion&&(b+="&uafv="+encodeURIComponent(a.uaFullVersion));a.architecture&&(b+="&uaa="+encodeURIComponent(a.architecture));a.model&&(b+="&uam="+encodeURIComponent(a.model));a.bitness&&(b+="&uab="+encodeURIComponent(a.bitness));a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+
";"+encodeURIComponent(c.version)}).join("|")));
typeof a.wow64!=="undefined"&&(b+="&uaw="+Number(a.wow64));return b.substring(1)}
;function sc(){try{var a,b;return!!((a=window)==null?0:(b=a.top)==null?0:b.location.href)&&!1}catch(c){return!0}}
;function tc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function uc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Na(d)?uc.apply(null,d):tc(d)}}
;function H(){this.ea=this.ea;this.M=this.M}
H.prototype.ea=!1;H.prototype.dispose=function(){this.ea||(this.ea=!0,this.ba())};
H.prototype[Symbol.dispose]=function(){this.dispose()};
function vc(a,b){a.addOnDisposeCallback(Xa(tc,b))}
H.prototype.addOnDisposeCallback=function(a,b){this.ea?b!==void 0?a.call(b):a():(this.M||(this.M=[]),b&&(a=a.bind(b)),this.M.push(a))};
H.prototype.ba=function(){if(this.M)for(;this.M.length;)this.M.shift()()};function wc(){var a=xc();a=a===void 0?"bevasrsg":a;return new Promise(function(b){var c=window===window.top?window:sc()?window:window.top,d=c[a],e;((e=d)==null?0:e.bevasrs)?b(new yc(d.bevasrs)):(d||(d={},d=(d.nqfbel=[],d),c[a]=d),d.nqfbel.push(function(f){b(new yc(f))}))})}
function yc(a){H.call(this);var b=this;this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.Zc=this.vm.p;this.j=this.o.bind(this);this.addOnDisposeCallback(function(){return void zc(b)})}
w(yc,H);yc.prototype.snapshot=function(a){return this.vm.s(Object.assign({},a.wb&&{c:a.wb},a.cd&&{s:a.cd},a.dd!==void 0&&{p:a.dd}))};
yc.prototype.o=function(a){this.vm.e(a)};
function zc(a){a.h!==void 0&&(a.i.forEach(function(b){var c;(c=a.h)==null||c.removeEventListener(b,a.j)}),a.h=void 0)}
;function Ac(a){var b=b===void 0?49:b;var c=[];Bc(a,Cc,6).forEach(function(d){Dc(d,2)<=b&&c.push(Dc(d,1))});
return c}
function Ec(a){var b=b===void 0?49:b;var c=[];Bc(a,Cc,6).forEach(function(d){Dc(d,2)>b&&c.push(Dc(d,1))});
return c}
;var Fc;function Gc(){H.apply(this,arguments);this.j=1;this[Fc]=this.dispose}
w(Gc,H);Gc.prototype.share=function(){if(this.ea)throw Error("E:AD");this.j++;return this};
Gc.prototype.dispose=function(){--this.j||H.prototype.dispose.call(this)};
Fc=Symbol.dispose;function Hc(a){return{fieldType:2,fieldName:a}}
function Ic(a){return{fieldType:3,fieldName:a}}
;function Jc(a){this.h=a;a.Hc("/client_streamz/bg/frs",Ic("mk"))}
Jc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Kc(a){this.h=a;a.Hc("/client_streamz/bg/wrl",Ic("mn"),Hc("ac"),Hc("sc"),Ic("rk"),Ic("mk"))}
Kc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Lc(a){this.h=a;a.Mb("/client_streamz/bg/ec",Ic("en"),Ic("mk"))}
Lc.prototype.kb=function(a,b){this.h.Jb("/client_streamz/bg/ec",a,b)};
function Mc(a){this.h=a;a.Hc("/client_streamz/bg/el",Ic("en"),Ic("mk"))}
Mc.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/el",a,b,c)};
function Nc(a){this.h=a;a.Mb("/client_streamz/bg/cec",Hc("ec"),Ic("mk"))}
Nc.prototype.kb=function(a,b){this.h.Jb("/client_streamz/bg/cec",a,b)};
function Oc(a){this.h=a;a.Mb("/client_streamz/bg/po/csc",Hc("cs"),Ic("mk"))}
Oc.prototype.kb=function(a,b){this.h.Jb("/client_streamz/bg/po/csc",a,b)};
function Pc(a){this.h=a;a.Mb("/client_streamz/bg/po/ctav",Ic("av"),Ic("mk"))}
Pc.prototype.kb=function(a,b){this.h.Jb("/client_streamz/bg/po/ctav",a,b)};
function Qc(a){this.h=a;a.Mb("/client_streamz/bg/po/cwsc",Ic("su"),Ic("mk"))}
Qc.prototype.kb=function(a,b){this.h.Jb("/client_streamz/bg/po/cwsc",a,b)};function Rc(a){D.setTimeout(function(){throw a;},0)}
;var Sc=La(610401301),Tc=La(1981196515);function Uc(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var Vc,Wc=D.navigator;Vc=Wc?Wc.userAgentData||null:null;function Xc(a){if(!Sc||!Vc)return!1;for(var b=0;b<Vc.brands.length;b++){var c=Vc.brands[b].brand;if(c&&c.indexOf(a)!=-1)return!0}return!1}
function J(a){return Uc().indexOf(a)!=-1}
;function Yc(){return Sc?!!Vc&&Vc.brands.length>0:!1}
function Zc(){return Yc()?!1:J("Opera")}
function $c(){return J("Firefox")||J("FxiOS")}
function ad(){return Yc()?Xc("Chromium"):(J("Chrome")||J("CriOS"))&&!(Yc()?0:J("Edge"))||J("Silk")}
;function bd(){return Sc?!!Vc&&!!Vc.platform:!1}
function cd(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;function dd(a){dd[" "](a);return a}
dd[" "]=function(){};var ed=Zc(),fd=Yc()?!1:J("Trident")||J("MSIE"),gd=J("Edge"),hd=J("Gecko")&&!(Uc().toLowerCase().indexOf("webkit")!=-1&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),id=Uc().toLowerCase().indexOf("webkit")!=-1&&!J("Edge");id&&J("Mobile");bd()||J("Macintosh");bd()||J("Windows");(bd()?Vc.platform==="Linux":J("Linux"))||bd()||J("CrOS");var jd=bd()?Vc.platform==="Android":J("Android");cd();J("iPad");J("iPod");cd()||J("iPad")||J("iPod");Uc().toLowerCase().indexOf("kaios");$c();var kd=cd()||J("iPod"),ld=J("iPad");!J("Android")||ad()||$c()||Zc()||J("Silk");ad();var md=J("Safari")&&!(ad()||(Yc()?0:J("Coast"))||Zc()||(Yc()?0:J("Edge"))||(Yc()?Xc("Microsoft Edge"):J("Edg/"))||(Yc()?Xc("Opera"):J("OPR"))||$c()||J("Silk")||J("Android"))&&!(cd()||J("iPad")||J("iPod"));var nd={},od=null;function pd(a,b){Na(a);b===void 0&&(b=0);qd();b=nd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function rd(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;sd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function sd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=od[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
qd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function qd(){if(!od){od={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));nd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];od[f]===void 0&&(od[f]=e)}}}}
;var td=typeof Uint8Array!=="undefined",ud=!fd&&typeof btoa==="function",vd=/[-_.]/g,wd={"-":"+",_:"/",".":"="};function xd(a){return wd[a]||""}
var yd={};function zd(a,b){Ad(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
zd.prototype.sizeBytes=function(){Ad(yd);var a=this.h;if(!(a==null||td&&a!=null&&a instanceof Uint8Array))if(typeof a==="string")if(ud){a=vd.test(a)?a.replace(vd,xd):a;a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=rd(a);else Ma(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var Bd;function Ad(a){if(a!==yd)throw Error("illegal external caller");}
;var Cd=void 0;function Dd(a){a=Error(a);Vb(a,"warning");return a}
;var Ed=typeof Symbol==="function"&&typeof Symbol()==="symbol";function Fd(a,b,c){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?(c===void 0?0:c)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b}
var Gd=Fd("jas",void 0,!0),Hd=Fd(void 0,"1oa"),Id=Fd(void 0,"0actk"),Jd=Fd("m_m","Lh",!0),Kd=Fd(void 0,"vps");Math.max.apply(Math,z(Object.values({lh:1,kh:2,jh:4,ph:8,oh:16,nh:32,Mf:64,rh:128,hh:256,gh:512,Sf:1024,qh:2048,Tf:4096,Nf:8192,ih:16384,mh:32768})));var Ld={De:{value:0,configurable:!0,writable:!0,enumerable:!1}},Md=Object.defineProperties,K=Ed?Gd:"De",Nd,Od=[];Pd(Od,55);Nd=Object.freeze(Od);function Qd(a,b){Ed||K in a||Md(a,Ld);a[K]|=b}
function Pd(a,b){Ed||K in a||Md(a,Ld);a[K]=b}
;var Rd={};function Sd(a,b){if(b===void 0){if(b=a.h!==Td)b=!!(2&(a.F[K]|0));return b}return!!(2&b)&&a.h!==Td}
var Td={};function Ud(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
var Vd=Object.freeze({}),Wd={};function Xd(){return typeof BigInt==="function"}
;function Yd(a){a.Gh=!0;return a}
;var Zd=Yd(function(a){return typeof a==="number"}),$d=Yd(function(a){return typeof a==="string"}),ae=Yd(function(a){return typeof a==="boolean"});
function be(){var a=ce;return Yd(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var de=Yd(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var ee=typeof D.BigInt==="function"&&typeof D.BigInt(0)==="bigint";function fe(a){var b=a;if($d(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Zd(b)&&!Number.isSafeInteger(b))throw Error(String(b));return ee?BigInt(a):a=ae(a)?a?"1":"0":$d(a)?a.trim()||"0":String(a)}
var le=Yd(function(a){return ee?a>=ge&&a<=he:a[0]==="-"?ie(a,je):ie(a,ke)}),je=Number.MIN_SAFE_INTEGER.toString(),ge=ee?BigInt(Number.MIN_SAFE_INTEGER):void 0,ke=Number.MAX_SAFE_INTEGER.toString(),he=ee?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function ie(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var me=0,ne=0;function oe(a){var b=a>>>0;me=b;ne=(a-b)/4294967296>>>0}
function pe(a){if(a<0){oe(0-a);var b=y(qe(me,ne));a=b.next().value;b=b.next().value;me=a>>>0;ne=b>>>0}else oe(a)}
function re(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Xd()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+se(c)+se(a));return c}
function se(a){a=String(a);return"0000000".slice(a.length)+a}
function te(){var a=me,b=ne;b&2147483648?Xd()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=y(qe(a,b)),a=b.next().value,b=b.next().value,a="-"+re(a,b)):a=re(a,b);return a}
function qe(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function ue(a){return Array.prototype.slice.call(a)}
;var ve=typeof BigInt==="function"?BigInt.asIntN:void 0,we=Number.isSafeInteger,xe=Number.isFinite,ye=Math.trunc;function ze(a){return a.displayName||a.name||"unknown type name"}
function Ae(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Ma(a)+": "+a);return a}
var Be=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ce(a){switch(typeof a){case "bigint":return!0;case "number":return xe(a);case "string":return Be.test(a);default:return!1}}
function De(a){if(typeof a!=="number")throw Dd("int32");if(!xe(a))throw Dd("int32");return a|0}
function Ee(a){return a==null?a:De(a)}
function Fe(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return xe(a)?a|0:void 0}
function Ge(a){var b=0;b=b===void 0?0:b;if(!Ce(a))throw Dd("int64");var c=typeof a;switch(b){case 2048:switch(c){case "string":return He(a);case "bigint":return String(ve(64,a));default:return Ie(a)}case 4096:switch(c){case "string":return Je(a);case "bigint":return fe(ve(64,a));default:return Ke(a)}case 0:switch(c){case "string":return He(a);case "bigint":return fe(ve(64,a));default:return Le(a)}default:return yb(b,"Unknown format requested type for int64")}}
function Me(a){return a==null?a:Ge(a)}
function Ne(a){var b=a.length;return a[0]==="-"?b<20?!0:b===20&&Number(a.substring(0,7))>-922337:b<19?!0:b===19&&Number(a.substring(0,6))<922337}
function Oe(a){a.indexOf(".");if(Ne(a))return a;if(a.length<16)pe(Number(a));else if(Xd())a=BigInt(a),me=Number(a&BigInt(4294967295))>>>0,ne=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");ne=me=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),ne*=1E6,me=me*1E6+d,me>=4294967296&&(ne+=Math.trunc(me/4294967296),ne>>>=0,me>>>=0);b&&(b=y(qe(me,ne)),a=b.next().value,b=b.next().value,me=a,ne=b)}return te()}
function Le(a){Ce(a);a=ye(a);if(!we(a)){pe(a);var b=me,c=ne;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);var d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:re(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function Ie(a){Ce(a);a=ye(a);if(we(a))a=String(a);else{var b=String(a);Ne(b)?a=b:(pe(a),a=te())}return a}
function He(a){Ce(a);var b=ye(Number(a));if(we(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Oe(a)}
function Je(a){var b=ye(Number(a));if(we(b))return fe(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Xd()?fe(ve(64,BigInt(a))):fe(Oe(a))}
function Ke(a){return we(a)?fe(Le(a)):fe(Ie(a))}
function Pe(a){if(typeof a!=="string")throw Error();return a}
function Qe(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Re(a){return a==null||typeof a==="string"?a:void 0}
function Se(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+ze(b)+" but got "+(a&&ze(a.constructor)));}
function Te(a,b,c){if(a!=null&&typeof a==="object"&&a[Jd]===Rd)return a;if(Array.isArray(a)){var d=a[K]|0,e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Pd(a,e);return new b(a)}}
;var Ue={};function Ve(a){return a}
;function We(a,b,c,d,e){d=d?!!(b&32):void 0;var f=[],g=a.length,h=!1;if(b&64){if(b&256){g--;var k=a[g];var l=g;Ud(k)}else l=4294967295,k=void 0,g&&Ud(a[g-1]);if(!(e||b&512)){h=!0;var m;var n=((m=Xe)!=null?m:Ve)(k?l- -1:b>>16&1023||536870912,-1,a,k);l=n+-1}}else l=4294967295,b&1||(k=g&&a[g-1],Ud(k)?(g--,l=g,n=0):k=void 0);m=void 0;for(var p=0;p<g;p++){var t=a[p];if(t!=null&&(t=c(t,d))!=null)if(p>=l){var v=void 0;((v=m)!=null?v:m={})[p- -1]=t}else f[p]=t}if(k)for(var x in k)a=k[x],a!=null&&(a=c(a,d))!=
null&&(g=+x,g<n?f[g+-1]=a:(g=void 0,((g=m)!=null?g:m={})[x]=a));m&&(h?f.push(m):f[l]=m);e&&Pd(f,b&67043905|(m!=null?290:34));return f}
function Ye(a){switch(typeof a){case "number":return Number.isFinite(a)?a:""+a;case "bigint":return le(a)?Number(a):""+a;case "boolean":return a?1:0;case "object":if(Array.isArray(a)){var b=a[K]|0;return a.length===0&&b&1?void 0:We(a,b,Ye,!1,!1)}if(a[Jd]===Rd)return Ze(a);if(a instanceof zd){b=a.h;if(b==null)a="";else if(typeof b==="string")a=b;else{if(ud){for(var c="",d=0,e=b.length-10240;d<e;)c+=String.fromCharCode.apply(null,b.subarray(d,d+=10240));c+=String.fromCharCode.apply(null,d?b.subarray(d):
b);b=btoa(c)}else b=pd(b);a=a.h=b}return a}return}return a}
var Xe;function $e(a,b){if(b){Xe=b==null||b===Ve||b[Kd]!==Ue?Ve:b;try{return Ze(a)}finally{Xe=void 0}}return Ze(a)}
function Ze(a){a=a.F;return We(a,a[K]|0,Ye,void 0,!1)}
;function L(a,b,c){if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-67043329|(b&1023)<<16)}else{if(!Array.isArray(a))throw Error("narr");d=a[K]|0;8192&d||!(64&d)||2&d||af();if(d&1024)throw Error("farr");if(d&64)return d&16384||Pd(a,d|16384),a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(Ud(g)){d|=256;b=d&512?0:-1;f-=b;if(f>=1024)throw Error("pvtlmt");for(var h in g)e=+h,e<f&&(c[e+b]=g[h],delete g[h]);d=d&-67043329|(f&1023)<<16;break a}}if(b){h=
Math.max(b,e-(d&512?0:-1));if(h>1024)throw Error("spvt");d=d&-67043329|(h&1023)<<16}}}Pd(a,d|16384);return a}
function af(){if(Id!=null){var a;var b=(a=Cd)!=null?a:Cd={};a=b[Id]||0;a>=5||(b[Id]=a+1,b=Error(),Vb(b,"incident"),Rc(b))}}
;function bf(a,b){if(typeof a!=="object")return a;if(Array.isArray(a)){var c=a[K]|0;if(a.length===0&&c&1)return;if(c&2)return a;var d;if(d=b)d=c===0||!!(c&32)&&!(c&64||!(c&16));return d?(Qd(a,34),c&4&&Object.freeze(a),a):We(a,c,bf,b!==void 0,!0)}if(a[Jd]===Rd)return b=a.F,c=b[K]|0,Sd(a,c)?a:We(b,c,bf,!0,!0);if(a instanceof zd)return a}
function cf(a){var b=a.F,c=b[K]|0;if(!Sd(a,c))return a;a=new a.constructor(We(b,c,bf,!0,!0));b=a.F;b[K]&=-3;return a}
function df(a){if(a.h!==Td)return!1;var b=a.F;b=We(b,b[K]|0,bf,!0,!0);b[K]&=-3;a.F=b;a.h=void 0;return!0}
function ef(a){if(!df(a)&&Sd(a,a.F[K]|0))throw Error();}
;var ff=fe(0);function gf(a,b,c){Object.isExtensible(a);return hf(a.F,void 0,b,c)}
function hf(a,b,c,d){if(c===-1)return null;d=c+(d?0:-1);var e=a.length-1;if(d>=e&&(b!=null?b:a[K]|0)&256)a=a[e][c];else if(d<=e)a=a[d];else return;return a}
function jf(a,b,c,d){ef(a);var e=a.F;kf(e,e[K]|0,b,c,d);return a}
function kf(a,b,c,d,e){var f=c+(e?0:-1),g=a.length-1,h;if(f>=g&&((h=b)!=null?h:b=a[K]|0)&256)return a[g][c]=d,b;if(f<=g)return a[f]=d,b;d!==void 0&&(g=b>>16&1023||536870912,c>=g?d!=null&&(f={},a[g+(e?0:-1)]=(f[c]=d,f),b|=256,Pd(a,b)):a[f]=d);return b}
function lf(a){return!!(2&a)&&!!(4&a)||!!(1024&a)}
function mf(a,b,c){ef(a);var d=a.F,e=d[K]|0;if(b==null)return kf(d,e,3),a;if(!Array.isArray(b))throw Dd();var f=b[K]|0,g=f,h=lf(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=ue(b),g=0,f=nf(f,e),f=of(f,e,!0),k=!1);f|=21;h=4&f?2048&f?2048:4096&f?4096:0:void 0;h=h!=null?h:0;for(var l=0;l<b.length;l++){var m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=ue(b),g=0,f=nf(f,e),f=of(f,e,!0),k=!1),b[l]=n)}f!==g&&(k&&(b=ue(b),f=nf(f,e),f=of(f,e,!0)),Pd(b,f));kf(d,e,3,b);return a}
function pf(a,b,c,d){ef(a);a=a.F;var e=a[K]|0;if(d==null){var f=qf(a);if(rf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=qf(a);var g=rf(f,a,e,c);g!==b&&(g&&(e=kf(a,e,g)),f.set(c,b))}kf(a,e,b,d)}
function qf(a){if(Ed){var b;return(b=a[Hd])!=null?b:a[Hd]=new Map}if(Hd in a)return a[Hd];b=new Map;Object.defineProperty(a,Hd,{value:b});return b}
function rf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];hf(b,c,g)!=null&&(e!==0&&(c=kf(b,c,e)),e=g)}a.set(d,e);return e}
function sf(a,b,c,d,e){var f=hf(a,b,d,e);c=Te(f,c,b);c!==f&&c!=null&&(kf(a,b,d,c,e),Sd(c));return c}
function tf(a,b,c,d){var e=a.F,f=e[K]|0;b=sf(e,f,b,c,d);if(b==null)return b;f=e[K]|0;if(!Sd(a,f)){var g=cf(b);g!==b&&(df(a)&&(e=a.F,f=e[K]|0),b=g,kf(e,f,c,b,d))}return b}
function Bc(a,b,c){var d=void 0===Vd?2:4;var e=a.F,f=e;e=e[K]|0;var g=!1,h=Sd(a,e);d=h?1:d;g=!!g||d===3;var k=!h;(d===2||k)&&df(a)&&(f=a.F,e=f[K]|0);a=hf(f,e,c);a=Array.isArray(a)?a:Nd;var l=a[K]|0;h=!!(4&l);if(!h){var m=l;m===0&&(m=nf(m,e),m|=16);l=a;m|=1;var n=e,p=!!(2&m);p&&(n|=2);for(var t=!p,v=!0,x=0,A=0;x<l.length;x++){var G=Te(l[x],b,n);if(G instanceof b){if(!p){var I=Sd(G);t&&(t=!I);v&&(v=I)}l[A++]=G}}A<x&&(l.length=A);m|=4;m=v?m|16:m&-17;m=t?m|8:m&-9;Pd(l,m);p&&Object.freeze(l);l=m}if(k&&
!(8&l||!a.length&&(d===1||d===4&&32&l))){lf(l)&&(a=ue(a),l=nf(l,e),e=kf(f,e,c,a));b=a;k=l;for(l=0;l<b.length;l++)m=b[l],n=cf(m),m!==n&&(b[l]=n);k|=8;k=b.length?k&-17:k|16;Pd(b,k);l=k}d===1||d===4&&32&l?lf(l)||(c=l,f=!!(32&l),l|=!a.length||16&l&&(!h||f)?2:1024,l!==c&&Pd(a,l),Object.freeze(a)):(d===2&&lf(l)&&(a=ue(a),l=nf(l,e),l=of(l,e,g),Pd(a,l),e=kf(f,e,c,a)),lf(l)||(c=l,l=of(l,e,g),l!==c&&Pd(a,l)));return a}
function uf(a,b,c,d,e){d!=null?Se(d,b):d=void 0;jf(a,c,d,e);d&&Sd(d);return a}
function vf(a,b,c,d){ef(a);var e=a.F,f=e[K]|0;if(d==null)return kf(e,f,c),a;if(!Array.isArray(d))throw Dd();for(var g=d[K]|0,h=g,k=lf(g),l=k||Object.isFrozen(d),m=!0,n=!0,p=0;p<d.length;p++){var t=d[p];Se(t,b);k||(t=Sd(t),m&&(m=!t),n&&(n=t))}k||(g=m?13:5,g=n?g|16:g&-17);l&&g===h||(d=ue(d),h=0,g=nf(g,f),g=of(g,f,!0));g!==h&&Pd(d,g);kf(e,f,c,d);return a}
function nf(a,b){2&a&&(a|=16);a=(2&b?a|2:a&-3)|32;return a&=-1025}
function of(a,b,c){32&b&&c||(a&=-33);return a}
function Dc(a,b,c){c=c===void 0?0:c;var d;return(d=Fe(gf(a,b)))!=null?d:c}
function wf(a,b,c){c=c===void 0?ff:c;a=gf(a,b);b=typeof a;a=a==null?a:b==="bigint"?fe(ve(64,a)):Ce(a)?b==="string"?Je(a):Ke(a):void 0;return a!=null?a:c}
function xf(a,b,c,d){c=c===void 0?"":c;var e;return(e=Re(gf(a,b,d)))!=null?e:c}
function yf(a){var b=b===void 0?0:b;a=gf(a,1);a=a==null?a:xe(a)?a|0:void 0;return a!=null?a:b}
function zf(a,b,c){return jf(a,b,Qe(c))}
function Af(a,b,c){c=Qe(c);ef(a);a=a.F;kf(a,a[K]|0,b,c===""?void 0:c,Wd)}
function Bf(a,b,c){if(c!=null){if(!xe(c))throw Dd("enum");c|=0}return jf(a,b,c)}
;function M(a,b,c){this.F=L(a,b,c)}
M.prototype.toJSON=function(){return $e(this)};
M.prototype.serialize=function(a){return JSON.stringify($e(this,a))};
function Cf(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Qd(b,32);return new a(b)}
M.prototype.clone=function(){var a=this,b=a.F;a=new a.constructor(We(b,b[K]|0,bf,!0,!0));b=a.F;b[K]&=-3;return a};
M.prototype[Jd]=Rd;M.prototype.toString=function(){return this.F.toString()};function Df(){var a=Ef;this.ctor=Ff;this.isRepeated=0;this.h=tf;this.defaultValue=void 0;this.i=a.Ke!=null?Wd:void 0}
Df.prototype.register=function(){dd(this)};function Gf(a){return function(b){return Cf(a,b)}}
;function Hf(a){this.F=L(a)}
w(Hf,M);function If(a,b){return mf(a,b,De)}
;function Jf(a){this.F=L(a)}
w(Jf,M);var Kf=[1,2,3];function Lf(a){this.F=L(a)}
w(Lf,M);var Mf=[1,2,3];function Nf(a){this.F=L(a)}
w(Nf,M);function Of(a){this.F=L(a)}
w(Of,M);function Pf(a){this.F=L(a)}
w(Pf,M);function Qf(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Rf(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,t=0;t<64;t+=4)p[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=p[t-3]^p[t-8]^p[t-14]^p[t-16],p[t]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],x=e[2],A=e[3],G=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var I=A^v&(x^A);var Z=1518500249}else I=v^x^A,Z=1859775393;else t<60?(I=v&x|A&(v|x),Z=2400959708):(I=v^x^A,Z=3395469782);I=((n<<5|n>>>27)&4294967295)+I+G+Z+p[t]&4294967295;G=A;A=x;x=(v<<30|v>>>2)&4294967295;v=n;n=I}e[0]=e[0]+n&4294967295;e[1]=e[1]+v&4294967295;e[2]=
e[2]+x&4294967295;e[3]=e[3]+A&4294967295;e[4]=e[4]+G&4294967295}
function c(n,p){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],v=0,x=n.length;v<x;++v)t.push(n.charCodeAt(v));n=t}p||(p=n.length);t=0;if(l==0)for(;t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<p;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],p=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=p&255,p>>>=8;b(f);for(t=p=0;t<5;t++)for(var v=24;v>=0;v-=8)n[p++]=e[t]>>v&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ge:function(){for(var n=d(),p="",t=0;t<n.length;t++)p+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return p}}}
;function Sf(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,Tf(Qf(d),a,c||null)].join(" "):null}
function Tf(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Nb(d,function(h){e.push(h)}),Uf(e.join(" "));
var f=[],g=[];Nb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Nb(d,function(h){e.push(h)});
a=Uf(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Uf(a){var b=Rf();b.update(a);return b.ge().toLowerCase()}
;function Vf(a){this.h=a||{cookie:""}}
r=Vf.prototype;r.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Vb:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.af;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Vb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=db(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Vb:0,path:b,domain:c});return d};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=db(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var Wf=new Vf(typeof document=="undefined"?null:document);function Xf(){var a=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__1PSAPISID||D.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new Vf(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function Yf(a,b,c,d){(a=D[a])||typeof document==="undefined"||(a=(new Vf(document)).get(b));return a?Sf(a,c,d):null}
function Zf(a){var b=Qf(String(D.location.href)),c=[];if(Xf()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?D.__SAPISID:D.__APISID;d||typeof document==="undefined"||(d=new Vf(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?Sf(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=Yf("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=Yf("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function $f(){}
$f.prototype.compress=function(a){var b,c,d,e;return B(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
$f.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function ag(a){this.F=L(a)}
w(ag,M);function bg(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return $a()};
this.i=this.h()}
bg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
bg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
bg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
bg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function cg(a){this.F=L(a)}
w(cg,M);function dg(a){this.F=L(a)}
w(dg,M);function eg(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=eg.prototype;r.clone=function(){return new eg(this.x,this.y)};
r.equals=function(a){return a instanceof eg&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function fg(a,b){this.width=a;this.height=b}
r=fg.prototype;r.clone=function(){return new fg(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function gg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function hg(a){var b=ig,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function jg(a){for(var b in a)return!1;return!0}
function kg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function lg(a){return a!==null&&"privembed"in a?a.privembed:!1}
function mg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ng(a){var b={},c;for(c in a)b[c]=a[c];return b}
function og(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=og(a[c]);return b}
var pg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qg(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pg.length;f++)c=pg[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function rg(a,b){this.h=a===sg&&b||""}
rg.prototype.toString=function(){return this.h};
var sg={};new rg(sg,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function tg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function ug(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function vg(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function wg(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function xg(a){this.F=L(a)}
w(xg,M);xg.prototype.oc=function(){return yf(this)};function yg(a){this.F=L(a)}
w(yg,M);function zg(a){this.F=L(a)}
w(zg,M);function Ag(a,b){vf(a,yg,1,b)}
var Bg=Gf(zg);function Cg(a){this.F=L(a)}
w(Cg,M);var Dg=["platform","platformVersion","architecture","model","uaFullVersion"],Eg=new zg,Fg=null;function Gg(a,b){b=b===void 0?Dg:b;if(!Fg){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new yg;f=zf(f,1,e.brand);return zf(f,2,e.version)});
Ag(jf(Eg,2,Ae(a.mobile)),c);Fg=a.getHighEntropyValues(b)}var d=new Set(b);return Fg.then(function(e){var f=Eg.clone();d.has("platform")&&zf(f,3,e.platform);d.has("platformVersion")&&zf(f,4,e.platformVersion);d.has("architecture")&&zf(f,5,e.architecture);d.has("model")&&zf(f,6,e.model);d.has("uaFullVersion")&&zf(f,7,e.uaFullVersion);return f.serialize()}).catch(function(){return Eg.serialize()})}
;function Hg(a){this.F=L(a)}
w(Hg,M);function Ig(a){return Bf(a,1,1)}
;function Jg(a){this.F=L(a,4)}
w(Jg,M);function Kg(a){this.F=L(a,36)}
w(Kg,M);function Lg(a){this.F=L(a,19)}
w(Lg,M);Lg.prototype.Yb=function(a){return Bf(this,2,a)};function Mg(a,b){this.Wa=b=b===void 0?!1:b;this.j=this.locale=null;this.i=0;this.isFinal=!1;this.h=new Lg;Number.isInteger(a)&&this.h.Yb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Ng(this,new Hg)}
Mg.prototype.Yb=function(a){this.h.Yb(a);return this};
function Ng(a,b){uf(a.h,Hg,1,b);yf(b)||Ig(b);a.Wa||(b=Og(a),xf(b,5)||zf(b,5,a.locale));a.j&&(b=Og(a),tf(b,zg,9)||uf(b,zg,9,a.j))}
function Pg(a,b){a.i=b}
function Qg(a){var b=b===void 0?Dg:b;var c=a.Wa?void 0:window;c?Gg(c,b).then(function(d){a.j=Bg(d!=null?d:"[]");d=Og(a);uf(d,zg,9,a.j);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Og(a){a=tf(a.h,Hg,1);var b=tf(a,Cg,11);b||(b=new Cg,uf(a,Cg,11,b));return b}
function Rg(a,b,c,d,e,f,g){c=c===void 0?0:c;d=d===void 0?0:d;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;var h=tf(a.h,Hg,1).F;if(sf(h,h[K]|0,Cg,11)!==void 0){h=Og(a);var k=new xg;k=Bf(k,1,a.i);k=jf(k,2,Ae(a.isFinal));d=jf(k,3,Ee(d>0?d:void 0));d=jf(d,4,Ee(f>0?f:void 0));d=jf(d,5,Ee(g>0?g:void 0));f=d.F;g=f[K]|0;d=Sd(d,g)?d:new d.constructor(We(f,g,bf,!0,!0));uf(h,xg,10,d)}a=a.h.clone();h=Date.now().toString();a=jf(a,4,Me(h));b=b.slice();b=vf(a,Kg,3,b);e&&(a=new cg,e=jf(a,13,Ee(e)),a=new dg,
e=uf(a,cg,2,e),a=new Jg,e=uf(a,dg,1,e),e=Bf(e,2,9),uf(b,Jg,18,e));c&&jf(b,14,Me(c));return b}
;var Sg=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();function Tg(a){this.h=this.i=this.j=a}
Tg.prototype.reset=function(){this.h=this.i=this.j};
Tg.prototype.getValue=function(){return this.i};function Ef(a){this.F=L(a,8)}
w(Ef,M);var Ug=Gf(Ef);function Ff(a){this.F=L(a)}
w(Ff,M);var Vg=new Df;function Wg(a){H.call(this);var b=this;this.componentId="";this.h=[];this.Qa="";this.pageId=null;this.eb=this.ma=-1;this.G=this.experimentIds=null;this.D=this.o=0;this.U=null;this.Z=this.ha=0;this.Kb=1;this.timeoutMillis=0;this.xa=!1;this.logSource=a.logSource;this.ib=a.ib||function(){};
this.j=new Mg(a.logSource,a.Wa);this.network=a.network||null;this.ob=a.ob||null;this.bufferSize=1E3;this.P=a.yf||null;this.sessionIndex=a.sessionIndex||null;this.Qb=a.Qb||!1;this.logger=null;this.withCredentials=!a.qd;this.Wa=a.Wa||!1;this.Y=!this.Wa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Pa=typeof URLSearchParams!=="undefined"&&!!(new URL(Xg())).searchParams&&!!(new URL(Xg())).searchParams.set;var c=Ig(new Hg);Ng(this.j,c);this.u=new Tg(1E4);a=Yg(this,a.md);this.i=
new bg(this.u.getValue(),a);this.Fa=new bg(6E5,a);this.Qb||this.Fa.start();this.Wa||(document.addEventListener("visibilitychange",function(){if(document.visibilityState==="hidden"){Zg(b);var d;(d=b.U)==null||d.flush()}}),document.addEventListener("pagehide",function(){Zg(b);
var d;(d=b.U)==null||d.flush()}))}
w(Wg,H);function Yg(a,b){return a.Pa?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
Wg.prototype.ba=function(){Zg(this);this.i.stop();this.Fa.stop();H.prototype.ba.call(this)};
function $g(a){a.P||(a.P=Xg());try{return(new URL(a.P)).toString()}catch(b){return(new URL(a.P,window.location.origin)).toString()}}
function ah(a,b,c){a.U&&a.U.kb(b,c)}
Wg.prototype.log=function(a){ah(this,2,1);if(this.Pa){a=a.clone();var b=this.Kb++;a=jf(a,21,Me(b));this.componentId&&zf(a,26,this.componentId);b=a;var c=gf(b,1);var d=d===void 0?!1:d;var e=typeof c;d=c==null?c:e==="bigint"?String(ve(64,c)):Ce(c)?e==="string"?He(c):d?Ie(c):Le(c):void 0;d==null&&(d=Date.now(),d=Number.isFinite(d)?d.toString():"0",jf(b,1,Me(d)));d=gf(b,15);d!=null&&(typeof d==="bigint"?le(d)?d=Number(d):(d=ve(64,d),d=le(d)?Number(d):String(d)):d=Ce(d)?typeof d==="number"?Le(d):He(d):
void 0);d==null&&jf(b,15,Me((new Date).getTimezoneOffset()*60));this.experimentIds&&(d=this.experimentIds.clone(),uf(b,ag,16,d));ah(this,1,1);b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b,ah(this,3,b));this.h.push(a);this.Qb||this.i.enabled||this.i.start()}};
Wg.prototype.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.xa&&this.Y)this.j.i=3,bh(this);else{var d=Date.now();if(this.eb>d&&this.ma<d)b&&b("throttled");else{this.network&&(typeof this.network.oc==="function"?Pg(this.j,this.network.oc()):this.j.i=0);var e=this.h.length,f=Rg(this.j,this.h,this.o,this.D,this.ob,this.ha,this.Z),g=this.ib();if(g&&this.Qa===g)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=f.serialize();var h;this.G&&this.G.isSupported(d.length)&&
(h=this.G.compress(d));var k=ch(this,d,g),l=function(p){c.u.reset();c.i.setInterval(c.u.getValue());if(p){var t=null;try{var v=JSON.stringify(JSON.parse(p.replace(")]}'\n","")));t=Ug(v)}catch(x){}t&&(p=Number(wf(t,1,fe("-1"))),p>0&&(c.ma=Date.now(),c.eb=c.ma+p),t=Vg.ctor?Vg.h(t,Vg.ctor,175237375,Vg.i):Vg.h(t,175237375,null,Vg.i),t=t===null?void 0:t)&&(t=Dc(t,1,-1),t!==-1&&(c.u=new Tg(t<1?1:t),c.i.setInterval(c.u.getValue())))}a&&a();c.D=0},m=function(p,t){var v=Bc(f,Kg,3);
var x=Number(wf(f,14)),A=c.u;A.h=Math.min(3E5,A.h*2);A.i=Math.min(3E5,A.h+Math.round(.1*(Math.random()-.5)*2*A.h));c.i.setInterval(c.u.getValue());p===401&&g&&(c.Qa=g);x&&(c.o+=x);t===void 0&&(t=c.isRetryable(p));t&&(c.h=v.concat(c.h),c.Qb||c.i.enabled||c.i.start());ah(c,7,1);b&&b("net-send-failed",p);++c.D},n=function(){c.network&&c.network.send(k,l,m)};
h?h.then(function(p){ah(c,5,e);k.Cc["Content-Encoding"]="gzip";k.Cc["Content-Type"]="application/binary";k.body=p;k.ae=2;n()},function(){ah(c,6,e);
n()}):n()}}}};
function ch(a,b,c){c=c===void 0?a.ib():c;var d=d===void 0?a.withCredentials:d;var e={},f=new URL($g(a));c&&(e.Authorization=c);a.sessionIndex&&(e["X-Goog-AuthUser"]=a.sessionIndex,f.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(e,"X-Goog-PageId",{value:a.pageId}),f.searchParams.set("pageId",a.pageId));return{url:f.toString(),body:b,ae:1,Cc:e,requestType:"POST",withCredentials:d,timeoutMillis:a.timeoutMillis}}
function Zg(a){a.j.isFinal=!0;a.flush();a.j.isFinal=!1}
function bh(a){dh(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.Y=!1);return d})}
function dh(a,b){if(a.h.length!==0){var c=new URL($g(a));c.searchParams.delete("format");var d=a.ib();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=Rg(a.j,e,a.o,a.D,a.ob,a.ha,a.Z);if(!b(c.toString(),f)){++a.D;break}a.o=0;a.D=0;a.ha=0;a.Z=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
Wg.prototype.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function Xg(){return"https://play.google.com/log?format=json&hasfast=true"}
;function eh(){this.Ud=typeof AbortController!=="undefined"}
eh.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,p,t;return B(function(v){switch(v.h){case 1:return f=(e=d.Ud?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,wa(v,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.Cc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),v.yield(fetch(a.url,g),5);case 5:h=v.i;if(h.status!==200){(k=c)==null||k(h.status);v.A(3);break}if((l=b)==null){v.A(7);break}return v.yield(h.text(),8);case 8:l(v.i);case 7:case 3:v.P=[v.j];v.M=0;v.o=0;clearTimeout(f);za(v);break;case 2:m=ya(v);switch((n=m)==null?void 0:n.name){case "AbortError":(p=c)==null||p(408);break;default:(t=c)==null||t(400)}v.A(3)}})};
eh.prototype.oc=function(){return 4};function fh(a,b){H.call(this);this.logSource=a;this.sessionIndex=b;this.Ua="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.h=this.ob=null;this.j=!1;this.pageId=null;this.bufferSize=void 0}
w(fh,H);function gh(a,b){a.i=b;return a}
function hh(a,b){a.network=b;return a}
function ih(a,b){a.h=b}
function kh(a){a.j=!0;return a}
fh.prototype.qd=function(){this.u=!0;return this};
function lh(a){a.network||(a.network=new eh);var b=new Wg({logSource:a.logSource,ib:a.ib?a.ib:Zf,sessionIndex:a.sessionIndex,yf:a.Ua,Wa:a.o,Qb:!1,qd:a.u,md:a.md,network:a.network});vc(a,b);if(a.i){var c=a.i,d=Og(b.j);zf(d,7,c)}b.G=new $f;a.componentId&&(b.componentId=a.componentId);a.ob&&(b.ob=a.ob);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new ag),c=b.experimentIds,d=d.serialize(),zf(c,4,d)):b.experimentIds&&jf(b.experimentIds,4));a.j&&(b.xa=b.Y);Qg(b.j);a.bufferSize&&
(b.bufferSize=a.bufferSize);a.network.Yb&&a.network.Yb(a.logSource);a.network.mf&&a.network.mf(b);return b}
;function mh(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;H.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new fh(a,"0"),a.componentId=b,vc(this,a),c!==""&&(a.Ua=c),d&&(a.o=!0),e&&gh(a,e),g&&hh(a,g),b=lh(a));this.h=b}
w(mh,H);
mh.prototype.flush=function(a){var b=a||[];if(b.length){a=new Pf;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new Of;f=zf(f,1,e.i);var g=nh(e);f=mf(f,g,Pe);g=[];var h=[];for(var k=y(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.Lc(l)||[],p=[],t=0;t<n.length;t++){var v=n[t],x=v&&v.h;v=new Lf;switch(m){case 3:x=Number(x);Number.isFinite(x)&&pf(v,1,Mf,Me(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);pf(v,2,Mf,x)}p.push(v)}m=p;for(n=0;n<m.length;n++){p=m[n];t=new Nf;p=uf(t,Lf,2,p);t=l;v=[];x=oh(e);for(var A=0;A<x.length;A++){var G=x[A],I=t[A],Z=new Jf;switch(G){case 3:pf(Z,1,Kf,Qe(String(I)));break;case 2:G=Number(I);Number.isFinite(G)&&pf(Z,2,Kf,Ee(G));break;case 1:pf(Z,3,Kf,Ae(I==="true"))}v.push(Z)}vf(p,Jf,1,v);g.push(p)}}vf(f,Nf,4,g);c.push(f);e.clear()}vf(a,Of,1,c);b=this.h;if(a instanceof Kg)b.log(a);else try{var ca=new Kg,Pa=a.serialize();var Rb=zf(ca,8,Pa);b.log(Rb)}catch(Ya){ah(b,
4,1)}this.h.flush()}};function ph(a){this.h=a}
;function qh(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function oh(a){return a.fields.map(function(b){return b.fieldType})}
function nh(a){return a.fields.map(function(b){return b.fieldName})}
r=qh.prototype;r.Vd=function(a){var b=C.apply(1,arguments),c=this.Lc(b);c?c.push(new ph(a)):this.Id(a,b)};
r.Id=function(a){var b=this.ld(C.apply(1,arguments));this.h.set(b,[new ph(a)])};
r.Lc=function(){var a=this.ld(C.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
r.te=function(){var a=this.Lc(C.apply(0,arguments));return a&&a.length?a[0]:void 0};
r.clear=function(){this.h.clear()};
r.ld=function(){var a=C.apply(0,arguments);return a?a.join(","):"key"};function rh(a,b){qh.call(this,a,3,b)}
w(rh,qh);rh.prototype.j=function(a){var b=C.apply(1,arguments),c=0,d=this.te(b);d&&(c=d.h);this.Id(c+a,b)};function sh(a,b){qh.call(this,a,2,b)}
w(sh,qh);sh.prototype.record=function(a){this.Vd(a,C.apply(1,arguments))};function th(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
th.prototype.stopPropagation=function(){this.j=!0};
th.prototype.preventDefault=function(){this.defaultPrevented=!0};function uh(a,b){th.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
ab(uh,th);
uh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&uh.Aa.preventDefault.call(this)};
uh.prototype.stopPropagation=function(){uh.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
uh.prototype.preventDefault=function(){uh.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var vh="closure_listenable_"+(Math.random()*1E6|0);var wh=0;function xh(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.qc=e;this.key=++wh;this.Xb=this.hc=!1}
function yh(a){a.Xb=!0;a.listener=null;a.proxy=null;a.src=null;a.qc=null}
;function zh(a){this.src=a;this.listeners={};this.h=0}
zh.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Ah(a,b,d,e);g>-1?(b=a[g],c||(b.hc=!1)):(b=new xh(b,this.src,f,!!d,e),b.hc=c,a.push(b));return b};
zh.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ah(e,b,c,d);return b>-1?(yh(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Bh(a,b){var c=b.type;c in a.listeners&&Tb(a.listeners[c],b)&&(yh(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Ah(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Xb&&f.listener==b&&f.capture==!!c&&f.qc==d)return e}return-1}
;var Ch="closure_lm_"+(Math.random()*1E6|0),Dh={},Eh=0;function Fh(a,b,c,d,e){if(d&&d.once)Gh(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Fh(a,b[f],c,d,e);else c=Hh(c),a&&a[vh]?a.listen(b,c,Oa(d)?!!d.capture:!!d,e):Ih(a,b,c,!1,d,e)}
function Ih(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=Jh(a);h||(a[Ch]=h=new zh(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Kh();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Sg||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Lh(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Eh++}}
function Kh(){function a(c){return b.call(a.src,a.listener,c)}
var b=Mh;return a}
function Gh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Gh(a,b[f],c,d,e);else c=Hh(c),a&&a[vh]?Nh(a,b,c,Oa(d)?!!d.capture:!!d,e):Ih(a,b,c,!0,d,e)}
function Oh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Oh(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=Hh(c),a&&a[vh])?a.i.remove(String(b),c,d,e):a&&(a=Jh(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ah(b,c,d,e)),(c=a>-1?b[a]:null)&&Ph(c))}
function Ph(a){if(typeof a!=="number"&&a&&!a.Xb){var b=a.src;if(b&&b[vh])Bh(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Lh(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Eh--;(c=Jh(b))?(Bh(c,a),c.h==0&&(c.src=null,b[Ch]=null)):yh(a)}}}
function Lh(a){return a in Dh?Dh[a]:Dh[a]="on"+a}
function Mh(a,b){if(a.Xb)a=!0;else{b=new uh(b,this);var c=a.listener,d=a.qc||a.src;a.hc&&Ph(a);a=c.call(d,b)}return a}
function Jh(a){a=a[Ch];return a instanceof zh?a:null}
var Qh="__closure_events_fn_"+(Math.random()*1E9>>>0);function Hh(a){if(typeof a==="function")return a;a[Qh]||(a[Qh]=function(b){return a.handleEvent(b)});
return a[Qh]}
;function Rh(){H.call(this);this.i=new zh(this);this.xa=this;this.Z=null}
ab(Rh,H);Rh.prototype[vh]=!0;r=Rh.prototype;r.addEventListener=function(a,b,c,d){Fh(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){Oh(this,a,b,c,d)};
function Sh(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.xa;c=b.type||b;typeof b==="string"?b=new th(b,a):b instanceof th?b.target=b.target||a:(e=b,b=new th(c,a),qg(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=Th(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Th(g,c,!0,b)&&e,b.j||(e=Th(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Th(g,c,!1,b)&&e}
r.ba=function(){Rh.Aa.ba.call(this);this.removeAllListeners();this.Z=null};
r.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Nh(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
r.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,yh(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function Th(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Xb&&g.capture==c){var h=g.listener,k=g.qc||g.src;g.hc&&Bh(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var Uh=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function Vh(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
Vh.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Wh(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function Xh(){this.i=this.h=null}
Xh.prototype.add=function(a,b){var c=Yh.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Xh.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Yh=new Vh(function(){return new Zh},function(a){return a.reset()});
function Zh(){this.next=this.scope=this.h=null}
Zh.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Zh.prototype.reset=function(){this.next=this.scope=this.h=null};var $h,ai=!1,bi=new Xh;function ci(a,b){$h||di();ai||($h(),ai=!0);bi.add(a,b)}
function di(){var a=Promise.resolve(void 0);$h=function(){a.then(ei)}}
function ei(){for(var a;a=bi.remove();){try{a.h.call(a.scope)}catch(b){Rc(b)}Wh(Yh,a)}ai=!1}
;function fi(){}
function gi(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function hi(a){this.X=0;this.ab=void 0;this.vb=this.Sa=this.parent_=null;this.pc=this.Kc=!1;if(a!=fi)try{var b=this;a.call(void 0,function(c){ii(b,2,c)},function(c){ii(b,3,c)})}catch(c){ii(this,3,c)}}
function ji(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
ji.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var ki=new Vh(function(){return new ji},function(a){a.reset()});
function li(a,b,c){var d=ki.get();d.i=a;d.h=b;d.context=c;return d}
function mi(a){return new hi(function(b,c){c(a)})}
hi.prototype.then=function(a,b,c){return ni(this,Uh(typeof a==="function"?a:null),Uh(typeof b==="function"?b:null),c)};
hi.prototype.$goog_Thenable=!0;function oi(a,b,c,d){pi(a,li(b||fi,c||null,d))}
r=hi.prototype;r.finally=function(a){var b=this;a=Uh(a);return new Promise(function(c,d){oi(b,function(e){a();c(e)},function(e){a();
d(e)})})};
r.Ec=function(a,b){return ni(this,null,Uh(a),b)};
r.catch=hi.prototype.Ec;r.cancel=function(a){if(this.X==0){var b=new qi(a);ci(function(){ri(this,b)},this)}};
function ri(a,b){if(a.X==0)if(a.parent_){var c=a.parent_;if(c.Sa){for(var d=0,e=null,f=null,g=c.Sa;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.X==0&&d==1?ri(c,b):(f?(d=f,d.next==c.vb&&(c.vb=d),d.next=d.next.next):si(c),ti(c,e,3,b)))}a.parent_=null}else ii(a,3,b)}
function pi(a,b){a.Sa||a.X!=2&&a.X!=3||ui(a);a.vb?a.vb.next=b:a.Sa=b;a.vb=b}
function ni(a,b,c,d){var e=li(null,null,null);e.child=new hi(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof qi?g(h):f(k)}catch(l){g(l)}}:g});
e.child.parent_=a;pi(a,e);return e.child}
r.wf=function(a){this.X=0;ii(this,2,a)};
r.xf=function(a){this.X=0;ii(this,3,a)};
function ii(a,b,c){if(a.X==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.X=1;a:{var d=c,e=a.wf,f=a.xf;if(d instanceof hi){oi(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Oa(d))try{var k=d.then;if(typeof k==="function"){vi(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.ab=c,a.X=b,a.parent_=null,ui(a),b!=3||c instanceof qi||wi(a,c))}}
function vi(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ui(a){a.Kc||(a.Kc=!0,ci(a.oe,a))}
function si(a){var b=null;a.Sa&&(b=a.Sa,a.Sa=b.next,b.next=null);a.Sa||(a.vb=null);return b}
r.oe=function(){for(var a;a=si(this);)ti(this,a,this.X,this.ab);this.Kc=!1};
function ti(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.pc;a=a.parent_)a.pc=!1;if(b.child)b.child.parent_=null,xi(b,c,d);else try{b.j?b.i.call(b.context):xi(b,c,d)}catch(e){yi.call(null,e)}Wh(ki,b)}
function xi(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function wi(a,b){a.pc=!0;ci(function(){a.pc&&yi.call(null,b)})}
var yi=Rc;function qi(a){bb.call(this,a)}
ab(qi,bb);qi.prototype.name="cancel";function zi(a,b){Rh.call(this);this.j=a||1;this.h=b||D;this.o=Wa(this.sf,this);this.u=$a()}
ab(zi,Rh);r=zi.prototype;r.enabled=!1;r.Ea=null;r.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
r.sf=function(){if(this.enabled){var a=$a()-this.u;a>0&&a<this.j*.8?this.Ea=this.h.setTimeout(this.o,this.j-a):(this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null),Sh(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.h.setTimeout(this.o,this.j),this.u=$a())};
r.stop=function(){this.enabled=!1;this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null)};
r.ba=function(){zi.Aa.ba.call(this);this.stop();delete this.h};function Ai(a){H.call(this);this.G=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.D=new Set;this.flushInterval=3E4;this.h=new zi(this.flushInterval);this.h.listen("tick",this.ac,!1,this);vc(this,this.h)}
w(Ai,H);r=Ai.prototype;r.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Bi(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.ac()}
r.ac=function(){var a=this.i.values();a=[].concat(z(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);Ci(a);this.j=0;this.h.enabled&&this.h.stop()};
r.Mb=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new rh(a,b))};
r.Hc=function(a){var b=C.apply(1,arguments);this.i.has(a)||this.i.set(a,new sh(a,b))};
function Di(a,b){return a.D.has(b)?void 0:a.i.get(b)}
r.Jb=function(a){this.Td(a,1,C.apply(1,arguments))};
r.Td=function(a,b){var c=C.apply(2,arguments),d=Di(this,a);d&&d instanceof rh&&(d.j(b,c),Bi(this))};
r.record=function(a,b){var c=C.apply(2,arguments),d=Di(this,a);d&&d instanceof sh&&(d.record(b,c),Bi(this))};
function Ci(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Ei(){}
Ei.prototype.serialize=function(a){var b=[];Fi(this,a,b);return b.join("")};
function Fi(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Fi(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Gi(d,c),c.push(":"),Fi(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Gi(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Hi={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Ii=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Gi(a,b){b.push('"',a.replace(Ii,function(c){var d=Hi[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Hi[c]=d);return d}),'"')}
;function Ji(){Rh.call(this);this.headers=new Map;this.h=!1;this.J=null;this.o=this.Y="";this.j=this.U=this.D=this.P=!1;this.G=0;this.u=null;this.ma="";this.ha=!1}
ab(Ji,Rh);var Ki=/^https?$/i,Li=["POST","PUT"],Mi=[];function Ni(a,b,c,d,e,f,g){var h=new Ji;Mi.push(h);b&&h.listen("complete",b);Nh(h,"ready",h.ce);f&&(h.G=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
r=Ji.prototype;r.ce=function(){this.dispose();Tb(Mi,this)};
r.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.o="";this.P=!1;this.h=!0;this.J=new XMLHttpRequest;this.J.onreadystatechange=Uh(Wa(this.Bd,this));try{this.getStatus(),this.U=!0,this.J.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();Oi(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=y(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=D.FormData&&a instanceof D.FormData;!(Mb(Li,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=y(c);for(d=b.next();!d.done;d=b.next())c=y(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.ma&&(this.J.responseType=this.ma);"withCredentials"in this.J&&this.J.withCredentials!==this.ha&&(this.J.withCredentials=this.ha);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.uf.bind(this),this.G)),
this.getStatus(),this.D=!0,this.J.send(a),this.D=!1}catch(g){this.getStatus(),Oi(this,g)}};
r.uf=function(){typeof Ka!="undefined"&&this.J&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),Sh(this,"timeout"),this.abort(8))};
function Oi(a,b){a.h=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.o=b;Pi(a);Qi(a)}
function Pi(a){a.P||(a.P=!0,Sh(a,"complete"),Sh(a,"error"))}
r.abort=function(){this.J&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.J.abort(),this.j=!1,Sh(this,"complete"),Sh(this,"abort"),Qi(this))};
r.ba=function(){this.J&&(this.h&&(this.h=!1,this.j=!0,this.J.abort(),this.j=!1),Qi(this,!0));Ji.Aa.ba.call(this)};
r.Bd=function(){this.ea||(this.U||this.D||this.j?Ri(this):this.Me())};
r.Me=function(){Ri(this)};
function Ri(a){if(a.h&&typeof Ka!="undefined")if(a.D&&(a.J?a.J.readyState:0)==4)setTimeout(a.Bd.bind(a),0);else if(Sh(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(Si(a))Sh(a,"complete"),Sh(a,"success");else{try{var b=(a.J?a.J.readyState:0)>2?a.J.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Pi(a)}}finally{Qi(a)}}}
function Qi(a,b){if(a.J){a.u&&(clearTimeout(a.u),a.u=null);var c=a.J;a.J=null;b||Sh(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
r.isActive=function(){return!!this.J};
r.isComplete=function(){return(this.J?this.J.readyState:0)==4};
function Si(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=String(a.Y).match(ac)[1]||null,!a&&D.self&&D.self.location&&(a=D.self.location.protocol.slice(0,-1)),b=!Ki.test(a?a.toLowerCase():"");c=b}return c}
r.getStatus=function(){try{return(this.J?this.J.readyState:0)>2?this.J.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function Ti(){}
Ti.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Ni(a.url,function(d){d=d.target;if(Si(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Cc,a.timeoutMillis,a.withCredentials)};
Ti.prototype.oc=function(){return 1};function Ui(a,b){this.logger=a;this.event=b;this.startTime=Vi()}
Ui.prototype.done=function(){this.logger.Ub(this.event,Vi()-this.startTime)};
function Wi(){Gc.apply(this,arguments)}
w(Wi,Gc);function Xi(a,b){var c=Vi();b=b();a.Ub("n",Vi()-c);return b}
function Yi(){Wi.apply(this,arguments)}
w(Yi,Wi);r=Yi.prototype;r.Pc=function(){};
r.Cb=function(){};
r.Ub=function(){};
r.Ha=function(){};
r.Bc=function(){};
r.Nd=function(){};
function Zi(a){return{qf:new Jc(a),errorCount:new Nc(a),eventCount:new Lc(a),ne:new Mc(a),ci:new Kc(a),fi:new Oc(a),vh:new Pc(a),di:new Qc(a)}}
function $i(a,b,c,d){a=kh(hh(gh(new fh(1828,"0"),a),new Ti));b.length&&ih(a,If(new Hf,b));d!==void 0&&(a.Ua=d);var e=new mh(1828,"","",!1,"",lh(a));vc(e,a);var f=new Ai({flush:function(g){try{e.flush(g)}catch(h){c(h)}}});
f.addOnDisposeCallback(function(){setTimeout(function(){try{f.ac()}finally{e.dispose()}})});
f.o=1E5;f.flushInterval=3E4;f.h.setInterval(3E4);return f}
function aj(a,b){H.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
w(aj,H);function bj(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-Vi());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=Vi(),a.timer=void 0}},b)}}
function cj(a,b){Wi.call(this);this.metrics=a;this.Da=b}
w(cj,Wi);cj.prototype.Pc=function(a){this.metrics.qf.record(a,this.Da)};
cj.prototype.Cb=function(a){this.metrics.eventCount.kb(a,this.Da)};
cj.prototype.Ub=function(a,b){this.metrics.ne.record(b,a,this.Da)};
cj.prototype.Ha=function(a){this.metrics.errorCount.kb(a,this.Da)};
function dj(a,b){b=b===void 0?[]:b;var c={Da:a.Da||"_",nc:a.nc||[],vc:a.vc|0,Ua:a.Ua,wc:a.wc||function(){},
Ib:a.Ib||function(e,f){return $i(e,f,c.wc,c.Ua)}};
b=c.Ib("49",c.nc.concat(b));cj.call(this,Zi(b),c.Da);var d=this;this.options=c;this.service=b;this.i=!a.Ib;this.h=new aj(function(){return void d.service.ac()},c.vc);
this.addOnDisposeCallback(function(){d.h.dispose();d.i&&d.service.dispose()})}
w(dj,cj);dj.prototype.Nd=function(a){var b=this;this.h.dispose();this.i&&this.service.dispose();this.service=this.options.Ib("49",this.options.nc.concat(a));this.h=new aj(function(){return void b.service.ac()},this.options.vc);
this.metrics=Zi(this.service)};
dj.prototype.Bc=function(){bj(this.h)};
function Vi(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function ej(a){this.F=L(a)}
w(ej,M);function fj(a){this.F=L(a)}
w(fj,M);function gj(a){this.F=L(a,0,"bfkj")}
w(gj,M);var hj=function(a){return Yd(function(b){return b instanceof a&&!Sd(b)})}(gj);
gj.Ke="bfkj";function Cc(a){this.F=L(a)}
w(Cc,M);function ij(a){this.F=L(a)}
w(ij,M);var jj=Gf(ij);function kj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function lj(a,b,c){if(a.disable)return new Yi;b=b?Ac(b):[];if(c)return c.Nd(b),c.share();a={Da:a.Da,nc:a.Ch,vc:a.Nh,Ua:a.Ua,wc:a.wc,Ib:a.Ib};c=b;c=c===void 0?[]:c;return new dj(a,c)}
function mj(a){function b(v,x,A,G){Promise.resolve().then(function(){k.done();h.Bc();h.dispose();g.resolve({Xd:v,pf:x,Qe:A,xh:G})})}
function c(v,x,A,G){if(!d.logger.ea){var I="k";x?I="h":A&&(I="u");I!=="k"?G!==0&&(d.logger.Cb(I),d.logger.Ub(I,v)):d.i<=0?(d.logger.Cb(I),d.logger.Ub(I,v),d.i=Math.floor(Math.random()*200)):d.i--}}
H.call(this);var d=this;this.i=Math.floor(Math.random()*200);this.h=new ij;if("challenge"in a&&hj(a.challenge)){var e=xf(a.challenge,4,void 0,Wd);var f=xf(a.challenge,5,void 0,Wd);xf(a.challenge,7,void 0,Wd)&&(this.h=jj(xf(a.challenge,7,void 0,Wd)))}else e=a.program,f=a.globalName;this.addOnDisposeCallback(function(){var v,x,A;return B(function(G){if(G.h==1)return G.yield(d.j,2);v=G.i;x=v.pf;(A=x)==null||A();G.h=0})});
this.logger=lj(a.zd||{},this.h,a.yh);vc(this,this.logger);var g=new kj;this.j=g.promise;this.logger.Cb("t");var h=this.logger.share(),k=new Ui(h,"t");if(!D[f])throw this.logger.Ha(25),Error("EGOU");if(!D[f].a)throw this.logger.Ha(26),Error("ELIU");try{var l=D[f].a;f=[];for(var m=[],n=Ac(this.h),p=0;p<n.length;p++)f.push(n[p]),m.push(1);var t=Ec(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2);this.u=y(l(e,b,!0,a.bi,c,[f,m],xf(this.h,5))).next().value;this.Zc=g.promise.then(function(){})}catch(v){throw this.logger.Ha(28),
v;
}}
w(mj,H);mj.prototype.snapshot=function(a){if(this.ea)throw Error("Already disposed");this.logger.Cb("n");var b=this.logger.share();return this.j.then(function(c){var d=c.Xd;return new Promise(function(e){var f=new Ui(b,"n");d(function(g){f.done();b.Pc(g.length);b.Bc();b.dispose();e(g)},[a.wb,
a.cd,a.Af,a.dd])})})};
mj.prototype.ed=function(a){var b=this;if(this.ea)throw Error("Already disposed");this.logger.Cb("n");var c=Xi(this.logger,function(){return b.u([a.wb,a.cd,a.Af,a.dd])});
this.logger.Pc(c.length);this.logger.Bc();return c};
mj.prototype.o=function(a){this.j.then(function(b){var c;(c=b.Qe)==null||c(a)})};function nj(a){if(!a)return null;a=Re(gf(a,4));return a===null||a===void 0?null:jb(a)}
;function oj(){this.promises={};this.h=null}
function pj(){oj.instance||(oj.instance=new oj);return oj.instance}
function qj(a,b){return rj(a,tf(b,ej,1,Wd),tf(b,fj,2,Wd),xf(b,3,void 0,Wd))}
function rj(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return sj(b,c);var e;(e=a.promises)[d]||(e[d]=new Promise(function(f,g){sj(b,c).then(function(){a.h=d;f()},function(h){delete a.promises[d];
g(h)})}));
return a.promises[d]}
function sj(a,b){return b?tj(b):a?uj(a):Promise.resolve()}
function tj(a){return new Promise(function(b,c){var d=ug("SCRIPT"),e=nj(a);Gb(d,e);d.onload=function(){vg(d);b()};
d.onerror=function(){vg(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function uj(a){return new Promise(function(b){var c=ug("SCRIPT");if(a){var d=Re(gf(a,6));d=d===null||d===void 0?null:Db(d)}else d=null;c.textContent=Eb(d);Fb(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);vg(c);b()})}
;var vj=window;function wj(a){var b=xj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function yj(){var a=[];wj(function(b){a.push(b)});
return a}
var xj={Bf:"allow-forms",Cf:"allow-modals",Df:"allow-orientation-lock",Ef:"allow-pointer-lock",Ff:"allow-popups",Gf:"allow-popups-to-escape-sandbox",Hf:"allow-presentation",If:"allow-same-origin",Jf:"allow-scripts",Kf:"allow-top-navigation",Lf:"allow-top-navigation-by-user-activation"},zj=gi(function(){return yj()});
function Aj(){var a=Bj(),b={};Nb(zj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Bj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Cj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Dj=(new Date).getTime();function Ej(a){Rh.call(this);var b=this;this.D=this.j=0;this.Ca=a!=null?a:{pa:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.h=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return e.yield(Fj(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.D||Gj(this)}
w(Ej,Rh);function Hj(){var a=Ij;Ej.instance||(Ej.instance=new Ej(a));return Ej.instance}
Ej.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ca.qa(this.D);delete Ej.instance};
Ej.prototype.ta=function(){return this.h};
function Gj(a){a.D=a.Ca.pa(function(){var b;return B(function(c){if(c.h==1)return a.h?((b=window.navigator)==null?0:b.onLine)?c.A(3):c.yield(Fj(a),3):c.yield(Fj(a),3);Gj(a);c.h=0})},3E4)}
function Fj(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.j=a.Ca.pa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.P=[h.j];h.M=0;h.o=0;a.u=void 0;a.j&&(a.Ca.qa(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?Sh(a,"networkstatus-online"):Sh(a,"networkstatus-offline"));c(g);za(h);break;case 2:ya(h),g=!1,h.A(3)}})})}
;function Jj(){this.data=[];this.h=-1}
Jj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Jj.prototype.get=function(a){return!!this.data[a]};
function Kj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Lj(){this.blockSize=-1}
;function Mj(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.M=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
ab(Mj,Lj);Mj.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function Nj(a,b,c){c||(c=0);var d=a.M;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
Mj.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)Nj(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Nj(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Nj(this,e);f=0;break}}this.i=f;this.o+=b}};
Mj.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;Nj(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Oj(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Pj(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Qj(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Oj(a).match(/\S+/g)||[],b=Mb(a,b)>=0);return b}
function Rj(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Qj(a,"inverted-hdpi")&&Pj(a,Array.prototype.filter.call(a.classList?a.classList:Oj(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function Sj(){}
Sj.prototype.next=function(){return Tj};
var Tj={done:!0,value:void 0};function Uj(a){return{value:a,done:!1}}
Sj.prototype.tb=function(){return this};function Vj(a){if(a instanceof Wj||a instanceof Xj||a instanceof Yj)return a;if(typeof a.next=="function")return new Wj(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Wj(function(){return a[Symbol.iterator]()});
if(typeof a.tb=="function")return new Wj(function(){return a.tb()});
throw Error("Not an iterator or iterable.");}
function Wj(a){this.h=a}
Wj.prototype.tb=function(){return new Xj(this.h())};
Wj.prototype[Symbol.iterator]=function(){return new Yj(this.h())};
Wj.prototype.i=function(){return new Yj(this.h())};
function Xj(a){this.h=a}
w(Xj,Sj);Xj.prototype.next=function(){return this.h.next()};
Xj.prototype[Symbol.iterator]=function(){return new Yj(this.h)};
Xj.prototype.i=function(){return new Yj(this.h)};
function Yj(a){Wj.call(this,function(){return a});
this.j=a}
w(Yj,Wj);Yj.prototype.next=function(){return this.j.next()};function N(a){H.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.D=!!a}
ab(N,H);r=N.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.dc(a)}return!1};
r.dc=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Tb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.sb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.D)for(f=0;f<c.length;f++)e=c[f],Zj(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.ea;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.dc(c)}}return f!=0}return!1};
function Zj(a,b,c){ci(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.dc,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.ba=function(){N.Aa.ba.call(this);this.clear();this.j.length=0};function ak(a){this.h=a}
ak.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Ei).serialize(b))};
ak.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
ak.prototype.remove=function(a){this.h.remove(a)};function bk(a){this.h=a}
ab(bk,ak);function ck(a){this.data=a}
function dk(a){return a===void 0||a instanceof ck?a:new ck(a)}
bk.prototype.set=function(a,b){bk.Aa.set.call(this,a,dk(b))};
bk.prototype.i=function(a){a=bk.Aa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
bk.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ek(a){this.h=a}
ab(ek,bk);ek.prototype.set=function(a,b,c){if(b=dk(b)){if(c){if(c<$a()){ek.prototype.remove.call(this,a);return}b.expiration=c}b.creation=$a()}ek.Aa.set.call(this,a,b)};
ek.prototype.i=function(a){var b=ek.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<$a()||c&&c>$a())ek.prototype.remove.call(this,a);else return b}};function fk(){}
;function gk(){}
ab(gk,fk);gk.prototype[Symbol.iterator]=function(){return Vj(this.tb(!0)).i()};
gk.prototype.clear=function(){var a=Array.from(this);a=y(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function hk(a){this.h=a;this.i=null}
ab(hk,gk);r=hk.prototype;r.isAvailable=function(){if(!Tc||this.i===null){var a=this.h;if(a)try{performance.now();a.setItem("__sak","1");a.removeItem("__sak");performance.now();var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;this.i=b}return this.i};
r.set=function(a,b){ik(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){ik(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){ik(this);this.h.removeItem(a)};
r.tb=function(a){ik(this);var b=0,c=this.h,d=new Sj;d.next=function(){if(b>=c.length)return Tj;var e=c.key(b++);if(a)return Uj(e);e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return Uj(e)};
return d};
r.clear=function(){ik(this);this.h.clear()};
r.key=function(a){ik(this);return this.h.key(a)};
function ik(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;(Tc?a.isAvailable():(b=a.i)!=null?b:a.isAvailable())||Rc(Error("Storage mechanism: Storage unavailable"))}
;function jk(){var a=null;try{a=D.localStorage||null}catch(b){}hk.call(this,a)}
ab(jk,hk);function kk(a,b){this.i=a;this.h=b+"::"}
ab(kk,gk);kk.prototype.set=function(a,b){this.i.set(this.h+a,b)};
kk.prototype.get=function(a){return this.i.get(this.h+a)};
kk.prototype.remove=function(a){this.i.remove(this.h+a)};
kk.prototype.tb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Sj;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Uj(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},lk=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.bd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var mk={ub:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
sd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},nk={ub:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
sd:function(a){return[].concat.apply([],a)}};
O.nf=function(){lk?(O.rb=Uint8Array,O.Ja=Uint16Array,O.Sd=Int32Array,O.assign(O,mk)):(O.rb=Array,O.Ja=Array,O.Sd=Array,O.assign(O,nk))};
O.nf();var ok=!0;try{new Uint8Array(1)}catch(a){ok=!1}
function pk(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new O.rb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var qk={};qk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var rk={},sk,tk=[],uk=0;uk<256;uk++){sk=uk;for(var vk=0;vk<8;vk++)sk=sk&1?3988292384^sk>>>1:sk>>>1;tk[uk]=sk}rk=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^tk[(a^b[d])&255];return a^-1};var wk={};wk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function xk(a){for(var b=a.length;--b>=0;)a[b]=0}
var yk=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],zk=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Ak=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Bk=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Ck=Array(576);xk(Ck);var Dk=Array(60);xk(Dk);var Ek=Array(512);xk(Ek);var Fk=Array(256);xk(Fk);var Gk=Array(29);xk(Gk);var Hk=Array(30);xk(Hk);function Ik(a,b,c,d,e){this.Kd=a;this.re=b;this.qe=c;this.je=d;this.Je=e;this.vd=a&&a.length}
var Jk,Kk,Lk;function Mk(a,b){this.rd=a;this.Eb=0;this.bb=b}
function Nk(a,b){a.aa[a.pending++]=b&255;a.aa[a.pending++]=b>>>8&255}
function Ok(a,b,c){a.ia>16-c?(a.oa|=b<<a.ia&65535,Nk(a,a.oa),a.oa=b>>16-a.ia,a.ia+=c-16):(a.oa|=b<<a.ia&65535,a.ia+=c)}
function Pk(a,b,c){Ok(a,c[b*2],c[b*2+1])}
function Qk(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Rk(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Qk(d[e]++,e))}
function Sk(a){var b;for(b=0;b<286;b++)a.ra[b*2]=0;for(b=0;b<30;b++)a.gb[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ra[512]=1;a.Oa=a.Hb=0;a.ya=a.matches=0}
function Tk(a){a.ia>8?Nk(a,a.oa):a.ia>0&&(a.aa[a.pending++]=a.oa);a.oa=0;a.ia=0}
function Uk(a,b,c){Tk(a);Nk(a,c);Nk(a,~c);O.ub(a.aa,a.window,b,c,a.pending);a.pending+=c}
function Vk(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Wk(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Na;){e<a.Na&&Vk(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Vk(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Xk(a,b,c){var d=0;if(a.ya!==0){do{var e=a.aa[a.Pb+d*2]<<8|a.aa[a.Pb+d*2+1];var f=a.aa[a.Oc+d];d++;if(e===0)Pk(a,f,b);else{var g=Fk[f];Pk(a,g+256+1,b);var h=yk[g];h!==0&&(f-=Gk[g],Ok(a,f,h));e--;g=e<256?Ek[e]:Ek[256+(e>>>7)];Pk(a,g,c);h=zk[g];h!==0&&(e-=Hk[g],Ok(a,e,h))}}while(d<a.ya)}Pk(a,256,b)}
function Yk(a,b){var c=b.rd,d=b.bb.Kd,e=b.bb.vd,f=b.bb.je,g,h=-1;a.Na=0;a.zb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Na]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Na<2;){var k=a.da[++a.Na]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Oa--;e&&(a.Hb-=d[k*2+1])}b.Eb=h;for(g=a.Na>>1;g>=1;g--)Wk(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Na--],Wk(a,c,1),d=a.da[1],a.da[--a.zb]=g,a.da[--a.zb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.da[1]=k++,Wk(a,c,1);while(a.Na>=
2);a.da[--a.zb]=a.da[1];g=b.rd;k=b.Eb;d=b.bb.Kd;e=b.bb.vd;f=b.bb.re;var l=b.bb.qe,m=b.bb.Je,n,p=0;for(n=0;n<=15;n++)a.Ka[n]=0;g[a.da[a.zb]*2+1]=0;for(b=a.zb+1;b<573;b++){var t=a.da[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,p++);g[t*2+1]=n;if(!(t>k)){a.Ka[n]++;var v=0;t>=l&&(v=f[t-l]);var x=g[t*2];a.Oa+=x*(n+v);e&&(a.Hb+=x*(d[t*2+1]+v))}}if(p!==0){do{for(n=m-1;a.Ka[n]===0;)n--;a.Ka[n]--;a.Ka[n+1]+=2;a.Ka[m]--;p-=2}while(p>0);for(n=m;n!==0;n--)for(t=a.Ka[n];t!==0;)d=a.da[--b],d>k||(g[d*2+1]!==n&&(a.Oa+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}Rk(c,h,a.Ka)}
function Zk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function $k(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do Pk(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(Pk(a,l,a.ja),g--),Pk(a,16,a.ja),Ok(a,g-3,2)):g<=10?(Pk(a,17,a.ja),Ok(a,g-3,3)):(Pk(a,18,a.ja),Ok(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function al(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ra[c*2]!==0)return 0;if(a.ra[18]!==0||a.ra[20]!==0||a.ra[26]!==0)return 1;for(c=32;c<256;c++)if(a.ra[c*2]!==0)return 1;return 0}
var bl=!1;function cl(a,b,c){a.aa[a.Pb+a.ya*2]=b>>>8&255;a.aa[a.Pb+a.ya*2+1]=b&255;a.aa[a.Oc+a.ya]=c&255;a.ya++;b===0?a.ra[c*2]++:(a.matches++,b--,a.ra[(Fk[c]+256+1)*2]++,a.gb[(b<256?Ek[b]:Ek[256+(b>>>7)])*2]++);return a.ya===a.Tb-1}
;function dl(a,b){a.msg=wk[b];return b}
function el(a){for(var b=a.length;--b>=0;)a[b]=0}
function fl(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(O.ub(a.output,b.aa,b.Wb,c,a.Fb),a.Fb+=c,b.Wb+=c,a.gd+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Wb=0))}
function gl(a,b){var c=a.va>=0?a.va:-1,d=a.v-a.va,e=0;if(a.level>0){a.K.Jc===2&&(a.K.Jc=al(a));Yk(a,a.uc);Yk(a,a.kc);Zk(a,a.ra,a.uc.Eb);Zk(a,a.gb,a.kc.Eb);Yk(a,a.od);for(e=18;e>=3&&a.ja[Bk[e]*2+1]===0;e--);a.Oa+=3*(e+1)+5+5+4;var f=a.Oa+3+7>>>3;var g=a.Hb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Ok(a,b?1:0,3),Uk(a,c,d);else if(a.strategy===4||g===f)Ok(a,2+(b?1:0),3),Xk(a,Ck,Dk);else{Ok(a,4+(b?1:0),3);c=a.uc.Eb+1;d=a.kc.Eb+1;e+=1;Ok(a,c-257,5);Ok(a,d-1,5);Ok(a,e-4,4);for(f=0;f<e;f++)Ok(a,
a.ja[Bk[f]*2+1],3);$k(a,a.ra,c-1);$k(a,a.gb,d-1);Xk(a,a.ra,a.gb)}Sk(a);b&&Tk(a);a.va=a.v;fl(a.K)}
function P(a,b){a.aa[a.pending++]=b}
function hl(a,b){a.aa[a.pending++]=b>>>8&255;a.aa[a.pending++]=b&255}
function il(a,b){var c=a.yd,d=a.v,e=a.wa,f=a.Ad,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.cb,l=a.Ia,m=a.v+258,n=h[d+e-1],p=h[d+e];a.wa>=a.ud&&(c>>=2);f>a.B&&(f=a.B);do{var t=b;if(h[t+e]===p&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.Db=b;e=t;if(t>=f)break;n=h[d+e-1];p=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.B?e:a.B}
function jl(a){var b=a.la,c;do{var d=a.Qd-a.B-a.v;if(a.v>=b+(b-262)){O.ub(a.window,a.window,b,b,0);a.Db-=b;a.v-=b;a.va-=b;var e=c=a.sc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.K.na===0)break;e=a.K;c=a.window;f=a.v+a.B;var g=e.na;g>d&&(g=d);g===0?c=0:(e.na-=g,O.ub(c,e.input,e.nb,g,f),e.state.wrap===1?e.I=qk(e.I,c,g,f):e.state.wrap===2&&(e.I=rk(e.I,c,g,f)),e.nb+=g,e.qb+=g,c=g);a.B+=c;if(a.B+a.sa>=3)for(d=a.v-a.sa,a.R=a.window[d],
a.R=(a.R<<a.Ma^a.window[d+1])&a.La;a.sa&&!(a.R=(a.R<<a.Ma^a.window[d+3-1])&a.La,a.Ia[d&a.cb]=a.head[a.R],a.head[a.R]=d,d++,a.sa--,a.B+a.sa<3););}while(a.B<262&&a.K.na!==0)}
function kl(a,b){for(var c;;){if(a.B<262){jl(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);c!==0&&a.v-c<=a.la-262&&(a.T=il(a,c));if(a.T>=3)if(c=cl(a,a.v-a.Db,a.T-3),a.B-=a.T,a.T<=a.Qc&&a.B>=3){a.T--;do a.v++,a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.R=a.window[a.v],a.R=(a.R<<a.Ma^a.window[a.v+1])&a.La;else c=cl(a,0,
a.window[a.v]),a.B--,a.v++;if(c&&(gl(a,!1),a.K.S===0))return 1}a.sa=a.v<2?a.v:2;return b===4?(gl(a,!0),a.K.S===0?3:4):a.ya&&(gl(a,!1),a.K.S===0)?1:2}
function ll(a,b){for(var c,d;;){if(a.B<262){jl(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);a.wa=a.T;a.Dd=a.Db;a.T=2;c!==0&&a.wa<a.Qc&&a.v-c<=a.la-262&&(a.T=il(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.Db>4096)&&(a.T=2));if(a.wa>=3&&a.T<=a.wa){d=a.v+a.B-3;c=cl(a,a.v-1-a.Dd,a.wa-3);a.B-=a.wa-1;a.wa-=2;do++a.v<=d&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);
while(--a.wa!==0);a.lb=0;a.T=2;a.v++;if(c&&(gl(a,!1),a.K.S===0))return 1}else if(a.lb){if((c=cl(a,0,a.window[a.v-1]))&&gl(a,!1),a.v++,a.B--,a.K.S===0)return 1}else a.lb=1,a.v++,a.B--}a.lb&&(cl(a,0,a.window[a.v-1]),a.lb=0);a.sa=a.v<2?a.v:2;return b===4?(gl(a,!0),a.K.S===0?3:4):a.ya&&(gl(a,!1),a.K.S===0)?1:2}
function ml(a,b){for(var c,d,e,f=a.window;;){if(a.B<=258){jl(a);if(a.B<=258&&b===0)return 1;if(a.B===0)break}a.T=0;if(a.B>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.B&&(a.T=a.B)}a.T>=3?(c=cl(a,1,a.T-3),a.B-=a.T,a.v+=a.T,a.T=0):(c=cl(a,0,a.window[a.v]),a.B--,a.v++);if(c&&(gl(a,!1),a.K.S===0))return 1}a.sa=0;return b===4?(gl(a,!0),a.K.S===0?3:4):
a.ya&&(gl(a,!1),a.K.S===0)?1:2}
function nl(a,b){for(var c;;){if(a.B===0&&(jl(a),a.B===0)){if(b===0)return 1;break}a.T=0;c=cl(a,0,a.window[a.v]);a.B--;a.v++;if(c&&(gl(a,!1),a.K.S===0))return 1}a.sa=0;return b===4?(gl(a,!0),a.K.S===0?3:4):a.ya&&(gl(a,!1),a.K.S===0)?1:2}
function ol(a,b,c,d,e){this.we=a;this.Ie=b;this.Le=c;this.He=d;this.se=e}
var pl;pl=[new ol(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(a.B<=1){jl(a);if(a.B===0&&b===0)return 1;if(a.B===0)break}a.v+=a.B;a.B=0;var d=a.va+c;if(a.v===0||a.v>=d)if(a.B=a.v-d,a.v=d,gl(a,!1),a.K.S===0)return 1;if(a.v-a.va>=a.la-262&&(gl(a,!1),a.K.S===0))return 1}a.sa=0;if(b===4)return gl(a,!0),a.K.S===0?3:4;a.v>a.va&&gl(a,!1);return 1}),
new ol(4,4,8,4,kl),new ol(4,5,16,8,kl),new ol(4,6,32,32,kl),new ol(4,4,16,16,ll),new ol(8,16,32,32,ll),new ol(8,16,128,128,ll),new ol(8,32,128,256,ll),new ol(32,128,258,1024,ll),new ol(32,258,258,4096,ll)];
function ql(){this.K=null;this.status=0;this.aa=null;this.wrap=this.pending=this.Wb=this.za=0;this.H=null;this.Ba=0;this.method=8;this.Bb=-1;this.cb=this.kd=this.la=0;this.window=null;this.Qd=0;this.head=this.Ia=null;this.Ad=this.ud=this.strategy=this.level=this.Qc=this.yd=this.wa=this.B=this.Db=this.v=this.lb=this.Dd=this.T=this.va=this.Ma=this.La=this.Mc=this.sc=this.R=0;this.ra=new O.Ja(1146);this.gb=new O.Ja(122);this.ja=new O.Ja(78);el(this.ra);el(this.gb);el(this.ja);this.od=this.kc=this.uc=
null;this.Ka=new O.Ja(16);this.da=new O.Ja(573);el(this.da);this.zb=this.Na=0;this.depth=new O.Ja(573);el(this.depth);this.ia=this.oa=this.sa=this.matches=this.Hb=this.Oa=this.Pb=this.ya=this.Tb=this.Oc=0}
function rl(a,b){if(!a||!a.state||b>5||b<0)return a?dl(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.na!==0||c.status===666&&b!==4)return dl(a,a.S===0?-5:-2);c.K=a;var d=c.Bb;c.Bb=b;if(c.status===42)if(c.wrap===2)a.I=0,P(c,31),P(c,139),P(c,8),c.H?(P(c,(c.H.text?1:0)+(c.H.Va?2:0)+(c.H.extra?4:0)+(c.H.name?8:0)+(c.H.comment?16:0)),P(c,c.H.time&255),P(c,c.H.time>>8&255),P(c,c.H.time>>16&255),P(c,c.H.time>>24&255),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,c.H.os&255),c.H.extra&&c.H.extra.length&&
(P(c,c.H.extra.length&255),P(c,c.H.extra.length>>8&255)),c.H.Va&&(a.I=rk(a.I,c.aa,c.pending,0)),c.Ba=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,3),c.status=113);else{var e=8+(c.kd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;hl(c,e+(31-e%31));c.v!==0&&(hl(c,a.I>>>16),hl(c,a.I&65535));a.I=1}if(c.status===69)if(c.H.extra){for(e=c.pending;c.Ba<(c.H.extra.length&65535)&&(c.pending!==c.za||
(c.H.Va&&c.pending>e&&(a.I=rk(a.I,c.aa,c.pending-e,e)),fl(a),e=c.pending,c.pending!==c.za));)P(c,c.H.extra[c.Ba]&255),c.Ba++;c.H.Va&&c.pending>e&&(a.I=rk(a.I,c.aa,c.pending-e,e));c.Ba===c.H.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(c.status===73)if(c.H.name){e=c.pending;do{if(c.pending===c.za&&(c.H.Va&&c.pending>e&&(a.I=rk(a.I,c.aa,c.pending-e,e)),fl(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.H.name.length?c.H.name.charCodeAt(c.Ba++)&255:0;P(c,f)}while(f!==0);c.H.Va&&c.pending>
e&&(a.I=rk(a.I,c.aa,c.pending-e,e));f===0&&(c.Ba=0,c.status=91)}else c.status=91;if(c.status===91)if(c.H.comment){e=c.pending;do{if(c.pending===c.za&&(c.H.Va&&c.pending>e&&(a.I=rk(a.I,c.aa,c.pending-e,e)),fl(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.H.comment.length?c.H.comment.charCodeAt(c.Ba++)&255:0;P(c,f)}while(f!==0);c.H.Va&&c.pending>e&&(a.I=rk(a.I,c.aa,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.H.Va?(c.pending+2>c.za&&fl(a),c.pending+2<=c.za&&(P(c,
a.I&255),P(c,a.I>>8&255),a.I=0,c.status=113)):c.status=113);if(c.pending!==0){if(fl(a),a.S===0)return c.Bb=-1,0}else if(a.na===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return dl(a,-5);if(c.status===666&&a.na!==0)return dl(a,-5);if(a.na!==0||c.B!==0||b!==0&&c.status!==666){d=c.strategy===2?nl(c,b):c.strategy===3?ml(c,b):pl[c.level].se(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.Bb=-1),0;if(d===2&&(b===1?(Ok(c,2,3),Pk(c,256,Ck),c.ia===16?(Nk(c,c.oa),c.oa=0,c.ia=0):c.ia>=
8&&(c.aa[c.pending++]=c.oa&255,c.oa>>=8,c.ia-=8)):b!==5&&(Ok(c,0,3),Uk(c,0,0),b===3&&(el(c.head),c.B===0&&(c.v=0,c.va=0,c.sa=0))),fl(a),a.S===0))return c.Bb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(P(c,a.I&255),P(c,a.I>>8&255),P(c,a.I>>16&255),P(c,a.I>>24&255),P(c,a.qb&255),P(c,a.qb>>8&255),P(c,a.qb>>16&255),P(c,a.qb>>24&255)):(hl(c,a.I>>>16),hl(c,a.I&65535));fl(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var sl={};sl=function(){this.input=null;this.qb=this.na=this.nb=0;this.output=null;this.gd=this.S=this.Fb=0;this.msg="";this.state=null;this.Jc=2;this.I=0};var tl=Object.prototype.toString;
function ul(a){if(!(this instanceof ul))return new ul(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.K=new sl;this.K.S=0;var b=this.K;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=dl(b,-2);else{e===8&&(e=9);var k=new ql;b.state=k;k.K=b;k.wrap=h;k.H=null;k.kd=e;k.la=1<<k.kd;k.cb=k.la-1;k.Mc=f+7;k.sc=1<<k.Mc;k.La=k.sc-1;k.Ma=~~((k.Mc+3-1)/3);k.window=new O.rb(k.la*2);k.head=new O.Ja(k.sc);k.Ia=new O.Ja(k.la);k.Tb=1<<f+6;k.za=k.Tb*4;k.aa=new O.rb(k.za);k.Pb=1*k.Tb;k.Oc=3*k.Tb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.qb=b.gd=0;b.Jc=2;c=b.state;c.pending=0;c.Wb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.I=c.wrap===2?
0:1;c.Bb=0;if(!bl){d=Array(16);for(f=g=0;f<28;f++)for(Gk[f]=g,e=0;e<1<<yk[f];e++)Fk[g++]=f;Fk[g-1]=f;for(f=g=0;f<16;f++)for(Hk[f]=g,e=0;e<1<<zk[f];e++)Ek[g++]=f;for(g>>=7;f<30;f++)for(Hk[f]=g<<7,e=0;e<1<<zk[f]-7;e++)Ek[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Ck[e*2+1]=8,e++,d[8]++;for(;e<=255;)Ck[e*2+1]=9,e++,d[9]++;for(;e<=279;)Ck[e*2+1]=7,e++,d[7]++;for(;e<=287;)Ck[e*2+1]=8,e++,d[8]++;Rk(Ck,287,d);for(e=0;e<30;e++)Dk[e*2+1]=5,Dk[e*2]=Qk(e,5);Jk=new Ik(Ck,yk,257,286,15);Kk=new Ik(Dk,
zk,0,30,15);Lk=new Ik([],Ak,0,19,7);bl=!0}c.uc=new Mk(c.ra,Jk);c.kc=new Mk(c.gb,Kk);c.od=new Mk(c.ja,Lk);c.oa=0;c.ia=0;Sk(c);c=0}else c=dl(b,-2);c===0&&(b=b.state,b.Qd=2*b.la,el(b.head),b.Qc=pl[b.level].Ie,b.ud=pl[b.level].we,b.Ad=pl[b.level].Le,b.yd=pl[b.level].He,b.v=0,b.va=0,b.B=0,b.sa=0,b.T=b.wa=2,b.lb=0,b.R=0);b=c}}else b=-2;if(b!==0)throw Error(wk[b]);a.header&&(b=this.K)&&b.state&&b.state.wrap===2&&(b.state.H=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=pk(a.dictionary):
tl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.K;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.B)b=-2;else{b===1&&(a.I=qk(a.I,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(el(l.head),l.v=0,l.va=0,l.sa=0),c=new O.rb(l.la),O.ub(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.na;d=a.nb;e=a.input;a.na=g;a.nb=0;a.input=f;for(jl(l);l.B>=3;){f=l.v;g=l.B-2;do l.R=(l.R<<l.Ma^l.window[f+3-1])&l.La,l.Ia[f&l.cb]=l.head[l.R],l.head[l.R]=f,f++;while(--g);
l.v=f;l.B=2;jl(l)}l.v+=l.B;l.va=l.v;l.sa=l.B;l.B=0;l.T=l.wa=2;l.lb=0;a.nb=d;a.input=e;a.na=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(wk[b]);this.sh=!0}}
ul.prototype.push=function(a,b){var c=this.K,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=pk(a):tl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.nb=0;c.na=c.input.length;do{c.S===0&&(c.output=new O.rb(d),c.Fb=0,c.S=d);a=rl(c,e);if(a!==1&&a!==0)return vl(this,a),this.ended=!0,!1;if(c.S===0||c.na===0&&(e===4||e===2))if(this.options.to==="string"){var f=O.bd(c.output,c.Fb);b=f;f=f.length;if(f<65537&&(b.subarray&&ok||!b.subarray))b=
String.fromCharCode.apply(null,O.bd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.bd(c.output,c.Fb),this.chunks.push(b)}while((c.na>0||c.S===0)&&a!==1);if(e===4)return(c=this.K)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=dl(c,-2):(c.state=null,a=d===113?dl(c,-3):0)):a=-2,vl(this,a),this.ended=!0,a===0;e===2&&(vl(this,0),c.S=0);return!0};
function vl(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):O.sd(a.chunks));a.chunks=[];a.err=b;a.msg=a.K.msg}
function wl(a,b){b=b||{};b.gzip=!0;b=new ul(b);b.push(a,!0);if(b.err)throw b.msg||wk[b.err];return b.result}
;function xl(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Db(a):null:null}
function yl(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?jb(a):null:null}
;function zl(a){return jb(a===null?"null":a===void 0?"undefined":a)}
;function Al(a){this.name=a}
;var Bl=new Al("rawColdConfigGroup");var Cl=new Al("rawHotConfigGroup");function Dl(a){this.F=L(a)}
w(Dl,M);function El(a){this.F=L(a)}
w(El,M);El.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new zd(a,yd):Bd||(Bd=new zd(null,yd));else if(a.constructor!==zd)if(td&&a!=null&&a instanceof Uint8Array)a instanceof Uint8Array||Array.isArray(a),a=a.length?new zd(new Uint8Array(a),yd):Bd||(Bd=new zd(null,yd));else throw Error();return jf(this,1,a)};var Fl=new Al("continuationCommand");var Gl=new Al("webCommandMetadata");var Hl=new Al("signalServiceEndpoint");var Il={Rf:"EMBEDDED_PLAYER_MODE_UNKNOWN",Of:"EMBEDDED_PLAYER_MODE_DEFAULT",Qf:"EMBEDDED_PLAYER_MODE_PFP",Pf:"EMBEDDED_PLAYER_MODE_PFL"};var Jl=new Al("feedbackEndpoint");var ce={Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Uf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
Vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DOCUMENT_PICTURE_IN_PICTURE_SUPPORTED"};var Kl=new Al("shareEndpoint"),Ll=new Al("shareEntityEndpoint"),Ml=new Al("shareEntityServiceEndpoint"),Nl=new Al("webPlayerShareEntityServiceEndpoint");var Ol=new Al("playlistEditEndpoint");var Pl=new Al("modifyChannelNotificationPreferenceEndpoint");var Ql=new Al("undoFeedbackEndpoint");var Rl=new Al("unsubscribeEndpoint");var Sl=new Al("subscribeEndpoint");function Tl(){var a=Ul;F("yt.ads.biscotti.getId_")||E("yt.ads.biscotti.getId_",a)}
function Vl(a){E("yt.ads.biscotti.lastId_",a)}
;function Wl(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var Xl=D.window,Yl,Zl,$l=(Xl==null?void 0:(Yl=Xl.yt)==null?void 0:Yl.config_)||(Xl==null?void 0:(Zl=Xl.ytcfg)==null?void 0:Zl.data_)||{};E("yt.config_",$l);function am(){Wl($l,arguments)}
function R(a,b){return a in $l?$l[a]:b}
function bm(a){var b=$l.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var cm=[];function dm(a){cm.forEach(function(b){return b(a)})}
function em(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){fm(b)}}:a}
function fm(a){var b=F("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),am("ERRORS",b));dm(a)}
function gm(a,b,c,d,e){var f=F("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),am("ERRORS",f))}
;var hm=/^[\w.]*$/,im={q:!0,search_query:!0};function jm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=km(f[0]||""),h=km(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Ub(k,h):c[g]=[k,h]}else c[g]=h}catch(p){var l=p,m=f[0],n=String(jm);l.args=[{key:m,value:f[1],query:a,method:lm===n?"unchanged":n}];im.hasOwnProperty(m)||gm(l)}}return c}
var lm=String(jm);function mm(a){var b=[];gg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Nb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function nm(a){a.charAt(0)==="?"&&(a=a.substring(1));return jm(a,"&")}
function om(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),nm(a.length>1?a[1]:a[0])):{}}
function pm(a,b){return qm(a,b||{},!0)}
function qm(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=nm(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return jc(a,e)+d}
function rm(a){if(!b)var b=window.location.href;var c=a.match(ac)[1]||null,d=cc(a);c&&d?(a=a.match(ac),b=b.match(ac),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?cc(b)===d&&(Number(b.match(ac)[4]||null)||null)===(Number(a.match(ac)[4]||null)||null):!0;return a}
function km(a){return a&&a.match(hm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function sm(a){var b=tm;a=a===void 0?F("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Dj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ia){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?vj:g;try{var h=g.history.length}catch(Ia){h=0}e.u_his=h;var k;e.u_h=(k=vj.screen)==null?void 0:k.height;var l;e.u_w=(l=vj.screen)==null?void 0:l.width;var m;e.u_ah=(m=vj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=vj.screen)==null?void 0:n.availWidth;var p;e.u_cd=(p=vj.screen)==null?void 0:p.colorDepth}catch(Ia){}var t;h=b.h;try{var v=h.screenX;var x=h.screenY}catch(Ia){}try{var A=h.outerWidth;var G=h.outerHeight}catch(Ia){}try{var I=h.innerWidth;var Z=h.innerHeight}catch(Ia){}try{var ca=h.screenLeft;var Pa=h.screenTop}catch(Ia){}try{I=h.innerWidth,Z=h.innerHeight}catch(Ia){}try{var Rb=h.screen.availWidth;var Ya=h.screen.availTop}catch(Ia){}v=[ca,Pa,v,x,Rb,Ya,A,G,I,Z];try{var Bb=(b.h.top||window).document,
Za=Bb.compatMode=="CSS1Compat"?Bb.documentElement:Bb.body;var Qa=(new fg(Za.clientWidth,Za.clientHeight)).round()}catch(Ia){Qa=new fg(-12245933,-12245933)}Bb=Qa;Qa={};var Ja=Ja===void 0?D:Ja;Za=new Jj;"SVGElement"in Ja&&"createElementNS"in Ja.document&&Za.set(0);x=Aj();x["allow-top-navigation-by-user-activation"]&&Za.set(1);x["allow-popups-to-escape-sandbox"]&&Za.set(2);Ja.crypto&&Ja.crypto.subtle&&Za.set(3);"TextDecoder"in Ja&&"TextEncoder"in Ja&&Za.set(4);Ja=Kj(Za);Qa.bc=Ja;Qa.bih=Bb.height;Qa.biw=
Bb.width;Qa.brdim=v.join();b=b.i;b=b.prerendering?3:(t={visible:1,hidden:2,prerender:3,preview:4,unloaded:5,"":0}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""])!=null?t:0;t=(Qa.vis=b,Qa.wgl=!!vj.WebGLRenderingContext,Qa);c=d.call(c,e,t);c.ca_type="image";a&&(c.bid=a);return c}
var tm=new function(){var a=window.document;this.h=window;this.i=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return mm(sm(a))});$a();navigator.userAgent.indexOf(" (CrKey ");var um="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function wm(){if(!um)return null;var a=um();return"open"in a?a:null}
function xm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function ym(a,b){typeof a==="function"&&(a=em(a));return window.setTimeout(a,b)}
;var zm="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(z(zm),["client_dev_set_cookie"]);function S(a){a=Am(a);return typeof a==="string"&&a==="false"?!1:!!a}
function Bm(a,b){a=Am(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Am(a){return R("EXPERIMENT_FLAGS",{})[a]}
function Cm(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=y(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});d=y(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Dm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Em="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(z(zm)),Fm=!1;function Gm(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&em(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=wm();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=Hm(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Im(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){gm(n)}}l.send(d);return l}
function Im(a,b){b=b===void 0?{}:b;var c=rm(a),d=R("INNERTUBE_CLIENT_NAME"),e=S("web_ajax_ignore_global_headers_if_set"),f;for(f in Dm){var g=R(Dm[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=R("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(cc(a)?!1:!0))){k=a;var l;if(l=S("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=cc(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=dc(k)||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!cc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!cc(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&cc(a)||(b["X-YouTube-Ad-Signals"]=mm(sm()));return b}
function Jm(a,b){b.method="POST";b.postParams||(b.postParams={});return Km(a,b)}
function Km(a,b){var c=b.format||"JSON";a=Lm(a,b);var d=Mm(a,b),e=!1,f=Nm(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=xm(k),m=null,n=400<=k.status&&k.status<500,p=500<=k.status&&k.status<600;if(l||n||p)m=Om(a,c,k,b.convertToSafeHtml);l&&(l=Pm(c,k,m));m=m||{};n=b.context||D;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=ym(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function Lm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=pm(a,b);return a}
function Mm(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||cc(a)&&!b.withCredentials&&cc(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=nm(e),qg(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):ic(e));f=e||f&&!jg(f);!Fm&&f&&b.method!=="POST"&&(Fm=!0,fm(Error("AJAX request with postData should use POST")));return e}
function Om(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,gm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Qm(a):null)e={},Nb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Rm(g)})}d&&Sm(e);
return e}
function Sm(a){if(Oa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=hb();d=e?e.createHTML(d):d;a[c]=new zb(d)}else Sm(a[b])}}
function Pm(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Qm(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Rm(a){var b="";Nb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Hm(a){var b=window.location.search,c=cc(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&rm(a)&&(c=document.location.hostname);var d=dc(a);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=nm(b),f={};Nb(Em,function(g){e[g]&&(f[g]=e[g])});
return qm(a,f||{},!1)}
var Nm=Gm;var Tm=[{Rc:function(a){return"Cannot read property '"+a.key+"'"},
xc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Rc:function(a){return"Cannot call '"+a.key+"'"},
xc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Rc:function(a){return a.key+" is not defined"},
xc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Vm={Ya:[],Ta:[{callback:Um,weight:500}]};function Um(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Wm(){this.Ta=[];this.Ya=[]}
var Xm;function Ym(){if(!Xm){var a=Xm=new Wm;a.Ya.length=0;a.Ta.length=0;Vm.Ya&&a.Ya.push.apply(a.Ya,Vm.Ya);Vm.Ta&&a.Ta.push.apply(a.Ta,Vm.Ta)}return Xm}
;var Zm=new N;function $m(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=an(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=an(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=an(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function an(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function bn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=cn(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=$m(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?cn(f+".ve",g,h,k):0;d+=f;d+=cn(e,a[e],b,c);if(d>500)break}}else c[b]=dn(a),d+=c[b].length;else c[b]=dn(a),d+=c[b].length;return d}
function cn(a,b,c,d){c+="."+a;a=dn(b);d[c]=a;return c.length+a.length}
function dn(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function en(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function fn(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function gn(){this.Ld=!0}
function hn(){gn.instance||(gn.instance=new gn);return gn.instance}
function jn(a,b){a={};var c=[];"USER_SESSION_ID"in $l&&c.push({key:"u",value:R("USER_SESSION_ID")});if(c=Zf(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in $l||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in $l&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));return a}
;var kn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function ln(a,b,c,d,e){Wf.set(""+a,b,{Vb:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function mn(a){return Wf.get(""+a,void 0)}
function nn(a,b,c){Wf.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function on(){if(S("embeds_web_enable_cookie_detection_fix")){if(!D.navigator.cookieEnabled)return!1}else if(!Wf.isEnabled())return!1;if(Wf.h.cookie)return!0;S("embeds_web_enable_cookie_detection_fix")?Wf.set("TESTCOOKIESENABLED","1",{Vb:60,af:"none",secure:!0}):Wf.set("TESTCOOKIESENABLED","1",{Vb:60});if(Wf.get("TESTCOOKIESENABLED")!=="1")return!1;Wf.remove("TESTCOOKIESENABLED");return!0}
;var pn=F("ytglobal.prefsUserPrefsPrefs_")||{};E("ytglobal.prefsUserPrefsPrefs_",pn);function qn(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=mn(this.h);a&&this.parse(a)}
var rn;function sn(){rn||(rn=new qn);return rn}
r=qn.prototype;r.get=function(a,b){tn(a);un(a);a=pn[a]!==void 0?pn[a].toString():null;return a!=null?a:b?b:""};
r.set=function(a,b){tn(a);un(a);if(b==null)throw Error("ExpectedNotNull");pn[a]=b.toString()};
function vn(a){return!!((wn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
r.remove=function(a){tn(a);un(a);delete pn[a]};
r.clear=function(){for(var a in pn)delete pn[a]};
function un(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function tn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function wn(a){a=pn[a]!==void 0?pn[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
r.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(pn[d]=c.toString())}};var xn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},yn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function zn(){var a=D.navigator;return a?a.connection:void 0}
function An(){var a=zn();if(a){var b=xn[a.type||"unknown"]||"CONN_UNKNOWN";a=xn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Bn(){var a=zn();if(a!=null&&a.effectiveType)return yn.hasOwnProperty(a.effectiveType)?yn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function T(a){var b=C.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(z(b));Object.setPrototypeOf(this,this.constructor.prototype)}
w(T,Error);function Cn(){try{return Dn(),!0}catch(a){return!1}}
function Dn(a){if(R("DATASYNC_ID")!==void 0)return R("DATASYNC_ID");throw new T("Datasync ID not set",a===void 0?"unknown":a);}
;function En(){}
function Fn(a,b){return Ij.Ra(a,0,b)}
En.prototype.pa=function(a,b){return this.Ra(a,1,b)};
En.prototype.Lb=function(a){var b=F("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Gn=Bm("web_emulated_idle_callback_delay",300),Hn=1E3/60-3,In=[8,5,4,3,2,1,0];
function Jn(a){a=a===void 0?{}:a;H.call(this);this.i=[];this.j={};this.Z=this.h=0;this.Y=this.u=!1;this.P=[];this.U=this.ha=!1;for(var b=y(In),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.Gc=a.timeout||1;this.G=Hn;this.D=0;this.xa=this.Ne.bind(this);this.Kb=this.tf.bind(this);this.Pa=this.Wd.bind(this);this.Qa=this.xe.bind(this);this.eb=this.Ue.bind(this);this.Fa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.ma=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.xa)}
w(Jn,H);r=Jn.prototype;r.Lb=function(a){var b=$a();Kn(this,a);a=$a()-b;this.u||(this.G-=a)};
r.Ra=function(a,b,c){++this.Z;if(b===10)return this.Lb(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.P.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&Ln(this)!==this.D&&this.stop(),this.start()));return d};
r.qa=function(a){delete this.j[a]};
function Mn(a){a.P.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
r.isHidden=function(){return!!document.hidden||!1};
function Nn(a){return!a.isHidden()&&a.ma}
function Ln(a){if(a.i[8].length){if(a.U)return 4;if(Nn(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Nn(a)?3:2:1;return 0}
r.Ha=function(a){var b=F("yt.logging.errors.log");b&&b(a)};
function Kn(a,b){try{b()}catch(c){a.Ha(c)}}
function On(a){for(var b=y(In),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
r.xe=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ha=!0;Pn(this,b);this.ha=!1};
r.tf=function(){Pn(this)};
r.Wd=function(){Qn(this)};
r.Ue=function(a){this.U=!0;var b=Ln(this);b===4&&b!==this.D&&(this.stop(),this.start());Pn(this,void 0,a);this.U=!1};
r.Ne=function(){this.isHidden()||Qn(this);this.h&&(this.stop(),this.start())};
function Qn(a){a.stop();a.u=!0;for(var b=$a(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Kn(a,e)}Rn(a);a.u=!1;On(a)&&a.start();b=$a()-b;a.G-=b}
function Rn(a){for(var b=0,c=a.P.length;b<c;b++){var d=a.P[b];a.i[d.priority].push(d.id)}a.P.length=0}
function Pn(a,b,c){a.U&&a.D===4&&a.h||a.stop();a.u=!0;b=$a()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ha(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Kn(a,f);d=a.ha?0:1;d=a.o>d?a.o:d;if(!($a()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Kn(a,c)}while(c&&$a()<b)}a.u=!1;Rn(a);a.G=Hn;On(a)&&a.start()}
r.start=function(){this.Y=!1;if(this.h===0)switch(this.D=Ln(this),this.D){case 1:var a=this.Qa;this.h=this.Fa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Gn);break;case 2:this.h=window.setTimeout(this.Kb,this.Gc);break;case 3:this.h=window.requestAnimationFrame(this.eb);break;case 4:this.h=window.setTimeout(this.Pa,0)}};
r.pause=function(){this.stop();this.Y=!0};
r.stop=function(){if(this.h){switch(this.D){case 1:var a=this.h;this.Fa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
r.ba=function(){Mn(this);this.stop();this.ma&&document.removeEventListener("visibilitychange",this.xa);H.prototype.ba.call(this)};var Sn=F("yt.scheduler.instance.timerIdMap_")||{},Tn=Bm("kevlar_tuner_scheduler_soft_state_timer_ms",800),Un=0,Vn=0;function Wn(){var a=F("ytglobal.schedulerInstanceInstance_");if(!a||a.ea)a=new Jn(R("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function Xn(){Yn();var a=F("ytglobal.schedulerInstanceInstance_");a&&(tc(a),E("ytglobal.schedulerInstanceInstance_",null))}
function Yn(){Mn(Wn());for(var a in Sn)Sn.hasOwnProperty(a)&&delete Sn[Number(a)]}
function Zn(a,b,c){if(!c)return c=c===void 0,-Wn().Ra(a,b,c);var d=window.setTimeout(function(){var e=Wn().Ra(a,b);Sn[d]=e},c);
return d}
function $n(a){Wn().Lb(a)}
function ao(a){var b=Wn();if(a<0)b.qa(-a);else{var c=Sn[a];c?(b.qa(c),delete Sn[a]):window.clearTimeout(a)}}
function bo(){co()}
function co(){window.clearTimeout(Un);Wn().start()}
function eo(){Wn().pause();window.clearTimeout(Un);Un=window.setTimeout(bo,Tn)}
function fo(){window.clearTimeout(Vn);Vn=window.setTimeout(function(){go(0)},Tn)}
function go(a){fo();var b=Wn();b.o=a;b.start()}
function ho(a){fo();var b=Wn();b.o>a&&(b.o=a,b.start())}
function io(){window.clearTimeout(Vn);var a=Wn();a.o=0;a.start()}
;function jo(){En.apply(this,arguments)}
w(jo,En);function ko(){jo.instance||(jo.instance=new jo);return jo.instance}
jo.prototype.Ra=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=F("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):ym(a,c||0)};
jo.prototype.qa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=F("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
jo.prototype.start=function(){var a=F("yt.scheduler.instance.start");a&&a()};
jo.prototype.pause=function(){var a=F("yt.scheduler.instance.pause");a&&a()};
var Ij=ko();
S("web_scheduler_auto_init")&&!F("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",Xn),E("yt.scheduler.instance.addJob",Zn),E("yt.scheduler.instance.addImmediateJob",$n),E("yt.scheduler.instance.cancelJob",ao),E("yt.scheduler.instance.cancelAllJobs",Yn),E("yt.scheduler.instance.start",co),E("yt.scheduler.instance.pause",eo),E("yt.scheduler.instance.setPriorityThreshold",go),E("yt.scheduler.instance.enablePriorityThreshold",ho),E("yt.scheduler.instance.clearPriorityThreshold",io),E("yt.scheduler.initialized",
!0));function lo(a){var b=new jk;this.h=(a=b.isAvailable()?a?new kk(b,a):b:null)?new ek(a):null;this.i=document.domain||window.location.hostname}
lo.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Ei).serialize(b))}catch(f){return}else e=escape(b);ln(a,e,c,this.i)};
lo.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=mn(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
lo.prototype.remove=function(a){this.h&&this.h.remove(a);nn(a,"/",this.i)};var mo=function(){var a;return function(){a||(a=new lo("ytidb"));return a}}();
function no(){var a;return(a=mo())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var oo=[],po,qo=!1;function ro(){var a={};for(po=new so(a.handleError===void 0?to:a.handleError,a.logEvent===void 0?uo:a.logEvent);oo.length>0;)switch(a=oo.shift(),a.type){case "ERROR":po.Ha(a.payload);break;case "EVENT":po.logEvent(a.eventType,a.payload)}}
function vo(a){qo||(po?po.Ha(a):(oo.push({type:"ERROR",payload:a}),oo.length>10&&oo.shift()))}
function wo(a,b){qo||(po?po.logEvent(a,b):(oo.push({type:"EVENT",eventType:a,payload:b}),oo.length>10&&oo.shift()))}
;function xo(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function yo(a){return a.substr(0,a.indexOf(":"))||a}
;var zo=kd||ld;function Ao(a){var b=Uc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Bo={},Co=(Bo.AUTH_INVALID="No user identifier specified.",Bo.EXPLICIT_ABORT="Transaction was explicitly aborted.",Bo.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Bo.MISSING_INDEX="Index not created.",Bo.MISSING_OBJECT_STORES="Object stores not created.",Bo.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Bo.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Bo.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Bo.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Bo.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Bo.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Bo.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Bo),Do={},Eo=(Do.AUTH_INVALID="ERROR",Do.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Do.EXPLICIT_ABORT="IGNORED",Do.IDB_NOT_SUPPORTED="ERROR",Do.MISSING_INDEX=
"WARNING",Do.MISSING_OBJECT_STORES="ERROR",Do.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Do.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Do.QUOTA_EXCEEDED="WARNING",Do.QUOTA_MAYBE_EXCEEDED="WARNING",Do.UNKNOWN_ABORT="WARNING",Do.INCOMPATIBLE_DB_VERSION="WARNING",Do),Fo={},Go=(Fo.AUTH_INVALID=!1,Fo.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Fo.EXPLICIT_ABORT=!1,Fo.IDB_NOT_SUPPORTED=!1,Fo.MISSING_INDEX=!1,Fo.MISSING_OBJECT_STORES=!1,Fo.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Fo.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Fo.QUOTA_EXCEEDED=!1,Fo.QUOTA_MAYBE_EXCEEDED=!0,Fo.UNKNOWN_ABORT=!0,Fo.INCOMPATIBLE_DB_VERSION=!1,Fo);function Ho(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Co[a]:c;d=d===void 0?Eo[a]:d;e=e===void 0?Go[a]:e;T.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Ho.prototype)}
w(Ho,T);function Io(a,b){Ho.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Co.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Io.prototype)}
w(Io,Ho);function Jo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Jo.prototype)}
w(Jo,Error);var Ko=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Lo(a,b,c,d){b=yo(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Ho)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Ho("QUOTA_EXCEEDED",a);if(md&&e.name==="UnknownError")return new Ho("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Jo)return new Ho("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Ko.some(function(f){return e.message.includes(f)}))return new Ho("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Ho("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Cd:e.name})];e.level="WARNING";return e}
function Mo(a,b,c){var d=no();return new Ho("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function No(a){if(!a)throw Error();throw a;}
function Oo(a){return a}
function Po(a){this.h=a}
function Qo(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=y(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=y(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Qo.all=function(a){return new Qo(new Po(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={Ab:0};f.Ab<a.length;f={Ab:f.Ab},++f.Ab)Qo.resolve(a[f.Ab]).then(function(g){return function(h){d[g.Ab]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
Qo.resolve=function(a){return new Qo(new Po(function(b,c){a instanceof Qo?a.then(b,c):b(a)}))};
Qo.reject=function(a){return new Qo(new Po(function(b,c){c(a)}))};
Qo.prototype.then=function(a,b){var c=this,d=a!=null?a:Oo,e=b!=null?b:No;return new Qo(new Po(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){Ro(c,c,d,f,g)}),c.i.push(function(){So(c,c,e,f,g)})):c.state.status==="FULFILLED"?Ro(c,c,d,f,g):c.state.status==="REJECTED"&&So(c,c,e,f,g)}))};
Qo.prototype.catch=function(a){return this.then(void 0,a)};
function Ro(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Qo?To(a,b,f,d,e):d(f)}catch(g){e(g)}}
function So(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Qo?To(a,b,f,d,e):d(f)}catch(g){e(g)}}
function To(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Qo?To(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Uo(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Vo(a){return new Promise(function(b,c){Uo(a,b,c)})}
function Wo(a){return new Qo(new Po(function(b,c){Uo(a,b,c)}))}
;function Xo(a,b){return new Qo(new Po(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Yo=window,U=Yo.ytcsi&&Yo.ytcsi.now?Yo.ytcsi.now:Yo.performance&&Yo.performance.timing&&Yo.performance.now&&Yo.performance.timing.navigationStart?function(){return Yo.performance.timing.navigationStart+Yo.performance.now()}:function(){return(new Date).getTime()};function Zo(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
r=Zo.prototype;r.add=function(a,b,c){return $o(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return $o(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return $o(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function ap(a,b,c){a=a.h.createObjectStore(b,c);return new bp(a)}
r.delete=function(a,b){return $o(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return $o(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function cp(a,b,c){return $o(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return Wo(d.h.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function $o(a,b,c,d){var e,f,g,h,k,l,m,n,p,t,v,x;return B(function(A){switch(A.h){case 1:var G={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){A.A(4);break}g++;k=Math.round(U());wa(A,5);l=a.h.transaction(b,e.mode);G=A.yield;var I=new dp(l);I=ep(I,d);return G.call(A,I,7);case 7:return m=A.i,n=Math.round(U()),fp(a,k,n,g,void 0,b.join(),e),A.return(m);case 5:p=ya(A);t=Math.round(U());v=Lo(p,
a.h.name,b.join(),a.h.version);if((x=v instanceof Ho&&!v.h)||g>=f)fp(a,k,t,g,v,b.join(),e),h=v;A.A(2);break;case 4:return A.return(Promise.reject(h))}})}
function fp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Ho&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&wo("QUOTA_EXCEEDED",{dbName:yo(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Ho&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),wo("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),gp(a,!1,d,f,b,g.tag),vo(e)):gp(a,!0,d,f,b,g.tag)}
function gp(a,b,c,d,e,f){wo("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.h.name};
function bp(a){this.h=a}
r=bp.prototype;r.add=function(a,b){return Wo(this.h.add(a,b))};
r.autoIncrement=function(){return this.h.autoIncrement};
r.clear=function(){return Wo(this.h.clear()).then(function(){})};
function hp(a,b,c){a.h.createIndex(b,c,{unique:!1})}
r.count=function(a){return Wo(this.h.count(a))};
function ip(a,b){return jp(a,{query:b},function(c){return c.delete().then(function(){return kp(c)})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?ip(this,a):Wo(this.h.delete(a))};
r.get=function(a){return Wo(this.h.get(a))};
r.index=function(a){try{return new lp(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Jo(a,this.h.name);throw b;}};
r.getName=function(){return this.h.name};
r.keyPath=function(){return this.h.keyPath};
function jp(a,b,c){a=a.h.openCursor(b.query,b.direction);return mp(a).then(function(d){return Xo(d,c)})}
function dp(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Ho;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function ep(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return y(d).next().value})}
dp.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Ho("EXPLICIT_ABORT");};
dp.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new bp(a),this.i.set(a,b));return b};
function lp(a){this.h=a}
r=lp.prototype;r.count=function(a){return Wo(this.h.count(a))};
r.delete=function(a){return np(this,{query:a},function(b){return b.delete().then(function(){return kp(b)})})};
r.get=function(a){return Wo(this.h.get(a))};
r.keyPath=function(){return this.h.keyPath};
r.unique=function(){return this.h.unique};
function np(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return mp(a).then(function(d){return Xo(d,c)})}
function op(a,b){this.request=a;this.cursor=b}
function mp(a){return Wo(a).then(function(b){return b?new op(a,b):null})}
function kp(a){a.cursor.continue(void 0);return mp(a.request)}
op.prototype.delete=function(){return Wo(this.cursor.delete()).then(function(){})};
op.prototype.getValue=function(){return this.cursor.value};
op.prototype.update=function(a){return Wo(this.cursor.update(a))};function pp(a,b,c){return new Promise(function(d,e){function f(){p||(p=new Zo(g.result,{closed:n}));return p}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Zd,k=c.blocking,l=c.rf,m=c.upgrade,n=c.closed,p;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&wo("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:yo(a)});var v=f(),x=new dp(g.transaction);
m&&m(v,function(A){return t.oldVersion<A&&t.newVersion>=A},x);
x.done.catch(function(A){e(A)})}catch(A){e(A)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){wo("IDB_UNEXPECTEDLY_CLOSED",{dbName:yo(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function qp(a,b,c){c=c===void 0?{}:c;return pp(a,b,c)}
function rp(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.h==1)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Zd)&&c.addEventListener("blocked",function(){e()}),g.yield(Vo(c),4);
if(g.h!=2)return xa(g,0);f=ya(g);throw Lo(f,a,"",-1);})}
;function sp(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
sp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return qp(a,b,c)};
sp.prototype.delete=function(a){a=a===void 0?{}:a;return rp(this.name,a)};
function tp(a,b){return new Ho("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function up(a,b){if(!b)throw Mo("openWithToken",yo(a.name));return a.open()}
sp.prototype.open=function(){function a(){var f,g,h,k,l,m,n,p,t,v;return B(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",wa(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var A=h=x.i,G=c.options,I=[],Z=y(Object.keys(G.Gb)),ca=Z.next();!ca.done;ca=Z.next()){ca=ca.value;var Pa=G.Gb[ca],Rb=Pa.Ve===void 0?Number.MAX_VALUE:Pa.Ve;!(A.h.version>=Pa.Nb)||A.h.version>=Rb||A.h.objectStoreNames.contains(ca)||I.push(ca)}k=I;if(k.length===0){x.A(5);break}l=Object.keys(c.options.Gb);
m=h.objectStoreNames();if(c.u<Bm("ytidb_reopen_db_retries",0))return c.u++,h.close(),vo(new Ho("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<Bm("ytidb_remake_db_retries",1))){x.A(6);break}c.o++;return x.yield(c.delete(),7);case 7:return vo(new Ho("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new Io(m,l);case 5:return x.return(h);case 2:n=ya(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.A(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:p=x.i;t=p.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw p.close(),c.j=!1,tp(c,t);return x.return(p);case 8:throw b(),n instanceof
Error&&!S("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Lo(n,c.name,"",(v=c.options.version)!=null?v:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw tp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,rf:b,upgrade:this.options.upgrade};return this.h=d=a()};var vp=new sp("YtIdbMeta",{Gb:{databases:{Nb:1}},upgrade:function(a,b){b(1)&&ap(a,"databases",{keyPath:"actualName"})}});
function wp(a,b){var c;return B(function(d){if(d.h==1)return d.yield(up(vp,b),2);c=d.i;return d.return($o(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Wo(f.h.put(a,void 0)).then(function(){})})}))})}
function xp(a,b){var c;return B(function(d){if(d.h==1)return a?d.yield(up(vp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function yp(a,b){var c,d;return B(function(e){return e.h==1?(c=[],e.yield(up(vp,b),2)):e.h!=3?(d=e.i,e.yield($o(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return jp(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return kp(g)})}),3)):e.return(c)})}
function zp(a){return yp(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Ap(a,b,c){return yp(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Bp(a){var b,c;return B(function(d){if(d.h==1)return b=Dn("YtIdbMeta hasAnyMeta other"),d.yield(yp(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Cp,Dp=new function(){}(new function(){});
function Ep(){var a,b,c,d;return B(function(e){switch(e.h){case 1:a=no();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=zo)f=/WebKit\/([0-9]+)/.exec(Uc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Uc()),f=!(f&&parseInt(f[1],10)>=602));if(f||gd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(wp(d,Dp),4);case 4:return e.yield(xp("yt-idb-test-do-not-use",Dp),5);case 5:return e.return(!0);case 2:return ya(e),e.return(!1)}})}
function Fp(){if(Cp!==void 0)return Cp;qo=!0;return Cp=Ep().then(function(a){qo=!1;var b;if((b=mo())!=null&&b.h){var c;b={hasSucceededOnce:((c=no())==null?void 0:c.hasSucceededOnce)||a};var d;(d=mo())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Gp(){return F("ytglobal.idbToken_")||void 0}
function Hp(){var a=Gp();return a?Promise.resolve(a):Fp().then(function(b){(b=b?Dp:void 0)&&E("ytglobal.idbToken_",b);return b})}
;var Ip=0;function Jp(a,b){Ip||(Ip=Ij.pa(function(){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:return h.yield(Hp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;wa(h,3);return h.yield(Ap(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(rp(f.actualName),7);case 7:return h.yield(xp(f.actualName,c),6);case 6:xa(h,4);break;case 3:g=ya(h),vo(g),d=!1;case 4:Ij.qa(Ip),Ip=0,d&&Jp(a,b),h.h=0}})}))}
function Kp(){var a;return B(function(b){return b.h==1?b.yield(Hp(),2):(a=b.i)?b.return(Bp(a)):b.return(!1)})}
new kj;function Lp(a){if(!Cn())throw a=new Ho("AUTH_INVALID",{dbName:a}),vo(a),a;var b=Dn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Mp(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Hp(),2);case 2:g=m.i;if(!g)throw h=Mo("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),vo(h),h;xo(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Lp(a);wa(m,3);return m.yield(wp(k,g),5);case 5:return m.yield(qp(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=ya(m),wa(m,7),m.yield(xp(k.actualName,
g),9);case 9:xa(m,8);break;case 7:ya(m);case 8:throw l;}})}
function Np(a,b,c){c=c===void 0?{}:c;return Mp(a,b,!1,c)}
function Op(a,b,c){c=c===void 0?{}:c;return Mp(a,b,!0,c)}
function Pp(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.h==1)return e.yield(Hp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();xo(a);d=Lp(a);return e.yield(rp(d.actualName,b),3)}return e.yield(xp(d.actualName,c),0)})}
function Qp(a,b,c){a=a.map(function(d){return B(function(e){return e.h==1?e.yield(rp(d.actualName,b),2):e.yield(xp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Rp(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.h==1)return d.yield(Hp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();xo("LogsDatabaseV2");return d.yield(zp(b),3)}c=d.i;return d.yield(Qp(c,a,b),0)})}
function Sp(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.h==1)return d.yield(Hp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();xo(a);return d.yield(rp(a,b),3)}return d.yield(xp(a,c),0)})}
;function Tp(a,b){sp.call(this,a,b);this.options=b;xo(a)}
w(Tp,sp);function Up(a,b){var c;return function(){c||(c=new Tp(a,b));return c}}
Tp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Op:Np)(a,b,Object.assign({},c))};
Tp.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?Sp:Pp)(this.name,a)};
function Vp(a,b){return Up(a,b)}
;var Wp={},Xp=Vp("ytGcfConfig",{Gb:(Wp.coldConfigStore={Nb:1},Wp.hotConfigStore={Nb:1},Wp),shared:!1,upgrade:function(a,b){b(1)&&(hp(ap(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),hp(ap(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Yp(a){return up(Xp(),a)}
function Zp(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:U()},g.yield(Yp(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(cp(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function $p(a,b,c,d){var e,f,g;return B(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:U()},h.yield(Yp(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(cp(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function aq(a){var b,c;return B(function(d){return d.h==1?d.yield(Yp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield($o(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return np(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function bq(a){var b,c;return B(function(d){return d.h==1?d.yield(Yp(a),2):d.h!=3?(b=d.i,c=void 0,d.yield($o(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return np(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function cq(){H.call(this);this.i=[];this.h=[];var a=F("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(z(a)),this.h=a):(this.h=[],E("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(cq,H);cq.prototype.ba=function(){for(var a=y(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;H.prototype.ba.call(this)};function dq(){this.h=0;this.i=new cq}
function eq(){var a;return(a=F("yt.gcf.config.hotConfigGroup"))!=null?a:R("RAW_HOT_CONFIG_GROUP")}
function fq(a,b,c){var d,e,f;return B(function(g){switch(g.h){case 1:if(!S("start_client_gcf")){g.A(0);break}c&&(a.j=c,E("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Gp();if(!d){g.A(3);break}if(c){g.A(4);break}return g.yield(bq(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(Zp(c,b,d),3);case 3:if(c)for(var h=c,k=y(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function gq(a,b,c){var d,e,f,g;return B(function(h){if(h.h==1){if(!S("start_client_gcf"))return h.A(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Gp())?c?h.A(4):h.yield(aq(d),5):h.A(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield($p(c,b,g,d),0)})}
function hq(){if(!dq.instance){var a=new dq;dq.instance=a}a=dq.instance;var b=U()-a.h;if(!(a.h!==0&&b<Bm("send_config_hash_timer"))){b=F("yt.gcf.config.coldConfigData");var c=F("yt.gcf.config.hotHashData"),d=F("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=U());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
dq.prototype.o=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function iq(){return"INNERTUBE_API_KEY"in $l&&"INNERTUBE_API_VERSION"in $l}
function jq(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),ye:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),wd:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Eh:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ae:R("INNERTUBE_CONTEXT_HL"),ze:R("INNERTUBE_CONTEXT_GL"),Be:R("INNERTUBE_HOST_OVERRIDE")||"",Ce:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Fh:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function kq(a){var b={client:{hl:a.Ae,gl:a.ze,clientName:a.wd,clientVersion:a.innertubeContextClientVersion,configInfo:a.ye}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Cm();c.length>0&&(b.request={internalExperimentFlags:c});c=a.wd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=fn()}(d=F("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(S("web_log_memory_total_kbytes")&&((e=D.navigator)==null?0:e.deviceMemory)){var f;e=(f=D.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=An())&&b&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&
(a=Bn())&&b&&(b.client.effectiveConnectionType=a);S("start_client_gcf")&&(e=hq())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=R("INNERTUBE_CONTEXT");var g;if(S("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=y(Object.entries(nm(R("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=y(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function lq(a,b,c){c=c===void 0?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+F("gapi.auth.getToken")().th:(a=jn(hn()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var mq=typeof TextEncoder!=="undefined"?new TextEncoder:null,nq=mq?function(a){return mq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var oq={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},pq={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function qq(a,b){this.version=a;this.args=b}
qq.prototype.serialize=function(){return{version:this.version,args:this.args}};function rq(a,b){this.topic=a;this.h=b}
rq.prototype.toString=function(){return this.topic};var sq=F("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.dc;N.prototype.publish=N.prototype.sb;N.prototype.clear=N.prototype.clear;E("ytPubsub2Pubsub2Instance",sq);var tq=F("ytPubsub2Pubsub2SubscribedKeys")||{};E("ytPubsub2Pubsub2SubscribedKeys",tq);var uq=F("ytPubsub2Pubsub2TopicToKeys")||{};E("ytPubsub2Pubsub2TopicToKeys",uq);var vq=F("ytPubsub2Pubsub2IsAsync")||{};E("ytPubsub2Pubsub2IsAsync",vq);
E("ytPubsub2Pubsub2SkipSubKey",null);function wq(a,b){var c=xq();c&&c.publish.call(c,a.toString(),a,b)}
function yq(a){var b=zq,c=xq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=F("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(tq[d])try{if(f&&b instanceof rq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Od){var l=new h;h.Od=l.version}var m=h.Od}catch(A){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var p=k.args,t=p.length;if(t>0){var v=Array(t);for(k=0;k<t;k++)v[k]=p[k];var x=v}else x=[];f=n.call(m,h,x)}catch(A){throw A.message="yt.pubsub2.Data.deserialize(): "+A.message,A;}}catch(A){throw A.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+A.message,A;}a.call(window,f)}catch(A){fm(A)}},vq[b.toString()]?F("yt.scheduler.instance")?Ij.pa(g):ym(g,0):g())});
tq[d]=!0;uq[b.toString()]||(uq[b.toString()]=[]);uq[b.toString()].push(d);return d}
function Aq(){var a=Bq,b=yq(function(c){a.apply(void 0,arguments);Cq(b)});
return b}
function Cq(a){var b=xq();b&&(typeof a==="number"&&(a=[a]),Nb(a,function(c){b.unsubscribeByKey(c);delete tq[c]}))}
function xq(){return F("ytPubsub2Pubsub2Instance")}
;function Dq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&wq("meta_logging_csi_event",{timerName:a,Yh:b})}
;var Eq=void 0,Fq=void 0;function Gq(){Fq||(Fq=yl(R("WORKER_SERIALIZATION_URL")));return Fq||void 0}
function Hq(){var a=Gq();Eq||a===void 0||(Eq=new Worker(kb(a),void 0));return Eq}
;var Iq=Bm("max_body_size_to_compress",5E5),Jq=Bm("min_body_size_to_compress",500),Kq=!0,Lq=0,Mq=0,Nq=Bm("compression_performance_threshold_lr",250),Oq=Bm("slow_compressions_before_abandon_count",4),Pq=!1,Qq=new Map,Rq=1,Sq=!0;function Tq(){if(typeof Worker==="function"&&Gq()&&!Pq){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Qq.get(c.key);d&&(Uq(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Qq.delete(c.key))}},b=Hq();
b&&(b.addEventListener("message",a),b.onerror=function(){Qq.clear()},Pq=!0)}}
function Vq(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:U(),ticks:{},infos:{}};if(Kq)try{var g=Wq(b);if(g!=null&&(g>Iq||g<Jq))d(a,c);else{if(S("gzip_gel_with_worker")&&(S("initial_gzip_use_main_thread")&&!Sq||!S("initial_gzip_use_main_thread"))){Pq||Tq();var h=Hq();if(h&&!e){Qq.set(Rq,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Rq});Rq++;return}}var k=wl(nq(b));Uq(k,f,a,c,d)}}catch(l){gm(l),d(a,c)}else d(a,c)}
function Uq(a,b,c,d,e){Sq=!1;var f=U();b.ticks.gelc=f;Mq++;S("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Nq&&(Lq++,S("abandon_compression_after_N_slow_zips")?Mq===Bm("compression_disable_point")&&Lq>Oq&&(Kq=!1):Kq=!1);Xq(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Yq(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=U(),e={startTime:d,ticks:{},infos:{}},f=b?F("yt.logging.gzipForFetch",!1):!0;if(Kq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=Wq(g);if(h!=null&&(h>Iq||h<Jq))return a;c=b?{level:1}:void 0;f=wl(nq(g),c);var k=U();e.ticks.gelc=k;if(b){Mq++;if((S("disable_compression_due_to_performance_degredation")||S("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Nq)if(Lq++,S("abandon_compression_after_N_slow_zips")||S("abandon_compression_after_N_slow_zips_lr")){b=Lq/Mq;var l=Oq/Bm("compression_disable_point");Mq>0&&Mq%Bm("compression_disable_point")===0&&b>=l&&(Kq=!1)}else Kq=!1;Xq(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return gm(m),a}}else return a}
function Wq(a){try{return(new Blob(a.split(""))).size}catch(b){return gm(b),null}}
function Xq(a){S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||Dq("gel_compression",a,{sampleRate:.1})}
;function Zq(a){a=Object.assign({},a);delete a.Authorization;var b=Zf();if(b){var c=new Mj;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=pd(c.digest(),3)}return a}
;var $q;function ar(){$q||($q=new lo("yt.innertube"));return $q}
function br(a,b,c,d){if(d)return null;d=ar().get("nextId",!0)||1;var e=ar().get("requests",!0)||{};e[d]={method:a,request:b,authState:Zq(c),requestTime:Math.round(U())};ar().set("nextId",d+1,86400,!0);ar().set("requests",e,86400,!0);return d}
function cr(a){var b=ar().get("requests",!0)||{};delete b[a];ar().set("requests",b,86400,!0)}
function dr(a){var b=ar().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(U())-d.requestTime<6E4)){var e=d.authState,f=Zq(lq(!1));mg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),er(a,d.method,e,{}));delete b[c]}}ar().set("requests",b,86400,!0)}}
;function fr(a){this.fc=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.yb=function(){};
this.now=Date.now;this.Rb=!1;var b;this.Md=(b=a.Md)!=null?b:100;var c;this.Hd=(c=a.Hd)!=null?c:1;var d;this.Fd=(d=a.Fd)!=null?d:2592E6;var e;this.Ed=(e=a.Ed)!=null?e:12E4;var f;this.Gd=(f=a.Gd)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.lc=!!a.lc;var h;this.jc=(h=a.jc)!=null?h:.1;var k;this.zc=(k=a.zc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.yb&&(this.yb=a.yb);a.Rb&&(this.Rb=a.Rb);a.fc&&(this.fc=a.fc);this.W=a.W;this.Ca=a.Ca;this.ga=a.ga;this.fa=a.fa;this.sendFn=a.sendFn;
this.Wc=a.Wc;this.Tc=a.Tc;gr(this)&&(!this.W||this.W("networkless_logging"))&&hr(this)}
function hr(a){gr(a)&&!a.Rb&&(a.h=!0,a.lc&&Math.random()<=a.jc&&a.ga.be(a.V),ir(a),a.fa.ta()&&a.cc(),a.fa.listen(a.Wc,a.cc.bind(a)),a.fa.listen(a.Tc,a.pd.bind(a)))}
r=fr.prototype;r.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(gr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.V).then(function(e){d.id=e;c.fa.ta()&&jr(c,d)}).catch(function(e){jr(c,d);
kr(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(gr(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.ta()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.V).catch(function(l){kr(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
kr(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(gr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.xb(d.id,c.V):e=!0;c.fa.mb&&c.W&&c.W("vss_network_hint")&&c.fa.mb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.V).then(function(g){d.id=g;e&&c.ga.xb(d.id,c.V)}).catch(function(g){kr(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.cc=function(){var a=this;if(!gr(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.pa(function(){var b;return B(function(c){if(c.h==1)return c.yield(a.ga.td("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(jr(a,b),3):(a.pd(),c.return());a.i&&(a.i=0,a.cc());c.h=0})},this.Md))};
r.pd=function(){this.Ca.qa(this.i);this.i=0};
function jr(a,b){var c;return B(function(d){switch(d.h){case 1:if(!gr(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.A(2);break}return d.yield(a.ga.Ge(b.id,a.V),3);case 3:(c=d.i)||a.yb(Error("The request cannot be found in the database."));case 2:if(lr(a,b,a.Fd)){d.A(4);break}a.yb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.A(5);break}return d.yield(a.ga.xb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=mr(a,
b));if(!b){d.A(0);break}if(!b.skipRetry||b.id===void 0){d.A(8);break}return d.yield(a.ga.xb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function mr(a,b){if(!gr(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.h){case 1:g=nr(f);(h=or(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.zc)){m.A(2);break}if(!a.fa.Dc){m.A(3);break}return m.yield(a.fa.Dc(),3);case 3:if(a.fa.ta()){m.A(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.A(6);
break}return m.yield(a.ga.Xc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.zc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.A(8);break}return b.sendCount<a.Hd?m.yield(a.ga.Xc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.ga.xb(b.id,a.V),8);case 12:a.Ca.pa(function(){a.fa.ta()&&a.cc()},a.Gd);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.A(2):h.yield(a.ga.xb(b.id,a.V),2);a.fa.mb&&a.W&&a.W("vss_network_hint")&&a.fa.mb(!0);d(e,f);h.h=0})};
return b}
function lr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function ir(a){if(!gr(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.td("QUEUED",a.V).then(function(b){b&&!lr(a,b,a.Ed)?a.Ca.pa(function(){return B(function(c){if(c.h==1)return b.id===void 0?c.A(2):c.yield(a.ga.Xc(b.id,a.V),2);ir(a);c.h=0})}):a.fa.ta()&&a.cc()})}
function kr(a,b){a.Rd&&!a.fa.ta()?a.Rd(b):a.handleError(b)}
function gr(a){return!!a.V||a.fc}
function nr(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function or(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var pr;
function qr(){if(pr)return pr();var a={};pr=Vp("LogsDatabaseV2",{Gb:(a.LogsRequestsStore={Nb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&ap(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),hp(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return pr()}
;function rr(a){return up(qr(),a)}
function sr(a,b){var c,d,e,f;return B(function(g){if(g.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(rr(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(cp(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=U();tr(c);return g.return(f)})}
function ur(a,b){var c,d,e,f,g,h,k,l;return B(function(m){if(m.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(rr(b),2);if(m.h!=3)return d=m.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,U()],h=IDBKeyRange.bound(f,g),k="prev",S("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield($o(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return np(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(p){p.getValue()&&(l=p.getValue(),a==="NEW"&&(l.status="QUEUED",p.update(l)))})}),3);
c.ticks.tc=U();tr(c);return m.return(l)})}
function vr(a,b){var c;return B(function(d){if(d.h==1)return d.yield(rr(b),2);c=d.i;return d.return($o(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Wo(f.h.put(g,void 0)).then(function(){return g})})}))})}
function wr(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.h==1)return f.yield(rr(b),2);e=f.i;return f.return($o(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),Wo(h.h.put(k,void 0)).then(function(){return k})):Qo.resolve(void 0)})}))})}
function xr(a,b){var c;return B(function(d){if(d.h==1)return d.yield(rr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function yr(a){var b,c;return B(function(d){if(d.h==1)return d.yield(rr(a),2);b=d.i;c=U()-2592E6;return d.yield($o(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return jp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return kp(f)})})}),0)})}
function zr(){B(function(a){return a.yield(Rp(),0)})}
function tr(a){S("nwl_csi_killswitch")||Dq("networkless_performance",a,{sampleRate:1})}
;var Ar={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,producerProjectDiskInsufficientExportFailure:516,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,
miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,
shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514,producerProjectElementModified:515};var Br={},Cr=Vp("ServiceWorkerLogsDatabase",{Gb:(Br.SWHealthLog={Nb:1},Br),shared:!0,upgrade:function(a,b){b(1)&&hp(ap(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Dr(a){return up(Cr(),a)}
function Er(a){var b,c;B(function(d){if(d.h==1)return d.yield(Dr(a),2);b=d.i;c=U()-2592E6;return d.yield($o(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return jp(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return kp(f)})})}),0)})}
function Fr(a){var b;return B(function(c){if(c.h==1)return c.yield(Dr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Gr={},Hr=0;function Ir(a){var b=b===void 0?{}:b;var c=new Image,d=""+Hr++;Gr[d]=c;c.onload=c.onerror=function(){delete Gr[d]};
b.Uh&&(c.referrerPolicy="no-referrer");c.src=a}
;var Jr;function Kr(){Jr||(Jr=new lo("yt.offline"));return Jr}
function Lr(a){if(S("offline_error_handling")){var b=Kr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Kr().set("errors",b,2592E3,!0)}}
;function Mr(){this.h=new Map;this.i=!1}
function Nr(){if(!Mr.instance){var a=F("yt.networkRequestMonitor.instance")||new Mr;E("yt.networkRequestMonitor.instance",a);Mr.instance=a}return Mr.instance}
Mr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Mr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Mr.prototype.removeParams=function(a){return a.split("?")[0]};
Mr.prototype.removeParams=Mr.prototype.removeParams;Mr.prototype.isEndpointCFR=Mr.prototype.isEndpointCFR;Mr.prototype.requestComplete=Mr.prototype.requestComplete;Mr.getInstance=Nr;function Or(){Rh.call(this);var a=this;this.j=!1;this.h=Hj();this.h.listen("networkstatus-online",function(){if(a.j&&S("offline_error_handling")){var b=Kr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new T(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;fm(d)}Kr().set("errors",{},2592E3,!0)}}})}
w(Or,Rh);function Pr(){if(!Or.instance){var a=F("yt.networkStatusManager.instance")||new Or;E("yt.networkStatusManager.instance",a);Or.instance=a}return Or.instance}
r=Or.prototype;r.ta=function(){return this.h.ta()};
r.mb=function(a){this.h.h=a};
r.ue=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
r.ke=function(){this.j=!0};
r.listen=function(a,b){return this.h.listen(a,b)};
r.Dc=function(a){a=Fj(this.h,a);a.then(function(b){S("use_cfr_monitor")&&Nr().requestComplete("generate_204",b)});
return a};
Or.prototype.sendNetworkCheckRequest=Or.prototype.Dc;Or.prototype.listen=Or.prototype.listen;Or.prototype.enableErrorFlushing=Or.prototype.ke;Or.prototype.getWindowStatus=Or.prototype.ue;Or.prototype.networkStatusHint=Or.prototype.mb;Or.prototype.isNetworkAvailable=Or.prototype.ta;Or.getInstance=Pr;function Qr(a){a=a===void 0?{}:a;Rh.call(this);var b=this;this.h=this.u=0;this.j=Pr();var c=F("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Rr(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Rr(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Sh(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Sh(b,"publicytnetworkstatus-offline")})))}
w(Qr,Rh);Qr.prototype.ta=function(){var a=F("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Qr.prototype.mb=function(a){var b=F("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Qr.prototype.Dc=function(a){var b=this,c;return B(function(d){c=F("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return S("skip_network_check_if_cfr")&&Nr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.mb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ta())})):c?d.return(c(a)):d.return(!0)})};
function Rr(a,b){a.rateLimit?a.h?(Ij.qa(a.u),a.u=Ij.pa(function(){a.o!==b&&(Sh(a,b),a.o=b,a.h=U())},a.rateLimit-(U()-a.h))):(Sh(a,b),a.o=b,a.h=U()):Sh(a,b)}
;var Sr;function Tr(){var a=fr.call;Sr||(Sr=new Qr({Kh:!0,Bh:!0}));a.call(fr,this,{ga:{be:yr,xb:xr,td:ur,Ge:vr,Xc:wr,set:sr},fa:Sr,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;b=new T(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code);gm(b,void 0,void 0,void 0,!0)}else fm(b)},
yb:gm,sendFn:Ur,now:U,Rd:Lr,Ca:ko(),Wc:"publicytnetworkstatus-online",Tc:"publicytnetworkstatus-offline",lc:!0,jc:.1,zc:Bm("potential_esf_error_limit",10),W:S,Rb:!(Cn()&&Vr())});this.j=new kj;S("networkless_immediately_drop_all_requests")&&zr();Sp("LogsDatabaseV2")}
w(Tr,fr);function Wr(){var a=F("yt.networklessRequestController.instance");a||(a=new Tr,E("yt.networklessRequestController.instance",a),S("networkless_logging")&&Hp().then(function(b){a.V=b;hr(a);a.j.resolve();a.lc&&Math.random()<=a.jc&&a.V&&Er(a.V);S("networkless_immediately_drop_sw_health_store")&&Xr(a)}));
return a}
Tr.prototype.writeThenSend=function(a,b){b||(b={});b=Yr(a,b);Cn()||(this.h=!1);fr.prototype.writeThenSend.call(this,a,b)};
Tr.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Yr(a,b);Cn()||(this.h=!1);fr.prototype.sendThenWrite.call(this,a,b,c)};
Tr.prototype.sendAndWrite=function(a,b){b||(b={});b=Yr(a,b);Cn()||(this.h=!1);fr.prototype.sendAndWrite.call(this,a,b)};
Tr.prototype.awaitInitialization=function(){return this.j.promise};
function Xr(a){var b;B(function(c){if(!a.V)throw b=Mo("clearSWHealthLogsDb"),b;return c.return(Fr(a.V).catch(function(d){a.handleError(d)}))})}
function Ur(a,b,c,d){d=d===void 0?!1:d;b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&Zr(a,b);if(S("use_request_time_ms_header"))b.headers&&rm(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(U())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Gm(a,void 0,"POST",f,void 0);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Gm(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new qc({url:a});if(k.u?typeof k.i!=="string"||k.i.length===0?0:{version:3,he:k.i,Yd:pc(k.j,"act=1","ri=1",rc(k))}:k.M&&{version:4,he:pc(k.j,"dct=1","suid="+k.o,""),Yd:pc(k.j,"act=1","ri=1","suid="+k.o)}){var l=dc(a),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(lc),p=kc(a,0,"ri",n);if(p<0)var t=null;else{var v=a.indexOf("&",p);if(v<0||v>n)v=n;var x=a.slice(p+3,v!==-1?v:0);t=decodeURIComponent(x.replace(/\+/g," "))}m=t!=="1"}var A=
!m;break b}}catch(I){}A=!1}if(A){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var G=!0;break b}}catch(I){}G=!1}c=G?!0:!1}else c=!1;c||Ir(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Vq(a,b.postBody,b,Km,d)):Vq(a,JSON.stringify(b.postParams),b,Jm,d):Km(a,b)}
function Yr(a,b){S("use_event_time_ms_header")&&rm(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(U())));return b}
function Zr(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Nr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Nr().requestComplete(a,!0);d(e,f)}}
function Vr(){return cc(document.location.toString())!=="www.youtube-nocookie.com"}
;var $r=!1,as=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:$r};E("ytNetworklessLoggingInitializationOptions",as);function bs(){var a;B(function(b){if(b.h==1)return b.yield(Hp(),2);a=b.i;if(!a||!Cn()&&!S("nwl_init_require_datasync_id_killswitch")||!Vr())return b.A(0);$r=!0;as.isNwlInitialized=$r;return b.yield(Wr().awaitInitialization(),0)})}
;function cs(a){var b=this;this.config_=null;a?this.config_=a:iq()&&(this.config_=jq());Fn(function(){dr(b)},5E3)}
cs.prototype.isReady=function(){!this.config_&&iq()&&(this.config_=jq());return!!this.config_};
function er(a,b,c,d){function e(n){n=n===void 0?!1:n;var p;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||S("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(p=br(b,c,l,k)),p)){var t=g.onSuccess,v=g.onFetchSuccess;g.onSuccess=function(G,I){cr(p);t(G,I)};
c.onFetchSuccess=function(G,I){cr(p);v(G,I)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Wr().writeThenSend(m,g):Wr().sendAndWrite(m,g);
else if(d.compress){var x=!d.networklessOptions.writeThenSend;if(g.postBody){var A=g.postBody;typeof A!=="string"&&(A=JSON.stringify(g.postBody));Vq(m,A,g,Km,x)}else Vq(m,JSON.stringify(g.postParams),g,Jm,x)}else S("web_all_payloads_via_jspb")?Km(m,g):Jm(m,g)}catch(G){if(G.name==="InvalidAccessError")p&&(cr(p),p=0),gm(Error("An extension is blocking network request."));else throw G;}p&&Fn(function(){dr(a)},5E3)}
!R("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&gm(new T("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new T("innertube xhrclient not ready",b,c,d);fm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Be)&&(h=f);var k=a.config_.Ce||!1,l=lq(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=pm(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(F("ytNetworklessLoggingInitializationOptions")?as.isNwlInitialized:$r)?Fp().then(function(n){e(n)}):e(!1)}
;var ds=0,es=id?"webkit":hd?"moz":fd?"ms":ed?"o":"";E("ytDomDomGetNextId",F("ytDomDomGetNextId")||function(){return++ds});var gs={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function hs(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in gs||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function is(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
hs.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
hs.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
hs.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ig=D.ytEventsEventsListeners||{};E("ytEventsEventsListeners",ig);var js=D.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",js);
function ks(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return hg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&mg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function ls(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=ks(a,b,c,d);if(e)return e;e=++js.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new hs(h);if(!wg(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new hs(h);
h.currentTarget=a;return c.call(a,h)};
g=em(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ms()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ig[e]=[a,b,c,g,d];return e}
function ns(a){a&&(typeof a=="string"&&(a=[a]),Nb(a,function(b){if(b in ig){var c=ig[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ms()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ig[b]}}))}
var ms=gi(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function ps(a){this.G=a;this.h=null;this.o=0;this.D=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=ls(window,"mousemove",Wa(this.Y,this));a=Wa(this.P,this);typeof a==="function"&&(a=em(a));this.Z=window.setInterval(a,25)}
ab(ps,H);ps.prototype.Y=function(a){a.h===void 0&&is(a);var b=a.h;a.i===void 0&&is(a);this.h=new eg(b,a.i)};
ps.prototype.P=function(){if(this.h){var a=U();if(this.o!=0){var b=this.D,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.D=this.h;this.j=(this.j+1)%4}};
ps.prototype.ba=function(){window.clearInterval(this.Z);ns(this.U)};var qs={};
function rs(a){var b=a===void 0?{}:a;a=b.Se===void 0?!1:b.Se;b=b.le===void 0?!0:b.le;if(F("_lact",window)==null){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;E("_lact",c,window);E("_fact",c,window);c==-1&&ss();ls(document,"keydown",ss);ls(document,"keyup",ss);ls(document,"mousedown",ss);ls(document,"mouseup",ss);a?ls(window,"touchmove",function(){xs("touchmove",200)},{passive:!0}):(ls(window,"resize",function(){xs("resize",200)}),b&&ls(window,"scroll",function(){xs("scroll",200)}));
new ps(function(){xs("mouse",100)});
ls(document,"touchstart",ss,{passive:!0});ls(document,"touchend",ss,{passive:!0})}}
function xs(a,b){qs[a]||(qs[a]=!0,Ij.pa(function(){ss();qs[a]=!1},b))}
function ss(){F("_lact",window)==null&&rs();var a=Date.now();E("_lact",a,window);F("_fact",window)==-1&&E("_fact",a,window);(a=F("ytglobal.ytUtilActivityCallback_"))&&a()}
function ys(){var a=F("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var zs=D.ytPubsubPubsubInstance||new N,As=D.ytPubsubPubsubSubscribedKeys||{},Bs=D.ytPubsubPubsubTopicToKeys||{},Cs=D.ytPubsubPubsubIsSynchronous||{};function Ds(a,b){var c=Es();if(c&&b){var d=c.subscribe(a,function(){function e(){As[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Cs[a]?e():ym(e,0)}catch(g){fm(g)}},void 0);
As[d]=!0;Bs[a]||(Bs[a]=[]);Bs[a].push(d);return d}return 0}
function Fs(a){var b=Es();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Nb(a,function(c){b.unsubscribeByKey(c);delete As[c]}))}
function Gs(a,b){var c=Es();c&&c.publish.apply(c,arguments)}
function Hs(a){var b=Es();if(b)if(b.clear(a),a)Is(a);else for(var c in Bs)Is(c)}
function Es(){return D.ytPubsubPubsubInstance}
function Is(a){Bs[a]&&(a=Bs[a],Nb(a,function(b){As[b]&&delete As[b]}),a.length=0)}
N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.dc;N.prototype.publish=N.prototype.sb;N.prototype.clear=N.prototype.clear;E("ytPubsubPubsubInstance",zs);E("ytPubsubPubsubTopicToKeys",Bs);E("ytPubsubPubsubIsSynchronous",Cs);E("ytPubsubPubsubSubscribedKeys",As);var Js=Symbol("injectionDeps");function Ks(a){this.name=a}
Ks.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Ls(a){this.key=a}
function Ms(a){return new Ls(a)}
function Ns(){this.i=new Map;this.j=new Map;this.h=new Map}
function Os(a,b){a.i.set(b.pb,b);var c=a.j.get(b.pb);if(c)try{c.Th(a.resolve(b.pb))}catch(d){c.Rh(d)}}
Ns.prototype.resolve=function(a){return a instanceof Ls?Ps(this,a.key,[],!0):Ps(this,a,[])};
function Ps(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.hd!==void 0)var e=d.hd;else if(d.zf)e=d[Js]?Qs(a,d[Js],c):[],e=d.zf.apply(d,z(e));else if(d.Fc){e=d.Fc;var f=e[Js]?Qs(a,e[Js],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(z(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Xh||a.h.set(b,e);return e}
function Qs(a,b,c){return b?b.map(function(d){return d instanceof Ls?Ps(a,d.key,c,!0):Ps(a,d,c)}):[]}
;var Rs;function Ss(){Rs||(Rs=new Ns);return Rs}
;var Ts=window;function Us(){var a,b;return"h5vcc"in Ts&&((a=Ts.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=Ts.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in Ts&&Ts.performance.mark&&Ts.performance.measure?2:0}
function Vs(a){var b=Us();switch(b){case 1:Ts.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Ts.performance.mark(a+"-start");break;case 0:break;default:yb(b,"unknown trace type")}}
function Ws(a){var b=Us();switch(b){case 1:Ts.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";Ts.performance.mark(c);Ts.performance.measure(a,b,c);break;case 0:break;default:yb(b,"unknown trace type")}}
;var Xs=S("web_enable_lifecycle_monitoring")&&Us()!==0,Ys=S("web_enable_lifecycle_monitoring");function Zs(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function $s(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?ko():d;this.j=c;this.scheduler=d;this.i=new kj;this.h=a;for(a={jb:0};a.jb<this.h.length;a={yc:void 0,jb:a.jb},a.jb++)a.yc=this.h[a.jb],c=function(e){return function(){e.yc.Nc();b.h[e.jb].Ac=!0;b.h.every(function(f){return f.Ac===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.yc),d=this.scheduler.Ra(c,d),this.h[a.jb]=Object.assign({},a.yc,{Nc:c,
jobId:d})}
function at(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=y(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.Ac||(a.scheduler.qa(c.jobId),a.scheduler.Ra(c.Nc,10))}
$s.prototype.cancel=function(){for(var a=y(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.Ac||this.scheduler.qa(b.jobId),b.Ac=!0;this.i.resolve()};
$s.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function bt(a){this.state=a;this.plugins=[];this.o=void 0;this.D={};Xs&&Vs(this.state)}
r=bt.prototype;r.install=function(a){this.plugins.push(a);return this};
r.uninstall=function(){var a=this;C.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
r.transition=function(a,b){var c=this;Xs&&Ws(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(at(this.j),this.j=void 0);ct(this,a,b);this.state=a;Xs&&Vs(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(dt(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function dt(a,b){var c=b.filter(function(e){return et(a,e)===10}),d=b.filter(function(e){return et(a,e)!==10});
return a.D.Wh?function(){var e=C.apply(0,arguments);return B(function(f){if(f.h==1)return f.yield(a.Ye.apply(a,[c].concat(z(e))),2);a.Jd.apply(a,[d].concat(z(e)));f.h=0})}:function(){var e=C.apply(0,arguments);
a.Ze.apply(a,[c].concat(z(e)));a.Jd.apply(a,[d].concat(z(e)))}}
r.Ze=function(a){for(var b=C.apply(1,arguments),c=ko(),d=y(a),e=d.next(),f={};!e.done;f={Sb:void 0},e=d.next())f.Sb=e.value,c.Lb(function(g){return function(){ft(g.Sb.name);gt(function(){return g.Sb.callback.apply(g.Sb,z(b))});
ht(g.Sb.name)}}(f))};
r.Ye=function(a){var b=C.apply(1,arguments),c,d,e,f,g;return B(function(h){h.h==1&&(c=ko(),d=y(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.A(0);f.Xa=e.value;f.ec=void 0;g=function(k){return function(){ft(k.Xa.name);var l=gt(function(){return k.Xa.callback.apply(k.Xa,z(b))});
de(l)?k.ec=S("web_lifecycle_error_handling_killswitch")?l.then(function(){ht(k.Xa.name)}):l.then(function(){ht(k.Xa.name)},function(m){Zs(m);
ht(k.Xa.name)}):ht(k.Xa.name)}}(f);
c.Lb(g);return f.ec?h.yield(f.ec,3):h.A(3)}f={Xa:void 0,ec:void 0};e=d.next();return h.A(2)})};
r.Jd=function(a){var b=C.apply(1,arguments),c=this,d=a.map(function(e){return{Nc:function(){ft(e.name);gt(function(){return e.callback.apply(e,z(b))});
ht(e.name)},
priority:et(c,e)}});
d.length&&(this.j=new $s(d))};
function et(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function ft(a){Xs&&a&&Vs(a)}
function ht(a){Xs&&a&&Ws(a)}
function ct(a,b,c){Ys&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ea.Object.defineProperties(bt.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function gt(a){if(S("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){Zs(b)}}
;function jt(a){bt.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var kt;w(jt,bt);jt.prototype.i=function(a,b){var c=this;this.h=Fn(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
jt.prototype.u=function(a,b){this.h&&(Ij.qa(this.h),this.h=null);a(b==null?void 0:b.event)};
function lt(){kt||(kt=new jt);return kt}
;var mt=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return mt});function nt(){this.store={};this.h={}}
nt.prototype.storePayload=function(a,b){a=ot(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);S("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
nt.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=pt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,z(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,z(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,z(this.smartExtractMatchingEntries(a))));return c};
nt.prototype.extractMatchingEntries=function(a){a=pt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,z(this.store[a[c]])),delete this.store[a[c]]);return b};
nt.prototype.getSequenceCount=function(a){a=pt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function pt(a,b){var c=ot(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&ot(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(qt(b.auth,g[0])){var h=b.isJspb;qt(h===void 0?"undefined":h?"true":"false",g[1])&&qt(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),qt(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function qt(a,b){return a===void 0||a==="undefined"?!0:a===b}
nt.prototype.getSequenceCount=nt.prototype.getSequenceCount;nt.prototype.extractMatchingEntries=nt.prototype.extractMatchingEntries;nt.prototype.smartExtractMatchingEntries=nt.prototype.smartExtractMatchingEntries;nt.prototype.storePayload=nt.prototype.storePayload;function ot(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function rt(a,b){if(a)return a[b.name]}
;var st=Bm("initial_gel_batch_timeout",2E3),tt=Bm("gel_queue_timeout_max_ms",6E4),ut=Bm("gel_min_batch_size",5),vt=void 0;function wt(){this.o=this.h=this.i=0;this.j=!1}
var xt=new wt,zt=new wt,At=new wt,Bt=new wt,Ct,Dt=!0,Et=D.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Et);var Ft={};function Gt(){var a=F("yt.logging.ims");a||(a=new nt,E("yt.logging.ims",a));return a}
function Ht(a,b){if(a.endpoint==="log_event"){It(a);var c=Jt(a),d=Kt(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=Ar[d||""];var f,g,h,k=Ss().resolve(Ms(dq))==null?void 0:(f=eq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!S("web_payload_policy_disabled_killswitch"))return;k=Lt(e.tier);if(k===400){Mt(a,b);return}}Ft[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};Gt().storePayload(c,a.payload);Nt(b,c,d==="gelDebuggingEvent")}}
function Nt(a,b,c){function d(){Ot({writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(vt=new a);a=Bm("tvhtml5_logging_max_batch_ads_fork")||Bm("tvhtml5_logging_max_batch")||Bm("web_logging_max_batch")||100;var f=U(),g=Pt(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=Gt().getSequenceCount(b));c>=1E3?d():c>=a?Ct||(Ct=Qt(function(){d();Ct=void 0},0)):f-h>=10&&(Rt(e,b.tier),g.o=f)}
function Mt(a,b){if(a.endpoint==="log_event"){S("more_accurate_gel_parser")&&Gt().storePayload({isJspb:!1},a.payload);It(a);var c=Jt(a),d=new Map;d.set(c,[a.payload]);var e=Kt(a.payload)||"";b&&(vt=new b);return new hi(function(f,g){vt&&vt.isReady()?St(d,vt,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Jt(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Et[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Ot(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new hi(function(e,f){var g=Pt(c,d),h=g.j;g.j=!1;Tt(g.i);Tt(g.h);g.h=0;vt&&vt.isReady()?d===void 0&&S("enable_web_tiered_gel")?Ut(e,f,a,b,c,300,h):Ut(e,f,a,b,c,d,h):(Rt(c,d),e())})}
function Ut(a,b,c,d,e,f,g){var h=vt;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=S("enable_web_tiered_gel")?Gt().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Gt().extractMatchingEntries(e),k.set(d,f);else for(d=y(Object.keys(Ft)),l=d.next();!l.done;l=d.next())l=l.value,e=S("enable_web_tiered_gel")?Gt().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Gt().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Ft[l];St(k,h,a,b,c,!1,g)}
function Rt(a,b){function c(){Ot({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=Pt(a,b),e=d===Bt||d===At?5E3:tt;S("web_gel_timeout_cap")&&!d.h&&(e=Qt(function(){c()},e),d.h=e);
Tt(d.i);e=R("LOGGING_BATCH_TIMEOUT",Bm("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Dt&&(e=st);e=Qt(function(){Bm("gel_min_batch_size")>0?Gt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=ut&&c():c()},e);
d.i=e}
function St(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(U()),k=a.size,l=(g===void 0?0:g)&&S("vss_through_gel_video_stats")?"video_stats":"log_event";a=y(a);var m=a.next();for(g={};!m.done;g={Sc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Vc:void 0,Uc:void 0},m=a.next()){var n=y(m.value);m=n.next().value;n=n.next().value;g.batchRequest=og({context:kq(b.config_||jq())});if(!Na(n)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=Et[m])&&
Vt(g.batchRequest,m,n);delete Et[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";Wt(g.batchRequest,h,g.dangerousLogToVisitorSession);S("always_send_and_write")&&(e.writeThenSend=!1);g.Vc=function(p){S("start_client_gcf")&&Ij.pa(function(){return B(function(t){return t.yield(Xt(p),0)})});
k--;k||c()};
g.Sc=0;g.Uc=function(p){return function(){p.Sc++;if(e.bypassNetworkless&&p.Sc===1)try{er(b,l,p.batchRequest,Yt({writeThenSend:!0},p.dangerousLogToVisitorSession,p.Vc,p.Uc,f)),Dt=!1}catch(t){fm(t),d()}k--;k||c()}}(g);
try{er(b,l,g.batchRequest,Yt(e,g.dangerousLogToVisitorSession,g.Vc,g.Uc,f)),Dt=!1}catch(p){fm(p),d()}}}
function Yt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,uh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};Zt()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function Wt(a,b,c){Zt()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),am("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Vt(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function It(a){var b=Am("il_payload_scraping");b=(b!==void 0?String(b):"")==="enable_il_payload_scraping";if(!F("yt.logging.transport.enableScrapingForTest"))if(b)mt=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",mt),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
E("yt.logging.transport.scrapeClientEvent",!0);else return;b=F("yt.logging.transport.scrapedPayloadsForTesting");var c=F("yt.logging.transport.payloadToScrape"),d=F("yt.logging.transport.scrapeClientEvent");if(c&&c.length>=1)for(var e=0;e<c.length;e++)if(a&&a.payload[c[e]])if(d)b.push(a.payload);else{var f=void 0;b.push(((f=a)==null?void 0:f.payload)[c[e]])}E("yt.logging.transport.scrapedPayloadsForTesting",b)}
function Zt(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Qt(a,b){return S("transport_use_scheduler")===!1?ym(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?Fn(function(){if(lt().currentState==="none")a();else{var c={};lt().install((c.none={callback:a},c))}},b):Fn(a,b)}
function Tt(a){S("transport_use_scheduler")?Ij.qa(a):window.clearTimeout(a)}
function Xt(a){var b,c,d,e,f,g,h,k,l,m;return B(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=rt(d,Cl),g=(f=d)==null?void 0:f.hotHashData,h=rt(d,Bl),l=(k=d)==null?void 0:k.coldHashData,(m=Ss().resolve(Ms(dq)))?g?e?n.yield(fq(m,g,e),2):n.yield(fq(m,g),2):n.A(2):n.return()):l?h?n.yield(gq(m,l,h),0):n.yield(gq(m,l),0):n.A(0)})}
function Pt(a,b){b=b===void 0?200:b;return a?b===300?Bt:zt:b===300?At:xt}
function Kt(a){a=Object.keys(a);a=y(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Ar[b])return b}
function Lt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var $t=D.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",$t);
function au(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=ys();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,$t[b]=b in $t?$t[b]+1:0,a.sequence={index:$t[b],groupKey:b},d.endOfSequence&&delete $t[d.sequenceGroup]);(d.sendIsolatedPayload?Mt:Ht)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function uo(a,b,c){c=c===void 0?{}:c;var d=cs;R("ytLoggingEventsDefaultDisabled",!1)&&cs===cs&&(d=null);au(a,b,d,c)}
;function bu(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var cu=new Set,du=0,eu=0,fu=0,gu=[],hu=[],iu=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function to(a){ju(a)}
function V(a){ju(a,"WARNING")}
function ku(a){a instanceof Error?ju(a):(a=Oa(a)?JSON.stringify(a):String(a),a=new T(a),a.name="RejectedPromiseError",V(a))}
function ju(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(du>=5))){d=[];e=y(hu);for(f=e.next();!f.done;f=e.next()){f=f.value;try{f()&&d.push(f())}catch(A){}}d=[].concat(z(gu),z(d));var k=Wb(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&
a.args&&a.args.length)for(var p=0;p<a.args.length&&!(n=bn(a.args[p],"params."+p,c,n),n>=500);p++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(p in t){if(t[p]){var v="params."+p,x=dn(t[p]);c[v]=x;n+=v.length+x.length;if(n>500)break}}else c.params=dn(t)}if(d.length)for(p=0;p<d.length&&!(n=bn(d[p],"params.context."+p,c,n),n>=500);p++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);p={message:e,name:f,lineNumber:m,
fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(p.lineNumber=p.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=Ym();c=y(a.Ya);for(d=c.next();!d.done;d=c.next())if(d=d.value,p.message&&p.message.match(d.Mh)){a=d.weight;break a}a=y(a.Ta);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(p)){a=c.weight;break a}a=1}p.sampleWeight=a;a=y(Tm);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.xc[p.name])for(e=y(c.xc[p.name]),d=e.next();!d.done;d=e.next())if(f=
d.value,d=p.message.match(f.regexp)){p.params["params.error.original"]=d[0];e=f.groups;f={};for(m=0;m<e.length;m++)f[e[m]]=d[m+1],p.params["params.error."+e[m]]=d[m+1];p.message=c.Rc(f);break}p.params||(p.params={});a=Ym();p.params["params.errorServiceSignature"]="msg="+a.Ya.length+"&cb="+a.Ta.length;p.params["params.serviceWorker"]="false";D.document&&D.document.querySelectorAll&&(p.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new rg(sg,"sample")).constructor!==
rg&&(p.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&window.yterr(p);if(p.sampleWeight!==0&&!cu.has(p.message)){if(g&&S("web_enable_error_204"))lu(b===void 0?"ERROR":b,p);else{b=b===void 0?"ERROR":b;b==="ERROR"?(Zm.sb("handleError",p),S("record_app_crashed_web")&&fu===0&&p.sampleWeight===1&&(fu++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},S("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:p.message}}}}),uo("appCrashed",
g)),eu++):b==="WARNING"&&Zm.sb("handleWarning",p);if(S("kevlar_gel_error_routing")){g=b;h=h===void 0?{}:h;b:{a=y(iu);for(c=a.next();!c.done;c=a.next())if(Ao(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:p.stack};p.fileName&&(c.filename=p.fileName);a=p.lineNumber&&p.lineNumber.split?p.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=
Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:p.message,errorClassName:p.name,sampleWeight:p.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));d=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!bm("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=p.params)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(uo("clientError",h),(g==="ERROR"||S("errors_flush_gel_always_killswitch"))&&Ot(void 0,void 0,!1))}S("suppress_error_204_logging")||
lu(b,p)}try{cu.add(p.message)}catch(A){}du++}}}
function lu(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=y(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=y(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];(c=R("LAVA_VERSION"))&&(a.postParams["lava.version"]=c);c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Km(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function mu(a){var b=C.apply(1,arguments);a.args||(a.args=[]);Array.isArray(a.args)&&a.args.push.apply(a.args,z(b))}
;function nu(){this.register=new Map}
function ou(a){a=y(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Qh("ABORTED")}
nu.prototype.clear=function(){ou(this);this.register.clear()};
var pu=new nu;var qu=Date.now().toString();
function ru(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(qu)for(a=1,b=0;b<qu.length;b++)d[a%16]^=d[(a-1)%16]/4^qu.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var su,tu=D.ytLoggingDocDocumentNonce_;tu||(tu=ru(),E("ytLoggingDocDocumentNonce_",tu));su=tu;function uu(a){this.h=a}
r=uu.prototype;r.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
r.getAsJspb=function(){var a=new El;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&jf(a,2,Ee(this.h.veType)),this.h.veCounter!==void 0&&jf(a,6,Ee(this.h.veCounter)),this.h.elementIndex!==void 0&&jf(a,3,Ee(this.h.elementIndex)),this.h.isCounterfactual&&jf(a,5,Ae(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();uf(a,El,7,b)}this.h.youtubeData!==void 0&&uf(a,Dl,8,this.h.jspbYoutubeData);return a};
r.toString=function(){return JSON.stringify(this.getAsJson())};
r.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
r.getLoggingDirectives=function(){return this.h.loggingDirectives};function vu(a){return R("client-screen-nonce-store",{})[a===void 0?0:a]}
function wu(a,b){b=b===void 0?0:b;var c=R("client-screen-nonce-store");c||(c={},am("client-screen-nonce-store",c));c[b]=a}
function xu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function yu(a){return R(xu(a===void 0?0:a))}
E("yt_logging_screen.getRootVeType",yu);function zu(){var a=R("csn-to-ctt-auth-info");a||(a={},am("csn-to-ctt-auth-info",a));return a}
function Au(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function Bu(a){a=vu(a===void 0?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
E("yt_logging_screen.getCurrentCsn",Bu);function Cu(a,b,c){var d=zu();(c=Bu(c))&&delete d[c];b&&(d[a]=b)}
function Du(a){return zu()[a]}
E("yt_logging_screen.getCttAuthInfo",Du);E("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==vu(c)||b!==R(xu(c)))if(Cu(a,d,c),wu(a,c),am(xu(c),b),b=function(){setTimeout(function(){a&&uo("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:su,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Eu(){var a=ng(Fu),b;return(new hi(function(c,d){a.onSuccess=function(e){xm(e)?c(new Gu(e)):d(new Hu("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Hu("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Hu("Request timed out","net.timeout",e))};
b=Km("//googleads.g.doubleclick.net/pagead/id",a)})).Ec(function(c){if(c instanceof qi){var d;
(d=b)==null||d.abort()}return mi(c)})}
function Hu(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(Hu,bb);function Gu(a){this.xhr=a}
;function Iu(){this.X=0;this.h=null}
Iu.prototype.then=function(a,b,c){return this.X===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:Ju(a):this.X===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:Ku(a):this};
Iu.prototype.getValue=function(){return this.h};
Iu.prototype.isRejected=function(){return this.X==2};
Iu.prototype.$goog_Thenable=!0;function Ku(a){var b=new Iu;a=a===void 0?null:a;b.X=2;b.h=a===void 0?null:a;return b}
function Ju(a){var b=new Iu;a=a===void 0?null:a;b.X=1;b.h=a===void 0?null:a;return b}
;function Lu(a){var b=R("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(ec(a)));return a}
function Mu(a){var b={};S("json_condensed_response")&&(b.prettyPrint="false");return a=qm(a,b||{},!1)}
function Nu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:rm(a)?"same-origin":"cors",credentials:rm(a)?"same-origin":"include"};b={};for(var d=y(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Ou(){return Xf()||(kd||ld)&&Ao("applewebkit")&&!Ao("version")&&(!Ao("safari")||Ao("gsa/"))||jd&&Ao("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function Pu(a){var b=a.docid||a.video_id||a.videoId||a.id;if(b)return b;b=a.raw_player_response;b||(a=a.player_response)&&(b=JSON.parse(a));return b&&b.videoDetails&&b.videoDetails.videoId||null}
;function Qu(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Il)if(Il[d]==c.embeddedPlayerMode){b=Il[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function Ru(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Su;this.isTimeout=a instanceof Hu&&a.errorCode=="net.timeout";this.isCanceled=a instanceof qi}
w(Ru,bb);Ru.prototype.name="BiscottiError";function Su(){bb.call(this,"Biscotti ID is missing from server")}
w(Su,bb);Su.prototype.name="BiscottiMissingError";var Fu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Tu=null;function Uu(){if(S("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Ou())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if(lg(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Qu(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Ul(){var a=Uu();if(a!==void 0)return mi(a);Tu||(Tu=Eu().then(Vu).Ec(function(b){return Wu(2,b)}));
return Tu}
function Vu(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new Su;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new Su;a=a.id;Vl(a);Tu=Ju(a);Xu(18E5,2);return a}
function Wu(a,b){b=new Ru(b);Vl("");Tu=Ku(b);a>0&&Xu(12E4,a-1);throw b;}
function Xu(a,b){ym(function(){Eu().then(Vu,function(c){return Wu(b,c)}).Ec(fi)},a)}
function Yu(){try{var a=F("yt.ads.biscotti.getId_");return a?a():Ul()}catch(b){return mi(b)}}
;var Ib=pa(["data-"]);function Zu(a){a&&(a.dataset?a.dataset[$u()]="true":Jb(a))}
function av(a){return a?a.dataset?a.dataset[$u()]:a.getAttribute("data-loaded"):null}
var bv={};function $u(){return bv.loaded||(bv.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function cv(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||ng(b);this.assets=a.assets||{};this.attrs=a.attrs||ng(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
cv.prototype.clone=function(){var a=new cv,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Ma(c)=="object"?a[b]=ng(c):a[b]=c}return a};var dv=["att/get"],ev=["share/get_share_panel"],fv=["share/get_web_player_share_panel"],gv=["feedback"],hv=["notification/modify_channel_preference"],iv=["browse/edit_playlist"],jv=["subscription/subscribe"],kv=["subscription/unsubscribe"];var lv=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};E("yt.msgs_",lv);function mv(a){Wl(lv,arguments)}
;function nv(a,b,c){ov(a,b,c===void 0?null:c)}
function pv(a){a=qv(a);var b=document.getElementById(a);b&&(Hs(a),b.parentNode.removeChild(b))}
function rv(a,b){a&&b&&(a=""+Ra(b),(a=sv[a])&&Fs(a))}
function ov(a,b,c){c=c===void 0?null:c;var d=qv(a),e=document.getElementById(d),f=e&&av(e),g=e&&!f;f?b&&b():(b&&(f=Ds(d,b),b=""+Ra(b),sv[b]=f),g||(e=tv(a,d,function(){av(e)||(Zu(e),Gs(d),ym(function(){Hs(d)},0))},c)))}
function tv(a,b,c,d){d=d===void 0?null:d;var e=ug("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Gb(e,zl(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function qv(a){var b=document.createElement("a");xb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+$b(a)}
var sv={};function uv(a){var b=vv(a),c=document.getElementById(b),d=c&&av(c);d||c&&!d||(c=wv(a,b,function(){if(!av(c)){Zu(c);Gs(b);var e=Xa(Hs,b);ym(e,0)}}))}
function wv(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=zl(a);Lb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function vv(a){var b=ug("A");xb(b,new qb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+$b(a)}
;function xv(a){var b=C.apply(1,arguments);if(!yv(a)||b.some(function(d){return!yv(d)}))throw Error("Only objects may be merged.");
b=y(b);for(var c=b.next();!c.done;c=b.next())zv(a,c.value)}
function zv(a,b){for(var c in b)if(yv(b[c])){if(c in a&&!yv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});zv(a[c],b[c])}else if(Av(b[c])){if(c in a&&!Av(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Bv(a[c],b[c])}else a[c]=b[c];return a}
function Bv(a,b){b=y(b);for(var c=b.next();!c.done;c=b.next())c=c.value,yv(c)?a.push(zv({},c)):Av(c)?a.push(Bv([],c)):a.push(c);return a}
function yv(a){return typeof a==="object"&&!Array.isArray(a)}
function Av(a){return typeof a==="object"&&Array.isArray(a)}
;var Cv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Dv(a,b){var c=c===void 0?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=cc(window.location.href);e&&d.push(e);e=cc(a);if(Mb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),xb(d,a),a=d.href)if(a=ec(a),a=fc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Bu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Ev(a,b,f)}else Ev(a,b)}
function Ev(a,b,c){a=Fv(a);b=b?ic(b):"";c=c||5;Ou()&&ln(a,b,c)}
function Fv(a){for(var b=y(Cv),c=b.next();!c.done;c=b.next())a=nc(a,c.value);return"ST-"+$b(a).toString(36)}
;function Gv(a){qq.call(this,1,arguments);this.csn=a}
w(Gv,qq);var zq=new rq("screen-created",Gv),Hv=[],Iv=0,Jv=new Map,Kv=new Map,Lv=new Map;
function Mv(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Nv({cttAuthInfo:Du(b)||void 0},b),g=y(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(jg(k)||!k.trackingParams&&!k.veType)&&V(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){var l=Ov(h,b);if(k.veType&&!Kv.has(l)&&!Lv.has(l)&&!e){if(!S("il_attach_cache_limit")||Jv.size<1E3){Jv.set(l,[a,b,c,h]);return}S("il_attach_cache_limit")&&Jv.size>1E3&&V(new T("IL Attach cache exceeded limit"))}h=Ov(c,b);Jv.has(h)?
Pv(c,b):Lv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Pb(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Qv("visualElementAttached",f,c):a?au("visualElementAttached",c,a,f):uo("visualElementAttached",c,f)}
function Qv(a,b,c){Hv.push({Re:a,payload:c,Hh:void 0,options:b});Iv||(Iv=Aq())}
function Bq(a){if(Hv){for(var b=y(Hv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,uo(c.Re,c.payload,c.options));Hv.length=0}Iv=0}
function Ov(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Pv(a,b){a=Ov(a,b);Jv.has(a)&&(b=Jv.get(a)||[],Mv(b[0],b[1],b[2],[b[3]],!0),Jv.delete(a))}
function Nv(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function Rv(){try{return!!self.localStorage}catch(a){return!1}}
;function Sv(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Tv(a){if(Rv()){var b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Sv(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function Uv(){if(!Rv())return!1;var a=Dn(),b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=Sv(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Vv(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(R("INNERTUBE_CLIENT_NAME")==="WEB"||R("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function Wv(a){if(R("LOGGED_IN",!0)&&Vv()){var b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=cc(window.location.href);c&&b.push(c);c=cc(a);Mb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=ec(a),(b=fc(b))?(b=Fv(b),b=(b=mn(b)||null)?nm(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;Vv()?(d||(d=R("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Dv(a,b)}}
;function Xv(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Dv(a,b);if(c)return!1;Wv(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;b=jc(a,e);Wv(b);a=void 0;a=a===void 0?ub:a;a:if(f=b+f,a=a===void 0?ub:a,!(f instanceof qb)){for(b=0;b<a.length;++b)if(c=a[b],c instanceof sb&&c.Ee(f)){f=new qb(f);break a}f=void 0}g=g.location;f=wb(f||rb);f!==void 0&&(g.href=f);return!0}
;function Yv(a){if(lg(R("PLAYER_VARS",{}))!="1"){a&&Tl();try{Yu().then(function(){},function(){}),ym(Yv,18E5)}catch(b){fm(b)}}}
;var Zv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function $v(){var a=a===void 0?window.location.href:a;if(S("kevlar_disable_theme_param"))return null;var b=dc(a);if(S("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=om(a).theme;return Zv.get(c)||null}catch(d){}return null}
;function aw(){this.h={};if(this.i=on()){var a=mn("CONSISTENCY");a&&bw(this,{encryptedTokenJarContents:a})}}
aw.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ga.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=y(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];bw(this,a)}};
function bw(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&ln("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var cw=window.location.hostname.split(".").slice(-2).join(".");function dw(){this.j=-1;var a=R("LOCATION_PLAYABILITY_TOKEN");R("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=ew(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var fw;function gw(){fw=F("yt.clientLocationService.instance");fw||(fw=new dw,E("yt.clientLocationService.instance",fw));return fw}
r=dw.prototype;
r.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
r.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,R("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=ew(this))&&this.h.set("yt-location-playability-token",a,15552E3):ln("YT_CL",JSON.stringify({loctok:a}),15552E3,cw,!0))};
function ew(a){return a.h===void 0?new lo("yt-client-location"):a.h}
r.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=ew(this))&&this.h.remove("yt-location-playability-token"):nn("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
r.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;R("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
r.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
r.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function hw(a,b,c){b=b===void 0?!1:b;c=c===void 0?!1:c;var d=R("INNERTUBE_CONTEXT");if(!d)return ju(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=og(d);S("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;
e.screenPixelDensity=Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=f===void 0?!1:f;sn();var g="USER_INTERFACE_THEME_LIGHT";vn(165)?g="USER_INTERFACE_THEME_DARK":vn(174)?g="USER_INTERFACE_THEME_LIGHT":!S("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(g="USER_INTERFACE_THEME_DARK");
f=f?g:$v()||g;e.userInterfaceTheme=f;if(!b){if(f=An())e.connectionType=f;S("web_log_effective_connection_type")&&(f=Bn())&&(d.client.effectiveConnectionType=f)}var h;if(S("web_log_memory_total_kbytes")&&((h=D.navigator)==null?0:h.deviceMemory)){var k;h=(k=D.navigator)==null?void 0:k.deviceMemory;d.client.memoryTotalKbytes=""+h*1E6}S("web_gcf_hashes_innertube")&&(f=hq())&&(k=f.coldConfigData,h=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},k&&(d.client.configInfo.coldConfigData=
k),h&&(d.client.configInfo.coldHashData=h),f&&(d.client.configInfo.hotHashData=f));k=om(D.location.href);!S("web_populate_internal_geo_killswitch")&&k.internalcountrycode&&(e.internalGeo=k.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo={graftUrl:D.location.href},S("kevlar_woffle")&&en.instance&&(k=en.instance,e.mainAppWebInfo.pwaInstallabilityStatus=!k.h&&k.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),e.mainAppWebInfo.webDisplayMode=
fn(),e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!S("web_lr_app_quality_killswitch")&&(k=R("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:k})),k=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:k}));if(!S("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch(Pa){}l=
void 0}l&&(e.timeZone=l)}(l=R("EXPERIMENTS_TOKEN",""))?e.experimentsToken=l:delete e.experimentsToken;l=Cm();aw.instance||(aw.instance=new aw);e=aw.instance.h;k=[];h=0;for(var m in e)k[h++]=e[m];d.request=Object.assign({},d.request,{internalExperimentFlags:l,consistencyTokenJars:k});!S("web_prequest_context_killswitch")&&(m=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=m);l=sn();m=vn(58);l=l.get("gsml","");d.user=Object.assign({},d.user);m&&(d.user.enableSafetyMode=
m);l&&(d.user.lockedSafetyMode=!0);S("warm_op_csn_cleanup")?c&&(b=Bu())&&(d.clientScreenNonce=b):!b&&(b=Bu())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=F("yt.mdx.remote.remoteClient_"))d.remoteClient=a;gw().setLocationOnInnerTubeContext(d);try{var n=sm(),p=n.bid;delete n.bid;d.adSignalsInfo={params:[],bid:p};for(var t=y(Object.entries(n)),v=t.next();!v.done;v=t.next()){var x=y(v.value),A=x.next().value,G=x.next().value;n=A;p=G;a=void 0;(a=d.adSignalsInfo.params)==
null||a.push({key:n,value:""+p})}var I,Z;if(((I=d.client)==null?void 0:I.clientName)==="TVHTML5"||((Z=d.client)==null?void 0:Z.clientName)==="TVHTML5_UNPLUGGED"){var ca=R("INNERTUBE_CONTEXT");ca.adSignalsInfo&&(d.adSignalsInfo.advertisingId=ca.adSignalsInfo.advertisingId,d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=ca.adSignalsInfo.limitAdTracking)}}catch(Pa){ju(Pa)}return d}
;function iw(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);R("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=R("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),R("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=R("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;function jw(){this.h={}}
jw.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
jw.prototype.get=function(a){if(this.contains(a))return this.h[a]};
jw.prototype.set=function(a,b){this.h[a]=b};
jw.prototype.remove=function(a){delete this.h[a]};function kw(){this.mappings=new jw}
kw.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
kw.prototype.get=function(a){var b=this.mappings.get(a.toString());a:switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=yb(b)}return a};
new kw;function lw(a){return function(){return new a}}
;var mw={},nw=(mw.WEB_UNPLUGGED="^unplugged/",mw.WEB_UNPLUGGED_ONBOARDING="^unplugged/",mw.WEB_UNPLUGGED_OPS="^unplugged/",mw.WEB_UNPLUGGED_PUBLIC="^unplugged/",mw.WEB_CREATOR="^creator/",mw.WEB_KIDS="^kids/",mw.WEB_EXPERIMENTS="^experiments/",mw.WEB_MUSIC="^music/",mw.WEB_REMIX="^music/",mw.WEB_MUSIC_EMBEDDED_PLAYER="^music/",mw.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",mw);
function ow(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=nw[b];if(c){c=new RegExp(c);for(var d=y(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(nw).forEach(function(g){var h=y(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=y(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function pw(){}
pw.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?kn:c;var d={context:hw(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);var f;b="/youtubei/v1/"+ow(this.j());(e=(f=rt(a.commandMetadata,Gl))==null?void 0:f.apiUrl)&&(b=e);f=Mu(Lu(b));a=Object.assign({},{command:a},void 0);d={input:f,Za:Nu(f),Ga:d,config:a};d.config.Ob?d.config.Ob.identity=c:d.config.Ob={identity:c};return d}c=new T("Error: Failed to create Request from Command.",a);ju(c)};
ea.Object.defineProperties(pw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function qw(){}
w(qw,pw);function rw(){}
w(rw,qw);rw.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",Za:Nu("/getDatasyncIdsEndpoint","GET"),Ga:{}}};
rw.prototype.j=function(){return[]};
rw.prototype.i=function(){};
rw.prototype.h=function(){};var sw={},tw=(sw.GET_DATASYNC_IDS=lw(rw),sw);function uw(a){var b;(b=F("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},E("ytcsi."+(a||"")+"data_",b));return b}
function vw(){var a=uw();a.info||(a.info={});return a.info}
function ww(a){a=uw(a);a.metadata||(a.metadata={});return a.metadata}
function xw(a){a=uw(a);a.tick||(a.tick={});return a.tick}
function yw(a){a=uw(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function zw(a){a=yw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Aw(a){var b=uw(a).nonce;b||(b=ru(),uw(a).nonce=b);return b}
;function Bw(){var a=F("ytcsi.debug");a||(a=[],E("ytcsi.debug",a),E("ytcsi.reference",{}));return a}
function Cw(a){a=a||"";var b=F("ytcsi.reference");b||(Bw(),b=F("ytcsi.reference"));if(b[a])return b[a];var c=Bw(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},Dw=(W.auto_search="LATENCY_ACTION_AUTO_SEARCH",W.ad_to_ad="LATENCY_ACTION_AD_TO_AD",W.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",W.app_startup="LATENCY_ACTION_APP_STARTUP",W.browse="LATENCY_ACTION_BROWSE",W.cast_splash="LATENCY_ACTION_CAST_SPLASH",W.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",W.channels="LATENCY_ACTION_CHANNELS",W.chips="LATENCY_ACTION_CHIPS",W.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",W.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",W.editor=
"LATENCY_ACTION_EDITOR",W.embed="LATENCY_ACTION_EMBED",W.embed_no_video="LATENCY_ACTION_EMBED_NO_VIDEO",W.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",W.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",W.explore="LATENCY_ACTION_EXPLORE",W.favorites="LATENCY_ACTION_FAVORITES",W.home="LATENCY_ACTION_HOME",W.inboarding="LATENCY_ACTION_INBOARDING",W.landing="LATENCY_ACTION_LANDING",W.library="LATENCY_ACTION_LIBRARY",W.live="LATENCY_ACTION_LIVE",
W.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",W.management="LATENCY_ACTION_MANAGEMENT",W.mini_app="LATENCY_ACTION_MINI_APP_PLAY",W.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",W.onboarding="LATENCY_ACTION_ONBOARDING",W.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",W.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",W.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",W.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",W.prebuffer=
"LATENCY_ACTION_PREBUFFER",W.prefetch="LATENCY_ACTION_PREFETCH",W.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",W.profile_switcher="LATENCY_ACTION_LOGIN",W.projects="LATENCY_ACTION_PROJECTS",W.reel_watch="LATENCY_ACTION_REEL_WATCH",W.results="LATENCY_ACTION_RESULTS",W.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",W.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",W.review="LATENCY_ACTION_REVIEW",W.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",
W.search_ui="LATENCY_ACTION_SEARCH_UI",W.search_suggest="LATENCY_ACTION_SUGGEST",W.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",W.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",W.seek="LATENCY_ACTION_PLAYER_SEEK",W.settings="LATENCY_ACTION_SETTINGS",W.store="LATENCY_ACTION_STORE",W.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",W.tenx="LATENCY_ACTION_TENX",W.video_preview="LATENCY_ACTION_VIDEO_PREVIEW",W.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",W.watch="LATENCY_ACTION_WATCH",
W.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",W["watch,watch7"]="LATENCY_ACTION_WATCH",W["watch,watch7_html5"]="LATENCY_ACTION_WATCH",W["watch,watch7ad"]="LATENCY_ACTION_WATCH",W["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",W.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",W.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",W.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",W.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",W.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",
W.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",W.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",W.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",W);function Ew(a,b){qq.call(this,1,arguments);this.timer=b}
w(Ew,qq);var Fw=new rq("aft-recorded",Ew);E("ytLoggingGelSequenceIdObj_",D.ytLoggingGelSequenceIdObj_||{});var Gw=D.ytLoggingLatencyUsageStats_||{};E("ytLoggingLatencyUsageStats_",Gw);function Hw(){this.h=0}
function Iw(){Hw.instance||(Hw.instance=new Hw);return Hw.instance}
Hw.prototype.tick=function(a,b,c,d){Jw(this,"tick_"+a+"_"+b)||uo("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Hw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Jw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,uo("latencyActionInfo",a,{cttAuthInfo:c}))};
Hw.prototype.jspbInfo=function(){};
Hw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Jw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,uo("latencyActionSpan",a,{cttAuthInfo:c}))};
function Jw(a,b){Gw[b]=Gw[b]||{count:0};var c=Gw[b];c.count++;c.time=U();a.h||(a.h=Fn(function(){var d=U(),e;for(e in Gw)Gw[e]&&d-Gw[e].time>6E4&&delete Gw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new T("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||V(c)),!0):!1}
;var Kw=window;function Lw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Mw(){var a;if(S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=X==null?void 0:(a=X.getEntriesByType)==null?void 0:(b=a.call(X,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Nw(e.requestStart),e.responseEnd=Nw(e.responseEnd),e.redirectStart=Nw(e.redirectStart),e.redirectEnd=Nw(e.redirectEnd),e.domainLookupEnd=Nw(e.domainLookupEnd),e.connectStart=Nw(e.connectStart),e.connectEnd=
Nw(e.connectEnd),e.responseStart=Nw(e.responseStart),e.secureConnectionStart=Nw(e.secureConnectionStart),e.domainLookupStart=Nw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=X.timing}else a=S("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(X.timing)):X.timing;return a}
function Nw(a){return Math.round(Ow()+a)}
function Ow(){return(S("csi_use_time_origin")||S("csi_use_time_origin_tvhtml5"))&&X.timeOrigin?Math.floor(X.timeOrigin):X.timing.navigationStart}
var X=Kw.performance||Kw.mozPerformance||Kw.msPerformance||Kw.webkitPerformance||new Lw;var Pw=!1,Qw=!1,Rw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj",'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"};Wa(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||fi,X);function Sw(a,b){if(!S("web_csi_action_sampling_enabled")||!uw(b).actionDisabled){var c=Cw(b||"");xv(c.info,a);a.loadType&&(c=a.loadType,ww(b).loadType=c);xv(zw(b),a);c=Aw(b);b=uw(b).cttAuthInfo;Iw().info(a,c,b)}}
function Tw(){var a,b,c,d;return((d=Ss().resolve(Ms(dq))==null?void 0:(a=eq())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Y(a,b,c){if(!S("web_csi_action_sampling_enabled")||!uw(c).actionDisabled){var d=Aw(c),e;if(e=S("web_csi_debug_sample_enabled")&&d){(Ss().resolve(Ms(dq))==null?0:eq())&&!Qw&&(Qw=!0,Y("gcfl",U(),c));var f,g,h;e=(Ss().resolve(Ms(dq))==null?void 0:(f=eq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=Tw();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;uw(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,Sw(f,c));uw(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,X.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||S("web_csi_disable_alt_time_performance_mark"))X.mark(e);else{f=S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")?f-X.timeOrigin:f-(X.timeOrigin||X.timing.navigationStart);try{X.mark(e,
{startTime:f})}catch(k){}}e=Cw(c||"");e.tick[a]=b||U();if(e.callback&&e.callback[a])for(e=y(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=yw(c);e.gelTicks&&(e.gelTicks[a]=!0);f=xw(c);e=b||U();S("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=uw(c).cttAuthInfo;a==="_start"?(a=Iw(),Jw(a,"baseline_"+d)||uo("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Iw().tick(a,d,b,f);Uw(c);return e}}}
function Vw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=es+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Ww(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=y(Object.entries(R("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=y(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function Xw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Ab(document)&&a.setAttribute("nonce",Ab(document));return c?(a=X.getEntriesByName(c))&&a[0]&&(a=a[0],c=Ow(),Y("rsf_"+b,c+Math.round(a.fetchStart)),Y("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function Yw(){var a=window.location.protocol,b=X.getEntriesByType("resource");b=Ob(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Qb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Y("wffs",Nw(b.startTime)),Y("wffe",Nw(b.responseEnd)))}
function Zw(a){var b=$w("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=$w(b[d],a);if(e)return e}return NaN}
function $w(a,b){if(a=xw(b)[a])return typeof a==="number"?a:a[a.length-1]}
function Uw(a){var b=$w("_start",a),c=Zw(a),d=!Pw;b&&c&&d&&(wq(Fw,new Ew(Math.round(c-b),a)),Pw=!0)}
function ax(){if(X.getEntriesByType){var a=X.getEntriesByType("paint");if(a=Sb(a,function(c){return c.name==="first-paint"}))return Nw(a.startTime)}var b;
S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")?b=X.getEntriesByType("first-paint")[0].startTime:b=X.timing.Oh;return b?Math.max(0,b):0}
;function bx(a,b){em(function(){Cw("").info.actionType=a;b&&am("TIMING_AFT_KEYS",b);am("TIMING_ACTION",a);var c=Ww();Object.keys(c).length>0&&Sw(c);c={isNavigation:!0,actionType:Dw[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=R("PREVIOUS_ACTION");d&&(c.previousAction=Dw[d]||"LATENCY_ACTION_UNKNOWN");if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Bu())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=Vw();if(d===1||d===-1)c.isVisible=!0;ww();vw();
c.loadType="cold";d=vw();var e=Mw(),f=Ow(),g=R("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!S("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Y("srt",e.responseStart),d.prerender!==1&&Y("_start",f,void 0));d=ax();d>0&&Y("fpt",d);d=Mw();d.isPerformanceNavigationTiming&&Sw({performanceNavigationTiming:!0},void 0);Y("nreqs",d.requestStart,void 0);Y("nress",d.responseStart,void 0);Y("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Y("nrs",d.redirectStart,void 0),Y("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Y("ndnss",d.domainLookupStart,void 0),Y("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Y("ntcps",d.connectStart,void 0),Y("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Ow()&&d.connectEnd-d.secureConnectionStart>0&&(Y("nstcps",d.secureConnectionStart,void 0),Y("ntcpe",d.connectEnd,void 0));X&&"getEntriesByType"in X&&Yw();d=[];if(document.querySelector&&X&&X.getEntriesByName)for(var h in Rw)Rw.hasOwnProperty(h)&&(e=Rw[h],
Xw(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=y(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});Sw(c);c=yw();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=zw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(ww().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=xw();e=yw();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Y(k,$w(k));else if(S("log_repeated_ytcsi_ticks"))for(f=
y(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Y(k.slice(1),g);k={};d=!1;h=y(h);for(e=h.next();!e.done;e=h.next())d=e.value,xv(c,d),xv(k,d),d=!0;d&&Sw(k)}E("ytglobal.timingready_",!0);k=R("TIMING_ACTION");F("ytglobal.timingready_")&&k&&cx()&&Zw()&&Uw()})()}
function cx(a){return em(function(){return dx("_start",a)})()}
function ex(a,b,c){em(Sw)(a,b,c===void 0?!1:c)}
function fx(a,b,c){return em(Y)(a,b,c)}
function dx(a,b){return em(function(){var c=xw(b);return a in c})()}
function gx(a){if(!S("universal_csi_network_ticks"))return"";a=dc(a)||"";for(var b=Object.keys(oq),c=0;c<b.length;c++){var d=b[c];if(a.includes(d))return d}return""}
function hx(a){if(!S("universal_csi_network_ticks"))return function(){};
var b=oq[a];return b?(ix(b),function(){var c=S("universal_csi_network_ticks")?(c=pq[a])?ix(c):!1:!1;return c}):function(){}}
function ix(a){return em(function(){if(dx(a))return!1;fx(a,void 0,void 0);return!0})()}
function jx(a){em(function(){if(!cx("attestation_challenge_fetch")||dx(a,"attestation_challenge_fetch"))return!1;fx(a,void 0,"attestation_challenge_fetch");return!0})()}
function kx(){em(function(){var a=Aw();requestAnimationFrame(function(){setTimeout(function(){a===Aw()&&fx("ol",void 0,void 0)},0)})})()}
var lx=window;lx.ytcsi&&(lx.ytcsi.infoGel=ex,lx.ytcsi.tick=fx);var mx="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),nx=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function ox(a,b,c,d){this.u=a;this.fa=b;this.j=c;this.o=d;this.i=void 0;this.h=new Map;a.Zb||(a.Zb={});a.Zb=Object.assign({},tw,a.Zb)}
function px(a,b,c,d){if(ox.instance!==void 0){if(d=ox.instance,a=[a!==d.u,b!==d.fa,c!==d.j,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new T("InnerTubeTransportService is already initialized",a);
}else ox.instance=new ox(a,b,c,d)}
function qx(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?kn:c;var d=rx(a,b);return d?new hi(function(e,f){var g,h,k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.u(b,void 0,c);if(!h){f(new T("Error: Failed to build request for command.",b));n.A(0);break}Wv(h.input);l=((k=h.Za)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.j.Ld){m=sx(h.config,l);n.A(4);break}return n.yield(tx(h.config,l),5);case 5:m=n.i;case 4:e(ux(a,h,m)),n.h=
0}})}):mi(new T("Error: No request builder found for command.",b))}
function vx(a,b){function c(){}
var d="/youtubei/v1/"+ow(dv);var e=e===void 0?{Ob:{identity:kn}}:e;var f=f===void 0?!0:f;c=hx(gx(d));b.context||(b.context=hw(void 0,f));return new hi(function(g){var h,k,l,m,n;return B(function(p){if(p.h==1)return h=Lu(d),k=rm(h)?"same-origin":"cors",a.j.Ld?(l=sx(e,k),p.A(2)):p.yield(tx(e,k),3);p.h!=2&&(l=p.i);m=Mu(Lu(d));n={input:m,Za:Nu(m),Ga:b,config:e};g(ux(a,n,l,c));p.h=0})})}
function wx(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.o){d=y(mx);for(var e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&a.o[e].handleResponse(b,c)}}
function ux(a,b,c,d){d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,p,t,v,x,A,G,I,Z,ca,Pa,Rb,Ya,Bb,Za,Qa,Ja,Ia,jh,ts,us,vs,ws;return B(function(ha){switch(ha.h){case 1:ha.A(2);break;case 3:if((e=ha.i)&&!e.isExpired())return ha.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ga)==null?0:g.context)){ha.A(4);break}h=b.Ga.context;ha.A(5);break;case 5:k=y([]),l=k.next();case 8:if(l.done){ha.A(4);break}m=l.value;return ha.yield(m.Ph(h),9);case 9:l=k.next();ha.A(8);break;case 4:if((n=a.i)==null||!n.Vh(b.input,b.Ga)){ha.A(12);break}return ha.yield(a.i.Jh(b.input,
b.Ga),13);case 13:return p=ha.i,wx(a,p,b),ha.return(p);case 12:return(x=(v=b.config)==null?void 0:v.Sh)&&a.h.has(x)?t=a.h.get(x):(A=JSON.stringify(b.Ga),Z=(I=(G=b.Za)==null?void 0:G.headers)!=null?I:{},b.Za=Object.assign({},b.Za,{headers:Object.assign({},Z,c)}),ca=Object.assign({},b.Za),b.Za.method==="POST"&&(ca=Object.assign({},ca,{body:A})),((Pa=b.config)==null?0:Pa.We)&&fx(b.config.We),Rb=function(){return a.fa.fetch(b.input,ca,b.config)},t=Rb(),x&&a.h.set(x,t)),ha.yield(t,14);
case 14:if((Ya=ha.i)&&"error"in Ya&&((Bb=Ya)==null?0:(Za=Bb.error)==null?0:Za.details))for(Qa=Ya.error.details,Ja=y(Qa),Ia=Ja.next();!Ia.done;Ia=Ja.next())jh=Ia.value,(ts=jh["@type"])&&nx.indexOf(ts)>-1&&(delete jh["@type"],Ya=jh);x&&a.h.has(x)&&a.h.delete(x);((us=b.config)==null?0:us.Xe)&&fx(b.config.Xe);if(Ya||(vs=a.i)==null||!vs.wh(b.input,b.Ga)){ha.A(15);break}return ha.yield(a.i.Ih(b.input,b.Ga),16);case 16:Ya=ha.i;case 15:return wx(a,Ya,b),((ws=b.config)==null?0:ws.Te)&&fx(b.config.Te),d(),
ha.return(Ya||void 0)}})}
function rx(a,b){a:{a=a.u;var c,d=(c=rt(b,Hl))==null?void 0:c.signal;if(d&&a.Zb&&(c=a.Zb[d])){var e=c();break a}var f;if((c=(f=rt(b,Fl))==null?void 0:f.request)&&a.ee&&(f=a.ee[c])){e=f();break a}for(e in b)if(a.Ic[e]&&(b=a.Ic[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function tx(a,b){var c,d,e,f;return B(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Ob)==null?void 0:d.sessionIndex;var h=g.yield;var k=jn(0,{sessionIndex:e});if(!(k instanceof hi)){var l=new hi(fi);ii(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},iw(b),f)))})}
function sx(a,b){var c;a=a==null?void 0:(c=a.Ob)==null?void 0:c.sessionIndex;c=jn(0,{sessionIndex:a});return Object.assign({},iw(b),c)}
;var xx=new Ks("INNERTUBE_TRANSPORT_TOKEN");function yx(){}
w(yx,qw);yx.prototype.j=function(){return jv};
yx.prototype.i=function(a){return rt(a,Sl)||void 0};
yx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(yx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function zx(){}
w(zx,qw);zx.prototype.j=function(){return kv};
zx.prototype.i=function(a){return rt(a,Rl)||void 0};
zx.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(zx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var Ax=new Ks("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function Bx(a){this.M=a}
w(Bx,qw);Bx.prototype.j=function(){return ev};
Bx.prototype.i=function(a){return rt(a,Ll)||rt(a,Ml)||rt(a,Kl)};
Bx.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.M)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.M.i(b.clientParamIdentifier)}};
Bx[Js]=[Ax];function Cx(){}
w(Cx,qw);Cx.prototype.j=function(){return gv};
Cx.prototype.i=function(a){return rt(a,Jl)||void 0};
Cx.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(Cx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Dx(){}
w(Dx,qw);Dx.prototype.j=function(){return hv};
Dx.prototype.i=function(a){return rt(a,Pl)||void 0};
Dx.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Ex(){}
w(Ex,qw);Ex.prototype.j=function(){return iv};
Ex.prototype.i=function(a){return rt(a,Ol)||void 0};
Ex.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Fx(){}
w(Fx,qw);Fx.prototype.j=function(){return fv};
Fx.prototype.i=function(a){return rt(a,Nl)};
Fx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Gx=new Ks("FETCH_FN_TOKEN"),Hx=new Ks("PARSE_FN_TOKEN"),Ix=new Ks("WINDOW_REQUEST_TOKEN");function Jx(a,b){var c=C.apply(2,arguments);a=a===void 0?0:a;T.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(Jx,T);var Kx=new Ks("NETWORK_SLI_TOKEN");function Lx(a,b,c,d){this.h=a;this.i=b;this.j=c;this.o=d}
Lx.prototype.fetch=function(a,b,c){var d=this,e,f,g;return B(function(h){e=Mx(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){V(k);
if((c==null?0:c.pe)&&k instanceof Jx&&k.errorType===1)return Promise.reject(k)}))})};
function Mx(a,b,c){if(a.h){var d=dc(nc(b,"key"))||"/UNKNOWN_PATH";a.h.start(d)}d=c;S("wug_networking_gzip_request")&&(d=Yq(c));var e;return new ((e=a.o)!=null?e:window.Request)(b,d)}
Lx.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.Fe)&&a.ok)return Cf(b.Fe,e);e=e.replace(")]}'","");if((b==null?0:b.pe)&&e)try{var f=d(e)}catch(h){throw new Jx(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Dh(),c=c.then(function(e){V(new T("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
Lx[Js]=[Ms(Kx),Ms(Gx),Ms(Hx),Ms(Ix)];var Nx=new Ks("NETWORK_MANAGER_TOKEN");var Ox;function Px(a){var b=new gj;if(a.interpreterJavascript){var c=xl(a.interpreterJavascript);c=Eb(c).toString();var d=new ej;zf(d,6,c);uf(b,ej,1,d,Wd)}else a.interpreterUrl&&(c=yl(a.interpreterUrl),c=kb(c).toString(),d=new fj,zf(d,4,c),uf(b,fj,2,d,Wd));a.interpreterHash&&Af(b,3,a.interpreterHash);a.program&&Af(b,4,a.program);a.globalName&&Af(b,5,a.globalName);a.clientExperimentsStateBlob&&Af(b,7,a.clientExperimentsStateBlob);return b}
function Qx(a){var b={};a=y(a.split("&"));for(var c=a.next();!c.done;c=a.next())c=c.value.split("="),c.length===2&&(b[c[0]]=c[1]);return b}
;function xc(){if(S("bg_st_hr"))return"havuokmhhs-0";var a,b=((a=performance)==null?void 0:a.timeOrigin)||0;return"havuokmhhs-"+Math.floor(b)}
function Rx(a){this.h=a}
Rx.prototype.bindInnertubeChallengeFetcher=function(a){this.h.bicf(a)};
Rx.prototype.registerChallengeFetchedCallback=function(a){this.h.bcr(a)};
Rx.prototype.getLatestChallengeResponse=function(){return this.h.blc()};
function Sx(){return new Promise(function(a){var b=window.top;b.ntpevasrs!==void 0?a(new Rx(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(function(c){a(new Rx(c))}))})}
;var Tx=[],Ux=!1;function Vx(){if(!S("disable_biscotti_fetch_for_ad_blocker_detection")&&!S("disable_biscotti_fetch_entirely_for_all_web_clients")&&Ou()){var a=R("PLAYER_VARS",{});if(lg(a)!="1"&&!Qu(a)){var b=function(){Ux=!0;"google_ad_status"in window?am("DCLKSTAT",1):am("DCLKSTAT",2)};
try{nv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Tx.push(Ij.pa(function(){if(!(Ux||"google_ad_status"in window)){try{rv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}Ux=!0;am("DCLKSTAT",3)}},5E3))}}}
function Wx(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function Xx(a){this.h=a}
[new Xx("b.f_"),new Xx("j.s_"),new Xx("r.s_"),new Xx("e.h_"),new Xx("i.s_"),new Xx("s.t_"),new Xx("p.h_"),new Xx("s.i_"),new Xx("f.i_"),new Xx("a.b_"),new Xx("a.o_"),new Xx("g.o_"),new Xx("p.i_"),new Xx("p.m_"),new Xx("n.k_"),new Xx("i.f_"),new Xx("a.s_"),new Xx("m.c_"),new Xx("n.h_"),new Xx("o.p_")].reduce(function(a,b){a[b.h]=b;return a},{});function Yx(a,b,c){var d=this;this.network=a;this.options=b;this.o=c;this.h=null;if(b.ai){var e=new kj;this.h=e.promise;D.ytAtRC&&Ij.Ra(function(){var f,g;return B(function(h){if(h.h==1){if(!D.ytAtRC)return h.return();f=Zx(null);return h.yield(d.hb(f),2)}g=h.i;D.ytAtRC&&D.ytAtRC(JSON.stringify(g));h.h=0})},2);
Sx().then(function(f){var g,h,k,l;return B(function(m){if(m.h==1)return f.bindInnertubeChallengeFetcher(function(n){return d.hb(Zx(n))}),m.yield(wc(),2);
g=m.i;h=f.getLatestChallengeResponse();k=h.challenge;if(!k)throw Error("BGE_MACIL");l={challenge:k,fb:Qx(k),vm:g,bgChallenge:new gj};e.resolve(l);f.registerChallengeFetchedCallback(function(n){n=n.challenge;if(!n)throw Error("BGE_MACR");n={challenge:n,fb:Qx(n),vm:g,bgChallenge:new gj};d.h=Promise.resolve(n)});
m.h=0})})}else b.preload&&$x(this,new Promise(function(f){Fn(function(){f(ay(d))},0)}))}
Yx.prototype.j=function(){var a=this;return B(function(b){return b.h==1?b.yield(Promise.race([a.h,null]),2):b.return(!!b.i)})};
Yx.prototype.i=function(a,b,c){var d=this,e,f,g;return B(function(h){d.h===null&&$x(d,ay(d));e=!1;f={};g=function(){var k,l,m;return B(function(n){switch(n.h){case 1:return n.yield(d.h,2);case 2:k=n.i;f.challenge=k.challenge;if(!k.vm){"c1a"in k.fb&&(f.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");n.A(3);break}l=Object.assign({},{c:k.challenge,e:a},b);wa(n,4);e=!0;if(S("attbs")&&!S("attmusi")){m=k.vm.ed({wb:l});n.A(6);break}return n.yield(k.vm.snapshot({wb:l}),7);case 7:m=n.i;case 6:m?f.webResponse=
m:f.error="ATTESTATION_ERROR_VM_NO_RESPONSE";xa(n,3);break;case 4:ya(n),f.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR";case 3:if(a==="ENGAGEMENT_TYPE_PLAYBACK"){var p=k.fb,t={};p.c6a&&(t.reportingStatus=String(Number(p.c)^Wx()));p.c6b&&(t.broadSpectrumDetectionResult=String(Number(p.c)^Number(R("CATSTAT",0))));f.adblockReporting=t}return n.return(f)}})};
return h.return(Promise.race([g(),by(c,function(){var k=Object.assign({},f);e&&(k.error="ATTESTATION_ERROR_VM_TIMEOUT");return k})]))})};
function Zx(a){var b={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(b.interpreterHash=a);return b}
function ay(a,b){b=b===void 0?0:b;var c,d,e,f,g,h,k,l,m,n,p,t;return B(function(v){switch(v.h){case 1:c=Zx(pj().h);if(S("att_fet_ks"))return wa(v,7),v.yield(a.hb(c),9);wa(v,4);return v.yield(cy(a,c),6);case 6:g=v.i;e=g.Oe;f=g.Pe;d=g;xa(v,3);break;case 4:return ya(v),V(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),dy(a,864E5),v.return({challenge:"",fb:{},vm:void 0,bgChallenge:void 0});case 9:d=v.i;if(!d)throw Error("Fetching Attestation challenge returned falsy");
if(!d.challenge)throw Error("Missing Attestation challenge");e=d.challenge;f=Qx(e);if("c1a"in f&&(!d.bgChallenge||!d.bgChallenge.program))throw Error("Expected bg challenge but missing.");xa(v,3);break;case 7:h=ya(v);V(h);b++;if(b>=5)return V(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),dy(a,864E5),v.return({challenge:"",fb:{},vm:void 0,bgChallenge:void 0});k=1E3*Math.pow(2,b-1)+Math.random()*1E3;return v.return(new Promise(function(x){Fn(function(){x(ay(a,
b))},k)}));
case 3:l=Number(f.t)||7200;dy(a,l*1E3);m=void 0;if(!("c1a"in f&&d.bgChallenge)){v.A(10);break}n=Px(d.bgChallenge);wa(v,11);return v.yield(qj(pj(),n),13);case 13:xa(v,12);break;case 11:return p=ya(v),V(p),v.return({challenge:e,fb:f,vm:m,bgChallenge:n});case 12:return wa(v,14),m=new mj({challenge:n,zd:{Da:"aGIf"}}),v.yield(m.Zc,16);case 16:xa(v,10);break;case 14:t=ya(v),V(t),m=void 0;case 10:return v.return({challenge:e,fb:f,vm:m,bgChallenge:n})}})}
Yx.prototype.hb=function(a){var b=this,c;return B(function(d){c=b.o;if(!c||c.ta())return d.return(b.network.hb(a));jx("att_pna");return d.return(new Promise(function(e){Nh(c,"publicytnetworkstatus-online",function(){b.network.hb(a).then(e)})}))})};
function ey(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");var b=a.challenge,c=Qx(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return Object.assign({},a,{Oe:b,Pe:c})}
function cy(a,b){var c,d,e,f,g;return B(function(h){switch(h.h){case 1:c=void 0,d=0,e={};case 2:if(!(d<5)){h.A(4);break}if(!(d>0)){h.A(5);break}e.nd=1E3*Math.pow(2,d-1)+Math.random()*1E3;return h.yield(new Promise(function(k){return function(l){Fn(function(){l(void 0)},k.nd)}}(e)),5);
case 5:return wa(h,7),h.yield(a.hb(b),9);case 9:return f=h.i,h.return(ey(f));case 7:c=g=ya(h),g instanceof Error&&V(g);case 8:d++;e={nd:void 0};h.A(2);break;case 4:throw c;}})}
function $x(a,b){a.h=b}
function fy(a){var b,c,d;return B(function(e){if(e.h==1)return e.yield(Promise.race([a.h,null]),2);b=e.i;var f=ay(a);a.h=f;(c=b)==null||(d=c.vm)==null||d.dispose();e.h=0})}
function dy(a,b){function c(){var e;return B(function(f){e=d-Date.now();return e<1E3?f.yield(fy(a),0):(Fn(c,Math.min(e,6E4)),f.A(0))})}
var d=Date.now()+b;c()}
function by(a,b){return new Promise(function(c){Fn(function(){c(b())},a)})}
;function gy(a){this.h=a}
gy.prototype.hb=function(a){jx("att_fsr");return vx(this.h,a).then(function(b){jx("att_frr");return b})};function hy(){var a,b,c;return B(function(d){if(d.h==1)return a=Ss().resolve(xx),a?d.yield(qx(a),2):(V(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return V(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.zh;return d.return(c)}V(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function iy(){}
w(iy,qw);iy.prototype.j=function(){return gv};
iy.prototype.i=function(a){return rt(a,Ql)};
iy.prototype.h=function(a,b){b.undoToken&&(a.feedbackTokens=[b.undoToken]);b.isUndoTokenUnencrypted&&(a.isFeedbackTokenUnencrypted=b.isUndoTokenUnencrypted)};
ea.Object.defineProperties(iy.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function jy(){var a;return(a=R("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var ky=D.caches,ly;function my(a){var b=a.indexOf(":");return b===-1?{Cd:a}:{Cd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function ny(){return B(function(a){if(ly!==void 0)return a.return(ly);ly=new Promise(function(b){var c;return B(function(d){switch(d.h){case 1:return wa(d,2),d.yield(ky.open("test-only"),4);case 4:return d.yield(ky.delete("test-only"),5);case 5:xa(d,3);break;case 2:if(c=ya(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(ly)})}
function oy(a){var b,c,d,e,f,g,h;B(function(k){if(k.h==1)return k.yield(ny(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(ky.keys(),3)}c=k.i;d=y(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=my(f),h=g.datasyncId,!h||a.includes(h)||b.push(ky.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function py(){var a,b,c,d,e,f,g;return B(function(h){if(h.h==1)return h.yield(ny(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Dn("cache contains other");return h.yield(ky.keys(),3)}b=h.i;c=y(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=my(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function qy(){try{return!!self.sessionStorage}catch(a){return!1}}
;function ry(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function sy(a){if(qy()){var b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=ry(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function ty(){if(!qy())return!1;var a=Dn(),b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=ry(c.value),c!==void 0&&c!==a)return!0;return!1}
;function uy(){hy().then(function(a){a&&(Jp(a),oy(a),Tv(a),sy(a))})}
function vy(){var a=new Qr;Ij.pa(function(){var b,c,d,e,f;return B(function(g){switch(g.h){case 1:if(S("ytidb_clear_optimizations_killswitch")){g.A(2);break}b=Dn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Jp(h);oy(h);Tv(h);sy(h);return g.return()}c=Uv();d=ty();return g.yield(py(),3);case 3:return e=g.i,g.yield(Kp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.ta()?uy():Nh(a,"publicytnetworkstatus-online",uy),g.h=0}})})}
;var wy=["www.youtube-nocookie.com","www.youtubeeducation.com","youtube.googleapis.com"];function xy(){this.state=1;this.vm=null;this.h=void 0}
r=xy.prototype;r.initialize=function(a,b,c,d){this.h=d;if(a.program){var e;d=(e=a.interpreterUrl)!=null?e:null;if(a.interpreterSafeScript)e=xl(a.interpreterSafeScript);else{var f;e=(f=a.interpreterScript)!=null?f:null}a.interpreterSafeUrl&&(d=yl(a.interpreterSafeUrl).toString());yy(this,e,d,a.program,b,c)}else V(Error("BL:CIP"))};
function yy(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,nv(c,function(){window[g]?zy(a,d,g,e):(a.state=3,pv(c),V(new T("BL:ULB",""+c)))},f)):b?(f=ug("SCRIPT"),b instanceof Cb?(f.textContent=Eb(b),Fb(f)):f.textContent=b,f.nonce=Ab(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?zy(a,d,g,e):(a.state=4,V(new T("BL:ULBJ")))):V(new T("BL:ULV"))}
r.isLoading=function(){return this.state===2};
function zy(a,b,c,d){a.state=5;var e=!!a.h&&wy.includes(cc(a.h)||"");try{var f=new mj({program:b,globalName:c,zd:{disable:!S("att_web_record_metrics")||!S("att_skip_metrics_for_cookieless_domains_ks")&&e,Da:"aGIf"}});f.Zc.then(function(){a.state=6;d&&d(b)});
a.Yc(f)}catch(g){a.state=7,g instanceof Error&&V(g)}}
r.invoke=function(a){a=a===void 0?{}:a;return this.jd()?this.Pd({wb:a}):null};
r.dispose=function(){this.Yc(null);this.state=8};
r.jd=function(){return!!this.vm};
r.Pd=function(a){return this.vm.ed(a)};
r.Yc=function(a){tc(this.vm);this.vm=a};function Ay(){var a=F("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function By(){xy.apply(this,arguments)}
w(By,xy);By.prototype.Yc=function(a){var b;(b=Ay())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.ed.bind(a)},E("yt.abuse.playerAttLoader",b),E("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(E("yt.abuse.playerAttLoader",null),E("yt.abuse.playerAttLoaderRun",null))};
By.prototype.jd=function(){return!!Ay()};
By.prototype.Pd=function(a){return Ay().bgvmc(a)};var Cy=new Ks("AUTH_SERVICE_TOKEN");function Dy(a){bt.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.M},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.M},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Dy,bt);Dy.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Dy.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Dy.prototype.M=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
Dy.prototype.i=function(){this.h=new Map};function Ey(a){bt.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.M},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.M},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.M},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
S("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Ey,bt);Ey.prototype.i=function(a,b){a(b==null?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Ey.prototype.h=function(a,b){a(b==null?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Ey.prototype.u=function(a,b){a(b==null?void 0:b.event)};
Ey.prototype.M=function(a,b){a(b==null?void 0:b.event)};function Fy(){this.o=new Dy;this.u=new Ey}
Fy.prototype.install=function(){var a=C.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function Gy(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
Gy.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=Bu(c===void 0?0:c)){a=this.client;d=new uu({trackingParams:d});var e=void 0;if(S("no_client_ve_attach_unless_shown")){var f=Ov(d,c);Kv.set(f,!0);Pv(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Nv({cttAuthInfo:Du(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Qv("visualElementGestured",f,d):a?au("visualElementGestured",d,a,f):uo("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Gy.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new uu({trackingParams:a}),b,c===void 0?0:c)};
Gy.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=Bu(d);a||(a=(a=yu(d===void 0?0:d))?new uu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Nv({cttAuthInfo:Du(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Qv("visualElementStateChanged",d,b):a?au("visualElementStateChanged",b,a,d):uo("visualElementStateChanged",b,d))}};
function Hy(a,b){if(b===void 0)for(var c=Au(),d=0;d<c.length;d++)c[d]!==void 0&&Hy(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Mv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Iy(){Fy.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));S("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));S("web_log_cfg_cee_ks")||Fn(Jy)}
w(Iy,Fy);Iy.prototype.j=function(){uo("finalPayload",{csn:Bu()})};
Iy.prototype.h=function(){ou(pu)};
Iy.prototype.i=function(){var a=Hy;Gy.instance||(Gy.instance=new Gy);a(Gy.instance)};
function Jy(){var a=R("CLIENT_EXPERIMENT_EVENTS");if(a){var b=be();a=y(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&uo("genericClientExperimentEvent",{eventType:c});delete $l.CLIENT_EXPERIMENT_EVENTS}}
;function Ky(){}
function Ly(){var a=F("ytglobal.storage_");a||(a=new Ky,E("ytglobal.storage_",a));return a}
Ky.prototype.estimate=function(){var a,b,c;return B(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(My()):d.return()})};
function My(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
E("ytglobal.storageClass_",Ky);function so(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
so.prototype.Ha=function(a){this.handleError(a)};
so.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Ny(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Ny(a,b){Ly().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:Oy(c==null?void 0:c.usage),deviceStorageQuotaMbytes:Oy(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Oy(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var Py={Ic:{feedbackEndpoint:lw(Cx),modifyChannelNotificationPreferenceEndpoint:lw(Dx),playlistEditEndpoint:lw(Ex),shareEntityEndpoint:lw(Bx),subscribeEndpoint:lw(yx),undoFeedbackEndpoint:lw(iy),unsubscribeEndpoint:lw(zx),webPlayerShareEntityServiceEndpoint:lw(Fx)}};function Qy(){var a=Ss();Os(a,{pb:Nx,Fc:Lx});Os(a,{pb:Cy,Fc:gn});var b=gw(),c=a.resolve(Cy),d=a.resolve(Nx),e={};b&&(e.client_location=b);px(Py,d,c,e);Os(a,{pb:xx,hd:ox.instance})}
;var Ry={},Sy=(Ry["api.invalidparam"]=2,Ry.auth=150,Ry["drm.auth"]=150,Ry["heartbeat.net"]=150,Ry["heartbeat.servererror"]=150,Ry["heartbeat.stop"]=150,Ry["html5.unsupportedads"]=5,Ry["fmt.noneavailable"]=5,Ry["fmt.decode"]=5,Ry["fmt.unplayable"]=5,Ry["html5.missingapi"]=5,Ry["html5.unsupportedlive"]=5,Ry["drm.unavailable"]=5,Ry["mrm.blocked"]=151,Ry["embedder.identity.denied"]=152,Ry);var Ty=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function Uy(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function Vy(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=y(Ty);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Wy(a,b,c,d){if(Oa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function Xy(a){H.call(this);var b=this;this.api=a;this.Y=this.u=!1;this.D=[];this.P={};this.j=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=S("web_player_split_event_bus_iframe");this.o=R("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.G=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.Y=!0;b.u=!1;b.sendMessage("initialDelivery",Yy(b));b.sendMessage("onReady");e=y(b.D);for(d=e.next();!d.done;d=e.next())Zy(b,d.value);b.D=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Z&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.P[e]||e==="onReady"||
(c=$y(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.P[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&Uy(e)){var f=d;if(Oa(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=Vy(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=Vy(g);break;case "loadPlaylist":case "cuePlaylist":g=Wy(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);Uy(e)&&az(b,Yy(b))}}}};
bz.addEventListener("message",this.G);if(a=R("WIDGET_ID"))this.sessionId=a;cz(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Z=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?Sy[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
cz(this,"onVideoProgress",this.jf.bind(this));cz(this,"onVolumeChange",this.kf.bind(this));cz(this,"onApiChange",this.bf.bind(this));cz(this,"onPlaybackQualityChange",this.ff.bind(this));cz(this,"onPlaybackRateChange",this.gf.bind(this));cz(this,"onStateChange",this.hf.bind(this));cz(this,"onWebglSettingsChanged",this.lf.bind(this));cz(this,"onCaptionsTrackListChanged",this.cf.bind(this));cz(this,"captionssettingschanged",this.df.bind(this))}
w(Xy,H);function az(a,b){a.sendMessage("infoDelivery",b)}
r=Xy.prototype;r.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.Y?Zy(this,a):this.D.push(a)};
function $y(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function cz(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function Yy(a){if(!a.api)return null;var b=a.api.getApiInterface();Tb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
r.hf=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&!S("embeds_enable_vfsyb")&&(a.storyboardFormat=this.api.getStoryboardFormat());az(this,a)};
r.ff=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());az(this,a)};
r.gf=function(a){az(this,{playbackRate:a})};
r.bf=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
r.kf=function(){az(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
r.jf=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());az(this,a)};
r.lf=function(){az(this,{sphericalProperties:this.api.getSphericalProperties()})};
r.cf=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};az(this,a)}};
r.df=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};az(this,a)}};
function Zy(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){V(d)}}}
r.ba=function(){H.prototype.ba.call(this);bz.removeEventListener("message",this.G);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var bz=window;function dz(a,b,c){H.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=S("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ea){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=ez(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=fz(g,f))&&gz(d,g,f))}}}}}};
hz.addEventListener("message",this.i);gz(this,"RECEIVING")}
w(dz,H);r=dz.prototype;r.addListener=function(a,b){if(!(a in this.h)){var c=this.ef.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
r.ef=function(a,b){this.ea||gz(this,a,iz(a,b))};
r.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
r.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
r.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function ez(a,b){switch(a){case "loadVideoById":return[Vy(b)];case "cueVideoById":return[Vy(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[Wy(b)];case "cuePlaylist":return[Wy(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function fz(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function iz(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function gz(a,b,c){a.ea||(b={id:a.id,command:b},c&&(b.data=c),jz.postMessage(JSON.stringify(b),a.origin))}
r.ba=function(){hz.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);H.prototype.ba.call(this)};
var hz=window,jz=window.parent;var kz=new By;function lz(){return kz.jd()}
function mz(a){a=a===void 0?{}:a;return kz.invoke(a)}
;function nz(a,b,c,d,e){H.call(this);var f=this;this.D=b;this.webPlayerContextConfig=d;this.Kb=e;this.Pa=!1;this.api={};this.ma=this.u=null;this.U=new N;this.h={};this.Z=this.xa=this.elementId=this.Qa=this.config=null;this.Y=!1;this.j=this.G=null;this.Fa={};this.Gc=["onReady"];this.lastError=null;this.eb=NaN;this.P={};this.ha=0;this.i=this.o=a;vc(this,this.U);oz(this);c?this.ha=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(pz(this),qz(this))}
w(nz,H);r=nz.prototype;r.getId=function(){return this.D};
r.loadNewVideoConfig=function(a){if(!this.ea){this.ha&&(clearTimeout(this.ha),this.ha=0);var b=a||{};b instanceof cv||(b=new cv(b));this.config=b;this.setConfig(a);qz(this);this.isReady()&&rz(this)}};
function pz(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.D,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.D:a.config.attrs.id=a.D);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
r.setConfig=function(a){this.Qa=a;this.config=sz(a);pz(this);if(!this.xa){var b;this.xa=tz(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Cj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Cj(Number(a)||a))};
function rz(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function uz(a){var b=!0,c=vz(a);c&&a.config&&(b=c.dataset.version===wz(a));return b&&!!F("yt.player.Application.create")}
function qz(a){if(!a.ea&&!a.Y){var b=uz(a);if(b&&(vz(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||xz(a);else if(yz(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),xz(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=zz(a,"player_bootstrap_method")?F("yt.player.Application.createAlternate")||F("yt.player.Application.create"):F("yt.player.Application.create");var e=a.config?sz(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Kb);xz(a)};
a.Y=!0;b?a.G():(nv(wz(a),a.G),(b=Az(a))&&uv(b||""),Bz(a)&&!c&&E("yt.player.Application.create",null))}}}
function vz(a){var b=tg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function xz(a){if(!a.ea){var b=vz(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!zz(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}Cz(a)}else a.eb=setTimeout(function(){xz(a)},50)}}
function Cz(a){oz(a);a.Pa=!0;var b=vz(a);if(b){a.u=Dz(a,b,"addEventListener");a.ma=Dz(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Dz(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);rz(a);a.xa&&a.xa(a.api);a.U.sb("onReady",a.api)}
function Dz(a,b,c){var d=b[c];return function(){var e=C.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new T("PlayerProxy error in method call",{error:f,method:c,playerId:a.D}),e.level="WARNING",e;}}}
function oz(a){a.Pa=!1;if(a.ma)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ma(b,a.h[b]);for(var c in a.P)a.P.hasOwnProperty(c)&&clearTimeout(Number(c));a.P={};a.u=null;a.ma=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Qa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
r.isReady=function(){return this.Pa};
r.addEventListener=function(a,b){var c=this,d=tz(this,b);d&&(Mb(this.Gc,a)>=0||this.h[a]||(b=Ez(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
r.removeEventListener=function(a,b){this.ea||(b=tz(this,b))&&this.U.unsubscribe(a,b)};
function tz(a,b){var c=b;if(typeof b==="string"){if(a.Fa[b])return a.Fa[b];c=function(){var d=C.apply(0,arguments),e=F(b);if(e)try{e.apply(D,d)}catch(f){throw d=new T("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Fa[b]=c}return c?c:null}
function Ez(a,b){function c(d){function e(){if(!a.ea)try{a.U.sb(b,d!=null?d:void 0)}catch(h){var g=new T("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.D,data:d,originalStack:h.stack,componentStack:h.de});g.level="WARNING";throw g;}}
if(zz(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.P,h=String(f);h in g&&delete g[h]},0);
kg(a.P,String(f))}}
return a.h[b]=c}
r.getPlayerType=function(){return this.Z||(vz(this)?"html5":null)};
r.getLastError=function(){return this.lastError};
function yz(a){a.cancel();oz(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=vz(a);b&&(uz(a)||!Bz(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
r.cancel=function(){this.G&&rv(wz(this),this.G);clearTimeout(this.eb);this.Y=!1};
r.ba=function(){yz(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new T("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Fa=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Qa=this.config=this.api=null;delete this.o;delete this.i;H.prototype.ba.call(this)};
function Bz(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function wz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Az(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function zz(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function sz(a){for(var b={},c=y(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?ng(e):e}return b}
;var Fz={},Gz="player_uid_"+(Math.random()*1E9>>>0);function Hz(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?tg(c):c;var e=Gz+"_"+Ra(c),f=Fz[e];if(f&&d)return Iz(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new nz(c,e,a,b,void 0);Fz[e]=f;f.addOnDisposeCallback(function(){delete Fz[f.getId()]});
return f.api}
function Iz(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Jz=null,Kz=null;
function Lz(){kx();var a=sn(),b=vn(119),c=window.devicePixelRatio>1;if(document.body&&Qj(document.body,"exp-invert-logo"))if(c&&!Qj(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Qj(d,"inverted-hdpi")){var e=Oj(d);Pj(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Qj(document.body,"inverted-hdpi")&&Rj();if(b!=c){b="f"+(Math.floor(119/31)+1);d=wn(b)||0;d=c?d|67108864:d&-67108865;d===0?delete pn[b]:(c=d.toString(16),pn[b]=c.toString());
c=!0;S("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in pn)pn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(pn[f])));var f=d.join("&");ln(b,f,63072E3,a.i,c)}}
function Mz(){Nz()}
function Oz(){fx("ep_init_pr");Nz()}
function Nz(){var a=Jz.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Pz(){Jz&&Jz.sendAbandonmentPing&&Jz.sendAbandonmentPing();R("PL_ATT")&&kz.dispose();for(var a=Ij,b=0,c=Tx.length;b<c;b++)a.qa(Tx[b]);Tx.length=0;pv("//static.doubleclick.net/instream/ad_status.js");Ux=!1;am("DCLKSTAT",0);uc(Kz);Jz&&(Jz.removeEventListener("onVideoDataChange",Mz),Jz.destroy())}
;fx("ep_init_eps");E("yt.setConfig",am);E("yt.config.set",am);E("yt.setMsg",mv);E("yt.msgs.set",mv);E("yt.logging.errors.log",ju);
E("writeEmbed",function(){fx("ep_init_wes");var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}Yv(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);c=jy();if(!c.serializedForcedExperimentIds){var d=om(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)?bx("watch",["pbs","pbu","pbp"]):a.args&&Pu(a.args)?bx("video_preview",["ol"]):bx("embed_no_video",["ep_init_pr"]);Jz=cb(Hz(a,c));Jz.addEventListener("onVideoDataChange",Mz);Jz.addEventListener("onReady",Oz);a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?Kz=new Xy(Jz):R("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(Kz=new dz(Jz,a,b));Vx();S("ytidb_create_logger_embed_killswitch")||ro();a={};Iy.h||(Iy.h=new Iy);Iy.h.install((a.flush_logs=
{callback:function(){Ot()}},a));
bs();if(S("embeds_enable_separate_ITS")){Qy();var f=function(){return ox.instance}}else f=function(){var g,h;
if(!Ox){var k=Ss();Os(k,{pb:Nx,Fc:Lx});var l={Ic:{feedbackEndpoint:lw(Cx),modifyChannelNotificationPreferenceEndpoint:lw(Dx),playlistEditEndpoint:lw(Ex),shareEntityEndpoint:lw(Bx),subscribeEndpoint:lw(yx),unsubscribeEndpoint:lw(zx),webPlayerShareEntityServiceEndpoint:lw(Fx)}},m=gw(),n={};m&&(n.client_location=m);g===void 0&&(g=hn());h===void 0&&(h=k.resolve(Nx));px(l,h,g,n);Os(k,{pb:xx,hd:ox.instance});Ox=k.resolve(xx)}return Ox};
S("ytidb_clear_embedded_player")&&Ij.pa(function(){f();vy()});
S("enable_rta_manager")&&Fn(function(){var g=new gy(f());var h={preload:!S("enable_rta_npi")},k=!1;if(typeof h==="boolean")var l={preload:h};else typeof h==="undefined"?l={preload:!0}:(l=h,k=!!h.Ah);h=k?void 0:new Qr;Yx.instance=new Yx(g,l,h);g=Yx.instance;l=g.i.bind(g);E("yt.aba.att",l);g=g.j.bind(g);E("yt.aba.att2",g)});
fx("ep_init_wee")});
E("yt.abuse.player.botguardInitialized",F("yt.abuse.player.botguardInitialized")||lz);E("yt.abuse.player.invokeBotguard",F("yt.abuse.player.invokeBotguard")||mz);E("yt.abuse.dclkstatus.checkDclkStatus",F("yt.abuse.dclkstatus.checkDclkStatus")||Wx);E("yt.player.exports.navigate",F("yt.player.exports.navigate")||Xv);E("yt.util.activity.init",F("yt.util.activity.init")||rs);E("yt.util.activity.getTimeSinceActive",F("yt.util.activity.getTimeSinceActive")||ys);
E("yt.util.activity.setTimestamp",F("yt.util.activity.setTimestamp")||ss);window.addEventListener("load",em(function(){Lz()}));
window.addEventListener("pageshow",em(function(a){a.persisted||Lz()}));
window.addEventListener("pagehide",em(function(a){S("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Pz():a.persisted||Pz()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=bm("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new T(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!S("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.de)f||(f={}),f.componentStack=bu(m)}f&&mu(e,f);g?ju(e):V(e)}};
yi=ku;window.addEventListener("unhandledrejection",function(a){ku(a.reason)});
Nb(R("ERRORS")||[],function(a){ju.apply(null,a)});
am("ERRORS",[]);fx("ep_init_epe");}).call(this);
