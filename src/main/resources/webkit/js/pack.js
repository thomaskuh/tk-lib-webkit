/*! jQuery v3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(g,e){"use strict";var t=[],v=g.document,r=Object.getPrototypeOf,s=t.slice,y=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,m=n.hasOwnProperty,a=m.toString,l=a.call(Object),b={},x=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},w=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function C(e,t,n){var r,i,o=(n=n||v).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function T(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector",E=function(e,t){return new E.fn.init(e,t)},d=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function p(e){var t=!!e&&"length"in e&&e.length,n=T(e);return!x(e)&&!w(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||x(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=m.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){C(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(d,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return y.apply([],a)},guid:1,support:b}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,p,x,o,i,h,f,g,w,u,l,C,T,a,E,v,s,c,y,N="sizzle"+1*new Date,m=n.document,A=0,r=0,d=ue(),b=ue(),k=ue(),S=ue(),D=function(e,t){return e===t&&(l=!0),0},L={}.hasOwnProperty,t=[],j=t.pop,q=t.push,O=t.push,P=t.slice,H=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},I="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",R="[\\x20\\t\\r\\n\\f]",B="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+R+"*("+B+")(?:"+R+"*([*^$|!~]?=)"+R+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+B+"))|)"+R+"*\\]",W=":("+B+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",$=new RegExp(R+"+","g"),F=new RegExp("^"+R+"+|((?:^|[^\\\\])(?:\\\\.)*)"+R+"+$","g"),z=new RegExp("^"+R+"*,"+R+"*"),_=new RegExp("^"+R+"*([>+~]|"+R+")"+R+"*"),U=new RegExp(R+"|>"),V=new RegExp(W),X=new RegExp("^"+B+"$"),Q={ID:new RegExp("^#("+B+")"),CLASS:new RegExp("^\\.("+B+")"),TAG:new RegExp("^("+B+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+R+"*(even|odd|(([+-]|)(\\d*)n|)"+R+"*(?:([+-]|)"+R+"*(\\d+)|))"+R+"*\\)|)","i"),bool:new RegExp("^(?:"+I+")$","i"),needsContext:new RegExp("^"+R+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+R+"*((?:-\\d)?\\d*)"+R+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,G=/^(?:input|select|textarea|button)$/i,K=/^h\d$/i,J=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+R+"?|("+R+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){C()},ae=xe(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{O.apply(t=P.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){O={apply:t.length?function(e,t){q.apply(e,P.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,d=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==d&&9!==d&&11!==d)return n;if(!r&&((e?e.ownerDocument||e:m)!==T&&C(e),e=e||T,E)){if(11!==d&&(u=Z.exec(t)))if(i=u[1]){if(9===d){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return O.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&p.getElementsByClassName&&e.getElementsByClassName)return O.apply(n,e.getElementsByClassName(i)),n}if(p.qsa&&!S[t+" "]&&(!v||!v.test(t))&&(1!==d||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===d&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=N),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+be(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return O.apply(n,f.querySelectorAll(c)),n}catch(e){S(t,!0)}finally{s===N&&e.removeAttribute("id")}}}return g(t.replace(F,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>x.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[N]=!0,e}function ce(e){var t=T.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)x.attrHandle[n[r]]=t}function de(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pe(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in p=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},C=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==T&&9===r.nodeType&&r.documentElement&&(a=(T=r).documentElement,E=!i(T),m!==T&&(n=T.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),p.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),p.getElementsByTagName=ce(function(e){return e.appendChild(T.createComment("")),!e.getElementsByTagName("*").length}),p.getElementsByClassName=J.test(T.getElementsByClassName),p.getById=ce(function(e){return a.appendChild(e).id=N,!T.getElementsByName||!T.getElementsByName(N).length}),p.getById?(x.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},x.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(x.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},x.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),x.find.TAG=p.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):p.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},x.find.CLASS=p.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(p.qsa=J.test(T.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+N+"'></a><select id='"+N+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+R+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+R+"*(?:value|"+I+")"),e.querySelectorAll("[id~="+N+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+N+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=T.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+R+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(p.matchesSelector=J.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){p.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",W)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=J.test(a.compareDocumentPosition),y=t||J.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!p.sortDetached&&t.compareDocumentPosition(e)===n?e===T||e.ownerDocument===m&&y(m,e)?-1:t===T||t.ownerDocument===m&&y(m,t)?1:u?H(u,e)-H(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===T?-1:t===T?1:i?-1:o?1:u?H(u,e)-H(u,t):0;if(i===o)return de(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?de(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),T},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==T&&C(e),p.matchesSelector&&E&&!S[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||p.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){S(t,!0)}return 0<se(t,T,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==T&&C(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==T&&C(e);var n=x.attrHandle[t.toLowerCase()],r=n&&L.call(x.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:p.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!p.detectDuplicates,u=!p.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(x=se.selectors={cacheLength:50,createPseudo:le,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&V.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=d[e+" "];return t||(t=new RegExp("(^|"+R+")"+e+"("+R+"|$)"))&&d(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),b="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=b&&e.nodeName.toLowerCase(),d=!n&&!b,p=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(b?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&d){p=(s=(r=(i=(o=(a=c)[N]||(a[N]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===A&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(p=s=0)||u.pop())if(1===a.nodeType&&++p&&a===e){i[h]=[A,s,p];break}}else if(d&&(p=s=(r=(i=(o=(a=e)[N]||(a[N]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===A&&r[1]),!1===p)while(a=++s&&a&&a[l]||(p=s=0)||u.pop())if((b?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++p&&(d&&((i=(o=a[N]||(a[N]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[A,p]),a===e))break;return(p-=v)===g||p%g==0&&0<=p/g}}},PSEUDO:function(e,o){var t,a=x.pseudos[e]||x.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[N]?a(o):1<a.length?(t=[e,e,"",o],x.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=H(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(F,"$1"));return s[N]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return X.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===T.activeElement&&(!T.hasFocus||T.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!x.pseudos.empty(e)},header:function(e){return K.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=x.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[e]=pe(e);for(e in{submit:!0,reset:!0})x.pseudos[e]=he(e);function me(){}function be(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function xe(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,d=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[A,d];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[N]||(e[N]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===A&&r[1]===d)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Ce(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(p,h,g,v,y,e){return v&&!v[N]&&(v=Te(v)),y&&!y[N]&&(y=Te(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!p||!e&&h?c:Ce(c,s,p,n,r),d=g?y||(e?p:l||v)?[]:t:f;if(g&&g(f,d,n,r),v){i=Ce(d,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(d[u[o]]=!(f[u[o]]=a))}if(e){if(y||p){if(y){i=[],o=d.length;while(o--)(a=d[o])&&i.push(f[o]=a);y(null,d=[],i,r)}o=d.length;while(o--)(a=d[o])&&-1<(i=y?H(e,a):s[o])&&(e[i]=!(t[i]=a))}}else d=Ce(d===t?d.splice(l,d.length):d),y?y(null,t,d,r):O.apply(t,d)})}function Ee(e){for(var i,t,n,r=e.length,o=x.relative[e[0].type],a=o||x.relative[" "],s=o?1:0,u=xe(function(e){return e===i},a,!0),l=xe(function(e){return-1<H(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=x.relative[e[s].type])c=[xe(we(c),t)];else{if((t=x.filter[e[s].type].apply(null,e[s].matches))[N]){for(n=++s;n<r;n++)if(x.relative[e[n].type])break;return Te(1<s&&we(c),1<s&&be(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(F,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&be(e))}c.push(t)}return we(c)}return me.prototype=x.filters=x.pseudos,x.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=b[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=x.preFilter;while(a){for(o in n&&!(r=z.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=_.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(F," ")}),a=a.slice(n.length)),x.filter)!(r=Q[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):b(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,b,r,i=[],o=[],a=k[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[N]?i.push(a):o.push(a);(a=k(e,(v=o,m=0<(y=i).length,b=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],d=w,p=e||b&&x.find.TAG("*",i),h=A+=null==d?1:Math.random()||.1,g=p.length;for(i&&(w=t===T||t||i);l!==g&&null!=(o=p[l]);l++){if(b&&o){a=0,t||o.ownerDocument===T||(C(o),n=!E);while(s=v[a++])if(s(o,t||T,n)){r.push(o);break}i&&(A=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=j.call(r));f=Ce(f)}O.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(A=h,w=d),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&x.relative[o[1].type]){if(!(t=(x.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=Q.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],x.relative[s=a.type])break;if((u=x.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&be(o)))return O.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},p.sortStable=N.split("").sort(D).join("")===N,p.detectDuplicates=!!l,C(),p.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(T.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),p.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(I,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(g);E.find=h,E.expr=h.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=h.uniqueSort,E.text=h.getText,E.isXMLDoc=h.isXML,E.contains=h.contains,E.escapeSelector=h.escape;var N=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},A=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function S(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function L(e,n,r){return x(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(L(this,e||[],!1))},not:function(e){return this.pushStack(L(this,e||[],!0))},is:function(e){return!!L(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:v,!0)),D.test(r[1])&&E.isPlainObject(t))for(r in t)x(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=v.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):x(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,j=E(v);var O=/^(?:parents|prev(?:Until|All))/,P={children:!0,contents:!0,next:!0,prev:!0};function H(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return N(e,"parentNode")},parentsUntil:function(e,t,n){return N(e,"parentNode",n)},next:function(e){return H(e,"nextSibling")},prev:function(e){return H(e,"previousSibling")},nextAll:function(e){return N(e,"nextSibling")},prevAll:function(e){return N(e,"previousSibling")},nextUntil:function(e,t,n){return N(e,"nextSibling",n)},prevUntil:function(e,t,n){return N(e,"previousSibling",n)},siblings:function(e){return A((e.parentNode||{}).firstChild,e)},children:function(e){return A(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(S(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(P[r]||E.uniqueSort(n),O.test(r)&&n.reverse()),this.pushStack(n)}});var I=/[^\x20\t\r\n\f]+/g;function R(e){return e}function B(e){throw e}function M(e,t,n,r){var i;try{e&&x(i=e.promise)?i.call(e).done(t).fail(n):e&&x(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(I)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){x(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==T(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=x(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&x(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,x(t)?s?t.call(e,l(u,o,R,s),l(u,o,B,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,B,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==B&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),g.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,x(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,x(t)?t:R)),o[2][3].add(l(0,e,x(n)?n:B))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(M(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||x(i[t]&&i[t].then)))return o.then();while(t--)M(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){g.console&&g.console.warn&&e&&W.test(e.name)&&g.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){g.setTimeout(function(){throw e})};var $=E.Deferred();function F(){v.removeEventListener("DOMContentLoaded",F),g.removeEventListener("load",F),E.ready()}E.fn.ready=function(e){return $.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||$.resolveWith(v,[E])}}),E.ready.then=$.then,"complete"===v.readyState||"loading"!==v.readyState&&!v.documentElement.doScroll?g.setTimeout(E.ready):(v.addEventListener("DOMContentLoaded",F),g.addEventListener("load",F));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===T(n))for(s in i=!0,n)z(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,x(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(U,V)}var Q=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=E.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Q(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(I)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var G=new Y,K=new Y,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}K.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return K.hasData(e)||G.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return G.access(e,t,n)},_removeData:function(e,t){G.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=K.get(o),1===o.nodeType&&!G.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),ee(o,r,i[r]));G.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){K.set(this,n)}):z(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=K.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){K.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=G.get(e,t),n&&(!r||Array.isArray(n)?r=G.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return G.get(e,n)||G.access(e,n,{empty:E.Callbacks("once memory").add(function(){G.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=G.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=v.documentElement,oe=function(e){return E.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===E.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};var le={};function ce(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=G.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=le[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),le[s]=u)))):"none"!==n&&(l[c]="none",G.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return ce(this,!0)},hide:function(){return ce(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?E(this).show():E(this).hide()})}});var fe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,pe=/^$|^module$|\/(?:java|ecma)script/i,he={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ge(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&S(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)G.set(e[n],"globalEval",!t||G.get(t[n],"globalEval"))}he.optgroup=he.option,he.tbody=he.tfoot=he.colgroup=he.caption=he.thead,he.th=he.td;var ye,me,be=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),d=[],p=0,h=e.length;p<h;p++)if((o=e[p])||0===o)if("object"===T(o))E.merge(d,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=he[s]||he._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(d,a.childNodes),(a=f.firstChild).textContent=""}else d.push(t.createTextNode(o));f.textContent="",p=0;while(o=d[p++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ge(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])pe.test(o.type||"")&&n.push(o)}return f}ye=v.createDocumentFragment().appendChild(v.createElement("div")),(me=v.createElement("input")).setAttribute("type","radio"),me.setAttribute("checked","checked"),me.setAttribute("name","t"),ye.appendChild(me),b.checkClone=ye.cloneNode(!0).cloneNode(!0).lastChild.checked,ye.innerHTML="<textarea>x</textarea>",b.noCloneChecked=!!ye.cloneNode(!0).lastChild.defaultValue;var we=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function Ne(){return!1}function Ae(e,t){return e===function(){try{return v.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ne;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(G.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=G.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),G.set(this,i,r),t=o(this,i),this[i](),r!==(n=G.get(this,i))||t?G.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(G.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===G.get(e,i)&&E.event.add(e,i,Ee)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,d,p,h,g,v=G.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(ie,i),n.guid||(n.guid=E.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(I)||[""]).length;while(l--)p=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),p&&(f=E.event.special[p]||{},p=(i?f.delegateType:f.bindType)||p,f=E.event.special[p]||{},c=E.extend({type:p,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(d=u[p])||((d=u[p]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(p,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,c):d.push(c),E.event.global[p]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,d,p,h,g,v=G.hasData(e)&&G.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(I)||[""]).length;while(l--)if(p=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),p){f=E.event.special[p]||{},d=u[p=(r?f.delegateType:f.bindType)||p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=d.length;while(o--)c=d[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(d.splice(o,1),c.selector&&d.delegateCount--,f.remove&&f.remove.call(e,c));a&&!d.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||E.removeEvent(e,p,v.handle),delete u[p])}else for(p in u)E.event.remove(e,p+t[l],n,r,!0);E.isEmptyObject(u)&&G.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=E.event.fix(e),u=new Array(arguments.length),l=(G.get(this,"events")||{})[s.type]||[],c=E.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=E.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:x(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return fe.test(t.type)&&t.click&&S(t,"input")&&Se(t,"click",Ee),!1},trigger:function(e){var t=this||e;return fe.test(t.type)&&t.click&&S(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return fe.test(t.type)&&t.click&&S(t,"input")&&G.get(t,"click")||S(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:Ne,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Ne,isPropagationStopped:Ne,isImmediatePropagationStopped:Ne,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(e,t){E.event.special[e]={setup:function(){return Se(this,e,Ae),!1},trigger:function(){return Se(this,e),!0},delegateType:t}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ne),this.each(function(){E.event.remove(this,e,n,t)})}});var De=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Le=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return S(e,"table")&&S(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Ie(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(G.hasData(e)&&(o=G.access(e),a=G.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)E.event.add(t,i,l[i][n]);K.hasData(e)&&(s=K.access(e),u=E.extend({},s),K.set(t,u))}}function Re(n,r,i,o){r=y.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,d=f-1,p=r[0],h=x(p);if(h||1<f&&"string"==typeof p&&!b.checkClone&&je.test(p))return n.each(function(e){var t=n.eq(e);h&&(r[0]=p.call(this,e,t.html())),Re(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ge(e,"script"),Pe)).length;c<f;c++)u=e,c!==d&&(u=E.clone(u,!0,!0),s&&E.merge(a,ge(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,He),c=0;c<s;c++)u=a[c],pe.test(u.type||"")&&!G.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):C(u.textContent.replace(qe,""),u,l))}return n}function Be(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ge(r)),r.parentNode&&(n&&oe(r)&&ve(ge(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e.replace(De,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(b.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ge(c),r=0,i=(o=ge(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&fe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ge(e),a=a||ge(c),r=0,i=o.length;r<i;r++)Ie(o[r],a[r]);else Ie(e,c);return 0<(a=ge(c,"script")).length&&ve(a,!f&&ge(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(Q(n)){if(t=n[G.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[G.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Be(this,e,!0)},remove:function(e){return Be(this,e)},text:function(e){return z(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ge(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Le.test(e)&&!he[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ge(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Re(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ge(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),We=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=g),t.getComputedStyle(e)},$e=new RegExp(re.join("|"),"i");function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||We(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=E.style(e,t)),!b.pixelBoxStyles()&&Me.test(a)&&$e.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=g.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=v.createElement("div"),u=v.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",b.clearCloneStyle="content-box"===u.style.backgroundClip,E.extend(b,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var _e=["Webkit","Moz","ms"],Ue=v.createElement("div").style,Ve={};function Xe(e){var t=E.cssProps[e]||Ve[e];return t||(e in Ue?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in Ue)return e}(e)||e)}var Qe,Ye,Ge=/^(none|table(?!-c[ea]).+)/,Ke=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ze={letterSpacing:"0",fontWeight:"400"};function et(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function tt(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+re[a]+"Width",!0,i))):(u+=E.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=E.css(e,"border"+re[a]+"Width",!0,i):s+=E.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function nt(e,t,n){var r=We(e),i=(!b.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Fe(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!b.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+tt(e,t,n||(i?"border":"content"),o,r,a)+"px"}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ke.test(t),l=e.style;if(u||(t=Xe(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=function(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&ne.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),b.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ke.test(t)||(t=Xe(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ze&&(i=Ze[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?nt(e,u,n):ue(e,Je,function(){return nt(e,u,n)})},set:function(e,t,n){var r,i=We(e),o=!b.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?tt(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-tt(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),et(0,t,s)}}}),E.cssHooks.marginLeft=ze(b.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=et)}),E.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=We(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=g.setTimeout(e,r);t.stop=function(){g.clearTimeout(n)}})},Qe=v.createElement("input"),Ye=v.createElement("select").appendChild(v.createElement("option")),Qe.type="checkbox",b.checkOn=""!==Qe.value,b.optSelected=Ye.selected,(Qe=v.createElement("input")).value="t",Qe.type="radio",b.radioValue="t"===Qe.value;var rt,it=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return z(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?rt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!b.radioValue&&"radio"===t&&S(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(I);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),rt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=it[t]||E.find.attr;it[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=it[o],it[o]=r,r=null!=a(e,t,n)?o:null,it[o]=i),r}});var ot=/^(?:input|select|textarea|button)$/i,at=/^(?:a|area)$/i;function st(e){return(e.match(I)||[]).join(" ")}function ut(e){return e.getAttribute&&e.getAttribute("class")||""}function lt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(I)||[]}E.fn.extend({prop:function(e,t){return z(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ot.test(e.nodeName)||at.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),b.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(x(t))return this.each(function(e){E(this).addClass(t.call(this,e,ut(this)))});if((e=lt(t)).length)while(n=this[u++])if(i=ut(n),r=1===n.nodeType&&" "+st(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=st(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(x(t))return this.each(function(e){E(this).removeClass(t.call(this,e,ut(this)))});if(!arguments.length)return this.attr("class","");if((e=lt(t)).length)while(n=this[u++])if(i=ut(n),r=1===n.nodeType&&" "+st(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=st(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):x(i)?this.each(function(e){E(this).toggleClass(i.call(this,e,ut(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=E(this),r=lt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=ut(this))&&G.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":G.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+st(ut(n))+" ").indexOf(t))return!0;return!1}});var ct=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=x(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(ct,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:st(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!S(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},b.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),b.focusin="onfocusin"in g;var ft=/^(?:focusinfocus|focusoutblur)$/,dt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,d=[n||v],p=m.call(e,"type")?e.type:e,h=m.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||v,3!==n.nodeType&&8!==n.nodeType&&!ft.test(p+E.event.triggered)&&(-1<p.indexOf(".")&&(p=(h=p.split(".")).shift(),h.sort()),u=p.indexOf(":")<0&&"on"+p,(e=e[E.expando]?e:new E.Event(p,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[p]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!w(n)){for(s=c.delegateType||p,ft.test(s+p)||(o=o.parentNode);o;o=o.parentNode)d.push(o),a=o;a===(n.ownerDocument||v)&&d.push(a.defaultView||a.parentWindow||g)}i=0;while((o=d[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||p,(l=(G.get(o,"events")||{})[e.type]&&G.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&Q(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=p,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(d.pop(),t)||!Q(n)||u&&x(n[p])&&!w(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=p,e.isPropagationStopped()&&f.addEventListener(p,dt),n[p](),e.isPropagationStopped()&&f.removeEventListener(p,dt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),b.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=G.access(e,r);t||e.addEventListener(n,i,!0),G.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=G.access(e,r)-1;t?G.access(e,r,t):(e.removeEventListener(n,i,!0),G.remove(e,r))}}});var pt,ht=/\[\]$/,gt=/\r?\n/g,vt=/^(?:submit|button|image|reset|file)$/i,yt=/^(?:input|select|textarea|keygen)/i;function mt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||ht.test(n)?i(n,t):mt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==T(e))i(n,e);else for(t in e)mt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=x(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)mt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&yt.test(this.nodeName)&&!vt.test(e)&&(this.checked||!fe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(gt,"\r\n")}}):{name:t.name,value:n.replace(gt,"\r\n")}}).get()}}),E.fn.extend({wrapAll:function(e){var t;return this[0]&&(x(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return x(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=x(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},b.createHTMLDocument=((pt=v.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===pt.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(b.createHTMLDocument?((r=(t=v.implementation.createHTMLDocument("")).createElement("base")).href=v.location.href,t.head.appendChild(r)):t=v),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),x(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||ie})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return z(this,function(e,t,n){var r;if(w(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=ze(b.pixelPosition,function(e,t){if(t)return t=Fe(e,n),Me.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return z(this,function(e,t,n){var r;return w(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),E.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),x(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=S,E.isFunction=x,E.isWindow=w,E.camelCase=X,E.type=T,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var bt=g.jQuery,xt=g.$;return E.noConflict=function(e){return g.$===E&&(g.$=xt),e&&g.jQuery===E&&(g.jQuery=bt),E},e||(g.jQuery=g.$=E),E});
/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(C){'use strict';function re(a){if(D(a))w(a.objectMaxDepth)&&(Wb.objectMaxDepth=Xb(a.objectMaxDepth)?a.objectMaxDepth:NaN),w(a.urlErrorParamsEnabled)&&Ga(a.urlErrorParamsEnabled)&&(Wb.urlErrorParamsEnabled=a.urlErrorParamsEnabled);else return Wb}function Xb(a){return W(a)&&0<a}function F(a,b){b=b||Error;return function(){var d=arguments[0],c;c="["+(a?a+":":"")+d+"] http://errors.angularjs.org/1.7.8/"+(a?a+"/":"")+d;for(d=1;d<arguments.length;d++){c=c+(1==d?"?":"&")+"p"+(d-1)+"=";var e=encodeURIComponent,
f;f=arguments[d];f="function"==typeof f?f.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof f?"undefined":"string"!=typeof f?JSON.stringify(f):f;c+=e(f)}return new b(c)}}function ya(a){if(null==a||$a(a))return!1;if(H(a)||A(a)||x&&a instanceof x)return!0;var b="length"in Object(a)&&a.length;return W(b)&&(0<=b&&b-1 in a||"function"===typeof a.item)}function r(a,b,d){var c,e;if(a)if(B(a))for(c in a)"prototype"!==c&&"length"!==c&&"name"!==c&&a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else if(H(a)||
ya(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,d,a);else if(Nc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&b.call(d,a[c],c,a);else for(c in a)ta.call(a,c)&&b.call(d,a[c],c,a);return a}function Oc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function Yb(a){return function(b,d){a(d,b)}}function se(){return++pb}
function Zb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(D(g)||B(g))for(var k=Object.keys(g),h=0,l=k.length;h<l;h++){var m=k[h],p=g[m];d&&D(p)?ha(p)?a[m]=new Date(p.valueOf()):ab(p)?a[m]=new RegExp(p):p.nodeName?a[m]=p.cloneNode(!0):$b(p)?a[m]=p.clone():(D(a[m])||(a[m]=H(p)?[]:{}),Zb(a[m],[p],!0)):a[m]=p}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return Zb(a,Ha.call(arguments,1),!1)}function te(a){return Zb(a,Ha.call(arguments,1),!0)}function fa(a){return parseInt(a,
10)}function ac(a,b){return S(Object.create(a),b)}function E(){}function Ta(a){return a}function ia(a){return function(){return a}}function bc(a){return B(a.toString)&&a.toString!==la}function z(a){return"undefined"===typeof a}function w(a){return"undefined"!==typeof a}function D(a){return null!==a&&"object"===typeof a}function Nc(a){return null!==a&&"object"===typeof a&&!Pc(a)}function A(a){return"string"===typeof a}function W(a){return"number"===typeof a}function ha(a){return"[object Date]"===la.call(a)}
function H(a){return Array.isArray(a)||a instanceof Array}function cc(a){switch(la.call(a)){case "[object Error]":return!0;case "[object Exception]":return!0;case "[object DOMException]":return!0;default:return a instanceof Error}}function B(a){return"function"===typeof a}function ab(a){return"[object RegExp]"===la.call(a)}function $a(a){return a&&a.window===a}function bb(a){return a&&a.$evalAsync&&a.$watch}function Ga(a){return"boolean"===typeof a}function ue(a){return a&&W(a.length)&&ve.test(la.call(a))}
function $b(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function we(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ua(a){return K(a.nodeName||a[0]&&a[0].nodeName)}function cb(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Ia(a,b,d){function c(a,b,c){c--;if(0>c)return"...";var d=b.$$hashKey,f;if(H(a)){f=0;for(var g=a.length;f<g;f++)b.push(e(a[f],c))}else if(Nc(a))for(f in a)b[f]=e(a[f],c);else if(a&&"function"===typeof a.hasOwnProperty)for(f in a)a.hasOwnProperty(f)&&
(b[f]=e(a[f],c));else for(f in a)ta.call(a,f)&&(b[f]=e(a[f],c));d?b.$$hashKey=d:delete b.$$hashKey;return b}function e(a,b){if(!D(a))return a;var d=g.indexOf(a);if(-1!==d)return k[d];if($a(a)||bb(a))throw pa("cpws");var d=!1,e=f(a);void 0===e&&(e=H(a)?[]:Object.create(Pc(a)),d=!0);g.push(a);k.push(e);return d?c(a,e,b):e}function f(a){switch(la.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(e(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(B(a.cloneNode))return a.cloneNode(!0)}
var g=[],k=[];d=Xb(d)?d:NaN;if(b){if(ue(b)||"[object ArrayBuffer]"===la.call(b))throw pa("cpta");if(a===b)throw pa("cpi");H(b)?b.length=0:r(b,function(a,c){"$$hashKey"!==c&&delete b[c]});g.push(a);k.push(b);return c(a,b,d)}return e(a,d)}function dc(a,b){return a===b||a!==a&&b!==b}function va(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d===typeof b&&"object"===d)if(H(a)){if(!H(b))return!1;if((d=a.length)===b.length){for(c=0;c<d;c++)if(!va(a[c],
b[c]))return!1;return!0}}else{if(ha(a))return ha(b)?dc(a.getTime(),b.getTime()):!1;if(ab(a))return ab(b)?a.toString()===b.toString():!1;if(bb(a)||bb(b)||$a(a)||$a(b)||H(b)||ha(b)||ab(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!B(a[c])){if(!va(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&w(b[c])&&!B(b[c]))return!1;return!0}return!1}function db(a,b,d){return a.concat(Ha.call(b,d))}function Va(a,b){var d=2<arguments.length?Ha.call(arguments,2):[];return!B(b)||b instanceof
RegExp?b:d.length?function(){return arguments.length?b.apply(a,db(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function Qc(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:$a(b)?d="$WINDOW":b&&C.document===b?d="$DOCUMENT":bb(b)&&(d="$SCOPE");return d}function eb(a,b){if(!z(a))return W(b)||(b=b?2:null),JSON.stringify(a,Qc,b)}function Rc(a){return A(a)?JSON.parse(a):a}function ec(a,b){a=a.replace(xe,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+
a)/6E4;return X(d)?b:d}function Sc(a,b){a=new Date(a.getTime());a.setMinutes(a.getMinutes()+b);return a}function fc(a,b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=ec(b,c);return Sc(a,d*(b-c))}function za(a){a=x(a).clone().empty();var b=x("<div></div>").append(a).html();try{return a[0].nodeType===Pa?K(b):b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/,function(a,b){return"<"+K(b)})}catch(d){return K(b)}}function Tc(a){try{return decodeURIComponent(a)}catch(b){}}function gc(a){var b={};r((a||"").split("&"),
function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=Tc(e),w(e)&&(f=w(f)?Tc(f):!0,ta.call(b,e)?H(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function ye(a){var b=[];r(a,function(a,c){H(a)?r(a,function(a){b.push(ba(c,!0)+(!0===a?"":"="+ba(a,!0)))}):b.push(ba(c,!0)+(!0===a?"":"="+ba(a,!0)))});return b.length?b.join("&"):""}function hc(a){return ba(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ba(a,
b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ze(a,b){var d,c,e=Qa.length;for(c=0;c<e;++c)if(d=Qa[c]+b,A(d=a.getAttribute(d)))return d;return null}function Ae(a,b){var d,c,e={};r(Qa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});r(Qa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});
d&&(Be?(e.strictDi=null!==ze(d,"strict-di"),b(d,c?[c]:[],e)):C.console.error("AngularJS: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))}function Uc(a,b,d){D(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=x(a);if(a.injector()){var c=a[0]===C.document?"document":za(a);throw pa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",
function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=fb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;C&&e.test(C.name)&&(d.debugInfoEnabled=!0,C.name=C.name.replace(e,""));if(C&&!f.test(C.name))return c();C.name=C.name.replace(f,"");ca.resumeBootstrap=function(a){r(a,function(a){b.push(a)});return c()};B(ca.resumeDeferredBootstrap)&&
ca.resumeDeferredBootstrap()}function Ce(){C.name="NG_ENABLE_DEBUG_INFO!"+C.name;C.location.reload()}function De(a){a=ca.element(a).injector();if(!a)throw pa("test");return a.get("$$testability")}function Vc(a,b){b=b||"_";return a.replace(Ee,function(a,c){return(c?b:"")+a.toLowerCase()})}function Fe(){var a;if(!Wc){var b=qb();(rb=z(b)?C.jQuery:b?C[b]:void 0)&&rb.fn.on?(x=rb,S(rb.fn,{scope:Wa.scope,isolateScope:Wa.isolateScope,controller:Wa.controller,injector:Wa.injector,inheritedData:Wa.inheritedData})):
x=Y;a=x.cleanData;x.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=(x._data(f)||{}).events)&&c.$destroy&&x(f).triggerHandler("$destroy");a(b)};ca.element=x;Wc=!0}}function gb(a,b,d){if(!a)throw pa("areq",b||"?",d||"required");return a}function sb(a,b,d){d&&H(a)&&(a=a[a.length-1]);gb(B(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ja(a,b){if("hasOwnProperty"===a)throw pa("badname",b);}function Ge(a,b,d){if(!b)return a;b=b.split(".");
for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&B(a)?Va(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=x(Ha.call(a,0,e))),c.push(b);return c||a}function T(){return Object.create(null)}function ic(a){if(null==a)return"";switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=!bc(a)||H(a)||ha(a)?eb(a):a.toString()}return a}function He(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=F("$injector"),
c=F("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||F;return b(a,"module",function(){var a={};return function(f,g,k){var h={};if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,c,d,f){f||(f=e);return function(){f[d||"push"]([b,c,arguments]);return t}}function b(a,c,d){d||(d=e);return function(b,e){e&&B(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return t}}if(!g)throw d("nomod",f);var e=[],n=[],s=[],G=a("$injector","invoke",
"push",n),t={_invokeQueue:e,_configBlocks:n,_runBlocks:s,info:function(a){if(w(a)){if(!D(a))throw c("aobj","value");h=a;return this}return h},requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator",n),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider",
"directive"),component:b("$compileProvider","component"),config:G,run:function(a){s.push(a);return this}};k&&G(k);return t})}})}function ja(a,b){if(H(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(D(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function Ie(a,b){var d=[];Xb(b)&&(a=ca.copy(a,null,b));return JSON.stringify(a,function(a,b){b=Qc(a,b);if(D(b)){if(0<=d.indexOf(b))return"...";d.push(b)}return b})}function Je(a){S(a,{errorHandlingConfig:re,
bootstrap:Uc,copy:Ia,extend:S,merge:te,equals:va,element:x,forEach:r,injector:fb,noop:E,bind:Va,toJson:eb,fromJson:Rc,identity:Ta,isUndefined:z,isDefined:w,isString:A,isFunction:B,isObject:D,isNumber:W,isElement:$b,isArray:H,version:Ke,isDate:ha,callbacks:{$$counter:0},getTestability:De,reloadWithDebugInfo:Ce,$$minErr:F,$$csp:Aa,$$encodeUriSegment:hc,$$encodeUriQuery:ba,$$lowercase:K,$$stringify:ic,$$uppercase:ub});kc=He(C);kc("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Le});
a.provider("$compile",Xc).directive({a:Me,input:Yc,textarea:Yc,form:Ne,script:Oe,select:Pe,option:Qe,ngBind:Re,ngBindHtml:Se,ngBindTemplate:Te,ngClass:Ue,ngClassEven:Ve,ngClassOdd:We,ngCloak:Xe,ngController:Ye,ngForm:Ze,ngHide:$e,ngIf:af,ngInclude:bf,ngInit:cf,ngNonBindable:df,ngPluralize:ef,ngRef:ff,ngRepeat:gf,ngShow:hf,ngStyle:jf,ngSwitch:kf,ngSwitchWhen:lf,ngSwitchDefault:mf,ngOptions:nf,ngTransclude:of,ngModel:pf,ngList:qf,ngChange:rf,pattern:Zc,ngPattern:Zc,required:$c,ngRequired:$c,minlength:ad,
ngMinlength:ad,maxlength:bd,ngMaxlength:bd,ngValue:sf,ngModelOptions:tf}).directive({ngInclude:uf,input:vf}).directive(vb).directive(cd);a.provider({$anchorScroll:wf,$animate:xf,$animateCss:yf,$$animateJs:zf,$$animateQueue:Af,$$AnimateRunner:Bf,$$animateAsyncRun:Cf,$browser:Df,$cacheFactory:Ef,$controller:Ff,$document:Gf,$$isDocumentHidden:Hf,$exceptionHandler:If,$filter:dd,$$forceReflow:Jf,$interpolate:Kf,$interval:Lf,$$intervalFactory:Mf,$http:Nf,$httpParamSerializer:Of,$httpParamSerializerJQLike:Pf,
$httpBackend:Qf,$xhrFactory:Rf,$jsonpCallbacks:Sf,$location:Tf,$log:Uf,$parse:Vf,$rootScope:Wf,$q:Xf,$$q:Yf,$sce:Zf,$sceDelegate:$f,$sniffer:ag,$$taskTrackerFactory:bg,$templateCache:cg,$templateRequest:dg,$$testability:eg,$timeout:fg,$window:gg,$$rAF:hg,$$jqLite:ig,$$Map:jg,$$cookieReader:kg})}]).info({angularVersion:"1.7.8"})}function wb(a,b){return b.toUpperCase()}function xb(a){return a.replace(lg,wb)}function lc(a){a=a.nodeType;return 1===a||!a||9===a}function ed(a,b){var d,c,e=b.createDocumentFragment(),
f=[];if(mc.test(a)){d=e.appendChild(b.createElement("div"));c=(mg.exec(a)||["",""])[1].toLowerCase();c=oa[c]||oa._default;d.innerHTML=c[1]+a.replace(ng,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=db(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});return e}function Y(a){if(a instanceof Y)return a;var b;A(a)&&(a=U(a),b=!0);if(!(this instanceof Y)){if(b&&"<"!==a.charAt(0))throw nc("nosel");return new Y(a)}if(b){b=
C.document;var d;a=(d=og.exec(a))?[b.createElement(d[1])]:(d=ed(a,b))?d.childNodes:[];oc(this,a)}else B(a)?fd(a):oc(this,a)}function pc(a){return a.cloneNode(!0)}function yb(a,b){!b&&lc(a)&&x.cleanData([a]);a.querySelectorAll&&x.cleanData(a.querySelectorAll("*"))}function gd(a){for(var b in a)return!1;return!0}function hd(a){var b=a.ng339,d=b&&Ka[b],c=d&&d.events,d=d&&d.data;d&&!gd(d)||c&&!gd(c)||(delete Ka[b],a.ng339=void 0)}function id(a,b,d,c){if(w(c))throw nc("offargs");var e=(c=zb(a))&&c.events,
f=c&&c.handle;if(f){if(b){var g=function(b){var c=e[b];w(d)&&cb(c||[],d);w(d)&&c&&0<c.length||(a.removeEventListener(b,f),delete e[b])};r(b.split(" "),function(a){g(a);Ab[a]&&g(Ab[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f),delete e[b];hd(a)}}function qc(a,b){var d=a.ng339;if(d=d&&Ka[d])b?delete d.data[b]:d.data={},hd(a)}function zb(a,b){var d=a.ng339,d=d&&Ka[d];b&&!d&&(a.ng339=d=++pg,d=Ka[d]={events:{},data:{},handle:void 0});return d}function rc(a,b,d){if(lc(a)){var c,e=w(d),
f=!e&&b&&!D(b),g=!b;a=(a=zb(a,!f))&&a.data;if(e)a[xb(b)]=d;else{if(g)return a;if(f)return a&&a[xb(b)];for(c in b)a[xb(c)]=b[c]}}}function Bb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Cb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=U(a);c=c.replace(" "+a+" "," ")});c!==d&&a.setAttribute("class",U(c))}}function Db(a,b){if(b&&a.setAttribute){var d=
(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," "),c=d;r(b.split(" "),function(a){a=U(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});c!==d&&a.setAttribute("class",U(c))}}function oc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function jd(a,b){return Eb(a,"$"+(b||"ngController")+"Controller")}function Eb(a,b,d){9===a.nodeType&&(a=a.documentElement);for(b=H(b)?b:[b];a;){for(var c=
0,e=b.length;c<e;c++)if(w(d=x.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function kd(a){for(yb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Fb(a,b){b||yb(a);var d=a.parentNode;d&&d.removeChild(a)}function qg(a,b){b=b||C;if("complete"===b.document.readyState)b.setTimeout(a);else x(b).on("load",a)}function fd(a){function b(){C.document.removeEventListener("DOMContentLoaded",b);C.removeEventListener("load",b);a()}"complete"===C.document.readyState?C.setTimeout(a):(C.document.addEventListener("DOMContentLoaded",
b),C.addEventListener("load",b))}function ld(a,b){var d=Gb[b.toLowerCase()];return d&&md[ua(a)]&&d}function rg(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(z(c.immediatePropagationStopped)){var k=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();k&&k.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};
var h=f.specialHandlerWrapper||sg;1<g&&(f=ja(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||h(a,c,f[l])}};d.elem=a;return d}function sg(a,b,d){d.call(a,b)}function tg(a,b,d){var c=b.relatedTarget;c&&(c===a||ug.call(a,c))||d.call(a,b)}function ig(){this.$get=function(){return S(Y,{hasClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Db(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Cb(a,b)}})}}function La(a,b){var d=a&&a.$$hashKey;
if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"===d||"object"===d&&null!==a?a.$$hashKey=d+":"+(b||se)():d+":"+a}function nd(){this._keys=[];this._values=[];this._lastKey=NaN;this._lastIndex=-1}function od(a){a=Function.prototype.toString.call(a).replace(vg,"");return a.match(wg)||a.match(xg)}function yg(a){return(a=od(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function fb(a,b){function d(a){return function(b,c){if(D(b))r(b,Yb(a));else return a(b,
c)}}function c(a,b){Ja(a,"service");if(B(b)||H(b))b=n.instantiate(b);if(!b.$get)throw Ba("pget",a);return p[a+"Provider"]=b}function e(a,b){return function(){var c=t.invoke(b,this);if(z(c))throw Ba("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){gb(z(a)||H(a),"modulesToLoad","not an array");var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=n.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.set(a,!0);try{A(a)?(c=kc(a),
t.modules[a]=c,b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):B(a)?b.push(n.invoke(a)):H(a)?b.push(n.invoke(a)):sb(a,"module")}catch(e){throw H(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1===e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ba("modulerr",a,e.stack||e.message||e);}}});return b}function k(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===h)throw Ba("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=h,a[b]=c(b,e),
a[b]}catch(f){throw a[b]===h&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=fb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ba("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);H(a)&&(a=a[a.length-1]);d=a;if(Ca||"function"!==typeof d)d=!1;else{var f=d.$$ngIsClass;Ga(f)||(f=d.$$ngIsClass=/^class\b/.test(Function.prototype.toString.call(d)));d=f}return d?
(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=H(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:fb.$$annotate,has:function(b){return p.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var h={},l=[],m=new Hb,p={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,
ia(b),!1)}),constant:d(function(a,b){Ja(a,"constant");p[a]=b;s[a]=b}),decorator:function(a,b){var c=n.get(a+"Provider"),d=c.$get;c.$get=function(){var a=t.invoke(d,c);return t.invoke(b,null,{$delegate:a})}}}},n=p.$injector=k(p,function(a,b){ca.isString(b)&&l.push(b);throw Ba("unpr",l.join(" <- "));}),s={},G=k(s,function(a,b){var c=n.get(a+"Provider",b);return t.invoke(c.$get,c,void 0,a)}),t=G;p.$injectorProvider={$get:ia(G)};t.modules=n.modules=T();var N=g(a),t=G.get("$injector");t.strictDi=b;r(N,
function(a){a&&t.invoke(a)});t.loadNewModules=function(a){r(g(a),function(a){a&&t.invoke(a)})};return t}function wf(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;B(c)?c=c():$b(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):W(c)||
(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=A(a)?a:W(a)?a.toString():d.hash();var b;a?(b=k.getElementById(a))?f(b):(b=e(k.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var k=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||qg(function(){c.$evalAsync(g)})});return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;H(a)&&(a=a.join(" "));H(b)&&(b=b.join(" "));return a+" "+b}function zg(a){A(a)&&
(a=a.split(" "));var b=T();r(a,function(a){a.length&&(b[a]=!0)});return b}function ra(a){return D(a)?a:{}}function Ag(a,b,d,c,e){function f(){qa=null;k()}function g(){t=y();t=z(t)?null:t;va(t,P)&&(t=P);N=P=t}function k(){var a=N;g();if(v!==h.url()||a!==t)v=h.url(),N=t,r(J,function(a){a(h.url(),t)})}var h=this,l=a.location,m=a.history,p=a.setTimeout,n=a.clearTimeout,s={},G=e(d);h.isMock=!1;h.$$completeOutstandingRequest=G.completeTask;h.$$incOutstandingRequestCount=G.incTaskCount;h.notifyWhenNoOutstandingRequests=
G.notifyWhenNoPendingTasks;var t,N,v=l.href,jc=b.find("base"),qa=null,y=c.history?function(){try{return m.state}catch(a){}}:E;g();h.url=function(b,d,e){z(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=N===e;b=ga(b).href;if(v===b&&(!c.history||f))return h;var k=v&&Da(v)===Da(b);v=b;N=e;!c.history||k&&f?(k||(qa=b),d?l.replace(b):k?(d=l,e=b,f=e.indexOf("#"),e=-1===f?"":e.substr(f),d.hash=e):l.href=b,l.href!==b&&(qa=b)):(m[d?"replaceState":"pushState"](e,"",b),g());
qa&&(qa=b);return h}return(qa||l.href).replace(/#$/,"")};h.state=function(){return t};var J=[],I=!1,P=null;h.onUrlChange=function(b){if(!I){if(c.history)x(a).on("popstate",f);x(a).on("hashchange",f);I=!0}J.push(b);return b};h.$$applicationDestroyed=function(){x(a).off("hashchange popstate",f)};h.$$checkUrlChange=k;h.baseHref=function(){var a=jc.attr("href");return a?a.replace(/^(https?:)?\/\/[^/]*/,""):""};h.defer=function(a,b,c){var d;b=b||0;c=c||G.DEFAULT_TASK_TYPE;G.incTaskCount(c);d=p(function(){delete s[d];
G.completeTask(a,c)},b);s[d]=c;return d};h.defer.cancel=function(a){if(s.hasOwnProperty(a)){var b=s[a];delete s[a];n(a);G.completeTask(E,b);return!0}return!1}}function Df(){this.$get=["$window","$log","$sniffer","$document","$$taskTrackerFactory",function(a,b,d,c,e){return new Ag(a,c,b,d,e)}]}function Ef(){this.$get=function(){function a(a,c){function e(a){a!==p&&(n?n===a&&(n=a.n):n=a,f(a.n,a.p),f(a,p),p=a,p.n=null)}function f(a,b){a!==b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw F("$cacheFactory")("iid",
a);var g=0,k=S({},c,{id:a}),h=T(),l=c&&c.capacity||Number.MAX_VALUE,m=T(),p=null,n=null;return b[a]={put:function(a,b){if(!z(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in h||g++;h[a]=b;g>l&&this.remove(n.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return h[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b===p&&(p=b.p);b===n&&(n=b.n);f(b.n,b.p);delete m[a]}a in h&&(delete h[a],g--)},removeAll:function(){h=T();g=0;m=T();
p=n=null},destroy:function(){m=k=h=null;delete b[a]},info:function(){return S({},k,{size:g})}}}var b={};a.info=function(){var a={};r(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function cg(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Xc(a,b){function d(a,b,c){var d=/^([@&]|[=<](\*?))(\??)\s*([\w$]*)$/,e=T();r(a,function(a,f){a=a.trim();if(a in p)e[f]=p[a];else{var g=a.match(d);if(!g)throw $("iscp",b,f,a,c?"controller bindings definition":
"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(p[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==K(b))throw $("baddir",a);if(a!==a.trim())throw $("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!H(b)&&D(b)&&r(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive:\s*([\w-]+)\s+(.*)$/,k=/(([\w-]+)(?::([^;]+))?;?)/,h=we("ngSrc,ngSrcset,src,srcset"),
l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,p=T();this.directive=function qa(b,d){gb(b,"name");Ja(b,"directive");A(b)?(c(b),gb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];r(f[b],function(f,g){try{var h=a.invoke(f);B(h)?h={compile:ia(h)}:!h.compile&&h.link&&(h.compile=ia(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);var k=h,l=h.restrict;if(l&&(!A(l)||!/[EACM]/.test(l)))throw $("badrestrict",
l,b);k.restrict=l||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(m){c(m)}});return d}])),f[b].push(d)):r(b,Yb(qa));return this};this.component=function y(a,b){function c(a){function e(b){return B(b)||H(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Bg(b.controller)||b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",
require:b.require};r(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}if(!A(a))return r(a,Yb(Va(this,y))),this;var d=b.controller||function(){};r(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,B(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return w(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};
var n=!0;this.debugInfoEnabled=function(a){return w(a)?(n=a,this):n};var s=!1;this.strictComponentBindingsEnabled=function(a){return w(a)?(s=a,this):s};var G=10;this.onChangesTtl=function(a){return arguments.length?(G=a,this):G};var t=!0;this.commentDirectivesEnabled=function(a){return arguments.length?(t=a,this):t};var N=!0;this.cssClassDirectivesEnabled=function(a){return arguments.length?(N=a,this):N};var v=T();this.addPropertySecurityContext=function(a,b,c){var d=a.toLowerCase()+"|"+b.toLowerCase();
if(d in v&&v[d]!==c)throw $("ctxoverride",a,b,v[d],c);v[d]=c;return this};(function(){function a(b,c){r(c,function(a){v[a.toLowerCase()]=b})}a(V.HTML,["iframe|srcdoc","*|innerHTML","*|outerHTML"]);a(V.CSS,["*|style"]);a(V.URL,"area|href area|ping a|href a|ping blockquote|cite body|background del|cite input|src ins|cite q|cite".split(" "));a(V.MEDIA_URL,"audio|src img|src img|srcset source|src source|srcset track|src video|src video|poster".split(" "));a(V.RESOURCE_URL,"*|formAction applet|code applet|codebase base|href embed|src frame|src form|action head|profile html|manifest iframe|src link|href media|src object|codebase object|data script|src".split(" "))})();
this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate",function(a,b,c,e,p,M,L,u,R){function q(){try{if(!--Ja)throw Ua=void 0,$("infchng",G);L.$apply(function(){for(var a=0,b=Ua.length;a<b;++a)try{Ua[a]()}catch(d){c(d)}Ua=void 0})}finally{Ja++}}function ma(a,b){if(!a)return a;if(!A(a))throw $("srcset",b,a.toString());for(var c="",d=U(a),e=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,e=/\s/.test(d)?e:/(,)/,d=d.split(e),e=Math.floor(d.length/
2),f=0;f<e;f++)var g=2*f,c=c+u.getTrustedMediaUrl(U(d[g])),c=c+(" "+U(d[g+1]));d=U(d[2*f]).split(/\s/);c+=u.getTrustedMediaUrl(U(d[0]));2===d.length&&(c+=" "+U(d[1]));return c}function w(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function O(a,b,c){Fa.innerHTML="<span "+b+">";b=Fa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function sa(a,b){try{a.addClass(b)}catch(c){}}
function da(a,b,c,d,e){a instanceof x||(a=x(a));var f=Xa(a,b,a,c,d,e);da.$$addScopeClass(a);var g=null;return function(b,c,d){if(!a)throw $("multilink");gb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var h=d.parentBoundTranscludeFn,k=d.transcludeControllers;d=d.futureParentElement;h&&h.$$boundTransclude&&(h=h.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&la.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==g?x(ja(g,x("<div></div>").append(a).html())):c?Wa.clone.call(a):
a;if(k)for(var l in k)d.data("$"+l+"Controller",k[l].instance);da.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,h);c||(a=f=null);return d}}function Xa(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,I,t;if(n)for(t=Array(c.length),m=0;m<h.length;m+=3)f=h[m],t[f]=c[f];else t=c;m=0;for(p=h.length;m<p;)k=t[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),da.$$addScopeInfo(x(k),l)):l=a,I=c.transcludeOnThisElement?ka(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ka(a,b):null,c(f,l,k,d,I)):f&&f(a,k.childNodes,
void 0,e)}for(var h=[],k=H(a)||a instanceof x,l,m,p,I,n,t=0;t<a.length;t++){l=new w;11===Ca&&ib(a,t,k);m=sc(a[t],[],l,0===t?d:void 0,e);(f=m.length?aa(m,a[t],l,b,c,null,[],[],f):null)&&f.scope&&da.$$addScopeClass(l.$$element);l=f&&f.terminal||!(p=a[t].childNodes)||!p.length?null:Xa(p,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(t,f,l),I=!0,n=n||f;f=null}return I?g:null}function ib(a,b,c){var d=a[b],e=d.parentNode,f;if(d.nodeType===Pa)for(;;){f=e?d.nextSibling:
a[b+1];if(!f||f.nodeType!==Pa)break;d.nodeValue+=f.nodeValue;f.parentNode&&f.parentNode.removeChild(f);c&&f===a[b+1]&&a.splice(b+1,1)}}function ka(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?ka(a,b.$$slots[f],c):null;return d}function sc(a,b,d,e,f){var g=d.$attr,h;switch(a.nodeType){case 1:h=ua(a);X(b,wa(h),"E",e,f);for(var l,m,
n,t,J,s=a.attributes,v=0,G=s&&s.length;v<G;v++){var P=!1,N=!1,r=!1,y=!1,u=!1,M;l=s[v];m=l.name;t=l.value;n=wa(m.toLowerCase());(J=n.match(Ra))?(r="Attr"===J[1],y="Prop"===J[1],u="On"===J[1],m=m.replace(pd,"").toLowerCase().substr(4+J[1].length).replace(/_(.)/g,function(a,b){return b.toUpperCase()})):(M=n.match(Sa))&&ca(M[1])&&(P=m,N=m.substr(0,m.length-5)+"end",m=m.substr(0,m.length-6));if(y||u)d[n]=t,g[n]=l.name,y?Ea(a,b,n,m):b.push(qd(p,L,c,n,m,!1));else{n=wa(m.toLowerCase());g[n]=m;if(r||!d.hasOwnProperty(n))d[n]=
t,ld(a,n)&&(d[n]=!0);Ia(a,b,t,n,r);X(b,n,"A",e,f,P,N)}}"input"===h&&"hidden"===a.getAttribute("type")&&a.setAttribute("autocomplete","off");if(!Qa)break;g=a.className;D(g)&&(g=g.animVal);if(A(g)&&""!==g)for(;a=k.exec(g);)n=wa(a[2]),X(b,n,"C",e,f)&&(d[n]=U(a[3])),g=g.substr(a.index+a[0].length);break;case Pa:na(b,a.nodeValue);break;case 8:if(!Oa)break;F(a,b,d,e,f)}b.sort(ia);return b}function F(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=wa(f[1]);X(b,h,"M",d,e)&&(c[h]=U(f[2]))}}catch(k){}}
function V(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw $("uterdir",b,c);1===a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return x(d)}function Y(a,b,c){return function(d,e,f,g,h){e=V(e[0],b,c);return a(d,e,f,g,h)}}function Z(a,b,c,d,e,f){var g;return a?da(b,c,d,e,f):function(){g||(g=da(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function aa(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=
Y(a,c,d));a.require=u.require;a.directiveName=Q;if(s===u||u.$$isolateScope)a=Aa(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Y(b,c,d));b.require=u.require;b.directiveName=Q;if(s===u||u.$$isolateScope)b=Aa(b,{isolateScope:!0});k.push(b)}}function p(a,e,f,g,l){function m(a,b,c,d){var e;bb(a)||(d=c,c=b,b=a,a=void 0);N&&(e=P);c||(c=N?Q.parent():Q);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,R);if(z(f))throw $("noslot",d,za(Q));}else return l(a,b,e,c,R)}var n,u,L,y,G,P,M,Q;b===f?(g=d,Q=d.$$element):(Q=
x(f),g=new w(Q,d));G=e;s?y=e.$new(!0):t&&(G=e.$parent);l&&(M=m,M.$$boundTransclude=l,M.isSlotFilled=function(a){return!!l.$$slots[a]});J&&(P=ea(Q,g,M,J,y,e,s));s&&(da.$$addScopeInfo(Q,y,!0,!(v&&(v===s||v===s.$$originalDirective))),da.$$addScopeClass(Q,!0),y.$$isolateBindings=s.$$isolateBindings,u=Da(e,g,y,y.$$isolateBindings,s),u.removeWatches&&y.$on("$destroy",u.removeWatches));for(n in P){u=J[n];L=P[n];var Cg=u.$$bindings.bindToController;L.instance=L();Q.data("$"+u.name+"Controller",L.instance);
L.bindingInfo=Da(G,g,L.instance,Cg,u)}r(J,function(a,b){var c=a.require;a.bindToController&&!H(c)&&D(c)&&S(P[b].instance,W(b,c,Q,P))});r(P,function(a){var b=a.instance;if(B(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(B(b.$onInit))try{b.$onInit()}catch(e){c(e)}B(b.$doCheck)&&(G.$watch(function(){b.$doCheck()}),b.$doCheck());B(b.$onDestroy)&&G.$on("$destroy",function(){b.$onDestroy()})});n=0;for(u=h.length;n<u;n++)L=h[n],Ba(L,L.isolateScope?y:e,Q,g,L.require&&W(L.directiveName,
L.require,Q,P),M);var R=e;s&&(s.template||null===s.templateUrl)&&(R=y);a&&a(R,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)L=k[n],Ba(L,L.isolateScope?y:e,Q,g,L.require&&W(L.directiveName,L.require,Q,P),M);r(P,function(a){a=a.instance;B(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,t=l.newScopeDirective,J=l.controllerDirectives,s=l.newIsolateScopeDirective,v=l.templateDirective,L=l.nonTlbTranscludeDirective,G=!1,P=!1,N=l.hasElementTranscludeDirective,y=d.$$element=x(b),u,Q,
M,R=e,q,ma=!1,Ib=!1,O,sa=0,A=a.length;sa<A;sa++){u=a[sa];var E=u.$$start,ib=u.$$end;E&&(y=V(b,E,ib));M=void 0;if(n>u.priority)break;if(O=u.scope)u.templateUrl||(D(O)?(ba("new/isolated scope",s||t,u,y),s=u):ba("new/isolated scope",s,u,y)),t=t||u;Q=u.name;if(!ma&&(u.replace&&(u.templateUrl||u.template)||u.transclude&&!u.$$tlb)){for(O=sa+1;ma=a[O++];)if(ma.transclude&&!ma.$$tlb||ma.replace&&(ma.templateUrl||ma.template)){Ib=!0;break}ma=!0}!u.templateUrl&&u.controller&&(J=J||T(),ba("'"+Q+"' controller",
J[Q],u,y),J[Q]=u);if(O=u.transclude)if(G=!0,u.$$tlb||(ba("transclusion",L,u,y),L=u),"element"===O)N=!0,n=u.priority,M=y,y=d.$$element=x(da.$$createComment(Q,d[Q])),b=y[0],pa(f,Ha.call(M,0),b),R=Z(Ib,M,e,n,g&&g.name,{nonTlbTranscludeDirective:L});else{var ka=T();if(D(O)){M=C.document.createDocumentFragment();var Xa=T(),F=T();r(O,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Xa[a]=b;ka[b]=null;F[b]=c});r(y.contents(),function(a){var b=Xa[wa(ua(a))];b?(F[b]=!0,ka[b]=ka[b]||C.document.createDocumentFragment(),
ka[b].appendChild(a)):M.appendChild(a)});r(F,function(a,b){if(!a)throw $("reqslot",b);});for(var K in ka)ka[K]&&(R=x(ka[K].childNodes),ka[K]=Z(Ib,R,e));M=x(M.childNodes)}else M=x(pc(b)).contents();y.empty();R=Z(Ib,M,e,void 0,void 0,{needsNewScope:u.$$isolateScope||u.$$newScope});R.$$slots=ka}if(u.template)if(P=!0,ba("template",v,u,y),v=u,O=B(u.template)?u.template(y,d):u.template,O=Na(O),u.replace){g=u;M=mc.test(O)?rd(ja(u.templateNamespace,U(O))):[];b=M[0];if(1!==M.length||1!==b.nodeType)throw $("tplrt",
Q,"");pa(f,y,b);A={$attr:{}};O=sc(b,[],A);var Dg=a.splice(sa+1,a.length-(sa+1));(s||t)&&fa(O,s,t);a=a.concat(O).concat(Dg);ga(d,A);A=a.length}else y.html(O);if(u.templateUrl)P=!0,ba("template",v,u,y),v=u,u.replace&&(g=u),p=ha(a.splice(sa,a.length-sa),y,d,f,G&&R,h,k,{controllerDirectives:J,newScopeDirective:t!==u&&t,newIsolateScopeDirective:s,templateDirective:v,nonTlbTranscludeDirective:L}),A=a.length;else if(u.compile)try{q=u.compile(y,d,R);var X=u.$$originalDirective||u;B(q)?m(null,Va(X,q),E,ib):
q&&m(Va(X,q.pre),Va(X,q.post),E,ib)}catch(ca){c(ca,za(y))}u.terminal&&(p.terminal=!0,n=Math.max(n,u.priority))}p.scope=t&&!0===t.scope;p.transcludeOnThisElement=G;p.templateOnThisElement=P;p.transclude=R;l.hasElementTranscludeDirective=N;return p}function W(a,b,c,d){var e;if(A(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e="^^"===g&&c[0]&&9===c[0].nodeType?null:g?c.inheritedData(h):c.data(h)}if(!e&&
!f)throw $("ctreq",b,a);}else if(H(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=W(a,b[g],c,d);else D(b)&&(e={},r(b,function(b,f){e[f]=W(a,b,c,d)}));return e||null}function ea(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"===p&&(p=b[l.name]);m=M(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}function fa(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=ac(a[d],{$$isolateScope:b,
$$newScope:c})}function X(b,c,e,g,h,k,l){if(c===h)return null;var m=null;if(f.hasOwnProperty(c)){h=a.get(c+"Directive");for(var p=0,n=h.length;p<n;p++)if(c=h[p],(z(g)||g>c.priority)&&-1!==c.restrict.indexOf(e)){k&&(c=ac(c,{$$start:k,$$end:l}));if(!c.$$bindings){var I=m=c,t=c.name,u={isolateScope:null,bindToController:null};D(I.scope)&&(!0===I.bindToController?(u.bindToController=d(I.scope,t,!0),u.isolateScope={}):u.isolateScope=d(I.scope,t,!1));D(I.bindToController)&&(u.bindToController=d(I.bindToController,
t,!0));if(u.bindToController&&!I.controller)throw $("noctrl",t);m=m.$$bindings=u;D(m.isolateScope)&&(c.$$isolateBindings=m.isolateScope)}b.push(c);m=c}}return m}function ca(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function ga(a,b){var c=b.$attr,d=a.$attr;r(a,function(d,e){"$"!==e.charAt(0)&&(b[e]&&b[e]!==d&&(d=d.length?d+(("style"===e?";":" ")+b[e]):b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,e){a.hasOwnProperty(e)||
"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ha(a,b,d,f,g,h,k,l){var m=[],p,n,t=b[0],u=a.shift(),J=ac(u,{templateUrl:null,transclude:null,replace:null,$$originalDirective:u}),s=B(u.templateUrl)?u.templateUrl(b,d):u.templateUrl,L=u.templateNamespace;b.empty();e(s).then(function(c){var e,I;c=Na(c);if(u.replace){c=mc.test(c)?rd(ja(L,U(c))):[];e=c[0];if(1!==c.length||1!==e.nodeType)throw $("tplrt",u.name,s);c={$attr:{}};pa(f,b,e);var v=sc(e,[],c);D(u.scope)&&fa(v,!0);a=
v.concat(a);ga(d,c)}else e=t,b.html(c);a.unshift(J);p=aa(a,e,d,g,b,u,h,k,l);r(f,function(a,c){a===e&&(f[c]=b[0])});for(n=Xa(b[0].childNodes,g);m.length;){c=m.shift();I=m.shift();var y=m.shift(),P=m.shift(),v=b[0];if(!c.$$destroyed){if(I!==t){var G=I.className;l.hasElementTranscludeDirective&&u.replace||(v=pc(e));pa(y,x(I),v);sa(x(v),G)}I=p.transcludeOnThisElement?ka(c,p.transclude,P):P;p(n,c,v,f,I)}}m=null}).catch(function(a){cc(a)&&c(a)});return function(a,b,c,d,e){a=e;b.$$destroyed||(m?m.push(b,
c,d,a):(p.transcludeOnThisElement&&(a=ka(b,p.transclude,e)),p(n,b,c,d,a)))}}function ia(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function ba(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw $("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,za(d));}function na(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&da.$$addBindingClass(a);return function(a,c){var e=c.parent();
b||da.$$addBindingClass(e);da.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ja(a,b){a=K(a||"html");switch(a){case "svg":case "math":var c=C.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function oa(a,b){if("srcdoc"===b)return u.HTML;if("src"===b||"ngSrc"===b)return-1===["img","video","audio","source","track"].indexOf(a)?u.RESOURCE_URL:u.MEDIA_URL;if("xlinkHref"===b)return"image"===a?u.MEDIA_URL:
"a"===a?u.URL:u.RESOURCE_URL;if("form"===a&&"action"===b||"base"===a&&"href"===b||"link"===a&&"href"===b)return u.RESOURCE_URL;if("a"===a&&("href"===b||"ngHref"===b))return u.URL}function xa(a,b){var c=b.toLowerCase();return v[a+"|"+c]||v["*|"+c]}function ya(a){return ma(u.valueOf(a),"ng-prop-srcset")}function Ea(a,b,c,d){if(m.test(d))throw $("nodomevents");a=ua(a);var e=xa(a,d),f=Ta;"srcset"!==d||"img"!==a&&"source"!==a?e&&(f=u.getTrusted.bind(u,e)):f=ya;b.push({priority:100,compile:function(a,b){var e=
p(b[c]),g=p(b[c],function(a){return u.valueOf(a)});return{pre:function(a,b){function c(){var g=e(a);b[0][d]=f(g)}c();a.$watch(g,c)}}}})}function Ia(a,c,d,e,f){var g=ua(a),k=oa(g,e),l=h[e]||f,p=b(d,!f,k,l);if(p){if("multiple"===e&&"select"===g)throw $("selmulti",za(a));if(m.test(e))throw $("nodomevents");c.push({priority:100,compile:function(){return{pre:function(a,c,f){c=f.$$observers||(f.$$observers=T());var g=f[e];g!==d&&(p=g&&b(g,!0,k,l),d=g);p&&(f[e]=p(a),(c[e]||(c[e]=[])).$$inter=!0,(f.$$observers&&
f.$$observers[e].$$scope||a).$watch(p,function(a,b){"class"===e&&a!==b?f.$updateClass(a,b):f.$set(e,a)}))}}}})}}function pa(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]===d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=C.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);x.hasData(d)&&(x.data(c,x.data(d)),x(d).off("$destroy"));x.cleanData(a.querySelectorAll("*"));
for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function Aa(a,b){return S(function(){return a.apply(null,arguments)},a,b)}function Ba(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,za(d))}}function ra(a,b){if(s)throw $("missingattr",a,b);}function Da(a,c,d,e,f){function g(b,c,e){B(d.$onChanges)&&!dc(c,e)&&(Ua||(a.$$postDigest(q),Ua=[]),m||(m={},Ua.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Jb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;r(e,function(e,h){var m=e.attrName,n=e.optional,
I,t,u,s;switch(e.mode){case "@":n||ta.call(c,m)||(ra(m,f.name),d[h]=c[m]=void 0);n=c.$observe(m,function(a){if(A(a)||Ga(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;I=c[m];A(I)?d[h]=b(I)(a):Ga(I)&&(d[h]=I);l[h]=new Jb(tc,d[h]);k.push(n);break;case "=":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);s=t.literal?va:dc;u=t.assign||function(){I=d[h]=t(a);throw $("nonassign",c[m],m,f.name);};I=d[h]=t(a);n=function(b){s(b,d[h])||(s(b,I)?u(a,b=d[h]):d[h]=b);return I=
b};n.$stateful=!0;n=e.collection?a.$watchCollection(c[m],n):a.$watch(p(c[m],n),null,t.literal);k.push(n);break;case "<":if(!ta.call(c,m)){if(n)break;ra(m,f.name);c[m]=void 0}if(n&&!c[m])break;t=p(c[m]);var v=t.literal,L=d[h]=t(a);l[h]=new Jb(tc,d[h]);n=a[e.collection?"$watchCollection":"$watch"](t,function(a,b){if(b===a){if(b===L||v&&va(b,L))return;b=L}g(h,a,b);d[h]=a});k.push(n);break;case "&":n||ta.call(c,m)||ra(m,f.name);t=c.hasOwnProperty(m)?p(c[m]):E;if(t===E&&n)break;d[h]=function(b){return t(a,
b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var Ma=/^\w/,Fa=C.document.createElement("div"),Oa=t,Qa=N,Ja=G,Ua;w.prototype={$normalize:wa,$addClass:function(a){a&&0<a.length&&R.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&R.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=sd(a,b);c&&c.length&&R.addClass(this.$$element,c);(c=sd(b,a))&&c.length&&R.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=
ld(this.$$element[0],a),g=td[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Vc(a,"-"));"img"===ua(this.$$element)&&"srcset"===a&&(this[a]=b=ma(b,"$set('srcset', value)"));!1!==d&&(null===b||z(b)?this.$$element.removeAttr(e):Ma.test(e)?f&&!1===b?this.$$element.removeAttr(e):this.$$element.attr(e,b):O(this.$$element[0],e,b));(a=this.$$observers)&&r(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,
d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);L.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||z(c[a])||b(c[a])});return function(){cb(e,b)}}};var Ka=b.startSymbol(),La=b.endSymbol(),Na="{{"===Ka&&"}}"===La?Ta:function(a){return a.replace(/\{\{/g,Ka).replace(/}}/g,La)},Ra=/^ng(Attr|Prop|On)([A-Z].*)$/,Sa=/^(.+)Start$/;da.$$addBindingInfo=n?function(a,b){var c=a.data("$binding")||[];H(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:E;da.$$addBindingClass=n?function(a){sa(a,
"ng-binding")}:E;da.$$addScopeInfo=n?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:E;da.$$addScopeClass=n?function(a,b){sa(a,b?"ng-isolate-scope":"ng-scope")}:E;da.$$createComment=function(a,b){var c="";n&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return C.document.createComment(c)};return da}]}function Jb(a,b){this.previousValue=a;this.currentValue=b}function wa(a){return a.replace(pd,"").replace(Eg,function(a,d,c){return c?d.toUpperCase():d})}function sd(a,b){var d=
"",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=c[f],k=0;k<e.length;k++)if(g===e[k])continue a;d+=(0<d.length?" ":"")+g}return d}function rd(a){a=x(a);var b=a.length;if(1>=b)return a;for(;b--;){var d=a[b];(8===d.nodeType||d.nodeType===Pa&&""===d.nodeValue.trim())&&Fg.call(a,b,1)}return a}function Bg(a,b){if(b&&A(b))return b;if(A(a)){var d=ud.exec(a);if(d)return d[3]}}function Ff(){var a={};this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,d){Ja(b,
"controller");D(b)?S(a,b):a[b]=d};this.$get=["$injector",function(b){function d(a,b,d,g){if(!a||!D(a.$scope))throw F("$controller")("noscp",g,b);a.$scope[b]=d}return function(c,e,f,g){var k,h,l;f=!0===f;g&&A(g)&&(l=g);if(A(c)){g=c.match(ud);if(!g)throw vd("ctrlfmt",c);h=g[1];l=l||g[3];c=a.hasOwnProperty(h)?a[h]:Ge(e.$scope,h,!0);if(!c)throw vd("ctrlreg",h);sb(c,h,!0)}if(f)return f=(H(c)?c[c.length-1]:c).prototype,k=Object.create(f||null),l&&d(e,l,k,h||c.name),S(function(){var a=b.invoke(c,k,e,h);
a!==k&&(D(a)||B(a))&&(k=a,l&&d(e,l,k,h||c.name));return k},{instance:k,identifier:l});k=b.instantiate(c,e,h);l&&d(e,l,k,h||c.name);return k}}]}function Gf(){this.$get=["$window",function(a){return x(a.document)}]}function Hf(){this.$get=["$document","$rootScope",function(a,b){function d(){e=c.hidden}var c=a[0],e=c&&c.hidden;a.on("visibilitychange",d);b.$on("$destroy",function(){a.off("visibilitychange",d)});return function(){return e}}]}function If(){this.$get=["$log",function(a){return function(b,
d){a.error.apply(a,arguments)}}]}function uc(a){return D(a)?ha(a)?a.toISOString():eb(a):a}function Of(){this.$get=function(){return function(a){if(!a)return"";var b=[];Oc(a,function(a,c){null===a||z(a)||B(a)||(H(a)?r(a,function(a){b.push(ba(c)+"="+ba(uc(a)))}):b.push(ba(c)+"="+ba(uc(a))))});return b.join("&")}}}function Pf(){this.$get=function(){return function(a){function b(a,e,f){H(a)?r(a,function(a,c){b(a,e+"["+(D(a)?c:"")+"]")}):D(a)&&!ha(a)?Oc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):
(B(a)&&(a=a()),d.push(ba(e)+"="+(null==a?"":ba(uc(a)))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function vc(a,b){if(A(a)){var d=a.replace(Gg,"").trim();if(d){var c=b("Content-Type"),c=c&&0===c.indexOf(wd),e;(e=c)||(e=(e=d.match(Hg))&&Ig[e[0]].test(d));if(e)try{a=Rc(d)}catch(f){if(!c)return a;throw Kb("baddata",a,f);}}}return a}function xd(a){var b=T(),d;A(a)?r(a.split("\n"),function(a){d=a.indexOf(":");var e=K(U(a.substr(0,d)));a=U(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):D(a)&&
r(a,function(a,d){var f=K(d),g=U(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function yd(a){var b;return function(d){b||(b=xd(a));return d?(d=b[K(d)],void 0===d&&(d=null),d):b}}function zd(a,b,d,c){if(B(c))return c(a,b,d);r(c,function(c){a=c(a,b,d)});return a}function Nf(){var a=this.defaults={transformResponse:[vc],transformRequest:[function(a){return D(a)&&"[object File]"!==la.call(a)&&"[object Blob]"!==la.call(a)&&"[object FormData]"!==la.call(a)?eb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},
post:ja(wc),put:ja(wc),patch:ja(wc)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer",jsonpCallbackParam:"callback"},b=!1;this.useApplyAsync=function(a){return w(a)?(b=!!a,this):b};var d=this.interceptors=[],c=this.xsrfWhitelistedOrigins=[];this.$get=["$browser","$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector","$sce",function(e,f,g,k,h,l,m,p){function n(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];
a=a.then(f,g)}b.length=0;return a}function d(a,b){var c,e={};r(a,function(a,d){B(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}function f(a){var b=S({},a);b.data=zd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:l.reject(b)}if(!D(b))throw F("$http")("badreq",b);if(!A(p.valueOf(b.url)))throw F("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer,jsonpCallbackParam:a.jsonpCallbackParam},
b);g.headers=function(b){var c=a.headers,e=S({},b.headers),f,g,h,c=S({},c.common,c[K(b.method)]);a:for(f in c){g=K(f);for(h in e)if(K(h)===g)continue a;e[f]=c[f]}return d(e,ja(b))}(b);g.method=ub(g.method);g.paramSerializer=A(g.paramSerializer)?m.get(g.paramSerializer):g.paramSerializer;e.$$incOutstandingRequestCount("$http");var h=[],k=[];b=l.resolve(g);r(v,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&k.push(a.response,a.responseError)});
b=c(b,h);b=b.then(function(b){var c=b.headers,d=zd(b.data,yd(c),void 0,b.transformRequest);z(d)&&r(c,function(a,b){"content-type"===K(b)&&delete c[b]});z(b.withCredentials)&&!z(a.withCredentials)&&(b.withCredentials=a.withCredentials);return s(b,d).then(f,f)});b=c(b,k);return b=b.finally(function(){e.$$completeOutstandingRequest(E,"$http")})}function s(c,d){function e(a){if(a){var c={};r(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function k(a,
c,d,e,f){function g(){m(c,a,d,e,f)}R&&(200<=a&&300>a?R.put(O,[a,c,xd(d),e,f]):R.remove(O));b?h.$applyAsync(g):(g(),h.$$phase||h.$apply())}function m(a,b,d,e,f){b=-1<=b?b:0;(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:yd(d),config:c,statusText:e,xhrStatus:f})}function s(a){m(a.data,a.status,ja(a.headers()),a.statusText,a.xhrStatus)}function v(){var a=n.pendingRequests.indexOf(c);-1!==a&&n.pendingRequests.splice(a,1)}var L=l.defer(),u=L.promise,R,q,ma=c.headers,x="jsonp"===K(c.method),
O=c.url;x?O=p.getTrustedResourceUrl(O):A(O)||(O=p.valueOf(O));O=G(O,c.paramSerializer(c.params));x&&(O=t(O,c.jsonpCallbackParam));n.pendingRequests.push(c);u.then(v,v);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(R=D(c.cache)?c.cache:D(a.cache)?a.cache:N);R&&(q=R.get(O),w(q)?q&&B(q.then)?q.then(s,s):H(q)?m(q[1],q[0],ja(q[2]),q[3],q[4]):m(q,200,{},"OK","complete"):R.put(O,u));z(q)&&((q=jc(c.url)?g()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(ma[c.xsrfHeaderName||a.xsrfHeaderName]=
q),f(c.method,O,d,k,ma,c.timeout,c.withCredentials,c.responseType,e(c.eventHandlers),e(c.uploadEventHandlers)));return u}function G(a,b){0<b.length&&(a+=(-1===a.indexOf("?")?"?":"&")+b);return a}function t(a,b){var c=a.split("?");if(2<c.length)throw Kb("badjsonp",a);c=gc(c[1]);r(c,function(c,d){if("JSON_CALLBACK"===c)throw Kb("badjsonp",a);if(d===b)throw Kb("badjsonp",b,a);});return a+=(-1===a.indexOf("?")?"?":"&")+b+"=JSON_CALLBACK"}var N=k("$http");a.paramSerializer=A(a.paramSerializer)?m.get(a.paramSerializer):
a.paramSerializer;var v=[];r(d,function(a){v.unshift(A(a)?m.get(a):m.invoke(a))});var jc=Jg(c);n.pendingRequests=[];(function(a){r(arguments,function(a){n[a]=function(b,c){return n(S({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){n[a]=function(b,c,d){return n(S({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");n.defaults=a;return n}]}function Rf(){this.$get=function(){return function(){return new C.XMLHttpRequest}}}function Qf(){this.$get=
["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return Kg(a,c,a.defer,b,d[0])}]}function Kg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m);f.removeEventListener("error",m);e.body.removeChild(f);f=null;var g=-1,s="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};f.addEventListener("load",
m);f.addEventListener("error",m);e.body.appendChild(f);return m}return function(e,k,h,l,m,p,n,s,G,t){function N(a){J="timeout"===a;qa&&qa();y&&y.abort()}function v(a,b,c,e,f,g){w(P)&&d.cancel(P);qa=y=null;a(b,c,e,f,g)}k=k||a.url();if("jsonp"===K(e))var q=c.createCallback(k),qa=f(k,q,function(a,b){var d=200===a&&c.getResponse(q);v(l,a,d,"",b,"complete");c.removeCallback(q)});else{var y=b(e,k),J=!1;y.open(e,k,!0);r(m,function(a,b){w(a)&&y.setRequestHeader(b,a)});y.onload=function(){var a=y.statusText||
"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"===ga(k).protocol?404:0);v(l,c,b,y.getAllResponseHeaders(),a,"complete")};y.onerror=function(){v(l,-1,null,null,"","error")};y.ontimeout=function(){v(l,-1,null,null,"","timeout")};y.onabort=function(){v(l,-1,null,null,"",J?"timeout":"abort")};r(G,function(a,b){y.addEventListener(b,a)});r(t,function(a,b){y.upload.addEventListener(b,a)});n&&(y.withCredentials=!0);if(s)try{y.responseType=s}catch(I){if("json"!==
s)throw I;}y.send(z(h)?null:h)}if(0<p)var P=d(function(){N("timeout")},p);else p&&B(p.then)&&p.then(function(){N(w(p.$$timeoutId)?"timeout":"abort")})}}function Kf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(p,a).replace(n,b)}function k(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}
function h(f,h,n,p){function v(a){try{return a=n&&!r?e.getTrusted(n,a):e.valueOf(a),p&&!w(a)?a:ic(a)}catch(b){c(Ma.interr(f,b))}}var r=n===e.URL||n===e.MEDIA_URL;if(!f.length||-1===f.indexOf(a)){if(h)return;h=g(f);r&&(h=e.getTrusted(n,h));h=ia(h);h.exp=f;h.expressions=[];h.$$watchDelegate=k;return h}p=!!p;for(var q,y,J=0,I=[],P,Q=f.length,M=[],L=[],u;J<Q;)if(-1!==(q=f.indexOf(a,J))&&-1!==(y=f.indexOf(b,q+l)))J!==q&&M.push(g(f.substring(J,q))),J=f.substring(q+l,y),I.push(J),J=y+m,L.push(M.length),
M.push("");else{J!==Q&&M.push(g(f.substring(J)));break}u=1===M.length&&1===L.length;var R=r&&u?void 0:v;P=I.map(function(a){return d(a,R)});if(!h||I.length){var x=function(a){for(var b=0,c=I.length;b<c;b++){if(p&&z(a[b]))return;M[L[b]]=a[b]}if(r)return e.getTrusted(n,u?M[0]:M.join(""));n&&1<M.length&&Ma.throwNoconcat(f);return M.join("")};return S(function(a){var b=0,d=I.length,e=Array(d);try{for(;b<d;b++)e[b]=P[b](a);return x(e)}catch(g){c(Ma.interr(f,g))}},{exp:f,expressions:I,$$watchDelegate:function(a,
b){var c;return a.$watchGroup(P,function(d,e){var f=x(d);b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,p=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,f),"g");h.startSymbol=function(){return a};h.endSymbol=function(){return b};return h}]}function Lf(){this.$get=["$$intervalFactory","$window",function(a,b){var d={},c=function(a){b.clearInterval(a);delete d[a]},e=a(function(a,c,e){a=b.setInterval(a,c);d[a]=e;return a},c);e.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$intervalId"))throw Lg("badprom");
if(!d.hasOwnProperty(a.$$intervalId))return!1;a=a.$$intervalId;var b=d[a],e=b.promise;e.$$state&&(e.$$state.pur=!0);b.reject("canceled");c(a);return!0};return e}]}function Mf(){this.$get=["$browser","$q","$$q","$rootScope",function(a,b,d,c){return function(e,f){return function(g,k,h,l){function m(){p?g.apply(null,n):g(s)}var p=4<arguments.length,n=p?Ha.call(arguments,4):[],s=0,G=w(l)&&!l,t=(G?d:b).defer(),r=t.promise;h=w(h)?h:0;r.$$intervalId=e(function(){G?a.defer(m):c.$evalAsync(m);t.notify(s++);
0<h&&s>=h&&(t.resolve(s),f(r.$$intervalId));G||c.$apply()},k,t,G);return r}}}]}function Ad(a,b){var d=ga(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=fa(d.port)||Mg[d.protocol]||null}function Bd(a,b,d){if(Ng.test(a))throw jb("badpath",a);var c="/"!==a.charAt(0);c&&(a="/"+a);a=ga(a);for(var c=(c&&"/"===a.pathname.charAt(0)?a.pathname.substring(1):a.pathname).split("/"),e=c.length;e--;)c[e]=decodeURIComponent(c[e]),d&&(c[e]=c[e].replace(/\//g,"%2F"));d=c.join("/");b.$$path=d;b.$$search=gc(a.search);
b.$$hash=decodeURIComponent(a.hash);b.$$path&&"/"!==b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function xc(a,b){return a.slice(0,b.length)===b}function xa(a,b){if(xc(b,a))return b.substr(a.length)}function Da(a){var b=a.indexOf("#");return-1===b?a:a.substr(0,b)}function yc(a,b,d){this.$$html5=!0;d=d||"";Ad(a,this);this.$$parse=function(a){var d=xa(b,a);if(!A(d))throw jb("ipthprfx",a,b);Bd(d,this,!0);this.$$path||(this.$$path="/");this.$$compose()};this.$$normalizeUrl=function(a){return b+a.substr(1)};
this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;w(f=xa(a,c))?(g=f,g=d&&w(f=xa(d,f))?b+(xa("/",f)||f):a+g):w(f=xa(b,c))?g=b+f:b===c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function zc(a,b,d){Ad(a,this);this.$$parse=function(c){var e=xa(a,c)||xa(b,c),f;z(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",z(e)&&(a=c,this.replace())):(f=xa(d,e),z(f)&&(f=e));Bd(f,this,!1);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;xc(f,e)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?
f[1]:c);this.$$path=c;this.$$compose()};this.$$normalizeUrl=function(b){return a+(b?d+b:"")};this.$$parseLinkUrl=function(b,d){return Da(a)===Da(b)?(this.$$parse(b),!0):!1}}function Cd(a,b,d){this.$$html5=!0;zc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a===Da(c)?f=c:(g=xa(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$normalizeUrl=function(b){return a+d+b}}function Lb(a){return function(){return this[a]}}function Dd(a,
b){return function(d){if(z(d))return this[a];this[a]=b(d);this.$$compose();return this}}function Tf(){var a="!",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return w(b)?(a=b,this):a};this.html5Mode=function(a){if(Ga(a))return b.enabled=a,this;if(D(a)){Ga(a.enabled)&&(b.enabled=a.enabled);Ga(a.requireBase)&&(b.requireBase=a.requireBase);if(Ga(a.rewriteLinks)||A(a.rewriteLinks))b.rewriteLinks=a.rewriteLinks;return this}return b};this.$get=["$rootScope","$browser","$sniffer",
"$rootElement","$window",function(d,c,e,f,g){function k(a,b){return a===b||ga(a).href===ga(b).href}function h(a,b,d){var e=m.url(),f=m.$$state;try{c.url(a,b,d),m.$$state=c.state()}catch(g){throw m.url(e),m.$$state=f,g;}}function l(a,b){d.$broadcast("$locationChangeSuccess",m.absUrl(),a,m.$$state,b)}var m,p;p=c.baseHref();var n=c.url(),s;if(b.enabled){if(!p&&b.requireBase)throw jb("nobase");s=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(p||"/");p=e.history?yc:Cd}else s=Da(n),p=zc;var r=s.substr(0,
Da(s).lastIndexOf("/")+1);m=new p(s,r,"#"+a);m.$$parseLinkUrl(n,n);m.$$state=c.state();var t=/^\s*(javascript|mailto):/i;f.on("click",function(a){var e=b.rewriteLinks;if(e&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!==a.which&&2!==a.button){for(var g=x(a.target);"a"!==ua(g[0]);)if(g[0]===f[0]||!(g=g.parent())[0])return;if(!A(e)||!z(g.attr(e))){var e=g.prop("href"),h=g.attr("href")||g.attr("xlink:href");D(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ga(e.animVal).href);t.test(e)||!e||g.attr("target")||
a.isDefaultPrevented()||!m.$$parseLinkUrl(e,h)||(a.preventDefault(),m.absUrl()!==c.url()&&d.$apply())}}});m.absUrl()!==n&&c.url(m.absUrl(),!0);var N=!0;c.onUrlChange(function(a,b){xc(a,r)?(d.$evalAsync(function(){var c=m.absUrl(),e=m.$$state,f;m.$$parse(a);m.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;m.absUrl()===a&&(f?(m.$$parse(c),m.$$state=e,h(c,!1,e)):(N=!1,l(c,e)))}),d.$$phase||d.$digest()):g.location.href=a});d.$watch(function(){if(N||m.$$urlUpdatedByLocation){m.$$urlUpdatedByLocation=
!1;var a=c.url(),b=m.absUrl(),f=c.state(),g=m.$$replace,n=!k(a,b)||m.$$html5&&e.history&&f!==m.$$state;if(N||n)N=!1,d.$evalAsync(function(){var b=m.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,m.$$state,f).defaultPrevented;m.absUrl()===b&&(c?(m.$$parse(a),m.$$state=f):(n&&h(b,g,f===m.$$state?null:m.$$state),l(a,f)))})}m.$$replace=!1});return m}]}function Uf(){var a=!0,b=this;this.debugEnabled=function(b){return w(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){cc(a)&&(a.stack&&
f?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||E;return function(){var a=[];r(arguments,function(b){a.push(c(b))});return Function.prototype.apply.call(e,b,a)}}var f=Ca||/\bEdge\//.test(d.navigator&&d.navigator.userAgent);return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,
arguments)}}()}}]}function Og(a){return a+""}function Pg(a,b){return"undefined"!==typeof a?a:b}function Ed(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function Qg(a,b){switch(a.type){case q.MemberExpression:if(a.computed)return!1;break;case q.UnaryExpression:return 1;case q.BinaryExpression:return"+"!==a.operator?1:!1;case q.CallExpression:return!1}return void 0===b?Fd:b}function Z(a,b,d){var c,e,f=a.isPure=Qg(a,d);switch(a.type){case q.Program:c=!0;r(a.body,function(a){Z(a.expression,
b,f);c=c&&a.expression.constant});a.constant=c;break;case q.Literal:a.constant=!0;a.toWatch=[];break;case q.UnaryExpression:Z(a.argument,b,f);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case q.BinaryExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case q.LogicalExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case q.ConditionalExpression:Z(a.test,
b,f);Z(a.alternate,b,f);Z(a.consequent,b,f);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case q.Identifier:a.constant=!1;a.toWatch=[a];break;case q.MemberExpression:Z(a.object,b,f);a.computed&&Z(a.property,b,f);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=a.constant?[]:[a];break;case q.CallExpression:c=d=a.filter?!b(a.callee.name).$stateful:!1;e=[];r(a.arguments,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,
a.toWatch)});a.constant=c;a.toWatch=d?e:[a];break;case q.AssignmentExpression:Z(a.left,b,f);Z(a.right,b,f);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case q.ArrayExpression:c=!0;e=[];r(a.elements,function(a){Z(a,b,f);c=c&&a.constant;e.push.apply(e,a.toWatch)});a.constant=c;a.toWatch=e;break;case q.ObjectExpression:c=!0;e=[];r(a.properties,function(a){Z(a.value,b,f);c=c&&a.value.constant;e.push.apply(e,a.value.toWatch);a.computed&&(Z(a.key,b,!1),c=c&&a.key.constant,e.push.apply(e,
a.key.toWatch))});a.constant=c;a.toWatch=e;break;case q.ThisExpression:a.constant=!1;a.toWatch=[];break;case q.LocalsExpression:a.constant=!1,a.toWatch=[]}}function Gd(a){if(1===a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function Hd(a){return a.type===q.Identifier||a.type===q.MemberExpression}function Id(a){if(1===a.body.length&&Hd(a.body[0].expression))return{type:q.AssignmentExpression,left:a.body[0].expression,right:{type:q.NGValueParameter},operator:"="}}
function Jd(a){this.$filter=a}function Kd(a){this.$filter=a}function Mb(a,b,d){this.ast=new q(a,d);this.astCompiler=d.csp?new Kd(b):new Jd(b)}function Ac(a){return B(a.valueOf)?a.valueOf():Rg.call(a)}function Vf(){var a=T(),b={"true":!0,"false":!1,"null":null,undefined:void 0},d,c;this.addLiteral=function(a,c){b[a]=c};this.setIdentifierFns=function(a,b){d=a;c=b;return this};this.$get=["$filter",function(e){function f(b,c){var d,f;switch(typeof b){case "string":return f=b=b.trim(),d=a[f],d||(d=new Nb(G),
d=(new Mb(d,e,G)).parse(b),a[f]=p(d)),s(d,c);case "function":return s(b,c);default:return s(E,c)}}function g(a,b,c){return null==a||null==b?a===b:"object"!==typeof a||(a=Ac(a),"object"!==typeof a||c)?a===b||a!==a&&b!==b:!1}function k(a,b,c,d,e){var f=d.inputs,h;if(1===f.length){var k=g,f=f[0];return a.$watch(function(a){var b=f(a);g(b,k,f.isPure)||(h=d(a,void 0,void 0,[b]),k=b&&Ac(b));return h},b,c,e)}for(var l=[],m=[],n=0,p=f.length;n<p;n++)l[n]=g,m[n]=null;return a.$watch(function(a){for(var b=
!1,c=0,e=f.length;c<e;c++){var k=f[c](a);if(b||(b=!g(k,l[c],f[c].isPure)))m[c]=k,l[c]=k&&Ac(k)}b&&(h=d(a,void 0,void 0,m));return h},b,c,e)}function h(a,b,c,d,e){function f(){h(m)&&k()}function g(a,b,c,d){m=u&&d?d[0]:n(a,b,c,d);h(m)&&a.$$postDigest(f);return s(m)}var h=d.literal?l:w,k,m,n=d.$$intercepted||d,s=d.$$interceptor||Ta,u=d.inputs&&!n.inputs;g.literal=d.literal;g.constant=d.constant;g.inputs=d.inputs;p(g);return k=a.$watch(g,b,c,e)}function l(a){var b=!0;r(a,function(a){w(a)||(b=!1)});return b}
function m(a,b,c,d){var e=a.$watch(function(a){e();return d(a)},b,c);return e}function p(a){a.constant?a.$$watchDelegate=m:a.oneTime?a.$$watchDelegate=h:a.inputs&&(a.$$watchDelegate=k);return a}function n(a,b){function c(d){return b(a(d))}c.$stateful=a.$stateful||b.$stateful;c.$$pure=a.$$pure&&b.$$pure;return c}function s(a,b){if(!b)return a;a.$$interceptor&&(b=n(a.$$interceptor,b),a=a.$$intercepted);var c=!1,d=function(d,e,f,g){d=c&&g?g[0]:a(d,e,f,g);return b(d)};d.$$intercepted=a;d.$$interceptor=
b;d.literal=a.literal;d.oneTime=a.oneTime;d.constant=a.constant;b.$stateful||(c=!a.inputs,d.inputs=a.inputs?a.inputs:[a],b.$$pure||(d.inputs=d.inputs.map(function(a){return a.isPure===Fd?function(b){return a(b)}:a})));return p(d)}var G={csp:Aa().noUnsafeEval,literals:Ia(b),isIdentifierStart:B(d)&&d,isIdentifierContinue:B(c)&&c};f.$$getAst=function(a){var b=new Nb(G);return(new Mb(b,e,G)).getAst(a).ast};return f}]}function Xf(){var a=!0;this.$get=["$rootScope","$exceptionHandler",function(b,d){return Ld(function(a){b.$evalAsync(a)},
d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function Yf(){var a=!0;this.$get=["$browser","$exceptionHandler",function(b,d){return Ld(function(a){b.defer(a)},d,a)}];this.errorOnUnhandledRejections=function(b){return w(b)?(a=b,this):a}}function Ld(a,b,d){function c(){return new e}function e(){var a=this.promise=new f;this.resolve=function(b){h(a,b)};this.reject=function(b){m(a,b)};this.notify=function(b){n(a,b)}}function f(){this.$$state={status:0}}function g(){for(;!w&&
x.length;){var a=x.shift();if(!a.pur){a.pur=!0;var c=a.value,c="Possibly unhandled rejection: "+("function"===typeof c?c.toString().replace(/ \{[\s\S]*$/,""):z(c)?"undefined":"string"!==typeof c?Ie(c,void 0):c);cc(a.value)?b(a.value,c):b(c)}}}function k(c){!d||c.pending||2!==c.status||c.pur||(0===w&&0===x.length&&a(g),x.push(c));!c.processScheduled&&c.pending&&(c.processScheduled=!0,++w,a(function(){var e,f,k;k=c.pending;c.processScheduled=!1;c.pending=void 0;try{for(var l=0,n=k.length;l<n;++l){c.pur=
!0;f=k[l][0];e=k[l][c.status];try{B(e)?h(f,e(c.value)):1===c.status?h(f,c.value):m(f,c.value)}catch(p){m(f,p),p&&!0===p.$$passToExceptionHandler&&b(p)}}}finally{--w,d&&0===w&&a(g)}}))}function h(a,b){a.$$state.status||(b===a?p(a,v("qcycle",b)):l(a,b))}function l(a,b){function c(b){g||(g=!0,l(a,b))}function d(b){g||(g=!0,p(a,b))}function e(b){n(a,b)}var f,g=!1;try{if(D(b)||B(b))f=b.then;B(f)?(a.$$state.status=-1,f.call(b,c,d,e)):(a.$$state.value=b,a.$$state.status=1,k(a.$$state))}catch(h){d(h)}}function m(a,
b){a.$$state.status||p(a,b)}function p(a,b){a.$$state.value=b;a.$$state.status=2;k(a.$$state)}function n(c,d){var e=c.$$state.pending;0>=c.$$state.status&&e&&e.length&&a(function(){for(var a,c,f=0,g=e.length;f<g;f++){c=e[f][0];a=e[f][3];try{n(c,B(a)?a(d):d)}catch(h){b(h)}}})}function s(a){var b=new f;m(b,a);return b}function G(a,b,c){var d=null;try{B(c)&&(d=c())}catch(e){return s(e)}return d&&B(d.then)?d.then(function(){return b(a)},s):b(a)}function t(a,b,c,d){var e=new f;h(e,a);return e.then(b,c,
d)}function q(a){if(!B(a))throw v("norslvr",a);var b=new f;a(function(a){h(b,a)},function(a){m(b,a)});return b}var v=F("$q",TypeError),w=0,x=[];S(f.prototype,{then:function(a,b,c){if(z(a)&&z(b)&&z(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&k(this.$$state);return d},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return G(b,y,a)},function(b){return G(b,s,a)},
b)}});var y=t;q.prototype=f.prototype;q.defer=c;q.reject=s;q.when=t;q.resolve=y;q.all=function(a){var b=new f,c=0,d=H(a)?[]:{};r(a,function(a,e){c++;t(a).then(function(a){d[e]=a;--c||h(b,d)},function(a){m(b,a)})});0===c&&h(b,d);return b};q.race=function(a){var b=c();r(a,function(a){t(a).then(b.resolve,b.reject)});return b.promise};return q}function hg(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||
a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function Wf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null;this.$$suspended=!1}b.prototype=a;return b}var b=10,d=F("$rootScope"),c=null,e=null;this.digestTtl=
function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,k){function h(a){a.currentScope.$$destroyed=!0}function l(a){9===Ca&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=
this;this.$$suspended=this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function p(a){if(v.$$phase)throw d("inprog",v.$$phase);v.$$phase=a}function n(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function G(){}function t(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function q(){null===e&&(e=k.defer(function(){v.$apply(t)},
null,"$applyAsync"))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!==this)&&d.$on("$destroy",h);return d},$watch:function(a,b,d,e){var f=g(a);b=B(b)?b:E;if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l=
{fn:b,last:G,get:f,exp:e||a,eq:!!d};c=null;k||(k=h.$$watchers=[],k.$$digestWatchIndex=-1);k.unshift(l);k.$$digestWatchIndex++;n(this,1);return function(){var a=cb(k,l);0<=a&&(n(h,-1),a<k.$$digestWatchIndex&&k.$$digestWatchIndex--);c=null}},$watchGroup:function(a,b){function c(){h=!1;try{k?(k=!1,b(e,e,g)):b(e,d,g)}finally{for(var f=0;f<a.length;f++)d[f]=e[f]}}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=
!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var d=g.$watch(a,function(a){e[b]=a;h||(h=!0,g.$evalAsync(c))});f.push(d)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!z(e)){if(D(e))if(ya(e))for(f!==n&&(f=n,t=f.length=0,l++),a=e.length,t!==a&&(l++,f.length=t=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},t=0,l++);a=0;for(b in e)ta.call(e,
b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(t++,f[b]=g,l++));if(t>a)for(b in l++,f)ta.call(e,b)||(t--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$$pure=g(a).literal;c.$stateful=!c.$$pure;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},s=!0,t=0;return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(D(e))if(ya(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ta.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,h,l,m,n,s,r=b,q,y=w.length?v:this,N=[],z,A;p("$digest");k.$$checkUrlChange();this===v&&null!==e&&(k.defer.cancel(e),t());c=null;do{s=!1;q=y;for(n=0;n<w.length;n++){try{A=w[n],l=A.fn,l(A.scope,A.locals)}catch(C){f(C)}c=null}w.length=0;a:do{if(n=!q.$$suspended&&q.$$watchers)for(n.$$digestWatchIndex=n.length;n.$$digestWatchIndex--;)try{if(a=n[n.$$digestWatchIndex])if(m=a.get,(g=m(q))!==(h=a.last)&&!(a.eq?va(g,h):X(g)&&X(h)))s=!0,c=a,a.last=a.eq?Ia(g,null):g,l=a.fn,l(g,h===G?g:h,q),5>r&&(z=4-r,N[z]||
(N[z]=[]),N[z].push({msg:B(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:h}));else if(a===c){s=!1;break a}}catch(E){f(E)}if(!(n=!q.$$suspended&&q.$$watchersCount&&q.$$childHead||q!==y&&q.$$nextSibling))for(;q!==y&&!(n=q.$$nextSibling);)q=q.$parent}while(q=n);if((s||w.length)&&!r--)throw v.$$phase=null,d("infdig",b,N);}while(s||w.length);for(v.$$phase=null;J<x.length;)try{x[J++]()}catch(D){f(D)}x.length=J=0;k.$$checkUrlChange()},$suspend:function(){this.$$suspended=!0},$isSuspended:function(){return this.$$suspended},
$resume:function(){this.$$suspended=!1},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===v&&k.$$applicationDestroyed();n(this,-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead===this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail===this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=
this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=E;this.$on=this.$watch=this.$watchGroup=function(){return E};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){v.$$phase||w.length||k.defer(function(){w.length&&v.$digest()},null,"$evalAsync");w.push({scope:this,fn:g(a),locals:b})},$$postDigest:function(a){x.push(a)},$apply:function(a){try{p("$apply");try{return this.$eval(a)}finally{v.$$phase=
null}}catch(b){f(b)}finally{try{v.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);a=g(a);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(delete c[d],s(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=
!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=db([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)break;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=db([e],arguments,
1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var v=new m,w=v.$$asyncQueue=[],x=v.$$postDigestQueue=[],y=v.$$applyAsyncQueue=[],J=0;return v}]}function Le(){var a=/^\s*(https?|s?ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;
this.aHrefSanitizationWhitelist=function(b){return w(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f=ga(d&&d.trim()).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function Sg(a){if("self"===a)return a;if(A(a)){if(-1<a.indexOf("***"))throw Ea("iwcard",a);a=Md(a).replace(/\\\*\\\*/g,".*").replace(/\\\*/g,"[^:/.?&;]*");return new RegExp("^"+a+"$")}if(ab(a))return new RegExp("^"+a.source+"$");throw Ea("imatcher");
}function Nd(a){var b=[];w(a)&&r(a,function(a){b.push(Sg(a))});return b}function $f(){this.SCE_CONTEXTS=V;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=Nd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=Nd(a));return b};this.$get=["$injector","$$sanitizeUri",function(d,c){function e(a,b){var c;"self"===a?(c=Bc(b,Od))||(C.document.baseURI?c=C.document.baseURI:(Na||(Na=C.document.createElement("a"),Na.href=".",Na=Na.cloneNode(!1)),c=Na.href),
c=Bc(b,c)):c=!!a.exec(b.href);return c}function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var g=function(a){throw Ea("unsafe");};d.has("$sanitize")&&(g=d.get("$sanitize"));var k=f(),h={};h[V.HTML]=f(k);h[V.CSS]=f(k);h[V.MEDIA_URL]=f(k);h[V.URL]=f(h[V.MEDIA_URL]);h[V.JS]=f(k);h[V.RESOURCE_URL]=
f(h[V.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ea("icontext",a,b);if(null===b||z(b)||""===b)return b;if("string"!==typeof b)throw Ea("itype",a);return new c(b)},getTrusted:function(d,f){if(null===f||z(f)||""===f)return f;var k=h.hasOwnProperty(d)?h[d]:null;if(k&&f instanceof k)return f.$$unwrapTrustedValue();B(f.$$unwrapTrustedValue)&&(f=f.$$unwrapTrustedValue());if(d===V.MEDIA_URL||d===V.URL)return c(f.toString(),d===V.MEDIA_URL);if(d===V.RESOURCE_URL){var k=
ga(f.toString()),n,s,r=!1;n=0;for(s=a.length;n<s;n++)if(e(a[n],k)){r=!0;break}if(r)for(n=0,s=b.length;n<s;n++)if(e(b[n],k)){r=!1;break}if(r)return f;throw Ea("insecurl",f.toString());}if(d===V.HTML)return g(f);throw Ea("unsafe");},valueOf:function(a){return a instanceof k?a.$$unwrapTrustedValue():a}}}]}function Zf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ca)throw Ea("iequirks");var c=ja(V);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ta);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;r(V,function(a,b){var d=K(b);c[("parse_as_"+d).replace(Cc,wb)]=function(b){return e(a,b)};c[("get_trusted_"+d).replace(Cc,wb)]=function(b){return f(a,b)};c[("trust_as_"+d).replace(Cc,wb)]=function(b){return g(a,b)}});
return c}]}function ag(){this.$get=["$window","$document",function(a,b){var d={},c=!((!a.nw||!a.nw.process)&&a.chrome&&(a.chrome.app&&a.chrome.app.runtime||!a.chrome.app&&a.chrome.runtime&&a.chrome.runtime.id))&&a.history&&a.history.pushState,e=fa((/android (\d+)/.exec(K((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},k=g.body&&g.body.style,h=!1,l=!1;k&&(h=!!("transition"in k||"webkitTransition"in k),l=!!("animation"in k||"webkitAnimation"in k));return{history:!(!c||
4>e||f),hasEvent:function(a){if("input"===a&&Ca)return!1;if(z(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Aa(),transitions:h,animations:l,android:e}}]}function bg(){this.$get=ia(function(a){return new Tg(a)})}function Tg(a){function b(){var a=e.pop();return a&&a.cb}function d(a){for(var b=e.length-1;0<=b;--b){var c=e[b];if(c.type===a)return e.splice(b,1),c.cb}}var c={},e=[],f=this.ALL_TASKS_TYPE="$$all$$",g=this.DEFAULT_TASK_TYPE="$$default$$";this.completeTask=function(e,
h){h=h||g;try{e()}finally{var l;l=h||g;c[l]&&(c[l]--,c[f]--);l=c[h];var m=c[f];if(!m||!l)for(l=m?d:b;m=l(h);)try{m()}catch(p){a.error(p)}}};this.incTaskCount=function(a){a=a||g;c[a]=(c[a]||0)+1;c[f]=(c[f]||0)+1};this.notifyWhenNoPendingTasks=function(a,b){b=b||f;c[b]?e.push({type:b,cb:a}):a()}}function dg(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$exceptionHandler","$templateCache","$http","$q","$sce",function(b,d,c,e,f){function g(k,h){g.totalPendingRequests++;if(!A(k)||
z(d.get(k)))k=f.getTrustedResourceUrl(k);var l=c.defaults&&c.defaults.transformResponse;H(l)?l=l.filter(function(a){return a!==vc}):l===vc&&(l=null);return c.get(k,S({cache:d,transformResponse:l},a)).finally(function(){g.totalPendingRequests--}).then(function(a){return d.put(k,a.data)},function(a){h||(a=Ug("tpload",k,a.status,a.statusText),b(a));return e.reject(a)})}g.totalPendingRequests=0;return g}]}function eg(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,
b,d){a=a.getElementsByClassName("ng-binding");var g=[];r(a,function(a){var c=ca.element(a).data("$binding");c&&r(c,function(c){d?(new RegExp("(^|\\s)"+Md(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!==c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],k=0;k<g.length;++k){var h=a.querySelectorAll("["+g[k]+"model"+(d?"=":"*=")+'"'+b+'"]');if(h.length)return h}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},
whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function fg(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,h,l){B(f)||(l=h,h=f,f=E);var m=Ha.call(arguments,3),p=w(l)&&!l,n=(p?c:d).defer(),s=n.promise,r;r=b.defer(function(){try{n.resolve(f.apply(null,m))}catch(b){n.reject(b),e(b)}finally{delete g[s.$$timeoutId]}p||a.$apply()},h,"$timeout");s.$$timeoutId=r;g[r]=n;return s}var g={};f.cancel=function(a){if(!a)return!1;if(!a.hasOwnProperty("$$timeoutId"))throw Vg("badprom");
if(!g.hasOwnProperty(a.$$timeoutId))return!1;a=a.$$timeoutId;var c=g[a],d=c.promise;d.$$state&&(d.$$state.pur=!0);c.reject("canceled");delete g[a];return b.defer.cancel(a)};return f}]}function ga(a){if(!A(a))return a;Ca&&(aa.setAttribute("href",a),a=aa.href);aa.setAttribute("href",a);a=aa.hostname;!Wg&&-1<a.indexOf(":")&&(a="["+a+"]");return{href:aa.href,protocol:aa.protocol?aa.protocol.replace(/:$/,""):"",host:aa.host,search:aa.search?aa.search.replace(/^\?/,""):"",hash:aa.hash?aa.hash.replace(/^#/,
""):"",hostname:a,port:aa.port,pathname:"/"===aa.pathname.charAt(0)?aa.pathname:"/"+aa.pathname}}function Jg(a){var b=[Od].concat(a.map(ga));return function(a){a=ga(a);return b.some(Bc.bind(null,a))}}function Bc(a,b){a=ga(a);b=ga(b);return a.protocol===b.protocol&&a.host===b.host}function gg(){this.$get=ia(C)}function Pd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,k,h,l;try{a=d.cookie||""}catch(m){a=""}if(a!==e)for(e=a,a=
e.split("; "),c={},k=0;k<a.length;k++)g=a[k],h=g.indexOf("="),0<h&&(l=b(g.substring(0,h)),z(c[l])&&(c[l]=b(g.substring(h+1))));return c}}function kg(){this.$get=Pd}function dd(a){function b(d,c){if(D(d)){var e={};r(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Qd);b("date",Rd);b("filter",Xg);b("json",Yg);b("limitTo",Zg);b("lowercase",$g);b("number",Sd);b("orderBy",
Td);b("uppercase",ah)}function Xg(){return function(a,b,d,c){if(!ya(a)){if(null==a)return a;throw F("filter")("notarray",a);}c=c||"$";var e;switch(Dc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=bh(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function bh(a,b,d,c){var e=D(a)&&d in a;!0===b?b=va:B(b)||(b=function(a,b){if(z(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!bc(a))return!1;a=K(""+a);b=K(""+
b);return-1!==a.indexOf(b)});return function(f){return e&&!D(f)?Fa(f,a[d],b,d,!1):Fa(f,a,b,d,c)}}function Fa(a,b,d,c,e,f){var g=Dc(a),k=Dc(b);if("string"===k&&"!"===b.charAt(0))return!Fa(a,b.substring(1),d,c,e);if(H(a))return a.some(function(a){return Fa(a,b,d,c,e)});switch(g){case "object":var h;if(e){for(h in a)if(h.charAt&&"$"!==h.charAt(0)&&Fa(a[h],b,d,c,!0))return!0;return f?!1:Fa(a,b,d,c,!1)}if("object"===k){for(h in b)if(f=b[h],!B(f)&&!z(f)&&(g=h===c,!Fa(g?a:a[h],f,d,c,g,g)))return!1;return!0}return d(a,
b);case "function":return!1;default:return d(a,b)}}function Dc(a){return null===a?"null":typeof a}function Qd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){z(c)&&(c=b.CURRENCY_SYM);z(e)&&(e=b.PATTERNS[1].maxFrac);var f=c?/\u00A4/g:/\s*\u00A4\s*/g;return null==a?a:Ud(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(f,c)}}function Sd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ud(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function ch(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Vd))&&
(a=a.replace(Vd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)===Ec;e++);if(e===(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)===Ec;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Wd&&(d=d.splice(0,Wd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function dh(a,b,d,c){var e=a.d,f=e.length-a.i;b=z(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=
1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ud(a,b,d,c,e){if(!A(a)&&!W(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,k=Math.abs(a)+"",h="";if(f)h="\u221e";else{g=ch(k);dh(g,e,b.minFrac,b.maxFrac);h=g.d;k=g.i;e=g.e;f=[];for(g=h.reduce(function(a,b){return a&&!b},
!0);0>k;)h.unshift(0),k++;0<k?f=h.splice(k,h.length):(f=h,h=[0]);k=[];for(h.length>=b.lgSize&&k.unshift(h.splice(-b.lgSize,h.length).join(""));h.length>b.gSize;)k.unshift(h.splice(-b.gSize,h.length).join(""));h.length&&k.unshift(h.join(""));h=k.join(d);f.length&&(h+=c+f.join(""));e&&(h+="e+"+e)}return 0>a&&!g?b.negPre+h+b.negSuf:b.posPre+h+b.posSuf}function Ob(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=Ec+a;d&&(a=a.substr(a.length-b));return e+a}function ea(a,
b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12===d&&(f=12);return Ob(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Xd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Yd(a){return function(b){var d=Xd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Ob(b,a)}}function Fc(a,b){return 0>=
a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Rd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,k=b[8]?a.setUTCFullYear:a.setFullYear,h=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=fa(b[9]+b[10]),g=fa(b[9]+b[11]));k.call(a,fa(b[1]),fa(b[2])-1,fa(b[3]));f=fa(b[4]||0)-f;g=fa(b[5]||0)-g;k=fa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));h.call(a,f,g,k,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,
d,f){var g="",k=[],h,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;A(c)&&(c=eh.test(c)?fa(c):b(c));W(c)&&(c=new Date(c));if(!ha(c)||!isFinite(c.getTime()))return c;for(;d;)(l=fh.exec(d))?(k=db(k,l,1),d=k.pop()):(k.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=ec(f,m),c=fc(c,f,!0));r(k,function(b){h=gh[b];g+=h?h(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Yg(){return function(a,b){z(b)&&(b=2);return eb(a,b)}}function Zg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):fa(b);if(X(b))return a;W(a)&&(a=a.toString());if(!ya(a))return a;d=!d||isNaN(d)?0:fa(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?Gc(a,d,d+b):0===d?Gc(a,b,a.length):Gc(a,Math.max(0,d+b),d)}}function Gc(a,b,d){return A(a)?a.slice(b,d):Ha.call(a,b,d)}function Td(a){function b(b){return b.map(function(b){var c=1,d=Ta;if(B(b))d=b;else if(A(b)){if("+"===b.charAt(0)||"-"===b.charAt(0))c="-"===b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=
d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,h=b.type;if(d===h){var h=a.value,l=b.value;"string"===d?(h=h.toLowerCase(),l=l.toLowerCase()):"object"===d&&(D(h)&&(h=a.index),D(l)&&(l=b.index));h!==l&&(c=h<l?-1:1)}else c="undefined"===d?1:"undefined"===h?-1:"null"===d?1:"null"===h?-1:d<h?-1:1;return c}return function(a,f,g,k){if(null==a)return a;if(!ya(a))throw F("orderBy")("notarray",
a);H(f)||(f=[f]);0===f.length&&(f=["+"]);var h=b(f),l=g?-1:1,m=B(k)?k:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:h.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="null";else if("object"===c)a:{if(B(e.valueOf)&&(e=e.valueOf(),d(e)))break a;bc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var d=0,e=h.length;d<e;d++){var f=m(a.predicateValues[d],b.predicateValues[d]);if(f)return f*
h[d].descending*l}return(m(a.tieBreaker,b.tieBreaker)||c(a.tieBreaker,b.tieBreaker))*l});return a=a.map(function(a){return a.value})}}function Ra(a){B(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ia(a)}function Pb(a,b,d,c,e){this.$$controls=[];this.$error={};this.$$success={};this.$pending=void 0;this.$name=e(b.name||b.ngForm||"")(d);this.$dirty=!1;this.$valid=this.$pristine=!0;this.$submitted=this.$invalid=!1;this.$$parentForm=lb;this.$$element=a;this.$$animate=c;Zd(this)}function Zd(a){a.$$classCache=
{};a.$$classCache[$d]=!(a.$$classCache[mb]=a.$$element.hasClass(mb))}function ae(a){function b(a,b,c){c&&!a.$$classCache[b]?(a.$$animate.addClass(a.$$element,b),a.$$classCache[b]=!0):!c&&a.$$classCache[b]&&(a.$$animate.removeClass(a.$$element,b),a.$$classCache[b]=!1)}function d(a,c,d){c=c?"-"+Vc(c,"-"):"";b(a,mb+c,!0===d);b(a,$d+c,!1===d)}var c=a.set,e=a.unset;a.clazz.prototype.$setValidity=function(a,g,k){z(g)?(this.$pending||(this.$pending={}),c(this.$pending,a,k)):(this.$pending&&e(this.$pending,
a,k),be(this.$pending)&&(this.$pending=void 0));Ga(g)?g?(e(this.$error,a,k),c(this.$$success,a,k)):(c(this.$error,a,k),e(this.$$success,a,k)):(e(this.$error,a,k),e(this.$$success,a,k));this.$pending?(b(this,"ng-pending",!0),this.$valid=this.$invalid=void 0,d(this,"",null)):(b(this,"ng-pending",!1),this.$valid=be(this.$error),this.$invalid=!this.$valid,d(this,"",this.$valid));g=this.$pending&&this.$pending[a]?void 0:this.$error[a]?!1:this.$$success[a]?!0:null;d(this,a,g);this.$$parentForm.$setValidity(a,
g,this)}}function be(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function Hc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function Sa(a,b,d,c,e,f){var g=K(b[0].type);if(!e.android){var k=!1;b.on("compositionstart",function(){k=!0});b.on("compositionupdate",function(a){if(z(a.data)||""===a.data)k=!1});b.on("compositionend",function(){k=!1;l()})}var h,l=function(a){h&&(f.defer.cancel(h),h=null);if(!k){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&
"false"===d.ngTrim||(e=U(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){h||(h=f.defer(function(){h=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut drop",m)}b.on("change",l);if(ce[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!h){var b=this.validity,
c=b.badInput,d=b.typeMismatch;h=f.defer(function(){h=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Qb(a,b){return function(d,c){var e,f;if(ha(d))return d;if(A(d)){'"'===d.charAt(0)&&'"'===d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(hh.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),
ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),e=new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0),100>f.yyyy&&e.setFullYear(f.yyyy),e}return NaN}}function nb(a,b,d,c){return function(e,f,g,k,h,l,m,p){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function s(a){return w(a)&&!ha(a)?r(a)||void 0:a}function r(a,b){var c=k.$options.getOption("timezone");v&&v!==c&&(b=Sc(b,ec(v)));var e=d(a,
b);!isNaN(e)&&c&&(e=fc(e,c));return e}Ic(e,f,g,k,a);Sa(e,f,g,k,h,l);var t="time"===a||"datetimelocal"===a,q,v;k.$parsers.push(function(c){if(k.$isEmpty(c))return null;if(b.test(c))return r(c,q);k.$$parserName=a});k.$formatters.push(function(a){if(a&&!ha(a))throw ob("datefmt",a);if(n(a)){q=a;var b=k.$options.getOption("timezone");b&&(v=b,q=fc(q,b,!0));var d=c;t&&A(k.$options.getOption("timeSecondsFormat"))&&(d=c.replace("ss.sss",k.$options.getOption("timeSecondsFormat")).replace(/:$/,""));a=m("date")(a,
d,b);t&&k.$options.getOption("timeStripZeroSeconds")&&(a=a.replace(/(?::00)?(?:\.000)?$/,""));return a}v=q=null;return""});if(w(g.min)||g.ngMin){var x=g.min||p(g.ngMin)(e),B=s(x);k.$validators.min=function(a){return!n(a)||z(B)||d(a)>=B};g.$observe("min",function(a){a!==x&&(B=s(a),x=a,k.$validate())})}if(w(g.max)||g.ngMax){var y=g.max||p(g.ngMax)(e),J=s(y);k.$validators.max=function(a){return!n(a)||z(J)||d(a)<=J};g.$observe("max",function(a){a!==y&&(J=s(a),y=a,k.$validate())})}}}function Ic(a,b,d,
c,e){(c.$$hasNativeValidators=D(b[0].validity))&&c.$parsers.push(function(a){var d=b.prop("validity")||{};if(d.badInput||d.typeMismatch)c.$$parserName=e;else return a})}function de(a){a.$parsers.push(function(b){if(a.$isEmpty(b))return null;if(ih.test(b))return parseFloat(b);a.$$parserName="number"});a.$formatters.push(function(b){if(!a.$isEmpty(b)){if(!W(b))throw ob("numfmt",b);b=b.toString()}return b})}function na(a){w(a)&&!W(a)&&(a=parseFloat(a));return X(a)?void 0:a}function Jc(a){var b=a.toString(),
d=b.indexOf(".");return-1===d?-1<a&&1>a&&(a=/e-(\d+)$/.exec(b))?Number(a[1]):0:b.length-d-1}function ee(a,b,d){a=Number(a);var c=(a|0)!==a,e=(b|0)!==b,f=(d|0)!==d;if(c||e||f){var g=c?Jc(a):0,k=e?Jc(b):0,h=f?Jc(d):0,g=Math.max(g,k,h),g=Math.pow(10,g);a*=g;b*=g;d*=g;c&&(a=Math.round(a));e&&(b=Math.round(b));f&&(d=Math.round(d))}return 0===(a-b)%d}function fe(a,b,d,c,e){if(w(c)){a=a(c);if(!a.constant)throw ob("constexpr",d,c);return a(b)}return e}function Kc(a,b){function d(a,b){if(!a||!a.length)return[];
if(!b||!b.length)return a;var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e===b[m])continue a;c.push(e)}return c}function c(a){if(!a)return a;var b=a;H(a)?b=a.map(c).join(" "):D(a)?b=Object.keys(a).filter(function(b){return a[b]}).join(" "):A(a)||(b=a+"");return b}a="ngClass"+a;var e;return["$parse",function(f){return{restrict:"AC",link:function(g,k,h){function l(a,b){var c=[];r(a,function(a){if(0<b||p[a])p[a]=(p[a]||0)+b,p[a]===+(0<b)&&c.push(a)});return c.join(" ")}function m(a){if(a===
b){var c=s,c=l(c&&c.split(" "),1);h.$addClass(c)}else c=s,c=l(c&&c.split(" "),-1),h.$removeClass(c);n=a}var p=k.data("$classCounts"),n=!0,s;p||(p=T(),k.data("$classCounts",p));"ngClass"!==a&&(e||(e=f("$index",function(a){return a&1})),g.$watch(e,m));g.$watch(f(h[a],c),function(a){if(n===b){var c=s&&s.split(" "),e=a&&a.split(" "),f=d(c,e),c=d(e,c),f=l(f,-1),c=l(c,1);h.$addClass(c);h.$removeClass(f)}s=a})}}}]}function qd(a,b,d,c,e,f){return{restrict:"A",compile:function(g,k){var h=a(k[c]);return function(a,
c){c.on(e,function(c){var e=function(){h(a,{$event:c})};if(b.$$phase)if(f)a.$evalAsync(e);else try{e()}catch(g){d(g)}else a.$apply(e)})}}}}function Rb(a,b,d,c,e,f,g,k,h){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=
void 0;this.$name=h(d.name||"",!1)(a);this.$$parentForm=lb;this.$options=Sb;this.$$updateEvents="";this.$$updateEventHandler=this.$$updateEventHandler.bind(this);this.$$parsedNgModel=e(d.ngModel);this.$$parsedNgModelAssign=this.$$parsedNgModel.assign;this.$$ngModelGet=this.$$parsedNgModel;this.$$ngModelSet=this.$$parsedNgModelAssign;this.$$pendingDebounce=null;this.$$parserValid=void 0;this.$$parserName="parse";this.$$currentValidationRunId=0;this.$$scope=a;this.$$rootScope=a.$root;this.$$attr=d;
this.$$element=c;this.$$animate=f;this.$$timeout=g;this.$$parse=e;this.$$q=k;this.$$exceptionHandler=b;Zd(this);jh(this)}function jh(a){a.$$scope.$watch(function(b){b=a.$$ngModelGet(b);b===a.$modelValue||a.$modelValue!==a.$modelValue&&b!==b||a.$$setModelValue(b);return b})}function Lc(a){this.$$options=a}function ge(a,b){r(b,function(b,c){w(a[c])||(a[c]=b)})}function Oa(a,b){a.prop("selected",b);a.attr("selected",b)}function he(a,b,d){if(a){A(a)&&(a=new RegExp("^"+a+"$"));if(!a.test)throw F("ngPattern")("noregexp",
b,a,za(d));return a}}function Tb(a){a=fa(a);return X(a)?-1:a}var Wb={objectMaxDepth:5,urlErrorParamsEnabled:!0},ie=/^\/(.+)\/([a-z]*)$/,ta=Object.prototype.hasOwnProperty,K=function(a){return A(a)?a.toLowerCase():a},ub=function(a){return A(a)?a.toUpperCase():a},Ca,x,rb,Ha=[].slice,Fg=[].splice,kh=[].push,la=Object.prototype.toString,Pc=Object.getPrototypeOf,pa=F("ng"),ca=C.angular||(C.angular={}),kc,pb=0;Ca=C.document.documentMode;var X=Number.isNaN||function(a){return a!==a};E.$inject=[];Ta.$inject=
[];var ve=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,U=function(a){return A(a)?a.trim():a},Md=function(a){return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Aa=function(){if(!w(Aa.rules)){var a=C.document.querySelector("[ng-csp]")||C.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Aa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==
b.indexOf("no-inline-style")}}else{a=Aa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Aa.rules},qb=function(){if(w(qb.name_))return qb.name_;var a,b,d=Qa.length,c,e;for(b=0;b<d;++b)if(c=Qa[b],a=C.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return qb.name_=e},xe=/:/g,Qa=["ng-","data-ng-","ng:","x-ng-"],Be=function(a){var b=a.currentScript;if(!b)return!0;if(!(b instanceof C.HTMLScriptElement||b instanceof C.SVGScriptElement))return!1;
b=b.attributes;return[b.getNamedItem("src"),b.getNamedItem("href"),b.getNamedItem("xlink:href")].every(function(b){if(!b)return!0;if(!b.value)return!1;var c=a.createElement("a");c.href=b.value;if(a.location.origin===c.origin)return!0;switch(c.protocol){case "http:":case "https:":case "ftp:":case "blob:":case "file:":case "data:":return!0;default:return!1}})}(C.document),Ee=/[A-Z]/g,Wc=!1,Pa=3,Ke={full:"1.7.8",major:1,minor:7,dot:8,codeName:"enthusiastic-oblation"};Y.expando="ng339";var Ka=Y.cache=
{},pg=1;Y._data=function(a){return this.cache[a[this.expando]]||{}};var lg=/-([a-z])/g,lh=/^-ms-/,Ab={mouseleave:"mouseout",mouseenter:"mouseover"},nc=F("jqLite"),og=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,mc=/<|&#?\w+;/,mg=/<([\w:-]+)/,ng=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,oa={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>",
"</tr></tbody></table>"],_default:[0,"",""]};oa.optgroup=oa.option;oa.tbody=oa.tfoot=oa.colgroup=oa.caption=oa.thead;oa.th=oa.td;var ug=C.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Wa=Y.prototype={ready:fd,toString:function(){var a=[];r(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?x(this[a]):x(this[this.length+a])},length:0,push:kh,sort:[].sort,splice:[].splice},Gb={};r("multiple selected checked disabled readOnly required open".split(" "),
function(a){Gb[K(a)]=a});var md={};r("input select option textarea button form details".split(" "),function(a){md[a]=!0});var td={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern",ngStep:"step"};r({data:rc,removeData:qc,hasData:function(a){for(var b in Ka[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)qc(a[b]),id(a[b])}},function(a,b){Y[b]=a});r({data:rc,inheritedData:Eb,scope:function(a){return x.data(a,"$scope")||Eb(a.parentNode||
a,["$isolateScope","$scope"])},isolateScope:function(a){return x.data(a,"$isolateScope")||x.data(a,"$isolateScopeNoTemplate")},controller:jd,injector:function(a){return Eb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Bb,css:function(a,b,d){b=xb(b.replace(lh,"ms-"));if(w(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Pa&&2!==c&&8!==c&&a.getAttribute){var c=K(b),e=Gb[c];if(w(d))null===d||!1===d&&e?a.removeAttribute(b):a.setAttribute(b,
e?c:d);else return a=a.getAttribute(b),e&&null!==a&&(a=c),null===a?void 0:a}},prop:function(a,b,d){if(w(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(z(d)){var c=a.nodeType;return 1===c||c===Pa?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(z(b)){if(a.multiple&&"select"===ua(a)){var d=[];r(a.options,function(a){a.selected&&d.push(a.value||a.text)});return d}return a.value}a.value=b},html:function(a,b){if(z(b))return a.innerHTML;yb(a,!0);a.innerHTML=b},
empty:kd},function(a,b){Y.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==kd&&z(2===a.length&&a!==Bb&&a!==jd?b:c)){if(D(b)){for(e=0;e<g;e++)if(a===rc)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=z(e)?Math.min(g,1):g;for(f=0;f<g;f++){var k=a(this[f],b,c);e=e?e+k:k}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});r({removeData:qc,on:function(a,b,d,c){if(w(c))throw nc("onargs");if(lc(a)){c=zb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=rg(a,e));c=0<=b.indexOf(" ")?
b.split(" "):[b];for(var g=c.length,k=function(b,c,g){var k=e[b];k||(k=e[b]=[],k.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f));k.push(d)};g--;)b=c[g],Ab[b]?(k(Ab[b],tg),k(b,void 0,!0)):k(b)}},off:id,one:function(a,b,d){a=x(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;yb(a);r(new Y(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];r(a.childNodes,function(a){1===
a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new Y(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;r(new Y(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){var d=x(b).eq(0).clone()[0],c=a.parentNode;c&&c.replaceChild(d,a);d.appendChild(a)},remove:Fb,detach:function(a){Fb(a,!0)},after:function(a,b){var d=a,c=a.parentNode;
if(c){b=new Y(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}}},addClass:Db,removeClass:Cb,toggleClass:function(a,b,d){b&&r(b.split(" "),function(b){var e=d;z(e)&&(e=!Bb(a,b));(e?Db:Cb)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:pc,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=zb(a);if(g=(g=g&&g.events)&&
g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:E,type:f,target:a},b.type&&(c=S(c,b)),b=ja(g),e=d?[c].concat(d):[c],r(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){Y.prototype[b]=function(b,c,e){for(var f,g=0,k=this.length;g<
k;g++)z(f)?(f=a(this[g],b,c,e),w(f)&&(f=x(f))):oc(f,a(this[g],b,c,e));return w(f)?f:this}});Y.prototype.bind=Y.prototype.on;Y.prototype.unbind=Y.prototype.off;var mh=Object.create(null);nd.prototype={_idx:function(a){a!==this._lastKey&&(this._lastKey=a,this._lastIndex=this._keys.indexOf(a));return this._lastIndex},_transformKey:function(a){return X(a)?mh:a},get:function(a){a=this._transformKey(a);a=this._idx(a);if(-1!==a)return this._values[a]},has:function(a){a=this._transformKey(a);return-1!==this._idx(a)},
set:function(a,b){a=this._transformKey(a);var d=this._idx(a);-1===d&&(d=this._lastIndex=this._keys.length);this._keys[d]=a;this._values[d]=b},delete:function(a){a=this._transformKey(a);a=this._idx(a);if(-1===a)return!1;this._keys.splice(a,1);this._values.splice(a,1);this._lastKey=NaN;this._lastIndex=-1;return!0}};var Hb=nd,jg=[function(){this.$get=[function(){return Hb}]}],wg=/^([^(]+?)=>/,xg=/^[^(]*\(\s*([^)]*)\)/m,nh=/,/,oh=/^\s*(_?)(\S+?)\1\s*$/,vg=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ba=F("$injector");
fb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw A(d)&&d||(d=a.name||yg(a)),Ba("strictdi",d);b=od(a);r(b[1].split(nh),function(a){a.replace(oh,function(a,b,d){c.push(d)})})}a.$inject=c}}else H(a)?(b=a.length-1,sb(a[b],"fn"),c=a.slice(0,b)):sb(a,"fn",!0);return c};var je=F("$animate"),zf=function(){this.$get=E},Af=function(){var a=new Hb,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=A(b)?b.split(" "):
H(b)?b:[],r(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){r(b,function(b){var c=a.get(b);if(c){var d=zg(b.attr("class")),e="",f="";r(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});r(b,function(a){e&&Db(a,e);f&&Cb(a,f)});a.delete(b)}});b.length=0}return{enabled:E,on:E,off:E,pin:E,push:function(g,k,h,l){l&&l();h=h||{};h.from&&g.css(h.from);h.to&&g.css(h.to);if(h.addClass||h.removeClass)if(k=h.addClass,l=h.removeClass,h=a.get(g)||{},k=e(h,k,!0),l=e(h,l,!1),
k||l)a.set(g,h),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},xf=["$provide",function(a){var b=this,d=null,c=null;this.$$registeredAnimations=Object.create(null);this.register=function(c,d){if(c&&"."!==c.charAt(0))throw je("notcsel",c);var g=c+"-animation";b.$$registeredAnimations[c.substr(1)]=g;a.factory(g,d)};this.customFilter=function(a){1===arguments.length&&(c=B(a)?a:null);return c};this.classNameFilter=function(a){if(1===arguments.length&&(d=a instanceof RegExp?
a:null)&&/[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d=null,je("nongcls","ng-animate");return d};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var e;a:{for(e=0;e<d.length;e++){var f=d[e];if(1===f.nodeType){e=f;break a}}e=void 0}!e||e.parentNode||e.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.cancel&&a.cancel()},enter:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,
"enter",ra(l))},move:function(c,d,h,l){d=d&&x(d);h=h&&x(h);d=d||h.parent();b(c,d,h);return a.push(c,"move",ra(l))},leave:function(b,c){return a.push(b,"leave",ra(c),function(){b.remove()})},addClass:function(b,c,d){d=ra(d);d.addClass=hb(d.addclass,c);return a.push(b,"addClass",d)},removeClass:function(b,c,d){d=ra(d);d.removeClass=hb(d.removeClass,c);return a.push(b,"removeClass",d)},setClass:function(b,c,d,f){f=ra(f);f.addClass=hb(f.addClass,c);f.removeClass=hb(f.removeClass,d);return a.push(b,"setClass",
f)},animate:function(b,c,d,f,m){m=ra(m);m.from=m.from?S(m.from,c):c;m.to=m.to?S(m.to,d):d;m.tempClasses=hb(m.tempClasses,f||"ng-inline-animate");return a.push(b,"animate",m)}}}]}],Cf=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},Bf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$$isDocumentHidden","$timeout",function(a,
b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){c()?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;r(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:E,getPromise:function(){if(!this.promise){var b=
this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},
complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},yf=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);k||
h.complete();k=!0});return h}var g=e||{};g.$$prepared||(g=Ia(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var k,h=new d;return{start:f,end:f}}}]},$=F("$compile"),tc=new function(){};Xc.$inject=["$provide","$$sanitizeUriProvider"];Jb.prototype.isFirstChange=function(){return this.previousValue===tc};var pd=/^((?:x|data)[:\-_])/i,Eg=/[:\-_]+(.)/g,vd=F("$controller"),ud=/^(\S+)(\s+as\s+([\w$]+))?$/,Jf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&
b instanceof x&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},wd="application/json",wc={"Content-Type":wd+";charset=utf-8"},Hg=/^\[|^\{(?!\{)/,Ig={"[":/]$/,"{":/}$/},Gg=/^\)]\}',?\n/,Kb=F("$http"),Ma=ca.$interpolateMinErr=F("$interpolate");Ma.throwNoconcat=function(a){throw Ma("noconcat",a);};Ma.interr=function(a,b){return Ma("interr",a,b.toString())};var Lg=F("$interval"),Sf=function(){this.$get=function(){function a(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var b=ca.callbacks,
d={};return{createCallback:function(c){c="_"+(b.$$counter++).toString(36);var e="angular.callbacks."+c,f=a(c);d[e]=b[c]=f;return e},wasCalled:function(a){return d[a].called},getResponse:function(a){return d[a].data},removeCallback:function(a){delete b[d[a].id];delete d[a]}}}},ph=/^([^?#]*)(\?([^#]*))?(#(.*))?$/,Mg={http:80,https:443,ftp:21},jb=F("$location"),Ng=/^\s*[\\/]{2,}/,qh={$$absUrl:"",$$html5:!1,$$replace:!1,$$compose:function(){for(var a=this.$$path,b=this.$$hash,d=ye(this.$$search),b=b?
"#"+hc(b):"",a=a.split("/"),c=a.length;c--;)a[c]=hc(a[c].replace(/%2F/g,"/"));this.$$url=a.join("/")+(d?"?"+d:"")+b;this.$$absUrl=this.$$normalizeUrl(this.$$url);this.$$urlUpdatedByLocation=!0},absUrl:Lb("$$absUrl"),url:function(a){if(z(a))return this.$$url;var b=ph.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Lb("$$protocol"),host:Lb("$$host"),port:Lb("$$port"),path:Dd("$$path",function(a){a=null!==
a?a.toString():"";return"/"===a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(A(a)||W(a))a=a.toString(),this.$$search=gc(a);else if(D(a))a=Ia(a,{}),r(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw jb("isrcharg");break;default:z(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:Dd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};
r([Cd,zc,yc],function(a){a.prototype=Object.create(qh);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==yc||!this.$$html5)throw jb("nostate");this.$$state=z(b)?null:b;this.$$urlUpdatedByLocation=!0;return this}});var Ya=F("$parse"),Rg={}.constructor.prototype.valueOf,Ub=T();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ub[a]=!0});var rh={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Nb=function(a){this.options=a};Nb.prototype={constructor:Nb,
lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ub[b],e=Ub[d];Ub[a]||
c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?
this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):
(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=w(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw Ya("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<
this.text.length;){var d=K(this.text.charAt(this.index));if("."===d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"===d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"===a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!==a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<
this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,
16))):d+=rh[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var q=function(a,b){this.lexer=a;this.options=b};q.Program="Program";q.ExpressionStatement="ExpressionStatement";q.AssignmentExpression="AssignmentExpression";q.ConditionalExpression="ConditionalExpression";q.LogicalExpression="LogicalExpression";q.BinaryExpression="BinaryExpression";q.UnaryExpression="UnaryExpression";
q.CallExpression="CallExpression";q.MemberExpression="MemberExpression";q.Identifier="Identifier";q.Literal="Literal";q.ArrayExpression="ArrayExpression";q.Property="Property";q.ObjectExpression="ObjectExpression";q.ThisExpression="ThisExpression";q.LocalsExpression="LocalsExpression";q.NGValueParameter="NGValueParameter";q.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},
program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:q.Program,body:a}},expressionStatement:function(){return{type:q.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();if(this.expect("=")){if(!Hd(a))throw Ya("lval");
a={type:q.AssignmentExpression,left:a,right:this.assignment(),operator:"="}}return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:q.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:q.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a=
{type:q.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:q.BinaryExpression,
operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:q.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:q.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?
a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Ia(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:q.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:q.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):
"["===b.text?(a={type:q.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:q.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:q.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))
}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:q.Identifier,name:a.text}},constant:function(){return{type:q.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:q.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
b={type:q.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");
return{type:q.ObjectExpression,properties:a}},throwError:function(a,b){throw Ya("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw Ya("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw Ya("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,
e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:q.ThisExpression},$locals:{type:q.LocalsExpression}}};var Fd=2;Jd.prototype={compile:function(a){var b=this;this.state={nextId:0,filters:{},fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};Z(a,b.$filter);var d="",c;this.stage="assign";if(c=Id(a))this.state.computing=
"assign",d=this.nextId(),this.recurse(c,d),this.return_(d),d="fn.assign="+this.generateFunction("assign","s,v,l");c=Gd(a.body);b.stage="inputs";r(c,function(a,c){var d="fn"+c;b.state[d]={vars:[],body:[],own:{}};b.state.computing=d;var k=b.nextId();b.recurse(a,k);b.return_(k);b.state.inputs.push({name:d,isPure:a.isPure});a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(a);a='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+
d+this.watchFns()+"return fn;";a=(new Function("$filter","getStringValue","ifDefined","plus",a))(this.$filter,Og,Pg,Ed);this.state=this.stage=void 0;return a},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;r(b,function(b){a.push("var "+b.name+"="+d.generateFunction(b.name,"s"));b.isPure&&a.push(b.name,".isPure="+JSON.stringify(b.isPure)+";")});b.length&&a.push("fn.inputs=["+b.map(function(a){return a.name}).join(",")+"];");return a.join("")},generateFunction:function(a,
b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;r(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,k,h=this,l,m,p;c=c||E;if(!f&&w(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,
this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case q.Program:r(a.body,function(b,c){h.recurse(b.expression,void 0,void 0,function(a){k=a});c!==a.body.length-1?h.current().body.push(k,";"):h.return_(k)});break;case q.Literal:m=this.escape(a.value);this.assign(b,m);c(b||m);break;case q.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){k=a});m=a.operator+"("+this.ifDefined(k,0)+")";this.assign(b,m);c(m);break;case q.BinaryExpression:this.recurse(a.left,
void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){k=a});m="+"===a.operator?this.plus(g,k):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(k,0):"("+g+")"+a.operator+"("+k+")";this.assign(b,m);c(m);break;case q.LogicalExpression:b=b||this.nextId();h.recurse(a.left,b);h.if_("&&"===a.operator?b:h.not(b),h.lazyRecurse(a.right,b));c(b);break;case q.ConditionalExpression:b=b||this.nextId();h.recurse(a.test,b);h.if_(b,h.lazyRecurse(a.alternate,b),h.lazyRecurse(a.consequent,
b));c(b);break;case q.Identifier:b=b||this.nextId();d&&(d.context="inputs"===h.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);h.if_("inputs"===h.stage||h.not(h.getHasOwnProperty("l",a.name)),function(){h.if_("inputs"===h.stage||"s",function(){e&&1!==e&&h.if_(h.isNull(h.nonComputedMember("s",a.name)),h.lazyAssign(h.nonComputedMember("s",a.name),"{}"));h.assign(b,h.nonComputedMember("s",a.name))})},b&&h.lazyAssign(b,h.nonComputedMember("l",
a.name)));c(b);break;case q.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();h.recurse(a.object,g,void 0,function(){h.if_(h.notNull(g),function(){a.computed?(k=h.nextId(),h.recurse(a.property,k),h.getStringValue(k),e&&1!==e&&h.if_(h.not(h.computedMember(g,k)),h.lazyAssign(h.computedMember(g,k),"{}")),m=h.computedMember(g,k),h.assign(b,m),d&&(d.computed=!0,d.name=k)):(e&&1!==e&&h.if_(h.isNull(h.nonComputedMember(g,a.property.name)),h.lazyAssign(h.nonComputedMember(g,
a.property.name),"{}")),m=h.nonComputedMember(g,a.property.name),h.assign(b,m),d&&(d.computed=!1,d.name=a.property.name))},function(){h.assign(b,"undefined")});c(b)},!!e);break;case q.CallExpression:b=b||this.nextId();a.filter?(k=h.filter(a.callee.name),l=[],r(a.arguments,function(a){var b=h.nextId();h.recurse(a,b);l.push(b)}),m=k+"("+l.join(",")+")",h.assign(b,m),c(b)):(k=h.nextId(),g={},l=[],h.recurse(a.callee,k,g,function(){h.if_(h.notNull(k),function(){r(a.arguments,function(b){h.recurse(b,a.constant?
void 0:h.nextId(),void 0,function(a){l.push(a)})});m=g.name?h.member(g.context,g.name,g.computed)+"("+l.join(",")+")":k+"("+l.join(",")+")";h.assign(b,m)},function(){h.assign(b,"undefined")});c(b)}));break;case q.AssignmentExpression:k=this.nextId();g={};this.recurse(a.left,void 0,g,function(){h.if_(h.notNull(g.context),function(){h.recurse(a.right,k);m=h.member(g.context,g.name,g.computed)+a.operator+k;h.assign(b,m);c(b||m)})},1);break;case q.ArrayExpression:l=[];r(a.elements,function(b){h.recurse(b,
a.constant?void 0:h.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(b||m);break;case q.ObjectExpression:l=[];p=!1;r(a.properties,function(a){a.computed&&(p=!0)});p?(b=b||this.nextId(),this.assign(b,"{}"),r(a.properties,function(a){a.computed?(g=h.nextId(),h.recurse(a.key,g)):g=a.key.type===q.Identifier?a.key.name:""+a.key.value;k=h.nextId();h.recurse(a.value,k);h.assign(h.member(b,g,a.computed),k)})):(r(a.properties,function(b){h.recurse(b.value,a.constant?void 0:
h.nextId(),void 0,function(a){l.push(h.escape(b.key.type===q.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case q.ThisExpression:this.assign(b,"s");c(b||"s");break;case q.LocalsExpression:this.assign(b,"l");c(b||"l");break;case q.NGValueParameter:this.assign(b,"v"),c(b||"v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,
b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},
not:function(a){return"!("+a+")"},isNull:function(a){return a+"==null"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},lazyRecurse:function(a,b,d,c,e,f){var g=
this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(A(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(W(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw Ya("esc");},nextId:function(a,
b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};Kd.prototype={compile:function(a){var b=this;Z(a,b.$filter);var d,c;if(d=Id(a))c=this.recurse(d);d=Gd(a.body);var e;d&&(e=[],r(d,function(a,c){var d=b.recurse(a);d.isPure=a.isPure;a.input=d;e.push(d);a.watchId=c}));var f=[];r(a.body,function(a){f.push(b.recurse(a.expression))});a=0===a.body.length?E:1===a.body.length?f[0]:function(a,b){var c;r(f,function(d){c=
d(a,b)});return c};c&&(a.assign=function(a,b,d){return c(a,d,b)});e&&(a.inputs=e);return a},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case q.Literal:return this.value(a.value,b);case q.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case q.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case q.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),
this["binary"+a.operator](c,e,b);case q.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case q.Identifier:return f.identifier(a.name,b,d);case q.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d):this.nonComputedMember(c,e,b,d);case q.CallExpression:return g=[],r(a.arguments,function(a){g.push(f.recurse(a))}),
a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var p=[],n=0;n<g.length;++n)p.push(g[n](a,c,d,f));a=e.apply(void 0,p,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,f){var p=e(a,c,d,f),n;if(null!=p.value){n=[];for(var s=0;s<g.length;++s)n.push(g[s](a,c,d,f));n=p.value.apply(p.context,n)}return b?{value:n}:n};case q.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,f,g){var p=
c(a,d,f,g);a=e(a,d,f,g);p.context[p.name]=a;return b?{value:a}:a};case q.ArrayExpression:return g=[],r(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],n=0;n<g.length;++n)f.push(g[n](a,c,d,e));return b?{value:f}:f};case q.ObjectExpression:return g=[],r(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===q.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,
c,d,e){for(var f={},n=0;n<g.length;++n)g[n].computed?f[g[n].key(a,c,d,e)]=g[n].value(a,c,d,e):f[g[n].key]=g[n].value(a,c,d,e);return b?{value:f}:f};case q.ThisExpression:return function(a){return b?{value:a}:a};case q.LocalsExpression:return function(a,c){return b?{value:c}:c};case q.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,
e,f);d=w(d)?-d:-0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=Ed(k,c);return d?{value:k}:k}},"binary-":function(a,b,d){return function(c,e,f,g){var k=a(c,e,f,g);c=b(c,e,f,g);k=(w(k)?k:0)-(w(c)?c:0);return d?{value:k}:k}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,
e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=
a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k)?b(e,f,g,k):d(e,f,g,k);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d){return function(c,e,f,g){c=e&&a in e?e:c;d&&1!==d&&c&&null==c[a]&&(c[a]={});e=c?c[a]:void 0;return b?{context:c,name:a,value:e}:
e}},computedMember:function(a,b,d,c){return function(e,f,g,k){var h=a(e,f,g,k),l,m;null!=h&&(l=b(e,f,g,k),l+="",c&&1!==c&&h&&!h[l]&&(h[l]={}),m=h[l]);return d?{context:h,name:l,value:m}:m}},nonComputedMember:function(a,b,d,c){return function(e,f,g,k){e=a(e,f,g,k);c&&1!==c&&e&&null==e[b]&&(e[b]={});f=null!=e?e[b]:void 0;return d?{context:e,name:b,value:f}:f}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};Mb.prototype={constructor:Mb,parse:function(a){a=this.getAst(a);var b=
this.astCompiler.compile(a.ast),d=a.ast;b.literal=0===d.body.length||1===d.body.length&&(d.body[0].expression.type===q.Literal||d.body[0].expression.type===q.ArrayExpression||d.body[0].expression.type===q.ObjectExpression);b.constant=a.ast.constant;b.oneTime=a.oneTime;return b},getAst:function(a){var b=!1;a=a.trim();":"===a.charAt(0)&&":"===a.charAt(1)&&(b=!0,a=a.substring(2));return{ast:this.ast.ast(a),oneTime:b}}};var Ea=F("$sce"),V={HTML:"html",CSS:"css",MEDIA_URL:"mediaUrl",URL:"url",RESOURCE_URL:"resourceUrl",
JS:"js"},Cc=/_([a-z])/g,Ug=F("$templateRequest"),Vg=F("$timeout"),aa=C.document.createElement("a"),Od=ga(C.location.href),Na;aa.href="http://[::1]";var Wg="[::1]"===aa.hostname;Pd.$inject=["$document"];dd.$inject=["$provide"];var Wd=22,Vd=".",Ec="0";Qd.$inject=["$locale"];Sd.$inject=["$locale"];var gh={yyyy:ea("FullYear",4,0,!1,!0),yy:ea("FullYear",2,0,!0,!0),y:ea("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:ea("Month",2,1),M:ea("Month",1,1),LLLL:kb("Month",!1,!0),dd:ea("Date",2),
d:ea("Date",1),HH:ea("Hours",2),H:ea("Hours",1),hh:ea("Hours",2,-12),h:ea("Hours",1,-12),mm:ea("Minutes",2),m:ea("Minutes",1),ss:ea("Seconds",2),s:ea("Seconds",1),sss:ea("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Ob(Math[0<a?"floor":"ceil"](a/60),2)+Ob(Math.abs(a%60),2))},ww:Yd(2),w:Yd(1),G:Fc,GG:Fc,GGG:Fc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},
fh=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,eh=/^-?\d+$/;Rd.$inject=["$locale"];var $g=ia(K),ah=ia(ub);Td.$inject=["$parse"];var Me=ia({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===la.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};r(Gb,function(a,b){function d(a,d,e){a.$watch(e[c],
function(a){e.$set(b,!!a)})}if("multiple"!==a){var c=wa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});r(td,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"===e.ngPattern.charAt(0)&&(c=e.ngPattern.match(ie))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});r(["src","srcset","href"],function(a){var b=wa("ng-"+a);vb[b]=
["$sce",function(d){return{priority:99,link:function(c,e,f){var g=a,k=a;"href"===a&&"[object SVGAnimatedString]"===la.call(e.prop("href"))&&(k="xlinkHref",f.$attr[k]="xlink:href",g=null);f.$set(b,d.getTrustedMediaUrl(f[b]));f.$observe(b,function(b){b?(f.$set(k,b),Ca&&g&&e.prop(g,f[k])):"href"===a&&f.$set(k,null)})}}}]});var lb={$addControl:E,$getControls:ia([]),$$renameControl:function(a,b){a.$name=b},$removeControl:E,$setValidity:E,$setDirty:E,$setPristine:E,$setSubmitted:E,$$setSubmitted:E};Pb.$inject=
["$element","$attrs","$scope","$animate","$interpolate"];Pb.prototype={$rollbackViewValue:function(){r(this.$$controls,function(a){a.$rollbackViewValue()})},$commitViewValue:function(){r(this.$$controls,function(a){a.$commitViewValue()})},$addControl:function(a){Ja(a.$name,"input");this.$$controls.push(a);a.$name&&(this[a.$name]=a);a.$$parentForm=this},$getControls:function(){return ja(this.$$controls)},$$renameControl:function(a,b){var d=a.$name;this[d]===a&&delete this[d];this[b]=a;a.$name=b},$removeControl:function(a){a.$name&&
this[a.$name]===a&&delete this[a.$name];r(this.$pending,function(b,d){this.$setValidity(d,null,a)},this);r(this.$error,function(b,d){this.$setValidity(d,null,a)},this);r(this.$$success,function(b,d){this.$setValidity(d,null,a)},this);cb(this.$$controls,a);a.$$parentForm=lb},$setDirty:function(){this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Vb);this.$dirty=!0;this.$pristine=!1;this.$$parentForm.$setDirty()},$setPristine:function(){this.$$animate.setClass(this.$$element,
Za,Vb+" ng-submitted");this.$dirty=!1;this.$pristine=!0;this.$submitted=!1;r(this.$$controls,function(a){a.$setPristine()})},$setUntouched:function(){r(this.$$controls,function(a){a.$setUntouched()})},$setSubmitted:function(){for(var a=this;a.$$parentForm&&a.$$parentForm!==lb;)a=a.$$parentForm;a.$$setSubmitted()},$$setSubmitted:function(){this.$$animate.addClass(this.$$element,"ng-submitted");this.$submitted=!0;r(this.$$controls,function(a){a.$$setSubmitted&&a.$$setSubmitted()})}};ae({clazz:Pb,set:function(a,
b,d){var c=a[b];c?-1===c.indexOf(d)&&c.push(d):a[b]=[d]},unset:function(a,b,d){var c=a[b];c&&(cb(c,d),0===c.length&&delete a[b])}});var ke=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||E}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Pb,compile:function(d,f){d.addClass(Za).addClass(mb);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var p=f[0];if(!("action"in e)){var n=function(b){a.$apply(function(){p.$commitViewValue();
p.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",n);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",n)},0,!1)})}(f[1]||p.$$parentForm).$addControl(p);var s=g?c(p.$name):E;g&&(s(a,p),e.$observe(g,function(b){p.$name!==b&&(s(a,void 0),p.$$parentForm.$$renameControl(p,b),s=c(p.$name),s(a,p))}));d.on("$destroy",function(){p.$$parentForm.$removeControl(p);s(a,void 0);S(p,lb)})}}}}}]},Ne=ke(),Ze=ke(!0),hh=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
sh=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,th=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,ih=/^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,le=/^(\d{4,})-(\d{2})-(\d{2})$/,me=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Mc=/^(\d{4,})-W(\d\d)$/,ne=/^(\d{4,})-(\d\d)$/,
oe=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,ce=T();r(["date","datetime-local","month","time","week"],function(a){ce[a]=!0});var pe={text:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c)},date:nb("date",le,Qb(le,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":nb("datetimelocal",me,Qb(me,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:nb("time",oe,Qb(oe,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:nb("week",Mc,function(a,b){if(ha(a))return a;if(A(a)){Mc.lastIndex=0;var d=Mc.exec(a);
if(d){var c=+d[1],e=+d[2],f=d=0,g=0,k=0,h=Xd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),k=b.getMilliseconds());return new Date(c,0,h.getDate()+e,d,f,g,k)}}return NaN},"yyyy-Www"),month:nb("month",ne,Qb(ne,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f,g,k){Ic(a,b,d,c,"number");de(c);Sa(a,b,d,c,e,f);var h;if(w(d.min)||d.ngMin){var l=d.min||k(d.ngMin)(a);h=na(l);c.$validators.min=function(a,b){return c.$isEmpty(b)||z(h)||b>=h};d.$observe("min",function(a){a!==l&&(h=na(a),
l=a,c.$validate())})}if(w(d.max)||d.ngMax){var m=d.max||k(d.ngMax)(a),p=na(m);c.$validators.max=function(a,b){return c.$isEmpty(b)||z(p)||b<=p};d.$observe("max",function(a){a!==m&&(p=na(a),m=a,c.$validate())})}if(w(d.step)||d.ngStep){var n=d.step||k(d.ngStep)(a),s=na(n);c.$validators.step=function(a,b){return c.$isEmpty(b)||z(s)||ee(b,h||0,s)};d.$observe("step",function(a){a!==n&&(s=na(a),n=a,c.$validate())})}},url:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c);c.$validators.url=function(a,b){var d=
a||b;return c.$isEmpty(d)||sh.test(d)}},email:function(a,b,d,c,e,f){Sa(a,b,d,c,e,f);Hc(c);c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||th.test(d)}},radio:function(a,b,d,c){var e=!d.ngTrim||"false"!==U(d.ngTrim);z(d.name)&&b.attr("name",++pb);b.on("change",function(a){var g;b[0].checked&&(g=d.value,e&&(g=U(g)),c.$setViewValue(g,a&&a.type))});c.$render=function(){var a=d.value;e&&(a=U(a));b[0].checked=a===c.$viewValue};d.$observe("value",c.$render)},range:function(a,b,d,c,e,f){function g(a,
c){b.attr(a,d[a]);var e=d[a];d.$observe(a,function(a){a!==e&&(e=a,c(a))})}function k(a){p=na(a);X(c.$modelValue)||(m?(a=b.val(),p>a&&(a=p,b.val(a)),c.$setViewValue(a)):c.$validate())}function h(a){n=na(a);X(c.$modelValue)||(m?(a=b.val(),n<a&&(b.val(n),a=n<p?p:n),c.$setViewValue(a)):c.$validate())}function l(a){s=na(a);X(c.$modelValue)||(m?c.$viewValue!==b.val()&&c.$setViewValue(b.val()):c.$validate())}Ic(a,b,d,c,"range");de(c);Sa(a,b,d,c,e,f);var m=c.$$hasNativeValidators&&"range"===b[0].type,p=m?
0:void 0,n=m?100:void 0,s=m?1:void 0,r=b[0].validity;a=w(d.min);e=w(d.max);f=w(d.step);var q=c.$render;c.$render=m&&w(r.rangeUnderflow)&&w(r.rangeOverflow)?function(){q();c.$setViewValue(b.val())}:q;a&&(p=na(d.min),c.$validators.min=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(p)||b>=p},g("min",k));e&&(n=na(d.max),c.$validators.max=m?function(){return!0}:function(a,b){return c.$isEmpty(b)||z(n)||b<=n},g("max",h));f&&(s=na(d.step),c.$validators.step=m?function(){return!r.stepMismatch}:
function(a,b){return c.$isEmpty(b)||z(s)||ee(b,p||0,s)},g("step",l))},checkbox:function(a,b,d,c,e,f,g,k){var h=fe(k,a,"ngTrueValue",d.ngTrueValue,!0),l=fe(k,a,"ngFalseValue",d.ngFalseValue,!1);b.on("change",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return va(a,h)});c.$parsers.push(function(a){return a?h:l})},hidden:E,button:E,submit:E,reset:E,file:E},Yc=["$browser","$sniffer",
"$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,k){k[0]&&(pe[K(g.type)]||pe.text)(e,f,g,k[0],b,a,d,c)}}}}],vf=function(){var a={configurable:!0,enumerable:!1,get:function(){return this.getAttribute("value")||""},set:function(a){this.setAttribute("value",a)}};return{restrict:"E",priority:200,compile:function(b,d){if("hidden"===K(d.type))return{pre:function(b,d,f,g){b=d[0];b.parentNode&&b.parentNode.insertBefore(b,b.nextSibling);Object.defineProperty&&
Object.defineProperty(b,"value",a)}}}}},uh=/^(true|false|\d+)$/,sf=function(){function a(a,d,c){var e=w(c)?c:9===Ca?"":null;a.prop("value",e);d.$set("value",c)}return{restrict:"A",priority:100,compile:function(b,d){return uh.test(d.ngValue)?function(b,d,f){b=b.$eval(f.ngValue);a(d,f,b)}:function(b,d,f){b.$watch(f.ngValue,function(b){a(d,f,b)})}}}},Re=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];
b.$watch(e.ngBind,function(a){c.textContent=ic(a)})}}}}],Te=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=z(a)?"":a})}}}}],Se=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);
return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],rf=ia({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Ue=Kc("",!0),We=Kc("Odd",0),Ve=Kc("Even",1),Xe=Ra({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ye=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],cd={},vh={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=wa("ng-"+a);cd[b]=["$parse","$rootScope","$exceptionHandler",function(d,c,e){return qd(d,c,e,b,a,vh[a])}]});var af=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var k,h,l;d.$watch(e.ngIf,function(d){d?h||g(function(d,f){h=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);k={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),h&&(h.$destroy(),h=null),k&&(l=tb(k.clone),
a.leave(l).done(function(a){!1!==a&&(l=null)}),k=null))})}}}],bf=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",k=e.autoscroll;return function(c,e,m,p,n){var r=0,q,t,x,v=function(){t&&(t.remove(),t=null);q&&(q.$destroy(),q=null);x&&(d.leave(x).done(function(a){!1!==a&&(t=null)}),t=x,x=null)};c.$watch(f,function(f){var m=function(a){!1===
a||!w(k)||k&&!c.$eval(k)||b()},t=++r;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===r){var b=c.$new();p.template=a;a=n(b,function(a){v();d.enter(a,null,e).done(m)});q=b;x=a;q.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||t!==r||(v(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(v(),p.template=null)})}}}}],uf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){la.call(d[0]).match(/SVG/)?
(d.empty(),a(ed(e.template,C.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],cf=Ra({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),qf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=d.ngList||", ",f="false"!==d.ngTrim,g=f?U(e):e;c.$parsers.push(function(a){if(!z(a)){var b=[];a&&r(a.split(g),function(a){a&&b.push(f?U(a):a)});return b}});c.$formatters.push(function(a){if(H(a))return a.join(e)});
c.$isEmpty=function(a){return!a||!a.length}}}},mb="ng-valid",$d="ng-invalid",Za="ng-pristine",Vb="ng-dirty",ob=F("ngModel");Rb.$inject="$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");Rb.prototype={$$initGetterSetters:function(){if(this.$options.getOption("getterSetter")){var a=this.$$parse(this.$$attr.ngModel+"()"),b=this.$$parse(this.$$attr.ngModel+"($$$p)");this.$$ngModelGet=function(b){var c=this.$$parsedNgModel(b);B(c)&&(c=a(b));return c};this.$$ngModelSet=
function(a,c){B(this.$$parsedNgModel(a))?b(a,{$$$p:c}):this.$$parsedNgModelAssign(a,c)}}else if(!this.$$parsedNgModel.assign)throw ob("nonassign",this.$$attr.ngModel,za(this.$$element));},$render:E,$isEmpty:function(a){return z(a)||""===a||null===a||a!==a},$$updateEmptyClasses:function(a){this.$isEmpty(a)?(this.$$animate.removeClass(this.$$element,"ng-not-empty"),this.$$animate.addClass(this.$$element,"ng-empty")):(this.$$animate.removeClass(this.$$element,"ng-empty"),this.$$animate.addClass(this.$$element,
"ng-not-empty"))},$setPristine:function(){this.$dirty=!1;this.$pristine=!0;this.$$animate.removeClass(this.$$element,Vb);this.$$animate.addClass(this.$$element,Za)},$setDirty:function(){this.$dirty=!0;this.$pristine=!1;this.$$animate.removeClass(this.$$element,Za);this.$$animate.addClass(this.$$element,Vb);this.$$parentForm.$setDirty()},$setUntouched:function(){this.$touched=!1;this.$untouched=!0;this.$$animate.setClass(this.$$element,"ng-untouched","ng-touched")},$setTouched:function(){this.$touched=
!0;this.$untouched=!1;this.$$animate.setClass(this.$$element,"ng-touched","ng-untouched")},$rollbackViewValue:function(){this.$$timeout.cancel(this.$$pendingDebounce);this.$viewValue=this.$$lastCommittedViewValue;this.$render()},$validate:function(){if(!X(this.$modelValue)){var a=this.$$lastCommittedViewValue,b=this.$$rawModelValue,d=this.$valid,c=this.$modelValue,e=this.$options.getOption("allowInvalid"),f=this;this.$$runValidators(b,a,function(a){e||d===a||(f.$modelValue=a?b:void 0,f.$modelValue!==
c&&f.$$writeModelToScope())})}},$$runValidators:function(a,b,d){function c(){var c=!0;r(h.$validators,function(d,e){var g=Boolean(d(a,b));c=c&&g;f(e,g)});return c?!0:(r(h.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;r(h.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!B(h.then))throw ob("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?h.$$q.all(c).then(function(){g(d)},E):g(!0)}function f(a,b){k===h.$$currentValidationRunId&&
h.$setValidity(a,b)}function g(a){k===h.$$currentValidationRunId&&d(a)}this.$$currentValidationRunId++;var k=this.$$currentValidationRunId,h=this;(function(){var a=h.$$parserName;if(z(h.$$parserValid))f(a,null);else return h.$$parserValid||(r(h.$validators,function(a,b){f(b,null)}),r(h.$asyncValidators,function(a,b){f(b,null)})),f(a,h.$$parserValid),h.$$parserValid;return!0})()?c()?e():g(!1):g(!1)},$commitViewValue:function(){var a=this.$viewValue;this.$$timeout.cancel(this.$$pendingDebounce);if(this.$$lastCommittedViewValue!==
a||""===a&&this.$$hasNativeValidators)this.$$updateEmptyClasses(a),this.$$lastCommittedViewValue=a,this.$pristine&&this.$setDirty(),this.$$parseAndValidate()},$$parseAndValidate:function(){var a=this.$$lastCommittedViewValue,b=this;this.$$parserValid=z(a)?void 0:!0;this.$setValidity(this.$$parserName,null);this.$$parserName="parse";if(this.$$parserValid)for(var d=0;d<this.$parsers.length;d++)if(a=this.$parsers[d](a),z(a)){this.$$parserValid=!1;break}X(this.$modelValue)&&(this.$modelValue=this.$$ngModelGet(this.$$scope));
var c=this.$modelValue,e=this.$options.getOption("allowInvalid");this.$$rawModelValue=a;e&&(this.$modelValue=a,b.$modelValue!==c&&b.$$writeModelToScope());this.$$runValidators(a,this.$$lastCommittedViewValue,function(d){e||(b.$modelValue=d?a:void 0,b.$modelValue!==c&&b.$$writeModelToScope())})},$$writeModelToScope:function(){this.$$ngModelSet(this.$$scope,this.$modelValue);r(this.$viewChangeListeners,function(a){try{a()}catch(b){this.$$exceptionHandler(b)}},this)},$setViewValue:function(a,b){this.$viewValue=
a;this.$options.getOption("updateOnDefault")&&this.$$debounceViewValueCommit(b)},$$debounceViewValueCommit:function(a){var b=this.$options.getOption("debounce");W(b[a])?b=b[a]:W(b["default"])&&-1===this.$options.getOption("updateOn").indexOf(a)?b=b["default"]:W(b["*"])&&(b=b["*"]);this.$$timeout.cancel(this.$$pendingDebounce);var d=this;0<b?this.$$pendingDebounce=this.$$timeout(function(){d.$commitViewValue()},b):this.$$rootScope.$$phase?this.$commitViewValue():this.$$scope.$apply(function(){d.$commitViewValue()})},
$overrideModelOptions:function(a){this.$options=this.$options.createChild(a);this.$$setUpdateOnEvents()},$processModelValue:function(){var a=this.$$format();this.$viewValue!==a&&(this.$$updateEmptyClasses(a),this.$viewValue=this.$$lastCommittedViewValue=a,this.$render(),this.$$runValidators(this.$modelValue,this.$viewValue,E))},$$format:function(){for(var a=this.$formatters,b=a.length,d=this.$modelValue;b--;)d=a[b](d);return d},$$setModelValue:function(a){this.$modelValue=this.$$rawModelValue=a;this.$$parserValid=
void 0;this.$processModelValue()},$$setUpdateOnEvents:function(){this.$$updateEvents&&this.$$element.off(this.$$updateEvents,this.$$updateEventHandler);if(this.$$updateEvents=this.$options.getOption("updateOn"))this.$$element.on(this.$$updateEvents,this.$$updateEventHandler)},$$updateEventHandler:function(a){this.$$debounceViewValueCommit(a&&a.type)}};ae({clazz:Rb,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]}});var pf=["$rootScope",function(a){return{restrict:"A",require:["ngModel",
"^?form","^?ngModelOptions"],controller:Rb,priority:1,compile:function(b){b.addClass(Za).addClass("ng-untouched").addClass(mb);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;if(f=f[2])g.$options=f.$options;g.$$initGetterSetters();b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){function g(){k.$setTouched()}var k=f[0];k.$$setUpdateOnEvents();c.on("blur",
function(){k.$touched||(a.$$phase?b.$evalAsync(g):b.$apply(g))})}}}}}],Sb,wh=/(\s+|^)default(\s+|$)/;Lc.prototype={getOption:function(a){return this.$$options[a]},createChild:function(a){var b=!1;a=S({},a);r(a,function(d,c){"$inherit"===d?"*"===c?b=!0:(a[c]=this.$$options[c],"updateOn"===c&&(a.updateOnDefault=this.$$options.updateOnDefault)):"updateOn"===c&&(a.updateOnDefault=!1,a[c]=U(d.replace(wh,function(){a.updateOnDefault=!0;return" "})))},this);b&&(delete a["*"],ge(a,this.$$options));ge(a,Sb.$$options);
return new Lc(a)}};Sb=new Lc({updateOn:"",updateOnDefault:!0,debounce:0,getterSetter:!1,allowInvalid:!1,timezone:null});var tf=function(){function a(a,d){this.$$attrs=a;this.$$scope=d}a.$inject=["$attrs","$scope"];a.prototype={$onInit:function(){var a=this.parentCtrl?this.parentCtrl.$options:Sb,d=this.$$scope.$eval(this.$$attrs.ngModelOptions);this.$options=a.createChild(d)}};return{restrict:"A",priority:10,require:{parentCtrl:"?^^ngModelOptions"},bindToController:!0,controller:a}},df=Ra({terminal:!0,
priority:1E3}),xh=F("ngOptions"),yh=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,nf=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!r&&ya(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&
"$"!==c.charAt(0)&&b.push(c)}return b}var p=a.match(yh);if(!p)throw xh("iexp",a,za(b));var n=p[5]||p[7],r=p[6];a=/ as /.test(p[0])&&p[1];var q=p[9];b=d(p[2]?p[1]:n);var t=a&&d(a)||b,w=q&&d(q),v=q?function(a,b){return w(c,b)}:function(a){return La(a)},x=function(a,b){return v(a,A(a,b))},z=d(p[2]||p[1]),y=d(p[3]||""),J=d(p[4]||""),I=d(p[8]),B={},A=r?function(a,b){B[r]=b;B[n]=a;return B}:function(a){B[n]=a;return B};return{trackBy:q,getTrackByValue:x,getWatchables:d(I,function(a){var b=[];a=a||[];for(var d=
f(a),e=d.length,g=0;g<e;g++){var k=a===d?g:d[g],l=a[k],k=A(l,k),l=v(l,k);b.push(l);if(p[2]||p[1])l=z(c,k),b.push(l);p[4]&&(k=J(c,k),b.push(k))}return b}),getOptions:function(){for(var a=[],b={},d=I(c)||[],g=f(d),k=g.length,n=0;n<k;n++){var p=d===g?n:g[n],r=A(d[p],p),s=t(c,r),p=v(s,r),w=z(c,r),B=y(c,r),r=J(c,r),s=new e(p,s,w,B,r);a.push(s);b[p]=s}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[x(a)]},getViewValueFromOption:function(a){return q?Ia(a.viewValue):a.viewValue}}}}}
var e=C.document.createElement("option"),f=C.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=E},post:function(d,k,h,l){function m(a){var b=(a=v.getOptionFromViewValue(a))&&a.element;b&&!b.selected&&(b.selected=!0);return a}function p(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);b.value=a.selectValue}var n=l[0],q=l[1],z=h.multiple;l=0;for(var t=k.children(),
B=t.length;l<B;l++)if(""===t[l].value){n.hasEmptyOption=!0;n.emptyOption=t.eq(l);break}k.empty();l=!!n.emptyOption;x(e.cloneNode(!1)).val("?");var v,A=c(h.ngOptions,k,d),C=b[0].createDocumentFragment();n.generateUnknownOptionValue=function(a){return"?"};z?(n.writeValue=function(a){if(v){var b=a&&a.map(m)||[];v.items.forEach(function(a){a.element.selected&&-1===Array.prototype.indexOf.call(b,a)&&(a.element.selected=!1)})}},n.readValue=function(){var a=k.val()||[],b=[];r(a,function(a){(a=v.selectValueMap[a])&&
!a.disabled&&b.push(v.getViewValueFromOption(a))});return b},A.trackBy&&d.$watchCollection(function(){if(H(q.$viewValue))return q.$viewValue.map(function(a){return A.getTrackByValue(a)})},function(){q.$render()})):(n.writeValue=function(a){if(v){var b=k[0].options[k[0].selectedIndex],c=v.getOptionFromViewValue(a);b&&b.removeAttribute("selected");c?(k[0].value!==c.selectValue&&(n.removeUnknownOption(),k[0].value=c.selectValue,c.element.selected=!0),c.element.setAttribute("selected","selected")):n.selectUnknownOrEmptyOption(a)}},
n.readValue=function(){var a=v.selectValueMap[k.val()];return a&&!a.disabled?(n.unselectEmptyOption(),n.removeUnknownOption(),v.getViewValueFromOption(a)):null},A.trackBy&&d.$watch(function(){return A.getTrackByValue(q.$viewValue)},function(){q.$render()}));l&&(a(n.emptyOption)(d),k.prepend(n.emptyOption),8===n.emptyOption[0].nodeType?(n.hasEmptyOption=!1,n.registerOption=function(a,b){""===b.val()&&(n.hasEmptyOption=!0,n.emptyOption=b,n.emptyOption.removeClass("ng-scope"),q.$render(),b.on("$destroy",
function(){var a=n.$isEmptyOptionSelected();n.hasEmptyOption=!1;n.emptyOption=void 0;a&&q.$render()}))}):n.emptyOption.removeClass("ng-scope"));d.$watchCollection(A.getWatchables,function(){var a=v&&n.readValue();if(v)for(var b=v.items.length-1;0<=b;b--){var c=v.items[b];w(c.group)?Fb(c.element.parentNode):Fb(c.element)}v=A.getOptions();var d={};v.items.forEach(function(a){var b;if(w(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),C.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);
var c=e.cloneNode(!1);b.appendChild(c);p(a,c)}else b=e.cloneNode(!1),C.appendChild(b),p(a,b)});k[0].appendChild(C);q.$render();q.$isEmpty(a)||(b=n.readValue(),(A.trackBy||z?va(a,b):a===b)||(q.$setViewValue(b),q.$render()))})}}}}],ef=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,k){function h(a){g.text(a||"")}var l=k.count,m=k.$attr.when&&g.attr(k.$attr.when),p=k.offset||0,n=f.$eval(m)||{},q={},w=b.startSymbol(),t=b.endSymbol(),x=w+l+"-"+
p+t,v=ca.noop,A;r(k,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+K(c[2]),n[c]=g.attr(k.$attr[b]))});r(n,function(a,d){q[d]=b(a.replace(c,x))});f.$watch(l,function(b){var c=parseFloat(b),e=X(c);e||c in n||(c=a.pluralCat(c-p));c===A||e&&X(A)||(v(),e=q[c],z(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),v=E,h()):v=f.$watch(e,h),A=c)})}}}],qe=F("ngRef"),ff=["$parse",function(a){return{priority:-1,restrict:"A",compile:function(b,d){var c=wa(ua(b)),e=a(d.ngRef),f=e.assign||
function(){throw qe("nonassign",d.ngRef);};return function(a,b,h){var l;if(h.hasOwnProperty("ngRefRead"))if("$element"===h.ngRefRead)l=b;else{if(l=b.data("$"+h.ngRefRead+"Controller"),!l)throw qe("noctrl",h.ngRefRead,d.ngRef);}else l=b.data("$"+c+"Controller");l=l||b;f(a,l);b.on("$destroy",function(){e(a)===l&&f(a,null)})}}}}],gf=["$parse","$animate","$compile",function(a,b,d){var c=F("ngRepeat"),e=function(a,b,c,d,e,f,g){a[c]=d;e&&(a[e]=f);a.$index=b;a.$first=0===b;a.$last=b===g-1;a.$middle=!(a.$first||
a.$last);a.$odd=!(a.$even=0===(b&1))},f=function(a,b,c){return La(c)},g=function(a,b){return b};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(k,h){var l=h.ngRepeat,m=d.$$createComment("end ngRepeat",l),p=l.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!p)throw c("iexp",l);var n=p[1],q=p[2],w=p[3],t=p[4],p=n.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);if(!p)throw c("iidexp",
n);var x=p[3]||p[1],v=p[2];if(w&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(w)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(w)))throw c("badident",w);var z;if(t){var A={$id:La},y=a(t);z=function(a,b,c,d){v&&(A[v]=b);A[x]=c;A.$index=d;return y(a,A)}}return function(a,d,h,k,n){var p=T();a.$watchCollection(q,function(h){var k,q,t=d[0],s,y=T(),B,C,E,D,H,F,K;w&&(a[w]=h);if(ya(h))H=h,q=z||f;else for(K in q=z||g,H=[],h)ta.call(h,K)&&"$"!==K.charAt(0)&&H.push(K);
B=H.length;K=Array(B);for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],D=q(a,C,E,k),p[D])F=p[D],delete p[D],y[D]=F,K[k]=F;else{if(y[D])throw r(K,function(a){a&&a.scope&&(p[a.id]=a)}),c("dupes",l,D,E);K[k]={id:D,scope:void 0,clone:void 0};y[D]=!0}A&&(A[x]=void 0);for(s in p){F=p[s];D=tb(F.clone);b.leave(D);if(D[0].parentNode)for(k=0,q=D.length;k<q;k++)D[k].$$NG_REMOVED=!0;F.scope.$destroy()}for(k=0;k<B;k++)if(C=h===H?k:H[k],E=h[C],F=K[k],F.scope){s=t;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);F.clone[0]!==
s&&b.move(tb(F.clone),null,t);t=F.clone[F.clone.length-1];e(F.scope,k,x,E,v,C,B)}else n(function(a,c){F.scope=c;var d=m.cloneNode(!1);a[a.length++]=d;b.enter(a,null,t);t=d;F.clone=a;y[F.id]=F;e(F.scope,k,x,E,v,C,B)});p=y})}}}}],hf=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],$e=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,
d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],jf=Ra(function(a,b,d){a.$watchCollection(d.ngStyle,function(a,d){d&&a!==d&&(a||(a={}),r(d,function(b,d){null==a[d]&&(a[d]="")}));a&&b.css(a)})}),kf=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],k=[],h=[],l=[],m=function(a,b){return function(c){!1!==c&&a.splice(b,1)}};d.$watch(e.ngSwitch||
e.on,function(c){for(var d,e;h.length;)a.cancel(h.pop());d=0;for(e=l.length;d<e;++d){var q=tb(k[d].clone);l[d].$destroy();(h[d]=a.leave(q)).done(m(h,d))}k.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");k.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],lf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){a=d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function(a,
b,c){return c[b-1]!==a});r(a,function(a){c.cases["!"+a]=c.cases["!"+a]||[];c.cases["!"+a].push({transclude:e,element:b})})}}),mf=Ra({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),zh=F("ngTransclude"),of=["$compile",function(a){return{restrict:"EAC",compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,k){function h(){d(a,function(a){b.append(a)})}if(!k)throw zh("orphan",
za(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;k(function(a,c){var d;if(d=a.length)a:{d=0;for(var f=a.length;d<f;d++){var g=a[d];if(g.nodeType!==Pa||g.nodeValue.trim()){d=!0;break a}}d=void 0}d?b.append(a):(h(),c.$destroy())},null,f);f&&!k.isSlotFilled(f)&&h()}}}}],Oe=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"===d.type&&a.put(d.id,b[0].text)}}}],Ah={$setViewValue:E,$render:E},Bh=["$element",
"$scope",function(a,b){function d(){g||(g=!0,b.$$postDigest(function(){g=!1;e.ngModelCtrl.$render()}))}function c(a){k||(k=!0,b.$$postDigest(function(){b.$$destroyed||(k=!1,e.ngModelCtrl.$setViewValue(e.readValue()),a&&e.ngModelCtrl.$render())}))}var e=this,f=new Hb;e.selectValueMap={};e.ngModelCtrl=Ah;e.multiple=!1;e.unknownOption=x(C.document.createElement("option"));e.hasEmptyOption=!1;e.emptyOption=void 0;e.renderUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);
a.prepend(e.unknownOption);Oa(e.unknownOption,!0);a.val(b)};e.updateUnknownOption=function(b){b=e.generateUnknownOptionValue(b);e.unknownOption.val(b);Oa(e.unknownOption,!0);a.val(b)};e.generateUnknownOptionValue=function(a){return"? "+La(a)+" ?"};e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.selectEmptyOption=function(){e.emptyOption&&(a.val(""),Oa(e.emptyOption,!0))};e.unselectEmptyOption=function(){e.hasEmptyOption&&Oa(e.emptyOption,!1)};b.$on("$destroy",
function(){e.renderUnknownOption=E});e.readValue=function(){var b=a.val(),b=b in e.selectValueMap?e.selectValueMap[b]:b;return e.hasOption(b)?b:null};e.writeValue=function(b){var c=a[0].options[a[0].selectedIndex];c&&Oa(x(c),!1);e.hasOption(b)?(e.removeUnknownOption(),c=La(b),a.val(c in e.selectValueMap?c:b),Oa(x(a[0].options[a[0].selectedIndex]),!0)):e.selectUnknownOrEmptyOption(b)};e.addOption=function(a,b){if(8!==b[0].nodeType){Ja(a,'"option value"');""===a&&(e.hasEmptyOption=!0,e.emptyOption=
b);var c=f.get(a)||0;f.set(a,c+1);d()}};e.removeOption=function(a){var b=f.get(a);b&&(1===b?(f.delete(a),""===a&&(e.hasEmptyOption=!1,e.emptyOption=void 0)):f.set(a,b-1))};e.hasOption=function(a){return!!f.get(a)};e.$hasEmptyOption=function(){return e.hasEmptyOption};e.$isUnknownOptionSelected=function(){return a[0].options[0]===e.unknownOption[0]};e.$isEmptyOptionSelected=function(){return e.hasEmptyOption&&a[0].options[a[0].selectedIndex]===e.emptyOption[0]};e.selectUnknownOrEmptyOption=function(a){null==
a&&e.emptyOption?(e.removeUnknownOption(),e.selectEmptyOption()):e.unknownOption.parent().length?e.updateUnknownOption(a):e.renderUnknownOption(a)};var g=!1,k=!1;e.registerOption=function(a,b,f,g,k){if(f.$attr.ngValue){var q,r;f.$observe("value",function(a){var d,f=b.prop("selected");w(r)&&(e.removeOption(q),delete e.selectValueMap[r],d=!0);r=La(a);q=a;e.selectValueMap[r]=a;e.addOption(a,b);b.attr("value",r);d&&f&&c()})}else g?f.$observe("value",function(a){e.readValue();var d,f=b.prop("selected");
w(q)&&(e.removeOption(q),d=!0);q=a;e.addOption(a,b);d&&f&&c()}):k?a.$watch(k,function(a,d){f.$set("value",a);var g=b.prop("selected");d!==a&&e.removeOption(d);e.addOption(a,b);d&&g&&c()}):e.addOption(f.value,b);f.$observe("disabled",function(a){if("true"===a||a&&b.prop("selected"))e.multiple?c(!0):(e.ngModelCtrl.$setViewValue(null),e.ngModelCtrl.$render())});b.on("$destroy",function(){var a=e.readValue(),b=f.value;e.removeOption(b);d();(e.multiple&&a&&-1!==a.indexOf(b)||a===b)&&c(!0)})}}],Pe=function(){return{restrict:"E",
require:["select","?ngModel"],controller:Bh,priority:1,link:{pre:function(a,b,d,c){var e=c[0],f=c[1];if(f){if(e.ngModelCtrl=f,b.on("change",function(){e.removeUnknownOption();a.$apply(function(){f.$setViewValue(e.readValue())})}),d.multiple){e.multiple=!0;e.readValue=function(){var a=[];r(b.find("option"),function(b){b.selected&&!b.disabled&&(b=b.value,a.push(b in e.selectValueMap?e.selectValueMap[b]:b))});return a};e.writeValue=function(a){r(b.find("option"),function(b){var c=!!a&&(-1!==Array.prototype.indexOf.call(a,
b.value)||-1!==Array.prototype.indexOf.call(a,e.selectValueMap[b.value]));c!==b.selected&&Oa(x(b),c)})};var g,k=NaN;a.$watch(function(){k!==f.$viewValue||va(g,f.$viewValue)||(g=ja(f.$viewValue),f.$render());k=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}else e.registerOption=E},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},Qe=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){var c,e;w(d.ngValue)||
(w(d.value)?c=a(d.value,!0):(e=a(b.text(),!0))||d.$set("value",b.text()));return function(a,b,d){var h=b.parent();(h=h.data("$selectController")||h.parent().data("$selectController"))&&h.registerOption(a,b,d,c,e)}}}}],$c=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.hasOwnProperty("required")||a(c.ngRequired)(b);c.ngRequired||(c.required=!0);e.$validators.required=function(a,b){return!f||!e.$isEmpty(b)};c.$observe("required",function(a){f!==a&&(f=
a,e.$validate())})}}}}],Zc=["$parse",function(a){return{restrict:"A",require:"?ngModel",compile:function(b,d){var c,e;d.ngPattern&&(c=d.ngPattern,e="/"===d.ngPattern.charAt(0)&&ie.test(d.ngPattern)?function(){return d.ngPattern}:a(d.ngPattern));return function(a,b,d,h){if(h){var l=d.pattern;d.ngPattern?l=e(a):c=d.pattern;var m=he(l,c,b);d.$observe("pattern",function(a){var d=m;m=he(a,c,b);(d&&d.toString())!==(m&&m.toString())&&h.$validate()});h.$validators.pattern=function(a,b){return h.$isEmpty(b)||
z(m)||m.test(b)}}}}}}],bd=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.maxlength||a(c.ngMaxlength)(b),g=Tb(f);c.$observe("maxlength",function(a){f!==a&&(g=Tb(a),f=a,e.$validate())});e.$validators.maxlength=function(a,b){return 0>g||e.$isEmpty(b)||b.length<=g}}}}}],ad=["$parse",function(a){return{restrict:"A",require:"?ngModel",link:function(b,d,c,e){if(e){var f=c.minlength||a(c.ngMinlength)(b),g=Tb(f)||-1;c.$observe("minlength",function(a){f!==
a&&(g=Tb(a)||-1,f=a,e.$validate())});e.$validators.minlength=function(a,b){return e.$isEmpty(b)||b.length>=g}}}}}];C.angular.bootstrap?C.console&&console.log("WARNING: Tried to load AngularJS more than once."):(Fe(),Je(ca),ca.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],
ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a",
"short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),x(function(){Ae(C.document,
Uc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
/*
 AngularJS v1.7.8
 (c) 2010-2018 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(s,c){'use strict';function P(c){var h=[];C(h,E).chars(c);return h.join("")}var D=c.$$minErr("$sanitize"),F,h,G,H,I,q,E,J,K,C;c.module("ngSanitize",[]).provider("$sanitize",function(){function f(a,e){return B(a.split(","),e)}function B(a,e){var d={},b;for(b=0;b<a.length;b++)d[e?q(a[b]):a[b]]=!0;return d}function t(a,e){e&&e.length&&h(a,B(e))}function Q(a){for(var e={},d=0,b=a.length;d<b;d++){var k=a[d];e[k.name]=k.value}return e}function L(a){return a.replace(/&/g,"&amp;").replace(z,function(a){var d=
a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(d-55296)+(a-56320)+65536)+";"}).replace(u,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function A(a){for(;a;){if(a.nodeType===s.Node.ELEMENT_NODE)for(var e=a.attributes,d=0,b=e.length;d<b;d++){var k=e[d],g=k.name.toLowerCase();if("xmlns:ns1"===g||0===g.lastIndexOf("ns1:",0))a.removeAttributeNode(k),d--,b--}(e=a.firstChild)&&A(e);a=v("nextSibling",a)}}function v(a,e){var d=e[a];if(d&&J.call(e,d))throw D("elclob",
e.outerHTML||e.outerText);return d}var y=!1,g=!1;this.$get=["$$sanitizeUri",function(a){y=!0;g&&h(m,l);return function(e){var d=[];K(e,C(d,function(b,d){return!/^unsafe:/.test(a(b,d))}));return d.join("")}}];this.enableSvg=function(a){return I(a)?(g=a,this):g};this.addValidElements=function(a){y||(H(a)&&(a={htmlElements:a}),t(l,a.svgElements),t(r,a.htmlVoidElements),t(m,a.htmlVoidElements),t(m,a.htmlElements));return this};this.addValidAttrs=function(a){y||h(M,B(a,!0));return this};F=c.bind;h=c.extend;
G=c.forEach;H=c.isArray;I=c.isDefined;q=c.$$lowercase;E=c.noop;K=function(a,e){null===a||void 0===a?a="":"string"!==typeof a&&(a=""+a);var d=N(a);if(!d)return"";var b=5;do{if(0===b)throw D("uinput");b--;a=d.innerHTML;d=N(a)}while(a!==d.innerHTML);for(b=d.firstChild;b;){switch(b.nodeType){case 1:e.start(b.nodeName.toLowerCase(),Q(b.attributes));break;case 3:e.chars(b.textContent)}var k;if(!(k=b.firstChild)&&(1===b.nodeType&&e.end(b.nodeName.toLowerCase()),k=v("nextSibling",b),!k))for(;null==k;){b=
v("parentNode",b);if(b===d)break;k=v("nextSibling",b);1===b.nodeType&&e.end(b.nodeName.toLowerCase())}b=k}for(;b=d.firstChild;)d.removeChild(b)};C=function(a,e){var d=!1,b=F(a,a.push);return{start:function(a,g){a=q(a);!d&&w[a]&&(d=a);d||!0!==m[a]||(b("<"),b(a),G(g,function(d,g){var c=q(g),f="img"===a&&"src"===c||"background"===c;!0!==M[c]||!0===O[c]&&!e(d,f)||(b(" "),b(g),b('="'),b(L(d)),b('"'))}),b(">"))},end:function(a){a=q(a);d||!0!==m[a]||!0===r[a]||(b("</"),b(a),b(">"));a==d&&(d=!1)},chars:function(a){d||
b(L(a))}}};J=s.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)};var z=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,u=/([^#-~ |!])/g,r=f("area,br,col,hr,img,wbr"),x=f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),p=f("rp,rt"),n=h({},p,x),x=h({},x,f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),p=h({},p,f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
l=f("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),w=f("script,style"),m=h({},r,x,p,n),O=f("background,cite,href,longdesc,src,xlink:href,xml:base"),n=f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
p=f("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0),M=h({},O,p,n),N=function(a,e){function d(b){b="<remove></remove>"+b;try{var d=(new a.DOMParser).parseFromString(b,"text/html").body;d.firstChild.remove();return d}catch(e){}}function b(a){c.innerHTML=a;e.documentMode&&A(c);return c}var g;if(e&&e.implementation)g=e.implementation.createHTMLDocument("inert");else throw D("noinert");var c=(g.documentElement||g.getDocumentElement()).querySelector("body");c.innerHTML='<svg><g onload="this.parentNode.remove()"></g></svg>';return c.querySelector("svg")?
(c.innerHTML='<svg><p><style><img src="</style><img src=x onerror=alert(1)//">',c.querySelector("svg img")?d:b):function(b){b="<remove></remove>"+b;try{b=encodeURI(b)}catch(d){return}var e=new a.XMLHttpRequest;e.responseType="document";e.open("GET","data:text/html;charset=utf-8,"+b,!1);e.send(null);b=e.response.body;b.firstChild.remove();return b}}(s,s.document)}).info({angularVersion:"1.7.8"});c.module("ngSanitize").filter("linky",["$sanitize",function(f){var h=/((s?ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
t=/^mailto:/i,q=c.$$minErr("linky"),s=c.isDefined,A=c.isFunction,v=c.isObject,y=c.isString;return function(c,z,u){function r(c){c&&l.push(P(c))}function x(c,g){var f,a=p(c);l.push("<a ");for(f in a)l.push(f+'="'+a[f]+'" ');!s(z)||"target"in a||l.push('target="',z,'" ');l.push('href="',c.replace(/"/g,"&quot;"),'">');r(g);l.push("</a>")}if(null==c||""===c)return c;if(!y(c))throw q("notstring",c);for(var p=A(u)?u:v(u)?function(){return u}:function(){return{}},n=c,l=[],w,m;c=n.match(h);)w=c[0],c[2]||
c[4]||(w=(c[3]?"http://":"mailto:")+w),m=c.index,r(n.substr(0,m)),x(w,c[0].replace(t,"")),n=n.substring(m+c[0].length);r(n);return f(l.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map
(function(){
///<reference path="../typings/angularjs/angular.d.ts"/>
/*
 * decorates $compileProvider so that we have access to routing metadata
 */
function compilerProviderDecorator($compileProvider, $$directiveIntrospectorProvider) {
    var directive = $compileProvider.directive;
    $compileProvider.directive = function (name, factory) {
        $$directiveIntrospectorProvider.register(name, factory);
        return directive.apply(this, arguments);
    };
}
/*
 * private service that holds route mappings for each controller
 */
var DirectiveIntrospectorProvider = (function () {
    function DirectiveIntrospectorProvider() {
        this.directiveBuffer = [];
        this.directiveFactoriesByName = {};
        this.onDirectiveRegistered = null;
    }
    DirectiveIntrospectorProvider.prototype.register = function (name, factory) {
        if (angular.isArray(factory)) {
            factory = factory[factory.length - 1];
        }
        this.directiveFactoriesByName[name] = factory;
        if (this.onDirectiveRegistered) {
            this.onDirectiveRegistered(name, factory);
        }
        else {
            this.directiveBuffer.push({ name: name, factory: factory });
        }
    };
    DirectiveIntrospectorProvider.prototype.$get = function () {
        var _this = this;
        var fn = function (newOnControllerRegistered) {
            _this.onDirectiveRegistered = newOnControllerRegistered;
            while (_this.directiveBuffer.length > 0) {
                var directive = _this.directiveBuffer.pop();
                _this.onDirectiveRegistered(directive.name, directive.factory);
            }
        };
        fn.getTypeByName = function (name) { return _this.directiveFactoriesByName[name]; };
        return fn;
    };
    return DirectiveIntrospectorProvider;
})();
/**
 * @name ngOutlet
 *
 * @description
 * An ngOutlet is where resolved content goes.
 *
 * ## Use
 *
 * ```html
 * <div ng-outlet="name"></div>
 * ```
 *
 * The value for the `ngOutlet` attribute is optional.
 */
function ngOutletDirective($animate, $q, $rootRouter) {
    var rootRouter = $rootRouter;
    return {
        restrict: 'AE',
        transclude: 'element',
        terminal: true,
        priority: 400,
        require: ['?^^ngOutlet', 'ngOutlet'],
        link: outletLink,
        controller: (function () {
            function class_1() {
            }
            return class_1;
        })(),
        controllerAs: '$$ngOutlet'
    };
    function outletLink(scope, element, attrs, ctrls, $transclude) {
        var Outlet = (function () {
            function Outlet(controller, router) {
                this.controller = controller;
                this.router = router;
            }
            Outlet.prototype.cleanupLastView = function () {
                var _this = this;
                if (this.previousLeaveAnimation) {
                    $animate.cancel(this.previousLeaveAnimation);
                    this.previousLeaveAnimation = null;
                }
                if (this.currentScope) {
                    this.currentScope.$destroy();
                    this.currentScope = null;
                }
                if (this.currentElement) {
                    this.previousLeaveAnimation = $animate.leave(this.currentElement);
                    this.previousLeaveAnimation.then(function () { return _this.previousLeaveAnimation = null; });
                    this.currentElement = null;
                }
            };
            Outlet.prototype.reuse = function (instruction) {
                var next = $q.when(true);
                var previousInstruction = this.currentInstruction;
                this.currentInstruction = instruction;
                if (this.currentController && this.currentController.$routerOnReuse) {
                    next = $q.when(this.currentController.$routerOnReuse(this.currentInstruction, previousInstruction));
                }
                return next;
            };
            Outlet.prototype.routerCanReuse = function (nextInstruction) {
                var result;
                if (!this.currentInstruction ||
                    this.currentInstruction.componentType !== nextInstruction.componentType) {
                    result = false;
                }
                else if (this.currentController && this.currentController.$routerCanReuse) {
                    result = this.currentController.$routerCanReuse(nextInstruction, this.currentInstruction);
                }
                else {
                    result = nextInstruction === this.currentInstruction ||
                        angular.equals(nextInstruction.params, this.currentInstruction.params);
                }
                return $q.when(result);
            };
            Outlet.prototype.routerCanDeactivate = function (instruction) {
                if (this.currentController && this.currentController.$routerCanDeactivate) {
                    return $q.when(this.currentController.$routerCanDeactivate(instruction, this.currentInstruction));
                }
                return $q.when(true);
            };
            Outlet.prototype.deactivate = function (instruction) {
                if (this.currentController && this.currentController.$routerOnDeactivate) {
                    return $q.when(this.currentController.$routerOnDeactivate(instruction, this.currentInstruction));
                }
                return $q.when();
            };
            Outlet.prototype.activate = function (instruction) {
                var _this = this;
                this.previousInstruction = this.currentInstruction;
                this.currentInstruction = instruction;
                var componentName = this.controller.$$componentName = instruction.componentType;
                if (typeof componentName !== 'string') {
                    throw new Error('Component is not a string for ' + instruction.urlPath);
                }
                this.controller.$$template = '<' + dashCase(componentName) + ' $router="::$$router"></' +
                    dashCase(componentName) + '>';
                this.controller.$$router = this.router.childRouter(instruction.componentType);
                this.controller.$$outlet = this;
                var newScope = scope.$new();
                newScope.$$router = this.controller.$$router;
                this.deferredActivation = $q.defer();
                var clone = $transclude(newScope, function (clone) {
                    $animate.enter(clone, null, _this.currentElement || element);
                    _this.cleanupLastView();
                });
                this.currentElement = clone;
                this.currentScope = newScope;
                return this.deferredActivation.promise;
            };
            return Outlet;
        })();
        var parentCtrl = ctrls[0], myCtrl = ctrls[1], router = (parentCtrl && parentCtrl.$$router) || rootRouter;
        myCtrl.$$currentComponent = null;
        router.registerPrimaryOutlet(new Outlet(myCtrl, router));
    }
}
/**
 * This directive is responsible for compiling the contents of ng-outlet
 */
function ngOutletFillContentDirective($compile) {
    return {
        restrict: 'EA',
        priority: -400,
        require: 'ngOutlet',
        link: function (scope, element, attrs, ctrl) {
            var template = ctrl.$$template;
            element.html(template);
            $compile(element.contents())(scope);
        }
    };
}
function routerTriggerDirective($q) {
    return {
        require: '^ngOutlet',
        priority: -1000,
        link: function (scope, element, attr, ngOutletCtrl) {
            var promise = $q.when();
            var outlet = ngOutletCtrl.$$outlet;
            var currentComponent = outlet.currentController =
                element.controller(ngOutletCtrl.$$componentName);
            if (currentComponent.$routerOnActivate) {
                promise = $q.when(currentComponent.$routerOnActivate(outlet.currentInstruction, outlet.previousInstruction));
            }
            promise.then(outlet.deferredActivation.resolve, outlet.deferredActivation.reject);
        }
    };
}
/**
 * @name ngLink
 * @description
 * Lets you link to different parts of the app, and automatically generates hrefs.
 *
 * ## Use
 * The directive uses a simple syntax: `ng-link="componentName({ param: paramValue })"`
 *
 * ### Example
 *
 * ```js
 * angular.module('myApp', ['ngComponentRouter'])
 *   .controller('AppController', ['$rootRouter', function($rootRouter) {
 *     $rootRouter.config({ path: '/user/:id', component: 'user' });
 *     this.user = { name: 'Brian', id: 123 };
 *   });
 * ```
 *
 * ```html
 * <div ng-controller="AppController as app">
 *   <a ng-link="user({id: app.user.id})">{{app.user.name}}</a>
 * </div>
 * ```
 */
function ngLinkDirective($rootRouter, $parse) {
    return { require: '?^^ngOutlet', restrict: 'A', link: ngLinkDirectiveLinkFn };
    function ngLinkDirectiveLinkFn(scope, element, attrs, ctrl) {
        var router = (ctrl && ctrl.$$router) || $rootRouter;
        if (!router) {
            return;
        }
        var instruction = null;
        var link = attrs.ngLink || '';
        function getLink(params) {
            instruction = router.generate(params);
            return './' + angular.stringifyInstruction(instruction);
        }
        var routeParamsGetter = $parse(link);
        // we can avoid adding a watcher if it's a literal
        if (routeParamsGetter.constant) {
            var params = routeParamsGetter();
            element.attr('href', getLink(params));
        }
        else {
            scope.$watch(function () { return routeParamsGetter(scope); }, function (params) { return element.attr('href', getLink(params)); }, true);
        }
        element.on('click', function (event) {
            if (event.which !== 1 || !instruction) {
                return;
            }
            $rootRouter.navigateByInstruction(instruction);
            event.preventDefault();
        });
    }
}
function dashCase(str) {
    return str.replace(/[A-Z]/g, function (match) { return '-' + match.toLowerCase(); });
}
/*
 * A module for adding new a routing system Angular 1.
 */
angular.module('ngComponentRouter', [])
    .directive('ngOutlet', ['$animate', '$q', '$rootRouter', ngOutletDirective])
    .directive('ngOutlet', ['$compile', ngOutletFillContentDirective])
    .directive('ngLink', ['$rootRouter', '$parse', ngLinkDirective])
    .directive('$router', ['$q', routerTriggerDirective]);
/*
 * A module for inspecting controller constructors
 */
angular.module('ng')
    .provider('$$directiveIntrospector', DirectiveIntrospectorProvider)
    .config(['$compileProvider', '$$directiveIntrospectorProvider', compilerProviderDecorator]);

angular.module('ngComponentRouter').
    value('$route', null). // can be overloaded with ngRouteShim
    // Because Angular 1 has no notion of a root component, we use an object with unique identity
    // to represent this. Can be overloaded with a component name
    value('$routerRootComponent', new Object()).
    factory('$rootRouter', ['$q', '$location', '$$directiveIntrospector', '$browser', '$rootScope', '$injector', '$routerRootComponent', routerFactory]);

function routerFactory($q, $location, $$directiveIntrospector, $browser, $rootScope, $injector, $routerRootComponent) {

  // When this file is processed, the line below is replaced with
  // the contents of `../lib/facades.es5`.
  function CONST() {
  return (function(target) {
    return target;
  });
}

function CONST_EXPR(expr) {
  return expr;
}

function isPresent (x) {
  return !!x;
}

function isBlank (x) {
  return !x;
}

function isString(obj) {
  return typeof obj === 'string';
}

function isType (x) {
  return typeof x === 'function';
}

function isStringMap(obj) {
  return typeof obj === 'object' && obj !== null;
}

function isArray(obj) {
  return Array.isArray(obj);
}

function getTypeNameForDebugging (fn) {
  return fn.name || 'Root';
}

var PromiseWrapper = {
  resolve: function (reason) {
    return $q.when(reason);
  },

  reject: function (reason) {
    return $q.reject(reason);
  },

  catchError: function (promise, fn) {
    return promise.then(null, fn);
  },
  all: function (promises) {
    return $q.all(promises);
  }
};

var RegExpWrapper = {
  create: function(regExpStr, flags) {
    flags = flags ? flags.replace(/g/g, '') : '';
    return new RegExp(regExpStr, flags + 'g');
  },
  firstMatch: function(regExp, input) {
    regExp.lastIndex = 0;
    return regExp.exec(input);
  },
  matcher: function (regExp, input) {
    regExp.lastIndex = 0;
    return { re: regExp, input: input };
  }
};

var reflector = {
  annotations: function (fn) {
    //TODO: implement me
    return fn.annotations || [];
  }
};

var MapWrapper = {
  create: function() {
    return new Map();
  },

  get: function(m, k) {
    return m.get(k);
  },

  set: function(m, k, v) {
    return m.set(k, v);
  },

  contains: function (m, k) {
    return m.has(k);
  },

  forEach: function (m, fn) {
    return m.forEach(fn);
  }
};

var StringMapWrapper = {
  create: function () {
    return {};
  },

  set: function (m, k, v) {
    return m[k] = v;
  },

  get: function (m, k) {
    return m.hasOwnProperty(k) ? m[k] : undefined;
  },

  contains: function (m, k) {
    return m.hasOwnProperty(k);
  },

  keys: function(map) {
    return Object.keys(map);
  },

  isEmpty: function(map) {
    for (var prop in map) {
      if (map.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  },

  delete: function(map, key) {
    delete map[key];
  },

  forEach: function (m, fn) {
    for (var prop in m) {
      if (m.hasOwnProperty(prop)) {
        fn(m[prop], prop);
      }
    }
  },

  equals: function (m1, m2) {
    var k1 = Object.keys(m1);
    var k2 = Object.keys(m2);
    if (k1.length != k2.length) {
      return false;
    }
    var key;
    for (var i = 0; i < k1.length; i++) {
      key = k1[i];
      if (m1[key] !== m2[key]) {
        return false;
      }
    }
    return true;
  },

  merge: function(m1, m2) {
    var m = {};
    for (var attr in m1) {
      if (m1.hasOwnProperty(attr)) {
        m[attr] = m1[attr];
      }
    }
    for (var attr in m2) {
      if (m2.hasOwnProperty(attr)) {
        m[attr] = m2[attr];
      }
    }
    return m;
  }
};

var List = Array;
var ListWrapper = {
  toJSON: function(l) {
    return JSON.stringify(l);
  },

  clear: function (l) {
    l.length = 0;
  },

  create: function () {
    return [];
  },

  push: function (l, v) {
    return l.push(v);
  },

  forEach: function (l, fn) {
    return l.forEach(fn);
  },

  first: function(array) {
    if (!array)
      return null;
    return array[0];
  },

  last: function(array) {
    return (array && array.length) > 0 ? array[array.length - 1] : null;
  },

  map: function (l, fn) {
    return l.map(fn);
  },

  join: function (l, str) {
    return l.join(str);
  },

  reduce: function(list, fn, init) {
    return list.reduce(fn, init);
  },

  filter: function(array, pred) {
    return array.filter(pred);
  },

  concat: function(a, b) {
    return a.concat(b);
  },

  slice: function(l) {
    var from = arguments[1] !== (void 0) ? arguments[1] : 0;
    var to = arguments[2] !== (void 0) ? arguments[2] : null;
    return l.slice(from, to === null ? undefined : to);
  },

  maximum: function(list, predicate) {
    if (list.length == 0) {
      return null;
    }
    var solution = null;
    var maxValue = -Infinity;
    for (var index = 0; index < list.length; index++) {
      var candidate = list[index];
      if (isBlank(candidate)) {
        continue;
      }
      var candidateValue = predicate(candidate);
      if (candidateValue > maxValue) {
        solution = candidate;
        maxValue = candidateValue;
      }
    }
    return solution;
  }
};

var StringWrapper = {
  charCodeAt: function(s, i) {
    return s.charCodeAt(i);
  },

  equals: function (s1, s2) {
    return s1 === s2;
  },

  split: function(s, re) {
    return s.split(re);
  },

  replaceAll: function(s, from, replace) {
    return s.replace(from, replace);
  },

  replaceAllMapped: function(s, from, cb) {
    return s.replace(from, function(matches) {
      // Remove offset & string from the result array
      matches.splice(-2, 2);
      // The callback receives match, p1, ..., pn
      return cb.apply(null, matches);
    });
  },

  contains: function(s, substr) {
    return s.indexOf(substr) != -1;
  }

};

//TODO: implement?
// I think it's too heavy to ask 1.x users to bring in Rx for the router...
function EventEmitter() {}

var BaseException = Error;

var ObservableWrapper = {
  callNext: function(ob, val) {
    ob.fn(val);
  },
  callEmit: function(ob, val) {
    ob.fn(val);
  },

  subscribe: function(ob, fn) {
    ob.fn = fn;
  }
};

// TODO: https://github.com/angular/angular.js/blob/master/src/ng/browser.js#L227-L265
var $__router_47_location__ = {
  Location: Location
};

function Location(){}
Location.prototype.subscribe = function () {
  //TODO: implement
};
Location.prototype.path = function () {
  return $location.url();
};
Location.prototype.go = function (path, query) {
  return $location.url(path + query);
};


  var exports = {
    Injectable: function () {},
    OpaqueToken: function () {},
    Inject: function () {}
  };
  var require = function () {return exports;};

  // When this file is processed, the line below is replaced with
  // the contents of the compiled TypeScript classes.
  var TouchMap = (function () {
    function TouchMap(map) {
        var _this = this;
        this.map = {};
        this.keys = {};
        if (isPresent(map)) {
            StringMapWrapper.forEach(map, function (value, key) {
                _this.map[key] = isPresent(value) ? value.toString() : null;
                _this.keys[key] = true;
            });
        }
    }
    TouchMap.prototype.get = function (key) {
        StringMapWrapper.delete(this.keys, key);
        return this.map[key];
    };
    TouchMap.prototype.getUnused = function () {
        var _this = this;
        var unused = {};
        var keys = StringMapWrapper.keys(this.keys);
        keys.forEach(function (key) { return unused[key] = StringMapWrapper.get(_this.map, key); });
        return unused;
    };
    return TouchMap;
})();
exports.TouchMap = TouchMap;
function normalizeString(obj) {
    if (isBlank(obj)) {
        return null;
    }
    else {
        return obj.toString();
    }
}
exports.normalizeString = normalizeString;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function convertUrlParamsToArray(urlParams) {
    var paramsArray = [];
    if (isBlank(urlParams)) {
        return [];
    }
    StringMapWrapper.forEach(urlParams, function (value, key) { paramsArray.push((value === true) ? key : key + '=' + value); });
    return paramsArray;
}
exports.convertUrlParamsToArray = convertUrlParamsToArray;
// Convert an object of url parameters into a string that can be used in an URL
function serializeParams(urlParams, joiner) {
    if (joiner === void 0) { joiner = '&'; }
    return convertUrlParamsToArray(urlParams).join(joiner);
}
exports.serializeParams = serializeParams;
/**
 * This class represents a parsed URL
 */
var Url = (function () {
    function Url(path, child, auxiliary, params) {
        if (child === void 0) { child = null; }
        if (auxiliary === void 0) { auxiliary = CONST_EXPR([]); }
        if (params === void 0) { params = CONST_EXPR({}); }
        this.path = path;
        this.child = child;
        this.auxiliary = auxiliary;
        this.params = params;
    }
    Url.prototype.toString = function () {
        return this.path + this._matrixParamsToString() + this._auxToString() + this._childString();
    };
    Url.prototype.segmentToString = function () { return this.path + this._matrixParamsToString(); };
    /** @internal */
    Url.prototype._auxToString = function () {
        return this.auxiliary.length > 0 ?
            ('(' + this.auxiliary.map(function (sibling) { return sibling.toString(); }).join('//') + ')') :
            '';
    };
    Url.prototype._matrixParamsToString = function () {
        var paramString = serializeParams(this.params, ';');
        if (paramString.length > 0) {
            return ';' + paramString;
        }
        return '';
    };
    /** @internal */
    Url.prototype._childString = function () { return isPresent(this.child) ? ('/' + this.child.toString()) : ''; };
    return Url;
})();
exports.Url = Url;
var RootUrl = (function (_super) {
    __extends(RootUrl, _super);
    function RootUrl(path, child, auxiliary, params) {
        if (child === void 0) { child = null; }
        if (auxiliary === void 0) { auxiliary = CONST_EXPR([]); }
        if (params === void 0) { params = null; }
        _super.call(this, path, child, auxiliary, params);
    }
    RootUrl.prototype.toString = function () {
        return this.path + this._auxToString() + this._childString() + this._queryParamsToString();
    };
    RootUrl.prototype.segmentToString = function () { return this.path + this._queryParamsToString(); };
    RootUrl.prototype._queryParamsToString = function () {
        if (isBlank(this.params)) {
            return '';
        }
        return '?' + serializeParams(this.params);
    };
    return RootUrl;
})(Url);
exports.RootUrl = RootUrl;
function pathSegmentsToUrl(pathSegments) {
    var url = new Url(pathSegments[pathSegments.length - 1]);
    for (var i = pathSegments.length - 2; i >= 0; i -= 1) {
        url = new Url(pathSegments[i], url);
    }
    return url;
}
exports.pathSegmentsToUrl = pathSegmentsToUrl;
var SEGMENT_RE = RegExpWrapper.create('^[^\\/\\(\\)\\?;=&#]+');
function matchUrlSegment(str) {
    var match = RegExpWrapper.firstMatch(SEGMENT_RE, str);
    return isPresent(match) ? match[0] : '';
}
var UrlParser = (function () {
    function UrlParser() {
    }
    UrlParser.prototype.peekStartsWith = function (str) { return this._remaining.startsWith(str); };
    UrlParser.prototype.capture = function (str) {
        if (!this._remaining.startsWith(str)) {
            throw new BaseException("Expected \"" + str + "\".");
        }
        this._remaining = this._remaining.substring(str.length);
    };
    UrlParser.prototype.parse = function (url) {
        this._remaining = url;
        if (url == '' || url == '/') {
            return new Url('');
        }
        return this.parseRoot();
    };
    // segment + (aux segments) + (query params)
    UrlParser.prototype.parseRoot = function () {
        if (this.peekStartsWith('/')) {
            this.capture('/');
        }
        var path = matchUrlSegment(this._remaining);
        this.capture(path);
        var aux = [];
        if (this.peekStartsWith('(')) {
            aux = this.parseAuxiliaryRoutes();
        }
        if (this.peekStartsWith(';')) {
            // TODO: should these params just be dropped?
            this.parseMatrixParams();
        }
        var child = null;
        if (this.peekStartsWith('/') && !this.peekStartsWith('//')) {
            this.capture('/');
            child = this.parseSegment();
        }
        var queryParams = null;
        if (this.peekStartsWith('?')) {
            queryParams = this.parseQueryParams();
        }
        return new RootUrl(path, child, aux, queryParams);
    };
    // segment + (matrix params) + (aux segments)
    UrlParser.prototype.parseSegment = function () {
        if (this._remaining.length == 0) {
            return null;
        }
        if (this.peekStartsWith('/')) {
            this.capture('/');
        }
        var path = matchUrlSegment(this._remaining);
        this.capture(path);
        var matrixParams = null;
        if (this.peekStartsWith(';')) {
            matrixParams = this.parseMatrixParams();
        }
        var aux = [];
        if (this.peekStartsWith('(')) {
            aux = this.parseAuxiliaryRoutes();
        }
        var child = null;
        if (this.peekStartsWith('/') && !this.peekStartsWith('//')) {
            this.capture('/');
            child = this.parseSegment();
        }
        return new Url(path, child, aux, matrixParams);
    };
    UrlParser.prototype.parseQueryParams = function () {
        var params = {};
        this.capture('?');
        this.parseParam(params);
        while (this._remaining.length > 0 && this.peekStartsWith('&')) {
            this.capture('&');
            this.parseParam(params);
        }
        return params;
    };
    UrlParser.prototype.parseMatrixParams = function () {
        var params = {};
        while (this._remaining.length > 0 && this.peekStartsWith(';')) {
            this.capture(';');
            this.parseParam(params);
        }
        return params;
    };
    UrlParser.prototype.parseParam = function (params) {
        var key = matchUrlSegment(this._remaining);
        if (isBlank(key)) {
            return;
        }
        this.capture(key);
        var value = true;
        if (this.peekStartsWith('=')) {
            this.capture('=');
            var valueMatch = matchUrlSegment(this._remaining);
            if (isPresent(valueMatch)) {
                value = valueMatch;
                this.capture(value);
            }
        }
        params[key] = value;
    };
    UrlParser.prototype.parseAuxiliaryRoutes = function () {
        var routes = [];
        this.capture('(');
        while (!this.peekStartsWith(')') && this._remaining.length > 0) {
            routes.push(this.parseSegment());
            if (this.peekStartsWith('//')) {
                this.capture('//');
            }
        }
        this.capture(')');
        return routes;
    };
    return UrlParser;
})();
exports.UrlParser = UrlParser;
exports.parser = new UrlParser();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RouteLifecycleHook = (function () {
    function RouteLifecycleHook(name) {
        this.name = name;
    }
    RouteLifecycleHook = __decorate([
        CONST()
    ], RouteLifecycleHook);
    return RouteLifecycleHook;
})();
exports.RouteLifecycleHook = RouteLifecycleHook;
var CanActivate = (function () {
    function CanActivate(fn) {
        this.fn = fn;
    }
    CanActivate = __decorate([
        CONST()
    ], CanActivate);
    return CanActivate;
})();
exports.CanActivate = CanActivate;
exports.routerCanReuse = CONST_EXPR(new RouteLifecycleHook("routerCanReuse"));
exports.routerCanDeactivate = CONST_EXPR(new RouteLifecycleHook("routerCanDeactivate"));
exports.routerOnActivate = CONST_EXPR(new RouteLifecycleHook("routerOnActivate"));
exports.routerOnReuse = CONST_EXPR(new RouteLifecycleHook("routerOnReuse"));
exports.routerOnDeactivate = CONST_EXPR(new RouteLifecycleHook("routerOnDeactivate"));
var lifecycle_annotations_impl_1 = require('./lifecycle_annotations_impl');
function hasLifecycleHook(e, type) {
    if (!(type instanceof Type))
        return false;
    return e.name in type.prototype;
}
exports.hasLifecycleHook = hasLifecycleHook;
function getCanActivateHook(type) {
    var annotations = reflector.annotations(type);
    for (var i = 0; i < annotations.length; i += 1) {
        var annotation = annotations[i];
        if (annotation instanceof lifecycle_annotations_impl_1.CanActivate) {
            return annotation.fn;
        }
    }
    return null;
}
exports.getCanActivateHook = getCanActivateHook;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var route_definition_1 = require('../route_definition');
exports.RouteDefinition = route_definition_1.RouteDefinition;
/**
 * The `RouteConfig` decorator defines routes for a given component.
 *
 * It takes an array of {@link RouteDefinition}s.
 */
var RouteConfig = (function () {
    function RouteConfig(configs) {
        this.configs = configs;
    }
    RouteConfig = __decorate([
        CONST()
    ], RouteConfig);
    return RouteConfig;
})();
exports.RouteConfig = RouteConfig;
var AbstractRoute = (function () {
    function AbstractRoute(_a) {
        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data;
        this.name = name;
        this.useAsDefault = useAsDefault;
        this.path = path;
        this.regex = regex;
        this.serializer = serializer;
        this.data = data;
    }
    AbstractRoute = __decorate([
        CONST()
    ], AbstractRoute);
    return AbstractRoute;
})();
exports.AbstractRoute = AbstractRoute;
/**
 * `Route` is a type of {@link RouteDefinition} used to route a path to a component.
 *
 * It has the following properties:
 * - `path` is a string that uses the route matcher DSL.
 * - `component` a component type.
 * - `name` is an optional `CamelCase` string representing the name of the route.
 * - `data` is an optional property of any type representing arbitrary route metadata for the given
 * route. It is injectable via {@link RouteData}.
 * - `useAsDefault` is a boolean value. If `true`, the child route will be navigated to if no child
 * route is specified during the navigation.
 *
 * ### Example
 * ```
 * import {RouteConfig, Route} from 'angular2/router';
 *
 * @RouteConfig([
 *   new Route({path: '/home', component: HomeCmp, name: 'HomeCmp' })
 * ])
 * class MyApp {}
 * ```
 */
var Route = (function (_super) {
    __extends(Route, _super);
    function Route(_a) {
        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, component = _a.component;
        _super.call(this, {
            name: name,
            useAsDefault: useAsDefault,
            path: path,
            regex: regex,
            serializer: serializer,
            data: data
        });
        this.aux = null;
        this.component = component;
    }
    Route = __decorate([
        CONST()
    ], Route);
    return Route;
})(AbstractRoute);
exports.Route = Route;
/**
 * `AuxRoute` is a type of {@link RouteDefinition} used to define an auxiliary route.
 *
 * It takes an object with the following properties:
 * - `path` is a string that uses the route matcher DSL.
 * - `component` a component type.
 * - `name` is an optional `CamelCase` string representing the name of the route.
 * - `data` is an optional property of any type representing arbitrary route metadata for the given
 * route. It is injectable via {@link RouteData}.
 *
 * ### Example
 * ```
 * import {RouteConfig, AuxRoute} from 'angular2/router';
 *
 * @RouteConfig([
 *   new AuxRoute({path: '/home', component: HomeCmp})
 * ])
 * class MyApp {}
 * ```
 */
var AuxRoute = (function (_super) {
    __extends(AuxRoute, _super);
    function AuxRoute(_a) {
        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, component = _a.component;
        _super.call(this, {
            name: name,
            useAsDefault: useAsDefault,
            path: path,
            regex: regex,
            serializer: serializer,
            data: data
        });
        this.component = component;
    }
    AuxRoute = __decorate([
        CONST()
    ], AuxRoute);
    return AuxRoute;
})(AbstractRoute);
exports.AuxRoute = AuxRoute;
/**
 * `AsyncRoute` is a type of {@link RouteDefinition} used to route a path to an asynchronously
 * loaded component.
 *
 * It has the following properties:
 * - `path` is a string that uses the route matcher DSL.
 * - `loader` is a function that returns a promise that resolves to a component.
 * - `name` is an optional `CamelCase` string representing the name of the route.
 * - `data` is an optional property of any type representing arbitrary route metadata for the given
 * route. It is injectable via {@link RouteData}.
 * - `useAsDefault` is a boolean value. If `true`, the child route will be navigated to if no child
 * route is specified during the navigation.
 *
 * ### Example
 * ```
 * import {RouteConfig, AsyncRoute} from 'angular2/router';
 *
 * @RouteConfig([
 *   new AsyncRoute({path: '/home', loader: () => Promise.resolve(MyLoadedCmp), name:
 * 'MyLoadedCmp'})
 * ])
 * class MyApp {}
 * ```
 */
var AsyncRoute = (function (_super) {
    __extends(AsyncRoute, _super);
    function AsyncRoute(_a) {
        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, loader = _a.loader;
        _super.call(this, {
            name: name,
            useAsDefault: useAsDefault,
            path: path,
            regex: regex,
            serializer: serializer,
            data: data
        });
        this.aux = null;
        this.loader = loader;
    }
    AsyncRoute = __decorate([
        CONST()
    ], AsyncRoute);
    return AsyncRoute;
})(AbstractRoute);
exports.AsyncRoute = AsyncRoute;
/**
 * `Redirect` is a type of {@link RouteDefinition} used to route a path to a canonical route.
 *
 * It has the following properties:
 * - `path` is a string that uses the route matcher DSL.
 * - `redirectTo` is an array representing the link DSL.
 *
 * Note that redirects **do not** affect how links are generated. For that, see the `useAsDefault`
 * option.
 *
 * ### Example
 * ```
 * import {RouteConfig, Route, Redirect} from 'angular2/router';
 *
 * @RouteConfig([
 *   new Redirect({path: '/', redirectTo: ['/Home'] }),
 *   new Route({path: '/home', component: HomeCmp, name: 'Home'})
 * ])
 * class MyApp {}
 * ```
 */
var Redirect = (function (_super) {
    __extends(Redirect, _super);
    function Redirect(_a) {
        var name = _a.name, useAsDefault = _a.useAsDefault, path = _a.path, regex = _a.regex, serializer = _a.serializer, data = _a.data, redirectTo = _a.redirectTo;
        _super.call(this, {
            name: name,
            useAsDefault: useAsDefault,
            path: path,
            regex: regex,
            serializer: serializer,
            data: data
        });
        this.redirectTo = redirectTo;
    }
    Redirect = __decorate([
        CONST()
    ], Redirect);
    return Redirect;
})(AbstractRoute);
exports.Redirect = Redirect;
var route_config_decorator_1 = require('./route_config_decorator');
/**
 * Given a JS Object that represents a route config, returns a corresponding Route, AsyncRoute,
 * AuxRoute or Redirect object.
 *
 * Also wraps an AsyncRoute's loader function to add the loaded component's route config to the
 * `RouteRegistry`.
 */
function normalizeRouteConfig(config, registry) {
    if (config instanceof route_config_decorator_1.AsyncRoute) {
        var wrappedLoader = wrapLoaderToReconfigureRegistry(config.loader, registry);
        return new route_config_decorator_1.AsyncRoute({
            path: config.path,
            loader: wrappedLoader,
            name: config.name,
            data: config.data,
            useAsDefault: config.useAsDefault
        });
    }
    if (config instanceof route_config_decorator_1.Route || config instanceof route_config_decorator_1.Redirect || config instanceof route_config_decorator_1.AuxRoute) {
        return config;
    }
    if ((+!!config.component) + (+!!config.redirectTo) + (+!!config.loader) != 1) {
        throw new BaseException("Route config should contain exactly one \"component\", \"loader\", or \"redirectTo\" property.");
    }
    if (config.as && config.name) {
        throw new BaseException("Route config should contain exactly one \"as\" or \"name\" property.");
    }
    if (config.as) {
        config.name = config.as;
    }
    if (config.loader) {
        var wrappedLoader = wrapLoaderToReconfigureRegistry(config.loader, registry);
        return new route_config_decorator_1.AsyncRoute({
            path: config.path,
            loader: wrappedLoader,
            name: config.name,
            data: config.data,
            useAsDefault: config.useAsDefault
        });
    }
    if (config.aux) {
        return new route_config_decorator_1.AuxRoute({ path: config.aux, component: config.component, name: config.name });
    }
    if (config.component) {
        if (typeof config.component == 'object') {
            var componentDefinitionObject = config.component;
            if (componentDefinitionObject.type == 'constructor') {
                return new route_config_decorator_1.Route({
                    path: config.path,
                    component: componentDefinitionObject.constructor,
                    name: config.name,
                    data: config.data,
                    useAsDefault: config.useAsDefault
                });
            }
            else if (componentDefinitionObject.type == 'loader') {
                return new route_config_decorator_1.AsyncRoute({
                    path: config.path,
                    loader: componentDefinitionObject.loader,
                    name: config.name,
                    data: config.data,
                    useAsDefault: config.useAsDefault
                });
            }
            else {
                throw new BaseException("Invalid component type \"" + componentDefinitionObject.type + "\". Valid types are \"constructor\" and \"loader\".");
            }
        }
        return new route_config_decorator_1.Route(config);
    }
    if (config.redirectTo) {
        return new route_config_decorator_1.Redirect({ path: config.path, redirectTo: config.redirectTo });
    }
    return config;
}
exports.normalizeRouteConfig = normalizeRouteConfig;
function wrapLoaderToReconfigureRegistry(loader, registry) {
    return function () {
        return loader().then(function (componentType) {
            registry.configFromComponent(componentType);
            return componentType;
        });
    };
}
function assertComponentExists(component, path) {
    if (!isType(component)) {
        throw new BaseException("Component for route \"" + path + "\" is not defined, or is not a class.");
    }
}
exports.assertComponentExists = assertComponentExists;
var instruction_1 = require('../../instruction');
var AsyncRouteHandler = (function () {
    function AsyncRouteHandler(_loader, data) {
        if (data === void 0) { data = null; }
        this._loader = _loader;
        /** @internal */
        this._resolvedComponent = null;
        this.data = isPresent(data) ? new instruction_1.RouteData(data) : instruction_1.BLANK_ROUTE_DATA;
    }
    AsyncRouteHandler.prototype.resolveComponentType = function () {
        var _this = this;
        if (isPresent(this._resolvedComponent)) {
            return this._resolvedComponent;
        }
        return this._resolvedComponent = this._loader().then(function (componentType) {
            _this.componentType = componentType;
            return componentType;
        });
    };
    return AsyncRouteHandler;
})();
exports.AsyncRouteHandler = AsyncRouteHandler;
var instruction_1 = require('../../instruction');
var SyncRouteHandler = (function () {
    function SyncRouteHandler(componentType, data) {
        this.componentType = componentType;
        /** @internal */
        this._resolvedComponent = null;
        this._resolvedComponent = PromiseWrapper.resolve(componentType);
        this.data = isPresent(data) ? new instruction_1.RouteData(data) : instruction_1.BLANK_ROUTE_DATA;
    }
    SyncRouteHandler.prototype.resolveComponentType = function () { return this._resolvedComponent; };
    return SyncRouteHandler;
})();
exports.SyncRouteHandler = SyncRouteHandler;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var url_parser_1 = require('../url_parser');
var instruction_1 = require('../instruction');
// RouteMatch objects hold information about a match between a rule and a URL
var RouteMatch = (function () {
    function RouteMatch() {
    }
    return RouteMatch;
})();
exports.RouteMatch = RouteMatch;
var PathMatch = (function (_super) {
    __extends(PathMatch, _super);
    function PathMatch(instruction, remaining, remainingAux) {
        _super.call(this);
        this.instruction = instruction;
        this.remaining = remaining;
        this.remainingAux = remainingAux;
    }
    return PathMatch;
})(RouteMatch);
exports.PathMatch = PathMatch;
var RedirectMatch = (function (_super) {
    __extends(RedirectMatch, _super);
    function RedirectMatch(redirectTo, specificity) {
        _super.call(this);
        this.redirectTo = redirectTo;
        this.specificity = specificity;
    }
    return RedirectMatch;
})(RouteMatch);
exports.RedirectMatch = RedirectMatch;
var RedirectRule = (function () {
    function RedirectRule(_pathRecognizer, redirectTo) {
        this._pathRecognizer = _pathRecognizer;
        this.redirectTo = redirectTo;
        this.hash = this._pathRecognizer.hash;
    }
    Object.defineProperty(RedirectRule.prototype, "path", {
        get: function () { return this._pathRecognizer.toString(); },
        set: function (val) { throw new BaseException('you cannot set the path of a RedirectRule directly'); },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns `null` or a `ParsedUrl` representing the new path to match
     */
    RedirectRule.prototype.recognize = function (beginningSegment) {
        var match = null;
        if (isPresent(this._pathRecognizer.matchUrl(beginningSegment))) {
            match = new RedirectMatch(this.redirectTo, this._pathRecognizer.specificity);
        }
        return PromiseWrapper.resolve(match);
    };
    RedirectRule.prototype.generate = function (params) {
        throw new BaseException("Tried to generate a redirect.");
    };
    return RedirectRule;
})();
exports.RedirectRule = RedirectRule;
// represents something like '/foo/:bar'
var RouteRule = (function () {
    // TODO: cache component instruction instances by params and by ParsedUrl instance
    function RouteRule(_routePath, handler) {
        this._routePath = _routePath;
        this.handler = handler;
        this._cache = new Map();
        this.specificity = this._routePath.specificity;
        this.hash = this._routePath.hash;
        this.terminal = this._routePath.terminal;
    }
    Object.defineProperty(RouteRule.prototype, "path", {
        get: function () { return this._routePath.toString(); },
        set: function (val) { throw new BaseException('you cannot set the path of a RouteRule directly'); },
        enumerable: true,
        configurable: true
    });
    RouteRule.prototype.recognize = function (beginningSegment) {
        var _this = this;
        var res = this._routePath.matchUrl(beginningSegment);
        if (isBlank(res)) {
            return null;
        }
        return this.handler.resolveComponentType().then(function (_) {
            var componentInstruction = _this._getInstruction(res.urlPath, res.urlParams, res.allParams);
            return new PathMatch(componentInstruction, res.rest, res.auxiliary);
        });
    };
    RouteRule.prototype.generate = function (params) {
        var generated = this._routePath.generateUrl(params);
        var urlPath = generated.urlPath;
        var urlParams = generated.urlParams;
        return this._getInstruction(urlPath, url_parser_1.convertUrlParamsToArray(urlParams), params);
    };
    RouteRule.prototype.generateComponentPathValues = function (params) {
        return this._routePath.generateUrl(params);
    };
    RouteRule.prototype._getInstruction = function (urlPath, urlParams, params) {
        if (isBlank(this.handler.componentType)) {
            throw new BaseException("Tried to get instruction before the type was loaded.");
        }
        var hashKey = urlPath + '?' + urlParams.join('&');
        if (this._cache.has(hashKey)) {
            return this._cache.get(hashKey);
        }
        var instruction = new instruction_1.ComponentInstruction(urlPath, urlParams, this.handler.data, this.handler.componentType, this.terminal, this.specificity, params);
        this._cache.set(hashKey, instruction);
        return instruction;
    };
    return RouteRule;
})();
exports.RouteRule = RouteRule;
var rules_1 = require('./rules');
var route_config_impl_1 = require('../route_config/route_config_impl');
var async_route_handler_1 = require('./route_handlers/async_route_handler');
var sync_route_handler_1 = require('./route_handlers/sync_route_handler');
var param_route_path_1 = require('./route_paths/param_route_path');
var regex_route_path_1 = require('./route_paths/regex_route_path');
/**
 * A `RuleSet` is responsible for recognizing routes for a particular component.
 * It is consumed by `RouteRegistry`, which knows how to recognize an entire hierarchy of
 * components.
 */
var RuleSet = (function () {
    function RuleSet() {
        this.rulesByName = new Map();
        // map from name to rule
        this.auxRulesByName = new Map();
        // map from starting path to rule
        this.auxRulesByPath = new Map();
        // TODO: optimize this into a trie
        this.rules = [];
        // the rule to use automatically when recognizing or generating from this rule set
        this.defaultRule = null;
    }
    /**
     * Configure additional rules in this rule set from a route definition
     * @returns {boolean} true if the config is terminal
     */
    RuleSet.prototype.config = function (config) {
        var handler;
        if (isPresent(config.name) && config.name[0].toUpperCase() != config.name[0]) {
            var suggestedName = config.name[0].toUpperCase() + config.name.substring(1);
            throw new BaseException("Route \"" + config.path + "\" with name \"" + config.name + "\" does not begin with an uppercase letter. Route names should be CamelCase like \"" + suggestedName + "\".");
        }
        if (config instanceof route_config_impl_1.AuxRoute) {
            handler = new sync_route_handler_1.SyncRouteHandler(config.component, config.data);
            var routePath_1 = this._getRoutePath(config);
            var auxRule = new rules_1.RouteRule(routePath_1, handler);
            this.auxRulesByPath.set(routePath_1.toString(), auxRule);
            if (isPresent(config.name)) {
                this.auxRulesByName.set(config.name, auxRule);
            }
            return auxRule.terminal;
        }
        var useAsDefault = false;
        if (config instanceof route_config_impl_1.Redirect) {
            var routePath_2 = this._getRoutePath(config);
            var redirector = new rules_1.RedirectRule(routePath_2, config.redirectTo);
            this._assertNoHashCollision(redirector.hash, config.path);
            this.rules.push(redirector);
            return true;
        }
        if (config instanceof route_config_impl_1.Route) {
            handler = new sync_route_handler_1.SyncRouteHandler(config.component, config.data);
            useAsDefault = isPresent(config.useAsDefault) && config.useAsDefault;
        }
        else if (config instanceof route_config_impl_1.AsyncRoute) {
            handler = new async_route_handler_1.AsyncRouteHandler(config.loader, config.data);
            useAsDefault = isPresent(config.useAsDefault) && config.useAsDefault;
        }
        var routePath = this._getRoutePath(config);
        var newRule = new rules_1.RouteRule(routePath, handler);
        this._assertNoHashCollision(newRule.hash, config.path);
        if (useAsDefault) {
            if (isPresent(this.defaultRule)) {
                throw new BaseException("Only one route can be default");
            }
            this.defaultRule = newRule;
        }
        this.rules.push(newRule);
        if (isPresent(config.name)) {
            this.rulesByName.set(config.name, newRule);
        }
        return newRule.terminal;
    };
    /**
     * Given a URL, returns a list of `RouteMatch`es, which are partial recognitions for some route.
     */
    RuleSet.prototype.recognize = function (urlParse) {
        var solutions = [];
        this.rules.forEach(function (routeRecognizer) {
            var pathMatch = routeRecognizer.recognize(urlParse);
            if (isPresent(pathMatch)) {
                solutions.push(pathMatch);
            }
        });
        // handle cases where we are routing just to an aux route
        if (solutions.length == 0 && isPresent(urlParse) && urlParse.auxiliary.length > 0) {
            return [PromiseWrapper.resolve(new rules_1.PathMatch(null, null, urlParse.auxiliary))];
        }
        return solutions;
    };
    RuleSet.prototype.recognizeAuxiliary = function (urlParse) {
        var routeRecognizer = this.auxRulesByPath.get(urlParse.path);
        if (isPresent(routeRecognizer)) {
            return [routeRecognizer.recognize(urlParse)];
        }
        return [PromiseWrapper.resolve(null)];
    };
    RuleSet.prototype.hasRoute = function (name) { return this.rulesByName.has(name); };
    RuleSet.prototype.componentLoaded = function (name) {
        return this.hasRoute(name) && isPresent(this.rulesByName.get(name).handler.componentType);
    };
    RuleSet.prototype.loadComponent = function (name) {
        return this.rulesByName.get(name).handler.resolveComponentType();
    };
    RuleSet.prototype.generate = function (name, params) {
        var rule = this.rulesByName.get(name);
        if (isBlank(rule)) {
            return null;
        }
        return rule.generate(params);
    };
    RuleSet.prototype.generateAuxiliary = function (name, params) {
        var rule = this.auxRulesByName.get(name);
        if (isBlank(rule)) {
            return null;
        }
        return rule.generate(params);
    };
    RuleSet.prototype._assertNoHashCollision = function (hash, path) {
        this.rules.forEach(function (rule) {
            if (hash == rule.hash) {
                throw new BaseException("Configuration '" + path + "' conflicts with existing route '" + rule.path + "'");
            }
        });
    };
    RuleSet.prototype._getRoutePath = function (config) {
        if (isPresent(config.regex)) {
            if (isFunction(config.serializer)) {
                return new regex_route_path_1.RegexRoutePath(config.regex, config.serializer);
            }
            else {
                throw new BaseException("Route provides a regex property, '" + config.regex + "', but no serializer property");
            }
        }
        if (isPresent(config.path)) {
            // Auxiliary routes do not have a slash at the start
            var path = (config instanceof route_config_impl_1.AuxRoute && config.path.startsWith('/')) ?
                config.path.substring(1) :
                config.path;
            return new param_route_path_1.ParamRoutePath(path);
        }
        throw new BaseException('Route must provide either a path or regex property');
    };
    return RuleSet;
})();
exports.RuleSet = RuleSet;
var MatchedUrl = (function () {
    function MatchedUrl(urlPath, urlParams, allParams, auxiliary, rest) {
        this.urlPath = urlPath;
        this.urlParams = urlParams;
        this.allParams = allParams;
        this.auxiliary = auxiliary;
        this.rest = rest;
    }
    return MatchedUrl;
})();
exports.MatchedUrl = MatchedUrl;
var GeneratedUrl = (function () {
    function GeneratedUrl(urlPath, urlParams) {
        this.urlPath = urlPath;
        this.urlParams = urlParams;
    }
    return GeneratedUrl;
})();
exports.GeneratedUrl = GeneratedUrl;
var utils_1 = require('../../utils');
var url_parser_1 = require('../../url_parser');
var route_path_1 = require('./route_path');
/**
 * Identified by a `...` URL segment. This indicates that the
 * Route will continue to be matched by child `Router`s.
 */
var ContinuationPathSegment = (function () {
    function ContinuationPathSegment() {
        this.name = '';
        this.specificity = '';
        this.hash = '...';
    }
    ContinuationPathSegment.prototype.generate = function (params) { return ''; };
    ContinuationPathSegment.prototype.match = function (path) { return true; };
    return ContinuationPathSegment;
})();
/**
 * Identified by a string not starting with a `:` or `*`.
 * Only matches the URL segments that equal the segment path
 */
var StaticPathSegment = (function () {
    function StaticPathSegment(path) {
        this.path = path;
        this.name = '';
        this.specificity = '2';
        this.hash = path;
    }
    StaticPathSegment.prototype.match = function (path) { return path == this.path; };
    StaticPathSegment.prototype.generate = function (params) { return this.path; };
    return StaticPathSegment;
})();
/**
 * Identified by a string starting with `:`. Indicates a segment
 * that can contain a value that will be extracted and provided to
 * a matching `Instruction`.
 */
var DynamicPathSegment = (function () {
    function DynamicPathSegment(name) {
        this.name = name;
        this.specificity = '1';
        this.hash = ':';
    }
    DynamicPathSegment.prototype.match = function (path) { return path.length > 0; };
    DynamicPathSegment.prototype.generate = function (params) {
        if (!StringMapWrapper.contains(params.map, this.name)) {
            throw new BaseException("Route generator for '" + this.name + "' was not included in parameters passed.");
        }
        return utils_1.normalizeString(params.get(this.name));
    };
    DynamicPathSegment.paramMatcher = /^:([^\/]+)$/g;
    return DynamicPathSegment;
})();
/**
 * Identified by a string starting with `*` Indicates that all the following
 * segments match this route and that the value of these segments should
 * be provided to a matching `Instruction`.
 */
var StarPathSegment = (function () {
    function StarPathSegment(name) {
        this.name = name;
        this.specificity = '0';
        this.hash = '*';
    }
    StarPathSegment.prototype.match = function (path) { return true; };
    StarPathSegment.prototype.generate = function (params) { return utils_1.normalizeString(params.get(this.name)); };
    StarPathSegment.wildcardMatcher = /^\*([^\/]+)$/g;
    return StarPathSegment;
})();
/**
 * Parses a URL string using a given matcher DSL, and generates URLs from param maps
 */
var ParamRoutePath = (function () {
    /**
     * Takes a string representing the matcher DSL
     */
    function ParamRoutePath(routePath) {
        this.routePath = routePath;
        this.terminal = true;
        this._assertValidPath(routePath);
        this._parsePathString(routePath);
        this.specificity = this._calculateSpecificity();
        this.hash = this._calculateHash();
        var lastSegment = this._segments[this._segments.length - 1];
        this.terminal = !(lastSegment instanceof ContinuationPathSegment);
    }
    ParamRoutePath.prototype.matchUrl = function (url) {
        var nextUrlSegment = url;
        var currentUrlSegment;
        var positionalParams = {};
        var captured = [];
        for (var i = 0; i < this._segments.length; i += 1) {
            var pathSegment = this._segments[i];
            currentUrlSegment = nextUrlSegment;
            if (pathSegment instanceof ContinuationPathSegment) {
                break;
            }
            if (isPresent(currentUrlSegment)) {
                // the star segment consumes all of the remaining URL, including matrix params
                if (pathSegment instanceof StarPathSegment) {
                    positionalParams[pathSegment.name] = currentUrlSegment.toString();
                    captured.push(currentUrlSegment.toString());
                    nextUrlSegment = null;
                    break;
                }
                captured.push(currentUrlSegment.path);
                if (pathSegment instanceof DynamicPathSegment) {
                    positionalParams[pathSegment.name] = currentUrlSegment.path;
                }
                else if (!pathSegment.match(currentUrlSegment.path)) {
                    return null;
                }
                nextUrlSegment = currentUrlSegment.child;
            }
            else if (!pathSegment.match('')) {
                return null;
            }
        }
        if (this.terminal && isPresent(nextUrlSegment)) {
            return null;
        }
        var urlPath = captured.join('/');
        var auxiliary = [];
        var urlParams = [];
        var allParams = positionalParams;
        if (isPresent(currentUrlSegment)) {
            // If this is the root component, read query params. Otherwise, read matrix params.
            var paramsSegment = url instanceof url_parser_1.RootUrl ? url : currentUrlSegment;
            if (isPresent(paramsSegment.params)) {
                allParams = StringMapWrapper.merge(paramsSegment.params, positionalParams);
                urlParams = url_parser_1.convertUrlParamsToArray(paramsSegment.params);
            }
            else {
                allParams = positionalParams;
            }
            auxiliary = currentUrlSegment.auxiliary;
        }
        return new route_path_1.MatchedUrl(urlPath, urlParams, allParams, auxiliary, nextUrlSegment);
    };
    ParamRoutePath.prototype.generateUrl = function (params) {
        var paramTokens = new utils_1.TouchMap(params);
        var path = [];
        for (var i = 0; i < this._segments.length; i++) {
            var segment = this._segments[i];
            if (!(segment instanceof ContinuationPathSegment)) {
                path.push(segment.generate(paramTokens));
            }
        }
        var urlPath = path.join('/');
        var nonPositionalParams = paramTokens.getUnused();
        var urlParams = nonPositionalParams;
        return new route_path_1.GeneratedUrl(urlPath, urlParams);
    };
    ParamRoutePath.prototype.toString = function () { return this.routePath; };
    ParamRoutePath.prototype._parsePathString = function (routePath) {
        // normalize route as not starting with a "/". Recognition will
        // also normalize.
        if (routePath.startsWith("/")) {
            routePath = routePath.substring(1);
        }
        var segmentStrings = routePath.split('/');
        this._segments = [];
        var limit = segmentStrings.length - 1;
        for (var i = 0; i <= limit; i++) {
            var segment = segmentStrings[i], match;
            if (isPresent(match = RegExpWrapper.firstMatch(DynamicPathSegment.paramMatcher, segment))) {
                this._segments.push(new DynamicPathSegment(match[1]));
            }
            else if (isPresent(match = RegExpWrapper.firstMatch(StarPathSegment.wildcardMatcher, segment))) {
                this._segments.push(new StarPathSegment(match[1]));
            }
            else if (segment == '...') {
                if (i < limit) {
                    throw new BaseException("Unexpected \"...\" before the end of the path for \"" + routePath + "\".");
                }
                this._segments.push(new ContinuationPathSegment());
            }
            else {
                this._segments.push(new StaticPathSegment(segment));
            }
        }
    };
    ParamRoutePath.prototype._calculateSpecificity = function () {
        // The "specificity" of a path is used to determine which route is used when multiple routes
        // match
        // a URL. Static segments (like "/foo") are the most specific, followed by dynamic segments
        // (like
        // "/:id"). Star segments add no specificity. Segments at the start of the path are more
        // specific
        // than proceeding ones.
        //
        // The code below uses place values to combine the different types of segments into a single
        // string that we can sort later. Each static segment is marked as a specificity of "2," each
        // dynamic segment is worth "1" specificity, and stars are worth "0" specificity.
        var i, length = this._segments.length, specificity;
        if (length == 0) {
            // a single slash (or "empty segment" is as specific as a static segment
            specificity += '2';
        }
        else {
            specificity = '';
            for (i = 0; i < length; i++) {
                specificity += this._segments[i].specificity;
            }
        }
        return specificity;
    };
    ParamRoutePath.prototype._calculateHash = function () {
        // this function is used to determine whether a route config path like `/foo/:id` collides with
        // `/foo/:name`
        var i, length = this._segments.length;
        var hashParts = [];
        for (i = 0; i < length; i++) {
            hashParts.push(this._segments[i].hash);
        }
        return hashParts.join('/');
    };
    ParamRoutePath.prototype._assertValidPath = function (path) {
        if (StringWrapper.contains(path, '#')) {
            throw new BaseException("Path \"" + path + "\" should not include \"#\". Use \"HashLocationStrategy\" instead.");
        }
        var illegalCharacter = RegExpWrapper.firstMatch(ParamRoutePath.RESERVED_CHARS, path);
        if (isPresent(illegalCharacter)) {
            throw new BaseException("Path \"" + path + "\" contains \"" + illegalCharacter[0] + "\" which is not allowed in a route config.");
        }
    };
    ParamRoutePath.RESERVED_CHARS = RegExpWrapper.create('//|\\(|\\)|;|\\?|=');
    return ParamRoutePath;
})();
exports.ParamRoutePath = ParamRoutePath;
var route_path_1 = require('./route_path');
var RegexRoutePath = (function () {
    function RegexRoutePath(_reString, _serializer) {
        this._reString = _reString;
        this._serializer = _serializer;
        this.terminal = true;
        this.specificity = '2';
        this.hash = this._reString;
        this._regex = RegExpWrapper.create(this._reString);
    }
    RegexRoutePath.prototype.matchUrl = function (url) {
        var urlPath = url.toString();
        var params = {};
        var matcher = RegExpWrapper.matcher(this._regex, urlPath);
        var match = RegExpMatcherWrapper.next(matcher);
        if (isBlank(match)) {
            return null;
        }
        for (var i = 0; i < match.length; i += 1) {
            params[i.toString()] = match[i];
        }
        return new route_path_1.MatchedUrl(urlPath, [], params, [], null);
    };
    RegexRoutePath.prototype.generateUrl = function (params) { return this._serializer(params); };
    RegexRoutePath.prototype.toString = function () { return this._reString; };
    return RegexRoutePath;
})();
exports.RegexRoutePath = RegexRoutePath;
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * `RouteParams` is an immutable map of parameters for the given route
 * based on the url matcher and optional parameters for that route.
 *
 * You can inject `RouteParams` into the constructor of a component to use it.
 *
 * ### Example
 *
 * ```
 * import {Component} from 'angular2/core';
 * import {bootstrap} from 'angular2/platform/browser';
 * import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteParams} from
 * 'angular2/router';
 *
 * @Component({directives: [ROUTER_DIRECTIVES]})
 * @RouteConfig([
 *  {path: '/user/:id', component: UserCmp, name: 'UserCmp'},
 * ])
 * class AppCmp {}
 *
 * @Component({ template: 'user: {{id}}' })
 * class UserCmp {
 *   id: string;
 *   constructor(params: RouteParams) {
 *     this.id = params.get('id');
 *   }
 * }
 *
 * bootstrap(AppCmp, ROUTER_PROVIDERS);
 * ```
 */
var RouteParams = (function () {
    function RouteParams(params) {
        this.params = params;
    }
    RouteParams.prototype.get = function (param) { return normalizeBlank(StringMapWrapper.get(this.params, param)); };
    return RouteParams;
})();
exports.RouteParams = RouteParams;
/**
 * `RouteData` is an immutable map of additional data you can configure in your {@link Route}.
 *
 * You can inject `RouteData` into the constructor of a component to use it.
 *
 * ### Example
 *
 * ```
 * import {Component} from 'angular2/core';
 * import {bootstrap} from 'angular2/platform/browser';
 * import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, RouteData} from
 * 'angular2/router';
 *
 * @Component({directives: [ROUTER_DIRECTIVES]})
 * @RouteConfig([
 *  {path: '/user/:id', component: UserCmp, name: 'UserCmp', data: {isAdmin: true}},
 * ])
 * class AppCmp {}
 *
 * @Component({...})
 * @View({ template: 'user: {{isAdmin}}' })
 * class UserCmp {
 *   string: isAdmin;
 *   constructor(data: RouteData) {
 *     this.isAdmin = data.get('isAdmin');
 *   }
 * }
 *
 * bootstrap(AppCmp, ROUTER_PROVIDERS);
 * ```
 */
var RouteData = (function () {
    function RouteData(data) {
        if (data === void 0) { data = CONST_EXPR({}); }
        this.data = data;
    }
    RouteData.prototype.get = function (key) { return normalizeBlank(StringMapWrapper.get(this.data, key)); };
    return RouteData;
})();
exports.RouteData = RouteData;
exports.BLANK_ROUTE_DATA = new RouteData();
/**
 * `Instruction` is a tree of {@link ComponentInstruction}s with all the information needed
 * to transition each component in the app to a given route, including all auxiliary routes.
 *
 * `Instruction`s can be created using {@link Router#generate}, and can be used to
 * perform route changes with {@link Router#navigateByInstruction}.
 *
 * ### Example
 *
 * ```
 * import {Component} from 'angular2/core';
 * import {bootstrap} from 'angular2/platform/browser';
 * import {Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
 *
 * @Component({directives: [ROUTER_DIRECTIVES]})
 * @RouteConfig([
 *  {...},
 * ])
 * class AppCmp {
 *   constructor(router: Router) {
 *     var instruction = router.generate(['/MyRoute']);
 *     router.navigateByInstruction(instruction);
 *   }
 * }
 *
 * bootstrap(AppCmp, ROUTER_PROVIDERS);
 * ```
 */
var Instruction = (function () {
    function Instruction(component, child, auxInstruction) {
        this.component = component;
        this.child = child;
        this.auxInstruction = auxInstruction;
    }
    Object.defineProperty(Instruction.prototype, "urlPath", {
        get: function () { return isPresent(this.component) ? this.component.urlPath : ''; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instruction.prototype, "urlParams", {
        get: function () { return isPresent(this.component) ? this.component.urlParams : []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instruction.prototype, "specificity", {
        get: function () {
            var total = '';
            if (isPresent(this.component)) {
                total += this.component.specificity;
            }
            if (isPresent(this.child)) {
                total += this.child.specificity;
            }
            return total;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * converts the instruction into a URL string
     */
    Instruction.prototype.toRootUrl = function () { return this.toUrlPath() + this.toUrlQuery(); };
    /** @internal */
    Instruction.prototype._toNonRootUrl = function () {
        return this._stringifyPathMatrixAuxPrefixed() +
            (isPresent(this.child) ? this.child._toNonRootUrl() : '');
    };
    Instruction.prototype.toUrlQuery = function () { return this.urlParams.length > 0 ? ('?' + this.urlParams.join('&')) : ''; };
    /**
     * Returns a new instruction that shares the state of the existing instruction, but with
     * the given child {@link Instruction} replacing the existing child.
     */
    Instruction.prototype.replaceChild = function (child) {
        return new ResolvedInstruction(this.component, child, this.auxInstruction);
    };
    /**
     * If the final URL for the instruction is ``
     */
    Instruction.prototype.toUrlPath = function () {
        return this.urlPath + this._stringifyAux() +
            (isPresent(this.child) ? this.child._toNonRootUrl() : '');
    };
    // default instructions override these
    Instruction.prototype.toLinkUrl = function () {
        return this.urlPath + this._stringifyAux() +
            (isPresent(this.child) ? this.child._toLinkUrl() : '');
    };
    // this is the non-root version (called recursively)
    /** @internal */
    Instruction.prototype._toLinkUrl = function () {
        return this._stringifyPathMatrixAuxPrefixed() +
            (isPresent(this.child) ? this.child._toLinkUrl() : '');
    };
    /** @internal */
    Instruction.prototype._stringifyPathMatrixAuxPrefixed = function () {
        var primary = this._stringifyPathMatrixAux();
        if (primary.length > 0) {
            primary = '/' + primary;
        }
        return primary;
    };
    /** @internal */
    Instruction.prototype._stringifyMatrixParams = function () {
        return this.urlParams.length > 0 ? (';' + this.urlParams.join(';')) : '';
    };
    /** @internal */
    Instruction.prototype._stringifyPathMatrixAux = function () {
        if (isBlank(this.component)) {
            return '';
        }
        return this.urlPath + this._stringifyMatrixParams() + this._stringifyAux();
    };
    /** @internal */
    Instruction.prototype._stringifyAux = function () {
        var routes = [];
        StringMapWrapper.forEach(this.auxInstruction, function (auxInstruction, _) {
            routes.push(auxInstruction._stringifyPathMatrixAux());
        });
        if (routes.length > 0) {
            return '(' + routes.join('//') + ')';
        }
        return '';
    };
    return Instruction;
})();
exports.Instruction = Instruction;
/**
 * a resolved instruction has an outlet instruction for itself, but maybe not for...
 */
var ResolvedInstruction = (function (_super) {
    __extends(ResolvedInstruction, _super);
    function ResolvedInstruction(component, child, auxInstruction) {
        _super.call(this, component, child, auxInstruction);
    }
    ResolvedInstruction.prototype.resolveComponent = function () {
        return PromiseWrapper.resolve(this.component);
    };
    return ResolvedInstruction;
})(Instruction);
exports.ResolvedInstruction = ResolvedInstruction;
/**
 * Represents a resolved default route
 */
var DefaultInstruction = (function (_super) {
    __extends(DefaultInstruction, _super);
    function DefaultInstruction(component, child) {
        _super.call(this, component, child, {});
    }
    DefaultInstruction.prototype.toLinkUrl = function () { return ''; };
    /** @internal */
    DefaultInstruction.prototype._toLinkUrl = function () { return ''; };
    return DefaultInstruction;
})(ResolvedInstruction);
exports.DefaultInstruction = DefaultInstruction;
/**
 * Represents a component that may need to do some redirection or lazy loading at a later time.
 */
var UnresolvedInstruction = (function (_super) {
    __extends(UnresolvedInstruction, _super);
    function UnresolvedInstruction(_resolver, _urlPath, _urlParams) {
        if (_urlPath === void 0) { _urlPath = ''; }
        if (_urlParams === void 0) { _urlParams = CONST_EXPR([]); }
        _super.call(this, null, null, {});
        this._resolver = _resolver;
        this._urlPath = _urlPath;
        this._urlParams = _urlParams;
    }
    Object.defineProperty(UnresolvedInstruction.prototype, "urlPath", {
        get: function () {
            if (isPresent(this.component)) {
                return this.component.urlPath;
            }
            if (isPresent(this._urlPath)) {
                return this._urlPath;
            }
            return '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UnresolvedInstruction.prototype, "urlParams", {
        get: function () {
            if (isPresent(this.component)) {
                return this.component.urlParams;
            }
            if (isPresent(this._urlParams)) {
                return this._urlParams;
            }
            return [];
        },
        enumerable: true,
        configurable: true
    });
    UnresolvedInstruction.prototype.resolveComponent = function () {
        var _this = this;
        if (isPresent(this.component)) {
            return PromiseWrapper.resolve(this.component);
        }
        return this._resolver().then(function (resolution) {
            _this.child = resolution.child;
            return _this.component = resolution.component;
        });
    };
    return UnresolvedInstruction;
})(Instruction);
exports.UnresolvedInstruction = UnresolvedInstruction;
var RedirectInstruction = (function (_super) {
    __extends(RedirectInstruction, _super);
    function RedirectInstruction(component, child, auxInstruction, _specificity) {
        _super.call(this, component, child, auxInstruction);
        this._specificity = _specificity;
    }
    Object.defineProperty(RedirectInstruction.prototype, "specificity", {
        get: function () { return this._specificity; },
        enumerable: true,
        configurable: true
    });
    return RedirectInstruction;
})(ResolvedInstruction);
exports.RedirectInstruction = RedirectInstruction;
/**
 * A `ComponentInstruction` represents the route state for a single component.
 *
 * `ComponentInstructions` is a public API. Instances of `ComponentInstruction` are passed
 * to route lifecycle hooks, like {@link CanActivate}.
 *
 * `ComponentInstruction`s are [hash consed](https://en.wikipedia.org/wiki/Hash_consing). You should
 * never construct one yourself with "new." Instead, rely on {@link Router/RouteRecognizer} to
 * construct `ComponentInstruction`s.
 *
 * You should not modify this object. It should be treated as immutable.
 */
var ComponentInstruction = (function () {
    /**
     * @internal
     */
    function ComponentInstruction(urlPath, urlParams, data, componentType, terminal, specificity, params) {
        if (params === void 0) { params = null; }
        this.urlPath = urlPath;
        this.urlParams = urlParams;
        this.componentType = componentType;
        this.terminal = terminal;
        this.specificity = specificity;
        this.params = params;
        this.reuse = false;
        this.routeData = isPresent(data) ? data : exports.BLANK_ROUTE_DATA;
    }
    return ComponentInstruction;
})();
exports.ComponentInstruction = ComponentInstruction;
var core_1 = require('angular2/core');
var route_config_impl_1 = require('./route_config/route_config_impl');
var rules_1 = require('./rules/rules');
var rule_set_1 = require('./rules/rule_set');
var instruction_1 = require('./instruction');
var route_config_normalizer_1 = require('./route_config/route_config_normalizer');
var url_parser_1 = require('./url_parser');
var _resolveToNull = PromiseWrapper.resolve(null);
// A LinkItemArray is an array, which describes a set of routes
// The items in the array are found in groups:
// - the first item is the name of the route
// - the next items are:
//   - an object containing parameters
//   - or an array describing an aux route
// export type LinkRouteItem = string | Object;
// export type LinkItem = LinkRouteItem | Array<LinkRouteItem>;
// export type LinkItemArray = Array<LinkItem>;
/**
 * Token used to bind the component with the top-level {@link RouteConfig}s for the
 * application.
 *
 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
 *
 * ```
 * import {Component} from 'angular2/core';
 * import {
 *   ROUTER_DIRECTIVES,
 *   ROUTER_PROVIDERS,
 *   RouteConfig
 * } from 'angular2/router';
 *
 * @Component({directives: [ROUTER_DIRECTIVES]})
 * @RouteConfig([
 *  {...},
 * ])
 * class AppCmp {
 *   // ...
 * }
 *
 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
 * ```
 */
exports.ROUTER_PRIMARY_COMPONENT = CONST_EXPR(new core_1.OpaqueToken('RouterPrimaryComponent'));
/**
 * The RouteRegistry holds route configurations for each component in an Angular app.
 * It is responsible for creating Instructions from URLs, and generating URLs based on route and
 * parameters.
 */
var RouteRegistry = (function () {
    function RouteRegistry(_rootComponent) {
        this._rootComponent = _rootComponent;
        this._rules = new Map();
    }
    /**
     * Given a component and a configuration object, add the route to this registry
     */
    RouteRegistry.prototype.config = function (parentComponent, config) {
        config = route_config_normalizer_1.normalizeRouteConfig(config, this);
        // this is here because Dart type guard reasons
        if (config instanceof route_config_impl_1.Route) {
            route_config_normalizer_1.assertComponentExists(config.component, config.path);
        }
        else if (config instanceof route_config_impl_1.AuxRoute) {
            route_config_normalizer_1.assertComponentExists(config.component, config.path);
        }
        var rules = this._rules.get(parentComponent);
        if (isBlank(rules)) {
            rules = new rule_set_1.RuleSet();
            this._rules.set(parentComponent, rules);
        }
        var terminal = rules.config(config);
        if (config instanceof route_config_impl_1.Route) {
            if (terminal) {
                assertTerminalComponent(config.component, config.path);
            }
            else {
                this.configFromComponent(config.component);
            }
        }
    };
    /**
     * Reads the annotations of a component and configures the registry based on them
     */
    RouteRegistry.prototype.configFromComponent = function (component) {
        var _this = this;
        if (!isType(component)) {
            return;
        }
        // Don't read the annotations from a type more than once –
        // this prevents an infinite loop if a component routes recursively.
        if (this._rules.has(component)) {
            return;
        }
        var annotations = reflector.annotations(component);
        if (isPresent(annotations)) {
            for (var i = 0; i < annotations.length; i++) {
                var annotation = annotations[i];
                if (annotation instanceof route_config_impl_1.RouteConfig) {
                    var routeCfgs = annotation.configs;
                    routeCfgs.forEach(function (config) { return _this.config(component, config); });
                }
            }
        }
    };
    /**
     * Given a URL and a parent component, return the most specific instruction for navigating
     * the application into the state specified by the url
     */
    RouteRegistry.prototype.recognize = function (url, ancestorInstructions) {
        var parsedUrl = url_parser_1.parser.parse(url);
        return this._recognize(parsedUrl, []);
    };
    /**
     * Recognizes all parent-child routes, but creates unresolved auxiliary routes
     */
    RouteRegistry.prototype._recognize = function (parsedUrl, ancestorInstructions, _aux) {
        var _this = this;
        if (_aux === void 0) { _aux = false; }
        var parentInstruction = ListWrapper.last(ancestorInstructions);
        var parentComponent = isPresent(parentInstruction) ? parentInstruction.component.componentType :
            this._rootComponent;
        var rules = this._rules.get(parentComponent);
        if (isBlank(rules)) {
            return _resolveToNull;
        }
        // Matches some beginning part of the given URL
        var possibleMatches = _aux ? rules.recognizeAuxiliary(parsedUrl) : rules.recognize(parsedUrl);
        var matchPromises = possibleMatches.map(function (candidate) { return candidate.then(function (candidate) {
            if (candidate instanceof rules_1.PathMatch) {
                var auxParentInstructions = ancestorInstructions.length > 0 ? [ListWrapper.last(ancestorInstructions)] : [];
                var auxInstructions = _this._auxRoutesToUnresolved(candidate.remainingAux, auxParentInstructions);
                var instruction = new instruction_1.ResolvedInstruction(candidate.instruction, null, auxInstructions);
                if (isBlank(candidate.instruction) || candidate.instruction.terminal) {
                    return instruction;
                }
                var newAncestorInstructions = ancestorInstructions.concat([instruction]);
                return _this._recognize(candidate.remaining, newAncestorInstructions)
                    .then(function (childInstruction) {
                    if (isBlank(childInstruction)) {
                        return null;
                    }
                    // redirect instructions are already absolute
                    if (childInstruction instanceof instruction_1.RedirectInstruction) {
                        return childInstruction;
                    }
                    instruction.child = childInstruction;
                    return instruction;
                });
            }
            if (candidate instanceof rules_1.RedirectMatch) {
                var instruction = _this.generate(candidate.redirectTo, ancestorInstructions.concat([null]));
                return new instruction_1.RedirectInstruction(instruction.component, instruction.child, instruction.auxInstruction, candidate.specificity);
            }
        }); });
        if ((isBlank(parsedUrl) || parsedUrl.path == '') && possibleMatches.length == 0) {
            return PromiseWrapper.resolve(this.generateDefault(parentComponent));
        }
        return PromiseWrapper.all(matchPromises).then(mostSpecific);
    };
    RouteRegistry.prototype._auxRoutesToUnresolved = function (auxRoutes, parentInstructions) {
        var _this = this;
        var unresolvedAuxInstructions = {};
        auxRoutes.forEach(function (auxUrl) {
            unresolvedAuxInstructions[auxUrl.path] = new instruction_1.UnresolvedInstruction(function () { return _this._recognize(auxUrl, parentInstructions, true); });
        });
        return unresolvedAuxInstructions;
    };
    /**
     * Given a normalized list with component names and params like: `['user', {id: 3 }]`
     * generates a url with a leading slash relative to the provided `parentComponent`.
     *
     * If the optional param `_aux` is `true`, then we generate starting at an auxiliary
     * route boundary.
     */
    RouteRegistry.prototype.generate = function (linkParams, ancestorInstructions, _aux) {
        if (_aux === void 0) { _aux = false; }
        var params = splitAndFlattenLinkParams(linkParams);
        var prevInstruction;
        // The first segment should be either '.' (generate from parent) or '' (generate from root).
        // When we normalize above, we strip all the slashes, './' becomes '.' and '/' becomes ''.
        if (ListWrapper.first(params) == '') {
            params.shift();
            prevInstruction = ListWrapper.first(ancestorInstructions);
            ancestorInstructions = [];
        }
        else {
            prevInstruction = ancestorInstructions.length > 0 ? ancestorInstructions.pop() : null;
            if (ListWrapper.first(params) == '.') {
                params.shift();
            }
            else if (ListWrapper.first(params) == '..') {
                while (ListWrapper.first(params) == '..') {
                    if (ancestorInstructions.length <= 0) {
                        throw new BaseException("Link \"" + ListWrapper.toJSON(linkParams) + "\" has too many \"../\" segments.");
                    }
                    prevInstruction = ancestorInstructions.pop();
                    params = ListWrapper.slice(params, 1);
                }
            }
            else {
                // we must only peak at the link param, and not consume it
                var routeName = ListWrapper.first(params);
                var parentComponentType = this._rootComponent;
                var grandparentComponentType = null;
                if (ancestorInstructions.length > 1) {
                    var parentComponentInstruction = ancestorInstructions[ancestorInstructions.length - 1];
                    var grandComponentInstruction = ancestorInstructions[ancestorInstructions.length - 2];
                    parentComponentType = parentComponentInstruction.component.componentType;
                    grandparentComponentType = grandComponentInstruction.component.componentType;
                }
                else if (ancestorInstructions.length == 1) {
                    parentComponentType = ancestorInstructions[0].component.componentType;
                    grandparentComponentType = this._rootComponent;
                }
                // For a link with no leading `./`, `/`, or `../`, we look for a sibling and child.
                // If both exist, we throw. Otherwise, we prefer whichever exists.
                var childRouteExists = this.hasRoute(routeName, parentComponentType);
                var parentRouteExists = isPresent(grandparentComponentType) &&
                    this.hasRoute(routeName, grandparentComponentType);
                if (parentRouteExists && childRouteExists) {
                    var msg = "Link \"" + ListWrapper.toJSON(linkParams) + "\" is ambiguous, use \"./\" or \"../\" to disambiguate.";
                    throw new BaseException(msg);
                }
                if (parentRouteExists) {
                    prevInstruction = ancestorInstructions.pop();
                }
            }
        }
        if (params[params.length - 1] == '') {
            params.pop();
        }
        if (params.length > 0 && params[0] == '') {
            params.shift();
        }
        if (params.length < 1) {
            var msg = "Link \"" + ListWrapper.toJSON(linkParams) + "\" must include a route name.";
            throw new BaseException(msg);
        }
        var generatedInstruction = this._generate(params, ancestorInstructions, prevInstruction, _aux, linkParams);
        // we don't clone the first (root) element
        for (var i = ancestorInstructions.length - 1; i >= 0; i--) {
            var ancestorInstruction = ancestorInstructions[i];
            if (isBlank(ancestorInstruction)) {
                break;
            }
            generatedInstruction = ancestorInstruction.replaceChild(generatedInstruction);
        }
        return generatedInstruction;
    };
    /*
     * Internal helper that does not make any assertions about the beginning of the link DSL.
     * `ancestorInstructions` are parents that will be cloned.
     * `prevInstruction` is the existing instruction that would be replaced, but which might have
     * aux routes that need to be cloned.
     */
    RouteRegistry.prototype._generate = function (linkParams, ancestorInstructions, prevInstruction, _aux, _originalLink) {
        var _this = this;
        if (_aux === void 0) { _aux = false; }
        var parentComponentType = this._rootComponent;
        var componentInstruction = null;
        var auxInstructions = {};
        var parentInstruction = ListWrapper.last(ancestorInstructions);
        if (isPresent(parentInstruction) && isPresent(parentInstruction.component)) {
            parentComponentType = parentInstruction.component.componentType;
        }
        if (linkParams.length == 0) {
            var defaultInstruction = this.generateDefault(parentComponentType);
            if (isBlank(defaultInstruction)) {
                throw new BaseException("Link \"" + ListWrapper.toJSON(_originalLink) + "\" does not resolve to a terminal instruction.");
            }
            return defaultInstruction;
        }
        // for non-aux routes, we want to reuse the predecessor's existing primary and aux routes
        // and only override routes for which the given link DSL provides
        if (isPresent(prevInstruction) && !_aux) {
            auxInstructions = StringMapWrapper.merge(prevInstruction.auxInstruction, auxInstructions);
            componentInstruction = prevInstruction.component;
        }
        var rules = this._rules.get(parentComponentType);
        if (isBlank(rules)) {
            throw new BaseException("Component \"" + getTypeNameForDebugging(parentComponentType) + "\" has no route config.");
        }
        var linkParamIndex = 0;
        var routeParams = {};
        // first, recognize the primary route if one is provided
        if (linkParamIndex < linkParams.length && isString(linkParams[linkParamIndex])) {
            var routeName = linkParams[linkParamIndex];
            if (routeName == '' || routeName == '.' || routeName == '..') {
                throw new BaseException("\"" + routeName + "/\" is only allowed at the beginning of a link DSL.");
            }
            linkParamIndex += 1;
            if (linkParamIndex < linkParams.length) {
                var linkParam = linkParams[linkParamIndex];
                if (isStringMap(linkParam) && !isArray(linkParam)) {
                    routeParams = linkParam;
                    linkParamIndex += 1;
                }
            }
            var routeRecognizer = (_aux ? rules.auxRulesByName : rules.rulesByName).get(routeName);
            if (isBlank(routeRecognizer)) {
                throw new BaseException("Component \"" + getTypeNameForDebugging(parentComponentType) + "\" has no route named \"" + routeName + "\".");
            }
            // Create an "unresolved instruction" for async routes
            // we'll figure out the rest of the route when we resolve the instruction and
            // perform a navigation
            if (isBlank(routeRecognizer.handler.componentType)) {
                var generatedUrl = routeRecognizer.generateComponentPathValues(routeParams);
                return new instruction_1.UnresolvedInstruction(function () {
                    return routeRecognizer.handler.resolveComponentType().then(function (_) {
                        return _this._generate(linkParams, ancestorInstructions, prevInstruction, _aux, _originalLink);
                    });
                }, generatedUrl.urlPath, url_parser_1.convertUrlParamsToArray(generatedUrl.urlParams));
            }
            componentInstruction = _aux ? rules.generateAuxiliary(routeName, routeParams) :
                rules.generate(routeName, routeParams);
        }
        // Next, recognize auxiliary instructions.
        // If we have an ancestor instruction, we preserve whatever aux routes are active from it.
        while (linkParamIndex < linkParams.length && isArray(linkParams[linkParamIndex])) {
            var auxParentInstruction = [parentInstruction];
            var auxInstruction = this._generate(linkParams[linkParamIndex], auxParentInstruction, null, true, _originalLink);
            // TODO: this will not work for aux routes with parameters or multiple segments
            auxInstructions[auxInstruction.component.urlPath] = auxInstruction;
            linkParamIndex += 1;
        }
        var instruction = new instruction_1.ResolvedInstruction(componentInstruction, null, auxInstructions);
        // If the component is sync, we can generate resolved child route instructions
        // If not, we'll resolve the instructions at navigation time
        if (isPresent(componentInstruction) && isPresent(componentInstruction.componentType)) {
            var childInstruction = null;
            if (componentInstruction.terminal) {
                if (linkParamIndex >= linkParams.length) {
                }
            }
            else {
                var childAncestorComponents = ancestorInstructions.concat([instruction]);
                var remainingLinkParams = linkParams.slice(linkParamIndex);
                childInstruction = this._generate(remainingLinkParams, childAncestorComponents, null, false, _originalLink);
            }
            instruction.child = childInstruction;
        }
        return instruction;
    };
    RouteRegistry.prototype.hasRoute = function (name, parentComponent) {
        var rules = this._rules.get(parentComponent);
        if (isBlank(rules)) {
            return false;
        }
        return rules.hasRoute(name);
    };
    RouteRegistry.prototype.generateDefault = function (componentCursor) {
        var _this = this;
        if (isBlank(componentCursor)) {
            return null;
        }
        var rules = this._rules.get(componentCursor);
        if (isBlank(rules) || isBlank(rules.defaultRule)) {
            return null;
        }
        var defaultChild = null;
        if (isPresent(rules.defaultRule.handler.componentType)) {
            var componentInstruction = rules.defaultRule.generate({});
            if (!rules.defaultRule.terminal) {
                defaultChild = this.generateDefault(rules.defaultRule.handler.componentType);
            }
            return new instruction_1.DefaultInstruction(componentInstruction, defaultChild);
        }
        return new instruction_1.UnresolvedInstruction(function () {
            return rules.defaultRule.handler.resolveComponentType().then(function (_) { return _this.generateDefault(componentCursor); });
        });
    };
    return RouteRegistry;
})();
exports.RouteRegistry = RouteRegistry;
/*
 * Given: ['/a/b', {c: 2}]
 * Returns: ['', 'a', 'b', {c: 2}]
 */
function splitAndFlattenLinkParams(linkParams) {
    var accumulation = [];
    linkParams.forEach(function (item) {
        if (isString(item)) {
            var strItem = item;
            accumulation = accumulation.concat(strItem.split('/'));
        }
        else {
            accumulation.push(item);
        }
    });
    return accumulation;
}
/*
 * Given a list of instructions, returns the most specific instruction
 */
function mostSpecific(instructions) {
    instructions = instructions.filter(function (instruction) { return isPresent(instruction); });
    if (instructions.length == 0) {
        return null;
    }
    if (instructions.length == 1) {
        return instructions[0];
    }
    var first = instructions[0];
    var rest = instructions.slice(1);
    return rest.reduce(function (instruction, contender) {
        if (compareSpecificityStrings(contender.specificity, instruction.specificity) == -1) {
            return contender;
        }
        return instruction;
    }, first);
}
/*
 * Expects strings to be in the form of "[0-2]+"
 * Returns -1 if string A should be sorted above string B, 1 if it should be sorted after,
 * or 0 if they are the same.
 */
function compareSpecificityStrings(a, b) {
    var l = Math.min(a.length, b.length);
    for (var i = 0; i < l; i += 1) {
        var ai = StringWrapper.charCodeAt(a, i);
        var bi = StringWrapper.charCodeAt(b, i);
        var difference = bi - ai;
        if (difference != 0) {
            return difference;
        }
    }
    return a.length - b.length;
}
function assertTerminalComponent(component, path) {
    if (!isType(component)) {
        return;
    }
    var annotations = reflector.annotations(component);
    if (isPresent(annotations)) {
        for (var i = 0; i < annotations.length; i++) {
            var annotation = annotations[i];
            if (annotation instanceof route_config_impl_1.RouteConfig) {
                throw new BaseException("Child routes are not allowed for \"" + path + "\". Use \"...\" on the parent's route path.");
            }
        }
    }
}
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var route_lifecycle_reflector_1 = require('./lifecycle/route_lifecycle_reflector');
var _resolveToTrue = PromiseWrapper.resolve(true);
var _resolveToFalse = PromiseWrapper.resolve(false);
/**
 * The `Router` is responsible for mapping URLs to components.
 *
 * You can see the state of the router by inspecting the read-only field `router.navigating`.
 * This may be useful for showing a spinner, for instance.
 *
 * ## Concepts
 *
 * Routers and component instances have a 1:1 correspondence.
 *
 * The router holds reference to a number of {@link RouterOutlet}.
 * An outlet is a placeholder that the router dynamically fills in depending on the current URL.
 *
 * When the router navigates from a URL, it must first recognize it and serialize it into an
 * `Instruction`.
 * The router uses the `RouteRegistry` to get an `Instruction`.
 */
var Router = (function () {
    function Router(registry, parent, hostComponent) {
        this.registry = registry;
        this.parent = parent;
        this.hostComponent = hostComponent;
        this.navigating = false;
        this._currentInstruction = null;
        this._currentNavigation = _resolveToTrue;
        this._outlet = null;
        this._auxRouters = new Map();
        this._subject = new EventEmitter();
    }
    /**
     * Constructs a child router. You probably don't need to use this unless you're writing a reusable
     * component.
     */
    Router.prototype.childRouter = function (hostComponent) {
        return this._childRouter = new ChildRouter(this, hostComponent);
    };
    /**
     * Constructs a child router. You probably don't need to use this unless you're writing a reusable
     * component.
     */
    Router.prototype.auxRouter = function (hostComponent) { return new ChildRouter(this, hostComponent); };
    /**
     * Register an outlet to be notified of primary route changes.
     *
     * You probably don't need to use this unless you're writing a reusable component.
     */
    Router.prototype.registerPrimaryOutlet = function (outlet) {
        if (isPresent(outlet.name)) {
            throw new BaseException("registerPrimaryOutlet expects to be called with an unnamed outlet.");
        }
        if (isPresent(this._outlet)) {
            throw new BaseException("Primary outlet is already registered.");
        }
        this._outlet = outlet;
        if (isPresent(this._currentInstruction)) {
            return this.commit(this._currentInstruction, false);
        }
        return _resolveToTrue;
    };
    /**
     * Unregister an outlet (because it was destroyed, etc).
     *
     * You probably don't need to use this unless you're writing a custom outlet implementation.
     */
    Router.prototype.unregisterPrimaryOutlet = function (outlet) {
        if (isPresent(outlet.name)) {
            throw new BaseException("registerPrimaryOutlet expects to be called with an unnamed outlet.");
        }
        this._outlet = null;
    };
    /**
     * Register an outlet to notified of auxiliary route changes.
     *
     * You probably don't need to use this unless you're writing a reusable component.
     */
    Router.prototype.registerAuxOutlet = function (outlet) {
        var outletName = outlet.name;
        if (isBlank(outletName)) {
            throw new BaseException("registerAuxOutlet expects to be called with an outlet with a name.");
        }
        var router = this.auxRouter(this.hostComponent);
        this._auxRouters.set(outletName, router);
        router._outlet = outlet;
        var auxInstruction;
        if (isPresent(this._currentInstruction) &&
            isPresent(auxInstruction = this._currentInstruction.auxInstruction[outletName])) {
            return router.commit(auxInstruction);
        }
        return _resolveToTrue;
    };
    /**
     * Given an instruction, returns `true` if the instruction is currently active,
     * otherwise `false`.
     */
    Router.prototype.isRouteActive = function (instruction) {
        var router = this;
        while (isPresent(router.parent) && isPresent(instruction.child)) {
            router = router.parent;
            instruction = instruction.child;
        }
        return isPresent(this._currentInstruction) &&
            this._currentInstruction.component == instruction.component;
    };
    /**
     * Dynamically update the routing configuration and trigger a navigation.
     *
     * ### Usage
     *
     * ```
     * router.config([
     *   { 'path': '/', 'component': IndexComp },
     *   { 'path': '/user/:id', 'component': UserComp },
     * ]);
     * ```
     */
    Router.prototype.config = function (definitions) {
        var _this = this;
        definitions.forEach(function (routeDefinition) { _this.registry.config(_this.hostComponent, routeDefinition); });
        return this.renavigate();
    };
    /**
     * Navigate based on the provided Route Link DSL. It's preferred to navigate with this method
     * over `navigateByUrl`.
     *
     * ### Usage
     *
     * This method takes an array representing the Route Link DSL:
     * ```
     * ['./MyCmp', {param: 3}]
     * ```
     * See the {@link RouterLink} directive for more.
     */
    Router.prototype.navigate = function (linkParams) {
        var instruction = this.generate(linkParams);
        return this.navigateByInstruction(instruction, false);
    };
    /**
     * Navigate to a URL. Returns a promise that resolves when navigation is complete.
     * It's preferred to navigate with `navigate` instead of this method, since URLs are more brittle.
     *
     * If the given URL begins with a `/`, router will navigate absolutely.
     * If the given URL does not begin with `/`, the router will navigate relative to this component.
     */
    Router.prototype.navigateByUrl = function (url, _skipLocationChange) {
        var _this = this;
        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
        return this._currentNavigation = this._currentNavigation.then(function (_) {
            _this.lastNavigationAttempt = url;
            _this._startNavigating();
            return _this._afterPromiseFinishNavigating(_this.recognize(url).then(function (instruction) {
                if (isBlank(instruction)) {
                    return false;
                }
                return _this._navigate(instruction, _skipLocationChange);
            }));
        });
    };
    /**
     * Navigate via the provided instruction. Returns a promise that resolves when navigation is
     * complete.
     */
    Router.prototype.navigateByInstruction = function (instruction, _skipLocationChange) {
        var _this = this;
        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
        if (isBlank(instruction)) {
            return _resolveToFalse;
        }
        return this._currentNavigation = this._currentNavigation.then(function (_) {
            _this._startNavigating();
            return _this._afterPromiseFinishNavigating(_this._navigate(instruction, _skipLocationChange));
        });
    };
    /** @internal */
    Router.prototype._settleInstruction = function (instruction) {
        var _this = this;
        return instruction.resolveComponent().then(function (_) {
            var unsettledInstructions = [];
            if (isPresent(instruction.component)) {
                instruction.component.reuse = false;
            }
            if (isPresent(instruction.child)) {
                unsettledInstructions.push(_this._settleInstruction(instruction.child));
            }
            StringMapWrapper.forEach(instruction.auxInstruction, function (instruction, _) {
                unsettledInstructions.push(_this._settleInstruction(instruction));
            });
            return PromiseWrapper.all(unsettledInstructions);
        });
    };
    /** @internal */
    Router.prototype._navigate = function (instruction, _skipLocationChange) {
        var _this = this;
        return this._settleInstruction(instruction)
            .then(function (_) { return _this._routerCanReuse(instruction); })
            .then(function (_) { return _this._canActivate(instruction); })
            .then(function (result) {
            if (!result) {
                return false;
            }
            return _this._routerCanDeactivate(instruction)
                .then(function (result) {
                if (result) {
                    return _this.commit(instruction, _skipLocationChange)
                        .then(function (_) {
                        _this._emitNavigationFinish(instruction.toRootUrl());
                        return true;
                    });
                }
            });
        });
    };
    Router.prototype._emitNavigationFinish = function (url) { ObservableWrapper.callEmit(this._subject, url); };
    Router.prototype._afterPromiseFinishNavigating = function (promise) {
        var _this = this;
        return PromiseWrapper.catchError(promise.then(function (_) { return _this._finishNavigating(); }), function (err) {
            _this._finishNavigating();
            throw err;
        });
    };
    /*
     * Recursively set reuse flags
     */
    /** @internal */
    Router.prototype._routerCanReuse = function (instruction) {
        var _this = this;
        if (isBlank(this._outlet)) {
            return _resolveToFalse;
        }
        if (isBlank(instruction.component)) {
            return _resolveToTrue;
        }
        return this._outlet.routerCanReuse(instruction.component)
            .then(function (result) {
            instruction.component.reuse = result;
            if (result && isPresent(_this._childRouter) && isPresent(instruction.child)) {
                return _this._childRouter._routerCanReuse(instruction.child);
            }
        });
    };
    Router.prototype._canActivate = function (nextInstruction) {
        return canActivateOne(nextInstruction, this._currentInstruction);
    };
    Router.prototype._routerCanDeactivate = function (instruction) {
        var _this = this;
        if (isBlank(this._outlet)) {
            return _resolveToTrue;
        }
        var next;
        var childInstruction = null;
        var reuse = false;
        var componentInstruction = null;
        if (isPresent(instruction)) {
            childInstruction = instruction.child;
            componentInstruction = instruction.component;
            reuse = isBlank(instruction.component) || instruction.component.reuse;
        }
        if (reuse) {
            next = _resolveToTrue;
        }
        else {
            next = this._outlet.routerCanDeactivate(componentInstruction);
        }
        // TODO: aux route lifecycle hooks
        return next.then(function (result) {
            if (result == false) {
                return false;
            }
            if (isPresent(_this._childRouter)) {
                return _this._childRouter._routerCanDeactivate(childInstruction);
            }
            return true;
        });
    };
    /**
     * Updates this router and all descendant routers according to the given instruction
     */
    Router.prototype.commit = function (instruction, _skipLocationChange) {
        var _this = this;
        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
        this._currentInstruction = instruction;
        var next = _resolveToTrue;
        if (isPresent(this._outlet) && isPresent(instruction.component)) {
            var componentInstruction = instruction.component;
            if (componentInstruction.reuse) {
                next = this._outlet.reuse(componentInstruction);
            }
            else {
                next =
                    this.deactivate(instruction).then(function (_) { return _this._outlet.activate(componentInstruction); });
            }
            if (isPresent(instruction.child)) {
                next = next.then(function (_) {
                    if (isPresent(_this._childRouter)) {
                        return _this._childRouter.commit(instruction.child);
                    }
                });
            }
        }
        var promises = [];
        this._auxRouters.forEach(function (router, name) {
            if (isPresent(instruction.auxInstruction[name])) {
                promises.push(router.commit(instruction.auxInstruction[name]));
            }
        });
        return next.then(function (_) { return PromiseWrapper.all(promises); });
    };
    /** @internal */
    Router.prototype._startNavigating = function () { this.navigating = true; };
    /** @internal */
    Router.prototype._finishNavigating = function () { this.navigating = false; };
    /**
     * Subscribe to URL updates from the router
     */
    Router.prototype.subscribe = function (onNext) {
        return ObservableWrapper.subscribe(this._subject, onNext);
    };
    /**
     * Removes the contents of this router's outlet and all descendant outlets
     */
    Router.prototype.deactivate = function (instruction) {
        var _this = this;
        var childInstruction = null;
        var componentInstruction = null;
        if (isPresent(instruction)) {
            childInstruction = instruction.child;
            componentInstruction = instruction.component;
        }
        var next = _resolveToTrue;
        if (isPresent(this._childRouter)) {
            next = this._childRouter.deactivate(childInstruction);
        }
        if (isPresent(this._outlet)) {
            next = next.then(function (_) { return _this._outlet.deactivate(componentInstruction); });
        }
        // TODO: handle aux routes
        return next;
    };
    /**
     * Given a URL, returns an instruction representing the component graph
     */
    Router.prototype.recognize = function (url) {
        var ancestorComponents = this._getAncestorInstructions();
        return this.registry.recognize(url, ancestorComponents);
    };
    Router.prototype._getAncestorInstructions = function () {
        var ancestorInstructions = [this._currentInstruction];
        var ancestorRouter = this;
        while (isPresent(ancestorRouter = ancestorRouter.parent)) {
            ancestorInstructions.unshift(ancestorRouter._currentInstruction);
        }
        return ancestorInstructions;
    };
    /**
     * Navigates to either the last URL successfully navigated to, or the last URL requested if the
     * router has yet to successfully navigate.
     */
    Router.prototype.renavigate = function () {
        if (isBlank(this.lastNavigationAttempt)) {
            return this._currentNavigation;
        }
        return this.navigateByUrl(this.lastNavigationAttempt);
    };
    /**
     * Generate an `Instruction` based on the provided Route Link DSL.
     */
    Router.prototype.generate = function (linkParams) {
        var ancestorInstructions = this._getAncestorInstructions();
        return this.registry.generate(linkParams, ancestorInstructions);
    };
    return Router;
})();
exports.Router = Router;
var RootRouter = (function (_super) {
    __extends(RootRouter, _super);
    function RootRouter(registry, location, primaryComponent) {
        var _this = this;
        _super.call(this, registry, null, primaryComponent);
        this._location = location;
        this._locationSub = this._location.subscribe(function (change) {
            // we call recognize ourselves
            _this.recognize(change['url'])
                .then(function (instruction) {
                _this.navigateByInstruction(instruction, isPresent(change['pop']))
                    .then(function (_) {
                    // this is a popstate event; no need to change the URL
                    if (isPresent(change['pop']) && change['type'] != 'hashchange') {
                        return;
                    }
                    var emitPath = instruction.toUrlPath();
                    var emitQuery = instruction.toUrlQuery();
                    if (emitPath.length > 0 && emitPath[0] != '/') {
                        emitPath = '/' + emitPath;
                    }
                    // Because we've opted to use All hashchange events occur outside Angular.
                    // However, apps that are migrating might have hash links that operate outside
                    // angular to which routing must respond.
                    // To support these cases where we respond to hashchanges and redirect as a
                    // result, we need to replace the top item on the stack.
                    if (change['type'] == 'hashchange') {
                        if (instruction.toRootUrl() != _this._location.path()) {
                            _this._location.replaceState(emitPath, emitQuery);
                        }
                    }
                    else {
                        _this._location.go(emitPath, emitQuery);
                    }
                });
            });
        });
        this.registry.configFromComponent(primaryComponent);
        this.navigateByUrl(location.path());
    }
    RootRouter.prototype.commit = function (instruction, _skipLocationChange) {
        var _this = this;
        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
        var emitPath = instruction.toUrlPath();
        var emitQuery = instruction.toUrlQuery();
        if (emitPath.length > 0 && emitPath[0] != '/') {
            emitPath = '/' + emitPath;
        }
        var promise = _super.prototype.commit.call(this, instruction);
        if (!_skipLocationChange) {
            promise = promise.then(function (_) { _this._location.go(emitPath, emitQuery); });
        }
        return promise;
    };
    RootRouter.prototype.dispose = function () {
        if (isPresent(this._locationSub)) {
            ObservableWrapper.dispose(this._locationSub);
            this._locationSub = null;
        }
    };
    return RootRouter;
})(Router);
exports.RootRouter = RootRouter;
var ChildRouter = (function (_super) {
    __extends(ChildRouter, _super);
    function ChildRouter(parent, hostComponent) {
        _super.call(this, parent.registry, parent, hostComponent);
        this.parent = parent;
    }
    ChildRouter.prototype.navigateByUrl = function (url, _skipLocationChange) {
        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
        // Delegate navigation to the root router
        return this.parent.navigateByUrl(url, _skipLocationChange);
    };
    ChildRouter.prototype.navigateByInstruction = function (instruction, _skipLocationChange) {
        if (_skipLocationChange === void 0) { _skipLocationChange = false; }
        // Delegate navigation to the root router
        return this.parent.navigateByInstruction(instruction, _skipLocationChange);
    };
    return ChildRouter;
})(Router);
function canActivateOne(nextInstruction, prevInstruction) {
    var next = _resolveToTrue;
    if (isBlank(nextInstruction.component)) {
        return next;
    }
    if (isPresent(nextInstruction.child)) {
        next = canActivateOne(nextInstruction.child, isPresent(prevInstruction) ? prevInstruction.child : null);
    }
    return next.then(function (result) {
        if (result == false) {
            return false;
        }
        if (nextInstruction.component.reuse) {
            return true;
        }
        var hook = route_lifecycle_reflector_1.getCanActivateHook(nextInstruction.component.componentType);
        if (isPresent(hook)) {
            return hook(nextInstruction.component, isPresent(prevInstruction) ? prevInstruction.component : null);
        }
        return true;
    });
}


  //TODO: this is a hack to replace the exiting implementation at run-time
  exports.getCanActivateHook = function (directiveName) {
    var factory = $$directiveIntrospector.getTypeByName(directiveName);
    return factory && factory.$canActivate && function (next, prev) {
      return $injector.invoke(factory.$canActivate, null, {
        $nextInstruction: next,
        $prevInstruction: prev
      });
    };
  };

  // This hack removes assertions about the type of the "component"
  // property in a route config
  exports.assertComponentExists = function () {};

  angular.stringifyInstruction = function (instruction) {
    return instruction.toRootUrl();
  };

  var RouteRegistry = exports.RouteRegistry;
  var RootRouter = exports.RootRouter;

  var registry = new RouteRegistry($routerRootComponent);
  var location = new Location();

  $$directiveIntrospector(function (name, factory) {
    if (angular.isArray(factory.$routeConfig)) {
      factory.$routeConfig.forEach(function (config) {
        registry.config(name, config);
      });
    }
  });

  var router = new RootRouter(registry, location, $routerRootComponent);
  $rootScope.$watch(function () { return $location.url(); }, function (path) {
    if (router.lastNavigationAttempt !== path) {
      router.navigateByUrl(path);
    }
  });

  router.subscribe(function () {
    $rootScope.$broadcast('$routeChangeSuccess', {});
  });

  return router;
}

}());
/*!
 * angular-translate - v2.18.1 - 2018-05-19
 * 
 * Copyright (c) 2018 The angular-translate team, Pascal Precht; Licensed MIT
 */
!function(t,e){"function"==typeof define&&define.amd?define([],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():e()}(0,function(){function t(e){"use strict";var n=e.storageKey(),a=e.storage(),t=function(){var t=e.preferredLanguage();angular.isString(t)?e.use(t):a.put(n,e.use())};t.displayName="fallbackFromIncorrectStorageValue",a?a.get(n)?e.use(a.get(n)).catch(t):t():angular.isString(e.preferredLanguage())&&e.use(e.preferredLanguage())}function e(t,r,e,i){"use strict";var z,c,T,x,F,I,_,n,V,R,D,K,U,M,H,G,q={},Y=[],B=t,J=[],Q="translate-cloak",W=!1,X=!1,Z=".",tt=!1,et=!1,nt=0,at=!0,a="default",s={default:function(t){return(t||"").split("-").join("_")},java:function(t){var e=(t||"").split("-").join("_"),n=e.split("_");return 1<n.length?n[0].toLowerCase()+"_"+n[1].toUpperCase():e},bcp47:function(t){var e=(t||"").split("_").join("-"),n=e.split("-");switch(n.length){case 1:n[0]=n[0].toLowerCase();break;case 2:n[0]=n[0].toLowerCase(),4===n[1].length?n[1]=n[1].charAt(0).toUpperCase()+n[1].slice(1).toLowerCase():n[1]=n[1].toUpperCase();break;case 3:n[0]=n[0].toLowerCase(),n[1]=n[1].charAt(0).toUpperCase()+n[1].slice(1).toLowerCase(),n[2]=n[2].toUpperCase();break;default:return e}return n.join("-")},"iso639-1":function(t){return(t||"").split("_").join("-").split("-")[0].toLowerCase()}},o=function(){if(angular.isFunction(i.getLocale))return i.getLocale();var t,e,n=r.$get().navigator,a=["language","browserLanguage","systemLanguage","userLanguage"];if(angular.isArray(n.languages))for(t=0;t<n.languages.length;t++)if((e=n.languages[t])&&e.length)return e;for(t=0;t<a.length;t++)if((e=n[a[t]])&&e.length)return e;return null};o.displayName="angular-translate/service: getFirstBrowserLanguage";var rt=function(){var t=o()||"";return s[a]&&(t=s[a](t)),t};rt.displayName="angular-translate/service: getLocale";var it=function(t,e){for(var n=0,a=t.length;n<a;n++)if(t[n]===e)return n;return-1},st=function(){return this.toString().replace(/^\s+|\s+$/g,"")},f=function(t){return angular.isString(t)?t.toLowerCase():t},ot=function(t){if(t){for(var e,n=[],a=f(t),r=0,i=Y.length;r<i;r++)n.push(f(Y[r]));if(-1<(r=it(n,a)))return Y[r];if(c)for(var s in c)if(c.hasOwnProperty(s)){var o=!1,l=Object.prototype.hasOwnProperty.call(c,s)&&f(s)===f(t);if("*"===s.slice(-1)&&(o=f(s.slice(0,-1))===f(t.slice(0,s.length-1))),(l||o)&&(e=c[s],-1<it(n,f(e))))return e}var u=t.split("_");return 1<u.length&&-1<it(n,f(u[0]))?u[0]:void 0}},lt=function(t,e){if(!t&&!e)return q;if(t&&!e){if(angular.isString(t))return q[t]}else angular.isObject(q[t])||(q[t]={}),angular.extend(q[t],ut(e));return this};this.translations=lt,this.cloakClassName=function(t){return t?(Q=t,this):Q},this.nestedObjectDelimeter=function(t){return t?(Z=t,this):Z};var ut=function(t,e,n,a){var r,i,s;for(r in e||(e=[]),n||(n={}),t)Object.prototype.hasOwnProperty.call(t,r)&&(s=t[r],angular.isObject(s)?ut(s,e.concat(r),n,r):(i=e.length?""+e.join(Z)+Z+r:r,e.length&&r===a&&(n[""+e.join(Z)]="@:"+i),n[i]=s));return n};ut.displayName="flatObject",this.addInterpolation=function(t){return J.push(t),this},this.useMessageFormatInterpolation=function(){return this.useInterpolation("$translateMessageFormatInterpolation")},this.useInterpolation=function(t){return R=t,this},this.useSanitizeValueStrategy=function(t){return e.useStrategy(t),this},this.preferredLanguage=function(t){return t?(ct(t),this):z};var ct=function(t){return t&&(z=t),z};this.translationNotFoundIndicator=function(t){return this.translationNotFoundIndicatorLeft(t),this.translationNotFoundIndicatorRight(t),this},this.translationNotFoundIndicatorLeft=function(t){return t?(U=t,this):U},this.translationNotFoundIndicatorRight=function(t){return t?(M=t,this):M},this.fallbackLanguage=function(t){return ft(t),this};var ft=function(t){return t?(angular.isString(t)?(x=!0,T=[t]):angular.isArray(t)&&(x=!1,T=t),angular.isString(z)&&it(T,z)<0&&T.push(z),this):x?T[0]:T};this.use=function(t){if(t){if(!q[t]&&!D)throw new Error("$translateProvider couldn't find translationTable for langKey: '"+t+"'");return F=t,this}return F},this.resolveClientLocale=function(){return rt()};var gt=function(t){return t?(B=t,this):n?n+B:B};this.storageKey=gt,this.useUrlLoader=function(t,e){return this.useLoader("$translateUrlLoader",angular.extend({url:t},e))},this.useStaticFilesLoader=function(t){return this.useLoader("$translateStaticFilesLoader",t)},this.useLoader=function(t,e){return D=t,K=e||{},this},this.useLocalStorage=function(){return this.useStorage("$translateLocalStorage")},this.useCookieStorage=function(){return this.useStorage("$translateCookieStorage")},this.useStorage=function(t){return _=t,this},this.storagePrefix=function(t){return t?(n=t,this):t},this.useMissingTranslationHandlerLog=function(){return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")},this.useMissingTranslationHandler=function(t){return V=t,this},this.usePostCompiling=function(t){return W=!!t,this},this.forceAsyncReload=function(t){return X=!!t,this},this.uniformLanguageTag=function(t){return t?angular.isString(t)&&(t={standard:t}):t={},a=t.standard,this},this.determinePreferredLanguage=function(t){var e=t&&angular.isFunction(t)?t():rt();return z=Y.length&&ot(e)||e,this},this.registerAvailableLanguageKeys=function(t,e){return t?(Y=t,e&&(c=e),this):Y},this.useLoaderCache=function(t){return!1===t?H=void 0:!0===t?H=!0:void 0===t?H="$translationCache":t&&(H=t),this},this.directivePriority=function(t){return void 0===t?nt:(nt=t,this)},this.statefulFilter=function(t){return void 0===t?at:(at=t,this)},this.postProcess=function(t){return G=t||void 0,this},this.keepContent=function(t){return et=!!t,this},this.$get=["$log","$injector","$rootScope","$q",function(t,o,s,m){var i,$,y,b=o.get(R||"$translateDefaultInterpolation"),S=!1,L={},f={},j=function(t,s,o,l,u,c){!F&&z&&(F=z);var a=u&&u!==F?ot(u)||u:F;if(u&&v(u),angular.isArray(t)){return function(t){for(var a={},e=[],n=function(e){var n=m.defer(),t=function(t){a[e]=t,n.resolve([e,t])};return j(e,s,o,l,u,c).then(t,t),n.promise},r=0,i=t.length;r<i;r++)e.push(n(t[r]));return m.all(e).then(function(){return a})}(t)}var e=m.defer();t&&(t=st.apply(t));var n=function(){var t=f[a]||f[z];if($=0,_&&!t){var e=i.get(B);if(t=f[e],T&&T.length){var n=it(T,e);$=0===n?1:0,it(T,z)<0&&T.push(z)}}return t}();if(n){var r=function(){u||(a=F),h(t,s,o,l,a,c).then(e.resolve,e.reject)};r.displayName="promiseResolved",n.finally(r).catch(angular.noop)}else h(t,s,o,l,a,c).then(e.resolve,e.reject);return e.promise},w=function(t){return U&&(t=[U,t].join(" ")),M&&(t=[t,M].join(" ")),t},l=function(t){F=t,_&&i.put(j.storageKey(),F),s.$emit("$translateChangeSuccess",{language:t}),b.setLocale(F);var e=function(t,e){L[e].setLocale(F)};e.displayName="eachInterpolatorLocaleSetter",angular.forEach(L,e),s.$emit("$translateChangeEnd",{language:t})},u=function(n){if(!n)throw"No language key specified for loading.";var a=m.defer();s.$emit("$translateLoadingStart",{language:n}),S=!0;var t=H;"string"==typeof t&&(t=o.get(t));var e=angular.extend({},K,{key:n,$http:angular.extend({},{cache:t},K.$http)}),r=function(t){var e={};s.$emit("$translateLoadingSuccess",{language:n}),angular.isArray(t)?angular.forEach(t,function(t){angular.extend(e,ut(t))}):angular.extend(e,ut(t)),S=!1,a.resolve({key:n,table:e}),s.$emit("$translateLoadingEnd",{language:n})};r.displayName="onLoaderSuccess";var i=function(t){s.$emit("$translateLoadingError",{language:t}),a.reject(t),s.$emit("$translateLoadingEnd",{language:t})};return i.displayName="onLoaderError",o.get(D)(e).then(r,i),a.promise};if(_&&(!(i=o.get(_)).get||!i.put))throw new Error("Couldn't use storage '"+_+"', missing get() or put() method!");if(J.length){var e=function(t){var e=o.get(t);e.setLocale(z||F),L[e.getInterpolationIdentifier()]=e};e.displayName="interpolationFactoryAdder",angular.forEach(J,e)}var c=function(a,r,i,s,o){var l=m.defer(),t=function(t){if(Object.prototype.hasOwnProperty.call(t,r)&&null!==t[r]){s.setLocale(a);var e=t[r];if("@:"===e.substr(0,2))c(a,e.substr(2),i,s,o).then(l.resolve,l.reject);else{var n=s.interpolate(t[r],i,"service",o,r);n=O(r,t[r],n,i,a),l.resolve(n)}s.setLocale(F)}else l.reject()};return t.displayName="fallbackTranslationResolver",function(t){var e=m.defer();if(Object.prototype.hasOwnProperty.call(q,t))e.resolve(q[t]);else if(f[t]){var n=function(t){lt(t.key,t.table),e.resolve(t.table)};n.displayName="translationTableResolver",f[t].then(n,e.reject)}else e.reject();return e.promise}(a).then(t,l.reject),l.promise},g=function(t,e,n,a,r){var i,s=q[t];if(s&&Object.prototype.hasOwnProperty.call(s,e)&&null!==s[e]){if(a.setLocale(t),i=a.interpolate(s[e],n,"filter",r,e),i=O(e,s[e],i,n,t,r),!angular.isString(i)&&angular.isFunction(i.$$unwrapTrustedValue)){var o=i.$$unwrapTrustedValue();if("@:"===o.substr(0,2))return g(t,o.substr(2),n,a,r)}else if("@:"===i.substr(0,2))return g(t,i.substr(2),n,a,r);a.setLocale(F)}return i},C=function(t,e,n,a){return V?o.get(V)(t,F,e,n,a):t},N=function(t,e,n,a,r,i){var s=m.defer();if(t<T.length){var o=T[t];c(o,e,n,a,i).then(function(t){s.resolve(t)},function(){return N(t+1,e,n,a,r,i).then(s.resolve,s.reject)})}else if(r)s.resolve(r);else{var l=C(e,n,r);V&&l?s.resolve(l):s.reject(w(e))}return s.promise},p=function(t,e,n,a,r){var i;if(t<T.length){var s=T[t];(i=g(s,e,n,a,r))||""===i||(i=p(t+1,e,n,a))}return i},h=function(t,e,n,a,r,i){var s,o,l,u,c,f=m.defer(),g=r?q[r]:q,p=n?L[n]:b;if(g&&Object.prototype.hasOwnProperty.call(g,t)&&null!==g[t]){var h=g[t];if("@:"===h.substr(0,2))j(h.substr(2),e,n,a,r,i).then(f.resolve,f.reject);else{var d=p.interpolate(h,e,"service",i,t);d=O(t,h,d,e,r),f.resolve(d)}}else{var v;V&&!S&&(v=C(t,e,a)),r&&T&&T.length?(s=t,o=e,l=p,u=a,c=i,N(0<y?y:$,s,o,l,u,c)).then(function(t){f.resolve(t)},function(t){f.reject(w(t))}):V&&!S&&v?a?f.resolve(a):f.resolve(v):a?f.resolve(a):f.reject(w(t))}return f.promise},d=function(t,e,n,a,r){var i,s=a?q[a]:q,o=b;if(L&&Object.prototype.hasOwnProperty.call(L,n)&&(o=L[n]),s&&Object.prototype.hasOwnProperty.call(s,t)&&null!==s[t]){var l=s[t];"@:"===l.substr(0,2)?i=d(l.substr(2),e,n,a,r):(i=o.interpolate(l,e,"filter",r,t),i=O(t,l,i,e,a,r))}else{var u;V&&!S&&(u=C(t,e,r)),i=a&&T&&T.length?p(($=0)<y?y:$,t,e,o,r):V&&!S&&u?u:w(t)}return i},O=function(t,e,n,a,r,i){var s=G;return s&&("string"==typeof s&&(s=o.get(s)),s)?s(t,e,n,a,r,i):n},v=function(t){q[t]||!D||f[t]||(f[t]=u(t).then(function(t){return lt(t.key,t.table),t}))};j.preferredLanguage=function(t){return t&&ct(t),z},j.cloakClassName=function(){return Q},j.nestedObjectDelimeter=function(){return Z},j.fallbackLanguage=function(t){if(null!=t){if(ft(t),D&&T&&T.length)for(var e=0,n=T.length;e<n;e++)f[T[e]]||(f[T[e]]=u(T[e]));j.use(j.use())}return x?T[0]:T},j.useFallbackLanguage=function(t){if(null!=t)if(t){var e=it(T,t);-1<e&&(y=e)}else y=0},j.proposedLanguage=function(){return I},j.storage=function(){return i},j.negotiateLocale=ot,j.use=function(e){if(!e)return F;var n=m.defer();n.promise.then(null,angular.noop),s.$emit("$translateChangeStart",{language:e});var t=ot(e);return 0<Y.length&&!t?m.reject(e):(t&&(e=t),I=e,!X&&q[e]||!D||f[e]?f[e]?f[e].then(function(t){return I===t.key&&l(t.key),n.resolve(t.key),t},function(t){return!F&&T&&0<T.length&&T[0]!==t?j.use(T[0]).then(n.resolve,n.reject):n.reject(t)}):(n.resolve(e),l(e)):(f[e]=u(e).then(function(t){return lt(t.key,t.table),n.resolve(t.key),I===e&&l(t.key),t},function(t){return s.$emit("$translateChangeError",{language:t}),n.reject(t),s.$emit("$translateChangeEnd",{language:t}),m.reject(t)}),f[e].finally(function(){var t;I===(t=e)&&(I=void 0),f[t]=void 0}).catch(angular.noop)),n.promise)},j.resolveClientLocale=function(){return rt()},j.storageKey=function(){return gt()},j.isPostCompilingEnabled=function(){return W},j.isForceAsyncReloadEnabled=function(){return X},j.isKeepContent=function(){return et},j.refresh=function(t){if(!D)throw new Error("Couldn't refresh translation table, no loader registered!");s.$emit("$translateRefreshStart",{language:t});var e=m.defer(),n={};function a(e){var t=u(e);return(f[e]=t).then(function(t){q[e]={},lt(e,t.table),n[e]=!0},angular.noop),t}if(e.promise.then(function(){for(var t in q)q.hasOwnProperty(t)&&(t in n||delete q[t]);F&&l(F)},angular.noop).finally(function(){s.$emit("$translateRefreshEnd",{language:t})}),t)q[t]?a(t).then(e.resolve,e.reject):e.reject();else{var r=T&&T.slice()||[];F&&-1===r.indexOf(F)&&r.push(F),m.all(r.map(a)).then(e.resolve,e.reject)}return e.promise},j.instant=function(t,e,n,a,r){var i=a&&a!==F?ot(a)||a:F;if(null===t||angular.isUndefined(t))return t;if(a&&v(a),angular.isArray(t)){for(var s={},o=0,l=t.length;o<l;o++)s[t[o]]=j.instant(t[o],e,n,a,r);return s}if(angular.isString(t)&&t.length<1)return t;t&&(t=st.apply(t));var u,c,f=[];z&&f.push(z),i&&f.push(i),T&&T.length&&(f=f.concat(T));for(var g=0,p=f.length;g<p;g++){var h=f[g];if(q[h]&&void 0!==q[h][t]&&(u=d(t,e,n,i,r)),void 0!==u)break}u||""===u||(U||M?u=w(t):(u=b.interpolate(t,e,"filter",r),V&&!S&&(c=C(t,e,r)),V&&!S&&c&&(u=c)));return u},j.versionInfo=function(){return"2.18.1"},j.loaderCache=function(){return H},j.directivePriority=function(){return nt},j.statefulFilter=function(){return at},j.isReady=function(){return tt};var n=m.defer();n.promise.then(function(){tt=!0}),j.onReady=function(t){var e=m.defer();return angular.isFunction(t)&&e.promise.then(t),tt?e.resolve():n.promise.then(e.resolve),e.promise},j.getAvailableLanguageKeys=function(){return 0<Y.length?Y:null},j.getTranslationTable=function(t){return(t=t||j.use())&&q[t]?angular.copy(q[t]):null};var a=s.$on("$translateReady",function(){n.resolve(),a(),a=null}),r=s.$on("$translateChangeEnd",function(){n.resolve(),r(),r=null});if(D){if(angular.equals(q,{})&&j.use()&&j.use(j.use()),T&&T.length)for(var E=function(t){return lt(t.key,t.table),s.$emit("$translateChangeEnd",{language:t.key}),t},k=0,P=T.length;k<P;k++){var A=T[k];!X&&q[A]||(f[A]=u(A).then(E))}}else s.$emit("$translateReady",{language:j.use()});return j}]}function n(s,o){"use strict";var t={};return t.setLocale=function(t){t},t.getInterpolationIdentifier=function(){return"default"},t.useSanitizeValueStrategy=function(t){return o.useStrategy(t),this},t.interpolate=function(t,e,n,a,r){var i;return e=e||{},e=o.sanitize(e,"params",a,n),angular.isNumber(t)?i=""+t:angular.isString(t)?(i=s(t)(e),i=o.sanitize(i,"text",a,n)):i="",i},t}function a(S,L,j,w,C){"use strict";var N=function(t){return angular.isString(t)?t.toLowerCase():t};return{restrict:"AE",scope:!0,priority:S.directivePriority(),compile:function(t,h){var d=h.translateValues?h.translateValues:void 0,v=h.translateInterpolation?h.translateInterpolation:void 0,m=h.translateSanitizeStrategy?h.translateSanitizeStrategy:void 0,$=t[0].outerHTML.match(/translate-value-+/i),y="^(.*)("+L.startSymbol()+".*"+L.endSymbol()+")(.*)",b="^(.*)"+L.startSymbol()+"(.*)"+L.endSymbol()+"(.*)";return function(r,l,u){r.interpolateParams={},r.preText="",r.postText="",r.translateNamespace=function t(e){if(e.translateNamespace)return e.translateNamespace;if(e.$parent)return t(e.$parent)}(r);var i={},s=function(t){if(angular.isFunction(s._unwatchOld)&&(s._unwatchOld(),s._unwatchOld=void 0),angular.equals(t,"")||!angular.isDefined(t)){var e=function(){return this.toString().replace(/^\s+|\s+$/g,"")}.apply(l.text()),n=e.match(y);if(angular.isArray(n)){r.preText=n[1],r.postText=n[3],i.translate=L(n[2])(r.$parent);var a=e.match(b);angular.isArray(a)&&a[2]&&a[2].length&&(s._unwatchOld=r.$watch(a[2],function(t){i.translate=t,c()}))}else i.translate=e||void 0}else i.translate=t;c()},t=function(e){u.$observe(e,function(t){i[e]=t,c()})};!function(t,e,n){if(e.translateValues&&angular.extend(t,w(e.translateValues)(r.$parent)),$)for(var a in n)Object.prototype.hasOwnProperty.call(e,a)&&"translateValue"===a.substr(0,14)&&"translateValues"!==a&&(t[N(a.substr(14,1))+a.substr(15)]=n[a])}(r.interpolateParams,u,h);var e=!0;for(var n in u.$observe("translate",function(t){void 0===t?s(""):""===t&&e||(i.translate=t,c()),e=!1}),u)u.hasOwnProperty(n)&&"translateAttr"===n.substr(0,13)&&13<n.length&&t(n);if(u.$observe("translateDefault",function(t){r.defaultText=t,c()}),m&&u.$observe("translateSanitizeStrategy",function(t){r.sanitizeStrategy=w(t)(r.$parent),c()}),d&&u.$observe("translateValues",function(t){t&&r.$parent.$watch(function(){angular.extend(r.interpolateParams,w(t)(r.$parent))})}),$){var a=function(n){u.$observe(n,function(t){var e=N(n.substr(14,1))+n.substr(15);r.interpolateParams[e]=t})};for(var o in u)Object.prototype.hasOwnProperty.call(u,o)&&"translateValue"===o.substr(0,14)&&"translateValues"!==o&&a(o)}var c=function(){for(var t in i)i.hasOwnProperty(t)&&void 0!==i[t]&&f(t,i[t],r,r.interpolateParams,r.defaultText,r.translateNamespace)},f=function(e,t,n,a,r,i){t?(i&&"."===t.charAt(0)&&(t=i+t),S(t,a,v,r,n.translateLanguage,n.sanitizeStrategy).then(function(t){g(t,n,!0,e)},function(t){g(t,n,!1,e)})):g(t,n,!1,e)},g=function(t,e,n,a){if(n||void 0!==e.defaultText&&(t=e.defaultText),"translate"===a){(n||!n&&!S.isKeepContent()&&void 0===u.translateKeepContent)&&l.empty().append(e.preText+t+e.postText);var r=S.isPostCompilingEnabled(),i=void 0!==h.translateCompile,s=i&&"false"!==h.translateCompile;(r&&!i||s)&&j(l.contents())(e)}else{var o=u.$attr[a];"data-"===o.substr(0,5)&&(o=o.substr(5)),o=o.substr(15),l.attr(o,t)}};(d||$||u.translateDefault)&&r.$watch("interpolateParams",c,!0),r.$on("translateLanguageChanged",c);var p=C.$on("$translateChangeSuccess",c);l.text().length?u.translate?s(u.translate):s(""):u.translate&&s(u.translate),c(),r.$on("$destroy",p)}}}}function r(u,c){"use strict";return{restrict:"A",priority:u.directivePriority(),link:function(n,a,r){var i,s,o,l={},t=function(){angular.forEach(i,function(t,e){t&&(l[e]=!0,n.translateNamespace&&"."===t.charAt(0)&&(t=n.translateNamespace+t),u(t,s,r.translateInterpolation,void 0,n.translateLanguage,o).then(function(t){a.attr(e,t)},function(t){a.attr(e,t)}))}),angular.forEach(l,function(t,e){i[e]||(a.removeAttr(e),delete l[e])})};f(n,r.translateAttr,function(t){i=t},t),f(n,r.translateValues,function(t){s=t},t),f(n,r.translateSanitizeStrategy,function(t){o=t},t),r.translateValues&&n.$watch(r.translateValues,t,!0),n.$on("translateLanguageChanged",t);var e=c.$on("$translateChangeSuccess",t);t(),n.$on("$destroy",e)}}}function f(t,e,n,a){"use strict";e&&("::"===e.substr(0,2)?e=e.substr(2):t.$watch(e,function(t){n(t),a()},!0),n(t.$eval(e)))}function i(s,o){"use strict";return{compile:function(t){var i=function(t){t.addClass(s.cloakClassName())};return i(t),function(t,e,n){var a=function(t){t.removeClass(s.cloakClassName())}.bind(this,e),r=i.bind(this,e);n.translateCloak&&n.translateCloak.length?(n.$observe("translateCloak",function(t){s(t).then(a,r)}),o.$on("$translateChangeSuccess",function(){s(n.translateCloak).then(a,r)})):s.onReady(a)}}}}function s(){"use strict";return{restrict:"A",scope:!0,compile:function(){return{pre:function(t,e,n){t.translateNamespace=function t(e){if(e.translateNamespace)return e.translateNamespace;if(e.$parent)return t(e.$parent)}(t),t.translateNamespace&&"."===n.translateNamespace.charAt(0)?t.translateNamespace+=n.translateNamespace:t.translateNamespace=n.translateNamespace}}}}}function o(){"use strict";return{restrict:"A",scope:!0,compile:function(){return function(e,t,n){n.$observe("translateLanguage",function(t){e.translateLanguage=t}),e.$watch("translateLanguage",function(){e.$broadcast("translateLanguageChanged")})}}}}function l(i,s){"use strict";var t=function(t,e,n,a){if(!angular.isObject(e)){var r=this||{__SCOPE_IS_NOT_AVAILABLE:"More info at https://github.com/angular/angular.js/commit/8863b9d04c722b278fa93c5d66ad1e578ad6eb1f"};e=i(e)(r)}return s.instant(t,e,n,a)};return s.statefulFilter()&&(t.$stateful=!0),t}function u(t){"use strict";return t("translations")}return t.$inject=["$translate"],e.$inject=["$STORAGE_KEY","$windowProvider","$translateSanitizationProvider","pascalprechtTranslateOverrider"],n.$inject=["$interpolate","$translateSanitization"],a.$inject=["$translate","$interpolate","$compile","$parse","$rootScope"],r.$inject=["$translate","$rootScope"],i.$inject=["$translate","$rootScope"],l.$inject=["$parse","$translate"],u.$inject=["$cacheFactory"],angular.module("pascalprecht.translate",["ng"]).run(t),t.displayName="runTranslate",angular.module("pascalprecht.translate").provider("$translateSanitization",function(){"use strict";var n,a,g,p=null,h=!1,d=!1;(g={sanitize:function(t,e){return"text"===e&&(t=i(t)),t},escape:function(t,e){return"text"===e&&(t=r(t)),t},sanitizeParameters:function(t,e){return"params"===e&&(t=o(t,i)),t},escapeParameters:function(t,e){return"params"===e&&(t=o(t,r)),t},sce:function(t,e,n){return"text"===e?t=s(t):"params"===e&&"filter"!==n&&(t=o(t,r)),t},sceParameters:function(t,e){return"params"===e&&(t=o(t,s)),t}}).escaped=g.escapeParameters,this.addStrategy=function(t,e){return g[t]=e,this},this.removeStrategy=function(t){return delete g[t],this},this.useStrategy=function(t){return h=!0,p=t,this},this.$get=["$injector","$log",function(u,c){var e,f={};return u.has("$sanitize")&&(n=u.get("$sanitize")),u.has("$sce")&&(a=u.get("$sce")),{useStrategy:(e=this,function(t){e.useStrategy(t)}),sanitize:function(t,e,n,a){if(p||h||d||(c.warn("pascalprecht.translate.$translateSanitization: No sanitization strategy has been configured. This can have serious security implications. See http://angular-translate.github.io/docs/#/guide/19_security for details."),d=!0),n||null===n||(n=p),!n)return t;a||(a="service");var r,i,s,o,l=angular.isArray(n)?n:[n];return r=t,i=e,s=a,o=l,angular.forEach(o,function(e){if(angular.isFunction(e))r=e(r,i,s);else if(angular.isFunction(g[e]))r=g[e](r,i,s);else{if(!angular.isString(g[e]))throw new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '"+e+"'");if(!f[g[e]])try{f[g[e]]=u.get(g[e])}catch(t){throw f[g[e]]=function(){},new Error("pascalprecht.translate.$translateSanitization: Unknown sanitization strategy: '"+e+"'")}r=f[g[e]](r,i,s)}}),r}}}];var r=function(t){var e=angular.element("<div></div>");return e.text(t),e.html()},i=function(t){if(!n)throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sanitize service. Either include the ngSanitize module (https://docs.angularjs.org/api/ngSanitize) or use a sanitization strategy which does not depend on $sanitize, such as 'escape'.");return n(t)},s=function(t){if(!a)throw new Error("pascalprecht.translate.$translateSanitization: Error cannot find $sce service.");return a.trustAsHtml(t)},o=function(t,n,a){if(angular.isDate(t))return t;if(angular.isObject(t)){var r=angular.isArray(t)?[]:{};if(a){if(-1<a.indexOf(t))throw new Error("pascalprecht.translate.$translateSanitization: Error cannot interpolate parameter due recursive object")}else a=[];return a.push(t),angular.forEach(t,function(t,e){angular.isFunction(t)||(r[e]=o(t,n,a))}),a.splice(-1,1),r}return angular.isNumber(t)?t:!0===t||!1===t?t:angular.isUndefined(t)||null===t?t:n(t)}}),angular.module("pascalprecht.translate").constant("pascalprechtTranslateOverrider",{}).provider("$translate",e),e.displayName="displayName",angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation",n),n.displayName="$translateDefaultInterpolation",angular.module("pascalprecht.translate").constant("$STORAGE_KEY","NG_TRANSLATE_LANG_KEY"),angular.module("pascalprecht.translate").directive("translate",a),a.displayName="translateDirective",angular.module("pascalprecht.translate").directive("translateAttr",r),r.displayName="translateAttrDirective",angular.module("pascalprecht.translate").directive("translateCloak",i),i.displayName="translateCloakDirective",angular.module("pascalprecht.translate").directive("translateNamespace",s),s.displayName="translateNamespaceDirective",angular.module("pascalprecht.translate").directive("translateLanguage",o),o.displayName="translateLanguageDirective",angular.module("pascalprecht.translate").filter("translate",l),l.displayName="translateFilterFactory",angular.module("pascalprecht.translate").factory("$translationCache",u),u.displayName="$translationCache","pascalprecht.translate"});/*!
 * angular-translate - v2.18.1 - 2018-05-19
 * 
 * Copyright (c) 2018 The angular-translate team, Pascal Precht; Licensed MIT
 */
!function(e,i){"function"==typeof define&&define.amd?define([],function(){return i()}):"object"==typeof module&&module.exports?module.exports=i():i()}(0,function(){function e(n,a){"use strict";return function(r){if(!(r&&(angular.isArray(r.files)||angular.isString(r.prefix)&&angular.isString(r.suffix))))throw new Error("Couldn't load static files, no files and prefix or suffix specified!");r.files||(r.files=[{prefix:r.prefix,suffix:r.suffix}]);for(var e=function(e){if(!e||!angular.isString(e.prefix)||!angular.isString(e.suffix))throw new Error("Couldn't load static file, no prefix or suffix specified!");var i=[e.prefix,r.key,e.suffix].join("");return angular.isObject(r.fileMap)&&r.fileMap[i]&&(i=r.fileMap[i]),a(angular.extend({url:i,method:"GET"},r.$http)).then(function(e){return e.data},function(){return n.reject(r.key)})},i=[],t=r.files.length,f=0;f<t;f++)i.push(e({prefix:r.files[f].prefix,key:r.key,suffix:r.files[f].suffix}));return n.all(i).then(function(e){for(var i=e.length,r={},t=0;t<i;t++)for(var f in e[t])r[f]=e[t][f];return r})}}return e.$inject=["$q","$http"],angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader",e),e.displayName="$translateStaticFilesLoader","pascalprecht.translate"});!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,i;function c(){return e.apply(null,arguments)}function o(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function l(e){return void 0===e}function h(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function d(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function f(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function y(e,t,n,s){return Tt(e,t,n,s,!0).utc()}function g(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function v(e){if(null==e._isValid){var t=g(e),n=i.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function p(e){var t=y(NaN);return null!=e?_(g(t),e):g(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var r=c.momentProperties=[];function w(e,t){var n,s,i;if(l(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),l(t._i)||(e._i=t._i),l(t._f)||(e._f=t._f),l(t._l)||(e._l=t._l),l(t._strict)||(e._strict=t._strict),l(t._tzm)||(e._tzm=t._tzm),l(t._isUTC)||(e._isUTC=t._isUTC),l(t._offset)||(e._offset=t._offset),l(t._pf)||(e._pf=g(t)),l(t._locale)||(e._locale=t._locale),0<r.length)for(n=0;n<r.length;n++)l(i=t[s=r[n]])||(e[s]=i);return e}var t=!1;function M(e){w(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===t&&(t=!0,c.updateOffset(this),t=!1)}function k(e){return e instanceof M||null!=e&&null!=e._isAMomentObject}function S(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function D(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=S(t)),n}function a(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&D(e[s])!==D(t[s]))&&a++;return a+r}function Y(e){!1===c.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function n(i,r){var a=!0;return _(function(){if(null!=c.deprecationHandler&&c.deprecationHandler(null,i),a){for(var e,t=[],n=0;n<arguments.length;n++){if(e="","object"==typeof arguments[n]){for(var s in e+="\n["+n+"] ",arguments[0])e+=s+": "+arguments[0][s]+", ";e=e.slice(0,-2)}else e=arguments[n];t.push(e)}Y(i+"\nArguments: "+Array.prototype.slice.call(t).join("")+"\n"+(new Error).stack),a=!1}return r.apply(this,arguments)},r)}var s,O={};function T(e,t){null!=c.deprecationHandler&&c.deprecationHandler(e,t),O[e]||(Y(t),O[e]=!0)}function b(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function x(e,t){var n,s=_({},e);for(n in t)m(t,n)&&(u(e[n])&&u(t[n])?(s[n]={},_(s[n],e[n]),_(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)m(e,n)&&!m(t,n)&&u(e[n])&&(s[n]=_({},s[n]));return s}function P(e){null!=e&&this.set(e)}c.suppressDeprecationWarnings=!1,c.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};var W={};function C(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}function H(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function R(e){var t,n,s={};for(n in e)m(e,n)&&(t=H(n))&&(s[t]=e[n]);return s}var U={};function F(e,t){U[e]=t}function L(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={};function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(E[e]=i),t&&(E[t[0]]=function(){return L(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=j(t,e.localeData()),V[t]=V[t]||function(s){var e,i,t,r=s.match(N);for(e=0,i=r.length;e<i;e++)E[r[e]]?r[e]=E[r[e]]:r[e]=(t=r[e]).match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");return function(e){var t,n="";for(t=0;t<i;t++)n+=b(r[t])?r[t].call(e,s):r[t];return n}}(t),V[t](e)):e.localeData().invalidDate()}function j(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;0<=n&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,$=/\d{3}/,q=/\d{4}/,J=/[+-]?\d{6}/,B=/\d\d?/,Q=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,oe={};function ue(e,n,s){oe[e]=b(n)?n:function(e,t){return e&&s?s:n}}function le(e,t){return m(oe,e)?oe[e](t._strict,t._locale):new RegExp(he(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function he(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var de={};function ce(e,n){var t,s=n;for("string"==typeof e&&(e=[e]),h(n)&&(s=function(e,t){t[n]=D(e)}),t=0;t<e.length;t++)de[e[t]]=s}function fe(e,i){ce(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var me=0,_e=1,ye=2,ge=3,ve=4,pe=5,we=6,Me=7,ke=8;function Se(e){return De(e)?366:365}function De(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),C("year","y"),F("year",1),ue("Y",se),ue("YY",B,z),ue("YYYY",ee,q),ue("YYYYY",te,J),ue("YYYYYY",te,J),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?c.parseTwoDigitYear(e):D(e)}),ce("YY",function(e,t){t[me]=c.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),c.parseTwoDigitYear=function(e){return D(e)+(68<D(e)?1900:2e3)};var Ye,Oe=Te("FullYear",!0);function Te(t,n){return function(e){return null!=e?(xe(this,t,e),c.updateOffset(this,n),this):be(this,t)}}function be(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function xe(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&De(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?De(e)?29:28:31-s%7%2}Ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),C("month","M"),F("month",8),ue("M",B),ue("MM",B,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[_e]=D(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[_e]=i:g(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ce="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var He="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Re(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=D(t);else if(!h(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Ue(e){return null!=e?(Re(this,e),c.updateOffset(this,!0),this):be(this,"Month")}var Fe=ae;var Le=ae;function Ne(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=y([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=he(s[t]),i[t]=he(i[t]);for(t=0;t<24;t++)r[t]=he(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ge(e){var t;if(e<100&&0<=e){var n=Array.prototype.slice.call(arguments);n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)}else t=new Date(Date.UTC.apply(null,arguments));return t}function Ve(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ve(e,s,i);return a=o<=0?Se(r=e-1)+o:o>Se(e)?(r=e+1,o-Se(e)):(r=e,o),{year:r,dayOfYear:a}}function Ie(e,t,n){var s,i,r=Ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ae(i=e.year()-1,t,n):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var s=Ve(e,t,n),i=Ve(e+1,t,n);return(Se(e)-s+i)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),C("week","w"),C("isoWeek","W"),F("week",5),F("isoWeek",5),ue("w",B),ue("ww",B,z),ue("W",B),ue("WW",B,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=D(e)});function je(e,t){return e.slice(t,7).concat(e.slice(0,t))}I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),C("day","d"),C("weekday","e"),C("isoWeekday","E"),F("day",11),F("weekday",11),F("isoWeekday",11),ue("d",B),ue("e",B),ue("E",B),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:g(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=D(e)});var Ze="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var $e="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var qe=ae;var Je=ae;var Be=ae;function Qe(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=y([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=he(o[t]),u[t]=he(u[t]),l[t]=he(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Xe(){return this.hours()%12||12}function Ke(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function et(e,t){return t._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Xe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+Xe.apply(this)+L(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Xe.apply(this)+L(this.minutes(),2)+L(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+L(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+L(this.minutes(),2)+L(this.seconds(),2)}),Ke("a",!0),Ke("A",!1),C("hour","h"),F("hour",13),ue("a",et),ue("A",et),ue("H",B),ue("h",B),ue("k",B),ue("HH",B,z),ue("hh",B,z),ue("kk",B,z),ue("hmm",Q),ue("hmmss",X),ue("Hmm",Q),ue("Hmmss",X),ce(["H","HH"],ge),ce(["k","kk"],function(e,t,n){var s=D(e);t[ge]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[ge]=D(e),g(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s)),g(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s,2)),t[pe]=D(e.substr(i)),g(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=D(e.substr(0,s)),t[ve]=D(e.substr(s,2)),t[pe]=D(e.substr(i))});var tt,nt=Te("Hours",!0),st={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Ce,monthsShort:He,week:{dow:0,doy:6},weekdays:Ze,weekdaysMin:$e,weekdaysShort:ze,meridiemParse:/[ap]\.?m?\.?/i},it={},rt={};function at(e){return e?e.toLowerCase().replace("_","-"):e}function ot(e){var t=null;if(!it[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=tt._abbr,require("./locale/"+e),ut(t)}catch(e){}return it[e]}function ut(e,t){var n;return e&&((n=l(t)?ht(e):lt(e,t))?tt=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),tt._abbr}function lt(e,t){if(null===t)return delete it[e],null;var n,s=st;if(t.abbr=e,null!=it[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=it[e]._config;else if(null!=t.parentLocale)if(null!=it[t.parentLocale])s=it[t.parentLocale]._config;else{if(null==(n=ot(t.parentLocale)))return rt[t.parentLocale]||(rt[t.parentLocale]=[]),rt[t.parentLocale].push({name:e,config:t}),null;s=n._config}return it[e]=new P(x(s,t)),rt[e]&&rt[e].forEach(function(e){lt(e.name,e.config)}),ut(e),it[e]}function ht(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return tt;if(!o(e)){if(t=ot(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=at(e[r]).split("-")).length,n=(n=at(e[r+1]))?n.split("-"):null;0<t;){if(s=ot(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&a(i,n,!0)>=t-1)break;t--}r++}return tt}(e)}function dt(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[_e]<0||11<n[_e]?_e:n[ye]<1||n[ye]>Pe(n[me],n[_e])?ye:n[ge]<0||24<n[ge]||24===n[ge]&&(0!==n[ve]||0!==n[pe]||0!==n[we])?ge:n[ve]<0||59<n[ve]?ve:n[pe]<0||59<n[pe]?pe:n[we]<0||999<n[we]?we:-1,g(e)._overflowDayOfYear&&(t<me||ye<t)&&(t=ye),g(e)._overflowWeeks&&-1===t&&(t=Me),g(e)._overflowWeekday&&-1===t&&(t=ke),g(e).overflow=t),e}function ct(e,t,n){return null!=e?e:null!=t?t:n}function ft(e){var t,n,s,i,r,a=[];if(!e._d){var o,u;for(o=e,u=new Date(c.now()),s=o._useUTC?[u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()]:[u.getFullYear(),u.getMonth(),u.getDate()],e._w&&null==e._a[ye]&&null==e._a[_e]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ct(t.GG,e._a[me],Ie(bt(),1,4).year),s=ct(t.W,1),((i=ct(t.E,1))<1||7<i)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=Ie(bt(),r,a);n=ct(t.gg,e._a[me],l.year),s=ct(t.w,l.week),null!=t.d?((i=t.d)<0||6<i)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||6<t.e)&&(u=!0)):i=r}s<1||s>Ae(n,r,a)?g(e)._overflowWeeks=!0:null!=u?g(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(r=ct(e._a[me],s[me]),(e._dayOfYear>Se(r)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=Ge(r,0,e._dayOfYear),e._a[_e]=n.getUTCMonth(),e._a[ye]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ge]&&0===e._a[ve]&&0===e._a[pe]&&0===e._a[we]&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o;return e<100&&0<=e?(o=new Date(e+400,t,n,s,i,r,a),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,s,i,r,a),o}).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}var mt=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,yt=/Z|[+-]\d\d(?::?\d\d)?/,gt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],vt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((\-?\d+)/i;function wt(e){var t,n,s,i,r,a,o=e._i,u=mt.exec(o)||_t.exec(o);if(u){for(g(e).iso=!0,t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[1])){i=gt[t][0],s=!1!==gt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=vt.length;t<n;t++)if(vt[t][1].exec(u[3])){r=(u[2]||" ")+vt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!yt.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),Yt(e)}else e._isValid=!1}var Mt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function kt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),He.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}var St={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,s,i=Mt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(i){var r=kt(i[4],i[3],i[2],i[5],i[6],i[7]);if(t=i[1],n=r,s=e,t&&ze.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(g(s).weekdayMismatch=!0,!(s._isValid=!1)))return;e._a=r,e._tzm=function(e,t,n){if(e)return St[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(i[8],i[9],i[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function Yt(e){if(e._f!==c.ISO_8601)if(e._f!==c.RFC_2822){e._a=[],g(e).empty=!0;var t,n,s,i,r,a,o,u,l=""+e._i,h=l.length,d=0;for(s=j(e._f,e._locale).match(N)||[],t=0;t<s.length;t++)i=s[t],(n=(l.match(le(i,e))||[])[0])&&(0<(r=l.substr(0,l.indexOf(n))).length&&g(e).unusedInput.push(r),l=l.slice(l.indexOf(n)+n.length),d+=n.length),E[i]?(n?g(e).empty=!1:g(e).unusedTokens.push(i),a=i,u=e,null!=(o=n)&&m(de,a)&&de[a](o,u._a,u,a)):e._strict&&!n&&g(e).unusedTokens.push(i);g(e).charsLeftOver=h-d,0<l.length&&g(e).unusedInput.push(l),e._a[ge]<=12&&!0===g(e).bigHour&&0<e._a[ge]&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ge]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):(null!=e.isPM&&((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0)),t)}(e._locale,e._a[ge],e._meridiem),ft(e),dt(e)}else Dt(e);else wt(e)}function Ot(e){var t,n,s,i,r=e._i,a=e._f;return e._locale=e._locale||ht(e._l),null===r||void 0===a&&""===r?p({nullInput:!0}):("string"==typeof r&&(e._i=r=e._locale.preparse(r)),k(r)?new M(dt(r)):(d(r)?e._d=r:o(a)?function(e){var t,n,s,i,r;if(0===e._f.length)return g(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<e._f.length;i++)r=0,t=w({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Yt(t),v(t)&&(r+=g(t).charsLeftOver,r+=10*g(t).unusedTokens.length,g(t).score=r,(null==s||r<s)&&(s=r,n=t));_(e,n||t)}(e):a?Yt(e):l(n=(t=e)._i)?t._d=new Date(c.now()):d(n)?t._d=new Date(n.valueOf()):"string"==typeof n?(s=t,null===(i=pt.exec(s._i))?(wt(s),!1===s._isValid&&(delete s._isValid,Dt(s),!1===s._isValid&&(delete s._isValid,c.createFromInputFallback(s)))):s._d=new Date(+i[1])):o(n)?(t._a=f(n.slice(0),function(e){return parseInt(e,10)}),ft(t)):u(n)?function(e){if(!e._d){var t=R(e._i);e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ft(e)}}(t):h(n)?t._d=new Date(n):c.createFromInputFallback(t),v(e)||(e._d=null),e))}function Tt(e,t,n,s,i){var r,a={};return!0!==n&&!1!==n||(s=n,n=void 0),(u(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||o(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=s,(r=new M(dt(Ot(a))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function bt(e,t,n,s){return Tt(e,t,n,s,!1)}c.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),c.ISO_8601=function(){},c.RFC_2822=function(){};var xt=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=bt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:p()}),Pt=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=bt.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:p()});function Wt(e,t){var n,s;if(1===t.length&&o(t[0])&&(t=t[0]),!t.length)return bt();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Ct=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ht(e){var t=R(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||t.isoWeek||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,h=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Ye.call(Ct,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Ct.length;++s)if(e[Ct[s]]){if(n)return!1;parseFloat(e[Ct[s]])!==D(e[Ct[s]])&&(n=!0)}return!0}(t),this._milliseconds=+h+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=ht(),this._bubble()}function Rt(e){return e instanceof Ht}function Ut(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){I(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+L(~~(e/60),2)+n+L(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Nt(re,e)});var Lt=/([\+\-]|\d\d)/gi;function Nt(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Lt)||["-",0,0],i=60*s[1]+D(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Gt(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(k(e)||d(e)?e.valueOf():bt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),c.updateOffset(n,!1),n):bt(e).local()}function Vt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Et(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}c.updateOffset=function(){};var It=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,At=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function jt(e,t){var n,s,i,r=e,a=null;return Rt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:h(e)?(r={},t?r[t]=e:r.milliseconds=e):(a=It.exec(e))?(n="-"===a[1]?-1:1,r={y:0,d:D(a[ye])*n,h:D(a[ge])*n,m:D(a[ve])*n,s:D(a[pe])*n,ms:D(Ut(1e3*a[we]))*n}):(a=At.exec(e))?(n="-"===a[1]?-1:1,r={y:Zt(a[2],n),M:Zt(a[3],n),w:Zt(a[4],n),d:Zt(a[5],n),h:Zt(a[6],n),m:Zt(a[7],n),s:Zt(a[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Gt(t,e),e.isBefore(t)?n=zt(e,t):((n=zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(bt(r.from),bt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ht(r),Rt(e)&&m(e,"_locale")&&(s._locale=e._locale),s}function Zt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function zt(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function $t(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(T(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),qt(this,jt(e="string"==typeof e?+e:e,t),s),this}}function qt(e,t,n,s){var i=t._milliseconds,r=Ut(t._days),a=Ut(t._months);e.isValid()&&(s=null==s||s,a&&Re(e,be(e,"Month")+a*n),r&&xe(e,"Date",be(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&c.updateOffset(e,r||a))}jt.fn=Ht.prototype,jt.invalid=function(){return jt(NaN)};var Jt=$t(1,"add"),Bt=$t(-1,"subtract");function Qt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Xt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=ht(e))&&(this._locale=t),this)}c.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",c.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Kt=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function en(){return this._locale}var tn=126227808e5;function nn(e,t){return(e%t+t)%t}function sn(e,t,n){return e<100&&0<=e?new Date(e+400,t,n)-tn:new Date(e,t,n).valueOf()}function rn(e,t,n){return e<100&&0<=e?Date.UTC(e+400,t,n)-tn:Date.UTC(e,t,n)}function an(e,t){I(0,[e,e.length],0,t)}function on(e,t,n,s,i){var r;return null==e?Ie(this,s,i).year:((r=Ae(e,s,i))<t&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),an("gggg","weekYear"),an("ggggg","weekYear"),an("GGGG","isoWeekYear"),an("GGGGG","isoWeekYear"),C("weekYear","gg"),C("isoWeekYear","GG"),F("weekYear",1),F("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",B,z),ue("gg",B,z),ue("GGGG",ee,q),ue("gggg",ee,q),ue("GGGGG",te,J),ue("ggggg",te,J),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=D(e)}),fe(["gg","GG"],function(e,t,n,s){t[s]=c.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),C("quarter","Q"),F("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[_e]=3*(D(e)-1)}),I("D",["DD",2],"Do","date"),C("date","D"),F("date",9),ue("D",B),ue("DD",B,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ye),ce("Do",function(e,t){t[ye]=D(e.match(B)[0])});var un=Te("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),C("dayOfYear","DDD"),F("dayOfYear",4),ue("DDD",K),ue("DDDD",$),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=D(e)}),I("m",["mm",2],0,"minute"),C("minute","m"),F("minute",14),ue("m",B),ue("mm",B,z),ce(["m","mm"],ve);var ln=Te("Minutes",!1);I("s",["ss",2],0,"second"),C("second","s"),F("second",15),ue("s",B),ue("ss",B,z),ce(["s","ss"],pe);var hn,dn=Te("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),C("millisecond","ms"),F("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,$),hn="SSSS";hn.length<=9;hn+="S")ue(hn,ne);function cn(e,t){t[we]=D(1e3*("0."+e))}for(hn="S";hn.length<=9;hn+="S")ce(hn,cn);var fn=Te("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var mn=M.prototype;function _n(e){return e}mn.add=Jt,mn.calendar=function(e,t){var n=e||bt(),s=Gt(n,this).startOf("day"),i=c.calendarFormat(this,s)||"sameElse",r=t&&(b(t[i])?t[i].call(this,n):t[i]);return this.format(r||this.localeData().calendar(i,this,bt(n)))},mn.clone=function(){return new M(this)},mn.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Gt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=H(t)){case"year":r=Qt(this,s)/12;break;case"month":r=Qt(this,s);break;case"quarter":r=Qt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:S(r)},mn.endOf=function(e){var t;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?rn:sn;switch(e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=36e5-nn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5)-1;break;case"minute":t=this._d.valueOf(),t+=6e4-nn(t,6e4)-1;break;case"second":t=this._d.valueOf(),t+=1e3-nn(t,1e3)-1;break}return this._d.setTime(t),c.updateOffset(this,!0),this},mn.format=function(e){e||(e=this.isUtc()?c.defaultFormatUtc:c.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},mn.from=function(e,t){return this.isValid()&&(k(e)&&e.isValid()||bt(e).isValid())?jt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},mn.fromNow=function(e){return this.from(bt(),e)},mn.to=function(e,t){return this.isValid()&&(k(e)&&e.isValid()||bt(e).isValid())?jt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},mn.toNow=function(e){return this.to(bt(),e)},mn.get=function(e){return b(this[e=H(e)])?this[e]():this},mn.invalidAt=function(){return g(this).overflow},mn.isAfter=function(e,t){var n=k(e)?e:bt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},mn.isBefore=function(e,t){var n=k(e)?e:bt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},mn.isBetween=function(e,t,n,s){var i=k(e)?e:bt(e),r=k(t)?t:bt(t);return!!(this.isValid()&&i.isValid()&&r.isValid())&&("("===(s=s||"()")[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===s[1]?this.isBefore(r,n):!this.isAfter(r,n))},mn.isSame=function(e,t){var n,s=k(e)?e:bt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=H(t)||"millisecond")?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},mn.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},mn.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},mn.isValid=function(){return v(this)},mn.lang=Kt,mn.locale=Xt,mn.localeData=en,mn.max=Pt,mn.min=xt,mn.parsingFlags=function(){return _({},g(this))},mn.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:U[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=R(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(b(this[e=H(e)]))return this[e](t);return this},mn.startOf=function(e){var t;if(void 0===(e=H(e))||"millisecond"===e||!this.isValid())return this;var n=this._isUTC?rn:sn;switch(e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=nn(t+(this._isUTC?0:6e4*this.utcOffset()),36e5);break;case"minute":t=this._d.valueOf(),t-=nn(t,6e4);break;case"second":t=this._d.valueOf(),t-=nn(t,1e3);break}return this._d.setTime(t),c.updateOffset(this,!0),this},mn.subtract=Bt,mn.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},mn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},mn.toDate=function(){return new Date(this.valueOf())},mn.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):b(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},mn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},mn.toJSON=function(){return this.isValid()?this.toISOString():null},mn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},mn.unix=function(){return Math.floor(this.valueOf()/1e3)},mn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},mn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},mn.year=Oe,mn.isLeapYear=function(){return De(this.year())},mn.weekYear=function(e){return on.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},mn.isoWeekYear=function(e){return on.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},mn.quarter=mn.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},mn.month=Ue,mn.daysInMonth=function(){return Pe(this.year(),this.month())},mn.week=mn.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},mn.isoWeek=mn.isoWeeks=function(e){var t=Ie(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},mn.weeksInYear=function(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)},mn.isoWeeksInYear=function(){return Ae(this.year(),1,4)},mn.date=un,mn.day=mn.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},mn.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},mn.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null==e)return this.day()||7;var t,n,s=(t=e,n=this.localeData(),"string"==typeof t?n.weekdaysParse(t)%7||7:isNaN(t)?null:t);return this.day(this.day()%7?s:s-7)},mn.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},mn.hour=mn.hours=nt,mn.minute=mn.minutes=ln,mn.second=mn.seconds=dn,mn.millisecond=mn.milliseconds=fn,mn.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null==e)return this._isUTC?i:Vt(this);if("string"==typeof e){if(null===(e=Nt(re,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Vt(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?qt(this,jt(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,c.updateOffset(this,!0),this._changeInProgress=null)),this},mn.utc=function(e){return this.utcOffset(0,e)},mn.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Vt(this),"m")),this},mn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Nt(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},mn.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?bt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},mn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},mn.isLocal=function(){return!!this.isValid()&&!this._isUTC},mn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},mn.isUtc=Et,mn.isUTC=Et,mn.zoneAbbr=function(){return this._isUTC?"UTC":""},mn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},mn.dates=n("dates accessor is deprecated. Use date instead.",un),mn.months=n("months accessor is deprecated. Use month instead",Ue),mn.years=n("years accessor is deprecated. Use year instead",Oe),mn.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),mn.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e={};if(w(e,this),(e=Ot(e))._a){var t=e._isUTC?y(e._a):bt(e._a);this._isDSTShifted=this.isValid()&&0<a(e._a,t.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var yn=P.prototype;function gn(e,t,n,s){var i=ht(),r=y().set(s,t);return i[n](r,e)}function vn(e,t,n){if(h(e)&&(t=e,e=void 0),e=e||"",null!=t)return gn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=gn(e,s,n,"month");return i}function pn(e,t,n,s){t=("boolean"==typeof e?h(t)&&(n=t,t=void 0):(t=e,e=!1,h(n=t)&&(n=t,t=void 0)),t||"");var i,r=ht(),a=e?r._week.dow:0;if(null!=n)return gn(t,(n+a)%7,s,"day");var o=[];for(i=0;i<7;i++)o[i]=gn(t,(i+a)%7,s,"day");return o}yn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return b(s)?s.call(t,n):s},yn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},yn.invalidDate=function(){return this._invalidDate},yn.ordinal=function(e){return this._ordinal.replace("%d",e)},yn.preparse=_n,yn.postformat=_n,yn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return b(i)?i(e,t,n,s):i.replace(/%d/i,e)},yn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return b(n)?n(t):n.replace(/%s/i,t)},yn.set=function(e){var t,n;for(n in e)b(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},yn.months=function(e,t){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone},yn.monthsShort=function(e,t){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},yn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=y([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=y([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},yn.monthsRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=Le),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},yn.monthsShortRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Fe),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},yn.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},yn.firstDayOfYear=function(){return this._week.doy},yn.firstDayOfWeek=function(){return this._week.dow},yn.weekdays=function(e,t){var n=o(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?je(n,this._week.dow):e?n[e.day()]:n},yn.weekdaysMin=function(e){return!0===e?je(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},yn.weekdaysShort=function(e){return!0===e?je(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},yn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=y([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=y([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},yn.weekdaysRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=qe),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},yn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Je),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},yn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Be),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},yn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},yn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ut("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===D(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),c.lang=n("moment.lang is deprecated. Use moment.locale instead.",ut),c.langData=n("moment.langData is deprecated. Use moment.localeData instead.",ht);var wn=Math.abs;function Mn(e,t,n,s){var i=jt(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function kn(e){return e<0?Math.floor(e):Math.ceil(e)}function Sn(e){return 4800*e/146097}function Dn(e){return 146097*e/4800}function Yn(e){return function(){return this.as(e)}}var On=Yn("ms"),Tn=Yn("s"),bn=Yn("m"),xn=Yn("h"),Pn=Yn("d"),Wn=Yn("w"),Cn=Yn("M"),Hn=Yn("Q"),Rn=Yn("y");function Un(e){return function(){return this.isValid()?this._data[e]:NaN}}var Fn=Un("milliseconds"),Ln=Un("seconds"),Nn=Un("minutes"),Gn=Un("hours"),Vn=Un("days"),En=Un("months"),In=Un("years");var An=Math.round,jn={ss:44,s:45,m:45,h:22,d:26,M:11};var Zn=Math.abs;function zn(e){return(0<e)-(e<0)||+e}function $n(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Zn(this._milliseconds)/1e3,s=Zn(this._days),i=Zn(this._months);t=S((e=S(n/60))/60),n%=60,e%=60;var r=S(i/12),a=i%=12,o=s,u=t,l=e,h=n?n.toFixed(3).replace(/\.?0+$/,""):"",d=this.asSeconds();if(!d)return"P0D";var c=d<0?"-":"",f=zn(this._months)!==zn(d)?"-":"",m=zn(this._days)!==zn(d)?"-":"",_=zn(this._milliseconds)!==zn(d)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||h?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(h?_+h+"S":"")}var qn=Ht.prototype;return qn.isValid=function(){return this._isValid},qn.abs=function(){var e=this._data;return this._milliseconds=wn(this._milliseconds),this._days=wn(this._days),this._months=wn(this._months),e.milliseconds=wn(e.milliseconds),e.seconds=wn(e.seconds),e.minutes=wn(e.minutes),e.hours=wn(e.hours),e.months=wn(e.months),e.years=wn(e.years),this},qn.add=function(e,t){return Mn(this,e,t,1)},qn.subtract=function(e,t){return Mn(this,e,t,-1)},qn.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=H(e))||"quarter"===e||"year"===e)switch(t=this._days+s/864e5,n=this._months+Sn(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Dn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},qn.asMilliseconds=On,qn.asSeconds=Tn,qn.asMinutes=bn,qn.asHours=xn,qn.asDays=Pn,qn.asWeeks=Wn,qn.asMonths=Cn,qn.asQuarters=Hn,qn.asYears=Rn,qn.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*D(this._months/12):NaN},qn._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=r&&0<=a&&0<=o||r<=0&&a<=0&&o<=0||(r+=864e5*kn(Dn(o)+a),o=a=0),u.milliseconds=r%1e3,e=S(r/1e3),u.seconds=e%60,t=S(e/60),u.minutes=t%60,n=S(t/60),u.hours=n%24,o+=i=S(Sn(a+=S(n/24))),a-=kn(Dn(i)),s=S(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},qn.clone=function(){return jt(this)},qn.get=function(e){return e=H(e),this.isValid()?this[e+"s"]():NaN},qn.milliseconds=Fn,qn.seconds=Ln,qn.minutes=Nn,qn.hours=Gn,qn.days=Vn,qn.weeks=function(){return S(this.days()/7)},qn.months=En,qn.years=In,qn.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,s,i,r,a,o,u,l,h,d,c=this.localeData(),f=(n=!e,s=c,i=jt(t=this).abs(),r=An(i.as("s")),a=An(i.as("m")),o=An(i.as("h")),u=An(i.as("d")),l=An(i.as("M")),h=An(i.as("y")),(d=r<=jn.ss&&["s",r]||r<jn.s&&["ss",r]||a<=1&&["m"]||a<jn.m&&["mm",a]||o<=1&&["h"]||o<jn.h&&["hh",o]||u<=1&&["d"]||u<jn.d&&["dd",u]||l<=1&&["M"]||l<jn.M&&["MM",l]||h<=1&&["y"]||["yy",h])[2]=n,d[3]=0<+t,d[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,d));return e&&(f=c.pastFuture(+this,f)),c.postformat(f)},qn.toISOString=$n,qn.toString=$n,qn.toJSON=$n,qn.locale=Xt,qn.localeData=en,qn.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",$n),qn.lang=Kt,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(D(e))}),c.version="2.24.0",e=bt,c.fn=mn,c.min=function(){return Wt("isBefore",[].slice.call(arguments,0))},c.max=function(){return Wt("isAfter",[].slice.call(arguments,0))},c.now=function(){return Date.now?Date.now():+new Date},c.utc=y,c.unix=function(e){return bt(1e3*e)},c.months=function(e,t){return vn(e,t,"months")},c.isDate=d,c.locale=ut,c.invalid=p,c.duration=jt,c.isMoment=k,c.weekdays=function(e,t,n){return pn(e,t,n,"weekdays")},c.parseZone=function(){return bt.apply(null,arguments).parseZone()},c.localeData=ht,c.isDuration=Rt,c.monthsShort=function(e,t){return vn(e,t,"monthsShort")},c.weekdaysMin=function(e,t,n){return pn(e,t,n,"weekdaysMin")},c.defineLocale=lt,c.updateLocale=function(e,t){if(null!=t){var n,s,i=st;null!=(s=ot(e))&&(i=s._config),(n=new P(t=x(i,t))).parentLocale=it[e],it[e]=n,ut(e)}else null!=it[e]&&(null!=it[e].parentLocale?it[e]=it[e].parentLocale:null!=it[e]&&delete it[e]);return it[e]},c.locales=function(){return s(it)},c.weekdaysShort=function(e,t,n){return pn(e,t,n,"weekdaysShort")},c.normalizeUnits=H,c.relativeTimeRounding=function(e){return void 0===e?An:"function"==typeof e&&(An=e,!0)},c.relativeTimeThreshold=function(e,t){return void 0!==jn[e]&&(void 0===t?jn[e]:(jn[e]=t,"s"===e&&(jn.ss=t-1),!0))},c.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},c.prototype=mn,c.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},c});var myMod = angular.module('toolkit', ['pascalprecht.translate']);

/* ================ */
/* === SERVICES === */
/* ================ */

myMod.factory('tkToastService', ['$timeout', function($timeout) {
	var service = {toasts: []};

	/* internals */
	service.done = function(valToast) {
		var idx = service.toasts.indexOf(valToast);
		service.toasts.splice(idx,1);
	};

	service.show = function(valType, valMessage, valDetails) {
		var toast = {type: valType, msg: valMessage, details: valDetails};
		service.toasts.push(toast);
		$timeout(service.done,4000,true,toast);
		return toast;
	};
	  
	/* api */
	service.info = function(messageText, detailTexts) {
		return service.show('info', messageText, detailTexts);
	};

	service.error = function(messageText, detailTexts) {
		return service.show('error', messageText, detailTexts);
	};	  
	  
	return service;
}]);

myMod.factory('tkUserService', ['$timeout', '$window', function($timeout, $window) {
	var service = {};
	service.key = 'tklogindata';
	service.data = {user: null, pass: null, auth: null};
	
	service.login = function(valUser, valPass) {
		service.data.user = valUser;
		service.data.pass = valPass;
		service.data.auth = "Basic " + btoa(valUser + ':' + valPass);
		$window.localStorage.setItem(service.key, JSON.stringify(service.data));
	};

	service.clear = function() {
		service.data.user = null;
		service.data.pass = null;
		service.data.auth = null;
		$window.localStorage.removeItem(service.key);
	};

	var dingens = JSON.parse($window.localStorage.getItem(service.key));
	if(dingens && dingens.user && dingens.pass && dingens.auth) {
		service.data.user = dingens.user;
		service.data.pass = dingens.pass;
		service.data.auth = dingens.auth;
	}

	return service;
}]);

myMod.factory('tkInterceptorService', function($q, $translate, $rootRouter, tkConfig, tkToastService, tkUserService) {
	var service = {state: {counter: 0}};
	
	service.request = function(config) {
		service.state.counter++;
		if(tkUserService.data.auth) config.headers['Authorization'] = tkUserService.data.auth;
		return config;
    };
    
    service.response = function(response) {
    	service.state.counter--;
    	return response;
    };
    
    service.responseError = function(rejection) {
    	service.state.counter--;

    	if(rejection.status <= 0) {
    		$translate('ERROR.NETWORK').then(tkToastService.error, tkToastService.error);
    	}
    	else if(rejection.data && rejection.data.key) {
    		$translate('ERROR.' + rejection.data.key, rejection.data.params).then(
    				(ok) => service.onTranslation(rejection, ok),
    				(nok) => {service.onTranslation(rejection, nok)}
    		);
    	}
    	else {
    		tkToastService.error(rejection.status + " - " + rejection.statusText);	
    	}
    	
    	if(401 == rejection.status) {
    		tkUserService.clear();
    		$rootRouter.navigate(tkConfig.authRouteLogin);
    	}

    	return $q.reject(rejection);
    }

    // not required atm
    // service.requestError = function(rejection) { return $q.reject(rejection); };
    
    service.onTranslation = function(rejection, translation) {
		var details = [];
		if(rejection.data.details) {
			rejection.data.details.forEach(function(detail) {
				details.push($translate.instant('ERROR.DETAIL.' + detail.key, detail.params));
			});
		}
		tkToastService.error(translation, details);
    };    

	return service;
});


/* ================== */
/* === DIRECTIVES === */
/* ================== */

myMod.directive('tkLoading', function(tkInterceptorService) {
	return {
		restrict: 'A',
	    multiElement: true,
	    link: function(scope, element, attr) {
			element.addClass('is-hidden');
	    	scope.state = tkInterceptorService.state;
	    	scope.$watch('state.counter', function(value) {
	    		element[scope.state.counter == 0 ? 'addClass' : 'removeClass']('is-hidden');
	    	});
	    }
	};
});

myMod.directive('tkLoadingNot', function(tkInterceptorService) {
	return {
		restrict: 'A',
	    multiElement: true,
	    link: function(scope, element, attr) {
	    	scope.state = tkInterceptorService.state;
	    	scope.$watch('state.counter', function(value) {
	    		element[scope.state.counter != 0 ? 'addClass' : 'removeClass']('is-hidden');
	    	});
	    }
	};
});


/* ================== */
/* === COMPONENTS === */
/* ================== */

myMod.component('tkToasts', {
	  template: '<tk-toast ng-repeat="toast in $ctrl.toasts" tk-model="toast"></tk-toast>',
	  bindings: { },
	  controller: function(tkToastService) {
		  var ctrl = this;
		  ctrl.toasts = tkToastService.toasts;
	  }
});

myMod.component('tkToast', {
	template: '\
		<div class="notification" ng-class="{\'is-info\': $ctrl.tkModel.type == \'info\', \'is-danger\': $ctrl.tkModel.type == \'error\'}"> \
			<h1 class="subtitle">{{$ctrl.tkModel.msg}}</h1> \
			<div class="content" ng-if="$ctrl.tkModel.details && $ctrl.tkModel.details.length > 0"><ul> \
				<li ng-repeat="detail in $ctrl.tkModel.details">{{detail}}</li> \
			</ul></div> \
		</div>',
	  bindings: { tkModel: '<' },
	  controller: function() {
		  var ctrl = this;
	  }
});

myMod.component('tkLoginButton', {
	template: '\
        <a ng-if="$ctrl.data.user" ng-click="$ctrl.logout()" class="button is-light"><i class="fas fa-sign-out-alt">&nbsp;</i>{{\'LOGIN.OUT\'|translate}} {{$ctrl.data.user}}</a> \
        <a ng-if="!$ctrl.data.user" ng-click="$ctrl.login()" class="button is-light"><i class="fas fa-sign-in-alt">&nbsp;</i>{{\'LOGIN.IN\'|translate}}</a> \
	',
	bindings: {},
	controller: function($rootRouter, tkConfig, tkUserService) {
		var ctrl = this;
		ctrl.data = tkUserService.data;
		ctrl.login = function() {
			$rootRouter.navigate(tkConfig.authRouteLogin);
		};
		ctrl.logout = function() {
			tkUserService.clear();
			$rootRouter.navigate(tkConfig.authRouteAfterLogout);
		};
	}
});

myMod.component('tkLoginForm', {
	template: '\
		<div class="message is-dark"> \
			<div class="message-header"><p>{{\'LOGIN.TITLE\'|translate}}</p></div> \
			<div class="message-body"> \
				<form ng-submit="$ctrl.action()"> \
					<div class="field"> \
						<div class="control has-icons-left has-icons-right"> \
							<input ng-model="$ctrl.user" class="input" type="text" placeholder="{{\'LOGIN.USER\'|translate}}" /> \
							<span class="icon is-small is-left"><i class="fas fa-user"></i></span> \
						</div> \
					</div> \
					<div class="field"> \
						<div class="control has-icons-left has-icons-right"> \
							<input ng-model="$ctrl.pass" class="input" type="password" placeholder="{{\'LOGIN.PASS\'|translate}}" /> \
							<span class="icon is-small is-left"><i class="fas fa-key"></i></span> \
			        	</div> \
					</div> \
					<div class="field"> \
						<div class="control has-text-right"> \
							<button type="submit" class="button is-dark"><i class="fas fa-sign-in-alt">&nbsp;</i>{{\'LOGIN.SUBMIT\'|translate}}</button> \
						</div> \
					</div> \
				</form> \
			</div> \
		</div>',
	bindings: {},
	controller: function($http, $rootRouter, tkUserService, tkConfig) {
		var ctrl = this;
		ctrl.user = '';
		ctrl.pass = '';

		ctrl.$routerOnActivate = function(next, previous) {
			if(previous) {
				ctrl.successPath = '/' + previous.urlPath;
			}
		};
		  
		ctrl.action = function() {
			// Store credentials and probe against a get-ping-url to ensure valid.
			tkUserService.login(ctrl.user, ctrl.pass);
			$http.get(tkConfig.authUrlProbe).then(
				(ok) => {
					if(ctrl.successPath) $rootRouter.navigateByUrl(ctrl.successPath);
					else $rootRouter.navigate(tkConfig.authRouteAfterLogin);
				},
				(err) => {}
			);
		};

		tkUserService.clear();
	}
});



/* ============= */
/* === UTILS === */
/* ============= */

var tkDefaultApp = function() {
	var app = angular.module('app', ['ngComponentRouter', 'pascalprecht.translate', 'ngSanitize', 'toolkit']);

	app.constant('tkConfig', {
		authRouteLogin: ['Login'],  	// Route to the tk-login-form
		authRouteAfterLogin: ['Home'],  // Route after login on unknown previous path
		authRouteAfterLogout: ['Home'], // Route after logout
		authUrlProbe: '/api/probe'		// Called via HTTP-GET to proof basic auth is fine
	});

	app.value('$routerRootComponent', 'app');
	
	app.config(function($locationProvider, $translateProvider, $httpProvider) {
	  $locationProvider.html5Mode(false);
	  $locationProvider.hashPrefix('');
	  $translateProvider.useStaticFilesLoader({prefix: 'i18n/', suffix: '.json'});
	  $translateProvider.preferredLanguage('en');
	  $translateProvider.useSanitizeValueStrategy('sanitize');
	  $httpProvider.interceptors.push('tkInterceptorService');
	});

	return app;
};
