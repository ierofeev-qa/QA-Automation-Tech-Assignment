(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},e={},n=t.parcelRequire1d24;null==n&&((n=function(t){if(t in r)return r[t].exports;if(t in e){var n=e[t];delete e[t];var i={id:t,exports:{}};return r[t]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,r){e[t]=r},t.parcelRequire1d24=n),n.register("k3c54",(function(t,r){var e=n("fhxPE");t.exports=function(t,r,n){var i=null==t?void 0:e(t,r);return void 0===i?n:i}})),n.register("fhxPE",(function(t,r){var e=n("bjbHe"),i=n("i0RAJ");t.exports=function(t,r){for(var n=0,o=(r=e(r,t)).length;null!=t&&n<o;)t=t[i(r[n++])];return n&&n==o?t:void 0}})),n.register("bjbHe",(function(t,r){var e=n("boPMC"),i=n("9jc3A"),o=n("a3Fhg"),s=n("ckJ6D");t.exports=function(t,r){return e(t)?t:i(t,r)?[t]:o(s(t))}})),n.register("9jc3A",(function(t,r){var e=n("boPMC"),i=n("jThht"),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/;t.exports=function(t,r){if(e(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!i(t))||(s.test(t)||!o.test(t)||null!=r&&t in Object(r))}})),n.register("jThht",(function(t,r){var e=n("4OH7V"),i=n("hahsn"),o="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||i(t)&&e(t)==o}})),n.register("a3Fhg",(function(t,r){var e=n("chgH2"),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,s=e((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(i,(function(t,e,n,i){r.push(n?i.replace(o,"$1"):e||t)})),r}));t.exports=s})),n.register("chgH2",(function(t,r){var e=n("97riE"),i=500;t.exports=function(t){var r=e(t,(function(t){return n.size===i&&n.clear(),t})),n=r.cache;return r}})),n.register("97riE",(function(t,r){var e=n("7V6SZ"),i="Expected a function";function o(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError(i);var n=function(){var e=arguments,i=r?r.apply(this,e):e[0],o=n.cache;if(o.has(i))return o.get(i);var s=t.apply(this,e);return n.cache=o.set(i,s)||o,s};return n.cache=new(o.Cache||e),n}o.Cache=e,t.exports=o})),n.register("7V6SZ",(function(t,r){var e=n("6Ln7l"),i=n("f2vst"),o=n("blsAx"),s=n("lkUMP"),u=n("iwzZF");function a(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}a.prototype.clear=e,a.prototype.delete=i,a.prototype.get=o,a.prototype.has=s,a.prototype.set=u,t.exports=a})),n.register("6Ln7l",(function(t,r){var e=n("iO2rO"),i=n("1ynVz"),o=n("fsqny");t.exports=function(){this.size=0,this.__data__={hash:new e,map:new(o||i),string:new e}}})),n.register("iO2rO",(function(t,r){var e=n("lWvMR"),i=n("gCQU4"),o=n("iuiff"),s=n("8W7s3"),u=n("jInuN");function a(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}a.prototype.clear=e,a.prototype.delete=i,a.prototype.get=o,a.prototype.has=s,a.prototype.set=u,t.exports=a})),n.register("lWvMR",(function(t,r){var e=n("dj7JG");t.exports=function(){this.__data__=e?e(null):{},this.size=0}})),n.register("dj7JG",(function(t,r){var e=n("1TkEd")(Object,"create");t.exports=e})),n.register("gCQU4",(function(t,r){t.exports=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}})),n.register("iuiff",(function(t,r){var e=n("dj7JG"),i="__lodash_hash_undefined__",o=Object.prototype.hasOwnProperty;t.exports=function(t){var r=this.__data__;if(e){var n=r[t];return n===i?void 0:n}return o.call(r,t)?r[t]:void 0}})),n.register("8W7s3",(function(t,r){var e=n("dj7JG"),i=Object.prototype.hasOwnProperty;t.exports=function(t){var r=this.__data__;return e?void 0!==r[t]:i.call(r,t)}})),n.register("jInuN",(function(t,r){var e=n("dj7JG"),i="__lodash_hash_undefined__";t.exports=function(t,r){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=e&&void 0===r?i:r,this}})),n.register("1ynVz",(function(t,r){var e=n("k2M2w"),i=n("2wXQf"),o=n("cVe7y"),s=n("4sfYX"),u=n("gy5F0");function a(t){var r=-1,e=null==t?0:t.length;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}a.prototype.clear=e,a.prototype.delete=i,a.prototype.get=o,a.prototype.has=s,a.prototype.set=u,t.exports=a})),n.register("k2M2w",(function(t,r){t.exports=function(){this.__data__=[],this.size=0}})),n.register("2wXQf",(function(t,r){var e=n("3HCYM"),i=Array.prototype.splice;t.exports=function(t){var r=this.__data__,n=e(r,t);return!(n<0)&&(n==r.length-1?r.pop():i.call(r,n,1),--this.size,!0)}})),n.register("3HCYM",(function(t,r){var e=n("8l8ac");t.exports=function(t,r){for(var n=t.length;n--;)if(e(t[n][0],r))return n;return-1}})),n.register("cVe7y",(function(t,r){var e=n("3HCYM");t.exports=function(t){var r=this.__data__,n=e(r,t);return n<0?void 0:r[n][1]}})),n.register("4sfYX",(function(t,r){var e=n("3HCYM");t.exports=function(t){return e(this.__data__,t)>-1}})),n.register("gy5F0",(function(t,r){var e=n("3HCYM");t.exports=function(t,r){var n=this.__data__,i=e(n,t);return i<0?(++this.size,n.push([t,r])):n[i][1]=r,this}})),n.register("fsqny",(function(t,r){var e=n("1TkEd")(n("50pTR"),"Map");t.exports=e})),n.register("f2vst",(function(t,r){var e=n("mQpWr");t.exports=function(t){var r=e(this,t).delete(t);return this.size-=r?1:0,r}})),n.register("mQpWr",(function(t,r){var e=n("aboB6");t.exports=function(t,r){var n=t.__data__;return e(r)?n["string"==typeof r?"string":"hash"]:n.map}})),n.register("aboB6",(function(t,r){t.exports=function(t){var r=typeof t;return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t}})),n.register("blsAx",(function(t,r){var e=n("mQpWr");t.exports=function(t){return e(this,t).get(t)}})),n.register("lkUMP",(function(t,r){var e=n("mQpWr");t.exports=function(t){return e(this,t).has(t)}})),n.register("iwzZF",(function(t,r){var e=n("mQpWr");t.exports=function(t,r){var n=e(this,t),i=n.size;return n.set(t,r),this.size+=n.size==i?0:1,this}})),n.register("ckJ6D",(function(t,r){var e=n("lQ49C");t.exports=function(t){return null==t?"":e(t)}})),n.register("lQ49C",(function(t,r){var e=n("dtXly"),i=n("11d3X"),o=n("boPMC"),s=n("jThht"),u=1/0,a=e?e.prototype:void 0,c=a?a.toString:void 0;t.exports=function t(r){if("string"==typeof r)return r;if(o(r))return i(r,t)+"";if(s(r))return c?c.call(r):"";var e=r+"";return"0"==e&&1/r==-u?"-0":e}})),n.register("11d3X",(function(t,r){t.exports=function(t,r){for(var e=-1,n=null==t?0:t.length,i=Array(n);++e<n;)i[e]=r(t[e],e,t);return i}})),n.register("i0RAJ",(function(t,r){var e=n("jThht"),i=1/0;t.exports=function(t){if("string"==typeof t||e(t))return t;var r=t+"";return"0"==r&&1/t==-i?"-0":r}})),n.register("jF8gP",(function(t,r){var e=n("80IJD"),i=n("hahsn");t.exports=function t(r,n,o,s,u){return r===n||(null==r||null==n||!i(r)&&!i(n)?r!=r&&n!=n:e(r,n,o,s,t,u))}})),n.register("80IJD",(function(t,r){var e=n("hPpjt"),i=n("jqMHq"),o=n("hiwBF"),s=n("bjk0f"),u=n("30Qdc"),a=n("boPMC"),c=n("60Olm"),f=n("6pDzm"),p=1,v="[object Arguments]",l="[object Array]",h="[object Object]",g=Object.prototype.hasOwnProperty;t.exports=function(t,r,n,_,d,x){var y=a(t),b=a(r),j=y?l:u(t),w=b?l:u(r),z=(j=j==v?h:j)==h,O=(w=w==v?h:w)==h,k=j==w;if(k&&c(t)){if(!c(r))return!1;y=!0,z=!1}if(k&&!z)return x||(x=new e),y||f(t)?i(t,r,n,_,d,x):o(t,r,j,n,_,d,x);if(!(n&p)){var A=z&&g.call(t,"__wrapped__"),P=O&&g.call(r,"__wrapped__");if(A||P){var M=A?t.value():t,m=P?r.value():r;return x||(x=new e),d(M,m,n,_,x)}}return!!k&&(x||(x=new e),s(t,r,n,_,d,x))}})),n.register("hPpjt",(function(t,r){var e=n("1ynVz"),i=n("P0h47"),o=n("02SHF"),s=n("8PKDr"),u=n("4IAxk"),a=n("kv4SA");function c(t){var r=this.__data__=new e(t);this.size=r.size}c.prototype.clear=i,c.prototype.delete=o,c.prototype.get=s,c.prototype.has=u,c.prototype.set=a,t.exports=c})),n.register("P0h47",(function(t,r){var e=n("1ynVz");t.exports=function(){this.__data__=new e,this.size=0}})),n.register("02SHF",(function(t,r){t.exports=function(t){var r=this.__data__,e=r.delete(t);return this.size=r.size,e}})),n.register("8PKDr",(function(t,r){t.exports=function(t){return this.__data__.get(t)}})),n.register("4IAxk",(function(t,r){t.exports=function(t){return this.__data__.has(t)}})),n.register("kv4SA",(function(t,r){var e=n("1ynVz"),i=n("fsqny"),o=n("7V6SZ"),s=200;t.exports=function(t,r){var n=this.__data__;if(n instanceof e){var u=n.__data__;if(!i||u.length<s-1)return u.push([t,r]),this.size=++n.size,this;n=this.__data__=new o(u)}return n.set(t,r),this.size=n.size,this}})),n.register("jqMHq",(function(t,r){var e=n("2OvLA"),i=n("2ky9v"),o=n("kxDGE"),s=1,u=2;t.exports=function(t,r,n,a,c,f){var p=n&s,v=t.length,l=r.length;if(v!=l&&!(p&&l>v))return!1;var h=f.get(t),g=f.get(r);if(h&&g)return h==r&&g==t;var _=-1,d=!0,x=n&u?new e:void 0;for(f.set(t,r),f.set(r,t);++_<v;){var y=t[_],b=r[_];if(a)var j=p?a(b,y,_,r,t,f):a(y,b,_,t,r,f);if(void 0!==j){if(j)continue;d=!1;break}if(x){if(!i(r,(function(t,r){if(!o(x,r)&&(y===t||c(y,t,n,a,f)))return x.push(r)}))){d=!1;break}}else if(y!==b&&!c(y,b,n,a,f)){d=!1;break}}return f.delete(t),f.delete(r),d}})),n.register("2OvLA",(function(t,r){var e=n("7V6SZ"),i=n("gDjUD"),o=n("7cWUz");function s(t){var r=-1,n=null==t?0:t.length;for(this.__data__=new e;++r<n;)this.add(t[r])}s.prototype.add=s.prototype.push=i,s.prototype.has=o,t.exports=s})),n.register("gDjUD",(function(t,r){var e="__lodash_hash_undefined__";t.exports=function(t){return this.__data__.set(t,e),this}})),n.register("7cWUz",(function(t,r){t.exports=function(t){return this.__data__.has(t)}})),n.register("2ky9v",(function(t,r){t.exports=function(t,r){for(var e=-1,n=null==t?0:t.length;++e<n;)if(r(t[e],e,t))return!0;return!1}})),n.register("kxDGE",(function(t,r){t.exports=function(t,r){return t.has(r)}})),n.register("hiwBF",(function(t,r){var e=n("dtXly"),i=n("khC8s"),o=n("8l8ac"),s=n("jqMHq"),u=n("ennTt"),a=n("f70Oz"),c=1,f=2,p="[object Boolean]",v="[object Date]",l="[object Error]",h="[object Map]",g="[object Number]",_="[object RegExp]",d="[object Set]",x="[object String]",y="[object Symbol]",b="[object ArrayBuffer]",j="[object DataView]",w=e?e.prototype:void 0,z=w?w.valueOf:void 0;t.exports=function(t,r,e,n,w,O,k){switch(e){case j:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case b:return!(t.byteLength!=r.byteLength||!O(new i(t),new i(r)));case p:case v:case g:return o(+t,+r);case l:return t.name==r.name&&t.message==r.message;case _:case x:return t==r+"";case h:var A=u;case d:var P=n&c;if(A||(A=a),t.size!=r.size&&!P)return!1;var M=k.get(t);if(M)return M==r;n|=f,k.set(t,r);var m=s(A(t),A(r),n,w,O,k);return k.delete(t),m;case y:if(z)return z.call(t)==z.call(r)}return!1}})),n.register("khC8s",(function(t,r){var e=n("50pTR").Uint8Array;t.exports=e})),n.register("ennTt",(function(t,r){t.exports=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}})),n.register("f70Oz",(function(t,r){t.exports=function(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}})),n.register("bjk0f",(function(t,r){var e=n("x26nx"),i=1,o=Object.prototype.hasOwnProperty;t.exports=function(t,r,n,s,u,a){var c=n&i,f=e(t),p=f.length;if(p!=e(r).length&&!c)return!1;for(var v=p;v--;){var l=f[v];if(!(c?l in r:o.call(r,l)))return!1}var h=a.get(t),g=a.get(r);if(h&&g)return h==r&&g==t;var _=!0;a.set(t,r),a.set(r,t);for(var d=c;++v<p;){var x=t[l=f[v]],y=r[l];if(s)var b=c?s(y,x,l,r,t,a):s(x,y,l,t,r,a);if(!(void 0===b?x===y||u(x,y,n,s,a):b)){_=!1;break}d||(d="constructor"==l)}if(_&&!d){var j=t.constructor,w=r.constructor;j==w||!("constructor"in t)||!("constructor"in r)||"function"==typeof j&&j instanceof j&&"function"==typeof w&&w instanceof w||(_=!1)}return a.delete(t),a.delete(r),_}})),n.register("x26nx",(function(t,r){var e=n("g1qRM"),i=n("cMaVY"),o=n("1gzc2");t.exports=function(t){return e(t,o,i)}})),n.register("g1qRM",(function(t,r){var e=n("03W7f"),i=n("boPMC");t.exports=function(t,r,n){var o=r(t);return i(t)?o:e(o,n(t))}})),n.register("03W7f",(function(t,r){t.exports=function(t,r){for(var e=-1,n=r.length,i=t.length;++e<n;)t[i+e]=r[e];return t}})),n.register("cMaVY",(function(t,r){var e=n("jDbsQ"),i=n("ciulT"),o=Object.prototype.propertyIsEnumerable,s=Object.getOwnPropertySymbols,u=s?function(t){return null==t?[]:(t=Object(t),e(s(t),(function(r){return o.call(t,r)})))}:i;t.exports=u})),n.register("jDbsQ",(function(t,r){t.exports=function(t,r){for(var e=-1,n=null==t?0:t.length,i=0,o=[];++e<n;){var s=t[e];r(s,e,t)&&(o[i++]=s)}return o}})),n.register("ciulT",(function(t,r){t.exports=function(){return[]}})),n.register("30Qdc",(function(t,r){var e=n("cy4m1"),i=n("fsqny"),o=n("eUnmw"),s=n("b7NWh"),u=n("1DyWd"),a=n("4OH7V"),c=n("6cVeN"),f="[object Map]",p="[object Promise]",v="[object Set]",l="[object WeakMap]",h="[object DataView]",g=c(e),_=c(i),d=c(o),x=c(s),y=c(u),b=a;(e&&b(new e(new ArrayBuffer(1)))!=h||i&&b(new i)!=f||o&&b(o.resolve())!=p||s&&b(new s)!=v||u&&b(new u)!=l)&&(b=function(t){var r=a(t),e="[object Object]"==r?t.constructor:void 0,n=e?c(e):"";if(n)switch(n){case g:return h;case _:return f;case d:return p;case x:return v;case y:return l}return r}),t.exports=b})),n.register("cy4m1",(function(t,r){var e=n("1TkEd")(n("50pTR"),"DataView");t.exports=e})),n.register("eUnmw",(function(t,r){var e=n("1TkEd")(n("50pTR"),"Promise");t.exports=e})),n.register("b7NWh",(function(t,r){var e=n("1TkEd")(n("50pTR"),"Set");t.exports=e})),n.register("1DyWd",(function(t,r){var e=n("1TkEd")(n("50pTR"),"WeakMap");t.exports=e})),n.register("76Dxq",(function(t,r){var e=n("5pjey"),i=n("7PkOs"),o=n("bYaXO"),s=n("boPMC"),u=n("3CuGf");t.exports=function(t){return"function"==typeof t?t:null==t?o:"object"==typeof t?s(t)?i(t[0],t[1]):e(t):u(t)}})),n.register("5pjey",(function(t,r){var e=n("2LGoj"),i=n("icAJG"),o=n("8VX0W");t.exports=function(t){var r=i(t);return 1==r.length&&r[0][2]?o(r[0][0],r[0][1]):function(n){return n===t||e(n,t,r)}}})),n.register("2LGoj",(function(t,r){var e=n("hPpjt"),i=n("jF8gP"),o=1,s=2;t.exports=function(t,r,n,u){var a=n.length,c=a,f=!u;if(null==t)return!c;for(t=Object(t);a--;){var p=n[a];if(f&&p[2]?p[1]!==t[p[0]]:!(p[0]in t))return!1}for(;++a<c;){var v=(p=n[a])[0],l=t[v],h=p[1];if(f&&p[2]){if(void 0===l&&!(v in t))return!1}else{var g=new e;if(u)var _=u(l,h,v,t,r,g);if(!(void 0===_?i(h,l,o|s,u,g):_))return!1}}return!0}})),n.register("icAJG",(function(t,r){var e=n("h6guA"),i=n("1gzc2");t.exports=function(t){for(var r=i(t),n=r.length;n--;){var o=r[n],s=t[o];r[n]=[o,s,e(s)]}return r}})),n.register("h6guA",(function(t,r){var e=n("2BHb0");t.exports=function(t){return t==t&&!e(t)}})),n.register("8VX0W",(function(t,r){t.exports=function(t,r){return function(e){return null!=e&&(e[t]===r&&(void 0!==r||t in Object(e)))}}})),n.register("7PkOs",(function(t,r){var e=n("jF8gP"),i=n("k3c54"),o=n("9z3vK"),s=n("9jc3A"),u=n("h6guA"),a=n("8VX0W"),c=n("i0RAJ"),f=1,p=2;t.exports=function(t,r){return s(t)&&u(r)?a(c(t),r):function(n){var s=i(n,t);return void 0===s&&s===r?o(n,t):e(r,s,f|p)}}})),n.register("9z3vK",(function(t,r){var e=n("8oPXu"),i=n("4oTiy");t.exports=function(t,r){return null!=t&&i(t,r,e)}})),n.register("8oPXu",(function(t,r){t.exports=function(t,r){return null!=t&&r in Object(t)}})),n.register("4oTiy",(function(t,r){var e=n("bjbHe"),i=n("kSTvD"),o=n("boPMC"),s=n("9hqNP"),u=n("k5HRX"),a=n("i0RAJ");t.exports=function(t,r,n){for(var c=-1,f=(r=e(r,t)).length,p=!1;++c<f;){var v=a(r[c]);if(!(p=null!=t&&n(t,v)))break;t=t[v]}return p||++c!=f?p:!!(f=null==t?0:t.length)&&u(f)&&s(v,f)&&(o(t)||i(t))}})),n.register("3CuGf",(function(t,r){var e=n("2DqAA"),i=n("7Hd0r"),o=n("9jc3A"),s=n("i0RAJ");t.exports=function(t){return o(t)?e(s(t)):i(t)}})),n.register("2DqAA",(function(t,r){t.exports=function(t){return function(r){return null==r?void 0:r[t]}}})),n.register("7Hd0r",(function(t,r){var e=n("fhxPE");t.exports=function(t){return function(r){return e(r,t)}}})),n.register("6ZJsQ",(function(t,r){t.exports=function(t,r,e,n){for(var i=t.length,o=e+(n?1:-1);n?o--:++o<i;)if(r(t[o],o,t))return o;return-1}})),n.register("kDpFi",(function(t,r){var e=n("lCzsM"),i=1/0,o=17976931348623157e292;t.exports=function(t){return t?(t=e(t))===i||t===-i?(t<0?-1:1)*o:t==t?t:0:0===t?t:0}})),n.register("lCzsM",(function(t,r){var e=n("9cJzI"),i=n("2BHb0"),o=n("jThht"),s=NaN,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return s;if(i(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=i(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=e(t);var n=a.test(t);return n||c.test(t)?f(t.slice(2),n?2:8):u.test(t)?s:+t}})),n.register("9cJzI",(function(t,r){var e=n("9uBvq"),i=/^\s+/;t.exports=function(t){return t?t.slice(0,e(t)+1).replace(i,""):t}})),n.register("9uBvq",(function(t,r){var e=/\s/;t.exports=function(t){for(var r=t.length;r--&&e.test(t.charAt(r)););return r}})),n.register("4PijS",(function(t,r){var e=n("2C10K")(n("6Uonz"));t.exports=e})),n.register("2C10K",(function(t,r){var e=n("76Dxq"),i=n("blzCK"),o=n("1gzc2");t.exports=function(t){return function(r,n,s){var u=Object(r);if(!i(r)){var a=e(n,3);r=o(r),n=function(t){return a(u[t],t,u)}}var c=t(r,n,s);return c>-1?u[a?r[c]:c]:void 0}}})),n.register("6Uonz",(function(t,r){var e=n("6ZJsQ"),i=n("76Dxq"),o=n("7jF1y"),s=Math.max;t.exports=function(t,r,n){var u=null==t?0:t.length;if(!u)return-1;var a=null==n?0:o(n);return a<0&&(a=s(u+a,0)),e(t,i(r,3),a)}})),n.register("7jF1y",(function(t,r){var e=n("kDpFi");t.exports=function(t){var r=e(t),n=r%1;return r==r?n?r-n:r:0}}));
//# sourceMappingURL=HomeTabPage.1ac78322.js.map
define=__define;})(window.define);