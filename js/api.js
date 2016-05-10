/* Build date: Fri May 06 2016 11:51:18 */
function in_array(a, b, c) {
    var d = "",
        e = !!c;
    if (e) {
        for (d in b)
            if (b[d] === a) return !0
    } else
        for (d in b)
            if (b[d] == a) return !0; return !1
}

function ucFirst(a) {
    return a ? a.charAt(0).toUpperCase() + a.slice(1) : a
}

function closeThisPr() {
    Action.Project.Close()
}

function doscroll(a, b, c) {
    var d = 6,
        e = a - b,
        f = e / (d * d);
    return c += (c + f) / e, newY = 1 == c ? b + e : b + e * (-Math.pow(2, -20 * c / 1) + 1), c && window.scrollTo(0, newY), c >= 1 || lastT == c || !c ? clearTimeout(timer) : timer = setTimeout("doscroll(" + a + "," + b + "," + c + ")", 1), lastT = c, !1
}

function number_format(a, b, c, d) {
    a = (a + "").replace(/[^0-9+\-Ee.]/g, "");
    var e = isFinite(+a) ? +a : 0,
        f = isFinite(+b) ? Math.abs(b) : 0,
        g = "undefined" == typeof d ? "," : d,
        h = "undefined" == typeof c ? "." : c,
        i = "",
        j = function(a, b) {
            var c = Math.pow(10, b);
            return "" + (Math.round(a * c) / c).toFixed(b)
        };
    return i = (f ? j(e, f) : "" + Math.round(e)).split("."), i[0].length > 3 && (i[0] = i[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, g)), (i[1] || "").length < f && (i[1] = i[1] || "", i[1] += new Array(f - i[1].length + 1).join("0")), i.join(h)
}! function(a, b, c) {
    function d(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function e(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                return Array.prototype.unshift.apply(c, d), a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function f(a, b, c) {
        return f = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? d : e, f.apply(null, arguments)
    }

    function g(a, b) {
        this.J = a, this.w = b || a, this.F = this.w.document
    }

    function h(a, c, d) {
        a = a.F.getElementsByTagName(c)[0], a || (a = b.documentElement), a && a.lastChild && a.insertBefore(d, a.lastChild)
    }

    function i(a, b) {
        function c() {
            a.F.body ? b() : setTimeout(c, 0)
        }
        c()
    }

    function j(a, b, c) {
        b = b || [], c = c || [];
        for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
            for (var f = !1, g = 0; g < d.length; g += 1)
                if (b[e] === d[g]) {
                    f = !0;
                    break
                }
            f || d.push(b[e])
        }
        for (b = [], e = 0; e < d.length; e += 1) {
            for (f = !1, g = 0; g < c.length; g += 1)
                if (d[e] === c[g]) {
                    f = !0;
                    break
                }
            f || b.push(d[e])
        }
        a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
    }

    function k(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; e > d; d++)
            if (c[d] == b) return !0;
        return !1
    }

    function l(a) {
        if ("string" == typeof a.na) return a.na;
        var b = a.w.location.protocol;
        return "about:" == b && (b = a.J.location.protocol), "https:" == b ? "https:" : "http:"
    }

    function m(a, b) {
        var c = a.createElement("link", {
                rel: "stylesheet",
                href: b,
                media: "all"
            }),
            d = !1;
        c.onload = function() {
            d || (d = !0)
        }, c.onerror = function() {
            d || (d = !0)
        }, h(a, "head", c)
    }

    function n(b, c, d, e) {
        var f = b.F.getElementsByTagName("head")[0];
        if (f) {
            var g = b.createElement("script", {
                    src: c
                }),
                h = !1;
            return g.onload = g.onreadystatechange = function() {
                h || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (h = !0, d && d(null), g.onload = g.onreadystatechange = null, "HEAD" == g.parentNode.tagName && f.removeChild(g))
            }, f.appendChild(g), a.setTimeout(function() {
                h || (h = !0, d && d(Error("Script load timeout")))
            }, e || 5e3), g
        }
        return null
    }

    function o(a, b) {
        this.N = a, this.ga = b
    }

    function p(a, b, c, d) {
        this.d = null != a ? a : null, this.g = null != b ? b : null, this.B = null != c ? c : null, this.f = null != d ? d : null
    }

    function q(a) {
        a = aa.exec(a);
        var b = null,
            c = null,
            d = null,
            e = null;
        return a && (null !== a[1] && a[1] && (b = parseInt(a[1], 10)), null !== a[2] && a[2] && (c = parseInt(a[2], 10)), null !== a[3] && a[3] && (d = parseInt(a[3], 10)), null !== a[4] && a[4] && (e = /^[0-9]+$/.test(a[4]) ? parseInt(a[4], 10) : a[4])), new p(b, c, d, e)
    }

    function r(a, b, c, d, e, f, g, h) {
        this.L = a, this.m = h
    }

    function s(a) {
        this.a = a
    }

    function t(a) {
        var b = w(a.a, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
        return "" != b ? (/BB\d{2}/.test(b) && (b = "BlackBerry"), b) : (a = w(a.a, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/, 1), "" != a ? ("Mac_PowerPC" == a ? a = "Macintosh" : "PlayStation" == a && (a = "Linux"), a) : "Unknown")
    }

    function u(a) {
        var b = w(a.a, /(OS X|Windows NT|Android) ([^;)]+)/, 2);
        if (b || (b = w(a.a, /Windows Phone( OS)? ([^;)]+)/, 2)) || (b = w(a.a, /(iPhone )?OS ([\d_]+)/, 2))) return b;
        if (b = w(a.a, /(?:Linux|CrOS|CrKey) ([^;)]+)/, 1))
            for (var b = b.split(/\s/), c = 0; c < b.length; c += 1)
                if (/^[\d\._]+$/.test(b[c])) return b[c];
        return (a = w(a.a, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown"
    }

    function v(a) {
        var b = t(a),
            c = q(u(a)),
            d = q(w(a.a, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1)),
            e = "Unknown",
            f = new p,
            f = "Unknown",
            g = !1;
        return /OPR\/[\d.]+/.test(a.a) ? e = "Opera" : -1 != a.a.indexOf("Chrome") || -1 != a.a.indexOf("CrMo") || -1 != a.a.indexOf("CriOS") ? e = "Chrome" : /Silk\/\d/.test(a.a) ? e = "Silk" : "BlackBerry" == b || "Android" == b ? e = "BuiltinBrowser" : -1 != a.a.indexOf("PhantomJS") ? e = "PhantomJS" : -1 != a.a.indexOf("Safari") ? e = "Safari" : -1 != a.a.indexOf("AdobeAIR") ? e = "AdobeAIR" : -1 != a.a.indexOf("PlayStation") && (e = "BuiltinBrowser"), "BuiltinBrowser" == e ? f = "Unknown" : "Silk" == e ? f = w(a.a, /Silk\/([\d\._]+)/, 1) : "Chrome" == e ? f = w(a.a, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != a.a.indexOf("Version/") ? f = w(a.a, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == e ? f = w(a.a, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == e ? f = w(a.a, /OPR\/([\d.]+)/, 1) : "PhantomJS" == e && (f = w(a.a, /PhantomJS\/([\d.]+)/, 1)), f = q(f), g = "AdobeAIR" == e ? 2 < f.d || 2 == f.d && 5 <= f.g : "BlackBerry" == b ? 10 <= c.d : "Android" == b ? 2 < c.d || 2 == c.d && 1 < c.g : 526 <= d.d || 525 <= d.d && 13 <= d.g, new r(e, 0, 0, 0, 0, 0, 0, new o(g, 536 > d.d || 536 == d.d && 11 > d.g))
    }

    function w(a, b, c) {
        return (a = a.match(b)) && a[c] ? a[c] : ""
    }

    function x(a) {
        this.ma = a || "-"
    }

    function y(a, b) {
        this.L = a, this.X = 4, this.M = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.M = c[1], this.X = parseInt(c[2], 10))
    }

    function z(a) {
        return a.M + a.X
    }

    function A(a) {
        var b = 4,
            c = "n",
            d = null;
        return a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10)))), c + b
    }

    function B(a, b) {
        this.c = a, this.q = a.w.document.documentElement, this.P = b, this.j = "wf", this.h = new x("-"), this.ha = !1 !== b.events, this.C = !1 !== b.classes
    }

    function C(a) {
        if (a.C) {
            var b = k(a.q, a.h.f(a.j, "active")),
                c = [],
                d = [a.h.f(a.j, "loading")];
            b || c.push(a.h.f(a.j, "inactive")), j(a.q, c, d)
        }
        D(a, "inactive")
    }

    function D(a, b, c) {
        a.ha && a.P[b] && (c ? a.P[b](c.getName(), z(c)) : a.P[b]())
    }

    function E() {
        this.ca = {}
    }

    function F(a, b) {
        this.c = a, this.H = b, this.k = this.c.createElement("span", {
            "aria-hidden": "true"
        }, this.H)
    }

    function G(a) {
        h(a.c, "body", a.k)
    }

    function H(a) {
        var b;
        b = [];
        for (var c = a.L.split(/,\s*/), d = 0; d < c.length; d++) {
            var e = c[d].replace(/['"]/g, ""); - 1 == e.indexOf(" ") ? b.push(e) : b.push("'" + e + "'")
        }
        return b = b.join(","), c = "normal", "o" === a.M ? c = "oblique" : "i" === a.M && (c = "italic"), "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + b + ";" + ("font-style:" + c + ";font-weight:" + (a.X + "00") + ";")
    }

    function I(a, b, c, d, e, f, g, h) {
        this.Y = a, this.ka = b, this.c = c, this.o = d, this.m = e, this.H = h || "BESbswy", this.v = {}, this.W = f || 3e3, this.ba = g || null, this.G = this.u = this.t = null, this.t = new F(this.c, this.H), this.u = new F(this.c, this.H), this.G = new F(this.c, this.H), a = new y("serif", z(this.o)), a = H(a), this.t.k.style.cssText = a, a = new y("sans-serif", z(this.o)), a = H(a), this.u.k.style.cssText = a, a = new y("monospace", z(this.o)), a = H(a), this.G.k.style.cssText = a, G(this.t), G(this.u), G(this.G), this.v.serif = this.t.k.offsetWidth, this.v["sans-serif"] = this.u.k.offsetWidth, this.v.monospace = this.G.k.offsetWidth
    }

    function J(a, b, c) {
        for (var d in ca)
            if (ca.hasOwnProperty(d) && b === a.v[ca[d]] && c === a.v[ca[d]]) return !0;
        return !1
    }

    function K(a) {
        var b = a.t.k.offsetWidth,
            c = a.u.k.offsetWidth;
        b === a.v.serif && c === a.v["sans-serif"] || a.m.ga && J(a, b, c) ? _() - a.oa >= a.W ? a.m.ga && J(a, b, c) && (null === a.ba || a.ba.hasOwnProperty(a.o.getName())) ? M(a, a.Y) : M(a, a.ka) : L(a) : M(a, a.Y)
    }

    function L(a) {
        setTimeout(f(function() {
            K(this)
        }, a), 50)
    }

    function M(a, b) {
        a.t.remove(), a.u.remove(), a.G.remove(), b(a.o)
    }

    function N(a, b, c, d) {
        this.c = b, this.A = c, this.R = 0, this.ea = this.aa = !1, this.W = d, this.m = a.m
    }

    function O(a, b, c, d, e) {
        if (c = c || {}, 0 === b.length && e) C(a.A);
        else
            for (a.R += b.length, e && (a.aa = e), e = 0; e < b.length; e++) {
                var g = b[e],
                    h = c[g.getName()],
                    i = a.A,
                    k = g;
                i.C && j(i.q, [i.h.f(i.j, k.getName(), z(k).toString(), "loading")]), D(i, "fontloading", k), i = null, i = new I(f(a.ia, a), f(a.ja, a), a.c, g, a.m, a.W, d, h), i.start()
            }
    }

    function P(a) {
        0 == --a.R && a.aa && (a.ea ? (a = a.A, a.C && j(a.q, [a.h.f(a.j, "active")], [a.h.f(a.j, "loading"), a.h.f(a.j, "inactive")]), D(a, "active")) : C(a.A))
    }

    function Q(a) {
        this.J = a, this.Z = new E, this.pa = new s(a.navigator.userAgent), this.a = this.pa.parse(), this.T = this.U = 0, this.Q = this.S = !0
    }

    function R(a, b) {
        ja.Z.ca[a] = b
    }

    function S(a, b, c, d, e) {
        var f = 0 == --a.U;
        (a.Q || a.S) && setTimeout(function() {
            O(b, c, d || null, e || null, f)
        }, 0)
    }

    function T(a, b, c) {
        this.O = a ? a : b + da, this.s = [], this.V = [], this.fa = c || ""
    }

    function U(a) {
        this.s = a, this.da = [], this.K = {}
    }

    function V(a, b) {
        this.a = new s(navigator.userAgent).parse(), this.c = a, this.e = b
    }

    function W(a, b) {
        this.c = a, this.e = b, this.p = []
    }

    function X(a, b) {
        this.c = a, this.e = b, this.p = []
    }

    function Y(a, b) {
        this.c = a, this.e = b, this.p = []
    }

    function Z(a, b) {
        this.c = a, this.e = b
    }

    function $(a, b) {
        this.c = a, this.e = b
    }
    var _ = Date.now || function() {
        return +new Date
    };
    g.prototype.createElement = function(a, b, c) {
        if (a = this.F.createElement(a), b)
            for (var d in b) b.hasOwnProperty(d) && ("style" == d ? a.style.cssText = b[d] : a.setAttribute(d, b[d]));
        return c && a.appendChild(this.F.createTextNode(c)), a
    };
    var aa = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
    p.prototype.compare = function(a) {
        return this.d > a.d || this.d === a.d && this.g > a.g || this.d === a.d && this.g === a.g && this.B > a.B ? 1 : this.d < a.d || this.d === a.d && this.g < a.g || this.d === a.d && this.g === a.g && this.B < a.B ? -1 : 0
    }, p.prototype.toString = function() {
        return [this.d, this.g || "", this.B || "", this.f || ""].join("")
    }, r.prototype.getName = function() {
        return this.L
    };
    var ba = new r("Unknown", 0, 0, 0, 0, 0, 0, new o(!1, !1));
    s.prototype.parse = function() {
        var a;
        if (-1 != this.a.indexOf("MSIE") || -1 != this.a.indexOf("Trident/")) {
            a = t(this);
            var b = q(u(this)),
                c = null,
                d = w(this.a, /Trident\/([\d\w\.]+)/, 1),
                c = q(-1 != this.a.indexOf("MSIE") ? w(this.a, /MSIE ([\d\w\.]+)/, 1) : w(this.a, /rv:([\d\w\.]+)/, 1));
            "" != d && q(d), a = new r("MSIE", 0, 0, 0, 0, 0, 0, new o("Windows" == a && 6 <= c.d || "Windows Phone" == a && 8 <= b.d, !1))
        } else if (-1 != this.a.indexOf("Opera")) a: if (a = q(w(this.a, /Presto\/([\d\w\.]+)/, 1)), q(u(this)), null !== a.d || q(w(this.a, /rv:([^\)]+)/, 1)), -1 != this.a.indexOf("Opera Mini/")) a = q(w(this.a, /Opera Mini\/([\d\.]+)/, 1)), a = new r("OperaMini", 0, 0, 0, t(this), 0, 0, new o(!1, !1));
            else {
                if (-1 != this.a.indexOf("Version/") && (a = q(w(this.a, /Version\/([\d\.]+)/, 1)), null !== a.d)) {
                    a = new r("Opera", 0, 0, 0, t(this), 0, 0, new o(10 <= a.d, !1));
                    break a
                }
                a = q(w(this.a, /Opera[\/ ]([\d\.]+)/, 1)), a = null !== a.d ? new r("Opera", 0, 0, 0, t(this), 0, 0, new o(10 <= a.d, !1)) : new r("Opera", 0, 0, 0, t(this), 0, 0, new o(!1, !1))
            } else /OPR\/[\d.]+/.test(this.a) ? a = v(this) : /AppleWeb(K|k)it/.test(this.a) ? a = v(this) : -1 != this.a.indexOf("Gecko") ? (a = "Unknown", b = new p, q(u(this)), b = !1, -1 != this.a.indexOf("Firefox") ? (a = "Firefox", b = q(w(this.a, /Firefox\/([\d\w\.]+)/, 1)), b = 3 <= b.d && 5 <= b.g) : -1 != this.a.indexOf("Mozilla") && (a = "Mozilla"), c = q(w(this.a, /rv:([^\)]+)/, 1)), b || (b = 1 < c.d || 1 == c.d && 9 < c.g || 1 == c.d && 9 == c.g && 2 <= c.B), a = new r(a, 0, 0, 0, t(this), 0, 0, new o(b, !1))) : a = ba;
        return a
    }, x.prototype.f = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.ma)
    }, y.prototype.getName = function() {
        return this.L
    }, F.prototype.remove = function() {
        var a = this.k;
        a.parentNode && a.parentNode.removeChild(a)
    };
    var ca = {
        sa: "serif",
        ra: "sans-serif",
        qa: "monospace"
    };
    I.prototype.start = function() {
        this.oa = _();
        var a = new y(this.o.getName() + ",serif", z(this.o)),
            a = H(a);
        this.t.k.style.cssText = a, a = new y(this.o.getName() + ",sans-serif", z(this.o)), a = H(a), this.u.k.style.cssText = a, K(this)
    }, N.prototype.ia = function(a) {
        var b = this.A;
        b.C && j(b.q, [b.h.f(b.j, a.getName(), z(a).toString(), "active")], [b.h.f(b.j, a.getName(), z(a).toString(), "loading"), b.h.f(b.j, a.getName(), z(a).toString(), "inactive")]), D(b, "fontactive", a), this.ea = !0, P(this)
    }, N.prototype.ja = function(a) {
        var b = this.A;
        if (b.C) {
            var c = k(b.q, b.h.f(b.j, a.getName(), z(a).toString(), "active")),
                d = [],
                e = [b.h.f(b.j, a.getName(), z(a).toString(), "loading")];
            c || d.push(b.h.f(b.j, a.getName(), z(a).toString(), "inactive")), j(b.q, d, e)
        }
        D(b, "fontinactive", a), P(this)
    }, Q.prototype.load = function(a) {
        this.c = new g(this.J, a.context || this.J), this.S = !1 !== a.events, this.Q = !1 !== a.classes;
        var b = new B(this.c, a),
            c = [],
            d = a.timeout;
        b.C && j(b.q, [b.h.f(b.j, "loading")]), D(b, "loading");
        var e, c = this.Z,
            h = this.c,
            i = [];
        for (e in a)
            if (a.hasOwnProperty(e)) {
                var k = c.ca[e];
                k && i.push(k(a[e], h))
            }
        for (c = i, this.T = this.U = c.length, a = new N(this.a, this.c, b, d), d = 0, e = c.length; e > d; d++) h = c[d], h.D(this.a, f(this.la, this, h, b, a))
    }, Q.prototype.la = function(a, b, c, d) {
        var e = this;
        d ? a.load(function(a, b, d) {
            S(e, c, a, b, d)
        }) : (a = 0 == --this.U, this.T--, a && 0 == this.T ? C(b) : (this.Q || this.S) && O(c, [], {}, null, a))
    };
    var da = "//fonts.googleapis.com/css";
    T.prototype.f = function() {
        if (0 == this.s.length) throw Error("No fonts to load!");
        if (-1 != this.O.indexOf("kit=")) return this.O;
        for (var a = this.s.length, b = [], c = 0; a > c; c++) b.push(this.s[c].replace(/ /g, "+"));
        return a = this.O + "?family=" + b.join("%7C"), 0 < this.V.length && (a += "&subset=" + this.V.join(",")), 0 < this.fa.length && (a += "&text=" + encodeURIComponent(this.fa)), a
    };
    var ea = {
            latin: "BESbswy",
            cyrillic: "&#1081;&#1103;&#1046;",
            greek: "&#945;&#946;&#931;",
            khmer: "&#x1780;&#x1781;&#x1782;",
            Hanuman: "&#x1780;&#x1781;&#x1782;"
        },
        fa = {
            thin: "1",
            extralight: "2",
            "extra-light": "2",
            ultralight: "2",
            "ultra-light": "2",
            light: "3",
            regular: "4",
            book: "4",
            medium: "5",
            "semi-bold": "6",
            semibold: "6",
            "demi-bold": "6",
            demibold: "6",
            bold: "7",
            "extra-bold": "8",
            extrabold: "8",
            "ultra-bold": "8",
            ultrabold: "8",
            black: "9",
            heavy: "9",
            l: "3",
            r: "4",
            b: "7"
        },
        ga = {
            i: "i",
            italic: "i",
            n: "n",
            normal: "n"
        },
        ha = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
    U.prototype.parse = function() {
        for (var a = this.s.length, b = 0; a > b; b++) {
            var c = this.s[b].split(":"),
                d = c[0].replace(/\+/g, " "),
                e = ["n4"];
            if (2 <= c.length) {
                var f, g = c[1];
                if (f = [], g)
                    for (var g = g.split(","), h = g.length, i = 0; h > i; i++) {
                        var j;
                        if (j = g[i], j.match(/^[\w-]+$/)) {
                            j = ha.exec(j.toLowerCase());
                            var k = void 0;
                            if (null == j) k = "";
                            else {
                                if (k = void 0, k = j[1], null == k || "" == k) k = "4";
                                else var l = fa[k],
                                    k = l ? l : isNaN(k) ? "4" : k.substr(0, 1);
                                j = j[2], k = [null == j || "" == j ? "n" : ga[j], k].join("")
                            }
                            j = k
                        } else j = "";
                        j && f.push(j)
                    }
                0 < f.length && (e = f), 3 == c.length && (c = c[2], f = [], c = c ? c.split(",") : f, 0 < c.length && (c = ea[c[0]]) && (this.K[d] = c))
            }
            for (this.K[d] || (c = ea[d]) && (this.K[d] = c), c = 0; c < e.length; c += 1) this.da.push(new y(d, e[c]))
        }
    };
    var ia = {
        Arimo: !0,
        Cousine: !0,
        Tinos: !0
    };
    V.prototype.D = function(a, b) {
        b(a.m.N)
    }, V.prototype.load = function(a) {
        var b = this.c;
        "MSIE" == this.a.getName() && 1 != this.e.blocking ? i(b, f(this.$, this, a)) : this.$(a)
    }, V.prototype.$ = function(a) {
        for (var b = this.c, c = new T(this.e.api, l(b), this.e.text), d = this.e.families, e = d.length, f = 0; e > f; f++) {
            var g = d[f].split(":");
            3 == g.length && c.V.push(g.pop());
            var h = "";
            2 == g.length && "" != g[1] && (h = ":"), c.s.push(g.join(h))
        }
        d = new U(d), d.parse(), m(b, c.f()), a(d.da, d.K, ia)
    }, W.prototype.I = function(a) {
        var b = this.c;
        return l(this.c) + (this.e.api || "//f.fontdeck.com/s/css/js/") + (b.w.location.hostname || b.J.location.hostname) + "/" + a + ".js"
    }, W.prototype.D = function(a, b) {
        var c = this.e.id,
            d = this.c.w,
            e = this;
        c ? (d.__webfontfontdeckmodule__ || (d.__webfontfontdeckmodule__ = {}), d.__webfontfontdeckmodule__[c] = function(a, c) {
            for (var d = 0, f = c.fonts.length; f > d; ++d) {
                var g = c.fonts[d];
                e.p.push(new y(g.name, A("font-weight:" + g.weight + ";font-style:" + g.style)))
            }
            b(a)
        }, n(this.c, this.I(c), function(a) {
            a && b(!1)
        })) : b(!1)
    }, W.prototype.load = function(a) {
        a(this.p)
    }, X.prototype.I = function(a) {
        var b = l(this.c);
        return (this.e.api || b + "//use.typekit.net") + "/" + a + ".js"
    }, X.prototype.D = function(a, b) {
        var c = this.e.id,
            d = this.c.w,
            e = this;
        c ? n(this.c, this.I(c), function(a) {
            if (a) b(!1);
            else {
                if (d.Typekit && d.Typekit.config && d.Typekit.config.fn) {
                    a = d.Typekit.config.fn;
                    for (var c = 0; c < a.length; c += 2)
                        for (var f = a[c], g = a[c + 1], h = 0; h < g.length; h++) e.p.push(new y(f, g[h]));
                    try {
                        d.Typekit.load({
                            events: !1,
                            classes: !1
                        })
                    } catch (i) {}
                }
                b(!0)
            }
        }, 2e3) : b(!1)
    }, X.prototype.load = function(a) {
        a(this.p)
    }, Y.prototype.D = function(a, b) {
        var c = this,
            d = c.e.projectId,
            e = c.e.version;
        if (d) {
            var f = c.c.w;
            n(this.c, c.I(d, e), function(e) {
                if (e) b(!1);
                else {
                    if (f["__mti_fntLst" + d] && (e = f["__mti_fntLst" + d]()))
                        for (var g = 0; g < e.length; g++) c.p.push(new y(e[g].fontfamily));
                    b(a.m.N)
                }
            }).id = "__MonotypeAPIScript__" + d
        } else b(!1)
    }, Y.prototype.I = function(a, b) {
        var c = l(this.c),
            d = (this.e.api || "fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/, "");
        return c + "//" + d + "/" + a + ".js" + (b ? "?v=" + b : "")
    }, Y.prototype.load = function(a) {
        a(this.p)
    }, Z.prototype.load = function(a) {
        var b, c, d = this.e.urls || [],
            e = this.e.families || [],
            f = this.e.testStrings || {};
        for (b = 0, c = d.length; c > b; b++) m(this.c, d[b]);
        for (d = [], b = 0, c = e.length; c > b; b++) {
            var g = e[b].split(":");
            if (g[1])
                for (var h = g[1].split(","), i = 0; i < h.length; i += 1) d.push(new y(g[0], h[i]));
            else d.push(new y(g[0]))
        }
        a(d, f)
    }, Z.prototype.D = function(a, b) {
        return b(a.m.N)
    }, $.prototype.load = function(a) {
        var b, c, d = this.e.families || [];
        0 < d.length && (b = d.join("|"), "" !== b && (b = b.replace(/ /g, ""), m(this.c, "/type/css?family=" + b)));
        var e = [];
        for (b = 0, c = d.length; c > b; b++) {
            var f = d[b].split(":");
            if (f[1])
                for (var g = f[1].split(","), h = 0; h < g.length; h += 1) e.push(new y(f[0], g[h]));
            else e.push(new y(f[0]))
        }
        a(e)
    }, $.prototype.D = function(a, b) {
        return b(a.m.N)
    };
    var ja = new Q(this);
    R("custom", function(a, b) {
        return new Z(b, a)
    }), R("Persona", function(a, b) {
        return new $(b, a)
    }), R("fontdeck", function(a, b) {
        return new W(b, a)
    }), R("monotype", function(a, b) {
        return new Y(b, a)
    }), R("typekit", function(a, b) {
        return new X(b, a)
    }), R("google", function(a, b) {
        return new V(b, a)
    }), this.WebFont || (this.WebFont = {}, this.WebFont.load = f(ja.load, ja), this.WebFontConfig && ja.load(this.WebFontConfig))
}(this, document);
var Cargo = {};
Cargo.o = {}, Cargo.o.model = {}, Cargo.o.collection = {}, Cargo.o.view = {}, Cargo.Router = {}, Cargo.Template = {}, Cargo.Helper = {}, Cargo.API = {}, Cargo.Event = {}, Cargo.Collection = {}, Cargo.Model = {}, Cargo.View = {};
var Action = window.Action || {};
Cargo.Core = {
    log: function(a) {
        "undefined" != typeof console && window.console && console.log(a)
    },
    KeyboardShortcut: {
        Add: function(a, b, c) {
            var d = {
                type: "keydown",
                disable_in_input: !0,
                propagate: !0,
                keycode: b
            };
            shortcut.add(a, c, d)
        },
        Remove: function(a) {
            shortcut.remove(a)
        },
        InitDefaults: function() {
            Cargo.Helper.IsPersonaAdmin() || (this.Add("X", 88, function() {
                Action.Project.Index()
            }), this.Add("I", 73, function() {
                Action.Project.Index()
            })), this.Add("Shift+B", 66, function() {
                Cargo.Helper.IsPersonaAdmin() || Cargo.View.Backstage.Toggle()
            }), this.Add("Shift+A", 65, function() {
                Cargo.Helper.GoToUrl("admin")
            }), this.Add("Shift+E", 69, function() {
                Cargo.Model.Site.GetIsEditor() && Cargo.Model.Page.GetId() && parent.location == window.location && Cargo.Helper.GoToUrl("admin/" + Cargo.Model.Page.GetId())
            }), this.Add("Shift+H", 72, function() {
                Cargo.Helper.GoToUrl("admin/design/html")
            }), this.Add("Shift+C", 67, function() {
                Cargo.Helper.GoToUrl("admin/design/css")
            }), this.Add("Shift+D", 68, function() {
                Cargo.Helper.GoToUrl("admin/design")
            }), this.Add("Shift+X", 88, function() {
                Cargo.Helper.GoToUrl("")
            }), this.Add("Esc", 27, function() {
                Cargo.View.Backstage.isActive() && !Cargo.Modal.isActive() && Cargo.View.Backstage.Toggle()
            })
        }
    },
    InitKeycodeListener: function() {
        var a = _.bind(function(a) {
            a.shiftKey || (83 == a.keyCode && (navigator.platform.match("Mac") ? a.metaKey : a.ctrlKey) && (a.preventDefault(), Cargo.Event.trigger("save_shortcut_triggered", a), Cargo.contentWindow || window.top.Cargo.Event.trigger("save_shortcut_triggered", a)), 13 == a.keyCode && Cargo.Event.trigger("enter_keycode_triggered", a), 27 == a.keyCode && Cargo.Event.trigger("esc_keycode_triggered", a))
        }, this);
        document.addEventListener("keydown", a, !1)
    },
    ReplaceLoadingAnims: {
        init: function(a) {
            $(".retinaSpinner").each(function() {
                window.devicePixelRatio > 1 && $(this).addClass("rotating")
            }), setTimeout(function() {
                if (Cargo.Helper && !Cargo.Helper.isOldIE()) {
                    for (var b = $("<div></div>"), c = 0; 8 > c; c++) b.append('<div style="position: absolute; top: -2px;"><div class="spinner_circle part' + (c + 1) + '" style="-webkit-transform: rotate(' + 45 * c + "deg) translate(6px, 0px); transform: rotate(" + 45 * c + 'deg) translate(6px, 0px);"></div></div>');
                    "undefined" == typeof a && $('img[src$="/loadingAnim.gif"]').length > 0 ? $('img[src$="/loadingAnim.gif"]').each(function() {
                        Cargo.Core.ReplaceLoadingAnims.replace(this, b)
                    }) : "undefined" != typeof a && a.each(function() {
                        Cargo.Core.ReplaceLoadingAnims.replace(this, b)
                    }), Cargo.Event.trigger("loading_anims_replaced")
                }
            }, 100)
        },
        replace: function(a, b) {
            var c = b.clone();
            c.attr("class", "retinaSpinner " + $(a).attr("class")), c.attr("id", $(a).attr("id")), c.attr("style", $(a).attr("style")), c.attr("data-loading", $(a).attr("data-loading")), window.devicePixelRatio > 1 && c.addClass("rotating"), $(a).replaceWith(c)
        }
    },
    ReseedPageModels: function() {
        Cargo.API.Config.current_offset = 0, Cargo.API.Config.current_page = 0, Cargo.API.Config.site_recently_created = !1, Cargo.Collection.Pages.url = Cargo.API.GetPagesPath(0), Cargo.Collection.Pages.fetch({
            reset: !0,
            merge: !0,
            complete: function() {
                Cargo.Event.trigger("reseed_pages_complete")
            }
        })
    },
    HiRes: {
        active: !1,
        Queue: {
            STATE_LOADING: 0,
            STATE_COMPLETE: 1,
            STATE_ERROR: -1,
            ID: "hi-res-queue",
            FILE_EXTENSION: /(?:\.([^.]+))?$/,
            FILE_NAME: /(?:\/([^\/]+))?$/,
            element: null,
            init: function() {
                $("body").append('<div id="' + this.ID + '" style="display: none;" />'), this.element = $("#" + this.ID)
            },
            search: function() {
                Cargo.Core.HiRes.active && $("[data-hi-res]").map(function() {
                    "IMG" === this.nodeName && Cargo.Core.HiRes.Queue.push(this)
                })
            },
            push: function(a) {
                var b = a.src,
                    c = $(a).data("hi-res"),
                    d = $(a).data("mid"),
                    e = d ? "hi-res-queue-" + d : "hi-res-queue-" + b.match(this.FILE_NAME)[1].replace(/[\W\.(_2x)]/g, ""),
                    f = $("#" + e);
                if (f.length) switch (f.attr("data-hi-res-status")) {
                    case this.STATE_COMPLETE:
                        return this.handleCachedImage(f, a);
                    case this.STATE_LOADING:
                        return this.handleDuplicateImage(f, a);
                    default:
                        return
                } else this.element.append('<img id="' + e + '" data-hi-res-status="' + this.STATE_LOADING + '">'), f = $("#" + e), f.data("lo-res-images", [a]), f.one("load", function() {
                    Cargo.Core.HiRes.Queue.handleLoad(f)
                }).one("error", function() {
                    Cargo.Core.HiRes.Queue.handleError(f)
                }).attr("src", c)
            },
            handleCachedImage: function(a, b) {
                b.src = a.attr("src")
            },
            handleDuplicateImage: function(a, b) {
                var c = a.data("lo-res-images");
                c.push(b), a.data("lo-res-images", c)
            },
            handleLoad: function(a) {
                var b = a.attr("src");
                a.attr("data-hi-res-status", this.STATE_COMPLETE), a.data("lo-res-images").map(function(a) {
                    a.src = b
                })
            },
            handleError: function(a) {
                a.attr("data-hi-res-status", this.STATE_ERROR)
            }
        },
        Loader: {
            init: function() {
                function a() {
                    var a = parseFloat($.cookie("userPixelRatio"));
                    a != window.devicePixelRatio && (window.devicePixelRatio > 1.5 ? c() : b()), $.cookie("userPixelRatio", window.devicePixelRatio, {
                        path: "/"
                    })
                }

                function b() {
                    $.post("/dispatch/delegate/useHiRes", {
                        use: !1
                    }, function() {}, "json")
                }

                function c() {
                    $.post("/dispatch/delegate/useHiRes", {
                        use: !0
                    }, function() {}, "json"), $(document).bind("projectLoadComplete", function(a, b) {
                        Cargo.Core.HiRes.Queue.search()
                    }), $(document).bind("pageChangeComplete", function(a, b) {
                        Cargo.Core.HiRes.Queue.search()
                    }), $(document).bind("paginationComplete", function(a) {
                        Cargo.Core.HiRes.Queue.search()
                    }), Cargo.Core.HiRes.active = !0, Cargo.Core.HiRes.Queue.init(), Cargo.Core.HiRes.Queue.search()
                }
                a();
                try {
                    var d = window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5)");
                    "function" == typeof d.addListener && d.addListener(function() {
                        a()
                    })
                } catch (e) {}
            }
        }
    }
}, Cargo.o.analytics = Backbone.View.extend({
    Config: {
        id: "UA-1837333-14",
        name: "__persona_analytics"
    },
    initialize: function() {
        Cargo.API.Config.is_domain && (this.Config.custom_url = "/" + document.location.host),
            function(a, b, c, d, e, f, g) {
                a.GoogleAnalyticsObject = e, a[e] = a[e] || function() {
                    (a[e].q = a[e].q || []).push(arguments)
                }, a[e].l = 1 * new Date, f = b.createElement(c), g = b.getElementsByTagName(c)[0], f.async = 1, f.src = d, g.parentNode.insertBefore(f, g)
            }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga"), ga("create", this.Config.id, "auto", {
                name: this.Config.name,
                cookieName: this.Config.name
            }), this.pageview(!1)
    },
    pageview: function(a, b) {
        if ("undefined" != typeof b && !a) return void ga(this.Config.name + ".send", "pageview", {
            page: b
        });
        var c = this.Config.name,
            d = document.location.pathname.replace(/\/$/, "");
        "undefined" != typeof this.Config.custom_url ? ga(this.Config.name + ".send", "pageview", {
            page: this.Config.custom_url + d
        }) : ga(this.Config.name + ".send", "pageview"), a && (ga(function() {
            ga.getAll().map(function(a) {
                var b = a.get("name");
                b != c && ga(b + ".send", "pageview")
            })
        }), "undefined" != typeof _gaq && _gaq.push(["_trackPageview", d]))
    }
}), Cargo.o.api = Backbone.View.extend({
    Config: {
        Version: "v0",
        api_path: "/_api",
        cargo_id: "",
        cargo_url: "",
        filter: "",
        search_term: "",
        route_name: "",
        template_basename: "design",
        current_offset: 0,
        current_page: 1,
        start_project: null,
        is_filter: !1,
        is_search: !1,
        is_editor: !1,
        is_solo: !1,
        is_direct_link: !1,
        is_custom_route: !1,
        admin_edit_project: !1,
        first_load_finished: !1
    },
    initialize: function() {
        _.extend(this.Config, $.parseJSON($("script[data-set='defaults']").html()))
    },
    fetch: function(a, b) {
        $.getJSON(a, b)
    },
    GetSitePath: function() {
        var a = this.Config,
            b = a.api_path + "/" + a.Version + "/site/" + a.cargo_url;
        return b
    },
    GetDesignPath: function() {
        var a = this.Config,
            b = a.api_path + "/" + a.Version + "/designs/" + a.cargo_url;
        return b
    },
    GetDesignPresetPath: function() {
        var a = this.Config,
            b = a.api_path + "/" + a.Version + "/designpresets";
        return b
    },
    GetDesignFile: function(a) {
        var b = this.GetDesignPath() + "?file=" + a;
        return b
    },
    GetTemplatePath: function() {
        var a = this.Config,
            b = a.route_name ? a.route_name + "/" : "";
        return this.GetDesignFile(".templates/" + a.template_basename + "/" + b)
    },
    GetFilesPath: function() {
        var a = this.Config,
            b = a.api_path + "/" + a.Version + "/files";
        return b
    },
    GetDesignAndFile: function(a, b) {
        var c = this.GetTemplatePath() + a;
        return b && (c += "&to_var=true"), c
    },
    GetDisplayOptionsPath: function() {
        var a = this.Config,
            b = a.api_path + "/" + a.Version + "/displayoptions/" + a.cargo_url;
        return b
    },
    GetImagesPath: function(a, b, c) {
        a = a ? a : this.Config.current_offset, b = b ? b : Cargo.Helper.GetPageLimit(), c = c ? c : "newest";
        var d = this.GetSitePath() + "/images";
        return d += "?offset=" + a + "&limit=" + b + "&sort=" + c
    },
    GetPluginsPath: function() {
        var a = this.Config,
            b = a.api_path + "/" + a.Version + "/backdrops";
        return b
    },
    GetPagesPath: function() {
        return this.GetSitePath() + "/pages"
    },
    GetAdminListPath: function(a, b) {
        a = a ? a : this.Config.current_offset, b = b ? b : Cargo.Helper.GetPageLimit();
        var c = this.GetSitePath() + "/admincollection";
        return c
    },
    GetSinglePagePath: function(a, b, c) {
        var d = this.Config,
            e = d.api_path + "/" + d.Version + "/projects/";
        return b = b ? b : this.Config.filter, c = c ? c : this.Config.set, "undefined" != typeof a && (e += a), e += "?url=" + d.cargo_url, "" != b && (e += "&filter=" + encodeURIComponent(b)), c && (e += "&set=" + encodeURIComponent(c)), e
    },
    GetSiteFilesPutPath: function() {
        return "/dispatch/files/putFile"
    },
    GetDataPackage: function(a, b) {
        var c = {
            site: Cargo.Model.Site.toJSON(),
            display_options: Cargo.Model.DisplayOptions.toJSON(),
            config: this.Config
        };
        return c[a] = b, c
    },
    FetchPageCollection: function(a, b) {
        a = a ? a : this.Config.current_offset, b = b ? b : Cargo.Helper.GetPageLimit(), Cargo.Collection.Pages.url = Cargo.API.GetPagesPath(a, b);
        Cargo.Helper.GetTotalProjectsInMemory();
        Cargo.Collection.Pages.fetch({
            reset: !0
        })
    },
    GetSinglePage: function(a, b) {
        Cargo.Event.trigger("page_load_start", a), "undefined" == typeof b && (b = Cargo.Collection.Pages);
        var c = b.findWhere({
            project_url: a
        });
        c || isNaN(a) || (c = b.findWhere({
            id: parseInt(a)
        })), c && !this.Config.site_recently_created ? Cargo.Model.Page.set(c.toJSON()) : (Cargo.Core.log("No model found, async for " + a), (new Cargo.Model.BasePage).fetch({
            data: {
                purl: a
            },
            error: function(a, b) {
                try {
                    var c = $.parseJSON(b.responseText);
                    "no pid found" === c.message.toLowerCase() && (Cargo.Modal.Alert({
                        message: "That page no longer exists",
                        confirm: function() {
                            window.history.back()
                        }
                    }), Cargo.Helper.HideLoadingAnimation())
                } catch (d) {}
            },
            success: function(a, b, c) {
                Cargo.Collection.Pages.add(a.toJSON()), Cargo.Model.Page.set(a.toJSON()), Cargo.Event.trigger("page_load_complete", a.get("id"))
            }
        }))
    },
    PutSiteFile: function(a, b, c) {
        $.ajax({
            type: "POST",
            url: this.GetSiteFilesPutPath(),
            context: this,
            data: {
                file: a,
                data: b,
                uid: Cargo.Model.Site.GetId()
            },
            dataType: "json",
            success: function(a) {
                "function" == typeof c && c.call(this, a)
            },
            error: function(a) {}
        })
    }
}), Action = {
    Project: {
        Index: function() {
            Cargo.View.Main.ShowIndex()
        },
        Close: function() {
            Cargo.View.Main.ShowIndex()
        },
        Home: function() {
            Cargo.View.Main.ShowHome()
        }
    },
    Start: function(a) {
        $("[data-example-start]").html('<div class="loading_animation pulsing white inline right"><div></div></div>'), Cargo.API.Config.cookie_link && Cargo.API.Config.cookie_site_count > 0 ? Cargo.Modal.Alert({
            message: "<em>Youâ€™re already logged in; you can create new Personas in your Settings panel.</em>",
            confirm: function() {
                top.document.location.href = Cargo.API.Config.cookie_link + "/admin"
            }
        }) : require(["/_jsapps/editor/_models/adminsite.js"], function(b) {
            var c = new b;
            c.bind("sync", function(a, b) {
                document.location.href = b.redirect
            }), c.bind("error", function(a, b) {
                var c = JSON.parse(b.responseText);
                c && c.message ? Cargo.Modal.Alert({
                    message: c.message,
                    confirm: function() {
                        c.data.redirect && (document.location.href = c.data.redirect)
                    }
                }) : Cargo.Modal.Alert({
                    message: "There was a problem submitting. Refresh and try again."
                }), $("[data-example-start]").html("Choose Style")
            }), a = a ? a : Cargo.Model.Site.GetId(), c.set({
                preset_id: a
            }), c.save()
        })
    }
}, Cargo.Event = Cargo.Event || {}, _.extend(Cargo.Event, Backbone.Events), Cargo.Event.on("add_history", function(a, b) {
    return Cargo.Router.is_first_route = !1, a = Cargo.Helper.NormalizeRouteLink(a), a == Cargo.Helper.GetCurrentProjectUrl() ? void(Cargo.Model.DisplayOptions.GetDisableProjectScroll() || Cargo.Helper.ScrollToTop()) : (Cargo.Helper.IsCurrentRoute(a) ? Cargo.Model.DisplayOptions.GetDisableProjectScroll() || Cargo.Helper.ScrollToTop() : (b = b ? b : Cargo.Helper.GetPidFromPurl(a), "admin" == a || /^backstage/.test(a) || Cargo.Helper.ShowLoadingAnimation(b, a)), /^backstage/.test(Cargo.Router.previousRoute) || /^backstage/.test(Backbone.history.getFragment()) || !/^backstage/.test(a) || (Cargo.Router.previousSiteRoute = Backbone.history.getFragment()), Cargo.Router.previousRoute = Backbone.history.getFragment(), void Cargo.Router.navigate(a, {
        trigger: !0
    }))
}), Cargo.Event.on("add_history_passive", function(a) {
    a = Cargo.Helper.NormalizeRouteLink(a), Cargo.Router.navigate(a, {
        trigger: !1
    })
}), Cargo.Event.on("custom_route_loaded", function(a) {}), Cargo.Event.on("direct_link_loaded", function(a) {}), Cargo.Event.on("first_page_collection_reset", function() {
    Cargo.API.Config.first_load_finished = !0
}), Cargo.Event.on("hide_loading_anim", function() {
    "object" == typeof Cargo.Helper && Cargo.Helper.HideLoadingAnimation()
}), Cargo.Event.on("homepage_loaded", function() {
    Cargo.View.Navigation && Cargo.View.Navigation.AddSetActive(), Cargo.Model.DisplayOptions.GetDisableProjectScroll() || Cargo.Helper.ScrollToTop()
}), Cargo.Event.on("loading_anims_replaced", function() {}), Cargo.Event.on("plugin_render", function(a) {
    a.el.style.opacity = 0, a.el.style.transition = "opacity .5s", a.el.style.webkitTransition = "opacity .5s", void 0 === a.deferredLoadEventName ? setTimeout(function() {
        a.el.style.opacity = 1
    }, 33) : Cargo.Event.once(a.deferredLoadEventName, function() {
        a.el.style.opacity = 1
    })
}), Cargo.Event.on("page_change", function() {}), Cargo.Event.on("page_collection_reset", function() {}), Cargo.Event.on("page_load_complete", function(a) {
    Cargo.Event.PageTransition = new $.Deferred, Cargo.Model.DisplayOptions.GetDisableProjectScroll() || Cargo.Helper.ScrollToTop(), Cargo.View.ProjectDetail && Cargo.View.ProjectDetail.ChangeBgColorFromModel(), Cargo.View.Main && !Cargo.Helper.IsOnHomepage() && Cargo.View.Main.RemoveHomepageClass(), Cargo.Helper.HideLoadingAnimation(), Cargo.View.Main.SetWindowTitle(), Cargo.API.Config.is_direct_link || Cargo.Helper.IsOnHomepage() || Cargo.Analytics.pageview(!0), Cargo.Core.Slideshow.InitSlideshow(), Cargo.View.Main.SetPageId(a), Cargo.Event.trigger("project_load_complete", a)
}), Cargo.Event.on("page_load_start", function(a) {
    Cargo.Event.trigger("page_change")
}), Cargo.Event.on("project_load_start", function(a) {
    Cargo.Event.trigger("page_load_start", a)
}), Cargo.Event.on("reseed_pages_complete", function(a) {}), Cargo.Event.on("show_index_complete", function(a) {
    Cargo.View.Main.SetWindowTitle(!0), Cargo.Event.IndexTransition = new $.Deferred
}), Cargo.Event.on("show_index_start", function(a) {
    Cargo.Event.trigger("page_change")
}), Cargo.Event.on("show_loading_anim", function() {
    Cargo.Helper.ShowLoadingAnimation(null, "page")
}), Cargo.Event.on("solo_link_loaded", function(a) {}), Cargo.Event.on("template_loaded", function(a) {}), Cargo.Event.PageTransition = new $.Deferred, Cargo.Event.IndexTransition = new $.Deferred, Cargo.Event.ShowPageTransition = function(a, b, c) {
    return Cargo.Event.PageTransition.resolve(), Cargo.Event.PageTransition.promise()
}, Cargo.Event.ShowIndexTransition = function(a, b) {
    return Cargo.Event.IndexTransition.resolve(),
        Cargo.Event.IndexTransition.promise()
};
var preventScrollDuringPopstate = !1;
$(window).on("popstate", function() {
    preventScrollDuringPopstate = !0, setTimeout(function() {
        preventScrollDuringPopstate = !1
    }, 10)
}), Cargo.o.helpers = Backbone.View.extend({
    Data: {
        is_loading: !1,
        loading_timout: 1e3
    },
    FindCollectionByProjectUrl: function(a) {
        var b = !1;
        return _.each(Cargo.Collection.Page, function(c) {
            if (!b) {
                var d = new Backbone.Collection;
                d.reset(c);
                var e = d.where({
                    project_url: a
                });
                e[0] && (b = c)
            }
        }), b
    },
    GetActiveIndex: function(a) {
        var b = Cargo.Helper.GetHomeUrl(!0, !0);
        return a ? location.protocol + "//" + this.GetBaseDomain() + b : b
    },
    GetBackboneCaseInsensitive: function(a, b) {
        var c = {};
        for (var d in a) !a.hasOwnProperty(d) || "function" != typeof a[d] && "object" != typeof a[d] || (c[d.toLowerCase()] = d);
        return b ? c[b.toLowerCase()] : ""
    },
    GetBaseUrl: function(a, b) {
        if (Cargo.API.Config.is_domain) return b ? "/" : "";
        var c = a ? Cargo.API.Config.cargo_url : "";
        return b ? "/" + c : c
    },
    GetBaseCargoDomain: function() {
        var a = Cargo.Model.Site.get("home_url");
        return a ? a.replace(/(http(s)?:\/\/)/, "") : document.location.host
    },
    GetBaseDomain: function() {
        return Cargo.Model.Site.get("home_url").replace(/(http(s)?:\/\/)/, "")
    },
    GetCurrentProjectUrl: function() {
        return Cargo.Model.Page.GetProjectUrl()
    },
    GetCurrentProjectId: function() {
        return Cargo.Model.Page.GetId()
    },
    GetCurrentRoute: function() {
        return Backbone.history.fragment
    },
    GetDomainOrUrl: function() {
        return Cargo.API.Config.is_domain ? this.GetUrl() : location.pathname.split("/")[1]
    },
    GetHomeUrl: function(a, b) {
        var c = b ? "/" : "";
        return Cargo.API.Config.set && Cargo.API.Config.filter ? Cargo.API.Config.is_domain ? c + Cargo.API.Config.set + "/filter/" + encodeURIComponent(Cargo.API.Config.filter) : this.GetBaseUrl(a, b) + "/" + Cargo.API.Config.set + "/filter/" + encodeURIComponent(Cargo.API.Config.filter) : Cargo.API.Config.route && Cargo.API.Config.filter ? Cargo.API.Config.is_domain ? Cargo.Helper.GetRouteUrl() + "/filter/" + encodeURIComponent(Cargo.API.Config.filter) : this.GetBaseUrl(a, !1) + Cargo.Helper.GetRouteUrl() + "/filter/" + encodeURIComponent(Cargo.API.Config.filter) : Cargo.API.Config.filter ? Cargo.API.Config.is_domain ? c + "filter/" + encodeURIComponent(Cargo.API.Config.filter) : this.GetBaseUrl(a, b) + "/filter/" + encodeURIComponent(Cargo.API.Config.filter) : Cargo.API.Config.set ? Cargo.API.Config.is_domain ? c + Cargo.API.Config.set : this.GetBaseUrl(a, b) + "/" + Cargo.API.Config.set : Cargo.API.Config.route && Cargo.API.Config.is_domain ? Cargo.Helper.GetRouteUrl() : this.GetBaseUrl(a, b)
    },
    GetOffsetFromPage: function(a) {
        var b = this.GetPageLimit();
        return a--, a * b
    },
    GetPageLimit: function() {
        var a = Cargo.Model.DisplayOptions.GetPaginationCount();
        return a && Cargo.Model.DisplayOptions.GetIndexRouteName() && Cargo.Model.DisplayOptions.GetIndexRouteName().toUpperCase() == Cargo.Helper.GetRouteName().toUpperCase() && Cargo.Model.DisplayOptions.get("index_pagination_count") ? a = Cargo.Model.DisplayOptions.get("index_pagination_count") : Cargo.Model.DisplayOptions.get("mobile_pagination_count") && this.isMobile() && (a = Cargo.Model.DisplayOptions.get("mobile_pagination_count")), a ? a : 10
    },
    GetPidFromPurl: function(a) {
        var b = Cargo.Collection.Pages.where({
            project_url: a
        });
        return b[0] ? b[0].get("id") : 0
    },
    GetRouteName: function() {
        var a = Cargo.API.Config.route_name;
        return /display_options/.test(Cargo.API.Config.route) && (a = Cargo.Model.DisplayOptions.GetIndexRouteName()), a
    },
    GetRouteUrl: function() {
        var a = Cargo.API.Config.route_name;
        return (/display_options/.test(Cargo.API.Config.route) || "feed" == a || "index" == a) && (a = Cargo.Model.DisplayOptions.GetIndexRouteUrl()), a
    },
    GetStartProjectId: function() {
        return Math.floor(Cargo.Model.Site.GetStartProjectId())
    },
    GetTotalProjectsInMemory: function() {
        var a = Cargo.Collection.Pages.length;
        if (Cargo.Helper.IsAutopaginate()) return a;
        var b = 0;
        return $.each(Cargo.Collection.Page, function() {
            b += this.length
        }), a + b
    },
    GetUrl: function() {
        return Cargo.API.Config.cargo_url
    },
    GoToUrl: function(a) {
        top.document.location.href = document.location.origin + "/" + a
    },
    HideLoadingAnimation: function(a) {
        this.Data.is_loading = !1, $("[data-loading]").hide()
    },
    IsAdminEdit: function() {
        var a = /\/adminedit/.test(document.location.pathname) || /\/admin/.test(document.location.pathname),
            b = void 0 != Cargo.Editor;
        return a || b
    },
    IsAdminBackdrop: function() {
        return /\/adminbackdrop/.test(document.location.pathname)
    },
    IsCurrentRoute: function(a) {
        return a = this.NormalizeRouteLink(a), Cargo.Helper.GetCurrentRoute() == a
    },
    IsCustomRoute: function() {
        return Cargo.API.Config.is_custom_route
    },
    isFirefox: function() {
        return /Firefox\/\d+\.\d+/.test(navigator.userAgent)
    },
    isSafari: function() {
        return -1 != navigator.userAgent.indexOf("Safari") && -1 == navigator.userAgent.indexOf("Chrome")
    },
    isIE: function() {
        return /MSIE (\d+\.\d+);/.test(navigator.userAgent)
    },
    isEdge: function() {
        return /Edge/.test(navigator.userAgent)
    },
    isIE8: function() {
        var a = -1;
        if (this.isIE()) {
            var b = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
            null != b.exec(navigator.userAgent) && (a = parseFloat(RegExp.$1))
        }
        return 9 > a && a > 0
    },
    isIOS: function() {
        return !!navigator.userAgent.match(/i(Phone|Pod|Pad)/i)
    },
    isMobile: function() {
        if (this.isIOS()) return !0;
        var a = !1,
            b = navigator.userAgent || navigator.vendor || window.opera;
        return function(b) {
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))) && (a = !0)
        }(b), a = a || !a && /(android)/i.test(b.substr(0, 40))
    },
    IsOnHomepage: function() {
        return "" == Cargo.Helper.GetCurrentRoute() && null != Cargo.Helper.GetStartProjectId()
    },
    isOldIE: function() {
        var a = -1;
        if (this.isIE()) {
            var b = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
            null != b.exec(navigator.userAgent) && (a = parseFloat(RegExp.$1))
        }
        return 9 >= a && a > 0
    },
    IsPermalink: function(a, b) {
        var c = !1,
            d = !1,
            e = !1,
            f = this.GetRouteUrl() ? this.GetRouteUrl().replace(/\//, "") : "";
        (this.IsCurrentProject(a) || this.IsCurrentProjectId(a) || this.IsCurrentRoute(a) || f == a || Cargo.Helper.GetRouteName() == f || "Website-Offline-message" == a) && (c = !0), Cargo.Helper.IsOnHomepage() && Cargo.Model.Page.GetProjectUrl() != a && (d = !0), Cargo.Collection.Pages.models.length >= 1 && Cargo.Collection.Pages.models[0].id && (e = !0);
        var g = Cargo.Model.Page.GetProjectUrl() == a || Cargo.Model.Page.GetId() == a || this.GetRouteName() == a || this.GetCurrentRoute() == a || "Website-Offline-message" == a,
            d = Cargo.Helper.IsOnHomepage() && Cargo.Model.Page.GetProjectUrl() != a,
            h = !Cargo.API.Config.first_load_finished && (g || d),
            i = !Cargo.API.Config.first_load_finished && !e && (c || d);
        return i || d || this.IsAdminEdit() || !b || e || (h = !1), h
    },
    IsPersonaAdmin: function() {
        var a = /\/admin(\/|$)/.test(document.location.pathname);
        return a
    },
    IsPresetPreview: function() {
        var a = /\/presetpreview(\/|$)/.test(document.location.pathname);
        return a
    },
    IsCurrentProject: function(a) {
        return Cargo.Model.Page.GetProjectUrl() && a && Cargo.Model.Page.GetProjectUrl().toLowerCase() == a.toLowerCase()
    },
    IsCurrentProjectId: function(a) {
        return Cargo.Model.Page.GetId() && a && Cargo.Model.Page.GetProjectUrl() == a
    },
    IsCurrentRoute: function(a) {
        return this.GetRouteName() && a && this.GetRouteName().toLowerCase() == a.toLowerCase()
    },
    isTablet: function() {
        var a = new MobileDetect(window.navigator.userAgent);
        return "string" == typeof a.tablet()
    },
    NormalizeRouteLink: function(a) {
        if (!a) return a; - 1 !== a.indexOf(Cargo.Helper.GetBaseDomain()) && (a = a.split(Cargo.Helper.GetBaseDomain())[1]), "/" == a.charAt(0) && (a = a.replace("/", "")), /backstage/.test(a) || 0 != a.search(this.GetHomeUrl(!0)) || (a = a.replace(this.GetHomeUrl(!0) + "/", "")), "/" == a.charAt(a.length - 1) && (a = a.substr(0, a.length - 1));
        var b = Cargo.Collection.Pages.findWhere({
            project_url: a
        });
        return "undefined" != typeof b && b.get("id") == Cargo.Helper.GetStartProjectId() && (a = ""), a
    },
    ScrollToTop: function() {
        preventScrollDuringPopstate !== !0 && requestAnimationFrame(function() {
            window.scrollTo(0, 0)
        })
    },
    ShowLoadingAnimation: function(a, b) {
        this.Data.is_loading = !0, a ? _.delay(function() {
            Cargo.Helper.ShowLoadingAnimationById(a)
        }, Cargo.Helper.Data.loading_timout) : b && _.delay(function() {
            Cargo.Helper.ShowLoadingAnimationById("page")
        }, Cargo.Helper.Data.loading_timout), $("*[data-loading=global], *[data-loading=global] .retinaSpinner").show()
    },
    ShowLoadingAnimationById: function(a) {
        this.Data.is_loading && $("*[data-loading=" + a + "], *[data-loading=" + a + "] .retinaSpinner").show()
    },
    TestUrlCaseAndRedirect: function() {
        if (!Cargo.API.Config.is_domain) {
            var a = document.location.pathname.split("/")[1],
                b = Cargo.API.Config.cargo_url;
            a != b && a.toUpperCase() == b.toUpperCase() && history.replaceState(document.location.pathname.replace(a, b), Cargo.Model.Site.GetWebsiteTitle())
        }
    }
}), Cargo.o.router = Backbone.Router.extend({
    routes: {
        "": "Home",
        adminedit: "Home",
        admin: "Admin",
        backstage: "Backstage",
        "backstage/:section": "Backstage",
        "admin/:section": "Admin",
        "preview/:which": "Home",
        ":purl": "FirstSlashProxy",
        ":purl/solo": "SoloLink",
        ":purl/adminedit": "AdminEdit",
        "*actions": "defaultAction"
    },
    defaultAction: function(a) {
        this.route(a)
    },
    FirstSlashProxy: function(a) {
        this.RouteIsHome(a) ? this.Home() : Cargo.Helper.IsCustomRoute() ? this.CustomRoute(a) : /backstage/.test(a) ? this.Backstage() : this.ProjectDetail(a)
    },
    Home: function() {
        this.CheckToggleBackstage(), Cargo.Helper.GetStartProjectId() ? (this.ProjectDetail(Cargo.Helper.GetStartProjectId()), Cargo.View.Main && Cargo.View.Main.SetHomepageClass()) : Cargo.API.Config.offline ? Cargo.Event.trigger("page_load_complete") : (Cargo.Model.Page.clear(), Cargo.Event.trigger("homepage_loaded"))
    },
    Admin: function(a) {
        0 == $("#content_frame").length && "function" == typeof require && (this.CheckToggleBackstage(), Cargo.Helper.GoToUrl("admin"))
    },
    Backstage: function(a) {
        Cargo.View.Backstage.loadSection(a)
    },
    ProjectDetail: function(a) {
        if (this.CheckToggleBackstage(), a += "", a = a.replace(/\//g, ""), /\?/.test(a)) return void(document.location.href = document.location.href.replace(document.location.search, ""));
        var b = !0,
            c = Cargo.Helper.IsPermalink(a, b);
        c ? Cargo.View.ProjectDetail && Cargo.View.ProjectDetail.Permalink(a) : a && 0 != a && (Cargo.View.ProjectDetail || Cargo.API.Config.offline ? Cargo.API.GetSinglePage(a) : Cargo.Helper.GoToUrl(a))
    },
    CustomRoute: function(a) {
        this.CheckToggleBackstage(), Cargo.Event.trigger("custom_route_loaded", a)
    },
    SoloLink: function(a) {
        return this.CheckToggleBackstage(), Cargo.API.Config.is_solo = !0, Cargo.Event.trigger("solo_link_loaded", location.pathname), this.ProjectDetail(a)
    },
    AdminEdit: function(a) {
        return this.CheckToggleBackstage(), Cargo.API.Config.admin_edit_project = !0, this.ProjectDetail(a)
    },
    CheckToggleBackstage: function() {
        Cargo.View.Backstage.isActive() === !0 && Cargo.View.Backstage.disable()
    },
    _routeToRegExp: function(a) {
        return a = a.replace(/[-{}[\]+?.,\\^$|#\s]/g, "\\$&").replace(/\((.*?)\)/g, "(?:$1)?").replace(/:\w+/g, "([^/]+/?)").replace(/\*\w+/g, "(.*?)"), new RegExp("^" + a + "$", "i")
    },
    addroute: function(a, b, c) {
        for (var d = ["", "/", "?*querystring", "/?*querystring"], e = 0; e < d.length; e++) {
            var f = d[e];
            this.route(a + f, b, c)
        }
    },
    RouteIsHome: function(a) {
        var b = !1;
        return Cargo.API.Config.is_domain || a.toLowerCase() != Cargo.Helper.GetDomainOrUrl().toLowerCase() || document.location.pathname.replace("/").split("/").length <= 1 && (b = !0), b
    }
}), Cargo.o.templates = Backbone.View.extend({
    Data: {},
    Get: function(a, b) {
        return a = Cargo.Helper.GetBackboneCaseInsensitive(this.Data, a), this.Data[a] && this.Data[a].template ? this.Data[a].template : void this.Load(a, b)
    },
    GetEl: function(a) {
        return a = Cargo.Helper.GetBackboneCaseInsensitive(this.Data, a), this.Data[a] ? this.Data[a].element : void this.Load(a)
    },
    Add: function(a, b, c, d) {
        Cargo.Template.Data[a] = {
            dataset: c,
            setname: d,
            element: b
        }
    },
    FindAndAddViewStubs: function() {
        $("[data-view]").each(function() {
            var a = $(this).data("view"),
                b = $(this).data("set"),
                c = $(this).attr("id") ? "#" + $(this).attr("id") : "." + $(this).attr("class"),
                d = Cargo.Collection.Default;
            if (b) {
                var e = Cargo.Helper.GetBackboneCaseInsensitive(Cargo.Collection, b),
                    f = Cargo.Helper.GetBackboneCaseInsensitive(Cargo.Model, b);
                e ? d = Cargo.Collection[e] : f && (d = Cargo.Model[f])
            }
            Cargo.Template.Add(a, c, d, b)
        })
    },
    Load: function(which, file_path) {
        if (!file_path) {
            var file_name = which + ".handlebars";
            file_path = Cargo.API.GetDesignAndFile(file_name, !1)
        }
        Cargo.Template.Data[which] && Cargo.Template.Data[which].loading || (Cargo.Template.Data[which] || (Cargo.Template.Data[which] = {}), Cargo.Template.Data[which].loading = !0, $.loadFiles(file_path).done(function(template) {
            if (template) {
                try {
                    var template = eval(template)
                } catch (err) {}
                Cargo.Template.Data[which].template = template
            } else {
                var template_var = "templatesdesign" + file_name.replace(/(\/|\.)/g, "");
                Cargo.Template.Data[which].template = window[template_var]
            }
            return Cargo.Event.trigger("template_loaded", which), Cargo.Template.Data[which].template
        }))
    },
    LoadAll: function() {
        for (key in this.Data) "undefined" == typeof this.Data[key].template && this.Load(key)
    },
    LoadFoundViews: function() {
        for (key in this.Data) {
            var a = Cargo.Helper.GetBackboneCaseInsensitive(Cargo.o.view, key);
            if ("function" == typeof Cargo.o.view[a] && "undefined" == typeof Cargo.View[a]) {
                var b = this;
                $("[data-view='" + key + "']").each(function(c) {
                    var d = c > 0 ? a + "_" + c : a;
                    Cargo.View[d] = new Cargo.o.view[a]({
                        el: this,
                        collection: b.Data[key].dataset,
                        template: b.Data[key].template,
                        className: d
                    })
                })
            } else "function" == typeof Cargo.View[a] ? Cargo.Core.log("A view for " + a + " already loaded") : "undefined" == typeof Cargo.o.view[a] && (Cargo.View[key] = new Cargo.o.view.Default({
                el: this.Data[key].element,
                collection: this.Data[key].dataset,
                template: key,
                datasetname: this.Data[key].setname,
                className: key
            }))
        }
    }
}), Cargo.Core.Slideshow = {
    idIndex: 0,
    slideshowObjects: {},
    InitSlideshow: function() {
        var a = this,
            b = [];
        $(".slideshow[sid]").each(function() {
            var a = this.getAttribute("sid"); - 1 == b.indexOf(a) ? b.push(a) : this.removeAttribute("sid")
        }), $(".slideshow").each(function() {
            var b = $(this),
                c = !1;
            try {
                parent.hasOwnProperty("Cargo") && (c = parent.Cargo.Helper.IsAdminEdit())
            } catch (d) {}
            if ($(this).hasClass("slick-initialized") === !1) {
                this.setAttribute("contenteditable", !1), c && $(this).on("drop", function(a) {
                    return a.preventDefault(), !1
                }).on("mousedown", function(a) {
                    a.preventDefault()
                }), $(this).children("img").wrap("<div />").each(function(a, b) {
                    b.parentNode.setSaveable(!0)
                }), this.hasAttribute("data-slick") && this.setAttribute("data-slick", decodeURIComponent(this.getAttribute("data-slick")));
                var e = this.hasAttribute("sid") && a.slideshowObjects.hasOwnProperty(this.getAttribute("sid")),
                    f = e ? this.getAttribute("sid") : ++a.idIndex,
                    g = {
                        cssEase: "ease-in-out",
                        useCSS: !0,
                        useTransform: !0,
                        adaptiveHeight: !0,
                        arrows: !1,
                        dots: !1,
                        accessibility: !c,
                        draggable: !c,
                        pauseOnHover: c,
                        touchMove: !c
                    };
                e && (a.slideshowObjects[f].el = this, isNaN(a.slideshowObjects[f].currentSlide) || (g.initialSlide = a.slideshowObjects[f].currentSlide), a.slideshowObjects[f].storeOptionsOnElement()), $(this).slick(g).on("afterChange", function(a, b, c, d) {
                    Cargo.Event.trigger("slideshow_update")
                }).on("beforeChange", function(b, c, d, e) {
                    var f = this.getAttribute("sid");
                    a.slideshowObjects.hasOwnProperty(f) && (a.slideshowObjects[f].currentSlide = e, a.slideshowObjects[f].updateNav(e + 1))
                }).on(c ? "dblclick" : "click", ".slick-list", function() {
                    b.slick("slickGoTo", parseInt(b.slick("slickCurrentSlide")) + 1)
                }), $(this).find(".slick-list").on("scroll", function(a) {
                    this.scrollLeft = 0
                }), $(this).prepend('<div class="slideshow-nav" style="display: none" contenteditable="false"><a href="#" data-prev>Prev</a> / <a href="#" data-next>Next</a> (<span data-current data-ignore-changes>1</span> of <span data-total data-ignore-changes>1</span>)</div>'), $(this).find(".slideshow-nav [data-next]").on("click", _.bind(function(a) {
                    a.preventDefault(), $(this).slick("slickNext")
                }, this)), $(this).find(".slideshow-nav [data-prev]").on("click", _.bind(function(a) {
                    a.preventDefault(), $(this).slick("slickPrev")
                }, this));
                var h = $(this).slick("getSlick"),
                    i = scrollMonitor.create(this);
                i.enterViewport(function() {
                    h.slickGetOption("autoplay") && h.play()
                }), i.exitViewport(function() {
                    h.slickGetOption("autoplay") && h.pause()
                }), e ? a.slideshowObjects[f].slickObj = h : (a.slideshowObjects[f] = {
                    el: this,
                    slickObj: h,
                    options: {},
                    updateOptions: function(a) {
                        this.options = {
                            autoplay: this.slickObj.slickGetOption("autoplay"),
                            autoplaySpeed: this.slickObj.slickGetOption("autoplaySpeed"),
                            speed: this.slickObj.slickGetOption("speed"),
                            textNav: !!this.slickObj.slickGetOption("textNav"),
                            fade: this.slickObj.slickGetOption("fade")
                        }, a === !0 && this.storeOptionsOnElement()
                    },
                    storeOptionsOnElement: function() {
                        try {
                            this.el.setAttribute("data-slick", JSON.stringify(this.options))
                        } catch (a) {
                            console.log("unable to store slideshow settings", a)
                        }
                    },
                    reinit: function() {
                        var a = $(this.el).find(".slideshow-nav");
                        a.detach(), this.slickObj.unload(), this.slickObj.reinit(), $(this.el).prepend(a)
                    },
                    refresh: function() {
                        var a = $(this.el).find(".slideshow-nav");
                        a.detach(), this.slickObj.refresh(), $(this.el).prepend(a)
                    },
                    updateNav: function(a) {
                        if (this.options.textNav === !0) {
                            void 0 === a && (a = this.slickObj.currentSlide + 1);
                            $(this.el).closest('[contenteditable="true"]')[0];
                            $(this.el).find(".slideshow-nav [data-current]").text(a), $(this.el).find(".slideshow-nav [data-total]").text(this.slickObj.slideCount)
                        }
                    }
                }, this.setAttribute("sid", f), this.__slideshowObj = a.slideshowObjects[f]);
                var j = $(this).find(".slideshow-nav");
                setTimeout(function() {
                    a.slideshowObjects[f].updateOptions(), a.slideshowObjects[f].updateNav(), a.slideshowObjects[f].options.textNav && j.css("display", "block")
                }, 1), c && j.on("drop", function(a) {
                    return a.preventDefault(), !1
                }).on("mousedown", function(a) {
                    a.preventDefault()
                }), Cargo.Event.on("handleAdminUIChange", _.bind(function(a) {
                    try {
                        $(this).slick("setPosition")
                    } catch (b) {}
                }, this)), Cargo.Event.on("elementresizer_update_complete", _.bind(function(a) {
                    try {
                        $(this).slick("setPosition")
                    } catch (b) {}
                }, this)), Cargo.Event.on("page_load_complete", _.bind(function(a) {
                    try {
                        $(this).slick("setPosition")
                    } catch (b) {}
                }, this))
            }
        })
    }
}, Cargo.Core = window.Cargo.Core || {}, Cargo.Core.Handlebars = {
    Render: function(a, b) {
        var c = Handlebars.compile(a);
        Handlebars.registerPartial("loading_animation", $("#loading_animation").html()), this.RegisterHelper_Asset(), this.RegisterHelper_AssetContents(), this.RegisterHelper_Print(), this.RegisterHelper_IfAny(), this.RegisterHelper_IfAll(), this.RegisterHelper_IfEqual(), this.RegisterHelper_UnlessAny(), this.RegisterHelper_UnlessAll(), this.RegisterHelper_IfOption(), this.RegisterHelper_UnlessOption(), this.RegisterHelper_DisplayOptions(), this.RegisterHelper_Truncate();
        var d = c(b);
        return d
    },
    RenderOnlyAssets: function(a) {
        var b = Handlebars.compile(a);
        this.RegisterHelper_Asset();
        var c = b();
        return c
    },
    RegisterHelper_Asset: function() {
        Handlebars.registerHelper("asset", function(a) {
            var b = a.fn(this),
                c = Cargo.Collection.Assets.where({
                    filename: b
                })[0];
            return c ? Cargo.Model.Site.GetAssetPath(c.get("filename"), c.get("id")) : ""
        })
    },
    RegisterHelper_AssetContents: function() {
        Handlebars.registerHelper("asset_contents", function(a) {
            var b = a.fn(this),
                c = Cargo.Collection.Assets.where({
                    filename: b
                })[0],
                d = c ? Cargo.Model.Site.GetAssetPath(c.get("filename"), c.get("id")) : "";
            return $.get(d, function(a) {
                $("file[data-url='" + d + "']").after(a).remove()
            }, "text"), '<file data-url="' + d + '"></file>'
        })
    },
    RegisterHelper_Print: function() {
        Handlebars.registerHelper("print", function(a, b) {
            var c = wrapper_tail = "";
            "project.content" != a && "content" != a || (c = "<projectcontent>", wrapper_tail = "</projectcontent>"), a = a.replace("project.", "");
            var d = "object" == typeof this.project ? this.project : this;
            return Cargo.Model.Site.GetUseHiRes() && null != d[a + "_2x"] && (a += "_2x"), new Handlebars.SafeString(c + d[a] + wrapper_tail)
        })
    },
    RegisterHelper_IfAny: function() {
        Handlebars.registerHelper("if_any", function() {
            for (var a = !1, b = arguments[arguments.length - 1], c = arguments.length - 2; c >= 0; c--)
                if (arguments[c]) {
                    a = !0;
                    break
                }
            return a ? b.fn(this) : b.inverse(this)
        })
    },
    RegisterHelper_IfAll: function() {
        Handlebars.registerHelper("if_all", function() {
            for (var a = !0, b = arguments[arguments.length - 1], c = arguments.length - 2; c >= 0; c--)
                if (!arguments[c]) {
                    a = !1;
                    break
                }
            return a ? b.fn(this) : b.inverse(this)
        })
    },
    RegisterHelper_IfEqual: function() {
        Handlebars.registerHelper("if_equal", function(a, b, c) {
            return 3 != arguments.length ? "" : a == b ? c.fn(this) : c.inverse(this)
        })
    },
    RegisterHelper_UnlessAny: function() {
        Handlebars.registerHelper("unless_any", function() {
            for (var a = !1, b = arguments[arguments.length - 1], c = arguments.length - 2; c >= 0; c--)
                if (!arguments[c]) {
                    a = !0;
                    break
                }
            return a ? b.fn(this) : b.inverse(this)
        })
    },
    RegisterHelper_UnlessAll: function() {
        Handlebars.registerHelper("unless_all", function() {
            for (var a = !0, b = arguments[arguments.length - 1], c = arguments.length - 2; c >= 0; c--)
                if (arguments[c]) {
                    a = !1;
                    break
                }
            return a ? b.fn(this) : b.inverse(this)
        })
    },
    RegisterHelper_DisplayOptions: function() {
        Handlebars.registerHelper("displayoptions", function(a, b) {
            var c = a.replace("display_options.", "").split("."),
                d = c.length,
                e = !1;
            return e = 1 == d ? Cargo.Model.DisplayOptions.get(c[0]) : 2 == d ? Cargo.Model.DisplayOptions.get(c[0])[c[1]] : 3 == d ? Cargo.Model.DisplayOptions.get(c[0])[c[1]][c[2]] : Cargo.Model.DisplayOptions.get(c[0]), e ? b.fn(this) : b.inverse(this)
        })
    },
    RegisterHelper_IfOption: function() {
        Handlebars.registerHelper("if_option", function(a, b) {
            var c = a.replace("display_options.", "").split("."),
                d = c.length,
                e = !1;
            return e = 1 == d ? Cargo.Model.DisplayOptions.get(c[0]) : 2 == d ? Cargo.Model.DisplayOptions.get(c[0])[c[1]] : 3 == d ? Cargo.Model.DisplayOptions.get(c[0])[c[1]][c[2]] : Cargo.Model.DisplayOptions.get(c[0]), e ? b.fn(this) : b.inverse(this)
        })
    },
    RegisterHelper_UnlessOption: function() {
        Handlebars.registerHelper("unless_option", function(a, b) {
            var c = a.replace("display_options.", "").split("."),
                d = c.length,
                e = !1;
            return e = 1 == d ? Cargo.Model.DisplayOptions.get(c[0]) : 2 == d ? Cargo.Model.DisplayOptions.get(c[0])[c[1]] : 3 == d ? Cargo.Model.DisplayOptions.get(c[0])[c[1]][c[2]] : Cargo.Model.DisplayOptions.get(c[0]), e ? b.inverse(this) : b.fn(this)
        })
    },
    RegisterHelper_Truncate: function() {
        Handlebars.registerHelper("truncate", function(a, b) {
            if (a.length > b && a.length > 0) {
                var c = a + " ";
                return c = a.substr(0, b), c = a.substr(0, c.lastIndexOf(" ")), c = c.length > 0 ? c : a.substr(0, b), new Handlebars.SafeString(c + "...")
            }
            return a
        })
    }
}, Cargo = Cargo || {}, Cargo.utils = Cargo.utils || {}, Cargo.utils.CargoXHR = function(a) {
    var b = this;
    if ($.extend(this.options = {}, this.defaultOptions, a), void 0 === this.options.context && (this.options.context = this), void 0 === this.options.url) throw 'no URL given, define "url" in the contructor\'s options object';
    this.retries = 0, this.xhr = new XMLHttpRequest, this.xhr.addEventListener("abort", function() {
        b.options.abort.apply(b.options.context, arguments)
    }, !1), this.xhr.addEventListener("error", function() {
        b.options.error.apply(b.options.context, arguments)
    }, !1), this.xhr.addEventListener("load", function() {
        b.options.success.apply(b.options.context, arguments)
    }, !1), this.xhr.addEventListener("loadend", function() {
        b.options.always.apply(b.options.context, arguments)
    }, !1), this.xhr.upload.addEventListener("progress", function(a) {
        b.options.progress.apply(b.options.context, arguments)
    }, !1), this.send()
}, Cargo.utils.CargoXHR.prototype.send = function() {
    this.xhr.open(this.options.type, this.options.url, this.options.async);
    for (var a in this.options.headers) this.xhr.setRequestHeader(a, this.options.headers[a]);
    this.xhr.responseType = this.options.dataType, this.options.beforeSend.call(this, this.xhr), this.xhr.send(this.options.data)
}, Cargo.utils.CargoXHR.prototype.retry = function() {
    return this.retries++ < this.options.maxRetries ? void Cargo.utils.CargoXHR.prototype.send.apply(this, arguments) : (this.abort(), !1)
}, Cargo.utils.CargoXHR.prototype.abort = function() {
    "object" == typeof this.xhr && this.xhr.abort()
}, Cargo.utils.CargoXHR.prototype.defaultOptions = {
    async: !0,
    beforeSend: function(a) {},
    always: function(a) {},
    success: function(a) {},
    progress: function(a) {},
    error: function(a) {},
    abort: function(a) {},
    type: "GET",
    url: void 0,
    dataType: "text",
    headers: {},
    data: null,
    context: void 0,
    maxRetries: 5
}, Cargo.utils = Cargo.utils || {}, Cargo.utils.ImageUploader = function(a) {
    $.extend(this.options = {}, this.defaultOptions, a), this.activeProcesses = []
}, Cargo.utils.ImageUploader.prototype = {
    upload: function(a, b, c) {
        if (void 0 !== a && 0 !== a.length) {
            var d = this,
                e = {
                    uid: Cargo.Model.Site.GetId(),
                    url: Cargo.Helper.GetUrl(),
                    pid: void 0 !== b ? b : Cargo.Helper.GetCurrentProjectId(),
                    fileIndex: -1,
                    aborted: !1,
                    initialized: !1,
                    totalBytes: 0,
                    uploadedBytes: 0,
                    customParameters: c,
                    getUploadProgress: function() {
                        return this.uploadedBytes / this.totalBytes * 100
                    },
                    files: [],
                    events: {
                        onFileComplete: function(a, b) {},
                        onFileProgress: function(a, b) {},
                        onFileFail: function(a, b) {},
                        onFileError: function(a, b) {},
                        onAbort: function(a) {},
                        onComplete: function(a) {}
                    },
                    getNextFile: function() {
                        return this.fileIndex < this.files.length - 1 && this.aborted !== !0 ? this.files[++this.fileIndex] : void 0
                    },
                    getCurrentFile: function() {
                        return this.files[this.fileIndex]
                    },
                    abort: function() {
                        if (void 0 !== this.xhr) {
                            this.aborted = !0, this.xhr.abort(), this.events.onAbort(this);
                            var a = d.activeProcesses.indexOf(this); - 1 !== a && d.activeProcesses.splice(a, 1)
                        }
                    },
                    addFile: function(a) {
                        -1 === this.files.indexOf(a) && (d.options.acceptFileTypes.test(a.type) && d.options.acceptFileTypes.test(a.name) ? (e.files.push(a), this.totalBytes += a.size) : e.initialized === !1 ? setTimeout(function() {
                            null !== e && e.events.onFileError(a, {
                                message: "File type not allowed"
                            })
                        }) : e.events.onFileError(a, {
                            message: "File type not allowed"
                        }))
                    }
                };
            return [].forEach.call(a, function(a) {
                e.addFile(a)
            }), 0 === e.files.length ? void(e = null) : (this.activeProcesses.push(e), this.handleUploadProcess(e), e)
        }
    },
    handleUploadProcess: function(a) {
        a.initialized = !0;
        var b = a.getNextFile(),
            c = this;
        if (void 0 === b) {
            a.xhr = void 0, a.events.onComplete(a), a.fileIndex = -1;
            var d = c.activeProcesses.indexOf(a);
            return void(-1 !== d && c.activeProcesses.splice(d, 1))
        }
        b.lastProgress = 0;
        var e = new FormData;
        e.append("Filedata[]", b), e.append("pid", a.pid), e.append("url", a.url), e.append("uid", a.uid), "object" == typeof a.customParameters && Object.keys(a.customParameters).forEach(function(b) {
            e.append(b, a.customParameters[b])
        }), a.xhr = new Cargo.utils.CargoXHR({
            url: this.options.posturl,
            type: "POST",
            data: e,
            progress: function(c) {
                c.lengthComputable && (a.uploadedBytes += c.loaded - b.lastProgress, b.lastProgress = c.loaded), a.events.onFileProgress(b, c)
            },
            success: function(d) {
                if (200 == this.xhr.status) {
                    JSON.parse(this.xhr.responseText);
                    a.events.onFileComplete.call(this, b, d)
                } else a.events.onFileFail.call(this, b, d);
                c.handleUploadProcess(a)
            }
        })
    },
    defaultOptions: {
        acceptFileTypes: /(\.|\/)(gif|jpe?g|png)$/i,
        posturl: "/dispatch/media/uploadProjectImage"
    }
};
var lastT = 0,
    timer = null;
$.fn.toggleInputError = function(a) {
    return this.parent().toggleClass("error", a), this
}, window.loading_animation = function(a) {
    var b = _.template($("#loading_animation").html()),
        c = b({
            extra_class: a
        });
    return c.replace("{{ extra_class }}", "")
}, Cargo.o.model.css = Backbone.Model.extend({
    initialize: function() {},
    url: function() {
        var a = Cargo.API.Config,
            b = a.api_path + "/" + a.Version + "/css/" + a.cargo_url;
        return b
    }
}), Cargo.o.model.page = Backbone.Model.extend({
    initialize: function() {},
    fetch: function(a) {
        return a.reset && $("script[data-set='ProjectDetail']").html() ? void this.set($.parseJSON($("script[data-set='ProjectDetail']").html()), a) : Backbone.Model.prototype.fetch.apply(this, arguments)
    },
    parse: function(a, b) {
        var c = Cargo.Collection.Pages.findWhere({
            project_url: this.GetProjectUrl()
        });
        return c && c.set(a), a
    },
    url: function() {
        return Cargo.API.GetSinglePagePath()
    },
    GetId: function() {
        return this.get("id")
    },
    GetProjectUrl: function() {
        return this.get("project_url")
    },
    GetType: function() {
        return this.get("type") && 0 != this.get("id") ? this.get("type") : !1
    },
    GetBgColor: function() {
        return "" == this.get("bgcolor") ? !1 : "#" + this.get("bgcolor")
    }
}), Cargo.o.model.display_options = Backbone.Model.extend({
    fetch: function(a) {
        $("script[data-set='DisplayOptions']").html() ? this.set($.parseJSON($("script[data-set='DisplayOptions']").html()), a) : Backbone.Model.prototype.fetch.apply(this, arguments)
    },
    url: function() {
        return Cargo.API.GetDisplayOptionsPath()
    },
    GetPaginationCount: function() {
        return this.get("pagination_count")
    },
    GetTotalProjects: function() {
        var a = Cargo.API.Config.filter_total ? Math.floor(Cargo.API.Config.filter_total) : Math.floor(this.get("total_projects"));
        return a
    },
    GetDisableProjectScroll: function() {
        return this.get("disable_project_scroll")
    },
    GetImageWidth: function() {
        return this.get("image_width")
    },
    GetIndexRouteUrl: function() {
        return this.get("index_route_url")
    },
    GetIndexRouteName: function() {
        return this.get("index_route_name")
    }
}), Cargo.o.model.site = Backbone.Model.extend({
    fetch: function(a) {
        $("script[data-set='Site']").html() ? this.set($.parseJSON($("script[data-set='Site']").html()), a) : Backbone.Model.prototype.fetch.apply(this, arguments)
    },
    parse: function(a) {
        return Cargo.Helper.IsAdminEdit() || (a.is_editor = Cargo.Helper.GetIsEditor()), a
    },
    url: function() {
        var a = Cargo.API.GetSitePath();
        return "" != Cargo.API.Config.filter && (a += "?filter=" + encodeURIComponent(Cargo.API.Config.filter)), a
    },
    GetId: function() {
        return this.get("id")
    },
    GetAssetPath: function(a, b) {
        return a && b ? this.get("asset_path") + "/" + a + "?" + b : this.get("asset_path")
    },
    GetPresetPreviewLink: function(a) {
        return "//" + this.get("site_url") + "." + Cargo.Helper.GetBaseCargoDomain() + "/presetpreview/" + a
    },
    GetWebsiteTitle: function() {
        return this.get("website_title")
    },
    GetStartProjectId: function() {
        return this.get("start_project_id")
    },
    GetIsEditor: function() {
        return this.get("is_editor")
    },
    GetUseHiRes: function() {
        var a = this.get("use_hi_res");
        return void 0 == a && (a = window.devicePixelRatio > 1), a
    }
}), Cargo.o.model.asset = Backbone.Model.extend({}), Cargo.o.model.images = Backbone.Model.extend({
    initialize: function() {
        _.bindAll(this, "getImageByWidth")
    },
    urlRoot: function() {
        return "/_api/v0/image"
    },
    getImageByWidth: function(a) {
        var b = _.sortBy(this.get("sizes"), "w"),
            c = new Array,
            d = new Array,
            e = _.max(b, function(a) {
                return a.w
            }).name,
            f = !1,
            g = a % 256 == 0;
        return _.size(b) > 0 && (_.each(this.get("sizes"), function(b) {
            var e = b.w == b.h && b.w % 256 == 0;
            b.w >= a && !e && c.push(b), g === !0 && b.w >= a / 2 && b.w <= a && e && d.push(b)
        }), g === !0 && d.length > 0 && (f = _.max(_.sortBy(d, "w"), function(a) {
            return a.w
        }).name), f !== !1 && (e = f), f === !1 && c.length > 0 && (e = _.min(_.sortBy(c, "w"), function(a) {
            return a.w
        }).name)), 0 == c.length && 0 == d.length && g === !1 && this.GetImageSizeByName(e).w % 256 == 0 && this.GetImageSizeByName(e).h % 256 == 0 && (e = b[b.length - 2].name), this.PreflightImage(e), e
    },
    getImageByWidth2x: function(a) {
        var b = _.sortBy(this.get("sizes"), "w"),
            c = new Array,
            d = _.max(b, function(a) {
                return a.w
            }).name;
        return _.size(b) > 0 && (_.each(b, function(b) {
            if (b.w >= a) {
                var d = b.name.match(/([A-Z])\w+/g),
                    e = b.w,
                    f = b.name;
                "_c" == d[0].substring(d[0].length - 2) && e--, c.push({
                    w: e,
                    name: f
                })
            }
        }), c.length > 0 && (d = _.min(_.sortBy(c, "w"), function(a) {
            return a.w
        }).name)), this.PreflightImage(d), d
    },
    uploadFile: function(a) {
        if (0 == /(\.|\/)(gif|jpe?g|png)$/i.test(a.type) || 0 == /(\.|\/)(gif|jpe?g|png)$/i.test(a.name)) return this.trigger("invalid-file", this), !1;
        this.set("Filedata[]", a), this.set("pid", Cargo.Helper.GetCurrentProjectId()), this.set("uid", Cargo.Model.Site.GetId()), this.set("url", Cargo.Helper.GetUrl()), this.set("tmp_size", +Cargo.Model.DisplayOptions.get("image_width")), this.trigger("upload-before-start", this);
        var b = this.save({}, {
            formData: !0
        });
        return b.done(_.bind(function() {
            this.trigger("upload-success", this, b);
        }, this)).fail(_.bind(function() {
            this.trigger("upload-error", this, b)
        }, this)).always(_.bind(function() {
            this.trigger("upload-complete", this, b)
        }, this)), b
    },
    createImageElementFromFile: function(a) {
        if (void 0 === a) var a = this.get("Filedata[]");
        if (void 0 === a || "[object File]" !== a.toString()) return !1;
        var b = $('<img src="" border="0" width="" height="" width_o="" height_o="" src_o="" caption=""/>')[0];
        return b.addEventListener("load", function() {
            b.setAttribute("width_o", b.naturalWidth), b.setAttribute("height_o", b.naturalHeight);
            var c = parseInt(Cargo.Model.DisplayOptions.get("image_width"));
            isNaN(c) === !1 && (b.setAttribute("width", b.naturalWidth), b.setAttribute("height", b.naturalHeight)), window.URL.revokeObjectURL(a)
        }), b.src = URL.createObjectURL(a), b.style.maxWidth = Cargo.Model.DisplayOptions.GetImageWidth() + "px", b.style.height = "auto", b
    },
    GetImageSizeByName: function(a) {
        return _.findWhere(this.get("sizes"), {
            name: a
        })
    },
    PreflightImage: function(a) {
        var b = this.createCORSRequest("OPTIONS", a);
        b || console.error("CORS not supported for ", a)
    },
    createCORSRequest: function(a, b) {
        var c = new XMLHttpRequest;
        return "withCredentials" in c ? c.open(a, b, !0) : "undefined" != typeof XDomainRequest ? (c = new XDomainRequest, c.open(a, b)) : c = !1, c
    },
    save: function(a, b, c) {
        var d, e = "Filedata[]",
            f = this.attributes,
            g = this;
        if (null == a || "object" == typeof a ? (d = a, c = b) : (d = {})[a] = b, c = _.extend({
                validate: !0
            }, c), d && !c.wait) {
            if (!this.set(d, c)) return !1
        } else if (!this._validate(d, c)) return !1;
        var h = _.extend({}, f, d);
        if (d && c.wait && (this.attributes = h), c.formData === !0 && h[e] && "[object File]" == h[e].toString()) {
            var i = _.clone(h),
                j = h[e];
            i = this._flatten(i), i[e] = j;
            var k = new FormData;
            _.each(i, function(a, b) {
                a instanceof FileList || b === g.fileAttribute && a instanceof Array ? _.each(a, function(a) {
                    k.append(b, a)
                }) : k.append(b, a)
            }), c.data = k, c.processData = !1, c.contentType = !1, c.xhr || (c.xhr = function() {
                var a = Backbone.$.ajaxSettings.xhr();
                return a.upload.addEventListener("progress", function() {
                    g.trigger("upload-progress", g, event)
                }, !1), a
            })
        }
        return d && c.wait && (this.attributes = f), Backbone.Model.prototype.save.call(this, d, c)
    },
    _flatten: function a(b) {
        var c = {};
        for (var d in b)
            if (b.hasOwnProperty(d))
                if ("object" == typeof b[d]) {
                    var e = a(b[d]);
                    for (var f in e) e.hasOwnProperty(f) && (c[d + "[" + f + "]"] = e[f])
                } else c[d] = b[d];
        return c
    },
    _progressHandler: function(a) {},
    getFitSize: function(a, b, c, d) {
        if (a = parseInt(a), b = parseInt(b), b > a) var e = a / c,
            f = Math.floor(b / e),
            g = c;
        else if (a > b) var e = b / d,
            g = Math.floor(a / e),
            f = d;
        else var g = a,
            f = b;
        return [g, f]
    }
}), Cargo.o.model.undefined_default = Backbone.Model.extend({}), Cargo.o.collection.pages = Backbone.Collection.extend({
    initialize: function() {},
    url: function() {
        return Cargo.API.GetPagesPath()
    }
}), Cargo.o.collection.assets = Backbone.Collection.extend({
    initialize: function() {},
    fetch: function(a) {
        $("script[data-set='Assets']").html() && this.set($.parseJSON($("script[data-set='Assets']").html()), a)
    }
}), Cargo.o.collection.undefined_default = Backbone.Collection.extend({
    initialize: function() {},
    url: function() {}
}), Cargo.o.collection.images = Backbone.Collection.extend({
    initialize: function() {},
    url: function() {
        var a = this.options.offset,
            b = this.options.limit,
            c = this.options.sort;
        return Cargo.API.GetImagesPath(a, b, c)
    },
    fetch: function(a) {
        this.options = a, Backbone.Model.prototype.fetch.apply(this, arguments)
    }
}), Cargo.o.view.Main = Backbone.View.extend({
    el: "body",
    initialize: function() {
        this.collection.bind("change", this.render, this), "html" == Cargo.API.Config.preview ? this.WriteCustomHtmlPreview() : "css" == Cargo.API.Config.preview && this.WriteCustomCSSPreview(), "object" != typeof Mobile && (Cargo.View.Following = new Cargo.o.view.Following({
            el: ".container"
        })), Cargo.Helper.IsAdminEdit() && this.$el.attr("data-adminview", "true")
    },
    events: {
        "click [rel='history']": "HistoryPush",
        "click [rel='show_index']": "ShowIndex",
        "click [rel='close_project']": "ShowIndex",
        "click [rel='show_home']": "ShowHome",
        "click [rel='next_page']": "NextPage",
        "click [rel='prev_page']": "PrevPage",
        "click a": "preventExtLinks"
    },
    render: function() {
        this.collection
    },
    isClickInEditor: function(a) {
        if ("undefined" == typeof CargoEditor || "undefined" == typeof CargoEditor.events) return !1;
        if (void 0 === a) return !1;
        for (var b = a.target; null !== (b = b.parentNode);) {
            if ("true" === b.contentEditable) return !0;
            if (b.hasAttribute("data-ce-model-id") && b.getAttribute("data-ce-model-id") != Backbone.history.fragment) return !0
        }
        return !1
    },
    preventExtLinks: function(a) {
        this.isClickInEditor(a) && a.preventDefault()
    },
    HistoryPush: function(a, b) {
        if (!this.isClickInEditor(a)) {
            a && (a.preventDefault(), b = a.currentTarget);
            var c = $(b).attr("href") ? $(b).attr("href") : $(b).data("href"),
                d = $(b).attr("data-id") ? $(b).attr("data-id") : $(b).data("id"),
                e = !(!$(b).attr("target") || "_blank" != $(b).attr("target"));
            a.metaKey || e ? window.open(c) : Cargo.Event.trigger("add_history", c, d)
        }
    },
    ShowIndex: function(a) {
        if (this.isClickInEditor(a)) return !1;
        if (a && a.preventDefault(), Cargo.Model.DisplayOptions.GetIndexRouteName()) return void Cargo.Helper.GoToUrl(Cargo.Model.DisplayOptions.GetIndexRouteUrl());
        var b = "";
        Cargo.Event.trigger("add_history", b)
    },
    ShowHome: function(a) {
        if (this.isClickInEditor(a)) return !1;
        if (a && a.preventDefault(), Cargo.Model.DisplayOptions.GetIndexRouteName()) return void Cargo.Helper.GoToUrl(Cargo.Model.DisplayOptions.GetIndexRouteUrl());
        if (Cargo.Helper.GetStartProjectId()) {
            Cargo.Event.trigger("add_history_passive", "");
            var b = Cargo.Collection.Pages.findWhere({
                    id: Cargo.Helper.GetStartProjectId()
                }),
                c = "undefined" != typeof Persona && "object" == typeof Persona.Model.HomePage ? Persona.Model.HomePage : !1,
                d = c ? c : b;
            d ? Cargo.Model.Page.set(d.toJSON()) : Cargo.Model.Page.fetch({
                data: {
                    pid: Cargo.Helper.GetStartProjectId()
                }
            }), this.SetHomepageClass()
        } else {
            Cargo.Model.Page.clear();
            var e = "";
            Cargo.Event.trigger("add_history", e)
        }
    },
    WriteCustomHtmlPreview: function() {
        if (void 0 !== parent.editframe) {
            var a = parent.editframe.document.getElementById("syntax_highlight").value;
            a = Cargo.Core.Handlebars.RenderOnlyAssets(a), $("customhtml").html(a)
        } else if ("undefined" != typeof parent.Cargo && parent.Cargo.hasOwnProperty("Editor") && void 0 !== parent.Cargo.Editor.previewCustomHTML) {
            var a = parent.Cargo.Editor.previewCustomHTML;
            a = Cargo.Core.Handlebars.RenderOnlyAssets(a), $("customhtml").html(a)
        }
    },
    WriteCustomCSSPreview: function() {
        var a = parent.editframe.document.getElementById("syntax_highlight").value;
        a = Cargo.Core.Handlebars.RenderOnlyAssets(a), $("body").append("<style>" + a + "</style>"), $("head link[rel='stylesheet']").remove()
    },
    SetWindowTitle: function(a) {
        if (a || Cargo.Helper.IsOnHomepage()) document.title = Cargo.Model.Site.GetWebsiteTitle();
        else {
            var b = Cargo.Model.Page.get("title_no_html");
            b ? document.title = b + " - " + Cargo.Model.Site.GetWebsiteTitle() : "" === b && (document.title = Cargo.Model.Site.GetWebsiteTitle())
        }
    },
    SetHomepageClass: function() {
        (Cargo.Model.Site.get("start_project_id") || 0 == Cargo.Model.Site.get("start_project_id")) && this.$el.addClass("homepage")
    },
    RemoveHomepageClass: function() {
        this.$el.removeClass("homepage")
    },
    SetPageId: function(a) {
        this.$el.attr("data-page-id", a)
    }
}), Cargo.o.view.Backstage = Backbone.View.extend({
    className: "persona-backstage-root",
    fauxFixedElements: [],
    animationDuration: 600,
    animationInProgress: !1,
    backstageWidth: "400px",
    enabled: !1,
    iframeLoadInitialized: !1,
    section: !1,
    slideData: {
        delta: 1,
        offset: 0,
        lastOffset: 0,
        closing: !0
    },
    initialize: function() {
        if (!(Cargo.Helper.IsPersonaAdmin() || Cargo.Helper.IsAdminEdit() || Cargo.Helper.IsPresetPreview())) {
            this.contentFrame = document.createElement("iframe"), this.contentFrame.id = "backstage-frame", this.contentFrame.style.display = "none", this.contentFrame.style.border = "none", this.contentFrame.name = "backstage-frame", this.backstageOverlay = document.createElement("div"), this.backstageOverlay.id = "backstage-overlay", this.backstageOverlay.style.display = "none", this.backstageOverlay.style.cursor = "pointer", this.backstageOverlay.style.position = "fixed", this.backstageOverlay.style.top = 0, this.backstageOverlay.style.left = 0, this.backstageOverlay.style.right = 0, this.backstageOverlay.style.bottom = 0, this.backstageOverlay.style.zIndex = 999999, this.backstageOverlay.addEventListener("click", _.bind(this.close, this)), document.body.appendChild(this.backstageOverlay), $("html").append(this.render().el);
            var a = document.createElement("div");
            a.id = "backstage-container", this.el.parentNode.insertBefore(a, this.el), a.appendChild(this.el), this.container = $(a), this.contentFrame = $(this.contentFrame), /^\/?backstage/.test(document.location.pathname) || $(window).load(_.bind(this.loadFrameSection, this))
        }
    },
    render: function() {
        return this.setElement(this.contentFrame), this
    },
    Toggle: function() {
        if (this.animationInProgress !== !0)
            if (this.enabled) Cargo.Router.navigate(Cargo.Router.previousSiteRoute, {
                trigger: !0
            });
            else {
                Cargo.Event.trigger("add_history", "backstage");
                var a = parent.document.getElementById("login_frame");
                null !== a && a.parentNode.removeChild(a)
            }
    },
    loadSection: function(a) {
        this.enabled || this.enable(), this.loadFrameSection(a)
    },
    loadFrameSection: function(a) {
        this.iframeLoadInitialized !== !0 ? (this.contentFrame.attr("src", "/backstageframe/" + Cargo.Helper.GetUrl() + ("string" == typeof a ? "/" + a : "")), this.iframeLoadInitialized = !0) : this.el.contentWindow && void 0 !== this.el.contentWindow.Backstage && void 0 !== this.el.contentWindow.Backstage.View.Main ? (this.el.contentWindow.Backstage.Router.navigate(a, {
            trigger: !0,
            replace: !0
        }), this.el.contentWindow.Backstage.View.Main.showFirstLoadImages()) : this.contentFrame.attr("src", "/backstageframe/" + Cargo.Helper.GetUrl() + ("string" == typeof a ? "/" + a : ""))
    },
    updateCookieData: function() {
        this.el.contentWindow && void 0 !== this.el.contentWindow.Backstage && this.el.contentWindow.Backstage.Model.Default.fetch()
    },
    resizeListener: function(a) {
        var b = document.getElementsByTagName("html")[0],
            c = window.innerWidth + "px",
            d = window.innerHeight + "px";
        a === !0 && (c = "", d = ""), b.style.width = c, b.style.height = d, document.body.style.width = c, document.body.style.height = d, $(window).width() > 500 ? this.backstageWidth = "400px" : this.backstageWidth = $(window).width() - 40 + "px", this.enabled && (document.body.style.setProperty("transform", "translateX(-" + this.backstageWidth + ")"), document.body.style.setProperty("-webkit-transform", "translateX(-" + this.backstageWidth + ")")), $("#backstage-container").css({
            width: this.backstageWidth,
            height: d
        })
    },
    enable: function() {
        if (this.animationInProgress !== !0) {
            document.body, document.getElementsByTagName("html")[0];
            return this.fixedElements = this.getFixedElements(), $('<div id="backstage-container-overlap" />').insertAfter(this.$el.parent()), this.animationInProgress = !0, this.scrollAnchor = document.createElement("div"), this.scrollPos = window.scrollY, this.inlineStyles = document.createElement("style"), this.tempInlineStyles = document.createElement("style"), this.scrollAnchor.style.position = "absolute", this.scrollAnchor.style.width = "0px", this.scrollAnchor.style.height = "0px", this.scrollAnchor.style.top = this.scrollPos + "px", document.body.appendChild(this.scrollAnchor), document.body.appendChild(this.tempInlineStyles), document.body.appendChild(this.inlineStyles), Cargo.Router.is_first_route ? (this.direct_route = !0, this.prepareElementsForAnimation(), void this.realEnable()) : void window.requestAnimationFrame(_.bind(function() {
                this.prepareElementsForAnimation(), window.setTimeout(_.bind(function() {
                    window.requestAnimationFrame(_.bind(this.realEnable, this))
                }, this), 150)
            }, this))
        }
    },
    prepareElementsForAnimation: function() {
        var a = document.body,
            b = document.getElementsByTagName("html")[0];
        this.tempInlineStyles.sheet.insertRule("#backdrop > div > * {   -webkit-transform: translateZ(0);     transform: translateZ(0);}", 0), a.style.setProperty("transform", "translateZ(0)"), a.style.setProperty("-webkit-transform", "rotateZ(0)"), a.style.setProperty("min-height", window.innerHeight + "px"), b.style.setProperty("transform", "translateZ(0)"), b.style.setProperty("-webkit-transform", "rotateZ(0)"), b.style.setProperty("min-height", window.innerHeight + "px"), this.container.css({
            transform: "translateX(" + this.backstageWidth + ")",
            "-webkit-transform": "translateX(" + this.backstageWidth + ")"
        }), this.contentFrame.css({
            transform: "translateX(-" + this.backstageWidth + ")",
            "-webkit-transform": "translateX(-" + this.backstageWidth + ")"
        }), this.resizeListener(), this.fixFixedElements(this.fixedElements), this.fixedElements = void 0, a.style.setProperty("position", "fixed"), a.style.setProperty("overflow", "hidden"), b.style.setProperty("position", "fixed"), b.style.setProperty("overflow", "hidden"), this.scrollAnchor.scrollIntoView()
    },
    realEnable: function() {
        var a = this;
        this.inlineStyles.sheet.insertRule("#backstage-container {   width: " + this.backstageWidth + "; height: 100%; position: absolute; top: 0; bottom: 0;  right: 0;}", 0), this.scrollAnchor.scrollIntoView(), this.resizeListener = _.bind(this.resizeListener, this), window.addEventListener("resize", this.resizeListener, !1), this.scrollAnchor.parentNode.removeChild(this.scrollAnchor), this.scrollAnchor = void 0;
        var b = this.direct_route ? 0 : a.animationDuration;
        try {
            null !== this.contentFrame[0].contentWindow.document.body && (this.contentFrame[0].contentWindow.document.body.style.display = "none", setTimeout(function() {
                a.contentFrame[0].contentWindow.document.body.style.display = "block"
            }))
        } catch (c) {
            console.info(c)
        }
        $("body, #backstage-container-overlap").velocity({
            translateX: "-" + a.backstageWidth,
            translateZ: 0
        }, {
            duration: b,
            easing: [29, 9],
            complete: function() {
                a.enabled = !0, a.animationInProgress = !1, a.enableClickToClose(), a.tempInlineStyles.sheet.disabled = !0, a.direct_route = !1, $("#backstage-container-overlap").remove()
            }
        }), this.container.velocity({
            translateX: [0, parseInt(this.backstageWidth)],
            tween: [0, 1]
        }, {
            duration: b,
            easing: [29, 9],
            progress: function(b, c, d, e, f) {
                0 > f && a.container.css({
                    transform: "translateX(0px)",
                    "-webkit-transform": "translateX(0px)"
                })
            }
        }), this.contentFrame.velocity({
            translateX: [0, -parseInt(this.backstageWidth)],
            tween: [0, 1]
        }, {
            duration: b,
            easing: [29, 9],
            progress: function(b, c, d, e, f) {
                0 > f && a.contentFrame.css({
                    transform: "translateX(0px)",
                    "-webkit-transform": "translateX(0px)"
                })
            }
        }), this.el.style.display = ""
    },
    enableClickToClose: function() {
        this.backstageOverlay.style.display = "block"
    },
    disableClickToClose: function() {
        this.backstageOverlay.style.display = "none"
    },
    slideStart: function(a) {
        $(window).on("mousemove touchmove", {
            slideData: this.slideData,
            slideEnd: _.bind(this.slideEnd, this),
            offset: a.clientX,
            width: this.backstageWidth
        }, this.slideMove)
    },
    slideMove: function(a) {
        a.preventDefault();
        var b = a.data.slideData,
            c = 0,
            d = parseInt(a.data.width);
        c = event.touches ? event.touches[0].clientX - a.data.offset : a.clientX - a.data.offset;
        var e = d - c;
        b.delta = 1 - Math.abs(c - b.offsetLast) / 30 * 1, b.delta < .3 ? b.delta = .3 : b.delta > 1 && (b.delta = 1), 0 > c ? e = d : 0 > e && (e = 0, a.data.slideEnd()), $("body, #backstage-container-overlap").velocity("stop").velocity({
            translateX: -1 * e
        }, 1), b.closing = c >= b.offsetLast, b.offsetLast = c
    },
    slideEnd: function(a) {
        this.slideData.closing ? this.close() : $("body, #backstage-container-overlap").velocity("stop").velocity({
            translateX: "-" + this.backstageWidth,
            translateZ: 0
        }, {
            duration: this.animationDuration * this.slideData.delta,
            easing: [29, 9]
        }), $(window).off("mousemove touchstart", this.slideMove), this.slideData.closing = !0, this.slideData.offsetLast = 0, this.slideData.delta = 1
    },
    close: function() {
        this.Toggle()
    },
    disable: function() {
        window.requestAnimationFrame(_.bind(this.realDisable, this))
    },
    realDisable: function() {
        if (this.animationInProgress !== !0) {
            this.animationInProgress = !0, window.focus(), void 0 !== this.el.contentWindow.Backstage && this.el.contentWindow.Backstage.Events.trigger("disable");
            var a = this;
            this.tempInlineStyles.sheet.disabled = !1, $("body, #backstage-container-overlap").velocity({
                translateX: 0,
                translateZ: 0
            }, {
                begin: function() {
                    $(this).css("cursor", "auto")
                },
                duration: this.animationDuration * this.slideData.delta,
                easing: [25, 8.5],
                complete: function() {
                    a.enabled = !1, a.animationInProgress = !1, $(this).css({
                        transform: "",
                        "-webkit-transform": ""
                    }), a.unfixFixedElements(), void 0 !== a.inlineStyles && (a.inlineStyles.sheet.disabled = !0, a.inlineStyles.parentNode.removeChild(a.inlineStyles)), void 0 !== a.tempInlineStyles && (a.tempInlineStyles.sheet.disabled = !0, a.tempInlineStyles.parentNode.removeChild(a.tempInlineStyles));
                    var b = document.body,
                        c = document.getElementsByTagName("html")[0];
                    b.style.setProperty("transform", ""), b.style.setProperty("-webkit-transform", ""), b.style.setProperty("min-height", ""), c.style.setProperty("transform", ""), c.style.setProperty("-webkit-transform", ""), c.style.setProperty("min-height", ""), b.style.setProperty("position", ""), b.style.setProperty("overflow", ""), c.style.setProperty("position", ""), c.style.setProperty("overflow", ""), a.resizeListener(!0), window.scrollTo(0, a.scrollPos), window.removeEventListener("resize", a.resizeListener, !1), a.disableClickToClose(), a.el.style.display = "none"
                }
            }), this.container.velocity({
                translateX: [parseInt(this.backstageWidth), 0]
            }, {
                duration: this.animationDuration * this.slideData.delta,
                easing: [25, 8.5]
            }), this.contentFrame.velocity({
                translateX: [-parseInt(this.backstageWidth), 0]
            }, {
                duration: this.animationDuration * this.slideData.delta,
                easing: [25, 8.5]
            })
        }
    },
    isActive: function() {
        return this.enabled
    },
    getFixedElements: function(a) {
        void 0 === a && (a = window.document);
        var b, c, d, e, f, g, h, i = ['[style*="position:fixed"],[style*="position: fixed"]'],
            j = /\bposition:\s*fixed;/,
            k = "position",
            l = "fixed",
            m = a.styleSheets,
            n = [];
        for (c = 0; c < m.length; c++) {
            try {
                f = m[c].cssRules
            } catch (o) {
                continue
            }
            if (null !== f)
                for (e = f.length, d = 0; e > d; d++) g = f[d], j.test(g.cssText) && void 0 != g.selectorText && i.push(g.selectorText)
        }
        for (i = i.join(","), i = a.querySelectorAll(i), e = i.length, c = 0; e > c; c++) h = i[c], b = window.getComputedStyle(h, null), b.getPropertyValue(k) === l && n.push({
            el: h,
            offset: {
                left: isNaN(parseInt(b.getPropertyValue("left"))) ? 0 : parseInt(b.getPropertyValue("left")),
                top: isNaN(parseInt(b.getPropertyValue("top"))) ? 0 : parseInt(b.getPropertyValue("top"))
            },
            webkitTransformMatrix: "none" === b.getPropertyValue("-webkit-transform") ? "" : b.getPropertyValue("-webkit-transform"),
            transformMatrix: "none" === b.getPropertyValue("transform") ? "" : b.getPropertyValue("transform"),
            styleAttribute: h.getAttribute("style")
        });
        return n
    },
    fixFixedElements: function(a) {
        var b = this;
        this.unfixFixedElements();
        var c = {
            top: $(window).scrollTop(),
            left: $(window).scrollLeft()
        };
        lastScrollPos = c.top, void 0 === a && (a = this.getFixedElements()), Cargo.Helper.isEdge() && (c.top = 0), a.forEach(function(a) {
            a.el.style.setProperty("transform", "translateY(" + c.top + "px) " + a.transformMatrix, "important"), a.el.style.setProperty("-webkit-transform", "translateY(" + c.top + "px) " + a.webkitTransformMatrix, "important"), a.el.style.setProperty("transition", "none", "important"), a.el.style.setProperty("-webkit-transition", "none", "important"), b.fauxFixedElements.push(a)
        })
    },
    unfixFixedElements: function() {
        this.fauxFixedElements.forEach(function(a) {
            a.el.style.removeProperty("transform"), a.el.style.removeProperty("-webkit-transform"), setTimeout(function() {
                null === a.styleAttribute || "" === a.styleAttribute ? a.el.removeAttribute("style") : a.el.setAttribute("style", a.styleAttribute)
            }, 1)
        }), this.fauxFixedElements = []
    }
}), Cargo.o.view.Backdrop = Backbone.View.extend({
    has_webgl: null,
    initialize: function(a) {
        return "undefined" == typeof Persona.Model.Settings ? (Persona.Model.Settings = new Persona.o.model.Settings, void Persona.Model.Settings.fetch({
            success: $.proxy(function(a) {
                this.initPlugin()
            }, this)
        })) : void this.initPlugin()
    },
    initPlugin: function() {
        return Persona.Model.Settings.get("requires_webgl") && !this.testWebGl() ? void this.makeFallback() : void this.loadActivePlugin()
    },
    testWebGl: function() {
        if (null != this.has_webgl) return this.has_webgl;
        var a, b, c;
        if (this.has_webgl = !1, window.WebGLRenderingContext) {
            a = document.createElement("canvas"), b = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"], c = !1;
            for (var d = 0; 4 > d; d++) try {
                if (c = a.getContext(b[d]), c && "function" == typeof c.getParameter) return a = void 0, this.has_webgl = !0, this.has_webgl
            } catch (e) {}
            return a = void 0, this.has_webgl = !1, this.has_webgl
        }
        return this.has_webgl = !1, this.has_webgl
    },
    unloadMainPlugin: function() {
        Persona.Data.prev_active_plugin && this.toggleCSS(Persona.Data.prev_active_plugin, !0), "function" == typeof Persona.View.Plugin.destroy && Persona.View.Plugin.destroy(), Persona.View.Plugin.undelegateEvents(), Persona.View.Plugin.$el.removeData().unbind(), Persona.View.Plugin.remove(), Persona.View.Plugin = void 0, Persona.Model.Settings.attributes = {}
    },
    makeFallback: function() {
        var a = $('[data-container="content"]main').css("color"),
            b = a.split(","),
            c = [],
            d = 0;
        /rgb\(/.test(a) ? (b[0] = b[0].replace("rgb(", ""), c[0] = parseInt(b[0]), c[1] = parseInt(b[1]), c[2] = parseInt(b[2]), d = (299 * c[0] + 587 * c[1] + 114 * c[2]) / 1e3) : /rgba\(/.test(a) ? (b[0] = b[0].replace("rgba(", ""), c[0] = parseInt(b[0]), c[1] = parseInt(b[1]), c[2] = parseInt(b[2]), d = (299 * c[0] + 587 * c[1] + 114 * c[2]) / 1e3) : /#/.test(a) ? (c[0] = parseInt(b[0], 16), c[1] = parseInt(b[1], 16), c[2] = parseInt(b[2], 16), d = (299 * c[0] + 587 * c[1] + 114 * c[2]) / 1e3) : d = 255, d > 125 ? this.$el.css("background-color", "#333") : this.$el.css("background-color", "#fff")
    },
    loadActivePlugin: function() {
        var a = this;
        Persona.Data.require_loaded && "" != Persona.Data.active_plugin ? (Persona.Data.prev_active_plugin != Persona.Data.active_plugin && (Cargo.Event.trigger("show_loading_anim"), require.config({
            baseUrl: "/_jsapps/backdrop"
        }), require([Persona.Data.active_plugin + "/main"], function(b) {
            0 == _.keys(Persona.Model.Settings.attributes).length ? (Persona.Model.Settings.fetch({
                reset: !0
            }), Persona.Model.Settings.once("sync", function() {
                a.initAndRenderPlugin(b)
            })) : a.initAndRenderPlugin(b)
        })), Persona.Data.prev_active_plugin = Persona.Data.active_plugin) : setTimeout(function() {
            Persona.View.Backdrop.loadActivePlugin()
        }, 150)
    },
    render: function() {
        this.$el.html(Persona.View.Plugin.render().$el), Cargo.Event.trigger("plugin_render", Persona.View.Plugin), "function" == typeof Persona.View.Plugin.Init && Persona.View.Plugin.Init()
    },
    initAndRenderPlugin: function(a) {
        Cargo.Event.trigger("hide_loading_anim"), "undefined" == typeof Persona.View.Plugin && (Persona.View.Plugin = new a({
            model: Persona.Model.Settings
        }), this.toggleCSS(Persona.Data.active_plugin, !1), this.render(), Cargo.Event.trigger("plugin_load_complete"))
    },
    toggleCSS: function(a, b) {
        for (i = 0; i < document.styleSheets.length; i++) {
            var c = document.styleSheets.item(i);
            if (/backdrop\//.test(c.href)) {
                var d = c.href.split("backdrop/")[1].split("/style")[0];
                a == d && (c.disabled = b)
            }
        }
    }
}), Cargo.o.view.ProjectDetail = Backbone.View.extend({
    el: "#maincontainer",
    isAdminEdit: !1,
    initialize: function() {
        this.Data = {
            total_tries: 0,
            max_tries: 5,
            first_load: !0
        }, this.collection.bind("change", this.render, this);
        var a = this.collection,
            b = a && a.GetId() ? a.GetId() : !1;
        this.markNodesAsOriginal(b), Cargo.View.Main && b == Cargo.Model.Site.get("start_project_id") && Cargo.View.Main.SetHomepageClass();
        try {
            parent.hasOwnProperty("Cargo") && (this.isAdminEdit = parent.Cargo.Helper.IsAdminEdit())
        } catch (c) {}
    },
    render: function(a) {
        if (this.preventRender !== !0) {
            var b = this.collection;
            if (b && !b.GetId()) return this.CloseProject(), void Cargo.Helper.HideLoadingAnimation();
            if (b) {
                var c = b && b.GetId() ? b.GetId() : !1,
                    d = Cargo.Template.Get("ProjectDetail");
                if (this.Data.pid = c, !d) return Cargo.View.ProjectDetail.Data.total_tries >= Cargo.View.ProjectDetail.Data.max_tries ? document.location.href = b.get("direct_link") : setTimeout(function() {
                    Cargo.View.ProjectDetail.Data.total_tries++, Cargo.View.ProjectDetail.render()
                }, 100), !1;
                var e, f = Cargo.API.GetDataPackage("project", b.toJSON()),
                    g = Cargo.Core.Handlebars.Render(d, f),
                    h = document.createRange(),
                    i = [];
                for (h.selectNode(document.body), e = h.createContextualFragment(g), _.each(e.querySelectorAll("script"), function(a) {
                        i.push({
                            node: a,
                            parentNode: a.parentNode,
                            nextSibling: a.nextSibling
                        }), a.parentNode.removeChild(a)
                    }), this.el.innerHTML = ""; e.childNodes.length > 0;) this.el.appendChild(e.childNodes[0]);
                var j = !1,
                    k = function(a) {
                        j = !0
                    };
                window.addEventListener("error", k, !1), _.each(i, function(a) {
                    j = !1, a.parentNode.insertBefore(a.node, a.nextSibling), j && (j = !1, a.node.parentNode.insertBefore(document.createComment(a.node.outerHTML), a.node), a.node.parentNode.removeChild(a.node), this.isAdminEdit && Cargo.Modal.Alert({
                        message: "<em>One or more scripts on this page are broken and were disabled.</em>"
                    }))
                }), window.removeEventListener("error", k), this.$el.show(), this.markNodesAsOriginal(c), Cargo.Event.trigger("page_load_complete", c), Cargo.View.ProjectDetail.Data.total_tries = 0, this.Data.first_load = !1
            }
        }
    },
    CloseProject: function() {
        var a = this,
            b = this.collection;
        this.Data.first_load === !0 ? this.DoCloseActions(this.Data.pid) : $.when(Cargo.Event.ShowIndexTransition(this.Data.pid, b)).then(function() {
            a.DoCloseActions(a.Data.pid), Cargo.View.Main.SetPageId("")
        })
    },
    DoCloseActions: function(a) {
        Cargo.Event.trigger("show_index_start", a), this.$el.empty().hide(0), Cargo.Event.trigger("show_index_complete", a), this.Data.first_load = !1
    },
    Permalink: function(a) {
        Cargo.Helper.isOldIE() ? this.IePermalink(a) : (this.el.style.display = "block", Cargo.Event.trigger("direct_link_loaded", Cargo.Model.Page.GetId(), location.pathname), Cargo.Event.trigger("page_load_complete", Cargo.Model.Page.GetId())), this.Data.first_load = !1
    },
    IePermalink: function(a) {
        setTimeout(function() {
            Cargo.API.GetSinglePage(a)
        }, 500)
    },
    ChangeBgColorFromModel: function() {
        var a = this.collection;
        if ((!a || a.GetId()) && a.GetBgColor()) {
            var b = '<style id="site_bg_color"> body { background : ' + a.GetBgColor() + " } </style>";
            this.$el.append(b)
        }
    },
    SaveContent: function(a) {
        var b = this.collection;
        b.set("content", a, {
            silent: !0
        });
        var c = Cargo.Collection.Pages.where({
            id: b.get("id")
        })[0];
        c ? c.set("content", a, {
            silent: !0
        }) : console.log("Unable to update content model")
    },
    markNodesAsOriginal: function(a) {
        var b = this.$el.find("projectcontent")[0];
        if (void 0 !== b) {
            Node.prototype.hasOwnProperty("setSaveable") && this.getAllDescendants(b, function(a) {
                a.setSaveable(!0)
            });
            var c = b.parentNode;
            for (c.setAttribute("data-ce-host", "true"), c.setAttribute("data-ce-model-id", a); b.childNodes.length > 0;) c.insertBefore(b.childNodes[0], b);
            c.removeChild(b)
        }
    },
    getAllDescendants: function(a, b) {
        for (var c = 0; c < a.childNodes.length; c++) {
            var d = a.childNodes[c],
                e = b(d);
            if (e === !1) return !1;
            "continue" !== e && this.getAllDescendants(d, b)
        }
    }
}), Cargo.o.view.Default = Backbone.View.extend({
    initialize: function(a) {
        this.options = a, "object" == typeof this.collection && (this.listenTo(this.collection, "reset", this.render), this.listenTo(this.collection, "add", this.add))
    },
    render: function() {
        var a = Cargo.Template.Get(this.options.template);
        if (a) {
            var b = Cargo.API.GetDataPackage(this.options.datasetname.toLowerCase(), this.collection.toJSON()),
                c = Cargo.Core.Handlebars.Render(a, b);
            this.$el.empty(), this.$el.append(c)
        }
    },
    add: function(a) {
        var b = Cargo.Template.Get(this.options.template),
            c = this,
            d = $("[href='" + a.get("url") + "']", c.$el).length > 0,
            e = $("[data-id='" + a.get("id") + "']", c.$el).length > 0;
        if (b && !d && !e) {
            var f = Cargo.API.GetDataPackage(this.options.datasetname.toLowerCase(), a.toJSON()),
                g = Cargo.Core.Handlebars.Render(b, f);
            this.$el.append(g)
        }
    }
}), Cargo.o.view.Following = Backbone.View.extend({
    initialize: function() {
        var a = this;
        return Cargo.API.Config.preview && !Cargo.Helper.IsAdminEdit() ? !1 : void $.getJSON("//" + Cargo.Helper.GetBaseCargoDomain() + "/dispatch/auth/backstageAuth/" + Cargo.Helper.GetUrl() + "?callback=?", function(b) {
            Cargo.InspectorLoading !== !0 && ($.post("/dispatch/auth/backstageAuthLocal", {
                token: b.jdata.token,
                url: b.jdata.url,
                muid: b.jdata.muid
            }, function(b) {
                a.InitBackstageIcon(), a.Init(b.jdata)
            }, "json"), b.html && (a.$el.prepend(b.html), a.InitBackstageIcon(), a.Init(b.jdata)))
        })
    },
    InitBackstageIcon: function() {
        return Cargo.Helper.IsAdminBackdrop() ? void $("#backstage_icon a", this.el).attr("href", Cargo.Model.Site.get("home_url")).attr("target", "_top") : parent !== window ? void $("#backstage_icon", this.el).addClass("noclick") : void $("#backstage_icon a").off().on("click", function(a) {
            return a.preventDefault(), $(this).closest("#backstage_icon").hasClass("noclick") ? !1 : void Cargo.View.Backstage.Toggle()
        })
    },
    Init: function(a) {
        Cargo.API.Config.cookie_url = a.cookie_url, Cargo.API.Config.cookie_link = a.cookie_link, Cargo.API.Config.cookie_site_count = a.cookie_site_count, "object" == typeof Cargo.View.Backstage && "object" == typeof Cargo.View.Backstage.el && Cargo.View.Backstage.updateCookieData()
    }
}), $(function() {
    Cargo.Data = {}, Cargo.API = new Cargo.o.api, Cargo.Helper = new Cargo.o.helpers, Cargo.Template = new Cargo.o.templates, Cargo.Router = new Cargo.o.router, Cargo.Analytics = new Cargo.o.analytics, Cargo.Model.BasePage = Cargo.o.model.page, Cargo.Model.Page = new Cargo.Model.BasePage, Cargo.Model.DisplayOptions = new Cargo.o.model.display_options, Cargo.Model.Site = new Cargo.o.model.site, Cargo.Model.Asset = new Cargo.o.model.asset, Cargo.Model.Images = new Cargo.o.model.images, Cargo.Model.Css = new Cargo.o.model.css, Cargo.Model.Default = new Cargo.o.model.undefined_default, Cargo.Model.Project = Cargo.Model.Page, Cargo.Collection.Pages = new Cargo.o.collection.pages({
        model: Cargo.Model.BasePage
    }), Cargo.Collection.Assets = new Cargo.o.collection.assets({
        model: Cargo.Model.Asset
    }), Cargo.Collection.Images = new Cargo.o.collection.images({
        model: Cargo.Model.Images
    }), Cargo.Collection.Default = new Cargo.o.collection.undefined_default({
        model: Cargo.Model.Default
    }), Cargo.Collection.Pages.on("reset", function(a) {
        Cargo.Event.trigger("page_collection_reset")
    }), Cargo.Model.DisplayOptions.once("change", function() {
        Cargo.Event.trigger("display_options_available", Cargo.Model.DisplayOptions)
    }), Cargo.Model.DisplayOptions.fetch({
        reset: !0
    }), Cargo.Model.Page.fetch({
        reset: !0
    }), Cargo.Collection.Assets.fetch(), Cargo.Model.Site.fetch(), Cargo.Helper.TestUrlCaseAndRedirect(), Cargo.View.Backstage = new Cargo.o.view.Backstage, "undefined" == typeof Cargo.View.Main && (Cargo.View.Main = new Cargo.o.view.Main({
        el: "body",
        collection: Cargo.Model.Site
    })), Cargo.Template.FindAndAddViewStubs(), Cargo.Template.LoadFoundViews(), Cargo.Collection.Pages.fetch({
        complete: function() {
            Cargo.Event.trigger("page_collection_reset"), Cargo.Event.trigger("first_page_collection_reset")
        }
    }), Cargo.Helper.isOldIE() || Cargo.Helper.IsPersonaAdmin() || (Cargo.Router.is_first_route = !0, Backbone.history.start({
        pushState: !0,
        hashChange: !1,
        root: Cargo.Helper.GetHomeUrl(!0)
    })), Cargo.Core.KeyboardShortcut.InitDefaults(), Cargo.Template.LoadAll(), Cargo.Template.LoadFoundViews(), Cargo.Core.HiRes.Loader.init(), Cargo.Core.Slideshow.InitSlideshow(), Cargo.Core.InitKeycodeListener()
});
var Cargo = Cargo || {};
Cargo.Plugins = Cargo.Plugins || {}, Cargo.Plugins.backgroundSize = function(a) {
        return function(b, c) {
            var d, e;
            if (d = a.extend(!0, {
                    size: "cover",
                    parent: document.getElementById("backdrop"),
                    limit: !1,
                    center: !0,
                    windowEvents: "resize"
                }, c), e = {
                    active: !1
                }, void 0 === b) return void console.error("Please pass an element");
            if (b.nodeType) {
                var f = b;
                b = [], b.push(f)
            }
            "object" == typeof b && Object.keys(b).map(function(a) {
                return b[a][0]
            });
            var g = function() {
                    for (var a = 0; a < b.length; a++) i(b[a])
                },
                h = {
                    elementRatio: function(a) {
                        var b = {
                            x: 0,
                            y: 0
                        };
                        if (a.hasAttribute("height") && a.hasAttribute("width")) return b.y = a.getAttribute("width") / a.getAttribute("height"), b.x = a.getAttribute("height") / a.getAttribute("width"), b;
                        if (a.hasAttribute("data-aspect-ratio")) {
                            var c = a.getAttribute("data-aspect-ratio").split(":");
                            return b.y = parseInt(c[0]) / parseInt(c[1]), b.x = parseInt(c[1]) / parseInt(c[0]), b
                        }
                        return b = !1
                    },
                    isElement: function(a) {
                        return void 0 !== a && "undefined" != typeof HTMLElement && a instanceof HTMLElement && 1 === a.nodeType
                    },
                    parentDimensions: function(a, b) {
                        var c = {
                            w: 0,
                            h: 0
                        };
                        return b && b !== window && "window" !== b ? ("object" != typeof b || h.isElement(b) || (b = b[0]), h.isElement(b) ? (c.w = b.clientWidth, c.h = b.clientHeight, c) : (b = closest(a, b) || document.querySelector(b)) ? (c.w = b.clientWidth, c.h = b.clientHeight, c) : c = !1) : (c.w = window.innerWidth, c.h = window.innerHeight, c)
                    }
                },
                i = function(a) {
                    var b = d.size,
                        c = null,
                        e = null,
                        f = 0,
                        g = 0,
                        i = 0,
                        j = 0,
                        k = 0,
                        l = 0,
                        m = null;
                    if (e = h.elementRatio(a), !e) return void console.error("Element needs height and width defined");
                    if (f = parseInt(a.getAttribute("height")), g = parseInt(a.getAttribute("width")), a.hasAttribute("data-size")) {
                        var n = a.getAttribute("data-size");
                        "cover" !== n && "contain" !== n || (b = n)
                    }
                    return (c = h.parentDimensions(a, d.parent)) ? ("contain" === b ? m = c.w / c.h > e.y : "cover" === b ? m = c.w / c.h < e.y : console.warn("Please select a size mode"), m ? (i = Math.ceil(c.h), j = Math.ceil(c.h * e.y)) : (i = Math.ceil(c.w * e.x), j = Math.ceil(c.w)), "contain" === b && d.limit && (i > f && (i = f), j > g && (j = g)), d.center || "contain" !== d.size ? (k = Math.ceil((c.h - i) / 2), l = Math.ceil((c.w - j) / 2)) : (k = 0, l = 0), a.style.height = i + "px", a.style.width = j + "px", a.style.marginTop = k + "px", void(a.style.marginLeft = l + "px")) : void console.error("Invalid parent option")
                },
                j = function() {
                    e.active || (e.active = !0, window.addEventListener("resize", g, !1), g())
                },
                k = function() {
                    g()
                },
                l = function() {
                    e.active && (e.active = !1, window.removeEventListener("resize", g, !1))
                },
                m = function(a) {
                    "cover" !== a && "contain" !== a ? console.warn("Please pass a valid size") : (d.size = a,
                        g())
                },
                n = function(b) {
                    d = a.extend(!0, d, b), k()
                };
            return {
                start: j,
                refresh: k,
                stop: l,
                setSize: m,
                setOptions: n
            }
        }
    }(jQuery),
    function(a) {
        "use strict";
        a(jQuery)
    }(function(a) {
        "use strict";
        var b = window.Slick || {};
        b = function() {
            function b(b, d) {
                var e, f = this;
                f.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: a(b),
                    appendDots: a(b),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(b, c) {
                        return a('<button type="button" data-role="none" role="button" aria-required="false" tabindex="0" />').text(c + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, f.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, a.extend(f, f.initials), f.activeBreakpoint = null, f.animType = null, f.animProp = null, f.breakpoints = [], f.breakpointSettings = [], f.cssTransitions = !1, f.focussed = !1, f.interrupted = !1, f.hidden = "hidden", f.paused = !0, f.positionProp = null, f.respondTo = null, f.rowCount = 1, f.shouldClick = !0, f.$slider = a(b), f.$slidesCache = null, f.transformType = null, f.transitionType = null, f.visibilityChange = "visibilitychange", f.windowWidth = 0, f.windowTimer = null, e = a(b).data("slick") || {}, f.options = a.extend({}, f.defaults, d, e), f.currentSlide = f.options.initialSlide, f.originalSettings = f.options, "undefined" != typeof document.mozHidden ? (f.hidden = "mozHidden", f.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (f.hidden = "webkitHidden", f.visibilityChange = "webkitvisibilitychange"), f.autoPlay = a.proxy(f.autoPlay, f), f.autoPlayClear = a.proxy(f.autoPlayClear, f), f.autoPlayIterator = a.proxy(f.autoPlayIterator, f), f.changeSlide = a.proxy(f.changeSlide, f), f.clickHandler = a.proxy(f.clickHandler, f), f.selectHandler = a.proxy(f.selectHandler, f), f.setPosition = a.proxy(f.setPosition, f), f.swipeHandler = a.proxy(f.swipeHandler, f), f.dragHandler = a.proxy(f.dragHandler, f), f.keyHandler = a.proxy(f.keyHandler, f), f.instanceUid = c++, f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, f.registerBreakpoints(), f.init(!0)
            }
            var c = 0;
            return b
        }(), b.prototype.activateADA = function() {
            var a = this;
            a.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
            var e = this;
            if ("boolean" == typeof c) d = c, c = null;
            else if (0 > c || c >= e.slideCount) return !1;
            e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
                a(c).attr("data-slick-index", b)
            }), e.$slidesCache = e.$slides, e.reinit()
        }, b.prototype.animateHeight = function() {
            var a = this;
            if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.css("height", b)
            }
        }, b.prototype.animateSlide = function(b, c) {
            var d = {},
                e = this;
            e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
                left: b
            }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
                top: b
            }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
                animStart: e.currentLeft
            }).animate({
                animStart: b
            }, {
                duration: e.options.speed,
                easing: e.options.easing,
                step: function(a) {
                    a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
                },
                complete: function() {
                    c && c.call()
                }
            })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
                e.disableTransition(), c.call()
            }, e.options.speed))
        }, b.prototype.getNavTarget = function() {
            var b = this,
                c = b.options.asNavFor;
            return c && null !== c && (c = a(c).not(b.$slider)), c
        }, b.prototype.asNavFor = function(b) {
            var c = this,
                d = c.getNavTarget();
            null !== d && "object" == typeof d && d.each(function() {
                var c = a(this).slick("getSlick");
                c.unslicked || c.slideHandler(b, !0)
            })
        }, b.prototype.applyTransition = function(a) {
            var b = this,
                c = {};
            b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.autoPlay = function() {
            var a = this;
            a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
        }, b.prototype.autoPlayClear = function() {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer)
        }, b.prototype.autoPlayIterator = function() {
            var a = this,
                b = a.currentSlide + a.options.slidesToScroll;
            a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
        }, b.prototype.buildArrows = function() {
            var b = this;
            b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, b.prototype.buildDots = function() {
            var b, c, d = this;
            if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
                for (c = a("<ul />").addClass(d.options.dotsClass), b = 0; b <= d.getDotCount(); b += 1) c.append(a("<li />").append(d.options.customPaging.call(this, d, b)));
                d.$dots = c.appendTo(d.options.appendDots), d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, b.prototype.buildOut = function() {
            var b = this;
            b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
                a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
            }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), b.options.centerMode !== !0 && b.options.swipeToSlide !== !0 || (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
        }, b.prototype.buildRows = function() {
            var a, b, c, d, e, f, g, h = this;
            if (d = document.createDocumentFragment(), f = h.$slider.children(), h.options.rows > 1) {
                for (g = h.options.slidesPerRow * h.options.rows, e = Math.ceil(f.length / g), a = 0; e > a; a++) {
                    var i = document.createElement("div");
                    for (b = 0; b < h.options.rows; b++) {
                        var j = document.createElement("div");
                        for (c = 0; c < h.options.slidesPerRow; c++) {
                            var k = a * g + (b * h.options.slidesPerRow + c);
                            f.get(k) && j.appendChild(f.get(k))
                        }
                        i.appendChild(j)
                    }
                    d.appendChild(i)
                }
                h.$slider.empty().append(d), h.$slider.children().children().children().css({
                    width: 100 / h.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, b.prototype.checkResponsive = function(b, c) {
            var d, e, f, g = this,
                h = !1,
                i = g.$slider.width(),
                j = window.innerWidth || a(window).width();
            if ("window" === g.respondTo ? f = j : "slider" === g.respondTo ? f = i : "min" === g.respondTo && (f = Math.min(j, i)), g.options.responsive && g.options.responsive.length && null !== g.options.responsive) {
                e = null;
                for (d in g.breakpoints) g.breakpoints.hasOwnProperty(d) && (g.originalSettings.mobileFirst === !1 ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
                null !== e ? null !== g.activeBreakpoint ? (e !== g.activeBreakpoint || c) && (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : null !== g.activeBreakpoint && (g.activeBreakpoint = null, g.options = g.originalSettings, b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b), h = e), b || h === !1 || g.$slider.trigger("breakpoint", [g, h])
            }
        }, b.prototype.changeSlide = function(b, c) {
            var d, e, f, g = this,
                h = a(b.target);
            switch (h.is("a") && b.preventDefault(), h.is("li") || (h = h.closest("li")), f = g.slideCount % g.options.slidesToScroll !== 0, d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll, b.data.message) {
                case "previous":
                    e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
                    break;
                case "next":
                    e = 0 === d ? g.options.slidesToScroll : d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
                    break;
                case "index":
                    var i = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll;
                    g.slideHandler(g.checkNavigable(i), !1, c), h.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, b.prototype.checkNavigable = function(a) {
            var b, c, d = this;
            if (b = d.getNavigableIndexes(), c = 0, a > b[b.length - 1]) a = b[b.length - 1];
            else
                for (var e in b) {
                    if (a < b[e]) {
                        a = c;
                        break
                    }
                    c = b[e]
                }
            return a
        }, b.prototype.cleanUpEvents = function() {
            var b = this;
            b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
        }, b.prototype.cleanUpSlideEvents = function() {
            var b = this;
            b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
        }, b.prototype.cleanUpRows = function() {
            var a, b = this;
            b.options.rows > 1 && (a = b.$slides.children().children(), a.removeAttr("style"), b.$slider.empty().append(a))
        }, b.prototype.clickHandler = function(a) {
            var b = this;
            b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
        }, b.prototype.destroy = function(b) {
            var c = this;
            c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                a(this).attr("style", a(this).data("originalStyling"))
            }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
        }, b.prototype.disableTransition = function(a) {
            var b = this,
                c = {};
            c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.fadeSlide = function(a, b) {
            var c = this;
            c.cssTransitions === !1 ? (c.$slides.eq(a).css({
                zIndex: c.options.zIndex
            }), c.$slides.eq(a).animate({
                opacity: 1
            }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
                opacity: 1,
                zIndex: c.options.zIndex
            }), b && setTimeout(function() {
                c.disableTransition(a), b.call()
            }, c.options.speed))
        }, b.prototype.fadeSlideOut = function(a) {
            var b = this;
            b.cssTransitions === !1 ? b.$slides.eq(a).animate({
                opacity: 0,
                zIndex: b.options.zIndex - 2
            }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
                opacity: 0,
                zIndex: b.options.zIndex - 2
            }))
        }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
            var b = this;
            null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
        }, b.prototype.focusHandler = function() {
            var b = this;
            b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(c) {
                c.stopImmediatePropagation();
                var d = a(this);
                setTimeout(function() {
                    b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
                }, 0)
            })
        }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
            var a = this;
            return a.currentSlide
        }, b.prototype.getDotCount = function() {
            var a = this,
                b = 0,
                c = 0,
                d = 0;
            if (a.options.infinite === !0)
                for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            else if (a.options.centerMode === !0) d = a.slideCount;
            else
                for (c = a.slideCount % a.options.slidesToShow == 0 ? c : c + 1; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            return d - 1
        }, b.prototype.getLeft = function(a) {
            var b, c, d, e = this,
                f = 0;
            return e.slideOffset = 0, c = e.$slides.first().outerHeight(!0), e.options.infinite === !0 ? (e.slideCount > e.options.slidesToShow && (e.slideOffset = e.slideWidth * e.options.slidesToShow * -1, f = c * e.options.slidesToShow * -1), e.slideCount % e.options.slidesToScroll !== 0 && a + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow && (a > e.slideCount ? (e.slideOffset = (e.options.slidesToShow - (a - e.slideCount)) * e.slideWidth * -1, f = (e.options.slidesToShow - (a - e.slideCount)) * c * -1) : (e.slideOffset = e.slideCount % e.options.slidesToScroll * e.slideWidth * -1, f = e.slideCount % e.options.slidesToScroll * c * -1))) : a + e.options.slidesToShow > e.slideCount && (e.slideOffset = (a + e.options.slidesToShow - e.slideCount) * e.slideWidth, f = (a + e.options.slidesToShow - e.slideCount) * c), e.slideCount <= e.options.slidesToShow && (e.slideOffset = 0, f = 0), e.options.centerMode === !0 && e.options.infinite === !0 ? e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth : e.options.centerMode === !0 && (e.slideOffset = 0, e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2)), b = e.options.vertical === !1 ? a * e.slideWidth * -1 + e.slideOffset : a * c * -1 + f, e.options.variableWidth === !0 && (d = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow), b = e.options.rtl === !0 ? d[0] ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, e.options.centerMode === !0 && (d = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow + 1), b = e.options.rtl === !0 ? d[0] ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, b += (e.$list.width() - d.outerWidth()) / 2)), b
        }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
            var b = this;
            return b.options[a]
        }, b.prototype.getNavigableIndexes = function() {
            var a, b = this,
                c = 0,
                d = 0,
                e = [];
            for (b.options.infinite === !1 ? a = b.slideCount : (c = -1 * b.options.slidesToScroll, d = -1 * b.options.slidesToScroll, a = 2 * b.slideCount); a > c;) e.push(c), c = d + b.options.slidesToScroll, d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow;
            return e
        }, b.prototype.getSlick = function() {
            return this
        }, b.prototype.getSlideCount = function() {
            var b, c, d, e = this;
            return d = e.options.centerMode === !0 ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0, e.options.swipeToSlide === !0 ? (e.$slideTrack.find(".slick-slide").each(function(b, f) {
                return f.offsetLeft - d + a(f).outerWidth() / 2 > -1 * e.swipeLeft ? (c = f, !1) : void 0
            }), b = Math.abs(a(c).attr("data-slick-index") - e.currentSlide) || 1) : e.options.slidesToScroll
        }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
            var c = this;
            c.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(a)
                }
            }, b)
        }, b.prototype.init = function(b) {
            var c = this;
            a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
        }, b.prototype.initADA = function() {
            var b = this;
            b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
                a(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + b.instanceUid + c
                })
            }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function(c) {
                a(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + b.instanceUid + c,
                    id: "slick-slide" + b.instanceUid + c
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
        }, b.prototype.initArrowEvents = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
                message: "previous"
            }, a.changeSlide), a.$nextArrow.on("click.slick", {
                message: "next"
            }, a.changeSlide))
        }, b.prototype.initDotEvents = function() {
            var b = this;
            b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
                message: "index"
            }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
        }, b.prototype.initSlideEvents = function() {
            var b = this;
            b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
        }, b.prototype.initializeEvents = function() {
            var b = this;
            b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
        }, b.prototype.initUI = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
        }, b.prototype.keyHandler = function(a) {
            var b = this;
            a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
                data: {
                    message: "next"
                }
            }))
        }, b.prototype.lazyLoad = function() {
            function b(b) {
                a("img[data-lazy]", b).each(function() {
                    var b = a(this),
                        c = a(this).attr("data-lazy"),
                        d = document.createElement("img");
                    d.onload = function() {
                        b.animate({
                            opacity: 0
                        }, 100, function() {
                            b.attr("src", c).animate({
                                opacity: 1
                            }, 200, function() {
                                b.removeAttr("data-lazy").removeClass("slick-loading")
                            })
                        })
                    }, d.src = c
                })
            }
            var c, d, e, f, g = this;
            g.options.centerMode === !0 ? g.options.infinite === !0 ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1), f = e + g.options.slidesToShow + 2) : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)), f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide, f = e + g.options.slidesToShow, g.options.fade === !0 && (e > 0 && e--, f <= g.slideCount && f++)), c = g.$slider.find(".slick-slide").slice(e, f), b(c), g.slideCount <= g.options.slidesToShow ? (d = g.$slider.find(".slick-slide"), b(d)) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow), b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow), b(d))
        }, b.prototype.loadSlider = function() {
            var a = this;
            a.setPosition(), a.$slideTrack.css({
                opacity: 1
            }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
        }, b.prototype.next = b.prototype.slickNext = function() {
            var a = this;
            a.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, b.prototype.orientationChange = function() {
            var a = this;
            a.checkResponsive(), a.setPosition()
        }, b.prototype.pause = b.prototype.slickPause = function() {
            var a = this;
            a.autoPlayClear(), a.paused = !0
        }, b.prototype.play = b.prototype.slickPlay = function() {
            var a = this;
            a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
        }, b.prototype.postSlide = function(a) {
            var b = this;
            b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
        }, b.prototype.prev = b.prototype.slickPrev = function() {
            var a = this;
            a.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, b.prototype.preventDefault = function(a) {
            a.preventDefault()
        }, b.prototype.progressiveLazyLoad = function() {
            var b, c, d = this;
            b = a("img[data-lazy]", d.$slider).length, b > 0 && (c = a("img[data-lazy]", d.$slider).first(), c.attr("src", null), c.attr("src", c.attr("data-lazy")).removeClass("slick-loading").load(function() {
                c.removeAttr("data-lazy"), d.progressiveLazyLoad(), d.options.adaptiveHeight === !0 && d.setPosition()
            }).error(function() {
                c.removeAttr("data-lazy"), d.progressiveLazyLoad()
            }))
        }, b.prototype.refresh = function(b) {
            var c, d, e = this;
            d = e.slideCount - e.options.slidesToShow, !e.options.infinite && e.currentSlide > d && (e.currentSlide = d), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), c = e.currentSlide, e.destroy(!0), a.extend(e, e.initials, {
                currentSlide: c
            }), e.init(), b || e.changeSlide({
                data: {
                    message: "index",
                    index: c
                }
            }, !1)
        }, b.prototype.registerBreakpoints = function() {
            var b, c, d, e = this,
                f = e.options.responsive || null;
            if ("array" === a.type(f) && f.length) {
                e.respondTo = e.options.respondTo || "window";
                for (b in f)
                    if (d = e.breakpoints.length - 1, c = f[b].breakpoint, f.hasOwnProperty(b)) {
                        for (; d >= 0;) e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1), d--;
                        e.breakpoints.push(c), e.breakpointSettings[c] = f[b].settings
                    }
                e.breakpoints.sort(function(a, b) {
                    return e.options.mobileFirst ? a - b : b - a
                })
            }
        }, b.prototype.reinit = function() {
            var b = this;
            b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.options.autoplay && b.autoPlay(), b.$slider.trigger("reInit", [b])
        }, b.prototype.resize = function() {
            var b = this;
            a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
                b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
            }, 50))
        }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
            var d = this;
            return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
        }, b.prototype.setCSS = function(a) {
            var b, c, d = this,
                e = {};
            d.options.rtl === !0 && (a = -a), b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px", c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px", e[d.positionProp] = a, d.transformsEnabled === !1 ? d.$slideTrack.css(e) : (e = {}, d.cssTransitions === !1 ? (e[d.animType] = "translate(" + b + ", " + c + ")", d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)", d.$slideTrack.css(e)))
        }, b.prototype.setDimensions = function() {
            var a = this;
            a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
                padding: "0px " + a.options.centerPadding
            }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
                padding: a.options.centerPadding + " 0px"
            })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
            var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
            a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
        }, b.prototype.setFade = function() {
            var b, c = this;
            c.$slides.each(function(d, e) {
                b = c.slideWidth * d * -1, c.options.rtl === !0 ? a(e).css({
                    position: "relative",
                    right: b,
                    top: 0,
                    zIndex: c.options.zIndex - 2,
                    opacity: 0
                }) : a(e).css({
                    position: "relative",
                    left: b,
                    top: 0,
                    zIndex: c.options.zIndex - 2,
                    opacity: 0
                })
            }), c.$slides.eq(c.currentSlide).css({
                zIndex: c.options.zIndex - 1,
                opacity: 1
            })
        }, b.prototype.setHeight = function() {
            var a = this;
            if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
                var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
                a.$list.css("height", b)
            }
        }, b.prototype.setOption = b.prototype.slickSetOption = function(b, c, d) {
            var e, f, g = this;
            if ("responsive" === b && "array" === a.type(c))
                for (f in c)
                    if ("array" !== a.type(g.options.responsive)) g.options.responsive = [c[f]];
                    else {
                        for (e = g.options.responsive.length - 1; e >= 0;) g.options.responsive[e].breakpoint === c[f].breakpoint && g.options.responsive.splice(e, 1), e--;
                        g.options.responsive.push(c[f])
                    } else g.options[b] = c;
            d === !0 && (g.unload(), g.reinit())
        }, b.prototype.setPosition = function() {
            var a = this;
            a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
        }, b.prototype.setProps = function() {
            var a = this,
                b = document.body.style;
            a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), void 0 === b.WebkitTransition && void 0 === b.MozTransition && void 0 === b.msTransition || a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
        }, b.prototype.setSlideClasses = function(a) {
            var b, c, d, e, f = this;
            c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), f.$slides.eq(a).addClass("slick-current"), f.options.centerMode === !0 ? (b = Math.floor(f.options.slidesToShow / 2), f.options.infinite === !0 && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b, a + b + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = f.options.slidesToShow + a, c.slice(d - b + 1, d + b + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")), f.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : c.length <= f.options.slidesToShow ? c.addClass("slick-active").attr("aria-hidden", "false") : (e = f.slideCount % f.options.slidesToShow, d = f.options.infinite === !0 ? f.options.slidesToShow + a : a, f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active").attr("aria-hidden", "false") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === f.options.lazyLoad && f.lazyLoad()
        }, b.prototype.setupInfinite = function() {
            var b, c, d, e = this;
            if (e.options.fade === !0 && (e.options.centerMode = !1),
                e.options.infinite === !0 && e.options.fade === !1 && (c = null, e.slideCount > e.options.slidesToShow)) {
                for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow, b = e.slideCount; b > e.slideCount - d; b -= 1) c = b - 1, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
                for (b = 0; d > b; b += 1) c = b, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
                e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    a(this).attr("id", "")
                })
            }
        }, b.prototype.interrupt = function(a) {
            var b = this;
            a || b.autoPlay(), b.interrupted = a
        }, b.prototype.selectHandler = function(b) {
            var c = this,
                d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
                e = parseInt(d.attr("data-slick-index"));
            return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
        }, b.prototype.slideHandler = function(a, b, c) {
            var d, e, f, g, h, i = null,
                j = this;
            return b = b || !1, j.animating === !0 && j.options.waitForAnimate === !0 || j.options.fade === !0 && j.currentSlide === a || j.slideCount <= j.options.slidesToShow ? void 0 : (b === !1 && j.asNavFor(a), d = a, i = j.getLeft(d), g = j.getLeft(j.currentSlide), j.currentLeft = null === j.swipeLeft ? g : j.swipeLeft, j.options.infinite === !1 && j.options.centerMode === !1 && (0 > a || a > j.getDotCount() * j.options.slidesToScroll) ? void(j.options.fade === !1 && (d = j.currentSlide, c !== !0 ? j.animateSlide(g, function() {
                j.postSlide(d)
            }) : j.postSlide(d))) : j.options.infinite === !1 && j.options.centerMode === !0 && (0 > a || a > j.slideCount - j.options.slidesToScroll) ? void(j.options.fade === !1 && (d = j.currentSlide, c !== !0 ? j.animateSlide(g, function() {
                j.postSlide(d)
            }) : j.postSlide(d))) : (j.options.autoplay && clearInterval(j.autoPlayTimer), e = 0 > d ? j.slideCount % j.options.slidesToScroll !== 0 ? j.slideCount - j.slideCount % j.options.slidesToScroll : j.slideCount + d : d >= j.slideCount ? j.slideCount % j.options.slidesToScroll !== 0 ? 0 : d - j.slideCount : d, j.animating = !0, j.$slider.trigger("beforeChange", [j, j.currentSlide, e]), f = j.currentSlide, j.currentSlide = e, j.setSlideClasses(j.currentSlide), j.options.asNavFor && (h = j.getNavTarget(), h = h.slick("getSlick"), h.slideCount <= h.options.slidesToShow && h.setSlideClasses(j.currentSlide)), j.updateDots(), j.updateArrows(), j.options.fade === !0 ? (c !== !0 ? (j.fadeSlideOut(f), j.fadeSlide(e, function() {
                j.postSlide(e)
            })) : j.postSlide(e), void j.animateHeight()) : void(c !== !0 ? j.animateSlide(i, function() {
                j.postSlide(e)
            }) : j.postSlide(e))))
        }, b.prototype.startLoad = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
        }, b.prototype.swipeDirection = function() {
            var a, b, c, d, e = this;
            return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical"
        }, b.prototype.swipeEnd = function(a) {
            var b, c = this;
            if (c.dragging = !1, c.interrupted = !1, c.shouldClick = !(c.touchObject.swipeLength > 10), void 0 === c.touchObject.curX) return !1;
            if (c.touchObject.edgeHit === !0 && c.$slider.trigger("edge", [c, c.swipeDirection()]), c.touchObject.swipeLength >= c.touchObject.minSwipe) switch (c.swipeDirection()) {
                case "left":
                    b = c.options.swipeToSlide ? c.checkNavigable(c.currentSlide + c.getSlideCount()) : c.currentSlide + c.getSlideCount(), c.slideHandler(b), c.currentDirection = 0, c.touchObject = {}, c.$slider.trigger("swipe", [c, "left"]);
                    break;
                case "right":
                    b = c.options.swipeToSlide ? c.checkNavigable(c.currentSlide - c.getSlideCount()) : c.currentSlide - c.getSlideCount(), c.slideHandler(b), c.currentDirection = 1, c.touchObject = {}, c.$slider.trigger("swipe", [c, "right"])
            } else c.touchObject.startX !== c.touchObject.curX && (c.slideHandler(c.currentSlide), c.touchObject = {})
        }, b.prototype.swipeHandler = function(a) {
            var b = this;
            if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
                case "start":
                    b.swipeStart(a);
                    break;
                case "move":
                    b.swipeMove(a);
                    break;
                case "end":
                    b.swipeEnd(a)
            }
        }, b.prototype.swipeMove = function(a) {
            var b, c, d, e, f, g = this;
            return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !g.dragging || f && 1 !== f.length ? !1 : (b = g.getLeft(g.currentSlide), g.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX, g.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY, g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curX - g.touchObject.startX, 2))), g.options.verticalSwiping === !0 && (g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curY - g.touchObject.startY, 2)))), c = g.swipeDirection(), "vertical" !== c ? (void 0 !== a.originalEvent && g.touchObject.swipeLength > 4 && a.preventDefault(), e = (g.options.rtl === !1 ? 1 : -1) * (g.touchObject.curX > g.touchObject.startX ? 1 : -1), g.options.verticalSwiping === !0 && (e = g.touchObject.curY > g.touchObject.startY ? 1 : -1), d = g.touchObject.swipeLength, g.touchObject.edgeHit = !1, g.options.infinite === !1 && (0 === g.currentSlide && "right" === c || g.currentSlide >= g.getDotCount() && "left" === c) && (d = g.touchObject.swipeLength * g.options.edgeFriction, g.touchObject.edgeHit = !0), g.options.vertical === !1 ? g.swipeLeft = b + d * e : g.swipeLeft = b + d * (g.$list.height() / g.listWidth) * e, g.options.verticalSwiping === !0 && (g.swipeLeft = b + d * e), g.options.fade === !0 || g.options.touchMove === !1 ? !1 : g.animating === !0 ? (g.swipeLeft = null, !1) : void g.setCSS(g.swipeLeft)) : void 0)
        }, b.prototype.swipeStart = function(a) {
            var b, c = this;
            return c.interrupted = !0, 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow ? (c.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]), c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX, c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY, void(c.dragging = !0))
        }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
            var a = this;
            null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
        }, b.prototype.unload = function() {
            var b = this;
            a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, b.prototype.unslick = function(a) {
            var b = this;
            b.$slider.trigger("unslick", [b, a]), b.destroy()
        }, b.prototype.updateArrows = function() {
            var a, b = this;
            a = Math.floor(b.options.slidesToShow / 2), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && !b.options.infinite && (b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === b.currentSlide ? (b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - b.options.slidesToShow && b.options.centerMode === !1 ? (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - 1 && b.options.centerMode === !0 && (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, b.prototype.updateDots = function() {
            var a = this;
            null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, b.prototype.visibility = function() {
            var a = this;
            a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
        }, a.fn.slick = function() {
            var a, c, d = this,
                e = arguments[0],
                f = Array.prototype.slice.call(arguments, 1),
                g = d.length;
            for (a = 0; g > a; a++)
                if ("object" == typeof e || "undefined" == typeof e ? d[a].slick = new b(d[a], e) : c = d[a].slick[e].apply(d[a].slick, f), "undefined" != typeof c) return c;
            return d
        }
    }),
    function(a) {
        "undefined" != typeof define && define.amd ? define([], a) : "undefined" != typeof module && module.exports ? module.exports = a() : window.scrollMonitor = a()
    }(function() {
        function a() {
            if (h.viewportTop = g(), h.viewportBottom = h.viewportTop + h.viewportHeight, h.documentHeight = t(), h.documentHeight !== u) {
                for (w = i.length; w--;) i[w].recalculateLocation();
                u = h.documentHeight
            }
        }

        function b() {
            h.viewportHeight = s(), a(), d()
        }

        function c() {
            clearTimeout(x), x = setTimeout(b, 100)
        }

        function d() {
            for (y = i.length; y--;) i[y].update();
            for (y = i.length; y--;) i[y].triggerCallbacks()
        }

        function e(a, b) {
            function c(a) {
                if (0 !== a.length)
                    for (u = a.length; u--;) w = a[u], w.callback.call(d, v), w.isOne && a.splice(u, 1)
            }
            var d = this;
            this.watchItem = a, b ? b === +b ? this.offsets = {
                top: b,
                bottom: b
            } : this.offsets = {
                top: b.top || r.top,
                bottom: b.bottom || r.bottom
            } : this.offsets = r, this.callbacks = {};
            for (var e = 0, f = q.length; f > e; e++) d.callbacks[q[e]] = [];
            this.locked = !1;
            var g, i, s, t, u, w;
            this.triggerCallbacks = function() {
                switch (this.isInViewport && !g && c(this.callbacks[k]), this.isFullyInViewport && !i && c(this.callbacks[l]), this.isAboveViewport !== s && this.isBelowViewport !== t && (c(this.callbacks[j]), i || this.isFullyInViewport || (c(this.callbacks[l]), c(this.callbacks[n])), g || this.isInViewport || (c(this.callbacks[k]), c(this.callbacks[m]))), !this.isFullyInViewport && i && c(this.callbacks[n]), !this.isInViewport && g && c(this.callbacks[m]), this.isInViewport !== g && c(this.callbacks[j]), !0) {
                    case g !== this.isInViewport:
                    case i !== this.isFullyInViewport:
                    case s !== this.isAboveViewport:
                    case t !== this.isBelowViewport:
                        c(this.callbacks[p])
                }
                g = this.isInViewport, i = this.isFullyInViewport, s = this.isAboveViewport, t = this.isBelowViewport
            }, this.recalculateLocation = function() {
                if (!this.locked) {
                    var a = this.top,
                        b = this.bottom;
                    if (this.watchItem.nodeName) {
                        var d = this.watchItem.style.display;
                        "none" === d && (this.watchItem.style.display = "");
                        var e = this.watchItem.getBoundingClientRect();
                        this.top = e.top + h.viewportTop, this.bottom = e.bottom + h.viewportTop, "none" === d && (this.watchItem.style.display = d)
                    } else this.watchItem === +this.watchItem ? this.watchItem > 0 ? this.top = this.bottom = this.watchItem : this.top = this.bottom = h.documentHeight - this.watchItem : (this.top = this.watchItem.top, this.bottom = this.watchItem.bottom);
                    this.top -= this.offsets.top, this.bottom += this.offsets.bottom, this.height = this.bottom - this.top, void 0 === a && void 0 === b || this.top === a && this.bottom === b || c(this.callbacks[o])
                }
            }, this.recalculateLocation(), this.update(), g = this.isInViewport, i = this.isFullyInViewport, s = this.isAboveViewport, t = this.isBelowViewport
        }

        function f(b) {
            v = b, a(), d()
        }
        var g = function() {
                return window.pageYOffset || document.documentElement && document.documentElement.scrollTop || document.body.scrollTop
            },
            h = {},
            i = [],
            j = "visibilityChange",
            k = "enterViewport",
            l = "fullyEnterViewport",
            m = "exitViewport",
            n = "partiallyExitViewport",
            o = "locationChange",
            p = "stateChange",
            q = [j, k, l, m, n, o, p],
            r = {
                top: 0,
                bottom: 0
            },
            s = function() {
                return window.innerHeight || document.documentElement.clientHeight
            },
            t = function() {
                return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.documentElement.clientHeight)
            };
        h.viewportTop = null, h.viewportBottom = null, h.documentHeight = null, h.viewportHeight = s();
        var u, v, w, x, y;
        e.prototype = {
            on: function(a, b, c) {
                switch (!0) {
                    case a === j && !this.isInViewport && this.isAboveViewport:
                    case a === k && this.isInViewport:
                    case a === l && this.isFullyInViewport:
                    case a === m && this.isAboveViewport && !this.isInViewport:
                    case a === n && this.isAboveViewport:
                        if (b.call(this, v), c) return
                }
                if (!this.callbacks[a]) throw new Error("Tried to add a scroll monitor listener of type " + a + ". Your options are: " + q.join(", "));
                this.callbacks[a].push({
                    callback: b,
                    isOne: c || !1
                })
            },
            off: function(a, b) {
                if (!this.callbacks[a]) throw new Error("Tried to remove a scroll monitor listener of type " + a + ". Your options are: " + q.join(", "));
                for (var c, d = 0; c = this.callbacks[a][d]; d++)
                    if (c.callback === b) {
                        this.callbacks[a].splice(d, 1);
                        break
                    }
            },
            one: function(a, b) {
                this.on(a, b, !0)
            },
            recalculateSize: function() {
                this.height = this.watchItem.offsetHeight + this.offsets.top + this.offsets.bottom, this.bottom = this.top + this.height
            },
            update: function() {
                this.isAboveViewport = this.top < h.viewportTop, this.isBelowViewport = this.bottom > h.viewportBottom, this.isInViewport = this.top <= h.viewportBottom && this.bottom >= h.viewportTop, this.isFullyInViewport = this.top >= h.viewportTop && this.bottom <= h.viewportBottom || this.isAboveViewport && this.isBelowViewport
            },
            destroy: function() {
                var a = i.indexOf(this),
                    b = this;
                i.splice(a, 1);
                for (var c = 0, d = q.length; d > c; c++) b.callbacks[q[c]].length = 0
            },
            lock: function() {
                this.locked = !0
            },
            unlock: function() {
                this.locked = !1
            }
        };
        for (var z = function(a) {
                return function(b, c) {
                    this.on.call(this, a, b, c)
                }
            }, A = 0, B = q.length; B > A; A++) {
            var C = q[A];
            e.prototype[C] = z(C)
        }
        try {
            a()
        } catch (D) {
            try {
                window.$(a)
            } catch (D) {
                throw new Error("If you must put scrollMonitor in the <head>, you must use jQuery.")
            }
        }
        return window.addEventListener ? (window.addEventListener("scroll", f), window.addEventListener("resize", c)) : (window.attachEvent("onscroll", f), window.attachEvent("onresize", c)), h.beget = h.create = function(a, b) {
            "string" == typeof a ? a = document.querySelector(a) : a && a.length > 0 && (a = a[0]);
            var c = new e(a, b);
            return i.push(c), c.update(), c
        }, h.update = function() {
            v = null, a(), d()
        }, h.recalculateLocations = function() {
            h.documentHeight = 0, h.update()
        }, h
    }), ! function(a, b) {
        var c = function(a, b, c) {
            return a.prototype.hasOwnProperty(name) !== !1 ? !1 : void(a.prototype[b] = c)
        };
        c(Node, "saveable", !1), c(Node, "setSaveable", function(a) {
            return this.saveable = a, this
        }), c(Node, "isSaveable", function() {
            return this.saveable
        }), Node.prototype.persistCloneNode = function() {
            var a = function(b, c, d) {
                    for (var e = 0; e < b.childNodes.length; e++) d(b.childNodes[e], c.childNodes[e]), b.childNodes[e].childNodes.length > 0 && a(b.childNodes[e], c.childNodes[e], d)
                },
                b = Node.prototype.cloneNode.apply(this, arguments);
            return this.isSaveable() === !0 && b.setSaveable(!0), this.childNodes.length > 0 && a(this, b, function(a, b) {
                a.isSaveable() === !0 && b.setSaveable(!0)
            }), b
        }, this.core = {
            markAsEditable: function(a) {}
        }
    }(window.CargoEditor = window.CargoEditor || {}), Cargo = window.Cargo || {}, Cargo.Modal || {};
var modal = Backbone.View.extend({
    id: "confirm_modal",
    defaults: {
        message: "Save changes?",
        modal_type: "save",
        selector: "body"
    },
    template: null,
    existingLinkElement: void 0,
    events: {
        "click .modal-overlay": "ModalClose",
        "click [data-confirm]": "ModalConfirm",
        "click [data-deny]": "ModalDeny"
    },
    is_active: !1,
    initialize: function(a) {
        if (null == this.template) {
            var b = this;
            $.get("/_jsapps/modal/modal.html", function(a) {
                b.template = _.template(a)
            })
        }
    },
    render: function() {
        var a = this.template({
            modal: this.model.toJSON()
        });
        return this.$el.html(a), setTimeout(function() {
            $(this.el).attr("tabindex", "-1"), $(this.el).focus(), setTimeout(function() {
                $(this.el).focus()
            }.bind(this), 100)
        }.bind(this), 100), Cargo.Event.once("enter_keycode_triggered", this.ModalConfirm, this), Cargo.Event.once("esc_keycode_triggered", this.ModalClose, this), "save" == this.model.get("modal_type") && Cargo.Event.once("save_shortcut_triggered", this.ModalConfirm, this), this
    },
    Confirm: function(a) {
        a = a || {}, a.modal_type = "confirm", this.show(a)
    },
    Alert: function(a) {
        a = a || {}, a.modal_type = "alert", this.show(a)
    },
    Save: function(a) {
        a = a || {}, a.modal_type = "save", this.show(a)
    },
    show: function(a) {
        this.model = null, this.model = new Backbone.Model(this.defaults), _.extend(this.model.attributes, a), $(this.model.get("selector")).append(this.render().el), this.is_active = !0
    },
    isActive: function() {
        return this.is_active
    },
    ModalConfirm: function() {
        "function" == typeof this.model.get("confirm") && this.model.get("confirm")(), this.model.set("modal_type", null), this.ModalClose()
    },
    ModalDeny: function() {
        "function" == typeof this.model.get("deny") && this.model.get("deny")(), this.ModalClose()
    },
    ModalClose: function() {
        return "alert" == this.model.get("modal_type") ? (this.model.set("modal_type", null), void this.ModalConfirm()) : (this.is_active = !1, Cargo.Event.off("enter_keycode_triggered", this.ModalConfirm), Cargo.Event.off("enter_keycode_triggered", this.ModalClose), Cargo.Event.off("esc_keycode_triggered", this.ModalClose), Cargo.Event.off("save_shortcut_triggered", this.ModalConfirm), $(document).off("keydown.confirm_modal"), void this.el.remove())
    }
});
Cargo.Modal = new modal;
var Persona = {
    Data: {
        active_plugin: "",
        active_plugin_id: "",
        prev_active_plugin: "",
        require_loaded: !1
    },
    Init: function() {
        this.SetModels(), Persona.View.Backdrop = Cargo.View.Backdrop
    },
    SetModels: function() {
        "undefined" == typeof Persona.Model.Settings && (Persona.Model.Settings = new Persona.o.model.Settings, Persona.Model.Settings.fetch()), "undefined" == typeof Persona.Model.Global && (Persona.Model.Global = new Persona.o.model.Global, Persona.Model.Global.fetch()), "undefined" == typeof Persona.Collection.Images && (Persona.Collection.Images = new Persona.o.collection.images({
            dataset: "Images"
        }), Persona.Collection.Images.fetch()), "undefined" == typeof Persona.Collection.PresetImages && (Persona.Collection.PresetImages = new Persona.o.collection.images({
            dataset: "PresetImages"
        }), Persona.Collection.PresetImages.fetch()), "undefined" == Persona.Model.HomePage && Cargo.Helper.GetStartProjectId() > 0 && (Persona.Model.HomePage = new Cargo.Model.BasePage, Persona.Model.HomePage.fetch({
            data: {
                pid: Cargo.Helper.GetStartProjectId()
            }
        })), Persona.Data.active_plugin_id = Persona.Model.Global.get("active_plugin_id"), Persona.Data.active_plugin = Persona.Model.Global.get("active_plugin_path")
    },
    OpenSettings: function() {
        Cargo.API.Config.is_editor ? parent.location == window.location && Cargo.Event.trigger("add_history", "admin/plugins") : Cargo.Helper.GoToUrl("admin/plugins")
    },
    UnloadSettings: function() {
        $("#persona_settings").remove()
    }
};
Persona.o = {}, Persona.o.model = {}, Persona.o.collection = {}, Persona.Model = {}, Persona.Collection = {}, Persona.View = {}, $(function() {
    Persona.Init()
}), Persona.o.model.Settings = Backbone.Model.extend({
    initialize: function() {},
    idAttribute: "plugin_id",
    isNew: function() {
        return !0
    },
    fetch: function(a) {
        if ($("[data-set='BackdropSettings']").length > 0) {
            if (this.set($.parseJSON($("[data-set='BackdropSettings']").html()), a), Cargo.Helper.IsPresetPreview() || $("[data-set='BackdropSettings']").remove(), a) var b = a.success;
            b && b.call(a.context, this, null, a)
        } else Backbone.Model.prototype.fetch.apply(this, arguments)
    },
    parse: function(a) {
        if (a && a.image) {
            var b = Persona.Collection.Images.GetImageExistsByName(a.image);
            void 0 == b && (a = _.omit(a, "image", "image_2x"))
        }
        return a
    },
    url: function() {
        var a = Cargo.API.Config;
        return a.api_path + "/" + a.Version + "/backdrop/" + Cargo.Model.Site.get("site_url") + "/" + Persona.Data.active_plugin_id
    }
}), Persona.o.model.Global = Backbone.Model.extend({
    isNew: function() {
        return !0
    },
    fetch: function(a) {
        $("[data-set='GlobalSettings']").length > 0 ? this.set($.parseJSON($("[data-set='GlobalSettings']").html()), a) : Backbone.Model.prototype.fetch.apply(this, arguments)
    },
    url: function() {
        var a = Cargo.API.Config;
        return a.api_path + "/" + a.Version + "/backdrop/global/" + a.cargo_url
    }
}), Persona.o.collection.images = Backbone.Collection.extend({
    model: Cargo.o.model.images,
    initialize: function(a) {
        this.dataset = a.dataset ? a.dataset : "Images"
    },
    comparator: "sort",
    fetch: function(a) {
        $("[data-set='" + this.dataset + "']").length > 0 ? (this.set($.parseJSON($("[data-set='" + this.dataset + "']").html()), a), $("[data-set='" + this.dataset + "']").remove()) : Backbone.Model.prototype.fetch.apply(this, arguments)
    },
    parse: function(a) {
        return Persona.Model.Settings.get("media_uid") ? void 0 : "object" == typeof a.images ? a.images : a
    },
    url: function() {
        return "/_api/v0/images/" + Cargo.Helper.GetUrl() + "/plugin/" + Persona.Model.Global.get("upload_id")
    },
    GetImageSizeByName: function(a, b) {
        if (void 0 == a) return a;
        var c, d;
        if (a = a.replace("http:", ""), _.every(this.models, function(b, e) {
                return c = _.findWhere(b.get("sizes"), {
                    name: a
                }), d = b, void 0 === c
            }), void 0 == c) {
            var e = /bird\./.test(Cargo.Helper.GetBaseCargoDomain()) ? /\/transit.bird\./ : /\/transit[0-9]?\./;
            a = a.replace(e, "/payload."), _.every(this.models, function(b, e) {
                return c = _.findWhere(b.get("sizes"), {
                    name: a
                }), d = b, void 0 === c
            })
        }
        return void 0 != c && /\/transit[0-9]?\./.test(c.name) && Cargo.Helper.isSafari() && (c.name = this.CheckTransitAndGetImage(c.name)), b === !0 ? d : c
    },
    GetImageModelBySizeName: function(a) {
        return this.GetImageSizeByName(a, !0)
    },
    GetImagePresetByName: function(a) {
        return this.findWhere({
            image: a
        })
    },
    GetImageExistsByName: function(a) {
        var b, c = this.GetImageSizeByName(a);
        return void 0 === c && (c = Persona.Collection.PresetImages.GetImagePresetByName(a)), "object" == typeof c && (b = c.name ? c.name : c.get("image")), b
    },
    GetImageUrlOrDefaultFromName: function(a, b) {
        return a = this.GetImageExistsByName(a), void 0 === a && (a = b), a
    },
    CheckTransitAndGetImage: function(a) {
        var b = new XMLHttpRequest;
        b.open("GET", a, !1);
        try {
            b.send()
        } catch (c) {
            var d = /bird\./.test(Cargo.Helper.GetBaseCargoDomain()) ? /\/transit.bird\./ : /\/transit[0-9]?\./;
            a = a.replace(d, "/payload.")
        }
        return a
    },
    getCleanImageUrl: function(a) {
        return a = a + "?nocache=" + Date.now()
    },
    hasTransitImages: function() {
        var a = /bird\./.test(Cargo.Helper.GetBaseCargoDomain()) ? /\/transit.bird\./ : /\/transit[0-9]?\./,
            b = _(this.filter(function(b) {
                return a.test(b.get("original_url"))
            }));
        return b.size() > 0
    }
});
var Cargo = Cargo || {};
Cargo.Plugins = Cargo.Plugins || {}, Cargo.Plugins.baseUnit = function(a) {
    return function(b) {
        var c, d = a.extend(!0, {
            height: a(window).height(),
            width: a(window).width(),
            min: 11,
            max: !1,
            weight: 5,
            round: !0,
            offset: 1
        }, b);
        return c = d.height * d.offset > d.width * d.offset ? d.width * d.offset : d.height, c /= 100 / d.weight, d.min && c < d.min && (c = d.min), d.max && c > d.max && (c = d.max), d.round && (c = Math.floor(c)), c
    }
}(jQuery);
var Cargo = Cargo || {};
Cargo.Plugins = Cargo.Plugins || {}, Cargo.Plugins.elementResizer = function(a) {
    var b = {
            vars: {
                ticking: !1,
                initialized: !1
            },
            options: {
                cargo_refreshEvents: ["show_index_complete", "pagination_complete", "page_load_complete", "inspector_preview", "page_collection_reset", "direct_link_loaded"],
                generic_refreshEvents: [],
                updateEvents: ["resize", "orientationchange"],
                selectors: ["img", "object", "iframe", "video", ".elementresizer", "[data-elementresizer-child]", ".slideshow", ".audio_component"],
                targets: {},
                minimumHeight: 1,
                minimumWidth: 1,
                centerElements: !0,
                adjustElementsToWindowHeight: !0,
                forceMargin: !1,
                forceVerticalMargin: 40,
                forceHorizontalMargin: 0,
                allowInit: !0
            },
            init: function() {
                function d(a, b, c) {
                    a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
                }
                if (Cargo.Event.trigger("element_resizer_init", c), !b.options.allowInit) return !1;
                var e;
                a.each(b.options.updateEvents, function(a, c) {
                    d(window, c, function() {
                        b.requestTick(), "resize" === c && (clearTimeout(e), e = setTimeout(function() {
                            b.requestTick()
                        }, 100))
                    })
                }), a.each(b.options.generic_refreshEvents, function(a, c) {
                    d(window, c, function() {
                        b.refresh(), b.update()
                    })
                }), a.each(b.options.cargo_refreshEvents, function(a, c) {
                    Cargo.hasOwnProperty("Event") && Cargo.Event.on(c, function() {
                        b.refresh(), b.update()
                    })
                }), Cargo.hasOwnProperty("Event") && Cargo.Event.on("inspector_open", function() {
                    CargoInspector.eventManager.subscribe("style_changed", function(a) {
                        b.update()
                    })
                }), b.vars.initialized = !0, b.refresh(), b.update()
            },
            refresh: function() {
                if (!b.vars.initialized) return !1;
                var c = a("[data-elementresizer]");
                b.options.targets = {}, c.each(function(c, d) {
                    var e = a(d).find(b.options.selectors.join(",")),
                        f = a(d).closest("[data-resize-parent]");
                    0 == f.length && (f = a("body"));
                    var g = [],
                        h = [];
                    e.each(function(c, d) {
                        var e = a(d).closest("[data-columnize]"),
                            d = (d.nodeName, a(d));
                        if ((0 == e.length || e.is("[data-allow-elementresizer]") !== !1) && !(d.closest("[data-no-elementresizer]").length > 0 || d[0].hasAttribute("data-no-elementresizer"))) {
                            var f = d.width(),
                                i = d.height(),
                                j = parseInt(d.attr("width")),
                                k = parseInt(d.attr("height")),
                                l = isNaN(j) ? f : j,
                                m = isNaN(k) ? i : k,
                                n = b.constrain(b.options.minimumHeight, 0, m),
                                o = b.constrain(b.options.minimumWidth, 0, l),
                                p = !1,
                                q = {
                                    element: d,
                                    originalWidth: l,
                                    originalHeight: m,
                                    actualWidth: j,
                                    actualHeight: k,
                                    minimumHeight: n > m ? m : n,
                                    minimumWidth: o > l ? l : o,
                                    ratio: m / l,
                                    nodeName: d[0].nodeName.toLowerCase(),
                                    isSlideshow: p,
                                    isAudioPlayer: d.hasClass("audio_component"),
                                    noResize: d.parent("[data-elementresizer-no-resize]").length > 0 || d[0].hasAttribute("data-elementresizer-no-resize"),
                                    noCentering: d.parent("[data-elementresizer-no-centering]").length > 0 || d[0].hasAttribute("data-elementresizer-no-centering"),
                                    noVerticalResize: d.parent("[data-elementresizer-no-vertical-resize]").length > 0 || d[0].hasAttribute("data-elementresizer-no-vertical-resize"),
                                    prevLeftMargin: 0,
                                    isSoundCloudFrame: -1 !== (d.attr("src") + "").indexOf("soundcloud") && "IFRAME" === d[0].nodeName
                                };
                            p ? h.push(q) : g.push(q)
                        }
                    }), g = g.concat(h);
                    var i = parseInt(a(f).css("paddingLeft")) + parseInt(a(f).css("paddingRight"));
                    isNaN(i) && (i = 0), b.options.targets[c] = {
                        container: a(d),
                        resize_parent: f,
                        children: g,
                        padding: i
                    }
                }), b.update()
            },
            requestTick: function() {
                b.vars.ticking || (requestAnimationFrame(function() {
                    b.update()
                }), b.vars.ticking = !0)
            },
            constrain: function(a, b, c) {
                return a > c ? c : b > a ? b : a
            },
            update: function() {
                var d, e, f, g;
                for (d in b.options.targets) {
                    g = b.options.targets[d];
                    var h = g.container.width(),
                        i = (g.padding, g.resize_parent.width() - b.options.forceHorizontalMargin),
                        j = b.options.adjustElementsToWindowHeight ? document.documentElement.clientHeight - b.options.forceVerticalMargin : 9e9,
                        k = j,
                        l = 1;
                    b.options.adjustElementsToWindowHeight && void 0 !== window.orientation && 0 != window.orientation && (k = document.documentElement.clientWidth - (b.options.forceMargin === !1 ? 40 : b.options.forceMargin));
                    for (e in g.children) {
                        var m = i;
                        if (f = g.children[e], !f.noResize) {
                            var n = a(f.element).closest("[grid-col]");
                            n.length > 0 && (m = n.width() - b.options.forceHorizontalMargin), k = f.noVerticalResize ? 9e9 : j;
                            var o = f.actualWidth,
                                p = f.actualHeight,
                                q = parseInt(f.element.attr("data-scale")) / 100 || 1;
                            m *= q, horizontalDelta = b.constrain(m - o, 1, 9e9), verticalDelta = b.constrain(k - p, 1, 9e9), l = [m / f.actualWidth, k / f.actualHeight], l = Math.min(l[0], l[1]), p = b.constrain(p * l, -9e9, f.originalHeight), o = b.constrain(o * l, -9e9, f.originalWidth), (p <= f.minimumHeight || o <= f.minimumWidth) && (l = [f.minimumWidth / o, f.minimumHeight / p], l = Math.max(l[0], l[1]), p *= l, o *= l), f.actualWidth == o && f.actualHeight == p || isNaN(o) || isNaN(p) || (f.actualWidth = o, f.actualHeight = p, f.element.add("object" === f.nodeName ? f.element.find("embed") : "").css({
                                width: f.actualWidth + "px",
                                height: f.actualHeight + "px"
                            }))
                        }
                        b.options.centerElements && !f.noCentering && b.setLeftMargin(f, h), f.isSlideshow && void 0 !== f.isSlideshow && (f.actualWidth = f.isSlideshow.resizeContainer())
                    }
                }
                b.vars.ticking = !1, Cargo.Event.trigger("elementresizer_update_complete", c)
            },
            setLeftMargin: function(a, b, c) {
                var d;
                d = a.isSoundCloudFrame ? (b - a.element.width()) / 2 : (b - a.actualWidth) / 2, isNaN(d) || (a.prevLeftMargin !== d && a.element.css("marginLeft", d), a.prevLeftMargin = d)
            }
        },
        c = {
            options: b.options,
            init: b.init,
            refresh: b.refresh,
            update: b.update,
            setOptions: function(c) {
                a.extend(b.options, c), b.options.forceMargin !== !1 && (b.options.forceHorizontalMargin = b.options.forceMargin, b.options.forceVerticalMargin = b.options.forceMargin), b.options.allowInit && b.vars.initialized && b.update()
            },
            targets: function() {
                return b.options.targets
            }
        };
    return a(function() {
        b.init()
    }), c
}(jQuery);
var requirejs, require, define;
! function(global) {
    function isFunction(a) {
        return "[object Function]" === ostring.call(a)
    }

    function isArray(a) {
        return "[object Array]" === ostring.call(a)
    }

    function each(a, b) {
        if (a) {
            var c;
            for (c = 0; c < a.length && (!a[c] || !b(a[c], c, a)); c += 1);
        }
    }

    function eachReverse(a, b) {
        if (a) {
            var c;
            for (c = a.length - 1; c > -1 && (!a[c] || !b(a[c], c, a)); c -= 1);
        }
    }

    function hasProp(a, b) {
        return hasOwn.call(a, b)
    }

    function getOwn(a, b) {
        return hasProp(a, b) && a[b]
    }

    function eachProp(a, b) {
        var c;
        for (c in a)
            if (hasProp(a, c) && b(a[c], c)) break
    }

    function mixin(a, b, c, d) {
        return b && eachProp(b, function(b, e) {
            !c && hasProp(a, e) || (!d || "object" != typeof b || !b || isArray(b) || isFunction(b) || b instanceof RegExp ? a[e] = b : (a[e] || (a[e] = {}), mixin(a[e], b, c, d)))
        }), a
    }

    function bind(a, b) {
        return function() {
            return b.apply(a, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function defaultOnError(a) {
        throw a
    }

    function getGlobal(a) {
        if (!a) return a;
        var b = global;
        return each(a.split("."), function(a) {
            b = b[a]
        }), b
    }

    function makeError(a, b, c, d) {
        var e = new Error(b + "\nhttp://requirejs.org/docs/errors.html#" + a);
        return e.requireType = a, e.requireModules = d, c && (e.originalError = c), e
    }

    function newContext(a) {
        function b(a) {
            var b, c;
            for (b = 0; b < a.length; b++)
                if (c = a[b], "." === c) a.splice(b, 1), b -= 1;
                else if (".." === c) {
                if (0 === b || 1 === b && ".." === a[2] || ".." === a[b - 1]) continue;
                b > 0 && (a.splice(b - 1, 2), b -= 2)
            }
        }

        function c(a, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q = c && c.split("/"),
                r = x.map,
                s = r && r["*"];
            if (a && (a = a.split("/"), k = a.length - 1, x.nodeIdCompat && jsSuffixRegExp.test(a[k]) && (a[k] = a[k].replace(jsSuffixRegExp, "")), "." === a[0].charAt(0) && q && (p = q.slice(0, q.length - 1), a = p.concat(a)), b(a), a = a.join("/")), d && r && (q || s)) {
                g = a.split("/");
                a: for (h = g.length; h > 0; h -= 1) {
                    if (j = g.slice(0, h).join("/"), q)
                        for (i = q.length; i > 0; i -= 1)
                            if (f = getOwn(r, q.slice(0, i).join("/")), f && (f = getOwn(f, j))) {
                                l = f, m = h;
                                break a
                            }!n && s && getOwn(s, j) && (n = getOwn(s, j), o = h)
                }!l && n && (l = n, m = o), l && (g.splice(0, m, l), a = g.join("/"))
            }
            return e = getOwn(x.pkgs, a), e ? e : a
        }

        function d(a) {
            isBrowser && each(scripts(), function(b) {
                return b.getAttribute("data-requiremodule") === a && b.getAttribute("data-requirecontext") === u.contextName ? (b.parentNode.removeChild(b), !0) : void 0
            })
        }

        function e(a) {
            var b = getOwn(x.paths, a);
            return b && isArray(b) && b.length > 1 ? (b.shift(), u.require.undef(a), u.makeRequire(null, {
                skipMap: !0
            })([a]), !0) : void 0
        }

        function f(a) {
            var b, c = a ? a.indexOf("!") : -1;
            return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a]
        }

        function g(a, b, d, e) {
            var g, h, i, j, k = null,
                l = b ? b.name : null,
                m = a,
                n = !0,
                o = "";
            return a || (n = !1, a = "_@r" + (F += 1)), j = f(a), k = j[0], a = j[1], k && (k = c(k, l, e), h = getOwn(C, k)), a && (k ? o = h && h.normalize ? h.normalize(a, function(a) {
                return c(a, l, e)
            }) : -1 === a.indexOf("!") ? c(a, l, e) : a : (o = c(a, l, e), j = f(o), k = j[0], o = j[1], d = !0, g = u.nameToUrl(o))), i = !k || h || d ? "" : "_unnormalized" + (G += 1), {
                prefix: k,
                name: o,
                parentMap: b,
                unnormalized: !!i,
                url: g,
                originalName: m,
                isDefine: n,
                id: (k ? k + "!" + o : o) + i
            }
        }

        function h(a) {
            var b = a.id,
                c = getOwn(y, b);
            return c || (c = y[b] = new u.Module(a)), c
        }

        function i(a, b, c) {
            var d = a.id,
                e = getOwn(y, d);
            !hasProp(C, d) || e && !e.defineEmitComplete ? (e = h(a), e.error && "error" === b ? c(e.error) : e.on(b, c)) : "defined" === b && c(C[d])
        }

        function j(a, b) {
            var c = a.requireModules,
                d = !1;
            b ? b(a) : (each(c, function(b) {
                var c = getOwn(y, b);
                c && (c.error = a, c.events.error && (d = !0, c.emit("error", a)))
            }), d || req.onError(a))
        }

        function k() {
            globalDefQueue.length && (apsp.apply(B, [B.length, 0].concat(globalDefQueue)), globalDefQueue = [])
        }

        function l(a) {
            delete y[a], delete z[a]
        }

        function m(a, b, c) {
            var d = a.map.id;
            a.error ? a.emit("error", a.error) : (b[d] = !0, each(a.depMaps, function(d, e) {
                var f = d.id,
                    g = getOwn(y, f);
                !g || a.depMatched[e] || c[f] || (getOwn(b, f) ? (a.defineDep(e, C[f]), a.check()) : m(g, b, c))
            }), c[d] = !0)
        }

        function n() {
            var a, b, c = 1e3 * x.waitSeconds,
                f = c && u.startTime + c < (new Date).getTime(),
                g = [],
                h = [],
                i = !1,
                k = !0;
            if (!s) {
                if (s = !0, eachProp(z, function(a) {
                        var c = a.map,
                            j = c.id;
                        if (a.enabled && (c.isDefine || h.push(a), !a.error))
                            if (!a.inited && f) e(j) ? (b = !0, i = !0) : (g.push(j), d(j));
                            else if (!a.inited && a.fetched && c.isDefine && (i = !0, !c.prefix)) return k = !1
                    }), f && g.length) return a = makeError("timeout", "Load timeout for modules: " + g, null, g), a.contextName = u.contextName, j(a);
                k && each(h, function(a) {
                    m(a, {}, {})
                }), f && !b || !i || !isBrowser && !isWebWorker || w || (w = setTimeout(function() {
                    w = 0, n()
                }, 50)), s = !1
            }
        }

        function o(a) {
            hasProp(C, a[0]) || h(g(a[0], null, !0)).init(a[1], a[2])
        }

        function p(a, b, c, d) {
            a.detachEvent && !isOpera ? d && a.detachEvent(d, b) : a.removeEventListener(c, b, !1)
        }

        function q(a) {
            var b = a.currentTarget || a.srcElement;
            return p(b, u.onScriptLoad, "load", "onreadystatechange"), p(b, u.onScriptError, "error"), {
                node: b,
                id: b && b.getAttribute("data-requiremodule")
            }
        }

        function r() {
            var a;
            for (k(); B.length;) {
                if (a = B.shift(), null === a[0]) return j(makeError("mismatch", "Mismatched anonymous define() module: " + a[a.length - 1]));
                o(a)
            }
        }
        var s, t, u, v, w, x = {
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            y = {},
            z = {},
            A = {},
            B = [],
            C = {},
            D = {},
            E = {},
            F = 1,
            G = 1;
        return v = {
            require: function(a) {
                return a.require ? a.require : a.require = u.makeRequire(a.map)
            },
            exports: function(a) {
                return a.usingExports = !0, a.map.isDefine ? a.exports ? C[a.map.id] = a.exports : a.exports = C[a.map.id] = {} : void 0;
            },
            module: function(a) {
                return a.module ? a.module : a.module = {
                    id: a.map.id,
                    uri: a.map.url,
                    config: function() {
                        return getOwn(x.config, a.map.id) || {}
                    },
                    exports: a.exports || (a.exports = {})
                }
            }
        }, t = function(a) {
            this.events = getOwn(A, a.id) || {}, this.map = a, this.shim = getOwn(x.shim, a.id), this.depExports = [], this.depMaps = [], this.depMatched = [], this.pluginMaps = {}, this.depCount = 0
        }, t.prototype = {
            init: function(a, b, c, d) {
                d = d || {}, this.inited || (this.factory = b, c ? this.on("error", c) : this.events.error && (c = bind(this, function(a) {
                    this.emit("error", a)
                })), this.depMaps = a && a.slice(0), this.errback = c, this.inited = !0, this.ignore = d.ignore, d.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function(a, b) {
                this.depMatched[a] || (this.depMatched[a] = !0, this.depCount -= 1, this.depExports[a] = b)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0, u.startTime = (new Date).getTime();
                    var a = this.map;
                    return this.shim ? void u.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], bind(this, function() {
                        return a.prefix ? this.callPlugin() : this.load()
                    })) : a.prefix ? this.callPlugin() : this.load()
                }
            },
            load: function() {
                var a = this.map.url;
                D[a] || (D[a] = !0, u.load(this.map.id, a))
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var a, b, c = this.map.id,
                        d = this.depExports,
                        e = this.exports,
                        f = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(f)) {
                                    if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                                        e = u.execCb(c, f, d, e)
                                    } catch (g) {
                                        a = g
                                    } else e = u.execCb(c, f, d, e);
                                    if (this.map.isDefine && void 0 === e && (b = this.module, b ? e = b.exports : this.usingExports && (e = this.exports)), a) return a.requireMap = this.map, a.requireModules = this.map.isDefine ? [this.map.id] : null, a.requireType = this.map.isDefine ? "define" : "require", j(this.error = a)
                                } else e = f;
                                this.exports = e, this.map.isDefine && !this.ignore && (C[c] = e, req.onResourceLoad && req.onResourceLoad(u, this.map, this.depMaps)), l(c), this.defined = !0
                            }
                            this.defining = !1, this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            },
            callPlugin: function() {
                var a = this.map,
                    b = a.id,
                    d = g(a.prefix);
                this.depMaps.push(d), i(d, "defined", bind(this, function(d) {
                    var e, f, k, m = getOwn(E, this.map.id),
                        n = this.map.name,
                        o = this.map.parentMap ? this.map.parentMap.name : null,
                        p = u.makeRequire(a.parentMap, {
                            enableBuildCallback: !0
                        });
                    return this.map.unnormalized ? (d.normalize && (n = d.normalize(n, function(a) {
                        return c(a, o, !0)
                    }) || ""), f = g(a.prefix + "!" + n, this.map.parentMap), i(f, "defined", bind(this, function(a) {
                        this.init([], function() {
                            return a
                        }, null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })), k = getOwn(y, f.id), void(k && (this.depMaps.push(f), this.events.error && k.on("error", bind(this, function(a) {
                        this.emit("error", a)
                    })), k.enable()))) : m ? (this.map.url = u.nameToUrl(m), void this.load()) : (e = bind(this, function(a) {
                        this.init([], function() {
                            return a
                        }, null, {
                            enabled: !0
                        })
                    }), e.error = bind(this, function(a) {
                        this.inited = !0, this.error = a, a.requireModules = [b], eachProp(y, function(a) {
                            0 === a.map.id.indexOf(b + "_unnormalized") && l(a.map.id)
                        }), j(a)
                    }), e.fromText = bind(this, function(c, d) {
                        var f = a.name,
                            i = g(f),
                            k = useInteractive;
                        d && (c = d), k && (useInteractive = !1), h(i), hasProp(x.config, b) && (x.config[f] = x.config[b]);
                        try {
                            req.exec(c)
                        } catch (l) {
                            return j(makeError("fromtexteval", "fromText eval for " + b + " failed: " + l, l, [b]))
                        }
                        k && (useInteractive = !0), this.depMaps.push(i), u.completeLoad(f), p([f], e)
                    }), void d.load(a.name, p, e, x))
                })), u.enable(d, this), this.pluginMaps[d.id] = d
            },
            enable: function() {
                z[this.map.id] = this, this.enabled = !0, this.enabling = !0, each(this.depMaps, bind(this, function(a, b) {
                    var c, d, e;
                    if ("string" == typeof a) {
                        if (a = g(a, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[b] = a, e = getOwn(v, a.id)) return void(this.depExports[b] = e(this));
                        this.depCount += 1, i(a, "defined", bind(this, function(a) {
                            this.defineDep(b, a), this.check()
                        })), this.errback ? i(a, "error", bind(this, this.errback)) : this.events.error && i(a, "error", bind(this, function(a) {
                            this.emit("error", a)
                        }))
                    }
                    c = a.id, d = y[c], hasProp(v, c) || !d || d.enabled || u.enable(a, this)
                })), eachProp(this.pluginMaps, bind(this, function(a) {
                    var b = getOwn(y, a.id);
                    b && !b.enabled && u.enable(a, this)
                })), this.enabling = !1, this.check()
            },
            on: function(a, b) {
                var c = this.events[a];
                c || (c = this.events[a] = []), c.push(b)
            },
            emit: function(a, b) {
                each(this.events[a], function(a) {
                    a(b)
                }), "error" === a && delete this.events[a]
            }
        }, u = {
            config: x,
            contextName: a,
            registry: y,
            defined: C,
            urlFetched: D,
            defQueue: B,
            Module: t,
            makeModuleMap: g,
            nextTick: req.nextTick,
            onError: j,
            configure: function(a) {
                a.baseUrl && "/" !== a.baseUrl.charAt(a.baseUrl.length - 1) && (a.baseUrl += "/");
                var b = x.shim,
                    c = {
                        paths: !0,
                        bundles: !0,
                        config: !0,
                        map: !0
                    };
                eachProp(a, function(a, b) {
                    c[b] ? (x[b] || (x[b] = {}), mixin(x[b], a, !0, !0)) : x[b] = a
                }), a.bundles && eachProp(a.bundles, function(a, b) {
                    each(a, function(a) {
                        a !== b && (E[a] = b)
                    })
                }), a.shim && (eachProp(a.shim, function(a, c) {
                    isArray(a) && (a = {
                        deps: a
                    }), !a.exports && !a.init || a.exportsFn || (a.exportsFn = u.makeShimExports(a)), b[c] = a
                }), x.shim = b), a.packages && each(a.packages, function(a) {
                    var b, c;
                    a = "string" == typeof a ? {
                        name: a
                    } : a, c = a.name, b = a.location, b && (x.paths[c] = a.location), x.pkgs[c] = a.name + "/" + (a.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                }), eachProp(y, function(a, b) {
                    a.inited || a.map.unnormalized || (a.map = g(b))
                }), (a.deps || a.callback) && u.require(a.deps || [], a.callback)
            },
            makeShimExports: function(a) {
                function b() {
                    var b;
                    return a.init && (b = a.init.apply(global, arguments)), b || a.exports && getGlobal(a.exports)
                }
                return b
            },
            makeRequire: function(b, e) {
                function f(c, d, i) {
                    var k, l, m;
                    return e.enableBuildCallback && d && isFunction(d) && (d.__requireJsBuild = !0), "string" == typeof c ? isFunction(d) ? j(makeError("requireargs", "Invalid require call"), i) : b && hasProp(v, c) ? v[c](y[b.id]) : req.get ? req.get(u, c, b, f) : (l = g(c, b, !1, !0), k = l.id, hasProp(C, k) ? C[k] : j(makeError("notloaded", 'Module name "' + k + '" has not been loaded yet for context: ' + a + (b ? "" : ". Use require([])")))) : (r(), u.nextTick(function() {
                        r(), m = h(g(null, b)), m.skipMap = e.skipMap, m.init(c, d, i, {
                            enabled: !0
                        }), n()
                    }), f)
                }
                return e = e || {}, mixin(f, {
                    isBrowser: isBrowser,
                    toUrl: function(a) {
                        var d, e = a.lastIndexOf("."),
                            f = a.split("/")[0],
                            g = "." === f || ".." === f;
                        return -1 !== e && (!g || e > 1) && (d = a.substring(e, a.length), a = a.substring(0, e)), u.nameToUrl(c(a, b && b.id, !0), d, !0)
                    },
                    defined: function(a) {
                        return hasProp(C, g(a, b, !1, !0).id)
                    },
                    specified: function(a) {
                        return a = g(a, b, !1, !0).id, hasProp(C, a) || hasProp(y, a)
                    }
                }), b || (f.undef = function(a) {
                    k();
                    var c = g(a, b, !0),
                        e = getOwn(y, a);
                    d(a), delete C[a], delete D[c.url], delete A[a], eachReverse(B, function(b, c) {
                        b[0] === a && B.splice(c, 1)
                    }), e && (e.events.defined && (A[a] = e.events), l(a))
                }), f
            },
            enable: function(a) {
                var b = getOwn(y, a.id);
                b && h(a).enable()
            },
            completeLoad: function(a) {
                var b, c, d, f = getOwn(x.shim, a) || {},
                    g = f.exports;
                for (k(); B.length;) {
                    if (c = B.shift(), null === c[0]) {
                        if (c[0] = a, b) break;
                        b = !0
                    } else c[0] === a && (b = !0);
                    o(c)
                }
                if (d = getOwn(y, a), !b && !hasProp(C, a) && d && !d.inited) {
                    if (!(!x.enforceDefine || g && getGlobal(g))) return e(a) ? void 0 : j(makeError("nodefine", "No define call for " + a, null, [a]));
                    o([a, f.deps || [], f.exportsFn])
                }
                n()
            },
            nameToUrl: function(a, b, c) {
                var d, e, f, g, h, i, j, k = getOwn(x.pkgs, a);
                if (k && (a = k), j = getOwn(E, a)) return u.nameToUrl(j, b, c);
                if (req.jsExtRegExp.test(a)) h = a + (b || "");
                else {
                    for (d = x.paths, e = a.split("/"), f = e.length; f > 0; f -= 1)
                        if (g = e.slice(0, f).join("/"), i = getOwn(d, g)) {
                            isArray(i) && (i = i[0]), e.splice(0, f, i);
                            break
                        }
                    h = e.join("/"), h += b || (/^data\:|\?/.test(h) || c ? "" : ".js"), h = ("/" === h.charAt(0) || h.match(/^[\w\+\.\-]+:/) ? "" : x.baseUrl) + h
                }
                return x.urlArgs ? h + ((-1 === h.indexOf("?") ? "?" : "&") + x.urlArgs) : h
            },
            load: function(a, b) {
                req.load(u, a, b)
            },
            execCb: function(a, b, c, d) {
                return b.apply(d, c)
            },
            onScriptLoad: function(a) {
                if ("load" === a.type || readyRegExp.test((a.currentTarget || a.srcElement).readyState)) {
                    interactiveScript = null;
                    var b = q(a);
                    u.completeLoad(b.id)
                }
            },
            onScriptError: function(a) {
                var b = q(a);
                return e(b.id) ? void 0 : j(makeError("scripterror", "Script error for: " + b.id, a, [b.id]))
            }
        }, u.require = u.makeRequire(), u
    }

    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript : (eachReverse(scripts(), function(a) {
            return "interactive" === a.readyState ? interactiveScript = a : void 0
        }), interactiveScript)
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.17",
        commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        ap = Array.prototype,
        apsp = ap.splice,
        isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
        isWebWorker = !isBrowser && "undefined" != typeof importScripts,
        readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_",
        isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (isFunction(requirejs)) return;
            cfg = requirejs, requirejs = void 0
        }
        "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0), req = requirejs = function(a, b, c, d) {
            var e, f, g = defContextName;
            return isArray(a) || "string" == typeof a || (f = a, isArray(b) ? (a = b, b = c, c = d) : a = []), f && f.context && (g = f.context), e = getOwn(contexts, g), e || (e = contexts[g] = req.s.newContext(g)), f && e.configure(f), e.require(a, b, c)
        }, req.config = function(a) {
            return req(a)
        }, req.nextTick = "undefined" != typeof setTimeout ? function(a) {
            setTimeout(a, 4)
        } : function(a) {
            a()
        }, require || (require = req), req.version = version, req.jsExtRegExp = /^\/|:|\?|\.js$/, req.isBrowser = isBrowser, s = req.s = {
            contexts: contexts,
            newContext: newContext
        }, req({}), each(["toUrl", "undef", "defined", "specified"], function(a) {
            req[a] = function() {
                var b = contexts[defContextName];
                return b.require[a].apply(b, arguments)
            }
        }), isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)), req.onError = defaultOnError, req.createNode = function(a, b, c) {
            var d = a.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return d.type = a.scriptType || "text/javascript", d.charset = "utf-8", d.async = !0, d
        }, req.load = function(a, b, c) {
            var d, e = a && a.config || {};
            if (isBrowser) return d = req.createNode(e, b, c), d.setAttribute("data-requirecontext", a.contextName), d.setAttribute("data-requiremodule", b), !d.attachEvent || d.attachEvent.toString && d.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (d.addEventListener("load", a.onScriptLoad, !1), d.addEventListener("error", a.onScriptError, !1)) : (useInteractive = !0, d.attachEvent("onreadystatechange", a.onScriptLoad)), d.src = c, currentlyAddingScript = d, baseElement ? head.insertBefore(d, baseElement) : head.appendChild(d), currentlyAddingScript = null, d;
            if (isWebWorker) try {
                importScripts(c), a.completeLoad(b)
            } catch (f) {
                a.onError(makeError("importscripts", "importScripts failed for " + b + " at " + c, f, [b]))
            }
        }, isBrowser && !cfg.skipDataMain && eachReverse(scripts(), function(a) {
            return head || (head = a.parentNode), dataMain = a.getAttribute("data-main"), dataMain ? (mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/" : "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0) : void 0
        }), define = function(a, b, c) {
            var d, e;
            "string" != typeof a && (c = b, b = a, a = null), isArray(b) || (c = b, b = null), !b && isFunction(c) && (b = [], c.length && (c.toString().replace(commentRegExp, "").replace(cjsRequireRegExp, function(a, c) {
                b.push(c)
            }), b = (1 === c.length ? ["require"] : ["require", "exports", "module"]).concat(b))), useInteractive && (d = currentlyAddingScript || getInteractiveScript(), d && (a || (a = d.getAttribute("data-requiremodule")), e = contexts[d.getAttribute("data-requirecontext")])), (e ? e.defQueue : globalDefQueue).push([a, b, c])
        }, define.amd = {
            jQuery: !0
        }, req.exec = function(text) {
            return eval(text)
        }, req(cfg)
    }
}(this);
//# sourceMappingURL=apipackage.min.js.map