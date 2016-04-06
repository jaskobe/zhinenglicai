(function() {
    var t = this,
        e = t._,
        n = {},
        r = Array.prototype,
        i = Object.prototype,
        o = Function.prototype,
        a = r.push,
        s = r.slice,
        c = r.concat,
        u = i.toString,
        l = i.hasOwnProperty,
        h = r.forEach,
        f = r.map,
        d = r.reduce,
        p = r.reduceRight,
        g = r.filter,
        m = r.every,
        v = r.some,
        y = r.indexOf,
        b = r.lastIndexOf,
        w = Array.isArray,
        x = Object.keys,
        E = o.bind,
        _ = function(t) {
            return t instanceof _ ? t : this instanceof _ ? void(this._wrapped = t) : new _(t)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = _), exports._ = _) : t._ = _, _.VERSION = "1.4.4";
    var S = _.each = _.forEach = function(t, e, r) {
        if (null != t) if (h && t.forEach === h) t.forEach(e, r);
        else if (t.length === +t.length) {
            for (var i = 0, o = t.length; o > i; i++) if (e.call(r, t[i], i, t) === n) return
        } else for (var a in t) if (_.has(t, a) && e.call(r, t[a], a, t) === n) return
    };
    _.map = _.collect = function(t, e, n) {
        var r = [];
        return null == t ? r : f && t.map === f ? t.map(e, n) : (S(t, function(t, i, o) {
            r[r.length] = e.call(n, t, i, o)
        }), r)
    };
    var k = "Reduce of empty array with no initial value";
    _.reduce = _.foldl = _.inject = function(t, e, n, r) {
        var i = arguments.length > 2;
        if (null == t && (t = []), d && t.reduce === d) return r && (e = _.bind(e, r)), i ? t.reduce(e, n) : t.reduce(e);
        if (S(t, function(t, o, a) {
                i ? n = e.call(r, n, t, o, a) : (n = t, i = !0)
            }), !i) throw new TypeError(k);
        return n
    }, _.reduceRight = _.foldr = function(t, e, n, r) {
        var i = arguments.length > 2;
        if (null == t && (t = []), p && t.reduceRight === p) return r && (e = _.bind(e, r)), i ? t.reduceRight(e, n) : t.reduceRight(e);
        var o = t.length;
        if (o !== +o) {
            var a = _.keys(t);
            o = a.length
        }
        if (S(t, function(s, c, u) {
                c = a ? a[--o] : --o, i ? n = e.call(r, n, t[c], c, u) : (n = t[c], i = !0)
            }), !i) throw new TypeError(k);
        return n
    }, _.find = _.detect = function(t, e, n) {
        var r;
        return T(t, function(t, i, o) {
            return e.call(n, t, i, o) ? (r = t, !0) : void 0
        }), r
    }, _.filter = _.select = function(t, e, n) {
        var r = [];
        return null == t ? r : g && t.filter === g ? t.filter(e, n) : (S(t, function(t, i, o) {
            e.call(n, t, i, o) && (r[r.length] = t)
        }), r)
    }, _.reject = function(t, e, n) {
        return _.filter(t, function(t, r, i) {
            return !e.call(n, t, r, i)
        }, n)
    }, _.every = _.all = function(t, e, r) {
        e || (e = _.identity);
        var i = !0;
        return null == t ? i : m && t.every === m ? t.every(e, r) : (S(t, function(t, o, a) {
            return (i = i && e.call(r, t, o, a)) ? void 0 : n
        }), !! i)
    };
    var T = _.some = _.any = function(t, e, r) {
        e || (e = _.identity);
        var i = !1;
        return null == t ? i : v && t.some === v ? t.some(e, r) : (S(t, function(t, o, a) {
            return i || (i = e.call(r, t, o, a)) ? n : void 0
        }), !! i)
    };
    _.contains = _.include = function(t, e) {
        return null == t ? !1 : y && t.indexOf === y ? -1 != t.indexOf(e) : T(t, function(t) {
            return t === e
        })
    }, _.invoke = function(t, e) {
        var n = s.call(arguments, 2),
            r = _.isFunction(e);
        return _.map(t, function(t) {
            return (r ? e : t[e]).apply(t, n)
        })
    }, _.pluck = function(t, e) {
        return _.map(t, function(t) {
            return t[e]
        })
    }, _.where = function(t, e, n) {
        return _.isEmpty(e) ? n ? null : [] : _[n ? "find" : "filter"](t, function(t) {
            for (var n in e) if (e[n] !== t[n]) return !1;
            return !0
        })
    }, _.findWhere = function(t, e) {
        return _.where(t, e, !0)
    }, _.max = function(t, e, n) {
        if (!e && _.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
        if (!e && _.isEmpty(t)) return -(1 / 0);
        var r = {
            computed: -(1 / 0),
            value: -(1 / 0)
        };
        return S(t, function(t, i, o) {
            var a = e ? e.call(n, t, i, o) : t;
            a >= r.computed && (r = {
                value: t,
                computed: a
            })
        }), r.value
    }, _.min = function(t, e, n) {
        if (!e && _.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
        if (!e && _.isEmpty(t)) return 1 / 0;
        var r = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return S(t, function(t, i, o) {
            var a = e ? e.call(n, t, i, o) : t;
            a < r.computed && (r = {
                value: t,
                computed: a
            })
        }), r.value
    }, _.shuffle = function(t) {
        var e, n = 0,
            r = [];
        return S(t, function(t) {
            e = _.random(n++), r[n - 1] = r[e], r[e] = t
        }), r
    };
    var O = function(t) {
        return _.isFunction(t) ? t : function(e) {
            return e[t]
        }
    };
    _.sortBy = function(t, e, n) {
        var r = O(e);
        return _.pluck(_.map(t, function(t, e, i) {
            return {
                value: t,
                index: e,
                criteria: r.call(n, t, e, i)
            }
        }).sort(function(t, e) {
            var n = t.criteria,
                r = e.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (r > n || void 0 === r) return -1
            }
            return t.index < e.index ? -1 : 1
        }), "value")
    };
    var C = function(t, e, n, r) {
        var i = {},
            o = O(e || _.identity);
        return S(t, function(e, a) {
            var s = o.call(n, e, a, t);
            r(i, s, e)
        }), i
    };
    _.groupBy = function(t, e, n) {
        return C(t, e, n, function(t, e, n) {
            (_.has(t, e) ? t[e] : t[e] = []).push(n)
        })
    }, _.countBy = function(t, e, n) {
        return C(t, e, n, function(t, e) {
            _.has(t, e) || (t[e] = 0), t[e]++
        })
    }, _.sortedIndex = function(t, e, n, r) {
        n = null == n ? _.identity : O(n);
        for (var i = n.call(r, e), o = 0, a = t.length; a > o;) {
            var s = o + a >>> 1;
            n.call(r, t[s]) < i ? o = s + 1 : a = s
        }
        return o
    }, _.toArray = function(t) {
        return t ? _.isArray(t) ? s.call(t) : t.length === +t.length ? _.map(t, _.identity) : _.values(t) : []
    }, _.size = function(t) {
        return null == t ? 0 : t.length === +t.length ? t.length : _.keys(t).length
    }, _.first = _.head = _.take = function(t, e, n) {
        return null == t ? void 0 : null == e || n ? t[0] : s.call(t, 0, e)
    }, _.initial = function(t, e, n) {
        return s.call(t, 0, t.length - (null == e || n ? 1 : e))
    }, _.last = function(t, e, n) {
        return null == t ? void 0 : null == e || n ? t[t.length - 1] : s.call(t, Math.max(t.length - e, 0))
    }, _.rest = _.tail = _.drop = function(t, e, n) {
        return s.call(t, null == e || n ? 1 : e)
    }, _.compact = function(t) {
        return _.filter(t, _.identity)
    };
    var A = function(t, e, n) {
        return S(t, function(t) {
            _.isArray(t) ? e ? a.apply(n, t) : A(t, e, n) : n.push(t)
        }), n
    };
    _.flatten = function(t, e) {
        return A(t, e, [])
    }, _.without = function(t) {
        return _.difference(t, s.call(arguments, 1))
    }, _.uniq = _.unique = function(t, e, n, r) {
        _.isFunction(e) && (r = n, n = e, e = !1);
        var i = n ? _.map(t, n, r) : t,
            o = [],
            a = [];
        return S(i, function(n, r) {
            (e ? r && a[a.length - 1] === n : _.contains(a, n)) || (a.push(n), o.push(t[r]))
        }), o
    }, _.union = function() {
        return _.uniq(c.apply(r, arguments))
    }, _.intersection = function(t) {
        var e = s.call(arguments, 1);
        return _.filter(_.uniq(t), function(t) {
            return _.every(e, function(e) {
                return _.indexOf(e, t) >= 0
            })
        })
    }, _.difference = function(t) {
        var e = c.apply(r, s.call(arguments, 1));
        return _.filter(t, function(t) {
            return !_.contains(e, t)
        })
    }, _.zip = function() {
        for (var t = s.call(arguments), e = _.max(_.pluck(t, "length")), n = new Array(e), r = 0; e > r; r++) n[r] = _.pluck(t, "" + r);
        return n
    }, _.object = function(t, e) {
        if (null == t) return {};
        for (var n = {}, r = 0, i = t.length; i > r; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
        return n
    }, _.indexOf = function(t, e, n) {
        if (null == t) return -1;
        var r = 0,
            i = t.length;
        if (n) {
            if ("number" != typeof n) return r = _.sortedIndex(t, e), t[r] === e ? r : -1;
            r = 0 > n ? Math.max(0, i + n) : n
        }
        if (y && t.indexOf === y) return t.indexOf(e, n);
        for (; i > r; r++) if (t[r] === e) return r;
        return -1
    }, _.lastIndexOf = function(t, e, n) {
        if (null == t) return -1;
        var r = null != n;
        if (b && t.lastIndexOf === b) return r ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
        for (var i = r ? n : t.length; i--;) if (t[i] === e) return i;
        return -1
    }, _.range = function(t, e, n) {
        arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
        for (var r = Math.max(Math.ceil((e - t) / n), 0), i = 0, o = new Array(r); r > i;) o[i++] = t, t += n;
        return o
    }, _.bind = function(t, e) {
        if (t.bind === E && E) return E.apply(t, s.call(arguments, 1));
        var n = s.call(arguments, 2);
        return function() {
            return t.apply(e, n.concat(s.call(arguments)))
        }
    }, _.partial = function(t) {
        var e = s.call(arguments, 1);
        return function() {
            return t.apply(this, e.concat(s.call(arguments)))
        }
    }, _.bindAll = function(t) {
        var e = s.call(arguments, 1);
        return 0 === e.length && (e = _.functions(t)), S(e, function(e) {
            t[e] = _.bind(t[e], t)
        }), t
    }, _.memoize = function(t, e) {
        var n = {};
        return e || (e = _.identity), function() {
            var r = e.apply(this, arguments);
            return _.has(n, r) ? n[r] : n[r] = t.apply(this, arguments)
        }
    }, _.delay = function(t, e) {
        var n = s.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, n)
        }, e)
    }, _.defer = function(t) {
        return _.delay.apply(_, [t, 1].concat(s.call(arguments, 1)))
    }, _.throttle = function(t, e) {
        var n, r, i, o, a = 0,
            s = function() {
                a = new Date, i = null, o = t.apply(n, r)
            };
        return function() {
            var c = new Date,
                u = e - (c - a);
            return n = this, r = arguments, 0 >= u ? (clearTimeout(i), i = null, a = c, o = t.apply(n, r)) : i || (i = setTimeout(s, u)), o
        }
    }, _.debounce = function(t, e, n) {
        var r, i;
        return function() {
            var o = this,
                a = arguments,
                s = function() {
                    r = null, n || (i = t.apply(o, a))
                },
                c = n && !r;
            return clearTimeout(r), r = setTimeout(s, e), c && (i = t.apply(o, a)), i
        }
    }, _.once = function(t) {
        var e, n = !1;
        return function() {
            return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
        }
    }, _.wrap = function(t, e) {
        return function() {
            var n = [t];
            return a.apply(n, arguments), e.apply(this, n)
        }
    }, _.compose = function() {
        var t = arguments;
        return function() {
            for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
            return e[0]
        }
    }, _.after = function(t, e) {
        return 0 >= t ? e() : function() {
            return --t < 1 ? e.apply(this, arguments) : void 0
        }
    }, _.keys = x ||
        function(t) {
            if (t !== Object(t)) throw new TypeError("Invalid object");
            var e = [];
            for (var n in t) _.has(t, n) && (e[e.length] = n);
            return e
        }, _.values = function(t) {
        var e = [];
        for (var n in t) _.has(t, n) && e.push(t[n]);
        return e
    }, _.pairs = function(t) {
        var e = [];
        for (var n in t) _.has(t, n) && e.push([n, t[n]]);
        return e
    }, _.invert = function(t) {
        var e = {};
        for (var n in t) _.has(t, n) && (e[t[n]] = n);
        return e
    }, _.functions = _.methods = function(t) {
        var e = [];
        for (var n in t) _.isFunction(t[n]) && e.push(n);
        return e.sort()
    }, _.extend = function(t) {
        return S(s.call(arguments, 1), function(e) {
            if (e) for (var n in e) t[n] = e[n]
        }), t
    }, _.pick = function(t) {
        var e = {},
            n = c.apply(r, s.call(arguments, 1));
        return S(n, function(n) {
            n in t && (e[n] = t[n])
        }), e
    }, _.omit = function(t) {
        var e = {},
            n = c.apply(r, s.call(arguments, 1));
        for (var i in t) _.contains(n, i) || (e[i] = t[i]);
        return e
    }, _.defaults = function(t) {
        return S(s.call(arguments, 1), function(e) {
            if (e) for (var n in e) null == t[n] && (t[n] = e[n])
        }), t
    }, _.clone = function(t) {
        return _.isObject(t) ? _.isArray(t) ? t.slice() : _.extend({}, t) : t
    }, _.tap = function(t, e) {
        return e(t), t
    };
    var j = function(t, e, n, r) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof _ && (t = t._wrapped), e instanceof _ && (e = e._wrapped);
        var i = u.call(t);
        if (i != u.call(e)) return !1;
        switch (i) {
            case "[object String]":
                return t == String(e);
            case "[object Number]":
                return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t == +e;
            case "[object RegExp]":
                return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
        }
        if ("object" != typeof t || "object" != typeof e) return !1;
        for (var o = n.length; o--;) if (n[o] == t) return r[o] == e;
        n.push(t), r.push(e);
        var a = 0,
            s = !0;
        if ("[object Array]" == i) {
            if (a = t.length, s = a == e.length) for (; a-- && (s = j(t[a], e[a], n, r)););
        } else {
            var c = t.constructor,
                l = e.constructor;
            if (c !== l && !(_.isFunction(c) && c instanceof c && _.isFunction(l) && l instanceof l)) return !1;
            for (var h in t) if (_.has(t, h) && (a++, !(s = _.has(e, h) && j(t[h], e[h], n, r)))) break;
            if (s) {
                for (h in e) if (_.has(e, h) && !a--) break;
                s = !a
            }
        }
        return n.pop(), r.pop(), s
    };
    _.isEqual = function(t, e) {
        return j(t, e, [], [])
    }, _.isEmpty = function(t) {
        if (null == t) return !0;
        if (_.isArray(t) || _.isString(t)) return 0 === t.length;
        for (var e in t) if (_.has(t, e)) return !1;
        return !0
    }, _.isElement = function(t) {
        return !(!t || 1 !== t.nodeType)
    }, _.isArray = w ||
        function(t) {
            return "[object Array]" == u.call(t)
        }, _.isObject = function(t) {
        return t === Object(t)
    }, S(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
        _["is" + t] = function(e) {
            return u.call(e) == "[object " + t + "]"
        }
    }), _.isArguments(arguments) || (_.isArguments = function(t) {
        return !(!t || !_.has(t, "callee"))
    }), "function" != typeof / . / && (_.isFunction = function(t) {
        return "function" == typeof t
    }), _.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }, _.isNaN = function(t) {
        return _.isNumber(t) && t != +t
    }, _.isBoolean = function(t) {
        return t === !0 || t === !1 || "[object Boolean]" == u.call(t)
    }, _.isNull = function(t) {
        return null === t
    }, _.isUndefined = function(t) {
        return void 0 === t
    }, _.has = function(t, e) {
        return l.call(t, e)
    }, _.noConflict = function() {
        return t._ = e, this
    }, _.identity = function(t) {
        return t
    }, _.times = function(t, e, n) {
        for (var r = Array(t), i = 0; t > i; i++) r[i] = e.call(n, i);
        return r
    }, _.random = function(t, e) {
        return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
    };
    var N = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    N.unescape = _.invert(N.escape);
    var P = {
        escape: new RegExp("[" + _.keys(N.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + _.keys(N.unescape).join("|") + ")", "g")
    };
    _.each(["escape", "unescape"], function(t) {
        _[t] = function(e) {
            return null == e ? "" : ("" + e).replace(P[t], function(e) {
                return N[t][e]
            })
        }
    }), _.result = function(t, e) {
        if (null == t) return null;
        var n = t[e];
        return _.isFunction(n) ? n.call(t) : n
    }, _.mixin = function(t) {
        S(_.functions(t), function(e) {
            var n = _[e] = t[e];
            _.prototype[e] = function() {
                var t = [this._wrapped];
                return a.apply(t, arguments), F.call(this, n.apply(_, t))
            }
        })
    };
    var M = 0;
    _.uniqueId = function(t) {
        var e = ++M + "";
        return t ? t + e : e
    }, _.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var R = /(.)^/,
        D = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        I = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    _.template = function(t, e, n) {
        var r;
        n = _.defaults({}, n, _.templateSettings);
        var i = new RegExp([(n.escape || R).source, (n.interpolate || R).source, (n.evaluate || R).source].join("|") + "|$", "g"),
            o = 0,
            a = "__p+='";
        t.replace(i, function(e, n, r, i, s) {
            return a += t.slice(o, s).replace(I, function(t) {
                return "\\" + D[t]
            }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), r && (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"), i && (a += "';\n" + i + "\n__p+='"), o = s + e.length, e
        }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            r = new Function(n.variable || "obj", "_", a)
        } catch (s) {
            throw s.source = a, s
        }
        if (e) return r(e, _);
        var c = function(t) {
            return r.call(this, t, _)
        };
        return c.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", c
    }, _.chain = function(t) {
        return _(t).chain()
    };
    var F = function(t) {
        return this._chain ? _(t).chain() : t
    };
    _.mixin(_), S(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var e = r[t];
        _.prototype[t] = function() {
            var n = this._wrapped;
            return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], F.call(this, n)
        }
    }), S(["concat", "join", "slice"], function(t) {
        var e = r[t];
        _.prototype[t] = function() {
            return F.call(this, e.apply(this._wrapped, arguments))
        }
    }), _.extend(_.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}).call(this), _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};
var w = w || {};
(function(t) {
    t.keyCodeMappings = {
        a: 48,
        z: 90,
        enter: 13,
        up: 38,
        down: 40,
        tab: 9,
        space: 32
    }, t.autofocus = function() {
        "autofocus" in document.createElement("input") || $("[autofocus]").eq(0).focus().select()
    }, t.not = function(t, e) {
        if (!_.isFunction(t)) throw "Only a function can be negated";
        return function() {
            return !t.apply(e, arguments)
        }
    }, t.bind = function(t, e) {
        if (e = e || window, arguments.length > 2) {
            var n = Array.prototype.slice.call(arguments, 2);
            return function() {
                return t.apply(e, n.concat(Array.prototype.slice.call(arguments)))
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }, t.clearFormErrors = function(t) {
        t.find(".error").removeClass("error"), t.find(".error-message").hide(), t.find("ul.success, ul.errors, [data-error-type-message], [data-error-types=ERROR], [data-error-types=SUCCESS]").hide().empty()
    }, t.cancelEventAndCall = function(e) {
        return function(n, r) {
            t.cancelEvent(n), e(n, r)
        }
    }, t.cancelEvent = function(e) {
        t.isDefAndNotNull(e) && e.preventDefault()
    }, t.stopPropagation = function(e) {
        t.isDefAndNotNull(e) && e.stopPropagation()
    }, t.countOwnProperties = function(t) {
        var e = 0;
        for (var n in t) t.hasOwnProperty(n) && e++;
        return e
    }, t.elementCenter = function(t) {
        var e = t.offset();
        return {
            x: .5 * t.width() + e.left,
            y: .5 * t.height() + e.top
        }
    }, t.enableAfter = function(t, e) {
        return e.always(function() {
            t.prop("disabled", !1)
        })
    }, t.findElements = function(t, e) {
        return e ? $(t, e) : $(t)
    }, t.imageLoad = function(t, e) {
        var n = new Image;
        n.onload = e, n.src = t
    }, t.initIdleLogout = function(e, n, r) {
        var i = new t.Heartbeat(e, n, r);
        i.start()
    }, t.isBlank = function(e) {
        return !t.isDefAndNotNull(e) || "" === $.trim(String(e))
    }, t.isElementInViewport = function(t, e) {
        if (!t) return !1;
        t = $(t).get(0), e = e || {};
        var n = e.innerWidth || window.innerWidth || document.documentElement.clientWidth,
            r = e.innerHeight || window.innerHeight || document.documentElement.clientHeight,
            i = t.getBoundingClientRect();
        return i.top >= 0 && i.left >= 0 && i.bottom <= r && i.right <= n
    }, t.checkNotNull = function(e, n) {
        if (t.isDefAndNotNull(e)) return e;
        throw n
    }, t.isInside = function(e, n, r) {
        if ("number" != typeof n) {
            var i = t.elementCenter(n);
            n = i.x, r = i.y
        }
        var o = e.offset();
        return o.bottom = o.top + e.height(), o.right = o.left + e.width(), o.top <= r && r <= o.bottom && o.left <= n && n <= o.right
    }, t.joinWithAnd = function(t) {
        return 0 === t.length ? "" : 1 === t.length ? String(t[0]) : t.slice(0, -1).join(", ") + " and " + t[t.length - 1]
    }, t.namespace = function(e) {
        var n = e.split(".");
        if ("w" !== n[0]) throw "Not extending w. Please format baseObjStr as [w." + e + "]";
        return n.slice(1).reduce(function(t, e) {
            return t[e] = t[e] || {}, t[e]
        }, t)
    }, t.partial = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return function() {
            return t.apply(this, e.concat(Array.prototype.slice.call(arguments)))
        }
    }, t.placeholder = function() {
        "placeholder" in document.createElement("input") || $("[placeholder]").focus(function() {
            var t = $(this),
                e = t.attr("placeholder");
            t.val() === e && (t.val("").removeClass("placeholder-empty"), this.createTextRange && this.createTextRange().select())
        }).blur(function() {
            var t = $(this),
                e = t.attr("placeholder");
            t.val().replace(/\s/g, "") && t.val().replace(/^\s+|\s+$/g, "") !== e || t.addClass("placeholder-empty").val(e)
        }).blur()
    }, t.publishResponseEvents = function(t, e) {
        return t ? void $.each(t, function() {
            this.event && $(e || "body").trigger(this.event, [this])
        }) : !1
    }, t.redirectTo = function(t) {
        t = t || window.location.pathname, document.location = t || window.location.pathname
    }, t.reload = function() {
        t.redirectTo(window.location.href)
    }, t.serializeObject = function(t) {
        var e = $(t),
            n = {};
        return $.each(e.serializeArray(), function() {
            void 0 !== n[this.name] ? (n[this.name].push || (n[this.name] = [n[this.name]]), n[this.name].push(this.value || "")) : n[this.name] = this.value || ""
        }), n
    }, t.getTimezoneOffset = function(t) {
        return t = t || new Date, t.getTimezoneOffset()
    }, t.spinPause = function(e, n, r, i) {
        return n.hide(), i.fadeIn(333), t.uiPause().then(function() {
            return i.fadeOut(333).promise()
        }).then(function() {
            return r && r.show(), e
        })
    }, t.sumArray = function(t) {
        return _.reduce(t, function(t, e) {
            return t + e
        }, 0)
    }, t.uiPause = function(e, n, r) {
        e = e || null, n = n || 600, r = r || 2e3;
        var i = n + Math.random() * (r - n),
            o = $.Deferred();
        return window.setTimeout(t.bind(o.resolve, o, e), i), o
    }, t.millisSinceEpoch = function() {
        return (new Date).getTime()
    }, t.getQueryStringValue = function(t, e) {
        var n = t.match(new RegExp("[?&]" + e + "=([^&]*)"));
        return n && n[1]
    }, t.options = function(t, e) {
        return $.extend(e, t)
    }, t.animateNumberField = function(e, n, r) {
        r = t.options(r, {
            easing: "swing",
            duration: 1500,
            roundTo: 0
        });
        var i = t.parseDollarAmount(n.text());
        $({
            value: i
        }).animate({
            value: e
        }, {
            duration: r.duration,
            easing: r.easing,
            step: function() {
                n.text(t.formatNum(this.value, r.roundTo))
            },
            always: function() {
                n.text(t.formatNum(e, r.roundTo))
            }
        })
    }, t.getCursorPosition = function(t) {
        return $(t).get(0).selectionStart
    }, t.placeCursorAtIndex = function(t, e) {
        var n = $(t);
        n.get(0).selectionEnd = e, n.get(0).selectionStart = e
    }, t.visibleForTesting || (t.visibleForTesting = function(t, e, n) {
        return n
    })
}).call(this, w);
var w = w || {};
(function(t) {
    t.ajax = function(t, e, n, r, i) {
        var o = {
            type: t,
            url: e
        };
        return n && "function" == typeof n ? (o.success = n, r && (o.error = r)) : n && (o.data = n, r && (o.success = r), i && (o.error = i)), $.ajax(o)
    }, t.post = function(e, n, r, i) {
        var o = t.cookie("xsrf"),
            a = typeof n;
        return t.isDefAndNotNull(n) && "function" !== a ? o && "string" === a ? n += "&xsrf=" + encodeURIComponent(o) : o && "object" === a && (n.xsrf = o) : (i = r, r = n, n = o ? {
            xsrf: o
        } : {}), t.ajax("POST", e, n, r, i)
    }, t.post2 = function(e, n) {
        return $.post(e, $.extend(n, {
            xsrf: t.cookie("xsrf")
        }))
    }, t.get = function(e, n, r, i) {
        t.ajax("GET", e, n, r, i)
    }, t.get2 = function(e, n) {
        return $.get(e, $.extend(n, {
            xsrf: t.cookie("xsrf")
        }))
    }, t.checkSuccess = function(t) {
        return t.success ? t : $.Deferred().reject(t)
    }, t.getXhrForForm = function(e, n, r) {
        return t.clearFormErrors(e), r = r || {}, t.post2(r.url || e.attr("action"), n || t.serializeObject(e), $.noop(), "json").then(function(t) {
            if (!t.errors) return t;
            var n = !0;
            for (var i in t.errors) n = !1;
            if (n) return t;
            var o = {};
            if (e.find("[data-error-types]").each(function() {
                    var t = $(this),
                        e = $.trim(t.data("error-types")).split(",");
                    $.each(e, function() {
                        o[this] = o[this] || [], o[this].push(t)
                    })
                }), t.errors.SUCCESS) {
                o.SUCCESS && ($.each(t.errors.SUCCESS, function() {
                    var t = this;
                    $.each(o.SUCCESS, function() {
                        this.append("<li>" + t + "</li>").show()
                    })
                }), $.each(o.SUCCESS, function() {
                    this.show()
                })), delete t.errors.SUCCESS;
                var a = 0;
                for (var s in t.errors) a++;
                0 === a && (t.errors = null)
            }
            if (t.errors) {
                t.errors.ERROR && o.ERROR && ($.each(t.errors.ERROR, function() {
                    var t = this;
                    $.each(o.ERROR, function() {
                        this.append("<li>" + t + "</li>").addClass("error").show()
                    })
                }), delete t.errors.ERROR);
                for (var c in t.errors) if (o[c]) {
                    $.each(o[c], function() {
                        this.addClass("error")
                    });
                    var u = e.find("[data-error-type-message='" + c + "']");
                    u.length > 0 ? u.html("").addClass("error").addClass("error-message") : (u = $('<div class="error error-message" data-error-type-message="' + c + '"></div>'), $.each(o[c], function() {
                        $(this)[r.errorPosition || "after"](u)
                    })), $.each(t.errors[c], function() {
                        u.append("<span>" + this + "</span>")
                    }), u.show()
                } else o.ERROR && $.each(o.ERROR, function() {
                    this.append("<li>" + t.errors[c] + "</li>").addClass("error").show()
                });
                return $.Deferred().reject(t)
            }
            return t
        }).done(function() {
            return $.Deferred()
        })
    }
}).call(this, w), w.namespace("w.tracking"), w.tracking.OUTBOUND_LINK_REGEX = /^(http|\/\/.+)/, w.tracking.LINK_ACTION_PREFIX = "link:", w.tracking.links = [], w.tracking.handleLink = function(t) {
    var e = $(t.currentTarget);
    t.preventDefault();
    var n = e.attr("href"),
        r = this.LINK_ACTION_PREFIX + this.getClickAction(e),
        i = this.getElementContext(e);
    this.reportInputErrors(i, r, n), w.trackOutbound(n, i, r, n)
}, w.namespace("w.tracking"), w.tracking.BUTTON_ACTION_PREFIX = "button:", w.tracking.buttons = [], w.tracking.handleButton = function(t) {
    var e = $(t.currentTarget),
        n = e.html() || e.val(),
        r = this.BUTTON_ACTION_PREFIX + this.getClickAction(e),
        i = this.getElementContext(e);
    this.reportInputErrors(i, r, n), w.trackEvent(i, r, n)
}, w.namespace("w.tracking"), w.tracking.CLICK_OTHER_PAYLOAD = "click", w.tracking.other = [], w.tracking.handleClickOther = function(t) {
    var e = $(t.currentTarget),
        n = this.CLICK_OTHER_PAYLOAD,
        r = e.get(0).tagName + ":" + this.getClickAction(e),
        i = this.getElementContext(e);
    this.reportInputErrors(i, r, n), w.trackEvent(i, r, n)
}, w.namespace("w.tracking"), w.tracking.TRACK_SECTION_DELIMITER = ">", w.tracking.ELEMENT_CLASS_DELIMITER = "|", w.tracking.getElementContext = function(t) {
    var e = t.parents(this.TRACK_SECTION_SEARCH).toArray(),
        n = e.reduce(function(t, e) {
            return ">" + $(e).data(w.tracking.TRACK_SECTION_NAME) + t
        }, "");
    return w.Pages.currentPageName + n
}, w.tracking.getClickAction = function(t) {
    var e = t.attr("id"),
        n = this.getElementClass(t),
        r = t.data(this.TRACK_NAME);
    return r || e || n
}, w.tracking.getElementClass = function(t) {
    var e = t.attr("class");
    if (e) {
        var n = e.trim().replace(/\s+/g, " "),
            r = n.split(" ").filter(function(t) {
                return t.indexOf("pure-") < 0
            });
        return r.join(this.ELEMENT_CLASS_DELIMITER) + this.classIndex(t)
    }
    return ""
}, w.tracking.classIndex = function(t) {
    var e = t.index();
    return e > 0 ? "_" + e : ""
}, w.tracking.reportInputErrors = function(t, e, n) {
    var r = _.some(arguments, w.isBlank);
    if (r) {
        var i = "Missing or Non-String Item:\ncategory: [" + t + "]\naction:   [" + e + "]\npayload:  [" + n + "]";
        throw i
    }
    return !0
}, w.namespace("w.tracking"), w.tracking.TRACK_NAME = "atrack", w.tracking.NO_TRACK_NAME = "no-atrack", w.tracking.TRACK_SECTION_NAME = "atrack-section", w.tracking.TRACK_SEARCH = "[data-" + w.tracking.TRACK_NAME + "]", w.tracking.TRACK_SECTION_SEARCH = "[data-" + w.tracking.TRACK_SECTION_NAME + "]", w.tracking.ERROR_NO_PAGE = "Must define w.Pages.currentPageName and have a valid $trackScope in order to use w.tracking", w.tracking.clickEvent = "vclick", w.tracking.listen = function(t) {
    var e = {
        $trackScope: $(document),
        implicitTrack: !0
    };
    t = w.options(t, e);
    var n = this.getAllElementsToTrack(t);
    if (!this.hasTrackingRequirements(n, t.$trackScope)) throw this.ERROR_NO_PAGE;
    n.each(w.bind(this.sortElement, this)), this.attachListeners(), this.emptyElementCollections()
}, w.tracking.trackPageEvent = function(t, e) {
    w.trackEvent(w.Pages.currentPageName, t, e)
}, w.tracking.getAllElementsToTrack = function(t) {
    this.implicitTrack = t.implicitTrack;
    var e = t.$trackScope.find(this.TRACK_SEARCH + ", a");
    return e.filter(w.bind(this.shouldTrackElement, this))
}, w.tracking.shouldTrackElement = function(t, e) {
    var n = $(e),
        r = w.isDefAndNotNull(n.data(this.NO_TRACK_NAME)),
        i = w.isDefAndNotNull(n.data(this.TRACK_NAME)),
        o = n.attr("href"),
        a = this.implicitTrack && o && !! o.match(this.OUTBOUND_LINK_REGEX);
    return !r && (i || a)
}, w.tracking.hasTrackingRequirements = function(t, e) {
    return !(t.length > 0 && w.Pages && !w.Pages.currentPageName) && e.length > 0
}, w.tracking.attachListeners = function() {
    $(this.links).on(this.clickEvent, w.bind(this.handleLink, this)), $(this.buttons).on(this.clickEvent, w.bind(this.handleButton, this)), $(this.other).on(this.clickEvent, w.bind(this.handleClickOther, this))
}, w.tracking.emptyElementCollections = function() {
    this.links = [], this.buttons = [], this.other = []
}, w.tracking.sortElement = function(t, e) {
    var n = $(e);
    n.is("a") ? this.links.push(e) : n.is(":button") ? this.buttons.push(e) : this.other.push(e)
};
var w = w || {};
w.constants = w.constants || {}, w.constants.FREEMIUM_AMOUNT = 1e4, w.constants.TAXABLE_SUBTYPES = ["CORPORATE_TAXABLE", "PERSONAL", "JOINT", "TRUST"], w.constants.MAX_UPLOAD_SIZE_BYTES = 10485760, w.constants.MAX_UPLOAD_SIZE_MEGABYTES = "10MB", w.constants.SUPPORT_PHONE_NUMBER = "650.249.4258", w.constants.ONE_ACH_LIMIT = 25e4, w.constants.ACCOUNT_TYPE_DISPLAY = {
    PERSONAL: "Personal Account",
    JOINT: "Joint Account",
    TRUST: "Trust Account",
    IRA_TRADITIONAL_NEW: "Traditional IRA Account",
    IRA_ROTH_NEW: "Roth IRA Account",
    IRA_SEP_NEW: "SEP IRA Account",
    IRA_ROLLOVER_NEW: "IRA Rollover Account",
    CORPORATE_NON_TAXABLE: "Corporate Non-taxable Account",
    CORPORATE_TAXABLE: "Corporate Taxable Account"
};
var w = w || {};
w.CrossPageTiming = function(t, e) {
    this.currentSecondsCookie = t + "-seconds-passed", this.limitCookie = t + "-limit-reached", this.storedTimeInit(), e = e || {}, this.currentSeconds = this.getCurrentSeconds(), this.intervalSeconds = e.intervalSeconds || 10, this.limitSeconds = e.limitSeconds || 600, this.limitFunc = e.limitFunc || $.noop
}, w.CrossPageTiming.prototype.start = function() {
    var t = !(w.cookieExists(this.limitCookie) || this.limitCheck());
    t && (this.timeUpdateInterval = setInterval(w.bind(this.intervalFunc, this), 1e3 * this.intervalSeconds))
}, w.CrossPageTiming.prototype.getCurrentSeconds = function() {
    return parseInt(w.cookie(this.currentSecondsCookie))
}, w.CrossPageTiming.prototype.intervalFunc = function() {
    w.cookie(this.currentSecondsCookie, this.updateTime()), this.limitCheck()
}, w.CrossPageTiming.prototype.updateTime = function() {
    return this.currentSeconds = this.getCurrentSeconds() + this.intervalSeconds, this.currentSeconds
}, w.CrossPageTiming.prototype.storedTimeInit = function() {
    var t = isNaN(this.getCurrentSeconds());
    t && w.cookie(this.currentSecondsCookie, 0)
}, w.CrossPageTiming.prototype.limitCheck = function() {
    var t = this.currentSeconds >= this.limitSeconds;
    return t ? (this.limitReached(), !0) : !1
}, w.CrossPageTiming.prototype.limitReached = function() {
    clearInterval(this.timeUpdateInterval), w.cookie(this.limitCookie, "true"), this.limitFunc()
};
var w = w || {};
w.dialog = function(t) {
    var e = $(t),
        n = e.data("dialog-obj");
    n || (n = new w.DialogObj(t), e.data("dialog-obj", n)), n.showOrHide()
}, w.DialogObj = function(t) {
    this.$dialog = $(t), this.$box = this.$dialog.find(this.BOX_SELECTOR), this.$background = this.$dialog.find(this.BACKGROUND_SELECTOR), this.$printButton = this.$dialog.find(this.PRINT_BUTTON_SELECTOR), this.$closeButton = this.$dialog.find(this.CLOSE_BUTTON_SELECTOR), this.dialogId = this.$dialog.attr("id"), this.allowBackgroundClose = !this.$dialog.data(this.NO_BACKGROUND_CLOSE), this.closeOnEsc = !this.$dialog.data(this.NO_ESCAPE_CLOSE), this.centerVertically = !! this.$dialog.data(this.CENTER_VERTICALLY)
}, w.DialogObj.prototype.BOX_SELECTOR = ".wdialog-box", w.DialogObj.prototype.BACKGROUND_SELECTOR = ".wdialog-bg", w.DialogObj.prototype.PRINT_BUTTON_SELECTOR = ".wdialog-print", w.DialogObj.prototype.CLOSE_BUTTON_SELECTOR = ".wdialog-close", w.DialogObj.prototype.NO_BACKGROUND_CLOSE = "no-background-close", w.DialogObj.prototype.NO_ESCAPE_CLOSE = "no-esc", w.DialogObj.prototype.CENTER_VERTICALLY = "vertical-center", w.DialogObj.prototype.SHOW_CLASS = "wdialog-show", w.DialogObj.prototype.NO_PRINT_CLASS = "no-print", w.DialogObj.prototype.PRINT_CLASS = "include-on-print", w.DialogObj.prototype.showOrHide = function() {
    this.$dialog.is(":visible") ? (this.hideDialog(), this.removeDialogListeners()) : (this.showDialog(), this.setDialogListeners())
}, w.DialogObj.prototype.setDialogListeners = function() {
    this.$printButton.on("vclick", w.bind(this.printDialog, this)), this.$closeButton.on("vclick", w.bind(this.showOrHide, this)), this.allowBackgroundClose && setTimeout(w.bind(function() {
        this.$background.on("vclick", w.bind(this.showOrHide, this))
    }, this), 0), this.closeOnEsc && $(document).on("keydown." + this.dialogId, w.bind(this.escKeydownListener, this)), this.centerVertically && $(window).on("resize." + this.dialogId, w.bind(this.centerDialog, this))
}, w.DialogObj.prototype.removeDialogListeners = function() {
    this.$printButton.off("vclick"), this.$background.off("vclick"), this.$closeButton.off("vclick"), $(document).off("keydown." + this.dialogId), $(window).off("resize." + this.dialogId)
}, w.DialogObj.prototype.escKeydownListener = function(t) {
    t.which === w.keys.KEY_CODES_BY_NAME.esc && this.$dialog.is(":visible") && (w.cancelEvent(t), this.hideDialog(), this.$dialog.trigger("wdialog.esc"))
}, w.DialogObj.prototype.showDialog = function() {
    this.$dialog.fadeIn(200, w.bind(this.triggerDialogOpen, this)), this.$box.addClass(this.SHOW_CLASS), this.centerVertically && this.centerDialog()
}, w.DialogObj.prototype.hideDialog = function() {
    this.$box.removeClass(this.SHOW_CLASS), this.$dialog.fadeOut(200, w.bind(this.triggerDialogClose, this))
}, w.DialogObj.prototype.triggerDialogOpen = function() {
    this.$dialog.trigger("wdialog.open")
}, w.DialogObj.prototype.triggerDialogClose = function() {
    this.$dialog.trigger("wdialog.close")
}, w.DialogObj.prototype.printDialog = function() {
    this.$dialog.detach().appendTo($("body")), this.addDialogPrintStyles(), window.print(), this.removeDialogPrintStyles()
}, w.DialogObj.prototype.addDialogPrintStyles = function() {
    $("body").children().addClass(this.NO_PRINT_CLASS), this.$dialog.removeClass(this.NO_PRINT_CLASS).addClass(this.PRINT_CLASS)
}, w.DialogObj.prototype.removeDialogPrintStyles = function() {
    $("body").children().removeClass(this.NO_PRINT_CLASS), this.$dialog.removeClass(this.PRINT_CLASS)
}, w.DialogObj.prototype.centerDialog = function() {
    var t = $(window).outerHeight(),
        e = this.$box.outerHeight();
    if (t > e) {
        var n = (t - e) / 2,
            r = t / 6;
        r > n ? this.$box.css({
            top: n,
            margin: "0px auto"
        }) : this.$box.css({
            top: r,
            margin: "0px auto"
        })
    }
};
var w = w || {};
(function(t) {
    t.jsErrors = {}, t.trackJsError = function(e) {
        var n = ["", navigator.userAgent, e.name, e.message, e.stack || "", e.line >= 0 ? e.line : e.lineNumber >= 0 ? e.lineNumber : ""].join("");
        t.jsErrors[n] || (t.jsErrors[n] = !0, t.trackESPDeprecated("ClientSideError", location.href, n))
    }
}).call(this, w);
var w = w || {};
w.expandable = w.expandable || {}, w.expandable.CLASS_NAME = "expandable", w.expandable.ARROW_CLASS_NAME = w.expandable.CLASS_NAME + "-arrow", w.expandable.CLASS_WHEN_EXPANDED = w.expandable.CLASS_NAME + "-down", w.expandable.CLASS_WHEN_NOT_EXPANDED = w.expandable.CLASS_NAME + "-up", w.expandable.DETAILS_CLASS_NAME = w.expandable.CLASS_NAME + "-details", w.expandable.TOGGLE_ACTION_CLASS = w.expandable.CLASS_NAME + "-toggle", w.expandable.onDomReady = function() {
    var t = _.throttle(w.bind(w.expandable.toggleExpandable, w.expandable), 500);
    $(document).on("vclick", ["." + w.expandable.TOGGLE_ACTION_CLASS, "." + w.expandable.ARROW_CLASS_NAME].join(","), t)
}, w.expandable.toggleExpandable = function(t) {
    var e = null;
    e = w.isDefAndNotNull(t.target) ? $(t.target) : $(t), e.hasClass(this.CLASS_NAME) || (e = e.closest("." + this.CLASS_NAME));
    var n = e.hasClass(this.CLASS_WHEN_NOT_EXPANDED),
        r = e.find(".expandable-arrow");
    r.toggleClass("icon-caret-right", !n), r.toggleClass("icon-caret-down", n), e.find("." + this.DETAILS_CLASS_NAME).slideToggle(n), e.toggleClass(this.CLASS_WHEN_EXPANDED, n).toggleClass(this.CLASS_WHEN_NOT_EXPANDED, !n)
}, $(w.expandable.onDomReady);
var w = w || {};
(function(t) {
    t.PRICE_PRECISION = 4, t.assetsAmount = function(e, n) {
        return t.amountWithSuffix(e, n, "$")
    }, t.amountWithSuffix = function(t, e, n) {
        function r(t) {
            return t.toFixed(10 > t ? void 0 !== e ? e : 1 : 0)
        }
        return t = parseInt(t), n = n || "", t = t >= 1e9 ? r(t / 1e9) + "B" : t >= 1e6 ? r(t / 1e6) + "M" : t >= 1e3 ? r(t / 1e3) + "K" : t.toFixed(0), n + t
    }, t.commaSeparateNumber = function(t) {
        var e = t.toString().split(".");
        return e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, ","), e.join(".")
    }, t.escapeRegex = function(t, e) {
        return String(t).replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\" + (e || "") + "-]", "g"), "\\$&")
    }, t.formatPrice = function(e) {
        var n = _.isString(e) ? e.replace("$", "") : e,
            r = parseFloat(n);
        return _.isNaN(r) || 0 === r ? "0" : t.formatNum(n, t.PRICE_PRECISION).replace(/0{0,2}$/, "")
    }, t.isValidEmailAddress = function(e) {
        return "string" != typeof e ? !1 : t.isValidEmail(e)
    }, t.moneyCleaner = function(e, n) {
        e && !n && (n = e, e = {}), e = e || {};
        var r = e.context || this,
            i = n.which || n.keyCode,
            o = t.keys.isNumber(i) || t.keys.isLetter(i) || t.keys.isCodeOfType(i, ["comma", "delete", "backspace", "enter", "space"]);
        if ("" !== r.value && (!e.checkKey || o)) {
            var a = null,
                s = null;
            try {
                a = r.selectionStart, s = r.selectionEnd
            } catch (c) {}
            var u = r.value.length,
                l = 0;
            if (e.allowCents) {
                var h = r.value.split(".")[1];
                l = h ? Math.min(h.length, 2) : 0
            }
            r.value = _.compose(function(e) {
                return t.formatNum(e, l)
            }, function(e) {
                return t.parseDollarAmount(e)
            })(r.value);
            var f = r.value.length - u;
            if (e.fixCursor && t.isDefAndNotNull(a) && t.isDefAndNotNull(s)) try {
                r.setSelectionRange(a + f, s + f)
            } catch (c) {}
        }
    }, t.parseDateString = function(t) {
        var e = {
                jan: 1,
                feb: 2,
                mar: 3,
                apr: 4,
                may: 5,
                jun: 6,
                jul: 7,
                aug: 8,
                sep: 9,
                oct: 10,
                nov: 11,
                dec: 12
            },
            n = [null, null, null];
        return t.match(/^\w+\.?\s+\d+(,\s*\d+)?$/) ? (n = t.replace(/[,\.]/g, " ").split(/\s+/), n[0] = e[n[0].toLowerCase()], n[1] = Number(n[1]), n[2] = Number(n[2]), n) : null
    }, t.parseBackendDate = function(t) {
        return new Date(t.substr(0, 4), t.substr(4, 2) - 1, t.substr(6, 2))
    }, t.validDate = function(t, e, n) {
        var r = Date.parse([t, e, n].join("/"));
        if (_.isNaN(r)) return !1;
        var i = new Date(r),
            o = Number(e),
            a = Number(t),
            s = Number(n);
        return a === i.getMonth() + 1 && o === i.getDate() && s === i.getFullYear()
    }, t.plusYears = function(t, e) {
        var n = new Date(t);
        return new Date(n.setFullYear(n.getFullYear() + e))
    }, t.roundToNearest = function(t, e, n) {
        return n = n || Math.round, n(t / e) * e
    }, t.jsDateToArr = function(t) {
        if (_.isNaN(t.valueOf())) throw "Can't parse an Invalid Date";
        return [t.getFullYear(), t.getMonth() + 1, t.getDate()]
    }, t.dateArrToJsDate = function(t) {
        return _.isArray(t) && 3 === t.length ? new Date(t[2], t[0] - 1, t[1]) : void 0
    }, t.toJsDate = function(e) {
        return t.dateArrToJsDate(t.parseDateString(e))
    }, t.toBackendDate = function(e) {
        var n = t.parseDateString(e);
        return t.isDefAndNotNull(n) ? [n[2], t.padWithPrefix(n[0], 2), t.padWithPrefix(n[1], 2)].join("") : ""
    }, t.backendDate = t.toBackendDate, t.parseDollarAmountWithSuffix = function(e) {
        var n = 1,
            r = $.trim(e);
        return /[KMB]$/i.test(r) && (n = {
            k: 1e3,
            m: 1e6,
            b: 1e9
        }[r.charAt(r.length - 1).toLowerCase()], r = r.substr(0, r.length - 1)), t.parseDollarAmount(r) * n
    }, t.wholeDollarAmount = function(e) {
        return t.dollarAmount(e, 0)
    }, t.toSnake = function(t) {
        return t.replace(/([A-Z])/g, function(t) {
            return "_" + t.toLowerCase()
        })
    }, t.toCamel = function(t) {
        return t.replace(/(\_[a-z])/g, function(t) {
            return t.toUpperCase().replace("_", "")
        })
    }
}).call(this, w), function t(e, n, r) {
    function i(a, s) {
        if (!n[a]) {
            if (!e[a]) {
                var c = "function" == typeof require && require;
                if (!s && c) return c(a, !0);
                if (o) return o(a, !0);
                var u = new Error("Cannot find module '" + a + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var l = n[a] = {
                exports: {}
            };
            e[a][0].call(l.exports, function(t) {
                var n = e[a][1][t];
                return i(n ? n : t)
            }, l, l.exports, t, e, n, r)
        }
        return n[a].exports
    }
    for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);
    return i
}({
    1: [function(t, e, n) {
        (function(e) {
            function r() {
                return i.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }
            function i(t) {
                return this instanceof i ? (this.length = 0, this.parent = void 0, "number" == typeof t ? o(this, t) : "string" == typeof t ? a(this, t, arguments.length > 1 ? arguments[1] : "utf8") : s(this, t)) : arguments.length > 1 ? new i(t, arguments[1]) : new i(t)
            }
            function o(t, e) {
                if (t = p(t, 0 > e ? 0 : 0 | g(e)), !i.TYPED_ARRAY_SUPPORT) for (var n = 0; e > n; n++) t[n] = 0;
                return t
            }
            function a(t, e, n) {
                ("string" != typeof n || "" === n) && (n = "utf8");
                var r = 0 | v(e, n);
                return t = p(t, r), t.write(e, n), t
            }
            function s(t, e) {
                if (i.isBuffer(e)) return c(t, e);
                if (X(e)) return u(t, e);
                if (null == e) throw new TypeError("must start with number, buffer, array or string");
                if ("undefined" != typeof ArrayBuffer) {
                    if (e.buffer instanceof ArrayBuffer) return l(t, e);
                    if (e instanceof ArrayBuffer) return h(t, e)
                }
                return e.length ? f(t, e) : d(t, e)
            }
            function c(t, e) {
                var n = 0 | g(e.length);
                return t = p(t, n), e.copy(t, 0, 0, n), t
            }
            function u(t, e) {
                var n = 0 | g(e.length);
                t = p(t, n);
                for (var r = 0; n > r; r += 1) t[r] = 255 & e[r];
                return t
            }
            function l(t, e) {
                var n = 0 | g(e.length);
                t = p(t, n);
                for (var r = 0; n > r; r += 1) t[r] = 255 & e[r];
                return t
            }
            function h(t, e) {
                return i.TYPED_ARRAY_SUPPORT ? (e.byteLength, t = i._augment(new Uint8Array(e))) : t = l(t, new Uint8Array(e)), t
            }
            function f(t, e) {
                var n = 0 | g(e.length);
                t = p(t, n);
                for (var r = 0; n > r; r += 1) t[r] = 255 & e[r];
                return t
            }
            function d(t, e) {
                var n, r = 0;
                "Buffer" === e.type && X(e.data) && (n = e.data, r = 0 | g(n.length)), t = p(t, r);
                for (var i = 0; r > i; i += 1) t[i] = 255 & n[i];
                return t
            }
            function p(t, e) {
                i.TYPED_ARRAY_SUPPORT ? (t = i._augment(new Uint8Array(e)), t.__proto__ = i.prototype) : (t.length = e, t._isBuffer = !0);
                var n = 0 !== e && e <= i.poolSize >>> 1;
                return n && (t.parent = K), t
            }
            function g(t) {
                if (t >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes");
                return 0 | t
            }
            function m(t, e) {
                if (!(this instanceof m)) return new m(t, e);
                var n = new i(t, e);
                return delete n.parent, n
            }
            function v(t, e) {
                "string" != typeof t && (t = "" + t);
                var n = t.length;
                if (0 === n) return 0;
                for (var r = !1;;) switch (e) {
                    case "ascii":
                    case "binary":
                    case "raw":
                    case "raws":
                        return n;
                    case "utf8":
                    case "utf-8":
                        return U(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return V(t).length;
                    default:
                        if (r) return U(t).length;
                        e = ("" + e).toLowerCase(), r = !0
                }
            }
            function y(t, e, n) {
                var r = !1;
                if (e = 0 | e, n = void 0 === n || n === 1 / 0 ? this.length : 0 | n, t || (t = "utf8"), 0 > e && (e = 0), n > this.length && (n = this.length), e >= n) return "";
                for (;;) switch (t) {
                    case "hex":
                        return j(this, e, n);
                    case "utf8":
                    case "utf-8":
                        return T(this, e, n);
                    case "ascii":
                        return C(this, e, n);
                    case "binary":
                        return A(this, e, n);
                    case "base64":
                        return k(this, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return N(this, e, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), r = !0
                }
            }
            function b(t, e, n, r) {
                n = Number(n) || 0;
                var i = t.length - n;
                r ? (r = Number(r), r > i && (r = i)) : r = i;
                var o = e.length;
                if (o % 2 !== 0) throw new Error("Invalid hex string");
                r > o / 2 && (r = o / 2);
                for (var a = 0; r > a; a++) {
                    var s = parseInt(e.substr(2 * a, 2), 16);
                    if (isNaN(s)) throw new Error("Invalid hex string");
                    t[n + a] = s
                }
                return a
            }
            function w(t, e, n, r) {
                return Y(U(e, t.length - n), t, n, r)
            }
            function x(t, e, n, r) {
                return Y(z(e), t, n, r)
            }
            function E(t, e, n, r) {
                return x(t, e, n, r)
            }
            function _(t, e, n, r) {
                return Y(V(e), t, n, r)
            }
            function S(t, e, n, r) {
                return Y(W(e, t.length - n), t, n, r)
            }
            function k(t, e, n) {
                return 0 === e && n === t.length ? H.fromByteArray(t) : H.fromByteArray(t.slice(e, n))
            }
            function T(t, e, n) {
                n = Math.min(t.length, n);
                for (var r = [], i = e; n > i;) {
                    var o = t[i],
                        a = null,
                        s = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
                    if (n >= i + s) {
                        var c, u, l, h;
                        switch (s) {
                            case 1:
                                128 > o && (a = o);
                                break;
                            case 2:
                                c = t[i + 1], 128 === (192 & c) && (h = (31 & o) << 6 | 63 & c, h > 127 && (a = h));
                                break;
                            case 3:
                                c = t[i + 1], u = t[i + 2], 128 === (192 & c) && 128 === (192 & u) && (h = (15 & o) << 12 | (63 & c) << 6 | 63 & u, h > 2047 && (55296 > h || h > 57343) && (a = h));
                                break;
                            case 4:
                                c = t[i + 1], u = t[i + 2], l = t[i + 3], 128 === (192 & c) && 128 === (192 & u) && 128 === (192 & l) && (h = (15 & o) << 18 | (63 & c) << 12 | (63 & u) << 6 | 63 & l, h > 65535 && 1114112 > h && (a = h))
                        }
                    }
                    null === a ? (a = 65533, s = 1) : a > 65535 && (a -= 65536, r.push(a >>> 10 & 1023 | 55296), a = 56320 | 1023 & a), r.push(a), i += s
                }
                return O(r)
            }
            function O(t) {
                var e = t.length;
                if (J >= e) return String.fromCharCode.apply(String, t);
                for (var n = "", r = 0; e > r;) n += String.fromCharCode.apply(String, t.slice(r, r += J));
                return n
            }
            function C(t, e, n) {
                var r = "";
                n = Math.min(t.length, n);
                for (var i = e; n > i; i++) r += String.fromCharCode(127 & t[i]);
                return r
            }
            function A(t, e, n) {
                var r = "";
                n = Math.min(t.length, n);
                for (var i = e; n > i; i++) r += String.fromCharCode(t[i]);
                return r
            }
            function j(t, e, n) {
                var r = t.length;
                (!e || 0 > e) && (e = 0), (!n || 0 > n || n > r) && (n = r);
                for (var i = "", o = e; n > o; o++) i += q(t[o]);
                return i
            }
            function N(t, e, n) {
                for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                return i
            }
            function P(t, e, n) {
                if (t % 1 !== 0 || 0 > t) throw new RangeError("offset is not uint");
                if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
            }
            function M(t, e, n, r, o, a) {
                if (!i.isBuffer(t)) throw new TypeError("buffer must be a Buffer instance");
                if (e > o || a > e) throw new RangeError("value is out of bounds");
                if (n + r > t.length) throw new RangeError("index out of range")
            }
            function R(t, e, n, r) {
                0 > e && (e = 65535 + e + 1);
                for (var i = 0, o = Math.min(t.length - n, 2); o > i; i++) t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
            }
            function D(t, e, n, r) {
                0 > e && (e = 4294967295 + e + 1);
                for (var i = 0, o = Math.min(t.length - n, 4); o > i; i++) t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255
            }
            function I(t, e, n, r, i, o) {
                if (e > i || o > e) throw new RangeError("value is out of bounds");
                if (n + r > t.length) throw new RangeError("index out of range");
                if (0 > n) throw new RangeError("index out of range")
            }
            function F(t, e, n, r, i) {
                return i || I(t, e, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), G.write(t, e, n, r, 23, 4), n + 4
            }
            function $(t, e, n, r, i) {
                return i || I(t, e, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), G.write(t, e, n, r, 52, 8), n + 8
            }
            function L(t) {
                if (t = B(t).replace(Z, ""), t.length < 2) return "";
                for (; t.length % 4 !== 0;) t += "=";
                return t
            }
            function B(t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
            }
            function q(t) {
                return 16 > t ? "0" + t.toString(16) : t.toString(16)
            }
            function U(t, e) {
                e = e || 1 / 0;
                for (var n, r = t.length, i = null, o = [], a = 0; r > a; a++) {
                    if (n = t.charCodeAt(a), n > 55295 && 57344 > n) {
                        if (!i) {
                            if (n > 56319) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (a + 1 === r) {
                                (e -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = n;
                            continue
                        }
                        if (56320 > n) {
                            (e -= 3) > -1 && o.push(239, 191, 189), i = n;
                            continue
                        }
                        n = i - 55296 << 10 | n - 56320 | 65536
                    } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, 128 > n) {
                        if ((e -= 1) < 0) break;
                        o.push(n)
                    } else if (2048 > n) {
                        if ((e -= 2) < 0) break;
                        o.push(n >> 6 | 192, 63 & n | 128)
                    } else if (65536 > n) {
                        if ((e -= 3) < 0) break;
                        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(1114112 > n)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return o
            }
            function z(t) {
                for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n));
                return e
            }
            function W(t, e) {
                for (var n, r, i, o = [], a = 0; a < t.length && !((e -= 2) < 0); a++) n = t.charCodeAt(a), r = n >> 8, i = n % 256, o.push(i), o.push(r);
                return o
            }
            function V(t) {
                return H.toByteArray(L(t))
            }
            function Y(t, e, n, r) {
                for (var i = 0; r > i && !(i + n >= e.length || i >= t.length); i++) e[i + n] = t[i];
                return i
            }
            var H = t("base64-js"),
                G = t("ieee754"),
                X = t("is-array");
            n.Buffer = i, n.SlowBuffer = m, n.INSPECT_MAX_BYTES = 50, i.poolSize = 8192;
            var K = {};
            i.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
                function t() {}
                try {
                    var e = new Uint8Array(1);
                    return e.foo = function() {
                        return 42
                    }, e.constructor = t, 42 === e.foo() && e.constructor === t && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (n) {
                    return !1
                }
            }(), i.TYPED_ARRAY_SUPPORT && (i.prototype.__proto__ = Uint8Array.prototype, i.__proto__ = Uint8Array), i.isBuffer = function(t) {
                return !(null == t || !t._isBuffer)
            }, i.compare = function(t, e) {
                if (!i.isBuffer(t) || !i.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                if (t === e) return 0;
                for (var n = t.length, r = e.length, o = 0, a = Math.min(n, r); a > o && t[o] === e[o];)++o;
                return o !== a && (n = t[o], r = e[o]), r > n ? -1 : n > r ? 1 : 0
            }, i.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "raw":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, i.concat = function(t, e) {
                if (!X(t)) throw new TypeError("list argument must be an Array of Buffers.");
                if (0 === t.length) return new i(0);
                var n;
                if (void 0 === e) for (e = 0, n = 0; n < t.length; n++) e += t[n].length;
                var r = new i(e),
                    o = 0;
                for (n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.copy(r, o), o += a.length
                }
                return r
            }, i.byteLength = v, i.prototype.length = void 0, i.prototype.parent = void 0, i.prototype.toString = function() {
                var t = 0 | this.length;
                return 0 === t ? "" : 0 === arguments.length ? T(this, 0, t) : y.apply(this, arguments)
            }, i.prototype.equals = function(t) {
                if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t ? !0 : 0 === i.compare(this, t)
            }, i.prototype.inspect = function() {
                var t = "",
                    e = n.INSPECT_MAX_BYTES;
                return this.length > 0 && (t = this.toString("hex", 0, e).match(/.{2}/g).join(" "), this.length > e && (t += " ... ")), "<Buffer " + t + ">"
            }, i.prototype.compare = function(t) {
                if (!i.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t ? 0 : i.compare(this, t)
            }, i.prototype.indexOf = function(t, e) {
                function n(t, e, n) {
                    for (var r = -1, i = 0; n + i < t.length; i++) if (t[n + i] === e[-1 === r ? 0 : i - r]) {
                        if (-1 === r && (r = i), i - r + 1 === e.length) return n + r
                    } else r = -1;
                    return -1
                }
                if (e > 2147483647 ? e = 2147483647 : -2147483648 > e && (e = -2147483648), e >>= 0, 0 === this.length) return -1;
                if (e >= this.length) return -1;
                if (0 > e && (e = Math.max(this.length + e, 0)), "string" == typeof t) return 0 === t.length ? -1 : String.prototype.indexOf.call(this, t, e);
                if (i.isBuffer(t)) return n(this, t, e);
                if ("number" == typeof t) return i.TYPED_ARRAY_SUPPORT && "function" === Uint8Array.prototype.indexOf ? Uint8Array.prototype.indexOf.call(this, t, e) : n(this, [t], e);
                throw new TypeError("val must be string, number or Buffer")
            }, i.prototype.get = function(t) {
                return console.log(".get() is deprecated. Access using array indexes instead."), this.readUInt8(t)
            }, i.prototype.set = function(t, e) {
                return console.log(".set() is deprecated. Access using array indexes instead."), this.writeUInt8(t, e)
            }, i.prototype.write = function(t, e, n, r) {
                if (void 0 === e) r = "utf8", n = this.length, e = 0;
                else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
                else if (isFinite(e)) e = 0 | e, isFinite(n) ? (n = 0 | n, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
                else {
                    var i = r;
                    r = e, e = 0 | n, n = i
                }
                var o = this.length - e;
                if ((void 0 === n || n > o) && (n = o), t.length > 0 && (0 > n || 0 > e) || e > this.length) throw new RangeError("attempt to write outside buffer bounds");
                r || (r = "utf8");
                for (var a = !1;;) switch (r) {
                    case "hex":
                        return b(this, t, e, n);
                    case "utf8":
                    case "utf-8":
                        return w(this, t, e, n);
                    case "ascii":
                        return x(this, t, e, n);
                    case "binary":
                        return E(this, t, e, n);
                    case "base64":
                        return _(this, t, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return S(this, t, e, n);
                    default:
                        if (a) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), a = !0
                }
            }, i.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            var J = 4096;
            i.prototype.slice = function(t, e) {
                var n = this.length;
                t = ~~t, e = void 0 === e ? n : ~~e, 0 > t ? (t += n, 0 > t && (t = 0)) : t > n && (t = n), 0 > e ? (e += n, 0 > e && (e = 0)) : e > n && (e = n), t > e && (e = t);
                var r;
                if (i.TYPED_ARRAY_SUPPORT) r = i._augment(this.subarray(t, e));
                else {
                    var o = e - t;
                    r = new i(o, void 0);
                    for (var a = 0; o > a; a++) r[a] = this[a + t]
                }
                return r.length && (r.parent = this.parent || this), r
            }, i.prototype.readUIntLE = function(t, e, n) {
                t = 0 | t, e = 0 | e, n || P(t, e, this.length);
                for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
                return r
            }, i.prototype.readUIntBE = function(t, e, n) {
                t = 0 | t, e = 0 | e, n || P(t, e, this.length);
                for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);) r += this[t + --e] * i;
                return r
            }, i.prototype.readUInt8 = function(t, e) {
                return e || P(t, 1, this.length), this[t]
            }, i.prototype.readUInt16LE = function(t, e) {
                return e || P(t, 2, this.length), this[t] | this[t + 1] << 8
            }, i.prototype.readUInt16BE = function(t, e) {
                return e || P(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, i.prototype.readUInt32LE = function(t, e) {
                return e || P(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, i.prototype.readUInt32BE = function(t, e) {
                return e || P(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, i.prototype.readIntLE = function(t, e, n) {
                t = 0 | t, e = 0 | e, n || P(t, e, this.length);
                for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
                return i *= 128, r >= i && (r -= Math.pow(2, 8 * e)), r
            }, i.prototype.readIntBE = function(t, e, n) {
                t = 0 | t, e = 0 | e, n || P(t, e, this.length);
                for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) o += this[t + --r] * i;
                return i *= 128, o >= i && (o -= Math.pow(2, 8 * e)), o
            }, i.prototype.readInt8 = function(t, e) {
                return e || P(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }, i.prototype.readInt16LE = function(t, e) {
                e || P(t, 2, this.length);
                var n = this[t] | this[t + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, i.prototype.readInt16BE = function(t, e) {
                e || P(t, 2, this.length);
                var n = this[t + 1] | this[t] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, i.prototype.readInt32LE = function(t, e) {
                return e || P(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, i.prototype.readInt32BE = function(t, e) {
                return e || P(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, i.prototype.readFloatLE = function(t, e) {
                return e || P(t, 4, this.length), G.read(this, t, !0, 23, 4)
            }, i.prototype.readFloatBE = function(t, e) {
                return e || P(t, 4, this.length), G.read(this, t, !1, 23, 4)
            }, i.prototype.readDoubleLE = function(t, e) {
                return e || P(t, 8, this.length), G.read(this, t, !0, 52, 8)
            }, i.prototype.readDoubleBE = function(t, e) {
                return e || P(t, 8, this.length), G.read(this, t, !1, 52, 8)
            }, i.prototype.writeUIntLE = function(t, e, n, r) {
                t = +t, e = 0 | e, n = 0 | n, r || M(this, t, e, n, Math.pow(2, 8 * n), 0);
                var i = 1,
                    o = 0;
                for (this[e] = 255 & t; ++o < n && (i *= 256);) this[e + o] = t / i & 255;
                return e + n
            }, i.prototype.writeUIntBE = function(t, e, n, r) {
                t = +t, e = 0 | e, n = 0 | n, r || M(this, t, e, n, Math.pow(2, 8 * n), 0);
                var i = n - 1,
                    o = 1;
                for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
                return e + n
            }, i.prototype.writeUInt8 = function(t, e, n) {
                return t = +t, e = 0 | e, n || M(this, t, e, 1, 255, 0), i.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = t, e + 1
            }, i.prototype.writeUInt16LE = function(t, e, n) {
                return t = +t, e = 0 | e, n || M(this, t, e, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = t, this[e + 1] = t >>> 8) : R(this, t, e, !0), e + 2
            }, i.prototype.writeUInt16BE = function(t, e, n) {
                return t = +t, e = 0 | e, n || M(this, t, e, 2, 65535, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = t) : R(this, t, e, !1), e + 2
            }, i.prototype.writeUInt32LE = function(t, e, n) {
                return t = +t, e = 0 | e, n || M(this, t, e, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = t) : D(this, t, e, !0), e + 4
            }, i.prototype.writeUInt32BE = function(t, e, n) {
                return t = +t, e = 0 | e, n || M(this, t, e, 4, 4294967295, 0), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t) : D(this, t, e, !1), e + 4
            }, i.prototype.writeIntLE = function(t, e, n, r) {
                if (t = +t, e = 0 | e, !r) {
                    var i = Math.pow(2, 8 * n - 1);
                    M(this, t, e, n, i - 1, -i)
                }
                var o = 0,
                    a = 1,
                    s = 0 > t ? 1 : 0;
                for (this[e] = 255 & t; ++o < n && (a *= 256);) this[e + o] = (t / a >> 0) - s & 255;
                return e + n
            }, i.prototype.writeIntBE = function(t, e, n, r) {
                if (t = +t, e = 0 | e, !r) {
                    var i = Math.pow(2, 8 * n - 1);
                    M(this, t, e, n, i - 1, -i)
                }
                var o = n - 1,
                    a = 1,
                    s = 0 > t ? 1 : 0;
                for (this[e + o] = 255 & t; --o >= 0 && (a *= 256);) this[e + o] = (t / a >> 0) - s & 255;
                return e + n
            }, i.prototype.writeInt8 = function(t, e, n) {
                return t = +t, e = 0 | e, n || M(this, t, e, 1, 127, -128), i.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), 0 > t && (t = 255 + t + 1), this[e] = t, e + 1
            }, i.prototype.writeInt16LE = function(t, e, n) {
                return t = +t, e = 0 | e, n || M(this, t, e, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[e] = t, this[e + 1] = t >>> 8) : R(this, t, e, !0), e + 2
            }, i.prototype.writeInt16BE = function(t, e, n) {
                return t = +t, e = 0 | e, n || M(this, t, e, 2, 32767, -32768), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = t) : R(this, t, e, !1), e + 2
            }, i.prototype.writeInt32LE = function(t, e, n) {
                return t = +t, e = 0 | e, n || M(this, t, e, 4, 2147483647, -2147483648), i.TYPED_ARRAY_SUPPORT ? (this[e] = t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : D(this, t, e, !0), e + 4
            }, i.prototype.writeInt32BE = function(t, e, n) {
                return t = +t, e = 0 | e, n || M(this, t, e, 4, 2147483647, -2147483648), 0 > t && (t = 4294967295 + t + 1), i.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = t) : D(this, t, e, !1), e + 4
            }, i.prototype.writeFloatLE = function(t, e, n) {
                return F(this, t, e, !0, n)
            }, i.prototype.writeFloatBE = function(t, e, n) {
                return F(this, t, e, !1, n)
            }, i.prototype.writeDoubleLE = function(t, e, n) {
                return $(this, t, e, !0, n)
            }, i.prototype.writeDoubleBE = function(t, e, n) {
                return $(this, t, e, !1, n)
            }, i.prototype.copy = function(t, e, n, r) {
                if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && n > r && (r = n), r === n) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (0 > e) throw new RangeError("targetStart out of bounds");
                if (0 > n || n >= this.length) throw new RangeError("sourceStart out of bounds");
                if (0 > r) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                var o, a = r - n;
                if (this === t && e > n && r > e) for (o = a - 1; o >= 0; o--) t[o + e] = this[o + n];
                else if (1e3 > a || !i.TYPED_ARRAY_SUPPORT) for (o = 0; a > o; o++) t[o + e] = this[o + n];
                else t._set(this.subarray(n, n + a), e);
                return a
            }, i.prototype.fill = function(t, e, n) {
                if (t || (t = 0), e || (e = 0), n || (n = this.length), e > n) throw new RangeError("end < start");
                if (n !== e && 0 !== this.length) {
                    if (0 > e || e >= this.length) throw new RangeError("start out of bounds");
                    if (0 > n || n > this.length) throw new RangeError("end out of bounds");
                    var r;
                    if ("number" == typeof t) for (r = e; n > r; r++) this[r] = t;
                    else {
                        var i = U(t.toString()),
                            o = i.length;
                        for (r = e; n > r; r++) this[r] = i[r % o]
                    }
                    return this
                }
            }, i.prototype.toArrayBuffer = function() {
                if ("undefined" != typeof Uint8Array) {
                    if (i.TYPED_ARRAY_SUPPORT) return new i(this).buffer;
                    for (var t = new Uint8Array(this.length), e = 0, n = t.length; n > e; e += 1) t[e] = this[e];
                    return t.buffer
                }
                throw new TypeError("Buffer.toArrayBuffer not supported in this browser")
            };
            var Q = i.prototype;
            i._augment = function(t) {
                return t.constructor = i, t._isBuffer = !0, t._set = t.set, t.get = Q.get, t.set = Q.set, t.write = Q.write, t.toString = Q.toString, t.toLocaleString = Q.toString, t.toJSON = Q.toJSON, t.equals = Q.equals, t.compare = Q.compare, t.indexOf = Q.indexOf, t.copy = Q.copy, t.slice = Q.slice, t.readUIntLE = Q.readUIntLE, t.readUIntBE = Q.readUIntBE, t.readUInt8 = Q.readUInt8, t.readUInt16LE = Q.readUInt16LE, t.readUInt16BE = Q.readUInt16BE, t.readUInt32LE = Q.readUInt32LE, t.readUInt32BE = Q.readUInt32BE, t.readIntLE = Q.readIntLE, t.readIntBE = Q.readIntBE, t.readInt8 = Q.readInt8, t.readInt16LE = Q.readInt16LE, t.readInt16BE = Q.readInt16BE, t.readInt32LE = Q.readInt32LE, t.readInt32BE = Q.readInt32BE, t.readFloatLE = Q.readFloatLE, t.readFloatBE = Q.readFloatBE, t.readDoubleLE = Q.readDoubleLE, t.readDoubleBE = Q.readDoubleBE, t.writeUInt8 = Q.writeUInt8, t.writeUIntLE = Q.writeUIntLE, t.writeUIntBE = Q.writeUIntBE, t.writeUInt16LE = Q.writeUInt16LE, t.writeUInt16BE = Q.writeUInt16BE, t.writeUInt32LE = Q.writeUInt32LE, t.writeUInt32BE = Q.writeUInt32BE, t.writeIntLE = Q.writeIntLE, t.writeIntBE = Q.writeIntBE, t.writeInt8 = Q.writeInt8, t.writeInt16LE = Q.writeInt16LE, t.writeInt16BE = Q.writeInt16BE, t.writeInt32LE = Q.writeInt32LE, t.writeInt32BE = Q.writeInt32BE, t.writeFloatLE = Q.writeFloatLE, t.writeFloatBE = Q.writeFloatBE, t.writeDoubleLE = Q.writeDoubleLE, t.writeDoubleBE = Q.writeDoubleBE, t.fill = Q.fill, t.inspect = Q.inspect, t.toArrayBuffer = Q.toArrayBuffer, t
            };
            var Z = /[^+\/0-9A-Za-z-_]/g
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "base64-js": 2,
        ieee754: 3,
        "is-array": 4
    }],
    2: [function(t, e, n) {
        var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        !
            function(t) {
                "use strict";

                function e(t) {
                    var e = t.charCodeAt(0);
                    return e === a || e === h ? 62 : e === s || e === f ? 63 : c > e ? -1 : c + 10 > e ? e - c + 26 + 26 : l + 26 > e ? e - l : u + 26 > e ? e - u + 26 : void 0
                }
                function n(t) {
                    function n(t) {
                        u[h++] = t
                    }
                    var r, i, a, s, c, u;
                    if (t.length % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                    var l = t.length;
                    c = "=" === t.charAt(l - 2) ? 2 : "=" === t.charAt(l - 1) ? 1 : 0, u = new o(3 * t.length / 4 - c), a = c > 0 ? t.length - 4 : t.length;
                    var h = 0;
                    for (r = 0, i = 0; a > r; r += 4, i += 3) s = e(t.charAt(r)) << 18 | e(t.charAt(r + 1)) << 12 | e(t.charAt(r + 2)) << 6 | e(t.charAt(r + 3)), n((16711680 & s) >> 16), n((65280 & s) >> 8), n(255 & s);
                    return 2 === c ? (s = e(t.charAt(r)) << 2 | e(t.charAt(r + 1)) >> 4, n(255 & s)) : 1 === c && (s = e(t.charAt(r)) << 10 | e(t.charAt(r + 1)) << 4 | e(t.charAt(r + 2)) >> 2, n(s >> 8 & 255), n(255 & s)), u
                }
                function i(t) {
                    function e(t) {
                        return r.charAt(t)
                    }
                    function n(t) {
                        return e(t >> 18 & 63) + e(t >> 12 & 63) + e(t >> 6 & 63) + e(63 & t)
                    }
                    var i, o, a, s = t.length % 3,
                        c = "";
                    for (i = 0, a = t.length - s; a > i; i += 3) o = (t[i] << 16) + (t[i + 1] << 8) + t[i + 2], c += n(o);
                    switch (s) {
                        case 1:
                            o = t[t.length - 1], c += e(o >> 2), c += e(o << 4 & 63), c += "==";
                            break;
                        case 2:
                            o = (t[t.length - 2] << 8) + t[t.length - 1], c += e(o >> 10), c += e(o >> 4 & 63), c += e(o << 2 & 63), c += "="
                    }
                    return c
                }
                var o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                    a = "+".charCodeAt(0),
                    s = "/".charCodeAt(0),
                    c = "0".charCodeAt(0),
                    u = "a".charCodeAt(0),
                    l = "A".charCodeAt(0),
                    h = "-".charCodeAt(0),
                    f = "_".charCodeAt(0);
                t.toByteArray = n, t.fromByteArray = i
            }("undefined" == typeof n ? this.base64js = {} : n)
    }, {}],
    3: [function(t, e, n) {
        n.read = function(t, e, n, r, i) {
            var o, a, s = 8 * i - r - 1,
                c = (1 << s) - 1,
                u = c >> 1,
                l = -7,
                h = n ? i - 1 : 0,
                f = n ? -1 : 1,
                d = t[e + h];
            for (h += f, o = d & (1 << -l) - 1, d >>= -l, l += s; l > 0; o = 256 * o + t[e + h], h += f, l -= 8);
            for (a = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; a = 256 * a + t[e + h], h += f, l -= 8);
            if (0 === o) o = 1 - u;
            else {
                if (o === c) return a ? NaN : (d ? -1 : 1) * (1 / 0);
                a += Math.pow(2, r), o -= u
            }
            return (d ? -1 : 1) * a * Math.pow(2, o - r)
        }, n.write = function(t, e, n, r, i, o) {
            var a, s, c, u = 8 * o - i - 1,
                l = (1 << u) - 1,
                h = l >> 1,
                f = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                d = r ? 0 : o - 1,
                p = r ? 1 : -1,
                g = 0 > e || 0 === e && 0 > 1 / e ? 1 : 0;
            for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = l) : (a = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), e += a + h >= 1 ? f / c : f * Math.pow(2, 1 - h), e * c >= 2 && (a++, c /= 2), a + h >= l ? (s = 0, a = l) : a + h >= 1 ? (s = (e * c - 1) * Math.pow(2, i), a += h) : (s = e * Math.pow(2, h - 1) * Math.pow(2, i), a = 0)); i >= 8; t[n + d] = 255 & s, d += p, s /= 256, i -= 8);
            for (a = a << i | s, u += i; u > 0; t[n + d] = 255 & a, d += p, a /= 256, u -= 8);
            t[n + d - p] |= 128 * g
        }
    }, {}],
    4: [function(t, e, n) {
        var r = Array.isArray,
            i = Object.prototype.toString;
        e.exports = r ||
            function(t) {
                return !!t && "[object Array]" == i.call(t)
            }
    }, {}],
    5: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        e.exports = function(t, e, n, o) {
            e = e || "&", n = n || "=";
            var a = {};
            if ("string" != typeof t || 0 === t.length) return a;
            var s = /\+/g;
            t = t.split(e);
            var c = 1e3;
            o && "number" == typeof o.maxKeys && (c = o.maxKeys);
            var u = t.length;
            c > 0 && u > c && (u = c);
            for (var l = 0; u > l; ++l) {
                var h, f, d, p, g = t[l].replace(s, "%20"),
                    m = g.indexOf(n);
                m >= 0 ? (h = g.substr(0, m), f = g.substr(m + 1)) : (h = g, f = ""), d = decodeURIComponent(h), p = decodeURIComponent(f), r(a, d) ? i(a[d]) ? a[d].push(p) : a[d] = [a[d], p] : a[d] = p
            }
            return a
        };
        var i = Array.isArray ||
            function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }
    }, {}],
    6: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            if (t.map) return t.map(e);
            for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r));
            return n
        }
        var i = function(t) {
            switch (typeof t) {
                case "string":
                    return t;
                case "boolean":
                    return t ? "true" : "false";
                case "number":
                    return isFinite(t) ? t : "";
                default:
                    return ""
            }
        };
        e.exports = function(t, e, n, s) {
            return e = e || "&", n = n || "=", null === t && (t = void 0), "object" == typeof t ? r(a(t), function(a) {
                var s = encodeURIComponent(i(a)) + n;
                return o(t[a]) ? r(t[a], function(t) {
                    return s + encodeURIComponent(i(t))
                }).join(e) : s + encodeURIComponent(i(t[a]))
            }).join(e) : s ? encodeURIComponent(i(s)) + n + encodeURIComponent(i(t)) : ""
        };
        var o = Array.isArray ||
            function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            }, a = Object.keys ||
            function(t) {
                var e = [];
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
                return e
            }
    }, {}],
    7: [function(t, e, n) {
        "use strict";
        n.decode = n.parse = t("./decode"), n.encode = n.stringify = t("./encode")
    }, {
        "./decode": 5,
        "./encode": 6
    }],
    8: [function(t, e, n) {
        e.exports = t("./lib/chai")
    }, {
        "./lib/chai": 9
    }],
    9: [function(t, e, n) {
        var r = [],
            n = e.exports = {};
        n.version = "3.4.1", n.AssertionError = t("assertion-error");
        var i = t("./chai/utils");
        n.use = function(t) {
            return ~r.indexOf(t) || (t(this, i), r.push(t)), this
        }, n.util = i;
        var o = t("./chai/config");
        n.config = o;
        var a = t("./chai/assertion");
        n.use(a);
        var s = t("./chai/core/assertions");
        n.use(s);
        var c = t("./chai/interface/expect");
        n.use(c);
        var u = t("./chai/interface/should");
        n.use(u);
        var l = t("./chai/interface/assert");
        n.use(l)
    }, {
        "./chai/assertion": 10,
        "./chai/config": 11,
        "./chai/core/assertions": 12,
        "./chai/interface/assert": 13,
        "./chai/interface/expect": 14,
        "./chai/interface/should": 15,
        "./chai/utils": 29,
        "assertion-error": 37
    }],
    10: [function(t, e, n) {
        var r = t("./config");
        e.exports = function(t, e) {
            function n(t, e, n) {
                o(this, "ssfi", n || arguments.callee), o(this, "object", t), o(this, "message", e)
            }
            var i = t.AssertionError,
                o = e.flag;
            t.Assertion = n, Object.defineProperty(n, "includeStack", {
                get: function() {
                    return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), r.includeStack
                },
                set: function(t) {
                    console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), r.includeStack = t
                }
            }), Object.defineProperty(n, "showDiff", {
                get: function() {
                    return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), r.showDiff
                },
                set: function(t) {
                    console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), r.showDiff = t
                }
            }), n.addProperty = function(t, n) {
                e.addProperty(this.prototype, t, n)
            }, n.addMethod = function(t, n) {
                e.addMethod(this.prototype, t, n)
            }, n.addChainableMethod = function(t, n, r) {
                e.addChainableMethod(this.prototype, t, n, r)
            }, n.overwriteProperty = function(t, n) {
                e.overwriteProperty(this.prototype, t, n)
            }, n.overwriteMethod = function(t, n) {
                e.overwriteMethod(this.prototype, t, n)
            }, n.overwriteChainableMethod = function(t, n, r) {
                e.overwriteChainableMethod(this.prototype, t, n, r)
            }, n.prototype.assert = function(t, n, a, s, c, u) {
                var l = e.test(this, arguments);
                if (!0 !== u && (u = !1), !0 !== r.showDiff && (u = !1), !l) {
                    var n = e.getMessage(this, arguments),
                        h = e.getActual(this, arguments);
                    throw new i(n, {
                        actual: h,
                        expected: s,
                        showDiff: u
                    }, r.includeStack ? this.assert : o(this, "ssfi"))
                }
            }, Object.defineProperty(n.prototype, "_obj", {
                get: function() {
                    return o(this, "object")
                },
                set: function(t) {
                    o(this, "object", t)
                }
            })
        }
    }, {
        "./config": 11
    }],
    11: [function(t, e, n) {
        e.exports = {
            includeStack: !1,
            showDiff: !0,
            truncateThreshold: 40
        }
    }, {}],
    12: [function(t, e, n) {
        e.exports = function(t, e) {
            function n(t, n) {
                n && A(this, "message", n), t = t.toLowerCase();
                var r = A(this, "object"),
                    i = ~ ["a", "e", "i", "o", "u"].indexOf(t.charAt(0)) ? "an " : "a ";
                this.assert(t === e.type(r), "expected #{this} to be " + i + t, "expected #{this} not to be " + i + t)
            }
            function r() {
                A(this, "contains", !0)
            }
            function i(t, n) {
                e.expectTypes(this, ["array", "object", "string"]), n && A(this, "message", n);
                var r = A(this, "object"),
                    i = !1;
                if ("array" === e.type(r) && "object" === e.type(t)) {
                    for (var o in r) if (e.eql(r[o], t)) {
                        i = !0;
                        break
                    }
                } else if ("object" === e.type(t)) {
                    if (!A(this, "negate")) {
                        for (var a in t) new C(r).property(a, t[a]);
                        return
                    }
                    var s = {};
                    for (var a in t) s[a] = r[a];
                    i = e.eql(s, t)
                } else i = void 0 != r && ~r.indexOf(t);
                this.assert(i, "expected #{this} to include " + e.inspect(t), "expected #{this} to not include " + e.inspect(t))
            }
            function o() {
                var t = A(this, "object"),
                    e = Object.prototype.toString.call(t);
                this.assert("[object Arguments]" === e, "expected #{this} to be arguments but got " + e, "expected #{this} to not be arguments")
            }
            function a(t, e) {
                e && A(this, "message", e);
                var n = A(this, "object");
                return A(this, "deep") ? this.eql(t) : void this.assert(t === n, "expected #{this} to equal #{exp}", "expected #{this} to not equal #{exp}", t, this._obj, !0)
            }
            function s(t, n) {
                n && A(this, "message", n), this.assert(e.eql(t, A(this, "object")), "expected #{this} to deeply equal #{exp}", "expected #{this} to not deeply equal #{exp}", t, this._obj, !0)
            }
            function c(t, e) {
                e && A(this, "message", e);
                var n = A(this, "object");
                if (A(this, "doLength")) {
                    new C(n, e).to.have.property("length");
                    var r = n.length;
                    this.assert(r > t, "expected #{this} to have a length above #{exp} but got #{act}", "expected #{this} to not have a length above #{exp}", t, r)
                } else this.assert(n > t, "expected #{this} to be above " + t, "expected #{this} to be at most " + t)
            }
            function u(t, e) {
                e && A(this, "message", e);
                var n = A(this, "object");
                if (A(this, "doLength")) {
                    new C(n, e).to.have.property("length");
                    var r = n.length;
                    this.assert(r >= t, "expected #{this} to have a length at least #{exp} but got #{act}", "expected #{this} to have a length below #{exp}", t, r)
                } else this.assert(n >= t, "expected #{this} to be at least " + t, "expected #{this} to be below " + t)
            }
            function l(t, e) {
                e && A(this, "message", e);
                var n = A(this, "object");
                if (A(this, "doLength")) {
                    new C(n, e).to.have.property("length");
                    var r = n.length;
                    this.assert(t > r, "expected #{this} to have a length below #{exp} but got #{act}", "expected #{this} to not have a length below #{exp}", t, r)
                } else this.assert(t > n, "expected #{this} to be below " + t, "expected #{this} to be at least " + t)
            }
            function h(t, e) {
                e && A(this, "message", e);
                var n = A(this, "object");
                if (A(this, "doLength")) {
                    new C(n, e).to.have.property("length");
                    var r = n.length;
                    this.assert(t >= r, "expected #{this} to have a length at most #{exp} but got #{act}", "expected #{this} to have a length above #{exp}", t, r)
                } else this.assert(t >= n, "expected #{this} to be at most " + t, "expected #{this} to be above " + t)
            }
            function f(t, n) {
                n && A(this, "message", n);
                var r = e.getName(t);
                this.assert(A(this, "object") instanceof t, "expected #{this} to be an instance of " + r, "expected #{this} to not be an instance of " + r)
            }
            function d(t, n) {
                n && A(this, "message", n);
                var r = A(this, "object");
                this.assert(r.hasOwnProperty(t), "expected #{this} to have own property " + e.inspect(t), "expected #{this} to not have own property " + e.inspect(t))
            }
            function p(t, n, r) {
                "string" == typeof n && (r = n, n = null), r && A(this, "message", r);
                var i = A(this, "object"),
                    o = Object.getOwnPropertyDescriptor(Object(i), t);
                o && n ? this.assert(e.eql(n, o), "expected the own property descriptor for " + e.inspect(t) + " on #{this} to match " + e.inspect(n) + ", got " + e.inspect(o), "expected the own property descriptor for " + e.inspect(t) + " on #{this} to not match " + e.inspect(n), n, o, !0) : this.assert(o, "expected #{this} to have an own property descriptor for " + e.inspect(t), "expected #{this} to not have an own property descriptor for " + e.inspect(t)), A(this, "object", o)
            }
            function g() {
                A(this, "doLength", !0)
            }
            function m(t, e) {
                e && A(this, "message", e);
                var n = A(this, "object");
                new C(n, e).to.have.property("length");
                var r = n.length;
                this.assert(r == t, "expected #{this} to have a length of #{exp} but got #{act}", "expected #{this} to not have a length of #{act}", t, r)
            }
            function v(t, e) {
                e && A(this, "message", e);
                var n = A(this, "object");
                this.assert(t.exec(n), "expected #{this} to match " + t, "expected #{this} not to match " + t)
            }
            function y(t) {
                var n, r = A(this, "object"),
                    i = !0,
                    o = "keys must be given single argument of Array|Object|String, or multiple String arguments";
                switch (e.type(t)) {
                    case "array":
                        if (arguments.length > 1) throw new Error(o);
                        break;
                    case "object":
                        if (arguments.length > 1) throw new Error(o);
                        t = Object.keys(t);
                        break;
                    default:
                        t = Array.prototype.slice.call(arguments)
                }
                if (!t.length) throw new Error("keys required");
                var a = Object.keys(r),
                    s = t,
                    c = t.length,
                    u = A(this, "any"),
                    l = A(this, "all");
                if (u || l || (l = !0), u) {
                    var h = s.filter(function(t) {
                        return ~a.indexOf(t)
                    });
                    i = h.length > 0
                }
                if (l && (i = t.every(function(t) {
                        return ~a.indexOf(t)
                    }), A(this, "negate") || A(this, "contains") || (i = i && t.length == a.length)), c > 1) {
                    t = t.map(function(t) {
                        return e.inspect(t)
                    });
                    var f = t.pop();
                    l && (n = t.join(", ") + ", and " + f), u && (n = t.join(", ") + ", or " + f)
                } else n = e.inspect(t[0]);
                n = (c > 1 ? "keys " : "key ") + n, n = (A(this, "contains") ? "contain " : "have ") + n, this.assert(i, "expected #{this} to " + n, "expected #{this} to not " + n, s.slice(0).sort(), a.sort(), !0)
            }
            function b(t, n, r) {
                r && A(this, "message", r);
                var i = A(this, "object");
                new C(i, r).is.a("function");
                var o = !1,
                    a = null,
                    s = null,
                    c = null;
                0 === arguments.length ? (n = null, t = null) : t && (t instanceof RegExp || "string" == typeof t) ? (n = t, t = null) : t && t instanceof Error ? (a = t, t = null, n = null) : "function" == typeof t ? (s = t.prototype.name, (!s || "Error" === s && t !== Error) && (s = t.name || (new t).name)) : t = null;
                try {
                    i()
                } catch (u) {
                    if (a) return this.assert(u === a, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp}", a instanceof Error ? a.toString() : a, u instanceof Error ? u.toString() : u), A(this, "object", u), this;
                    if (t && (this.assert(u instanceof t, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp} but #{act} was thrown", s, u instanceof Error ? u.toString() : u), !n)) return A(this, "object", u), this;
                    var l = "error" === e.type(u) && "message" in u ? u.message : "" + u;
                    if (null != l && n && n instanceof RegExp) return this.assert(n.exec(l), "expected #{this} to throw error matching #{exp} but got #{act}", "expected #{this} to throw error not matching #{exp}", n, l), A(this, "object", u), this;
                    if (null != l && n && "string" == typeof n) return this.assert(~l.indexOf(n), "expected #{this} to throw error including #{exp} but got #{act}", "expected #{this} to throw error not including #{act}", n, l), A(this, "object", u), this;
                    o = !0, c = u
                }
                var h = "",
                    f = null !== s ? s : a ? "#{exp}" : "an error";
                o && (h = " but #{act} was thrown"), this.assert(o === !0, "expected #{this} to throw " + f + h, "expected #{this} to not throw " + f + h, a instanceof Error ? a.toString() : a, c instanceof Error ? c.toString() : c), A(this, "object", c)
            }
            function w(t, n) {
                n && A(this, "message", n);
                var r = A(this, "object"),
                    i = A(this, "itself"),
                    o = "function" !== e.type(r) || i ? r[t] : r.prototype[t];
                this.assert("function" == typeof o, "expected #{this} to respond to " + e.inspect(t), "expected #{this} to not respond to " + e.inspect(t))
            }
            function x(t, n) {
                n && A(this, "message", n);
                var r = A(this, "object"),
                    i = t(r);
                this.assert(i, "expected #{this} to satisfy " + e.objDisplay(t), "expected #{this} to not satisfy" + e.objDisplay(t), this.negate ? !1 : !0, i)
            }
            function E(t, n, r) {
                r && A(this, "message", r);
                var i = A(this, "object");
                if (new C(i, r).is.a("number"), "number" !== e.type(t) || "number" !== e.type(n)) throw new Error("the arguments to closeTo or approximately must be numbers");
                this.assert(Math.abs(i - t) <= n, "expected #{this} to be close to " + t + " +/- " + n, "expected #{this} not to be close to " + t + " +/- " + n)
            }
            function _(t, e, n) {
                return t.every(function(t) {
                    return n ? e.some(function(e) {
                        return n(t, e)
                    }) : -1 !== e.indexOf(t)
                })
            }
            function S(t, e) {
                e && A(this, "message", e);
                var n = A(this, "object");
                new C(t).to.be.an("array"), this.assert(t.indexOf(n) > -1, "expected #{this} to be one of #{exp}", "expected #{this} to not be one of #{exp}", t, n)
            }
            function k(t, e, n) {
                n && A(this, "message", n);
                var r = A(this, "object");
                new C(t, n).to.have.property(e), new C(r).is.a("function");
                var i = t[e];
                r(), this.assert(i !== t[e], "expected ." + e + " to change", "expected ." + e + " to not change")
            }
            function T(t, e, n) {
                n && A(this, "message", n);
                var r = A(this, "object");
                new C(t, n).to.have.property(e), new C(r).is.a("function");
                var i = t[e];
                r(), this.assert(t[e] - i > 0, "expected ." + e + " to increase", "expected ." + e + " to not increase")
            }
            function O(t, e, n) {
                n && A(this, "message", n);
                var r = A(this, "object");
                new C(t, n).to.have.property(e), new C(r).is.a("function");
                var i = t[e];
                r(), this.assert(t[e] - i < 0, "expected ." + e + " to decrease", "expected ." + e + " to not decrease")
            }
            var C = t.Assertion,
                A = (Object.prototype.toString, e.flag);
            ["to", "be", "been", "is", "and", "has", "have", "with", "that", "which", "at", "of", "same"].forEach(function(t) {
                C.addProperty(t, function() {
                    return this
                })
            }), C.addProperty("not", function() {
                A(this, "negate", !0)
            }), C.addProperty("deep", function() {
                A(this, "deep", !0)
            }), C.addProperty("any", function() {
                A(this, "any", !0), A(this, "all", !1)
            }), C.addProperty("all", function() {
                A(this, "all", !0), A(this, "any", !1)
            }), C.addChainableMethod("an", n), C.addChainableMethod("a", n), C.addChainableMethod("include", i, r), C.addChainableMethod("contain", i, r), C.addChainableMethod("contains", i, r), C.addChainableMethod("includes", i, r), C.addProperty("ok", function() {
                this.assert(A(this, "object"), "expected #{this} to be truthy", "expected #{this} to be falsy")
            }), C.addProperty("true", function() {
                this.assert(!0 === A(this, "object"), "expected #{this} to be true", "expected #{this} to be false", this.negate ? !1 : !0)
            }), C.addProperty("false", function() {
                this.assert(!1 === A(this, "object"), "expected #{this} to be false", "expected #{this} to be true", this.negate ? !0 : !1)
            }), C.addProperty("null", function() {
                this.assert(null === A(this, "object"), "expected #{this} to be null", "expected #{this} not to be null")
            }), C.addProperty("undefined", function() {
                this.assert(void 0 === A(this, "object"), "expected #{this} to be undefined", "expected #{this} not to be undefined")
            }), C.addProperty("NaN", function() {
                this.assert(isNaN(A(this, "object")), "expected #{this} to be NaN", "expected #{this} not to be NaN")
            }), C.addProperty("exist", function() {
                this.assert(null != A(this, "object"), "expected #{this} to exist", "expected #{this} to not exist")
            }), C.addProperty("empty", function() {
                var t = A(this, "object"),
                    e = t;
                Array.isArray(t) || "string" == typeof object ? e = t.length : "object" == typeof t && (e = Object.keys(t).length), this.assert(!e, "expected #{this} to be empty", "expected #{this} not to be empty")
            }), C.addProperty("arguments", o), C.addProperty("Arguments", o), C.addMethod("equal", a), C.addMethod("equals", a), C.addMethod("eq", a), C.addMethod("eql", s), C.addMethod("eqls", s), C.addMethod("above", c), C.addMethod("gt", c), C.addMethod("greaterThan", c), C.addMethod("least", u), C.addMethod("gte", u), C.addMethod("below", l), C.addMethod("lt", l), C.addMethod("lessThan", l), C.addMethod("most", h), C.addMethod("lte", h), C.addMethod("within", function(t, e, n) {
                n && A(this, "message", n);
                var r = A(this, "object"),
                    i = t + ".." + e;
                if (A(this, "doLength")) {
                    new C(r, n).to.have.property("length");
                    var o = r.length;
                    this.assert(o >= t && e >= o, "expected #{this} to have a length within " + i, "expected #{this} to not have a length within " + i)
                } else this.assert(r >= t && e >= r, "expected #{this} to be within " + i, "expected #{this} to not be within " + i)
            }), C.addMethod("instanceof", f), C.addMethod("instanceOf", f), C.addMethod("property", function(t, n, r) {
                r && A(this, "message", r);
                var i = !! A(this, "deep"),
                    o = i ? "deep property " : "property ",
                    a = A(this, "negate"),
                    s = A(this, "object"),
                    c = i ? e.getPathInfo(t, s) : null,
                    u = i ? c.exists : e.hasProperty(t, s),
                    l = i ? c.value : s[t];
                if (a && arguments.length > 1) {
                    if (void 0 === l) throw r = null != r ? r + ": " : "", new Error(r + e.inspect(s) + " has no " + o + e.inspect(t))
                } else this.assert(u, "expected #{this} to have a " + o + e.inspect(t), "expected #{this} to not have " + o + e.inspect(t));
                arguments.length > 1 && this.assert(n === l, "expected #{this} to have a " + o + e.inspect(t) + " of #{exp}, but got #{act}", "expected #{this} to not have a " + o + e.inspect(t) + " of #{act}", n, l), A(this, "object", l)
            }), C.addMethod("ownProperty", d), C.addMethod("haveOwnProperty", d), C.addMethod("ownPropertyDescriptor", p), C.addMethod("haveOwnPropertyDescriptor", p), C.addChainableMethod("length", m, g), C.addMethod("lengthOf", m), C.addMethod("match", v), C.addMethod("matches", v), C.addMethod("string", function(t, n) {
                n && A(this, "message", n);
                var r = A(this, "object");
                new C(r, n).is.a("string"), this.assert(~r.indexOf(t), "expected #{this} to contain " + e.inspect(t), "expected #{this} to not contain " + e.inspect(t))
            }), C.addMethod("keys", y), C.addMethod("key", y), C.addMethod("throw", b), C.addMethod("throws", b), C.addMethod("Throw", b), C.addMethod("respondTo", w), C.addMethod("respondsTo", w), C.addProperty("itself", function() {
                A(this, "itself", !0)
            }), C.addMethod("satisfy", x), C.addMethod("satisfies", x), C.addMethod("closeTo", E), C.addMethod("approximately", E), C.addMethod("members", function(t, n) {
                n && A(this, "message", n);
                var r = A(this, "object");
                new C(r).to.be.an("array"), new C(t).to.be.an("array");
                var i = A(this, "deep") ? e.eql : void 0;
                return A(this, "contains") ? this.assert(_(t, r, i), "expected #{this} to be a superset of #{act}", "expected #{this} to not be a superset of #{act}", r, t) : void this.assert(_(r, t, i) && _(t, r, i), "expected #{this} to have the same members as #{act}", "expected #{this} to not have the same members as #{act}", r, t)
            }), C.addMethod("oneOf", S), C.addChainableMethod("change", k), C.addChainableMethod("changes", k), C.addChainableMethod("increase", T), C.addChainableMethod("increases", T), C.addChainableMethod("decrease", O), C.addChainableMethod("decreases", O), C.addProperty("extensible", function() {
                var t, e = A(this, "object");
                try {
                    t = Object.isExtensible(e)
                } catch (n) {
                    if (!(n instanceof TypeError)) throw n;
                    t = !1
                }
                this.assert(t, "expected #{this} to be extensible", "expected #{this} to not be extensible")
            }), C.addProperty("sealed", function() {
                var t, e = A(this, "object");
                try {
                    t = Object.isSealed(e)
                } catch (n) {
                    if (!(n instanceof TypeError)) throw n;
                    t = !0
                }
                this.assert(t, "expected #{this} to be sealed", "expected #{this} to not be sealed")
            }), C.addProperty("frozen", function() {
                var t, e = A(this, "object");
                try {
                    t = Object.isFrozen(e)
                } catch (n) {
                    if (!(n instanceof TypeError)) throw n;
                    t = !0
                }
                this.assert(t, "expected #{this} to be frozen", "expected #{this} to not be frozen")
            })
        }
    }, {}],
    13: [function(t, e, n) {
        e.exports = function(t, e) {
            var n = t.Assertion,
                r = e.flag,
                i = t.assert = function(e, r) {
                    var i = new n(null, null, t.assert);
                    i.assert(e, r, "[ negation message unavailable ]")
                };
            i.fail = function(e, n, r, o) {
                throw r = r || "assert.fail()", new t.AssertionError(r, {
                    actual: e,
                    expected: n,
                    operator: o
                }, i.fail)
            }, i.isOk = function(t, e) {
                new n(t, e).is.ok
            }, i.isNotOk = function(t, e) {
                new n(t, e).is.not.ok
            }, i.equal = function(t, e, o) {
                var a = new n(t, o, i.equal);
                a.assert(e == r(a, "object"), "expected #{this} to equal #{exp}", "expected #{this} to not equal #{act}", e, t)
            }, i.notEqual = function(t, e, o) {
                var a = new n(t, o, i.notEqual);
                a.assert(e != r(a, "object"), "expected #{this} to not equal #{exp}", "expected #{this} to equal #{act}", e, t)
            }, i.strictEqual = function(t, e, r) {
                new n(t, r).to.equal(e)
            }, i.notStrictEqual = function(t, e, r) {
                new n(t, r).to.not.equal(e)
            }, i.deepEqual = function(t, e, r) {
                new n(t, r).to.eql(e)
            }, i.notDeepEqual = function(t, e, r) {
                new n(t, r).to.not.eql(e)
            }, i.isAbove = function(t, e, r) {
                new n(t, r).to.be.above(e)
            }, i.isAtLeast = function(t, e, r) {
                new n(t, r).to.be.least(e)
            }, i.isBelow = function(t, e, r) {
                new n(t, r).to.be.below(e)
            }, i.isAtMost = function(t, e, r) {
                new n(t, r).to.be.most(e)
            }, i.isTrue = function(t, e) {
                new n(t, e).is["true"]
            }, i.isNotTrue = function(t, e) {
                new n(t, e).to.not.equal(!0)
            }, i.isFalse = function(t, e) {
                new n(t, e).is["false"]
            }, i.isNotFalse = function(t, e) {
                new n(t, e).to.not.equal(!1)
            }, i.isNull = function(t, e) {
                new n(t, e).to.equal(null)
            }, i.isNotNull = function(t, e) {
                new n(t, e).to.not.equal(null)
            }, i.isNaN = function(t, e) {
                new n(t, e).to.be.NaN
            }, i.isNotNaN = function(t, e) {
                new n(t, e).not.to.be.NaN
            }, i.isUndefined = function(t, e) {
                new n(t, e).to.equal(void 0)
            }, i.isDefined = function(t, e) {
                new n(t, e).to.not.equal(void 0)
            }, i.isFunction = function(t, e) {
                new n(t, e).to.be.a("function")
            }, i.isNotFunction = function(t, e) {
                new n(t, e).to.not.be.a("function")
            }, i.isObject = function(t, e) {
                new n(t, e).to.be.a("object")
            }, i.isNotObject = function(t, e) {
                new n(t, e).to.not.be.a("object")
            }, i.isArray = function(t, e) {
                new n(t, e).to.be.an("array")
            }, i.isNotArray = function(t, e) {
                new n(t, e).to.not.be.an("array")
            }, i.isString = function(t, e) {
                new n(t, e).to.be.a("string")
            }, i.isNotString = function(t, e) {
                new n(t, e).to.not.be.a("string")
            }, i.isNumber = function(t, e) {
                new n(t, e).to.be.a("number")
            }, i.isNotNumber = function(t, e) {
                new n(t, e).to.not.be.a("number")
            }, i.isBoolean = function(t, e) {
                new n(t, e).to.be.a("boolean")
            }, i.isNotBoolean = function(t, e) {
                new n(t, e).to.not.be.a("boolean")
            }, i.typeOf = function(t, e, r) {
                new n(t, r).to.be.a(e)
            }, i.notTypeOf = function(t, e, r) {
                new n(t, r).to.not.be.a(e)
            }, i.instanceOf = function(t, e, r) {
                new n(t, r).to.be.instanceOf(e)
            }, i.notInstanceOf = function(t, e, r) {
                new n(t, r).to.not.be.instanceOf(e)
            }, i.include = function(t, e, r) {
                new n(t, r, i.include).include(e)
            }, i.notInclude = function(t, e, r) {
                new n(t, r, i.notInclude).not.include(e)
            }, i.match = function(t, e, r) {
                new n(t, r).to.match(e)
            }, i.notMatch = function(t, e, r) {
                new n(t, r).to.not.match(e)
            }, i.property = function(t, e, r) {
                new n(t, r).to.have.property(e)
            }, i.notProperty = function(t, e, r) {
                new n(t, r).to.not.have.property(e)
            }, i.deepProperty = function(t, e, r) {
                new n(t, r).to.have.deep.property(e)
            }, i.notDeepProperty = function(t, e, r) {
                new n(t, r).to.not.have.deep.property(e)
            }, i.propertyVal = function(t, e, r, i) {
                new n(t, i).to.have.property(e, r)
            }, i.propertyNotVal = function(t, e, r, i) {
                new n(t, i).to.not.have.property(e, r)
            }, i.deepPropertyVal = function(t, e, r, i) {
                new n(t, i).to.have.deep.property(e, r)
            }, i.deepPropertyNotVal = function(t, e, r, i) {
                new n(t, i).to.not.have.deep.property(e, r)
            }, i.lengthOf = function(t, e, r) {
                new n(t, r).to.have.length(e)
            }, i["throws"] = function(t, e, i, o) {
                ("string" == typeof e || e instanceof RegExp) && (i = e, e = null);
                var a = new n(t, o).to["throw"](e, i);
                return r(a, "object")
            }, i.doesNotThrow = function(t, e, r) {
                "string" == typeof e && (r = e, e = null), new n(t, r).to.not.Throw(e)
            }, i.operator = function(t, i, o, a) {
                var s;
                switch (i) {
                    case "==":
                        s = t == o;
                        break;
                    case "===":
                        s = t === o;
                        break;
                    case ">":
                        s = t > o;
                        break;
                    case ">=":
                        s = t >= o;
                        break;
                    case "<":
                        s = o > t;
                        break;
                    case "<=":
                        s = o >= t;
                        break;
                    case "!=":
                        s = t != o;
                        break;
                    case "!==":
                        s = t !== o;
                        break;
                    default:
                        throw new Error('Invalid operator "' + i + '"')
                }
                var c = new n(s, a);
                c.assert(!0 === r(c, "object"), "expected " + e.inspect(t) + " to be " + i + " " + e.inspect(o), "expected " + e.inspect(t) + " to not be " + i + " " + e.inspect(o))
            }, i.closeTo = function(t, e, r, i) {
                new n(t, i).to.be.closeTo(e, r)
            }, i.approximately = function(t, e, r, i) {
                new n(t, i).to.be.approximately(e, r)
            }, i.sameMembers = function(t, e, r) {
                new n(t, r).to.have.same.members(e)
            }, i.sameDeepMembers = function(t, e, r) {
                new n(t, r).to.have.same.deep.members(e)
            }, i.includeMembers = function(t, e, r) {
                new n(t, r).to.include.members(e)
            }, i.oneOf = function(t, e, r) {
                new n(t, r).to.be.oneOf(e)
            }, i.changes = function(t, e, r) {
                new n(t).to.change(e, r)
            }, i.doesNotChange = function(t, e, r) {
                new n(t).to.not.change(e, r)
            }, i.increases = function(t, e, r) {
                new n(t).to.increase(e, r)
            }, i.doesNotIncrease = function(t, e, r) {
                new n(t).to.not.increase(e, r)
            }, i.decreases = function(t, e, r) {
                new n(t).to.decrease(e, r)
            }, i.doesNotDecrease = function(t, e, r) {
                new n(t).to.not.decrease(e, r)
            }, i.ifError = function(t) {
                if (t) throw t
            }, i.isExtensible = function(t, e) {
                new n(t, e).to.be.extensible
            }, i.isNotExtensible = function(t, e) {
                new n(t, e).to.not.be.extensible
            }, i.isSealed = function(t, e) {
                new n(t, e).to.be.sealed
            }, i.isNotSealed = function(t, e) {
                new n(t, e).to.not.be.sealed
            }, i.isFrozen = function(t, e) {
                new n(t, e).to.be.frozen
            }, i.isNotFrozen = function(t, e) {
                new n(t, e).to.not.be.frozen
            }, function o(t, e) {
                return i[e] = i[t], o
            }("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")
        }
    }, {}],
    14: [function(t, e, n) {
        e.exports = function(t, e) {
            t.expect = function(e, n) {
                return new t.Assertion(e, n)
            }, t.expect.fail = function(e, n, r, i) {
                throw r = r || "expect.fail()", new t.AssertionError(r, {
                    actual: e,
                    expected: n,
                    operator: i
                }, t.expect.fail)
            }
        }
    }, {}],
    15: [function(t, e, n) {
        e.exports = function(t, e) {
            function n() {
                function e() {
                    return this instanceof String || this instanceof Number || this instanceof Boolean ? new r(this.valueOf(), null, e) : new r(this, null, e)
                }
                function n(t) {
                    Object.defineProperty(this, "should", {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    })
                }
                Object.defineProperty(Object.prototype, "should", {
                    set: n,
                    get: e,
                    configurable: !0
                });
                var i = {};
                return i.fail = function(e, n, r, o) {
                    throw r = r || "should.fail()", new t.AssertionError(r, {
                        actual: e,
                        expected: n,
                        operator: o
                    }, i.fail)
                }, i.equal = function(t, e, n) {
                    new r(t, n).to.equal(e)
                }, i.Throw = function(t, e, n, i) {
                    new r(t, i).to.Throw(e, n)
                }, i.exist = function(t, e) {
                    new r(t, e).to.exist
                }, i.not = {}, i.not.equal = function(t, e, n) {
                    new r(t, n).to.not.equal(e)
                }, i.not.Throw = function(t, e, n, i) {
                    new r(t, i).to.not.Throw(e, n)
                }, i.not.exist = function(t, e) {
                    new r(t, e).to.not.exist
                }, i["throw"] = i.Throw, i.not["throw"] = i.not.Throw, i
            }
            var r = t.Assertion;
            t.should = n, t.Should = n
        }
    }, {}],
    16: [function(t, e, n) {
        var r = t("./transferFlags"),
            i = t("./flag"),
            o = t("../config"),
            a = "__proto__" in Object,
            s = /^(?:length|name|arguments|caller)$/,
            c = Function.prototype.call,
            u = Function.prototype.apply;
        e.exports = function(t, e, n, l) {
            "function" != typeof l && (l = function() {});
            var h = {
                method: n,
                chainingBehavior: l
            };
            t.__methods || (t.__methods = {}), t.__methods[e] = h, Object.defineProperty(t, e, {
                get: function() {
                    h.chainingBehavior.call(this);
                    var e = function f() {
                        var t = i(this, "ssfi");
                        t && o.includeStack === !1 && i(this, "ssfi", f);
                        var e = h.method.apply(this, arguments);
                        return void 0 === e ? this : e
                    };
                    if (a) {
                        var n = e.__proto__ = Object.create(this);
                        n.call = c, n.apply = u
                    } else {
                        var l = Object.getOwnPropertyNames(t);
                        l.forEach(function(n) {
                            if (!s.test(n)) {
                                var r = Object.getOwnPropertyDescriptor(t, n);
                                Object.defineProperty(e, n, r)
                            }
                        })
                    }
                    return r(this, e), e
                },
                configurable: !0
            })
        }
    }, {
        "../config": 11,
        "./flag": 20,
        "./transferFlags": 36
    }],
    17: [function(t, e, n) {
        var r = t("../config"),
            i = t("./flag");
        e.exports = function(t, e, n) {
            t[e] = function() {
                var o = i(this, "ssfi");
                o && r.includeStack === !1 && i(this, "ssfi", t[e]);
                var a = n.apply(this, arguments);
                return void 0 === a ? this : a
            }
        }
    }, {
        "../config": 11,
        "./flag": 20
    }],
    18: [function(t, e, n) {
        var r = t("../config"),
            i = t("./flag");
        e.exports = function(t, e, n) {
            Object.defineProperty(t, e, {
                get: function o() {
                    var t = i(this, "ssfi");
                    t && r.includeStack === !1 && i(this, "ssfi", o);
                    var e = n.call(this);
                    return void 0 === e ? this : e
                },
                configurable: !0
            })
        }
    }, {
        "../config": 11,
        "./flag": 20
    }],
    19: [function(t, e, n) {
        var r = t("assertion-error"),
            i = t("./flag"),
            o = t("type-detect");
        e.exports = function(t, e) {
            var t = i(t, "object");
            e = e.map(function(t) {
                return t.toLowerCase()
            }), e.sort();
            var n = e.map(function(t, n) {
                var r = ~ ["a", "e", "i", "o", "u"].indexOf(t.charAt(0)) ? "an" : "a",
                    i = e.length > 1 && n === e.length - 1 ? "or " : "";
                return i + r + " " + t
            }).join(", ");
            if (!e.some(function(e) {
                    return o(t) === e
                })) throw new r("object tested must be " + n + ", but " + o(t) + " given")
        }
    }, {
        "./flag": 20,
        "assertion-error": 37,
        "type-detect": 42
    }],
    20: [function(t, e, n) {
        e.exports = function(t, e, n) {
            var r = t.__flags || (t.__flags = Object.create(null));
            return 3 !== arguments.length ? r[e] : void(r[e] = n)
        }
    }, {}],
    21: [function(t, e, n) {
        e.exports = function(t, e) {
            return e.length > 4 ? e[4] : t._obj
        }
    }, {}],
    22: [function(t, e, n) {
        e.exports = function(t) {
            var e = [];
            for (var n in t) e.push(n);
            return e
        }
    }, {}],
    23: [function(t, e, n) {
        var r = t("./flag"),
            i = t("./getActual"),
            o = (t("./inspect"), t("./objDisplay"));
        e.exports = function(t, e) {
            var n = r(t, "negate"),
                a = r(t, "object"),
                s = e[3],
                c = i(t, e),
                u = n ? e[2] : e[1],
                l = r(t, "message");
            return "function" == typeof u && (u = u()), u = u || "", u = u.replace(/#{this}/g, o(a)).replace(/#{act}/g, o(c)).replace(/#{exp}/g, o(s)), l ? l + ": " + u : u
        }
    }, {
        "./flag": 20,
        "./getActual": 21,
        "./inspect": 30,
        "./objDisplay": 31
    }],
    24: [function(t, e, n) {
        e.exports = function(t) {
            if (t.name) return t.name;
            var e = /^\s?function ([^(]*)\(/.exec(t);
            return e && e[1] ? e[1] : ""
        }
    }, {}],
    25: [function(t, e, n) {
        function r(t) {
            var e = t.replace(/([^\\])\[/g, "$1.["),
                n = e.match(/(\\\.|[^.]+?)+/g);
            return n.map(function(t) {
                var e = /^\[(\d+)\]$/,
                    n = e.exec(t);
                return n ? {
                    i: parseFloat(n[1])
                } : {
                    p: t.replace(/\\([.\[\]])/g, "$1")
                }
            })
        }
        function i(t, e, n) {
            var r, i = e;
            n = void 0 === n ? t.length : n;
            for (var o = 0, a = n; a > o; o++) {
                var s = t[o];
                i ? ("undefined" != typeof s.p ? i = i[s.p] : "undefined" != typeof s.i && (i = i[s.i]), o == a - 1 && (r = i)) : r = void 0
            }
            return r
        }
        var o = t("./hasProperty");
        e.exports = function(t, e) {
            var n = r(t),
                a = n[n.length - 1],
                s = {
                    parent: n.length > 1 ? i(n, e, n.length - 1) : e,
                    name: a.p || a.i,
                    value: i(n, e)
                };
            return s.exists = o(s.name, s.parent), s
        }
    }, {
        "./hasProperty": 28
    }],
    26: [function(t, e, n) {
        var r = t("./getPathInfo");
        e.exports = function(t, e) {
            var n = r(t, e);
            return n.value
        }
    }, {
        "./getPathInfo": 25
    }],
    27: [function(t, e, n) {
        e.exports = function(t) {
            function e(t) {
                -1 === n.indexOf(t) && n.push(t)
            }
            for (var n = Object.getOwnPropertyNames(t), r = Object.getPrototypeOf(t); null !== r;) Object.getOwnPropertyNames(r).forEach(e), r = Object.getPrototypeOf(r);
            return n
        }
    }, {}],
    28: [function(t, e, n) {
        var r = t("type-detect"),
            i = {
                number: Number,
                string: String
            };
        e.exports = function(t, e) {
            var n = r(e);
            return "null" === n || "undefined" === n ? !1 : (i[n] && "object" != typeof e && (e = new i[n](e)), t in e)
        }
    }, {
        "type-detect": 42
    }],
    29: [function(t, e, n) {
        var n = e.exports = {};
        n.test = t("./test"), n.type = t("type-detect"), n.expectTypes = t("./expectTypes"), n.getMessage = t("./getMessage"), n.getActual = t("./getActual"), n.inspect = t("./inspect"), n.objDisplay = t("./objDisplay"), n.flag = t("./flag"), n.transferFlags = t("./transferFlags"), n.eql = t("deep-eql"), n.getPathValue = t("./getPathValue"), n.getPathInfo = t("./getPathInfo"), n.hasProperty = t("./hasProperty"), n.getName = t("./getName"), n.addProperty = t("./addProperty"), n.addMethod = t("./addMethod"), n.overwriteProperty = t("./overwriteProperty"), n.overwriteMethod = t("./overwriteMethod"), n.addChainableMethod = t("./addChainableMethod"), n.overwriteChainableMethod = t("./overwriteChainableMethod")
    }, {
        "./addChainableMethod": 16,
        "./addMethod": 17,
        "./addProperty": 18,
        "./expectTypes": 19,
        "./flag": 20,
        "./getActual": 21,
        "./getMessage": 23,
        "./getName": 24,
        "./getPathInfo": 25,
        "./getPathValue": 26,
        "./hasProperty": 28,
        "./inspect": 30,
        "./objDisplay": 31,
        "./overwriteChainableMethod": 32,
        "./overwriteMethod": 33,
        "./overwriteProperty": 34,
        "./test": 35,
        "./transferFlags": 36,
        "deep-eql": 38,
        "type-detect": 42
    }],
    30: [function(t, e, n) {
        function r(t, e, n, r) {
            var o = {
                showHidden: e,
                seen: [],
                stylize: function(t) {
                    return t
                }
            };
            return i(o, t, "undefined" == typeof n ? 2 : n)
        }
        function i(t, e, r) {
            if (e && "function" == typeof e.inspect && e.inspect !== n.inspect && (!e.constructor || e.constructor.prototype !== e)) {
                var p = e.inspect(r);
                return "string" != typeof p && (p = i(t, p, r)), p
            }
            var b = o(t, e);
            if (b) return b;
            if (y(e)) {
                if ("outerHTML" in e) return e.outerHTML;
                try {
                    if (document.xmlVersion) {
                        var w = new XMLSerializer;
                        return w.serializeToString(e)
                    }
                    var x = "http://www.w3.org/1999/xhtml",
                        E = document.createElementNS(x, "_");
                    return E.appendChild(e.cloneNode(!1)), html = E.innerHTML.replace("><", ">" + e.innerHTML + "<"), E.innerHTML = "", html
                } catch (_) {}
            }
            var S = v(e),
                k = t.showHidden ? m(e) : S;
            if (0 === k.length || d(e) && (1 === k.length && "stack" === k[0] || 2 === k.length && "description" === k[0] && "stack" === k[1])) {
                if ("function" == typeof e) {
                    var T = g(e),
                        O = T ? ": " + T : "";
                    return t.stylize("[Function" + O + "]", "special")
                }
                if (h(e)) return t.stylize(RegExp.prototype.toString.call(e), "regexp");
                if (f(e)) return t.stylize(Date.prototype.toUTCString.call(e), "date");
                if (d(e)) return a(e)
            }
            var C = "",
                A = !1,
                j = ["{", "}"];
            if (l(e) && (A = !0, j = ["[", "]"]), "function" == typeof e) {
                var T = g(e),
                    O = T ? ": " + T : "";
                C = " [Function" + O + "]"
            }
            if (h(e) && (C = " " + RegExp.prototype.toString.call(e)), f(e) && (C = " " + Date.prototype.toUTCString.call(e)), d(e)) return a(e);
            if (0 === k.length && (!A || 0 == e.length)) return j[0] + C + j[1];
            if (0 > r) return h(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special");
            t.seen.push(e);
            var N;
            return N = A ? s(t, e, r, S, k) : k.map(function(n) {
                return c(t, e, r, S, n, A)
            }), t.seen.pop(), u(N, C, j)
        }
        function o(t, e) {
            switch (typeof e) {
                case "undefined":
                    return t.stylize("undefined", "undefined");
                case "string":
                    var n = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                    return t.stylize(n, "string");
                case "number":
                    return 0 === e && 1 / e === -(1 / 0) ? t.stylize("-0", "number") : t.stylize("" + e, "number");
                case "boolean":
                    return t.stylize("" + e, "boolean")
            }
            return null === e ? t.stylize("null", "null") : void 0
        }
        function a(t) {
            return "[" + Error.prototype.toString.call(t) + "]"
        }
        function s(t, e, n, r, i) {
            for (var o = [], a = 0, s = e.length; s > a; ++a) Object.prototype.hasOwnProperty.call(e, String(a)) ? o.push(c(t, e, n, r, String(a), !0)) : o.push("");
            return i.forEach(function(i) {
                i.match(/^\d+$/) || o.push(c(t, e, n, r, i, !0))
            }), o
        }
        function c(t, e, n, r, o, a) {
            var s, c;
            if (e.__lookupGetter__ && (e.__lookupGetter__(o) ? c = e.__lookupSetter__(o) ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : e.__lookupSetter__(o) && (c = t.stylize("[Setter]", "special"))), r.indexOf(o) < 0 && (s = "[" + o + "]"), c || (t.seen.indexOf(e[o]) < 0 ? (c = null === n ? i(t, e[o], null) : i(t, e[o], n - 1), c.indexOf("\n") > -1 && (c = a ? c.split("\n").map(function(t) {
                    return "  " + t
                }).join("\n").substr(2) : "\n" + c.split("\n").map(function(t) {
                    return "   " + t
                }).join("\n"))) : c = t.stylize("[Circular]", "special")), "undefined" == typeof s) {
                if (a && o.match(/^\d+$/)) return c;
                s = JSON.stringify("" + o), s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = t.stylize(s, "string"))
            }
            return s + ": " + c
        }
        function u(t, e, n) {
            var r = 0,
                i = t.reduce(function(t, e) {
                    return r++, e.indexOf("\n") >= 0 && r++, t + e.length + 1
                }, 0);
            return i > 60 ? n[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + n[1] : n[0] + e + " " + t.join(", ") + " " + n[1]
        }
        function l(t) {
            return Array.isArray(t) || "object" == typeof t && "[object Array]" === p(t)
        }
        function h(t) {
            return "object" == typeof t && "[object RegExp]" === p(t)
        }
        function f(t) {
            return "object" == typeof t && "[object Date]" === p(t)
        }
        function d(t) {
            return "object" == typeof t && "[object Error]" === p(t)
        }
        function p(t) {
            return Object.prototype.toString.call(t)
        }
        var g = t("./getName"),
            m = t("./getProperties"),
            v = t("./getEnumerableProperties");
        e.exports = r;
        var y = function(t) {
            return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
        }
    }, {
        "./getEnumerableProperties": 22,
        "./getName": 24,
        "./getProperties": 27
    }],
    31: [function(t, e, n) {
        var r = t("./inspect"),
            i = t("../config");
        e.exports = function(t) {
            var e = r(t),
                n = Object.prototype.toString.call(t);
            if (i.truncateThreshold && e.length >= i.truncateThreshold) {
                if ("[object Function]" === n) return t.name && "" !== t.name ? "[Function: " + t.name + "]" : "[Function]";
                if ("[object Array]" === n) return "[ Array(" + t.length + ") ]";
                if ("[object Object]" === n) {
                    var o = Object.keys(t),
                        a = o.length > 2 ? o.splice(0, 2).join(", ") + ", ..." : o.join(", ");
                    return "{ Object (" + a + ") }"
                }
                return e
            }
            return e
        }
    }, {
        "../config": 11,
        "./inspect": 30
    }],
    32: [function(t, e, n) {
        e.exports = function(t, e, n, r) {
            var i = t.__methods[e],
                o = i.chainingBehavior;
            i.chainingBehavior = function() {
                var t = r(o).call(this);
                return void 0 === t ? this : t
            };
            var a = i.method;
            i.method = function() {
                var t = n(a).apply(this, arguments);
                return void 0 === t ? this : t
            }
        }
    }, {}],
    33: [function(t, e, n) {
        e.exports = function(t, e, n) {
            var r = t[e],
                i = function() {
                    return this
                };
            r && "function" == typeof r && (i = r), t[e] = function() {
                var t = n(i).apply(this, arguments);
                return void 0 === t ? this : t
            }
        }
    }, {}],
    34: [function(t, e, n) {
        e.exports = function(t, e, n) {
            var r = Object.getOwnPropertyDescriptor(t, e),
                i = function() {};
            r && "function" == typeof r.get && (i = r.get), Object.defineProperty(t, e, {
                get: function() {
                    var t = n(i).call(this);
                    return void 0 === t ? this : t
                },
                configurable: !0
            })
        }
    }, {}],
    35: [function(t, e, n) {
        var r = t("./flag");
        e.exports = function(t, e) {
            var n = r(t, "negate"),
                i = e[0];
            return n ? !i : i
        }
    }, {
        "./flag": 20
    }],
    36: [function(t, e, n) {
        e.exports = function(t, e, n) {
            var r = t.__flags || (t.__flags = Object.create(null));
            e.__flags || (e.__flags = Object.create(null)), n = 3 === arguments.length ? n : !0;
            for (var i in r)(n || "object" !== i && "ssfi" !== i && "message" != i) && (e.__flags[i] = r[i])
        }
    }, {}],
    37: [function(t, e, n) {
        function r() {
            function t(t, n) {
                Object.keys(n).forEach(function(r) {~e.indexOf(r) || (t[r] = n[r])
                })
            }
            var e = [].slice.call(arguments);
            return function() {
                for (var e = [].slice.call(arguments), n = 0, r = {}; n < e.length; n++) t(r, e[n]);
                return r
            }
        }
        function i(t, e, n) {
            var i = r("name", "message", "stack", "constructor", "toJSON"),
                o = i(e || {});
            this.message = t || "Unspecified AssertionError", this.showDiff = !1;
            for (var a in o) this[a] = o[a];
            n = n || arguments.callee, n && Error.captureStackTrace ? Error.captureStackTrace(this, n) : this.stack = (new Error).stack
        }
        e.exports = i, i.prototype = Object.create(Error.prototype), i.prototype.name = "AssertionError", i.prototype.constructor = i, i.prototype.toJSON = function(t) {
            var e = r("constructor", "toJSON", "stack"),
                n = e({
                    name: this.name
                }, this);
            return !1 !== t && this.stack && (n.stack = this.stack), n
        }
    }, {}],
    38: [function(t, e, n) {
        e.exports = t("./lib/eql")
    }, {
        "./lib/eql": 39
    }],
    39: [function(t, e, n) {
        function r(t, e, n) {
            return i(t, e) ? !0 : "date" === g(t) ? a(t, e) : "regexp" === g(t) ? s(t, e) : p.isBuffer(t) ? h(t, e) : "arguments" === g(t) ? c(t, e, n) : o(t, e) ? "object" !== g(t) && "object" !== g(e) && "array" !== g(t) && "array" !== g(e) ? i(t, e) : d(t, e, n) : !1
        }
        function i(t, e) {
            return t === e ? 0 !== t || 1 / t === 1 / e : t !== t && e !== e
        }
        function o(t, e) {
            return g(t) === g(e)
        }
        function a(t, e) {
            return "date" !== g(e) ? !1 : i(t.getTime(), e.getTime())
        }
        function s(t, e) {
            return "regexp" !== g(e) ? !1 : i(t.toString(), e.toString())
        }
        function c(t, e, n) {
            return "arguments" !== g(e) ? !1 : (t = [].slice.call(t), e = [].slice.call(e), r(t, e, n))
        }
        function u(t) {
            var e = [];
            for (var n in t) e.push(n);
            return e
        }
        function l(t, e) {
            if (t.length !== e.length) return !1;
            for (var n = 0, r = !0; n < t.length; n++) if (t[n] !== e[n]) {
                r = !1;
                break
            }
            return r
        }
        function h(t, e) {
            return p.isBuffer(e) ? l(t, e) : !1
        }
        function f(t) {
            return null !== t && void 0 !== t
        }
        function d(t, e, n) {
            if (!f(t) || !f(e)) return !1;
            if (t.prototype !== e.prototype) return !1;
            var i;
            if (n) {
                for (i = 0; i < n.length; i++) if (n[i][0] === t && n[i][1] === e || n[i][0] === e && n[i][1] === t) return !0
            } else n = [];
            try {
                var o = u(t),
                    a = u(e)
            } catch (s) {
                return !1
            }
            if (o.sort(), a.sort(), !l(o, a)) return !1;
            n.push([t, e]);
            var c;
            for (i = o.length - 1; i >= 0; i--) if (c = o[i], !r(t[c], e[c], n)) return !1;
            return !0
        }
        var p, g = t("type-detect");
        try {
            p = t("buffer").Buffer
        } catch (m) {
            p = {}, p.isBuffer = function() {
                return !1
            }
        }
        e.exports = r
    }, {
        buffer: 1,
        "type-detect": 40
    }],
    40: [function(t, e, n) {
        e.exports = t("./lib/type")
    }, {
        "./lib/type": 41
    }],
    41: [function(t, e, n) {
        function r(t) {
            var e = Object.prototype.toString.call(t);
            return o[e] ? o[e] : null === t ? "null" : void 0 === t ? "undefined" : t === Object(t) ? "object" : typeof t
        }
        function i() {
            this.tests = {}
        }
        var n = e.exports = r,
            o = {
                "[object Array]": "array",
                "[object RegExp]": "regexp",
                "[object Function]": "function",
                "[object Arguments]": "arguments",
                "[object Date]": "date"
            };
        n.Library = i, i.prototype.of = r, i.prototype.define = function(t, e) {
            return 1 === arguments.length ? this.tests[t] : (this.tests[t] = e, this)
        }, i.prototype.test = function(t, e) {
            if (e === r(t)) return !0;
            var n = this.tests[e];
            if (n && "regexp" === r(n)) return n.test(t);
            if (n && "function" === r(n)) return n(t);
            throw new ReferenceError('Type test "' + e + '" not defined or invalid.')
        }
    }, {}],
    42: [function(t, e, n) {
        arguments[4][40][0].apply(n, arguments)
    }, {
        "./lib/type": 43,
        dup: 40
    }],
    43: [function(t, e, n) {
        function r(t) {
            var e = Object.prototype.toString.call(t).match(o)[1].toLowerCase();
            return "function" == typeof Promise && t instanceof Promise ? "promise" : null === t ? "null" : void 0 === t ? "undefined" : e
        }
        function i() {
            return this instanceof i ? void(this.tests = {}) : new i
        }
        var n = e.exports = r,
            o = /^\[object (.*)\]$/;
        n.Library = i, i.prototype.of = r, i.prototype.define = function(t, e) {
            return 1 === arguments.length ? this.tests[t] : (this.tests[t] = e, this)
        }, i.prototype.test = function(t, e) {
            if (e === r(t)) return !0;
            var n = this.tests[e];
            if (n && "regexp" === r(n)) return n.test(t);
            if (n && "function" === r(n)) return n(t);
            throw new ReferenceError('Type test "' + e + '" not defined or invalid.')
        }
    }, {}],
    44: [function(t, e, n) {
        "use strict";
        e.exports = t("./is-implemented")() ? Symbol : t("./polyfill")
    }, {
        "./is-implemented": 45,
        "./polyfill": 60
    }],
    45: [function(t, e, n) {
        "use strict";
        e.exports = function() {
            var t;
            if ("function" != typeof Symbol) return !1;
            t = Symbol("test symbol");
            try {
                String(t)
            } catch (e) {
                return !1
            }
            return "symbol" == typeof Symbol.iterator ? !0 : "object" != typeof Symbol.isConcatSpreadable ? !1 : "object" != typeof Symbol.iterator ? !1 : "object" != typeof Symbol.toPrimitive ? !1 : "object" != typeof Symbol.toStringTag ? !1 : "object" != typeof Symbol.unscopables ? !1 : !0
        }
    }, {}],
    46: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            return t && ("symbol" == typeof t || "Symbol" === t["@@toStringTag"]) || !1
        }
    }, {}],
    47: [function(t, e, n) {
        "use strict";
        var r, i = t("es5-ext/object/assign"),
            o = t("es5-ext/object/normalize-options"),
            a = t("es5-ext/object/is-callable"),
            s = t("es5-ext/string/#/contains");
        r = e.exports = function(t, e) {
            var n, r, a, c, u;
            return arguments.length < 2 || "string" != typeof t ? (c = e, e = t, t = null) : c = arguments[2], null == t ? (n = a = !0, r = !1) : (n = s.call(t, "c"), r = s.call(t, "e"), a = s.call(t, "w")), u = {
                value: e,
                configurable: n,
                enumerable: r,
                writable: a
            }, c ? i(o(c), u) : u
        }, r.gs = function(t, e, n) {
            var r, c, u, l;
            return "string" != typeof t ? (u = n, n = e, e = t, t = null) : u = arguments[3], null == e ? e = void 0 : a(e) ? null == n ? n = void 0 : a(n) || (u = n, n = void 0) : (u = e, e = n = void 0), null == t ? (r = !0, c = !1) : (r = s.call(t, "c"), c = s.call(t, "e")), l = {
                get: e,
                set: n,
                configurable: r,
                enumerable: c
            }, u ? i(o(u), l) : l
        }
    }, {
        "es5-ext/object/assign": 48,
        "es5-ext/object/is-callable": 51,
        "es5-ext/object/normalize-options": 55,
        "es5-ext/string/#/contains": 57
    }],
    48: [function(t, e, n) {
        "use strict";
        e.exports = t("./is-implemented")() ? Object.assign : t("./shim")
    }, {
        "./is-implemented": 49,
        "./shim": 50
    }],
    49: [function(t, e, n) {
        "use strict";
        e.exports = function() {
            var t, e = Object.assign;
            return "function" != typeof e ? !1 : (t = {
                foo: "raz"
            }, e(t, {
                bar: "dwa"
            }, {
                trzy: "trzy"
            }), t.foo + t.bar + t.trzy === "razdwatrzy")
        }
    }, {}],
    50: [function(t, e, n) {
        "use strict";
        var r = t("../keys"),
            i = t("../valid-value"),
            o = Math.max;
        e.exports = function(t, e) {
            var n, a, s, c = o(arguments.length, 2);
            for (t = Object(i(t)), s = function(r) {
                try {
                    t[r] = e[r]
                } catch (i) {
                    n || (n = i)
                }
            }, a = 1; c > a; ++a) e = arguments[a], r(e).forEach(s);
            if (void 0 !== n) throw n;
            return t
        }
    }, {
        "../keys": 52,
        "../valid-value": 56
    }],
    51: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            return "function" == typeof t
        }
    }, {}],
    52: [function(t, e, n) {
        "use strict";
        e.exports = t("./is-implemented")() ? Object.keys : t("./shim")
    }, {
        "./is-implemented": 53,
        "./shim": 54
    }],
    53: [function(t, e, n) {
        "use strict";
        e.exports = function() {
            try {
                return Object.keys("primitive"), !0
            } catch (t) {
                return !1
            }
        }
    }, {}],
    54: [function(t, e, n) {
        "use strict";
        var r = Object.keys;
        e.exports = function(t) {
            return r(null == t ? t : Object(t))
        }
    }, {}],
    55: [function(t, e, n) {
        "use strict";
        var r = Array.prototype.forEach,
            i = Object.create,
            o = function(t, e) {
                var n;
                for (n in t) e[n] = t[n]
            };
        e.exports = function(t) {
            var e = i(null);
            return r.call(arguments, function(t) {
                null != t && o(Object(t), e)
            }), e
        }
    }, {}],
    56: [function(t, e, n) {
        "use strict";
        e.exports = function(t) {
            if (null == t) throw new TypeError("Cannot use null or undefined");
            return t
        }
    }, {}],
    57: [function(t, e, n) {
        "use strict";
        e.exports = t("./is-implemented")() ? String.prototype.contains : t("./shim")
    }, {
        "./is-implemented": 58,
        "./shim": 59
    }],
    58: [function(t, e, n) {
        "use strict";
        var r = "razdwatrzy";
        e.exports = function() {
            return "function" != typeof r.contains ? !1 : r.contains("dwa") === !0 && r.contains("foo") === !1
        }
    }, {}],
    59: [function(t, e, n) {
        "use strict";
        var r = String.prototype.indexOf;
        e.exports = function(t) {
            return r.call(this, t, arguments[1]) > -1
        }
    }, {}],
    60: [function(t, e, n) {
        "use strict";
        var r, i, o = t("d"),
            a = t("./validate-symbol"),
            s = Object.create,
            c = Object.defineProperties,
            u = Object.defineProperty,
            l = Object.prototype,
            h = s(null),
            f = function() {
                var t = s(null);
                return function(e) {
                    for (var n, r = 0; t[e + (r || "")];)++r;
                    return e += r || "", t[e] = !0, n = "@@" + e, u(l, n, o.gs(null, function(t) {
                        u(this, n, o(t))
                    })), n
                }
            }();
        i = function d(t) {
            if (this instanceof i) throw new TypeError("TypeError: Symbol is not a constructor");
            return d(t)
        }, e.exports = r = function p(t) {
            var e;
            if (this instanceof p) throw new TypeError("TypeError: Symbol is not a constructor");
            return e = s(i.prototype), t = void 0 === t ? "" : String(t), c(e, {
                __description__: o("", t),
                __name__: o("", f(t))
            })
        }, c(r, {
            "for": o(function(t) {
                return h[t] ? h[t] : h[t] = r(String(t))
            }),
            keyFor: o(function(t) {
                var e;
                a(t);
                for (e in h) if (h[e] === t) return e
            }),
            hasInstance: o("", r("hasInstance")),
            isConcatSpreadable: o("", r("isConcatSpreadable")),
            iterator: o("", r("iterator")),
            match: o("", r("match")),
            replace: o("", r("replace")),
            search: o("", r("search")),
            species: o("", r("species")),
            split: o("", r("split")),
            toPrimitive: o("", r("toPrimitive")),
            toStringTag: o("", r("toStringTag")),
            unscopables: o("", r("unscopables"))
        }), c(i.prototype, {
            constructor: o(r),
            toString: o("", function() {
                return this.__name__
            })
        }), c(r.prototype, {
            toString: o(function() {
                return "Symbol (" + a(this).__description__ + ")"
            }),
            valueOf: o(function() {
                return a(this)
            })
        }), u(r.prototype, r.toPrimitive, o("", function() {
            return a(this)
        })), u(r.prototype, r.toStringTag, o("c", "Symbol")), u(i.prototype, r.toPrimitive, o("c", r.prototype[r.toPrimitive])), u(i.prototype, r.toStringTag, o("c", r.prototype[r.toStringTag]))
    }, {
        "./validate-symbol": 61,
        d: 47
    }],
    61: [function(t, e, n) {
        "use strict";
        var r = t("./is-symbol");
        e.exports = function(t) {
            if (!r(t)) throw new TypeError(t + " is not a symbol");
            return t
        }
    }, {
        "./is-symbol": 46
    }],
    62: [function(t, e, n) {
        "use strict";
        var r = t("chai").assert,
            i = {
                registerEnvironments: function(t) {
                    r.isObject(t, "Environment map must be a map."), Object.keys(t).forEach(function(e) {
                        this.registerEnvironment(e, t[e])
                    }, this)
                },
                registerEnvironment: function(t, e) {
                    r.isArray(e, "Acceptable environment values must be an array."), this[t] = function() {
                        return e.indexOf("production") > -1
                    }
                }
            };
        if (i.registerEnvironments({
                isDev: ["dev", "development"],
                isTest: ["test"],
                isProd: ["prod", "production"]
            }), !i.isDev() && !i.isTest() && !i.isProd()) throw "NODE_ENV environment variable was not set, but was expected to have been.";
        e.exports = i
    }, {
        chai: 8
    }],
    63: [function(t, e, n) {
        function r(t, e, n, r) {
            n = "function" == typeof n ? o(n, r, 3) : void 0;
            var a = n ? n(t, e) : void 0;
            return void 0 === a ? i(t, e, n) : !! a
        }
        var i = t("lodash._baseisequal"),
            o = t("lodash._bindcallback");
        e.exports = r
    }, {
        "lodash._baseisequal": 64,
        "lodash._bindcallback": 70
    }],
    64: [function(t, e, n) {
        function r(t) {
            return !!t && "object" == typeof t
        }
        function i(t, e) {
            for (var n = -1, r = t.length; ++n < r;) if (e(t[n], n, t)) return !0;
            return !1
        }
        function o(t, e, n, i, s, c) {
            return t === e ? !0 : null == t || null == e || !l(t) && !r(e) ? t !== t && e !== e : a(t, e, o, n, i, s, c)
        }
        function a(t, e, n, r, i, o, a) {
            var l = h(t),
                d = h(e),
                m = g,
                v = g;
            l || (m = k.call(t), m == p ? m = w : m != w && (l = f(t))), d || (v = k.call(e), v == p ? v = w : v != w && (d = f(e)));
            var y = m == w,
                b = v == w,
                x = m == v;
            if (x && !l && !y) return c(t, e, m);
            if (!i) {
                var E = y && S.call(t, "__wrapped__"),
                    _ = b && S.call(e, "__wrapped__");
                if (E || _) return n(E ? t.value() : t, _ ? e.value() : e, r, i, o, a)
            }
            if (!x) return !1;
            o || (o = []), a || (a = []);
            for (var T = o.length; T--;) if (o[T] == t) return a[T] == e;
            o.push(t), a.push(e);
            var O = (l ? s : u)(t, e, n, r, i, o, a);
            return o.pop(), a.pop(), O
        }
        function s(t, e, n, r, o, a, s) {
            var c = -1,
                u = t.length,
                l = e.length;
            if (u != l && !(o && l > u)) return !1;
            for (; ++c < u;) {
                var h = t[c],
                    f = e[c],
                    d = r ? r(o ? f : h, o ? h : f, c) : void 0;
                if (void 0 !== d) {
                    if (d) continue;
                    return !1
                }
                if (o) {
                    if (!i(e, function(t) {
                            return h === t || n(h, t, r, o, a, s)
                        })) return !1
                } else if (h !== f && !n(h, f, r, o, a, s)) return !1
            }
            return !0
        }
        function c(t, e, n) {
            switch (n) {
                case m:
                case v:
                    return +t == +e;
                case y:
                    return t.name == e.name && t.message == e.message;
                case b:
                    return t != +t ? e != +e : t == +e;
                case x:
                case E:
                    return t == e + ""
            }
            return !1
        }
        function u(t, e, n, r, i, o, a) {
            var s = d(t),
                c = s.length,
                u = d(e),
                l = u.length;
            if (c != l && !i) return !1;
            for (var h = c; h--;) {
                var f = s[h];
                if (!(i ? f in e : S.call(e, f))) return !1
            }
            for (var p = i; ++h < c;) {
                f = s[h];
                var g = t[f],
                    m = e[f],
                    v = r ? r(i ? m : g, i ? g : m, f) : void 0;
                if (!(void 0 === v ? n(g, m, r, i, o, a) : v)) return !1;
                p || (p = "constructor" == f)
            }
            if (!p) {
                var y = t.constructor,
                    b = e.constructor;
                if (y != b && "constructor" in t && "constructor" in e && !("function" == typeof y && y instanceof y && "function" == typeof b && b instanceof b)) return !1
            }
            return !0
        }
        function l(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }
        var h = t("lodash.isarray"),
            f = t("lodash.istypedarray"),
            d = t("lodash.keys"),
            p = "[object Arguments]",
            g = "[object Array]",
            m = "[object Boolean]",
            v = "[object Date]",
            y = "[object Error]",
            b = "[object Number]",
            w = "[object Object]",
            x = "[object RegExp]",
            E = "[object String]",
            _ = Object.prototype,
            S = _.hasOwnProperty,
            k = _.toString;
        e.exports = o
    }, {
        "lodash.isarray": 65,
        "lodash.istypedarray": 66,
        "lodash.keys": 67
    }],
    65: [function(t, e, n) {
        function r(t) {
            return !!t && "object" == typeof t
        }
        function i(t, e) {
            var n = null == t ? void 0 : t[e];
            return c(n) ? n : void 0
        }
        function o(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && y >= t
        }
        function a(t) {
            return s(t) && g.call(t) == l
        }
        function s(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }
        function c(t) {
            return null == t ? !1 : a(t) ? m.test(d.call(t)) : r(t) && h.test(t)
        }
        var u = "[object Array]",
            l = "[object Function]",
            h = /^\[object .+?Constructor\]$/,
            f = Object.prototype,
            d = Function.prototype.toString,
            p = f.hasOwnProperty,
            g = f.toString,
            m = RegExp("^" + d.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            v = i(Array, "isArray"),
            y = 9007199254740991,
            b = v ||
                function(t) {
                    return r(t) && o(t.length) && g.call(t) == u
                };
        e.exports = b
    }, {}],
    66: [function(t, e, n) {
        function r(t) {
            return !!t && "object" == typeof t
        }
        function i(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && P >= t
        }
        function o(t) {
            return r(t) && i(t.length) && !! A[N.call(t)]
        }
        var a = "[object Arguments]",
            s = "[object Array]",
            c = "[object Boolean]",
            u = "[object Date]",
            l = "[object Error]",
            h = "[object Function]",
            f = "[object Map]",
            d = "[object Number]",
            p = "[object Object]",
            g = "[object RegExp]",
            m = "[object Set]",
            v = "[object String]",
            y = "[object WeakMap]",
            b = "[object ArrayBuffer]",
            w = "[object Float32Array]",
            x = "[object Float64Array]",
            E = "[object Int8Array]",
            _ = "[object Int16Array]",
            S = "[object Int32Array]",
            k = "[object Uint8Array]",
            T = "[object Uint8ClampedArray]",
            O = "[object Uint16Array]",
            C = "[object Uint32Array]",
            A = {};
        A[w] = A[x] = A[E] = A[_] = A[S] = A[k] = A[T] = A[O] = A[C] = !0, A[a] = A[s] = A[b] = A[c] = A[u] = A[l] = A[h] = A[f] = A[d] = A[p] = A[g] = A[m] = A[v] = A[y] = !1;
        var j = Object.prototype,
            N = j.toString,
            P = 9007199254740991;
        e.exports = o
    }, {}],
    67: [function(t, e, n) {
        function r(t) {
            return function(e) {
                return null == e ? void 0 : e[t]
            }
        }
        function i(t) {
            return null != t && a(y(t))
        }
        function o(t, e) {
            return t = "number" == typeof t || d.test(t) ? +t : -1, e = null == e ? v : e, t > -1 && t % 1 == 0 && e > t
        }
        function a(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && v >= t
        }
        function s(t) {
            for (var e = u(t), n = e.length, r = n && t.length, i = !! r && a(r) && (f(t) || h(t)), s = -1, c = []; ++s < n;) {
                var l = e[s];
                (i && o(l, r) || g.call(t, l)) && c.push(l)
            }
            return c
        }
        function c(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }
        function u(t) {
            if (null == t) return [];
            c(t) || (t = Object(t));
            var e = t.length;
            e = e && a(e) && (f(t) || h(t)) && e || 0;
            for (var n = t.constructor, r = -1, i = "function" == typeof n && n.prototype === t, s = Array(e), u = e > 0; ++r < e;) s[r] = r + "";
            for (var l in t) u && o(l, e) || "constructor" == l && (i || !g.call(t, l)) || s.push(l);
            return s
        }
        var l = t("lodash._getnative"),
            h = t("lodash.isarguments"),
            f = t("lodash.isarray"),
            d = /^\d+$/,
            p = Object.prototype,
            g = p.hasOwnProperty,
            m = l(Object, "keys"),
            v = 9007199254740991,
            y = r("length"),
            b = m ?
                function(t) {
                    var e = null == t ? void 0 : t.constructor;
                    return "function" == typeof e && e.prototype === t || "function" != typeof t && i(t) ? s(t) : c(t) ? m(t) : []
                } : s;
        e.exports = b
    }, {
        "lodash._getnative": 68,
        "lodash.isarguments": 69,
        "lodash.isarray": 65
    }],
    68: [function(t, e, n) {
        function r(t) {
            return !!t && "object" == typeof t
        }
        function i(t, e) {
            var n = null == t ? void 0 : t[e];
            return s(n) ? n : void 0
        }
        function o(t) {
            return a(t) && d.call(t) == c
        }
        function a(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }
        function s(t) {
            return null == t ? !1 : o(t) ? p.test(h.call(t)) : r(t) && u.test(t)
        }
        var c = "[object Function]",
            u = /^\[object .+?Constructor\]$/,
            l = Object.prototype,
            h = Function.prototype.toString,
            f = l.hasOwnProperty,
            d = l.toString,
            p = RegExp("^" + h.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        e.exports = i
    }, {}],
    69: [function(t, e, n) {
        function r(t) {
            return !!t && "object" == typeof t
        }
        function i(t) {
            return function(e) {
                return null == e ? void 0 : e[t]
            }
        }
        function o(t) {
            return null != t && a(f(t))
        }
        function a(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && h >= t
        }
        function s(t) {
            return r(t) && o(t) && u.call(t, "callee") && !l.call(t, "callee")
        }
        var c = Object.prototype,
            u = c.hasOwnProperty,
            l = c.propertyIsEnumerable,
            h = 9007199254740991,
            f = i("length");
        e.exports = s
    }, {}],
    70: [function(t, e, n) {
        function r(t, e, n) {
            if ("function" != typeof t) return i;
            if (void 0 === e) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 3:
                    return function(n, r, i) {
                        return t.call(e, n, r, i)
                    };
                case 4:
                    return function(n, r, i, o) {
                        return t.call(e, n, r, i, o)
                    };
                case 5:
                    return function(n, r, i, o, a) {
                        return t.call(e, n, r, i, o, a)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
        function i(t) {
            return t
        }
        e.exports = r
    }, {}],
    71: [function(t, e, n) {
        function r(t, e, n) {
            var r = !0,
                s = !0;
            if ("function" != typeof t) throw new TypeError(a);
            return n === !1 ? r = !1 : i(n) && (r = "leading" in n ? !! n.leading : r, s = "trailing" in n ? !! n.trailing : s), o(t, e, {
                leading: r,
                maxWait: +e,
                trailing: s
            })
        }
        function i(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }
        var o = t("lodash.debounce"),
            a = "Expected a function";
        e.exports = r
    }, {
        "lodash.debounce": 72
    }],
    72: [function(t, e, n) {
        function r(t, e, n) {
            function r() {
                v && clearTimeout(v), d && clearTimeout(d), b = 0, d = v = y = void 0
            }
            function o(e, n) {
                n && clearTimeout(n), d = v = y = void 0, e && (b = u(), p = t.apply(m, f), v || d || (f = m = void 0))
            }
            function c() {
                var t = e - (u() - g);
                0 >= t || t > e ? o(y, d) : v = setTimeout(c, t)
            }
            function l() {
                o(x, v)
            }
            function h() {
                if (f = arguments, g = u(), m = this, y = x && (v || !E), w === !1) var n = E && !v;
                else {
                    d || E || (b = g);
                    var r = w - (g - b),
                        i = 0 >= r || r > w;
                    i ? (d && (d = clearTimeout(d)), b = g, p = t.apply(m, f)) : d || (d = setTimeout(l, r))
                }
                return i && v ? v = clearTimeout(v) : v || e === w || (v = setTimeout(c, e)), n && (i = !0, p = t.apply(m, f)), !i || v || d || (f = m = void 0), p
            }
            var f, d, p, g, m, v, y, b = 0,
                w = !1,
                x = !0;
            if ("function" != typeof t) throw new TypeError(a);
            if (e = 0 > e ? 0 : +e || 0, n === !0) {
                var E = !0;
                x = !1
            } else i(n) && (E = !! n.leading, w = "maxWait" in n && s(+n.maxWait || 0, e), x = "trailing" in n ? !! n.trailing : x);
            return h.cancel = r, h
        }
        function i(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }
        var o = t("lodash._getnative"),
            a = "Expected a function",
            s = Math.max,
            c = o(Date, "now"),
            u = c ||
                function() {
                    return (new Date).getTime()
                };
        e.exports = r
    }, {
        "lodash._getnative": 73
    }],
    73: [function(t, e, n) {
        arguments[4][68][0].apply(n, arguments)
    }, {
        dup: 68
    }],
    74: [function(t, e, n) {
        "use strict";

        function r() {
            return u
        }
        function i(t, e) {
            return t.some(function(t) {
                return t.mod === e.mod && t.name === e.name
            })
        }
        function o(t, e) {
            i(t, e) || t.push(e)
        }
        function a(t, e, n) {
            var i = {
                mod: t,
                name: e,
                value: t.__get__(e)
            };
            o(r(), i), t.__set__(e, n)
        }
        function s(t) {
            t.mod.__set__(t.name, t.value)
        }
        var c = t("execution-environment"),
            u = [],
            l = {
                checkTestEnv: function() {
                    if (!c.isTest()) throw new Error("PrivateState function was called outside of the test environment");
                    return !0
                },
                exposeForTesting: function(t, e) {
                    c.isTest() && (t._visibleForTesting = e)
                },
                getForTesting: function(t, e) {
                    this.checkTestEnv();
                    var n = t._visibleForTesting;
                    if (Array.isArray(n) && n.indexOf(e) > -1) return t.__get__(e);
                    throw new Error(e + " was not exposed for testing. Please register it.")
                },
                setFunctionForTesting: function(t, e, n) {
                    if (this.checkTestEnv(), "function" != typeof n) throw new Error(e + " is not a function");
                    var r = t._visibleForTesting;
                    if (Array.isArray(r) && r.indexOf(e) > -1) return a(t, e, n), t;
                    throw new Error(e + " was not exposed for testing. Please register it.")
                },
                setConstantForTesting: function(t, e, n) {
                    if (this.checkTestEnv(), e === e.toUpperCase()) return a(t, e, n), t;
                    throw new Error(e + " is not a constant.")
                },
                restoreModule: function(t) {
                    r().filter(function(e) {
                        return t === e.mod
                    }).forEach(s)
                },
                restore: function(t) {
                    this.restoreModule(t)
                },
                restoreAll: function() {
                    r().forEach(s)
                }
            };
        e.exports = l
    }, {
        "execution-environment": 62
    }],
    75: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            var n = c.stringify(e),
                r = "" !== n ? t + "?" + n : t;
            return {
                path: r,
                opts: {}
            }
        }
        function i(t, e) {
            var n = {};
            return n.body = JSON.stringify(e), n.headers = {
                "Content-Type": "application/json",
                "X-Requested-With": "fetch"
            }, {
                path: t,
                opts: n
            }
        }
        function o(t, e, n) {
            n = n || {}, n.params = n.params || {}, u.isUndefined(n.method, "method should only be given in the first parameter"), u.isUndefined(n.headers, "Manually setting headers is not supported"), u.isUndefined(n.body, "body will be built automatically if given opts.params"), u.notInclude(e, "?", "Query strings in path are not supported. Use opts.params instead");
            var o;
            if ("GET" === t || "DELETE" === t) o = r(e, n.params);
            else {
                if ("POST" !== t && "PATCH" !== t) throw new Error("Unrecognized request method");
                o = i(e, n.params)
            }
            return o.opts.method = t, fetch(o.path, Object.assign(o.opts, h))
        }
        function a(t) {
            if (t.status >= 200 && t.status < 300) return t;
            var e = new Error(t.statusText);
            throw e.response = t, e
        }
        function s(t) {
            return u.isFunction(t.json, "Response object must support #json"), u.instanceOf(t, Response), t.json()
        }
        var c = t("querystring"),
            u = t("chai").assert,
            l = t("privatestate"),
            h = {
                mode: "cors",
                credentials: "same-origin"
            },
            f = {
                get: function(t, e) {
                    return o("GET", t, e).then(a)
                },
                post: function(t, e) {
                    return o("POST", t, e).then(a)
                },
                patch: function(t, e) {
                    return o("PATCH", t, e).then(a)
                },
                "delete": function(t, e) {
                    return o("DELETE", t, e).then(a)
                },
                parseJsonResponse: function(t) {
                    return s(t)
                },
                parseJsonError: function(t) {
                    var e = t.response;
                    return u.isDefined(e), s(e).then(function(t) {
                        return Promise.reject(t)
                    })
                }
            };
        l.exposeForTesting(f, ["buildRequestWithQueryString", "buildRequestWithBody", "makeRequest", "checkStatus", "parseJson"]), e.exports = f
    }, {
        chai: 8,
        privatestate: 74,
        querystring: 7
    }],
    76: [function(t, e, n) {
        "use strict";
        var r = t("execution-environment"),
            i = t("wf_stub").partiallyStubObject,
            o = t("./ajax");
        if (r.isTest()) {
            var a = i(o, ["parseJsonResponse", "parseJsonError"]);
            a.isFake = !0, e.exports = a
        } else e.exports = o
    }, {
        "./ajax": 75,
        "execution-environment": 62,
        wf_stub: 113
    }],
    77: [function(t, e, n) {
        arguments[4][8][0].apply(n, arguments)
    }, {
        "./lib/chai": 78,
        dup: 8
    }],
    78: [function(t, e, n) {
        var r = [],
            n = e.exports = {};
        n.version = "3.2.0", n.AssertionError = t("assertion-error");
        var i = t("./chai/utils");
        n.use = function(t) {
            return ~r.indexOf(t) || (t(this, i), r.push(t)), this
        }, n.util = i;
        var o = t("./chai/config");
        n.config = o;
        var a = t("./chai/assertion");
        n.use(a);
        var s = t("./chai/core/assertions");
        n.use(s);
        var c = t("./chai/interface/expect");
        n.use(c);
        var u = t("./chai/interface/should");
        n.use(u);
        var l = t("./chai/interface/assert");
        n.use(l)
    }, {
        "./chai/assertion": 79,
        "./chai/config": 80,
        "./chai/core/assertions": 81,
        "./chai/interface/assert": 82,
        "./chai/interface/expect": 83,
        "./chai/interface/should": 84,
        "./chai/utils": 97,
        "assertion-error": 105
    }],
    79: [function(t, e, n) {
        var r = t("./config");
        e.exports = function(t, e) {
            function n(t, e, n) {
                o(this, "ssfi", n || arguments.callee), o(this, "object", t), o(this, "message", e)
            }
            var i = t.AssertionError,
                o = e.flag;
            t.Assertion = n, Object.defineProperty(n, "includeStack", {
                get: function() {
                    return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), r.includeStack
                },
                set: function(t) {
                    console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."), r.includeStack = t
                }
            }), Object.defineProperty(n, "showDiff", {
                get: function() {
                    return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), r.showDiff
                },
                set: function(t) {
                    console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."), r.showDiff = t
                }
            }), n.addProperty = function(t, n) {
                e.addProperty(this.prototype, t, n)
            }, n.addMethod = function(t, n) {
                e.addMethod(this.prototype, t, n)
            }, n.addChainableMethod = function(t, n, r) {
                e.addChainableMethod(this.prototype, t, n, r)
            }, n.overwriteProperty = function(t, n) {
                e.overwriteProperty(this.prototype, t, n)
            }, n.overwriteMethod = function(t, n) {
                e.overwriteMethod(this.prototype, t, n)
            }, n.overwriteChainableMethod = function(t, n, r) {
                e.overwriteChainableMethod(this.prototype, t, n, r)
            }, n.prototype.assert = function(t, n, a, s, c, u) {
                var l = e.test(this, arguments);
                if (!0 !== u && (u = !1), !0 !== r.showDiff && (u = !1), !l) {
                    var n = e.getMessage(this, arguments),
                        h = e.getActual(this, arguments);
                    throw new i(n, {
                        actual: h,
                        expected: s,
                        showDiff: u
                    }, r.includeStack ? this.assert : o(this, "ssfi"))
                }
            }, Object.defineProperty(n.prototype, "_obj", {
                get: function() {
                    return o(this, "object")
                },
                set: function(t) {
                    o(this, "object", t)
                }
            })
        }
    }, {
        "./config": 80
    }],
    80: [function(t, e, n) {
        arguments[4][11][0].apply(n, arguments)
    }, {
        dup: 11
    }],
    81: [function(t, e, n) {
        e.exports = function(t, e) {
            function n(t, n) {
                n && O(this, "message", n), t = t.toLowerCase();
                var r = O(this, "object"),
                    i = ~ ["a", "e", "i", "o", "u"].indexOf(t.charAt(0)) ? "an " : "a ";
                this.assert(t === e.type(r), "expected #{this} to be " + i + t, "expected #{this} not to be " + i + t)
            }
            function r() {
                O(this, "contains", !0)
            }
            function i(t, n) {
                n && O(this, "message", n);
                var r = O(this, "object"),
                    i = !1;
                if ("array" === e.type(r) && "object" === e.type(t)) {
                    for (var o in r) if (e.eql(r[o], t)) {
                        i = !0;
                        break
                    }
                } else if ("object" === e.type(t)) {
                    if (!O(this, "negate")) {
                        for (var a in t) new T(r).property(a, t[a]);
                        return
                    }
                    var s = {};
                    for (var a in t) s[a] = r[a];
                    i = e.eql(s, t)
                } else i = r && ~r.indexOf(t);
                this.assert(i, "expected #{this} to include " + e.inspect(t), "expected #{this} to not include " + e.inspect(t))
            }
            function o() {
                var t = O(this, "object"),
                    e = Object.prototype.toString.call(t);
                this.assert("[object Arguments]" === e, "expected #{this} to be arguments but got " + e, "expected #{this} to not be arguments")
            }
            function a(t, e) {
                e && O(this, "message", e);
                var n = O(this, "object");
                return O(this, "deep") ? this.eql(t) : void this.assert(t === n, "expected #{this} to equal #{exp}", "expected #{this} to not equal #{exp}", t, this._obj, !0)
            }
            function s(t, n) {
                n && O(this, "message", n), this.assert(e.eql(t, O(this, "object")), "expected #{this} to deeply equal #{exp}", "expected #{this} to not deeply equal #{exp}", t, this._obj, !0)
            }
            function c(t, e) {
                e && O(this, "message", e);
                var n = O(this, "object");
                if (O(this, "doLength")) {
                    new T(n, e).to.have.property("length");
                    var r = n.length;
                    this.assert(r > t, "expected #{this} to have a length above #{exp} but got #{act}", "expected #{this} to not have a length above #{exp}", t, r)
                } else this.assert(n > t, "expected #{this} to be above " + t, "expected #{this} to be at most " + t)
            }
            function u(t, e) {
                e && O(this, "message", e);
                var n = O(this, "object");
                if (O(this, "doLength")) {
                    new T(n, e).to.have.property("length");
                    var r = n.length;
                    this.assert(r >= t, "expected #{this} to have a length at least #{exp} but got #{act}", "expected #{this} to have a length below #{exp}", t, r)
                } else this.assert(n >= t, "expected #{this} to be at least " + t, "expected #{this} to be below " + t)
            }
            function l(t, e) {
                e && O(this, "message", e);
                var n = O(this, "object");
                if (O(this, "doLength")) {
                    new T(n, e).to.have.property("length");
                    var r = n.length;
                    this.assert(t > r, "expected #{this} to have a length below #{exp} but got #{act}", "expected #{this} to not have a length below #{exp}", t, r)
                } else this.assert(t > n, "expected #{this} to be below " + t, "expected #{this} to be at least " + t)
            }
            function h(t, e) {
                e && O(this, "message", e);
                var n = O(this, "object");
                if (O(this, "doLength")) {
                    new T(n, e).to.have.property("length");
                    var r = n.length;
                    this.assert(t >= r, "expected #{this} to have a length at most #{exp} but got #{act}", "expected #{this} to have a length above #{exp}", t, r)
                } else this.assert(t >= n, "expected #{this} to be at most " + t, "expected #{this} to be above " + t)
            }
            function f(t, n) {
                n && O(this, "message", n);
                var r = e.getName(t);
                this.assert(O(this, "object") instanceof t, "expected #{this} to be an instance of " + r, "expected #{this} to not be an instance of " + r)
            }
            function d(t, n) {
                n && O(this, "message", n);
                var r = O(this, "object");
                this.assert(r.hasOwnProperty(t), "expected #{this} to have own property " + e.inspect(t), "expected #{this} to not have own property " + e.inspect(t))
            }
            function p(t, n, r) {
                "string" == typeof n && (r = n, n = null), r && O(this, "message", r);
                var i = O(this, "object"),
                    o = Object.getOwnPropertyDescriptor(Object(i), t);
                o && n ? this.assert(e.eql(n, o), "expected the own property descriptor for " + e.inspect(t) + " on #{this} to match " + e.inspect(n) + ", got " + e.inspect(o), "expected the own property descriptor for " + e.inspect(t) + " on #{this} to not match " + e.inspect(n), n, o, !0) : this.assert(o, "expected #{this} to have an own property descriptor for " + e.inspect(t), "expected #{this} to not have an own property descriptor for " + e.inspect(t)), O(this, "object", o)
            }
            function g() {
                O(this, "doLength", !0)
            }
            function m(t, e) {
                e && O(this, "message", e);
                var n = O(this, "object");
                new T(n, e).to.have.property("length");
                var r = n.length;
                this.assert(r == t, "expected #{this} to have a length of #{exp} but got #{act}", "expected #{this} to not have a length of #{act}", t, r)
            }
            function v(t, e) {
                e && O(this, "message", e);
                var n = O(this, "object");
                this.assert(t.exec(n), "expected #{this} to match " + t, "expected #{this} not to match " + t)
            }
            function y(t) {
                var n, r = O(this, "object"),
                    i = !0,
                    o = "keys must be given single argument of Array|Object|String, or multiple String arguments";
                switch (e.type(t)) {
                    case "array":
                        if (arguments.length > 1) throw new Error(o);
                        break;
                    case "object":
                        if (arguments.length > 1) throw new Error(o);
                        t = Object.keys(t);
                        break;
                    default:
                        t = Array.prototype.slice.call(arguments)
                }
                if (!t.length) throw new Error("keys required");
                var a = Object.keys(r),
                    s = t,
                    c = t.length,
                    u = O(this, "any"),
                    l = O(this, "all");
                if (u || l || (l = !0), u) {
                    var h = s.filter(function(t) {
                        return ~a.indexOf(t)
                    });
                    i = h.length > 0
                }
                if (l && (i = t.every(function(t) {
                        return ~a.indexOf(t)
                    }), O(this, "negate") || O(this, "contains") || (i = i && t.length == a.length)), c > 1) {
                    t = t.map(function(t) {
                        return e.inspect(t)
                    });
                    var f = t.pop();
                    l && (n = t.join(", ") + ", and " + f), u && (n = t.join(", ") + ", or " + f)
                } else n = e.inspect(t[0]);
                n = (c > 1 ? "keys " : "key ") + n, n = (O(this, "contains") ? "contain " : "have ") + n, this.assert(i, "expected #{this} to " + n, "expected #{this} to not " + n, s.slice(0).sort(), a.sort(), !0)
            }
            function b(t, n, r) {
                r && O(this, "message", r);
                var i = O(this, "object");
                new T(i, r).is.a("function");
                var o = !1,
                    a = null,
                    s = null,
                    c = null;
                0 === arguments.length ? (n = null, t = null) : t && (t instanceof RegExp || "string" == typeof t) ? (n = t, t = null) : t && t instanceof Error ? (a = t, t = null, n = null) : "function" == typeof t ? (s = t.prototype.name || t.name, "Error" === s && t !== Error && (s = (new t).name)) : t = null;
                try {
                    i()
                } catch (u) {
                    if (a) return this.assert(u === a, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp}", a instanceof Error ? a.toString() : a, u instanceof Error ? u.toString() : u), O(this, "object", u), this;
                    if (t && (this.assert(u instanceof t, "expected #{this} to throw #{exp} but #{act} was thrown", "expected #{this} to not throw #{exp} but #{act} was thrown", s, u instanceof Error ? u.toString() : u), !n)) return O(this, "object", u), this;
                    var l = "error" === e.type(u) && "message" in u ? u.message : "" + u;
                    if (null != l && n && n instanceof RegExp) return this.assert(n.exec(l), "expected #{this} to throw error matching #{exp} but got #{act}", "expected #{this} to throw error not matching #{exp}", n, l), O(this, "object", u), this;
                    if (null != l && n && "string" == typeof n) return this.assert(~l.indexOf(n), "expected #{this} to throw error including #{exp} but got #{act}", "expected #{this} to throw error not including #{act}", n, l), O(this, "object", u), this;
                    o = !0, c = u
                }
                var h = "",
                    f = null !== s ? s : a ? "#{exp}" : "an error";
                o && (h = " but #{act} was thrown"), this.assert(o === !0, "expected #{this} to throw " + f + h, "expected #{this} to not throw " + f + h, a instanceof Error ? a.toString() : a, c instanceof Error ? c.toString() : c), O(this, "object", c)
            }
            function w(t, n) {
                n && O(this, "message", n);
                var r = O(this, "object"),
                    i = O(this, "itself"),
                    o = "function" !== e.type(r) || i ? r[t] : r.prototype[t];
                this.assert("function" == typeof o, "expected #{this} to respond to " + e.inspect(t), "expected #{this} to not respond to " + e.inspect(t))
            }
            function x(t, n) {
                n && O(this, "message", n);
                var r = O(this, "object"),
                    i = t(r);
                this.assert(i, "expected #{this} to satisfy " + e.objDisplay(t), "expected #{this} to not satisfy" + e.objDisplay(t), this.negate ? !1 : !0, i)
            }
            function E(t, e, n) {
                return t.every(function(t) {
                    return n ? e.some(function(e) {
                        return n(t, e)
                    }) : -1 !== e.indexOf(t)
                })
            }
            function _(t, e, n) {
                n && O(this, "message", n);
                var r = O(this, "object");
                new T(t, n).to.have.property(e), new T(r).is.a("function");
                var i = t[e];
                r(), this.assert(i !== t[e], "expected ." + e + " to change", "expected ." + e + " to not change")
            }
            function S(t, e, n) {
                n && O(this, "message", n);
                var r = O(this, "object");
                new T(t, n).to.have.property(e), new T(r).is.a("function");
                var i = t[e];
                r(), this.assert(t[e] - i > 0, "expected ." + e + " to increase", "expected ." + e + " to not increase")
            }
            function k(t, e, n) {
                n && O(this, "message", n);
                var r = O(this, "object");
                new T(t, n).to.have.property(e), new T(r).is.a("function");
                var i = t[e];
                r(), this.assert(t[e] - i < 0, "expected ." + e + " to decrease", "expected ." + e + " to not decrease")
            }
            var T = t.Assertion,
                O = (Object.prototype.toString, e.flag);
            ["to", "be", "been", "is", "and", "has", "have", "with", "that", "which", "at", "of", "same"].forEach(function(t) {
                T.addProperty(t, function() {
                    return this
                })
            }), T.addProperty("not", function() {
                O(this, "negate", !0)
            }), T.addProperty("deep", function() {
                O(this, "deep", !0)
            }), T.addProperty("any", function() {
                O(this, "any", !0), O(this, "all", !1)
            }), T.addProperty("all", function() {
                O(this, "all", !0), O(this, "any", !1)
            }), T.addChainableMethod("an", n), T.addChainableMethod("a", n), T.addChainableMethod("include", i, r), T.addChainableMethod("contain", i, r), T.addChainableMethod("contains", i, r), T.addChainableMethod("includes", i, r), T.addProperty("ok", function() {
                this.assert(O(this, "object"), "expected #{this} to be truthy", "expected #{this} to be falsy")
            }), T.addProperty("true", function() {
                this.assert(!0 === O(this, "object"), "expected #{this} to be true", "expected #{this} to be false", this.negate ? !1 : !0)
            }), T.addProperty("false", function() {
                this.assert(!1 === O(this, "object"), "expected #{this} to be false", "expected #{this} to be true", this.negate ? !0 : !1)
            }), T.addProperty("null", function() {
                this.assert(null === O(this, "object"), "expected #{this} to be null", "expected #{this} not to be null")
            }), T.addProperty("undefined", function() {
                this.assert(void 0 === O(this, "object"), "expected #{this} to be undefined", "expected #{this} not to be undefined")
            }), T.addProperty("NaN", function() {
                this.assert(isNaN(O(this, "object")), "expected #{this} to be NaN", "expected #{this} not to be NaN")
            }), T.addProperty("exist", function() {
                this.assert(null != O(this, "object"), "expected #{this} to exist", "expected #{this} to not exist")
            }), T.addProperty("empty", function() {
                var t = O(this, "object"),
                    e = t;
                Array.isArray(t) || "string" == typeof object ? e = t.length : "object" == typeof t && (e = Object.keys(t).length), this.assert(!e, "expected #{this} to be empty", "expected #{this} not to be empty")
            }), T.addProperty("arguments", o), T.addProperty("Arguments", o), T.addMethod("equal", a), T.addMethod("equals", a), T.addMethod("eq", a), T.addMethod("eql", s), T.addMethod("eqls", s), T.addMethod("above", c), T.addMethod("gt", c), T.addMethod("greaterThan", c), T.addMethod("least", u), T.addMethod("gte", u), T.addMethod("below", l), T.addMethod("lt", l), T.addMethod("lessThan", l), T.addMethod("most", h), T.addMethod("lte", h), T.addMethod("within", function(t, e, n) {
                n && O(this, "message", n);
                var r = O(this, "object"),
                    i = t + ".." + e;
                if (O(this, "doLength")) {
                    new T(r, n).to.have.property("length");
                    var o = r.length;
                    this.assert(o >= t && e >= o, "expected #{this} to have a length within " + i, "expected #{this} to not have a length within " + i)
                } else this.assert(r >= t && e >= r, "expected #{this} to be within " + i, "expected #{this} to not be within " + i)
            }), T.addMethod("instanceof", f), T.addMethod("instanceOf", f), T.addMethod("property", function(t, n, r) {
                r && O(this, "message", r);
                var i = !! O(this, "deep"),
                    o = i ? "deep property " : "property ",
                    a = O(this, "negate"),
                    s = O(this, "object"),
                    c = i ? e.getPathInfo(t, s) : null,
                    u = i ? c.exists : e.hasProperty(t, s),
                    l = i ? c.value : s[t];
                if (a && arguments.length > 1) {
                    if (void 0 === l) throw r = null != r ? r + ": " : "", new Error(r + e.inspect(s) + " has no " + o + e.inspect(t))
                } else this.assert(u, "expected #{this} to have a " + o + e.inspect(t), "expected #{this} to not have " + o + e.inspect(t));
                arguments.length > 1 && this.assert(n === l, "expected #{this} to have a " + o + e.inspect(t) + " of #{exp}, but got #{act}", "expected #{this} to not have a " + o + e.inspect(t) + " of #{act}", n, l), O(this, "object", l)
            }), T.addMethod("ownProperty", d), T.addMethod("haveOwnProperty", d), T.addMethod("ownPropertyDescriptor", p), T.addMethod("haveOwnPropertyDescriptor", p), T.addChainableMethod("length", m, g), T.addMethod("lengthOf", m), T.addMethod("match", v), T.addMethod("matches", v), T.addMethod("string", function(t, n) {
                n && O(this, "message", n);
                var r = O(this, "object");
                new T(r, n).is.a("string"), this.assert(~r.indexOf(t), "expected #{this} to contain " + e.inspect(t), "expected #{this} to not contain " + e.inspect(t))
            }), T.addMethod("keys", y), T.addMethod("key", y), T.addMethod("throw", b), T.addMethod("throws", b), T.addMethod("Throw", b), T.addMethod("respondTo", w), T.addMethod("respondsTo", w), T.addProperty("itself", function() {
                O(this, "itself", !0)
            }), T.addMethod("satisfy", x), T.addMethod("satisfies", x), T.addMethod("closeTo", function(t, n, r) {
                r && O(this, "message", r);
                var i = O(this, "object");
                if (new T(i, r).is.a("number"), "number" !== e.type(t) || "number" !== e.type(n)) throw new Error("the arguments to closeTo must be numbers");
                this.assert(Math.abs(i - t) <= n, "expected #{this} to be close to " + t + " +/- " + n, "expected #{this} not to be close to " + t + " +/- " + n)
            }), T.addMethod("members", function(t, n) {
                n && O(this, "message", n);
                var r = O(this, "object");
                new T(r).to.be.an("array"), new T(t).to.be.an("array");
                var i = O(this, "deep") ? e.eql : void 0;
                return O(this, "contains") ? this.assert(E(t, r, i), "expected #{this} to be a superset of #{act}", "expected #{this} to not be a superset of #{act}", r, t) : void this.assert(E(r, t, i) && E(t, r, i), "expected #{this} to have the same members as #{act}", "expected #{this} to not have the same members as #{act}", r, t)
            }), T.addChainableMethod("change", _), T.addChainableMethod("changes", _), T.addChainableMethod("increase", S), T.addChainableMethod("increases", S), T.addChainableMethod("decrease", k), T.addChainableMethod("decreases", k), T.addProperty("extensible", function() {
                var t = O(this, "object");
                this.assert(Object.isExtensible(t), "expected #{this} to be extensible", "expected #{this} to not be extensible")
            }), T.addProperty("sealed", function() {
                var t = O(this, "object");
                this.assert(Object.isSealed(t), "expected #{this} to be sealed", "expected #{this} to not be sealed")
            }), T.addProperty("frozen", function() {
                var t = O(this, "object");
                this.assert(Object.isFrozen(t), "expected #{this} to be frozen", "expected #{this} to not be frozen")
            })
        }
    }, {}],
    82: [function(t, e, n) {
        e.exports = function(t, e) {
            var n = t.Assertion,
                r = e.flag,
                i = t.assert = function(e, r) {
                    var i = new n(null, null, t.assert);
                    i.assert(e, r, "[ negation message unavailable ]")
                };
            i.fail = function(e, n, r, o) {
                throw r = r || "assert.fail()", new t.AssertionError(r, {
                    actual: e,
                    expected: n,
                    operator: o
                }, i.fail)
            }, i.isOk = function(t, e) {
                new n(t, e).is.ok
            }, i.isNotOk = function(t, e) {
                new n(t, e).is.not.ok
            }, i.equal = function(t, e, o) {
                var a = new n(t, o, i.equal);
                a.assert(e == r(a, "object"), "expected #{this} to equal #{exp}", "expected #{this} to not equal #{act}", e, t)
            }, i.notEqual = function(t, e, o) {
                var a = new n(t, o, i.notEqual);
                a.assert(e != r(a, "object"), "expected #{this} to not equal #{exp}", "expected #{this} to equal #{act}", e, t)
            }, i.strictEqual = function(t, e, r) {
                new n(t, r).to.equal(e)
            }, i.notStrictEqual = function(t, e, r) {
                new n(t, r).to.not.equal(e)
            }, i.deepEqual = function(t, e, r) {
                new n(t, r).to.eql(e)
            }, i.notDeepEqual = function(t, e, r) {
                new n(t, r).to.not.eql(e)
            }, i.isAbove = function(t, e, r) {
                new n(t, r).to.be.above(e)
            }, i.isBelow = function(t, e, r) {
                new n(t, r).to.be.below(e)
            }, i.isTrue = function(t, e) {
                new n(t, e).is["true"]
            }, i.isFalse = function(t, e) {
                new n(t, e).is["false"]
            }, i.isNull = function(t, e) {
                new n(t, e).to.equal(null)
            }, i.isNotNull = function(t, e) {
                new n(t, e).to.not.equal(null)
            }, i.isNaN = function(t, e) {
                new n(t, e).to.be.NaN
            }, i.isNotNaN = function(t, e) {
                new n(t, e).not.to.be.NaN
            }, i.isUndefined = function(t, e) {
                new n(t, e).to.equal(void 0)
            }, i.isDefined = function(t, e) {
                new n(t, e).to.not.equal(void 0)
            }, i.isFunction = function(t, e) {
                new n(t, e).to.be.a("function")
            }, i.isNotFunction = function(t, e) {
                new n(t, e).to.not.be.a("function")
            }, i.isObject = function(t, e) {
                new n(t, e).to.be.a("object")
            }, i.isNotObject = function(t, e) {
                new n(t, e).to.not.be.a("object")
            }, i.isArray = function(t, e) {
                new n(t, e).to.be.an("array")
            }, i.isNotArray = function(t, e) {
                new n(t, e).to.not.be.an("array")
            }, i.isString = function(t, e) {
                new n(t, e).to.be.a("string")
            }, i.isNotString = function(t, e) {
                new n(t, e).to.not.be.a("string")
            }, i.isNumber = function(t, e) {
                new n(t, e).to.be.a("number")
            }, i.isNotNumber = function(t, e) {
                new n(t, e).to.not.be.a("number")
            }, i.isBoolean = function(t, e) {
                new n(t, e).to.be.a("boolean")
            }, i.isNotBoolean = function(t, e) {
                new n(t, e).to.not.be.a("boolean")
            }, i.typeOf = function(t, e, r) {
                new n(t, r).to.be.a(e)
            }, i.notTypeOf = function(t, e, r) {
                new n(t, r).to.not.be.a(e)
            }, i.instanceOf = function(t, e, r) {
                new n(t, r).to.be.instanceOf(e)
            }, i.notInstanceOf = function(t, e, r) {
                new n(t, r).to.not.be.instanceOf(e)
            }, i.include = function(t, e, r) {
                new n(t, r, i.include).include(e)
            }, i.notInclude = function(t, e, r) {
                new n(t, r, i.notInclude).not.include(e)
            }, i.match = function(t, e, r) {
                new n(t, r).to.match(e)
            }, i.notMatch = function(t, e, r) {
                new n(t, r).to.not.match(e)
            }, i.property = function(t, e, r) {
                new n(t, r).to.have.property(e)
            }, i.notProperty = function(t, e, r) {
                new n(t, r).to.not.have.property(e)
            }, i.deepProperty = function(t, e, r) {
                new n(t, r).to.have.deep.property(e)
            }, i.notDeepProperty = function(t, e, r) {
                new n(t, r).to.not.have.deep.property(e)
            }, i.propertyVal = function(t, e, r, i) {
                new n(t, i).to.have.property(e, r)
            }, i.propertyNotVal = function(t, e, r, i) {
                new n(t, i).to.not.have.property(e, r)
            }, i.deepPropertyVal = function(t, e, r, i) {
                new n(t, i).to.have.deep.property(e, r);
            }, i.deepPropertyNotVal = function(t, e, r, i) {
                new n(t, i).to.not.have.deep.property(e, r)
            }, i.lengthOf = function(t, e, r) {
                new n(t, r).to.have.length(e)
            }, i["throws"] = function(t, e, i, o) {
                ("string" == typeof e || e instanceof RegExp) && (i = e, e = null);
                var a = new n(t, o).to["throw"](e, i);
                return r(a, "object")
            }, i.doesNotThrow = function(t, e, r) {
                "string" == typeof e && (r = e, e = null), new n(t, r).to.not.Throw(e)
            }, i.operator = function(t, i, o, a) {
                var s;
                switch (i) {
                    case "==":
                        s = t == o;
                        break;
                    case "===":
                        s = t === o;
                        break;
                    case ">":
                        s = t > o;
                        break;
                    case ">=":
                        s = t >= o;
                        break;
                    case "<":
                        s = o > t;
                        break;
                    case "<=":
                        s = o >= t;
                        break;
                    case "!=":
                        s = t != o;
                        break;
                    case "!==":
                        s = t !== o;
                        break;
                    default:
                        throw new Error('Invalid operator "' + i + '"')
                }
                var c = new n(s, a);
                c.assert(!0 === r(c, "object"), "expected " + e.inspect(t) + " to be " + i + " " + e.inspect(o), "expected " + e.inspect(t) + " to not be " + i + " " + e.inspect(o))
            }, i.closeTo = function(t, e, r, i) {
                new n(t, i).to.be.closeTo(e, r)
            }, i.sameMembers = function(t, e, r) {
                new n(t, r).to.have.same.members(e)
            }, i.sameDeepMembers = function(t, e, r) {
                new n(t, r).to.have.same.deep.members(e)
            }, i.includeMembers = function(t, e, r) {
                new n(t, r).to.include.members(e)
            }, i.changes = function(t, e, r) {
                new n(t).to.change(e, r)
            }, i.doesNotChange = function(t, e, r) {
                new n(t).to.not.change(e, r)
            }, i.increases = function(t, e, r) {
                new n(t).to.increase(e, r)
            }, i.doesNotIncrease = function(t, e, r) {
                new n(t).to.not.increase(e, r)
            }, i.decreases = function(t, e, r) {
                new n(t).to.decrease(e, r)
            }, i.doesNotDecrease = function(t, e, r) {
                new n(t).to.not.decrease(e, r)
            }, i.ifError = function(t) {
                if (t) throw t
            }, i.isExtensible = function(t, e) {
                new n(t, e).to.be.extensible
            }, i.isNotExtensible = function(t, e) {
                new n(t, e).to.not.be.extensible
            }, i.isSealed = function(t, e) {
                new n(t, e).to.be.sealed
            }, i.isNotSealed = function(t, e) {
                new n(t, e).to.not.be.sealed
            }, i.isFrozen = function(t, e) {
                new n(t, e).to.be.frozen
            }, i.isNotFrozen = function(t, e) {
                new n(t, e).to.not.be.frozen
            }, function o(t, e) {
                return i[e] = i[t], o
            }("isOk", "ok")("isNotOk", "notOk")("throws", "throw")("throws", "Throw")("isExtensible", "extensible")("isNotExtensible", "notExtensible")("isSealed", "sealed")("isNotSealed", "notSealed")("isFrozen", "frozen")("isNotFrozen", "notFrozen")
        }
    }, {}],
    83: [function(t, e, n) {
        arguments[4][14][0].apply(n, arguments)
    }, {
        dup: 14
    }],
    84: [function(t, e, n) {
        arguments[4][15][0].apply(n, arguments)
    }, {
        dup: 15
    }],
    85: [function(t, e, n) {
        arguments[4][16][0].apply(n, arguments)
    }, {
        "../config": 80,
        "./flag": 88,
        "./transferFlags": 104,
        dup: 16
    }],
    86: [function(t, e, n) {
        arguments[4][17][0].apply(n, arguments)
    }, {
        "../config": 80,
        "./flag": 88,
        dup: 17
    }],
    87: [function(t, e, n) {
        e.exports = function(t, e, n) {
            Object.defineProperty(t, e, {
                get: function() {
                    var t = n.call(this);
                    return void 0 === t ? this : t
                },
                configurable: !0
            })
        }
    }, {}],
    88: [function(t, e, n) {
        arguments[4][20][0].apply(n, arguments)
    }, {
        dup: 20
    }],
    89: [function(t, e, n) {
        arguments[4][21][0].apply(n, arguments)
    }, {
        dup: 21
    }],
    90: [function(t, e, n) {
        arguments[4][22][0].apply(n, arguments)
    }, {
        dup: 22
    }],
    91: [function(t, e, n) {
        arguments[4][23][0].apply(n, arguments)
    }, {
        "./flag": 88,
        "./getActual": 89,
        "./inspect": 98,
        "./objDisplay": 99,
        dup: 23
    }],
    92: [function(t, e, n) {
        arguments[4][24][0].apply(n, arguments)
    }, {
        dup: 24
    }],
    93: [function(t, e, n) {
        arguments[4][25][0].apply(n, arguments)
    }, {
        "./hasProperty": 96,
        dup: 25
    }],
    94: [function(t, e, n) {
        arguments[4][26][0].apply(n, arguments)
    }, {
        "./getPathInfo": 93,
        dup: 26
    }],
    95: [function(t, e, n) {
        arguments[4][27][0].apply(n, arguments)
    }, {
        dup: 27
    }],
    96: [function(t, e, n) {
        arguments[4][28][0].apply(n, arguments)
    }, {
        dup: 28,
        "type-detect": 110
    }],
    97: [function(t, e, n) {
        var n = e.exports = {};
        n.test = t("./test"), n.type = t("type-detect"), n.getMessage = t("./getMessage"), n.getActual = t("./getActual"), n.inspect = t("./inspect"), n.objDisplay = t("./objDisplay"), n.flag = t("./flag"), n.transferFlags = t("./transferFlags"), n.eql = t("deep-eql"), n.getPathValue = t("./getPathValue"), n.getPathInfo = t("./getPathInfo"), n.hasProperty = t("./hasProperty"), n.getName = t("./getName"), n.addProperty = t("./addProperty"), n.addMethod = t("./addMethod"), n.overwriteProperty = t("./overwriteProperty"), n.overwriteMethod = t("./overwriteMethod"), n.addChainableMethod = t("./addChainableMethod"), n.overwriteChainableMethod = t("./overwriteChainableMethod")
    }, {
        "./addChainableMethod": 85,
        "./addMethod": 86,
        "./addProperty": 87,
        "./flag": 88,
        "./getActual": 89,
        "./getMessage": 91,
        "./getName": 92,
        "./getPathInfo": 93,
        "./getPathValue": 94,
        "./hasProperty": 96,
        "./inspect": 98,
        "./objDisplay": 99,
        "./overwriteChainableMethod": 100,
        "./overwriteMethod": 101,
        "./overwriteProperty": 102,
        "./test": 103,
        "./transferFlags": 104,
        "deep-eql": 106,
        "type-detect": 110
    }],
    98: [function(t, e, n) {
        arguments[4][30][0].apply(n, arguments)
    }, {
        "./getEnumerableProperties": 90,
        "./getName": 92,
        "./getProperties": 95,
        dup: 30
    }],
    99: [function(t, e, n) {
        arguments[4][31][0].apply(n, arguments)
    }, {
        "../config": 80,
        "./inspect": 98,
        dup: 31
    }],
    100: [function(t, e, n) {
        arguments[4][32][0].apply(n, arguments)
    }, {
        dup: 32
    }],
    101: [function(t, e, n) {
        arguments[4][33][0].apply(n, arguments)
    }, {
        dup: 33
    }],
    102: [function(t, e, n) {
        arguments[4][34][0].apply(n, arguments)
    }, {
        dup: 34
    }],
    103: [function(t, e, n) {
        arguments[4][35][0].apply(n, arguments)
    }, {
        "./flag": 88,
        dup: 35
    }],
    104: [function(t, e, n) {
        arguments[4][36][0].apply(n, arguments)
    }, {
        dup: 36
    }],
    105: [function(t, e, n) {
        arguments[4][37][0].apply(n, arguments)
    }, {
        dup: 37
    }],
    106: [function(t, e, n) {
        arguments[4][38][0].apply(n, arguments)
    }, {
        "./lib/eql": 107,
        dup: 38
    }],
    107: [function(t, e, n) {
        arguments[4][39][0].apply(n, arguments)
    }, {
        buffer: 1,
        dup: 39,
        "type-detect": 108
    }],
    108: [function(t, e, n) {
        arguments[4][40][0].apply(n, arguments)
    }, {
        "./lib/type": 109,
        dup: 40
    }],
    109: [function(t, e, n) {
        arguments[4][41][0].apply(n, arguments)
    }, {
        dup: 41
    }],
    110: [function(t, e, n) {
        arguments[4][40][0].apply(n, arguments)
    }, {
        "./lib/type": 111,
        dup: 40
    }],
    111: [function(t, e, n) {
        arguments[4][43][0].apply(n, arguments)
    }, {
        dup: 43
    }],
    112: [function(t, e, n) {
        "use strict";

        function r(t) {
            if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }
        var i = Object.prototype.hasOwnProperty,
            o = Object.prototype.propertyIsEnumerable;
        e.exports = Object.assign ||
            function(t, e) {
                for (var n, a, s = r(t), c = 1; c < arguments.length; c++) {
                    n = Object(arguments[c]);
                    for (var u in n) i.call(n, u) && (s[u] = n[u]);
                    if (Object.getOwnPropertySymbols) {
                        a = Object.getOwnPropertySymbols(n);
                        for (var l = 0; l < a.length; l++) o.call(n, a[l]) && (s[a[l]] = n[a[l]])
                    }
                }
                return s
            }
    }, {}],
    113: [function(t, e, n) {
        "use strict";

        function r(t) {
            function e() {
                throw new Error("#" + t + " was called, but was expected to be stubbed.")
            }
            return e.isStub = !0, e
        }
        function i(t, e) {
            o.isObject(t);
            var n = a({}, t);
            return e.forEach(function(e) {
                var i = "function" == typeof t[e];
                n[e] = i ? r(e) : void 0
            }), n
        }
        var o = t("chai").assert,
            a = t("object-assign"),
            s = {
                stubObject: function(t) {
                    return o.isObject(t), i(t, Object.keys(t))
                },
                partiallyStubObject: function(t, e) {
                    o.isObject(t), o.instanceOf(e, Array);
                    var n = Object.keys(t);
                    e.forEach(function(t) {
                        if (-1 === n.indexOf(t)) throw new Error(t + " is not a property.")
                    });
                    var r = n.filter(function(t) {
                        return -1 === e.indexOf(t)
                    });
                    return i(t, r)
                }
            };
        e.exports = s
    }, {
        chai: 77,
        "object-assign": 112
    }],
    114: [function(t, e, n) {
        "use strict";
        !
            function(t, e, n) {
                function r(t, e) {
                    return typeof t === e
                }
                function i() {
                    var t, e, n, i, o, a, s;
                    for (var c in b) {
                        if (t = [], e = b[c], e.name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (n = 0; n < e.options.aliases.length; n++) t.push(e.options.aliases[n].toLowerCase());
                        for (i = r(e.fn, "function") ? e.fn() : e.fn, o = 0; o < t.length; o++) a = t[o], s = a.split("."), 1 === s.length ? x[s[0]] = i : (!x[s[0]] || x[s[0]] instanceof Boolean || (x[s[0]] = new Boolean(x[s[0]])), x[s[0]][s[1]] = i), y.push((i ? "" : "no-") + s.join("-"))
                    }
                }
                function o(t) {
                    var e = k.className,
                        n = x._config.classPrefix || "";
                    if (T && (e = e.baseVal), x._config.enableJSClass) {
                        var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                        e = e.replace(r, "$1" + n + "js$2")
                    }
                    x._config.enableClasses && (e += " " + n + t.join(" " + n), T ? k.className.baseVal = e : k.className = e)
                }
                function a(t) {
                    return t.replace(/([a-z])-([a-z])/g, function(t, e, n) {
                        return e + n.toUpperCase()
                    }).replace(/^-/, "")
                }
                function s() {
                    return "function" != typeof e.createElement ? e.createElement(arguments[0]) : T ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
                }
                function c(t, e) {
                    return !!~ ("" + t).indexOf(e)
                }
                function u(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
                function l(t, e, n) {
                    var i;
                    for (var o in t) if (t[o] in e) return n === !1 ? t[o] : (i = e[t[o]], r(i, "function") ? u(i, n || e) : i);
                    return !1
                }
                function h(t) {
                    return t.replace(/([A-Z])/g, function(t, e) {
                        return "-" + e.toLowerCase()
                    }).replace(/^ms-/, "-ms-")
                }
                function f() {
                    var t = e.body;
                    return t || (t = s(T ? "svg" : "body"), t.fake = !0), t
                }
                function d(t, n, r, i) {
                    var o, a, c, u, l = "modernizr",
                        h = s("div"),
                        d = f();
                    if (parseInt(r, 10)) for (; r--;) c = s("div"), c.id = i ? i[r] : l + (r + 1), h.appendChild(c);
                    return o = s("style"), o.type = "text/css", o.id = "s" + l, (d.fake ? d : h).appendChild(o), d.appendChild(h), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(e.createTextNode(t)), h.id = l, d.fake && (d.style.background = "", d.style.overflow = "hidden", u = k.style.overflow, k.style.overflow = "hidden", k.appendChild(d)), a = n(h, t), d.fake ? (d.parentNode.removeChild(d), k.style.overflow = u, k.offsetHeight) : h.parentNode.removeChild(h), !! a
                }
                function p(e, r) {
                    var i = e.length;
                    if ("CSS" in t && "supports" in t.CSS) {
                        for (; i--;) if (t.CSS.supports(h(e[i]), r)) return !0;
                        return !1
                    }
                    if ("CSSSupportsRule" in t) {
                        for (var o = []; i--;) o.push("(" + h(e[i]) + ":" + r + ")");
                        return o = o.join(" or "), d("@supports (" + o + ") { #modernizr { position: absolute; } }", function(t) {
                            return "absolute" == getComputedStyle(t, null).position
                        })
                    }
                    return n
                }
                function g(t, e, i, o) {
                    function u() {
                        h && (delete j.style, delete j.modElem)
                    }
                    if (o = r(o, "undefined") ? !1 : o, !r(i, "undefined")) {
                        var l = p(t, i);
                        if (!r(l, "undefined")) return l
                    }
                    for (var h, f, d, g, m, v = ["modernizr", "tspan"]; !j.style;) h = !0, j.modElem = s(v.shift()), j.style = j.modElem.style;
                    for (d = t.length, f = 0; d > f; f++) if (g = t[f], m = j.style[g], c(g, "-") && (g = a(g)), j.style[g] !== n) {
                        if (o || r(i, "undefined")) return u(), "pfx" == e ? g : !0;
                        try {
                            j.style[g] = i
                        } catch (y) {}
                        if (j.style[g] != m) return u(), "pfx" == e ? g : !0
                    }
                    return u(), !1
                }
                function m(t, e, n, i, o) {
                    var a = t.charAt(0).toUpperCase() + t.slice(1),
                        s = (t + " " + O.join(a + " ") + a).split(" ");
                    return r(e, "string") || r(e, "undefined") ? g(s, e, i, o) : (s = (t + " " + S.join(a + " ") + a).split(" "), l(s, e, n))
                }
                function v(t, e, r) {
                    return m(t, n, n, e, r)
                }
                var y = [],
                    b = [],
                    w = {
                        _version: "3.0.0",
                        _config: {
                            classPrefix: "",
                            enableClasses: !0,
                            enableJSClass: !0,
                            usePrefixes: !0
                        },
                        _q: [],
                        on: function(t, e) {
                            var n = this;
                            setTimeout(function() {
                                e(n[t])
                            }, 0)
                        },
                        addTest: function(t, e, n) {
                            b.push({
                                name: t,
                                fn: e,
                                options: n
                            })
                        },
                        addAsyncTest: function(t) {
                            b.push({
                                name: null,
                                fn: t
                            })
                        }
                    },
                    x = function() {};
                x.prototype = w, x = new x;
                var E = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
                w._prefixes = E;
                var _ = "Moz O ms Webkit",
                    S = w._config.usePrefixes ? _.toLowerCase().split(" ") : [];
                w._domPrefixes = S;
                var k = e.documentElement,
                    T = "svg" === k.nodeName.toLowerCase(),
                    O = w._config.usePrefixes ? _.split(" ") : [];
                w._cssomPrefixes = O;
                var C = function(e) {
                    var r, i = E.length,
                        o = t.CSSRule;
                    if ("undefined" == typeof o) return n;
                    if (!e) return !1;
                    if (e = e.replace(/^@/, ""), r = e.replace(/-/g, "_").toUpperCase() + "_RULE", r in o) return "@" + e;
                    for (var a = 0; i > a; a++) {
                        var s = E[a],
                            c = s.toUpperCase() + "_" + r;
                        if (c in o) return "@-" + s.toLowerCase() + "-" + e
                    }
                    return !1
                };
                w.atRule = C;
                var A = {
                    elem: s("modernizr")
                };
                x._q.push(function() {
                    delete A.elem
                });
                var j = {
                    style: A.elem.style
                };
                x._q.unshift(function() {
                    delete j.style
                }), w.testAllProps = m, w.prefixed = function(t, e, n) {
                    return 0 === t.indexOf("@") ? C(t) : (-1 != t.indexOf("-") && (t = a(t)), e ? m(t, e, n) : m(t, "pfx"))
                }, w.testAllProps = v, x.addTest("csstransitions", v("transition", "all", !0)), i(), o(y), delete w.addTest, delete w.addAsyncTest;
                for (var N = 0; N < x._q.length; N++) x._q[N]();
                t.Modernizr = x
            }(window, document)
    }, {}],
    115: [function(t, e, n) {
        "use strict";

        function r(t) {
            "undefined" != typeof FormData && o.isFalse(t instanceof FormData, "wf_ajax does not support FormData"), o.isObject(t);
            var e = c.get("xsrf");
            return e ? Object.assign({
                xsrf: e
            }, t) : t
        }
        function i(t) {
            return t = t || {}, o.isObject(t), t.params = t.params || {}, Object.assign({}, t, {
                params: r(t.params)
            })
        }
        var o = t("chai").assert,
            a = t("privatestate"),
            s = t("wf-request"),
            c = t("wf_modules/cookie"),
            u = {
                get: function(t, e) {
                    return s.get(t, i(e))
                },
                post: function(t, e) {
                    return s.post(t, i(e))
                },
                patch: function(t, e) {
                    return s.patch(t, i(e))
                },
                "delete": function(t, e) {
                    return s["delete"](t, i(e))
                },
                parseJsonResponse: s.parseJsonResponse,
                parseJsonError: s.parseJsonError
            };
        a.exposeForTesting(u, ["addXsrf", "optsWithXsrf"]), e.exports = u
    }, {
        chai: 8,
        privatestate: 74,
        "wf-request": 76,
        "wf_modules/cookie": 119
    }],
    116: [function(t, e, n) {
        "use strict";
        var r = t("execution-environment");
        window.w = window.w || {}, window.$R = t("./reactive"), window.w.Heartbeat = t("./heartbeat"), window.w.varsForJs = t("./vars_for_js"), window.w.socialSharingModule = t("./social_share"), window.w.passwordValidation = t("wf_modules/password_validation"), window.w.locationHelper = t("wf_modules/location"), window.w.router = t("wf_router"), Object.assign(window.w, t("wf_modules/wf_utilities")), Object.assign(window.w, t("./cookie_deprecated")), Object.assign(window.w, t("./wd30")), Object.assign(window.w, t("wf_modules/format_general")), Object.assign(window.w, t("wf_modules/general")), Object.assign(window.w, t("./tracking")), Object.assign(window.w, t("./tracking/ab_test_utilities")), Object.assign(window.w, t("./tracking/utilities")), Object.assign(window.w, t("./calculations")), Object.assign(window.w, t("./compatibility")), r.isTest() && (window.w.wfAjax = t("wf_ajax"))
    }, {
        "./calculations": 117,
        "./compatibility": 118,
        "./cookie_deprecated": 120,
        "./heartbeat": 121,
        "./reactive": 124,
        "./social_share": 126,
        "./tracking": 127,
        "./tracking/ab_test_utilities": 128,
        "./tracking/utilities": 129,
        "./vars_for_js": 130,
        "./wd30": 132,
        "execution-environment": 62,
        wf_ajax: 115,
        "wf_modules/format_general": 134,
        "wf_modules/general": 135,
        "wf_modules/location": 122,
        "wf_modules/password_validation": 136,
        "wf_modules/wf_utilities": 137,
        wf_router: 138
    }],
    117: [function(t, e, n) {
        "use strict";
        var r = t("chai").assert,
            i = {
                compoundEstimate: function(t, e, n, i, o) {
                    r.isNumber(t), r.isNumber(e), r.isNumber(n), r.isNumber(i), r.isNumber(o);
                    var a = e * Math.exp(i * t);
                    if (0 === o) return a + n * Math.exp(i * t);
                    var s = o * t,
                        c = i / o,
                        u = n * (1 - Math.exp(c * (s + 1))) / (1 - Math.exp(c));
                    return a + u
                }
            };
        e.exports = i
    }, {
        chai: 8
    }],
    118: [function(t, e, n) {
        "use strict";
        t("vendor/assets/javascripts/modernizr.custom");
        var r = {
            SCREEN_ORIENTATIONS: {
                landscape: [90, -90],
                portrait: [0, 180]
            },
            getUserAgent: function() {
                return navigator.userAgent
            },
            detectFlash: function() {
                try {
                    return !!("undefined" == typeof navigator.plugins || 0 === navigator.plugins.length ? !! new ActiveXObject("ShockwaveFlash.ShockwaveFlash") : navigator.plugins["Shockwave Flash"])
                } catch (t) {
                    return !1
                }
            },
            hasSVG: function() {
                return !(!window.SVGAngle && !document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"))
            },
            hasForeignObject: function() {
                var t = {}.toString;
                return !!document.createElementNS && /SVGForeignObject/.test(t.call(document.createElementNS("http://www.w3.org/2000/svg", "foreignObject")))
            },
            hasCSSTransitions: function() {
                return Modernizr.csstransitions
            },
            transitionEndEvent: function() {
                var t = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    },
                    e = Modernizr.prefixed("transition");
                return t[e]
            },
            isLandscape: function(t) {
                return -1 !== this.SCREEN_ORIENTATIONS.landscape.indexOf(t)
            },
            isMobileUserAgent: function() {
                return !!(this.isIPhone() || this.isIPad() || this.isAndroid() || this.getUserAgent().match(/(CriOS|SymbianOS)/))
            },
            isIPhone: function() {
                return !!this.getUserAgent().match(/(iPod|iPhone)/)
            },
            isIPad: function() {
                return -1 !== this.getUserAgent().indexOf("iPad")
            },
            isAndroid: function() {
                return -1 !== this.getUserAgent().indexOf("Android")
            },
            isPortrait: function(t) {
                return -1 !== this.SCREEN_ORIENTATIONS.portrait.indexOf(t)
            },
            isFirefox: function() {
                return "undefined" != typeof InstallTrigger
            },
            isChrome: function() {
                return -1 !== this.getUserAgent().indexOf("Chrome")
            }
        };
        e.exports = r
    }, {
        "vendor/assets/javascripts/modernizr.custom": 114
    }],
    119: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            document.cookie = t + "=" + e
        }
        var i = t("privatestate"),
            o = {
                expireDays: null
            },
            a = {
                get: function(t) {
                    var e = document.cookie.match(new RegExp("(?:^|;) *" + t + "=([^;]*)"));
                    return e ? unescape(e[1]) : ""
                },
                set: function(t, e, n) {
                    n = Object.assign({}, o, n);
                    var i = new Date,
                        a = i.valueOf(),
                        s = String(e).replace(/[ %",;\\]/g, escape),
                        c = n.expireDays ? ";expires=" + new Date(a + 24 * n.expireDays * 60 * 60 * 1e3).toUTCString() : "",
                        u = ";path=/",
                        l = s + c + u;
                    r(t, l)
                },
                remove: function(t) {
                    r(t, "; expires=Thu, 01 Jan 1970 00:00:00 GMT")
                },
                exists: function(t) {
                    return "" !== this.get(t)
                },
                supportsCookies: function() {
                    this.set("supports_cookies", 1);
                    var t = this.exists("supports_cookies");
                    return this.remove("supports_cookies"), t
                }
            };
        i.exposeForTesting(a, ["setCookie"]), e.exports = a
    }, {
        privatestate: 74
    }],
    120: [function(t, e, n) {
        "use strict";
        var r = t("wf_modules/cookie"),
            i = t("wf_modules/wf_utilities"),
            o = {
                expireDays: null
            },
            a = {
                supportsCookies: function() {
                    r.set("supports_cookies", 1);
                    var t = r.exists("supports_cookies");
                    return r.remove("supports_cookies"), t
                },
                cookie: function(t, e, n) {
                    return n = Object.assign({}, o, n), i.isDefAndNotNull(e) ? void r.set(t, e, n) : r.get(t)
                },
                removeCookie: function(t) {
                    r.remove(t)
                },
                cookieExists: function(t) {
                    return r.exists(t)
                }
            };
        e.exports = a
    }, {
        "wf_modules/cookie": 119,
        "wf_modules/wf_utilities": 137
    }],
    121: [function(t, e, n) {
        "use strict";

        function r(t, e, n) {
            [t, e, n].forEach(i.isString), this._heartbeatPath = t, this._logoutPath = e, this._idleLogoutPath = n
        }
        var i = t("chai").assert,
            o = t("wf_ajax"),
            a = t("privatestate"),
            s = t("./cookie"),
            c = t("wf_modules/redirect"),
            u = t("lodash.throttle"),
            l = 3e4;
        r.prototype = {
            start: function() {
                this._registerListeners(), this._initializeVariables(), this._ping(), this._checkSignoutFromOtherTab()
            },
            _registerListeners: function() {
                var t = u(this._resetTimer.bind(this), 500);
                ["mousedown", "keydown", "scroll"].forEach(function(e) {
                    document.addEventListener(e, t)
                }, this)
            },
            _resetTimer: function() {
                this._lastActivity = new Date
            },
            _initializeVariables: function() {
                this._now = new Date, this._lastActivity = this._now, this._lastCheck = this._now
            },
            _checkSignoutFromOtherTab: function() {
                var t = setInterval(function() {
                    s.exists("xsrf") || (c.to(this._logoutPath), clearInterval(t))
                }.bind(this), 8e3)
            },
            _ping: function() {
                return o.post(this._heartbeatPath, {
                    renew: this._lastActivity > this._lastCheck
                }).then(o.parseJsonResponse).then(this._pingSuccess.bind(this), this._pingFailure.bind(this))
            },
            _pingSuccess: function(t) {
                if (i.isDefined(t.is_expired), t.is_expired) return void c.to(this._idleLogoutPath);
                i.isDefined(t.time_left_in_ms), this._lastCheck = new Date;
                var e = t.time_left_in_ms,
                    n = void 0;
                n = l >= e ? e : e - l, setTimeout(this._ping.bind(this), n)
            },
            _pingFailure: function() {
                c.to(this._logoutPath)
            }
        }, e.exports = r, a.exposeForTesting(r, ["EXPIRATION_BUFFER"])
    }, {
        "./cookie": 119,
        chai: 8,
        "lodash.throttle": 71,
        privatestate: 74,
        wf_ajax: 115,
        "wf_modules/redirect": 125
    }],
    122: [function(t, e, n) {
        "use strict";
        var r = {
            getProtocol: function() {
                return window.location.protocol
            },
            getHost: function() {
                return window.location.host
            },
            getOrigin: function() {
                var t = this.getProtocol(),
                    e = this.getHost();
                return t + "//" + e
            }
        };
        e.exports = r
    }, {}],
    123: [function(t, e, n) {
        "use strict";

        function r() {
            var t = window.performance;
            return void 0 === t || void 0 === t.timing ? void 0 : t.timing
        }
        var i = t("privatestate"),
            o = {
                getPerformanceTiming: function() {
                    var t = r();
                    if (t) {
                        var e = {};
                        for (var n in t)"number" == typeof t[n] && (e[n] = t[n]);
                        return e
                    }
                }
            };
        e.exports = o, i.exposeForTesting(o, ["nativeTiming"])
    }, {
        privatestate: 74
    }],
    124: [function(t, e, n) {
        "use strict";

        function r() {}
        function i(t) {
            function e(t) {
                return n[t.id] ? [] : (n[t.id] = !0, t.dependents.reduce(function(t, n) {
                    return t.concat(e(n))
                }, []).concat(t))
            }
            var n = {};
            return e(t).reverse()
        }
        function o(t) {
            return t && (t._isReactive || t === a._) ? t : a(function() {
                return t
            })
        }
        function a(t, e) {
            function n() {
                var t = i(n),
                    e = t[0],
                    r = e.memo,
                    o = e.run.apply(n, arguments);
                return s(r, o) || (t.slice(1).forEach(function(t) {
                    t.run()
                }), n.sideEffects.forEach(function(t) {
                    t(o)
                })), o
            }
            return n.id = c++, n.context = e || r, n.fnc = t, n.dependents = [], n.dependencies = [], n.sideEffects = [], n.memo = a.empty, a.extend(n, u, a.pluginExtensions)
        }
        var s = t("lodash.isequal"),
            c = 0,
            u = {
                _isReactive: !0,
                toString: function() {
                    return this.fnc.toString()
                },
                get: function() {
                    return this.memo === a.empty ? this.run() : this.memo
                },
                run: function() {
                    var t = Array.prototype.slice.call(arguments);
                    return this.memo = this.fnc.apply(this.context, this.argumentList(t)), this.memo
                },
                bindTo: function() {
                    var t = Array.prototype.slice.call(arguments).map(o),
                        e = this.dependencies;
                    return e.forEach(function(t) {
                        t !== a._ && t.removeDependent(this)
                    }, this), t.forEach(function(t) {
                        t !== a._ && t.addDependent(this)
                    }, this), this.dependencies = t, this
                },
                removeDependent: function(t) {
                    this.dependents = this.dependents.filter(function(e) {
                        return e !== t
                    })
                },
                addDependent: function(t) {
                    this.dependents.some(function(e) {
                        return e === t
                    }) || this.dependents.push(t)
                },
                argumentList: function(t) {
                    return this.dependencies.map(function(e) {
                        return e === a._ ? t.shift() : e._isReactive ? e.get() : void 0
                    }).concat(t)
                },
                sideEffect: function(t) {
                    return this.sideEffects.push(t), this
                }
            };
        a._ = {}, a.empty = {}, a.state = function(t) {
            var e = a(function() {
                return arguments.length && (this.val = arguments[0]), this.val
            });
            return e.context = e, e.val = t, e
        }, a.extend = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return e.forEach(function(e) {
                if (e) for (var n in e) t[n] = e[n]
            }), t
        }, a.pluginExtensions = {}, e.exports = a
    }, {
        "lodash.isequal": 63
    }],
    125: [function(t, e, n) {
        "use strict";
        var r = {
            to: function(t) {
                window.location.href = t
            }
        };
        e.exports = r
    }, {}],
    126: [function(t, e, n) {
        "use strict";
        var r = t("querystring"),
            i = {
                menubar: "no",
                toolbar: "no",
                resizable: "yes",
                scrollbars: "yes"
            },
            o = {
                facebook: function(t, e, n, o, a) {
                    var s = Object.assign({}, i, {
                            width: 1049,
                            height: 425
                        }),
                        c = {
                            app_id: "262851530405754",
                            link: e,
                            name: n,
                            description: t,
                            redirect_uri: a
                        };
                    o && (c.picture = o);
                    var u = "https://www.facebook.com/dialog/feed?" + r.stringify(c);
                    window.open(u, "facebookShare", r.stringify(s, ","))
                },
                googlePlus: function(t) {
                    var e = Object.assign({}, i, {
                            width: 600,
                            height: 600
                        }),
                        n = {
                            url: t
                        },
                        o = "https://plus.google.com/share?" + r.stringify(n);
                    window.open(o, "googlePlusShare", r.stringify(e, ","))
                },
                linkedIn: function(t, e, n, o, a) {
                    var s = Object.assign({}, i, {
                            width: 570,
                            height: 430
                        }),
                        c = {
                            url: e,
                            title: n,
                            summary: t,
                            source: a,
                            mini: "true"
                        },
                        u = "http://www.linkedin.com/shareArticle?" + r.stringify(c);
                    window.open(u, "linkedInShare", r.stringify(s, ","))
                },
                twitter: function(t, e) {
                    var n = Object.assign({}, i, {
                            width: 550,
                            height: 257
                        }),
                        o = {
                            url: e,
                            text: t
                        },
                        a = "https://twitter.com/intent/tweet?" + r.stringify(o);
                    window.open(a, "twitterShare", r.stringify(n, ","))
                }
            };
        e.exports = o
    }, {
        querystring: 7
    }],
    127: [function(t, e, n) {
        "use strict";

        function r(t) {
            i.isArray(t), window._gaq = window._gaq || [], window._gaq.push(t)
        }
        var i = t("chai").assert,
            o = t("wf_ajax"),
            a = t("wf_router"),
            s = t("privatestate"),
            c = t("wf_modules/vars_for_js"),
            u = {
                trackESP: function(t, e, n) {
                    var r = c.get("requestId");
                    [t, e, n, r].forEach(i.isString);
                    var s = {
                        cat: t,
                        name: e,
                        pvid: r,
                        payload: n
                    };
                    o.post(a.buildPath("eventTracking"), {
                        params: s
                    })
                },
                trackUserEvent: function(t, e, n) {
                    [t, e, n].forEach(i.isString), r(["_trackEvent", t, e, n]), this.trackESP(t, e, n)
                },
                trackExponentialAction: function(t) {
                    o.post(a.buildPath("incrementFeatureAction"), {
                        params: {
                            category: t
                        }
                    })
                }
            };
        e.exports = u, s.exposeForTesting(u, ["sendToGoogleAnalytics"])
    }, {
        chai: 8,
        privatestate: 74,
        wf_ajax: 115,
        "wf_modules/vars_for_js": 130,
        wf_router: 138
    }],
    128: [function(t, e, n) {
        "use strict";
        var r = t("chai").assert,
            i = t("wf_modules/vars_for_js"),
            o = t("wf_modules/tracking"),
            a = t("wf_modules/wf_utilities").isDefAndNotNull,
            s = {},
            c = [],
            u = {
                setUpExperiments: function(t, e) {
                    r.isFunction(e);
                    var n = i.get("ab_tests", {
                        silentFailure: !0
                    });
                    if (a(n)) {
                        var o = n[t];
                        for (var s in o) {
                            r.isString(s);
                            var c = o[s],
                                u = c.versioned_name,
                                l = c.variant_name;
                            [u, l].forEach(r.isString), e.call(this, s, u, l)
                        }
                    }
                },
                trackExperimentHelper: function(t, e, n) {
                    [e, n].forEach(r.isString), this.trackExperiment(e, n)
                },
                trackExperiment: function(t, e) {
                    [t, e].forEach(r.isString), o.trackESP("experiment", t, e)
                },
                addToExperimentTrackingQueue: function(t, e, n) {
                    [t, e, n].forEach(r.isString), s[t] = {
                        versionedName: e,
                        testVariantName: n
                    }, -1 !== c.indexOf(t) && this.trackQueuedExperiment(t)
                },
                trackQueuedExperiment: function(t) {
                    r.isString(t);
                    var e = s[t];
                    if (a(e)) {
                        var n = e.versionedName,
                            i = e.testVariantName;
                        [n, i].forEach(r.isString), this.trackExperiment(n, i)
                    } else c.push(t)
                }
            };
        e.exports = u
    }, {
        chai: 8,
        "wf_modules/tracking": 127,
        "wf_modules/vars_for_js": 130,
        "wf_modules/wf_utilities": 137
    }],
    129: [function(t, e, n) {
        "use strict";
        var r = t("wf_modules/tracking"),
            i = t("wf_modules/viewport"),
            o = t("wf_modules/performance_timing"),
            a = {
                trackViewportSize: function() {
                    var t = i.getWidth(),
                        e = i.getHeight();
                    r.trackUserEvent("viewport-dimensions", "width", String(t)), r.trackUserEvent("viewport-dimensions", "height", String(e))
                },
                trackPerformanceTiming: function() {
                    var t = o.getPerformanceTiming();
                    void 0 !== t && r.trackUserEvent("loading-time", window.location.href, JSON.stringify(t))
                }
            };
        e.exports = a
    }, {
        "wf_modules/performance_timing": 123,
        "wf_modules/tracking": 127,
        "wf_modules/viewport": 131
    }],
    130: [function(t, e, n) {
        "use strict";
        var r = t("chai").assert,
            i = t("wf_modules/general").setOptionsWithDefaultsOnObject,
            o = {
                silentFailure: !1
            },
            a = {
                get: function(t, e) {
                    i(this, o, e), r.isObject(window.w, "expected w to be on window");
                    var n = window.w._varsForJs;
                    r.isDefined(n, "expected varsForJs to be on the page");
                    var a = n[t];
                    return this.silentFailure || r.isDefined(a, 'expected "' + t + '" to be a var for JS'), a
                }
            };
        e.exports = a
    }, {
        chai: 8,
        "wf_modules/general": 135
    }],
    131: [function(t, e, n) {
        "use strict";

        function r() {
            return document.documentElement.clientWidth
        }
        function i() {
            return document.documentElement.clientHeight
        }
        function o() {
            return window.innerWidth
        }
        function a() {
            return window.innerHeight
        }
        var s = t("privatestate"),
            c = {
                getWidth: function() {
                    return Math.max(r(), o() || 0)
                },
                getHeight: function() {
                    return Math.max(i(), a() || 0)
                }
            };
        e.exports = c, s.exposeForTesting(c, ["getClientWidth", "getClientHeight", "getInnerWidth", "getInnerHeight"])
    }, {
        privatestate: 74
    }],
    132: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            t(e.dimensions), e.frameRequested = !1
        }
        function i(t, e, n) {
            n.dimensions = {
                width: t.offsetWidth,
                height: t.offsetHeight
            }, n.frameRequested || (window.requestAnimationFrame(r.bind(null, e, n)), n.frameRequested = !0)
        }
        var o = t("wf_modules/reactive"),
            a = t("chai"),
            s = a.assert,
            c = t("privatestate"),
            u = {
                variable: function(t) {
                    return o.state(t)
                },
                dependency: function(t, e) {
                    s.isFunction(e);
                    var n = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : [],
                        r = o(e, t);
                    return r.bindTo.apply(r, n), r
                },
                listenToResize: function(t, e) {
                    s.instanceOf(t, HTMLElement), s.isFunction(e);
                    var n = {
                        frameRequested: !1,
                        dimensions: {}
                    };
                    window.addEventListener("resize", i.bind(null, t, e, n))
                },
                tickValuesFromScale: function(t, e, n) {
                    s.isFunction(t), s.isNumber(e), s.isNumber(n);
                    var r = t.domain(),
                        i = r[0],
                        o = Math.ceil(r[1]);
                    s.isAbove(o, i);
                    var a = o - i,
                        c = Math.min(Math.floor(e / n), a);
                    if (1 > c) return [Math.floor(a / 2)];
                    for (var u = [], l = (o - i) / c, h = i + l; Math.floor(h) <= o; h += l) u.push(Math.floor(h));
                    return u
                },
                coordinatesInElement: function(t, e) {
                    s.isArray(t), s.strictEqual(t.length, 2), s.instanceOf(e, Element);
                    var n = e.getBBox(),
                        r = t[0],
                        i = t[1];
                    return r >= n.x && r <= n.x + n.width && i >= n.y && i <= n.y + n.height
                }
            };
        c.exposeForTesting(u, ["resizeUpdate", "resizeCallback"]), e.exports = u
    }, {
        chai: 8,
        privatestate: 74,
        "wf_modules/reactive": 124
    }],
    133: [function(t, e, n) {
        "use strict";

        function r() {
            this.errors = []
        }
        var i = t("chai").assert;
        r.prototype = {
            isValid: function() {
                return 0 === this.errors.length
            },
            merge: function(t) {
                i.instanceOf(t, r), this.errors = this.errors.concat(t.errors)
            },
            add: function(t) {
                return i.isObject(t), this.errors.push(t), this
            }
        }, e.exports = r
    }, {
        chai: 8
    }],
    134: [function(t, e, n) {
        "use strict";

        function r(t) {
            return 1 >= t ? 0 : Math.floor(Math.log10(t))
        }
        var i = t("wf_modules/general"),
            o = t("wf_modules/wf_utilities"),
            a = t("chai").assert,
            s = t("privatestate"),
            c = new RegExp("^([-!#$%&'*+/=?^`{|}~\\w]+(?:\\.[-!#$%&'*+/=?^`{|}~\\w]+)*)@((?:[a-zA-Z0-9](?:[-a-zA-Z0-9]*[a-zA-Z0-9])?\\.)+[a-zA-Z]{2,6})$"),
            u = new RegExp("^[a-z ,.'-]+$", "i"),
            l = /^(\+\d{1,3}\s?)?\(?\d{3}\)?-?\d{3}-?\d{4}$/,
            h = /\.00$/,
            f = /(\d)(?=(?:\d{3})+$)/g,
            d = /^\d{5}(-\d{4})?$/,
            p = {
                padWithPrefix: function(t, e, n) {
                    for (a.isNumber(e), n = n || "0", t = t.toString(); t.length < e;) t = n + t;
                    return t
                },
                amountWithAutoPrecision: function(t, e) {
                    if (e = e || 2, a.isNumber(t), a.isNumber(e), a.isAbove(e, -1), 0 > t) return "-" + p.amountWithAutoPrecision(-t, e);
                    if (0 === t) return "0";
                    t = p.sigFigs(t, e);
                    for (var n = [{
                        divider: 1e12,
                        suffix: "T"
                    }, {
                        divider: 1e9,
                        suffix: "B"
                    }, {
                        divider: 1e6,
                        suffix: "M"
                    }, {
                        divider: 1e3,
                        suffix: "K"
                    }], r = 0; r < n.length; r++) if (t >= n[r].divider) return (t / n[r].divider).toString() + n[r].suffix;
                    return t.toString()
                },
                amountWithPrecisionBasedOnInterval: function(t, e, n) {
                    if (n = n || 2, [t, e, n].forEach(a.isNumber), a.isAbove(n, -1), a.isAbove(e, 0), 0 === t) return "0";
                    var i = r(t),
                        o = r(e),
                        s = Math.max(n, i - o + 1);
                    return p.amountWithAutoPrecision(t, s)
                },
                sigFigs: function(t, e) {
                    if (a.isNumber(t), a.isNumber(e), a.isAbove(e, -1), 0 === t) return e > 1 ? "0." + i.makeArray(e - 1, "0").join("") : "0";
                    if (0 > t) return "-" + p.sigFigs(-t, e);
                    var n = Math.pow(10, -(String(t).length + 2));
                    t += n;
                    var r = Number(t.toPrecision(e)),
                        o = String(r),
                        s = -1 !== o.indexOf("."),
                        c = s ? o.length - 1 : o.length;
                    if (e > c) {
                        var u = e - c;
                        s || (o += "."), o += i.makeArray(u, "0").join("")
                    }
                    return o
                },
                floatWithPrecision: function(t, e) {
                    return parseFloat(parseFloat(t).toFixed(e))
                },
                formatNum: function(t, e) {
                    o.isDefAndNotNull(e) || (e = 2);
                    var n = parseFloat(t).toFixed(e || 2).split("."),
                        r = n[0].replace(f, "$1,");
                    return e > 0 ? r + "." + n[1] : r
                },
                dollarAmount: function(t, e) {
                    var n = "$" + p.formatNum(t, e);
                    return o.isDefAndNotNull(e) ? n : n.replace(h, "")
                },
                parseDollarAmount: function(t, e) {
                    if (e = o.isDefAndNotNull(e) ? e : 0, "number" == typeof t) return t;
                    if (a.isString(t), t.match(/^1e\+?\d+?$/) || "Infinity" === t) return 0;
                    var n = parseFloat(t.replace(/[ ,\$]/g, ""));
                    return Number.isNaN(n) ? e : n
                },
                isValidEmail: function(t) {
                    return a.isString(t), c.test(t)
                },
                isValidName: function(t) {
                    return a.isString(t), u.test(t)
                },
                isValidPhoneNumber: function(t) {
                    return a.isString(t), l.test(t)
                },
                isValidUSZipCode: function(t) {
                    return a.isString(t), d.test(t)
                },
                datePlusYears: function(t, e) {
                    var n = new Date(t);
                    return new Date(n.setFullYear(n.getFullYear() + e))
                },
                isValidDate: function(t, e, n) {
                    if (!(t && e && n)) return !1;
                    if (n.length && 4 !== n.length || 1e3 > n && n > 9999) return !1;
                    var r = Date.parse([t, e, n].join("/"));
                    if (isNaN(r)) return !1;
                    var i = new Date(r),
                        o = Number(e),
                        a = Number(t),
                        s = Number(n);
                    return a === i.getMonth() + 1 && o === i.getDate() && s === i.getFullYear()
                },
                formattedSentenceOfItems: function(t, e) {
                    if (e = void 0 === e ? !0 : e, 1 === t.length) return t[0];
                    for (var n = [], r = 0; r < t.length; r++) n.push(r);
                    if (n = n.join(", "), 2 === t.length) n = n.replace(", ", " and ");
                    else {
                        var i = e ? "," : "";
                        n = n.replace(/,\s([^,]+)$/, i + " and $1")
                    }
                    return t.forEach(function(t, e) {
                        n = n.replace(e.toString(), t)
                    }), n
                }
            };
        s.exposeForTesting(p, ["orderOfMagnitude"]), e.exports = p
    }, {
        chai: 8,
        privatestate: 74,
        "wf_modules/general": 135,
        "wf_modules/wf_utilities": 137
    }],
    135: [function(t, e, n) {
        "use strict";
        var r = t("chai").assert,
            i = t("wf_modules/wf_utilities").isDefAndNotNull,
            o = {
                makeArray: function(t, e) {
                    for (var n = new Array(t), r = t; r--;) n[r] = e;
                    return n
                },
                setOptionsWithDefaultsOnObject: function(t, e, n) {
                    var r = Object.assign({}, e, n);
                    for (var i in r) t[i] = r[i]
                },
                isolateIntegers: function(t) {
                    return r.isString(t), t.replace(/[^0-9]/g, "")
                },
                createSubClass: function(t) {
                    function e() {
                        t.apply(this, arguments)
                    }
                    return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
                },
                createExtendedSubClass: function(t, e) {
                    var n = o.createSubClass(t);
                    return Object.assign(n.prototype, e), n
                },
                cancelEvent: function(t) {
                    i(t) && t.preventDefault()
                }
            };
        e.exports = o
    }, {
        chai: 8,
        "wf_modules/wf_utilities": 137
    }],
    136: [function(t, e, n) {
        "use strict";
        var r = t("chai").assert,
            i = t("es6-symbol"),
            o = t("wf_modules/errors"),
            a = {
                errorStates: {
                    EMPTY_OLD: i(),
                    OLD_NEW_MATCH: i(),
                    PASSWORD_TOO_SHORT: i(),
                    PASSWORD_CONFIRM_MISMATCH: i()
                },
                validateWithOld: function(t, e, n) {
                    [t, e, n].forEach(r.isString);
                    var i = new o;
                    t.length || i.add({
                        type: this.errorStates.EMPTY_OLD
                    });
                    var a = this.validate(e, n);
                    return i.merge(a), e === t && i.add({
                        type: this.errorStates.OLD_NEW_MATCH
                    }), i
                },
                validate: function(t, e) {
                    [t, e].forEach(r.isString);
                    var n = new o;
                    return t.length < this.MIN_LENGTH && n.add({
                        type: this.errorStates.PASSWORD_TOO_SHORT
                    }), t !== e && n.add({
                        type: this.errorStates.PASSWORD_CONFIRM_MISMATCH
                    }), n
                },
                validateOld: function(t) {
                    r.isString(t);
                    var e = new o;
                    return t.length || e.add({
                        type: this.errorStates.EMPTY_OLD
                    }), e
                }
            };
        Object.defineProperty(a, "MIN_LENGTH", {
            value: 8
        }), e.exports = a
    }, {
        chai: 8,
        "es6-symbol": 44,
        "wf_modules/errors": 133
    }],
    137: [function(t, e, n) {
        "use strict";
        var r = {
            numberBoundInRange: function(t, e, n) {
                return Math.max(Math.min(n, t), e)
            },
            isDefAndNotNull: function(t) {
                return null !== t && void 0 !== t
            },
            shallowCopy: function(t) {
                var e = {};
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            },
            shallowExtendObj: function(t) {
                if (arguments.length < 2) throw "#shallowExtendObj expects two arguments, but received " + arguments.length;
                for (var e = 1; e < arguments.length; e++) for (var n in arguments[e]) arguments[e].hasOwnProperty(n) && (t[n] = arguments[e][n]);
                return t
            }
        };
        e.exports = r
    }, {}],
    138: [function(t, e, n) {
        "use strict";

        function r(t) {
            if ("" === t) throw new Error("invalid pathHelper (empty string is a reserved key in routes.json)");
            var e = h[t];
            if (!e) throw new Error("unrecognized pathHelper");
            return e
        }
        function i(t) {
            if (t = t || {}, "object" != typeof t) throw new Error("if provided, params must be an object");
            return t
        }
        function o(t, e) {
            e = i(e);
            var n = t.match(d) || [];
            return n.reduce(function(t, n) {
                var r = n.match(f)[0],
                    i = e[r.slice(1)];
                return "undefined" == typeof i ? t.replace(/\((.+)\)/, "") : t.replace(r, i).replace(/\((.+)\)/, "$1")
            }, t)
        }
        function a(t, e) {
            e = i(e);
            var n = t.match(f) || [];
            return n.forEach(function(n) {
                var r = e[n.slice(1)];
                if ("undefined" == typeof r) throw new Error("missing param for " + n);
                t = t.replace(n, r)
            }), t
        }
        function s(t, e) {
            if (-1 !== t.indexOf("?")) throw new Error("path must not contain a query string");
            if (e) {
                if ("object" != typeof e) throw new Error("if provided, queryStringParams must be an object");
                0 !== Object.keys(e).length && (t = t + "?" + u.stringify(e))
            }
            return t
        }
        function c(t, e) {
            e = e || {};
            var n = t.match(f) || [];
            if (n.length !== Object.keys(e).length) for (var r in e) if (e.hasOwnProperty(r) && -1 === n.indexOf(":" + r) && -1 === n.indexOf("*" + r)) throw new Error('unexpected param "' + r + '"')
        }
        var u = t("querystring"),
            l = t("privatestate"),
            h = t("./routes"),
            f = /[:\*][a-z_]+/gi,
            d = /\(\/?[:\*][a-z_]+\/?\)/gi,
            p = {
                buildPath: function(t, e, n) {
                    var i = r(t);
                    return c(i, e), i = o(i, e), i = a(i, e), i = s(i, n)
                }
            };
        l.exposeForTesting(p, ["getPath", "addQueryString", "replaceOperators", "checkForUnexpectedParams"]), e.exports = p
    }, {
        "./routes": 139,
        privatestate: 74,
        querystring: 7
    }],
    139: [function(t, e, n) {
        e.exports = {
            "": "DO NOT MANUALLY EDIT THIS FILE. It is automatically generated with `bundle exec rake routes_for_js:generate`.",
            eventTracking: "/event",
            redesignGlobal: "/dashboard",
            redesignAccount: "/dashboard/accounts/:account_id",
            heartbeat: "/heartbeat",
            settingsPasswordOfa: "/settings_ofa/password",
            queryInstrumentMaster: "/search/query-instrument-master",
            userDisabled: "/user_disabled",
            contactInfoOfa: "/settings_ofa/accounts/:account_id/contact_info",
            settingsEmploymentOfa: "/settings_ofa/accounts/:account_id/employment",
            settingsPersonalOfa: "/settings_ofa/accounts/:account_id/personal",
            userStatus: "/user-status",
            logout: "/logout",
            redesignDiHoldings: "/dashboard/accounts/:account_id/di-holdings",
            removeRestrictedInstruments: "/customer_accounts/:account_id/tax-loss-harvesting/exclusion-list/remove",
            removeRestrictedInstrumentsForUser: "/settings_ofa/remove-restricted-instruments-for-user",
            transfersForAccount: "/dashboard-accounts/:account_id/transfers-for-account",
            addRestrictedInstruments: "/customer_accounts/:account_id/tax-loss-harvesting/exclusion-list/add",
            settingsNotificationsOfa: "/settings_ofa/notifications",
            settingsRestrictionsOfa: "/settings_ofa/accounts/:account_id/restrictions",
            popupRedirect: "/popup-redirect",
            cancelAchRelationship: "/customer_accounts/:account_id/ach_relationships/cancel",
            updateCustomerAccountName: "/accounts/:account_id/update_customer_account_name",
            redesignUpdateEmail: "/update-email",
            redesignBankLogin: "/dashboard/link-bank/bank-login",
            redesignPollLinkStatus: "/dashboard/link-bank/poll-status",
            redesignSubmitMfa: "/dashboard/link-bank/submit-mfa",
            redesignNameBanks: "/dashboard/link-bank/name-banks",
            redesignLinkBank: "/dashboard/link-bank",
            redesignNetWorthSeries: "/dashboard/net-worth-series",
            validateWealthfrontForWorkplace: "/validate-wealthfront-for-workplace",
            ofaHome: "/home",
            invite: "/invite",
            expireOtherActiveSessions: "/expire-other-active-sessions",
            redesignAnnotations: "/dashboard/accounts/:account_id/annotations",
            scheduleDPdf: "/documents/:account_id/:year/sched_d.pdf",
            scheduleDTxf: "/documents/:account_id/:year/sched_d.txf",
            tax1099: "/documents/:account_id/:year/1099",
            tax1099Correction: "/documents/:account_id/:year/1099_correction",
            tax1099Xls: "/documents/:account_id/:year/1099_xls",
            tax1099XlsCorrection: "/documents/:account_id/:year/1099_xls_correction",
            tax1099r: "/documents/:account_id/:year/1099r",
            tax1099rCorrection: "/documents/:account_id/:year/1099r_correction",
            tax5498: "/documents/:account_id/:year/5498",
            addFunds: "/customer_accounts/:account_id/add-funds",
            dashboardDocuments: "/dashboard-documents",
            tax5498Correction: "/documents/:account_id/:year/5498_correction",
            tax8949: "/documents/:account_id/:year/8949.:file_type",
            accountStatement: "/documents/:account_id/document/:eid",
            mfaDevices: "/mfa/devices",
            mfaDevice: "/mfa/devices/:id",
            mfa: "/mfa",
            transactions: "/accounts/:account_id/transactions",
            connectQuovoBrokerage: "/connect-brokerage",
            getQuovoBrokerageAccounts: "/get-brokerage-accounts",
            createUser: "/redesign-static/create-user",
            comparisonTool: "/portfolio-review",
            updateExternalAccountSet: "/update-external-account-set",
            generateComparisonReportCardView: "/generate-comparison-report-card-view",
            createQuestionnaireAnswer: "/questionnaire/answers",
            guidedTransfers: "/dashboard-guided-transfers",
            getTransferRecommendations: "/get-transfer-recommendations",
            setTaxLossHarvestingState: "/external-tax-loss-harvesting",
            login: "/login",
            dashboardSettings: "/dashboard-settings",
            settingsTaxOfa: "/settings_ofa/accounts/:account_id/tax_info",
            updateApplicationWithRecommendations: "/update-application-with-recommendations",
            getComparisonReportCardView: "/get-comparison-report-card-view",
            createTransferApplicationWithRec: "/create-transfer-application-with-rec",
            acatsTransfer: "/customer_accounts/:account_id/acats-transfer",
            getMatchTypesForSubType: "/get-match-types-for-sub-type",
            quickenExport: "/documents/:account_id/quicken-export",
            checkIfAccountTransferFull: "/check-if-account-transfer-full",
            tlhLanding: "/tax-loss-harvesting",
            componentsApiRouter: "/components/*component_name",
            confirmRiskQuestionnaire: "/questionnaire/confirm",
            acatsTransferFromTransferRecommendations: "/customer_accounts/:account_id/acats-transfer-from-transfer-recommendations",
            dismissAlert: "/alerts/:account_id/:alert/dismiss",
            getInvestmentPlan: "/get-investment-plan",
            accountTierSelection: "/account-tier-selection",
            commitStats: "/engineering/commit_stats",
            dmStats: "/engineering/dm_stats",
            redesignSettings: "/dashboard/settings",
            labs: "/labs",
            submitQuovoMfaQuestions: "/submit-quovo-mfa-questions",
            portfolioReviewPromoOptOut: "/portfolio-review-promo-opt-out",
            incrementFeatureAction: "/users/increment-feature-action",
            accountSummary: "/accounts/:account_id/summary",
            resend: "/accounts/:account_id/resend",
            linkAuthForm: "/dashboard/link-bank/link-auth-form",
            disconnectLink: "/dashboard/link-bank/disconnect-link",
            authorizeExternalLink: "/dashboard/link-bank/authorize-external-link",
            authorizeExistingExternalLink: "/dashboard/link-bank/authorize-existing-external-link",
            deleteMigrationTrigger: "/delete-migration-trigger",
            createMigrationTrigger: "/create-migration-trigger",
            contactUs: "/contact-us",
            redesignContactUs: "/dashboard/contact-us",
            accountValuesWithLimits: "/dashboard-accounts/:account_id/account-values-with-limits",
            requestPartialWithdrawal: "/request-partial-withdrawal",
            requestFullWithdrawal: "/request-full-withdrawal",
            migrationStatus: "/migration-status",
            achRelationships: "/dashboard-accounts/:account_id/ach-relationships",
            excludedInstruments: "/dashboard-accounts/:account_id/excluded-instruments",
            tlhSummary: "/customer_accounts/:account_id/tax-loss-harvesting",
            setExternalAccountOverride: "/dashboard/link-bank/set-external-account-override",
            addFundsGeneral: "/customer_accounts/add-funds",
            questions: "/questions",
            possibleIraAccountDistributionReasons: "/dashboard-accounts/:account_id/possible_ira_account_distribution_reasons",
            addAchRelationship: "/customer_accounts/:account_id/ach_relationships/add",
            taxConsequence: "/customer_accounts/:account_id/tax-consequence",
            sendUnsupportedIraDistributionReasonEmail: "/send-unsupported-ira-distribution-reason-email/:account_id",
            requestAscensusWithdrawal: "/request-ascensus-withdrawal",
            faq: "/faq",
            confirmAchRelationship: "/customer_accounts/:account_id/ach_relationships/confirm",
            customerAddressFields: "/customer-address-fields",
            setExternalAccountVisibility: "/dashboard/link-bank/set-external-account-visibility",
            confirmExternalAccount: "/dashboard/link-bank/confirm-external-account",
            dismissPortfolioReview: "/dashboard/dismiss-portfolio-review"
        }
    }, {}]
}, {}, [116]);
var w = w || {};
w.keys = w.keys || {}, w.keys.KEY_NAMES_BY_CODE = {
    8: "backspace",
    9: "tab",
    13: "enter",
    16: "shift",
    17: "ctrl",
    18: "alt",
    20: "caps_lock",
    27: "esc",
    32: "space",
    33: "page_up",
    34: "page_down",
    35: "end",
    36: "home",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    45: "insert",
    46: "delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    91: "cmd",
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12",
    144: "num_lock",
    188: "comma",
    190: "period"
}, w.keys.KEY_CODES_BY_NAME = {};
for (var key in w.keys.KEY_NAMES_BY_CODE) Object.prototype.hasOwnProperty.call(w.keys.KEY_NAMES_BY_CODE, key) && (w.keys.KEY_CODES_BY_NAME[w.keys.KEY_NAMES_BY_CODE[key]] = Number(key));
w.keys.isLetter = function(t) {
    return w.keys.getCode("a") <= t && t <= w.keys.getCode("z")
}, w.keys.isNumber = function(t) {
    return w.keys.getCode("0") <= t && t <= w.keys.getCode("9")
}, w.keys.getCode = function(t) {
    return w.keys.KEY_CODES_BY_NAME[t.toLowerCase()]
}, w.keys.getCodes = function(t) {
    return _.map(t, w.bind(this.getCode, this))
}, w.keys.getName = function(t) {
    return w.keys.KEY_NAMES_BY_CODE[t]
}, w.keys.isCodeOfType = function(t, e) {
    "string" == typeof e && (e = [e]);
    var n = w.keys.getCodes(e);
    return _.contains(n, t)
}, w.namespace("w.realTimeFormat"), w.RealTimeFormat = function(t, e) {
    e = w.options(e, this.DEFAULTS), this.fieldType = t, this.eventType = e.eventType, this.listenForPaste = e.listenForPaste, this.cleanInputRegex = e.cleanInputRegex, this.cleanInputFunc = e.cleanInputFunc, this.formatOutputFunc = e.formatOutputFunc;
    var n = "[data-" + this.DATA_ATTR + '="' + this.fieldType + '"]';
    this.$fields = $(document).find(n), this.listen()
}, w.RealTimeFormat.prototype.listen = function() {
    this.$fields.on(this.eventType, w.bind(this.transformIfChanged, this)), this.listenForPaste && this.$fields.on(this.PASTE_EVENT, w.bind(this.transformIfChangedDelayed, this))
}, w.RealTimeFormat.prototype.transformIfChangedDelayed = function(t) {
    setTimeout(w.bind(this.transformIfChanged, this, t), 50)
}, w.RealTimeFormat.prototype.transformIfChanged = function(t) {
    var e = $(t.currentTarget),
        n = e.val(),
        r = this.cleanInputFunc(n),
        i = this.output(r),
        o = n !== i;
    o && this.transform(e, n, i)
}, w.RealTimeFormat.prototype.transform = function(t, e, n) {
    var r = w.getCursorPosition(t);
    t.val(n);
    var i = r + n.length - e.length;
    w.placeCursorAtIndex(t, i)
}, w.RealTimeFormat.prototype.output = function(t) {
    return w.isBlank(t) ? "" : this.formatOutputFunc(t)
}, w.RealTimeFormat.prototype.cleanInputWithRegexFunc = function(t) {
    var e = t.match(this.cleanInputRegex);
    return e ? e.join("") : ""
}, w.RealTimeFormat.prototype.DATA_ATTR = "rt-format", w.RealTimeFormat.prototype.PASTE_EVENT = "paste", w.RealTimeFormat.prototype.DEFAULTS = {
    cleanInputRegex: /.*/,
    eventType: "keyup",
    listenForPaste: !0,
    cleanInputFunc: w.RealTimeFormat.prototype.cleanInputWithRegexFunc,
    formatOutputFunc: _.identity
};
var w = w || {};
w.easeToSection = function(t, e) {
    e = w.options(e, {
        space: 0,
        duration: 1e3
    });
    var n = t.offset().top + e.space;
    $("html, body").animate({
        scrollTop: n
    }, e.duration)
}, w.easedScroll = function(t, e) {
    $.easing.easeInOutQuad || $.extend($.easing, {
        easeInOutQuad: function(t, e, n, r, i) {
            return e /= .5 * i, 1 > e ? r / 2 * e * e + n : -r / 2 * (--e * (e - 2) - 1) + n
        }
    });
    var n = t.offset().top,
        r = $(window).scrollTop(),
        i = Math.abs(r - n),
        o = 4e3;
    $("<b/>").css({
        position: "absolute",
        top: r,
        display: "none"
    }).appendTo("body").animate({
        top: n
    }, {
        duration: Math.max(i / o * 1e3, 300),
        easing: "easeInOutQuad",
        step: function(t) {
            window.scroll(window.pageXOffset || 0, t)
        },
        complete: function() {
            $(this).remove(), "function" == typeof e && e()
        }
    })
}, w.easedHashScroll = function(t, e) {
    t.click(function(t) {
        t.preventDefault(t);
        var n = $(this).attr("href");
        if (n.match(/^#\S+$/)) {
            var r = $($(this).attr("href"));
            w.easedScroll(r, function() {
                window.location.hash = n, "function" == typeof e && e()
            })
        }
    })
}, w.scrollTo = function(t, e) {
    var n = $(t);
    if (n.length) {
        e = $.extend({
            duration: 1e3,
            space: 100
        }, e || {});
        var r, i = $(window).height(),
            o = $(document).scrollTop(),
            a = o + i,
            s = n.offset().top,
            c = s + n.height();
        if (s < o + e.space) r = s - e.space;
        else {
            if (!(c > a - e.space && s > o + e.space)) return;
            r = Math.min(s - e.space, c + e.space - i)
        }
        r = Math.max(0, r), $("<b/>").css({
            position: "absolute",
            top: o,
            display: "none"
        }).appendTo("body").animate({
            top: r
        }, {
            duration: e.duration,
            step: function(t) {
                window.scroll(window.pageXOffset || 0, t)
            },
            complete: function() {
                $(this).remove()
            }
        })
    }
};
var w = w || {};
w.Tooltip = function(t, e) {
    this.DEFAULT_DELAY = 100, this.SCREEN_PADDING = 40, this.MIN_WIDTH = 100, this.DIRECTION_RIGHT = "right", this.DIRECTION_LEFT = "left", this.bindedDismiss = w.bind(this.dismiss, this), this.$container = t, this.id = this.$container.attr("id"), this.$link = this.$container.find(".ktip-img, .ktip-a"), this.$tipContainer = this.$link.next(".ktip"), this.width = parseInt(this.$link.data("width")), this.klass = this.$link.data("klass"), this.tip = this.$link.data("tip"), this.direction = this.$link.data("direction") || this.DIRECTION_RIGHT, this.delay = this.$link.data("delay") || this.DEFAULT_DELAY, this.headline = this.$link.data("headline"), this.spawn = this.$link.data("spawn") === !0, this.clickOnly = this.$link.data("clickOnly") === !0, this.spotlight = this.$link.data("spotlight"), this.exponential = this.$link.data("exponential"), (e || this.spawn) && this.show()
}, w.Tooltip.prototype.bindEvents = function() {
    this.spawn ? this.bindSpawnEvents() : this.clickOnly ? this.bindClickOnlyEvents() : this.bindNormalEvents()
}, w.Tooltip.prototype.bindClickOnlyEvents = function() {
    this.$link.on("vclick", w.bind(this.show, this)), $(document).on("vclick", this.bindedDismiss), this.$container.on("vclick", w.stopPropagation)
}, w.Tooltip.prototype.bindNormalEvents = function() {
    this.$link.on("vclick", w.bind(this.toggleVisibility, this)), this.$link.on("mouseover", w.bind(this.handleMouseOver, this)), this.$container.on("mouseleave", w.bind(this.hide, this))
}, w.Tooltip.prototype.bindSpawnEvents = function() {
    $(document).on("vclick", this.bindedDismiss), this.$container.on("vclick", w.stopPropagation), this.$container.on("vclick", ".ktip-dismiss", this.bindedDismiss)
}, w.Tooltip.prototype.unbindSpawnEvents = function() {
    $(document).off("vclick", this.bindedDismiss), this.$container.off("vclick", w.stopPropagation), this.$container.off("vclick", this.bindedDismiss), this.clickOnly ? (this.$link.off("vclick", w.bind(this.show, this)), this.bindClickOnlyEvents()) : this.bindNormalEvents()
}, w.Tooltip.prototype.dismiss = function() {
    this.exponential && w.trackExponentialAction(this.exponential), w.trackEvent("tooltip", "dismiss", this.id), this.$tipContainer.removeClass("ktip-spotlight-tip ktip-spawn-tip"), this.unbindSpawnEvents(), this.hide()
}, w.Tooltip.prototype.handleMouseOver = function() {
    clearTimeout(this.timeout), this.timeout = setTimeout(w.bind(this.show, this), this.delay)
}, w.Tooltip.prototype.toggleVisibility = function() {
    this.$link.next(".ktip").is(":visible") ? this.hide() : this.show()
}, w.Tooltip.prototype.cancel = function(t) {
    t.preventDefault()
}, w.Tooltip.prototype.hide = function() {
    clearTimeout(this.timeout), this.timeout = null, this.$tipContainer.hide(), this.spawn && this.spotlight && (this.fadeOutLightbox(), this.spotlightOff())
}, w.Tooltip.prototype.createEmptyTip = function() {
    var t = '<h3 class="ktip-headline">' + this.headline + "</h3>",
        e = '<span class="ktip-dismiss fa fa-times"></span>',
        n = this.headline ? t + this.tip : this.tip;
    n = this.spawn ? n + e : n;
    var r = $("<span class=ktip-inner>").html(n + "<span class=ktip-triangle/>");
    return $("<span class=ktip>").append(r)
}, w.Tooltip.prototype.createLightbox = function() {
    this.$lightboxContainer = $('<div class="ktip-lightbox"></div>'), this.$lightboxContainer.prependTo($("body"))
}, w.Tooltip.prototype.fadeOutLightbox = function() {
    this.$lightboxContainer && w.animations.fade.hide(this.$lightboxContainer, 300, this.hideLightbox)
}, w.Tooltip.prototype.hideLightbox = function(t) {
    t.addClass("ktip-lightbox-hidden")
}, w.Tooltip.prototype.spotlightOn = function() {
    $(this.spotlight).addClass("ktip-spotlight")
}, w.Tooltip.prototype.spotlightOff = function() {
    $(this.spotlight).removeClass("ktip-spotlight")
}, w.Tooltip.prototype.fitToScreen = function(t, e) {
    var n = e.offset().left;
    this.direction === this.DIRECTION_RIGHT ? (n += e.width(), this.isOffScreen(n) && (this.width = window.innerWidth - n - this.SCREEN_PADDING)) : this.direction === this.DIRECTION_LEFT && this.isOffScreen(n) && (this.width = n - this.SCREEN_PADDING), this.width = Math.max(this.width, this.MIN_WIDTH), t.find(".ktip-inner").width(this.width), this.isOffScreen(n) && this.flipDirection()
}, w.Tooltip.prototype.isOffScreen = function(t) {
    return this.direction === this.DIRECTION_RIGHT ? this.width + t > window.innerWidth - this.SCREEN_PADDING : this.direction === this.DIRECTION_LEFT ? t - this.width < this.SCREEN_PADDING : void 0
}, w.Tooltip.prototype.flipDirection = function() {
    this.direction === this.DIRECTION_RIGHT ? (this.$container.removeClass(this.DIRECTION_RIGHT).addClass(this.DIRECTION_LEFT), this.$link.data(this.DIRECTION_LEFT)) : this.direction === this.DIRECTION_LEFT && (this.$container.removeClass(this.DIRECTION_LEFT).addClass(this.DIRECTION_RIGHT), this.$link.data(this.DIRECTION_RIGHT))
}, w.Tooltip.prototype.buildTip = function() {
    this.$tipContainer = this.createEmptyTip(), this.$tipContainer.addClass(this.klass), this.fitToScreen(this.$tipContainer, this.$link), this.$tipContainer.insertAfter(this.$link), this.spawn && this.$tipContainer.addClass("ktip-spawn-tip"), this.spawn && this.spotlight && (this.spotlightOn(), this.createLightbox(), this.$tipContainer.addClass("ktip-spotlight-tip"))
}, w.Tooltip.prototype.show = function() {
    clearTimeout(this.timeout), this.timeout = null, 0 === this.$tipContainer.length && (this.$link.contents().last().filter(function() {
        return 3 === this.nodeType && !this.data.match(/\S/)
    }).remove(), this.buildTip()), this.$tipContainer.show(), this.$container.triggerHandler("tip.show")
}, w.Tooltip.registerTooltips = function() {
    $(".ktip-link").each(function() {
        if (!w.isDefAndNotNull($(this).data("tooltipInstance"))) {
            var t = new w.Tooltip($(this));
            t.bindEvents(), $(this).data("tooltipInstance", t)
        }
    })
}, $(function() {
    w.Tooltip.registerTooltips()
});
var w = w || {};
(function(t) {
    var e = "form-validation-failure";
    t.trackDomEvent = function(e, n, r, i, o, a) {
        $(e).on(n, function() {
            t.trackEvent(r, i, o, a)
        })
    }, t.trackEvent = function(e, n, r, i) {
        var o;
        o = t.isDefAndNotNull(r) && "" !== r ? r : t.isDefAndNotNull(i) ? i : "", t.trackUserEvent(String(e), String(n), String(o))
    }, t.trackEventClick = function(e) {
        e.on("click", function() {
            var e = $(this).data("track");
            e && t.trackEvent.apply(t, e.split(","))
        })
    }, t.trackExponentialAction = function(e) {
        t.post2(t.paths.incrementFeatureAction, {
            category: e
        })
    }, t.trackESPDeprecated = function(e, n, r) {
        t.trackESP(String(e), String(n), String(r))
    }, t.trackOutbound = function(e, n, r, i, o) {
        try {
            t.trackEvent(n, r, i, o)
        } catch (a) {}
        setTimeout(function() {
            t.redirectTo(e)
        }, 100)
    }, t.trackOutboundNoFollow = function(e, n, r, i, o) {
        try {
            t.trackEvent(n, r, i, o)
        } catch (a) {}
    }, t.trackOutboundEventClick = function(e) {
        e.on("click", function() {
            var e = $(this),
                n = e.data("track-outbound");
            n && (e.attr("target") && -1 === ["_parent", "_top", "_self"].indexOf(e.attr("target")) ? t.trackOutboundNoFollow.apply(this, [e.attr("href")].concat(n.split(","))) : t.trackOutbound.apply(this, [e.attr("href")].concat(n.split(","))))
        })
    }, t.trackPageView = function(t) {
        window._gaq = window._gaq || [], window._gaq.push(["_trackPageview", t])
    }, t.trackTimeElapsed = function() {
        var e = t.partial(t.trackESPDeprecated, "time", window.location.href);
        e(0);
        for (var n = 1; 300 > n; n++)(10 > n || n % 10 === 0) && setTimeout(t.bind(e, t, n), 1e3 * n);
        return t.trackTimeElapsed = function() {
            return !1
        }, !0
    }, t.trackTimeElapsedStart = function() {
        t.trackTiming && t.trackTiming.enabled && $(t.trackTimeElapsed)
    }, t.trackValidationFailure = function(n, r, i, o) {
        o = o || "";
        var a = {
                selector: n,
                path: r
            },
            s = {
                validator: i,
                value: o
            };
        t.trackEvent(e, JSON.stringify(a), JSON.stringify(s))
    }
}).call(this, w), $(w.trackTimeElapsedStart);
var w = w || {};
(function(t) {
    t.setVarsForJs = function(e) {
        for (var n in e) if (e.hasOwnProperty(n)) {
            if (t.isDefAndNotNull(t[n])) throw n + " was passed to vars_to_js, but has already been defined";
            t[n] = e[n]
        }
    }
}).call(this, w);
var w = w || {};
(function(t) {
    t.createWfFormSubClass = function() {
        return t.createSubClass(t.WfForm)
    }, t.WfForm = function(e) {
        this.$el = $(t.checkNotNull(e.el, "el is required, but undefined."));
        var n = t.checkNotNull(e.errorField, "$errorField is required, but undefined."),
            r = this.$el.find(n);
        this.$errorField = r.length ? r : $(n), this.$submitButton = this.$el.find(t.checkNotNull(e.submitButton, e.el + " submitButton is required, but undefined.")), this.$cancelButton = this.$el.find(e.cancelButton), this.redirectUrl = this.$el.data("redirect"), this.submitUrl = e.submitUrl || this.$el.attr("action"), this.successProp = e.successProp || "success", this.errorsProp = e.errorsProp || "errors", this.isSubmitting = !1, this.isRedirecting = !1, this.errorHandler = new t.ErrorHandler(e.errorMap || {}, e.defaultError), this.name = e.name, this.listen()
    }, t.WfForm.prototype.listen = function() {
        this.$cancelButton.on("vclick", t.bind(this.cancel, this)), this.$el.on("submit", t.bind(this.submit, this)), this.$submitButton.on("vclick", t.bind(this.submit, this))
    }, t.WfForm.prototype.cancel = function() {
        return !1
    }, t.WfForm.prototype.submit = function(e) {
        return e && e.preventDefault(), this.$submitButton.attr("disabled") || this.isSubmitting || this.isRedirecting ? !1 : void(this.isValid() ? (this.isSubmitting = !0, this.showProgress(), t.post2(this.submitUrl, this.params()).then(t.bind(this.processResponse, this)).done(t.bind(this.submitSuccess, this)).fail(t.bind(this.submitFail, this)).always(t.bind(this.doneSubmitting, this))) : this.showError())
    }, t.WfForm.prototype.isValid = function() {
        return !0
    }, t.WfForm.prototype.params = function() {
        return t.serializeObject(this.$el)
    }, t.WfForm.prototype.showProgress = $.noop, t.WfForm.prototype.processResponse = function(t) {
        return t[this.successProp] ? t : $.Deferred().reject(t)
    }, t.WfForm.prototype.submitFail = function(t) {
        this.showError(t)
    }, t.WfForm.prototype.submitSuccess = function() {
        return this.redirectUrl && (t.redirectTo(this.redirectUrl), this.isRedirecting = !0), !0
    }, t.WfForm.prototype.doneSubmitting = function() {
        this.isSubmitting = !1, this.setSubmitButtonEnabled(!0)
    }, t.WfForm.prototype.showError = function(t, e) {
        t && t[this.errorsProp] && (e = t[this.errorsProp]);
        var n = _.isString(e) ? e : this.errorHandler.firstMessage(e);
        this.$errorField.text(n)
    }, t.WfForm.prototype.setSubmitButtonEnabled = function(t) {
        t ? this.$submitButton.removeAttr("disabled") : this.$submitButton.attr("disabled", "disabled")
    }
}).call(this, w);
var w = w || {};
w.animations = w.animations || {}, w.animations.fade = w.animations.fade || {}, w.animations.fade.durations = [100, 200, 300, 500, 1e3], w.animations.fade.classPrefix = "transition-fade-", w.animations.fade.visibleClass = w.animations.fade.classPrefix + "visible", w.animations.fade.invisibleClass = w.animations.fade.classPrefix + "invisible", w.animations.fade.hide = function(t, e, n) {
    this.trigger(t, "out", e, n)
}, w.animations.fade.show = function(t, e, n) {
    this.trigger(t, "in", e, n)
}, w.animations.fade.trigger = function(t, e, n, r) {
    if (this.isValid(t, e, n, r)) {
        var i = this.transitionClass(e, n);
        t.removeClass(this.visibleClass + " " + this.invisibleClass), t.addClass(i), t.on(w.transitionEndEvent(), w.bind(this.handleCallback, this, t, e, i, r))
    }
}, w.animations.fade.handleCallback = function(t, e, n, r) {
    "out" === e ? t.addClass(this.invisibleClass) : "in" === e && t.addClass(this.visibleClass), t.removeClass(n), t.off(w.transitionEndEvent()), r && r(t)
}, w.animations.fade.isValid = function(t, e, n, r) {
    var i, o = this.transitionClass(e, n);
    if ("out" === e ? i = this.invisibleClass : "in" === e && (i = this.visibleClass), this.isValidDuration(n)) return w.hasCSSTransitions() ? t.hasClass(o) || t.hasClass(i) ? !1 : !0 : (this.handleCallback(t, e, null, r), !1);
    throw "Please enter a valid duration: " + w.animations.fade.durations
}, w.animations.fade.transitionClass = function(t, e) {
    return this.classPrefix + t + "-" + e
}, w.animations.fade.isValidDuration = function(t) {
    return -1 !== this.durations.indexOf(t)
};
var w = w || {};
w.animations = w.animations || {}, w.animations.SlideWithToggle = function(t) {
    this.$container = t, this.$contentWrapper = t.find(".slide-content-wrapper"), this.$content = this.$contentWrapper.find(".slide-content")
}, w.animations.SlideWithToggle.prototype.initSlideState = function() {
    this.$container.hasClass("slide-open") ? this.setWrapperHeight() : this.$container.addClass("slide-close"), this.listen()
}, w.animations.SlideWithToggle.prototype.listen = function() {
    this.$container.find(".slide-toggle").on("vclick", w.bind(this.toggleSlideAnimation, this))
}, w.animations.SlideWithToggle.prototype.toggleSlideAnimation = function() {
    this.$container.hasClass("slide-open") ? this.slideClose(this.$container) : this.slideOpen(this.$container), this.$container.toggleClass("slide-open")
}, w.animations.SlideWithToggle.prototype.slideOpen = function() {
    this.$container.removeClass("slide-close"), this.setWrapperHeight()
}, w.animations.SlideWithToggle.prototype.setWrapperHeight = function() {
    this.$contentWrapper.height(this.$content.height())
}, w.animations.SlideWithToggle.prototype.slideClose = function() {
    w.hasCSSTransitions() ? this.$content.one(w.transitionEndEvent(), w.bind(this.slideCloseFinished, this)) : this.$container.addClass("slide-close")
}, w.animations.SlideWithToggle.prototype.slideCloseFinished = function() {
    this.$container.hasClass("slide-open") || this.$container.addClass("slide-close")
}, $(function() {
    $(".slide-container").each(function() {
        var t = new w.animations.SlideWithToggle($(this));
        t.initSlideState()
    })
}), !
    function(t) {
        var e, n, r = "0.4.2",
            i = "hasOwnProperty",
            o = /[\.\/]/,
            a = /\s*,\s*/,
            s = "*",
            c = function(t, e) {
                return t - e
            },
            u = {
                n: {}
            },
            l = function() {
                for (var t = 0, e = this.length; e > t; t++) if ("undefined" != typeof this[t]) return this[t]
            },
            h = function() {
                for (var t = this.length; --t;) if ("undefined" != typeof this[t]) return this[t]
            },
            f = function(t, r) {
                t = String(t);
                var i, o = n,
                    a = Array.prototype.slice.call(arguments, 2),
                    s = f.listeners(t),
                    u = 0,
                    d = [],
                    p = {},
                    g = [],
                    m = e;
                g.firstDefined = l, g.lastDefined = h, e = t, n = 0;
                for (var v = 0, y = s.length; y > v; v++)"zIndex" in s[v] && (d.push(s[v].zIndex), s[v].zIndex < 0 && (p[s[v].zIndex] = s[v]));
                for (d.sort(c); d[u] < 0;) if (i = p[d[u++]], g.push(i.apply(r, a)), n) return n = o, g;
                for (v = 0; y > v; v++) if (i = s[v], "zIndex" in i) if (i.zIndex == d[u]) {
                    if (g.push(i.apply(r, a)), n) break;
                    do
                        if (u++, i = p[d[u]], i && g.push(i.apply(r, a)), n) break;
                    while (i)
                } else p[i.zIndex] = i;
                else if (g.push(i.apply(r, a)), n) break;
                return n = o, e = m, g
            };
        f._events = u, f.listeners = function(t) {
            var e, n, r, i, a, c, l, h, f = t.split(o),
                d = u,
                p = [d],
                g = [];
            for (i = 0, a = f.length; a > i; i++) {
                for (h = [], c = 0, l = p.length; l > c; c++) for (d = p[c].n, n = [d[f[i]], d[s]], r = 2; r--;) e = n[r], e && (h.push(e), g = g.concat(e.f || []));
                p = h
            }
            return g
        }, f.on = function(t, e) {
            if (t = String(t), "function" != typeof e) return function() {};
            for (var n = t.split(a), r = 0, i = n.length; i > r; r++)!
                function(t) {
                    for (var n, r = t.split(o), i = u, a = 0, s = r.length; s > a; a++) i = i.n, i = i.hasOwnProperty(r[a]) && i[r[a]] || (i[r[a]] = {
                            n: {}
                        });
                    for (i.f = i.f || [], a = 0, s = i.f.length; s > a; a++) if (i.f[a] == e) {
                        n = !0;
                        break
                    }!n && i.f.push(e)
                }(n[r]);
            return function(t) {
                +t == +t && (e.zIndex = +t)
            }
        }, f.f = function(t) {
            var e = [].slice.call(arguments, 1);
            return function() {
                f.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
            }
        }, f.stop = function() {
            n = 1
        }, f.nt = function(t) {
            return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
        }, f.nts = function() {
            return e.split(o)
        }, f.off = f.unbind = function(t, e) {
            if (!t) return void(f._events = u = {
                n: {}
            });
            var n = t.split(a);
            if (n.length > 1) for (var r = 0, c = n.length; c > r; r++) f.off(n[r], e);
            else {
                n = t.split(o);
                var l, h, d, r, c, p, g, m = [u];
                for (r = 0, c = n.length; c > r; r++) for (p = 0; p < m.length; p += d.length - 2) {
                    if (d = [p, 1], l = m[p].n, n[r] != s) l[n[r]] && d.push(l[n[r]]);
                    else for (h in l) l[i](h) && d.push(l[h]);
                    m.splice.apply(m, d)
                }
                for (r = 0, c = m.length; c > r; r++) for (l = m[r]; l.n;) {
                    if (e) {
                        if (l.f) {
                            for (p = 0, g = l.f.length; g > p; p++) if (l.f[p] == e) {
                                l.f.splice(p, 1);
                                break
                            }!l.f.length && delete l.f
                        }
                        for (h in l.n) if (l.n[i](h) && l.n[h].f) {
                            var v = l.n[h].f;
                            for (p = 0, g = v.length; g > p; p++) if (v[p] == e) {
                                v.splice(p, 1);
                                break
                            }!v.length && delete l.n[h].f
                        }
                    } else {
                        delete l.f;
                        for (h in l.n) l.n[i](h) && l.n[h].f && delete l.n[h].f
                    }
                    l = l.n
                }
            }
        }, f.once = function(t, e) {
            var n = function() {
                return f.unbind(t, n), e.apply(this, arguments)
            };
            return f.on(t, n)
        }, f.version = r, f.toString = function() {
            return "You are running Eve " + r
        }, "undefined" != typeof module && module.exports ? module.exports = f : "function" == typeof define && define.amd ? define("eve", [], function() {
            return f
        }) : t.eve = f
    }(this), function(t, e) {
    "function" == typeof define && define.amd ? define(["eve"], function(n) {
        return e(t, n)
    }) : e(t, t.eve)
}(this, function(t, e) {
    var n = function(e) {
            var n = {},
                r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame ||
                    function(t) {
                        setTimeout(t, 16)
                    }, i = Array.isArray ||
                    function(t) {
                        return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
                    }, o = 0, a = "M" + (+new Date).toString(36), s = function() {
                    return a + (o++).toString(36)
                }, c = Date.now ||
                    function() {
                        return +new Date
                    }, u = function(t) {
                    var e = this;
                    if (null == t) return e.s;
                    var n = e.s - t;
                    e.b += e.dur * n, e.B += e.dur * n, e.s = t
                }, l = function(t) {
                    var e = this;
                    return null == t ? e.spd : void(e.spd = t)
                }, h = function(t) {
                    var e = this;
                    return null == t ? e.dur : (e.s = e.s * t / e.dur, void(e.dur = t))
                }, f = function() {
                    var t = this;
                    delete n[t.id], t.update(), e("mina.stop." + t.id, t)
                }, d = function() {
                    var t = this;
                    t.pdif || (delete n[t.id], t.update(), t.pdif = t.get() - t.b)
                }, p = function() {
                    var t = this;
                    t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, n[t.id] = t)
                }, g = function() {
                    var t, e = this;
                    if (i(e.start)) {
                        t = [];
                        for (var n = 0, r = e.start.length; r > n; n++) t[n] = +e.start[n] + (e.end[n] - e.start[n]) * e.easing(e.s)
                    } else t = +e.start + (e.end - e.start) * e.easing(e.s);
                    e.set(t)
                }, m = function() {
                    var t = 0;
                    for (var i in n) if (n.hasOwnProperty(i)) {
                        var o = n[i],
                            a = o.get();
                        t++, o.s = (a - o.b) / (o.dur / o.spd), o.s >= 1 && (delete n[i], o.s = 1, t--, function(t) {
                            setTimeout(function() {
                                e("mina.finish." + t.id, t)
                            })
                        }(o)), o.update()
                    }
                    t && r(m)
                }, v = function(t, e, i, o, a, c, y) {
                    var b = {
                        id: s(),
                        start: t,
                        end: e,
                        b: i,
                        s: 0,
                        dur: o - i,
                        spd: 1,
                        get: a,
                        set: c,
                        easing: y || v.linear,
                        status: u,
                        speed: l,
                        duration: h,
                        stop: f,
                        pause: d,
                        resume: p,
                        update: g
                    };
                    n[b.id] = b;
                    var w, x = 0;
                    for (w in n) if (n.hasOwnProperty(w) && (x++, 2 == x)) break;
                    return 1 == x && r(m), b
                };
            return v.time = c, v.getById = function(t) {
                return n[t] || null
            }, v.linear = function(t) {
                return t
            }, v.easeout = function(t) {
                return Math.pow(t, 1.7)
            }, v.easein = function(t) {
                return Math.pow(t, .48)
            }, v.easeinout = function(t) {
                if (1 == t) return 1;
                if (0 == t) return 0;
                var e = .48 - t / 1.04,
                    n = Math.sqrt(.1734 + e * e),
                    r = n - e,
                    i = Math.pow(Math.abs(r), 1 / 3) * (0 > r ? -1 : 1),
                    o = -n - e,
                    a = Math.pow(Math.abs(o), 1 / 3) * (0 > o ? -1 : 1),
                    s = i + a + .5;
                return 3 * (1 - s) * s * s + s * s * s
            }, v.backin = function(t) {
                if (1 == t) return 1;
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            }, v.backout = function(t) {
                if (0 == t) return 0;
                t -= 1;
                var e = 1.70158;
                return t * t * ((e + 1) * t + e) + 1
            }, v.elastic = function(t) {
                return t == !! t ? t : Math.pow(2, -10 * t) * Math.sin(2 * (t - .075) * Math.PI / .3) + 1
            }, v.bounce = function(t) {
                var e, n = 7.5625,
                    r = 2.75;
                return 1 / r > t ? e = n * t * t : 2 / r > t ? (t -= 1.5 / r, e = n * t * t + .75) : 2.5 / r > t ? (t -= 2.25 / r, e = n * t * t + .9375) : (t -= 2.625 / r, e = n * t * t + .984375), e
            }, t.mina = v, v
        }("undefined" == typeof e ?
            function() {} : e),
        r = function() {
            function r(t, e) {
                if (t) {
                    if (t.tagName) return S(t);
                    if (o(t, "array") && r.set) return r.set.apply(r, t);
                    if (t instanceof w) return t;
                    if (null == e) return t = k.doc.querySelector(t), S(t)
                }
                return t = null == t ? "100%" : t, e = null == e ? "100%" : e, new _(t, e)
            }
            function i(t, e) {
                if (e) {
                    if ("#text" == t && (t = k.doc.createTextNode(e.text || "")), "string" == typeof t && (t = i(t)), "string" == typeof e) return "xlink:" == e.substring(0, 6) ? t.getAttributeNS(G, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(X, e.substring(4)) : t.getAttribute(e);
                    for (var n in e) if (e[T](n)) {
                        var r = O(e[n]);
                        r ? "xlink:" == n.substring(0, 6) ? t.setAttributeNS(G, n.substring(6), r) : "xml:" == n.substring(0, 4) ? t.setAttributeNS(X, n.substring(4), r) : t.setAttribute(n, r) : t.removeAttribute(n)
                    }
                } else t = k.doc.createElementNS(X, t);
                return t
            }
            function o(t, e) {
                return e = O.prototype.toLowerCase.call(e), "finite" == e ? isFinite(t) : "array" == e && (t instanceof Array || Array.isArray && Array.isArray(t)) ? !0 : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || F.call(t).slice(8, -1).toLowerCase() == e
            }
            function a(t) {
                if ("function" == typeof t || Object(t) !== t) return t;
                var e = new t.constructor;
                for (var n in t) t[T](n) && (e[n] = a(t[n]));
                return e
            }
            function s(t, e) {
                for (var n = 0, r = t.length; r > n; n++) if (t[n] === e) return t.push(t.splice(n, 1)[0])
            }
            function c(t, e, n) {
                function r() {
                    var i = Array.prototype.slice.call(arguments, 0),
                        o = i.join("\u2400"),
                        a = r.cache = r.cache || {},
                        c = r.count = r.count || [];
                    return a[T](o) ? (s(c, o), n ? n(a[o]) : a[o]) : (c.length >= 1e3 && delete a[c.shift()], c.push(o), a[o] = t.apply(e, i), n ? n(a[o]) : a[o])
                }
                return r
            }
            function u(t, e, n, r, i, o) {
                if (null == i) {
                    var a = t - n,
                        s = e - r;
                    return a || s ? (180 + 180 * j.atan2(-s, -a) / R + 360) % 360 : 0
                }
                return u(t, e, i, o) - u(n, r, i, o)
            }
            function l(t) {
                return t % 360 * R / 180
            }
            function h(t) {
                return 180 * t / R % 360
            }
            function f(t) {
                var e = [];
                return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(t, n, r) {
                    return r = r.split(/\s*,\s*|\s+/), "rotate" == n && 1 == r.length && r.push(0, 0), "scale" == n && (r.length > 2 ? r = r.slice(0, 2) : 2 == r.length && r.push(0, 0), 1 == r.length && r.push(r[0], 0, 0)), e.push("skewX" == n ? ["m", 1, 0, j.tan(l(r[0])), 1, 0, 0] : "skewY" == n ? ["m", 1, j.tan(l(r[0])), 0, 1, 0, 0] : [n.charAt(0)].concat(r)), t
                }), e
            }
            function d(t, e) {
                var n = it(t),
                    i = new r.Matrix;
                if (n) for (var o = 0, a = n.length; a > o; o++) {
                    var s, c, u, l, h, f = n[o],
                        d = f.length,
                        p = O(f[0]).toLowerCase(),
                        g = f[0] != p,
                        m = g ? i.invert() : 0;
                    "t" == p && 2 == d ? i.translate(f[1], 0) : "t" == p && 3 == d ? g ? (s = m.x(0, 0), c = m.y(0, 0), u = m.x(f[1], f[2]), l = m.y(f[1], f[2]), i.translate(u - s, l - c)) : i.translate(f[1], f[2]) : "r" == p ? 2 == d ? (h = h || e, i.rotate(f[1], h.x + h.width / 2, h.y + h.height / 2)) : 4 == d && (g ? (u = m.x(f[2], f[3]), l = m.y(f[2], f[3]), i.rotate(f[1], u, l)) : i.rotate(f[1], f[2], f[3])) : "s" == p ? 2 == d || 3 == d ? (h = h || e, i.scale(f[1], f[d - 1], h.x + h.width / 2, h.y + h.height / 2)) : 4 == d ? g ? (u = m.x(f[2], f[3]), l = m.y(f[2], f[3]), i.scale(f[1], f[1], u, l)) : i.scale(f[1], f[1], f[2], f[3]) : 5 == d && (g ? (u = m.x(f[3], f[4]), l = m.y(f[3], f[4]), i.scale(f[1], f[2], u, l)) : i.scale(f[1], f[2], f[3], f[4])) : "m" == p && 7 == d && i.add(f[1], f[2], f[3], f[4], f[5], f[6])
                }
                return i
            }
            function p(t, e) {
                if (null == e) {
                    var n = !0;
                    if (e = t.node.getAttribute("linearGradient" == t.type || "radialGradient" == t.type ? "gradientTransform" : "pattern" == t.type ? "patternTransform" : "transform"), !e) return new r.Matrix;
                    e = f(e)
                } else e = r._.rgTransform.test(e) ? O(e).replace(/\.{3}|\u2026/g, t._.transform || D) : f(e), o(e, "array") && (e = r.path ? r.path.toString.call(e) : O(e)), t._.transform = e;
                var i = d(e, t.getBBox(1));
                return n ? i : void(t.matrix = i)
            }
            function m(t) {
                var e = t.node.ownerSVGElement && S(t.node.ownerSVGElement) || t.node.parentNode && S(t.node.parentNode) || r.select("svg") || r(0, 0),
                    n = e.select("defs"),
                    i = null == n ? !1 : n.node;
                return i || (i = E("defs", e.node).node), i
            }
            function v(t) {
                return t.node.ownerSVGElement && S(t.node.ownerSVGElement) || r.select("svg")
            }
            function y(t, e, n) {
                function r(t) {
                    if (null == t) return D;
                    if (t == +t) return t;
                    i(u, {
                        width: t
                    });
                    try {
                        return u.getBBox().width
                    } catch (e) {
                        return 0
                    }
                }
                function o(t) {
                    if (null == t) return D;
                    if (t == +t) return t;
                    i(u, {
                        height: t
                    });
                    try {
                        return u.getBBox().height
                    } catch (e) {
                        return 0
                    }
                }
                function a(r, i) {
                    null == e ? c[r] = i(t.attr(r) || 0) : r == e && (c = i(null == n ? t.attr(r) || 0 : n))
                }
                var s = v(t).node,
                    c = {},
                    u = s.querySelector(".svg---mgr");
                switch (u || (u = i("rect"), i(u, {
                    x: -9e9,
                    y: -9e9,
                    width: 10,
                    height: 10,
                    "class": "svg---mgr",
                    fill: "none"
                }), s.appendChild(u)), t.type) {
                    case "rect":
                        a("rx", r), a("ry", o);
                    case "image":
                        a("width", r), a("height", o);
                    case "text":
                        a("x", r), a("y", o);
                        break;
                    case "circle":
                        a("cx", r), a("cy", o), a("r", r);
                        break;
                    case "ellipse":
                        a("cx", r), a("cy", o), a("rx", r), a("ry", o);
                        break;
                    case "line":
                        a("x1", r), a("x2", r), a("y1", o), a("y2", o);
                        break;
                    case "marker":
                        a("refX", r), a("markerWidth", r), a("refY", o), a("markerHeight", o);
                        break;
                    case "radialGradient":
                        a("fx", r), a("fy", o);
                        break;
                    case "tspan":
                        a("dx", r), a("dy", o);
                        break;
                    default:
                        a(e, r)
                }
                return s.removeChild(u), c
            }
            function b(t) {
                o(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
                for (var e = 0, n = 0, r = this.node; this[e];) delete this[e++];
                for (e = 0; e < t.length; e++)"set" == t[e].type ? t[e].forEach(function(t) {
                    r.appendChild(t.node)
                }) : r.appendChild(t[e].node);
                var i = r.childNodes;
                for (e = 0; e < i.length; e++) this[n++] = S(i[e]);
                return this
            }
            function w(t) {
                if (t.snap in K) return K[t.snap];
                var e, n = this.id = H();
                try {
                    e = t.ownerSVGElement
                } catch (r) {}
                if (this.node = t, e && (this.paper = new _(e)), this.type = t.tagName, this.anims = {}, this._ = {
                        transform: []
                    }, t.snap = n, K[n] = this, "g" == this.type && (this.add = b), this.type in {
                        g: 1,
                        mask: 1,
                        pattern: 1
                    }) for (var i in _.prototype) _.prototype[T](i) && (this[i] = _.prototype[i])
            }
            function x(t) {
                this.node = t
            }
            function E(t, e) {
                var n = i(t);
                e.appendChild(n);
                var r = S(n);
                return r
            }
            function _(t, e) {
                var n, r, o, a = _.prototype;
                if (t && "svg" == t.tagName) {
                    if (t.snap in K) return K[t.snap];
                    var s = t.ownerDocument;
                    n = new w(t), r = t.getElementsByTagName("desc")[0], o = t.getElementsByTagName("defs")[0], r || (r = i("desc"), r.appendChild(s.createTextNode("Created with Snap")), n.node.appendChild(r)), o || (o = i("defs"), n.node.appendChild(o)), n.defs = o;
                    for (var c in a) a[T](c) && (n[c] = a[c]);
                    n.paper = n.root = n
                } else n = E("svg", k.doc.body), i(n.node, {
                    height: e,
                    version: 1.1,
                    width: t,
                    xmlns: X
                });
                return n
            }
            function S(t) {
                return t ? t instanceof w || t instanceof x ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new _(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new _(t.contentDocument.getElementsByTagName("svg")[0]) : new w(t) : t
            }
            r.version = "0.3.0", r.toString = function() {
                return "Snap v" + this.version
            }, r._ = {};
            var k = {
                win: t,
                doc: t.document
            };
            r._.glob = k;
            var T = "hasOwnProperty",
                O = String,
                C = parseFloat,
                A = parseInt,
                j = Math,
                N = j.max,
                P = j.min,
                M = j.abs,
                R = (j.pow, j.PI),
                D = (j.round, ""),
                I = " ",
                F = Object.prototype.toString,
                $ = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,
                L = "	\n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029",
                B = (r._.separator = new RegExp("[," + L + "]+"), new RegExp("[" + L + "]", "g"), new RegExp("[" + L + "]*,[" + L + "]*")),
                q = {
                    hs: 1,
                    rg: 1
                },
                U = new RegExp("([a-z])[" + L + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + L + "]*,?[" + L + "]*)+)", "ig"),
                z = new RegExp("([rstm])[" + L + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + L + "]*,?[" + L + "]*)+)", "ig"),
                W = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + L + "]*,?[" + L + "]*", "ig"),
                V = 0,
                Y = "S" + (+new Date).toString(36),
                H = function() {
                    return Y + (V++).toString(36)
                },
                G = "http://www.w3.org/1999/xlink",
                X = "http://www.w3.org/2000/svg",
                K = {},
                J = r.url = function(t) {
                    return "url('#" + t + "')"
                };
            r._.$ = i, r._.id = H, r.format = function() {
                var t = /\{([^\}]+)\}/g,
                    e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
                    n = function(t, n, r) {
                        var i = r;
                        return n.replace(e, function(t, e, n, r, o) {
                            e = e || r, i && (e in i && (i = i[e]), "function" == typeof i && o && (i = i()))
                        }), i = (null == i || i == r ? t : i) + ""
                    };
                return function(e, r) {
                    return O(e).replace(t, function(t, e) {
                        return n(t, e, r)
                    })
                }
            }(), r._.clone = a, r._.cacher = c, r.rad = l, r.deg = h, r.angle = u, r.is = o, r.snapTo = function(t, e, n) {
                if (n = o(n, "finite") ? n : 10, o(t, "array")) {
                    for (var r = t.length; r--;) if (M(t[r] - e) <= n) return t[r]
                } else {
                    t = +t;
                    var i = e % t;
                    if (n > i) return e - i;
                    if (i > t - n) return e - i + t
                }
                return e
            }, r.getRGB = c(function(t) {
                if (!t || (t = O(t)).indexOf("-") + 1) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: et
                };
                if ("none" == t) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    toString: et
                };
                if (!(q[T](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = Q(t)), !t) return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: et
                };
                var e, n, i, a, s, c, u = t.match($);
                return u ? (u[2] && (i = A(u[2].substring(5), 16), n = A(u[2].substring(3, 5), 16), e = A(u[2].substring(1, 3), 16)), u[3] && (i = A((s = u[3].charAt(3)) + s, 16), n = A((s = u[3].charAt(2)) + s, 16), e = A((s = u[3].charAt(1)) + s, 16)), u[4] && (c = u[4].split(B), e = C(c[0]), "%" == c[0].slice(-1) && (e *= 2.55), n = C(c[1]), "%" == c[1].slice(-1) && (n *= 2.55), i = C(c[2]), "%" == c[2].slice(-1) && (i *= 2.55), "rgba" == u[1].toLowerCase().slice(0, 4) && (a = C(c[3])), c[3] && "%" == c[3].slice(-1) && (a /= 100)), u[5] ? (c = u[5].split(B), e = C(c[0]), "%" == c[0].slice(-1) && (e /= 100), n = C(c[1]), "%" == c[1].slice(-1) && (n /= 100), i = C(c[2]), "%" == c[2].slice(-1) && (i /= 100), ("deg" == c[0].slice(-3) || "\xb0" == c[0].slice(-1)) && (e /= 360), "hsba" == u[1].toLowerCase().slice(0, 4) && (a = C(c[3])), c[3] && "%" == c[3].slice(-1) && (a /= 100), r.hsb2rgb(e, n, i, a)) : u[6] ? (c = u[6].split(B), e = C(c[0]), "%" == c[0].slice(-1) && (e /= 100), n = C(c[1]), "%" == c[1].slice(-1) && (n /= 100), i = C(c[2]), "%" == c[2].slice(-1) && (i /= 100), ("deg" == c[0].slice(-3) || "\xb0" == c[0].slice(-1)) && (e /= 360), "hsla" == u[1].toLowerCase().slice(0, 4) && (a = C(c[3])), c[3] && "%" == c[3].slice(-1) && (a /= 100), r.hsl2rgb(e, n, i, a)) : (e = P(j.round(e), 255), n = P(j.round(n), 255), i = P(j.round(i), 255), a = P(N(a, 0), 1), u = {
                    r: e,
                    g: n,
                    b: i,
                    toString: et
                }, u.hex = "#" + (16777216 | i | n << 8 | e << 16).toString(16).slice(1), u.opacity = o(a, "finite") ? a : 1, u)) : {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: et
                }
            }, r), r.hsb = c(function(t, e, n) {
                return r.hsb2rgb(t, e, n).hex
            }), r.hsl = c(function(t, e, n) {
                return r.hsl2rgb(t, e, n).hex
            }), r.rgb = c(function(t, e, n, r) {
                if (o(r, "finite")) {
                    var i = j.round;
                    return "rgba(" + [i(t), i(e), i(n), +r.toFixed(2)] + ")"
                }
                return "#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1)
            });
            var Q = function(t) {
                    var e = k.doc.getElementsByTagName("head")[0] || k.doc.getElementsByTagName("svg")[0],
                        n = "rgb(255, 0, 0)";
                    return (Q = c(function(t) {
                        if ("red" == t.toLowerCase()) return n;
                        e.style.color = n, e.style.color = t;
                        var r = k.doc.defaultView.getComputedStyle(e, D).getPropertyValue("color");
                        return r == n ? null : r
                    }))(t)
                },
                Z = function() {
                    return "hsb(" + [this.h, this.s, this.b] + ")"
                },
                tt = function() {
                    return "hsl(" + [this.h, this.s, this.l] + ")"
                },
                et = function() {
                    return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
                },
                nt = function(t, e, n) {
                    if (null == e && o(t, "object") && "r" in t && "g" in t && "b" in t && (n = t.b, e = t.g, t = t.r), null == e && o(t, string)) {
                        var i = r.getRGB(t);
                        t = i.r, e = i.g, n = i.b
                    }
                    return (t > 1 || e > 1 || n > 1) && (t /= 255, e /= 255, n /= 255), [t, e, n]
                },
                rt = function(t, e, n, i) {
                    t = j.round(255 * t), e = j.round(255 * e), n = j.round(255 * n);
                    var a = {
                        r: t,
                        g: e,
                        b: n,
                        opacity: o(i, "finite") ? i : 1,
                        hex: r.rgb(t, e, n),
                        toString: et
                    };
                    return o(i, "finite") && (a.opacity = i), a
                };
            r.color = function(t) {
                var e;
                return o(t, "object") && "h" in t && "s" in t && "b" in t ? (e = r.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : o(t, "object") && "h" in t && "s" in t && "l" in t ? (e = r.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (o(t, "string") && (t = r.getRGB(t)), o(t, "object") && "r" in t && "g" in t && "b" in t && !("error" in t) ? (e = r.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = r.rgb2hsb(t), t.v = e.b) : (t = {
                    hex: "none"
                }, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = et, t
            }, r.hsb2rgb = function(t, e, n, r) {
                o(t, "object") && "h" in t && "s" in t && "b" in t && (n = t.b, e = t.s, t = t.h, r = t.o), t *= 360;
                var i, a, s, c, u;
                return t = t % 360 / 60, u = n * e, c = u * (1 - M(t % 2 - 1)), i = a = s = n - u, t = ~~t, i += [u, c, 0, 0, c, u][t], a += [c, u, u, c, 0, 0][t], s += [0, 0, c, u, u, c][t], rt(i, a, s, r)
            }, r.hsl2rgb = function(t, e, n, r) {
                o(t, "object") && "h" in t && "s" in t && "l" in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), t *= 360;
                var i, a, s, c, u;
                return t = t % 360 / 60, u = 2 * e * (.5 > n ? n : 1 - n), c = u * (1 - M(t % 2 - 1)), i = a = s = n - u / 2, t = ~~t, i += [u, c, 0, 0, c, u][t], a += [c, u, u, c, 0, 0][t], s += [0, 0, c, u, u, c][t], rt(i, a, s, r)
            }, r.rgb2hsb = function(t, e, n) {
                n = nt(t, e, n), t = n[0], e = n[1], n = n[2];
                var r, i, o, a;
                return o = N(t, e, n), a = o - P(t, e, n), r = 0 == a ? null : o == t ? (e - n) / a : o == e ? (n - t) / a + 2 : (t - e) / a + 4, r = (r + 360) % 6 * 60 / 360, i = 0 == a ? 0 : a / o, {
                    h: r,
                    s: i,
                    b: o,
                    toString: Z
                }
            }, r.rgb2hsl = function(t, e, n) {
                n = nt(t, e, n), t = n[0], e = n[1], n = n[2];
                var r, i, o, a, s, c;
                return a = N(t, e, n), s = P(t, e, n), c = a - s, r = 0 == c ? null : a == t ? (e - n) / c : a == e ? (n - t) / c + 2 : (t - e) / c + 4, r = (r + 360) % 6 * 60 / 360, o = (a + s) / 2, i = 0 == c ? 0 : .5 > o ? c / (2 * o) : c / (2 - 2 * o), {
                    h: r,
                    s: i,
                    l: o,
                    toString: tt
                }
            }, r.parsePathString = function(t) {
                if (!t) return null;
                var e = r.path(t);
                if (e.arr) return r.path.clone(e.arr);
                var n = {
                        a: 7,
                        c: 6,
                        o: 2,
                        h: 1,
                        l: 2,
                        m: 2,
                        r: 4,
                        q: 4,
                        s: 4,
                        t: 2,
                        v: 1,
                        u: 3,
                        z: 0
                    },
                    i = [];
                return o(t, "array") && o(t[0], "array") && (i = r.path.clone(t)), i.length || O(t).replace(U, function(t, e, r) {
                    var o = [],
                        a = e.toLowerCase();
                    if (r.replace(W, function(t, e) {
                            e && o.push(+e)
                        }), "m" == a && o.length > 2 && (i.push([e].concat(o.splice(0, 2))), a = "l", e = "m" == e ? "l" : "L"), "o" == a && 1 == o.length && i.push([e, o[0]]), "r" == a) i.push([e].concat(o));
                    else for (; o.length >= n[a] && (i.push([e].concat(o.splice(0, n[a]))), n[a]););
                }), i.toString = r.path.toString, e.arr = r.path.clone(i), i
            };
            var it = r.parseTransformString = function(t) {
                if (!t) return null;
                var e = [];
                return o(t, "array") && o(t[0], "array") && (e = r.path.clone(t)), e.length || O(t).replace(z, function(t, n, r) {
                    var i = [];
                    n.toLowerCase(), r.replace(W, function(t, e) {
                        e && i.push(+e)
                    }), e.push([n].concat(i))
                }), e.toString = r.path.toString, e
            };
            r._.svgTransform2string = f, r._.rgTransform = new RegExp("^[a-z][" + L + "]*-?\\.?\\d", "i"), r._.transform2matrix = d, r._unit2px = y, k.doc.contains || k.doc.compareDocumentPosition ?
                function(t, e) {
                    var n = 9 == t.nodeType ? t.documentElement : t,
                        r = e && e.parentNode;
                    return t == r || !(!r || 1 != r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                } : function(t, e) {
                if (e) for (; e;) if (e = e.parentNode, e == t) return !0;
                return !1
            }, r._.getSomeDefs = m, r._.getSomeSVG = v, r.select = function(t) {
                return S(k.doc.querySelector(t))
            }, r.selectAll = function(t) {
                for (var e = k.doc.querySelectorAll(t), n = (r.set || Array)(), i = 0; i < e.length; i++) n.push(S(e[i]));
                return n
            }, setInterval(function() {
                for (var t in K) if (K[T](t)) {
                    var e = K[t],
                        n = e.node;
                    ("svg" != e.type && !n.ownerSVGElement || "svg" == e.type && (!n.parentNode || "ownerSVGElement" in n.parentNode && !n.ownerSVGElement)) && delete K[t]
                }
            }, 1e4), function(t) {
                function a(t) {
                    function e(t, e) {
                        var n = i(t.node, e);
                        n = n && n.match(a), n = n && n[2], n && "#" == n.charAt() && (n = n.substring(1), n && (c[n] = (c[n] || []).concat(function(n) {
                            var r = {};
                            r[e] = J(n), i(t.node, r)
                        })))
                    }
                    function n(t) {
                        var e = i(t.node, "xlink:href");
                        e && "#" == e.charAt() && (e = e.substring(1), e && (c[e] = (c[e] || []).concat(function(e) {
                            t.attr("xlink:href", "#" + e)
                        })))
                    }
                    for (var r, o = t.selectAll("*"), a = /^\s*url\(("|'|)(.*)\1\)\s*$/, s = [], c = {}, u = 0, l = o.length; l > u; u++) {
                        r = o[u], e(r, "fill"), e(r, "stroke"), e(r, "filter"), e(r, "mask"), e(r, "clip-path"), n(r);
                        var h = i(r.node, "id");
                        h && (i(r.node, {
                            id: r.id
                        }), s.push({
                            old: h,
                            id: r.id
                        }))
                    }
                    for (u = 0, l = s.length; l > u; u++) {
                        var f = c[s[u].old];
                        if (f) for (var d = 0, p = f.length; p > d; d++) f[d](s[u].id)
                    }
                }
                function s(t, e, n) {
                    return function(r) {
                        var i = r.slice(t, e);
                        return 1 == i.length && (i = i[0]), n ? n(i) : i
                    }
                }
                function c(t) {
                    return function() {
                        var e = t ? "<" + this.type : "",
                            n = this.node.attributes,
                            r = this.node.childNodes;
                        if (t) for (var i = 0, o = n.length; o > i; i++) e += " " + n[i].name + '="' + n[i].value.replace(/"/g, '\\"') + '"';
                        if (r.length) {
                            for (t && (e += ">"), i = 0, o = r.length; o > i; i++) 3 == r[i].nodeType ? e += r[i].nodeValue : 1 == r[i].nodeType && (e += S(r[i]).toString());
                            t && (e += "</" + this.type + ">")
                        } else t && (e += "/>");
                        return e
                    }
                }
                t.attr = function(t, n) {
                    var r = this;
                    if (r.node, !t) return r;
                    if (o(t, "string")) {
                        if (!(arguments.length > 1)) return e("snap.util.getattr." + t, r).firstDefined();
                        var i = {};
                        i[t] = n, t = i
                    }
                    for (var a in t) t[T](a) && e("snap.util.attr." + a, r, t[a]);
                    return r
                }, t.getBBox = function(t) {
                    if (!r.Matrix || !r.path) return this.node.getBBox();
                    var e = this,
                        n = new r.Matrix;
                    if (e.removed) return r._.box();
                    for (;
                        "use" == e.type;) if (t || (n = n.add(e.transform().localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))), e.original) e = e.original;
                    else {
                        var i = e.attr("xlink:href");
                        e = e.original = e.node.ownerDocument.getElementById(i.substring(i.indexOf("#") + 1))
                    }
                    var o = e._,
                        a = r.path.get[e.type] || r.path.get.deflt;
                    try {
                        return t ? (o.bboxwt = a ? r.path.getBBox(e.realPath = a(e)) : r._.box(e.node.getBBox()), r._.box(o.bboxwt)) : (e.realPath = a(e), e.matrix = e.transform().localMatrix, o.bbox = r.path.getBBox(r.path.map(e.realPath, n.add(e.matrix))), r._.box(o.bbox))
                    } catch (s) {
                        return r._.box()
                    }
                };
                var u = function() {
                    return this.string
                };
                t.transform = function(t) {
                    var e = this._;
                    if (null == t) {
                        for (var n, o = this, a = new r.Matrix(this.node.getCTM()), s = p(this), c = [s], l = new r.Matrix, h = s.toTransformString(), f = O(s) == O(this.matrix) ? O(e.transform) : h;
                             "svg" != o.type && (o = o.parent());) c.push(p(o));
                        for (n = c.length; n--;) l.add(c[n]);
                        return {
                            string: f,
                            globalMatrix: a,
                            totalMatrix: l,
                            localMatrix: s,
                            diffMatrix: a.clone().add(s.invert()),
                            global: a.toTransformString(),
                            total: l.toTransformString(),
                            local: h,
                            toString: u
                        }
                    }
                    return t instanceof r.Matrix ? this.matrix = t : p(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? i(this.node, {
                        gradientTransform: this.matrix
                    }) : "pattern" == this.type ? i(this.node, {
                        patternTransform: this.matrix
                    }) : i(this.node, {
                        transform: this.matrix
                    })), this
                }, t.parent = function() {
                    return S(this.node.parentNode)
                }, t.append = t.add = function(t) {
                    if (t) {
                        if ("set" == t.type) {
                            var e = this;
                            return t.forEach(function(t) {
                                e.add(t)
                            }), this
                        }
                        t = S(t), this.node.appendChild(t.node), t.paper = this.paper
                    }
                    return this
                }, t.appendTo = function(t) {
                    return t && (t = S(t), t.append(this)), this
                }, t.prepend = function(t) {
                    if (t) {
                        if ("set" == t.type) {
                            var e, n = this;
                            return t.forEach(function(t) {
                                e ? e.after(t) : n.prepend(t), e = t
                            }), this
                        }
                        t = S(t);
                        var r = t.parent();
                        this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), r && r.add()
                    }
                    return this
                }, t.prependTo = function(t) {
                    return t = S(t), t.prepend(this), this
                }, t.before = function(t) {
                    if ("set" == t.type) {
                        var e = this;
                        return t.forEach(function(t) {
                            var n = t.parent();
                            e.node.parentNode.insertBefore(t.node, e.node), n && n.add()
                        }), this.parent().add(), this
                    }
                    t = S(t);
                    var n = t.parent();
                    return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), n && n.add(), t.paper = this.paper, this
                }, t.after = function(t) {
                    t = S(t);
                    var e = t.parent();
                    return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
                }, t.insertBefore = function(t) {
                    t = S(t);
                    var e = this.parent();
                    return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
                }, t.insertAfter = function(t) {
                    t = S(t);
                    var e = this.parent();
                    return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
                }, t.remove = function() {
                    var t = this.parent();
                    return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
                }, t.select = function(t) {
                    return S(this.node.querySelector(t))
                }, t.selectAll = function(t) {
                    for (var e = this.node.querySelectorAll(t), n = (r.set || Array)(), i = 0; i < e.length; i++) n.push(S(e[i]));
                    return n
                }, t.asPX = function(t, e) {
                    return null == e && (e = this.attr(t)), +y(this, t, e)
                }, t.use = function() {
                    var t, e = this.node.id;
                    return e || (e = this.id, i(this.node, {
                        id: e
                    })), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? E(this.type, this.node.parentNode) : E("use", this.node.parentNode), i(t.node, {
                        "xlink:href": "#" + e
                    }), t.original = this, t
                };
                var l = /\S+/g;
                t.addClass = function(t) {
                    var e, n, r, i, o = (t || "").match(l) || [],
                        a = this.node,
                        s = a.className.baseVal,
                        c = s.match(l) || [];
                    if (o.length) {
                        for (e = 0; r = o[e++];) n = c.indexOf(r), ~n || c.push(r);
                        i = c.join(" "), s != i && (a.className.baseVal = i)
                    }
                    return this
                }, t.removeClass = function(t) {
                    var e, n, r, i, o = (t || "").match(l) || [],
                        a = this.node,
                        s = a.className.baseVal,
                        c = s.match(l) || [];
                    if (c.length) {
                        for (e = 0; r = o[e++];) n = c.indexOf(r), ~n && c.splice(n, 1);
                        i = c.join(" "), s != i && (a.className.baseVal = i)
                    }
                    return this
                }, t.hasClass = function(t) {
                    var e = this.node,
                        n = e.className.baseVal,
                        r = n.match(l) || [];
                    return !!~r.indexOf(t)
                }, t.toggleClass = function(t, e) {
                    if (null != e) return e ? this.addClass(t) : this.removeClass(t);
                    var n, r, i, o, a = (t || "").match(l) || [],
                        s = this.node,
                        c = s.className.baseVal,
                        u = c.match(l) || [];
                    for (n = 0; i = a[n++];) r = u.indexOf(i), ~r ? u.splice(r, 1) : u.push(i);
                    return o = u.join(" "), c != o && (s.className.baseVal = o), this
                }, t.clone = function() {
                    var t = S(this.node.cloneNode(!0));
                    return i(t.node, "id") && i(t.node, {
                        id: t.id
                    }), a(t), t.insertAfter(this), t
                }, t.toDefs = function() {
                    var t = m(this);
                    return t.appendChild(this.node), this
                }, t.pattern = t.toPattern = function(t, e, n, r) {
                    var a = E("pattern", m(this));
                    return null == t && (t = this.getBBox()), o(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, t = t.x), i(a.node, {
                        x: t,
                        y: e,
                        width: n,
                        height: r,
                        patternUnits: "userSpaceOnUse",
                        id: a.id,
                        viewBox: [t, e, n, r].join(" ")
                    }), a.node.appendChild(this.node), a
                }, t.marker = function(t, e, n, r, a, s) {
                    var c = E("marker", m(this));
                    return null == t && (t = this.getBBox()), o(t, "object") && "x" in t && (e = t.y, n = t.width, r = t.height, a = t.refX || t.cx, s = t.refY || t.cy, t = t.x), i(c.node, {
                        viewBox: [t, e, n, r].join(I),
                        markerWidth: n,
                        markerHeight: r,
                        orient: "auto",
                        refX: a || 0,
                        refY: s || 0,
                        id: c.id
                    }), c.node.appendChild(this.node), c
                };
                var h = function(t, e, r, i) {
                    "function" != typeof r || r.length || (i = r, r = n.linear), this.attr = t, this.dur = e, r && (this.easing = r), i && (this.callback = i)
                };
                r._.Animation = h, r.animation = function(t, e, n, r) {
                    return new h(t, e, n, r)
                }, t.inAnim = function() {
                    var t = this,
                        e = [];
                    for (var n in t.anims) t.anims[T](n) && !
                        function(t) {
                            e.push({
                                anim: new h(t._attrs, t.dur, t.easing, t._callback),
                                mina: t,
                                curStatus: t.status(),
                                status: function(e) {
                                    return t.status(e)
                                },
                                stop: function() {
                                    t.stop()
                                }
                            })
                        }(t.anims[n]);
                    return e
                }, r.animate = function(t, r, i, o, a, s) {
                    "function" != typeof a || a.length || (s = a, a = n.linear);
                    var c = n.time(),
                        u = n(t, r, c, c + o, n.time, i, a);
                    return s && e.once("mina.finish." + u.id, s), u
                }, t.stop = function() {
                    for (var t = this.inAnim(), e = 0, n = t.length; n > e; e++) t[e].stop();
                    return this
                }, t.animate = function(t, r, i, a) {
                    "function" != typeof i || i.length || (a = i, i = n.linear), t instanceof h && (a = t.callback, i = t.easing, r = i.dur, t = t.attr);
                    var c, u, l, f, d = [],
                        p = [],
                        g = {},
                        m = this;
                    for (var v in t) if (t[T](v)) {
                        m.equal ? (f = m.equal(v, O(t[v])), c = f.from, u = f.to, l = f.f) : (c = +m.attr(v), u = +t[v]);
                        var y = o(c, "array") ? c.length : 1;
                        g[v] = s(d.length, d.length + y, l), d = d.concat(c), p = p.concat(u)
                    }
                    var b = n.time(),
                        w = n(d, p, b, b + r, n.time, function(t) {
                            var e = {};
                            for (var n in g) g[T](n) && (e[n] = g[n](t));
                            m.attr(e)
                        }, i);
                    return m.anims[w.id] = w, w._attrs = t, w._callback = a, e("snap.animcreated." + m.id, w), e.once("mina.finish." + w.id, function() {
                        delete m.anims[w.id], a && a.call(m)
                    }), e.once("mina.stop." + w.id, function() {
                        delete m.anims[w.id]
                    }), m
                };
                var f = {};
                t.data = function(t, n) {
                    var i = f[this.id] = f[this.id] || {};
                    if (0 == arguments.length) return e("snap.data.get." + this.id, this, i, null), i;
                    if (1 == arguments.length) {
                        if (r.is(t, "object")) {
                            for (var o in t) t[T](o) && this.data(o, t[o]);
                            return this
                        }
                        return e("snap.data.get." + this.id, this, i[t], t), i[t]
                    }
                    return i[t] = n, e("snap.data.set." + this.id, this, n, t), this
                }, t.removeData = function(t) {
                    return null == t ? f[this.id] = {} : f[this.id] && delete f[this.id][t], this
                }, t.outerSVG = t.toString = c(1), t.innerSVG = c()
            }(w.prototype), r.parse = function(t) {
                var e = k.doc.createDocumentFragment(),
                    n = !0,
                    r = k.doc.createElement("div");
                if (t = O(t), t.match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", n = !1), r.innerHTML = t, t = r.getElementsByTagName("svg")[0]) if (n) e = t;
                else for (; t.firstChild;) e.appendChild(t.firstChild);
                return r.innerHTML = D, new x(e)
            }, x.prototype.select = w.prototype.select, x.prototype.selectAll = w.prototype.selectAll, r.fragment = function() {
                for (var t = Array.prototype.slice.call(arguments, 0), e = k.doc.createDocumentFragment(), n = 0, i = t.length; i > n; n++) {
                    var o = t[n];
                    o.node && o.node.nodeType && e.appendChild(o.node), o.nodeType && e.appendChild(o), "string" == typeof o && e.appendChild(r.parse(o).node)
                }
                return new x(e)
            }, r._.make = E, r._.wrap = S, _.prototype.el = function(t, e) {
                var n = E(t, this.node);
                return e && n.attr(e), n
            }, e.on("snap.util.getattr", function() {
                var t = e.nt();
                t = t.substring(t.lastIndexOf(".") + 1);
                var n = t.replace(/[A-Z]/g, function(t) {
                    return "-" + t.toLowerCase()
                });
                return ot[T](n) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(n) : i(this.node, t)
            });
            var ot = {
                "alignment-baseline": 0,
                "baseline-shift": 0,
                clip: 0,
                "clip-path": 0,
                "clip-rule": 0,
                color: 0,
                "color-interpolation": 0,
                "color-interpolation-filters": 0,
                "color-profile": 0,
                "color-rendering": 0,
                cursor: 0,
                direction: 0,
                display: 0,
                "dominant-baseline": 0,
                "enable-background": 0,
                fill: 0,
                "fill-opacity": 0,
                "fill-rule": 0,
                filter: 0,
                "flood-color": 0,
                "flood-opacity": 0,
                font: 0,
                "font-family": 0,
                "font-size": 0,
                "font-size-adjust": 0,
                "font-stretch": 0,
                "font-style": 0,
                "font-variant": 0,
                "font-weight": 0,
                "glyph-orientation-horizontal": 0,
                "glyph-orientation-vertical": 0,
                "image-rendering": 0,
                kerning: 0,
                "letter-spacing": 0,
                "lighting-color": 0,
                marker: 0,
                "marker-end": 0,
                "marker-mid": 0,
                "marker-start": 0,
                mask: 0,
                opacity: 0,
                overflow: 0,
                "pointer-events": 0,
                "shape-rendering": 0,
                "stop-color": 0,
                "stop-opacity": 0,
                stroke: 0,
                "stroke-dasharray": 0,
                "stroke-dashoffset": 0,
                "stroke-linecap": 0,
                "stroke-linejoin": 0,
                "stroke-miterlimit": 0,
                "stroke-opacity": 0,
                "stroke-width": 0,
                "text-anchor": 0,
                "text-decoration": 0,
                "text-rendering": 0,
                "unicode-bidi": 0,
                visibility: 0,
                "word-spacing": 0,
                "writing-mode": 0
            };
            e.on("snap.util.attr", function(t) {
                var n = e.nt(),
                    r = {};
                n = n.substring(n.lastIndexOf(".") + 1), r[n] = t;
                var o = n.replace(/-(\w)/gi, function(t, e) {
                        return e.toUpperCase()
                    }),
                    a = n.replace(/[A-Z]/g, function(t) {
                        return "-" + t.toLowerCase()
                    });
                ot[T](a) ? this.node.style[o] = null == t ? D : t : i(this.node, r)
            }), function() {}(_.prototype), r.ajax = function(t, n, r, i) {
                var a = new XMLHttpRequest,
                    s = H();
                if (a) {
                    if (o(n, "function")) i = r, r = n, n = null;
                    else if (o(n, "object")) {
                        var c = [];
                        for (var u in n) n.hasOwnProperty(u) && c.push(encodeURIComponent(u) + "=" + encodeURIComponent(n[u]));
                        n = c.join("&")
                    }
                    return a.open(n ? "POST" : "GET", t, !0), n && (a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), r && (e.once("snap.ajax." + s + ".0", r), e.once("snap.ajax." + s + ".200", r), e.once("snap.ajax." + s + ".304", r)), a.onreadystatechange = function() {
                        4 == a.readyState && e("snap.ajax." + s + "." + a.status, i, a)
                    }, 4 == a.readyState ? a : (a.send(n), a)
                }
            }, r.load = function(t, e, n) {
                r.ajax(t, function(t) {
                    var i = r.parse(t.responseText);
                    n ? e.call(n, i) : e(i)
                })
            };
            var at = function(t) {
                var e = t.getBoundingClientRect(),
                    n = t.ownerDocument,
                    r = n.body,
                    i = n.documentElement,
                    o = i.clientTop || r.clientTop || 0,
                    a = i.clientLeft || r.clientLeft || 0,
                    s = e.top + (g.win.pageYOffset || i.scrollTop || r.scrollTop) - o,
                    c = e.left + (g.win.pageXOffset || i.scrollLeft || r.scrollLeft) - a;
                return {
                    y: s,
                    x: c
                }
            };
            return r.getElementByPoint = function(t, e) {
                var n = this,
                    r = (n.canvas, k.doc.elementFromPoint(t, e));
                if (k.win.opera && "svg" == r.tagName) {
                    var i = at(r),
                        o = r.createSVGRect();
                    o.x = t - i.x, o.y = e - i.y, o.width = o.height = 1;
                    var a = r.getIntersectionList(o, null);
                    a.length && (r = a[a.length - 1])
                }
                return r ? S(r) : null
            }, r.plugin = function(t) {
                t(r, w, _, k, x)
            }, k.win.Snap = r, r
        }();
    return r.plugin(function(t) {
        function e(t, e, r, i, o, a) {
            return null == e && "[object SVGMatrix]" == n.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f)) : void(null != t ? (this.a = +t, this.b = +e, this.c = +r, this.d = +i, this.e = +o, this.f = +a) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
        }
        var n = Object.prototype.toString,
            r = String,
            i = Math,
            o = "";
        !
            function(n) {
                function a(t) {
                    return t[0] * t[0] + t[1] * t[1]
                }
                function s(t) {
                    var e = i.sqrt(a(t));
                    t[0] && (t[0] /= e), t[1] && (t[1] /= e)
                }
                n.add = function(t, n, r, i, o, a) {
                    var s, c, u, l, h = [
                            [],
                            [],
                            []
                        ],
                        f = [
                            [this.a, this.c, this.e],
                            [this.b, this.d, this.f],
                            [0, 0, 1]
                        ],
                        d = [
                            [t, r, o],
                            [n, i, a],
                            [0, 0, 1]
                        ];
                    for (t && t instanceof e && (d = [
                        [t.a, t.c, t.e],
                        [t.b, t.d, t.f],
                        [0, 0, 1]
                    ]), s = 0; 3 > s; s++) for (c = 0; 3 > c; c++) {
                        for (l = 0, u = 0; 3 > u; u++) l += f[s][u] * d[u][c];
                        h[s][c] = l
                    }
                    return this.a = h[0][0], this.b = h[1][0], this.c = h[0][1], this.d = h[1][1], this.e = h[0][2], this.f = h[1][2], this
                }, n.invert = function() {
                    var t = this,
                        n = t.a * t.d - t.b * t.c;
                    return new e(t.d / n, -t.b / n, -t.c / n, t.a / n, (t.c * t.f - t.d * t.e) / n, (t.b * t.e - t.a * t.f) / n)
                }, n.clone = function() {
                    return new e(this.a, this.b, this.c, this.d, this.e, this.f)
                }, n.translate = function(t, e) {
                    return this.add(1, 0, 0, 1, t, e)
                }, n.scale = function(t, e, n, r) {
                    return null == e && (e = t), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(t, 0, 0, e, 0, 0), (n || r) && this.add(1, 0, 0, 1, -n, -r), this
                }, n.rotate = function(e, n, r) {
                    e = t.rad(e), n = n || 0, r = r || 0;
                    var o = +i.cos(e).toFixed(9),
                        a = +i.sin(e).toFixed(9);
                    return this.add(o, a, -a, o, n, r), this.add(1, 0, 0, 1, -n, -r)
                }, n.x = function(t, e) {
                    return t * this.a + e * this.c + this.e
                }, n.y = function(t, e) {
                    return t * this.b + e * this.d + this.f
                }, n.get = function(t) {
                    return +this[r.fromCharCode(97 + t)].toFixed(4)
                }, n.toString = function() {
                    return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
                }, n.offset = function() {
                    return [this.e.toFixed(4), this.f.toFixed(4)]
                }, n.determinant = function() {
                    return this.a * this.d - this.b * this.c
                }, n.split = function() {
                    var e = {};
                    e.dx = this.e, e.dy = this.f;
                    var n = [
                        [this.a, this.c],
                        [this.b, this.d]
                    ];
                    e.scalex = i.sqrt(a(n[0])), s(n[0]), e.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1], n[1] = [n[1][0] - n[0][0] * e.shear, n[1][1] - n[0][1] * e.shear], e.scaley = i.sqrt(a(n[1])), s(n[1]), e.shear /= e.scaley, this.determinant() < 0 && (e.scalex = -e.scalex);
                    var r = -n[0][1],
                        o = n[1][1];
                    return 0 > o ? (e.rotate = t.deg(i.acos(o)), 0 > r && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(i.asin(r)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
                }, n.toTransformString = function(t) {
                    var e = t || this.split();
                    return +e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : o) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : o) + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : o))
                }
            }(e.prototype), t.Matrix = e, t.matrix = function(t, n, r, i, o, a) {
            return new e(t, n, r, i, o, a)
        }
    }), r.plugin(function(t, n, r, i, o) {
        function a(r) {
            return function(i) {
                if (e.stop(), i instanceof o && 1 == i.node.childNodes.length && ("radialGradient" == i.node.firstChild.tagName || "linearGradient" == i.node.firstChild.tagName || "pattern" == i.node.firstChild.tagName) && (i = i.node.firstChild, d(this).appendChild(i), i = h(i)), i instanceof n) if ("radialGradient" == i.type || "linearGradient" == i.type || "pattern" == i.type) {
                    i.node.id || g(i.node, {
                        id: i.id
                    });
                    var a = m(i.node.id)
                } else a = i.attr(r);
                else if (a = t.color(i), a.error) {
                    var s = t(d(this).ownerSVGElement).gradient(i);
                    s ? (s.node.id || g(s.node, {
                        id: s.id
                    }), a = m(s.node.id)) : a = i
                } else a = v(a);
                var c = {};
                c[r] = a, g(this.node, c), this.node.style[r] = b
            }
        }
        function s(t) {
            e.stop(), t == +t && (t += "px"), this.node.style.fontSize = t
        }
        function c(t) {
            for (var e = [], n = t.childNodes, r = 0, i = n.length; i > r; r++) {
                var o = n[r];
                3 == o.nodeType && e.push(o.nodeValue), "tspan" == o.tagName && e.push(1 == o.childNodes.length && 3 == o.firstChild.nodeType ? o.firstChild.nodeValue : c(o))
            }
            return e
        }
        function u() {
            return e.stop(), this.node.style.fontSize
        }
        var l = t._.make,
            h = t._.wrap,
            f = t.is,
            d = t._.getSomeDefs,
            p = /^url\(#?([^)]+)\)$/,
            g = t._.$,
            m = t.url,
            v = String,
            y = t._.separator,
            b = "";
        e.on("snap.util.attr.mask", function(t) {
            if (t instanceof n || t instanceof o) {
                if (e.stop(), t instanceof o && 1 == t.node.childNodes.length && (t = t.node.firstChild, d(this).appendChild(t), t = h(t)), "mask" == t.type) var r = t;
                else r = l("mask", d(this)), r.node.appendChild(t.node);
                !r.node.id && g(r.node, {
                    id: r.id
                }), g(this.node, {
                    mask: m(r.id)
                })
            }
        }), function(t) {
            e.on("snap.util.attr.clip", t), e.on("snap.util.attr.clip-path", t), e.on("snap.util.attr.clipPath", t)
        }(function(t) {
            if (t instanceof n || t instanceof o) {
                if (e.stop(), "clipPath" == t.type) var r = t;
                else r = l("clipPath", d(this)), r.node.appendChild(t.node), !r.node.id && g(r.node, {
                    id: r.id
                });
                g(this.node, {
                    "clip-path": m(r.id)
                })
            }
        }), e.on("snap.util.attr.fill", a("fill")), e.on("snap.util.attr.stroke", a("stroke"));
        var w = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        e.on("snap.util.grad.parse", function(t) {
            t = v(t);
            var e = t.match(w);
            if (!e) return null;
            var n = e[1],
                r = e[2],
                i = e[3];
            return r = r.split(/\s*,\s*/).map(function(t) {
                return +t == t ? +t : t
            }), 1 == r.length && 0 == r[0] && (r = []), i = i.split("-"), i = i.map(function(t) {
                t = t.split(":");
                var e = {
                    color: t[0]
                };
                return t[1] && (e.offset = parseFloat(t[1])), e
            }), {
                type: n,
                params: r,
                stops: i
            }
        }), e.on("snap.util.attr.d", function(n) {
            e.stop(), f(n, "array") && f(n[0], "array") && (n = t.path.toString.call(n)), n = v(n), n.match(/[ruo]/i) && (n = t.path.toAbsolute(n)), g(this.node, {
                d: n
            })
        })(-1), e.on("snap.util.attr.#text", function(t) {
            e.stop(), t = v(t);
            for (var n = i.doc.createTextNode(t); this.node.firstChild;) this.node.removeChild(this.node.firstChild);
            this.node.appendChild(n)
        })(-1), e.on("snap.util.attr.path", function(t) {
            e.stop(), this.attr({
                d: t
            })
        })(-1), e.on("snap.util.attr.class", function(t) {
            e.stop(), this.node.className.baseVal = t
        })(-1), e.on("snap.util.attr.viewBox", function(t) {
            var n;
            n = f(t, "object") && "x" in t ? [t.x, t.y, t.width, t.height].join(" ") : f(t, "array") ? t.join(" ") : t, g(this.node, {
                viewBox: n
            }), e.stop()
        })(-1), e.on("snap.util.attr.transform", function(t) {
            this.transform(t), e.stop()
        })(-1), e.on("snap.util.attr.r", function(t) {
            "rect" == this.type && (e.stop(), g(this.node, {
                rx: t,
                ry: t
            }))
        })(-1), e.on("snap.util.attr.textpath", function(t) {
            if (e.stop(), "text" == this.type) {
                var r, i, o;
                if (!t && this.textPath) {
                    for (i = this.textPath; i.node.firstChild;) this.node.appendChild(i.node.firstChild);
                    return i.remove(), void delete this.textPath
                }
                if (f(t, "string")) {
                    var a = d(this),
                        s = h(a.parentNode).path(t);
                    a.appendChild(s.node), r = s.id, s.attr({
                        id: r
                    })
                } else t = h(t), t instanceof n && (r = t.attr("id"), r || (r = t.id, t.attr({
                    id: r
                })));
                if (r) if (i = this.textPath, o = this.node, i) i.attr({
                    "xlink:href": "#" + r
                });
                else {
                    for (i = g("textPath", {
                        "xlink:href": "#" + r
                    }); o.firstChild;) i.appendChild(o.firstChild);
                    o.appendChild(i), this.textPath = h(i)
                }
            }
        })(-1), e.on("snap.util.attr.text", function(t) {
            if ("text" == this.type) {
                for (var n = this.node, r = function(t) {
                    var e = g("tspan");
                    if (f(t, "array")) for (var n = 0; n < t.length; n++) e.appendChild(r(t[n]));
                    else e.appendChild(i.doc.createTextNode(t));
                    return e.normalize && e.normalize(), e
                }; n.firstChild;) n.removeChild(n.firstChild);
                for (var o = r(t); o.firstChild;) n.appendChild(o.firstChild)
            }
            e.stop()
        })(-1), e.on("snap.util.attr.fontSize", s)(-1), e.on("snap.util.attr.font-size", s)(-1), e.on("snap.util.getattr.transform", function() {
            return e.stop(), this.transform()
        })(-1), e.on("snap.util.getattr.textpath", function() {
            return e.stop(), this.textPath
        })(-1), function() {
            function n(n) {
                return function() {
                    e.stop();
                    var r = i.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + n);
                    return "none" == r ? r : t(i.doc.getElementById(r.match(p)[1]))
                }
            }
            function r(t) {
                return function(n) {
                    e.stop();
                    var r = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
                    if ("" == n || !n) return void(this.node.style[r] = "none");
                    if ("marker" == n.type) {
                        var i = n.node.id;
                        return i || g(n.node, {
                            id: n.id
                        }), void(this.node.style[r] = m(i))
                    }
                }
            }
            e.on("snap.util.getattr.marker-end", n("end"))(-1), e.on("snap.util.getattr.markerEnd", n("end"))(-1), e.on("snap.util.getattr.marker-start", n("start"))(-1), e.on("snap.util.getattr.markerStart", n("start"))(-1), e.on("snap.util.getattr.marker-mid", n("mid"))(-1), e.on("snap.util.getattr.markerMid", n("mid"))(-1), e.on("snap.util.attr.marker-end", r("end"))(-1), e.on("snap.util.attr.markerEnd", r("end"))(-1), e.on("snap.util.attr.marker-start", r("start"))(-1), e.on("snap.util.attr.markerStart", r("start"))(-1), e.on("snap.util.attr.marker-mid", r("mid"))(-1), e.on("snap.util.attr.markerMid", r("mid"))(-1)
        }(), e.on("snap.util.getattr.r", function() {
            return "rect" == this.type && g(this.node, "rx") == g(this.node, "ry") ? (e.stop(), g(this.node, "rx")) : void 0
        })(-1), e.on("snap.util.getattr.text", function() {
            if ("text" == this.type || "tspan" == this.type) {
                e.stop();
                var t = c(this.node);
                return 1 == t.length ? t[0] : t
            }
        })(-1), e.on("snap.util.getattr.#text", function() {
            return this.node.textContent
        })(-1), e.on("snap.util.getattr.viewBox", function() {
            e.stop();
            var n = g(this.node, "viewBox");
            return n ? (n = n.split(y), t._.box(+n[0], +n[1], +n[2], +n[3])) : void 0
        })(-1), e.on("snap.util.getattr.points", function() {
            var t = g(this.node, "points");
            return e.stop(), t ? t.split(y) : void 0
        })(-1), e.on("snap.util.getattr.path", function() {
            var t = g(this.node, "d");
            return e.stop(), t
        })(-1), e.on("snap.util.getattr.class", function() {
            return this.node.className.baseVal
        })(-1), e.on("snap.util.getattr.fontSize", u)(-1), e.on("snap.util.getattr.font-size", u)(-1)
    }), r.plugin(function() {
        function t(t) {
            return t
        }
        function n(t) {
            return function(e) {
                return +e.toFixed(3) + t
            }
        }
        var r = {
                "+": function(t, e) {
                    return t + e
                },
                "-": function(t, e) {
                    return t - e
                },
                "/": function(t, e) {
                    return t / e
                },
                "*": function(t, e) {
                    return t * e
                }
            },
            i = String,
            o = /[a-z]+$/i,
            a = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        e.on("snap.util.attr", function(t) {
            var n = i(t).match(a);
            if (n) {
                var s = e.nt(),
                    c = s.substring(s.lastIndexOf(".") + 1),
                    u = this.attr(c),
                    l = {};
                e.stop();
                var h = n[3] || "",
                    f = u.match(o),
                    d = r[n[1]];
                if (f && f == h ? t = d(parseFloat(u), +n[2]) : (u = this.asPX(c), t = d(this.asPX(c), this.asPX(c, n[2] + h))), isNaN(u) || isNaN(t)) return;
                l[c] = t, this.attr(l)
            }
        })(-10), e.on("snap.util.equal", function(s, c) {
            var u = i(this.attr(s) || ""),
                l = i(c).match(a);
            if (l) {
                e.stop();
                var h = l[3] || "",
                    f = u.match(o),
                    d = r[l[1]];
                return f && f == h ? {
                    from: parseFloat(u),
                    to: d(parseFloat(u), +l[2]),
                    f: n(f)
                } : (u = this.asPX(s), {
                    from: u,
                    to: d(u, this.asPX(s, l[2] + h)),
                    f: t
                })
            }
        })(-10)
    }), r.plugin(function(t, n, r, i) {
        var o = r.prototype,
            a = t.is;
        o.rect = function(t, e, n, r, i, o) {
            var s;
            return null == o && (o = i), a(t, "object") && "[object Object]" == t ? s = t : null != t && (s = {
                x: t,
                y: e,
                width: n,
                height: r
            }, null != i && (s.rx = i, s.ry = o)), this.el("rect", s)
        }, o.circle = function(t, e, n) {
            var r;
            return a(t, "object") && "[object Object]" == t ? r = t : null != t && (r = {
                cx: t,
                cy: e,
                r: n
            }), this.el("circle", r)
        };
        var s = function() {
            function t() {
                this.parentNode.removeChild(this)
            }
            return function(e, n) {
                var r = i.doc.createElement("img"),
                    o = i.doc.body;
                r.style.cssText = "position:absolute;left:-9999em;top:-9999em", r.onload = function() {
                    n.call(r), r.onload = r.onerror = null, o.removeChild(r)
                }, r.onerror = t, o.appendChild(r), r.src = e
            }
        }();
        o.image = function(e, n, r, i, o) {
            var c = this.el("image");
            if (a(e, "object") && "src" in e) c.attr(e);
            else if (null != e) {
                var u = {
                    "xlink:href": e,
                    preserveAspectRatio: "none"
                };
                null != n && null != r && (u.x = n, u.y = r), null != i && null != o ? (u.width = i, u.height = o) : s(e, function() {
                    t._.$(c.node, {
                        width: this.offsetWidth,
                        height: this.offsetHeight
                    })
                }), t._.$(c.node, u)
            }
            return c
        }, o.ellipse = function(t, e, n, r) {
            var i;
            return a(t, "object") && "[object Object]" == t ? i = t : null != t && (i = {
                cx: t,
                cy: e,
                rx: n,
                ry: r
            }), this.el("ellipse", i)
        }, o.path = function(t) {
            var e;
            return a(t, "object") && !a(t, "array") ? e = t : t && (e = {
                d: t
            }), this.el("path", e)
        }, o.group = o.g = function(t) {
            var e = this.el("g");
            return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
        }, o.svg = function(t, e, n, r, i, o, s, c) {
            var u = {};
            return a(t, "object") && null == e ? u = t : (null != t && (u.x = t), null != e && (u.y = e), null != n && (u.width = n), null != r && (u.height = r), null != i && null != o && null != s && null != c && (u.viewBox = [i, o, s, c])), this.el("svg", u)
        }, o.mask = function(t) {
            var e = this.el("mask");
            return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
        }, o.ptrn = function(t, e, n, r, i, o, s, c) {
            if (a(t, "object")) var u = t;
            else arguments.length ? (u = {}, null != t && (u.x = t), null != e && (u.y = e), null != n && (u.width = n), null != r && (u.height = r), null != i && null != o && null != s && null != c && (u.viewBox = [i, o, s, c])) : u = {
                patternUnits: "userSpaceOnUse"
            };
            return this.el("pattern", u)
        }, o.use = function(t) {
            return null != t ? (make("use", this.node), t instanceof n && (t.attr("id") || t.attr({
                id: ID()
            }), t = t.attr("id")), this.el("use", {
                "xlink:href": t
            })) : n.prototype.use.call(this)
        }, o.text = function(t, e, n) {
            var r = {};
            return a(t, "object") ? r = t : null != t && (r = {
                x: t,
                y: e,
                text: n || ""
            }), this.el("text", r)
        }, o.line = function(t, e, n, r) {
            var i = {};
            return a(t, "object") ? i = t : null != t && (i = {
                x1: t,
                x2: n,
                y1: e,
                y2: r
            }), this.el("line", i)
        }, o.polyline = function(t) {
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
            var e = {};
            return a(t, "object") && !a(t, "array") ? e = t : null != t && (e = {
                points: t
            }), this.el("polyline", e)
        }, o.polygon = function(t) {
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
            var e = {};
            return a(t, "object") && !a(t, "array") ? e = t : null != t && (e = {
                points: t
            }), this.el("polygon", e)
        }, function() {
            function n() {
                return this.selectAll("stop")
            }
            function r(e, n) {
                var r = u("stop"),
                    i = {
                        offset: +n + "%"
                    };
                return e = t.color(e), i["stop-color"] = e.hex, e.opacity < 1 && (i["stop-opacity"] = e.opacity), u(r, i), this.node.appendChild(r), this
            }
            function i() {
                if ("linearGradient" == this.type) {
                    var e = u(this.node, "x1") || 0,
                        n = u(this.node, "x2") || 1,
                        r = u(this.node, "y1") || 0,
                        i = u(this.node, "y2") || 0;
                    return t._.box(e, r, math.abs(n - e), math.abs(i - r))
                }
                var o = this.node.cx || .5,
                    a = this.node.cy || .5,
                    s = this.node.r || 0;
                return t._.box(o - s, a - s, 2 * s, 2 * s)
            }
            function a(t, n) {
                function r(t, e) {
                    for (var n = (e - h) / (t - f), r = f; t > r; r++) a[r].offset = +(+h + n * (r - f)).toFixed(2);
                    f = t, h = e
                }
                var i, o = e("snap.util.grad.parse", null, n).firstDefined();
                if (!o) return null;
                o.params.unshift(t), i = "l" == o.type.toLowerCase() ? s.apply(0, o.params) : c.apply(0, o.params), o.type != o.type.toLowerCase() && u(i.node, {
                    gradientUnits: "userSpaceOnUse"
                });
                var a = o.stops,
                    l = a.length,
                    h = 0,
                    f = 0;
                l--;
                for (var d = 0; l > d; d++)"offset" in a[d] && r(d, a[d].offset);
                for (a[l].offset = a[l].offset || 100, r(l, a[l].offset), d = 0; l >= d; d++) {
                    var p = a[d];
                    i.addStop(p.color, p.offset)
                }
                return i
            }
            function s(e, o, a, s, c) {
                var l = t._.make("linearGradient", e);
                return l.stops = n, l.addStop = r, l.getBBox = i, null != o && u(l.node, {
                    x1: o,
                    y1: a,
                    x2: s,
                    y2: c
                }), l
            }
            function c(e, o, a, s, c, l) {
                var h = t._.make("radialGradient", e);
                return h.stops = n, h.addStop = r, h.getBBox = i, null != o && u(h.node, {
                    cx: o,
                    cy: a,
                    r: s
                }), null != c && null != l && u(h.node, {
                    fx: c,
                    fy: l
                }), h
            }
            var u = t._.$;
            o.gradient = function(t) {
                return a(this.defs, t)
            }, o.gradientLinear = function(t, e, n, r) {
                return s(this.defs, t, e, n, r)
            }, o.gradientRadial = function(t, e, n, r, i) {
                return c(this.defs, t, e, n, r, i)
            }, o.toString = function() {
                var e, n = this.node.ownerDocument,
                    r = n.createDocumentFragment(),
                    i = n.createElement("div"),
                    o = this.node.cloneNode(!0);
                return r.appendChild(i), i.appendChild(o), t._.$(o, {
                    xmlns: "http://www.w3.org/2000/svg"
                }), e = i.innerHTML, r.removeChild(r.firstChild), e
            }, o.clear = function() {
                for (var t, e = this.node.firstChild; e;) t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : o.clear.call({
                    node: e
                }), e = t
            }
        }()
    }), r.plugin(function(t, e) {
        function n(t) {
            var e = n.ps = n.ps || {};
            return e[t] ? e[t].sleep = 100 : e[t] = {
                sleep: 100
            }, setTimeout(function() {
                for (var n in e) e[I](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
            }), e[t]
        }
        function r(t, e, n, r) {
            return null == t && (t = e = n = r = 0), null == e && (e = t.y, n = t.width, r = t.height, t = t.x), {
                x: t,
                y: e,
                width: n,
                w: n,
                height: r,
                h: r,
                x2: t + n,
                y2: e + r,
                cx: t + n / 2,
                cy: e + r / 2,
                r1: L.min(n, r) / 2,
                r2: L.max(n, r) / 2,
                r0: L.sqrt(n * n + r * r) / 2,
                path: E(t, e, n, r),
                vb: [t, e, n, r].join(" ")
            }
        }
        function i() {
            return this.join(",").replace(F, "$1")
        }
        function o(t) {
            var e = D(t);
            return e.toString = i, e
        }
        function a(t, e, n, r, i, o, a, s, u) {
            return null == u ? d(t, e, n, r, i, o, a, s) : c(t, e, n, r, i, o, a, s, p(t, e, n, r, i, o, a, s, u))
        }
        function s(n, r) {
            function i(t) {
                return +(+t).toFixed(3)
            }
            return t._.cacher(function(t, o, s) {
                t instanceof e && (t = t.attr("d")), t = j(t);
                for (var u, l, h, f, d, p = "", g = {}, m = 0, v = 0, y = t.length; y > v; v++) {
                    if (h = t[v], "M" == h[0]) u = +h[1], l = +h[2];
                    else {
                        if (f = a(u, l, h[1], h[2], h[3], h[4], h[5], h[6]), m + f > o) {
                            if (r && !g.start) {
                                if (d = a(u, l, h[1], h[2], h[3], h[4], h[5], h[6], o - m), p += ["C" + i(d.start.x), i(d.start.y), i(d.m.x), i(d.m.y), i(d.x), i(d.y)], s) return p;
                                g.start = p, p = ["M" + i(d.x), i(d.y) + "C" + i(d.n.x), i(d.n.y), i(d.end.x), i(d.end.y), i(h[5]), i(h[6])].join(), m += f, u = +h[5], l = +h[6];
                                continue
                            }
                            if (!n && !r) return d = a(u, l, h[1], h[2], h[3], h[4], h[5], h[6], o - m)
                        }
                        m += f, u = +h[5], l = +h[6]
                    }
                    p += h.shift() + h
                }
                return g.end = p, d = n ? m : r ? g : c(u, l, h[0], h[1], h[2], h[3], h[4], h[5], 1)
            }, null, t._.clone)
        }
        function c(t, e, n, r, i, o, a, s, c) {
            var u = 1 - c,
                l = z(u, 3),
                h = z(u, 2),
                f = c * c,
                d = f * c,
                p = l * t + 3 * h * c * n + 3 * u * c * c * i + d * a,
                g = l * e + 3 * h * c * r + 3 * u * c * c * o + d * s,
                m = t + 2 * c * (n - t) + f * (i - 2 * n + t),
                v = e + 2 * c * (r - e) + f * (o - 2 * r + e),
                y = n + 2 * c * (i - n) + f * (a - 2 * i + n),
                b = r + 2 * c * (o - r) + f * (s - 2 * o + r),
                w = u * t + c * n,
                x = u * e + c * r,
                E = u * i + c * a,
                _ = u * o + c * s,
                S = 90 - 180 * L.atan2(m - y, v - b) / B;
            return {
                x: p,
                y: g,
                m: {
                    x: m,
                    y: v
                },
                n: {
                    x: y,
                    y: b
                },
                start: {
                    x: w,
                    y: x
                },
                end: {
                    x: E,
                    y: _
                },
                alpha: S
            }
        }
        function u(e, n, i, o, a, s, c, u) {
            t.is(e, "array") || (e = [e, n, i, o, a, s, c, u]);
            var l = A.apply(null, e);
            return r(l.min.x, l.min.y, l.max.x - l.min.x, l.max.y - l.min.y)
        }
        function l(t, e, n) {
            return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
        }
        function h(t, e) {
            return t = r(t), e = r(e), l(e, t.x, t.y) || l(e, t.x2, t.y) || l(e, t.x, t.y2) || l(e, t.x2, t.y2) || l(t, e.x, e.y) || l(t, e.x2, e.y) || l(t, e.x, e.y2) || l(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
        }
        function f(t, e, n, r, i) {
            var o = -3 * e + 9 * n - 9 * r + 3 * i,
                a = t * o + 6 * e - 12 * n + 6 * r;
            return t * a - 3 * e + 3 * n
        }
        function d(t, e, n, r, i, o, a, s, c) {
            null == c && (c = 1), c = c > 1 ? 1 : 0 > c ? 0 : c;
            for (var u = c / 2, l = 12, h = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], d = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, g = 0; l > g; g++) {
                var m = u * h[g] + u,
                    v = f(m, t, n, i, a),
                    y = f(m, e, r, o, s),
                    b = v * v + y * y;
                p += d[g] * L.sqrt(b)
            }
            return u * p
        }
        function p(t, e, n, r, i, o, a, s, c) {
            if (!(0 > c || d(t, e, n, r, i, o, a, s) < c)) {
                var u, l = 1,
                    h = l / 2,
                    f = l - h,
                    p = .01;
                for (u = d(t, e, n, r, i, o, a, s, f); W(u - c) > p;) h /= 2, f += (c > u ? 1 : -1) * h, u = d(t, e, n, r, i, o, a, s, f);
                return f
            }
        }
        function g(t, e, n, r, i, o, a, s) {
            if (!(U(t, n) < q(i, a) || q(t, n) > U(i, a) || U(e, r) < q(o, s) || q(e, r) > U(o, s))) {
                var c = (t * r - e * n) * (i - a) - (t - n) * (i * s - o * a),
                    u = (t * r - e * n) * (o - s) - (e - r) * (i * s - o * a),
                    l = (t - n) * (o - s) - (e - r) * (i - a);
                if (l) {
                    var h = c / l,
                        f = u / l,
                        d = +h.toFixed(2),
                        p = +f.toFixed(2);
                    if (!(d < +q(t, n).toFixed(2) || d > +U(t, n).toFixed(2) || d < +q(i, a).toFixed(2) || d > +U(i, a).toFixed(2) || p < +q(e, r).toFixed(2) || p > +U(e, r).toFixed(2) || p < +q(o, s).toFixed(2) || p > +U(o, s).toFixed(2))) return {
                        x: h,
                        y: f
                    }
                }
            }
        }
        function m(t, e, n) {
            var r = u(t),
                i = u(e);
            if (!h(r, i)) return n ? 0 : [];
            for (var o = d.apply(0, t), a = d.apply(0, e), s = ~~ (o / 8), l = ~~ (a / 8), f = [], p = [], m = {}, v = n ? 0 : [], y = 0; s + 1 > y; y++) {
                var b = c.apply(0, t.concat(y / s));
                f.push({
                    x: b.x,
                    y: b.y,
                    t: y / s
                })
            }
            for (y = 0; l + 1 > y; y++) b = c.apply(0, e.concat(y / l)), p.push({
                x: b.x,
                y: b.y,
                t: y / l
            });
            for (y = 0; s > y; y++) for (var w = 0; l > w; w++) {
                var x = f[y],
                    E = f[y + 1],
                    _ = p[w],
                    S = p[w + 1],
                    k = W(E.x - x.x) < .001 ? "y" : "x",
                    T = W(S.x - _.x) < .001 ? "y" : "x",
                    O = g(x.x, x.y, E.x, E.y, _.x, _.y, S.x, S.y);
                if (O) {
                    if (m[O.x.toFixed(4)] == O.y.toFixed(4)) continue;
                    m[O.x.toFixed(4)] = O.y.toFixed(4);
                    var C = x.t + W((O[k] - x[k]) / (E[k] - x[k])) * (E.t - x.t),
                        A = _.t + W((O[T] - _[T]) / (S[T] - _[T])) * (S.t - _.t);
                    C >= 0 && 1 >= C && A >= 0 && 1 >= A && (n ? v++ : v.push({
                        x: O.x,
                        y: O.y,
                        t1: C,
                        t2: A
                    }))
                }
            }
            return v
        }
        function v(t, e) {
            return b(t, e)
        }
        function y(t, e) {
            return b(t, e, 1)
        }
        function b(t, e, n) {
            t = j(t), e = j(e);
            for (var r, i, o, a, s, c, u, l, h, f, d = n ? 0 : [], p = 0, g = t.length; g > p; p++) {
                var v = t[p];
                if ("M" == v[0]) r = s = v[1], i = c = v[2];
                else {
                    "C" == v[0] ? (h = [r, i].concat(v.slice(1)), r = h[6], i = h[7]) : (h = [r, i, r, i, s, c, s, c], r = s, i = c);
                    for (var y = 0, b = e.length; b > y; y++) {
                        var w = e[y];
                        if ("M" == w[0]) o = u = w[1], a = l = w[2];
                        else {
                            "C" == w[0] ? (f = [o, a].concat(w.slice(1)), o = f[6], a = f[7]) : (f = [o, a, o, a, u, l, u, l], o = u, a = l);
                            var x = m(h, f, n);
                            if (n) d += x;
                            else {
                                for (var E = 0, _ = x.length; _ > E; E++) x[E].segment1 = p, x[E].segment2 = y, x[E].bez1 = h, x[E].bez2 = f;
                                d = d.concat(x)
                            }
                        }
                    }
                }
            }
            return d
        }
        function w(t, e, n) {
            var r = x(t);
            return l(r, e, n) && b(t, [
                    ["M", e, n],
                    ["H", r.x2 + 10]
                ], 1) % 2 == 1
        }
        function x(t) {
            var e = n(t);
            if (e.bbox) return D(e.bbox);
            if (!t) return r();
            t = j(t);
            for (var i, o = 0, a = 0, s = [], c = [], u = 0, l = t.length; l > u; u++) if (i = t[u], "M" == i[0]) o = i[1], a = i[2], s.push(o), c.push(a);
            else {
                var h = A(o, a, i[1], i[2], i[3], i[4], i[5], i[6]);
                s = s.concat(h.min.x, h.max.x), c = c.concat(h.min.y, h.max.y), o = i[5], a = i[6]
            }
            var f = q.apply(0, s),
                d = q.apply(0, c),
                p = U.apply(0, s),
                g = U.apply(0, c),
                m = r(f, d, p - f, g - d);
            return e.bbox = D(m), m
        }
        function E(t, e, n, r, o) {
            if (o) return [["M", +t + +o, e], ["l", n - 2 * o, 0], ["a", o, o, 0, 0, 1, o, o], ["l", 0, r - 2 * o], ["a", o, o, 0, 0, 1, -o, o], ["l", 2 * o - n, 0], ["a", o, o, 0, 0, 1, -o, -o], ["l", 0, 2 * o - r], ["a", o, o, 0, 0, 1, o, -o], ["z"]];
            var a = [
                ["M", t, e],
                ["l", n, 0],
                ["l", 0, r],
                ["l", -n, 0],
                ["z"]
            ];
            return a.toString = i, a
        }
        function _(t, e, n, r, o) {
            if (null == o && null == r && (r = n), t = +t, e = +e, n = +n, r = +r, null != o) var a = Math.PI / 180,
                s = t + n * Math.cos(-r * a),
                c = t + n * Math.cos(-o * a),
                u = e + n * Math.sin(-r * a),
                l = e + n * Math.sin(-o * a),
                h = [
                    ["M", s, u],
                    ["A", n, n, 0, +(o - r > 180), 0, c, l]
                ];
            else h = [
                ["M", t, e],
                ["m", 0, -r],
                ["a", n, r, 0, 1, 1, 0, 2 * r],
                ["a", n, r, 0, 1, 1, 0, -2 * r],
                ["z"]
            ];
            return h.toString = i, h
        }
        function S(e) {
            var r = n(e),
                a = String.prototype.toLowerCase;
            if (r.rel) return o(r.rel);
            t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
            var s = [],
                c = 0,
                u = 0,
                l = 0,
                h = 0,
                f = 0;
            "M" == e[0][0] && (c = e[0][1], u = e[0][2], l = c, h = u, f++, s.push(["M", c, u]));
            for (var d = f, p = e.length; p > d; d++) {
                var g = s[d] = [],
                    m = e[d];
                if (m[0] != a.call(m[0])) switch (g[0] = a.call(m[0]), g[0]) {
                    case "a":
                        g[1] = m[1], g[2] = m[2], g[3] = m[3], g[4] = m[4], g[5] = m[5], g[6] = +(m[6] - c).toFixed(3), g[7] = +(m[7] - u).toFixed(3);
                        break;
                    case "v":
                        g[1] = +(m[1] - u).toFixed(3);
                        break;
                    case "m":
                        l = m[1], h = m[2];
                    default:
                        for (var v = 1, y = m.length; y > v; v++) g[v] = +(m[v] - (v % 2 ? c : u)).toFixed(3)
                } else {
                    g = s[d] = [], "m" == m[0] && (l = m[1] + c, h = m[2] + u);
                    for (var b = 0, w = m.length; w > b; b++) s[d][b] = m[b]
                }
                var x = s[d].length;
                switch (s[d][0]) {
                    case "z":
                        c = l, u = h;
                        break;
                    case "h":
                        c += +s[d][x - 1];
                        break;
                    case "v":
                        u += +s[d][x - 1];
                        break;
                    default:
                        c += +s[d][x - 2], u += +s[d][x - 1]
                }
            }
            return s.toString = i, r.rel = o(s), s
        }
        function k(e) {
            var r = n(e);
            if (r.abs) return o(r.abs);
            if (R(e, "array") && R(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length) return [["M", 0, 0]];
            var a, s = [],
                c = 0,
                u = 0,
                l = 0,
                h = 0,
                f = 0;
            "M" == e[0][0] && (c = +e[0][1], u = +e[0][2], l = c, h = u, f++, s[0] = ["M", c, u]);
            for (var d, p, g = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), m = f, v = e.length; v > m; m++) {
                if (s.push(d = []), p = e[m], a = p[0], a != a.toUpperCase()) switch (d[0] = a.toUpperCase(), d[0]) {
                    case "A":
                        d[1] = p[1], d[2] = p[2], d[3] = p[3], d[4] = p[4], d[5] = p[5], d[6] = +p[6] + c, d[7] = +p[7] + u;
                        break;
                    case "V":
                        d[1] = +p[1] + u;
                        break;
                    case "H":
                        d[1] = +p[1] + c;
                        break;
                    case "R":
                        for (var y = [c, u].concat(p.slice(1)), b = 2, w = y.length; w > b; b++) y[b] = +y[b] + c, y[++b] = +y[b] + u;
                        s.pop(), s = s.concat(P(y, g));
                        break;
                    case "O":
                        s.pop(), y = _(c, u, p[1], p[2]), y.push(y[0]), s = s.concat(y);
                        break;
                    case "U":
                        s.pop(), s = s.concat(_(c, u, p[1], p[2], p[3])), d = ["U"].concat(s[s.length - 1].slice(-2));
                        break;
                    case "M":
                        l = +p[1] + c, h = +p[2] + u;
                    default:
                        for (b = 1, w = p.length; w > b; b++) d[b] = +p[b] + (b % 2 ? c : u)
                } else if ("R" == a) y = [c, u].concat(p.slice(1)), s.pop(), s = s.concat(P(y, g)), d = ["R"].concat(p.slice(-2));
                else if ("O" == a) s.pop(), y = _(c, u, p[1], p[2]), y.push(y[0]), s = s.concat(y);
                else if ("U" == a) s.pop(), s = s.concat(_(c, u, p[1], p[2], p[3])), d = ["U"].concat(s[s.length - 1].slice(-2));
                else for (var x = 0, E = p.length; E > x; x++) d[x] = p[x];
                if (a = a.toUpperCase(), "O" != a) switch (d[0]) {
                    case "Z":
                        c = +l, u = +h;
                        break;
                    case "H":
                        c = d[1];
                        break;
                    case "V":
                        u = d[1];
                        break;
                    case "M":
                        l = d[d.length - 2], h = d[d.length - 1];
                    default:
                        c = d[d.length - 2], u = d[d.length - 1]
                }
            }
            return s.toString = i, r.abs = o(s), s
        }
        function T(t, e, n, r) {
            return [t, e, n, r, n, r]
        }
        function O(t, e, n, r, i, o) {
            var a = 1 / 3,
                s = 2 / 3;
            return [a * t + s * n, a * e + s * r, a * i + s * n, a * o + s * r, i, o]
        }
        function C(e, n, r, i, o, a, s, c, u, l) {
            var h, f = 120 * B / 180,
                d = B / 180 * (+o || 0),
                p = [],
                g = t._.cacher(function(t, e, n) {
                    var r = t * L.cos(n) - e * L.sin(n),
                        i = t * L.sin(n) + e * L.cos(n);
                    return {
                        x: r,
                        y: i
                    }
                });
            if (l) S = l[0], k = l[1], E = l[2], _ = l[3];
            else {
                h = g(e, n, -d), e = h.x, n = h.y, h = g(c, u, -d), c = h.x, u = h.y;
                var m = (L.cos(B / 180 * o), L.sin(B / 180 * o), (e - c) / 2),
                    v = (n - u) / 2,
                    y = m * m / (r * r) + v * v / (i * i);
                y > 1 && (y = L.sqrt(y), r = y * r, i = y * i);
                var b = r * r,
                    w = i * i,
                    x = (a == s ? -1 : 1) * L.sqrt(W((b * w - b * v * v - w * m * m) / (b * v * v + w * m * m))),
                    E = x * r * v / i + (e + c) / 2,
                    _ = x * -i * m / r + (n + u) / 2,
                    S = L.asin(((n - _) / i).toFixed(9)),
                    k = L.asin(((u - _) / i).toFixed(9));
                S = E > e ? B - S : S, k = E > c ? B - k : k, 0 > S && (S = 2 * B + S), 0 > k && (k = 2 * B + k), s && S > k && (S -= 2 * B), !s && k > S && (k -= 2 * B)
            }
            var T = k - S;
            if (W(T) > f) {
                var O = k,
                    A = c,
                    j = u;
                k = S + f * (s && k > S ? 1 : -1), c = E + r * L.cos(k), u = _ + i * L.sin(k), p = C(c, u, r, i, o, 0, s, A, j, [k, O, E, _])
            }
            T = k - S;
            var N = L.cos(S),
                P = L.sin(S),
                M = L.cos(k),
                R = L.sin(k),
                D = L.tan(T / 4),
                I = 4 / 3 * r * D,
                F = 4 / 3 * i * D,
                $ = [e, n],
                q = [e + I * P, n - F * N],
                U = [c + I * R, u - F * M],
                z = [c, u];
            if (q[0] = 2 * $[0] - q[0], q[1] = 2 * $[1] - q[1], l) return [q, U, z].concat(p);
            p = [q, U, z].concat(p).join().split(",");
            for (var V = [], Y = 0, H = p.length; H > Y; Y++) V[Y] = Y % 2 ? g(p[Y - 1], p[Y], d).y : g(p[Y], p[Y + 1], d).x;
            return V
        }
        function A(t, e, n, r, i, o, a, s) {
            for (var c, u, l, h, f, d, p, g, m = [], v = [
                [],
                []
            ], y = 0; 2 > y; ++y) if (0 == y ? (u = 6 * t - 12 * n + 6 * i, c = -3 * t + 9 * n - 9 * i + 3 * a, l = 3 * n - 3 * t) : (u = 6 * e - 12 * r + 6 * o, c = -3 * e + 9 * r - 9 * o + 3 * s, l = 3 * r - 3 * e), W(c) < 1e-12) {
                if (W(u) < 1e-12) continue;
                h = -l / u, h > 0 && 1 > h && m.push(h)
            } else p = u * u - 4 * l * c, g = L.sqrt(p), 0 > p || (f = (-u + g) / (2 * c), f > 0 && 1 > f && m.push(f), d = (-u - g) / (2 * c), d > 0 && 1 > d && m.push(d));
            for (var b, w = m.length, x = w; w--;) h = m[w], b = 1 - h, v[0][w] = b * b * b * t + 3 * b * b * h * n + 3 * b * h * h * i + h * h * h * a, v[1][w] = b * b * b * e + 3 * b * b * h * r + 3 * b * h * h * o + h * h * h * s;
            return v[0][x] = t, v[1][x] = e, v[0][x + 1] = a, v[1][x + 1] = s, v[0].length = v[1].length = x + 2, {
                min: {
                    x: q.apply(0, v[0]),
                    y: q.apply(0, v[1])
                },
                max: {
                    x: U.apply(0, v[0]),
                    y: U.apply(0, v[1])
                }
            }
        }
        function j(t, e) {
            var r = !e && n(t);
            if (!e && r.curve) return o(r.curve);
            for (var i = k(t), a = e && k(e), s = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, c = {
                x: 0,
                y: 0,
                bx: 0,
                by: 0,
                X: 0,
                Y: 0,
                qx: null,
                qy: null
            }, u = (function(t, e, n) {
                var r, i;
                if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                switch (!(t[0] in {
                    T: 1,
                    Q: 1
                }) && (e.qx = e.qy = null), t[0]) {
                    case "M":
                        e.X = t[1], e.Y = t[2];
                        break;
                    case "A":
                        t = ["C"].concat(C.apply(0, [e.x, e.y].concat(t.slice(1))));
                        break;
                    case "S":
                        "C" == n || "S" == n ? (r = 2 * e.x - e.bx, i = 2 * e.y - e.by) : (r = e.x, i = e.y), t = ["C", r, i].concat(t.slice(1));
                        break;
                    case "T":
                        "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(O(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                        break;
                    case "Q":
                        e.qx = t[1], e.qy = t[2], t = ["C"].concat(O(e.x, e.y, t[1], t[2], t[3], t[4]));
                        break;
                    case "L":
                        t = ["C"].concat(T(e.x, e.y, t[1], t[2]));
                        break;
                    case "H":
                        t = ["C"].concat(T(e.x, e.y, t[1], e.y));
                        break;
                    case "V":
                        t = ["C"].concat(T(e.x, e.y, e.x, t[1]));
                        break;
                    case "Z":
                        t = ["C"].concat(T(e.x, e.y, e.X, e.Y))
                }
                return t
            }), l = function(t, e) {
                if (t[e].length > 7) {
                    t[e].shift();
                    for (var n = t[e]; n.length;) f[e] = "A", a && (d[e] = "A"), t.splice(e++, 0, ["C"].concat(n.splice(0, 6)));
                    t.splice(e, 1), v = U(i.length, a && a.length || 0)
                }
            }, h = function(t, e, n, r, o) {
                t && e && "M" == t[o][0] && "M" != e[o][0] && (e.splice(o, 0, ["M", r.x, r.y]), n.bx = 0, n.by = 0, n.x = t[o][1], n.y = t[o][2], v = U(i.length, a && a.length || 0))
            }, f = [], d = [], p = "", g = "", m = 0, v = U(i.length, a && a.length || 0); v > m; m++) {
                i[m] && (p = i[m][0]), "C" != p && (f[m] = p, m && (g = f[m - 1])), i[m] = u(i[m], s, g), "A" != f[m] && "C" == p && (f[m] = "C"), l(i, m), a && (a[m] && (p = a[m][0]), "C" != p && (d[m] = p, m && (g = d[m - 1])), a[m] = u(a[m], c, g), "A" != d[m] && "C" == p && (d[m] = "C"), l(a, m)), h(i, a, s, c, m), h(a, i, c, s, m);
                var y = i[m],
                    b = a && a[m],
                    w = y.length,
                    x = a && b.length;
                s.x = y[w - 2], s.y = y[w - 1], s.bx = $(y[w - 4]) || s.x, s.by = $(y[w - 3]) || s.y, c.bx = a && ($(b[x - 4]) || c.x), c.by = a && ($(b[x - 3]) || c.y), c.x = a && b[x - 2], c.y = a && b[x - 1]
            }
            return a || (r.curve = o(i)), a ? [i, a] : i
        }
        function N(t, e) {
            if (!e) return t;
            var n, r, i, o, a, s, c;
            for (t = j(t), i = 0, a = t.length; a > i; i++) for (c = t[i], o = 1, s = c.length; s > o; o += 2) n = e.x(c[o], c[o + 1]), r = e.y(c[o], c[o + 1]), c[o] = n, c[o + 1] = r;
            return t
        }
        function P(t, e) {
            for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
                var o = [{
                    x: +t[r - 2],
                    y: +t[r - 1]
                }, {
                    x: +t[r],
                    y: +t[r + 1]
                }, {
                    x: +t[r + 2],
                    y: +t[r + 3]
                }, {
                    x: +t[r + 4],
                    y: +t[r + 5]
                }];
                e ? r ? i - 4 == r ? o[3] = {
                    x: +t[0],
                    y: +t[1]
                } : i - 2 == r && (o[2] = {
                    x: +t[0],
                    y: +t[1]
                }, o[3] = {
                    x: +t[2],
                    y: +t[3]
                }) : o[0] = {
                    x: +t[i - 2],
                    y: +t[i - 1]
                } : i - 4 == r ? o[3] = o[2] : r || (o[0] = {
                    x: +t[r],
                    y: +t[r + 1]
                }), n.push(["C", (-o[0].x + 6 * o[1].x + o[2].x) / 6, (-o[0].y + 6 * o[1].y + o[2].y) / 6, (o[1].x + 6 * o[2].x - o[3].x) / 6, (o[1].y + 6 * o[2].y - o[3].y) / 6, o[2].x, o[2].y])
            }
            return n
        }
        var M = e.prototype,
            R = t.is,
            D = t._.clone,
            I = "hasOwnProperty",
            F = /,?([a-z]),?/gi,
            $ = parseFloat,
            L = Math,
            B = L.PI,
            q = L.min,
            U = L.max,
            z = L.pow,
            W = L.abs,
            V = s(1),
            Y = s(),
            H = s(0, 1),
            G = t._unit2px,
            X = {
                path: function(t) {
                    return t.attr("path")
                },
                circle: function(t) {
                    var e = G(t);
                    return _(e.cx, e.cy, e.r)
                },
                ellipse: function(t) {
                    var e = G(t);
                    return _(e.cx || 0, e.cy || 0, e.rx, e.ry)
                },
                rect: function(t) {
                    var e = G(t);
                    return E(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry)
                },
                image: function(t) {
                    var e = G(t);
                    return E(e.x || 0, e.y || 0, e.width, e.height)
                },
                line: function(t) {
                    return "M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")]
                },
                polyline: function(t) {
                    return "M" + t.attr("points")
                },
                polygon: function(t) {
                    return "M" + t.attr("points") + "z"
                },
                deflt: function(t) {
                    var e = t.node.getBBox();
                    return E(e.x, e.y, e.width, e.height)
                }
            };
        t.path = n, t.path.getTotalLength = V, t.path.getPointAtLength = Y, t.path.getSubpath = function(t, e, n) {
            if (this.getTotalLength(t) - n < 1e-6) return H(t, e).end;
            var r = H(t, n, 1);
            return e ? H(r, e).end : r
        }, M.getTotalLength = function() {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }, M.getPointAtLength = function(t) {
            return Y(this.attr("d"), t)
        }, M.getSubpath = function(e, n) {
            return t.path.getSubpath(this.attr("d"), e, n)
        }, t._.box = r, t.path.findDotsAtSegment = c, t.path.bezierBBox = u, t.path.isPointInsideBBox = l, t.path.isBBoxIntersect = h, t.path.intersection = v, t.path.intersectionNumber = y, t.path.isPointInside = w, t.path.getBBox = x, t.path.get = X, t.path.toRelative = S, t.path.toAbsolute = k, t.path.toCubic = j, t.path.map = N, t.path.toString = i, t.path.clone = o
    }), r.plugin(function(t) {
        var r = Math.max,
            i = Math.min,
            o = function(t) {
                if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", t) for (var e = 0, n = t.length; n > e; e++) t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
            },
            a = o.prototype;
        a.push = function() {
            for (var t, e, n = 0, r = arguments.length; r > n; n++) t = arguments[n], t && (e = this.items.length, this[e] = this.items[e] = t, this.length++);
            return this
        }, a.pop = function() {
            return this.length && delete this[this.length--], this.items.pop()
        }, a.forEach = function(t, e) {
            for (var n = 0, r = this.items.length; r > n; n++) if (t.call(e, this.items[n], n) === !1) return this;
            return this
        }, a.animate = function(r, i, o, a) {
            "function" != typeof o || o.length || (a = o, o = n.linear), r instanceof t._.Animation && (a = r.callback, o = r.easing, i = o.dur, r = r.attr);
            var s = arguments;
            if (t.is(r, "array") && t.is(s[s.length - 1], "array")) var c = !0;
            var u, l = function() {
                    u ? this.b = u : u = this.b
                },
                h = 0,
                f = a &&
                    function() {
                        h++ == this.length && a.call(this)
                    };
            return this.forEach(function(t, n) {
                e.once("snap.animcreated." + t.id, l), c ? s[n] && t.animate.apply(t, s[n]) : t.animate(r, i, o, f)
            })
        }, a.remove = function() {
            for (; this.length;) this.pop().remove();
            return this
        }, a.bind = function(t, e, n) {
            var r = {};
            if ("function" == typeof e) this.bindings[t] = e;
            else {
                var i = n || t;
                this.bindings[t] = function(t) {
                    r[i] = t, e.attr(r)
                }
            }
            return this
        }, a.attr = function(t) {
            var e = {};
            for (var n in t) this.bindings[n] ? this.bindings[n](t[n]) : e[n] = t[n];
            for (var r = 0, i = this.items.length; i > r; r++) this.items[r].attr(e);
            return this
        }, a.clear = function() {
            for (; this.length;) this.pop()
        }, a.splice = function(t, e) {
            t = 0 > t ? r(this.length + t, 0) : t, e = r(0, i(this.length - t, e));
            var n, a = [],
                s = [],
                c = [];
            for (n = 2; n < arguments.length; n++) c.push(arguments[n]);
            for (n = 0; e > n; n++) s.push(this[t + n]);
            for (; n < this.length - t; n++) a.push(this[t + n]);
            var u = c.length;
            for (n = 0; n < u + a.length; n++) this.items[t + n] = this[t + n] = u > n ? c[n] : a[n - u];
            for (n = this.items.length = this.length -= e - u; this[n];) delete this[n++];
            return new o(s)
        }, a.exclude = function(t) {
            for (var e = 0, n = this.length; n > e; e++) if (this[e] == t) return this.splice(e, 1), !0;
            return !1
        }, a.insertAfter = function(t) {
            for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
            return this
        }, a.getBBox = function() {
            for (var t = [], e = [], n = [], o = [], a = this.items.length; a--;) if (!this.items[a].removed) {
                var s = this.items[a].getBBox();
                t.push(s.x), e.push(s.y), n.push(s.x + s.width), o.push(s.y + s.height)
            }
            return t = i.apply(0, t), e = i.apply(0, e), n = r.apply(0, n), o = r.apply(0, o), {
                x: t,
                y: e,
                x2: n,
                y2: o,
                width: n - t,
                height: o - e,
                cx: t + (n - t) / 2,
                cy: e + (o - e) / 2
            }
        }, a.clone = function(t) {
            t = new o;
            for (var e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].clone());
            return t
        }, a.toString = function() {
            return "Snap\u2018s set"
        }, a.type = "set", t.set = function() {
            var t = new o;
            return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
        }
    }), r.plugin(function(t, n) {
        function r(t) {
            var e = t[0];
            switch (e.toLowerCase()) {
                case "t":
                    return [e, 0, 0];
                case "m":
                    return [e, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                case "s":
                    return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
            }
        }
        function i(e, n, i) {
            n = f(n).replace(/\.{3}|\u2026/g, e), e = t.parseTransformString(e) || [], n = t.parseTransformString(n) || [];
            for (var o, a, s, l, h = Math.max(e.length, n.length), d = [], p = [], g = 0; h > g; g++) {
                if (s = e[g] || r(n[g]), l = n[g] || r(s), s[0] != l[0] || "r" == s[0].toLowerCase() && (s[2] != l[2] || s[3] != l[3]) || "s" == s[0].toLowerCase() && (s[3] != l[3] || s[4] != l[4])) {
                    e = t._.transform2matrix(e, i()), n = t._.transform2matrix(n, i()), d = [
                        ["m", e.a, e.b, e.c, e.d, e.e, e.f]
                    ], p = [
                        ["m", n.a, n.b, n.c, n.d, n.e, n.f]
                    ];
                    break
                }
                for (d[g] = [], p[g] = [], o = 0, a = Math.max(s.length, l.length); a > o; o++) o in s && (d[g][o] = s[o]), o in l && (p[g][o] = l[o])
            }
            return {
                from: u(d),
                to: u(p),
                f: c(d)
            }
        }
        function o(t) {
            return t
        }
        function a(t) {
            return function(e) {
                return +e.toFixed(3) + t
            }
        }
        function s(e) {
            return t.rgb(e[0], e[1], e[2])
        }
        function c(t) {
            var e, n, r, i, o, a, s = 0,
                c = [];
            for (e = 0, n = t.length; n > e; e++) {
                for (o = "[", a = ['"' + t[e][0] + '"'], r = 1, i = t[e].length; i > r; r++) a[r] = "val[" + s+++"]";
                o += a + "]", c[e] = o
            }
            return Function("val", "return Snap.path.toString.call([" + c + "])")
        }
        function u(t) {
            for (var e = [], n = 0, r = t.length; r > n; n++) for (var i = 1, o = t[n].length; o > i; i++) e.push(t[n][i]);
            return e
        }
        var l = {},
            h = /[a-z]+$/i,
            f = String;
        l.stroke = l.fill = "colour", n.prototype.equal = function(t, n) {
            return e("snap.util.equal", this, t, n).firstDefined()
        }, e.on("snap.util.equal", function(e, n) {
            var r, d, p = f(this.attr(e) || ""),
                g = this;
            if (p == +p && n == +n) return {
                from: +p,
                to: +n,
                f: o
            };
            if ("colour" == l[e]) return r = t.color(p), d = t.color(n), {
                from: [r.r, r.g, r.b, r.opacity],
                to: [d.r, d.g, d.b, d.opacity],
                f: s
            };
            if ("transform" == e || "gradientTransform" == e || "patternTransform" == e) return n instanceof t.Matrix && (n = n.toTransformString()), t._.rgTransform.test(n) || (n = t._.svgTransform2string(n)), i(p, n, function() {
                return g.getBBox(1)
            });
            if ("d" == e || "path" == e) return r = t.path.toCubic(p, n), {
                from: u(r[0]),
                to: u(r[1]),
                f: c(r[0])
            };
            if ("points" == e) return r = f(p).split(t._.separator), d = f(n).split(t._.separator), {
                from: r,
                to: d,
                f: function(t) {
                    return t
                }
            };
            aUnit = p.match(h);
            var m = f(n).match(h);
            return aUnit && aUnit == m ? {
                from: parseFloat(p),
                to: parseFloat(n),
                f: a(aUnit)
            } : {
                from: this.asPX(e),
                to: this.asPX(e, n),
                f: o
            }
        })
    }), r.plugin(function(t, n, r, i) {
        for (var o = n.prototype, a = "hasOwnProperty", s = ("createTouch" in i.doc), c = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], u = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        }, l = (function(t, e) {
            var n = "y" == t ? "scrollTop" : "scrollLeft",
                r = e && e.node ? e.node.ownerDocument : i.doc;
            return r[n in r.documentElement ? "documentElement" : "body"][n]
        }), h = function() {
            this.returnValue = !1
        }, f = function() {
            return this.originalEvent.preventDefault()
        }, d = function() {
            this.cancelBubble = !0
        }, p = function() {
            return this.originalEvent.stopPropagation()
        }, g = function() {
            return i.doc.addEventListener ?
                function(t, e, n, r) {
                    var i = s && u[e] ? u[e] : e,
                        o = function(i) {
                            var o = l("y", r),
                                c = l("x", r);
                            if (s && u[a](e)) for (var h = 0, d = i.targetTouches && i.targetTouches.length; d > h; h++) if (i.targetTouches[h].target == t || t.contains(i.targetTouches[h].target)) {
                                var g = i;
                                i = i.targetTouches[h], i.originalEvent = g, i.preventDefault = f, i.stopPropagation = p;
                                break
                            }
                            var m = i.clientX + c,
                                v = i.clientY + o;
                            return n.call(r, i, m, v)
                        };
                    return e !== i && t.addEventListener(e, o, !1), t.addEventListener(i, o, !1), function() {
                        return e !== i && t.removeEventListener(e, o, !1), t.removeEventListener(i, o, !1), !0
                    }
                } : i.doc.attachEvent ?
                function(t, e, n, r) {
                    var i = function(t) {
                        t = t || r.node.ownerDocument.window.event;
                        var e = l("y", r),
                            i = l("x", r),
                            o = t.clientX + i,
                            a = t.clientY + e;
                        return t.preventDefault = t.preventDefault || h, t.stopPropagation = t.stopPropagation || d, n.call(r, t, o, a)
                    };
                    t.attachEvent("on" + e, i);
                    var o = function() {
                        return t.detachEvent("on" + e, i), !0
                    };
                    return o
                } : void 0
        }(), m = [], v = function(t) {
            for (var n, r = t.clientX, i = t.clientY, o = l("y"), a = l("x"), c = m.length; c--;) {
                if (n = m[c], s) {
                    for (var u, h = t.touches && t.touches.length; h--;) if (u = t.touches[h], u.identifier == n.el._drag.id || n.el.node.contains(u.target)) {
                        r = u.clientX, i = u.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                        break
                    }
                } else t.preventDefault();
                var f = n.el.node;
                f.nextSibling, f.parentNode, f.style.display, r += a, i += o, e("snap.drag.move." + n.el.id, n.move_scope || n.el, r - n.el._drag.x, i - n.el._drag.y, r, i, t)
            }
        }, y = function(n) {
            t.unmousemove(v).unmouseup(y);
            for (var r, i = m.length; i--;) r = m[i], r.el._drag = {}, e("snap.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, n);
            m = []
        }, b = c.length; b--;)!
            function(e) {
                t[e] = o[e] = function(n, r) {
                    return t.is(n, "function") && (this.events = this.events || [], this.events.push({
                        name: e,
                        f: n,
                        unbind: g(this.node || document, e, n, r || this)
                    })), this
                }, t["un" + e] = o["un" + e] = function(t) {
                    for (var n = this.events || [], r = n.length; r--;) if (n[r].name == e && (n[r].f == t || !t)) return n[r].unbind(), n.splice(r, 1), !n.length && delete this.events, this;
                    return this
                }
            }(c[b]);
        o.hover = function(t, e, n, r) {
            return this.mouseover(t, n).mouseout(e, r || n)
        }, o.unhover = function(t, e) {
            return this.unmouseover(t).unmouseout(e)
        };
        var w = [];
        o.drag = function(n, r, i, o, a, s) {
            function c(c, u, l) {
                (c.originalEvent || c).preventDefault(), this._drag.x = u, this._drag.y = l, this._drag.id = c.identifier, !m.length && t.mousemove(v).mouseup(y), m.push({
                    el: this,
                    move_scope: o,
                    start_scope: a,
                    end_scope: s
                }), r && e.on("snap.drag.start." + this.id, r), n && e.on("snap.drag.move." + this.id, n), i && e.on("snap.drag.end." + this.id, i), e("snap.drag.start." + this.id, a || o || this, u, l, c)
            }
            if (!arguments.length) {
                var u;
                return this.drag(function(t, e) {
                    this.attr({
                        transform: u + (u ? "T" : "t") + [t, e]
                    })
                }, function() {
                    u = this.transform().local
                })
            }
            return this._drag = {}, w.push({
                el: this,
                start: c
            }), this.mousedown(c), this
        }, o.undrag = function() {
            for (var n = w.length; n--;) w[n].el == this && (this.unmousedown(w[n].start), w.splice(n, 1), e.unbind("snap.drag.*." + this.id));
            return !w.length && t.unmousemove(v).unmouseup(y), this
        }
    }), r.plugin(function(t, n, r) {
        var i = (n.prototype, r.prototype),
            o = /^\s*url\((.+)\)/,
            a = String,
            s = t._.$;
        t.filter = {}, i.filter = function(e) {
            var r = this;
            "svg" != r.type && (r = r.paper);
            var i = t.parse(a(e)),
                o = t._.id(),
                c = (r.node.offsetWidth, r.node.offsetHeight, s("filter"));
            return s(c, {
                id: o,
                filterUnits: "userSpaceOnUse"
            }), c.appendChild(i.node), r.defs.appendChild(c), new n(c)
        }, e.on("snap.util.getattr.filter", function() {
            e.stop();
            var n = s(this.node, "filter");
            if (n) {
                var r = a(n).match(o);
                return r && t.select(r[1])
            }
        }), e.on("snap.util.attr.filter", function(r) {
            if (r instanceof n && "filter" == r.type) {
                e.stop();
                var i = r.node.id;
                i || (s(r.node, {
                    id: r.id
                }), i = r.id), s(this.node, {
                    filter: t.url(i)
                })
            }
            r && "none" != r || (e.stop(), this.node.removeAttribute("filter"))
        }), t.filter.blur = function(e, n) {
            null == e && (e = 2);
            var r = null == n ? e : [e, n];
            return t.format('<feGaussianBlur stdDeviation="{def}"/>', {
                def: r
            })
        }, t.filter.blur.toString = function() {
            return this()
        }, t.filter.shadow = function(e, n, r, i, o) {
            return "string" == typeof r && (i = r, o = i, r = 4), "string" != typeof i && (o = i, i = "#000"), i = i || "#000", null == r && (r = 4), null == o && (o = 1), null == e && (e = 0, n = 2), null == n && (n = e), i = t.color(i), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
                color: i,
                dx: e,
                dy: n,
                blur: r,
                opacity: o
            })
        }, t.filter.shadow.toString = function() {
            return this()
        }, t.filter.grayscale = function(e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
                a: .2126 + .7874 * (1 - e),
                b: .7152 - .7152 * (1 - e),
                c: .0722 - .0722 * (1 - e),
                d: .2126 - .2126 * (1 - e),
                e: .7152 + .2848 * (1 - e),
                f: .0722 - .0722 * (1 - e),
                g: .2126 - .2126 * (1 - e),
                h: .0722 + .9278 * (1 - e)
            })
        }, t.filter.grayscale.toString = function() {
            return this()
        }, t.filter.sepia = function(e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
                a: .393 + .607 * (1 - e),
                b: .769 - .769 * (1 - e),
                c: .189 - .189 * (1 - e),
                d: .349 - .349 * (1 - e),
                e: .686 + .314 * (1 - e),
                f: .168 - .168 * (1 - e),
                g: .272 - .272 * (1 - e),
                h: .534 - .534 * (1 - e),
                i: .131 + .869 * (1 - e)
            })
        }, t.filter.sepia.toString = function() {
            return this()
        }, t.filter.saturate = function(e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', {
                amount: 1 - e
            })
        }, t.filter.saturate.toString = function() {
            return this()
        }, t.filter.hueRotate = function(e) {
            return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
                angle: e
            })
        }, t.filter.hueRotate.toString = function() {
            return this()
        }, t.filter.invert = function(e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: 1 - e
            })
        }, t.filter.invert.toString = function() {
            return this()
        }, t.filter.brightness = function(e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
                amount: e
            })
        }, t.filter.brightness.toString = function() {
            return this()
        }, t.filter.contrast = function(e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
                amount: e,
                amount2: .5 - e / 2
            })
        }, t.filter.contrast.toString = function() {
            return this()
        }
    }), r
});