
(() => {
    var Jb = Object.create;
    var on = Object.defineProperty;
    var e_ = Object.getOwnPropertyDescriptor;
    var t_ = Object.getOwnPropertyNames;
    var r_ = Object.getPrototypeOf,
        n_ = Object.prototype.hasOwnProperty;
    var he = (e, t) => () => (e && (t = e(e = 0)), t);
    var c = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports),
        De = (e, t) => {
            for (var r in t) on(e, r, {
                get: t[r],
                enumerable: !0
            })
        },
        Fs = (e, t, r, n) => {
            if (t && typeof t == "object" || typeof t == "function")
                for (let i of t_(t)) !n_.call(e, i) && i !== r && on(e, i, {
                    get: () => t[i],
                    enumerable: !(n = e_(t, i)) || n.enumerable
                });
            return e
        };
    var le = (e, t, r) => (r = e != null ? Jb(r_(e)) : {}, Fs(t || !e || !e.__esModule ? on(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e)),
        rt = e => Fs(on({}, "__esModule", {
            value: !0
        }), e);
    var Ni = c(() => {
        "use strict";
        window.tram = function (e) {
            function t(f, T) {
                var O = new m.Bare;
                return O.init(f, T)
            }

            function r(f) {
                return f.replace(/[A-Z]/g, function (T) {
                    return "-" + T.toLowerCase()
                })
            }

            function n(f) {
                var T = parseInt(f.slice(1), 16),
                    O = T >> 16 & 255,
                    C = T >> 8 & 255,
                    x = 255 & T;
                return [O, C, x]
            }

            function i(f, T, O) {
                return "#" + (1 << 24 | f << 16 | T << 8 | O).toString(16).slice(1)
            }

            function o() { }

            function a(f, T) {
                l("Type warning: Expected: [" + f + "] Got: [" + typeof T + "] " + T)
            }

            function s(f, T, O) {
                l("Units do not match [" + f + "]: " + T + ", " + O)
            }

            function u(f, T, O) {
                if (T !== void 0 && (O = T), f === void 0) return O;
                var C = O;
                return We.test(f) || !Fe.test(f) ? C = parseInt(f, 10) : Fe.test(f) && (C = 1e3 * parseFloat(f)), 0 > C && (C = 0), C === C ? C : O
            }

            function l(f) {
                se.debug && window && window.console.warn(f)
            }

            function h(f) {
                for (var T = -1, O = f ? f.length : 0, C = []; ++T < O;) {
                    var x = f[T];
                    x && C.push(x)
                }
                return C
            }
            var d = function (f, T, O) {
                function C(oe) {
                    return typeof oe == "object"
                }

                function x(oe) {
                    return typeof oe == "function"
                }

                function R() { }

                function J(oe, ge) {
                    function H() {
                        var Re = new ae;
                        return x(Re.init) && Re.init.apply(Re, arguments), Re
                    }

                    function ae() { }
                    ge === O && (ge = oe, oe = Object), H.Bare = ae;
                    var ue, _e = R[f] = oe[f],
                        tt = ae[f] = H[f] = new R;
                    return tt.constructor = H, H.mixin = function (Re) {
                        return ae[f] = H[f] = J(H, Re)[f], H
                    }, H.open = function (Re) {
                        if (ue = {}, x(Re) ? ue = Re.call(H, tt, _e, H, oe) : C(Re) && (ue = Re), C(ue))
                            for (var mr in ue) T.call(ue, mr) && (tt[mr] = ue[mr]);
                        return x(tt.init) || (tt.init = oe), H
                    }, H.open(ge)
                }
                return J
            }("prototype", {}.hasOwnProperty),
                v = {
                    ease: ["ease", function (f, T, O, C) {
                        var x = (f /= C) * f,
                            R = x * f;
                        return T + O * (-2.75 * R * x + 11 * x * x + -15.5 * R + 8 * x + .25 * f)
                    }],
                    "ease-in": ["ease-in", function (f, T, O, C) {
                        var x = (f /= C) * f,
                            R = x * f;
                        return T + O * (-1 * R * x + 3 * x * x + -3 * R + 2 * x)
                    }],
                    "ease-out": ["ease-out", function (f, T, O, C) {
                        var x = (f /= C) * f,
                            R = x * f;
                        return T + O * (.3 * R * x + -1.6 * x * x + 2.2 * R + -1.8 * x + 1.9 * f)
                    }],
                    "ease-in-out": ["ease-in-out", function (f, T, O, C) {
                        var x = (f /= C) * f,
                            R = x * f;
                        return T + O * (2 * R * x + -5 * x * x + 2 * R + 2 * x)
                    }],
                    linear: ["linear", function (f, T, O, C) {
                        return O * f / C + T
                    }],
                    "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (f, T, O, C) {
                        return O * (f /= C) * f + T
                    }],
                    "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (f, T, O, C) {
                        return -O * (f /= C) * (f - 2) + T
                    }],
                    "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (f, T, O, C) {
                        return (f /= C / 2) < 1 ? O / 2 * f * f + T : -O / 2 * (--f * (f - 2) - 1) + T
                    }],
                    "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (f, T, O, C) {
                        return O * (f /= C) * f * f + T
                    }],
                    "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (f, T, O, C) {
                        return O * ((f = f / C - 1) * f * f + 1) + T
                    }],
                    "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (f, T, O, C) {
                        return (f /= C / 2) < 1 ? O / 2 * f * f * f + T : O / 2 * ((f -= 2) * f * f + 2) + T
                    }],
                    "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (f, T, O, C) {
                        return O * (f /= C) * f * f * f + T
                    }],
                    "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (f, T, O, C) {
                        return -O * ((f = f / C - 1) * f * f * f - 1) + T
                    }],
                    "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (f, T, O, C) {
                        return (f /= C / 2) < 1 ? O / 2 * f * f * f * f + T : -O / 2 * ((f -= 2) * f * f * f - 2) + T
                    }],
                    "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (f, T, O, C) {
                        return O * (f /= C) * f * f * f * f + T
                    }],
                    "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (f, T, O, C) {
                        return O * ((f = f / C - 1) * f * f * f * f + 1) + T
                    }],
                    "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (f, T, O, C) {
                        return (f /= C / 2) < 1 ? O / 2 * f * f * f * f * f + T : O / 2 * ((f -= 2) * f * f * f * f + 2) + T
                    }],
                    "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (f, T, O, C) {
                        return -O * Math.cos(f / C * (Math.PI / 2)) + O + T
                    }],
                    "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (f, T, O, C) {
                        return O * Math.sin(f / C * (Math.PI / 2)) + T
                    }],
                    "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (f, T, O, C) {
                        return -O / 2 * (Math.cos(Math.PI * f / C) - 1) + T
                    }],
                    "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (f, T, O, C) {
                        return f === 0 ? T : O * Math.pow(2, 10 * (f / C - 1)) + T
                    }],
                    "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (f, T, O, C) {
                        return f === C ? T + O : O * (-Math.pow(2, -10 * f / C) + 1) + T
                    }],
                    "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (f, T, O, C) {
                        return f === 0 ? T : f === C ? T + O : (f /= C / 2) < 1 ? O / 2 * Math.pow(2, 10 * (f - 1)) + T : O / 2 * (-Math.pow(2, -10 * --f) + 2) + T
                    }],
                    "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (f, T, O, C) {
                        return -O * (Math.sqrt(1 - (f /= C) * f) - 1) + T
                    }],
                    "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (f, T, O, C) {
                        return O * Math.sqrt(1 - (f = f / C - 1) * f) + T
                    }],
                    "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (f, T, O, C) {
                        return (f /= C / 2) < 1 ? -O / 2 * (Math.sqrt(1 - f * f) - 1) + T : O / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + T
                    }],
                    "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (f, T, O, C, x) {
                        return x === void 0 && (x = 1.70158), O * (f /= C) * f * ((x + 1) * f - x) + T
                    }],
                    "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (f, T, O, C, x) {
                        return x === void 0 && (x = 1.70158), O * ((f = f / C - 1) * f * ((x + 1) * f + x) + 1) + T
                    }],
                    "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (f, T, O, C, x) {
                        return x === void 0 && (x = 1.70158), (f /= C / 2) < 1 ? O / 2 * f * f * (((x *= 1.525) + 1) * f - x) + T : O / 2 * ((f -= 2) * f * (((x *= 1.525) + 1) * f + x) + 2) + T
                    }]
                },
                p = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                },
                g = document,
                b = window,
                w = "bkwld-tram",
                I = /[\-\.0-9]/g,
                L = /[A-Z]/,
                A = "number",
                q = /^(rgb|#)/,
                F = /(em|cm|mm|in|pt|pc|px)$/,
                P = /(em|cm|mm|in|pt|pc|px|%)$/,
                W = /(deg|rad|turn)$/,
                X = "unitless",
                z = /(all|none) 0s ease 0s/,
                Z = /^(width|height)$/,
                U = " ",
                N = g.createElement("a"),
                y = ["Webkit", "Moz", "O", "ms"],
                S = ["-webkit-", "-moz-", "-o-", "-ms-"],
                M = function (f) {
                    if (f in N.style) return {
                        dom: f,
                        css: f
                    };
                    var T, O, C = "",
                        x = f.split("-");
                    for (T = 0; T < x.length; T++) C += x[T].charAt(0).toUpperCase() + x[T].slice(1);
                    for (T = 0; T < y.length; T++)
                        if (O = y[T] + C, O in N.style) return {
                            dom: O,
                            css: S[T] + f
                        }
                },
                k = t.support = {
                    bind: Function.prototype.bind,
                    transform: M("transform"),
                    transition: M("transition"),
                    backface: M("backface-visibility"),
                    timing: M("transition-timing-function")
                };
            if (k.transition) {
                var $ = k.timing.dom;
                if (N.style[$] = v["ease-in-back"][0], !N.style[$])
                    for (var re in p) v[re][0] = p[re]
            }
            var D = t.frame = function () {
                var f = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame;
                return f && k.bind ? f.bind(b) : function (T) {
                    b.setTimeout(T, 16)
                }
            }(),
                V = t.now = function () {
                    var f = b.performance,
                        T = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
                    return T && k.bind ? T.bind(f) : Date.now || function () {
                        return +new Date
                    }
                }(),
                K = d(function (f) {
                    function T(ie, ce) {
                        var ye = h(("" + ie).split(U)),
                            de = ye[0];
                        ce = ce || {};
                        var Le = j[de];
                        if (!Le) return l("Unsupported property: " + de);
                        if (!ce.weak || !this.props[de]) {
                            var je = Le[0],
                                Me = this.props[de];
                            return Me || (Me = this.props[de] = new je.Bare), Me.init(this.$el, ye, Le, ce), Me
                        }
                    }

                    function O(ie, ce, ye) {
                        if (ie) {
                            var de = typeof ie;
                            if (ce || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), de == "number" && ce) return this.timer = new ne({
                                duration: ie,
                                context: this,
                                complete: R
                            }), void (this.active = !0);
                            if (de == "string" && ce) {
                                switch (ie) {
                                    case "hide":
                                        H.call(this);
                                        break;
                                    case "stop":
                                        J.call(this);
                                        break;
                                    case "redraw":
                                        ae.call(this);
                                        break;
                                    default:
                                        T.call(this, ie, ye && ye[1])
                                }
                                return R.call(this)
                            }
                            if (de == "function") return void ie.call(this, this);
                            if (de == "object") {
                                var Le = 0;
                                tt.call(this, ie, function (Ie, Zb) {
                                    Ie.span > Le && (Le = Ie.span), Ie.stop(), Ie.animate(Zb)
                                }, function (Ie) {
                                    "wait" in Ie && (Le = u(Ie.wait, 0))
                                }), _e.call(this), Le > 0 && (this.timer = new ne({
                                    duration: Le,
                                    context: this
                                }), this.active = !0, ce && (this.timer.complete = R));
                                var je = this,
                                    Me = !1,
                                    nn = {};
                                D(function () {
                                    tt.call(je, ie, function (Ie) {
                                        Ie.active && (Me = !0, nn[Ie.name] = Ie.nextStyle)
                                    }), Me && je.$el.css(nn)
                                })
                            }
                        }
                    }

                    function C(ie) {
                        ie = u(ie, 0), this.active ? this.queue.push({
                            options: ie
                        }) : (this.timer = new ne({
                            duration: ie,
                            context: this,
                            complete: R
                        }), this.active = !0)
                    }

                    function x(ie) {
                        return this.active ? (this.queue.push({
                            options: ie,
                            args: arguments
                        }), void (this.timer.complete = R)) : l("No active transition timer. Use start() or wait() before then().")
                    }

                    function R() {
                        if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                            var ie = this.queue.shift();
                            O.call(this, ie.options, !0, ie.args)
                        }
                    }

                    function J(ie) {
                        this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                        var ce;
                        typeof ie == "string" ? (ce = {}, ce[ie] = 1) : ce = typeof ie == "object" && ie != null ? ie : this.props, tt.call(this, ce, Re), _e.call(this)
                    }

                    function oe(ie) {
                        J.call(this, ie), tt.call(this, ie, mr, $b)
                    }

                    function ge(ie) {
                        typeof ie != "string" && (ie = "block"), this.el.style.display = ie
                    }

                    function H() {
                        J.call(this), this.el.style.display = "none"
                    }

                    function ae() {
                        this.el.offsetHeight
                    }

                    function ue() {
                        J.call(this), e.removeData(this.el, w), this.$el = this.el = null
                    }

                    function _e() {
                        var ie, ce, ye = [];
                        this.upstream && ye.push(this.upstream);
                        for (ie in this.props) ce = this.props[ie], ce.active && ye.push(ce.string);
                        ye = ye.join(","), this.style !== ye && (this.style = ye, this.el.style[k.transition.dom] = ye)
                    }

                    function tt(ie, ce, ye) {
                        var de, Le, je, Me, nn = ce !== Re,
                            Ie = {};
                        for (de in ie) je = ie[de], de in fe ? (Ie.transform || (Ie.transform = {}), Ie.transform[de] = je) : (L.test(de) && (de = r(de)), de in j ? Ie[de] = je : (Me || (Me = {}), Me[de] = je));
                        for (de in Ie) {
                            if (je = Ie[de], Le = this.props[de], !Le) {
                                if (!nn) continue;
                                Le = T.call(this, de)
                            }
                            ce.call(this, Le, je)
                        }
                        ye && Me && ye.call(this, Me)
                    }

                    function Re(ie) {
                        ie.stop()
                    }

                    function mr(ie, ce) {
                        ie.set(ce)
                    }

                    function $b(ie) {
                        this.$el.css(ie)
                    }

                    function Xe(ie, ce) {
                        f[ie] = function () {
                            return this.children ? Qb.call(this, ce, arguments) : (this.el && ce.apply(this, arguments), this)
                        }
                    }

                    function Qb(ie, ce) {
                        var ye, de = this.children.length;
                        for (ye = 0; de > ye; ye++) ie.apply(this.children[ye], ce);
                        return this
                    }
                    f.init = function (ie) {
                        if (this.$el = e(ie), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, se.keepInherited && !se.fallback) {
                            var ce = B(this.el, "transition");
                            ce && !z.test(ce) && (this.upstream = ce)
                        }
                        k.backface && se.hideBackface && E(this.el, k.backface.css, "hidden")
                    }, Xe("add", T), Xe("start", O), Xe("wait", C), Xe("then", x), Xe("next", R), Xe("stop", J), Xe("set", oe), Xe("show", ge), Xe("hide", H), Xe("redraw", ae), Xe("destroy", ue)
                }),
                m = d(K, function (f) {
                    function T(O, C) {
                        var x = e.data(O, w) || e.data(O, w, new K.Bare);
                        return x.el || x.init(O), C ? x.start(C) : x
                    }
                    f.init = function (O, C) {
                        var x = e(O);
                        if (!x.length) return this;
                        if (x.length === 1) return T(x[0], C);
                        var R = [];
                        return x.each(function (J, oe) {
                            R.push(T(oe, C))
                        }), this.children = R, this
                    }
                }),
                _ = d(function (f) {
                    function T() {
                        var R = this.get();
                        this.update("auto");
                        var J = this.get();
                        return this.update(R), J
                    }

                    function O(R, J, oe) {
                        return J !== void 0 && (oe = J), R in v ? R : oe
                    }

                    function C(R) {
                        var J = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(R);
                        return (J ? i(J[1], J[2], J[3]) : R).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                    }
                    var x = {
                        duration: 500,
                        ease: "ease",
                        delay: 0
                    };
                    f.init = function (R, J, oe, ge) {
                        this.$el = R, this.el = R[0];
                        var H = J[0];
                        oe[2] && (H = oe[2]), Y[H] && (H = Y[H]), this.name = H, this.type = oe[1], this.duration = u(J[1], this.duration, x.duration), this.ease = O(J[2], this.ease, x.ease), this.delay = u(J[3], this.delay, x.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = Z.test(this.name), this.unit = ge.unit || this.unit || se.defaultUnit, this.angle = ge.angle || this.angle || se.defaultAngle, se.fallback || ge.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + U + this.duration + "ms" + (this.ease != "ease" ? U + v[this.ease][0] : "") + (this.delay ? U + this.delay + "ms" : ""))
                    }, f.set = function (R) {
                        R = this.convert(R, this.type), this.update(R), this.redraw()
                    }, f.transition = function (R) {
                        this.active = !0, R = this.convert(R, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), R == "auto" && (R = T.call(this))), this.nextStyle = R
                    }, f.fallback = function (R) {
                        var J = this.el.style[this.name] || this.convert(this.get(), this.type);
                        R = this.convert(R, this.type), this.auto && (J == "auto" && (J = this.convert(this.get(), this.type)), R == "auto" && (R = T.call(this))), this.tween = new Q({
                            from: J,
                            to: R,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, f.get = function () {
                        return B(this.el, this.name)
                    }, f.update = function (R) {
                        E(this.el, this.name, R)
                    }, f.stop = function () {
                        (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, E(this.el, this.name, this.get()));
                        var R = this.tween;
                        R && R.context && R.destroy()
                    }, f.convert = function (R, J) {
                        if (R == "auto" && this.auto) return R;
                        var oe, ge = typeof R == "number",
                            H = typeof R == "string";
                        switch (J) {
                            case A:
                                if (ge) return R;
                                if (H && R.replace(I, "") === "") return +R;
                                oe = "number(unitless)";
                                break;
                            case q:
                                if (H) {
                                    if (R === "" && this.original) return this.original;
                                    if (J.test(R)) return R.charAt(0) == "#" && R.length == 7 ? R : C(R)
                                }
                                oe = "hex or rgb string";
                                break;
                            case F:
                                if (ge) return R + this.unit;
                                if (H && J.test(R)) return R;
                                oe = "number(px) or string(unit)";
                                break;
                            case P:
                                if (ge) return R + this.unit;
                                if (H && J.test(R)) return R;
                                oe = "number(px) or string(unit or %)";
                                break;
                            case W:
                                if (ge) return R + this.angle;
                                if (H && J.test(R)) return R;
                                oe = "number(deg) or string(angle)";
                                break;
                            case X:
                                if (ge || H && P.test(R)) return R;
                                oe = "number(unitless) or string(unit or %)"
                        }
                        return a(oe, R), R
                    }, f.redraw = function () {
                        this.el.offsetHeight
                    }
                }),
                G = d(_, function (f, T) {
                    f.init = function () {
                        T.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), q))
                    }
                }),
                ee = d(_, function (f, T) {
                    f.init = function () {
                        T.init.apply(this, arguments), this.animate = this.fallback
                    }, f.get = function () {
                        return this.$el[this.name]()
                    }, f.update = function (O) {
                        this.$el[this.name](O)
                    }
                }),
                te = d(_, function (f, T) {
                    function O(C, x) {
                        var R, J, oe, ge, H;
                        for (R in C) ge = fe[R], oe = ge[0], J = ge[1] || R, H = this.convert(C[R], oe), x.call(this, J, H, oe)
                    }
                    f.init = function () {
                        T.init.apply(this, arguments), this.current || (this.current = {}, fe.perspective && se.perspective && (this.current.perspective = se.perspective, E(this.el, this.name, this.style(this.current)), this.redraw()))
                    }, f.set = function (C) {
                        O.call(this, C, function (x, R) {
                            this.current[x] = R
                        }), E(this.el, this.name, this.style(this.current)), this.redraw()
                    }, f.transition = function (C) {
                        var x = this.values(C);
                        this.tween = new be({
                            current: this.current,
                            values: x,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease
                        });
                        var R, J = {};
                        for (R in this.current) J[R] = R in x ? x[R] : this.current[R];
                        this.active = !0, this.nextStyle = this.style(J)
                    }, f.fallback = function (C) {
                        var x = this.values(C);
                        this.tween = new be({
                            current: this.current,
                            values: x,
                            duration: this.duration,
                            delay: this.delay,
                            ease: this.ease,
                            update: this.update,
                            context: this
                        })
                    }, f.update = function () {
                        E(this.el, this.name, this.style(this.current))
                    }, f.style = function (C) {
                        var x, R = "";
                        for (x in C) R += x + "(" + C[x] + ") ";
                        return R
                    }, f.values = function (C) {
                        var x, R = {};
                        return O.call(this, C, function (J, oe, ge) {
                            R[J] = oe, this.current[J] === void 0 && (x = 0, ~J.indexOf("scale") && (x = 1), this.current[J] = this.convert(x, ge))
                        }), R
                    }
                }),
                Q = d(function (f) {
                    function T(H) {
                        oe.push(H) === 1 && D(O)
                    }

                    function O() {
                        var H, ae, ue, _e = oe.length;
                        if (_e)
                            for (D(O), ae = V(), H = _e; H--;) ue = oe[H], ue && ue.render(ae)
                    }

                    function C(H) {
                        var ae, ue = e.inArray(H, oe);
                        ue >= 0 && (ae = oe.slice(ue + 1), oe.length = ue, ae.length && (oe = oe.concat(ae)))
                    }

                    function x(H) {
                        return Math.round(H * ge) / ge
                    }

                    function R(H, ae, ue) {
                        return i(H[0] + ue * (ae[0] - H[0]), H[1] + ue * (ae[1] - H[1]), H[2] + ue * (ae[2] - H[2]))
                    }
                    var J = {
                        ease: v.ease[1],
                        from: 0,
                        to: 1
                    };
                    f.init = function (H) {
                        this.duration = H.duration || 0, this.delay = H.delay || 0;
                        var ae = H.ease || J.ease;
                        v[ae] && (ae = v[ae][1]), typeof ae != "function" && (ae = J.ease), this.ease = ae, this.update = H.update || o, this.complete = H.complete || o, this.context = H.context || this, this.name = H.name;
                        var ue = H.from,
                            _e = H.to;
                        ue === void 0 && (ue = J.from), _e === void 0 && (_e = J.to), this.unit = H.unit || "", typeof ue == "number" && typeof _e == "number" ? (this.begin = ue, this.change = _e - ue) : this.format(_e, ue), this.value = this.begin + this.unit, this.start = V(), H.autoplay !== !1 && this.play()
                    }, f.play = function () {
                        this.active || (this.start || (this.start = V()), this.active = !0, T(this))
                    }, f.stop = function () {
                        this.active && (this.active = !1, C(this))
                    }, f.render = function (H) {
                        var ae, ue = H - this.start;
                        if (this.delay) {
                            if (ue <= this.delay) return;
                            ue -= this.delay
                        }
                        if (ue < this.duration) {
                            var _e = this.ease(ue, 0, 1, this.duration);
                            return ae = this.startRGB ? R(this.startRGB, this.endRGB, _e) : x(this.begin + _e * this.change), this.value = ae + this.unit, void this.update.call(this.context, this.value)
                        }
                        ae = this.endHex || this.begin + this.change, this.value = ae + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                    }, f.format = function (H, ae) {
                        if (ae += "", H += "", H.charAt(0) == "#") return this.startRGB = n(ae), this.endRGB = n(H), this.endHex = H, this.begin = 0, void (this.change = 1);
                        if (!this.unit) {
                            var ue = ae.replace(I, ""),
                                _e = H.replace(I, "");
                            ue !== _e && s("tween", ae, H), this.unit = ue
                        }
                        ae = parseFloat(ae), H = parseFloat(H), this.begin = this.value = ae, this.change = H - ae
                    }, f.destroy = function () {
                        this.stop(), this.context = null, this.ease = this.update = this.complete = o
                    };
                    var oe = [],
                        ge = 1e3
                }),
                ne = d(Q, function (f) {
                    f.init = function (T) {
                        this.duration = T.duration || 0, this.complete = T.complete || o, this.context = T.context, this.play()
                    }, f.render = function (T) {
                        var O = T - this.start;
                        O < this.duration || (this.complete.call(this.context), this.destroy())
                    }
                }),
                be = d(Q, function (f, T) {
                    f.init = function (O) {
                        this.context = O.context, this.update = O.update, this.tweens = [], this.current = O.current;
                        var C, x;
                        for (C in O.values) x = O.values[C], this.current[C] !== x && this.tweens.push(new Q({
                            name: C,
                            from: this.current[C],
                            to: x,
                            duration: O.duration,
                            delay: O.delay,
                            ease: O.ease,
                            autoplay: !1
                        }));
                        this.play()
                    }, f.render = function (O) {
                        var C, x, R = this.tweens.length,
                            J = !1;
                        for (C = R; C--;) x = this.tweens[C], x.context && (x.render(O), this.current[x.name] = x.value, J = !0);
                        return J ? void (this.update && this.update.call(this.context)) : this.destroy()
                    }, f.destroy = function () {
                        if (T.destroy.call(this), this.tweens) {
                            var O, C = this.tweens.length;
                            for (O = C; O--;) this.tweens[O].destroy();
                            this.tweens = null, this.current = null
                        }
                    }
                }),
                se = t.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !k.transition,
                    agentTests: []
                };
            t.fallback = function (f) {
                if (!k.transition) return se.fallback = !0;
                se.agentTests.push("(" + f + ")");
                var T = new RegExp(se.agentTests.join("|"), "i");
                se.fallback = T.test(navigator.userAgent)
            }, t.fallback("6.0.[2-5] Safari"), t.tween = function (f) {
                return new Q(f)
            }, t.delay = function (f, T, O) {
                return new ne({
                    complete: T,
                    duration: f,
                    context: O
                })
            }, e.fn.tram = function (f) {
                return t.call(null, this, f)
            };
            var E = e.style,
                B = e.css,
                Y = {
                    transform: k.transform && k.transform.css
                },
                j = {
                    color: [G, q],
                    background: [G, q, "background-color"],
                    "outline-color": [G, q],
                    "border-color": [G, q],
                    "border-top-color": [G, q],
                    "border-right-color": [G, q],
                    "border-bottom-color": [G, q],
                    "border-left-color": [G, q],
                    "border-width": [_, F],
                    "border-top-width": [_, F],
                    "border-right-width": [_, F],
                    "border-bottom-width": [_, F],
                    "border-left-width": [_, F],
                    "border-spacing": [_, F],
                    "letter-spacing": [_, F],
                    margin: [_, F],
                    "margin-top": [_, F],
                    "margin-right": [_, F],
                    "margin-bottom": [_, F],
                    "margin-left": [_, F],
                    padding: [_, F],
                    "padding-top": [_, F],
                    "padding-right": [_, F],
                    "padding-bottom": [_, F],
                    "padding-left": [_, F],
                    "outline-width": [_, F],
                    opacity: [_, A],
                    top: [_, P],
                    right: [_, P],
                    bottom: [_, P],
                    left: [_, P],
                    "font-size": [_, P],
                    "text-indent": [_, P],
                    "word-spacing": [_, P],
                    width: [_, P],
                    "min-width": [_, P],
                    "max-width": [_, P],
                    height: [_, P],
                    "min-height": [_, P],
                    "max-height": [_, P],
                    "line-height": [_, X],
                    "scroll-top": [ee, A, "scrollTop"],
                    "scroll-left": [ee, A, "scrollLeft"]
                },
                fe = {};
            k.transform && (j.transform = [te], fe = {
                x: [P, "translateX"],
                y: [P, "translateY"],
                rotate: [W],
                rotateX: [W],
                rotateY: [W],
                scale: [A],
                scaleX: [A],
                scaleY: [A],
                skew: [W],
                skewX: [W],
                skewY: [W]
            }), k.transform && k.backface && (fe.z = [P, "translateZ"], fe.rotateZ = [W], fe.scaleZ = [A], fe.perspective = [F]);
            var We = /ms/,
                Fe = /s|\./;
            return e.tram = t
        }(window.jQuery)
    });
    var Ds = c((YU, Ms) => {
        "use strict";
        var i_ = window.$,
            o_ = Ni() && i_.tram;
        Ms.exports = function () {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {},
                r = Array.prototype,
                n = Object.prototype,
                i = Function.prototype,
                o = r.push,
                a = r.slice,
                s = r.concat,
                u = n.toString,
                l = n.hasOwnProperty,
                h = r.forEach,
                d = r.map,
                v = r.reduce,
                p = r.reduceRight,
                g = r.filter,
                b = r.every,
                w = r.some,
                I = r.indexOf,
                L = r.lastIndexOf,
                A = Array.isArray,
                q = Object.keys,
                F = i.bind,
                P = e.each = e.forEach = function (y, S, M) {
                    if (y == null) return y;
                    if (h && y.forEach === h) y.forEach(S, M);
                    else if (y.length === +y.length) {
                        for (var k = 0, $ = y.length; k < $; k++)
                            if (S.call(M, y[k], k, y) === t) return
                    } else
                        for (var re = e.keys(y), k = 0, $ = re.length; k < $; k++)
                            if (S.call(M, y[re[k]], re[k], y) === t) return;
                    return y
                };
            e.map = e.collect = function (y, S, M) {
                var k = [];
                return y == null ? k : d && y.map === d ? y.map(S, M) : (P(y, function ($, re, D) {
                    k.push(S.call(M, $, re, D))
                }), k)
            }, e.find = e.detect = function (y, S, M) {
                var k;
                return W(y, function ($, re, D) {
                    if (S.call(M, $, re, D)) return k = $, !0
                }), k
            }, e.filter = e.select = function (y, S, M) {
                var k = [];
                return y == null ? k : g && y.filter === g ? y.filter(S, M) : (P(y, function ($, re, D) {
                    S.call(M, $, re, D) && k.push($)
                }), k)
            };
            var W = e.some = e.any = function (y, S, M) {
                S || (S = e.identity);
                var k = !1;
                return y == null ? k : w && y.some === w ? y.some(S, M) : (P(y, function ($, re, D) {
                    if (k || (k = S.call(M, $, re, D))) return t
                }), !!k)
            };
            e.contains = e.include = function (y, S) {
                return y == null ? !1 : I && y.indexOf === I ? y.indexOf(S) != -1 : W(y, function (M) {
                    return M === S
                })
            }, e.delay = function (y, S) {
                var M = a.call(arguments, 2);
                return setTimeout(function () {
                    return y.apply(null, M)
                }, S)
            }, e.defer = function (y) {
                return e.delay.apply(e, [y, 1].concat(a.call(arguments, 1)))
            }, e.throttle = function (y) {
                var S, M, k;
                return function () {
                    S || (S = !0, M = arguments, k = this, o_.frame(function () {
                        S = !1, y.apply(k, M)
                    }))
                }
            }, e.debounce = function (y, S, M) {
                var k, $, re, D, V, K = function () {
                    var m = e.now() - D;
                    m < S ? k = setTimeout(K, S - m) : (k = null, M || (V = y.apply(re, $), re = $ = null))
                };
                return function () {
                    re = this, $ = arguments, D = e.now();
                    var m = M && !k;
                    return k || (k = setTimeout(K, S)), m && (V = y.apply(re, $), re = $ = null), V
                }
            }, e.defaults = function (y) {
                if (!e.isObject(y)) return y;
                for (var S = 1, M = arguments.length; S < M; S++) {
                    var k = arguments[S];
                    for (var $ in k) y[$] === void 0 && (y[$] = k[$])
                }
                return y
            }, e.keys = function (y) {
                if (!e.isObject(y)) return [];
                if (q) return q(y);
                var S = [];
                for (var M in y) e.has(y, M) && S.push(M);
                return S
            }, e.has = function (y, S) {
                return l.call(y, S)
            }, e.isObject = function (y) {
                return y === Object(y)
            }, e.now = Date.now || function () {
                return new Date().getTime()
            }, e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var X = /(.)^/,
                z = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                Z = /\\|'|\r|\n|\u2028|\u2029/g,
                U = function (y) {
                    return "\\" + z[y]
                },
                N = /^\s*(\w|\$)+\s*$/;
            return e.template = function (y, S, M) {
                !S && M && (S = M), S = e.defaults({}, S, e.templateSettings);
                var k = RegExp([(S.escape || X).source, (S.interpolate || X).source, (S.evaluate || X).source].join("|") + "|$", "g"),
                    $ = 0,
                    re = "__p+='";
                y.replace(k, function (m, _, G, ee, te) {
                    return re += y.slice($, te).replace(Z, U), $ = te + m.length, _ ? re += `'+
((__t=(` + _ + `))==null?'':_.escape(__t))+
'` : G ? re += `'+
((__t=(` + G + `))==null?'':__t)+
'` : ee && (re += `';
` + ee + `
__p+='`), m
                }), re += `';
`;
                var D = S.variable;
                if (D) {
                    if (!N.test(D)) throw new Error("variable is not a bare identifier: " + D)
                } else re = `with(obj||{}){
` + re + `}
`, D = "obj";
                re = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + re + `return __p;
`;
                var V;
                try {
                    V = new Function(S.variable || "obj", "_", re)
                } catch (m) {
                    throw m.source = re, m
                }
                var K = function (m) {
                    return V.call(this, m, e)
                };
                return K.source = "function(" + D + `){
` + re + "}", K
            }, e
        }()
    });
    var ke = c(($U, Xs) => {
        "use strict";
        var pe = {},
            Gt = {},
            Vt = [],
            qi = window.Webflow || [],
            yt = window.jQuery,
            Ke = yt(window),
            a_ = yt(document),
            nt = yt.isFunction,
            ze = pe._ = Ds(),
            Gs = pe.tram = Ni() && yt.tram,
            sn = !1,
            Fi = !1;
        Gs.config.hideBackface = !1;
        Gs.config.keepInherited = !0;
        pe.define = function (e, t, r) {
            Gt[e] && Us(Gt[e]);
            var n = Gt[e] = t(yt, ze, r) || {};
            return Vs(n), n
        };
        pe.require = function (e) {
            return Gt[e]
        };

        function Vs(e) {
            pe.env() && (nt(e.design) && Ke.on("__wf_design", e.design), nt(e.preview) && Ke.on("__wf_preview", e.preview)), nt(e.destroy) && Ke.on("__wf_destroy", e.destroy), e.ready && nt(e.ready) && s_(e)
        }

        function s_(e) {
            if (sn) {
                e.ready();
                return
            }
            ze.contains(Vt, e.ready) || Vt.push(e.ready)
        }

        function Us(e) {
            nt(e.design) && Ke.off("__wf_design", e.design), nt(e.preview) && Ke.off("__wf_preview", e.preview), nt(e.destroy) && Ke.off("__wf_destroy", e.destroy), e.ready && nt(e.ready) && u_(e)
        }

        function u_(e) {
            Vt = ze.filter(Vt, function (t) {
                return t !== e.ready
            })
        }
        pe.push = function (e) {
            if (sn) {
                nt(e) && e();
                return
            }
            qi.push(e)
        };
        pe.env = function (e) {
            var t = window.__wf_design,
                r = typeof t < "u";
            if (!e) return r;
            if (e === "design") return r && t;
            if (e === "preview") return r && !t;
            if (e === "slug") return r && window.__wf_slug;
            if (e === "editor") return window.WebflowEditor;
            if (e === "test") return window.__wf_test;
            if (e === "frame") return window !== window.top
        };
        var an = navigator.userAgent.toLowerCase(),
            Bs = pe.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            c_ = pe.env.chrome = /chrome/.test(an) && /Google/.test(navigator.vendor) && parseInt(an.match(/chrome\/(\d+)\./)[1], 10),
            l_ = pe.env.ios = /(ipod|iphone|ipad)/.test(an);
        pe.env.safari = /safari/.test(an) && !c_ && !l_;
        var Pi;
        Bs && a_.on("touchstart mousedown", function (e) {
            Pi = e.target
        });
        pe.validClick = Bs ? function (e) {
            return e === Pi || yt.contains(e, Pi)
        } : function () {
            return !0
        };
        var Hs = "resize.webflow orientationchange.webflow load.webflow",
            f_ = "scroll.webflow " + Hs;
        pe.resize = Mi(Ke, Hs);
        pe.scroll = Mi(Ke, f_);
        pe.redraw = Mi();

        function Mi(e, t) {
            var r = [],
                n = {};
            return n.up = ze.throttle(function (i) {
                ze.each(r, function (o) {
                    o(i)
                })
            }), e && t && e.on(t, n.up), n.on = function (i) {
                typeof i == "function" && (ze.contains(r, i) || r.push(i))
            }, n.off = function (i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = ze.filter(r, function (o) {
                    return o !== i
                })
            }, n
        }
        pe.location = function (e) {
            window.location = e
        };
        pe.env() && (pe.location = function () { });
        pe.ready = function () {
            sn = !0, Fi ? d_() : ze.each(Vt, ks), ze.each(qi, ks), pe.resize.up()
        };

        function ks(e) {
            nt(e) && e()
        }

        function d_() {
            Fi = !1, ze.each(Gt, Vs)
        }
        var St;
        pe.load = function (e) {
            St.then(e)
        };

        function Ws() {
            St && (St.reject(), Ke.off("load", St.resolve)), St = new yt.Deferred, Ke.on("load", St.resolve)
        }
        pe.destroy = function (e) {
            e = e || {}, Fi = !0, Ke.triggerHandler("__wf_destroy"), e.domready != null && (sn = e.domready), ze.each(Gt, Us), pe.resize.off(), pe.scroll.off(), pe.redraw.off(), Vt = [], qi = [], St.state() === "pending" && Ws()
        };
        yt(pe.ready);
        Ws();
        Xs.exports = window.Webflow = pe
    });
    var Ks = c((QU, zs) => {
        "use strict";
        var js = ke();
        js.define("brand", zs.exports = function (e) {
            var t = {},
                r = document,
                n = e("html"),
                i = e("body"),
                o = ".w-webflow-badge",
                a = window.location,
                s = /PhantomJS/i.test(navigator.userAgent),
                u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
                l;
            t.ready = function () {
                var p = n.attr("data-wf-status"),
                    g = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(g) && a.hostname !== g && (p = !0), p && !s && (l = l || d(), v(), setTimeout(v, 500), e(r).off(u, h).on(u, h))
            };

            function h() {
                var p = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(l).attr("style", p ? "display: none !important;" : "")
            }

            function d() {
                var p = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
                    g = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }),
                    b = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return p.append(g, b), p[0]
            }

            function v() {
                var p = i.children(o),
                    g = p.length && p.get(0) === l,
                    b = js.env("editor");
                if (g) {
                    b && p.remove();
                    return
                }
                p.length && p.remove(), b || i.append(l)
            }
            return t
        })
    });
    var $s = c((ZU, Ys) => {
        "use strict";
        var Di = ke();
        Di.define("edit", Ys.exports = function (e, t, r) {
            if (r = r || {}, (Di.env("test") || Di.env("frame")) && !r.fixture && !p_()) return {
                exit: 1
            };
            var n = {},
                i = e(window),
                o = e(document.documentElement),
                a = document.location,
                s = "hashchange",
                u, l = r.load || v,
                h = !1;
            try {
                h = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch { }
            h ? l() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && l() : i.on(s, d).triggerHandler(s);

            function d() {
                u || /\?edit/.test(a.hash) && l()
            }

            function v() {
                u = !0, window.WebflowEditor = !0, i.off(s, d), L(function (q) {
                    e.ajax({
                        url: I("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: p(q)
                    })
                })
            }

            function p(q) {
                return function (F) {
                    if (!F) {
                        console.error("Could not load editor data");
                        return
                    }
                    F.thirdPartyCookiesSupported = q, g(w(F.scriptPath), function () {
                        window.WebflowEditor(F)
                    })
                }
            }

            function g(q, F) {
                e.ajax({
                    type: "GET",
                    url: q,
                    dataType: "script",
                    cache: !0
                }).then(F, b)
            }

            function b(q, F, P) {
                throw console.error("Could not load editor script: " + F), P
            }

            function w(q) {
                return q.indexOf("//") >= 0 ? q : I("https://editor-api.webflow.com" + q)
            }

            function I(q) {
                return q.replace(/([^:])\/\//g, "$1/")
            }

            function L(q) {
                var F = window.document.createElement("iframe");
                F.src = "https://webflow.com/site/third-party-cookie-check.html", F.style.display = "none", F.sandbox = "allow-scripts allow-same-origin";
                var P = function (W) {
                    W.data === "WF_third_party_cookies_unsupported" ? (A(F, P), q(!1)) : W.data === "WF_third_party_cookies_supported" && (A(F, P), q(!0))
                };
                F.onerror = function () {
                    A(F, P), q(!1)
                }, window.addEventListener("message", P, !1), window.document.body.appendChild(F)
            }

            function A(q, F) {
                window.removeEventListener("message", F, !1), q.remove()
            }
            return n
        });

        function p_() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    });
    var Zs = c((JU, Qs) => {
        "use strict";
        var g_ = ke();
        g_.define("focus-visible", Qs.exports = function () {
            function e(r) {
                var n = !0,
                    i = !1,
                    o = null,
                    a = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0
                    };

                function s(A) {
                    return !!(A && A !== document && A.nodeName !== "HTML" && A.nodeName !== "BODY" && "classList" in A && "contains" in A.classList)
                }

                function u(A) {
                    var q = A.type,
                        F = A.tagName;
                    return !!(F === "INPUT" && a[q] && !A.readOnly || F === "TEXTAREA" && !A.readOnly || A.isContentEditable)
                }

                function l(A) {
                    A.getAttribute("data-wf-focus-visible") || A.setAttribute("data-wf-focus-visible", "true")
                }

                function h(A) {
                    A.getAttribute("data-wf-focus-visible") && A.removeAttribute("data-wf-focus-visible")
                }

                function d(A) {
                    A.metaKey || A.altKey || A.ctrlKey || (s(r.activeElement) && l(r.activeElement), n = !0)
                }

                function v() {
                    n = !1
                }

                function p(A) {
                    s(A.target) && (n || u(A.target)) && l(A.target)
                }

                function g(A) {
                    s(A.target) && A.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function () {
                        i = !1
                    }, 100), h(A.target))
                }

                function b() {
                    document.visibilityState === "hidden" && (i && (n = !0), w())
                }

                function w() {
                    document.addEventListener("mousemove", L), document.addEventListener("mousedown", L), document.addEventListener("mouseup", L), document.addEventListener("pointermove", L), document.addEventListener("pointerdown", L), document.addEventListener("pointerup", L), document.addEventListener("touchmove", L), document.addEventListener("touchstart", L), document.addEventListener("touchend", L)
                }

                function I() {
                    document.removeEventListener("mousemove", L), document.removeEventListener("mousedown", L), document.removeEventListener("mouseup", L), document.removeEventListener("pointermove", L), document.removeEventListener("pointerdown", L), document.removeEventListener("pointerup", L), document.removeEventListener("touchmove", L), document.removeEventListener("touchstart", L), document.removeEventListener("touchend", L)
                }

                function L(A) {
                    A.target.nodeName && A.target.nodeName.toLowerCase() === "html" || (n = !1, I())
                }
                document.addEventListener("keydown", d, !0), document.addEventListener("mousedown", v, !0), document.addEventListener("pointerdown", v, !0), document.addEventListener("touchstart", v, !0), document.addEventListener("visibilitychange", b, !0), w(), r.addEventListener("focus", p, !0), r.addEventListener("blur", g, !0)
            }

            function t() {
                if (typeof document < "u") try {
                    document.querySelector(":focus-visible")
                } catch {
                    e(document)
                }
            }
            return {
                ready: t
            }
        })
    });
    var tu = c((eB, eu) => {
        "use strict";
        var Js = ke();
        Js.define("focus", eu.exports = function () {
            var e = [],
                t = !1;

            function r(a) {
                t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
            }

            function n(a) {
                var s = a.target,
                    u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }

            function i(a) {
                n(a) && (t = !0, setTimeout(() => {
                    for (t = !1, a.target.focus(); e.length > 0;) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type, s))
                    }
                }, 0))
            }

            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Js.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        })
    });
    var iu = c((tB, nu) => {
        "use strict";
        var ki = window.jQuery,
            it = {},
            un = [],
            ru = ".w-ix",
            cn = {
                reset: function (e, t) {
                    t.__wf_intro = null
                },
                intro: function (e, t) {
                    t.__wf_intro || (t.__wf_intro = !0, ki(t).triggerHandler(it.types.INTRO))
                },
                outro: function (e, t) {
                    t.__wf_intro && (t.__wf_intro = null, ki(t).triggerHandler(it.types.OUTRO))
                }
            };
        it.triggers = {};
        it.types = {
            INTRO: "w-ix-intro" + ru,
            OUTRO: "w-ix-outro" + ru
        };
        it.init = function () {
            for (var e = un.length, t = 0; t < e; t++) {
                var r = un[t];
                r[0](0, r[1])
            }
            un = [], ki.extend(it.triggers, cn)
        };
        it.async = function () {
            for (var e in cn) {
                var t = cn[e];
                cn.hasOwnProperty(e) && (it.triggers[e] = function (r, n) {
                    un.push([t, n])
                })
            }
        };
        it.async();
        nu.exports = it
    });
    var fn = c((rB, su) => {
        "use strict";
        var Gi = iu();

        function ou(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
        }
        var v_ = window.jQuery,
            ln = {},
            au = ".w-ix",
            h_ = {
                reset: function (e, t) {
                    Gi.triggers.reset(e, t)
                },
                intro: function (e, t) {
                    Gi.triggers.intro(e, t), ou(t, "COMPONENT_ACTIVE")
                },
                outro: function (e, t) {
                    Gi.triggers.outro(e, t), ou(t, "COMPONENT_INACTIVE")
                }
            };
        ln.triggers = {};
        ln.types = {
            INTRO: "w-ix-intro" + au,
            OUTRO: "w-ix-outro" + au
        };
        v_.extend(ln.triggers, h_);
        su.exports = ln
    });
    var uu = c((nB, ft) => {
        function Vi(e) {
            return ft.exports = Vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
                return typeof t
            } : function (t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, ft.exports.__esModule = !0, ft.exports.default = ft.exports, Vi(e)
        }
        ft.exports = Vi, ft.exports.__esModule = !0, ft.exports.default = ft.exports
    });
    var dn = c((iB, yr) => {
        var m_ = uu().default;

        function cu(e) {
            if (typeof WeakMap != "function") return null;
            var t = new WeakMap,
                r = new WeakMap;
            return (cu = function (i) {
                return i ? r : t
            })(e)
        }

        function y_(e, t) {
            if (!t && e && e.__esModule) return e;
            if (e === null || m_(e) != "object" && typeof e != "function") return {
                default: e
            };
            var r = cu(t);
            if (r && r.has(e)) return r.get(e);
            var n = {
                __proto__: null
            },
                i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                } return n.default = e, r && r.set(e, n), n
        }
        yr.exports = y_, yr.exports.__esModule = !0, yr.exports.default = yr.exports
    });
    var lu = c((oB, Er) => {
        function E_(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Er.exports = E_, Er.exports.__esModule = !0, Er.exports.default = Er.exports
    });
    var me = c((aB, fu) => {
        var pn = function (e) {
            return e && e.Math == Math && e
        };
        fu.exports = pn(typeof globalThis == "object" && globalThis) || pn(typeof window == "object" && window) || pn(typeof self == "object" && self) || pn(typeof global == "object" && global) || function () {
            return this
        }() || Function("return this")()
    });
    var Ut = c((sB, du) => {
        du.exports = function (e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    });
    var Ct = c((uB, pu) => {
        var b_ = Ut();
        pu.exports = !b_(function () {
            return Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1] != 7
        })
    });
    var gn = c((cB, gu) => {
        var br = Function.prototype.call;
        gu.exports = br.bind ? br.bind(br) : function () {
            return br.apply(br, arguments)
        }
    });
    var yu = c(mu => {
        "use strict";
        var vu = {}.propertyIsEnumerable,
            hu = Object.getOwnPropertyDescriptor,
            __ = hu && !vu.call({
                1: 2
            }, 1);
        mu.f = __ ? function (t) {
            var r = hu(this, t);
            return !!r && r.enumerable
        } : vu
    });
    var Ui = c((fB, Eu) => {
        Eu.exports = function (e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    });
    var Ye = c((dB, _u) => {
        var bu = Function.prototype,
            Bi = bu.bind,
            Hi = bu.call,
            I_ = Bi && Bi.bind(Hi);
        _u.exports = Bi ? function (e) {
            return e && I_(Hi, e)
        } : function (e) {
            return e && function () {
                return Hi.apply(e, arguments)
            }
        }
    });
    var wu = c((pB, Tu) => {
        var Iu = Ye(),
            T_ = Iu({}.toString),
            w_ = Iu("".slice);
        Tu.exports = function (e) {
            return w_(T_(e), 8, -1)
        }
    });
    var Ou = c((gB, xu) => {
        var x_ = me(),
            O_ = Ye(),
            A_ = Ut(),
            S_ = wu(),
            Wi = x_.Object,
            C_ = O_("".split);
        xu.exports = A_(function () {
            return !Wi("z").propertyIsEnumerable(0)
        }) ? function (e) {
            return S_(e) == "String" ? C_(e, "") : Wi(e)
        } : Wi
    });
    var Xi = c((vB, Au) => {
        var R_ = me(),
            L_ = R_.TypeError;
        Au.exports = function (e) {
            if (e == null) throw L_("Can't call method on " + e);
            return e
        }
    });
    var _r = c((hB, Su) => {
        var N_ = Ou(),
            P_ = Xi();
        Su.exports = function (e) {
            return N_(P_(e))
        }
    });
    var ot = c((mB, Cu) => {
        Cu.exports = function (e) {
            return typeof e == "function"
        }
    });
    var Bt = c((yB, Ru) => {
        var q_ = ot();
        Ru.exports = function (e) {
            return typeof e == "object" ? e !== null : q_(e)
        }
    });
    var Ir = c((EB, Lu) => {
        var ji = me(),
            F_ = ot(),
            M_ = function (e) {
                return F_(e) ? e : void 0
            };
        Lu.exports = function (e, t) {
            return arguments.length < 2 ? M_(ji[e]) : ji[e] && ji[e][t]
        }
    });
    var Pu = c((bB, Nu) => {
        var D_ = Ye();
        Nu.exports = D_({}.isPrototypeOf)
    });
    var Fu = c((_B, qu) => {
        var k_ = Ir();
        qu.exports = k_("navigator", "userAgent") || ""
    });
    var Bu = c((IB, Uu) => {
        var Vu = me(),
            zi = Fu(),
            Mu = Vu.process,
            Du = Vu.Deno,
            ku = Mu && Mu.versions || Du && Du.version,
            Gu = ku && ku.v8,
            $e, vn;
        Gu && ($e = Gu.split("."), vn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1]));
        !vn && zi && ($e = zi.match(/Edge\/(\d+)/), (!$e || $e[1] >= 74) && ($e = zi.match(/Chrome\/(\d+)/), $e && (vn = +$e[1])));
        Uu.exports = vn
    });
    var Ki = c((TB, Wu) => {
        var Hu = Bu(),
            G_ = Ut();
        Wu.exports = !!Object.getOwnPropertySymbols && !G_(function () {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Hu && Hu < 41
        })
    });
    var Yi = c((wB, Xu) => {
        var V_ = Ki();
        Xu.exports = V_ && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var $i = c((xB, ju) => {
        var U_ = me(),
            B_ = Ir(),
            H_ = ot(),
            W_ = Pu(),
            X_ = Yi(),
            j_ = U_.Object;
        ju.exports = X_ ? function (e) {
            return typeof e == "symbol"
        } : function (e) {
            var t = B_("Symbol");
            return H_(t) && W_(t.prototype, j_(e))
        }
    });
    var Ku = c((OB, zu) => {
        var z_ = me(),
            K_ = z_.String;
        zu.exports = function (e) {
            try {
                return K_(e)
            } catch {
                return "Object"
            }
        }
    });
    var $u = c((AB, Yu) => {
        var Y_ = me(),
            $_ = ot(),
            Q_ = Ku(),
            Z_ = Y_.TypeError;
        Yu.exports = function (e) {
            if ($_(e)) return e;
            throw Z_(Q_(e) + " is not a function")
        }
    });
    var Zu = c((SB, Qu) => {
        var J_ = $u();
        Qu.exports = function (e, t) {
            var r = e[t];
            return r == null ? void 0 : J_(r)
        }
    });
    var ec = c((CB, Ju) => {
        var eI = me(),
            Qi = gn(),
            Zi = ot(),
            Ji = Bt(),
            tI = eI.TypeError;
        Ju.exports = function (e, t) {
            var r, n;
            if (t === "string" && Zi(r = e.toString) && !Ji(n = Qi(r, e)) || Zi(r = e.valueOf) && !Ji(n = Qi(r, e)) || t !== "string" && Zi(r = e.toString) && !Ji(n = Qi(r, e))) return n;
            throw tI("Can't convert object to primitive value")
        }
    });
    var rc = c((RB, tc) => {
        tc.exports = !1
    });
    var hn = c((LB, ic) => {
        var nc = me(),
            rI = Object.defineProperty;
        ic.exports = function (e, t) {
            try {
                rI(nc, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                nc[e] = t
            }
            return t
        }
    });
    var mn = c((NB, ac) => {
        var nI = me(),
            iI = hn(),
            oc = "__core-js_shared__",
            oI = nI[oc] || iI(oc, {});
        ac.exports = oI
    });
    var eo = c((PB, uc) => {
        var aI = rc(),
            sc = mn();
        (uc.exports = function (e, t) {
            return sc[e] || (sc[e] = t !== void 0 ? t : {})
        })("versions", []).push({
            version: "3.19.0",
            mode: aI ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    });
    var lc = c((qB, cc) => {
        var sI = me(),
            uI = Xi(),
            cI = sI.Object;
        cc.exports = function (e) {
            return cI(uI(e))
        }
    });
    var Et = c((FB, fc) => {
        var lI = Ye(),
            fI = lc(),
            dI = lI({}.hasOwnProperty);
        fc.exports = Object.hasOwn || function (t, r) {
            return dI(fI(t), r)
        }
    });
    var to = c((MB, dc) => {
        var pI = Ye(),
            gI = 0,
            vI = Math.random(),
            hI = pI(1 .toString);
        dc.exports = function (e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + hI(++gI + vI, 36)
        }
    });
    var ro = c((DB, mc) => {
        var mI = me(),
            yI = eo(),
            pc = Et(),
            EI = to(),
            gc = Ki(),
            hc = Yi(),
            Ht = yI("wks"),
            Rt = mI.Symbol,
            vc = Rt && Rt.for,
            bI = hc ? Rt : Rt && Rt.withoutSetter || EI;
        mc.exports = function (e) {
            if (!pc(Ht, e) || !(gc || typeof Ht[e] == "string")) {
                var t = "Symbol." + e;
                gc && pc(Rt, e) ? Ht[e] = Rt[e] : hc && vc ? Ht[e] = vc(t) : Ht[e] = bI(t)
            }
            return Ht[e]
        }
    });
    var _c = c((kB, bc) => {
        var _I = me(),
            II = gn(),
            yc = Bt(),
            Ec = $i(),
            TI = Zu(),
            wI = ec(),
            xI = ro(),
            OI = _I.TypeError,
            AI = xI("toPrimitive");
        bc.exports = function (e, t) {
            if (!yc(e) || Ec(e)) return e;
            var r = TI(e, AI),
                n;
            if (r) {
                if (t === void 0 && (t = "default"), n = II(r, e, t), !yc(n) || Ec(n)) return n;
                throw OI("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"), wI(e, t)
        }
    });
    var no = c((GB, Ic) => {
        var SI = _c(),
            CI = $i();
        Ic.exports = function (e) {
            var t = SI(e, "string");
            return CI(t) ? t : t + ""
        }
    });
    var oo = c((VB, wc) => {
        var RI = me(),
            Tc = Bt(),
            io = RI.document,
            LI = Tc(io) && Tc(io.createElement);
        wc.exports = function (e) {
            return LI ? io.createElement(e) : {}
        }
    });
    var ao = c((UB, xc) => {
        var NI = Ct(),
            PI = Ut(),
            qI = oo();
        xc.exports = !NI && !PI(function () {
            return Object.defineProperty(qI("div"), "a", {
                get: function () {
                    return 7
                }
            }).a != 7
        })
    });
    var so = c(Ac => {
        var FI = Ct(),
            MI = gn(),
            DI = yu(),
            kI = Ui(),
            GI = _r(),
            VI = no(),
            UI = Et(),
            BI = ao(),
            Oc = Object.getOwnPropertyDescriptor;
        Ac.f = FI ? Oc : function (t, r) {
            if (t = GI(t), r = VI(r), BI) try {
                return Oc(t, r)
            } catch { }
            if (UI(t, r)) return kI(!MI(DI.f, t, r), t[r])
        }
    });
    var Tr = c((HB, Cc) => {
        var Sc = me(),
            HI = Bt(),
            WI = Sc.String,
            XI = Sc.TypeError;
        Cc.exports = function (e) {
            if (HI(e)) return e;
            throw XI(WI(e) + " is not an object")
        }
    });
    var wr = c(Nc => {
        var jI = me(),
            zI = Ct(),
            KI = ao(),
            Rc = Tr(),
            YI = no(),
            $I = jI.TypeError,
            Lc = Object.defineProperty;
        Nc.f = zI ? Lc : function (t, r, n) {
            if (Rc(t), r = YI(r), Rc(n), KI) try {
                return Lc(t, r, n)
            } catch { }
            if ("get" in n || "set" in n) throw $I("Accessors not supported");
            return "value" in n && (t[r] = n.value), t
        }
    });
    var yn = c((XB, Pc) => {
        var QI = Ct(),
            ZI = wr(),
            JI = Ui();
        Pc.exports = QI ? function (e, t, r) {
            return ZI.f(e, t, JI(1, r))
        } : function (e, t, r) {
            return e[t] = r, e
        }
    });
    var co = c((jB, qc) => {
        var eT = Ye(),
            tT = ot(),
            uo = mn(),
            rT = eT(Function.toString);
        tT(uo.inspectSource) || (uo.inspectSource = function (e) {
            return rT(e)
        });
        qc.exports = uo.inspectSource
    });
    var Dc = c((zB, Mc) => {
        var nT = me(),
            iT = ot(),
            oT = co(),
            Fc = nT.WeakMap;
        Mc.exports = iT(Fc) && /native code/.test(oT(Fc))
    });
    var lo = c((KB, Gc) => {
        var aT = eo(),
            sT = to(),
            kc = aT("keys");
        Gc.exports = function (e) {
            return kc[e] || (kc[e] = sT(e))
        }
    });
    var En = c((YB, Vc) => {
        Vc.exports = {}
    });
    var jc = c(($B, Xc) => {
        var uT = Dc(),
            Wc = me(),
            fo = Ye(),
            cT = Bt(),
            lT = yn(),
            po = Et(),
            go = mn(),
            fT = lo(),
            dT = En(),
            Uc = "Object already initialized",
            ho = Wc.TypeError,
            pT = Wc.WeakMap,
            bn, xr, _n, gT = function (e) {
                return _n(e) ? xr(e) : bn(e, {})
            },
            vT = function (e) {
                return function (t) {
                    var r;
                    if (!cT(t) || (r = xr(t)).type !== e) throw ho("Incompatible receiver, " + e + " required");
                    return r
                }
            };
        uT || go.state ? (bt = go.state || (go.state = new pT), Bc = fo(bt.get), vo = fo(bt.has), Hc = fo(bt.set), bn = function (e, t) {
            if (vo(bt, e)) throw new ho(Uc);
            return t.facade = e, Hc(bt, e, t), t
        }, xr = function (e) {
            return Bc(bt, e) || {}
        }, _n = function (e) {
            return vo(bt, e)
        }) : (Lt = fT("state"), dT[Lt] = !0, bn = function (e, t) {
            if (po(e, Lt)) throw new ho(Uc);
            return t.facade = e, lT(e, Lt, t), t
        }, xr = function (e) {
            return po(e, Lt) ? e[Lt] : {}
        }, _n = function (e) {
            return po(e, Lt)
        });
        var bt, Bc, vo, Hc, Lt;
        Xc.exports = {
            set: bn,
            get: xr,
            has: _n,
            enforce: gT,
            getterFor: vT
        }
    });
    var Yc = c((QB, Kc) => {
        var mo = Ct(),
            hT = Et(),
            zc = Function.prototype,
            mT = mo && Object.getOwnPropertyDescriptor,
            yo = hT(zc, "name"),
            yT = yo && function () { }.name === "something",
            ET = yo && (!mo || mo && mT(zc, "name").configurable);
        Kc.exports = {
            EXISTS: yo,
            PROPER: yT,
            CONFIGURABLE: ET
        }
    });
    var el = c((ZB, Jc) => {
        var bT = me(),
            $c = ot(),
            _T = Et(),
            Qc = yn(),
            IT = hn(),
            TT = co(),
            Zc = jc(),
            wT = Yc().CONFIGURABLE,
            xT = Zc.get,
            OT = Zc.enforce,
            AT = String(String).split("String");
        (Jc.exports = function (e, t, r, n) {
            var i = n ? !!n.unsafe : !1,
                o = n ? !!n.enumerable : !1,
                a = n ? !!n.noTargetGet : !1,
                s = n && n.name !== void 0 ? n.name : t,
                u;
            if ($c(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!_T(r, "name") || wT && r.name !== s) && Qc(r, "name", s), u = OT(r), u.source || (u.source = AT.join(typeof s == "string" ? s : ""))), e === bT) {
                o ? e[t] = r : IT(t, r);
                return
            } else i ? !a && e[t] && (o = !0) : delete e[t];
            o ? e[t] = r : Qc(e, t, r)
        })(Function.prototype, "toString", function () {
            return $c(this) && xT(this).source || TT(this)
        })
    });
    var Eo = c((JB, tl) => {
        var ST = Math.ceil,
            CT = Math.floor;
        tl.exports = function (e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? CT : ST)(t)
        }
    });
    var nl = c((eH, rl) => {
        var RT = Eo(),
            LT = Math.max,
            NT = Math.min;
        rl.exports = function (e, t) {
            var r = RT(e);
            return r < 0 ? LT(r + t, 0) : NT(r, t)
        }
    });
    var ol = c((tH, il) => {
        var PT = Eo(),
            qT = Math.min;
        il.exports = function (e) {
            return e > 0 ? qT(PT(e), 9007199254740991) : 0
        }
    });
    var sl = c((rH, al) => {
        var FT = ol();
        al.exports = function (e) {
            return FT(e.length)
        }
    });
    var bo = c((nH, cl) => {
        var MT = _r(),
            DT = nl(),
            kT = sl(),
            ul = function (e) {
                return function (t, r, n) {
                    var i = MT(t),
                        o = kT(i),
                        a = DT(n, o),
                        s;
                    if (e && r != r) {
                        for (; o > a;)
                            if (s = i[a++], s != s) return !0
                    } else
                        for (; o > a; a++)
                            if ((e || a in i) && i[a] === r) return e || a || 0;
                    return !e && -1
                }
            };
        cl.exports = {
            includes: ul(!0),
            indexOf: ul(!1)
        }
    });
    var Io = c((iH, fl) => {
        var GT = Ye(),
            _o = Et(),
            VT = _r(),
            UT = bo().indexOf,
            BT = En(),
            ll = GT([].push);
        fl.exports = function (e, t) {
            var r = VT(e),
                n = 0,
                i = [],
                o;
            for (o in r) !_o(BT, o) && _o(r, o) && ll(i, o);
            for (; t.length > n;) _o(r, o = t[n++]) && (~UT(i, o) || ll(i, o));
            return i
        }
    });
    var In = c((oH, dl) => {
        dl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var gl = c(pl => {
        var HT = Io(),
            WT = In(),
            XT = WT.concat("length", "prototype");
        pl.f = Object.getOwnPropertyNames || function (t) {
            return HT(t, XT)
        }
    });
    var hl = c(vl => {
        vl.f = Object.getOwnPropertySymbols
    });
    var yl = c((uH, ml) => {
        var jT = Ir(),
            zT = Ye(),
            KT = gl(),
            YT = hl(),
            $T = Tr(),
            QT = zT([].concat);
        ml.exports = jT("Reflect", "ownKeys") || function (t) {
            var r = KT.f($T(t)),
                n = YT.f;
            return n ? QT(r, n(t)) : r
        }
    });
    var bl = c((cH, El) => {
        var ZT = Et(),
            JT = yl(),
            ew = so(),
            tw = wr();
        El.exports = function (e, t) {
            for (var r = JT(t), n = tw.f, i = ew.f, o = 0; o < r.length; o++) {
                var a = r[o];
                ZT(e, a) || n(e, a, i(t, a))
            }
        }
    });
    var Il = c((lH, _l) => {
        var rw = Ut(),
            nw = ot(),
            iw = /#|\.prototype\./,
            Or = function (e, t) {
                var r = aw[ow(e)];
                return r == uw ? !0 : r == sw ? !1 : nw(t) ? rw(t) : !!t
            },
            ow = Or.normalize = function (e) {
                return String(e).replace(iw, ".").toLowerCase()
            },
            aw = Or.data = {},
            sw = Or.NATIVE = "N",
            uw = Or.POLYFILL = "P";
        _l.exports = Or
    });
    var wl = c((fH, Tl) => {
        var To = me(),
            cw = so().f,
            lw = yn(),
            fw = el(),
            dw = hn(),
            pw = bl(),
            gw = Il();
        Tl.exports = function (e, t) {
            var r = e.target,
                n = e.global,
                i = e.stat,
                o, a, s, u, l, h;
            if (n ? a = To : i ? a = To[r] || dw(r, {}) : a = (To[r] || {}).prototype, a)
                for (s in t) {
                    if (l = t[s], e.noTargetGet ? (h = cw(a, s), u = h && h.value) : u = a[s], o = gw(n ? s : r + (i ? "." : "#") + s, e.forced), !o && u !== void 0) {
                        if (typeof l == typeof u) continue;
                        pw(l, u)
                    } (e.sham || u && u.sham) && lw(l, "sham", !0), fw(a, s, l, e)
                }
        }
    });
    var Ol = c((dH, xl) => {
        var vw = Io(),
            hw = In();
        xl.exports = Object.keys || function (t) {
            return vw(t, hw)
        }
    });
    var Sl = c((pH, Al) => {
        var mw = Ct(),
            yw = wr(),
            Ew = Tr(),
            bw = _r(),
            _w = Ol();
        Al.exports = mw ? Object.defineProperties : function (t, r) {
            Ew(t);
            for (var n = bw(r), i = _w(r), o = i.length, a = 0, s; o > a;) yw.f(t, s = i[a++], n[s]);
            return t
        }
    });
    var Rl = c((gH, Cl) => {
        var Iw = Ir();
        Cl.exports = Iw("document", "documentElement")
    });
    var kl = c((vH, Dl) => {
        var Tw = Tr(),
            ww = Sl(),
            Ll = In(),
            xw = En(),
            Ow = Rl(),
            Aw = oo(),
            Sw = lo(),
            Nl = ">",
            Pl = "<",
            xo = "prototype",
            Oo = "script",
            Fl = Sw("IE_PROTO"),
            wo = function () { },
            Ml = function (e) {
                return Pl + Oo + Nl + e + Pl + "/" + Oo + Nl
            },
            ql = function (e) {
                e.write(Ml("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            },
            Cw = function () {
                var e = Aw("iframe"),
                    t = "java" + Oo + ":",
                    r;
                return e.style.display = "none", Ow.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Ml("document.F=Object")), r.close(), r.F
            },
            Tn, wn = function () {
                try {
                    Tn = new ActiveXObject("htmlfile")
                } catch { }
                wn = typeof document < "u" ? document.domain && Tn ? ql(Tn) : Cw() : ql(Tn);
                for (var e = Ll.length; e--;) delete wn[xo][Ll[e]];
                return wn()
            };
        xw[Fl] = !0;
        Dl.exports = Object.create || function (t, r) {
            var n;
            return t !== null ? (wo[xo] = Tw(t), n = new wo, wo[xo] = null, n[Fl] = t) : n = wn(), r === void 0 ? n : ww(n, r)
        }
    });
    var Vl = c((hH, Gl) => {
        var Rw = ro(),
            Lw = kl(),
            Nw = wr(),
            Ao = Rw("unscopables"),
            So = Array.prototype;
        So[Ao] == null && Nw.f(So, Ao, {
            configurable: !0,
            value: Lw(null)
        });
        Gl.exports = function (e) {
            So[Ao][e] = !0
        }
    });
    var Ul = c(() => {
        "use strict";
        var Pw = wl(),
            qw = bo().includes,
            Fw = Vl();
        Pw({
            target: "Array",
            proto: !0
        }, {
            includes: function (t) {
                return qw(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        Fw("includes")
    });
    var Hl = c((EH, Bl) => {
        var Mw = me(),
            Dw = Ye();
        Bl.exports = function (e, t) {
            return Dw(Mw[e].prototype[t])
        }
    });
    var Xl = c((bH, Wl) => {
        Ul();
        var kw = Hl();
        Wl.exports = kw("Array", "includes")
    });
    var zl = c((_H, jl) => {
        var Gw = Xl();
        jl.exports = Gw
    });
    var Yl = c((IH, Kl) => {
        var Vw = zl();
        Kl.exports = Vw
    });
    var Co = c((TH, $l) => {
        var Uw = typeof global == "object" && global && global.Object === Object && global;
        $l.exports = Uw
    });
    var Qe = c((wH, Ql) => {
        var Bw = Co(),
            Hw = typeof self == "object" && self && self.Object === Object && self,
            Ww = Bw || Hw || Function("return this")();
        Ql.exports = Ww
    });
    var Wt = c((xH, Zl) => {
        var Xw = Qe(),
            jw = Xw.Symbol;
        Zl.exports = jw
    });
    var rf = c((OH, tf) => {
        var Jl = Wt(),
            ef = Object.prototype,
            zw = ef.hasOwnProperty,
            Kw = ef.toString,
            Ar = Jl ? Jl.toStringTag : void 0;

        function Yw(e) {
            var t = zw.call(e, Ar),
                r = e[Ar];
            try {
                e[Ar] = void 0;
                var n = !0
            } catch { }
            var i = Kw.call(e);
            return n && (t ? e[Ar] = r : delete e[Ar]), i
        }
        tf.exports = Yw
    });
    var of = c((AH, nf) => {
        var $w = Object.prototype,
            Qw = $w.toString;

        function Zw(e) {
            return Qw.call(e)
        }
        nf.exports = Zw
    });
    var _t = c((SH, uf) => {
        var af = Wt(),
            Jw = rf(),
            e0 = of(),
            t0 = "[object Null]",
            r0 = "[object Undefined]",
            sf = af ? af.toStringTag : void 0;

        function n0(e) {
            return e == null ? e === void 0 ? r0 : t0 : sf && sf in Object(e) ? Jw(e) : e0(e)
        }
        uf.exports = n0
    });
    var Ro = c((CH, cf) => {
        function i0(e, t) {
            return function (r) {
                return e(t(r))
            }
        }
        cf.exports = i0
    });
    var Lo = c((RH, lf) => {
        var o0 = Ro(),
            a0 = o0(Object.getPrototypeOf, Object);
        lf.exports = a0
    });
    var dt = c((LH, ff) => {
        function s0(e) {
            return e != null && typeof e == "object"
        }
        ff.exports = s0
    });
    var No = c((NH, pf) => {
        var u0 = _t(),
            c0 = Lo(),
            l0 = dt(),
            f0 = "[object Object]",
            d0 = Function.prototype,
            p0 = Object.prototype,
            df = d0.toString,
            g0 = p0.hasOwnProperty,
            v0 = df.call(Object);

        function h0(e) {
            if (!l0(e) || u0(e) != f0) return !1;
            var t = c0(e);
            if (t === null) return !0;
            var r = g0.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && df.call(r) == v0
        }
        pf.exports = h0
    });
    var gf = c(Po => {
        "use strict";
        Object.defineProperty(Po, "__esModule", {
            value: !0
        });
        Po.default = m0;

        function m0(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
        }
    });
    var vf = c((Fo, qo) => {
        "use strict";
        Object.defineProperty(Fo, "__esModule", {
            value: !0
        });
        var y0 = gf(),
            E0 = b0(y0);

        function b0(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Xt;
        typeof self < "u" ? Xt = self : typeof window < "u" ? Xt = window : typeof global < "u" ? Xt = global : typeof qo < "u" ? Xt = qo : Xt = Function("return this")();
        var _0 = (0, E0.default)(Xt);
        Fo.default = _0
    });
    var Mo = c(Sr => {
        "use strict";
        Sr.__esModule = !0;
        Sr.ActionTypes = void 0;
        Sr.default = Ef;
        var I0 = No(),
            T0 = yf(I0),
            w0 = vf(),
            hf = yf(w0);

        function yf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var mf = Sr.ActionTypes = {
            INIT: "@@redux/INIT"
        };

        function Ef(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
                if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
                return r(Ef)(e, t)
            }
            if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
            var i = e,
                o = t,
                a = [],
                s = a,
                u = !1;

            function l() {
                s === a && (s = a.slice())
            }

            function h() {
                return o
            }

            function d(b) {
                if (typeof b != "function") throw new Error("Expected listener to be a function.");
                var w = !0;
                return l(), s.push(b),
                    function () {
                        if (w) {
                            w = !1, l();
                            var L = s.indexOf(b);
                            s.splice(L, 1)
                        }
                    }
            }

            function v(b) {
                if (!(0, T0.default)(b)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof b.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u) throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0, o = i(o, b)
                } finally {
                    u = !1
                }
                for (var w = a = s, I = 0; I < w.length; I++) w[I]();
                return b
            }

            function p(b) {
                if (typeof b != "function") throw new Error("Expected the nextReducer to be a function.");
                i = b, v({
                    type: mf.INIT
                })
            }

            function g() {
                var b, w = d;
                return b = {
                    subscribe: function (L) {
                        if (typeof L != "object") throw new TypeError("Expected the observer to be an object.");

                        function A() {
                            L.next && L.next(h())
                        }
                        A();
                        var q = w(A);
                        return {
                            unsubscribe: q
                        }
                    }
                }, b[hf.default] = function () {
                    return this
                }, b
            }
            return v({
                type: mf.INIT
            }), n = {
                dispatch: v,
                subscribe: d,
                getState: h,
                replaceReducer: p
            }, n[hf.default] = g, n
        }
    });
    var ko = c(Do => {
        "use strict";
        Do.__esModule = !0;
        Do.default = x0;

        function x0(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch { }
        }
    });
    var If = c(Go => {
        "use strict";
        Go.__esModule = !0;
        Go.default = R0;
        var bf = Mo(),
            O0 = No(),
            MH = _f(O0),
            A0 = ko(),
            DH = _f(A0);

        function _f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function S0(e, t) {
            var r = t && t.type,
                n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }

        function C0(e) {
            Object.keys(e).forEach(function (t) {
                var r = e[t],
                    n = r(void 0, {
                        type: bf.ActionTypes.INIT
                    });
                if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                    type: i
                }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + bf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }

        function R0(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1) var a;
            var s;
            try {
                C0(r)
            } catch (u) {
                s = u
            }
            return function () {
                var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
                    h = arguments[1];
                if (s) throw s;
                if (!1) var d;
                for (var v = !1, p = {}, g = 0; g < o.length; g++) {
                    var b = o[g],
                        w = r[b],
                        I = l[b],
                        L = w(I, h);
                    if (typeof L > "u") {
                        var A = S0(b, h);
                        throw new Error(A)
                    }
                    p[b] = L, v = v || L !== I
                }
                return v ? p : l
            }
        }
    });
    var wf = c(Vo => {
        "use strict";
        Vo.__esModule = !0;
        Vo.default = L0;

        function Tf(e, t) {
            return function () {
                return t(e.apply(void 0, arguments))
            }
        }

        function L0(e, t) {
            if (typeof e == "function") return Tf(e, t);
            if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i],
                    a = e[o];
                typeof a == "function" && (n[o] = Tf(a, t))
            }
            return n
        }
    });
    var Bo = c(Uo => {
        "use strict";
        Uo.__esModule = !0;
        Uo.default = N0;

        function N0() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            if (t.length === 0) return function (o) {
                return o
            };
            if (t.length === 1) return t[0];
            var n = t[t.length - 1],
                i = t.slice(0, -1);
            return function () {
                return i.reduceRight(function (o, a) {
                    return a(o)
                }, n.apply(void 0, arguments))
            }
        }
    });
    var xf = c(Ho => {
        "use strict";
        Ho.__esModule = !0;
        var P0 = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        };
        Ho.default = D0;
        var q0 = Bo(),
            F0 = M0(q0);

        function M0(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function D0() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return function (n) {
                return function (i, o, a) {
                    var s = n(i, o, a),
                        u = s.dispatch,
                        l = [],
                        h = {
                            getState: s.getState,
                            dispatch: function (v) {
                                return u(v)
                            }
                        };
                    return l = t.map(function (d) {
                        return d(h)
                    }), u = F0.default.apply(void 0, l)(s.dispatch), P0({}, s, {
                        dispatch: u
                    })
                }
            }
        }
    });
    var Wo = c(He => {
        "use strict";
        He.__esModule = !0;
        He.compose = He.applyMiddleware = He.bindActionCreators = He.combineReducers = He.createStore = void 0;
        var k0 = Mo(),
            G0 = jt(k0),
            V0 = If(),
            U0 = jt(V0),
            B0 = wf(),
            H0 = jt(B0),
            W0 = xf(),
            X0 = jt(W0),
            j0 = Bo(),
            z0 = jt(j0),
            K0 = ko(),
            BH = jt(K0);

        function jt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        He.createStore = G0.default;
        He.combineReducers = U0.default;
        He.bindActionCreators = H0.default;
        He.applyMiddleware = X0.default;
        He.compose = z0.default
    });
    var Ze, Xo, at, Y0, $0, xn, Q0, jo = he(() => {
        "use strict";
        Ze = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        }, Xo = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        }, at = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        }, Y0 = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        }, $0 = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        }, xn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        }, Q0 = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    });
    var Ge, Z0, On = he(() => {
        "use strict";
        Ge = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        }, Z0 = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    });
    var J0, Of = he(() => {
        "use strict";
        J0 = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    });
    var ex, tx, rx, nx, ix, ox, ax, zo, Af = he(() => {
        "use strict";
        On();
        ({
            TRANSFORM_MOVE: ex,
            TRANSFORM_SCALE: tx,
            TRANSFORM_ROTATE: rx,
            TRANSFORM_SKEW: nx,
            STYLE_SIZE: ix,
            STYLE_FILTER: ox,
            STYLE_FONT_VARIATION: ax
        } = Ge), zo = {
            [ex]: !0,
            [tx]: !0,
            [rx]: !0,
            [nx]: !0,
            [ix]: !0,
            [ox]: !0,
            [ax]: !0
        }
    });
    var Te = {};
    De(Te, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Tx,
        IX2_ANIMATION_FRAME_CHANGED: () => mx,
        IX2_CLEAR_REQUESTED: () => gx,
        IX2_ELEMENT_STATE_CHANGED: () => Ix,
        IX2_EVENT_LISTENER_ADDED: () => vx,
        IX2_EVENT_STATE_CHANGED: () => hx,
        IX2_INSTANCE_ADDED: () => Ex,
        IX2_INSTANCE_REMOVED: () => _x,
        IX2_INSTANCE_STARTED: () => bx,
        IX2_MEDIA_QUERIES_DEFINED: () => xx,
        IX2_PARAMETER_CHANGED: () => yx,
        IX2_PLAYBACK_REQUESTED: () => dx,
        IX2_PREVIEW_REQUESTED: () => fx,
        IX2_RAW_DATA_IMPORTED: () => sx,
        IX2_SESSION_INITIALIZED: () => ux,
        IX2_SESSION_STARTED: () => cx,
        IX2_SESSION_STOPPED: () => lx,
        IX2_STOP_REQUESTED: () => px,
        IX2_TEST_FRAME_RENDERED: () => Ox,
        IX2_VIEWPORT_WIDTH_CHANGED: () => wx
    });
    var sx, ux, cx, lx, fx, dx, px, gx, vx, hx, mx, yx, Ex, bx, _x, Ix, Tx, wx, xx, Ox, Sf = he(() => {
        "use strict";
        sx = "IX2_RAW_DATA_IMPORTED", ux = "IX2_SESSION_INITIALIZED", cx = "IX2_SESSION_STARTED", lx = "IX2_SESSION_STOPPED", fx = "IX2_PREVIEW_REQUESTED", dx = "IX2_PLAYBACK_REQUESTED", px = "IX2_STOP_REQUESTED", gx = "IX2_CLEAR_REQUESTED", vx = "IX2_EVENT_LISTENER_ADDED", hx = "IX2_EVENT_STATE_CHANGED", mx = "IX2_ANIMATION_FRAME_CHANGED", yx = "IX2_PARAMETER_CHANGED", Ex = "IX2_INSTANCE_ADDED", bx = "IX2_INSTANCE_STARTED", _x = "IX2_INSTANCE_REMOVED", Ix = "IX2_ELEMENT_STATE_CHANGED", Tx = "IX2_ACTION_LIST_PLAYBACK_CHANGED", wx = "IX2_VIEWPORT_WIDTH_CHANGED", xx = "IX2_MEDIA_QUERIES_DEFINED", Ox = "IX2_TEST_FRAME_RENDERED"
    });
    var Ce = {};
    De(Ce, {
        ABSTRACT_NODE: () => wO,
        AUTO: () => pO,
        BACKGROUND: () => sO,
        BACKGROUND_COLOR: () => aO,
        BAR_DELIMITER: () => hO,
        BORDER_COLOR: () => uO,
        BOUNDARY_SELECTOR: () => Lx,
        CHILDREN: () => mO,
        COLON_DELIMITER: () => vO,
        COLOR: () => cO,
        COMMA_DELIMITER: () => gO,
        CONFIG_UNIT: () => Gx,
        CONFIG_VALUE: () => Fx,
        CONFIG_X_UNIT: () => Mx,
        CONFIG_X_VALUE: () => Nx,
        CONFIG_Y_UNIT: () => Dx,
        CONFIG_Y_VALUE: () => Px,
        CONFIG_Z_UNIT: () => kx,
        CONFIG_Z_VALUE: () => qx,
        DISPLAY: () => lO,
        FILTER: () => rO,
        FLEX: () => fO,
        FONT_VARIATION_SETTINGS: () => nO,
        HEIGHT: () => oO,
        HTML_ELEMENT: () => IO,
        IMMEDIATE_CHILDREN: () => yO,
        IX2_ID_DELIMITER: () => Ax,
        OPACITY: () => tO,
        PARENT: () => bO,
        PLAIN_OBJECT: () => TO,
        PRESERVE_3D: () => _O,
        RENDER_GENERAL: () => OO,
        RENDER_PLUGIN: () => SO,
        RENDER_STYLE: () => AO,
        RENDER_TRANSFORM: () => xO,
        ROTATE_X: () => Yx,
        ROTATE_Y: () => $x,
        ROTATE_Z: () => Qx,
        SCALE_3D: () => Kx,
        SCALE_X: () => Xx,
        SCALE_Y: () => jx,
        SCALE_Z: () => zx,
        SIBLINGS: () => EO,
        SKEW: () => Zx,
        SKEW_X: () => Jx,
        SKEW_Y: () => eO,
        TRANSFORM: () => Vx,
        TRANSLATE_3D: () => Wx,
        TRANSLATE_X: () => Ux,
        TRANSLATE_Y: () => Bx,
        TRANSLATE_Z: () => Hx,
        WF_PAGE: () => Sx,
        WIDTH: () => iO,
        WILL_CHANGE: () => dO,
        W_MOD_IX: () => Rx,
        W_MOD_JS: () => Cx
    });
    var Ax, Sx, Cx, Rx, Lx, Nx, Px, qx, Fx, Mx, Dx, kx, Gx, Vx, Ux, Bx, Hx, Wx, Xx, jx, zx, Kx, Yx, $x, Qx, Zx, Jx, eO, tO, rO, nO, iO, oO, aO, sO, uO, cO, lO, fO, dO, pO, gO, vO, hO, mO, yO, EO, bO, _O, IO, TO, wO, xO, OO, AO, SO, Cf = he(() => {
        "use strict";
        Ax = "|", Sx = "data-wf-page", Cx = "w-mod-js", Rx = "w-mod-ix", Lx = ".w-dyn-item", Nx = "xValue", Px = "yValue", qx = "zValue", Fx = "value", Mx = "xUnit", Dx = "yUnit", kx = "zUnit", Gx = "unit", Vx = "transform", Ux = "translateX", Bx = "translateY", Hx = "translateZ", Wx = "translate3d", Xx = "scaleX", jx = "scaleY", zx = "scaleZ", Kx = "scale3d", Yx = "rotateX", $x = "rotateY", Qx = "rotateZ", Zx = "skew", Jx = "skewX", eO = "skewY", tO = "opacity", rO = "filter", nO = "font-variation-settings", iO = "width", oO = "height", aO = "backgroundColor", sO = "background", uO = "borderColor", cO = "color", lO = "display", fO = "flex", dO = "willChange", pO = "AUTO", gO = ",", vO = ":", hO = "|", mO = "CHILDREN", yO = "IMMEDIATE_CHILDREN", EO = "SIBLINGS", bO = "PARENT", _O = "preserve-3d", IO = "HTML_ELEMENT", TO = "PLAIN_OBJECT", wO = "ABSTRACT_NODE", xO = "RENDER_TRANSFORM", OO = "RENDER_GENERAL", AO = "RENDER_STYLE", SO = "RENDER_PLUGIN"
    });
    var Rf = {};
    De(Rf, {
        ActionAppliesTo: () => Z0,
        ActionTypeConsts: () => Ge,
        EventAppliesTo: () => Xo,
        EventBasedOn: () => at,
        EventContinuousMouseAxes: () => Y0,
        EventLimitAffectedElements: () => $0,
        EventTypeConsts: () => Ze,
        IX2EngineActionTypes: () => Te,
        IX2EngineConstants: () => Ce,
        InteractionTypeConsts: () => J0,
        QuickEffectDirectionConsts: () => Q0,
        QuickEffectIds: () => xn,
        ReducedMotionTypes: () => zo
    });
    var Ve = he(() => {
        "use strict";
        jo();
        On();
        Of();
        Af();
        Sf();
        Cf();
        On();
        jo()
    });
    var CO, Lf, Nf = he(() => {
        "use strict";
        Ve();
        ({
            IX2_RAW_DATA_IMPORTED: CO
        } = Te), Lf = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case CO:
                    return t.payload.ixData || Object.freeze({});
                default:
                    return e
            }
        }
    });
    var zt = c(Ee => {
        "use strict";
        Object.defineProperty(Ee, "__esModule", {
            value: !0
        });
        var RO = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
            return typeof e
        } : function (e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        Ee.clone = Sn;
        Ee.addLast = Ff;
        Ee.addFirst = Mf;
        Ee.removeLast = Df;
        Ee.removeFirst = kf;
        Ee.insert = Gf;
        Ee.removeAt = Vf;
        Ee.replaceAt = Uf;
        Ee.getIn = Cn;
        Ee.set = Rn;
        Ee.setIn = Ln;
        Ee.update = Hf;
        Ee.updateIn = Wf;
        Ee.merge = Xf;
        Ee.mergeDeep = jf;
        Ee.mergeIn = zf;
        Ee.omit = Kf;
        Ee.addDefaults = Yf;
        var Pf = "INVALID_ARGS";

        function qf(e) {
            throw new Error(e)
        }

        function Ko(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var LO = {}.hasOwnProperty;

        function Sn(e) {
            if (Array.isArray(e)) return e.slice();
            for (var t = Ko(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }

        function Ue(e, t, r) {
            var n = r;
            n == null && qf(Pf);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s];
            for (var u = 0; u < a.length; u++) {
                var l = a[u];
                if (l != null) {
                    var h = Ko(l);
                    if (h.length)
                        for (var d = 0; d <= h.length; d++) {
                            var v = h[d];
                            if (!(e && n[v] !== void 0)) {
                                var p = l[v];
                                t && An(n[v]) && An(p) && (p = Ue(e, t, n[v], p)), !(p === void 0 || p === n[v]) && (i || (i = !0, n = Sn(n)), n[v] = p)
                            }
                        }
                }
            }
            return n
        }

        function An(e) {
            var t = typeof e > "u" ? "undefined" : RO(e);
            return e != null && (t === "object" || t === "function")
        }

        function Ff(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }

        function Mf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }

        function Df(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }

        function kf(e) {
            return e.length ? e.slice(1) : e
        }

        function Gf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }

        function Vf(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }

        function Uf(e, t, r) {
            if (e[t] === r) return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
            return i[t] = r, i
        }

        function Cn(e, t) {
            if (!Array.isArray(t) && qf(Pf), e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r?.[i], r === void 0) return r
                }
                return r
            }
        }

        function Rn(e, t, r) {
            var n = typeof t == "number" ? [] : {},
                i = e ?? n;
            if (i[t] === r) return i;
            var o = Sn(i);
            return o[t] = r, o
        }

        function Bf(e, t, r, n) {
            var i = void 0,
                o = t[n];
            if (n === t.length - 1) i = r;
            else {
                var a = An(e) && An(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Bf(a, t, r, n + 1)
            }
            return Rn(e, o, i)
        }

        function Ln(e, t, r) {
            return t.length ? Bf(e, t, r, 0) : r
        }

        function Hf(e, t, r) {
            var n = e?.[t],
                i = r(n);
            return Rn(e, t, i)
        }

        function Wf(e, t, r) {
            var n = Cn(e, t),
                i = r(n);
            return Ln(e, t, i)
        }

        function Xf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? Ue.call.apply(Ue, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Ue(!1, !1, e, t, r, n, i, o)
        }

        function jf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? Ue.call.apply(Ue, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Ue(!1, !0, e, t, r, n, i, o)
        }

        function zf(e, t, r, n, i, o, a) {
            var s = Cn(e, t);
            s == null && (s = {});
            for (var u = void 0, l = arguments.length, h = Array(l > 7 ? l - 7 : 0), d = 7; d < l; d++) h[d - 7] = arguments[d];
            return h.length ? u = Ue.call.apply(Ue, [null, !1, !1, s, r, n, i, o, a].concat(h)) : u = Ue(!1, !1, s, r, n, i, o, a), Ln(e, t, u)
        }

        function Kf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if (LO.call(e, r[i])) {
                    n = !0;
                    break
                } if (!n) return e;
            for (var o = {}, a = Ko(e), s = 0; s < a.length; s++) {
                var u = a[s];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }

        function Yf(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
            return s.length ? Ue.call.apply(Ue, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Ue(!0, !1, e, t, r, n, i, o)
        }
        var NO = {
            clone: Sn,
            addLast: Ff,
            addFirst: Mf,
            removeLast: Df,
            removeFirst: kf,
            insert: Gf,
            removeAt: Vf,
            replaceAt: Uf,
            getIn: Cn,
            set: Rn,
            setIn: Ln,
            update: Hf,
            updateIn: Wf,
            merge: Xf,
            mergeDeep: jf,
            mergeIn: zf,
            omit: Kf,
            addDefaults: Yf
        };
        Ee.default = NO
    });
    var Qf, PO, qO, FO, MO, DO, $f, Zf, Jf = he(() => {
        "use strict";
        Ve();
        Qf = le(zt()), {
            IX2_PREVIEW_REQUESTED: PO,
            IX2_PLAYBACK_REQUESTED: qO,
            IX2_STOP_REQUESTED: FO,
            IX2_CLEAR_REQUESTED: MO
        } = Te, DO = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        }, $f = Object.create(null, {
            [PO]: {
                value: "preview"
            },
            [qO]: {
                value: "playback"
            },
            [FO]: {
                value: "stop"
            },
            [MO]: {
                value: "clear"
            }
        }), Zf = (e = DO, t) => {
            if (t.type in $f) {
                let r = [$f[t.type]];
                return (0, Qf.setIn)(e, [r], {
                    ...t.payload
                })
            }
            return e
        }
    });
    var Ne, kO, GO, VO, UO, BO, HO, WO, XO, jO, zO, ed, KO, td, rd = he(() => {
        "use strict";
        Ve();
        Ne = le(zt()), {
            IX2_SESSION_INITIALIZED: kO,
            IX2_SESSION_STARTED: GO,
            IX2_TEST_FRAME_RENDERED: VO,
            IX2_SESSION_STOPPED: UO,
            IX2_EVENT_LISTENER_ADDED: BO,
            IX2_EVENT_STATE_CHANGED: HO,
            IX2_ANIMATION_FRAME_CHANGED: WO,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: XO,
            IX2_VIEWPORT_WIDTH_CHANGED: jO,
            IX2_MEDIA_QUERIES_DEFINED: zO
        } = Te, ed = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        }, KO = 20, td = (e = ed, t) => {
            switch (t.type) {
                case kO: {
                    let {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    } = t.payload;
                    return (0, Ne.merge)(e, {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    })
                }
                case GO:
                    return (0, Ne.set)(e, "active", !0);
                case VO: {
                    let {
                        payload: {
                            step: r = KO
                        }
                    } = t;
                    return (0, Ne.set)(e, "tick", e.tick + r)
                }
                case UO:
                    return ed;
                case WO: {
                    let {
                        payload: {
                            now: r
                        }
                    } = t;
                    return (0, Ne.set)(e, "tick", r)
                }
                case BO: {
                    let r = (0, Ne.addLast)(e.eventListeners, t.payload);
                    return (0, Ne.set)(e, "eventListeners", r)
                }
                case HO: {
                    let {
                        stateKey: r,
                        newState: n
                    } = t.payload;
                    return (0, Ne.setIn)(e, ["eventState", r], n)
                }
                case XO: {
                    let {
                        actionListId: r,
                        isPlaying: n
                    } = t.payload;
                    return (0, Ne.setIn)(e, ["playbackState", r], n)
                }
                case jO: {
                    let {
                        width: r,
                        mediaQueries: n
                    } = t.payload, i = n.length, o = null;
                    for (let a = 0; a < i; a++) {
                        let {
                            key: s,
                            min: u,
                            max: l
                        } = n[a];
                        if (r >= u && r <= l) {
                            o = s;
                            break
                        }
                    }
                    return (0, Ne.merge)(e, {
                        viewportWidth: r,
                        mediaQueryKey: o
                    })
                }
                case zO:
                    return (0, Ne.set)(e, "hasDefinedMediaQueries", !0);
                default:
                    return e
            }
        }
    });
    var id = c((u5, nd) => {
        function YO() {
            this.__data__ = [], this.size = 0
        }
        nd.exports = YO
    });
    var Nn = c((c5, od) => {
        function $O(e, t) {
            return e === t || e !== e && t !== t
        }
        od.exports = $O
    });
    var Cr = c((l5, ad) => {
        var QO = Nn();

        function ZO(e, t) {
            for (var r = e.length; r--;)
                if (QO(e[r][0], t)) return r;
            return -1
        }
        ad.exports = ZO
    });
    var ud = c((f5, sd) => {
        var JO = Cr(),
            eA = Array.prototype,
            tA = eA.splice;

        function rA(e) {
            var t = this.__data__,
                r = JO(t, e);
            if (r < 0) return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : tA.call(t, r, 1), --this.size, !0
        }
        sd.exports = rA
    });
    var ld = c((d5, cd) => {
        var nA = Cr();

        function iA(e) {
            var t = this.__data__,
                r = nA(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        cd.exports = iA
    });
    var dd = c((p5, fd) => {
        var oA = Cr();

        function aA(e) {
            return oA(this.__data__, e) > -1
        }
        fd.exports = aA
    });
    var gd = c((g5, pd) => {
        var sA = Cr();

        function uA(e, t) {
            var r = this.__data__,
                n = sA(r, e);
            return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
        }
        pd.exports = uA
    });
    var Rr = c((v5, vd) => {
        var cA = id(),
            lA = ud(),
            fA = ld(),
            dA = dd(),
            pA = gd();

        function Kt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Kt.prototype.clear = cA;
        Kt.prototype.delete = lA;
        Kt.prototype.get = fA;
        Kt.prototype.has = dA;
        Kt.prototype.set = pA;
        vd.exports = Kt
    });
    var md = c((h5, hd) => {
        var gA = Rr();

        function vA() {
            this.__data__ = new gA, this.size = 0
        }
        hd.exports = vA
    });
    var Ed = c((m5, yd) => {
        function hA(e) {
            var t = this.__data__,
                r = t.delete(e);
            return this.size = t.size, r
        }
        yd.exports = hA
    });
    var _d = c((y5, bd) => {
        function mA(e) {
            return this.__data__.get(e)
        }
        bd.exports = mA
    });
    var Td = c((E5, Id) => {
        function yA(e) {
            return this.__data__.has(e)
        }
        Id.exports = yA
    });
    var st = c((b5, wd) => {
        function EA(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        wd.exports = EA
    });
    var Yo = c((_5, xd) => {
        var bA = _t(),
            _A = st(),
            IA = "[object AsyncFunction]",
            TA = "[object Function]",
            wA = "[object GeneratorFunction]",
            xA = "[object Proxy]";

        function OA(e) {
            if (!_A(e)) return !1;
            var t = bA(e);
            return t == TA || t == wA || t == IA || t == xA
        }
        xd.exports = OA
    });
    var Ad = c((I5, Od) => {
        var AA = Qe(),
            SA = AA["__core-js_shared__"];
        Od.exports = SA
    });
    var Rd = c((T5, Cd) => {
        var $o = Ad(),
            Sd = function () {
                var e = /[^.]+$/.exec($o && $o.keys && $o.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }();

        function CA(e) {
            return !!Sd && Sd in e
        }
        Cd.exports = CA
    });
    var Qo = c((w5, Ld) => {
        var RA = Function.prototype,
            LA = RA.toString;

        function NA(e) {
            if (e != null) {
                try {
                    return LA.call(e)
                } catch { }
                try {
                    return e + ""
                } catch { }
            }
            return ""
        }
        Ld.exports = NA
    });
    var Pd = c((x5, Nd) => {
        var PA = Yo(),
            qA = Rd(),
            FA = st(),
            MA = Qo(),
            DA = /[\\^$.*+?()[\]{}|]/g,
            kA = /^\[object .+?Constructor\]$/,
            GA = Function.prototype,
            VA = Object.prototype,
            UA = GA.toString,
            BA = VA.hasOwnProperty,
            HA = RegExp("^" + UA.call(BA).replace(DA, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

        function WA(e) {
            if (!FA(e) || qA(e)) return !1;
            var t = PA(e) ? HA : kA;
            return t.test(MA(e))
        }
        Nd.exports = WA
    });
    var Fd = c((O5, qd) => {
        function XA(e, t) {
            return e?.[t]
        }
        qd.exports = XA
    });
    var It = c((A5, Md) => {
        var jA = Pd(),
            zA = Fd();

        function KA(e, t) {
            var r = zA(e, t);
            return jA(r) ? r : void 0
        }
        Md.exports = KA
    });
    var Pn = c((S5, Dd) => {
        var YA = It(),
            $A = Qe(),
            QA = YA($A, "Map");
        Dd.exports = QA
    });
    var Lr = c((C5, kd) => {
        var ZA = It(),
            JA = ZA(Object, "create");
        kd.exports = JA
    });
    var Ud = c((R5, Vd) => {
        var Gd = Lr();

        function eS() {
            this.__data__ = Gd ? Gd(null) : {}, this.size = 0
        }
        Vd.exports = eS
    });
    var Hd = c((L5, Bd) => {
        function tS(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0, t
        }
        Bd.exports = tS
    });
    var Xd = c((N5, Wd) => {
        var rS = Lr(),
            nS = "__lodash_hash_undefined__",
            iS = Object.prototype,
            oS = iS.hasOwnProperty;

        function aS(e) {
            var t = this.__data__;
            if (rS) {
                var r = t[e];
                return r === nS ? void 0 : r
            }
            return oS.call(t, e) ? t[e] : void 0
        }
        Wd.exports = aS
    });
    var zd = c((P5, jd) => {
        var sS = Lr(),
            uS = Object.prototype,
            cS = uS.hasOwnProperty;

        function lS(e) {
            var t = this.__data__;
            return sS ? t[e] !== void 0 : cS.call(t, e)
        }
        jd.exports = lS
    });
    var Yd = c((q5, Kd) => {
        var fS = Lr(),
            dS = "__lodash_hash_undefined__";

        function pS(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1, r[e] = fS && t === void 0 ? dS : t, this
        }
        Kd.exports = pS
    });
    var Qd = c((F5, $d) => {
        var gS = Ud(),
            vS = Hd(),
            hS = Xd(),
            mS = zd(),
            yS = Yd();

        function Yt(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Yt.prototype.clear = gS;
        Yt.prototype.delete = vS;
        Yt.prototype.get = hS;
        Yt.prototype.has = mS;
        Yt.prototype.set = yS;
        $d.exports = Yt
    });
    var ep = c((M5, Jd) => {
        var Zd = Qd(),
            ES = Rr(),
            bS = Pn();

        function _S() {
            this.size = 0, this.__data__ = {
                hash: new Zd,
                map: new (bS || ES),
                string: new Zd
            }
        }
        Jd.exports = _S
    });
    var rp = c((D5, tp) => {
        function IS(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        tp.exports = IS
    });
    var Nr = c((k5, np) => {
        var TS = rp();

        function wS(e, t) {
            var r = e.__data__;
            return TS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        np.exports = wS
    });
    var op = c((G5, ip) => {
        var xS = Nr();

        function OS(e) {
            var t = xS(this, e).delete(e);
            return this.size -= t ? 1 : 0, t
        }
        ip.exports = OS
    });
    var sp = c((V5, ap) => {
        var AS = Nr();

        function SS(e) {
            return AS(this, e).get(e)
        }
        ap.exports = SS
    });
    var cp = c((U5, up) => {
        var CS = Nr();

        function RS(e) {
            return CS(this, e).has(e)
        }
        up.exports = RS
    });
    var fp = c((B5, lp) => {
        var LS = Nr();

        function NS(e, t) {
            var r = LS(this, e),
                n = r.size;
            return r.set(e, t), this.size += r.size == n ? 0 : 1, this
        }
        lp.exports = NS
    });
    var qn = c((H5, dp) => {
        var PS = ep(),
            qS = op(),
            FS = sp(),
            MS = cp(),
            DS = fp();

        function $t(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r;) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        $t.prototype.clear = PS;
        $t.prototype.delete = qS;
        $t.prototype.get = FS;
        $t.prototype.has = MS;
        $t.prototype.set = DS;
        dp.exports = $t
    });
    var gp = c((W5, pp) => {
        var kS = Rr(),
            GS = Pn(),
            VS = qn(),
            US = 200;

        function BS(e, t) {
            var r = this.__data__;
            if (r instanceof kS) {
                var n = r.__data__;
                if (!GS || n.length < US - 1) return n.push([e, t]), this.size = ++r.size, this;
                r = this.__data__ = new VS(n)
            }
            return r.set(e, t), this.size = r.size, this
        }
        pp.exports = BS
    });
    var Zo = c((X5, vp) => {
        var HS = Rr(),
            WS = md(),
            XS = Ed(),
            jS = _d(),
            zS = Td(),
            KS = gp();

        function Qt(e) {
            var t = this.__data__ = new HS(e);
            this.size = t.size
        }
        Qt.prototype.clear = WS;
        Qt.prototype.delete = XS;
        Qt.prototype.get = jS;
        Qt.prototype.has = zS;
        Qt.prototype.set = KS;
        vp.exports = Qt
    });
    var mp = c((j5, hp) => {
        var YS = "__lodash_hash_undefined__";

        function $S(e) {
            return this.__data__.set(e, YS), this
        }
        hp.exports = $S
    });
    var Ep = c((z5, yp) => {
        function QS(e) {
            return this.__data__.has(e)
        }
        yp.exports = QS
    });
    var _p = c((K5, bp) => {
        var ZS = qn(),
            JS = mp(),
            eC = Ep();

        function Fn(e) {
            var t = -1,
                r = e == null ? 0 : e.length;
            for (this.__data__ = new ZS; ++t < r;) this.add(e[t])
        }
        Fn.prototype.add = Fn.prototype.push = JS;
        Fn.prototype.has = eC;
        bp.exports = Fn
    });
    var Tp = c((Y5, Ip) => {
        function tC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
                if (t(e[r], r, e)) return !0;
            return !1
        }
        Ip.exports = tC
    });
    var xp = c(($5, wp) => {
        function rC(e, t) {
            return e.has(t)
        }
        wp.exports = rC
    });
    var Jo = c((Q5, Op) => {
        var nC = _p(),
            iC = Tp(),
            oC = xp(),
            aC = 1,
            sC = 2;

        function uC(e, t, r, n, i, o) {
            var a = r & aC,
                s = e.length,
                u = t.length;
            if (s != u && !(a && u > s)) return !1;
            var l = o.get(e),
                h = o.get(t);
            if (l && h) return l == t && h == e;
            var d = -1,
                v = !0,
                p = r & sC ? new nC : void 0;
            for (o.set(e, t), o.set(t, e); ++d < s;) {
                var g = e[d],
                    b = t[d];
                if (n) var w = a ? n(b, g, d, t, e, o) : n(g, b, d, e, t, o);
                if (w !== void 0) {
                    if (w) continue;
                    v = !1;
                    break
                }
                if (p) {
                    if (!iC(t, function (I, L) {
                        if (!oC(p, L) && (g === I || i(g, I, r, n, o))) return p.push(L)
                    })) {
                        v = !1;
                        break
                    }
                } else if (!(g === b || i(g, b, r, n, o))) {
                    v = !1;
                    break
                }
            }
            return o.delete(e), o.delete(t), v
        }
        Op.exports = uC
    });
    var Sp = c((Z5, Ap) => {
        var cC = Qe(),
            lC = cC.Uint8Array;
        Ap.exports = lC
    });
    var Rp = c((J5, Cp) => {
        function fC(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function (n, i) {
                r[++t] = [i, n]
            }), r
        }
        Cp.exports = fC
    });
    var Np = c((eW, Lp) => {
        function dC(e) {
            var t = -1,
                r = Array(e.size);
            return e.forEach(function (n) {
                r[++t] = n
            }), r
        }
        Lp.exports = dC
    });
    var Dp = c((tW, Mp) => {
        var Pp = Wt(),
            qp = Sp(),
            pC = Nn(),
            gC = Jo(),
            vC = Rp(),
            hC = Np(),
            mC = 1,
            yC = 2,
            EC = "[object Boolean]",
            bC = "[object Date]",
            _C = "[object Error]",
            IC = "[object Map]",
            TC = "[object Number]",
            wC = "[object RegExp]",
            xC = "[object Set]",
            OC = "[object String]",
            AC = "[object Symbol]",
            SC = "[object ArrayBuffer]",
            CC = "[object DataView]",
            Fp = Pp ? Pp.prototype : void 0,
            ea = Fp ? Fp.valueOf : void 0;

        function RC(e, t, r, n, i, o, a) {
            switch (r) {
                case CC:
                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                    e = e.buffer, t = t.buffer;
                case SC:
                    return !(e.byteLength != t.byteLength || !o(new qp(e), new qp(t)));
                case EC:
                case bC:
                case TC:
                    return pC(+e, +t);
                case _C:
                    return e.name == t.name && e.message == t.message;
                case wC:
                case OC:
                    return e == t + "";
                case IC:
                    var s = vC;
                case xC:
                    var u = n & mC;
                    if (s || (s = hC), e.size != t.size && !u) return !1;
                    var l = a.get(e);
                    if (l) return l == t;
                    n |= yC, a.set(e, t);
                    var h = gC(s(e), s(t), n, i, o, a);
                    return a.delete(e), h;
                case AC:
                    if (ea) return ea.call(e) == ea.call(t)
            }
            return !1
        }
        Mp.exports = RC
    });
    var Mn = c((rW, kp) => {
        function LC(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
            return e
        }
        kp.exports = LC
    });
    var we = c((nW, Gp) => {
        var NC = Array.isArray;
        Gp.exports = NC
    });
    var ta = c((iW, Vp) => {
        var PC = Mn(),
            qC = we();

        function FC(e, t, r) {
            var n = t(e);
            return qC(e) ? n : PC(n, r(e))
        }
        Vp.exports = FC
    });
    var Bp = c((oW, Up) => {
        function MC(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a)
            }
            return o
        }
        Up.exports = MC
    });
    var ra = c((aW, Hp) => {
        function DC() {
            return []
        }
        Hp.exports = DC
    });
    var na = c((sW, Xp) => {
        var kC = Bp(),
            GC = ra(),
            VC = Object.prototype,
            UC = VC.propertyIsEnumerable,
            Wp = Object.getOwnPropertySymbols,
            BC = Wp ? function (e) {
                return e == null ? [] : (e = Object(e), kC(Wp(e), function (t) {
                    return UC.call(e, t)
                }))
            } : GC;
        Xp.exports = BC
    });
    var zp = c((uW, jp) => {
        function HC(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
        jp.exports = HC
    });
    var Yp = c((cW, Kp) => {
        var WC = _t(),
            XC = dt(),
            jC = "[object Arguments]";

        function zC(e) {
            return XC(e) && WC(e) == jC
        }
        Kp.exports = zC
    });
    var Pr = c((lW, Zp) => {
        var $p = Yp(),
            KC = dt(),
            Qp = Object.prototype,
            YC = Qp.hasOwnProperty,
            $C = Qp.propertyIsEnumerable,
            QC = $p(function () {
                return arguments
            }()) ? $p : function (e) {
                return KC(e) && YC.call(e, "callee") && !$C.call(e, "callee")
            };
        Zp.exports = QC
    });
    var eg = c((fW, Jp) => {
        function ZC() {
            return !1
        }
        Jp.exports = ZC
    });
    var Dn = c((qr, Zt) => {
        var JC = Qe(),
            eR = eg(),
            ng = typeof qr == "object" && qr && !qr.nodeType && qr,
            tg = ng && typeof Zt == "object" && Zt && !Zt.nodeType && Zt,
            tR = tg && tg.exports === ng,
            rg = tR ? JC.Buffer : void 0,
            rR = rg ? rg.isBuffer : void 0,
            nR = rR || eR;
        Zt.exports = nR
    });
    var kn = c((dW, ig) => {
        var iR = 9007199254740991,
            oR = /^(?:0|[1-9]\d*)$/;

        function aR(e, t) {
            var r = typeof e;
            return t = t ?? iR, !!t && (r == "number" || r != "symbol" && oR.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        ig.exports = aR
    });
    var Gn = c((pW, og) => {
        var sR = 9007199254740991;

        function uR(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= sR
        }
        og.exports = uR
    });
    var sg = c((gW, ag) => {
        var cR = _t(),
            lR = Gn(),
            fR = dt(),
            dR = "[object Arguments]",
            pR = "[object Array]",
            gR = "[object Boolean]",
            vR = "[object Date]",
            hR = "[object Error]",
            mR = "[object Function]",
            yR = "[object Map]",
            ER = "[object Number]",
            bR = "[object Object]",
            _R = "[object RegExp]",
            IR = "[object Set]",
            TR = "[object String]",
            wR = "[object WeakMap]",
            xR = "[object ArrayBuffer]",
            OR = "[object DataView]",
            AR = "[object Float32Array]",
            SR = "[object Float64Array]",
            CR = "[object Int8Array]",
            RR = "[object Int16Array]",
            LR = "[object Int32Array]",
            NR = "[object Uint8Array]",
            PR = "[object Uint8ClampedArray]",
            qR = "[object Uint16Array]",
            FR = "[object Uint32Array]",
            ve = {};
        ve[AR] = ve[SR] = ve[CR] = ve[RR] = ve[LR] = ve[NR] = ve[PR] = ve[qR] = ve[FR] = !0;
        ve[dR] = ve[pR] = ve[xR] = ve[gR] = ve[OR] = ve[vR] = ve[hR] = ve[mR] = ve[yR] = ve[ER] = ve[bR] = ve[_R] = ve[IR] = ve[TR] = ve[wR] = !1;

        function MR(e) {
            return fR(e) && lR(e.length) && !!ve[cR(e)]
        }
        ag.exports = MR
    });
    var cg = c((vW, ug) => {
        function DR(e) {
            return function (t) {
                return e(t)
            }
        }
        ug.exports = DR
    });
    var fg = c((Fr, Jt) => {
        var kR = Co(),
            lg = typeof Fr == "object" && Fr && !Fr.nodeType && Fr,
            Mr = lg && typeof Jt == "object" && Jt && !Jt.nodeType && Jt,
            GR = Mr && Mr.exports === lg,
            ia = GR && kR.process,
            VR = function () {
                try {
                    var e = Mr && Mr.require && Mr.require("util").types;
                    return e || ia && ia.binding && ia.binding("util")
                } catch { }
            }();
        Jt.exports = VR
    });
    var Vn = c((hW, gg) => {
        var UR = sg(),
            BR = cg(),
            dg = fg(),
            pg = dg && dg.isTypedArray,
            HR = pg ? BR(pg) : UR;
        gg.exports = HR
    });
    var oa = c((mW, vg) => {
        var WR = zp(),
            XR = Pr(),
            jR = we(),
            zR = Dn(),
            KR = kn(),
            YR = Vn(),
            $R = Object.prototype,
            QR = $R.hasOwnProperty;

        function ZR(e, t) {
            var r = jR(e),
                n = !r && XR(e),
                i = !r && !n && zR(e),
                o = !r && !n && !i && YR(e),
                a = r || n || i || o,
                s = a ? WR(e.length, String) : [],
                u = s.length;
            for (var l in e) (t || QR.call(e, l)) && !(a && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || KR(l, u))) && s.push(l);
            return s
        }
        vg.exports = ZR
    });
    var Un = c((yW, hg) => {
        var JR = Object.prototype;

        function eL(e) {
            var t = e && e.constructor,
                r = typeof t == "function" && t.prototype || JR;
            return e === r
        }
        hg.exports = eL
    });
    var yg = c((EW, mg) => {
        var tL = Ro(),
            rL = tL(Object.keys, Object);
        mg.exports = rL
    });
    var Bn = c((bW, Eg) => {
        var nL = Un(),
            iL = yg(),
            oL = Object.prototype,
            aL = oL.hasOwnProperty;

        function sL(e) {
            if (!nL(e)) return iL(e);
            var t = [];
            for (var r in Object(e)) aL.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        Eg.exports = sL
    });
    var Nt = c((_W, bg) => {
        var uL = Yo(),
            cL = Gn();

        function lL(e) {
            return e != null && cL(e.length) && !uL(e)
        }
        bg.exports = lL
    });
    var Dr = c((IW, _g) => {
        var fL = oa(),
            dL = Bn(),
            pL = Nt();

        function gL(e) {
            return pL(e) ? fL(e) : dL(e)
        }
        _g.exports = gL
    });
    var Tg = c((TW, Ig) => {
        var vL = ta(),
            hL = na(),
            mL = Dr();

        function yL(e) {
            return vL(e, mL, hL)
        }
        Ig.exports = yL
    });
    var Og = c((wW, xg) => {
        var wg = Tg(),
            EL = 1,
            bL = Object.prototype,
            _L = bL.hasOwnProperty;

        function IL(e, t, r, n, i, o) {
            var a = r & EL,
                s = wg(e),
                u = s.length,
                l = wg(t),
                h = l.length;
            if (u != h && !a) return !1;
            for (var d = u; d--;) {
                var v = s[d];
                if (!(a ? v in t : _L.call(t, v))) return !1
            }
            var p = o.get(e),
                g = o.get(t);
            if (p && g) return p == t && g == e;
            var b = !0;
            o.set(e, t), o.set(t, e);
            for (var w = a; ++d < u;) {
                v = s[d];
                var I = e[v],
                    L = t[v];
                if (n) var A = a ? n(L, I, v, t, e, o) : n(I, L, v, e, t, o);
                if (!(A === void 0 ? I === L || i(I, L, r, n, o) : A)) {
                    b = !1;
                    break
                }
                w || (w = v == "constructor")
            }
            if (b && !w) {
                var q = e.constructor,
                    F = t.constructor;
                q != F && "constructor" in e && "constructor" in t && !(typeof q == "function" && q instanceof q && typeof F == "function" && F instanceof F) && (b = !1)
            }
            return o.delete(e), o.delete(t), b
        }
        xg.exports = IL
    });
    var Sg = c((xW, Ag) => {
        var TL = It(),
            wL = Qe(),
            xL = TL(wL, "DataView");
        Ag.exports = xL
    });
    var Rg = c((OW, Cg) => {
        var OL = It(),
            AL = Qe(),
            SL = OL(AL, "Promise");
        Cg.exports = SL
    });
    var Ng = c((AW, Lg) => {
        var CL = It(),
            RL = Qe(),
            LL = CL(RL, "Set");
        Lg.exports = LL
    });
    var aa = c((SW, Pg) => {
        var NL = It(),
            PL = Qe(),
            qL = NL(PL, "WeakMap");
        Pg.exports = qL
    });
    var Hn = c((CW, Vg) => {
        var sa = Sg(),
            ua = Pn(),
            ca = Rg(),
            la = Ng(),
            fa = aa(),
            Gg = _t(),
            er = Qo(),
            qg = "[object Map]",
            FL = "[object Object]",
            Fg = "[object Promise]",
            Mg = "[object Set]",
            Dg = "[object WeakMap]",
            kg = "[object DataView]",
            ML = er(sa),
            DL = er(ua),
            kL = er(ca),
            GL = er(la),
            VL = er(fa),
            Pt = Gg;
        (sa && Pt(new sa(new ArrayBuffer(1))) != kg || ua && Pt(new ua) != qg || ca && Pt(ca.resolve()) != Fg || la && Pt(new la) != Mg || fa && Pt(new fa) != Dg) && (Pt = function (e) {
            var t = Gg(e),
                r = t == FL ? e.constructor : void 0,
                n = r ? er(r) : "";
            if (n) switch (n) {
                case ML:
                    return kg;
                case DL:
                    return qg;
                case kL:
                    return Fg;
                case GL:
                    return Mg;
                case VL:
                    return Dg
            }
            return t
        });
        Vg.exports = Pt
    });
    var Kg = c((RW, zg) => {
        var da = Zo(),
            UL = Jo(),
            BL = Dp(),
            HL = Og(),
            Ug = Hn(),
            Bg = we(),
            Hg = Dn(),
            WL = Vn(),
            XL = 1,
            Wg = "[object Arguments]",
            Xg = "[object Array]",
            Wn = "[object Object]",
            jL = Object.prototype,
            jg = jL.hasOwnProperty;

        function zL(e, t, r, n, i, o) {
            var a = Bg(e),
                s = Bg(t),
                u = a ? Xg : Ug(e),
                l = s ? Xg : Ug(t);
            u = u == Wg ? Wn : u, l = l == Wg ? Wn : l;
            var h = u == Wn,
                d = l == Wn,
                v = u == l;
            if (v && Hg(e)) {
                if (!Hg(t)) return !1;
                a = !0, h = !1
            }
            if (v && !h) return o || (o = new da), a || WL(e) ? UL(e, t, r, n, i, o) : BL(e, t, u, r, n, i, o);
            if (!(r & XL)) {
                var p = h && jg.call(e, "__wrapped__"),
                    g = d && jg.call(t, "__wrapped__");
                if (p || g) {
                    var b = p ? e.value() : e,
                        w = g ? t.value() : t;
                    return o || (o = new da), i(b, w, r, n, o)
                }
            }
            return v ? (o || (o = new da), HL(e, t, r, n, i, o)) : !1
        }
        zg.exports = zL
    });
    var pa = c((LW, Qg) => {
        var KL = Kg(),
            Yg = dt();

        function $g(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Yg(e) && !Yg(t) ? e !== e && t !== t : KL(e, t, r, n, $g, i)
        }
        Qg.exports = $g
    });
    var Jg = c((NW, Zg) => {
        var YL = Zo(),
            $L = pa(),
            QL = 1,
            ZL = 2;

        function JL(e, t, r, n) {
            var i = r.length,
                o = i,
                a = !n;
            if (e == null) return !o;
            for (e = Object(e); i--;) {
                var s = r[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
            }
            for (; ++i < o;) {
                s = r[i];
                var u = s[0],
                    l = e[u],
                    h = s[1];
                if (a && s[2]) {
                    if (l === void 0 && !(u in e)) return !1
                } else {
                    var d = new YL;
                    if (n) var v = n(l, h, u, e, t, d);
                    if (!(v === void 0 ? $L(h, l, QL | ZL, n, d) : v)) return !1
                }
            }
            return !0
        }
        Zg.exports = JL
    });
    var ga = c((PW, ev) => {
        var eN = st();

        function tN(e) {
            return e === e && !eN(e)
        }
        ev.exports = tN
    });
    var rv = c((qW, tv) => {
        var rN = ga(),
            nN = Dr();

        function iN(e) {
            for (var t = nN(e), r = t.length; r--;) {
                var n = t[r],
                    i = e[n];
                t[r] = [n, i, rN(i)]
            }
            return t
        }
        tv.exports = iN
    });
    var va = c((FW, nv) => {
        function oN(e, t) {
            return function (r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        nv.exports = oN
    });
    var ov = c((MW, iv) => {
        var aN = Jg(),
            sN = rv(),
            uN = va();

        function cN(e) {
            var t = sN(e);
            return t.length == 1 && t[0][2] ? uN(t[0][0], t[0][1]) : function (r) {
                return r === e || aN(r, e, t)
            }
        }
        iv.exports = cN
    });
    var kr = c((DW, av) => {
        var lN = _t(),
            fN = dt(),
            dN = "[object Symbol]";

        function pN(e) {
            return typeof e == "symbol" || fN(e) && lN(e) == dN
        }
        av.exports = pN
    });
    var Xn = c((kW, sv) => {
        var gN = we(),
            vN = kr(),
            hN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            mN = /^\w*$/;

        function yN(e, t) {
            if (gN(e)) return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || vN(e) ? !0 : mN.test(e) || !hN.test(e) || t != null && e in Object(t)
        }
        sv.exports = yN
    });
    var lv = c((GW, cv) => {
        var uv = qn(),
            EN = "Expected a function";

        function ha(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(EN);
            var r = function () {
                var n = arguments,
                    i = t ? t.apply(this, n) : n[0],
                    o = r.cache;
                if (o.has(i)) return o.get(i);
                var a = e.apply(this, n);
                return r.cache = o.set(i, a) || o, a
            };
            return r.cache = new (ha.Cache || uv), r
        }
        ha.Cache = uv;
        cv.exports = ha
    });
    var dv = c((VW, fv) => {
        var bN = lv(),
            _N = 500;

        function IN(e) {
            var t = bN(e, function (n) {
                return r.size === _N && r.clear(), n
            }),
                r = t.cache;
            return t
        }
        fv.exports = IN
    });
    var gv = c((UW, pv) => {
        var TN = dv(),
            wN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            xN = /\\(\\)?/g,
            ON = TN(function (e) {
                var t = [];
                return e.charCodeAt(0) === 46 && t.push(""), e.replace(wN, function (r, n, i, o) {
                    t.push(i ? o.replace(xN, "$1") : n || r)
                }), t
            });
        pv.exports = ON
    });
    var ma = c((BW, vv) => {
        function AN(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
            return i
        }
        vv.exports = AN
    });
    var _v = c((HW, bv) => {
        var hv = Wt(),
            SN = ma(),
            CN = we(),
            RN = kr(),
            LN = 1 / 0,
            mv = hv ? hv.prototype : void 0,
            yv = mv ? mv.toString : void 0;

        function Ev(e) {
            if (typeof e == "string") return e;
            if (CN(e)) return SN(e, Ev) + "";
            if (RN(e)) return yv ? yv.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -LN ? "-0" : t
        }
        bv.exports = Ev
    });
    var Tv = c((WW, Iv) => {
        var NN = _v();

        function PN(e) {
            return e == null ? "" : NN(e)
        }
        Iv.exports = PN
    });
    var Gr = c((XW, wv) => {
        var qN = we(),
            FN = Xn(),
            MN = gv(),
            DN = Tv();

        function kN(e, t) {
            return qN(e) ? e : FN(e, t) ? [e] : MN(DN(e))
        }
        wv.exports = kN
    });
    var tr = c((jW, xv) => {
        var GN = kr(),
            VN = 1 / 0;

        function UN(e) {
            if (typeof e == "string" || GN(e)) return e;
            var t = e + "";
            return t == "0" && 1 / e == -VN ? "-0" : t
        }
        xv.exports = UN
    });
    var jn = c((zW, Ov) => {
        var BN = Gr(),
            HN = tr();

        function WN(e, t) {
            t = BN(t, e);
            for (var r = 0, n = t.length; e != null && r < n;) e = e[HN(t[r++])];
            return r && r == n ? e : void 0
        }
        Ov.exports = WN
    });
    var zn = c((KW, Av) => {
        var XN = jn();

        function jN(e, t, r) {
            var n = e == null ? void 0 : XN(e, t);
            return n === void 0 ? r : n
        }
        Av.exports = jN
    });
    var Cv = c((YW, Sv) => {
        function zN(e, t) {
            return e != null && t in Object(e)
        }
        Sv.exports = zN
    });
    var Lv = c(($W, Rv) => {
        var KN = Gr(),
            YN = Pr(),
            $N = we(),
            QN = kn(),
            ZN = Gn(),
            JN = tr();

        function eP(e, t, r) {
            t = KN(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i;) {
                var a = JN(t[n]);
                if (!(o = e != null && r(e, a))) break;
                e = e[a]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && ZN(i) && QN(a, i) && ($N(e) || YN(e)))
        }
        Rv.exports = eP
    });
    var Pv = c((QW, Nv) => {
        var tP = Cv(),
            rP = Lv();

        function nP(e, t) {
            return e != null && rP(e, t, tP)
        }
        Nv.exports = nP
    });
    var Fv = c((ZW, qv) => {
        var iP = pa(),
            oP = zn(),
            aP = Pv(),
            sP = Xn(),
            uP = ga(),
            cP = va(),
            lP = tr(),
            fP = 1,
            dP = 2;

        function pP(e, t) {
            return sP(e) && uP(t) ? cP(lP(e), t) : function (r) {
                var n = oP(r, e);
                return n === void 0 && n === t ? aP(r, e) : iP(t, n, fP | dP)
            }
        }
        qv.exports = pP
    });
    var Kn = c((JW, Mv) => {
        function gP(e) {
            return e
        }
        Mv.exports = gP
    });
    var ya = c((eX, Dv) => {
        function vP(e) {
            return function (t) {
                return t?.[e]
            }
        }
        Dv.exports = vP
    });
    var Gv = c((tX, kv) => {
        var hP = jn();

        function mP(e) {
            return function (t) {
                return hP(t, e)
            }
        }
        kv.exports = mP
    });
    var Uv = c((rX, Vv) => {
        var yP = ya(),
            EP = Gv(),
            bP = Xn(),
            _P = tr();

        function IP(e) {
            return bP(e) ? yP(_P(e)) : EP(e)
        }
        Vv.exports = IP
    });
    var Tt = c((nX, Bv) => {
        var TP = ov(),
            wP = Fv(),
            xP = Kn(),
            OP = we(),
            AP = Uv();

        function SP(e) {
            return typeof e == "function" ? e : e == null ? xP : typeof e == "object" ? OP(e) ? wP(e[0], e[1]) : TP(e) : AP(e)
        }
        Bv.exports = SP
    });
    var Ea = c((iX, Hv) => {
        var CP = Tt(),
            RP = Nt(),
            LP = Dr();

        function NP(e) {
            return function (t, r, n) {
                var i = Object(t);
                if (!RP(t)) {
                    var o = CP(r, 3);
                    t = LP(t), r = function (s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Hv.exports = NP
    });
    var ba = c((oX, Wv) => {
        function PP(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                if (t(e[o], o, e)) return o;
            return -1
        }
        Wv.exports = PP
    });
    var jv = c((aX, Xv) => {
        var qP = /\s/;

        function FP(e) {
            for (var t = e.length; t-- && qP.test(e.charAt(t)););
            return t
        }
        Xv.exports = FP
    });
    var Kv = c((sX, zv) => {
        var MP = jv(),
            DP = /^\s+/;

        function kP(e) {
            return e && e.slice(0, MP(e) + 1).replace(DP, "")
        }
        zv.exports = kP
    });
    var Yn = c((uX, Qv) => {
        var GP = Kv(),
            Yv = st(),
            VP = kr(),
            $v = 0 / 0,
            UP = /^[-+]0x[0-9a-f]+$/i,
            BP = /^0b[01]+$/i,
            HP = /^0o[0-7]+$/i,
            WP = parseInt;

        function XP(e) {
            if (typeof e == "number") return e;
            if (VP(e)) return $v;
            if (Yv(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Yv(t) ? t + "" : t
            }
            if (typeof e != "string") return e === 0 ? e : +e;
            e = GP(e);
            var r = BP.test(e);
            return r || HP.test(e) ? WP(e.slice(2), r ? 2 : 8) : UP.test(e) ? $v : +e
        }
        Qv.exports = XP
    });
    var eh = c((cX, Jv) => {
        var jP = Yn(),
            Zv = 1 / 0,
            zP = 17976931348623157e292;

        function KP(e) {
            if (!e) return e === 0 ? e : 0;
            if (e = jP(e), e === Zv || e === -Zv) {
                var t = e < 0 ? -1 : 1;
                return t * zP
            }
            return e === e ? e : 0
        }
        Jv.exports = KP
    });
    var _a = c((lX, th) => {
        var YP = eh();

        function $P(e) {
            var t = YP(e),
                r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        th.exports = $P
    });
    var nh = c((fX, rh) => {
        var QP = ba(),
            ZP = Tt(),
            JP = _a(),
            eq = Math.max;

        function tq(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = r == null ? 0 : JP(r);
            return i < 0 && (i = eq(n + i, 0)), QP(e, ZP(t, 3), i)
        }
        rh.exports = tq
    });
    var Ia = c((dX, ih) => {
        var rq = Ea(),
            nq = nh(),
            iq = rq(nq);
        ih.exports = iq
    });
    var sh = {};
    De(sh, {
        ELEMENT_MATCHES: () => oq,
        FLEX_PREFIXED: () => Ta,
        IS_BROWSER_ENV: () => Je,
        TRANSFORM_PREFIXED: () => wt,
        TRANSFORM_STYLE_PREFIXED: () => Qn,
        withBrowser: () => $n
    });
    var ah, Je, $n, oq, Ta, wt, oh, Qn, Zn = he(() => {
        "use strict";
        ah = le(Ia()), Je = typeof window < "u", $n = (e, t) => Je ? e() : t, oq = $n(() => (0, ah.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), Ta = $n(() => {
            let e = document.createElement("i"),
                t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
                r = "";
            try {
                let {
                    length: n
                } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o, e.style.display === o) return o
                }
                return r
            } catch {
                return r
            }
        }, "flex"), wt = $n(() => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"],
                    r = "Transform",
                    {
                        length: n
                    } = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0) return o
                }
            }
            return "transform"
        }, "transform"), oh = wt.split("transform")[0], Qn = oh ? oh + "TransformStyle" : "transformStyle"
    });
    var wa = c((pX, dh) => {
        var aq = 4,
            sq = .001,
            uq = 1e-7,
            cq = 10,
            Vr = 11,
            Jn = 1 / (Vr - 1),
            lq = typeof Float32Array == "function";

        function uh(e, t) {
            return 1 - 3 * t + 3 * e
        }

        function ch(e, t) {
            return 3 * t - 6 * e
        }

        function lh(e) {
            return 3 * e
        }

        function ei(e, t, r) {
            return ((uh(t, r) * e + ch(t, r)) * e + lh(t)) * e
        }

        function fh(e, t, r) {
            return 3 * uh(t, r) * e * e + 2 * ch(t, r) * e + lh(t)
        }

        function fq(e, t, r, n, i) {
            var o, a, s = 0;
            do a = t + (r - t) / 2, o = ei(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > uq && ++s < cq);
            return a
        }

        function dq(e, t, r, n) {
            for (var i = 0; i < aq; ++i) {
                var o = fh(t, r, n);
                if (o === 0) return t;
                var a = ei(t, r, n) - e;
                t -= a / o
            }
            return t
        }
        dh.exports = function (t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            var o = lq ? new Float32Array(Vr) : new Array(Vr);
            if (t !== r || n !== i)
                for (var a = 0; a < Vr; ++a) o[a] = ei(a * Jn, t, n);

            function s(u) {
                for (var l = 0, h = 1, d = Vr - 1; h !== d && o[h] <= u; ++h) l += Jn;
                --h;
                var v = (u - o[h]) / (o[h + 1] - o[h]),
                    p = l + v * Jn,
                    g = fh(p, t, n);
                return g >= sq ? dq(u, p, t, n) : g === 0 ? p : fq(u, l, l + Jn, t, n)
            }
            return function (l) {
                return t === r && n === i ? l : l === 0 ? 0 : l === 1 ? 1 : ei(s(l), r, i)
            }
        }
    });
    var Br = {};
    De(Br, {
        bounce: () => Kq,
        bouncePast: () => Yq,
        ease: () => pq,
        easeIn: () => gq,
        easeInOut: () => hq,
        easeOut: () => vq,
        inBack: () => Gq,
        inCirc: () => Fq,
        inCubic: () => bq,
        inElastic: () => Bq,
        inExpo: () => Nq,
        inOutBack: () => Uq,
        inOutCirc: () => Dq,
        inOutCubic: () => Iq,
        inOutElastic: () => Wq,
        inOutExpo: () => qq,
        inOutQuad: () => Eq,
        inOutQuart: () => xq,
        inOutQuint: () => Sq,
        inOutSine: () => Lq,
        inQuad: () => mq,
        inQuart: () => Tq,
        inQuint: () => Oq,
        inSine: () => Cq,
        outBack: () => Vq,
        outBounce: () => kq,
        outCirc: () => Mq,
        outCubic: () => _q,
        outElastic: () => Hq,
        outExpo: () => Pq,
        outQuad: () => yq,
        outQuart: () => wq,
        outQuint: () => Aq,
        outSine: () => Rq,
        swingFrom: () => jq,
        swingFromTo: () => Xq,
        swingTo: () => zq
    });

    function mq(e) {
        return Math.pow(e, 2)
    }

    function yq(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }

    function Eq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }

    function bq(e) {
        return Math.pow(e, 3)
    }

    function _q(e) {
        return Math.pow(e - 1, 3) + 1
    }

    function Iq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }

    function Tq(e) {
        return Math.pow(e, 4)
    }

    function wq(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }

    function xq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }

    function Oq(e) {
        return Math.pow(e, 5)
    }

    function Aq(e) {
        return Math.pow(e - 1, 5) + 1
    }

    function Sq(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }

    function Cq(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }

    function Rq(e) {
        return Math.sin(e * (Math.PI / 2))
    }

    function Lq(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }

    function Nq(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }

    function Pq(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }

    function qq(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }

    function Fq(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }

    function Mq(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }

    function Dq(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }

    function kq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Gq(e) {
        let t = pt;
        return e * e * ((t + 1) * e - t)
    }

    function Vq(e) {
        let t = pt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Uq(e) {
        let t = pt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function Bq(e) {
        let t = pt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }

    function Hq(e) {
        let t = pt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }

    function Wq(e) {
        let t = pt,
            r = 0,
            n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }

    function Xq(e) {
        let t = pt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }

    function jq(e) {
        let t = pt;
        return e * e * ((t + 1) * e - t)
    }

    function zq(e) {
        let t = pt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }

    function Kq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }

    function Yq(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var Ur, pt, pq, gq, vq, hq, xa = he(() => {
        "use strict";
        Ur = le(wa()), pt = 1.70158, pq = (0, Ur.default)(.25, .1, .25, 1), gq = (0, Ur.default)(.42, 0, 1, 1), vq = (0, Ur.default)(0, 0, .58, 1), hq = (0, Ur.default)(.42, 0, .58, 1)
    });
    var gh = {};
    De(gh, {
        applyEasing: () => Qq,
        createBezierEasing: () => $q,
        optimizeFloat: () => Hr
    });

    function Hr(e, t = 5, r = 10) {
        let n = Math.pow(r, t),
            i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }

    function $q(e) {
        return (0, ph.default)(...e)
    }

    function Qq(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : Hr(r ? t > 0 ? r(t) : t : t > 0 && e && Br[e] ? Br[e](t) : t)
    }
    var ph, Oa = he(() => {
        "use strict";
        xa();
        ph = le(wa())
    });
    var mh = {};
    De(mh, {
        createElementState: () => hh,
        ixElements: () => fF,
        mergeActionState: () => Aa
    });

    function hh(e, t, r, n, i) {
        let o = r === Zq ? (0, rr.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, rr.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }

    function Aa(e, t, r, n, i) {
        let o = pF(i);
        return (0, rr.mergeIn)(e, [t, lF, r], n, o)
    }

    function pF(e) {
        let {
            config: t
        } = e;
        return dF.reduce((r, n) => {
            let i = n[0],
                o = n[1],
                a = t[i],
                s = t[o];
            return a != null && s != null && (r[o] = s), r
        }, {})
    }
    var rr, vX, Zq, hX, Jq, eF, tF, rF, nF, iF, oF, aF, sF, uF, cF, vh, lF, fF, dF, yh = he(() => {
        "use strict";
        rr = le(zt());
        Ve();
        ({
            HTML_ELEMENT: vX,
            PLAIN_OBJECT: Zq,
            ABSTRACT_NODE: hX,
            CONFIG_X_VALUE: Jq,
            CONFIG_Y_VALUE: eF,
            CONFIG_Z_VALUE: tF,
            CONFIG_VALUE: rF,
            CONFIG_X_UNIT: nF,
            CONFIG_Y_UNIT: iF,
            CONFIG_Z_UNIT: oF,
            CONFIG_UNIT: aF
        } = Ce), {
            IX2_SESSION_STOPPED: sF,
            IX2_INSTANCE_ADDED: uF,
            IX2_ELEMENT_STATE_CHANGED: cF
        } = Te, vh = {}, lF = "refState", fF = (e = vh, t = {}) => {
            switch (t.type) {
                case sF:
                    return vh;
                case uF: {
                    let {
                        elementId: r,
                        element: n,
                        origin: i,
                        actionItem: o,
                        refType: a
                    } = t.payload, {
                        actionTypeId: s
                    } = o, u = e;
                    return (0, rr.getIn)(u, [r, n]) !== n && (u = hh(u, n, a, r, o)), Aa(u, r, s, i, o)
                }
                case cF: {
                    let {
                        elementId: r,
                        actionTypeId: n,
                        current: i,
                        actionItem: o
                    } = t.payload;
                    return Aa(e, r, n, i, o)
                }
                default:
                    return e
            }
        };
        dF = [
            [Jq, nF],
            [eF, iF],
            [tF, oF],
            [rF, aF]
        ]
    });
    var Eh = c(xe => {
        "use strict";
        Object.defineProperty(xe, "__esModule", {
            value: !0
        });
        xe.renderPlugin = xe.getPluginOrigin = xe.getPluginDuration = xe.getPluginDestination = xe.getPluginConfig = xe.createPluginInstance = xe.clearPlugin = void 0;
        var gF = e => e.value;
        xe.getPluginConfig = gF;
        var vF = (e, t) => {
            if (t.config.duration !== "auto") return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        };
        xe.getPluginDuration = vF;
        var hF = e => e || {
            value: 0
        };
        xe.getPluginOrigin = hF;
        var mF = e => ({
            value: e.value
        });
        xe.getPluginDestination = mF;
        var yF = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(), t.setSubframe(!0), t
        };
        xe.createPluginInstance = yF;
        var EF = (e, t, r) => {
            if (!e) return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        };
        xe.renderPlugin = EF;
        var bF = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        };
        xe.clearPlugin = bF
    });
    var _h = c(Oe => {
        "use strict";
        Object.defineProperty(Oe, "__esModule", {
            value: !0
        });
        Oe.renderPlugin = Oe.getPluginOrigin = Oe.getPluginDuration = Oe.getPluginDestination = Oe.getPluginConfig = Oe.createPluginInstance = Oe.clearPlugin = void 0;
        var _F = e => document.querySelector(`[data-w-id="${e}"]`),
            IF = () => window.Webflow.require("spline"),
            TF = (e, t) => e.filter(r => !t.includes(r)),
            wF = (e, t) => e.value[t];
        Oe.getPluginConfig = wF;
        var xF = () => null;
        Oe.getPluginDuration = xF;
        var bh = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        }),
            OF = (e, t) => {
                let r = t.config.value,
                    n = Object.keys(r);
                if (e) {
                    let o = Object.keys(e),
                        a = TF(n, o);
                    return a.length ? a.reduce((u, l) => (u[l] = bh[l], u), e) : e
                }
                return n.reduce((o, a) => (o[a] = bh[a], o), {})
            };
        Oe.getPluginOrigin = OF;
        var AF = e => e.value;
        Oe.getPluginDestination = AF;
        var SF = (e, t) => {
            var r;
            let n = t == null || (r = t.config) === null || r === void 0 || (r = r.target) === null || r === void 0 ? void 0 : r.pluginElement;
            return n ? _F(n) : null
        };
        Oe.createPluginInstance = SF;
        var CF = (e, t, r) => {
            let n = IF(),
                i = n.getInstance(e),
                o = r.config.target.objectId,
                a = s => {
                    if (!s) throw new Error("Invalid spline app passed to renderSpline");
                    let u = o && s.findObjectById(o);
                    if (!u) return;
                    let {
                        PLUGIN_SPLINE: l
                    } = t;
                    l.positionX != null && (u.position.x = l.positionX), l.positionY != null && (u.position.y = l.positionY), l.positionZ != null && (u.position.z = l.positionZ), l.rotationX != null && (u.rotation.x = l.rotationX), l.rotationY != null && (u.rotation.y = l.rotationY), l.rotationZ != null && (u.rotation.z = l.rotationZ), l.scaleX != null && (u.scale.x = l.scaleX), l.scaleY != null && (u.scale.y = l.scaleY), l.scaleZ != null && (u.scale.z = l.scaleZ)
                };
            i ? a(i.spline) : n.setLoadHandler(e, a)
        };
        Oe.renderPlugin = CF;
        var RF = () => null;
        Oe.clearPlugin = RF
    });
    var Ca = c(Sa => {
        "use strict";
        Object.defineProperty(Sa, "__esModule", {
            value: !0
        });
        Sa.normalizeColor = LF;
        var Ih = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };

        function LF(e) {
            let t, r, n, i = 1,
                o = e.replace(/\s/g, "").toLowerCase(),
                s = (typeof Ih[o] == "string" ? Ih[o].toLowerCase() : null) || o;
            if (s.startsWith("#")) {
                let u = s.substring(1);
                u.length === 3 ? (t = parseInt(u[0] + u[0], 16), r = parseInt(u[1] + u[1], 16), n = parseInt(u[2] + u[2], 16)) : u.length === 6 && (t = parseInt(u.substring(0, 2), 16), r = parseInt(u.substring(2, 4), 16), n = parseInt(u.substring(4, 6), 16))
            } else if (s.startsWith("rgba")) {
                let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10), i = parseFloat(u[3])
            } else if (s.startsWith("rgb")) {
                let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10)
            } else if (s.startsWith("hsla")) {
                let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    h = parseFloat(u[1].replace("%", "")) / 100,
                    d = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let v = (1 - Math.abs(2 * d - 1)) * h,
                    p = v * (1 - Math.abs(l / 60 % 2 - 1)),
                    g = d - v / 2,
                    b, w, I;
                l >= 0 && l < 60 ? (b = v, w = p, I = 0) : l >= 60 && l < 120 ? (b = p, w = v, I = 0) : l >= 120 && l < 180 ? (b = 0, w = v, I = p) : l >= 180 && l < 240 ? (b = 0, w = p, I = v) : l >= 240 && l < 300 ? (b = p, w = 0, I = v) : (b = v, w = 0, I = p), t = Math.round((b + g) * 255), r = Math.round((w + g) * 255), n = Math.round((I + g) * 255)
            } else if (s.startsWith("hsl")) {
                let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
                    l = parseFloat(u[0]),
                    h = parseFloat(u[1].replace("%", "")) / 100,
                    d = parseFloat(u[2].replace("%", "")) / 100,
                    v = (1 - Math.abs(2 * d - 1)) * h,
                    p = v * (1 - Math.abs(l / 60 % 2 - 1)),
                    g = d - v / 2,
                    b, w, I;
                l >= 0 && l < 60 ? (b = v, w = p, I = 0) : l >= 60 && l < 120 ? (b = p, w = v, I = 0) : l >= 120 && l < 180 ? (b = 0, w = v, I = p) : l >= 180 && l < 240 ? (b = 0, w = p, I = v) : l >= 240 && l < 300 ? (b = p, w = 0, I = v) : (b = v, w = 0, I = p), t = Math.round((b + g) * 255), r = Math.round((w + g) * 255), n = Math.round((I + g) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
    });
    var Th = c(Ae => {
        "use strict";
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
        var NF = Ca(),
            PF = (e, t) => e.value[t];
        Ae.getPluginConfig = PF;
        var qF = () => null;
        Ae.getPluginDuration = qF;
        var FF = (e, t) => {
            if (e) return e;
            let r = t.config.value,
                n = t.config.target.objectId,
                i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null) return {
                size: parseInt(i, 10)
            };
            if (r.red != null && r.green != null && r.blue != null) return (0, NF.normalizeColor)(i)
        };
        Ae.getPluginOrigin = FF;
        var MF = e => e.value;
        Ae.getPluginDestination = MF;
        var DF = () => null;
        Ae.createPluginInstance = DF;
        var kF = (e, t, r) => {
            let n = r.config.target.objectId,
                i = r.config.value.unit,
                {
                    PLUGIN_VARIABLE: o
                } = t,
                {
                    size: a,
                    red: s,
                    green: u,
                    blue: l,
                    alpha: h
                } = o,
                d;
            a != null && (d = a + i), s != null && l != null && u != null && h != null && (d = `rgba(${s}, ${u}, ${l}, ${h})`), d != null && document.documentElement.style.setProperty(n, d)
        };
        Ae.renderPlugin = kF;
        var GF = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        };
        Ae.clearPlugin = GF
    });
    var wh = c(ti => {
        "use strict";
        var La = dn().default;
        Object.defineProperty(ti, "__esModule", {
            value: !0
        });
        ti.pluginMethodMap = void 0;
        var Ra = (Ve(), rt(Rf)),
            VF = La(Eh()),
            UF = La(_h()),
            BF = La(Th()),
            _X = ti.pluginMethodMap = new Map([
                [Ra.ActionTypeConsts.PLUGIN_LOTTIE, {
                    ...VF
                }],
                [Ra.ActionTypeConsts.PLUGIN_SPLINE, {
                    ...UF
                }],
                [Ra.ActionTypeConsts.PLUGIN_VARIABLE, {
                    ...BF
                }]
            ])
    });
    var xh = {};
    De(xh, {
        clearPlugin: () => Da,
        createPluginInstance: () => WF,
        getPluginConfig: () => Pa,
        getPluginDestination: () => Fa,
        getPluginDuration: () => HF,
        getPluginOrigin: () => qa,
        isPluginType: () => qt,
        renderPlugin: () => Ma
    });

    function qt(e) {
        return Na.pluginMethodMap.has(e)
    }
    var Na, Ft, Pa, qa, HF, Fa, WF, Ma, Da, ka = he(() => {
        "use strict";
        Zn();
        Na = le(wh());
        Ft = e => t => {
            if (!Je) return () => null;
            let r = Na.pluginMethodMap.get(t);
            if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }, Pa = Ft("getPluginConfig"), qa = Ft("getPluginOrigin"), HF = Ft("getPluginDuration"), Fa = Ft("getPluginDestination"), WF = Ft("createPluginInstance"), Ma = Ft("renderPlugin"), Da = Ft("clearPlugin")
    });
    var Ah = c((wX, Oh) => {
        function XF(e, t) {
            return e == null || e !== e ? t : e
        }
        Oh.exports = XF
    });
    var Ch = c((xX, Sh) => {
        function jF(e, t, r, n) {
            var i = -1,
                o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
            return r
        }
        Sh.exports = jF
    });
    var Lh = c((OX, Rh) => {
        function zF(e) {
            return function (t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
                    var u = a[e ? s : ++i];
                    if (r(o[u], u, o) === !1) break
                }
                return t
            }
        }
        Rh.exports = zF
    });
    var Ph = c((AX, Nh) => {
        var KF = Lh(),
            YF = KF();
        Nh.exports = YF
    });
    var Ga = c((SX, qh) => {
        var $F = Ph(),
            QF = Dr();

        function ZF(e, t) {
            return e && $F(e, t, QF)
        }
        qh.exports = ZF
    });
    var Mh = c((CX, Fh) => {
        var JF = Nt();

        function eM(e, t) {
            return function (r, n) {
                if (r == null) return r;
                if (!JF(r)) return e(r, n);
                for (var i = r.length, o = t ? i : -1, a = Object(r);
                    (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;);
                return r
            }
        }
        Fh.exports = eM
    });
    var Va = c((RX, Dh) => {
        var tM = Ga(),
            rM = Mh(),
            nM = rM(tM);
        Dh.exports = nM
    });
    var Gh = c((LX, kh) => {
        function iM(e, t, r, n, i) {
            return i(e, function (o, a, s) {
                r = n ? (n = !1, o) : t(r, o, a, s)
            }), r
        }
        kh.exports = iM
    });
    var Uh = c((NX, Vh) => {
        var oM = Ch(),
            aM = Va(),
            sM = Tt(),
            uM = Gh(),
            cM = we();

        function lM(e, t, r) {
            var n = cM(e) ? oM : uM,
                i = arguments.length < 3;
            return n(e, sM(t, 4), r, i, aM)
        }
        Vh.exports = lM
    });
    var Hh = c((PX, Bh) => {
        var fM = ba(),
            dM = Tt(),
            pM = _a(),
            gM = Math.max,
            vM = Math.min;

        function hM(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n) return -1;
            var i = n - 1;
            return r !== void 0 && (i = pM(r), i = r < 0 ? gM(n + i, 0) : vM(i, n - 1)), fM(e, dM(t, 3), i, !0)
        }
        Bh.exports = hM
    });
    var Xh = c((qX, Wh) => {
        var mM = Ea(),
            yM = Hh(),
            EM = mM(yM);
        Wh.exports = EM
    });

    function jh(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }

    function bM(e, t) {
        if (jh(e, t)) return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
        let r = Object.keys(e),
            n = Object.keys(t);
        if (r.length !== n.length) return !1;
        for (let i = 0; i < r.length; i++)
            if (!Object.hasOwn(t, r[i]) || !jh(e[r[i]], t[r[i]])) return !1;
        return !0
    }
    var Ua, zh = he(() => {
        "use strict";
        Ua = bM
    });
    var fm = {};
    De(fm, {
        cleanupHTMLElement: () => m1,
        clearAllStyles: () => h1,
        clearObjectCache: () => DM,
        getActionListProgress: () => E1,
        getAffectedElements: () => ja,
        getComputedStyle: () => XM,
        getDestinationValues: () => ZM,
        getElementId: () => UM,
        getInstanceId: () => GM,
        getInstanceOrigin: () => KM,
        getItemConfigByKey: () => QM,
        getMaxDurationItemIndex: () => lm,
        getNamespacedParameterId: () => I1,
        getRenderType: () => sm,
        getStyleProp: () => JM,
        mediaQueriesEqual: () => w1,
        observeStore: () => WM,
        reduceListToGroup: () => b1,
        reifyState: () => BM,
        renderHTMLElement: () => e1,
        shallowEqual: () => Ua,
        shouldAllowMediaQuery: () => T1,
        shouldNamespaceEventParameter: () => _1,
        stringifyTarget: () => x1
    });

    function DM() {
        ri.clear()
    }

    function GM() {
        return "i" + kM++
    }

    function UM(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t) return n.id
        }
        return "e" + VM++
    }

    function BM({
        events: e,
        actionLists: t,
        site: r
    } = {}) {
        let n = (0, ai.default)(e, (a, s) => {
            let {
                eventTypeId: u
            } = s;
            return a[u] || (a[u] = {}), a[u][s.id] = s, a
        }, {}),
            i = r && r.mediaQueries,
            o = [];
        return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }

    function WM({
        store: e,
        select: t,
        onChange: r,
        comparator: n = HM
    }) {
        let {
            getState: i,
            subscribe: o
        } = e, a = o(u), s = t(i());

        function u() {
            let l = t(i());
            if (l == null) {
                a();
                return
            }
            n(l, s) || (s = l, r(s, e))
        }
        return a
    }

    function $h(e) {
        let t = typeof e;
        if (t === "string") return {
            id: e
        };
        if (e != null && t === "object") {
            let {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            } = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            }
        }
        return {}
    }

    function ja({
        config: e,
        event: t,
        eventTarget: r,
        elementRoot: n,
        elementApi: i
    }) {
        if (!i) throw new Error("IX2 missing elementApi");
        let {
            targets: o
        } = e;
        if (Array.isArray(o) && o.length > 0) return o.reduce((N, y) => N.concat(ja({
            config: {
                target: y
            },
            event: t,
            eventTarget: r,
            elementRoot: n,
            elementApi: i
        })), []);
        let {
            getValidDocument: a,
            getQuerySelector: s,
            queryDocument: u,
            getChildElements: l,
            getSiblingElements: h,
            matchSelector: d,
            elementContains: v,
            isSiblingNode: p
        } = i, {
            target: g
        } = e;
        if (!g) return [];
        let {
            id: b,
            objectId: w,
            selector: I,
            selectorGuids: L,
            appliesTo: A,
            useEventTarget: q
        } = $h(g);
        if (w) return [ri.has(w) ? ri.get(w) : ri.set(w, {}).get(w)];
        if (A === Xo.PAGE) {
            let N = a(b);
            return N ? [N] : []
        }
        let P = (t?.action?.config?.affectedElements ?? {})[b || I] || {},
            W = !!(P.id || P.selector),
            X, z, Z, U = t && s($h(t.target));
        if (W ? (X = P.limitAffectedElements, z = U, Z = s(P)) : z = Z = s({
            id: b,
            selector: I,
            selectorGuids: L
        }), t && q) {
            let N = r && (Z || q === !0) ? [r] : u(U);
            if (Z) {
                if (q === qM) return u(Z).filter(y => N.some(S => v(y, S)));
                if (q === Kh) return u(Z).filter(y => N.some(S => v(S, y)));
                if (q === Yh) return u(Z).filter(y => N.some(S => p(S, y)))
            }
            return N
        }
        return z == null || Z == null ? [] : Je && n ? u(Z).filter(N => n.contains(N)) : X === Kh ? u(z, Z) : X === PM ? l(u(z)).filter(d(Z)) : X === Yh ? h(u(z)).filter(d(Z)) : u(Z)
    }

    function XM({
        element: e,
        actionItem: t
    }) {
        if (!Je) return {};
        let {
            actionTypeId: r
        } = t;
        switch (r) {
            case sr:
            case ur:
            case cr:
            case lr:
            case ui:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }

    function KM(e, t = {}, r = {}, n, i) {
        let {
            getStyle: o
        } = i, {
            actionTypeId: a
        } = n;
        if (qt(a)) return qa(a)(t[a], n);
        switch (n.actionTypeId) {
            case ir:
            case or:
            case ar:
            case zr:
                return t[n.actionTypeId] || za[n.actionTypeId];
            case Kr:
                return jM(t[n.actionTypeId], n.config.filters);
            case Yr:
                return zM(t[n.actionTypeId], n.config.fontVariations);
            case im:
                return {
                    value: (0, gt.default)(parseFloat(o(e, ii)), 1)
                };
            case sr: {
                let s = o(e, ut),
                    u = o(e, ct),
                    l, h;
                return n.config.widthUnit === xt ? l = Qh.test(s) ? parseFloat(s) : parseFloat(r.width) : l = (0, gt.default)(parseFloat(s), parseFloat(r.width)), n.config.heightUnit === xt ? h = Qh.test(u) ? parseFloat(u) : parseFloat(r.height) : h = (0, gt.default)(parseFloat(u), parseFloat(r.height)), {
                    widthValue: l,
                    heightValue: h
                }
            }
            case ur:
            case cr:
            case lr:
                return p1({
                    element: e,
                    actionTypeId: n.actionTypeId,
                    computedStyle: r,
                    getStyle: o
                });
            case ui:
                return {
                    value: (0, gt.default)(o(e, oi), r.display)
                };
            case MM:
                return t[n.actionTypeId] || {
                    value: 0
                };
            default:
                return
        }
    }

    function ZM({
        element: e,
        actionItem: t,
        elementApi: r
    }) {
        if (qt(t.actionTypeId)) return Fa(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
            case ir:
            case or:
            case ar:
            case zr: {
                let {
                    xValue: n,
                    yValue: i,
                    zValue: o
                } = t.config;
                return {
                    xValue: n,
                    yValue: i,
                    zValue: o
                }
            }
            case sr: {
                let {
                    getStyle: n,
                    setStyle: i,
                    getProperty: o
                } = r, {
                    widthUnit: a,
                    heightUnit: s
                } = t.config, {
                    widthValue: u,
                    heightValue: l
                } = t.config;
                if (!Je) return {
                    widthValue: u,
                    heightValue: l
                };
                if (a === xt) {
                    let h = n(e, ut);
                    i(e, ut, ""), u = o(e, "offsetWidth"), i(e, ut, h)
                }
                if (s === xt) {
                    let h = n(e, ct);
                    i(e, ct, ""), l = o(e, "offsetHeight"), i(e, ct, h)
                }
                return {
                    widthValue: u,
                    heightValue: l
                }
            }
            case ur:
            case cr:
            case lr: {
                let {
                    rValue: n,
                    gValue: i,
                    bValue: o,
                    aValue: a,
                    globalSwatchId: s
                } = t.config;
                if (s && s.startsWith("--")) {
                    let {
                        getStyle: u
                    } = r, l = u(e, s), h = (0, em.normalizeColor)(l);
                    return {
                        rValue: h.red,
                        gValue: h.green,
                        bValue: h.blue,
                        aValue: h.alpha
                    }
                }
                return {
                    rValue: n,
                    gValue: i,
                    bValue: o,
                    aValue: a
                }
            }
            case Kr:
                return t.config.filters.reduce(YM, {});
            case Yr:
                return t.config.fontVariations.reduce($M, {});
            default: {
                let {
                    value: n
                } = t.config;
                return {
                    value: n
                }
            }
        }
    }

    function sm(e) {
        if (/^TRANSFORM_/.test(e)) return rm;
        if (/^STYLE_/.test(e)) return Wa;
        if (/^GENERAL_/.test(e)) return Ha;
        if (/^PLUGIN_/.test(e)) return nm
    }

    function JM(e, t) {
        return e === Wa ? t.replace("STYLE_", "").toLowerCase() : null
    }

    function e1(e, t, r, n, i, o, a, s, u) {
        switch (s) {
            case rm:
                return o1(e, t, r, i, a);
            case Wa:
                return g1(e, t, r, i, o, a);
            case Ha:
                return v1(e, i, a);
            case nm: {
                let {
                    actionTypeId: l
                } = i;
                if (qt(l)) return Ma(l)(u, t, i)
            }
        }
    }

    function o1(e, t, r, n, i) {
        let o = i1.map(s => {
            let u = za[s],
                {
                    xValue: l = u.xValue,
                    yValue: h = u.yValue,
                    zValue: d = u.zValue,
                    xUnit: v = "",
                    yUnit: p = "",
                    zUnit: g = ""
                } = t[s] || {};
            switch (s) {
                case ir:
                    return `${TM}(${l}${v}, ${h}${p}, ${d}${g})`;
                case or:
                    return `${wM}(${l}${v}, ${h}${p}, ${d}${g})`;
                case ar:
                    return `${xM}(${l}${v}) ${OM}(${h}${p}) ${AM}(${d}${g})`;
                case zr:
                    return `${SM}(${l}${v}, ${h}${p})`;
                default:
                    return ""
            }
        }).join(" "),
            {
                setStyle: a
            } = i;
        Mt(e, wt, i), a(e, wt, o), u1(n, r) && a(e, Qn, CM)
    }

    function a1(e, t, r, n) {
        let i = (0, ai.default)(t, (a, s, u) => `${a} ${u}(${s}${n1(u, r)})`, ""),
            {
                setStyle: o
            } = n;
        Mt(e, Wr, n), o(e, Wr, i)
    }

    function s1(e, t, r, n) {
        let i = (0, ai.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), []).join(", "),
            {
                setStyle: o
            } = n;
        Mt(e, Xr, n), o(e, Xr, i)
    }

    function u1({
        actionTypeId: e
    }, {
        xValue: t,
        yValue: r,
        zValue: n
    }) {
        return e === ir && n !== void 0 || e === or && n !== void 0 || e === ar && (t !== void 0 || r !== void 0)
    }

    function d1(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }

    function p1({
        element: e,
        actionTypeId: t,
        computedStyle: r,
        getStyle: n
    }) {
        let i = Xa[t],
            o = n(e, i),
            a = l1.test(o) ? o : r[i],
            s = d1(f1, a).split(jr);
        return {
            rValue: (0, gt.default)(parseInt(s[0], 10), 255),
            gValue: (0, gt.default)(parseInt(s[1], 10), 255),
            bValue: (0, gt.default)(parseInt(s[2], 10), 255),
            aValue: (0, gt.default)(parseFloat(s[3]), 1)
        }
    }

    function g1(e, t, r, n, i, o) {
        let {
            setStyle: a
        } = o;
        switch (n.actionTypeId) {
            case sr: {
                let {
                    widthUnit: s = "",
                    heightUnit: u = ""
                } = n.config, {
                    widthValue: l,
                    heightValue: h
                } = r;
                l !== void 0 && (s === xt && (s = "px"), Mt(e, ut, o), a(e, ut, l + s)), h !== void 0 && (u === xt && (u = "px"), Mt(e, ct, o), a(e, ct, h + u));
                break
            }
            case Kr: {
                a1(e, r, n.config, o);
                break
            }
            case Yr: {
                s1(e, r, n.config, o);
                break
            }
            case ur:
            case cr:
            case lr: {
                let s = Xa[n.actionTypeId],
                    u = Math.round(r.rValue),
                    l = Math.round(r.gValue),
                    h = Math.round(r.bValue),
                    d = r.aValue;
                Mt(e, s, o), a(e, s, d >= 1 ? `rgb(${u},${l},${h})` : `rgba(${u},${l},${h},${d})`);
                break
            }
            default: {
                let {
                    unit: s = ""
                } = n.config;
                Mt(e, i, o), a(e, i, r.value + s);
                break
            }
        }
    }

    function v1(e, t, r) {
        let {
            setStyle: n
        } = r;
        switch (t.actionTypeId) {
            case ui: {
                let {
                    value: i
                } = t.config;
                i === RM && Je ? n(e, oi, Ta) : n(e, oi, i);
                return
            }
        }
    }

    function Mt(e, t, r) {
        if (!Je) return;
        let n = am[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, a = i(e, nr);
        if (!a) {
            o(e, nr, n);
            return
        }
        let s = a.split(jr).map(om);
        s.indexOf(n) === -1 && o(e, nr, s.concat(n).join(jr))
    }

    function um(e, t, r) {
        if (!Je) return;
        let n = am[t];
        if (!n) return;
        let {
            getStyle: i,
            setStyle: o
        } = r, a = i(e, nr);
        !a || a.indexOf(n) === -1 || o(e, nr, a.split(jr).map(om).filter(s => s !== n).join(jr))
    }

    function h1({
        store: e,
        elementApi: t
    }) {
        let {
            ixData: r
        } = e.getState(), {
            events: n = {},
            actionLists: i = {}
        } = r;
        Object.keys(n).forEach(o => {
            let a = n[o],
                {
                    config: s
                } = a.action,
                {
                    actionListId: u
                } = s,
                l = i[u];
            l && Zh({
                actionList: l,
                event: a,
                elementApi: t
            })
        }), Object.keys(i).forEach(o => {
            Zh({
                actionList: i[o],
                elementApi: t
            })
        })
    }

    function Zh({
        actionList: e = {},
        event: t,
        elementApi: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e;
        n && n.forEach(o => {
            Jh({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }), i && i.forEach(o => {
            let {
                continuousActionGroups: a
            } = o;
            a.forEach(s => {
                Jh({
                    actionGroup: s,
                    event: t,
                    elementApi: r
                })
            })
        })
    }

    function Jh({
        actionGroup: e,
        event: t,
        elementApi: r
    }) {
        let {
            actionItems: n
        } = e;
        n.forEach(i => {
            let {
                actionTypeId: o,
                config: a
            } = i, s;
            qt(o) ? s = u => Da(o)(u, i) : s = cm({
                effect: y1,
                actionTypeId: o,
                elementApi: r
            }), ja({
                config: a,
                event: t,
                elementApi: r
            }).forEach(s)
        })
    }

    function m1(e, t, r) {
        let {
            setStyle: n,
            getStyle: i
        } = r, {
            actionTypeId: o
        } = t;
        if (o === sr) {
            let {
                config: a
            } = t;
            a.widthUnit === xt && n(e, ut, ""), a.heightUnit === xt && n(e, ct, "")
        }
        i(e, nr) && cm({
            effect: um,
            actionTypeId: o,
            elementApi: r
        })(e)
    }

    function y1(e, t, r) {
        let {
            setStyle: n
        } = r;
        um(e, t, r), n(e, t, ""), t === wt && n(e, Qn, "")
    }

    function lm(e) {
        let t = 0,
            r = 0;
        return e.forEach((n, i) => {
            let {
                config: o
            } = n, a = o.delay + o.duration;
            a >= t && (t = a, r = i)
        }), r
    }

    function E1(e, t) {
        let {
            actionItemGroups: r,
            useFirstGroupAsInitialState: n
        } = e, {
            actionItem: i,
            verboseTimeElapsed: o = 0
        } = t, a = 0, s = 0;
        return r.forEach((u, l) => {
            if (n && l === 0) return;
            let {
                actionItems: h
            } = u, d = h[lm(h)], {
                config: v,
                actionTypeId: p
            } = d;
            i.id === d.id && (s = a + o);
            let g = sm(p) === Ha ? 0 : v.duration;
            a += v.delay + g
        }), a > 0 ? Hr(s / a) : 0
    }

    function b1({
        actionList: e,
        actionItemId: t,
        rawData: r
    }) {
        let {
            actionItemGroups: n,
            continuousParameterGroups: i
        } = e, o = [], a = s => (o.push((0, si.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0
        })), s.id === t);
        return n && n.some(({
            actionItems: s
        }) => s.some(a)), i && i.some(s => {
            let {
                continuousActionGroups: u
            } = s;
            return u.some(({
                actionItems: l
            }) => l.some(a))
        }), (0, si.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }

    function _1(e, {
        basedOn: t
    }) {
        return e === Ze.SCROLLING_IN_VIEW && (t === at.ELEMENT || t == null) || e === Ze.MOUSE_MOVE && t === at.ELEMENT
    }

    function I1(e, t) {
        return e + FM + t
    }

    function T1(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }

    function w1(e, t) {
        return Ua(e && e.sort(), t && t.sort())
    }

    function x1(e) {
        if (typeof e == "string") return e;
        if (e.pluginElement && e.objectId) return e.pluginElement + Ba + e.objectId;
        if (e.objectId) return e.objectId;
        let {
            id: t = "",
            selector: r = "",
            useEventTarget: n = ""
        } = e;
        return t + Ba + r + Ba + n
    }
    var gt, ai, ni, si, em, _M, IM, TM, wM, xM, OM, AM, SM, CM, RM, ii, Wr, Xr, ut, ct, tm, LM, NM, Kh, PM, Yh, qM, oi, nr, xt, jr, FM, Ba, rm, Ha, Wa, nm, ir, or, ar, zr, im, Kr, Yr, sr, ur, cr, lr, ui, MM, om, Xa, am, ri, kM, VM, HM, Qh, jM, zM, YM, $M, QM, za, t1, r1, n1, i1, c1, l1, f1, cm, dm = he(() => {
        "use strict";
        gt = le(Ah()), ai = le(Uh()), ni = le(Xh()), si = le(zt());
        Ve();
        zh();
        Oa();
        em = le(Ca());
        ka();
        Zn();
        ({
            BACKGROUND: _M,
            TRANSFORM: IM,
            TRANSLATE_3D: TM,
            SCALE_3D: wM,
            ROTATE_X: xM,
            ROTATE_Y: OM,
            ROTATE_Z: AM,
            SKEW: SM,
            PRESERVE_3D: CM,
            FLEX: RM,
            OPACITY: ii,
            FILTER: Wr,
            FONT_VARIATION_SETTINGS: Xr,
            WIDTH: ut,
            HEIGHT: ct,
            BACKGROUND_COLOR: tm,
            BORDER_COLOR: LM,
            COLOR: NM,
            CHILDREN: Kh,
            IMMEDIATE_CHILDREN: PM,
            SIBLINGS: Yh,
            PARENT: qM,
            DISPLAY: oi,
            WILL_CHANGE: nr,
            AUTO: xt,
            COMMA_DELIMITER: jr,
            COLON_DELIMITER: FM,
            BAR_DELIMITER: Ba,
            RENDER_TRANSFORM: rm,
            RENDER_GENERAL: Ha,
            RENDER_STYLE: Wa,
            RENDER_PLUGIN: nm
        } = Ce), {
            TRANSFORM_MOVE: ir,
            TRANSFORM_SCALE: or,
            TRANSFORM_ROTATE: ar,
            TRANSFORM_SKEW: zr,
            STYLE_OPACITY: im,
            STYLE_FILTER: Kr,
            STYLE_FONT_VARIATION: Yr,
            STYLE_SIZE: sr,
            STYLE_BACKGROUND_COLOR: ur,
            STYLE_BORDER: cr,
            STYLE_TEXT_COLOR: lr,
            GENERAL_DISPLAY: ui,
            OBJECT_VALUE: MM
        } = Ge, om = e => e.trim(), Xa = Object.freeze({
            [ur]: tm,
            [cr]: LM,
            [lr]: NM
        }), am = Object.freeze({
            [wt]: IM,
            [tm]: _M,
            [ii]: ii,
            [Wr]: Wr,
            [ut]: ut,
            [ct]: ct,
            [Xr]: Xr
        }), ri = new Map;
        kM = 1;
        VM = 1;
        HM = (e, t) => e === t;
        Qh = /px/, jM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = t1[n.type]), r), e || {}), zM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = r1[n.type] || n.defaultValue || 0), r), e || {});
        YM = (e, t) => (t && (e[t.type] = t.value || 0), e), $M = (e, t) => (t && (e[t.type] = t.value || 0), e), QM = (e, t, r) => {
            if (qt(e)) return Pa(e)(r, t);
            switch (e) {
                case Kr: {
                    let n = (0, ni.default)(r.filters, ({
                        type: i
                    }) => i === t);
                    return n ? n.value : 0
                }
                case Yr: {
                    let n = (0, ni.default)(r.fontVariations, ({
                        type: i
                    }) => i === t);
                    return n ? n.value : 0
                }
                default:
                    return r[t]
            }
        };
        za = {
            [ir]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [or]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [ar]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [zr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        }, t1 = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }), r1 = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }), n1 = (e, t) => {
            let r = (0, ni.default)(t.filters, ({
                type: n
            }) => n === e);
            if (r && r.unit) return r.unit;
            switch (e) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        }, i1 = Object.keys(za);
        c1 = "\\(([^)]+)\\)", l1 = /^rgb/, f1 = RegExp(`rgba?${c1}`);
        cm = ({
            effect: e,
            actionTypeId: t,
            elementApi: r
        }) => n => {
            switch (t) {
                case ir:
                case or:
                case ar:
                case zr:
                    e(n, wt, r);
                    break;
                case Kr:
                    e(n, Wr, r);
                    break;
                case Yr:
                    e(n, Xr, r);
                    break;
                case im:
                    e(n, ii, r);
                    break;
                case sr:
                    e(n, ut, r), e(n, ct, r);
                    break;
                case ur:
                case cr:
                case lr:
                    e(n, Xa[t], r);
                    break;
                case ui:
                    e(n, oi, r);
                    break
            }
        }
    });
    var Dt = c(Pe => {
        "use strict";
        var fr = dn().default;
        Object.defineProperty(Pe, "__esModule", {
            value: !0
        });
        Pe.IX2VanillaUtils = Pe.IX2VanillaPlugins = Pe.IX2ElementsReducer = Pe.IX2Easings = Pe.IX2EasingUtils = Pe.IX2BrowserSupport = void 0;
        var O1 = fr((Zn(), rt(sh)));
        Pe.IX2BrowserSupport = O1;
        var A1 = fr((xa(), rt(Br)));
        Pe.IX2Easings = A1;
        var S1 = fr((Oa(), rt(gh)));
        Pe.IX2EasingUtils = S1;
        var C1 = fr((yh(), rt(mh)));
        Pe.IX2ElementsReducer = C1;
        var R1 = fr((ka(), rt(xh)));
        Pe.IX2VanillaPlugins = R1;
        var L1 = fr((dm(), rt(fm)));
        Pe.IX2VanillaUtils = L1
    });
    var li, vt, N1, P1, q1, F1, M1, D1, ci, pm, k1, G1, Ka, V1, U1, B1, H1, gm, vm = he(() => {
        "use strict";
        Ve();
        li = le(Dt()), vt = le(zt()), {
            IX2_RAW_DATA_IMPORTED: N1,
            IX2_SESSION_STOPPED: P1,
            IX2_INSTANCE_ADDED: q1,
            IX2_INSTANCE_STARTED: F1,
            IX2_INSTANCE_REMOVED: M1,
            IX2_ANIMATION_FRAME_CHANGED: D1
        } = Te, {
            optimizeFloat: ci,
            applyEasing: pm,
            createBezierEasing: k1
        } = li.IX2EasingUtils, {
            RENDER_GENERAL: G1
        } = Ce, {
            getItemConfigByKey: Ka,
            getRenderType: V1,
            getStyleProp: U1
        } = li.IX2VanillaUtils, B1 = (e, t) => {
            let {
                position: r,
                parameterId: n,
                actionGroups: i,
                destinationKeys: o,
                smoothing: a,
                restingValue: s,
                actionTypeId: u,
                customEasingFn: l,
                skipMotion: h,
                skipToValue: d
            } = e, {
                parameters: v
            } = t.payload, p = Math.max(1 - a, .01), g = v[n];
            g == null && (p = 1, g = s);
            let b = Math.max(g, 0) || 0,
                w = ci(b - r),
                I = h ? d : ci(r + w * p),
                L = I * 100;
            if (I === r && e.current) return e;
            let A, q, F, P;
            for (let X = 0, {
                length: z
            } = i; X < z; X++) {
                let {
                    keyframe: Z,
                    actionItems: U
                } = i[X];
                if (X === 0 && (A = U[0]), L >= Z) {
                    A = U[0];
                    let N = i[X + 1],
                        y = N && L !== Z;
                    q = y ? N.actionItems[0] : null, y && (F = Z / 100, P = (N.keyframe - Z) / 100)
                }
            }
            let W = {};
            if (A && !q)
                for (let X = 0, {
                    length: z
                } = o; X < z; X++) {
                    let Z = o[X];
                    W[Z] = Ka(u, Z, A.config)
                } else if (A && q && F !== void 0 && P !== void 0) {
                    let X = (I - F) / P,
                        z = A.config.easing,
                        Z = pm(z, X, l);
                    for (let U = 0, {
                        length: N
                    } = o; U < N; U++) {
                        let y = o[U],
                            S = Ka(u, y, A.config),
                            $ = (Ka(u, y, q.config) - S) * Z + S;
                        W[y] = $
                    }
                } return (0, vt.merge)(e, {
                    position: I,
                    current: W
                })
        }, H1 = (e, t) => {
            let {
                active: r,
                origin: n,
                start: i,
                immediate: o,
                renderType: a,
                verbose: s,
                actionItem: u,
                destination: l,
                destinationKeys: h,
                pluginDuration: d,
                instanceDelay: v,
                customEasingFn: p,
                skipMotion: g
            } = e, b = u.config.easing, {
                duration: w,
                delay: I
            } = u.config;
            d != null && (w = d), I = v ?? I, a === G1 ? w = 0 : (o || g) && (w = I = 0);
            let {
                now: L
            } = t.payload;
            if (r && n) {
                let A = L - (i + I);
                if (s) {
                    let X = L - i,
                        z = w + I,
                        Z = ci(Math.min(Math.max(0, X / z), 1));
                    e = (0, vt.set)(e, "verboseTimeElapsed", z * Z)
                }
                if (A < 0) return e;
                let q = ci(Math.min(Math.max(0, A / w), 1)),
                    F = pm(b, q, p),
                    P = {},
                    W = null;
                return h.length && (W = h.reduce((X, z) => {
                    let Z = l[z],
                        U = parseFloat(n[z]) || 0,
                        y = (parseFloat(Z) - U) * F + U;
                    return X[z] = y, X
                }, {})), P.current = W, P.position = q, q === 1 && (P.active = !1, P.complete = !0), (0, vt.merge)(e, P)
            }
            return e
        }, gm = (e = Object.freeze({}), t) => {
            switch (t.type) {
                case N1:
                    return t.payload.ixInstances || Object.freeze({});
                case P1:
                    return Object.freeze({});
                case q1: {
                    let {
                        instanceId: r,
                        elementId: n,
                        actionItem: i,
                        eventId: o,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: u,
                        groupIndex: l,
                        isCarrier: h,
                        origin: d,
                        destination: v,
                        immediate: p,
                        verbose: g,
                        continuous: b,
                        parameterId: w,
                        actionGroups: I,
                        smoothing: L,
                        restingValue: A,
                        pluginInstance: q,
                        pluginDuration: F,
                        instanceDelay: P,
                        skipMotion: W,
                        skipToValue: X
                    } = t.payload, {
                        actionTypeId: z
                    } = i, Z = V1(z), U = U1(Z, z), N = Object.keys(v).filter(S => v[S] != null && typeof v[S] != "string"), {
                        easing: y
                    } = i.config;
                    return (0, vt.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: d,
                        destination: v,
                        destinationKeys: N,
                        immediate: p,
                        verbose: g,
                        current: null,
                        actionItem: i,
                        actionTypeId: z,
                        eventId: o,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: u,
                        groupIndex: l,
                        renderType: Z,
                        isCarrier: h,
                        styleProp: U,
                        continuous: b,
                        parameterId: w,
                        actionGroups: I,
                        smoothing: L,
                        restingValue: A,
                        pluginInstance: q,
                        pluginDuration: F,
                        instanceDelay: P,
                        skipMotion: W,
                        skipToValue: X,
                        customEasingFn: Array.isArray(y) && y.length === 4 ? k1(y) : void 0
                    })
                }
                case F1: {
                    let {
                        instanceId: r,
                        time: n
                    } = t.payload;
                    return (0, vt.mergeIn)(e, [r], {
                        active: !0,
                        complete: !1,
                        start: n
                    })
                }
                case M1: {
                    let {
                        instanceId: r
                    } = t.payload;
                    if (!e[r]) return e;
                    let n = {},
                        i = Object.keys(e),
                        {
                            length: o
                        } = i;
                    for (let a = 0; a < o; a++) {
                        let s = i[a];
                        s !== r && (n[s] = e[s])
                    }
                    return n
                }
                case D1: {
                    let r = e,
                        n = Object.keys(e),
                        {
                            length: i
                        } = n;
                    for (let o = 0; o < i; o++) {
                        let a = n[o],
                            s = e[a],
                            u = s.continuous ? B1 : H1;
                        r = (0, vt.set)(r, a, u(s, t))
                    }
                    return r
                }
                default:
                    return e
            }
        }
    });
    var W1, X1, j1, hm, mm = he(() => {
        "use strict";
        Ve();
        ({
            IX2_RAW_DATA_IMPORTED: W1,
            IX2_SESSION_STOPPED: X1,
            IX2_PARAMETER_CHANGED: j1
        } = Te), hm = (e = {}, t) => {
            switch (t.type) {
                case W1:
                    return t.payload.ixParameters || {};
                case X1:
                    return {};
                case j1: {
                    let {
                        key: r,
                        value: n
                    } = t.payload;
                    return e[r] = n, e
                }
                default:
                    return e
            }
        }
    });
    var bm = {};
    De(bm, {
        default: () => K1
    });
    var ym, Em, z1, K1, _m = he(() => {
        "use strict";
        ym = le(Wo());
        Nf();
        Jf();
        rd();
        Em = le(Dt());
        vm();
        mm();
        ({
            ixElements: z1
        } = Em.IX2ElementsReducer), K1 = (0, ym.combineReducers)({
            ixData: Lf,
            ixRequest: Zf,
            ixSession: td,
            ixElements: z1,
            ixInstances: gm,
            ixParameters: hm
        })
    });
    var Tm = c((QX, Im) => {
        var Y1 = _t(),
            $1 = we(),
            Q1 = dt(),
            Z1 = "[object String]";

        function J1(e) {
            return typeof e == "string" || !$1(e) && Q1(e) && Y1(e) == Z1
        }
        Im.exports = J1
    });
    var xm = c((ZX, wm) => {
        var eD = ya(),
            tD = eD("length");
        wm.exports = tD
    });
    var Am = c((JX, Om) => {
        var rD = "\\ud800-\\udfff",
            nD = "\\u0300-\\u036f",
            iD = "\\ufe20-\\ufe2f",
            oD = "\\u20d0-\\u20ff",
            aD = nD + iD + oD,
            sD = "\\ufe0e\\ufe0f",
            uD = "\\u200d",
            cD = RegExp("[" + uD + rD + aD + sD + "]");

        function lD(e) {
            return cD.test(e)
        }
        Om.exports = lD
    });
    var Mm = c((ej, Fm) => {
        var Cm = "\\ud800-\\udfff",
            fD = "\\u0300-\\u036f",
            dD = "\\ufe20-\\ufe2f",
            pD = "\\u20d0-\\u20ff",
            gD = fD + dD + pD,
            vD = "\\ufe0e\\ufe0f",
            hD = "[" + Cm + "]",
            Ya = "[" + gD + "]",
            $a = "\\ud83c[\\udffb-\\udfff]",
            mD = "(?:" + Ya + "|" + $a + ")",
            Rm = "[^" + Cm + "]",
            Lm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Nm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            yD = "\\u200d",
            Pm = mD + "?",
            qm = "[" + vD + "]?",
            ED = "(?:" + yD + "(?:" + [Rm, Lm, Nm].join("|") + ")" + qm + Pm + ")*",
            bD = qm + Pm + ED,
            _D = "(?:" + [Rm + Ya + "?", Ya, Lm, Nm, hD].join("|") + ")",
            Sm = RegExp($a + "(?=" + $a + ")|" + _D + bD, "g");

        function ID(e) {
            for (var t = Sm.lastIndex = 0; Sm.test(e);) ++t;
            return t
        }
        Fm.exports = ID
    });
    var km = c((tj, Dm) => {
        var TD = xm(),
            wD = Am(),
            xD = Mm();

        function OD(e) {
            return wD(e) ? xD(e) : TD(e)
        }
        Dm.exports = OD
    });
    var Vm = c((rj, Gm) => {
        var AD = Bn(),
            SD = Hn(),
            CD = Nt(),
            RD = Tm(),
            LD = km(),
            ND = "[object Map]",
            PD = "[object Set]";

        function qD(e) {
            if (e == null) return 0;
            if (CD(e)) return RD(e) ? LD(e) : e.length;
            var t = SD(e);
            return t == ND || t == PD ? e.size : AD(e).length
        }
        Gm.exports = qD
    });
    var Bm = c((nj, Um) => {
        var FD = "Expected a function";

        function MD(e) {
            if (typeof e != "function") throw new TypeError(FD);
            return function () {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return !e.call(this);
                    case 1:
                        return !e.call(this, t[0]);
                    case 2:
                        return !e.call(this, t[0], t[1]);
                    case 3:
                        return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Um.exports = MD
    });
    var Qa = c((ij, Hm) => {
        var DD = It(),
            kD = function () {
                try {
                    var e = DD(Object, "defineProperty");
                    return e({}, "", {}), e
                } catch { }
            }();
        Hm.exports = kD
    });
    var Za = c((oj, Xm) => {
        var Wm = Qa();

        function GD(e, t, r) {
            t == "__proto__" && Wm ? Wm(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        Xm.exports = GD
    });
    var zm = c((aj, jm) => {
        var VD = Za(),
            UD = Nn(),
            BD = Object.prototype,
            HD = BD.hasOwnProperty;

        function WD(e, t, r) {
            var n = e[t];
            (!(HD.call(e, t) && UD(n, r)) || r === void 0 && !(t in e)) && VD(e, t, r)
        }
        jm.exports = WD
    });
    var $m = c((sj, Ym) => {
        var XD = zm(),
            jD = Gr(),
            zD = kn(),
            Km = st(),
            KD = tr();

        function YD(e, t, r, n) {
            if (!Km(e)) return e;
            t = jD(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
                var u = KD(t[i]),
                    l = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
                if (i != a) {
                    var h = s[u];
                    l = n ? n(h, u, s) : void 0, l === void 0 && (l = Km(h) ? h : zD(t[i + 1]) ? [] : {})
                }
                XD(s, u, l), s = s[u]
            }
            return e
        }
        Ym.exports = YD
    });
    var Zm = c((uj, Qm) => {
        var $D = jn(),
            QD = $m(),
            ZD = Gr();

        function JD(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i;) {
                var a = t[n],
                    s = $D(e, a);
                r(s, a) && QD(o, ZD(a, e), s)
            }
            return o
        }
        Qm.exports = JD
    });
    var ey = c((cj, Jm) => {
        var e2 = Mn(),
            t2 = Lo(),
            r2 = na(),
            n2 = ra(),
            i2 = Object.getOwnPropertySymbols,
            o2 = i2 ? function (e) {
                for (var t = []; e;) e2(t, r2(e)), e = t2(e);
                return t
            } : n2;
        Jm.exports = o2
    });
    var ry = c((lj, ty) => {
        function a2(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e)) t.push(r);
            return t
        }
        ty.exports = a2
    });
    var iy = c((fj, ny) => {
        var s2 = st(),
            u2 = Un(),
            c2 = ry(),
            l2 = Object.prototype,
            f2 = l2.hasOwnProperty;

        function d2(e) {
            if (!s2(e)) return c2(e);
            var t = u2(e),
                r = [];
            for (var n in e) n == "constructor" && (t || !f2.call(e, n)) || r.push(n);
            return r
        }
        ny.exports = d2
    });
    var ay = c((dj, oy) => {
        var p2 = oa(),
            g2 = iy(),
            v2 = Nt();

        function h2(e) {
            return v2(e) ? p2(e, !0) : g2(e)
        }
        oy.exports = h2
    });
    var uy = c((pj, sy) => {
        var m2 = ta(),
            y2 = ey(),
            E2 = ay();

        function b2(e) {
            return m2(e, E2, y2)
        }
        sy.exports = b2
    });
    var ly = c((gj, cy) => {
        var _2 = ma(),
            I2 = Tt(),
            T2 = Zm(),
            w2 = uy();

        function x2(e, t) {
            if (e == null) return {};
            var r = _2(w2(e), function (n) {
                return [n]
            });
            return t = I2(t), T2(e, r, function (n, i) {
                return t(n, i[0])
            })
        }
        cy.exports = x2
    });
    var dy = c((vj, fy) => {
        var O2 = Tt(),
            A2 = Bm(),
            S2 = ly();

        function C2(e, t) {
            return S2(e, A2(O2(t)))
        }
        fy.exports = C2
    });
    var gy = c((hj, py) => {
        var R2 = Bn(),
            L2 = Hn(),
            N2 = Pr(),
            P2 = we(),
            q2 = Nt(),
            F2 = Dn(),
            M2 = Un(),
            D2 = Vn(),
            k2 = "[object Map]",
            G2 = "[object Set]",
            V2 = Object.prototype,
            U2 = V2.hasOwnProperty;

        function B2(e) {
            if (e == null) return !0;
            if (q2(e) && (P2(e) || typeof e == "string" || typeof e.splice == "function" || F2(e) || D2(e) || N2(e))) return !e.length;
            var t = L2(e);
            if (t == k2 || t == G2) return !e.size;
            if (M2(e)) return !R2(e).length;
            for (var r in e)
                if (U2.call(e, r)) return !1;
            return !0
        }
        py.exports = B2
    });
    var hy = c((mj, vy) => {
        var H2 = Za(),
            W2 = Ga(),
            X2 = Tt();

        function j2(e, t) {
            var r = {};
            return t = X2(t, 3), W2(e, function (n, i, o) {
                H2(r, i, t(n, i, o))
            }), r
        }
        vy.exports = j2
    });
    var yy = c((yj, my) => {
        function z2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
            return e
        }
        my.exports = z2
    });
    var by = c((Ej, Ey) => {
        var K2 = Kn();

        function Y2(e) {
            return typeof e == "function" ? e : K2
        }
        Ey.exports = Y2
    });
    var Iy = c((bj, _y) => {
        var $2 = yy(),
            Q2 = Va(),
            Z2 = by(),
            J2 = we();

        function ek(e, t) {
            var r = J2(e) ? $2 : Q2;
            return r(e, Z2(t))
        }
        _y.exports = ek
    });
    var wy = c((_j, Ty) => {
        var tk = Qe(),
            rk = function () {
                return tk.Date.now()
            };
        Ty.exports = rk
    });
    var Ay = c((Ij, Oy) => {
        var nk = st(),
            Ja = wy(),
            xy = Yn(),
            ik = "Expected a function",
            ok = Math.max,
            ak = Math.min;

        function sk(e, t, r) {
            var n, i, o, a, s, u, l = 0,
                h = !1,
                d = !1,
                v = !0;
            if (typeof e != "function") throw new TypeError(ik);
            t = xy(t) || 0, nk(r) && (h = !!r.leading, d = "maxWait" in r, o = d ? ok(xy(r.maxWait) || 0, t) : o, v = "trailing" in r ? !!r.trailing : v);

            function p(P) {
                var W = n,
                    X = i;
                return n = i = void 0, l = P, a = e.apply(X, W), a
            }

            function g(P) {
                return l = P, s = setTimeout(I, t), h ? p(P) : a
            }

            function b(P) {
                var W = P - u,
                    X = P - l,
                    z = t - W;
                return d ? ak(z, o - X) : z
            }

            function w(P) {
                var W = P - u,
                    X = P - l;
                return u === void 0 || W >= t || W < 0 || d && X >= o
            }

            function I() {
                var P = Ja();
                if (w(P)) return L(P);
                s = setTimeout(I, b(P))
            }

            function L(P) {
                return s = void 0, v && n ? p(P) : (n = i = void 0, a)
            }

            function A() {
                s !== void 0 && clearTimeout(s), l = 0, n = u = i = s = void 0
            }

            function q() {
                return s === void 0 ? a : L(Ja())
            }

            function F() {
                var P = Ja(),
                    W = w(P);
                if (n = arguments, i = this, u = P, W) {
                    if (s === void 0) return g(u);
                    if (d) return clearTimeout(s), s = setTimeout(I, t), p(u)
                }
                return s === void 0 && (s = setTimeout(I, t)), a
            }
            return F.cancel = A, F.flush = q, F
        }
        Oy.exports = sk
    });
    var Cy = c((Tj, Sy) => {
        var uk = Ay(),
            ck = st(),
            lk = "Expected a function";

        function fk(e, t, r) {
            var n = !0,
                i = !0;
            if (typeof e != "function") throw new TypeError(lk);
            return ck(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), uk(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        Sy.exports = fk
    });
    var Ly = {};
    De(Ly, {
        actionListPlaybackChanged: () => pr,
        animationFrameChanged: () => di,
        clearRequested: () => Mk,
        elementStateChanged: () => ss,
        eventListenerAdded: () => fi,
        eventStateChanged: () => is,
        instanceAdded: () => os,
        instanceRemoved: () => as,
        instanceStarted: () => pi,
        mediaQueriesDefined: () => cs,
        parameterChanged: () => dr,
        playbackRequested: () => qk,
        previewRequested: () => Pk,
        rawDataImported: () => es,
        sessionInitialized: () => ts,
        sessionStarted: () => rs,
        sessionStopped: () => ns,
        stopRequested: () => Fk,
        testFrameRendered: () => Dk,
        viewportWidthChanged: () => us
    });
    var Ry, dk, pk, gk, vk, hk, mk, yk, Ek, bk, _k, Ik, Tk, wk, xk, Ok, Ak, Sk, Ck, Rk, Lk, Nk, es, ts, rs, ns, Pk, qk, Fk, Mk, fi, Dk, is, di, dr, os, pi, as, ss, pr, us, cs, gi = he(() => {
        "use strict";
        Ve();
        Ry = le(Dt()), {
            IX2_RAW_DATA_IMPORTED: dk,
            IX2_SESSION_INITIALIZED: pk,
            IX2_SESSION_STARTED: gk,
            IX2_SESSION_STOPPED: vk,
            IX2_PREVIEW_REQUESTED: hk,
            IX2_PLAYBACK_REQUESTED: mk,
            IX2_STOP_REQUESTED: yk,
            IX2_CLEAR_REQUESTED: Ek,
            IX2_EVENT_LISTENER_ADDED: bk,
            IX2_TEST_FRAME_RENDERED: _k,
            IX2_EVENT_STATE_CHANGED: Ik,
            IX2_ANIMATION_FRAME_CHANGED: Tk,
            IX2_PARAMETER_CHANGED: wk,
            IX2_INSTANCE_ADDED: xk,
            IX2_INSTANCE_STARTED: Ok,
            IX2_INSTANCE_REMOVED: Ak,
            IX2_ELEMENT_STATE_CHANGED: Sk,
            IX2_ACTION_LIST_PLAYBACK_CHANGED: Ck,
            IX2_VIEWPORT_WIDTH_CHANGED: Rk,
            IX2_MEDIA_QUERIES_DEFINED: Lk
        } = Te, {
            reifyState: Nk
        } = Ry.IX2VanillaUtils, es = e => ({
            type: dk,
            payload: {
                ...Nk(e)
            }
        }), ts = ({
            hasBoundaryNodes: e,
            reducedMotion: t
        }) => ({
            type: pk,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }), rs = () => ({
            type: gk
        }), ns = () => ({
            type: vk
        }), Pk = ({
            rawData: e,
            defer: t
        }) => ({
            type: hk,
            payload: {
                defer: t,
                rawData: e
            }
        }), qk = ({
            actionTypeId: e = Ge.GENERAL_START_ACTION,
            actionListId: t,
            actionItemId: r,
            eventId: n,
            allowEvents: i,
            immediate: o,
            testManual: a,
            verbose: s,
            rawData: u
        }) => ({
            type: mk,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: s,
                rawData: u
            }
        }), Fk = e => ({
            type: yk,
            payload: {
                actionListId: e
            }
        }), Mk = () => ({
            type: Ek
        }), fi = (e, t) => ({
            type: bk,
            payload: {
                target: e,
                listenerParams: t
            }
        }), Dk = (e = 1) => ({
            type: _k,
            payload: {
                step: e
            }
        }), is = (e, t) => ({
            type: Ik,
            payload: {
                stateKey: e,
                newState: t
            }
        }), di = (e, t) => ({
            type: Tk,
            payload: {
                now: e,
                parameters: t
            }
        }), dr = (e, t) => ({
            type: wk,
            payload: {
                key: e,
                value: t
            }
        }), os = e => ({
            type: xk,
            payload: {
                ...e
            }
        }), pi = (e, t) => ({
            type: Ok,
            payload: {
                instanceId: e,
                time: t
            }
        }), as = e => ({
            type: Ak,
            payload: {
                instanceId: e
            }
        }), ss = (e, t, r, n) => ({
            type: Sk,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }), pr = ({
            actionListId: e,
            isPlaying: t
        }) => ({
            type: Ck,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }), us = ({
            width: e,
            mediaQueries: t
        }) => ({
            type: Rk,
            payload: {
                width: e,
                mediaQueries: t
            }
        }), cs = () => ({
            type: Lk
        })
    });
    var qe = {};
    De(qe, {
        elementContains: () => ds,
        getChildElements: () => zk,
        getClosestElement: () => $r,
        getProperty: () => Bk,
        getQuerySelector: () => fs,
        getRefType: () => ps,
        getSiblingElements: () => Kk,
        getStyle: () => Uk,
        getValidDocument: () => Wk,
        isSiblingNode: () => jk,
        matchSelector: () => Hk,
        queryDocument: () => Xk,
        setStyle: () => Vk
    });

    function Vk(e, t, r) {
        e.style[t] = r
    }

    function Uk(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }

    function Bk(e, t) {
        return e[t]
    }

    function Hk(e) {
        return t => t[ls](e)
    }

    function fs({
        id: e,
        selector: t
    }) {
        if (e) {
            let r = e;
            if (e.indexOf(Ny) !== -1) {
                let n = e.split(Ny),
                    i = n[0];
                if (r = n[1], i !== document.documentElement.getAttribute(qy)) return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }

    function Wk(e) {
        return e == null || e === document.documentElement.getAttribute(qy) ? document : null
    }

    function Xk(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }

    function ds(e, t) {
        return e.contains(t)
    }

    function jk(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }

    function zk(e) {
        let t = [];
        for (let r = 0, {
            length: n
        } = e || []; r < n; r++) {
            let {
                children: i
            } = e[r], {
                length: o
            } = i;
            if (o)
                for (let a = 0; a < o; a++) t.push(i[a])
        }
        return t
    }

    function Kk(e = []) {
        let t = [],
            r = [];
        for (let n = 0, {
            length: i
        } = e; n < i; n++) {
            let {
                parentNode: o
            } = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
            r.push(o);
            let a = o.firstElementChild;
            for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
        }
        return t
    }

    function ps(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? kk : Gk : null
    }
    var Py, ls, Ny, kk, Gk, qy, $r, Fy = he(() => {
        "use strict";
        Py = le(Dt());
        Ve();
        ({
            ELEMENT_MATCHES: ls
        } = Py.IX2BrowserSupport), {
            IX2_ID_DELIMITER: Ny,
            HTML_ELEMENT: kk,
            PLAIN_OBJECT: Gk,
            WF_PAGE: qy
        } = Ce;
        $r = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
                if (r[ls] && r[ls](t)) return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    });
    var gs = c((Oj, Dy) => {
        var Yk = st(),
            My = Object.create,
            $k = function () {
                function e() { }
                return function (t) {
                    if (!Yk(t)) return {};
                    if (My) return My(t);
                    e.prototype = t;
                    var r = new e;
                    return e.prototype = void 0, r
                }
            }();
        Dy.exports = $k
    });
    var vi = c((Aj, ky) => {
        function Qk() { }
        ky.exports = Qk
    });
    var mi = c((Sj, Gy) => {
        var Zk = gs(),
            Jk = vi();

        function hi(e, t) {
            this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
        }
        hi.prototype = Zk(Jk.prototype);
        hi.prototype.constructor = hi;
        Gy.exports = hi
    });
    var Hy = c((Cj, By) => {
        var Vy = Wt(),
            eG = Pr(),
            tG = we(),
            Uy = Vy ? Vy.isConcatSpreadable : void 0;

        function rG(e) {
            return tG(e) || eG(e) || !!(Uy && e && e[Uy])
        }
        By.exports = rG
    });
    var jy = c((Rj, Xy) => {
        var nG = Mn(),
            iG = Hy();

        function Wy(e, t, r, n, i) {
            var o = -1,
                a = e.length;
            for (r || (r = iG), i || (i = []); ++o < a;) {
                var s = e[o];
                t > 0 && r(s) ? t > 1 ? Wy(s, t - 1, r, n, i) : nG(i, s) : n || (i[i.length] = s)
            }
            return i
        }
        Xy.exports = Wy
    });
    var Ky = c((Lj, zy) => {
        var oG = jy();

        function aG(e) {
            var t = e == null ? 0 : e.length;
            return t ? oG(e, 1) : []
        }
        zy.exports = aG
    });
    var $y = c((Nj, Yy) => {
        function sG(e, t, r) {
            switch (r.length) {
                case 0:
                    return e.call(t);
                case 1:
                    return e.call(t, r[0]);
                case 2:
                    return e.call(t, r[0], r[1]);
                case 3:
                    return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        Yy.exports = sG
    });
    var Jy = c((Pj, Zy) => {
        var uG = $y(),
            Qy = Math.max;

        function cG(e, t, r) {
            return t = Qy(t === void 0 ? e.length - 1 : t, 0),
                function () {
                    for (var n = arguments, i = -1, o = Qy(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
                    i = -1;
                    for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
                    return s[t] = r(a), uG(e, this, s)
                }
        }
        Zy.exports = cG
    });
    var tE = c((qj, eE) => {
        function lG(e) {
            return function () {
                return e
            }
        }
        eE.exports = lG
    });
    var iE = c((Fj, nE) => {
        var fG = tE(),
            rE = Qa(),
            dG = Kn(),
            pG = rE ? function (e, t) {
                return rE(e, "toString", {
                    configurable: !0,
                    enumerable: !1,
                    value: fG(t),
                    writable: !0
                })
            } : dG;
        nE.exports = pG
    });
    var aE = c((Mj, oE) => {
        var gG = 800,
            vG = 16,
            hG = Date.now;

        function mG(e) {
            var t = 0,
                r = 0;
            return function () {
                var n = hG(),
                    i = vG - (n - r);
                if (r = n, i > 0) {
                    if (++t >= gG) return arguments[0]
                } else t = 0;
                return e.apply(void 0, arguments)
            }
        }
        oE.exports = mG
    });
    var uE = c((Dj, sE) => {
        var yG = iE(),
            EG = aE(),
            bG = EG(yG);
        sE.exports = bG
    });
    var lE = c((kj, cE) => {
        var _G = Ky(),
            IG = Jy(),
            TG = uE();

        function wG(e) {
            return TG(IG(e, void 0, _G), e + "")
        }
        cE.exports = wG
    });
    var pE = c((Gj, dE) => {
        var fE = aa(),
            xG = fE && new fE;
        dE.exports = xG
    });
    var vE = c((Vj, gE) => {
        function OG() { }
        gE.exports = OG
    });
    var vs = c((Uj, mE) => {
        var hE = pE(),
            AG = vE(),
            SG = hE ? function (e) {
                return hE.get(e)
            } : AG;
        mE.exports = SG
    });
    var EE = c((Bj, yE) => {
        var CG = {};
        yE.exports = CG
    });
    var hs = c((Hj, _E) => {
        var bE = EE(),
            RG = Object.prototype,
            LG = RG.hasOwnProperty;

        function NG(e) {
            for (var t = e.name + "", r = bE[t], n = LG.call(bE, t) ? r.length : 0; n--;) {
                var i = r[n],
                    o = i.func;
                if (o == null || o == e) return i.name
            }
            return t
        }
        _E.exports = NG
    });
    var Ei = c((Wj, IE) => {
        var PG = gs(),
            qG = vi(),
            FG = 4294967295;

        function yi(e) {
            this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = FG, this.__views__ = []
        }
        yi.prototype = PG(qG.prototype);
        yi.prototype.constructor = yi;
        IE.exports = yi
    });
    var wE = c((Xj, TE) => {
        function MG(e, t) {
            var r = -1,
                n = e.length;
            for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
            return t
        }
        TE.exports = MG
    });
    var OE = c((jj, xE) => {
        var DG = Ei(),
            kG = mi(),
            GG = wE();

        function VG(e) {
            if (e instanceof DG) return e.clone();
            var t = new kG(e.__wrapped__, e.__chain__);
            return t.__actions__ = GG(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
        }
        xE.exports = VG
    });
    var CE = c((zj, SE) => {
        var UG = Ei(),
            AE = mi(),
            BG = vi(),
            HG = we(),
            WG = dt(),
            XG = OE(),
            jG = Object.prototype,
            zG = jG.hasOwnProperty;

        function bi(e) {
            if (WG(e) && !HG(e) && !(e instanceof UG)) {
                if (e instanceof AE) return e;
                if (zG.call(e, "__wrapped__")) return XG(e)
            }
            return new AE(e)
        }
        bi.prototype = BG.prototype;
        bi.prototype.constructor = bi;
        SE.exports = bi
    });
    var LE = c((Kj, RE) => {
        var KG = Ei(),
            YG = vs(),
            $G = hs(),
            QG = CE();

        function ZG(e) {
            var t = $G(e),
                r = QG[t];
            if (typeof r != "function" || !(t in KG.prototype)) return !1;
            if (e === r) return !0;
            var n = YG(r);
            return !!n && e === n[0]
        }
        RE.exports = ZG
    });
    var FE = c((Yj, qE) => {
        var NE = mi(),
            JG = lE(),
            eV = vs(),
            ms = hs(),
            tV = we(),
            PE = LE(),
            rV = "Expected a function",
            nV = 8,
            iV = 32,
            oV = 128,
            aV = 256;

        function sV(e) {
            return JG(function (t) {
                var r = t.length,
                    n = r,
                    i = NE.prototype.thru;
                for (e && t.reverse(); n--;) {
                    var o = t[n];
                    if (typeof o != "function") throw new TypeError(rV);
                    if (i && !a && ms(o) == "wrapper") var a = new NE([], !0)
                }
                for (n = a ? n : r; ++n < r;) {
                    o = t[n];
                    var s = ms(o),
                        u = s == "wrapper" ? eV(o) : void 0;
                    u && PE(u[0]) && u[1] == (oV | nV | iV | aV) && !u[4].length && u[9] == 1 ? a = a[ms(u[0])].apply(a, u[3]) : a = o.length == 1 && PE(o) ? a[s]() : a.thru(o)
                }
                return function () {
                    var l = arguments,
                        h = l[0];
                    if (a && l.length == 1 && tV(h)) return a.plant(h).value();
                    for (var d = 0, v = r ? t[d].apply(this, l) : h; ++d < r;) v = t[d].call(this, v);
                    return v
                }
            })
        }
        qE.exports = sV
    });
    var DE = c(($j, ME) => {
        var uV = FE(),
            cV = uV();
        ME.exports = cV
    });
    var GE = c((Qj, kE) => {
        function lV(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
        }
        kE.exports = lV
    });
    var UE = c((Zj, VE) => {
        var fV = GE(),
            ys = Yn();

        function dV(e, t, r) {
            return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = ys(r), r = r === r ? r : 0), t !== void 0 && (t = ys(t), t = t === t ? t : 0), fV(ys(e), t, r)
        }
        VE.exports = dV
    });
    var $E, QE, ZE, JE, pV, gV, vV, hV, mV, yV, EV, bV, _V, IV, TV, wV, xV, OV, AV, eb, tb, SV, CV, RV, rb, LV, NV, nb, PV, Es, ib, BE, HE, ob, Zr, qV, lt, ab, FV, Be, et, Jr, sb, bs, WE, _s, MV, Qr, DV, kV, GV, ub, XE, VV, jE, UV, BV, HV, zE, _i, Ii, KE, YE, cb, lb = he(() => {
        "use strict";
        $E = le(DE()), QE = le(zn()), ZE = le(UE());
        Ve();
        Is();
        gi();
        JE = le(Dt()), {
            MOUSE_CLICK: pV,
            MOUSE_SECOND_CLICK: gV,
            MOUSE_DOWN: vV,
            MOUSE_UP: hV,
            MOUSE_OVER: mV,
            MOUSE_OUT: yV,
            DROPDOWN_CLOSE: EV,
            DROPDOWN_OPEN: bV,
            SLIDER_ACTIVE: _V,
            SLIDER_INACTIVE: IV,
            TAB_ACTIVE: TV,
            TAB_INACTIVE: wV,
            NAVBAR_CLOSE: xV,
            NAVBAR_OPEN: OV,
            MOUSE_MOVE: AV,
            PAGE_SCROLL_DOWN: eb,
            SCROLL_INTO_VIEW: tb,
            SCROLL_OUT_OF_VIEW: SV,
            PAGE_SCROLL_UP: CV,
            SCROLLING_IN_VIEW: RV,
            PAGE_FINISH: rb,
            ECOMMERCE_CART_CLOSE: LV,
            ECOMMERCE_CART_OPEN: NV,
            PAGE_START: nb,
            PAGE_SCROLL: PV
        } = Ze, Es = "COMPONENT_ACTIVE", ib = "COMPONENT_INACTIVE", {
            COLON_DELIMITER: BE
        } = Ce, {
            getNamespacedParameterId: HE
        } = JE.IX2VanillaUtils, ob = e => t => typeof t == "object" && e(t) ? !0 : t, Zr = ob(({
            element: e,
            nativeEvent: t
        }) => e === t.target), qV = ob(({
            element: e,
            nativeEvent: t
        }) => e.contains(t.target)), lt = (0, $E.default)([Zr, qV]), ab = (e, t) => {
            if (t) {
                let {
                    ixData: r
                } = e.getState(), {
                    events: n
                } = r, i = n[t];
                if (i && !MV[i.eventTypeId]) return i
            }
            return null
        }, FV = ({
            store: e,
            event: t
        }) => {
            let {
                action: r
            } = t, {
                autoStopEventId: n
            } = r.config;
            return !!ab(e, n)
        }, Be = ({
            store: e,
            event: t,
            element: r,
            eventStateKey: n
        }, i) => {
            let {
                action: o,
                id: a
            } = t, {
                actionListId: s,
                autoStopEventId: u
            } = o.config, l = ab(e, u);
            return l && gr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + BE + n.split(BE)[1],
                actionListId: (0, QE.default)(l, "action.config.actionListId")
            }), gr({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }), en({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }), i
        }, et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, Jr = {
            handler: et(lt, Be)
        }, sb = {
            ...Jr,
            types: [Es, ib].join(" ")
        }, bs = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }], WE = "mouseover mouseout", _s = {
            types: bs
        }, MV = {
            PAGE_START: nb,
            PAGE_FINISH: rb
        }, Qr = (() => {
            let e = window.pageXOffset !== void 0,
                r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0, ZE.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        })(), DV = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), kV = ({
            element: e,
            nativeEvent: t
        }) => {
            let {
                type: r,
                target: n,
                relatedTarget: i
            } = t, o = e.contains(n);
            if (r === "mouseover" && o) return !0;
            let a = e.contains(i);
            return !!(r === "mouseout" && o && a)
        }, GV = e => {
            let {
                element: t,
                event: {
                    config: r
                }
            } = e, {
                clientWidth: n,
                clientHeight: i
            } = Qr(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return DV(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }, ub = e => (t, r) => {
            let {
                type: n
            } = t.nativeEvent, i = [Es, ib].indexOf(n) !== -1 ? n === Es : r.isActive, o = {
                ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }, XE = e => (t, r) => {
            let n = {
                elementHovered: kV(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }, VV = e => (t, r) => {
            let n = {
                ...r,
                elementVisible: GV(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }, jE = e => (t, r = {}) => {
            let {
                stiffScrollTop: n,
                scrollHeight: i,
                innerHeight: o
            } = Qr(), {
                event: {
                    config: a,
                    eventTypeId: s
                }
            } = t, {
                scrollOffsetValue: u,
                scrollOffsetUnit: l
            } = a, h = l === "PX", d = i - o, v = Number((n / d).toFixed(2));
            if (r && r.percentTop === v) return r;
            let p = (h ? u : o * (u || 0) / 100) / d,
                g, b, w = 0;
            r && (g = v > r.percentTop, b = r.scrollingDown !== g, w = b ? v : r.anchorTop);
            let I = s === eb ? v >= w + p : v <= w - p,
                L = {
                    ...r,
                    percentTop: v,
                    inBounds: I,
                    anchorTop: w,
                    scrollingDown: g
                };
            return r && I && (b || L.inBounds !== r.inBounds) && e(t, L) || L
        }, UV = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, BV = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t), n
        }, HV = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t), n
        }, zE = e => (t, r = {
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }, _i = (e = !0) => ({
            ...sb,
            handler: et(e ? lt : Zr, ub((t, r) => r.isActive ? Jr.handler(t, r) : r))
        }), Ii = (e = !0) => ({
            ...sb,
            handler: et(e ? lt : Zr, ub((t, r) => r.isActive ? r : Jr.handler(t, r)))
        }), KE = {
            ..._s,
            handler: VV((e, t) => {
                let {
                    elementVisible: r
                } = t, {
                    event: n,
                    store: i
                } = e, {
                    ixData: o
                } = i.getState(), {
                    events: a
                } = o;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === tb === r ? (Be(e), {
                    ...t,
                    triggered: !0
                }) : t
            })
        }, YE = .05, cb = {
            [_V]: _i(),
            [IV]: Ii(),
            [bV]: _i(),
            [EV]: Ii(),
            [OV]: _i(!1),
            [xV]: Ii(!1),
            [TV]: _i(),
            [wV]: Ii(),
            [NV]: {
                types: "ecommerce-cart-open",
                handler: et(lt, Be)
            },
            [LV]: {
                types: "ecommerce-cart-close",
                handler: et(lt, Be)
            },
            [pV]: {
                types: "click",
                handler: et(lt, zE((e, {
                    clickCount: t
                }) => {
                    FV(e) ? t === 1 && Be(e) : Be(e)
                }))
            },
            [gV]: {
                types: "click",
                handler: et(lt, zE((e, {
                    clickCount: t
                }) => {
                    t === 2 && Be(e)
                }))
            },
            [vV]: {
                ...Jr,
                types: "mousedown"
            },
            [hV]: {
                ...Jr,
                types: "mouseup"
            },
            [mV]: {
                types: WE,
                handler: et(lt, XE((e, t) => {
                    t.elementHovered && Be(e)
                }))
            },
            [yV]: {
                types: WE,
                handler: et(lt, XE((e, t) => {
                    t.elementHovered || Be(e)
                }))
            },
            [AV]: {
                types: "mousemove mouseout scroll",
                handler: ({
                    store: e,
                    element: t,
                    eventConfig: r,
                    nativeEvent: n,
                    eventStateKey: i
                }, o = {
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {
                        basedOn: a,
                        selectedAxis: s,
                        continuousParameterGroupId: u,
                        reverse: l,
                        restingState: h = 0
                    } = r, {
                        clientX: d = o.clientX,
                        clientY: v = o.clientY,
                        pageX: p = o.pageX,
                        pageY: g = o.pageY
                    } = n, b = s === "X_AXIS", w = n.type === "mouseout", I = h / 100, L = u, A = !1;
                    switch (a) {
                        case at.VIEWPORT: {
                            I = b ? Math.min(d, window.innerWidth) / window.innerWidth : Math.min(v, window.innerHeight) / window.innerHeight;
                            break
                        }
                        case at.PAGE: {
                            let {
                                scrollLeft: q,
                                scrollTop: F,
                                scrollWidth: P,
                                scrollHeight: W
                            } = Qr();
                            I = b ? Math.min(q + p, P) / P : Math.min(F + g, W) / W;
                            break
                        }
                        case at.ELEMENT:
                        default: {
                            L = HE(i, u);
                            let q = n.type.indexOf("mouse") === 0;
                            if (q && lt({
                                element: t,
                                nativeEvent: n
                            }) !== !0) break;
                            let F = t.getBoundingClientRect(),
                                {
                                    left: P,
                                    top: W,
                                    width: X,
                                    height: z
                                } = F;
                            if (!q && !UV({
                                left: d,
                                top: v
                            }, F)) break;
                            A = !0, I = b ? (d - P) / X : (v - W) / z;
                            break
                        }
                    }
                    return w && (I > 1 - YE || I < YE) && (I = Math.round(I)), (a !== at.ELEMENT || A || A !== o.elementHovered) && (I = l ? 1 - I : I, e.dispatch(dr(L, I))), {
                        elementHovered: A,
                        clientX: d,
                        clientY: v,
                        pageX: p,
                        pageY: g
                    }
                }
            },
            [PV]: {
                types: bs,
                handler: ({
                    store: e,
                    eventConfig: t
                }) => {
                    let {
                        continuousParameterGroupId: r,
                        reverse: n
                    } = t, {
                        scrollTop: i,
                        scrollHeight: o,
                        clientHeight: a
                    } = Qr(), s = i / (o - a);
                    s = n ? 1 - s : s, e.dispatch(dr(r, s))
                }
            },
            [RV]: {
                types: bs,
                handler: ({
                    element: e,
                    store: t,
                    eventConfig: r,
                    eventStateKey: n
                }, i = {
                    scrollPercent: 0
                }) => {
                    let {
                        scrollLeft: o,
                        scrollTop: a,
                        scrollWidth: s,
                        scrollHeight: u,
                        clientHeight: l
                    } = Qr(), {
                        basedOn: h,
                        selectedAxis: d,
                        continuousParameterGroupId: v,
                        startsEntering: p,
                        startsExiting: g,
                        addEndOffset: b,
                        addStartOffset: w,
                        addOffsetValue: I = 0,
                        endOffsetValue: L = 0
                    } = r, A = d === "X_AXIS";
                    if (h === at.VIEWPORT) {
                        let q = A ? o / s : a / u;
                        return q !== i.scrollPercent && t.dispatch(dr(v, q)), {
                            scrollPercent: q
                        }
                    } else {
                        let q = HE(n, v),
                            F = e.getBoundingClientRect(),
                            P = (w ? I : 0) / 100,
                            W = (b ? L : 0) / 100;
                        P = p ? P : 1 - P, W = g ? W : 1 - W;
                        let X = F.top + Math.min(F.height * P, l),
                            Z = F.top + F.height * W - X,
                            U = Math.min(l + Z, u),
                            y = Math.min(Math.max(0, l - X), U) / U;
                        return y !== i.scrollPercent && t.dispatch(dr(q, y)), {
                            scrollPercent: y
                        }
                    }
                }
            },
            [tb]: KE,
            [SV]: KE,
            [eb]: {
                ..._s,
                handler: jE((e, t) => {
                    t.scrollingDown && Be(e)
                })
            },
            [CV]: {
                ..._s,
                handler: jE((e, t) => {
                    t.scrollingDown || Be(e)
                })
            },
            [rb]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: et(Zr, BV(Be))
            },
            [nb]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: et(Zr, HV(Be))
            }
        }
    });
    var Ab = {};
    De(Ab, {
        observeRequests: () => cU,
        startActionGroup: () => en,
        startEngine: () => Si,
        stopActionGroup: () => gr,
        stopAllActionGroups: () => wb,
        stopEngine: () => Ci
    });

    function cU(e) {
        kt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.preview,
            onChange: dU
        }), kt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.playback,
            onChange: pU
        }), kt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.stop,
            onChange: gU
        }), kt({
            store: e,
            select: ({
                ixRequest: t
            }) => t.clear,
            onChange: vU
        })
    }

    function lU(e) {
        kt({
            store: e,
            select: ({
                ixSession: t
            }) => t.mediaQueryKey,
            onChange: () => {
                Ci(e), bb({
                    store: e,
                    elementApi: qe
                }), Si({
                    store: e,
                    allowEvents: !0
                }), _b()
            }
        })
    }

    function fU(e, t) {
        let r = kt({
            store: e,
            select: ({
                ixSession: n
            }) => n.tick,
            onChange: n => {
                t(n), r()
            }
        })
    }

    function dU({
        rawData: e,
        defer: t
    }, r) {
        let n = () => {
            Si({
                store: r,
                rawData: e,
                allowEvents: !0
            }), _b()
        };
        t ? setTimeout(n, 0) : n()
    }

    function _b() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function pU(e, t) {
        let {
            actionTypeId: r,
            actionListId: n,
            actionItemId: i,
            eventId: o,
            allowEvents: a,
            immediate: s,
            testManual: u,
            verbose: l = !0
        } = e, {
            rawData: h
        } = e;
        if (n && i && h && s) {
            let d = h.actionLists[n];
            d && (h = ZV({
                actionList: d,
                actionItemId: i,
                rawData: h
            }))
        }
        if (Si({
            store: t,
            rawData: h,
            allowEvents: a,
            testManual: u
        }), n && r === Ge.GENERAL_START_ACTION || Ts(r)) {
            gr({
                store: t,
                actionListId: n
            }), Tb({
                store: t,
                actionListId: n,
                eventId: o
            });
            let d = en({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: s,
                verbose: l
            });
            l && d && t.dispatch(pr({
                actionListId: n,
                isPlaying: !s
            }))
        }
    }

    function gU({
        actionListId: e
    }, t) {
        e ? gr({
            store: t,
            actionListId: e
        }) : wb({
            store: t
        }), Ci(t)
    }

    function vU(e, t) {
        Ci(t), bb({
            store: t,
            elementApi: qe
        })
    }

    function Si({
        store: e,
        rawData: t,
        allowEvents: r,
        testManual: n
    }) {
        let {
            ixSession: i
        } = e.getState();
        t && e.dispatch(es(t)), i.active || (e.dispatch(ts({
            hasBoundaryNodes: !!document.querySelector(wi),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })), r && (_U(e), hU(), e.getState().ixSession.hasDefinedMediaQueries && lU(e)), e.dispatch(rs()), mU(e, n))
    }

    function hU() {
        let {
            documentElement: e
        } = document;
        e.className.indexOf(fb) === -1 && (e.className += ` ${fb}`)
    }

    function mU(e, t) {
        let r = n => {
            let {
                ixSession: i,
                ixParameters: o
            } = e.getState();
            i.active && (e.dispatch(di(n, o)), t ? fU(e, r) : requestAnimationFrame(r))
        };
        r(window.performance.now())
    }

    function Ci(e) {
        let {
            ixSession: t
        } = e.getState();
        if (t.active) {
            let {
                eventListeners: r
            } = t;
            r.forEach(yU), rU(), e.dispatch(ns())
        }
    }

    function yU({
        target: e,
        listenerParams: t
    }) {
        e.removeEventListener.apply(e, t)
    }

    function EU({
        store: e,
        eventStateKey: t,
        eventTarget: r,
        eventId: n,
        eventConfig: i,
        actionListId: o,
        parameterGroup: a,
        smoothing: s,
        restingValue: u
    }) {
        let {
            ixData: l,
            ixSession: h
        } = e.getState(), {
            events: d
        } = l, v = d[n], {
            eventTypeId: p
        } = v, g = {}, b = {}, w = [], {
            continuousActionGroups: I
        } = a, {
            id: L
        } = a;
        JV(p, i) && (L = eU(t, L));
        let A = h.hasBoundaryNodes && r ? $r(r, wi) : null;
        I.forEach(q => {
            let {
                keyframe: F,
                actionItems: P
            } = q;
            P.forEach(W => {
                let {
                    actionTypeId: X
                } = W, {
                    target: z
                } = W.config;
                if (!z) return;
                let Z = z.boundaryMode ? A : null,
                    U = nU(z) + ws + X;
                if (b[U] = bU(b[U], F, W), !g[U]) {
                    g[U] = !0;
                    let {
                        config: N
                    } = W;
                    xi({
                        config: N,
                        event: v,
                        eventTarget: r,
                        elementRoot: Z,
                        elementApi: qe
                    }).forEach(y => {
                        w.push({
                            element: y,
                            key: U
                        })
                    })
                }
            })
        }), w.forEach(({
            element: q,
            key: F
        }) => {
            let P = b[F],
                W = (0, ht.default)(P, "[0].actionItems[0]", {}),
                {
                    actionTypeId: X
                } = W,
                z = Ai(X) ? Os(X)(q, W) : null,
                Z = xs({
                    element: q,
                    actionItem: W,
                    elementApi: qe
                }, z);
            As({
                store: e,
                element: q,
                eventId: n,
                actionListId: o,
                actionItem: W,
                destination: Z,
                continuous: !0,
                parameterId: L,
                actionGroups: P,
                smoothing: s,
                restingValue: u,
                pluginInstance: z
            })
        })
    }

    function bU(e = [], t, r) {
        let n = [...e],
            i;
        return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
            keyframe: t,
            actionItems: []
        })), n[i].actionItems.push(r), n
    }

    function _U(e) {
        let {
            ixData: t
        } = e.getState(), {
            eventTypeMap: r
        } = t;
        Ib(e), (0, vr.default)(r, (i, o) => {
            let a = cb[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            AU({
                logic: a,
                store: e,
                events: i
            })
        });
        let {
            ixSession: n
        } = e.getState();
        n.eventListeners.length && TU(e)
    }

    function TU(e) {
        let t = () => {
            Ib(e)
        };
        IU.forEach(r => {
            window.addEventListener(r, t), e.dispatch(fi(window, [r, t]))
        }), t()
    }

    function Ib(e) {
        let {
            ixSession: t,
            ixData: r
        } = e.getState(), n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {
                mediaQueries: i
            } = r;
            e.dispatch(us({
                width: n,
                mediaQueries: i
            }))
        }
    }

    function AU({
        logic: e,
        store: t,
        events: r
    }) {
        SU(r);
        let {
            types: n,
            handler: i
        } = e, {
            ixData: o
        } = t.getState(), {
            actionLists: a
        } = o, s = wU(r, OU);
        if (!(0, gb.default)(s)) return;
        (0, vr.default)(s, (d, v) => {
            let p = r[v],
                {
                    action: g,
                    id: b,
                    mediaQueries: w = o.mediaQueryKeys
                } = p,
                {
                    actionListId: I
                } = g.config;
            iU(w, o.mediaQueryKeys) || t.dispatch(cs()), g.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION && (Array.isArray(p.config) ? p.config : [p.config]).forEach(A => {
                let {
                    continuousParameterGroupId: q
                } = A, F = (0, ht.default)(a, `${I}.continuousParameterGroups`, []), P = (0, pb.default)(F, ({
                    id: z
                }) => z === q), W = (A.smoothing || 0) / 100, X = (A.restingState || 0) / 100;
                P && d.forEach((z, Z) => {
                    let U = b + ws + Z;
                    EU({
                        store: t,
                        eventStateKey: U,
                        eventTarget: z,
                        eventId: b,
                        eventConfig: A,
                        actionListId: I,
                        parameterGroup: P,
                        smoothing: W,
                        restingValue: X
                    })
                })
            }), (g.actionTypeId === Ge.GENERAL_START_ACTION || Ts(g.actionTypeId)) && Tb({
                store: t,
                actionListId: I,
                eventId: b
            })
        });
        let u = d => {
            let {
                ixSession: v
            } = t.getState();
            xU(s, (p, g, b) => {
                let w = r[g],
                    I = v.eventState[b],
                    {
                        action: L,
                        mediaQueries: A = o.mediaQueryKeys
                    } = w;
                if (!Oi(A, v.mediaQueryKey)) return;
                let q = (F = {}) => {
                    let P = i({
                        store: t,
                        element: p,
                        event: w,
                        eventConfig: F,
                        nativeEvent: d,
                        eventStateKey: b
                    }, I);
                    oU(P, I) || t.dispatch(is(b, P))
                };
                L.actionTypeId === Ge.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(w.config) ? w.config : [w.config]).forEach(q) : q()
            })
        },
            l = (0, yb.default)(u, uU),
            h = ({
                target: d = document,
                types: v,
                throttle: p
            }) => {
                v.split(" ").filter(Boolean).forEach(g => {
                    let b = p ? l : u;
                    d.addEventListener(g, b), t.dispatch(fi(d, [g, b]))
                })
            };
        Array.isArray(n) ? n.forEach(h) : typeof n == "string" && h(e)
    }

    function SU(e) {
        if (!sU) return;
        let t = {},
            r = "";
        for (let n in e) {
            let {
                eventTypeId: i,
                target: o
            } = e[n], a = fs(o);
            t[a] || (i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r, document.body.appendChild(n)
        }
    }

    function Tb({
        store: e,
        actionListId: t,
        eventId: r
    }) {
        let {
            ixData: n,
            ixSession: i
        } = e.getState(), {
            actionLists: o,
            events: a
        } = n, s = a[r], u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let l = (0, ht.default)(u, "actionItemGroups[0].actionItems", []),
                h = (0, ht.default)(s, "mediaQueries", n.mediaQueryKeys);
            if (!Oi(h, i.mediaQueryKey)) return;
            l.forEach(d => {
                let {
                    config: v,
                    actionTypeId: p
                } = d, g = v?.target?.useEventTarget === !0 && v?.target?.objectId == null ? {
                    target: s.target,
                    targets: s.targets
                } : v, b = xi({
                    config: g,
                    event: s,
                    elementApi: qe
                }), w = Ai(p);
                b.forEach(I => {
                    let L = w ? Os(p)(I, d) : null;
                    As({
                        destination: xs({
                            element: I,
                            actionItem: d,
                            elementApi: qe
                        }, L),
                        immediate: !0,
                        store: e,
                        element: I,
                        eventId: r,
                        actionItem: d,
                        actionListId: t,
                        pluginInstance: L
                    })
                })
            })
        }
    }

    function wb({
        store: e
    }) {
        let {
            ixInstances: t
        } = e.getState();
        (0, vr.default)(t, r => {
            if (!r.continuous) {
                let {
                    actionListId: n,
                    verbose: i
                } = r;
                Ss(r, e), i && e.dispatch(pr({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function gr({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i
    }) {
        let {
            ixInstances: o,
            ixSession: a
        } = e.getState(), s = a.hasBoundaryNodes && r ? $r(r, wi) : null;
        (0, vr.default)(o, u => {
            let l = (0, ht.default)(u, "actionItem.config.target.boundaryMode"),
                h = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && h) {
                if (s && l && !ds(s, u.element)) return;
                Ss(u, e), u.verbose && e.dispatch(pr({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        })
    }

    function en({
        store: e,
        eventId: t,
        eventTarget: r,
        eventStateKey: n,
        actionListId: i,
        groupIndex: o = 0,
        immediate: a,
        verbose: s
    }) {
        let {
            ixData: u,
            ixSession: l
        } = e.getState(), {
            events: h
        } = u, d = h[t] || {}, {
            mediaQueries: v = u.mediaQueryKeys
        } = d, p = (0, ht.default)(u, `actionLists.${i}`, {}), {
            actionItemGroups: g,
            useFirstGroupAsInitialState: b
        } = p;
        if (!g || !g.length) return !1;
        o >= g.length && (0, ht.default)(d, "config.loop") && (o = 0), o === 0 && b && o++;
        let I = (o === 0 || o === 1 && b) && Ts(d.action?.actionTypeId) ? d.config.delay : void 0,
            L = (0, ht.default)(g, [o, "actionItems"], []);
        if (!L.length || !Oi(v, l.mediaQueryKey)) return !1;
        let A = l.hasBoundaryNodes && r ? $r(r, wi) : null,
            q = YV(L),
            F = !1;
        return L.forEach((P, W) => {
            let {
                config: X,
                actionTypeId: z
            } = P, Z = Ai(z), {
                target: U
            } = X;
            if (!U) return;
            let N = U.boundaryMode ? A : null;
            xi({
                config: X,
                event: d,
                eventTarget: r,
                elementRoot: N,
                elementApi: qe
            }).forEach((S, M) => {
                let k = Z ? Os(z)(S, P) : null,
                    $ = Z ? aU(z)(S, P) : null;
                F = !0;
                let re = q === W && M === 0,
                    D = $V({
                        element: S,
                        actionItem: P
                    }),
                    V = xs({
                        element: S,
                        actionItem: P,
                        elementApi: qe
                    }, k);
                As({
                    store: e,
                    element: S,
                    actionItem: P,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: re,
                    computedStyle: D,
                    destination: V,
                    immediate: a,
                    verbose: s,
                    pluginInstance: k,
                    pluginDuration: $,
                    instanceDelay: I
                })
            })
        }), F
    }

    function As(e) {
        let {
            store: t,
            computedStyle: r,
            ...n
        } = e, {
            element: i,
            actionItem: o,
            immediate: a,
            pluginInstance: s,
            continuous: u,
            restingValue: l,
            eventId: h
        } = n, d = !u, v = zV(), {
            ixElements: p,
            ixSession: g,
            ixData: b
        } = t.getState(), w = jV(p, i), {
            refState: I
        } = p[w] || {}, L = ps(i), A = g.reducedMotion && zo[o.actionTypeId], q;
        if (A && u) switch (b.events[h]?.eventTypeId) {
            case Ze.MOUSE_MOVE:
            case Ze.MOUSE_MOVE_IN_VIEWPORT:
                q = l;
                break;
            default:
                q = .5;
                break
        }
        let F = QV(i, I, r, o, qe, s);
        if (t.dispatch(os({
            instanceId: v,
            elementId: w,
            origin: F,
            refType: L,
            skipMotion: A,
            skipToValue: q,
            ...n
        })), xb(document.body, "ix2-animation-started", v), a) {
            CU(t, v);
            return
        }
        kt({
            store: t,
            select: ({
                ixInstances: P
            }) => P[v],
            onChange: Ob
        }), d && t.dispatch(pi(v, g.tick))
    }

    function Ss(e, t) {
        xb(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {
            elementId: r,
            actionItem: n
        } = e, {
            ixElements: i
        } = t.getState(), {
            ref: o,
            refType: a
        } = i[r] || {};
        a === Eb && tU(o, n, qe), t.dispatch(as(e.id))
    }

    function xb(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
    }

    function CU(e, t) {
        let {
            ixParameters: r
        } = e.getState();
        e.dispatch(pi(t, 0)), e.dispatch(di(performance.now(), r));
        let {
            ixInstances: n
        } = e.getState();
        Ob(n[t], e)
    }

    function Ob(e, t) {
        let {
            active: r,
            continuous: n,
            complete: i,
            elementId: o,
            actionItem: a,
            actionTypeId: s,
            renderType: u,
            current: l,
            groupIndex: h,
            eventId: d,
            eventTarget: v,
            eventStateKey: p,
            actionListId: g,
            isCarrier: b,
            styleProp: w,
            verbose: I,
            pluginInstance: L
        } = e, {
            ixData: A,
            ixSession: q
        } = t.getState(), {
            events: F
        } = A, P = F[d] || {}, {
            mediaQueries: W = A.mediaQueryKeys
        } = P;
        if (Oi(W, q.mediaQueryKey) && (n || r || i)) {
            if (l || u === XV && i) {
                t.dispatch(ss(o, s, l, a));
                let {
                    ixElements: X
                } = t.getState(), {
                    ref: z,
                    refType: Z,
                    refState: U
                } = X[o] || {}, N = U && U[s];
                (Z === Eb || Ai(s)) && KV(z, U, N, d, a, w, qe, u, L)
            }
            if (i) {
                if (b) {
                    let X = en({
                        store: t,
                        eventId: d,
                        eventTarget: v,
                        eventStateKey: p,
                        actionListId: g,
                        groupIndex: h + 1,
                        verbose: I
                    });
                    I && !X && t.dispatch(pr({
                        actionListId: g,
                        isPlaying: !1
                    }))
                }
                Ss(e, t)
            }
        }
    }
    var pb, ht, gb, vb, hb, mb, vr, yb, Ti, WV, Ts, ws, wi, Eb, XV, fb, xi, jV, xs, kt, zV, KV, bb, YV, $V, QV, ZV, JV, eU, Oi, tU, rU, nU, iU, oU, Ai, Os, aU, db, sU, uU, IU, wU, xU, OU, Is = he(() => {
        "use strict";
        pb = le(Ia()), ht = le(zn()), gb = le(Vm()), vb = le(dy()), hb = le(gy()), mb = le(hy()), vr = le(Iy()), yb = le(Cy());
        Ve();
        Ti = le(Dt());
        gi();
        Fy();
        lb();
        WV = Object.keys(xn), Ts = e => WV.includes(e), {
            COLON_DELIMITER: ws,
            BOUNDARY_SELECTOR: wi,
            HTML_ELEMENT: Eb,
            RENDER_GENERAL: XV,
            W_MOD_IX: fb
        } = Ce, {
            getAffectedElements: xi,
            getElementId: jV,
            getDestinationValues: xs,
            observeStore: kt,
            getInstanceId: zV,
            renderHTMLElement: KV,
            clearAllStyles: bb,
            getMaxDurationItemIndex: YV,
            getComputedStyle: $V,
            getInstanceOrigin: QV,
            reduceListToGroup: ZV,
            shouldNamespaceEventParameter: JV,
            getNamespacedParameterId: eU,
            shouldAllowMediaQuery: Oi,
            cleanupHTMLElement: tU,
            clearObjectCache: rU,
            stringifyTarget: nU,
            mediaQueriesEqual: iU,
            shallowEqual: oU
        } = Ti.IX2VanillaUtils, {
            isPluginType: Ai,
            createPluginInstance: Os,
            getPluginDuration: aU
        } = Ti.IX2VanillaPlugins, db = navigator.userAgent, sU = db.match(/iPad/i) || db.match(/iPhone/), uU = 12;
        IU = ["resize", "orientationchange"];
        wU = (e, t) => (0, vb.default)((0, mb.default)(e, t), hb.default), xU = (e, t) => {
            (0, vr.default)(e, (r, n) => {
                r.forEach((i, o) => {
                    let a = n + ws + o;
                    t(i, n, a)
                })
            })
        }, OU = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return xi({
                config: t,
                elementApi: qe
            })
        }
    });
    var Cb = c(mt => {
        "use strict";
        var RU = dn().default,
            LU = lu().default;
        Object.defineProperty(mt, "__esModule", {
            value: !0
        });
        mt.actions = void 0;
        mt.destroy = Sb;
        mt.init = MU;
        mt.setEnv = FU;
        mt.store = void 0;
        Yl();
        var NU = Wo(),
            PU = LU((_m(), rt(bm))),
            Cs = (Is(), rt(Ab)),
            qU = RU((gi(), rt(Ly)));
        mt.actions = qU;
        var Rs = mt.store = (0, NU.createStore)(PU.default);

        function FU(e) {
            e() && (0, Cs.observeRequests)(Rs)
        }

        function MU(e) {
            Sb(), (0, Cs.startEngine)({
                store: Rs,
                rawData: e,
                allowEvents: !0
            })
        }

        function Sb() {
            (0, Cs.stopEngine)(Rs)
        }
    });
    var Pb = c((sz, Nb) => {
        "use strict";
        var Rb = ke(),
            Lb = Cb();
        Lb.setEnv(Rb.env);
        Rb.define("ix2", Nb.exports = function () {
            return Lb
        })
    });
    var Fb = c((uz, qb) => {
        "use strict";
        var hr = ke();
        hr.define("links", qb.exports = function (e, t) {
            var r = {},
                n = e(window),
                i, o = hr.env(),
                a = window.location,
                s = document.createElement("a"),
                u = "w--current",
                l = /index\.(html|php)$/,
                h = /\/$/,
                d, v;
            r.ready = r.design = r.preview = p;

            function p() {
                i = o && hr.env("design"), v = hr.env("slug") || a.pathname || "", hr.scroll.off(b), d = [];
                for (var I = document.links, L = 0; L < I.length; ++L) g(I[L]);
                d.length && (hr.scroll.on(b), b())
            }

            function g(I) {
                if (!I.getAttribute("hreflang")) {
                    var L = i && I.getAttribute("href-disabled") || I.getAttribute("href");
                    if (s.href = L, !(L.indexOf(":") >= 0)) {
                        var A = e(I);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                            var q = e(s.hash);
                            q.length && d.push({
                                link: A,
                                sec: q,
                                active: !1
                            });
                            return
                        }
                        if (!(L === "#" || L === "")) {
                            var F = s.href === a.href || L === v || l.test(L) && h.test(v);
                            w(A, u, F)
                        }
                    }
                }
            }

            function b() {
                var I = n.scrollTop(),
                    L = n.height();
                t.each(d, function (A) {
                    if (!A.link.attr("hreflang")) {
                        var q = A.link,
                            F = A.sec,
                            P = F.offset().top,
                            W = F.outerHeight(),
                            X = L * .5,
                            z = F.is(":visible") && P + W - X >= I && P + X <= I + L;
                        A.active !== z && (A.active = z, w(q, u, z))
                    }
                })
            }

            function w(I, L, A) {
                var q = I.hasClass(L);
                A && q || !A && !q || (A ? I.addClass(L) : I.removeClass(L))
            }
            return r
        })
    });
    var Db = c((cz, Mb) => {
        "use strict";
        var Ri = ke();
        Ri.define("scroll", Mb.exports = function (e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            },
                r = window.location,
                n = g() ? null : window.history,
                i = e(window),
                o = e(document),
                a = e(document.body),
                s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (N) {
                    window.setTimeout(N, 15)
                },
                u = Ri.env("editor") ? ".w-editor-body" : "body",
                l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
                h = 'a[href="#"]',
                d = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")",
                v = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
                p = document.createElement("style");
            p.appendChild(document.createTextNode(v));

            function g() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var b = /^#[a-zA-Z0-9][\w:.-]*$/;

            function w(N) {
                return b.test(N.hash) && N.host + N.pathname === r.host + r.pathname
            }
            let I = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

            function L() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || I.matches
            }

            function A(N, y) {
                var S;
                switch (y) {
                    case "add":
                        S = N.attr("tabindex"), S ? N.attr("data-wf-tabindex-swap", S) : N.attr("tabindex", "-1");
                        break;
                    case "remove":
                        S = N.attr("data-wf-tabindex-swap"), S ? (N.attr("tabindex", S), N.removeAttr("data-wf-tabindex-swap")) : N.removeAttr("tabindex");
                        break
                }
                N.toggleClass("wf-force-outline-none", y === "add")
            }

            function q(N) {
                var y = N.currentTarget;
                if (!(Ri.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(y.className))) {
                    var S = w(y) ? y.hash : "";
                    if (S !== "") {
                        var M = e(S);
                        M.length && (N && (N.preventDefault(), N.stopPropagation()), F(S, N), window.setTimeout(function () {
                            P(M, function () {
                                A(M, "add"), M.get(0).focus({
                                    preventScroll: !0
                                }), A(M, "remove")
                            })
                        }, N ? 0 : 300))
                    }
                }
            }

            function F(N) {
                if (r.hash !== N && n && n.pushState && !(Ri.env.chrome && r.protocol === "file:")) {
                    var y = n.state && n.state.hash;
                    y !== N && n.pushState({
                        hash: N
                    }, "", N)
                }
            }

            function P(N, y) {
                var S = i.scrollTop(),
                    M = W(N);
                if (S !== M) {
                    var k = X(N, S, M),
                        $ = Date.now(),
                        re = function () {
                            var D = Date.now() - $;
                            window.scroll(0, z(S, M, D, k)), D <= k ? s(re) : typeof y == "function" && y()
                        };
                    s(re)
                }
            }

            function W(N) {
                var y = e(l),
                    S = y.css("position") === "fixed" ? y.outerHeight() : 0,
                    M = N.offset().top - S;
                if (N.data("scroll") === "mid") {
                    var k = i.height() - S,
                        $ = N.outerHeight();
                    $ < k && (M -= Math.round((k - $) / 2))
                }
                return M
            }

            function X(N, y, S) {
                if (L()) return 0;
                var M = 1;
                return a.add(N).each(function (k, $) {
                    var re = parseFloat($.getAttribute("data-scroll-time"));
                    !isNaN(re) && re >= 0 && (M = re)
                }), (472.143 * Math.log(Math.abs(y - S) + 125) - 2e3) * M
            }

            function z(N, y, S, M) {
                return S > M ? y : N + (y - N) * Z(S / M)
            }

            function Z(N) {
                return N < .5 ? 4 * N * N * N : (N - 1) * (2 * N - 2) * (2 * N - 2) + 1
            }

            function U() {
                var {
                    WF_CLICK_EMPTY: N,
                    WF_CLICK_SCROLL: y
                } = t;
                o.on(y, d, q), o.on(N, h, function (S) {
                    S.preventDefault()
                }), document.head.insertBefore(p, document.head.firstChild)
            }
            return {
                ready: U
            }
        })
    });
    var Gb = c((lz, kb) => {
        "use strict";
        var DU = ke();
        DU.define("touch", kb.exports = function (e) {
            var t = {},
                r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            }, t.init = function (o) {
                return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
            };

            function n(o) {
                var a = !1,
                    s = !1,
                    u = Math.min(Math.round(window.innerWidth * .04), 40),
                    l, h;
                o.addEventListener("touchstart", d, !1), o.addEventListener("touchmove", v, !1), o.addEventListener("touchend", p, !1), o.addEventListener("touchcancel", g, !1), o.addEventListener("mousedown", d, !1), o.addEventListener("mousemove", v, !1), o.addEventListener("mouseup", p, !1), o.addEventListener("mouseout", g, !1);

                function d(w) {
                    var I = w.touches;
                    I && I.length > 1 || (a = !0, I ? (s = !0, l = I[0].clientX) : l = w.clientX, h = l)
                }

                function v(w) {
                    if (a) {
                        if (s && w.type === "mousemove") {
                            w.preventDefault(), w.stopPropagation();
                            return
                        }
                        var I = w.touches,
                            L = I ? I[0].clientX : w.clientX,
                            A = L - h;
                        h = L, Math.abs(A) > u && r && String(r()) === "" && (i("swipe", w, {
                            direction: A > 0 ? "right" : "left"
                        }), g())
                    }
                }

                function p(w) {
                    if (a && (a = !1, s && w.type === "mouseup")) {
                        w.preventDefault(), w.stopPropagation(), s = !1;
                        return
                    }
                }

                function g() {
                    a = !1
                }

                function b() {
                    o.removeEventListener("touchstart", d, !1), o.removeEventListener("touchmove", v, !1), o.removeEventListener("touchend", p, !1), o.removeEventListener("touchcancel", g, !1), o.removeEventListener("mousedown", d, !1), o.removeEventListener("mousemove", v, !1), o.removeEventListener("mouseup", p, !1), o.removeEventListener("mouseout", g, !1), o = null
                }
                this.destroy = b
            }

            function i(o, a, s) {
                var u = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(u, s)
            }
            return t.instance = t.init(document), t
        })
    });
    var Vb = c(Ls => {
        "use strict";
        Object.defineProperty(Ls, "__esModule", {
            value: !0
        });
        Ls.default = kU;

        function kU(e, t, r, n, i, o, a, s, u, l, h, d, v) {
            return function (p) {
                e(p);
                var g = p.form,
                    b = {
                        name: g.attr("data-name") || g.attr("name") || "Untitled Form",
                        pageId: g.attr("data-wf-page-id") || "",
                        elementId: g.attr("data-wf-element-id") || "",
                        source: t.href,
                        test: r.env(),
                        fields: {},
                        fileUploads: {},
                        dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(g.html()),
                        trackingCookies: n()
                    };
                let w = g.attr("data-wf-flow");
                w && (b.wfFlow = w), i(p);
                var I = o(g, b.fields);
                if (I) return a(I);
                if (b.fileUploads = s(g), u(p), !l) {
                    h(p);
                    return
                }
                d.ajax({
                    url: v,
                    type: "POST",
                    data: b,
                    dataType: "json",
                    crossDomain: !0
                }).done(function (L) {
                    L && L.code === 200 && (p.success = !0), h(p)
                }).fail(function () {
                    h(p)
                })
            }
        }
    });
    var Bb = c((dz, Ub) => {
        "use strict";
        var Li = ke();
        Li.define("forms", Ub.exports = function (e, t) {
            var r = {},
                n = e(document),
                i, o = window.location,
                a = window.XDomainRequest && !window.atob,
                s = ".w-form",
                u, l = /e(-)?mail/i,
                h = /^\S+@\S+$/,
                d = window.alert,
                v = Li.env(),
                p, g, b, w = /list-manage[1-9]?.com/i,
                I = t.debounce(function () {
                   // d("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
                }, 100);
            r.ready = r.design = r.preview = function () {
                L(), !v && !p && q()
            };

            function L() {
                u = e("html").attr("data-wf-site"), g = "https://webflow.com/api/v1/form/" + u, a && g.indexOf("https://webflow.com") >= 0 && (g = g.replace("https://webflow.com", "https://formdata.webflow.com")), b = `${g}/signFile`, i = e(s + " form"), i.length && i.each(A)
            }

            function A(D, V) {
                var K = e(V),
                    m = e.data(V, s);
                m || (m = e.data(V, s, {
                    form: K
                })), F(m);
                var _ = K.closest("div.w-form");
                m.done = _.find("> .w-form-done"), m.fail = _.find("> .w-form-fail"), m.fileUploads = _.find(".w-file-upload"), m.fileUploads.each(function (te) {
                    k(te, m)
                });
                var G = m.form.attr("aria-label") || m.form.attr("data-name") || "Form";
                m.done.attr("aria-label") || m.form.attr("aria-label", G), m.done.attr("tabindex", "-1"), m.done.attr("role", "region"), m.done.attr("aria-label") || m.done.attr("aria-label", G + " success"), m.fail.attr("tabindex", "-1"), m.fail.attr("role", "region"), m.fail.attr("aria-label") || m.fail.attr("aria-label", G + " failure");
                var ee = m.action = K.attr("action");
                if (m.handler = null, m.redirect = K.attr("data-redirect"), w.test(ee)) {
                    m.handler = y;
                    return
                }
                if (!ee) {
                    if (u) {
                        m.handler = (() => {
                            let te = Vb().default;
                            return te(F, o, Li, Z, M, W, d, X, P, u, S, e, g)
                        })();
                        return
                    }
                    I()
                }
            }

            function q() {
                p = !0, n.on("submit", s + " form", function (te) {
                    var Q = e.data(this, s);
                    Q.handler && (Q.evt = te, Q.handler(Q))
                });
                let D = ".w-checkbox-input",
                    V = ".w-radio-input",
                    K = "w--redirected-checked",
                    m = "w--redirected-focus",
                    _ = "w--redirected-focus-visible",
                    G = ":focus-visible, [data-wf-focus-visible]",
                    ee = [
                        ["checkbox", D],
                        ["radio", V]
                    ];
                n.on("change", s + ' form input[type="checkbox"]:not(' + D + ")", te => {
                    e(te.target).siblings(D).toggleClass(K)
                }), n.on("change", s + ' form input[type="radio"]', te => {
                    e(`input[name="${te.target.name}"]:not(${D})`).map((ne, be) => e(be).siblings(V).removeClass(K));
                    let Q = e(te.target);
                    Q.hasClass("w-radio-input") || Q.siblings(V).addClass(K)
                }), ee.forEach(([te, Q]) => {
                    n.on("focus", s + ` form input[type="${te}"]:not(` + Q + ")", ne => {
                        e(ne.target).siblings(Q).addClass(m), e(ne.target).filter(G).siblings(Q).addClass(_)
                    }), n.on("blur", s + ` form input[type="${te}"]:not(` + Q + ")", ne => {
                        e(ne.target).siblings(Q).removeClass(`${m} ${_}`)
                    })
                })
            }

            function F(D) {
                var V = D.btn = D.form.find(':input[type="submit"]');
                D.wait = D.btn.attr("data-wait") || null, D.success = !1, V.prop("disabled", !1), D.label && V.val(D.label)
            }

            function P(D) {
                var V = D.btn,
                    K = D.wait;
                V.prop("disabled", !0), K && (D.label = V.val(), V.val(K))
            }

            function W(D, V) {
                var K = null;
                return V = V || {}, D.find(':input:not([type="submit"]):not([type="file"])').each(function (m, _) {
                    var G = e(_),
                        ee = G.attr("type"),
                        te = G.attr("data-name") || G.attr("name") || "Field " + (m + 1);
                    te = encodeURIComponent(te);
                    var Q = G.val();
                    if (ee === "checkbox") Q = G.is(":checked");
                    else if (ee === "radio") {
                        if (V[te] === null || typeof V[te] == "string") return;
                        Q = D.find('input[name="' + G.attr("name") + '"]:checked').val() || null
                    }
                    typeof Q == "string" && (Q = e.trim(Q)), V[te] = Q, K = K || U(G, ee, te, Q)
                }), K
            }

            function X(D) {
                var V = {};
                return D.find(':input[type="file"]').each(function (K, m) {
                    var _ = e(m),
                        G = _.attr("data-name") || _.attr("name") || "File " + (K + 1),
                        ee = _.attr("data-value");
                    typeof ee == "string" && (ee = e.trim(ee)), V[G] = ee
                }), V
            }
            let z = {
                _mkto_trk: "marketo"
            };

            function Z() {
                return document.cookie.split("; ").reduce(function (V, K) {
                    let m = K.split("="),
                        _ = m[0];
                    if (_ in z) {
                        let G = z[_],
                            ee = m.slice(1).join("=");
                        V[G] = ee
                    }
                    return V
                }, {})
            }

            function U(D, V, K, m) {
                var _ = null;
                return V === "password" ? _ = "Passwords cannot be submitted." : D.attr("required") ? m ? l.test(D.attr("type")) && (h.test(m) || (_ = "Please enter a valid email address for: " + K)) : _ = "Please fill out the required field: " + K : K === "g-recaptcha-response" && !m && (_ = "Please confirm you\u2019re not a robot."), _
            }

            function N(D) {
                M(D), S(D)
            }

            function y(D) {
                F(D);
                var V = D.form,
                    K = {};
                if (/^https/.test(o.href) && !/^https/.test(D.action)) {
                    V.attr("method", "post");
                    return
                }
                M(D);
                var m = W(V, K);
                if (m) return d(m);
                P(D);
                var _;
                t.each(K, function (Q, ne) {
                    l.test(ne) && (K.EMAIL = Q), /^((full[ _-]?)?name)$/i.test(ne) && (_ = Q), /^(first[ _-]?name)$/i.test(ne) && (K.FNAME = Q), /^(last[ _-]?name)$/i.test(ne) && (K.LNAME = Q)
                }), _ && !K.FNAME && (_ = _.split(" "), K.FNAME = _[0], K.LNAME = K.LNAME || _[1]);
                var G = D.action.replace("/post?", "/post-json?") + "&c=?",
                    ee = G.indexOf("u=") + 2;
                ee = G.substring(ee, G.indexOf("&", ee));
                var te = G.indexOf("id=") + 3;
                te = G.substring(te, G.indexOf("&", te)), K["b_" + ee + "_" + te] = "", e.ajax({
                    url: G,
                    data: K,
                    dataType: "jsonp"
                }).done(function (Q) {
                    D.success = Q.result === "success" || /already/.test(Q.msg), D.success || console.info("MailChimp error: " + Q.msg), S(D)
                }).fail(function () {
                    S(D)
                })
            }

            function S(D) {
                var V = D.form,
                    K = D.redirect,
                    m = D.success;
                if (m && K) {
                    Li.location(K);
                    return
                }
                D.done.toggle(m), D.fail.toggle(!m), m ? D.done.focus() : D.fail.focus(), V.toggle(!m), F(D)
            }

            function M(D) {
                D.evt && D.evt.preventDefault(), D.evt = null
            }

            function k(D, V) {
                if (!V.fileUploads || !V.fileUploads[D]) return;
                var K, m = e(V.fileUploads[D]),
                    _ = m.find("> .w-file-upload-default"),
                    G = m.find("> .w-file-upload-uploading"),
                    ee = m.find("> .w-file-upload-success"),
                    te = m.find("> .w-file-upload-error"),
                    Q = _.find(".w-file-upload-input"),
                    ne = _.find(".w-file-upload-label"),
                    be = ne.children(),
                    se = te.find(".w-file-upload-error-msg"),
                    E = ee.find(".w-file-upload-file"),
                    B = ee.find(".w-file-remove-link"),
                    Y = E.find(".w-file-upload-file-name"),
                    j = se.attr("data-w-size-error"),
                    fe = se.attr("data-w-type-error"),
                    We = se.attr("data-w-generic-error");
                if (v || ne.on("click keydown", function (x) {
                    x.type === "keydown" && x.which !== 13 && x.which !== 32 || (x.preventDefault(), Q.click())
                }), ne.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), B.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), v) Q.on("click", function (x) {
                    x.preventDefault()
                }), ne.on("click", function (x) {
                    x.preventDefault()
                }), be.on("click", function (x) {
                    x.preventDefault()
                });
                else {
                    B.on("click keydown", function (x) {
                        if (x.type === "keydown") {
                            if (x.which !== 13 && x.which !== 32) return;
                            x.preventDefault()
                        }
                        Q.removeAttr("data-value"), Q.val(""), Y.html(""), _.toggle(!0), ee.toggle(!1), ne.focus()
                    }), Q.on("change", function (x) {
                        K = x.target && x.target.files && x.target.files[0], K && (_.toggle(!1), te.toggle(!1), G.toggle(!0), G.focus(), Y.text(K.name), C() || P(V), V.fileUploads[D].uploading = !0, $(K, T))
                    });
                    var Fe = ne.outerHeight();
                    Q.height(Fe), Q.width(1)
                }

                function f(x) {
                    var R = x.responseJSON && x.responseJSON.msg,
                        J = We;
                    typeof R == "string" && R.indexOf("InvalidFileTypeError") === 0 ? J = fe : typeof R == "string" && R.indexOf("MaxFileSizeError") === 0 && (J = j), se.text(J), Q.removeAttr("data-value"), Q.val(""), G.toggle(!1), _.toggle(!0), te.toggle(!0), te.focus(), V.fileUploads[D].uploading = !1, C() || F(V)
                }

                function T(x, R) {
                    if (x) return f(x);
                    var J = R.fileName,
                        oe = R.postData,
                        ge = R.fileId,
                        H = R.s3Url;
                    Q.attr("data-value", ge), re(H, oe, K, J, O)
                }

                function O(x) {
                    if (x) return f(x);
                    G.toggle(!1), ee.css("display", "inline-block"), ee.focus(), V.fileUploads[D].uploading = !1, C() || F(V)
                }

                function C() {
                    var x = V.fileUploads && V.fileUploads.toArray() || [];
                    return x.some(function (R) {
                        return R.uploading
                    })
                }
            }

            function $(D, V) {
                var K = new URLSearchParams({
                    name: D.name,
                    size: D.size
                });
                e.ajax({
                    type: "GET",
                    url: `${b}?${K}`,
                    crossDomain: !0
                }).done(function (m) {
                    V(null, m)
                }).fail(function (m) {
                    V(m)
                })
            }

            function re(D, V, K, m, _) {
                var G = new FormData;
                for (var ee in V) G.append(ee, V[ee]);
                G.append("file", K, m), e.ajax({
                    type: "POST",
                    url: D,
                    data: G,
                    processData: !1,
                    contentType: !1
                }).done(function () {
                    _(null)
                }).fail(function (te) {
                    _(te)
                })
            }
            return r
        })
    });
    var Xb = c((pz, Wb) => {
        "use strict";
        var Ns = ke(),
            Hb = "w-condition-invisible",
            GU = "." + Hb;

        function VU(e) {
            return e.filter(function (t) {
                return !rn(t)
            })
        }

        function rn(e) {
            return !!(e.$el && e.$el.closest(GU).length)
        }

        function Ps(e, t) {
            for (var r = e; r >= 0; r--)
                if (!rn(t[r])) return r;
            return -1
        }

        function qs(e, t) {
            for (var r = e; r <= t.length - 1; r++)
                if (!rn(t[r])) return r;
            return -1
        }

        function UU(e, t) {
            return Ps(e - 1, t) === -1
        }

        function BU(e, t) {
            return qs(e + 1, t) === -1
        }

        function tn(e, t) {
            e.attr("aria-label") || e.attr("aria-label", t)
        }

        function HU(e, t, r, n) {
            var i = r.tram,
                o = Array.isArray,
                a = "w-lightbox",
                s = a + "-",
                u = /(^|\s+)/g,
                l = [],
                h, d, v, p = [];

            function g(m, _) {
                return l = o(m) ? m : [m], d || g.build(), VU(l).length > 1 && (d.items = d.empty, l.forEach(function (G, ee) {
                    var te = V("thumbnail"),
                        Q = V("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(te);
                    tn(Q, `show item ${ee + 1} of ${l.length}`), rn(G) && Q.addClass(Hb), d.items = d.items.add(Q), Z(G.thumbnailUrl || G.url, function (ne) {
                        ne.prop("width") > ne.prop("height") ? k(ne, "wide") : k(ne, "tall"), te.append(k(ne, "thumbnail-image"))
                    })
                }), d.strip.empty().append(d.items), k(d.content, "group")), i($(d.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
                    opacity: 1
                }), k(d.html, "noscroll"), g.show(_ || 0)
            }
            g.build = function () {
                return g.destroy(), d = {
                    html: r(t.documentElement),
                    empty: r()
                }, d.arrowLeft = V("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), d.arrowRight = V("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), d.close = V("control close").attr("role", "button"), tn(d.arrowLeft, "previous image"), tn(d.arrowRight, "next image"), tn(d.close, "close lightbox"), d.spinner = V("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), d.strip = V("strip").attr("role", "tablist"), v = new y(d.spinner, S("hide")), d.content = V("content").append(d.spinner, d.arrowLeft, d.arrowRight, d.close), d.container = V("container").append(d.content, d.strip), d.lightbox = V("backdrop hide").append(d.container), d.strip.on("click", M("item"), A), d.content.on("swipe", q).on("click", M("left"), w).on("click", M("right"), I).on("click", M("close"), L).on("click", M("image, caption"), I), d.container.on("click", M("view"), L).on("dragstart", M("img"), P), d.lightbox.on("keydown", W).on("focusin", F), r(n).append(d.lightbox), g
            }, g.destroy = function () {
                d && ($(d.html, "noscroll"), d.lightbox.remove(), d = void 0)
            }, g.show = function (m) {
                if (m !== h) {
                    var _ = l[m];
                    if (!_) return g.hide();
                    if (rn(_)) {
                        if (m < h) {
                            var G = Ps(m - 1, l);
                            m = G > -1 ? G : m
                        } else {
                            var ee = qs(m + 1, l);
                            m = ee > -1 ? ee : m
                        }
                        _ = l[m]
                    }
                    var te = h;
                    h = m, d.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), v.show();
                    var Q = _.html && K(_.width, _.height) || _.url;
                    return Z(Q, function (ne) {
                        if (m !== h) return;
                        var be = V("figure", "figure").append(k(ne, "image")),
                            se = V("frame").append(be),
                            E = V("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(se),
                            B, Y;
                        _.html && (B = r(_.html), Y = B.is("iframe"), Y && B.on("load", j), be.append(k(B, "embed"))), _.caption && be.append(V("caption", "figcaption").text(_.caption)), d.spinner.before(E), Y || j();

                        function j() {
                            if (d.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"), v.hide(), m !== h) {
                                E.remove();
                                return
                            }
                            let fe = UU(m, l);
                            re(d.arrowLeft, "inactive", fe), D(d.arrowLeft, fe), fe && d.arrowLeft.is(":focus") && d.arrowRight.focus();
                            let We = BU(m, l);
                            if (re(d.arrowRight, "inactive", We), D(d.arrowRight, We), We && d.arrowRight.is(":focus") && d.arrowLeft.focus(), d.view ? (i(d.view).add("opacity .3s").start({
                                opacity: 0
                            }).then(U(d.view)), i(E).add("opacity .3s").add("transform .3s").set({
                                x: m > te ? "80px" : "-80px"
                            }).start({
                                opacity: 1,
                                x: 0
                            })) : E.css("opacity", 1), d.view = E, d.view.prop("tabIndex", 0), d.items) {
                                $(d.items, "active"), d.items.removeAttr("aria-selected");
                                var Fe = d.items.eq(m);
                                k(Fe, "active"), Fe.attr("aria-selected", !0), N(Fe)
                            }
                        }
                    }), d.close.prop("tabIndex", 0), r(":focus").addClass("active-lightbox"), p.length === 0 && (r("body").children().each(function () {
                        r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (p.push({
                            node: r(this),
                            hidden: r(this).attr("aria-hidden"),
                            tabIndex: r(this).attr("tabIndex")
                        }), r(this).attr("aria-hidden", !0).attr("tabIndex", -1))
                    }), d.close.focus()), g
                }
            }, g.hide = function () {
                return i(d.lightbox).add("opacity .3s").start({
                    opacity: 0
                }).then(z), g
            }, g.prev = function () {
                var m = Ps(h - 1, l);
                m > -1 && g.show(m)
            }, g.next = function () {
                var m = qs(h + 1, l);
                m > -1 && g.show(m)
            };

            function b(m) {
                return function (_) {
                    this === _.target && (_.stopPropagation(), _.preventDefault(), m())
                }
            }
            var w = b(g.prev),
                I = b(g.next),
                L = b(g.hide),
                A = function (m) {
                    var _ = r(this).index();
                    m.preventDefault(), g.show(_)
                },
                q = function (m, _) {
                    m.preventDefault(), _.direction === "left" ? g.next() : _.direction === "right" && g.prev()
                },
                F = function () {
                    this.focus()
                };

            function P(m) {
                m.preventDefault()
            }

            function W(m) {
                var _ = m.keyCode;
                _ === 27 || X(_, "close") ? g.hide() : _ === 37 || X(_, "left") ? g.prev() : _ === 39 || X(_, "right") ? g.next() : X(_, "item") && r(":focus").click()
            }

            function X(m, _) {
                if (m !== 13 && m !== 32) return !1;
                var G = r(":focus").attr("class"),
                    ee = S(_).trim();
                return G.includes(ee)
            }

            function z() {
                d && (d.strip.scrollLeft(0).empty(), $(d.html, "noscroll"), k(d.lightbox, "hide"), d.view && d.view.remove(), $(d.content, "group"), k(d.arrowLeft, "inactive"), k(d.arrowRight, "inactive"), h = d.view = void 0, p.forEach(function (m) {
                    var _ = m.node;
                    _ && (m.hidden ? _.attr("aria-hidden", m.hidden) : _.removeAttr("aria-hidden"), m.tabIndex ? _.attr("tabIndex", m.tabIndex) : _.removeAttr("tabIndex"))
                }), p = [], r(".active-lightbox").removeClass("active-lightbox").focus())
            }

            function Z(m, _) {
                var G = V("img", "img");
                return G.one("load", function () {
                    _(G)
                }), G.attr("src", m), G
            }

            function U(m) {
                return function () {
                    m.remove()
                }
            }

            function N(m) {
                var _ = m.get(0),
                    G = d.strip.get(0),
                    ee = _.offsetLeft,
                    te = _.clientWidth,
                    Q = G.scrollLeft,
                    ne = G.clientWidth,
                    be = G.scrollWidth - ne,
                    se;
                ee < Q ? se = Math.max(0, ee + te - ne) : ee + te > ne + Q && (se = Math.min(ee, be)), se != null && i(d.strip).add("scroll-left 500ms").start({
                    "scroll-left": se
                })
            }

            function y(m, _, G) {
                this.$element = m, this.className = _, this.delay = G || 200, this.hide()
            }
            y.prototype.show = function () {
                var m = this;
                m.timeoutId || (m.timeoutId = setTimeout(function () {
                    m.$element.removeClass(m.className), delete m.timeoutId
                }, m.delay))
            }, y.prototype.hide = function () {
                var m = this;
                if (m.timeoutId) {
                    clearTimeout(m.timeoutId), delete m.timeoutId;
                    return
                }
                m.$element.addClass(m.className)
            };

            function S(m, _) {
                return m.replace(u, (_ ? " ." : " ") + s)
            }

            function M(m) {
                return S(m, !0)
            }

            function k(m, _) {
                return m.addClass(S(_))
            }

            function $(m, _) {
                return m.removeClass(S(_))
            }

            function re(m, _, G) {
                return m.toggleClass(S(_), G)
            }

            function D(m, _) {
                return m.attr("aria-hidden", _).attr("tabIndex", _ ? -1 : 0)
            }

            function V(m, _) {
                return k(r(t.createElement(_ || "div")), m)
            }

            function K(m, _) {
                var G = '<svg xmlns="http://www.w3.org/2000/svg" width="' + m + '" height="' + _ + '"/>';
                return "data:image/svg+xml;charset=utf-8," + encodeURI(G)
            }
            return function () {
                var m = e.navigator.userAgent,
                    _ = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
                    G = m.match(_),
                    ee = m.indexOf("Android ") > -1 && m.indexOf("Chrome") === -1;
                if (!ee && (!G || G[2] > 7)) return;
                var te = t.createElement("style");
                t.head.appendChild(te), e.addEventListener("resize", Q, !0);

                function Q() {
                    var ne = e.innerHeight,
                        be = e.innerWidth,
                        se = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + ne + "px}.w-lightbox-view {width:" + be + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * ne + "px}.w-lightbox-image {max-width:" + be + "px;max-height:" + ne + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * ne + "px}.w-lightbox-strip {padding: 0 " + .01 * ne + "px}.w-lightbox-item {width:" + .1 * ne + "px;padding:" + .02 * ne + "px " + .01 * ne + "px}.w-lightbox-thumbnail {height:" + .1 * ne + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * ne + "px}.w-lightbox-content {margin-top:" + .02 * ne + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * ne + "px}.w-lightbox-image {max-width:" + .96 * be + "px;max-height:" + .96 * ne + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * be + "px;max-height:" + .84 * ne + "px}}";
                    te.textContent = se
                }
                Q()
            }(), g
        }
        Ns.define("lightbox", Wb.exports = function (e) {
            var t = {},
                r = Ns.env(),
                n = HU(window, document, e, r ? "#lightbox-mountpoint" : "body"),
                i = e(document),
                o, a, s = ".w-lightbox",
                u;
            t.ready = t.design = t.preview = l;

            function l() {
                a = r && Ns.env("design"), n.destroy(), u = {}, o = i.find(s), o.webflowLightBox(), o.each(function () {
                    tn(e(this), "open lightbox"), e(this).attr("aria-haspopup", "dialog")
                })
            }
            jQuery.fn.extend({
                webflowLightBox: function () {
                    var p = this;
                    e.each(p, function (g, b) {
                        var w = e.data(b, s);
                        w || (w = e.data(b, s, {
                            el: e(b),
                            mode: "images",
                            images: [],
                            embed: ""
                        })), w.el.off(s), h(w), a ? w.el.on("setting" + s, h.bind(null, w)) : w.el.on("click" + s, d(w)).on("click" + s, function (I) {
                            I.preventDefault()
                        })
                    })
                }
            });

            function h(p) {
                var g = p.el.children(".w-json").html(),
                    b, w;
                if (!g) {
                    p.items = [];
                    return
                }
                try {
                    g = JSON.parse(g)
                } catch (I) {
                    console.error("Malformed lightbox JSON configuration.", I)
                }
                v(g), g.items.forEach(function (I) {
                    I.$el = p.el
                }), b = g.group, b ? (w = u[b], w || (w = u[b] = []), p.items = w, g.items.length && (p.index = w.length, w.push.apply(w, g.items))) : (p.items = g.items, p.index = 0)
            }

            function d(p) {
                return function () {
                    p.items.length && n(p.items, p.index || 0)
                }
            }

            function v(p) {
                p.images && (p.images.forEach(function (g) {
                    g.type = "image"
                }), p.items = p.images), p.embed && (p.embed.type = "video", p.items = [p.embed]), p.groupId && (p.group = p.groupId)
            }
            return t
        })
    });
    var zb = c((gz, jb) => {
        "use strict";
        var Ot = ke(),
            WU = fn(),
            Se = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };
        Ot.define("navbar", jb.exports = function (e, t) {
            var r = {},
                n = e.tram,
                i = e(window),
                o = e(document),
                a = t.debounce,
                s, u, l, h, d = Ot.env(),
                v = '<div class="w-nav-overlay" data-wf-ignore />',
                p = ".w-nav",
                g = "w--open",
                b = "w--nav-dropdown-open",
                w = "w--nav-dropdown-toggle-open",
                I = "w--nav-dropdown-list-open",
                L = "w--nav-link-open",
                A = WU.triggers,
                q = e();
            r.ready = r.design = r.preview = F, r.destroy = function () {
                q = e(), P(), u && u.length && u.each(Z)
            };

            function F() {
                l = d && Ot.env("design"), h = Ot.env("editor"), s = e(document.body), u = o.find(p), u.length && (u.each(z), P(), W())
            }

            function P() {
                Ot.resize.off(X)
            }

            function W() {
                Ot.resize.on(X)
            }

            function X() {
                u.each(_)
            }

            function z(E, B) {
                var Y = e(B),
                    j = e.data(B, p);
                j || (j = e.data(B, p, {
                    open: !1,
                    el: Y,
                    config: {},
                    selectedIdx: -1
                })), j.menu = Y.find(".w-nav-menu"), j.links = j.menu.find(".w-nav-link"), j.dropdowns = j.menu.find(".w-dropdown"), j.dropdownToggle = j.menu.find(".w-dropdown-toggle"), j.dropdownList = j.menu.find(".w-dropdown-list"), j.button = Y.find(".w-nav-button"), j.container = Y.find(".w-container"), j.overlayContainerId = "w-nav-overlay-" + E, j.outside = K(j);
                var fe = Y.find(".w-nav-brand");
                fe && fe.attr("href") === "/" && fe.attr("aria-label") == null && fe.attr("aria-label", "home"), j.button.attr("style", "-webkit-user-select: text;"), j.button.attr("aria-label") == null && j.button.attr("aria-label", "menu"), j.button.attr("role", "button"), j.button.attr("tabindex", "0"), j.button.attr("aria-controls", j.overlayContainerId), j.button.attr("aria-haspopup", "menu"), j.button.attr("aria-expanded", "false"), j.el.off(p), j.button.off(p), j.menu.off(p), y(j), l ? (U(j), j.el.on("setting" + p, S(j))) : (N(j), j.button.on("click" + p, D(j)), j.menu.on("click" + p, "a", V(j)), j.button.on("keydown" + p, M(j)), j.el.on("keydown" + p, k(j))), _(E, B)
            }

            function Z(E, B) {
                var Y = e.data(B, p);
                Y && (U(Y), e.removeData(B, p))
            }

            function U(E) {
                E.overlay && (se(E, !0), E.overlay.remove(), E.overlay = null)
            }

            function N(E) {
                E.overlay || (E.overlay = e(v).appendTo(E.el), E.overlay.attr("id", E.overlayContainerId), E.parent = E.menu.parent(), se(E, !0))
            }

            function y(E) {
                var B = {},
                    Y = E.config || {},
                    j = B.animation = E.el.attr("data-animation") || "default";
                B.animOver = /^over/.test(j), B.animDirect = /left$/.test(j) ? -1 : 1, Y.animation !== j && E.open && t.defer(re, E), B.easing = E.el.attr("data-easing") || "ease", B.easing2 = E.el.attr("data-easing2") || "ease";
                var fe = E.el.attr("data-duration");
                B.duration = fe != null ? Number(fe) : 400, B.docHeight = E.el.attr("data-doc-height"), E.config = B
            }

            function S(E) {
                return function (B, Y) {
                    Y = Y || {};
                    var j = i.width();
                    y(E), Y.open === !0 && ne(E, !0), Y.open === !1 && se(E, !0), E.open && t.defer(function () {
                        j !== i.width() && re(E)
                    })
                }
            }

            function M(E) {
                return function (B) {
                    switch (B.keyCode) {
                        case Se.SPACE:
                        case Se.ENTER:
                            return D(E)(), B.preventDefault(), B.stopPropagation();
                        case Se.ESCAPE:
                            return se(E), B.preventDefault(), B.stopPropagation();
                        case Se.ARROW_RIGHT:
                        case Se.ARROW_DOWN:
                        case Se.HOME:
                        case Se.END:
                            return E.open ? (B.keyCode === Se.END ? E.selectedIdx = E.links.length - 1 : E.selectedIdx = 0, $(E), B.preventDefault(), B.stopPropagation()) : (B.preventDefault(), B.stopPropagation())
                    }
                }
            }

            function k(E) {
                return function (B) {
                    if (E.open) switch (E.selectedIdx = E.links.index(document.activeElement), B.keyCode) {
                        case Se.HOME:
                        case Se.END:
                            return B.keyCode === Se.END ? E.selectedIdx = E.links.length - 1 : E.selectedIdx = 0, $(E), B.preventDefault(), B.stopPropagation();
                        case Se.ESCAPE:
                            return se(E), E.button.focus(), B.preventDefault(), B.stopPropagation();
                        case Se.ARROW_LEFT:
                        case Se.ARROW_UP:
                            return E.selectedIdx = Math.max(-1, E.selectedIdx - 1), $(E), B.preventDefault(), B.stopPropagation();
                        case Se.ARROW_RIGHT:
                        case Se.ARROW_DOWN:
                            return E.selectedIdx = Math.min(E.links.length - 1, E.selectedIdx + 1), $(E), B.preventDefault(), B.stopPropagation()
                    }
                }
            }

            function $(E) {
                if (E.links[E.selectedIdx]) {
                    var B = E.links[E.selectedIdx];
                    B.focus(), V(B)
                }
            }

            function re(E) {
                E.open && (se(E, !0), ne(E, !0))
            }

            function D(E) {
                return a(function () {
                    E.open ? se(E) : ne(E)
                })
            }

            function V(E) {
                return function (B) {
                    var Y = e(this),
                        j = Y.attr("href");
                    if (!Ot.validClick(B.currentTarget)) {
                        B.preventDefault();
                        return
                    }
                    j && j.indexOf("#") === 0 && E.open && se(E)
                }
            }

            function K(E) {
                return E.outside && o.off("click" + p, E.outside),
                    function (B) {
                        var Y = e(B.target);
                        h && Y.closest(".w-editor-bem-EditorOverlay").length || m(E, Y)
                    }
            }
            var m = a(function (E, B) {
                if (E.open) {
                    var Y = B.closest(".w-nav-menu");
                    E.menu.is(Y) || se(E)
                }
            });

            function _(E, B) {
                var Y = e.data(B, p),
                    j = Y.collapsed = Y.button.css("display") !== "none";
                if (Y.open && !j && !l && se(Y, !0), Y.container.length) {
                    var fe = ee(Y);
                    Y.links.each(fe), Y.dropdowns.each(fe)
                }
                Y.open && be(Y)
            }
            var G = "max-width";

            function ee(E) {
                var B = E.container.css(G);
                return B === "none" && (B = ""),
                    function (Y, j) {
                        j = e(j), j.css(G, ""), j.css(G) === "none" && j.css(G, B)
                    }
            }

            function te(E, B) {
                B.setAttribute("data-nav-menu-open", "")
            }

            function Q(E, B) {
                B.removeAttribute("data-nav-menu-open")
            }

            function ne(E, B) {
                if (E.open) return;
                E.open = !0, E.menu.each(te), E.links.addClass(L), E.dropdowns.addClass(b), E.dropdownToggle.addClass(w), E.dropdownList.addClass(I), E.button.addClass(g);
                var Y = E.config,
                    j = Y.animation;
                (j === "none" || !n.support.transform || Y.duration <= 0) && (B = !0);
                var fe = be(E),
                    We = E.menu.outerHeight(!0),
                    Fe = E.menu.outerWidth(!0),
                    f = E.el.height(),
                    T = E.el[0];
                if (_(0, T), A.intro(0, T), Ot.redraw.up(), l || o.on("click" + p, E.outside), B) {
                    x();
                    return
                }
                var O = "transform " + Y.duration + "ms " + Y.easing;
                if (E.overlay && (q = E.menu.prev(), E.overlay.show().append(E.menu)), Y.animOver) {
                    n(E.menu).add(O).set({
                        x: Y.animDirect * Fe,
                        height: fe
                    }).start({
                        x: 0
                    }).then(x), E.overlay && E.overlay.width(Fe);
                    return
                }
                var C = f + We;
                n(E.menu).add(O).set({
                    y: -C
                }).start({
                    y: 0
                }).then(x);

                function x() {
                    E.button.attr("aria-expanded", "true")
                }
            }

            function be(E) {
                var B = E.config,
                    Y = B.docHeight ? o.height() : s.height();
                return B.animOver ? E.menu.height(Y) : E.el.css("position") !== "fixed" && (Y -= E.el.outerHeight(!0)), E.overlay && E.overlay.height(Y), Y
            }

            function se(E, B) {
                if (!E.open) return;
                E.open = !1, E.button.removeClass(g);
                var Y = E.config;
                if ((Y.animation === "none" || !n.support.transform || Y.duration <= 0) && (B = !0), A.outro(0, E.el[0]), o.off("click" + p, E.outside), B) {
                    n(E.menu).stop(), T();
                    return
                }
                var j = "transform " + Y.duration + "ms " + Y.easing2,
                    fe = E.menu.outerHeight(!0),
                    We = E.menu.outerWidth(!0),
                    Fe = E.el.height();
                if (Y.animOver) {
                    n(E.menu).add(j).start({
                        x: We * Y.animDirect
                    }).then(T);
                    return
                }
                var f = Fe + fe;
                n(E.menu).add(j).start({
                    y: -f
                }).then(T);

                function T() {
                    E.menu.height(""), n(E.menu).set({
                        x: 0,
                        y: 0
                    }), E.menu.each(Q), E.links.removeClass(L), E.dropdowns.removeClass(b), E.dropdownToggle.removeClass(w), E.dropdownList.removeClass(I), E.overlay && E.overlay.children().length && (q.length ? E.menu.insertAfter(q) : E.menu.prependTo(E.parent), E.overlay.attr("style", "").hide()), E.el.triggerHandler("w-close"), E.button.attr("aria-expanded", "false")
                }
            }
            return r
        })
    });
    var Yb = c((vz, Kb) => {
        "use strict";
        var At = ke(),
            XU = fn();
        At.define("tabs", Kb.exports = function (e) {
            var t = {},
                r = e.tram,
                n = e(document),
                i, o, a = At.env,
                s = a.safari,
                u = a(),
                l = "data-w-tab",
                h = "data-w-pane",
                d = ".w-tabs",
                v = "w--current",
                p = "w--tab-active",
                g = XU.triggers,
                b = !1;
            t.ready = t.design = t.preview = w, t.redraw = function () {
                b = !0, w(), b = !1
            }, t.destroy = function () {
                i = n.find(d), i.length && (i.each(A), I())
            };

            function w() {
                o = u && At.env("design"), i = n.find(d), i.length && (i.each(q), At.env("preview") && !b && i.each(A), I(), L())
            }

            function I() {
                At.redraw.off(t.redraw)
            }

            function L() {
                At.redraw.on(t.redraw)
            }

            function A(U, N) {
                var y = e.data(N, d);
                y && (y.links && y.links.each(g.reset), y.panes && y.panes.each(g.reset))
            }

            function q(U, N) {
                var y = d.substr(1) + "-" + U,
                    S = e(N),
                    M = e.data(N, d);
                if (M || (M = e.data(N, d, {
                    el: S,
                    config: {}
                })), M.current = null, M.tabIdentifier = y + "-" + l, M.paneIdentifier = y + "-" + h, M.menu = S.children(".w-tab-menu"), M.links = M.menu.children(".w-tab-link"), M.content = S.children(".w-tab-content"), M.panes = M.content.children(".w-tab-pane"), M.el.off(d), M.links.off(d), M.menu.attr("role", "tablist"), M.links.attr("tabindex", "-1"), F(M), !o) {
                    M.links.on("click" + d, W(M)), M.links.on("keydown" + d, X(M));
                    var k = M.links.filter("." + v),
                        $ = k.attr(l);
                    $ && z(M, {
                        tab: $,
                        immediate: !0
                    })
                }
            }

            function F(U) {
                var N = {};
                N.easing = U.el.attr("data-easing") || "ease";
                var y = parseInt(U.el.attr("data-duration-in"), 10);
                y = N.intro = y === y ? y : 0;
                var S = parseInt(U.el.attr("data-duration-out"), 10);
                S = N.outro = S === S ? S : 0, N.immediate = !y && !S, U.config = N
            }

            function P(U) {
                var N = U.current;
                return Array.prototype.findIndex.call(U.links, y => y.getAttribute(l) === N, null)
            }

            function W(U) {
                return function (N) {
                    N.preventDefault();
                    var y = N.currentTarget.getAttribute(l);
                    y && z(U, {
                        tab: y
                    })
                }
            }

            function X(U) {
                return function (N) {
                    var y = P(U),
                        S = N.key,
                        M = {
                            ArrowLeft: y - 1,
                            ArrowUp: y - 1,
                            ArrowRight: y + 1,
                            ArrowDown: y + 1,
                            End: U.links.length - 1,
                            Home: 0
                        };
                    if (S in M) {
                        N.preventDefault();
                        var k = M[S];
                        k === -1 && (k = U.links.length - 1), k === U.links.length && (k = 0);
                        var $ = U.links[k],
                            re = $.getAttribute(l);
                        re && z(U, {
                            tab: re
                        })
                    }
                }
            }

            function z(U, N) {
                N = N || {};
                var y = U.config,
                    S = y.easing,
                    M = N.tab;
                if (M !== U.current) {
                    U.current = M;
                    var k;
                    U.links.each(function (_, G) {
                        var ee = e(G);
                        if (N.immediate || y.immediate) {
                            var te = U.panes[_];
                            G.id || (G.id = U.tabIdentifier + "-" + _), te.id || (te.id = U.paneIdentifier + "-" + _), G.href = "#" + te.id, G.setAttribute("role", "tab"), G.setAttribute("aria-controls", te.id), G.setAttribute("aria-selected", "false"), te.setAttribute("role", "tabpanel"), te.setAttribute("aria-labelledby", G.id)
                        }
                        G.getAttribute(l) === M ? (k = G, ee.addClass(v).removeAttr("tabindex").attr({
                            "aria-selected": "true"
                        }).each(g.intro)) : ee.hasClass(v) && ee.removeClass(v).attr({
                            tabindex: "-1",
                            "aria-selected": "false"
                        }).each(g.outro)
                    });
                    var $ = [],
                        re = [];
                    U.panes.each(function (_, G) {
                        var ee = e(G);
                        G.getAttribute(l) === M ? $.push(G) : ee.hasClass(p) && re.push(G)
                    });
                    var D = e($),
                        V = e(re);
                    if (N.immediate || y.immediate) {
                        D.addClass(p).each(g.intro), V.removeClass(p), b || At.redraw.up();
                        return
                    } else {
                        var K = window.scrollX,
                            m = window.scrollY;
                        k.focus(), window.scrollTo(K, m)
                    }
                    V.length && y.outro ? (V.each(g.outro), r(V).add("opacity " + y.outro + "ms " + S, {
                        fallback: s
                    }).start({
                        opacity: 0
                    }).then(() => Z(y, V, D))) : Z(y, V, D)
                }
            }

            function Z(U, N, y) {
                if (N.removeClass(p).css({
                    opacity: "",
                    transition: "",
                    transform: "",
                    width: "",
                    height: ""
                }), y.addClass(p).each(g.intro), At.redraw.up(), !U.intro) return r(y).set({
                    opacity: 1
                });
                r(y).set({
                    opacity: 0
                }).redraw().add("opacity " + U.intro + "ms " + U.easing, {
                    fallback: s
                }).start({
                    opacity: 1
                })
            }
            return t
        })
    });
    Ks();
    $s();
    Zs();
    tu();
    fn();
    Pb();
    Fb();
    Db();
    Gb();
    Bb();
    Xb();
    zb();
    Yb();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699863297928
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-4"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".team-member",
                "originalId": "65dc4e0e18107f1438dea087|6bbdd8b1-7287-be65-47ec-2b12ad1e6bc8",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".team-member",
                "originalId": "65dc4e0e18107f1438dea087|6bbdd8b1-7287-be65-47ec-2b12ad1e6bc8",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699941796742
        },
        "e-4": {
            "id": "e-4",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-3"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".team-member",
                "originalId": "65dc4e0e18107f1438dea087|6bbdd8b1-7287-be65-47ec-2b12ad1e6bc8",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".team-member",
                "originalId": "65dc4e0e18107f1438dea087|6bbdd8b1-7287-be65-47ec-2b12ad1e6bc8",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699941796742
        },
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-6"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|1a98e8db-f5f2-2b1a-8b8b-1349f06e85f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|1a98e8db-f5f2-2b1a-8b8b-1349f06e85f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699944551492
        },
        "e-6": {
            "id": "e-6",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-5"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|1a98e8db-f5f2-2b1a-8b8b-1349f06e85f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|1a98e8db-f5f2-2b1a-8b8b-1349f06e85f2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699944551492
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-8"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|85a43597-5841-6575-480b-2ca68787a647",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|85a43597-5841-6575-480b-2ca68787a647",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699944940650
        },
        "e-8": {
            "id": "e-8",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-7"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|85a43597-5841-6575-480b-2ca68787a647",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|85a43597-5841-6575-480b-2ca68787a647",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699944940651
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|c00b3f7b-f91d-3409-097e-ee30edeaa03b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|c00b3f7b-f91d-3409-097e-ee30edeaa03b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699945195323
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-9"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|c00b3f7b-f91d-3409-097e-ee30edeaa03b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|c00b3f7b-f91d-3409-097e-ee30edeaa03b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699945195323
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-12"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-tab-link",
                "originalId": "8888afbe-aa59-3b5c-4dd2-baec47df1713",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-tab-link",
                "originalId": "8888afbe-aa59-3b5c-4dd2-baec47df1713",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699969059227
        },
        "e-12": {
            "id": "e-12",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_INACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-11"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".faq-tab-link",
                "originalId": "8888afbe-aa59-3b5c-4dd2-baec47df1713",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".faq-tab-link",
                "originalId": "8888afbe-aa59-3b5c-4dd2-baec47df1713",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699969059227
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df172a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df172a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699970021582
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-13"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df172a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df172a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699970021583
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-16"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1732",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1732",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971023018
        },
        "e-16": {
            "id": "e-16",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-15"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1732",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1732",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971023019
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-18"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df173a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df173a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971093025
        },
        "e-18": {
            "id": "e-18",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-17"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df173a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df173a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971093026
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1722",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1722",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971146296
        },
        "e-20": {
            "id": "e-20",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-19"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1722",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1722",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971146296
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1744",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1744",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971394939
        },
        "e-22": {
            "id": "e-22",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-21"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1744",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1744",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971394939
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df174c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df174c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971394939
        },
        "e-24": {
            "id": "e-24",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-23"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df174c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df174c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971394939
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1754",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1754",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971394939
        },
        "e-26": {
            "id": "e-26",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-25"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1754",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1754",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971394939
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df175c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df175c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971394939
        },
        "e-28": {
            "id": "e-28",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-27"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df175c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df175c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971394939
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1766",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1766",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971396462
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-29"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1766",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1766",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971396462
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df176e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df176e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971396462
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-31"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df176e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df176e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971396462
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1776",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1776",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971396462
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-33"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1776",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1776",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971396462
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df177e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df177e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971396462
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df177e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df177e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699971396462
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".pricing-switch",
                "originalId": "65dc4e0e18107f1438dea095|3c3a4f38-e2ed-8db8-ca90-47baa6f7460c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".pricing-switch",
                "originalId": "65dc4e0e18107f1438dea095|3c3a4f38-e2ed-8db8-ca90-47baa6f7460c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699986359665
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_INACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".pricing-switch",
                "originalId": "65dc4e0e18107f1438dea095|3c3a4f38-e2ed-8db8-ca90-47baa6f7460c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".pricing-switch",
                "originalId": "65dc4e0e18107f1438dea095|3c3a4f38-e2ed-8db8-ca90-47baa6f7460c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1699986359665
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_ACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea095|5fc1d931-de73-ef8a-2f2a-917adc72887c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea095|5fc1d931-de73-ef8a-2f2a-917adc72887c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700025974768
        },
        "e-40": {
            "id": "e-40",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "TAB_INACTIVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-39"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea095|5fc1d931-de73-ef8a-2f2a-917adc72887c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea095|5fc1d931-de73-ef8a-2f2a-917adc72887c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700025974769
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-50"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".read-more-link",
                "originalId": "649882b5ac8ee37e721f0eb4|ffdb79bb-15e8-e481-9fc0-68aaaaab2aa7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".read-more-link",
                "originalId": "649882b5ac8ee37e721f0eb4|ffdb79bb-15e8-e481-9fc0-68aaaaab2aa7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693505769055
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".read-more-link",
                "originalId": "649882b5ac8ee37e721f0eb4|ffdb79bb-15e8-e481-9fc0-68aaaaab2aa7",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".read-more-link",
                "originalId": "649882b5ac8ee37e721f0eb4|ffdb79bb-15e8-e481-9fc0-68aaaaab2aa7",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1693505769055
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea089",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea089",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700117952336
        },
        "e-53": {
            "id": "e-53",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-54"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700320381393
        },
        "e-55": {
            "id": "e-55",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-56"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|3d8a3165-1757-5a05-071b-b44f56febd24",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|3d8a3165-1757-5a05-071b-b44f56febd24",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700320541430
        },
        "e-57": {
            "id": "e-57",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-58"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|41a2582e-7feb-4781-82f2-df1472371629",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|41a2582e-7feb-4781-82f2-df1472371629",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700320597437
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|6ff7e2e5-b12a-f297-64bb-1ce3d3396328",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|6ff7e2e5-b12a-f297-64bb-1ce3d3396328",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700320889688
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|10eff07a-4218-28b3-a272-316dbc94bf86",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|10eff07a-4218-28b3-a272-316dbc94bf86",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700320931491
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "4377a4d4-4eba-2a29-b66c-b7a5749891d7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "4377a4d4-4eba-2a29-b66c-b7a5749891d7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700321584498
        },
        "e-65": {
            "id": "e-65",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-66"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|063c8218-2c0c-8a9d-95d5-84a5b5d0bef1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|063c8218-2c0c-8a9d-95d5-84a5b5d0bef1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700321786032
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-68"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|49ffee43-65db-6c5e-e234-ebdef4e09830",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|49ffee43-65db-6c5e-e234-ebdef4e09830",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700321805777
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|1549428f-8f1a-f95c-5975-671c1f2fd7d8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|1549428f-8f1a-f95c-5975-671c1f2fd7d8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700321820785
        },
        "e-71": {
            "id": "e-71",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|b61e7a12-be4b-e3a5-390e-850ac5549580",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|b61e7a12-be4b-e3a5-390e-850ac5549580",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700321833719
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-74"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|daa21d02-a708-37e7-7f3e-b3fbf0e8a893",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|daa21d02-a708-37e7-7f3e-b3fbf0e8a893",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700321844199
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|af0d4029-4026-cefd-767a-899b45e2db96",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|af0d4029-4026-cefd-767a-899b45e2db96",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700321857336
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|bccac4d4-bdc7-681c-15da-edd83579ee02",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|bccac4d4-bdc7-681c-15da-edd83579ee02",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700321902063
        },
        "e-79": {
            "id": "e-79",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|3e27539a-f3a9-1cd8-4630-ed532b928f8c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|3e27539a-f3a9-1cd8-4630-ed532b928f8c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700321916335
        },
        "e-81": {
            "id": "e-81",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-82"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|14b26b97-0c00-e20e-171a-e60d581fb21f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|14b26b97-0c00-e20e-171a-e60d581fb21f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700321930872
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|14b26b97-0c00-e20e-171a-e60d581fb21d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|14b26b97-0c00-e20e-171a-e60d581fb21d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700321942137
        },
        "e-85": {
            "id": "e-85",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-86"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|cf62ff05-7eb3-7794-169d-8950c992223e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|cf62ff05-7eb3-7794-169d-8950c992223e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700321965322
        },
        "e-87": {
            "id": "e-87",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-88"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|dff99dbf-6af5-4cec-8a4f-8d68d621ebd0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|dff99dbf-6af5-4cec-8a4f-8d68d621ebd0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700321979919
        },
        "e-89": {
            "id": "e-89",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|a8bfb6f8-2843-f4e9-0bc4-47de47304c45",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|a8bfb6f8-2843-f4e9-0bc4-47de47304c45",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700321995542
        },
        "e-91": {
            "id": "e-91",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-92"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|c3c32de8-9762-7c28-ee0f-ad390bb9bcd6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|c3c32de8-9762-7c28-ee0f-ad390bb9bcd6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700322007374
        },
        "e-93": {
            "id": "e-93",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-94"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|b242be37-e8af-caaf-db84-55019c25bdaf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|b242be37-e8af-caaf-db84-55019c25bdaf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700322020848
        },
        "e-95": {
            "id": "e-95",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-96"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|f3507e71-5cca-afad-dcbe-d7aef8ac580c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|f3507e71-5cca-afad-dcbe-d7aef8ac580c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700322165152
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|20fe7528-8666-a3e9-6eaf-69bed9200652",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|20fe7528-8666-a3e9-6eaf-69bed9200652",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700322177326
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|9f7edae2-8f52-32bf-ee98-0b0ecfd2f433",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|9f7edae2-8f52-32bf-ee98-0b0ecfd2f433",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700322187550
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|607946af-c080-9a2e-fd83-569fc4a59dac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|607946af-c080-9a2e-fd83-569fc4a59dac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700322200592
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|65e0f944-f392-19f6-c699-b48fc0840a26",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|65e0f944-f392-19f6-c699-b48fc0840a26",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700322211582
        },
        "e-105": {
            "id": "e-105",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|e0e0f770-e2e8-d109-862a-6bdd5e2b851e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|e0e0f770-e2e8-d109-862a-6bdd5e2b851e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700322222159
        },
        "e-107": {
            "id": "e-107",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-108"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|f77fc4cb-49fb-0625-21ae-7887b2fdf396",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|f77fc4cb-49fb-0625-21ae-7887b2fdf396",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700322232070
        },
        "e-109": {
            "id": "e-109",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-110"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|9c6ed13f-6171-1572-4369-566f68b1f073",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|9c6ed13f-6171-1572-4369-566f68b1f073",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700322257933
        },
        "e-111": {
            "id": "e-111",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea080|dfcced20-45c2-c502-8341-93ccb80b43f7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea080|dfcced20-45c2-c502-8341-93ccb80b43f7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700322274590
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".blog-link",
                "originalId": "65dc4e0e18107f1438dea080|e8fa3ae3-ca0c-6d0a-0a3c-5a7cfb5c6c73",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".blog-link",
                "originalId": "65dc4e0e18107f1438dea080|e8fa3ae3-ca0c-6d0a-0a3c-5a7cfb5c6c73",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700322327456
        },
        "e-114": {
            "id": "e-114",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-113"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".blog-link",
                "originalId": "65dc4e0e18107f1438dea080|e8fa3ae3-ca0c-6d0a-0a3c-5a7cfb5c6c73",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".blog-link",
                "originalId": "65dc4e0e18107f1438dea080|e8fa3ae3-ca0c-6d0a-0a3c-5a7cfb5c6c73",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700322327512
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "272c9f86-7b0c-b25f-5f7e-0405d0461f86",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "272c9f86-7b0c-b25f-5f7e-0405d0461f86",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700325731721
        },
        "e-117": {
            "id": "e-117",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-118"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "81ceb88f-105c-5858-9e75-ef8f0d2e279f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "81ceb88f-105c-5858-9e75-ef8f0d2e279f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700325752968
        },
        "e-119": {
            "id": "e-119",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-120"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "81ceb88f-105c-5858-9e75-ef8f0d2e27b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "81ceb88f-105c-5858-9e75-ef8f0d2e27b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700325768272
        },
        "e-121": {
            "id": "e-121",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-122"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "81ceb88f-105c-5858-9e75-ef8f0d2e27bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "81ceb88f-105c-5858-9e75-ef8f0d2e27bf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700325788126
        },
        "e-123": {
            "id": "e-123",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-124"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "81ceb88f-105c-5858-9e75-ef8f0d2e27cd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "81ceb88f-105c-5858-9e75-ef8f0d2e27cd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700325797054
        },
        "e-125": {
            "id": "e-125",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-126"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "81ceb88f-105c-5858-9e75-ef8f0d2e27dc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "81ceb88f-105c-5858-9e75-ef8f0d2e27dc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700325867977
        },
        "e-127": {
            "id": "e-127",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-128"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|dc6e752d-96cc-cf7c-7600-2b24cd1af86f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|dc6e752d-96cc-cf7c-7600-2b24cd1af86f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700403640307
        },
        "e-129": {
            "id": "e-129",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-130"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|dc6e752d-96cc-cf7c-7600-2b24cd1af875",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|dc6e752d-96cc-cf7c-7600-2b24cd1af875",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700403654223
        },
        "e-131": {
            "id": "e-131",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-132"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|dc6e752d-96cc-cf7c-7600-2b24cd1af877",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|dc6e752d-96cc-cf7c-7600-2b24cd1af877",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700403667472
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-134"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|dc6e752d-96cc-cf7c-7600-2b24cd1af879",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|dc6e752d-96cc-cf7c-7600-2b24cd1af879",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700403679822
        },
        "e-135": {
            "id": "e-135",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-136"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|b1eee2b7-016d-bc5f-a5e6-54e45e9950fe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|b1eee2b7-016d-bc5f-a5e6-54e45e9950fe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700403731703
        },
        "e-137": {
            "id": "e-137",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-138"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|300c601d-af8e-575e-35ab-deddbfef9488",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|300c601d-af8e-575e-35ab-deddbfef9488",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700403738878
        },
        "e-139": {
            "id": "e-139",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-140"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|7cbb716c-5b30-c77c-86a5-0d55ba048891",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|7cbb716c-5b30-c77c-86a5-0d55ba048891",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700403755420
        },
        "e-141": {
            "id": "e-141",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-142"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "7d9b4dad-0741-708b-cfb9-2f2a6482a600",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "7d9b4dad-0741-708b-cfb9-2f2a6482a600",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700403935934
        },
        "e-143": {
            "id": "e-143",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-144"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|1f73543c-c94b-c91c-f075-3bb3f671a054",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|1f73543c-c94b-c91c-f075-3bb3f671a054",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700404878111
        },
        "e-145": {
            "id": "e-145",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-146"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|1fa47f2a-29c9-2c28-b5c3-5f751724a937",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|1fa47f2a-29c9-2c28-b5c3-5f751724a937",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700404894825
        },
        "e-147": {
            "id": "e-147",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-148"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|853164fc-acc4-d507-af1b-38217bc94bc7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|853164fc-acc4-d507-af1b-38217bc94bc7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700404930577
        },
        "e-149": {
            "id": "e-149",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-150"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|10243841-7ca4-8c93-cb72-569b39abdd9f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|10243841-7ca4-8c93-cb72-569b39abdd9f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700405016626
        },
        "e-151": {
            "id": "e-151",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-152"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|6bbdd8b1-7287-be65-47ec-2b12ad1e6bc8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|6bbdd8b1-7287-be65-47ec-2b12ad1e6bc8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700405138544
        },
        "e-153": {
            "id": "e-153",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-154"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|befd18cf-71b4-286d-c8a1-f145ee23230e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|befd18cf-71b4-286d-c8a1-f145ee23230e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700405172335
        },
        "e-155": {
            "id": "e-155",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-156"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|9fe78a12-8d9c-2e5a-d69d-02c294a132f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|9fe78a12-8d9c-2e5a-d69d-02c294a132f3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700405185314
        },
        "e-157": {
            "id": "e-157",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-158"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|1b77c62d-8ebe-d3d7-e2c2-5c759b76eae2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|1b77c62d-8ebe-d3d7-e2c2-5c759b76eae2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700405210311
        },
        "e-159": {
            "id": "e-159",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-160"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|b44f12c3-8580-8c22-53d3-cb0f6cf7b840",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|b44f12c3-8580-8c22-53d3-cb0f6cf7b840",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700405230231
        },
        "e-161": {
            "id": "e-161",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-162"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|2702e28a-2395-8a4e-63c7-2ca7c38f3db8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|2702e28a-2395-8a4e-63c7-2ca7c38f3db8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700405443658
        },
        "e-163": {
            "id": "e-163",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-164"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|913126d4-8593-55aa-dba1-41c51880ab64",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|913126d4-8593-55aa-dba1-41c51880ab64",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700405499337
        },
        "e-165": {
            "id": "e-165",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-166"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|8a3bc5de-5e6e-0b6e-2431-5fe8ab44d9d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|8a3bc5de-5e6e-0b6e-2431-5fe8ab44d9d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700405595385
        },
        "e-167": {
            "id": "e-167",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-168"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea087|abc62093-1bbe-542a-0eba-c68617c991d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea087|abc62093-1bbe-542a-0eba-c68617c991d0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700405616454
        },
        "e-169": {
            "id": "e-169",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-170"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1708",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df1708",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700405632462
        },
        "e-171": {
            "id": "e-171",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-172"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df170c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df170c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700405649592
        },
        "e-173": {
            "id": "e-173",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-174"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df171f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8888afbe-aa59-3b5c-4dd2-baec47df171f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700405661673
        },
        "e-175": {
            "id": "e-175",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-176"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea088|c62ca139-7d7f-459e-0c51-520380b68c9f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea088|c62ca139-7d7f-459e-0c51-520380b68c9f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700406698818
        },
        "e-177": {
            "id": "e-177",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-178"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea088|2e1802ac-960b-18a6-cad5-8dcd27466873",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea088|2e1802ac-960b-18a6-cad5-8dcd27466873",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700406709267
        },
        "e-179": {
            "id": "e-179",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-180"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea088|236324e3-318b-7a09-878a-5c4ec3b61e62",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea088|236324e3-318b-7a09-878a-5c4ec3b61e62",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700406736298
        },
        "e-181": {
            "id": "e-181",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-182"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea088|33914a15-3cf0-3ddc-bc3a-ee4bdbd38808",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea088|33914a15-3cf0-3ddc-bc3a-ee4bdbd38808",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700407096432
        },
        "e-183": {
            "id": "e-183",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-184"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea088|9338628c-5299-3547-8705-debf56e68067",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea088|9338628c-5299-3547-8705-debf56e68067",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700407147471
        },
        "e-187": {
            "id": "e-187",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-188"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea095|5a1cace5-f73e-04a0-5f2f-7945abab5203",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea095|5a1cace5-f73e-04a0-5f2f-7945abab5203",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700407726298
        },
        "e-189": {
            "id": "e-189",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-190"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea095|5a1cace5-f73e-04a0-5f2f-7945abab5205",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea095|5a1cace5-f73e-04a0-5f2f-7945abab5205",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700407736527
        },
        "e-191": {
            "id": "e-191",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-192"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea095|eeb9efc7-a560-6f2e-1bc4-f32863b56ada",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea095|eeb9efc7-a560-6f2e-1bc4-f32863b56ada",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700407748252
        },
        "e-193": {
            "id": "e-193",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-194"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea095|f86eefd0-c444-2a9f-3a12-c5bbfc3ff93d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea095|f86eefd0-c444-2a9f-3a12-c5bbfc3ff93d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700407774559
        },
        "e-195": {
            "id": "e-195",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-196"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea095|196ee19e-6c8a-5119-2db1-f4c84068460e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea095|196ee19e-6c8a-5119-2db1-f4c84068460e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700407783204
        },
        "e-197": {
            "id": "e-197",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-198"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea095|5fc1d931-de73-ef8a-2f2a-917adc72886b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea095|5fc1d931-de73-ef8a-2f2a-917adc72886b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700407797910
        },
        "e-199": {
            "id": "e-199",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-200"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea095|d8e8c73f-125f-401f-1fe0-561ba72fe9d4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea095|d8e8c73f-125f-401f-1fe0-561ba72fe9d4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700407909535
        },
        "e-201": {
            "id": "e-201",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-202"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea095|d5168e85-6eae-1d3b-6ae5-d8dd9069ba33",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea095|d5168e85-6eae-1d3b-6ae5-d8dd9069ba33",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700407926683
        },
        "e-203": {
            "id": "e-203",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-204"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea095|8f50ac54-2d28-854f-ac30-7e634ec11914",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea095|8f50ac54-2d28-854f-ac30-7e634ec11914",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700407941163
        },
        "e-205": {
            "id": "e-205",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-206"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea095|0530b554-b42b-799d-5965-c56ff46d6e76",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea095|0530b554-b42b-799d-5965-c56ff46d6e76",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700407971636
        },
        "e-207": {
            "id": "e-207",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-208"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea095|c7eba27f-11e6-818a-06b9-093a1f8cffce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea095|c7eba27f-11e6-818a-06b9-093a1f8cffce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700407990957
        },
        "e-209": {
            "id": "e-209",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-210"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08b|cbcec74b-dcd3-2ea7-d0c9-760c47044c71",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08b|cbcec74b-dcd3-2ea7-d0c9-760c47044c71",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700408093389
        },
        "e-211": {
            "id": "e-211",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-212"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08b|dd648884-7bd7-5a72-aff8-064923045578",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08b|dd648884-7bd7-5a72-aff8-064923045578",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700408102189
        },
        "e-213": {
            "id": "e-213",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-214"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea089|b799617c-d3c7-b38d-1cab-9c046914c12b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea089|b799617c-d3c7-b38d-1cab-9c046914c12b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700408411405
        },
        "e-215": {
            "id": "e-215",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-216"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea089|b799617c-d3c7-b38d-1cab-9c046914c131",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea089|b799617c-d3c7-b38d-1cab-9c046914c131",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700408418362
        },
        "e-217": {
            "id": "e-217",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-218"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea089|b799617c-d3c7-b38d-1cab-9c046914c133",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea089|b799617c-d3c7-b38d-1cab-9c046914c133",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700408425620
        },
        "e-219": {
            "id": "e-219",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-220"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea089|d9e42100-096c-4f63-acaf-5235bfca1c77",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea089|d9e42100-096c-4f63-acaf-5235bfca1c77",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700408445684
        },
        "e-221": {
            "id": "e-221",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-222"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea089|b01bc084-97b7-f7d6-ff29-f81d3201ee17",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea089|b01bc084-97b7-f7d6-ff29-f81d3201ee17",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700408575040
        },
        "e-223": {
            "id": "e-223",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-224"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea089|b01bc084-97b7-f7d6-ff29-f81d3201ee21",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea089|b01bc084-97b7-f7d6-ff29-f81d3201ee21",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700408595251
        },
        "e-225": {
            "id": "e-225",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-226"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea089|b01bc084-97b7-f7d6-ff29-f81d3201ee2f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea089|b01bc084-97b7-f7d6-ff29-f81d3201ee2f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700408612004
        },
        "e-227": {
            "id": "e-227",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-228"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea092|75f6a246-7d2f-5f65-9119-35719bcaabfd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea092|75f6a246-7d2f-5f65-9119-35719bcaabfd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700409628484
        },
        "e-229": {
            "id": "e-229",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-230"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea092|eff97c73-9ae6-3ab4-34a8-be38c9ed8981",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea092|eff97c73-9ae6-3ab4-34a8-be38c9ed8981",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700409646972
        },
        "e-231": {
            "id": "e-231",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-232"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea092|dbe070ad-f341-580c-8685-163a52015227",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea092|dbe070ad-f341-580c-8685-163a52015227",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700409654940
        },
        "e-233": {
            "id": "e-233",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-234"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea092|843cc75d-cd6b-63f8-2fb7-7192986d7c3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea092|843cc75d-cd6b-63f8-2fb7-7192986d7c3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700409666032
        },
        "e-235": {
            "id": "e-235",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-236"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea092|869e16bf-a6e1-6498-b1a6-e185d48ec40f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea092|869e16bf-a6e1-6498-b1a6-e185d48ec40f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700414962566
        },
        "e-237": {
            "id": "e-237",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-238"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea092|f8a990c7-2844-e86f-9e4c-8ea3d76aa066",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea092|f8a990c7-2844-e86f-9e4c-8ea3d76aa066",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700414980836
        },
        "e-239": {
            "id": "e-239",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-240"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea092|16d7435f-b470-bc63-d93f-65296801f2db",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea092|16d7435f-b470-bc63-d93f-65296801f2db",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700414995507
        },
        "e-241": {
            "id": "e-241",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-242"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea094|a5703185-6035-c915-3ec8-e1ab4ec4d15c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea094|a5703185-6035-c915-3ec8-e1ab4ec4d15c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700580345746
        },
        "e-243": {
            "id": "e-243",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-244"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea094|888de52c-5cf0-9b97-561d-bc20420b514e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea094|888de52c-5cf0-9b97-561d-bc20420b514e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700580354284
        },
        "e-245": {
            "id": "e-245",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-246"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea097|df890062-44e0-7b94-3b72-7112142bd798",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea097|df890062-44e0-7b94-3b72-7112142bd798",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700580386220
        },
        "e-247": {
            "id": "e-247",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-248"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea097|df890062-44e0-7b94-3b72-7112142bd79a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea097|df890062-44e0-7b94-3b72-7112142bd79a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700580393526
        },
        "e-249": {
            "id": "e-249",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-250"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea091|f9a09036-0015-5cc6-6d5e-c843ab293603",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea091|f9a09036-0015-5cc6-6d5e-c843ab293603",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700580431548
        },
        "e-251": {
            "id": "e-251",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-252"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea091|f9a09036-0015-5cc6-6d5e-c843ab293605",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea091|f9a09036-0015-5cc6-6d5e-c843ab293605",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700580438715
        },
        "e-253": {
            "id": "e-253",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-254"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea098|a6f43787-33a0-9bdb-e7cb-e5ef3b736fdd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea098|a6f43787-33a0-9bdb-e7cb-e5ef3b736fdd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700580573450
        },
        "e-255": {
            "id": "e-255",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-256"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea098|580d29e9-2db7-0f8f-2b52-864a6dacc8af",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea098|580d29e9-2db7-0f8f-2b52-864a6dacc8af",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700580614355
        },
        "e-257": {
            "id": "e-257",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-258"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea098|580d29e9-2db7-0f8f-2b52-864a6dacc8b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea098|580d29e9-2db7-0f8f-2b52-864a6dacc8b1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700580626485
        },
        "e-259": {
            "id": "e-259",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-260"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea098|f1250425-9f88-08bf-9f6d-03a54286f498",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea098|f1250425-9f88-08bf-9f6d-03a54286f498",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700580646219
        },
        "e-261": {
            "id": "e-261",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-262"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea098|621157d5-f223-1b72-43e9-8243c381207a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea098|621157d5-f223-1b72-43e9-8243c381207a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700580656285
        },
        "e-263": {
            "id": "e-263",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-264"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea098|9e9187fb-3266-ea6f-5e44-282734f00a8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea098|9e9187fb-3266-ea6f-5e44-282734f00a8b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700580665754
        },
        "e-265": {
            "id": "e-265",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-266"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea098|9e9187fb-3266-ea6f-5e44-282734f00a8d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea098|9e9187fb-3266-ea6f-5e44-282734f00a8d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700580674867
        },
        "e-267": {
            "id": "e-267",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-268"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea093|94becf5b-f09e-083b-4f0d-902ed31f309e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea093|94becf5b-f09e-083b-4f0d-902ed31f309e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700580719674
        },
        "e-269": {
            "id": "e-269",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-270"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea093|0cba2a38-5104-0061-3b0b-a766c63552ad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea093|0cba2a38-5104-0061-3b0b-a766c63552ad",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700580733612
        },
        "e-271": {
            "id": "e-271",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-272"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08a|def44345-927b-f8a7-b361-513194789c00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08a|def44345-927b-f8a7-b361-513194789c00",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700580759749
        },
        "e-273": {
            "id": "e-273",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-274"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08a|cdca933b-f687-d197-94b5-ba0f36702476",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08a|cdca933b-f687-d197-94b5-ba0f36702476",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700580769602
        },
        "e-275": {
            "id": "e-275",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-276"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea088|bc428222-6741-a3e6-d377-1dc260da5b30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea088|bc428222-6741-a3e6-d377-1dc260da5b30",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700580998667
        },
        "e-277": {
            "id": "e-277",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-278"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea088|5350c004-c07f-0222-f33c-2e8dcf6b3968",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea088|5350c004-c07f-0222-f33c-2e8dcf6b3968",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581013409
        },
        "e-279": {
            "id": "e-279",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-280"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08e|8978b75f-e2ea-f236-bdc8-df57addb08f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08e|8978b75f-e2ea-f236-bdc8-df57addb08f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581268209
        },
        "e-281": {
            "id": "e-281",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-282"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08e|08f551bf-a7bf-47c0-6c67-4dfa7fc28241",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08e|08f551bf-a7bf-47c0-6c67-4dfa7fc28241",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581287864
        },
        "e-283": {
            "id": "e-283",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-284"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08e|a03aa2c3-6f32-3ab3-ea21-8f20a64864ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08e|a03aa2c3-6f32-3ab3-ea21-8f20a64864ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581300088
        },
        "e-285": {
            "id": "e-285",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-286"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08e|80ca1d14-6638-55a3-7d53-ab6acff7dfb9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08e|80ca1d14-6638-55a3-7d53-ab6acff7dfb9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 5,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581310554
        },
        "e-287": {
            "id": "e-287",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-288"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08e|42b0a284-1347-30d6-f7bd-0188a9052ecb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08e|42b0a284-1347-30d6-f7bd-0188a9052ecb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581350104
        },
        "e-289": {
            "id": "e-289",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-290"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08e|622a6e88-807c-adf6-da0d-f055d5f2ef28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08e|622a6e88-807c-adf6-da0d-f055d5f2ef28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581361704
        },
        "e-291": {
            "id": "e-291",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-292"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08f|ccd1a989-bbaa-dac5-5ddd-0ad4fd422e6d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08f|ccd1a989-bbaa-dac5-5ddd-0ad4fd422e6d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581466347
        },
        "e-293": {
            "id": "e-293",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-294"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08f|ccd1a989-bbaa-dac5-5ddd-0ad4fd422e72",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08f|ccd1a989-bbaa-dac5-5ddd-0ad4fd422e72",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581466347
        },
        "e-295": {
            "id": "e-295",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-296"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea090|9958acf6-3550-3023-a4ef-b4dd3a638f65",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea090|9958acf6-3550-3023-a4ef-b4dd3a638f65",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581504735
        },
        "e-297": {
            "id": "e-297",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-298"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea090|90bac34f-da9d-c527-40f7-1f1b4f96271f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea090|90bac34f-da9d-c527-40f7-1f1b4f96271f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581516215
        },
        "e-299": {
            "id": "e-299",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-300"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea090|f8e9ec64-8a60-e372-13e1-64e40d5cea13",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea090|f8e9ec64-8a60-e372-13e1-64e40d5cea13",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581532495
        },
        "e-301": {
            "id": "e-301",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-302"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea090|d63b4497-a7f0-25e3-7066-c68d7ac818cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea090|d63b4497-a7f0-25e3-7066-c68d7ac818cc",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581561055
        },
        "e-303": {
            "id": "e-303",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-304"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea090|d63b4497-a7f0-25e3-7066-c68d7ac818d6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea090|d63b4497-a7f0-25e3-7066-c68d7ac818d6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581579848
        },
        "e-305": {
            "id": "e-305",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-306"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea090|d63b4497-a7f0-25e3-7066-c68d7ac818e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea090|d63b4497-a7f0-25e3-7066-c68d7ac818e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581589447
        },
        "e-307": {
            "id": "e-307",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-308"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08c|2e49d3e1-833c-870d-54a3-f1d9733c55d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08c|2e49d3e1-833c-870d-54a3-f1d9733c55d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581651128
        },
        "e-309": {
            "id": "e-309",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-310"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08c|39ae3e85-1cf0-69b5-d280-c6ffae3f971e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08c|39ae3e85-1cf0-69b5-d280-c6ffae3f971e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581660113
        },
        "e-311": {
            "id": "e-311",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-312"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08c|087a41d8-e94f-eae0-2f8c-2c4a3317d655",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08c|087a41d8-e94f-eae0-2f8c-2c4a3317d655",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581690297
        },
        "e-313": {
            "id": "e-313",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-314"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08c|eea7ff99-83fe-f3a5-e895-206aaf689b87",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08c|eea7ff99-83fe-f3a5-e895-206aaf689b87",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581709192
        },
        "e-315": {
            "id": "e-315",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-316"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08c|5fecc588-e6f2-522d-03e9-58374d51c8a0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08c|5fecc588-e6f2-522d-03e9-58374d51c8a0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581770151
        },
        "e-317": {
            "id": "e-317",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-318"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08c|5fecc588-e6f2-522d-03e9-58374d51c8a5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08c|5fecc588-e6f2-522d-03e9-58374d51c8a5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 10,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581782408
        },
        "e-319": {
            "id": "e-319",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-320"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08d|7598644e-7bb9-4b34-a855-ce09741be606",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08d|7598644e-7bb9-4b34-a855-ce09741be606",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581861936
        },
        "e-321": {
            "id": "e-321",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-322"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08d|7598644e-7bb9-4b34-a855-ce09741be608",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08d|7598644e-7bb9-4b34-a855-ce09741be608",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581861936
        },
        "e-323": {
            "id": "e-323",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-324"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65dc4e0e18107f1438dea08d|7598644e-7bb9-4b34-a855-ce09741be60d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65dc4e0e18107f1438dea08d|7598644e-7bb9-4b34-a855-ce09741be60d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1700581861936
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Integrations Move Slide",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "65dc4e0e18107f1438dea080|7ffbf70d-a54f-92d3-7de5-6e00354c15eb"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "65dc4e0e18107f1438dea080|90e124d2-efef-2592-141d-5c8f1595ff39"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "65dc4e0e18107f1438dea080|dff99dbf-6af5-4cec-8a4f-8d68d621ebd1"
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "65dc4e0e18107f1438dea080|6e7eb086-7cfd-13e5-849a-ec5d69dde513"
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 30000,
                        "target": {
                            "id": "65dc4e0e18107f1438dea080|7ffbf70d-a54f-92d3-7de5-6e00354c15eb"
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 30000,
                        "target": {
                            "id": "65dc4e0e18107f1438dea080|90e124d2-efef-2592-141d-5c8f1595ff39"
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 30000,
                        "target": {
                            "id": "65dc4e0e18107f1438dea080|dff99dbf-6af5-4cec-8a4f-8d68d621ebd1"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-8",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 30000,
                        "target": {
                            "id": "65dc4e0e18107f1438dea080|6e7eb086-7cfd-13e5-849a-ec5d69dde513"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "65dc4e0e18107f1438dea080|7ffbf70d-a54f-92d3-7de5-6e00354c15eb"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "65dc4e0e18107f1438dea080|90e124d2-efef-2592-141d-5c8f1595ff39"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "65dc4e0e18107f1438dea080|dff99dbf-6af5-4cec-8a4f-8d68d621ebd1"
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "65dc4e0e18107f1438dea080|6e7eb086-7cfd-13e5-849a-ec5d69dde513"
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1699863323615
        },
        "a-2": {
            "id": "a-2",
            "title": "Team Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-member-image",
                            "selectorGuids": ["2b773736-03ef-2332-eee7-91ed93d5f544"]
                        },
                        "filters": [{
                            "type": "saturate",
                            "filterId": "99fe",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-2-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-member-image",
                            "selectorGuids": ["2b773736-03ef-2332-eee7-91ed93d5f544"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-3",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-member-image",
                            "selectorGuids": ["2b773736-03ef-2332-eee7-91ed93d5f544"]
                        },
                        "filters": [{
                            "type": "saturate",
                            "filterId": "99fe",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-2-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-member-image",
                            "selectorGuids": ["2b773736-03ef-2332-eee7-91ed93d5f544"]
                        },
                        "xValue": 1.08,
                        "yValue": 1.08,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1699941800051
        },
        "a-3": {
            "id": "a-3",
            "title": "Team Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-member-image",
                            "selectorGuids": ["2b773736-03ef-2332-eee7-91ed93d5f544"]
                        },
                        "filters": [{
                            "type": "saturate",
                            "filterId": "99fe",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-3-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".team-member-image",
                            "selectorGuids": ["2b773736-03ef-2332-eee7-91ed93d5f544"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1699941800051
        },
        "a-4": {
            "id": "a-4",
            "title": "C-01 FAQ Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".c-01-faq-ans-wrap",
                            "selectorGuids": ["a9497d10-a5f9-1631-5a1a-007ac191b5ee"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-4-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".c-01-faq-arrow",
                            "selectorGuids": ["edf3891c-d008-ff0a-200c-f28219751cd0"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".c-01-faq-ans-wrap",
                            "selectorGuids": ["a9497d10-a5f9-1631-5a1a-007ac191b5ee"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-4-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".c-01-faq-arrow",
                            "selectorGuids": ["edf3891c-d008-ff0a-200c-f28219751cd0"]
                        },
                        "zValue": -180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1699944554563
        },
        "a-5": {
            "id": "a-5",
            "title": "C-01 FAQ Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".c-01-faq-ans-wrap",
                            "selectorGuids": ["a9497d10-a5f9-1631-5a1a-007ac191b5ee"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-5-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".c-01-faq-arrow",
                            "selectorGuids": ["edf3891c-d008-ff0a-200c-f28219751cd0"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1699944554563
        },
        "a-6": {
            "id": "a-6",
            "title": "C-01 FAQ 1st Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".c-01-faq-arrow",
                            "selectorGuids": ["edf3891c-d008-ff0a-200c-f28219751cd0"]
                        },
                        "zValue": -180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".c-01-faq-ans-wrap",
                            "selectorGuids": ["a9497d10-a5f9-1631-5a1a-007ac191b5ee"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-6-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".c-01-faq-arrow",
                            "selectorGuids": ["edf3891c-d008-ff0a-200c-f28219751cd0"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1699945197953
        },
        "a-7": {
            "id": "a-7",
            "title": "C-01 FAQ 1st Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".c-01-faq-ans-wrap",
                            "selectorGuids": ["a9497d10-a5f9-1631-5a1a-007ac191b5ee"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-7-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".c-01-faq-arrow",
                            "selectorGuids": ["edf3891c-d008-ff0a-200c-f28219751cd0"]
                        },
                        "zValue": -180,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1699945197953
        },
        "a-8": {
            "id": "a-8",
            "title": "FAQ Tab Active",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "8888afbe-aa59-3b5c-4dd2-baec47df170d"
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 94,
                        "gValue": 138,
                        "aValue": 1
                    }
                }, {
                    "id": "a-8-n-5",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "8888afbe-aa59-3b5c-4dd2-baec47df1713"
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 94,
                        "gValue": 138,
                        "aValue": 1
                    }
                }, {
                    "id": "a-8-n-2",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-tab-icon",
                            "selectorGuids": ["df460f8d-ef7b-d0a5-06b2-639582e58e6d"]
                        },
                        "filters": [{
                            "type": "invert",
                            "filterId": "b50b",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-8-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sub-h2.faq-tab-title",
                            "selectorGuids": ["6c987a95-ac54-3d41-f132-2d24cabecbff", "ed16e52a-20bd-7ba6-7080-a3292b864019"]
                        },
                        "globalSwatchId": "",
                        "rValue": 19,
                        "bValue": 19,
                        "gValue": 19,
                        "aValue": 1
                    }
                }, {
                    "id": "a-8-n-4",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-tab-link-arrow",
                            "selectorGuids": ["87bdcc36-4238-7049-3b6c-25e61bd0a012"]
                        },
                        "filters": [{
                            "type": "invert",
                            "filterId": "cba2",
                            "value": 100,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1699968919556
        },
        "a-9": {
            "id": "a-9",
            "title": "FAQ Tab Inactive",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "8888afbe-aa59-3b5c-4dd2-baec47df170d"
                        },
                        "globalSwatchId": "",
                        "rValue": 24,
                        "bValue": 24,
                        "gValue": 24,
                        "aValue": 1
                    }
                }, {
                    "id": "a-9-n-5",
                    "actionTypeId": "STYLE_BORDER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": true,
                            "id": "8888afbe-aa59-3b5c-4dd2-baec47df1713"
                        },
                        "globalSwatchId": "",
                        "rValue": 40,
                        "bValue": 40,
                        "gValue": 41,
                        "aValue": 1
                    }
                }, {
                    "id": "a-9-n-2",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-tab-icon",
                            "selectorGuids": ["df460f8d-ef7b-d0a5-06b2-639582e58e6d"]
                        },
                        "filters": [{
                            "type": "invert",
                            "filterId": "b50b",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }, {
                    "id": "a-9-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".sub-h2.faq-tab-title",
                            "selectorGuids": ["6c987a95-ac54-3d41-f132-2d24cabecbff", "ed16e52a-20bd-7ba6-7080-a3292b864019"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-9-n-4",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-tab-link-arrow",
                            "selectorGuids": ["87bdcc36-4238-7049-3b6c-25e61bd0a012"]
                        },
                        "filters": [{
                            "type": "invert",
                            "filterId": "cba2",
                            "value": 0,
                            "unit": "%"
                        }]
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1699968919556
        },
        "a-10": {
            "id": "a-10",
            "title": "FAQ Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-ans-wrap",
                            "selectorGuids": ["b2f5387b-cceb-bdb6-0fbd-2766c42e1511"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-10-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-arrow",
                            "selectorGuids": ["884763ca-08ce-fafb-496c-3cc293490781"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-ans-wrap",
                            "selectorGuids": ["b2f5387b-cceb-bdb6-0fbd-2766c42e1511"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-10-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-arrow",
                            "selectorGuids": ["884763ca-08ce-fafb-496c-3cc293490781"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1699970024797
        },
        "a-11": {
            "id": "a-11",
            "title": "FAQ Close",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-ans-wrap",
                            "selectorGuids": ["b2f5387b-cceb-bdb6-0fbd-2766c42e1511"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-11-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-arrow",
                            "selectorGuids": ["884763ca-08ce-fafb-496c-3cc293490781"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1699970024797
        },
        "a-12": {
            "id": "a-12",
            "title": "FAQ 1st Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-arrow",
                            "selectorGuids": ["884763ca-08ce-fafb-496c-3cc293490781"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-ans-wrap",
                            "selectorGuids": ["b2f5387b-cceb-bdb6-0fbd-2766c42e1511"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-12-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-arrow",
                            "selectorGuids": ["884763ca-08ce-fafb-496c-3cc293490781"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1699971150168
        },
        "a-13": {
            "id": "a-13",
            "title": "FAQ 1st Open 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-ans-wrap",
                            "selectorGuids": ["b2f5387b-cceb-bdb6-0fbd-2766c42e1511"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-13-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 400,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".faq-arrow",
                            "selectorGuids": ["884763ca-08ce-fafb-496c-3cc293490781"]
                        },
                        "zValue": 45,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1699971150168
        },
        "a-14": {
            "id": "a-14",
            "title": "Pricing Tab 1",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-14-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".price-box.month",
                            "selectorGuids": ["44a4f7a4-16b5-634f-d506-c2e8ff112af0", "f17af1fe-1e9b-3f90-e7d8-8b5a085ab5d1"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-14-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".price-box.year",
                            "selectorGuids": ["44a4f7a4-16b5-634f-d506-c2e8ff112af0", "59e166a4-2d80-03fd-70c5-bc32e77fcdf2"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1699986362952
        },
        "a-15": {
            "id": "a-15",
            "title": "Pricing Tab 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-15-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".price-box.year",
                            "selectorGuids": ["44a4f7a4-16b5-634f-d506-c2e8ff112af0", "59e166a4-2d80-03fd-70c5-bc32e77fcdf2"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-15-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".price-box.month",
                            "selectorGuids": ["44a4f7a4-16b5-634f-d506-c2e8ff112af0", "f17af1fe-1e9b-3f90-e7d8-8b5a085ab5d1"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1699986362952
        },
        "a-16": {
            "id": "a-16",
            "title": "Pricing Tab 3",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".price-box-2.month",
                            "selectorGuids": ["f062c6e6-e247-4a69-8275-ef11138a89ba", "541335d6-e2be-d2df-9068-bcd7d322c478"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-16-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".price-box-2.year",
                            "selectorGuids": ["f062c6e6-e247-4a69-8275-ef11138a89ba", "f1a8e39f-fdd3-6c7e-6a9f-898e3c9157e6"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1699986362952
        },
        "a-17": {
            "id": "a-17",
            "title": "Pricing Tab 4",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".price-box-2.year",
                            "selectorGuids": ["f062c6e6-e247-4a69-8275-ef11138a89ba", "f1a8e39f-fdd3-6c7e-6a9f-898e3c9157e6"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-17-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".price-box-2.month",
                            "selectorGuids": ["f062c6e6-e247-4a69-8275-ef11138a89ba", "541335d6-e2be-d2df-9068-bcd7d322c478"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1699986362952
        },
        "a-18": {
            "id": "a-18",
            "title": "Link Hover On 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".read-more-arrow._2",
                            "selectorGuids": ["8d0b4048-bc0e-73a5-c141-75b4af78b8f5", "8d0b4048-bc0e-73a5-c141-75b4af78b8f9"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-18-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".read-more-arrow._2",
                            "selectorGuids": ["8d0b4048-bc0e-73a5-c141-75b4af78b8f5", "8d0b4048-bc0e-73a5-c141-75b4af78b8f9"]
                        },
                        "xValue": -60,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-18-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".read-more-arrow",
                            "selectorGuids": ["8d0b4048-bc0e-73a5-c141-75b4af78b8f5"]
                        },
                        "xValue": 35,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".read-more-arrow._2",
                            "selectorGuids": ["8d0b4048-bc0e-73a5-c141-75b4af78b8f5", "8d0b4048-bc0e-73a5-c141-75b4af78b8f9"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-18-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".read-more-arrow._2",
                            "selectorGuids": ["8d0b4048-bc0e-73a5-c141-75b4af78b8f5", "8d0b4048-bc0e-73a5-c141-75b4af78b8f9"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1693501661257
        },
        "a-19": {
            "id": "a-19",
            "title": "Link Hover Out 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".read-more-arrow",
                            "selectorGuids": ["8d0b4048-bc0e-73a5-c141-75b4af78b8f5"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-19-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".read-more-arrow._2",
                            "selectorGuids": ["8d0b4048-bc0e-73a5-c141-75b4af78b8f5", "8d0b4048-bc0e-73a5-c141-75b4af78b8f9"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-19-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outCubic",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".read-more-arrow._2",
                            "selectorGuids": ["8d0b4048-bc0e-73a5-c141-75b4af78b8f5", "8d0b4048-bc0e-73a5-c141-75b4af78b8f9"]
                        },
                        "xValue": -80,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1693501661257
        },
        "a-20": {
            "id": "a-20",
            "title": "Team Slide",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "65dc4e0e18107f1438dea089|f264b7c3-0b77-9d69-92d6-a6e9717622f6"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-20-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "65dc4e0e18107f1438dea089|607db1ed-ed2d-20a2-1a97-4e2f3dec3ee8"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 50000,
                        "target": {
                            "id": "65dc4e0e18107f1438dea089|f264b7c3-0b77-9d69-92d6-a6e9717622f6"
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-20-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 50000,
                        "target": {
                            "id": "65dc4e0e18107f1438dea089|607db1ed-ed2d-20a2-1a97-4e2f3dec3ee8"
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "65dc4e0e18107f1438dea089|f264b7c3-0b77-9d69-92d6-a6e9717622f6"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-20-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "65dc4e0e18107f1438dea089|607db1ed-ed2d-20a2-1a97-4e2f3dec3ee8"
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1700117959117
        },
        "a-21": {
            "id": "a-21",
            "title": "Slide Up 2s",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "yValue": 10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-21-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-21-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1700320393854
        },
        "a-22": {
            "id": "a-22",
            "title": "Slide Up 3s",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "yValue": 10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1700320393854
        },
        "a-23": {
            "id": "a-23",
            "title": "Slide Up 4s",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "yValue": 10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-23-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-23-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 400,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1700320393854
        },
        "a-24": {
            "id": "a-24",
            "title": "Slide Up 5s",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "yValue": 10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-24-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-24-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1700320393854
        },
        "a-25": {
            "id": "a-25",
            "title": "Slide Up 6s",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "yValue": 10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 600,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1700320393854
        },
        "a-26": {
            "id": "a-26",
            "title": "Blog Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-image",
                            "selectorGuids": ["421b01d5-2c06-d8db-5fa7-dc49aa3aa9b6"]
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "zValue": null,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-image",
                            "selectorGuids": ["421b01d5-2c06-d8db-5fa7-dc49aa3aa9b6"]
                        },
                        "xValue": null,
                        "yValue": null,
                        "zValue": 5,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1700322331012
        },
        "a-27": {
            "id": "a-27",
            "title": "Blog Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-image",
                            "selectorGuids": ["421b01d5-2c06-d8db-5fa7-dc49aa3aa9b6"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "zValue": null,
                        "locked": true
                    }
                }, {
                    "id": "a-27-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".blog-image",
                            "selectorGuids": ["421b01d5-2c06-d8db-5fa7-dc49aa3aa9b6"]
                        },
                        "xValue": null,
                        "yValue": null,
                        "zValue": 0,
                        "xUnit": "deg",
                        "yUnit": "deg",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1700322331012
        },
        "a-28": {
            "id": "a-28",
            "title": "Slide Up 7s",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "yValue": 10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 700,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 700,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1700320393854
        },
        "a-29": {
            "id": "a-29",
            "title": "Slide Up 8s",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "yValue": 10,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-29-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 800,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-29-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 800,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "65dc4e0e18107f1438dea080|7c0a471e-2bda-6b6b-e5c6-1dbc976fce2a"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1700320393854
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});