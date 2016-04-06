window.Modernizr=function(e,t,n){function r(e){g.cssText=e}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function o(e,t){for(var r in e){var i=e[r];if(!a(i,"-")&&g[i]!==n)return"pfx"==t?i:!0}return!1}function s(e,t,r){for(var a in e){var o=t[e[a]];if(o!==n)return r===!1?e[a]:i(o,"function")?o.bind(r||t):o}return!1}function c(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+b.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?o(a,t):(a=(e+" "+w.join(r+" ")+r).split(" "),s(a,t,n))}var l,u,d,f="2.8.3",p={},m=!0,h=t.documentElement,v="modernizr",y=t.createElement(v),g=y.style,E=({}.toString,"Webkit Moz O ms"),b=E.split(" "),w=E.toLowerCase().split(" "),x={svg:"http://www.w3.org/2000/svg"},C={},S=[],T=S.slice,M=function(e,n,r,i){var a,o,s,c,l=t.createElement("div"),u=t.body,d=u||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=i?i[r]:v+(r+1),l.appendChild(s);return a=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),l.id=v,(u?l:d).innerHTML+=a,d.appendChild(l),u||(d.style.background="",d.style.overflow="hidden",c=h.style.overflow,h.style.overflow="hidden",h.appendChild(d)),o=n(l,e),u?l.parentNode.removeChild(l):(d.parentNode.removeChild(d),h.style.overflow=c),!!o},j=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return M("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},N={}.hasOwnProperty;d=i(N,"undefined")||i(N.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return N.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=T.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var a=new i,o=t.apply(a,n.concat(T.call(arguments)));return Object(o)===o?o:a}return t.apply(e,n.concat(T.call(arguments)))};return r}),C.csstransitions=function(){return c("transition")},C.svg=function(){return!!t.createElementNS&&!!t.createElementNS(x.svg,"svg").createSVGRect},C.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==x.svg};for(var O in C)d(C,O)&&(u=O.toLowerCase(),p[u]=C[O](),S.push((p[u]?"":"no-")+u));return p.addTest=function(e,t){if("object"==typeof e)for(var r in e)d(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(h.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),y=l=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=y[e[h]];return t||(t={},v++,e[h]=v,y[v]=t),t}function a(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=i(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||p.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function o(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||i(e);for(var a=n.frag.cloneNode(),o=0,s=r(),c=s.length;c>o;o++)a.createElement(s[o]);return a}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function c(e){e||(e=t);var r=i(e);return g.shivCSS&&!l&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||s(e,r),e}var l,u,d="3.7.0",f=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var g={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:u,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:c,createElement:a,createDocumentFragment:o};e.html5=g,c(t)}(this,t),p._version=f,p._domPrefixes=w,p._cssomPrefixes=b,p.mq=j,p.testProp=function(e){return o([e])},p.testAllProps=c,p.testStyles=M,h.className=h.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+S.join(" "):""),p}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==v.call(e)}function i(e){return"string"==typeof e}function a(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=y.shift();g=1,e?e.t?m(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):g=0}function c(e,n,r,i,a,c,l){function u(t){if(!p&&o(d.readyState)&&(E.r=p=1,!g&&s(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&m(function(){w.removeChild(d)},50);for(var r in M[n])M[n].hasOwnProperty(r)&&M[n][r].onload()}}var l=l||f.errorTimeout,d=t.createElement(e),p=0,v=0,E={t:r,s:n,e:a,a:c,x:l};1===M[n]&&(v=1,M[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,v)},y.splice(i,0,E),"img"!=e&&(v||2===M[n]?(w.insertBefore(d,b?null:h),m(u,l)):M[n].push(d))}function l(e,t,n,r,a){return g=0,t=t||"j",i(e)?c("c"==t?C:x,e,t,this.i++,n,r,a):(y.splice(this.i++,0,e),1==y.length&&s()),this}function u(){var e=f;return e.loader={load:l,i:0},e}var d,f,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],v={}.toString,y=[],g=0,E="MozAppearance"in p.style,b=E&&!!t.createRange().compareNode,w=b?p:h.parentNode,p=e.opera&&"[object Opera]"==v.call(e.opera),p=!!t.attachEvent&&!p,x=E?"object":p?"script":"img",C=p?"script":x,S=Array.isArray||function(e){return"[object Array]"==v.call(e)},T=[],M={},j={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,r,e=e.split("!"),i=T.length,a=e.pop(),o=e.length,a={url:a,origUrl:a,prefixes:e};for(n=0;o>n;n++)r=e[n].split("="),(t=j[r.shift()])&&(a=t(a,r));for(n=0;i>n;n++)a=T[n](a);return a}function o(e,i,a,o,s){var c=t(e),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(i&&(i=r(i)?i:i[e]||i[o]||i[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,i,a,o,s):(M[c.url]?c.noexec=!0:M[c.url]=1,a.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(r(i)||r(l))&&a.load(function(){u(),i&&i(c.origUrl,s,o),l&&l(c.origUrl,s,o),M[c.url]=2})))}function s(e,t){function n(e,n){if(e){if(i(e))n||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),o(e,d,t,0,l);else if(Object(e)===e)for(c in s=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(c)&&(!n&&!--s&&(r(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[c])),o(e[c],d,t,c,l))}else!n&&p()}var s,c,l=!!e.test,u=e.load||e.both,d=e.callback||a,f=d,p=e.complete||a;n(l?e.yep:e.nope,!!u),u&&n(u)}var c,l,d=this.yepnope.loader;if(i(e))o(e,0,d,0);else if(S(e))for(c=0;c<e.length;c++)l=e[c],i(l)?o(l,0,d,0):S(l)?f(l):Object(l)===l&&s(l,d);else Object(e)===e&&s(e,d)},f.addPrefix=function(e,t){j[e]=t},f.addFilter=function(e){T.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,r,i,c,l){var u,d,p=t.createElement("script"),i=i||f.errorTimeout;p.src=e;for(d in r)p.setAttribute(d,r[d]);n=l?s:n||a,p.onreadystatechange=p.onload=function(){!u&&o(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m(function(){u||(u=1,n(1))},i),c?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,i,o,c){var l,i=t.createElement("link"),n=c?s:n||a;i.href=e,i.rel="stylesheet",i.type="text/css";for(l in r)i.setAttribute(l,r[l]);o||(h.parentNode.insertBefore(i,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},window.matchMedia=window.matchMedia||function(e){"use strict";var t,n=e.documentElement,r=n.firstElementChild||n.firstChild,i=e.createElement("body"),a=e.createElement("div");return a.id="mq-test-1",a.style.cssText="position:absolute;top:-100em",i.style.background="none",i.appendChild(a),function(e){return a.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(i,r),t=42===a.offsetWidth,n.removeChild(i),{matches:t,media:e}}}(document),function(e){"use strict";function t(){w(!0)}var n={};if(e.respond=n,n.update=function(){},n.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var r,i,a,o=e.document,s=o.documentElement,c=[],l=[],u=[],d={},f=30,p=o.getElementsByTagName("head")[0]||s,m=o.getElementsByTagName("base")[0],h=p.getElementsByTagName("link"),v=[],y=function(){for(var t=0;h.length>t;t++){var n=h[t],r=n.href,i=n.media,a=n.rel&&"stylesheet"===n.rel.toLowerCase();r&&a&&!d[r]&&(n.styleSheet&&n.styleSheet.rawCssText?(E(n.styleSheet.rawCssText,r,i),d[r]=!0):(!/^([a-zA-Z:]*\/\/)/.test(r)&&!m||r.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&v.push({href:r,media:i}))}g()},g=function(){if(v.length){var t=v.shift();x(t.href,function(n){E(n,t.href,t.media),d[t.href]=!0,e.setTimeout(function(){g()},0)})}},E=function(e,t,n){var r=e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),i=r&&r.length||0;t=t.substring(0,t.lastIndexOf("/"));var a=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},o=!i&&n;t.length&&(t+="/"),o&&(i=1);for(var s=0;i>s;s++){var u,d,f,p;o?(u=n,l.push(a(e))):(u=r[s].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,l.push(RegExp.$2&&a(RegExp.$2))),f=u.split(","),p=f.length;for(var m=0;p>m;m++)d=f[m],c.push({media:d.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:l.length-1,hasquery:d.indexOf("(")>-1,minw:d.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:d.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}w()},b=function(){var e,t=o.createElement("div"),n=o.body,r=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=r=o.createElement("body"),n.style.background="none"),n.appendChild(t),s.insertBefore(n,s.firstChild),e=t.offsetWidth,r?s.removeChild(n):n.removeChild(t),e=a=parseFloat(e)},w=function(t){var n="clientWidth",d=s[n],m="CSS1Compat"===o.compatMode&&d||o.body[n]||d,v={},y=h[h.length-1],g=(new Date).getTime();if(t&&r&&f>g-r)return e.clearTimeout(i),void(i=e.setTimeout(w,f));r=g;for(var E in c)if(c.hasOwnProperty(E)){var x=c[E],C=x.minw,S=x.maxw,T=null===C,M=null===S,j="em";C&&(C=parseFloat(C)*(C.indexOf(j)>-1?a||b():1)),S&&(S=parseFloat(S)*(S.indexOf(j)>-1?a||b():1)),x.hasquery&&(T&&M||!(T||m>=C)||!(M||S>=m))||(v[x.media]||(v[x.media]=[]),v[x.media].push(l[x.rules]))}for(var N in u)u.hasOwnProperty(N)&&u[N]&&u[N].parentNode===p&&p.removeChild(u[N]);for(var O in v)if(v.hasOwnProperty(O)){var F=o.createElement("style"),L=v[O].join("\n");F.type="text/css",F.media=O,p.insertBefore(F,y.nextSibling),F.styleSheet?F.styleSheet.cssText=L:F.appendChild(o.createTextNode(L)),u.push(F)}},x=function(e,t){var n=C();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))},C=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}();y(),n.update=y,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this);