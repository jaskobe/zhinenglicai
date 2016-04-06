!
    function(e, t) {
        function n(e) {
            var t = he[e] = {};
            return J.each(e.split(te), function(e, n) {
                t[n] = !0
            }), t
        }
        function i(e, n, i) {
            if (i === t && 1 === e.nodeType) {
                var r = "data-" + n.replace(me, "-$1").toLowerCase();
                if (i = e.getAttribute(r), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : ge.test(i) ? J.parseJSON(i) : i
                    } catch (o) {}
                    J.data(e, n, i)
                } else i = t
            }
            return i
        }
        function r(e) {
            var t;
            for (t in e) if (("data" !== t || !J.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }
        function o() {
            return !1
        }
        function a() {
            return !0
        }
        function s(e) {
            return !e || !e.parentNode || 11 === e.parentNode.nodeType
        }
        function l(e, t) {
            do e = e[t];
            while (e && 1 !== e.nodeType);
            return e
        }
        function u(e, t, n) {
            if (t = t || 0, J.isFunction(t)) return J.grep(e, function(e, i) {
                var r = !! t.call(e, i, e);
                return r === n
            });
            if (t.nodeType) return J.grep(e, function(e, i) {
                return e === t === n
            });
            if ("string" == typeof t) {
                var i = J.grep(e, function(e) {
                    return 1 === e.nodeType
                });
                if (Fe.test(t)) return J.filter(t, i, !n);
                t = J.filter(t, i)
            }
            return J.grep(e, function(e, i) {
                return J.inArray(e, t) >= 0 === n
            })
        }
        function c(e) {
            var t = qe.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement) for (; t.length;) n.createElement(t.pop());
            return n
        }
        function f(e, t) {
            return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
        }
        function d(e, t) {
            if (1 === t.nodeType && J.hasData(e)) {
                var n, i, r, o = J._data(e),
                    a = J._data(t, o),
                    s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s) for (i = 0, r = s[n].length; r > i; i++) J.event.add(t, n, s[n][i])
                }
                a.data && (a.data = J.extend({}, a.data))
            }
        }
        function p(e, t) {
            var n;
            1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), J.support.html5Clone && e.innerHTML && !J.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ye.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text), t.removeAttribute(J.expando))
        }
        function h(e) {
            return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
        }
        function g(e) {
            Ye.test(e.type) && (e.defaultChecked = e.checked)
        }
        function m(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = vt.length; r--;) if (t = vt[r] + n, t in e) return t;
            return i
        }
        function v(e, t) {
            return e = t || e, "none" === J.css(e, "display") || !J.contains(e.ownerDocument, e)
        }
        function y(e, t) {
            for (var n, i, r = [], o = 0, a = e.length; a > o; o++) n = e[o], n.style && (r[o] = J._data(n, "olddisplay"), t ? (r[o] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && v(n) && (r[o] = J._data(n, "olddisplay", C(n.nodeName)))) : (i = nt(n, "display"), r[o] || "none" === i || J._data(n, "olddisplay", i)));
            for (o = 0; a > o; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[o] || "" : "none"));
            return e
        }
        function b(e, t, n) {
            var i = ct.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }
        function x(e, t, n, i) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > r; r += 2)"margin" === n && (o += J.css(e, n + mt[r], !0)), i ? ("content" === n && (o -= parseFloat(nt(e, "padding" + mt[r])) || 0), "margin" !== n && (o -= parseFloat(nt(e, "border" + mt[r] + "Width")) || 0)) : (o += parseFloat(nt(e, "padding" + mt[r])) || 0, "padding" !== n && (o += parseFloat(nt(e, "border" + mt[r] + "Width")) || 0));
            return o
        }
        function w(e, t, n) {
            var i = "width" === t ? e.offsetWidth : e.offsetHeight,
                r = !0,
                o = J.support.boxSizing && "border-box" === J.css(e, "boxSizing");
            if (0 >= i || null == i) {
                if (i = nt(e, t), (0 > i || null == i) && (i = e.style[t]), ft.test(i)) return i;
                r = o && (J.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
            }
            return i + x(e, t, n || (o ? "border" : "content"), r) + "px"
        }
        function C(e) {
            if (pt[e]) return pt[e];
            var t = J("<" + e + ">").appendTo(W.body),
                n = t.css("display");
            return t.remove(), ("none" === n || "" === n) && (it = W.body.appendChild(it || J.extend(W.createElement("iframe"), {
                    frameBorder: 0,
                    width: 0,
                    height: 0
                })), rt && it.createElement || (rt = (it.contentWindow || it.contentDocument).document, rt.write("<!doctype html><html><body>"), rt.close()), t = rt.body.appendChild(rt.createElement(e)), n = nt(t, "display"), W.body.removeChild(it)), pt[e] = n, n
        }
        function T(e, t, n, i) {
            var r;
            if (J.isArray(t)) J.each(t, function(t, r) {
                n || xt.test(e) ? i(e, r) : T(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
            else if (n || "object" !== J.type(t)) i(e, t);
            else for (r in t) T(e + "[" + r + "]", t[r], n, i)
        }
        function S(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r, o, a = t.toLowerCase().split(te),
                    s = 0,
                    l = a.length;
                if (J.isFunction(n)) for (; l > s; s++) i = a[s], o = /^\+/.test(i), o && (i = i.substr(1) || "*"), r = e[i] = e[i] || [], r[o ? "unshift" : "push"](n)
            }
        }
        function E(e, n, i, r, o, a) {
            o = o || n.dataTypes[0], a = a || {}, a[o] = !0;
            for (var s, l = e[o], u = 0, c = l ? l.length : 0, f = e === Ft; c > u && (f || !s); u++) s = l[u](n, i, r), "string" == typeof s && (!f || a[s] ? s = t : (n.dataTypes.unshift(s), s = E(e, n, i, r, s, a)));
            return !f && s || a["*"] || (s = E(e, n, i, r, "*", a)), s
        }
        function k(e, n) {
            var i, r, o = J.ajaxSettings.flatOptions || {};
            for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
            r && J.extend(!0, e, r)
        }
        function N(e, n, i) {
            var r, o, a, s, l = e.contents,
                u = e.dataTypes,
                c = e.responseFields;
            for (o in c) o in i && (n[c[o]] = i[o]);
            for (;
                "*" === u[0];) u.shift(), r === t && (r = e.mimeType || n.getResponseHeader("content-type"));
            if (r) for (o in l) if (l[o] && l[o].test(r)) {
                u.unshift(o);
                break
            }
            if (u[0] in i) a = u[0];
            else {
                for (o in i) {
                    if (!u[0] || e.converters[o + " " + u[0]]) {
                        a = o;
                        break
                    }
                    s || (s = o)
                }
                a = a || s
            }
            return a ? (a !== u[0] && u.unshift(a), i[a]) : void 0
        }
        function A(e, t) {
            var n, i, r, o, a = e.dataTypes.slice(),
                s = a[0],
                l = {},
                u = 0;
            if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), a[1]) for (n in e.converters) l[n.toLowerCase()] = e.converters[n];
            for (; r = a[++u];) if ("*" !== r) {
                if ("*" !== s && s !== r) {
                    if (n = l[s + " " + r] || l["* " + r], !n) for (i in l) if (o = i.split(" "), o[1] === r && (n = l[s + " " + o[0]] || l["* " + o[0]])) {
                        n === !0 ? n = l[i] : l[i] !== !0 && (r = o[0], a.splice(u--, 0, r));
                        break
                    }
                    if (n !== !0) if (n && e["throws"]) t = n(t);
                    else try {
                            t = n(t)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: n ? c : "No conversion from " + s + " to " + r
                            }
                        }
                }
                s = r
            }
            return {
                state: "success",
                data: t
            }
        }
        function j() {
            try {
                return new e.XMLHttpRequest
            } catch (t) {}
        }
        function D() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }
        function M() {
            return setTimeout(function() {
                Ut = t
            }, 0), Ut = J.now()
        }
        function L(e, t) {
            J.each(t, function(t, n) {
                for (var i = (Zt[t] || []).concat(Zt["*"]), r = 0, o = i.length; o > r; r++) if (i[r].call(e, t, n)) return
            })
        }
        function H(e, t, n) {
            var i, r = 0,
                o = Jt.length,
                a = J.Deferred().always(function() {
                    delete s.elem
                }),
                s = function() {
                    for (var t = Ut || M(), n = Math.max(0, l.startTime + l.duration - t), i = 1 - (n / l.duration || 0), r = 0, o = l.tweens.length; o > r; r++) l.tweens[r].run(i);
                    return a.notifyWith(e, [l, i, n]), 1 > i && o ? n : (a.resolveWith(e, [l]), !1)
                },
                l = a.promise({
                    elem: e,
                    props: J.extend({}, t),
                    opts: J.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: Ut || M(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n, i) {
                        var r = J.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                        return l.tweens.push(r), r
                    },
                    stop: function(t) {
                        for (var n = 0, i = t ? l.tweens.length : 0; i > n; n++) l.tweens[n].run(1);
                        return t ? a.resolveWith(e, [l, t]) : a.rejectWith(e, [l, t]), this
                    }
                }),
                u = l.props;
            for (O(u, l.opts.specialEasing); o > r; r++) if (i = Jt[r].call(l, e, u, l.opts)) return i;
            return L(l, u), J.isFunction(l.opts.start) && l.opts.start.call(e, l), J.fx.timer(J.extend(s, {
                anim: l,
                queue: l.opts.queue,
                elem: e
            })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }
        function O(e, t) {
            var n, i, r, o, a;
            for (n in e) if (i = J.camelCase(n), r = t[i], o = e[n], J.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), a = J.cssHooks[i], a && "expand" in a) {
                o = a.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[i] = r
        }
        function P(e, t, n) {
            var i, r, o, a, s, l, u, c, f = this,
                d = e.style,
                p = {},
                h = [],
                g = e.nodeType && v(e);
            n.queue || (u = J._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, c = u.empty.fire, u.empty.fire = function() {
                u.unqueued || c()
            }), u.unqueued++, f.always(function() {
                f.always(function() {
                    u.unqueued--, J.queue(e, "fx").length || u.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === J.css(e, "display") && "none" === J.css(e, "float") && (J.support.inlineBlockNeedsLayout && "inline" !== C(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", J.support.shrinkWrapBlocks || f.done(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (i in t) if (o = t[i], Yt.exec(o)) {
                if (delete t[i], o === (g ? "hide" : "show")) continue;
                h.push(i)
            }
            if (a = h.length) for (s = J._data(e, "fxshow") || J._data(e, "fxshow", {}), g ? J(e).show() : f.done(function() {
                J(e).hide()
            }), f.done(function() {
                var t;
                J.removeData(e, "fxshow", !0);
                for (t in p) J.style(e, t, p[t])
            }), i = 0; a > i; i++) r = h[i], l = f.createTween(r, g ? s[r] : 0), p[r] = s[r] || J.style(e, r), r in s || (s[r] = l.start, g && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
        }
        function F(e, t, n, i, r) {
            return new F.prototype.init(e, t, n, i, r)
        }
        function I(e, t) {
            var n, i = {
                    height: e
                },
                r = 0;
            for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = mt[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }
        function _(e) {
            return J.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
        }
        var q, B, W = e.document,
            R = e.location,
            z = e.navigator,
            $ = e.jQuery,
            X = e.$,
            Q = Array.prototype.push,
            U = Array.prototype.slice,
            V = Array.prototype.indexOf,
            Y = Object.prototype.toString,
            G = Object.prototype.hasOwnProperty,
            K = String.prototype.trim,
            J = function(e, t) {
                return new J.fn.init(e, t, q)
            },
            Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
            ee = /\S/,
            te = /\s+/,
            ne = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ie = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
            re = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            oe = /^[\],:{}\s]*$/,
            ae = /(?:^|:|,)(?:\s*\[)+/g,
            se = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            le = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
            ue = /^-ms-/,
            ce = /-([\da-z])/gi,
            fe = function(e, t) {
                return (t + "").toUpperCase()
            },
            de = function() {
                W.addEventListener ? (W.removeEventListener("DOMContentLoaded", de, !1), J.ready()) : "complete" === W.readyState && (W.detachEvent("onreadystatechange", de), J.ready())
            },
            pe = {};
        J.fn = J.prototype = {
            constructor: J,
            init: function(e, n, i) {
                var r, o, a;
                if (!e) return this;
                if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                if ("string" == typeof e) {
                    if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ie.exec(e), !r || !r[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                    if (r[1]) return n = n instanceof J ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : W, e = J.parseHTML(r[1], a, !0), re.test(r[1]) && J.isPlainObject(n) && this.attr.call(e, n, !0), J.merge(this, e);
                    if (o = W.getElementById(r[2]), o && o.parentNode) {
                        if (o.id !== r[2]) return i.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = W, this.selector = e, this
                }
                return J.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), J.makeArray(e, this))
            },
            selector: "",
            jquery: "1.8.2",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return U.call(this)
            },
            get: function(e) {
                return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
            },
            pushStack: function(e, t, n) {
                var i = J.merge(this.constructor(), e);
                return i.prevObject = this, i.context = this.context, "find" === t ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i
            },
            each: function(e, t) {
                return J.each(this, e, t)
            },
            ready: function(e) {
                return J.ready.promise().done(e), this
            },
            eq: function(e) {
                return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            slice: function() {
                return this.pushStack(U.apply(this, arguments), "slice", U.call(arguments).join(","))
            },
            map: function(e) {
                return this.pushStack(J.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: Q,
            sort: [].sort,
            splice: [].splice
        }, J.fn.init.prototype = J.fn, J.extend = J.fn.extend = function() {
            var e, n, i, r, o, a, s = arguments[0] || {},
                l = 1,
                u = arguments.length,
                c = !1;
            for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || J.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) if (null != (e = arguments[l])) for (n in e) i = s[n], r = e[n], s !== r && (c && r && (J.isPlainObject(r) || (o = J.isArray(r))) ? (o ? (o = !1, a = i && J.isArray(i) ? i : []) : a = i && J.isPlainObject(i) ? i : {}, s[n] = J.extend(c, a, r)) : r !== t && (s[n] = r));
            return s
        }, J.extend({
            noConflict: function(t) {
                return e.$ === J && (e.$ = X), t && e.jQuery === J && (e.jQuery = $), J
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? J.readyWait++ : J.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--J.readyWait : !J.isReady) {
                    if (!W.body) return setTimeout(J.ready, 1);
                    J.isReady = !0, e !== !0 && --J.readyWait > 0 || (B.resolveWith(W, [J]), J.fn.trigger && J(W).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return "function" === J.type(e)
            },
            isArray: Array.isArray ||
            function(e) {
                return "array" === J.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? String(e) : pe[Y.call(e)] || "object"
            },
            isPlainObject: function(e) {
                if (!e || "object" !== J.type(e) || e.nodeType || J.isWindow(e)) return !1;
                try {
                    if (e.constructor && !G.call(e, "constructor") && !G.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (n) {
                    return !1
                }
                var i;
                for (i in e);
                return i === t || G.call(e, i)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            error: function(e) {
                throw new Error(e)
            },
            parseHTML: function(e, t, n) {
                var i;
                return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || W, (i = re.exec(e)) ? [t.createElement(i[1])] : (i = J.buildFragment([e], t, n ? null : []), J.merge([], (i.cacheable ? J.clone(i.fragment) : i.fragment).childNodes))) : null
            },
            parseJSON: function(t) {
                return t && "string" == typeof t ? (t = J.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : oe.test(t.replace(se, "@").replace(le, "]").replace(ae, "")) ? new Function("return " + t)() : void J.error("Invalid JSON: " + t)) : null
            },
            parseXML: function(n) {
                var i, r;
                if (!n || "string" != typeof n) return null;
                try {
                    e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
                } catch (o) {
                    i = t
                }
                return i && i.documentElement && !i.getElementsByTagName("parsererror").length || J.error("Invalid XML: " + n), i
            },
            noop: function() {},
            globalEval: function(t) {
                t && ee.test(t) && (e.execScript ||
                function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(ue, "ms-").replace(ce, fe)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, n, i) {
                var r, o = 0,
                    a = e.length,
                    s = a === t || J.isFunction(e);
                if (i) if (s) {
                    for (r in e) if (n.apply(e[r], i) === !1) break
                } else for (; a > o && n.apply(e[o++], i) !== !1;);
                else if (s) {
                    for (r in e) if (n.call(e[r], r, e[r]) === !1) break
                } else for (; a > o && n.call(e[o], o, e[o++]) !== !1;);
                return e
            },
            trim: K && !K.call("\ufeff\xa0") ?
                function(e) {
                    return null == e ? "" : K.call(e)
                } : function(e) {
                return null == e ? "" : (e + "").replace(ne, "")
            },
            makeArray: function(e, t) {
                var n, i = t || [];
                return null != e && (n = J.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || J.isWindow(e) ? Q.call(i, e) : J.merge(i, e)), i
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (V) return V.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++) if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, n) {
                var i = n.length,
                    r = e.length,
                    o = 0;
                if ("number" == typeof i) for (; i > o; o++) e[r++] = n[o];
                else for (; n[o] !== t;) e[r++] = n[o++];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                var i, r = [],
                    o = 0,
                    a = e.length;
                for (n = !! n; a > o; o++) i = !! t(e[o], o), n !== i && r.push(e[o]);
                return r
            },
            map: function(e, n, i) {
                var r, o, a = [],
                    s = 0,
                    l = e.length,
                    u = e instanceof J || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || J.isArray(e));
                if (u) for (; l > s; s++) r = n(e[s], s, i), null != r && (a[a.length] = r);
                else for (o in e) r = n(e[o], o, i), null != r && (a[a.length] = r);
                return a.concat.apply([], a)
            },
            guid: 1,
            proxy: function(e, n) {
                var i, r, o;
                return "string" == typeof n && (i = e[n], n = e, e = i), J.isFunction(e) ? (r = U.call(arguments, 2), o = function() {
                    return e.apply(n, r.concat(U.call(arguments)))
                }, o.guid = e.guid = e.guid || J.guid++, o) : t
            },
            access: function(e, n, i, r, o, a, s) {
                var l, u = null == i,
                    c = 0,
                    f = e.length;
                if (i && "object" == typeof i) {
                    for (c in i) J.access(e, n, c, i[c], 1, a, r);
                    o = 1
                } else if (r !== t) {
                    if (l = s === t && J.isFunction(r), u && (l ? (l = n, n = function(e, t, n) {
                            return l.call(J(e), n)
                        }) : (n.call(e, r), n = null)), n) for (; f > c; c++) n(e[c], i, l ? r.call(e[c], c, n(e[c], i)) : r, s);
                    o = 1
                }
                return o ? e : u ? n.call(e) : f ? n(e[0], i) : a
            },
            now: function() {
                return (new Date).getTime()
            }
        }), J.ready.promise = function(t) {
            if (!B) if (B = J.Deferred(), "complete" === W.readyState) setTimeout(J.ready, 1);
            else if (W.addEventListener) W.addEventListener("DOMContentLoaded", de, !1), e.addEventListener("load", J.ready, !1);
            else {
                W.attachEvent("onreadystatechange", de), e.attachEvent("onload", J.ready);
                var n = !1;
                try {
                    n = null == e.frameElement && W.documentElement
                } catch (i) {}
                n && n.doScroll && !
                    function r() {
                        if (!J.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(r, 50)
                            }
                            J.ready()
                        }
                    }()
            }
            return B.promise(t)
        }, J.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
            pe["[object " + t + "]"] = t.toLowerCase()
        }), q = J(W);
        var he = {};
        J.Callbacks = function(e) {
            e = "string" == typeof e ? he[e] || n(e) : J.extend({}, e);
            var i, r, o, a, s, l, u = [],
                c = !e.once && [],
                f = function(t) {
                    for (i = e.memory && t, r = !0, l = a || 0, a = 0, s = u.length, o = !0; u && s > l; l++) if (u[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        i = !1;
                        break
                    }
                    o = !1, u && (c ? c.length && f(c.shift()) : i ? u = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (u) {
                            var t = u.length;
                            !
                                function n(t) {
                                    J.each(t, function(t, i) {
                                        var r = J.type(i);
                                        "function" !== r || e.unique && d.has(i) ? i && i.length && "string" !== r && n(i) : u.push(i)
                                    })
                                }(arguments), o ? s = u.length : i && (a = t, f(i))
                        }
                        return this
                    },
                    remove: function() {
                        return u && J.each(arguments, function(e, t) {
                            for (var n;
                                 (n = J.inArray(t, u, n)) > -1;) u.splice(n, 1), o && (s >= n && s--, l >= n && l--)
                        }), this
                    },
                    has: function(e) {
                        return J.inArray(e, u) > -1
                    },
                    empty: function() {
                        return u = [], this
                    },
                    disable: function() {
                        return u = c = i = t, this
                    },
                    disabled: function() {
                        return !u
                    },
                    lock: function() {
                        return c = t, i || d.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, t) {
                        return t = t || [], t = [e, t.slice ? t.slice() : t], !u || r && !c || (o ? c.push(t) : f(t)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return d
        }, J.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", J.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return J.Deferred(function(n) {
                                J.each(t, function(t, i) {
                                    var o = i[0],
                                        a = e[t];
                                    r[i[1]](J.isFunction(a) ?
                                        function() {
                                            var e = a.apply(this, arguments);
                                            e && J.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n : this, [e])
                                        } : n[o])
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? J.extend(e, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, J.each(t, function(e, o) {
                    var a = o[2],
                        s = o[3];
                    i[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = a.fire, r[o[0] + "With"] = a.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0,
                    o = U.call(arguments),
                    a = o.length,
                    s = 1 !== a || e && J.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : J.Deferred(),
                    u = function(e, n, i) {
                        return function(r) {
                            n[e] = this, i[e] = arguments.length > 1 ? U.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1) for (t = new Array(a), n = new Array(a), i = new Array(a); a > r; r++) o[r] && J.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --s;
                return s || l.resolveWith(i, o), l.promise()
            }
        }), J.support = function() {
            var t, n, i, r, o, a, s, l, u, c, f, d = W.createElement("div");
            if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), i = d.getElementsByTagName("a")[0], i.style.cssText = "top:1px;float:left;opacity:.5", !n || !n.length) return {};
            r = W.createElement("select"), o = r.appendChild(W.createElement("option")), a = d.getElementsByTagName("input")[0], t = {
                leadingWhitespace: 3 === d.firstChild.nodeType,
                tbody: !d.getElementsByTagName("tbody").length,
                htmlSerialize: !! d.getElementsByTagName("link").length,
                style: /top/.test(i.getAttribute("style")),
                hrefNormalized: "/a" === i.getAttribute("href"),
                opacity: /^0.5/.test(i.style.opacity),
                cssFloat: !! i.style.cssFloat,
                checkOn: "on" === a.value,
                optSelected: o.selected,
                getSetAttribute: "t" !== d.className,
                enctype: !! W.createElement("form").enctype,
                html5Clone: "<:nav></:nav>" !== W.createElement("nav").cloneNode(!0).outerHTML,
                boxModel: "CSS1Compat" === W.compatMode,
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                boxSizingReliable: !0,
                pixelPosition: !1
            }, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, r.disabled = !0, t.optDisabled = !o.disabled;
            try {
                delete d.test
            } catch (p) {
                t.deleteExpando = !1
            }
            if (!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", f = function() {
                    t.noCloneEvent = !1
                }), d.cloneNode(!0).fireEvent("onclick"), d.detachEvent("onclick", f)), a = W.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), d.appendChild(a), s = W.createDocumentFragment(), s.appendChild(d.lastChild), t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = a.checked, s.removeChild(a), s.appendChild(d), d.attachEvent) for (u in {
                submit: !0,
                change: !0,
                focusin: !0
            }) l = "on" + u, c = l in d, c || (d.setAttribute(l, "return;"), c = "function" == typeof d[l]), t[u + "Bubbles"] = c;
            return J(function() {
                var n, i, r, o, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                    s = W.getElementsByTagName("body")[0];
                s && (n = W.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", s.insertBefore(n, s.firstChild), i = W.createElement("div"), n.appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = i.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === r[0].offsetHeight, i.innerHTML = "", i.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === i.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || {
                        width: "4px"
                    }).width, o = W.createElement("div"), o.style.cssText = i.style.cssText = a, o.style.marginRight = o.style.width = "0", i.style.width = "1px", i.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), "undefined" != typeof i.style.zoom && (i.innerHTML = "", i.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === i.offsetWidth, i.style.display = "block", i.style.overflow = "visible", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== i.offsetWidth, n.style.zoom = 1), s.removeChild(n), n = i = r = o = null)
            }), s.removeChild(d), n = i = r = o = a = s = d = null, t
        }();
        var ge = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            me = /([A-Z])/g;
        J.extend({
            cache: {},
            deletedIds: [],
            uuid: 0,
            expando: "jQuery" + (J.fn.jquery + Math.random()).replace(/\D/g, ""),
            noData: {
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
                applet: !0
            },
            hasData: function(e) {
                return e = e.nodeType ? J.cache[e[J.expando]] : e[J.expando], !! e && !r(e)
            },
            data: function(e, n, i, r) {
                if (J.acceptData(e)) {
                    var o, a, s = J.expando,
                        l = "string" == typeof n,
                        u = e.nodeType,
                        c = u ? J.cache : e,
                        f = u ? e[s] : e[s] && s;
                    if (f && c[f] && (r || c[f].data) || !l || i !== t) return f || (u ? e[s] = f = J.deletedIds.pop() || J.guid++ : f = s), c[f] || (c[f] = {}, u || (c[f].toJSON = J.noop)), ("object" == typeof n || "function" == typeof n) && (r ? c[f] = J.extend(c[f], n) : c[f].data = J.extend(c[f].data, n)), o = c[f], r || (o.data || (o.data = {}), o = o.data), i !== t && (o[J.camelCase(n)] = i), l ? (a = o[n], null == a && (a = o[J.camelCase(n)])) : a = o, a
                }
            },
            removeData: function(e, t, n) {
                if (J.acceptData(e)) {
                    var i, o, a, s = e.nodeType,
                        l = s ? J.cache : e,
                        u = s ? e[J.expando] : J.expando;
                    if (l[u]) {
                        if (t && (i = n ? l[u] : l[u].data)) {
                            J.isArray(t) || (t in i ? t = [t] : (t = J.camelCase(t), t = t in i ? [t] : t.split(" ")));
                            for (o = 0, a = t.length; a > o; o++) delete i[t[o]];
                            if (!(n ? r : J.isEmptyObject)(i)) return
                        }(n || (delete l[u].data, r(l[u]))) && (s ? J.cleanData([e], !0) : J.support.deleteExpando || l != l.window ? delete l[u] : l[u] = null)
                    }
                }
            },
            _data: function(e, t, n) {
                return J.data(e, t, n, !0)
            },
            acceptData: function(e) {
                var t = e.nodeName && J.noData[e.nodeName.toLowerCase()];
                return !t || t !== !0 && e.getAttribute("classid") === t
            }
        }), J.fn.extend({
            data: function(e, n) {
                var r, o, a, s, l, u = this[0],
                    c = 0,
                    f = null;
                if (e === t) {
                    if (this.length && (f = J.data(u), 1 === u.nodeType && !J._data(u, "parsedAttrs"))) {
                        for (a = u.attributes, l = a.length; l > c; c++) s = a[c].name, s.indexOf("data-") || (s = J.camelCase(s.substring(5)), i(u, s, f[s]));
                        J._data(u, "parsedAttrs", !0)
                    }
                    return f
                }
                return "object" == typeof e ? this.each(function() {
                    J.data(this, e)
                }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", o = r[1] + "!", J.access(this, function(n) {
                    return n === t ? (f = this.triggerHandler("getData" + o, [r[0]]), f === t && u && (f = J.data(u, e), f = i(u, e, f)), f === t && r[1] ? this.data(r[0]) : f) : (r[1] = n, void this.each(function() {
                        var t = J(this);
                        t.triggerHandler("setData" + o, r), J.data(this, e, n), t.triggerHandler("changeData" + o, r)
                    }))
                }, null, n, arguments.length > 1, null, !1))
            },
            removeData: function(e) {
                return this.each(function() {
                    J.removeData(this, e)
                })
            }
        }), J.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = J._data(e, t), n && (!i || J.isArray(n) ? i = J._data(e, t, J.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = J.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = J._queueHooks(e, t),
                    a = function() {
                        J.dequeue(e, t)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return J._data(e, n) || J._data(e, n, {
                        empty: J.Callbacks("once memory").add(function() {
                            J.removeData(e, t + "queue", !0), J.removeData(e, n, !0)
                        })
                    })
            }
        }), J.fn.extend({
            queue: function(e, n) {
                var i = 2;
                return "string" != typeof e && (n = e, e = "fx", i--), arguments.length < i ? J.queue(this[0], e) : n === t ? this : this.each(function() {
                    var t = J.queue(this, e, n);
                    J._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && J.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    J.dequeue(this, e)
                })
            },
            delay: function(e, t) {
                return e = J.fx ? J.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, n) {
                var i, r = 1,
                    o = J.Deferred(),
                    a = this,
                    s = this.length,
                    l = function() {
                        --r || o.resolveWith(a, [a])
                    };
                for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) i = J._data(a[s], e + "queueHooks"), i && i.empty && (r++, i.empty.add(l));
                return l(), o.promise(n)
            }
        });
        var ve, ye, be, xe = /[\t\r\n]/g,
            we = /\r/g,
            Ce = /^(?:button|input)$/i,
            Te = /^(?:button|input|object|select|textarea)$/i,
            Se = /^a(?:rea|)$/i,
            Ee = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            ke = J.support.getSetAttribute;
        J.fn.extend({
            attr: function(e, t) {
                return J.access(this, J.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    J.removeAttr(this, e)
                })
            },
            prop: function(e, t) {
                return J.access(this, J.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = J.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = t, delete this[e]
                    } catch (n) {}
                })
            },
            addClass: function(e) {
                var t, n, i, r, o, a, s;
                if (J.isFunction(e)) return this.each(function(t) {
                    J(this).addClass(e.call(this, t, this.className))
                });
                if (e && "string" == typeof e) for (t = e.split(te), n = 0, i = this.length; i > n; n++) if (r = this[n], 1 === r.nodeType) if (r.className || 1 !== t.length) {
                    for (o = " " + r.className + " ", a = 0, s = t.length; s > a; a++) o.indexOf(" " + t[a] + " ") < 0 && (o += t[a] + " ");
                    r.className = J.trim(o)
                } else r.className = e;
                return this
            },
            removeClass: function(e) {
                var n, i, r, o, a, s, l;
                if (J.isFunction(e)) return this.each(function(t) {
                    J(this).removeClass(e.call(this, t, this.className))
                });
                if (e && "string" == typeof e || e === t) for (n = (e || "").split(te), s = 0, l = this.length; l > s; s++) if (r = this[s], 1 === r.nodeType && r.className) {
                    for (i = (" " + r.className + " ").replace(xe, " "), o = 0, a = n.length; a > o; o++) for (; i.indexOf(" " + n[o] + " ") >= 0;) i = i.replace(" " + n[o] + " ", " ");
                    r.className = e ? J.trim(i) : ""
                }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e,
                    i = "boolean" == typeof t;
                return J.isFunction(e) ? this.each(function(n) {
                    J(this).toggleClass(e.call(this, n, this.className, t), t)
                }) : this.each(function() {
                    if ("string" === n) for (var r, o = 0, a = J(this), s = t, l = e.split(te); r = l[o++];) s = i ? s : !a.hasClass(r), a[s ? "addClass" : "removeClass"](r);
                    else("undefined" === n || "boolean" === n) && (this.className && J._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : J._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(xe, " ").indexOf(t) >= 0) return !0;
                return !1
            },
            val: function(e) {
                var n, i, r, o = this[0]; {
                    if (arguments.length) return r = J.isFunction(e), this.each(function(i) {
                        var o, a = J(this);
                        1 === this.nodeType && (o = r ? e.call(this, i, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : J.isArray(o) && (o = J.map(o, function(e) {
                            return null == e ? "" : e + ""
                        })), n = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                    });
                    if (o) return n = J.valHooks[o.type] || J.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (i = n.get(o, "value")) !== t ? i : (i = o.value, "string" == typeof i ? i.replace(we, "") : null == i ? "" : i)
                }
            }
        }), J.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, i, r, o = e.selectedIndex,
                            a = [],
                            s = e.options,
                            l = "select-one" === e.type;
                        if (0 > o) return null;
                        for (n = l ? o : 0, i = l ? o + 1 : s.length; i > n; n++) if (r = s[n], r.selected && (J.support.optDisabled ? !r.disabled : null === r.getAttribute("disabled")) && (!r.parentNode.disabled || !J.nodeName(r.parentNode, "optgroup"))) {
                            if (t = J(r).val(), l) return t;
                            a.push(t)
                        }
                        return l && !a.length && s.length ? J(s[o]).val() : a
                    },
                    set: function(e, t) {
                        var n = J.makeArray(t);
                        return J(e).find("option").each(function() {
                            this.selected = J.inArray(J(this).val(), n) >= 0
                        }), n.length || (e.selectedIndex = -1), n
                    }
                }
            },
            attrFn: {},
            attr: function(e, n, i, r) {
                var o, a, s, l = e.nodeType;
                if (e && 3 !== l && 8 !== l && 2 !== l) return r && J.isFunction(J.fn[n]) ? J(e)[n](i) : "undefined" == typeof e.getAttribute ? J.prop(e, n, i) : (s = 1 !== l || !J.isXMLDoc(e), s && (n = n.toLowerCase(), a = J.attrHooks[n] || (Ee.test(n) ? ye : ve)), i !== t ? null === i ? void J.removeAttr(e, n) : a && "set" in a && s && (o = a.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""), i) : a && "get" in a && s && null !== (o = a.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o))
            },
            removeAttr: function(e, t) {
                var n, i, r, o, a = 0;
                if (t && 1 === e.nodeType) for (i = t.split(te); a < i.length; a++) r = i[a], r && (n = J.propFix[r] || r, o = Ee.test(r), o || J.attr(e, r, ""), e.removeAttribute(ke ? r : n), o && n in e && (e[n] = !1))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (Ce.test(e.nodeName) && e.parentNode) J.error("type property can't be changed");
                        else if (!J.support.radioValue && "radio" === t && J.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                },
                value: {
                    get: function(e, t) {
                        return ve && J.nodeName(e, "button") ? ve.get(e, t) : t in e ? e.value : null
                    },
                    set: function(e, t, n) {
                        return ve && J.nodeName(e, "button") ? ve.set(e, t, n) : void(e.value = t)
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(e, n, i) {
                var r, o, a, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s) return a = 1 !== s || !J.isXMLDoc(e), a && (n = J.propFix[n] || n, o = J.propHooks[n]), i !== t ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get" in o && null !== (r = o.get(e, n)) ? r : e[n]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var n = e.getAttributeNode("tabindex");
                        return n && n.specified ? parseInt(n.value, 10) : Te.test(e.nodeName) || Se.test(e.nodeName) && e.href ? 0 : t
                    }
                }
            }
        }), ye = {
            get: function(e, n) {
                var i, r = J.prop(e, n);
                return r === !0 || "boolean" != typeof r && (i = e.getAttributeNode(n)) && i.nodeValue !== !1 ? n.toLowerCase() : t
            },
            set: function(e, t, n) {
                var i;
                return t === !1 ? J.removeAttr(e, n) : (i = J.propFix[n] || n, i in e && (e[i] = !0), e.setAttribute(n, n.toLowerCase())), n
            }
        }, ke || (be = {
            name: !0,
            id: !0,
            coords: !0
        }, ve = J.valHooks.button = {
            get: function(e, n) {
                var i;
                return i = e.getAttributeNode(n), i && (be[n] ? "" !== i.value : i.specified) ? i.value : t
            },
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                return i || (i = W.createAttribute(n), e.setAttributeNode(i)), i.value = t + ""
            }
        }, J.each(["width", "height"], function(e, t) {
            J.attrHooks[t] = J.extend(J.attrHooks[t], {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            })
        }), J.attrHooks.contenteditable = {
            get: ve.get,
            set: function(e, t, n) {
                "" === t && (t = "false"), ve.set(e, t, n)
            }
        }), J.support.hrefNormalized || J.each(["href", "src", "width", "height"], function(e, n) {
            J.attrHooks[n] = J.extend(J.attrHooks[n], {
                get: function(e) {
                    var i = e.getAttribute(n, 2);
                    return null === i ? t : i
                }
            })
        }), J.support.style || (J.attrHooks.style = {
            get: function(e) {
                return e.style.cssText.toLowerCase() || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }), J.support.optSelected || (J.propHooks.selected = J.extend(J.propHooks.selected, {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        })), J.support.enctype || (J.propFix.enctype = "encoding"), J.support.checkOn || J.each(["radio", "checkbox"], function() {
            J.valHooks[this] = {
                get: function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            }
        }), J.each(["radio", "checkbox"], function() {
            J.valHooks[this] = J.extend(J.valHooks[this], {
                set: function(e, t) {
                    return J.isArray(t) ? e.checked = J.inArray(J(e).val(), t) >= 0 : void 0
                }
            })
        });
        var Ne = /^(?:textarea|input|select)$/i,
            Ae = /^([^\.]*|)(?:\.(.+)|)$/,
            je = /(?:^|\s)hover(\.\S+|)\b/,
            De = /^key/,
            Me = /^(?:mouse|contextmenu)|click/,
            Le = /^(?:focusinfocus|focusoutblur)$/,
            He = function(e) {
                return J.event.special.hover ? e : e.replace(je, "mouseenter$1 mouseleave$1")
            };
        J.event = {
            add: function(e, n, i, r, o) {
                var a, s, l, u, c, f, d, p, h, g, m;
                if (3 !== e.nodeType && 8 !== e.nodeType && n && i && (a = J._data(e))) {
                    for (i.handler && (h = i, i = h.handler, o = h.selector), i.guid || (i.guid = J.guid++), l = a.events, l || (a.events = l = {}), s = a.handle, s || (a.handle = s = function(e) {
                        return "undefined" == typeof J || e && J.event.triggered === e.type ? t : J.event.dispatch.apply(s.elem, arguments)
                    }, s.elem = e), n = J.trim(He(n)).split(" "), u = 0; u < n.length; u++) c = Ae.exec(n[u]) || [], f = c[1], d = (c[2] || "").split(".").sort(), m = J.event.special[f] || {}, f = (o ? m.delegateType : m.bindType) || f, m = J.event.special[f] || {}, p = J.extend({
                        type: f,
                        origType: c[1],
                        data: r,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && J.expr.match.needsContext.test(o),
                        namespace: d.join(".")
                    }, h), g = l[f], g || (g = l[f] = [], g.delegateCount = 0, m.setup && m.setup.call(e, r, d, s) !== !1 || (e.addEventListener ? e.addEventListener(f, s, !1) : e.attachEvent && e.attachEvent("on" + f, s))), m.add && (m.add.call(e, p), p.handler.guid || (p.handler.guid = i.guid)), o ? g.splice(g.delegateCount++, 0, p) : g.push(p), J.event.global[f] = !0;
                    e = null
                }
            },
            global: {},
            remove: function(e, t, n, i, r) {
                var o, a, s, l, u, c, f, d, p, h, g, m = J.hasData(e) && J._data(e);
                if (m && (d = m.events)) {
                    for (t = J.trim(He(t || "")).split(" "), o = 0; o < t.length; o++) if (a = Ae.exec(t[o]) || [], s = l = a[1], u = a[2], s) {
                        for (p = J.event.special[s] || {}, s = (i ? p.delegateType : p.bindType) || s, h = d[s] || [], c = h.length, u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f = 0; f < h.length; f++) g = h[f], !r && l !== g.origType || n && n.guid !== g.guid || u && !u.test(g.namespace) || i && i !== g.selector && ("**" !== i || !g.selector) || (h.splice(f--, 1), g.selector && h.delegateCount--, p.remove && p.remove.call(e, g));
                        0 === h.length && c !== h.length && (p.teardown && p.teardown.call(e, u, m.handle) !== !1 || J.removeEvent(e, s, m.handle), delete d[s])
                    } else for (s in d) J.event.remove(e, s + t[o], n, i, !0);
                    J.isEmptyObject(d) && (delete m.handle, J.removeData(e, "events", !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(n, i, r, o) {
                if (!r || 3 !== r.nodeType && 8 !== r.nodeType) {
                    var a, s, l, u, c, f, d, p, h, g, m = n.type || n,
                        v = [];
                    if (!Le.test(m + J.event.triggered) && (m.indexOf("!") >= 0 && (m = m.slice(0, -1), s = !0), m.indexOf(".") >= 0 && (v = m.split("."), m = v.shift(), v.sort()), r && !J.event.customEvent[m] || J.event.global[m])) if (n = "object" == typeof n ? n[J.expando] ? n : new J.Event(m, n) : new J.Event(m), n.type = m, n.isTrigger = !0, n.exclusive = s, n.namespace = v.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, f = m.indexOf(":") < 0 ? "on" + m : "", r) {
                        if (n.result = t, n.target || (n.target = r), i = null != i ? J.makeArray(i) : [], i.unshift(n), d = J.event.special[m] || {}, !d.trigger || d.trigger.apply(r, i) !== !1) {
                            if (h = [
                                    [r, d.bindType || m]
                                ], !o && !d.noBubble && !J.isWindow(r)) {
                                for (g = d.delegateType || m, u = Le.test(g + m) ? r : r.parentNode, c = r; u; u = u.parentNode) h.push([u, g]), c = u;
                                c === (r.ownerDocument || W) && h.push([c.defaultView || c.parentWindow || e, g])
                            }
                            for (l = 0; l < h.length && !n.isPropagationStopped(); l++) u = h[l][0], n.type = h[l][1], p = (J._data(u, "events") || {})[n.type] && J._data(u, "handle"), p && p.apply(u, i), p = f && u[f], p && J.acceptData(u) && p.apply && p.apply(u, i) === !1 && n.preventDefault();
                            return n.type = m, o || n.isDefaultPrevented() || d._default && d._default.apply(r.ownerDocument, i) !== !1 || "click" === m && J.nodeName(r, "a") || !J.acceptData(r) || f && r[m] && ("focus" !== m && "blur" !== m || 0 !== n.target.offsetWidth) && !J.isWindow(r) && (c = r[f], c && (r[f] = null), J.event.triggered = m, r[m](), J.event.triggered = t, c && (r[f] = c)), n.result
                        }
                    } else {
                        a = J.cache;
                        for (l in a) a[l].events && a[l].events[m] && J.event.trigger(n, i, a[l].handle.elem, !0)
                    }
                }
            },
            dispatch: function(n) {
                n = J.event.fix(n || e.event);
                var i, r, o, a, s, l, u, c, f, d = (J._data(this, "events") || {})[n.type] || [],
                    p = d.delegateCount,
                    h = U.call(arguments),
                    g = !n.exclusive && !n.namespace,
                    m = J.event.special[n.type] || {},
                    v = [];
                if (h[0] = n, n.delegateTarget = this, !m.preDispatch || m.preDispatch.call(this, n) !== !1) {
                    if (p && (!n.button || "click" !== n.type)) for (o = n.target; o != this; o = o.parentNode || this) if (o.disabled !== !0 || "click" !== n.type) {
                        for (s = {}, u = [], i = 0; p > i; i++) c = d[i], f = c.selector, s[f] === t && (s[f] = c.needsContext ? J(f, this).index(o) >= 0 : J.find(f, this, null, [o]).length), s[f] && u.push(c);
                        u.length && v.push({
                            elem: o,
                            matches: u
                        })
                    }
                    for (d.length > p && v.push({
                        elem: this,
                        matches: d.slice(p)
                    }), i = 0; i < v.length && !n.isPropagationStopped(); i++) for (l = v[i], n.currentTarget = l.elem, r = 0; r < l.matches.length && !n.isImmediatePropagationStopped(); r++) c = l.matches[r], (g || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) && (n.data = c.data, n.handleObj = c, a = ((J.event.special[c.origType] || {}).handle || c.handler).apply(l.elem, h), a !== t && (n.result = a, a === !1 && (n.preventDefault(), n.stopPropagation())));
                    return m.postDispatch && m.postDispatch.call(this, n), n.result
                }
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var i, r, o, a = n.button,
                        s = n.fromElement;
                    return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || W, r = i.documentElement, o = i.body, e.pageX = n.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[J.expando]) return e;
                var t, n, i = e,
                    r = J.event.fixHooks[e.type] || {},
                    o = r.props ? this.props.concat(r.props) : this.props;
                for (e = J.Event(i), t = o.length; t;) n = o[--t], e[n] = i[n];
                return e.target || (e.target = i.srcElement || W), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, r.filter ? r.filter(e, i) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(e, t, n) {
                        J.isWindow(this) && (this.onbeforeunload = n)
                    },
                    teardown: function(e, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var r = J.extend(new J.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? J.event.trigger(r, null, t) : J.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, J.event.handle = J.event.dispatch, J.removeEvent = W.removeEventListener ?
            function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n, !1)
            } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
        }, J.Event = function(e, t) {
            return this instanceof J.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? a : o) : this.type = e, t && J.extend(this, t), this.timeStamp = e && e.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(e, t)
        }, J.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = a;
                var e = this.originalEvent;
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = a;
                var e = this.originalEvent;
                e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = a, this.stopPropagation()
            },
            isDefaultPrevented: o,
            isPropagationStopped: o,
            isImmediatePropagationStopped: o
        }, J.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            J.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        r = e.relatedTarget,
                        o = e.handleObj;
                    o.selector;
                    return (!r || r !== i && !J.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), J.support.submitBubbles || (J.event.special.submit = {
            setup: function() {
                return J.nodeName(this, "form") ? !1 : void J.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        i = J.nodeName(n, "input") || J.nodeName(n, "button") ? n.form : t;
                    i && !J._data(i, "_submit_attached") && (J.event.add(i, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), J._data(i, "_submit_attached", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && J.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return J.nodeName(this, "form") ? !1 : void J.event.remove(this, "._submit")
            }
        }), J.support.changeBubbles || (J.event.special.change = {
            setup: function() {
                return Ne.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (J.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), J.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), J.event.simulate("change", this, e, !0)
                })), !1) : void J.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Ne.test(t.nodeName) && !J._data(t, "_change_attached") && (J.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || J.event.simulate("change", this.parentNode, e, !0)
                    }), J._data(t, "_change_attached", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return J.event.remove(this, "._change"), !Ne.test(this.nodeName)
            }
        }), J.support.focusinBubbles || J.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                i = function(e) {
                    J.event.simulate(t, e.target, J.event.fix(e), !0)
                };
            J.event.special[t] = {
                setup: function() {
                    0 === n++ && W.addEventListener(e, i, !0)
                },
                teardown: function() {
                    0 === --n && W.removeEventListener(e, i, !0)
                }
            }
        }), J.fn.extend({
            on: function(e, n, i, r, a) {
                var s, l;
                if ("object" == typeof e) {
                    "string" != typeof n && (i = i || n, n = t);
                    for (l in e) this.on(l, n, i, e[l], a);
                    return this
                }
                if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1) r = o;
                else if (!r) return this;
                return 1 === a && (s = r, r = function(e) {
                    return J().off(e), s.apply(this, arguments)
                }, r.guid = s.guid || (s.guid = J.guid++)), this.each(function() {
                    J.event.add(this, e, r, i, n)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, n, i) {
                var r, a;
                if (e && e.preventDefault && e.handleObj) return r = e.handleObj, J(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof e) {
                    for (a in e) this.off(a, n, e[a]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = o), this.each(function() {
                    J.event.remove(this, e, i, n)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            live: function(e, t, n) {
                return J(this.context).on(e, this.selector, t, n), this
            },
            die: function(e, t) {
                return J(this.context).off(e, this.selector || "**", t), this
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    J.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                return this[0] ? J.event.trigger(e, t, this[0], !0) : void 0
            },
            toggle: function(e) {
                var t = arguments,
                    n = e.guid || J.guid++,
                    i = 0,
                    r = function(n) {
                        var r = (J._data(this, "lastToggle" + e.guid) || 0) % i;
                        return J._data(this, "lastToggle" + e.guid, r + 1), n.preventDefault(), t[r].apply(this, arguments) || !1
                    };
                for (r.guid = n; i < t.length;) t[i++].guid = n;
                return this.click(r)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            J.fn[t] = function(e, n) {
                return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }, De.test(t) && (J.event.fixHooks[t] = J.event.keyHooks), Me.test(t) && (J.event.fixHooks[t] = J.event.mouseHooks)
        }), function(e, t) {
            function n(e, t, n, i) {
                n = n || [], t = t || M;
                var r, o, a, s, l = t.nodeType;
                if (!e || "string" != typeof e) return n;
                if (1 !== l && 9 !== l) return [];
                if (a = w(t), !a && !i && (r = ne.exec(e))) if (s = r[1]) {
                    if (9 === l) {
                        if (o = t.getElementById(s), !o || !o.parentNode) return n;
                        if (o.id === s) return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && C(t, o) && o.id === s) return n.push(o), n
                } else {
                    if (r[2]) return F.apply(n, I.call(t.getElementsByTagName(e), 0)), n;
                    if ((s = r[3]) && de && t.getElementsByClassName) return F.apply(n, I.call(t.getElementsByClassName(s), 0)), n
                }
                return g(e.replace(K, "$1"), t, n, i, a)
            }
            function i(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }
            function r(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function o(e) {
                return q(function(t) {
                    return t = +t, q(function(n, i) {
                        for (var r, o = e([], n.length, t), a = o.length; a--;) n[r = o[a]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }
            function a(e, t, n) {
                if (e === t) return n;
                for (var i = e.nextSibling; i;) {
                    if (i === t) return -1;
                    i = i.nextSibling
                }
                return 1
            }
            function s(e, t) {
                var i, r, o, a, s, l, u, c = R[j][e];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, l = [], u = b.preFilter; s;) {
                    (!i || (r = Z.exec(s))) && (r && (s = s.slice(r[0].length)), l.push(o = [])), i = !1, (r = ee.exec(s)) && (o.push(i = new D(r.shift())), s = s.slice(i.length), i.type = r[0].replace(K, " "));
                    for (a in b.filter)!(r = se[a].exec(s)) || u[a] && !(r = u[a](r, M, !0)) || (o.push(i = new D(r.shift())), s = s.slice(i.length), i.type = a, i.matches = r);
                    if (!i) break
                }
                return t ? s.length : s ? n.error(e) : R(e, l).slice(0)
            }
            function l(e, t, n) {
                var i = t.dir,
                    r = n && "parentNode" === t.dir,
                    o = O++;
                return t.first ?
                    function(t, n, o) {
                        for (; t = t[i];) if (r || 1 === t.nodeType) return e(t, n, o)
                    } : function(t, n, a) {
                    if (a) {
                        for (; t = t[i];) if ((r || 1 === t.nodeType) && e(t, n, a)) return t
                    } else for (var s, l = H + " " + o + " ", u = l + v; t = t[i];) if (r || 1 === t.nodeType) {
                        if ((s = t[j]) === u) return t.sizset;
                        if ("string" == typeof s && 0 === s.indexOf(l)) {
                            if (t.sizset) return t
                        } else {
                            if (t[j] = u, e(t, n, a)) return t.sizset = !0, t;
                            t.sizset = !1
                        }
                    }
                }
            }
            function u(e) {
                return e.length > 1 ?
                    function(t, n, i) {
                        for (var r = e.length; r--;) if (!e[r](t, n, i)) return !1;
                        return !0
                    } : e[0]
            }
            function c(e, t, n, i, r) {
                for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, i, r)) && (a.push(o), u && t.push(s));
                return a
            }
            function f(e, t, n, i, r, o) {
                return i && !i[j] && (i = f(i)), r && !r[j] && (r = f(r, o)), q(function(o, a, s, l) {
                    if (!o || !r) {
                        var u, f, d, p = [],
                            g = [],
                            m = a.length,
                            v = o || h(t || "*", s.nodeType ? [s] : s, [], o),
                            y = !e || !o && t ? v : c(v, p, e, s, l),
                            b = n ? r || (o ? e : m || i) ? [] : a : y;
                        if (n && n(y, b, s, l), i) for (d = c(b, g), i(d, [], s, l), u = d.length; u--;)(f = d[u]) && (b[g[u]] = !(y[g[u]] = f));
                        if (o) for (u = e && b.length; u--;)(f = b[u]) && (o[p[u]] = !(a[p[u]] = f));
                        else b = c(b === a ? b.splice(m, b.length) : b), r ? r(null, a, b, l) : F.apply(a, b)
                    }
                })
            }
            function d(e) {
                for (var t, n, i, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, c = l(function(e) {
                    return e === t
                }, a, !0), p = l(function(e) {
                    return _.call(t, e) > -1
                }, a, !0), h = [function(e, n, i) {
                    return !o && (i || n !== k) || ((t = n).nodeType ? c(e, n, i) : p(e, n, i))
                }]; r > s; s++) if (n = b.relative[e[s].type]) h = [l(u(h), n)];
                else {
                    if (n = b.filter[e[s].type].apply(null, e[s].matches), n[j]) {
                        for (i = ++s; r > i && !b.relative[e[i].type]; i++);
                        return f(s > 1 && u(h), s > 1 && e.slice(0, s - 1).join("").replace(K, "$1"), n, i > s && d(e.slice(s, i)), r > i && d(e = e.slice(i)), r > i && e.join(""))
                    }
                    h.push(n)
                }
                return u(h)
            }
            function p(e, t) {
                var i = t.length > 0,
                    r = e.length > 0,
                    o = function(a, s, l, u, f) {
                        var d, p, h, g = [],
                            m = 0,
                            y = "0",
                            x = a && [],
                            w = null != f,
                            C = k,
                            T = a || r && b.find.TAG("*", f && s.parentNode || s),
                            S = H += null == C ? 1 : Math.E;
                        for (w && (k = s !== M && s, v = o.el); null != (d = T[y]); y++) {
                            if (r && d) {
                                for (p = 0; h = e[p]; p++) if (h(d, s, l)) {
                                    u.push(d);
                                    break
                                }
                                w && (H = S, v = ++o.el)
                            }
                            i && ((d = !h && d) && m--, a && x.push(d))
                        }
                        if (m += y, i && y !== m) {
                            for (p = 0; h = t[p]; p++) h(x, g, s, l);
                            if (a) {
                                if (m > 0) for (; y--;) x[y] || g[y] || (g[y] = P.call(u));
                                g = c(g)
                            }
                            F.apply(u, g), w && !a && g.length > 0 && m + t.length > 1 && n.uniqueSort(u)
                        }
                        return w && (H = S, k = C), x
                    };
                return o.el = 0, i ? q(o) : o
            }
            function h(e, t, i, r) {
                for (var o = 0, a = t.length; a > o; o++) n(e, t[o], i, r);
                return i
            }
            function g(e, t, n, i, r) {
                var o, a, l, u, c, f = s(e);
                f.length;
                if (!i && 1 === f.length) {
                    if (a = f[0] = f[0].slice(0), a.length > 2 && "ID" === (l = a[0]).type && 9 === t.nodeType && !r && b.relative[a[1].type]) {
                        if (t = b.find.ID(l.matches[0].replace(ae, ""), t, r)[0], !t) return n;
                        e = e.slice(a.shift().length)
                    }
                    for (o = se.POS.test(e) ? -1 : a.length - 1; o >= 0 && (l = a[o], !b.relative[u = l.type]); o--) if ((c = b.find[u]) && (i = c(l.matches[0].replace(ae, ""), ie.test(a[0].type) && t.parentNode || t, r))) {
                        if (a.splice(o, 1), e = i.length && a.join(""), !e) return F.apply(n, I.call(i, 0)), n;
                        break
                    }
                }
                return T(e, f)(i, t, r, n, ie.test(e)), n
            }
            function m() {}
            var v, y, b, x, w, C, T, S, E, k, N = !0,
                A = "undefined",
                j = ("sizcache" + Math.random()).replace(".", ""),
                D = String,
                M = e.document,
                L = M.documentElement,
                H = 0,
                O = 0,
                P = [].pop,
                F = [].push,
                I = [].slice,
                _ = [].indexOf ||
                    function(e) {
                        for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;
                        return -1
                    }, q = function(e, t) {
                    return e[j] = null == t || t, e
                }, B = function() {
                    var e = {},
                        t = [];
                    return q(function(n, i) {
                        return t.push(n) > b.cacheLength && delete e[t.shift()], e[n] = i
                    }, e)
                }, W = B(), R = B(), z = B(), $ = "[\\x20\\t\\r\\n\\f]", X = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", Q = X.replace("w", "w#"), U = "([*^$|!~]?=)", V = "\\[" + $ + "*(" + X + ")" + $ + "*(?:" + U + $ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + Q + ")|)|)" + $ + "*\\]", Y = ":(" + X + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + V + ")|[^:]|\\\\.)*|.*))\\)|)", G = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)", K = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"), Z = new RegExp("^" + $ + "*," + $ + "*"), ee = new RegExp("^" + $ + "*([\\x20\\t\\r\\n\\f>+~])" + $ + "*"), te = new RegExp(Y), ne = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, ie = /[\x20\t\r\n\f]*[+~]/, re = /h\d/i, oe = /input|select|textarea|button/i, ae = /\\(?!\\)/g, se = {
                    ID: new RegExp("^#(" + X + ")"),
                    CLASS: new RegExp("^\\.(" + X + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + X + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + X.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + V),
                    PSEUDO: new RegExp("^" + Y),
                    POS: new RegExp(G, "i"),
                    CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + $ + "*[>+~]|" + G, "i")
                }, le = function(e) {
                    var t = M.createElement("div");
                    try {
                        return e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t = null
                    }
                }, ue = le(function(e) {
                    return e.appendChild(M.createComment("")), !e.getElementsByTagName("*").length
                }), ce = le(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
                }), fe = le(function(e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return "boolean" !== t && "string" !== t
                }), de = le(function(e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
                }), pe = le(function(e) {
                    e.id = j + 0, e.innerHTML = "<a name='" + j + "'></a><div name='" + j + "'></div>", L.insertBefore(e, L.firstChild);
                    var t = M.getElementsByName && M.getElementsByName(j).length === 2 + M.getElementsByName(j + 0).length;
                    return y = !M.getElementById(j), L.removeChild(e), t
                });
            try {
                I.call(L.childNodes, 0)[0].nodeType
            } catch (he) {
                I = function(e) {
                    for (var t, n = []; t = this[e]; e++) n.push(t);
                    return n
                }
            }
            n.matches = function(e, t) {
                return n(e, null, null, t)
            }, n.matchesSelector = function(e, t) {
                return n(t, null, null, [e]).length > 0
            }, x = n.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += x(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else for (; t = e[i]; i++) n += x(t);
                return n
            }, w = n.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, C = n.contains = L.contains ?
                function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !! (i && 1 === i.nodeType && n.contains && n.contains(i))
                } : L.compareDocumentPosition ?
                function(e, t) {
                    return t && !! (16 & e.compareDocumentPosition(t))
                } : function(e, t) {
                for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, n.attr = function(e, t) {
                var n, i = w(e);
                return i || (t = t.toLowerCase()), (n = b.attrHandle[t]) ? n(e) : i || fe ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null)
            }, b = n.selectors = {
                cacheLength: 50,
                createPseudo: q,
                match: se,
                attrHandle: ce ? {} : {
                    href: function(e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function(e) {
                        return e.getAttribute("type")
                    }
                },
                find: {
                    ID: y ?
                        function(e, t, n) {
                            if (typeof t.getElementById !== A && !n) {
                                var i = t.getElementById(e);
                                return i && i.parentNode ? [i] : []
                            }
                        } : function(e, n, i) {
                        if (typeof n.getElementById !== A && !i) {
                            var r = n.getElementById(e);
                            return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : []
                        }
                    },
                    TAG: ue ?
                        function(e, t) {
                            return typeof t.getElementsByTagName !== A ? t.getElementsByTagName(e) : void 0
                        } : function(e, t) {
                        var n = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (var i, r = [], o = 0; i = n[o]; o++) 1 === i.nodeType && r.push(i);
                            return r
                        }
                        return n
                    },
                    NAME: pe &&
                    function(e, t) {
                        return typeof t.getElementsByName !== A ? t.getElementsByName(name) : void 0
                    },
                    CLASS: de &&
                    function(e, t, n) {
                        return typeof t.getElementsByClassName === A || n ? void 0 : t.getElementsByClassName(e)
                    }
                },
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ae, ""), e[3] = (e[4] || e[5] || "").replace(ae, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || n.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n;
                        return se.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (te.test(t) && (n = s(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t), e.slice(0, 3))
                    }
                },
                filter: {
                    ID: y ?
                        function(e) {
                            return e = e.replace(ae, ""), function(t) {
                                return t.getAttribute("id") === e
                            }
                        } : function(e) {
                        return e = e.replace(ae, ""), function(t) {
                            var n = typeof t.getAttributeNode !== A && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    },
                    TAG: function(e) {
                        return "*" === e ?
                            function() {
                                return !0
                            } : (e = e.replace(ae, "").toLowerCase(), function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    },
                    CLASS: function(e) {
                        var t = W[j][e];
                        return t || (t = W(e, new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)"))), function(e) {
                            return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
                        }
                    },
                    ATTR: function(e, t, i) {
                        return function(r, o) {
                            var a = n.attr(r, e);
                            return null == a ? "!=" === t : t ? (a += "", "=" === t ? a === i : "!=" === t ? a !== i : "^=" === t ? i && 0 === a.indexOf(i) : "*=" === t ? i && a.indexOf(i) > -1 : "$=" === t ? i && a.substr(a.length - i.length) === i : "~=" === t ? (" " + a + " ").indexOf(i) > -1 : "|=" === t ? a === i || a.substr(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, i) {
                        return "nth" === e ?
                            function(e) {
                                var t, r, o = e.parentNode;
                                if (1 === n && 0 === i) return !0;
                                if (o) for (r = 0, t = o.firstChild; t && (1 !== t.nodeType || (r++, e !== t)); t = t.nextSibling);
                                return r -= i, r === n || r % n === 0 && r / n >= 0
                            } : function(t) {
                            var n = t;
                            switch (e) {
                                case "only":
                                case "first":
                                    for (; n = n.previousSibling;) if (1 === n.nodeType) return !1;
                                    if ("first" === e) return !0;
                                    n = t;
                                case "last":
                                    for (; n = n.nextSibling;) if (1 === n.nodeType) return !1;
                                    return !0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var i, r = b.pseudos[e] || b.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                        return r[j] ? r(t) : r.length > 1 ? (i = [e, e, "", t], b.setFilters.hasOwnProperty(e.toLowerCase()) ? q(function(e, n) {
                            for (var i, o = r(e, t), a = o.length; a--;) i = _.call(e, o[a]), e[i] = !(n[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, i)
                        }) : r
                    }
                },
                pseudos: {
                    not: q(function(e) {
                        var t = [],
                            n = [],
                            i = T(e.replace(K, "$1"));
                        return i[j] ? q(function(e, t, n, r) {
                            for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                        }) : function(e, r, o) {
                            return t[0] = e, i(t, null, o, n), !n.pop()
                        }
                    }),
                    has: q(function(e) {
                        return function(t) {
                            return n(e, t).length > 0
                        }
                    }),
                    contains: q(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || x(t)).indexOf(e) > -1
                        }
                    }),
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !! e.checked || "option" === t && !! e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    empty: function(e) {
                        var t;
                        for (e = e.firstChild; e;) {
                            if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
                            e = e.nextSibling
                        }
                        return !0
                    },
                    header: function(e) {
                        return re.test(e.nodeName)
                    },
                    text: function(e) {
                        var t, n;
                        return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t)
                    },
                    radio: i("radio"),
                    checkbox: i("checkbox"),
                    file: i("file"),
                    password: i("password"),
                    image: i("image"),
                    submit: r("submit"),
                    reset: r("reset"),
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    input: function(e) {
                        return oe.test(e.nodeName)
                    },
                    focus: function(e) {
                        var t = e.ownerDocument;
                        return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !(!e.type && !e.href)
                    },
                    active: function(e) {
                        return e === e.ownerDocument.activeElement
                    },
                    first: o(function(e, t, n) {
                        return [0]
                    }),
                    last: o(function(e, t, n) {
                        return [t - 1]
                    }),
                    eq: o(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: o(function(e, t, n) {
                        for (var i = 0; t > i; i += 2) e.push(i);
                        return e
                    }),
                    odd: o(function(e, t, n) {
                        for (var i = 1; t > i; i += 2) e.push(i);
                        return e
                    }),
                    lt: o(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: o(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, S = L.compareDocumentPosition ?
                function(e, t) {
                    return e === t ? (E = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
                } : function(e, t) {
                if (e === t) return E = !0, 0;
                if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                var n, i, r = [],
                    o = [],
                    s = e.parentNode,
                    l = t.parentNode,
                    u = s;
                if (s === l) return a(e, t);
                if (!s) return -1;
                if (!l) return 1;
                for (; u;) r.unshift(u), u = u.parentNode;
                for (u = l; u;) o.unshift(u), u = u.parentNode;
                n = r.length, i = o.length;
                for (var c = 0; n > c && i > c; c++) if (r[c] !== o[c]) return a(r[c], o[c]);
                return c === n ? a(e, o[c], -1) : a(r[c], t, 1)
            }, [0, 0].sort(S), N = !E, n.uniqueSort = function(e) {
                var t, n = 1;
                if (E = N, e.sort(S), E) for (; t = e[n]; n++) t === e[n - 1] && e.splice(n--, 1);
                return e
            }, n.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, T = n.compile = function(e, t) {
                var n, i = [],
                    r = [],
                    o = z[j][e];
                if (!o) {
                    for (t || (t = s(e)), n = t.length; n--;) o = d(t[n]), o[j] ? i.push(o) : r.push(o);
                    o = z(e, p(r, i))
                }
                return o
            }, M.querySelectorAll && !
                function() {
                    var e, t = g,
                        i = /'|\\/g,
                        r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                        o = [":focus"],
                        a = [":active", ":focus"],
                        l = L.matchesSelector || L.mozMatchesSelector || L.webkitMatchesSelector || L.oMatchesSelector || L.msMatchesSelector;
                    le(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || o.push("\\[" + $ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || o.push(":checked")
                    }), le(function(e) {
                        e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && o.push("[*^$]=" + $ + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled")
                    }), o = new RegExp(o.join("|")), g = function(e, n, r, a, l) {
                        if (!(a || l || o && o.test(e))) {
                            var u, c, f = !0,
                                d = j,
                                p = n,
                                h = 9 === n.nodeType && e;
                            if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                                for (u = s(e), (f = n.getAttribute("id")) ? d = f.replace(i, "\\$&") : n.setAttribute("id", d), d = "[id='" + d + "'] ", c = u.length; c--;) u[c] = d + u[c].join("");
                                p = ie.test(e) && n.parentNode || n, h = u.join(",")
                            }
                            if (h) try {
                                return F.apply(r, I.call(p.querySelectorAll(h), 0)), r
                            } catch (g) {} finally {
                                f || n.removeAttribute("id")
                            }
                        }
                        return t(e, n, r, a, l)
                    }, l && (le(function(t) {
                        e = l.call(t, "div");
                        try {
                            l.call(t, "[test!='']:sizzle"), a.push("!=", Y)
                        } catch (n) {}
                    }), a = new RegExp(a.join("|")), n.matchesSelector = function(t, i) {
                        if (i = i.replace(r, "='$1']"), !(w(t) || a.test(i) || o && o.test(i))) try {
                            var s = l.call(t, i);
                            if (s || e || t.document && 11 !== t.document.nodeType) return s
                        } catch (u) {}
                        return n(i, null, null, [t]).length > 0
                    })
                }(), b.pseudos.nth = b.pseudos.eq, b.filters = m.prototype = b.pseudos, b.setFilters = new m, n.attr = J.attr, J.find = n, J.expr = n.selectors, J.expr[":"] = J.expr.pseudos, J.unique = n.uniqueSort, J.text = n.getText, J.isXMLDoc = n.isXML, J.contains = n.contains
        }(e);
        var Oe = /Until$/,
            Pe = /^(?:parents|prev(?:Until|All))/,
            Fe = /^.[^:#\[\.,]*$/,
            Ie = J.expr.match.needsContext,
            _e = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        J.fn.extend({
            find: function(e) {
                var t, n, i, r, o, a, s = this;
                if ("string" != typeof e) return J(e).filter(function() {
                    for (t = 0, n = s.length; n > t; t++) if (J.contains(s[t], this)) return !0
                });
                for (a = this.pushStack("", "find", e), t = 0, n = this.length; n > t; t++) if (i = a.length, J.find(e, this[t], a), t > 0) for (r = i; r < a.length; r++) for (o = 0; i > o; o++) if (a[o] === a[r]) {
                    a.splice(r--, 1);
                    break
                }
                return a
            },
            has: function(e) {
                var t, n = J(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++) if (J.contains(this, n[t])) return !0
                })
            },
            not: function(e) {
                return this.pushStack(u(this, e, !1), "not", e)
            },
            filter: function(e) {
                return this.pushStack(u(this, e, !0), "filter", e)
            },
            is: function(e) {
                return !!e && ("string" == typeof e ? Ie.test(e) ? J(e, this.context).index(this[0]) >= 0 : J.filter(e, this).length > 0 : this.filter(e).length > 0)
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], a = Ie.test(e) || "string" != typeof e ? J(e, t || this.context) : 0; r > i; i++) for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                    if (a ? a.index(n) > -1 : J.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
                return o = o.length > 1 ? J.unique(o) : o, this.pushStack(o, "closest", e)
            },
            index: function(e) {
                return e ? "string" == typeof e ? J.inArray(this[0], J(e)) : J.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
            },
            add: function(e, t) {
                var n = "string" == typeof e ? J(e, t) : J.makeArray(e && e.nodeType ? [e] : e),
                    i = J.merge(this.get(), n);
                return this.pushStack(s(n[0]) || s(i[0]) ? i : J.unique(i))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), J.fn.andSelf = J.fn.addBack, J.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return J.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return J.dir(e, "parentNode", n)
            },
            next: function(e) {
                return l(e, "nextSibling")
            },
            prev: function(e) {
                return l(e, "previousSibling")
            },
            nextAll: function(e) {
                return J.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return J.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return J.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return J.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return J.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return J.sibling(e.firstChild)
            },
            contents: function(e) {
                return J.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : J.merge([], e.childNodes)
            }
        }, function(e, t) {
            J.fn[e] = function(n, i) {
                var r = J.map(this, t, n);
                return Oe.test(e) || (i = n), i && "string" == typeof i && (r = J.filter(i, r)), r = this.length > 1 && !_e[e] ? J.unique(r) : r, this.length > 1 && Pe.test(e) && (r = r.reverse()), this.pushStack(r, e, U.call(arguments).join(","))
            }
        }), J.extend({
            filter: function(e, t, n) {
                return n && (e = ":not(" + e + ")"), 1 === t.length ? J.find.matchesSelector(t[0], e) ? [t[0]] : [] : J.find.matches(e, t)
            },
            dir: function(e, n, i) {
                for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !J(o).is(i));) 1 === o.nodeType && r.push(o), o = o[n];
                return r
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        });
        var qe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figtitle|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Be = / jQuery\d+="(?:null|\d+)"/g,
            We = /^\s+/,
            Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            ze = /<([\w:]+)/,
            $e = /<tbody/i,
            Xe = /<|&#?\w+;/,
            Qe = /<(?:script|style|link)/i,
            Ue = /<(?:script|object|embed|option|style)/i,
            Ve = new RegExp("<(?:" + qe + ")[\\s/>]", "i"),
            Ye = /^(?:checkbox|radio)$/,
            Ge = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ke = /\/(java|ecma)script/i,
            Je = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
            Ze = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                area: [1, "<map>", "</map>"],
                _default: [0, "", ""]
            },
            et = c(W),
            tt = et.appendChild(W.createElement("div"));
        Ze.optgroup = Ze.option, Ze.tbody = Ze.tfoot = Ze.colgroup = Ze.caption = Ze.thead, Ze.th = Ze.td, J.support.htmlSerialize || (Ze._default = [1, "X<div>", "</div>"]), J.fn.extend({
            text: function(e) {
                return J.access(this, function(e) {
                    return e === t ? J.text(this) : this.empty().append((this[0] && this[0].ownerDocument || W).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(e) {
                if (J.isFunction(e)) return this.each(function(t) {
                    J(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = J(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return J.isFunction(e) ? this.each(function(t) {
                    J(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = J(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = J.isFunction(e);
                return this.each(function(n) {
                    J(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                if (!s(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
                if (arguments.length) {
                    var e = J.clean(arguments);
                    return this.pushStack(J.merge(e, this), "before", this.selector)
                }
            },
            after: function() {
                if (!s(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
                if (arguments.length) {
                    var e = J.clean(arguments);
                    return this.pushStack(J.merge(this, e), "after", this.selector)
                }
            },
            remove: function(e, t) {
                for (var n, i = 0; null != (n = this[i]); i++)(!e || J.filter(e, [n]).length) && (t || 1 !== n.nodeType || (J.cleanData(n.getElementsByTagName("*")), J.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) for (1 === e.nodeType && J.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return J.clone(this, e, t)
                })
            },
            html: function(e) {
                return J.access(this, function(e) {
                    var n = this[0] || {},
                        i = 0,
                        r = this.length;
                    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Be, "") : t;
                    if ("string" == typeof e && !Qe.test(e) && (J.support.htmlSerialize || !Ve.test(e)) && (J.support.leadingWhitespace || !We.test(e)) && !Ze[(ze.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Re, "<$1></$2>");
                        try {
                            for (; r > i; i++) n = this[i] || {}, 1 === n.nodeType && (J.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                            n = 0
                        } catch (o) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(e) {
                return s(this[0]) ? this.length ? this.pushStack(J(J.isFunction(e) ? e() : e), "replaceWith", e) : this : J.isFunction(e) ? this.each(function(t) {
                    var n = J(this),
                        i = n.html();
                    n.replaceWith(e.call(this, t, i))
                }) : ("string" != typeof e && (e = J(e).detach()), this.each(function() {
                    var t = this.nextSibling,
                        n = this.parentNode;
                    J(this).remove(), t ? J(t).before(e) : J(n).append(e)
                }))
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, n, i) {
                e = [].concat.apply([], e);
                var r, o, a, s, l = 0,
                    u = e[0],
                    c = [],
                    d = this.length;
                if (!J.support.checkClone && d > 1 && "string" == typeof u && Ge.test(u)) return this.each(function() {
                    J(this).domManip(e, n, i)
                });
                if (J.isFunction(u)) return this.each(function(r) {
                    var o = J(this);
                    e[0] = u.call(this, r, n ? o.html() : t), o.domManip(e, n, i)
                });
                if (this[0]) {
                    if (r = J.buildFragment(e, this, c), a = r.fragment, o = a.firstChild, 1 === a.childNodes.length && (a = o), o) for (n = n && J.nodeName(o, "tr"), s = r.cacheable || d - 1; d > l; l++) i.call(n && J.nodeName(this[l], "table") ? f(this[l], "tbody") : this[l], l === s ? a : J.clone(a, !0, !0));
                    a = o = null, c.length && J.each(c, function(e, t) {
                        t.src ? J.ajax ? J.ajax({
                            url: t.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : J.error("no ajax") : J.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Je, "")), t.parentNode && t.parentNode.removeChild(t)
                    })
                }
                return this
            }
        }), J.buildFragment = function(e, n, i) {
            var r, o, a, s = e[0];
            return n = n || W, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, !(1 === e.length && "string" == typeof s && s.length < 512 && n === W && "<" === s.charAt(0)) || Ue.test(s) || !J.support.checkClone && Ge.test(s) || !J.support.html5Clone && Ve.test(s) || (o = !0, r = J.fragments[s], a = r !== t), r || (r = n.createDocumentFragment(), J.clean(e, n, r, i), o && (J.fragments[s] = a && r)), {
                fragment: r,
                cacheable: o
            }
        }, J.fragments = {}, J.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            J.fn[e] = function(n) {
                var i, r = 0,
                    o = [],
                    a = J(n),
                    s = a.length,
                    l = 1 === this.length && this[0].parentNode;
                if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === s) return a[t](this[0]), this;
                for (; s > r; r++) i = (r > 0 ? this.clone(!0) : this).get(), J(a[r])[t](i), o = o.concat(i);
                return this.pushStack(o, e, a.selector)
            }
        }), J.extend({
            clone: function(e, t, n) {
                var i, r, o, a;
                if (J.support.html5Clone || J.isXMLDoc(e) || !Ve.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (tt.innerHTML = e.outerHTML, tt.removeChild(a = tt.firstChild)), !(J.support.noCloneEvent && J.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || J.isXMLDoc(e))) for (p(e, a), i = h(e), r = h(a), o = 0; i[o]; ++o) r[o] && p(i[o], r[o]);
                if (t && (d(e, a), n)) for (i = h(e), r = h(a), o = 0; i[o]; ++o) d(i[o], r[o]);
                return i = r = null, a
            },
            clean: function(e, t, n, i) {
                var r, o, a, s, l, u, f, d, p, h, m, v = t === W && et,
                    y = [];
                for (t && "undefined" != typeof t.createDocumentFragment || (t = W), r = 0; null != (a = e[r]); r++) if ("number" == typeof a && (a += ""), a) {
                    if ("string" == typeof a) if (Xe.test(a)) {
                        for (v = v || c(t), f = t.createElement("div"), v.appendChild(f), a = a.replace(Re, "<$1></$2>"), s = (ze.exec(a) || ["", ""])[1].toLowerCase(), l = Ze[s] || Ze._default, u = l[0], f.innerHTML = l[1] + a + l[2]; u--;) f = f.lastChild;
                        if (!J.support.tbody) for (d = $e.test(a), p = "table" !== s || d ? "<table>" !== l[1] || d ? [] : f.childNodes : f.firstChild && f.firstChild.childNodes, o = p.length - 1; o >= 0; --o) J.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o]);
                        !J.support.leadingWhitespace && We.test(a) && f.insertBefore(t.createTextNode(We.exec(a)[0]), f.firstChild), a = f.childNodes, f.parentNode.removeChild(f)
                    } else a = t.createTextNode(a);
                    a.nodeType ? y.push(a) : J.merge(y, a)
                }
                if (f && (a = f = v = null), !J.support.appendChecked) for (r = 0; null != (a = y[r]); r++) J.nodeName(a, "input") ? g(a) : "undefined" != typeof a.getElementsByTagName && J.grep(a.getElementsByTagName("input"), g);
                if (n) for (h = function(e) {
                    return !e.type || Ke.test(e.type) ? i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : void 0
                }, r = 0; null != (a = y[r]); r++) J.nodeName(a, "script") && h(a) || (n.appendChild(a), "undefined" != typeof a.getElementsByTagName && (m = J.grep(J.merge([], a.getElementsByTagName("script")), h), y.splice.apply(y, [r + 1, 0].concat(m)), r += m.length));
                return y
            },
            cleanData: function(e, t) {
                for (var n, i, r, o, a = 0, s = J.expando, l = J.cache, u = J.support.deleteExpando, c = J.event.special; null != (r = e[a]); a++) if ((t || J.acceptData(r)) && (i = r[s], n = i && l[i])) {
                    if (n.events) for (o in n.events) c[o] ? J.event.remove(r, o) : J.removeEvent(r, o, n.handle);
                    l[i] && (delete l[i], u ? delete r[s] : r.removeAttribute ? r.removeAttribute(s) : r[s] = null, J.deletedIds.push(i))
                }
            }
        }), function() {
            var e, t;
            J.uaMatch = function(e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            }, e = J.uaMatch(z.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), J.browser = t, J.sub = function() {
                function e(t, n) {
                    return new e.fn.init(t, n)
                }
                J.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, i) {
                    return i && i instanceof J && !(i instanceof e) && (i = e(i)), J.fn.init.call(this, n, i, t)
                }, e.fn.init.prototype = e.fn;
                var t = e(W);
                return e
            }
        }();
        var nt, it, rt, ot = /alpha\([^)]*\)/i,
            at = /opacity=([^)]*)/,
            st = /^(top|right|bottom|left)$/,
            lt = /^(none|table(?!-c[ea]).+)/,
            ut = /^margin/,
            ct = new RegExp("^(" + Z + ")(.*)$", "i"),
            ft = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
            dt = new RegExp("^([-+])=(" + Z + ")", "i"),
            pt = {},
            ht = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            gt = {
                letterSpacing: 0,
                fontWeight: 400
            },
            mt = ["Top", "Right", "Bottom", "Left"],
            vt = ["Webkit", "O", "Moz", "ms"],
            yt = J.fn.toggle;
        J.fn.extend({
            css: function(e, n) {
                return J.access(this, function(e, n, i) {
                    return i !== t ? J.style(e, n, i) : J.css(e, n)
                }, e, n, arguments.length > 1)
            },
            show: function() {
                return y(this, !0)
            },
            hide: function() {
                return y(this)
            },
            toggle: function(e, t) {
                var n = "boolean" == typeof e;
                return J.isFunction(e) && J.isFunction(t) ? yt.apply(this, arguments) : this.each(function() {
                    (n ? e : v(this)) ? J(this).show() : J(this).hide()
                })
            }
        }), J.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = nt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": J.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, n, i, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, a, s, l = J.camelCase(n),
                        u = e.style;
                    if (n = J.cssProps[l] || (J.cssProps[l] = m(u, l)), s = J.cssHooks[n] || J.cssHooks[l], i === t) return s && "get" in s && (o = s.get(e, !1, r)) !== t ? o : u[n];
                    if (a = typeof i, "string" === a && (o = dt.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(J.css(e, n)), a = "number"), !(null == i || "number" === a && isNaN(i) || ("number" !== a || J.cssNumber[l] || (i += "px"), s && "set" in s && (i = s.set(e, i, r)) === t))) try {
                        u[n] = i
                    } catch (c) {}
                }
            },
            css: function(e, n, i, r) {
                var o, a, s, l = J.camelCase(n);
                return n = J.cssProps[l] || (J.cssProps[l] = m(e.style, l)), s = J.cssHooks[n] || J.cssHooks[l], s && "get" in s && (o = s.get(e, !0, r)), o === t && (o = nt(e, n)), "normal" === o && n in gt && (o = gt[n]), i || r !== t ? (a = parseFloat(o), i || J.isNumeric(a) ? a || 0 : o) : o
            },
            swap: function(e, t, n) {
                var i, r, o = {};
                for (r in t) o[r] = e.style[r], e.style[r] = t[r];
                i = n.call(e);
                for (r in t) e.style[r] = o[r];
                return i
            }
        }), e.getComputedStyle ? nt = function(t, n) {
            var i, r, o, a, s = e.getComputedStyle(t, null),
                l = t.style;
            return s && (i = s[n], "" !== i || J.contains(t.ownerDocument, t) || (i = J.style(t, n)), ft.test(i) && ut.test(n) && (r = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = i, i = s.width, l.width = r, l.minWidth = o, l.maxWidth = a)), i
        } : W.documentElement.currentStyle && (nt = function(e, t) {
            var n, i, r = e.currentStyle && e.currentStyle[t],
                o = e.style;
            return null == r && o && o[t] && (r = o[t]), ft.test(r) && !st.test(t) && (n = o.left, i = e.runtimeStyle && e.runtimeStyle.left, i && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : r, r = o.pixelLeft + "px", o.left = n, i && (e.runtimeStyle.left = i)), "" === r ? "auto" : r
        }), J.each(["height", "width"], function(e, t) {
            J.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? 0 === e.offsetWidth && lt.test(nt(e, "display")) ? J.swap(e, ht, function() {
                        return w(e, t, i)
                    }) : w(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    return b(e, n, i ? x(e, t, i, J.support.boxSizing && "border-box" === J.css(e, "boxSizing")) : 0)
                }
            }
        }), J.support.opacity || (J.cssHooks.opacity = {
            get: function(e, t) {
                return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    r = J.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = i && i.filter || n.filter || "";
                n.zoom = 1, t >= 1 && "" === J.trim(o.replace(ot, "")) && n.removeAttribute && (n.removeAttribute("filter"), i && !i.filter) || (n.filter = ot.test(o) ? o.replace(ot, r) : o + " " + r)
            }
        }), J(function() {
            J.support.reliableMarginRight || (J.cssHooks.marginRight = {
                get: function(e, t) {
                    return J.swap(e, {
                        display: "inline-block"
                    }, function() {
                        return t ? nt(e, "marginRight") : void 0
                    })
                }
            }), !J.support.pixelPosition && J.fn.position && J.each(["top", "left"], function(e, t) {
                J.cssHooks[t] = {
                    get: function(e, n) {
                        if (n) {
                            var i = nt(e, t);
                            return ft.test(i) ? J(e).position()[t] + "px" : i
                        }
                    }
                }
            })
        }), J.expr && J.expr.filters && (J.expr.filters.hidden = function(e) {
            return 0 === e.offsetWidth && 0 === e.offsetHeight || !J.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nt(e, "display"))
        }, J.expr.filters.visible = function(e) {
            return !J.expr.filters.hidden(e)
        }), J.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            J.cssHooks[e + t] = {
                expand: function(n) {
                    var i, r = "string" == typeof n ? n.split(" ") : [n],
                        o = {};
                    for (i = 0; 4 > i; i++) o[e + mt[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, ut.test(e) || (J.cssHooks[e + t].set = b)
        });
        var bt = /%20/g,
            xt = /\[\]$/,
            wt = /\r?\n/g,
            Ct = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            Tt = /^(?:select|textarea)/i;
        J.fn.extend({
            serialize: function() {
                return J.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    return this.elements ? J.makeArray(this.elements) : this
                }).filter(function() {
                    return this.name && !this.disabled && (this.checked || Tt.test(this.nodeName) || Ct.test(this.type))
                }).map(function(e, t) {
                    var n = J(this).val();
                    return null == n ? null : J.isArray(n) ? J.map(n, function(e, n) {
                        return {
                            name: t.name,
                            value: e.replace(wt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(wt, "\r\n")
                    }
                }).get()
            }
        }), J.param = function(e, n) {
            var i, r = [],
                o = function(e, t) {
                    t = J.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (n === t && (n = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(e) || e.jquery && !J.isPlainObject(e)) J.each(e, function() {
                o(this.name, this.value)
            });
            else for (i in e) T(i, e[i], n, o);
            return r.join("&").replace(bt, "+")
        };
        var St, Et, kt = /#.*$/,
            Nt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            At = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
            jt = /^(?:GET|HEAD)$/,
            Dt = /^\/\//,
            Mt = /\?/,
            Lt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            Ht = /([?&])_=[^&]*/,
            Ot = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            Pt = J.fn.load,
            Ft = {},
            It = {},
            _t = ["*/"] + ["*"];
        try {
            Et = R.href
        } catch (qt) {
            Et = W.createElement("a"), Et.href = "", Et = Et.href
        }
        St = Ot.exec(Et.toLowerCase()) || [], J.fn.load = function(e, n, i) {
            if ("string" != typeof e && Pt) return Pt.apply(this, arguments);
            if (!this.length) return this;
            var r, o, a, s = this,
                l = e.indexOf(" ");
            return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), J.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (o = "POST"), J.ajax({
                url: e,
                type: o,
                dataType: "html",
                data: n,
                complete: function(e, t) {
                    i && s.each(i, a || [e.responseText, t, e])
                }
            }).done(function(e) {
                a = arguments, s.html(r ? J("<div>").append(e.replace(Lt, "")).find(r) : e)
            }), this
        }, J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
            J.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), J.each(["get", "post"], function(e, n) {
            J[n] = function(e, i, r, o) {
                return J.isFunction(i) && (o = o || r, r = i, i = t), J.ajax({
                    type: n,
                    url: e,
                    data: i,
                    success: r,
                    dataType: o
                })
            }
        }), J.extend({
            getScript: function(e, n) {
                return J.get(e, t, n, "script")
            },
            getJSON: function(e, t, n) {
                return J.get(e, t, n, "json")
            },
            ajaxSetup: function(e, t) {
                return t ? k(e, J.ajaxSettings) : (t = e, e = J.ajaxSettings), k(e, t), e
            },
            ajaxSettings: {
                url: Et,
                isLocal: At.test(St[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": _t
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": e.String,
                    "text html": !0,
                    "text json": J.parseJSON,
                    "text xml": J.parseXML
                },
                flatOptions: {
                    context: !0,
                    url: !0
                }
            },
            ajaxPrefilter: S(Ft),
            ajaxTransport: S(It),
            ajax: function(e, n) {
                function i(e, n, i, a) {
                    var u, f, y, b, w, T = n;
                    2 !== x && (x = 2, l && clearTimeout(l), s = t, o = a || "", C.readyState = e > 0 ? 4 : 0, i && (b = N(d, C, i)), e >= 200 && 300 > e || 304 === e ? (d.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (J.lastModified[r] = w), w = C.getResponseHeader("Etag"), w && (J.etag[r] = w)), 304 === e ? (T = "notmodified", u = !0) : (u = A(d, b), T = u.state, f = u.data, y = u.error, u = !y)) : (y = T, (!T || e) && (T = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || T) + "", u ? g.resolveWith(p, [f, T, C]) : g.rejectWith(p, [C, T, y]), C.statusCode(v), v = t, c && h.trigger("ajax" + (u ? "Success" : "Error"), [C, d, u ? f : y]), m.fireWith(p, [C, T]), c && (h.trigger("ajaxComplete", [C, d]), --J.active || J.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (n = e, e = t), n = n || {};
                var r, o, a, s, l, u, c, f, d = J.ajaxSetup({}, n),
                    p = d.context || d,
                    h = p !== d && (p.nodeType || p instanceof J) ? J(p) : J.event,
                    g = J.Deferred(),
                    m = J.Callbacks("once memory"),
                    v = d.statusCode || {},
                    y = {},
                    b = {},
                    x = 0,
                    w = "canceled",
                    C = {
                        readyState: 0,
                        setRequestHeader: function(e, t) {
                            if (!x) {
                                var n = e.toLowerCase();
                                e = b[n] = b[n] || e, y[e] = t
                            }
                            return this
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? o : null
                        },
                        getResponseHeader: function(e) {
                            var n;
                            if (2 === x) {
                                if (!a) for (a = {}; n = Nt.exec(o);) a[n[1].toLowerCase()] = n[2];
                                n = a[e.toLowerCase()]
                            }
                            return n === t ? null : n
                        },
                        overrideMimeType: function(e) {
                            return x || (d.mimeType = e), this
                        },
                        abort: function(e) {
                            return e = e || w, s && s.abort(e), i(0, e), this
                        }
                    };
                if (g.promise(C), C.success = C.done, C.error = C.fail, C.complete = m.add, C.statusCode = function(e) {
                        if (e) {
                            var t;
                            if (2 > x) for (t in e) v[t] = [v[t], e[t]];
                            else t = e[C.status], C.always(t)
                        }
                        return this
                    }, d.url = ((e || d.url) + "").replace(kt, "").replace(Dt, St[1] + "//"), d.dataTypes = J.trim(d.dataType || "*").toLowerCase().split(te), null == d.crossDomain && (u = Ot.exec(d.url.toLowerCase()) || !1, d.crossDomain = u && u.join(":") + (u[3] ? "" : "http:" === u[1] ? 80 : 443) !== St.join(":") + (St[3] ? "" : "http:" === St[1] ? 80 : 443)), d.data && d.processData && "string" != typeof d.data && (d.data = J.param(d.data, d.traditional)), E(Ft, d, n, C), 2 === x) return C;
                if (c = d.global, d.type = d.type.toUpperCase(), d.hasContent = !jt.test(d.type), c && 0 === J.active++ && J.event.trigger("ajaxStart"), !d.hasContent && (d.data && (d.url += (Mt.test(d.url) ? "&" : "?") + d.data, delete d.data), r = d.url, d.cache === !1)) {
                    var T = J.now(),
                        S = d.url.replace(Ht, "$1_=" + T);
                    d.url = S + (S === d.url ? (Mt.test(d.url) ? "&" : "?") + "_=" + T : "")
                }(d.data && d.hasContent && d.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", d.contentType), d.ifModified && (r = r || d.url, J.lastModified[r] && C.setRequestHeader("If-Modified-Since", J.lastModified[r]), J.etag[r] && C.setRequestHeader("If-None-Match", J.etag[r])), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : d.accepts["*"]);
                for (f in d.headers) C.setRequestHeader(f, d.headers[f]);
                if (d.beforeSend && (d.beforeSend.call(p, C, d) === !1 || 2 === x)) return C.abort();
                w = "abort";
                for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) C[f](d[f]);
                if (s = E(It, d, n, C)) {
                    C.readyState = 1, c && h.trigger("ajaxSend", [C, d]), d.async && d.timeout > 0 && (l = setTimeout(function() {
                        C.abort("timeout")
                    }, d.timeout));
                    try {
                        x = 1, s.send(y, i)
                    } catch (k) {
                        if (!(2 > x)) throw k;
                        i(-1, k)
                    }
                } else i(-1, "No Transport");
                return C
            },
            active: 0,
            lastModified: {},
            etag: {}
        });
        var Bt = [],
            Wt = /\?/,
            Rt = /(=)\?(?=&|$)|\?\?/,
            zt = J.now();
        J.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Bt.pop() || J.expando + "_" + zt++;
                return this[e] = !0, e
            }
        }), J.ajaxPrefilter("json jsonp", function(n, i, r) {
            var o, a, s, l = n.data,
                u = n.url,
                c = n.jsonp !== !1,
                f = c && Rt.test(u),
                d = c && !f && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(l);
            return "jsonp" === n.dataTypes[0] || f || d ? (o = n.jsonpCallback = J.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, a = e[o], f ? n.url = u.replace(Rt, "$1" + o) : d ? n.data = l.replace(Rt, "$1" + o) : c && (n.url += (Wt.test(u) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
                return s || J.error(o + " was not called"), s[0]
            }, n.dataTypes[0] = "json", e[o] = function() {
                s = arguments
            }, r.always(function() {
                e[o] = a, n[o] && (n.jsonpCallback = i.jsonpCallback, Bt.push(o)), s && J.isFunction(a) && a(s[0]), s = a = t
            }), "script") : void 0
        }), J.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function(e) {
                    return J.globalEval(e), e
                }
            }
        }), J.ajaxPrefilter("script", function(e) {
            e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), J.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var n, i = W.head || W.getElementsByTagName("head")[0] || W.documentElement;
                return {
                    send: function(r, o) {
                        n = W.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, r) {
                            (r || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = t, r || o(200, "success"))
                        }, i.insertBefore(n, i.firstChild)
                    },
                    abort: function() {
                        n && n.onload(0, 1)
                    }
                }
            }
        });
        var $t, Xt = e.ActiveXObject ?
            function() {
                for (var e in $t) $t[e](0, 1)
            } : !1, Qt = 0;
        J.ajaxSettings.xhr = e.ActiveXObject ?
            function() {
                return !this.isLocal && j() || D()
            } : j, function(e) {
            J.extend(J.support, {
                ajax: !! e,
                cors: !! e && "withCredentials" in e
            })
        }(J.ajaxSettings.xhr()), J.support.ajax && J.ajaxTransport(function(n) {
            if (!n.crossDomain || J.support.cors) {
                var i;
                return {
                    send: function(r, o) {
                        var a, s, l = n.xhr();
                        if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];
                        n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (s in r) l.setRequestHeader(s, r[s])
                        } catch (u) {}
                        l.send(n.hasContent && n.data || null), i = function(e, r) {
                            var s, u, c, f, d;
                            try {
                                if (i && (r || 4 === l.readyState)) if (i = t, a && (l.onreadystatechange = J.noop, Xt && delete $t[a]), r) 4 !== l.readyState && l.abort();
                                else {
                                    s = l.status, c = l.getAllResponseHeaders(), f = {}, d = l.responseXML, d && d.documentElement && (f.xml = d);
                                    try {
                                        f.text = l.responseText
                                    } catch (e) {}
                                    try {
                                        u = l.statusText
                                    } catch (p) {
                                        u = ""
                                    }
                                    s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                                }
                            } catch (h) {
                                r || o(-1, h)
                            }
                            f && o(s, u, f, c)
                        }, n.async ? 4 === l.readyState ? setTimeout(i, 0) : (a = ++Qt, Xt && ($t || ($t = {}, J(e).unload(Xt)), $t[a] = i), l.onreadystatechange = i) : i()
                    },
                    abort: function() {
                        i && i(0, 1)
                    }
                }
            }
        });
        var Ut, Vt, Yt = /^(?:toggle|show|hide)$/,
            Gt = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
            Kt = /queueHooks$/,
            Jt = [P],
            Zt = {
                "*": [function(e, t) {
                    var n, i, r = this.createTween(e, t),
                        o = Gt.exec(t),
                        a = r.cur(),
                        s = +a || 0,
                        l = 1,
                        u = 20;
                    if (o) {
                        if (n = +o[2], i = o[3] || (J.cssNumber[e] ? "" : "px"), "px" !== i && s) {
                            s = J.css(r.elem, e, !0) || n || 1;
                            do l = l || ".5", s /= l, J.style(r.elem, e, s + i);
                            while (l !== (l = r.cur() / a) && 1 !== l && --u)
                        }
                        r.unit = i, r.start = s, r.end = o[1] ? s + (o[1] + 1) * n : n
                    }
                    return r
                }]
            };
        J.Animation = J.extend(H, {
            tweener: function(e, t) {
                J.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                for (var n, i = 0, r = e.length; r > i; i++) n = e[i], Zt[n] = Zt[n] || [], Zt[n].unshift(t)
            },
            prefilter: function(e, t) {
                t ? Jt.unshift(e) : Jt.push(e)
            }
        }), J.Tween = F, F.prototype = {
            constructor: F,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (J.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = F.propHooks[this.prop];
                return e && e.get ? e.get(this) : F.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = F.propHooks[this.prop];
                return this.options.duration ? this.pos = t = J.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
            }
        }, F.prototype.init.prototype = F.prototype, F.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = J.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    J.fx.step[e.prop] ? J.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[J.cssProps[e.prop]] || J.cssHooks[e.prop]) ? J.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, J.each(["toggle", "show", "hide"], function(e, t) {
            var n = J.fn[t];
            J.fn[t] = function(i, r, o) {
                return null == i || "boolean" == typeof i || !e && J.isFunction(i) && J.isFunction(r) ? n.apply(this, arguments) : this.animate(I(t, !0), i, r, o)
            }
        }), J.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(v).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = J.isEmptyObject(e),
                    o = J.speed(t, n, i),
                    a = function() {
                        var t = H(this, J.extend({}, e), o);
                        r && t.stop(!0)
                    };
                return r || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, n, i) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(i)
                };
                return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        n = null != e && e + "queueHooks",
                        o = J.timers,
                        a = J._data(this);
                    if (n) a[n] && a[n].stop && r(a[n]);
                    else for (n in a) a[n] && a[n].stop && Kt.test(n) && r(a[n]);
                    for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1));
                    (t || !i) && J.dequeue(this, e)
                })
            }
        }), J.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            J.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), J.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? J.extend({}, e) : {
                complete: n || !n && t || J.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !J.isFunction(t) && t
            };
            return i.duration = J.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in J.fx.speeds ? J.fx.speeds[i.duration] : J.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                J.isFunction(i.old) && i.old.call(this), i.queue && J.dequeue(this, i.queue)
            }, i
        }, J.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, J.timers = [], J.fx = F.prototype.init, J.fx.tick = function() {
            for (var e, t = J.timers, n = 0; n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
            t.length || J.fx.stop()
        }, J.fx.timer = function(e) {
            e() && J.timers.push(e) && !Vt && (Vt = setInterval(J.fx.tick, J.fx.interval))
        }, J.fx.interval = 13, J.fx.stop = function() {
            clearInterval(Vt), Vt = null
        }, J.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, J.fx.step = {}, J.expr && J.expr.filters && (J.expr.filters.animated = function(e) {
            return J.grep(J.timers, function(t) {
                return e === t.elem
            }).length
        });
        var en = /^(?:body|html)$/i;
        J.fn.offset = function(e) {
            if (arguments.length) return e === t ? this : this.each(function(t) {
                J.offset.setOffset(this, e, t)
            });
            var n, i, r, o, a, s, l, u = {
                    top: 0,
                    left: 0
                },
                c = this[0],
                f = c && c.ownerDocument;
            if (f) return (i = f.body) === c ? J.offset.bodyOffset(c) : (n = f.documentElement, J.contains(n, c) ? ("undefined" != typeof c.getBoundingClientRect && (u = c.getBoundingClientRect()), r = _(f), o = n.clientTop || i.clientTop || 0, a = n.clientLeft || i.clientLeft || 0, s = r.pageYOffset || n.scrollTop, l = r.pageXOffset || n.scrollLeft, {
                top: u.top + s - o,
                left: u.left + l - a
            }) : u)
        }, J.offset = {
            bodyOffset: function(e) {
                var t = e.offsetTop,
                    n = e.offsetLeft;
                return J.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(J.css(e, "marginTop")) || 0, n += parseFloat(J.css(e, "marginLeft")) || 0), {
                    top: t,
                    left: n
                }
            },
            setOffset: function(e, t, n) {
                var i = J.css(e, "position");
                "static" === i && (e.style.position = "relative");
                var r, o, a = J(e),
                    s = a.offset(),
                    l = J.css(e, "top"),
                    u = J.css(e, "left"),
                    c = ("absolute" === i || "fixed" === i) && J.inArray("auto", [l, u]) > -1,
                    f = {},
                    d = {};
                c ? (d = a.position(), r = d.top, o = d.left) : (r = parseFloat(l) || 0, o = parseFloat(u) || 0), J.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + r), null != t.left && (f.left = t.left - s.left + o), "using" in t ? t.using.call(e, f) : a.css(f)
            }
        }, J.fn.extend({
            position: function() {
                if (this[0]) {
                    var e = this[0],
                        t = this.offsetParent(),
                        n = this.offset(),
                        i = en.test(t[0].nodeName) ? {
                            top: 0,
                            left: 0
                        } : t.offset();
                    return n.top -= parseFloat(J.css(e, "marginTop")) || 0, n.left -= parseFloat(J.css(e, "marginLeft")) || 0, i.top += parseFloat(J.css(t[0], "borderTopWidth")) || 0, i.left += parseFloat(J.css(t[0], "borderLeftWidth")) || 0, {
                        top: n.top - i.top,
                        left: n.left - i.left
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || W.body; e && !en.test(e.nodeName) && "static" === J.css(e, "position");) e = e.offsetParent;
                    return e || W.body
                })
            }
        }), J.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var i = /Y/.test(n);
            J.fn[e] = function(r) {
                return J.access(this, function(e, r, o) {
                    var a = _(e);
                    return o === t ? a ? n in a ? a[n] : a.document.documentElement[r] : e[r] : void(a ? a.scrollTo(i ? J(a).scrollLeft() : o, i ? o : J(a).scrollTop()) : e[r] = o)
                }, e, r, arguments.length, null)
            }
        }), J.each({
            Height: "height",
            Width: "width"
        }, function(e, n) {
            J.each({
                padding: "inner" + e,
                content: n,
                "": "outer" + e
            }, function(i, r) {
                J.fn[r] = function(r, o) {
                    var a = arguments.length && (i || "boolean" != typeof r),
                        s = i || (r === !0 || o === !0 ? "margin" : "border");
                    return J.access(this, function(n, i, r) {
                        var o;
                        return J.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? J.css(n, i, r, s) : J.style(n, i, r, s)
                    }, n, a ? r : t, a, null)
                }
            })
        }), e.jQuery = e.$ = J, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return J
        })
    }(window), function(e, t, n) {
    "function" == typeof define && define.amd ? define(["jquery"], function(i) {
        return n(i, e, t), i.mobile
    }) : n(e.jQuery, e, t)
}(this, document, function(e, t, n, i) {
    !
        function(e, t, i) {
            function r(e) {
                return e = e || location.href, "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
            }
            var o, a = "hashchange",
                s = n,
                l = e.event.special,
                u = s.documentMode,
                c = "on" + a in t && (u === i || u > 7);
            e.fn[a] = function(e) {
                return e ? this.bind(a, e) : this.trigger(a)
            }, e.fn[a].delay = 50, l[a] = e.extend(l[a], {
                setup: function() {
                    return c ? !1 : void e(o.start)
                },
                teardown: function() {
                    return c ? !1 : void e(o.stop)
                }
            }), o = function() {
                function n() {
                    var i = r(),
                        s = f(l);
                    i !== l ? (c(l = i, s), e(t).trigger(a)) : s !== l && (location.href = location.href.replace(/#.*/, "") + s), o = setTimeout(n, e.fn[a].delay)
                }
                var o, s = {},
                    l = r(),
                    u = function(e) {
                        return e
                    },
                    c = u,
                    f = u;
                return s.start = function() {
                    o || n()
                }, s.stop = function() {
                    o && clearTimeout(o), o = i
                }, s
            }()
        }(e, this), function(e) {
        e.mobile = {}
    }(e), function(e, t, n) {
        e.extend(e.mobile, {
            version: "1.4.0",
            subPageUrlKey: "ui-page",
            hideUrlBar: !0,
            keepNative: ":jqmData(role='none'), :jqmData(role='nojs')",
            activePageClass: "ui-page-active",
            activeBtnClass: "ui-btn-active",
            focusClass: "ui-focus",
            ajaxEnabled: !0,
            hashListeningEnabled: !0,
            linkBindingEnabled: !0,
            defaultPageTransition: "fade",
            maxTransitionWidth: !1,
            minScrollBack: 0,
            defaultDialogTransition: "pop",
            pageLoadErrorMessage: "Error Loading Page",
            pageLoadErrorMessageTheme: "a",
            phonegapNavigationEnabled: !1,
            autoInitializePage: !0,
            pushStateEnabled: !0,
            ignoreContentEnabled: !1,
            buttonMarkup: {
                hoverDelay: 200
            },
            dynamicBaseEnabled: !0,
            pageContainer: e(),
            allowCrossDomainPages: !1,
            dialogHashKey: "&ui-state=dialog"
        })
    }(e, this), function(e, t, n) {
        var i = {},
            r = e.find,
            o = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            a = /:jqmData\(([^)]*)\)/g;
        e.extend(e.mobile, {
            ns: "",
            getAttribute: function(t, n) {
                var i;
                t = t.jquery ? t[0] : t, t && t.getAttribute && (i = t.getAttribute("data-" + e.mobile.ns + n));
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : o.test(i) ? JSON.parse(i) : i
                } catch (r) {}
                return i
            },
            nsNormalizeDict: i,
            nsNormalize: function(t) {
                return i[t] || (i[t] = e.camelCase(e.mobile.ns + t))
            },
            closestPageData: function(e) {
                return e.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")
            }
        }), e.fn.jqmData = function(t, i) {
            var r;
            return "undefined" != typeof t && (t && (t = e.mobile.nsNormalize(t)), r = arguments.length < 2 || i === n ? this.data(t) : this.data(t, i)), r
        }, e.jqmData = function(t, n, i) {
            var r;
            return "undefined" != typeof n && (r = e.data(t, n ? e.mobile.nsNormalize(n) : n, i)), r
        }, e.fn.jqmRemoveData = function(t) {
            return this.removeData(e.mobile.nsNormalize(t))
        }, e.jqmRemoveData = function(t, n) {
            return e.removeData(t, e.mobile.nsNormalize(n))
        }, e.find = function(t, n, i, o) {
            return t.indexOf(":jqmData") > -1 && (t = t.replace(a, "[data-" + (e.mobile.ns || "") + "$1]")), r.call(this, t, n, i, o)
        }, e.extend(e.find, r)
    }(e, this), function(e, t) {
        function i(t, n) {
            var i, o, a, s = t.nodeName.toLowerCase();
            return "area" === s ? (i = t.parentNode, o = i.name, t.href && o && "map" === i.nodeName.toLowerCase() ? (a = e("img[usemap=#" + o + "]")[0], !! a && r(a)) : !1) : (/input|select|textarea|button|object/.test(s) ? !t.disabled : "a" === s ? t.href || n : n) && r(t)
        }
        function r(t) {
            return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
                    return "hidden" === e.css(this, "visibility")
                }).length
        }
        var o = 0,
            a = /^ui-id-\d+$/;
        e.ui = e.ui || {}, e.extend(e.ui, {
            version: "c0ab71056b936627e8a7821f03c044aec6280a40",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), e.fn.extend({
            focus: function(t) {
                return function(n, i) {
                    return "number" == typeof n ? this.each(function() {
                        var t = this;
                        setTimeout(function() {
                            e(t).focus(), i && i.call(t)
                        }, n)
                    }) : t.apply(this, arguments)
                }
            }(e.fn.focus),
            scrollParent: function() {
                var t;
                return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                    return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0) : this.parents().filter(function() {
                    return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
                }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(this[0].ownerDocument || n) : t
            },
            uniqueId: function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++o)
                })
            },
            removeUniqueId: function() {
                return this.each(function() {
                    a.test(this.id) && e(this).removeAttr("id")
                })
            }
        }), e.extend(e.expr[":"], {
            data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
                return function(n) {
                    return !!e.data(n, t)
                }
            }) : function(t, n, i) {
                return !!e.data(t, i[3])
            },
            focusable: function(t) {
                return i(t, !isNaN(e.attr(t, "tabindex")))
            },
            tabbable: function(t) {
                var n = e.attr(t, "tabindex"),
                    r = isNaN(n);
                return (r || n >= 0) && i(t, !r)
            }
        }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, i) {
            function r(t, n, i, r) {
                return e.each(o, function() {
                    n -= parseFloat(e.css(t, "padding" + this)) || 0, i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), r && (n -= parseFloat(e.css(t, "margin" + this)) || 0)
                }), n
            }
            var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                a = i.toLowerCase(),
                s = {
                    innerWidth: e.fn.innerWidth,
                    innerHeight: e.fn.innerHeight,
                    outerWidth: e.fn.outerWidth,
                    outerHeight: e.fn.outerHeight
                };
            e.fn["inner" + i] = function(n) {
                return n === t ? s["inner" + i].call(this) : this.each(function() {
                    e(this).css(a, r(this, n) + "px")
                })
            }, e.fn["outer" + i] = function(t, n) {
                return "number" != typeof t ? s["outer" + i].call(this, t) : this.each(function() {
                    e(this).css(a, r(this, t, !0, n) + "px")
                })
            }
        }), e.fn.addBack || (e.fn.addBack = function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
            return function(n) {
                return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this)
            }
        }(e.fn.removeData)), e.ui.ie = !! /msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in n.createElement("div"), e.fn.extend({
            disableSelection: function() {
                return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            },
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(i) {
                if (i !== t) return this.css("zIndex", i);
                if (this.length) for (var r, o, a = e(this[0]); a.length && a[0] !== n;) {
                    if (r = a.css("position"), ("absolute" === r || "relative" === r || "fixed" === r) && (o = parseInt(a.css("zIndex"), 10), !isNaN(o) && 0 !== o)) return o;
                    a = a.parent()
                }
                return 0
            }
        }), e.ui.plugin = {
            add: function(t, n, i) {
                var r, o = e.ui[t].prototype;
                for (r in i) o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([n, i[r]])
            },
            call: function(e, t, n, i) {
                var r, o = e.plugins[t];
                if (o && (i || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (r = 0; r < o.length; r++) e.options[o[r][0]] && o[r][1].apply(e.element, n)
            }
        }
    }(e), function(e, t, i) {
        e.extend(e.mobile, {
            window: e(t),
            document: e(n),
            keyCode: e.ui.keyCode,
            behaviors: {},
            silentScroll: function(n) {
                "number" !== e.type(n) && (n = e.mobile.defaultHomeScroll), e.event.special.scrollstart.enabled = !1, setTimeout(function() {
                    t.scrollTo(0, n), e.mobile.document.trigger("silentscroll", {
                        x: 0,
                        y: n
                    })
                }, 20), setTimeout(function() {
                    e.event.special.scrollstart.enabled = !0
                }, 150)
            },
            getClosestBaseUrl: function(t) {
                var n = e(t).closest(".ui-page").jqmData("url"),
                    i = e.mobile.path.documentBase.hrefNoHash;
                return e.mobile.dynamicBaseEnabled && n && e.mobile.path.isPath(n) || (n = i), e.mobile.path.makeUrlAbsolute(n, i)
            },
            removeActiveLinkClass: function(t) {
                !e.mobile.activeClickedLink || e.mobile.activeClickedLink.closest("." + e.mobile.activePageClass).length && !t || e.mobile.activeClickedLink.removeClass(e.mobile.activeBtnClass), e.mobile.activeClickedLink = null
            },
            getInheritedTheme: function(e, t) {
                for (var n, i, r = e[0], o = "", a = /ui-(bar|body|overlay)-([a-z])\b/; r && (n = r.className || "", !(n && (i = a.exec(n)) && (o = i[2])));) r = r.parentNode;
                return o || t || "a"
            },
            enhanceable: function(e) {
                return this.haveParents(e, "enhance")
            },
            hijackable: function(e) {
                return this.haveParents(e, "ajax")
            },
            haveParents: function(t, n) {
                if (!e.mobile.ignoreContentEnabled) return t;
                var i, r, o, a, s, l = t.length,
                    u = e();
                for (a = 0; l > a; a++) {
                    for (r = t.eq(a), o = !1, i = t[a]; i;) {
                        if (s = i.getAttribute ? i.getAttribute("data-" + e.mobile.ns + n) : "", "false" === s) {
                            o = !0;
                            break
                        }
                        i = i.parentNode
                    }
                    o || (u = u.add(r))
                }
                return u
            },
            getScreenHeight: function() {
                return t.innerHeight || e.mobile.window.height()
            },
            resetActivePageHeight: function(t) {
                var n = e("." + e.mobile.activePageClass),
                    i = n.height(),
                    r = n.outerHeight(!0);
                t = "number" == typeof t ? t : e.mobile.getScreenHeight(), n.css("min-height", t - (r - i))
            },
            loading: function() {
                var t = this.loading._widget || e(e.mobile.loader.prototype.defaultHtml).loader(),
                    n = t.loader.apply(t, arguments);
                return this.loading._widget = t, n
            }
        }), e.addDependents = function(t, n) {
            var i = e(t),
                r = i.jqmData("dependents") || e();
            i.jqmData("dependents", e(r).add(n))
        }, e.fn.extend({
            removeWithDependents: function() {
                e.removeWithDependents(this)
            },
            enhanceWithin: function() {
                var t, n = {},
                    i = e.mobile.page.prototype.keepNativeSelector(),
                    r = this;
                e.mobile.nojs && e.mobile.nojs(this), e.mobile.links && e.mobile.links(this), e.mobile.degradeInputsWithin && e.mobile.degradeInputsWithin(this), e.fn.buttonMarkup && this.find(e.fn.buttonMarkup.initSelector).not(i).jqmEnhanceable().buttonMarkup(), e.fn.fieldcontain && this.find(":jqmData(role='fieldcontain')").not(i).jqmEnhanceable().fieldcontain(), e.each(e.mobile.widgets, function(t, o) {
                    if (o.initSelector) {
                        var a = e.mobile.enhanceable(r.find(o.initSelector));
                        a.length > 0 && (a = a.not(i)), a.length > 0 && (n[o.prototype.widgetName] = a)
                    }
                });
                for (t in n) n[t][t]();
                return this
            },
            addDependents: function(t) {
                e.addDependents(this, t)
            },
            getEncodedText: function() {
                return e("<a>").text(this.text()).html()
            },
            jqmEnhanceable: function() {
                return e.mobile.enhanceable(this)
            },
            jqmHijackable: function() {
                return e.mobile.hijackable(this)
            }
        }), e.removeWithDependents = function(t) {
            var n = e(t);
            (n.jqmData("dependents") || e()).remove(), n.remove()
        }, e.addDependents = function(t, n) {
            var i = e(t),
                r = i.jqmData("dependents") || e();
            i.jqmData("dependents", e(r).add(n))
        }, e.find.matches = function(t, n) {
            return e.find(t, null, null, n)
        }, e.find.matchesSelector = function(t, n) {
            return e.find(n, null, null, [t]).length > 0
        }
    }(e, this), function(e, i) {
        t.matchMedia = t.matchMedia ||
            function(e, t) {
                var n, i = e.documentElement,
                    r = i.firstElementChild || i.firstChild,
                    o = e.createElement("body"),
                    a = e.createElement("div");
                return a.id = "mq-test-1", a.style.cssText = "position:absolute;top:-100em", o.style.background = "none", o.appendChild(a), function(e) {
                    return a.innerHTML = '&shy;<style media="' + e + '"> #mq-test-1 { width: 42px; }</style>', i.insertBefore(o, r), n = 42 === a.offsetWidth, i.removeChild(o), {
                        matches: n,
                        media: e
                    }
                }
            }(n), e.mobile.media = function(e) {
            return t.matchMedia(e).matches
        }
    }(e), function(e, t) {
        var i = {
            touch: "ontouchend" in n
        };
        e.mobile.support = e.mobile.support || {}, e.extend(e.support, i), e.extend(e.mobile.support, i)
    }(e), function(e, n) {
        e.extend(e.support, {
            orientation: "orientation" in t && "onorientationchange" in t
        })
    }(e), function(e, i) {
        function r(e) {
            var t, n = e.charAt(0).toUpperCase() + e.substr(1),
                r = (e + " " + g.join(n + " ") + n).split(" ");
            for (t in r) if (h[r[t]] !== i) return !0
        }
        function o(e, t, i) {
            var r, o, a = n.createElement("div"),
                s = function(e) {
                    return e.charAt(0).toUpperCase() + e.substr(1)
                },
                l = function(e) {
                    return "" === e ? "" : "-" + e.charAt(0).toLowerCase() + e.substr(1) + "-"
                },
                u = function(n) {
                    var i = l(n) + e + ": " + t + ";",
                        r = s(n),
                        u = r + ("" === r ? e : s(e));
                    a.setAttribute("style", i), a.style[u] && (o = !0)
                },
                c = i ? i : g;
            for (r = 0; r < c.length; r++) u(c[r]);
            return !!o
        }
        function a() {
            var n = t,
                i = !(!n.document.createElementNS || !n.document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect || n.opera && -1 === navigator.userAgent.indexOf("Chrome")),
                r = function(t) {
                    t && i || e("html").addClass("ui-nosvg")
                },
                o = new n.Image;
            o.onerror = function() {
                r(!1)
            }, o.onload = function() {
                r(1 === o.width && 1 === o.height)
            }, o.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
        }
        function s() {
            var r, o, a, s = "transform-3d",
                l = e.mobile.media("(-" + g.join("-" + s + "),(-") + "-" + s + "),(" + s + ")");
            if (l) return !!l;
            r = n.createElement("div"), o = {
                MozTransform: "-moz-transform",
                transform: "transform"
            }, p.append(r);
            for (a in o) r.style[a] !== i && (r.style[a] = "translate3d( 100px, 1px, 1px )", l = t.getComputedStyle(r).getPropertyValue(o[a]));
            return !!l && "none" !== l
        }
        function l() {
            var t, n, i = location.protocol + "//" + location.host + location.pathname + "ui-dir/",
                r = e("head base"),
                o = null,
                a = "";
            return r.length ? a = r.attr("href") : r = o = e("<base>", {
                href: i
            }).appendTo("head"), t = e("<a href='testurl' />").prependTo(p), n = t[0].href, r[0].href = a || location.pathname, o && o.remove(), 0 === n.indexOf(i)
        }
        function u() {
            var e, i = n.createElement("x"),
                r = n.documentElement,
                o = t.getComputedStyle;
            return "pointerEvents" in i.style ? (i.style.pointerEvents = "auto", i.style.pointerEvents = "x", r.appendChild(i), e = o && "auto" === o(i, "").pointerEvents, r.removeChild(i), !! e) : !1
        }
        function c() {
            var e = n.createElement("div");
            return "undefined" != typeof e.getBoundingClientRect
        }
        function f() {
            var e = t,
                n = navigator.userAgent,
                i = navigator.platform,
                r = n.match(/AppleWebKit\/([0-9]+)/),
                o = !! r && r[1],
                a = n.match(/Fennec\/([0-9]+)/),
                s = !! a && a[1],
                l = n.match(/Opera Mobi\/([0-9]+)/),
                u = !! l && l[1];
            return (i.indexOf("iPhone") > -1 || i.indexOf("iPad") > -1 || i.indexOf("iPod") > -1) && o && 534 > o || e.operamini && "[object OperaMini]" === {}.toString.call(e.operamini) || l && 7458 > u || n.indexOf("Android") > -1 && o && 533 > o || s && 6 > s || "palmGetResource" in t && o && 534 > o || n.indexOf("MeeGo") > -1 && n.indexOf("NokiaBrowser/8.5.0") > -1 ? !1 : !0
        }
        var d, p = e("<body>").prependTo("html"),
            h = p[0].style,
            g = ["Webkit", "Moz", "O"],
            m = "palmGetResource" in t,
            v = t.opera,
            y = t.operamini && "[object OperaMini]" === {}.toString.call(t.operamini),
            b = t.blackberry && !r("-webkit-transform");
        e.extend(e.mobile, {
            browser: {}
        }), e.mobile.browser.oldIE = function() {
            var e = 3,
                t = n.createElement("div"),
                i = t.all || [];
            do t.innerHTML = "<!--[if gt IE " + ++e + "]><br><![endif]-->";
            while (i[0]);
            return e > 4 ? e : !e
        }(), e.extend(e.support, {
            cssTransitions: "WebKitTransitionEvent" in t || o("transition", "height 100ms linear", ["Webkit", "Moz", ""]) && !e.mobile.browser.oldIE && !v,
            pushState: "pushState" in history && "replaceState" in history && !(t.navigator.userAgent.indexOf("Firefox") >= 0 && t.top !== t) && -1 === t.navigator.userAgent.search(/CriOS/),
            mediaquery: e.mobile.media("only all"),
            cssPseudoElement: !! r("content"),
            touchOverflow: !! r("overflowScrolling"),
            cssTransform3d: s(),
            cssAnimations: !! r("animationName"),
            boxShadow: !! r("boxShadow") && !b,
            fixedPosition: f(),
            scrollTop: ("pageXOffset" in t || "scrollTop" in n.documentElement || "scrollTop" in p[0]) && !m && !y,
            dynamicBaseTag: l(),
            cssPointerEvents: u(),
            boundingRect: c(),
            inlineSVG: a
        }), p.remove(), d = function() {
            var e = t.navigator.userAgent;
            return e.indexOf("Nokia") > -1 && (e.indexOf("Symbian/3") > -1 || e.indexOf("Series60/5") > -1) && e.indexOf("AppleWebKit") > -1 && e.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)
        }(), e.mobile.gradeA = function() {
            return (e.support.mediaquery && e.support.cssPseudoElement || e.mobile.browser.oldIE && e.mobile.browser.oldIE >= 8) && (e.support.boundingRect || null !== e.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/))
        }, e.mobile.ajaxBlacklist = t.blackberry && !t.WebKitPoint || y || d, d && e(function() {
            e("head link[rel='stylesheet']").attr("rel", "alternate stylesheet").attr("rel", "stylesheet")
        }), e.support.boxShadow || e("html").addClass("ui-noboxshadow")
    }(e), function(e, t) {
        var n, i = e.mobile.window,
            r = function() {};
        e.event.special.beforenavigate = {
            setup: function() {
                i.on("navigate", r)
            },
            teardown: function() {
                i.off("navigate", r)
            }
        }, e.event.special.navigate = n = {
            bound: !1,
            pushStateEnabled: !0,
            originalEventName: t,
            isPushStateEnabled: function() {
                return e.support.pushState && e.mobile.pushStateEnabled === !0 && this.isHashChangeEnabled()
            },
            isHashChangeEnabled: function() {
                return e.mobile.hashListeningEnabled === !0
            },
            popstate: function(t) {
                var n = new e.Event("navigate"),
                    r = new e.Event("beforenavigate"),
                    o = t.originalEvent.state || {};
                r.originalEvent = t, i.trigger(r), r.isDefaultPrevented() || (t.historyState && e.extend(o, t.historyState), n.originalEvent = t, setTimeout(function() {
                    i.trigger(n, {
                        state: o
                    })
                }, 0))
            },
            hashchange: function(t) {
                var n = new e.Event("navigate"),
                    r = new e.Event("beforenavigate");
                r.originalEvent = t, i.trigger(r), r.isDefaultPrevented() || (n.originalEvent = t, i.trigger(n, {
                    state: t.hashchangeState || {}
                }))
            },
            setup: function() {
                n.bound || (n.bound = !0, n.isPushStateEnabled() ? (n.originalEventName = "popstate", i.bind("popstate.navigate", n.popstate)) : n.isHashChangeEnabled() && (n.originalEventName = "hashchange", i.bind("hashchange.navigate", n.hashchange)))
            }
        }
    }(e), function(e) {
        e.event.special.throttledresize = {
            setup: function() {
                e(this).bind("resize", o)
            },
            teardown: function() {
                e(this).unbind("resize", o)
            }
        };
        var t, n, i, r = 250,
            o = function() {
                n = (new Date).getTime(), i = n - a, i >= r ? (a = n, e(this).trigger("throttledresize")) : (t && clearTimeout(t), t = setTimeout(o, r - i))
            },
            a = 0
    }(e), function(e, t) {
        function i() {
            var e = r();
            e !== o && (o = e, f.trigger(d))
        }
        var r, o, a, s, l, u, c, f = e(t),
            d = "orientationchange",
            p = {
                0: !0,
                180: !0
            };
        e.support.orientation && (l = t.innerWidth || f.width(), u = t.innerHeight || f.height(), c = 50, a = l > u && l - u > c, s = p[t.orientation], (a && s || !a && !s) && (p = {
            "-90": !0,
            90: !0
        })), e.event.special.orientationchange = e.extend({}, e.event.special.orientationchange, {
            setup: function() {
                return e.support.orientation && !e.event.special.orientationchange.disabled ? !1 : (o = r(), void f.bind("throttledresize", i))
            },
            teardown: function() {
                return e.support.orientation && !e.event.special.orientationchange.disabled ? !1 : void f.unbind("throttledresize", i)
            },
            add: function(e) {
                var t = e.handler;
                e.handler = function(e) {
                    return e.orientation = r(), t.apply(this, arguments)
                }
            }
        }), e.event.special.orientationchange.orientation = r = function() {
            var i = !0,
                r = n.documentElement;
            return i = e.support.orientation ? p[t.orientation] : r && r.clientWidth / r.clientHeight < 1.1, i ? "portrait" : "landscape"
        }, e.fn[d] = function(e) {
            return e ? this.bind(d, e) : this.trigger(d)
        }, e.attrFn && (e.attrFn[d] = !0)
    }(e, this), function(e, t, n, i) {
        function r(e) {
            for (; e && "undefined" != typeof e.originalEvent;) e = e.originalEvent;
            return e
        }
        function o(t, n) {
            var o, a, s, l, u, c, f, d, p, h = t.type;
            if (t = e.Event(t), t.type = n, o = t.originalEvent, a = e.event.props, h.search(/^(mouse|click)/) > -1 && (a = D), o) for (f = a.length, l; f;) l = a[--f], t[l] = o[l];
            if (h.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1), -1 !== h.search(/^touch/) && (s = r(o), h = s.touches, u = s.changedTouches, c = h && h.length ? h[0] : u && u.length ? u[0] : i)) for (d = 0, p = A.length; p > d; d++) l = A[d], t[l] = c[l];
            return t
        }
        function a(t) {
            for (var n, i, r = {}; t;) {
                n = e.data(t, E);
                for (i in n) n[i] && (r[i] = r.hasVirtualBinding = !0);
                t = t.parentNode
            }
            return r
        }
        function s(t, n) {
            for (var i; t;) {
                if (i = e.data(t, E), i && (!n || i[n])) return t;
                t = t.parentNode
            }
            return null
        }
        function l() {
            _ = !1
        }
        function u() {
            _ = !0
        }
        function c() {
            R = 0, F.length = 0, I = !1, u()
        }
        function f() {
            l()
        }
        function d() {
            p(), L = setTimeout(function() {
                L = 0, c()
            }, e.vmouse.resetTimerDuration)
        }
        function p() {
            L && (clearTimeout(L), L = 0)
        }
        function h(t, n, i) {
            var r;
            return (i && i[t] || !i && s(n.target, t)) && (r = o(n, t), e(n.target).trigger(r)), r
        }
        function g(t) {
            var n, i = e.data(t.target, k);
            I || R && R === i || (n = h("v" + t.type, t), n && (n.isDefaultPrevented() && t.preventDefault(), n.isPropagationStopped() && t.stopPropagation(), n.isImmediatePropagationStopped() && t.stopImmediatePropagation()))
        }
        function m(t) {
            var n, i, o, s = r(t).touches;
            s && 1 === s.length && (n = t.target, i = a(n), i.hasVirtualBinding && (R = W++, e.data(n, k, R), p(), f(), P = !1, o = r(t).touches[0], H = o.pageX, O = o.pageY, h("vmouseover", t, i), h("vmousedown", t, i)))
        }
        function v(e) {
            _ || (P || h("vmousecancel", e, a(e.target)), P = !0, d())
        }
        function y(t) {
            if (!_) {
                var n = r(t).touches[0],
                    i = P,
                    o = e.vmouse.moveDistanceThreshold,
                    s = a(t.target);
                P = P || Math.abs(n.pageX - H) > o || Math.abs(n.pageY - O) > o, P && !i && h("vmousecancel", t, s), h("vmousemove", t, s), d()
            }
        }
        function b(e) {
            if (!_) {
                u();
                var t, n, i = a(e.target);
                h("vmouseup", e, i), P || (t = h("vclick", e, i), t && t.isDefaultPrevented() && (n = r(e).changedTouches[0], F.push({
                    touchID: R,
                    x: n.clientX,
                    y: n.clientY
                }), I = !0)), h("vmouseout", e, i), P = !1, d()
            }
        }
        function x(t) {
            var n, i = e.data(t, E);
            if (i) for (n in i) if (i[n]) return !0;
            return !1
        }
        function w() {}
        function C(t) {
            var n = t.substr(1);
            return {
                setup: function() {
                    x(this) || e.data(this, E, {});
                    var i = e.data(this, E);
                    i[t] = !0, M[t] = (M[t] || 0) + 1, 1 === M[t] && B.bind(n, g), e(this).bind(n, w), q && (M.touchstart = (M.touchstart || 0) + 1, 1 === M.touchstart && B.bind("touchstart", m).bind("touchend", b).bind("touchmove", y).bind("scroll", v))
                },
                teardown: function() {
                    --M[t], M[t] || B.unbind(n, g), q && (--M.touchstart, M.touchstart || B.unbind("touchstart", m).unbind("touchmove", y).unbind("touchend", b).unbind("scroll", v));
                    var i = e(this),
                        r = e.data(this, E);
                    r && (r[t] = !1), i.unbind(n, w), x(this) || i.removeData(E)
                }
            }
        }
        var T, S, E = "virtualMouseBindings",
            k = "virtualTouchID",
            N = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
            A = "clientX clientY pageX pageY screenX screenY".split(" "),
            j = e.event.mouseHooks ? e.event.mouseHooks.props : [],
            D = e.event.props.concat(j),
            M = {},
            L = 0,
            H = 0,
            O = 0,
            P = !1,
            F = [],
            I = !1,
            _ = !1,
            q = "addEventListener" in n,
            B = e(n),
            W = 1,
            R = 0;
        for (e.vmouse = {
            moveDistanceThreshold: 10,
            clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        }, S = 0; S < N.length; S++) e.event.special[N[S]] = C(N[S]);
        q && n.addEventListener("click", function(t) {
            var n, i, r, o, a, s, l = F.length,
                u = t.target;
            if (l) for (n = t.clientX, i = t.clientY, T = e.vmouse.clickDistanceThreshold, r = u; r;) {
                for (o = 0; l > o; o++) if (a = F[o], s = 0, r === u && Math.abs(a.x - n) < T && Math.abs(a.y - i) < T || e.data(r, k) === a.touchID) return t.preventDefault(), void t.stopPropagation();
                r = r.parentNode
            }
        }, !0)
    }(e, t, n), function(e, t, i) {
        function r(t, n, i) {
            var r = i.type;
            i.type = n, e.event.dispatch.call(t, i), i.type = r
        }
        var o = e(n),
            a = e.mobile.support.touch,
            s = "touchmove scroll",
            l = a ? "touchstart" : "mousedown",
            u = a ? "touchend" : "mouseup",
            c = a ? "touchmove" : "mousemove";
        e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(t, n) {
            e.fn[n] = function(e) {
                return e ? this.bind(n, e) : this.trigger(n)
            }, e.attrFn && (e.attrFn[n] = !0)
        }), e.event.special.scrollstart = {
            enabled: !0,
            setup: function() {
                function t(e, t) {
                    n = t, r(o, n ? "scrollstart" : "scrollstop", e)
                }
                var n, i, o = this,
                    a = e(o);
                a.bind(s, function(r) {
                    e.event.special.scrollstart.enabled && (n || t(r, !0), clearTimeout(i), i = setTimeout(function() {
                        t(r, !1)
                    }, 50))
                })
            },
            teardown: function() {
                e(this).unbind(s)
            }
        }, e.event.special.tap = {
            tapholdThreshold: 750,
            emitTapOnTaphold: !0,
            setup: function() {
                var t = this,
                    n = e(t),
                    i = !1;
                n.bind("vmousedown", function(a) {
                    function s() {
                        clearTimeout(c)
                    }
                    function l() {
                        s(), n.unbind("vclick", u).unbind("vmouseup", s), o.unbind("vmousecancel", l)
                    }
                    function u(e) {
                        l(), i || f !== e.target ? i && e.stopPropagation() : r(t, "tap", e)
                    }
                    if (i = !1, a.which && 1 !== a.which) return !1;
                    var c, f = a.target;
                    n.bind("vmouseup", s).bind("vclick", u), o.bind("vmousecancel", l), c = setTimeout(function() {
                        e.event.special.tap.emitTapOnTaphold || (i = !0), r(t, "taphold", e.Event("taphold", {
                            target: f
                        }))
                    }, e.event.special.tap.tapholdThreshold)
                })
            },
            teardown: function() {
                e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"), o.unbind("vmousecancel")
            }
        }, e.event.special.swipe = {
            scrollSupressionThreshold: 30,
            durationThreshold: 1e3,
            horizontalDistanceThreshold: 30,
            verticalDistanceThreshold: 75,
            start: function(t) {
                var n = t.originalEvent.touches ? t.originalEvent.touches[0] : t;
                return {
                    time: (new Date).getTime(),
                    coords: [n.pageX, n.pageY],
                    origin: e(t.target)
                }
            },
            stop: function(e) {
                var t = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
                return {
                    time: (new Date).getTime(),
                    coords: [t.pageX, t.pageY]
                }
            },
            handleSwipe: function(t, n, i, o) {
                if (n.time - t.time < e.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - n.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - n.coords[1]) < e.event.special.swipe.verticalDistanceThreshold) {
                    var a = t.coords[0] > n.coords[0] ? "swipeleft" : "swiperight";
                    return r(i, "swipe", e.Event("swipe", {
                        target: o,
                        swipestart: t,
                        swipestop: n
                    })), r(i, a, e.Event(a, {
                        target: o,
                        swipestart: t,
                        swipestop: n
                    })), !0
                }
                return !1
            },
            setup: function() {
                var t = this,
                    n = e(t);
                n.bind(l, function(i) {
                    function r(n) {
                        a && (o = e.event.special.swipe.stop(n), l || (l = e.event.special.swipe.handleSwipe(a, o, t, s)), Math.abs(a.coords[0] - o.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && n.preventDefault())
                    }
                    var o, a = e.event.special.swipe.start(i),
                        s = i.target,
                        l = !1;
                    n.bind(c, r).one(u, function() {
                        l = !0, n.unbind(c, r)
                    })
                })
            },
            teardown: function() {
                e(this).unbind(l).unbind(c).unbind(u)
            }
        }, e.each({
            scrollstop: "scrollstart",
            taphold: "tap",
            swipeleft: "swipe",
            swiperight: "swipe"
        }, function(t, n) {
            e.event.special[t] = {
                setup: function() {
                    e(this).bind(n, e.noop)
                },
                teardown: function() {
                    e(this).unbind(n)
                }
            }
        })
    }(e, this)
}), jQuery.effects ||
function(e, t) {
    var n = e.uiBackCompat !== !1,
        i = "ui-effects-";
    e.effects = {
        effect: {}
    }, function(t, n) {
        function i(e, t, n) {
            var i = d[t.type] || {};
            return null == e ? n || !t.def ? null : t.def : (e = i.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : i.mod ? (e + i.mod) % i.mod : 0 > e ? 0 : e > i.max ? i.max : e)
        }
        function r(e) {
            var i = c(),
                r = i._rgba = [];
            return e = e.toLowerCase(), g(u, function(t, o) {
                var a, s = o.re.exec(e),
                    l = s && o.parse(s),
                    u = o.space || "rgba";
                return l ? (a = i[u](l), i[f[u].cache] = a[f[u].cache], r = i._rgba = a._rgba, !1) : n
            }), r.length ? ("0,0,0,0" === r.join() && t.extend(r, a.transparent), i) : a[e]
        }
        function o(e, t, n) {
            return n = (n + 1) % 1, 1 > 6 * n ? e + 6 * (t - e) * n : 1 > 2 * n ? t : 2 > 3 * n ? e + 6 * (t - e) * (2 / 3 - n) : e
        }
        var a, s = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
            l = /^([\-+])=\s*(\d+\.?\d*)/,
            u = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function(e) {
                    return [e[1], e[2], e[3], e[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                parse: function(e) {
                    return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                parse: function(e) {
                    return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                parse: function(e) {
                    return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function(e) {
                    return [e[1], e[2] / 100, e[3] / 100, e[4]]
                }
            }],
            c = t.Color = function(e, n, i, r) {
                return new t.Color.fn.parse(e, n, i, r)
            },
            f = {
                rgba: {
                    props: {
                        red: {
                            idx: 0,
                            type: "byte"
                        },
                        green: {
                            idx: 1,
                            type: "byte"
                        },
                        blue: {
                            idx: 2,
                            type: "byte"
                        }
                    }
                },
                hsla: {
                    props: {
                        hue: {
                            idx: 0,
                            type: "degrees"
                        },
                        saturation: {
                            idx: 1,
                            type: "percent"
                        },
                        lightness: {
                            idx: 2,
                            type: "percent"
                        }
                    }
                }
            },
            d = {
                "byte": {
                    floor: !0,
                    max: 255
                },
                percent: {
                    max: 1
                },
                degrees: {
                    mod: 360,
                    floor: !0
                }
            },
            p = c.support = {},
            h = t("<p>")[0],
            g = t.each;
        h.style.cssText = "background-color:rgba(1,1,1,.5)", p.rgba = h.style.backgroundColor.indexOf("rgba") > -1, g(f, function(e, t) {
            t.cache = "_" + e, t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            }
        }), c.fn = t.extend(c.prototype, {
            parse: function(o, s, l, u) {
                if (o === n) return this._rgba = [null, null, null, null], this;
                (o.jquery || o.nodeType) && (o = t(o).css(s), s = n);
                var d = this,
                    p = t.type(o),
                    h = this._rgba = [];
                return s !== n && (o = [o, s, l, u], p = "array"), "string" === p ? this.parse(r(o) || a._default) : "array" === p ? (g(f.rgba.props, function(e, t) {
                    h[t.idx] = i(o[t.idx], t)
                }), this) : "object" === p ? (o instanceof c ? g(f, function(e, t) {
                    o[t.cache] && (d[t.cache] = o[t.cache].slice())
                }) : g(f, function(t, n) {
                    var r = n.cache;
                    g(n.props, function(e, t) {
                        if (!d[r] && n.to) {
                            if ("alpha" === e || null == o[e]) return;
                            d[r] = n.to(d._rgba)
                        }
                        d[r][t.idx] = i(o[e], t, !0)
                    }), d[r] && 0 > e.inArray(null, d[r].slice(0, 3)) && (d[r][3] = 1, n.from && (d._rgba = n.from(d[r])))
                }), this) : n
            },
            is: function(e) {
                var t = c(e),
                    i = !0,
                    r = this;
                return g(f, function(e, o) {
                    var a, s = t[o.cache];
                    return s && (a = r[o.cache] || o.to && o.to(r._rgba) || [], g(o.props, function(e, t) {
                        return null != s[t.idx] ? i = s[t.idx] === a[t.idx] : n
                    })), i
                }), i
            },
            _space: function() {
                var e = [],
                    t = this;
                return g(f, function(n, i) {
                    t[i.cache] && e.push(n)
                }), e.pop()
            },
            transition: function(e, t) {
                var n = c(e),
                    r = n._space(),
                    o = f[r],
                    a = 0 === this.alpha() ? c("transparent") : this,
                    s = a[o.cache] || o.to(a._rgba),
                    l = s.slice();
                return n = n[o.cache], g(o.props, function(e, r) {
                    var o = r.idx,
                        a = s[o],
                        u = n[o],
                        c = d[r.type] || {};
                    null !== u && (null === a ? l[o] = u : (c.mod && (u - a > c.mod / 2 ? a += c.mod : a - u > c.mod / 2 && (a -= c.mod)), l[o] = i((u - a) * t + a, r)))
                }), this[r](l)
            },
            blend: function(e) {
                if (1 === this._rgba[3]) return this;
                var n = this._rgba.slice(),
                    i = n.pop(),
                    r = c(e)._rgba;
                return c(t.map(n, function(e, t) {
                    return (1 - i) * r[t] + i * e
                }))
            },
            toRgbaString: function() {
                var e = "rgba(",
                    n = t.map(this._rgba, function(e, t) {
                        return null == e ? t > 2 ? 1 : 0 : e
                    });
                return 1 === n[3] && (n.pop(), e = "rgb("), e + n.join() + ")"
            },
            toHslaString: function() {
                var e = "hsla(",
                    n = t.map(this.hsla(), function(e, t) {
                        return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                    });
                return 1 === n[3] && (n.pop(), e = "hsl("), e + n.join() + ")"
            },
            toHexString: function(e) {
                var n = this._rgba.slice(),
                    i = n.pop();
                return e && n.push(~~ (255 * i)), "#" + t.map(n, function(e) {
                    return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                }).join("")
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), c.fn.parse.prototype = c.fn, f.hsla.to = function(e) {
            if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
            var t, n, i = e[0] / 255,
                r = e[1] / 255,
                o = e[2] / 255,
                a = e[3],
                s = Math.max(i, r, o),
                l = Math.min(i, r, o),
                u = s - l,
                c = s + l,
                f = .5 * c;
            return t = l === s ? 0 : i === s ? 60 * (r - o) / u + 360 : r === s ? 60 * (o - i) / u + 120 : 60 * (i - r) / u + 240, n = 0 === f || 1 === f ? f : .5 >= f ? u / c : u / (2 - c), [Math.round(t) % 360, n, f, null == a ? 1 : a]
        }, f.hsla.from = function(e) {
            if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
            var t = e[0] / 360,
                n = e[1],
                i = e[2],
                r = e[3],
                a = .5 >= i ? i * (1 + n) : i + n - i * n,
                s = 2 * i - a;
            return [Math.round(255 * o(s, a, t + 1 / 3)), Math.round(255 * o(s, a, t)), Math.round(255 * o(s, a, t - 1 / 3)), r]
        }, g(f, function(e, r) {
            var o = r.props,
                a = r.cache,
                s = r.to,
                u = r.from;
            c.fn[e] = function(e) {
                if (s && !this[a] && (this[a] = s(this._rgba)), e === n) return this[a].slice();
                var r, l = t.type(e),
                    f = "array" === l || "object" === l ? e : arguments,
                    d = this[a].slice();
                return g(o, function(e, t) {
                    var n = f["object" === l ? e : t.idx];
                    null == n && (n = d[t.idx]), d[t.idx] = i(n, t)
                }), u ? (r = c(u(d)), r[a] = d, r) : c(d)
            }, g(o, function(n, i) {
                c.fn[n] || (c.fn[n] = function(r) {
                    var o, a = t.type(r),
                        s = "alpha" === n ? this._hsla ? "hsla" : "rgba" : e,
                        u = this[s](),
                        c = u[i.idx];
                    return "undefined" === a ? c : ("function" === a && (r = r.call(this, c), a = t.type(r)), null == r && i.empty ? this : ("string" === a && (o = l.exec(r), o && (r = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), u[i.idx] = r, this[s](u)))
                })
            })
        }), g(s, function(e, n) {
            t.cssHooks[n] = {
                set: function(e, i) {
                    var o, a, s = "";
                    if ("string" !== t.type(i) || (o = r(i))) {
                        if (i = c(o || i), !p.rgba && 1 !== i._rgba[3]) {
                            for (a = "backgroundColor" === n ? e.parentNode : e;
                                 ("" === s || "transparent" === s) && a && a.style;) try {
                                s = t.css(a, "backgroundColor"), a = a.parentNode
                            } catch (l) {}
                            i = i.blend(s && "transparent" !== s ? s : "_default")
                        }
                        i = i.toRgbaString()
                    }
                    try {
                        e.style[n] = i
                    } catch (u) {}
                }
            }, t.fx.step[n] = function(e) {
                e.colorInit || (e.start = c(e.elem, n), e.end = c(e.end), e.colorInit = !0), t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos))
            }
        }), t.cssHooks.borderColor = {
            expand: function(e) {
                var t = {};
                return g(["Top", "Right", "Bottom", "Left"], function(n, i) {
                    t["border" + i + "Color"] = e
                }), t
            }
        }, a = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(jQuery), function() {
        function n() {
            var t, n, i = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                r = {};
            if (i && i.length && i[0] && i[i[0]]) for (n = i.length; n--;) t = i[n], "string" == typeof i[t] && (r[e.camelCase(t)] = i[t]);
            else for (t in i)"string" == typeof i[t] && (r[t] = i[t]);
            return r
        }
        function i(t, n) {
            var i, r, a = {};
            for (i in n) r = n[i], t[i] !== r && (o[i] || (e.fx.step[i] || !isNaN(parseFloat(r))) && (a[i] = r));
            return a
        }
        var r = ["add", "remove", "toggle"],
            o = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, n) {
            e.fx.step[n] = function(e) {
                ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (jQuery.style(e.elem, n, e.end), e.setAttr = !0)
            }
        }), e.effects.animateClass = function(t, o, a, s) {
            var l = e.speed(o, a, s);
            return this.queue(function() {
                var o, a = e(this),
                    s = a.attr("class") || "",
                    u = l.children ? a.find("*").andSelf() : a;
                u = u.map(function() {
                    var t = e(this);
                    return {
                        el: t,
                        start: n.call(this)
                    }
                }), o = function() {
                    e.each(r, function(e, n) {
                        t[n] && a[n + "Class"](t[n])
                    })
                }, o(), u = u.map(function() {
                    return this.end = n.call(this.el[0]), this.diff = i(this.start, this.end), this
                }), a.attr("class", s), u = u.map(function() {
                    var t = this,
                        n = e.Deferred(),
                        i = jQuery.extend({}, l, {
                            queue: !1,
                            complete: function() {
                                n.resolve(t)
                            }
                        });
                    return this.el.animate(this.diff, i), n.promise()
                }), e.when.apply(e, u.get()).done(function() {
                    o(), e.each(arguments, function() {
                        var t = this.el;
                        e.each(this.diff, function(e) {
                            t.css(e, "")
                        })
                    }), l.complete.call(a[0])
                })
            })
        }, e.fn.extend({
            _addClass: e.fn.addClass,
            addClass: function(t, n, i, r) {
                return n ? e.effects.animateClass.call(this, {
                    add: t
                }, n, i, r) : this._addClass(t)
            },
            _removeClass: e.fn.removeClass,
            removeClass: function(t, n, i, r) {
                return n ? e.effects.animateClass.call(this, {
                    remove: t
                }, n, i, r) : this._removeClass(t)
            },
            _toggleClass: e.fn.toggleClass,
            toggleClass: function(n, i, r, o, a) {
                return "boolean" == typeof i || i === t ? r ? e.effects.animateClass.call(this, i ? {
                    add: n
                } : {
                    remove: n
                }, r, o, a) : this._toggleClass(n, i) : e.effects.animateClass.call(this, {
                    toggle: n
                }, i, r, o)
            },
            switchClass: function(t, n, i, r, o) {
                return e.effects.animateClass.call(this, {
                    add: n,
                    remove: t
                }, i, r, o)
            }
        })
    }(), function() {
        function r(t, n, i, r) {
            return e.isPlainObject(t) && (n = t, t = t.effect), t = {
                effect: t
            }, null == n && (n = {}), e.isFunction(n) && (r = n, i = null, n = {}), ("number" == typeof n || e.fx.speeds[n]) && (r = i, i = n, n = {}), e.isFunction(i) && (r = i, i = null), n && e.extend(t, n), i = i || n.duration, t.duration = e.fx.off ? 0 : "number" == typeof i ? i : i in e.fx.speeds ? e.fx.speeds[i] : e.fx.speeds._default, t.complete = r || n.complete, t
        }
        function o(t) {
            return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? !1 : n && e.effects[t] ? !1 : !0
        }
        e.extend(e.effects, {
            version: "1.9.2",
            save: function(e, t) {
                for (var n = 0; t.length > n; n++) null !== t[n] && e.data(i + t[n], e[0].style[t[n]])
            },
            restore: function(e, n) {
                var r, o;
                for (o = 0; n.length > o; o++) null !== n[o] && (r = e.data(i + n[o]), r === t && (r = ""), e.css(n[o], r))
            },
            setMode: function(e, t) {
                return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
            },
            getBaseline: function(e, t) {
                var n, i;
                switch (e[0]) {
                    case "top":
                        n = 0;
                        break;
                    case "middle":
                        n = .5;
                        break;
                    case "bottom":
                        n = 1;
                        break;
                    default:
                        n = e[0] / t.height
                }
                switch (e[1]) {
                    case "left":
                        i = 0;
                        break;
                    case "center":
                        i = .5;
                        break;
                    case "right":
                        i = 1;
                        break;
                    default:
                        i = e[1] / t.width
                }
                return {
                    x: i,
                    y: n
                }
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                var n = {
                        width: t.outerWidth(!0),
                        height: t.outerHeight(!0),
                        "float": t.css("float")
                    },
                    i = e("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }),
                    r = {
                        width: t.width(),
                        height: t.height()
                    },
                    o = document.activeElement;
                try {
                    o.id
                } catch (a) {
                    o = document.body
                }
                return t.wrap(i), (t[0] === o || e.contains(t[0], o)) && e(o).focus(), i = t.parent(), "static" === t.css("position") ? (i.css({
                    position: "relative"
                }), t.css({
                    position: "relative"
                })) : (e.extend(n, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }), e.each(["top", "left", "bottom", "right"], function(e, i) {
                    n[i] = t.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto")
                }), t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), t.css(r), i.css(n).show()
            },
            removeWrapper: function(t) {
                var n = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()), t
            },
            setTransition: function(t, n, i, r) {
                return r = r || {}, e.each(n, function(e, n) {
                    var o = t.cssUnit(n);
                    o[0] > 0 && (r[n] = o[0] * i + o[1])
                }), r
            }
        }), e.fn.extend({
            effect: function() {
                function t(t) {
                    function n() {
                        e.isFunction(o) && o.call(r[0]), e.isFunction(t) && t()
                    }
                    var r = e(this),
                        o = i.complete,
                        a = i.mode;
                    (r.is(":hidden") ? "hide" === a : "show" === a) ? n() : s.call(r[0], i, n)
                }
                var i = r.apply(this, arguments),
                    o = i.mode,
                    a = i.queue,
                    s = e.effects.effect[i.effect],
                    l = !s && n && e.effects[i.effect];
                return e.fx.off || !s && !l ? o ? this[o](i.duration, i.complete) : this.each(function() {
                    i.complete && i.complete.call(this)
                }) : s ? a === !1 ? this.each(t) : this.queue(a || "fx", t) : l.call(this, {
                    options: i,
                    duration: i.duration,
                    callback: i.complete,
                    mode: i.mode
                })
            },
            _show: e.fn.show,
            show: function(e) {
                if (o(e)) return this._show.apply(this, arguments);
                var t = r.apply(this, arguments);
                return t.mode = "show", this.effect.call(this, t)
            },
            _hide: e.fn.hide,
            hide: function(e) {
                if (o(e)) return this._hide.apply(this, arguments);
                var t = r.apply(this, arguments);
                return t.mode = "hide", this.effect.call(this, t)
            },
            __toggle: e.fn.toggle,
            toggle: function(t) {
                if (o(t) || "boolean" == typeof t || e.isFunction(t)) return this.__toggle.apply(this, arguments);
                var n = r.apply(this, arguments);
                return n.mode = "toggle", this.effect.call(this, n)
            },
            cssUnit: function(t) {
                var n = this.css(t),
                    i = [];
                return e.each(["em", "px", "%", "pt"], function(e, t) {
                    n.indexOf(t) > 0 && (i = [parseFloat(n), t])
                }), i
            }
        })
    }(), function() {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, n) {
            t[n] = function(t) {
                return Math.pow(t, e + 2)
            }
        }), e.extend(t, {
            Sine: function(e) {
                return 1 - Math.cos(e * Math.PI / 2)
            },
            Circ: function(e) {
                return 1 - Math.sqrt(1 - e * e)
            },
            Elastic: function(e) {
                return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(e) {
                return e * e * (3 * e - 2)
            },
            Bounce: function(e) {
                for (var t, n = 4;
                     ((t = Math.pow(2, --n)) - 1) / 11 > e;);
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
            }
        }), e.each(t, function(t, n) {
            e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function(e) {
                return 1 - n(1 - e)
            }, e.easing["easeInOut" + t] = function(e) {
                return .5 > e ? n(2 * e) / 2 : 1 - n(-2 * e + 2) / 2
            }
        })
    }()
}(jQuery), jQuery.effects ||
function(e, t) {
    function n(t) {
        var n;
        return t && t.constructor == Array && 3 == t.length ? t : (n = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(t)) ? [parseInt(n[1], 10), parseInt(n[2], 10), parseInt(n[3], 10)] : (n = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(t)) ? [2.55 * parseFloat(n[1]), 2.55 * parseFloat(n[2]), 2.55 * parseFloat(n[3])] : (n = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(t)) ? [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)] : (n = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(t)) ? [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)] : (n = /rgba\(0, 0, 0, 0\)/.exec(t)) ? u.transparent : u[e.trim(t).toLowerCase()]
    }
    function i(t, i) {
        var r;
        do {
            if (r = (e.curCSS || e.css)(t, i), "" != r && "transparent" != r || e.nodeName(t, "body")) break;
            i = "backgroundColor"
        } while (t = t.parentNode);
        return n(r)
    }
    function r() {
        var e, t, n = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
            i = {};
        if (n && n.length && n[0] && n[n[0]]) for (var r = n.length; r--;) e = n[r], "string" == typeof n[e] && (t = e.replace(/\-(\w)/g, function(e, t) {
            return t.toUpperCase()
        }), i[t] = n[e]);
        else for (e in n)"string" == typeof n[e] && (i[e] = n[e]);
        return i
    }
    function o(t) {
        var n, i;
        for (n in t) i = t[n], (null == i || e.isFunction(i) || n in f || /scrollbar/.test(n) || !/color/i.test(n) && isNaN(parseFloat(i))) && delete t[n];
        return t
    }
    function a(e, t) {
        var n, i = {
            _: 0
        };
        for (n in t) e[n] != t[n] && (i[n] = t[n]);
        return i
    }
    function s(t, n, i, r) {
        return "object" == typeof t && (r = n, i = null, n = t, t = n.effect), e.isFunction(n) && (r = n, i = null, n = {}), ("number" == typeof n || e.fx.speeds[n]) && (r = i, i = n, n = {}), e.isFunction(i) && (r = i, i = null), n = n || {}, i = i || n.duration, i = e.fx.off ? 0 : "number" == typeof i ? i : i in e.fx.speeds ? e.fx.speeds[i] : e.fx.speeds._default, r = r || n.complete, [t, n, i, r]
    }
    function l(t) {
        return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects[t] ? !1 : !0
    }
    e.effects = {}, e.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function(t, r) {
        e.fx.step[r] = function(e) {
            e.colorInit || (e.start = i(e.elem, r), e.end = n(e.end), e.colorInit = !0), e.elem.style[r] = "rgb(" + Math.max(Math.min(parseInt(e.pos * (e.end[0] - e.start[0]) + e.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[1] - e.start[1]) + e.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(e.pos * (e.end[2] - e.start[2]) + e.start[2], 10), 255), 0) + ")"
        }
    });
    var u = {
            aqua: [0, 255, 255],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            black: [0, 0, 0],
            blue: [0, 0, 255],
            brown: [165, 42, 42],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgrey: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkviolet: [148, 0, 211],
            fuchsia: [255, 0, 255],
            gold: [255, 215, 0],
            green: [0, 128, 0],
            indigo: [75, 0, 130],
            khaki: [240, 230, 140],
            lightblue: [173, 216, 230],
            lightcyan: [224, 255, 255],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            navy: [0, 0, 128],
            olive: [128, 128, 0],
            orange: [255, 165, 0],
            pink: [255, 192, 203],
            purple: [128, 0, 128],
            violet: [128, 0, 128],
            red: [255, 0, 0],
            silver: [192, 192, 192],
            white: [255, 255, 255],
            yellow: [255, 255, 0],
            transparent: [255, 255, 255]
        },
        c = ["add", "remove", "toggle"],
        f = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
    e.effects.animateClass = function(t, n, i, s) {
        return e.isFunction(i) && (s = i, i = null), this.queue(function() {
            var l, u = e(this),
                f = u.attr("style") || " ",
                d = o(r.call(this)),
                p = u.attr("class") || "";
            e.each(c, function(e, n) {
                t[n] && u[n + "Class"](t[n])
            }), l = o(r.call(this)), u.attr("class", p), u.animate(a(d, l), {
                queue: !1,
                duration: n,
                easing: i,
                complete: function() {
                    e.each(c, function(e, n) {
                        t[n] && u[n + "Class"](t[n])
                    }), "object" == typeof u.attr("style") ? (u.attr("style").cssText = "", u.attr("style").cssText = f) : u.attr("style", f), s && s.apply(this, arguments), e.dequeue(this)
                }
            })
        })
    }, e.fn.extend({
        _addClass: e.fn.addClass,
        addClass: function(t, n, i, r) {
            return n ? e.effects.animateClass.apply(this, [{
                add: t
            },
                n, i, r]) : this._addClass(t)
        },
        _removeClass: e.fn.removeClass,
        removeClass: function(t, n, i, r) {
            return n ? e.effects.animateClass.apply(this, [{
                remove: t
            },
                n, i, r]) : this._removeClass(t)
        },
        _toggleClass: e.fn.toggleClass,
        toggleClass: function(n, i, r, o, a) {
            return "boolean" == typeof i || i === t ? r ? e.effects.animateClass.apply(this, [i ? {
                add: n
            } : {
                remove: n
            },
                r, o, a]) : this._toggleClass(n, i) : e.effects.animateClass.apply(this, [{
                toggle: n
            },
                i, r, o])
        },
        switchClass: function(t, n, i, r, o) {
            return e.effects.animateClass.apply(this, [{
                add: n,
                remove: t
            },
                i, r, o])
        }
    }), e.extend(e.effects, {
        version: "1.8.22",
        save: function(e, t) {
            for (var n = 0; n < t.length; n++) null !== t[n] && e.data("ec.storage." + t[n], e[0].style[t[n]])
        },
        restore: function(e, t) {
            for (var n = 0; n < t.length; n++) null !== t[n] && e.css(t[n], e.data("ec.storage." + t[n]))
        },
        setMode: function(e, t) {
            return "toggle" == t && (t = e.is(":hidden") ? "show" : "hide"), t
        },
        getBaseline: function(e, t) {
            var n, i;
            switch (e[0]) {
                case "top":
                    n = 0;
                    break;
                case "middle":
                    n = .5;
                    break;
                case "bottom":
                    n = 1;
                    break;
                default:
                    n = e[0] / t.height
            }
            switch (e[1]) {
                case "left":
                    i = 0;
                    break;
                case "center":
                    i = .5;
                    break;
                case "right":
                    i = 1;
                    break;
                default:
                    i = e[1] / t.width
            }
            return {
                x: i,
                y: n
            }
        },
        createWrapper: function(t) {
            if (t.parent().is(".ui-effects-wrapper")) return t.parent();
            var n = {
                    width: t.outerWidth(!0),
                    height: t.outerHeight(!0),
                    "float": t.css("float")
                },
                i = e("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }),
                r = document.activeElement;
            try {
                r.id
            } catch (o) {
                r = document.body
            }
            return t.wrap(i), (t[0] === r || e.contains(t[0], r)) && e(r).focus(), i = t.parent(), "static" == t.css("position") ? (i.css({
                position: "relative"
            }), t.css({
                position: "relative"
            })) : (e.extend(n, {
                position: t.css("position"),
                zIndex: t.css("z-index")
            }), e.each(["top", "left", "bottom", "right"], function(e, i) {
                n[i] = t.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto")
            }), t.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            })), i.css(n).show()
        },
        removeWrapper: function(t) {
            var n, i = document.activeElement;
            return t.parent().is(".ui-effects-wrapper") ? (n = t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus(), n) : t
        },
        setTransition: function(t, n, i, r) {
            return r = r || {}, e.each(n, function(e, n) {
                var o = t.cssUnit(n);
                o[0] > 0 && (r[n] = o[0] * i + o[1])
            }), r
        }
    }), e.fn.extend({
        effect: function(t, n, i, r) {
            var o = s.apply(this, arguments),
                a = {
                    options: o[1],
                    duration: o[2],
                    callback: o[3]
                },
                l = a.options.mode,
                u = e.effects[t];
            return e.fx.off || !u ? l ? this[l](a.duration, a.callback) : this.each(function() {
                a.callback && a.callback.call(this)
            }) : u.call(this, a)
        },
        _show: e.fn.show,
        show: function(e) {
            if (l(e)) return this._show.apply(this, arguments);
            var t = s.apply(this, arguments);
            return t[1].mode = "show", this.effect.apply(this, t)
        },
        _hide: e.fn.hide,
        hide: function(e) {
            if (l(e)) return this._hide.apply(this, arguments);
            var t = s.apply(this, arguments);
            return t[1].mode = "hide", this.effect.apply(this, t)
        },
        __toggle: e.fn.toggle,
        toggle: function(t) {
            if (l(t) || "boolean" == typeof t || e.isFunction(t)) return this.__toggle.apply(this, arguments);
            var n = s.apply(this, arguments);
            return n[1].mode = "toggle", this.effect.apply(this, n)
        },
        cssUnit: function(t) {
            var n = this.css(t),
                i = [];
            return e.each(["em", "px", "%", "pt"], function(e, t) {
                n.indexOf(t) > 0 && (i = [parseFloat(n), t])
            }), i
        }
    }), e.easing.jswing = e.easing.swing, e.extend(e.easing, {
        def: "easeOutQuad",
        swing: function(t, n, i, r, o) {
            return e.easing[e.easing.def](t, n, i, r, o)
        },
        easeInQuad: function(e, t, n, i, r) {
            return i * (t /= r) * t + n
        },
        easeOutQuad: function(e, t, n, i, r) {
            return -i * (t /= r) * (t - 2) + n
        },
        easeInOutQuad: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t + n : -i / 2 * (--t * (t - 2) - 1) + n
        },
        easeInCubic: function(e, t, n, i, r) {
            return i * (t /= r) * t * t + n
        },
        easeOutCubic: function(e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t + 1) + n
        },
        easeInOutCubic: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t + n : i / 2 * ((t -= 2) * t * t + 2) + n
        },
        easeInQuart: function(e, t, n, i, r) {
            return i * (t /= r) * t * t * t + n
        },
        easeOutQuart: function(e, t, n, i, r) {
            return -i * ((t = t / r - 1) * t * t * t - 1) + n
        },
        easeInOutQuart: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t + n : -i / 2 * ((t -= 2) * t * t * t - 2) + n
        },
        easeInQuint: function(e, t, n, i, r) {
            return i * (t /= r) * t * t * t * t + n
        },
        easeOutQuint: function(e, t, n, i, r) {
            return i * ((t = t / r - 1) * t * t * t * t + 1) + n
        },
        easeInOutQuint: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
        },
        easeInSine: function(e, t, n, i, r) {
            return -i * Math.cos(t / r * (Math.PI / 2)) + i + n
        },
        easeOutSine: function(e, t, n, i, r) {
            return i * Math.sin(t / r * (Math.PI / 2)) + n
        },
        easeInOutSine: function(e, t, n, i, r) {
            return -i / 2 * (Math.cos(Math.PI * t / r) - 1) + n
        },
        easeInExpo: function(e, t, n, i, r) {
            return 0 == t ? n : i * Math.pow(2, 10 * (t / r - 1)) + n
        },
        easeOutExpo: function(e, t, n, i, r) {
            return t == r ? n + i : i * (-Math.pow(2, -10 * t / r) + 1) + n
        },
        easeInOutExpo: function(e, t, n, i, r) {
            return 0 == t ? n : t == r ? n + i : (t /= r / 2) < 1 ? i / 2 * Math.pow(2, 10 * (t - 1)) + n : i / 2 * (-Math.pow(2, -10 * --t) + 2) + n
        },
        easeInCirc: function(e, t, n, i, r) {
            return -i * (Math.sqrt(1 - (t /= r) * t) - 1) + n
        },
        easeOutCirc: function(e, t, n, i, r) {
            return i * Math.sqrt(1 - (t = t / r - 1) * t) + n
        },
        easeInOutCirc: function(e, t, n, i, r) {
            return (t /= r / 2) < 1 ? -i / 2 * (Math.sqrt(1 - t * t) - 1) + n : i / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
        },
        easeInElastic: function(e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if (a || (a = .3 * r), s < Math.abs(i)) {
                s = i;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(i / s);
            return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a)) + n
        },
        easeOutElastic: function(e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (1 == (t /= r)) return n + i;
            if (a || (a = .3 * r), s < Math.abs(i)) {
                s = i;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(i / s);
            return s * Math.pow(2, -10 * t) * Math.sin((t * r - o) * (2 * Math.PI) / a) + i + n
        },
        easeInOutElastic: function(e, t, n, i, r) {
            var o = 1.70158,
                a = 0,
                s = i;
            if (0 == t) return n;
            if (2 == (t /= r / 2)) return n + i;
            if (a || (a = r * (.3 * 1.5)), s < Math.abs(i)) {
                s = i;
                var o = a / 4
            } else var o = a / (2 * Math.PI) * Math.asin(i / s);
            return 1 > t ? -.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a)) + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - o) * (2 * Math.PI) / a) * .5 + i + n
        },
        easeInBack: function(e, n, i, r, o, a) {
            return a == t && (a = 1.70158), r * (n /= o) * n * ((a + 1) * n - a) + i
        },
        easeOutBack: function(e, n, i, r, o, a) {
            return a == t && (a = 1.70158), r * ((n = n / o - 1) * n * ((a + 1) * n + a) + 1) + i
        },
        easeInOutBack: function(e, n, i, r, o, a) {
            return a == t && (a = 1.70158), (n /= o / 2) < 1 ? r / 2 * (n * n * (((a *= 1.525) + 1) * n - a)) + i : r / 2 * ((n -= 2) * n * (((a *= 1.525) + 1) * n + a) + 2) + i
        },
        easeInBounce: function(t, n, i, r, o) {
            return r - e.easing.easeOutBounce(t, o - n, 0, r, o) + i
        },
        easeOutBounce: function(e, t, n, i, r) {
            return (t /= r) < 1 / 2.75 ? i * (7.5625 * t * t) + n : 2 / 2.75 > t ? i * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : 2.5 / 2.75 > t ? i * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : i * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
        },
        easeInOutBounce: function(t, n, i, r, o) {
            return o / 2 > n ? .5 * e.easing.easeInBounce(t, 2 * n, 0, r, o) + i : .5 * e.easing.easeOutBounce(t, 2 * n - o, 0, r, o) + .5 * r + i
        }
    })
}(jQuery), function(e) {
    e.fn.fullpage = function(t) {
        function n(n) {
            var r = n.originalEvent;
            if (t.autoScrolling && n.preventDefault(), !i(n.target) && (n = e(".section.active"), !O && !D)) if (r = S(r), W = r.y, R = r.x, n.find(".slides").length && Math.abs(B - R) > Math.abs(q - W)) Math.abs(B - R) > e(window).width() / 100 * t.touchSensitivity && (B > R ? e.fn.fullpage.moveSlideRight() : e.fn.fullpage.moveSlideLeft());
            else if (t.autoScrolling && (r = n.find(".slides").length ? n.find(".slide.active").find(".scrollable") : n.find(".scrollable"), Math.abs(q - W) > e(window).height() / 100 * t.touchSensitivity)) if (q > W) if (0 < r.length) {
                if (!p("bottom", r)) return !0;
                e.fn.fullpage.moveSectionDown()
            } else e.fn.fullpage.moveSectionDown();
            else if (W > q) if (0 < r.length) {
                if (!p("top", r)) return !0;
                e.fn.fullpage.moveSectionUp()
            } else e.fn.fullpage.moveSectionUp()
        }
        function i(n, r) {
            r = r || 0;
            var o = e(n).parent();
            return r < t.normalScrollElementTouchThreshold && o.is(t.normalScrollElements) ? !0 : r == t.normalScrollElementTouchThreshold ? !1 : i(o, ++r)
        }
        function r(e) {
            e = S(e.originalEvent), q = e.y, B = e.x
        }
        function o(n) {
            if (t.autoScrolling) {
                n = window.event || n, n = Math.max(-1, Math.min(1, n.wheelDelta || -n.deltaY || -n.detail));
                var i;
                if (i = e(".section.active"), !O) if (i = i.find(".slides").length ? i.find(".slide.active").find(".scrollable") : i.find(".scrollable"), 0 > n) if (0 < i.length) {
                    if (!p("bottom", i)) return !0;
                    e.fn.fullpage.moveSectionDown()
                } else e.fn.fullpage.moveSectionDown();
                else if (0 < i.length) {
                    if (!p("top", i)) return !0;
                    e.fn.fullpage.moveSectionUp()
                } else e.fn.fullpage.moveSectionUp();
                return !1
            }
        }
        function a(n) {
            var i = e(".section.active").find(".slides");
            if (i.length && !D) {
                var r = i.find(".slide.active"),
                    o = null,
                    o = "prev" === n ? r.prev(".slide") : r.next(".slide");
                if (!o.length) {
                    if (!t.loopHorizontal) return;
                    o = "prev" === n ? r.siblings(":last") : r.siblings(":first")
                }
                D = !0, l(i, o)
            }
        }
        function s(n, i, r) {
            var o = {},
                a = n.position();
            if ("undefined" != typeof a) {
                var a = a.top,
                    s = h(n),
                    l = n.data("anchor"),
                    u = n.index(".section"),
                    c = n.find(".slide.active"),
                    p = e(".section.active"),
                    g = p.index(".section") + 1,
                    m = P;
                if (c.length) var v = c.data("anchor"),
                    b = c.index();
                if (t.autoScrolling && t.continuousVertical && "undefined" != typeof r && (!r && "up" == s || r && "down" == s)) {
                    r ? e(".section.active").before(p.nextAll(".section")) : e(".section.active").after(p.prevAll(".section").get().reverse()), E(e(".section.active").position().top);
                    var x = p,
                        a = n.position(),
                        a = a.top,
                        s = h(n)
                }
                n.addClass("active").siblings().removeClass("active"), O = !0, "undefined" != typeof l && C(b, v, l), t.autoScrolling ? (o.top = -a, n = L.selector) : (o.scrollTop = a, n = "html, body");
                var w = function() {
                    x && x.length && (r ? e(".section:first").before(x) : e(".section:last").after(x), E(e(".section.active").position().top))
                };
                t.css3 && t.autoScrolling ? (e.isFunction(t.onLeave) && !m && t.onLeave.call(this, g, u + 1, s), y("translate3d(0px, -" + a + "px, 0px)", !0), setTimeout(function() {
                    w(), e.isFunction(t.afterLoad) && !m && t.afterLoad.call(this, l, u + 1), setTimeout(function() {
                        O = !1, e.isFunction(i) && i.call(this)
                    }, N)
                }, t.scrollingSpeed)) : (e.isFunction(t.onLeave) && !m && t.onLeave.call(this, g, u + 1, s), e(n).animate(o, t.scrollingSpeed, t.easing, function() {
                    w(), e.isFunction(t.afterLoad) && !m && t.afterLoad.call(this, l, u + 1), setTimeout(function() {
                        O = !1, e.isFunction(i) && i.call(this)
                    }, N)
                })), A = l, t.autoScrolling && (d(l), f(l, u))
            }
        }
        function l(n, i) {
            var r = i.position(),
                o = n.find(".slidesContainer").parent(),
                a = i.index(),
                s = n.closest(".section"),
                l = s.index(".section"),
                u = s.data("anchor"),
                c = s.find(".fullPage-slidesNav"),
                f = i.data("anchor"),
                d = P;
            if (t.onSlideLeave) {
                var p, h = s.find(".slide.active").index();
                p = h == a ? "none" : h > a ? "left" : "right", d || e.isFunction(t.onSlideLeave) && t.onSlideLeave.call(this, u, l + 1, h, p)
            }
            i.addClass("active").siblings().removeClass("active"), "undefined" == typeof f && (f = a), s.hasClass("active") && (t.loopHorizontal || (s.find(".controlArrow.prev").toggle(0 != a), s.find(".controlArrow.next").toggle(!i.is(":last-child"))), C(a, f, u)), t.css3 ? (r = "translate3d(-" + r.left + "px, 0px, 0px)", n.find(".slidesContainer").toggleClass("easing", 0 < t.scrollingSpeed).css(k(r)), setTimeout(function() {
                d || e.isFunction(t.afterSlideLoad) && t.afterSlideLoad.call(this, u, l + 1, f, a), D = !1
            }, t.scrollingSpeed, t.easing)) : o.animate({
                scrollLeft: r.left
            }, t.scrollingSpeed, t.easing, function() {
                d || e.isFunction(t.afterSlideLoad) && t.afterSlideLoad.call(this, u, l + 1, f, a), D = !1
            }), c.find(".active").removeClass("active"), c.find("li").eq(a).find("a").addClass("active")
        }
        function u() {
            P = !0;
            var n = e(window).width();
            H = e(window).height(), t.resize && c(H, n), e(".section").each(function() {
                if (parseInt(e(this).css("padding-bottom")), parseInt(e(this).css("padding-top")), t.verticalCentered && e(this).find(".tableCell").css("height", v(e(this)) + "px"), e(this).css("height", H + "px"), t.scrollOverflow) {
                    var n = e(this).find(".slide");
                    n.length ? n.each(function() {
                        g(e(this))
                    }) : g(e(this))
                }
                n = e(this).find(".slides"), n.length && l(n, n.find(".slide.active"))
            }), e(".section.active").position(), n = e(".section.active"), n.index(".section") && s(n), P = !1, e.isFunction(t.afterResize) && t.afterResize.call(this)
        }
        function c(t, n) {
            var i = 825,
                r = t;
            825 > t || 900 > n ? (900 > n && (r = n, i = 900), i = (100 * r / i).toFixed(2), e("body").css("font-size", i + "%")) : e("body").css("font-size", "100%")
        }
        function f(n, i) {
            t.navigation && (e("#fullPage-nav").find(".active").removeClass("active"), n ? e("#fullPage-nav").find('a[href="#' + n + '"]').addClass("active") : e("#fullPage-nav").find("li").eq(i).find("a").addClass("active"))
        }
        function d(n) {
            t.menu && (e(t.menu).find(".active").removeClass("active"), e(t.menu).find('[data-menuanchor="' + n + '"]').addClass("active"))
        }
        function p(e, t) {
            return "top" === e ? !t.scrollTop() : "bottom" === e ? t.scrollTop() + t.innerHeight() >= t[0].scrollHeight : void 0
        }
        function h(t) {
            var n = e(".section.active").index(".section");
            return t = t.index(".section"), n > t ? "up" : "down"
        }
        function g(e) {
            e.css("overflow", "hidden");
            var n = e.closest(".section"),
                i = e.find(".scrollable");
            if (i.length) var r = e.find(".scrollable").get(0).scrollHeight;
            else r = e.get(0).scrollHeight, t.verticalCentered && (r = e.find(".tableCell").get(0).scrollHeight);
            n = H - parseInt(n.css("padding-bottom")) - parseInt(n.css("padding-top")), r > n ? i.length ? i.css("height", n + "px").parent().css("height", n + "px") : (t.verticalCentered ? e.find(".tableCell").wrapInner('<div class="scrollable" />') : e.wrapInner('<div class="scrollable" />'), e.find(".scrollable").slimScroll({
                height: n + "px",
                size: "10px",
                alwaysVisible: !0
            })) : (e.find(".scrollable").children().first().unwrap().unwrap(), e.find(".slimScrollBar").remove(), e.find(".slimScrollRail").remove()), e.css("overflow", "")
        }
        function m(e) {
            e.addClass("table").wrapInner('<div class="tableCell" style="height:' + v(e) + 'px;" />')
        }
        function v(e) {
            var n = H;
            return (t.paddingTop || t.paddingBottom) && (n = e, n.hasClass("section") || (n = e.closest(".section")), e = parseInt(n.css("padding-top")) + parseInt(n.css("padding-bottom")), n = H - e), n
        }
        function y(e, t) {
            L.toggleClass("easing", t), L.css(k(e))
        }
        function b(t, n) {
            "undefined" == typeof n && (n = 0);
            var i = isNaN(t) ? e('[data-anchor="' + t + '"]') : e(".section").eq(t - 1);
            t === A || i.hasClass("active") ? x(i, n) : s(i, function() {
                x(i, n)
            })
        }
        function x(e, t) {
            if ("undefined" != typeof t) {
                var n = e.find(".slides"),
                    i = n.find('[data-anchor="' + t + '"]');
                i.length || (i = n.find(".slide").eq(t)), i.length && l(n, i)
            }
        }
        function w(e, n) {
            e.append('<div class="fullPage-slidesNav"><ul></ul></div>');
            var i = e.find(".fullPage-slidesNav");
            i.addClass(t.slidesNavPosition);
            for (var r = 0; n > r; r++) i.find("ul").append('<li><a href="#"><span></span></a></li>');
            i.css("margin-left", "-" + i.width() / 2 + "px"), i.find("li").first().find("a").addClass("active")
        }
        function C(e, n, i) {
            var r = "";
            t.anchors.length && (e ? ("undefined" != typeof i && (r = i), "undefined" == typeof n && (n = e), j = n, location.hash = r + "/" + n) : ("undefined" != typeof e && (j = n), location.hash = i))
        }
        function T() {
            var e, t = document.createElement("p"),
                n = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            document.body.insertBefore(t, null);
            for (var i in n) void 0 !== t.style[i] && (t.style[i] = "translate3d(1px,1px,1px)", e = window.getComputedStyle(t).getPropertyValue(n[i]));
            return document.body.removeChild(t), void 0 !== e && 0 < e.length && "none" !== e
        }
        function S(e) {
            var t = [];
            return window.navigator.msPointerEnabled ? (t.y = e.pageY, t.x = e.pageX) : (t.y = e.touches[0].pageY, t.x = e.touches[0].pageX), t
        }
        function E(e) {
            t.css3 ? y("translate3d(0px, -" + e + "px, 0px)", !1) : L.css("top", -e)
        }
        function k(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }
        t = e.extend({
            verticalCentered: !0,
            resize: !0,
            slidesColor: [],
            anchors: [],
            scrollingSpeed: 700,
            easing: "easeInQuart",
            menu: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationColor: "#000",
            navigationTooltips: [],
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            controlArrowColor: "#fff",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            autoScrolling: !0,
            scrollOverflow: !1,
            css3: !1,
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            normalScrollElements: null,
            keyboardScrolling: !0,
            touchSensitivity: 5,
            continuousVertical: !1,
            animateAnchor: !0,
            normalScrollElementTouchThreshold: 5,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterSlideLoad: null,
            onSlideLeave: null
        }, t), t.continuousVertical && (t.loopTop || t.loopBottom) && (t.continuousVertical = !1, console && console.log && console.log("Option loopTop/loopBottom is mutually exclusive with continuousVertical; continuousVertical disabled"));
        var N = 600;
        e.fn.fullpage.setAutoScrolling = function(n) {
            t.autoScrolling = n, n = e(".section.active"), t.autoScrolling ? (e("html, body").css({
                overflow: "hidden",
                height: "100%"
            }), n.length && E(n.position().top)) : (e("html, body").css({
                overflow: "auto",
                height: "auto"
            }), E(0), e("html, body").scrollTop(n.position().top))
        }, e.fn.fullpage.setScrollingSpeed = function(e) {
            t.scrollingSpeed = e
        }, e.fn.fullpage.setMouseWheelScrolling = function(e) {
            e ? document.addEventListener ? (document.addEventListener("mousewheel", o, !1), document.addEventListener("wheel", o, !1)) : document.attachEvent("onmousewheel", o) : document.addEventListener ? (document.removeEventListener("mousewheel", o, !1), document.removeEventListener("wheel", o, !1)) : document.detachEvent("onmousewheel", o)
        }, e.fn.fullpage.setAllowScrolling = function(t) {
            t ? (e.fn.fullpage.setMouseWheelScrolling(!0), M && (e(document).off("touchstart MSPointerDown").on("touchstart MSPointerDown", r), e(document).off("touchmove MSPointerMove").on("touchmove MSPointerMove", n))) : (e.fn.fullpage.setMouseWheelScrolling(!1), M && (e(document).off("touchstart MSPointerDown"), e(document).off("touchmove MSPointerMove")))
        }, e.fn.fullpage.setKeyboardScrolling = function(e) {
            t.keyboardScrolling = e
        };
        var A, j, D = !1,
            M = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/),
            L = e(this),
            H = e(window).height(),
            O = !1,
            P = !1;
        if (e.fn.fullpage.setAllowScrolling(!0), t.css3 && (t.css3 = T()), e(this).length ? L.css({
                height: "100%",
                position: "relative",
                "-ms-touch-action": "none"
            }) : (e("body").wrapInner('<div id="superContainer" />'), L = e("#superContainer")), t.navigation) {
            e("body").append('<div id="fullPage-nav"><ul></ul></div>');
            var F = e("#fullPage-nav");
            F.css("color", t.navigationColor), F.addClass(t.navigationPosition)
        }
        e(".section").each(function(n) {
            var i = e(this),
                r = e(this).find(".slide"),
                o = r.length;
            if (n || 0 !== e(".section.active").length || e(this).addClass("active"), e(this).css("height", H + "px"), (t.paddingTop || t.paddingBottom) && e(this).css("padding", t.paddingTop + " 0 " + t.paddingBottom + " 0"), "undefined" != typeof t.slidesColor[n] && e(this).css("background-color", t.slidesColor[n]), "undefined" != typeof t.anchors[n] && e(this).attr("data-anchor", t.anchors[n]), t.navigation) {
                var a = "";
                t.anchors.length && (a = t.anchors[n]), n = t.navigationTooltips[n], "undefined" == typeof n && (n = ""), F.find("ul").append('<li data-tooltip="' + n + '"><a href="#' + a + '"><span></span></a></li>')
            }
            if (o > 0) {
                var a = 100 * o,
                    s = 100 / o;
                r.wrapAll('<div class="slidesContainer" />'), r.parent().wrap('<div class="slides" />'), e(this).find(".slidesContainer").css("width", a + "%"), e(this).find(".slides").after('<div class="controlArrow prev"></div><div class="controlArrow next"></div>'), "#fff" != t.controlArrowColor && (e(this).find(".controlArrow.next").css("border-color", "transparent transparent transparent " + t.controlArrowColor), e(this).find(".controlArrow.prev").css("border-color", "transparent " + t.controlArrowColor + " transparent transparent")), t.loopHorizontal || e(this).find(".controlArrow.prev").hide(), t.slidesNavigation && w(e(this), o), r.each(function(n) {
                    n || 0 != i.find(".slide.active").length || e(this).addClass("active"), e(this).css("width", s + "%"), t.verticalCentered && m(e(this))
                })
            } else t.verticalCentered && m(e(this))
        }).promise().done(function() {
            e.fn.fullpage.setAutoScrolling(t.autoScrolling);
            var n = e(".section.active").find(".slide.active");
            if (n.length && (0 != e(".section.active").index(".section") || 0 == e(".section.active").index(".section") && 0 != n.index())) {
                var i = t.scrollingSpeed;
                e.fn.fullpage.setScrollingSpeed(0), l(e(".section.active").find(".slides"), n), e.fn.fullpage.setScrollingSpeed(i)
            }
            t.fixedElements && t.css3 && e(t.fixedElements).appendTo("body"), t.navigation && (F.css("margin-top", "-" + F.height() / 2 + "px"), F.find("li").eq(e(".section.active").index(".section")).find("a").addClass("active")), t.menu && t.css3 && e(t.menu).appendTo("body"), t.scrollOverflow ? e(window).on("load", function() {
                e(".section").each(function() {
                    var t = e(this).find(".slide");
                    t.length ? t.each(function() {
                        g(e(this))
                    }) : g(e(this))
                }), e.isFunction(t.afterRender) && t.afterRender.call(this)
            }) : e.isFunction(t.afterRender) && t.afterRender.call(this), n = window.location.hash.replace("#", "").split("/")[0], n.length && (i = e('[data-anchor="' + n + '"]'), !t.animateAnchor && i.length && (E(i.position().top), e.isFunction(t.afterLoad) && t.afterLoad.call(this, n, i.index(".section") + 1), i.addClass("active").siblings().removeClass("active"))), e(window).on("load", function() {
                var e = window.location.hash.replace("#", "").split("/"),
                    t = e[0],
                    e = e[1];
                t && b(t, e)
            })
        });
        var I, _ = !1;
        e(window).scroll(function(n) {
            if (!t.autoScrolling) {
                var i = e(window).scrollTop();
                if (n = e(".section").map(function() {
                        return e(this).offset().top < i + 100 ? e(this) : void 0
                    }), n = n[n.length - 1], !n.hasClass("active")) {
                    var r = e(".section.active").index(".section") + 1;
                    _ = !0;
                    var o = h(n);
                    n.addClass("active").siblings().removeClass("active");
                    var a = n.data("anchor");
                    e.isFunction(t.onLeave) && t.onLeave.call(this, r, n.index(".section") + 1, o), e.isFunction(t.afterLoad) && t.afterLoad.call(this, a, n.index(".section") + 1), d(a), f(a, 0), t.anchors.length && !O && (A = a, location.hash = a), clearTimeout(I), I = setTimeout(function() {
                        _ = !1
                    }, 100)
                }
            }
        });
        var q = 0,
            B = 0,
            W = 0,
            R = 0;
        if (e.fn.fullpage.moveSectionUp = function() {
                var n = e(".section.active").prev(".section");
                n.length || !t.loopTop && !t.continuousVertical || (n = e(".section").last()), n.length && s(n, null, !0)
            }, e.fn.fullpage.moveSectionDown = function() {
                var n = e(".section.active").next(".section");
                n.length || !t.loopBottom && !t.continuousVertical || (n = e(".section").first()), (0 < n.length || !n.length && (t.loopBottom || t.continuousVertical)) && s(n, null, !1)
            }, e.fn.fullpage.moveTo = function(t, n) {
                var i = "",
                    i = isNaN(t) ? e('[data-anchor="' + t + '"]') : e(".section").eq(t - 1);
                "undefined" != typeof n ? b(t, n) : 0 < i.length && s(i)
            }, e.fn.fullpage.moveSlideRight = function() {
                a("next")
            }, e.fn.fullpage.moveSlideLeft = function() {
                a("prev")
            }, e(window).on("hashchange", function() {
                if (!_) {
                    var e = window.location.hash.replace("#", "").split("/"),
                        t = e[0],
                        e = e[1],
                        n = "undefined" == typeof A,
                        i = "undefined" == typeof A && "undefined" == typeof e;
                    (t && t !== A && !n || i || !D && j != e) && b(t, e)
                }
            }), e(document).keydown(function(n) {
                if (t.keyboardScrolling && !O) switch (n.which) {
                    case 38:
                    case 33:
                        e.fn.fullpage.moveSectionUp();
                        break;
                    case 40:
                    case 34:
                        e.fn.fullpage.moveSectionDown();
                        break;
                    case 37:
                        e.fn.fullpage.moveSlideLeft();
                        break;
                    case 39:
                        e.fn.fullpage.moveSlideRight()
                }
            }), e(document).on("click", "#fullPage-nav a", function(t) {
                t.preventDefault(), t = e(this).parent().index(), s(e(".section").eq(t))
            }), e(document).on({
                mouseenter: function() {
                    var n = e(this).data("tooltip");
                    e('<div class="fullPage-tooltip ' + t.navigationPosition + '">' + n + "</div>").hide().appendTo(e(this)).fadeIn(200)
                },
                mouseleave: function() {
                    e(this).find(".fullPage-tooltip").fadeOut().remove()
                }
            }, "#fullPage-nav li"), t.normalScrollElements && (e(document).on("mouseover", t.normalScrollElements, function() {
                e.fn.fullpage.setMouseWheelScrolling(!1)
            }), e(document).on("mouseout", t.normalScrollElements, function() {
                e.fn.fullpage.setMouseWheelScrolling(!0)
            })), e(".section").on("click", ".controlArrow", function() {
                e(this).hasClass("prev") ? e.fn.fullpage.moveSlideLeft() : e.fn.fullpage.moveSlideRight()
            }), e(".section").on("click", ".toSlide", function(t) {
                t.preventDefault(), t = e(this).closest(".section").find(".slides"), t.find(".slide.active");
                var n = null,
                    n = t.find(".slide").eq(e(this).data("index") - 1);
                0 < n.length && l(t, n)
            }), !M) {
            var z;
            e(window).resize(function() {
                clearTimeout(z), z = setTimeout(u, 500)
            })
        }
        var $ = "onorientationchange" in window ? "orientationchange" : "resize";
        e(window).bind($, function() {
            M && u()
        }), e(document).on("click", ".fullPage-slidesNav a", function(t) {
            t.preventDefault(), t = e(this).closest(".section").find(".slides");
            var n = t.find(".slide").eq(e(this).closest("li").index());
            l(t, n)
        })
    }
}(jQuery), jQuery.fn.highlight = function(e) {
    function t(e, n) {
        var i = 0;
        if (3 == e.nodeType) {
            var r = e.data.toUpperCase().indexOf(n);
            if (r >= 0) {
                var o = document.createElement("span");
                o.className = "jqueryhighlight";
                var a = e.splitText(r),
                    s = (a.splitText(n.length), a.cloneNode(!0));
                o.appendChild(s), a.parentNode.replaceChild(o, a), i = 1
            }
        } else if (1 == e.nodeType && e.childNodes && !/(script|style)/i.test(e.tagName)) for (var l = 0; l < e.childNodes.length; ++l) l += t(e.childNodes[l], n);
        return i
    }
    return this.length && e && e.length ? this.each(function() {
        t(this, e.toUpperCase())
    }) : this
}, jQuery.fn.removeHighlight = function() {
    return this.find("span.jqueryhighlight").each(function() {
        with(this.parentNode.firstChild.nodeName, this.parentNode) replaceChild(this.firstChild, this), normalize()
    }).end()
}, function() {
    function e(e) {
        if (!$.isFunction(e)) return e;
        var t = function() {
            try {
                return e.apply(this, arguments)
            } catch (t) {
                throw w && w.trackJsError && w.trackJsError(t), t
            }
        };
        return t.guid = e.guid = e.guid || jQuery.guid++, t
    }
    var t = jQuery.fn.on;
    jQuery.fn.extend({
        on: function(n, i, r, o, a) {
            return t.call(this, n, i, r, e(o), a)
        }
    });
    var n = jQuery.fn.ready;
    jQuery.fn.extend({
        ready: function(t) {
            n.call(this, e(t))
        }
    });
    var i = jQuery.ajax;
    jQuery.ajax = function(t) {
        return t.complete = e(t.complete), t.error = e(t.error), t.success = e(t.success), e(i)(t)
    }
}();