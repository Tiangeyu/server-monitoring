window.Q = function (t, i, n) {
  "use strict";

  function e(t, i, n) {
    if (t[qh]()) {
      var s = t._f8 || t.getChildren();
      if (s) {
        s = s._j5 || s;
        for (var h = 0, r = s[Wh]; r > h; h++)
          if (i[Uh](n, s[h]) === !1 || e(s[h], i, n) === !1) return !1;
        return !0
      }
    }
  }

  function s(t) {
    if (!t[qh]()) return t instanceof Uq ? t : null;
    for (var i, n = t._f8._j5, e = n.length - 1; e >= 0;) {
      if (i = n[e], i = s(i)) return i;
      e--
    }
    return null
  }

  function h(t, i, n, e) {
    return e ? r(t, i, n) : a(t, i, n)
  }

  function r(t, i, n) {
    t = t._j5 || t;
    for (var e, s = 0, h = t[Wh]; h > s; s++)
      if (e = t[s], e[qh]() && !r(e.children, i, n) || i.call(n, e) === !1) return !1;
    return !0
  }

  function a(t, i, n) {
    t = t._j5 || t;
    for (var e, s = 0, h = t[Wh]; h > s; s++)
      if (e = t[s], i[Uh](n, e) === !1 || e.hasChildren() && !a(e[Vh], i, n)) return !1;
    return !0
  }

  function o(t, i, n, e) {
    return e ? f(t, i, n) : c(t, i, n)
  }

  function f(t, i, n) {
    t = t._j5 || t;
    for (var e, s = t[Wh], h = s - 1; h >= 0; h--)
      if (e = t[h], e.hasChildren() && !f(e[Vh], i, n) || i.call(n, e) === !1) return !1;
    return !0
  }

  function c(t, i, n) {
    t = t._j5 || t;
    for (var e, s = t.length, h = s - 1; h >= 0; h--)
      if (e = t[h], i[Uh](n, e) === !1 || e[qh]() && !c(e[Vh], i, n)) return !1;
    return !0
  }

  function u(t, i, n) {
    for (var e, s = (t._j5 || t).slice(0); s[Wh];) {
      e = s[0], s = s.splice(1);
      var h = i[Uh](n, e);
      if (h === !1) return !1;
      if (e[qh]()) {
        var r = e[Vh];
        r = r._j5 || r, s = s.concat(r)
      }
    }
    return !0
  }

  function _(t, i, n) {
    for (var e, s = (t._j5 || t)[Xh](0); s[Wh];) {
      e = s[s[Wh] - 1], s = s[Zh](0, s.length - 1);
      var h = i.call(n, e);
      if (h === !1) return !1;
      if (e[qh]()) {
        var r = e.children;
        r = r._j5 || r, s = s[Kh](r)
      }
    }
    return !0
  }

  function d(t, i) {
    function n(t, n) {
      for (var e = t[Wh], s = n[Wh], h = e + s, r = new Array(h), a = 0, o = 0, f = 0; h > f;) r[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
      return r
    }

    function e(t) {
      var i = t.length,
        s = Math[Jh](i / 2);
      return 1 >= i ? t : n(e(t[Xh](0, s)), e(t.slice(s)))
    }
    return e(t)
  }

  function l(t, i, n, e) {
    t instanceof kG && (t = t._j5);
    for (var s = 0, h = (t._j5 || t)[Wh]; h > s; s++) {
      var r = i[Uh](n, t[s], s, e);
      if (r === !1) return !1
    }
    return !0
  }

  function v(t, i, n) {
    for (var e = t instanceof kG, s = t._j5 || t, h = 0, r = s.length; r > h; h++) {
      var a = s[h];
      i[Uh](n, a) && (e ? t[Qh](a) : t.splice(h, 1), h--, r--)
    }
  }

  function b(t, i, n, e) {
    t instanceof kG && (t = t._j5);
    for (var s = (t._j5 || t).length - 1; s >= 0; s--) {
      var h = i[Uh](n, t[s], s, e);
      if (h === !1) return !1
    }
    return !0
  }

  function g(t) {
    if (t[tr] instanceof Function) return t.clone(!0);
    var i, n = [];
    return l(t, function (t) {
      i = t && t[tr] instanceof Function ? t[tr]() : t, n[ir](i)
    }, this), n
  }

  function y(t, i, e) {
    e === n || 0 > e ? t[ir](i) : t.splice(e, 0, i)
  }

  function x(t, i) {
    var n = t[nr](i);
    return 0 > n || n >= t[Wh] ? !1 : t[Zh](n, 1)
  }

  function p(t, i) {
    var n = !1;
    return l(t, function (t) {
      return i == t ? (n = !0, !1) : void 0
    }), n
  }

  function m(t, i) {
    var n = t;
    for (var e in i)
      if (i.__lookupGetter__) {
        var s = i.__lookupGetter__(e),
          h = i.__lookupSetter__(e);
        s || h ? (s && n.__defineGetter__(e, s), h && n.__defineSetter__(e, h)) : n[e] = i[e]
      } else n[e] = i[e];
    return n
  }

  function E(t, i, n) {
    if (!(t instanceof Function)) throw new Error("subclass must be type of Function");
    var e = null;
    er == typeof i && (e = i, i = t, t = function () {
      i[sr](this, arguments)
    });
    var s = t[hr],
      h = function () {};
    return h[hr] = i[hr], t.prototype = new h, t.superclass = i[hr], t[rr].constructor = i, m(t.prototype, s), e && m(t.prototype, e), n && m(t[hr], n), t[hr].class = t, t
  }

  function w(t, i, n) {
    return T(t, i, "constructor", n)
  }

  function T(t, i, n, e) {
    var s = i[rr];
    if (s) {
      var h = s[n];
      return h ? h.apply(t, e) : void 0
    }
  }

  function k(t, i, n, e) {
    if ("constructor" == n) return M(t, i, e);
    if (i.super_ instanceof Function) {
      var s = i.super_[hr][n];
      return s instanceof Function ? s[sr](t, e) : void 0
    }
  }

  function M(t, i, n) {
    return i[ar] instanceof Function ? i[ar][sr](t, n) : void 0
  }

  function O(t, i) {
    return t.super_ = i, t[hr] = Object[or](i[hr], {
      super_: {
        value: i,
        enumerable: !1
      },
      constructor: {
        value: t,
        enumerable: !1
      }
    }), t
  }

  function I(t, i, n) {
    if (!(t instanceof Function) && t instanceof Object) {
      i = t[fr];
      var e;
      return t.hasOwnProperty("constructor") ? (e = t.constructor, delete t.constructor) : e = i ? function () {
        i[sr](this, arguments)
      } : function () {}, I(e, i, t)
    }
    if (i && !(i instanceof Function) && i instanceof Object) return I(t, i[fr], i);
    if (i && O(t, i), n) {
      var s = t[hr];
      for (var h in n) s[h] = n[h]
    }
    return t
  }

  function S(t, i, e, s, h) {
    if (s) return void Object[cr](t, i, {
      value: e,
      enumerable: !0
    });
    var r = {
        configurable: !0,
        enumerable: !0
      },
      a = ur + i;
    e !== n && (t[a] = e), r.get = function () {
      return this[a]
    }, r.set = function (t) {
      var n = this[a];
      if (n == t) return !1;
      var e = new YG(this, i, t, n);
      return this[_r](e) ? (this[a] = t, h && h.call(this, t, n), this[dr](e), !0) : !1
    }, Object[cr](t, i, r)
  }

  function j(t, i) {
    for (var n = 0, e = i[Wh]; e > n; n++) {
      var s = i[n];
      S(t, s.name || s, s[lr] || s[vr], s[br], s.onSetting)
    }
  }

  function A(t, i, n) {
    return i instanceof Object ? t = t[gr](i) : i && !n && (n = parseInt(i)), i && !n && (n = parseInt(i)), n ? setTimeout(t, n) : setTimeout(t)
  }

  function P(i, n) {
    return n && (i = i.bind(n)), t[yr](i)
  }

  function L(t, i) {
    return t.className = i, t
  }

  function C(t, i) {
    if (!t.hasOwnProperty(xr)) {
      var n = t.getAttribute(pr);
      if (!n) return L(t, i);
      for (var e = n[mr](Er), s = 0, h = e[Wh]; h > s; s++)
        if (e[s] == i) return;
      return n += Er + i, L(t, n)
    }
    t[xr].add(i)
  }

  function R(t, i) {
    if (!t.hasOwnProperty(xr)) {
      var n = t[wr](pr);
      if (!n || !n.indexOf(i)) return;
      for (var e = "", s = n[mr](Er), h = 0, r = s[Wh]; r > h; h++) s[h] != i && (e += s[h] + Er);
      return L(t, e)
    }
    t[xr][Qh](i)
  }

  function D(t) {
    return !isNaN(t) && t instanceof Number || Tr == typeof t
  }

  function N(t) {
    return t !== n && (t instanceof String || kr == typeof t)
  }

  function B(t) {
    return t !== n && (t instanceof Boolean || Mr == typeof t)
  }

  function $(t) {
    return Array[Or](t)
  }

  function F(i) {
    i || (i = t[Ir]), i[Sr] ? i.preventDefault() : i.returnValue = !1
  }

  function z(i) {
    i || (i = t[Ir]), i.stopPropagation ? i[jr]() : i[Ar] || (i.cancelBubble = !0)
  }

  function G(t) {
    F(t), z(t)
  }

  function H(t) {
    return Math[Pr](Math[Lr]() * t)
  }

  function Y() {
    return Math[Lr]() >= .5
  }

  function q(t) {
    var i = !0;
    for (var n in t) {
      i = !1;
      break
    }
    return i
  }

  function W(t) {
    if (t && t > 0 && 1 > t) {
      var i = Math.floor(16777215 * Math[Lr]());
      return Cr + (i >> 16 & 255) + Rr + (i >> 8 & 255) + Rr + (255 & i) + Rr + t[Dr](2) + Nr
    }
    return X(Math.floor(16777215 * Math[Lr]()))
  }

  function U(t) {
    return t > 0 ? Math[Pr](t) : Math[Jh](t)
  }

  function V(t) {
    return t > 0 ? Math[Jh](t) : Math[Pr](t)
  }

  function X(t) {
    return 16777216 > t ? Br + ($r + t.toString(16))[Xh](-6) : Cr + (t >> 16 & 255) + Rr + (t >> 8 & 255) + Rr + (255 & t) + Rr + ((t >> 24 & 255) / 255)[Dr](2) + Nr
  }

  function Z(t, i, n) {
    er != typeof n || n.hasOwnProperty(Fr) || (n.enumerable = !0), Object.defineProperty(t, i, n)
  }

  function K(t, i) {
    for (var n in i)
      if (zr != n[0]) {
        var e = i[n];
        er != typeof e || e.hasOwnProperty(Fr) || (e[Fr] = !0)
      }
    Object[Gr](t, i)
  }

  function J(i, n) {
    n || (n = t);
    for (var e = i[mr](Hr), s = 0, h = e[Wh]; h > s; s++) {
      var r = e[s];
      n = n[r]
    }
    return n
  }

  function Q(t) {
    return t instanceof MouseEvent || t instanceof Object && t[Yr] !== n
  }

  function ti(i) {
    t[qr] && console.log(i)
  }

  function ii(i) {
    t.console && console.trace(i)
  }

  function ni(i) {
    t[qr] && console[Wr](i)
  }

  function ei(t, i, n) {
    var e, s, h;
    0 == t._n5 ? (e = -1, h = 0, s = i) : 0 == t._n9 ? (e = 0, h = 1, s = n) : (e = -1 / t._n5, s = (t._n5 - e) * i + t._n7, h = 1);
    var r = new jG;
    return r._n5 = e, r._n7 = s, r._n9 = h, r._n2 = i, r._n0 = n, r._kt = Math[Ur](e, h), r[Vr] = Math.cos(r._kt), r._sin = Math.sin(r._kt), r
  }

  function si(t, i, n, e, s) {
    var h, r;
    i > e ? h = -1 : e > i && (h = 1), n > s ? r = -1 : s > n && (r = 1);
    var a, o;
    if (!h) return o = 0 > r ? t.y : t[Xr], {
      x: i,
      y: o
    };
    if (!r) return a = 0 > h ? t.x : t[Zr], {
      x: a,
      y: n
    };
    var f = (n - s) / (i - e),
      c = n - f * i,
      u = 0 > h ? i - t.x : i - t[Zr],
      _ = 0 > r ? n - t.y : n - t[Xr];
    return Math.abs(f) >= Math.abs(_ / u) ? (o = 0 > r ? t.y : t[Xr], a = (o - c) / f) : (a = 0 > h ? t.x : t[Zr], o = f * a + c), {
      x: a,
      y: o
    }
  }

  function hi(t, i, n, e, s, h, r, a) {
    return 0 >= r || 0 >= a || 0 >= n || 0 >= e ? !1 : (r += s, a += h, n += t, e += i, (s > r || r > t) && (h > a || a > i) && (t > n || n > s) && (i > e || e > h))
  }

  function ri(t, i, n, e, s, h) {
    return s >= t && t + n >= s && h >= i && i + e >= h
  }

  function ai(t, i, n, e, s, h, r, a, o) {
    return o && (t -= o, i -= o, n += o + o, e += o + o), s >= t && h >= i && t + n >= s + r && i + e >= h + a
  }

  function oi(t, i, n, e, s, h, r, a) {
    var o = t;
    o += n;
    var f = i;
    f += e;
    var c = s;
    c += r;
    var u = h;
    return u += a, s > t && (t = s), h > i && (i = h), o > c && (o = c), f > u && (f = u), o -= t, f -= i, 0 > o || 0 > f ? null : new PG(t, i, o, f)
  }

  function fi(t, i, e) {
    if (N(t) && (t = CG[Kr](t)), !t) return {
      x: 0,
      y: 0
    };
    if (t.x !== n) return {
      x: t.x,
      y: t.y
    };
    var s, h, r = t[Jr],
      a = t[Qr];
    switch (r) {
      case RG:
        s = 0;
        break;
      case NG:
        s = i;
        break;
      default:
        s = i / 2
    }
    switch (a) {
      case BG:
        h = 0;
        break;
      case FG:
        h = e;
        break;
      default:
        h = e / 2
    }
    return {
      x: s,
      y: h
    }
  }

  function ci(t, i, n) {
    t[Vh].add(i, n), t[ta](i, n)
  }

  function ui(t, i) {
    t._f8 && (t._f8[Qh](i), t[ia](i))
  }

  function _i(t) {
    return t[na](/^-ms-/, ea)[na](/-([\da-z])/gi, function (t, i) {
      return i.toUpperCase()
    })
  }

  function di(t) {
    return t[na](/[A-Z]/g, function (t) {
      return sa + t[ha]()
    }).replace(/^ms-/, ra)
  }

  function li(t, i) {
    var n = t[aa];
    if (!n) return !1;
    var e, s;
    for (e in i) i.hasOwnProperty(e) && (s = rH(e)) && (n[s] = i[e]);
    return t
  }

  function vi(t) {
    var i, n, e = "";
    for (i in t) t.hasOwnProperty(i) && (n = rH(i)) && (e += di(n) + oa + t[i] + fa);
    return e ? e.substring(0, e.length - 1) : e
  }

  function bi(t, i, n) {
    (i = rH(i)) && (t[aa][i] = n)
  }

  function gi(t, i) {
    return sH ? (i && !N(i) && (i = vi(i)), sH[ca] ? void sH[ca](t + ua + i + _a, 0) : void(sH.addRule && sH.addRule(t, i, 0))) : !1
  }

  function yi(i, n) {
    i[Yr] && (i = i[da] && i[da][Wh] ? i.changedTouches[0] : i[Yr][0]);
    var e = n[la](),
      s = i.clientX || 0,
      h = i[va] || 0;
    return EG && gG && (t[ba] && s == i.pageX && (s -= t[ba]), t[ga] && h == i[ya] && (h -= t[ga])), {
      x: s - e[xa],
      y: h - e.top
    }
  }

  function xi(t, i, n) {
    this._m8 = t, this[pa] = n, this[ma] = i, this._dragPoints = new mi, this[Ea]()
  }

  function pi(t) {
    return yG && t.metaKey || !yG && t[wa]
  }

  function mi() {
    this[Ta] = []
  }

  function Ei(t, i, n, e, s) {
    Ti(t, function (e) {
      if (i) {
        var s = e.responseXML;
        if (!s) return void(n || BH)(ka + t + Ma);
        i(s)
      }
    }, n, e, s)
  }

  function wi(t, i, n, e, s) {
    Ti(t, function (e) {
      if (i) {
        var s, h = e[Oa];
        if (!h) return (n || BH)(ka + t + Ia), s = new Error(ka + t + Ia), i(h, s);
        try {
          h = JSON[Sa](h)
        } catch (r) {
          (n || BH)(r), s = r
        }
        i(h, s)
      }
    }, n, e, s)
  }

  function Ti(t, i, n, e, s) {
    (n === !1 || e === !1) && (s = !1);
    try {
      var h = new XMLHttpRequest,
        r = encodeURI(t);
      if (s !== !1) {
        var a;
        a = r.indexOf(ja) > 0 ? "&" : ja, r += a + Aa + Date.now()
      }
      h[Pa](La, r), h.onreadystatechange = function () {
        return 4 == h.readyState ? h.status && 200 != h[Ca] ? void(n || BH)(ka + t + Ra) : void(i && i(h)) : void 0
      }, h[Da](e)
    } catch (o) {
      (n || BH)(ka + t + Ra, o)
    }
  }

  function hi(t, i, n, e, s, h, r, a) {
    return 0 >= r || 0 >= a || 0 >= n || 0 >= e ? !1 : (r += s, a += h, n += t, e += i, (s > r || r > t) && (h > a || a > i) && (t > n || n > s) && (i > e || e > h))
  }

  function ai(t, i, n, e, s, h, r, a) {
    return s >= t && h >= i && t + n >= s + r && i + e >= h + a
  }

  function ki(t, i, n) {
    return t instanceof Object && t.x ? Oi(t, i, 0, 0) : Mi(t, i, n, 0, 0)
  }

  function Mi(t, i, n, e, s) {
    var h = Math.sin(n),
      r = Math.cos(n),
      a = t - e,
      o = i - s;
    return t = a * r - o * h + e, i = a * h + o * r + s, new IG(t, i, n)
  }

  function Oi(t, i, n, e) {
    n = n || 0, e = e || 0;
    var s = Math.sin(i),
      h = Math.cos(i),
      r = t.x - n,
      a = t.y - e;
    return t.x = r * h - a * s + n, t.y = r * s + a * h + e, t
  }

  function Ii(t, i, n) {
    return Si(t, i, n, 0, 0)
  }

  function Si(t, i, n, e, s) {
    var h = Mi(t.x, t.y, i, e, s),
      r = Mi(t.x + t[Na], t.y, i, e, s),
      a = Mi(t.x + t.width, t.y + t[Ba], i, e, s),
      o = Mi(t.x, t.y + t[Ba], i, e, s);
    return n ? n[$a]() : n = new PG, n.addPoint(h), n[Fa](r), n[Fa](a), n[Fa](o), n
  }

  function ji(t, i) {
    var n = this[za] || 1;
    this[aa][Na] = t + Ga, this[aa][Ba] = i + Ga, this[Na] = t * n, this[Ba] = i * n
  }

  function Ai(t) {
    var i = t[Ha] || t[Ya] || t[qa] || t[Wa] || t[Ua] || 1;
    return zH / i
  }

  function Pi(t, n, e) {
    var s = i.createElement(Va);
    if (s.g = s.getContext(Xa), t !== !0 && !e) return t && n && (s[Na] = t, s[Ba] = n), s;
    var h = s.g;
    return h[za] = s[za] = Ai(h), s.setSize = ji, h._kw = function () {
      this[Va][Na] = this.canvas[Na]
    }, t && n && s.setSize(t, n), s
  }

  function Li(t, i) {
    return GH || (GH = Pi()), t && i && (GH.width = t, GH.height = i), GH.g
  }

  function Ci(t, i, n) {
    return (n || TG[Za]) + Er + (i || TG[Ka]) + Ja + (t || TG[Qa])
  }

  function Ri(t, i, n, e, s, h, r, a, o, f) {
    if (t.save(), t[to](n, e), HH && YH > r) {
      var c = r / YH;
      t[io](c, c), r = YH, f = null
    }
    o || (o = TG.LINE_HEIGHT), r || (r = TG[Ka]), o *= r, t[no] = f || Ci(h, r, a), t[eo] = s, t[so] = ho;
    for (var u = o / 2, _ = i[mr](ro), d = 0, l = _[Wh]; l > d; d++) {
      var v = _[d];
      t[ao](v, 0, u), u += o
    }
    t[oo]()
  }

  function Di(t, i, n, e, s, h) {
    if (!t) return {
      width: 0,
      height: 0
    };
    if (i || (i = TG[Ka]), HH && YH > i) {
      var r = i / YH,
        a = Di(t, YH, n, e, s);
      return a.width *= r, a[Ba] *= r, a
    }
    var o = Li();
    o[no] = h || Ci(n, i, e), s || (s = TG[fo]);
    for (var f = i * s, c = 0, u = 0, _ = t[mr](ro), d = 0, l = _[Wh]; l > d; d++) {
      var v = _[d];
      c = Math.max(o.measureText(v)[Na], c), u += f
    }
    return {
      width: c,
      height: u
    }
  }

  function Ni(t, i, n, e, s) {
    var h;
    if (cG) try {
      h = t[co](i, n, e, s)
    } catch (r) {} else h = t[co](i, n, e, s);
    return h
  }

  function Bi(t) {
    return Math.log(t + Math.sqrt(t * t + 1))
  }

  function $i(t, i) {
    i = i || t(1);
    var n = 1 / i,
      e = .5 * n,
      s = Math.min(1, i / 100);
    return function (h) {
      if (0 >= h) return 0;
      if (h >= i) return 1;
      for (var r = h * n, a = 0; a++ < 10;) {
        var o = t(r),
          f = h - o;
        if (Math.abs(f) <= s) return r;
        r += f * e
      }
      return r
    }
  }

  function Fi(t, i, n) {
    var e = 1 - t,
      s = e * e * i[0] + 2 * e * t * i[2] + t * t * i[4],
      h = e * e * i[1] + 2 * e * t * i[3] + t * t * i[5];
    if (n) {
      var r = (i[0] + i[4] - 2 * i[2]) * t + i[2] - i[0],
        a = (i[1] + i[5] - 2 * i[3]) * t + i[3] - i[1];
      return {
        x: s,
        y: h,
        rotate: Math[Ur](a, r)
      }
    }
    return {
      t: t,
      x: s,
      y: h
    }
  }

  function zi(t, i, n) {
    var e = t - 2 * i + n;
    return 0 != e ? (t - i) / e : -1
  }

  function Gi(t, i) {
    i.add(t[4], t[5]);
    var n = zi(t[0], t[2], t[4]);
    if (n > 0 && 1 > n) {
      var e = Fi(n, t);
      i.add(e.x, e.y)
    }
    var s = zi(t[1], t[3], t[5]);
    if (s > 0 && 1 > s) {
      var e = Fi(s, t);
      i.add(e.x, e.y)
    }
    return i
  }

  function Hi(t, i) {
    return Math.abs(t - i) < 1e-7
  }

  function Yi(t, i) {
    return Hi(t[0], i[0]) && Hi(t[1], i[1])
  }

  function qi(t) {
    if (Yi([t[0], t[1]], [t[2], t[3]])) {
      var i = t[0],
        n = t[1],
        e = t[4],
        s = t[5],
        h = Math[uo](qH(i, n, e, s));
      return function (t) {
        return h * t
      }
    }
    if (Yi([t[0], t[1]], [t[4], t[5]]) || Yi([t[2], t[3]], [t[4], t[5]])) {
      var i = t[0],
        n = t[1],
        e = t[2],
        s = t[3],
        h = Math.sqrt(qH(i, n, e, s));
      return function (t) {
        return h * t
      }
    }
    var r = t[0],
      a = t[2],
      o = t[4],
      f = r - 2 * a + o,
      c = 2 * a - 2 * r;
    r = t[1], a = t[3], o = t[5];
    var u = r - 2 * a + o,
      _ = 2 * a - 2 * r,
      d = 4 * (f * f + u * u),
      l = 4 * (f * c + u * _),
      v = c * c + _ * _,
      h = 4 * d * v - l * l,
      b = 1 / h,
      g = .125 * Math.pow(d, -1.5),
      y = 2 * Math[uo](d),
      x = (h * Bi(l / Math.sqrt(h)) + 2 * Math.sqrt(d) * l * Math[uo](v)) * g;
    return function (t) {
      var i = l + 2 * t * d,
        n = i / Math[uo](h),
        e = i * i * b;
      return (h * Math.log(n + Math.sqrt(e + 1)) + y * i * Math.sqrt(v + t * l + t * t * d)) * g - x
    }
  }

  function Wi(t, i, n) {
    var e = 1 - t,
      s = i[0],
      h = i[2],
      r = i[4],
      a = i[6],
      o = s * e * e * e + 3 * h * t * e * e + 3 * r * t * t * e + a * t * t * t;
    if (n) var f = 3 * t * t * a + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * h + (-3 * t * t + 6 * t - 3) * s;
    s = i[1], h = i[3], r = i[5], a = i[7];
    var c = s * e * e * e + 3 * h * t * e * e + 3 * r * t * t * e + a * t * t * t;
    if (n) {
      var u = 3 * t * t * a + (6 * t - 9 * t * t) * r + (9 * t * t - 12 * t + 3) * h + (-3 * t * t + 6 * t - 3) * s;
      return {
        x: o,
        y: c,
        rotate: Math.atan2(u, f)
      }
    }
    return {
      x: o,
      y: c
    }
  }

  function Ui(t, i, n, e) {
    var s = -t + 3 * i - 3 * n + e;
    if (0 == s) return [(t - i) / (2 * n - 4 * i + 2 * t)];
    var h = 2 * t - 4 * i + 2 * n,
      r = i - t,
      a = h * h - 4 * s * r;
    return 0 > a ? void 0 : 0 == a ? [-h / (2 * s)] : (a = Math[uo](a), [(a - h) / (2 * s), (-a - h) / (2 * s)])
  }

  function Vi(t, i) {
    i.add(t[6], t[7]);
    var n = Ui(t[0], t[2], t[4], t[6]);
    if (n)
      for (var e = 0; e < n[Wh]; e++) {
        var s = n[e];
        if (!(0 >= s || s >= 1)) {
          var h = Wi(s, t);
          i.add(h.x, h.y)
        }
      }
    if (n = Ui(t[1], t[3], t[5], t[7]))
      for (var e = 0; e < n[Wh]; e++) {
        var s = n[e];
        if (!(0 >= s || s >= 1)) {
          var h = Wi(s, t);
          i.add(h.x, h.y)
        }
      }
  }

  function Xi(t) {
    var i = {
        x: t[0],
        y: t[1]
      },
      n = {
        x: t[2],
        y: t[3]
      },
      e = {
        x: t[4],
        y: t[5]
      },
      s = {
        x: t[6],
        y: t[7]
      },
      h = i.x - 0,
      r = i.y - 0,
      a = n.x - 0,
      o = n.y - 0,
      f = e.x - 0,
      c = e.y - 0,
      u = s.x - 0,
      _ = s.y - 0,
      d = 3 * (-h + 3 * a - 3 * f + u),
      l = 6 * (h - 2 * a + f),
      v = 3 * (-h + a),
      b = 3 * (-r + 3 * o - 3 * c + _),
      g = 6 * (r - 2 * o + c),
      y = 3 * (-r + o),
      x = function (t) {
        var i = d * t * t + l * t + v,
          n = b * t * t + g * t + y;
        return Math[uo](i * i + n * n)
      },
      p = (x(0) + 4 * x(.5) + x(1)) / 6;
    return p
  }

  function Zi(t, i) {
    function n(t, i, n, e) {
      var s = -t + 3 * i - 3 * n + e,
        h = 2 * t - 4 * i + 2 * n,
        r = i - t;
      return function (t) {
        return 3 * (s * t * t + h * t + r)
      }
    }

    function e(t, i) {
      var n = s(t),
        e = h(t);
      return Math[uo](n * n + e * e) * i
    }
    var s = n(t[0], t[2], t[4], t[6]),
      h = n(t[1], t[3], t[5], t[7]);
    i = i || 100;
    var r = 1 / i;
    return function (t) {
      if (!t) return 0;
      for (var i, n = 0, s = 0;;) {
        if (i = n + r, i >= t) return s += e(n, i - n);
        s += e(n, r), n = i
      }
    }
  }

  function Ki(t, i, n) {
    return qH(i, n, t.cx, t.cy) <= t._squareR + WH
  }

  function Ji(t, i, n, e) {
    return n = n || Qi(t, i), new tn((t.x + i.x) / 2, (t.y + i.y) / 2, n / 2, t, i, null, e)
  }

  function Qi(t, i) {
    return SG(t.x, t.y, i.x, i.y)
  }

  function tn(t, i, n, e, s, h, r) {
    this.cx = t, this.cy = i, this.r = n, this[_o] = n * n, this.p1 = e, this.p2 = s, this.p3 = h, this[lo] = r
  }

  function nn(t, i, n, e) {
    this.cx = t, this.cy = i, this[Na] = n, this[Ba] = e
  }

  function en(t) {
    var i = t[0],
      n = t[1],
      e = t[2],
      s = tn[vo](i, n, e);
    return hn(t, i, n, e, s)
  }

  function sn(t, i) {
    i = i || rn(t);
    for (var n, e = i.width / i[Ba], s = [], h = t[Wh], r = 0; h > r; r++) n = t[r], s[ir]({
      x: n.x,
      y: n.y * e
    });
    var a = en(s);
    return a ? new nn(a.cx, a.cy / e, 2 * a.r, 2 * a.r / e) : void 0
  }

  function hn(t, i, n, e, s) {
    for (var h, r, a = t[Wh], o = s[_o], f = 0; a > f; f++)
      if (h = t[f], h != i && h != n && h != e) {
        var c = qH(s.cx, s.cy, h.x, h.y);
        c - WH > o && (o = c, r = h)
      }
    if (!r) return s;
    var u, _ = tn[vo](r, i, n),
      d = tn[vo](r, i, e),
      l = tn[vo](r, e, n);
    return Ki(_, e.x, e.y) && (u = _), Ki(d, n.x, n.y) && (!u || u.r > d.r) && (u = d), Ki(l, i.x, i.y) && (!u || u.r > l.r) && (u = l), i = u.p1, n = u.p2, e = u.p3 || u[lo], hn(t, i, n, e, u)
  }

  function rn(t) {
    for (var i, n = t[Wh], e = new PG, s = 0; n > s; s++) i = t[s], e.add(i.x, i.y);
    return e
  }

  function an(t, i, n, e, s) {
    this._62 && this[bo]();
    var h = s ? this.getBounds(s) : this.bounds,
      r = n / h[Na],
      a = t - r * h.x,
      o = e / h[Ba],
      f = i - o * h.y,
      c = this._gg,
      u = [];
    return l(c, function (t) {
      var i = t.clone(),
        n = i[Ta];
      if (n && n[Wh]) {
        for (var e = n[Wh], s = [], h = 0; e > h; h++) {
          var c = n[h];
          h++;
          var _ = n[h];
          c = r * c + a, _ = o * _ + f, s.push(c), s[ir](_)
        }
        i[Ta] = s
      }
      u[ir](i)
    }, this), new wY(u)
  }

  function on(t, i, n, e, s, h) {
    if (s = s || 0, n = n || 0, !s && !h) return !1;
    if (!e) {
      var r = this[go](s);
      if (!r[yo](t, i, n)) return !1
    }
    var a = Math[xo](2 * n) || 1,
      o = Li(a, a),
      f = (o[Va], -t + n),
      c = -i + n;
    if (o[po](1, 0, 0, 1, f, c), !o.isPointInStroke) {
      this._ll(o), s && o.stroke(), h && o.fill();
      var u = Ni(o, 0, 0, a, a);
      if (!u) return !1;
      u = u[mo];
      for (var _ = u[Wh] / 4; _ > 0;) {
        if (u[4 * _ - 1] > EY) return !0;
        --_
      }
      return !1
    }
    return o.lineWidth = (s || 0) + 2 * n, this._ll(o), s && o.isPointInStroke(n, n) ? !0 : h ? o[Eo](n, n) : !1
  }

  function fn(t, i, n) {
    if (!this._j2) return null;
    var e = this._gg;
    if (e[Wh] < 2) return null;
    n === !1 && (t += this._j2);
    var s = e[0];
    if (0 >= t) return Hs(s[Ta][0], s.points[1], e[1].points[0], e[1].points[1], t, i);
    if (t >= this._j2) {
      s = e[e.length - 1];
      var h, r, a = s[Ta],
        o = a.length,
        f = a[o - 2],
        c = a[o - 1];
      if (o >= 4) h = a[o - 4], r = a[o - 3];
      else {
        s = e[e[Wh] - 2];
        var u = s.lastPoint;
        h = u.x, r = u.y
      }
      return Hs(f, c, f + f - h, c + c - r, t - this._j2, i)
    }
    for (var _, d = 0, l = 1, o = e[Wh]; o > l; l++)
      if (_ = e[l], _._j2) {
        if (!(d + _._j2 < t)) {
          var v, u = s[wo];
          if (_[To] == xY) {
            var b = _[Ta];
            v = cn(t - d, _, u.x, u.y, b[0], b[1], b[2], b[3], _._r)
          } else {
            if (!_._lf) return Hs(u.x, u.y, _[Ta][0], _.points[1], t - d, i);
            var g = $i(_._lf, _._j2)(t - d),
              b = _[Ta];
            v = _[To] == yY && 6 == b[Wh] ? Wi(g, [u.x, u.y][Kh](b), !0) : Fi(g, [u.x, u.y].concat(b), !0)
          }
          return i && (v.x -= i * Math.sin(v[ko] || 0), v.y += i * Math.cos(v[ko] || 0)), v
        }
        d += _._j2, s = _
      } else s = _
  }

  function cn(t, i, n, e, s, h, r, a) {
    if (t <= i._l1) return Hs(n, e, s, h, t, t);
    if (t >= i._j2) return t -= i._j2, Hs(i._p2x, i[Mo], r, a, t, t);
    if (t -= i._l1, i._o) {
      var o = t / i._r;
      i._CCW && (o = -o);
      var f = Mi(i[Oo], i[Io], o, i._o.x, i._o.y);
      return f[ko] += i._n51 || 0, f[ko] += Math.PI, f
    }
    return Hs(i[Oo], i._p1y, i[So], i[Mo], t, t)
  }

  function ei(t, i, n) {
    var e, s, h;
    0 == t._n5 ? (e = -1, h = 0, s = i) : 0 == t._n9 ? (e = 0, h = 1, s = n) : (e = -1 / t._n5, s = (t._n5 - e) * i + t._n7, h = 1);
    var r = new jG;
    return r._n5 = e, r._n7 = s, r._n9 = h, r._n2 = i, r._n0 = n, r
  }

  function un(t) {
    return t %= 2 * Math.PI, 0 > t && (t += 2 * Math.PI), t
  }

  function _n(t, i, n, e, s, h, r, a) {
    var o = SG(i, n, e, s),
      f = SG(e, s, h, r);
    if (!o || !f) return t._d = 0, t._r = 0, t._l1 = o, t._l2 = f, t._j2 = 0;
    var c = ln(e, s, i, n),
      u = ln(e, s, h, r);
    t._n51 = c, t._n52 = u;
    var _ = c - u;
    _ = un(_), _ > Math.PI && (_ = 2 * Math.PI - _, t[jo] = !0);
    var d = Math.PI - _,
      l = Math.tan(_ / 2),
      v = a / l,
      b = Math.min(o, f);
    v > b && (v = b, a = l * v);
    var g, y = e + Math.cos(c) * v,
      x = s + Math.sin(c) * v,
      p = e + Math.cos(u) * v,
      m = s + Math.sin(u) * v,
      E = new jG(i, n, e, s),
      w = new jG(e, s, h, r),
      T = ei(E, y, x),
      k = ei(w, p, m),
      M = T._3c(k),
      O = Math.atan2(x - M.y, y - M.x),
      I = Math.atan2(m - M.y, p - M.x);
    g = t._CCW ? I : O;
    for (var S, j = 0; 4 > j;) {
      var A = j * MG;
      if (un(A - g) <= d) {
        var P, L;
        if (S ? S++ : S = 1, 0 == j ? (P = M.x + a, L = M.y) : 1 == j ? (P = M.x, L = M.y + a) : 2 == j ? (P = M.x - a, L = M.y) : (P = M.x, L = M.y - a), t[Ao + S] = {
            x: P,
            y: L
          }, 2 == S) break
      }
      j++
    }
    return t[Oo] = y, t[Io] = x, t[So] = p, t[Mo] = m, t._o = M, t._d = v, t._r = a, t._l1 = o - v, t._l2 = f - v, t._j2 = t._l1 + d * a
  }

  function dn(t, i, n, e, s, h, r) {
    var a = ln(n, e, t, i),
      o = ln(n, e, s, h),
      f = a - o;
    return r ? f : (0 > f && (f = -f), f > Math.PI && (f -= Math.PI), f)
  }

  function ln(t, i, n, e) {
    return Math[Ur](e - i, n - t)
  }

  function vn(t) {
    var i = VH.exec(t);
    if (i) return i[1];
    var n = t.lastIndexOf(Hr);
    return n >= 0 && n < t.length - 1 ? t[Po](n + 1) : void 0
  }

  function bn(t) {
    if (!t) return null;
    if (t instanceof wY) return iY;
    if (t.draw instanceof Function) return tY;
    if (N(t)) {
      var i = vn(t);
      if (i) {
        if (!cG && XH.test(i)) return QH;
        if (ZH[Lo](i)) return JH
      }
      return KH
    }
  }

  function gn(t, i, n) {
    if (this._ma = bn(t), !this._ma) throw new Error("the image format is not supported", t);
    this._li = t, this._n7c = i, this._8x = n, this[Na] = i || TG.IMAGE_WIDTH, this[Ba] = n || TG.IMAGE_HEIGHT, this._jb = {}
  }

  function yn(t, i, n, e) {
    return i ? (hY[t] = new gn(i, n, e), t) : void delete hY[t]
  }

  function xn(t) {
    if (t._kz) return t._kz;
    var i = N(t);
    if (!i && !t[Co]) return t._kz = new gn(t);
    var n = t[Co] || t;
    return n in hY ? hY[n] : hY[n] = new gn(t)
  }

  function pn(t) {
    return t in hY
  }

  function mn(t, i, n) {
    n = n || {};
    var e = t[go](n.lineWidth);
    if (!e.width || !e[Ba]) return !1;
    var s = i[Ro](Xa),
      h = i.ratio || 1,
      r = n[Do] || No,
      a = /full/i.test(r),
      o = /uniform/i [Lo](r),
      f = 1,
      c = 1;
    if (a) {
      var u = i[Na],
        _ = i[Ba],
        d = n[Bo],
        l = 0,
        v = 0;
      if (d) {
        var b, g, y, x;
        D(d) ? b = g = y = x = d : (b = d.top || 0, g = d[Xr] || 0, y = d.left || 0, x = d[Zr] || 0), u -= y + x, _ -= b + g, l += y, v += b
      }
      f = u / e[Na], c = _ / e[Ba], o && (f > c ? (l += (u - c * e.width) / 2, f = c) : c > f && (v += (_ - f * e[Ba]) / 2, c = f)), (l || v) && s[to](l, v)
    }
    s[to](-e.x * f, -e.y * c), t[$o](s, h, n, f, c, !0)
  }

  function En(t, i, n) {
    var e = xn(t);
    return e ? (e[bo](), (e._ma == QH || e._60()) && e[Fo](function (t) {
      t[zo] && (this.width = this[Na], mn(t[zo], this, n))
    }, i), void mn(e, i, n)) : ($H[Wr](Go + t), !1)
  }

  function wn(t, i, e, s) {
    var h = t[Wh];
    if (h && !(0 > h)) {
      s = s || 1;
      for (var r, a, o, f = [], c = 0; c++ < h;)
        if (r = t[Ho](c, 0), r && SG(i, e, r.x, r.y) <= s) {
          a = c, o = r[ko];
          break
        }
      if (a !== n) {
        for (var u, _, d = 0, c = 0, l = t._gg.length; l > c; c++) {
          if (r = t._gg[c], !u && (d += r._j2 || 0, d > a))
            if (u = !0, r[To] == bY || r[To] == pY) f[ir](new mY(bY, [i, e]));
            else {
              var v = Math.max(10, r._j2 / 6),
                b = v * Math.sin(o),
                g = v * Math.cos(o);
              if (r[To] == yY) {
                var y = r[Ta][0],
                  x = r[Ta][1];
                if (_) {
                  var p = new jG(i, e, i + g, e + b),
                    m = p._3c(new jG(_.lastPoint.x, _.lastPoint.y, r[Ta][0], r.points[1]));
                  m.x !== n && (y = m.x, x = m.y)
                }
                f[ir](new mY(yY, [y, x, i - g, e - b, i, e]))
              } else f[ir](new mY(gY, [i - g, e - b, i, e]));
              if (r.points)
                if (r[To] == yY) {
                  r[Ta][0] = i + g, r[Ta][1] = e + b;
                  var p = new jG(i, e, i + g, e + b),
                    m = p._3c(new jG(r[Ta][2], r[Ta][3], r.points[4], r[Ta][5]));
                  m.x !== n && (r.points[2] = m.x, r[Ta][3] = m.y)
                } else if (r[To] == gY) {
                r[To] = yY, r.points = [i + g, e + b][Kh](r[Ta]);
                var p = new jG(i, e, i + g, e + b),
                  m = p._3c(new jG(r[Ta][2], r[Ta][3], r[Ta][4], r[Ta][5]));
                m.x !== n && (r[Ta][2] = m.x, r.points[3] = m.y)
              } else r.type == bY && (r[To] = gY, r[Ta] = [i + g, e + b][Kh](r[Ta]), c == l - 1 && (r[Yo] = !0))
            }
          f[ir](r), _ = r
        }
        return f
      }
    }
  }

  function Tn(t) {
    var i = t[Na],
      n = t[Ba],
      e = Ni(t.g, 0, 0, i, n);
    return e ? Mn(e[mo], i, n) : void 0
  }

  function kn(t, i, n) {
    this._14(t, i, n)
  }

  function Mn(t, i, n) {
    return new kn(t, i, n)
  }

  function On(t) {
    if (Br == t[0]) {
      if (t = t[Po](1), 3 == t[Wh]) t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2];
      else if (6 != t.length) return;
      return t = parseInt(t, 16), [t >> 16 & 255, t >> 8 & 255, 255 & t]
    }
    if (/^rgb/i.test(t)) {
      var i = t.indexOf(qo),
        n = t[nr](Nr);
      if (0 > i || i > n) return;
      if (t = t.substring(i + 1, n), t = t[mr](Rr), t[Wh] < 3) return;
      var e = parseInt(t[0]),
        s = parseInt(t[1]),
        h = parseInt(t[2]),
        r = 3 == t.length ? 255 : parseInt(t[3]);
      return [e, s, h, r]
    }
  }

  function In(t, i, n) {
    return n || (n = TG.BLEND_MODE), n == FH[Wo] ? t * i : n == FH[Uo] ? Math.min(t, i) : n == FH[Vo] ? 1 - (1 - i) / t : n == FH[Xo] ? t + i - 1 : n == FH[Zo] ? Math.max(t, i) : n == FH[Ko] ? t + i - t * i : i
  }

  function Sn(t, i, n) {
    var e = On(i);
    if (!e) return void $H[Wr](Jo + i + Qo);
    var s = Ni(t.g, 0, 0, t[Na], t[Ba]);
    if (s) {
      var h = s[mo];
      if (n instanceof Function) h = n(t, h, e) || h;
      else {
        var r = e[0] / 255,
          a = e[1] / 255,
          o = e[2] / 255;
        if (n == FH[tf])
          for (var f = 0, c = h[Wh]; c > f; f += 4) {
            var u = 77 * h[f] + 151 * h[f + 1] + 28 * h[f + 2] >> 8;
            h[f] = u * r | 0, h[f + 1] = u * a | 0, h[f + 2] = u * o | 0
          } else
            for (var f = 0, c = h.length; c > f; f += 4) h[f] = 255 * In(r, h[f] / 255, n) | 0, h[f + 1] = 255 * In(a, h[f + 1] / 255, n) | 0, h[f + 2] = 255 * In(o, h[f + 2] / 255, n) | 0
      }
      var t = Pi(t[Na], t[Ba]);
      return t.g.putImageData(s, 0, 0), t
    }
  }

  function jn(t, i, n, e) {
    return 1 > n && (n = 1), An(t - n, i - n, 2 * n, 2 * n, e)
  }

  function An(t, i, n, e, s) {
    n = Math[xo](n) || 1, e = Math.round(e) || 1;
    var h = Li(n, e);
    h.setTransform(1, 0, 0, 1, -t, -i), s[$o](h);
    var r = Ni(h, 0, 0, n, e);
    if (!r) return !1;
    r = r[mo];
    for (var a = r[Wh] / 4; a-- > 0;)
      if (r[4 * a - 1] > EY) return !0;
    return !1
  }

  function Pn(t, i, n, e, s, h) {
    t -= s.$x, i -= s.$y;
    var r = s._fo[nf](t, i, n, e);
    if (!r) return !1;
    t = r.x * h, i = r.y * h, n = r.width * h, e = r[Ba] * h, n = Math[xo](n) || 1, e = Math[xo](e) || 1;
    var a = Li(),
      o = a[Va];
    o[Na] < n || o[Ba] < e ? (o[Na] = n, o[Ba] = e) : (a.setTransform(1, 0, 0, 1, 0, 0), a[ef](0, 0, n, e)), a[po](1, 0, 0, 1, -t - s.$x * h, -i - s.$y * h), a[io](h, h), s._js(a, 1);
    var f = Ni(a, 0, 0, n, e);
    if (!f) return !1;
    f = f[mo];
    for (var c = f[Wh] / 4; c-- > 0;)
      if (f[4 * c - 1] > EY) return !0;
    return !1
  }

  function Ln(t, i, n, e, s, h, r, a, o) {
    if (ri(t, i, n, e, a, o)) return null;
    var f, c, u, _ = new mY(bY, [t + n - s, i]),
      d = new mY(gY, [t + n, i, t + n, i + h]),
      l = new mY(bY, [t + n, i + e - h]),
      v = new mY(gY, [t + n, i + e, t + n - s, i + e]),
      b = new mY(bY, [t + s, i + e]),
      g = new mY(gY, [t, i + e, t, i + e - h]),
      y = new mY(bY, [t, i + h]),
      x = new mY(gY, [t, i, t + s, i]),
      p = (new mY(pY), [_, d, l, v, b, g, y, x]),
      m = new PG(t + s, i + h, n - s - s, e - h - h);
    t > a ? (f = RG, u = 5) : a > t + n ? (f = NG, u = 1) : (f = DG, u = 0), i > o ? (c = BG, f == RG && (u = 7)) : o > i + e ? (c = FG, f == NG ? u = 3 : f == DG && (u = 4)) : (c = $G, f == RG ? u = 6 : f == NG && (u = 2));
    var E = $n(u, t, i, n, e, s, h, r, a, o, m),
      w = E[0],
      T = E[1],
      k = new wY,
      M = k._gg;
    M[ir](new mY(vY, [w.x, w.y])), M[ir](new mY(bY, [a, o])), M[ir](new mY(bY, [T.x, T.y])), T._md && (M[ir](T._md), T[sf]++);
    for (var O = T._mdNO % 8, I = w._mdNO; M[ir](p[O]), ++O, O %= 8, O != I;);
    return w._md && M.push(w._md), k[hf](), k
  }

  function Cn(t, i, e, s, h, r, a, o, f, c, u, _, d, l) {
    var v = new jG(_, d, e, s),
      b = new jG(i[0], i[1], i[4], i[5]),
      g = b._3c(v, u),
      y = g[0],
      x = g[1];
    if (y[rf] !== n) {
      y[sf] = (t - 1) % 8, x._mdNO = (t + 1) % 8;
      var p = y[rf];
      7 == t ? (y.y = r + c + Math.min(l[Ba], p), x.x = h + f + Math.min(l[Na], p)) : 5 == t ? (y.x = h + f + Math.min(l[Na], p), x.y = r + o - c - Math.min(l.height, p)) : 3 == t ? (y.y = r + o - c - Math.min(l[Ba], p), x.x = h + a - f - Math.min(l.width, p)) : 1 == t && (y.x = h + a - f - Math.min(l[Na], p), x.y = r + c + Math.min(l.height, p))
    } else {
      v._mp(v._n2, v._n0, y.x, y.y), y = v._$h(i), v._mp(v._n2, v._n0, x.x, x.y), x = v._$h(i);
      var m = Fn(i, [y, x]),
        E = m[0],
        w = m[2];
      y[sf] = t, x._mdNO = t, y._md = new mY(gY, E[Xh](2)), x._md = new mY(gY, w[Xh](2))
    }
    return [y, x]
  }

  function Rn(t, i, n, e, s, h, r, a, o, f) {
    var c, u;
    if (o - a >= i + h) c = {
      y: n,
      x: o - a
    }, c._mdNO = 0;
    else {
      c = {
        y: n + r,
        x: Math.max(i, o - a)
      };
      var _ = [i, n + r, i, n, i + h, n],
        d = new jG(o, f, c.x, c.y);
      if (c = d._$h(_)) {
        $(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
        var l = Fn(_, [c]);
        l = l[0], l && (c._md = new mY(gY, l.slice(2))), c[sf] = 7
      } else c = {
        y: n,
        x: i + h
      }, c[sf] = 0
    }
    if (i + e - h >= o + a) u = {
      y: n,
      x: o + a
    }, u._mdNO = 0;
    else {
      u = {
        y: n + r,
        x: Math.min(i + e, o + a)
      };
      var v = [i + e - h, n, i + e, n, i + e, n + r],
        d = new jG(o, f, u.x, u.y);
      if (u = d._$h(v)) {
        $(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
        var l = Fn(v, [u]);
        l && l[l.length - 1] && (u._md = new mY(gY, l[l[Wh] - 1].slice(2))), u[sf] = 1
      } else u = {
        y: n,
        x: i + e - h
      }, u._mdNO = 0
    }
    return [c, u]
  }

  function Dn(t, i, n, e, s, h, r, a, o, f) {
    var c, u;
    if (f - a >= n + r) c = {
      x: i + e,
      y: f - a
    }, c[sf] = 2;
    else {
      c = {
        x: i + e - h,
        y: Math.max(n, f - a)
      };
      var _ = [i + e - h, n, i + e, n, i + e, n + r],
        d = new jG(o, f, c.x, c.y);
      if (c = d._$h(_)) {
        $(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
        var l = Fn(_, [c]);
        l = l[0], l && (c._md = new mY(gY, l.slice(2))), c[sf] = 1
      } else c = {
        x: i + e,
        y: n + r
      }, c._mdNO = 2
    }
    if (n + s - r >= f + a) u = {
      x: i + e,
      y: f + a
    }, u[sf] = 2;
    else {
      u = {
        x: i + e - h,
        y: Math.min(n + s, f + a)
      };
      var v = [i + e, n + s - r, i + e, n + s, i + e - h, n + s],
        d = new jG(o, f, u.x, u.y);
      if (u = d._$h(v)) {
        $(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
        var l = Fn(v, [u]);
        l[1] && (u._md = new mY(gY, l[1][Xh](2))), u._mdNO = 3
      } else u = {
        x: i + e,
        y: n + s - r
      }, u[sf] = 2
    }
    return [c, u]
  }

  function Nn(t, i, n, e, s, h, r, a, o, f) {
    var c, u;
    if (o - a >= i + h) u = {
      y: n + s,
      x: o - a
    }, u._mdNO = 4;
    else {
      u = {
        y: n + s - r,
        x: Math.max(i, o - a)
      };
      var _ = [i + h, n + s, i, n + s, i, n + s - r],
        d = new jG(o, f, u.x, u.y);
      if (u = d._$h(_)) {
        $(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
        var l = Fn(_, [u]);
        l = l[l[Wh] - 1], l && (u._md = new mY(gY, l[Xh](2))), u[sf] = 5
      } else u = {
        y: n + s,
        x: i + h
      }, u._mdNO = 4
    }
    if (i + e - h >= o + a) c = {
      y: n + s,
      x: o + a
    }, c[sf] = 4;
    else {
      c = {
        y: n + s - r,
        x: Math.min(i + e, o + a)
      };
      var v = [i + e, n + s - r, i + e, n + s, i + e - h, n + s],
        d = new jG(o, f, c.x, c.y);
      if (c = d._$h(v)) {
        $(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
        var l = Fn(v, [c]);
        l[0] && (c._md = new mY(gY, l[0][Xh](2))), c[sf] = 3
      } else c = {
        y: n + s,
        x: i + e - h
      }, c[sf] = 4
    }
    return [c, u]
  }

  function Bn(t, i, n, e, s, h, r, a, o, f) {
    var c, u;
    if (f - a >= n + r) u = {
      x: i,
      y: f - a
    }, u._mdNO = 6;
    else {
      u = {
        x: i + h,
        y: Math.max(n, f - a)
      };
      var _ = [i, n + r, i, n, i + h, n],
        d = new jG(o, f, u.x, u.y);
      if (u = d._$h(_)) {
        $(u) && (u = u[0].t < u[1].t ? u[0] : u[1]);
        var l = Fn(_, [u]);
        l = l[l[Wh] - 1], l && (u._md = new mY(gY, l[Xh](2)))
      } else u = {
        x: i,
        y: n + r
      };
      u[sf] = 7
    }
    if (n + s - r >= f + a) c = {
      x: i,
      y: f + a
    }, c._mdNO = 6;
    else {
      c = {
        x: i + h,
        y: Math.min(n + s, f + a)
      };
      var v = [i + h, n + s, i, n + s, i, n + s - r],
        d = new jG(o, f, c.x, c.y);
      if (c = d._$h(v)) {
        $(c) && (c = c[0].t > c[1].t ? c[0] : c[1]);
        var l = Fn(v, [c]);
        l[0] && (c._md = new mY(gY, l[0][Xh](2))), c._mdNO = 5
      } else c = {
        x: i,
        y: n + s - r
      }, c._mdNO = 6
    }
    return [c, u]
  }

  function $n(t, i, n, e, s, h, r, a, o, f, c) {
    var u = a / 2;
    switch (h = h || 1e-4, r = r || 1e-4, t) {
      case 7:
        var _ = [i, n + r, i, n, i + h, n],
          d = i + h,
          l = n + r;
        return Cn(t, _, d, l, i, n, e, s, h, r, a, o, f, c);
      case 5:
        return _ = [i + h, n + s, i, n + s, i, n + s - r], d = i + h, l = n + s - r, Cn(t, _, d, l, i, n, e, s, h, r, a, o, f, c);
      case 3:
        return _ = [i + e, n + s - r, i + e, n + s, i + e - h, n + s], d = i + e - h, l = n + s - r, Cn(t, _, d, l, i, n, e, s, h, r, a, o, f, c);
      case 1:
        return _ = [i + e - h, n, i + e, n, i + e, n + r], d = i + e - h, l = n + r, Cn(t, _, d, l, i, n, e, s, h, r, a, o, f, c);
      case 0:
        return Rn(t, i, n, e, s, h, r, u, o, f, c);
      case 2:
        return Dn(t, i, n, e, s, h, r, u, o, f, c);
      case 4:
        return Nn(t, i, n, e, s, h, r, u, o, f, c);
      case 6:
        return Bn(t, i, n, e, s, h, r, u, o, f, c)
    }
  }

  function Fn(t, i) {
    for (var e, s, h, r, a, o, f = t[0], c = t[1], u = t[2], _ = t[3], d = t[4], l = t[5], v = [], b = 0; b < i[Wh]; b++) a = i[b], o = a.t, 0 != o && 1 != o ? (e = f + (u - f) * o, s = c + (_ - c) * o, h = u + (d - u) * o, r = _ + (l - _) * o, v[ir]([f, c, e, s, a.x, a.y]), f = a.x, c = a.y, u = h, _ = r) : v[ir](null);
    return h !== n && v[ir]([a.x, a.y, h, r, d, l]), v
  }

  function zn(t) {
    return this[af] && this[ of ] && (t.x -= this[ of ].x, t.y -= this[ of ].y), this[ff] && Oi(t, this[ff]), t.x += this[cf] || 0, t.y += this[uf] || 0, this[_f] && this[df] ? Oi(t, this[df]) : t
  }

  function Gn(t) {
    return this[_f] && this[df] && Oi(t, -this[df]), t.x -= this[cf] || 0, t.y -= this.$offsetY || 0, this[ff] && Oi(t, -this[ff]), this[af] && this._n5f && (t.x += this[ of ].x, t.y += this[ of ].y), t
  }

  function Hn() {
    var t = this.$invalidateSize;
    this[lf] && (this.$invalidateSize = !1, this.$invalidateAnchorPoint = !0, this._7p[vf](this._jg), this[bf] && this._7p[gf](this[bf]), this[yf] && this._7p[gf](this[yf]));
    var i = this._$u();
    if (i) var n = this[xf] && this.$pointerWidth;
    return this[pf] && this[af] && (this.$invalidateAnchorPoint = !1, n && (t = !0), this[ of ] = fi(this.$anchorPosition, this._7p[Na], this._7p[Ba]), this[ of ].x += this._7p.x, this[ of ].y += this._7p.y), i ? (t && (this[mf] = !0, Yn[Uh](this, n)), this[mf] && (this[mf] = !1, this[Ef] = this[wf] && this._lkShape && this[Tf].bounds ? rY[hr][kf][Uh](this[wf], this[Tf][Mf]) : null), t) : (this[Of] = !1, t)
  }

  function Yn(t) {
    var i = this._7p.x + this.$border / 2,
      n = this._7p.y + this.$border / 2,
      e = this._7p[Na] - this.$border,
      s = this._7p[Ba] - this[yf],
      h = 0,
      r = 0;
    if (this[If] && (D(this[If]) ? h = r = this[If] : (h = this.$borderRadius.x || 0, r = this[If].y || 0), h = Math.min(h, e / 2), r = Math.min(r, s / 2)), t && (this._pointerX = this[ of ].x - this[cf] + this.$pointerX, this._pointerY = this[ of ].y - this.$offsetY + this[Sf], !this._7p[yo](this._pointerX, this[jf]))) {
      var a = new kY(i, n, e, s, h, r, this.$pointerWidth, this._pointerX, this[jf]);
      return this[Tf] = a._md, this._lkShape[Mf].set(i, n, e, s), void(this[Of] = !0)
    }
    this[Tf] && this._lkShape[$a](), this[Tf] = Xq.getRect(i, n, e, s, h, r, this._lkShape), this._lkShape[Mf].set(i, n, e, s)
  }

  function qn(t, i, n, e) {
    return e && (t[Na] < 0 || t[Ba] < 0) ? (t.x = i, t.y = n, void(t[Na] = t.height = 0)) : (i < t.x ? (t[Na] += t.x - i, t.x = i) : i > t.x + t.width && (t[Na] = i - t.x), void(n < t.y ? (t.height += t.y - n, t.y = n) : n > t.y + t.height && (t[Ba] = n - t.y)))
  }

  function Wn(t, i, e) {
    var s, h = t[Af],
      r = t[Pf] === n ? this[Pf] : t.layoutByPath;
    return this.$data instanceof wY && r ? (s = UH._n5m(h, this.$data, this.lineWidth, i, e), s.x *= this._jn, s.y *= this._jp) : (s = fi(h, this._7p[Na], this._7p[Ba]), s.x += this._7p.x, s.y += this._7p.y), zn[Uh](this, s)
  }

  function Un(t, i) {
    if (i)
      if (i._7p[Lf]()) t.$x = i.$x, t.$y = i.$y;
      else {
        var n = Wn[Uh](i, t);
        t.$x = n.x, t.$y = n.y, t[Cf] = n[ko]
      }
    else t.$x = 0, t.$y = 0;
    t[Rf] && IY.call(t)
  }

  function Vn(t) {
    if (t[Df] === n) {
      var i, e;
      if (t[Nf]) i = t.getLineDash, e = t[Nf];
      else {
        var s;
        if (t[Bf] !== n) s = Bf;
        else {
          if (t.webkitLineDash === n) return !1;
          s = $f
        }
        e = function (t) {
          this[s] = t
        }, i = function () {
          return this[s]
        }
      }
      Z(t, Df, {
        get: function () {
          return i.call(this)
        },
        set: function (t) {
          e[Uh](this, t)
        }
      })
    }
    if (t[Ff] === n) {
      var h;
      if (t[zf] !== n) h = zf;
      else {
        if (t.webkitLineDashOffset === n) return;
        h = Gf
      }
      Z(t, Ff, {
        get: function () {
          return this[h]
        },
        set: function (t) {
          this[h] = t
        }
      })
    }
  }

  function Xn(t, i, n, e, s) {
    var h, r, a, o, f, c, u, _, d = function (t) {
        return function (i) {
          t(i)
        }
      },
      l = function () {
        r = null, a = null, o = f, f = null, c = null
      },
      v = function (t) {
        h = t, u || (u = Pi()), u[Na] = h[Na], u.height = h.height, i[Na] = h[Na], i.height = h[Ba]
      },
      b = function (t) {
        g(), l(), r = t[Hf] ? t.transparencyIndex : null, a = 10 * t.delayTime, f = t.disposalMethod
      },
      g = function () {
        if (c) {
          var t = c.getImageData(0, 0, h[Na], h[Ba]),
            n = {
              data: t,
              _pixels: Mn(t[mo], h[Na], h[Ba]),
              delay: a
            };
          s[Uh](i, n)
        }
      },
      y = function (t) {
        c || (c = u[Ro](Xa));
        var i = t[Yf] ? t.lct : h.gct,
          n = c[co](t[qf], t[Wf], t[Na], t[Ba]);
        t[Uf][Vf](function (t, e) {
          r !== t ? (n[mo][4 * e + 0] = i[t][0], n[mo][4 * e + 1] = i[t][1], n.data[4 * e + 2] = i[t][2], n[mo][4 * e + 3] = 255) : (2 === o || 3 === o) && (n.data[4 * e + 3] = 0)
        }), c[Xf](n, t[qf], t[Wf])
      },
      x = function () {},
      p = {
        hdr: d(v),
        gce: d(b),
        com: d(x),
        app: {
          NETSCAPE: d(x)
        },
        img: d(y, !0),
        eof: function () {
          g(), n[Uh](i)
        }
      },
      m = new XMLHttpRequest;
    cG || m[Zf]("text/plain; charset=x-user-defined"), m[Kf] = function () {
      _ = new LY(m.responseText);
      try {
        RY(_, p)
      } catch (t) {
        e[Uh](i, Sa)
      }
    }, m[Jf] = function () {
      e[Uh](i, Qf)
    }, m[Pa](La, t, !0), m[Da]()
  }

  function Zn(t) {
    var i = [51, 10, 10, 100, 101, 109, 111, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 109, 97, 112, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 44, 99, 110, 46, 113, 117, 110, 101, 101, 46, 99, 111, 109, 10, 50, 46, 48, 10, 49, 52, 57, 50, 54, 55, 54, 49, 48, 53, 50, 50, 48, 10, 10, 10];
    return i.forEach(function (n, e) {
      i[e] = t(n)
    }), i[tc]("")
  }

  function Kn(t, i) {
    try {
      if (null == t || t.length < 8) return;
      if (null == i || i[Wh] <= 0) return;
      for (var n = "", e = 0; e < i.length; e++) n += i[ic](e).toString();
      var s = Math[Pr](n.length / 5),
        h = parseInt(n[nc](s) + n[nc](2 * s) + n[nc](3 * s) + n.charAt(4 * s) + n[nc](5 * s), 10),
        r = Math[xo](i[Wh] / 2),
        a = Math.pow(2, 31) - 1,
        o = parseInt(t.substring(t.length - 8, t[Wh]), 16);
      for (t = t[Po](0, t[Wh] - 8), n += o; n[Wh] > 10;) n = (parseInt(n[Po](0, 10), 10) + parseInt(n[Po](10, n.length), 10)).toString();
      n = (h * n + r) % a;
      for (var f = "", c = "", e = 0; e < t[Wh]; e += 2) f = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math[Pr](n / a * 255), 10), c += String[ec](f), n = (h * n + r) % a;
      return 0 | c[0] ? _q = zY[sc + YY + hc](c) : null
    } catch (u) {}
  }

  function Jn() {
    var t = NY;
    if (!t) return void(yq = !0);
    uq = t;
    var i;
    t = t.split(Rr);
    for (var n = 0; n < t.length && (i = Kn(t[n], $Y), !(i && i[mr](ro)[Wh] >= 8));) 1 == t.length && (i = Kn(t[n], rc)), n++;
    if (!i || i[mr](ro)[Wh] < 8) return vq = !0, "" === $Y || $Y == ac + VY + oc + XY + fc || $Y == cc + UY + uc ? (bq = Eq, yq = !1, pq = !1, void(cq = !1)) : (bq = Eq, void(yq = !0));
    cq = i[mr](ro);
    var e = cq[3];
    if (e != wU) return vq = !0, void(pq = !0);
    yq = !1, pq = !1;
    var s = cq[0];
    (_c == s || dc == s) && (vq = !1);
    var h = cq[5];
    gq = h;
    var r = cq[6];
    bq = r
  }

  function Qn() {
    var t = uq;
    if (t) {
      var i;
      t = t[mr](Rr);
      for (var n = 0; n < t[Wh] && (i = wq(t[n], $Y), !(i && i[mr](ro).length >= 8));) 1 == t[Wh] && (i = wq(t[n], rc)), n++;
      if (i.split(ro)[Wh] >= 8) return void(xq = !1)
    }
    return $Y && $Y != ac + VY + oc + XY + fc && $Y != cc + UY + uc ? void(xq = !0) : void(xq = !1)
  }

  function te() {
    if (vq) {
      var t = uh[tq + To]._js,
        i = lq;
      uh[tq + To]._js = function () {
        t.apply(this, arguments), i[Uh](this[lc], this.g)
      };
      var n = Nq[tq + To]._h8;
      Nq[tq + To]._h8 = function (t) {
        n[sr](this, arguments), i[Uh](this, t)
      }
    }
  }

  function ie() {
    if (gq !== !0 && gq) {
      var t = gq[mr](Hr);
      if (3 != t[Wh]) return void(Kq[hr]._js = null);
      var i = parseInt(t[0], 10),
        n = parseInt(t[1], 10),
        e = parseInt(t[2], 10),
        s = 3,
        h = (365.2425 * (i - 2e3 + 10 * s) + (n - 1) * s * 10 + e) * s * 8 * s * 1200 * 1e3;
      BY > h && (Kq[hr]._js = null)
    }
  }

  function ne() {
    var t = 0 | bq;
    if (t) {
      var i = nH.prototype._kj;
      nH[tq + To]._kj = function () {
        return this._j5[Wh] > t ? !1 : i[sr](this, arguments)
      }
    }
  }

  function ee() {
    yq && (kG[tq + To]._kj = kG[tq + To]._fh)
  }

  function se() {
    xq && (Nq[tq + To]._js = Nq[tq + To][vc])
  }

  function he() {
    mq && (zq[hr]._gr = zq.prototype._ec)
  }

  function re() {
    pq && (Dq[tq + To][vc] = Nq[tq + To]._js)
  }

  function ae() {
    cq === n && (Nq[tq + To]._iz = PG[bc])
  }

  function oe(t) {
    var i = Pi(!0);
    return Vn(i.g), i[gc] = function () {
      return !1
    }, t[yc](i), i[xc] = Iq, i
  }

  function d(t, i) {
    function n(t, n) {
      for (var e = t[Wh], s = n[Wh], h = e + s, r = new Array(h), a = 0, o = 0, f = 0; h > f;) r[f++] = a === e ? n[o++] : o === s || i(t[a], n[o]) <= 0 ? t[a++] : n[o++];
      return r
    }

    function e(t) {
      var i = t[Wh],
        s = Math[Jh](i / 2);
      return 1 >= i ? t : n(e(t[Xh](0, s)), e(t.slice(s)))
    }
    return e(t)
  }

  function fe(t) {
    t[Na] = t.width
  }

  function ce(t) {
    Cq || (Cq = "imageSmoothingEnabled" in CanvasRenderingContext2D[hr] ? "imageSmoothingEnabled" : "mozImageSmoothingEnabled" in CanvasRenderingContext2D.prototype ? "mozImageSmoothingEnabled" : "msImageSmoothingEnabled" in CanvasRenderingContext2D.prototype ? "msImageSmoothingEnabled" : "webkitImageSmoothingEnabled" in CanvasRenderingContext2D.prototype ? "webkitImageSmoothingEnabled" : "imageSmoothingEnabled"), t[Cq] = !1
  }

  function ue(t, i, n, e, s) {
    e = V(i + e) - (i = U(i)), s = V(n + s) - (n = U(n)), t[ef](i, n, e, s), t.rect(i, n, e, s)
  }

  function U(t) {
    return Math[Pr](t)
  }

  function V(t) {
    return Math[Jh](t)
  }

  function _e(t) {
    var i = [];
    return t.forEach(function (t) {
      i[ir](-t)
    }), i
  }

  function de(t) {
    return t %= $q, 0 > t && (t += $q), t
  }

  function le(t, i, n, e, s, h, r, a) {
    var o = ((t * e - i * n) * (s - r) - (t - n) * (s * a - h * r)) / ((t - n) * (h - a) - (i - e) * (s - r)),
      f = ((t * e - i * n) * (h - a) - (i - e) * (s * a - h * r)) / ((t - n) * (h - a) - (i - e) * (s - r));
    if (isNaN(o) || isNaN(f)) return !1;
    if (t >= n) {
      if (!(o >= n && t >= o)) return !1
    } else if (!(o >= t && n >= o)) return !1;
    if (i >= e) {
      if (!(f >= e && i >= f)) return !1
    } else if (!(f >= i && e >= f)) return !1;
    if (s >= r) {
      if (!(o >= r && s >= o)) return !1
    } else if (!(o >= s && r >= o)) return !1;
    if (h >= a) {
      if (!(f >= a && h >= f)) return !1
    } else if (!(f >= h && a >= f)) return !1;
    return !0
  }

  function ve(t, i) {
    for (var n = 0, e = t.length; e > n;) {
      for (var s = t[n], h = t[(n + 1) % e], r = 0; 4 > r;) {
        var a = i[r],
          o = i[(r + 1) % e];
        if (le(s[0], s[1], h[0], h[1], a[0], a[1], o[0], o[1])) return !0;
        r++
      }
      n++
    }
    return !1
  }

  function be(t, i, n, e) {
    return [t * e - i * n, t * n + i * e]
  }

  function ge(t) {
    return t[pc] ? (t = t.parent, t._du ? t._du : t instanceof Zq && t._g4 === !1 ? t : null) : null
  }

  function ye(t, i, n) {
    if (n = n || i[mc], n == t) return !1;
    var e = t[Ec](n);
    return e || (e = new _U(t, n), t._linkedNodes[n.id] = e), e._io(i, t)
  }

  function xe(t, i, n) {
    if (n = n || i[mc], n == t) return !1;
    var e = t[Ec](n);
    return e ? e[wc](i, t) : void 0
  }

  function pe(t, i, e) {
    return e === n && (e = i.toAgent), e != t ? (t._7q || (t._7q = new kG), t._7q.add(i) === !1 ? !1 : void t._9a++) : void 0
  }

  function me(t, i, n) {
    return t._7q && t._7q[Qh](i) !== !1 ? (t._9a--, void xe(t, i, n)) : !1
  }

  function Ee(t, i) {
    return i.fromAgent != t ? (t._9m || (t._9m = new kG), t._9m.add(i) === !1 ? !1 : void t[Tc]++) : void 0
  }

  function we(t, i) {
    return t._9m && t._9m[Qh](i) !== !1 ? (t[Tc]--, void xe(i.fromAgent, i, t)) : !1
  }

  function Te(t, i) {
    if (i === n && (i = t instanceof Wq), i) {
      if (t[kc]()) return null;
      var e = Te(t.from, !1);
      if (t.isLooped()) return e;
      for (var s = Te(t.to, !1); null != e && null != s;) {
        if (e == s) return e;
        if (e[Mc](s)) return s;
        if (s.isDescendantOf(e)) return e;
        e = Te(e, !1), s = Te(s, !1)
      }
      return null
    }
    for (var h = t.parent; null != h;) {
      if (h._i5()) return h;
      h = h[pc]
    }
    return null
  }

  function ke(t, i, n) {
    t._i5() && t[qh]() && t[Vh][Vf](function (t) {
      t instanceof Uq && i.add(t) && ke(t, i, n)
    }, this), t.hasFollowers() && t._de.forEach(function (t) {
      (null == n || n[Oc](t)) && i.add(t) && ke(t, i, n)
    })
  }

  function Me(t, i) {
    i[pc] ? i[pc][Ic](i, i[pc][Sc] - 1) : t.roots[jc](i, t.roots.length - 1)
  }

  function Oe(t, i) {
    i[pc] ? i.parent[Ic](i, 0) : t[Ac][jc](i, 0)
  }

  function Ie(t, i) {
    if (i instanceof Wq) return void(i.isInvalid() || je(t, i));
    for (Me(t, i); i = i[pc];) Me(t, i)
  }

  function Se(t, i) {
    if (i instanceof Wq) return void(i[kc]() || Ae(t, i));
    for (Oe(t, i); i = i[pc];) Oe(t, i)
  }

  function je(t, i) {
    var n = i[Pc];
    if (i[Lc]()) Me(t, n);
    else {
      var e = i[mc];
      Me(t, n), Me(t, e)
    }
  }

  function Ae(t, i) {
    var n = i[Pc];
    if (i[Lc]()) Oe(t, n);
    else {
      var e = i[mc];
      Oe(t, n), Oe(t, e)
    }
  }

  function Pe(t, i) {
    return t._9a++, t._gd ? (i._i6 = t._id, t._id._ia = i, void(t._id = i)) : (t._gd = i, void(t._id = i))
  }

  function Le(t, i) {
    t._9a--, t._id == i && (t._id = i._i6), i._i6 ? i._i6._ia = i._ia : t._gd = i._ia, i._ia && (i._ia._i6 = i._i6), i._i6 = null, i._ia = null, xe(t, i, i.$to)
  }

  function Ce(t, i) {
    return t[Tc]++, t._ib ? (i._k4 = t._jd, t._jd._k6 = i, void(t._jd = i)) : (t._ib = i, void(t._jd = i))
  }

  function Re(t, i) {
    t._n5l--, t._jd == i && (t._jd = i._k4), i._k4 ? i._k4._k6 = i._k6 : t._ib = i._k6, i._k6 && (i._k6._k4 = i._k4), i._k4 = null, i._k6 = null
  }

  function De(t, i) {
    return i = i || new kG, t[Cc](function (t) {
      i.add({
        id: t.id,
        edge: t,
        fromAgent: t.$from._du,
        toAgent: t.$to._du
      })
    }), t[Rc](function (t) {
      t instanceof Uq && De(t, i)
    }), i
  }

  function Ne(t, i, n) {
    return $e(t, i, n) === !1 ? !1 : Be(t, i, n)
  }

  function Be(t, i, n) {
    if (t._gd)
      for (var e = t._gd; e;) {
        if (i.call(n, e) === !1) return !1;
        e = e._ia
      }
  }

  function $e(t, i, n) {
    if (t._ib)
      for (var e = t._ib; e;) {
        if (i.call(n, e) === !1) return !1;
        e = e._k6
      }
  }

  function Fe(t, i, e, s, h, r, a) {
    return r || a ? (r = r || 0, a = a === n ? r : a || 0, r = Math.min(r, s / 2), a = Math.min(a, h / 2), t[Dc](i + r, e), t[Nc](i + s - r, e), t[Bc](i + s, e, i + s, e + a), t[Nc](i + s, e + h - a), t.quadTo(i + s, e + h, i + s - r, e + h), t[Nc](i + r, e + h), t[Bc](i, e + h, i, e + h - a), t[Nc](i, e + a), t.quadTo(i, e, i + r, e), t[hf](), t) : (t[Dc](i, e), t[Nc](i + s, e), t[Nc](i + s, e + h), t[Nc](i, e + h), t.closePath(), t)
  }

  function ze(t, i) {
    var n = i.r || 1,
      e = i.cx || 0,
      s = i.cy || 0,
      h = n * Math.tan(Math.PI / 8),
      r = n * Math.sin(Math.PI / 4);
    t[Dc](e + n, s), t[Bc](e + n, s + h, e + r, s + r), t[Bc](e + h, s + n, e, s + n), t.quadTo(e - h, s + n, e - r, s + r), t[Bc](e - n, s + h, e - n, s), t[Bc](e - n, s - h, e - r, s - r), t[Bc](e - h, s - n, e, s - n), t[Bc](e + h, s - n, e + r, s - r), t.quadTo(e + n, s - h, e + n, s)
  }

  function Ge(t, i, n, e, s) {
    i instanceof nn && (e = i.width, s = i.height, n = i.cy - s / 2, i = i.cx - e / 2);
    var h = .5522848,
      r = e / 2 * h,
      a = s / 2 * h,
      o = i + e,
      f = n + s,
      c = i + e / 2,
      u = n + s / 2;
    return t[Dc](i, u), t.curveTo(i, u - a, c - r, n, c, n), t[$c](c + r, n, o, u - a, o, u), t[$c](o, u + a, c + r, f, c, f), t[$c](c - r, f, i, u + a, i, u), t
  }

  function He(t, i, n, e, s) {
    var h = 2 * e,
      r = 2 * s,
      a = i + e / 2,
      o = n + s / 2;
    return t.moveTo(a - h / 4, o - r / 12), t[Nc](i + .306 * e, n + .579 * s), t.lineTo(a - h / 6, o + r / 4), t[Nc](i + e / 2, n + .733 * s), t.lineTo(a + h / 6, o + r / 4), t[Nc](i + .693 * e, n + .579 * s), t[Nc](a + h / 4, o - r / 12), t.lineTo(i + .611 * e, n + .332 * s), t[Nc](a + 0, o - r / 4), t[Nc](i + .388 * e, n + .332 * s), t[hf](), t
  }

  function Ye(t, i, n, e, s) {
    return t.moveTo(i, n), t.lineTo(i + e, n + s / 2), t[Nc](i, n + s), t[hf](), t
  }

  function qe(t, i, n, e, s) {
    return t.moveTo(i, n + s / 2), t[Nc](i + e / 2, n), t[Nc](i + e, n + s / 2), t[Nc](i + e / 2, n + s), t[hf](), t
  }

  function We(t, i, n, e, s, h) {
    return t[Dc](i, n), t[Nc](i + e, n + s / 2), t[Nc](i, n + s), h || (t[Nc](i + .25 * e, n + s / 2), t[hf]()), t
  }

  function Ue(t, i, n, e, s) {
    if (!t || 3 > t) throw new Error("edge number must greater than 2");
    t = 0 | t, e = e || 50, s = s || 0, i = i || 0, n = n || 0;
    for (var h, r, a = 0, o = 2 * Math.PI / t, f = new wY; t > a;) h = i + e * Math.cos(s), r = n + e * Math.sin(s), a ? f[Nc](h, r) : f.moveTo(h, r), ++a, s += o;
    return f[hf](), f
  }

  function Ve() {
    var t = new wY;
    return t[Dc](75, 40), t[$c](75, 37, 70, 25, 50, 25), t[$c](20, 25, 20, 62.5, 20, 62.5), t.curveTo(20, 80, 40, 102, 75, 120), t[$c](110, 102, 130, 80, 130, 62.5), t[$c](130, 62.5, 130, 25, 100, 25), t[$c](85, 25, 75, 37, 75, 40), t
  }

  function Xe() {
    var t = new wY;
    return t[Dc](20, 0), t.lineTo(80, 0), t[Nc](100, 100), t.lineTo(0, 100), t[hf](), t
  }

  function Ze() {
    var t = new wY;
    return t[Dc](100, 0), t[Nc](100, 80), t[Nc](0, 100), t.lineTo(0, 20), t.closePath(), t
  }

  function Ke() {
    var t = new wY;
    return t[Dc](20, 0), t[Nc](100, 0), t.lineTo(80, 100), t.lineTo(0, 100), t.closePath(), t
  }

  function Je() {
    var t = new wY;
    return t[Dc](43, 23), t[Nc](28, 10), t[Nc](37, 2), t.lineTo(63, 31), t[Nc](37, 59), t.lineTo(28, 52), t.lineTo(44, 38), t[Nc](3, 38), t[Nc](3, 23), t[hf](), t
  }

  function Qe() {
    var t = new wY;
    return t[Dc](1, 8), t[Nc](7, 2), t[Nc](32, 26), t[Nc](7, 50), t[Nc](1, 44), t.lineTo(18, 26), t[hf](), t[Dc](27, 8), t.lineTo(33, 2), t.lineTo(57, 26), t[Nc](33, 50), t[Nc](27, 44), t[Nc](44, 26), t.closePath(), t
  }

  function ts() {
    var t = new wY;
    return t[Dc](0, 15), t[Nc](23, 15), t[Nc](23, 1), t.lineTo(47, 23), t[Nc](23, 43), t[Nc](23, 29), t[Nc](0, 29), t[hf](), t
  }

  function is() {
    var t = new wY;
    return t.moveTo(0, 21), t[Nc](30, 21), t.lineTo(19, 0), t.lineTo(25, 0), t[Nc](47, 25), t[Nc](25, 48), t.lineTo(19, 48), t.lineTo(30, 28), t[Nc](0, 28), t.closePath(), t
  }

  function ns() {
    var t = new wY;
    return t[Dc](0, 0), t.lineTo(34, 24), t[Nc](0, 48), t.lineTo(14, 24), t.closePath(), t
  }

  function es() {
    var t = new wY;
    return t.moveTo(20, 0), t[Nc](34, 14), t[Nc](20, 28), t[Nc](22, 18), t[Nc](1, 25), t[Nc](10, 14), t.lineTo(1, 3), t[Nc](22, 10), t[hf](), t
  }

  function ss() {
    var t = new wY;
    return t[Dc](4, 18), t[Nc](45, 18), t.lineTo(37, 4), t.lineTo(83, 25), t[Nc](37, 46), t[Nc](45, 32), t.lineTo(4, 32), t[hf](), t
  }

  function hs() {
    var t = new wY;
    return t[Dc](17, 11), t.lineTo(27, 11), t[Nc](42, 27), t[Nc](27, 42), t[Nc](17, 42), t[Nc](28, 30), t[Nc](4, 30), t.lineTo(4, 23), t[Nc](28, 23), t[hf](), t
  }

  function rs() {
    Xq[Fc](FH[zc], Ge(new wY, 0, 0, 100, 100)), Xq[Fc](FH.SHAPE_RECT, Fe(new wY, 0, 0, 100, 100)), Xq[Fc](FH[Gc], Fe(new wY, 0, 0, 100, 100, 20, 20)), Xq[Fc](FH[Hc], He(new wY, 0, 0, 100, 100)), Xq.register(FH[Yc], Ye(new wY, 0, 0, 100, 100)), Xq.register(FH[qc], Ue(5)), Xq[Fc](FH.SHAPE_HEXAGON, Ue(6)), Xq[Fc](FH[Wc], qe(new wY, 0, 0, 100, 100)), Xq[Fc](FH.SHAPE_HEART, Ve()), Xq[Fc](FH[Uc], Xe()), Xq.register(FH[Vc], Ze()), Xq[Fc](FH.SHAPE_PARALLELOGRAM, Ke());
    var t = new wY;
    t[Dc](20, 0), t[Nc](40, 0), t.lineTo(40, 20), t.lineTo(60, 20), t.lineTo(60, 40), t.lineTo(40, 40), t[Nc](40, 60), t[Nc](20, 60), t.lineTo(20, 40), t.lineTo(0, 40), t.lineTo(0, 20), t.lineTo(20, 20), t[hf](), Xq.register(FH[Xc], t), Xq[Fc](FH[Zc], We(new wY, 0, 0, 100, 100)), Xq.register(FH[Kc], Je()), Xq.register(FH[Jc], Qe()), Xq[Fc](FH[Qc], ts()), Xq[Fc](FH[tu], is()), Xq[Fc](FH.SHAPE_ARROW_5, ns()), Xq.register(FH[iu], es()), Xq[Fc](FH.SHAPE_ARROW_7, ss()), Xq[Fc](FH.SHAPE_ARROW_8, hs()), Xq[Fc](FH[nu], We(new wY, 0, 0, 100, 100, !0))
  }

  function as() {
    w(this, as, arguments), this[eu] = !0
  }

  function os() {
    w(this, os), this._$x = new ZG
  }

  function fs() {
    if (this._g4 === !0) {
      var t = this._7q,
        i = this._9m;
      if (t)
        for (t = t._j5; t[Wh];) {
          var n = t[0];
          me(this, n, n[mc])
        }
      if (i)
        for (i = i._j5; i[Wh];) {
          var n = i[0];
          we(this, n, n[Pc])
        }
      return void this[Rc](function (t) {
        t._i5() && fs.call(t)
      })
    }
    var e = De(this);
    e.forEach(function (t) {
      t = t.edge;
      var i = t[su],
        n = t.$to,
        e = i[Mc](this),
        s = n.isDescendantOf(this);
      e && !s ? (pe(this, t), ye(this, t)) : s && !e && (Ee(this, t), ye(t[Pc], t, this))
    }, this)
  }

  function cs() {
    w(this, cs, arguments), this[hu] = null
  }

  function us(t, i, n, e) {
    return t[i] = n, e ? {
      get: function () {
        return this[i]
      },
      set: function (t) {
        if (t !== this[i]) {
          this[i] = t, !this[ru], this._1f = !0;
          for (var n = e[Wh]; --n >= 0;) this[e[n]] = !0
        }
      }
    } : {
      get: function () {
        return this[i]
      },
      set: function (t) {
        t !== this[i] && (this[i] = t)
      }
    }
  }

  function _s(t, i) {
    var n = {},
      e = {};
    for (var s in i) {
      var h = i[s];
      h[au] && h.validateFlags[Vf](function (t, i, n) {
        n[i] = ou + t, e[t] = !0
      }), n[s] = us(t, ur + s, h[vr], h.validateFlags)
    }
    for (var r in e) t[ou + r] = !0;
    Object[Gr](t, n)
  }

  function ds(t, i, n, e) {
    if (Array[Or](i))
      for (var s = i[Wh]; --s >= 0;) ds(t, i[s], n, e);
    else {
      var h = i[fu];
      if (h) {
        if (h instanceof Kq || (h = t[h]), !h) return
      } else h = t;
      if (e || (e = t[cu](i[uu], n)), i[_u] && (h[i[_u]] = e), i[du]) {
        var r = i.callback;
        r instanceof Function || (r = t[r]), r instanceof Function && r[Uh](t, e, h)
      }
    }
  }

  function ls() {
    Jq[Vf](function (t) {
      this[t] = {}
    }, this)
  }

  function vs(t, i, n, e) {
    return e == FH.PROPERTY_TYPE_ACCESSOR ? void(t[n] = i) : e == FH[lu] ? void t.set(n, i) : e == FH.PROPERTY_TYPE_STYLE ? void t[vu](n, i) : !1
  }

  function bs() {
    w(this, bs, arguments)
  }

  function gs() {
    w(this, gs, arguments)
  }

  function ys(t, i, n, e) {
    var s = xs(t, i, n, e),
      h = [];
    if (ws(t)) ps(s, i, n, h, e.getStyle(Qq[bu]));
    else {
      Ls(t, i, n, h, s, e);
      var r = ms(t, e),
        a = r ? Is(t, s, i, n, e[gu](Qq[yu])) : e.getStyle(Qq[xu]);
      0 == a && (s = !s)
    }
    return h
  }

  function xs(t, i, n) {
    if (null != t) {
      if (t == FH[pu] || t == FH[mu] || t == FH[Eu] || t == FH.EDGE_TYPE_EXTEND_LEFT || t == FH[wu]) return !0;
      if (t == FH[Tu] || t == FH[ku] || t == FH[Mu] || t == FH[Ou] || t == FH[Iu]) return !1
    }
    var e = Ms(i, n),
      s = Os(i, n);
    return e >= s
  }

  function ps(t, i, n, e, s) {
    t ? Bs(i, n, e, s) : $s(i, n, e, s)
  }

  function ms(t, i) {
    return i.getStyle(Qq[Su])
  }

  function Es(t) {
    return null != t && (t == FH[Ou] || t == FH.EDGE_TYPE_EXTEND_LEFT || t == FH[Iu] || t == FH[wu])
  }

  function ws(t) {
    return t && (t == FH.EDGE_TYPE_ELBOW || t == FH[pu] || t == FH[Tu])
  }

  function Ts(t, i, n, e, s) {
    if (t == FH[Eu] || t == FH[Mu]) return new IG(e.x + e[Na] / 2, e.y + e[Ba] / 2);
    var h;
    if (Es(t)) {
      var r = Math.min(n.y, e.y),
        a = Math.min(n.x, e.x),
        o = Math.max(n[Xr], e[Xr]),
        f = Math.max(n[Zr], e[Zr]);
      if (h = s[gu](Qq[bu]), t == FH.EDGE_TYPE_EXTEND_TOP) return new IG((a + f) / 2, r - h);
      if (t == FH.EDGE_TYPE_EXTEND_LEFT) return new IG(a - h, (r + o) / 2);
      if (t == FH[Iu]) return new IG((a + f) / 2, o + h);
      if (t == FH[wu]) return new IG(f + h, (r + o) / 2)
    }
    var c = ms(t, s);
    if (h = c ? Is(t, i, n, e, s.getStyle(Qq[yu])) : s.getStyle(Qq[xu]), h == Number.NEGATIVE_INFINITY || h == Number[ju]) return new IG(e.x + e[Na] / 2, e.y + e[Ba] / 2);
    if (0 == h) return new IG(n.x + n[Na] / 2, n.y + n[Ba] / 2);
    if (i) {
      var u = n.x + n.right < e.x + e[Zr];
      return new IG(As(u, h, n.x, n.width), n.y + n[Ba] / 2)
    }
    var _ = n.y + n.bottom < e.y + e.bottom;
    return new IG(n.x + n.width / 2, As(_, h, n.y, n[Ba]))
  }

  function ks(t, i, n, e) {
    var s = Math.max(i, e) - Math.min(t, n);
    return s - (i - t + e - n)
  }

  function Ms(t, i) {
    var n = Math.max(t.x + t[Na], i.x + i[Na]) - Math.min(t.x, i.x);
    return n - t.width - i.width
  }

  function Os(t, i) {
    var n = Math.max(t.y + t[Ba], i.y + i.height) - Math.min(t.y, i.y);
    return n - t[Ba] - i[Ba]
  }

  function Is(t, i, n, e, s) {
    var h = Ss(s, i, n, e, null);
    return h * s
  }

  function Ss(t, i, n, e) {
    return i ? js(t, n.x, n[Zr], e.x, e[Zr]) : js(t, n.y, n.bottom, e.y, e[Xr])
  }

  function js(t, i, n, e, s) {
    var h = ks(i, n, e, s),
      r = e + s > i + n;
    if (h > 0) {
      if (1 == t) return h + (s - e) / 2;
      if (t >= 0 && 1 > t) return h;
      if (0 > t) return r ? e - i : n - s
    }
    return Math.abs(r && t > 0 || !r && 0 > t ? n - s : i - e)
  }

  function As(t, i, n, e) {
    return t == i > 0 ? n + e + Math.abs(i) : n - Math.abs(i)
  }

  function Ps(t, i) {
    var n = t[Wh];
    if (!(3 > n)) {
      var e = i[gu](Qq[Au]);
      if (e != FH.EDGE_CORNER_NONE) {
        var s = i[gu](Qq.EDGE_CORNER_RADIUS),
          h = 0,
          r = 0;
        s && (D(s) ? h = r = s : (h = s.x || 0, r = s.y || 0));
        for (var a, o, f, c, u = t[0], _ = t[1], d = null, l = 2; n > l; l++) {
          var v = t[l],
            b = _.x - u.x,
            g = _.y - u.y,
            p = v.x - _.x,
            m = v.y - _.y,
            E = !b || b > -WH && WH > b,
            w = !g || g > -WH && WH > g,
            T = !p || p > -WH && WH > p,
            k = !m || m > -WH && WH > m,
            M = w;
          (E && k || w && T) && (M ? (a = Math.min(2 == l ? Math.abs(b) : Math.abs(b) / 2, h), o = Math.min(l == n - 1 ? Math.abs(m) : Math.abs(m) / 2, r), f = new IG(_.x - (b > 0 ? a : -a), _.y), c = new IG(_.x, _.y + (m > 0 ? o : -o))) : (a = Math.min(l == n - 1 ? Math.abs(p) : Math.abs(p) / 2, h), o = Math.min(2 == l ? Math.abs(g) : Math.abs(g) / 2, r), f = new IG(_.x, _.y - (g > 0 ? o : -o)), c = new IG(_.x + (p > 0 ? a : -a), _.y)), x(t, _), l--, n--, (f.x != u.x || f.y != u.y) && (y(t, f, l), l++, n++), e == FH[Pu] ? (y(t, c, l), l++, n++) : e == FH[Lu] && (y(t, [_, c], l), l++, n++)), u = _, _ = v
        }
        null != d && c.x == _.x && c.y == _.y && x(t, _)
      }
    }
  }

  function Ls(t, i, n, e, s, h) {
    var r = h[gu](Qq[Cu]),
      a = null == r;
    if (null != r) {
      var o = (new PG)[Ru](i)[Ru](n);
      o.intersects(r) || (s = Cs(r.x, r.y, o.y, o.x, o.bottom, o[Zr]))
    } else r = Ts(t, s, i, n, h);
    s ? Ns(i, n, r, e, a) : Ds(i, n, r, e, a)
  }

  function Cs(t, i, n, e, s, h) {
    return n > i && n - i > e - t && n - i > t - h || i > s && i - s > e - t && i - s > t - h ? !1 : !0
  }

  function Rs(t, i, n) {
    return i >= t.x && i <= t[Zr] && n >= t.y && n <= t[Xr]
  }

  function Ds(t, i, n, e, s) {
    var h = Math.max(t.y, i.y),
      r = Math.min(t.y + t[Ba], i.y + i[Ba]),
      a = null != n ? n.y : r + (h - r) / 2,
      o = t.x + t[Na] / 2,
      f = i.x + i[Na] / 2;
    if (0 == s && null != n && (n.x >= t.x && n.x <= t.x + t[Na] && (o = n.x), n.x >= i.x && n.x <= i.x + i.width && (f = n.x)), Rs(i, o, a) || Rs(t, o, a) || e.push(new IG(o, a)), Rs(i, f, a) || Rs(t, f, a) || e[ir](new IG(f, a)), 0 == e[Wh])
      if (null != n) Rs(i, n.x, a) || Rs(t, n.x, a) || e[ir](new IG(n.x, a));
      else {
        var c = Math.max(t.x, i.x),
          u = Math.min(t.x + t[Na], i.x + i[Na]);
        e.push(new IG(c + (u - c) / 2, a))
      }
  }

  function Ns(t, i, n, e, s) {
    var h = Math.max(t.x, i.x),
      r = Math.min(t.x + t[Na], i.x + i[Na]),
      a = null != n ? n.x : r + (h - r) / 2,
      o = t.y + t.height / 2,
      f = i.y + i[Ba] / 2;
    if (0 == s && null != n && (n.y >= t.y && n.y <= t.y + t[Ba] && (o = n.y), n.y >= i.y && n.y <= i.y + i.height && (f = n.y)), Rs(i, a, o) || Rs(t, a, o) || e[ir](new IG(a, o)), Rs(i, a, f) || Rs(t, a, f) || e[ir](new IG(a, f)), 0 == e.length)
      if (null != n) Rs(i, a, n.y) || Rs(t, a, n.y) || e.push(new IG(a, n.y));
      else {
        var c = Math.max(t.y, i.y),
          u = Math.min(t.y + t.height, i.y + i.height);
        e[ir](new IG(a, c + (u - c) / 2))
      }
  }

  function Bs(t, i, n, e) {
    var s = i.x + i.width < t.x,
      h = t.x + t[Na] < i.x,
      r = s ? t.x : t.x + t.width,
      a = t.y + t[Ba] / 2,
      o = h ? i.x : i.x + i[Na],
      f = i.y + i[Ba] / 2,
      c = e,
      u = s ? -c : c,
      _ = new IG(r + u, a);
    u = h ? -c : c;
    var d = new IG(o + u, f);
    if (s == h) {
      var l = s ? Math.min(r, o) - e : Math.max(r, o) + e;
      n[ir](new IG(l, a)), n[ir](new IG(l, f))
    } else if (_.x < d.x == s) {
      var v = a + (f - a) / 2;
      n[ir](_), n[ir](new IG(_.x, v)), n.push(new IG(d.x, v)), n[ir](d)
    } else n[ir](_), n[ir](d)
  }

  function $s(t, i, n, e) {
    var s = i.y + i[Ba] < t.y,
      h = t.y + t[Ba] < i.y,
      r = t.x + t[Na] / 2,
      a = s ? t.y : t.y + t.height,
      o = i.x + i.width / 2,
      f = h ? i.y : i.y + i[Ba],
      c = e,
      u = s ? -c : c,
      _ = new IG(r, a + u);
    u = h ? -c : c;
    var d = new IG(o, f + u);
    if (s == h) {
      var l = s ? Math.min(a, f) - e : Math.max(a, f) + e;
      n[ir](new IG(r, l)), n[ir](new IG(o, l))
    } else if (_.y < d.y == s) {
      var v = r + (o - r) / 2;
      n[ir](_), n[ir](new IG(v, _.y)), n.push(new IG(v, d.y)), n[ir](d)
    } else n.push(_), n.push(d)
  }

  function Fs(t) {
    return t == FH.EDGE_TYPE_ORTHOGONAL || t == FH[mu] || t == FH.EDGE_TYPE_HORIZONTAL_VERTICAL || t == FH[ku] || t == FH[Mu] || t == FH[Ou] || t == FH.EDGE_TYPE_EXTEND_LEFT || t == FH[Iu] || t == FH.EDGE_TYPE_EXTEND_RIGHT || t == FH[Du] || t == FH.EDGE_TYPE_ELBOW_HORIZONTAL || t == FH[Tu]
  }

  function zs(t, i) {
    var n, e;
    i && i[Na] && i[Ba] ? (n = i[Na], e = i[Ba]) : n = e = isNaN(i) ? TG[Nu] : i;
    var s = Xq[Bu](t, -n, -e / 2, n, e);
    return s || (s = new wY, s.moveTo(-n, -e / 2), s.lineTo(0, 0), s[Nc](-n, e / 2)), s
  }

  function Gs(t, i) {
    var n = Math.sin(i),
      e = Math.cos(i),
      s = t.x,
      h = t.y;
    return t.x = s * e - h * n, t.y = s * n + h * e, t
  }

  function Hs(t, i, n, e, s, h) {
    var r = Math[Ur](e - i, n - t),
      a = new IG(s, h);
    return a[ko] = r, Gs(a, r), a.x += t, a.y += i, a
  }

  function Ys(t, i, e, s, h) {
    i = si(s, i.x, i.y, e.x, e.y), e = si(h, e.x, e.y, i.x, i.y);
    var r = Math.PI / 2 + Math[Ur](e.y - i.y, e.x - i.x),
      a = t * Math.cos(r),
      o = t * Math.sin(r),
      f = e.x - i.x,
      c = e.y - i.y,
      u = i.x + .25 * f,
      _ = i.y + .25 * c,
      d = i.x + .75 * f,
      l = i.y + .75 * c;
    return [new mY(yY, [u + a, _ + o, d + a, l + o, n, n])]
  }

  function qs(t, i, e) {
    if (y(t, new mY(vY, [i.x, i.y]), 0), e) {
      if (t[Wh] > 1) {
        var s = t[t[Wh] - 1];
        if (gY == s.type && (s[Yo] || s.points[2] === n || null === s[Ta][2])) return s[Ta][2] = e.x, s.points[3] = e.y, void(s.invalidTerminal = !0);
        if (yY == s[To] && (s[Yo] || s[Ta][4] === n || null === s[Ta][4])) return s[Ta][4] = e.x, s[Ta][5] = e.y, void(s[Yo] = !0)
      }
      t[ir](new mY(bY, [e.x, e.y]))
    }
  }

  function Ws(t, i, n, e, s, h, r, a) {
    return i[$u]() ? void(n._gg = i._8u[Fu]()) : e == s ? void t[zu](n, e, h, r) : void t.drawEdge(n, e, s, h, r, a)
  }

  function Us(t, i, n, e, s) {
    var h = e == s,
      r = t[Gu][Hu](e),
      a = h ? r : t[Gu][Hu](s);
    if (r && a) {
      var o = i[Yu],
        f = r[qu][tr](),
        c = h ? f : a[qu].clone(),
        u = t[gu](Qq[Wu]),
        _ = t.getStyle(Qq[Uu]);
      u && (f.x += u.x || 0, f.y += u.y || 0), _ && (c.x += _.x || 0, c.y += _.y || 0);
      var d = i[$u]();
      if (!h && !o && !d) {
        var l = e[eu],
          v = s.busLayout;
        if (l != v) {
          var b, g, y, x, p = i[Vu];
          l ? (b = r, g = f, y = a, x = c) : (b = a, g = c, y = r, x = f);
          var m = Qs(g, b, l, y, x, p);
          if (m && 2 == m.length) {
            var E = m[0],
              w = m[1];
            return n[Dc](E.x, E.y), w.x == E.x && w.y == E.y && (w.y += .01), n[Nc](w.x, w.y), void(n._62 = !0)
          }
        }
      }
      Ws(t, i, n, r, a, o, f, c), (!h || d) && Vs(t, i, n, r, a, o, f, c), n._62 = !0
    }
  }

  function Vs(t, i, e, s, h, r, a, o) {
    var f = a[Xu],
      c = o[Xu],
      u = t[Zu],
      _ = t[Ku];
    if (!u && !_) return void qs(e._gg, f, c);
    var d = e._gg;
    if (d.length) {
      if (u) {
        var l = d[0],
          v = l.firstPoint;
        a[Ju](v.x, v.y) && (l.type == yY ? (f = v, v = {
          x: l.points[2],
          y: l[Ta][3]
        }, l[Ta] = l.points[Xh](2), l[To] = gY) : l[To] == gY && (f = v, v = {
          x: l[Ta][0],
          y: l[Ta][1]
        }, l[Ta] = l[Ta][Xh](2), l[To] = bY)), Xs(s, a, v, f, n, n)
      }
      if (_) {
        var b, g = d[d.length - 1],
          y = g[wo],
          x = g[Ta][Wh],
          p = y.x === n || y.y === n;
        x >= 4 && (p || o[Ju](y.x, y.y)) && (p || (c = y), b = !0, y = {
          x: g.points[x - 4],
          y: g.points[x - 3]
        }, o[Ju](y.x, y.y) && (c = y, x >= 6 ? (y = {
          x: g[Ta][x - 6],
          y: g.points[x - 5]
        }, g.points = g.points[Xh](0, 4), g.type = gY) : 1 == d[Wh] ? (y = {
          x: f.x,
          y: f.y
        }, g.points = g[Ta][Xh](0, 2), g[To] = bY) : (g = d[d[Wh] - 2], y = g.lastPoint))), Xs(h, o, y, c, n, n), b && (x = g[Ta][Wh], g.points[x - 2] = c.x, g[Ta][x - 1] = c.y, c = null)
      }
    } else {
      var m = Math[Ur](c.y - f.y, c.x - f.x),
        E = Math.cos(m),
        w = Math.sin(m);
      u && Xs(s, a, c, f, E, w), _ && Xs(h, o, f, c, -E, -w)
    }
    qs(e._gg, f, c)
  }

  function Xs(t, i, e, s, h, r) {
    if (h === n) {
      var a = Math[Ur](e.y - s.y, e.x - s.x);
      h = Math.cos(a), r = Math.sin(a)
    }
    for (e = {
        x: e.x,
        y: e.y
      }, i[Ju](e.x, e.y) || (e = si(i, s.x, s.y, e.x, e.y));;) {
      if (!i[Ju](e.x, e.y)) return s;
      if (t[Qu](e.x - h, e.y - r, TG[t_])) {
        s.x = e.x - h / 2, s.y = e.y - r / 2;
        break
      }
      e.x -= h, e.y -= r
    }
    return s
  }

  function Zs(t, i, n, e, s, h, r, a) {
    if (i[$u]()) return i._8u;
    var o = i[Yu];
    if (Fs(o)) {
      var f = ys(o, n, e, t, s, h);
      if (!f || !f[Wh]) return null;
      y(f, r, 0), f[ir](a), o != FH[Du] && Ps(f, t);
      for (var c = [], u = f[Wh], _ = 1; u - 1 > _; _++) {
        var d = f[_];
        c.push($(d) ? new mY(gY, [d[0].x, d[0].y, d[1].x, d[1].y]) : new mY(bY, [d.x, d.y]))
      }
      return c
    }
    if (i[i_]) {
      var l = t._1y();
      if (!l) return;
      return Ys(l, r, a, n, e)
    }
  }

  function Ks(t, i, n) {
    var e = t.getStyle(Qq[n_]),
      s = t._1y(),
      h = e + .2 * s,
      r = i.x + i[Na] - h,
      a = i.y,
      o = i.x + i[Na],
      f = i.y + h;
    e += s;
    var c = .707,
      u = -.707,
      _ = i.x + i[Na],
      d = i.y,
      l = _ + c * e,
      v = d + u * e,
      b = {
        x: r,
        y: a
      },
      g = {
        x: l,
        y: v
      },
      y = {
        x: o,
        y: f
      },
      x = b.x,
      p = g.x,
      m = y.x,
      E = b.y,
      w = g.y,
      T = y.y,
      k = ((T - E) * (w * w - E * E + p * p - x * x) + (w - E) * (E * E - T * T + x * x - m * m)) / (2 * (p - x) * (T - E) - 2 * (m - x) * (w - E)),
      M = ((m - x) * (p * p - x * x + w * w - E * E) + (p - x) * (x * x - m * m + E * E - T * T)) / (2 * (w - E) * (m - x) - 2 * (T - E) * (p - x)),
      h = Math[uo]((x - k) * (x - k) + (E - M) * (E - M)),
      O = Math[Ur](b.y - M, b.x - k),
      I = Math[Ur](y.y - M, y.x - k),
      S = I - O;
    return 0 > S && (S += 2 * Math.PI), Js(k, M, O, S, h, h, !0, n)
  }

  function Js(t, i, n, e, s, h, r, a) {
    var o, f, c, u, _, d, l, v, b, g, y;
    if (Math.abs(e) > 2 * Math.PI && (e = 2 * Math.PI), _ = Math[Jh](Math.abs(e) / (Math.PI / 4)), o = e / _, f = o, c = n, _ > 0) {
      d = t + Math.cos(c) * s, l = i + Math.sin(c) * h, moveTo ? a.moveTo(d, l) : a[Nc](d, l);
      for (var x = 0; _ > x; x++) c += f, u = c - f / 2, v = t + Math.cos(c) * s, b = i + Math.sin(c) * h, g = t + Math.cos(u) * (s / Math.cos(f / 2)), y = i + Math.sin(u) * (h / Math.cos(f / 2)), a.quadTo(g, y, v, b)
    }
  }

  function Qs(t, i, e, s, h, r) {
    var a = h.cx,
      o = h.cy,
      f = a < t.x,
      c = a > t[Zr],
      u = o < t.y,
      _ = o > t[Xr],
      d = t.cx,
      l = t.cy,
      v = f || c,
      b = u || _,
      g = r === n || null === r;
    g && (r = Math.atan2(o - l, a - d), v || b || (r += Math.PI));
    var y = Math.cos(r),
      x = Math.sin(r),
      p = ih(i, t, {
        x: a,
        y: o
      }, -y, -x);
    p || (r = Math[Ur](o - l, a - d), v || b || (r += Math.PI), y = Math.cos(r), x = Math.sin(r), p = ih(i, t, {
      x: a,
      y: o
    }, -y, -x) || {
      x: d,
      y: l
    });
    var m = ih(s, h, {
      x: p.x,
      y: p.y
    }, -p.perX || y, -p[e_] || x, !1) || {
      x: a,
      y: o
    };
    return e ? [p, m] : [m, p]
  }

  function th(t, i, n, e, s, h) {
    var r = i < t.x,
      a = i > t.right,
      o = n < t.y,
      f = n > t.bottom;
    if (r && e > 0) {
      var c = t.x - i,
        u = n + c * s / e;
      if (u >= t.y && u <= t[Xr]) return {
        x: t.x,
        y: u,
        perX: e,
        perY: s
      }
    }
    if (a && 0 > e) {
      var c = t[Zr] - i,
        u = n + c * s / e;
      if (u >= t.y && u <= t.bottom) return {
        x: t[Zr],
        y: u,
        perX: e,
        perY: s
      }
    }
    if (o && s > 0) {
      var _ = t.y - n,
        d = i + _ * e / s;
      if (d >= t.x && d <= t[Zr]) return {
        x: d,
        y: t.y,
        perX: e,
        perY: s
      }
    }
    if (f && 0 > s) {
      var _ = t[Xr] - n,
        d = i + _ * e / s;
      if (d >= t.x && d <= t.right) return {
        x: d,
        y: t[Xr],
        perX: e,
        perY: s
      }
    }
    return h !== !1 ? th(t, i, n, -e, -s, !1) : void 0
  }

  function ih(t, i, n, e, s, h) {
    if (!i.contains(n.x, n.y)) {
      if (n = th(i, n.x, n.y, e, s, h), !n) return;
      return nh(t, i, n, n[s_], n.perY)
    }
    return h === !1 ? nh(t, i, n, e, s) : nh(t, i, {
      x: n.x,
      y: n.y,
      perX: e,
      perY: s
    }, e, s) || nh(t, i, n, -e, -s)
  }

  function nh(t, i, n, e, s) {
    for (;;) {
      if (!i[Ju](n.x, n.y)) return;
      if (t[Qu](n.x + e, n.y + s)) break;
      n.x += e, n.y += s
    }
    return n
  }

  function eh(t) {
    return pn(t) ? t : t.match(/.(gif|jpg|jpeg|png)$/gi) ? t : (t = J(t), t instanceof Object && t.draw ? t : void 0)
  }

  function sh(t) {
    for (var i = t.parent; i;) {
      if (i[h_]) return i;
      i = i[pc]
    }
    return null
  }

  function hh() {
    w(this, hh, arguments)
  }

  function rh(t, n, e, s, h, r, a) {
    var o = i[r_](a_);
    o[xc] = o_, li(o, gW), n && li(o, n);
    var f = i[r_](f_);
    return r && (EG && (f[c_] = r), dH || (f.onclick = r)), f[Co] = a, f.src = e, li(f, yW), h && li(f, h), s && bi(f, u_, __), o[d_] = f, o.appendChild(f), t[yc](o), o
  }

  function ah(t, n) {
    this[l_] = i[r_](a_), this[l_].className = v_, li(this._navPane, {
      "background-color": b_,
      overflow: g_,
      "user-select": y_,
      position: x_
    }), this._top = rh(this[l_], {
      width: p_
    }, TG[m_], !1, null, n, E_), this[w_] = rh(this[l_], {
      height: p_
    }, TG.NAVIGATION_IMAGE_LEFT, !1, xW, n, xa), this._right = rh(this._navPane, {
      height: p_,
      right: T_
    }, TG[k_], !0, xW, n, Zr), this[M_] = rh(this[l_], {
      width: p_,
      bottom: T_
    }, TG.NAVIGATION_IMAGE_TOP, !0, null, n, Xr), t[yc](this[l_])
  }

  function oh(t, i) {
    if (!TG[k_]) {
      var n = Pi(20, 40),
        e = n.g;
      e[io](e[za], e.ratio), e[Dc](16, 4), e[Nc](4, 20), e[Nc](16, 36), e[O_] = 3, e[I_] = xo, e[S_] = xo, e[j_] = A_, e[P_] = L_, e.shadowBlur = 5, e[C_](), TG.NAVIGATION_IMAGE_LEFT = n[R_]();
      var s = Pi(n[Ba], n.width, !1);
      s.g[to](s[Na], 0), s.g[ko](Math.PI / 2), s.g[D_](n, 0, 0), TG.NAVIGATION_IMAGE_TOP = s[R_]()
    }
    this[lc] = t;
    var h = function (i) {
      G(i);
      var n, e, s = i[fu],
        h = s.name;
      if (xa == h) n = 1;
      else if (Zr == h) n = -1;
      else if (E_ == h) e = 1;
      else {
        if (Xr != h) return;
        e = -1
      }
      EG && (s[xc] = N_, setTimeout(function () {
        s[xc] = ""
      }, 100)), G(i), t._kn._9g(n, e)
    };
    ah.call(this, i, h), this._38(i.clientWidth, i[B_])
  }

  function fh(t, i) {
    this._n7aseCanvas = t, this.init(i, t)
  }

  function ch() {
    w(this, ch, arguments)
  }

  function uh(t, i) {
    this[lc] = t, this._j1 = oe(i), this.g = this._j1.g, this._9o = new kG
  }

  function _h(t) {
    var i = t[$_],
      n = [];
    return t[F_][Vf](function (i) {
      t[z_](i) && t[G_](i) && n[ir](i)
    }), i.set(n)
  }

  function dh(t, i, n) {
    var e = t.bounds;
    n = n || e, i = i || 1;
    var s = null;
    s && n[Na] * n[Ba] * i * i > s && (i = Math[uo](s / n.width / n.height));
    var h = Pi();
    Vn(h.g), h[Na] = n.width * i, h.height = n.height * i, t._8j._h8(h.g, i, n);
    var r = null;
    try {
      r = h[R_](H_)
    } catch (a) {
      $H.error(a)
    }
    return {
      canvas: h,
      data: r,
      width: h.width,
      height: h[Ba]
    }
  }

  function lh(t) {
    this[Gu] = t, this[Y_] = t[Y_]
  }

  function vh(t, i) {
    this[q_] = t, this[W_] = i || U_
  }

  function bh() {
    w(this, bh, arguments)
  }

  function gh(t, i) {
    if (!t) return i;
    var e = {};
    for (var s in t) e[s] = t[s];
    for (var s in i) e[s] === n && (e[s] = i[s]);
    return e
  }

  function yh() {
    w(this, yh, arguments)
  }

  function xh() {
    w(this, xh, arguments)
  }

  function ph() {
    w(this, ph, arguments)
  }

  function mh() {
    w(this, mh, arguments)
  }

  function Eh(i, n, e) {
    i += t[ba], n += t[ga];
    var s = e[la]();
    return {
      x: i + s.left,
      y: n + s.top
    }
  }

  function wh(t, i, n) {
    var e = t.offsetWidth,
      s = t.offsetHeight;
    t.style[xa] = i - e / 2 + Ga, t[aa].top = n - s / 2 + Ga
  }

  function Th(t) {
    var n = i[r_](Va),
      e = n[Ro](Xa),
      s = getComputedStyle(t, null),
      h = s[no];
    h || (h = s[V_] + Er + s[X_] + Er + s[Z_]), e.font = h;
    var r = t[vr],
      a = r.split(ro),
      o = parseInt(s.fontSize),
      f = 0,
      c = 0;
    return $H[Vf](a, function (t) {
      var i = e[K_](t)[Na];
      i > f && (f = i), c += 1.2 * o
    }), {
      width: f,
      height: c
    }
  }

  function kh(t, n) {
    if (Tr == typeof t[J_] && Tr == typeof t.selectionEnd) {
      var e = t[vr],
        s = t[J_];
      t.value = e[Xh](0, s) + n + e[Xh](t[Q_]), t[Q_] = t[J_] = s + n.length
    } else if (td != typeof i[id]) {
      var h = i.selection[nd]();
      h.text = n, h.collapse(!1), h[ed]()
    }
  }

  function Mh(i) {
    if (cG) {
      var n = t[sd] || t[ba],
        e = t.scrollY || t[ga];
      return i[ed](), void t.scrollTo(n, e)
    }
    i.select()
  }

  function Oh() {}

  function Ih(t) {
    this.graph = t, this[Y_] = t[Y_], this.handlerSize = EG ? 8 : 5
  }

  function Sh(t) {
    return t[To] == gY || t[To] == yY
  }

  function jh(t) {
    this[Gu] = t, this[Y_] = t.topCanvas, this[hd] = EG ? 8 : 4, this[rd] = EG ? 30 : 20
  }

  function Ah(t, i) {
    var n = new PG;
    return n[Fa](zn[Uh](t, {
      x: i.x,
      y: i.y
    })), n[Fa](zn[Uh](t, {
      x: i.x + i[Na],
      y: i.y
    })), n.addPoint(zn.call(t, {
      x: i.x + i.width,
      y: i.y + i.height
    })), n[Fa](zn[Uh](t, {
      x: i.x,
      y: i.y + i[Ba]
    })), n
  }

  function Ph(t) {
    t %= 2 * Math.PI;
    var i = Math.round(t / EW);
    return 0 == i || 4 == i ? "ew-resize" : 1 == i || 5 == i ? "nwse-resize" : 2 == i || 6 == i ? "ns-resize" : ad
  }

  function Lh() {}

  function Ch(n, e, s) {
    var h = i[od],
      r = new PG(t.pageXOffset, t[ga], h[fd] - 2, h.clientHeight - 2),
      a = n[cd],
      o = n.offsetHeight;
    e + a > r.x + r[Na] && (e = r.x + r[Na] - a), s + o > r.y + r.height && (s = r.y + r[Ba] - o), e < r.x && (e = r.x), s < r.y && (s = r.y), n.style[xa] = e + Ga, n.style.top = s + Ga
  }

  function Rh(t, i, n, e, s) {
    this[zo] = t, this[To] = ud, this.kind = i, this.event = n, this[mo] = e, this[_d] = s
  }

  function Dh(t) {
    this._49 = {}, this._kn = t, this._kn._1e[dd](this._92, this), this.currentMode = FH.INTERACTION_MODE_DEFAULT
  }

  function Nh(t) {
    return t >= 100 && 200 > t
  }

  function Bh(t) {
    return t == BW || t == WW || t == qW || t == zW || t == XW || t == ZW
  }

  function $h() {
    var t, i, n = {},
      e = [],
      s = 0,
      h = {},
      r = 0;
    this.graph.forEach(function (a) {
      if (this[ld](a))
        if (a instanceof Uq) {
          var o = {
            node: a,
            id: a.id,
            x: a.x,
            y: a.y
          };
          for (this[vd] && this[vd](a, o), n[a.id] = o, e.push(o), s++, i = a[pc]; i instanceof Zq;) {
            t || (t = {});
            var f = t[i.id];
            f || (f = t[i.id] = {
              id: i.id,
              children: []
            }), f[Vh][ir](o), i = i[pc]
          }
        } else if (a instanceof Wq && !a[Lc]() && a.fromAgent && a[mc]) {
        var o = {
          edge: a
        };
        h[a.id] = o, r++
      }
    }, this);
    var a = {};
    for (var o in h) {
      var f = h[o],
        c = f[bd],
        u = c.fromAgent,
        _ = c[mc],
        d = u.id + sa + _.id,
        l = _.id + sa + u.id;
      if (n[u.id] && n[_.id] && !a[d] && !a[l]) {
        var v = n[u.id],
          b = n[_.id];
        f[gd] = v, f.to = b, a[d] = f, this.appendEdgeInfo && this.appendEdgeInfo(c, f)
      } else delete h[o], r--
    }
    return {
      groups: t,
      nodesArray: e,
      nodes: n,
      nodeCount: s,
      edges: h,
      edgeCount: r,
      minEnergy: this[yd](s, r)
    }
  }

  function Fh(t) {
    this[Gu] = t, this[xd] = {}
  }

  function zh() {
    w(this, zh, arguments)
  }

  function Gh(t, i, n, e, s) {
    e ? t[Cc](function (e) {
      var h = e[pd](t);
      h != n && h._marker != s && i(h, t)
    }, this, !0) : t[md](function (e) {
      var h = e[mc];
      h != n && h[Ed] != s && i(h, t)
    })
  }
  var Hh = "e5b093dbbe0be7f651d472378b7deef5d4290d8239db80cdcfd911a828a179ed3f723923abfbd0b551883e929c4a43584a87d01daa0c0791eccb2d241e4768af171c0f493a9dc78aa367e47ea6e8e1a43a1499d25866561ac9c95e60d8145736778d7e21c71daceca4512765411a23962dbc2b70eee35781bd59bf937c23c30d1d084d6034c7199eb4a29df2f8e1a6cb601b850f60fdf59d5d8a80f72f03e6c128b067924e9c5b354e5936f9804668437d43d0f411f3e039863eb1bf040e5f69221aa99a2cbd76d97c28fbf8e47e0634638a2912a2c6b1dff2cf6f0f7ba6836c5422125f8767317cba5441b8e3b3ad37740fc61887cb8a2be7c70842a0ff7ac5032bb87553612e1909f6d271da85292ad43cc788d8e6560f7baa8ee04c68bea035680ad6b12a5a8c463de390670c8cc6287fafafdb5f6d5518c3f021ea1f581f5118eb76e8b658c042cb8e991fc1de3a8b2e68793639a062260978a05cb5991e5cbafd8acc3f6a763a4e66f0100cc7d29a82f9501812bb6099c4835ff83fbf5a28dce1496b8275e1cbef12bc5c22e4e993afa53c8898a22b7fcbeea5113f82ab8887b01423ee2be5a58fcd77e8e04853c9d11f4859aa6eafa036c421b58feff19d629fea7462bdac83bc704dbdc53e2af0bd63e1cbf921b3dc02dcb9974a4cf35159a564165c63be3eb53af14b4e6415f7ab8c1aed9f89d6935bc3b87be6624fff6f67430187caecc4c7e14538253f94b135b711c4f04b4dab50b5974d00049e195ca0e9d0a1e5a53b29370b5b1e874439f8c1a62dc872ab44e1d671ea3a03c85b37784ba3ebd40fe63c0b70ba9b4c96eea2f689993a3eb2f11694ff4ffb6ef99b39e68549043b6421bbb76d3cb818662d33d665e6daba4acac191025ecc9214fe0ccd8438a994e5283b97ffb75d8d47b42c6cba3ab5c6a525ecea2ed5ab41627d0a05076308ab5386eb647801bc7d8648e7593ee2f67a81d32df73da3f94712995cb6fe8b53972e837fe54fea37f953e485c648fd88c0254328241aaf2c2be69ba96ed9f8480c535c93ea4141ed829708ef7dd4023676292bf106d569e53cb62289750bdb2bcd24595fe7c6efb7af32c3f29b62df14261073e78eeea4286422e274ac07a92dd5d01e4f611c59da06a635df97b10ddcd9bad84540b3b197134cc5fcae9f6f4a3a127e6e05e2e4999907e85586b5b5de0b767364bac5c170bb4d3e162de5cabe74113aab26538aa2d9a44cb64229ecc01e980ac778b7af3df10c997f32d42cdd9e7977b86817835ee8d59f72642c591e11776a8773531cf3a6313e5d2439934cd79d7ff86a71279ed95bee979aace3e06a4b96eeef00841b01802999bbf47cff3c1031cfae4d492e2c93370de088f0c7b991f8f970b51fc4ca0d2b70b553616371f55fd04c712d4edc0169e4c7ee1c196f533ae8dc0efdbbe1c3d1bdd629eb9ecc3ecc1748bd2604974cc92a8ce4d640b61727e07ee048303452ed0b4090befcbdbb098762ef702970b56618f3b2f55d7e93ccf922b0839e2b11484680a584779d70fc40ac3e1b92cf3755eb7a84e8ab5fcfef6663f3f91c4de8ab371888dcb17faf690b0877181018448280341e9acbd4e877223f63c217b7a0389e4f8bb5a8b833a87904e90e7d020462cc36a2c85d8440abcb26e7df58ae2f2436a55a054950113af12b0ef75ea1c1394ea18d2498680122caa7e61600e1ffaea3661dea3f03f5d00ddcf39d64cd6855faba8d75ef5f087829de18804c4ec40db93ebb44bed80b2d39f1ff39126df38a7fff37fb8af40f81553a971e57ec490a695b0771c8953e5321d5c8f20e6304cf4dfbe1203830b962d2ccad4505269499912d38de597d8a739a96e7e197fc1c1ef048005e0571c40edf97bf62801e6dd9e3d2c22cbaa0a1ff2b501f5caf1ba9d3e6adf514f0297ad9104c7c6516cac5052ca35a4806d978d3b475d35f29a818d82053bcbedfc32ea320de6c4c10084c5e3e5627656dbcf5b030af3885671b2dcea248a08b14cab2f400742777af646dfa73569f0a10a87b4494be1b1f82afe26391a70d10a6aba9ffa1ff148bba97d4a2212d3c6e9826f22b1ddf9f29222c6f99e86a990cddee454e436fe30f260afabe708eed63389798e696856e0402acdf7d71dcf1ec95b45c23a10ecb44a8595282f2a6068403d8c808f3c1faefcd7dd9bf944bcf83d59a9049ff61855c0c1eb24c6aba34263626e54f25a79a33e2792e75d11459bdaf9ac9861150c5e8c2b62d67f0d4286645c39268c5d1dde82acf83d218ff3f5dba9888a718430fdecdc38be66be2876f0b47437d496ea89bbc1396f84858380bf758fe739c1f471ae96935bb2b75aeb23b92105f430b8f52fc667289642af4e830c61ed5f593bb55b2ec39c00635cc66d7723fa6bf6f732f07d09e0f08845ca59d51deda311629debb9897406376ae178704c50310182ee701c2b996a27ce74014bec06b5e0ceb268d88eb79edc741f3bdd64b809c228ae60d69a23daeeb41c29dead0bc0f4eeade6020e91b7aacb9f190b49f24bf0e598cd5278d2d5dd85b914bcdca87c8dc1946692321a08ce8515d1f910a378eb0d5f9076e06c354c1a4b2e479e42ae3ae513093793f3f7a200c120d637c1de4e4a2bf92d6468c6133b25fa48cbaea225b4f6b25b36654ed8a520fdc449dc6ef7737c7508a715ff3cc7af68c3b94b6dbaa21af993ef16ec092c8d5c47c5080ed50679b2e72c915da19c4ab338c9bbbfc8e656f6cada7de017a32b4ba93ea09eb88e9a8b664af04cb8b8e8ddec4de9b773f217f67eeedad1dc7838396e06a144c66d479aafa695cabc7283846fd06277734569ebb00a7e4790fd540c03def12e1a7cc9b2c20df5159cee37e6d316d82a216fc8b6c1bfceb2bde5c397397bc3876d14ff55fa496e2b110286e71d37de2053db4f1e1cc3c98e482e5a79340eb44be39207e66127d0fa7e935fbf3282f014ef565149d53330888d92308a855f0235963cf5f516f50312a8baed29bc203f5f3b681c91d5618b31fe5c257d9edc2a6dbeba2c72ed733ff3b3707be2deb23f229ce60a8eccba40ed66d9c52050b37b316723195b133824d54f3ccfcfabd1fad0d6b6bf9195bc6401b759c6770b25bb8a92b165cd856c36c44fa86e933812e895d62a7fb4f1d89e28f5065d04be4d509c45cad484afa9ddc47e98086908154bb59210cd0ee32974b25c127eb4f5d07cd011da5642a8f7bccbab228d9d3c0b590ee80fd2a8edf529fc84ee0bc87e08ef85d826eae4a73e02b5abe3fd535aec86b95ce5f0af6fe445623b40392f75270e1530106f28c0023aa5c875c6fe7d7cc883418d337da7adb94029e566ad08e8210056021eb5996d52b63e12b17b4f4be0d890d479e70991617cc302aad41b945bf2aa45130da0bdb574666ccd98fc7ae706d5f0b8ff84200a744bbb7547cb67468fac1c97a514257fbbf7d38325333d53fd60e5faf231076a7a1b87aae9d93d2d2cb06b10e06a95fe9cd1b81932d63e02c99ed79b1155a96afd3f5d775606e7442b92ce1a57e237586b5491a76ee355da58bf0cae49170c6ff46eab67e7395f693dff47b25d5927fe125dfafddd55ffa574fd3db660284b491ea0f05dbd582a7583bd3df70be85a17a0ea5eedfcce67439341e594774cd708022fe0287eb6f69d372b9cea1d387dcf67eb0020604ec175fdfeba10f276480d903ada92964c06b4379f967ce757626c503c33150153038510c4b1b9bd9e73c171e8dcbedfb1210245b07e9d615fccc4bb2eed3f44428e06d7ea07e0bef558833755f352bf394e845e1247b385a27625e979d29cd7e73c2d10f9e68c2fb32727a9908d9fb8a7944879a2446732311f65a2eccffec0e1cc0300149797a223afe707df7ebda6f3abac469a919c7a83b4d5795df0795b2f8e634f192b2dab45bc14e99b760d63202ff6a5b8f6fcfa7a2fdc25a655ece97e0f18554b1e5b586897d73746b301357ee15781f89fad6e2a0f087aecb562bbda4a729b093edf0788d19f44104c2c3182469b46b539cad32bfdb52b66a9ea5e8b922ecd436220c96cb5b855fe1ed15ebc1853a6fb827ab560bbdd9ae65d98b39f2267a0ab4983d13d65d387dbfbaffbd06a85ceebe78e95fc4cbfb9f404264323990e40b8aa01d4ef84440954a8518152c79638258fa78c696e98da4cdbe540f4666764c08bb534dc76a08e07420176ee6deaed0e95c2f75543aaf163852a04c3f230e12f551753810641fd736f83bf47dbaa553b26eafc222e4d37809802d0fa7e371c0f327a67a9bed2ddc3773085abc3d681fd8155baf907bafd172e5f661ae2ff9d54c5f3201c752eb817c824f3e0e9dd1df88622e1dbe2fd1e6c14cfc54c08405fb2ba88c709bde39cf5a21f773c255bc93ab3a810849c72a56cf9af34f37041a617b28f683c57ae108163b4cafce5f92f742a5906593c79b7e4035caebf371b23a6b3be4806776efa6eb89d35efe71039d1e8d539c622cc6528fcf07ea47ebf6e31c0dd57949f8fc42e78b0c34246a11276d26f87192980929d0d195a04ded27455839551420f4db698592089ced2b78612abe95d1e98ef4d05573367959bf4c11c191a30264079b9935ec979065d2518b6cd2f241b21a24d683b6505115353cc97307f762697c3c4e8f592dd3a9e6c998374650774891cc9cc4b7948e1bf005492055e88508c85fc1fc11d8a864cad01bd163bf82a49e9921e5bcebc5be09378f87b6e739ddef26c2ab92fb6e60ef207d30983f91496a48cf52f28c433f42efff153fdcc5fcedb9c8079103f7b07098987d247782085e47c2eaa3f71f991b2dca4694a149d20efb32d4bfefe9655c9d6ebba449d4722bbda24eabcf4b73660cf650721c49318d6b32ea8965ccf57233eb259a7163d20b91af39406e7d007681928051151f05e160b694266a1b449e744b04217343d8a0e69ed260b5424446f0e341b864da92575c7f63d2b95ecd23367ccdc98f92d86a9a47dd62fa262f16c8eb57809cee1b89b476fdbcffa996b4756553f53e5f444fad65025ac948bfc2acd8f5df07fc5076895a7457dfea2f1be7d0f6383601efd7ea0d9b8bd10d406641469bceb8b7040acc99742b6777b1b55bc28c74d9f200fe2372d264986e5892ee573ec16c0dc435854182155420f98d23479ba36f4bfe750368b37c36c416f98c13424eaa13f194348a562425014a29c22af82d606e13d0d7c2b2f41226165ea97310f2353a70bf61f3e75a90b6d558a871687572900e776176b2398d412dc905eeaaec20029f9a3487585b6d9b043268404109724991b132a5565c8c17693d48ea4e1cd65d405cfa680ac1a816556d9343b056bca4c42f7ec7ad429679eedd275e4d507c6bc99209e442d4a11952bdbf46fb40b434a6b5d1b0f20988e3128ce083bdf4b2caaa30e7cb250e3d33a2eecd8217a514d8a26d58a66735d06ea5323a0a45f6eef0c9d790ae0c3856b353807a7eefece115b543178ce94dd14500dfa2b96330ab3798f11c946ccc68392bd1f554544defcd587dd223d70ca4dc388c62da497b3e19f5ac906cf2eb493a7e1d450f8d1a9ae3db5e3ebae3ab2714f67bc0b04039b1baffbbe76a62aea4edbaea603c1d50c19c4e25bd7b01418e031373cb264929b190504d9dbad0d298b87214229c99b9d3776c0c0bc7814abf8d303df14c0d24000d47c970f4e5f15821d2b8f879d1f28dcb010c1bd66efc496894887ce8a234bb1d5f0a12138088c648218e624bdaee8af44c40123dc20e9e9574e7b96109a8b96d090f0108324923078a75d3b345706db77de5c1992f0a78b8ec289b1340577468ecc0c1d0dc6d5eda7fa0c4c5f92b97cf33f80c92aaebfc43ee2828297951ea8c50853dd64ecf1b99e64c352aba1ca5bf6a3dc85cc74f32999c4417bc5dd3c4699d4472d9d231bbeadd25d5b9c66dd4d6159f2c9316a68044ac85530e7dde39e61261c15d98c0151b29088ac62e00551997dd4365f729dd0db8f4b8f671ff6119541a6926ccb3aee9917ac1a1e7161dcacdcdaeac9dec6a9daf790229708054e8c1a6865890ea678d38e3fc004c614894d23e6fd9100968edfe65a29ccb61bd6e614307ae6fe7300e93d8c27c41c907d6f1c554521e4c8759b6b80b5e965d977238e9d2e4290d19d8d7d0e4e5315027361863521fe311cfc0456b153c5315c47c0c378bdadfae6eccdc54afad43aaafe0ae34f7b6335f370716a3648e3111f3c51961004cd691c14cd8de0205604b85dbe370cfa0c60ade66577c8e8c109075a9398284127703c86c33ad16137aa83900c2e42271c55095484c0485457097d8b0ec80436a5c38c5140cb4c612cc042afc942587dc3a1e38e6687d01d7107dbe9ffb1461441c3141e0faab92844af043683acf5debafc91837f2cbb4eb06141badcd65998a86b39595363c35cfe4f7fbbbb7647d0ad3f80ca6674c312cfcf398369276a1b0f8ceee4ad70ad7649e18463449430441fa13efd6db70de180de57548c12cf53708a1af4b309fcc8e9eb0fb597db146e5bb09717c99f35590e254b607f3c661961e791f454020038f8ce1bb0bd9b58ab98e2f3e49c7c47416238f9e756612e48a1e85a2d669a89ec8293b05b063743e3544a79e011c26860a225fdc7144ec6543a14fb3330d31197c13c4268bc238a815fbea3e791a23cbd939f56aaa3e1135a0a24c1d29aaeae4bf4e52836c1a9acb84afafad316f93117c4ff167d8a5e2149fd5b3face112da65608162f0236a2b288424424922cbdb1a0ec0e8991baee10a6ffa5662317cc668f55cbf644ef4cf4f74cf4b94cc0b1f5bac5301a19d6bf833e9c7127a1b4f0617869c90d2ba60c83c351267db27d172767c20e5442fc53d02aecb92ebdffeafba3d21c5afbe08720abccf59b3eeb090d869a30ceb97ebd0c56e84f81d1312182c02b6dfd0cd2164f0ad28315987e50f134ec228d0f93914a4509617dbf2ea99f2ed6aeeb7e5c95ebce31532f575953df2b114f3559dee22293189c6949cbca736a4ec8908eac1d1f604f13e56263134d9fd9b807d7970a233fd4a7c506fe1dfef3dc163950899bb93824f37eb292758d1304ce8074f591a920eeec82e8ae9a66952f9348c1254ddbbe233bed5144452ffa21ea39d8b1e429899f0dec7e01c6d65ad54efcd67fc75a6cd7a734540d199c56a076edb06c95b5cd3f798c2e62cba00bcb835656f8a1809eec0ce40318dc858f14db4b0a5b223edfecc5bb7ebbf565521bd889b0e285fe12f76726a2ced37132abd51e072f82061ac7f53afcda24027ecee6214d0a6ef1232431e0799ae303fd2cda72136f303ce1c9af30644f68dd328f6632cdd56682926b49240b709609aef092826a5fa17ca6c836a6eb3eaaedddb9df51d25a90870c984497ef932bc892ca7839672552e44a7a70b7cdd24aeda2055a8e61799d92d1caff389e9841909f948c49854470ec6390e02bc46dc27782007eef2d517e6a712609771a2e61ffde899457505593ef66a74b9e4ba6747dc2c1e72dea28655d9f7e1fdfe0ff302bf7a4baed8cf7484c88c00757a3e8f86c14e1f3116231942eaf983213c4f3a05225ff4aa461cce536f8885199f3d18389ae4e302748a77464110fef93fe806bb7608a7ad56d3ebecd0d97fa358674e6d907389f949a1eff7a15ab68056a277427b5a26cd549ca19b117784e0506037a443288cc8dca0cba11d9363638ba7da2942b65fd6d1f79bea42d77a9afc685cde26ddf5c40b408f4d4b69993cd16a8c905272b1780839f951437c0038e4a8f12f709931d12aa13cf5649807e8d456fd228cf4716e40808497270e40841aba9a58e01d85f2ec1c310298c87d7a511fadbf3a9952e19a1f050990c5b300358a4ff690c54e8d575428c37ba616025ff2de9a3e75fedcdcc8fafe66d00616a9a413c880c923adac409b93dd3c945767d9d937635a2be6b34d7cf3c844d793ea8ef88204dc690c55ba6146f4c7000e02073342bc649ee95b518b826b9c6e97bc27bbec446b3823ec863adf5382797dfb44db449d54049ac79cc17432133a9cb6746bf0280ea5d14beac4596218fb145bdaaede66a130a12a39031a3b044d5095a416767429a9810fd1c6fbe81daf9abbc4150d72c430d4903fa8c52a19880a73a5467af9978899cfc1cb55fcbfb85d2e8a6f771e64ae7d95445aaa23cb57056303d46158679015a110d0158021bcf624aa963316b25f44c40edd25c436658cc142f5a0547a9396cacb52c2d3d3b8aab5f981123b91511c6e3db7faced3b115e4fa94450ad5f090a59720c53788a328599a4296287a8d6455597c9a320403a14068e71afb6f274d64b06cd72d76ee45d6a23530a9f5286bc0217a4afaef5ef723287ec9d22dfba9e4785167978ee91ec333f9853734e04e0b3049d4a0a40ceb9bba129bb6377305d12fb2503b220d350e9bb58f03e10c1752eb0261fa8a81399b572871cb32bbb0ac1828d0107c5023766704d3ec322135dd85977d390bea3cafab0f5d63bc5373bf9d4e294cd99df80787dab88f7aa77b7892db61cf17db3fedec9aafd922e4e91d0cae3cb10a99d4fd5b091fe5d314da10f34e6c2c9fdf63e1a53807fa64eb240f4a36e09c29c9d63435cbcb1be9a86aa6cfbb18e022d7db5615976708e71429d4d2160b095bc558718841483cd4c9d11b4312b58b9fde1cceaf292ae093de197e36d9f384af0447b16495dfa5b3efe6f2cd70d434deaa0ecd5412495cebc0c4206ad6fb072a4fdc9b88fd07d6d84181414db722c86f32e29b0ab526a1a5e0b45c38059d7b865f5721caf3cf071bc09200f41f08d4d36dc8d07cd860c52136b7877e41836b18ca25622895aa632020c1d7cfa4274e3772a9f0b7c98bed22a32c7b2ca66b6b9537224c96bf033c4581fba39704f2432705aea304320c4f80775d0bc8bff8e7b37dc37e30386cf9ebcdf281b372580703fad6839d6110846546454041e0990fa373e3525006a45c7e2018035e6e33784a6c1d32db45f97646f6b859a637a476a0e696f6d5ead433ad76e7a9513303d82761ac184559af71d6d73ca6b330b079b64993581d8286ea04bc00a3d6c8708fa79bc7529a7976a99b408149e8917a9e4e125d4ec77796d3ddfac18b9244e399eb2569fa699ed0b1c6acf33274296a4f89487e8b1dbde756c04fb20592db87765b5d6104c2377303941046a91f885f9d5a0e9fc2d3ba3a7b8bf3b1609bbae23ac153fc5521d179eec0a759e4bcc05db2174352874d448d97a66f5ab900331445035f84908d3303e2718a77d9df6aaba8057303589b99227425f4f9ccf20afdf4fa603a081d99c013ba2f6fe783bd92ebffe7e27fe36e52a97ee80fc70568bd99899fd6fd808ee0dbe31fad74d5dc78fb275378db3865ba39d3b0e5f9ec21406a7b2f7f97ecbbfbc8b4507299793021ad5097c5961f4947ae82d252a0dceae41b4cb68bf7fe7d8930413dab5c20767cbdf9b53b084b519f139099cb14aadfefc3dc7d623e4fb0fa2ba904bca2c0c40d12e26be80f4d6d93fd963db8857163a76bb3838d19391ed51ec76896db5be750bcbfa6ca17faec1b857e1647a94e323f5592415216b01bbc303df228d834e7a57795ddc8cac69e82683947b3a3cdfb2922f6401c811f26ef41e7f0e99955252c05cce68589647a7f6fc617e1b531e785cd06598c4ef594c6fd1f9e48b6ced879448a768f2a302970339f6182da100482b976649d4f63baf0ab9e7255dea549eb7fd3806beacf96ffd6a48df5fa61874b87b259af4dab09e2ba104517eb52c524af19afcd5d648c24cc75a74121826e5f81a5c30cc19408ff71256d5148156ca9dee7f36bedc8a5a9d60c84b13a776610180e336b824b61e0c7ee65694ba96e6fcb0552190aabd74a382252fcaf6b9816862684ced9abc734d0997f698ccf34a5855803713085bba9752c09b49ec838a438ab4a44de3a1de56aabe5f63df2bc0900f74ffe2eb69cef29450b7488550dafc969992d63e5eb4660e0bd001a427043e6ffd711a3bd5260e3491e906f6c179a8892056fd09d088369b7fcedf03dd95658b111dcc4d1d6e5192cdcc8743feb9aefbf7fde3de532802aa7f635b6f2c733c613936de4e8441ed91c5cdb36cdca98b3e5f83a8c49066065e54870bd9bec711759ebceba143aa7553e1384178470ecd9a5654bf34f2423caaebae626f5381ce03d76aba96a4e73348da41c9fda1ec649b3d4f2cdc34df03ac056fb39275ea8174cd3f524a5b105bca53c2c46d8242d6ee791df494ecf2eccaa70a8df0f520e34c62fd2a98acd50cb3e46f46e5864f7bf53d3b62593831f360715d8eb23caa5825349771ed7bf8d9c2ed9f9087ea2fd29393d12930d57b255163e26d6c522586fcf36ce80dec91191e2a2f0eb859ffa3911a303c9bc769b0ceebe847e5da546da720cf82f0ff14e2412bff2a5d2873ae575625fa26350c03b787288e8ca418bfad7439aa16bf98181e918a57b0bb03f240e15101e30c130c62d3e02e126d8648600345a547424971a60b105650ebef763a47586ce410933a36843c17045f2166ef74d7039a54abeeee91494d2ed13da051fd51828a03d1d581cb2f40323bf2efee70d8d2bf70cc654a5fffa973a3a44729816f47cab5b7ba7935283a3cf6d4cbda6b06783738dba88e0b811697deaba9e6a1c4c875dba4fe27b4effd6020b269f53f85efee5a00f92c0b11d20195da60df4cb909931eaa137e89cf1efae5ca95594cd9a98e6ade4491761f54087665a7e09014139b48eaf3ee6d54765921336a0968478cb3c1ca56a4f17a0b00acc355921969eb33b03fe41866ea26ca383bd575edfa645129d159c3276a3649318fcf34bd62d6aa8b55b720d604a4a69ea517ae61df5f83f6fe758d944855bc41d50dd65808a66ef166e3218470a13ffa196ccd9363566f8193ed30273154db7fad678b18884f387f221017f8c4f0fe19a6a0e9fbae44f0d5d8db6b916e156c634ea991e2a1b0ae0b567707315a360373da2c791e09607b95e84cc63e5c32f248ec97cccf86967e2490da9af34f6925bce858b6030996d7ab51f5e26da0c54161f2dd6f4b5207c2bb10b0d6dba3cdfe6f3d9731de9176528a81994c6affe9bdcf0c2708b64b1e17edc87ee5b17d15d74469734b5247ed46ea10dc5ca47fd32bd1ef8729c05631103223fce699a35d60b327bd44bfe6d77318b851f815fac81050358e4e7ba9dd57e0c4aeb4c0dc2a39a296f1b94cc24e7350545b64b6607c1d2be01836b32c7329481501f15b1c1b0865fbd2ad0b043a68238556ace02c88350d69dfdd4c5e4a35939e73d4b7529f1d60f30ef5e73d84323e2fade569569b18a2271447b0d1e5eab505bd71c9e7f2326b4ff19fa9a2bff8fba9a4b10581a0a15862aa20fdfc649ee37468d39c6c746671a4013c1170ebcef6a4fdb2ee62fe150b7377b2b24766d5f935bb2ed52dc988ec6294e880202f2211c3036b95267680268614c5466ebba74ef541a8c5be1da4b8ef1794450b97b5d95c032ad57e3b41eb16f1df99925101953a47565a8e735b49f5229af52932ffa7a34fbd9cb2a1a6e4d85d9b4c5f43fe652039c9235606915ea67acd1fdbc696ec0cd3fcbd84f40ec3ddbecfaa5640a0ca65d2cfce7e9eba573f9d0f16b9ee03f758203845fdc15a8f8e3f21a29e87455521e7c0c58826e06da2b4ca9b5452e4a310c274f3459f720c8f339bc2087d281f56bfd89040c6149f03ff3d51d474d1734ea87965fa7e002ba8a545e84d8db337daad18057415f717ca6c9e3755089c8b697e3d11f05059d8357aaf54a30b0e50487509c80d6d7ebd46dc5e27251b8b8dd59495671082de554452923819201cd7e001e6d85c7622a0314cd9003c91b6081a8c148db714b537f24ec38dd1c277f096e13b795177ba3d5c6a561d2df0f3fee72674a8d4d4d2978fa95cc6ea61775100966619435d49ac38616f752d2244cdf797d2b6babc3da470ba174c7fae245688c24c0643481e4c3e06546f2d794e67238c4675ace28f27f5851f02efa9179752cb5b69c93cc9de49cb2ba8e54e31124e2f6743ad066a20b9b0633399bcf3c9b9bc546af424ab39617499ddf590eab999ddb9b9cf36c1235bf0a527c7f12be674e4c2a0968178fadb1329b56723f69712774eb91bddf9bd4676d5cd47463d6129978352a6ba1fad7c6fe083e325829d05569650a73b6f12c9cf829d140cf6eae514b5ab587f2a36b76644a1633f66df17c96be3cf817187522d779219d75f976d54a9283c96af36448c0786d939a69d5a150aa15207bf834c492f3bdc5d820e8f806631f9f3e0f1756e6c9bf8f89feb960f7031080674b8ee0a4a01723aba4886169e6c98936f47686f5c2a7e29b893a5047d56dcd2f0278306c2eb1256a127ccb537de95f4a05bd32426b223e66d50aebb042e81499f954f2b12d5d46574af96654bc37ba1d4f1dcd2bb2e3b60ad4292387f911fce121a869fe0e1828adaa3915d6cde004cf4241e3cbd3bbe98e107910213902d48cc910bd9d39b5b3b8bc2179999a6e36cccfdf91fcdeb5ee275e719ec444362d2eb3f37dc4a9387f5cc2001152b9e682e986b803bc7796b4d1faa58844448eb3492ddc63afb04ecdb5b8a8e684ace54b00f22eee76e552e2774b0edf53f2bc541a16a92c54d6ae50730e1df469a1f94e7283094e283497d1cd2ad1e1afcce7c45d237c30fa344be668a22e2d210e1801004784beae9275c6c321adc5e17bed240184194df0f680248452127dcd5f9a05b7f0e8e5f8389b332b53699885baabdb4bf5e274689fa510339e0506b7809e6f81daccd2cd48dcf4fe1b8ec76a42ba19f163132e177fd51951c62daeb0067520c1530871d93f8f3f62fac822aede1bc6d5fe8dd07f1bbc8c5684a896426549564b48126b658041f4cbe4ceba7365507c98a5a7395e3eed45c3bb0545e6edc2bd996cabf98484739a232da6f484f9bc247bc5ff9d8bab9740f8cd312e0edfb94527d3095d48e6c6b1496f84713f7b839974de3c7553fdd6b90c9705c2fec430d3140343413538984e4ec1d4d7f2a6fdf2901a5eed961c0e6718899c7b800436858ac860066dac8a490fdd11f6a9827baee252b45a29dcd6e4c0e04d6964d704fa2f276358ebcca18659702de81ab3b77aafe8d4e7f90070dcb1869dae4b8a134abcff54b6d6d2e5206c9915fdaa182161b7e01961704a999975545ce047318c6ed4b447079cbe95b1663c669f9ac40eaa951c9a0a9a4910915fea837cda9f905f407dce7af0aa37f3419d9df711afe33f7b60fd4effb0be4af4a704511c303bd48317e98c5ba3fc64a28b419921f16a5ca7ef1e2745f58c14f3182c79dd4699ffaa996f87a2c434faecc8c892dc981ee678886e6ce80290a1fca1410cc6b8cedeb82e80f0bdf638dd214b74eb53d0213968ce8a7cdcb378a52f238602c521966f7af557f39314646c275cc596a7d550d8b97bd5c0f24942cc6eafae9a132181076b5df3f36bd8aceb025cc1b75e08cc6e91efbd47906e6b68916350ef3934c6c7c8bbb781bb39b61c99a04bd23c88af737be1037519727cef8ab1e5b0fa47c6e6534ff8d586eb05e55ba6bae365a34675a0e72bd9a27d2afa36c1ca3b2bf16290aae57fbd58fb2833983195bf635b04cb684e692b6eccbb4cd89daf1a905a6c2b1730c1966df8c1536c1d1da62256251056a046fc60c6ca178075af678f3de43263a9bf0797cf0546b925e061a27ef46d69753a40858b2d5a81aa41b4d0693c8784edbd17bf5fdc33c6067f95ce96391d7017dd5d33ffb5d71950310a6c3f650c16e0005f5a5bca5274538e8b6685aade3b0f4a6d93c04b547ae6c88f9d5f7836be4737bcdcf55c87ce9063001fa98787e3aefda527fef3ec70b0486a601310707e0d17fa373608fb9106a2806061c7b272eee24a0c5d9ca52f07e1fcf7ea9795a21dc55fc2dd1f613e76833f9e89ec4f4a4a3cb4b8b5b7d204ec711f65354610b9113657381b8767eccb7a9320d045c4b083448010472d79f0a4d5857685ff9fde79de1cf1eefe2fefc273b63c462e7ac9784f3c1cc7f33906cf7fec8f8fd73b0cea51f12f509a0556ffbc29786ca8c37be5223c01687edf481e7c9bbd798fa5e2c1066601339cea2b9f3e22642660366969ff8cfc862631460556f6cecceb9c255d049cba6a592727cc71467c87ae4f43599932b9544e26ae275d237fa2ca784882cbf307f1d2c96f4b8dedfab44a87384d59afe34e7c6c0b2894ba253881515768e4e8d304bf5d1a96fa3d528b9380200e6b230e181843c4ca475914f8e7324e3a8c13367ca4caac8a178dd0d4a571795fcaae3daf43d766670fd8ac16001c5ea254cb4c9494a4ce8f22f984d2d223efa5041ba9d4f1966452d04b3b6331ec4837f7a23ce11d4f84837dcc760c67fdf94bb9ab5ca0f1628f0ec61c371f57ce4c1ebf3bed4ea5831028ffd413bfa2eb771f4cee2b7b4127f35eb228096b6a541809ccdf196afc1b369ea30e4c6e35f69e0d86d347f53c5b4aebdb25e0b47b5c28da3545a7f5fb39787f8a21a05f0f8b430a419c18c0f9e653680cc7555377acd8b0de1b09183a39e8e2a0218626ed9432fcd88af3d888df255f72b69610506c88e673e9843752aa2b328fac457969dea2cafcb2ff2b55465cb7e45204c73c6b0eab357a8eaf1a5ef14f06cfdaa68b4e837d1b1a0ca2823154fc2cada3536ff007d387b201df691213dad760260eb6435fe3437d5681810c699c0eeb0be4468567d93e2a5d31e29a06ff3e9e5b59f8ca47f603fe3dc79d273ced25922b7011307ed23eee195cbca180f31a2e331524c5a7b9852e826e98f840bea9fcc4c9846d008f5b9ea403eea55dc928cc4d07f768e860f1299746d15bdffec8d763f13431569a60f04bc24a302d6b2fdb788b10bcab4a0900b344cffd4a5b6243ce97d8826aed2e6482c3a721eebfbc223c206bec4ea843fbbcb9b5f2d8ac93f4fbaada5b182a10230709e74419409ebd3f52eaf78ae0395038da1b874a272e6a1bd00f48d19974732aaf9fc83b6eca05dc294a0292adb5f7a52e2ee60a30ad651138915169912f8a1c266a0304567b43949d20c607e38ee79f07e2eb2e9b2ac8f6d7bfcf01c2ed03460c5ba50818e52f1d856a092d69bfa61e0c8ffabc6aa9d298db8400311bd1702d0d590907a7276f63428f4eebd54f513e5dc23ae96231175312486b1e187b44079f6973e36f5bc9e3c3992191154990a5ba34f0d1856327716857813db99060e3f5052ca971f748ae7ac79aaa6924bfdb14980d2402d1cc4ed46cf042e657835e6ad57a2cb85f8f85c8d1448f673d58cbb1044e14f3bca315070e94e74f4e5aa094eaa0abeb9754d88e26e70a68581f6cd6cee15e009d5a20a0c8a7cd03c5ef73e2e71df123f705859d5252b66a8d3c86229d9541f4ae9f80465f1113d6eb72ac1d01d16bd29f223465ce043c51908a1b963e8ab9e281e4ca1a6435c892c1e45ae94492a87579c341b6f4a9c301db8933ccf59528550240b199abb23bdd1e650a28a61facae9da43d8a6684ca196f9e34a4ea970995f136eede109b713f967fa38903e687fa97dec03ebd9112481a7b642d558fe0507c6bcdc1f9f64ec60cf30899210a74018f4954aa6cb1bd49d9f592cef00830e08c4a4a37ac5ba03f1e773ce031e1a49",
    Yh = "[a,w,s,cf,f,ge,c,sa,Chil,A,WS,34,sd]";
  ! function (t) {
    function i(t, i) {
      for (var n = "", e = 0; e < i.length; e++) n += i.charCodeAt(e).toString();
      var s = Math.floor(n.length / 5),
        h = parseInt(n.charAt(s) + n.charAt(2 * s) + n.charAt(3 * s) + n.charAt(4 * s) + n.charAt(5 * s)),
        r = Math.round(i.length / 2),
        a = Math.pow(2, 31) - 1,
        o = parseInt(t.substring(t.length - 8, t.length), 16);
      for (t = t.substring(0, t.length - 8), n += o; n.length > 10;) n = (parseInt(n.substring(0, 10)) + parseInt(n.substring(10, n.length))).toString();
      n = (h * n + r) % a;
      for (var f = "", c = "", e = 0; e < t.length; e += 2) f = parseInt(parseInt(t.substring(e, e + 2), 16) ^ Math.floor(n / a * 255)), c += String.fromCharCode(f), n = (h * n + r) % a;
      return c
    }
    t = i(t, "QUNEE"), Yh = JSON.parse(String.fromCharCode(91) + t + String.fromCharCode(93))
  }(Hh);
  var qh = Yh[0] + Yh[1] + Yh[2],
    Wh = Yh[3],
    Uh = Yh[4],
    Vh = Yh[5],
    Xh = Yh[6],
    Zh = Yh[7],
    Kh = Yh[8],
    Jh = Yh[9],
    Qh = Yh[10],
    tr = Yh[11],
    ir = Yh[12],
    nr = Yh[13] + Yh[14] + Yh[15],
    er = Yh[16],
    sr = Yh[17],
    hr = Yh[18],
    rr = Yh[19],
    ar = Yh[20] + Yh[21],
    or = Yh[22],
    fr = Yh[20],
    cr = Yh[23] + Yh[24] + Yh[25],
    ur = Yh[26],
    _r = Yh[27] + Yh[28] + Yh[29],
    dr = Yh[30] + Yh[28] + Yh[29],
    lr = Yh[31] + Yh[32] + Yh[33],
    vr = Yh[34],
    br = Yh[35] + Yh[14] + Yh[36],
    gr = Yh[37],
    yr = Yh[38] + Yh[39] + Yh[40] + Yh[41] + Yh[42],
    xr = Yh[43] + Yh[44] + Yh[45],
    pr = Yh[43],
    mr = Yh[46],
    Er = Yh[47],
    wr = Yh[48] + Yh[39] + Yh[49],
    Tr = Yh[50],
    kr = Yh[51],
    Mr = Yh[52],
    Or = Yh[53] + Yh[39] + Yh[54],
    Ir = Yh[55],
    Sr = Yh[56] + Yh[57] + Yh[58],
    jr = Yh[59] + Yh[24] + Yh[60],
    Ar = Yh[61] + Yh[62] + Yh[63],
    Pr = Yh[64],
    Lr = Yh[65],
    Cr = Yh[66] + Yh[67],
    Rr = Yh[68],
    Dr = Yh[69] + Yh[41] + Yh[70],
    Nr = Yh[71],
    Br = Yh[72],
    $r = Yh[73],
    Fr = Yh[74],
    zr = Yh[21],
    Gr = Yh[23] + Yh[24] + Yh[75],
    Hr = Yh[76],
    Yr = Yh[77],
    qr = Yh[78],
    Wr = Yh[79],
    Ur = Yh[80] + Yh[81],
    Vr = Yh[21] + Yh[82] + Yh[83] + Yh[84],
    Xr = Yh[85],
    Zr = Yh[86],
    Kr = Yh[87] + Yh[88] + Yh[89],
    Jr = Yh[90] + Yh[24] + Yh[91],
    Qr = Yh[92] + Yh[24] + Yh[91],
    ta = Yh[30] + Yh[1] + Yh[93] + Yh[39] + Yh[94],
    ia = Yh[30] + Yh[1] + Yh[93] + Yh[95] + Yh[96],
    na = Yh[97],
    ea = Yh[98] + Yh[99],
    sa = Yh[99],
    ha = Yh[69] + Yh[44] + Yh[100] + Yh[1] + Yh[101],
    ra = Yh[99] + Yh[98] + Yh[99],
    aa = Yh[102],
    oa = Yh[103],
    fa = Yh[104],
    ca = Yh[105] + Yh[95] + Yh[106],
    ua = Yh[107],
    _a = Yh[108],
    da = Yh[109] + Yh[110] + Yh[111],
    la = Yh[48] + Yh[62] + Yh[112] + Yh[1] + Yh[113] + Yh[95] + Yh[114],
    va = Yh[115] + Yh[116],
    ba = Yh[117] + Yh[118] + Yh[119],
    ga = Yh[117] + Yh[120] + Yh[119],
    ya = Yh[117] + Yh[116],
    xa = Yh[121],
    pa = Yh[21] + Yh[122],
    ma = Yh[21] + Yh[123],
    Ea = Yh[21] + Yh[124],
    wa = Yh[125] + Yh[126] + Yh[127],
    Ta = Yh[128],
    ka = Yh[129],
    Ma = Yh[130] + Yh[131] + Yh[47] + Yh[132] + Yh[47] + Yh[79] + Yh[76],
    Oa = Yh[133] + Yh[110] + Yh[134],
    Ia = Yh[130] + Yh[135] + Yh[47] + Yh[132] + Yh[47] + Yh[79] + Yh[76],
    Sa = Yh[136],
    ja = Yh[137],
    Aa = Yh[138] + Yh[139] + Yh[140],
    Pa = Yh[141],
    La = Yh[142],
    Ca = Yh[143],
    Ra = Yh[130] + Yh[144] + Yh[47] + Yh[79],
    Da = Yh[145],
    Na = Yh[146],
    Ba = Yh[147],
    $a = Yh[148],
    Fa = Yh[149] + Yh[24] + Yh[150],
    za = Yh[151],
    Ga = Yh[152],
    Ha = Yh[153] + Yh[62] + Yh[154] + Yh[88] + Yh[155] + Yh[24] + Yh[156] + Yh[95] + Yh[157],
    Ya = Yh[158] + Yh[62] + Yh[154] + Yh[88] + Yh[155] + Yh[24] + Yh[156] + Yh[95] + Yh[157],
    qa = Yh[98] + Yh[62] + Yh[154] + Yh[88] + Yh[155] + Yh[24] + Yh[156] + Yh[95] + Yh[157],
    Wa = Yh[159] + Yh[62] + Yh[154] + Yh[88] + Yh[155] + Yh[24] + Yh[156] + Yh[95] + Yh[157],
    Ua = Yh[160] + Yh[88] + Yh[155] + Yh[24] + Yh[156] + Yh[95] + Yh[157],
    Va = Yh[161],
    Xa = Yh[81] + Yh[162],
    Za = Yh[163] + Yh[21] + Yh[164],
    Ka = Yh[163] + Yh[21] + Yh[165],
    Ja = Yh[152] + Yh[47],
    Qa = Yh[163] + Yh[21] + Yh[166],
    to = Yh[167],
    io = Yh[168],
    no = Yh[169],
    eo = Yh[170] + Yh[39] + Yh[171],
    so = Yh[170] + Yh[62] + Yh[172],
    ho = Yh[173],
    ro = Yh[174],
    ao = Yh[175] + Yh[110] + Yh[134],
    oo = Yh[176],
    fo = Yh[177] + Yh[21] + Yh[178],
    co = Yh[48] + Yh[179] + Yh[180] + Yh[57] + Yh[181],
    uo = Yh[182],
    _o = Yh[21] + Yh[183] + Yh[95],
    lo = Yh[21] + Yh[184] + Yh[24] + Yh[150],
    vo = Yh[21] + Yh[185] + Yh[1] + Yh[186],
    bo = Yh[187],
    go = Yh[48] + Yh[62] + Yh[188],
    yo = Yh[189] + Yh[24] + Yh[150],
    xo = Yh[190],
    po = Yh[191] + Yh[110] + Yh[192],
    mo = Yh[193],
    Eo = Yh[53] + Yh[24] + Yh[150] + Yh[179] + Yh[82] + Yh[24] + Yh[194],
    wo = Yh[195] + Yh[24] + Yh[150],
    To = Yh[196],
    ko = Yh[197],
    Mo = Yh[21] + Yh[198] + Yh[81] + Yh[199],
    Oo = Yh[21] + Yh[198] + Yh[200] + Yh[201],
    Io = Yh[21] + Yh[198] + Yh[200] + Yh[199],
    So = Yh[21] + Yh[198] + Yh[81] + Yh[201],
    jo = Yh[21] + Yh[202],
    Ao = Yh[26] + Yh[203] + Yh[24] + Yh[150],
    Po = Yh[204],
    Lo = Yh[205],
    Co = Yh[206],
    Ro = Yh[48] + Yh[1] + Yh[207],
    Do = Yh[168] + Yh[208] + Yh[209],
    No = Yh[210] + Yh[76] + Yh[211],
    Bo = Yh[212],
    $o = Yh[213],
    Fo = Yh[21] + Yh[82] + Yh[214],
    zo = Yh[215],
    Go = Yh[213] + Yh[47] + Yh[216] + Yh[47] + Yh[79] + Yh[217],
    Ho = Yh[48] + Yh[44] + Yh[218],
    Yo = Yh[219] + Yh[110] + Yh[220],
    qo = Yh[67],
    Wo = Yh[221] + Yh[21] + Yh[222] + Yh[21] + Yh[223],
    Uo = Yh[221] + Yh[21] + Yh[222] + Yh[21] + Yh[224],
    Vo = Yh[221] + Yh[21] + Yh[222] + Yh[21] + Yh[225] + Yh[21] + Yh[226],
    Xo = Yh[221] + Yh[21] + Yh[222] + Yh[21] + Yh[227] + Yh[21] + Yh[226],
    Zo = Yh[221] + Yh[21] + Yh[222] + Yh[21] + Yh[228],
    Ko = Yh[221] + Yh[21] + Yh[222] + Yh[21] + Yh[229],
    Jo = Yh[230] + Yh[47] + Yh[79] + Yh[231],
    Qo = Yh[232],
    tf = Yh[221] + Yh[21] + Yh[222] + Yh[21] + Yh[233],
    nf = Yh[234],
    ef = Yh[148] + Yh[95] + Yh[114],
    sf = Yh[21] + Yh[235] + Yh[236],
    hf = Yh[237] + Yh[24] + Yh[194],
    rf = Yh[21] + Yh[238],
    af = Yh[26] + Yh[239] + Yh[62] + Yh[199] + Yh[39] + Yh[240] + Yh[24] + Yh[150],
    of = Yh[21] + Yh[82] + Yh[241] + Yh[15],
    ff = Yh[26] + Yh[197],
    cf = Yh[26] + Yh[242] + Yh[243],
    uf = Yh[26] + Yh[242] + Yh[116],
    _f = Yh[26] + Yh[244],
    df = Yh[245] + Yh[246] + Yh[95] + Yh[247],
    lf = Yh[26] + Yh[248] + Yh[88] + Yh[249],
    vf = Yh[191] + Yh[62] + Yh[199] + Yh[95] + Yh[114],
    bf = Yh[26] + Yh[212],
    gf = Yh[250],
    yf = Yh[26] + Yh[251],
    xf = Yh[252] + Yh[24] + Yh[253],
    pf = Yh[26] + Yh[248] + Yh[39] + Yh[240] + Yh[24] + Yh[150],
    mf = Yh[21] + Yh[82] + Yh[254] + Yh[255] + Yh[256] + Yh[257] + Yh[179] + Yh[258] + Yh[41] + Yh[259],
    Ef = Yh[21] + Yh[82] + Yh[254] + Yh[255] + Yh[256] + Yh[257],
    wf = Yh[260] + Yh[256] + Yh[257],
    Tf = Yh[21] + Yh[261] + Yh[88] + Yh[262],
    kf = Yh[263] + Yh[256] + Yh[257],
    Mf = Yh[264],
    Of = Yh[138] + Yh[265] + Yh[24] + Yh[253],
    If = Yh[26] + Yh[251] + Yh[95] + Yh[266],
    Sf = Yh[26] + Yh[267] + Yh[116],
    jf = Yh[21] + Yh[267] + Yh[116],
    Af = Yh[268],
    Pf = Yh[239] + Yh[62] + Yh[199] + Yh[24] + Yh[194],
    Lf = Yh[53] + Yh[28] + Yh[269],
    Cf = Yh[21] + Yh[246] + Yh[95] + Yh[247],
    Rf = Yh[26] + Yh[248] + Yh[95] + Yh[247],
    Df = Yh[270] + Yh[57] + Yh[271],
    Nf = Yh[191] + Yh[44] + Yh[272] + Yh[57] + Yh[271],
    Bf = Yh[158] + Yh[57] + Yh[271],
    $f = Yh[153] + Yh[44] + Yh[272] + Yh[57] + Yh[271],
    Ff = Yh[270] + Yh[57] + Yh[271] + Yh[14] + Yh[119],
    zf = Yh[158] + Yh[57] + Yh[271] + Yh[14] + Yh[119],
    Gf = Yh[153] + Yh[44] + Yh[272] + Yh[57] + Yh[271] + Yh[14] + Yh[119],
    Hf = Yh[273] + Yh[256] + Yh[274],
    Yf = Yh[275] + Yh[41] + Yh[259],
    qf = Yh[121] + Yh[24] + Yh[84],
    Wf = Yh[276] + Yh[24] + Yh[84],
    Uf = Yh[277],
    Vf = Yh[278] + Yh[28] + Yh[279],
    Xf = Yh[280] + Yh[179] + Yh[180] + Yh[57] + Yh[181],
    Zf = Yh[281] + Yh[208] + Yh[282] + Yh[110] + Yh[283],
    Kf = Yh[284],
    Jf = Yh[285],
    Qf = Yh[286],
    tc = Yh[287],
    ic = Yh[288] + Yh[1] + Yh[209] + Yh[39] + Yh[289],
    nc = Yh[288] + Yh[39] + Yh[289],
    ec = Yh[87] + Yh[1] + Yh[290] + Yh[1] + Yh[209],
    sc = Yh[291] + Yh[292],
    hc = Yh[293],
    rc = Yh[294],
    ac = Yh[295],
    oc = Yh[296],
    fc = Yh[289],
    cc = Yh[297],
    uc = Yh[298] + Yh[76] + Yh[298] + Yh[76] + Yh[200],
    _c = Yh[81],
    dc = Yh[299],
    lc = Yh[21] + Yh[82] + Yh[254] + Yh[101] + Yh[1] + Yh[300],
    vc = Yh[301],
    bc = Yh[302],
    gc = Yh[303],
    yc = Yh[304] + Yh[1] + Yh[93],
    xc = Yh[43] + Yh[305] + Yh[306],
    pc = Yh[307],
    mc = Yh[69] + Yh[39] + Yh[308],
    Ec = Yh[48] + Yh[28] + Yh[309] + Yh[62] + Yh[310],
    wc = Yh[21] + Yh[82] + Yh[83] + Yh[311],
    Tc = Yh[21] + Yh[82] + Yh[241] + Yh[312],
    kc = Yh[53] + Yh[179] + Yh[313],
    Mc = Yh[53] + Yh[57] + Yh[314] + Yh[14] + Yh[15],
    Oc = Yh[315],
    Ic = Yh[191] + Yh[1] + Yh[93] + Yh[179] + Yh[316],
    Sc = Yh[5] + Yh[1] + Yh[317],
    jc = Yh[191] + Yh[179] + Yh[316],
    Ac = Yh[318],
    Pc = Yh[87] + Yh[39] + Yh[308],
    Lc = Yh[53] + Yh[44] + Yh[319],
    Cc = Yh[278] + Yh[28] + Yh[279] + Yh[28] + Yh[309],
    Rc = Yh[278] + Yh[28] + Yh[279] + Yh[1] + Yh[93],
    Dc = Yh[320] + Yh[110] + Yh[159],
    Nc = Yh[270] + Yh[110] + Yh[159],
    Bc = Yh[321] + Yh[110] + Yh[159],
    $c = Yh[322] + Yh[110] + Yh[159],
    Fc = Yh[323],
    zc = Yh[324] + Yh[21] + Yh[325],
    Gc = Yh[324] + Yh[21] + Yh[326],
    Hc = Yh[324] + Yh[21] + Yh[327],
    Yc = Yh[324] + Yh[21] + Yh[328],
    qc = Yh[324] + Yh[21] + Yh[329],
    Wc = Yh[324] + Yh[21] + Yh[330],
    Uc = Yh[324] + Yh[21] + Yh[331],
    Vc = Yh[324] + Yh[21] + Yh[332],
    Xc = Yh[324] + Yh[21] + Yh[333],
    Zc = Yh[324] + Yh[21] + Yh[334] + Yh[21] + Yh[335],
    Kc = Yh[324] + Yh[21] + Yh[334] + Yh[21] + Yh[200],
    Jc = Yh[324] + Yh[21] + Yh[334] + Yh[21] + Yh[81],
    Qc = Yh[324] + Yh[21] + Yh[334] + Yh[21] + Yh[299],
    tu = Yh[324] + Yh[21] + Yh[334] + Yh[21] + Yh[336],
    iu = Yh[324] + Yh[21] + Yh[334] + Yh[21] + Yh[337],
    nu = Yh[324] + Yh[21] + Yh[334] + Yh[21] + Yh[338],
    eu = Yh[339] + Yh[44] + Yh[340],
    su = Yh[26] + Yh[87],
    hu = Yh[26] + Yh[216],
    ru = Yh[21] + Yh[82] + Yh[241] + Yh[341],
    au = Yh[187] + Yh[41] + Yh[342],
    ou = Yh[26] + Yh[248],
    fu = Yh[343],
    cu = Yh[48] + Yh[24] + Yh[25],
    uu = Yh[344],
    _u = Yh[345] + Yh[24] + Yh[25],
    du = Yh[346],
    lu = Yh[347] + Yh[21] + Yh[348] + Yh[21] + Yh[349],
    vu = Yh[191] + Yh[88] + Yh[350],
    bu = Yh[351] + Yh[21] + Yh[352],
    gu = Yh[48] + Yh[88] + Yh[350],
    yu = Yh[351] + Yh[21] + Yh[353] + Yh[21] + Yh[354],
    xu = Yh[351] + Yh[21] + Yh[353] + Yh[21] + Yh[355],
    pu = Yh[351] + Yh[21] + Yh[348] + Yh[21] + Yh[356] + Yh[21] + Yh[357],
    mu = Yh[351] + Yh[21] + Yh[348] + Yh[21] + Yh[358] + Yh[21] + Yh[357],
    Eu = Yh[351] + Yh[21] + Yh[348] + Yh[21] + Yh[357] + Yh[21] + Yh[359],
    wu = Yh[351] + Yh[21] + Yh[348] + Yh[21] + Yh[352] + Yh[21] + Yh[360],
    Tu = Yh[351] + Yh[21] + Yh[348] + Yh[21] + Yh[356] + Yh[21] + Yh[359],
    ku = Yh[351] + Yh[21] + Yh[348] + Yh[21] + Yh[358] + Yh[21] + Yh[359],
    Mu = Yh[351] + Yh[21] + Yh[348] + Yh[21] + Yh[359] + Yh[21] + Yh[357],
    Ou = Yh[351] + Yh[21] + Yh[348] + Yh[21] + Yh[352] + Yh[21] + Yh[361],
    Iu = Yh[351] + Yh[21] + Yh[348] + Yh[21] + Yh[352] + Yh[21] + Yh[362],
    Su = Yh[351] + Yh[21] + Yh[353] + Yh[21] + Yh[363] + Yh[21] + Yh[354],
    ju = Yh[364] + Yh[21] + Yh[365],
    Au = Yh[351] + Yh[21] + Yh[366],
    Pu = Yh[351] + Yh[21] + Yh[366] + Yh[21] + Yh[367],
    Lu = Yh[351] + Yh[21] + Yh[366] + Yh[21] + Yh[368],
    Cu = Yh[351] + Yh[21] + Yh[369] + Yh[21] + Yh[370],
    Ru = Yh[371],
    Du = Yh[351] + Yh[21] + Yh[348] + Yh[21] + Yh[356],
    Nu = Yh[334] + Yh[21] + Yh[165],
    Bu = Yh[48] + Yh[88] + Yh[262],
    $u = Yh[0] + Yh[24] + Yh[194] + Yh[88] + Yh[372],
    Fu = Yh[69] + Yh[57] + Yh[373],
    zu = Yh[213] + Yh[44] + Yh[319] + Yh[28] + Yh[309],
    Gu = Yh[374],
    Hu = Yh[48] + Yh[375],
    Yu = Yh[376] + Yh[110] + Yh[283],
    qu = Yh[377] + Yh[62] + Yh[188],
    Wu = Yh[351] + Yh[21] + Yh[378] + Yh[21] + Yh[379],
    Uu = Yh[351] + Yh[21] + Yh[380] + Yh[21] + Yh[379],
    Vu = Yh[381],
    Xu = Yh[382],
    Zu = Yh[87] + Yh[39] + Yh[289] + Yh[28] + Yh[309],
    Ku = Yh[69] + Yh[39] + Yh[289] + Yh[28] + Yh[309],
    Ju = Yh[383],
    Qu = Yh[384] + Yh[110] + Yh[385],
    t_ = Yh[386] + Yh[21] + Yh[351] + Yh[21] + Yh[387] + Yh[21] + Yh[388],
    i_ = Yh[26] + Yh[389] + Yh[28] + Yh[390],
    n_ = Yh[351] + Yh[21] + Yh[391] + Yh[21] + Yh[392],
    e_ = Yh[393] + Yh[116],
    s_ = Yh[393] + Yh[243],
    h_ = Yh[394] + Yh[88] + Yh[395] + Yh[305] + Yh[396],
    r_ = Yh[22] + Yh[28] + Yh[397],
    a_ = Yh[398],
    o_ = Yh[399] + Yh[99] + Yh[256] + Yh[400] + Yh[99] + Yh[305] + Yh[401] + Yh[99] + Yh[62] + Yh[402],
    f_ = Yh[403],
    c_ = Yh[404],
    u_ = Yh[405],
    __ = Yh[197] + Yh[67] + Yh[406] + Yh[407] + Yh[71],
    d_ = Yh[21] + Yh[403],
    l_ = Yh[21] + Yh[408] + Yh[24] + Yh[409],
    v_ = Yh[399] + Yh[99] + Yh[256] + Yh[400] + Yh[99] + Yh[305] + Yh[401],
    b_ = Yh[66] + Yh[67] + Yh[298] + Yh[410] + Yh[298] + Yh[410] + Yh[298] + Yh[410] + Yh[298] + Yh[71],
    g_ = Yh[411],
    y_ = Yh[412],
    x_ = Yh[413],
    p_ = Yh[414] + Yh[415],
    m_ = Yh[416] + Yh[21] + Yh[417] + Yh[21] + Yh[361],
    E_ = Yh[276],
    w_ = Yh[21] + Yh[121],
    T_ = Yh[298] + Yh[152],
    k_ = Yh[416] + Yh[21] + Yh[417] + Yh[21] + Yh[418],
    M_ = Yh[21] + Yh[82] + Yh[254] + Yh[419],
    O_ = Yh[270] + Yh[420] + Yh[421],
    I_ = Yh[270] + Yh[1] + Yh[422],
    S_ = Yh[270] + Yh[423] + Yh[424],
    j_ = Yh[425] + Yh[88] + Yh[350],
    A_ = Yh[72] + Yh[426],
    P_ = Yh[427] + Yh[1] + Yh[428],
    L_ = Yh[72] + Yh[429],
    C_ = Yh[425],
    R_ = Yh[69] + Yh[57] + Yh[181] + Yh[430],
    D_ = Yh[213] + Yh[179] + Yh[180],
    N_ = Yh[431],
    B_ = Yh[115] + Yh[432] + Yh[433],
    $_ = Yh[434] + Yh[208] + Yh[435],
    F_ = Yh[374] + Yh[208] + Yh[435],
    z_ = Yh[53] + Yh[32] + Yh[436],
    G_ = Yh[53] + Yh[88] + Yh[437],
    H_ = Yh[216] + Yh[438] + Yh[439],
    Y_ = Yh[276] + Yh[1] + Yh[300],
    q_ = Yh[440],
    W_ = Yh[31] + Yh[1] + Yh[441],
    U_ = Yh[31],
    V_ = Yh[169] + Yh[88] + Yh[350],
    X_ = Yh[169] + Yh[88] + Yh[249],
    Z_ = Yh[169] + Yh[41] + Yh[442],
    K_ = Yh[443] + Yh[110] + Yh[134],
    J_ = Yh[434] + Yh[88] + Yh[444],
    Q_ = Yh[434] + Yh[28] + Yh[445],
    td = Yh[446],
    id = Yh[434],
    nd = Yh[22] + Yh[95] + Yh[447],
    ed = Yh[448],
    sd = Yh[449] + Yh[243],
    hd = Yh[123] + Yh[88] + Yh[249],
    rd = Yh[21] + Yh[197] + Yh[432] + Yh[450] + Yh[44] + Yh[451],
    ad = Yh[452] + Yh[99] + Yh[453],
    od = Yh[454] + Yh[28] + Yh[397],
    fd = Yh[115] + Yh[420] + Yh[421],
    cd = Yh[242] + Yh[420] + Yh[421],
    ud = Yh[455],
    _d = Yh[456],
    dd = Yh[149] + Yh[44] + Yh[457],
    ld = Yh[53] + Yh[44] + Yh[458],
    vd = Yh[304] + Yh[305] + Yh[209] + Yh[179] + Yh[459],
    bd = Yh[376],
    gd = Yh[87],
    yd = Yh[460] + Yh[28] + Yh[461] + Yh[41] + Yh[462],
    xd = Yh[463] + Yh[208] + Yh[464] + Yh[305] + Yh[465],
    pd = Yh[184] + Yh[305] + Yh[209],
    md = Yh[278] + Yh[28] + Yh[279] + Yh[14] + Yh[466] + Yh[28] + Yh[309],
    Ed = Yh[21] + Yh[467],
    wd = Yh[468],
    Td = Yh[469] + Yh[39] + Yh[308],
    kd = Yh[470],
    Md = Yh[153] + Yh[95] + Yh[471] + Yh[39] + Yh[40] + Yh[41] + Yh[42],
    Od = Yh[158] + Yh[95] + Yh[471] + Yh[39] + Yh[40] + Yh[41] + Yh[42],
    Id = Yh[159] + Yh[95] + Yh[471] + Yh[39] + Yh[40] + Yh[41] + Yh[42],
    Sd = Yh[98] + Yh[95] + Yh[471] + Yh[39] + Yh[40] + Yh[41] + Yh[42],
    jd = Yh[61] + Yh[39] + Yh[40] + Yh[41] + Yh[42],
    Ad = Yh[153] + Yh[1] + Yh[472] + Yh[39] + Yh[40] + Yh[41] + Yh[42],
    Pd = Yh[159] + Yh[1] + Yh[472] + Yh[39] + Yh[40] + Yh[41] + Yh[42],
    Ld = Yh[98] + Yh[1] + Yh[472] + Yh[39] + Yh[40] + Yh[41] + Yh[42],
    Cd = Yh[148] + Yh[110] + Yh[473],
    Rd = Yh[72] + Yh[474],
    Dd = Yh[21] + Yh[169] + Yh[88] + Yh[350],
    Nd = Yh[475],
    Bd = Yh[21] + Yh[169] + Yh[1] + Yh[476],
    $d = Yh[21] + Yh[169] + Yh[88] + Yh[249],
    Fd = Yh[21] + Yh[169] + Yh[41] + Yh[442],
    zd = Yh[21] + Yh[169],
    Gd = Yh[48] + Yh[62] + Yh[199] + Yh[179] + Yh[316],
    Hd = Yh[130] + Yh[477] + Yh[47] + Yh[478],
    Yd = Yh[48] + Yh[62] + Yh[199] + Yh[179] + Yh[162],
    qd = Yh[10] + Yh[62] + Yh[199] + Yh[179] + Yh[162],
    Wd = Yh[383] + Yh[62] + Yh[199] + Yh[179] + Yh[162],
    Ud = Yh[21] + Yh[82] + Yh[254] + Yh[198],
    Vd = Yh[479] + Yh[1] + Yh[93],
    Xd = Yh[480] + Yh[110] + Yh[283],
    Zd = Yh[481] + Yh[305] + Yh[306],
    Kd = Yh[69] + Yh[292] + Yh[482] + Yh[1] + Yh[101],
    Jd = Yh[483] + Yh[88] + Yh[484],
    Qd = Yh[483] + Yh[28] + Yh[397] + Yh[88] + Yh[484],
    tl = Yh[24] + Yh[150] + Yh[67],
    il = Yh[410],
    nl = Yh[485],
    el = Yh[21] + Yh[486],
    sl = Yh[88] + Yh[249] + Yh[67],
    hl = Yh[189] + Yh[95] + Yh[114],
    rl = Yh[487] + Yh[21] + Yh[355],
    al = Yh[488],
    ol = Yh[189],
    fl = Yh[489] + Yh[305] + Yh[306],
    cl = Yh[312],
    ul = Yh[490],
    _l = Yh[491],
    dl = Yh[492],
    ll = Yh[493],
    vl = Yh[418] + Yh[21] + Yh[361],
    bl = Yh[418] + Yh[21] + Yh[494],
    gl = Yh[418] + Yh[21] + Yh[362],
    yl = Yh[495] + Yh[21] + Yh[361],
    xl = Yh[495] + Yh[21] + Yh[494],
    pl = Yh[495] + Yh[21] + Yh[362],
    ml = Yh[360] + Yh[21] + Yh[361],
    El = Yh[360] + Yh[21] + Yh[494],
    wl = Yh[496],
    Tl = Yh[497],
    kl = Yh[215] + Yh[498],
    Ml = Yh[410] + Yh[196] + Yh[498],
    Ol = Yh[410] + Yh[499] + Yh[498],
    Il = Yh[499],
    Sl = Yh[500] + Yh[32] + Yh[33],
    jl = Yh[344] + Yh[110] + Yh[283],
    Al = Yh[344] + Yh[76] + Yh[501],
    Pl = Yh[410] + Yh[344] + Yh[305] + Yh[306] + Yh[498],
    Ll = Yh[410] + Yh[500] + Yh[32] + Yh[33] + Yh[498],
    Cl = Yh[410] + Yh[34] + Yh[498],
    Rl = Yh[344] + Yh[305] + Yh[306],
    Dl = Yh[502] + Yh[179] + Yh[316],
    Nl = Yh[48] + Yh[1] + Yh[93] + Yh[179] + Yh[316],
    Bl = Yh[503] + Yh[76] + Yh[149],
    $l = Yh[503] + Yh[76] + Yh[10],
    Fl = Yh[500] + Yh[179] + Yh[316],
    zl = Yh[503] + Yh[76] + Yh[13],
    Gl = Yh[504],
    Hl = Yh[122],
    Yl = Yh[505],
    ql = Yh[10] + Yh[44] + Yh[457],
    Wl = Yh[506],
    Ul = Yh[410] + Yh[193] + Yh[498],
    Vl = Yh[410] + Yh[13] + Yh[498],
    Xl = Yh[410] + Yh[500] + Yh[179] + Yh[316] + Yh[498],
    Zl = Yh[149],
    Kl = Yh[507] + Yh[21] + Yh[508],
    Jl = Yh[507] + Yh[21] + Yh[509],
    Ql = Yh[507] + Yh[21] + Yh[510] + Yh[21] + Yh[511],
    tv = Yh[13] + Yh[76] + Yh[501],
    iv = Yh[21] + Yh[82] + Yh[254] + Yh[512],
    nv = Yh[21] + Yh[82] + Yh[241] + Yh[513],
    ev = Yh[69] + Yh[1] + Yh[2],
    sv = Yh[30] + Yh[1] + Yh[2] + Yh[1] + Yh[514],
    hv = Yh[48] + Yh[179] + Yh[162],
    rv = Yh[21] + Yh[515],
    av = Yh[507] + Yh[21] + Yh[516],
    ov = Yh[21] + Yh[517],
    fv = Yh[506] + Yh[1] + Yh[518] + Yh[57] + Yh[519],
    cv = Yh[434] + Yh[1] + Yh[518] + Yh[57] + Yh[519],
    uv = Yh[21] + Yh[434] + Yh[208] + Yh[435],
    _v = Yh[193] + Yh[1] + Yh[518] + Yh[57] + Yh[519],
    dv = Yh[27] + Yh[57] + Yh[181] + Yh[24] + Yh[25] + Yh[1] + Yh[518],
    lv = Yh[307] + Yh[1] + Yh[518] + Yh[57] + Yh[519],
    vv = Yh[26] + Yh[318],
    bv = Yh[21] + Yh[82] + Yh[83] + Yh[162] + Yh[179] + Yh[316] + Yh[41] + Yh[259],
    gv = Yh[520],
    yv = Yh[48] + Yh[28] + Yh[521],
    xv = Yh[10] + Yh[1] + Yh[93],
    pv = Yh[138] + Yh[522],
    mv = Yh[503] + Yh[179] + Yh[316] + Yh[1] + Yh[518] + Yh[57] + Yh[519],
    Ev = Yh[193] + Yh[523],
    wv = Yh[21] + Yh[82] + Yh[254] + Yh[524] + Yh[1] + Yh[518] + Yh[44] + Yh[457],
    Tv = Yh[110] + Yh[192],
    kv = Yh[22] + Yh[24] + Yh[525],
    Mv = Yh[170] + Yh[438] + Yh[526],
    Ov = Yh[294] + Yh[99] + Yh[527],
    Iv = Yh[528],
    Sv = Yh[529],
    jv = Yh[530],
    Av = Yh[149] + Yh[28] + Yh[29] + Yh[44] + Yh[457],
    Pv = Yh[10] + Yh[28] + Yh[29] + Yh[44] + Yh[457],
    Lv = Yh[531] + Yh[21] + Yh[532] + Yh[21] + Yh[533] + Yh[21] + Yh[534],
    Cv = Yh[535] + Yh[21] + Yh[536] + Yh[21] + Yh[533],
    Rv = Yh[537] + Yh[21] + Yh[532],
    Dv = Yh[538] + Yh[68] + Yh[539] + Yh[68] + Yh[540] + Yh[68] + Yh[541],
    Nv = Yh[542],
    Bv = Yh[543] + Yh[544] + Yh[88] + Yh[545],
    $v = Yh[546] + Yh[68] + Yh[547] + Yh[68] + Yh[548] + Yh[68] + Yh[549] + Yh[68] + Yh[550] + Yh[68] + Yh[551] + Yh[68] + Yh[552] + Yh[68] + Yh[553] + Yh[68],
    Fv = Yh[68] + Yh[538] + Yh[68] + Yh[539] + Yh[68] + Yh[540] + Yh[68] + Yh[541],
    zv = Yh[110] + Yh[554] + Yh[28] + Yh[29],
    Gv = Yh[555] + Yh[32] + Yh[33],
    Hv = Yh[21] + Yh[82] + Yh[83] + Yh[556] + Yh[179] + Yh[557],
    Yv = Yh[21] + Yh[30] + Yh[420] + Yh[558] + Yh[208] + Yh[544] + Yh[208] + Yh[559],
    qv = Yh[21] + Yh[30] + Yh[420] + Yh[558] + Yh[208] + Yh[544] + Yh[292] + Yh[198],
    Wv = Yh[138] + Yh[560],
    Uv = Yh[551],
    Vv = Yh[548],
    Xv = Yh[139] + Yh[88] + Yh[561],
    Zv = Yh[138] + Yh[82] + Yh[241] + Yh[562],
    Kv = Yh[21] + Yh[82] + Yh[241] + Yh[562],
    Jv = Yh[21] + Yh[69] + Yh[563] + Yh[29],
    Qv = Yh[21] + Yh[530] + Yh[28] + Yh[29],
    tb = Yh[21] + Yh[30] + Yh[28] + Yh[29],
    ib = Yh[30],
    nb = Yh[138] + Yh[564] + Yh[24] + Yh[565] + Yh[110] + Yh[566],
    eb = Yh[138] + Yh[30] + Yh[44] + Yh[567] + Yh[24] + Yh[565] + Yh[41] + Yh[462],
    sb = Yh[21] + Yh[568] + Yh[28] + Yh[29],
    hb = Yh[138] + Yh[82] + Yh[83] + Yh[472] + Yh[1] + Yh[569],
    rb = Yh[570],
    ab = Yh[571] + Yh[81],
    ob = Yh[571],
    fb = Yh[115] + Yh[243],
    cb = Yh[21] + Yh[572] + Yh[24] + Yh[573],
    ub = Yh[138] + Yh[574] + Yh[110] + Yh[554] + Yh[28] + Yh[29],
    _b = Yh[138] + Yh[575] + Yh[1] + Yh[317] + Yh[1] + Yh[518],
    db = Yh[138] + Yh[568] + Yh[208] + Yh[576] + Yh[110] + Yh[554] + Yh[28] + Yh[29],
    lb = Yh[21] + Yh[168],
    vb = Yh[162] + Yh[88] + Yh[577],
    bb = Yh[578] + Yh[88] + Yh[577],
    gb = Yh[138] + Yh[579],
    yb = Yh[580],
    xb = Yh[21] + Yh[581],
    pb = Yh[582],
    mb = Yh[583],
    Eb = Yh[21] + Yh[584],
    wb = Yh[138] + Yh[585],
    Tb = Yh[21] + Yh[586],
    kb = Yh[21] + Yh[530] + Yh[110] + Yh[554] + Yh[28] + Yh[29],
    Mb = Yh[547],
    Ob = Yh[21] + Yh[587],
    Ib = Yh[138] + Yh[568] + Yh[44] + Yh[567] + Yh[24] + Yh[565],
    Sb = Yh[549],
    jb = Yh[21] + Yh[53] + Yh[57] + Yh[588] + Yh[1] + Yh[569],
    Ab = Yh[550],
    Pb = Yh[546],
    Lb = Yh[589],
    Cb = Yh[590],
    Rb = Yh[591],
    Db = Yh[592],
    Nb = Yh[593],
    Bb = Yh[594] + Yh[243],
    $b = Yh[594] + Yh[116],
    Fb = Yh[21] + Yh[568] + Yh[57] + Yh[595] + Yh[57] + Yh[596],
    zb = Yh[21] + Yh[597],
    Gb = Yh[138] + Yh[598],
    Hb = Yh[138] + Yh[82] + Yh[83] + Yh[569] + Yh[110] + Yh[566],
    Yb = Yh[599],
    qb = Yh[585],
    Wb = Yh[587] + Yh[81],
    Ub = Yh[587],
    Vb = Yh[586] + Yh[81],
    Xb = Yh[586],
    Zb = Yh[21] + Yh[82] + Yh[600],
    Kb = Yh[601] + Yh[81],
    Jb = Yh[601],
    Qb = Yh[597] + Yh[81],
    tg = Yh[597],
    ig = Yh[48] + Yh[1] + Yh[556] + Yh[88] + Yh[602],
    ng = Yh[584] + Yh[81],
    eg = Yh[584],
    sg = Yh[21] + Yh[603] + Yh[88] + Yh[604],
    hg = Yh[48] + Yh[57] + Yh[181],
    rg = Yh[21] + Yh[605] + Yh[57] + Yh[181],
    ag = Yh[30] + Yh[28] + Yh[397] + Yh[95] + Yh[606],
    og = Yh[21] + Yh[607] + Yh[44] + Yh[608],
    fg = Yh[21] + Yh[609] + Yh[610],
    cg = Yh[21] + Yh[82] + Yh[83] + Yh[611] + Yh[179] + Yh[612] + Yh[44] + Yh[608],
    ug = Yh[21] + Yh[613] + Yh[179] + Yh[614],
    _g = Yh[138] + Yh[30] + Yh[28] + Yh[29],
    dg = Yh[138] + Yh[530] + Yh[28] + Yh[29],
    lg = Yh[615],
    vg = Yh[21] + Yh[613] + Yh[179] + Yh[612],
    bg = Yh[21] + Yh[568] + Yh[243],
    gg = Yh[21] + Yh[568] + Yh[116],
    yg = Yh[616] + Yh[116],
    xg = Yh[617] + Yh[57] + Yh[618] + Yh[243],
    pg = Yh[617] + Yh[57] + Yh[618] + Yh[116],
    mg = Yh[619] + Yh[1] + Yh[317],
    Eg = Yh[620],
    wg = Yh[99] + Yh[153] + Yh[99] + Yh[621] + Yh[99] + Yh[622],
    Tg = Yh[99] + Yh[153] + Yh[99] + Yh[621] + Yh[99] + Yh[623],
    kg = Yh[99] + Yh[153] + Yh[99] + Yh[624],
    Mg = Yh[99] + Yh[153] + Yh[99] + Yh[625],
    Og = Yh[99] + Yh[158] + Yh[99] + Yh[621] + Yh[99] + Yh[622],
    Ig = Yh[99] + Yh[158] + Yh[99] + Yh[621] + Yh[99] + Yh[623],
    Sg = Yh[99] + Yh[158] + Yh[99] + Yh[624],
    jg = Yh[99] + Yh[158] + Yh[99] + Yh[625],
    Ag = Yh[626],
    Pg = Yh[320],
    Lg = Yh[627] + Yh[67] + Yh[193] + Yh[103] + Yh[216] + Yh[438] + Yh[628] + Yh[104] + Yh[629] + Yh[630] + Yh[68] + Yh[513] + Yh[631] + Yh[512] + Yh[298] + Yh[632] + Yh[633] + Yh[634] + Yh[341] + Yh[635] + Yh[636] + Yh[637] + Yh[15] + Yh[638] + Yh[438] + Yh[83] + Yh[341] + Yh[639] + Yh[493] + Yh[81] + Yh[640] + Yh[298] + Yh[162] + Yh[81] + Yh[41] + Yh[199] + Yh[641] + Yh[83] + Yh[513] + Yh[642] + Yh[493] + Yh[643] + Yh[82] + Yh[644] + Yh[312] + Yh[645] + Yh[241] + Yh[646] + Yh[647] + Yh[648] + Yh[305] + Yh[649] + Yh[438] + Yh[24] + Yh[650] + Yh[24] + Yh[512] + Yh[208] + Yh[651] + Yh[652] + Yh[15] + Yh[653] + Yh[199] + Yh[654] + Yh[82] + Yh[438] + Yh[655] + Yh[656] + Yh[657] + Yh[658] + Yh[648] + Yh[39] + Yh[659] + Yh[256] + Yh[636] + Yh[243] + Yh[336] + Yh[660] + Yh[661] + Yh[662] + Yh[492] + Yh[663] + Yh[512] + Yh[200] + Yh[1] + Yh[664] + Yh[665] + Yh[312] + Yh[39] + Yh[200] + Yh[199] + Yh[39] + Yh[336] + Yh[666] + Yh[126] + Yh[341] + Yh[116] + Yh[512] + Yh[62] + Yh[667] + Yh[668] + Yh[669] + Yh[670] + Yh[671] + Yh[672] + Yh[636] + Yh[673] + Yh[636] + Yh[674] + Yh[638] + Yh[341] + Yh[438] + Yh[336] + Yh[675] + Yh[676] + Yh[677] + Yh[678] + Yh[241] + Yh[679] + Yh[680] + Yh[638] + Yh[47] + Yh[638] + Yh[68] + Yh[626],
    Cg = Yh[681] + Yh[14] + Yh[466],
    Rg = Yh[21] + Yh[82] + Yh[83] + Yh[682],
    Dg = Yh[21] + Yh[38] + Yh[683],
    Ng = Yh[21] + Yh[30] + Yh[88] + Yh[684],
    Bg = Yh[21] + Yh[492] + Yh[337],
    $g = Yh[298] + Yh[76] + Yh[298],
    Fg = Yh[53] + Yh[110] + Yh[554] + Yh[88] + Yh[685],
    zg = Yh[53] + Yh[686],
    Gg = Yh[383] + Yh[95] + Yh[114],
    Hg = Yh[95] + Yh[114],
    Yg = Yh[24] + Yh[150],
    qg = Yh[28] + Yh[29],
    Wg = Yh[432] + Yh[687],
    Ug = Yh[57] + Yh[519],
    Vg = Yh[57] + Yh[181],
    Xg = Yh[57] + Yh[181] + Yh[208] + Yh[435],
    Zg = Yh[688] + Yh[457],
    Kg = Yh[144] + Yh[430],
    Jg = Yh[144] + Yh[131],
    Qg = Yh[144] + Yh[135],
    ty = Yh[53] + Yh[208] + Yh[689] + Yh[126] + Yh[127],
    iy = Yh[432] + Yh[271] + Yh[44] + Yh[45],
    ny = Yh[57] + Yh[595] + Yh[88] + Yh[685],
    ey = Yh[690],
    sy = Yh[691],
    hy = Yh[149] + Yh[692] + Yh[106],
    ry = Yh[693],
    ay = Yh[694],
    oy = Yh[251] + Yh[76] + Yh[695],
    fy = Yh[251],
    cy = Yh[427],
    uy = Yh[696],
    _y = Yh[696] + Yh[76] + Yh[432],
    dy = Yh[696] + Yh[76] + Yh[32],
    ly = Yh[697],
    vy = Yh[697] + Yh[76] + Yh[432],
    by = Yh[697] + Yh[76] + Yh[32],
    gy = Yh[697] + Yh[76] + Yh[432] + Yh[76] + Yh[32],
    yy = Yh[697] + Yh[76] + Yh[32] + Yh[76] + Yh[432],
    xy = Yh[698] + Yh[76] + Yh[276],
    py = Yh[698] + Yh[76] + Yh[121],
    my = Yh[698] + Yh[76] + Yh[85],
    Ey = Yh[698] + Yh[76] + Yh[86],
    wy = Yh[699],
    Ty = Yh[700],
    ky = Yh[695],
    My = Yh[701],
    Oy = Yh[702],
    Iy = Yh[703],
    Sy = Yh[704],
    jy = Yh[705],
    Ay = Yh[706],
    Py = Yh[707],
    Ly = Yh[708],
    Cy = Yh[709],
    Ry = Yh[710],
    Dy = Yh[711],
    Ny = Yh[712],
    By = Yh[713],
    $y = Yh[714],
    Fy = Yh[715] + Yh[76] + Yh[716],
    zy = Yh[715] + Yh[76] + Yh[200],
    Gy = Yh[715] + Yh[76] + Yh[81],
    Hy = Yh[715] + Yh[76] + Yh[299],
    Yy = Yh[715] + Yh[76] + Yh[336],
    qy = Yh[715] + Yh[76] + Yh[241],
    Wy = Yh[715] + Yh[76] + Yh[337],
    Uy = Yh[715] + Yh[76] + Yh[254],
    Vy = Yh[715] + Yh[76] + Yh[638],
    Xy = Yh[715] + Yh[76] + Yh[141],
    Zy = Yh[177] + Yh[21] + Yh[717] + Yh[21] + Yh[348] + Yh[21] + Yh[718],
    Ky = Yh[719],
    Jy = Yh[177] + Yh[21] + Yh[717] + Yh[21] + Yh[348] + Yh[21] + Yh[720],
    Qy = Yh[183],
    tx = Yh[177] + Yh[21] + Yh[721] + Yh[21] + Yh[348] + Yh[21] + Yh[368],
    ix = Yh[177] + Yh[21] + Yh[721] + Yh[21] + Yh[348] + Yh[21] + Yh[722],
    nx = Yh[723],
    ex = Yh[724] + Yh[21] + Yh[348],
    sx = Yh[724] + Yh[21] + Yh[348] + Yh[21] + Yh[725],
    hx = Yh[724] + Yh[21] + Yh[725] + Yh[21] + Yh[726],
    rx = Yh[724] + Yh[21] + Yh[225],
    ax = Yh[727] + Yh[21] + Yh[728],
    ox = Yh[417] + Yh[21] + Yh[487] + Yh[21] + Yh[165],
    fx = Yh[22] + Yh[1] + Yh[300],
    cx = Yh[242],
    ux = Yh[729] + Yh[1] + Yh[730] + Yh[110] + Yh[159],
    _x = Yh[26] + Yh[203] + Yh[24] + Yh[150] + Yh[200],
    dx = Yh[26] + Yh[203] + Yh[24] + Yh[150] + Yh[81],
    lx = Yh[417] + Yh[21] + Yh[728],
    vx = Yh[21] + Yh[731],
    bx = Yh[307] + Yh[305] + Yh[209],
    gx = Yh[179] + Yh[180] + Yh[47] + Yh[144] + Yh[47] + Yh[79] + Yh[217],
    yx = Yh[21] + Yh[277],
    xx = Yh[377],
    px = Yh[21] + Yh[146],
    mx = Yh[21] + Yh[147],
    Ex = Yh[732],
    wx = Yh[175] + Yh[88] + Yh[350],
    Tx = Yh[72] + Yh[733],
    kx = Yh[175],
    Mx = Yh[734],
    Ox = Yh[475] + Yh[47],
    Ix = Yh[72] + Yh[735],
    Sx = Yh[425] + Yh[110] + Yh[134],
    jx = Yh[427] + Yh[62] + Yh[736],
    Ax = Yh[427] + Yh[14] + Yh[119] + Yh[243],
    Px = Yh[427] + Yh[14] + Yh[119] + Yh[116],
    Lx = Yh[44] + Yh[737] + Yh[738],
    Cx = Yh[28] + Yh[739] + Yh[738],
    Rx = Yh[301] + Yh[1] + Yh[428],
    Dx = Yh[21] + Yh[31] + Yh[1] + Yh[740],
    Nx = Yh[487] + Yh[21] + Yh[741] + Yh[21] + Yh[742],
    Bx = Yh[216],
    $x = Yh[144],
    Fx = Yh[323] + Yh[179] + Yh[180],
    zx = Yh[743],
    Gx = Yh[744] + Yh[21] + Yh[348] + Yh[21] + Yh[227],
    Hx = Yh[745],
    Yx = Yh[22] + Yh[44] + Yh[746] + Yh[256] + Yh[257],
    qx = Yh[744] + Yh[21] + Yh[348] + Yh[21] + Yh[747],
    Wx = Yh[149] + Yh[1] + Yh[428] + Yh[88] + Yh[276],
    Ux = Yh[227] + Yh[21] + Yh[744] + Yh[21] + Yh[359],
    Vx = Yh[227] + Yh[21] + Yh[744] + Yh[21] + Yh[357],
    Xx = Yh[747] + Yh[21] + Yh[744],
    Zx = Yh[748] + Yh[21] + Yh[227] + Yh[21] + Yh[744],
    Kx = Yh[664],
    Jx = Yh[749],
    Qx = Yh[661],
    tp = Yh[750] + Yh[21] + Yh[751] + Yh[21] + Yh[380],
    ip = Yh[750] + Yh[21] + Yh[752] + Yh[21] + Yh[380],
    np = Yh[750] + Yh[21] + Yh[753] + Yh[21] + Yh[380],
    ep = Yh[750] + Yh[21] + Yh[754] + Yh[21] + Yh[380],
    sp = Yh[750] + Yh[21] + Yh[755],
    hp = Yh[53] + Yh[305] + Yh[756],
    rp = Yh[69] + Yh[135],
    ap = Yh[434] + Yh[1] + Yh[428],
    op = Yh[434] + Yh[88] + Yh[757] + Yh[62] + Yh[736],
    fp = Yh[434] + Yh[88] + Yh[757] + Yh[14] + Yh[119] + Yh[243],
    cp = Yh[434] + Yh[88] + Yh[757] + Yh[14] + Yh[119] + Yh[116],
    up = Yh[724] + Yh[21] + Yh[348] + Yh[21] + Yh[758],
    _p = Yh[434] + Yh[62] + Yh[759],
    dp = Yh[760],
    lp = Yh[434] + Yh[110] + Yh[283],
    vp = Yh[760] + Yh[88] + Yh[350],
    bp = Yh[66] + Yh[67] + Yh[298] + Yh[68] + Yh[298] + Yh[68] + Yh[298] + Yh[68] + Yh[298] + Yh[71],
    gp = Yh[175] + Yh[1] + Yh[428],
    yp = Yh[175] + Yh[256] + Yh[257],
    xp = Yh[21] + Yh[175] + Yh[256] + Yh[257],
    pp = Yh[270] + Yh[41] + Yh[761] + Yh[1] + Yh[428],
    mp = Yh[270] + Yh[57] + Yh[271] + Yh[1] + Yh[422],
    Ep = Yh[270] + Yh[57] + Yh[271] + Yh[423] + Yh[424],
    wp = Yh[21] + Yh[762] + Yh[24] + Yh[763],
    Tp = Yh[764],
    kp = Yh[765],
    Mp = Yh[230] + Yh[76] + Yh[766],
    Op = Yh[767] + Yh[76] + Yh[766],
    Ip = Yh[768],
    Sp = Yh[594],
    jp = Yh[769],
    Ap = Yh[221] + Yh[21] + Yh[222],
    Pp = Yh[770] + Yh[24] + Yh[194],
    Lp = Yh[72] + Yh[200] + Yh[1] + Yh[337] + Yh[62] + Yh[83] + Yh[57],
    Cp = Yh[72] + Yh[771],
    Rp = Yh[72] + Yh[772] + Yh[28] + Yh[638] + Yh[62],
    Dp = Yh[72] + Yh[773] + Yh[62] + Yh[774],
    Np = Yh[72] + Yh[773] + Yh[39] + Yh[775],
    Bp = Yh[72] + Yh[776] + Yh[1] + Yh[777],
    $p = Yh[72] + Yh[778],
    Fp = Yh[72] + Yh[200] + Yh[57] + Yh[337] + Yh[1] + Yh[83] + Yh[41],
    zp = Yh[72] + Yh[779] + Yh[62] + Yh[298],
    Gp = Yh[72] + Yh[780] + Yh[781],
    Hp = Yh[72] + Yh[200] + Yh[41] + Yh[337] + Yh[782] + Yh[81],
    Yp = Yh[72] + Yh[773] + Yh[39] + Yh[783],
    qp = Yh[72] + Yh[784],
    Wp = Yh[72] + Yh[81] + Yh[648] + Yh[638] + Yh[785],
    Up = Yh[72] + Yh[786],
    Vp = Yh[723] + Yh[44] + Yh[787],
    Xp = Yh[72] + Yh[788] + Yh[57] + Yh[777],
    Zp = Yh[72] + Yh[789],
    Kp = Yh[72] + Yh[200] + Yh[41] + Yh[790] + Yh[39] + Yh[336],
    Jp = Yh[72] + Yh[791] + Yh[792] + Yh[81],
    Qp = Yh[72] + Yh[793] + Yh[794],
    tm = Yh[72] + Yh[200] + Yh[28] + Yh[337] + Yh[795] + Yh[298],
    im = Yh[72] + Yh[796],
    nm = Yh[72] + Yh[15] + Yh[254] + Yh[15] + Yh[638] + Yh[15] + Yh[638],
    em = Yh[72] + Yh[337] + Yh[39] + Yh[797],
    sm = Yh[72] + Yh[336] + Yh[41] + Yh[336] + Yh[1] + Yh[336] + Yh[62],
    hm = Yh[72] + Yh[798],
    rm = Yh[72] + Yh[799],
    am = Yh[72] + Yh[337] + Yh[41] + Yh[337] + Yh[28] + Yh[337] + Yh[41],
    om = Yh[72] + Yh[336] + Yh[1] + Yh[800],
    fm = Yh[72] + Yh[801],
    cm = Yh[72] + Yh[254] + Yh[57] + Yh[254] + Yh[57] + Yh[254] + Yh[57],
    um = Yh[72] + Yh[802],
    _m = Yh[72] + Yh[803],
    dm = Yh[72] + Yh[804],
    lm = Yh[72] + Yh[83] + Yh[28] + Yh[83] + Yh[57] + Yh[83] + Yh[57],
    vm = Yh[72] + Yh[39] + Yh[254] + Yh[39] + Yh[241] + Yh[39] + Yh[336],
    bm = Yh[72] + Yh[39] + Yh[83] + Yh[39] + Yh[337] + Yh[39] + Yh[241],
    gm = Yh[72] + Yh[39] + Yh[254] + Yh[39] + Yh[336] + Yh[39] + Yh[299],
    ym = Yh[72] + Yh[805],
    xm = Yh[72] + Yh[28] + Yh[83] + Yh[806],
    pm = Yh[72] + Yh[83] + Yh[807] + Yh[298] + Yh[749] + Yh[298],
    mm = Yh[808] + Yh[1] + Yh[730] + Yh[110] + Yh[159],
    Em = Yh[72] + Yh[490] + Yh[83] + Yh[809],
    wm = Yh[72] + Yh[299] + Yh[648] + Yh[299] + Yh[749] + Yh[810],
    Tm = Yh[72] + Yh[62] + Yh[81] + Yh[811],
    km = Yh[72] + Yh[81] + Yh[28] + Yh[638] + Yh[812],
    Mm = Yh[72] + Yh[813],
    Om = Yh[72] + Yh[493] + Yh[241] + Yh[493] + Yh[241] + Yh[493] + Yh[337],
    Im = Yh[399] + Yh[99],
    Sm = Yh[21] + Yh[267] + Yh[243],
    jm = Yh[814],
    Am = Yh[21] + Yh[82] + Yh[815],
    Pm = Yh[21] + Yh[82] + Yh[83] + Yh[740],
    Lm = Yh[21] + Yh[816],
    Cm = Yh[21] + Yh[82] + Yh[254] + Yh[491],
    Rm = Yh[21] + Yh[82] + Yh[254] + Yh[817] + Yh[179] + Yh[180],
    Dm = Yh[818],
    Nm = Yh[35] + Yh[62] + Yh[819],
    Bm = Yh[35],
    $m = Yh[35] + Yh[62] + Yh[820],
    Fm = Yh[179] + Yh[313] + Yh[47] + Yh[821] + Yh[47] + Yh[822] + Yh[76],
    zm = Yh[823],
    Gm = Yh[305] + Yh[824] + Yh[47] + Yh[749] + Yh[47] + Yh[823] + Yh[47] + Yh[825] + Yh[76],
    Hm = Yh[35] + Yh[292] + Yh[826],
    Ym = Yh[230] + Yh[95] + Yh[827],
    qm = Yh[828],
    Wm = Yh[829],
    Um = Yh[830] + Yh[1] + Yh[428],
    Vm = Yh[831] + Yh[41] + Yh[259],
    Xm = Yh[831] + Yh[88] + Yh[249],
    Zm = Yh[832],
    Km = Yh[833] + Yh[208] + Yh[834],
    Jm = Yh[469] + Yh[179] + Yh[835],
    Qm = Yh[814] + Yh[110] + Yh[282],
    tE = Yh[273] + Yh[179] + Yh[316],
    iE = Yh[836],
    nE = Yh[837],
    eE = Yh[838] + Yh[432] + Yh[839],
    sE = Yh[840],
    hE = Yh[841],
    rE = Yh[842],
    aE = Yh[843] + Yh[57] + Yh[181],
    oE = Yh[844],
    fE = Yh[845],
    cE = Yh[846],
    uE = Yh[134] + Yh[110] + Yh[283],
    _E = Yh[847],
    dE = Yh[848],
    lE = Yh[843],
    vE = Yh[849],
    bE = Yh[275] + Yh[88] + Yh[249],
    gE = Yh[850] + Yh[208] + Yh[622] + Yh[1] + Yh[209] + Yh[88] + Yh[249],
    yE = Yh[134],
    xE = Yh[851],
    pE = Yh[292] + Yh[852] + Yh[47] + Yh[853] + Yh[498] + Yh[298] + Yh[201],
    mE = Yh[854],
    EE = Yh[552],
    wE = Yh[829] + Yh[126] + Yh[127],
    TE = Yh[855] + Yh[126] + Yh[127],
    kE = Yh[856] + Yh[1] + Yh[209],
    ME = Yh[174] + Yh[32] + Yh[857] + Yh[217],
    OE = Yh[174] + Yh[24] + Yh[858] + Yh[47] + Yh[57] + Yh[859] + Yh[217],
    IE = Yh[860] + Yh[57] + Yh[859],
    SE = Yh[861],
    jE = Yh[15] + Yh[862] + Yh[493] + Yh[336] + Yh[648] + Yh[863] + Yh[864] + Yh[254] + Yh[749] + Yh[865] + Yh[648] + Yh[866] + Yh[490] + Yh[299] + Yh[867] + Yh[83] + Yh[868] + Yh[869] + Yh[870] + Yh[871] + Yh[872] + Yh[298] + Yh[493] + Yh[241] + Yh[15] + Yh[873] + Yh[749] + Yh[874] + Yh[875] + Yh[876] + Yh[490] + Yh[877] + Yh[878] + Yh[299] + Yh[879] + Yh[298] + Yh[880] + Yh[881] + Yh[493] + Yh[882] + Yh[883] + Yh[884] + Yh[885] + Yh[299] + Yh[648] + Yh[886] + Yh[15] + Yh[887] + Yh[888] + Yh[337] + Yh[493] + Yh[889] + Yh[15] + Yh[890] + Yh[891] + Yh[83] + Yh[892] + Yh[893] + Yh[15] + Yh[83] + Yh[490] + Yh[241] + Yh[162] + Yh[200] + Yh[648] + Yh[336] + Yh[648] + Yh[894] + Yh[493] + Yh[81] + Yh[162] + Yh[876] + Yh[895] + Yh[638] + Yh[162] + Yh[299] + Yh[648] + Yh[68] + Yh[896] + Yh[200] + Yh[749] + Yh[897] + Yh[162] + Yh[898] + Yh[749] + Yh[899] + Yh[15] + Yh[900] + Yh[875] + Yh[901] + Yh[902] + Yh[903] + Yh[904] + Yh[336] + Yh[905] + Yh[906] + Yh[907] + Yh[908] + Yh[749] + Yh[254] + Yh[909] + Yh[299] + Yh[490] + Yh[298] + Yh[910] + Yh[911] + Yh[912] + Yh[913] + Yh[648] + Yh[914] + Yh[915] + Yh[298] + Yh[490] + Yh[916] + Yh[917] + Yh[918] + Yh[896] + Yh[919] + Yh[920] + Yh[921] + Yh[490] + Yh[298] + Yh[922] + Yh[923] + Yh[924] + Yh[925] + Yh[490] + Yh[926] + Yh[927] + Yh[83] + Yh[493] + Yh[928] + Yh[490] + Yh[929] + Yh[930] + Yh[337] + Yh[931] + Yh[932] + Yh[749] + Yh[933] + Yh[648] + Yh[200] + Yh[934] + Yh[935] + Yh[936] + Yh[638] + Yh[490] + Yh[937] + Yh[648] + Yh[938] + Yh[930] + Yh[68] + Yh[638] + Yh[939] + Yh[83] + Yh[15] + Yh[81] + Yh[15] + Yh[940] + Yh[648] + Yh[941] + Yh[885] + Yh[942] + Yh[883] + Yh[200] + Yh[490] + Yh[943] + Yh[648] + Yh[336] + Yh[944] + Yh[945] + Yh[162] + Yh[946] + Yh[947] + Yh[948] + Yh[949] + Yh[950] + Yh[951] + Yh[952] + Yh[493] + Yh[83] + Yh[895] + Yh[810] + Yh[490] + Yh[953] + Yh[15] + Yh[954] + Yh[493] + Yh[241] + Yh[94] + Yh[955] + Yh[648] + Yh[956] + Yh[15] + Yh[957] + Yh[749] + Yh[299] + Yh[490] + Yh[83] + Yh[749] + Yh[958] + Yh[959] + Yh[960] + Yh[749] + Yh[600] + Yh[749] + Yh[961] + Yh[962] + Yh[963] + Yh[964] + Yh[965] + Yh[490] + Yh[966] + Yh[490] + Yh[967] + Yh[493] + Yh[638] + Yh[493] + Yh[968] + Yh[878] + Yh[969] + Yh[490] + Yh[299] + Yh[162] + Yh[970] + Yh[892] + Yh[935] + Yh[15],
    AE = Yh[174] + Yh[44] + Yh[971] + Yh[47] + Yh[69] + Yh[498],
    PE = Yh[415] + Yh[972] + Yh[973] + Yh[415] + Yh[299] + Yh[39] + Yh[415] + Yh[972] + Yh[974] + Yh[76] + Yh[294] + Yh[76] + Yh[847] + Yh[415] + Yh[81] + Yh[1] + Yh[975] + Yh[76] + Yh[294] + Yh[76] + Yh[847] + Yh[415] + Yh[81] + Yh[1] + Yh[976] + Yh[76] + Yh[294] + Yh[76] + Yh[847],
    LE = Yh[977],
    CE = Yh[978],
    RE = Yh[979],
    DE = Yh[191] + Yh[110],
    NE = Yh[980],
    BE = Yh[254] + Yh[76],
    $E = Yh[936],
    FE = Yh[84],
    zE = Yh[981],
    GE = Yh[1] + Yh[300],
    HE = Yh[95] + Yh[982],
    YE = Yh[1] + Yh[983],
    qE = Yh[984],
    WE = Yh[985],
    UE = Yh[986],
    VE = Yh[987],
    XE = Yh[988],
    ZE = Yh[989],
    KE = Yh[990],
    JE = Yh[991],
    QE = Yh[473],
    tw = Yh[992],
    iw = Yh[993],
    nw = Yh[399] + Yh[994],
    ew = Yh[47] + Yh[278] + Yh[47] + Yh[995] + Yh[241],
    sw = Yh[996],
    hw = Yh[997],
    rw = Yh[998] + Yh[420] + Yh[558],
    aw = Yh[999],
    ow = Yh[1e3] + Yh[76] + Yh[876] + Yh[76] + Yh[200],
    fw = Yh[88] + Yh[89],
    cw = Yh[1001],
    uw = Yh[28] + Yh[397],
    _w = Yh[306],
    dw = Yh[1002],
    lw = Yh[1003] + Yh[420] + Yh[558],
    vw = Yh[57] + Yh[859],
    bw = Yh[1004],
    gw = Yh[134] + Yh[81] + Yh[57],
    yw = Yh[312] + Yh[110] + Yh[134],
    xw = Yh[1005],
    pw = Yh[298] + Yh[47] + Yh[298],
    mw = Yh[399] + Yh[99] + Yh[1] + Yh[300],
    Ew = Yh[399] + Yh[99] + Yh[1] + Yh[300] + Yh[24] + Yh[1006],
    ww = Yh[399] + Yh[99] + Yh[256] + Yh[400],
    Tw = Yh[21] + Yh[82] + Yh[790],
    kw = Yh[21] + Yh[82] + Yh[254] + Yh[311],
    Mw = Yh[21] + Yh[1007] + Yh[44] + Yh[45],
    Ow = Yh[21] + Yh[1008],
    Iw = Yh[191] + Yh[24] + Yh[1009],
    Sw = Yh[21] + Yh[522] + Yh[610],
    jw = Yh[248],
    Aw = Yh[21] + Yh[82] + Yh[83] + Yh[162],
    Pw = Yh[1010],
    Lw = Yh[1008],
    Cw = Yh[21] + Yh[1011] + Yh[683],
    Rw = Yh[21] + Yh[82] + Yh[83] + Yh[289],
    Dw = Yh[21] + Yh[82] + Yh[241] + Yh[162],
    Nw = Yh[210] + Yh[95] + Yh[1012],
    Bw = Yh[1013],
    $w = Yh[21] + Yh[82] + Yh[241] + Yh[201],
    Fw = Yh[21] + Yh[82] + Yh[1014],
    zw = Yh[21] + Yh[82] + Yh[1015],
    Gw = Yh[489],
    Hw = Yh[661] + Yh[179] + Yh[316],
    Yw = Yh[1016] + Yh[62] + Yh[524],
    qw = Yh[21] + Yh[82] + Yh[83] + Yh[1017],
    Ww = Yh[21] + Yh[82] + Yh[254] + Yh[1018],
    Uw = Yh[21] + Yh[82] + Yh[83] + Yh[162] + Yh[1] + Yh[300] + Yh[88] + Yh[249] + Yh[41] + Yh[259],
    Vw = Yh[191] + Yh[88] + Yh[249],
    Xw = Yh[1019] + Yh[110] + Yh[192],
    Zw = Yh[21] + Yh[82] + Yh[83] + Yh[556] + Yh[208] + Yh[1020],
    Kw = Yh[1021] + Yh[208] + Yh[1020],
    Jw = Yh[138] + Yh[82] + Yh[83] + Yh[1022] + Yh[208] + Yh[1020],
    Qw = Yh[1013] + Yh[67],
    tT = Yh[48] + Yh[28] + Yh[397] + Yh[62] + Yh[199] + Yh[179] + Yh[162],
    iT = Yh[21] + Yh[82] + Yh[241] + Yh[512],
    nT = Yh[21] + Yh[82] + Yh[83] + Yh[1023],
    eT = Yh[1024] + Yh[28] + Yh[397],
    sT = Yh[1025] + Yh[179] + Yh[316],
    hT = Yh[69] + Yh[44] + Yh[1026],
    rT = Yh[724] + Yh[21] + Yh[388],
    aT = Yh[1027] + Yh[179] + Yh[162],
    oT = Yh[138] + Yh[1028],
    fT = Yh[138] + Yh[1029],
    cT = Yh[1030],
    uT = Yh[21] + Yh[82] + Yh[83] + Yh[159],
    _T = Yh[21] + Yh[82] + Yh[83] + Yh[162] + Yh[62] + Yh[188] + Yh[41] + Yh[259],
    dT = Yh[21] + Yh[82] + Yh[254] + Yh[1031] + Yh[1] + Yh[300],
    lT = Yh[21] + Yh[1008] + Yh[1] + Yh[1032],
    vT = Yh[161] + Yh[62] + Yh[188],
    bT = Yh[21] + Yh[69] + Yh[179] + Yh[1033] + Yh[95] + Yh[114],
    gT = Yh[416] + Yh[21] + Yh[1034],
    yT = Yh[1035] + Yh[76] + Yh[570],
    xT = Yh[416] + Yh[21] + Yh[1036],
    pT = Yh[1035] + Yh[76] + Yh[1037],
    mT = Yh[416] + Yh[21] + Yh[348],
    ET = Yh[21] + Yh[1038],
    wT = Yh[21] + Yh[276] + Yh[1] + Yh[300],
    TT = Yh[21] + Yh[82] + Yh[241] + Yh[199],
    kT = Yh[21] + Yh[336] + Yh[198],
    MT = Yh[21] + Yh[1029] + Yh[41] + Yh[1039],
    OT = Yh[53] + Yh[62] + Yh[310] + Yh[28] + Yh[390],
    IT = Yh[1027] + Yh[62] + Yh[188],
    ST = Yh[48] + Yh[1040] + Yh[199] + Yh[208] + Yh[544] + Yh[28] + Yh[29],
    jT = Yh[21] + Yh[337] + Yh[648],
    AT = Yh[278] + Yh[28] + Yh[279] + Yh[95] + Yh[1041],
    PT = Yh[21] + Yh[935],
    LT = Yh[21] + Yh[1008] + Yh[1] + Yh[476],
    CT = Yh[21] + Yh[1042] + Yh[39] + Yh[1043],
    RT = Yh[167] + Yh[110] + Yh[159],
    DT = Yh[21] + Yh[917],
    NT = Yh[21] + Yh[638] + Yh[648] + Yh[1] + Yh[476],
    BT = Yh[1044] + Yh[76] + Yh[264],
    $T = Yh[26] + Yh[193],
    FT = Yh[138] + Yh[1045],
    zT = Yh[301] + Yh[88] + Yh[577],
    GT = Yh[149] + Yh[95] + Yh[114],
    HT = Yh[248] + Yh[95] + Yh[1046],
    YT = Yh[1047],
    qT = Yh[1027] + Yh[1] + Yh[1048],
    WT = Yh[1049],
    UT = Yh[30] + Yh[24] + Yh[25] + Yh[1] + Yh[518],
    VT = Yh[248] + Yh[57] + Yh[181],
    XT = Yh[21] + Yh[82] + Yh[83] + Yh[492],
    ZT = Yh[21] + Yh[376] + Yh[62] + Yh[310] + Yh[179] + Yh[258] + Yh[41] + Yh[259],
    KT = Yh[21] + Yh[82] + Yh[241] + Yh[648],
    JT = Yh[187] + Yh[28] + Yh[309] + Yh[62] + Yh[310],
    QT = Yh[278] + Yh[28] + Yh[279] + Yh[62] + Yh[199] + Yh[57] + Yh[1050] + Yh[41] + Yh[1051],
    tk = Yh[138] + Yh[312] + Yh[299],
    ik = Yh[0] + Yh[28] + Yh[309],
    nk = Yh[48] + Yh[179] + Yh[316] + Yh[62] + Yh[199] + Yh[179] + Yh[162],
    ek = Yh[375] + Yh[523],
    sk = Yh[130] + Yh[477] + Yh[47] + Yh[1052],
    hk = Yh[191] + Yh[179] + Yh[316] + Yh[62] + Yh[1053],
    rk = Yh[191] + Yh[179] + Yh[316] + Yh[39] + Yh[1054],
    ak = Yh[1008] + Yh[62] + Yh[188],
    ok = Yh[21] + Yh[1055] + Yh[208] + Yh[435],
    fk = Yh[1056],
    ck = Yh[21] + Yh[82] + Yh[254] + Yh[1031] + Yh[208],
    uk = Yh[21] + Yh[1057] + Yh[62] + Yh[188],
    _k = Yh[48] + Yh[256] + Yh[1058] + Yh[62] + Yh[188],
    dk = Yh[248] + Yh[32] + Yh[1059],
    lk = Yh[1027],
    vk = Yh[21] + Yh[82] + Yh[1060],
    bk = Yh[399] + Yh[76] + Yh[28] + Yh[397],
    gk = Yh[1061],
    yk = Yh[280] + Yh[88] + Yh[1062],
    xk = Yh[1063] + Yh[256] + Yh[1064],
    pk = Yh[26] + Yh[206],
    mk = Yh[399] + Yh[76] + Yh[28] + Yh[309],
    Ek = Yh[21] + Yh[82] + Yh[83] + Yh[655],
    wk = Yh[1065],
    Tk = Yh[1066] + Yh[76] + Yh[1067],
    kk = Yh[1068] + Yh[24] + Yh[194] + Yh[1] + Yh[518],
    Mk = Yh[149] + Yh[24] + Yh[194] + Yh[88] + Yh[1069],
    Ok = Yh[1070],
    Ik = Yh[69],
    Sk = Yh[389] + Yh[28] + Yh[390],
    jk = Yh[399] + Yh[99] + Yh[480],
    Ak = Yh[26] + Yh[1071],
    Pk = Yh[21] + Yh[1072] + Yh[305] + Yh[465],
    Lk = Yh[0] + Yh[44] + Yh[1073],
    Ck = Yh[1074] + Yh[88] + Yh[1075],
    Rk = Yh[30] + Yh[24] + Yh[1009] + Yh[1] + Yh[476],
    Dk = Yh[21] + Yh[82] + Yh[83] + Yh[341],
    Nk = Yh[1071],
    Bk = Yh[246],
    $k = Yh[0] + Yh[41] + Yh[1076],
    Fk = Yh[69] + Yh[41] + Yh[1076],
    zk = Yh[21] + Yh[246],
    Gk = Yh[399] + Yh[76] + Yh[305] + Yh[209],
    Hk = Yh[1077] + Yh[76] + Yh[149],
    Yk = Yh[1077] + Yh[76] + Yh[10],
    qk = Yh[1078] + Yh[24] + Yh[91],
    Wk = Yh[1066],
    Uk = Yh[1079] + Yh[21] + Yh[1080],
    Vk = Yh[334] + Yh[21] + Yh[380],
    Xk = Yh[399] + Yh[76] + Yh[88] + Yh[262] + Yh[305] + Yh[209],
    Zk = Yh[1081] + Yh[110] + Yh[159],
    Kk = Yh[10] + Yh[24] + Yh[194] + Yh[88] + Yh[1069],
    Jk = Yh[1082],
    Qk = Yh[263],
    tM = Yh[399] + Yh[76] + Yh[62] + Yh[1083],
    iM = Yh[463] + Yh[88] + Yh[395] + Yh[305] + Yh[396],
    nM = Yh[1084] + Yh[21] + Yh[348],
    eM = Yh[1084] + Yh[21] + Yh[348] + Yh[21] + Yh[1085],
    sM = Yh[1084] + Yh[21] + Yh[1086],
    hM = Yh[1084] + Yh[21] + Yh[1087] + Yh[21] + Yh[165],
    rM = Yh[248] + Yh[41] + Yh[259],
    aM = Yh[26] + Yh[1088] + Yh[110] + Yh[283],
    oM = Yh[1088],
    fM = Yh[26] + Yh[460] + Yh[88] + Yh[249],
    cM = Yh[1084] + Yh[21] + Yh[1089],
    uM = Yh[399] + Yh[76] + Yh[256] + Yh[1064],
    _M = Yh[21] + Yh[82] + Yh[918],
    dM = Yh[460] + Yh[88] + Yh[249],
    lM = Yh[1088] + Yh[110] + Yh[283],
    vM = Yh[1088] + Yh[179] + Yh[180],
    bM = Yh[256] + Yh[1064],
    gM = Yh[399] + Yh[76] + Yh[110] + Yh[134],
    yM = Yh[110] + Yh[134],
    xM = Yh[72] + Yh[1090],
    pM = Yh[26] + Yh[1078] + Yh[24] + Yh[150],
    mM = Yh[434] + Yh[62] + Yh[255] + Yh[1] + Yh[428],
    EM = Yh[175] + Yh[95] + Yh[114],
    wM = Yh[425] + Yh[95] + Yh[114],
    TM = Yh[1091] + Yh[88] + Yh[1092],
    kM = Yh[1091] + Yh[88] + Yh[1092] + Yh[88] + Yh[1062],
    MM = Yh[26] + Yh[1093],
    OM = Yh[1057] + Yh[39] + Yh[1094],
    IM = Yh[242] + Yh[243],
    SM = Yh[724] + Yh[21] + Yh[348] + Yh[21] + Yh[758] + Yh[21] + Yh[1085],
    jM = Yh[21] + Yh[1095],
    AM = Yh[251] + Yh[1] + Yh[428],
    PM = Yh[251] + Yh[44] + Yh[272] + Yh[57] + Yh[271],
    LM = Yh[251] + Yh[44] + Yh[272] + Yh[57] + Yh[271] + Yh[14] + Yh[119],
    CM = Yh[26] + Yh[248] + Yh[57] + Yh[181],
    RM = Yh[26] + Yh[260] + Yh[256] + Yh[257],
    DM = Yh[26] + Yh[260] + Yh[1] + Yh[428],
    NM = Yh[443],
    BM = Yh[187] + Yh[88] + Yh[249],
    $M = Yh[30] + Yh[62] + Yh[188] + Yh[1] + Yh[476],
    FM = Yh[26] + Yh[248] + Yh[44] + Yh[218],
    zM = Yh[26] + Yh[1030],
    GM = Yh[26] + Yh[252] + Yh[28] + Yh[269],
    HM = Yh[1096],
    YM = Yh[26] + Yh[248] + Yh[32] + Yh[1059],
    qM = Yh[30] + Yh[57] + Yh[181] + Yh[1] + Yh[476],
    WM = Yh[32] + Yh[1059],
    UM = Yh[44] + Yh[218],
    VM = Yh[39] + Yh[240] + Yh[24] + Yh[150],
    XM = Yh[88] + Yh[249],
    ZM = Yh[758] + Yh[21] + Yh[1097],
    KM = Yh[62] + Yh[255] + Yh[256] + Yh[257],
    JM = Yh[724] + Yh[21] + Yh[758],
    QM = Yh[95] + Yh[247],
    tO = Yh[347] + Yh[21] + Yh[348] + Yh[21] + Yh[1098],
    iO = Yh[347] + Yh[21] + Yh[348] + Yh[21] + Yh[164],
    nO = Yh[434] + Yh[76] + Yh[230],
    eO = Yh[434] + Yh[76] + Yh[251],
    sO = Yh[724] + Yh[21] + Yh[725] + Yh[21] + Yh[379] + Yh[21] + Yh[243],
    hO = Yh[724] + Yh[21] + Yh[725] + Yh[21] + Yh[379] + Yh[21] + Yh[116],
    rO = Yh[434] + Yh[76] + Yh[196],
    aO = Yh[1099] + Yh[21] + Yh[225],
    oO = Yh[301] + Yh[76] + Yh[230],
    fO = Yh[1100],
    cO = Yh[1093],
    uO = Yh[725] + Yh[21] + Yh[726],
    _O = Yh[427] + Yh[76] + Yh[1101],
    dO = Yh[725] + Yh[21] + Yh[225],
    lO = Yh[427] + Yh[76] + Yh[230],
    vO = Yh[725] + Yh[21] + Yh[379] + Yh[21] + Yh[243],
    bO = Yh[427] + Yh[76] + Yh[242] + Yh[76] + Yh[201],
    gO = Yh[725] + Yh[21] + Yh[379] + Yh[21] + Yh[116],
    yO = Yh[427] + Yh[76] + Yh[242] + Yh[76] + Yh[199],
    xO = Yh[1102] + Yh[76] + Yh[425],
    pO = Yh[324] + Yh[21] + Yh[1103] + Yh[21] + Yh[164],
    mO = Yh[1102] + Yh[76] + Yh[425] + Yh[76] + Yh[102],
    EO = Yh[324] + Yh[21] + Yh[177] + Yh[21] + Yh[1104] + Yh[21] + Yh[225],
    wO = Yh[1102] + Yh[76] + Yh[270] + Yh[76] + Yh[1105],
    TO = Yh[324] + Yh[21] + Yh[177] + Yh[21] + Yh[1106] + Yh[21] + Yh[379],
    kO = Yh[1102] + Yh[76] + Yh[175] + Yh[76] + Yh[230],
    MO = Yh[1102] + Yh[76] + Yh[175] + Yh[76] + Yh[1107],
    OO = Yh[1102] + Yh[76] + Yh[760],
    IO = Yh[1102] + Yh[76] + Yh[760] + Yh[76] + Yh[102],
    SO = Yh[1108] + Yh[21] + Yh[363] + Yh[21] + Yh[1109],
    jO = Yh[239] + Yh[76] + Yh[1110] + Yh[76] + Yh[1066],
    AO = Yh[1111] + Yh[21] + Yh[225],
    PO = Yh[260] + Yh[76] + Yh[230],
    LO = Yh[1111] + Yh[21] + Yh[744],
    CO = Yh[260] + Yh[76] + Yh[1107],
    RO = Yh[251] + Yh[76] + Yh[146],
    DO = Yh[758] + Yh[21] + Yh[225],
    NO = Yh[251] + Yh[76] + Yh[230],
    BO = Yh[251] + Yh[76] + Yh[270] + Yh[76] + Yh[1105],
    $O = Yh[251] + Yh[76] + Yh[496],
    FO = Yh[1086],
    zO = Yh[270] + Yh[76] + Yh[1112],
    GO = Yh[177] + Yh[21] + Yh[721],
    HO = Yh[270] + Yh[76] + Yh[287],
    YO = Yh[270] + Yh[76] + Yh[1105] + Yh[76] + Yh[1112],
    qO = Yh[177] + Yh[21] + Yh[1106] + Yh[21] + Yh[721],
    WO = Yh[270] + Yh[76] + Yh[1105] + Yh[76] + Yh[287],
    UO = Yh[417] + Yh[21] + Yh[1111] + Yh[21] + Yh[225],
    VO = Yh[417] + Yh[21] + Yh[758],
    XO = Yh[216] + Yh[76] + Yh[251] + Yh[76] + Yh[146],
    ZO = Yh[417] + Yh[21] + Yh[758] + Yh[21] + Yh[164],
    KO = Yh[417] + Yh[21] + Yh[758] + Yh[21] + Yh[225],
    JO = Yh[216] + Yh[76] + Yh[251] + Yh[76] + Yh[102],
    QO = Yh[417] + Yh[21] + Yh[758] + Yh[21] + Yh[177] + Yh[21] + Yh[1106],
    tI = Yh[417] + Yh[21] + Yh[758] + Yh[21] + Yh[177] + Yh[21] + Yh[1106] + Yh[21] + Yh[379],
    iI = Yh[417] + Yh[21] + Yh[1097],
    nI = Yh[417] + Yh[21] + Yh[758] + Yh[21] + Yh[1097],
    eI = Yh[216] + Yh[76] + Yh[496],
    sI = Yh[216] + Yh[76] + Yh[212],
    hI = Yh[417] + Yh[21] + Yh[640] + Yh[21] + Yh[510],
    rI = Yh[216] + Yh[76] + Yh[661] + Yh[76] + Yh[13],
    aI = Yh[216] + Yh[76] + Yh[1113],
    oI = Yh[417] + Yh[21] + Yh[1100],
    fI = Yh[216] + Yh[76] + Yh[1093],
    cI = Yh[1114] + Yh[21] + Yh[1115],
    uI = Yh[845] + Yh[76] + Yh[197],
    _I = Yh[1114] + Yh[21] + Yh[1116],
    dI = Yh[845] + Yh[76] + Yh[268],
    lI = Yh[1114] + Yh[21] + Yh[1117],
    vI = Yh[845] + Yh[76] + Yh[1030],
    bI = Yh[1114] + Yh[21] + Yh[1118] + Yh[21] + Yh[1116],
    gI = Yh[1114] + Yh[21] + Yh[225],
    yI = Yh[845] + Yh[76] + Yh[230],
    xI = Yh[845] + Yh[76] + Yh[169] + Yh[76] + Yh[1010],
    pI = Yh[1114] + Yh[21] + Yh[163] + Yh[21] + Yh[166],
    mI = Yh[845] + Yh[76] + Yh[169] + Yh[76] + Yh[1119],
    EI = Yh[1114] + Yh[21] + Yh[163] + Yh[21] + Yh[164],
    wI = Yh[845] + Yh[76] + Yh[169] + Yh[76] + Yh[102],
    TI = Yh[845] + Yh[76] + Yh[212],
    kI = Yh[1114] + Yh[21] + Yh[727] + Yh[21] + Yh[728],
    MI = Yh[845] + Yh[76] + Yh[267] + Yh[76] + Yh[146],
    OI = Yh[1114] + Yh[21] + Yh[727],
    II = Yh[845] + Yh[76] + Yh[267],
    SI = Yh[845] + Yh[76] + Yh[496],
    jI = Yh[845] + Yh[76] + Yh[242] + Yh[76] + Yh[201],
    AI = Yh[1114] + Yh[21] + Yh[379] + Yh[21] + Yh[116],
    PI = Yh[845] + Yh[76] + Yh[242] + Yh[76] + Yh[199],
    LI = Yh[845] + Yh[76] + Yh[1010],
    CI = Yh[1114] + Yh[21] + Yh[1120] + Yh[21] + Yh[1116],
    RI = Yh[845] + Yh[76] + Yh[1121] + Yh[76] + Yh[268],
    DI = Yh[1114] + Yh[21] + Yh[758],
    NI = Yh[845] + Yh[76] + Yh[251],
    BI = Yh[1114] + Yh[21] + Yh[758] + Yh[21] + Yh[164],
    $I = Yh[845] + Yh[76] + Yh[251] + Yh[76] + Yh[102],
    FI = Yh[1114] + Yh[21] + Yh[1111] + Yh[21] + Yh[225],
    zI = Yh[845] + Yh[76] + Yh[244],
    GI = Yh[1114] + Yh[21] + Yh[725] + Yh[21] + Yh[726],
    HI = Yh[845] + Yh[76] + Yh[427] + Yh[76] + Yh[1101],
    YI = Yh[1114] + Yh[21] + Yh[725] + Yh[21] + Yh[225],
    qI = Yh[845] + Yh[76] + Yh[427] + Yh[76] + Yh[230],
    WI = Yh[1114] + Yh[21] + Yh[725] + Yh[21] + Yh[379] + Yh[21] + Yh[243],
    UI = Yh[1114] + Yh[21] + Yh[725] + Yh[21] + Yh[379] + Yh[21] + Yh[116],
    VI = Yh[845] + Yh[76] + Yh[661] + Yh[76] + Yh[13],
    XI = Yh[1114] + Yh[21] + Yh[1122] + Yh[21] + Yh[361],
    ZI = Yh[845] + Yh[76] + Yh[30] + Yh[76] + Yh[276],
    KI = Yh[1084] + Yh[21] + Yh[1111] + Yh[21] + Yh[744],
    JI = Yh[1084] + Yh[21] + Yh[1103],
    QI = Yh[1088] + Yh[76] + Yh[425],
    tS = Yh[1084] + Yh[21] + Yh[1103] + Yh[21] + Yh[164],
    iS = Yh[1088] + Yh[76] + Yh[425] + Yh[76] + Yh[230],
    nS = Yh[1084] + Yh[21] + Yh[1103] + Yh[21] + Yh[177] + Yh[21] + Yh[1106],
    eS = Yh[1084] + Yh[21] + Yh[1103] + Yh[21] + Yh[177] + Yh[21] + Yh[1106] + Yh[21] + Yh[379],
    sS = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1114] + Yh[21] + Yh[1115],
    hS = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1114] + Yh[21] + Yh[1116],
    rS = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1114] + Yh[21] + Yh[1118] + Yh[21] + Yh[1116],
    aS = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1114] + Yh[21] + Yh[225],
    oS = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1114] + Yh[21] + Yh[163] + Yh[21] + Yh[166],
    fS = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1114] + Yh[21] + Yh[163] + Yh[21] + Yh[164],
    cS = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1114] + Yh[21] + Yh[1086],
    uS = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1114] + Yh[21] + Yh[727] + Yh[21] + Yh[728],
    _S = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1114] + Yh[21] + Yh[727],
    dS = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1114] + Yh[21] + Yh[1097],
    lS = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1114] + Yh[21] + Yh[379] + Yh[21] + Yh[243],
    vS = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1114] + Yh[21] + Yh[758],
    bS = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1114] + Yh[21] + Yh[758] + Yh[21] + Yh[164],
    gS = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1114] + Yh[21] + Yh[1111] + Yh[21] + Yh[225],
    yS = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1114] + Yh[21] + Yh[1111] + Yh[21] + Yh[744],
    xS = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1114] + Yh[21] + Yh[1124],
    pS = Yh[351] + Yh[21] + Yh[728],
    mS = Yh[376] + Yh[76] + Yh[146],
    ES = Yh[351] + Yh[21] + Yh[225],
    wS = Yh[376] + Yh[76] + Yh[230],
    TS = Yh[351] + Yh[21] + Yh[1125],
    kS = Yh[376] + Yh[76] + Yh[760],
    MS = Yh[351] + Yh[21] + Yh[1125] + Yh[21] + Yh[164],
    OS = Yh[376] + Yh[76] + Yh[760] + Yh[76] + Yh[102],
    IS = Yh[351] + Yh[21] + Yh[177] + Yh[21] + Yh[1106],
    SS = Yh[376] + Yh[76] + Yh[270] + Yh[76] + Yh[1105],
    jS = Yh[351] + Yh[21] + Yh[177] + Yh[21] + Yh[1106] + Yh[21] + Yh[379],
    AS = Yh[376] + Yh[76] + Yh[87] + Yh[76] + Yh[242],
    PS = Yh[376] + Yh[76] + Yh[69] + Yh[76] + Yh[242],
    LS = Yh[351] + Yh[21] + Yh[1104] + Yh[21] + Yh[225],
    CS = Yh[376] + Yh[76] + Yh[175] + Yh[76] + Yh[230],
    RS = Yh[376] + Yh[76] + Yh[389] + Yh[76] + Yh[1126],
    DS = Yh[376] + Yh[76] + Yh[1127] + Yh[76] + Yh[1128],
    NS = Yh[376] + Yh[76] + Yh[698],
    BS = Yh[376] + Yh[76] + Yh[1129] + Yh[76] + Yh[1130],
    $S = Yh[376] + Yh[76] + Yh[46] + Yh[76] + Yh[1131],
    FS = Yh[376] + Yh[76] + Yh[46] + Yh[76] + Yh[34],
    zS = Yh[376] + Yh[76] + Yh[1132],
    GS = Yh[351] + Yh[21] + Yh[366] + Yh[21] + Yh[1097],
    HS = Yh[376] + Yh[76] + Yh[1132] + Yh[76] + Yh[496],
    YS = Yh[351] + Yh[21] + Yh[378] + Yh[21] + Yh[1133] + Yh[21] + Yh[351],
    qS = Yh[376] + Yh[76] + Yh[87] + Yh[76] + Yh[1134] + Yh[76] + Yh[376],
    WS = Yh[351] + Yh[21] + Yh[380] + Yh[21] + Yh[1133] + Yh[21] + Yh[351],
    US = Yh[376] + Yh[76] + Yh[69] + Yh[76] + Yh[1134] + Yh[76] + Yh[376],
    VS = Yh[334] + Yh[21] + Yh[378],
    XS = Yh[715] + Yh[76] + Yh[87],
    ZS = Yh[715] + Yh[76] + Yh[87] + Yh[76] + Yh[1010],
    KS = Yh[334] + Yh[21] + Yh[378] + Yh[21] + Yh[379],
    JS = Yh[715] + Yh[76] + Yh[87] + Yh[76] + Yh[242],
    QS = Yh[334] + Yh[21] + Yh[378] + Yh[21] + Yh[1103],
    tj = Yh[715] + Yh[76] + Yh[87] + Yh[76] + Yh[425],
    ij = Yh[334] + Yh[21] + Yh[378] + Yh[21] + Yh[1103] + Yh[21] + Yh[164],
    nj = Yh[334] + Yh[21] + Yh[378] + Yh[21] + Yh[1125],
    ej = Yh[715] + Yh[76] + Yh[87] + Yh[76] + Yh[760],
    sj = Yh[334] + Yh[21] + Yh[378] + Yh[21] + Yh[1125] + Yh[21] + Yh[164],
    hj = Yh[334] + Yh[21] + Yh[378] + Yh[21] + Yh[177] + Yh[21] + Yh[1106],
    rj = Yh[715] + Yh[76] + Yh[87] + Yh[76] + Yh[270] + Yh[76] + Yh[1105],
    aj = Yh[334] + Yh[21] + Yh[378] + Yh[21] + Yh[177] + Yh[21] + Yh[1106] + Yh[21] + Yh[379],
    oj = Yh[715] + Yh[76] + Yh[87] + Yh[76] + Yh[270] + Yh[76] + Yh[1112],
    fj = Yh[334] + Yh[21] + Yh[378] + Yh[21] + Yh[177] + Yh[21] + Yh[721],
    cj = Yh[715] + Yh[76] + Yh[87] + Yh[76] + Yh[270] + Yh[76] + Yh[287],
    uj = Yh[715] + Yh[76] + Yh[69],
    _j = Yh[334] + Yh[21] + Yh[380] + Yh[21] + Yh[165],
    dj = Yh[715] + Yh[76] + Yh[69] + Yh[76] + Yh[1010],
    lj = Yh[334] + Yh[21] + Yh[380] + Yh[21] + Yh[379],
    vj = Yh[715] + Yh[76] + Yh[69] + Yh[76] + Yh[242],
    bj = Yh[715] + Yh[76] + Yh[69] + Yh[76] + Yh[425],
    gj = Yh[715] + Yh[76] + Yh[69] + Yh[76] + Yh[760],
    yj = Yh[334] + Yh[21] + Yh[380] + Yh[21] + Yh[177] + Yh[21] + Yh[1106],
    xj = Yh[715] + Yh[76] + Yh[69] + Yh[76] + Yh[270] + Yh[76] + Yh[1105],
    pj = Yh[334] + Yh[21] + Yh[380] + Yh[21] + Yh[177] + Yh[21] + Yh[1106] + Yh[21] + Yh[379],
    mj = Yh[715] + Yh[76] + Yh[69] + Yh[76] + Yh[175] + Yh[76] + Yh[230],
    Ej = Yh[334] + Yh[21] + Yh[380] + Yh[21] + Yh[1104] + Yh[21] + Yh[744],
    wj = Yh[334] + Yh[21] + Yh[380] + Yh[21] + Yh[177] + Yh[21] + Yh[717],
    Tj = Yh[715] + Yh[76] + Yh[69] + Yh[76] + Yh[270] + Yh[76] + Yh[1112],
    kj = Yh[334] + Yh[21] + Yh[380] + Yh[21] + Yh[177] + Yh[21] + Yh[721],
    Mj = Yh[715] + Yh[76] + Yh[69] + Yh[76] + Yh[270] + Yh[76] + Yh[287],
    Oj = Yh[230],
    Ij = Yh[260] + Yh[1] + Yh[428],
    Sj = Yh[252] + Yh[14] + Yh[82] + Yh[110] + Yh[1135],
    jj = Yh[1121] + Yh[24] + Yh[91],
    Aj = Yh[267] + Yh[420] + Yh[421],
    Pj = Yh[251] + Yh[95] + Yh[266],
    Lj = Yh[1114] + Yh[21] + Yh[379] + Yh[21] + Yh[243],
    Cj = Yh[242] + Yh[116],
    Rj = Yh[1114] + Yh[21] + Yh[1124],
    Dj = Yh[244],
    Nj = Yh[1114] + Yh[21] + Yh[165],
    Bj = Yh[1099] + Yh[21] + Yh[225] + Yh[21] + Yh[221] + Yh[21] + Yh[222],
    $j = Yh[301] + Yh[1] + Yh[428] + Yh[62] + Yh[1136] + Yh[208] + Yh[209],
    Fj = Yh[21] + Yh[81] + Yh[493],
    zj = Yh[758],
    Gj = Yh[758] + Yh[21] + Yh[177] + Yh[21] + Yh[1106],
    Hj = Yh[758] + Yh[21] + Yh[177] + Yh[21] + Yh[1106] + Yh[21] + Yh[379],
    Yj = Yh[21] + Yh[82] + Yh[1137],
    qj = Yh[324] + Yh[21] + Yh[1104] + Yh[21] + Yh[225],
    Wj = Yh[417] + Yh[21] + Yh[1138],
    Uj = Yh[1113] + Yh[110] + Yh[283],
    Vj = Yh[324] + Yh[21] + Yh[1125],
    Xj = Yh[324] + Yh[21] + Yh[1125] + Yh[21] + Yh[164],
    Zj = Yh[324] + Yh[21] + Yh[1104] + Yh[21] + Yh[744],
    Kj = Yh[177] + Yh[21] + Yh[717],
    Jj = Yh[417] + Yh[21] + Yh[1111] + Yh[21] + Yh[744],
    Qj = Yh[417] + Yh[21] + Yh[1086],
    tA = Yh[1139] + Yh[62] + Yh[1140],
    iA = Yh[21] + Yh[241] + Yh[312],
    nA = Yh[1084] + Yh[21] + Yh[1111] + Yh[21] + Yh[225],
    eA = Yh[1102],
    sA = Yh[21] + Yh[1045],
    hA = Yh[87] + Yh[39] + Yh[1141],
    rA = Yh[69] + Yh[39] + Yh[1141],
    aA = Yh[334] + Yh[21] + Yh[378] + Yh[21] + Yh[165],
    oA = Yh[87] + Yh[39] + Yh[1141] + Yh[88] + Yh[249],
    fA = Yh[87] + Yh[39] + Yh[1141] + Yh[14] + Yh[119],
    cA = Yh[87] + Yh[39] + Yh[1141] + Yh[88] + Yh[1142],
    uA = Yh[87] + Yh[39] + Yh[1141] + Yh[88] + Yh[1142] + Yh[88] + Yh[350],
    _A = Yh[87] + Yh[39] + Yh[1141] + Yh[14] + Yh[1143],
    dA = Yh[334] + Yh[21] + Yh[378] + Yh[21] + Yh[1104] + Yh[21] + Yh[225],
    lA = Yh[87] + Yh[39] + Yh[1141] + Yh[41] + Yh[761] + Yh[1] + Yh[428],
    vA = Yh[334] + Yh[21] + Yh[378] + Yh[21] + Yh[1104] + Yh[21] + Yh[744],
    bA = Yh[87] + Yh[39] + Yh[1141] + Yh[44] + Yh[272] + Yh[57] + Yh[271],
    gA = Yh[87] + Yh[39] + Yh[1141] + Yh[44] + Yh[272] + Yh[423] + Yh[424],
    yA = Yh[334] + Yh[21] + Yh[378] + Yh[21] + Yh[177] + Yh[21] + Yh[717],
    xA = Yh[87] + Yh[39] + Yh[1141] + Yh[44] + Yh[272] + Yh[1] + Yh[422],
    pA = Yh[69] + Yh[39] + Yh[1141] + Yh[88] + Yh[249],
    mA = Yh[69] + Yh[39] + Yh[1141] + Yh[14] + Yh[119],
    EA = Yh[334] + Yh[21] + Yh[380] + Yh[21] + Yh[1103],
    wA = Yh[69] + Yh[39] + Yh[1141] + Yh[88] + Yh[1142],
    TA = Yh[69] + Yh[39] + Yh[1141] + Yh[88] + Yh[1142] + Yh[88] + Yh[350],
    kA = Yh[334] + Yh[21] + Yh[380] + Yh[21] + Yh[1125],
    MA = Yh[69] + Yh[39] + Yh[1141] + Yh[14] + Yh[1143],
    OA = Yh[69] + Yh[39] + Yh[1141] + Yh[14] + Yh[1143] + Yh[88] + Yh[350],
    IA = Yh[69] + Yh[39] + Yh[1141] + Yh[41] + Yh[761] + Yh[1] + Yh[428],
    SA = Yh[69] + Yh[39] + Yh[1141] + Yh[41] + Yh[761] + Yh[256] + Yh[257],
    jA = Yh[69] + Yh[39] + Yh[1141] + Yh[44] + Yh[272] + Yh[57] + Yh[271],
    AA = Yh[69] + Yh[39] + Yh[1141] + Yh[44] + Yh[272] + Yh[423] + Yh[424],
    PA = Yh[69] + Yh[39] + Yh[1141] + Yh[44] + Yh[272] + Yh[1] + Yh[422],
    LA = Yh[389] + Yh[44] + Yh[1144],
    CA = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1114] + Yh[21] + Yh[163] + Yh[21] + Yh[165],
    RA = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1114] + Yh[21] + Yh[379] + Yh[21] + Yh[116],
    DA = Yh[248] + Yh[88] + Yh[262],
    NA = Yh[324] + Yh[21] + Yh[1103],
    BA = Yh[177] + Yh[21] + Yh[1106] + Yh[21] + Yh[717],
    $A = Yh[334] + Yh[21] + Yh[380] + Yh[21] + Yh[1103] + Yh[21] + Yh[164],
    FA = Yh[21] + Yh[82] + Yh[1145],
    zA = Yh[21] + Yh[82] + Yh[241] + Yh[159],
    GA = Yh[248] + Yh[1] + Yh[2] + Yh[179] + Yh[316],
    HA = Yh[10] + Yh[62] + Yh[1146],
    YA = Yh[248] + Yh[88] + Yh[249],
    qA = Yh[26] + Yh[248] + Yh[1] + Yh[93],
    WA = Yh[30] + Yh[62] + Yh[1146] + Yh[24] + Yh[25] + Yh[1] + Yh[518],
    UA = Yh[1147] + Yh[44] + Yh[1144],
    VA = Yh[1147] + Yh[62] + Yh[1146] + Yh[24] + Yh[75],
    XA = Yh[345] + Yh[24] + Yh[75],
    ZA = Yh[149] + Yh[62] + Yh[1146],
    KA = Yh[149] + Yh[1] + Yh[93],
    JA = Yh[26] + Yh[434] + Yh[62] + Yh[759],
    QA = Yh[26] + Yh[427] + Yh[14] + Yh[119] + Yh[243],
    tP = Yh[26] + Yh[434] + Yh[88] + Yh[757] + Yh[14] + Yh[119] + Yh[243],
    iP = Yh[26] + Yh[427] + Yh[14] + Yh[119] + Yh[116],
    nP = Yh[26] + Yh[434] + Yh[88] + Yh[757] + Yh[14] + Yh[119] + Yh[116],
    eP = Yh[26] + Yh[427] + Yh[62] + Yh[736],
    sP = Yh[26] + Yh[434] + Yh[88] + Yh[757] + Yh[62] + Yh[736],
    hP = Yh[375] + Yh[21] + Yh[1148] + Yh[21] + Yh[1149],
    rP = Yh[26] + Yh[248] + Yh[62] + Yh[188],
    aP = Yh[21] + Yh[82] + Yh[254] + Yh[1140],
    oP = Yh[26] + Yh[301] + Yh[1] + Yh[428],
    fP = Yh[26] + Yh[301] + Yh[1] + Yh[428] + Yh[62] + Yh[1136] + Yh[208] + Yh[209],
    cP = Yh[26] + Yh[427] + Yh[1] + Yh[428],
    uP = Yh[377] + Yh[1] + Yh[476],
    _P = Yh[384] + Yh[110] + Yh[385] + Yh[1] + Yh[2],
    dP = Yh[21] + Yh[82] + Yh[83] + Yh[512],
    lP = Yh[26] + Yh[1010],
    vP = Yh[26] + Yh[248] + Yh[88] + Yh[577],
    bP = Yh[21] + Yh[762] + Yh[62] + Yh[188],
    gP = Yh[191] + Yh[208] + Yh[1150] + Yh[62] + Yh[188],
    yP = Yh[26] + Yh[248] + Yh[41] + Yh[761] + Yh[256] + Yh[257],
    xP = Yh[26] + Yh[175] + Yh[256] + Yh[257],
    pP = Yh[26] + Yh[1113] + Yh[110] + Yh[283],
    mP = Yh[26] + Yh[175] + Yh[1] + Yh[428],
    EP = Yh[88] + Yh[577],
    wP = Yh[41] + Yh[761] + Yh[256] + Yh[257],
    TP = Yh[26] + Yh[169] + Yh[88] + Yh[249],
    kP = Yh[26] + Yh[169] + Yh[41] + Yh[442],
    MP = Yh[26] + Yh[169] + Yh[88] + Yh[350],
    OP = Yh[26] + Yh[169],
    IP = Yh[41] + Yh[983],
    SP = Yh[26] + Yh[248] + Yh[41] + Yh[983],
    jP = Yh[1066] + Yh[62] + Yh[188],
    AP = Yh[26] + Yh[248] + Yh[41] + Yh[1151] + Yh[39] + Yh[1141],
    PP = Yh[26] + Yh[270] + Yh[420] + Yh[421],
    LP = Yh[26] + Yh[760],
    CP = Yh[26] + Yh[248] + Yh[110] + Yh[159] + Yh[39] + Yh[1141],
    RP = Yh[26] + Yh[87] + Yh[39] + Yh[1141],
    DP = Yh[26] + Yh[87] + Yh[39] + Yh[1141] + Yh[88] + Yh[262],
    NP = Yh[26] + Yh[87] + Yh[39] + Yh[1141] + Yh[14] + Yh[119],
    BP = Yh[87] + Yh[39] + Yh[1141] + Yh[44] + Yh[218],
    $P = Yh[26] + Yh[87] + Yh[39] + Yh[1141] + Yh[88] + Yh[249],
    FP = Yh[87] + Yh[39] + Yh[1141] + Yh[88] + Yh[1062],
    zP = Yh[87] + Yh[39] + Yh[1141] + Yh[41] + Yh[761] + Yh[256] + Yh[257],
    GP = Yh[256] + Yh[257],
    HP = Yh[26] + Yh[69] + Yh[39] + Yh[1141],
    YP = Yh[26] + Yh[69] + Yh[39] + Yh[1141] + Yh[88] + Yh[262],
    qP = Yh[26] + Yh[69] + Yh[39] + Yh[1141] + Yh[14] + Yh[119],
    WP = Yh[69] + Yh[39] + Yh[1141] + Yh[44] + Yh[218],
    UP = Yh[26] + Yh[69] + Yh[39] + Yh[1141] + Yh[88] + Yh[249],
    VP = Yh[69] + Yh[39] + Yh[1141] + Yh[88] + Yh[1062],
    XP = Yh[39] + Yh[1141] + Yh[88] + Yh[1142],
    ZP = Yh[39] + Yh[1141] + Yh[88] + Yh[1142] + Yh[88] + Yh[350],
    KP = Yh[39] + Yh[1141] + Yh[88] + Yh[1062],
    JP = Yh[39] + Yh[1141] + Yh[44] + Yh[272] + Yh[57] + Yh[271],
    QP = Yh[39] + Yh[1141] + Yh[44] + Yh[272] + Yh[57] + Yh[271] + Yh[14] + Yh[119],
    tL = Yh[39] + Yh[1141] + Yh[41] + Yh[761] + Yh[1] + Yh[428],
    iL = Yh[39] + Yh[1141] + Yh[41] + Yh[761] + Yh[256] + Yh[257],
    nL = Yh[39] + Yh[1141] + Yh[44] + Yh[272] + Yh[1] + Yh[422],
    eL = Yh[39] + Yh[1141] + Yh[44] + Yh[272] + Yh[423] + Yh[424],
    sL = Yh[39] + Yh[1141] + Yh[14] + Yh[1143],
    hL = Yh[39] + Yh[1141] + Yh[14] + Yh[1143] + Yh[88] + Yh[350],
    rL = Yh[1074] + Yh[32] + Yh[1152],
    aL = Yh[213] + Yh[39] + Yh[1141],
    oL = Yh[41] + Yh[1151] + Yh[39] + Yh[1141],
    fL = Yh[110] + Yh[159] + Yh[39] + Yh[1141],
    cL = Yh[48] + Yh[120] + Yh[119],
    uL = Yh[53] + Yh[24] + Yh[1153] + Yh[14] + Yh[1154],
    _L = Yh[48] + Yh[62] + Yh[310] + Yh[44] + Yh[1144],
    dL = Yh[1155],
    lL = Yh[187] + Yh[24] + Yh[573],
    vL = Yh[1139] + Yh[62] + Yh[310] + Yh[44] + Yh[1144],
    bL = Yh[213] + Yh[95] + Yh[1156] + Yh[44] + Yh[272],
    gL = Yh[351] + Yh[21] + Yh[348] + Yh[21] + Yh[1157],
    yL = Yh[351] + Yh[21] + Yh[348] + Yh[21] + Yh[358],
    xL = Yh[698] + Yh[76],
    pL = Yh[351] + Yh[21] + Yh[348] + Yh[21] + Yh[1158],
    mL = Yh[1066] + Yh[88] + Yh[372],
    EL = Yh[21] + Yh[82] + Yh[241] + Yh[994],
    wL = Yh[1114] + Yh[21] + Yh[1086],
    TL = Yh[1114] + Yh[21] + Yh[1111] + Yh[21] + Yh[744],
    kL = Yh[72] + Yh[1159],
    ML = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1160],
    OL = Yh[72] + Yh[1161] + Yh[1162] + Yh[241],
    IL = Yh[72] + Yh[1163] + Yh[28] + Yh[298],
    SL = Yh[453],
    jL = Yh[1164],
    AL = Yh[1165],
    PL = Yh[170],
    LL = Yh[1057] + Yh[110] + Yh[159] + Yh[44] + Yh[1166],
    CL = Yh[1167] + Yh[39] + Yh[562],
    RL = Yh[305] + Yh[209],
    DL = Yh[22] + Yh[110] + Yh[134],
    NL = Yh[88] + Yh[262] + Yh[305] + Yh[209],
    BL = Yh[22] + Yh[88] + Yh[262] + Yh[305] + Yh[209],
    $L = Yh[22] + Yh[305] + Yh[209],
    FL = Yh[21] + Yh[82] + Yh[1168],
    zL = Yh[1169],
    GL = Yh[115] + Yh[24] + Yh[75],
    HL = Yh[527],
    YL = Yh[30] + Yh[28] + Yh[397] + Yh[1] + Yh[1170],
    qL = Yh[30] + Yh[179] + Yh[612] + Yh[28] + Yh[29],
    WL = Yh[1171],
    UL = Yh[1172],
    VL = Yh[1173],
    XL = Yh[1174],
    ZL = Yh[1175] + Yh[44] + Yh[1176] + Yh[41] + Yh[1151],
    KL = Yh[149] + Yh[28] + Yh[397],
    JL = Yh[48] + Yh[57] + Yh[58] + Yh[88] + Yh[350],
    QL = Yh[1177] + Yh[62] + Yh[188],
    tC = Yh[59] + Yh[39] + Yh[40],
    iC = Yh[21] + Yh[82] + Yh[83] + Yh[1178] + Yh[62] + Yh[188],
    nC = Yh[621] + Yh[179] + Yh[82],
    eC = Yh[621] + Yh[14] + Yh[466],
    sC = Yh[1179] + Yh[88] + Yh[577],
    hC = Yh[460] + Yh[88] + Yh[577],
    rC = Yh[21] + Yh[82] + Yh[241] + Yh[311],
    aC = Yh[53] + Yh[179] + Yh[258],
    oC = Yh[382] + Yh[110] + Yh[159],
    fC = Yh[4] + Yh[44] + Yh[1180],
    cC = Yh[320] + Yh[110] + Yh[159] + Yh[1] + Yh[1181],
    uC = Yh[621] + Yh[110] + Yh[159] + Yh[14] + Yh[1182],
    _C = Yh[621] + Yh[39] + Yh[40],
    dC = Yh[1183] + Yh[21] + Yh[1184],
    lC = Yh[621] + Yh[39] + Yh[289],
    vC = Yh[168] + Yh[88] + Yh[684],
    bC = Yh[21] + Yh[1185] + Yh[39] + Yh[40],
    gC = Yh[449] + Yh[116],
    yC = Yh[161] + Yh[24] + Yh[1006],
    xC = Yh[1186],
    pC = Yh[1187],
    mC = Yh[1019] + Yh[88] + Yh[1188],
    EC = Yh[1189] + Yh[88] + Yh[1188] + Yh[39] + Yh[1190],
    wC = Yh[53] + Yh[208] + Yh[1191],
    TC = Yh[21] + Yh[1171] + Yh[41] + Yh[1039],
    kC = Yh[1019] + Yh[28] + Yh[1192],
    MC = Yh[149] + Yh[1] + Yh[611] + Yh[179] + Yh[612],
    OC = Yh[10] + Yh[1] + Yh[611] + Yh[179] + Yh[612],
    IC = Yh[21] + Yh[1193],
    SC = Yh[1194],
    jC = Yh[1195] + Yh[995],
    AC = Yh[57] + Yh[1196] + Yh[47] + Yh[28] + Yh[1197] + Yh[217],
    PC = Yh[10] + Yh[88] + Yh[1092],
    LC = Yh[88] + Yh[262],
    CC = Yh[44] + Yh[272],
    RC = Yh[88] + Yh[1062],
    DC = Yh[1198] + Yh[21] + Yh[1199],
    NC = Yh[22] + Yh[28] + Yh[309],
    BC = Yh[28] + Yh[309],
    $C = Yh[376] + Yh[1200] + Yh[1048],
    FC = Yh[455] + Yh[24] + Yh[75],
    zC = Yh[30] + Yh[44] + Yh[1144] + Yh[28] + Yh[1201],
    GC = Yh[1202] + Yh[28] + Yh[269] + Yh[44] + Yh[1144],
    HC = Yh[44] + Yh[1144] + Yh[47] + Yh[1] + Yh[1203] + Yh[129] + Yh[289] + Yh[47] + Yh[28] + Yh[269],
    YC = Yh[455] + Yh[208] + Yh[209],
    qC = Yh[1204] + Yh[28] + Yh[309],
    WC = Yh[1205],
    UC = Yh[1206] + Yh[28] + Yh[521],
    VC = Yh[1207] + Yh[95] + Yh[1208],
    XC = Yh[1209],
    ZC = Yh[21] + Yh[82] + Yh[83] + Yh[556] + Yh[208] + Yh[209],
    KC = Yh[463] + Yh[208] + Yh[209],
    JC = Yh[344] + Yh[1] + Yh[518] + Yh[57] + Yh[519],
    QC = Yh[21] + Yh[1008] + Yh[62] + Yh[188],
    tR = Yh[21] + Yh[1177] + Yh[62] + Yh[188],
    iR = Yh[1210] + Yh[21] + Yh[1211],
    nR = Yh[1212] + Yh[95] + Yh[1208],
    eR = Yh[1084] + Yh[21] + Yh[1087] + Yh[21] + Yh[728],
    sR = Yh[21] + Yh[82] + Yh[241] + Yh[610],
    hR = Yh[1084] + Yh[21] + Yh[348] + Yh[21] + Yh[702],
    rR = Yh[1084] + Yh[21] + Yh[348] + Yh[21] + Yh[325],
    aR = Yh[1213] + Yh[661],
    oR = Yh[1214] + Yh[152],
    fR = Yh[1215] + Yh[47] + Yh[298] + Yh[76] + Yh[81] + Yh[610] + Yh[47] + Yh[1216] + Yh[99] + Yh[622],
    cR = Yh[853],
    uR = Yh[76] + Yh[399] + Yh[99] + Yh[256] + Yh[400] + Yh[99] + Yh[305] + Yh[401] + Yh[47] + Yh[403],
    _R = Yh[1215] + Yh[103] + Yh[200] + Yh[104] + Yh[260] + Yh[99] + Yh[230] + Yh[498] + Yh[66] + Yh[67] + Yh[298] + Yh[410] + Yh[298] + Yh[410] + Yh[298] + Yh[410] + Yh[298] + Yh[76] + Yh[241] + Yh[71],
    dR = Yh[76] + Yh[399] + Yh[99] + Yh[256] + Yh[400] + Yh[99] + Yh[305] + Yh[401],
    lR = Yh[1215] + Yh[103] + Yh[298] + Yh[104],
    vR = Yh[1217],
    bR = Yh[103] + Yh[1215] + Yh[47] + Yh[299] + Yh[610] + Yh[47] + Yh[1218] + Yh[99] + Yh[729] + Yh[67] + Yh[298] + Yh[76] + Yh[638] + Yh[410] + Yh[298] + Yh[410] + Yh[298] + Yh[76] + Yh[638] + Yh[410] + Yh[200] + Yh[71],
    gR = Yh[76] + Yh[399] + Yh[99] + Yh[256] + Yh[400] + Yh[99] + Yh[305] + Yh[401] + Yh[103] + Yh[431],
    yR = Yh[1215] + Yh[103] + Yh[200] + Yh[104],
    xR = Yh[103] + Yh[1215] + Yh[47] + Yh[298] + Yh[76] + Yh[299] + Yh[610] + Yh[47] + Yh[767],
    pR = Yh[1219],
    mR = Yh[21] + Yh[86],
    ER = Yh[21] + Yh[82] + Yh[1220],
    wR = Yh[76] + Yh[399] + Yh[99] + Yh[256] + Yh[400] + Yh[99] + Yh[88] + Yh[545] + Yh[62] + Yh[1221],
    TR = Yh[1222] + Yh[498] + Yh[81] + Yh[152] + Yh[1223] + Yh[268] + Yh[498] + Yh[1005] + Yh[104] + Yh[1224] + Yh[99] + Yh[1225] + Yh[498] + Yh[251] + Yh[99] + Yh[1224] + Yh[104] + Yh[1224] + Yh[99] + Yh[427] + Yh[1226] + Yh[426] + Yh[47] + Yh[298] + Yh[152] + Yh[47] + Yh[298] + Yh[152] + Yh[47] + Yh[200] + Yh[152] + Yh[1223] + Yh[260] + Yh[99] + Yh[230] + Yh[498] + Yh[66] + Yh[67] + Yh[1227] + Yh[68] + Yh[1227] + Yh[68] + Yh[1227] + Yh[68] + Yh[298] + Yh[76] + Yh[299] + Yh[1228] + Yh[251] + Yh[99] + Yh[496] + Yh[498] + Yh[336] + Yh[152] + Yh[104] + Yh[1222] + Yh[498] + Yh[200] + Yh[152] + Yh[104],
    kR = Yh[76] + Yh[399] + Yh[99] + Yh[256] + Yh[400] + Yh[99] + Yh[88] + Yh[545] + Yh[62] + Yh[1221] + Yh[76] + Yh[431] + Yh[1229] + Yh[399] + Yh[99] + Yh[256] + Yh[400] + Yh[99] + Yh[88] + Yh[545] + Yh[62] + Yh[1221] + Yh[103] + Yh[431],
    MR = Yh[1222] + Yh[99] + Yh[85] + Yh[498] + Yh[638] + Yh[152] + Yh[104],
    OR = Yh[1222] + Yh[99] + Yh[86] + Yh[498] + Yh[638] + Yh[152] + Yh[104],
    IR = Yh[76] + Yh[399] + Yh[99] + Yh[256] + Yh[400] + Yh[99] + Yh[88] + Yh[545] + Yh[24] + Yh[409],
    SR = Yh[103] + Yh[1215] + Yh[47] + Yh[299] + Yh[610] + Yh[47] + Yh[1218] + Yh[99] + Yh[729] + Yh[67] + Yh[298] + Yh[76] + Yh[638] + Yh[410] + Yh[298] + Yh[410] + Yh[298] + Yh[76] + Yh[638] + Yh[410] + Yh[200] + Yh[1228],
    jR = Yh[21] + Yh[92] + Yh[57] + Yh[595] + Yh[88] + Yh[685],
    AR = Yh[21] + Yh[90] + Yh[57] + Yh[595] + Yh[88] + Yh[685],
    PR = Yh[399] + Yh[99] + Yh[256] + Yh[400] + Yh[99] + Yh[88] + Yh[545] + Yh[24] + Yh[409],
    LR = Yh[59] + Yh[28] + Yh[29],
    CR = Yh[394] + Yh[179] + Yh[1230],
    RR = Yh[21] + Yh[82] + Yh[937],
    DR = Yh[62] + Yh[1231],
    NR = Yh[1232],
    BR = Yh[1233] + Yh[21] + Yh[348],
    $R = Yh[1216] + Yh[14] + Yh[466],
    FR = Yh[1233] + Yh[21] + Yh[1234],
    zR = Yh[138] + Yh[814] + Yh[95] + Yh[1046],
    GR = Yh[30] + Yh[39] + Yh[40] + Yh[88] + Yh[444],
    HR = Yh[21] + Yh[87] + Yh[1235],
    YR = Yh[21] + Yh[69] + Yh[1236],
    qR = Yh[21] + Yh[87] + Yh[1236],
    WR = Yh[21] + Yh[69] + Yh[88] + Yh[577],
    UR = Yh[21] + Yh[87] + Yh[88] + Yh[577],
    VR = Yh[69] + Yh[179] + Yh[1033],
    XR = Yh[1237],
    ZR = Yh[1179] + Yh[110] + Yh[282],
    KR = Yh[21] + Yh[69] + Yh[1235],
    JR = Yh[1238] + Yh[21] + Yh[1239] + Yh[21] + Yh[165] + Yh[21] + Yh[1240],
    QR = Yh[1238] + Yh[21] + Yh[1239] + Yh[21] + Yh[165] + Yh[21] + Yh[1241],
    tD = Yh[1238] + Yh[21] + Yh[1115] + Yh[21] + Yh[1239] + Yh[21] + Yh[165] + Yh[21] + Yh[1240],
    iD = Yh[1238] + Yh[21] + Yh[1115] + Yh[21] + Yh[1239] + Yh[21] + Yh[165] + Yh[21] + Yh[1241],
    nD = Yh[1044],
    eD = Yh[21] + Yh[807] + Yh[179] + Yh[162],
    sD = Yh[149] + Yh[57] + Yh[1242],
    hD = Yh[1074] + Yh[57] + Yh[1243],
    rD = Yh[57] + Yh[1242] + Yh[179] + Yh[612],
    aD = Yh[53] + Yh[1] + Yh[1244] + Yh[24] + Yh[194],
    oD = Yh[102] + Yh[57] + Yh[1243],
    fD = Yh[57] + Yh[1243] + Yh[24] + Yh[194] + Yh[179] + Yh[612],
    cD = Yh[616],
    uD = Yh[750] + Yh[21] + Yh[177] + Yh[21] + Yh[380],
    _D = Yh[22] + Yh[28] + Yh[309] + Yh[62] + Yh[199] + Yh[179] + Yh[612],
    dD = Yh[1175] + Yh[44] + Yh[1176] + Yh[110] + Yh[159],
    lD = Yh[1245],
    vD = Yh[21] + Yh[82] + Yh[254] + Yh[1023],
    bD = Yh[1246],
    gD = Yh[21] + Yh[82] + Yh[1247],
    yD = Yh[463] + Yh[24] + Yh[150],
    xD = Yh[69] + Yh[44] + Yh[1026] + Yh[24] + Yh[150],
    pD = Yh[21] + Yh[82] + Yh[83] + Yh[491],
    mD = Yh[1] + Yh[1248] + Yh[28] + Yh[309] + Yh[179] + Yh[612],
    ED = Yh[1] + Yh[1248] + Yh[44] + Yh[272] + Yh[179] + Yh[612],
    wD = Yh[1] + Yh[1248] + Yh[88] + Yh[1249] + Yh[28] + Yh[309] + Yh[179] + Yh[612],
    TD = Yh[1250],
    kD = Yh[399] + Yh[99] + Yh[44] + Yh[1144] + Yh[28] + Yh[1251],
    MD = Yh[1252] + Yh[1253] + Yh[1254] + Yh[28] + Yh[47] + Yh[200] + Yh[152],
    OD = Yh[241] + Yh[152],
    ID = Yh[1255],
    SD = Yh[30] + Yh[32] + Yh[33] + Yh[1] + Yh[518],
    jD = Yh[1256],
    AD = Yh[61] + Yh[28] + Yh[1201],
    PD = Yh[1257],
    LD = Yh[59] + Yh[28] + Yh[1201],
    CD = Yh[30] + Yh[88] + Yh[249] + Yh[1] + Yh[518],
    RD = Yh[59] + Yh[28] + Yh[1201] + Yh[420] + Yh[1258] + Yh[1] + Yh[569] + Yh[14] + Yh[82] + Yh[420] + Yh[558],
    DD = Yh[30] + Yh[1] + Yh[569] + Yh[14] + Yh[82] + Yh[420] + Yh[558],
    ND = Yh[191] + Yh[110] + Yh[134],
    BD = Yh[53] + Yh[28] + Yh[1259],
    $D = Yh[44] + Yh[1144] + Yh[28] + Yh[1251],
    FD = Yh[845] + Yh[28] + Yh[1251],
    zD = Yh[53] + Yh[28] + Yh[1260],
    GD = Yh[69] + Yh[1] + Yh[300],
    HD = Yh[351] + Yh[21] + Yh[1123],
    YD = Yh[1261] + Yh[88] + Yh[395] + Yh[305] + Yh[396],
    qD = Yh[394] + Yh[57] + Yh[1262] + Yh[1] + Yh[569] + Yh[110] + Yh[159] + Yh[14] + Yh[1182],
    WD = Yh[1263] + Yh[88] + Yh[577],
    UD = Yh[10] + Yh[88] + Yh[1092] + Yh[62] + Yh[199] + Yh[179] + Yh[612],
    VD = Yh[1264] + Yh[126] + Yh[127],
    XD = Yh[1265] + Yh[179] + Yh[180],
    ZD = Yh[1266],
    KD = Yh[1265] + Yh[47] + Yh[216] + Yh[217],
    JD = Yh[47] + Yh[201] + Yh[47],
    QD = Yh[560] + Yh[28] + Yh[1197],
    tN = Yh[463] + Yh[57] + Yh[1267] + Yh[28] + Yh[397],
    iN = Yh[53] + Yh[88] + Yh[1268],
    nN = Yh[1198] + Yh[21] + Yh[1269],
    eN = Yh[320] + Yh[28] + Yh[1197],
    sN = Yh[278] + Yh[28] + Yh[279] + Yh[95] + Yh[1041] + Yh[32] + Yh[436] + Yh[375],
    hN = Yh[1072] + Yh[420] + Yh[1270],
    rN = Yh[1198] + Yh[21] + Yh[751] + Yh[21] + Yh[1271],
    aN = Yh[1272],
    oN = Yh[1273] + Yh[21] + Yh[1274],
    fN = Yh[21] + Yh[1275] + Yh[24] + Yh[25] + Yh[1] + Yh[518] + Yh[44] + Yh[1276],
    cN = Yh[193] + Yh[24] + Yh[25] + Yh[1] + Yh[518] + Yh[57] + Yh[519],
    uN = Yh[21] + Yh[1277] + Yh[24] + Yh[1278],
    _N = Yh[10] + Yh[57] + Yh[1242],
    dN = Yh[213] + Yh[44] + Yh[272] + Yh[179] + Yh[162],
    lN = Yh[53] + Yh[1] + Yh[1279] + Yh[24] + Yh[150],
    vN = Yh[72] + Yh[1280],
    bN = Yh[21] + Yh[82] + Yh[254] + Yh[636],
    gN = Yh[24] + Yh[194] + Yh[88] + Yh[1069],
    yN = Yh[10] + Yh[24] + Yh[194] + Yh[88] + Yh[1069] + Yh[62] + Yh[199] + Yh[179] + Yh[316],
    xN = Yh[13],
    pN = Yh[21] + Yh[1281],
    mN = Yh[53] + Yh[95] + Yh[1282],
    EN = Yh[21] + Yh[82] + Yh[83] + Yh[1203] + Yh[28] + Yh[1201],
    wN = Yh[53] + Yh[41] + Yh[1151],
    TN = Yh[500] + Yh[24] + Yh[573],
    kN = Yh[578] + Yh[88] + Yh[1069],
    MN = Yh[483] + Yh[88] + Yh[1069],
    ON = Yh[370] + Yh[21] + Yh[751] + Yh[21] + Yh[1274],
    IN = Yh[1130],
    SN = Yh[21] + Yh[82] + Yh[83] + Yh[198],
    jN = Yh[1067],
    AN = Yh[370] + Yh[21] + Yh[1269],
    PN = Yh[1130] + Yh[179] + Yh[316],
    LN = Yh[370] + Yh[21] + Yh[751] + Yh[21] + Yh[1271],
    CN = Yh[724] + Yh[21] + Yh[1283] + Yh[21] + Yh[1103],
    RN = Yh[724] + Yh[21] + Yh[1283] + Yh[21] + Yh[1103] + Yh[21] + Yh[225],
    DN = Yh[724] + Yh[21] + Yh[1283] + Yh[21] + Yh[1104] + Yh[21] + Yh[225],
    NN = Yh[21] + Yh[917] + Yh[110] + Yh[566],
    BN = Yh[21] + Yh[982],
    $N = Yh[1284] + Yh[21] + Yh[1285],
    FN = Yh[21] + Yh[1286] + Yh[179] + Yh[162],
    zN = Yh[1287],
    GN = Yh[1288],
    HN = Yh[21] + Yh[197] + Yh[24] + Yh[150],
    YN = Yh[1289] + Yh[99] + Yh[453],
    qN = Yh[1290] + Yh[99] + Yh[453],
    WN = Yh[1291] + Yh[99] + Yh[453],
    UN = Yh[66] + Yh[67] + Yh[298] + Yh[410] + Yh[1292] + Yh[410] + Yh[298] + Yh[410] + Yh[200] + Yh[71],
    VN = Yh[72] + Yh[1293] + Yh[298],
    XN = Yh[21] + Yh[82] + Yh[241] + Yh[493],
    ZN = Yh[21] + Yh[1294],
    KN = Yh[21] + Yh[82] + Yh[254] + Yh[492],
    JN = Yh[21] + Yh[82] + Yh[254] + Yh[82],
    QN = Yh[1295] + Yh[21] + Yh[1274],
    tB = Yh[191] + Yh[44] + Yh[218],
    iB = Yh[762] + Yh[62] + Yh[188],
    nB = Yh[1296],
    eB = Yh[1297],
    sB = Yh[1295] + Yh[21] + Yh[1271],
    hB = Yh[95] + Yh[1298] + Yh[179] + Yh[612],
    rB = Yh[191] + Yh[88] + Yh[1092],
    aB = Yh[145] + Yh[110] + Yh[159] + Yh[110] + Yh[1135],
    oB = Yh[1284],
    fB = Yh[448] + Yh[39] + Yh[1190],
    cB = Yh[1299] + Yh[21] + Yh[537],
    uB = Yh[1300] + Yh[21] + Yh[1301],
    _B = Yh[399] + Yh[99] + Yh[110] + Yh[1302],
    dB = Yh[1303] + Yh[21] + Yh[379] + Yh[21] + Yh[243],
    lB = Yh[1303] + Yh[21] + Yh[379] + Yh[21] + Yh[116],
    vB = Yh[72] + Yh[1304],
    bB = Yh[200] + Yh[152] + Yh[47] + Yh[1252] + Yh[1253] + Yh[57] + Yh[83] + Yh[57] + Yh[83] + Yh[57] + Yh[83],
    gB = Yh[81] + Yh[152] + Yh[47] + Yh[336] + Yh[152],
    yB = Yh[48] + Yh[179] + Yh[1305],
    xB = Yh[1306],
    pB = Yh[252],
    mB = Yh[53] + Yh[88] + Yh[1307],
    EB = Yh[1308] + Yh[1309] + Yh[1310],
    wB = Yh[48] + Yh[110] + Yh[1302] + Yh[28] + Yh[397],
    TB = Yh[170] + Yh[1] + Yh[1311],
    kB = Yh[21] + Yh[1312],
    MB = Yh[1313],
    OB = Yh[998],
    IB = Yh[1299] + Yh[21] + Yh[1314],
    SB = Yh[191] + Yh[110] + Yh[1302],
    jB = Yh[59] + Yh[110] + Yh[566],
    AB = Yh[616] + Yh[110] + Yh[566],
    PB = Yh[394] + Yh[110] + Yh[1302],
    LB = Yh[48] + Yh[110] + Yh[1302],
    CB = Yh[1061] + Yh[110] + Yh[283],
    RB = Yh[117] + Yh[243],
    DB = Yh[621] + Yh[62] + Yh[199] + Yh[208] + Yh[544] + Yh[28] + Yh[29],
    NB = Yh[1044] + Yh[76] + Yh[320] + Yh[76] + Yh[616],
    BB = Yh[1044] + Yh[76] + Yh[1315],
    $B = Yh[1044] + Yh[76] + Yh[320] + Yh[76] + Yh[982],
    FB = Yh[1044] + Yh[76] + Yh[1316],
    zB = Yh[1044] + Yh[76] + Yh[1317],
    GB = Yh[1130] + Yh[76] + Yh[320] + Yh[76] + Yh[616],
    HB = Yh[1130] + Yh[76] + Yh[1315],
    YB = Yh[1130] + Yh[76] + Yh[320] + Yh[76] + Yh[982],
    qB = Yh[453] + Yh[76] + Yh[616],
    WB = Yh[1318],
    UB = Yh[453] + Yh[76] + Yh[982],
    VB = Yh[1319],
    XB = Yh[1115] + Yh[21] + Yh[1271],
    ZB = Yh[197] + Yh[76] + Yh[982],
    KB = Yh[1185] + Yh[76] + Yh[616],
    JB = Yh[1273] + Yh[21] + Yh[1271],
    QB = Yh[1185] + Yh[76] + Yh[982],
    t$ = Yh[1088] + Yh[76] + Yh[1049],
    i$ = Yh[376] + Yh[76] + Yh[389],
    n$ = Yh[448] + Yh[76] + Yh[616],
    e$ = Yh[448] + Yh[76] + Yh[1320],
    s$ = Yh[1284] + Yh[21] + Yh[1271],
    h$ = Yh[448] + Yh[76] + Yh[982],
    r$ = Yh[535] + Yh[21] + Yh[532],
    a$ = Yh[564] + Yh[76] + Yh[549],
    o$ = Yh[21] + Yh[455] + Yh[88] + Yh[685],
    f$ = Yh[21] + Yh[30] + Yh[28] + Yh[397] + Yh[95] + Yh[606],
    c$ = Yh[21] + Yh[30] + Yh[28] + Yh[397] + Yh[1] + Yh[514],
    u$ = Yh[21] + Yh[1321] + Yh[1] + Yh[611] + Yh[179] + Yh[612] + Yh[44] + Yh[457],
    _$ = Yh[21] + Yh[1322] + Yh[1] + Yh[611] + Yh[179] + Yh[612] + Yh[44] + Yh[457],
    d$ = Yh[463] + Yh[179] + Yh[612] + Yh[208] + Yh[209],
    l$ = Yh[48] + Yh[179] + Yh[612] + Yh[179] + Yh[1323],
    v$ = Yh[1238] + Yh[21] + Yh[222] + Yh[21] + Yh[1324],
    b$ = Yh[1325],
    g$ = Yh[1238] + Yh[21] + Yh[222] + Yh[21] + Yh[1157],
    y$ = Yh[1238] + Yh[21] + Yh[222] + Yh[21] + Yh[724],
    x$ = Yh[1238] + Yh[21] + Yh[222] + Yh[21] + Yh[1326],
    p$ = Yh[1327],
    m$ = Yh[1238] + Yh[21] + Yh[222] + Yh[21] + Yh[1328],
    E$ = Yh[1329],
    w$ = Yh[22] + Yh[76] + Yh[1330] + Yh[76] + Yh[376],
    T$ = Yh[22] + Yh[76] + Yh[376],
    k$ = Yh[1238] + Yh[21] + Yh[222] + Yh[21] + Yh[1331] + Yh[21] + Yh[324],
    M$ = Yh[22] + Yh[76] + Yh[1102],
    O$ = Yh[1238] + Yh[21] + Yh[222] + Yh[21] + Yh[1331] + Yh[21] + Yh[177],
    I$ = Yh[22] + Yh[76] + Yh[270],
    S$ = Yh[323] + Yh[179] + Yh[614],
    j$ = Yh[1238] + Yh[21] + Yh[222] + Yh[21] + Yh[1331] + Yh[21] + Yh[1332] + Yh[21] + Yh[351],
    A$ = Yh[1238] + Yh[21] + Yh[222] + Yh[21] + Yh[1331] + Yh[21] + Yh[351],
    P$ = Yh[88] + Yh[1092] + Yh[179] + Yh[612],
    L$ = Yh[208] + Yh[559] + Yh[179] + Yh[612],
    C$ = Yh[420] + Yh[1333] + Yh[640] + Yh[1334] + Yh[179] + Yh[612],
    R$ = Yh[57] + Yh[1262] + Yh[1] + Yh[569] + Yh[179] + Yh[612],
    D$ = Yh[28] + Yh[1335] + Yh[179] + Yh[612],
    N$ = Yh[110] + Yh[1302] + Yh[179] + Yh[612],
    B$ = Yh[95] + Yh[1336] + Yh[88] + Yh[1092] + Yh[179] + Yh[612] + Yh[62] + Yh[199] + Yh[95] + Yh[1337] + Yh[62] + Yh[402],
    $$ = Yh[24] + Yh[573] + Yh[179] + Yh[612],
    F$ = Yh[44] + Yh[1338],
    z$ = Yh[1339],
    G$ = Yh[1340] + Yh[110] + Yh[283],
    H$ = Yh[480],
    Y$ = Yh[48] + Yh[44] + Yh[340] + Yh[95] + Yh[1341],
    q$ = Yh[1313] + Yh[44] + Yh[1342],
    W$ = Yh[1343] + Yh[21] + Yh[360],
    U$ = Yh[1343] + Yh[21] + Yh[418],
    V$ = Yh[1343] + Yh[21] + Yh[494],
    X$ = Yh[1343] + Yh[21] + Yh[360] + Yh[21] + Yh[361],
    Z$ = Yh[1343] + Yh[21] + Yh[360] + Yh[21] + Yh[362],
    K$ = Yh[1343] + Yh[21] + Yh[418] + Yh[21] + Yh[361],
    J$ = Yh[1343] + Yh[21] + Yh[362] + Yh[21] + Yh[360],
    Q$ = Yh[1343] + Yh[21] + Yh[361] + Yh[21] + Yh[360],
    tF = Yh[1344],
    iF = Yh[1345] + Yh[76] + Yh[1346],
    nF = Yh[1344] + Yh[76] + Yh[341],
    eF = Yh[1344] + Yh[76] + Yh[311],
    sF = Yh[1108] + Yh[21] + Yh[348] + Yh[21] + Yh[1347],
    hF = Yh[1108] + Yh[21] + Yh[348] + Yh[21] + Yh[1347] + Yh[21] + Yh[357],
    rF = Yh[1108] + Yh[21] + Yh[348] + Yh[21] + Yh[1347] + Yh[21] + Yh[359],
    aF = Yh[1108] + Yh[21] + Yh[348] + Yh[21] + Yh[1348] + Yh[21] + Yh[1349],
    oF = Yh[53] + Yh[432] + Yh[1350] + Yh[57] + Yh[1351],
    fF = Yh[21] + Yh[82] + Yh[254] + Yh[493],
    cF = Yh[48] + Yh[1352] + Yh[422],
    uF = Yh[341] + Yh[256] + Yh[422],
    _F = Yh[311] + Yh[256] + Yh[422],
    dF = Yh[239] + Yh[110] + Yh[283],
    lF = Yh[1353],
    vF = Yh[307] + Yh[1] + Yh[2] + Yh[57] + Yh[1351],
    bF = Yh[21] + Yh[82] + Yh[83] + Yh[199],
    gF = Yh[1074] + Yh[44] + Yh[340],
    yF = Yh[21] + Yh[82] + Yh[241] + Yh[240] + Yh[44] + Yh[218],
    xF = Yh[21] + Yh[162] + Yh[81],
    pF = Yh[21] + Yh[1354],
    mF = Yh[246] + Yh[1355],
    EF = Yh[246] + Yh[1356],
    wF = Yh[21] + Yh[1357] + Yh[24] + Yh[1009] + Yh[1] + Yh[2] + Yh[57] + Yh[1351],
    TF = Yh[480] + Yh[243],
    kF = Yh[21] + Yh[82] + Yh[254] + Yh[513],
    MF = Yh[480] + Yh[116],
    OF = Yh[21] + Yh[82] + Yh[254] + Yh[341],
    IF = Yh[307] + Yh[62] + Yh[188],
    SF = Yh[248] + Yh[44] + Yh[340] + Yh[57] + Yh[373],
    jF = Yh[1358],
    AF = Yh[59],
    PF = Yh[48] + Yh[208] + Yh[1359] + Yh[179] + Yh[1360],
    LF = Yh[239] + Yh[57] + Yh[373],
    CF = Yh[480] + Yh[1] + Yh[317],
    RF = Yh[376] + Yh[1] + Yh[317],
    DF = Yh[1361],
    NF = Yh[1362],
    BF = Yh[139] + Yh[88] + Yh[684],
    $F = Yh[1263] + Yh[44] + Yh[340] + Yh[57] + Yh[373],
    FF = Yh[53] + Yh[95] + Yh[1363],
    zF = Yh[21] + Yh[1364],
    GF = Yh[616] + Yh[39] + Yh[1365],
    HF = Yh[62] + Yh[1366] + Yh[44] + Yh[1338],
    YF = Yh[1367],
    qF = Yh[1368],
    WF = Yh[211],
    UF = Yh[1369],
    VF = Yh[1370] + Yh[21] + Yh[1371] + Yh[21] + Yh[1372],
    XF = Yh[1370] + Yh[21] + Yh[1371] + Yh[21] + Yh[1373],
    ZF = Yh[1097] + Yh[21] + Yh[222] + Yh[21] + Yh[1374],
    KF = Yh[1375],
    JF = Yh[31] + Yh[88] + Yh[249],
    QF = Yh[1376],
    tz = Yh[381] + Yh[88] + Yh[1377],
    iz = Yh[496] + Yh[208] + Yh[209],
    nz = Yh[21] + Yh[82] + Yh[887],
    ez = Yh[480] + Yh[81],
    sz = Yh[351] + Yh[21] + Yh[1123] + Yh[21] + Yh[1089],
    hz = Yh[480] + Yh[200],
    rz = Yh[1175] + Yh[62] + Yh[1378],
    az = Yh[21] + Yh[82] + Yh[241] + Yh[1023],
    oz = Yh[21] + Yh[82] + Yh[83] + Yh[162] + Yh[62] + Yh[1379] + Yh[41] + Yh[259],
    fz = Yh[21] + Yh[82] + Yh[1380],
    cz = Yh[21] + Yh[1029] + Yh[179] + Yh[82] + Yh[62] + Yh[310],
    uz = Yh[1381],
    _z = Yh[1382] + Yh[179] + Yh[1383],
    dz = Yh[1384],
    lz = Yh[1385],
    vz = Yh[1385] + Yh[116],
    bz = Yh[53] + Yh[179] + Yh[1386],
    gz = Yh[1385] + Yh[243],
    yz = Yh[1263],
    xz = Yh[1087] + Yh[21] + Yh[355],
    pz = Yh[1387],
    mz = Yh[1388],
    Ez = Yh[239] + Yh[208] + Yh[1389],
    wz = Yh[239] + Yh[28] + Yh[1390],
    Tz = Yh[1391],
    kz = Yh[1147],
    Mz = Yh[1392],
    Oz = Yh[460] + Yh[28] + Yh[461],
    Iz = Yh[463] + Yh[28] + Yh[461],
    Sz = Yh[88] + Yh[1393] + Yh[44] + Yh[1338],
    jz = Yh[1216] + Yh[14] + Yh[466] + Yh[88] + Yh[1394],
    Az = Yh[500] + Yh[44] + Yh[1342],
    Pz = Yh[1395],
    Lz = Yh[21] + Yh[82] + Yh[241] + Yh[1396],
    Cz = Yh[21] + Yh[1397] + Yh[110] + Yh[283],
    Rz = Yh[21] + Yh[1398],
    Dz = Yh[0] + Yh[179] + Yh[82] + Yh[28] + Yh[309],
    Nz = Yh[0] + Yh[14] + Yh[466] + Yh[28] + Yh[309],
    Bz = Yh[278] + Yh[28] + Yh[279] + Yh[62] + Yh[199] + Yh[110] + Yh[1399] + Yh[57] + Yh[1050] + Yh[41] + Yh[1051] + Yh[88] + Yh[1400],
    $z = Yh[278] + Yh[28] + Yh[279] + Yh[62] + Yh[199] + Yh[110] + Yh[1399] + Yh[62] + Yh[1401] + Yh[41] + Yh[1051] + Yh[88] + Yh[1400],
    Fz = Yh[21] + Yh[87],
    zz = Yh[69] + Yh[1] + Yh[428],
    Gz = Yh[1402],
    Hz = Yh[53] + Yh[420] + Yh[1403],
    Yz = Yh[53] + Yh[41] + Yh[1404],
    qz = Yh[57] + Yh[58] + Yh[88] + Yh[1062],
    Wz = Yh[57] + Yh[1405],
    Uz = Yh[256] + Yh[1406],
    Vz = Yh[256] + Yh[400],
    Xz = Yh[62] + Yh[101] + Yh[375],
    Zz = Yh[305] + Yh[209] + Yh[375],
    Kz = Yh[28] + Yh[309] + Yh[375],
    Jz = Yh[44] + Yh[1144] + Yh[375],
    Qz = Yh[179] + Yh[612] + Yh[28] + Yh[29],
    tG = Yh[256] + Yh[400] + Yh[208] + Yh[435],
    iG = Yh[28] + Yh[309] + Yh[62] + Yh[310],
    nG = Yh[399] + Yh[1407] + Yh[47] + Yh[278] + Yh[47] + Yh[995] + Yh[241],
    eG = Yh[81] + Yh[76] + Yh[298],
    sG = Yh[81] + Yh[76] + Yh[337] + Yh[76] + Yh[200] + Yh[76] + Yh[83],
    hG = Yh[399] + Yh[1407] + Yh[217] + Yh[57] + Yh[1408] + Yh[47] + Yh[1] + Yh[1409] + Yh[47] + Yh[278] + Yh[47] + Yh[995] + Yh[241] + Yh[438] + Yh[1] + Yh[300],
    rG = Yh[81] + Yh[438] + Yh[1410] + Yh[438] + Yh[1411],
    aG = 0;
  if (t[wd]) {
    var oG = navigator[Td],
      fG = /opera/i [Lo](oG),
      cG = !fG && /msie/i.test(oG),
      uG = /rv:11.0/i [Lo](oG),
      _G = /MSIE 10./i [Lo](oG);
    if (uG && (cG = !0), /msie\s[6,7,8]/i.test(oG)) throw new Error("your browser is not supported");
    var dG = /webkit|khtml/i [Lo](oG),
      lG = !dG && /gecko/i.test(oG),
      vG = /firefox\//i.test(oG),
      bG = /Chrome\//i [Lo](oG),
      gG = !bG && /Safari\//i.test(oG),
      yG = /Macintosh;/i [Lo](oG),
      xG = /(iPad|iPhone|iPod)/g.test(oG),
      pG = /Android/g [Lo](oG),
      mG = /Windows Phone/g [Lo](oG),
      EG = (xG || pG || mG) && c_ in t,
      wG = oG[kd](/AppleWebKit\/([0-9\.]*)/);
    if (wG && wG[Wh] > 1) {
      parseFloat(wG[1])
    }
    pG && parseFloat(oG[kd](/Android\s([0-9\.]*)/)[1])
  }
  t[yr] || (t.requestAnimationFrame = t[Md] || t[Od] || t[Id] || t[Sd] || function (i) {
    return t.setTimeout(function () {
      i()
    }, 1e3 / 60)
  }), t.cancelAnimationFrame || (t[jd] = t[Ad] || t.mozCancelAnimationFrame || t[Pd] || t[Ld] || function (i) {
    return t[Cd](i)
  });
  var TG = {
    SELECTION_TOLERANCE: EG ? 5 : 2,
    LABEL_COLOR: Rd
  };
  K(TG, {
    FONT_STYLE: {
      get: function () {
        return this[Dd] || (this._fontStyle = Nd)
      },
      set: function (t) {
        this[Dd] != t && (this._fontStyle = t, this[Bd] = !0)
      }
    },
    FONT_SIZE: {
      get: function () {
        return this[$d] || (this[$d] = 12)
      },
      set: function (t) {
        this[$d] != t && (this._fontSize = t, this[Bd] = !0)
      }
    },
    FONT_FAMILY: {
      get: function () {
        return this[Fd] || (this[Fd] = "Verdana,helvetica,arial,sans-serif")
      },
      set: function (t) {
        this[Fd] != t && (this._fontFamily = t, this._fontChanged = !0)
      }
    },
    FONT: {
      get: function () {
        return (this[Bd] || this[Bd] === n) && (this[Bd] = !1, this[zd] = this[Za] + Er + this[Ka] + Ja + this[Qa]), this[zd]
      }
    }
  });
  var kG = function (t) {
    this._j5 = [], this._ln = {}, t && this.add(t)
  };
  kG.prototype = {
    _j5: null,
    _ln: null,
    get: function (t) {
      return this[Gd](t)
    },
    getById: function (t) {
      return this._ln[t]
    },
    getByIndex: function (t) {
      return this._j5[t]
    },
    forEach: function (t, i, n) {
      return l(this._j5, t, i, n)
    },
    forEachReverse: function (t, i, n) {
      return b(this._j5, t, i, n)
    },
    size: function () {
      return this._j5[Wh]
    },
    contains: function (t) {
      return this.containsById(t.id)
    },
    containsById: function (t) {
      return this._ln.hasOwnProperty(t)
    },
    setIndex: function (t, i) {
      var n = this._j5.indexOf(t);
      if (0 > n) throw new Error(ka + t.id + Hd);
      return n == i ? !1 : (this._j5[Zh](n, 1), this._j5.splice(i, 0, t), !0)
    },
    setIndexAfter: function (t, i) {
      var n = this._j5[nr](t);
      if (0 > n) throw new Error(ka + t.id + Hd);
      return n == i ? i : n == i + 1 ? i + 1 : (n > i && (i += 1), this._j5[Zh](n, 1), this._j5[Zh](i, 0, t), i)
    },
    setIndexBefore: function (t, i) {
      var n = this._j5[nr](t);
      if (0 > n) throw new Error(ka + t.id + Hd);
      return n == i ? i : n == i - 1 ? i - 1 : (i > n && (i -= 1), this._j5[Zh](n, 1), this._j5[Zh](i, 0, t), i)
    },
    indexOf: function (t) {
      return this._j5.indexOf(t)
    },
    getIndexById: function (t) {
      var i = this[Yd](t);
      return i ? this._j5[nr](i) : -1
    },
    add: function (t, i) {
      return $(t) ? this._fe(t, i) : this._kj(t, i)
    },
    addFirst: function (t) {
      return this.add(t, 0)
    },
    _fe: function (t, i) {
      if (0 == t[Wh]) return !1;
      var e = !1,
        s = i >= 0;
      t = t._j5 || t;
      for (var h = 0, r = t[Wh]; r > h; h++) {
        var a = t[h];
        null !== a && a !== n && this._kj(a, i, !0) && (e = !0, s && i++)
      }
      return e
    },
    _kj: function (t, i) {
      var e = t.id;
      return e === n || this.containsById(e) ? !1 : (y(this._j5, t, i), this._ln[e] = t, t)
    },
    remove: function (t) {
      return $(t) ? this._n7p(t) : t.id ? this._fh(t.id, t) : this[qd](t)
    },
    _n7p: function (t) {
      if (0 == t[Wh]) return !1;
      var i = !1;
      t = t._j5 || t;
      for (var e = 0, s = t[Wh]; s > e; e++) {
        var h = t[e];
        if (null !== h && h !== n) {
          h.id === n && (h = this._ln[h]);
          var r = h.id;
          this._fh(r, h, !0) && (i = !0)
        }
      }
      return i
    },
    _fh: function (t, i) {
      return t !== n && this[Wd](t) ? ((null === i || i === n) && (i = this[Yd](t)), delete this._ln[t], x(this._j5, i), !0) : !1
    },
    removeById: function (t) {
      var i = this._ln[t];
      return i ? this._fh(t, i) : !1
    },
    set: function (t) {
      if (!t || 0 == t) return void this[$a]();
      if (this[Lf]() || !$(t)) return this[$a](), this.add(t);
      var i = [],
        n = {},
        e = 0;
      if (l(t, function (t) {
          this._ln[t.id] ? (n[t.id] = t, e++) : i[ir](t)
        }, this), e != this[Wh]) {
        var s = [];
        this[Vf](function (t) {
          n[t.id] || s.push(t)
        }, this), s[Wh] && this[Ud](s)
      }
      return i[Wh] && this._fe(i), !0
    },
    clear: function () {
      return this[Lf]() ? !1 : (this._j5[Wh] = 0, this._ln = {}, !0)
    },
    toDatas: function () {
      return this._j5.slice(0)
    },
    isEmpty: function () {
      return 0 == this._j5[Wh]
    },
    valueOf: function () {
      return this._j5[Wh]
    },
    clone: function (t) {
      var i = new kG;
      return i.add(t ? g(this._j5) : this.toDatas()), i
    }
  }, K(kG.prototype, {
    datas: {
      get: function () {
        return this._j5
      }
    },
    random: {
      get: function () {
        return this._j5 && this._j5[Wh] ? this._j5[H(this._j5[Wh])] : null
      }
    },
    length: {
      get: function () {
        return this._j5 ? this._j5[Wh] : 0
      }
    }
  });
  var MG = (2 * Math.PI, .5 * Math.PI),
    OG = function (t, i) {
      i = i.toUpperCase();
      for (var n = cG ? t[Vd] : t.firstElementChild; n && (1 != n[Xd] || n[Zd] && n.tagName[Kd]() != i);) n = cG ? n[Jd] : n[Qd];
      return n && 1 == n[Xd] && n[Zd] && n[Zd][Kd]() == i ? n : null
    },
    IG = function (t, i, n) {
      t instanceof IG && (i = t.y, t = t.x, n = t.rotate), this.set(t, i, n)
    },
    SG = function (t, i, n, e) {
      var s = t - n,
        h = i - e;
      return Math[uo](s * s + h * h)
    };
  IG.prototype = {
    x: 0,
    y: 0,
    rotate: n,
    set: function (t, i, n) {
      this.x = t || 0, this.y = i || 0, this.rotate = n || 0
    },
    negate: function () {
      this.x = -this.x, this.y = -this.y
    },
    offset: function (t, i) {
      this.x += t, this.y += i
    },
    equals: function (t) {
      return this.x == t.x && this.y == t.y
    },
    distanceTo: function (t) {
      return SG(this.x, this.y, t.x, t.y)
    },
    toString: function () {
      return tl + this.x + il + this.y + Nr
    },
    clone: function () {
      return new IG(this.x, this.y)
    }
  }, Object[cr](IG[hr], nl, {
    get: function () {
      return Math[uo](this.x * this.x + this.y * this.y)
    }
  });
  var jG = function (t, i, e, s) {
    t !== n && this._mp(t, i, e, s)
  };
  jG.prototype = {
    _n2: null,
    _n0: null,
    _my: null,
    _n4: null,
    _n5: null,
    _n7: null,
    _n9: 1,
    _mp: function (t, i, n, e) {
      this._n2 = t, this._n0 = i, this._my = n, this._n4 = e, t == n ? (this._n5 = -1, this._n9 = 0, this._n7 = t) : (this._n5 = (i - e) / (t - n), this._n7 = i - this._n5 * t, this._n9 = 1), this._kt = Math.atan2(this._n4 - this._n0, this._my - this._n2), this._n9os = Math.cos(this._kt), this._sin = Math.sin(this._kt)
    },
    _db: function (t) {
      return 0 == this._n9 ? Number.NaN : this._n5 * t + this._n7
    },
    _da: function (t) {
      return 0 == this._n5 ? Number.NaN : (t - this._n7) / this._n5
    },
    _$h: function (t) {
      var i, n, e, s, h, r = t[0],
        a = t[2],
        o = t[4],
        f = t[1],
        c = t[3],
        u = t[5],
        _ = this._n5,
        d = this._n7,
        l = this._n9;
      if (0 == l ? (e = Math.sqrt((-_ * _ * r - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * r), s = -_ * a + _ * r, h = _ * o - 2 * _ * a + _ * r) : (e = Math[uo]((-f + _ * r + d) * u + c * c + (-2 * _ * a - 2 * d) * c + (_ * o + d) * f + (-_ * _ * r - _ * d) * o + _ * _ * a * a + 2 * _ * d * a - _ * d * r), s = -c + f + _ * a - _ * r, h = u - 2 * c + f - _ * o + 2 * _ * a - _ * r), 0 != h) {
        i = (e + s) / h, n = (-e + s) / h;
        var v, b;
        return i >= 0 && 1 >= i && (v = Fi(i, t)), n >= 0 && 1 >= n && (b = Fi(n, t)), v && b ? [v, b] : v ? v : b ? b : void 0
      }
    },
    _3c: function (t, i, n) {
      if (this._n5 == t._n5 || 0 == this._n9 && 0 == t._n9) return null;
      var e, s;
      if (e = 0 == this._n9 ? this._n7 : 0 == t._n9 ? t._n7 : (t._n7 - this._n7) / (this._n5 - t._n5), s = 0 == this._n5 ? this._n7 : 0 == t._n5 ? t._n7 : this._n9 ? this._n5 * e + this._n7 : t._n5 * e + t._n7, !i) return {
        x: e,
        y: s
      };
      var h, r, a;
      if (n) h = -i / 2, r = -h;
      else {
        h = -SG(this._n2, this._n0, e, s), r = SG(this._my, this._n4, e, s);
        var o = -h + r;
        if (o > i) {
          var f = i / o;
          h *= f, r *= f
        } else a = (i - o) / 2
      }
      var c = this._6l(e, s, h),
        u = this._6l(e, s, r);
      return a && (c[rf] = a, u[rf] = a), [c, u]
    },
    _6l: function (t, i, n) {
      return 0 == this._n9 ? {
        x: t,
        y: i + n
      } : {
        x: t + n * this._n9os,
        y: i + n * this[el]
      }
    }
  };
  var AG = function (t, i) {
    this[Na] = t, this[Ba] = i
  };
  AG.prototype = {
    width: 0,
    height: 0,
    isEmpty: function () {
      return this[Na] <= 0 || this[Ba] <= 0
    },
    clone: function () {
      return new AG(this[Na], this[Ba])
    },
    toString: function () {
      return sl + this.width + il + this[Ba] + Nr
    }
  };
  var PG = function (t, i, e, s) {
    t instanceof Object && !D(t) && (i = t.y, e = t[Na], s = t[Ba], t = t.x), e === n && (e = -1), s === n && (s = -1), this.x = t || 0, this.y = i || 0, this[Na] = e, this[Ba] = s
  };
  PG.prototype = {
    x: 0,
    y: 0,
    width: -1,
    height: -1,
    setByRect: function (t) {
      this.x = t.x || 0, this.y = t.y || 0, this[Na] = t[Na] || 0, this[Ba] = t.height || 0
    },
    set: function (t, i, n, e) {
      this.x = t || 0, this.y = i || 0, this[Na] = n || 0, this[Ba] = e || 0
    },
    offset: function (t, i) {
      return this.x += t, this.y += i, this
    },
    contains: function (t, i) {
      return t instanceof PG ? ai(this.x, this.y, this.width, this.height, t.x, t.y, t[Na], t[Ba], i) : t >= this.x && t <= this.x + this[Na] && i >= this.y && i <= this.y + this[Ba]
    },
    intersectsPoint: function (t, i, n) {
      return this[Na] <= 0 && this[Ba] <= 0 ? !1 : n ? this[hl](t - n, i - n, 2 * n, 2 * n) : t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this.height
    },
    intersectsRect: function (t, i, n, e) {
      return hi(this.x, this.y, this.width, this[Ba], t, i, n, e)
    },
    intersects: function (t, i) {
      return D(t[Na]) ? this[hl](t.x, t.y, t[Na], t[Ba]) : this.intersectsPoint(t, i)
    },
    intersection: function (t, i, n, e) {
      var s = this.x,
        h = this.y,
        r = s;
      r += this[Na];
      var a = h;
      a += this.height;
      var o = t;
      o += n;
      var f = i;
      return f += e, t > s && (s = t), i > h && (h = i), r > o && (r = o), a > f && (a = f), r -= s, a -= h, 0 > r || 0 > a ? null : new PG(s, h, r, a)
    },
    addPoint: function (t) {
      this.add(t.x, t.y)
    },
    add: function (t, i) {
      if (D(t[Na])) return this.addRect(t.x, t.y, t.width, t.height);
      if (D(t.x) && (i = t.y, t = t.x), this[Na] < 0 || this[Ba] < 0) return this.x = t, this.y = i, void(this.width = this.height = 0);
      var n = this.x,
        e = this.y,
        s = this[Na],
        h = this.height;
      s += n, h += e, n > t && (n = t), e > i && (e = i), t > s && (s = t), i > h && (h = i), s -= n, h -= e, s > Number.MAX_VALUE && (s = Number[rl]), h > Number[rl] && (h = Number[rl]), this.set(n, e, s, h)
    },
    addRect: function (t, i, n, e) {
      var s = this[Na],
        h = this[Ba];
      (0 > s || 0 > h) && this.set(t, i, n, e);
      var r = n,
        a = e;
      if (!(0 > r || 0 > a)) {
        var o = this.x,
          f = this.y;
        s += o, h += f;
        var c = t,
          u = i;
        r += c, a += u, o > c && (o = c), f > u && (f = u), r > s && (s = r), a > h && (h = a), s -= o, h -= f, s > Number.MAX_VALUE && (s = Number.MAX_VALUE), h > Number[rl] && (h = Number[rl]), this.set(o, f, s, h)
      }
    },
    shrink: function (t, i, n, e) {
      return D(t) ? 1 == arguments.length ? e = i = n = t || 0 : 2 == arguments[Wh] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[xa] || 0, n = t[Xr] || 0, e = t[Zr] || 0, t = t.top || 0), this.x += i, this.y += t, this[Na] -= i + e, this[Ba] -= t + n, this
    },
    grow: function (t, i, n, e) {
      return D(t) ? 1 == arguments[Wh] ? e = i = n = t || 0 : 2 == arguments[Wh] ? (n = t || 0, e = i || 0) : (t = t || 0, i = i || 0, n = n || 0, e = e || 0) : (i = t[xa] || 0, n = t[Xr] || 0, e = t[Zr] || 0, t = t.top || 0), this.x -= i, this.y -= t, this.width += i + e, this.height += t + n, this
    },
    scale: function (t) {
      return this.x *= t, this.y *= t, this[Na] *= t, this.height *= t, this
    },
    isEmpty: function () {
      return this[Na] <= 0 && this.height <= 0
    },
    toString: function () {
      return this.x + al + this.y + al + this.width + al + this[Ba]
    },
    union: function (t) {
      var i = this[Na],
        n = this.height;
      if (0 > i || 0 > n) return new PG(t.x, t.y, t[Na], t.height);
      var e = t[Na],
        s = t.height;
      if (0 > e || 0 > s) return new PG(this.x, this.y, this.width, this[Ba]);
      var h = this.x,
        r = this.y;
      i += h, n += r;
      var a = t.x,
        o = t.y;
      return e += a, s += o, h > a && (h = a), r > o && (r = o), e > i && (i = e), s > n && (n = s), i -= h, n -= r, i > Number[rl] && (i = Number[rl]), n > Number.MAX_VALUE && (n = Number[rl]), new PG(h, r, i, n)
    },
    clear: function () {
      this.set(0, 0, -1, -1)
    },
    equals: function (t) {
      return t && this.x == t.x && this.y == t.y && this.width == t[Na] && this[Ba] == t[Ba]
    },
    clone: function (t, i) {
      return new PG(this.x + (t || 0), this.y + (i || 0), this[Na], this[Ba])
    },
    toArray: function () {
      return [this.x, this.y, this[Na], this[Ba]]
    },
    getIntersectionPoint: function (t, i, n, e) {
      return si(this, t, i, n, e)
    }
  }, E(PG, AG), PG[bc] = function (t, i) {
    return t == i || t && i && t.x == i.x && t.y == i.y && t.width == i[Na] && t[Ba] == i[Ba]
  }, K(PG[hr], {
    left: {
      get: function () {
        return this.x
      }
    },
    top: {
      get: function () {
        return this.y
      }
    },
    bottom: {
      get: function () {
        return this.y + this[Ba]
      }
    },
    right: {
      get: function () {
        return this.x + this.width
      }
    },
    cx: {
      get: function () {
        return this.x + this[Na] / 2
      }
    },
    cy: {
      get: function () {
        return this.y + this[Ba] / 2
      }
    },
    center: {
      get: function () {
        return new IG(this.cx, this.cy)
      }
    }
  }), PG[ol] = hi, PG.intersection = oi, PG.intersectsPoint = ri;
  var LG = function (t, i, n, e) {
    1 == arguments.length ? i = n = e = t : 2 == arguments.length && (n = t, e = i), this.set(t, i, n, e)
  };
  LG[hr] = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    set: function (t, i, n, e) {
      this.top = t || 0, this[xa] = i || 0, this[Xr] = n || 0, this.right = e || 0
    },
    clone: function () {
      return new LG(this.top, this.left, this[Xr], this.right)
    },
    equals: function (t) {
      return t && this.top == t.top && this[Xr] == t.bottom && this[xa] == t.left && this[Zr] == t[Zr]
    }
  };
  var CG = function (t, i) {
    this.horizontalPosition = t, this[Qr] = i
  };
  CG[hr] = {
    verticalPosition: !1,
    horizontalPosition: !1,
    toString: function () {
      return (this[Jr] || "") + (this[Qr] || "")
    }
  }, Z(CG.prototype, fl, {
    get: function () {
      return (this.horizontalPosition || "") + (this.verticalPosition || "")
    }
  });
  var RG = cl,
    DG = ul,
    NG = _l,
    BG = fc,
    $G = dl,
    FG = ll;
  CG[vl] = new CG(RG, BG), CG[bl] = new CG(RG, $G), CG[gl] = new CG(RG, FG), CG[yl] = new CG(DG, BG), CG[xl] = new CG(DG, $G), CG[pl] = new CG(DG, FG), CG[ml] = new CG(NG, BG), CG[El] = new CG(NG, $G), CG.RIGHT_BOTTOM = new CG(NG, FG);
  var zG = [CG[vl], CG[bl], CG.LEFT_BOTTOM, CG.CENTER_TOP, CG.CENTER_MIDDLE, CG.CENTER_BOTTOM, CG[ml], CG[El], CG.RIGHT_BOTTOM];
  Z(CG, Lr, {
    get: function () {
      return zG[H(zG[Wh])]
    }
  }), CG.fromString = function (t) {
    for (var i in CG) {
      var n = CG[i];
      if (n && Lr != i && n instanceof CG && n.toString() == t) return n
    }
  };
  var GG = function (t, i, n, e, s) {
    this.set(t, i, n, e), this[wl] = s
  };
  GG[hr] = {
    radius: 0,
    classify: function (t, i, n, e) {
      return i > t ? 0 : i + e > t ? 1 : n - e > t ? 2 : n > t ? 3 : 4
    },
    intersectsRect: function (t, i, n, e) {
      if (T(this, GG, hl, arguments) === !1) return !1;
      var s = this.x,
        h = this.y,
        r = s + this[Na],
        a = h + this[Ba],
        o = 2 * radius,
        f = 2 * radius,
        c = Math.min(this[Na], Math.abs(o)) / 2,
        u = Math.min(this[Ba], Math.abs(f)) / 2,
        _ = this[Tl](t, s, r, c),
        d = this.classify(t + n, s, r, c),
        l = this.classify(i, h, a, u),
        v = this[Tl](i + e, h, a, u);
      return 2 == _ || 2 == d || 2 == l || 2 == v ? !0 : 2 > _ && d > 2 || 2 > l && v > 2 ? !0 : (t = 1 == d ? t = t + n - (s + c) : t -= r - c, i = 1 == v ? i = i + e - (h + u) : i -= a - u, t /= c, i /= u, 1 >= t * t + i * i)
    },
    intersectsPoint: function (t, i) {
      if (T(this, GG, yo, arguments) === !1) return !1;
      var n = this.x,
        e = this.y,
        s = n + this[Na],
        h = e + this[Ba];
      if (n > t || e > i || t >= s || i >= h) return !1;
      var r = 2 * radius,
        a = 2 * radius,
        o = Math.min(this[Na], Math.abs(r)) / 2,
        f = Math.min(this[Ba], Math.abs(a)) / 2;
      return t >= (n += o) && t < (n = s - o) ? !0 : i >= (e += f) && i < (e = h - f) ? !0 : (t = (t - n) / o, i = (i - e) / f, 1 >= t * t + i * i)
    },
    clone: function () {
      return new GG(this.x, this.y, this.width, this[Ba], this.radius)
    }
  }, E(GG, PG);
  var HG = function (t, i, n, e) {
    this[zo] = t, this.type = i, this.kind = n, this.value = e
  };
  HG[hr] = {
    source: null,
    type: null,
    kind: null,
    value: null,
    toString: function () {
      return kl + this[zo] + Ml + this[To] + Ol + this[Il]
    }
  };
  var YG = function (t, i, n, e, s) {
    this[zo] = t, this[Il] = i, this[Sl] = e, this[vr] = n, this[jl] = s
  };
  YG[hr] = {
    type: Al,
    propertyType: null,
    toString: function () {
      return kl + this[zo] + Ml + this.type + Pl + this[Il] + Ll + this[Sl] + Cl + this[vr]
    }
  }, E(YG, HG), Z(YG.prototype, Rl, {
    get: function () {
      return this[Il]
    },
    set: function (t) {
      this[Il] = t
    }
  });
  var qG = function (t, i, n) {
    this[zo] = t, this[Sl] = t[pc], this[vr] = i, this[Dl] = n, this[Sl] && (this.oldIndex = this[Sl][Nl](t))
  };
  qG[hr] = {
    kind: pc
  }, E(qG, YG);
  var WG = function (t, i) {
    this[zo] = t, this[vr] = i
  };
  WG.prototype[Il] = Bl, E(WG, YG);
  var UG = function (t, i) {
    this[zo] = t, this[vr] = i
  };
  UG[hr].kind = $l, E(UG, YG);
  var VG = function (t, i, n, e) {
    this[zo] = i, this[Sl] = n, this[vr] = e, this[pc] = t, this.child = i, this[Fl] = n, this[Dl] = e
  };
  VG[hr][Il] = zl, E(VG, YG);
  var XG = function () {};
  XG[hr] = {
    listener: null,
    beforeEvent: function (t) {
      return null != this.listener && this[Gl].beforeEvent ? this[Gl].beforeEvent(t) : !0
    },
    onEvent: function (t) {
      null != this[Gl] && this.listener[dr] && this.listener[dr](t)
    }
  };
  var ZG = function () {
      w(this, ZG, arguments), this.events = {}, this.listeners = []
    },
    KG = function (t, i) {
      this.listener = t, this.scope = i, t instanceof Function ? this[dr] = t : (this[dr] = t[dr], this[_r] = t[_r]), this[bc] = function (t) {
        return t && this[Gl] == t[Gl] && this[Hl] == t[Hl]
      }
    };
  KG[hr] = {
    equals: function (t) {
      return t && this.listener == t[Gl] && this[Hl] == t[Hl]
    },
    destroy: function () {
      delete this.scope, delete this[Gl]
    }
  }, ZG.prototype = {
    listeners: null,
    _n7r: function () {
      return this[Yl] && this[Yl][Wh] > 0
    },
    _6p: function (t, i) {
      return t instanceof ZG ? t : new KG(t, i)
    },
    _9u: function (t, i) {
      if (t instanceof ZG) return this[Yl][nr](t);
      for (var n = this[Yl], e = 0, s = n[Wh]; s > e; e++) {
        var h = n[e];
        if (h.listener == t && h.scope == i) return e
      }
      return -1
    },
    contains: function (t, i) {
      return this._9u(t, i) >= 0
    },
    addListener: function (t, i) {
      return this[Ju](t, i) ? !1 : void this.listeners[ir](this._6p(t, i))
    },
    removeListener: function (t, i) {
      var n = this._9u(t, i);
      n >= 0 && this[Yl][Zh](n, 1)
    },
    on: function (t, i) {
      this[dd](t, i)
    },
    un: function (t, i, n) {
      this[ql](t, i, n)
    },
    onEvent: function (t) {
      return this[Yl] ? void l(this[Yl], function (i) {
        i[dr] && (i.scope ? i[dr][Uh](i[Hl], t) : i[dr](t))
      }, this) : !1
    },
    beforeEvent: function (t) {
      return this.listeners ? l(this[Yl], function (i) {
        return i[_r] ? i[Hl] ? i[_r].call(i[Hl], t) : i.beforeEvent(t) : !0
      }, this) : !0
    },
    _dt: function (t) {
      return this[_r](t) === !1 ? !1 : (this[dr](t), !0)
    },
    clear: function () {
      this[Yl] = []
    },
    destroy: function () {
      this[$a]()
    }
  }, E(ZG, XG);
  var JG = {
      onEvent: function () {},
      beforeEvent: function () {}
    },
    QG = function (t, i, n, e, s) {
      this[zo] = t, this[To] = Wl, this[Il] = i, this[mo] = n, this.index = e, this.oldIndex = s
    };
  QG[hr] = {
    index: -1,
    oldIndex: -1,
    toString: function () {
      return kl + this[zo] + Ml + this[To] + Ol + this[Il] + Ul + this.data + Vl + this.index + Xl + this[Fl]
    }
  }, E(QG, HG), QG.KIND_ADD = Zl, QG[Kl] = Qh, QG[Jl] = $a, QG[Ql] = tv;
  var tH = function () {
    this.id = ++aG, this._n7w = {}
  };
  tH[hr] = {
    _n7w: null,
    id: null,
    get: function (t) {
      return this[iv][t]
    },
    set: function (t, i) {
      var n = this.get(t);
      if (n === i) return !1;
      var e = new YG(this, t, i, n);
      return e[jl] = FH[lu], this[nv](t, i, e, this[iv])
    },
    _n5i: function (t, i, e, s) {
      return this[_r](e) === !1 ? !1 : (s || (s = this._n7w), i === n ? delete s[t] : s[t] = i, this[dr](e), !0)
    },
    remove: function (t) {
      this.set(t, null)
    },
    valueOf: function () {
      return this.id
    },
    toString: function () {
      return this.id
    },
    _dj: function (t, i) {
      if (i === n && (i = -1), this == t || t == this._jq) return !1;
      if (t && this == t._jq && !t._dj(null)) return !1;
      var e = new qG(this, t, i);
      if (!this.beforeEvent(e)) return !1;
      var s, h, r = this._jq;
      return t && (s = new WG(t, this), !t.beforeEvent(s)) ? !1 : null == r || (h = new UG(r, this), r[_r](h)) ? (this._jq = t, null != t && ci(t, this, i), null != r && ui(r, this), this[dr](e), null != t && t[dr](s), null != r && r[dr](h), this.onParentChanged(r, t), !0) : !1
    },
    addChild: function (t, i) {
      var n = t._dj(this, i);
      return n && this[ta](t, i), n
    },
    onChildAdd: function () {},
    removeChild: function (t) {
      if (!this._f8 || !this._f8[Ju](t)) return !1;
      var i = t._dj(null);
      return this[ia](t), i
    },
    onChildRemove: function () {},
    toChildren: function () {
      return this._f8 ? this._f8[Fu]() : null
    },
    clearChildren: function () {
      if (this._f8 && this._f8[Wh]) {
        var t = this[ev]();
        l(t, function (t) {
          t._dj(null)
        }, this), this[sv](t)
      }
    },
    forEachChild: function (t, i) {
      return this.hasChildren() ? this._f8[Vf](t, i) : !1
    },
    onChildrenClear: function () {},
    getChildIndex: function (t) {
      return this._f8 && this._f8.length ? this._f8.indexOf(t) : -1
    },
    setChildIndex: function (t, i) {
      if (!this._f8 || !this._f8[Wh]) return !1;
      var n = this._f8[nr](t);
      if (0 > n || n == i) return !1;
      var e = new VG(this, t, n, i);
      return this[_r](e) === !1 ? !1 : (this._f8[Qh](t) && this._f8.add(t, i), this[dr](e), !0)
    },
    hasChildren: function () {
      return this._f8 && this._f8[Wh] > 0
    },
    getChildAt: function (t) {
      return null == this._f8 ? null : this._f8._j5[t]
    },
    isDescendantOf: function (t) {
      if (!t[qh]()) return !1;
      for (var i = this.parent; null != i;) {
        if (t == i) return !0;
        i = i.parent
      }
      return !1
    },
    onParentChanged: function () {},
    firePropertyChangeEvent: function (t, i, n, e) {
      this[dr](new YG(this, t, i, n, e))
    }
  }, E(tH, XG), K(tH[hr], {
    childrenCount: {
      get: function () {
        return this._f8 ? this._f8[Wh] : 0
      }
    },
    children: {
      get: function () {
        return this._f8 || (this._f8 = new kG), this._f8
      }
    },
    parent: {
      get: function () {
        return this._jq
      },
      set: function (t) {
        this._dj(t, -1)
      }
    },
    properties: {
      get: function () {
        return this[iv]
      },
      set: function (t) {
        this[iv] != t && (this[iv] = t)
      }
    }
  });
  var iH = function () {
    this._j5 = [], this._ln = {}, this._1e = new ZG
  };
  iH[hr] = {
    beforeEvent: function (t) {
      return null != this._1e && this._1e[_r] ? this._1e.beforeEvent(t) : !0
    },
    onEvent: function (t) {
      return this._1e instanceof Function ? void this._1e(t) : void(null != this._1e && this._1e[dr] && this._1e[dr](t))
    },
    _1e: null,
    setIndex: function (t, i) {
      if (!this[Ju](t)) throw new Error(ka + t[hv]() + Hd);
      var n = this[nr](t);
      if (n == i) return !1;
      var e = new QG(this, QG[Ql], t, i, n);
      return this[_r](e) === !1 ? !1 : (this._j5[Qh](t) >= 0 && this._j5.add(i, t), this[dr](e), !0)
    },
    _fe: function (t, i) {
      if (0 == t[Wh]) return !1;
      var e = !1,
        s = i >= 0,
        h = new QG(this, QG.KIND_ADD, t, i);
      if (this[_r](h) === !1) return !1;
      var r = [];
      t = t._j5 || t;
      for (var a = 0, o = t.length; o > a; a++) {
        var f = t[a];
        null !== f && f !== n && this._kj(f, i, !0) && (r[ir](f), e = !0, s && i++)
      }
      return h[mo] = r, this[dr](h), e
    },
    _kj: function (t, i, n) {
      if (this.accept(t) === !1) return !1;
      if (n) return T(this, iH, rv, arguments);
      var e = new QG(this, QG[av], t, i);
      return this[_r](e) === !1 ? !1 : T(this, iH, rv, arguments) ? (this._kl(t, e), t) : !1
    },
    _kl: function (t, i) {
      this[dr](i)
    },
    _n7p: function (t) {
      if (0 == t[Wh]) return !1;
      var i = new QG(this, QG[Kl], t);
      if (this[_r](i) === !1) return !1;
      var e = [],
        s = !1;
      t = t._j5 || t;
      for (var h = 0, r = t[Wh]; r > h; h++) {
        var a = t[h];
        if (null !== a && a !== n) {
          var o = a.id || a;
          a.id === n && (a = null), this._fh(o, a, !0) && (e[ir](a), s = !0)
        }
      }
      return i[mo] = e, this[dr](i), s
    },
    _fh: function (t, i, n) {
      if (n) return T(this, iH, ov, arguments);
      var e = new QG(this, QG[Kl], i);
      return this.beforeEvent(e) === !1 ? !1 : T(this, iH, ov, arguments) ? (this.onEvent(e), !0) : !1
    },
    clear: function () {
      if (this[Lf]()) return !1;
      var t = new QG(this, QG[Jl], this.toDatas());
      return this[_r](t) === !1 ? !1 : T(this, iH, $a) ? (this[dr](t), !0) : !1
    },
    accept: function (t) {
      return this.filter && this.filter(t) === !1 ? !1 : !0
    }
  }, E(iH, kG), Z(iH.prototype, fv, {
    get: function () {
      return this._1e
    }
  });
  var nH = function () {
    w(this, nH, arguments), this[cv] = new ZG, this[uv] = new eH(this), this[uv]._1e = this[cv], this[_v] = new ZG, this[_v].addListener({
      beforeEvent: this[dv],
      onEvent: this.onDataPropertyChanged
    }, this), this[lv] = new ZG, this.childIndexChangeDispatcher = new ZG, this[vv] = new kG;
    var t = this;
    this.$roots[jc] = function (i, n) {
      if (!t[vv].contains(i)) throw new Error(ka + i.id + Hd);
      var e = t[vv]._j5.indexOf(i);
      if (e == n) return !1;
      t[vv]._j5[Zh](e, 1), t.$roots._j5.splice(n, 0, i), t[bv] = !0;
      var s = new VG(t, i, e, n);
      return t._27(s), !0
    }
  };
  nH[hr] = {
    selectionModel: null,
    selectionChangeDispatcher: null,
    dataChangeDispatcher: null,
    parentChangeDispatcher: null,
    roots: null,
    _kl: function (t, i) {
      t[Gl] = this[_v], t[pc] || this[vv].add(t), this[dr](i)
    },
    _fh: function (t, i) {
      if (T(this, nH, ov, arguments)) {
        if (i instanceof Wq) i[gv]();
        else if (i instanceof Uq) {
          var n = i[yv]();
          this.remove(n)
        }
        var e = i[pc];
        return null == e ? this[vv][Qh](i) : (e[xv](i), e[pv] = !0), i.hasChildren() && this[Qh](i[ev]()), i[Gl] = null, !0
      }
      return !1
    },
    _5k: function (t) {
      var i = t[zo];
      this[Ju](i) && (null == i[pc] ? this[vv].add(i) : null == t[Sl] && this[vv][Qh](i), this[lv][dr](t))
    },
    _27: function (t) {
      this[mv].onEvent(t)
    },
    beforeDataPropertyChange: function (t) {
      return t instanceof qG ? this[lv][_r](t) : !0
    },
    onDataPropertyChanged: function (t) {
      return t instanceof qG ? (this[bv] = !0, t[zo]._n9dIndexFlag = !0, void this._5k(t)) : void(t instanceof VG && (this[bv] = !0, t.source._n9dIndexFlag = !0, this._27(t)))
    },
    toRoots: function () {
      return this[vv][Fu]()
    },
    _fr: function (t) {
      var i, n = t._jq;
      i = n ? n._f8 : this[vv];
      var e = i[nr](t);
      if (0 > e) throw new Error(Ev + t + "' not exist in the box");
      return 0 == e ? n : i.getByIndex(e - 1)
    },
    _fw: function (t) {
      var i, n = t._jq;
      i = n ? n._f8 : this.$roots;
      var e = i.indexOf(t);
      if (0 > e) throw new Error(Ev + t + "' not exist in the box");
      return e == i[Wh] - 1 ? n ? this._fw(n) : null : i[Gd](e + 1)
    },
    forEachByDepthFirst: function (t, i, n) {
      return this[vv].length ? h(this[vv], t, i, n) : !1
    },
    forEachByDepthFirstReverse: function (t, i, n) {
      return this[vv].length ? o(this[vv], t, i, n) : !1
    },
    forEachByBreadthFirst: function (t, i) {
      return this[vv].length ? u(this.$roots, t, i) : !1
    },
    forEachByBreadthFirstReverse: function (t, i) {
      return this[vv][Wh] ? _(this.$roots, t, i) : !1
    },
    clear: function () {
      return T(this, nH, $a) ? (this[vv][$a](), this[$_].clear(), !0) : !1
    }
  }, E(nH, iH), K(nH[hr], {
    selectionModel: {
      get: function () {
        return this._selectionModel
      }
    },
    roots: {
      get: function () {
        return this[vv]
      }
    }
  });
  var eH = function (t) {
    w(this, eH), this.box = t, this[wv] = {
      onEvent: function (t) {
        QG.KIND_REMOVE == t[Il] ? null != t[mo] ? this.remove(t[mo]) : null != t[_d] && this[Qh](t.datas) : QG[Jl] == t[Il] && this.clear()
      }
    }, this.box[fv][dd](this[wv], this)
  };
  eH.prototype = {
    box: null,
    isSelected: function (t) {
      return this.containsById(t.id || t)
    },
    select: function (t) {
      return this.add(t)
    },
    unselect: function (t) {
      return this[Qh](t)
    },
    reverseSelect: function (t) {
      return this.contains(t) ? this[Qh](t) : this.add(t)
    },
    accept: function (t) {
      return this.box.contains(t)
    }
  }, E(eH, iH);
  var sH = null,
    hH = null,
    rH = function () {
      if (!i.createElement) return function (t) {
        return t
      };
      var t = i[r_](a_),
        e = t.style,
        s = {};
      return function (t) {
        if (s[t]) return s[t];
        var i = _i(t);
        return e[i] !== n || hH && e[i = _i(hH + i)] !== n ? (s[t] = i, i) : t
      }
    }(),
    aH = {};
  ! function () {
    if (!i.head) return !1;
    for (var e = i.head, s = "Webkit Moz O ms Khtml" [mr](Er), h = 0; h < s.length; h++)
      if (e.style[s[h] + Tv] !== n) {
        hH = sa + s[h][ha]() + sa;
        break
      }
    var r = i[r_](aa);
    t[kv] || r.appendChild(i.createTextNode("")), r[To] = Mv, r.id = Ov, e[yc](r), sH = r[Iv];
    var a, o;
    for (var f in aH) {
      var c = aH[f];
      a = f, o = "";
      for (var u in c) o += rH(u) + oa + c[u] + Sv;
      gi(a, o)
    }
  }();
  var oH = function (t, i, n, e, s) {
      if (s) {
        var h = function (t) {
          h[jv][Uh](h[Hl], t)
        };
        return h[Hl] = s, h[jv] = n, t[Av](i, h, e), h
      }
      return t[Av](i, n, e), n
    },
    fH = function (t, i, n) {
      t[Pv](i, n)
    };
  if (TG[Lv] = 200, TG[Cv] = 800, TG[Rv] = !0, t.navigator && navigator[Td]) {
    var cH, uH = /mobile|tablet|ip(ad|hone|od)|android/i,
      _H = c_ in t,
      dH = _H && uH[Lo](navigator.userAgent);
    if (dH) cH = Dv;
    else {
      var lH = Nv in t ? "mousewheel" : Bv;
      cH = $v + lH, _H && (cH += Fv)
    }
    cH = cH[mr](/[\s,]+/);
    var vH = function (i) {
        return t[zv] && i instanceof t[zv]
      },
      bH = function () {
        return TG[Lv]
      },
      gH = function () {
        return TG[Cv]
      },
      F = function (t) {
        t.preventDefault ? t[Sr]() : t[Gv] = !1
      },
      z = function (t) {
        t[jr] && t.stopPropagation(), t[Ar] = !0
      },
      G = function (t) {
        F(t), z(t)
      },
      yH = function (t) {
        return t.defaultPrevented || t[Gv] === !1
      },
      xH = function (t) {
        kH[Hv] && kH[Hv][Yv](t)
      },
      pH = function (t) {
        if (kH[Hv]) {
          var i = kH[Hv];
          i[qv](t), mH(null)
        }
      },
      mH = function (t) {
        kH[Hv] != t && (kH[Hv] && (kH[Hv][Wv] = !1), kH._n9urrentItem = t)
      },
      EH = function (i, n) {
        cH.forEach(function (t) {
          i.addEventListener(t, n, !1)
        }), EG || kH._n5h || (kH[ru] = !0, t[Av](Uv, xH, !0), t.addEventListener(Vv, pH, !0))
      },
      wH = function (t, i) {
        cH[Vf](function (n) {
          t.removeEventListener(n, i, !1)
        })
      },
      TH = function (t) {
        return t.touches ? {
          timeStamp: t[Xv],
          x: t.cx,
          y: t.cy
        } : {
          timeStamp: t[Xv],
          x: t.clientX,
          y: t[va]
        }
      };
    xi[hr] = {
      _install: function () {
        this.__n5ction || (this[Zv] = function (t) {
          this[Kv](t)
        }[gr](this), EH(this._m8, this[Zv]))
      },
      _uninstall: function () {
        this.__n5ction && wH(this._m8, this.__n5ction)
      },
      _n5ction: function (t) {
        t = this[Jv](t);
        var i = t[To];
        this[Qv](t, i) === !1 && this[tb](t, ib + i)
      },
      _n9ancelLongPressTimer: function () {
        this.__longPressTimer && (clearTimeout(this[nb]), this[nb] = null)
      },
      __kxLongPress: function (t) {
        this[eb] || (this[eb] = function () {
          this[sb] && (this[hb] = !0, this[sb][rb] ? this[tb](this._kxEvent, ab) : this._onEvent(this[sb], ob))
        }[gr](this)), this._n9ancelLongPressTimer(), this[nb] = setTimeout(this[eb], gH(t))
      },
      __fixTouchEvent: function (t) {
        for (var i, n, e = 0, s = 0, h = t[Yr].length, r = 0; h > r;) {
          var a = t[Yr][r++],
            o = a[fb],
            f = a[va];
          if (2 == r) {
            var c = n[0] - o,
              u = n[1] - f;
            i = Math[uo](c * c + u * u)
          }
          n = [o, f], e += o, s += f
        }
        t.cx = e / h, t.cy = s / h, t[Xu] = {
          x: t.cx,
          y: t.cy,
          clientX: t.cx,
          clientY: t.cy
        }, t[nl] = i
      },
      __touchCountChange: function (t) {
        this[cb][$a](), this._n55 = TH(t)
      },
      _handleTouchEvent: function (t, i) {
        switch (i) {
          case "touchstart":
            z(t), this[ub](t), this[_b](t);
            var n = t[Yr][Wh];
            this[sb] || (this[sb] = t, this._onstart(t), this[hb] = !1, this.__kxLongPress(t)), 1 == n && (this[db] = null), n >= 2 && !this[db] && (this[db] = {
              cx: t.cx,
              cy: t.cy,
              distance: t[nl]
            });
            break;
          case "touchmove":
            G(t), this[ub](t);
            var n = t[Yr][Wh];
            if (n >= 2 && this.__kxMulTouchEvent) {
              var e = this[db].distance;
              t[lb] = t.distance / e, t[vb] = this.__kxMulTouchEvent.prevScale ? t[lb] / this[db][bb] : t[lb], this[db][bb] = t[lb], this[gb] || (this.__pinching = !0, this[tb](t, yb))
            }
            this.__dragging || (this.__dragging = !0, this[xb](t)), this._ondrag(t), this[gb] && this[tb](t, pb);
            break;
          case "touchend":
            G(t);
            var n = t[Yr].length;
            n && (this.__fixTouchEvent(t), this.__touchCountChange(t)), 1 >= n && (this[gb] && (this.__pinching = !1, this[tb](t, mb)), this[db] = null), 0 == n && (this[Wv] ? (this[Eb](t), this[Wv] = !1) : t[Xv] - this[sb][Xv] < .8 * bH(t) && this[wb](this[sb]), this[Tb](t));
            break;
          case "touchcancel":
            this[Wv] = !1, this.__pinching = !1, this[db] = null
        }
        return !1
      },
      _handleEvent: function (t, i) {
        if (vH(t)) return this[kb](t, i);
        if (Mb == i) z(t), mH(this), this._n55 = TH(t), this[sb] || (this[sb] = t, this[Ob](t)), this[hb] = !1, this[Ib](t);
        else if (Vv == i) mH(), this[Tb](t);
        else if (Sb == i) {
          if (this[hb]) return !0;
          if (this[jb]()) return this[wb](t), !0
        } else if (Ab == i) {
          if (this[jb]()) return !0
        } else {
          if (Pb == i) return this._onEvent(t, Lb), this[sb] && yH(t) && mH(this), !0;
          if (i == lH) {
            var e = t.wheelDelta;
            if (e !== n ? e /= 120 : e = -t[Cb], !e) return;
            return t[Rb] = e, this[tb](t, Nv)
          }
        }
        return !1
      },
      _onEvent: function (t, i) {
        if (this[ma]) {
          var n = this[ma];
          if (i = i || t[To], n instanceof Function) return n(t, i);
          if (!(n[Oc] instanceof Function && n[Oc](i, t) === !1)) return n[Db] instanceof Function && n[Db](i, t, this[pa] || this._m8), n[i] instanceof Function ? n[i][Uh](n, t, this._scope || this._m8) : void 0
        }
      },
      _toQEvent: function (t) {
        return t
      },
      _onWindowMouseUp: function (t) {
        this[Wv] && (G(t), this[Wv] = !1, t = this._toQEvent(t), this[Eb](t), this._onrelease(t), this[tb](t, Nb))
      },
      _kxDragDistance: 4,
      _onWindowMouseMove: function (t) {
        if (this[sb]) {
          if (G(t), !this[Wv]) {
            var i = this[sb][Bb] - t[Bb],
              n = this._kxEvent[$b] - t[$b];
            if (i * i + n * n < this[Fb]) return;
            this[Wv] = !0, this[xb](t)
          }
          this[zb](this._toQEvent(t))
        }
      },
      _isDelayClick: function () {
        return TG[Rv]
      },
      __onclick: function (t) {
        if (!this[hb]) {
          var i = bH(t);
          this.__n9lickTimer ? this[Gb] || (clearTimeout(this[Hb]), this[Hb] = null, this[tb](t, Yb), this.__dblclicked = !0) : (this.__dblclicked = !1, this.__n9lickTimer = setTimeout(function (t) {
            this[Hb] = null, this[Gb] || this._onEvent(t, qb)
          }[gr](this, t, i), i))
        }
      },
      _onstart: function (t) {
        t[rb] ? this[tb](t, Wb) : this[tb](t, Ub)
      },
      _onrelease: function (t) {
        this._kxEvent && (this._n9ancelLongPressTimer(), t[rb] ? this[tb](t, Vb) : this._onEvent(t, Xb), this._kxEvent = null, this[Zb] = null)
      },
      _n5ppendDragInfo: function (t) {
        var i = this._n55;
        this[Zb] = TH(t), this[cb].add(i, this[Zb], t)
      },
      _kxdrag: function () {
        this[hb] = !0, this._n9ancelLongPressTimer(), this._kxEvent.button ? this[tb](this[sb], Kb) : this[tb](this[sb], Jb)
      },
      _ondrag: function (t) {
        this._n5ppendDragInfo(t), this[sb][rb] ? this[tb](t, Qb) : this[tb](t, tg)
      },
      _enddrag: function (t) {
        if (t[Xv] - this[Zb][Xv] < 100) {
          var i = this[cb][ig]();
          i && (t.vx = i.x, t.vy = i.y)
        }
        this[sb][rb] ? this[tb](t, ng) : this[tb](t, eg), this[cb][$a]()
      },
      _hu: function () {
        this[sg]()
      },
      _kwStatus: function () {
        kH[Hv] == this && delete kH._n9urrentItem, this._n9ancelLongPressTimer(), delete this._n55, this._kxEvent && (delete this[sb].getData, delete this[sb][Hu], delete this[sb])
      }
    };
    var kH = I(function (t) {
      this._kn = t, xi[sr](this, [t.canvasPanel, null, t])
    }, {
      "super": xi,
      _moData: function (t) {
        return this._kn.getElementByMouseEvent(t)
      },
      _lh: function (t) {
        return this._kn.getUIByMouseEvent(t)
      },
      _toQEvent: function (i) {
        return (i instanceof MouseEvent || t[zv] && i instanceof t[zv]) && (i[hg] = this[rg][gr](this, i), i.getUI = this._lh[gr](this, i)), i
      },
      _onElementRemoved: function (t) {
        this._iuListeners(function (i) {
          i[ag] instanceof Function && i[ag](t, this._kn)
        })
      },
      _onElementClear: function () {
        this[og](function (t) {
          t.onClear instanceof Function && t.onClear(this._kn)
        })
      },
      _hu: function (t) {
        this[fg] && this._huInteractions(this._25s, t), this[cg] && this[ug](this[cg], t), this[sg]()
      },
      _kn: null,
      _25s: null,
      _n9ustomInteractionListeners: null,
      _mpInteraction: function (t) {
        return this._25s == t ? !1 : (this[fg] && this[fg][Wh] && this[ug](this._25s), void(this._25s = t))
      },
      _mxCustomInteractionListener: function (t) {
        this[cg] || (this._n9ustomInteractionListeners = []), this[cg].push(t)
      },
      _kgCustomInteractionListener: function (t) {
        this[cg] && 0 != this[cg][Wh] && x(this[cg], t)
      },
      _onEvent: function (t, i, n) {
        this._kn[i] instanceof Function && this._kn[i][Uh](this._kn, t, n), this[fg] && this.__onEvent(t, i, this[fg], n), this[cg] && this[_g](t, i, this[cg], n)
      },
      _iuListeners: function (t) {
        this[fg] && l(this[fg], t, this), this[cg] && l(this[cg], t, this)
      },
      __onEvent: function (t, i, n, e) {
        if (!$(n)) return void this[dg](t, i, n, e);
        for (var s = 0; s < n[Wh]; s++) {
          var h = n[s];
          this[dg](t, i, h, e)
        }
      },
      __handleEvent: function (t, i, n, e) {
        if (!(n[Oc] instanceof Function && n[Oc](i, t, this._kn, e) === !1)) {
          n[Db] instanceof Function && n[Db](i, t, this._kn, e);
          var s = n[i];
          s instanceof Function && s.call(n, t, this._kn, e)
        }
      },
      _huInteraction: function (t) {
        t[lg] instanceof Function && t.destroy.call(t, this._kn)
      },
      _huInteractions: function (t, i) {
        if (!$(t)) return void this._huInteraction(t, i);
        for (var n = 0; n < t[Wh]; n++) {
          var e = t[n];
          e && this[vg](e, i)
        }
      }
    })
  }
  mi[hr] = {
    limitCount: 10,
    points: null,
    add: function (t, i, n) {
      0 == this[Ta].length && (this[bg] = t.x, this[gg] = t.y);
      var e = i[Xv] - t.timeStamp || 1;
      n.interval = e;
      var s = i.x - t.x,
        h = i.y - t.y;
      n.dx = s, n.dy = h, n.startX = this[bg], n[yg] = this._kxY, n[xg] = i.x - this[bg], n[pg] = i.y - this._kxY, this[Ta].splice(0, 0, {
        interval: e,
        dx: s,
        dy: h
      }), this[Ta].length > this[mg] && this.points.pop()
    },
    getCurrentSpeed: function () {
      if (!this.points[Wh]) return null;
      for (var t = 0, i = 0, n = 0, e = 0, s = this.points[Wh]; s > e; e++) {
        var h = this[Ta][e],
          r = h[Eg];
        if (r > 150) {
          t = 0;
          break
        }
        if (t += r, i += h.dx, n += h.dy, t > 300) break
      }
      return 0 == t || 0 == i && 0 == n ? null : {
        x: i / t,
        y: n / t
      }
    },
    clear: function () {
      this[Ta] = []
    }
  };
  var MH, OH, IH, SH;
  dG ? (MH = wg, OH = Tg, IH = kg, SH = Mg) : lG ? (MH = Og, OH = Ig, IH = Sg, SH = jg) : (MH = Ag, OH = Ag, IH = U_, SH = Pg);
  var jH = Lg,
    AH = Math.PI,
    PH = Math.pow,
    LH = Math.sin,
    CH = 1.70158,
    RH = {
      swing: function (t) {
        return -Math.cos(t * AH) / 2 + .5
      },
      easeNone: function (t) {
        return t
      },
      easeIn: function (t) {
        return t * t
      },
      easeOut: function (t) {
        return (2 - t) * t
      },
      easeBoth: function (t) {
        return (t *= 2) < 1 ? .5 * t * t : .5 * (1 - --t * (t - 2))
      },
      easeInStrong: function (t) {
        return t * t * t * t
      },
      easeOutStrong: function (t) {
        return 1 - --t * t * t * t
      },
      easeBothStrong: function (t) {
        return (t *= 2) < 1 ? .5 * t * t * t * t : .5 * (2 - (t -= 2) * t * t * t)
      },
      elasticIn: function (t) {
        var i = .3,
          n = i / 4;
        return 0 === t || 1 === t ? t : -(PH(2, 10 * (t -= 1)) * LH(2 * (t - n) * AH / i))
      },
      elasticOut: function (t) {
        var i = .3,
          n = i / 4;
        return 0 === t || 1 === t ? t : PH(2, -10 * t) * LH(2 * (t - n) * AH / i) + 1
      },
      elasticBoth: function (t) {
        var i = .45,
          n = i / 4;
        return 0 === t || 2 === (t *= 2) ? t : 1 > t ? -.5 * PH(2, 10 * (t -= 1)) * LH(2 * (t - n) * AH / i) : PH(2, -10 * (t -= 1)) * LH(2 * (t - n) * AH / i) * .5 + 1
      },
      backIn: function (t) {
        return 1 === t && (t -= .001), t * t * ((CH + 1) * t - CH)
      },
      backOut: function (t) {
        return (t -= 1) * t * ((CH + 1) * t + CH) + 1
      },
      backBoth: function (t) {
        return (t *= 2) < 1 ? .5 * t * t * (((CH *= 1.525) + 1) * t - CH) : .5 * ((t -= 2) * t * (((CH *= 1.525) + 1) * t + CH) + 2)
      },
      bounceIn: function (t) {
        return 1 - RH[Cg](1 - t)
      },
      bounceOut: function (t) {
        var i, n = 7.5625;
        return i = 1 / 2.75 > t ? n * t * t : 2 / 2.75 > t ? n * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? n * (t -= 2.25 / 2.75) * t + .9375 : n * (t -= 2.625 / 2.75) * t + .984375
      },
      bounceBoth: function (t) {
        return .5 > t ? .5 * RH.bounceIn(2 * t) : .5 * RH[Cg](2 * t - 1) + .5
      }
    },
    DH = function (t) {
      this._jm = t
    };
  DH[hr] = {
    _jm: null,
    _8t: function () {
      this[Rg] instanceof Function && (this[Rg](), this._n9allback = null)
    },
    _kx: function (t) {
      var i = Date.now();
      this._m6(), this._n9allback = t, this[Dg] = requestAnimationFrame(function n() {
        var t = Date.now(),
          e = t - i;
        return !e || this._jm && this._jm(e) !== !1 ? (i = t, void(this[Dg] = requestAnimationFrame(n[gr](this)))) : void this._m6()
      }[gr](this))
    },
    _6i: function () {},
    _m6: function () {
      return this._requestID ? (this._6i(), this._8t(), t.cancelAnimationFrame(this[Dg]), void delete this._requestID) : !1
    },
    _e6: function () {
      return null != this._requestID
    }
  };
  var NH = function (t, i, n, e) {
    this[Ng] = t, this[pa] = i || this, this._3j = e, n && n > 0 && (this._im = n)
  };
  NH.prototype = {
    _im: 1e3,
    _3j: null,
    _f4: 0,
    _m6: function () {
      return this._f4 = 0, this._d7 = 0, T(this, NH, Bg)
    },
    _d7: 0,
    _jm: function (t) {
      if (this._f4 += t, this._f4 >= this._im) return this[Ng].call(this[pa], 1, (1 - this._d7) * this._im, t, this._im), !1;
      var i = this._f4 / this._im;
      return this._3j && (i = this._3j(i)), this[Ng][Uh](this._scope, i, (i - this._d7) * this._im, t, this._im) === !1 ? !1 : void(this._d7 = i)
    }
  }, E(NH, DH);
  var BH = function (t) {
      ni(t)
    },
    $H = {
      version: $g,
      extend: E,
      doSuperConstructor: w,
      doSuper: T,
      createFunction: function (t, i) {
        return i.bind(t)
      },
      setClass: L,
      appendClass: C,
      removeClass: R,
      forEach: l,
      forEachReverse: b,
      isNumber: D,
      isString: N,
      isBoolean: B,
      isArray: $,
      eventPreventDefault: F,
      eventStopPropagation: z,
      stopEvent: G,
      callLater: A,
      nextFrame: P,
      forEachChild: e,
      forEachByDepthFirst: h,
      forEachByDepthFirstReverse: o,
      forEachByBreadthFirst: u,
      randomInt: H,
      randomBool: Y,
      randomColor: W,
      addEventListener: oH,
      getFirstElementChildByTagName: OG
    };
  $H[Fg] = EG, $H[zg] = xG, $H.intersectsPoint = ri, $H[Gg] = ai, $H[Hg] = PG, $H.Size = AG, $H[Yg] = IG, $H.Insets = LG, $H[qg] = HG, $H.PropertyChangeEvent = YG, $H.ListEvent = QG, $H[Wg] = XG, $H[Ug] = ZG, $H.Position = CG, $H[Vg] = tH, $H.SelectionModel = eH, $H[Xg] = nH, $H[Zg] = JG, $H[Kg] = Ti, $H[Jg] = Ei, $H[Qg] = wi, $H[ty] = pi, $H.calculateDistance = SG, $H[iy] = kG, $H[ny] = xi, $H[ey] = function (t) {
    alert(t)
  }, $H.prompt = function (t, i, n, e) {
    var s = prompt(t, i);
    return s != i && n ? n.call(e, s) : s
  }, $H[sy] = function (t, i, n) {
    var e = confirm(t);
    return e && i ? i.call(n) : e
  }, $H[hy] = gi;
  var FH = {
    IMAGE_ADJUST_FLIP: ry,
    IMAGE_ADJUST_MIRROR: ay,
    SELECTION_TYPE_BORDER_RECT: oy,
    SELECTION_TYPE_BORDER: fy,
    SELECTION_TYPE_SHADOW: cy,
    NS_SVG: "http://www.w3.org/2000/svg",
    PROPERTY_TYPE_ACCESSOR: 0,
    PROPERTY_TYPE_STYLE: 1,
    PROPERTY_TYPE_CLIENT: 2,
    EDGE_TYPE_DEFAULT: null,
    EDGE_TYPE_ELBOW: uy,
    EDGE_TYPE_ELBOW_HORIZONTAL: _y,
    EDGE_TYPE_ELBOW_VERTICAL: dy,
    EDGE_TYPE_ORTHOGONAL: ly,
    EDGE_TYPE_ORTHOGONAL_HORIZONTAL: vy,
    EDGE_TYPE_ORTHOGONAL_VERTICAL: by,
    EDGE_TYPE_HORIZONTAL_VERTICAL: gy,
    EDGE_TYPE_VERTICAL_HORIZONTAL: yy,
    EDGE_TYPE_EXTEND_TOP: xy,
    EDGE_TYPE_EXTEND_LEFT: py,
    EDGE_TYPE_EXTEND_BOTTOM: my,
    EDGE_TYPE_EXTEND_RIGHT: Ey,
    EDGE_TYPE_ZIGZAG: wy,
    EDGE_CORNER_NONE: y_,
    EDGE_CORNER_ROUND: xo,
    EDGE_CORNER_BEVEL: Ty,
    GROUP_TYPE_RECT: ky,
    GROUP_TYPE_CIRCLE: My,
    GROUP_TYPE_ELLIPSE: Oy,
    SHAPE_CIRCLE: Iy,
    SHAPE_RECT: ky,
    SHAPE_ROUNDRECT: Sy,
    SHAPE_STAR: jy,
    SHAPE_TRIANGLE: Ay,
    SHAPE_HEXAGON: Py,
    SHAPE_PENTAGON: Ly,
    SHAPE_TRAPEZIUM: Cy,
    SHAPE_RHOMBUS: Ry,
    SHAPE_PARALLELOGRAM: Dy,
    SHAPE_HEART: Ny,
    SHAPE_DIAMOND: By,
    SHAPE_CROSS: $y,
    SHAPE_ARROW_STANDARD: Fy,
    SHAPE_ARROW_1: zy,
    SHAPE_ARROW_2: Gy,
    SHAPE_ARROW_3: Hy,
    SHAPE_ARROW_4: Yy,
    SHAPE_ARROW_5: qy,
    SHAPE_ARROW_6: Wy,
    SHAPE_ARROW_7: Uy,
    SHAPE_ARROW_8: Vy,
    SHAPE_ARROW_OPEN: Xy
  };
  FH[Zy] = Ky, FH.LINE_CAP_TYPE_ROUND = xo, FH[Jy] = Qy, FH.LINE_JOIN_TYPE_BEVEL = Ty, FH[tx] = xo, FH[ix] = nx, TG[ex] = FH[sx], TG.SELECTION_TOLERANCE = dH ? 8 : 3, TG.SELECTION_BORDER = 2, TG[hx] = 7, TG[rx] = X(3422561023), TG[ex] = FH[sx], TG.BORDER_RADIUS = 10, TG[ax] = 10, TG[Nu] = 10, TG[ox] = 200, TG[fo] = 1.2;
  var zH = t.devicePixelRatio || 1;
  1 > zH && (zH = 1);
  var GH;
  $H[fx] = Pi;
  var HH = bG && !EG,
    YH = 9,
    qH = function (t, i, n, e) {
      var s = t - n,
        h = i - e;
      return s * s + h * h
    };
  tn[hr] = {
    equals: function (t) {
      return this.cx == t.cx && this.cy == t.cy && this.r == t.r
    }
  }, tn[vo] = function (t, i, n) {
    if (!n) return Ji(t, i);
    var e = qH(t.x, t.y, i.x, i.y),
      s = qH(t.x, t.y, n.x, n.y),
      h = qH(n.x, n.y, i.x, i.y);
    if (e + WH >= s + h) return Ji(t, i, 0, n);
    if (s + WH >= e + h) return Ji(t, n, 0, i);
    if (h + WH >= e + s) return Ji(i, n, 0, t);
    var r;
    Math.abs(n.y - i.y) < 1e-4 && (r = t, t = i, i = r), r = n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * (-t.y + n.y);
    var a = (n.x * n.x * (t.y - i.y) + (t.x * t.x + (t.y - i.y) * (t.y - n.y)) * (i.y - n.y) + i.x * i.x * (-t.y + n.y)) / (2 * r),
      o = (i.y + n.y) / 2 - (n.x - i.x) / (n.y - i.y) * (a - (i.x + n.x) / 2);
    return new tn(a, o, SG(a, o, t.x, t.y), t, i, n)
  };
  var WH = .01,
    UH = {
      _n5m: function (t, i, e, s, h) {
        if (N(t) && (t = CG[Kr](t)), !t) return {
          x: 0,
          y: 0
        };
        var r = 0,
          a = 0,
          o = i._j2;
        if (e = e || 0, t.x === n) {
          var f = t.horizontalPosition,
            c = t[Qr],
            u = !0;
          switch (f) {
            case NG:
              u = !1;
              break;
            case DG:
              r += o / 2
          }
          switch (c) {
            case BG:
              a -= e / 2;
              break;
            case FG:
              a += e / 2
          }
        } else r = t.x, a = t.y, Math.abs(r) > 0 && Math.abs(r) < 1 && (r *= o);
        h && null != s && (a += s.y, r += Math.abs(s.x) < 1 ? s.x * o : s.x);
        var _ = fn[Uh](i, r, a, u);
        return _ ? (h || null == s || _[cx](s), _) : {
          x: 0,
          y: 0
        }
      },
      _ll: function (t, i) {
        var n = i[To],
          e = i[Ta];
        switch (n) {
          case xY:
            t.arcTo(e[0], e[1], e[2], e[3], i._r);
            break;
          case vY:
            t[Dc](e[0], e[1]);
            break;
          case bY:
            t[Nc](e[0], e[1]);
            break;
          case gY:
            t.quadraticCurveTo(e[0], e[1], e[2], e[3]);
            break;
          case yY:
            t[ux](e[0], e[1], e[2], e[3], e[4], e[5]);
            break;
          case pY:
            t[hf]()
        }
      },
      _5o: function (t, i, n, e) {
        var s = i[To];
        if (s != vY && s != pY) {
          var h = n[wo],
            r = i[Ta];
          switch (n[To] == vY && t.add(h.x, h.y), s) {
            case xY:
              _n(i, h.x, h.y, r[0], r[1], r[2], r[3], r[4]), t.add(r[0], r[1]), t.add(i._p1x, i[Io]), t.add(i[So], i[Mo]), i.$boundaryPoint1 && t.add(i[_x].x, i[_x].y), i.$boundaryPoint2 && t.add(i.$boundaryPoint2.x, i[dx].y);
              break;
            case bY:
              t.add(r[0], r[1]);
              break;
            case gY:
              Gi([h.x, h.y][Kh](r), t);
              break;
            case yY:
              Vi([h.x, h.y][Kh](r), t);
              break;
            case pY:
              e && t.add(e[Ta][0], e[Ta][1])
          }
        }
      },
      _5n: function (t, i, n) {
        var e = t[To];
        if (e == vY) return 0;
        var s = i[wo],
          h = t[Ta];
        switch (e == yY && 4 == h[Wh] && (e = gY), e) {
          case bY:
            return SG(h[0], h[1], s.x, s.y);
          case xY:
            return t._j2;
          case gY:
            var r = qi([s.x, s.y][Kh](h));
            return t._lf = r, r(1);
          case yY:
            var r = Zi([s.x, s.y][Kh](h));
            return t._lf = r, r(1) || Xi([s.x, s.y].concat(h));
          case pY:
            if (s && n) return t.points = n[Ta], SG(n[Ta][0], n[Ta][1], s.x, s.y)
        }
        return 0
      }
    },
    VH = /^data:image\/(\w+);base64,/i,
    XH = /^gif/i,
    ZH = /^svg/i,
    KH = 10,
    JH = 11,
    QH = 12,
    tY = 20,
    iY = 30;
  TG[lx] = 50, TG.IMAGE_HEIGHT = 30, TG.MAX_CACHE_PIXELS = 1e6;
  var nY = 1,
    eY = 2,
    sY = 3;
  gn[hr] = {
    _ja: 0,
    _62: !0,
    _kz: null,
    _j1: null,
    _li: null,
    _ma: null,
    _n7c: n,
    _8x: n,
    _60: function () {
      return this._ja == nY
    },
    getBounds: function (t) {
      return this._ma == iY ? this._li.getBounds(t) : (this._62 && this._fc(), this)
    },
    validate: function () {
      this._62 && this._fc()
    },
    _fc: function () {
      if (this._62 = !1, this._ma == iY) return this._li.validate(), void this[vf](this._li[Mf]);
      if (this._ma == tY) return void this._97();
      if (this._ja != nY) try {
        this._dm()
      } catch (t) {
        this._ja = sY, $H[Wr](t)
      }
    },
    _4y: function () {
      this._dt(), this[vx][$a](), delete this[vx]
    },
    _i8: function (t) {
      this._kz && this._kz.parentNode && this._kz[bx][xv](this._kz), this._ja = sY, $H[Wr](gx + this._li), this[yx] = null, this._j1 = null, this._kz = null, t !== !1 && this._4y()
    },
    _dm: function () {
      var t = this._li;
      if (this._ja = nY, this._dispatcher = new ZG, this._ma == QH) {
        for (var n in jY) this[n] = jY[n];
        return void Xn(this._li, this, this._n94, this._i8, this._ef)
      }
      this._kz || (this._kz = i[r_](f_), cG && (this._kz.style.visibility = g_, i[xx].appendChild(this._kz))), this._kz.src = t, this._kz.width && (this.width = this._kz[Na], this[Ba] = this._kz[Ba]), this._kz.onload = cG ? function (t) {
        setTimeout(this._8o.bind(this, t), 100)
      }[gr](this) : this._8o[gr](this), this._kz[Jf] = this._i8.bind(this)
    },
    _8o: function () {
      this._ja = eY;
      var t = this._kz.width,
        i = this._kz[Ba];
      if (this._kz[bx] && this._kz[bx].removeChild(this._kz), !t || !i) return void this._i8();
      this[Na] = t, this[Ba] = i;
      var n = this._e4();
      n[Na] = t, n[Ba] = i, n.g.drawImage(this._kz, 0, 0, t, i), this._pixels = cG && this._ma == JH ? null : Tn(n), this._4y()
    },
    _97: function () {
      var t = this._li;
      if (!(t[$o] instanceof Function)) return void this._i8(!1);
      if (t.cacheable === !1 && t[Na] && t[Ba]) return this[Na] = t[Na], void(this[Ba] = t.height);
      var i = t.width || TG.IMAGE_MAX_SIZE,
        n = t.height || TG.IMAGE_MAX_SIZE,
        e = this._e4();
      e[Na] = i, e[Ba] = n;
      var s = e.g;
      t[$o](s);
      var h = Ni(s, 0, 0, i, n);
      if (h) {
        var r = Mn(h[mo], i, n);
        this.x = r._x, this.y = r._y, this[Na] = r[px], this[Ba] = r[mx], e[Na] = this[Na], e[Ba] = this.height, s[Xf](h, -this.x, -this.y), this[yx] = r
      }
    },
    _e4: function () {
      return this._j1 || (this._j1 = Pi())
    },
    _6a: function (t, i, n, e, s, h) {
      i[Ex](), i[ky](0, 0, e, s), i[wx] = h || Tx, i[kx](), i[Mx](), i[eo] = Xu, i.textBaseline = ho, i.fillStyle = L_;
      var r = 6 * (i.canvas[za] || 1);
      i[no] = Ox + r + "px Verdana,helvetica,arial,sans-serif", i.strokeStyle = A_, i[O_] = 1, i.strokeText(t, e / 2 + .5, s / 2 + .5), i[j_] = Ix, i[Sx](t, e / 2 - .5, s / 2 - .5), i[ao](t, e / 2, s / 2), i[oo]()
    },
    draw: function (t, i, n, e, s, h) {
      if (this[Na] && this[Ba]) {
        i = i || 1, e = e || 1, s = s || 1;
        var r = this[Na] * e,
          a = this[Ba] * s;
        if (h && n[P_] && (t.shadowColor = n[P_], t[jx] = (n[jx] || 0) * i, t[Ax] = (n.shadowOffsetX || 0) * i, t[Px] = (n[Px] || 0) * i), this._ja == nY) return this._6a(Lx, t, i, r, a, n.renderColor);
        if (this._ja == sY) return this._6a(Cx, t, i, r, a, n[Rx]);
        if (this._ma == iY) return t[io](e, s), void this._li[$o](t, i, n);
        var o = this._gb(i, e, s);
        return o ? ((this.x || this.y) && t[to](this.x * e, this.y * s), t[io](e / o[io], s / o[io]), void o._ll(t, n[Rx], n.renderColorBlendMode)) : void this._iz(t, i, e, s, this[Na] * e, this[Ba] * s, n)
      }
    },
    _iz: function (t, i, n, e, s, h, r) {
      if (this._ma == tY) return 1 != n && 1 != e && t[io](n, e), void this._li[$o](t, r);
      if (this._kz) {
        if (!vG) return void t[D_](this._kz, 0, 0, s, h);
        var n = i * s / this[Na],
          e = i * h / this.height;
        t[io](1 / n, 1 / e), t[D_](this._kz, 0, 0, s * n, h * e)
      }
    },
    _jb: null,
    _gb: function (t, i, n) {
      if (this._ma == tY && this._li.cacheable === !1) return null;
      if (this._ma == KH || (t *= Math.max(i, n)) <= 1) return this[Dx] || (this._defaultCache = this._ge(this._j1 || this._kz, 1)), this[Dx];
      var e = this._jb.maxScale || 0;
      if (t = Math.ceil(t), e >= t) {
        for (var s = t, h = this._jb[s]; !h && ++s <= e;) h = this._jb[s];
        if (h) return h
      }
      t % 2 && t++;
      var r = this[Na] * t,
        a = this[Ba] * t;
      if (r * a > TG[Nx]) return null;
      var o = Pi(r, a);
      return (this.x || this.y) && o.g[to](-this.x * t, -this.y * t), this._iz(o.g, 1, t, t, r, a), this._ge(o, t)
    },
    _ge: function (t, i) {
      var n = new TY(t, i);
      return this._jb[i] = n, this._jb.maxScale = i, n
    },
    hitTest: function (t, i, n) {
      if (this._ma == iY) return this._li[Qu][sr](this._li, arguments);
      if (!(this._pixels || this._kz && this._kz[yx])) return !0;
      var e = this[yx] || this._kz._pixels;
      return e._hx(t, i, n)
    },
    _dt: function () {
      this[vx] && this._dispatcher[dr](new HG(this, Bx, $x, this._kz))
    },
    _n77: function (t, i) {
      this[vx] && this[vx][dd](t, i)
    },
    _5y: function (t, i) {
      this[vx] && this[vx].removeListener(t, i)
    },
    _n9b: function (t) {
      this._jb = {}, (t || this[Na] * this.height > 1e5) && (this._kz = null, this._j1 = null)
    }
  }, E(gn, PG);
  var hY = {};
  $H[D_] = En, $H[Fx] = yn, $H.hasImage = pn, $H.getAllImages = function () {
    var t = [];
    for (var i in hY) t[ir](i);
    return t
  };
  var rY = function (t, i, n, e, s, h) {
    this[To] = t, this.colors = i, this[zx] = n, this.angle = e || 0, this.tx = s || 0, this.ty = h || 0
  };
  FH.GRADIENT_TYPE_RADIAL = _l, FH[Gx] = cl, rY[hr] = {
    type: null,
    colors: null,
    positions: null,
    angle: null,
    tx: 0,
    ty: 0,
    position: CG[xl],
    isEmpty: function () {
      return null == this[Hx] || 0 == this[Hx].length
    },
    _63: function () {
      var t = this[Hx].length;
      if (1 == t) return [0];
      for (var i = [], n = 1 / (t - 1), e = 0; t > e; e++) i[ir](n * e);
      return this[zx] || (this.positions = i), i
    },
    generatorGradient: function (t) {
      if (null == this.colors || 0 == this[Hx][Wh]) return null;
      var i, n = Li();
      if (this[To] == FH.GRADIENT_TYPE_LINEAR) {
        var e = this[Vu];
        e > Math.PI && (e -= Math.PI);
        var s;
        if (e <= Math.PI / 2) {
          var h = Math[Ur](t[Ba], t.width),
            r = Math.sqrt(t[Na] * t[Na] + t[Ba] * t[Ba]),
            a = h - e;
          s = Math.cos(a) * r
        } else {
          var h = Math.atan2(t.width, t[Ba]),
            r = Math.sqrt(t.width * t[Na] + t.height * t[Ba]),
            a = h - (e - Math.PI / 2);
          s = Math.cos(a) * r
        }
        var o = s / 2,
          f = o * Math.cos(e),
          c = o * Math.sin(e),
          u = t.x + t.width / 2 - f,
          _ = t.y + t[Ba] / 2 - c,
          d = t.x + t[Na] / 2 + f,
          l = t.y + t.height / 2 + c;
        i = n[Yx](u, _, d, l)
      } else {
        if (!(this.type = FH[qx])) return null;
        var v = fi(this[Af], t[Na], t[Ba]);
        v.x += t.x, v.y += t.y, this.tx && (v.x += Math.abs(this.tx) < 1 ? t[Na] * this.tx : this.tx), this.ty && (v.y += Math.abs(this.ty) < 1 ? t.height * this.ty : this.ty);
        var b = SG(v.x, v.y, t.x, t.y);
        b = Math.max(b, SG(v.x, v.y, t.x, t.y + t.height)), b = Math.max(b, SG(v.x, v.y, t.x + t[Na], t.y + t.height)), b = Math.max(b, SG(v.x, v.y, t.x + t.width, t.y)), i = n.createRadialGradient(v.x, v.y, 0, v.x, v.y, b)
      }
      var g = this.colors,
        y = this.positions;
      y && y[Wh] == g.length || (y = this._63());
      for (var x = 0, p = g[Wh]; p > x; x++) i[Wx](y[x], g[x]);
      return i
    }
  };
  var aY = new rY(FH[Gx], [X(2332033023), X(1154272460), X(1154272460), X(1442840575)], [.1, .3, .7, .9], Math.PI / 2),
    oY = new rY(FH.GRADIENT_TYPE_LINEAR, [X(2332033023), X(1154272460), X(1154272460), X(1442840575)], [.1, .3, .7, .9], 0),
    fY = (new rY(FH[Gx], [X(1154272460), X(1442840575)], [.1, .9], 0), new rY(FH.GRADIENT_TYPE_RADIAL, [X(2298478591), X(1156509422), X(1720223880), X(1147561574)], [.1, .3, .7, .9], 0, -.3, -.3)),
    cY = [X(0), X(4294901760), X(4294967040), X(4278255360), X(4278250239), X(4278190992), X(4294901958), X(0)],
    uY = [0, .12, .28, .45, .6, .75, .8, 1],
    _Y = new rY(FH.GRADIENT_TYPE_LINEAR, cY, uY),
    dY = new rY(FH[Gx], cY, uY, Math.PI / 2),
    lY = new rY(FH[qx], cY, uY);
  rY[Ux] = aY, rY[Vx] = oY, rY[Xx] = fY, rY[Zx] = _Y, rY.RAINBOW_LINEAR_GRADIENT_VERTICAL = dY, rY.RAINBOW_RADIAL_GRADIENT = lY;
  var vY = dl,
    bY = cl,
    gY = Kx,
    yY = ul,
    xY = Jx,
    pY = Qx;
  FH[tp] = vY, FH.SEGMENT_LINE_TO = bY, FH[ip] = gY, FH[np] = yY, FH[ep] = xY, FH[sp] = pY;
  var mY = function (t, i) {
    this.id = ++aG, $(t) ? this[Ta] = t : (this.type = t, this[Ta] = i)
  };
  mY[hr] = {
    toJSON: function () {
      var t = {
        type: this[To],
        points: this[Ta]
      };
      return this[Yo] && (t[Yo] = !0), t
    },
    parseJSON: function (t) {
      this[To] = t.type, this[Ta] = t[Ta], this[Yo] = t[Yo]
    },
    points: null,
    type: bY,
    clone: function () {
      return new mY(this[To], this.points ? g(this[Ta]) : null)
    },
    move: function (t, i) {
      if (this[Ta])
        for (var n = 0, e = this[Ta][Wh]; e > n; n++) {
          var s = this.points[n];
          $H[hp](s) && (this[Ta][n] += n % 2 == 0 ? t : i)
        }
    }
  }, K(mY[hr], {
    lastPoint: {
      get: function () {
        return this[To] == xY ? {
          x: this._p2x,
          y: this[Mo]
        } : {
          x: this[Ta][this.points.length - 2],
          y: this[Ta][this[Ta].length - 1]
        }
      }
    },
    firstPoint: {
      get: function () {
        return {
          x: this[Ta][0],
          y: this.points[1]
        }
      }
    }
  }), $H.PathSegment = mY;
  var EY = 0,
    wY = function (t) {
      this[Mf] = new PG, this._gg = t || []
    };
  wY[hr] = {
    toJSON: function () {
      var t = [];
      return this._gg[Vf](function (i) {
        t[ir](i[rp]())
      }), t
    },
    parseJSON: function (t) {
      var i = this._gg;
      t[Vf](function (t) {
        i[ir](new mY(t[To], t[Ta]))
      })
    },
    clear: function () {
      this._gg[Wh] = 0, this[Mf].clear(), this._j2 = 0, this._62 = !0
    },
    _di: !0,
    _6d: function (t, i) {
      this._di && 0 === this._gg[Wh] && t != vY && this._gg[ir](new mY(vY, [0, 0])), this._gg.push(new mY(t, i)), this._62 = !0
    },
    add: function (t, i) {
      y(this._gg, t, i), this._62 = !0
    },
    removePathSegment: function (t) {
      return t >= this._gg[Wh] ? !1 : (this._gg[Zh](t, 1), void(this._62 = !0))
    },
    moveTo: function (t, i) {
      this._6d(vY, [t, i])
    },
    lineTo: function (t, i) {
      this._6d(bY, [t, i])
    },
    quadTo: function (t, i, n, e) {
      this._6d(gY, [t, i, n, e])
    },
    curveTo: function (t, i, n, e, s, h) {
      this._6d(yY, [t, i, n, e, s, h])
    },
    arcTo: function (t, i, n, e, s) {
      this._6d(xY, [t, i, n, e, s])
    },
    closePath: function () {
      this._6d(pY)
    },
    _7n: function (t, i, n, e, s) {
      if (e[ap]) {
        if (n == FH.SELECTION_TYPE_SHADOW) {
          if (!e[op]) return;
          return t[P_] = e.selectionColor, t[jx] = e.selectionShadowBlur * i, t[Ax] = (e[fp] || 0) * i, void(t.shadowOffsetY = (e[cp] || 0) * i)
        }
        if (n == FH[up]) {
          if (!e[_p]) return;
          t[j_] = e[ap];
          var h = s.lineWidth || 0;
          s[dp] && (h += 2 * s[dp]), t[O_] = e.selectionBorder + h, this._ll(t), t[C_]()
        }
      }
    },
    _62: !0,
    _gg: null,
    _j2: 0,
    lineCap: Ky,
    lineJoin: xo,
    draw: function (t, i, n, e, s) {
      t[I_] = n[I_] || this.lineCap, t[S_] = n[S_] || this.lineJoin, e && (s || (s = n), this._7n(t, i, s[lp], s, n));
      var h = e && s[lp] == FH[sx];
      n.outlineStyle && (this._ll(t), t[O_] = n.lineWidth + 2 * (n.outline || 0), t[j_] = n[vp], t[C_](), h && (h = !1, t[P_] = bp)), t[O_] = 0, this._ll(t), n[gp] && (t[wx] = n[Rx] || n.fillColor, t[kx]()), n[yp] && (t.fillStyle = n[xp] || n[yp], t[kx]()), n[O_] && (t[O_] = n[O_], n[Df] && (n.lineFillColor && (t[j_] = n[pp], t.stroke(), h && (t[P_] = bp)), t.lineCap = n[mp] || t[I_], t.lineJoin = n[Ep] || t[S_], t[Df] = n[Df], t.lineDashOffset = n[Ff]), t[j_] = n[Rx] || n[j_], t[C_](), t[Df] = [])
    },
    _ll: function (t) {
      t.beginPath();
      for (var i, n, e = 0, s = this._gg.length; s > e; e++) i = this._gg[e], UH._ll(t, i, n), n = i
    },
    invalidate: function () {
      this._62 = !0
    },
    validate: function () {
      if (this._62 = !1, this[Mf][$a](), this._j2 = 0, 0 != this._gg[Wh])
        for (var t, i, n = this._gg, e = 1, s = n[0], h = s, r = n[Wh]; r > e; e++) t = n[e], t[To] == vY ? h = t : (UH._5o(this[Mf], t, s, h), i = UH._5n(t, s, h), t._j2 = i, this._j2 += i), s = t
    },
    getBounds: function (t, i) {
      if (this._62 && this[bo](), i = i || new PG, t) {
        var n = t / 2;
        i.set(this.bounds.x - n, this[Mf].y - n, this.bounds[Na] + t, this.bounds[Ba] + t)
      } else i.set(this[Mf].x, this[Mf].y, this[Mf].width, this[Mf][Ba]);
      return i
    },
    hitTest: function (t, i, n, e, s, h) {
      return on[Uh](this, t, i, n, e, s, h)
    },
    toSegments: function () {
      return [][Kh](this._gg)
    },
    generator: function (t, i, n, e, s) {
      return an[Uh](this, t, i, n, e, s)
    },
    getLocation: function (t, i) {
      return fn[Uh](this, t, i || 0)
    }
  }, K(wY[hr], {
    segments: {
      get: function () {
        return this._gg
      },
      set: function (t) {
        this[$a](), this._gg = t
      }
    },
    length: {
      get: function () {
        return this._62 && this[bo](), this._j2
      }
    },
    _empty: {
      get: function () {
        return 0 == this._gg[Wh]
      }
    }
  }), kn[hr] = {
    _14: function (t, i) {
      var n, e, s, h, r, a = t[Wh],
        o = 0,
        f = 0;
      for (r = 0; a > r; r += 4)
        if (t[r + 3] > 0) {
          n = (r + 4) / i / 4 | 0;
          break
        }
      for (r = a - 4; r >= 0; r -= 4)
        if (t[r + 3] > 0) {
          e = (r + 4) / i / 4 | 0;
          break
        }
      for (o = 0; i > o; o++) {
        for (f = n; e > f; f++)
          if (t[f * i * 4 + 4 * o + 3] > 0) {
            s = o;
            break
          }
        if (s >= 0) break
      }
      for (o = i - 1; o >= 0; o--) {
        for (f = n; e > f; f++)
          if (t[f * i * 4 + 4 * o + 3] > 0) {
            h = o;
            break
          }
        if (h >= 0) break
      }
      this._x = s, this._y = n, this[px] = h - s + 1, this[mx] = e - n + 1, this._jg = new PG(s, n, this[px], this[mx]), this._pixelSize = this[px] * this._height, this._originalPixelsWidth = i, this[wp] = t
    },
    _dr: function (t, i) {
      return this[wp][4 * (t + this._x + (this._y + i) * this._originalPixelsWidth) + 3]
    },
    _hx: function (t, i, n) {
      (!n || 1 >= n) && (n = 1), n = 0 | n, t = Math.round(t - this._x) - n, i = Math[xo](i - this._y) - n, n += n;
      for (var e = t, s = i; i + n > s;) {
        for (var e = t; t + n > e;) {
          if (this._dr(e, s)) return !0;
          ++e
        }++s
      }
      return !1
    }
  }, FH.BLEND_MODE_DARKEN = Tp, FH[Wo] = kp, FH[Vo] = Mp, FH[Xo] = Op, FH[Zo] = Ip, FH.BLEND_MODE_SCREEN = Sp, FH[tf] = jp, TG[Ap] = FH.BLEND_MODE_LINEAR_BURN;
  var TY = function (t, i, n) {
    this._j1 = t, this.scale = i || 1, t instanceof Image && (n = !1), this._i1 = n
  };
  TY.prototype = {
    scale: 1,
    _j1: null,
    _jb: null,
    _i1: !0,
    _ll: function (t, i, n) {
      if (!i || this._i1 === !1) return void t[D_](this._j1, 0, 0);
      this._jb || (this._jb = {});
      var e = i + n,
        s = this._jb[e];
      if (s || (s = Sn(this._j1, i, n), s || (this._i1 = !1), this._jb[e] = s || this._j1), s)
        if (cG) try {
          t.drawImage(s, 0, 0)
        } catch (h) {} else t[D_](s, 0, 0)
    }
  };
  var kY = function (t, i, n, e, s, h, r, a, o) {
      this._md = Ln(t, i, n, e, s, h, r, a, o)
    },
    MY = {
      server: {
        draw: function (t) {
          t[Ex](), t.translate(0, 0), t[Pp](), t[Dc](0, 0), t.lineTo(40, 0), t[Nc](40, 40), t[Nc](0, 40), t[hf](), t[Mx](), t[to](0, 0), t[to](0, 0), t[io](1, 1), t.translate(0, 0), t[j_] = bp, t[I_] = Ky, t.lineJoin = nx, t.miterLimit = 4, t[Ex](), t[Ex](), t.restore(), t[Ex](), t[oo](), t[Ex](), t.restore(), t[Ex](), t[oo](), t.save(), t[oo](), t[Ex](), t[oo](), t[Ex](), t[oo](), t[Ex](), t[oo](), t[Ex](), t[oo](), t[Ex](), t[oo](), t[Ex](), t.restore(), t[Ex](), t[oo](), t[Ex](), t.restore(), t[oo](), t[Ex]();
          var i = t[Yx](6.75, 3.9033, 30.5914, 27.7447);
          i.addColorStop(.0493, Lp), i[Wx](.0689, Cp), i[Wx](.0939, Rp), i.addColorStop(.129, Dp), i.addColorStop(.2266, Np), i.addColorStop(.2556, Bp), i.addColorStop(.2869, $p), i.addColorStop(.3194, Fp), i.addColorStop(.3525, zp), i[Wx](.3695, Gp), i[Wx](.5025, Hp), i[Wx](.9212, Yp), i[Wx](1, qp), t[wx] = i, t.beginPath(), t[Dc](25.677, 4.113), t[ux](25.361, 2.4410000000000007, 23.364, 2.7940000000000005, 22.14, 2.7990000000000004), t[ux](19.261, 2.813, 16.381, 2.8260000000000005, 13.502, 2.8400000000000003), t.bezierCurveTo(12.185, 2.846, 10.699000000000002, 2.652, 9.393, 2.8790000000000004), t[ux](9.19, 2.897, 8.977, 2.989, 8.805, 3.094), t[ux](8.084999999999999, 3.5109999999999997, 7.436999999999999, 4.1259999999999994, 6.776, 4.63), t[ux](5.718999999999999, 5.436, 4.641, 6.22, 3.6029999999999998, 7.05), t[ux](4.207, 6.5889999999999995, 21.601999999999997, 36.579, 21.028, 37.307), t[ux](22.019, 36.063, 23.009999999999998, 34.819, 24.000999999999998, 33.575), t[ux](24.587999999999997, 32.84, 25.589999999999996, 31.995000000000005, 25.593999999999998, 30.983000000000004), t.bezierCurveTo(25.595999999999997, 30.489000000000004, 25.598, 29.994000000000003, 25.601, 29.500000000000004), t[ux](25.612, 26.950000000000003, 25.622, 24.400000000000006, 25.633, 21.85), t.bezierCurveTo(25.657, 16.318, 25.680999999999997, 10.786000000000001, 25.704, 5.253), t[ux](25.706, 4.885, 25.749, 4.478, 25.677, 4.113), t[ux](25.67, 4.077, 25.697, 4.217, 25.677, 4.113), t.closePath(), t[kx](), t[C_](), t[oo](), t[Ex](), t[Ex](), t[wx] = Wp, t.beginPath(), t[Dc](19.763, 6.645), t.bezierCurveTo(20.002000000000002, 6.643999999999999, 20.23, 6.691999999999999, 20.437, 6.778), t[ux](20.644000000000002, 6.864999999999999, 20.830000000000002, 6.991, 20.985, 7.146999999999999), t[ux](21.14, 7.302999999999999, 21.266, 7.488999999999999, 21.352999999999998, 7.696999999999999), t[ux](21.438999999999997, 7.903999999999999, 21.487, 8.133, 21.487, 8.372), t.lineTo(21.398, 36.253), t[ux](21.397, 36.489, 21.349, 36.713, 21.262, 36.917), t[ux](21.174, 37.121, 21.048000000000002, 37.305, 20.893, 37.458), t[ux](20.738, 37.611, 20.553, 37.734, 20.348, 37.818999999999996), t[ux](20.141, 37.903999999999996, 19.916, 37.95099999999999, 19.679, 37.949), t[Nc](4.675, 37.877), t[ux](4.4399999999999995, 37.876000000000005, 4.216, 37.827000000000005, 4.012, 37.741), t[ux](3.8089999999999997, 37.653999999999996, 3.6249999999999996, 37.528999999999996, 3.4719999999999995, 37.376), t[ux](3.3179999999999996, 37.221, 3.1939999999999995, 37.037, 3.1079999999999997, 36.833999999999996), t[ux](3.022, 36.629999999999995, 2.9739999999999998, 36.406, 2.9739999999999998, 36.172), t.lineTo(2.924, 8.431), t[ux](2.923, 8.192, 2.971, 7.964, 3.057, 7.758), t[ux](3.143, 7.552, 3.267, 7.365, 3.4219999999999997, 7.209), t.bezierCurveTo(3.5769999999999995, 7.052999999999999, 3.76, 6.925, 3.965, 6.837), t[ux](4.17, 6.749, 4.396, 6.701, 4.633, 6.7), t[Nc](19.763, 6.645), t[hf](), t[kx](), t[C_](), t.restore(), t.restore(), t[Ex](), t[wx] = Up, t[Pp](), t.arc(12.208, 26.543, 2.208, 0, 6.283185307179586, !0), t[hf](), t.fill(), t[C_](), t[oo](), t[Ex](), t.fillStyle = Wp, t.beginPath(), t.arc(12.208, 26.543, 1.876, 0, 6.283185307179586, !0), t[hf](), t[kx](), t[C_](), t[oo](), t[Ex](), t[wx] = Up, t.beginPath(), t[Dc](19.377, 17.247), t.bezierCurveTo(19.377, 17.724, 18.991999999999997, 18.108999999999998, 18.516, 18.108999999999998), t[Nc](5.882, 18.108999999999998), t[ux](5.404999999999999, 18.108999999999998, 5.02, 17.723, 5.02, 17.247), t[Nc](5.02, 11.144), t[ux](5.02, 10.666, 5.406, 10.281, 5.882, 10.281), t[Nc](18.516, 10.281), t[ux](18.993, 10.281, 19.377, 10.666, 19.377, 11.144), t[Nc](19.377, 17.247), t[hf](), t[kx](), t[C_](), t[oo](), t.save(), t[Ex](), t.fillStyle = Wp, t[Pp](), t.moveTo(18.536, 13.176), t.bezierCurveTo(18.536, 13.518, 18.261000000000003, 13.794, 17.919, 13.794), t[Nc](6.479, 13.794), t[ux](6.1370000000000005, 13.794, 5.861, 13.518, 5.861, 13.176), t[Nc](5.861, 11.84), t[ux](5.861, 11.498, 6.137, 11.221, 6.479, 11.221), t.lineTo(17.918, 11.221), t[ux](18.259999999999998, 11.221, 18.535, 11.497, 18.535, 11.84), t[Nc](18.535, 13.176), t[hf](), t.fill(), t.stroke(), t[oo](), t.save(), t[wx] = Wp, t[Pp](), t[Dc](18.536, 16.551), t[ux](18.536, 16.892999999999997, 18.261000000000003, 17.168999999999997, 17.919, 17.168999999999997), t[Nc](6.479, 17.168999999999997), t.bezierCurveTo(6.1370000000000005, 17.168999999999997, 5.861, 16.892999999999997, 5.861, 16.551), t[Nc](5.861, 15.215999999999998), t[ux](5.861, 14.872999999999998, 6.137, 14.596999999999998, 6.479, 14.596999999999998), t[Nc](17.918, 14.596999999999998), t[ux](18.259999999999998, 14.596999999999998, 18.535, 14.872999999999998, 18.535, 15.215999999999998), t[Nc](18.535, 16.551), t[hf](), t[kx](), t[C_](), t.restore(), t.restore(), t.restore()
        }
      },
      exchanger2: {
        draw: function (t) {
          t.save(), t[to](0, 0), t[Pp](), t[Dc](0, 0), t[Nc](40, 0), t[Nc](40, 40), t[Nc](0, 40), t[hf](), t[Mx](), t[to](0, 0), t.translate(0, 0), t.scale(1, 1), t[to](0, 0), t[j_] = bp, t[I_] = Ky, t[S_] = nx, t[Vp] = 4, t.save(), t[Ex](), t.restore(), t[Ex](), t[oo](), t[Ex](), t[oo](), t[Ex](), t[oo](), t.save(), t[oo](), t[Ex](), t.restore(), t[Ex](), t[oo](), t[Ex](), t[oo](), t[Ex](), t.restore(), t.save(), t.restore(), t[oo](), t[Ex]();
          var i = t.createLinearGradient(.4102, 24.3613, 39.5898, 24.3613);
          i[Wx](0, Lp), i.addColorStop(.0788, Np), i[Wx](.2046, Xp), i[Wx](.3649, Zp), i.addColorStop(.5432, Kp), i.addColorStop(.6798, Jp), i.addColorStop(.7462, Qp), i.addColorStop(.8508, tm), i[Wx](.98, Bp), i[Wx](1, im), t.fillStyle = i, t.beginPath(), t.moveTo(.41, 16.649), t.bezierCurveTo(.633, 19.767, .871, 20.689, 1.094, 23.807000000000002), t.bezierCurveTo(1.29, 26.548000000000002, 3.324, 28.415000000000003, 5.807, 29.711000000000002), t[ux](10.582, 32.202000000000005, 16.477, 32.806000000000004, 21.875999999999998, 32.523), t[ux](26.929, 32.258, 32.806, 31.197000000000003, 36.709999999999994, 27.992000000000004), t[ux](38.30499999999999, 26.728000000000005, 38.83599999999999, 25.103000000000005, 38.998999999999995, 23.161000000000005), t[ux](39.589, 16.135000000000005, 39.589, 16.135000000000005, 39.589, 16.135000000000005), t[ux](39.589, 16.135000000000005, 3.26, 16.647, .41, 16.649), t[hf](), t[kx](), t[C_](), t[oo](), t[Ex](), t.save(), t[wx] = Wp, t.beginPath(), t[Dc](16.4, 25.185), t[ux](12.807999999999998, 24.924999999999997, 9.139, 24.238, 5.857999999999999, 22.705), t[ux](3.175999999999999, 21.450999999999997, -.32200000000000095, 18.971999999999998, .544999999999999, 15.533999999999999), t.bezierCurveTo(1.3499999999999992, 12.335999999999999, 4.987999999999999, 10.495999999999999, 7.807999999999999, 9.428999999999998), t.bezierCurveTo(11.230999999999998, 8.133999999999999, 14.911999999999999, 7.519999999999999, 18.558, 7.345999999999998), t[ux](22.233, 7.169999999999998, 25.966, 7.437999999999998, 29.548000000000002, 8.300999999999998), t[ux](32.673, 9.052999999999999, 36.192, 10.296, 38.343, 12.814999999999998), t[ux](40.86600000000001, 15.768999999999998, 39.208000000000006, 19.066999999999997, 36.406000000000006, 21.043999999999997), t[ux](33.566, 23.046999999999997, 30.055000000000007, 24.071999999999996, 26.670000000000005, 24.676999999999996), t[ux](23.289, 25.28, 19.824, 25.436, 16.4, 25.185), t.bezierCurveTo(13.529, 24.977, 19.286, 25.396, 16.4, 25.185), t[hf](), t[kx](), t.stroke(), t[oo](), t[oo](), t[Ex](), t[Ex](), t.save(), t.save(), t[Ex](), t[wx] = nm, t[Pp](), t.moveTo(5.21, 21.754), t[Nc](8.188, 17.922), t.lineTo(9.53, 18.75), t.lineTo(15.956, 16.004), t[Nc](18.547, 17.523), t[Nc](12.074, 20.334), t[Nc](13.464, 21.204), t.lineTo(5.21, 21.754), t[hf](), t.fill(), t.stroke(), t.restore(), t[oo](), t[oo](), t.save(), t.save(), t[Ex](), t[wx] = nm, t[Pp](), t.moveTo(17.88, 14.61), t[Nc](9.85, 13.522), t[Nc](11.703, 12.757), t[Nc](7.436, 10.285), t[Nc](10.783, 8.942), t[Nc](15.091, 11.357), t[Nc](16.88, 10.614), t[Nc](17.88, 14.61), t.closePath(), t[kx](), t.stroke(), t[oo](), t[oo](), t[Ex](), t[Ex](), t[wx] = nm, t[Pp](), t.moveTo(17.88, 14.61), t[Nc](9.85, 13.522), t.lineTo(11.703, 12.757), t[Nc](7.436, 10.285), t[Nc](10.783, 8.942), t[Nc](15.091, 11.357), t[Nc](16.88, 10.614), t[Nc](17.88, 14.61), t[hf](), t[kx](), t[C_](), t.restore(), t.restore(), t.restore(), t[Ex](), t[Ex](), t.save(), t[wx] = nm, t.beginPath(), t[Dc](23.556, 15.339), t[Nc](20.93, 13.879), t[Nc](26.953, 11.304), t.lineTo(25.559, 10.567), t[Nc](33.251, 9.909), t.lineTo(31.087, 13.467), t[Nc](29.619, 12.703), t[Nc](23.556, 15.339), t[hf](), t.fill(), t[C_](), t.restore(), t.restore(), t[oo](), t[Ex](), t[Ex](), t[Ex](), t[wx] = nm, t[Pp](), t.moveTo(30.028, 23.383), t.lineTo(24.821, 20.366), t[Nc](22.915, 21.227), t[Nc](21.669, 16.762), t.lineTo(30.189, 17.942), t.lineTo(28.33, 18.782), t.lineTo(33.579, 21.725), t[Nc](30.028, 23.383), t.closePath(), t[kx](), t.stroke(), t.restore(), t[oo](), t[Ex](), t[Ex](), t.fillStyle = nm, t[Pp](), t[Dc](30.028, 23.383), t[Nc](24.821, 20.366), t[Nc](22.915, 21.227), t[Nc](21.669, 16.762), t[Nc](30.189, 17.942), t.lineTo(28.33, 18.782), t[Nc](33.579, 21.725), t[Nc](30.028, 23.383), t[hf](), t[kx](), t.stroke(), t.restore(), t[oo](), t[oo](), t[oo](), t.restore(), t[oo]()
        }
      },
      exchanger: {
        draw: function (t) {
          t[Ex](), t[to](0, 0), t[Pp](), t.moveTo(0, 0), t[Nc](40, 0), t[Nc](40, 40), t[Nc](0, 40), t[hf](), t[Mx](), t[to](0, 0), t[to](0, 0), t[io](1, 1), t.translate(0, 0), t[j_] = bp, t[I_] = Ky, t[S_] = nx, t.miterLimit = 4, t[Ex](), t[Ex](), t[oo](), t[Ex](), t.restore(), t[Ex](), t[oo](), t[Ex](), t.restore(), t[Ex](), t[oo](), t.save(), t[oo](), t[Ex](), t[oo](), t[oo](), t[Ex]();
          var i = t[Yx](.2095, 20.7588, 39.4941, 20.7588);
          i[Wx](0, em), i[Wx](.0788, sm), i[Wx](.352, hm), i[Wx](.6967, rm), i[Wx](.8916, am), i[Wx](.9557, om), i[Wx](1, fm), t.fillStyle = i, t[Pp](), t[Dc](39.449, 12.417), t.lineTo(39.384, 9.424), t.bezierCurveTo(39.384, 9.424, .7980000000000018, 22.264, .3710000000000022, 23.024), t[ux](-.026999999999997804, 23.733, .4240000000000022, 24.903000000000002, .5190000000000022, 25.647000000000002), t[ux](.7240000000000022, 27.244000000000003, .9240000000000023, 28.841, 1.1350000000000022, 30.437), t[ux](1.3220000000000023, 31.843, 2.7530000000000023, 32.094, 3.9620000000000024, 32.094), t.bezierCurveTo(8.799000000000003, 32.092, 13.636000000000003, 32.091, 18.473000000000003, 32.089), t[ux](23.515, 32.086999999999996, 28.556000000000004, 32.086, 33.598, 32.083999999999996), t.bezierCurveTo(34.859, 32.083999999999996, 36.286, 31.979999999999997, 37.266, 31.081999999999997), t[ux](37.537, 30.820999999999998, 37.655, 30.535999999999998, 37.699999999999996, 30.229999999999997), t.lineTo(37.711, 30.316999999999997), t[Nc](39.281, 16.498999999999995), t[ux](39.281, 16.498999999999995, 39.467999999999996, 15.126999999999995, 39.489, 14.666999999999994), t.bezierCurveTo(39.515, 14.105, 39.449, 12.417, 39.449, 12.417), t[hf](), t[kx](), t.stroke(), t[oo](), t[Ex](), t.save(), t.save(), t[Ex](), t.restore(), t[Ex](), t[oo](), t[Ex](), t[oo](), t[Ex](), t.restore(), t[Ex](), t[oo](), t[Ex](), t[oo](), t[Ex](), t[oo](), t[Ex](), t.restore(), t.save(), t.restore(), t[oo](), t.save();
          var i = t.createLinearGradient(19.8052, 7.7949, 19.8052, 24.7632);
          i.addColorStop(0, cm), i[Wx](.1455, um), i[Wx](.2975, _m), i[Wx](.4527, dm), i[Wx](.6099, lm), i[Wx](.7687, vm), i[Wx](.9268, bm), i.addColorStop(.9754, gm), i[Wx](1, ym), t.fillStyle = i, t[Pp](), t.moveTo(33.591, 24.763), t[ux](23.868000000000002, 24.754, 14.145, 24.746000000000002, 4.423000000000002, 24.738000000000003), t.bezierCurveTo(3.140000000000002, 24.737000000000002, -.48799999999999777, 24.838000000000005, .3520000000000021, 22.837000000000003), t.bezierCurveTo(1.292000000000002, 20.594000000000005, 2.2330000000000023, 18.351000000000003, 3.1730000000000023, 16.108000000000004), t[ux](4.113000000000002, 13.865000000000006, 5.054000000000002, 11.623000000000005, 5.994000000000002, 9.380000000000004), t[ux](6.728000000000002, 7.629000000000005, 9.521000000000003, 7.885000000000004, 11.156000000000002, 7.880000000000004), t.bezierCurveTo(16.974000000000004, 7.861000000000004, 22.793000000000003, 7.843000000000004, 28.612000000000002, 7.825000000000005), t[ux](30.976000000000003, 7.818000000000005, 33.341, 7.810000000000005, 35.707, 7.803000000000004), t[ux](36.157000000000004, 7.802000000000004, 36.609, 7.787000000000004, 37.06, 7.804000000000005), t[ux](37.793, 7.833000000000005, 39.389, 7.875000000000004, 39.385000000000005, 9.424000000000005), t[ux](39.38400000000001, 9.647000000000006, 39.31, 10.138000000000005, 39.27700000000001, 10.359000000000005), t[ux](38.81900000000001, 13.361000000000004, 38.452000000000005, 15.764000000000006, 37.99400000000001, 18.766000000000005), t.bezierCurveTo(37.806000000000004, 19.998000000000005, 37.61800000000001, 21.230000000000004, 37.43000000000001, 22.462000000000007), t[ux](37.151, 24.271, 35.264, 24.77, 33.591, 24.763), t[hf](), t.fill(), t[C_](), t[oo](), t[oo](), t[oo](), t[Ex](), t[Ex](), t[Ex](), t[wx] = nm, t.beginPath(), t[Dc](10.427, 19.292), t.lineTo(5.735, 16.452), t[Nc](12.58, 13.8), t[Nc](12.045, 15.07), t[Nc](20.482, 15.072), t[Nc](19.667, 17.887), t[Nc](11.029, 17.851), t[Nc](10.427, 19.292), t[hf](), t.fill(), t[C_](), t.restore(), t[oo](), t[Ex](), t[Ex](), t[wx] = nm, t[Pp](), t[Dc](13.041, 13.042), t.lineTo(8.641, 10.73), t[Nc](14.82, 8.474), t[Nc](14.373, 9.537), t[Nc](22.102, 9.479), t.lineTo(21.425, 11.816), t[Nc](13.54, 11.85), t.lineTo(13.041, 13.042), t[hf](), t[kx](), t.stroke(), t.restore(), t.restore(), t.save(), t[Ex](), t[wx] = nm, t.beginPath(), t[Dc](29.787, 16.049), t[Nc](29.979, 14.704), t[Nc](21.51, 14.706), t[Nc](22.214, 12.147), t[Nc](30.486, 12.116), t.lineTo(30.653, 10.926), t[Nc](36.141, 13.4), t.lineTo(29.787, 16.049), t[hf](), t[kx](), t[C_](), t.restore(), t[oo](), t.save(), t.save(), t.fillStyle = nm, t[Pp](), t[Dc](28.775, 23.14), t[Nc](29.011, 21.49), t[Nc](19.668, 21.405), t[Nc](20.523, 18.295), t[Nc](29.613, 18.338), t[Nc](29.815, 16.898), t.lineTo(35.832, 19.964), t[Nc](28.775, 23.14), t[hf](), t.fill(), t[C_](), t.restore(), t.restore(), t[oo](), t[oo]()
        }
      },
      cloud: {
        draw: function (t) {
          t[Ex](), t[Pp](), t[Dc](0, 0), t[Nc](90.75, 0), t.lineTo(90.75, 62.125), t[Nc](0, 62.125), t.closePath(), t[Mx](), t[j_] = bp, t[I_] = Ky, t[S_] = nx, t[Vp] = 4, t[Ex]();
          var i = t[Yx](44.0054, 6.4116, 44.0054, 51.3674);
          i.addColorStop(0, "rgba(159, 160, 160, 0.7)"), i.addColorStop(.9726, xm), t.fillStyle = i, t.beginPath(), t[Dc](57.07, 20.354), t.bezierCurveTo(57.037, 20.354, 57.006, 20.358, 56.974000000000004, 20.358), t.bezierCurveTo(54.461000000000006, 14.308, 48.499, 10.049000000000001, 41.538000000000004, 10.049000000000001), t[ux](33.801, 10.049000000000001, 27.309000000000005, 15.316000000000003, 25.408000000000005, 22.456000000000003), t.bezierCurveTo(18.988000000000007, 23.289, 14.025000000000006, 28.765000000000004, 14.025000000000006, 35.413000000000004), t[ux](14.025000000000006, 42.635000000000005, 19.880000000000006, 48.49, 27.102000000000004, 48.49), t[ux](29.321000000000005, 48.49, 31.407000000000004, 47.933, 33.237, 46.961), t.bezierCurveTo(34.980000000000004, 49.327, 37.78, 50.867999999999995, 40.945, 50.867999999999995), t[ux](43.197, 50.867999999999995, 45.261, 50.086, 46.896, 48.785999999999994), t[ux](49.729, 50.78699999999999, 53.244, 51.98799999999999, 57.07, 51.98799999999999), t[ux](66.412, 51.98799999999999, 73.986, 44.90699999999999, 73.986, 36.17099999999999), t[ux](73.986, 27.436, 66.413, 20.354, 57.07, 20.354), t.closePath(), t[kx](), t[C_](), t[oo](), t.restore()
        }
      },
      node: {
        width: 60,
        height: 100,
        draw: function (t) {
          t[Ex](), t[to](0, 0), t.beginPath(), t.moveTo(0, 0), t.lineTo(40, 0), t.lineTo(40, 40), t[Nc](0, 40), t.closePath(), t[Mx](), t[to](0, 0), t[to](0, 0), t[io](1, 1), t[to](0, 0), t[j_] = bp, t.lineCap = Ky, t[S_] = nx, t[Vp] = 4, t.save(), t[wx] = pm, t[Pp](), t[Dc](13.948, 31.075), t[Nc](25.914, 31.075), t.quadraticCurveTo(25.914, 31.075, 25.914, 31.075), t[Nc](25.914, 34.862), t[mm](25.914, 34.862, 25.914, 34.862), t[Nc](13.948, 34.862), t[mm](13.948, 34.862, 13.948, 34.862), t.lineTo(13.948, 31.075), t.quadraticCurveTo(13.948, 31.075, 13.948, 31.075), t.closePath(), t.fill(), t[C_](), t[oo](), t.save(), t.fillStyle = Em, t[Pp](), t[Dc](29.679, 35.972), t[ux](29.679, 36.675000000000004, 29.110999999999997, 37.244, 28.407999999999998, 37.244), t[Nc](11.456, 37.244), t.bezierCurveTo(10.751999999999999, 37.244, 10.183, 36.675, 10.183, 35.972), t[Nc](10.183, 36.136), t[ux](10.183, 35.431000000000004, 10.751999999999999, 34.863, 11.456, 34.863), t[Nc](28.407, 34.863), t[ux](29.11, 34.863, 29.678, 35.431, 29.678, 36.136), t[Nc](29.678, 35.972), t.closePath(), t.fill(), t.stroke(), t.restore(), t[Ex](), t[wx] = Em, t[Pp](), t.moveTo(.196, 29.346), t[ux](.196, 30.301, .9690000000000001, 31.075, 1.925, 31.075), t[Nc](37.936, 31.075), t[ux](38.891, 31.075, 39.665, 30.301, 39.665, 29.346), t[Nc](39.665, 27.174), t[Nc](.196, 27.174), t[Nc](.196, 29.346), t[hf](), t.fill(), t[C_](), t[oo](), t[Ex](), t[wx] = wm, t.beginPath(), t[Dc](37.937, 3.884), t[Nc](1.926, 3.884), t[ux](.97, 3.884, .19699999999999984, 4.657, .19699999999999984, 5.614), t[Nc](.19699999999999984, 27.12), t[Nc](39.666000000000004, 27.12), t[Nc](39.666000000000004, 5.615), t[ux](39.665, 4.657, 38.892, 3.884, 37.937, 3.884), t[hf](), t[kx](), t[C_](), t[oo](), t[Ex](), t.save(), t.restore(), t[Ex](), t[oo](), t.restore(), t.save();
          var i = t.createLinearGradient(6.9609, 2.9341, 32.9008, 28.874);
          i.addColorStop(0, Tm), i[Wx](1, km), t[wx] = i, t[Pp](), t[Dc](35.788, 6.39), t[Nc](4.074, 6.39), t[ux](3.315, 6.39, 2.702, 7.003, 2.702, 7.763), t[Nc](2.702, 24.616), t[Nc](37.159, 24.616), t.lineTo(37.159, 7.763), t[ux](37.159, 7.003, 36.546, 6.39, 35.788, 6.39), t[hf](), t[kx](), t.stroke(), t[oo](), t[oo]()
        }
      },
      group: {
        draw: function (t) {
          t[Ex](), t.translate(0, 0), t.beginPath(), t.moveTo(0, 0), t[Nc](47.75, 0), t[Nc](47.75, 40), t[Nc](0, 40), t.closePath(), t[Mx](), t.translate(0, 0), t[to](0, 0), t.scale(1, 1), t[to](0, 0), t[j_] = bp, t[I_] = Ky, t.lineJoin = nx, t[Vp] = 4, t[Ex](), t[Ex](), t.fillStyle = pm, t[Pp](), t.moveTo(10.447, 26.005), t.lineTo(18.847, 26.005), t[mm](18.847, 26.005, 18.847, 26.005), t.lineTo(18.847, 28.663), t.quadraticCurveTo(18.847, 28.663, 18.847, 28.663), t.lineTo(10.447, 28.663), t.quadraticCurveTo(10.447, 28.663, 10.447, 28.663), t[Nc](10.447, 26.005), t[mm](10.447, 26.005, 10.447, 26.005), t[hf](), t.fill(), t[C_](), t[oo](), t[Ex](), t[wx] = Em, t[Pp](), t.moveTo(21.491, 29.443), t[ux](21.491, 29.935000000000002, 21.094, 30.338, 20.597, 30.338), t[Nc](8.698, 30.338), t.bezierCurveTo(8.201, 30.338, 7.8020000000000005, 29.936, 7.8020000000000005, 29.443), t[Nc](7.8020000000000005, 29.557000000000002), t[ux](7.8020000000000005, 29.063000000000002, 8.201, 28.662000000000003, 8.698, 28.662000000000003), t.lineTo(20.597, 28.662000000000003), t[ux](21.093, 28.662000000000003, 21.491, 29.062, 21.491, 29.557000000000002), t[Nc](21.491, 29.443), t[hf](), t.fill(), t[C_](), t[oo](), t[Ex](), t[wx] = Em, t.beginPath(), t[Dc](.789, 24.79), t.bezierCurveTo(.789, 25.461, 1.334, 26.005, 2.0060000000000002, 26.005), t[Nc](27.289, 26.005), t[ux](27.961000000000002, 26.005, 28.504, 25.461, 28.504, 24.79), t[Nc](28.504, 23.267), t.lineTo(.789, 23.267), t[Nc](.789, 24.79), t[hf](), t[kx](), t[C_](), t[oo](), t[Ex](), t[wx] = wm, t.beginPath(), t[Dc](27.289, 6.912), t.lineTo(2.006, 6.912), t[ux](1.3339999999999996, 6.912, .7889999999999997, 7.455, .7889999999999997, 8.126), t[Nc](.7889999999999997, 23.227), t[Nc](28.503999999999998, 23.227), t[Nc](28.503999999999998, 8.126), t[ux](28.504, 7.455, 27.961, 6.912, 27.289, 6.912), t[hf](), t.fill(), t[C_](), t[oo](), t[Ex](), t[Ex](), t[oo](), t.save(), t[oo](), t[oo](), t.save();
          var i = t[Yx](5.54, 6.2451, 23.7529, 24.458);
          i[Wx](0, Tm), i.addColorStop(1, km), t.fillStyle = i, t[Pp](), t[Dc](25.78, 8.671), t[Nc](3.514, 8.671), t[ux](2.9819999999999998, 8.671, 2.549, 9.101999999999999, 2.549, 9.635), t.lineTo(2.549, 21.466), t[Nc](26.743, 21.466), t[Nc](26.743, 9.636), t[ux](26.743, 9.102, 26.312, 8.671, 25.78, 8.671), t[hf](), t[kx](), t[C_](), t[oo](), t.restore(), t[Ex](), t[Ex](), t.fillStyle = pm, t[Pp](), t[Dc](27.053, 33.602), t[Nc](36.22, 33.602), t[mm](36.22, 33.602, 36.22, 33.602), t[Nc](36.22, 36.501), t[mm](36.22, 36.501, 36.22, 36.501), t[Nc](27.053, 36.501), t[mm](27.053, 36.501, 27.053, 36.501), t[Nc](27.053, 33.602), t[mm](27.053, 33.602, 27.053, 33.602), t.closePath(), t[kx](), t[C_](), t[oo](), t.save(), t[wx] = Em, t[Pp](), t[Dc](39.104, 37.352), t[ux](39.104, 37.891, 38.67, 38.327, 38.13, 38.327), t[Nc](25.143, 38.327), t[ux](24.602, 38.327, 24.166, 37.891, 24.166, 37.352), t[Nc](24.166, 37.477999999999994), t[ux](24.166, 36.937, 24.602, 36.501, 25.143, 36.501), t.lineTo(38.131, 36.501), t[ux](38.671, 36.501, 39.105, 36.937, 39.105, 37.477999999999994), t[Nc](39.105, 37.352), t.closePath(), t.fill(), t[C_](), t[oo](), t[Ex](), t[wx] = Em, t.beginPath(), t[Dc](16.514, 32.275), t[ux](16.514, 33.004999999999995, 17.107, 33.601, 17.839, 33.601), t[Nc](45.433, 33.601), t[ux](46.166, 33.601, 46.758, 33.005, 46.758, 32.275), t[Nc](46.758, 30.607999999999997), t[Nc](16.514, 30.607999999999997), t[Nc](16.514, 32.275), t[hf](), t[kx](), t.stroke(), t[oo](), t[Ex](), t[wx] = wm, t[Pp](), t[Dc](45.433, 12.763), t[Nc](17.839, 12.763), t[ux](17.107, 12.763, 16.514, 13.356, 16.514, 14.089), t[Nc](16.514, 30.57), t[Nc](46.757999999999996, 30.57), t[Nc](46.757999999999996, 14.088), t[ux](46.758, 13.356, 46.166, 12.763, 45.433, 12.763), t[hf](), t[kx](), t[C_](), t.restore(), t.save(), t[Ex](), t[oo](), t[Ex](), t.restore(), t[oo](), t[Ex](), i = t[Yx](21.6973, 12.0352, 41.5743, 31.9122), i.addColorStop(0, Tm), i.addColorStop(1, km), t.fillStyle = i, t[Pp](), t[Dc](43.785, 14.683), t[Nc](19.486, 14.683), t[ux](18.903000000000002, 14.683, 18.433, 15.153, 18.433, 15.735), t.lineTo(18.433, 28.649), t[Nc](44.837, 28.649), t[Nc](44.837, 15.734), t[ux](44.838, 15.153, 44.367, 14.683, 43.785, 14.683), t[hf](), t.fill(), t.stroke(), t.restore(), t[oo](), t[Ex](), t.globalAlpha = .5, t.beginPath(), t[Dc](23.709, 36.33), t[Nc](4.232, 36.33), t[Nc](4.232, 27.199), t[Nc](5.304, 27.199), t[Nc](5.304, 35.259), t.lineTo(23.709, 35.259), t[Nc](23.709, 36.33), t[hf](), t.fill(), t.stroke(), t[oo](), t[oo]()
        }
      },
      subnetwork: {
        draw: function (t) {
          t.save(), t[to](0, 0), t[Pp](), t[Dc](0, 0), t[Nc](60.75, 0), t.lineTo(60.75, 42.125), t[Nc](0, 42.125), t.closePath(), t[Mx](), t[to](0, .26859504132231393), t[io](.6694214876033058, .6694214876033058), t.translate(0, 0), t[j_] = bp, t[I_] = Ky, t[S_] = nx, t.miterLimit = 4, t[Ex](), t[Ex](), t[oo](), t[Ex](), t[oo](), t[oo](), t[Ex]();
          var i = t.createLinearGradient(43.6724, -2.7627, 43.6724, 59.3806);
          i[Wx](0, "rgba(159, 160, 160, 0.7)"), i[Wx](.9726, xm), t[wx] = i, t[Pp](), t[Dc](61.732, 16.509), t[ux](61.686, 16.509, 61.644, 16.515, 61.599, 16.515), t[ux](58.126, 8.152000000000001, 49.884, 2.2650000000000006, 40.262, 2.2650000000000006), t[ux](29.567, 2.2650000000000006, 20.594, 9.545000000000002, 17.966, 19.415), t.bezierCurveTo(9.09, 20.566, 2.229, 28.136, 2.229, 37.326), t[ux](2.229, 47.309, 10.322, 55.403000000000006, 20.306, 55.403000000000006), t.bezierCurveTo(23.374000000000002, 55.403000000000006, 26.257, 54.633, 28.787, 53.28900000000001), t.bezierCurveTo(31.197, 56.56000000000001, 35.067, 58.69000000000001, 39.442, 58.69000000000001), t[ux](42.555, 58.69000000000001, 45.408, 57.60900000000001, 47.669, 55.81200000000001), t[ux](51.586, 58.57800000000001, 56.443999999999996, 60.238000000000014, 61.732, 60.238000000000014), t[ux](74.64699999999999, 60.238000000000014, 85.116, 50.45000000000002, 85.116, 38.37400000000001), t.bezierCurveTo(85.116, 26.298, 74.646, 16.509, 61.732, 16.509), t[hf](), t[kx](), t.stroke(), t[oo](), t[Ex](), t[Ex](), t[wx] = pm, t[Pp](), t[Dc](34.966, 44.287), t[Nc](45.112, 44.287), t[mm](45.112, 44.287, 45.112, 44.287), t[Nc](45.112, 47.497), t[mm](45.112, 47.497, 45.112, 47.497), t.lineTo(34.966, 47.497), t[mm](34.966, 47.497, 34.966, 47.497), t[Nc](34.966, 44.287), t[mm](34.966, 44.287, 34.966, 44.287), t.closePath(), t[kx](), t[C_](), t[oo](), t[Ex](), t.fillStyle = Mm, t.beginPath(), t[Dc](48.306, 48.439), t[ux](48.306, 49.034, 47.824999999999996, 49.52, 47.226, 49.52), t.lineTo(32.854, 49.52), t[ux](32.253, 49.52, 31.771, 49.034000000000006, 31.771, 48.439), t.lineTo(31.771, 48.578), t[ux](31.771, 47.981, 32.253, 47.497, 32.854, 47.497), t[Nc](47.226, 47.497), t[ux](47.824999999999996, 47.497, 48.306, 47.98, 48.306, 48.578), t[Nc](48.306, 48.439), t.closePath(), t[kx](), t[C_](), t.restore(), t.save(), t[wx] = Om, t[Pp](), t[Dc](23.302, 42.82), t[ux](23.302, 43.63, 23.96, 44.287, 24.772, 44.287), t[Nc](55.308, 44.287), t[ux](56.12, 44.287, 56.775, 43.629999999999995, 56.775, 42.82), t[Nc](56.775, 40.98), t[Nc](23.302, 40.98), t.lineTo(23.302, 42.82), t[hf](), t[kx](), t.stroke(), t[oo](), t.save(), t.fillStyle = wm, t.beginPath(), t[Dc](55.307, 21.229), t[Nc](24.771, 21.229), t.bezierCurveTo(23.959, 21.229, 23.301000000000002, 21.884, 23.301000000000002, 22.695), t[Nc](23.301000000000002, 40.933), t[Nc](56.774, 40.933), t.lineTo(56.774, 22.695), t[ux](56.774, 21.884, 56.119, 21.229, 55.307, 21.229), t[hf](), t[kx](), t[C_](), t[oo](), t.save(), t.save(), t.restore(), t.save(), t[oo](), t[oo](), t[Ex](), i = t.createLinearGradient(29.04, 20.4219, 51.0363, 42.4181), i[Wx](0, Tm), i[Wx](1, km), t[wx] = i, t.beginPath(), t[Dc](53.485, 23.353), t[Nc](26.592, 23.353), t[ux](25.948999999999998, 23.353, 25.427, 23.873, 25.427, 24.517000000000003), t.lineTo(25.427, 38.807), t[Nc](54.647, 38.807), t[Nc](54.647, 24.517000000000003), t[ux](54.648, 23.873, 54.127, 23.353, 53.485, 23.353), t[hf](), t[kx](), t[C_](), t.restore(), t[oo](), t.restore()
        }
      }
    };
  for (var OY in MY) yn(Im + OY, MY[OY]);
  var IY = function () {
      this[Rf] = !1;
      var t = this._fo;
      t[$a]();
      var i = this[yf] || 0,
        n = this._7p.x + i / 2,
        e = this._7p.y + i / 2,
        s = this._7p[Na] - i,
        h = this._7p[Ba] - i,
        r = zn[Uh](this, {
          x: n,
          y: e
        });
      qn(t, r.x, r.y, !0), r = zn[Uh](this, {
        x: n + s,
        y: e
      }), qn(t, r.x, r.y), r = zn[Uh](this, {
        x: n + s,
        y: e + h
      }), qn(t, r.x, r.y), r = zn.call(this, {
        x: n,
        y: e + h
      }), qn(t, r.x, r.y), this.__mjPointer && (r = zn.call(this, {
        x: this[Sm],
        y: this[jf]
      }), qn(t, r.x, r.y)), i && t.grow(i / 2)
    },
    SY = 20,
    jY = {
      _gq: !1,
      _ke: null,
      _n99: 0,
      _l3: -1,
      _kp: null,
      _ef: function (t) {
        this._ke || (this._ke = [], this._ja = eY), this._ke[ir](t), this._eg(), this._kx()
      },
      _kx: function () {
        if (!this._kp) {
          var t = this;
          this._kp = setTimeout(function i() {
            return t._eg() !== !1 ? void(t._kp = setTimeout(i, t._h3())) : void delete t._kp
          }, this._h3())
        }
      },
      _h3: function () {
        return Math.max(SY, this._ke[this._l3][jm])
      },
      _eg: function () {
        return this._h7(this._l3 + 1)
      },
      _h7: function (t) {
        if (this._gq) t %= this[Am];
        else if (t >= this._ke.length) return !1;
        if (this._l3 == t) return !1;
        this._l3 = t;
        var i = this._ke[this._l3],
          n = i._n9ache;
        return n || (i[Pm] = n = Pi(this.width, this.height), n.g[Xf](i[mo], 0, 0), n._pixels = i[yx]), this._kz = n, this[lf] = !0, this._dt()
      },
      _n94: function () {
        return this._ke ? (this._gq = !0, this[Am] = this._ke.length, 1 == this[Am] ? this._dt() : void this._kx()) : void this._i8()
      },
      _m6: function () {
        this._kp && (clearTimeout(this._kp), delete this._kp)
      },
      _dt: function () {
        var t = this[vx][Yl];
        if (!t || !t.length) return !1;
        for (var i = new HG(this, Bx, $x, this._kz), n = 0, e = t[Wh]; e > n; n++) {
          var s = t[n];
          s[Hl]._jq && s[Hl]._jq[Lm] ? (t[Zh](n, 1), n--, e--) : s[dr][Uh](s.scope, i)
        }
        return t[Wh] > 0
      },
      _n77: function (t, i) {
        this[vx][dd](t, i), this._gq && !this._kp && this._kx()
      },
      _5y: function (t, i) {
        this[vx][ql](t, i), this[vx][Cm]() || this._m6()
      },
      _hu: function () {
        this._m6(), this._dispatcher[$a]()
      },
      _gb: function () {
        var t = this._kz[Rm];
        return t || (this._kz._n7ufferedImage = t = new TY(this._kz, 1)), t
      }
    },
    AY = function (t) {
      return t[Dm](function (t, i) {
        return 2 * t + i
      }, 0)
    },
    PY = function (t) {
      for (var i = [], n = 7; n >= 0; n--) i[ir](!!(t & 1 << n));
      return i
    },
    LY = function (t) {
      this[mo] = t, this.len = this[mo][Wh], this.pos = 0, this.readByte = function () {
        if (this.pos >= this[mo][Wh]) throw new Error("Attempted to read past end of stream.");
        return 255 & t[ic](this.pos++)
      }, this[Nm] = function (t) {
        for (var i = [], n = 0; t > n; n++) i[ir](this.readByte());
        return i
      }, this[Bm] = function (t) {
        for (var i = "", n = 0; t > n; n++) i += String[ec](this[$m]());
        return i
      }, this.readUnsigned = function () {
        var t = this[Nm](2);
        return (t[1] << 8) + t[0]
      }
    },
    CY = function (t, i, n) {
      for (var e, s, h = 0, r = function (t) {
          for (var n = 0, e = 0; t > e; e++) i[ic](h >> 3) & 1 << (7 & h) && (n |= 1 << e), h++;
          return n
        }, a = [], o = 1 << t, f = o + 1, c = t + 1, u = [], _ = function () {
          u = [], c = t + 1;
          for (var i = 0; o > i; i++) u[i] = [i];
          u[o] = [], u[f] = null
        }, d = 0; s = e, e = r(c), !(d++ > n);)
        if (e !== o) {
          if (e === f) break;
          if (e < u[Wh]) s !== o && u.push(u[s][Kh](u[e][0]));
          else {
            if (e !== u[Wh]) throw new Error(Fm);
            u[ir](u[s][Kh](u[s][0]))
          }
          a[ir][sr](a, u[e]), u[Wh] === 1 << c && 12 > c && c++
        } else _();
      return a
    },
    RY = function (t, i) {
      i || (i = {});
      var n = function (i) {
          for (var n = [], e = 0; i > e; e++) n.push(t.readBytes(3));
          return n
        },
        e = function () {
          var i, n;
          n = "";
          do i = t[$m](), n += t[Bm](i); while (0 !== i);
          return n
        },
        s = function () {
          var e = {};
          if (e.sig = t.read(3), e.ver = t[Bm](3), zm !== e.sig) throw new Error(Gm);
          e[Na] = t.readUnsigned(), e[Ba] = t[Hm]();
          var s = PY(t[$m]());
          e.gctFlag = s.shift(), e[Ym] = AY(s[Zh](0, 3)), e[qm] = s[Wm](), e.gctSize = AY(s[Zh](0, 3)), e[Um] = t[$m](), e.pixelAspectRatio = t.readByte(), e[Vm] && (e.gct = n(1 << e[Xm] + 1)), i.hdr && i.hdr(e)
        },
        h = function (n) {
          var s = function (n) {
              var e = (t[$m](), PY(t[$m]()));
              n[Zm] = e[Zh](0, 3), n[Km] = AY(e[Zh](0, 3)), n[Jm] = e[Wm](), n[Hf] = e[Wm](), n[Qm] = t[Hm](), n[tE] = t.readByte(), n[iE] = t[$m](), i.gce && i.gce(n)
            },
            h = function (t) {
              t[nE] = e(), i.com && i.com(t)
            },
            r = function (n) {
              t[$m](), n[eE] = t[Nm](12), n.ptData = e(), i.pte && i.pte(n)
            },
            a = function (n) {
              var s = function (n) {
                  t[$m](), n[sE] = t.readByte(), n[hE] = t.readUnsigned(), n.terminator = t[$m](), i.app && i.app[rE] && i.app[rE](n)
                },
                h = function (t) {
                  t[aE] = e(), i.app && i.app[t[oE]] && i.app[t.identifier](t)
                };
              switch (t[$m](), n[oE] = t[Bm](8), n.authCode = t.read(3), n.identifier) {
                case "NETSCAPE":
                  s(n);
                  break;
                default:
                  h(n)
              }
            },
            o = function (t) {
              t[mo] = e(), i[sE] && i[sE](t)
            };
          switch (n.label = t[$m](), n[fE]) {
            case 249:
              n.extType = cE, s(n);
              break;
            case 254:
              n[uE] = _E, h(n);
              break;
            case 1:
              n.extType = dE, r(n);
              break;
            case 255:
              n[uE] = lE, a(n);
              break;
            default:
              n[uE] = sE, o(n)
          }
        },
        r = function (s) {
          var h = function (t, i) {
            for (var n = new Array(t[Wh]), e = t[Wh] / i, s = function (e, s) {
                var h = t[Xh](s * i, (s + 1) * i);
                n.splice.apply(n, [e * i, i][Kh](h))
              }, h = [0, 4, 2, 1], r = [8, 8, 4, 2], a = 0, o = 0; 4 > o; o++)
              for (var f = h[o]; e > f; f += r[o]) s(f, a), a++;
            return n
          };
          s[qf] = t[Hm](), s.topPos = t[Hm](), s[Na] = t[Hm](), s[Ba] = t[Hm]();
          var r = s[Na] * s[Ba],
            a = PY(t[$m]());
          s[Yf] = a[Wm](), s[vE] = a.shift(), s[qm] = a.shift(), s[Zm] = a.splice(0, 2), s[bE] = AY(a[Zh](0, 3)), s[Yf] && (s.lct = n(1 << s.lctSize + 1)), s[gE] = t[$m]();
          var o = e();
          s[Uf] = CY(s[gE], o, r), s.interlaced && (s[Uf] = h(s.pixels, s.width)), i.img && i.img(s)
        },
        a = function () {
          var n = {};
          switch (n.sentinel = t[$m](), String[ec](n.sentinel)) {
            case "!":
              n[To] = yE, h(n);
              break;
            case ",":
              n[To] = f_, r(n);
              break;
            case ";":
              n[To] = xE, i.eof && i.eof(n);
              break;
            default:
              throw new Error(pE + n[mE].toString(16))
          }
          xE !== n.type && setTimeout(a, 0)
        },
        o = function () {
          s(), setTimeout(a, 0)
        };
      o()
    },
    DY = "";
  i[Av] && i.addEventListener(EE, function (t) {
    if (t[wa] && t[wE] && t[TE] && 73 == t[kE]) {
      var i = $H[Co] + ME + $H.version + OE + $H[IE] + ro + $H.about + ro + $H[SE] + DY;
      $H[ey](i)
    }
  }, !1);
  var NY = jE;
  DY = AE + decodeURIComponent(PE);
  var BY, $Y, FY, zY = t,
    GY = LE,
    HY = CE,
    YY = RE,
    qY = DE,
    WY = NE,
    UY = BE,
    VY = $E,
    XY = FE,
    ZY = zE,
    KY = GE,
    JY = HE,
    QY = YE,
    tq = qE,
    iq = WE,
    nq = or,
    eq = UE,
    sq = VE,
    hq = XE,
    rq = ZE,
    aq = KE,
    oq = JE,
    fq = zY[qY + QE];
  fq && ($Y = zY[iq + tw][WY + iw], fq[Uh](zY, Jn, eq), fq[Uh](zY, Qn, rq), fq[Uh](zY, function () {
    uq && uq == NY && (mq = !1)
  }, sq));
  var cq, uq, _q, dq = 111,
    lq = function (t, i) {
      i || (i = nw + HY + ew);
      try {
        FY[Uh](t, i, 6 * dq, 1 * dq)
      } catch (n) {}
    },
    vq = !0,
    bq = !0,
    gq = !0,
    yq = !0,
    xq = !0,
    pq = !0,
    mq = !0,
    Eq = 2048,
    wq = function (t, i) {
      return Kn ? Kn(t, i) || "" : void 0
    };
  if (i.createElement) {
    var Tq = i.createElement(sw);
    Tq[aa][hw] = y_, Tq[Kf] = function (t) {
      var i = t[fu][rw],
        n = $Y;
      if ("" === n || aw == n || ow == n) return void this.parentNode.parentNode.removeChild(this[bx]);
      var e = i[fw][ec];
      i[qY + QE](function () {
        Zn(e) != cq && (Kq[hr]._js = null)
      }, rq), this[bx].parentNode[xv](this[bx])
    };
    var kq = i[r_](a_);
    kq[aa].width = T_, kq[aa][Ba] = T_, kq.style[cw] = g_, kq[yc](Tq), i.documentElement.appendChild(kq)
  }
  if (i[nq + uw]) {
    var Mq = i[nq + uw](ZY + _w);
    Mq.style[hw] = y_, Mq.onload = function (t) {
      var i = dw,
        n = t.target[i + lw];
      BY = n[vw].now();
      var e = n[KY + JY + bw + QY + gw][tq + To];
      FY = e[GY + yw], bG && (n = zY);
      var s = n[qY + QE];
      s[Uh](zY, ee, rq), s[Uh](zY, se, aq), s[Uh](zY, re, oq), s[Uh](zY, ae, sq), s[Uh](zY, te, hq), s[Uh](zY, ne, oq), s[Uh](zY, he, rq), s[Uh](zY, ie, rq), this[bx].parentNode[xv](this[bx])
    };
    var kq = i.createElement(a_);
    kq[aa].width = T_, kq[aa][Ba] = T_, kq[aa][cw] = g_, kq.appendChild(Mq), i.documentElement[yc](kq)
  }
  var Oq = {
      position: xw,
      userSelect: y_,
      outline: y_,
      transformOrigin: pw,
      "-webkit-tap-highlight-color": bp
    },
    Iq = mw;
  gi(Hr + Iq, Oq);
  var Sq = {
      width: p_,
      height: p_,
      position: x_,
      overflow: g_,
      textAlign: xa,
      outline: y_,
      tapHighlightColor: bp,
      userSelect: y_
    },
    jq = Ew;
  gi(Hr + jq, Sq);
  var Aq = ww,
    Pq = {
      overflow: g_,
      "text-align": xa,
      "-webkit-tap-highlight-color": bp,
      outline: y_
    };
  gi(Hr + Aq, Pq);
  var Lq = I(function (t) {
    this[Tw] = new Rq, this._mu = new kG, this._87 = [], this[kw] = [], this[Mw] = [], this._89 = {}, this[Mf] = new PG, this._j3 = new zq, this[Ow] = new Gq, this._j3[Gl] = function (t) {
      this._77(t)
    }[gr](this), this._n9k(), this[Iw](t)
  }, {
    _n5w: null,
    _j1: null,
    _mu: null,
    _n7v: null,
    _j3: null,
    _n9d: function (t) {
      return t ? (this[Sw] || (this[Sw] = {}), this[Sw][t] ? !1 : (this[Sw][t] = !0, void this[jw]())) : this[jw]()
    },
    _9q: function (t) {
      return this._62s && this[Sw][t]
    },
    isInvalidate: function () {
      return this._62
    },
    clear: function () {
      this._mu.clear(), this._n7v.length = 0, this._89 = {}, this[ru] = !1, this[jw]()
    },
    _6z: function () {
      this[Aw](Pw), this._2j()
    },
    _2j: function () {
      this[Aw](Lw)
    },
    invalidate: function (t) {
      (t || !this._62) && (this._62 = !0, this._m6 || (this[Cw] = requestAnimationFrame(this._fc.bind(this))))
    },
    _71: function (t) {
      return this._m6 = t, t ? void(this[Cw] && (cancelAnimationFrame(this._jsingID), this._jsingID = null)) : void(this._62 && this[jw](!0))
    },
    _fc: function () {
      this._jsingID = null, this._62 = !1;
      var t = this[ru];
      this[ru] || (this[Rw](), this[ru] = !0), this._n9l(!t), this._39(), this._js(), this._1u()
    },
    _n9l: function (t) {
      this[Dw] = t || this[Nw], (t || this._62s[Pw]) && this._98(), (t || this._62s[Bw]) && this._79(), this[$w](t), this._42(t), this[Sw] = {}
    },
    _39: function () {
      this[kw][Wh] = 0;
      var t = this[Ow];
      if (this._mu[Vf](function (i) {
          if (i.__ht !== !1) {
            var n = this[Fw](i);
            t[ol](n.x, n.y, n[Na], n.height) && this[kw].push(i)
          }
        }, this), this[kw] = this._hp(this[kw]), !this[Dw]) {
        var i = this._n70;
        this[Mw][Wh] = 0, i[zw](this[Ow]), i._hn() || this._n7v[Vf](function (t) {
          var n = this._n72(t);
          i._ei(n.x, n.y, n[Na], n[Ba]) && this[Mw][ir](t)
        }, this)
      }
    },
    _hp: function (t) {
      return bG ? t = d(t, this._9s) : t[Gw](this._9s), t
    },
    _9s: function (t, i) {
      return t = t[Hw] || 0, i = i[Hw] || 0, t - i
    },
    _n72: function (t) {
      return t[Yw]
    },
    _js: function () {
      if (this[Dw]) return this._dx(), this._6e(!0), void this[vc](this[qw], this[kw]);
      this._6e(this._n7uffer);
      var t = this._n70,
        i = this[qw];
      i.save(), this._n7uffer && (ce(i), i[D_](this[Ww][Va], this[Ww].x, this._n7uffer.y)), t._k8(i, this._dy[gr](this)), this._dx(), this[vc](i, this[Mw]), i.restore()
    },
    _6e: function (t) {
      this[Uw] ? (this[Uw] = !1, this._j1[Vw](this._width, this[mx])) : t && fe(this._j1)
    },
    _98: function () {
      var t = this[Na],
        i = this[Ba];
      return this[px] == t && this[mx] == i ? !1 : (this[px] = t, this[mx] = i, void(this[Uw] = !0))
    },
    _42: function (t) {
      if (!t && !this[Sw][Lw]) return !1;
      var i = this._j3[Xw]([0, 0]),
        n = this.scale,
        e = this[px] / n,
        s = this._height / n,
        h = this.rotate,
        r = this[Ow];
      if (r.x == i[0] && r.y == i[1] && r.width == e && r[Ba] == s && r.rotate == h) return !1;
      var a = r.toJSON();
      return this[Ow].set(i[0], i[1], e, s, h, n), this._38(this[Ow], a, t), !0
    },
    _38: function (t, i, n) {
      this._n5d || n || (this[Ww] = this._gv(i, t))
    },
    _77: function () {
      if (this[ru]) {
        if (this._m6) {
          var t;
          this[Zw] ? this._n9urrentMatrix[Kw] = t = Bq.mul([], this._j3.m, Bq.invert([], this[Zw].m)) : t = this._j3.m, this._4p(t)
        }
        this[Aw](Bw), this._2j()
      }
    },
    _4p: function (t) {
      this[Jw] = t, Hq[vu](this._j1, u_, t ? Qw + t[tc](Rr) + ")" : "")
    },
    _79: function () {
      var t = this[Zw];
      if (this._n9urrentMatrix = {
          tx: this._j3.m[4],
          ty: this._j3.m[5],
          m: this._j3.m[Xh](),
          scale: this._j3._gr(),
          rotate: this._j3._ec()
        }, this.__n9ssMatrix && this._4p(null), !this._n5d) {
        if (this._2m(this[Zw], t), !t || t.scale != this[Zw][io]) return this._6x(this[Zw][io], t ? t[io] : null), void(this[Dw] = !0);
        if (!t || t[ko] != this[Zw][ko]) return this._51(this[Zw][ko], t ? t[ko] : null), void(this[Dw] = !0);
        var i = t.m[4] - this[Zw].m[4],
          n = t.m[5] - this[Zw].m[5],
          e = this[za];
        i *= e, n *= e;
        var s = 1e-4;
        (Math.abs(i - Math.round(i)) > s || Math.abs(n - Math.round(n)) > s) && (this[Dw] = !0)
      }
    },
    _7b: function () {
      var t = this.bounds,
        i = t.clone();
      t.clear(), this._mu.forEach(function (i) {
        i.__ht !== !1 && t.add(this._n72(i))
      }, this), t.equals(i) || this._36(t, i)
    },
    _36: function () {},
    _n5h: !1,
    _n9t: function () {},
    _9z: function (t) {
      var i = t.ratio;
      t[io](i, i), t[u_].apply(t, this._j3.m)
    },
    render: function (t, i) {
      i && i.length && (t.save(), this._9z(t), i.forEach(function (i) {
        if (t[Ex](), i.visible !== !1) try {
          i[vc](t)
        } catch (n) {
          console.error(n)
        }
        t.restore()
      }, this), t.restore())
    },
    setParent: function (t) {
      N(t) && (t = i[tT](t)), this._mr != t && (this._mr && this._n5w && (R(this._mr, Aq), this._mr.removeChild(this[iT])), this._mr = t, this._mr && (C(this._mr, Aq), this._mr.appendChild(this._7c()), this._6z()))
    },
    _7c: function () {
      return this[iT] || this[nT](), this._n5w
    },
    _n9k: function () {
      var t = Pi(!0);
      Vn(t.g), t[xc] = Iq;
      var n = i[r_](a_);
      return n[Av](Mb, function (t) {
        return i[eT] == this ? (t[Sr] && t.preventDefault(), !1) : void 0
      }.bind(n), !1), n.className = jq, n[yc](t), n[sT] = 0, this._j1 = t, this._n5w = n, this[qw] = this._j1[Ro](Xa), t
    },
    toLogical: function (t, i) {
      return t instanceof Object && (Q(t) && (t = this._7s(t)), Array.isArray(t) ? (i = t[1] || 0, t = t[0] || 0) : (i = t.y || 0, t = t.x || 0)), this._j3[Xw]([t, i])
    },
    toCanvas: function (t, i) {
      return this._j3[u_]([t, i])
    },
    _7s: function (t) {
      return yi(t, this[iT])
    },
    _er: function (t, i, n) {
      if (t[Qu] instanceof Function) return t[Qu](i, n);
      var e = this._n72(t);
      return e ? n ? PG[ol](e.x, e.y, e[Na], e.height, i[0] - n, i[1] - n, n + n, n + n) : PG[ol](e.x, e.y, e[Na], e[Ba], i[0], i[1]) : t
    },
    hitTest: function (t, i) {
      return this._8b(t, i)
    },
    _8b: function (t, i) {
      i = this._8v(i), t = this[hT](t);
      for (var n, e = this[kw][Wh]; --e >= 0;)
        if (n = this._n7v[e], this._er(n, t, i)) return n
    },
    _8v: function (t) {
      return (t === n || null === t) && (t = TG[rT]), t ? t / this[io] : 0
    },
    getUIByMouseEvent: function (t, i) {
      if (t[aT]) return this._mu.getById(t[aT]);
      var n = this._8b(t, i);
      return t[aT] = n ? n.id : -1, n
    },
    _89: null,
    invalidateUI: function (t) {
      this._89[t.id] = t, this[jw]()
    },
    _8y: function (t) {
      t[bo] instanceof Function && t[bo](this)
    },
    _n9o: function (t, i) {
      t[oT] && this._gt(t.__jg);
      var n = t[fT];
      if (t[fT] = this._ej(t, i), !t[fT]) return n;
      var e = t[oT];
      this._8y(t);
      var s = this[Fw](t);
      t[oT] = {
        x: s.x,
        y: s.y,
        width: s[Na],
        height: s.height
      };
      var h = t[fT] !== n || !PG[bc](e, s);
      return h && t.__jg && this._gt(t.__jg), h
    },
    _ej: function (t) {
      return t[cT] !== !1
    },
    _$v: function (t) {
      this._mu[Vf](function (i) {
        this[uT](i, t)
      }, this), this._89 = {}, this._7b()
    },
    _n5x: function (t) {
      var i = this[io];
      if (t) return this._$v(i);
      var n = this[_T];
      this[_T] = !1;
      for (var e in this._89) {
        var s = this._89[e];
        n ? this[uT](s, i) : n = this[uT](s, i)
      }
      this._89 = {}, n && this._7b()
    },
    _87: null,
    _1u: function () {
      if (!this._87[Wh]) return !1;
      var t = this._87;
      this._87 = [], t[Vf](function (t) {
        try {
          var i = t[Uh],
            n = t.scope,
            e = t[jm];
          n instanceof Object ? i = i.bind(n) : n && !e && (e = parseInt(n)), e ? setTimeout(i, e) : i()
        } catch (s) {}
      }, this), this._62 && this._fc()
    },
    _dk: function (t, i, n) {
      this._87[ir]({
        call: t,
        scope: i,
        delay: n
      }), this._62 || this._1u()
    },
    _40: function (t, i) {
      for (var n = this[kw], e = 0, s = n[Wh]; s > e; e++)
        if (t.call(i, n[e]) === !1) return !1
    },
    _f3: function (t, i) {
      this._mu.forEach(t, i)
    },
    _$y: function (t, i) {
      for (var n = this[kw], e = n[Wh] - 1; e >= 0; e--)
        if (t[Uh](i, n[e]) === !1) return !1
    },
    _3r: function (t, i) {
      this._mu.forEachReverse(t, i)
    },
    _3u: function () {
      return this[Mf]
    },
    _h1: function (t, i, n) {
      t /= this[io] || 1, this._ju(t, i, n)
    },
    _ju: function (t, i, e) {
      if (this[ru] && (i === n || null === i)) {
        var s = this[hT](this[Na] / 2, this[Ba] / 2);
        i = s[0] || 0, e = s[1] || 0
      }
      return this._j3[io](t, [i || 0, e || 0])
    },
    _dp: function (t, i) {
      this._j3.translate([t, i], !0)
    },
    _n5v: function (t, i, n, e) {
      if (n == this.scale && e !== !1) {
        var s = this.ratio;
        s != (0 | s) && (t = Math.round(t * s) / s, i = Math.round(i * s) / s)
      }
      this._j3.translateTo([t, i], n)
    },
    _jy: function (t, i) {
      return this._ju(this._dn, t, i)
    },
    _hm: function (t, i) {
      return this._ju(1 / this._dn, t, i)
    },
    _1m: function () {
      var t = this._3u();
      if (!t[Lf]()) {
        var i = this[Na] / t[Na],
          n = this[Ba] / t[Ba],
          e = Math.min(i, n);
        return e = Math.max(this._gx, Math.min(this._gz, e)), {
          scale: e,
          cx: t.cx,
          cy: t.cy
        }
      }
    },
    _dn: 1.3,
    _gz: 10,
    _gx: .1,
    _n5d: !1,
    _6x: function () {},
    _51: function () {},
    _2m: function () {},
    _dx: function () {
      this[Ww] = null, this[Tw]._kw()
    },
    _dy: function (t) {
      var i = this._j3,
        n = this._j1[za],
        e = this[io],
        s = i._ec();
      if (!s) {
        var h = i[u_]([t[0], t[1]]);
        return h[0] *= n, h[1] *= n, n *= e, h[2] = t[2] * n, h[3] = t[3] * n, h
      }
      var r = new PG,
        a = i.transform([t[0], t[1]]);
      return r.add(a[0], a[1]), a = i[u_]([t[0] + t[2], t[1]]), r.add(a[0], a[1]), a = i[u_]([t[0], t[1] + t[3]]), r.add(a[0], a[1]), a = i[u_]([t[0] + t[2], t[1] + t[3]]), r.add(a[0], a[1]), [r.x * n, r.y * n, r[Na] * n, r[Ba] * n]
    },
    _gv: function (t, n) {
      var e = n._3k(t.x, t.y, t.width, t[Ba]);
      if (e) {
        var s = this._j1,
          h = this[io] * this[za],
          r = this[Tw],
          a = {},
          o = 1e-6;
        e.x > o && (a[xa] = n._3y(0, 0, e.x, n.height, h)), n[Na] - e[Zr] > o && (a[Zr] = n._3y(e.right, 0, n[Na] - e[Zr], n.height, h)), e.y > o && (a.top = n._3y(e.x, 0, e.width, e.y, h)), n.height - e.bottom > o && (a[Xr] = n._3y(e.x, e[Xr], e.width, n.height - e.bottom, h)), q(a) || r._3s(a);
        var f = n._hk(t.x, t.y),
          c = (f[0] - e.x) * h,
          u = (f[1] - e.y) * h,
          _ = e[Na] * h,
          d = e[Ba] * h;
        c = Math[xo](c), u = Math[xo](u), _ = Math[xo](_), d = Math[xo](d);
        var l = this[dT];
        return l || (l = this._n7ackCanvas = i[r_](Va), l.g = l[Ro](Xa)), l.width = _, l.height = d, ce(l.g), l.g[D_](s, c, u), c = f[0] * h - c, u = f[1] * h - u, {
          x: c,
          y: u,
          canvas: l
        }
      }
    },
    _lk: function (t, i, n, e) {
      this[Tw]._mx(t, i, n, e)
    },
    _gt: function (t) {
      this._n70._hq(t)
    }
  });
  Object[Gr](Lq.prototype, {
    width: {
      get: function () {
        return this[iT].clientWidth
      }
    },
    height: {
      get: function () {
        return this[iT][B_]
      }
    },
    rotate: {
      get: function () {
        return this._j3._ec()
      }
    },
    tx: {
      get: function () {
        return this._j3._81()[0]
      }
    },
    ty: {
      get: function () {
        return this._j3._81()[1]
      }
    },
    ratio: {
      get: function () {
        return this._j1 ? this._j1.ratio : void 0
      }
    },
    scale: {
      get: function () {
        return this._j3._gr()
      },
      set: function (t) {
        this._h1(t)
      }
    },
    renderScale: {
      get: function () {
        return this.scale * this[za]
      }
    },
    uis: {
      get: function () {
        return this._mu
      }
    },
    length: {
      get: function () {
        return this._mu[Wh]
      }
    },
    viewportBounds: {
      get: function () {
        return this[Ow].getGlobalBounds()
      }
    }
  });
  var Cq, Rq = I({
    constructor: function () {
      this._hh = [], this._jg = new PG, this._hi = cG ? 20 : 50
    },
    _hi: 20,
    _hh: null,
    _lp: !1,
    _jg: null,
    _kw: function () {
      this._lp = !1, this._hh.length = 0, this[lT] = null, this._jg.clear()
    },
    _hn: function () {
      return 0 == this._hh.length && !this[lT]
    },
    _mx: function (t, i, n, e) {
      0 >= n || 0 >= e || this._hh.push([t, i, n, e])
    },
    _hq: function (t) {
      this._mx(t.x, t.y, t.width, t.height)
    },
    _3s: function (t) {
      var i = this._jg;
      for (var n in t) {
        var e = t[n],
          s = e.getGlobalBounds();
        i.add(s)
      }
      this[lT] = t
    },
    _n74: function (t, i) {
      for (var n = [], e = this._hh, s = 0, h = e.length; h > s; s++) {
        var r = e[s];
        t[ol](r[0], r[1], r[2], r[3]) && (n[ir](r), this._jg.addRect(r[0], r[1], r[2], r[3]))
      }
      this._hh = n, this._lp = i || n.length >= this._hi
    },
    _ei: function (t, i, n, e) {
      if (!this._jg.intersectsRect(t, i, n, e)) return !1;
      if (this._lp) return !0;
      if (this[lT]) {
        var s = this._viewportClips;
        for (var h in s)
          if (s[h].intersects(t, i, n, e)) return !0
      }
      for (var r, a = 0, o = this._hh.length; o > a; a++)
        if (r = this._hh[a], PG[ol](t, i, n, e, r[0], r[1], r[2], r[3])) return !0;
      return !1
    },
    _k8: function (t, i) {
      if (this._hn()) return !1;
      if (t[Pp](), this._lp) {
        var n = i([this._jg.x, this._jg.y, this._jg[Na], this._jg.height]);
        return ue(t, n[0], n[1], n[2], n[3]), void t[Mx]()
      }
      if (this[lT])
        for (var e in this[lT]) {
          var n = this[lT][e][vT];
          ue(t, n[0], n[1], n[2], n[3])
        }
      for (var s = this._hh, h = 0, r = s.length; r > h; h++) {
        var n = i(s[h]);
        ue(t, n[0], n[1], n[2], n[3])
      }
      t[Mx]()
    }
  });
  Rq[bT] = function (t, i, n, e) {
    return t instanceof Object && (i = t.y, n = t[Na], e = t[Ba], t = t.x), n = V(t + n) - (t = U(t)), e = V(i + e) - (i = U(i)), [t, i, n, e]
  }, Rq._d9 = U, Rq._g9 = V, FH[gT] = yT, FH[xT] = pT, TG[mT] = FH.NAVIGATION_SCROLLBAR;
  var Dq = I({
    _js: function () {
      k(this, Dq, ET, arguments), this[wT]._js()
    },
    _9s: function (t, i) {
      return t = t.$data[Hw] || 0, i = i.$data[Hw] || 0, t - i
    },
    "super": Lq,
    constructor: function (t, n) {
      this._kn = t, N(n) && (n = i[tT](n)), n && n[Zd] || (n = i[r_](a_)), M(this, Dq, [n]), this[wT] = new uh(this, this._n5w), this._hc = [], this._kn._7[dd](this._1g, this), this._kn._1e.addListener(this._92, this), this._kn._12.addListener(this._6w, this), this._kn._$n.addListener(this._2x, this), this._kn._$r[dd](this._3b, this), this[TT] = {}, this._3g(TG[mT], !0)
    },
    _4p: function (t) {
      k(this, Dq, kT, arguments), this[wT]._4p(t)
    },
    _hf: function (t) {
      return t.id || (t = this._mu[Yd](t)), t ? (this._mu.remove(t), t.destroy(), t.__jg && this._gt(t[oT]), void(this._n9dBoundsFlag = !0)) : !1
    },
    _he: function () {
      this._mu.forEach(function (t) {
        t.destroy()
      }), this._mu[$a]()
    },
    _ej: function (t, i) {
      var n = t[mo] || t;
      return n._$t && (n._$t = !1, n._ht = this._4q(n, i)), n._ht !== !1
    },
    _4q: function (t, i) {
      return this._32(t, i) ? !this._kn._htFilter || this._kn[MT](t, i) !== !1 : !1
    },
    _9y: function (t) {
      return this._kn._30 == sh(t)
    },
    _32: function (t, i) {
      if (t.visible === !1) return !1;
      if (!(t instanceof Wq)) return this._kn._30 != sh(t) ? !1 : !t._du;
      var n = t[Pc],
        e = t[mc];
      if (!n || !e) return !1;
      if (n == e && !t[Lc]()) return !1;
      if (t[OT]()) {
        var s = t[Ec](!0);
        if (s && !s._ej(t, i)) return !1
      }
      var h = this._ej(n, i),
        r = this._ej(e, i);
      return h && r ? !0 : !1
    },
    _n72: function (t) {
      return t[ru] ? {
        x: t.$x + t[IT].x,
        y: t.$y + t[IT].y,
        width: t[IT][Na],
        height: t[IT][Ba]
      } : void 0
    },
    _2s: function (t) {
      var i = this._lh(t);
      if (i) {
        var n = this._n72(i);
        if (n) return new PG(n)
      }
    },
    _er: function (t, i, n) {
      return t[Qu](i[0], i[1], n)
    },
    hitTest: function (t, i) {
      var n = k(this, Dq, Qu, arguments);
      if (n) {
        t = this[hT](t), i = this._8v(i);
        var e = n.hitTest(t[0], t[1], i, !0);
        if (e instanceof Kq) return e
      }
      return n
    },
    _34: function (t) {
      return this[ST](t)
    },
    _6e: function () {
      k(this, Dq, jT, arguments), this._topCanvas._ir(this.width, this[Ba])
    },
    _le: 1,
    _n7v: null,
    _8f: null,
    _8e: null,
    _mu: null,
    _mr: null,
    _j1: null,
    _n70: null,
    _62: !1,
    _n5h: !1,
    _j3: null,
    _40: function (t, i) {
      for (var n = this[kw], e = 0, s = n.length; s > e; e++)
        if (t[Uh](i, n[e]) === !1) return !1
    },
    _f3: function (t, i) {
      this._mu.forEach(t, i)
    },
    _$y: function (t, i) {
      for (var n = this[kw], e = n[Wh] - 1; e >= 0; e--)
        if (t[Uh](i, n[e]) === !1) return !1
    },
    _3r: function (t, i) {
      this._mu[AT](t, i)
    },
    _38: function (t) {
      k(this, Dq, PT, arguments), this[LT] = {
        value: t
      }
    },
    _n9t: function () {
      this._42(!0), this[CT] || (this[CT] = !0, this._kn && this._kn.originAtCenter && this._j3[RT]([this[Na] / 2, this[Ba] / 2]))
    },
    _fc: function () {
      if (!this._hued && this._62) {
        if (this._jsingID = null, this._62 = !1, this[ru] && this._kn && this._kn._$t && (this._kn._$t = !1, this._kn[Vf](function (t) {
            t.invalidateVisibility(!0)
          })), k(this, Dq, DT, arguments), this._8eChanged) {
          this._75 && this._75._j6();
          var t = this[NT][vr],
            i = this[NT].old;
          this[NT] = null, this._kn._4g(new YG(this._kn, BT, t, i))
        }
        this[LT] && (this[LT] = !1, this._75 && this._75._38 && this._75._38(this[Ow][Na] * this[Ow][io], this[Ow][Ba] * this._viewport[io]), this._kn._4g(new YG(this._kn, Lw, this[Ow])))
      }
    },
    _hc: null,
    _n9o: function (t) {
      var i = t.$data;
      if (!t._1f && !i._62 && !i._$t) return !1;
      var n = t.$invalidateSize;
      return n = k(this, Dq, uT, arguments) || n
    },
    _8y: function (t) {
      var i = t[$T];
      i[FT] && (i[FT] = !1, t._45()), i.__62 && i._i5() && (t._5l(), i[pv] = !1), (t._1f || i._62) && (i._62 = !1, t[bo]())
    },
    _ha: function (t, i) {
      var n = t[za];
      t.scale(n, n), t[u_][sr](t, this._j3.m);
      for (var e = this[zT], s = [], h = 0, r = i[Wh]; r > h; h++) {
        var a = i[h];
        a._js(t, e), a._jt && a._jt[Wh] && s.push(a)
      }
      if (s[Wh])
        for (h = 0, r = s[Wh]; r > h; h++) s[h]._9k(t, e)
    },
    render: function (t, i) {
      if (i.length) {
        if (t[Ex](), cG) try {
          this._ha(t, i)
        } catch (n) {} else this._ha(t, i);
        t[oo]()
      }
    },
    _h8: function (t, i, n) {
      t.save(), t.translate(-n.x * i, -n.y * i), t[io](i, i);
      var e, s, h = this._mu._j5.slice();
      h = this._hp(h);
      for (var r = [], a = 0, o = h[Wh]; o > a; a++) e = h[a], e[fT] && (s = this[Fw](e), n[hl](s.x, s.y, s.width, s[Ba]) && (e._js(t, i), e._jt && e._jt.length && r[ir](e)));
      if (r[Wh])
        for (a = 0, o = r[Wh]; o > a; a++) r[a]._9k(t, i);
      t[oo]()
    },
    _10: function () {},
    _1d: function () {
      for (var t, i, n = this._mu._j5, e = new PG, s = n[Wh] - 1; s >= 0; s--) t = n[s], t._ht && (i = t[IT], e[GT](t.$x + i.x, t.$y + i.y, i[Na], i[Ba]));
      var h = this._8e;
      this._8e = e, e[bc](h) || this._10(h, e)
    },
    _55: function () {
      this[kw].length = 0, this._8f = {}
    },
    _lf: function () {
      this._kw()
    },
    _hu: function () {
      this._kw(), this[Lm] = !0, this._62 = !1, this[wT][$a](), this._87[Wh] = 0, this._75 && (this._75._hu(), delete this._75)
    },
    _lh: function (t) {
      return this._mu.getById(t.id || t)
    },
    _$b: function (t) {
      return this._dv(t)
    },
    _h5: function (t, i) {
      var n = this.toCanvas(t, i);
      return {
        x: n[0],
        y: n[1]
      }
    },
    _dv: function (t, i) {
      var n = this.toLogical(t, i);
      return {
        x: n[0],
        y: n[1]
      }
    },
    _$f: null,
    _3b: function (t) {
      var i = t[zo],
        n = t[mo];
      if (n)
        if (this[ru]) {
          var e, s;
          if ($(n))
            for (var h = 0, r = n.length; r > h; h++) s = n[h].id, e = this._mu[Yd](s), e && (e.selected = i[Wd](s), e[HT]());
          else {
            if (s = n.id, e = this._mu[Yd](s), !e) return;
            e[YT] = i[Wd](s), e[HT]()
          }
          this._n9d()
        } else {
          this._$f || (this._$f = {});
          var e, s;
          if ($(n))
            for (var h = 0, r = n[Wh]; r > h; h++) s = n[h].id, this._$f[s] = !0;
          else s = n.id, this._$f[s] = !0
        }
    },
    _kn: null,
    _n9m: function (t) {
      var i = t[qT];
      return i ? new i(t, this._kn) : void 0
    },
    _1g: function (t) {
      if (!this._n5h) return !1;
      var i = t.source,
        n = t[Il];
      h_ == n && this._kn.invalidateVisibility(), qT == n ? (this._hf(i.id), this._kl(i)) : WT == n && i._i5() && t.value && this._50(i);
      var e = this._mu[Yd](i.id);
      e && e[ru] && e[UT](t) && this._n9d()
    },
    _3e: function (t) {
      var i = this._lh(t);
      i && (i[VT](), this[Aw]())
    },
    _92: function (t) {
      if (!this._n5h) return !1;
      switch (t[Il]) {
        case QG[av]:
          this._kl(t[mo]);
          break;
        case QG[Kl]:
          this._h4(t.data);
          break;
        case QG[Jl]:
          this._hz(t.data)
      }
    },
    _kw: function () {
      this._n5y = {}, this._he(), this[$a]()
    },
    _n5y: null,
    _kl: function (t) {
      var i = this[XT](t);
      i && (this._mu.add(i), this[ru] && (this[TT][t.id] = t), this[Aw]())
    },
    _h4: function (t) {
      if (Array[Or](t)) {
        for (var i, n = [], e = 0, s = t[Wh]; s > e; e++) i = t[e].id, n.push(i), delete this._n5y[i];
        t = n
      } else t = t.id, delete this[TT][t], t = [t];
      t.forEach(function (t) {
        this._hf(t)
      }, this), this._n9d()
    },
    _hz: function () {
      this._kw()
    },
    _6w: function (t) {
      return this._n5h ? void(t[zo] instanceof Uq && !this[TT][t[zo].id] && (t[Sl] && (this._3e(t.oldValue), t.oldValue[pv] = !0), t.value && (this._3e(t[vr]), t[vr][pv] = !0), this._50(t[zo]))) : !1
    },
    _2x: function (t) {
      return this[ru] ? void(t[zo] instanceof Uq && !this._n5y[t.source.id] && this._50(t.source)) : !1
    },
    _2u: function (t) {
      if (t[ZT]) {
        var i = t.getEdgeBundle(!0);
        if (!i) return t._edgeBundleInvalidateFlag = !1, void t.validateEdgeBundle();
        i[bo](this._kn), i[KT](function (t) {
          t[JT]()
        })
      }
    },
    _$v: function (t) {
      var i, n = (this._kn, this._kn[F_]),
        e = this._mu,
        s = [],
        h = 1;
      if (n[QT](function (t) {
          return t instanceof Wq ? (this._2u(t), void s[ir](t)) : (i = this._n9m(t), void(i && (e.add(i), t[tk] = h++)))
        }, this), e.length)
        for (var r = e._j5, h = r[Wh] - 1; h >= 0; h--) i = r[h], this._3f(i, i[$T], t);
      for (var a, h = 0, o = s[Wh]; o > h; h++)
        if (a = s[h], i = this[XT](a)) {
          this._3f(i, a, t), e.add(i);
          var f = a[Pc],
            c = a[mc],
            u = f[tk] || 0;
          f != c && (u = Math.max(u, c[tk] || 0)), a.__l3 = u
        }
      if (s[Wh] && e._j5[Gw](function (t, i) {
          return t.$data[tk] - i[$T][tk]
        }), this._$f) {
        var _ = n.selectionModel;
        for (var d in this._$f)
          if (_.containsById(d)) {
            var i = e[Yd](d);
            i && (i[YT] = !0)
          }
        this._$f = null
      }
      this._7b()
    },
    _n5x: function (t, i) {
      if (t) return this._$v();
      var n = this._n9dBoundsFlag;
      this[_T] = !1;
      for (var e in this[TT]) {
        var s = this[TT][e];
        s instanceof Uq ? this._50(s) : this._53(s)
      }
      this[TT] = {};
      for (var h, r, a = this._mu._j5, o = [], f = a[Wh] - 1; f >= 0; f--) h = a[f], r = h.$data, r instanceof Wq ? (this._2u(r), o.push(h)) : this._3f(h, r, i) && !n && (n = !0);
      if (o[Wh])
        for (var f = 0, c = o.length; c > f; f++) h = o[f], this._3f(h, h[$T], i) && !n && (n = !0);
      n && this._7b()
    },
    _3f: function (t, i, n) {
      if (i instanceof Wq) return i[FT] && (i[FT] = !1, t._45()), this._n9o(t, n);
      if (i[pv] && i._i5() && (t._5l(), i[pv] = !1), this._n9o(t, n)) {
        var e = this._4f(i);
        return e && (e[pv] = !0), i[ik]() && i[Cc](function (t) {
          t.__45 = !0
        }, this), !0
      }
    },
    _2q: function (t, i) {
      var n = t[Pc],
        e = t[mc],
        s = i[nk](n.id);
      if (n == e) return s;
      var h = i[nk](e.id);
      return Math.max(s, h)
    },
    _2n: function (t, i) {
      var n = this[F_]._g7(t);
      return n ? i.getIndexById(n.id) : 0
    },
    _50: function (t) {
      var i = this._mu,
        n = i[Yd](t.id);
      if (!n) throw new Error(ek + t[Co] + sk);
      var s = this._2n(t, i),
        h = [n];
      t[qh]() && e(t, function (t) {
        t instanceof Uq && (n = i[Yd](t.id), n && h[ir](n))
      }, this), this._4c(i, s, h)
    },
    _53: function (t) {
      var i = this._mu[Yd](t.id);
      if (i) {
        var n = this._2q(t, this._mu);
        this._mu[hk](i, n)
      }
    },
    _4c: function (t, i, n) {
      function e(t) {
        s.add(t)
      }
      var s = new kG;
      l(n, function (n) {
        i = t[rk](n, i), n[$T][Cc](e)
      }, this), 0 != s[Wh] && s[Vf](this._53, this)
    },
    _8c: function (t) {
      return t[Ec](!0)
    },
    _4f: function (t) {
      var i = Te(t);
      return i && i[WT] ? i : null
    },
    _73: null,
    _75: null,
    _3g: function (t, i) {
      return i || t != this._73 ? (this._73 = t, this._75 && (this._75._hu(), delete this._75), t == FH[xT] ? void(this._75 = new fh(this, this[iT])) : t == FH[gT] ? void(this._75 = new oh(this, this[iT])) : void 0) : !1
    },
    _2m: function (t, i) {
      this._75 && this._75._j6(), this._kn._4g(new YG(this._kn, u_, t, i))
    },
    _6x: function (t, i) {
      this._kn._4g(new YG(this._kn, io, t, i))
    },
    _36: function (t, i) {
      this._8eChanged = {
        value: t,
        old: i
      }
    },
    _78: function () {
      this._6z()
    }
  });
  Object[Gr](Dq[hr], {
    _viewportBounds: {
      get: function () {
        return this[ak]
      }
    },
    _scale: {
      get: function () {
        return this[io]
      },
      set: function (t) {
        this._h1(t)
      }
    },
    _tx: {
      get: function () {
        return this.tx
      }
    },
    _ty: {
      get: function () {
        return this.ty
      }
    },
    graphModel: {
      get: function () {
        return this._kn[ok]
      }
    }
  });
  var Nq = Lq,
    Bq = {};
  Bq.create = function () {
    return [1, 0, 0, 1, 0, 0]
  }, Bq[fk] = function (t, i) {
    var n = i[0],
      e = i[1],
      s = i[2],
      h = i[3],
      r = i[4],
      a = i[5],
      o = n * h - e * s;
    return o ? (o = 1 / o, t[0] = h * o, t[1] = -e * o, t[2] = -s * o, t[3] = n * o, t[4] = (s * a - h * r) * o, t[5] = (e * r - n * a) * o, t) : null
  }, Bq.multiply = function (t, i, n) {
    var e = i[0],
      s = i[1],
      h = i[2],
      r = i[3],
      a = i[4],
      o = i[5],
      f = n[0],
      c = n[1],
      u = n[2],
      _ = n[3],
      d = n[4],
      l = n[5];
    return t[0] = e * f + h * c, t[1] = s * f + r * c, t[2] = e * u + h * _, t[3] = s * u + r * _, t[4] = e * d + h * l + a, t[5] = s * d + r * l + o, t
  }, Bq.mul = Bq[kp], Bq.rotate = function (t, i, n) {
    var e = i[0],
      s = i[1],
      h = i[2],
      r = i[3],
      a = i[4],
      o = i[5],
      f = Math.sin(n),
      c = Math.cos(n);
    return t[0] = e * c + h * f, t[1] = s * c + r * f, t[2] = e * -f + h * c, t[3] = s * -f + r * c, t[4] = a, t[5] = o, t
  }, Bq.scale = function (t, i, n) {
    var e = i[0],
      s = i[1],
      h = i[2],
      r = i[3],
      a = i[4],
      o = i[5],
      f = n[0],
      c = n[1];
    return t[0] = e * f, t[1] = s * f, t[2] = h * c, t[3] = r * c, t[4] = a, t[5] = o, t
  }, Bq[to] = function (t, i, n) {
    var e = i[0],
      s = i[1],
      h = i[2],
      r = i[3],
      a = i[4],
      o = i[5],
      f = n[0],
      c = n[1];
    return t[0] = e, t[1] = s, t[2] = h, t[3] = r, t[4] = e * f + h * c + a, t[5] = s * f + r * c + o, t
  }, Bq[u_] = function (t, i) {
    var n = i[0],
      e = i[1];
    return [n * t[0] + e * t[2] + t[4], n * t[1] + e * t[3] + t[5]]
  }, Bq[Xw] = function (t, i) {
    return Bq[u_](Bq[fk]([], t), i)
  };
  var $q = Math.PI + Math.PI,
    Fq = D,
    zq = I({
      equals: function (t) {
        if (!t || !Array.isArray(t)) return !1;
        for (var i = this.m, n = 0; n < i.length;) {
          if (i[n] != t[n]) return !1;
          ++n
        }
        return !0
      },
      constructor: function (t) {
        this.m = t || Bq[or](), this.im = []
      },
      listener: null,
      _62: !0,
      invalidate: function () {
        return this._62 = !0, this[ck] && this[bc](this[ck]) ? !1 : (this[Gl] && this[Gl]({
          target: this,
          kind: jw
        }), this[ck] = this.m[Xh](), this)
      },
      validate: function () {
        return this._62 = !1, Bq[fk](this.im, this.m), this
      },
      translate: function (t, i) {
        return Fq(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i !== !1 ? (this.m[4] += t[0], this.m[5] += t[1], this[jw]()) : (Bq.translate(this.m, this.m, t), this[jw]())
      },
      translateTo: function (t, i) {
        return Fq(t) && (t = [arguments[0], arguments[1]], i = arguments[2]), i && (i /= this._gr(), Bq[io](this.m, this.m, [i, i])), this.m[4] = t[0], this.m[5] = t[1], this.invalidate()
      },
      scale: function (t, i) {
        return Tr == typeof t && (t = [t, t]), i ? (Bq[to](this.m, this.m, i), Bq[io](this.m, this.m, t), Bq[to](this.m, this.m, _e(i))) : Bq[io](this.m, this.m, t), this[jw]()
      },
      rotate: function (t, i) {
        return i ? (Bq[to](this.m, this.m, i), Bq.rotate(this.m, this.m, t), Bq[to](this.m, this.m, _e(i))) : Bq.rotate(this.m, this.m, t), this.invalidate()
      },
      transform: function (t) {
        return Bq[u_](this.m, t)
      },
      reverseTransform: function (t) {
        return Bq.transform(this._3x(), t)
      },
      toString: function () {
        return Qw + this.m[tc](Rr) + Nr
      },
      _3x: function () {
        return this._62 && this[bo](), this.im
      },
      _e7: function () {
        var t = this.m[0],
          i = this.m[1],
          n = this.m[2],
          e = this.m[3];
        return [Math[uo](t * t + n * n), Math[uo](i * i + e * e)]
      },
      _gr: function () {
        var t = this.m[0],
          i = this.m[2];
        return Math[uo](t * t + i * i)
      },
      _81: function () {
        return [this.m[4], this.m[5]]
      },
      _n9e: function () {
        var t = this.m[0],
          i = this.m[1],
          n = this.m[2],
          e = this.m[3];
        return [de(Math[Ur](i, e)), de(Math[Ur](-n, t))]
      },
      _ec: function () {
        return de(Math[Ur](this.m[1], this.m[3]))
      }
    }),
    Gq = I({
      constructor: function () {},
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      rotate: 0,
      set: function (t, i, n, e, s, h) {
        return this.x = t, this.y = i, this.width = n, this[Ba] = e, this[ko] = s, this[Vr] = Math.cos(s), this[el] = Math.sin(s), this[io] = h, this[uk] = null, this
      },
      _hk: function (t, i) {
        return t -= this.x, i -= this.y, this.rotate ? be(t, i, this[el], this[Vr]) : [t, i]
      },
      _7z: function (t) {
        var i = new PG;
        return i.add(this._hk(t.x, t.y)), i.add(this._hk(t.x + t[Na], t.y)), i.add(this._hk(t.x, t.y + t[Ba])), i.add(this._hk(t.x + t[Na], t.y + t[Ba])), i
      },
      _f6: function (t, i) {
        if (this[ko]) {
          var n = be(t, i, Math.sin(-this[ko]), Math.cos(-this.rotate));
          t = n[0], i = n[1]
        }
        return [this.x + t, this.y + i]
      },
      _5g: function (t, i) {
        var n = this._hk(t, i);
        return t = n[0], i = n[1], t >= 0 && i >= 0 && t <= this[Na] && i <= this[Ba]
      },
      intersects: function (t, i, n, e) {
        if (!this.rotate) return PG.intersects(this.x, this.y, this[Na], this[Ba], t, i, n, e);
        if (!n || !e) return this._5g(t, i);
        var s = this[_k]();
        if (!s[ol](t, i, n, e)) return !1;
        for (var h = s[Ta], r = 0; r < h[Wh];) {
          var a = h[r];
          if (PG[yo](t, i, n, e, a[0], a[1])) return !0;
          r++
        }
        var o = [
          [t, i],
          [t + n, i],
          [t, i + e],
          [t + n, i + e]
        ];
        for (r = 0; r < o[Wh];) {
          var a = o[r];
          if (this._5g(a[0], a[1])) return !0;
          r++
        }
        return ve(h, o)
      },
      getGlobalBounds: function () {
        return this[uk] || (this[uk] = this._68(0, 0, this[Na], this[Ba])), this[uk]
      },
      _68: function (t, i, n, e) {
        if (!this.rotate) return new PG(this.x + t, this.y + i, n, e);
        var s = [],
          h = new PG,
          r = this._f6(t, i);
        return s[ir](r), h.add(r[0], r[1]), r = this._f6(t + n, i), s[ir](r), h.add(r[0], r[1]), r = this._f6(t, i + e), s[ir](r), h.add(r[0], r[1]), r = this._f6(t + n, i + e), s.push(r), h.add(r[0], r[1]), h[Ta] = s, h
      },
      _3y: function (t, i, n, e, s) {
        var h;
        if (this[ko]) {
          var r = this._f6(t, i);
          h = (new Gq).set(r[0], r[1], n, e, this[ko], this[io])
        } else h = (new Gq).set(this.x + t, this.y + i, n, e, 0, this[io]);
        return h[vT] = [Math[xo](s * t), Math[xo](s * i), Math[xo](s * n), Math[xo](s * e)], h
      },
      _3k: function (t, i, n, e) {
        if (!this[ko]) {
          var s = PG[nf](this.x, this.y, this.width, this.height, t, i, n, e);
          return s && s[cx](-this.x, -this.y), s
        }
        var h = this._hk(t, i);
        return t = h[0], i = h[1], PG[nf](0, 0, this[Na], this.height, h[0], h[1], n, e)
      },
      equals: function (t) {
        return this.x == t.x && this.y == t.y && this[Na] == t.width && this.height == t[Ba] && this.rotate == t[ko]
      },
      toString: function () {
        return this.x + Rr + this.y + Rr + this[Na] + Rr + this[Ba] + Rr + this[ko]
      },
      toJSON: function () {
        return {
          x: this.x,
          y: this.y,
          width: this[Na],
          height: this[Ba],
          rotate: this.rotate,
          scale: this[io]
        }
      }
    }),
    Hq = {
      setStyle: bi,
      setStyles: li,
      addRule: gi,
      pre: rH
    },
    Yq = function (t, i, n, e) {
      this[zo] = t, this[Il] = i, this[Sl] = e, this[vr] = n, this[jl] = FH.PROPERTY_TYPE_STYLE
    };
  E(Yq, YG);
  var qq = function (t) {
    this.id = ++aG, this[iv] = {}, this._j8 = {}, t && (this.$name = t)
  };
  qq.prototype = {
    _j8: null,
    getStyle: function (t) {
      return this._j8[t]
    },
    setStyle: function (t, i) {
      var n = this._j8[t];
      return n === i || n && i && n.equals && n[bc](i) ? !1 : this[nv](t, i, new Yq(this, t, i, n), this._j8)
    },
    putStyles: function (t, i) {
      for (var n in t) {
        var e = t[n];
        i ? this._j8[n] = e : this[vu](n, e)
      }
    },
    _$t: !0,
    invalidateVisibility: function (t) {
      this._$t = !0, t || (this instanceof Uq && this[ik]() && this[Cc](function (t) {
        t._$t = !0
      }), this._i5() && this.hasChildren() && this[Rc](function (t) {
        t[dk]()
      }))
    },
    onParentChanged: function () {
      this[dk]()
    },
    _i5: function () {
      return !this._41 && this instanceof Zq
    },
    invalidate: function () {
      this[dr](new HG(this, lk, jw))
    },
    _n97: null,
    addUI: function (t, i) {
      if (this._n97 || (this[vk] = new kG), t.id || (t.id = ++aG), this[vk][Wd](t.id)) return !1;
      var n = {
        id: t.id,
        ui: t,
        bindingProperties: i
      };
      this._n97.add(n);
      var e = new HG(this, lk, Zl, n);
      return this.onEvent(e)
    },
    removeUI: function (t) {
      if (!this._n97) return !1;
      var i = this[vk][Yd](t.id);
      return i ? (this[vk][Qh](i), void this[dr](new HG(this, lk, Qh, i))) : !1
    },
    toString: function () {
      return this.$name || this.id
    },
    type: bk,
    _41: !1,
    _ht: !0,
    inGroup: function (t) {
      var i = Te(this);
      return i == t || i && t instanceof Zq && i.isDescendantOf(t)
    }
  }, E(qq, tH), j(qq.prototype, [qT, Co, Hw, gk]), K(qq.prototype, {
    enableSubNetwork: {
      get: function () {
        return this._41
      },
      set: function (t) {
        if (this._41 != t) {
          var i = this._41;
          this._41 = t, this instanceof Uq && this._11(), this.onEvent(new YG(this, h_, t, i))
        }
      }
    },
    bindingUIs: {
      get: function () {
        return this[vk]
      }
    },
    styles: {
      get: function () {
        return this._j8
      },
      set: function (t) {
        if (this._j8 != t) {
          for (var i in this._j8) i in t || (t[i] = n);
          this[yk](t), this._j8 = t
        }
      }
    }
  }), $H[xk] = Te;
  var Wq = function (t, i, n) {
    this.id = ++aG, this[iv] = {}, this._j8 = {}, n && (this[pk] = n), this[su] = t, this.$to = i, this.connect()
  };
  Wq.prototype = {
    $uiClass: bs,
    _k4: null,
    _i6: null,
    _k6: null,
    _ia: null,
    _eo: !1,
    type: mk,
    otherNode: function (t) {
      return t == this.from ? this.to : t == this.to ? this[gd] : void 0
    },
    connect: function () {
      if (this._eo) return !1;
      if (!this[su] || !this.$to) return !1;
      if (this._eo = !0, this[su] == this.$to) return void this.$from._if(this);
      Ce(this.$to, this), Pe(this.$from, this), ye(this.$from, this, this.$to);
      var t = this.fromAgent,
        i = this[mc];
      if (t != i) {
        var n;
        this[su]._du && (pe(t, this, i), n = !0), this.$to._du && (Ee(i, this, t), n = !0), n && ye(t, this, i)
      }
    },
    disconnect: function () {
      if (!this._eo) return !1;
      if (this._eo = !1, this[su] == this.$to) return void this[su][Ek](this);
      Le(this[su], this), Re(this.$to, this), xe(this[su], this, this.$to);
      var t = this[Pc],
        i = this.toAgent;
      if (t != i) {
        var n;
        this[su]._du && (me(t, this, i), n = !0), this.$to._du && (we(i, this, t), n = !0), n && xe(t, this, i)
      }
    },
    isConnected: function () {
      return this._eo
    },
    isInvalid: function () {
      return !this[su] || !this.$to
    },
    isLooped: function () {
      return this[su] == this.$to
    },
    getEdgeBundle: function (t) {
      return t ? this._2i() : this[Lc]() ? this.$from._46 : this[su].getEdgeBundle(this.$to)
    },
    hasEdgeBundle: function () {
      var t = this[Ec](!0);
      return t && t[wk].length > 1
    },
    _2i: function () {
      var t = this[Pc],
        i = this[mc];
      return t == i ? this.$from._du || this.$to._du ? null : this[su]._46 : this[Pc][Ec](this.toAgent)
    },
    _8u: null,
    hasPathSegments: function () {
      return this._8u && !this._8u[Lf]()
    },
    isBundleEnabled: function () {
      return this.bundleEnabled && !this[$u]()
    },
    firePathChange: function (t) {
      this[dr](new YG(this, Tk, t))
    },
    addPathSegment: function (t, i, n) {
      var e = new mY(i || bY, t);
      this._8u || (this._8u = new kG), this._8u.add(e, n), this[kk](e)
    },
    addPathSegement: function () {
      return $H.log('change "edge.addPathSegement(...)" to "edge.addPathSegment(...)"'), this[Mk][sr](this, arguments)
    },
    removePathSegmentByIndex: function (t) {
      if (!this._8u) return !1;
      var i = this._8u[Gd](t);
      i && (this._8u.remove(i), this[kk](i))
    },
    removePathSegment: function (t) {
      return this._8u ? (this._8u[Qh](t), void this.firePathChange(t)) : !1
    },
    movePathSegment: function (t, i, n) {
      if (!this._8u) return !1;
      if (t = t || 0, i = i || 0, $H[hp](n)) {
        var e = this._8u.getByIndex(n);
        return e ? (e[Pg](t, i), void this.firePathChange()) : !1
      }
      l(function (n) {
        n[Pg](t, i)
      }), this[kk]()
    },
    move: function (t, i) {
      return this._8u ? (this._8u[Vf](function (n) {
        n[Pg](t, i)
      }, this), void this[kk]()) : !1
    },
    validateEdgeBundle: function () {}
  }, E(Wq, qq), K(Wq[hr], {
    pathSegments: {
      get: function () {
        return this._8u
      },
      set: function (t) {
        $H[Or](t) && (t = new kG(t)), this._8u = t, this.firePathChange()
      }
    },
    from: {
      get: function () {
        return this.$from
      },
      set: function (t) {
        if (this.$from != t) {
          var i = new YG(this, gd, t, this[su]);
          this[_r](i) !== !1 && (this[gv](), this[su] = t, this[Ok](), this[dr](i))
        }
      }
    },
    to: {
      get: function () {
        return this.$to
      },
      set: function (t) {
        if (this.$to != t) {
          var i = new YG(this, Ik, t, this.$to);
          this[_r](i) !== !1 && (this[gv](), this.$to = t, this[Ok](), this.onEvent(i))
        }
      }
    },
    fromAgent: {
      get: function () {
        return this[su] ? this[su]._du || this[su] : null
      }
    },
    toAgent: {
      get: function () {
        return this.$to ? this.$to._du || this.$to : null
      }
    }
  }), j(Wq[hr], [Yu, {
    name: Sk,
    value: !0
  }, Vu]);
  var Uq = function (t, i, n) {
    2 == arguments.length && D(t) && (n = i, i = t, t = null), this.id = ++aG, this[iv] = {}, this._j8 = {}, t && (this[pk] = t), this[hu] = jk, this.$anchorPosition = CG[xl], this[Ak] = {
      x: i || 0,
      y: n || 0
    }, this[Pk] = {}
  };
  Uq.prototype = {
    $uiClass: gs,
    _du: null,
    forEachEdge: function (t, i, n) {
      return !n && this._kq && this._kq[Vf](t, i) === !1 ? !1 : Ne(this, t, i)
    },
    forEachOutEdge: function (t, i) {
      return Be(this, t, i)
    },
    forEachInEdge: function (t, i) {
      return $e(this, t, i)
    },
    getEdges: function () {
      var t = [];
      return this.forEachEdge(function (i) {
        t[ir](i)
      }), t
    },
    _ib: null,
    _gd: null,
    _jd: null,
    _id: null,
    _n5l: 0,
    _9a: 0,
    hasInEdge: function () {
      return null != this._ib
    },
    hasOutEdge: function () {
      return null != this._gd
    },
    hasEdge: function () {
      return null != this._ib || null != this._gd || this[Lk]()
    },
    linkedWith: function (t) {
      return t[gd] == this || t.to == this || t.fromAgent == this || t[mc] == this
    },
    hasEdgeWith: function (t) {
      var i = this[Ec](t);
      return i && i[wk][Wh] > 0
    },
    _kq: null,
    _46: null,
    hasLoops: function () {
      return this._kq && this._kq[Wh] > 0
    },
    _if: function (t) {
      return this._kq || (this._kq = new kG, this._46 = new _U(this, this, this._kq)), this._46._io(t)
    },
    _n9j: function (t) {
      return this._46 ? this._46._n9v(t) : void 0
    },
    getEdgeBundle: function (t) {
      return t == this ? this._46 : this._linkedNodes[t.id] || t[Pk][this.id]
    },
    _6h: function () {
      return this._9m && this._9m.length
    },
    _4s: function () {
      return this._7q && this._7q.length
    },
    _9i: function () {
      return this._6h() || this._4s()
    },
    _7q: null,
    _9m: null,
    _n9h: function () {
      var t = this._du,
        i = ge(this);
      if (t != i) {
        var n = De(this);
        this._90(i), n[Vf](function (t) {
          var i = t[Pc],
            n = t.toAgent,
            t = t.edge,
            e = t[su]._du,
            s = t.$to._du;
          i != n && (i && me(i, t, n || t.$to), n && we(n, t, i || t.$from)), e != s && (e && pe(e, t, s || t.$to), s && Ee(s, t, e || t[su]), ye(e || t[su], t, s || t.$to))
        }, this)
      }
    },
    onParentChanged: function () {
      $H[Ck](this, Uq, Rk, arguments), this[Dk]()
    },
    _7l: null,
    _11: function () {
      var t;
      if (this._41 ? t = null : (t = this._du, t || this._g4 !== !1 || (t = this)), this._7l == t) return !1;
      if (this._7l = t, this._f8 && this._f8._j5.length)
        for (var i, n = this._f8._j5, e = 0, s = n.length; s > e; e++) i = n[e], i instanceof Uq && i._90(t)
    },
    setLocation: function (t, i) {
      if (this.$location && this.$location.x == t && this[Ak].y == i) return !1;
      var n;
      n = this[Ak] ? {
        x: this.$location.x,
        y: this[Ak].y
      } : this[Ak];
      var e = new YG(this, Nk, n, {
        x: t,
        y: i
      });
      return this[_r](e) === !1 ? !1 : (this.$location ? (this[Ak].x = t, this.$location.y = i) : this[Ak] = new IG(t, i), this[dr](e), !0)
    },
    _de: null,
    addFollower: function (t) {
      return null == t ? !1 : t.host = this
    },
    removeFollower: function (t) {
      return this._de && this._de.contains(t) ? t[Bk] = null : !1
    },
    hasFollowers: function () {
      return this._de && !this._de[Lf]()
    },
    toFollowers: function () {
      return this[$k]() ? this._de[Fu]() : null
    },
    clearFollowers: function () {
      this.hasFollowers() && (this[Fk](), l(this.toFollowers(), function (t) {
        t.host = null
      }))
    },
    getFollowerIndex: function (t) {
      return this._de && this._de.contains(t) ? this._de[nr](t) : -1
    },
    setFollowerIndex: function (t, i) {
      return this._de && this._de[Ju](t) ? void this._de[jc](t, i) : -1
    },
    getFollowerCount: function () {
      return this._de ? this._de[Wh] : 0
    },
    _94: function () {
      return this._de ? this._de : (this._de = new kG, this._de)
    },
    isFollow: function (t) {
      if (!t || !this._host) return !1;
      for (var i = this[zk]; i;) {
        if (i == t) return !0;
        i = i[zk]
      }
      return !1
    },
    _90: function (t) {
      return t == this._du ? !1 : (this._du = t, this[dk](), void this._11())
    },
    type: Gk
  }, E(Uq, qq), K(Uq[hr], {
    loops: {
      get: function () {
        return this._kq
      }
    },
    edgeCount: {
      get: function () {
        return this[Tc] + this._9a
      }
    },
    agentNode: {
      get: function () {
        return this._du || this
      }
    },
    host: {
      set: function (t) {
        if (this == t || t == this[zk]) return !1;
        var i = new YG(this, Bk, this[zk], t);
        if (!1 === this[_r](i)) return !1;
        var n = null,
          e = null,
          s = this[zk];
        if (null != t && (n = new YG(t, Hk, null, this), !1 === t[_r](n))) return !1;
        if (null != s && (e = new YG(s, Yk, null, this), !1 === s[_r](e))) return !1;
        if (this[zk] = t, null != t) {
          var h = t._94();
          h.add(this)
        }
        if (null != s) {
          var h = s._94();
          h[Qh](this)
        }
        return this.onEvent(i), null != t && t.onEvent(n), null != s && s[dr](e), !0
      },
      get: function () {
        return this[zk]
      }
    }
  }), j(Uq[hr], [Nk, Pw, Bx, ko, qk]), K(Uq.prototype, {
    x: {
      get: function () {
        return this[Nk].x
      },
      set: function (t) {
        t != this.location.x && (this[Nk] = new IG(t, this[Nk].y))
      }
    },
    y: {
      get: function () {
        return this[Nk].y
      },
      set: function (t) {
        t != this[Nk].y && (this[Nk] = new IG(this.location.x, t))
      }
    }
  });
  var Vq = function (t, i) {
    t instanceof wY && (i = t, t = n), w(this, Vq, [t]), this[Wk] = i || new wY, this[qk] = null, this[qT] = ch, TG.SHAPENODE_STYLES || (TG.SHAPENODE_STYLES = {}, TG[Uk][Qq[Vk]] = !1), this[yk](TG[Uk])
  };
  Vq.prototype = {
    $uiClass: ch,
    type: Xk,
    moveTo: function (t, i) {
      this.path[Dc](t, i), this[kk]()
    },
    lineTo: function (t, i) {
      this.path[Nc](t, i), this[kk]()
    },
    quadTo: function (t, i, n, e) {
      this.path[Bc](t, i, n, e), this[kk]()
    },
    curveTo: function (t, i, n, e, s, h) {
      this[Wk].curveTo(t, i, n, e, s, h), this[kk]()
    },
    arcTo: function (t, i, n, e, s) {
      this.path[Zk](t, i, n, e, s), this[kk]()
    },
    closePath: function () {
      this.path[hf](), this[kk]()
    },
    clear: function () {
      this[Wk].clear(), this[kk]()
    },
    removePathSegmentByIndex: function (t) {
      this[Wk][Kk](t) !== !1 && this[kk]()
    },
    firePathChange: function () {
      this[Wk]._62 = !0, this[dr](new YG(this, Tk))
    },
    addPathSegment: function (t, i, n) {
      this[Wk].add(new mY(i || bY, t), n), this[kk]()
    }
  }, E(Vq, Uq), K(Vq[hr], {
    path: {
      get: function () {
        return this[Bx]
      },
      set: function (t) {
        this.image = t
      }
    },
    pathSegments: {
      get: function () {
        return this[Wk][Jk]
      },
      set: function (t) {
        this[Wk][Jk] = t || [], this.firePathChange()
      }
    },
    length: {
      get: function () {
        return this[Wk][Wh]
      }
    }
  }), $H.ShapeNode = Vq;
  var Xq = {
    _jk: {},
    register: function (t, i) {
      Xq._jk[t] = i
    },
    getShape: function (t, i, e, s, h, r) {
      s === n && (s = i, h = e, i = 0, e = 0), s || (s = 50), h || (h = 50);
      var a = Xq._jk[t];
      return a ? a[Qk] instanceof Function ? a.generator(i, e, s, h, r) : a : void 0
    },
    getRect: function (t, i, n, e, s, h, r) {
      return t instanceof Object && Na in t && (i = t.y, n = t[Na], e = t[Ba], s = t.rx, h = t.ry, r = t[Wk], t = t.x), Fe(r || new wY, t, i, n, e, s, h)
    },
    getAllShapes: function (t, i, n, e, s) {
      var h = {};
      for (var r in Xq._jk) {
        var a = Xq.getShape(r, t, i, n, e, s);
        a && (h[r] = a)
      }
      return h
    },
    createRegularShape: function (t, i, n, e, s) {
      return Ue(t, i, n, e, s)
    }
  };
  rs(), as[hr] = {
    type: tM
  }, E(as, Vq), $H.Bus = as, os[hr] = {
    _g7: function (t) {
      var i, n = t._jq;
      i = n ? n._f8 : this[vv];
      var e = i[nr](t);
      if (0 > e) throw new Error(Ev + t + "' not exist in the box");
      for (; e >= 0;) {
        if (0 == e) return n instanceof Uq ? n : null;
        e -= 1;
        var h = i[Gd](e);
        if (h = s(h)) return h
      }
      return null
    },
    forEachNode: function (t, i) {
      this.forEach(function (n) {
        return n instanceof Uq && t[Uh](i, n) === !1 ? !1 : void 0
      })
    },
    _30: null
  }, E(os, nH), K(os[hr], {
    propertyChangeDispatcher: {
      get: function () {
        return this._$x
      }
    },
    currentSubNetwork: {
      get: function () {
        return this._30
      },
      set: function (t) {
        if (t && !t[h_] && (t = null), this._30 != t) {
          var i = this._30;
          this._30 = t, this._$x[dr](new YG(this, iM, t, i))
        }
      }
    }
  }), TG[nM] = FH[eM], TG[sM] = 5, TG.GROUP_EXPANDED = !0, TG[hM] = {
    width: 60,
    height: 60
  };
  var Zq = function (t, i, e) {
    w(this, Zq, arguments), (i === n || e === n) && (this[Ak][rM] = !0), this[aM] = TG[nM], this[bf] = TG[sM], this[hu] = MY[oM], this[fM] = TG[hM], this[WT] = TG[cM]
  };
  Zq.prototype = {
    type: uM,
    $uiClass: hh,
    _n57: function () {
      return !this._g4 && !this._du
    },
    forEachOutEdge: function (t, i, n) {
      return Be(this, t, i) === !1 ? !1 : !n && this._n57() && this._7q ? this._7q[Vf](t, i) : void 0
    },
    forEachInEdge: function (t, i, n) {
      return $e(this, t, i) === !1 ? !1 : !n && this[_M]() && this._9m ? this._9m[Vf](t, i) : void 0
    },
    forEachEdge: function (t, i, n) {
      return T(this, Zq, Cc, arguments) === !1 ? !1 : n || n || !this[_M]() ? void 0 : this._9m && this._9m.forEach(t, i) === !1 ? !1 : this._7q ? this._7q[Vf](t, i) : void 0
    },
    hasInEdge: function (t) {
      return t ? null != this._ib : null != this._ib || this._6h()
    },
    hasOutEdge: function (t) {
      return t ? null != this._gd : null != this._gd || this._4s()
    },
    hasEdge: function (t) {
      return t ? null != this._ib || null != this._gd : null != this._ib || null != this._gd || this._9i()
    }
  }, E(Zq, Uq), K(Zq[hr], {
    expanded: {
      get: function () {
        return this._g4
      },
      set: function (t) {
        if (this._g4 != t) {
          var i = new YG(this, WT, t, this._g4);
          this[_r](i) !== !1 && (this._g4 = t, this._11(), this[dr](i), this._du || fs[Uh](this))
        }
      }
    }
  }), j(Zq[hr], [dM, lM, Bo, vM]), $H[bM] = Zq, cs.prototype[To] = gM, E(cs, Uq), $H[yM] = cs;
  var Kq = function (t) {
    this._jg = new PG, this._7p = new PG, this._fo = new PG, this.id = ++aG, t && (this[mo] = t)
  };
  Kq.prototype = {
    invalidate: function () {
      this[VT]()
    },
    _1f: !0,
    _jg: null,
    _7p: null,
    _fo: null,
    _n5h: !1,
    _jn: 1,
    _jp: 1,
    _ht: !0,
    _7k: 0,
    _6c: 0,
    _jq: null,
    _n5f: null,
    borderColor: xM,
    borderLineDash: null,
    borderLineDashOffset: null,
    syncSelection: !0,
    syncSelectionStyles: !0,
    _18: function () {
      this[pM] = fi(this.anchorPosition, this._7k, this._6c)
    },
    setMeasuredBounds: function (t, i, n, e) {
      return t instanceof Object && (n = t.x, e = t.y, i = t.height, t = t[Na]), this._jg[Na] == t && this._jg.height == i && this._jg.x == n && this._jg.y == e ? !1 : void this._jg.set(n || 0, e || 0, t || 0, i || 0)
    },
    initialize: function () {},
    measure: function () {},
    draw: function () {},
    _7n: function (t, i, n) {
      n.selectionType == FH.SELECTION_TYPE_SHADOW ? (t[P_] = n[ap], t.shadowBlur = n.selectionShadowBlur * i, t[Ax] = (n[fp] || 0) * i, t[Px] = (n.selectionShadowOffsetY || 0) * i) : this._1r(t, i, n)
    },
    _1r: function (t, i, n) {
      var e = n[_p] || 0;
      n[mM] && (t.fillStyle = n[mM], t[EM](this._7p.x - e / 2, this._7p.y - e / 2, this._7p[Na] + e, this._7p.height + e)), t[j_] = n[ap], t.lineWidth = e, t[wM](this._7p.x - e / 2, this._7p.y - e / 2, this._7p[Na] + e, this._7p[Ba] + e)
    },
    _js: function (t, i, n, e) {
      if (!this._ht) return !1;
      if (this[TM] || (n = this.selected), (n && !this[kM] || !e) && (e = this), t.save(), 1 != this[MM] && (t[OM] = this[MM]), t.translate(this.$x, this.$y), this[_f] && this.$_hostRotate && t[ko](this[df]), (this[IM] || this.offsetY) && t[to](this[IM], this.offsetY), this[ff] && t[ko](this[ff]), this[af] && this[ of ] && t.translate(-this._n5f.x, -this[ of ].y), this[P_] && (t[P_] = this.shadowColor, t[jx] = this[jx] * i, t[Ax] = this[Ax] * i, t[Px] = this[Px] * i), n && e[lp] == FH[SM] && (this._1r(t, i, e), n = !1), this._$u() && this[Tf] && !this[Tf][jM]) {
        this[Tf].validate();
        var s = {
          lineWidth: this.$border,
          strokeStyle: this[AM],
          lineDash: this[PM],
          lineDashOffset: this[LM],
          fillColor: this.$backgroundColor,
          fillGradient: this[Ef],
          lineCap: Ky,
          lineJoin: xo
        };
        this._lkShape[$o](t, i, s, n, e), n = !1, t[P_] = bp
      }
      t[Pp](), this[$o](t, i, n, e), t.restore()
    },
    invalidateData: function () {
      this[CM] = !0, this[lf] = !0, this._1f = !0
    },
    invalidateSize: function () {
      this[lf] = !0, this._1f = !0
    },
    invalidateRender: function () {
      this._1f = !0
    },
    _4q: function () {},
    _$u: function () {
      return this.$backgroundColor || this[RM] || this[yf]
    },
    _3p: function () {
      return this[DM] || this[RM]
    },
    doValidate: function () {
      return this[CM] && (this[CM] = !1, this[NM]() !== !1 && (this.$invalidateSize = !0)), this[lf] && this[BM] && this[BM](), Hn[Uh](this) ? (this[Rf] = !0, this.onBoundsChanged && this[$M](), !0) : this[FM] ? (this.$invalidateRotate = !0, this.$invalidateLocation = !1, !0) : void 0
    },
    validate: function () {
      var t = this._ht;
      return this.$invalidateVisibility && (this.$invalidateVisibility = !1, this._ht = this[zM], !this._ht || (this[$T] || this[GM]) && this._4q() !== !1 || (this._ht = !1)), this._ht ? (this._1f = !1, this[ru] || (this[HM](), this[ru] = !0), this.doValidate()) : t != this._ht
    },
    _hk: function (t, i) {
      return t -= this.$x, i -= this.$y, Gn[Uh](this, {
        x: t,
        y: i
      })
    },
    hitTest: function (t, i, n, e) {
      if (t -= this.$x, i -= this.$y, !this._fo.intersectsPoint(t, i, n)) return !1;
      var s = Gn.call(this, {
        x: t,
        y: i
      });
      return t = s.x, i = s.y, !e && this._$u() && this._lkShape && this[Tf][Qu](t, i, n, !1, this[yf], this.$backgroundColor || this[RM]) ? !0 : this.doHitTest(t, i, n)
    },
    doHitTest: function (t, i, n) {
      return this._jg[yo](t, i, n)
    },
    hitTestByBounds: function (t, i, n, e) {
      var s = this._hk(t, i);
      return !e && this._$u() && this[Tf] && this._lkShape[Qu](t, i, n, !1, this.$border, this[DM] || this[RM]) ? !0 : this._jg.intersectsPoint(s.x, s.y, n)
    },
    onDataChanged: function () {
      this[CM] = !0, this._1f = !0, this[YM] = !0
    },
    getBounds: function () {
      var t = this._fo[tr]();
      return t[cx](this.x, this.y), this[pc] && (this[pc].rotate && Ii(t, this[pc][ko], t), t[cx](this[pc].x || 0, this[pc].y || 0)), t
    },
    destroy: function () {
      this[Lm] = !0
    },
    _dg: !1
  }, K(Kq[hr], {
    originalBounds: {
      get: function () {
        return this._jg
      }
    },
    data: {
      get: function () {
        return this[$T]
      },
      set: function (t) {
        if (this[$T] != t) {
          var i = this.$data;
          this[$T] = t, this[qM](t, i)
        }
      }
    },
    parent: {
      get: function () {
        return this._jq
      }
    },
    showOnTop: {
      get: function () {
        return this._dg
      },
      set: function (t) {
        t != this._dg && (this._dg = t, this._1f = !0, this._jq && this._jq._n5o && this._jq._n5o(this))
      }
    }
  }), _s(Kq.prototype, {
    visible: {
      value: !0,
      validateFlags: [WM, UM]
    },
    showEmpty: {
      validateFlags: [WM]
    },
    anchorPosition: {
      value: CG[xl],
      validateFlags: [VM, UM]
    },
    position: {
      value: CG[xl],
      validateFlags: [UM]
    },
    offsetX: {
      value: 0,
      validateFlags: [UM]
    },
    offsetY: {
      value: 0,
      validateFlags: [UM]
    },
    layoutByAnchorPoint: {
      value: !0,
      validateFlags: [XM, VM, UM]
    },
    padding: {
      value: 0,
      validateFlags: [XM]
    },
    border: {
      value: 0,
      validateFlags: [XM]
    },
    borderRadius: {
      value: TG[ZM]
    },
    showPointer: {
      value: !1,
      validateFlags: [XM]
    },
    pointerX: {
      value: 0,
      validateFlags: [XM]
    },
    pointerY: {
      value: 0,
      validateFlags: [XM]
    },
    pointerWidth: {
      value: TG.POINTER_WIDTH
    },
    backgroundColor: {
      validateFlags: [XM]
    },
    backgroundGradient: {
      validateFlags: [XM, KM]
    },
    selected: {
      value: !1,
      validateFlags: [XM]
    },
    selectionBorder: {
      value: TG[JM],
      validateFlags: [XM]
    },
    selectionShadowBlur: {
      value: TG[hx],
      validateFlags: [XM]
    },
    selectionColor: {
      value: TG[rx],
      validateFlags: [XM]
    },
    selectionType: {
      value: TG.SELECTION_TYPE,
      validateFlags: [XM]
    },
    selectionShadowOffsetX: {
      value: 0,
      validateFlags: [XM]
    },
    selectionShadowOffsetY: {
      value: 0,
      validateFlags: [XM]
    },
    shadowBlur: {
      value: 0,
      validateFlags: [XM]
    },
    shadowColor: {
      validateFlags: [XM]
    },
    shadowOffsetX: {
      value: 0,
      validateFlags: [XM]
    },
    shadowOffsetY: {
      value: 0,
      validateFlags: [XM]
    },
    renderColorBlendMode: {},
    renderColor: {},
    x: {
      value: 0,
      validateFlags: [UM]
    },
    y: {
      value: 0,
      validateFlags: [UM]
    },
    rotatable: {
      value: !0,
      validateFlags: [QM, XM]
    },
    rotate: {
      value: 0,
      validateFlags: [QM, XM]
    },
    _hostRotate: {
      validateFlags: [QM]
    },
    lineWidth: {
      value: 0,
      validateFlags: [Vg]
    },
    alpha: {
      value: 1
    }
  });
  var Jq = [FH[tO], FH.PROPERTY_TYPE_STYLE, FH[lu]];
  ls.prototype = {
    removeBinding: function (t) {
      for (var i = Jq[Wh]; --i >= 0;) {
        var n = Jq[i],
          e = this[n];
        for (var s in e) {
          var h = e[s];
          Array[Or](h) ? (v(h, function (i) {
            return i[fu] == t
          }, this), h[Wh] || delete e[s]) : h[fu] == t && delete e[s]
        }
      }
    },
    _1s: function (t, i, n) {
      if (!n && (n = this[i[jl] || FH[tO]], !n)) return !1;
      var e = n[t];
      e ? (Array.isArray(e) || (n[t] = e = [e]), e.push(i)) : n[t] = i
    },
    _2c: function (t, i, n, e, s, h) {
      t = t || FH[tO];
      var r = this[t];
      if (!r) return !1;
      var a = {
        property: i,
        propertyType: t,
        bindingProperty: e,
        target: n,
        callback: s,
        invalidateSize: h
      };
      this._1s(i, a, r)
    },
    onBindingPropertyChange: function (t, i, n, e) {
      var s = this[n || FH.PROPERTY_TYPE_ACCESSOR];
      if (!s) return !1;
      var h = s[i];
      return h ? (t._1f = !0, ds(t, h, n, e), !0) : !1
    },
    initBindingProperties: function (t, i) {
      for (var e = Jq.length; --e >= 0;) {
        var s = Jq[e],
          h = this[s];
        for (var r in h) {
          var a = h[r];
          if (a.bindingProperty) {
            var o = a[fu];
            if (o) {
              if (!(o instanceof Kq || (o = t[o]))) continue
            } else o = t;
            var f;
            f = i === !1 ? t[cu](a[uu], s) : s == FH[iO] ? t[Gu][gu](t[$T], a[uu]) : t[$T][a[uu]], f !== n && (o[a[_u]] = f)
          }
        }
      }
    }
  };
  var Qq = {};
  Qq[rx] = nO, Qq[JM] = eO, Qq[hx] = "selection.shadow.blur", Qq[sO] = "selection.shadow.offset.x", Qq[hO] = "selection.shadow.offset.y", Qq[ex] = rO, Qq[aO] = oO, Qq.RENDER_COLOR_BLEND_MODE = "render.color.blend.mode", Qq[fO] = cO, Qq[uO] = _O, Qq[dO] = lO, Qq[vO] = bO, Qq[gO] = yO, Qq.SHAPE_STROKE = xO, Qq[pO] = mO, Qq[EO] = "shape.stroke.fill.color", Qq.SHAPE_LINE_DASH = wO, Qq[TO] = "shape.line.dash.offset", Qq.SHAPE_FILL_COLOR = kO, Qq.SHAPE_FILL_GRADIENT = MO, Qq.SHAPE_OUTLINE = OO, Qq.SHAPE_OUTLINE_STYLE = IO, Qq[SO] = jO, Qq[AO] = PO, Qq[LO] = CO, Qq.BORDER = RO, Qq[DO] = NO, Qq.BORDER_LINE_DASH = BO, Qq.BORDER_LINE_DASH_OFFSET = "border.line.dash.offset", Qq[ZM] = $O, Qq[FO] = Bo, Qq.LINE_CAP = zO, Qq[GO] = HO, Qq.LINE_DASH_CAP = YO, Qq[qO] = WO, Qq[UO] = "image.background.color", Qq.IMAGE_BACKGROUND_GRADIENT = "image.background.gradient", Qq[VO] = XO, Qq[ZO] = Qq[KO] = JO, Qq[QO] = "image.border.line.dash", Qq[tI] = "image.border.line.dash.offset", Qq[iI] = Qq[nI] = eI, Qq.IMAGE_PADDING = sI, Qq[hI] = rI, Qq.IMAGE_ADJUST = aI, Qq[oI] = fI, Qq[cI] = uI, Qq[_I] = dI, Qq[lI] = vI, Qq[bI] = "label.anchor.position", Qq[gI] = yI, Qq.LABEL_FONT_SIZE = xI, Qq[pI] = mI, Qq[EI] = wI, Qq.LABEL_PADDING = TI, Qq[kI] = MI, Qq[OI] = II, Qq.LABEL_RADIUS = SI, Qq.LABEL_OFFSET_X = jI, Qq[AI] = PI, Qq.LABEL_SIZE = LI, Qq[CI] = RI, Qq[DI] = NI, Qq[BI] = $I, Qq[FI] = "label.background.color", Qq.LABEL_BACKGROUND_GRADIENT = "label.background.gradient", Qq.LABEL_ROTATABLE = zI, Qq[GI] = HI, Qq[YI] = qI, Qq[WI] = "label.shadow.offset.x", Qq[UI] = "label.shadow.offset.y", Qq.LABEL_Z_INDEX = VI, Qq[XI] = ZI, Qq.GROUP_BACKGROUND_COLOR = "group.background.color", Qq[KI] = "group.background.gradient", Qq[JI] = QI, Qq[tS] = iS, Qq[nS] = "group.stroke.line.dash", Qq[eS] = "group.stroke.line.dash.offset", Qq[sS] = "edge.bundle.label.rotate", Qq[hS] = "edge.bundle.label.position", Qq[rS] = "edge.bundle.label.anchor.position", Qq[aS] = "edge.bundle.label.color", Qq.EDGE_BUNDLE_LABEL_FONT_SIZE = "edge.bundle.label.font.size", Qq[oS] = "edge.bundle.label.font.family", Qq[fS] = "edge.bundle.label.font.style", Qq[cS] = "edge.bundle.label.padding", Qq[uS] = "edge.bundle.label.pointer.width", Qq[_S] = "edge.bundle.label.pointer", Qq[dS] = "edge.bundle.label.radius", Qq[lS] = "edge.bundle.label.offset.x", Qq.EDGE_BUNDLE_LABEL_OFFSET_Y = "edge.bundle.label.offset.y", Qq[vS] = "edge.bundle.label.border", Qq[bS] = "edge.bundle.label.border.color", Qq[gS] = "edge.bundle.label.background.color", Qq[yS] = "edge.bundle.label.background.gradient", Qq[xS] = "edge.bundle.label.rotatable", Qq[pS] = mS, Qq[ES] = wS, Qq[TS] = kS, Qq[MS] = OS, Qq[IS] = SS, Qq[jS] = "edge.line.dash.offset", Qq[Wu] = AS, Qq.EDGE_TO_OFFSET = PS, Qq[LS] = CS, Qq.EDGE_BUNDLE_GAP = RS, Qq[n_] = DS, Qq.EDGE_EXTEND = NS, Qq[Cu] = BS, Qq[Su] = "edge.split.by.percent", Qq[yu] = $S, Qq[xu] = FS, Qq.EDGE_CORNER = zS, Qq[GS] = HS, Qq[YS] = qS, Qq[WS] = US, Qq[VS] = XS, Qq.ARROW_FROM_SIZE = ZS, Qq[KS] = JS, Qq[QS] = tj, Qq[ij] = "arrow.from.stroke.style", Qq[nj] = ej, Qq[sj] = "arrow.from.outline.style", Qq[hj] = rj, Qq[aj] = "arrow.from.line.dash.offset", Qq.ARROW_FROM_FILL_COLOR = "arrow.from.fill.color", Qq.ARROW_FROM_FILL_GRADIENT = "arrow.from.fill.gradient", Qq.ARROW_FROM_LINE_CAP = oj, Qq[fj] = cj, Qq.ARROW_TO = uj, Qq[_j] = dj, Qq[lj] = vj, Qq.ARROW_TO_STROKE = bj, Qq.ARROW_TO_STROKE_STYLE = "arrow.to.stroke.style", Qq.ARROW_TO_OUTLINE = gj, Qq.ARROW_TO_OUTLINE_STYLE = "arrow.to.outline.style", Qq[yj] = xj, Qq[pj] = "arrow.to.line.dash.offset", Qq.ARROW_TO_FILL_COLOR = mj, Qq[Ej] = "arrow.to.fill.gradient", Qq[wj] = Tj, Qq[kj] = Mj;
  var tW = new ls,
    iW = FH[tO],
    nW = FH[iO],
    eW = !1;
  tW._2c(nW, Qq.SELECTION_TYPE, null, lp), tW._2c(nW, Qq.SELECTION_BORDER, null, _p), tW._2c(nW, Qq.SELECTION_SHADOW_BLUR, null, op), tW._2c(nW, Qq[rx], null, ap), tW._2c(nW, Qq[sO], null, "selectionShadowOffsetX"), tW._2c(nW, Qq.SELECTION_SHADOW_OFFSET_Y, null, "selectionShadowOffsetY"), tW._2c(iW, Co, fE, mo), tW._2c(nW, Qq[lI], fE, cT), tW._2c(nW, Qq.LABEL_POSITION, fE, Af), tW._2c(nW, Qq[bI], fE, qk), tW._2c(nW, Qq[gI], fE, Oj), tW._2c(nW, Qq.LABEL_FONT_SIZE, fE, X_), tW._2c(nW, Qq[DI], fE, fy), tW._2c(nW, Qq.LABEL_BORDER_STYLE, fE, AM), tW._2c(nW, Qq.LABEL_BACKGROUND_COLOR, fE, Ij), tW._2c(nW, Qq.LABEL_ON_TOP, fE, Sj), eW || (tW._2c(nW, Qq.SHADOW_BLUR, null, jx), tW._2c(nW, Qq[dO], null, P_), tW._2c(nW, Qq.SHADOW_OFFSET_X, null, Ax), tW._2c(nW, Qq[gO], null, Px), tW._2c(nW, Qq[pI], fE, Z_), tW._2c(nW, Qq[EI], fE, V_), tW._2c(nW, Qq[CI], fE, jj), tW._2c(nW, Qq.LABEL_ROTATE, fE, ko), tW._2c(nW, Qq.LABEL_PADDING, fE, Bo), tW._2c(nW, Qq[kI], fE, Aj), tW._2c(nW, Qq[OI], fE, xf), tW._2c(nW, Qq.LABEL_RADIUS, fE, Pj), tW._2c(nW, Qq[Lj], fE, IM), tW._2c(nW, Qq[AI], fE, Cj), tW._2c(nW, Qq[Rj], fE, Dj), tW._2c(nW, Qq.LABEL_BACKGROUND_GRADIENT, fE, wf), tW._2c(nW, Qq[Nj], fE, Pw), tW._2c(nW, Qq[GI], fE, jx), tW._2c(nW, Qq[YI], fE, P_), tW._2c(nW, Qq[WI], fE, Ax), tW._2c(nW, Qq.LABEL_SHADOW_OFFSET_Y, fE, Px), tW._2c(nW, Qq.LABEL_Z_INDEX, fE, Hw), tW._2c(nW, Qq.RENDER_COLOR, null, Rx), tW._2c(nW, Qq[Bj], null, $j), tW._2c(nW, Qq.ALPHA, null, cO));
  var sW = new ls;
  sW._2c(iW, Nk), sW._2c(iW, qk, null, Fj), sW._2c(iW, ko, null, ko), eW || (sW._2c(nW, Qq[AO], null, Ij), sW._2c(nW, Qq[LO], null, wf), sW._2c(nW, Qq[FO], null, Bo), sW._2c(nW, Qq[zj], null, fy), sW._2c(nW, Qq[ZM], null, Pj), sW._2c(nW, Qq.BORDER_COLOR, null, AM), sW._2c(nW, Qq[Gj], null, PM), sW._2c(nW, Qq[Hj], null, LM)), sW._2c(iW, Bx, Bx, mo, Yj), sW._2c(iW, Pw, Bx, Pw), sW._2c(nW, Qq.SHAPE_STROKE, Bx, O_), sW._2c(nW, Qq[pO], Bx, j_), sW._2c(nW, Qq[qj], Bx, gp), sW._2c(nW, Qq[SO], Bx, Pf), eW || (sW._2c(nW, Qq[Wj], Bx, Uj), sW._2c(nW, Qq[Vj], Bx, dp), sW._2c(nW, Qq[Xj], Bx, vp), sW._2c(nW, Qq[Zj], Bx, yp), sW._2c(nW, Qq.SHAPE_LINE_DASH, Bx, Df), sW._2c(nW, Qq[TO], Bx, Ff), sW._2c(nW, Qq[Kj], Bx, I_), sW._2c(nW, Qq.LINE_JOIN, Bx, S_), sW._2c(nW, Qq[UO], Bx, Ij), sW._2c(nW, Qq[Jj], Bx, wf), sW._2c(nW, Qq[Qj], Bx, Bo), sW._2c(nW, Qq[VO], Bx, fy), sW._2c(nW, Qq[nI], Bx, Pj), sW._2c(nW, Qq[KO], Bx, AM), sW._2c(nW, Qq[QO], Bx, PM), sW._2c(nW, Qq.IMAGE_BORDER_LINE_DASH_OFFSET, Bx, LM), sW._2c(nW, Qq[hI], Bx, Hw), sW._2c(nW, Qq[oI], Bx, cO)), sW._2c(iW, WT, null, null, tA), sW._2c(iW, h_, null, null, tA);
  var hW = new ls;
  hW._2c(iW, lM, null, null, iA), hW._2c(iW, vM, null, null, iA), hW._2c(iW, dM, null, null, iA), hW._2c(iW, Bo, null, null, iA), hW._2c(nW, Qq[nA], eA, gp), hW._2c(nW, Qq[KI], eA, yp), hW._2c(nW, Qq[JI], eA, O_), hW._2c(nW, Qq[tS], eA, j_), hW._2c(nW, Qq[nS], eA, Df), hW._2c(nW, Qq[eS], eA, Ff);
  var rW = new ls;
  rW._2c(iW, gd, eA, null, sA), rW._2c(iW, Ik, eA, null, sA), rW._2c(iW, Yu, eA, null, sA), rW._2c(nW, Qq.EDGE_EXTEND, eA, null, sA), rW._2c(nW, Qq[pS], eA, O_), rW._2c(nW, Qq[ES], eA, j_), rW._2c(nW, Qq[VS], eA, hA), rW._2c(nW, Qq[Vk], eA, rA), eW || (rW._2c(nW, Qq.LINE_DASH_CAP, eA, mp), rW._2c(nW, Qq[qO], eA, Ep), rW._2c(nW, Qq.EDGE_FILL_COLOR, eA, pp), rW._2c(nW, Qq.EDGE_FROM_AT_EDGE, null, Zu, sA), rW._2c(nW, Qq[WS], null, Ku, sA), rW._2c(nW, Qq[TS], eA, dp), rW._2c(nW, Qq[MS], eA, vp), rW._2c(nW, Qq[IS], eA, Df), rW._2c(nW, Qq[jS], eA, Ff), rW._2c(nW, Qq[Cu], eA, null, sA), rW._2c(nW, Qq.EDGE_FROM_OFFSET, eA, null, sA), rW._2c(nW, Qq[Uu], eA, null, sA), rW._2c(nW, Qq.LINE_CAP, eA, I_), rW._2c(nW, Qq[GO], eA, S_), rW._2c(iW, Tk, null, null, sA, !0), rW._2c(iW, Vu, null, null, sA, !0), rW._2c(nW, Qq[aA], eA, oA), rW._2c(nW, Qq.ARROW_FROM_OFFSET, eA, fA), rW._2c(nW, Qq.ARROW_FROM_STROKE, eA, cA), rW._2c(nW, Qq[ij], eA, uA), rW._2c(nW, Qq.ARROW_FROM_OUTLINE, eA, _A), rW._2c(nW, Qq[sj], eA, "fromArrowOutlineStyle"), rW._2c(nW, Qq[dA], eA, lA), rW._2c(nW, Qq[vA], eA, "fromArrowFillGradient"), rW._2c(nW, Qq[hj], eA, bA), rW._2c(nW, Qq[aj], eA, "fromArrowLineDashOffset"), rW._2c(nW, Qq.ARROW_FROM_LINE_JOIN, eA, gA), rW._2c(nW, Qq[yA], eA, xA), rW._2c(nW, Qq.ARROW_TO_SIZE, eA, pA), rW._2c(nW, Qq[lj], eA, mA), rW._2c(nW, Qq[EA], eA, wA), rW._2c(nW, Qq.ARROW_TO_STROKE_STYLE, eA, TA), rW._2c(nW, Qq[kA], eA, MA), rW._2c(nW, Qq.ARROW_TO_OUTLINE_STYLE, eA, OA), rW._2c(nW, Qq.ARROW_TO_FILL_COLOR, eA, IA), rW._2c(nW, Qq[Ej], eA, SA), rW._2c(nW, Qq[yj], eA, jA), rW._2c(nW, Qq[pj], eA, "toArrowLineDashOffset"), rW._2c(nW, Qq[kj], eA, AA), rW._2c(nW, Qq.ARROW_TO_LINE_CAP, eA, PA));
  var aW = new ls;
  aW._2c(nW, Qq[aS], LA, Oj), aW._2c(nW, Qq[hS], LA, Af), aW._2c(nW, Qq.EDGE_BUNDLE_LABEL_ANCHOR_POSITION, LA, qk), aW._2c(nW, Qq[CA], LA, X_), aW._2c(nW, Qq[xS], LA, Dj), eW || (aW._2c(nW, Qq[sS], LA, ko), aW._2c(nW, Qq[oS], LA, Z_), aW._2c(nW, Qq[fS], LA, V_), aW._2c(nW, Qq[cS], LA, Bo), aW._2c(nW, Qq.EDGE_BUNDLE_LABEL_POINTER_WIDTH, LA, Aj), aW._2c(nW, Qq.EDGE_BUNDLE_LABEL_POINTER, LA, xf), aW._2c(nW, Qq[dS], LA, Pj), aW._2c(nW, Qq[lS], LA, IM), aW._2c(nW, Qq[RA], LA, Cj), aW._2c(nW, Qq[vS], LA, fy), aW._2c(nW, Qq[bS], LA, AM), aW._2c(nW, Qq[gS], LA, Ij), aW._2c(nW, Qq.EDGE_BUNDLE_LABEL_BACKGROUND_GRADIENT, LA, wf));
  var oW = new ls;
  oW._2c(iW, Nk), oW._2c(nW, Qq[AO], null, Ij), oW._2c(nW, Qq[LO], null, wf), oW._2c(nW, Qq[FO], null, Bo), oW._2c(nW, Qq[zj], null, fy), oW._2c(nW, Qq[ZM], null, Pj), oW._2c(nW, Qq[DO], null, AM), oW._2c(nW, Qq[Gj], null, PM), oW._2c(nW, Qq[Hj], null, LM), oW._2c(iW, ko, null, ko), oW._2c(iW, Tk, null, null, DA), oW._2c(iW, Wk, Bx, mo), oW._2c(iW, Pw, Bx, Pw), oW._2c(nW, Qq[NA], Bx, O_), oW._2c(nW, Qq[pO], Bx, j_), oW._2c(nW, Qq[qj], Bx, gp), oW._2c(nW, Qq.SHAPE_FILL_GRADIENT, Bx, yp), eW || (oW._2c(nW, Qq[BA], Bx, mp), oW._2c(nW, Qq[qO], Bx, Ep), oW._2c(nW, Qq[EO], Bx, pp), oW._2c(nW, Qq.SHAPE_OUTLINE, Bx, dp), oW._2c(nW, Qq[Xj], Bx, vp), oW._2c(nW, Qq.SHAPE_LINE_DASH, Bx, Df), oW._2c(nW, Qq.SHAPE_LINE_DASH_OFFSET, Bx, Ff), oW._2c(nW, Qq.LINE_CAP, Bx, I_), oW._2c(nW, Qq.LINE_JOIN, Bx, S_), oW._2c(nW, Qq[SO], Bx, Pf), oW._2c(nW, Qq[UO], Bx, Ij), oW._2c(nW, Qq[Jj], Bx, wf), oW._2c(nW, Qq[Qj], Bx, Bo), oW._2c(nW, Qq.IMAGE_BORDER, Bx, fy), oW._2c(nW, Qq[nI], Bx, Pj), oW._2c(nW, Qq.IMAGE_BORDER_COLOR, Bx, AM), oW._2c(nW, Qq[QO], Bx, PM), oW._2c(nW, Qq[tI], Bx, LM), oW._2c(nW, Qq.ARROW_FROM, Bx, hA), oW._2c(nW, Qq.ARROW_FROM_SIZE, Bx, oA), oW._2c(nW, Qq[KS], Bx, fA), oW._2c(nW, Qq[QS], Bx, cA), oW._2c(nW, Qq[ij], Bx, uA), oW._2c(nW, Qq.ARROW_FROM_FILL_COLOR, Bx, lA), oW._2c(nW, Qq[vA], Bx, "fromArrowFillGradient"), oW._2c(nW, Qq[hj], Bx, bA), oW._2c(nW, Qq[aj], Bx, "fromArrowLineDashOffset"), oW._2c(nW, Qq[fj], Bx, gA), oW._2c(nW, Qq.ARROW_FROM_LINE_CAP, Bx, xA), oW._2c(nW, Qq[_j], Bx, pA), oW._2c(nW, Qq[lj], Bx, mA), oW._2c(nW, Qq.ARROW_TO, Bx, rA), oW._2c(nW, Qq[EA], Bx, wA), oW._2c(nW, Qq[$A], Bx, TA), oW._2c(nW, Qq.ARROW_TO_FILL_COLOR, Bx, IA), oW._2c(nW, Qq[Ej], Bx, SA), oW._2c(nW, Qq[yj], Bx, jA), oW._2c(nW, Qq[pj], Bx, "toArrowLineDashOffset"), oW._2c(nW, Qq[kj], Bx, AA), oW._2c(nW, Qq.ARROW_TO_LINE_CAP, Bx, PA));
  var fW = function (t, i) {
      return t = t.zIndex, i = i[Hw], t == i ? 0 : (t = t || 0, i = i || 0, t > i ? 1 : i > t ? -1 : void 0)
    },
    cW = function (t, i) {
      this[IT] = new PG, w(this, cW, arguments), this.id = this.$data.id, this[Gu] = i, this._f8 = [], this[FA] = new ls
    };
  cW.prototype = {
    syncSelection: !1,
    graph: null,
    layoutByAnchorPoint: !1,
    _n96: null,
    _f8: null,
    addChild: function (t, i) {
      t._jq = this, i !== n ? y(this._f8, t, i) : this._f8.push(t), t._dg && this[zA](t), this[GA](), this.invalidateSize(), this.$invalidateChild = !0
    },
    removeChild: function (t) {
      this[FA][HA](t), t._jq = null, x(this._f8, t), this._jt && this._jt[Qh](t), this[YA](), this[qA] = !0
    },
    getProperty: function (t, i) {
      return i == FH[iO] ? this[Gu].getStyle(this.$data, t) : i == FH[lu] ? this.$data.get(t) : this.$data[t]
    },
    getStyle: function (t) {
      return this[Gu][gu](this[$T], t)
    },
    _$z: function (t, i, n) {
      var e = this._n96.onBindingPropertyChange(this, t, i, n);
      return tW[WA](this, t, i, n) || e
    },
    onPropertyChange: function (t) {
      if (Hw == t[Il]) return this[HT](), !0;
      if (lk == t[To]) {
        if (jw == t[Il]) return this[jw](), !0;
        var i = t[vr];
        return i && i.ui ? (Zl == t[Il] ? this._93(i) : Qh == t[Il] && this[xv](i.ui), !0) : !1
      }
      return this._$z(t[Il], t[jl] || iW, t[vr])
    },
    label: null,
    initLabel: function () {
      var t = new _W;
      t[Co] = fE, this.addChild(t), this[fE] = t
    },
    initialize: function () {
      this[UA](), this[$T]._n97 && this[$T][vk][Vf](this._93, this), tW[VA](this), this[FA].initBindingProperties(this, !1)
    },
    addBinding: function (t, i) {
      return i.property ? (i[fu] = t, void this[FA]._1s(i[uu], i)) : !1
    },
    _g1: function (t, i) {
      var n = this.$data;
      if (!n._n97) return !1;
      var e = n._n97[Yd](t.id);
      if (!e || !e[XA]) return !1;
      var s = e[XA];
      if ($(s)) {
        var h = !1;
        return l(s, function (t) {
          return mo == t.bindingProperty ? (h = vs(n, i, t[uu], t[jl]), !1) : void 0
        }, this), h
      }
      return mo == s[_u] ? vs(n, i, s.property, s[jl]) : !1
    },
    _93: function (t) {
      var i = t.ui;
      if (i) {
        var n = t[XA];
        n && (Array[Or](n) ? n[Vf](function (t) {
          this[ZA](i, t)
        }, this) : this[ZA](i, n)), this[KA](i)
      }
    },
    validate: function () {
      return this[ru] || (this[HM](), this[ru] = !0), this.doValidate()
    },
    _$j: !0,
    invalidateChildrenIndex: function () {
      this._$j = !0
    },
    doValidate: function () {
      if (this._1f && (this._1f = !1, this.validateChildren() && (this[NM](), this[lf] = !0), this._$j && (this._$j = !1, bG ? this._f8 = d(this._f8, fW) : this._f8[Gw](fW))), Hn.call(this) && (this[Rf] = !0), this[Rf]) {
        IY[Uh](this), this.uiBounds.setByRect(this._fo);
        var t = this[JA] || 0,
          i = Math.max(this[JA] || 0, this[QA] || 0, this[tP] || 0),
          n = Math.max(this[iP] || 0, this[nP] || 0),
          e = Math.max(2 * t, this[eP], this[sP]);
        e += TG[hP] || 0;
        var s = e - i,
          h = e + i,
          r = e - n,
          a = e + n;
        return 0 > s && (s = 0), 0 > h && (h = 0), 0 > r && (r = 0), 0 > a && (a = 0), this[IT].grow(r, s, a, h), this.onBoundsChanged && this[$M](), this[rP] = !0, !0
      }
    },
    validateChildren: function () {
      var t = this[qA];
      this.$invalidateChild = !1;
      var i = this[aP],
        n = this.bodyChanged;
      i && (i[oP] = this[oP], i[fP] = this[fP], i.$shadowColor = this[cP], i[eP] = this[eP], i.$shadowOffsetX = this[QA], i[iP] = this[iP]), this[uP] = !1, i && i._1f && (n = i.validate() || n, i.$x = 0, i.$y = 0, i.$invalidateRotate && IY[Uh](i), t = !0);
      for (var e = 0, s = this._f8.length; s > e; e++) {
        var h = this._f8[e];
        if (h != i) {
          var r = h._1f && h.validate();
          (r || n) && h._ht && Un(h, i, this), !t && r && (t = !0)
        }
      }
      return t
    },
    measure: function () {
      this._jg[$a]();
      for (var t, i, n = 0, e = this._f8[Wh]; e > n; n++) t = this._f8[n], t._ht && (i = t._fo, i[Na] <= 0 || i[Ba] <= 0 || this._jg[GT](t.$x + i.x, t.$y + i.y, i.width, i[Ba]))
    },
    _jt: null,
    _n5o: function (t) {
      if (!this._jt) {
        if (!t[Sj]) return;
        return this._jt = new kG, this._jt.add(t)
      }
      return t[Sj] ? this._jt.add(t) : this._jt[Qh](t)
    },
    draw: function (t, i, n) {
      for (var e, s = 0, h = this._f8[Wh]; h > s; s++) e = this._f8[s], e._ht && !e[Sj] && e._js(t, i, n, this)
    },
    _9k: function (t, i) {
      if (!this._ht || !this._jt || !this._jt.length) return !1;
      t[Ex](), t[to](this.$x, this.$y), this[_f] && this[df] && t[ko](this[df]), (this[IM] || this[Cj]) && t.translate(this[IM], this[Cj]), this[ff] && t[ko](this.$rotate), this[af] && this[ of ] && t.translate(-this[ of ].x, -this._n5f.y), this[P_] && (t[P_] = this[P_], t.shadowBlur = this[jx] * i, t[Ax] = this.shadowOffsetX * i, t.shadowOffsetY = this[Px] * i), t[Pp]();
      for (var n, e = 0, s = this._f8[Wh]; s > e; e++) n = this._f8[e], n._ht && n.showOnTop && n._js(t, i, this.selected, this);
      t[oo]()
    },
    doHitTest: function (t, i, n) {
      if (n) {
        if (!this._jg[hl](t - n, i - n, 2 * n, 2 * n)) return !1
      } else if (!this._jg[yo](t, i)) return !1;
      return this[_P](t, i, n)
    },
    hitTestChildren: function (t, i, n) {
      for (var e, s = this._f8[Wh] - 1; s >= 0; s--)
        if (e = this._f8[s], e._ht && e[Qu](t, i, n)) return e;
      return !1
    },
    destroy: function () {
      this[Lm] = !0;
      for (var t, i = this._f8[Wh] - 1; i >= 0; i--) t = this._f8[i], t.destroy()
    }
  }, E(cW, Kq), K(cW.prototype, {
    renderColorBlendMode: {
      get: function () {
        return this[fP]
      },
      set: function (t) {
        this[fP] = t, this._1f = !0, this[xx] && (this.body[$j] = this[fP])
      }
    },
    renderColor: {
      get: function () {
        return this[oP]
      },
      set: function (t) {
        this.$renderColor = t, this._1f = !0, this[xx] && (this[xx].renderColor = this.$renderColor)
      }
    },
    bodyBounds: {
      get: function () {
        if (this[rP]) {
          this[rP] = !1;
          var t, i = this.body;
          t = i && i._ht && !this._$u() ? i._fo[tr]() : this._fo.clone(), this[ko] && Ii(t, this.rotate, t), t.x += this.$x, t.y += this.$y, this._n9w = t
        }
        return this[dP]
      }
    },
    bounds: {
      get: function () {
        return new PG((this.$x || 0) + this.uiBounds.x, (this.$y || 0) + this.uiBounds.y, this[IT][Na], this.uiBounds[Ba])
      }
    },
    body: {
      get: function () {
        return this[aP]
      },
      set: function (t) {
        t && this._n7ody != t && (this[aP] = t, this[uP] = !0, this.invalidateSize())
      }
    }
  }), TG[hP] = 1;
  var uW = function () {
    w(this, uW, arguments)
  };
  uW[hr] = {
    strokeStyle: Ix,
    lineWidth: 0,
    fillColor: null,
    fillGradient: null,
    _jn: 1,
    _jp: 1,
    outline: 0,
    onDataChanged: function (t) {
      T(this, uW, qM, arguments), this._kz && this._8o && this._kz._5y(this._8o, this), t && this[Yj](t)
    },
    _n91: function (t) {
      this._kz = xn(t), this._kz.validate(), (this._kz._ma == QH || this._kz._60()) && (this._8o || (this._8o = function () {
        this[VT](), this._jq && this._jq.graph && (this._jq[YA](), this._jq.graph[jw]())
      }), this._kz[Fo](this._8o, this))
    },
    _kz: null,
    initialize: function () {
      this[Yj](this[$T])
    },
    _4q: function () {
      return this._kz && this._kz.draw
    },
    _98: function (t) {
      if (!t || t[Na] <= 0 || t[Ba] <= 0 || !this[lP] || !(this[Pw] instanceof Object)) return this._jn = 1, void(this._jp = 1);
      var i = this.size.width,
        e = this[Pw][Ba];
      if ((i === n || null === i) && (i = -1), (e === n || null === e) && (e = -1), 0 > i && 0 > e) return this._jn = 1, void(this._jp = 1);
      var s, h, r = t.width,
        a = t[Ba];
      i >= 0 && (s = i / r), e >= 0 && (h = e / a), 0 > i ? s = h : 0 > e && (h = s), this._jn = s, this._jp = h
    },
    validateSize: function () {
      if (this[vP]) {
        this[vP] = !1;
        var t = this[bP];
        this._jn, this._jp, this._98(t), this[gP](t[Na] * this._jn, t.height * this._jp, t.x * this._jn, t.y * this._jp)
      }
    },
    measure: function () {
      var t = this._kz.getBounds(this[O_] + this[dp]);
      return t ? (this[vP] = !0, void(this[bP] = t.clone())) : void this._jg.set(0, 0, 0, 0)
    },
    onBoundsChanged: function () {
      this.$invalidateFillGradient = !0
    },
    _1i: function () {
      this[yP] = !1, this._fillGradient = this[yp] ? rY[hr][kf][Uh](this[xP], this._7p) : null
    },
    _jw: function (t) {
      var i, n;
      if (ry == this[pP]) i = 1, n = -1;
      else {
        if (ay != this.$adjustType) return;
        i = -1, n = 1
      }
      var e = this._jg.cx,
        s = this._jg.cy;
      t[to](e, s), t[io](i, n), t[to](-e, -s)
    },
    draw: function (t, i, n, e) {
      if (this._jn && this._jp) {
        if (this.$invalidateFillGradient && this._1i(), t.save(), this[pP] && this._jw(t), this._kz._ma == iY) return t[io](this._jn, this._jp), this._kz._li[$o](t, i, this, n, e || this), void t[oo]();
        n && this._7n(t, i, e), this._kz[$o](t, i, this, this._jn, this._jp), t[oo]()
      }
    },
    doHitTest: function (t, i, n) {
      if (this._kz.hitTest) {
        if (ry == this[pP]) {
          var e = this._jg.cy;
          i = 2 * e - i
        } else if (ay == this[pP]) {
          var s = this._jg.cx;
          t = 2 * s - t
        }
        t /= this._jn, i /= this._jp;
        var h = (this._jn + this._jp) / 2;
        return h > 1 && (n /= h, n = 0 | n), this._kz._li instanceof wY ? this._kz._li[Qu](t, i, n, !0, this.$lineWidth, this[mP] || this.$fillGradient) : this._kz.hitTest(t, i, n)
      }
      return !0
    },
    $invalidateScale: !0,
    $invalidateFillGradient: !0
  }, E(uW, Kq), _s(uW[hr], {
    adjustType: {},
    fillColor: {},
    size: {
      validateFlags: [XM, EP]
    },
    fillGradient: {
      validateFlags: [wP]
    }
  }), K(uW[hr], {
    originalBounds: {
      get: function () {
        return this._originalBounds
      }
    }
  }), TG.ALIGN_POSITION = CG[xl];
  var _W = function () {
    w(this, _W, arguments), this[Oj] = TG[gI]
  };
  _W[hr] = {
    color: TG[gI],
    showPointer: !0,
    fontSize: null,
    fontFamily: null,
    fontStyle: null,
    _fp: null,
    alignPosition: null,
    measure: function () {
      this[no];
      var t = Di(this[$T], this[TP], this[kP], this[MP], TG.LINE_HEIGHT, this[OP]);
      if (this._fp = t, this.$size) {
        var i = this[lP].width || 0,
          n = this[lP].height || 0;
        return this.setMeasuredBounds(i > t[Na] ? i : t[Na], n > t[Ba] ? n : t[Ba])
      }
      return this[gP](t[Na], t.height)
    },
    doHitTest: function (t, i, n) {
      return this[$T] ? jn(t, i, n, this) : !1
    },
    draw: function (t, i, n, e) {
      if (n && this._7n(t, i, e), this.$fontSize || TG.FONT_SIZE, this.$rotatable && this[df]) {
        var s = un(this[df]);
        s > MG && 3 * MG > s && (t[to](this._jg.width / 2, this._jg.height / 2), t[ko](Math.PI), t[to](-this._jg.width / 2, -this._jg.height / 2))
      }
      var h = this[jj] || TG.ALIGN_POSITION,
        r = h[Jr],
        a = h[Qr],
        o = 0;
      r == DG ? (r = Xu, o += this._jg[Na] / 2) : r == NG ? (r = Zr, o += this._jg.width) : r = xa;
      var f = 0;
      a == $G ? f = (this._jg.height - this._fp[Ba]) / 2 : a == FG && (f = this._jg[Ba] - this._fp[Ba]), t[wx] = this[Oj], Ri(t, this[$T], o, f, r, this[kP], this.$fontSize, this[MP], TG[fo], this.$font)
    },
    _4q: function () {
      return null != this[$T] || this.$size
    },
    $invalidateFont: !0
  }, E(_W, Kq), _s(_W[hr], {
    size: {
      validateFlags: [Vg]
    },
    fontStyle: {
      validateFlags: [Vg, IP]
    },
    fontSize: {
      validateFlags: [Vg, IP]
    },
    fontFamily: {
      validateFlags: [Vg, IP]
    }
  }), K(_W[hr], {
    font: {
      get: function () {
        return this[SP] && (this.$invalidateFont = !1, this[OP] = (this[MP] || TG[Za]) + Er + (this.$fontSize || TG.FONT_SIZE) + Ja + (this[kP] || TG[Qa])), this[OP]
      }
    }
  });
  var dW = function (t) {
    t = t || new wY, this[jP] = new PG, w(this, dW, [t])
  };
  dW.prototype = {
    layoutByPath: !0,
    layoutByAnchorPoint: !1,
    measure: function () {
      this[AP] = !0, this.$invalidateToArrow = !0, this[$T].getBounds(this[PP] + this[LP], this[jP]), this.setMeasuredBounds(this[jP])
    },
    validateSize: function () {
      if (this.$invalidateFromArrow || this[CP]) {
        var t = this[jP].clone();
        if (this[AP]) {
          this.$invalidateFromArrow = !1;
          var i = this.validateFromArrow();
          i && t.add(i)
        }
        if (this[CP]) {
          this[CP] = !1;
          var i = this.validateToArrow();
          i && t.add(i)
        }
        this[gP](t)
      }
    },
    validateFromArrow: function () {
      if (!this[$T]._j2 || !this[RP]) return void(this[DP] = null);
      var t = this.$data,
        i = 0,
        n = 0,
        e = this[NP];
      e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0, i > 0 && 1 > i && (i *= t._j2)), this.fromArrowLocation = t[Ho](i, n), this.fromArrowLocation[ko] = Math.PI + this[BP][ko] || 0, this[DP] = zs(this[RP], this[$P]);
      var s = this.$fromArrowShape[go](this.fromArrowStyles.lineWidth + this[FP][dp]);
      return this[zP] instanceof $H[GP] ? this[FP][xp] = rY[hr].generatorGradient.call(this[zP], s) : this.fromArrowStyles && (this[FP][xp] = null), s[cx](this.fromArrowLocation.x, this[BP].y), Si(s, this[BP][ko], s, this[BP].x, this[BP].y), s
    },
    validateToArrow: function () {
      if (!this[$T]._j2 || !this[HP]) return void(this[YP] = null);
      var t = this[$T],
        i = 0,
        n = 0,
        e = this[qP];
      e && (isNaN(e) && (e.x || e.y) ? (i += e.x || 0, n += e.y || 0) : i += e || 0), 0 > i && i > -1 && (i *= t._j2), i += t._j2, this[WP] = t[Ho](i, n), this[YP] = zs(this.$toArrow, this[UP]);
      var s = this[YP].getBounds(this[VP].lineWidth + this[VP][dp]);
      return this[SA] instanceof $H[GP] ? this.toArrowStyles._fillGradient = rY[hr][kf].call(this.toArrowFillGradient, s) : this[VP] && (this[VP][xp] = null), s[cx](this[WP].x, this.toArrowLocation.y), Si(s, this[WP][ko], s, this[WP].x, this.toArrowLocation.y), s
    },
    _23: function (t) {
      var i = t ? "from" : Ik,
        e = this[i + XP];
      e === n && (e = this.$lineWidth);
      var s = this[i + ZP];
      s === n && (s = this[j_]);
      var h = this[i + KP];
      h || (this[i + KP] = h = {}), h[O_] = e, h[j_] = s, h[Df] = this[i + JP], h[Ff] = this[i + QP], h[gp] = this[i + tL], h[yp] = this[i + iL], h.lineCap = this[i + nL], h[S_] = this[i + eL], h[dp] = this[i + sL] || 0, h.outlineStyle = this[i + hL]
    },
    doValidate: function () {
      return this.$fromArrow && this._23(!0), this[HP] && this._23(!1), T(this, dW, rL)
    },
    drawArrow: function (t, i, n, e) {
      if (this[RP] && this[DP]) {
        t[Ex]();
        var s = this[BP],
          h = s.x,
          r = s.y,
          a = s[ko];
        t[to](h, r), a && t[ko](a), this[DP][$o](t, i, this[FP], n, e), t.restore()
      }
      if (this[HP] && this.$toArrowShape) {
        t.save();
        var s = this[WP],
          h = s.x,
          r = s.y,
          a = s[ko];
        t[to](h, r), a && t[ko](a), this.$toArrowShape[$o](t, i, this[VP], n, e), t[oo]()
      }
    },
    outlineStyle: null,
    outline: 0,
    onBoundsChanged: function () {
      this[yP] = !0
    },
    _1i: function () {
      this.$invalidateFillGradient = !1, this[xp] = this[xP] ? rY[hr].generatorGradient.call(this.$fillGradient, this._7p) : null
    },
    draw: function (t, i, n, e) {
      this[yP] && this._1i(), this[$T].draw(t, i, this, n, e), this[aL](t, i, n, e)
    },
    doHitTest: function (t, i, n) {
      if (this[$T][Qu](t, i, n, !0, this.$lineWidth + this.$outline, this[mP] || this[xP])) return !0;
      if (this.$toArrow && this[YP]) {
        var e = t - this.toArrowLocation.x,
          s = i - this.toArrowLocation.y;
        if (this.toArrowLocation.rotate) {
          var h = ki(e, s, -this[WP][ko]);
          e = h.x, s = h.y
        }
        var r = this.toArrowStyles[gp] || this.toArrowStyles[yp];
        if (this[YP].hitTest(e, s, n, !0, this[VP][O_], r)) return !0
      }
      if (this[RP] && this[DP]) {
        var e = t - this[BP].x,
          s = i - this.fromArrowLocation.y;
        if (this[BP][ko]) {
          var h = ki(e, s, -this[BP][ko]);
          e = h.x, s = h.y
        }
        var r = this.fromArrowStyles[gp] || this[FP][yp];
        if (this[DP][Qu](e, s, n, !0, this[FP][O_], r)) return !0
      }
      return !1
    },
    $fromArrowOutline: 0,
    $toArrowOutline: 0,
    $invalidateFillGradient: !0,
    $invalidateFromArrow: !0,
    $invalidateToArrow: !0
  }, E(dW, Kq), _s(dW.prototype, {
    strokeStyle: {
      validateFlags: [oL, fL]
    },
    fillColor: {},
    fillGradient: {
      validateFlags: [wP]
    },
    fromArrowOffset: {
      validateFlags: [oL, XM]
    },
    fromArrowSize: {
      validateFlags: [oL, XM]
    },
    fromArrow: {
      validateFlags: [oL, XM]
    },
    fromArrowOutline: {
      validateFlags: [oL, XM]
    },
    fromArrowStroke: {
      validateFlags: [oL, XM]
    },
    fromArrowStrokeStyle: {
      validateFlags: [oL]
    },
    toArrowOffset: {
      validateFlags: [fL, XM]
    },
    toArrowSize: {
      validateFlags: [fL, XM]
    },
    toArrow: {
      validateFlags: [fL, XM]
    },
    toArrowOutline: {
      validateFlags: [fL, XM]
    },
    toArrowStroke: {
      validateFlags: [fL, XM]
    },
    toArrowStrokeStyle: {
      validateFlags: [fL]
    },
    outline: {
      value: 0,
      validateFlags: [Vg]
    }
  }), K(dW[hr], {
    length: {
      get: function () {
        return this[mo][Wh]
      }
    }
  }), bs.prototype = {
    shape: null,
    path: null,
    initialize: function () {
      T(this, bs, HM), this.path = new wY, this[Wk]._di = !1, this[eA] = new dW(this[Wk]), this[KA](this[eA], 0), this[aP] = this[eA], rW.initBindingProperties(this)
    },
    _1p: !0,
    _5r: null,
    _$u: function () {
      return !1
    },
    _3p: function () {
      return !1
    },
    validatePoints: function () {
      this.shape.invalidateData();
      var t = this[$T],
        i = this[Wk];
      i[$a]();
      var n = t[Pc],
        e = t[mc];
      n && e && Us(this, t, i, n, e)
    },
    drawLoopedEdge: function (t, i, n, e) {
      Ks(this, e, t)
    },
    drawEdge: function (t, i, n, e, s, h) {
      var r = s.center,
        a = h.center;
      if (e == FH.EDGE_TYPE_ZIGZAG) {
        var o = (r.x + a.x) / 2,
          f = (r.y + a.y) / 2,
          c = r.x - a.x,
          u = r.y - a.y,
          _ = Math.sqrt(c * c + u * u),
          d = Math[Ur](u, c);
        d += Math.PI / 6, _ *= .04, _ > 30 && (_ = 30);
        var l = Math.cos(d) * _,
          v = Math.sin(d) * _;
        return t[Nc](o - v, f + l), void t[Nc](o + v, f - l)
      }
      var b = Zs(this, this[mo], s, h, i, n, r, a);
      b && (t._gg = b)
    },
    _1y: function () {
      if (!this.$data[OT]()) return null;
      var t = this[Gu]._8j._8c(this[$T]);
      if (!t || !t.canBind(this[Gu]) || !t._g4) return null;
      var i = t[cL](this);
      return t[uL](this[$T]) || (i = -i), i
    },
    checkBundleLabel: function () {
      var t = this[_L]();
      return t ? (this[LA] || this.createBundleLabel(), this.bundleLabel._ht = !0, void(this[LA][mo] = t)) : void(this.bundleLabel && (this[LA]._ht = !1, this[LA][mo] = null))
    },
    createBundleLabel: function () {
      var t = new _W;
      t[dL] = !1, this[LA] = t, this[KA](this[LA]), aW[VA](this)
    },
    getBundleLabel: function () {
      return this.graph.getBundleLabel(this[mo])
    },
    doValidate: function () {
      return this._1p && (this._1p = !1, this[lL]()), this[vL](), T(this, bs, rL)
    },
    _45: function () {
      this._1p = !0, this.invalidateSize()
    },
    _$z: function (t, i, n) {
      var e = this[FA][WA](this, t, i, n);
      return e = tW[WA](this, t, i, n) || e, this[LA] && this[LA][$T] && (e = aW[WA](this, t, i, n) || e), rW.onBindingPropertyChange(this, t, i, n) || e
    }
  }, E(bs, cW), bs[bL] = function (t, i, n, e) {
    if (t[Dc](i.x, i.y), !e || e == FH[gL]) return void t.lineTo(n.x, n.y);
    if (e == FH.EDGE_TYPE_VERTICAL_HORIZONTAL) t.lineTo(i.x, n.y);
    else if (e == FH[Eu]) t[Nc](n.x, i.y);
    else if (0 == e[nr](FH[yL])) {
      var s;
      s = e == FH.EDGE_TYPE_ORTHOGONAL_HORIZONTAL ? !0 : e == FH[ku] ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y);
      var h = (i.x + n.x) / 2,
        r = (i.y + n.y) / 2;
      s ? (t[Nc](h, i.y), t[Nc](h, n.y)) : (t.lineTo(i.x, r), t[Nc](n.x, r))
    } else if (0 == e[nr](FH[Du])) {
      var s, a = lW[Qq[bu]] || 0;
      s = e == FH.EDGE_TYPE_ELBOW_HORIZONTAL ? !0 : e == FH.EDGE_TYPE_ELBOW_VERTICAL ? !1 : Math.abs(i.x - n.x) > Math.abs(i.y - n.y), s ? (t.lineTo(i.x + a, i.y), t.lineTo(n.x - a, n.y)) : (t.lineTo(i.x, i.y + a), t.lineTo(n.x, n.y - a))
    } else if (0 == e.indexOf(xL)) {
      var a = lW[Qq.EDGE_EXTEND] || 0;
      if (e == FH[Ou]) {
        var o = Math.min(i.y, n.y) - a;
        t.lineTo(i.x, o), t[Nc](n.x, o)
      } else if (e == FH.EDGE_TYPE_EXTEND_BOTTOM) {
        var o = Math.max(i.y, n.y) + a;
        t[Nc](i.x, o), t[Nc](n.x, o)
      } else if (e == FH.EDGE_TYPE_EXTEND_LEFT) {
        var f = Math.min(i.x, n.x) - a;
        t[Nc](f, i.y), t.lineTo(f, n.y)
      } else if (e == FH[wu]) {
        var f = Math.max(i.x, n.x) + a;
        t[Nc](f, i.y), t.lineTo(f, n.y)
      }
    } else if (e == FH[pL]) {
      var h = (i.x + n.x) / 2,
        r = (i.y + n.y) / 2,
        c = i.x - n.x,
        u = i.y - n.y,
        _ = Math[uo](c * c + u * u),
        d = Math.atan2(u, c);
      d += Math.PI / 6, _ *= .04, _ > 30 && (_ = 30);
      var l = Math.cos(d) * _,
        v = Math.sin(d) * _;
      t.lineTo(h - v, r + l), t[Nc](h + v, r - l)
    }
    t[Nc](n.x, n.y)
  }, K(bs[hr], {
    length: {
      get: function () {
        return this.path ? this[Wk].length : 0
      }
    }
  }), bs[hr][Fa] = function (t, i, n) {
    var e = wn(this[Wk], t, i, n);
    if (e && e[Wh] > 2) {
      var s = this[mo],
        h = e[e[Wh] - 1];
      s[mL] = h[To] == bY ? e[Zh](1, e.length - 2) : e[Zh](1, e.length - 1)
    }
  }, gs[hr] = {
    _2b: null,
    image: null,
    initialize: function () {
      T(this, gs, HM), this[EL](), sW[VA](this)
    },
    _n91: function () {
      this[mo][Bx] ? this[Bx] && (this.body = this[Bx]) : this.label && (this[xx] = this[fE])
    },
    _n5u: function () {
      this[Bx] = new uW, this.addChild(this[Bx], 0), this[Yj]()
    },
    doValidate: function () {
      this[xx] && (this instanceof hh && !this[$T].groupImage && this._5w() ? this[xx][af] = !1 : (this[xx][af] = null != this._2b, this[xx][qk] = this._2b));
      var t = this[$T][Ak],
        i = 0,
        n = 0;
      t && (i = t.x, n = t.y);
      var e = this.$x != i || this.$y != n;
      return e && (this[rP] = !0), this.$x = i, this.$y = n, cW[hr][rL][Uh](this) || e
    },
    _$z: function (t, i, n) {
      var e = this[FA][WA](this, t, i, n);
      return e = tW[WA](this, t, i, n) || e, sW[WA](this, t, i, n) || e
    }
  }, E(gs, cW);
  var lW = {};
  lW[Qq[rx]] = TG[rx], lW[Qq.SELECTION_BORDER] = TG.SELECTION_BORDER, lW[Qq.SELECTION_SHADOW_BLUR] = TG[hx], lW[Qq[ex]] = FH[sx], lW[Qq[sO]] = 2, lW[Qq[hO]] = 2, lW[Qq[gI]] = TG.LABEL_COLOR, lW[Qq[_I]] = CG.CENTER_BOTTOM, lW[Qq[bI]] = CG.CENTER_TOP, lW[Qq[wL]] = new LG(0, 2), lW[Qq[kI]] = 8, lW[Qq.LABEL_RADIUS] = 8, lW[Qq[OI]] = !0, lW[Qq.LABEL_BORDER] = 0, lW[Qq.LABEL_BORDER_STYLE] = Ix, lW[Qq[Rj]] = !0, lW[Qq[FI]] = null, lW[Qq[TL]] = null, lW[Qq[ES]] = kL, lW[Qq.EDGE_WIDTH] = 1.5, lW[Qq[YS]] = !0, lW[Qq[WS]] = !0, lW[Qq[nA]] = X(3438210798), lW[Qq.GROUP_STROKE] = 1, lW[Qq.GROUP_STROKE_STYLE] = Ix, lW[Qq[Vk]] = !0, lW[Qq[aA]] = TG[Nu], lW[Qq[_j]] = TG.ARROW_SIZE, lW[Qq[n_]] = 10, lW[Qq[GS]] = 8, lW[Qq[Au]] = FH[Lu], lW[Qq.EDGE_SPLIT_BY_PERCENT] = !0, lW[Qq[bu]] = 20, lW[Qq[yu]] = .5, lW[Qq[xu]] = 20, lW[Qq[ML]] = 20, lW[Qq[rS]] = CG[pl], lW[Qq[hS]] = CG[yl], lW[Qq[aS]] = OL, lW[Qq[NA]] = 1, lW[Qq[pO]] = IL, lW[Qq[Bj]] = TG[Ap], lW[Qq[fO]] = 1, TG[t_] = 2;
  var vW = function (i, n) {
    this._$x = new ZG, this._$x.on(function (t) {
      iM == t[Il] && this[dk]()
    }, this), this._1e = new ZG, this._1e[dd](function (t) {
      !this[iM] || t[Il] != QG[Jl] && t[Il] != QG.KIND_REMOVE || this[F_].contains(this[iM]) || (this[iM] = null)
    }, this), this._7 = new ZG, this._12 = new ZG, this._$n = new ZG, this._$r = new ZG, this[F_] = n || new os, this._8j = new Dq(this, i), this._2w = new Dh(this), this._1a = new ZG, this._onresize = oH(t, SL, function () {
      this.updateViewport()
    }, !1, this), this._8j[iT][jL] = function (t) {
      this[jL](t)
    }[gr](this), this._8j._n5w[AL] = function (t) {
      this[AL](t)
    }.bind(this)
  };
  vW[hr] = {
    originAtCenter: !0,
    editable: !1,
    ondragover: function (t) {
      $H.stopEvent(t)
    },
    getDropInfo: function (t, i) {
      var n = null;
      if (i) try {
        n = JSON.parse(i)
      } catch (e) {}
      return n
    },
    ondrop: function (t) {
      var i = t.dataTransfer;
      if (i) {
        var n = i.getData(PL),
          e = this.getDropInfo(t, n);
        e || (e = {}, e[Bx] = i[hg](Bx), e[To] = i.getData(To), e[fE] = i.getData(fE), e.groupImage = i[hg](vM));
        var s = this[LL](t);
        if (s = this.toLogical(s.x, s.y), !(this.dropAction instanceof Function && this[CL][Uh](this, t, s, e) === !1) && (e[Bx] || e.label || e[To])) {
          var h = e[Bx],
            r = e[To],
            a = e[fE],
            o = e.groupImage;
          $H.stopEvent(t);
          var f;
          if (r && RL != r ? yM == r ? f = this[DL](a, s.x, s.y) : NL == r ? f = this[BL](a, s.x, s.y) : bM == r ? (f = this.createGroup(a, s.x, s.y), o && (o = eh(o), o && (f[vM] = o))) : (r = J(r), r instanceof Function && r[hr] instanceof Uq && (f = new r, f[Co] = a, f[Nk] = new IG(s.x, s.y), this._knModel.add(f))) : f = this[$L](a, s.x, s.y), f) {
            if (h && (h = eh(h), h && (f.image = h)), t[wE]) {
              var c = this.getElementByMouseEvent(t);
              c && this[FL](c) && (f[pc] = c)
            }
            if (e[zL])
              for (var u in e[zL]) f[u] = e[zL][u];
            if (e[GL])
              for (var u in e.clientProperties) f.set(u, e.clientProperties[u]);
            if (e[HL] && f[yk](e[HL]), this[YL](f, t, e) === !1) return !1;
            var _ = new Rh(this, Rh.ELEMENT_CREATED, t, f);
            return this[qL](_), f
          }
        }
      }
    },
    _n76: function (t) {
      return t[h_] || t instanceof Zq || t.droppable
    },
    enableDoubleClickToOverview: !0,
    _8j: null,
    _$x: null,
    _1e: null,
    _7: null,
    _$r: null,
    _12: null,
    _$n: null,
    _1o: function (t) {
      return this._$x[_r](t)
    },
    _4g: function (t) {
      this._$x.onEvent(t), Lw == t[Il] && this.checkLimitedBounds()
    },
    isVisible: function (t) {
      return this._8j._ej(t)
    },
    isMovable: function (t) {
      return (t instanceof Uq || t instanceof Wq && t[$u]()) && t[WL] !== !1
    },
    isSelectable: function (t) {
      return t[UL] !== !1
    },
    isEditable: function (t) {
      return t.editable !== !1
    },
    isRotatable: function (t) {
      return t[Dj] !== !1
    },
    isResizable: function (t) {
      return t[VL] !== !1
    },
    canLinkFrom: function (t) {
      return t[XL] !== !1 && t[ZL] !== !1
    },
    canLinkTo: function (t) {
      return t.linkable !== !1 && t.canLinkTo !== !1
    },
    createNode: function (t, i, n) {
      var e = new Uq(t, i, n);
      return this[ok].add(e), e
    },
    createText: function (t, i, n) {
      var e = new cs(t, i, n);
      return this[ok].add(e), e
    },
    createShapeNode: function (t, i, n, e) {
      D(i) && (e = n, n = i, i = null);
      var s = new Vq(t, i);
      return s[Ak] = new IG(n, e), this._knModel.add(s), s
    },
    createGroup: function (t, i, n) {
      var e = new Zq(t, i, n);
      return this[ok].add(e), e
    },
    createEdge: function (t, i, n) {
      if (t instanceof Uq) {
        var e = n;
        n = i, i = t, t = e
      }
      var s = new Wq(i, n);
      return t && (s[pk] = t), this._knModel.add(s), s
    },
    addElement: function (t, i) {
      this[ok].add(t), i && t[qh]() && t.forEachChild(function (t) {
        this[KL](t, i)
      }, this)
    },
    removeElement: function (t) {
      this[ok][Qh](t)
    },
    clear: function () {
      this[ok][$a]()
    },
    getStyle: function (t, i) {
      var e = t._j8[i];
      return e !== n ? e : this[JL](i)
    },
    getDefaultStyle: function (t) {
      if (this._j8) {
        var i = this._j8[t];
        if (i !== n) return i
      }
      return lW[t]
    },
    _2g: function (t, i) {
      if (!this[QL] || this[QL][Ju](this[ak])) return i && i(), !1;
      t = this._21(), this[tC]();
      var n, e, s, h = this[ak],
        r = this[QL],
        a = h[Na] / this.limitedBounds[Na],
        o = h[Ba] / this[QL][Ba];
      if (1 >= a && 1 >= o) return n = r[xa] > h[xa] ? r[xa] : r[Zr] < h[Zr] ? h[xa] - (h[Zr] - r[Zr]) : h.left, e = r.top > h.top ? r.top : r[Xr] < h.bottom ? h.top - (h[Xr] - r[Xr]) : h.top, void this[RT](-n * this[io], -e * this[io], this.scale, !1, i);
      var f = a > o;
      s = Math.max(a, o), f ? (n = r.x, e = r.y + (h.top - r.top) * (1 - s) / s, e >= r.y ? e = r.y : e < r.bottom - h[Ba] / s && (e = r[Xr] - h[Ba] / s)) : (e = r.y, n = r.x + (h.left - r[xa]) * (1 - s) / s, n >= r.x ? n = r.x : n < r[Zr] - h[Na] / s && (n = r[Zr] - h.width / s)), s *= this[io], n *= s, e *= s, this[RT](-n, -e, s, t, i)
    },
    checkLimitedBounds: function (t) {
      return this[iC] || !this.limitedBounds || this.limitedBounds[Ju](this.viewportBounds) ? !1 : (this[iC] = !0, void this.callLater(function () {
        this._2g(t, function () {
          this[iC] = !1
        }.bind(this))
      }, this))
    },
    zoomByMouseEvent: function (t, i, n, e) {
      var s = this[LL](t);
      return D(i) ? this.zoomAt(Math.pow(this.scaleStep, i), s.x, s.y, n, e) : i ? this[nC](s.x, s.y, n, e) : this[eC](s.x, s.y, n, e)
    },
    resetScale: 1,
    translate: function (t, i, n) {
      return this.translateTo(this.tx + t, this.ty + i, this.scale, n)
    },
    translateTo: function (t, i, n, e, s) {
      if (n && (n = Math.min(this[sC], Math.max(this[hC], n))), e) {
        var h = this._5a();
        return void h._ky(t, i, n, e, s)
      }
      var r = this._8j[rC](t, i, n);
      return s && s(), r
    },
    centerTo: function (t, i, e, s, h) {
      return (!e || 0 >= e) && (e = this[io]), s === n && (s = this._21()), this[RT](this[Na] / 2 - t * e, this.height / 2 - i * e, e, s, h)
    },
    moveToCenter: function (t, i) {
      if (arguments[2] === !1 || !this._8j[aC]()) {
        var n = this.bounds;
        return void this[oC](n.cx, n.cy, t, i)
      }
      return this._8j[ru] || (i = !1), this[fC](this[cC].bind(this, t, i, !1))
    },
    zoomToOverview: function (t, i) {
      if (arguments[2] === !1 || !this._8j[aC]()) {
        var n = this._8j._1m();
        return void(n && (i && (n[io] = Math.min(n[io], i)), this[oC](n.cx, n.cy, n[io], t)))
      }
      return this._8j._n5h || (t = !1), this[fC](this[uC].bind(this, t, i, !1))
    },
    _21: function () {
      return this._8j[ru] ? this[_C] === n || null === this[_C] ? TG[dC] : this.zoomAnimation : !1
    },
    zoomAt: function (t, i, e, s, h) {
      s === n && (s = this._21()), i === n && (i = this[Na] / 2), i = i || 0, e === n && (e = this[Ba] / 2), e = e || 0;
      var r = this.scale;
      return t = Math.min(this[sC], Math.max(this.minScale, r * t)), i = t * (this.tx - i) / r + i, e = t * (this.ty - e) / r + e, this[RT](i, e, t, s, h)
    },
    zoomOut: function (t, i, n, e) {
      return this[lC](1 / this[vC], t, i, n, e)
    },
    zoomIn: function (t, i, n, e) {
      return this.zoomAt(this[vC], t, i, n, e)
    },
    _5a: function () {
      return this[bC] || (this._panAnimation = new mW(this)), this[bC]
    },
    onAnimationStart: function () {},
    onAnimationEnd: function () {},
    isAnimating: function () {
      return this[bC] && this._panAnimation._e6()
    },
    enableInertia: !0,
    _9g: function (t, i) {
      var n = this._5a();
      return n._fj(t || 0, i || 0)
    },
    stopAnimation: function () {
      this[bC] && this._panAnimation._m6()
    },
    getUI: function (t) {
      return Q(t) ? this._8j._34(t) : this._8j._lh(t)
    },
    getUIByMouseEvent: function (t) {
      return this._8j._34(t)
    },
    hitTest: function (t) {
      return this._8j[Qu](t)
    },
    globalToLocal: function (t) {
      return this._8j._7s(t)
    },
    toCanvas: function (t, i) {
      return this._8j._h5(t, i)
    },
    toLogical: function (t, i) {
      return Q(t) ? this._8j._$b(t) : this._8j._dv(t, i)
    },
    getElementByMouseEvent: function (t) {
      var i = this._8j._34(t);
      return i ? i[$T] : void 0
    },
    getElement: function (t) {
      if (Q(t)) {
        var i = this._8j._34(t);
        return i ? i[$T] : null
      }
      return this._knModel.getById(t)
    },
    invalidate: function () {
      this._8j[Aw]()
    },
    invalidateUI: function (t) {
      t[jw](), this[jw]()
    },
    invalidateElement: function (t) {
      this._8j._3e(t)
    },
    getUIBounds: function (t) {
      return this._8j._2s(t)
    },
    forEachVisibleUI: function (t, i) {
      return this._8j._40(t, i)
    },
    forEachReverseVisibleUI: function (t, i) {
      return this._8j._$y(t, i)
    },
    forEachUI: function (t, i) {
      return this._8j._f3(t, i)
    },
    forEachReverseUI: function (t, i) {
      return this._8j._3r(t, i)
    },
    forEach: function (t, i) {
      return this[ok][Vf](t, i)
    },
    getElementByName: function (t) {
      var i;
      return this[Vf](function (n) {
        return n[Co] == t ? (i = n, !1) : void 0
      }), i
    },
    focus: function (i) {
      if (i) {
        var n = t.scrollX || t.pageXOffset,
          e = t[gC] || t[ga];
        return this[yC][xC](), void t.scrollTo(n, e)
      }
      this[yC][xC]()
    },
    callLater: function (t, i, n) {
      this._8j._dk(t, i, n)
    },
    exportImage: function (t, i) {
      return dh(this, t, i)
    },
    setSelection: function (t) {
      return this[ok][uv].set(t)
    },
    select: function (t) {
      return this[ok][uv].select(t)
    },
    unselect: function (t) {
      return this._knModel[uv][pC](t)
    },
    reverseSelect: function (t) {
      return this[ok][uv][mC](t)
    },
    selectAll: function () {
      _h(this)
    },
    unSelectAll: function () {
      this[$_][$a]()
    },
    unselectAll: function () {
      this[EC]()
    },
    isSelected: function (t) {
      return this._knModel._selectionModel[Ju](t)
    },
    sendToTop: function (t) {
      Ie(this[ok], t)
    },
    sendToBottom: function (t) {
      Se(this._knModel, t)
    },
    moveElements: function (t, i, n) {
      var e = [],
        s = new kG;
      return l(t, function (t) {
        t instanceof Uq ? e[ir](t) : t instanceof Wq && s.add(t)
      }), this._e0(e, i, n, s)
    },
    _e0: function (t, i, n, e) {
      if (0 == i && 0 == n || 0 == t.length && 0 == e[Wh]) return !1;
      if (0 != t[Wh]) {
        var s = this._48(t);
        e = this._44(s, e), l(s, function (t) {
          var e = t[Ak];
          e ? t.setLocation(e.x + i, e.y + n) : t.setLocation(i, n)
        })
      }
      return e && e[Wh] && this._e2(e, i, n), !0
    },
    _e2: function (t, i, n) {
      t[Vf](function (t) {
        t[Pg](i, n)
      })
    },
    _44: function (t, i) {
      return this[F_][Vf](function (n) {
        n instanceof Wq && this[wC](n) && t[Ju](n.fromAgent) && t[Ju](n[mc]) && i.add(n)
      }, this), i
    },
    _48: function (t) {
      var i = new kG;
      return l(t, function (t) {
        !this[wC](t), i.add(t), ke(t, i, this[TC])
      }, this), i
    },
    reverseExpanded: function (t) {
      if (!t.isBundleEnabled()) return !1;
      var i = t[Ec](!0);
      return i ? i[kC]() !== !1 ? (this[jw](), !0) : void 0 : !1
    },
    _2w: null,
    _1a: null,
    beforeInteractionEvent: function (t) {
      return this._1a.beforeEvent(t)
    },
    onInteractionEvent: function (t) {
      this._1a[dr](t)
    },
    addCustomInteraction: function (t) {
      this._2w[MC](t)
    },
    removeCustomInteraction: function (t) {
      this._2w[OC](t)
    },
    enableWheelZoom: !0,
    enableTooltip: !0,
    getTooltip: function (t) {
      return t[gk] || t[Co]
    },
    updateViewport: function () {
      this._8j._78()
    },
    destroy: function () {
      this._4g(new YG(this, lg, !0, this[Lm])), this[Lm] = !0, fH(t, SL, this[IC]), this._2w.destroy(), this[F_] = new os;
      var i = this[SC];
      this._8j._hu(), i && (i[jC] = "")
    },
    onPropertyChange: function (t, i, n) {
      this._$x[dd](function (e) {
        e[Il] == t && i[Uh](n, e)
      })
    },
    removeSelection: function () {
      var t = this[$_]._j5;
      return t && 0 != t[Wh] ? (t = t[Xh](), this._knModel[Qh](t), t) : !1
    },
    removeSelectionByInteraction: function (t) {
      var i = this[$_][_d];
      return i && 0 != i[Wh] ? void $H.confirm(AC + i.length, function () {
        var i = this[PC]();
        if (i) {
          var n = new Rh(this, Rh.ELEMENT_REMOVED, t, i);
          this[qL](n)
        }
      }, this) : !1
    },
    createShapeByInteraction: function (t, i, n, e) {
      var s = new wY(i);
      i.length > 2 && s.closePath();
      var h = this.createShapeNode(LC, s, n, e);
      this[YL](h, t);
      var r = new Rh(this, Rh.ELEMENT_CREATED, t, h);
      return this[qL](r), h
    },
    createLineByInteraction: function (t, i, n, e) {
      var s = new wY(i),
        h = this[BL](CC, s, n, e);
      h[vu]($H[RC][qj], null), h[vu]($H.Styles[Zj], null), h[vu]($H.Styles[SO], !0), this.onElementCreated(h, t);
      var r = new Rh(this, Rh[DC], t, h);
      return this[qL](r), h
    },
    createEdgeByInteraction: function (t, i, n, e) {
      var s = this[NC](BC, t, i);
      if (e) s._8u = e;
      else {
        var h = this[$C],
          r = this[Yu];
        this[FC] && (h = this.interactionProperties[qT] || h, r = this[FC].edgeType || r), h && (s.uiClass = h), r && (s.edgeType = r)
      }
      this[YL](s, n);
      var a = new Rh(this, Rh[DC], n, s);
      return this.onInteractionEvent(a), s
    },
    onElementCreated: function (t) {
      !t[pc] && this.currentSubNetwork && (t[pc] = this.currentSubNetwork)
    },
    allowEmptyLabel: !1,
    startLabelEdit: function (t, i, n, e) {
      var s = this;
      n.startEdit(e.x, e.y, i[mo], this[gu](t, Qq.LABEL_FONT_SIZE), function (n) {
        return s[zC](t, i, n, i.parent)
      })
    },
    onLabelEdit: function (t, i, n, e) {
      if (!n && !this[GC]) return $H[ey](HC), !1;
      if (fE == i[Co]) {
        if (t.name == n) return !1;
        t.name = n
      } else e._g1(i, n) === !1 && (i[mo] = n, this.invalidateElement(t))
    },
    setInteractionMode: function (t, i) {
      this[YC] = t, this[FC] = i
    },
    upSubNetwork: function () {
      return this._30 ? this[iM] = sh(this._30) : !1
    },
    _$t: !1,
    invalidateVisibility: function () {
      this._$t = !0, this[jw]()
    },
    getBundleLabel: function (t) {
      var i = t.getEdgeBundle(!0);
      return i && i[qC] == t ? WC + i[UC].length : null
    },
    zoomAnimation: null,
    pauseRendering: function (t, i) {
      (this[VC] || i) && this._8j._71(t)
    },
    _4a: n,
    enableRectangleSelectionByRightButton: !0
  }, K(vW[hr], {
    center: {
      get: function () {
        return this[hT](this.html[fd] / 2, this.html[B_] / 2)
      }
    },
    visibleFilter: {
      get: function () {
        return this[MT]
      },
      set: function (t) {
        this[MT] = t, this[dk]()
      }
    },
    topCanvas: {
      get: function () {
        return this._8j[wT]
      }
    },
    propertyChangeDispatcher: {
      get: function () {
        return this._$x
      }
    },
    listChangeDispatcher: {
      get: function () {
        return this._1e
      }
    },
    dataPropertyChangeDispatcher: {
      get: function () {
        return this._7
      }
    },
    selectionChangeDispatcher: {
      get: function () {
        return this._$r
      }
    },
    parentChangeDispatcher: {
      get: function () {
        return this._12
      }
    },
    childIndexChangeDispatcher: {
      get: function () {
        return this._$n
      }
    },
    interactionDispatcher: {
      get: function () {
        return this._1a
      }
    },
    cursor: {
      set: function (t) {
        this[yC][aa].cursor = t || this._2w.defaultCursor
      },
      get: function () {
        return this[yC][aa][XC]
      }
    },
    interactionMode: {
      get: function () {
        return this._2w[ZC]
      },
      set: function (t) {
        var i = this[YC];
        i != t && (this._2w[KC] = t, this._4g(new YG(this, YC, t, i)))
      }
    },
    scaleStep: {
      get: function () {
        return this._8j._dn
      },
      set: function (t) {
        this._8j._dn = t
      }
    },
    maxScale: {
      get: function () {
        return this._8j._gz
      },
      set: function (t) {
        this._8j._gz = t
      }
    },
    minScale: {
      get: function () {
        return this._8j._gx
      },
      set: function (t) {
        this._8j._gx = t
      }
    },
    scale: {
      get: function () {
        return this._8j[lb]
      },
      set: function (t) {
        return this._8j[lb] = t
      }
    },
    tx: {
      get: function () {
        return this._8j._tx
      }
    },
    ty: {
      get: function () {
        return this._8j._ty
      }
    },
    styles: {
      get: function () {
        return this._j8
      },
      set: function (t) {
        this._j8 = t
      }
    },
    selectionModel: {
      get: function () {
        return this[ok]._selectionModel
      }
    },
    graphModel: {
      get: function () {
        return this._knModel
      },
      set: function (t) {
        if (this[ok] == t) return !1;
        var i = this[ok],
          n = new YG(this, F_, i, t);
        return this._1o(n) === !1 ? !1 : (null != i && (i[JC].removeListener(this._$x, this), i[fv][ql](this._1e, this), i[_v].removeListener(this._7, this), i[lv][ql](this._12, this), i.childIndexChangeDispatcher[ql](this._$n, this), i[cv][ql](this._$r, this)), this[ok] = t, this[ok] && (this[ok].propertyChangeDispatcher.addListener(this._$x, this), this[ok][fv][dd](this._1e, this), this._knModel[_v][dd](this._7, this), this._knModel.parentChangeDispatcher[dd](this._12, this), this[ok][mv].addListener(this._$n, this), this._knModel[cv].addListener(this._$r, this)), this._8j && this._8j._lf(), void this._4g(n))
      }
    },
    count: {
      get: function () {
        return this[ok][Wh]
      }
    },
    width: {
      get: function () {
        return this[SC][fd]
      }
    },
    height: {
      get: function () {
        return this[SC][B_]
      }
    },
    viewportBounds: {
      get: function () {
        return this._8j[QC]
      }
    },
    bounds: {
      get: function () {
        return this._8j._3u()
      }
    },
    canvasPanel: {
      get: function () {
        return this._8j[iT]
      }
    },
    html: {
      get: function () {
        return this._8j._n5w.parentNode
      }
    },
    navigationType: {
      get: function () {
        return this._8j._73
      },
      set: function (t) {
        this._8j._3g(t)
      }
    },
    _30: {
      get: function () {
        return this._knModel._30
      }
    },
    currentSubNetwork: {
      get: function () {
        return this[ok][iM]
      },
      set: function (t) {
        this[ok][iM] = t
      }
    },
    limitedBounds: {
      get: function () {
        return this._limitedBounds
      },
      set: function (t) {
        return PG.equals(t, this[tR]) ? !1 : t ? void(this._limitedBounds = new PG(t)) : void(this[tR] = null)
      }
    },
    ratio: {
      get: function () {
        return this._8j[za]
      }
    },
    delayedRendering: {
      get: function () {
        return this._4a === n ? TG[iR] : this._4a
      },
      set: function (t) {
        t != this.delayedRendering && (this._4a = t, this[nR](!1, !0))
      }
    },
    fullRefresh: {
      get: function () {
        return this._8j.fullRefresh
      },
      set: function (t) {
        this._8j[Nw] = t
      }
    }
  }), TG[iR] = !0, TG[eR] = 60, TG.GROUP_MIN_HEIGHT = 60, hh.prototype = {
    initialize: function () {
      T(this, hh, HM), this[tA]()
    },
    _n5s: function () {
      this._md = new wY, this[eA] = new uW(this._md), this.shape.layoutByPath = !1, this[KA](this[eA], 0), this.body = this[eA]
    },
    checkBody: function () {
      return this._5w() ? (this._1w = !0, this[eA] ? (this[eA][cT] = !0, this.body = this.shape) : (this[sR](), hW[VA](this)), void(this.image && (this[Bx].visible = !1))) : (this.image ? (this[Bx][cT] = !0, this[xx] = this.image) : this[EL](), void(this[eA] && (this.shape.visible = !1)))
    },
    _5w: function () {
      return this[$T]._i5() && this[$T][WT]
    },
    _md: null,
    _1w: !0,
    _5l: function () {
      this._1f = !0, this._1w = !0
    },
    doValidate: function () {
      if (this._1w && this._5w()) {
        if (this._1w = !1, this[eA][VT](), this.$data.groupImage) {
          this.shape[mo] = this[$T][vM];
          var t = this._1t();
          return this[eA][IM] = t.x + t.width / 2, this.shape[Cj] = t.y + t.height / 2, this[eA][Pw] = {
            width: t.width,
            height: t[Ba]
          }, gs[hr][rL][Uh](this)
        }
        this[eA][IM] = 0, this[eA][Cj] = 0;
        var i = this._83(this[$T][lM]);
        this._md[$a](), i instanceof PG ? Fe(this._md, i.x, i.y, i[Na], i[Ba], i.rx, i.ry) : i instanceof tn ? ze(this._md, i) : i instanceof nn && Ge(this._md, i), this._md._62 = !0, this[eA].invalidateData()
      }
      return gs[hr][rL][Uh](this)
    },
    _67: function (t, i, n, e, s) {
      switch (Tr != typeof e && (e = -i / 2), Tr != typeof s && (s = -n / 2), t) {
        case FH.GROUP_TYPE_CIRCLE:
          var h = Math.max(i, n) / 2;
          return new tn(e + i / 2, s + n / 2, h);
        case FH[hR]:
          return new nn(e + i / 2, s + n / 2, i, n);
        default:
          return new PG(e, s, i, n)
      }
    },
    _1t: function () {
      return this._83(null)
    },
    _83: function (t) {
      var i, e, s = this.data,
        h = s.padding,
        r = s.minSize,
        a = TG.GROUP_MIN_WIDTH,
        o = TG.GROUP_MIN_HEIGHT;
      if (r && (Tr == typeof r[Na] && (a = r[Na]), Tr == typeof r[Ba] && (o = r[Ba]), i = r.x, e = r.y), !s[qh]()) return this._67(t, a, o, i, e);
      var f, c = this[$T]._f8._j5;
      (t == FH[rR] || t == FH[hR]) && (f = []);
      for (var u, _, d, l, v = new PG, b = 0, g = c.length; g > b; b++) {
        var y = c[b];
        if (this[Gu][z_](y)) {
          var x = this[Gu].getUI(y);
          x && (u = x.$x + x._fo.x, _ = x.$y + x._fo.y, d = x._fo[Na], l = x._fo[Ba], v.addRect(u, _, d, l), f && (f[ir]({
            x: u,
            y: _
          }), f.push({
            x: u + d,
            y: _
          }), f.push({
            x: u + d,
            y: _ + l
          }), f[ir]({
            x: u,
            y: _ + l
          })))
        }
      }
      if (v[Lf]()) return this._67(t, a, o, i, e);
      var p = this[$T].$location;
      p ? p[rM] && (p.invalidateFlag = !1, i === n && (p.x = v.cx), e === n && (p.y = v.cy)) : p = this[$T][Ak] = {
        x: v.cx,
        y: v.cy
      }, h && v.grow(h), Tr == typeof i && i + p.x < v.x && (v.width += v.x - (i + p.x), v.x = i + p.x, f && f.push({
        x: v.x,
        y: v.cy
      })), Tr == typeof e && e + p.y < v.y && (v.height += v.y - (v.y, e + p.y), v.y = e + p.y, f && f.push({
        x: v.cx,
        y: v.y
      }));
      var m, i = p.x,
        e = p.y;
      if (t == FH[rR]) {
        m = en(f), m.cx -= i, m.cy -= e;
        var E = Math.max(a, o) / 2;
        return m.r < E && (m.cx += E - m.r, m.cy += E - m.r, m.r = E), m
      }
      return t == FH[hR] ? (m = sn(f, v), m.cx -= i, m.cy -= e, m[Na] < a && (m.cx += (a - m[Na]) / 2, m[Na] = a), m[Ba] < o && (m.cy += (o - m[Ba]) / 2, m[Ba] = o), m) : (m = v, v[Na] < a && (v[Na] = a), v[Ba] < o && (v[Ba] = o), v[cx](-i, -e), m)
    },
    _$z: function (t, i, n) {
      if (!this._5w()) return T(this, hh, aR, arguments);
      var e = this._n96[WA](this, t, i, n);
      return e = tW[WA](this, t, i, n) || e, e = sW[WA](this, t, i, n) || e, hW[WA](this, t, i, n) || e
    }
  }, E(hh, gs), $H.GroupUI = hh;
  var bW = {
    draw: function () {}
  };
  TG.NAVIGATION_IMAGE_LEFT = null, TG.NAVIGATION_IMAGE_TOP = null;
  var gW = {
      position: xw,
      "text-align": Xu
    },
    yW = {
      padding: oR,
      transition: fR
    },
    xW = {
      position: x_,
      display: cR
    };
  gi(uR, "opacity:0.7;vertical-align:middle;"), gi(".Q-Graph-Nav img:hover,img.hover", _R), EG || (gi(dR, lR + rH(vR) + bR), gi(gR, yR + rH(vR) + xR)), oh[hr] = {
    _n90: function (t, i) {
      return t._ht == i ? !1 : (t._ht = i, void(t[aa][pR] = i ? "visible" : g_))
    },
    _38: function (t, i) {
      var n = i / 2 - this._left[d_][B_] / 2 + Ga;
      this[w_]._img[aa].top = n, this[mR][d_][aa].top = n, this._navPane.style[Na] = t + Ga, this._navPane[aa][Ba] = i + Ga
    },
    _9c: function (t, i, n, e) {
      this[ER](this._top, t), this._n90(this[w_], i), this[ER](this[M_], n), this._n90(this[mR], e)
    },
    _hu: function () {
      var t = this[l_].parentNode;
      t && t[xv](this[l_])
    },
    _j6: function () {
      var t = this[lc]._kn;
      if (t) {
        var i = t[Mf];
        if (i[Lf]()) return void this._9c(!1, !1, !1, !1);
        var n = t.viewportBounds,
          e = n.y > i.y + 1,
          s = n.x > i.x + 1,
          h = n[Xr] < i[Xr] - 1,
          r = n[Zr] < i[Zr] - 1;
        this._9c(e, s, h, r)
      }
    }
  };
  var pW = 10;
  gi(wR, TR), gi(kR, "background-color: #7E7E7E;" + rH(vR) + ": background-color 0.2s linear;"), gi(".Q-Graph-ScrollBar--V", "width: 8px;right: 0px;"), gi(".Q-Graph-ScrollBar--H", "height: 8px;bottom: 0px;"), gi(".Q-Graph-ScrollBar--V.Both", MR), gi(".Q-Graph-ScrollBar--H.Both", OR), EG || (gi(IR, lR + rH(vR) + SR), gi(".Q-Graph:hover .Q-Graph-ScrollPane", yR + rH(vR) + ":opacity 0.3s linear;")), fh[hr] = {
    _hu: function () {
      this[jR]._hu(), this[AR]._hu(), delete this._verticalDragSupport, delete this._horizontalDragSupport, this._m8[bx] && this._m8[bx][xv](this._m8)
    },
    _m8: null,
    _n79: null,
    _8m: null,
    init: function (t) {
      var n = i[r_](a_);
      n[xc] = PR, li(n, {
        width: p_,
        height: p_,
        position: x_
      });
      var e = i.createElement(a_);
      e[xc] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--V";
      var s = i[r_](a_);
      s[xc] = "Q-Graph-ScrollBar Q-Graph-ScrollBar--H", n.appendChild(e), n[yc](s), t[yc](n), this._m8 = n, this._8m = s, this._n79 = e, s.isH = !0;
      var h = this,
        r = {
          onstart: function (t, i) {
            i[xr].add(N_)
          },
          onrelease: function (t, i) {
            i[xr][Qh](N_)
          },
          ondrag: function (t, i) {
            var n = h[lc]._kn;
            if (n) {
              var e = i.isH,
                s = e ? t.dx : t.dy;
              if (s && i[io]) {
                var r = n.scale / i[io];
                e ? n[to](-r * s, 0) : n.translate(0, -r * s), $H[LR](t)
              }
            }
          },
          enddrag: function (t, i) {
            var n = h[lc]._kn;
            if (n && n[CR]) {
              var e = i.isH,
                s = e ? t.vx : t.vy;
              if (Math.abs(s) > .1) {
                var r = n[io] / i.scale;
                s *= r, e ? n._9g(-s, 0) : n._9g(0, -s)
              }
            }
          }
        };
      this[jR] = new xi(e, r), this[AR] = new xi(s, r)
    },
    _38: function () {
      var t = this[lc]._kn;
      t && t[fC](this._j6.bind(this))
    },
    _j6: function () {
      var t = this[lc]._kn;
      if (t) {
        var i = t[Mf];
        if (i[Lf]()) return this._4i(!1), void this._4n(!1);
        var n = t[ak],
          e = t[Na],
          s = t[Ba],
          h = t.scale,
          r = 1 / h,
          a = n.x > i.x + r || n.right < i[Zr] - r,
          o = n.y > i.y + r || n[Xr] < i[Xr] - r,
          f = a && o;
        f ? (C(this[RR], DR), C(this._8m, DR)) : (R(this[RR], DR), R(this._8m, DR)), this._4i(a, n, i, f ? e - pW : e), this._4n(o, n, i, f ? s - pW : s)
      }
    },
    _4i: function (t, i, n, e) {
      if (!t) return this._8m[aa][hw] = y_, void(this._8m.scale = 0);
      var s = Math.min(i.x, n.x),
        h = Math.max(i[Zr], n[Zr]),
        r = h - s,
        a = e / r;
      this._8m[io] = a, this._8m[aa][xa] = parseInt((i.x - s) * a) + Ga, this._8m[aa][Zr] = parseInt((h - i[Zr]) * a) + Ga, this._8m.style[hw] = ""
    },
    _4n: function (t, i, n, e) {
      if (!t) return this[RR][aa].display = y_, void(this[RR][io] = 0);
      var s = Math.min(i.y, n.y),
        h = Math.max(i.bottom, n[Xr]),
        r = h - s,
        a = e / r;
      this[RR][io] = a, this[RR][aa].top = parseInt((i.y - s) * a) + Ga, this[RR][aa][Xr] = parseInt((h - i.bottom) * a) + Ga, this[RR][aa][hw] = ""
    }
  }, ch[hr] = {
    shape: null,
    initialize: function () {
      T(this, ch, HM), this._n5u(), oW.initBindingProperties(this)
    },
    _n5u: function () {
      this[Bx] = new dW(this[$T][Wk]), this.addChild(this[Bx], 0), this[xx] = this[Bx]
    },
    invalidateShape: function () {
      this[Bx][VT](), this[HT]()
    },
    _$z: function (t, i, n) {
      var e = this._n96[WA](this, t, i, n);
      return e = tW[WA](this, t, i, n) || e, oW[WA](this, t, i, n) || e
    },
    doValidate: function () {
      this[xx] && (this[Bx][mo] = this[mo].path, this[xx].$layoutByAnchorPoint = null != this._2b, this[xx].anchorPosition = this._2b);
      var t = this.$data[Ak],
        i = 0,
        n = 0;
      t && (i = t.x, n = t.y);
      var e = this.$x != i || this.$y != n;
      return e && (this.$invalidateBounds = !0), this.$x = i, this.$y = n, cW[hr].doValidate[Uh](this) || e
    }
  }, E(ch, cW), K(ch[hr], {
    path: {
      get: function () {
        return this[mo].path
      }
    },
    length: {
      get: function () {
        return this[mo].length
      }
    }
  }), ch[hr].addPoint = function (t, i, n) {
    var e = this._hk(t, i),
      s = this.data,
      h = wn(s[Wk], e.x, e.y, n);
    h && (s.pathSegments = h)
  }, uh[hr] = {
    _mj: function () {
      this._j1[aa].visibility = cT
    },
    _ji: function () {
      this._j1.style[pR] = g_
    },
    clear: function () {
      this._9o.clear(), this[Aw]()
    },
    contains: function (t) {
      return t instanceof Object && t.id && (t = t.id), this._9o[Wd](t)
    },
    _4p: function (t) {
      Hq.setStyle(this._j1, u_, t ? Qw + t[tc](Rr) + ")" : "")
    },
    addDrawable: function (t, i) {
      if (i) {
        var n = {
          id: ++aG,
          drawable: t,
          scope: i
        };
        return this._9o.add(n), n
      }
      return t.id || (t.id = ++aG), this._9o.add(t), t
    },
    removeDrawable: function (t) {
      return t.id ? void this._9o[Qh](t) : this._9o[qd](t)
    },
    _9o: null,
    invalidate: function () {
      this[Aw]()
    },
    _n9d: function () {
      this[lc]._62 || this._js()
    },
    _ir: function (t, i) {
      this._j1[Vw](t, i)
    },
    _js: function () {
      var t = this._n7aseCanvas._scale,
        i = this.g;
      i._kw(), i.save(), this._n7aseCanvas._9z(i);
      for (var n = this._9o._j5, e = 0, s = n[Wh]; s > e; e++) i[Ex](), i[Pp](), this._fm(i, n[e], t), i[oo]();
      i[oo]()
    },
    _fm: function (t, i, n) {
      return i instanceof Function ? void i(t, n) : void(i[NR] instanceof Function && i.scope && i[NR][Uh](i[Hl], t, n))
    }
  }, TG.ZOOM_ANIMATE = !0;
  var mW = function (t) {
    this._kn = t
  };
  TG.ANIMATION_MAXTIME = 600, TG[BR] = RH[$R], mW[hr] = {
    _kn: null,
    _ed: null,
    _fj: function (t, i, n) {
      this._m6();
      var e = Math.abs(t / 2),
        s = Math.abs(i / 2),
        h = Math.min(TG[FR], .6 * Math.max(e, s) * 1e3);
      if (10 > h) return !1;
      var r = function (t) {
          return -(2 * Math.pow(t, 1.5) - 3 * t)
        },
        a = t * h / 3,
        o = i * h / 3;
      this._ky(this._kn.tx + a, this._kn.ty + o, 0, {
        duration: h,
        animationType: r
      }, n)
    },
    _7i: function (t, i, n, e, s) {
      this._ed && this._ed._m6(), s && (this[zR] = !0, this._kn[nR](!0)), this._3v(), this._ed = new NH(t, this, i, n), this._ed._6i = this._6i[gr](this), this._ed._kx(e)
    },
    _3v: function () {
      this._kn[GR]()
    },
    _6i: function () {
      this[zR] && (this._kn[nR](!1), delete this.__delayRender), this._kn.onAnimationEnd()
    },
    _e6: function () {
      return this._ed && this._ed._e6()
    },
    _m6: function () {
      this._ed && this._ed._m6()
    },
    _is: function (t) {
      var i = this[HR] + (this._toTX - this[HR]) * t,
        n = this._fromTY + (this[YR] - this[qR]) * t,
        e = this._fromScale + (this[WR] - this[UR]) * t;
      this._kn[RT](i, n, e, this[VR])
    },
    _ky: function (t, i, n, e, s) {
      this._m6();
      var h = this._kn,
        r = h.scale;
      if (0 >= n && (n = r), t != h.tx || i != h.ty || n != r) {
        var a, o, f;
        e instanceof Object && (a = e[XR], o = e[ZR], f = e.animationType);
        var c = h.tx,
          u = h.ty;
        if (!a)
          if (n != r) {
            var _ = n > r ? n / r : r / n;
            _ = Math.log(_) / Math.log(1.3), a = 60 * _
          } else {
            var d = SG(t, i, c, u);
            a = d / 2
          }
        o = o || TG[FR], f = f || TG[BR], a = Math.min(o, a), this[HR] = c, this[qR] = u, this[UR] = r, this[KR] = t, this[YR] = i, this._toScale = n, this._7i(this._is, a, f, s, n != r)
      }
    }
  }, TG[JR] = 8, TG[QR] = 4, TG[tD] = 30, TG[iD] = 20;
  var EW = Math.PI / 4;
  lh.prototype = {
    onElementRemoved: function (t, i) {
      this[nD] && (t == this.element || $(t) && p(t, this[nD])) && this.destroy(i)
    },
    onClear: function (t) {
      this[nD] && this[lg](t)
    },
    destroy: function () {
      delete this.element, this.removeDrawable()
    },
    invalidate: function () {
      this[Y_][jw]()
    },
    removeDrawable: function () {
      this._faId && (this.topCanvas.removeDrawable(this[eD]), delete this[eD], this[jw]())
    },
    addDrawable: function () {
      this[eD] || (this[eD] = this[Y_][sD](this[hD], this).id, this.invalidate())
    },
    doDraw: function () {},
    escapable: !0,
    onkeydown: function (t, i) {
      this.escapable && 27 == t[kE] && (G(t), this[lg](i))
    }
  }, $H[rD] = lh, vh.prototype = {
    defaultCursor: U_,
    getInteractionInstances: function (t) {
      if (!this[q_]) return null;
      for (var i = [], n = 0, e = this[q_][Wh]; e > n; n++) {
        var s = this[q_][n];
        s instanceof Function ? i[ir](new s(t)) : s instanceof Object && i[ir](s)
      }
      return i
    }
  }, bh[hr] = {
    _e8: null,
    _jz: null,
    destroy: function () {
      T(this, bh, lg, arguments), delete this._jz, delete this[Zb], delete this._e8
    },
    doDraw: function (t) {
      var i = this[Ta];
      i && (i[Vf](function (i) {
        this.drawPoint(t, i)
      }, this), this[aD] && t[hf](), this[oD](t))
    },
    styleDraw: function (t) {
      var i = gh(this[Gu][FC], this.getDefaultDrawStyles(this.graph));
      i[O_] && (t[O_] = i.lineWidth, i[I_] && (t[I_] = i.lineCap), i[S_] && (t.lineJoin = i[S_]), i[Df] && (t.lineDash = i[Df], t.lineDashOffset = i[Ff] || 0), t.strokeStyle = i[j_], t[C_]()), i.fillStyle && (t[wx] = i[wx], t[kx]())
    },
    drawPoint: function (t, i, n) {
      if (n) return void t[Dc](i.x, i.y);
      if ($H[Or](i)) {
        var e = i[0],
          s = i[1];
        t[mm](e.x, e.y, s.x, s.y)
      } else t[Nc](i.x, i.y)
    },
    setCurrentPoint: function (t) {
      this.currentPoint = t
    },
    addPoint: function (t) {
      this._jz || (this._jz = [], this[sD]()), this._jz[ir](t), this[jw]()
    }
  }, E(bh, lh), K(bh[hr], {
    currentPoint: {
      get: function () {
        return this._n55
      },
      set: function (t) {
        this._n55 = t, this[jw]()
      }
    },
    prevPoint: {
      get: function () {
        return this._jz && this._jz.length ? this._jz[this._jz.length - 1] : null
      }
    },
    points: {
      get: function () {
        return this[Zb] && this._jz && this._jz.length ? this._jz[Kh](this._n55) : void 0
      }
    }
  }), $H[fD] = bh, yh.prototype = {
    destroy: function () {
      T(this, yh, lg, arguments), delete this[cD], this._kp && (clearTimeout(this._kp), delete this._kp)
    },
    doDraw: function (t, i) {
      return this._jz ? this._jz[Wh] <= 1 ? mh[hr].doDraw.call(this, t, i) : void T(this, yh, hD, arguments) : void 0
    },
    ondblclick: function (t, i) {
      this[lg](i)
    },
    finish: function (t, i, n) {
      var e;
      this._jz && this._jz[Wh] >= 2 && (this._jz.shift(), e = new kG, l(this._jz, function (t) {
        if ($H[Or](t)) {
          var i = t[0],
            n = t[1];
          e.add(new mY(FH[ip], [i.x, i.y, n.x, n.y]))
        } else e.add(new mY(FH[uD], [t.x, t.y]))
      }, this)), i[_D](this[cD], n, t, e), this[lg](i)
    },
    _n7k: function (t, i) {
      return t instanceof Uq && i.canLinkFrom(t)
    },
    _eq: function (t, i) {
      return t instanceof Uq && i[dD](t, this[cD])
    },
    _n54: function (t, i) {
      var n = i[Hu](t);
      return n && n.bodyBounds ? n[qu][Xu] : t[Nk]
    },
    onstart: function (t, i) {
      if (this.start) {
        var n = t[hg]();
        return this._eq(n, i) ? void this[lD](t, i, n) : void this.addPoint(this.toLogicalPoint(t))
      }
    },
    startdrag: function (t, i) {
      if (!this.start && !t.responded) {
        var n = t[hg]();
        n && this[vD](n, i) && (t[bD] = !0, this[cD] = n, this[Fa](this[gD](n, i)))
      }
    },
    _n9r: function (t) {
      this._kp && (clearTimeout(this._kp), delete this._kp), this._kp = setTimeout(function (t) {
        if (delete this._kp, this[cD] && this.currentPoint) {
          var i = t.x - this[yD].x,
            n = t.y - this.currentPoint.y;
          Math.sqrt(i * i + n * n) * this.graph[io] <= 2 && this[Fa](this.currentPoint)
        }
      }[gr](this, this[xD](t)), TG[Cv])
    },
    ondrag: function (t, i) {
      this.onmousemove(t, i)
    },
    enddrag: function (t, i) {
      if (this.start) {
        var n = t[hg]();
        this._eq(n, i) && this[lD](t, i, n)
      }
    },
    onrelease: function (t, i) {
      vH(t) && this[lg](i)
    },
    onmousemove: function (t, i) {
      this[cD] && (this.currentPoint = this[xD](t), vH(t) && this[pD](t, i))
    },
    toLogicalPoint: function (t) {
      return this[Gu].toLogical(t)
    },
    getDefaultDrawStyles: function () {
      return {
        lineWidth: this[Gu][JL](Qq[pS]),
        strokeStyle: this[Gu].getDefaultStyle(Qq.EDGE_COLOR),
        lineDash: this[Gu][JL](Qq.EDGE_LINE_DASH),
        lineDashOffset: this[Gu][JL](Qq.EDGE_LINE_DASH_OFFSET),
        lineCap: this[Gu][JL](Qq.LINE_CAP),
        lineJoin: this.graph.getDefaultStyle(Qq.LINE_JOIN)
      }
    }
  }, E(yh, bh), $H[mD] = yh, xh.prototype = {
    getDefaultDrawStyles: function () {
      return {
        lineWidth: this[Gu][JL](Qq[NA]),
        strokeStyle: this[Gu][JL](Qq[pO]),
        fillStyle: this[Gu][JL](Qq[qj])
      }
    },
    finish: function (t, i) {
      if (this._jz && this._jz.length) {
        var n = this._jz,
          e = 0,
          s = 0,
          h = 0;
        n[Vf](function (t) {
          return $H.isArray(t) ? void t.forEach(function () {
            e += t.x, s += t.y, h++
          }) : (e += t.x, s += t.y, void h++)
        }), e /= h, s /= h;
        var r = [];
        n[Vf](function (t, i) {
          if (0 == i) return void r[ir](new mY(FH[tp], [t.x - e, t.y - s]));
          if ($H[Or](t)) {
            var n = t[0],
              h = t[1];
            r.push(new mY(FH[ip], [n.x - e, n.y - s, h.x - e, h.y - s]))
          } else r[ir](new mY(FH[uD], [t.x - e, t.y - s]))
        }), this[r_](t, r, e, s), this.destroy(i)
      }
    },
    startdrag: function (t) {
      t[bD] = !0
    },
    createElement: function (t, i, n, e) {
      return this[Gu].createShapeByInteraction(t, i, n, e)
    },
    onstart: function (t, i) {
      var n = i.toLogical(t);
      this._e8 = n, this[Fa](n)
    },
    onmousemove: function (t, i) {
      this._e8 && (this.currentPoint = i.toLogical(t))
    },
    ondblclick: function (t, i) {
      if (this._e8) {
        if (this._jz[Wh] < 3) return void this.destroy(i);
        delete this._jz[this._jz.length - 1], this[lD](t, i)
      }
    },
    isClosePath: !0
  }, E(xh, bh), $H.CreateShapeInteraction = xh, ph[hr] = {
    isClosePath: !1,
    createElement: function (t, i, n, e) {
      return this[Gu].createLineByInteraction(t, i, n, e)
    },
    getDefaultDrawStyles: function () {
      return {
        lineWidth: lW[Qq.SHAPE_STROKE],
        strokeStyle: lW[Qq[pO]],
        lineDash: this[Gu].getDefaultStyle(Qq.SHAPE_LINE_DASH),
        lineDashOffset: this[Gu][JL](Qq.SHAPE_LINE_DASH_OFFSET),
        lineCap: this.graph.getDefaultStyle(Qq.LINE_CAP),
        lineJoin: this[Gu].getDefaultStyle(Qq[GO])
      }
    }
  }, E(ph, xh), $H[ED] = ph, mh[hr] = {
    destroy: function (t) {
      T(this, mh, lg, arguments), t[XC] = "", this[cD] = null
    },
    doDraw: function (t) {
      if (this[cD] && this[yD]) {
        var i, n;
        this[Gu][FC] && (i = this[Gu][FC][qT], n = this[Gu][FC][Yu]), i = i || this[Gu][$C] || $H.EdgeUI, n = n || this[Gu].edgeType;
        var e = i.drawReferenceLine || $H.EdgeUI[bL],
          s = this[Gu].getUI(this[cD]);
        s && s[qu] && (s = s[qu][Xu], e(t, s, this.currentPoint, n), this[oD](t))
      }
    },
    canLinkFrom: function (t, i) {
      return t instanceof Uq && i[ZL](t)
    },
    canLinkTo: function (t, i) {
      return t instanceof Uq && i[dD](t, this[cD])
    },
    startdrag: function (t, i) {
      var n = t[hg]();
      this[ZL](n, i) && (t[bD] = !0, this.start = n, i[XC] = Ag, this.addDrawable())
    },
    ondrag: function (t, i) {
      this[cD] && ($H.stopEvent(t), this.currentPoint = i[hT](t), this[jw]())
    },
    enddrag: function (t, i) {
      if (this[cD]) {
        this[jw]();
        var n = t[hg]();
        this[dD](n, i) && i[_D](this[cD], n, t), this[lg](i)
      }
    },
    getDefaultDrawStyles: function () {
      return {
        lineWidth: this[Gu].getDefaultStyle(Qq[pS]),
        strokeStyle: this[Gu][JL](Qq[ES]),
        lineDash: this.graph[JL](Qq[IS]),
        lineDashOffset: this[Gu][JL](Qq[jS]),
        lineCap: this.graph[JL](Qq[Kj]),
        lineJoin: this.graph[JL](Qq[GO])
      }
    }
  }, E(mh, bh), $H[wD] = mh, TG.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS = !1, Oh.prototype = {
    html: null,
    createHTML: function () {
      var t = i[r_](TD);
      t[xc] = kD, t[aa][Af] = xw, t[aa][eo] = Xu, t[aa].border = MD, t[aa].padding = OD, t.style.boxShadow = "0px 0px 10px rgba(40, 85, 184, 0.75)", t[aa][hw] = y_, t[aa][cw] = g_;
      var n = this;
      return t[ID] = function (t) {
        n[SD](t)
      }, t[jD] = function (t) {
        return 27 == t[kE] ? void n[AD]() : void 0
      }, t[PD] = function (i) {
        if (13 == i[kE] || 10 == i[kE]) {
          if (i.preventDefault(), i.altKey || i[wa] || i[wE]) return kh(t, ro), void n.onValueChange(i);
          n[LD]()
        }
      }, i[xx][yc](t), t
    },
    setText: function (t, i) {
      this[SC].value = t || "", i && (this.html[aa].fontSize = i), Mh(this[SC]), this[CD](this[SC])
    },
    onSizeChange: function (t) {
      var i = (t[cd], t.offsetHeight, Th(t));
      return t[aa][Na] = i.width + 30 + Ga, t.style[Ba] = i.height + 10 + Ga, i
    },
    onValueChange: function (t) {
      var i = t.target;
      this[CD](i), i[aa][xa] = i.x - i[cd] / 2 + Ga
    },
    onClickOnWindow: function (t) {
      t[fu] != this[SC] && (TG.LABEL_EDITOR_SUBMIT_WHEN_LOST_FOCUS ? this[LD]() : this[AD]())
    },
    startEdit: function (i, n, e, s, h) {
      this[SC] || (this.html = this.createHTML()), this[RD] || (this[RD] = function (t) {
        this[DD](t)
      }[gr](this)), t.addEventListener(Mb, this[RD], !0), this[du] = h, this[SC].x = i, this[SC].y = n, this.html[aa][hw] = cR, wh(this[SC], i, n), this[ND](e, s || 10), wh(this[SC], i, n)
    },
    isEditing: function () {
      return y_ != this.html.style[hw]
    },
    cancelEdit: function () {
      this[LD](!0)
    },
    stopEdit: function (i) {
      if (this[BD]()) {
        t[Pv](Mb, this.stopEditWhenClickOnWindow);
        var n = this[SC][vr];
        if (!i && this[du] && this[du](n) === !1) return !1;
        this[SC][aa][hw] = y_, this[SC][vr] = null, this[du] = null
      }
    },
    destroy: function () {
      this[SC] && i.body.removeChild(this.html)
    }
  }, $H[$D] = Oh;
  var wW = function (t) {
    this[Gu] = t
  };
  wW[hr] = {
    destroy: function (t) {
      t.labelEditor && (t[FD][lg](), delete t[FD])
    },
    ondblclick: function (t, i) {
      var n = t[hg]();
      if (n) {
        if (n.dblclickable !== !1) {
          if (i[dL] && i[zD](n)) {
            var e = i.hitTest(t);
            if (e instanceof _W && e[dL] !== !1) {
              var s = i.labelEditor;
              s || (i[FD] = s = new Oh);
              var h = e[go]();
              return h = i[GD](h.x + h[Na] / 2, h.y + h.height / 2), h = Eh(h.x, h.y, i[SC]), void i.startLabelEdit(n, e, s, h)
            }
          }
          var r = n instanceof Zq,
            a = n instanceof Wq && n.hasEdgeBundle();
          return n._41 && (pi(t) || !r && !a) ? void(i[iM] = n) : r ? (n[WT] = !n[WT], void this[Gu].onInteractionEvent(new Rh(this[Gu], Rh[cM], t, n))) : void(a && this[Gu][kC](n) && this.graph[qL](new Rh(this[Gu], Rh[HD], t, n)))
        }
      } else {
        if (i[iM]) return void i[YD]();
        if (i[qD]) {
          var o = i[WD] || 1;
          Math.abs(i[io] - o) < 1e-4 ? i[uC]() : i[cC](o)
        }
      }
    }
  };
  var TW = function (t) {
    this[Gu] = t
  };
  TW[hr] = {
    onkeydown: function (t, i) {
      if (i[dL]) {
        var n = t[kE];
        if (8 == n || 46 == n || 127 == n) return i[UD](t), void F(t);
        if (pi(t)) {
          if (67 == n);
          else if (86 == n);
          else if (90 == n);
          else if (89 != n) return;
          F(t)
        }
      }
    }
  }, $H.EditInteraction = TW;
  var kW = function (t) {
    this[Gu] = t
  };
  kW[hr] = {
    onkeydown: function (i, n) {
      if (i[VD] && 83 == i.keyCode) {
        var e = n[XD](n.scale, n[ak]),
          s = t[Pa](),
          h = s.document;
        h[ZD] = KD + e[Na] + JD + e[Ba];
        var r = h[r_](f_);
        r.src = e[mo], h[xx][yc](r), F(i)
      }
    }
  };
  var MW = function (t) {
    this.graph = t
  };
  MW[hr] = {
    destroy: function () {
      delete this[QD], delete this[tN]
    },
    _22: function (t) {
      var i = new kG;
      return t[$_][Vf](function (n) {
        t[wC](n) && t.isVisible(n) && i.add(n)
      }, this), i
    },
    onstart: function (t, i) {
      this[tN] && this[lg](i)
    },
    startdrag: function (t, i) {
      if (!(t[bD] || t.touches && 1 != t[Yr][Wh])) {
        var n = t.getData();
        if (!n || !i[iN](n) || !i[wC](n)) return void this[lg](i);
        t.responded = !0, this.currentDraggingElement = n, this.draggingElements = this._22(i);
        var e = new Rh(i, Rh.ELEMENT_MOVE_START, t, this.currentDraggingElement, this[QD][_d]);
        return i.beforeInteractionEvent(e) === !1 ? void this[lg](i) : void i.onInteractionEvent(e)
      }
    },
    ondrag: function (t, i) {
      if (this[tN]) {
        if (t[Yr] && 1 != t[Yr][Wh]) return void this[eg](t, i);
        G(t);
        var n = t.dx,
          e = t.dy,
          s = i[io];
        n /= s, e /= s;
        var h = new Rh(i, Rh[nN], t, this.currentDraggingElement, this.draggingElements.datas);
        i[eN](this[QD][_d], n, e), i[qL](h)
      }
    },
    enddrag: function (t, i) {
      if (this[tN]) {
        if (this.draggingElements && this[QD][Wh]) {
          if (t[wE]) {
            var n, e = i[hT](t),
              s = e.x,
              h = e.y;
            i[sN](function (t) {
              var i = t[mo];
              if (!this[QD][Ju](i) && t.uiBounds[yo](s - t.x, h - t.y) && t[Qu](s, h, 1)) {
                if (i instanceof $H.Edge) {
                  if (!i[h_]) return;
                  for (var e = this[QD][Wh]; e-- > 0;) {
                    var r = this.draggingElements.get(e);
                    if (r instanceof $H[RL] && r[hN](i)) return
                  }
                  return n = i, !1
                }
                return (i[h_] || i._i5() && i[WT]) && (n = i), !1
              }
            }, this), n && this[QD][Vf](function (t) {
              for (var i = t.parent; i;) {
                if (this.draggingElements[Ju](i)) return;
                i = i.parent
              }
              t[pc] = n
            }, this)
          }
          var r = new Rh(i, Rh[rN], t, this[tN], this.draggingElements.datas);
          i.onInteractionEvent(r)
        }
        this[lg](i)
      }
    },
    onpinch: function (t, i) {
      this[tN] && this[eg](t, i)
    },
    step: 1,
    onkeydown: function (t, i) {
      if (pi(t)) {
        var n, e;
        if (37 == t.keyCode ? n = -1 : 39 == t[kE] ? n = 1 : 38 == t[kE] ? e = -1 : 40 == t.keyCode && (e = 1), n || e) {
          var s = this._22(i)[_d];
          if (0 != s[Wh]) {
            F(t), n = n || 0, e = e || 0;
            var h = this[aN] / i[io],
              r = new Rh(i, Rh.ELEMENT_MOVE_END, t, null, s);
            i[eN](s, n * h, e * h), i[qL](r)
          }
        }
      }
    }
  };
  var OW = function (t) {
    this[Gu] = t
  };
  OW.prototype = {
    onkeydown: function (t, i) {
      pi(t) || (37 == t[kE] ? (this._59(i, 1, 0), F(t)) : 39 == t[kE] ? (this._59(i, -1, 0), F(t)) : 38 == t[kE] ? (this._59(i, 0, 1), F(t)) : 40 == t[kE] && (this._59(i, 0, -1), F(t)))
    },
    _59: function (t, i, n) {
      t._9g(i, n)
    },
    onstart: function (t, i) {
      this._kx && this.destroy(i)
    },
    _kx: !1,
    startdrag: function (t, i) {
      if (!t[bD]) {
        t[bD] = !0, this._kx = !0, i[XC] = SH;
        var n = new Rh(i, Rh[oN], t);
        i[qL](n)
      }
    },
    ondrag: function (t, i) {
      this._kx && i[to](t.dx || 0, t.dy || 0)
    },
    enddrag: function (t, i) {
      if (this._kx) {
        if (i[CR] !== !1) {
          var n = t.vx,
            e = t.vy;
          (Math.abs(n) > .1 || Math.abs(e) > .1) && i._9g(n, e)
        }
        this[lg](i);
        var s = new Rh(i, Rh.PAN_END, t);
        i[qL](s)
      }
    },
    startpinch: function (t, i) {
      i[nR](!0)
    },
    onpinch: function (t, i) {
      this._kx = !0;
      var n = t.dScale;
      if (n) {
        var e = i[LL](t[Xu]);
        i.zoomAt(n, e.x, e.y, !1)
      }
    },
    endpinch: function (t, i) {
      i[nR](!1)
    },
    destroy: function (t) {
      this._kx = !1, t[XC] = null
    }
  }, Ih.prototype = {
    _1g: function (t) {
      this[nD] && t[zo] == this.element && this[Gu].callLater(function () {
        this._j6()
      }, this)
    },
    _5: function () {
      this[fN] || (this._liPropertyChangeListing = !0, this[Gu][cN][dd](this._1g, this))
    },
    _4: function () {
      this[fN] = !1, this[Gu][cN].removeListener(this._1g, this)
    },
    onElementRemoved: function (t, i) {
      this[nD] && (t == this[nD] || Array[Or](t) && p(t, this[nD])) && this[lg](i)
    },
    onClear: function (t) {
      this[nD] && this[lg](t)
    },
    destroy: function () {
      this[Gu][XC] = null, this.element && delete this[nD]._editting, this[uN] = !1, delete this[nD], delete this._8u, delete this[Zb], delete this._n9anEdit, this._65(), this._4()
    },
    _65: function () {
      this.drawLineId && (this[Y_][_N](this[dN]), delete this.drawLineId, this[Y_][jw]())
    },
    _n7g: function () {
      this[dN] && this[Y_][Ju](this[dN]) || (this[dN] = this[Y_][sD](this.drawLine, this).id, this[Y_].invalidate())
    },
    _8u: null,
    _4t: function (t) {
      this._8u = t, this.invalidate()
    },
    _em: function (t, i, n) {
      t[Pp](), i[lN] ? t[ky](i.x - this[hd] / n, i.y - this[hd] / n, this[hd] / n * 2, this.handlerSize / n * 2) : t.arc(i.x, i.y, this[hd] / n, 0, 2 * Math.PI, !1), t.lineWidth = 1 / n, t[Df] = [], t[j_] = L_, t[wx] = "rgba(255, 255, 0, 0.8)", t.stroke(), t.fill()
    },
    _fa: function (t, i, n, e) {
      e ? t[Dc](i, n) : t[Nc](i, n)
    },
    drawLine: function (t, i) {
      if (this._8u && this._8u.length) {
        t[Ex]();
        var n = this[nD] instanceof Vq;
        n && (t[to](this[nD].x, this[nD].y), this[nD][ko] && t[ko](this[nD].rotate));
        var e, s = [];
        t.beginPath(), this._8u[Wh], this._8u[Vf](function (i) {
          if (i.type != FH[sp])
            for (var n = 0, h = i[Ta]; n + 1 < h[Wh];) {
              var r = h[n],
                a = h[n + 1],
                o = {
                  x: r,
                  y: a,
                  isControlPoint: this._70(i, n)
                };
              s[ir](o), this._fa(t, o.x, o.y, null == e), e = o, n += 2
            }
        }, this), t.lineWidth = 1 / i, t[Df] = [2 / i, 3 / i], t[j_] = vN, t.stroke(), s[Vf](function (n) {
          this._em(t, n, i)
        }, this), t[oo]()
      }
    },
    invalidate: function () {
      this[Y_].invalidate()
    },
    _3n: function (t) {
      if (this[nD] != t && (this[nD] && this[lg](), t && this.isEditable(t))) {
        var i = this._4w(t, this[Gu]);
        i && (this[nD] = t, t._editting = !0, this._n9anEdit = !0, this._4t(i), this._5(), this[bN]())
      }
    },
    _j6: function () {
      if (this[dN] && this[nD]) {
        var t = this._4w(this[nD], this[Gu]);
        return t ? void this._4t(t) : void this.destroy(this[Gu])
      }
    },
    _4w: function (t, i) {
      if (i.isEditable(t)) {
        var n = t[mL] || [];
        n instanceof kG && (n = n[Fu]());
        var e = i[Hu](t);
        if (e instanceof $H.EdgeUI) {
          var s = t[Pc],
            h = t[mc],
            r = i[Hu](s),
            a = i[Hu](h),
            o = r[qu][tr](),
            f = a[qu][tr](),
            c = o[Xu],
            u = f.center,
            _ = e.getStyle($H[RC][Wu]),
            d = e.getStyle($H[RC][Uu]);
          _ && (c.x += _.x || 0, c.y += _.y || 0), d && (u.x += d.x || 0, u.y += d.y || 0), n.splice(0, 0, new $H[gN](FH[tp], [c.x, c.y])), n.push(new $H.PathSegment(FH[tp], [u.x, u.y]))
        }
        return n
      }
    },
    _hk: function (t, i) {
      t -= this.element.x, i -= this[nD].y;
      var n = {
        x: t,
        y: i
      };
      return this[nD][ko] && Gs(n, -this[nD][ko]), n
    },
    onclick: function (t, i) {
      if (i[dL] && t[TE] && this.element) {
        var n = this._f9(t, i);
        if (n && n.isControlPoint) return void this[nD][yN](n[xN]);
        if (this[nD] == t[hg]()) {
          var e = i[hT](t),
            s = i.getUI(this.element);
          s[Fa](e.x, e.y, this.handlerSize || 2)
        }
      }
    },
    isEditable: function (t) {
      return this[Gu][zD](t) && (t instanceof Vq || t instanceof Wq && (!t.isLooped() || t[$u]()))
    },
    ondblclick: function (t, i) {
      if (!i[dL]) return void(this[nD] && this[lg](i));
      var n = t[hg]();
      return !n || n == this[nD] || n[pN] ? void this.destroy(i) : void this._3n(n)
    },
    onstart: function (t, i) {
      if (this[uN] = !0, !i[dL]) return void(this[nD] && this[lg](i));
      if (!t[bD]) {
        if (this[nD] && this._f9(t, i)) return void(t.responded = !0);
        var n = t[hg]();
        return n && i[mN](n) && n instanceof Vq ? void(this.element && n != this.element && this[lg]()) : void this._3n(n)
      }
    },
    onrelease: function () {
      this._mousePressed = !1, this[nD] && (this[EN] = !0)
    },
    _n55: null,
    _f9: function (t, i) {
      var n = i[hT](t);
      this[nD] instanceof Vq && (n = this._hk(n.x, n.y));
      var e, s = i.scale,
        h = this[hd] / s,
        r = this._8u,
        a = r[Wh],
        o = this[nD] instanceof $H[BC];
      return r[Vf](function (t, s) {
        for (var f = 0, c = t[Ta]; f + 1 < c[Wh];) {
          var u = c[f],
            _ = c[f + 1],
            d = SG(n.x, n.y, u, _);
          if (h > d) {
            if (e = {
                oldPoints: c.slice(0),
                segment: t,
                index: s,
                pointIndex: f
              }, o && (e[xN] -= 1), o && !Sh(t) && (0 == s || s == r[Wh] - 1)) {
              e.isEndPoint = !0;
              var l = 0 == s;
              e[wN] = l;
              var v = l ? $H.Styles.EDGE_FROM_OFFSET : $H[RC][Uu],
                b = i[gu](this[nD], v) || {};
              e[TN] = [b.x || 0, b.y || 0]
            }
            return this._70(t, f) && (e[lN] = !0, s > 0 && (e[kN] = r instanceof kG ? r[Gd](s - 1) : r[s - 1]), a > s + 1 && (e[MN] = r instanceof kG ? r[Gd](s + 1) : r[s + 1], e[MN][Ta] && (e.oldNextPoints = e.nextSegment.points.slice(0)))), !1
          }
          f += 2
        }
      }, this), e
    },
    _70: function (t, i) {
      return i == t.points[Wh] - 2
    },
    startdrag: function (t, i) {
      if (this[nD] && this._n9anEdit && (this[Zb] = this._f9(t, i), this._n55)) {
        this._65(), t[bD] = !0;
        var n = new Rh(i, Rh[ON], t, this[nD]);
        n[IN] = this._n55, i[qL](n)
      }
    },
    onkeyup: function (t, i) {
      this[uN] && 16 != !t.keyCode && this[nD] && this[Zb] && this[Zb][Rb] && this[SN](this[Zb].delta.x, this[Zb].delta.y, i, t, !1)
    },
    onkeydown: function (t, i) {
      this[uN] && this[nD] && this[Zb] && t[wE] && this[Zb][Rb] && this[SN](this[Zb].delta.x, this[Zb].delta.y, i, t, !0)
    },
    _n9p: function (t, i, n, e, s) {
      var h = this[Zb],
        r = this[nD],
        a = h.oldPoints,
        o = h[jN];
      if (h.isEndPoint) {
        var f = h.isFrom ? $H.Styles.EDGE_FROM_OFFSET : $H.Styles[Uu],
          c = {
            x: a[0] + t,
            y: a[1] + i
          };
        r.setStyle(f, c);
        var u = new Rh(n, Rh[AN], e, r);
        return u.point = h, void n[qL](u)
      }
      if (s && h[lN]) {
        var _ = {
            x: a[a.length - 2] + t,
            y: a[a[Wh] - 1] + i
          },
          d = h.prevSegment,
          l = h.nextSegment,
          v = 20 / n[io],
          b = Number.MAX_VALUE,
          g = b,
          y = b,
          x = b;
        d && (d = d[wo], b = Math.abs(_.x - d.x), y = Math.abs(_.y - d.y)), l && (l = l[wo], g = Math.abs(_.x - l.x), x = Math.abs(_.y - l.y)), v > b && g > b ? t += d.x - _.x : v > g && b > g && (t += l.x - _.x), v > y && x > y ? i += d.y - _.y : v > x && y > x && (i += l.y - _.y)
      }
      if (h[lN] && Sh(o)) {
        for (var p = o[Ta][Wh] - 4; p < o[Ta].length;) {
          var m = a[p] + t,
            E = a[p + 1] + i;
          o[Ta][p] = m, o[Ta][p + 1] = E, p += 2
        }
        if (h[MN] && Sh(h.nextSegment)) {
          var w = h.oldNextPoints,
            m = w[0] + t,
            E = w[1] + i;
          h[MN][Ta][0] = m, h[MN][Ta][1] = E
        }
      } else {
        var p = h[PN],
          m = a[p] + t,
          E = a[p + 1] + i;
        o.points[p] = m, o[Ta][p + 1] = E
      }
      r.firePathChange();
      var u = new Rh(n, Rh[AN], e, r);
      u[IN] = h, n[qL](u)
    },
    ondrag: function (t, i) {
      if (this[nD] && this[Zb]) {
        var n = this[Zb],
          e = this[nD],
          s = t[xg],
          h = t[pg],
          r = i[io];
        if (s /= r, h /= r, e[ko]) {
          var a = {
            x: s,
            y: h
          };
          Gs(a, -e.rotate), s = a.x, h = a.y
        }
        n[Rb] = {
          x: s,
          y: h
        }, this[SN](s, h, i, t, t[wE])
      }
    },
    enddrag: function (t, i) {
      if (this.element && this._n55) {
        this._n7g(), this._j6();
        var n = new Rh(i, Rh[LN], t, this[nD]);
        n[IN] = this._n55, i[qL](n)
      }
    },
    onmousemove: function (t, i) {
      this[nD] && (i[XC] = t[TE] && (this._f9(t, i) || this[nD] == t[hg]()) ? "crosshair" : null)
    }
  }, TG[CN] = 1, TG[RN] = X(3724541951), TG[DN] = X(1430753245);
  var IW = function (t) {
    this[Gu] = t, this[Y_] = t[Y_]
  };
  IW[hr] = {
    onstart: function (t, i) {
      this._kx && this[lg](i)
    },
    startdrag: function (t, i) {
      t[bD] || (t.responded = !0, this._kx = i.toLogical(t), i[XC] = Ag, this._17Id = this.topCanvas.addDrawable(this._17, this).id)
    },
    ondrag: function (t, i) {
      if (this._kx) {
        G(t), this._end = i[hT](t), this.invalidate();
        var n = new Rh(i, Rh.SELECT_START, t, i[$_]);
        i[qL](n)
      }
    },
    enddrag: function (t, i) {
      if (this._kx) {
        this._fcTimer && (clearTimeout(this[NN]), this[NN] = null), this._fc(!0), this[lg](i);
        var n = new Rh(i, Rh.SELECT_END, t, i[$_]);
        i[qL](n)
      }
    },
    onpinch: function (t, i) {
      this._kx && this[eg](t, i)
    },
    _17: function (t, i) {
      t.strokeStyle = TG.SELECTION_RECTANGLE_STROKE_COLOR, t[wx] = TG[DN], t.lineWidth = TG.SELECTION_RECTANGLE_STROKE / i;
      var n = this._kx.x,
        e = this._kx.y;
      t[ky](n, e, this[BN].x - n, this[BN].y - e), t[kx](), t.stroke()
    },
    invalidate: function () {
      return this.invalidateFlag ? void this.topCanvas[jw]() : (this[rM] = !0, void(this._fcTimer = setTimeout(this._fc[gr](this), 100)))
    },
    _fc: function (t) {
      if (this[rM] = !1, this[NN] = null, !this._kx || _G && !t) return void this[Y_][jw]();
      var i = Math.min(this._kx.x, this[BN].x),
        n = Math.min(this._kx.y, this[BN].y),
        e = Math.abs(this._kx.x - this[BN].x),
        s = Math.abs(this._kx.y - this._end.y);
      if (!e || !s) return void this.graph.selectionModel[$a]();
      var h, r = [],
        a = this[Gu][io];
      if (this[Gu].forEachVisibleUI(function (t) {
          t._ht && this[Gu].isSelectable(t[$T]) && (h = t._fo, (ai(i, n, e, s, h.x + t._x, h.y + t._y, h[Na], h[Ba]) || Pn(i, n, e, s, t, a)) && r[ir](t[$T]))
        }, this), this[Gu][$_].set(r), this[Y_].invalidate(), !t) {
        var o = new Rh(this.graph, Rh[$N], null, this[Gu][$_]);
        this.graph.onInteractionEvent(o)
      }
    },
    destroy: function (t) {
      this._kx = null, t[XC] = null, this._17Id && (this.topCanvas[_N](this[FN]), delete this[FN], this[Y_].invalidate())
    }
  };
  var SW = I({
      "super": IW,
      onstart: null,
      startdrag: null,
      ondrag: null,
      enddrag: null,
      accept: function (t, i, n) {
        return n.enableRectangleSelectionByRightButton !== !1
      },
      oncontextmenu: function (t, i) {
        i[zN] || G(t)
      },
      onstart2: function () {
        IW[hr][Ub][sr](this, arguments)
      },
      startdrag2: function (t, i) {
        t.responded || (i[zN] && i.popupmenu[GN] instanceof Function && i[zN][GN](), IW[hr][Jb].apply(this, arguments))
      },
      ondrag2: function () {
        IW[hr][tg][sr](this, arguments)
      },
      enddrag2: function () {
        IW[hr][eg][sr](this, arguments)
      }
    }),
    EW = Math.PI / 4;
  jh[hr] = {
    _es: !1,
    _eu: !1,
    _1g: function (t) {
      this[nD] && t[zo] == this.element && this[Gu][fC](function () {
        this._n5b()
      }, this)
    },
    _5: function () {
      this[fN] || (this._liPropertyChangeListing = !0, this[Gu][cN][dd](this._1g, this))
    },
    _4: function () {
      this[fN] = !1, this[Gu].dataPropertyChangeDispatcher[ql](this._1g, this)
    },
    onElementRemoved: function (t, i) {
      this[nD] && (t == this[nD] || $(t) && p(t, this[nD])) && this[lg](i)
    },
    onClear: function (t) {
      this[nD] && this[lg](t)
    },
    ondblclick: function (t, i) {
      this[nD] && this.destroy(i)
    },
    destroy: function (t) {
      t[XC] = null, delete this[nD], delete this[dP], delete this[aP], delete this[Zb], delete this[EN], delete this._jz, delete this[HN], delete this._eu, delete this._es, delete this._insets, this._65(), this._4()
    },
    _65: function () {
      this[eD] && (this[Y_][_N](this[eD]), delete this[eD], this.topCanvas[jw]())
    },
    _n7g: function () {
      this._faId && this[Y_].contains(this[eD]) || (this[eD] = this.topCanvas[sD](this._fa, this).id, this[Y_][jw]())
    },
    _n9w: null,
    _jz: null,
    _8r: function (t) {
      this[dP] = t;
      var i = this._n9w.x,
        n = this._n9w.y,
        e = this._n9w[Na],
        s = this[dP][Ba];
      if (this[nD] instanceof Zq && this.element[WT], this._eu) {
        var h = [];
        h.push({
          x: i,
          y: n,
          p: CG[vl],
          cursor: YN,
          rotate: 5 * EW
        }), h[ir]({
          x: i + e / 2,
          y: n,
          p: CG[yl],
          cursor: qN,
          rotate: 6 * EW
        }), h[ir]({
          x: i + e,
          y: n,
          p: CG[ml],
          cursor: ad,
          rotate: 7 * EW
        }), h[ir]({
          x: i,
          y: n + s / 2,
          p: CG[bl],
          cursor: WN,
          rotate: 4 * EW
        }), h.push({
          x: i,
          y: n + s,
          p: CG.LEFT_BOTTOM,
          cursor: ad,
          rotate: 3 * EW
        }), h[ir]({
          x: i + e,
          y: n + s / 2,
          p: CG[El],
          cursor: WN,
          rotate: 0
        }), h[ir]({
          x: i + e / 2,
          y: n + s,
          p: CG[pl],
          cursor: qN,
          rotate: 2 * EW
        }), h[ir]({
          x: i + e,
          y: n + s,
          p: CG.RIGHT_BOTTOM,
          cursor: YN,
          rotate: EW
        }), this._jz = h
      }
      this._rotatePoint = this._es ? {
        x: i + e / 2,
        y: n,
        cursor: jH
      } : null, this[Aw]()
    },
    _em: function (t, i, n, e) {
      t[Pp]();
      var s = (this[hd] - 1) / e;
      t[ky](i - s, n - s, 2 * s, 2 * s), t[O_] = 1 / e, t.lineDash = [], t[j_] = L_, t[wx] = "rgba(255, 255, 255, 0.8)", t[C_](), t[kx]()
    },
    _5i: function (t, i, n, e, s, h) {
      s = s || this[hd], h = h || UN, t.beginPath(), s /= e, t.arc(i, n, s, 0, 2 * Math.PI, !1), t[O_] = 1 / e, t.lineDash = [], t[j_] = L_, t[wx] = h, t.stroke(), t.fill()
    },
    _hk: function (t, i) {
      t -= this.element.x, i -= this.element.y;
      var n = {
        x: t,
        y: i
      };
      return this.element[ko] && Gs(n, -this[nD].rotate), n
    },
    _fa: function (t, i) {
      if (this[dP]) {
        if (t[Ex](), t[to](this[nD].x, this[nD].y), this.element.rotate && t[ko](this[nD][ko]), this[HN]) {
          this._5i(t, 0, 0, i, 3, VN);
          var n = this[HN].x,
            e = this._rotatePoint.y - this._rotateHandleLength / i;
          t[Pp](), t.moveTo(n, this[HN].y), t.lineTo(n, e), t.lineWidth = 1 / i, t.strokeStyle = vN, t[C_](), this._5i(t, n, e, i)
        }
        if (this._jz) {
          var s = this._n9w.x,
            h = this[dP].y,
            r = this[dP][Na],
            a = this[dP][Ba];
          t.beginPath(), t[ky](s, h, r, a), t[O_] = 1 / i, t[Df] = [2 / i, 3 / i], t[j_] = vN, t.stroke(), l(this._jz, function (n) {
            this._em(t, n.x, n.y, i)
          }, this)
        }
        t[oo]()
      }
    },
    _n9d: function () {
      this.topCanvas[jw]()
    },
    _3n: function (t, i, n, e) {
      this[nD] = t, this[bN](), this._eu = n, this._es = e, this[XN](), this._5()
    },
    _n5b: function () {
      if (this[eD] && this.element) {
        var t = this.graph[Hu](this[nD]);
        this[aP] = t[xx];
        var i = Ah(this[aP], this._n7ody._jg),
          n = Ah(this[aP], this[aP]._7p);
        this[ZN] = new LG(i.y - n.y, i.x - n.x, n[Xr] - i.bottom, n[Zr] - i[Zr]), this._8r(n)
      }
    },
    _n7m: function (t, i) {
      return i[mN](t)
    },
    _n7n: function (t, i) {
      return (!t._i5() || !t[WT]) && i.isRotatable(t)
    },
    _d4: function (t, i) {
      return t instanceof Uq && i[zD](t)
    },
    onstart: function (t, i) {
      if (!i[dL]) return void(this[nD] && this[lg](i));
      if (!t[bD]) {
        var n = i[Hu](t),
          e = t[hg]();
        if (e != this[nD]) {
          if (this[nD]) {
            if (this._f9(t, i)) return void(t[bD] = !0);
            this[lg](i)
          }
          if (e && !e[pN] && this._d4(e, i)) {
            var s = this[KN](e, i, n),
              h = this[JN](e, i, n);
            (s || h) && this._3n(e, i, s, h)
          }
        }
      }
    },
    onrelease: function (t, i) {
      this[nD] && (this[EN] = !0, this[bN](), i[fC](function () {
        this[XN]()
      }, this))
    },
    _n55: null,
    _f9: function (t, i) {
      var n = i[hT](t);
      n = this._hk(n.x, n.y);
      var e = i[io],
        s = this.handlerSize / e;
      if (this[HN]) {
        var h = this._rotatePoint.x,
          r = this[HN].y - this[rd] / e;
        if (SG(n.x, n.y, h, r) < s) return this[HN]
      }
      if (this._jz && this._jz[Wh]) {
        var a;
        return l(this._jz, function (t) {
          return SG(n.x, n.y, t.x, t.y) < s ? (a = t, !1) : void 0
        }, this), a
      }
    },
    onmousemove: function (t, i) {
      if (this.element) {
        var n = this._f9(t, i);
        if (!n) return void(i[XC] = null);
        if (n != this[HN] && this[nD][ko]) {
          var e = n[ko] + this[nD].rotate;
          return void(i.cursor = Ph(e))
        }
        i.cursor = n.cursor
      }
    },
    startdrag: function (t, i) {
      if (this[nD] && (this._65(), this._n9anEdit && (this[Zb] = this._f9(t, i), this[Zb]))) {
        if (t.responded = !0, this._n55 == this[HN]) return this[Zb][cD] = i.toLogical(t), void(this[Zb][ko] = this.element[ko] || 0);
        var n = new Rh(i, Rh[QN], t, this[nD]);
        n.point = this[Zb], i[qL](n)
      }
    },
    _6t: function (t, i, n, e, s, h) {
      var r = this[dP],
        a = r.x,
        o = r.y,
        f = r[Na],
        c = r[Ba];
      if (h) {
        var u = e != f;
        u ? s = e * c / f : e = s * f / c
      }
      var _ = t[Wk]._gg,
        d = e / f,
        l = s / c,
        v = -a * d + i,
        b = -o * l + n;
      _.forEach(function (t) {
        if (t[To] != FH[sp]) {
          var e = t[Ta];
          if (e && e[Wh])
            for (var s = 0, h = e[Wh]; h > s; s += 2) {
              var r = e[s],
                f = e[s + 1];
              e[s] = (r - a) * d + i - v, e[s + 1] = (f - o) * l + n - b
            }
        }
      }), this[dP].set(i - v, n - b, e, s), t[tB](t.x + v, t.y + b), t.firePathChange()
    },
    _96: function (t, i, n, e, s) {
      this[dP].set(i, n, e, s), t[dM] = {
        x: i,
        y: n,
        width: e,
        height: s
      }
    },
    _4e: function (t, i, n, e, s) {
      if (this[nD] instanceof Zq) return this._96(this[nD], t, i, n, e, s);
      if (this[nD] instanceof Vq) return this._6t(this[nD], t, i, n, e, s);
      var h = this[aP] instanceof _W;
      if (!h && s) {
        var r = this[dP],
          a = this._n7ody[iB],
          o = n != r[Na];
        o ? e = n * a.height / a[Na] : n = e * a[Na] / a[Ba]
      }
      var f = this[nD].anchorPosition,
        c = new AG(n - this[ZN][xa] - this[ZN].right, e - this[ZN].top - this._insets[Xr]);
      if (c[Na] < 1 && (n = this._insets[xa] + this[ZN].right + 1, c[Na] = 1), c[Ba] < 1 && (e = this[ZN].top + this[ZN][Xr] + 1, c[Ba] = 1), h ? this.element.setStyle(Qq[Nj], c) : this[nD].size = c, f) {
        var u = fi(f, n, e),
          _ = u.x + t - (this[aP][IM] || 0),
          d = u.y + i - (this._n7ody[Cj] || 0);
        if (this[dP].set(t - _, i - d, n, e), this[nD][ko]) {
          var u = Gs({
            x: _,
            y: d
          }, this[nD][ko]);
          _ = u.x, d = u.y
        }
        this.element.x += _, this[nD].y += d
      } else {
        var _ = this._n9w.x * n / this[dP].width - t,
          d = this[dP].y * e / this[dP][Ba] - i;
        if (this[dP].set(t + _, i + d, n, e), this[nD].rotate) {
          var u = Gs({
            x: _,
            y: d
          }, this[nD][ko]);
          _ = u.x, d = u.y
        }
        this.element.x -= _, this.element.y -= d
      }
    },
    ondrag: function (t, i) {
      if (this[nD] && this[Zb])
        if (this[Zb] != this._rotatePoint) {
          var n = t.dx,
            e = t.dy,
            s = i[io];
          if (n /= s, e /= s, this[nD][ko]) {
            var h = {
              x: n,
              y: e
            };
            Gs(h, -this[nD].rotate), n = h.x, e = h.y
          }
          var r = this[Zb].p,
            a = this._n9w,
            o = a.x,
            f = a.y,
            c = a[Na],
            u = a.height;
          r[Jr] == RG ? n >= c ? (o += c, c = n - c || 1) : (o += n, c -= n) : r[Jr] == NG && (-n >= c ? (c = -n - c || 1, o -= c) : c += n), r.verticalPosition == BG ? e >= u ? (f += u, u = e - u || 1) : (f += e, u -= e) : r.verticalPosition == FG && (-e >= u ? (u = -e - u || 1, f -= u) : u += e), this._4e(o, f, c, u, t.shiftKey);
          var _ = new Rh(i, Rh[nB], t, this[nD]);
          _[IN] = this[Zb], i[qL](_)
        } else {
          var h = i[hT](t),
            d = dn(h.x, h.y, this[nD].x, this[nD].y, this[Zb].start.x, this[Zb][cD].y, !0);
          d += this[Zb].rotate || 0, t.shiftKey && (d = Math[xo](d / Math.PI * 4) * Math.PI / 4), this[nD].rotate = d % (2 * Math.PI);
          var _ = new Rh(i, Rh[eB], t, this.element)
        }
    },
    enddrag: function (t, i) {
      if (this[nD] && this._n55 && this[Zb] != this[HN]) {
        var n = new Rh(i, Rh[sB], t, this[nD]);
        n.point = this[Zb], i[qL](n)
      }
    }
  }, $H[hB] = jh;
  var jW = function (t) {
    this[Gu] = t
  };
  jW[hr] = {
    onstart2: function (t, i) {
      this.onstart(t, i)
    },
    onstart: function (t, i) {
      if (!t[bD]) {
        var n = t[hg]();
        if (n && !i[G_](n) && (n = null), n && pi(t)) {
          i[mC](n);
          var e = new Rh(i, Rh.SELECT, t, i[$_]);
          return void i.onInteractionEvent(e)
        }
        if (!n || !i[$_][iN](n)) {
          n ? (i[rB](n), i[aB](n)) : i[rB](null);
          var e = new Rh(i, Rh[oB], t, i[$_]);
          i.onInteractionEvent(e)
        }
      }
    },
    onkeydown: function (t, i) {
      return 27 == t[kE] ? void i[EC]() : void(pi(t) && 65 == t[kE] && (i[fB](), F(t)))
    }
  }, TG.TOOLTIP_DURATION = 3e3, TG[cB] = 1e3, Lh[uB] = _B, Lh[dB] = 0, Lh[lB] = 15, gi(Hr + Lh.CLASS_NAME, {
    "user-select": y_,
    "background-color": vB,
    overflow: g_,
    "box-shadow": "0 5px 10px rgba(136, 136, 136, 0.5)",
    color: Ix,
    "pointer-events": y_,
    border: bB,
    padding: gB,
    display: cR,
    position: xw
  }), Lh[yB] = function () {
    var t = Lh[xB];
    return t || (t = Lh[xB] = new Lh), t
  }, Lh[pB] = function (t, i, n) {
    Lh[yB]()[pB](t, i, n)
  }, Lh[GN] = function () {
    Lh[yB]()[GN]()
  }, Lh.prototype = {
    getTooltipElement: function () {
      var t = this._m8;
      return t || (t = i.createElement(a_), t.className = Lh.CLASS_NAME, this._m8 = t, i.body[yc](t)), t
    },
    update: function (t, i) {
      if (this[mB]()) {
        var n = PL == i;
        t && !n && (t = t[na](/\n/g, EB));
        var e = this[wB]();
        n ? e[TB] = t || "" : e.innerHTML = t || "", Ch(e, this[kB].x + Lh[dB], this[kB].y + Lh.CURSOR_OFFSET_Y)
      }
    },
    setTooltip: function (t, i) {
      if (!t || !t.content) return this[kB] = null, this._m8 && (this._m8[aa].display = y_), void(this._9w = Date.now());
      this._9w = null, this._info = t;
      var n = this[wB]();
      n[aa][hw] = "", this[MB](this._info[OB], this._info[To]), isNaN(i) && (i = TG[IB]), i && this.startTimer(this[SB].bind(this, !1), i)
    },
    _9w: null,
    _kp: null,
    stopTimer: function () {
      this._kp && (clearTimeout(this._kp), this._kp = null)
    },
    startTimer: function (t, i) {
      this[jB](), this._kp = setTimeout(function (t) {
        this._kp = null, t()
      }[gr](this, t), i)
    },
    show: function (t, i, n) {
      return this[mB]() || this._9w && Date.now() - this._9w < 1e3 ? void this[SB](t, n) : (isNaN(i) && (i = TG[cB]), void(i ? this[AB](this.setTooltip.bind(this, t, n), i) : this[SB](t, n)))
    },
    isShowing: function () {
      return this._m8 && y_ !== this._m8[aa].display
    },
    hide: function () {
      this[jB](), this[mB]() && this[SB](!1)
    }
  };
  var AW = function (t) {
    this[Gu] = t
  };
  AW[hr] = {
    onstart: function (t, i) {
      this[lg](i)
    },
    _iw: null,
    onmousemove: function (t, i) {
      if (i[PB]) {
        var n = t[hg](),
          e = n ? i[LB](n) : null;
        return e ? void Lh[pB]({
          target: n,
          content: e,
          type: n[CB],
          x: t[RB],
          y: t[ya]
        }, i.tooltipDelay, i.tooltipDuration) : void Lh[GN]()
      }
    },
    destroy: function () {
      Lh[GN]()
    }
  };
  var PW = function (t) {
    this.graph = t
  };
  PW[hr] = {
    _fc: function () {
      delete this._kp
    },
    destroy: function (t) {
      this._kp && this._fc(t)
    },
    onmousewheel: function (t, i) {
      if (i.enableWheelZoom !== !1 && t[Rb]) {
        var n = t[Rb] > 0,
          e = i.scale;
        if (!(n && i[sC] - e < 1e-4 || !n && e - i.minScale < 1e-4)) {
          G(t);
          var s = Math[uo](Math.abs(t[Rb]));
          n || (s = -s), this._kp && clearTimeout(this._kp), this._kp = setTimeout(this._fc[gr](this, i), 100), i[DB](t, s)
        }
      }
    }
  };
  var LW = function (t) {
    this[Gu] = t
  };
  LW[hr] = {
    onclick: function (t, i) {
      i[DB](t, !pi(t))
    }
  };
  var CW = function (t) {
    this[Gu] = t
  };
  CW[hr] = {
    onclick: function (t, i) {
      i[DB](t, pi(t))
    }
  }, E(Rh, HG), Rh.ELEMENT_MOVE_START = NB, Rh[nN] = BB, Rh.ELEMENT_MOVE_END = $B, Rh[DC] = FB, Rh.ELEMENT_REMOVED = zB, Rh[ON] = GB, Rh[AN] = HB, Rh[LN] = YB, Rh.RESIZE_START = qB, Rh.RESIZING = WB, Rh[sB] = UB, Rh.ROTATING = VB, Rh[XB] = ZB, Rh[oN] = KB, Rh[JB] = QB, Rh.GROUP_EXPANDED = t$, Rh[HD] = i$, Rh[oB] = ed, Rh.SELECT_START = n$, Rh[$N] = e$, Rh[s$] = h$, Rh[r$] = a$, Dh.prototype = {
    _92: function (t) {
      if (this[o$]) switch (t[Il]) {
        case QG.KIND_REMOVE:
          this[o$][f$](t.data);
          break;
        case QG[Jl]:
          this[o$][c$](t[mo])
      }
    },
    destroy: function () {
      delete this._kn, delete this._49, this[o$] && (this[o$]._hu(), delete this[o$])
    },
    _kn: null,
    _49: null,
    defaultMode: null,
    _fk: function (t, i, n) {
      this._49[t] = new vh(i, n), t == this[KC] && this[o$]._mpInteraction(i)
    },
    addCustomInteraction: function (t) {
      this._interactionSupport[u$](t)
    },
    removeCustomInteraction: function (t) {
      this._interactionSupport[_$](t)
    },
    _mo: function (t) {
      var i = this._49[t];
      return i ? i : RW[t]
    }
  }, K(Dh[hr], {
    defaultCursor: {
      get: function () {
        return this.currentInteractionMode ? this.currentInteractionMode[W_] : void 0
      }
    },
    currentMode: {
      get: function () {
        return this[ZC]
      },
      set: function (t) {
        this[ZC] != t && (this[ZC], this._interactionSupport || (this[o$] = new kH(this._kn)), this[ZC] = t, this[d$] = this._mo(this._n9urrentMode), this._kn[XC] = this.defaultCursor, this[o$]._mpInteraction(this[d$] ? this[d$][l$](this._kn) : []))
      }
    }
  });
  var RW = {};
  TG.registerInteractions = function (t, i, n) {
    var e = new vh(i, n);
    RW[t] = e
  }, FH[v$] = b$, FH[g$] = U_, FH[y$] = id, FH[x$] = p$, FH[m$] = E$, FH.INTERACTION_MODE_CREATE_SIMPLE_EDGE = w$, FH.INTERACTION_MODE_CREATE_EDGE = T$, FH[k$] = M$, FH[O$] = I$, TG[S$](FH.INTERACTION_MODE_VIEW, [jW, OW, PW, kW, wW, AW, SW]), TG[S$](FH[j$], [TW, mh, jW, OW, PW, kW, AW]), TG[S$](FH[A$], [TW, Ih, jW, yh, OW, PW, kW, AW]), TG[S$](FH.INTERACTION_MODE_CREATE_SHAPE, [TW, xh, jW, OW, PW, kW, AW]), TG[S$](FH.INTERACTION_MODE_CREATE_LINE, [ph, jW, OW, PW, kW, AW]), TG[S$](FH[g$], [TW, jh, Ih, jW, MW, OW, PW, kW, wW, AW, SW]), TG[S$](FH.INTERACTION_MODE_SELECTION, [TW, jh, Ih, jW, MW, IW, OW, PW, kW, wW, AW]), TG[S$](FH[x$], [PW, kW, LW], MH), TG.registerInteractions(FH.INTERACTION_MODE_ZOOMOUT, [PW, kW, CW], OH), $H.PanInteraction = OW, $H[P$] = jW, $H[L$] = MW, $H[C$] = PW, $H[R$] = wW, $H[D$] = kW, $H[N$] = AW, $H.RectangleSelectionInteraction = IW, $H[B$] = SW, $H[$$] = Ih;
  var DW = function (t) {
    this[Gu] = t
  };
  $H[F$] = DW, DW[hr] = {
    getNodeBounds: function (t) {
      return this.graph.getUIBounds(t)
    },
    isLayoutable: function (t) {
      return this.graph[z_](t) && t.layoutable !== !1
    },
    getLayoutResult: function () {},
    updateLocations: function (t, i, n, e, s) {
      if (i === !0) {
        if (this[z$] || (this[z$] = new bU), n && (this.animate[XR] = n), e && (this[z$][G$] = e), this.animate.locations = t, s) {
          var h = s,
            r = this;
          s = function () {
            h[Uh](r, t)
          }
        }
        return void this[z$][cD](s)
      }
      for (var a in t) {
        var o = t[a],
          f = o[H$];
        f.setLocation(o.x, o.y)
      }
      s && s.call(this, t)
    },
    _f7: function (t) {
      var i, n, e, s = null;
      t && (i = t.byAnimate, s = t.callback, n = t[XR], e = t[G$]);
      var h = this[Y$](t);
      return h ? (this[q$](h, i, n, e, s), h) : !1
    },
    doLayout: function (t, i) {
      return this[Gu] && i !== !0 ? void this.graph.callLater(function () {
        this._f7(t)
      }, this) : this._f7(t)
    }
  };
  var NW = 110,
    BW = 120,
    $W = 130,
    FW = 210,
    zW = 220,
    GW = 230,
    HW = 111,
    YW = 112,
    qW = 121,
    WW = 122,
    UW = 211,
    VW = 212,
    XW = 221,
    ZW = 222;
  FH[W$] = NW, FH[U$] = BW, FH.DIRECTION_CENTER = $W, FH.DIRECTION_BOTTOM = FW, FH.DIRECTION_TOP = zW, FH[V$] = GW, FH[X$] = HW, FH[Z$] = YW, FH[K$] = qW, FH.DIRECTION_LEFT_BOTTOM = WW, FH.DIRECTION_BOTTOM_LEFT = UW, FH[J$] = VW, FH.DIRECTION_TOP_LEFT = XW, FH[Q$] = ZW;
  var KW = tF,
    JW = iF,
    QW = nF,
    tU = eF;
  FH[sF] = KW, FH[hF] = QW, FH[rF] = tU, FH[aF] = JW, $H[oF] = Nh;
  var iU = function (t) {
    this[Gu] = t
  };
  iU[hr] = {
    hGap: 50,
    vGap: 50,
    parentChildrenDirection: FW,
    layoutType: KW,
    defaultSize: {
      width: 50,
      height: 60
    },
    getNodeSize: function (t) {
      if (this.graph._8j[ru]) {
        var i = this[Gu][Hu](t);
        if (i) return i._fo
      }
      return t[Bx] && t[Bx][Mf] ? {
        width: t.image[Mf][Na],
        height: t[Bx].bounds[Ba]
      } : this.defaultSize
    },
    _n9y: function (t, i) {
      if (this[ld](t)) {
        var n, e = this.getNodeSize(t);
        n = e instanceof PG ? [-e.x, -e.y] : [e[Na] / 2, e[Ba] / 2];
        var s = t.id,
          h = (t.parentChildrenDirection, i ? this._9e[i.id] : this[fF]);
        this._9e[s] = new nU(this.getHGap(t), this[cF](t), this.getLayoutType(t), t.parentChildrenDirection, h, t, e[Na], e[Ba], n)
      }
    },
    getHGap: function (t) {
      return t && D(t[uF]) ? t[uF] : this[uF]
    },
    getVGap: function (t) {
      return t && D(t[_F]) ? t[_F] : this[_F]
    },
    getLayoutType: function (t) {
      return t && t[dF] ? t[dF] : this[dF]
    },
    _9e: null,
    _n7b: null,
    _kw: function () {
      this._9e = null, this[fF] = null
    },
    getLayoutResult: function (t) {
      var i, n, e, s, h = this[Gu];
      t instanceof Object && (i = t.x, n = t.y, h = t.root || this.graph, e = t.bounds, s = t[lF]), this._9e = {}, this._n7b = new nU, this._n7b._mp(this.hGap, this[_F], this[vF], this.layoutType);
      var r = {},
        a = xU(h, this[bF], this, !1, s);
      return a && (this[fF]._f7(i || 0, n || 0, r), e && e.set(this._n7b.x, this._n7b.y, this[fF][Na], this._n7b[Ba])), this._kw(), r
    },
    doLayout: function (t, i) {
      if (D(t)) {
        var n = t,
          e = 0;
        D(i) && (e = i), t = {
          x: n,
          y: e
        }, i = !0
      }
      return T(this, iU, gF, [t, i])
    }
  }, E(iU, DW);
  var nU = function (t, i, n, e, s, h, r, a, o) {
    this._me = t || 0, this._mf = i || 0, this[dF] = n, this[vF] = e, this.parentBounds = s, s && s._fb(this), this[H$] = h, this._ev = r, this._d2 = a, this[yF] = o
  };
  nU[hr] = {
    _mp: function (t, i, n, e) {
      this._me = t, this._mf = i, this[vF] = n, this[dF] = e
    },
    _8h: function () {
      this._f8 = []
    },
    _me: 0,
    _mf: 0,
    _f8: null,
    _ev: 0,
    _d2: 0,
    layoutType: null,
    parentChildrenDirection: null,
    _fb: function (t) {
      this._f8 || (this._f8 = []), this._f8[ir](t)
    },
    _d0: function (t, i, n, e) {
      var s = new PG;
      return n(this._f8, function (n) {
        n._3l(t, i), s.add(n), e ? t += n.width + this._me : i += n[Ba] + this._mf
      }, this), s
    },
    _8p: function (t, i, n, e, s) {
      var h, r = e ? this._me : this._mf,
        a = e ? this._mf : this._me,
        o = e ? "width" : Ba,
        f = e ? "height" : Na,
        c = e ? "_ev" : xF,
        u = e ? "_d2" : pF,
        _ = e ? "hostDX" : mF,
        d = e ? "hostDY" : EF,
        v = new PG,
        b = 0,
        g = 0,
        y = [],
        x = 0,
        p = 0;
      n(this._f8, function (n) {
        var s = p >= g;
        n[wF] = s ? e ? BW : zW : e ? NW : FW, n._3l(t, i), s ? (y.push(n), b = Math.max(b, n[o]), g += n[f] + a) : (h || (h = []), h.push(n), x = Math.max(x, n[o]), p += n[f] + a)
      }, this), g -= a, p -= a;
      var m = Math.max(g, p),
        E = r,
        w = 0;
      this[H$] && (s && (E += this[c] + r, m > this[u] ? this[d] = (m - this[u]) / 2 : w = (this[u] - m) / 2), this[_] = b + E / 2 - this[c] / 2);
      var T = 0,
        k = w;
      return l(y, function (t) {
        e ? t[cx](b - t[o], k) : t[cx](k, b - t[o]), k += a + t[f], v.add(t)
      }, this), h ? (k = w, T = b + E, l(h, function (t) {
        e ? t.offset(T, k) : t.offset(k, T), k += a + t[f], v.add(t)
      }, this), v) : v
    },
    offset: function (t, i) {
      this.x += t, this.y += i, this[TF] += t, this.nodeY += i, this._6k(t, i)
    },
    _n7i: function (t, i) {
      return 2 * this.cx - t - i - t
    },
    _n7h: function (t, i) {
      return 2 * this.cy - t - i - t
    },
    _mh: function (t) {
      if (this._f8 && 0 != this._f8[Wh]) {
        if (t) return this[H$] && (this[TF] += this[kF](this[TF], this._ev)), void l(this._f8, function (t) {
          t.offset(this[kF](t.x, t[Na]), 0)
        }, this);
        this.node && (this[MF] += this._n7h(this.nodeY, this._d2)), l(this._f8, function (t) {
          t[cx](0, this[OF](t.y, t[Ba]))
        }, this)
      }
    },
    _6k: function (t, i) {
      this._f8 && l(this._f8, function (n) {
        n[cx](t, i)
      }, this)
    },
    _3l: function (t, i) {
      return this.x = t || 0, this.y = i || 0, this._f8 && 0 != this._f8[Wh] ? void this._1q(this.x, this.y, this.layoutType) : void(this.node && (this[Na] = this._ev, this[Ba] = this._d2, this.nodeX = this.x, this.nodeY = this.y))
    },
    _6r: function (t) {
      if (this[H$]) {
        var i = this[yF],
          n = i[0],
          e = i[1];
        t[this.node.id] = {
          node: this.node,
          x: this[TF] + n,
          y: this[MF] + e,
          left: this[TF],
          top: this[MF],
          width: this._ev,
          height: this._d2
        }
      }
      this._f8 && l(this._f8, function (i) {
        i._6r(t)
      }, this)
    },
    _f7: function (t, i, n) {
      this._3l(t, i), this._6r(n)
    },
    _1q: function (t, i, e) {
      var s, h = t,
        r = i;
      !this[vF] && this.parentBounds && (this[vF] = this[wF] || this[IF][vF]);
      var a = this[vF],
        o = Nh(a);
      if (this.node) {
        s = a == $W || a == GW;
        var f = Bh(a);
        s || (o ? t += this._ev + this._me : i += this._d2 + this._mf)
      }
      var c, u = this[H$] && this[H$].layoutReverse ? b : l;
      if (e == JW) c = this._8p(t, i, u, !o, s);
      else {
        var _;
        _ = e == KW ? !o : e == QW, c = this._d0(t, i, u, _, s)
      }
      var d = 0,
        v = 0;
      if (c && !c.isEmpty() && (d = c[Na], v = c[Ba], this.add(c)), this[H$]) {
        if (this[TF] = h, this[MF] = r, this[EF] !== n || this[mF] !== n) this[TF] += this.hostDX || 0, this.nodeY += this[mF] || 0;
        else {
          var g;
          g = a == FW || a == zW || a == BW || a == NW ? 1 : a == VW || a == ZW || a == WW || a == YW ? 0 : 2, o ? 1 == g ? this.nodeY += v / 2 - this._d2 / 2 : 2 == g && (this[MF] += v - this._d2) : 1 == g ? this[TF] += d / 2 - this._ev / 2 : 2 == g && (this[TF] += d - this._ev)
        }
        this.addRect(this.nodeX, this.nodeY, this._ev, this._d2), f && this._mh(o)
      }
    },
    node: null,
    uiBounds: null
  }, E(nU, PG), Fh.prototype = {
    layoutDatas: null,
    isMovable: function (t) {
      return !this.currentMovingNodes[t.id]
    },
    _61: !1,
    _3i: function () {
      this._61 = !0, this.graph._1e[dd](this._n52, this), this.graph._1a.addListener(this._25, this)
    },
    _1l: function () {
      this._61 = !1, this.graph._1e[ql](this._n52, this), this.graph._1a[ql](this._25, this)
    },
    invalidateFlag: !0,
    invalidateLayoutDatas: function () {
      this.invalidateFlag = !0
    },
    resetLayoutDatas: function () {
      return this.invalidateFlag = !1, this.layoutDatas = $h[Uh](this)
    },
    _25: function (t) {
      Rh.ELEMENT_MOVE_START == t[Il] ? (this[xd] = {}, t[_d][Vf](function (t) {
        this.currentMovingNodes[t.id] = t
      }, this)) : Rh[rN] == t.kind && (this[xd] = {})
    },
    _n52: function () {
      this[SF]()
    },
    isRunning: function () {
      return this[jF] && this.timer._e6()
    },
    getLayoutResult: function () {
      this[AF](), this.resetLayoutDatas();
      for (var t = this[PF](this[LF][CF] || 0, this.layoutDatas[RF] || 0), i = 0; t > i && this.step(!1) !== !1; i++);
      var n = this.layoutDatas[DF];
      return this[NF](), n
    },
    _lo: function () {
      return !1
    },
    step: function (t) {
      if (t === !1) return this._lo(this[BF]);
      (this[rM] || !this[LF]) && this[$F]();
      var i = this._lo(t),
        n = this[LF][DF];
      for (var e in n) {
        var s = n[e],
          h = s[H$];
        this[wC](h) ? h.setLocation(s.x, s.y) : (s.x = h.x, s.y = h.y, s.vx = 0, s.vy = 0)
      }
      return i
    },
    onstop: function () {
      delete this[LF]
    },
    start: function (t) {
      if (this[FF]()) return !1;
      this._61 || this._3i(), this[zF] || (this[zF] = function (t) {
        return this[aN](t)
      }[gr](this)), this[SF](), this[jF] = new DH(this._jmr);
      var i = this;
      return this[jF]._kx(function () {
        i.onstop(), t && t()
      }), !0
    },
    stop: function () {
      this[jF] && (this[jF]._m6(), this.onstop())
    },
    getMaxIterations: function (t) {
      return Math.min(1e3, 3 * t + 10)
    },
    minEnergyFunction: function (t, i) {
      return 10 + Math.pow(t + i, 1.4)
    },
    resetGraph: function () {
      this._61 || this._3i(), this[$F]()
    },
    destroy: function () {
      this.stop(), this._1l()
    }
  }, E(Fh, DW);
  var eU = function (t, i, n, e) {
    this[Gu] = t, D(i) && (this.radius = i), D(n) && (this.gap = n), D(e) && (this[GF] = e)
  };
  $H[HF] = eU;
  var sU = YF,
    hU = qF,
    rU = WF,
    aU = UF;
  FH[VF] = sU, FH[XF] = hU, FH[ZF] = rU, FH.RADIUS_MODE_VARIABLE = aU, eU.prototype = {
    angleSpacing: sU,
    radiusMode: aU,
    gap: 4,
    radius: 50,
    startAngle: 0,
    _9e: null,
    _n7b: null,
    _kw: function () {
      this._9e = null, this._n7b = null
    },
    getLayoutResult: function (t) {
      var i, n = 0,
        e = 0,
        s = this[Gu];
      t instanceof Object && (n = t.cx || 0, e = t.cy || 0, s = t[KF] || this.graph, i = t[Mf]), this._9e = {}, this[fF] = new cU(this);
      var h = {},
        r = pU(s, this._n9y, this);
      return r && (this._n7b._f8 && 1 == this[fF]._f8[Wh] && (this[fF] = this[fF]._f8[0]), this[fF]._el(!0), this._n7b._5s(n, e, this[GF], h, i)), this._kw(), h
    },
    _n9y: function (t, i) {
      if (this.isLayoutable(t)) {
        var n = i ? this._9e[i.id] : this[fF];
        this._9e[t.id] = new cU(this, t, n)
      }
    },
    defaultSize: 40,
    getRadius: function () {
      return this[wl]
    },
    getNodeSize: function (t) {
      if (this[Gu]._8j[ru]) {
        var i = this[Gu][Hu](t);
        if (i) return (i._fo[Na] + i._fo.height) / 2
      }
      return this[JF]
    },
    getGap: function () {
      return this.gap
    },
    _2k: function (t, i, n) {
      return this.getNodeSize(t, i, n) + this.getGap(t, i, n)
    }
  };
  var oU = function (t) {
      var i, n = this._f8[Wh],
        e = 0,
        s = 0;
      if (l(this._f8, function (t) {
          var n = t._el();
          1 > n && (n = 1), s += n, n > e && (e = n, i = t)
        }, this), n > 1) {
        var h = 0,
          r = {},
          a = s / n / 3;
        s = 0, l(this._f8, function (t) {
          var i = t._mm;
          a > i && (i = a), r[t.id] = i, s += i
        }, this);
        var o = $q / s;
        l(this._f8, function (i, n) {
          var e = r[i.id],
            s = e * o;
          0 === n && (h = t ? -s / 2 : -s), i._kt = h + s / 2, i._ku = s, h += s
        }, this)
      }
      return [e, i._ku]
    },
    fU = function (t) {
      var i = this._7w,
        n = 2 * Math.PI / i,
        e = 0,
        s = t ? 0 : i > 1 ? -n / 2 : 0;
      return l(this._f8, function (t) {
        t._kt = s % $q, s += n, t._ku = n;
        var i = t._el();
        i > e && (e = i)
      }, this), [e, n]
    },
    cU = function (t, i, n) {
      this[QF] = t, i && (this._mn = i, this.id = i.id), n && (n._fb(this), n._mk = !1, this._ks = n._ks + 1)
    },
    $q = 2 * Math.PI;
  cU.prototype = {
    _ku: 0,
    _kt: 0,
    _k1: 0,
    _ex: 0,
    _n92: 0,
    _ks: 0,
    _mk: !0,
    _mm: 0,
    _fy: 0,
    _f8: null,
    _mn: null,
    _fb: function (t) {
      this._f8 || (this._f8 = []), this._f8[ir](t), t.parent = this
    },
    _g0: function (t) {
      if (this._kt = (this._kt + t) % $q, this._f8) {
        var i = this._f8[Wh];
        if (1 == i) return void this._f8[0]._g0(this._kt);
        t = this._kt + Math.PI, l(this._f8, function (i) {
          i._g0(t)
        }, this)
      }
    },
    _7w: 0,
    _6q: function (t) {
      return this._mn && (this._fy = this.layouter._2k(this._mn, this._ks, this._mk) / 2), this._f8 ? (this._fy, this._7w = this._f8[Wh], this._7w <= 2 || this[QF][tz] == hU ? fU[Uh](this, t) : oU.call(this, t)) : null
    },
    _el: function (t) {
      var i = this._6q(t);
      if (!i) return this._mm = this._fy;
      var n = i[0],
        e = i[1],
        s = this[QF].getRadius(this._mn, this._ks);
      if (s < this._fy && (s = this._fy), this._ex = s, this._fy + n > s && (s = this._fy + n), n && this._7w > 1 && e < Math.PI) {
        var h = n / Math.sin(e / 2);
        h > s && (s = h)
      }
      return this._k1 = s, this._mm = s + n, this._mn && this._f8 && this.layouter[iz] == aU && l(this._f8, function (t) {
        var i = t._mm;
        1 == t._7w && (i /= 2);
        var n = this._fy + i,
          e = t._ku;
        if (e && e < Math.PI) {
          var s = Math.sin(e / 2),
            h = i / s;
          h > i && (i = h)
        }
        n > i && (i = n), t[nz] = i
      }, this), (!this._mn || t) && this._g0(0), this._mm
    },
    _5s: function (t, i, n, e, s) {
      if (this._mn && (e[this._mn.id] = {
          x: t,
          y: i,
          node: this._mn
        }, s && s[GT](t - this._fy / 2, i - this._fy / 2, this._fy, this._fy)), this._f8) {
        if (!this._mn && 1 == this._f8.length) return void this._f8[0]._5s(t, i, n, e, s);
        n = n || 0;
        var h = this._k1,
          r = this._ex;
        l(this._f8, function (a) {
          var o = h;
          a[nz] && (o = Math.max(r, a[nz]));
          var f = a._kt + n,
            c = t + o * Math.cos(f),
            u = i + o * Math.sin(f);
          a._5s(c, u, n, e, s)
        }, this)
      }
    }
  }, E(eU, DW);
  var uU = function () {
    w(this, uU, arguments)
  };
  E(uU, zh);
  var _U = function (t, i) {
    this.node1 = t, this[ez] = i, t == i ? (this[Lc] = !0, this._kr = t._kq) : this._kr = new kG, this._85 = [], this._g4 = TG.EDGE_BUNDLE_EXPANDED
  };
  TG[sz] = !0, _U[hr] = {
    node1: null,
    node2: null,
    _kr: null,
    _g4: TG[sz],
    _85: null,
    _g5: null,
    agentEdge: null,
    _n5e: function (t, i, n) {
      this._kr[Vf](function (e) {
        return n && e.$from != n && e.fromAgent != n ? void 0 : t.call(i, e)
      })
    },
    _5e: 0,
    _5q: 0,
    _io: function (t, i) {
      return this._kr.add(t) === !1 ? !1 : (i == this.node1 ? this._5e++ : this._5q++, this[ru] ? void this._15(t) : void(this._n5h = !0))
    },
    _n9v: function (t, i) {
      return this._kr.remove(t) === !1 ? !1 : (i == this[hz] ? this._5e-- : this._5q--, this._15(t), void this._kr[Vf](function (t) {
        t._edgeBundleInvalidateFlag = !0, t.__45 = !0
      }, this))
    },
    _15: function (t) {
      this._n9dBindableFlag = !0, this._62 = !0, t[ZT] = !0, t[FT] = !0
    },
    _n9d: function () {
      this._62 || (this._62 = !0, this._kr[Vf](function (t) {
        t._edgeBundleInvalidateFlag = !0
      }))
    },
    isEmpty: function () {
      return this._kr[Lf]()
    },
    isPositiveOrder: function (t) {
      return this[hz] == t[su] || this[hz] == t[Pc]
    },
    canBind: function (t) {
      return t && this._62 && this.validate(t), this._kr[Wh] > 1 && this._85[Wh] > 1
    },
    _hr: function (t) {
      return this._85[nr](t)
    },
    getYOffset: function (t) {
      return this._g5[t.id]
    },
    _4m: function (t) {
      if (!this[rz]()) return void(this._g5 = {});
      var i = {},
        n = this._85[Wh];
      if (!(2 > n)) {
        var e = 0,
          s = this._85[0];
        i[s.id] = 0;
        for (var h = 1; n > h; h++) {
          s = this._85[h];
          var r = t.getStyle(s, Qq[ML]) || lW[Qq[ML]];
          e += r, i[s.id] = e
        }
        if (!this[Lc])
          for (var a = e / 2, h = 0; n > h; h++) s = this._85[h], i[s.id] -= a;
        this._g5 = i
      }
    },
    _n5k: function (t) {
      return this._g4 == t ? !1 : (this._g4 = t, this[Aw](), !0)
    },
    reverseExpanded: function () {
      return this[az](!this._g4)
    },
    _19: function () {
      this._n9dBindableFlag = !1, this._85.length = 0;
      var t;
      this._kr[Vf](function (i) {
        if (i[OT]()) {
          if (!this.isPositiveOrder(i)) return t || (t = []), void t.push(i);
          this._85.push(i)
        }
      }, this), t && (this._85 = t[Kh](this._85))
    },
    _ej: function (t) {
      return t == this[qC] || !this[rz]() || this._g4
    },
    validate: function (t) {
      this._62 = !1, this._kr.forEach(function (t) {
        t[ZT] = !1
      }), this[oz] && this._19();
      var i = this._g4,
        n = this[rz](),
        e = !n || i;
      l(this._85, function (t) {
        t._$t = !0, t._htInBundle = e, e && (t[FT] = !0)
      }, this), e ? this[fz](null, t) : (this[fz](this._85[0], t), this[qC][cz] = !0, this[qC][FT] = !0), e && this._4m(t)
    },
    _n59: function (t, i) {
      if (t != this.agentEdge) {
        var n = this.agentEdge;
        return this[qC] = t, i && i._4g(new YG(this, qC, t, n)), !0
      }
    }
  }, K(_U[hr], {
    bindableEdges: {
      get: function () {
        return this._85
      }
    },
    edges: {
      get: function () {
        return this._kr._j5
      }
    },
    length: {
      get: function () {
        return this._kr ? this._kr[Wh] : 1
      }
    },
    expanded: {
      get: function () {
        return this._g4
      },
      set: function (t) {
        return this._g4 == t ? !1 : (this._g4 = t, void this[Aw]())
      }
    }
  });
  var dU = function () {
      function t(t, i) {
        this[H$] = t, this[xx] = i
      }

      function i() {
        this[uz] = [], this[_z] = 0
      }
      var n = -1e6,
        e = .8;
      i.prototype = {
        isEmpty: function () {
          return 0 === this[_z]
        },
        push: function (i, n) {
          var e = this.stack[this.popIdx];
          e ? (e[H$] = i, e[xx] = n) : this[uz][this[_z]] = new t(i, n), ++this[_z]
        },
        pop: function () {
          return this[_z] > 0 ? this.stack[--this.popIdx] : void 0
        },
        reset: function () {
          this[_z] = 0
        }
      };
      var s = [],
        h = new i,
        r = function () {
          this.body = null, this[dz] = [], this[lz] = 0, this.massX = 0, this[vz] = 0, this[xa] = 0, this.top = 0, this[Xr] = 0, this[Zr] = 0, this[bz] = !1
        },
        a = [],
        o = 0,
        f = function () {
          var t;
          return a[o] ? (t = a[o], t[dz][0] = null, t[dz][1] = null, t[dz][2] = null, t[dz][3] = null, t[xx] = null, t[lz] = t[gz] = t.massY = 0, t.left = t[Zr] = t.top = t[Xr] = 0, t.isInternal = !1) : (t = new r, a[o] = t), ++o, t
        },
        c = f(),
        u = function (t, i) {
          var n = Math.abs(t.x - i.x),
            e = Math.abs(t.y - i.y);
          return 1e-8 > n && 1e-8 > e
        },
        _ = function (t) {
          for (h[yz](), h.push(c, t); !h.isEmpty();) {
            var i = h.pop(),
              n = i[H$],
              e = i[xx];
            if (n[bz]) {
              var s = e.x,
                r = e.y;
              n[lz] = n.mass + e.mass, n[gz] = n.massX + e.mass * s, n.massY = n[vz] + e[lz] * r;
              var a = 0,
                o = n[xa],
                _ = (n[Zr] + o) / 2,
                d = n.top,
                l = (n.bottom + d) / 2;
              if (s > _) {
                a += 1;
                var v = o;
                o = _, _ += _ - v
              }
              if (r > l) {
                a += 2;
                var b = d;
                d = l, l += l - b
              }
              var g = n[dz][a];
              g || (g = f(), g[xa] = o, g.top = d, g[Zr] = _, g[Xr] = l, n[dz][a] = g), h[ir](g, e)
            } else if (n.body) {
              var y = n[xx];
              if (n.body = null, n[bz] = !0, u(y, e)) {
                if (n[Zr] - n[xa] < 1e-8) return;
                do {
                  var x = Math[Lr](),
                    p = (n[Zr] - n.left) * x,
                    m = (n[Xr] - n.top) * x;
                  y.x = n[xa] + p, y.y = n.top + m
                } while (u(y, e))
              }
              h.push(n, y), h.push(n, e)
            } else n.body = e
          }
        },
        d = function (t) {
          var i, h, r, a, o = s,
            f = 1,
            u = 0,
            _ = 1;
          for (o[0] = c; f;) {
            var d = o[u],
              l = d.body;
            f -= 1, u += 1, l && l !== t ? (h = l.x - t.x, r = l.y - t.y, a = Math[uo](h * h + r * r), 0 === a && (h = (Math[Lr]() - .5) / 50, r = (Math[Lr]() - .5) / 50, a = Math[uo](h * h + r * r)), i = n * l[lz] * t[lz] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * h, t.fy = t.fy + i * r) : (h = d[gz] / d[lz] - t.x, r = d.massY / d.mass - t.y, a = Math[uo](h * h + r * r), 0 === a && (h = (Math[Lr]() - .5) / 50, r = (Math[Lr]() - .5) / 50, a = Math[uo](h * h + r * r)), (d[Zr] - d[xa]) / a < e ? (i = n * d.mass * t[lz] / (a * a), -1e3 > i && (i = -1e3), i /= a, t.fx = t.fx + i * h, t.fy = t.fy + i * r) : (d[dz][0] && (o[_] = d.quads[0], f += 1, _ += 1), d[dz][1] && (o[_] = d[dz][1], f += 1, _ += 1), d.quads[2] && (o[_] = d[dz][2], f += 1, _ += 1), d[dz][3] && (o[_] = d[dz][3], f += 1, _ += 1)))
          }
        },
        l = function (t, i) {
          n = i;
          var e, s = Number[rl],
            h = Number[rl],
            r = Number.MIN_VALUE,
            a = Number[xz],
            u = t,
            d = u.length;
          for (e = d; e--;) {
            var l = u[e].x,
              v = u[e].y;
            s > l && (s = l), l > r && (r = l), h > v && (h = v), v > a && (a = v)
          }
          var b = r - s,
            g = a - h;
          for (b > g ? a = h + b : r = s + g, o = 0, c = f(), c[xa] = s, c[Zr] = r, c.top = h, c[Xr] = a, e = d; e--;) _(u[e], c)
        };
      return {
        init: l,
        update: d
      }
    },
    lU = function (t) {
      t.fx -= t.x * this[pz], t.fy -= t.y * this[pz]
    },
    vU = function (t) {
      if (0 != t.k) {
        var i = this._d6,
          n = t[gd],
          e = t.to,
          s = e.x - n.x,
          h = e.y - n.y,
          r = s * s + h * h,
          a = Math.sqrt(r) || .1,
          o = (a - i) * t.k * this[mz];
        o /= a;
        var f = o * s,
          c = o * h;
        e.fx -= f, e.fy -= c, n.fx += f, n.fy += c
      }
    };
  zh[hr] = {
    appendNodeInfo: function (t, i) {
      i[lz] = t[Ez] || 1, i.fx = 0, i.fy = 0, i.vx = 0, i.vy = 0
    },
    appendEdgeInfo: function (t, i) {
      i.k = t.layoutElasticity || 1
    },
    setMass: function (t, i) {
      t[Ez] = i, this[LF] && this[LF][DF] && (t = this.layoutDatas[DF][t.id], t && (t[lz] = i))
    },
    setElasticity: function (t, i) {
      t[wz] = i, this[LF] && this.layoutDatas[wk] && (t = this[LF][wk][t.id], t && (t.k = i))
    },
    _d6: 50,
    _hj: .5,
    timeStep: .15,
    repulsion: 50,
    attractive: .1,
    elastic: 3,
    _mb: 1e3,
    _ka: function (t) {
      return this._mb + .3 * (t - this._mb)
    },
    _lo: function (t, i) {
      var n = (Date.now(), this[LF][DF]);
      for (var e in n) {
        var s = n[e];
        i && (s.x += Math[Lr]() - .5, s.y += Math[Lr]() - .5), lU[Uh](this, s)
      }
      var h = this.layoutDatas[Tz];
      if (h)
        for (var e in h) {
          var r = h[e],
            a = r[Vh],
            o = 0,
            f = 0;
          a[Vf](function (t) {
            o += t.x, f += t.y
          }), o /= a[Wh], f /= a[Wh];
          var c = 10 * this[pz];
          a[Vf](function (t) {
            t.fx -= (t.x - o) * c, t.fy -= (t.y - f) * c
          })
        }
      var u = this._nbodyForce;
      u || (u = this._nbodyForce = dU()), u[kz](this[LF].nodesArray, -this.repulsion * this[Mz] * this[Mz]);
      for (var e in n) u[MB](n[e]);
      if (this[mz]) {
        var _ = this[LF].edges;
        for (var e in _) vU[Uh](this, _[e])
      }
      return this._lr(t)
    },
    _lr: function (t) {
      var i = this[LF][Oz],
        n = (this[LF][Iz], this[LF].nodes),
        t = this[BF],
        e = 0,
        s = this._hj;
      for (var h in n) {
        var r = n[h],
          a = r.fx / r[lz],
          o = r.fy / r[lz],
          f = r.vx += a * t,
          c = r.vy += o * t;
        r.x += f * t, r.y += c * t, i > e && (e += 2 * (f * f + c * c)), r.fx = 0, r.fy = 0, r.vx *= s, r.vy *= s
      }
      return this.layoutDatas[Iz] = e, e >= i
    }
  }, E(zh, Fh), $H[Sz] = zh;
  var bU = function (t) {
    this.locations = t
  };
  bU[hr] = {
    oldLocations: null,
    _ez: null,
    duration: 700,
    animationType: RH[jz],
    _7h: function (t) {
      if (this._ez = t, this[Az] = {}, t)
        for (var i in t) {
          var n = t[i],
            e = n[H$];
          this.oldLocations[i] = {
            x: e.x,
            y: e.y
          }
        }
    },
    setLocation: function (t, i, n) {
      t.setLocation(i, n)
    },
    forEach: function (t, i) {
      for (var n in this[Pz]) {
        var e = this.oldLocations[n],
          s = this[Pz][n];
        t[Uh](i, e, s)
      }
    },
    _k2: function (t) {
      this.forEach(function (i, n) {
        var e = n.node,
          s = i.x + (n.x - i.x) * t,
          h = i.y + (n.y - i.y) * t;
        this.setLocation(e, s, h)
      }, this)
    },
    stop: function () {
      this._n5nimate && this._n5nimate._m6()
    },
    start: function (t) {
      this[Lz] ? (this[Lz]._m6(), this[Lz]._im = this[XR], this[Lz][Cz] = this.animationType, this[Lz]._onfinish = this[Rz]) : this[Lz] = new NH(this._k2, this, this[XR], this[G$]), this[Lz]._kx(t)
    }
  }, K(bU[hr], {
    locations: {
      get: function () {
        return this._ez
      },
      set: function (t) {
        this._ez != t && this._7h(t)
      }
    }
  });
  var gU = function (t) {
      var i, n = new kG;
      return t.forEach(function (t) {
        t instanceof Uq && (t[Dz]() ? !i && t[Nz]() && (i = t) : n.add(t))
      }), n[Lf]() && i && n.add(i), n
    },
    yU = function (t, i, n, e, s, h) {
      if (i instanceof tH) return t(i, n, e, s, h), i;
      if (i instanceof vW) {
        var r = new kG;
        i[ok].forEach(function (t) {
          return i[z_](t) ? t._i5() && t._g4 && t.hasChildren() ? void(t.$location && (t[Ak][rM] = !1)) : void r.add(t) : void 0
        }), i = r
      }
      var i = gU(i, e);
      return l(i, function (i) {
        t(i, n, e, s, h)
      }), i
    },
    xU = function (t, i, n, e, s) {
      return yU(mU, t, i, n, e, s)
    },
    pU = function (t, i, n, e, s) {
      return yU(EU, t, i, n, e, s)
    };
  os[hr][Bz] = function (t, i, n, e) {
    xU(this, t, i, n, e)
  }, os[hr].forEachByTopoBreadthFirstSearch = function (t, i, n, e) {
    t instanceof Object && 1 == arguments[Wh] && (i = t.scope), pU(this, t, i, n, e)
  }, $H[Bz] = xU, $H[$z] = pU;
  var mU = function (t, i, n, e, s) {
      function h(t, i, n, e, s, r, a, o) {
        t[Ed] = r, e || i.call(n, t, o, a), Gh(t, function (o) {
          h(o, i, n, e, s, r, a + 1, t)
        }, o, s, r, n), e && i[Uh](n, t, o, a)
      }
      h(t, i, n, e, s, {}, 0)
    },
    EU = function (t, i, n, e, s) {
      function h(t, i, n, e, s, r, a) {
        var o, f = t.length;
        t[Vf](function (t, h) {
          var c = t.v;
          c[Ed] = r, e || i[Uh](n, c, t[Fz], a, h, f), Gh(c, function (t) {
            o || (o = []), t[Ed] = r, o[ir]({
              v: t,
              _from: c
            })
          }, c, s, r, n)
        }), o && h(o, i, n, e, s, r, a + 1), e && t.forEach(function (t, e) {
          i[Uh](n, t.v, t[Fz], a, e, f)
        })
      }
      h([{
        v: t
      }], i, n, e, s, {}, 0)
    };
  $H[zz] = X, $H.log = ti, $H[Wr] = ni, $H[Gz] = ii, $H.isIE = cG, $H.isOpera = fG, $H[Hz] = dG, $H.isGecko = lG, $H[Yz] = vG, $H.isSafari = gG, $H.isChrome = bG, $H.isMac = yG, $H[qz] = lW, $H[Wz] = TG, $H[RC] = Qq, $H.Consts = FH, $H[Uz] = MY, $H[Vz] = vW, $H[Xz] = Kq, $H.ElementUI = cW, $H[Zz] = gs, $H[Kz] = bs, $H[Jz] = _W, $H.ImageUI = uW, $H.Shapes = Xq, $H.Path = wY, $H.Gradient = rY, $H[Qz] = Rh, $H.Element = qq, $H[RL] = Uq, $H.Edge = Wq, $H[tG] = os, $H[iG] = _U, $H.TreeLayouter = iU, $H.name = nG;
  var wU = eG;
  return $H.version = sG, $H.about = hG, $H[SE] = "Copyright Â© 2017 Qunee.com", $H.css = li, $H.IDrawable = bW, ti = function () {}, $H[IE] = rG, $H
}(window, document);
