!function (t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.animateCSSGrid = n() : t.animateCSSGrid = n()
}(window, (function () {
    return function (t) {
        var n = {};

        function r(e) {
            if (n[e]) return n[e].exports;
            var o = n[e] = {i: e, l: !1, exports: {}};
            return t[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }

        return r.m = t, r.c = n, r.d = function (t, n, e) {
            r.o(t, n) || Object.defineProperty(t, n, {enumerable: !0, get: e})
        }, r.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, r.t = function (t, n) {
            if (1 & n && (t = r(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var e = Object.create(null);
            if (r.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t) for (var o in t) r.d(e, o, function (n) {
                return t[n]
            }.bind(null, o));
            return e
        }, r.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return r.d(n, "a", n), n
        }, r.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, r.p = "", r(r.s = 14)
    }([function (t, n) {
        t.exports = function (t) {
            var n = typeof t;
            return null != t && ("object" == n || "function" == n)
        }
    }, function (t, n, r) {
        var e = r(4), o = r(0), i = "Expected a function";
        t.exports = function (t, n, r) {
            var u = !0, a = !0;
            if ("function" != typeof t) throw new TypeError(i);
            return o(r) && (u = "leading" in r ? !!r.leading : u, a = "trailing" in r ? !!r.trailing : a), e(t, n, {
                leading: u,
                maxWait: n,
                trailing: a
            })
        }
    }, function (t, n, r) {
        var e = r(6), o = "object" == typeof self && self && self.Object === Object && self,
            i = e || o || Function("return this")();
        t.exports = i
    }, function (t, n, r) {
        var e = r(2).Symbol;
        t.exports = e
    }, function (t, n, r) {
        var e = r(0), o = r(5), i = r(8), u = "Expected a function", a = Math.max, c = Math.min;
        t.exports = function (t, n, r) {
            var f, s, p, l, d, v, h = 0, m = !1, g = !1, y = !0;
            if ("function" != typeof t) throw new TypeError(u);

            function b(n) {
                var r = f, e = s;
                return f = s = void 0, h = n, l = t.apply(e, r)
            }

            function w(t) {
                var r = t - v;
                return void 0 === v || r >= n || r < 0 || g && t - h >= p
            }

            function O() {
                var t = o();
                if (w(t)) return x(t);
                d = setTimeout(O, function (t) {
                    var r = n - (t - v);
                    return g ? c(r, p - (t - h)) : r
                }(t))
            }

            function x(t) {
                return d = void 0, y && f ? b(t) : (f = s = void 0, l)
            }

            function j() {
                var t = o(), r = w(t);
                if (f = arguments, s = this, v = t, r) {
                    if (void 0 === d) return function (t) {
                        return h = t, d = setTimeout(O, n), m ? b(t) : l
                    }(v);
                    if (g) return clearTimeout(d), d = setTimeout(O, n), b(v)
                }
                return void 0 === d && (d = setTimeout(O, n)), l
            }

            return n = i(n) || 0, e(r) && (m = !!r.leading, p = (g = "maxWait" in r) ? a(i(r.maxWait) || 0, n) : p, y = "trailing" in r ? !!r.trailing : y), j.cancel = function () {
                void 0 !== d && clearTimeout(d), h = 0, f = v = s = d = void 0
            }, j.flush = function () {
                return void 0 === d ? l : x(o())
            }, j
        }
    }, function (t, n, r) {
        var e = r(2);
        t.exports = function () {
            return e.Date.now()
        }
    }, function (t, n, r) {
        (function (n) {
            var r = "object" == typeof n && n && n.Object === Object && n;
            t.exports = r
        }).call(this, r(7))
    }, function (t, n) {
        var r;
        r = function () {
            return this
        }();
        try {
            r = r || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (r = window)
        }
        t.exports = r
    }, function (t, n, r) {
        var e = r(0), o = r(9), i = NaN, u = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, c = /^0b[01]+$/i,
            f = /^0o[0-7]+$/i, s = parseInt;
        t.exports = function (t) {
            if ("number" == typeof t) return t;
            if (o(t)) return i;
            if (e(t)) {
                var n = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = e(n) ? n + "" : n
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(u, "");
            var r = c.test(t);
            return r || f.test(t) ? s(t.slice(2), r ? 2 : 8) : a.test(t) ? i : +t
        }
    }, function (t, n, r) {
        var e = r(10), o = r(13), i = "[object Symbol]";
        t.exports = function (t) {
            return "symbol" == typeof t || o(t) && e(t) == i
        }
    }, function (t, n, r) {
        var e = r(3), o = r(11), i = r(12), u = "[object Null]", a = "[object Undefined]",
            c = e ? e.toStringTag : void 0;
        t.exports = function (t) {
            return null == t ? void 0 === t ? a : u : c && c in Object(t) ? o(t) : i(t)
        }
    }, function (t, n, r) {
        var e = r(3), o = Object.prototype, i = o.hasOwnProperty, u = o.toString, a = e ? e.toStringTag : void 0;
        t.exports = function (t) {
            var n = i.call(t, a), r = t[a];
            try {
                t[a] = void 0;
                var e = !0
            } catch (t) {
            }
            var o = u.call(t);
            return e && (n ? t[a] = r : delete t[a]), o
        }
    }, function (t, n) {
        var r = Object.prototype.toString;
        t.exports = function (t) {
            return r.call(t)
        }
    }, function (t, n) {
        t.exports = function (t) {
            return null != t && "object" == typeof t
        }
    }, function (t, n, r) {
        "use strict";
        r.r(n);
        var e = function (t) {
            return function (n) {
                return 1 - t(1 - n)
            }
        }, o = function (t) {
            return function (n) {
                return n <= .5 ? t(2 * n) / 2 : (2 - t(2 * (1 - n))) / 2
            }
        }, i = function (t) {
            return function (n) {
                return n * n * ((t + 1) * n - t)
            }
        }, u = function (t) {
            var n = i(t);
            return function (t) {
                return (t *= 2) < 1 ? .5 * n(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            }
        }, a = function (t) {
            return function (n) {
                return Math.pow(n, t)
            }
        }(2), c = e(a), f = o(a), s = function (t) {
            return 1 - Math.sin(Math.acos(t))
        }, p = e(s), l = o(p), d = i(1.525), v = e(d), h = o(d), m = u(1.525);
        var g, y = 0, b = "undefined" != typeof window && void 0 !== window.requestAnimationFrame ? function (t) {
            return window.requestAnimationFrame(t)
        } : function (t) {
            var n = Date.now(), r = Math.max(0, 16.7 - (n - y));
            y = n + r, setTimeout((function () {
                return t(y)
            }), r)
        };
        !function (t) {
            t.Read = "read", t.Update = "update", t.Render = "render", t.PostRender = "postRender", t.FixedUpdate = "fixedUpdate"
        }(g || (g = {}));
        var w = 1 / 60 * 1e3, O = !0, x = !1, j = !1, M = {delta: 0, timestamp: 0},
            P = [g.Read, g.Update, g.Render, g.PostRender], C = function (t) {
                return x = t
            }, S = P.reduce((function (t, n) {
                var r, e, o, i, u, a, c, f, s,
                    p = (r = C, e = [], o = [], i = 0, u = !1, a = 0, c = new WeakSet, f = new WeakSet, s = {
                        cancel: function (t) {
                            var n = o.indexOf(t);
                            c.add(t), -1 !== n && o.splice(n, 1)
                        }, process: function (t) {
                            var n, p;
                            if (u = !0, e = (n = [o, e])[0], (o = n[1]).length = 0, i = e.length) for (a = 0; a < i; a++) (p = e[a])(t), !0 !== f.has(p) || c.has(p) || (s.schedule(p), r(!0));
                            u = !1
                        }, schedule: function (t, n, r) {
                            var a = r && u, c = a ? e : o;
                            n && f.add(t), -1 === c.indexOf(t) && (c.push(t), a && (i = e.length))
                        }
                    });
                return t.sync[n] = function (t, n, r) {
                    return void 0 === n && (n = !1), void 0 === r && (r = !1), x || k(), p.schedule(t, n, r), t
                }, t.cancelSync[n] = function (t) {
                    return p.cancel(t)
                }, t.steps[n] = p, t
            }), {steps: {}, sync: {}, cancelSync: {}}), A = S.steps, E = S.sync, T = S.cancelSync, X = function (t) {
                return A[t].process(M)
            }, Y = function (t) {
                x = !1, M.delta = O ? w : Math.max(Math.min(t - M.timestamp, 40), 1), O || (w = M.delta), M.timestamp = t, j = !0, P.forEach(X), j = !1, x && (O = !1, b(Y))
            }, k = function () {
                x = !0, O = !0, j || b(Y)
            }, R = E, _ = r(1), F = r.n(_), I = function (t, n) {
                return (I = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, n) {
                    t.__proto__ = n
                } || function (t, n) {
                    for (var r in n) n.hasOwnProperty(r) && (t[r] = n[r])
                })(t, n)
            };

        function $(t, n) {
            function r() {
                this.constructor = t
            }

            I(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }

        var N = function () {
            return (N = Object.assign || function (t) {
                for (var n, r = 1, e = arguments.length; r < e; r++) for (var o in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                return t
            }).apply(this, arguments)
        };

        function G(t, n) {
            var r = {};
            for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && n.indexOf(e) < 0 && (r[e] = t[e]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (e = Object.getOwnPropertySymbols(t); o < e.length; o++) n.indexOf(e[o]) < 0 && (r[e[o]] = t[e[o]])
            }
            return r
        }

        /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
        var L = function () {
                return (L = Object.assign || function (t) {
                    for (var n, r = 1, e = arguments.length; r < e; r++) for (var o in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                    return t
                }).apply(this, arguments)
            }, B = function (t, n) {
                return function (r) {
                    return Math.max(Math.min(r, n), t)
                }
            }, W = function (t) {
                return function (n) {
                    return "string" == typeof n && 0 === n.indexOf(t)
                }
            }, q = function (t) {
                return t % 1 ? Number(t.toFixed(5)) : t
            }, U = {
                test: function (t) {
                    return "number" == typeof t
                }, parse: parseFloat, transform: function (t) {
                    return t
                }
            }, V = (L({}, U, {transform: B(0, 1)}), L({}, U, {default: 1}), function (t) {
                return {
                    test: function (n) {
                        return "string" == typeof n && n.endsWith(t) && 1 === n.split(" ").length
                    }, parse: parseFloat, transform: function (n) {
                        return "" + n + t
                    }
                }
            }), z = V("deg"), D = V("%"), K = V("px"), H = V("vh"), J = V("vw"), Q = B(0, 255),
            Z = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))$/i,
            tt = function (t) {
                return void 0 !== t.red
            }, nt = function (t) {
                return void 0 !== t.hue
            }, rt = function (t) {
                var n = t.length;
                return function (r) {
                    if ("string" != typeof r) return r;
                    for (var e, o = {}, i = function (t) {
                        return "string" == typeof t ? t.split(/,\s*/) : [t]
                    }((e = r).substring(e.indexOf("(") + 1, e.lastIndexOf(")"))), u = 0; u < n; u++) o[t[u]] = void 0 !== i[u] ? parseFloat(i[u]) : 1;
                    return o
                }
            }, et = L({}, U, {
                transform: function (t) {
                    return Math.round(Q(t))
                }
            }), ot = W("rgb"), it = {
                test: function (t) {
                    return "string" == typeof t ? ot(t) : tt(t)
                }, parse: rt(["red", "green", "blue", "alpha"]), transform: function (t) {
                    var n = t.red, r = t.green, e = t.blue, o = t.alpha;
                    return function (t) {
                        var n = t.red, r = t.green, e = t.blue, o = t.alpha;
                        return "rgba(" + n + ", " + r + ", " + e + ", " + (void 0 === o ? 1 : o) + ")"
                    }({red: et.transform(n), green: et.transform(r), blue: et.transform(e), alpha: q(o)})
                }
            }, ut = W("hsl"), at = {
                test: function (t) {
                    return "string" == typeof t ? ut(t) : nt(t)
                }, parse: rt(["hue", "saturation", "lightness", "alpha"]), transform: function (t) {
                    var n = t.hue, r = t.saturation, e = t.lightness, o = t.alpha;
                    return function (t) {
                        var n = t.hue, r = t.saturation, e = t.lightness, o = t.alpha;
                        return "hsla(" + n + ", " + r + ", " + e + ", " + (void 0 === o ? 1 : o) + ")"
                    }({hue: Math.round(n), saturation: D.transform(q(r)), lightness: D.transform(q(e)), alpha: q(o)})
                }
            }, ct = L({}, it, {
                test: W("#"), parse: function (t) {
                    var n = "", r = "", e = "";
                    return t.length > 4 ? (n = t.substr(1, 2), r = t.substr(3, 2), e = t.substr(5, 2)) : (n = t.substr(1, 1), r = t.substr(2, 1), e = t.substr(3, 1), n += n, r += r, e += e), {
                        red: parseInt(n, 16),
                        green: parseInt(r, 16),
                        blue: parseInt(e, 16),
                        alpha: 1
                    }
                }
            }), ft = {
                test: function (t) {
                    return "string" == typeof t && Z.test(t) || it.test(t) || at.test(t) || ct.test(t)
                }, parse: function (t) {
                    return it.test(t) ? it.parse(t) : at.test(t) ? at.parse(t) : ct.test(t) ? ct.parse(t) : t
                }, transform: function (t) {
                    return tt(t) ? it.transform(t) : nt(t) ? at.transform(t) : t
                }
            }, st = /(-)?(\d[\d\.]*)/g,
            pt = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
            lt = function (t) {
                if ("string" != typeof t || !isNaN(t)) return !1;
                var n = 0, r = t.match(st), e = t.match(pt);
                return r && (n += r.length), e && (n += e.length), n > 0
            }, dt = function (t) {
                var n = t, r = [], e = n.match(pt);
                e && (n = n.replace(pt, "${c}"), r.push.apply(r, e.map(ft.parse)));
                var o = n.match(st);
                return o && r.push.apply(r, o.map(U.parse)), r
            }, vt = function (t) {
                var n = t, r = 0, e = t.match(pt), o = e ? e.length : 0;
                if (e) for (var i = 0; i < o; i++) n = n.replace(e[i], "${c}"), r++;
                var u = n.match(st), a = u ? u.length : 0;
                if (u) for (i = 0; i < a; i++) n = n.replace(u[i], "${n}"), r++;
                return function (t) {
                    for (var e = n, i = 0; i < r; i++) e = e.replace(i < o ? "${c}" : "${n}", i < o ? ft.transform(t[i]) : q(t[i]));
                    return e
                }
            };
        var ht = function (t) {
            return "number" == typeof t
        }, mt = function (t) {
            return function (n, r, e) {
                return void 0 !== e ? t(n, r, e) : function (e) {
                    return t(n, r, e)
                }
            }
        }, gt = mt((function (t, n, r) {
            return Math.min(Math.max(r, t), n)
        })), yt = function (t, n, r) {
            var e = n - t;
            return 0 === e ? 1 : (r - t) / e
        }, bt = function (t, n, r) {
            return -r * t + r * n + t
        }, wt = function () {
            return (wt = Object.assign || function (t) {
                for (var n, r = 1, e = arguments.length; r < e; r++) for (var o in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
                return t
            }).apply(this, arguments)
        }, Ot = function (t, n, r) {
            var e = t * t, o = n * n;
            return Math.sqrt(r * (o - e) + e)
        }, xt = [ct, it, at], jt = function (t) {
            return xt.find((function (n) {
                return n.test(t)
            }))
        }, Mt = function (t, n) {
            var r = jt(t), e = jt(n);
            r.transform, e.transform;
            var o = r.parse(t), i = e.parse(n), u = wt({}, o), a = r === at ? bt : Ot;
            return function (t) {
                for (var n in u) "alpha" !== n && (u[n] = a(o[n], i[n], t));
                return u.alpha = bt(o.alpha, i.alpha, t), r.transform(u)
            }
        }, Pt = function (t, n) {
            return function (r) {
                return n(t(r))
            }
        }, Ct = function () {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return t.reduce(Pt)
        }, St = function (t, n) {
            var r = t.slice(), e = r.length, o = t.map((function (t, r) {
                var e = n[r];
                return ht(t) ? function (n) {
                    return bt(t, e, n)
                } : ft.test(t) ? Mt(t, e) : At(t, e)
            }));
            return function (t) {
                for (var n = 0; n < e; n++) r[n] = o[n](t);
                return r
            }
        }, At = function (t, n) {
            var r = vt(t);
            return r(t), vt(n)(t), Ct(St(dt(t), dt(n)), r)
        }, Et = (mt(bt), function (t) {
            return t
        }), Tt = function (t) {
            return void 0 === t && (t = Et), mt((function (n, r, e) {
                var o = r - e, i = -(0 - n + 1) * (0 - t(Math.abs(o)));
                return o <= 0 ? r + i : r - i
            }))
        }, Xt = (Tt(), Tt(Math.sqrt), mt((function (t, n, r) {
            var e = n - t;
            return ((r - t) % e + e) % e + t
        })), gt(0, 1), function (t) {
            return function (n) {
                return 1 - t(1 - n)
            }
        }), Yt = function (t) {
            return t
        }, kt = function (t) {
            return function (n) {
                return Math.pow(n, t)
            }
        }(2), Rt = Xt(kt);
        var _t = function () {
            function t(t) {
                void 0 === t && (t = {}), this.props = t
            }

            return t.prototype.applyMiddleware = function (t) {
                return this.create(N({}, this.props, {middleware: this.props.middleware ? [t].concat(this.props.middleware) : [t]}))
            }, t.prototype.pipe = function () {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var r = 1 === t.length ? t[0] : Ct.apply(void 0, t);
                return this.applyMiddleware((function (t) {
                    return function (n) {
                        return t(r(n))
                    }
                }))
            }, t.prototype.while = function (t) {
                return this.applyMiddleware((function (n, r) {
                    return function (e) {
                        return t(e) ? n(e) : r()
                    }
                }))
            }, t.prototype.filter = function (t) {
                return this.applyMiddleware((function (n) {
                    return function (r) {
                        return t(r) && n(r)
                    }
                }))
            }, t
        }(), Ft = function () {
            return function (t, n) {
                var r = t.middleware, e = t.onComplete, o = this;
                this.isActive = !0, this.update = function (t) {
                    o.observer.update && o.updateObserver(t)
                }, this.complete = function () {
                    o.observer.complete && o.isActive && o.observer.complete(), o.onComplete && o.onComplete(), o.isActive = !1
                }, this.error = function (t) {
                    o.observer.error && o.isActive && o.observer.error(t), o.isActive = !1
                }, this.observer = n, this.updateObserver = function (t) {
                    return n.update(t)
                }, this.onComplete = e, n.update && r && r.length && r.forEach((function (t) {
                    return o.updateObserver = t(o.updateObserver, o.complete)
                }))
            }
        }(), It = function (t, n, r) {
            var e = n.middleware;
            return new Ft({middleware: e, onComplete: r}, "function" == typeof t ? {update: t} : t)
        }, $t = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return $(n, t), n.prototype.create = function (t) {
                return new n(t)
            }, n.prototype.start = function (t) {
                void 0 === t && (t = {});
                var n = !1, r = {
                    stop: function () {
                    }
                }, e = this.props, o = e.init, i = G(e, ["init"]), u = o(It(t, i, (function () {
                    n = !0, r.stop()
                })));
                return r = u ? N({}, r, u) : r, t.registerParent && t.registerParent(r), n && r.stop(), r
            }, n
        }(_t), Nt = function (t) {
            return new $t({init: t})
        }, Gt = function (t) {
            var n = t.getCount, r = t.getFirst, e = t.getOutput, o = t.mapApi, i = t.setProp, u = t.startActions;
            return function (t) {
                return Nt((function (a) {
                    var c = a.update, f = a.complete, s = a.error, p = n(t), l = e(), d = function () {
                        return c(l)
                    }, v = 0, h = u(t, (function (t, n) {
                        var r = !1;
                        return t.start({
                            complete: function () {
                                r || (r = !0, ++v === p && R.update(f))
                            }, error: s, update: function (t) {
                                i(l, n, t), R.update(d, !1, !0)
                            }
                        })
                    }));
                    return Object.keys(r(h)).reduce((function (t, n) {
                        return t[n] = o(h, n), t
                    }), {})
                }))
            }
        }, Lt = Gt({
            getOutput: function () {
                return {}
            }, getCount: function (t) {
                return Object.keys(t).length
            }, getFirst: function (t) {
                return t[Object.keys(t)[0]]
            }, mapApi: function (t, n) {
                return function () {
                    for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
                    return Object.keys(t).reduce((function (e, o) {
                        var i;
                        return t[o][n] && (r[0] && void 0 !== r[0][o] ? e[o] = t[o][n](r[0][o]) : e[o] = (i = t[o])[n].apply(i, r)), e
                    }), {})
                }
            }, setProp: function (t, n, r) {
                return t[n] = r
            }, startActions: function (t, n) {
                return Object.keys(t).reduce((function (r, e) {
                    return r[e] = n(t[e], e), r
                }), {})
            }
        }), Bt = Gt({
            getOutput: function () {
                return []
            }, getCount: function (t) {
                return t.length
            }, getFirst: function (t) {
                return t[0]
            }, mapApi: function (t, n) {
                return function () {
                    for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
                    return t.map((function (t, e) {
                        if (t[n]) return Array.isArray(r[0]) ? t[n](r[0][e]) : t[n].apply(t, r)
                    }))
                }
            }, setProp: function (t, n, r) {
                return t[n] = r
            }, startActions: function (t, n) {
                return t.map((function (t, r) {
                    return n(t, r)
                }))
            }
        }), Wt = function () {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return Bt(t)
        }, qt = [K, D, z, H, J], Ut = function (t) {
            return qt.find((function (n) {
                return n.test(t)
            }))
        }, Vt = function (t, n) {
            return t(n)
        }, zt = function (t, n, r) {
            var e = r[0], o = n[e].map((function (e, o) {
                var i = r.reduce(function (t) {
                    return function (n, r) {
                        return n[r] = n[r][t], n
                    }
                }(o), N({}, n));
                return Zt(e)(t, i)
            }));
            return Wt.apply(void 0, o)
        }, Dt = function (t, n, r) {
            var e = r[0], o = Object.keys(n[e]).reduce((function (o, i) {
                var u = r.reduce(function (t) {
                    return function (n, r) {
                        return n[r] = n[r][t], n
                    }
                }(i), N({}, n));
                return o[i] = Zt(n[e][i])(t, u), o
            }), {});
            return Lt(o)
        }, Kt = function (t, n) {
            var r = n.from, e = n.to, o = G(n, ["from", "to"]), i = Ut(r) || Ut(e), u = i.transform, a = i.parse;
            return t(N({}, o, {from: "string" == typeof r ? a(r) : r, to: "string" == typeof e ? a(e) : e})).pipe(u)
        }, Ht = function (t, n) {
            var r = n.from, e = n.to, o = G(n, ["from", "to"]);
            return t(N({}, o, {from: 0, to: 1})).pipe(Mt(r, e), ft.transform)
        }, Jt = function (t, n) {
            var r = n.from, e = n.to, o = G(n, ["from", "to"]), i = vt(r);
            return i(r), vt(e)(r), t(N({}, o, {from: 0, to: 1})).pipe(St(dt(r), dt(e)), i)
        }, Qt = function (t, n) {
            var r = function (t) {
                var n = Object.keys(t), r = function (n, r) {
                    return void 0 !== n && !t[r](n)
                };
                return {
                    getVectorKeys: function (t) {
                        return n.reduce((function (n, e) {
                            return r(t[e], e) && n.push(e), n
                        }), [])
                    }, testVectorProps: function (t) {
                        return t && n.some((function (n) {
                            return r(t[n], n)
                        }))
                    }
                }
            }(n), e = r.testVectorProps, o = r.getVectorKeys;
            return function (n) {
                if (!e(n)) return t(n);
                var r = o(n), i = n[r[0]];
                return Zt(i)(t, n, r)
            }
        }, Zt = function (t) {
            var n = Vt;
            return "number" == typeof t ? n = Vt : Array.isArray(t) ? n = zt : !function (t) {
                return Boolean(Ut(t))
            }(t) ? ft.test(t) ? n = Ht : lt(t) ? n = Jt : "object" == typeof t && (n = Dt) : n = Kt, n
        }, tn = Qt((function (t) {
            var n = t.from, r = void 0 === n ? 0 : n, e = t.to, o = void 0 === e ? 1 : e, i = t.ease,
                u = void 0 === i ? Yt : i;
            return Nt((function (t) {
                var n = t.update;
                return {
                    seek: function (t) {
                        return n(t)
                    }
                }
            })).pipe(u, (function (t) {
                return bt(r, o, t)
            }))
        }), {
            ease: function (t) {
                return "function" == typeof t
            }, from: U.test, to: U.test
        }), nn = gt(0, 1), rn = function (t) {
            return void 0 === t && (t = {}), Nt((function (n) {
                var r, e = n.update, o = n.complete, i = t.duration, u = void 0 === i ? 300 : i, a = t.ease,
                    c = void 0 === a ? Rt : a, f = t.flip, s = void 0 === f ? 0 : f, p = t.loop,
                    l = void 0 === p ? 0 : p, d = t.yoyo, v = void 0 === d ? 0 : d, h = t.from,
                    m = void 0 === h ? 0 : h, g = t.to, y = void 0 === g ? 1 : g, b = t.elapsed,
                    w = void 0 === b ? 0 : b, O = t.playDirection, x = void 0 === O ? 1 : O, j = t.flipCount,
                    M = void 0 === j ? 0 : j, P = t.yoyoCount, C = void 0 === P ? 0 : P, S = t.loopCount,
                    A = void 0 === S ? 0 : S, E = tn({from: m, to: y, ease: c}).start(e), X = 0, Y = !1,
                    k = function () {
                        return x *= -1
                    }, _ = function () {
                        X = nn(yt(0, u, w)), E.seek(X)
                    }, F = function () {
                        Y = !0, r = R.update((function (t) {
                            var n = t.delta;
                            w += n * x, _(), function () {
                                var t, n = 1 === x ? Y && w >= u : Y && w <= 0;
                                if (!n) return !1;
                                if (n && !l && !s && !v) return !0;
                                var r = !1;
                                return l && A < l ? (w = 0, A++, r = !0) : s && M < s ? (w = u - w, E = tn({
                                    from: m = (t = [y, m])[0],
                                    to: y = t[1],
                                    ease: c
                                }).start(e), M++, r = !0) : v && C < v && (k(), C++, r = !0), !r
                            }() && o && (T.update(r), R.update(o, !1, !0))
                        }), !0)
                    }, I = function () {
                        Y = !1, r && T.update(r)
                    };
                return F(), {
                    isActive: function () {
                        return Y
                    }, getElapsed: function () {
                        return gt(0, u, w)
                    }, getProgress: function () {
                        return X
                    }, stop: function () {
                        I()
                    }, pause: function () {
                        return I(), this
                    }, resume: function () {
                        return Y || F(), this
                    }, seek: function (t) {
                        return w = bt(0, u, t), R.update(_, !1, !0), this
                    }, reverse: function () {
                        return k(), this
                    }
                }
            }))
        }, en = function (t, n, r) {
            return Nt((function (e) {
                var o = e.update, i = n.split(" ").map((function (n) {
                    return t.addEventListener(n, o, r), n
                }));
                return {
                    stop: function () {
                        return i.forEach((function (n) {
                            return t.removeEventListener(n, o, r)
                        }))
                    }
                }
            }))
        }, on = function () {
            return {clientX: 0, clientY: 0, pageX: 0, pageY: 0, x: 0, y: 0}
        }, un = function (t, n) {
            return void 0 === n && (n = {
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                x: 0,
                y: 0
            }), n.clientX = n.x = t.clientX, n.clientY = n.y = t.clientY, n.pageX = t.pageX, n.pageY = t.pageY, n
        }, an = [on()];
        if ("undefined" != typeof document) {
            en(document, "touchstart touchmove", {passive: !0, capture: !0}).start((function (t) {
                var n = t.touches;
                !0;
                var r = n.length;
                an.length = 0;
                for (var e = 0; e < r; e++) {
                    var o = n[e];
                    an.push(un(o))
                }
            }))
        }
        var cn = on();
        if ("undefined" != typeof document) {
            en(document, "mousedown mousemove", !0).start((function (t) {
                !0, un(t, cn)
            }))
        }
        r.d(n, "wrapGrid", (function () {
            return vn
        }));
        var fn = {
            anticipate: m,
            backIn: d,
            backInOut: h,
            backOut: v,
            circIn: s,
            circInOut: l,
            circOut: p,
            easeIn: a,
            easeInOut: f,
            easeOut: c,
            linear: function (t) {
                return t
            }
        }, sn = "animateGridId", pn = function (t) {
            return t ? Array.prototype.slice.call(t) : []
        }, ln = function (t, n) {
            var r = n.getBoundingClientRect(), e = {top: r.top, left: r.left, width: r.width, height: r.height};
            return e.top -= t.top, e.left -= t.left, e.top = Math.max(e.top, 0), e.left = Math.max(e.left, 0), e
        }, dn = function (t, n) {
            var r = n.translateX, e = n.translateY, o = n.scaleX, i = n.scaleY,
                u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = u.immediate,
                c = 0 === r && 0 === e && 1 === o && 1 === i, f = function () {
                    t.style.transform = c ? "" : "translateX(".concat(r, "px) translateY(").concat(e, "px) scaleX(").concat(o, ") scaleY(").concat(i, ")")
                };
            a ? f() : R.render(f);
            var s = t.children[0];
            if (s) {
                var p = function () {
                    s.style.transform = c ? "" : "scaleX(".concat(1 / o, ") scaleY(").concat(1 / i, ")")
                };
                a ? p() : R.render(p)
            }
        }, vn = function (t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = n.duration,
                e = void 0 === r ? 250 : r, o = n.stagger, i = void 0 === o ? 0 : o, u = n.easing,
                a = void 0 === u ? "easeInOut" : u, c = n.onStart, f = void 0 === c ? function () {
                } : c, s = n.onEnd, p = void 0 === s ? function () {
                } : s;
            if (!fn[a]) throw new Error("".concat(a, " is not a valid easing name"));
            var l = !1, d = function (t) {
                l = !0, t(), setTimeout((function () {
                    l = !1
                }), 0)
            }, v = {}, h = function (n) {
                var r = t.getBoundingClientRect();
                pn(n).forEach((function (t) {
                    if ("function" == typeof t.getBoundingClientRect) {
                        if (!t.dataset[sn]) {
                            var n = "".concat(Math.random());
                            t.dataset[sn] = n
                        }
                        var e = t.dataset[sn];
                        v[e] || (v[e] = {});
                        var o = ln(r, t);
                        v[e].rect = o, v[e].gridBoundingClientRect = r
                    }
                }))
            };
            h(t.children);
            var m = F()((function () {
                var n = document.querySelector("body"), r = n && !n.contains(t);
                t && !r || window.removeEventListener("resize", m), h(t.children)
            }), 250);
            window.addEventListener("resize", m);
            var g = F()((function () {
                h(t.children)
            }), 20);
            t.addEventListener("scroll", g);
            var y = function (n) {
                if ("forceGridAnimation" !== n) {
                    if (!n.filter((function (t) {
                        return "class" === t.attributeName || t.addedNodes.length || t.removedNodes.length
                    })).length) return;
                    if (l) return
                }
                var r = t.getBoundingClientRect(), o = pn(t.children);
                o.filter((function (t) {
                    var n = v[t.dataset[sn]];
                    if (n && n.stopTween) return n.stopTween(), delete n.stopTween, !0
                })).forEach((function (t) {
                    t.style.transform = "";
                    var n = t.children[0];
                    n && (n.style.transform = "")
                }));
                var u = o.map((function (t) {
                    return {childCoords: {}, el: t, boundingClientRect: ln(r, t)}
                })).filter((function (t) {
                    var n = t.el, r = t.boundingClientRect, e = v[n.dataset[sn]];
                    return e ? r.top !== e.rect.top || r.left !== e.rect.left || r.width !== e.rect.width || r.height !== e.rect.height : (h([n]), !1)
                }));
                if (u.forEach((function (t) {
                    var n = t.el;
                    if (pn(n.children).length > 1) throw new Error("Make sure every grid item has a single container element surrounding its children")
                })), u.length) {
                    var c = u.map((function (t) {
                        return t.el
                    }));
                    d((function () {
                        return f(c)
                    }));
                    var s = [];
                    u.map((function (t) {
                        var n = t.el.children[0];
                        return n && (t.childCoords = ln(r, n)), t
                    })).forEach((function (t, n) {
                        var r = t.el, o = t.boundingClientRect, u = o.top, c = o.left, f = o.width, p = o.height,
                            l = t.childCoords, d = l.top, m = l.left, g = r.children[0], y = v[r.dataset[sn]], b = {
                                scaleX: y.rect.width / f,
                                scaleY: y.rect.height / p,
                                translateX: y.rect.left - c,
                                translateY: y.rect.top - u
                            };
                        r.style.transformOrigin = "0 0", g && m === c && d === u && (g.style.transformOrigin = "0 0");
                        var w = function () {
                        }, O = new Promise((function (t) {
                            w = t
                        }));
                        s.push(O), dn(r, b, {immediate: !0});
                        var x = function () {
                            var t = rn({
                                from: b,
                                to: {translateX: 0, translateY: 0, scaleX: 1, scaleY: 1},
                                duration: e,
                                ease: fn[a]
                            }).start({
                                update: function (t) {
                                    dn(r, t), R.postRender((function () {
                                        return h([r])
                                    }))
                                }, complete: w
                            }).stop;
                            y.stopTween = t
                        };
                        if ("number" != typeof i) x(); else {
                            var j = setTimeout((function () {
                                R.update(x)
                            }), i * n);
                            y.stopTween = function () {
                                return clearTimeout(j)
                            }
                        }
                    })), Promise.all(s).then((function () {
                        p(c)
                    }))
                }
            }, b = new MutationObserver(y);
            b.observe(t, {childList: !0, attributes: !0, subtree: !0, attributeFilter: ["class"]});
            var w = function () {
                window.removeEventListener("resize", m), t.removeEventListener("scroll", g), b.disconnect()
            }, O = function () {
                return y("forceGridAnimation")
            };
            return {unwrapGrid: w, forceGridAnimation: O}
        }
    }])
}));
//# sourceMappingURL=main.js.map