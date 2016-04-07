// 1016 Donut Update - PC

var donut = function(t) {
    "use strict";
    var n, e, a, o, s, i, r, u, d, l, c, m, f, p, g, C, v, b, w, k, y, h, T, I, z, D, P, E, S, _ = {},
        O = $(window),
        j = !1,
        x = [2e3, 5e3, 5e3, 5e3, 5e3],
        B = [];
    return n = function(t) {
        var n = $("#" + t).html() + $("#buttonsMarkup").html();
        $("#donut-container").html(n)
    }, e = function() {
        var t = D.attr("data-segment"),
            n = Number(t) + 1;
        n >= 5 && (t = 0, n = 1), D.empty().append(B[t]).addClass("older-browsers-backup").attr("data-segment", n), k(x[1])
    }, a = function(t) {
        var n = 0;
        for (n = 0; 4 > n; n++) B[n] = new Image, B[n].src = t + "/a_stock_0" + n + ".gif";
        k(x[1])
    }, o = function(t, n) {
        D.empty().append(t).addClass("older-browsers-backup").attr("data-segment", "1"), a(n)
    }, s = function() {
        var t = new Image,
            n = $("#older-browsers-backup").attr("src"),
            e = n.split("/");
        e.pop(), t.src = e.join("/") + "/a_stock_00.gif", t.alt = "stocks", t.onLoad = o(t, e.join("/")), O.off("scroll.forDonut")
    }, i = function(t, n) {
        "segment-three" === n ? (I.removeClass("segment-three").addClass("restart"), setTimeout(function() {
            I.removeClass("restart").addClass("loop animating").attr("data-state", t)
        }, 100), setTimeout(function() {
            I.addClass(t + " animating")
        }, 500)) : I.removeClass(n + " loop").addClass(t + " animating").attr("data-state", t), r(I, n)
    }, r = function(t, n) {
        var e = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";
        t.one(e, function() {
            t.removeClass("animating " + n), I.addClass("active")
        })
    }, u = function() {
        I.toggleClass("active")
    }, d = function(t, n) {
        z.fadeOut(function() {
            "segment-zero" === n ? z.addClass("intro") : z.removeClass("intro"), z.html(t).fadeIn()
        })
    }, l = function() {
        var t = $("#donut").attr("data-state"),
            n = "",
            e = ["Sample<br />Portfolio<br /><span>Portfolios will have up to<br />20 asset classes</span>", "Stocks", "Fixed Income", "Commodities", "Cash"],
            a = "",
            o = 0,
            s = 0;
        switch (t) {
            case "segment-zero":
                n = "segment-one", s = 1;
                break;
            case "segment-one":
                n = "segment-two", s = 2;
                break;
            case "segment-two":
                n = "segment-three", s = 3;
                break;
            case "segment-three":
               /* n = "segment-four", s = 4;*/
                n = "segment-zero", s = 0;
                break;
            case "segment-four":
                n = "segment-zero", s = 0
        }
        a = e[s], o = x[s], u(), i(n, t), d(a, n), k(o)
    }, k = function(t) {
        y = setTimeout(function() {
            j ? l() : e()
        }, t)
    }, c = function() {
        O.off("scroll.forDonut"), I.addClass("segment-one animating"), P.removeClass("initial-state"), r(I, ""), d("stocks"), k(x[1]), S.fadeOut(function() {
            $("#play-pause").css({
                display: "none"
            }), S.fadeIn()
        })
    }, m = function() {
        var t = I.hasClass("segment-one"),
            n = "";
        return h = document.getElementById("donut-wrapper"), h = h.getBoundingClientRect(), n = h.top, 80 >= n && !j ? void s() : void(80 >= n && !t && j && c())
    }, f = function(t) {
        t.preventDefault();
        var n = $(this),
            e = n.hasClass("pause"),
            a = n.hasClass("play");
        clearTimeout(y), n.fadeOut("fast", function() {
            return $("#play-pause").css({
                display: "none"
            }), e ? void n.addClass("play").removeClass("pause").fadeIn(200).focus().attr("aria-label", "Portfolio management animation paused") : void(a ? (n.addClass("pause").removeClass("play").fadeIn(200).focus().attr("aria-label", "Portfolio management animation playing"), k(100)) : c())
        })
    }, p = function() {
        O.on("scroll.forDonut", m)
    }, g = function() {
        S.on("click", f)
    }, C = function() {
        return window.getComputedStyle ? window.getComputedStyle(document.body, ":after").getPropertyValue("content").replace(/\"/g, "") : "tablet"
    }, v = function(t) {
        T.attr("data-size") !== t && T.attr("data-size", t).appendTo("mobile" === t ? "#mobile-only" : "#non-mobile")
    }, b = function() {
        O.on("resize", function() {
            v(C())
        })
    }, w = function() {
        T = $("#donut-wrapper"), I = $("#donut"), z = $("#stocks-text"), D = $("#backup-container"), P = $("#inner-ring"), E = $("#inner-ring-portions"), S = $("#donut-button")
    }, _.init = function() {
        t ? (n("cssTransitionDom"), w(), v(C()), b(), j = !0) : (n("noCssTransitionDom"), w()), p(), g()
    }, _
}(Modernizr.csstransitions);
$(donut.init);