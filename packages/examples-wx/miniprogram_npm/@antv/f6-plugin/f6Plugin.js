!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.f6ui = e())
    : (t.f6ui = e());
})(this, function () {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var i = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var i in t)
            n.d(
              r,
              i,
              function (e) {
                return t[e];
              }.bind(null, i),
            );
        return r;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ""),
      n((n.s = 33))
    );
  })([
    function (t, e, n) {
      "use strict";
      n.d(e, "i", function () {
        return m;
      }),
        n.d(e, "k", function () {
          return w;
        }),
        n.d(e, "y", function () {
          return O;
        }),
        n.d(e, "f", function () {
          return i;
        }),
        n.d(e, "j", function () {
          return S;
        }),
        n.d(e, "K", function () {
          return C;
        }),
        n.d(e, "g", function () {
          return j;
        }),
        n.d(e, "u", function () {
          return E;
        }),
        n.d(e, "A", function () {
          return y;
        }),
        n.d(e, "B", function () {
          return v;
        }),
        n.d(e, "D", function () {
          return N;
        }),
        n.d(e, "H", function () {
          return P;
        }),
        n.d(e, "J", function () {
          return B;
        }),
        n.d(e, "m", function () {
          return c;
        }),
        n.d(e, "n", function () {
          return D;
        }),
        n.d(e, "o", function () {
          return _;
        }),
        n.d(e, "r", function () {
          return s;
        }),
        n.d(e, "s", function () {
          return u;
        }),
        n.d(e, "t", function () {
          return k;
        }),
        n.d(e, "v", function () {
          return l;
        }),
        n.d(e, "w", function () {
          return g;
        }),
        n.d(e, "x", function () {
          return x;
        }),
        n.d(e, "b", function () {
          return W;
        }),
        n.d(e, "c", function () {
          return G;
        }),
        n.d(e, "d", function () {
          return H;
        }),
        n.d(e, "e", function () {
          return d;
        }),
        n.d(e, "l", function () {
          return V;
        }),
        n.d(e, "p", function () {
          return Z;
        }),
        n.d(e, "q", function () {
          return K;
        }),
        n.d(e, "z", function () {
          return Q;
        }),
        n.d(e, "C", function () {
          return z;
        }),
        n.d(e, "a", function () {
          return z;
        }),
        n.d(e, "h", function () {
          return $;
        }),
        n.d(e, "G", function () {
          return J;
        }),
        n.d(e, "I", function () {
          return et;
        }),
        n.d(e, "E", function () {
          return nt;
        }),
        n.d(e, "F", function () {
          return rt;
        });
      var r = function (t) {
          return null !== t && "function" != typeof t && isFinite(t.length);
        },
        i = function (t, e) {
          if (!r(t)) return t;
          for (var n = [], i = 0; i < t.length; i++) {
            var o = t[i];
            e(o, i) && n.push(o);
          }
          return n;
        },
        o = {}.toString,
        a = function (t, e) {
          return o.call(t) === "[object " + e + "]";
        },
        s = function (t) {
          return a(t, "Function");
        },
        u = function (t) {
          return null == t;
        },
        c = function (t) {
          return Array.isArray ? Array.isArray(t) : a(t, "Array");
        };
      function h(t) {
        return (h =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var l = function (t) {
        var e = h(t);
        return (null !== t && "object" === e) || "function" === e;
      };
      var d = function (t, e) {
        if (t)
          if (c(t))
            for (var n = 0, r = t.length; n < r && !1 !== e(t[n], n); n++);
          else if (l(t))
            for (var i in t)
              if (t.hasOwnProperty(i) && !1 === e(t[i], i)) break;
      };
      Object.keys;
      function f(t) {
        return (f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var p = function (t) {
          return "object" === f(t) && null !== t;
        },
        g = function (t) {
          if (!p(t) || !a(t, "Object")) return !1;
          if (null === Object.getPrototypeOf(t)) return !0;
          for (var e = t; null !== Object.getPrototypeOf(e); )
            e = Object.getPrototypeOf(e);
          return Object.getPrototypeOf(t) === e;
        };
      var y = function (t) {
          if (c(t))
            return t.reduce(function (t, e) {
              return Math.max(t, e);
            }, t[0]);
        },
        v = function (t) {
          if (c(t))
            return t.reduce(function (t, e) {
              return Math.min(t, e);
            }, t[0]);
        },
        m = function (t) {
          var e = t.filter(function (t) {
            return !isNaN(t);
          });
          if (!e.length) return { min: 0, max: 0 };
          if (c(t[0])) {
            for (var n = [], r = 0; r < t.length; r++) n = n.concat(t[r]);
            e = n;
          }
          var i = y(e);
          return { min: v(e), max: i };
        },
        b = Array.prototype,
        x =
          (b.splice,
          b.indexOf,
          Array.prototype.splice,
          function (t) {
            return a(t, "String");
          });
      function w(t) {
        if (r(t)) return t[0];
      }
      function O(t) {
        if (r(t)) {
          return t[t.length - 1];
        }
      }
      var M = Object.prototype.hasOwnProperty;
      var S = function (t, e) {
        if (!e || !c(t)) return {};
        for (
          var n,
            r = {},
            i = s(e)
              ? e
              : function (t) {
                  return t[e];
                },
            o = 0;
          o < t.length;
          o++
        ) {
          var a = t[o];
          (n = i(a)), M.call(r, n) ? r[n].push(a) : (r[n] = [a]);
        }
        return r;
      };
      var C = function (t, e) {
        if (t["_wrap_" + e]) return t["_wrap_" + e];
        var n = function (n) {
          t[e](n);
        };
        return (t["_wrap_" + e] = n), n;
      };
      var j = function (t, e) {
          var n = e.toString(),
            r = n.indexOf(".");
          if (-1 === r) return Math.round(t);
          var i = n.substr(r + 1).length;
          return i > 20 && (i = 20), parseFloat(t.toFixed(i));
        },
        k = function (t) {
          return a(t, "Number");
        };
      Number.isInteger && Number.isInteger;
      function E(t, e, n) {
        return void 0 === n && (n = 1e-5), Math.abs(t - e) < n;
      }
      var N = function (t, e) {
          return ((t % e) + e) % e;
        },
        T = (Math.PI, parseInt, Math.PI / 180),
        P = function (t) {
          return T * t;
        },
        I =
          (Object.values,
          function (t) {
            return u(t) ? "" : t.toString();
          });
      var B = function (t) {
          var e = I(t);
          return e.charAt(0).toUpperCase() + e.substring(1);
        },
        A = {}.toString,
        L = function (t) {
          return A.call(t)
            .replace(/^\[object /, "")
            .replace(/]$/, "");
        },
        D = function (t) {
          return a(t, "Boolean");
        },
        _ = function (t) {
          return a(t, "Date");
        },
        R = Object.prototype,
        Y = function (t) {
          var e = t && t.constructor;
          return t === (("function" == typeof e && e.prototype) || R);
        };
      function F(t, e) {
        for (var n in e)
          e.hasOwnProperty(n) &&
            "constructor" !== n &&
            void 0 !== e[n] &&
            (t[n] = e[n]);
      }
      function z(t, e, n, r) {
        return e && F(t, e), n && F(t, n), r && F(t, r), t;
      }
      function X(t) {
        return (X =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var W = function t(e) {
        if ("object" !== X(e) || null === e) return e;
        var n;
        if (c(e)) {
          n = [];
          for (var r = 0, i = e.length; r < i; r++)
            "object" === X(e[r]) && null != e[r]
              ? (n[r] = t(e[r]))
              : (n[r] = e[r]);
        } else
          for (var o in ((n = {}), e))
            "object" === X(e[o]) && null != e[o]
              ? (n[o] = t(e[o]))
              : (n[o] = e[o]);
        return n;
      };
      var G = function (t, e, n) {
        var r;
        return function () {
          var i = this,
            o = arguments,
            a = function () {
              (r = null), n || t.apply(i, o);
            },
            s = n && !r;
          clearTimeout(r), (r = setTimeout(a, e)), s && t.apply(i, o);
        };
      };
      function q(t, e, n, r) {
        for (var i in ((n = n || 0), (r = r || 5), e))
          if (e.hasOwnProperty(i)) {
            var o = e[i];
            null !== o && g(o)
              ? (g(t[i]) || (t[i] = {}),
                n < r ? q(t[i], o, n + 1, r) : (t[i] = e[i]))
              : c(o)
              ? ((t[i] = []), (t[i] = t[i].concat(o)))
              : void 0 !== o && (t[i] = o);
          }
      }
      var H = function (t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n];
          for (var r = 0; r < e.length; r += 1) q(t, e[r]);
          return t;
        },
        V = function (t, e) {
          if (!r(t)) return -1;
          var n = Array.prototype.indexOf;
          if (n) return n.call(t, e);
          for (var i = -1, o = 0; o < t.length; o++)
            if (t[o] === e) {
              i = o;
              break;
            }
          return i;
        },
        U = Object.prototype.hasOwnProperty;
      var Z = function (t) {
          if (u(t)) return !0;
          if (r(t)) return !t.length;
          var e = L(t);
          if ("Map" === e || "Set" === e) return !t.size;
          if (Y(t)) return !Object.keys(t).length;
          for (var n in t) if (U.call(t, n)) return !1;
          return !0;
        },
        K = function t(e, n) {
          if (e === n) return !0;
          if (!e || !n) return !1;
          if (x(e) || x(n)) return !1;
          if (r(e) || r(n)) {
            if (e.length !== n.length) return !1;
            for (var i = !0, o = 0; o < e.length && (i = t(e[o], n[o])); o++);
            return i;
          }
          if (p(e) || p(n)) {
            var a = Object.keys(e),
              s = Object.keys(n);
            if (a.length !== s.length) return !1;
            for (i = !0, o = 0; o < a.length && (i = t(e[a[o]], n[a[o]])); o++);
            return i;
          }
          return !1;
        },
        Q = function (t, e) {
          if (!r(t)) return t;
          for (var n = [], i = 0; i < t.length; i++) {
            var o = t[i];
            n.push(e(o, i));
          }
          return n;
        },
        $ = function (t, e, n) {
          for (var r = 0, i = x(e) ? e.split(".") : e; t && r < i.length; )
            t = t[i[r++]];
          return void 0 === t || r < i.length ? n : t;
        },
        J =
          (Object.prototype.hasOwnProperty,
          function (t, e, n) {
            var r,
              i,
              o,
              a,
              s = 0;
            n || (n = {});
            var u = function () {
                (s = !1 === n.leading ? 0 : Date.now()),
                  (r = null),
                  (a = t.apply(i, o)),
                  r || (i = o = null);
              },
              c = function () {
                var c = Date.now();
                s || !1 !== n.leading || (s = c);
                var h = e - (c - s);
                return (
                  (i = this),
                  (o = arguments),
                  h <= 0 || h > e
                    ? (r && (clearTimeout(r), (r = null)),
                      (s = c),
                      (a = t.apply(i, o)),
                      r || (i = o = null))
                    : r || !1 === n.trailing || (r = setTimeout(u, h)),
                  a
                );
              };
            return (
              (c.cancel = function () {
                clearTimeout(r), (s = 0), (r = i = o = null);
              }),
              c
            );
          }),
        tt = {},
        et = function (t) {
          return tt[(t = t || "g")] ? (tt[t] += 1) : (tt[t] = 1), t + tt[t];
        },
        nt = function () {};
      function rt(t) {
        return u(t) ? 0 : r(t) ? t.length : Object.keys(t).length;
      }
      !(function () {
        function t() {
          this.map = {};
        }
        (t.prototype.has = function (t) {
          return void 0 !== this.map[t];
        }),
          (t.prototype.get = function (t, e) {
            var n = this.map[t];
            return void 0 === n ? e : n;
          }),
          (t.prototype.set = function (t, e) {
            this.map[t] = e;
          }),
          (t.prototype.clear = function () {
            this.map = {};
          }),
          (t.prototype.delete = function (t) {
            delete this.map[t];
          }),
          (t.prototype.size = function () {
            return Object.keys(this.map).length;
          });
      })();
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "c", function () {
        return i;
      }),
        n.d(e, "a", function () {
          return o;
        }),
        n.d(e, "e", function () {
          return a;
        }),
        n.d(e, "b", function () {
          return s;
        }),
        n.d(e, "d", function () {
          return u;
        }),
        n.d(e, "g", function () {
          return c;
        }),
        n.d(e, "f", function () {
          return h;
        });
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
      var r = function (t, e) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          })(t, e);
      };
      function i(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Class extends value " +
              String(e) +
              " is not a constructor or null",
          );
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      };
      function a(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        }
        return n;
      }
      function s(t, e, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(t) {
            try {
              u(r.next(t));
            } catch (t) {
              o(t);
            }
          }
          function s(t) {
            try {
              u(r.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(a, s);
          }
          u((r = r.apply(t, e || [])).next());
        });
      }
      function u(t, e) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function s(o) {
          return function (s) {
            return (function (o) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & o[0]
                          ? r.return
                          : o[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return a.label++, { value: o[1], done: !1 };
                    case 5:
                      a.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !((i = a.trys),
                        (i = i.length > 0 && i[i.length - 1]) ||
                          (6 !== o[0] && 2 !== o[0]))
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        a.label = o[1];
                        break;
                      }
                      if (6 === o[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = o);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(o);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  o = e.call(t, a);
                } catch (t) {
                  (o = [6, t]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, s]);
          };
        }
      }
      Object.create;
      function c() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++)
          t += arguments[e].length;
        var r = Array(t),
          i = 0;
        for (e = 0; e < n; e++)
          for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++)
            r[i] = o[a];
        return r;
      }
      function h(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = e.length; i < o; i++)
            (!r && i in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
        return t.concat(r || e);
      }
      Object.create;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return Y;
        }),
        n.d(e, "d", function () {
          return i;
        }),
        n.d(e, "a", function () {
          return o;
        });
      var r = {};
      n.r(r),
        n.d(r, "create", function () {
          return s;
        }),
        n.d(r, "fromMat4", function () {
          return u;
        }),
        n.d(r, "clone", function () {
          return c;
        }),
        n.d(r, "copy", function () {
          return h;
        }),
        n.d(r, "fromValues", function () {
          return l;
        }),
        n.d(r, "set", function () {
          return d;
        }),
        n.d(r, "identity", function () {
          return f;
        }),
        n.d(r, "transpose", function () {
          return p;
        }),
        n.d(r, "invert", function () {
          return g;
        }),
        n.d(r, "adjoint", function () {
          return y;
        }),
        n.d(r, "determinant", function () {
          return v;
        }),
        n.d(r, "multiply", function () {
          return m;
        }),
        n.d(r, "translate", function () {
          return b;
        }),
        n.d(r, "rotate", function () {
          return x;
        }),
        n.d(r, "scale", function () {
          return w;
        }),
        n.d(r, "fromTranslation", function () {
          return O;
        }),
        n.d(r, "fromRotation", function () {
          return M;
        }),
        n.d(r, "fromScaling", function () {
          return S;
        }),
        n.d(r, "fromMat2d", function () {
          return C;
        }),
        n.d(r, "fromQuat", function () {
          return j;
        }),
        n.d(r, "normalFromMat4", function () {
          return k;
        }),
        n.d(r, "projection", function () {
          return E;
        }),
        n.d(r, "str", function () {
          return N;
        }),
        n.d(r, "frob", function () {
          return T;
        }),
        n.d(r, "add", function () {
          return P;
        }),
        n.d(r, "subtract", function () {
          return I;
        }),
        n.d(r, "multiplyScalar", function () {
          return B;
        }),
        n.d(r, "multiplyScalarAndAdd", function () {
          return A;
        }),
        n.d(r, "exactEquals", function () {
          return L;
        }),
        n.d(r, "equals", function () {
          return D;
        }),
        n.d(r, "mul", function () {
          return _;
        }),
        n.d(r, "sub", function () {
          return R;
        });
      var i = {};
      n.r(i),
        n.d(i, "create", function () {
          return F;
        }),
        n.d(i, "clone", function () {
          return z;
        }),
        n.d(i, "length", function () {
          return X;
        }),
        n.d(i, "fromValues", function () {
          return W;
        }),
        n.d(i, "copy", function () {
          return G;
        }),
        n.d(i, "set", function () {
          return q;
        }),
        n.d(i, "add", function () {
          return H;
        }),
        n.d(i, "subtract", function () {
          return V;
        }),
        n.d(i, "multiply", function () {
          return U;
        }),
        n.d(i, "divide", function () {
          return Z;
        }),
        n.d(i, "ceil", function () {
          return K;
        }),
        n.d(i, "floor", function () {
          return Q;
        }),
        n.d(i, "min", function () {
          return $;
        }),
        n.d(i, "max", function () {
          return J;
        }),
        n.d(i, "round", function () {
          return tt;
        }),
        n.d(i, "scale", function () {
          return et;
        }),
        n.d(i, "scaleAndAdd", function () {
          return nt;
        }),
        n.d(i, "distance", function () {
          return rt;
        }),
        n.d(i, "squaredDistance", function () {
          return it;
        }),
        n.d(i, "squaredLength", function () {
          return ot;
        }),
        n.d(i, "negate", function () {
          return at;
        }),
        n.d(i, "inverse", function () {
          return st;
        }),
        n.d(i, "normalize", function () {
          return ut;
        }),
        n.d(i, "dot", function () {
          return ct;
        }),
        n.d(i, "cross", function () {
          return ht;
        }),
        n.d(i, "lerp", function () {
          return lt;
        }),
        n.d(i, "hermite", function () {
          return dt;
        }),
        n.d(i, "bezier", function () {
          return ft;
        }),
        n.d(i, "random", function () {
          return pt;
        }),
        n.d(i, "transformMat4", function () {
          return gt;
        }),
        n.d(i, "transformMat3", function () {
          return yt;
        }),
        n.d(i, "transformQuat", function () {
          return vt;
        }),
        n.d(i, "rotateX", function () {
          return mt;
        }),
        n.d(i, "rotateY", function () {
          return bt;
        }),
        n.d(i, "rotateZ", function () {
          return xt;
        }),
        n.d(i, "angle", function () {
          return wt;
        }),
        n.d(i, "zero", function () {
          return Ot;
        }),
        n.d(i, "str", function () {
          return Mt;
        }),
        n.d(i, "exactEquals", function () {
          return St;
        }),
        n.d(i, "equals", function () {
          return Ct;
        }),
        n.d(i, "sub", function () {
          return kt;
        }),
        n.d(i, "mul", function () {
          return Et;
        }),
        n.d(i, "div", function () {
          return Nt;
        }),
        n.d(i, "dist", function () {
          return Tt;
        }),
        n.d(i, "sqrDist", function () {
          return Pt;
        }),
        n.d(i, "len", function () {
          return It;
        }),
        n.d(i, "sqrLen", function () {
          return Bt;
        }),
        n.d(i, "forEach", function () {
          return At;
        });
      var o = {};
      n.r(o),
        n.d(o, "leftTranslate", function () {
          return Lt;
        }),
        n.d(o, "leftRotate", function () {
          return Dt;
        }),
        n.d(o, "leftScale", function () {
          return _t;
        }),
        n.d(o, "transform", function () {
          return Rt;
        }),
        n.d(o, "direction", function () {
          return Yt;
        }),
        n.d(o, "angleTo", function () {
          return Ft;
        }),
        n.d(o, "vertical", function () {
          return zt;
        });
      var a = n(4);
      function s() {
        var t = new a.a(9);
        return (
          a.a != Float32Array &&
            ((t[1] = 0),
            (t[2] = 0),
            (t[3] = 0),
            (t[5] = 0),
            (t[6] = 0),
            (t[7] = 0)),
          (t[0] = 1),
          (t[4] = 1),
          (t[8] = 1),
          t
        );
      }
      function u(t, e) {
        return (
          (t[0] = e[0]),
          (t[1] = e[1]),
          (t[2] = e[2]),
          (t[3] = e[4]),
          (t[4] = e[5]),
          (t[5] = e[6]),
          (t[6] = e[8]),
          (t[7] = e[9]),
          (t[8] = e[10]),
          t
        );
      }
      function c(t) {
        var e = new a.a(9);
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[3]),
          (e[4] = t[4]),
          (e[5] = t[5]),
          (e[6] = t[6]),
          (e[7] = t[7]),
          (e[8] = t[8]),
          e
        );
      }
      function h(t, e) {
        return (
          (t[0] = e[0]),
          (t[1] = e[1]),
          (t[2] = e[2]),
          (t[3] = e[3]),
          (t[4] = e[4]),
          (t[5] = e[5]),
          (t[6] = e[6]),
          (t[7] = e[7]),
          (t[8] = e[8]),
          t
        );
      }
      function l(t, e, n, r, i, o, s, u, c) {
        var h = new a.a(9);
        return (
          (h[0] = t),
          (h[1] = e),
          (h[2] = n),
          (h[3] = r),
          (h[4] = i),
          (h[5] = o),
          (h[6] = s),
          (h[7] = u),
          (h[8] = c),
          h
        );
      }
      function d(t, e, n, r, i, o, a, s, u, c) {
        return (
          (t[0] = e),
          (t[1] = n),
          (t[2] = r),
          (t[3] = i),
          (t[4] = o),
          (t[5] = a),
          (t[6] = s),
          (t[7] = u),
          (t[8] = c),
          t
        );
      }
      function f(t) {
        return (
          (t[0] = 1),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 1),
          (t[5] = 0),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 1),
          t
        );
      }
      function p(t, e) {
        if (t === e) {
          var n = e[1],
            r = e[2],
            i = e[5];
          (t[1] = e[3]),
            (t[2] = e[6]),
            (t[3] = n),
            (t[5] = e[7]),
            (t[6] = r),
            (t[7] = i);
        } else
          (t[0] = e[0]),
            (t[1] = e[3]),
            (t[2] = e[6]),
            (t[3] = e[1]),
            (t[4] = e[4]),
            (t[5] = e[7]),
            (t[6] = e[2]),
            (t[7] = e[5]),
            (t[8] = e[8]);
        return t;
      }
      function g(t, e) {
        var n = e[0],
          r = e[1],
          i = e[2],
          o = e[3],
          a = e[4],
          s = e[5],
          u = e[6],
          c = e[7],
          h = e[8],
          l = h * a - s * c,
          d = -h * o + s * u,
          f = c * o - a * u,
          p = n * l + r * d + i * f;
        return p
          ? ((p = 1 / p),
            (t[0] = l * p),
            (t[1] = (-h * r + i * c) * p),
            (t[2] = (s * r - i * a) * p),
            (t[3] = d * p),
            (t[4] = (h * n - i * u) * p),
            (t[5] = (-s * n + i * o) * p),
            (t[6] = f * p),
            (t[7] = (-c * n + r * u) * p),
            (t[8] = (a * n - r * o) * p),
            t)
          : null;
      }
      function y(t, e) {
        var n = e[0],
          r = e[1],
          i = e[2],
          o = e[3],
          a = e[4],
          s = e[5],
          u = e[6],
          c = e[7],
          h = e[8];
        return (
          (t[0] = a * h - s * c),
          (t[1] = i * c - r * h),
          (t[2] = r * s - i * a),
          (t[3] = s * u - o * h),
          (t[4] = n * h - i * u),
          (t[5] = i * o - n * s),
          (t[6] = o * c - a * u),
          (t[7] = r * u - n * c),
          (t[8] = n * a - r * o),
          t
        );
      }
      function v(t) {
        var e = t[0],
          n = t[1],
          r = t[2],
          i = t[3],
          o = t[4],
          a = t[5],
          s = t[6],
          u = t[7],
          c = t[8];
        return e * (c * o - a * u) + n * (-c * i + a * s) + r * (u * i - o * s);
      }
      function m(t, e, n) {
        var r = e[0],
          i = e[1],
          o = e[2],
          a = e[3],
          s = e[4],
          u = e[5],
          c = e[6],
          h = e[7],
          l = e[8],
          d = n[0],
          f = n[1],
          p = n[2],
          g = n[3],
          y = n[4],
          v = n[5],
          m = n[6],
          b = n[7],
          x = n[8];
        return (
          (t[0] = d * r + f * a + p * c),
          (t[1] = d * i + f * s + p * h),
          (t[2] = d * o + f * u + p * l),
          (t[3] = g * r + y * a + v * c),
          (t[4] = g * i + y * s + v * h),
          (t[5] = g * o + y * u + v * l),
          (t[6] = m * r + b * a + x * c),
          (t[7] = m * i + b * s + x * h),
          (t[8] = m * o + b * u + x * l),
          t
        );
      }
      function b(t, e, n) {
        var r = e[0],
          i = e[1],
          o = e[2],
          a = e[3],
          s = e[4],
          u = e[5],
          c = e[6],
          h = e[7],
          l = e[8],
          d = n[0],
          f = n[1];
        return (
          (t[0] = r),
          (t[1] = i),
          (t[2] = o),
          (t[3] = a),
          (t[4] = s),
          (t[5] = u),
          (t[6] = d * r + f * a + c),
          (t[7] = d * i + f * s + h),
          (t[8] = d * o + f * u + l),
          t
        );
      }
      function x(t, e, n) {
        var r = e[0],
          i = e[1],
          o = e[2],
          a = e[3],
          s = e[4],
          u = e[5],
          c = e[6],
          h = e[7],
          l = e[8],
          d = Math.sin(n),
          f = Math.cos(n);
        return (
          (t[0] = f * r + d * a),
          (t[1] = f * i + d * s),
          (t[2] = f * o + d * u),
          (t[3] = f * a - d * r),
          (t[4] = f * s - d * i),
          (t[5] = f * u - d * o),
          (t[6] = c),
          (t[7] = h),
          (t[8] = l),
          t
        );
      }
      function w(t, e, n) {
        var r = n[0],
          i = n[1];
        return (
          (t[0] = r * e[0]),
          (t[1] = r * e[1]),
          (t[2] = r * e[2]),
          (t[3] = i * e[3]),
          (t[4] = i * e[4]),
          (t[5] = i * e[5]),
          (t[6] = e[6]),
          (t[7] = e[7]),
          (t[8] = e[8]),
          t
        );
      }
      function O(t, e) {
        return (
          (t[0] = 1),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = 1),
          (t[5] = 0),
          (t[6] = e[0]),
          (t[7] = e[1]),
          (t[8] = 1),
          t
        );
      }
      function M(t, e) {
        var n = Math.sin(e),
          r = Math.cos(e);
        return (
          (t[0] = r),
          (t[1] = n),
          (t[2] = 0),
          (t[3] = -n),
          (t[4] = r),
          (t[5] = 0),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 1),
          t
        );
      }
      function S(t, e) {
        return (
          (t[0] = e[0]),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = e[1]),
          (t[5] = 0),
          (t[6] = 0),
          (t[7] = 0),
          (t[8] = 1),
          t
        );
      }
      function C(t, e) {
        return (
          (t[0] = e[0]),
          (t[1] = e[1]),
          (t[2] = 0),
          (t[3] = e[2]),
          (t[4] = e[3]),
          (t[5] = 0),
          (t[6] = e[4]),
          (t[7] = e[5]),
          (t[8] = 1),
          t
        );
      }
      function j(t, e) {
        var n = e[0],
          r = e[1],
          i = e[2],
          o = e[3],
          a = n + n,
          s = r + r,
          u = i + i,
          c = n * a,
          h = r * a,
          l = r * s,
          d = i * a,
          f = i * s,
          p = i * u,
          g = o * a,
          y = o * s,
          v = o * u;
        return (
          (t[0] = 1 - l - p),
          (t[3] = h - v),
          (t[6] = d + y),
          (t[1] = h + v),
          (t[4] = 1 - c - p),
          (t[7] = f - g),
          (t[2] = d - y),
          (t[5] = f + g),
          (t[8] = 1 - c - l),
          t
        );
      }
      function k(t, e) {
        var n = e[0],
          r = e[1],
          i = e[2],
          o = e[3],
          a = e[4],
          s = e[5],
          u = e[6],
          c = e[7],
          h = e[8],
          l = e[9],
          d = e[10],
          f = e[11],
          p = e[12],
          g = e[13],
          y = e[14],
          v = e[15],
          m = n * s - r * a,
          b = n * u - i * a,
          x = n * c - o * a,
          w = r * u - i * s,
          O = r * c - o * s,
          M = i * c - o * u,
          S = h * g - l * p,
          C = h * y - d * p,
          j = h * v - f * p,
          k = l * y - d * g,
          E = l * v - f * g,
          N = d * v - f * y,
          T = m * N - b * E + x * k + w * j - O * C + M * S;
        return T
          ? ((T = 1 / T),
            (t[0] = (s * N - u * E + c * k) * T),
            (t[1] = (u * j - a * N - c * C) * T),
            (t[2] = (a * E - s * j + c * S) * T),
            (t[3] = (i * E - r * N - o * k) * T),
            (t[4] = (n * N - i * j + o * C) * T),
            (t[5] = (r * j - n * E - o * S) * T),
            (t[6] = (g * M - y * O + v * w) * T),
            (t[7] = (y * x - p * M - v * b) * T),
            (t[8] = (p * O - g * x + v * m) * T),
            t)
          : null;
      }
      function E(t, e, n) {
        return (
          (t[0] = 2 / e),
          (t[1] = 0),
          (t[2] = 0),
          (t[3] = 0),
          (t[4] = -2 / n),
          (t[5] = 0),
          (t[6] = -1),
          (t[7] = 1),
          (t[8] = 1),
          t
        );
      }
      function N(t) {
        return (
          "mat3(" +
          t[0] +
          ", " +
          t[1] +
          ", " +
          t[2] +
          ", " +
          t[3] +
          ", " +
          t[4] +
          ", " +
          t[5] +
          ", " +
          t[6] +
          ", " +
          t[7] +
          ", " +
          t[8] +
          ")"
        );
      }
      function T(t) {
        return Math.hypot(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]);
      }
      function P(t, e, n) {
        return (
          (t[0] = e[0] + n[0]),
          (t[1] = e[1] + n[1]),
          (t[2] = e[2] + n[2]),
          (t[3] = e[3] + n[3]),
          (t[4] = e[4] + n[4]),
          (t[5] = e[5] + n[5]),
          (t[6] = e[6] + n[6]),
          (t[7] = e[7] + n[7]),
          (t[8] = e[8] + n[8]),
          t
        );
      }
      function I(t, e, n) {
        return (
          (t[0] = e[0] - n[0]),
          (t[1] = e[1] - n[1]),
          (t[2] = e[2] - n[2]),
          (t[3] = e[3] - n[3]),
          (t[4] = e[4] - n[4]),
          (t[5] = e[5] - n[5]),
          (t[6] = e[6] - n[6]),
          (t[7] = e[7] - n[7]),
          (t[8] = e[8] - n[8]),
          t
        );
      }
      function B(t, e, n) {
        return (
          (t[0] = e[0] * n),
          (t[1] = e[1] * n),
          (t[2] = e[2] * n),
          (t[3] = e[3] * n),
          (t[4] = e[4] * n),
          (t[5] = e[5] * n),
          (t[6] = e[6] * n),
          (t[7] = e[7] * n),
          (t[8] = e[8] * n),
          t
        );
      }
      function A(t, e, n, r) {
        return (
          (t[0] = e[0] + n[0] * r),
          (t[1] = e[1] + n[1] * r),
          (t[2] = e[2] + n[2] * r),
          (t[3] = e[3] + n[3] * r),
          (t[4] = e[4] + n[4] * r),
          (t[5] = e[5] + n[5] * r),
          (t[6] = e[6] + n[6] * r),
          (t[7] = e[7] + n[7] * r),
          (t[8] = e[8] + n[8] * r),
          t
        );
      }
      function L(t, e) {
        return (
          t[0] === e[0] &&
          t[1] === e[1] &&
          t[2] === e[2] &&
          t[3] === e[3] &&
          t[4] === e[4] &&
          t[5] === e[5] &&
          t[6] === e[6] &&
          t[7] === e[7] &&
          t[8] === e[8]
        );
      }
      function D(t, e) {
        var n = t[0],
          r = t[1],
          i = t[2],
          o = t[3],
          s = t[4],
          u = t[5],
          c = t[6],
          h = t[7],
          l = t[8],
          d = e[0],
          f = e[1],
          p = e[2],
          g = e[3],
          y = e[4],
          v = e[5],
          m = e[6],
          b = e[7],
          x = e[8];
        return (
          Math.abs(n - d) <= a.b * Math.max(1, Math.abs(n), Math.abs(d)) &&
          Math.abs(r - f) <= a.b * Math.max(1, Math.abs(r), Math.abs(f)) &&
          Math.abs(i - p) <= a.b * Math.max(1, Math.abs(i), Math.abs(p)) &&
          Math.abs(o - g) <= a.b * Math.max(1, Math.abs(o), Math.abs(g)) &&
          Math.abs(s - y) <= a.b * Math.max(1, Math.abs(s), Math.abs(y)) &&
          Math.abs(u - v) <= a.b * Math.max(1, Math.abs(u), Math.abs(v)) &&
          Math.abs(c - m) <= a.b * Math.max(1, Math.abs(c), Math.abs(m)) &&
          Math.abs(h - b) <= a.b * Math.max(1, Math.abs(h), Math.abs(b)) &&
          Math.abs(l - x) <= a.b * Math.max(1, Math.abs(l), Math.abs(x))
        );
      }
      var _ = m,
        R = I,
        Y = n(9);
      function F() {
        var t = new a.a(3);
        return a.a != Float32Array && ((t[0] = 0), (t[1] = 0), (t[2] = 0)), t;
      }
      function z(t) {
        var e = new a.a(3);
        return (e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), e;
      }
      function X(t) {
        var e = t[0],
          n = t[1],
          r = t[2];
        return Math.hypot(e, n, r);
      }
      function W(t, e, n) {
        var r = new a.a(3);
        return (r[0] = t), (r[1] = e), (r[2] = n), r;
      }
      function G(t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
      }
      function q(t, e, n, r) {
        return (t[0] = e), (t[1] = n), (t[2] = r), t;
      }
      function H(t, e, n) {
        return (
          (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), (t[2] = e[2] + n[2]), t
        );
      }
      function V(t, e, n) {
        return (
          (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), (t[2] = e[2] - n[2]), t
        );
      }
      function U(t, e, n) {
        return (
          (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), (t[2] = e[2] * n[2]), t
        );
      }
      function Z(t, e, n) {
        return (
          (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), (t[2] = e[2] / n[2]), t
        );
      }
      function K(t, e) {
        return (
          (t[0] = Math.ceil(e[0])),
          (t[1] = Math.ceil(e[1])),
          (t[2] = Math.ceil(e[2])),
          t
        );
      }
      function Q(t, e) {
        return (
          (t[0] = Math.floor(e[0])),
          (t[1] = Math.floor(e[1])),
          (t[2] = Math.floor(e[2])),
          t
        );
      }
      function $(t, e, n) {
        return (
          (t[0] = Math.min(e[0], n[0])),
          (t[1] = Math.min(e[1], n[1])),
          (t[2] = Math.min(e[2], n[2])),
          t
        );
      }
      function J(t, e, n) {
        return (
          (t[0] = Math.max(e[0], n[0])),
          (t[1] = Math.max(e[1], n[1])),
          (t[2] = Math.max(e[2], n[2])),
          t
        );
      }
      function tt(t, e) {
        return (
          (t[0] = Math.round(e[0])),
          (t[1] = Math.round(e[1])),
          (t[2] = Math.round(e[2])),
          t
        );
      }
      function et(t, e, n) {
        return (t[0] = e[0] * n), (t[1] = e[1] * n), (t[2] = e[2] * n), t;
      }
      function nt(t, e, n, r) {
        return (
          (t[0] = e[0] + n[0] * r),
          (t[1] = e[1] + n[1] * r),
          (t[2] = e[2] + n[2] * r),
          t
        );
      }
      function rt(t, e) {
        var n = e[0] - t[0],
          r = e[1] - t[1],
          i = e[2] - t[2];
        return Math.hypot(n, r, i);
      }
      function it(t, e) {
        var n = e[0] - t[0],
          r = e[1] - t[1],
          i = e[2] - t[2];
        return n * n + r * r + i * i;
      }
      function ot(t) {
        var e = t[0],
          n = t[1],
          r = t[2];
        return e * e + n * n + r * r;
      }
      function at(t, e) {
        return (t[0] = -e[0]), (t[1] = -e[1]), (t[2] = -e[2]), t;
      }
      function st(t, e) {
        return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), (t[2] = 1 / e[2]), t;
      }
      function ut(t, e) {
        var n = e[0],
          r = e[1],
          i = e[2],
          o = n * n + r * r + i * i;
        return (
          o > 0 && (o = 1 / Math.sqrt(o)),
          (t[0] = e[0] * o),
          (t[1] = e[1] * o),
          (t[2] = e[2] * o),
          t
        );
      }
      function ct(t, e) {
        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
      }
      function ht(t, e, n) {
        var r = e[0],
          i = e[1],
          o = e[2],
          a = n[0],
          s = n[1],
          u = n[2];
        return (
          (t[0] = i * u - o * s),
          (t[1] = o * a - r * u),
          (t[2] = r * s - i * a),
          t
        );
      }
      function lt(t, e, n, r) {
        var i = e[0],
          o = e[1],
          a = e[2];
        return (
          (t[0] = i + r * (n[0] - i)),
          (t[1] = o + r * (n[1] - o)),
          (t[2] = a + r * (n[2] - a)),
          t
        );
      }
      function dt(t, e, n, r, i, o) {
        var a = o * o,
          s = a * (2 * o - 3) + 1,
          u = a * (o - 2) + o,
          c = a * (o - 1),
          h = a * (3 - 2 * o);
        return (
          (t[0] = e[0] * s + n[0] * u + r[0] * c + i[0] * h),
          (t[1] = e[1] * s + n[1] * u + r[1] * c + i[1] * h),
          (t[2] = e[2] * s + n[2] * u + r[2] * c + i[2] * h),
          t
        );
      }
      function ft(t, e, n, r, i, o) {
        var a = 1 - o,
          s = a * a,
          u = o * o,
          c = s * a,
          h = 3 * o * s,
          l = 3 * u * a,
          d = u * o;
        return (
          (t[0] = e[0] * c + n[0] * h + r[0] * l + i[0] * d),
          (t[1] = e[1] * c + n[1] * h + r[1] * l + i[1] * d),
          (t[2] = e[2] * c + n[2] * h + r[2] * l + i[2] * d),
          t
        );
      }
      function pt(t, e) {
        e = e || 1;
        var n = 2 * a.c() * Math.PI,
          r = 2 * a.c() - 1,
          i = Math.sqrt(1 - r * r) * e;
        return (
          (t[0] = Math.cos(n) * i), (t[1] = Math.sin(n) * i), (t[2] = r * e), t
        );
      }
      function gt(t, e, n) {
        var r = e[0],
          i = e[1],
          o = e[2],
          a = n[3] * r + n[7] * i + n[11] * o + n[15];
        return (
          (a = a || 1),
          (t[0] = (n[0] * r + n[4] * i + n[8] * o + n[12]) / a),
          (t[1] = (n[1] * r + n[5] * i + n[9] * o + n[13]) / a),
          (t[2] = (n[2] * r + n[6] * i + n[10] * o + n[14]) / a),
          t
        );
      }
      function yt(t, e, n) {
        var r = e[0],
          i = e[1],
          o = e[2];
        return (
          (t[0] = r * n[0] + i * n[3] + o * n[6]),
          (t[1] = r * n[1] + i * n[4] + o * n[7]),
          (t[2] = r * n[2] + i * n[5] + o * n[8]),
          t
        );
      }
      function vt(t, e, n) {
        var r = n[0],
          i = n[1],
          o = n[2],
          a = n[3],
          s = e[0],
          u = e[1],
          c = e[2],
          h = i * c - o * u,
          l = o * s - r * c,
          d = r * u - i * s,
          f = i * d - o * l,
          p = o * h - r * d,
          g = r * l - i * h,
          y = 2 * a;
        return (
          (h *= y),
          (l *= y),
          (d *= y),
          (f *= 2),
          (p *= 2),
          (g *= 2),
          (t[0] = s + h + f),
          (t[1] = u + l + p),
          (t[2] = c + d + g),
          t
        );
      }
      function mt(t, e, n, r) {
        var i = [],
          o = [];
        return (
          (i[0] = e[0] - n[0]),
          (i[1] = e[1] - n[1]),
          (i[2] = e[2] - n[2]),
          (o[0] = i[0]),
          (o[1] = i[1] * Math.cos(r) - i[2] * Math.sin(r)),
          (o[2] = i[1] * Math.sin(r) + i[2] * Math.cos(r)),
          (t[0] = o[0] + n[0]),
          (t[1] = o[1] + n[1]),
          (t[2] = o[2] + n[2]),
          t
        );
      }
      function bt(t, e, n, r) {
        var i = [],
          o = [];
        return (
          (i[0] = e[0] - n[0]),
          (i[1] = e[1] - n[1]),
          (i[2] = e[2] - n[2]),
          (o[0] = i[2] * Math.sin(r) + i[0] * Math.cos(r)),
          (o[1] = i[1]),
          (o[2] = i[2] * Math.cos(r) - i[0] * Math.sin(r)),
          (t[0] = o[0] + n[0]),
          (t[1] = o[1] + n[1]),
          (t[2] = o[2] + n[2]),
          t
        );
      }
      function xt(t, e, n, r) {
        var i = [],
          o = [];
        return (
          (i[0] = e[0] - n[0]),
          (i[1] = e[1] - n[1]),
          (i[2] = e[2] - n[2]),
          (o[0] = i[0] * Math.cos(r) - i[1] * Math.sin(r)),
          (o[1] = i[0] * Math.sin(r) + i[1] * Math.cos(r)),
          (o[2] = i[2]),
          (t[0] = o[0] + n[0]),
          (t[1] = o[1] + n[1]),
          (t[2] = o[2] + n[2]),
          t
        );
      }
      function wt(t, e) {
        var n = t[0],
          r = t[1],
          i = t[2],
          o = e[0],
          a = e[1],
          s = e[2],
          u =
            Math.sqrt(n * n + r * r + i * i) * Math.sqrt(o * o + a * a + s * s),
          c = u && ct(t, e) / u;
        return Math.acos(Math.min(Math.max(c, -1), 1));
      }
      function Ot(t) {
        return (t[0] = 0), (t[1] = 0), (t[2] = 0), t;
      }
      function Mt(t) {
        return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
      }
      function St(t, e) {
        return t[0] === e[0] && t[1] === e[1] && t[2] === e[2];
      }
      function Ct(t, e) {
        var n = t[0],
          r = t[1],
          i = t[2],
          o = e[0],
          s = e[1],
          u = e[2];
        return (
          Math.abs(n - o) <= a.b * Math.max(1, Math.abs(n), Math.abs(o)) &&
          Math.abs(r - s) <= a.b * Math.max(1, Math.abs(r), Math.abs(s)) &&
          Math.abs(i - u) <= a.b * Math.max(1, Math.abs(i), Math.abs(u))
        );
      }
      var jt,
        kt = V,
        Et = U,
        Nt = Z,
        Tt = rt,
        Pt = it,
        It = X,
        Bt = ot,
        At =
          ((jt = F()),
          function (t, e, n, r, i, o) {
            var a, s;
            for (
              e || (e = 3),
                n || (n = 0),
                s = r ? Math.min(r * e + n, t.length) : t.length,
                a = n;
              a < s;
              a += e
            )
              (jt[0] = t[a]),
                (jt[1] = t[a + 1]),
                (jt[2] = t[a + 2]),
                i(jt, jt, o),
                (t[a] = jt[0]),
                (t[a + 1] = jt[1]),
                (t[a + 2] = jt[2]);
            return t;
          });
      function Lt(t, e, n) {
        var i = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        return r.fromTranslation(i, n), r.multiply(t, i, e);
      }
      function Dt(t, e, n) {
        var i = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        return r.fromRotation(i, n), r.multiply(t, i, e);
      }
      function _t(t, e, n) {
        var i = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        return r.fromScaling(i, n), r.multiply(t, i, e);
      }
      function Rt(t, e) {
        for (
          var n,
            i,
            o,
            a = t ? [].concat(t) : [1, 0, 0, 0, 1, 0, 0, 0, 1],
            s = 0,
            u = e.length;
          s < u;
          s++
        ) {
          var c = e[s];
          switch (c[0]) {
            case "t":
              Lt(a, a, [c[1], c[2]]);
              break;
            case "s":
              _t(a, a, [c[1], c[2]]);
              break;
            case "r":
              Dt(a, a, c[1]);
              break;
            case "m":
              (n = a), (i = a), (o = c[1]), r.multiply(n, o, i);
          }
        }
        return a;
      }
      function Yt(t, e) {
        return t[0] * e[1] - e[0] * t[1];
      }
      function Ft(t, e, n) {
        var r = Y.angle(t, e),
          i = Yt(t, e) >= 0;
        return n ? (i ? 2 * Math.PI - r : r) : i ? r : 2 * Math.PI - r;
      }
      function zt(t, e, n) {
        return (
          n
            ? ((t[0] = e[1]), (t[1] = -1 * e[0]))
            : ((t[0] = -1 * e[1]), (t[1] = e[0])),
          t
        );
      }
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "j", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "g", function () {
          return a;
        }),
        n.d(e, "b", function () {
          return s;
        });
      var r = n(0);
      function i(t, e) {
        var n = t.indexOf(e);
        -1 !== n && t.splice(n, 1);
      }
      n.d(e, "e", function () {
        return r.s;
      }),
        n.d(e, "d", function () {
          return r.r;
        }),
        n.d(e, "h", function () {
          return r.x;
        }),
        n.d(e, "f", function () {
          return r.v;
        }),
        n.d(e, "i", function () {
          return r.C;
        }),
        n.d(e, "a", function () {
          return r.e;
        }),
        n.d(e, "k", function () {
          return r.J;
        });
      var o = "undefined" != typeof window && void 0 !== window.document;
      function a(t, e) {
        if (t.isCanvas()) return !0;
        for (var n = e.getParent(), r = !1; n; ) {
          if (n === t) {
            r = !0;
            break;
          }
          n = n.getParent();
        }
        return r;
      }
      function s(t) {
        return t.cfg.visible && t.cfg.capture;
      }
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "a", function () {
          return i;
        }),
        n.d(e, "c", function () {
          return o;
        });
      var r = 1e-6,
        i = "undefined" != typeof Float32Array ? Float32Array : Array,
        o = Math.random;
      Math.PI;
      Math.hypot ||
        (Math.hypot = function () {
          for (var t = 0, e = arguments.length; e--; )
            t += arguments[e] * arguments[e];
          return Math.sqrt(t);
        });
    },
    function (t, e, n) {
      "use strict";
      function r(t, e) {
        var n = [],
          r = t[0],
          i = t[1],
          o = t[2],
          a = t[3],
          s = t[4],
          u = t[5],
          c = t[6],
          h = t[7],
          l = t[8],
          d = e[0],
          f = e[1],
          p = e[2],
          g = e[3],
          y = e[4],
          v = e[5],
          m = e[6],
          b = e[7],
          x = e[8];
        return (
          (n[0] = d * r + f * a + p * c),
          (n[1] = d * i + f * s + p * h),
          (n[2] = d * o + f * u + p * l),
          (n[3] = g * r + y * a + v * c),
          (n[4] = g * i + y * s + v * h),
          (n[5] = g * o + y * u + v * l),
          (n[6] = m * r + b * a + x * c),
          (n[7] = m * i + b * s + x * h),
          (n[8] = m * o + b * u + x * l),
          n
        );
      }
      function i(t, e) {
        var n = [],
          r = e[0],
          i = e[1];
        return (
          (n[0] = t[0] * r + t[3] * i + t[6]),
          (n[1] = t[1] * r + t[4] * i + t[7]),
          n
        );
      }
      function o(t) {
        var e = [],
          n = t[0],
          r = t[1],
          i = t[2],
          o = t[3],
          a = t[4],
          s = t[5],
          u = t[6],
          c = t[7],
          h = t[8],
          l = h * a - s * c,
          d = -h * o + s * u,
          f = c * o - a * u,
          p = n * l + r * d + i * f;
        return p
          ? ((p = 1 / p),
            (e[0] = l * p),
            (e[1] = (-h * r + i * c) * p),
            (e[2] = (s * r - i * a) * p),
            (e[3] = d * p),
            (e[4] = (h * n - i * u) * p),
            (e[5] = (-s * n + i * o) * p),
            (e[6] = f * p),
            (e[7] = (-c * n + r * u) * p),
            (e[8] = (a * n - r * o) * p),
            e)
          : null;
      }
      n.d(e, "b", function () {
        return r;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {
          return o;
        });
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return h;
      }),
        n.d(e, "b", function () {
          return f;
        }),
        n.d(e, "c", function () {
          return s;
        });
      var r = n(0),
        i = "\t\n\v\f\r   ᠎             　\u2028\u2029",
        o = new RegExp(
          "([a-z])[" +
            i +
            ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" +
            i +
            "]*,?[" +
            i +
            "]*)+)",
          "ig",
        ),
        a = new RegExp(
          "(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + i + "]*,?[" + i + "]*",
          "ig",
        ),
        s = function (t) {
          if (!t) return null;
          if (Object(r.m)(t)) return t;
          var e = {
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
              z: 0,
            },
            n = [];
          return (
            String(t).replace(o, function (r, i, o) {
              var s = [],
                u = i.toLowerCase();
              if (
                (o.replace(a, function (t, e) {
                  e && s.push(+e);
                }),
                "m" === u &&
                  s.length > 2 &&
                  (n.push([i].concat(s.splice(0, 2))),
                  (u = "l"),
                  (i = "m" === i ? "l" : "L")),
                "o" === u && 1 === s.length && n.push([i, s[0]]),
                "r" === u)
              )
                n.push([i].concat(s));
              else
                for (
                  ;
                  s.length >= e[u] &&
                  (n.push([i].concat(s.splice(0, e[u]))), e[u]);

                );
              return t;
            }),
            n
          );
        };
      var u = function (t, e) {
        if (t.length !== e.length) return !1;
        var n = !0;
        return (
          Object(r.e)(t, function (t, r) {
            if (t !== e[r]) return (n = !1), !1;
          }),
          n
        );
      };
      function c(t, e, n) {
        var r = null,
          i = n;
        return (
          e < i && ((i = e), (r = "add")),
          t < i && ((i = t), (r = "del")),
          { type: r, min: i }
        );
      }
      var h = function (t, e) {
        var n = (function (t, e) {
            var n,
              r,
              i = t.length,
              o = e.length,
              a = 0;
            if (0 === i || 0 === o) return null;
            for (var s = [], h = 0; h <= i; h++)
              (s[h] = []), (s[h][0] = { min: h });
            for (var l = 0; l <= o; l++) s[0][l] = { min: l };
            for (h = 1; h <= i; h++) {
              n = t[h - 1];
              for (l = 1; l <= o; l++) {
                (r = e[l - 1]), (a = u(n, r) ? 0 : 1);
                var d = s[h - 1][l].min + 1,
                  f = s[h][l - 1].min + 1,
                  p = s[h - 1][l - 1].min + a;
                s[h][l] = c(d, f, p);
              }
            }
            return s;
          })(t, e),
          r = t.length,
          i = e.length,
          o = [],
          a = 1,
          s = 1;
        if (n[r][i].min !== r) {
          for (var h = 1; h <= r; h++) {
            var l = n[h][h].min;
            s = h;
            for (var d = a; d <= i; d++)
              n[h][d].min < l && ((l = n[h][d].min), (s = d));
            (a = s),
              n[h][a].type && o.push({ index: h - 1, type: n[h][a].type });
          }
          for (h = o.length - 1; h >= 0; h--)
            (a = o[h].index),
              "add" === o[h].type
                ? t.splice(a, 0, [].concat(t[a]))
                : t.splice(a, 1);
        }
        var f = i - (r = t.length);
        if (r < i)
          for (h = 0; h < f; h++)
            "z" === t[r - 1][0] || "Z" === t[r - 1][0]
              ? t.splice(r - 2, 0, t[r - 2])
              : t.push(t[r - 1]),
              (r += 1);
        return t;
      };
      function l(t, e, n) {
        for (
          var r, i = [].concat(t), o = 1 / (n + 1), a = d(e)[0], s = 1;
          s <= n;
          s++
        )
          (o *= s),
            0 === (r = Math.floor(t.length * o))
              ? i.unshift([
                  a[0] * o + t[r][0] * (1 - o),
                  a[1] * o + t[r][1] * (1 - o),
                ])
              : i.splice(r, 0, [
                  a[0] * o + t[r][0] * (1 - o),
                  a[1] * o + t[r][1] * (1 - o),
                ]);
        return i;
      }
      function d(t) {
        var e = [];
        switch (t[0]) {
          case "M":
          case "L":
            e.push([t[1], t[2]]);
            break;
          case "A":
            e.push([t[6], t[7]]);
            break;
          case "Q":
            e.push([t[3], t[4]]), e.push([t[1], t[2]]);
            break;
          case "T":
            e.push([t[1], t[2]]);
            break;
          case "C":
            e.push([t[5], t[6]]), e.push([t[1], t[2]]), e.push([t[3], t[4]]);
            break;
          case "S":
            e.push([t[3], t[4]]), e.push([t[1], t[2]]);
            break;
          case "H":
          case "V":
            e.push([t[1], t[1]]);
        }
        return e;
      }
      var f = function (t, e) {
        if (t.length <= 1) return t;
        for (var n, r = 0; r < e.length; r++)
          if (t[r][0] !== e[r][0])
            switch (((n = d(t[r])), e[r][0])) {
              case "M":
                t[r] = ["M"].concat(n[0]);
                break;
              case "L":
                t[r] = ["L"].concat(n[0]);
                break;
              case "A":
                (t[r] = [].concat(e[r])),
                  (t[r][6] = n[0][0]),
                  (t[r][7] = n[0][1]);
                break;
              case "Q":
                if (n.length < 2) {
                  if (!(r > 0)) {
                    t[r] = e[r];
                    break;
                  }
                  n = l(n, t[r - 1], 1);
                }
                t[r] = ["Q"].concat(
                  n.reduce(function (t, e) {
                    return t.concat(e);
                  }, []),
                );
                break;
              case "T":
                t[r] = ["T"].concat(n[0]);
                break;
              case "C":
                if (n.length < 3) {
                  if (!(r > 0)) {
                    t[r] = e[r];
                    break;
                  }
                  n = l(n, t[r - 1], 2);
                }
                t[r] = ["C"].concat(
                  n.reduce(function (t, e) {
                    return t.concat(e);
                  }, []),
                );
                break;
              case "S":
                if (n.length < 2) {
                  if (!(r > 0)) {
                    t[r] = e[r];
                    break;
                  }
                  n = l(n, t[r - 1], 1);
                }
                t[r] = ["S"].concat(
                  n.reduce(function (t, e) {
                    return t.concat(e);
                  }, []),
                );
                break;
              default:
                t[r] = e[r];
            }
        return t;
      };
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return s;
      }),
        n.d(e, "b", function () {
          return l;
        }),
        n.d(e, "c", function () {
          return m;
        });
      var r = n(0),
        i = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi,
        o = /[^\s\,]+/gi;
      var a = function (t) {
        var e = t || [];
        return Object(r.m)(e)
          ? e
          : Object(r.x)(e)
          ? ((e = e.match(i)),
            Object(r.e)(e, function (t, n) {
              if ((t = t.match(o))[0].length > 1) {
                var i = t[0].charAt(0);
                t.splice(1, 0, t[0].substr(1)), (t[0] = i);
              }
              Object(r.e)(t, function (e, n) {
                isNaN(e) || (t[n] = +e);
              }),
                (e[n] = t);
            }),
            e)
          : void 0;
      };
      function s(t, e) {
        for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
          var o = [
            { x: +t[r - 2], y: +t[r - 1] },
            { x: +t[r], y: +t[r + 1] },
            { x: +t[r + 2], y: +t[r + 3] },
            { x: +t[r + 4], y: +t[r + 5] },
          ];
          e
            ? r
              ? i - 4 === r
                ? (o[3] = { x: +t[0], y: +t[1] })
                : i - 2 === r &&
                  ((o[2] = { x: +t[0], y: +t[1] }),
                  (o[3] = { x: +t[2], y: +t[3] }))
              : (o[0] = { x: +t[i - 2], y: +t[i - 1] })
            : i - 4 === r
            ? (o[3] = o[2])
            : r || (o[0] = { x: +t[r], y: +t[r + 1] }),
            n.push([
              "C",
              (-o[0].x + 6 * o[1].x + o[2].x) / 6,
              (-o[0].y + 6 * o[1].y + o[2].y) / 6,
              (o[1].x + 6 * o[2].x - o[3].x) / 6,
              (o[1].y + 6 * o[2].y - o[3].y) / 6,
              o[2].x,
              o[2].y,
            ]);
        }
        return n;
      }
      var u = "\t\n\v\f\r   ᠎             　\u2028\u2029",
        c = new RegExp(
          "([a-z])[" +
            u +
            ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" +
            u +
            "]*,?[" +
            u +
            "]*)+)",
          "ig",
        ),
        h = new RegExp(
          "(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + u + "]*,?[" + u + "]*",
          "ig",
        );
      function l(t) {
        if (!t) return null;
        if (Object(r.m)(t)) return t;
        var e = {
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
            z: 0,
          },
          n = [];
        return (
          String(t).replace(c, function (t, r, i) {
            var o = [],
              a = r.toLowerCase();
            if (
              (i.replace(h, function (t, e) {
                e && o.push(+e);
              }),
              "m" === a &&
                o.length > 2 &&
                (n.push([r].concat(o.splice(0, 2))),
                (a = "l"),
                (r = "m" === r ? "l" : "L")),
              "o" === a && 1 === o.length && n.push([r, o[0]]),
              "r" === a)
            )
              n.push([r].concat(o));
            else
              for (
                ;
                o.length >= e[a] &&
                (n.push([r].concat(o.splice(0, e[a]))), e[a]);

              );
            return "";
          }),
          n
        );
      }
      function d(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
      }
      function f(t, e) {
        return d(t) * d(e) ? (t[0] * e[0] + t[1] * e[1]) / (d(t) * d(e)) : 1;
      }
      function p(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(f(t, e));
      }
      function g(t, e) {
        return t[0] === e[0] && t[1] === e[1];
      }
      function y(t, e) {
        var n = e[1],
          i = e[2],
          o = Object(r.D)(Object(r.H)(e[3]), 2 * Math.PI),
          a = e[4],
          s = e[5],
          u = t[0],
          c = t[1],
          h = e[6],
          l = e[7],
          d = (Math.cos(o) * (u - h)) / 2 + (Math.sin(o) * (c - l)) / 2,
          y = (-1 * Math.sin(o) * (u - h)) / 2 + (Math.cos(o) * (c - l)) / 2,
          v = (d * d) / (n * n) + (y * y) / (i * i);
        v > 1 && ((n *= Math.sqrt(v)), (i *= Math.sqrt(v)));
        var m = n * n * (y * y) + i * i * (d * d),
          b = m ? Math.sqrt((n * n * (i * i) - m) / m) : 1;
        a === s && (b *= -1), isNaN(b) && (b = 0);
        var x = i ? (b * n * y) / i : 0,
          w = n ? (b * -i * d) / n : 0,
          O = (u + h) / 2 + Math.cos(o) * x - Math.sin(o) * w,
          M = (c + l) / 2 + Math.sin(o) * x + Math.cos(o) * w,
          S = [(d - x) / n, (y - w) / i],
          C = [(-1 * d - x) / n, (-1 * y - w) / i],
          j = p([1, 0], S),
          k = p(S, C);
        return (
          f(S, C) <= -1 && (k = Math.PI),
          f(S, C) >= 1 && (k = 0),
          0 === s && k > 0 && (k -= 2 * Math.PI),
          1 === s && k < 0 && (k += 2 * Math.PI),
          {
            cx: O,
            cy: M,
            rx: g(t, [h, l]) ? 0 : n,
            ry: g(t, [h, l]) ? 0 : i,
            startAngle: j,
            endAngle: j + k,
            xRotation: o,
            arcFlag: a,
            sweepFlag: s,
          }
        );
      }
      function v(t, e) {
        return [e[0] + (e[0] - t[0]), e[1] + (e[1] - t[1])];
      }
      function m(t) {
        for (
          var e = [],
            n = null,
            r = null,
            i = null,
            o = 0,
            s = (t = a(t)).length,
            u = 0;
          u < s;
          u++
        ) {
          var c = t[u];
          r = t[u + 1];
          var h = c[0],
            l = {
              command: h,
              prePoint: n,
              params: c,
              startTangent: null,
              endTangent: null,
            };
          switch (h) {
            case "M":
              (i = [c[1], c[2]]), (o = u);
              break;
            case "A":
              var d = y(n, c);
              l.arcParams = d;
          }
          if ("Z" === h) (n = i), (r = t[o + 1]);
          else {
            var f = c.length;
            n = [c[f - 2], c[f - 1]];
          }
          r && "Z" === r[0] && ((r = t[o]), e[o] && (e[o].prePoint = n)),
            (l.currentPoint = n),
            e[o] && g(n, e[o].currentPoint) && (e[o].prePoint = l.prePoint);
          var p = r ? [r[r.length - 2], r[r.length - 1]] : null;
          l.nextPoint = p;
          var m = l.prePoint;
          if (["L", "H", "V"].includes(h))
            (l.startTangent = [m[0] - n[0], m[1] - n[1]]),
              (l.endTangent = [n[0] - m[0], n[1] - m[1]]);
          else if ("Q" === h) {
            var b = [c[1], c[2]];
            (l.startTangent = [m[0] - b[0], m[1] - b[1]]),
              (l.endTangent = [n[0] - b[0], n[1] - b[1]]);
          } else if ("T" === h) {
            b = v((O = e[u - 1]).currentPoint, m);
            "Q" === O.command
              ? ((l.command = "Q"),
                (l.startTangent = [m[0] - b[0], m[1] - b[1]]),
                (l.endTangent = [n[0] - b[0], n[1] - b[1]]))
              : ((l.command = "TL"),
                (l.startTangent = [m[0] - n[0], m[1] - n[1]]),
                (l.endTangent = [n[0] - m[0], n[1] - m[1]]));
          } else if ("C" === h) {
            var x = [c[1], c[2]],
              w = [c[3], c[4]];
            (l.startTangent = [m[0] - x[0], m[1] - x[1]]),
              (l.endTangent = [n[0] - w[0], n[1] - w[1]]);
          } else if ("S" === h) {
            var O;
            (x = v((O = e[u - 1]).currentPoint, m)), (w = [c[1], c[2]]);
            "C" === O.command
              ? ((l.command = "C"),
                (l.startTangent = [m[0] - x[0], m[1] - x[1]]),
                (l.endTangent = [n[0] - w[0], n[1] - w[1]]))
              : ((l.command = "SQ"),
                (l.startTangent = [m[0] - w[0], m[1] - w[1]]),
                (l.endTangent = [n[0] - w[0], n[1] - w[1]]));
          } else if ("A" === h) {
            var M = 0.001,
              S = l.arcParams || {},
              C = S.cx,
              j = void 0 === C ? 0 : C,
              k = S.cy,
              E = void 0 === k ? 0 : k,
              N = S.rx,
              T = void 0 === N ? 0 : N,
              P = S.ry,
              I = void 0 === P ? 0 : P,
              B = S.sweepFlag,
              A = void 0 === B ? 0 : B,
              L = S.startAngle,
              D = void 0 === L ? 0 : L,
              _ = S.endAngle,
              R = void 0 === _ ? 0 : _;
            0 === A && (M *= -1);
            var Y = T * Math.cos(D - M) + j,
              F = I * Math.sin(D - M) + E;
            l.startTangent = [Y - i[0], F - i[1]];
            var z = T * Math.cos(D + R + M) + j,
              X = I * Math.sin(D + R - M) + E;
            l.endTangent = [m[0] - z, m[1] - X];
          }
          e.push(l);
        }
        return e;
      }
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return o;
      }),
        n.d(e, "c", function () {
          return a;
        }),
        n.d(e, "a", function () {
          return s;
        });
      var r = n(3),
        i = n(12);
      function o(t, e, n) {
        var i = 1;
        return (
          Object(r.h)(t) && (i = t.split("\n").length),
          i > 1
            ? e * i +
              (function (t, e) {
                return e ? e - t : 0.14 * t;
              })(e, n) *
                (i - 1)
            : e
        );
      }
      function a(t, e) {
        var n = Object(i.a)(),
          o = 0;
        if (Object(r.e)(t) || "" === t) return o;
        if ((n.save(), (n.font = e), Object(r.h)(t) && t.includes("\n"))) {
          var a = t.split("\n");
          Object(r.a)(a, function (t) {
            var e = n.measureText(t).width;
            o < e && (o = e);
          });
        } else o = n.measureText(t).width;
        return n.restore(), o;
      }
      function s(t) {
        var e = t.fontSize,
          n = t.fontFamily,
          r = t.fontWeight;
        return [t.fontStyle, t.fontVariant, r, e + "px", n].join(" ").trim();
      }
    },
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "create", function () {
          return i;
        }),
        n.d(e, "clone", function () {
          return o;
        }),
        n.d(e, "fromValues", function () {
          return a;
        }),
        n.d(e, "copy", function () {
          return s;
        }),
        n.d(e, "set", function () {
          return u;
        }),
        n.d(e, "add", function () {
          return c;
        }),
        n.d(e, "subtract", function () {
          return h;
        }),
        n.d(e, "multiply", function () {
          return l;
        }),
        n.d(e, "divide", function () {
          return d;
        }),
        n.d(e, "ceil", function () {
          return f;
        }),
        n.d(e, "floor", function () {
          return p;
        }),
        n.d(e, "min", function () {
          return g;
        }),
        n.d(e, "max", function () {
          return y;
        }),
        n.d(e, "round", function () {
          return v;
        }),
        n.d(e, "scale", function () {
          return m;
        }),
        n.d(e, "scaleAndAdd", function () {
          return b;
        }),
        n.d(e, "distance", function () {
          return x;
        }),
        n.d(e, "squaredDistance", function () {
          return w;
        }),
        n.d(e, "length", function () {
          return O;
        }),
        n.d(e, "squaredLength", function () {
          return M;
        }),
        n.d(e, "negate", function () {
          return S;
        }),
        n.d(e, "inverse", function () {
          return C;
        }),
        n.d(e, "normalize", function () {
          return j;
        }),
        n.d(e, "dot", function () {
          return k;
        }),
        n.d(e, "cross", function () {
          return E;
        }),
        n.d(e, "lerp", function () {
          return N;
        }),
        n.d(e, "random", function () {
          return T;
        }),
        n.d(e, "transformMat2", function () {
          return P;
        }),
        n.d(e, "transformMat2d", function () {
          return I;
        }),
        n.d(e, "transformMat3", function () {
          return B;
        }),
        n.d(e, "transformMat4", function () {
          return A;
        }),
        n.d(e, "rotate", function () {
          return L;
        }),
        n.d(e, "angle", function () {
          return D;
        }),
        n.d(e, "zero", function () {
          return _;
        }),
        n.d(e, "str", function () {
          return R;
        }),
        n.d(e, "exactEquals", function () {
          return Y;
        }),
        n.d(e, "equals", function () {
          return F;
        }),
        n.d(e, "len", function () {
          return X;
        }),
        n.d(e, "sub", function () {
          return W;
        }),
        n.d(e, "mul", function () {
          return G;
        }),
        n.d(e, "div", function () {
          return q;
        }),
        n.d(e, "dist", function () {
          return H;
        }),
        n.d(e, "sqrDist", function () {
          return V;
        }),
        n.d(e, "sqrLen", function () {
          return U;
        }),
        n.d(e, "forEach", function () {
          return Z;
        });
      var r = n(4);
      function i() {
        var t = new r.a(2);
        return r.a != Float32Array && ((t[0] = 0), (t[1] = 0)), t;
      }
      function o(t) {
        var e = new r.a(2);
        return (e[0] = t[0]), (e[1] = t[1]), e;
      }
      function a(t, e) {
        var n = new r.a(2);
        return (n[0] = t), (n[1] = e), n;
      }
      function s(t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), t;
      }
      function u(t, e, n) {
        return (t[0] = e), (t[1] = n), t;
      }
      function c(t, e, n) {
        return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t;
      }
      function h(t, e, n) {
        return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t;
      }
      function l(t, e, n) {
        return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), t;
      }
      function d(t, e, n) {
        return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), t;
      }
      function f(t, e) {
        return (t[0] = Math.ceil(e[0])), (t[1] = Math.ceil(e[1])), t;
      }
      function p(t, e) {
        return (t[0] = Math.floor(e[0])), (t[1] = Math.floor(e[1])), t;
      }
      function g(t, e, n) {
        return (t[0] = Math.min(e[0], n[0])), (t[1] = Math.min(e[1], n[1])), t;
      }
      function y(t, e, n) {
        return (t[0] = Math.max(e[0], n[0])), (t[1] = Math.max(e[1], n[1])), t;
      }
      function v(t, e) {
        return (t[0] = Math.round(e[0])), (t[1] = Math.round(e[1])), t;
      }
      function m(t, e, n) {
        return (t[0] = e[0] * n), (t[1] = e[1] * n), t;
      }
      function b(t, e, n, r) {
        return (t[0] = e[0] + n[0] * r), (t[1] = e[1] + n[1] * r), t;
      }
      function x(t, e) {
        var n = e[0] - t[0],
          r = e[1] - t[1];
        return Math.hypot(n, r);
      }
      function w(t, e) {
        var n = e[0] - t[0],
          r = e[1] - t[1];
        return n * n + r * r;
      }
      function O(t) {
        var e = t[0],
          n = t[1];
        return Math.hypot(e, n);
      }
      function M(t) {
        var e = t[0],
          n = t[1];
        return e * e + n * n;
      }
      function S(t, e) {
        return (t[0] = -e[0]), (t[1] = -e[1]), t;
      }
      function C(t, e) {
        return (t[0] = 1 / e[0]), (t[1] = 1 / e[1]), t;
      }
      function j(t, e) {
        var n = e[0],
          r = e[1],
          i = n * n + r * r;
        return (
          i > 0 && (i = 1 / Math.sqrt(i)),
          (t[0] = e[0] * i),
          (t[1] = e[1] * i),
          t
        );
      }
      function k(t, e) {
        return t[0] * e[0] + t[1] * e[1];
      }
      function E(t, e, n) {
        var r = e[0] * n[1] - e[1] * n[0];
        return (t[0] = t[1] = 0), (t[2] = r), t;
      }
      function N(t, e, n, r) {
        var i = e[0],
          o = e[1];
        return (t[0] = i + r * (n[0] - i)), (t[1] = o + r * (n[1] - o)), t;
      }
      function T(t, e) {
        e = e || 1;
        var n = 2 * r.c() * Math.PI;
        return (t[0] = Math.cos(n) * e), (t[1] = Math.sin(n) * e), t;
      }
      function P(t, e, n) {
        var r = e[0],
          i = e[1];
        return (t[0] = n[0] * r + n[2] * i), (t[1] = n[1] * r + n[3] * i), t;
      }
      function I(t, e, n) {
        var r = e[0],
          i = e[1];
        return (
          (t[0] = n[0] * r + n[2] * i + n[4]),
          (t[1] = n[1] * r + n[3] * i + n[5]),
          t
        );
      }
      function B(t, e, n) {
        var r = e[0],
          i = e[1];
        return (
          (t[0] = n[0] * r + n[3] * i + n[6]),
          (t[1] = n[1] * r + n[4] * i + n[7]),
          t
        );
      }
      function A(t, e, n) {
        var r = e[0],
          i = e[1];
        return (
          (t[0] = n[0] * r + n[4] * i + n[12]),
          (t[1] = n[1] * r + n[5] * i + n[13]),
          t
        );
      }
      function L(t, e, n, r) {
        var i = e[0] - n[0],
          o = e[1] - n[1],
          a = Math.sin(r),
          s = Math.cos(r);
        return (t[0] = i * s - o * a + n[0]), (t[1] = i * a + o * s + n[1]), t;
      }
      function D(t, e) {
        var n = t[0],
          r = t[1],
          i = e[0],
          o = e[1],
          a = Math.sqrt(n * n + r * r) * Math.sqrt(i * i + o * o),
          s = a && (n * i + r * o) / a;
        return Math.acos(Math.min(Math.max(s, -1), 1));
      }
      function _(t) {
        return (t[0] = 0), (t[1] = 0), t;
      }
      function R(t) {
        return "vec2(" + t[0] + ", " + t[1] + ")";
      }
      function Y(t, e) {
        return t[0] === e[0] && t[1] === e[1];
      }
      function F(t, e) {
        var n = t[0],
          i = t[1],
          o = e[0],
          a = e[1];
        return (
          Math.abs(n - o) <= r.b * Math.max(1, Math.abs(n), Math.abs(o)) &&
          Math.abs(i - a) <= r.b * Math.max(1, Math.abs(i), Math.abs(a))
        );
      }
      var z,
        X = O,
        W = h,
        G = l,
        q = d,
        H = x,
        V = w,
        U = M,
        Z =
          ((z = i()),
          function (t, e, n, r, i, o) {
            var a, s;
            for (
              e || (e = 2),
                n || (n = 0),
                s = r ? Math.min(r * e + n, t.length) : t.length,
                a = n;
              a < s;
              a += e
            )
              (z[0] = t[a]),
                (z[1] = t[a + 1]),
                i(z, z, o),
                (t[a] = z[0]),
                (t[a + 1] = z[1]);
            return t;
          });
    },
    function (t, e, n) {
      "use strict";
      var r = (function () {
        function t(t, e) {
          (this.bubbles = !0),
            (this.target = null),
            (this.currentTarget = null),
            (this.delegateTarget = null),
            (this.delegateObject = null),
            (this.defaultPrevented = !1),
            (this.propagationStopped = !1),
            (this.shape = null),
            (this.fromShape = null),
            (this.toShape = null),
            (this.propagationPath = []),
            (this.type = t),
            (this.name = t),
            (this.originalEvent = e),
            (this.timeStamp = e.timeStamp);
        }
        return (
          (t.prototype.preventDefault = function () {
            (this.defaultPrevented = !0),
              this.originalEvent.preventDefault &&
                this.originalEvent.preventDefault();
          }),
          (t.prototype.stopPropagation = function () {
            this.propagationStopped = !0;
          }),
          (t.prototype.toString = function () {
            return "[Event (type=" + this.type + ")]";
          }),
          (t.prototype.save = function () {}),
          (t.prototype.restore = function () {}),
          t
        );
      })();
      e.a = r;
    },
    function (t, e, n) {
      "use strict";
      var r = n(1),
        i = n(14),
        o = n(3),
        a = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            n.destroyed = !1;
            var r = n.getDefaultCfg();
            return (n.cfg = Object(o.i)(r, e)), n;
          }
          return (
            Object(r.c)(e, t),
            (e.prototype.getDefaultCfg = function () {
              return {};
            }),
            (e.prototype.get = function (t) {
              return this.cfg[t];
            }),
            (e.prototype.set = function (t, e) {
              this.cfg[t] = e;
            }),
            (e.prototype.destroy = function () {
              (this.cfg = { destroyed: !0 }), this.off(), (this.destroyed = !0);
            }),
            e
          );
        })(i.a);
      e.a = a;
    },
    function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      });
      var r = null;
      function i() {
        if (!r) {
          var t = document.createElement("canvas");
          (t.width = 1), (t.height = 1), (r = t.getContext("2d"));
        }
        return r;
      }
    },
    function (t, e, n) {
      "use strict";
      n(6), n(17), n(18);
      var r = n(10);
      n.d(e, "Event", function () {
        return r.a;
      });
      n(11), n(21), n(19), n(20), n(22);
      var i = n(8);
      n.d(e, "assembleFont", function () {
        return i.a;
      });
      n(3), n(5), n(12);
    },
    function (t, e, n) {
      "use strict";
      var r = (function () {
        function t() {
          this._events = {};
        }
        return (
          (t.prototype.on = function (t, e, n) {
            return (
              this._events[t] || (this._events[t] = []),
              this._events[t].push({ callback: e, once: !!n }),
              this
            );
          }),
          (t.prototype.once = function (t, e) {
            return this.on(t, e, !0), this;
          }),
          (t.prototype.emit = function (t) {
            for (var e = this, n = [], r = 1; r < arguments.length; r++)
              n[r - 1] = arguments[r];
            var i = this._events[t] || [],
              o = this._events["*"] || [],
              a = function (r) {
                for (var i = r.length, o = 0; o < i; o++)
                  if (r[o]) {
                    var a = r[o],
                      s = a.callback;
                    a.once &&
                      (r.splice(o, 1),
                      0 === r.length && delete e._events[t],
                      i--,
                      o--),
                      s.apply(e, n);
                  }
              };
            a(i), a(o);
          }),
          (t.prototype.off = function (t, e) {
            if (t)
              if (e) {
                for (
                  var n = this._events[t] || [], r = n.length, i = 0;
                  i < r;
                  i++
                )
                  n[i].callback === e && (n.splice(i, 1), r--, i--);
                0 === n.length && delete this._events[t];
              } else delete this._events[t];
            else this._events = {};
            return this;
          }),
          (t.prototype.getEvents = function () {
            return this._events;
          }),
          t
        );
      })();
      e.a = r;
    },
    function (t, e, n) {
      "use strict";
      var r = n(1),
        i = n(0),
        o = n(16),
        a = n(3),
        s = {};
      var u = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          Object(r.c)(e, t),
          (e.prototype.isCanvas = function () {
            return !1;
          }),
          (e.prototype.getBBox = function () {
            var t = 1 / 0,
              e = -1 / 0,
              n = 1 / 0,
              r = -1 / 0,
              o = [],
              s = [],
              u = this.getChildren().filter(function (t) {
                return (
                  t.get("visible") &&
                  (!t.isGroup() || (t.isGroup() && t.getChildren().length > 0))
                );
              });
            return (
              u.length > 0
                ? (Object(a.a)(u, function (t) {
                    var e = t.getBBox();
                    o.push(e.minX, e.maxX), s.push(e.minY, e.maxY);
                  }),
                  (t = Object(i.B)(o)),
                  (e = Object(i.A)(o)),
                  (n = Object(i.B)(s)),
                  (r = Object(i.A)(s)))
                : ((t = 0), (e = 0), (n = 0), (r = 0)),
              {
                x: t,
                y: n,
                minX: t,
                minY: n,
                maxX: e,
                maxY: r,
                width: e - t,
                height: r - n,
              }
            );
          }),
          (e.prototype.getCanvasBBox = function () {
            var t = 1 / 0,
              e = -1 / 0,
              n = 1 / 0,
              r = -1 / 0,
              o = [],
              s = [],
              u = this.getChildren().filter(function (t) {
                return (
                  t.get("visible") &&
                  (!t.isGroup() || (t.isGroup() && t.getChildren().length > 0))
                );
              });
            return (
              u.length > 0
                ? (Object(a.a)(u, function (t) {
                    var e = t.getCanvasBBox();
                    o.push(e.minX, e.maxX), s.push(e.minY, e.maxY);
                  }),
                  (t = Object(i.B)(o)),
                  (e = Object(i.A)(o)),
                  (n = Object(i.B)(s)),
                  (r = Object(i.A)(s)))
                : ((t = 0), (e = 0), (n = 0), (r = 0)),
              {
                x: t,
                y: n,
                minX: t,
                minY: n,
                maxX: e,
                maxY: r,
                width: e - t,
                height: r - n,
              }
            );
          }),
          (e.prototype.getDefaultCfg = function () {
            var e = t.prototype.getDefaultCfg.call(this);
            return (e.children = []), e;
          }),
          (e.prototype.onAttrChange = function (e, n, r) {
            if (
              (t.prototype.onAttrChange.call(this, e, n, r), "matrix" === e)
            ) {
              var i = this.getTotalMatrix();
              this._applyChildrenMarix(i);
            }
          }),
          (e.prototype.applyMatrix = function (e) {
            var n = this.getTotalMatrix();
            t.prototype.applyMatrix.call(this, e);
            var r = this.getTotalMatrix();
            r !== n && this._applyChildrenMarix(r);
          }),
          (e.prototype._applyChildrenMarix = function (t) {
            var e = this.getChildren();
            Object(a.a)(e, function (e) {
              e.applyMatrix(t);
            });
          }),
          (e.prototype.addShape = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n = t[0],
              r = t[1];
            Object(a.f)(n) ? (r = n) : (r.type = n);
            var i = s[r.type];
            i || ((i = Object(a.k)(r.type)), (s[r.type] = i));
            var o = this.getShapeBase(),
              u = new o[i](r);
            return this.add(u), u;
          }),
          (e.prototype.addGroup = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n,
              r = t[0],
              i = t[1];
            if (Object(a.d)(r)) n = new r(i || { parent: this });
            else {
              var o = r || {},
                s = this.getGroupBase();
              n = new s(o);
            }
            return this.add(n), n;
          }),
          (e.prototype.getCanvas = function () {
            return this.isCanvas() ? this : this.get("canvas");
          }),
          (e.prototype.getShape = function (t, e, n) {
            if (!Object(a.b)(this)) return null;
            var r,
              i = this.getChildren();
            if (this.isCanvas()) r = this._findShape(i, t, e, n);
            else {
              var o = [t, e, 1];
              (o = this.invertFromMatrix(o)),
                this.isClipped(o[0], o[1]) ||
                  (r = this._findShape(i, o[0], o[1], n));
            }
            return r;
          }),
          (e.prototype._findShape = function (t, e, n, r) {
            for (var i = null, o = t.length - 1; o >= 0; o--) {
              var s = t[o];
              if (
                (Object(a.b)(s) &&
                  (s.isGroup()
                    ? (i = s.getShape(e, n, r))
                    : s.isHit(e, n) && (i = s)),
                i)
              )
                break;
            }
            return i;
          }),
          (e.prototype.add = function (t) {
            var e = this.getCanvas(),
              n = this.getChildren(),
              r = this.get("timeline"),
              i = t.getParent();
            i &&
              (function (t, e, n) {
                void 0 === n && (n = !0),
                  n
                    ? e.destroy()
                    : (e.set("parent", null), e.set("canvas", null)),
                  Object(a.j)(t.getChildren(), e);
              })(i, t, !1),
              t.set("parent", this),
              e &&
                (function t(e, n) {
                  if ((e.set("canvas", n), e.isGroup())) {
                    var r = e.get("children");
                    r.length &&
                      r.forEach(function (e) {
                        t(e, n);
                      });
                  }
                })(t, e),
              r &&
                (function t(e, n) {
                  if ((e.set("timeline", n), e.isGroup())) {
                    var r = e.get("children");
                    r.length &&
                      r.forEach(function (e) {
                        t(e, n);
                      });
                  }
                })(t, r),
              n.push(t),
              t.onCanvasChange("add"),
              this._applyElementMatrix(t);
          }),
          (e.prototype._applyElementMatrix = function (t) {
            var e = this.getTotalMatrix();
            e && t.applyMatrix(e);
          }),
          (e.prototype.getChildren = function () {
            return this.get("children");
          }),
          (e.prototype.sort = function () {
            var t,
              e = this.getChildren();
            Object(a.a)(e, function (t, e) {
              return (t._INDEX = e), t;
            }),
              e.sort(
                ((t = function (t, e) {
                  return t.get("zIndex") - e.get("zIndex");
                }),
                function (e, n) {
                  var r = t(e, n);
                  return 0 === r ? e._INDEX - n._INDEX : r;
                }),
              ),
              this.onCanvasChange("sort");
          }),
          (e.prototype.clear = function () {
            if ((this.set("clearing", !0), !this.destroyed)) {
              for (var t = this.getChildren(), e = t.length - 1; e >= 0; e--)
                t[e].destroy();
              this.set("children", []),
                this.onCanvasChange("clear"),
                this.set("clearing", !1);
            }
          }),
          (e.prototype.destroy = function () {
            this.get("destroyed") ||
              (this.clear(), t.prototype.destroy.call(this));
          }),
          (e.prototype.getFirst = function () {
            return this.getChildByIndex(0);
          }),
          (e.prototype.getLast = function () {
            var t = this.getChildren();
            return this.getChildByIndex(t.length - 1);
          }),
          (e.prototype.getChildByIndex = function (t) {
            return this.getChildren()[t];
          }),
          (e.prototype.getCount = function () {
            return this.getChildren().length;
          }),
          (e.prototype.contain = function (t) {
            return this.getChildren().indexOf(t) > -1;
          }),
          (e.prototype.removeChild = function (t, e) {
            void 0 === e && (e = !0), this.contain(t) && t.remove(e);
          }),
          (e.prototype.findAll = function (t) {
            var e = [],
              n = this.getChildren();
            return (
              Object(a.a)(n, function (n) {
                t(n) && e.push(n), n.isGroup() && (e = e.concat(n.findAll(t)));
              }),
              e
            );
          }),
          (e.prototype.find = function (t) {
            var e = null,
              n = this.getChildren();
            return (
              Object(a.a)(n, function (n) {
                if ((t(n) ? (e = n) : n.isGroup() && (e = n.find(t)), e))
                  return !1;
              }),
              e
            );
          }),
          (e.prototype.findById = function (t) {
            return this.find(function (e) {
              return e.get("id") === t;
            });
          }),
          (e.prototype.findByClassName = function (t) {
            return this.find(function (e) {
              return e.get("className") === t;
            });
          }),
          (e.prototype.findAllByName = function (t) {
            return this.findAll(function (e) {
              return e.get("name") === t;
            });
          }),
          e
        );
      })(o.a);
      e.a = u;
    },
    function (t, e, n) {
      "use strict";
      var r = n(1),
        i = n(0),
        o = n(2),
        a = n(3),
        s = n(5),
        u = n(11),
        c = o.a.transform,
        h = ["zIndex", "capture", "visible", "type"],
        l = ["repeat"];
      function d(t, e) {
        var n = {},
          r = e.attrs;
        for (var i in t) n[i] = r[i];
        return n;
      }
      function f(t, e) {
        var n = {},
          r = e.attr();
        return (
          Object(i.e)(t, function (t, e) {
            -1 !== l.indexOf(e) || Object(i.q)(r[e], t) || (n[e] = t);
          }),
          n
        );
      }
      function p(t, e) {
        if (e.onFrame) return t;
        var n = e.startTime,
          r = e.delay,
          o = e.duration,
          a = Object.prototype.hasOwnProperty;
        return (
          Object(i.e)(t, function (t) {
            n + r < t.startTime + t.delay + t.duration &&
              o > t.delay &&
              Object(i.e)(e.toAttrs, function (e, n) {
                a.call(t.toAttrs, n) &&
                  (delete t.toAttrs[n], delete t.fromAttrs[n]);
              });
          }),
          t
        );
      }
      var g = (function (t) {
        function e(e) {
          var n = t.call(this, e) || this;
          n.attrs = {};
          var r = n.getDefaultAttrs();
          return (
            Object(i.C)(r, e.attrs),
            (n.attrs = r),
            n.initAttrs(r),
            n.initAnimate(),
            n
          );
        }
        return (
          Object(r.c)(e, t),
          (e.prototype.getDefaultCfg = function () {
            return { visible: !0, capture: !0, zIndex: 0 };
          }),
          (e.prototype.getDefaultAttrs = function () {
            return { matrix: this.getDefaultMatrix(), opacity: 1 };
          }),
          (e.prototype.onCanvasChange = function (t) {}),
          (e.prototype.initAttrs = function (t) {}),
          (e.prototype.initAnimate = function () {
            this.set("animable", !0), this.set("animating", !1);
          }),
          (e.prototype.isGroup = function () {
            return !1;
          }),
          (e.prototype.getParent = function () {
            return this.get("parent");
          }),
          (e.prototype.getCanvas = function () {
            return this.get("canvas");
          }),
          (e.prototype.attr = function () {
            for (var t, e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            var r = e[0],
              o = e[1];
            if (!r) return this.attrs;
            if (Object(i.v)(r)) {
              for (var a in r) this.setAttr(a, r[a]);
              return this.afterAttrsChange(r), this;
            }
            return 2 === e.length
              ? (this.setAttr(r, o),
                this.afterAttrsChange((((t = {})[r] = o), t)),
                this)
              : this.attrs[r];
          }),
          (e.prototype.isClipped = function (t, e) {
            var n = this.getClip();
            return n && !n.isHit(t, e);
          }),
          (e.prototype.setAttr = function (t, e) {
            var n = this.attrs[t];
            n !== e && ((this.attrs[t] = e), this.onAttrChange(t, e, n));
          }),
          (e.prototype.onAttrChange = function (t, e, n) {
            "matrix" === t && this.set("totalMatrix", null);
          }),
          (e.prototype.afterAttrsChange = function (t) {
            if (this.cfg.isClipShape) {
              var e = this.cfg.applyTo;
              e && e.onCanvasChange("clip");
            } else this.onCanvasChange("attr");
          }),
          (e.prototype.show = function () {
            return this.set("visible", !0), this.onCanvasChange("show"), this;
          }),
          (e.prototype.hide = function () {
            return this.set("visible", !1), this.onCanvasChange("hide"), this;
          }),
          (e.prototype.setZIndex = function (t) {
            this.set("zIndex", t);
            var e = this.getParent();
            return e && e.sort(), this;
          }),
          (e.prototype.toFront = function () {
            var t = this.getParent();
            if (t) {
              var e = t.getChildren(),
                n = (this.get("el"), e.indexOf(this));
              e.splice(n, 1), e.push(this), this.onCanvasChange("zIndex");
            }
          }),
          (e.prototype.toBack = function () {
            var t = this.getParent();
            if (t) {
              var e = t.getChildren(),
                n = (this.get("el"), e.indexOf(this));
              e.splice(n, 1), e.unshift(this), this.onCanvasChange("zIndex");
            }
          }),
          (e.prototype.remove = function (t) {
            void 0 === t && (t = !0);
            var e = this.getParent();
            e
              ? (Object(a.j)(e.getChildren(), this),
                e.get("clearing") || this.onCanvasChange("remove"))
              : this.onCanvasChange("remove"),
              t && this.destroy();
          }),
          (e.prototype.resetMatrix = function () {
            this.attr("matrix", this.getDefaultMatrix()),
              this.onCanvasChange("matrix");
          }),
          (e.prototype.getMatrix = function () {
            return this.attr("matrix");
          }),
          (e.prototype.setMatrix = function (t) {
            this.attr("matrix", t), this.onCanvasChange("matrix");
          }),
          (e.prototype.getTotalMatrix = function () {
            var t = this.cfg.totalMatrix;
            if (!t) {
              var e = this.attr("matrix"),
                n = this.cfg.parentMatrix;
              (t = n && e ? Object(s.b)(n, e) : e || n),
                this.set("totalMatrix", t);
            }
            return t;
          }),
          (e.prototype.applyMatrix = function (t) {
            var e = this.attr("matrix"),
              n = null;
            (n = t && e ? Object(s.b)(t, e) : e || t),
              this.set("totalMatrix", n),
              this.set("parentMatrix", t);
          }),
          (e.prototype.getDefaultMatrix = function () {
            return null;
          }),
          (e.prototype.applyToMatrix = function (t) {
            var e = this.attr("matrix");
            return e ? Object(s.c)(e, t) : t;
          }),
          (e.prototype.invertFromMatrix = function (t) {
            var e = this.attr("matrix");
            if (e) {
              var n = Object(s.a)(e);
              if (n) return Object(s.c)(n, t);
            }
            return t;
          }),
          (e.prototype.setClip = function (t) {
            var e = this.getCanvas(),
              n = null;
            if (t) {
              var r = this.getShapeBase()[Object(i.J)(t.type)];
              r &&
                (n = new r({
                  type: t.type,
                  isClipShape: !0,
                  applyTo: this,
                  attrs: t.attrs,
                  canvas: e,
                }));
            }
            return this.set("clipShape", n), this.onCanvasChange("clip"), n;
          }),
          (e.prototype.getClip = function () {
            var t = this.cfg.clipShape;
            return t || null;
          }),
          (e.prototype.clone = function () {
            var t = this,
              e = this.attrs,
              n = {};
            Object(i.e)(e, function (t, r) {
              Object(i.m)(e[r])
                ? (n[r] = (function (t) {
                    for (var e = [], n = 0; n < t.length; n++)
                      Object(i.m)(t[n])
                        ? e.push([].concat(t[n]))
                        : e.push(t[n]);
                    return e;
                  })(e[r]))
                : (n[r] = e[r]);
            });
            var r = new (0, this.constructor)({ attrs: n });
            return (
              Object(i.e)(h, function (e) {
                r.set(e, t.get(e));
              }),
              r
            );
          }),
          (e.prototype.destroy = function () {
            this.destroyed ||
              ((this.attrs = {}), t.prototype.destroy.call(this));
          }),
          (e.prototype.isAnimatePaused = function () {
            return this.get("_pause").isPaused;
          }),
          (e.prototype.animate = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            if (this.get("timeline") || this.get("canvas")) {
              this.set("animating", !0);
              var n = this.get("timeline");
              n ||
                ((n = this.get("canvas").get("timeline")),
                this.set("timeline", n));
              var r = this.get("animations") || [];
              n.timer || n.initTimer();
              var o,
                a,
                s,
                u,
                c,
                h = t[0],
                l = t[1],
                g = t[2],
                y = void 0 === g ? "easeLinear" : g,
                v = t[3],
                m = void 0 === v ? i.E : v,
                b = t[4],
                x = void 0 === b ? 0 : b;
              Object(i.r)(h)
                ? ((o = h), (h = {}))
                : Object(i.v)(h) &&
                  h.onFrame &&
                  ((o = h.onFrame), (a = h.repeat)),
                Object(i.v)(l)
                  ? ((l = (c = l).duration),
                    (y = c.easing || "easeLinear"),
                    (x = c.delay || 0),
                    (a = c.repeat || a || !1),
                    (m = c.callback || i.E),
                    (s = c.pauseCallback || i.E),
                    (u = c.resumeCallback || i.E))
                  : (Object(i.t)(m) && ((x = m), (m = null)),
                    Object(i.r)(y)
                      ? ((m = y), (y = "easeLinear"))
                      : (y = y || "easeLinear"));
              var w = f(h, this),
                O = {
                  fromAttrs: d(w, this),
                  toAttrs: w,
                  duration: l,
                  easing: y,
                  repeat: a,
                  callback: m,
                  pauseCallback: s,
                  resumeCallback: u,
                  delay: x,
                  startTime: n.getTime(),
                  id: Object(i.I)(),
                  onFrame: o,
                  pathFormatted: !1,
                };
              r.length > 0 ? (r = p(r, O)) : n.addAnimator(this),
                r.push(O),
                this.set("animations", r),
                this.set("_pause", { isPaused: !1 });
            }
          }),
          (e.prototype.stopAnimate = function (t) {
            var e = this;
            void 0 === t && (t = !0);
            var n = this.get("animations");
            Object(i.e)(n, function (n) {
              t && (n.onFrame ? e.attr(n.onFrame(1)) : e.attr(n.toAttrs)),
                n.callback && n.callback();
            }),
              this.set("animating", !1),
              this.set("animations", []);
          }),
          (e.prototype.pauseAnimate = function () {
            var t = this.get("timeline"),
              e = this.get("animations"),
              n = t.getTime();
            return (
              Object(i.e)(e, function (t) {
                (t._paused = !0),
                  (t._pauseTime = n),
                  t.pauseCallback && t.pauseCallback();
              }),
              this.set("_pause", { isPaused: !0, pauseTime: n }),
              this
            );
          }),
          (e.prototype.resumeAnimate = function () {
            var t = this.get("timeline").getTime(),
              e = this.get("animations"),
              n = this.get("_pause").pauseTime;
            return (
              Object(i.e)(e, function (e) {
                (e.startTime = e.startTime + (t - n)),
                  (e._paused = !1),
                  (e._pauseTime = null),
                  e.resumeCallback && e.resumeCallback();
              }),
              this.set("_pause", { isPaused: !1 }),
              this.set("animations", e),
              this
            );
          }),
          (e.prototype.emitDelegation = function (t, e) {
            var n,
              r = this,
              o = e.propagationPath;
            this.getEvents();
            "mouseenter" === t
              ? (n = e.fromShape)
              : "mouseleave" === t && (n = e.toShape);
            for (
              var s = function (t) {
                  var s = o[t],
                    c = s.get("name");
                  if (c) {
                    if (
                      (s.isGroup() || (s.isCanvas && s.isCanvas())) &&
                      n &&
                      Object(a.g)(s, n)
                    )
                      return "break";
                    Object(i.m)(c)
                      ? Object(i.e)(c, function (t) {
                          r.emitDelegateEvent(s, t, e);
                        })
                      : u.emitDelegateEvent(s, c, e);
                  }
                },
                u = this,
                c = 0;
              c < o.length;
              c++
            ) {
              if ("break" === s(c)) break;
            }
          }),
          (e.prototype.emitDelegateEvent = function (t, e, n) {
            var r = this.getEvents(),
              i = e + ":" + n.type;
            (r[i] || r["*"]) &&
              ((n.name = i),
              (n.currentTarget = t),
              (n.delegateTarget = this),
              (n.delegateObject = t.get("delegateObject")),
              this.emit(i, n));
          }),
          (e.prototype.translate = function (t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0);
            var n = this.getMatrix(),
              r = c(n, [["t", t, e]]);
            return this.setMatrix(r), this;
          }),
          (e.prototype.move = function (t, e) {
            var n = this.attr("x") || 0,
              r = this.attr("y") || 0;
            return this.translate(t - n, e - r), this;
          }),
          (e.prototype.moveTo = function (t, e) {
            return this.move(t, e);
          }),
          (e.prototype.scale = function (t, e) {
            var n = this.getMatrix(),
              r = c(n, [["s", t, e || t]]);
            return this.setMatrix(r), this;
          }),
          (e.prototype.rotate = function (t) {
            var e = this.getMatrix(),
              n = c(e, [["r", t]]);
            return this.setMatrix(n), this;
          }),
          (e.prototype.rotateAtStart = function (t) {
            var e = this.attr(),
              n = e.x,
              r = e.y,
              i = this.getMatrix(),
              o = c(i, [
                ["t", -n, -r],
                ["r", t],
                ["t", n, r],
              ]);
            return this.setMatrix(o), this;
          }),
          (e.prototype.rotateAtPoint = function (t, e, n) {
            var r = this.getMatrix(),
              i = c(r, [
                ["t", -t, -e],
                ["r", n],
                ["t", t, e],
              ]);
            return this.setMatrix(i), this;
          }),
          e
        );
      })(u.a);
      e.a = g;
    },
    function (t, e) {},
    function (t, e) {},
    function (t, e, n) {
      "use strict";
      var r = n(1);
      !(function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        Object(r.c)(e, t),
          (e.prototype.isGroup = function () {
            return !0;
          }),
          (e.prototype.isEntityGroup = function () {
            return !1;
          }),
          (e.prototype.clone = function () {
            for (
              var e = t.prototype.clone.call(this),
                n = this.getChildren(),
                r = 0;
              r < n.length;
              r++
            ) {
              var i = n[r];
              e.add(i.clone());
            }
            return e;
          });
      })(n(15).a);
    },
    function (t, e, n) {
      "use strict";
      var r = n(1),
        i = n(16),
        o = n(5);
      !(function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        Object(r.c)(e, t),
          (e.prototype._isInBBox = function (t, e) {
            var n = this.getBBox();
            return n.minX <= t && n.maxX >= t && n.minY <= e && n.maxY >= e;
          }),
          (e.prototype.afterAttrsChange = function (e) {
            t.prototype.afterAttrsChange.call(this, e), this.clearCacheBBox();
          }),
          (e.prototype.getBBox = function () {
            var t = this.cfg.bbox;
            return t || ((t = this.calculateBBox()), this.set("bbox", t)), t;
          }),
          (e.prototype.getCanvasBBox = function () {
            var t = this.cfg.canvasBBox;
            return (
              t ||
                ((t = this.calculateCanvasBBox()), this.set("canvasBBox", t)),
              t
            );
          }),
          (e.prototype.applyMatrix = function (e) {
            t.prototype.applyMatrix.call(this, e), this.set("canvasBBox", null);
          }),
          (e.prototype.calculateCanvasBBox = function () {
            var t = this.getBBox(),
              e = this.getTotalMatrix(),
              n = t.minX,
              r = t.minY,
              i = t.maxX,
              a = t.maxY;
            if (e) {
              var s = Object(o.c)(e, [t.minX, t.minY]),
                u = Object(o.c)(e, [t.maxX, t.minY]),
                c = Object(o.c)(e, [t.minX, t.maxY]),
                h = Object(o.c)(e, [t.maxX, t.maxY]);
              (n = Math.min(s[0], u[0], c[0], h[0])),
                (i = Math.max(s[0], u[0], c[0], h[0])),
                (r = Math.min(s[1], u[1], c[1], h[1])),
                (a = Math.max(s[1], u[1], c[1], h[1]));
            }
            var l = this.attrs;
            if (l.shadowColor) {
              var d = l.shadowBlur,
                f = void 0 === d ? 0 : d,
                p = l.shadowOffsetX,
                g = void 0 === p ? 0 : p,
                y = l.shadowOffsetY,
                v = void 0 === y ? 0 : y,
                m = n - f + g,
                b = i + f + g,
                x = r - f + v,
                w = a + f + v;
              (n = Math.min(n, m)),
                (i = Math.max(i, b)),
                (r = Math.min(r, x)),
                (a = Math.max(a, w));
            }
            return {
              x: n,
              y: r,
              minX: n,
              minY: r,
              maxX: i,
              maxY: a,
              width: i - n,
              height: a - r,
            };
          }),
          (e.prototype.clearCacheBBox = function () {
            this.set("bbox", null), this.set("canvasBBox", null);
          }),
          (e.prototype.isClipShape = function () {
            return this.get("isClipShape");
          }),
          (e.prototype.isInShape = function (t, e) {
            return !1;
          }),
          (e.prototype.isOnlyHitBox = function () {
            return !1;
          }),
          (e.prototype.isHit = function (t, e) {
            var n = this.get("startArrowShape"),
              r = this.get("endArrowShape"),
              i = [t, e, 1],
              o = (i = this.invertFromMatrix(i))[0],
              a = i[1],
              s = this._isInBBox(o, a);
            if (this.isOnlyHitBox()) return s;
            if (s && !this.isClipped(o, a)) {
              if (this.isInShape(o, a)) return !0;
              if (n && n.isHit(o, a)) return !0;
              if (r && r.isHit(o, a)) return !0;
            }
            return !1;
          });
      })(i.a);
    },
    function (t, e, n) {
      "use strict";
      var r = {};
      n.r(r),
        n.d(r, "easeLinear", function () {
          return k;
        }),
        n.d(r, "easeQuad", function () {
          return T;
        }),
        n.d(r, "easeQuadIn", function () {
          return E;
        }),
        n.d(r, "easeQuadOut", function () {
          return N;
        }),
        n.d(r, "easeQuadInOut", function () {
          return T;
        }),
        n.d(r, "easeCubic", function () {
          return B;
        }),
        n.d(r, "easeCubicIn", function () {
          return P;
        }),
        n.d(r, "easeCubicOut", function () {
          return I;
        }),
        n.d(r, "easeCubicInOut", function () {
          return B;
        }),
        n.d(r, "easePoly", function () {
          return D;
        }),
        n.d(r, "easePolyIn", function () {
          return A;
        }),
        n.d(r, "easePolyOut", function () {
          return L;
        }),
        n.d(r, "easePolyInOut", function () {
          return D;
        }),
        n.d(r, "easeSin", function () {
          return z;
        }),
        n.d(r, "easeSinIn", function () {
          return Y;
        }),
        n.d(r, "easeSinOut", function () {
          return F;
        }),
        n.d(r, "easeSinInOut", function () {
          return z;
        }),
        n.d(r, "easeExp", function () {
          return q;
        }),
        n.d(r, "easeExpIn", function () {
          return W;
        }),
        n.d(r, "easeExpOut", function () {
          return G;
        }),
        n.d(r, "easeExpInOut", function () {
          return q;
        }),
        n.d(r, "easeCircle", function () {
          return U;
        }),
        n.d(r, "easeCircleIn", function () {
          return H;
        }),
        n.d(r, "easeCircleOut", function () {
          return V;
        }),
        n.d(r, "easeCircleInOut", function () {
          return U;
        }),
        n.d(r, "easeBounce", function () {
          return Q;
        }),
        n.d(r, "easeBounceIn", function () {
          return K;
        }),
        n.d(r, "easeBounceOut", function () {
          return Q;
        }),
        n.d(r, "easeBounceInOut", function () {
          return $;
        }),
        n.d(r, "easeBack", function () {
          return et;
        }),
        n.d(r, "easeBackIn", function () {
          return J;
        }),
        n.d(r, "easeBackOut", function () {
          return tt;
        }),
        n.d(r, "easeBackInOut", function () {
          return et;
        }),
        n.d(r, "easeElastic", function () {
          return it;
        }),
        n.d(r, "easeElasticIn", function () {
          return rt;
        }),
        n.d(r, "easeElasticOut", function () {
          return it;
        }),
        n.d(r, "easeElasticInOut", function () {
          return ot;
        });
      var i = n(1),
        o = n(24),
        a = n(15),
        s = n(3),
        u = n(0);
      function c(t) {
        return (c =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var h,
        l,
        d = 0,
        f = 0,
        p = 0,
        g = 0,
        y = 0,
        v = 0,
        m =
          "object" ===
            ("undefined" == typeof performance
              ? "undefined"
              : c(performance)) && performance.now
            ? performance
            : Date,
        b =
          "object" ===
            ("undefined" == typeof window ? "undefined" : c(window)) &&
          window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function (t) {
                setTimeout(t, 17);
              };
      function x() {
        return y || (b(w), (y = m.now() + v));
      }
      function w() {
        y = 0;
      }
      function O() {
        this._call = this._time = this._next = null;
      }
      function M(t, e, n) {
        var r = new O();
        return r.restart(t, e, n), r;
      }
      function S() {
        (y = (g = m.now()) + v), (d = f = 0);
        try {
          !(function () {
            x(), ++d;
            for (var t, e = h; e; )
              (t = y - e._time) >= 0 && e._call.call(null, t), (e = e._next);
            --d;
          })();
        } finally {
          (d = 0),
            (function () {
              var t,
                e,
                n = h,
                r = 1 / 0;
              for (; n; )
                n._call
                  ? (r > n._time && (r = n._time), (t = n), (n = n._next))
                  : ((e = n._next),
                    (n._next = null),
                    (n = t ? (t._next = e) : (h = e)));
              (l = t), j(r);
            })(),
            (y = 0);
        }
      }
      function C() {
        var t = m.now(),
          e = t - g;
        e > 1e3 && ((v -= e), (g = t));
      }
      function j(t) {
        d ||
          (f && (f = clearTimeout(f)),
          t - y > 24
            ? (t < 1 / 0 && (f = setTimeout(S, t - m.now() - v)),
              p && (p = clearInterval(p)))
            : (p || ((g = m.now()), (p = setInterval(C, 1e3))), (d = 1), b(S)));
      }
      function k(t) {
        return +t;
      }
      function E(t) {
        return t * t;
      }
      function N(t) {
        return t * (2 - t);
      }
      function T(t) {
        return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
      }
      function P(t) {
        return t * t * t;
      }
      function I(t) {
        return --t * t * t + 1;
      }
      function B(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
      }
      O.prototype = M.prototype = {
        constructor: O,
        restart: function (t, e, n) {
          if ("function" != typeof t)
            throw new TypeError("callback is not a function");
          (n = (null == n ? x() : +n) + (null == e ? 0 : +e)),
            this._next ||
              l === this ||
              (l ? (l._next = this) : (h = this), (l = this)),
            (this._call = t),
            (this._time = n),
            j();
        },
        stop: function () {
          this._call && ((this._call = null), (this._time = 1 / 0), j());
        },
      };
      var A = (function t(e) {
          function n(t) {
            return Math.pow(t, e);
          }
          return (e = +e), (n.exponent = t), n;
        })(3),
        L = (function t(e) {
          function n(t) {
            return 1 - Math.pow(1 - t, e);
          }
          return (e = +e), (n.exponent = t), n;
        })(3),
        D = (function t(e) {
          function n(t) {
            return (
              ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2
            );
          }
          return (e = +e), (n.exponent = t), n;
        })(3),
        _ = Math.PI,
        R = _ / 2;
      function Y(t) {
        return 1 == +t ? 1 : 1 - Math.cos(t * R);
      }
      function F(t) {
        return Math.sin(t * R);
      }
      function z(t) {
        return (1 - Math.cos(_ * t)) / 2;
      }
      function X(t) {
        return 1.0009775171065494 * (Math.pow(2, -10 * t) - 0.0009765625);
      }
      function W(t) {
        return X(1 - +t);
      }
      function G(t) {
        return 1 - X(t);
      }
      function q(t) {
        return ((t *= 2) <= 1 ? X(1 - t) : 2 - X(t - 1)) / 2;
      }
      function H(t) {
        return 1 - Math.sqrt(1 - t * t);
      }
      function V(t) {
        return Math.sqrt(1 - --t * t);
      }
      function U(t) {
        return (
          ((t *= 2) <= 1
            ? 1 - Math.sqrt(1 - t * t)
            : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
        );
      }
      var Z = 7.5625;
      function K(t) {
        return 1 - Q(1 - t);
      }
      function Q(t) {
        return (t = +t) < 4 / 11
          ? Z * t * t
          : t < 8 / 11
          ? Z * (t -= 6 / 11) * t + 3 / 4
          : t < 10 / 11
          ? Z * (t -= 9 / 11) * t + 15 / 16
          : Z * (t -= 21 / 22) * t + 63 / 64;
      }
      function $(t) {
        return ((t *= 2) <= 1 ? 1 - Q(1 - t) : Q(t - 1) + 1) / 2;
      }
      var J = (function t(e) {
          function n(t) {
            return (t = +t) * t * (e * (t - 1) + t);
          }
          return (e = +e), (n.overshoot = t), n;
        })(1.70158),
        tt = (function t(e) {
          function n(t) {
            return --t * t * ((t + 1) * e + t) + 1;
          }
          return (e = +e), (n.overshoot = t), n;
        })(1.70158),
        et = (function t(e) {
          function n(t) {
            return (
              ((t *= 2) < 1
                ? t * t * ((e + 1) * t - e)
                : (t -= 2) * t * ((e + 1) * t + e) + 2) / 2
            );
          }
          return (e = +e), (n.overshoot = t), n;
        })(1.70158),
        nt = 2 * Math.PI,
        rt = (function t(e, n) {
          var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= nt);
          function i(t) {
            return e * X(-(--t)) * Math.sin((r - t) / n);
          }
          return (
            (i.amplitude = function (e) {
              return t(e, n * nt);
            }),
            (i.period = function (n) {
              return t(e, n);
            }),
            i
          );
        })(1, 0.3),
        it = (function t(e, n) {
          var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= nt);
          function i(t) {
            return 1 - e * X((t = +t)) * Math.sin((t + r) / n);
          }
          return (
            (i.amplitude = function (e) {
              return t(e, n * nt);
            }),
            (i.period = function (n) {
              return t(e, n);
            }),
            i
          );
        })(1, 0.3),
        ot = (function t(e, n) {
          var r = Math.asin(1 / (e = Math.max(1, e))) * (n /= nt);
          function i(t) {
            return (
              ((t = 2 * t - 1) < 0
                ? e * X(-t) * Math.sin((r - t) / n)
                : 2 - e * X(t) * Math.sin((r + t) / n)) / 2
            );
          }
          return (
            (i.amplitude = function (e) {
              return t(e, n * nt);
            }),
            (i.period = function (n) {
              return t(e, n);
            }),
            i
          );
        })(1, 0.3),
        at = function (t, e, n) {
          (t.prototype = e.prototype = n), (n.constructor = t);
        };
      function st(t, e) {
        var n = Object.create(t.prototype);
        for (var r in e) n[r] = e[r];
        return n;
      }
      function ut() {}
      var ct = "\\s*([+-]?\\d+)\\s*",
        ht = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        lt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        dt = /^#([0-9a-f]{3,8})$/,
        ft = new RegExp("^rgb\\(" + [ct, ct, ct] + "\\)$"),
        pt = new RegExp("^rgb\\(" + [lt, lt, lt] + "\\)$"),
        gt = new RegExp("^rgba\\(" + [ct, ct, ct, ht] + "\\)$"),
        yt = new RegExp("^rgba\\(" + [lt, lt, lt, ht] + "\\)$"),
        vt = new RegExp("^hsl\\(" + [ht, lt, lt] + "\\)$"),
        mt = new RegExp("^hsla\\(" + [ht, lt, lt, ht] + "\\)$"),
        bt = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function xt() {
        return this.rgb().formatHex();
      }
      function wt() {
        return this.rgb().formatRgb();
      }
      function Ot(t) {
        var e, n;
        return (
          (t = (t + "").trim().toLowerCase()),
          (e = dt.exec(t))
            ? ((n = e[1].length),
              (e = parseInt(e[1], 16)),
              6 === n
                ? Mt(e)
                : 3 === n
                ? new kt(
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    ((15 & e) << 4) | (15 & e),
                    1,
                  )
                : 8 === n
                ? St(
                    (e >> 24) & 255,
                    (e >> 16) & 255,
                    (e >> 8) & 255,
                    (255 & e) / 255,
                  )
                : 4 === n
                ? St(
                    ((e >> 12) & 15) | ((e >> 8) & 240),
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    (((15 & e) << 4) | (15 & e)) / 255,
                  )
                : null)
            : (e = ft.exec(t))
            ? new kt(e[1], e[2], e[3], 1)
            : (e = pt.exec(t))
            ? new kt(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                1,
              )
            : (e = gt.exec(t))
            ? St(e[1], e[2], e[3], e[4])
            : (e = yt.exec(t))
            ? St(
                (255 * e[1]) / 100,
                (255 * e[2]) / 100,
                (255 * e[3]) / 100,
                e[4],
              )
            : (e = vt.exec(t))
            ? Pt(e[1], e[2] / 100, e[3] / 100, 1)
            : (e = mt.exec(t))
            ? Pt(e[1], e[2] / 100, e[3] / 100, e[4])
            : bt.hasOwnProperty(t)
            ? Mt(bt[t])
            : "transparent" === t
            ? new kt(NaN, NaN, NaN, 0)
            : null
        );
      }
      function Mt(t) {
        return new kt((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
      }
      function St(t, e, n, r) {
        return r <= 0 && (t = e = n = NaN), new kt(t, e, n, r);
      }
      function Ct(t) {
        return (
          t instanceof ut || (t = Ot(t)),
          t ? new kt((t = t.rgb()).r, t.g, t.b, t.opacity) : new kt()
        );
      }
      function jt(t, e, n, r) {
        return 1 === arguments.length
          ? Ct(t)
          : new kt(t, e, n, null == r ? 1 : r);
      }
      function kt(t, e, n, r) {
        (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
      }
      function Et() {
        return "#" + Tt(this.r) + Tt(this.g) + Tt(this.b);
      }
      function Nt() {
        var t = this.opacity;
        return (
          (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
            ? "rgb("
            : "rgba(") +
          Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
          ", " +
          Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
          ", " +
          Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
          (1 === t ? ")" : ", " + t + ")")
        );
      }
      function Tt(t) {
        return (
          ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16
            ? "0"
            : "") + t.toString(16)
        );
      }
      function Pt(t, e, n, r) {
        return (
          r <= 0
            ? (t = e = n = NaN)
            : n <= 0 || n >= 1
            ? (t = e = NaN)
            : e <= 0 && (t = NaN),
          new Bt(t, e, n, r)
        );
      }
      function It(t) {
        if (t instanceof Bt) return new Bt(t.h, t.s, t.l, t.opacity);
        if ((t instanceof ut || (t = Ot(t)), !t)) return new Bt();
        if (t instanceof Bt) return t;
        var e = (t = t.rgb()).r / 255,
          n = t.g / 255,
          r = t.b / 255,
          i = Math.min(e, n, r),
          o = Math.max(e, n, r),
          a = NaN,
          s = o - i,
          u = (o + i) / 2;
        return (
          s
            ? ((a =
                e === o
                  ? (n - r) / s + 6 * (n < r)
                  : n === o
                  ? (r - e) / s + 2
                  : (e - n) / s + 4),
              (s /= u < 0.5 ? o + i : 2 - o - i),
              (a *= 60))
            : (s = u > 0 && u < 1 ? 0 : a),
          new Bt(a, s, u, t.opacity)
        );
      }
      function Bt(t, e, n, r) {
        (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
      }
      function At(t, e, n) {
        return (
          255 *
          (t < 60
            ? e + ((n - e) * t) / 60
            : t < 180
            ? n
            : t < 240
            ? e + ((n - e) * (240 - t)) / 60
            : e)
        );
      }
      function Lt(t, e, n, r, i) {
        var o = t * t,
          a = o * t;
        return (
          ((1 - 3 * t + 3 * o - a) * e +
            (4 - 6 * o + 3 * a) * n +
            (1 + 3 * t + 3 * o - 3 * a) * r +
            a * i) /
          6
        );
      }
      at(ut, Ot, {
        copy: function (t) {
          return Object.assign(new this.constructor(), this, t);
        },
        displayable: function () {
          return this.rgb().displayable();
        },
        hex: xt,
        formatHex: xt,
        formatHsl: function () {
          return It(this).formatHsl();
        },
        formatRgb: wt,
        toString: wt,
      }),
        at(
          kt,
          jt,
          st(ut, {
            brighter: function (t) {
              return (
                (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                new kt(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new kt(this.r * t, this.g * t, this.b * t, this.opacity)
              );
            },
            rgb: function () {
              return this;
            },
            displayable: function () {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: Et,
            formatHex: Et,
            formatRgb: Nt,
            toString: Nt,
          }),
        ),
        at(
          Bt,
          function (t, e, n, r) {
            return 1 === arguments.length
              ? It(t)
              : new Bt(t, e, n, null == r ? 1 : r);
          },
          st(ut, {
            brighter: function (t) {
              return (
                (t = null == t ? 1 / 0.7 : Math.pow(1 / 0.7, t)),
                new Bt(this.h, this.s, this.l * t, this.opacity)
              );
            },
            darker: function (t) {
              return (
                (t = null == t ? 0.7 : Math.pow(0.7, t)),
                new Bt(this.h, this.s, this.l * t, this.opacity)
              );
            },
            rgb: function () {
              var t = (this.h % 360) + 360 * (this.h < 0),
                e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < 0.5 ? n : 1 - n) * e,
                i = 2 * n - r;
              return new kt(
                At(t >= 240 ? t - 240 : t + 120, i, r),
                At(t, i, r),
                At(t < 120 ? t + 240 : t - 120, i, r),
                this.opacity,
              );
            },
            displayable: function () {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl: function () {
              var t = this.opacity;
              return (
                (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
                  ? "hsl("
                  : "hsla(") +
                (this.h || 0) +
                ", " +
                100 * (this.s || 0) +
                "%, " +
                100 * (this.l || 0) +
                "%" +
                (1 === t ? ")" : ", " + t + ")")
              );
            },
          }),
        );
      var Dt = function (t) {
        return function () {
          return t;
        };
      };
      function _t(t, e) {
        return function (n) {
          return t + n * e;
        };
      }
      function Rt(t) {
        return 1 == (t = +t)
          ? Yt
          : function (e, n) {
              return n - e
                ? (function (t, e, n) {
                    return (
                      (t = Math.pow(t, n)),
                      (e = Math.pow(e, n) - t),
                      (n = 1 / n),
                      function (r) {
                        return Math.pow(t + r * e, n);
                      }
                    );
                  })(e, n, t)
                : Dt(isNaN(e) ? n : e);
            };
      }
      function Yt(t, e) {
        var n = e - t;
        return n ? _t(t, n) : Dt(isNaN(t) ? e : t);
      }
      var Ft = (function t(e) {
        var n = Rt(e);
        function r(t, e) {
          var r = n((t = jt(t)).r, (e = jt(e)).r),
            i = n(t.g, e.g),
            o = n(t.b, e.b),
            a = Yt(t.opacity, e.opacity);
          return function (e) {
            return (
              (t.r = r(e)),
              (t.g = i(e)),
              (t.b = o(e)),
              (t.opacity = a(e)),
              t + ""
            );
          };
        }
        return (r.gamma = t), r;
      })(1);
      function zt(t) {
        return function (e) {
          var n,
            r,
            i = e.length,
            o = new Array(i),
            a = new Array(i),
            s = new Array(i);
          for (n = 0; n < i; ++n)
            (r = jt(e[n])),
              (o[n] = r.r || 0),
              (a[n] = r.g || 0),
              (s[n] = r.b || 0);
          return (
            (o = t(o)),
            (a = t(a)),
            (s = t(s)),
            (r.opacity = 1),
            function (t) {
              return (r.r = o(t)), (r.g = a(t)), (r.b = s(t)), r + "";
            }
          );
        };
      }
      zt(function (t) {
        var e = t.length - 1;
        return function (n) {
          var r =
              n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), e - 1) : Math.floor(n * e),
            i = t[r],
            o = t[r + 1],
            a = r > 0 ? t[r - 1] : 2 * i - o,
            s = r < e - 1 ? t[r + 2] : 2 * o - i;
          return Lt((n - r / e) * e, a, i, o, s);
        };
      }),
        zt(function (t) {
          var e = t.length;
          return function (n) {
            var r = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
              i = t[(r + e - 1) % e],
              o = t[r % e],
              a = t[(r + 1) % e],
              s = t[(r + 2) % e];
            return Lt((n - r / e) * e, i, o, a, s);
          };
        });
      var Xt = function (t, e) {
        e || (e = []);
        var n,
          r = t ? Math.min(e.length, t.length) : 0,
          i = e.slice();
        return function (o) {
          for (n = 0; n < r; ++n) i[n] = t[n] * (1 - o) + e[n] * o;
          return i;
        };
      };
      function Wt(t) {
        return ArrayBuffer.isView(t) && !(t instanceof DataView);
      }
      function Gt(t, e) {
        var n,
          r = e ? e.length : 0,
          i = t ? Math.min(r, t.length) : 0,
          o = new Array(i),
          a = new Array(r);
        for (n = 0; n < i; ++n) o[n] = Jt(t[n], e[n]);
        for (; n < r; ++n) a[n] = e[n];
        return function (t) {
          for (n = 0; n < i; ++n) a[n] = o[n](t);
          return a;
        };
      }
      var qt = function (t, e) {
          var n = new Date();
          return (
            (t = +t),
            (e = +e),
            function (r) {
              return n.setTime(t * (1 - r) + e * r), n;
            }
          );
        },
        Ht = function (t, e) {
          return (
            (t = +t),
            (e = +e),
            function (n) {
              return t * (1 - n) + e * n;
            }
          );
        };
      function Vt(t) {
        return (Vt =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var Ut = function (t, e) {
          var n,
            r = {},
            i = {};
          for (n in ((null !== t && "object" === Vt(t)) || (t = {}),
          (null !== e && "object" === Vt(e)) || (e = {}),
          e))
            n in t ? (r[n] = Jt(t[n], e[n])) : (i[n] = e[n]);
          return function (t) {
            for (n in r) i[n] = r[n](t);
            return i;
          };
        },
        Zt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        Kt = new RegExp(Zt.source, "g");
      var Qt = function (t, e) {
        var n,
          r,
          i,
          o = (Zt.lastIndex = Kt.lastIndex = 0),
          a = -1,
          s = [],
          u = [];
        for (t += "", e += ""; (n = Zt.exec(t)) && (r = Kt.exec(e)); )
          (i = r.index) > o &&
            ((i = e.slice(o, i)), s[a] ? (s[a] += i) : (s[++a] = i)),
            (n = n[0]) === (r = r[0])
              ? s[a]
                ? (s[a] += r)
                : (s[++a] = r)
              : ((s[++a] = null), u.push({ i: a, x: Ht(n, r) })),
            (o = Kt.lastIndex);
        return (
          o < e.length && ((i = e.slice(o)), s[a] ? (s[a] += i) : (s[++a] = i)),
          s.length < 2
            ? u[0]
              ? (function (t) {
                  return function (e) {
                    return t(e) + "";
                  };
                })(u[0].x)
              : (function (t) {
                  return function () {
                    return t;
                  };
                })(e)
            : ((e = u.length),
              function (t) {
                for (var n, r = 0; r < e; ++r) s[(n = u[r]).i] = n.x(t);
                return s.join("");
              })
        );
      };
      function $t(t) {
        return ($t =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var Jt = function (t, e) {
          var n,
            r = $t(e);
          return null == e || "boolean" === r
            ? Dt(e)
            : ("number" === r
                ? Ht
                : "string" === r
                ? (n = Ot(e))
                  ? ((e = n), Ft)
                  : Qt
                : e instanceof Ot
                ? Ft
                : e instanceof Date
                ? qt
                : Wt(e)
                ? Xt
                : Array.isArray(e)
                ? Gt
                : ("function" != typeof e.valueOf &&
                    "function" != typeof e.toString) ||
                  isNaN(e)
                ? Ut
                : Ht)(t, e);
        },
        te = n(6),
        ee = [1, 0, 0, 0, 1, 0, 0, 0, 1];
      function ne(t, e, n) {
        var i,
          o = e.startTime;
        if (n < o + e.delay || e._paused) return !1;
        var a = e.duration,
          s = e.easing;
        if (((n = n - o - e.delay), e.repeat)) (i = (n % a) / a), (i = r[s](i));
        else {
          if (!((i = n / a) < 1))
            return e.onFrame ? t.attr(e.onFrame(1)) : t.attr(e.toAttrs), !0;
          i = r[s](i);
        }
        if (e.onFrame) {
          var c = e.onFrame(i);
          t.attr(c);
        } else
          !(function (t, e, n) {
            var r = {},
              i = e.fromAttrs,
              o = e.toAttrs;
            if (!t.destroyed) {
              var a, s, c, h;
              for (var l in o)
                if (!Object(u.q)(i[l], o[l]))
                  if ("path" === l) {
                    var d = o[l],
                      f = i[l];
                    d.length > f.length
                      ? ((d = te.c(o[l])),
                        (f = te.c(i[l])),
                        (f = te.a(f, d)),
                        (f = te.b(f, d)),
                        (e.fromAttrs.path = f),
                        (e.toAttrs.path = d))
                      : e.pathFormatted ||
                        ((d = te.c(o[l])),
                        (f = te.c(i[l])),
                        (f = te.b(f, d)),
                        (e.fromAttrs.path = f),
                        (e.toAttrs.path = d),
                        (e.pathFormatted = !0)),
                      (r[l] = []);
                    for (var p = 0; p < d.length; p++) {
                      for (
                        var g = d[p], y = f[p], v = [], m = 0;
                        m < g.length;
                        m++
                      )
                        Object(u.t)(g[m]) && y && Object(u.t)(y[m])
                          ? ((a = Jt(y[m], g[m])), v.push(a(n)))
                          : v.push(g[m]);
                      r[l].push(v);
                    }
                  } else if ("matrix" === l) {
                    var b = ((c = i[l] || ee),
                    (Wt((h = o[l] || ee)) ? Xt : Gt)(c, h))(n);
                    r[l] = b;
                  } else
                    ["fill", "stroke", "fillStyle", "strokeStyle"].includes(
                      l,
                    ) && ((s = o[l]), /^[r,R,L,l]{1}[\s]*\(/.test(s))
                      ? (r[l] = o[l])
                      : Object(u.r)(o[l]) ||
                        ((a = Jt(i[l], o[l])), (r[l] = a(n)));
              t.attr(r);
            }
          })(t, e, i);
        return !1;
      }
      var re = (function () {
          function t(t) {
            (this.animators = []),
              (this.current = 0),
              (this.timer = null),
              (this.canvas = t);
          }
          return (
            (t.prototype.initTimer = function () {
              var t,
                e,
                n,
                r = this;
              this.timer = M(function (i) {
                if (((r.current = i), r.animators.length > 0)) {
                  for (var o = r.animators.length - 1; o >= 0; o--)
                    if ((t = r.animators[o]).destroyed) r.removeAnimator(o);
                    else {
                      if (!t.isAnimatePaused())
                        for (
                          var a = (e = t.get("animations")).length - 1;
                          a >= 0;
                          a--
                        )
                          (n = e[a]),
                            ne(t, n, i) &&
                              (e.splice(a, 1), !1, n.callback && n.callback());
                      0 === e.length && r.removeAnimator(o);
                    }
                  r.canvas.get("autoDraw") || r.canvas.draw();
                }
              });
            }),
            (t.prototype.addAnimator = function (t) {
              this.animators.push(t);
            }),
            (t.prototype.removeAnimator = function (t) {
              this.animators.splice(t, 1);
            }),
            (t.prototype.isAnimating = function () {
              return !!this.animators.length;
            }),
            (t.prototype.stop = function () {
              this.timer && this.timer.stop();
            }),
            (t.prototype.stopAllAnimations = function (t) {
              void 0 === t && (t = !0),
                this.animators.forEach(function (e) {
                  e.stopAnimate(t);
                }),
                (this.animators = []),
                this.canvas.draw();
            }),
            (t.prototype.getTime = function () {
              return this.current;
            }),
            t
          );
        })(),
        ie = n(10),
        oe = [
          "mousedown",
          "mouseup",
          "dblclick",
          "mouseout",
          "mouseover",
          "mousemove",
          "mouseleave",
          "mouseenter",
          "touchstart",
          "touchmove",
          "touchend",
          "dragenter",
          "dragover",
          "dragleave",
          "drop",
          "contextmenu",
          "mousewheel",
        ];
      function ae(t, e, n) {
        (n.name = e),
          (n.target = t),
          (n.currentTarget = t),
          (n.delegateTarget = t),
          t.emit(e, n);
      }
      function se(t, e, n) {
        if (n.bubbles) {
          var r = void 0,
            i = !1;
          if (
            ("mouseenter" === e
              ? ((r = n.fromShape), (i = !0))
              : "mouseleave" === e && ((i = !0), (r = n.toShape)),
            t.isCanvas() && i)
          )
            return;
          if (r && Object(s.g)(t, r)) return void (n.bubbles = !1);
          (n.name = e),
            (n.currentTarget = t),
            (n.delegateTarget = t),
            t.emit(e, n);
        }
      }
      var ue = (function () {
          function t(t) {
            var e = this;
            (this.draggingShape = null),
              (this.dragging = !1),
              (this.currentShape = null),
              (this.mousedownShape = null),
              (this.mousedownPoint = null),
              (this._eventCallback = function (t) {
                var n = t.type;
                e._triggerEvent(n, t);
              }),
              (this._onDocumentMove = function (t) {
                if (
                  e.canvas.get("el") !== t.target &&
                  (e.dragging || e.currentShape)
                ) {
                  var n = e._getPointInfo(t);
                  e.dragging && e._emitEvent("drag", t, n, e.draggingShape);
                }
              }),
              (this._onDocumentMouseUp = function (t) {
                if (e.canvas.get("el") !== t.target && e.dragging) {
                  var n = e._getPointInfo(t);
                  e.draggingShape && e._emitEvent("drop", t, n, null),
                    e._emitEvent("dragend", t, n, e.draggingShape),
                    e._afterDrag(e.draggingShape, n, t);
                }
              }),
              (this.canvas = t.canvas);
          }
          return (
            (t.prototype.init = function () {
              this._bindEvents();
            }),
            (t.prototype._bindEvents = function () {
              var t = this,
                e = this.canvas.get("el");
              Object(s.a)(oe, function (n) {
                e.addEventListener(n, t._eventCallback);
              }),
                document &&
                  (document.addEventListener("mousemove", this._onDocumentMove),
                  document.addEventListener(
                    "mouseup",
                    this._onDocumentMouseUp,
                  ));
            }),
            (t.prototype._clearEvents = function () {
              var t = this,
                e = this.canvas.get("el");
              Object(s.a)(oe, function (n) {
                e.removeEventListener(n, t._eventCallback);
              }),
                document &&
                  (document.removeEventListener(
                    "mousemove",
                    this._onDocumentMove,
                  ),
                  document.removeEventListener(
                    "mouseup",
                    this._onDocumentMouseUp,
                  ));
            }),
            (t.prototype._getEventObj = function (t, e, n, r, i, o) {
              var a = new ie.a(t, e);
              return (
                (a.fromShape = i),
                (a.toShape = o),
                (a.x = n.x),
                (a.y = n.y),
                (a.clientX = n.clientX),
                (a.clientY = n.clientY),
                a.propagationPath.push(r),
                a
              );
            }),
            (t.prototype._getShape = function (t, e) {
              return this.canvas.getShape(t.x, t.y, e);
            }),
            (t.prototype._getPointInfo = function (t) {
              var e = this.canvas,
                n = e.getClientByEvent(t),
                r = e.getPointByEvent(t);
              return { x: r.x, y: r.y, clientX: n.x, clientY: n.y };
            }),
            (t.prototype._triggerEvent = function (t, e) {
              var n = this._getPointInfo(e),
                r = this._getShape(n, e),
                i = this["_on" + t],
                o = !1;
              if (i) i.call(this, n, r, e);
              else {
                var a = this.currentShape;
                "mouseenter" === t || "dragenter" === t || "mouseover" === t
                  ? (this._emitEvent(t, e, n, null, null, r),
                    r && this._emitEvent(t, e, n, r, null, r),
                    "mouseenter" === t &&
                      this.draggingShape &&
                      this._emitEvent("dragenter", e, n, null))
                  : "mouseleave" === t || "dragleave" === t || "mouseout" === t
                  ? ((o = !0),
                    a && this._emitEvent(t, e, n, a, a, null),
                    this._emitEvent(t, e, n, null, a, null),
                    "mouseleave" === t &&
                      this.draggingShape &&
                      this._emitEvent("dragleave", e, n, null))
                  : this._emitEvent(t, e, n, r, null, null);
              }
              if ((o || (this.currentShape = r), r && !r.get("destroyed"))) {
                var s = this.canvas;
                s.get("el").style.cursor = r.attr("cursor") || s.get("cursor");
              }
            }),
            (t.prototype._onmousedown = function (t, e, n) {
              0 === n.button &&
                ((this.mousedownShape = e),
                (this.mousedownPoint = t),
                (this.mousedownTimeStamp = n.timeStamp)),
                this._emitEvent("mousedown", n, t, e, null, null);
            }),
            (t.prototype._emitMouseoverEvents = function (t, e, n, r) {
              var i = this.canvas.get("el");
              n !== r &&
                (n &&
                  (this._emitEvent("mouseout", t, e, n, n, r),
                  this._emitEvent("mouseleave", t, e, n, n, r),
                  (r && !r.get("destroyed")) ||
                    (i.style.cursor = this.canvas.get("cursor"))),
                r &&
                  (this._emitEvent("mouseover", t, e, r, n, r),
                  this._emitEvent("mouseenter", t, e, r, n, r)));
            }),
            (t.prototype._emitDragoverEvents = function (t, e, n, r, i) {
              r
                ? (r !== n &&
                    (n && this._emitEvent("dragleave", t, e, n, n, r),
                    this._emitEvent("dragenter", t, e, r, n, r)),
                  i || this._emitEvent("dragover", t, e, r))
                : n && this._emitEvent("dragleave", t, e, n, n, r),
                i && this._emitEvent("dragover", t, e, r);
            }),
            (t.prototype._afterDrag = function (t, e, n) {
              t && (t.set("capture", !0), (this.draggingShape = null)),
                (this.dragging = !1);
              var r = this._getShape(e, n);
              r !== t && this._emitMouseoverEvents(n, e, t, r),
                (this.currentShape = r);
            }),
            (t.prototype._onmouseup = function (t, e, n) {
              if (0 === n.button) {
                var r = this.draggingShape;
                this.dragging
                  ? (r && this._emitEvent("drop", n, t, e),
                    this._emitEvent("dragend", n, t, r),
                    this._afterDrag(r, t, n))
                  : (this._emitEvent("mouseup", n, t, e),
                    e === this.mousedownShape &&
                      this._emitEvent("click", n, t, e),
                    (this.mousedownShape = null),
                    (this.mousedownPoint = null));
              }
            }),
            (t.prototype._ondragover = function (t, e, n) {
              n.preventDefault();
              var r = this.currentShape;
              this._emitDragoverEvents(n, t, r, e, !0);
            }),
            (t.prototype._onmousemove = function (t, e, n) {
              var r = this.canvas,
                i = this.currentShape,
                o = this.draggingShape;
              if (this.dragging)
                o && this._emitDragoverEvents(n, t, i, e, !1),
                  this._emitEvent("drag", n, t, o);
              else {
                var a = this.mousedownPoint;
                if (a) {
                  var s = this.mousedownShape,
                    u = n.timeStamp - this.mousedownTimeStamp,
                    c = a.clientX - t.clientX,
                    h = a.clientY - t.clientY;
                  u > 120 || c * c + h * h > 40
                    ? s && s.get("draggable")
                      ? ((o = this.mousedownShape).set("capture", !1),
                        (this.draggingShape = o),
                        (this.dragging = !0),
                        this._emitEvent("dragstart", n, t, o),
                        (this.mousedownShape = null),
                        (this.mousedownPoint = null))
                      : !s && r.get("draggable")
                      ? ((this.dragging = !0),
                        this._emitEvent("dragstart", n, t, null),
                        (this.mousedownShape = null),
                        (this.mousedownPoint = null))
                      : (this._emitMouseoverEvents(n, t, i, e),
                        this._emitEvent("mousemove", n, t, e))
                    : (this._emitMouseoverEvents(n, t, i, e),
                      this._emitEvent("mousemove", n, t, e));
                } else
                  this._emitMouseoverEvents(n, t, i, e),
                    this._emitEvent("mousemove", n, t, e);
              }
            }),
            (t.prototype._emitEvent = function (t, e, n, r, i, o) {
              var a = this._getEventObj(t, e, n, r, i, o);
              if (r) {
                (a.shape = r), ae(r, t, a);
                for (var s = r.getParent(); s; )
                  s.emitDelegation(t, a),
                    a.propagationStopped || se(s, t, a),
                    a.propagationPath.push(s),
                    (s = s.getParent());
              } else {
                ae(this.canvas, t, a);
              }
            }),
            (t.prototype.destroy = function () {
              this._clearEvents(),
                (this.canvas = null),
                (this.currentShape = null),
                (this.draggingShape = null),
                (this.mousedownPoint = null),
                (this.mousedownShape = null),
                (this.mousedownTimeStamp = null);
            }),
            t
          );
        })(),
        ce = Object(o.a)(),
        he = ce && "firefox" === ce.name;
      !(function (t) {
        function e(e) {
          var n = t.call(this, e) || this;
          return (
            n.initContainer(), n.initDom(), n.initEvents(), n.initTimeline(), n
          );
        }
        Object(i.c)(e, t),
          (e.prototype.getDefaultCfg = function () {
            var e = t.prototype.getDefaultCfg.call(this);
            return (e.cursor = "default"), (e.supportCSSTransform = !1), e;
          }),
          (e.prototype.initContainer = function () {
            var t = this.get("container");
            Object(s.h)(t) &&
              ((t = document.getElementById(t)), this.set("container", t));
          }),
          (e.prototype.initDom = function () {
            var t = this.createDom();
            this.set("el", t),
              this.get("container").appendChild(t),
              this.setDOMSize(this.get("width"), this.get("height"));
          }),
          (e.prototype.initEvents = function () {
            var t = new ue({ canvas: this });
            t.init(), this.set("eventController", t);
          }),
          (e.prototype.initTimeline = function () {
            var t = new re(this);
            this.set("timeline", t);
          }),
          (e.prototype.setDOMSize = function (t, e) {
            var n = this.get("el");
            s.c && ((n.style.width = t + "px"), (n.style.height = e + "px"));
          }),
          (e.prototype.changeSize = function (t, e) {
            this.setDOMSize(t, e),
              this.set("width", t),
              this.set("height", e),
              this.onCanvasChange("changeSize");
          }),
          (e.prototype.getRenderer = function () {
            return this.get("renderer");
          }),
          (e.prototype.getCursor = function () {
            return this.get("cursor");
          }),
          (e.prototype.setCursor = function (t) {
            this.set("cursor", t);
            var e = this.get("el");
            s.c && e && (e.style.cursor = t);
          }),
          (e.prototype.getPointByEvent = function (t) {
            if (this.get("supportCSSTransform")) {
              if (he && !Object(s.e)(t.layerX) && t.layerX !== t.offsetX)
                return { x: t.layerX, y: t.layerY };
              if (!Object(s.e)(t.offsetX))
                return { x: t.offsetX, y: t.offsetY };
            }
            var e = this.getClientByEvent(t),
              n = e.x,
              r = e.y;
            return this.getPointByClient(n, r);
          }),
          (e.prototype.getClientByEvent = function (t) {
            var e = t;
            return (
              t.touches &&
                (e =
                  "touchend" === t.type ? t.changedTouches[0] : t.touches[0]),
              { x: e.clientX, y: e.clientY }
            );
          }),
          (e.prototype.getPointByClient = function (t, e) {
            var n = this.get("el").getBoundingClientRect();
            return { x: t - n.left, y: e - n.top };
          }),
          (e.prototype.getClientByPoint = function (t, e) {
            var n = this.get("el").getBoundingClientRect();
            return { x: t + n.left, y: e + n.top };
          }),
          (e.prototype.draw = function () {}),
          (e.prototype.removeDom = function () {
            var t = this.get("el");
            t.parentNode.removeChild(t);
          }),
          (e.prototype.clearEvents = function () {
            this.get("eventController").destroy();
          }),
          (e.prototype.isCanvas = function () {
            return !0;
          }),
          (e.prototype.getParent = function () {
            return null;
          }),
          (e.prototype.destroy = function () {
            var e = this.get("timeline");
            this.get("destroyed") ||
              (this.clear(),
              e && e.stop(),
              this.clearEvents(),
              this.removeDom(),
              t.prototype.destroy.call(this));
          });
      })(a.a);
    },
    function (t, e, n) {
      "use strict";
      var r = {};
      n.r(r),
        n.d(r, "distance", function () {
          return h;
        }),
        n.d(r, "isNumberEqual", function () {
          return l;
        }),
        n.d(r, "getBBoxByArray", function () {
          return d;
        }),
        n.d(r, "getBBoxRange", function () {
          return f;
        }),
        n.d(r, "piMod", function () {
          return p;
        });
      var i = new Map();
      function o(t, e) {
        i.set(t, e);
      }
      var a = function (t) {
          var e = t.attr();
          return { x: e.x, y: e.y, width: e.width, height: e.height };
        },
        s = function (t) {
          var e = t.attr(),
            n = e.x,
            r = e.y,
            i = e.r;
          return { x: n - i, y: r - i, width: 2 * i, height: 2 * i };
        };
      function u(t) {
        return Math.min.apply(null, t);
      }
      function c(t) {
        return Math.max.apply(null, t);
      }
      function h(t, e, n, r) {
        var i = t - n,
          o = e - r;
        return Math.sqrt(i * i + o * o);
      }
      function l(t, e) {
        return Math.abs(t - e) < 0.001;
      }
      function d(t, e) {
        var n = u(t),
          r = u(e);
        return { x: n, y: r, width: c(t) - n, height: c(e) - r };
      }
      function f(t, e, n, r) {
        return {
          minX: u([t, n]),
          maxX: c([t, n]),
          minY: u([e, r]),
          maxY: c([e, r]),
        };
      }
      function p(t) {
        return (t + 2 * Math.PI) % (2 * Math.PI);
      }
      n(9);
      function g(t, e, n, r) {
        var i = 1 - r;
        return i * i * t + 2 * r * i * e + r * r * n;
      }
      function y(t, e, n) {
        var r = t + n - 2 * e;
        if (l(r, 0)) return [0.5];
        var i = (t - e) / r;
        return i <= 1 && i >= 0 ? [i] : [];
      }
      var v = function (t, e, n, r, i, o) {
        var a = y(t, n, i)[0],
          s = y(e, r, o)[0],
          u = [t, i],
          c = [e, o];
        return (
          void 0 !== a && u.push(g(t, n, i, a)),
          void 0 !== s && c.push(g(e, r, o, s)),
          d(u, c)
        );
      };
      function m(t, e, n, r, i) {
        var o = 1 - i;
        return (
          o * o * o * t + 3 * e * i * o * o + 3 * n * i * i * o + r * i * i * i
        );
      }
      function b(t, e, n, r) {
        var i,
          o,
          a,
          s = -3 * t + 9 * e - 9 * n + 3 * r,
          u = 6 * t - 12 * e + 6 * n,
          c = 3 * e - 3 * t,
          h = [];
        if (l(s, 0)) l(u, 0) || ((i = -c / u) >= 0 && i <= 1 && h.push(i));
        else {
          var d = u * u - 4 * s * c;
          l(d, 0)
            ? h.push(-u / (2 * s))
            : d > 0 &&
              ((o = (-u - (a = Math.sqrt(d))) / (2 * s)),
              (i = (-u + a) / (2 * s)) >= 0 && i <= 1 && h.push(i),
              o >= 0 && o <= 1 && h.push(o));
        }
        return h;
      }
      var x = function (t, e, n, r, i, o, a, s) {
        for (
          var u = [t, a],
            c = [e, s],
            h = b(t, n, i, a),
            l = b(e, r, o, s),
            f = 0;
          f < h.length;
          f++
        )
          u.push(m(t, n, i, a, h[f]));
        for (f = 0; f < l.length; f++) c.push(m(e, r, o, s, l[f]));
        return d(u, c);
      };
      function w(t, e, n, r, i, o) {
        return (
          n * Math.cos(i) * Math.cos(o) - r * Math.sin(i) * Math.sin(o) + t
        );
      }
      function O(t, e, n, r, i, o) {
        return (
          n * Math.sin(i) * Math.cos(o) + r * Math.cos(i) * Math.sin(o) + e
        );
      }
      var M = function (t, e, n, r, i, o, a) {
        for (
          var s = (function (t, e, n) {
              return Math.atan((-e / t) * Math.tan(n));
            })(n, r, i),
            u = 1 / 0,
            c = -1 / 0,
            h = [o, a],
            l = 2 * -Math.PI;
          l <= 2 * Math.PI;
          l += Math.PI
        ) {
          var d = s + l;
          o < a ? o < d && d < a && h.push(d) : a < d && d < o && h.push(d);
        }
        for (l = 0; l < h.length; l++) {
          var f = w(t, 0, n, r, i, h[l]);
          f < u && (u = f), f > c && (c = f);
        }
        var p = (function (t, e, n) {
            return Math.atan(e / (t * Math.tan(n)));
          })(n, r, i),
          g = 1 / 0,
          y = -1 / 0,
          v = [o, a];
        for (l = 2 * -Math.PI; l <= 2 * Math.PI; l += Math.PI) {
          var m = p + l;
          o < a ? o < m && m < a && v.push(m) : a < m && m < o && v.push(m);
        }
        for (l = 0; l < v.length; l++) {
          var b = O(0, e, n, r, i, v[l]);
          b < g && (g = b), b > y && (y = b);
        }
        return { x: u, y: g, width: c - u, height: y - g };
      };
      function S(t, e) {
        return t && e
          ? {
              minX: Math.min(t.minX, e.minX),
              minY: Math.min(t.minY, e.minY),
              maxX: Math.max(t.maxX, e.maxX),
              maxY: Math.max(t.maxY, e.maxY),
            }
          : t || e;
      }
      function C(t, e) {
        var n = t.get("startArrowShape"),
          r = t.get("endArrowShape");
        return (
          n && (e = S(e, n.getCanvasBBox())),
          r && (e = S(e, r.getCanvasBBox())),
          e
        );
      }
      var j = n(8),
        k = n(7),
        E = n(0);
      function N(t, e) {
        var n = t.prePoint,
          r = t.currentPoint,
          i = t.nextPoint,
          o = Math.pow(r[0] - n[0], 2) + Math.pow(r[1] - n[1], 2),
          a = Math.pow(r[0] - i[0], 2) + Math.pow(r[1] - i[1], 2),
          s = Math.pow(n[0] - i[0], 2) + Math.pow(n[1] - i[1], 2),
          u = Math.acos((o + a - s) / (2 * Math.sqrt(o) * Math.sqrt(a)));
        if (!u || 0 === Math.sin(u) || Object(E.u)(u, 0))
          return { xExtra: 0, yExtra: 0 };
        var c = Math.abs(Math.atan2(i[1] - r[1], i[0] - r[0])),
          h = Math.abs(Math.atan2(i[0] - r[0], i[1] - r[1]));
        return (
          (c = c > Math.PI / 2 ? Math.PI - c : c),
          (h = h > Math.PI / 2 ? Math.PI - h : h),
          {
            xExtra:
              Math.cos(u / 2 - c) * ((e / 2) * (1 / Math.sin(u / 2))) - e / 2 ||
              0,
            yExtra:
              Math.cos(h - u / 2) * ((e / 2) * (1 / Math.sin(u / 2))) - e / 2 ||
              0,
          }
        );
      }
      o("rect", a),
        o("image", a),
        o("circle", s),
        o("marker", s),
        o("polyline", function (t) {
          for (
            var e = t.attr().points, n = [], i = [], o = 0;
            o < e.length;
            o++
          ) {
            var a = e[o];
            n.push(a[0]), i.push(a[1]);
          }
          var s = r.getBBoxByArray(n, i),
            u = s.x,
            c = s.y,
            h = { minX: u, minY: c, maxX: u + s.width, maxY: c + s.height };
          return {
            x: (h = C(t, h)).minX,
            y: h.minY,
            width: h.maxX - h.minX,
            height: h.maxY - h.minY,
          };
        }),
        o("polygon", function (t) {
          for (
            var e = t.attr().points, n = [], i = [], o = 0;
            o < e.length;
            o++
          ) {
            var a = e[o];
            n.push(a[0]), i.push(a[1]);
          }
          return r.getBBoxByArray(n, i);
        }),
        o("text", function (t) {
          var e = t.attr(),
            n = e.x,
            r = e.y,
            i = e.text,
            o = e.fontSize,
            a = e.lineHeight,
            s = e.font;
          s || (s = Object(j.a)(e));
          var u,
            c = Object(j.c)(i, s);
          if (c) {
            var h = e.textAlign,
              l = e.textBaseline,
              d = Object(j.b)(i, o, a),
              f = { x: n, y: r - d };
            h &&
              ("end" === h || "right" === h
                ? (f.x -= c)
                : "center" === h && (f.x -= c / 2)),
              l &&
                ("top" === l ? (f.y += d) : "middle" === l && (f.y += d / 2)),
              (u = { x: f.x, y: f.y, width: c, height: d });
          } else u = { x: n, y: r, width: 0, height: 0 };
          return u;
        }),
        o("path", function (t) {
          var e = t.attr(),
            n = e.path,
            r = e.stroke ? e.lineWidth : 0,
            i = (function (t, e) {
              for (var n = [], r = [], i = [], o = 0; o < t.length; o++) {
                var a = (g = t[o]).currentPoint,
                  s = g.params,
                  u = g.prePoint,
                  c = void 0;
                switch (g.command) {
                  case "Q":
                    c = v(u[0], u[1], s[1], s[2], s[3], s[4]);
                    break;
                  case "C":
                    c = x(u[0], u[1], s[1], s[2], s[3], s[4], s[5], s[6]);
                    break;
                  case "A":
                    var h = g.arcParams;
                    c = M(
                      h.cx,
                      h.cy,
                      h.rx,
                      h.ry,
                      h.xRotation,
                      h.startAngle,
                      h.endAngle,
                    );
                    break;
                  default:
                    n.push(a[0]), r.push(a[1]);
                }
                c &&
                  ((g.box = c),
                  n.push(c.x, c.x + c.width),
                  r.push(c.y, c.y + c.height)),
                  e &&
                    ("L" === g.command || "M" === g.command) &&
                    g.prePoint &&
                    g.nextPoint &&
                    i.push(g);
              }
              (n = n.filter(function (t) {
                return !Number.isNaN(t);
              })),
                (r = r.filter(function (t) {
                  return !Number.isNaN(t);
                }));
              var l = Object(E.B)(n),
                d = Object(E.B)(r),
                f = Object(E.A)(n),
                p = Object(E.A)(r);
              if (0 === i.length)
                return { x: l, y: d, width: f - l, height: p - d };
              for (o = 0; o < i.length; o++) {
                var g;
                (a = (g = i[o]).currentPoint)[0] === l
                  ? (l -= N(g, e).xExtra)
                  : a[0] === f && (f += N(g, e).xExtra),
                  a[1] === d
                    ? (d -= N(g, e).yExtra)
                    : a[1] === p && (p += N(g, e).yExtra);
              }
              return { x: l, y: d, width: f - l, height: p - d };
            })(t.get("segments") || Object(k.c)(n), r),
            o = i.x,
            a = i.y,
            s = { minX: o, minY: a, maxX: o + i.width, maxY: a + i.height };
          return {
            x: (s = C(t, s)).minX,
            y: s.minY,
            width: s.maxX - s.minX,
            height: s.maxY - s.minY,
          };
        }),
        o("line", function (t) {
          var e = t.attr(),
            n = e.x1,
            r = e.y1,
            i = e.x2,
            o = e.y2,
            a = {
              minX: Math.min(n, i),
              maxX: Math.max(n, i),
              minY: Math.min(r, o),
              maxY: Math.max(r, o),
            };
          return {
            x: (a = C(t, a)).minX,
            y: a.minY,
            width: a.maxX - a.minX,
            height: a.maxY - a.minY,
          };
        }),
        o("ellipse", function (t) {
          var e = t.attr(),
            n = e.x,
            r = e.y,
            i = e.rx,
            o = e.ry;
          return { x: n - i, y: r - o, width: 2 * i, height: 2 * o };
        });
    },
    function (t, e, n) {
      var r, i, o;
      function a(t) {
        return (a =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      (i = []),
        void 0 ===
          (o =
            "function" ==
            typeof (r = function () {
              var n = (function () {
                var t = {
                    row: "left",
                    "row-reverse": "right",
                    column: "top",
                    "column-reverse": "bottom",
                  },
                  e = {
                    row: "right",
                    "row-reverse": "left",
                    column: "bottom",
                    "column-reverse": "top",
                  },
                  n = {
                    row: "left",
                    "row-reverse": "right",
                    column: "top",
                    "column-reverse": "bottom",
                  },
                  r = {
                    row: "width",
                    "row-reverse": "width",
                    column: "height",
                    "column-reverse": "height",
                  };
                function i(t) {
                  return void 0 === t;
                }
                function o(t) {
                  return "row" === t || "row-reverse" === t;
                }
                function a(t, e) {
                  if (void 0 !== t.style.marginStart && o(e))
                    return t.style.marginStart;
                  var n = null;
                  switch (e) {
                    case "row":
                      n = t.style.marginLeft;
                      break;
                    case "row-reverse":
                      n = t.style.marginRight;
                      break;
                    case "column":
                      n = t.style.marginTop;
                      break;
                    case "column-reverse":
                      n = t.style.marginBottom;
                  }
                  return void 0 !== n
                    ? n
                    : void 0 !== t.style.margin
                    ? t.style.margin
                    : 0;
                }
                function s(t, e) {
                  if (void 0 !== t.style.marginEnd && o(e))
                    return t.style.marginEnd;
                  var n = null;
                  switch (e) {
                    case "row":
                      n = t.style.marginRight;
                      break;
                    case "row-reverse":
                      n = t.style.marginLeft;
                      break;
                    case "column":
                      n = t.style.marginBottom;
                      break;
                    case "column-reverse":
                      n = t.style.marginTop;
                  }
                  return null != n
                    ? n
                    : void 0 !== t.style.margin
                    ? t.style.margin
                    : 0;
                }
                function u(t, e) {
                  if (
                    void 0 !== t.style.borderStartWidth &&
                    t.style.borderStartWidth >= 0 &&
                    o(e)
                  )
                    return t.style.borderStartWidth;
                  var n = null;
                  switch (e) {
                    case "row":
                      n = t.style.borderLeftWidth;
                      break;
                    case "row-reverse":
                      n = t.style.borderRightWidth;
                      break;
                    case "column":
                      n = t.style.borderTopWidth;
                      break;
                    case "column-reverse":
                      n = t.style.borderBottomWidth;
                  }
                  return null != n && n >= 0
                    ? n
                    : void 0 !== t.style.borderWidth && t.style.borderWidth >= 0
                    ? t.style.borderWidth
                    : 0;
                }
                function c(t, e) {
                  if (
                    void 0 !== t.style.borderEndWidth &&
                    t.style.borderEndWidth >= 0 &&
                    o(e)
                  )
                    return t.style.borderEndWidth;
                  var n = null;
                  switch (e) {
                    case "row":
                      n = t.style.borderRightWidth;
                      break;
                    case "row-reverse":
                      n = t.style.borderLeftWidth;
                      break;
                    case "column":
                      n = t.style.borderBottomWidth;
                      break;
                    case "column-reverse":
                      n = t.style.borderTopWidth;
                  }
                  return null != n && n >= 0
                    ? n
                    : void 0 !== t.style.borderWidth && t.style.borderWidth >= 0
                    ? t.style.borderWidth
                    : 0;
                }
                function h(t, e) {
                  return (
                    (function (t, e) {
                      if (
                        void 0 !== t.style.paddingStart &&
                        t.style.paddingStart >= 0 &&
                        o(e)
                      )
                        return t.style.paddingStart;
                      var n = null;
                      switch (e) {
                        case "row":
                          n = t.style.paddingLeft;
                          break;
                        case "row-reverse":
                          n = t.style.paddingRight;
                          break;
                        case "column":
                          n = t.style.paddingTop;
                          break;
                        case "column-reverse":
                          n = t.style.paddingBottom;
                      }
                      return null != n && n >= 0
                        ? n
                        : void 0 !== t.style.padding && t.style.padding >= 0
                        ? t.style.padding
                        : 0;
                    })(t, e) + u(t, e)
                  );
                }
                function l(t, e) {
                  return (
                    (function (t, e) {
                      if (
                        void 0 !== t.style.paddingEnd &&
                        t.style.paddingEnd >= 0 &&
                        o(e)
                      )
                        return t.style.paddingEnd;
                      var n = null;
                      switch (e) {
                        case "row":
                          n = t.style.paddingRight;
                          break;
                        case "row-reverse":
                          n = t.style.paddingLeft;
                          break;
                        case "column":
                          n = t.style.paddingBottom;
                          break;
                        case "column-reverse":
                          n = t.style.paddingTop;
                      }
                      return null != n && n >= 0
                        ? n
                        : void 0 !== t.style.padding && t.style.padding >= 0
                        ? t.style.padding
                        : 0;
                    })(t, e) + c(t, e)
                  );
                }
                function d(t, e) {
                  return u(t, e) + c(t, e);
                }
                function f(t, e) {
                  return a(t, e) + s(t, e);
                }
                function p(t, e) {
                  return h(t, e) + l(t, e);
                }
                function g(t, e) {
                  return e.style.alignSelf
                    ? e.style.alignSelf
                    : t.style.alignItems
                    ? t.style.alignItems
                    : "stretch";
                }
                function y(t, e) {
                  if ("rtl" === e) {
                    if ("row" === t) return "row-reverse";
                    if ("row-reverse" === t) return "row";
                  }
                  return t;
                }
                function v(t) {
                  return t.style.position ? t.style.position : "relative";
                }
                function m(t) {
                  return "relative" === v(t) && t.style.flex > 0;
                }
                function b(t, e) {
                  return t.layout[r[e]] + f(t, e);
                }
                function x(t, e) {
                  return void 0 !== t.style[r[e]] && t.style[r[e]] >= 0;
                }
                function w(t, e) {
                  return void 0 !== t.style[e];
                }
                function O(t, e) {
                  return void 0 !== t.style[e] ? t.style[e] : 0;
                }
                function M(t, e, n) {
                  var r = {
                      row: t.style.minWidth,
                      "row-reverse": t.style.minWidth,
                      column: t.style.minHeight,
                      "column-reverse": t.style.minHeight,
                    }[e],
                    i = {
                      row: t.style.maxWidth,
                      "row-reverse": t.style.maxWidth,
                      column: t.style.maxHeight,
                      "column-reverse": t.style.maxHeight,
                    }[e],
                    o = n;
                  return (
                    void 0 !== i && i >= 0 && o > i && (o = i),
                    void 0 !== r && r >= 0 && o < r && (o = r),
                    o
                  );
                }
                function S(t, e) {
                  return t > e ? t : e;
                }
                function C(t, e) {
                  void 0 === t.layout[r[e]] &&
                    x(t, e) &&
                    (t.layout[r[e]] = S(M(t, e, t.style[r[e]]), p(t, e)));
                }
                function j(t, i, o) {
                  i.layout[e[o]] =
                    t.layout[r[o]] - i.layout[r[o]] - i.layout[n[o]];
                }
                function k(n, r) {
                  return void 0 !== n.style[t[r]] ? O(n, t[r]) : -O(n, e[r]);
                }
                function E(c, E, T) {
                  var P = (function (t, e) {
                      var n;
                      return (
                        "inherit" ===
                          (n = t.style.direction
                            ? t.style.direction
                            : "inherit") && (n = void 0 === e ? "ltr" : e),
                        n
                      );
                    })(c, T),
                    I = y(
                      (function (t) {
                        return t.style.flexDirection
                          ? t.style.flexDirection
                          : "column";
                      })(c),
                      P,
                    ),
                    B = (function (t, e) {
                      return (function (t) {
                        return "column" === t || "column-reverse" === t;
                      })(t)
                        ? y("row", e)
                        : "column";
                    })(I, P),
                    A = y("row", P);
                  C(c, I),
                    C(c, B),
                    (c.layout.direction = P),
                    (c.layout[t[I]] += a(c, I) + k(c, I)),
                    (c.layout[e[I]] += s(c, I) + k(c, I)),
                    (c.layout[t[B]] += a(c, B) + k(c, B)),
                    (c.layout[e[B]] += s(c, B) + k(c, B));
                  var L = c.children.length,
                    D = p(c, A);
                  if (
                    (function (t) {
                      return void 0 !== t.style.measure;
                    })(c)
                  ) {
                    var _ = !i(c.layout[r[A]]),
                      R = void 0;
                    (R = x(c, A)
                      ? c.style.width
                      : _
                      ? c.layout[r[A]]
                      : E - f(c, A)),
                      (R -= D);
                    var Y = !x(c, A) && !_,
                      F = !x(c, "column") && i(c.layout[r.column]);
                    if (Y || F) {
                      var z = c.style.measure(R);
                      Y && (c.layout.width = z.width + D),
                        F && (c.layout.height = z.height + p(c, "column"));
                    }
                    if (0 === L) return;
                  }
                  var X,
                    W,
                    G,
                    q,
                    H = (function (t) {
                      return "wrap" === t.style.flexWrap;
                    })(c),
                    V = (function (t) {
                      return t.style.justifyContent
                        ? t.style.justifyContent
                        : "flex-start";
                    })(c),
                    U = h(c, I),
                    Z = h(c, B),
                    K = p(c, I),
                    Q = p(c, B),
                    $ = !i(c.layout[r[I]]),
                    J = !i(c.layout[r[B]]),
                    tt = o(I),
                    et = null,
                    nt = null,
                    rt = void 0;
                  $ && (rt = c.layout[r[I]] - K);
                  for (
                    var it = 0, ot = 0, at = 0, st = 0, ut = 0, ct = 0;
                    ot < L;

                  ) {
                    var ht,
                      lt = 0,
                      dt = 0,
                      ft = 0,
                      pt = 0,
                      gt = ($ && "flex-start" === V) || (!$ && "center" !== V),
                      yt = gt ? L : it,
                      vt = !0,
                      mt = L,
                      bt = null,
                      xt = null,
                      wt = U,
                      Ot = 0;
                    for (X = it; X < L; ++X) {
                      if (
                        (((G = c.children[X]).lineIndex = ct),
                        (G.nextAbsoluteChild = null),
                        (G.nextFlexChild = null),
                        "stretch" === (Pt = g(c, G)) &&
                          "relative" === v(G) &&
                          J &&
                          !x(G, B))
                      )
                        G.layout[r[B]] = S(
                          M(G, B, c.layout[r[B]] - Q - f(G, B)),
                          p(G, B),
                        );
                      else if ("absolute" === v(G))
                        for (
                          null === et && (et = G),
                            null !== nt && (nt.nextAbsoluteChild = G),
                            nt = G,
                            W = 0;
                          W < 2;
                          W++
                        )
                          (q = 0 !== W ? "row" : "column"),
                            !i(c.layout[r[q]]) &&
                              !x(G, q) &&
                              w(G, t[q]) &&
                              w(G, e[q]) &&
                              (G.layout[r[q]] = S(
                                M(
                                  G,
                                  q,
                                  c.layout[r[q]] -
                                    p(c, q) -
                                    f(G, q) -
                                    O(G, t[q]) -
                                    O(G, e[q]),
                                ),
                                p(G, q),
                              ));
                      var Mt = 0;
                      if (
                        ($ && m(G)
                          ? (dt++,
                            (ft += G.style.flex),
                            null === bt && (bt = G),
                            null !== xt && (xt.nextFlexChild = G),
                            (xt = G),
                            (Mt = p(G, I) + f(G, I)))
                          : ((ht = void 0),
                            tt ||
                              (ht = x(c, A)
                                ? c.layout[r[A]] - D
                                : E - f(c, A) - D),
                            0 === at && N(G, ht, P),
                            "relative" === v(G) && (pt++, (Mt = b(G, I)))),
                        H && $ && lt + Mt > rt && X !== it)
                      ) {
                        pt--, (at = 1);
                        break;
                      }
                      gt &&
                        ("relative" !== v(G) || m(G)) &&
                        ((gt = !1), (yt = X)),
                        vt &&
                          ("relative" !== v(G) ||
                            ("stretch" !== Pt && "flex-start" !== Pt) ||
                            i(G.layout[r[B]])) &&
                          ((vt = !1), (mt = X)),
                        gt &&
                          ((G.layout[n[I]] += wt),
                          $ && j(c, G, I),
                          (wt += b(G, I)),
                          (Ot = S(Ot, M(G, B, b(G, B))))),
                        vt && ((G.layout[n[B]] += st + Z), J && j(c, G, B)),
                        (at = 0),
                        (lt += Mt),
                        (ot = X + 1);
                    }
                    var St = 0,
                      Ct = 0,
                      jt = 0;
                    if (((jt = $ ? rt - lt : S(lt, 0) - lt), 0 !== dt)) {
                      var kt,
                        Et,
                        Nt = jt / ft;
                      for (xt = bt; null !== xt; )
                        (kt = Nt * xt.style.flex + p(xt, I)) !==
                          (Et = M(xt, I, kt)) &&
                          ((jt -= Et), (ft -= xt.style.flex)),
                          (xt = xt.nextFlexChild);
                      for (
                        (Nt = jt / ft) < 0 && (Nt = 0), xt = bt;
                        null !== xt;

                      )
                        (xt.layout[r[I]] = M(
                          xt,
                          I,
                          Nt * xt.style.flex + p(xt, I),
                        )),
                          (ht = void 0),
                          x(c, A)
                            ? (ht = c.layout[r[A]] - D)
                            : tt || (ht = E - f(c, A) - D),
                          N(xt, ht, P),
                          (G = xt),
                          (xt = xt.nextFlexChild),
                          (G.nextFlexChild = null);
                    } else
                      "flex-start" !== V &&
                        ("center" === V
                          ? (St = jt / 2)
                          : "flex-end" === V
                          ? (St = jt)
                          : "space-between" === V
                          ? ((jt = S(jt, 0)),
                            (Ct = dt + pt - 1 != 0 ? jt / (dt + pt - 1) : 0))
                          : "space-around" === V &&
                            (St = (Ct = jt / (dt + pt)) / 2));
                    for (wt += St, X = yt; X < ot; ++X)
                      "absolute" === v((G = c.children[X])) && w(G, t[I])
                        ? (G.layout[n[I]] = O(G, t[I]) + u(c, I) + a(G, I))
                        : ((G.layout[n[I]] += wt),
                          $ && j(c, G, I),
                          "relative" === v(G) &&
                            ((wt += Ct + b(G, I)),
                            (Ot = S(Ot, M(G, B, b(G, B))))));
                    var Tt = c.layout[r[B]];
                    for (J || (Tt = S(M(c, B, Ot + Q), Q)), X = mt; X < ot; ++X)
                      if ("absolute" === v((G = c.children[X])) && w(G, t[B]))
                        G.layout[n[B]] = O(G, t[B]) + u(c, B) + a(G, B);
                      else {
                        var Pt,
                          It = Z;
                        if ("relative" === v(G))
                          if ("stretch" === (Pt = g(c, G)))
                            i(G.layout[r[B]]) &&
                              (G.layout[r[B]] = S(
                                M(G, B, Tt - Q - f(G, B)),
                                p(G, B),
                              ));
                          else if ("flex-start" !== Pt) {
                            var Bt = Tt - Q - b(G, B);
                            It += "center" === Pt ? Bt / 2 : Bt;
                          }
                        (G.layout[n[B]] += st + It), J && j(c, G, B);
                      }
                    (st += Ot), (ut = S(ut, wt)), (ct += 1), (it = ot);
                  }
                  if (ct > 1 && J) {
                    var At = c.layout[r[B]] - Q,
                      Lt = At - st,
                      Dt = 0,
                      _t = Z,
                      Rt = (function (t) {
                        return t.style.alignContent
                          ? t.style.alignContent
                          : "flex-start";
                      })(c);
                    "flex-end" === Rt
                      ? (_t += Lt)
                      : "center" === Rt
                      ? (_t += Lt / 2)
                      : "stretch" === Rt && At > st && (Dt = Lt / ct);
                    var Yt = 0;
                    for (X = 0; X < ct; ++X) {
                      var Ft = Yt,
                        zt = 0;
                      for (W = Ft; W < L; ++W)
                        if ("relative" === v((G = c.children[W]))) {
                          if (G.lineIndex !== X) break;
                          i(G.layout[r[B]]) ||
                            (zt = S(zt, G.layout[r[B]] + f(G, B)));
                        }
                      for (Yt = W, zt += Dt, W = Ft; W < Yt; ++W)
                        if ("relative" === v((G = c.children[W]))) {
                          var Xt = g(c, G);
                          if ("flex-start" === Xt)
                            G.layout[n[B]] = _t + a(G, B);
                          else if ("flex-end" === Xt)
                            G.layout[n[B]] = _t + zt - s(G, B) - G.layout[r[B]];
                          else if ("center" === Xt) {
                            var Wt = G.layout[r[B]];
                            G.layout[n[B]] = _t + (zt - Wt) / 2;
                          } else
                            "stretch" === Xt && (G.layout[n[B]] = _t + a(G, B));
                        }
                      _t += zt;
                    }
                  }
                  var Gt = !1,
                    qt = !1;
                  if (
                    ($ ||
                      ((c.layout[r[I]] = S(M(c, I, ut + l(c, I)), K)),
                      ("row-reverse" !== I && "column-reverse" !== I) ||
                        (Gt = !0)),
                    J ||
                      ((c.layout[r[B]] = S(M(c, B, st + Q), Q)),
                      ("row-reverse" !== B && "column-reverse" !== B) ||
                        (qt = !0)),
                    Gt || qt)
                  )
                    for (X = 0; X < L; ++X)
                      (G = c.children[X]), Gt && j(c, G, I), qt && j(c, G, B);
                  for (nt = et; null !== nt; ) {
                    for (W = 0; W < 2; W++)
                      (q = 0 !== W ? "row" : "column"),
                        !i(c.layout[r[q]]) &&
                          !x(nt, q) &&
                          w(nt, t[q]) &&
                          w(nt, e[q]) &&
                          (nt.layout[r[q]] = S(
                            M(
                              nt,
                              q,
                              c.layout[r[q]] -
                                d(c, q) -
                                f(nt, q) -
                                O(nt, t[q]) -
                                O(nt, e[q]),
                            ),
                            p(nt, q),
                          )),
                        w(nt, e[q]) &&
                          !w(nt, t[q]) &&
                          (nt.layout[t[q]] =
                            c.layout[r[q]] - nt.layout[r[q]] - O(nt, e[q]));
                    (G = nt),
                      (nt = nt.nextAbsoluteChild),
                      (G.nextAbsoluteChild = null);
                  }
                }
                function N(t, e, n) {
                  t.shouldUpdate = !0;
                  var r = t.style.direction || "ltr";
                  !t.isDirty &&
                  t.lastLayout &&
                  t.lastLayout.requestedHeight === t.layout.height &&
                  t.lastLayout.requestedWidth === t.layout.width &&
                  t.lastLayout.parentMaxWidth === e &&
                  t.lastLayout.direction === r
                    ? ((t.layout.width = t.lastLayout.width),
                      (t.layout.height = t.lastLayout.height),
                      (t.layout.top = t.lastLayout.top),
                      (t.layout.left = t.lastLayout.left))
                    : (t.lastLayout || (t.lastLayout = {}),
                      (t.lastLayout.requestedWidth = t.layout.width),
                      (t.lastLayout.requestedHeight = t.layout.height),
                      (t.lastLayout.parentMaxWidth = e),
                      (t.lastLayout.direction = r),
                      t.children.forEach(function (t) {
                        (t.layout.width = void 0),
                          (t.layout.height = void 0),
                          (t.layout.top = 0),
                          (t.layout.left = 0);
                      }),
                      E(t, e, n),
                      (t.lastLayout.width = t.layout.width),
                      (t.lastLayout.height = t.layout.height),
                      (t.lastLayout.top = t.layout.top),
                      (t.lastLayout.left = t.layout.left));
                }
                return {
                  layoutNodeImpl: E,
                  computeLayout: N,
                  fillNodes: function t(e) {
                    return (
                      (e.layout && !e.isDirty) ||
                        (e.layout = {
                          width: void 0,
                          height: void 0,
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                        }),
                      e.style || (e.style = {}),
                      e.children || (e.children = []),
                      e.children.forEach(t),
                      e
                    );
                  },
                };
              })();
              return (
                "object" === a(e) && (t.exports = n),
                function (t) {
                  n.fillNodes(t), n.computeLayout(t);
                }
              );
            })
              ? r.apply(e, i)
              : r) || (t.exports = o);
    },
    function (t, e, n) {
      "use strict";
      (function (t) {
        n.d(e, "a", function () {
          return d;
        });
        var r = function () {
            for (var t = 0, e = 0, n = arguments.length; e < n; e++)
              t += arguments[e].length;
            var r = Array(t),
              i = 0;
            for (e = 0; e < n; e++)
              for (var o = arguments[e], a = 0, s = o.length; a < s; a++, i++)
                r[i] = o[a];
            return r;
          },
          i = function (t, e, n) {
            (this.name = t),
              (this.version = e),
              (this.os = n),
              (this.type = "browser");
          },
          o = function (e) {
            (this.version = e),
              (this.type = "node"),
              (this.name = "node"),
              (this.os = t.platform);
          },
          a = function (t, e, n, r) {
            (this.name = t),
              (this.version = e),
              (this.os = n),
              (this.bot = r),
              (this.type = "bot-device");
          },
          s = function () {
            (this.type = "bot"),
              (this.bot = !0),
              (this.name = "bot"),
              (this.version = null),
              (this.os = null);
          },
          u = function () {
            (this.type = "react-native"),
              (this.name = "react-native"),
              (this.version = null),
              (this.os = null);
          },
          c =
            /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
          h = [
            ["aol", /AOLShield\/([0-9\._]+)/],
            ["edge", /Edge\/([0-9\._]+)/],
            ["edge-ios", /EdgiOS\/([0-9\._]+)/],
            ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
            ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
            ["samsung", /SamsungBrowser\/([0-9\.]+)/],
            ["silk", /\bSilk\/([0-9._-]+)\b/],
            ["miui", /MiuiBrowser\/([0-9\.]+)$/],
            ["beaker", /BeakerBrowser\/([0-9\.]+)/],
            ["edge-chromium", /EdgA?\/([0-9\.]+)/],
            [
              "chromium-webview",
              /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
            ],
            ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
            ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
            ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
            ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
            ["fxios", /FxiOS\/([0-9\.]+)/],
            ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
            ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
            ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
            ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
            ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
            ["ie", /MSIE\s(7\.0)/],
            ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
            ["android", /Android\s([0-9\.]+)/],
            ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
            ["safari", /Version\/([0-9\._]+).*Safari/],
            ["facebook", /FBAV\/([0-9\.]+)/],
            ["instagram", /Instagram\s([0-9\.]+)/],
            ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
            ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
            [
              "searchbot",
              /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
            ],
          ],
          l = [
            ["iOS", /iP(hone|od|ad)/],
            ["Android OS", /Android/],
            ["BlackBerry OS", /BlackBerry|BB10/],
            ["Windows Mobile", /IEMobile/],
            ["Amazon OS", /Kindle/],
            ["Windows 3.11", /Win16/],
            ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
            ["Windows 98", /(Windows 98)|(Win98)/],
            ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
            ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
            ["Windows Server 2003", /(Windows NT 5.2)/],
            ["Windows Vista", /(Windows NT 6.0)/],
            ["Windows 7", /(Windows NT 6.1)/],
            ["Windows 8", /(Windows NT 6.2)/],
            ["Windows 8.1", /(Windows NT 6.3)/],
            ["Windows 10", /(Windows NT 10.0)/],
            ["Windows ME", /Windows ME/],
            ["Open BSD", /OpenBSD/],
            ["Sun OS", /SunOS/],
            ["Chrome OS", /CrOS/],
            ["Linux", /(Linux)|(X11)/],
            ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
            ["QNX", /QNX/],
            ["BeOS", /BeOS/],
            ["OS/2", /OS\/2/],
          ];
        function d(e) {
          return e
            ? p(e)
            : "undefined" == typeof document &&
              "undefined" != typeof navigator &&
              "ReactNative" === navigator.product
            ? new u()
            : "undefined" != typeof navigator
            ? p(navigator.userAgent)
            : void 0 !== t && t.version
            ? new o(t.version.slice(1))
            : null;
        }
        function f(t) {
          return (
            "" !== t &&
            h.reduce(function (e, n) {
              var r = n[0],
                i = n[1];
              if (e) return e;
              var o = i.exec(t);
              return !!o && [r, o];
            }, !1)
          );
        }
        function p(t) {
          var e = f(t);
          if (!e) return null;
          var n = e[0],
            o = e[1];
          if ("searchbot" === n) return new s();
          var u = o[1] && o[1].split(/[._]/).slice(0, 3);
          u
            ? u.length < 3 &&
              (u = r(
                u,
                (function (t) {
                  for (var e = [], n = 0; n < t; n++) e.push("0");
                  return e;
                })(3 - u.length),
              ))
            : (u = []);
          var h = u.join("."),
            d = (function (t) {
              for (var e = 0, n = l.length; e < n; e++) {
                var r = l[e],
                  i = r[0];
                if (r[1].exec(t)) return i;
              }
              return null;
            })(t),
            p = c.exec(t);
          return p && p[1] ? new a(n, h, d, p[1]) : new i(n, h, d);
        }
      }).call(this, n(32));
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, e) {
      var n,
        r,
        i = (t.exports = {});
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout)
          return (n = setTimeout), setTimeout(t, 0);
        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" == typeof setTimeout ? setTimeout : o;
        } catch (t) {
          n = o;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (t) {
          r = a;
        }
      })();
      var u,
        c = [],
        h = !1,
        l = -1;
      function d() {
        h &&
          u &&
          ((h = !1), u.length ? (c = u.concat(c)) : (l = -1), c.length && f());
      }
      function f() {
        if (!h) {
          var t = s(d);
          h = !0;
          for (var e = c.length; e; ) {
            for (u = c, c = []; ++l < e; ) u && u[l].run();
            (l = -1), (e = c.length);
          }
          (u = null),
            (h = !1),
            (function (t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === a || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(t);
              try {
                r(t);
              } catch (e) {
                try {
                  return r.call(null, t);
                } catch (e) {
                  return r.call(this, t);
                }
              }
            })(t);
        }
      }
      function p(t, e) {
        (this.fun = t), (this.array = e);
      }
      function g() {}
      (i.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new p(t, e)), 1 !== c.length || h || s(f);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = g),
        (i.addListener = g),
        (i.once = g),
        (i.off = g),
        (i.removeListener = g),
        (i.removeAllListeners = g),
        (i.emit = g),
        (i.prependListener = g),
        (i.prependOnceListener = g),
        (i.listeners = function (t) {
          return [];
        }),
        (i.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (i.cwd = function () {
          return "/";
        }),
        (i.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (i.umask = function () {
          return 0;
        });
    },
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "TimeBar", function () {
          return $e;
        }),
        n.d(e, "SnapLine", function () {
          return qi;
        }),
        n.d(e, "Tooltip", function () {
          return Hi;
        }),
        n.d(e, "Legend", function () {
          return Zi;
        }),
        n.d(e, "ZoomSlider", function () {
          return Ki;
        }),
        n.d(e, "EdgeFilterLens", function () {
          return Ji;
        }),
        n.d(e, "Fisheye", function () {
          return eo;
        }),
        n.d(e, "MiniMap", function () {
          return io;
        }),
        n.d(e, "Bundling", function () {
          return so;
        }),
        n.d(e, "Menu", function () {
          return uo;
        });
      var r = {};
      n.r(r),
        n.d(r, "default", function () {
          return Ut;
        }),
        n.d(r, "assign", function () {
          return Et;
        }),
        n.d(r, "format", function () {
          return Ht;
        }),
        n.d(r, "parse", function () {
          return Vt;
        }),
        n.d(r, "defaultI18n", function () {
          return It;
        }),
        n.d(r, "setGlobalDateI18n", function () {
          return At;
        }),
        n.d(r, "setGlobalDateMasks", function () {
          return qt;
        });
      var i = {};
      n.r(i),
        n.d(i, "compare", function () {
          return Sn;
        }),
        n.d(i, "getLineIntersect", function () {
          return jn;
        }),
        n.d(i, "getRectIntersectByPoint", function () {
          return kn;
        }),
        n.d(i, "getCircleIntersectByPoint", function () {
          return En;
        }),
        n.d(i, "getEllipseIntersectByPoint", function () {
          return Nn;
        }),
        n.d(i, "applyMatrix", function () {
          return Tn;
        }),
        n.d(i, "invertMatrix", function () {
          return Pn;
        }),
        n.d(i, "getCircleCenterByPoints", function () {
          return In;
        }),
        n.d(i, "distance", function () {
          return Bn;
        }),
        n.d(i, "scaleMatrix", function () {
          return An;
        }),
        n.d(i, "floydWarshall", function () {
          return Ln;
        }),
        n.d(i, "getAdjMatrix", function () {
          return Dn;
        }),
        n.d(i, "translate", function () {
          return _n;
        }),
        n.d(i, "move", function () {
          return Rn;
        }),
        n.d(i, "scale", function () {
          return Yn;
        }),
        n.d(i, "rotate", function () {
          return Fn;
        }),
        n.d(i, "getDegree", function () {
          return zn;
        }),
        n.d(i, "isPointInPolygon", function () {
          return Wn;
        }),
        n.d(i, "intersectBBox", function () {
          return Gn;
        }),
        n.d(i, "isPolygonsIntersect", function () {
          return qn;
        }),
        n.d(i, "Line", function () {
          return Hn;
        }),
        n.d(i, "getBBoxBoundLine", function () {
          return Vn;
        }),
        n.d(i, "itemIntersectByLine", function () {
          return Zn;
        }),
        n.d(i, "fractionToLine", function () {
          return Kn;
        }),
        n.d(i, "getPointsCenter", function () {
          return Qn;
        }),
        n.d(i, "squareDist", function () {
          return $n;
        }),
        n.d(i, "pointLineSquareDist", function () {
          return Jn;
        }),
        n.d(i, "isPointsOverlap", function () {
          return tr;
        }),
        n.d(i, "pointRectSquareDist", function () {
          return er;
        }),
        n.d(i, "pointLineDistance", function () {
          return nr;
        });
      var o = {};
      n.r(o),
        n.d(o, "getBBox", function () {
          return gr;
        }),
        n.d(o, "getLoopCfgs", function () {
          return yr;
        }),
        n.d(o, "getLabelPosition", function () {
          return vr;
        }),
        n.d(o, "traverseTree", function () {
          return br;
        }),
        n.d(o, "traverseTreeUp", function () {
          return xr;
        }),
        n.d(o, "getLetterWidth", function () {
          return wr;
        }),
        n.d(o, "getTextSize", function () {
          return Or;
        }),
        n.d(o, "plainCombosToTrees", function () {
          return Mr;
        }),
        n.d(o, "reconstructTree", function () {
          return Sr;
        }),
        n.d(o, "getComboBBox", function () {
          return Cr;
        }),
        n.d(o, "shouldRefreshEdge", function () {
          return jr;
        }),
        n.d(o, "cloneBesidesImg", function () {
          return kr;
        });
      var a = {};
      n.r(a),
        n.d(a, "uniqueId", function () {
          return Ir;
        }),
        n.d(a, "formatPadding", function () {
          return Br;
        }),
        n.d(a, "cloneEvent", function () {
          return Ar;
        }),
        n.d(a, "isViewportChanged", function () {
          return Lr;
        }),
        n.d(a, "isNaN", function () {
          return Dr;
        }),
        n.d(a, "calculationItemsBBox", function () {
          return _r;
        }),
        n.d(a, "processParallelEdges", function () {
          return Rr;
        });
      var s = {};
      n.r(s),
        n.d(s, "getSpline", function () {
          return oi;
        }),
        n.d(s, "getControlPoint", function () {
          return ai;
        }),
        n.d(s, "pointsToPolygon", function () {
          return si;
        }),
        n.d(s, "pathToPoints", function () {
          return ui;
        }),
        n.d(s, "getClosedSpline", function () {
          return ci;
        }),
        n.d(s, "roundedHull", function () {
          return fi;
        }),
        n.d(s, "paddedHull", function () {
          return pi;
        });
      var u = {};
      n.r(u),
        n.d(u, "defaultSubjectColors", function () {
          return Fi;
        });
      var c,
        h = n(1);
      function l(t) {
        if (/^[-\+\.\d]+$/.test(t)) return Number(t);
        if (/true|false/.test(t)) return Boolean(t);
        if (/^\s*\[/.test(t))
          try {
            return JSON.parse(t);
          } catch (e) {
            throw new Error("解析数组" + t + "失败");
          }
        if (/^\s*\{/.test(t))
          try {
            return JSON.parse(t);
          } catch (e) {
            throw new Error("解析对象" + t + "失败");
          }
        return t;
      }
      function d(t) {
        return (
          c[t] ||
          t.startsWith("rgb(") ||
          t.startsWith("rgba(") ||
          (t.startsWith("#") && !isNaN(Number("0x" + t.slice(1))))
        );
      }
      function f(t, e) {
        t &&
          e &&
          (t.attrs.id && e("id", t.attrs.id),
          t.attrs.class &&
            p(t.attrs.class, /\s+/g).forEach(function (t) {
              return e("class", t);
            }),
          e("tagName", t.tagName));
      }
      function p(t, e) {
        return e
          ? t.split(e).filter(function (t) {
              return "" != t;
            })
          : [t];
      }
      function g(t, e) {
        if (!t || !e) return !1;
        var n = e.match(/(^[^\.#]+)/g),
          r = e.match(/#[^\.#]+/g),
          i = e.match(/\.[^\.#]+/g),
          o = Object(h.f)(
            Object(h.f)(Object(h.f)([], n || []), r || []),
            i || [],
          ),
          a = {};
        f(t, function (t, e) {
          switch (t) {
            case "id":
              a["#" + e] = 1;
              break;
            case "class":
              a["." + e] = 1;
              break;
            case "tagName":
              a["" + e] = 1;
          }
        });
        for (var s = 0, u = o; s < u.length; s++) {
          var c = u[s];
          if (!a[c]) return !1;
        }
        return !0;
      }
      !(function (t) {
        (t[(t.aliceblue = 0)] = "aliceblue"),
          (t[(t.antiquewhite = 1)] = "antiquewhite"),
          (t[(t.aqua = 2)] = "aqua"),
          (t[(t.aquamarine = 3)] = "aquamarine"),
          (t[(t.azure = 4)] = "azure"),
          (t[(t.beige = 5)] = "beige"),
          (t[(t.bisque = 6)] = "bisque"),
          (t[(t.black = 7)] = "black"),
          (t[(t.blanchedalmond = 8)] = "blanchedalmond"),
          (t[(t.blue = 9)] = "blue"),
          (t[(t.blueviolet = 10)] = "blueviolet"),
          (t[(t.brown = 11)] = "brown"),
          (t[(t.burlywood = 12)] = "burlywood"),
          (t[(t.cadetblue = 13)] = "cadetblue"),
          (t[(t.chartreuse = 14)] = "chartreuse"),
          (t[(t.chocolate = 15)] = "chocolate"),
          (t[(t.coral = 16)] = "coral"),
          (t[(t.cornflowerblue = 17)] = "cornflowerblue"),
          (t[(t.cornsilk = 18)] = "cornsilk"),
          (t[(t.crimson = 19)] = "crimson"),
          (t[(t.cyan = 20)] = "cyan"),
          (t[(t.darkblue = 21)] = "darkblue"),
          (t[(t.darkcyan = 22)] = "darkcyan"),
          (t[(t.darkgoldenrod = 23)] = "darkgoldenrod"),
          (t[(t.darkgray = 24)] = "darkgray"),
          (t[(t.darkgreen = 25)] = "darkgreen"),
          (t[(t.darkgrey = 26)] = "darkgrey"),
          (t[(t.darkkhaki = 27)] = "darkkhaki"),
          (t[(t.darkmagenta = 28)] = "darkmagenta"),
          (t[(t.darkolivegreen = 29)] = "darkolivegreen"),
          (t[(t.darkorange = 30)] = "darkorange"),
          (t[(t.darkorchid = 31)] = "darkorchid"),
          (t[(t.darkred = 32)] = "darkred"),
          (t[(t.darksalmon = 33)] = "darksalmon"),
          (t[(t.darkseagreen = 34)] = "darkseagreen"),
          (t[(t.darkslateblue = 35)] = "darkslateblue"),
          (t[(t.darkslategray = 36)] = "darkslategray"),
          (t[(t.darkslategrey = 37)] = "darkslategrey"),
          (t[(t.darkturquoise = 38)] = "darkturquoise"),
          (t[(t.darkviolet = 39)] = "darkviolet"),
          (t[(t.deeppink = 40)] = "deeppink"),
          (t[(t.deepskyblue = 41)] = "deepskyblue"),
          (t[(t.dimgray = 42)] = "dimgray"),
          (t[(t.dimgrey = 43)] = "dimgrey"),
          (t[(t.dodgerblue = 44)] = "dodgerblue"),
          (t[(t.firebrick = 45)] = "firebrick"),
          (t[(t.floralwhite = 46)] = "floralwhite"),
          (t[(t.forestgreen = 47)] = "forestgreen"),
          (t[(t.fuchsia = 48)] = "fuchsia"),
          (t[(t.gainsboro = 49)] = "gainsboro"),
          (t[(t.ghostwhite = 50)] = "ghostwhite"),
          (t[(t.gold = 51)] = "gold"),
          (t[(t.goldenrod = 52)] = "goldenrod"),
          (t[(t.gray = 53)] = "gray"),
          (t[(t.green = 54)] = "green"),
          (t[(t.greenyellow = 55)] = "greenyellow"),
          (t[(t.grey = 56)] = "grey"),
          (t[(t.honeydew = 57)] = "honeydew"),
          (t[(t.hotpink = 58)] = "hotpink"),
          (t[(t.indianred = 59)] = "indianred"),
          (t[(t.indigo = 60)] = "indigo"),
          (t[(t.ivory = 61)] = "ivory"),
          (t[(t.khaki = 62)] = "khaki"),
          (t[(t.lavender = 63)] = "lavender"),
          (t[(t.lavenderblush = 64)] = "lavenderblush"),
          (t[(t.lawngreen = 65)] = "lawngreen"),
          (t[(t.lemonchiffon = 66)] = "lemonchiffon"),
          (t[(t.lightblue = 67)] = "lightblue"),
          (t[(t.lightcoral = 68)] = "lightcoral"),
          (t[(t.lightcyan = 69)] = "lightcyan"),
          (t[(t.lightgoldenrodyellow = 70)] = "lightgoldenrodyellow"),
          (t[(t.lightgray = 71)] = "lightgray"),
          (t[(t.lightgreen = 72)] = "lightgreen"),
          (t[(t.lightgrey = 73)] = "lightgrey"),
          (t[(t.lightpink = 74)] = "lightpink"),
          (t[(t.lightsalmon = 75)] = "lightsalmon"),
          (t[(t.lightseagreen = 76)] = "lightseagreen"),
          (t[(t.lightskyblue = 77)] = "lightskyblue"),
          (t[(t.lightslategray = 78)] = "lightslategray"),
          (t[(t.lightslategrey = 79)] = "lightslategrey"),
          (t[(t.lightsteelblue = 80)] = "lightsteelblue"),
          (t[(t.lightyellow = 81)] = "lightyellow"),
          (t[(t.lime = 82)] = "lime"),
          (t[(t.limegreen = 83)] = "limegreen"),
          (t[(t.linen = 84)] = "linen"),
          (t[(t.magenta = 85)] = "magenta"),
          (t[(t.maroon = 86)] = "maroon"),
          (t[(t.mediumaquamarine = 87)] = "mediumaquamarine"),
          (t[(t.mediumblue = 88)] = "mediumblue"),
          (t[(t.mediumorchid = 89)] = "mediumorchid"),
          (t[(t.mediumpurple = 90)] = "mediumpurple"),
          (t[(t.mediumseagreen = 91)] = "mediumseagreen"),
          (t[(t.mediumslateblue = 92)] = "mediumslateblue"),
          (t[(t.mediumspringgreen = 93)] = "mediumspringgreen"),
          (t[(t.mediumturquoise = 94)] = "mediumturquoise"),
          (t[(t.mediumvioletred = 95)] = "mediumvioletred"),
          (t[(t.midnightblue = 96)] = "midnightblue"),
          (t[(t.mintcream = 97)] = "mintcream"),
          (t[(t.mistyrose = 98)] = "mistyrose"),
          (t[(t.moccasin = 99)] = "moccasin"),
          (t[(t.navajowhite = 100)] = "navajowhite"),
          (t[(t.navy = 101)] = "navy"),
          (t[(t.oldlace = 102)] = "oldlace"),
          (t[(t.olive = 103)] = "olive"),
          (t[(t.olivedrab = 104)] = "olivedrab"),
          (t[(t.orange = 105)] = "orange"),
          (t[(t.orangered = 106)] = "orangered"),
          (t[(t.orchid = 107)] = "orchid"),
          (t[(t.palegoldenrod = 108)] = "palegoldenrod"),
          (t[(t.palegreen = 109)] = "palegreen"),
          (t[(t.paleturquoise = 110)] = "paleturquoise"),
          (t[(t.palevioletred = 111)] = "palevioletred"),
          (t[(t.papayawhip = 112)] = "papayawhip"),
          (t[(t.peachpuff = 113)] = "peachpuff"),
          (t[(t.peru = 114)] = "peru"),
          (t[(t.pink = 115)] = "pink"),
          (t[(t.plum = 116)] = "plum"),
          (t[(t.powderblue = 117)] = "powderblue"),
          (t[(t.purple = 118)] = "purple"),
          (t[(t.red = 119)] = "red"),
          (t[(t.rosybrown = 120)] = "rosybrown"),
          (t[(t.royalblue = 121)] = "royalblue"),
          (t[(t.saddlebrown = 122)] = "saddlebrown"),
          (t[(t.salmon = 123)] = "salmon"),
          (t[(t.sandybrown = 124)] = "sandybrown"),
          (t[(t.seagreen = 125)] = "seagreen"),
          (t[(t.seashell = 126)] = "seashell"),
          (t[(t.sienna = 127)] = "sienna"),
          (t[(t.silver = 128)] = "silver"),
          (t[(t.skyblue = 129)] = "skyblue"),
          (t[(t.slateblue = 130)] = "slateblue"),
          (t[(t.slategray = 131)] = "slategray"),
          (t[(t.slategrey = 132)] = "slategrey"),
          (t[(t.snow = 133)] = "snow"),
          (t[(t.springgreen = 134)] = "springgreen"),
          (t[(t.steelblue = 135)] = "steelblue"),
          (t[(t.tan = 136)] = "tan"),
          (t[(t.teal = 137)] = "teal"),
          (t[(t.thistle = 138)] = "thistle"),
          (t[(t.tomato = 139)] = "tomato"),
          (t[(t.turquoise = 140)] = "turquoise"),
          (t[(t.violet = 141)] = "violet"),
          (t[(t.wheat = 142)] = "wheat"),
          (t[(t.white = 143)] = "white"),
          (t[(t.whitesmoke = 144)] = "whitesmoke"),
          (t[(t.yellow = 145)] = "yellow"),
          (t[(t.yellowgreen = 146)] = "yellowgreen");
      })(c || (c = {}));
      var y = {
          position: 1,
          display: 1,
          width: 1,
          height: 1,
          minWidth: 1,
          minHeight: 1,
          top: 1,
          left: 1,
          right: 1,
          bottom: 1,
          flex: 1,
          margin: 1,
          marginLeft: 1,
          marginRight: 1,
          marginTop: 1,
          marginBottom: 1,
          padding: 1,
          paddingLeft: 1,
          paddingRight: 1,
          paddingTop: 1,
          paddingBottom: 1,
          borderWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          flexDirection: 1,
          justifyContent: 1,
          alignItems: 1,
          alignSelf: 1,
          flexWrap: 1,
        },
        v = {};
      function m(t, e) {
        if (t) {
          var n = t;
          Array.isArray(n) || (n = [n]),
            n.forEach(function (t) {
              v[t] = "function" == typeof e ? e : l;
            });
        }
      }
      var b = function (t, e) {
          var n = {},
            r = e.split(/\s/g).filter(function (t) {
              return "" !== t;
            });
          return (
            1 !== r.length || isNaN(r[0]) || (n["" + t] = Number(r[0])),
            2 === r.length &&
              (!isNaN(Number(r[0])) &&
                (n[t + "Bottom"] = n[t + "Top"] = Number(r[0])),
              !isNaN(Number(r[1])) &&
                (n[t + "Left"] = n[t + "Right"] = Number(r[1]))),
            3 === r.length &&
              (!isNaN(Number(r[0])) && (n[t + "Top"] = Number(r[0])),
              !isNaN(Number(r[1])) &&
                (n[t + "Left"] = n[t + "Right"] = Number(r[1])),
              !isNaN(Number(r[2])) && (n[t + "Bottom"] = Number(r[2]))),
            4 === r.length &&
              (!isNaN(Number(r[0])) && (n[t + "Top"] = Number(r[0])),
              !isNaN(Number(r[1])) && (n[t + "Right"] = Number(r[1])),
              !isNaN(Number(r[2])) && (n[t + "Bottom"] = Number(r[2])),
              !isNaN(Number(r[3])) && (n[t + "Left"] = Number(r[3]))),
            n
          );
        },
        x = ["solid", "dashed"];
      function w(t, e) {
        if (v[t]) return v[t](e);
        try {
          return l(e);
        } catch (t) {
          return console.error(t), e;
        }
      }
      m("padding", b.bind(null, "padding")),
        m("margin", b.bind(null, "margin")),
        m("border-radius", function (t) {
          var e = {},
            n = t.split(/\s/g).filter(function (t) {
              return "" !== t;
            });
          return (
            1 !== n.length ||
              isNaN(n[0]) ||
              ((e.borderTopLeftRadius = Number(n[0])),
              (e.borderTopRightRadius = Number(n[0])),
              (e.borderBottomRightRadius = Number(n[0])),
              (e.borderBottomLeftRadius = Number(n[0]))),
            2 === n.length &&
              (!isNaN(Number(n[0])) &&
                (e.borderTopLeftRadius = e.borderBottomRightRadius =
                  Number(n[0])),
              !isNaN(Number(n[2])) &&
                (e.borderBottomLeftRadius = e.borderTopRightRadius =
                  Number(n[1]))),
            3 === n.length &&
              (!isNaN(Number(n[0])) && (e.borderTopLeftRadius = Number(n[0])),
              !isNaN(Number(n[1])) &&
                (e.borderBottomLeftRadius = e.borderTopRightRadius =
                  Number(n[1])),
              !isNaN(Number(n[2])) &&
                (e.borderBottomRightRadius = Number(n[2]))),
            4 === n.length &&
              (!isNaN(Number(n[0])) && (e.borderTopLeftRadius = Number(n[0])),
              !isNaN(Number(n[1])) && (e.borderTopRightRadius = Number(n[1])),
              !isNaN(Number(n[2])) &&
                (e.borderBottomRightRadius = Number(n[2])),
              !isNaN(Number(n[3])) &&
                (e.borderBottomLeftRadius = Number(n[3]))),
            e
          );
        }),
        m("border", function (t) {
          for (
            var e = {},
              n = 0,
              r = t.split(/\s/g).filter(function (t) {
                return "" !== t;
              });
            n < r.length;
            n++
          ) {
            var i = r[n];
            isNaN(Number(i))
              ? d(i)
                ? (e.borderColor = i)
                : x.includes(i) && (e.borderStyle = i)
              : (e.borderWidth = Number(i));
          }
          return e;
        }),
        m("background", function (t) {
          for (
            var e = {},
              n = 0,
              r = t.split(/\s/g).filter(function (t) {
                return "" !== t;
              });
            n < r.length;
            n++
          )
            if (d((t = r[n]))) e.backgroundColor = t;
            else if (null == t ? void 0 : t.startsWith("url")) {
              var i = t.match(/url\((.+?)\)/);
              i && (e.backgroundImage = i[1]);
            }
          return e;
        }),
        m(["box-shadow", "text-shadow"], function (t) {
          for (
            var e = {},
              n = t.split(/\s/g).filter(function (t) {
                return "" !== t;
              }),
              r = [
                "shadowOffsetX",
                "shadowOffsetY",
                "shadowBlur",
                "shadowColor",
              ];
            n.length;

          ) {
            var i = n.shift();
            if (isNaN(Number(i))) d(i) && (e.shadowColor = i);
            else e[r.shift()] = Number(i);
          }
          return e;
        });
      var O = function () {
          (this.type = ""),
            (this.tagName = ""),
            (this.attrs = {}),
            (this.children = []),
            (this.text = "");
        },
        M = (function () {
          function t(t) {
            (this.input = ""), (this.index = 0), (this.input = t);
          }
          return (
            (t.prototype.stepNext = function () {
              this.index++;
            }),
            (t.prototype.cur = function () {
              return this.input[this.index];
            }),
            (t.prototype.twoChar = function () {
              return this.input[this.index] + this.input[this.index + 1];
            }),
            (t.prototype.stepWhile = function (t) {
              for (
                var e = "";
                this.index < this.input.length &&
                t &&
                t(this.input[this.index]);

              )
                e += this.input[this.index++];
              return e;
            }),
            (t.prototype.skipWhiteSpace = function () {
              this.stepWhile(function (t) {
                return /\s/.test(t);
              });
            }),
            (t.prototype.getText = function () {
              return this.stepWhile(function (t) {
                return /[a-zA-Z0-9_]/.test(t);
              });
            }),
            (t.prototype.eof = function () {
              return this.index >= this.input.length;
            }),
            t
          );
        })(),
        S = (function () {
          function t(t) {
            this.helper = new M(t);
          }
          return (
            (t.prototype.parse = function () {
              return this.parseNodes();
            }),
            (t.prototype.parseNodes = function () {
              for (
                var t = [];
                t.push(this.parseNode()),
                  this.helper.skipWhiteSpace(),
                  !this.helper.eof() && "</" !== this.helper.twoChar();

              );
              return t;
            }),
            (t.prototype.parseNode = function () {
              return (
                this.helper.skipWhiteSpace(),
                "<" === this.helper.cur()
                  ? this.parseElement()
                  : this.parseTextNode()
              );
            }),
            (t.prototype.parseElement = function () {
              var t,
                e = new O();
              (e.type = "element"), this.helper.stepNext();
              var n = this.helper.getText();
              if (
                ((e.tagName = n),
                (e.attrs = this.parseAttributes()),
                "/>" === this.helper.twoChar())
              )
                return this.helper.stepNext(), this.helper.stepNext(), e;
              if (">" !== this.helper.cur())
                throw new Error("解析标签开始失败");
              if (
                (this.helper.stepNext(),
                this.helper.skipWhiteSpace(),
                "</" !== this.helper.twoChar() &&
                  ((t = e.children).push.apply(t, this.parseNodes()),
                  this.helper.skipWhiteSpace()),
                "</" !== this.helper.twoChar())
              )
                throw new Error("解析标签结束失败");
              if (
                (this.helper.stepNext(),
                this.helper.stepNext(),
                this.helper.getText() !== n)
              )
                throw new Error("解析标签结束失败");
              if (">" !== this.helper.cur())
                throw new Error("解析标签结束失败");
              return this.helper.stepNext(), e;
            }),
            (t.prototype.parseTextNode = function () {
              var t = new O(),
                e = this.helper.stepWhile(function (t) {
                  return /[^<]/.test(t);
                });
              return (t.type = "text"), (t.tagName = "text"), (t.text = e), t;
            }),
            (t.prototype.parseAttributes = function () {
              var t = {};
              for (
                this.helper.skipWhiteSpace();
                !this.helper.eof() &&
                ">" !== this.helper.cur() &&
                "/>" !== this.helper.twoChar();

              ) {
                var e = this.helper.stepWhile(function (t) {
                  return /[^\s=]/.test(t);
                });
                this.helper.skipWhiteSpace(),
                  this.helper.stepNext(),
                  this.helper.skipWhiteSpace();
                var n = "";
                '"' === this.helper.cur()
                  ? (this.helper.stepNext(),
                    (n = this.helper.stepWhile(function (t) {
                      return /[^"]/.test(t);
                    })),
                    this.helper.stepNext())
                  : "'" === this.helper.cur()
                  ? (this.helper.stepNext(),
                    (n = this.helper.stepWhile(function (t) {
                      return /[^']/.test(t);
                    })),
                    this.helper.stepNext())
                  : (n = this.helper.stepWhile(function (t) {
                      return /[^\s</>/]/.test(t);
                    })),
                  (t[e] = w(e, n)),
                  this.helper.skipWhiteSpace();
              }
              return t;
            }),
            (t.prototype.removeQuote = function (t) {
              var e = t;
              return (
                /^["']/.test(e[0]) && (e = e.slice(1)),
                /["']$/.test(e[e.length - 1]) && (e = e.slice(0, -1)),
                e
              );
            }),
            t
          );
        })();
      function C(t) {
        return (C =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var j = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
      function k(t) {
        return t ? t.replace(/^\s+|\s+$/g, "") : "";
      }
      var E = function (t, e) {
          e = e || {};
          var n = 1,
            r = 1;
          function i(t) {
            var e = t.match(/\n/g);
            e && (n += e.length);
            var i = t.lastIndexOf("\n");
            r = ~i ? t.length - i : r + t.length;
          }
          function o() {
            var t = { line: n, column: r };
            return function (e) {
              return (e.position = new a(t)), f(), e;
            };
          }
          function a(t) {
            (this.start = t),
              (this.end = { line: n, column: r }),
              (this.source = e.source);
          }
          a.prototype.content = t;
          var s = [];
          function u(i) {
            var o = new Error(e.source + ":" + n + ":" + r + ": " + i);
            if (
              ((o.reason = i),
              (o.filename = e.source),
              (o.line = n),
              (o.column = r),
              (o.source = t),
              !e.silent)
            )
              throw o;
            s.push(o);
          }
          function c() {
            return d(/^{\s*/);
          }
          function h() {
            return d(/^}/);
          }
          function l() {
            var e,
              n = [];
            for (
              f(), p(n);
              t.length && "}" != t.charAt(0) && (e = E() || N());

            )
              !1 !== e && (n.push(e), p(n));
            return n;
          }
          function d(e) {
            var n = e.exec(t);
            if (n) {
              var r = n[0];
              return i(r), (t = t.slice(r.length)), n;
            }
          }
          function f() {
            d(/^\s*/);
          }
          function p(t) {
            var e;
            for (t = t || []; (e = g()); ) !1 !== e && t.push(e);
            return t;
          }
          function g() {
            var e = o();
            if ("/" == t.charAt(0) && "*" == t.charAt(1)) {
              for (
                var n = 2;
                "" != t.charAt(n) &&
                ("*" != t.charAt(n) || "/" != t.charAt(n + 1));

              )
                ++n;
              if (((n += 2), "" === t.charAt(n - 1)))
                return u("End of comment missing");
              var a = t.slice(2, n - 2);
              return (
                (r += 2),
                i(a),
                (t = t.slice(n)),
                (r += 2),
                e({ type: "comment", comment: a })
              );
            }
          }
          function y() {
            var t = d(/^([^{]+)/);
            if (t)
              return k(t[0])
                .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, "")
                .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (t) {
                  return t.replace(/,/g, "‌");
                })
                .split(/\s*(?![^(]*\)),\s*/)
                .map(function (t) {
                  return t.replace(/\u200C/g, ",");
                });
          }
          function v() {
            var t = o(),
              e = d(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
            if (e) {
              if (((e = k(e[0])), !d(/^:\s*/)))
                return u("property missing ':'");
              var n = d(
                  /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/,
                ),
                r = t({
                  type: "declaration",
                  property: e.replace(j, ""),
                  value: n ? k(n[0]).replace(j, "") : "",
                });
              return d(/^[;\s]*/), r;
            }
          }
          function m() {
            var t,
              e = [];
            if (!c()) return u("missing '{'");
            for (p(e); (t = v()); ) !1 !== t && (e.push(t), p(e));
            return h() ? e : u("missing '}'");
          }
          function b() {
            for (
              var t, e = [], n = o();
              (t = d(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/));

            )
              e.push(t[1]), d(/^,\s*/);
            if (e.length)
              return n({ type: "keyframe", values: e, declarations: m() });
          }
          var x,
            w = S("import"),
            O = S("charset"),
            M = S("namespace");
          function S(t) {
            var e = new RegExp("^@" + t + "\\s*([^;]+);");
            return function () {
              var n = o(),
                r = d(e);
              if (r) {
                var i = { type: t };
                return (i[t] = r[1].trim()), n(i);
              }
            };
          }
          function E() {
            if ("@" == t[0])
              return (
                (function () {
                  var t = o();
                  if ((e = d(/^@([-\w]+)?keyframes\s*/))) {
                    var e,
                      n = e[1];
                    if (!(e = d(/^([-\w]+)\s*/)))
                      return u("@keyframes missing name");
                    var r,
                      i = e[1];
                    if (!c()) return u("@keyframes missing '{'");
                    for (var a = p(); (r = b()); )
                      a.push(r), (a = a.concat(p()));
                    return h()
                      ? t({
                          type: "keyframes",
                          name: i,
                          vendor: n,
                          keyframes: a,
                        })
                      : u("@keyframes missing '}'");
                  }
                })() ||
                (function () {
                  var t = o(),
                    e = d(/^@media *([^{]+)/);
                  if (e) {
                    var n = k(e[1]);
                    if (!c()) return u("@media missing '{'");
                    var r = p().concat(l());
                    return h()
                      ? t({ type: "media", media: n, rules: r })
                      : u("@media missing '}'");
                  }
                })() ||
                (function () {
                  var t = o(),
                    e = d(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
                  if (e)
                    return t({
                      type: "custom-media",
                      name: k(e[1]),
                      media: k(e[2]),
                    });
                })() ||
                (function () {
                  var t = o(),
                    e = d(/^@supports *([^{]+)/);
                  if (e) {
                    var n = k(e[1]);
                    if (!c()) return u("@supports missing '{'");
                    var r = p().concat(l());
                    return h()
                      ? t({ type: "supports", supports: n, rules: r })
                      : u("@supports missing '}'");
                  }
                })() ||
                w() ||
                O() ||
                M() ||
                (function () {
                  var t = o(),
                    e = d(/^@([-\w]+)?document *([^{]+)/);
                  if (e) {
                    var n = k(e[1]),
                      r = k(e[2]);
                    if (!c()) return u("@document missing '{'");
                    var i = p().concat(l());
                    return h()
                      ? t({
                          type: "document",
                          document: r,
                          vendor: n,
                          rules: i,
                        })
                      : u("@document missing '}'");
                  }
                })() ||
                (function () {
                  var t = o();
                  if (d(/^@page */)) {
                    var e = y() || [];
                    if (!c()) return u("@page missing '{'");
                    for (var n, r = p(); (n = v()); )
                      r.push(n), (r = r.concat(p()));
                    return h()
                      ? t({ type: "page", selectors: e, declarations: r })
                      : u("@page missing '}'");
                  }
                })() ||
                (function () {
                  var t = o();
                  if (d(/^@host\s*/)) {
                    if (!c()) return u("@host missing '{'");
                    var e = p().concat(l());
                    return h()
                      ? t({ type: "host", rules: e })
                      : u("@host missing '}'");
                  }
                })() ||
                (function () {
                  var t = o();
                  if (d(/^@font-face\s*/)) {
                    if (!c()) return u("@font-face missing '{'");
                    for (var e, n = p(); (e = v()); )
                      n.push(e), (n = n.concat(p()));
                    return h()
                      ? t({ type: "font-face", declarations: n })
                      : u("@font-face missing '}'");
                  }
                })()
              );
          }
          function N() {
            var t = o(),
              e = y();
            return e
              ? (p(), t({ type: "rule", selectors: e, declarations: m() }))
              : u("selector missing");
          }
          return (function t(e, n) {
            var r = e && "string" == typeof e.type,
              i = r ? e : n;
            for (var o in e) {
              var a = e[o];
              Array.isArray(a)
                ? a.forEach(function (e) {
                    t(e, i);
                  })
                : a && "object" === C(a) && t(a, i);
            }
            r &&
              Object.defineProperty(e, "parent", {
                configurable: !0,
                writable: !0,
                enumerable: !1,
                value: n || null,
              });
            return e;
          })(
            ((x = l()),
            {
              type: "stylesheet",
              stylesheet: { source: e.source, rules: x, parsingErrors: s },
            }),
          );
        },
        N = n(23),
        T = n.n(N);
      function P(t) {
        return (P =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var I = function () {
          (this.dom = null),
            (this.style = null),
            (this.children = []),
            (this.originChildren = []);
        },
        B = { "font-family": "serif" },
        A = [
          "font",
          "fontFamily",
          "fontWeight",
          "fontSize",
          "fontVariant",
          "fontStretch",
          "textIndent",
          "textAlign",
          "textShadow",
          "lineHeight",
          "color",
          "direction",
          "wordSpacing",
          "letterSpacing",
          "textTransform",
          "captionSide",
          "borderCollapse",
          "emptyCells",
          "listStyleType",
          "listStyleImage",
          "listStylePosition",
          "listStyle",
          "visibility",
          "cursor",
        ],
        L = (function () {
          function t(t, e) {
            (this.domTree = null),
              (this.cssTree = null),
              (this.rulesHash = { ids: {}, classes: {}, tagNames: {} }),
              (this.domTree = t),
              (this.cssTree = e);
          }
          return (
            (t.prototype.parse = function () {
              return (
                this.parseRulesHash(this.cssTree),
                this.genStyleTree(this.domTree)
              );
            }),
            (t.prototype.parseRulesHash = function (t) {
              for (
                var e = this.rulesHash, n = 0, r = t.stylesheet.rules;
                n < r.length;
                n++
              ) {
                var i = r[n];
                if ("rule" === i.type)
                  for (var o = 0, a = i.selectors; o < a.length; o++) {
                    var s = a[o],
                      u = this.genKeySelector(s);
                    switch (u[0]) {
                      case "#":
                        var c = u.slice(1);
                        e.ids[c] = Object(h.f)(
                          Object(h.f)([], e.ids[c] || []),
                          [
                            {
                              selector: s,
                              specificity: this.genSpecificity(s),
                              style: this.genStyleFromRule(i),
                            },
                          ],
                        );
                        break;
                      case ".":
                        var l = u.slice(1);
                        e.classes[l] = Object(h.f)(
                          Object(h.f)([], e.classes[l] || []),
                          [
                            {
                              selector: s,
                              specificity: this.genSpecificity(s),
                              style: this.genStyleFromRule(i),
                            },
                          ],
                        );
                        break;
                      default:
                        e.tagNames[u] = Object(h.f)(
                          Object(h.f)([], e.tagNames[u] || []),
                          [
                            {
                              selector: s,
                              specificity: this.genSpecificity(s),
                              style: this.genStyleFromRule(i),
                            },
                          ],
                        );
                    }
                  }
              }
            }),
            (t.prototype.genStyleTree = function (t) {
              for (var e = new I(), n = [[t, [], e]]; n.length; ) {
                var r = n.pop(),
                  i = r[0],
                  o = r[1],
                  a = r[2],
                  s = r[3];
                (a.dom = i),
                  (a.style = this.computeCSS(
                    i,
                    o,
                    null == s ? void 0 : s.style,
                  ));
                for (var u = 0, c = i.children; u < c.length; u++) {
                  var l = c[u],
                    d = new I();
                  a.originChildren.push(d),
                    n.push([l, Object(h.f)(Object(h.f)([], o), [i]), d, a]);
                }
              }
              return e;
            }),
            (t.prototype.genSpecificity = function (t) {
              var e,
                n,
                r =
                  (null === (e = t.match(/#\w+/g)) || void 0 === e
                    ? void 0
                    : e.length) || 0,
                i =
                  (null === (n = t.match(/\.\w+/g)) || void 0 === n
                    ? void 0
                    : n.length) || 0;
              return (
                100 * r +
                10 * i +
                (t.split(/\s+|#|\./).filter(function (t) {
                  return "" !== t;
                }).length -
                  r -
                  i)
              );
            }),
            (t.prototype.genKeySelector = function (t) {
              var e = p(t, /\s/).pop(),
                n = e.match(/(#[^\.#]+)/);
              return (null == n ? void 0 : n.length) > 0 ||
                (null == (n = e.match(/\.[^\.#]+/)) ? void 0 : n.length) > 0
                ? n[0]
                : e;
            }),
            (t.prototype.genStyleFromRule = function (t) {
              return this.genStyleFromDeclaration(t.declarations);
            }),
            (t.prototype.genStyleFromDeclaration = function (t) {
              var e = {};
              return (
                t.forEach(function (t) {
                  var n = t.value;
                  e[t.property] = n;
                }),
                e
              );
            }),
            (t.prototype.computeCSS = function (t, e, n) {
              var r = this,
                i = [];
              f(t, function (t, e) {
                switch (t) {
                  case "id":
                    i.push.apply(i, r.rulesHash.ids[e] || []);
                    break;
                  case "class":
                    i.push.apply(i, r.rulesHash.classes[e] || []);
                    break;
                  case "tagName":
                    i.push.apply(i, r.rulesHash.tagNames[e] || []);
                }
              });
              var o = i.filter(function (t) {
                for (
                  var n = p(t.selector, /\s+/g),
                    r = n.length - 2,
                    i = e.length - 1,
                    o = !0;
                  r > -1;
                  r--
                ) {
                  for (var a = !1; i > -1; i--) {
                    if (g(e[i], n[r])) {
                      a = !0;
                      break;
                    }
                  }
                  if (!a) {
                    o = !1;
                    break;
                  }
                }
                return o;
              });
              o.sort(function (t, e) {
                return t.specificity - e.specificity;
              });
              for (
                var a = o.reduce(
                    function (t, e) {
                      return Object.assign(t, e.style);
                    },
                    Object(h.a)({}, B),
                  ),
                  s = {},
                  u = 0,
                  c = Object.entries(a);
                u < c.length;
                u++
              ) {
                var l = c[u],
                  d = l[0],
                  y = l[1],
                  v = d
                    .split("-")
                    .map(function (t, e) {
                      return e > 0 ? "" + t[0].toUpperCase() + t.slice(1) : t;
                    })
                    .join(""),
                  m = w(d, y);
                "object" === P(m)
                  ? (s = Object(h.a)(Object(h.a)({}, s), m))
                  : (s[v] = m);
              }
              if (n) {
                for (var b = 0, x = Object.entries(s); b < x.length; b++) {
                  var O = x[b];
                  d = O[0];
                  "inherit" === (y = O[1]) &&
                    A.includes(d) &&
                    (delete s[d], void 0 !== n[d] && (s[d] = n[d]));
                }
                for (var M = 0, S = Object.entries(n); M < S.length; M++) {
                  var C = S[M];
                  (d = C[0]), (y = C[1]);
                  A.includes(d) && !s[d] && (s[d] = y);
                }
              }
              return s;
            }),
            t
          );
        })(),
        D = {};
      function _(t, e) {
        D[t] = e;
      }
      function R(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        var r = D[t];
        if (!r) throw new Error("找不到标签" + t + "的构造函数");
        var i = new (r.bind.apply(r, Object(h.f)([void 0], e)))();
        return i;
      }
      var Y = (function () {
          function t(t) {
            var e = this;
            (this.styleNode = null),
              (this.gNode = null),
              (this.parent = null),
              (this.children = []),
              (this.isMounted = !1),
              (this.isDisplay = !0),
              (this._parentGNode = null),
              (this._prevAttrs = null),
              (this._prevStyle = null),
              (this._prevLayout = null),
              (this.events = {}),
              (this.trigger = function (t) {
                for (var n, r, i = t.target; i && !i.get("uiNode"); )
                  i = i.get("parent");
                (t.targetGNode = i || null),
                  (t.uiNode =
                    null !== (n = null == i ? void 0 : i.get("uiNode")) &&
                    void 0 !== n
                      ? n
                      : null),
                  null === (r = e.events[t.type]) ||
                    void 0 === r ||
                    r.forEach(function (n) {
                      return n(t, e);
                    });
              }),
              (this.styleNode = t);
          }
          return (
            Object.defineProperty(t.prototype, "top", {
              get: function () {
                var t, e;
                return null ===
                  (e =
                    null === (t = this.styleNode) || void 0 === t
                      ? void 0
                      : t.layout) || void 0 === e
                  ? void 0
                  : e.top;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "left", {
              get: function () {
                var t, e;
                return null ===
                  (e =
                    null === (t = this.styleNode) || void 0 === t
                      ? void 0
                      : t.layout) || void 0 === e
                  ? void 0
                  : e.left;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "width", {
              get: function () {
                var t, e;
                return null ===
                  (e =
                    null === (t = this.styleNode) || void 0 === t
                      ? void 0
                      : t.layout) || void 0 === e
                  ? void 0
                  : e.width;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "height", {
              get: function () {
                var t, e;
                return null ===
                  (e =
                    null === (t = this.styleNode) || void 0 === t
                      ? void 0
                      : t.layout) || void 0 === e
                  ? void 0
                  : e.height;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "tagName", {
              get: function () {
                var t, e;
                return null ===
                  (e =
                    null === (t = this.styleNode) || void 0 === t
                      ? void 0
                      : t.dom) || void 0 === e
                  ? void 0
                  : e.tagName;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "style", {
              get: function () {
                var t;
                return null === (t = this.styleNode) || void 0 === t
                  ? void 0
                  : t.style;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "attributes", {
              get: function () {
                var t, e;
                return null ===
                  (e =
                    null === (t = this.styleNode) || void 0 === t
                      ? void 0
                      : t.dom) || void 0 === e
                  ? void 0
                  : e.attrs;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "_layout", {
              get: function () {
                var t;
                return null === (t = this.styleNode) || void 0 === t
                  ? void 0
                  : t._layout;
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "parentGNode", {
              get: function () {
                var t;
                return (
                  (null === (t = this.parent) || void 0 === t
                    ? void 0
                    : t.gNode) || this._parentGNode
                );
              },
              set: function (t) {
                this._parentGNode = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.setParent = function (t) {
              this.parent = t;
            }),
            (t.prototype.appendChild = function () {
              for (var t = this, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              e.forEach(function (e) {
                e.setParent(t),
                  t.children.push(e),
                  e.styleNode &&
                    t.styleNode &&
                    !t.styleNode.originChildren.includes(e.styleNode) &&
                    t.styleNode.originChildren.push(e.styleNode);
              }),
                this.reflow();
            }),
            (t.prototype.removeChild = function (t) {
              t && t.remove();
            }),
            (t.prototype.remove = function () {
              var t,
                e,
                n = this.parent;
              null === (t = this.gNode) || void 0 === t || t.remove(),
                n &&
                  (n.children.splice(1, n.children.indexOf(this)),
                  null === (e = n.styleNode) ||
                    void 0 === e ||
                    e.children.splice(1, n.children.indexOf(this.styleNode)),
                  this.isMounted && n.reflow()),
                this.isMounted && this.unmount();
            }),
            (t.prototype.query = function (t) {
              if ("string" == typeof t)
                for (
                  var e = [
                    [
                      this,
                      t.split(/\s+/g).filter(function (t) {
                        return "" !== t;
                      }),
                    ],
                  ];
                  e.length;

                )
                  for (
                    var n = e.shift(),
                      r = n[0],
                      i = n[1],
                      o = 0,
                      a = r.children;
                    o < a.length;
                    o++
                  ) {
                    var s = a[o],
                      u = [];
                    if (s.styleNode && g(s.styleNode.dom, i[0])) {
                      if (0 === i.slice(1).length) return s;
                      u = i.slice(1);
                    } else u = i;
                    e.push([s, u]);
                  }
            }),
            (t.prototype.queryAll = function (t) {
              if ("string" == typeof t) {
                for (
                  var e = [],
                    n = [
                      [
                        this,
                        t.split(/\s+/g).filter(function (t) {
                          return "" !== t;
                        }),
                        e,
                      ],
                    ];
                  n.length;

                )
                  for (
                    var r = n.shift(),
                      i = r[0],
                      o = r[1],
                      a = r[2],
                      s = 0,
                      u = i.children;
                    s < u.length;
                    s++
                  ) {
                    var c = u[s],
                      h = [];
                    c.styleNode && g(c.styleNode.dom, o[0])
                      ? 0 === o.slice(1).length
                        ? (a.push(c), (h = [o[0]]))
                        : (h = o.slice(1))
                      : (h = o),
                      n.push([c, h, a]);
                  }
                return e;
              }
            }),
            (t.prototype.manualMount = function (t) {
              (this.parentGNode = t), this.layout(), this.mount();
            }),
            (t.prototype.reflow = function () {
              var t;
              this.parentGNode &&
                ("absolute" !==
                  (null === (t = this.style) || void 0 === t
                    ? void 0
                    : t.position) && this.parent
                  ? this.parent.reflow()
                  : (this.layout(), this.render()));
            }),
            (t.prototype.layout = function () {
              (this._prevLayout = Object(h.a)({}, this._layout || {})),
                this.clearLayout(),
                (function (t) {
                  for (var e = [t]; e.length; ) {
                    var n = e.pop();
                    n.children = n.originChildren.filter(function (t) {
                      return "none" !== t.style.display && (e.push(t), !0);
                    });
                  }
                  T()(t);
                })(this.styleNode);
            }),
            (t.prototype.mount = function () {
              var t;
              this.isMounted ||
                ("none" !==
                (null === (t = this.style) || void 0 === t ? void 0 : t.display)
                  ? ((this._prevAttrs = this.attributes),
                    (this._prevStyle = this.style),
                    this.draw(this.parentGNode),
                    (this.isMounted = !0),
                    this.gNode.set("uiNode", this),
                    this.gNode.on("*", this.trigger),
                    this.children.forEach(function (t) {
                      return t.mount();
                    }),
                    this.didMount())
                  : (this.isDisplay = !1));
            }),
            (t.prototype.didMount = function () {}),
            (t.prototype.unmount = function () {
              this.isMounted &&
                ((this.isMounted = !1),
                this.children.forEach(function (t) {
                  return t.unmount();
                }),
                this.didUnmount());
            }),
            (t.prototype.didUnmount = function () {}),
            (t.prototype.render = function () {
              var t, e, n;
              if (this.isMounted) {
                if (
                  "none" ===
                  (null === (t = this.style) || void 0 === t
                    ? void 0
                    : t.display)
                )
                  return (
                    (this.isDisplay = !1),
                    null === (e = this.gNode) || void 0 === e || e.remove(!1),
                    !1
                  );
                !1 === this.isDisplay &&
                  ((this.isDisplay = !0),
                  null === (n = this.parentGNode) ||
                    void 0 === n ||
                    n.add(this.gNode));
                var r = this.shouldUpdate(
                  this._prevAttrs,
                  this._prevStyle,
                  this._prevLayout,
                );
                r && this.draw(),
                  this.children.forEach(function (t) {
                    return t.render();
                  }),
                  r && this.didUpdate();
              } else this.mount();
            }),
            (t.prototype.didUpdate = function () {}),
            (t.prototype.shouldUpdate = function (t, e, n) {
              return !0;
            }),
            (t.prototype.draw = function (t) {}),
            (t.prototype.animate = function () {}),
            (t.prototype.clearLayout = function () {
              (this.styleNode.isDirty = !0),
                this.children.forEach(function (t) {
                  t.clearLayout();
                });
            }),
            (t.prototype.setAttribute = function (t, e) {
              var n;
              if (this.styleNode && this.styleNode.dom) {
                if (
                  ((this._prevAttrs = Object(h.a)(
                    {},
                    this.styleNode.dom.attrs,
                  )),
                  (this.styleNode.dom.attrs[t] = e),
                  !(null === (n = this.parent) || void 0 === n
                    ? void 0
                    : n.isMounted))
                )
                  return;
                this.render();
              }
            }),
            (t.prototype.setStyle = function (t, e) {
              if (this.styleNode && this.styleNode.style) {
                if (
                  ((this._prevStyle = Object(h.a)(
                    {},
                    this.styleNode.dom.style,
                  )),
                  (this.styleNode.style[t] = e),
                  this.parent && !this.parent.isMounted)
                )
                  return;
                y[t] ? this.reflow() : this.render();
              }
            }),
            (t.prototype.getAttribute = function (t) {
              var e, n;
              return null ===
                (n =
                  null === (e = this.styleNode) || void 0 === e
                    ? void 0
                    : e.dom) || void 0 === n
                ? void 0
                : n.attrs[t];
            }),
            (t.prototype.getStyle = function (t) {
              var e, n, r;
              return null !==
                (n =
                  null === (e = this.styleNode) || void 0 === e
                    ? void 0
                    : e.layout[t]) && void 0 !== n
                ? n
                : null === (r = this.styleNode) || void 0 === r
                ? void 0
                : r.style[t];
            }),
            (t.prototype.setText = function (t) {
              var e = this.query("text");
              e &&
                e.styleNode &&
                e.styleNode.dom &&
                ((e.styleNode.dom.text = t), e.render());
            }),
            (t.prototype.on = function (t, e) {
              this.events[t] = Object(h.f)(
                Object(h.f)([], this.events[t] || []),
                [e],
              );
            }),
            (t.prototype.off = function (t, e) {
              if (e) {
                var n = this.events[t],
                  r = null == n ? void 0 : n.indexOf(e);
                r && -1 !== r && (null == n || n.splice(r, 1));
              } else delete this.events[t];
            }),
            t
          );
        })(),
        F = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.backgroudNode = null), e;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.draw = function (t) {
              var e, n;
              this.gNode ||
                (this.gNode = t.addGroup({
                  id:
                    null === (e = this.attributes) || void 0 === e
                      ? void 0
                      : e.id,
                  className: this.styleNode.dom.attrs.class,
                }));
              var r = this.gNode,
                i = this.styleNode;
              r.resetMatrix(),
                null === (n = this.backgroudNode) || void 0 === n || n.remove();
              var o = (this.backgroudNode = r.addGroup());
              r.translate(this.left, this.top);
              var a = i.style;
              "number" == typeof a.zIndex && r.setZIndex(a.zIndex),
                o.addShape("rect", {
                  attrs: {
                    x: 0,
                    y: 0,
                    fill: a.backgroundColor || "#fff",
                    fillOpacity: a.backgroundOpacity,
                    opacity: a.opacity,
                    width: this.width,
                    height: this.height,
                    radius: [
                      a.borderTopLeftRadius || 0,
                      a.borderTopRightRadius || 0,
                      a.borderBottomLeftRadius || 0,
                      a.borderBottomLeftRadius || 0,
                    ],
                    shadowBlur: a.shadowBlur || 0,
                    shadowColor: a.shadowColor || null,
                    shadowOffsetX: a.shadowOffsetX || 0,
                    shadowOffsetY: a.shadowOffsetY || 0,
                  },
                  capture: "none" !== a.pointerEvents,
                }),
                a.backgroundImage &&
                  o.addShape("image", {
                    attrs: {
                      x: 0,
                      y: 0,
                      img: a.url,
                      width: this.width,
                      height: this.height,
                    },
                    capture: !1,
                  });
              var s = {
                attrs: {
                  x: (a.borderWidth || 0) / 2,
                  y: (a.borderWidth || 0) / 2,
                  lineWidth: a.borderWidth,
                  stroke: a.borderColor,
                  width: this.width - (a.borderWidth || 0),
                  height: this.height - (a.borderWidth || 0),
                  radius: [
                    (a.borderTopLeftRadius || 0) *
                      ((this.width - (a.borderWidth || 0)) / this.width),
                    (a.borderTopRightRadius || 0) *
                      ((this.width - (a.borderWidth || 0)) / this.width),
                    (a.borderBottomLeftRadius || 0) *
                      ((this.width - (a.borderWidth || 0)) / this.width),
                    (a.borderBottomLeftRadius || 0) *
                      ((this.width - (a.borderWidth || 0)) / this.width),
                  ],
                },
                capture: !1,
              };
              "dashed" === a.borderStyle &&
                (s.attrs.lineDash = a.lineDash || [2, 2]),
                o.addShape("rect", s),
                "hidden" === a.overflow &&
                  r.setClip({
                    type: "rect",
                    attrs: {
                      width: this.width,
                      height: this.height,
                      radius: [
                        a.borderTopLeftRadius || 0,
                        a.borderTopRightRadius || 0,
                        a.borderBottomLeftRadius || 0,
                        a.borderBottomLeftRadius || 0,
                      ],
                    },
                  }),
                o.toBack();
            }),
            e
          );
        })(Y),
        z = n(13),
        X = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.getAttrs = function () {
              var t = this.styleNode.style;
              return {
                x: this.styleNode.layout.left,
                y: this.styleNode.layout.top,
                textAlign: t.textAlign,
                fill: t.color,
                fontSize: t.fontSize || 12,
                fontStyle: t.fontStyle,
                fontFamily: t.fontFamily,
                lineHeight: t.lineHeight || 0,
                fontVariant: t.fontVariant,
                fontWeight: t.fontWeight,
                textBaseline: "top",
                opacity: t.opacity,
                fillOpacity: t.backgroundOpacity,
              };
            }),
            (e.prototype.draw = function (t) {
              var e = this.getAttrs();
              this.gNode ||
                (this.gNode = t.addShape("text", {
                  type: "text",
                  attrs: e,
                  capture: !1,
                })),
                this.update();
            }),
            (e.prototype.getMultiLineText = function (t, e, n) {
              var r,
                i =
                  null === (r = this.parent.gNode.get("canvas")) || void 0 === r
                    ? void 0
                    : r.get("context");
              if (!i) return t;
              i.save();
              var o = Object(z.assembleFont)(e);
              if (((i.font = o), i.measureText(t).width < n)) return t;
              for (var a = "", s = 0, u = 0, c = t; u < c.length; u++) {
                var h = c[u],
                  l = i.measureText(h).width;
                (s += l) >= n ? ((s = l), (a += "\n" + h)) : (a += h);
              }
              return i.restore(), a;
            }),
            (e.prototype.update = function () {
              var t = this.styleNode.style,
                e = this.getAttrs(),
                n = this.gNode;
              switch ((n.attr(e), n.resetMatrix(), t.textAlign)) {
                case "center":
                  n.translate(this.styleNode.layout.width / 2);
                  break;
                case "right":
                  n.translate(this.styleNode.layout.width);
              }
              "nowrap" === t.whiteSpace
                ? n.attr("text", String(this.styleNode.dom.text))
                : n.attr(
                    "text",
                    this.getMultiLineText(
                      String(this.styleNode.dom.text),
                      e,
                      this.styleNode.layout.width,
                    ),
                  );
            }),
            e
          );
        })(Y),
        W = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.getAttrs = function () {
              var t = this.styleNode,
                e = t.style,
                n = t.layout,
                r = t.dom;
              return Object(h.a)(
                {
                  fill: e.backgroundColor,
                  lineWidth: e.borderWidth,
                  fillOpacity: e.backgroundOpacity,
                  stroke: e.borderColor,
                  width: n.width - (e.borderWidth || 0),
                  height: n.height - (e.borderWidth || 0),
                },
                r.attrs,
              );
            }),
            (e.prototype.draw = function (t) {
              var e = this.styleNode,
                n = this.getAttrs(),
                r = e.dom;
              this.gNode ||
                (this.gNode = t.addShape(r.attrs.type, { attrs: n })),
                this.update();
            }),
            (e.prototype.update = function () {
              var t,
                e = this.getAttrs(),
                n = this.gNode,
                r = "none" !== this.styleNode.style.pointerEvents;
              n.attr(e),
                n.set("capture", r),
                n.resetMatrix(),
                n.translate(this.left, this.top),
                "number" ==
                  typeof (null === (t = this.style) || void 0 === t
                    ? void 0
                    : t.zIndex) && n.setZIndex(this.style.zIndex);
            }),
            e
          );
        })(Y),
        G = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.draw = function (t) {
              var e = {
                  x: this.styleNode.layout.left,
                  y: this.styleNode.layout.top,
                  img: this.styleNode.dom.attrs.src,
                  width: this.styleNode.layout.width || 0,
                  height: this.styleNode.layout.height || 0,
                },
                n = "none" !== this.styleNode.style.pointerEvents;
              this.gNode ||
                (this.gNode = t.addShape("image", {
                  type: "image",
                  attrs: e,
                  capture: n,
                }));
              var r = this.gNode;
              switch (
                (r.resetMatrix(),
                r.set("capture", n),
                r.attr(e),
                "number" == typeof this.styleNode.style.zIndex &&
                  r.setZIndex(this.styleNode.style.zIndex),
                this.styleNode.style.textAlign)
              ) {
                case "center":
                  r.translate(this.styleNode.layout.width / 2);
                  break;
                case "right":
                  r.translate(this.styleNode.layout.width);
              }
            }),
            e
          );
        })(Y),
        q = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return Object(h.c)(e, t), e;
        })(F);
      function H(t, e, n) {
        var r = U(t, e, !0);
        return r.manualMount(n), r;
      }
      function V(t, e, n) {
        var r = U(t, e, !1);
        return n && r.manualMount(n), r;
      }
      function U(t, e, n) {
        void 0 === n && (n = !1);
        for (
          var r = (function (t, e) {
              return new L(t, e).parse();
            })(
              (function (t, e) {
                var n;
                void 0 === e && (e = !0);
                var r = new S(t).parse(),
                  i = r[0];
                return (
                  "root" !==
                    (null === (n = r[0]) || void 0 === n
                      ? void 0
                      : n.tagName) &&
                    e &&
                    (((i = new O()).tagName = "root"), (i.children = r)),
                  i
                );
              })(t, n),
              E(e),
            ),
            i = R(r.dom.tagName, r),
            o = [[r, i]];
          o.length;

        )
          for (
            var a = o.pop(), s = a[0], u = a[1], c = 0, h = s.originChildren;
            c < h.length;
            c++
          ) {
            var l = h[c],
              d = R(l.dom.tagName, l);
            u.children.push(d), d.setParent(u), o.push([l, d]);
          }
        return i;
      }
      _("div", F), _("text", X), _("shape", W), _("image", G), _("root", q);
      var Z = {};
      function K(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        var r = Z[t];
        null == r ||
          r.forEach(function (t) {
            t.apply(null, e);
          });
      }
      function Q(t, e) {
        Z[t] = Object(h.g)(Z[t] || [], [e]);
      }
      var $ = { fill: "#416180", opacity: 0.05 },
        J = { fill: "#416180", opacity: 0.15, radius: 5 },
        tt = { fill: "#5B8FF9", opacity: 0.3, cursor: "grab" },
        et = {
          width: 2,
          height: 26,
          fill: "#1890ff",
          stroke: "#1890ff",
          opacity: 1,
          cursor: "ew-resize",
          highLightFill: "#0050b3",
        },
        nt = {
          fill: "#fff",
          stroke: "#1890ff",
          radius: 15,
          opacity: 1,
          lineWidth: 2,
          cursor: "ew-resize",
        },
        rt = {
          textBaseline: "middle",
          fill: "#000",
          opacity: 0.45,
          fontSize: 12,
        },
        it = { fill: "#607889", opacity: 0.35, fontSize: 12, width: 50 },
        ot = { width: 1, height: 4, fill: "#ccc" },
        at = 2,
        st = 18,
        ut = { height: 4, width: 1, fill: "#BFBFBF" },
        ct = { fill: "#8c8c8c", fontSize: 10, width: 50 },
        ht = { fill: "#5B8FF9" },
        lt = { fill: "#e6e8e9" },
        dt = {
          speed: 1,
          contentWidth: 200,
          height: 60,
          fill: "#fff",
          stroke: "#fff",
          hideTimeTypeController: !1,
          preBtnStyle: { fill: "#aaa" },
          nextBtnStyle: { fill: "#aaa" },
          playBtnStyle: { fill: "#aaa" },
        };
      var ft = function (t, e) {
        var n = e.height,
          r = (void 0 === n ? 16 : n) / 2,
          i = "";
        return (
          "next" === t &&
            (i =
              "\n      <shape  type='path' path='[\n        [\"M\", 0, " +
              (0 - r) +
              '],\n        ["L", ' +
              r +
              ', 0],\n        ["L", 0, ' +
              r +
              '],\n        ["Z", 0, ' +
              (0 - r) +
              '],\n        ["M", 0, 0],\n        ["L", ' +
              (0 - r) +
              ", " +
              (0 - r) +
              '],\n        ["L", ' +
              (0 - r) +
              ", " +
              r +
              '],\n        ["Z"]\n      ]\'/>  \n    '),
          "prev" === t &&
            (i =
              "\n      <shape  type='path' path='[\n        [\"M\", 0, " +
              (0 - r) +
              '],\n        ["L", ' +
              (0 - r) +
              ', 0],\n        ["L", 0, ' +
              (0 + r) +
              '],\n        ["L", 0, ' +
              (0 - r) +
              '],\n        ["M", 0, 0],\n        ["L", ' +
              (0 + r) +
              ", " +
              (0 - r) +
              '],\n        ["L", ' +
              (0 + r) +
              ", " +
              (0 + r) +
              '],\n        ["Z"]\n      ]\'/>  \n    '),
          V(
            i,
            "\n    shape {\n      margin-left: " +
              r +
              ";\n      width: " +
              r +
              ";\n      background: " +
              e.fill +
              ";\n    }\n  ",
          )
        );
      };
      var pt = function (t) {
          var e = t || {},
            n = e.radius,
            r = void 0 === n ? 15 : n,
            i = e.fill,
            o = (r * Math.sqrt(3)) / 2,
            a = V(
              '\n  <div id=\'play_Btn\'>\n    <shape class="start" type=\'path\' path=\'[\n      ["M", 0 , 0],\n      ["L", ' +
                o +
                " , " +
                r / 2 +
                '],\n      ["L", 0 , ' +
                r +
                "]\n    ]'/>\n    <div class=\"pause\">\n      <shape class='pause_0' type='rect' />\n      <shape class='pause_1' type='rect' />\n    </div>\n  </div>",
              "\n    #play_Btn {\n      width: " +
                2 * r +
                ";\n      height: " +
                2 * r +
                ";\n      background: #fff;\n      border: 1 solid " +
                i +
                ";\n      border-radius: " +
                r +
                ";\n    }\n    .start{\n      position: absolute;\n      top: " +
                r / 2 +
                ";\n      left: " +
                (r - o / 2 + 1) +
                " ;\n      background: " +
                i +
                ";\n      width: " +
                r +
                ";\n      height: " +
                r +
                ";\n    }\n    .pause {\n      display: none;\n    }\n    .pause shape {\n      position: absolute;\n      background: " +
                i +
                ";\n      width: " +
                r / 4 +
                ";\n      height: " +
                r +
                ";\n    }\n    .pause_1 {\n      left: " +
                (4 * r) / 8 +
                ";\n    }\n    .pause {\n      position: absolute;\n      top: " +
                r / 2 +
                ";\n      left: " +
                (5 * r) / 8 +
                ";\n    }\n  ",
            ),
            s = a.query(".start"),
            u = a.query(".pause"),
            c = !0;
          function h() {
            s.setStyle("display", c ? "flex" : "none"),
              u.setStyle("display", c ? "none" : "flex");
          }
          return (
            h(),
            a.on("tap", function () {
              K(c ? "SLIDER_PLAY" : "SLIDER_PAUSE"), (c = !c), h();
            }),
            a
          );
        },
        gt = n(0);
      var yt = function (t) {
        var e = Object(gt.d)({}, dt, t),
          n = e.wrapperWidth,
          r = e.contentWidth,
          i = e.height,
          o = e.fill,
          a = e.stroke,
          s = e.nextBtnStyle,
          u = e.preBtnStyle,
          c = e.playBtnStyle,
          h = e.speed,
          l = V(
            "\n    <div class='wrapper'>\n      <div class='content'> \n\n      </div>\n    </div>\n  ",
            "\n    .wrapper {\n      display: flex;\n      width: " +
              n +
              ";\n      height: " +
              i +
              ";\n      flex-wrap: nowrap;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      background: " +
              o +
              ";\n      " +
              (a ? "border: 1 solid " + a + ";" : "") +
              "\n    }\n    .content{\n      display: flex;\n      width: " +
              r +
              ";\n      flex-wrap: nowrap;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      background-opacity: 0;\n    }\n",
          ),
          d = ft("next", s),
          f = ft("prev", u),
          p = pt(c);
        return (
          K("SPEED_CHANGE", h),
          d.on("tap", function () {
            K("CONTROL_NEXT");
          }),
          f.on("tap", function () {
            K("CONTROL_PREV");
          }),
          l.query(".content").appendChild(f, p, d),
          l
        );
      };
      function vt(t, e) {
        void 0 === e && (e = 20);
        var n = !0,
          r = null,
          i = function () {
            n
              ? clearTimeout(r)
              : (null == t || t(),
                (r = setTimeout(function () {
                  i();
                }, e)));
          };
        return {
          play: function () {
            (n = !1), i();
          },
          stop: function () {
            n = !0;
          },
          setSpeed: function (t) {
            t > 10 && (t = 10), t < 1 && (t = 1), (e = 800 - (500 * t) / 9);
          },
        };
      }
      var mt = n(7),
        bt = {};
      function xt(t, e) {
        bt[t] = e;
      }
      var wt = (function () {
          function t(t) {
            (this.type = "base"),
              (this.isCategory = !1),
              (this.isLinear = !1),
              (this.isContinuous = !1),
              (this.isIdentity = !1),
              (this.values = []),
              (this.range = [0, 1]),
              (this.ticks = []),
              (this.__cfg__ = t),
              this.initCfg(),
              this.init();
          }
          return (
            (t.prototype.translate = function (t) {
              return t;
            }),
            (t.prototype.change = function (t) {
              Object(gt.a)(this.__cfg__, t), this.init();
            }),
            (t.prototype.clone = function () {
              return this.constructor(this.__cfg__);
            }),
            (t.prototype.getTicks = function () {
              var t = this;
              return Object(gt.z)(this.ticks, function (e, n) {
                return Object(gt.v)(e)
                  ? e
                  : { text: t.getText(e, n), tickValue: e, value: t.scale(e) };
              });
            }),
            (t.prototype.getText = function (t, e) {
              var n = this.formatter,
                r = n ? n(t, e) : t;
              return Object(gt.s)(r) || !Object(gt.r)(r.toString)
                ? ""
                : r.toString();
            }),
            (t.prototype.getConfig = function (t) {
              return this.__cfg__[t];
            }),
            (t.prototype.init = function () {
              Object(gt.a)(this, this.__cfg__),
                this.setDomain(),
                Object(gt.p)(this.getConfig("ticks")) &&
                  (this.ticks = this.calculateTicks());
            }),
            (t.prototype.initCfg = function () {}),
            (t.prototype.setDomain = function () {}),
            (t.prototype.calculateTicks = function () {
              var t = this.tickMethod,
                e = [];
              if (Object(gt.x)(t)) {
                var n = bt[t];
                if (!n)
                  throw new Error("There is no method to to calculate ticks!");
                e = n(this);
              } else Object(gt.r)(t) && (e = t(this));
              return e;
            }),
            (t.prototype.rangeMin = function () {
              return this.range[0];
            }),
            (t.prototype.rangeMax = function () {
              return this.range[1];
            }),
            (t.prototype.calcPercent = function (t, e, n) {
              return Object(gt.t)(t) ? (t - e) / (n - e) : NaN;
            }),
            (t.prototype.calcValue = function (t, e, n) {
              return e + t * (n - e);
            }),
            t
          );
        })(),
        Ot = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = "cat"), (e.isCategory = !0), e;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.buildIndexMap = function () {
              if (!this.translateIndexMap) {
                this.translateIndexMap = new Map();
                for (var t = 0; t < this.values.length; t++)
                  this.translateIndexMap.set(this.values[t], t);
              }
            }),
            (e.prototype.translate = function (t) {
              this.buildIndexMap();
              var e = this.translateIndexMap.get(t);
              return void 0 === e && (e = Object(gt.t)(t) ? t : NaN), e;
            }),
            (e.prototype.scale = function (t) {
              var e = this.translate(t),
                n = this.calcPercent(e, this.min, this.max);
              return this.calcValue(n, this.rangeMin(), this.rangeMax());
            }),
            (e.prototype.invert = function (t) {
              var e = this.max - this.min,
                n = this.calcPercent(t, this.rangeMin(), this.rangeMax()),
                r = Math.round(e * n) + this.min;
              return r < this.min || r > this.max ? NaN : this.values[r];
            }),
            (e.prototype.getText = function (e) {
              for (var n = [], r = 1; r < arguments.length; r++)
                n[r - 1] = arguments[r];
              var i = e;
              return (
                Object(gt.t)(e) &&
                  !this.values.includes(e) &&
                  (i = this.values[i]),
                t.prototype.getText.apply(this, Object(h.g)([i], n))
              );
            }),
            (e.prototype.initCfg = function () {
              this.tickMethod = "cat";
            }),
            (e.prototype.setDomain = function () {
              if (
                (Object(gt.s)(this.getConfig("min")) && (this.min = 0),
                Object(gt.s)(this.getConfig("max")))
              ) {
                var t = this.values.length;
                this.max = t > 1 ? t - 1 : t;
              }
              this.translateIndexMap && (this.translateIndexMap = void 0);
            }),
            e
          );
        })(wt),
        Mt =
          /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
        St = "[^\\s]+",
        Ct = /\[([^]*?)\]/gm;
      function jt(t, e) {
        for (var n = [], r = 0, i = t.length; r < i; r++)
          n.push(t[r].substr(0, e));
        return n;
      }
      var kt = function (t) {
        return function (e, n) {
          var r = n[t]
            .map(function (t) {
              return t.toLowerCase();
            })
            .indexOf(e.toLowerCase());
          return r > -1 ? r : null;
        };
      };
      function Et(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        for (var r = 0, i = e; r < i.length; r++) {
          var o = i[r];
          for (var a in o) t[a] = o[a];
        }
        return t;
      }
      var Nt = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        Tt = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        Pt = jt(Tt, 3),
        It = {
          dayNamesShort: jt(Nt, 3),
          dayNames: Nt,
          monthNamesShort: Pt,
          monthNames: Tt,
          amPm: ["am", "pm"],
          DoFn: function (t) {
            return (
              t +
              ["th", "st", "nd", "rd"][
                t % 10 > 3 ? 0 : ((t - (t % 10) != 10 ? 1 : 0) * t) % 10
              ]
            );
          },
        },
        Bt = Et({}, It),
        At = function (t) {
          return (Bt = Et(Bt, t));
        },
        Lt = function (t) {
          return t.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
        },
        Dt = function (t, e) {
          for (void 0 === e && (e = 2), t = String(t); t.length < e; )
            t = "0" + t;
          return t;
        },
        _t = {
          D: function (t) {
            return String(t.getDate());
          },
          DD: function (t) {
            return Dt(t.getDate());
          },
          Do: function (t, e) {
            return e.DoFn(t.getDate());
          },
          d: function (t) {
            return String(t.getDay());
          },
          dd: function (t) {
            return Dt(t.getDay());
          },
          ddd: function (t, e) {
            return e.dayNamesShort[t.getDay()];
          },
          dddd: function (t, e) {
            return e.dayNames[t.getDay()];
          },
          M: function (t) {
            return String(t.getMonth() + 1);
          },
          MM: function (t) {
            return Dt(t.getMonth() + 1);
          },
          MMM: function (t, e) {
            return e.monthNamesShort[t.getMonth()];
          },
          MMMM: function (t, e) {
            return e.monthNames[t.getMonth()];
          },
          YY: function (t) {
            return Dt(String(t.getFullYear()), 4).substr(2);
          },
          YYYY: function (t) {
            return Dt(t.getFullYear(), 4);
          },
          h: function (t) {
            return String(t.getHours() % 12 || 12);
          },
          hh: function (t) {
            return Dt(t.getHours() % 12 || 12);
          },
          H: function (t) {
            return String(t.getHours());
          },
          HH: function (t) {
            return Dt(t.getHours());
          },
          m: function (t) {
            return String(t.getMinutes());
          },
          mm: function (t) {
            return Dt(t.getMinutes());
          },
          s: function (t) {
            return String(t.getSeconds());
          },
          ss: function (t) {
            return Dt(t.getSeconds());
          },
          S: function (t) {
            return String(Math.round(t.getMilliseconds() / 100));
          },
          SS: function (t) {
            return Dt(Math.round(t.getMilliseconds() / 10), 2);
          },
          SSS: function (t) {
            return Dt(t.getMilliseconds(), 3);
          },
          a: function (t, e) {
            return t.getHours() < 12 ? e.amPm[0] : e.amPm[1];
          },
          A: function (t, e) {
            return t.getHours() < 12
              ? e.amPm[0].toUpperCase()
              : e.amPm[1].toUpperCase();
          },
          ZZ: function (t) {
            var e = t.getTimezoneOffset();
            return (
              (e > 0 ? "-" : "+") +
              Dt(100 * Math.floor(Math.abs(e) / 60) + (Math.abs(e) % 60), 4)
            );
          },
          Z: function (t) {
            var e = t.getTimezoneOffset();
            return (
              (e > 0 ? "-" : "+") +
              Dt(Math.floor(Math.abs(e) / 60), 2) +
              ":" +
              Dt(Math.abs(e) % 60, 2)
            );
          },
        },
        Rt = function (t) {
          return +t - 1;
        },
        Yt = [null, "[1-9]\\d?"],
        Ft = [null, St],
        zt = [
          "isPm",
          St,
          function (t, e) {
            var n = t.toLowerCase();
            return n === e.amPm[0] ? 0 : n === e.amPm[1] ? 1 : null;
          },
        ],
        Xt = [
          "timezoneOffset",
          "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",
          function (t) {
            var e = (t + "").match(/([+-]|\d\d)/gi);
            if (e) {
              var n = 60 * +e[1] + parseInt(e[2], 10);
              return "+" === e[0] ? n : -n;
            }
            return 0;
          },
        ],
        Wt = {
          D: ["day", "[1-9]\\d?"],
          DD: ["day", "\\d\\d"],
          Do: [
            "day",
            "[1-9]\\d?" + St,
            function (t) {
              return parseInt(t, 10);
            },
          ],
          M: ["month", "[1-9]\\d?", Rt],
          MM: ["month", "\\d\\d", Rt],
          YY: [
            "year",
            "\\d\\d",
            function (t) {
              var e = +("" + new Date().getFullYear()).substr(0, 2);
              return +("" + (+t > 68 ? e - 1 : e) + t);
            },
          ],
          h: ["hour", "[1-9]\\d?", void 0, "isPm"],
          hh: ["hour", "\\d\\d", void 0, "isPm"],
          H: ["hour", "[1-9]\\d?"],
          HH: ["hour", "\\d\\d"],
          m: ["minute", "[1-9]\\d?"],
          mm: ["minute", "\\d\\d"],
          s: ["second", "[1-9]\\d?"],
          ss: ["second", "\\d\\d"],
          YYYY: ["year", "\\d{4}"],
          S: [
            "millisecond",
            "\\d",
            function (t) {
              return 100 * +t;
            },
          ],
          SS: [
            "millisecond",
            "\\d\\d",
            function (t) {
              return 10 * +t;
            },
          ],
          SSS: ["millisecond", "\\d{3}"],
          d: Yt,
          dd: Yt,
          ddd: Ft,
          dddd: Ft,
          MMM: ["month", St, kt("monthNamesShort")],
          MMMM: ["month", St, kt("monthNames")],
          a: zt,
          A: zt,
          ZZ: Xt,
          Z: Xt,
        },
        Gt = {
          default: "ddd MMM DD YYYY HH:mm:ss",
          shortDate: "M/D/YY",
          mediumDate: "MMM D, YYYY",
          longDate: "MMMM D, YYYY",
          fullDate: "dddd, MMMM D, YYYY",
          isoDate: "YYYY-MM-DD",
          isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
          shortTime: "HH:mm",
          mediumTime: "HH:mm:ss",
          longTime: "HH:mm:ss.SSS",
        },
        qt = function (t) {
          return Et(Gt, t);
        },
        Ht = function (t, e, n) {
          if (
            (void 0 === e && (e = Gt.default),
            void 0 === n && (n = {}),
            "number" == typeof t && (t = new Date(t)),
            "[object Date]" !== Object.prototype.toString.call(t) ||
              isNaN(t.getTime()))
          )
            throw new Error("Invalid Date pass to format");
          var r = [];
          e = (e = Gt[e] || e).replace(Ct, function (t, e) {
            return r.push(e), "@@@";
          });
          var i = Et(Et({}, Bt), n);
          return (e = e.replace(Mt, function (e) {
            return _t[e](t, i);
          })).replace(/@@@/g, function () {
            return r.shift();
          });
        };
      function Vt(t, e, n) {
        if ((void 0 === n && (n = {}), "string" != typeof e))
          throw new Error("Invalid format in fecha parse");
        if (((e = Gt[e] || e), t.length > 1e3)) return null;
        var r = {
            year: new Date().getFullYear(),
            month: 0,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
            isPm: null,
            timezoneOffset: null,
          },
          i = [],
          o = [],
          a = e.replace(Ct, function (t, e) {
            return o.push(Lt(e)), "@@@";
          }),
          s = {},
          u = {};
        (a = Lt(a).replace(Mt, function (t) {
          var e = Wt[t],
            n = e[0],
            r = e[1],
            o = e[3];
          if (s[n])
            throw new Error(
              "Invalid format. " + n + " specified twice in format",
            );
          return (s[n] = !0), o && (u[o] = !0), i.push(e), "(" + r + ")";
        })),
          Object.keys(u).forEach(function (t) {
            if (!s[t])
              throw new Error(
                "Invalid format. " + t + " is required in specified format",
              );
          }),
          (a = a.replace(/@@@/g, function () {
            return o.shift();
          }));
        var c = t.match(new RegExp(a, "i"));
        if (!c) return null;
        for (var h = Et(Et({}, Bt), n), l = 1; l < c.length; l++) {
          var d = i[l - 1],
            f = d[0],
            p = d[2],
            g = p ? p(c[l], h) : +c[l];
          if (null == g) return null;
          r[f] = g;
        }
        1 === r.isPm && null != r.hour && 12 != +r.hour
          ? (r.hour = +r.hour + 12)
          : 0 === r.isPm && 12 == +r.hour && (r.hour = 0);
        for (
          var y = new Date(
              r.year,
              r.month,
              r.day,
              r.hour,
              r.minute,
              r.second,
              r.millisecond,
            ),
            v = [
              ["month", "getMonth"],
              ["day", "getDate"],
              ["hour", "getHours"],
              ["minute", "getMinutes"],
              ["second", "getSeconds"],
            ],
            m = ((l = 0), v.length);
          l < m;
          l++
        )
          if (s[v[l][0]] && r[v[l][0]] !== y[v[l][1]]()) return null;
        return null == r.timezoneOffset
          ? y
          : new Date(
              Date.UTC(
                r.year,
                r.month,
                r.day,
                r.hour,
                r.minute - r.timezoneOffset,
                r.second,
                r.millisecond,
              ),
            );
      }
      var Ut = {
        format: Ht,
        parse: Vt,
        defaultI18n: It,
        setGlobalDateI18n: At,
        setGlobalDateMasks: qt,
      };
      function Zt(t, e) {
        return (r.format || Ut.format)(t, e);
      }
      function Kt(t) {
        return (
          Object(gt.x)(t) &&
            (t =
              t.indexOf("T") > 0
                ? new Date(t).getTime()
                : new Date(t.replace(/-/gi, "/")).getTime()),
          Object(gt.o)(t) && (t = t.getTime()),
          t
        );
      }
      var Qt = 36e5,
        $t = 24 * Qt,
        Jt = 31 * $t,
        te = [
          ["HH:mm:ss", 1e3],
          ["HH:mm:ss", 1e4],
          ["HH:mm:ss", 3e4],
          ["HH:mm", 6e4],
          ["HH:mm", 6e5],
          ["HH:mm", 18e5],
          ["HH", Qt],
          ["HH", 6 * Qt],
          ["HH", 12 * Qt],
          ["YYYY-MM-DD", $t],
          ["YYYY-MM-DD", 4 * $t],
          ["YYYY-WW", 7 * $t],
          ["YYYY-MM", Jt],
          ["YYYY-MM", 4 * Jt],
          ["YYYY-MM", 6 * Jt],
          ["YYYY", 380 * $t],
        ];
      function ee(t, e, n) {
        var r,
          i =
            ((r = function (t) {
              return t[1];
            }),
            function (t, e, n, i) {
              for (
                var o = Object(gt.s)(n) ? 0 : n,
                  a = Object(gt.s)(i) ? t.length : i;
                o < a;

              ) {
                var s = (o + a) >>> 1;
                r(t[s]) > e ? (a = s) : (o = s + 1);
              }
              return o;
            })(te, (e - t) / n) - 1,
          o = te[i];
        return (
          i < 0 ? (o = te[0]) : i >= te.length && (o = Object(gt.y)(te)), o
        );
      }
      var ne = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = "timeCat"), e;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.translate = function (t) {
              t = Kt(t);
              var e = this.values.indexOf(t);
              return (
                -1 === e &&
                  (e = Object(gt.t)(t) && t < this.values.length ? t : NaN),
                e
              );
            }),
            (e.prototype.getText = function (t, e) {
              var n = this.translate(t);
              if (n > -1) {
                var r = this.values[n],
                  i = this.formatter;
                return (r = i ? i(r, e) : Zt(r, this.mask));
              }
              return t;
            }),
            (e.prototype.initCfg = function () {
              (this.tickMethod = "time-cat"),
                (this.mask = "YYYY-MM-DD"),
                (this.tickCount = 7);
            }),
            (e.prototype.setDomain = function () {
              var e = this.values;
              Object(gt.e)(e, function (t, n) {
                e[n] = Kt(t);
              }),
                e.sort(function (t, e) {
                  return t - e;
                }),
                t.prototype.setDomain.call(this);
            }),
            e
          );
        })(Ot),
        re = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.isContinuous = !0), e;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.scale = function (t) {
              if (Object(gt.s)(t)) return NaN;
              var e = this.rangeMin(),
                n = this.rangeMax();
              return this.max === this.min
                ? e
                : e + this.getScalePercent(t) * (n - e);
            }),
            (e.prototype.init = function () {
              t.prototype.init.call(this);
              var e = this.ticks,
                n = Object(gt.k)(e),
                r = Object(gt.y)(e);
              n < this.min && (this.min = n),
                r > this.max && (this.max = r),
                Object(gt.s)(this.minLimit) || (this.min = n),
                Object(gt.s)(this.maxLimit) || (this.max = r);
            }),
            (e.prototype.setDomain = function () {
              var t = Object(gt.i)(this.values),
                e = t.min,
                n = t.max;
              Object(gt.s)(this.min) && (this.min = e),
                Object(gt.s)(this.max) && (this.max = n),
                this.min > this.max && ((this.min = e), (this.max = n));
            }),
            (e.prototype.calculateTicks = function () {
              var e = this,
                n = t.prototype.calculateTicks.call(this);
              return (
                this.nice ||
                  (n = Object(gt.f)(n, function (t) {
                    return t >= e.min && t <= e.max;
                  })),
                n
              );
            }),
            (e.prototype.getScalePercent = function (t) {
              var e = this.max,
                n = this.min;
              return (t - n) / (e - n);
            }),
            (e.prototype.getInvertPercent = function (t) {
              return (
                (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin())
              );
            }),
            e
          );
        })(wt),
        ie = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = "linear"), (e.isLinear = !0), e;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.invert = function (t) {
              var e = this.getInvertPercent(t);
              return this.min + e * (this.max - this.min);
            }),
            (e.prototype.initCfg = function () {
              (this.tickMethod = "wilkinson-extended"), (this.nice = !1);
            }),
            e
          );
        })(re);
      function oe(t, e) {
        var n = Math.E;
        return e >= 0
          ? Math.pow(n, Math.log(e) / t)
          : -1 * Math.pow(n, Math.log(-e) / t);
      }
      function ae(t, e) {
        return 1 === t ? 1 : Math.log(e) / Math.log(t);
      }
      function se(t, e, n) {
        Object(gt.s)(n) && (n = Math.max.apply(null, t));
        var r = n;
        return (
          Object(gt.e)(t, function (t) {
            t > 0 && t < r && (r = t);
          }),
          r === n && (r = n / e),
          r > 1 && (r = 1),
          r
        );
      }
      var ue = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = "log"), e;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.invert = function (t) {
              var e,
                n = this.base,
                r = ae(n, this.max),
                i = this.rangeMin(),
                o = this.rangeMax() - i,
                a = this.positiveMin;
              if (a) {
                if (0 === t) return 0;
                var s = (1 / (r - (e = ae(n, a / n)))) * o;
                if (t < s) return (t / s) * a;
              } else e = ae(n, this.min);
              var u = ((t - i) / o) * (r - e) + e;
              return Math.pow(n, u);
            }),
            (e.prototype.initCfg = function () {
              (this.tickMethod = "log"),
                (this.base = 10),
                (this.tickCount = 6),
                (this.nice = !0);
            }),
            (e.prototype.setDomain = function () {
              t.prototype.setDomain.call(this);
              var e = this.min;
              if (e < 0)
                throw new Error(
                  "When you use log scale, the minimum value must be greater than zero!",
                );
              0 === e &&
                (this.positiveMin = se(this.values, this.base, this.max));
            }),
            (e.prototype.getScalePercent = function (t) {
              var e = this.max,
                n = this.min;
              if (e === n) return 0;
              if (t <= 0) return 0;
              var r = this.base,
                i = this.positiveMin;
              return (
                i && (n = (1 * i) / r),
                t < i
                  ? t / i / (ae(r, e) - ae(r, n))
                  : (ae(r, t) - ae(r, n)) / (ae(r, e) - ae(r, n))
              );
            }),
            e
          );
        })(re),
        ce = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = "pow"), e;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.invert = function (t) {
              var e = this.getInvertPercent(t),
                n = this.exponent,
                r = oe(n, this.max),
                i = oe(n, this.min),
                o = e * (r - i) + i,
                a = o >= 0 ? 1 : -1;
              return Math.pow(o, n) * a;
            }),
            (e.prototype.initCfg = function () {
              (this.tickMethod = "pow"),
                (this.exponent = 2),
                (this.tickCount = 5),
                (this.nice = !0);
            }),
            (e.prototype.getScalePercent = function (t) {
              var e = this.max,
                n = this.min;
              if (e === n) return 0;
              var r = this.exponent;
              return (oe(r, t) - oe(r, n)) / (oe(r, e) - oe(r, n));
            }),
            e
          );
        })(re),
        he = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = "time"), e;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.getText = function (t, e) {
              var n = this.translate(t),
                r = this.formatter;
              return r ? r(n, e) : Zt(n, this.mask);
            }),
            (e.prototype.scale = function (e) {
              var n = e;
              return (
                (Object(gt.x)(n) || Object(gt.o)(n)) && (n = this.translate(n)),
                t.prototype.scale.call(this, n)
              );
            }),
            (e.prototype.translate = function (t) {
              return Kt(t);
            }),
            (e.prototype.initCfg = function () {
              (this.tickMethod = "time-pretty"),
                (this.mask = "YYYY-MM-DD"),
                (this.tickCount = 7),
                (this.nice = !1);
            }),
            (e.prototype.setDomain = function () {
              var t = this.values,
                e = this.getConfig("min"),
                n = this.getConfig("max");
              if (
                ((Object(gt.s)(e) && Object(gt.t)(e)) ||
                  (this.min = this.translate(this.min)),
                (Object(gt.s)(n) && Object(gt.t)(n)) ||
                  (this.max = this.translate(this.max)),
                t && t.length)
              ) {
                var r = [],
                  i = 1 / 0,
                  o = i,
                  a = 0;
                Object(gt.e)(t, function (t) {
                  var e = Kt(t);
                  if (isNaN(e))
                    throw new TypeError(
                      "Invalid Time: " + t + " in time scale!",
                    );
                  i > e ? ((o = i), (i = e)) : o > e && (o = e),
                    a < e && (a = e),
                    r.push(e);
                }),
                  t.length > 1 && (this.minTickInterval = o - i),
                  Object(gt.s)(e) && (this.min = i),
                  Object(gt.s)(n) && (this.max = a);
              }
            }),
            e
          );
        })(ie),
        le = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = "quantize"), e;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.invert = function (t) {
              var e = this.ticks,
                n = e.length,
                r = this.getInvertPercent(t),
                i = Math.floor(r * (n - 1));
              if (i >= n - 1) return Object(gt.y)(e);
              if (i < 0) return Object(gt.k)(e);
              var o = e[i],
                a = i / (n - 1);
              return o + ((r - a) / ((i + 1) / (n - 1) - a)) * (e[i + 1] - o);
            }),
            (e.prototype.initCfg = function () {
              (this.tickMethod = "r-pretty"),
                (this.tickCount = 5),
                (this.nice = !0);
            }),
            (e.prototype.calculateTicks = function () {
              var e = t.prototype.calculateTicks.call(this);
              return (
                this.nice ||
                  (Object(gt.y)(e) !== this.max && e.push(this.max),
                  Object(gt.k)(e) !== this.min && e.unshift(this.min)),
                e
              );
            }),
            (e.prototype.getScalePercent = function (t) {
              var e = this.ticks;
              if (t < Object(gt.k)(e)) return 0;
              if (t > Object(gt.y)(e)) return 1;
              var n = 0;
              return (
                Object(gt.e)(e, function (e, r) {
                  if (!(t >= e)) return !1;
                  n = r;
                }),
                n / (e.length - 1)
              );
            }),
            e
          );
        })(re),
        de = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = "quantile"), e;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.initCfg = function () {
              (this.tickMethod = "quantile"),
                (this.tickCount = 5),
                (this.nice = !0);
            }),
            e
          );
        })(le),
        fe = {};
      function pe(t, e) {
        if (
          (function (t) {
            return fe[t];
          })(t)
        )
          throw new Error("type '" + t + "' existed.");
        fe[t] = e;
      }
      var ge = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.type = "identity"), (e.isIdentity = !0), e;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.calculateTicks = function () {
              return this.values;
            }),
            (e.prototype.scale = function (t) {
              return this.values[0] !== t && Object(gt.t)(t)
                ? t
                : this.range[0];
            }),
            (e.prototype.invert = function (t) {
              var e = this.range;
              return t < e[0] || t > e[1] ? NaN : this.values[0];
            }),
            e
          );
        })(wt),
        ye = [1, 5, 2, 2.5, 4, 3],
        ve = 100 * Number.EPSILON;
      function me(t, e, n, r, i, o) {
        var a = Object(gt.F)(e),
          s = Object(gt.l)(e, t),
          u = 0,
          c = (function (t, e) {
            return ((t % e) + e) % e;
          })(r, o);
        return (
          (c < ve || o - c < ve) && r <= 0 && i >= 0 && (u = 1),
          1 - s / (a - 1) - n + u
        );
      }
      function be(t, e, n) {
        var r = Object(gt.F)(e);
        return 1 - Object(gt.l)(e, t) / (r - 1) - n + 1;
      }
      function xe(t, e, n, r, i, o) {
        var a = (t - 1) / (o - i),
          s = (e - 1) / (Math.max(o, r) - Math.min(n, i));
        return 2 - Math.max(a / s, s / a);
      }
      function we(t, e) {
        return t >= e ? 2 - (t - 1) / (e - 1) : 1;
      }
      function Oe(t, e, n, r) {
        var i = e - t;
        return (
          1 -
          (0.5 * (Math.pow(e - r, 2) + Math.pow(t - n, 2))) /
            Math.pow(0.1 * i, 2)
        );
      }
      function Me(t, e, n) {
        var r = e - t;
        if (n > r) {
          var i = (n - r) / 2;
          return 1 - Math.pow(i, 2) / Math.pow(0.1 * r, 2);
        }
        return 1;
      }
      function Se(t, e, n, r, i, o) {
        if (
          (void 0 === n && (n = 5),
          void 0 === r && (r = !0),
          void 0 === i && (i = ye),
          void 0 === o && (o = [0.25, 0.2, 0.5, 0.05]),
          Number.isNaN(t) ||
            Number.isNaN(e) ||
            "number" != typeof t ||
            "number" != typeof e ||
            !n)
        )
          return { min: 0, max: 0, ticks: [] };
        if (e - t < 1e-15 || 1 === n) return { min: t, max: e, ticks: [t] };
        for (
          var a = { score: -2, lmin: 0, lmax: 0, lstep: 0 }, s = 1;
          s < 1 / 0;

        ) {
          for (var u = 0; u < i.length; u += 1) {
            var c = i[u],
              h = be(c, i, s);
            if (o[0] * h + o[1] + o[2] + o[3] < a.score) {
              s = 1 / 0;
              break;
            }
            for (var l = 2; l < 1 / 0; ) {
              var d = we(l, n);
              if (o[0] * h + o[1] + o[2] * d + o[3] < a.score) break;
              for (
                var f = (e - t) / (l + 1) / s / c, p = Math.ceil(Math.log10(f));
                p < 1 / 0;

              ) {
                var g = s * c * Math.pow(10, p),
                  y = Me(t, e, g * (l - 1));
                if (o[0] * h + o[1] * y + o[2] * d + o[3] < a.score) break;
                var v = Math.floor(e / g) * s - (l - 1) * s,
                  m = Math.ceil(t / g) * s;
                if (v <= m)
                  for (var b = m - v, x = 0; x <= b; x += 1) {
                    var w = (v + x) * (g / s),
                      O = w + g * (l - 1),
                      M = g,
                      S = me(c, i, s, w, O, M),
                      C = Oe(t, e, w, O),
                      j = xe(l, n, t, e, w, O),
                      k = o[0] * S + o[1] * C + o[2] * j + 1 * o[3];
                    k > a.score &&
                      (!r || (w <= t && O >= e)) &&
                      ((a.lmin = w),
                      (a.lmax = O),
                      (a.lstep = M),
                      (a.score = k));
                  }
                p += 1;
              }
              l += 1;
            }
          }
          s += 1;
        }
        var E,
          N = a.lmax,
          T = a.lmin,
          P = a.lstep,
          I = Math.floor((N - T) / P) + 1,
          B = new Array(I);
        for (u = 0; u < I; u++)
          B[u] = (E = T + u * P) < 1e-15 ? E : parseFloat(E.toFixed(15));
        return {
          min: Math.min(t, Object(gt.k)(B)),
          max: Math.max(e, Object(gt.y)(B)),
          ticks: B,
        };
      }
      function Ce(t) {
        var e = t.values,
          n = t.tickInterval,
          r = t.tickCount,
          i = e;
        if (Object(gt.t)(n))
          return Object(gt.f)(i, function (t, e) {
            return e % n == 0;
          });
        var o = t.min,
          a = t.max;
        if (
          (Object(gt.s)(o) && (o = 0),
          Object(gt.s)(a) && (a = e.length - 1),
          Object(gt.t)(r) && r < a - o)
        ) {
          var s = Se(o, a, r, !1, [1, 2, 5, 3, 4, 7, 6, 8, 9]).ticks;
          return Object(gt.f)(s, function (t) {
            return t >= o && t <= a;
          }).map(function (t) {
            return e[t];
          });
        }
        return e.slice(o, a + 1);
      }
      var je = Math.sqrt(50),
        ke = Math.sqrt(10),
        Ee = Math.sqrt(2),
        Ne = (function () {
          function t() {
            this._domain = [0, 1];
          }
          return (
            (t.prototype.domain = function (t) {
              return t
                ? ((this._domain = Array.from(t, Number)), this)
                : this._domain.slice();
            }),
            (t.prototype.nice = function (t) {
              var e, n;
              void 0 === t && (t = 5);
              var r,
                i = this._domain.slice(),
                o = 0,
                a = this._domain.length - 1,
                s = this._domain[o],
                u = this._domain[a];
              return (
                u < s &&
                  ((s = (e = [u, s])[0]),
                  (u = e[1]),
                  (o = (n = [a, o])[0]),
                  (a = n[1])),
                (r = Te(s, u, t)) > 0
                  ? (r = Te(
                      (s = Math.floor(s / r) * r),
                      (u = Math.ceil(u / r) * r),
                      t,
                    ))
                  : r < 0 &&
                    (r = Te(
                      (s = Math.ceil(s * r) / r),
                      (u = Math.floor(u * r) / r),
                      t,
                    )),
                r > 0
                  ? ((i[o] = Math.floor(s / r) * r),
                    (i[a] = Math.ceil(u / r) * r),
                    this.domain(i))
                  : r < 0 &&
                    ((i[o] = Math.ceil(s * r) / r),
                    (i[a] = Math.floor(u * r) / r),
                    this.domain(i)),
                this
              );
            }),
            (t.prototype.ticks = function (t) {
              return (
                void 0 === t && (t = 5),
                (function (t, e, n) {
                  var r,
                    i,
                    o,
                    a,
                    s = -1;
                  if (((n = +n), (t = +t) === (e = +e) && n > 0)) return [t];
                  (r = e < t) && ((i = t), (t = e), (e = i));
                  if (0 === (a = Te(t, e, n)) || !isFinite(a)) return [];
                  if (a > 0)
                    for (
                      t = Math.ceil(t / a),
                        e = Math.floor(e / a),
                        o = new Array((i = Math.ceil(e - t + 1)));
                      ++s < i;

                    )
                      o[s] = (t + s) * a;
                  else
                    for (
                      t = Math.floor(t * a),
                        e = Math.ceil(e * a),
                        o = new Array((i = Math.ceil(t - e + 1)));
                      ++s < i;

                    )
                      o[s] = (t - s) / a;
                  r && o.reverse();
                  return o;
                })(
                  this._domain[0],
                  this._domain[this._domain.length - 1],
                  t || 5,
                )
              );
            }),
            t
          );
        })();
      function Te(t, e, n) {
        var r = (e - t) / Math.max(0, n),
          i = Math.floor(Math.log(r) / Math.LN10),
          o = r / Math.pow(10, i);
        return i >= 0
          ? (o >= je ? 10 : o >= ke ? 5 : o >= Ee ? 2 : 1) * Math.pow(10, i)
          : -Math.pow(10, -i) / (o >= je ? 10 : o >= ke ? 5 : o >= Ee ? 2 : 1);
      }
      function Pe(t, e, n) {
        return (
          ("ceil" === n
            ? Math.ceil(t / e)
            : "floor" === n
            ? Math.floor(t / e)
            : Math.round(t / e)) * e
        );
      }
      function Ie(t, e, n) {
        var r = Pe(t, n, "floor"),
          i = Pe(e, n, "ceil");
        (r = Object(gt.g)(r, n)), (i = Object(gt.g)(i, n));
        for (var o = [], a = r; a <= i; a += n) {
          var s = Object(gt.g)(a, n);
          o.push(s);
        }
        return { min: r, max: i, ticks: o };
      }
      function Be(t, e, n) {
        var r,
          i = t.minLimit,
          o = t.maxLimit,
          a = t.min,
          s = t.max,
          u = t.tickCount,
          c = void 0 === u ? 5 : u,
          h = Object(gt.s)(i) ? (Object(gt.s)(e) ? a : e) : i,
          l = Object(gt.s)(o) ? (Object(gt.s)(n) ? s : n) : o;
        if ((h > l && ((l = (r = [h, l])[0]), (h = r[1])), c <= 2))
          return [h, l];
        for (var d = (l - h) / (c - 1), f = [], p = 0; p < c; p++)
          f.push(h + d * p);
        return f;
      }
      function Ae(t) {
        return t < 1e-15 ? t : parseFloat(t.toFixed(15));
      }
      function Le(t, e, n) {
        if ((void 0 === n && (n = 5), t === e))
          return { max: e, min: t, ticks: [t] };
        var r = (e - t) / n,
          i = Math.pow(10, Math.floor(Math.log10(r))),
          o = i;
        2 * i - r < 1.5 * (r - o) &&
          5 * i - r < 2.75 * (r - (o = 2 * i)) &&
          10 * i - r < 1.5 * (r - (o = 5 * i)) &&
          (o = 10 * i);
        for (
          var a = Math.ceil(e / o),
            s = Math.floor(t / o),
            u = Math.max(a * o, e),
            c = Math.min(s * o, t),
            h = Math.floor((u - c) / o) + 1,
            l = new Array(h),
            d = 0;
          d < h;
          d++
        )
          l[d] = Ae(c + d * o);
        return { min: c, max: u, ticks: l };
      }
      function De(t, e) {
        var n = t.length * e;
        return 1 === e
          ? t[t.length - 1]
          : 0 === e
          ? t[0]
          : n % 1 != 0
          ? t[Math.ceil(n) - 1]
          : t.length % 2 == 0
          ? (t[n - 1] + t[n]) / 2
          : t[n];
      }
      function _e(t) {
        return new Date(t).getFullYear();
      }
      function Re(t) {
        return new Date(t, 0, 1).getTime();
      }
      function Ye(t) {
        return new Date(t).getMonth();
      }
      function Fe(t, e) {
        return new Date(t, e, 1).getTime();
      }
      function ze(t) {
        return (function (t) {
          return Object(gt.z)(t, function (t, e) {
            return [0 === e ? "M" : "L", t[0], t[1]];
          });
        })(t);
      }
      function Xe(t, e, n, r) {
        void 0 === r && (r = !0);
        var i = new ie({ values: t }),
          o = new Ot({
            values: Object(gt.z)(t, function (t, e) {
              return e;
            }),
          }),
          a = Object(gt.z)(t, function (t, r) {
            return [o.scale(r) * e, n - i.scale(t) * n];
          });
        return r
          ? (function (t) {
              if (t.length <= 2) return ze(t);
              var e = [];
              Object(gt.e)(t, function (t) {
                Object(gt.q)(t, e.slice(e.length - 2)) || e.push(t[0], t[1]);
              });
              var n = mt.a(e, !1),
                r = Object(gt.k)(t),
                i = r[0],
                o = r[1];
              return n.unshift(["M", i, o]), n;
            })(a)
          : ze(a);
      }
      xt("cat", Ce),
        xt("time-cat", function (t) {
          var e = Ce(t),
            n = Object(gt.y)(t.values);
          return n !== Object(gt.y)(e) && e.push(n), e;
        }),
        xt("wilkinson-extended", function (t) {
          var e = t.min,
            n = t.max,
            r = t.tickCount,
            i = t.nice,
            o = t.tickInterval,
            a = t.minLimit,
            s = t.maxLimit,
            u = Se(e, n, r, i).ticks;
          return Object(gt.s)(a) && Object(gt.s)(s)
            ? o
              ? Ie(e, n, o).ticks
              : u
            : Be(t, Object(gt.k)(u), Object(gt.y)(u));
        }),
        xt("r-pretty", function (t) {
          var e = t.min,
            n = t.max,
            r = t.tickCount,
            i = t.tickInterval,
            o = t.minLimit,
            a = t.maxLimit,
            s = Le(e, n, r).ticks;
          return Object(gt.s)(o) && Object(gt.s)(a)
            ? i
              ? Ie(e, n, i).ticks
              : s
            : Be(t, Object(gt.k)(s), Object(gt.y)(s));
        }),
        xt("time", function (t) {
          var e = t.min,
            n = t.max,
            r = t.minTickInterval,
            i = t.tickInterval,
            o = t.tickCount;
          if (i) o = Math.ceil((n - e) / i);
          else {
            var a = (n - e) / (i = ee(e, n, o)[1]) / o;
            a > 1 && (i *= Math.ceil(a)), r && i < r && (i = r);
          }
          for (var s = [], u = e; u < n + i; u += i) s.push(u);
          return s;
        }),
        xt("time-pretty", function (t) {
          var e = t.min,
            n = t.max,
            r = t.minTickInterval,
            i = t.tickCount,
            o = t.tickInterval,
            a = [];
          o || ((o = (n - e) / i), r && o < r && (o = r));
          var s = _e(e);
          if (o > 31536e6)
            for (
              var u = _e(n), c = Math.ceil(o / 31536e6), h = s;
              h <= u + c;
              h += c
            )
              a.push(Re(h));
          else if (o > Jt) {
            var l = Math.ceil(o / Jt),
              d = Ye(e),
              f = (function (t, e) {
                var n = _e(t),
                  r = _e(e),
                  i = Ye(t);
                return 12 * (r - n) + ((Ye(e) - i) % 12);
              })(e, n);
            for (h = 0; h <= f + l; h += l) a.push(Fe(s, h + d));
          } else if (o > $t) {
            var p = (b = new Date(e)).getFullYear(),
              g = b.getMonth(),
              y = b.getDate(),
              v = Math.ceil(o / $t),
              m = (function (t, e) {
                return Math.ceil((e - t) / $t);
              })(e, n);
            for (h = 0; h < m + v; h += v)
              a.push(new Date(p, g, y + h).getTime());
          } else if (o > Qt) {
            (p = (b = new Date(e)).getFullYear()),
              (g = b.getMonth()),
              (v = b.getDate());
            var b,
              x = b.getHours(),
              w = Math.ceil(o / Qt),
              O = (function (t, e) {
                return Math.ceil((e - t) / Qt);
              })(e, n);
            for (h = 0; h <= O + w; h += w)
              a.push(new Date(p, g, v, x + h).getTime());
          } else if (o > 6e4) {
            var M = (function (t, e) {
                return Math.ceil((e - t) / 6e4);
              })(e, n),
              S = Math.ceil(o / 6e4);
            for (h = 0; h <= M + S; h += S) a.push(e + 6e4 * h);
          } else {
            var C = o;
            C < 1e3 && (C = 1e3);
            var j = 1e3 * Math.floor(e / 1e3),
              k = Math.ceil((n - e) / 1e3),
              E = Math.ceil(C / 1e3);
            for (h = 0; h < k + E; h += E) a.push(j + 1e3 * h);
          }
          return (
            a.length >= 512 &&
              console.warn(
                "Notice: current ticks length(" +
                  a.length +
                  ') >= 512, may cause performance issues, even out of memory. Because of the configure "tickInterval"(in milliseconds, current is ' +
                  o +
                  ") is too small, increase the value to solve the problem!",
              ),
            a
          );
        }),
        xt("log", function (t) {
          var e,
            n = t.base,
            r = t.tickCount,
            i = t.min,
            o = t.max,
            a = t.values,
            s = ae(n, o);
          if (i > 0) e = Math.floor(ae(n, i));
          else {
            var u = se(a, n, o);
            e = Math.floor(ae(n, u));
          }
          for (
            var c = s - e, h = Math.ceil(c / r), l = [], d = e;
            d < s + h;
            d += h
          )
            l.push(Math.pow(n, d));
          return i <= 0 && l.unshift(0), l;
        }),
        xt("pow", function (t) {
          var e = t.exponent,
            n = t.tickCount,
            r = Math.ceil(oe(e, t.max));
          return Le(Math.floor(oe(e, t.min)), r, n).ticks.map(function (t) {
            var n = t >= 0 ? 1 : -1;
            return Math.pow(t, e) * n;
          });
        }),
        xt("quantile", function (t) {
          var e = t.tickCount,
            n = t.values;
          if (!n || !n.length) return [];
          for (
            var r = n.slice().sort(function (t, e) {
                return t - e;
              }),
              i = [],
              o = 0;
            o < e;
            o++
          ) {
            var a = o / (e - 1);
            i.push(De(r, a));
          }
          return i;
        }),
        xt("d3-linear", function (t) {
          var e = t.min,
            n = t.max,
            r = t.tickInterval,
            i = t.minLimit,
            o = t.maxLimit,
            a = (function (t) {
              var e = t.min,
                n = t.max,
                r = t.nice,
                i = t.tickCount,
                o = new Ne();
              return o.domain([e, n]), r && o.nice(i), o.ticks(i);
            })(t);
          return Object(gt.s)(i) && Object(gt.s)(o)
            ? r
              ? Ie(e, n, r).ticks
              : a
            : Be(t, Object(gt.k)(a), Object(gt.y)(a));
        }),
        pe("cat", Ot),
        pe("category", Ot),
        pe("identity", ge),
        pe("linear", ie),
        pe("log", ue),
        pe("pow", ce),
        pe("time", he),
        pe("timeCat", ne),
        pe("quantize", le),
        pe("quantile", de);
      var We = { stroke: "#C5C5C5", strokeOpacity: 0.85 };
      function Ge(t) {
        var e = t.data,
          n = void 0 === e ? [] : e,
          r = t.width,
          i = t.slider,
          o = t.sliderTick,
          a = (function (t) {
            var e = t.width,
              n = t.height,
              r = void 0 === n ? 4 : n,
              i = Object.assign({}, nt, t.handlerStyle),
              o = Object.assign({}, J, t.backgroundStyle),
              a = Object.assign({}, tt, t.foregroundStyle),
              s = Object.assign({}, rt, t.textStyle),
              u = V(
                "\n    <div class='slider-bg'>\n      <div class=\"slider-inner\"></div>\n      <div class='control left-control'>\n        <div class='text'>0</div>\n      </div>\n      <div class='control right-control'>\n        <div class='text'>0</div>\n      </div>\n    </div>\n  ",
                "\n    .slider-bg {\n      width: " +
                  e +
                  ";\n      height: " +
                  r +
                  ";\n      background: " +
                  o.fill +
                  ";\n      opacity: " +
                  o.opacity +
                  ";\n      border-radius: " +
                  o.radius +
                  ";\n      z-index: 10;\n      margin-top: 30;\n    }\n    \n    .slider-inner{\n      position: absolute;\n      width: " +
                  e +
                  ";\n      height: " +
                  r +
                  ";\n      border-radius: " +
                  r / 2 +
                  ";\n      background: " +
                  a.fill +
                  ";\n      background-opacity: " +
                  a.opacity +
                  "\n      z-index: 1;\n    }\n\n    .control {\n      position: absolute;\n      top: " +
                  (-i.radius / 2 + r / 2) +
                  ";\n      width: " +
                  i.radius +
                  ";\n      height: " +
                  i.radius +
                  ";\n      border-radius: " +
                  i.radius / 2 +
                  ";\n      background: " +
                  i.fill +
                  ";\n      border: " +
                  i.lineWidth +
                  " solid " +
                  i.stroke +
                  ";\n      z-index: 2;\n    }\n\n    .text{\n      position: absolute;\n      left: " +
                  i.radius / 2 +
                  ";\n      top: -" +
                  (i.radius / 2 + s.fontSize / 2) +
                  ";\n      width: 0;\n      color: " +
                  s.fill +
                  ";\n      font-size: " +
                  s.fontSize +
                  ";\n      text-align: center;\n    }\n\n    text{\n      opacity: " +
                  s.opacity +
                  ";\n      white-space: nowrap;\n    }\n    \n    .left-control {\n      left: 0;\n    }\n\n    .right-control{\n      left: " +
                  (e - i.radius) +
                  ";\n    }\n  ",
              );
            return {
              slideContainer: u,
              leftControl: u.query(".left-control"),
              rightControl: u.query(".right-control"),
              slideInner: u.query(".slider-inner"),
            };
          })(i);
        return He(
          { data: n, width: r, start: i.start, end: i.end, sliderTick: o },
          a,
        );
      }
      function qe(t) {
        var e = t.data,
          n = t.width,
          r = t.slider,
          i = t.sliderTick,
          o = (function (t) {
            var e = t.slider,
              n = void 0 === e ? {} : e,
              r = t.trend,
              i = void 0 === r ? {} : r,
              o = n.width,
              a = n.height,
              s = void 0 === a ? 24 : a,
              u = i.data,
              c = void 0 === u ? [] : u,
              h = i.lineStyle,
              l = i.smooth,
              d = void 0 === l || l,
              f = Object.assign({}, et, n.handlerStyle),
              p = Object.assign({}, $, n.backgroundStyle),
              g = Object.assign({}, tt, n.foregroundStyle),
              y = Object.assign({}, rt, n.textStyle),
              v = Object.assign({}, We, h),
              m = f.width,
              b = 2 * m,
              x = 2 * b + 10,
              w = V(
                "\n    <div class='slider-bg'>\n      <shape class='trend-bg' type='path' path='[]' />\n      <div class= 'slider-inner' />\n      <div class='control left-control'>\n        <div class='handler'> \n          <div class='text'>1</div>\n          <shape class='rect' type='rect' width='" +
                  f.width +
                  "'/>\n          <shape class='circle top-circle' type='circle' r='" +
                  b +
                  "' />\n          <shape class='circle bottom-circle' type='circle' r='" +
                  b +
                  "' />\n        </div>\n      </div>\n      <div class='control right-control'>\n        <div class='handler'> \n          <div class='text'>1</div>\n          <shape class='rect' type='rect' width='" +
                  f.width +
                  "'/>\n          <shape class='circle top-circle' type='circle' r='" +
                  b +
                  "' />\n          <shape class='circle bottom-circle' type='circle' r='" +
                  b +
                  "' />\n        </div>\n      </div>\n    </div>\n  ",
                "\n    .slider-bg {\n      width: " +
                  o +
                  ";\n      height: " +
                  s +
                  ";\n      background: " +
                  p.fill +
                  ";\n      opacity: " +
                  p.opacity +
                  ";\n      z-index: 10;\n    }\n\n    .trend-bg{\n      position: absolute;\n      width: " +
                  o +
                  ";\n      height: " +
                  s +
                  ";\n      border: 1 solid " +
                  v.stroke +
                  ";\n      opacity: " +
                  v.strokeOpacity +
                  ";\n    }\n    \n    .slider-inner{\n      position: absolute;\n      width: " +
                  o +
                  ";\n      height: " +
                  s +
                  ";\n      background: " +
                  g.fill +
                  ";\n      opacity: " +
                  g.opacity +
                  ";\n    }\n\n    .control {\n      position: absolute;\n      width: " +
                  x +
                  ";\n      height: " +
                  s +
                  ";\n      font-size: 10;\n      background-opacity: 0;\n    }\n\n    .handler{\n      position: absolute;\n      height: " +
                  f.height +
                  ";\n      width: " +
                  m +
                  ";\n    }\n    \n    .rect {\n      position: absolute;\n      width: " +
                  m +
                  ";\n      height: " +
                  f.height +
                  ";\n      background: " +
                  f.fill +
                  ";\n    }\n\n    .circle {\n      background: " +
                  f.fill +
                  ";\n      position: absolute;\n      left: " +
                  m / 2 +
                  "\n    }\n\n    .top-circle{\n      top: 0\n    }\n\n    .bottom-circle{\n      bottom: 0\n    }\n\n    .right-control .handler{\n      right: 0\n    }\n\n    .control .text{\n      position: absolute;\n      top: " +
                  (s / 2 - 5) +
                  ";\n    }\n    \n    .text{\n      color: " +
                  y.fill +
                  ";\n      width: 40;\n      text-align: center;\n    }\n\n    .text text{\n      opacity:" +
                  y.opacity +
                  "\n    }\n\n    .left-control .text{\n      margin-left: 0;\n    }\n\n    .right-control .text{\n      \n    }\n    \n    .left-control {\n      left: 0;\n    }\n\n    .right-control{\n      left: " +
                  (o - x) +
                  ";\n    }\n  ",
              ),
              O = Xe(c, o, s, d);
            w.query(".trend-bg").setAttribute("path", O);
            var M = w.query(".left-control"),
              S = w.query(".right-control"),
              C = M.query(".text"),
              j = S.query(".text");
            return (
              (M.onLeftChange = function (t) {
                t < C.width
                  ? C.setStyle("marginLeft", 0)
                  : C.setStyle("marginLeft", -C.width);
              }),
              (S.onLeftChange = function (t) {
                t > w.width - S.width - j.width
                  ? j.setStyle("marginLeft", -j.width)
                  : j.setStyle("marginLeft", 0);
              }),
              {
                slideContainer: w,
                leftControl: w.query(".left-control"),
                rightControl: w.query(".right-control"),
                slideInner: w.query(".slider-inner"),
              }
            );
          })({ slider: r, trend: t.trend });
        return He(
          { data: e, width: n, start: r.start, end: r.end, sliderTick: i },
          o,
        );
      }
      function He(t, e) {
        var n = t.data,
          r = void 0 === n ? [] : n,
          i = t.width,
          o = t.start,
          a = void 0 === o ? 0.1 : o,
          s = t.end,
          u = void 0 === s ? 0.9 : s,
          c = t.sliderTick,
          h = c.width,
          l = (void 0 === h ? 0 : h) / r.length,
          d = (function (t) {
            return V(
              "\n    <div id='slider'></div>\n  ",
              "\n    #slider {\n      width: " +
                t +
                ";\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n  ",
            );
          })(i),
          f = e.slideContainer,
          p = e.leftControl,
          g = e.rightControl,
          y = e.slideInner,
          v = (function (t, e, n) {
            var r = n.width,
              i = void 0 === r ? 0 : r,
              o = Object.assign({}, it, n.textStyle),
              a = Object.assign({}, ot, n.lineStyle),
              s = Math.floor(o.width / e);
            return V(
              "\n  <div class='tiker'>\n    " +
                t.reduce(function (t, e, n) {
                  return (
                    t +
                    "\n        <div class='single-tick'> \n          " +
                    (n % s == 0
                      ? "\n          <shape class='line' type='rect' />\n          <div class='text'>" +
                        e.date +
                        "</div>"
                      : "") +
                    "\n        </div> \n      "
                  );
                }, "") +
                "\n  </div>",
              "\n    .tiker {\n      width: " +
                i +
                ";\n      background-opacity: 0;\n      display: flex;\n      flex-direction: row;\n      z-index: 1;\n      color: black;\n    }\n    .single-tick {\n      width: " +
                e +
                ";\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      align-items: flex-start;\n    }\n    .single-tick shape{\n      width: " +
                a.width +
                ";\n      height: " +
                a.height +
                ";\n      background: " +
                a.fill +
                ";\n    }\n    .single-tick .text {\n      height: " +
                o.fontSize +
                ";\n      text-align: center;\n      font-size: " +
                o.fontSize +
                ";\n      width: 0; \n      color: " +
                o.fill +
                ";\n    }\n    text {\n      opacity: " +
                o.opacity +
                ";;\n      white-space: nowrap;\n    }\n  ",
            );
          })(r, l, c);
        d.appendChild(f, v);
        var m = (function (t) {
          var e = t.delegateNode,
            n = t.leftControl,
            r = t.rightControl,
            i = t.slideInner,
            o = t.data,
            a = t.tickWidth,
            s = t.slideContainer,
            u = t.speed,
            c = 0,
            h = 1,
            l = 0;
          function d() {
            var t = r.width,
              e = s.width;
            l > e - t || v((l += a));
          }
          var f = vt(d, void 0 === u ? 100 : u);
          function p() {
            return r.left - n.left + n.width;
          }
          function g(t) {
            var e = (t / s.width) * o.length;
            return o[Math.floor(e)];
          }
          function y(t, e) {
            var r;
            void 0 === e && (e = !0);
            var o = n.width,
              a = s.width;
            t < 0 && (t = 0),
              t > a - o && (t = a - o),
              null === (r = n.onLeftChange) || void 0 === r || r.call(n, t),
              n.setStyle("left", t),
              e && i.setStyle("width", p()),
              i.setStyle("left", t < 0 ? 0 : t);
            var u = g(t);
            u &&
              (n.setText(u.date),
              K("RANGE_CHANGE", { value: [(c = t / a), h] }));
          }
          function v(t, e) {
            var n;
            void 0 === e && (e = !0);
            var o = r.width,
              a = s.width;
            t < 0 && (t = 0),
              t >= a - o && (t = a - o),
              null === (n = r.onLeftChange) || void 0 === n || n.call(r, t),
              r.setStyle("left", t),
              e && i.setStyle("width", p());
            var u = g(t + o);
            u &&
              ((l = t),
              r.setText(u.date),
              K("RANGE_CHANGE", { value: [c, (h = (t + o) / a)] }));
          }
          var m = new Map();
          m.set(n, {
            getStart: function () {
              return n.left;
            },
            handler: y,
          }),
            m.set(r, {
              getStart: function () {
                return r.left;
              },
              handler: v,
            }),
            m.set(i, {
              getStart: function () {
                return i.left;
              },
              handler: function (t) {
                var e = r.width,
                  n = i.width,
                  o = s.width;
                t < 0 && (t = 0),
                  t > o - n && (t = o - n),
                  y(t, !1),
                  v(t + n - e, !1);
              },
            });
          var b,
            x = 0,
            w = 0;
          return (
            e.on("panstart", function (t) {
              if (t.uiNode) {
                b = void 0;
                var e = m.get(t.uiNode);
                e && ((b = t.uiNode), (x = t.clientX), (w = e.getStart()));
              }
            }),
            e.on("panmove", function (t) {
              if (b) {
                var e = m.get(b),
                  n = t.clientX - x;
                e.handler(w + n);
              }
            }),
            {
              goLeftPercent: function (t) {
                t < 0 || t > 1 || y(t * s.width);
              },
              goRightPercent: function (t) {
                t < 0 || t > 1 || v(t * s.width);
              },
              goNext: d,
              goPrev: function () {
                l < 0 || v((l -= a));
              },
              player: f,
            }
          );
        })({
          data: r,
          slideContainer: f,
          leftControl: p,
          rightControl: g,
          slideInner: y,
          tickWidth: l,
          delegateNode: d,
        });
        return (
          (f.didMount = function () {
            m.goLeftPercent(a), m.goRightPercent(u);
          }),
          Q("SLIDER_PLAY", m.player.play),
          Q("SLIDER_PAUSE", m.player.stop),
          Q("SPEED_CHANGE", m.player.setSpeed),
          Q("CONTROL_NEXT", m.goNext),
          Q("CONTROL_PREV", m.goPrev),
          d
        );
      }
      function Ve(t, e, n) {
        var r = Math.max(t, e),
          i = Math.min(t, e);
        (n.start = i),
          (n.end = r),
          Ue(n),
          n.tickBoxs.forEach(function (t) {
            n.selects.includes(t) ||
              (t.getAttribute("disFromStart") >= i &&
                t.getAttribute("disFromStart") <= r &&
                (t.setStyle("backgroundColor", n.selectedFill),
                n.selects.push(t)));
          }),
          n.selects.length > 0 &&
            K("RANGE_CHANGE", {
              value: [
                n.selects[0].getAttribute("disFromStart") / n.width,
                n.selects[n.selects.length - 1].getAttribute("disFromStart") /
                  n.width,
              ],
            });
      }
      function Ue(t) {
        t.selects.forEach(function (e) {
          e.setStyle("backgroundColor", t.unSelectFill);
        }),
          (t.selects = []);
      }
      var Ze = function (t) {
        var e,
          n,
          r,
          i,
          o,
          a = t.data,
          s = t.tick,
          u = s.start,
          c = void 0 === u ? 0.1 : u,
          h = s.end,
          l = void 0 === h ? 0.9 : h,
          d = s.width,
          f = s.padding;
        console.log(t);
        var p = Object.assign(
            {},
            ht,
            null === (e = null == t ? void 0 : t.tick) || void 0 === e
              ? void 0
              : e.selectedTickStyle,
          ),
          g = Object.assign(
            {},
            lt,
            null === (n = null == t ? void 0 : t.tick) || void 0 === n
              ? void 0
              : n.unSelectedTickStyle,
          ),
          y = {};
        (y.data = a),
          (y.width = d),
          (y.padding = f || "10 0"),
          (y.selectedFill = p.fill),
          (y.unSelectFill = g.fill),
          (y.gap = at),
          (y.tickBoxHeight =
            (null === (r = null == t ? void 0 : t.tick) || void 0 === r
              ? void 0
              : r.tickBoxHeight) || st),
          (y.lineStyle = Object.assign(
            {},
            ut,
            null === (i = null == t ? void 0 : t.tick) || void 0 === i
              ? void 0
              : i.tickLineStyle,
          )),
          (y.textStyle = Object.assign(
            {},
            ct,
            null === (o = null == t ? void 0 : t.tick) || void 0 === o
              ? void 0
              : o.tickLabelStyle,
          )),
          (y.tickWidth = d / a.length),
          (y.count = Math.floor(y.textStyle.width / y.tickWidth)),
          (y.start = c),
          (y.end = l),
          (y.selects = []);
        var v = (function (t) {
          var e = t.data,
            n = t.tickWidth,
            r = t.count,
            i = t.width,
            o = t.gap,
            a = t.tickBoxHeight,
            s = t.textStyle,
            u = t.lineStyle,
            c = t.start,
            h = t.end,
            l = t.unSelectFill,
            d =
              "\n  <div id='slider'>\n    " +
              e.reduce(function (t, e, i) {
                return (
                  t +
                  "\n        <div class='ticker'> \n          <div class='tick-box' disFromStart='" +
                  i * n +
                  "'></div>\n          " +
                  (i % r == 0
                    ? "\n              <div class='tick-desc' > \n                <shape class='line' type='rect'/>\n                <div class='text'>" +
                      e.date +
                      "</div>\n              </div>"
                    : "") +
                  "\n        </div>"
                );
              }, "") +
              "\n  </div>\n",
            f =
              "\n  #slider {\n    width: " +
              i +
              ";\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: flex-start;\n    padding: " +
              t.padding +
              ";\n  }\n\n  .ticker {\n    width: " +
              (n - o) +
              ";\n    display: flex;\n    background-opacity: 0;\n    align-items: center;\n  }\n\n  .tick-box {\n    width: " +
              (n - o) +
              ";\n    height: " +
              a +
              ";\n    background:  " +
              l +
              ";\n  }\n\n  .tick-desc {\n    display: flex;\n    align-items: center;\n  }\n\n  .text{\n    width: 0;\n    height: " +
              s.fontSize +
              ";\n    text-align:center;\n    color: " +
              s.fill +
              ";\n    font-size: " +
              s.fontSize +
              ";\n  }\n\n  .text text{\n    white-space: nowrap;\n  }\n\n  .line {\n    width: " +
              u.width +
              ";\n    height: " +
              u.height +
              ";\n    background: " +
              u.fill +
              ";\n    margin: 2 0;\n  }\n",
            p = V(d, f);
          return (
            (p.didMount = function () {
              (t.start = c * i), (t.end = h * i), Ve(t.start, t.end, t);
            }),
            p
          );
        })(y);
        return (
          (y.tickBoxs = v.queryAll(".tick-box")),
          (function (t) {
            var e = function () {
                (t.end += t.tickWidth), Ve(t.start, t.end, t);
              },
              n = vt(e, 1e3);
            Q("CONTROL_NEXT", e),
              Q("CONTROL_PREV", function () {
                (t.end -= t.tickWidth), Ve(t.start, t.end, t);
              }),
              Q("SLIDER_PLAY", n.play),
              Q("SLIDER_PAUSE", n.stop),
              Q("SPEED_CHANGE", n.setSpeed);
          })(y),
          (function (t, e) {
            var n = 0,
              r = !1,
              i = 0,
              o = Object(gt.G)(Ve, 30, { trailing: !0, leading: !0 });
            t.on("panstart", function (t) {
              (r = !1),
                t.uiNode &&
                  "tick-box" === t.uiNode.getAttribute("class") &&
                  ((r = !0),
                  (n = t.clientX),
                  (i = t.uiNode.getAttribute("disFromStart")),
                  Ue(e));
            }),
              t.on("panmove", function (t) {
                if (r) {
                  var a = t.clientX - n;
                  o(i, i + a, e);
                }
              }),
              t.on("tap", function (t) {
                t.uiNode &&
                  "tick-box" === t.uiNode.getAttribute("class") &&
                  (function (t, e) {
                    Ue(e),
                      e.selects.push(t),
                      (e.start = e.end = t.getAttribute("disFromStart")),
                      K("RANGE_CHANGE", {
                        value: [
                          t.getAttribute("disFromStart") / e.width,
                          t.getAttribute("disFromStart") / e.width,
                        ],
                      }),
                      t.setStyle("backgroundColor", e.selectedFill);
                  })(t.uiNode, e);
              });
          })(v, y),
          v
        );
      };
      function Ke(t, e) {
        var n = t.width,
          r = t.group,
          i = t.control,
          o = H(
            "<root></root>",
            "\n  root {\n    /** 盒模型 **/\n    width: " +
              n +
              ";\n    /** flex **/\n    display: flex;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: center;\n    align-items: center;\n  }\n",
            r,
          ),
          a = yt(i);
        return o.appendChild(e, a), o;
      }
      var Qe = (function () {
          function t(t) {
            (this._cfgs = Object(gt.d)(this.getDefaultCfgs(), t)),
              (this._events = {}),
              (this.destroyed = !1);
          }
          return (
            (t.prototype.getDefaultCfgs = function () {
              return {};
            }),
            (t.prototype.initPlugin = function (t) {
              var e = this;
              e.set("graph", t);
              var n = e.getEvents(),
                r = {};
              Object(gt.e)(n, function (n, i) {
                var o = Object(gt.K)(e, n);
                (r[i] = o), t.on(i, o);
              }),
                (this._events = r),
                this.init();
            }),
            (t.prototype.init = function () {}),
            (t.prototype.getEvents = function () {
              return {};
            }),
            (t.prototype.get = function (t) {
              return this._cfgs[t];
            }),
            (t.prototype.set = function (t, e) {
              this._cfgs[t] = e;
            }),
            (t.prototype.destroy = function () {}),
            (t.prototype.destroyPlugin = function () {
              this.destroy();
              var t = this.get("graph"),
                e = this._events;
              Object(gt.e)(e, function (e, n) {
                t.off(n, e);
              }),
                (this._events = null),
                (this._cfgs = null),
                (this.destroyed = !0);
            }),
            t
          );
        })(),
        $e = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.getDefaultCfgs = function () {
              return {
                className: "f6-component-timebar",
                padding: 10,
                type: "trend",
                data: [],
                trend: { smooth: !0 },
                controllerCfg: { speed: 1 },
                slider: { start: 0.1, end: 0.9 },
                tick: { start: 0.1, end: 0.9 },
                filterEdge: !1,
              };
            }),
            (e.prototype.init = function () {
              var t = this;
              setTimeout(function () {
                t.render(), t.initEvent();
              });
            }),
            (e.prototype.filterData = function (t) {
              var e,
                n = t.value,
                r = this.get("data");
              if (r && 0 !== r.length) {
                var i = this.get("rangeChange"),
                  o = this.get("graph"),
                  a = Math.round(r.length * n[0]),
                  s = Math.round(r.length * n[1]);
                (s = s >= r.length ? r.length - 1 : s),
                  (a = a >= r.length ? r.length - 1 : a);
                var u =
                    null === (e = this._cfgs.tick) || void 0 === e
                      ? void 0
                      : e.tickLabelFormatter,
                  c = u ? u(r[a]) : r[a].date,
                  h = u ? u(r[s]) : r[s].date;
                if (i) i(o, c, h);
                else {
                  (!this.cacheGraphData ||
                    (this.cacheGraphData.nodes &&
                      0 === this.cacheGraphData.nodes.length)) &&
                    (this.cacheGraphData = o.get("data"));
                  var l = this.cacheGraphData.nodes.filter(function (t) {
                      return t.date >= r[a].date && t.date <= r[s].date;
                    }),
                    d = l.map(function (t) {
                      return t.id;
                    }),
                    f = [];
                  this.cacheGraphData.edges &&
                    ((f = this.cacheGraphData.edges.filter(function (t) {
                      return d.includes(t.source) && d.includes(t.target);
                    })),
                    this.get("filterEdge") &&
                      (f = f.filter(function (t) {
                        return t.date >= r[a].date && t.date <= r[s].date;
                      }))),
                    o.changeData({ nodes: l, edges: f });
                }
              } else console.warn("请配置 TimeBar 组件的数据");
            }),
            (e.prototype.render = function () {
              var t = this._cfgs,
                e = t.data,
                n = t.width,
                r = t.padding,
                i = t.type,
                o = t.trend,
                a = t.slider,
                s = t.controllerCfg,
                u = t.tick,
                c = t.sliderTick,
                l = this.get("graph"),
                d = l.get("uiGroup"),
                f = null;
              switch (i) {
                case "trend":
                  f = (function (t) {
                    var e = t.width,
                      n = void 0 === e ? 0 : e,
                      r = t.padding,
                      i = void 0 === r ? 0 : r,
                      o = t.group,
                      a = t.data,
                      s = void 0 === a ? [] : a,
                      u = t.slider,
                      c = void 0 === u ? {} : u,
                      l = t.controllerCfg,
                      d = void 0 === l ? {} : l,
                      f = t.trend,
                      p = void 0 === f ? {} : f,
                      g = t.sliderTick,
                      y = void 0 === g ? {} : g,
                      v = qe({
                        data: s,
                        width: n,
                        slider: Object(h.a)(
                          { width: c.width || n - 2 * i, paddingTop: 0 },
                          c || {},
                        ),
                        sliderTick: Object(h.a)({ width: n - 2 * i }, y || {}),
                        trend: Object(h.a)(
                          {
                            data:
                              null == s
                                ? void 0
                                : s.map(function (t) {
                                    return t.value;
                                  }),
                          },
                          p || {},
                        ),
                      });
                    return Ke(
                      {
                        width: n,
                        group: o,
                        control: Object(h.a)({ wrapperWidth: n }, d),
                      },
                      v,
                    );
                  })({
                    group: d,
                    width: n,
                    padding: r,
                    data: e,
                    trend: o,
                    slider: a,
                    controllerCfg: s,
                    sliderTick: c,
                  });
                  break;
                case "tick":
                  f = (function (t) {
                    var e = t.group,
                      n = t.data,
                      r = void 0 === n ? [] : n,
                      i = t.width,
                      o = t.padding,
                      a = t.controllerCfg,
                      s = void 0 === a ? {} : a,
                      u = t.tick,
                      c = void 0 === u ? {} : u,
                      l = Ze({
                        data: r,
                        tick: Object(h.a)({ width: i - o }, c),
                      });
                    return Ke(
                      {
                        width: i,
                        group: e,
                        control: Object(h.a)({ wrapperWidth: i }, s),
                      },
                      l,
                    );
                  })({
                    group: d,
                    width: n,
                    padding: r,
                    tick: u,
                    data: e,
                    controllerCfg: s,
                  });
                  break;
                case "simple":
                  f = (function (t) {
                    var e = t.width,
                      n = void 0 === e ? 0 : e,
                      r = t.padding,
                      i = void 0 === r ? 0 : r,
                      o = t.group,
                      a = t.data,
                      s = void 0 === a ? [] : a,
                      u = t.slider,
                      c = void 0 === u ? {} : u,
                      l = t.controllerCfg,
                      d = void 0 === l ? {} : l,
                      f = t.sliderTick,
                      p = void 0 === f ? {} : f,
                      g = Ge({
                        data: s,
                        width: n,
                        slider: Object(h.a)(
                          { width: c.width || n - 2 * i, paddingTop: 0 },
                          c,
                        ),
                        sliderTick: Object(h.a)({ width: n - 2 * i }, p),
                      });
                    return Ke(
                      {
                        width: n,
                        group: o,
                        control: Object(h.a)({ wrapperWidth: n }, d),
                      },
                      g,
                    );
                  })({
                    group: d,
                    width: n,
                    padding: r,
                    slider: a,
                    data: e,
                    controllerCfg: s,
                    sliderTick: c,
                  });
              }
              var p = l.get("height");
              d.translate(0, p - f.height);
            }),
            (e.prototype.initEvent = function () {
              Q(
                "RANGE_CHANGE",
                Object(gt.G)(this.filterData.bind(this), 200, {
                  trailing: !0,
                  leading: !0,
                }),
              );
            }),
            (e.prototype.destroy = function () {
              Z = {};
            }),
            e
          );
        })(Qe),
        Je = {
          getDefaultCfg: function () {
            return {};
          },
          getEvents: function () {
            return {};
          },
          updateCfg: function (t) {
            return Object.assign(this, t), !0;
          },
          shouldBegin: function () {
            return !0;
          },
          shouldUpdate: function () {
            return !0;
          },
          shouldEnd: function () {
            return !0;
          },
          bind: function (t) {
            var e = this.events;
            (this.graph = t),
              ("drag-canvas" !== this.type &&
                "brush-select" !== this.type &&
                "lasso-select" !== this.type) ||
                t.get("canvas").set("draggable", !0),
              Object(gt.e)(e, function (e, n) {
                t.on(n, e);
              });
          },
          unbind: function (t) {
            var e = this.events;
            ("drag-canvas" !== this.type &&
              "brush-select" !== this.type &&
              "lasso-select" !== this.type) ||
              t.get("canvas").set("draggable", !1),
              Object(gt.e)(e, function (e, n) {
                t.off(n, e);
              });
          },
          get: function (t) {
            return this[t];
          },
          set: function (t, e) {
            return (this[t] = e), this;
          },
        },
        tn = (function () {
          function t() {}
          return (
            (t.registerBehavior = function (e, n) {
              if (!n)
                throw new Error(
                  "please specify handler for this behavior: " + e,
                );
              var r = Object(gt.b)(Je);
              Object.assign(r, n);
              var i = function (t) {
                var e = this;
                Object.assign(this, this.getDefaultCfg(), t);
                var n = this.getEvents();
                this.events = null;
                var r = {};
                n &&
                  (Object(gt.e)(n, function (t, n) {
                    r[n] = Object(gt.K)(e, t);
                  }),
                  (this.events = r));
              };
              (i.prototype = r), (t.types[e] = i);
            }),
            (t.hasBehavior = function (e) {
              return !!t.types[e];
            }),
            (t.getBehavior = function (e) {
              return t.types[e];
            }),
            (t.types = {}),
            t
          );
        })(),
        en = tn,
        nn = n(14);
      function rn(t) {
        return (rn =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var on = {};
      function an(t) {
        return on.requestAnimationFrame
          ? on.requestAnimationFrame(t)
          : ("object" ===
              ("undefined" == typeof window ? "undefined" : rn(window)) &&
              window.requestAnimationFrame
              ? window.requestAnimationFrame
              : function (t) {
                  return setTimeout(t, 16);
                })(t);
      }
      var sn = n(2),
        un = function (t, e) {
          var n = t.nodes,
            r = t.edges,
            i = [],
            o = {};
          if (!n) throw new Error("invalid nodes data!");
          return (
            n &&
              n.forEach(function (t, e) {
                o[t.id] = e;
                i.push([]);
              }),
            r &&
              r.forEach(function (t) {
                var n = t.source,
                  r = t.target,
                  a = o[n],
                  s = o[r];
                (!a && 0 !== a) ||
                  (!s && 0 !== s) ||
                  ((i[a][s] = 1), e || (i[s][a] = 1));
              }),
            i
          );
        },
        cn = function (t, e) {
          return t === e;
        },
        hn = (function () {
          function t(t, e) {
            void 0 === e && (e = null), (this.value = t), (this.next = e);
          }
          return (
            (t.prototype.toString = function (t) {
              return t ? t(this.value) : "" + this.value;
            }),
            t
          );
        })(),
        ln = (function () {
          function t(t) {
            void 0 === t && (t = cn),
              (this.head = null),
              (this.tail = null),
              (this.compare = t);
          }
          return (
            (t.prototype.prepend = function (t) {
              var e = new hn(t, this.head);
              return (this.head = e), this.tail || (this.tail = e), this;
            }),
            (t.prototype.append = function (t) {
              var e = new hn(t);
              return this.head
                ? ((this.tail.next = e), (this.tail = e), this)
                : ((this.head = e), (this.tail = e), this);
            }),
            (t.prototype.delete = function (t) {
              if (!this.head) return null;
              for (
                var e = null;
                this.head && this.compare(this.head.value, t);

              )
                (e = this.head), (this.head = this.head.next);
              var n = this.head;
              if (null !== n)
                for (; n.next; )
                  this.compare(n.next.value, t)
                    ? ((e = n.next), (n.next = n.next.next))
                    : (n = n.next);
              return this.compare(this.tail.value, t) && (this.tail = n), e;
            }),
            (t.prototype.find = function (t) {
              var e = t.value,
                n = void 0 === e ? void 0 : e,
                r = t.callback,
                i = void 0 === r ? void 0 : r;
              if (!this.head) return null;
              for (var o = this.head; o; ) {
                if (i && i(o.value)) return o;
                if (void 0 !== n && this.compare(o.value, n)) return o;
                o = o.next;
              }
              return null;
            }),
            (t.prototype.deleteTail = function () {
              var t = this.tail;
              if (this.head === this.tail)
                return (this.head = null), (this.tail = null), t;
              for (var e = this.head; e.next; )
                e.next.next ? (e = e.next) : (e.next = null);
              return (this.tail = e), t;
            }),
            (t.prototype.deleteHead = function () {
              if (!this.head) return null;
              var t = this.head;
              return (
                this.head.next
                  ? (this.head = this.head.next)
                  : ((this.head = null), (this.tail = null)),
                t
              );
            }),
            (t.prototype.fromArray = function (t) {
              var e = this;
              return (
                t.forEach(function (t) {
                  return e.append(t);
                }),
                this
              );
            }),
            (t.prototype.toArray = function () {
              for (var t = [], e = this.head; e; ) t.push(e), (e = e.next);
              return t;
            }),
            (t.prototype.reverse = function () {
              for (var t = this.head, e = null, n = null; t; )
                (n = t.next), (t.next = e), (e = t), (t = n);
              (this.tail = this.head), (this.head = e);
            }),
            (t.prototype.toString = function (t) {
              return (
                void 0 === t && (t = void 0),
                this.toArray()
                  .map(function (e) {
                    return e.toString(t);
                  })
                  .toString()
              );
            }),
            t
          );
        })();
      !(function () {
        function t() {
          this.linkedList = new ln();
        }
        (t.prototype.isEmpty = function () {
          return !this.linkedList.head;
        }),
          (t.prototype.peek = function () {
            return this.linkedList.head ? this.linkedList.head.value : null;
          }),
          (t.prototype.enqueue = function (t) {
            this.linkedList.append(t);
          }),
          (t.prototype.dequeue = function () {
            var t = this.linkedList.deleteHead();
            return t ? t.value : null;
          }),
          (t.prototype.toString = function (t) {
            return this.linkedList.toString(t);
          });
      })();
      var dn = function (t) {
          var e = {},
            n = t.nodes,
            r = void 0 === n ? [] : n,
            i = t.edges,
            o = void 0 === i ? [] : i;
          return (
            r.forEach(function (t) {
              e[t.id] = { degree: 0, inDegree: 0, outDegree: 0 };
            }),
            o.forEach(function (t) {
              e[t.source].degree++,
                e[t.source].outDegree++,
                e[t.target].degree++,
                e[t.target].inDegree++;
            }),
            e
          );
        },
        fn = dn;
      var pn = function (t, e) {
          for (var n = un(t, e), r = [], i = n.length, o = 0; o < i; o += 1) {
            r[o] = [];
            for (var a = 0; a < i; a += 1)
              o === a
                ? (r[o][a] = 0)
                : 0 !== n[o][a] && n[o][a]
                ? (r[o][a] = n[o][a])
                : (r[o][a] = 1 / 0);
          }
          for (var s = 0; s < i; s += 1)
            for (o = 0; o < i; o += 1)
              for (a = 0; a < i; a += 1)
                r[o][a] > r[o][s] + r[s][a] && (r[o][a] = r[o][s] + r[s][a]);
          return r;
        },
        gn =
          ((function () {
            function t(t) {
              (this.count = t.length), (this.parent = {});
              for (var e = 0, n = t; e < n.length; e++) {
                var r = n[e];
                this.parent[r] = r;
              }
            }
            (t.prototype.find = function (t) {
              for (; this.parent[t] !== t; ) t = this.parent[t];
              return t;
            }),
              (t.prototype.union = function (t, e) {
                var n = this.find(t),
                  r = this.find(e);
                n !== r &&
                  (n < r
                    ? (this.parent[e] !== e && this.union(this.parent[e], t),
                      (this.parent[e] = this.parent[t]))
                    : (this.parent[t] !== t && this.union(this.parent[t], e),
                      (this.parent[t] = this.parent[e])));
              }),
              (t.prototype.connected = function (t, e) {
                return this.find(t) === this.find(e);
              });
          })(),
          function (t, e) {
            return t - e;
          }),
        yn =
          ((function () {
            function t(t) {
              void 0 === t && (t = gn), (this.compareFn = t), (this.list = []);
            }
            (t.prototype.getLeft = function (t) {
              return 2 * t + 1;
            }),
              (t.prototype.getRight = function (t) {
                return 2 * t + 2;
              }),
              (t.prototype.getParent = function (t) {
                return 0 === t ? null : Math.floor((t - 1) / 2);
              }),
              (t.prototype.isEmpty = function () {
                return this.list.length <= 0;
              }),
              (t.prototype.top = function () {
                return this.isEmpty() ? void 0 : this.list[0];
              }),
              (t.prototype.delMin = function () {
                var t = this.top(),
                  e = this.list.pop();
                return (
                  this.list.length > 0 &&
                    ((this.list[0] = e), this.moveDown(0)),
                  t
                );
              }),
              (t.prototype.insert = function (t) {
                if (null !== t) {
                  this.list.push(t);
                  var e = this.list.length - 1;
                  return this.moveUp(e), !0;
                }
                return !1;
              }),
              (t.prototype.moveUp = function (t) {
                for (
                  var e = this.getParent(t);
                  t && t > 0 && this.compareFn(this.list[e], this.list[t]) > 0;

                ) {
                  var n = this.list[e];
                  (this.list[e] = this.list[t]),
                    (this.list[t] = n),
                    (t = e),
                    (e = this.getParent(t));
                }
              }),
              (t.prototype.moveDown = function (t) {
                var e,
                  n = t,
                  r = this.getLeft(t),
                  i = this.getRight(t),
                  o = this.list.length;
                null !== r &&
                r < o &&
                this.compareFn(this.list[n], this.list[r]) > 0
                  ? (n = r)
                  : null !== i &&
                    i < o &&
                    this.compareFn(this.list[n], this.list[i]) > 0 &&
                    (n = i),
                  t !== n &&
                    ((e = [this.list[n], this.list[t]]),
                    (this.list[t] = e[0]),
                    (this.list[n] = e[1]),
                    this.moveDown(n));
              });
          })(),
          function (t, e, n, r) {
            void 0 === t && (t = -1),
              void 0 === e && (e = -1),
              void 0 === n && (n = -1),
              void 0 === r && (r = "-1"),
              (this.id = t),
              (this.from = e),
              (this.to = n),
              (this.label = r);
          }),
        vn = (function () {
          function t(t, e) {
            void 0 === t && (t = -1),
              void 0 === e && (e = "-1"),
              (this.id = t),
              (this.label = e),
              (this.edges = []),
              (this.edgeMap = {});
          }
          return (
            (t.prototype.addEdge = function (t) {
              this.edges.push(t), (this.edgeMap[t.id] = t);
            }),
            t
          );
        })(),
        mn = (function () {
          function t(t, e, n) {
            void 0 === t && (t = -1),
              void 0 === e && (e = !0),
              void 0 === n && (n = !1),
              (this.id = t),
              (this.edgeIdAutoIncrease = e),
              (this.edges = []),
              (this.nodes = []),
              (this.nodeMap = {}),
              (this.edgeMap = {}),
              (this.nodeLabelMap = {}),
              (this.edgeLabelMap = {}),
              (this.counter = 0),
              (this.directed = n);
          }
          return (
            (t.prototype.getNodeNum = function () {
              return this.nodes.length;
            }),
            (t.prototype.addNode = function (t, e) {
              if (!this.nodeMap[t]) {
                var n = new vn(t, e);
                this.nodes.push(n),
                  (this.nodeMap[t] = n),
                  this.nodeLabelMap[e] || (this.nodeLabelMap[e] = []),
                  this.nodeLabelMap[e].push(t);
              }
            }),
            (t.prototype.addEdge = function (t, e, n, r) {
              if (
                ((this.edgeIdAutoIncrease || void 0 === t) &&
                  (t = this.counter++),
                !(
                  this.nodeMap[e] &&
                  this.nodeMap[n] &&
                  this.nodeMap[n].edgeMap[t]
                ))
              ) {
                var i = new yn(t, e, n, r);
                if (
                  (this.edges.push(i),
                  (this.edgeMap[t] = i),
                  this.nodeMap[e].addEdge(i),
                  this.edgeLabelMap[r] || (this.edgeLabelMap[r] = []),
                  this.edgeLabelMap[r].push(i),
                  !this.directed)
                ) {
                  var o = new yn(t, n, e, r);
                  this.nodeMap[n].addEdge(o), this.edgeLabelMap[r].push(o);
                }
              }
            }),
            t
          );
        })(),
        bn = (function () {
          function t(t, e, n, r, i) {
            (this.fromNode = t),
              (this.toNode = e),
              (this.nodeEdgeNodeLabel = {
                nodeLabel1: n || "-1",
                edgeLabel: r || "-1",
                nodeLabel2: i || "-1",
              });
          }
          return (
            (t.prototype.equalTo = function (t) {
              return (
                this.fromNode === t.formNode &&
                this.toNode === t.toNode &&
                this.nodeEdgeNodeLabel === t.nodeEdgeNodeLabel
              );
            }),
            (t.prototype.notEqualTo = function (t) {
              return !this.equalTo(t);
            }),
            t
          );
        })(),
        xn = (function () {
          function t() {
            (this.rmpath = []), (this.dfsEdgeList = []);
          }
          return (
            (t.prototype.equalTo = function (t) {
              var e = this.dfsEdgeList.length;
              if (e !== t.length) return !1;
              for (var n = 0; n < e; n++)
                if (this.dfsEdgeList[n] !== t[n]) return !1;
              return !0;
            }),
            (t.prototype.notEqualTo = function (t) {
              return !this.equalTo(t);
            }),
            (t.prototype.pushBack = function (t, e, n, r, i) {
              return (
                this.dfsEdgeList.push(new bn(t, e, n, r, i)), this.dfsEdgeList
              );
            }),
            (t.prototype.toGraph = function (t, e) {
              void 0 === t && (t = -1), void 0 === e && (e = !1);
              var n = new mn(t, !0, e);
              return (
                this.dfsEdgeList.forEach(function (t) {
                  var e = t.fromNode,
                    r = t.toNode,
                    i = t.nodeEdgeNodeLabel,
                    o = i.nodeLabel1,
                    a = i.edgeLabel,
                    s = i.nodeLabel2;
                  "-1" !== o && n.addNode(e, o),
                    "-1" !== s && n.addNode(r, s),
                    n.addEdge(void 0, e, r, a);
                }),
                n
              );
            }),
            (t.prototype.buildRmpath = function () {
              this.rmpath = [];
              for (
                var t = void 0, e = this.dfsEdgeList.length - 1;
                e >= 0;
                e--
              ) {
                var n = this.dfsEdgeList[e],
                  r = n.fromNode,
                  i = n.toNode;
                r < i &&
                  (void 0 === t || i === t) &&
                  (this.rmpath.push(e), (t = r));
              }
              return this.rmpath;
            }),
            (t.prototype.getNodeNum = function () {
              var t = {};
              return (
                this.dfsEdgeList.forEach(function (e) {
                  t[e.fromNode] || (t[e.fromNode] = !0),
                    t[e.toNode] || (t[e.toNode] = !0);
                }),
                Object.keys(t).length
              );
            }),
            t
          );
        })(),
        wn = (function () {
          function t(t) {
            if (
              ((this.his = {}),
              (this.nodesUsed = {}),
              (this.edgesUsed = {}),
              (this.edges = []),
              t)
            ) {
              for (; t; ) {
                var e = t.edge;
                this.edges.push(e),
                  (this.nodesUsed[e.from] = 1),
                  (this.nodesUsed[e.to] = 1),
                  (this.edgesUsed[e.id] = 1),
                  (t = t.preNode);
              }
              this.edges = this.edges.reverse();
            }
          }
          return (
            (t.prototype.hasNode = function (t) {
              return 1 === this.nodesUsed[t.id];
            }),
            (t.prototype.hasEdge = function (t) {
              return 1 === this.edgesUsed[t.id];
            }),
            t
          );
        })();
      !(function () {
        function t(t) {
          var e = t.graphs,
            n = t.minSupport,
            r = void 0 === n ? 2 : n,
            i = t.minNodeNum,
            o = void 0 === i ? 1 : i,
            a = t.maxNodeNum,
            s = void 0 === a ? 4 : a,
            u = t.top,
            c = void 0 === u ? 10 : u,
            h = t.directed,
            l = void 0 !== h && h,
            d = t.verbose,
            f = void 0 !== d && d;
          (this.graphs = e),
            (this.dfsCode = new xn()),
            (this.support = 0),
            (this.frequentSize1Subgraphs = []),
            (this.frequentSubgraphs = []),
            (this.minSupport = r),
            (this.top = c),
            (this.directed = l),
            (this.counter = 0),
            (this.maxNodeNum = s),
            (this.minNodeNum = o),
            (this.verbose = f),
            this.maxNodeNum < this.minNodeNum &&
              (this.maxNodeNum = this.minNodeNum),
            (this.reportDF = []);
        }
        (t.prototype.findForwardRootEdges = function (t, e) {
          var n = this,
            r = [],
            i = t.nodeMap;
          return (
            e.edges.forEach(function (t) {
              (n.directed || e.label <= i[t.to].label) && r.push(t);
            }),
            r
          );
        }),
          (t.prototype.findBackwardEdge = function (t, e, n, r) {
            if (!this.directed && e === n) return null;
            for (
              var i = t.nodeMap, o = i[n.to].edges, a = o.length, s = 0;
              s < a;
              s++
            ) {
              var u = o[s];
              if (!r.hasEdge(u) && u.to === e.from)
                if (this.directed) {
                  if (
                    i[e.from].label < i[n.to].label ||
                    (i[e.from].label === i[n.to].label && e.label <= u.label)
                  )
                    return u;
                } else if (
                  e.label < u.label ||
                  (e.label === u.label && i[e.to].label <= i[n.to].label)
                )
                  return u;
            }
            return null;
          }),
          (t.prototype.findForwardPureEdges = function (t, e, n, r) {
            for (
              var i = [], o = e.to, a = t.nodeMap[o].edges, s = a.length, u = 0;
              u < s;
              u++
            ) {
              var c = a[u],
                h = t.nodeMap[c.to];
              n <= h.label && !r.hasNode(h) && i.push(c);
            }
            return i;
          }),
          (t.prototype.findForwardRmpathEdges = function (t, e, n, r) {
            for (
              var i = [],
                o = t.nodeMap,
                a = o[e.to].label,
                s = o[e.from].edges,
                u = s.length,
                c = 0;
              c < u;
              c++
            ) {
              var h = s[c],
                l = o[h.to].label;
              e.to === h.to ||
                n > l ||
                r.hasNode(o[h.to]) ||
                ((e.label < h.label || (e.label === h.label && a <= l)) &&
                  i.push(h));
            }
            return i;
          }),
          (t.prototype.getSupport = function (t) {
            var e = {};
            return (
              t.forEach(function (t) {
                e[t.graphId] || (e[t.graphId] = !0);
              }),
              Object.keys(e).length
            );
          }),
          (t.prototype.findMinLabel = function (t) {
            var e = void 0;
            return (
              Object.keys(t).forEach(function (n) {
                var r = t[n],
                  i = r.nodeLabel1,
                  o = r.edgeLabel,
                  a = r.nodeLabel2;
                e
                  ? (i < e.nodeLabel1 ||
                      (i === e.nodeLabel1 && o < e.edgeLabel) ||
                      (i === e.nodeLabel1 &&
                        o === e.edgeLabel &&
                        a < e.nodeLabel2)) &&
                    (e = { nodeLabel1: i, edgeLabel: o, nodeLabel2: a })
                  : (e = { nodeLabel1: i, edgeLabel: o, nodeLabel2: a });
              }),
              e
            );
          }),
          (t.prototype.isMin = function () {
            var t = this,
              e = this.dfsCode;
            if (
              (this.verbose && console.log("isMin checking", e),
              1 === e.dfsEdgeList.length)
            )
              return !0;
            var n = this.directed,
              r = e.toGraph(-1, n),
              i = r.nodeMap,
              o = new xn(),
              a = {};
            r.nodes.forEach(function (e) {
              t.findForwardRootEdges(r, e).forEach(function (t) {
                var n = i[t.to],
                  o = e.label + "-" + t.label + "-" + n.label;
                a[o] ||
                  (a[o] = {
                    projected: [],
                    nodeLabel1: e.label,
                    edgeLabel: t.label,
                    nodeLabel2: n.label,
                  });
                var s = { graphId: r.id, edge: t, preNode: null };
                a[o].projected.push(s);
              });
            });
            var s = this.findMinLabel(a);
            o.dfsEdgeList.push(
              new bn(0, 1, s.nodeLabel1, s.edgeLabel, s.nodeLabel2),
            );
            var u = s.nodeLabel1 + "-" + s.edgeLabel + "-" + s.nodeLabel2;
            return (function a(s) {
              for (
                var u = o.buildRmpath(),
                  c = o.dfsEdgeList[0].nodeEdgeNodeLabel.nodeLabel1,
                  h = o.dfsEdgeList[u[0]].toNode,
                  l = {},
                  d = !1,
                  f = 0,
                  p = n ? -1 : 0,
                  g = function (e) {
                    if (d) return "break";
                    s.forEach(function (n) {
                      var i = new wn(n),
                        a = t.findBackwardEdge(
                          r,
                          i.edges[u[e]],
                          i.edges[u[0]],
                          i,
                        );
                      a &&
                        (l[a.label] ||
                          (l[a.label] = { projected: [], edgeLabel: a.label }),
                        l[a.label].projected.push({
                          graphId: r.id,
                          edge: l,
                          preNode: n,
                        }),
                        (f = o.dfsEdgeList[u[e]].fromNode),
                        (d = !0));
                    });
                  },
                  y = u.length - 1;
                y > p;
                y--
              ) {
                if ("break" === g(y)) break;
              }
              if (d) {
                var v = t.findMinLabel(l);
                o.dfsEdgeList.push(new bn(h, f, "-1", v.edgeLabel, "-1"));
                var m = o.dfsEdgeList.length - 1;
                return (
                  t.dfsCode.dfsEdgeList[m] === o.dfsEdgeList[m] &&
                  a(l[v.edgeLabel].projected)
                );
              }
              var b = {};
              d = !1;
              var x = 0;
              s.forEach(function (e) {
                var n = new wn(e),
                  o = t.findForwardPureEdges(r, n.edges[u[0]], c, n);
                o.length > 0 &&
                  ((d = !0),
                  (x = h),
                  o.forEach(function (t) {
                    var n = t.label + "-" + i[t.to].label;
                    b[n] ||
                      (b[n] = {
                        projected: [],
                        edgeLabel: t.label,
                        nodeLabel2: i[t.to].label,
                      }),
                      b[n].projected.push({
                        graphId: r.id,
                        edge: t,
                        preNode: e,
                      });
                  }));
              });
              var w = u.length,
                O = function (e) {
                  if (d) return "break";
                  var n = u[e];
                  s.forEach(function (e) {
                    var a = new wn(e),
                      s = t.findForwardRmpathEdges(r, a.edges[n], c, a);
                    s.length > 0 &&
                      ((d = !0),
                      (x = o.dfsEdgeList[n].fromNode),
                      s.forEach(function (t) {
                        var n = t.label + "-" + i[t.to].label;
                        b[n] ||
                          (b[n] = {
                            projected: [],
                            edgeLabel: t.label,
                            nodeLabel2: i[t.to].label,
                          }),
                          b[n].projected.push({
                            graphId: r.id,
                            edge: t,
                            preNode: e,
                          });
                      }));
                  });
                };
              for (y = 0; y < w; y++) {
                if ("break" === O(y)) break;
              }
              if (!d) return !0;
              var M = t.findMinLabel(b);
              o.dfsEdgeList.push(
                new bn(x, h + 1, "-1", M.edgeLabel, M.nodeLabel2),
              );
              var S = o.dfsEdgeList.length - 1;
              return (
                e.dfsEdgeList[S] === o.dfsEdgeList[S] &&
                a(b[M.edgeLabel + "-" + M.nodeLabel2].projected)
              );
            })(a[u].projected);
          }),
          (t.prototype.report = function () {
            if (!(this.dfsCode.getNodeNum() < this.minNodeNum)) {
              this.counter++;
              var t = this.dfsCode.toGraph(this.counter, this.directed);
              this.frequentSubgraphs.push(Object(gt.b)(t));
            }
          }),
          (t.prototype.subGraphMining = function (t) {
            var e = this;
            if (!(this.getSupport(t) < this.minSupport) && this.isMin()) {
              this.report();
              var n = this.dfsCode.getNodeNum(),
                r = this.dfsCode.buildRmpath(),
                i = this.dfsCode.dfsEdgeList[r[0]].toNode,
                o = this.dfsCode.dfsEdgeList[0].nodeEdgeNodeLabel.nodeLabel1,
                a = {},
                s = {};
              t.forEach(function (t) {
                for (
                  var u = e.graphs[t.graphId],
                    c = u.nodeMap,
                    h = new wn(t),
                    l = r.length - 1;
                  l >= 0;
                  l--
                ) {
                  var d = e.findBackwardEdge(
                    u,
                    h.edges[r[l]],
                    h.edges[r[0]],
                    h,
                  );
                  if (d) {
                    var f =
                      e.dfsCode.dfsEdgeList[r[l]].fromNode + "-" + d.label;
                    s[f] ||
                      (s[f] = {
                        projected: [],
                        toNodeId: e.dfsCode.dfsEdgeList[r[l]].fromNode,
                        edgeLabel: d.label,
                      }),
                      s[f].projected.push({
                        graphId: t.graphId,
                        edge: d,
                        preNode: t,
                      });
                  }
                }
                if (!(n >= e.maxNodeNum)) {
                  e.findForwardPureEdges(u, h.edges[r[0]], o, h).forEach(
                    function (e) {
                      var n = i + "-" + e.label + "-" + c[e.to].label;
                      a[n] ||
                        (a[n] = {
                          projected: [],
                          fromNodeId: i,
                          edgeLabel: e.label,
                          nodeLabel2: c[e.to].label,
                        }),
                        a[n].projected.push({
                          graphId: t.graphId,
                          edge: e,
                          preNode: t,
                        });
                    },
                  );
                  var p = function (n) {
                    e.findForwardRmpathEdges(u, h.edges[r[n]], o, h).forEach(
                      function (i) {
                        var o =
                          e.dfsCode.dfsEdgeList[r[n]].fromNode +
                          "-" +
                          i.label +
                          "-" +
                          c[i.to].label;
                        a[o] ||
                          (a[o] = {
                            projected: [],
                            fromNodeId: e.dfsCode.dfsEdgeList[r[n]].fromNode,
                            edgeLabel: i.label,
                            nodeLabel2: c[i.to].label,
                          }),
                          a[o].projected.push({
                            graphId: t.graphId,
                            edge: i,
                            preNode: t,
                          });
                      },
                    );
                  };
                  for (l = 0; l < r.length; l++) p(l);
                }
              }),
                Object.keys(s).forEach(function (t) {
                  var n = s[t],
                    r = n.toNodeId,
                    o = n.edgeLabel;
                  e.dfsCode.dfsEdgeList.push(new bn(i, r, "-1", o, "-1")),
                    e.subGraphMining(s[t].projected),
                    e.dfsCode.dfsEdgeList.pop();
                }),
                Object.keys(a).forEach(function (t) {
                  var n = a[t],
                    r = n.fromNodeId,
                    o = n.edgeLabel,
                    s = n.nodeLabel2;
                  e.dfsCode.dfsEdgeList.push(new bn(r, i + 1, "-1", o, s)),
                    e.subGraphMining(a[t].projected),
                    e.dfsCode.dfsEdgeList.pop();
                });
            }
          }),
          (t.prototype.generate1EdgeFrequentSubGraphs = function () {
            var t = this.graphs,
              e = this.directed,
              n = this.minSupport,
              r = this.frequentSize1Subgraphs,
              i = {},
              o = {},
              a = {},
              s = {};
            return (
              Object.keys(t).forEach(function (n) {
                var r = t[n],
                  u = r.nodeMap;
                r.nodes.forEach(function (t, r) {
                  var c = t.label,
                    h = n + "-" + c;
                  if (!a[h]) {
                    var l = i[c] || 0;
                    l++, (i[c] = l);
                  }
                  (a[h] = { graphKey: n, label: c }),
                    t.edges.forEach(function (t) {
                      var r = c,
                        i = u[t.to].label;
                      if (!e && r > i) {
                        var a = i;
                        (i = r), (r = a);
                      }
                      var h = t.label,
                        l = n + "-" + r + "-" + h + "-" + i,
                        d = r + "-" + h + "-" + i;
                      if (!o[d]) {
                        var f = o[d] || 0;
                        f++, (o[d] = f);
                      }
                      s[l] = {
                        graphId: n,
                        nodeLabel1: r,
                        edgeLabel: h,
                        nodeLabel2: i,
                      };
                    });
                });
              }),
              Object.keys(i).forEach(function (t) {
                if (!(i[t] < n)) {
                  var e = { nodes: [], edges: [] };
                  e.nodes.push({ id: "0", label: t }), r.push(e);
                }
              }),
              r
            );
          }),
          (t.prototype.run = function () {
            var t = this;
            if (
              ((this.frequentSize1Subgraphs =
                this.generate1EdgeFrequentSubGraphs()),
              !(this.maxNodeNum < 2))
            ) {
              var e = this.graphs,
                n = (this.directed, {});
              Object.keys(e).forEach(function (r) {
                var i = e[r],
                  o = i.nodeMap;
                i.nodes.forEach(function (e) {
                  t.findForwardRootEdges(i, e).forEach(function (t) {
                    var i = o[t.to],
                      a = e.label + "-" + t.label + "-" + i.label;
                    n[a] ||
                      (n[a] = {
                        projected: [],
                        nodeLabel1: e.label,
                        edgeLabel: t.label,
                        nodeLabel2: i.label,
                      });
                    var s = { graphId: r, edge: t, preNode: null };
                    n[a].projected.push(s);
                  });
                });
              }),
                Object.keys(n).forEach(function (e) {
                  var r = n[e],
                    i = r.projected,
                    o = r.nodeLabel1,
                    a = r.edgeLabel,
                    s = r.nodeLabel2;
                  t.dfsCode.dfsEdgeList.push(new bn(0, 1, o, a, s)),
                    t.subGraphMining(i),
                    t.dfsCode.dfsEdgeList.pop();
                });
            }
          });
      })();
      var On = (function () {
          function t(t) {
            void 0 === t && (t = 10),
              (this.linkedList = new ln()),
              (this.maxStep = t);
          }
          return (
            Object.defineProperty(t.prototype, "length", {
              get: function () {
                return this.linkedList.toArray().length;
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.isEmpty = function () {
              return !this.linkedList.head;
            }),
            (t.prototype.isMaxStack = function () {
              return this.toArray().length >= this.maxStep;
            }),
            (t.prototype.peek = function () {
              return this.isEmpty() ? null : this.linkedList.head.value;
            }),
            (t.prototype.push = function (t) {
              this.linkedList.prepend(t),
                this.length > this.maxStep && this.linkedList.deleteTail();
            }),
            (t.prototype.pop = function () {
              var t = this.linkedList.deleteHead();
              return t ? t.value : null;
            }),
            (t.prototype.toArray = function () {
              return this.linkedList.toArray().map(function (t) {
                return t.value;
              });
            }),
            (t.prototype.clear = function () {
              for (; !this.isEmpty(); ) this.pop();
            }),
            t
          );
        })(),
        Mn = sn.a.transform,
        Sn = function (t) {
          return function (e, n) {
            return e[t] - n[t];
          };
        },
        Cn = function (t, e, n) {
          return t >= e && t <= n;
        },
        jn = function (t, e, n, r) {
          var i = n.x - t.x,
            o = n.y - t.y,
            a = e.x - t.x,
            s = e.y - t.y,
            u = r.x - n.x,
            c = r.y - n.y,
            h = a * c - s * u,
            l = 1 / h;
          if (h * h > 1e-4 * (a * a + s * s) * (u * u + c * c)) {
            var d = (i * c - o * u) * l,
              f = (i * s - o * a) * l;
            return Cn(d, 0, 1) && Cn(f, 0, 1)
              ? { x: t.x + d * a, y: t.y + d * s }
              : null;
          }
          return null;
        },
        kn = function (t, e) {
          var n = t.x,
            r = t.y,
            i = t.width,
            o = t.height,
            a = [],
            s = { x: n + i / 2, y: r + o / 2 };
          a.push({ x: n, y: r }),
            a.push({ x: n + i, y: r }),
            a.push({ x: n + i, y: r + o }),
            a.push({ x: n, y: r + o }),
            a.push({ x: n, y: r });
          for (
            var u = null, c = 1;
            c < a.length && !(u = jn(a[c - 1], a[c], s, e));
            c++
          );
          return u;
        },
        En = function (t, e) {
          var n = t.x,
            r = t.y,
            i = t.r,
            o = e.x - n,
            a = e.y - r;
          if (Math.sqrt(o * o + a * a) < i) return null;
          var s = Math.sign(o),
            u = Math.sign(a),
            c = Math.atan(a / o);
          return {
            x: n + Math.abs(i * Math.cos(c)) * s,
            y: r + Math.abs(i * Math.sin(c)) * u,
          };
        },
        Nn = function (t, e) {
          var n = t.rx,
            r = t.ry,
            i = t.x,
            o = t.y,
            a = e.x - i,
            s = e.y - o,
            u = Math.atan2(s / r, a / n);
          return (
            u < 0 && (u += 2 * Math.PI),
            { x: i + n * Math.cos(u), y: o + r * Math.sin(u) }
          );
        },
        Tn = function (t, e, n) {
          void 0 === n && (n = 1);
          var r = [t.x, t.y, n];
          return (
            (e && !isNaN(e[0])) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
            sn.d.transformMat3(r, r, e),
            { x: r[0], y: r[1] }
          );
        },
        Pn = function (t, e, n) {
          void 0 === n && (n = 1),
            (e && !isNaN(e[0])) || (e = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
          var r = sn.b.invert([1, 0, 0, 0, 1, 0, 0, 0, 1], e);
          r || (r = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
          var i = [t.x, t.y, n];
          return sn.d.transformMat3(i, i, r), { x: i[0], y: i[1] };
        },
        In = function (t, e, n) {
          var r = t.x - e.x,
            i = t.y - e.y,
            o = t.x - n.x,
            a = t.y - n.y,
            s = (t.x * t.x - e.x * e.x - e.y * e.y + t.y * t.y) / 2,
            u = (t.x * t.x - n.x * n.x - n.y * n.y + t.y * t.y) / 2,
            c = i * o - r * a;
          return { x: -(a * s - i * u) / c, y: -(r * u - o * s) / c };
        },
        Bn = function (t, e) {
          var n = t.x - e.x,
            r = t.y - e.y;
          return Math.sqrt(n * n + r * r);
        },
        An = function (t, e) {
          var n = [];
          return (
            t.forEach(function (t) {
              var r = [];
              t.forEach(function (t) {
                r.push(t * e);
              }),
                n.push(r);
            }),
            n
          );
        },
        Ln = function (t) {
          for (var e = [], n = t.length, r = 0; r < n; r += 1) {
            e[r] = [];
            for (var i = 0; i < n; i += 1)
              r === i
                ? (e[r][i] = 0)
                : 0 !== t[r][i] && t[r][i]
                ? (e[r][i] = t[r][i])
                : (e[r][i] = 1 / 0);
          }
          for (var o = 0; o < n; o += 1)
            for (r = 0; r < n; r += 1)
              for (i = 0; i < n; i += 1)
                e[r][i] > e[r][o] + e[o][i] && (e[r][i] = e[r][o] + e[o][i]);
          return e;
        },
        Dn = function (t, e) {
          var n = t.nodes,
            r = t.edges,
            i = [],
            o = {};
          if (!n) throw new Error("invalid nodes data!");
          return (
            n &&
              n.forEach(function (t, e) {
                o[t.id] = e;
                i.push([]);
              }),
            r &&
              r.forEach(function (t) {
                var n = t.source,
                  r = t.target,
                  a = o[n],
                  s = o[r];
                (i[a][s] = 1), e || (i[s][a] = 1);
              }),
            i
          );
        },
        _n = function (t, e) {
          t.translate(e.x, e.y);
        },
        Rn = function (t, e) {
          var n = t.getMatrix();
          n || (n = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
          var r = t.getCanvasBBox(),
            i = e.x - r.minX,
            o = e.y - r.minY,
            a = Mn(n, [["t", i, o]]);
          t.setMatrix(a);
        },
        Yn = function (t, e) {
          var n = t.getMatrix();
          n || (n = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
          var r = e;
          Object(gt.m)(e) || (r = [e, e]),
            Object(gt.m)(e) && 1 === e.length && (r = [e[0], e[0]]),
            (n = Mn(n, [["s", r[0], r[1]]])),
            t.setMatrix(n);
        },
        Fn = function (t, e) {
          var n = t.getMatrix();
          n || (n = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
            (n = Mn(n, [["r", e]])),
            t.setMatrix(n);
        },
        zn = function (t, e, n) {
          for (var r = [], i = 0; i < t; i++) r[i] = 0;
          return (
            n.forEach(function (t) {
              t.source && (r[e[t.source]] += 1),
                t.target && (r[e[t.target]] += 1);
            }),
            r
          );
        };
      function Xn(t, e, n) {
        return (
          (n[0] - t[0]) * (e[1] - t[1]) == (e[0] - t[0]) * (n[1] - t[1]) &&
          Math.min(t[0], e[0]) <= n[0] &&
          n[0] <= Math.max(t[0], e[0]) &&
          Math.min(t[1], e[1]) <= n[1] &&
          n[1] <= Math.max(t[1], e[1])
        );
      }
      var Wn = function (t, e, n) {
          var r = !1,
            i = t.length;
          function o(t) {
            return Math.abs(t) < 1e-6 ? 0 : t < 0 ? -1 : 1;
          }
          if (i <= 2) return !1;
          for (var a = 0; a < i; a++) {
            var s = t[a],
              u = t[(a + 1) % i];
            if (Xn(s, u, [e, n])) return !0;
            o(s[1] - n) > 0 != o(u[1] - n) > 0 &&
              o(e - ((n - s[1]) * (s[0] - u[0])) / (s[1] - u[1]) - s[0]) < 0 &&
              (r = !r);
          }
          return r;
        },
        Gn = function (t, e) {
          return !(
            e.minX > t.maxX ||
            e.maxX < t.minX ||
            e.minY > t.maxY ||
            e.maxY < t.minY
          );
        },
        qn = function (t, e) {
          var n = function (t) {
              var e = t.map(function (t) {
                  return t[0];
                }),
                n = t.map(function (t) {
                  return t[1];
                });
              return {
                minX: Math.min.apply(null, e),
                maxX: Math.max.apply(null, e),
                minY: Math.min.apply(null, n),
                maxY: Math.max.apply(null, n),
              };
            },
            r = function (t) {
              for (var e = [], n = t.length, r = 0; r < n - 1; r++) {
                var i = t[r],
                  o = t[r + 1];
                e.push({
                  from: { x: i[0], y: i[1] },
                  to: { x: o[0], y: o[1] },
                });
              }
              if (e.length > 1) {
                var a = t[0],
                  s = t[n - 1];
                e.push({
                  from: { x: s[0], y: s[1] },
                  to: { x: a[0], y: a[1] },
                });
              }
              return e;
            };
          if (t.length < 2 || e.length < 2) return !1;
          var i = n(t),
            o = n(e);
          if (!Gn(i, o)) return !1;
          var a = !1;
          if (
            (Object(gt.e)(e, function (e) {
              if (Wn(t, e[0], e[1])) return (a = !0), !1;
            }),
            a)
          )
            return !0;
          if (
            (Object(gt.e)(t, function (t) {
              if (Wn(e, t[0], t[1])) return (a = !0), !1;
            }),
            a)
          )
            return !0;
          var s = r(t),
            u = r(e),
            c = !1;
          return (
            Object(gt.e)(u, function (t) {
              if (
                (function (t, e) {
                  var n = !1;
                  return (
                    Object(gt.e)(t, function (t) {
                      if (jn(t.from, t.to, e.from, e.to)) return (n = !0), !1;
                    }),
                    n
                  );
                })(s, t)
              )
                return (c = !0), !1;
            }),
            c
          );
        },
        Hn = (function () {
          function t(t, e, n, r) {
            (this.x1 = t), (this.y1 = e), (this.x2 = n), (this.y2 = r);
          }
          return (
            (t.prototype.getBBox = function () {
              var t = Math.min(this.x1, this.x2),
                e = Math.min(this.y1, this.y2),
                n = Math.max(this.x1, this.x2),
                r = Math.max(this.y1, this.y2);
              return {
                x: t,
                y: e,
                minX: t,
                minY: e,
                maxX: n,
                maxY: r,
                width: n - t,
                height: r - e,
              };
            }),
            t
          );
        })(),
        Vn = function (t, e) {
          return {
            top: [t.minX, t.minY, t.maxX, t.minY],
            left: [t.minX, t.minY, t.minX, t.maxY],
            bottom: [t.minX, t.maxY, t.maxX, t.maxY],
            right: [t.maxX, t.minY, t.maxX, t.maxY],
          }[e];
        },
        Un = function (t, e) {
          var n = (e.x2 - e.x1) * (t.y1 - e.y1) - (e.y2 - e.y1) * (t.x1 - e.x1),
            r = (t.x2 - t.x1) * (t.y1 - e.y1) - (t.y2 - t.y1) * (t.x1 - e.x1),
            i = (e.y2 - e.y1) * (t.x2 - t.x1) - (e.x2 - e.x1) * (t.y2 - t.y1);
          if (i) {
            var o = n / i,
              a = r / i;
            if (o >= 0 && o <= 1 && a >= 0 && a <= 1) return o;
          }
          return Number.POSITIVE_INFINITY;
        },
        Zn = function (t, e) {
          for (
            var n = ["top", "left", "bottom", "right"],
              r = t.getBBox(),
              i = 0,
              o = [],
              a = 0;
            a < 4;
            a++
          ) {
            var s = Vn(r, n[a]),
              u = s[0],
              c = s[1],
              h = s[2],
              l = s[3];
            (o[a] = jn(
              { x: e.x1, y: e.y1 },
              { x: e.x2, y: e.y2 },
              { x: u, y: c },
              { x: h, y: l },
            )),
              o[a] && (i += 1);
          }
          return [o, i];
        },
        Kn = function (t, e) {
          for (
            var n = ["top", "left", "bottom", "right"],
              r = t.getBBox(),
              i = Number.POSITIVE_INFINITY,
              o = 0,
              a = 0;
            a < 4;
            a++
          ) {
            var s = Vn(r, n[a]),
              u = s[0],
              c = s[1],
              h = s[2],
              l = s[3],
              d = Un(e, new Hn(u, c, h, l));
            (d = Math.abs(d - 0.5)) >= 0 &&
              d <= 1 &&
              ((o += 1), (i = d < i ? d : i));
          }
          return 0 === o ? -1 : i;
        },
        Qn = function (t) {
          var e = 0,
            n = 0;
          if (t.length > 0) {
            for (var r = 0, i = t; r < i.length; r++) {
              var o = i[r];
              (e += o.x), (n += o.y);
            }
            (e /= t.length), (n /= t.length);
          }
          return { x: e, y: n };
        },
        $n = function (t, e) {
          return Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2);
        },
        Jn = function (t, e) {
          var n,
            r = e.x1,
            i = e.y1,
            o = e.x2 - r,
            a = e.y2 - i,
            s = t.x - r,
            u = t.y - i,
            c = s * o + u * a;
          n =
            c <= 0 || (c = (s = o - s) * o + (u = a - u) * a) <= 0
              ? 0
              : (c * c) / (o * o + a * a);
          var h = s * s + u * u - n;
          return h < 0 && (h = 0), h;
        },
        tr = function (t, e, n) {
          return (
            void 0 === n && (n = 0.001),
            Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2) < Math.pow(n, 2)
          );
        },
        er = function (t, e) {
          var n = t.x < e.x,
            r = t.x > e.x + e.width,
            i = t.y > e.y + e.height,
            o = t.y < e.y;
          if (!(n || r || i || o)) return 0;
          if (i && !n && !r) return Math.pow(e.y + e.height - t.y, 2);
          if (o && !n && !r) return Math.pow(t.y - e.y, 2);
          if (n && !i && !o) return Math.pow(e.x - t.x, 2);
          if (r && !i && !o) return Math.pow(e.x + e.width - t.x, 2);
          var a = Math.min(Math.abs(e.x - t.x), Math.abs(e.x + e.width - t.x)),
            s = Math.min(Math.abs(e.y - t.y), Math.abs(e.y + e.height - t.y));
          return a * a + s * s;
        },
        nr = function (t, e) {
          var n = t[0],
            r = t[1],
            i = t[2],
            o = t[3],
            a = e.x,
            s = e.y,
            u = [i - n, o - r];
          if (sn.c.exactEquals(u, [0, 0])) return NaN;
          var c = [-u[1], u[0]];
          sn.c.normalize(c, c);
          var h = [a - n, s - r];
          return Math.abs(sn.c.dot(h, c));
        },
        rr = "rgb(95, 149, 255)",
        ir = "rgb(253, 253, 253)",
        or = "rgb(247, 250, 255)",
        ar = "rgb(224, 224, 224)",
        sr = "rgb(224, 224, 224)",
        ur = {
          version: "0.3.0",
          rootContainerClassName: "root-container",
          nodeContainerClassName: "node-container",
          edgeContainerClassName: "edge-container",
          comboContainerClassName: "combo-container",
          delegateContainerClassName: "delegate-container",
          defaultLoopPosition: "top",
          nodeLabel: {
            style: {
              fill: "#000",
              fontSize: 12,
              textAlign: "center",
              textBaseline: "middle",
            },
            offset: 4,
          },
          defaultNode: {
            type: "circle",
            style: { lineWidth: 1, stroke: rr, fill: "rgb(239, 244, 255)" },
            size: 20,
            color: rr,
            linkPoints: { size: 8, lineWidth: 1, fill: or, stroke: rr },
          },
          nodeStateStyles: {
            active: {
              fill: or,
              stroke: rr,
              lineWidth: 2,
              shadowColor: rr,
              shadowBlur: 10,
            },
            selected: {
              fill: "rgb(255, 255, 255)",
              stroke: rr,
              lineWidth: 4,
              shadowColor: rr,
              shadowBlur: 10,
              "text-shape": { fontWeight: 500 },
            },
            highlight: {
              fill: "rgb(223, 234, 255)",
              stroke: "#4572d9",
              lineWidth: 2,
              "text-shape": { fontWeight: 500 },
            },
            inactive: {
              fill: "rgb(247, 250, 255)",
              stroke: "rgb(191, 213, 255)",
              lineWidth: 1,
            },
            disable: {
              fill: "rgb(250, 250, 250)",
              stroke: "rgb(224, 224, 224)",
              lineWidth: 1,
            },
          },
          edgeLabel: {
            style: {
              fill: "rgb(0, 0, 0)",
              textAlign: "center",
              textBaseline: "middle",
              fontSize: 12,
            },
          },
          defaultEdge: {
            type: "line",
            size: 1,
            style: { stroke: ar, lineAppendWidth: 2 },
            color: ar,
          },
          edgeStateStyles: {
            active: { stroke: rr, lineWidth: 1 },
            selected: {
              stroke: rr,
              lineWidth: 2,
              shadowColor: rr,
              shadowBlur: 10,
              "text-shape": { fontWeight: 500 },
            },
            highlight: {
              stroke: rr,
              lineWidth: 2,
              "text-shape": { fontWeight: 500 },
            },
            inactive: { stroke: "rgb(234, 234, 234)", lineWidth: 1 },
            disable: { stroke: "rgb(245, 245, 245)", lineWidth: 1 },
          },
          comboLabel: {
            style: {
              fill: "rgb(0, 0, 0)",
              textBaseline: "middle",
              fontSize: 12,
            },
            refY: 10,
            refX: 10,
          },
          defaultCombo: {
            type: "circle",
            style: {
              fill: ir,
              lineWidth: 1,
              stroke: sr,
              r: 5,
              width: 20,
              height: 10,
            },
            size: [20, 5],
            color: sr,
            padding: [25, 20, 15, 20],
          },
          comboStateStyles: {
            active: { stroke: rr, lineWidth: 1, fill: "rgb(247, 250, 255)" },
            selected: {
              stroke: rr,
              lineWidth: 2,
              fill: ir,
              shadowColor: rr,
              shadowBlur: 10,
              "text-shape": { fontWeight: 500 },
            },
            highlight: {
              stroke: "#4572d9",
              lineWidth: 2,
              fill: ir,
              "text-shape": { fontWeight: 500 },
            },
            inactive: { stroke: "rgb(224, 224, 224)", fill: ir, lineWidth: 1 },
            disable: {
              stroke: "rgb(234, 234, 234)",
              fill: "rgb(250, 250, 250)",
              lineWidth: 1,
            },
          },
          delegateStyle: {
            fill: "#F3F9FF",
            fillOpacity: 0.5,
            stroke: "#1890FF",
            strokeOpacity: 0.9,
            lineDash: [5, 5],
          },
        },
        cr = {
          " ": 0.3329986572265625,
          a: 0.5589996337890625,
          A: 0.6569992065429687,
          b: 0.58599853515625,
          B: 0.6769989013671875,
          c: 0.5469985961914062,
          C: 0.7279998779296875,
          d: 0.58599853515625,
          D: 0.705999755859375,
          e: 0.554998779296875,
          E: 0.63699951171875,
          f: 0.37299957275390627,
          F: 0.5769989013671875,
          g: 0.5909988403320312,
          G: 0.7479995727539063,
          h: 0.555999755859375,
          H: 0.7199996948242188,
          i: 0.255999755859375,
          I: 0.23699951171875,
          j: 0.26699981689453123,
          J: 0.5169998168945312,
          k: 0.5289993286132812,
          K: 0.6899993896484375,
          l: 0.23499908447265624,
          L: 0.5879989624023437,
          m: 0.854998779296875,
          M: 0.8819992065429687,
          n: 0.5589996337890625,
          N: 0.7189987182617188,
          o: 0.58599853515625,
          O: 0.7669998168945312,
          p: 0.58599853515625,
          P: 0.6419998168945312,
          q: 0.58599853515625,
          Q: 0.7669998168945312,
          r: 0.3649993896484375,
          R: 0.6759994506835938,
          s: 0.504998779296875,
          S: 0.6319992065429687,
          t: 0.354998779296875,
          T: 0.6189987182617187,
          u: 0.5599990844726562,
          U: 0.7139999389648437,
          v: 0.48199920654296874,
          V: 0.6389999389648438,
          w: 0.754998779296875,
          W: 0.929998779296875,
          x: 0.5089996337890625,
          X: 0.63699951171875,
          y: 0.4959991455078125,
          Y: 0.66199951171875,
          z: 0.48699951171875,
          Z: 0.6239990234375,
          0: 0.6,
          1: 0.40099945068359377,
          2: 0.6,
          3: 0.6,
          4: 0.6,
          5: 0.6,
          6: 0.6,
          7: 0.5469985961914062,
          8: 0.6,
          9: 0.6,
          "[": 0.3329986572265625,
          "]": 0.3329986572265625,
          ",": 0.26399993896484375,
          ".": 0.26399993896484375,
          ";": 0.26399993896484375,
          ":": 0.26399993896484375,
          "{": 0.3329986572265625,
          "}": 0.3329986572265625,
          "\\": 0.5,
          "|": 0.19499969482421875,
          "=": 0.604998779296875,
          "+": 0.604998779296875,
          "-": 0.604998779296875,
          _: 0.5,
          "`": 0.3329986572265625,
          " ~": 0.8329986572265625,
          "!": 0.3329986572265625,
          "@": 0.8579986572265625,
          "#": 0.6,
          $: 0.6,
          "%": 0.9699996948242188,
          "^": 0.517999267578125,
          "&": 0.7259994506835937,
          "*": 0.505999755859375,
          "(": 0.3329986572265625,
          ")": 0.3329986572265625,
          "<": 0.604998779296875,
          ">": 0.604998779296875,
          "/": 0.5,
          "?": 0.53699951171875,
        },
        hr = Math.PI,
        lr = Math.sin,
        dr = Math.cos,
        fr = lr(hr / 8),
        pr = dr(hr / 8),
        gr = function (t, e) {
          var n = t.getBBox(),
            r = { x: n.minX, y: n.minY },
            i = { x: n.maxX, y: n.maxY };
          if (e) {
            var o = e.getMatrix();
            o || (o = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
              (r = Tn(r, o)),
              (i = Tn(i, o));
          }
          var a = r.x,
            s = r.y,
            u = i.x,
            c = i.y;
          return {
            x: a,
            y: s,
            minX: a,
            minY: s,
            maxX: u,
            maxY: c,
            width: u - a,
            height: c - s,
          };
        },
        yr = function (t) {
          var e = t.sourceNode || t.targetNode,
            n = e.get("group").getMatrix();
          n || (n = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
          var r = e.getKeyShape().getBBox(),
            i = t.loopCfg || {},
            o = i.dist || 2 * Math.max(r.width, r.height),
            a = i.position || ur.defaultLoopPosition,
            s = [n[6], n[7]],
            u = [t.startPoint.x, t.startPoint.y],
            c = [t.endPoint.x, t.endPoint.y],
            h = r.height / 2,
            l = r.height / 2,
            d = h * fr,
            f = h * pr,
            p = l * fr,
            g = l * pr;
          if (u[0] === c[0] && u[1] === c[1]) {
            switch (a) {
              case "top":
                (u = [s[0] - d, s[1] - f]), (c = [s[0] + p, s[1] - g]);
                break;
              case "top-right":
                (h = r.height / 2),
                  (l = r.width / 2),
                  (u = [s[0] + (d = h * fr), s[1] - (f = h * pr)]),
                  (c = [s[0] + (g = l * pr), s[1] - (p = l * fr)]);
                break;
              case "right":
                (h = r.width / 2),
                  (l = r.width / 2),
                  (u = [s[0] + (f = h * pr), s[1] - (d = h * fr)]),
                  (c = [s[0] + (g = l * pr), s[1] + (p = l * fr)]);
                break;
              case "bottom-right":
                (h = r.width / 2),
                  (l = r.height / 2),
                  (u = [s[0] + (f = h * pr), s[1] + (d = h * fr)]),
                  (c = [s[0] + (p = l * fr), s[1] + (g = l * pr)]);
                break;
              case "bottom":
                (h = r.height / 2),
                  (l = r.height / 2),
                  (u = [s[0] + (d = h * fr), s[1] + (f = h * pr)]),
                  (c = [s[0] - (p = l * fr), s[1] + (g = l * pr)]);
                break;
              case "bottom-left":
                (h = r.height / 2),
                  (l = r.width / 2),
                  (u = [s[0] - (d = h * fr), s[1] + (f = h * pr)]),
                  (c = [s[0] - (g = l * pr), s[1] + (p = l * fr)]);
                break;
              case "left":
                (h = r.width / 2),
                  (l = r.width / 2),
                  (u = [s[0] - (f = h * pr), s[1] + (d = h * fr)]),
                  (c = [s[0] - (g = l * pr), s[1] - (p = l * fr)]);
                break;
              case "top-left":
                (h = r.width / 2),
                  (l = r.height / 2),
                  (u = [s[0] - (f = h * pr), s[1] - (d = h * fr)]),
                  (c = [s[0] - (p = l * fr), s[1] - (g = l * pr)]);
                break;
              default:
                (h = r.width / 2),
                  (l = r.width / 2),
                  (u = [s[0] - (d = h * fr), s[1] - (f = h * pr)]),
                  (c = [s[0] + (p = l * fr), s[1] - (g = l * pr)]);
            }
            if (!1 === i.clockwise) {
              var y = [u[0], u[1]];
              (u = [c[0], c[1]]), (c = [y[0], y[1]]);
            }
          }
          var v = [u[0] - s[0], u[1] - s[1]],
            m = (h + o) / h,
            b = (l + o) / l;
          !1 === i.clockwise && ((m = (l + o) / l), (b = (h + o) / h));
          var x = sn.c.scale([0, 0], v, m),
            w = [s[0] + x[0], s[1] + x[1]],
            O = [c[0] - s[0], c[1] - s[1]],
            M = sn.c.scale([0, 0], O, b),
            S = [s[0] + M[0], s[1] + M[1]];
          return (
            (t.startPoint = { x: u[0], y: u[1] }),
            (t.endPoint = { x: c[0], y: c[1] }),
            (t.controlPoints = [
              { x: w[0], y: w[1] },
              { x: S[0], y: S[1] },
            ]),
            t
          );
        },
        vr = function (t, e, n, r, i) {
          var o = [],
            a = t.getPoint(e);
          if (null === a) return { x: 0, y: 0, angle: 0 };
          if (e < 1e-4) o = t.getStartTangent().reverse();
          else if (e > 0.9999) o = t.getEndTangent();
          else {
            var s = t.getPoint(e + 1e-4);
            o.push([a.x, a.y]), o.push([s.x, s.y]);
          }
          var u = Math.atan2(o[1][1] - o[0][1], o[1][0] - o[0][0]);
          if (
            (u < 0 && (u += 2 * hr),
            n && ((a.x += dr(u) * n), (a.y += lr(u) * n)),
            r)
          ) {
            var c = u - hr / 2;
            u > 0.5 * hr && u < 1.5 * hr && (c -= hr),
              (a.x += dr(c) * r),
              (a.y += lr(c) * r);
          }
          var l = { x: a.x, y: a.y, angle: u };
          return i
            ? (u > 0.5 * hr && u < 1.5 * hr && (u -= hr),
              Object(h.a)({ rotate: u }, l))
            : l;
        },
        mr = function t(e, n) {
          if (!1 === n(e)) return !1;
          if (e && e.children)
            for (var r = e.children.length - 1; r >= 0; r--)
              if (!t(e.children[r], n)) return !1;
          return !0;
        },
        br = function (t, e) {
          "function" == typeof e && mr(t, e);
        },
        xr = function (t, e) {
          "function" == typeof e &&
            (function t(e, n) {
              if (e && e.children)
                for (var r = e.children.length - 1; r >= 0; r--)
                  if (!t(e.children[r], n)) return;
              return !1 !== n(e);
            })(t, e);
        },
        wr = function (t, e) {
          return e * (cr[t] || 1);
        },
        Or = function (t, e) {
          var n = 0,
            r = new RegExp("[一-龥]+");
          return (
            t.split("").forEach(function (t) {
              r.test(t) ? (n += e) : (n += wr(t, e));
            }),
            [n, e]
          );
        },
        Mr = function (t, e) {
          var n = [],
            r = {},
            i = {};
          t.forEach(function (t) {
            i[t.id] = t;
          }),
            t.forEach(function (t, e) {
              var o = Object(gt.b)(t);
              (o.itemType = "combo"),
                (o.children = void 0),
                o.parentId === o.id
                  ? (console.warn(
                      "The parentId for combo " +
                        o.id +
                        " can not be the same as the combo's id",
                    ),
                    delete o.parentId)
                  : o.parentId &&
                    !i[o.parentId] &&
                    (console.warn(
                      "The parent combo for combo " + o.id + " does not exist!",
                    ),
                    delete o.parentId);
              var a = r[o.id];
              if (a) {
                if (
                  ((o.children = a.children), (r[o.id] = o), !(a = o).parentId)
                )
                  return void n.push(a);
                var s = r[a.parentId];
                if (s) s.children ? s.children.push(o) : (s.children = [o]);
                else {
                  var u = { id: a.parentId, children: [a] };
                  (r[a.parentId] = u), (r[o.id] = o);
                }
              } else if (Object(gt.x)(t.parentId)) {
                var c = r[t.parentId];
                if (c)
                  c.children ? c.children.push(o) : (c.children = [o]),
                    (r[o.id] = o);
                else {
                  var h = { id: t.parentId, children: [o] };
                  (r[h.id] = h), (r[o.id] = o);
                }
              } else n.push(o), (r[o.id] = o);
            });
          var o = {};
          (e || []).forEach(function (t) {
            o[t.id] = t;
            var e = r[t.comboId];
            if (e) {
              var n = { id: t.id, comboId: t.comboId };
              e.children ? e.children.push(n) : (e.children = [n]),
                (n.itemType = "node"),
                (r[t.id] = n);
            }
          });
          var a = 0;
          return (
            n.forEach(function (t) {
              (t.depth = a + 10),
                mr(t, function (t) {
                  var e,
                    n = r[t.id].itemType;
                  (e = "node" === n ? r[t.comboId] : r[t.parentId]),
                    (t.depth = e && "node" === n ? a + 1 : a + 10),
                    a < t.depth && (a = t.depth);
                  var i = o[t.id];
                  return i && (i.depth = t.depth), !0;
                });
            }),
            n
          );
        },
        Sr = function (t, e, n) {
          var r,
            i = t,
            o = { root: { children: t } },
            a = !1,
            s = "root";
          (t || []).forEach(function (t) {
            if (!a)
              return t.id === e
                ? ((r = t),
                  "combo" === t.itemType ? (r.parentId = n) : (r.comboId = n),
                  void (a = !0))
                : void br(t, function (t) {
                    return (
                      (o[t.id] = { children: t.children }),
                      (i = o[t.parentId || t.comboId || "root"].children),
                      !t ||
                        (!t.removed && e !== t.id) ||
                        !i ||
                        ((s = t.parentId || t.comboId || "root"),
                        (r = t),
                        "combo" === t.itemType
                          ? (r.parentId = n)
                          : (r.comboId = n),
                        (a = !0),
                        !1)
                    );
                  });
          });
          var u = (i = o[s].children) ? i.indexOf(r) : -1;
          if (
            (u > -1 && i.splice(u, 1),
            a ||
              ((r = { id: e, itemType: "node", comboId: n }),
              (o[e] = { children: void 0 })),
            e)
          ) {
            var c = !1;
            if (n) {
              var h = 0;
              (t || []).forEach(function (t) {
                c ||
                  br(t, function (t) {
                    return (
                      n !== t.id ||
                      ((c = !0),
                      t.children ? t.children.push(r) : (t.children = [r]),
                      (h = t.depth),
                      "node" === r.itemType
                        ? (r.depth = h + 2)
                        : (r.depth = h + 1),
                      !1)
                    );
                  });
              });
            } else (n && c) || "node" === r.itemType || t.push(r);
            var l = r.depth;
            br(r, function (t) {
              return (
                "node" === t.itemType ? (l += 2) : (l += 1), (t.depth = l), !0
              );
            });
          }
          return t;
        },
        Cr = function (t, e) {
          var n = {
            minX: 1 / 0,
            minY: 1 / 0,
            maxX: -1 / 0,
            maxY: -1 / 0,
            x: void 0,
            y: void 0,
            width: void 0,
            height: void 0,
            centerX: void 0,
            centerY: void 0,
          };
          return t && 0 !== t.length
            ? (t.forEach(function (t) {
                var r = e.findById(t.id);
                if (r && r.isVisible()) {
                  r.set("bboxCanvasCache", void 0);
                  var i = r.getCanvasBBox();
                  i.x && n.minX > i.minX && (n.minX = i.minX),
                    i.y && n.minY > i.minY && (n.minY = i.minY),
                    i.x && n.maxX < i.maxX && (n.maxX = i.maxX),
                    i.y && n.maxY < i.maxY && (n.maxY = i.maxY);
                }
              }),
              (n.x = (n.minX + n.maxX) / 2),
              (n.y = (n.minY + n.maxY) / 2),
              (n.width = n.maxX - n.minX),
              (n.height = n.maxY - n.minY),
              (n.centerX = (n.minX + n.maxX) / 2),
              (n.centerY = (n.minY + n.maxY) / 2),
              Object.keys(n).forEach(function (t) {
                (n[t] !== 1 / 0 && n[t] !== -1 / 0) || (n[t] = void 0);
              }),
              n)
            : n;
        },
        jr = function (t) {
          var e =
            Object(gt.t)(t.x) ||
            Object(gt.t)(t.y) ||
            t.type ||
            t.anchorPoints ||
            t.size;
          return (
            t.style &&
              (e =
                e ||
                Object(gt.t)(t.style.r) ||
                Object(gt.t)(t.style.width) ||
                Object(gt.t)(t.style.height) ||
                Object(gt.t)(t.style.rx) ||
                Object(gt.t)(t.style.ry)),
            e
          );
        },
        kr = function (t) {
          var e = {};
          return (
            Object.keys(t).forEach(function (n) {
              var r = t[n];
              if (Object(gt.v)(r)) {
                var i = {};
                Object.keys(r).forEach(function (t) {
                  var e = r[t];
                  ("img" !== t || Object(gt.x)(e)) && (i[t] = Object(gt.b)(e));
                }),
                  (e[n] = i);
              } else e[n] = Object(gt.b)(r);
            }),
            e
          );
        },
        Er = function (t) {
          if (!t)
            return console.error("G6 Error Tips: the data must be defined"), !1;
          var e = t.nodes,
            n = t.edges,
            r = t.combos,
            i = void 0 === r ? [] : r;
          if (!e && !n) {
            var o = !0;
            return (
              br(t, function (t) {
                return !!Object(gt.x)(t.id) || ((o = !1), !1);
              }),
              o
            );
          }
          var a = (e || []).find(function (t) {
            return !Object(gt.x)(t.id);
          });
          if (a)
            return (
              console.warn(
                "G6 Warning Tips: missing 'id' property, or %c" +
                  a.id +
                  "%c is not a string.",
                "font-size: 20px; color: red;",
                "",
              ),
              !1
            );
          var s = (e || []).map(function (t) {
              return t.id;
            }),
            u = i.map(function (t) {
              return t.id;
            }),
            c = Object(h.f)(Object(h.f)([], s), u),
            l = (n || []).find(function (t) {
              return !c.includes(t.source) || !c.includes(t.target);
            });
          return (
            !l ||
            (console.warn(
              "G6 Warning Tips: The source %c" +
                l.source +
                "%c or the target %c" +
                l.target +
                "%c of the edge do not exist in the nodes or combos.",
              "font-size: 20px; color: red;",
              "",
              "font-size: 20px; color: red;",
              "",
            ),
            !1)
          );
        },
        Nr = (function () {
          function t(t) {
            (this.graph = t),
              (this.destroyed = !1),
              (this.modes = t.get("modes") || { default: [] }),
              this.formatModes(),
              (this.mode = t.get("defaultMode") || "default"),
              (this.currentBehaves = []),
              this.setMode(this.mode);
          }
          return (
            (t.prototype.formatModes = function () {
              var t = this.modes;
              Object(gt.e)(t, function (t) {
                Object(gt.e)(t, function (e, n) {
                  Object(gt.x)(e) && (t[n] = { type: e });
                });
              });
            }),
            (t.prototype.setBehaviors = function (t) {
              var e,
                n = this.graph,
                r = this.modes[t],
                i = [];
              Object(gt.e)(r || [], function (t) {
                var r = tn.getBehavior(t.type || t);
                r && (e = new r(t)) && (e.bind(n), i.push(e));
              }),
                (this.currentBehaves = i);
            }),
            (t.mergeBehaviors = function (t, e) {
              return (
                Object(gt.e)(e, function (e) {
                  t.indexOf(e) < 0 &&
                    (Object(gt.x)(e) && (e = { type: e }), t.push(e));
                }),
                t
              );
            }),
            (t.filterBehaviors = function (t, e) {
              var n = [];
              return (
                t.forEach(function (t) {
                  var r = "";
                  (r = Object(gt.x)(t) ? t : t.type),
                    e.indexOf(r) < 0 && n.push(t);
                }),
                n
              );
            }),
            (t.prototype.setMode = function (t) {
              var e = this.modes,
                n = this.graph,
                r = t;
              e[r] &&
                (n.emit("beforemodechange", { mode: t }),
                Object(gt.e)(this.currentBehaves, function (t) {
                  t.delegate && t.delegate.remove(), t.unbind(n);
                }),
                this.setBehaviors(r),
                n.emit("aftermodechange", { mode: t }),
                (this.mode = t));
            }),
            (t.prototype.getMode = function () {
              return this.mode;
            }),
            (t.prototype.manipulateBehaviors = function (e, n, r) {
              var i,
                o = this;
              if (((i = Object(gt.m)(e) ? e : [e]), Object(gt.m)(n)))
                return (
                  Object(gt.e)(n, function (e) {
                    o.modes[e]
                      ? (o.modes[e] = r
                          ? t.mergeBehaviors(o.modes[e] || [], i)
                          : t.filterBehaviors(o.modes[e] || [], i))
                      : r && (o.modes[e] = i);
                  }),
                  this
                );
              var a = n;
              return (
                n || (a = this.mode),
                this.modes[a] || (r && (this.modes[a] = i)),
                (this.modes[a] = r
                  ? t.mergeBehaviors(this.modes[a] || [], i)
                  : t.filterBehaviors(this.modes[a] || [], i)),
                this.setMode(this.mode),
                this
              );
            }),
            (t.prototype.updateBehavior = function (t, e, n) {
              Object(gt.x)(t) && (t = { type: t });
              var r = [];
              if (n && n !== this.mode && "default" !== n) {
                if (!(r = this.modes[n]) || !r.length)
                  return (
                    console.warn(
                      "Update behavior failed! There is no behaviors in this mode on the graph.",
                    ),
                    this
                  );
                var i = r.length;
                for (a = 0; a < i; a++) {
                  if ((s = r[a]).type === t.type || s === t.type)
                    return (
                      s === t.type && (s = { type: s }),
                      Object.assign(s, e),
                      (r[a] = s),
                      this
                    );
                  a === i - 1 &&
                    console.warn(
                      "Update behavior failed! There is no such behavior in the mode",
                    );
                }
              } else {
                if (!(r = this.currentBehaves) || !r.length)
                  return (
                    console.warn(
                      "Update behavior failed! There is no behaviors in this mode on the graph.",
                    ),
                    this
                  );
                for (var o = r.length, a = 0; a < o; a++) {
                  var s;
                  if ((s = r[a]).type === t.type) return s.updateCfg(e), this;
                  a === o - 1 &&
                    console.warn(
                      "Update behavior failed! There is no such behavior in the mode",
                    );
                }
              }
              return this;
            }),
            (t.prototype.destroy = function () {
              (this.graph = null),
                (this.modes = null),
                (this.currentBehaves = null),
                (this.destroyed = !0);
            }),
            t
          );
        })();
      function Tr(t, e) {
        if (t) for (var n in e) e.hasOwnProperty(n) && (t.style[n] = e[n]);
        return t;
      }
      var Pr = (function (t) {
          function e(e, n) {
            var r = t.call(this, e, n) || this;
            return (
              (r.item = n.item),
              (r.canvasX = n.canvasX),
              (r.canvasY = n.canvasY),
              (r.detail = n.detail),
              r
            );
          }
          return Object(h.c)(e, t), e;
        })(z.Event),
        Ir = function (t) {
          return t + "-" + Math.random() + Date.now();
        },
        Br = function (t) {
          var e = 0,
            n = 0,
            r = 0,
            i = 0;
          if (Object(gt.t)(t)) e = n = r = i = t;
          else if (Object(gt.x)(t)) {
            e = n = r = i = parseInt(t, 10);
          } else
            Object(gt.m)(t) &&
              ((e = t[0]),
              (r = Object(gt.s)(t[1]) ? t[0] : t[1]),
              (i = Object(gt.s)(t[2]) ? t[0] : t[2]),
              (n = Object(gt.s)(t[3]) ? r : t[3]));
          return [e, r, i, n];
        },
        Ar = function (t) {
          var e = new Pr(t.type, t);
          return (
            (e.clientX = t.clientX),
            (e.clientY = t.clientY),
            (e.x = t.x),
            (e.y = t.y),
            (e.target = t.target),
            (e.currentTarget = t.currentTarget),
            (e.bubbles = !0),
            (e.item = t.item),
            e
          );
        },
        Lr = function (t) {
          if (!t) return !1;
          for (var e = [1, 0, 0, 0, 1, 0, 0, 0, 1], n = 0; n < 9; n++)
            if (t[n] !== e[n]) return !0;
          return !1;
        },
        Dr = function (t) {
          return Number.isNaN(Number(t));
        },
        _r = function (t) {
          for (
            var e = 1 / 0, n = -1 / 0, r = 1 / 0, i = -1 / 0, o = 0;
            o < t.length;
            o++
          ) {
            var a = t[o].getBBox(),
              s = a.minX,
              u = a.minY,
              c = a.maxX,
              h = a.maxY;
            s < e && (e = s),
              u < r && (r = u),
              c > n && (n = c),
              h > i && (i = h);
          }
          return {
            x: Math.floor(e),
            y: Math.floor(r),
            width: Math.ceil(n) - Math.floor(e),
            height: Math.ceil(i) - Math.floor(r),
            minX: e,
            minY: r,
            maxX: n,
            maxY: i,
          };
        },
        Rr = function (t, e, n, r, i) {
          void 0 === e && (e = 15),
            void 0 === n && (n = "quadratic"),
            void 0 === r && (r = void 0),
            void 0 === i && (i = void 0);
          for (
            var o = t.length,
              a = 2 * e,
              s = [
                "top",
                "top-right",
                "right",
                "bottom-right",
                "bottom",
                "bottom-left",
                "left",
                "top-left",
              ],
              u = {},
              c = [],
              h = {},
              l = 0;
            l < o;
            l++
          ) {
            var d = t[l],
              f = d.source,
              p = d.target,
              g = f + "-" + p;
            if (!c[l]) {
              u[g] || (u[g] = []), (c[l] = !0), u[g].push(d);
              for (var y = 0; y < o; y++)
                if (l !== y) {
                  var v = t[y],
                    m = v.source,
                    b = v.target;
                  c[y] ||
                    (f === b && p === m
                      ? (u[g].push(v),
                        (c[y] = !0),
                        (h[m + "|" + b + "|" + (u[g].length - 1)] = !0))
                      : f === m && p === b && (u[g].push(v), (c[y] = !0)));
                }
            }
          }
          for (var x in u)
            for (var w = u[x], O = w.length, M = 0; M < O; M++) {
              var S = w[M];
              if (S.source !== S.target)
                if (1 === O && r && S.source !== S.target) S.type = r;
                else {
                  S.type = n;
                  var C =
                    (M % 2 == 0 ? 1 : -1) *
                    (h[S.source + "|" + S.target + "|" + M] ? -1 : 1);
                  S.curveOffset =
                    O % 2 == 1
                      ? C * Math.ceil(M / 2) * a
                      : C * (Math.floor(M / 2) * a + e);
                }
              else
                i && (S.type = i),
                  (S.loopCfg = {
                    position: s[M % 8],
                    dist: 20 * Math.floor(M / 8) + 50,
                  });
            }
          return t;
        },
        Yr = (function () {
          function t(t) {
            (this.destroyed = !1), (this.graph = t), (this.destroyed = !1);
          }
          return (
            (t.prototype.getViewCenter = function () {
              var t = this.getFormatPadding(),
                e = this.graph,
                n = this.graph.get("width"),
                r = e.get("height");
              return {
                x: (n - t[1] - t[3]) / 2 + t[3],
                y: (r - t[0] - t[2]) / 2 + t[0],
              };
            }),
            (t.prototype.fitCenter = function () {
              var t = this.graph,
                e = t.get("group");
              e.resetMatrix();
              var n = e.getCanvasBBox();
              if (0 !== n.width && 0 !== n.height) {
                var r = this.getViewCenter(),
                  i = n.x + n.width / 2,
                  o = n.y + n.height / 2;
                t.translate(r.x - i, r.y - o);
              }
            }),
            (t.prototype.fitView = function () {
              var t = this.graph,
                e = this.getFormatPadding(),
                n = t.get("width"),
                r = t.get("height"),
                i = t.get("group");
              i.resetMatrix();
              var o = i.getCanvasBBox();
              if (0 !== o.width && 0 !== o.height) {
                var a = this.getViewCenter(),
                  s = o.x + o.width / 2,
                  u = o.y + o.height / 2;
                t.translate(a.x - s, a.y - u);
                var c = (n - e[1] - e[3]) / o.width,
                  h = (r - e[0] - e[2]) / o.height,
                  l = c;
                c > h && (l = h), t.zoom(l, a);
              }
            }),
            (t.prototype.getFormatPadding = function () {
              var t = this.graph.get("fitViewPadding");
              return Br(t);
            }),
            (t.prototype.focusPoint = function (t, e, n) {
              var r = this,
                i = this.getViewCenter(),
                o = this.getPointByCanvas(i.x, i.y),
                a = this.graph.get("group").getMatrix();
              if ((a || (a = [1, 0, 0, 0, 1, 0, 0, 0, 1]), e)) {
                var s = (o.x - t.x) * a[0],
                  u = (o.y - t.y) * a[4],
                  c = 0,
                  l = 0,
                  d = 0,
                  f = 0;
                this.graph.get("canvas").animate(
                  function (t) {
                    (d = s * t),
                      (f = u * t),
                      r.graph.translate(d - c, f - l),
                      (c = d),
                      (l = f);
                  },
                  Object(h.a)({}, n),
                );
              } else
                this.graph.translate((o.x - t.x) * a[0], (o.y - t.y) * a[4]);
            }),
            (t.prototype.getPointByCanvas = function (t, e) {
              var n = this.graph.get("group").getMatrix();
              return (
                n || (n = [1, 0, 0, 0, 1, 0, 0, 0, 1]), Pn({ x: t, y: e }, n)
              );
            }),
            (t.prototype.getPointByClient = function (t, e) {
              var n = this.graph.get("canvas").getPointByClient(t, e);
              return this.getPointByCanvas(n.x, n.y);
            }),
            (t.prototype.getClientByPoint = function (t, e) {
              var n = this.graph.get("canvas"),
                r = this.getCanvasByPoint(t, e),
                i = n.getClientByPoint(r.x, r.y);
              return { x: i.x, y: i.y };
            }),
            (t.prototype.getCanvasByPoint = function (t, e) {
              var n = this.graph.get("group").getMatrix();
              return (
                n || (n = [1, 0, 0, 0, 1, 0, 0, 0, 1]), Tn({ x: t, y: e }, n)
              );
            }),
            (t.prototype.focus = function (t, e, n) {
              if ((Object(gt.x)(t) && (t = this.graph.findById(t)), t)) {
                var r = 0,
                  i = 0;
                if (t.getType && "edge" === t.getType()) {
                  var o = t.getSource().get("group").getMatrix(),
                    a = t.getTarget().get("group").getMatrix();
                  o && a
                    ? ((r = (o[6] + a[6]) / 2), (i = (o[7] + a[7]) / 2))
                    : (o || a) &&
                      ((r = o ? o[6] : a[6]), (i = o ? o[7] : a[7]));
                } else {
                  var s = t.get("group").getMatrix();
                  s || (s = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
                    (r = s[6]),
                    (i = s[7]);
                }
                this.focusPoint({ x: r, y: i }, e, n);
              }
            }),
            (t.prototype.changeSize = function (t, e) {
              var n = this.graph;
              if (!Object(gt.t)(t) || !Object(gt.t)(e))
                throw Error(
                  "invalid canvas width & height, please make sure width & height type is number",
                );
              n.set({ width: t, height: e }),
                n.get("canvas").changeSize(t, e),
                n.get("plugins").forEach(function (r) {
                  if (r.get("gridContainer")) {
                    var i = n.get("minZoom");
                    Tr(r.get("container"), {
                      width: t + "px",
                      height: e + "px",
                    }),
                      Tr(r.get("gridContainer"), {
                        width: t / i + "px",
                        height: e / i + "px",
                        left: 0,
                        top: 0,
                      });
                  }
                });
            }),
            (t.prototype.destroy = function () {
              (this.graph = null), (this.destroyed = !1);
            }),
            t
          );
        })();
      function Fr(t) {
        return (Fr =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function zr(t) {
        if ("string" != typeof t) return t;
        var e = function (t) {
            if ("string" != typeof t) return t;
            try {
              return JSON.parse(t.trim());
            } catch (e) {
              return t.trim();
            }
          },
          n = e(t);
        if ("string" != typeof n) return n;
        for (
          var r = function (t) {
              return t[t.length - 1];
            },
            i = t.trim(),
            o = [],
            a = [],
            s = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              return t.some(function (t) {
                return r(a) === t;
              });
            },
            u = null,
            c = 0,
            h = "";
          c < i.length;

        ) {
          var l = i[c],
            d = s('"', "'");
          if (d || l.trim()) {
            var f = "\\" === i[c - 1],
              p = s("}"),
              g = s("]"),
              y = s(","),
              v = r(o);
            if (d)
              if (r(a) !== l || f) h += l;
              else {
                a.pop();
                var m = e(h);
                v.push(m), (u = m), (h = "");
              }
            else if (g && "," === l) h && (v.push(e(h)), (h = ""));
            else if (p && ":" === l) a.push(","), h && (v.push(h), (h = ""));
            else if (y && "," === l) h && (v.push(e(h)), (h = "")), a.pop();
            else if ("}" === l && (p || y)) {
              h && (v.push(e(h)), (h = "")), y && a.pop();
              for (var b = {}, x = 1; x < v.length; x += 2) b[v[x - 1]] = v[x];
              o.pop(), o.length && r(o).push(b), a.pop(), (u = b);
            } else
              "]" === l && g
                ? (h && (v.push(e(h)), (h = "")),
                  o.pop(),
                  o.length && r(o).push(v),
                  a.pop(),
                  (u = v))
                : "{" === l
                ? (o.push([]), a.push("}"))
                : "[" === l
                ? (o.push([]), a.push("]"))
                : '"' === l
                ? a.push('"')
                : "'" === l
                ? a.push("'")
                : (h += l);
            c += 1;
          } else c += 1;
        }
        return u || h;
      }
      function Xr(t, e) {
        var n;
        void 0 === e && (e = { x: 0, y: 0 });
        var r = Object(h.a)({ x: 0, y: 0, width: 0, height: 0 }, e);
        if (null === (n = t.children) || void 0 === n ? void 0 : n.length) {
          var i = t.attrs,
            o = void 0 === i ? {} : i,
            a = o.marginTop,
            s = Object(h.a)({}, e);
          a && (s.y += a);
          for (var u = 0; u < t.children.length; u++) {
            t.children[u].attrs.key = (o.key || "root") + " -" + u + " ";
            var c = Xr(t.children[u], s);
            if (c.bbox) {
              var l = c.bbox;
              "inline" === c.attrs.next
                ? (s.x += c.bbox.width)
                : (s.y += c.bbox.height),
                l.width + l.x > r.width && (r.width = l.width + l.x),
                l.height + l.y > r.height && (r.height = l.height + l.y);
            }
          }
        }
        return (
          (t.bbox = (function (t, e, n) {
            var r,
              i,
              o = t.attrs,
              a = void 0 === o ? {} : o,
              s = {
                x: e.x || 0,
                y: e.y || 0,
                width: n.width || 0,
                height: n.height || 0,
              };
            switch (t.type) {
              case "maker":
              case "circle":
                a.r && ((i = 2 * a.r), (r = 2 * a.r));
                break;
              case "text":
                a.text &&
                  ((i = Or(a.text, a.fontSize || 12)[0]),
                  (r = 16),
                  (s.y += r),
                  (s.height = r),
                  (s.width = i),
                  (t.attrs = Object(h.a)({ fontSize: 12, fill: "#000" }, a)));
                break;
              default:
                a.width && (i = a.width), a.height && (r = a.height);
            }
            return (
              r >= 0 && (s.height = r),
              i >= 0 && (s.width = i),
              a.marginTop && (s.y += a.marginTop),
              a.marginLeft && (s.x += a.marginLeft),
              s
            );
          })(t, e, r)),
          (t.attrs = Object(h.a)(Object(h.a)({}, t.attrs), t.bbox)),
          t
        );
      }
      function Wr(t) {
        var e = {},
          n = function (e) {
            var n = (function (t) {
                return function (e) {
                  for (var n = t.length, r = [], i = 0, o = ""; i < n; )
                    if ("{" === t[i] && "{" === t[i + 1])
                      r.push(o), (o = ""), (i += 2);
                    else if ("}" === t[i] && "}" === t[i + 1]) {
                      if (r.length) {
                        var a = r.pop();
                        (o = Object(gt.h)(
                          e,
                          o,
                          a.endsWith("=") ? '"{' + o + '}"' : o,
                        )),
                          r.push(a + o);
                      }
                      (i += 2), (o = "");
                    } else (o += t[i]), (i += 1);
                  return (
                    r.push(o),
                    r
                      .map(function (t, e) {
                        return r[e - 1] && r[e - 1].endsWith("=")
                          ? '"{' + t + '}"'
                          : t;
                      })
                      .join("")
                  );
                };
              })("function" == typeof t ? t(e) : t)(e),
              r = document.createElement("div");
            r.innerHTML = n;
            var i = Xr(
              (function t(e, n) {
                var r = {},
                  i = (e.getAttributeNames && e.getAttributeNames()) || [],
                  o =
                    e.children &&
                    Array.from(e.children).map(function (e) {
                      return t(e, n);
                    }),
                  a = {},
                  s = e.tagName ? e.tagName.toLowerCase() : "group";
                return (
                  "text" === s && (r.text = e.innerText),
                  (a.type = s),
                  "img" === s && (a.type = "image"),
                  Array.from(i).forEach(function (t) {
                    var n = t.split("-").reduce(function (t, e) {
                        return t + e.charAt(0).toUpperCase() + e.slice(1);
                      }),
                      i = e.getAttribute(t);
                    try {
                      if ("style" === n || "attrs" === n) {
                        var o = zr(i);
                        r = Object(h.a)(Object(h.a)({}, r), o);
                      } else a[n] = zr(i);
                    } catch (t) {
                      if ("style" === n) throw t;
                      a[n] = i;
                    }
                  }),
                  (a.attrs = r),
                  n &&
                    n.style &&
                    a.name &&
                    "object" === Fr(n.style[a.name]) &&
                    (a.attrs = Object(h.a)(
                      Object(h.a)({}, a.attrs),
                      n.style[a.name],
                    )),
                  n &&
                    n.style &&
                    a.keyshape &&
                    (a.attrs = Object(h.a)(Object(h.a)({}, a.attrs), n.style)),
                  o.length && (a.children = o),
                  a
                );
              })(r.children[0], e),
            );
            return r.remove(), i;
          };
        return {
          draw: function (t, r) {
            var i = n(t),
              o = r;
            return (
              (function t(e) {
                var n = e.attrs,
                  i = void 0 === n ? {} : n,
                  a = e.bbox,
                  s = e.type,
                  u = e.children,
                  c = Object(h.e)(e, ["attrs", "bbox", "type", "children"]);
                if ("group" !== e.type) {
                  var l = r.addShape(
                    e.type,
                    Object(h.a)(
                      { attrs: i, origin: { bbox: a, type: s, children: u } },
                      c,
                    ),
                  );
                  e.keyshape && (o = l);
                }
                e.children &&
                  e.children.forEach(function (e) {
                    return t(e);
                  });
              })(i),
              (e[t.id] = [i]),
              o
            );
          },
          update: function (t, r) {
            e[t.id] || (e[t.id] = []);
            var i = r.getContainer(),
              o = i.get("children"),
              a = n(t),
              s = (function t(e, n) {
                var r,
                  i,
                  o,
                  a,
                  s = (e || {}).type,
                  u = ((null == n ? void 0 : n.attrs) || {}).key;
                if ((u && e && (e.attrs.key = u), !e && n))
                  return { action: "delete", val: n, type: s, key: u };
                if (e && !n) return { action: "add", val: e, type: s };
                if (!e && !n) return { action: "same", type: s };
                var c = [];
                if (
                  (null === (r = e.children) || void 0 === r
                    ? void 0
                    : r.length) > 0 ||
                  (null === (i = n.children) || void 0 === i
                    ? void 0
                    : i.length) > 0
                )
                  for (
                    var h = Math.max(
                        null === (o = e.children) || void 0 === o
                          ? void 0
                          : o.length,
                        null === (a = n.children) || void 0 === a
                          ? void 0
                          : a.length,
                      ),
                      l = n.children || [],
                      d = e.children || [],
                      f = 0;
                    f < h;
                    f += 1
                  )
                    c.push(t(d[f], l[f]));
                var p = Object.keys(n.attrs),
                  g = Object.keys(e.attrs);
                return n.type !== e.type
                  ? {
                      action: "restructure",
                      nowTarget: e,
                      formerTarget: n,
                      key: u,
                      children: c,
                    }
                  : p
                      .filter(function (t) {
                        return "children" !== t;
                      })
                      .some(function (t) {
                        return e.attrs[t] !== n.attrs[t] || !g.includes(t);
                      })
                  ? { action: "change", val: e, children: c, type: s, key: u }
                  : { action: "same", children: c, type: s, key: u };
              })(a, e[t.id].pop()),
              u = function t(e) {
                var n;
                "group" !== e.type && i.addShape(e.type, { attrs: e.attrs }),
                  (null === (n = e.children) || void 0 === n
                    ? void 0
                    : n.length) &&
                    e.children.map(function (e) {
                      return t(e);
                    });
              },
              c = function t(e) {
                var n,
                  r = o.find(function (t) {
                    return t.attrs.key === e.attrs.key;
                  });
                r && i.removeChild(r),
                  (null === (n = e.children) || void 0 === n
                    ? void 0
                    : n.length) &&
                    e.children.map(function (e) {
                      return t(e);
                    });
              };
            !(function t(e) {
              var n = e.key;
              if ("group" !== e.type) {
                var i = o.find(function (t) {
                  return t.attrs.key === n;
                });
                switch (e.action) {
                  case "change":
                    if (i) {
                      var a = e.val.keyshape ? r.getOriginStyle() : {};
                      i.attr(Object(h.a)(Object(h.a)({}, a), e.val.attrs));
                    }
                    break;
                  case "add":
                    u(e.val);
                    break;
                  case "delete":
                    c(e.val);
                    break;
                  case "restructure":
                    c(e.formerTarget), u(e.nowTarget);
                }
              }
              e.children &&
                e.children.forEach(function (e) {
                  return t(e);
                });
            })(s),
              e[t.id].push(a);
          },
          getAnchorPoints: function () {
            return [
              [0, 0.5],
              [1, 0.5],
              [0.5, 1],
              [0.5, 0],
            ];
          },
        };
      }
      var Gr = {};
      function qr(t) {
        return Gr[t] || (Gr[t] = Object(gt.J)(t)), Gr[t];
      }
      var Hr = {
          defaultShapeType: "defaultType",
          className: null,
          getShape: function (t) {
            return (
              this[t] || this[this.defaultShapeType] || this["simple-circle"]
            );
          },
          draw: function (t, e, n) {
            var r = this.getShape(t),
              i = r.draw(e, n);
            return r.afterDraw && r.afterDraw(e, n, i), i;
          },
          baseUpdate: function (t, e, n) {
            var r = this.getShape(t);
            r.update && r.update(e, n), r.afterUpdate && r.afterUpdate(e, n);
          },
          setState: function (t, e, n, r) {
            this.getShape(t).setState(e, n, r);
          },
          shouldUpdate: function (t) {
            return !!this.getShape(t).update;
          },
          getControlPoints: function (t, e) {
            return this.getShape(t).getControlPoints(e);
          },
          getAnchorPoints: function (t, e) {
            return this.getShape(t).getAnchorPoints(e);
          },
        },
        Vr = {
          options: {},
          draw: function (t, e) {
            return this.drawShape(t, e);
          },
          drawShape: function () {},
          afterDraw: function () {},
          afterUpdate: function () {},
          setState: function () {},
          getControlPoints: function (t) {
            return t.controlPoints;
          },
          getAnchorPoints: function (t) {
            var e = this.options.anchorPoints;
            return t.anchorPoints || e;
          },
        },
        Ur = (function () {
          function t() {}
          return (
            (t.registerFactory = function (e, n) {
              var r = qr(e),
                i = Hr,
                o = Object(h.a)(Object(h.a)({}, i), n);
              return (t[r] = o), (o.className = r), o;
            }),
            (t.getFactory = function (e) {
              return t[qr(e)];
            }),
            (t.registerNode = function (e, n, r) {
              var i,
                o = t.Node;
              if ("string" == typeof n || "function" == typeof n) {
                var a = Wr(n);
                i = Object(h.a)(Object(h.a)({}, o.getShape("single-node")), a);
              } else if (n.jsx) {
                a = Wr(n.jsx);
                i = Object(h.a)(
                  Object(h.a)(Object(h.a)({}, o.getShape("single-node")), a),
                  n,
                );
              } else {
                o.getShape(r);
                var s = r ? o.getShape(r) : Vr;
                i = Object(h.a)(Object(h.a)({}, s), n);
              }
              return (i.type = e), (i.itemType = "node"), (o[e] = i), i;
            }),
            (t.registerEdge = function (e, n, r) {
              var i = t.Edge,
                o = r ? i.getShape(r) : Vr,
                a = Object(h.a)(Object(h.a)({}, o), n);
              return (a.type = e), (a.itemType = "edge"), (i[e] = a), a;
            }),
            (t.registerCombo = function (e, n, r) {
              var i = t.Combo,
                o = r ? i.getShape(r) : Vr,
                a = Object(h.a)(Object(h.a)({}, o), n);
              return (a.type = e), (a.itemType = "combo"), (i[e] = a), a;
            }),
            t
          );
        })(),
        Zr = Ur;
      Ur.registerFactory("node", { defaultShapeType: "circle" }),
        Ur.registerFactory("edge", { defaultShapeType: "line" }),
        Ur.registerFactory("combo", { defaultShapeType: "circle" });
      var Kr = (function () {
          function t(t) {
            (this._cfg = {}), (this.destroyed = !1);
            var e = {
              id: void 0,
              type: "item",
              model: {},
              group: void 0,
              animate: !1,
              visible: !0,
              locked: !1,
              event: !0,
              keyShape: void 0,
              states: [],
            };
            this._cfg = Object.assign(e, this.getDefaultCfg(), t);
            var n = this.get("model"),
              r = n.id,
              i = this.get("type");
            r || ((r = Ir(i)), (this.get("model").id = r)), this.set("id", r);
            var o = t.group;
            o && (o.set("item", this), o.set("id", r)),
              this.init(),
              this.draw();
            var a = n.shape || n.type || ("edge" === i ? "line" : "circle"),
              s = this.get("shapeFactory");
            if (s && s[a]) {
              var u = s[a].options;
              if (u && u.stateStyles) {
                var c = this.get("styles") || n.stateStyles;
                (c = Object(gt.d)({}, u.stateStyles, c)), this.set("styles", c);
              }
            }
          }
          return (
            (t.prototype.calculateBBox = function () {
              var t = this.get("keyShape"),
                e = this.get("group"),
                n = gr(t, e);
              return (
                (n.x = n.minX),
                (n.y = n.minY),
                (n.width = n.maxX - n.minX),
                (n.height = n.maxY - n.minY),
                (n.centerX = (n.minX + n.maxX) / 2),
                (n.centerY = (n.minY + n.maxY) / 2),
                n
              );
            }),
            (t.prototype.calculateCanvasBBox = function () {
              var t = this.get("keyShape"),
                e = this.get("group"),
                n = gr(t, e);
              return (
                (n.x = n.minX),
                (n.y = n.minY),
                (n.width = n.maxX - n.minX),
                (n.height = n.maxY - n.minY),
                (n.centerX = (n.minX + n.maxX) / 2),
                (n.centerY = (n.minY + n.maxY) / 2),
                n
              );
            }),
            (t.prototype.drawInner = function () {
              var t = this.get("shapeFactory"),
                e = this.get("group"),
                n = this.get("model");
              e.clear();
              var r = n.visible;
              if ((void 0 === r || r || this.changeVisibility(r), t)) {
                this.updatePosition(n);
                var i = this.getShapeCfg(n),
                  o = i.type,
                  a = t.draw(o, i, e);
                a &&
                  (this.set("keyShape", a),
                  a.set("isKeyShape", !0),
                  a.set("draggable", !0)),
                  this.setOriginStyle(),
                  this.set("currentShape", o),
                  this.restoreStates(t, o);
              }
            }),
            (t.prototype.setOriginStyle = function () {
              var t = this.get("group").get("children"),
                e = this.getKeyShape(),
                n = this,
                r = e.get("name");
              if (this.get("originStyle")) {
                var i = this.getOriginStyle();
                r && !i[r] && (i[r] = {});
                var o = this.getCurrentStatesStyle();
                Object(gt.e)(t, function (t) {
                  var e = t.get("name"),
                    a = t.attr();
                  if (e && e !== r) {
                    var s = o[e];
                    i[e] || (i[e] = {}),
                      s
                        ? Object.keys(a).forEach(function (t) {
                            var n = a[t];
                            n !== s[t] && (i[e][t] = n);
                          })
                        : (i[e] =
                            "image" !== t.get("type")
                              ? Object(gt.b)(a)
                              : n.getShapeStyleByName(e));
                  } else {
                    var u = t.attr(),
                      c = Object(h.a)(Object(h.a)({}, o), o[r]);
                    Object.keys(u).forEach(function (t) {
                      var e = u[t];
                      c[t] !== e && (r ? (i[r][t] = e) : (i[t] = e));
                    });
                  }
                }),
                  i.path && delete i.path,
                  i.matrix && delete i.matrix,
                  i.x && delete i.x,
                  i.y && delete i.y,
                  i[r] && i[r].x && delete i[r].x,
                  i[r] && i[r].y && delete i[r].y,
                  n.set("originStyle", i);
              } else {
                var a = {};
                Object(gt.e)(t, function (t) {
                  var e = t.get("type"),
                    i = t.get("name");
                  if (i && i !== r)
                    a[i] =
                      "image" !== e
                        ? Object(gt.b)(t.attr())
                        : n.getShapeStyleByName(i);
                  else {
                    var o = n.getShapeStyleByName();
                    if (
                      (o.path && delete o.path, o.matrix && delete o.matrix, r)
                    )
                      if (i) a[r] = o;
                      else {
                        var s = Ir("shape");
                        t.set("name", s),
                          (a[s] =
                            "image" !== e
                              ? Object(gt.b)(t.attr())
                              : n.getShapeStyleByName(i));
                      }
                    else Object.assign(a, o);
                  }
                }),
                  n.set("originStyle", a);
              }
            }),
            (t.prototype.restoreStates = function (t, e) {
              var n = this,
                r = n.get("states");
              Object(gt.e)(r, function (r) {
                t.setState(e, r, !0, n);
              });
            }),
            (t.prototype.init = function () {
              var t = Zr.getFactory(this.get("type"));
              this.set("shapeFactory", t);
            }),
            (t.prototype.get = function (t) {
              return this._cfg[t];
            }),
            (t.prototype.set = function (t, e) {
              Object(gt.w)(t)
                ? (this._cfg = Object(h.a)(Object(h.a)({}, this._cfg), t))
                : (this._cfg[t] = e);
            }),
            (t.prototype.getDefaultCfg = function () {
              return {};
            }),
            (t.prototype.clearCache = function () {
              this.set("bboxCache", null), this.set("bboxCanvasCache", null);
            }),
            (t.prototype.beforeDraw = function () {}),
            (t.prototype.afterDraw = function () {}),
            (t.prototype.afterUpdate = function () {}),
            (t.prototype.draw = function () {
              this.beforeDraw(), this.drawInner(), this.afterDraw();
            }),
            (t.prototype.getShapeStyleByName = function (t) {
              var e,
                n = this.get("group");
              if (
                (e = t
                  ? n.find(function (e) {
                      return e.get("name") === t;
                    })
                  : this.getKeyShape())
              ) {
                var r = {};
                return (
                  Object(gt.e)(e.attr(), function (t, e) {
                    "img" !== e && (r[e] = t);
                  }),
                  r
                );
              }
              return {};
            }),
            (t.prototype.getShapeCfg = function (t) {
              var e = this.get("styles");
              if (e) {
                var n = t;
                return (n.style = Object(h.a)(Object(h.a)({}, e), t.style)), n;
              }
              return t;
            }),
            (t.prototype.getStateStyle = function (t) {
              var e = this.get("styles");
              return e && e[t];
            }),
            (t.prototype.getOriginStyle = function () {
              return this.get("originStyle");
            }),
            (t.prototype.getCurrentStatesStyle = function () {
              var t = this,
                e = {},
                n = t.getStates();
              return n && n.length
                ? (Object(gt.e)(t.getStates(), function (n) {
                    e = Object.assign(e, t.getStateStyle(n));
                  }),
                  e)
                : this.getOriginStyle();
            }),
            (t.prototype.setState = function (t, e) {
              var n = this.get("states"),
                r = this.get("shapeFactory"),
                i = t,
                o = t;
              Object(gt.x)(e) && ((i = t + ":" + e), (o = t + ":"));
              var a = n;
              if (Object(gt.n)(e)) {
                var s = n.indexOf(o);
                if (e) {
                  if (s > -1) return;
                  n.push(i);
                } else s > -1 && n.splice(s, 1);
              } else if (Object(gt.x)(e)) {
                var u = n.filter(function (t) {
                  return t.includes(o);
                });
                u.length > 0 && this.clearStates(u),
                  (a = a.filter(function (t) {
                    return !t.includes(o);
                  })).push(i),
                  this.set("states", a);
              }
              if (r) {
                var c = this.get("model").type;
                r.setState(c, t, e, this);
              }
            }),
            (t.prototype.clearStates = function (t) {
              var e = this,
                n = e.getStates(),
                r = e.get("shapeFactory"),
                i = e.get("model").type;
              t || (t = n), Object(gt.x)(t) && (t = [t]);
              var o = n.filter(function (e) {
                return -1 === t.indexOf(e);
              });
              e.set("states", o),
                t.forEach(function (t) {
                  r.setState(i, t, !1, e);
                });
            }),
            (t.prototype.getContainer = function () {
              return this.get("group");
            }),
            (t.prototype.getKeyShape = function () {
              return this.get("keyShape");
            }),
            (t.prototype.getModel = function () {
              return this.get("model");
            }),
            (t.prototype.getType = function () {
              return this.get("type");
            }),
            (t.prototype.getID = function () {
              return this.get("id");
            }),
            (t.prototype.isItem = function () {
              return !0;
            }),
            (t.prototype.getStates = function () {
              return this.get("states");
            }),
            (t.prototype.hasState = function (t) {
              return this.getStates().indexOf(t) >= 0;
            }),
            (t.prototype.refresh = function () {
              var t = this.get("model");
              this.updatePosition(t),
                this.updateShape(),
                this.afterUpdate(),
                this.clearCache();
            }),
            (t.prototype.isOnlyMove = function (t) {
              return !1;
            }),
            (t.prototype.update = function (t, e) {
              void 0 === e && (e = !1);
              var n = this.get("model"),
                r = n.visible,
                i = t.visible;
              r !== i && void 0 !== i && this.changeVisibility(i);
              var o = n.x,
                a = n.y;
              (t.x = isNaN(t.x) ? n.x : t.x), (t.y = isNaN(t.y) ? n.y : t.y);
              var s = this.get("styles");
              if (t.stateStyles) {
                var u = t.stateStyles;
                Object(gt.C)(s, u), delete t.stateStyles;
              }
              Object.assign(n, t),
                e
                  ? this.updatePosition(t)
                  : ((o === t.x && a === t.y) || this.updatePosition(t),
                    this.updateShape()),
                this.afterUpdate(),
                this.clearCache();
            }),
            (t.prototype.updateShape = function () {
              var t = this.get("shapeFactory"),
                e = this.get("model"),
                n = e.type;
              if (t.shouldUpdate(n) && n === this.get("currentShape")) {
                var r = this.getShapeCfg(e);
                t.baseUpdate(n, r, this), this.setOriginStyle();
              } else this.draw();
              this.restoreStates(t, n);
            }),
            (t.prototype.updatePosition = function (t) {
              var e = this.get("model"),
                n = Object(gt.s)(t.x) ? e.x : t.x,
                r = Object(gt.s)(t.y) ? e.y : t.y,
                i = this.get("group");
              if (Object(gt.s)(n) || Object(gt.s)(r)) return !1;
              (e.x = n), (e.y = r);
              var o = i.getMatrix();
              return (
                (!o || o[6] !== n || o[7] !== r) &&
                (i.resetMatrix(), _n(i, { x: n, y: r }), this.clearCache(), !0)
              );
            }),
            (t.prototype.getBBox = function () {
              var t = this.get("bboxCache");
              return (
                t || ((t = this.calculateBBox()), this.set("bboxCache", t)), t
              );
            }),
            (t.prototype.getCanvasBBox = function () {
              var t = this.get("bboxCanvasCache");
              return (
                t ||
                  ((t = this.calculateCanvasBBox()),
                  this.set("bboxCanvasCache", t)),
                t
              );
            }),
            (t.prototype.toFront = function () {
              this.get("group").toFront();
            }),
            (t.prototype.toBack = function () {
              this.get("group").toBack();
            }),
            (t.prototype.show = function () {
              this.changeVisibility(!0);
            }),
            (t.prototype.hide = function () {
              this.changeVisibility(!1);
            }),
            (t.prototype.changeVisibility = function (t) {
              var e = this.get("group");
              t ? e.show() : e.hide(), this.set("visible", t);
            }),
            (t.prototype.isVisible = function () {
              return this.get("visible");
            }),
            (t.prototype.enableCapture = function (t) {
              var e = this.get("group");
              e && e.set("capture", t);
            }),
            (t.prototype.destroy = function () {
              if (!this.destroyed) {
                var t = this.get("animate"),
                  e = this.get("group");
                t && e.stopAnimate(),
                  this.clearCache(),
                  e.remove(),
                  (this._cfg = null),
                  (this.destroyed = !0);
              }
            }),
            t
          );
        })(),
        Qr = { source: "start", target: "end" },
        $r = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.getDefaultCfg = function () {
              return {
                type: "edge",
                sourceNode: null,
                targetNode: null,
                startPoint: null,
                endPoint: null,
                linkCenter: !1,
              };
            }),
            (e.prototype.setEnd = function (t, e) {
              var n = Qr[t] + "Point",
                r = t + "Node",
                i = this.get(r);
              i && !i.destroyed && i.removeEdge(this),
                Object(gt.w)(e)
                  ? (this.set(n, e), this.set(r, null))
                  : (e.addEdge(this), this.set(r, e), this.set(n, null));
            }),
            (e.prototype.getLinkPoint = function (t, e, n) {
              var r = Qr[t] + "Point",
                i = t + "Node",
                o = this.get(r);
              if (!o) {
                var a = this.get(i),
                  s = t + "Anchor",
                  u = this.getPrePoint(t, n),
                  c = e[s];
                Object(gt.s)(c) || (o = a.getLinkPointByAnchor(c)),
                  (o = o || a.getLinkPoint(u)),
                  Object(gt.s)(o.index) || this.set(t + "AnchorIndex", o.index);
              }
              return o;
            }),
            (e.prototype.getPrePoint = function (t, e) {
              if (e && e.length) return e["source" === t ? 0 : e.length - 1];
              var n = "source" === t ? "target" : "source";
              return this.getEndPoint(n);
            }),
            (e.prototype.getEndPoint = function (t) {
              var e = t + "Node",
                n = Qr[t] + "Point",
                r = this.get(e);
              return r ? r.get("model") : this.get(n);
            }),
            (e.prototype.getControlPointsByCenter = function (t) {
              var e = this.getEndPoint("source"),
                n = this.getEndPoint("target"),
                r = this.get("shapeFactory"),
                i = t.type;
              return r.getControlPoints(i, { startPoint: e, endPoint: n });
            }),
            (e.prototype.getEndCenter = function (t) {
              var e = t + "Node",
                n = Qr[t] + "Point",
                r = this.get(e);
              if (r) {
                var i = r.getBBox();
                return { x: i.centerX, y: i.centerY };
              }
              return this.get(n);
            }),
            (e.prototype.init = function () {
              t.prototype.init.call(this),
                this.setSource(this.get("source")),
                this.setTarget(this.get("target"));
            }),
            (e.prototype.getShapeCfg = function (e) {
              var n = this.get("linkCenter"),
                r = t.prototype.getShapeCfg.call(this, e);
              if (n)
                (r.startPoint = this.getEndCenter("source")),
                  (r.endPoint = this.getEndCenter("target"));
              else {
                var i = r.controlPoints || this.getControlPointsByCenter(r);
                (r.startPoint = this.getLinkPoint("source", e, i)),
                  (r.endPoint = this.getLinkPoint("target", e, i));
              }
              return (
                (r.sourceNode = this.get("sourceNode")),
                (r.targetNode = this.get("targetNode")),
                r
              );
            }),
            (e.prototype.getModel = function () {
              var t = this.get("model"),
                e = this.get("sourceNode"),
                n = this.get("targetNode");
              return (
                e ? delete t.sourceNode : (t.source = this.get("startPoint")),
                n ? delete t.targetNode : (t.target = this.get("endPoint")),
                Object(gt.x)(t.source) ||
                  Object(gt.w)(t.source) ||
                  (t.source = t.source.getID()),
                Object(gt.x)(t.target) ||
                  Object(gt.w)(t.target) ||
                  (t.target = t.target.getID()),
                t
              );
            }),
            (e.prototype.setSource = function (t) {
              this.setEnd("source", t), this.set("source", t);
            }),
            (e.prototype.setTarget = function (t) {
              this.setEnd("target", t), this.set("target", t);
            }),
            (e.prototype.getSource = function () {
              return this.get("source");
            }),
            (e.prototype.getTarget = function () {
              return this.get("target");
            }),
            (e.prototype.updatePosition = function () {
              return !1;
            }),
            (e.prototype.update = function (t, e) {
              void 0 === e && (e = !1);
              var n = this.get("model"),
                r = n.visible,
                i = t.visible;
              r !== i && void 0 !== i && this.changeVisibility(i);
              var o = this.get("styles");
              if (t.stateStyles) {
                var a = t.stateStyles;
                Object(gt.C)(o, a), delete t.stateStyles;
              }
              Object.assign(n, t),
                this.updateShape(),
                this.afterUpdate(),
                this.clearCache();
            }),
            (e.prototype.destroy = function () {
              var e = this.get("sourceNode"),
                n = this.get("targetNode");
              e && !e.destroyed && e.removeEdge(this),
                n && !n.destroyed && n.removeEdge(this),
                t.prototype.destroy.call(this);
            }),
            e
          );
        })(Kr),
        Jr = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.getNearestPoint = function (t, e) {
              for (
                var n = 0, r = t[0], i = Bn(t[0], e), o = 0;
                o < t.length;
                o++
              ) {
                var a = t[o],
                  s = Bn(a, e);
                s < i && ((r = a), (i = s), (n = o));
              }
              return (r.anchorIndex = n), r;
            }),
            (e.prototype.getDefaultCfg = function () {
              return { type: "node", edges: [] };
            }),
            (e.prototype.getEdges = function () {
              return this.get("edges");
            }),
            (e.prototype.getInEdges = function () {
              var t = this;
              return this.get("edges").filter(function (e) {
                return e.get("target") === t;
              });
            }),
            (e.prototype.getOutEdges = function () {
              var t = this;
              return this.get("edges").filter(function (e) {
                return e.get("source") === t;
              });
            }),
            (e.prototype.getNeighbors = function (t) {
              var e = this,
                n = this.get("edges");
              if ("target" === t) {
                return n
                  .filter(function (t) {
                    return t.getSource() === e;
                  })
                  .map(function (t) {
                    return t.getTarget();
                  });
              }
              if ("source" === t) {
                return n
                  .filter(function (t) {
                    return t.getTarget() === e;
                  })
                  .map(function (t) {
                    return t.getSource();
                  });
              }
              return n.map(function (t) {
                return t.getSource() === e ? t.getTarget() : t.getSource();
              });
            }),
            (e.prototype.getLinkPointByAnchor = function (t) {
              return this.getAnchorPoints()[t];
            }),
            (e.prototype.getLinkPoint = function (t) {
              var e,
                n,
                r = this.get("keyShape").get("type"),
                i = this.get("type"),
                o = this.getBBox();
              "combo" === i
                ? ((e = o.centerX || (o.maxX + o.minX) / 2),
                  (n = o.centerY || (o.maxY + o.minY) / 2))
                : ((e = o.centerX), (n = o.centerY));
              var a,
                s = this.getAnchorPoints();
              switch (r) {
                case "circle":
                  a = En({ x: e, y: n, r: o.width / 2 }, t);
                  break;
                case "ellipse":
                  a = Nn({ x: e, y: n, rx: o.width / 2, ry: o.height / 2 }, t);
                  break;
                default:
                  a = kn(o, t);
              }
              var u = a;
              return (
                s.length && (u || (u = t), (u = this.getNearestPoint(s, u))),
                u || (u = { x: e, y: n }),
                u
              );
            }),
            (e.prototype.getAnchorPoints = function () {
              var t = this.get("anchorPointsCache");
              if (!t) {
                t = [];
                var e = this.get("shapeFactory"),
                  n = this.getBBox(),
                  r = this.get("model"),
                  i = this.getShapeCfg(r),
                  o = r.type,
                  a = e.getAnchorPoints(o, i) || [];
                Object(gt.e)(a, function (e, r) {
                  var i = {
                    x: n.minX + e[0] * n.width,
                    y: n.minY + e[1] * n.height,
                    anchorIndex: r,
                  };
                  t.push(i);
                }),
                  this.set("anchorPointsCache", t);
              }
              return t;
            }),
            (e.prototype.addEdge = function (t) {
              this.get("edges").push(t);
            }),
            (e.prototype.lock = function () {
              this.set("locked", !0);
            }),
            (e.prototype.unlock = function () {
              this.set("locked", !1);
            }),
            (e.prototype.hasLocked = function () {
              return this.get("locked");
            }),
            (e.prototype.removeEdge = function (t) {
              var e = this.getEdges(),
                n = e.indexOf(t);
              n > -1 && e.splice(n, 1);
            }),
            (e.prototype.clearCache = function () {
              this.set("bboxCache", null), this.set("anchorPointsCache", null);
            }),
            (e.prototype.isOnlyMove = function (t) {
              if (!t) return !1;
              var e = !Object(gt.s)(t.x),
                n = !Object(gt.s)(t.y),
                r = Object.keys(t);
              return (1 === r.length && (e || n)) || (2 === r.length && e && n);
            }),
            e
          );
        })(Kr),
        ti = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.getDefaultCfg = function () {
              return { type: "combo", nodes: [], edges: [], combos: [] };
            }),
            (e.prototype.getShapeCfg = function (t) {
              var e = this.get("styles"),
                n = this.get("bbox");
              if (e && n) {
                var r = t,
                  i = {
                    r:
                      Math.hypot(n.height, n.width) / 2 ||
                      ur.defaultCombo.size[0] / 2,
                    width: n.width || ur.defaultCombo.size[0],
                    height: n.height || ur.defaultCombo.size[1],
                  };
                r.style = Object(h.a)(
                  Object(h.a)(Object(h.a)({}, e), t.style),
                  i,
                );
                var o = t.padding || ur.defaultCombo.padding;
                return (
                  Object(gt.t)(o)
                    ? ((i.r += o), (i.width += 2 * o), (i.height += 2 * o))
                    : ((i.r += o[0]),
                      (i.width += o[1] + o[3] || 2 * o[1]),
                      (i.height += o[0] + o[2] || 2 * o[0])),
                  this.set("sizeCache", i),
                  r
                );
              }
              return t;
            }),
            (e.prototype.calculateCanvasBBox = function () {
              if (!this.destroyed) {
                var t = this.get("keyShape"),
                  e = this.get("group"),
                  n = gr(t, e);
                (n.centerX = (n.minX + n.maxX) / 2),
                  (n.centerY = (n.minY + n.maxY) / 2);
                var r = this.get("sizeCache"),
                  i = this.get("bboxCache") || {},
                  o = i.x,
                  a = i.x;
                if (r)
                  (r.width = Math.max(r.width, n.width)),
                    (r.height = Math.max(r.height, n.height)),
                    "circle" === t.get("type")
                      ? ((n.width = 2 * r.r), (n.height = 2 * r.r))
                      : ((n.width = r.width), (n.height = r.height)),
                    (n.minX = n.centerX - n.width / 2),
                    (n.minY = n.centerY - n.height / 2),
                    (n.maxX = n.centerX + n.width / 2),
                    (n.maxY = n.centerY + n.height / 2);
                else
                  (n.width = n.maxX - n.minX),
                    (n.height = n.maxY - n.minY),
                    (n.centerX = (n.minX + n.maxX) / 2),
                    (n.centerY = (n.minY + n.maxY) / 2);
                return (
                  (n.x = n.minX),
                  (n.y = n.minY),
                  (n.x === o && n.y === a) ||
                    this.set("anchorPointsCache", null),
                  n
                );
              }
            }),
            (e.prototype.getChildren = function () {
              return { nodes: this.getNodes(), combos: this.getCombos() };
            }),
            (e.prototype.getNodes = function () {
              return this.get("nodes");
            }),
            (e.prototype.getCombos = function () {
              return this.get("combos");
            }),
            (e.prototype.addChild = function (t) {
              switch (t.getType()) {
                case "node":
                  this.addNode(t);
                  break;
                case "combo":
                  this.addCombo(t);
                  break;
                default:
                  return (
                    console.warn(
                      "Only node or combo items are allowed to be added into a combo",
                    ),
                    !1
                  );
              }
              return !0;
            }),
            (e.prototype.addCombo = function (t) {
              return this.get("combos").push(t), !0;
            }),
            (e.prototype.addNode = function (t) {
              return this.get("nodes").push(t), !0;
            }),
            (e.prototype.removeChild = function (t) {
              switch (t.getType()) {
                case "node":
                  this.removeNode(t);
                  break;
                case "combo":
                  this.removeCombo(t);
                  break;
                default:
                  return (
                    console.warn(
                      "Only node or combo items are allowed to be added into a combo",
                    ),
                    !1
                  );
              }
              return !0;
            }),
            (e.prototype.removeCombo = function (t) {
              if (t) {
                var e = this.getCombos(),
                  n = e.indexOf(t);
                return n > -1 && (e.splice(n, 1), !0);
              }
            }),
            (e.prototype.removeNode = function (t) {
              if (t) {
                var e = this.getNodes(),
                  n = e.indexOf(t);
                return n > -1 && (e.splice(n, 1), !0);
              }
            }),
            (e.prototype.isOnlyMove = function (t) {
              return !1;
            }),
            (e.prototype.getBBox = function () {
              return (
                this.set("bboxCanvasCache", null), this.calculateCanvasBBox()
              );
            }),
            (e.prototype.clearCache = function () {
              this.set("bboxCache", null),
                this.set("bboxCanvasCache", null),
                this.set("anchorPointsCache", null);
            }),
            (e.prototype.destroy = function () {
              if (!this.destroyed) {
                var t = this.get("animate"),
                  e = this.get("group");
                t && e.stopAnimate(),
                  this.clearCache(),
                  this.set("sizeCache", null),
                  this.set("bbox", null),
                  e.remove(),
                  (this._cfg = null),
                  (this.destroyed = !0);
              }
            }),
            e
          );
        })(Jr),
        ei = (function () {
          function t(t) {
            (this.graph = t), (this.destroyed = !1);
          }
          return (
            (t.prototype.addItem = function (t, e) {
              var n = this.graph,
                r = "vedge" === t ? "edge" : t,
                i = n.get(r + "Group") || n.get("group"),
                o = Object(gt.J)(r),
                a = null,
                s = n.get(r + Object(gt.J)("stateStyles")) || {},
                u = n.get("default" + o);
              e.stateStyles && (s = e.stateStyles),
                u &&
                  Object(gt.e)(u, function (t, n) {
                    Object(gt.v)(t) && !Object(gt.m)(t)
                      ? (e[n] = Object(gt.d)({}, t, e[n]))
                      : Object(gt.m)(t)
                      ? (e[n] = e[n] || Object(gt.b)(u[n]))
                      : (e[n] = e[n] || u[n]);
                  });
              var c = n.get(r + "Mapper");
              if (c) {
                var h = c(e);
                h.stateStyles && ((s = h.stateStyles), delete h.stateStyles),
                  Object(gt.e)(h, function (t, n) {
                    Object(gt.v)(t) && !Object(gt.m)(t)
                      ? (e[n] = Object(gt.d)({}, e[n], t))
                      : (e[n] = h[n] || e[n]);
                  });
              }
              if (
                (n.emit("beforeadditem", { type: t, model: e }),
                "edge" === t || "vedge" === t)
              ) {
                var l = void 0,
                  d = void 0;
                if (
                  ((l = e.source),
                  (d = e.target),
                  l && Object(gt.x)(l) && (l = n.findById(l)),
                  d && Object(gt.x)(d) && (d = n.findById(d)),
                  !l || !d)
                )
                  return void console.warn(
                    "The source or target node of edge " +
                      e.id +
                      " does not exist!",
                  );
                l.getType && "combo" === l.getType() && (e.isComboEdge = !0),
                  d.getType && "combo" === d.getType() && (e.isComboEdge = !0),
                  (a = new $r({
                    model: e,
                    source: l,
                    target: d,
                    styles: s,
                    linkCenter: n.get("linkCenter"),
                    group: i.addGroup(),
                  }));
              } else if ("node" === t)
                a = new Jr({ model: e, styles: s, group: i.addGroup() });
              else if ("combo" === t) {
                var f = e.children,
                  p = Cr(f, n);
                isNaN(p.x)
                  ? isNaN(e.x) && (e.x = 100 * Math.random())
                  : (e.x = p.x),
                  isNaN(p.y)
                    ? isNaN(e.y) && (e.y = 100 * Math.random())
                    : (e.y = p.y);
                var g = i.addGroup();
                g.setZIndex(e.depth);
                var y = (a = new ti({
                  model: e,
                  styles: s,
                  bbox: e.collapsed ? Cr([], n) : p,
                  group: g,
                })).getModel();
                (f || []).forEach(function (t) {
                  var e = n.findById(t.id);
                  a.addChild(e), (t.depth = y.depth + 2);
                }),
                  e.collapsed &&
                    setTimeout(function () {
                      n.collapseCombo(a);
                    }, 16);
              }
              if (a)
                return (
                  n.get(t + "s").push(a),
                  (n.get("itemMap")[a.get("id")] = a),
                  n.emit("afteradditem", { item: a, model: e }),
                  a
                );
            }),
            (t.prototype.updateItem = function (t, e) {
              var n,
                r,
                i = this.graph;
              if ((Object(gt.x)(t) && (t = i.findById(t)), t && !t.destroyed)) {
                var o = "";
                t.getType && (o = t.getType());
                var a = i.get(o + "Mapper"),
                  s = t.getModel(),
                  u = t.isOnlyMove(e);
                if (a) {
                  var c = a(Object(gt.d)({}, s, e)),
                    l = Object(gt.d)({}, s, c, e);
                  c.stateStyles &&
                    (t.set("styles", l.stateStyles), delete l.stateStyles),
                    Object(gt.e)(l, function (t, n) {
                      e[n] = t;
                    });
                } else
                  Object(gt.e)(e, function (t, n) {
                    s[n] &&
                      Object(gt.v)(t) &&
                      !Object(gt.m)(t) &&
                      (e[n] = Object(h.a)(Object(h.a)({}, s[n]), e[n]));
                  });
                if (
                  (i.emit("beforeupdateitem", { item: t, cfg: e }),
                  "edge" === o)
                ) {
                  if (e.source) {
                    var d = e.source;
                    Object(gt.x)(d) && (d = i.findById(d)), t.setSource(d);
                  }
                  if (e.target) {
                    var f = e.target;
                    Object(gt.x)(f) && (f = i.findById(f)), t.setTarget(f);
                  }
                  t.update(e);
                }
                if ("node" === o || "combo" === o) {
                  t.update(e, u);
                  var p = t.getEdges(),
                    g = jr(e);
                  if (g && "node" === o)
                    Object(gt.e)(p, function (t) {
                      t.refresh();
                    });
                  else if (g && "combo" === o) {
                    var y = t.get("shapeFactory"),
                      v = s.type || "circle";
                    (
                      void 0 === s.animate || void 0 === e.animate
                        ? null ===
                            (r =
                              null === (n = y[v]) || void 0 === n
                                ? void 0
                                : n.options) || void 0 === r
                          ? void 0
                          : r.animate
                        : s.animate || e.animate
                    )
                      ? setTimeout(function () {
                          if (t && !t.destroyed) {
                            var e = t.getKeyShape();
                            e &&
                              !e.destroyed &&
                              Object(gt.e)(p, function (t) {
                                t && !t.destroyed && t.refresh();
                              });
                          }
                        }, 201)
                      : Object(gt.e)(p, function (t) {
                          t.refresh();
                        });
                  }
                }
                i.emit("afterupdateitem", { item: t, cfg: e });
              }
            }),
            (t.prototype.updateCombo = function (t, e) {
              var n,
                r,
                i = this,
                o = this.graph;
              if ((Object(gt.x)(t) && (t = o.findById(t)), t && !t.destroyed)) {
                var a = t.getModel(),
                  s = Cr(a.collapsed ? [] : e, o);
                t.set("bbox", s), t.update({ x: s.x, y: s.y });
                var u = t.get("shapeFactory"),
                  c = a.type || "circle";
                (
                  void 0 === a.animate
                    ? null ===
                        (r =
                          null === (n = u[c]) || void 0 === n
                            ? void 0
                            : n.options) || void 0 === r
                      ? void 0
                      : r.animate
                    : a.animate
                )
                  ? setTimeout(function () {
                      if (t && !t.destroyed) {
                        var e = t.getKeyShape();
                        e &&
                          !e.destroyed &&
                          (t.getShapeCfg(a), i.updateComboEdges(t));
                      }
                    }, 201)
                  : this.updateComboEdges(t);
              }
            }),
            (t.prototype.updateComboEdges = function (t) {
              for (var e = t.getEdges() || [], n = 0; n < e.length; n++) {
                var r = e[n];
                if (r && !r.destroyed) {
                  var i = r.get("shapeFactory"),
                    o = r.getShapeCfg(r.getModel()),
                    a = r.getContainer();
                  a.clear();
                  var s = i.draw(o.type, o, a);
                  r.set("keyShape", s),
                    s.set("isKeyShape", !0),
                    s.set("draggable", !0),
                    r.setOriginStyle();
                }
              }
            }),
            (t.prototype.collapseCombo = function (t) {
              var e = this.graph;
              Object(gt.x)(t) && (t = e.findById(t));
              var n = t.getChildren();
              n.nodes.forEach(function (t) {
                e.hideItem(t);
              }),
                n.combos.forEach(function (t) {
                  e.hideItem(t);
                });
            }),
            (t.prototype.expandCombo = function (t) {
              var e = this.graph;
              Object(gt.x)(t) && (t = e.findById(t));
              var n = t.getChildren();
              n.nodes.forEach(function (t) {
                e.showItem(t);
              }),
                n.combos.forEach(function (t) {
                  t.getModel().collapsed ? t.show() : e.showItem(t);
                });
            }),
            (t.prototype.removeItem = function (t) {
              var e = this,
                n = this.graph;
              if ((Object(gt.x)(t) && (t = n.findById(t)), t && !t.destroyed)) {
                var r = Object(gt.b)(t.getModel());
                n.emit("beforeremoveitem", { item: r });
                var i = "";
                t.getType && (i = t.getType());
                var o = n.get(i + "s"),
                  a = o.indexOf(t);
                if ((a > -1 && o.splice(a, 1), "edge" === i)) {
                  var s = n.get("v" + i + "s"),
                    u = s.indexOf(t);
                  u > -1 && s.splice(u, 1);
                }
                var c = t.get("id");
                delete n.get("itemMap")[c];
                var h = n.get("comboTrees"),
                  l = t.get("id");
                if ("node" === i) {
                  var d = t.getModel().comboId;
                  if (h && d) {
                    var f = h,
                      p = !1;
                    h.forEach(function (t) {
                      p ||
                        br(t, function (t) {
                          if (t.id === l && f) {
                            var e = f.indexOf(t);
                            return f.splice(e, 1), (p = !0), !1;
                          }
                          return (f = t.children), !0;
                        });
                    });
                  }
                  for (var g = (b = t.getEdges()).length - 1; g >= 0; g--)
                    n.removeItem(b[g], !1);
                  d && n.updateCombo(d);
                } else if ("combo" === i) {
                  var y,
                    v = t.getModel().parentId,
                    m = !1;
                  (h || []).forEach(function (t) {
                    m ||
                      br(t, function (t) {
                        return t.id !== l || ((y = t), (m = !0), !1);
                      });
                  }),
                    (y.removed = !0),
                    y &&
                      y.children &&
                      y.children.forEach(function (t) {
                        e.removeItem(t.id);
                      });
                  var b;
                  for (g = (b = t.getEdges()).length; g >= 0; g--)
                    n.removeItem(b[g], !1);
                  v && n.updateCombo(v);
                }
                t.destroy(), n.emit("afterremoveitem", { item: r });
              }
            }),
            (t.prototype.setItemState = function (t, e, n) {
              var r = this.graph,
                i = e;
              Object(gt.x)(n) && (i = e + ":" + n),
                (t.hasState(i) === n && n) ||
                  (Object(gt.x)(n) && t.hasState(i)) ||
                  (r.emit("beforeitemstatechange", {
                    item: t,
                    state: i,
                    enabled: n,
                  }),
                  t.setState(e, n),
                  r.autoPaint(),
                  r.emit("afteritemstatechange", {
                    item: t,
                    state: i,
                    enabled: n,
                  }));
            }),
            (t.prototype.priorityState = function (t, e) {
              var n = this.graph,
                r = t;
              Object(gt.x)(t) && (r = n.findById(t)),
                this.setItemState(r, e, !1),
                this.setItemState(r, e, !0);
            }),
            (t.prototype.clearItemStates = function (t, e) {
              var n = this.graph;
              Object(gt.x)(t) && (t = n.findById(t)),
                n.emit("beforeitemstatesclear", { item: t, states: e }),
                t.clearStates(e),
                n.emit("afteritemstatesclear", { item: t, states: e });
            }),
            (t.prototype.refreshItem = function (t) {
              var e = this.graph;
              Object(gt.x)(t) && (t = e.findById(t)),
                e.emit("beforeitemrefresh", { item: t }),
                t.refresh(),
                e.emit("afteritemrefresh", { item: t });
            }),
            (t.prototype.addCombos = function (t, e) {
              var n = this,
                r = this.graph;
              (t || []).forEach(function (t) {
                xr(t, function (t) {
                  var r;
                  return (
                    e.forEach(function (e) {
                      e.id === t.id &&
                        ((e.children = t.children),
                        (e.depth = t.depth),
                        (r = e));
                    }),
                    r && n.addItem("combo", r),
                    !0
                  );
                });
              });
              var i = r.get("comboGroup");
              i && i.sort();
            }),
            (t.prototype.changeItemVisibility = function (t, e) {
              var n = this,
                r = this.graph;
              if ((Object(gt.x)(t) && (t = r.findById(t)), t)) {
                if (
                  (r.emit("beforeitemvisibilitychange", {
                    item: t,
                    visible: e,
                  }),
                  t.changeVisibility(e),
                  t.getType && "node" === t.getType())
                ) {
                  var i = t.getEdges();
                  Object(gt.e)(i, function (t) {
                    (!e ||
                      (t.get("source").isVisible() &&
                        t.get("target").isVisible())) &&
                      n.changeItemVisibility(t, e);
                  });
                } else if (t.getType && "combo" === t.getType()) {
                  var o = r.get("comboTrees"),
                    a = t.get("id"),
                    s = [],
                    u = !1;
                  (o || []).forEach(function (t) {
                    u ||
                      (t.children &&
                        0 !== t.children.length &&
                        br(t, function (t) {
                          return t.id !== a || ((s = t.children), (u = !0), !1);
                        }));
                  }),
                    s &&
                      (!e || (e && !t.getModel().collapsed)) &&
                      s.forEach(function (t) {
                        var i = r.findById(t.id);
                        n.changeItemVisibility(i, e);
                      });
                  i = t.getEdges();
                  Object(gt.e)(i, function (t) {
                    (!e ||
                      (t.get("source").isVisible() &&
                        t.get("target").isVisible())) &&
                      n.changeItemVisibility(t, e);
                  });
                }
                return (
                  r.emit("afteritemvisibilitychange", { item: t, visible: e }),
                  t
                );
              }
              console.warn("The item to be shown or hidden does not exist!");
            }),
            (t.prototype.destroy = function () {
              (this.graph = null), (this.destroyed = !0);
            }),
            t
          );
        })(),
        ni = null,
        ri = (function () {
          function t(t) {
            (this.graph = t),
              (this.cachedStates = { enabled: {}, disabled: {} }),
              (this.destroyed = !1);
          }
          return (
            (t.checkCache = function (t, e, n) {
              if (n[e]) {
                var r = n[e].indexOf(t);
                r >= 0 && n[e].splice(r, 1);
              }
            }),
            (t.cacheState = function (t, e, n) {
              n[e] || (n[e] = []), n[e].push(t);
            }),
            (t.prototype.updateState = function (e, n, r) {
              var i = this,
                o = t.checkCache,
                a = t.cacheState;
              if (!e.destroyed) {
                var s = this.cachedStates,
                  u = s.enabled,
                  c = s.disabled;
                r ? (o(e, n, c), a(e, n, u)) : (o(e, n, u), a(e, n, c)),
                  ni && clearTimeout(ni),
                  (ni = setTimeout(function () {
                    (ni = null), i.updateGraphStates();
                  }, 16));
              }
            }),
            (t.prototype.updateStates = function (t, e, n) {
              var r = this;
              Object(gt.x)(e)
                ? this.updateState(t, e, n)
                : e.forEach(function (e) {
                    r.updateState(t, e, n);
                  });
            }),
            (t.prototype.updateGraphStates = function () {
              var t = this.graph.get("states"),
                e = this.cachedStates;
              Object(gt.e)(e.disabled, function (e, n) {
                t[n] &&
                  (t[n] = t[n].filter(function (t) {
                    return e.indexOf(t) < 0 && !e.destroyed;
                  }));
              }),
                Object(gt.e)(e.enabled, function (e, n) {
                  if (t[n]) {
                    var r = {};
                    t[n].forEach(function (t) {
                      t.destroyed || (r[t.get("id")] = !0);
                    }),
                      e.forEach(function (e) {
                        if (!e.destroyed) {
                          var i = e.get("id");
                          r[i] || ((r[i] = !0), t[n].push(e));
                        }
                      });
                  } else t[n] = e;
                }),
                this.graph.emit("graphstatechange", { states: t }),
                (this.cachedStates = { enabled: {}, disabled: {} });
            }),
            (t.prototype.destroy = function () {
              (this.graph = null),
                (this.cachedStates = null),
                ni && clearTimeout(ni),
                (ni = null),
                (this.destroyed = !0);
            }),
            t
          );
        })(),
        ii = function (t, e) {
          return t && e
            ? t.replace(/\\?\{([^{}]+)\}/g, function (t, n) {
                if ("\\" === t.charAt(0)) return t.slice(1);
                var r = e[n];
                return 0 === r && (r = "0"), r || "";
              })
            : t;
        },
        oi = function (t) {
          var e = [];
          if (t.length < 2)
            throw new Error(
              "point length must largn than 2, now it's " + t.length,
            );
          for (var n = 0, r = t; n < r.length; n++) {
            var i = r[n],
              o = i.x,
              a = i.y;
            e.push(o), e.push(a);
          }
          var s = Object(mt.a)(e);
          return s.unshift(["M", t[0].x, t[0].y]), s;
        },
        ai = function (t, e, n, r) {
          void 0 === n && (n = 0), void 0 === r && (r = 0);
          var i = { x: (1 - n) * t.x + n * e.x, y: (1 - n) * t.y + n * e.y },
            o = [0, 0];
          sn.c.normalize(o, [e.x - t.x, e.y - t.y]),
            (o && (o[0] || o[1])) || (o = [0, 0]);
          var a = [-o[1] * r, o[0] * r];
          return (i.x += a[0]), (i.y += a[1]), i;
        },
        si = function (t, e) {
          var n = t.length;
          if (!n) return "";
          for (var r = "", i = 0; i < n; i++) {
            var o = t[i];
            r += ii(0 === i ? "M{x} {y}" : "L{x} {y}", o);
          }
          return e && (r += "Z"), r;
        },
        ui = function (t) {
          var e = [];
          return (
            t.forEach(function (t) {
              if ("A" !== t[0])
                for (var n = 1; n < t.length; n += 2) e.push([t[n], t[n + 1]]);
              else {
                var r = t.length;
                e.push([t[r - 2], t[r - 1]]);
              }
            }),
            e
          );
        },
        ci = function (t) {
          if (t.length < 2)
            throw new Error(
              "point length must largn than 2, now it's " + t.length,
            );
          var e = t[0],
            n = t[1],
            r = t[t.length - 1],
            i = t[t.length - 2];
          t.unshift(r), t.unshift(i), t.push(e), t.push(n);
          for (var o = [], a = 1; a < t.length - 2; a += 1) {
            var s = t[a - 1].x,
              u = t[a - 1].y,
              c = t[a].x,
              h = t[a].y,
              l = t[a + 1].x,
              d = t[a + 1].y,
              f = c + (l - s) / 6,
              p = h + (d - u) / 6,
              g = l - ((a !== t.length - 2 ? t[a + 2].x : l) - c) / 6,
              y = d - ((a !== t.length - 2 ? t[a + 2].y : d) - h) / 6;
            o.push(["C", f, p, g, y, l, d]);
          }
          return o.unshift(["M", r.x, r.y]), o;
        },
        hi = function (t, e) {
          return sn.c.scale([0, 0], sn.c.normalize([0, 0], t), e);
        },
        li = function (t, e) {
          var n = [t[1] - e[1], e[0] - t[0]],
            r = Math.sqrt(n[0] * n[0] + n[1] * n[1]);
          if (0 === r) throw new Error("p0 should not be equal to p1");
          return [n[0] / r, n[1] / r];
        },
        di = function (t, e) {
          return [e[0] - t[0], e[1] - t[1]];
        };
      function fi(t, e) {
        if (!t || t.length < 1) return "";
        if (1 === t.length)
          return (function (t) {
            var n = [t[0][0], t[0][1] - e],
              r = [t[0][0], t[0][1] + e];
            return (
              "M " +
              n +
              " A " +
              e +
              "," +
              e +
              ",0,0,0," +
              r +
              " A " +
              e +
              "," +
              e +
              ",0,0,0," +
              n
            );
          })(t);
        if (2 === t.length)
          return (function (t) {
            var n = sn.c.scale([0, 0], li(t[0], t[1]), e),
              r = sn.c.scale([0, 0], n, -1),
              i = sn.c.add([0, 0], t[0], n),
              o = sn.c.add([0, 0], t[1], n),
              a = sn.c.add([0, 0], t[1], r),
              s = sn.c.add([0, 0], t[0], r);
            return (
              "M " +
              i +
              " L " +
              o +
              " A " +
              [e, e, "0,0,0", a].join(",") +
              " L " +
              s +
              " A " +
              [e, e, "0,0,0", i].join(",")
            );
          })(t);
        for (var n = new Array(t.length), r = 0; r < n.length; ++r) {
          var i = 0 === r ? t[t.length - 1] : t[r - 1],
            o = t[r],
            a = sn.c.scale([0, 0], li(i, o), e);
          n[r] = [sn.c.add([0, 0], i, a), sn.c.add([0, 0], o, a)];
        }
        var s = "A " + [e, e, "0,0,0,"].join(",");
        return (n = n.map(function (t, e) {
          var r = "";
          return (
            0 === e && (r = "M " + n[n.length - 1][1] + " "),
            (r += s + t[0] + " L " + t[1])
          );
        })).join(" ");
      }
      function pi(t, e) {
        var n,
          r,
          i,
          o = t.length;
        if (!t || o < 1) return "";
        if (1 === o)
          return (
            (r = [(n = t)[0][0], n[0][1] - e]),
            (i = [n[0][0], n[0][1] + e]),
            "M " +
              r +
              " A " +
              [e, e, "0,0,0", i].join(",") +
              " A " +
              [e, e, "0,0,0", r].join(",")
          );
        if (2 === o)
          return (function (t) {
            var n = di(t[0], t[1]),
              r = hi(n, e),
              i = sn.c.add([0, 0], t[0], sn.c.scale([0, 0], r, -1)),
              o = sn.c.add([0, 0], t[1], r),
              a = 1.2 * e,
              s = hi(sn.c.normalize([0, 0], n), a),
              u = sn.c.scale([0, 0], s, -1),
              c = sn.c.add([0, 0], i, u),
              h = sn.c.add([0, 0], o, u),
              l = sn.c.add([0, 0], i, s);
            return (
              "M " +
              i +
              " C " +
              [c, h, o].join(",") +
              " S " +
              [l, i].join(",") +
              " Z"
            );
          })(t);
        for (
          var a = t.map(function (e, n) {
              var r = t[(n + 1) % o];
              return { p: e, v: sn.c.normalize([0, 0], di(e, r)) };
            }),
            s = 0;
          s < a.length;
          ++s
        ) {
          var u = s > 0 ? s - 1 : o - 1,
            c = sn.c.normalize(
              [0, 0],
              sn.c.add([0, 0], a[u].v, sn.c.scale([0, 0], a[s].v, -1)),
            );
          a[s].p = sn.c.add([0, 0], a[s].p, sn.c.scale([0, 0], c, e));
        }
        return a.map(function (t) {
          var e = t.p;
          return { x: e[0], y: e[1] };
        });
      }
      var gi = function (t, e, n) {
          return (t.y - n.y) * (e.x - n.x) - (t.x - n.x) * (e.y - n.y);
        },
        yi = function (t) {
          var e = t.map(function (t) {
            return { x: t.getModel().x, y: t.getModel().y };
          });
          if (
            (e.sort(function (t, e) {
              return t.x === e.x ? t.y - e.y : t.x - e.x;
            }),
            1 === e.length)
          )
            return e;
          for (var n = [], r = 0; r < e.length; r++) {
            for (
              ;
              n.length >= 2 && gi(n[n.length - 2], n[n.length - 1], e[r]) <= 0;

            )
              n.pop();
            n.push(e[r]);
          }
          var i = [];
          for (r = e.length - 1; r >= 0; r--) {
            for (
              ;
              i.length >= 2 && gi(i[i.length - 2], i[i.length - 1], e[r]) <= 0;

            )
              i.pop();
            i.push(e[r]);
          }
          return i.pop(), n.pop(), n.concat(i);
        },
        vi = {
          maxRoutingIterations: 100,
          maxMarchingIterations: 100,
          pixelGroupSize: 2,
          edgeR0: 10,
          edgeR1: 10,
          nodeR0: 5,
          nodeR1: 10,
          morphBuffer: 5,
          threshold: 0.001,
          skip: 16,
          nodeInfluenceFactor: 1,
          edgeInfluenceFactor: 1,
          negativeNodeInfluenceFactor: -0.5,
        };
      function mi(t, e, n) {
        var r = !1,
          i = function (t, n) {
            return e.cells[t + n * e.width];
          },
          o = function (t, e) {
            var r = 0;
            return (
              i(t - 1, e - 1) >= n && (r += 1),
              i(t, e - 1) > n && (r += 2),
              i(t - 1, e) > n && (r += 4),
              i(t, e) > n && (r += 8),
              r
            );
          },
          a = function (n, r) {
            for (var i, a, s = n, u = r, c = 0; c < e.width * e.height; c++) {
              if (
                ((i = s),
                (a = u),
                t.findIndex(function (t) {
                  return t.x === s && t.y === u;
                }) > -1)
              ) {
                if (t[0].x === s && t[0].y === u) return !0;
              } else t.push({ x: s, y: u });
              var h = o(s, u);
              switch (h) {
                case -1:
                  return console.warn("Marched out of bounds"), !0;
                case 0:
                case 3:
                case 2:
                case 7:
                  s++;
                  break;
                case 12:
                case 14:
                case 4:
                  s--;
                  break;
                case 6:
                  0 === i && (-1 === a ? (s -= 1) : (s += 1));
                  break;
                case 1:
                case 13:
                case 5:
                  u--;
                  break;
                case 9:
                  1 === i && (0 === a ? (u -= 1) : (u += 1));
                  break;
                case 10:
                case 8:
                case 11:
                  u++;
                  break;
                default:
                  return (
                    console.warn("Marching squares invalid state: " + h), !0
                  );
              }
            }
          };
        this.march = function () {
          for (var t = 0; t < e.width && !r; t += 1)
            for (var s = 0; s < e.height && !r; s += 1)
              i(t, s) > n && 15 !== o(t, s) && (r = a(t, s));
          return r;
        };
      }
      var bi = function (t, e) {
        var n = Number.POSITIVE_INFINITY,
          r = null;
        return (
          t.forEach(function (t) {
            var i = Kn(t, e);
            i >= 0 && i < n && ((r = t), (n = i));
          }),
          r
        );
      };
      function xi(t, e, n, r, i) {
        var o = (function (t, e, n) {
          var r = null,
            i = Number.POSITIVE_INFINITY;
          return (
            e.forEach(function (e) {
              var o = { x: t.getModel().x, y: t.getModel().y },
                a = { x: e.getModel().x, y: e.getModel().y },
                s = $n(o, a),
                u = new Hn(o.x, o.y, a.x, a.y),
                c = n.reduce(function (t, e) {
                  return Kn(e, u) > 0 ? t + 1 : t;
                }, 0);
              s * Math.pow(c + 1, 2) < i &&
                ((r = e), (i = s * Math.pow(c + 1, 2)));
            }),
            r
          );
        })(t, n, e);
        if (null === o) return [];
        return (function (t) {
          for (var n = []; t.length > 0; ) {
            var r = t.pop();
            if (0 === t.length) {
              n.push(r);
              break;
            }
            var i = t.pop(),
              o = new Hn(r.x1, r.y1, i.x2, i.y2);
            bi(e, o) ? (n.push(r), t.push(i)) : t.push(o);
          }
          return n;
        })(
          (function (t, e, n, r) {
            var i = [],
              o = [];
            o.push(t);
            for (
              var a = !0,
                s = 0,
                u = function (t, e) {
                  var n = !1;
                  return (
                    e.forEach(function (e) {
                      n ||
                        ((tr(t, { x: e.x1, y: e.y1 }) ||
                          tr(t, { x: e.x2, y: e.y2 })) &&
                          (n = !0));
                    }),
                    n
                  );
                },
                c = function (t, e) {
                  for (var n = 0, r = e; n < r.length; n++) {
                    var i = r[n].getBBox(),
                      o = [
                        [i.x, i.y],
                        [i.x + i.width, i.y],
                        [i.x, i.y + i.height],
                        [i.x + i.width, i.y + i.height],
                      ];
                    if (Wn(o, t.x, t.y)) return !0;
                  }
                  return !1;
                };
              a && s < n;

            ) {
              a = !1;
              for (
                var h = function () {
                  var t = o.pop(),
                    n = bi(e, t);
                  if (n) {
                    var h = Zn(n, t),
                      l = h[0];
                    if (2 === h[1]) {
                      var d = function (s) {
                        for (
                          var h = r,
                            d = Mi(n, h, l, s),
                            f = u(d, o) || u(d, i),
                            p = c(d, e);
                          !f && p && h >= 1;

                        )
                          (d = Mi(n, (h /= 1.5), l, s)),
                            (f = u(d, o) || u(d, i)),
                            (p = c(d, e));
                        !d ||
                          f ||
                          (s && p) ||
                          (o.push(new Hn(t.x1, t.y1, d.x, d.y)),
                          o.push(new Hn(d.x, d.y, t.x2, t.y2)),
                          (a = !0));
                      };
                      d(!0), a || d(!1);
                    }
                  }
                  a || i.push(t), (s += 1);
                };
                !a && o.length;

              )
                h();
            }
            for (; o.length; ) i.push(o.pop());
            return i;
          })(
            new Hn(
              t.getModel().x,
              t.getModel().y,
              o.getModel().x,
              o.getModel().y,
            ),
            e,
            r,
            i,
          ),
        );
      }
      var wi = function (t, e, n) {
        var r = Object.assign(vi, n),
          i = Qn(
            t.map(function (t) {
              return { x: t.getModel().x, y: t.getModel().y };
            }),
          );
        t = t.sort(function (t, e) {
          return (
            $n({ x: t.getModel().x, y: t.getModel().y }, i) -
            $n({ x: e.getModel().x, y: e.getModel().y }, i)
          );
        });
        var o = [],
          a = [];
        t.forEach(function (t) {
          xi(t, e, o, r.maxRoutingIterations, r.morphBuffer).forEach(
            function (t) {
              a.push(t);
            },
          ),
            o.push(t);
        });
        for (
          var s,
            u,
            c,
            h,
            l,
            d = (function (t, e, n) {
              var r = {
                  minX: Number.POSITIVE_INFINITY,
                  minY: Number.POSITIVE_INFINITY,
                  maxX: Number.NEGATIVE_INFINITY,
                  maxY: Number.NEGATIVE_INFINITY,
                  width: 0,
                  height: 0,
                  x: 0,
                  y: 0,
                },
                i = [];
              t.forEach(function (t) {
                i.push(t.getBBox());
              }),
                e.forEach(function (t) {
                  i.push(t.getBBox());
                });
              for (var o = 0, a = i; o < a.length; o++) {
                var s = a[o];
                (r.minX = (s.minX < r.minX ? s.minX : r.minX) - n),
                  (r.minY = (s.minY < r.minY ? s.minY : r.minY) - n),
                  (r.maxX = (s.maxX > r.maxX ? s.maxX : r.maxX) + n),
                  (r.maxY = (s.maxY > r.maxY ? s.maxY : r.maxY) + n);
              }
              return (
                (r.width = r.maxX - r.minX),
                (r.height = r.maxY - r.minY),
                (r.x = r.minX),
                (r.y = r.minY),
                r
              );
            })(t, a, r.nodeR0),
            f =
              ((s = d.width),
              (u = d.height),
              (c = r.pixelGroupSize),
              (h = Math.ceil(s / c)),
              (l = Math.ceil(u / c)),
              {
                cells: new Float32Array(Math.max(0, h * l)).fill(0),
                width: h,
                height: l,
              }),
            p = [],
            g = [],
            y = 0;
          y < r.maxMarchingIterations;
          y++
        )
          if (
            (Oi(t, e, a, d, f, r),
            (g = []),
            new mi((p = []), f, r.threshold).march())
          ) {
            var v = p.map(function (t) {
              return {
                x: Math.round(t.x * r.pixelGroupSize + d.minX),
                y: Math.round(t.y * r.pixelGroupSize + d.minY),
              };
            });
            if (v) {
              var m = v.length;
              if (r.skip > 1)
                for (m = Math.floor(v.length / r.skip); m < 3 && r.skip > 1; )
                  (r.skip -= 1), (m = Math.floor(v.length / r.skip));
              for (var b = 0, x = 0; x < m; x += 1, b += r.skip)
                g.push({ x: v[b].x, y: v[b].y });
            }
            if (
              g &&
              (function () {
                for (var e = 0, n = t; e < n.length; e++) {
                  var r = n[e],
                    i = g.map(function (t) {
                      return [t.x, t.y];
                    });
                  if (!Wn(i, r.getBBox().centerX, r.getBBox().centerY))
                    return !1;
                }
                return !0;
              })()
            )
              return g;
            if (((r.threshold *= 0.9), y <= 0.5 * r.maxMarchingIterations))
              (r.memberInfluenceFactor *= 1.2), (r.edgeInfluenceFactor *= 1.2);
            else {
              if (!(0 !== r.nonMemberInfluenceFactor && e.length > 0)) break;
              r.nonMemberInfluenceFactor *= 0.8;
            }
          }
        return g;
      };
      function Oi(t, e, n, r, i, o) {
        function a(t, e) {
          var n = Math.floor((t - e) / o.pixelGroupSize);
          return n < 0 ? 0 : n;
        }
        function s(t, e) {
          return t * o.pixelGroupSize + e;
        }
        var u = (o.nodeR0 - o.nodeR1) * (o.nodeR0 - o.nodeR1),
          c = (o.edgeR0 - o.edgeR1) * (o.edgeR0 - o.edgeR1),
          h = function (t, e) {
            return [
              Math.min(a(t.minX, e + r.minX), i.width),
              Math.min(a(t.minY, e + r.minY), i.height),
              Math.min(a(t.maxX, -e + r.minX), i.width),
              Math.min(a(t.maxY, -e + r.minY), i.height),
            ];
          },
          l = function (t, e) {
            for (
              var n = t.getBBox(),
                a = h(n, o.nodeR1),
                u = a[0],
                c = a[1],
                l = a[2],
                d = a[3],
                f = c;
              f < d;
              f += 1
            )
              for (var p = u; p < l; p += 1)
                if (!(e < 0 && i[p + f * i.width] <= 0)) {
                  var g = s(p, r.minX),
                    y = s(f, r.minY),
                    v = er(
                      { x: g, y: y },
                      {
                        x: n.minX,
                        y: n.minY,
                        width: n.width,
                        height: n.height,
                      },
                    );
                  if (v < Math.pow(o.nodeR1, 2)) {
                    var m = Math.sqrt(v) - o.nodeR1;
                    i.cells[p + f * i.width] += e * m * m;
                  }
                }
          };
        o.nodeInfluenceFactor &&
          t.forEach(function (t) {
            l(t, o.nodeInfluenceFactor / u);
          }),
          o.edgeInfluenceFactor &&
            n.forEach(function (t) {
              !(function (t, e) {
                for (
                  var n = t.getBBox(),
                    a = h(n, o.edgeR1),
                    u = a[0],
                    c = a[1],
                    l = a[2],
                    d = a[3],
                    f = c;
                  f < d;
                  f += 1
                )
                  for (var p = u; p < l; p += 1)
                    if (!(e < 0 && i.cells[p + f * i.width] <= 0)) {
                      var g = s(p, r.minX),
                        y = s(f, r.minY),
                        v = Jn({ x: g, y: y }, t);
                      if (v < Math.pow(o.edgeR1, 2)) {
                        var m = Math.sqrt(v) - o.edgeR1;
                        i.cells[p + f * i.width] += e * m * m;
                      }
                    }
              })(t, o.edgeInfluenceFactor / c);
            }),
          o.negativeNodeInfluenceFactor &&
            e.forEach(function (t) {
              l(t, o.negativeNodeInfluenceFactor / u);
            });
      }
      function Mi(t, e, n, r) {
        var i = t.getBBox(),
          o = n[0],
          a = n[1],
          s = n[2],
          u = n[3],
          c = {
            topLeft: { x: i.minX - e, y: i.minY - e },
            topRight: { x: i.maxX + e, y: i.minY - e },
            bottomLeft: { x: i.minX - e, y: i.maxY + e },
            bottomRight: { x: i.maxX + e, y: i.maxY + e },
          },
          h = i.height * i.width;
        function l(t, e) {
          return i.width * (0.5 * (t.y - i.minY + (e.y - i.minY)));
        }
        if (a)
          return o
            ? r
              ? c.topLeft
              : c.bottomRight
            : s
            ? r
              ? c.bottomLeft
              : c.topRight
            : l(a, u) < 0.5 * h
            ? a.y > u.y
              ? r
                ? c.topLeft
                : c.bottomRight
              : r
              ? c.topRight
              : c.bottomLeft
            : a.y < u.y
            ? r
              ? c.bottomLeft
              : c.topRight
            : r
            ? c.bottomRight
            : c.topLeft;
        if (u) {
          if (o) return r ? c.topRight : c.bottomLeft;
          if (s) return r ? c.bottomRight : c.topLeft;
        }
        return l(o, s) < 0.5 * h
          ? o.x > s.x
            ? r
              ? c.topLeft
              : c.bottomRight
            : r
            ? c.bottomLeft
            : c.topRight
          : o.x < s.x
          ? r
            ? c.topRight
            : c.bottomLeft
          : r
          ? c.bottomRight
          : c.topLeft;
      }
      var Si = (function () {
          function t(t, e) {
            (this.cfg = Object(gt.d)(this.getDefaultCfg(), e)),
              (this.graph = t),
              (this.id = this.cfg.id),
              (this.group = this.cfg.group),
              (this.members = this.cfg.members.map(function (e) {
                return Object(gt.x)(e) ? t.findById(e) : e;
              })),
              (this.nonMembers = this.cfg.nonMembers.map(function (e) {
                return Object(gt.x)(e) ? t.findById(e) : e;
              })),
              this.setPadding(),
              this.setType(),
              (this.path = this.calcPath(this.members, this.nonMembers)),
              this.render();
          }
          return (
            (t.prototype.getDefaultCfg = function () {
              return {
                id: "g6-hull",
                type: "round-convex",
                members: [],
                nonMembers: [],
                style: { fill: "lightblue", stroke: "blue", opacity: 0.2 },
                padding: 10,
              };
            }),
            (t.prototype.setPadding = function () {
              var t =
                this.members.length &&
                this.members[0].getKeyShape().getCanvasBBox().width / 2;
              (this.padding =
                this.cfg.padding > 0 ? this.cfg.padding + t : 10 + t),
                (this.cfg.bubbleCfg = {
                  nodeR0: this.padding - t,
                  nodeR1: this.padding - t,
                  morphBuffer: this.padding - t,
                });
            }),
            (t.prototype.setType = function () {
              (this.type = this.cfg.type),
                this.members.length < 3 && (this.type = "round-convex"),
                "round-convex" !== this.type &&
                  "smooth-convex" !== this.type &&
                  "bubble" !== this.type &&
                  (console.warn(
                    "The hull type should be either round-convex, smooth-convex or bubble, round-convex is used by default.",
                  ),
                  (this.type = "round-convex"));
            }),
            (t.prototype.calcPath = function (t, e) {
              var n, r, i;
              switch (this.type) {
                case "round-convex":
                  (i = fi(
                    (n = yi(t)).map(function (t) {
                      return [t.x, t.y];
                    }),
                    this.padding,
                  )),
                    (r = Object(mt.b)(i));
                  break;
                case "smooth-convex":
                  2 === (n = yi(t)).length
                    ? ((i = fi(
                        n.map(function (t) {
                          return [t.x, t.y];
                        }),
                        this.padding,
                      )),
                      (r = Object(mt.b)(i)))
                    : n.length > 2 &&
                      ((i = pi(
                        n.map(function (t) {
                          return [t.x, t.y];
                        }),
                        this.padding,
                      )),
                      (r = ci(i)));
                  break;
                case "bubble":
                  r = (n = wi(t, e, this.cfg.bubbleCfg)).length >= 2 && ci(n);
              }
              return r;
            }),
            (t.prototype.render = function () {
              this.group.addShape("path", {
                attrs: Object(h.a)({ path: this.path }, this.cfg.style),
                id: this.id,
                name: this.cfg.id,
              }),
                this.group.toBack();
            }),
            (t.prototype.addMember = function (t) {
              if (t) {
                Object(gt.x)(t) && (t = this.graph.findById(t)),
                  this.members.push(t);
                var e = this.nonMembers.indexOf(t);
                return (
                  e > -1 && this.nonMembers.splice(e, 1),
                  this.updateData(this.members, this.nonMembers),
                  !0
                );
              }
            }),
            (t.prototype.addNonMember = function (t) {
              if (t) {
                Object(gt.x)(t) && (t = this.graph.findById(t)),
                  this.nonMembers.push(t);
                var e = this.members.indexOf(t);
                return (
                  e > -1 && this.members.splice(e, 1),
                  this.updateData(this.members, this.nonMembers),
                  !0
                );
              }
            }),
            (t.prototype.removeMember = function (t) {
              if (t) {
                Object(gt.x)(t) && (t = this.graph.findById(t));
                var e = this.members.indexOf(t);
                return (
                  e > -1 &&
                  (this.members.splice(e, 1),
                  this.updateData(this.members, this.nonMembers),
                  !0)
                );
              }
            }),
            (t.prototype.removeNonMember = function (t) {
              if (t) {
                Object(gt.x)(t) && (t = this.graph.findById(t));
                var e = this.nonMembers.indexOf(t);
                return (
                  e > -1 &&
                  (this.nonMembers.splice(e, 1),
                  this.updateData(this.members, this.nonMembers),
                  !0)
                );
              }
            }),
            (t.prototype.updateData = function (t, e) {
              var n = this;
              this.group.findById(this.id).remove(),
                t &&
                  (this.members = t.map(function (t) {
                    return Object(gt.x)(t) ? n.graph.findById(t) : t;
                  })),
                e &&
                  (this.nonMembers = e.map(function (t) {
                    return Object(gt.x)(t) ? n.graph.findById(t) : t;
                  })),
                (this.path = this.calcPath(this.members, this.nonMembers)),
                this.render();
            }),
            (t.prototype.updateStyle = function (t) {
              this.group.findById(this.id).attr(Object(h.a)({}, t));
            }),
            (t.prototype.updateCfg = function (t) {
              var e = this;
              (this.cfg = Object(gt.d)(this.cfg, t)),
                (this.id = this.cfg.id),
                (this.group = this.cfg.group),
                t.members &&
                  (this.members = this.cfg.members.map(function (t) {
                    return Object(gt.x)(t) ? e.graph.findById(t) : t;
                  })),
                t.nonMembers &&
                  (this.nonMembers = this.cfg.nonMembers.map(function (t) {
                    return Object(gt.x)(t) ? e.graph.findById(t) : t;
                  })),
                this.setPadding(),
                this.setType(),
                (this.path = this.calcPath(this.members, this.nonMembers)),
                this.render();
            }),
            (t.prototype.contain = function (t) {
              var e,
                n,
                r = this,
                i = (e = Object(gt.x)(t)
                  ? this.graph.findById(t)
                  : t).getKeyShape();
              if ("path" === e.get("type")) n = ui(i.attr("path"));
              else {
                var o = i.getCanvasBBox();
                n = [
                  [o.minX, o.minY],
                  [o.maxX, o.minY],
                  [o.maxX, o.maxY],
                  [o.minX, o.maxY],
                ];
              }
              return (
                (n = n.map(function (t) {
                  var e = r.graph.getPointByCanvas(t[0], t[1]);
                  return [e.x, e.y];
                })),
                qn(n, ui(this.path))
              );
            }),
            (t.prototype.destroy = function () {
              this.group.remove(), (this.cfg = null);
            }),
            t
          );
        })(),
        Ci = sn.a.transform;
      !(function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (
            (n.cfg = Object(gt.d)(n.getDefaultCfg(), e)),
            n.init(),
            (n.animating = !1),
            (n.destroyed = !1),
            n.cfg.enabledStack &&
              ((n.undoStack = new On(n.cfg.maxStep)),
              (n.redoStack = new On(n.cfg.maxStep))),
            n
          );
        }
        Object(h.c)(e, t),
          (e.prototype.init = function () {
            this.initCanvas();
            var t = new Yr(this),
              e = new Nr(this),
              n = new ei(this),
              r = new ri(this);
            this.set({
              viewController: t,
              modeController: e,
              itemController: n,
              stateController: r,
            }),
              this.initLayoutController(),
              this.initEventController(),
              this.initGroups(),
              this.initPlugins(),
              an(this.onTick.bind(this));
          }),
          (e.prototype.initGroups = function () {
            var t = this.get("canvas"),
              e = this.get("canvas").get("el").id,
              n = t.addGroup({
                id: e + "-root",
                className: ur.rootContainerClassName,
              });
            if (this.get("groupByTypes")) {
              var r = n.addGroup({
                  id: e + "-edge",
                  className: ur.edgeContainerClassName,
                }),
                i = n.addGroup({
                  id: e + "-node",
                  className: ur.nodeContainerClassName,
                }),
                o = n.addGroup({
                  id: e + "-combo",
                  className: ur.comboContainerClassName,
                });
              o.toBack(),
                this.set({ nodeGroup: i, edgeGroup: r, comboGroup: o });
            }
            var a = n.addGroup({
              id: e + "-delegate",
              className: ur.delegateContainerClassName,
            });
            this.set({ delegateGroup: a }), this.set("group", n);
          }),
          (e.prototype.getDefaultCfg = function () {
            return {
              container: void 0,
              width: void 0,
              height: void 0,
              renderer: "canvas",
              modes: {},
              plugins: [],
              data: {},
              fitViewPadding: 10,
              minZoom: 0.2,
              maxZoom: 10,
              event: !0,
              groupByTypes: !0,
              directed: !1,
              autoPaint: !0,
              nodes: [],
              edges: [],
              combos: [],
              vedges: [],
              itemMap: {},
              linkCenter: !1,
              defaultNode: {},
              defaultEdge: {},
              nodeStateStyles: {},
              edgeStateStyles: {},
              states: {},
              animate: !1,
              animateCfg: {
                onFrame: void 0,
                duration: 500,
                easing: "easeLinear",
              },
              callback: void 0,
              enabledStack: !1,
              maxStep: 10,
              tooltips: [],
            };
          }),
          (e.prototype.set = function (t, e) {
            return (
              Object(gt.w)(t)
                ? (this.cfg = Object(h.a)(Object(h.a)({}, this.cfg), t))
                : (this.cfg[t] = e),
              this
            );
          }),
          (e.prototype.get = function (t) {
            return this.cfg[t];
          }),
          (e.prototype.getGroup = function () {
            return this.get("group");
          }),
          (e.prototype.getContainer = function () {
            return this.get("container");
          }),
          (e.prototype.getMinZoom = function () {
            return this.get("minZoom");
          }),
          (e.prototype.setMinZoom = function (t) {
            return this.set("minZoom", t);
          }),
          (e.prototype.getMaxZoom = function () {
            return this.get("maxZoom");
          }),
          (e.prototype.setMaxZoom = function (t) {
            return this.set("maxZoom", t);
          }),
          (e.prototype.getWidth = function () {
            return this.get("width");
          }),
          (e.prototype.getHeight = function () {
            return this.get("height");
          }),
          (e.prototype.clearItemStates = function (t, e) {
            Object(gt.x)(t) && (t = this.findById(t));
            var n = this.get("itemController");
            e || (e = t.get("states")),
              n.clearItemStates(t, e),
              this.get("stateController").updateStates(t, e, !1);
          }),
          (e.prototype.node = function (t) {
            "function" == typeof t && this.set("nodeMapper", t);
          }),
          (e.prototype.edge = function (t) {
            "function" == typeof t && this.set("edgeMapper", t);
          }),
          (e.prototype.combo = function (t) {
            "function" == typeof t && this.set("comboMapper", t);
          }),
          (e.prototype.findById = function (t) {
            return this.get("itemMap")[t];
          }),
          (e.prototype.find = function (t, e) {
            var n,
              r = this.get(t + "s");
            return (
              Object(gt.e)(r, function (t, r) {
                if (e(t, r)) return (n = t);
              }),
              n
            );
          }),
          (e.prototype.findAll = function (t, e) {
            var n = [];
            return (
              Object(gt.e)(this.get(t + "s"), function (t, r) {
                e(t, r) && n.push(t);
              }),
              n
            );
          }),
          (e.prototype.findAllByState = function (t, e) {
            return this.findAll(t, function (t) {
              return t.hasState(e);
            });
          }),
          (e.prototype.translate = function (t, e) {
            var n = this.get("group"),
              r = Object(gt.b)(n.getMatrix());
            r || (r = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
              (r = Ci(r, [["t", t, e]])),
              n.setMatrix(r),
              this.emit("viewportchange", {
                action: "translate",
                matrix: n.getMatrix(),
              }),
              this.autoPaint();
          }),
          (e.prototype.moveTo = function (t, e) {
            var n = this.get("group");
            Rn(n, { x: t, y: e }),
              this.emit("viewportchange", {
                action: "move",
                matrix: n.getMatrix(),
              });
          }),
          (e.prototype.fitView = function (t) {
            t && this.set("fitViewPadding", t),
              this.get("viewController").fitView(),
              this.autoPaint();
          }),
          (e.prototype.fitCenter = function () {
            this.get("viewController").fitCenter(), this.autoPaint();
          }),
          (e.prototype.addBehaviors = function (t, e) {
            return (
              this.get("modeController").manipulateBehaviors(t, e, !0), this
            );
          }),
          (e.prototype.removeBehaviors = function (t, e) {
            return (
              this.get("modeController").manipulateBehaviors(t, e, !1), this
            );
          }),
          (e.prototype.updateBehavior = function (t, e, n) {
            return this.get("modeController").updateBehavior(t, e, n), this;
          }),
          (e.prototype.zoom = function (t, e) {
            var n = this.get("group"),
              r = Object(gt.b)(n.getMatrix()),
              i = this.get("minZoom"),
              o = this.get("maxZoom");
            r || (r = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
              (r = Ci(
                r,
                e
                  ? [
                      ["t", -e.x, -e.y],
                      ["s", t, t],
                      ["t", e.x, e.y],
                    ]
                  : [["s", t, t]],
              )),
              (i && r[0] < i) ||
                (o && r[0] > o) ||
                (n.setMatrix(r),
                this.emit("viewportchange", { action: "zoom", matrix: r }),
                this.autoPaint());
          }),
          (e.prototype.zoomTo = function (t, e) {
            var n = t / this.getZoom();
            this.zoom(n, e);
          }),
          (e.prototype.focusItem = function (t, e, n) {
            var r = this.get("viewController"),
              i = !1;
            e ? (i = !0) : void 0 === e && (i = this.get("animate"));
            var o = {};
            n ? (o = n) : void 0 === n && (o = this.get("animateCfg")),
              r.focus(t, i, o),
              this.autoPaint();
          }),
          (e.prototype.autoPaint = function () {
            this.get("autoPaint") && this.paint();
          }),
          (e.prototype.paint = function () {
            this.emit("beforepaint"),
              this.get("canvas").draw(),
              this.emit("afterpaint");
          }),
          (e.prototype.getPointByClient = function (t, e) {
            return this.get("viewController").getPointByClient(t, e);
          }),
          (e.prototype.getClientByPoint = function (t, e) {
            return this.get("viewController").getClientByPoint(t, e);
          }),
          (e.prototype.getPointByCanvas = function (t, e) {
            return this.get("viewController").getPointByCanvas(t, e);
          }),
          (e.prototype.getCanvasByPoint = function (t, e) {
            return this.get("viewController").getCanvasByPoint(t, e);
          }),
          (e.prototype.getGraphCenterPoint = function () {
            var t = this.get("group").getCanvasBBox();
            return { x: (t.minX + t.maxX) / 2, y: (t.minY + t.maxY) / 2 };
          }),
          (e.prototype.getViewPortCenterPoint = function () {
            return this.getPointByCanvas(
              this.get("width") / 2,
              this.get("height") / 2,
            );
          }),
          (e.prototype.showItem = function (t, e) {
            void 0 === e && (e = !0);
            var n = this.get("itemController").changeItemVisibility(t, !0);
            if (e && this.get("enabledStack")) {
              var r = n.getID(),
                i = {},
                o = {};
              switch (n.getType()) {
                case "node":
                  (i.nodes = [{ id: r, visible: !1 }]),
                    (o.nodes = [{ id: r, visible: !0 }]);
                  break;
                case "edge":
                  (i.nodes = [{ id: r, visible: !1 }]),
                    (o.edges = [{ id: r, visible: !0 }]);
                  break;
                case "combo":
                  (i.nodes = [{ id: r, visible: !1 }]),
                    (o.combos = [{ id: r, visible: !0 }]);
              }
              this.pushStack("visible", { before: i, after: o });
            }
          }),
          (e.prototype.hideItem = function (t, e) {
            void 0 === e && (e = !0);
            var n = this.get("itemController").changeItemVisibility(t, !1);
            if (e && this.get("enabledStack")) {
              var r = n.getID(),
                i = {},
                o = {};
              switch (n.getType()) {
                case "node":
                  (i.nodes = [{ id: r, visible: !0 }]),
                    (o.nodes = [{ id: r, visible: !1 }]);
                  break;
                case "edge":
                  (i.nodes = [{ id: r, visible: !0 }]),
                    (o.edges = [{ id: r, visible: !1 }]);
                  break;
                case "combo":
                  (i.nodes = [{ id: r, visible: !0 }]),
                    (o.combos = [{ id: r, visible: !1 }]);
              }
              this.pushStack("visible", { before: i, after: o });
            }
          }),
          (e.prototype.refreshItem = function (t) {
            this.get("itemController").refreshItem(t);
          }),
          (e.prototype.setAutoPaint = function (t) {
            this.set("autoPaint", t), this.get("canvas").set("autoDraw", t);
          }),
          (e.prototype.remove = function (t, e) {
            void 0 === e && (e = !0), this.removeItem(t, e);
          }),
          (e.prototype.removeItem = function (t, e) {
            void 0 === e && (e = !0);
            var n = t;
            if (
              (Object(gt.x)(t) && (n = this.findById(t)), !n && Object(gt.x)(t))
            )
              console.warn("The item to be removed does not exist!");
            else if (n) {
              var r = "";
              if (
                (n.getType && (r = n.getType()), e && this.get("enabledStack"))
              ) {
                var i = Object(h.a)(Object(h.a)({}, n.getModel()), {
                    itemType: r,
                  }),
                  o = {};
                switch (r) {
                  case "node":
                    (o.nodes = [i]), (o.edges = []);
                    for (var a = n.getEdges(), s = a.length - 1; s >= 0; s--)
                      o.edges.push(
                        Object(h.a)(Object(h.a)({}, a[s].getModel()), {
                          itemType: "edge",
                        }),
                      );
                    break;
                  case "edge":
                    o.edges = [i];
                    break;
                  case "combo":
                    o.combos = [i];
                }
                this.pushStack("delete", { before: o, after: {} });
              }
              if ("node" === r) n.getModel().comboId && this.updateComboTree(n);
              if ((this.get("itemController").removeItem(n), "combo" === r)) {
                var u = Sr(this.get("comboTrees"));
                this.set("comboTrees", u);
              }
            }
          }),
          (e.prototype.addItem = function (t, e, n, r) {
            void 0 === n && (n = !0), void 0 === r && (r = !0);
            var i = this.get("comboSorted");
            this.set("comboSorted", i && !r);
            var o = this.get("itemController");
            if (
              !(function (t, e) {
                if ("node" === t || "combo" === t) {
                  if (e.id && !Object(gt.x)(e.id))
                    return (
                      console.warn(
                        "G6 Warning Tips: missing 'id' property, or the 'id' %c" +
                          e.id +
                          "%c is not a string.",
                        "font-size: 20px; color: red;",
                        "",
                      ),
                      !1
                    );
                } else if (!("edge" !== t || (e.source && e.target)))
                  return (
                    console.warn(
                      "G6 Warning Tips: missing 'source' or 'target' for the edge.",
                    ),
                    !1
                  );
                return !0;
              })(t, e)
            )
              return !1;
            if (!e.id || !this.findById(e.id)) {
              var a,
                s = this.get("comboTrees");
              if ((s || (s = []), "combo" === t)) {
                var u = this.get("itemMap"),
                  c = !1;
                if (
                  (s.forEach(function (n) {
                    c ||
                      xr(n, function (n) {
                        if (e.parentId === n.id) {
                          c = !0;
                          var r = Object(h.a)(
                            { id: e.id, depth: n.depth + 2 },
                            e,
                          );
                          n.children ? n.children.push(r) : (n.children = [r]),
                            (e.depth = r.depth),
                            (a = o.addItem(t, e));
                        }
                        var i = u[n.id];
                        return (
                          c &&
                            i &&
                            i.getType &&
                            "combo" === i.getType() &&
                            o.updateCombo(i, n.children),
                          !0
                        );
                      });
                  }),
                  !c)
                ) {
                  var l = Object(h.a)({ id: e.id, depth: 0 }, e);
                  (e.depth = l.depth), s.push(l), (a = o.addItem(t, e));
                }
                this.set("comboTrees", s);
              } else if ("node" === t && Object(gt.x)(e.comboId) && s) {
                var d;
                (d = this.findById(e.comboId)) &&
                  d.getType &&
                  "combo" !== d.getType() &&
                  console.warn(
                    "'" +
                      e.comboId +
                      "' is not a id of a combo in the graph, the node will be added without combo.",
                  ),
                  (a = o.addItem(t, e));
                var f = this.get("itemMap"),
                  p = !1,
                  g = !1;
                (s || []).forEach(function (t) {
                  g ||
                    p ||
                    xr(t, function (t) {
                      if (t.id === e.id) return (g = !0), !1;
                      if (e.comboId === t.id && !g) {
                        p = !0;
                        var n = Object(gt.b)(e);
                        (n.itemType = "node"),
                          t.children ? t.children.push(n) : (t.children = [n]),
                          (n.depth = t.depth + 1);
                      }
                      return (
                        p &&
                          f[t.id].getType &&
                          "combo" === f[t.id].getType() &&
                          o.updateCombo(f[t.id], t.children),
                        !0
                      );
                    });
                });
              } else a = o.addItem(t, e);
              if (("node" === t && e.comboId) || ("combo" === t && e.parentId))
                (d = this.findById(e.comboId || e.parentId)) &&
                  d.getType &&
                  "combo" === d.getType() &&
                  d.addChild(a);
              var y = this.get("combos");
              if (
                (y && y.length > 0 && this.sortCombos(),
                this.autoPaint(),
                n && this.get("enabledStack"))
              ) {
                var v = Object(h.a)(Object(h.a)({}, a.getModel()), {
                    itemType: t,
                  }),
                  m = {};
                switch (t) {
                  case "node":
                    m.nodes = [v];
                    break;
                  case "edge":
                    m.edges = [v];
                    break;
                  case "combo":
                    m.combos = [v];
                }
                this.pushStack("add", { before: {}, after: m });
              }
              return a;
            }
            console.warn(
              "This item exists already. Be sure the id %c" +
                e.id +
                "%c is unique.",
              "font-size: 20px; color: red;",
              "",
            );
          }),
          (e.prototype.add = function (t, e, n, r) {
            return (
              void 0 === n && (n = !0),
              void 0 === r && (r = !0),
              this.addItem(t, e, n, r)
            );
          }),
          (e.prototype.updateItem = function (t, e, n) {
            var r = this;
            void 0 === n && (n = !0);
            var i,
              o = this.get("itemController");
            i = Object(gt.x)(t) ? this.findById(t) : t;
            var a = Object(gt.b)(i.getModel()),
              s = "";
            i.getType && (s = i.getType());
            var u = Object(h.f)([], i.getStates());
            if (
              ("combo" === s &&
                Object(gt.e)(u, function (t) {
                  return r.setItemState(i, t, !1);
                }),
              o.updateItem(i, e),
              "combo" === s &&
                Object(gt.e)(u, function (t) {
                  return r.setItemState(i, t, !0);
                }),
              n && this.get("enabledStack"))
            ) {
              var c = { nodes: [], edges: [], combos: [] },
                l = { nodes: [], edges: [], combos: [] },
                d = Object(h.a)({ id: a.id }, e);
              switch (s) {
                case "node":
                  c.nodes.push(a), l.nodes.push(d);
                  break;
                case "edge":
                  c.edges.push(a), l.edges.push(d);
                  break;
                case "combo":
                  c.combos.push(a), l.combos.push(d);
              }
              "node" === s && c.nodes.push(a),
                this.pushStack("update", { before: c, after: l });
            }
          }),
          (e.prototype.update = function (t, e, n) {
            void 0 === n && (n = !0), this.updateItem(t, e, n);
          }),
          (e.prototype.setItemState = function (t, e, n) {
            Object(gt.x)(t) && (t = this.findById(t)),
              this.get("itemController").setItemState(t, e, n);
            var r = this.get("stateController");
            Object(gt.x)(n)
              ? r.updateState(t, e + ":" + n, !0)
              : r.updateState(t, e, n);
          }),
          (e.prototype.priorityState = function (t, e) {
            this.get("itemController").priorityState(t, e);
          }),
          (e.prototype.data = function (t) {
            Er(t), this.set("data", t);
          }),
          (e.prototype.render = function () {
            var t = this;
            this.set("comboSorted", !1);
            var e = this.get("data");
            if ((this.get("enabledStack") && this.clearStack(), !e))
              throw new Error("data must be defined first");
            var n = e.nodes,
              r = void 0 === n ? [] : n,
              i = e.edges,
              o = void 0 === i ? [] : i,
              a = e.combos,
              s = void 0 === a ? [] : a;
            if (
              (this.clear(!0),
              this.emit("beforerender"),
              Object(gt.e)(r, function (e) {
                t.add("node", e, !1, !1);
              }),
              s && 0 !== s.length)
            ) {
              var u = Mr(s, r);
              this.set("comboTrees", u), t.addCombos(s);
            }
            Object(gt.e)(o, function (e) {
              t.add("edge", e, !1, !1);
            });
            var c = t.get("animate");
            (t.get("fitView") || t.get("fitCenter")) && t.set("animate", !1);
            var h = t.get("layoutController");
            if (h) {
              if (
                (h.layout(function () {
                  t.get("fitView")
                    ? t.fitView()
                    : t.get("fitCenter") && t.fitCenter();
                  t.autoPaint(),
                    t.emit("afterrender"),
                    (t.get("fitView") || t.get("fitCenter")) &&
                      t.set("animate", c);
                }),
                this.refreshPositions(),
                this.destroyed)
              )
                return;
            } else
              t.get("fitView") && t.fitView(),
                t.get("fitCenter") && t.fitCenter(),
                t.emit("afterrender"),
                t.set("animate", c);
            this.get("groupByTypes") ||
              (s && 0 !== s.length
                ? this.sortCombos()
                : e.nodes && e.edges && e.nodes.length < e.edges.length
                ? this.getNodes().forEach(function (t) {
                    t.toFront();
                  })
                : this.getEdges().forEach(function (t) {
                    t.toBack();
                  }));
            this.get("enabledStack") && this.pushStack("render");
          }),
          (e.prototype.read = function (t) {
            this.data(t), this.render();
          }),
          (e.prototype.diffItems = function (t, e, n) {
            var r,
              i = this,
              o = this.get("itemMap");
            Object(gt.e)(n, function (n) {
              if ((r = o[n.id])) {
                if (i.get("animate") && "node" === t) {
                  var a = r.getContainer().getMatrix();
                  a || (a = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
                    r.set("originAttrs", { x: a[6], y: a[7] });
                }
                i.updateItem(r, n, !1);
              } else r = i.addItem(t, n, !1);
              r && e[t + "s"].push(r);
            });
          }),
          (e.prototype.changeData = function (t, e) {
            void 0 === e && (e = !0);
            var n = this;
            if (!Er(t)) return this;
            e &&
              this.get("enabledStack") &&
              this.pushStack("changedata", { before: n.save(), after: t }),
              this.set("comboSorted", !1),
              this.removeHulls(),
              this.getNodes().map(function (t) {
                return n.clearItemStates(t);
              }),
              this.getEdges().map(function (t) {
                return n.clearItemStates(t);
              });
            var r = this.get("canvas"),
              i = r.get("localRefresh");
            r.set("localRefresh", !1), n.get("data") || (n.data(t), n.render());
            var o = this.get("itemMap"),
              a = { nodes: [], edges: [] },
              s = t.combos;
            if (s) {
              var u = Mr(s, t.nodes);
              this.set("comboTrees", u);
            }
            this.diffItems("node", a, t.nodes),
              Object(gt.e)(o, function (t, e) {
                (o[e].getModel().depth = 0),
                  (t.getType && "edge" === t.getType()) ||
                    (t.getType && "combo" === t.getType()
                      ? (delete o[e], t.destroy())
                      : a.nodes.indexOf(t) < 0 &&
                        (delete o[e], n.remove(t, !1)));
              });
            for (var c = this.getCombos(), h = c.length - 1; h >= 0; h--)
              c[h].destroyed && c.splice(h, 1);
            s &&
              (n.addCombos(s), this.get("groupByTypes") || this.sortCombos()),
              this.diffItems("edge", a, t.edges),
              Object(gt.e)(o, function (t, e) {
                (!t.getType ||
                  ("node" !== t.getType() && "combo" !== t.getType())) &&
                  a.edges.indexOf(t) < 0 &&
                  (delete o[e], n.remove(t, !1));
              }),
              this.set({ nodes: a.nodes, edges: a.edges });
            var l = this.get("layoutController");
            return (
              l &&
                (l.changeData(),
                n.get("animate") && !l.getLayoutType()
                  ? n.positionsAnimate()
                  : n.autoPaint()),
              setTimeout(function () {
                r.set("localRefresh", i);
              }, 16),
              this
            );
          }),
          (e.prototype.addCombos = function (t) {
            var e = this.get("comboTrees");
            this.get("itemController").addCombos(e, t);
          }),
          (e.prototype.createCombo = function (t, e) {
            var n = this;
            this.set("comboSorted", !1);
            var r,
              i = "";
            if (t) {
              if (Object(gt.x)(t)) (i = t), (r = { id: t });
              else {
                if (!(i = t.id))
                  return void console.warn(
                    "Create combo failed. Please assign a unique string id for the adding combo.",
                  );
                r = t;
              }
              var o = e.map(function (t) {
                var e = n.findById(t),
                  r = e.getModel(),
                  o = "";
                e.getType && (o = e.getType());
                var a = { id: e.getID(), itemType: o };
                return (
                  "combo" === o
                    ? ((a.parentId = i), (r.parentId = i))
                    : "node" === o && ((a.comboId = i), (r.comboId = i)),
                  a
                );
              });
              (r.children = o),
                this.addItem("combo", r, !1),
                this.set("comboSorted", !1);
              var a = this.get("comboTrees");
              (a || []).forEach(function (t) {
                xr(t, function (t) {
                  return (
                    t.id !== i || ((t.itemType = "combo"), (t.children = o), !1)
                  );
                });
              }),
                a && this.sortCombos();
            }
          }),
          (e.prototype.uncombo = function (t) {
            var e = this,
              n = t;
            if (
              (Object(gt.x)(t) && (n = this.findById(t)),
              !n || (n.getType && "combo" !== n.getType()))
            )
              console.warn("The item is not a combo!");
            else {
              var r = n.getModel().parentId,
                i = this.get("comboTrees");
              i || (i = []);
              var o,
                a = this.get("itemMap"),
                s = n.get("id"),
                u = [],
                c = this.get("combos"),
                h = this.findById(r);
              if (
                (i.forEach(function (i) {
                  o ||
                    xr(i, function (i) {
                      if (i.id === s) {
                        (o = i),
                          n.getEdges().forEach(function (t) {
                            e.removeItem(t, !1);
                          });
                        var l = c.indexOf(t);
                        c.splice(l, 1), delete a[s], n.destroy();
                      }
                      return (
                        !r ||
                        !o ||
                        i.id !== r ||
                        (h.removeCombo(n),
                        -1 !== (l = (u = i.children).indexOf(o)) &&
                          u.splice(l, 1),
                        o.children.forEach(function (t) {
                          var n = e.findById(t.id),
                            i = n.getModel();
                          n.getType && "combo" === n.getType()
                            ? ((t.parentId = r),
                              delete t.comboId,
                              (i.parentId = r),
                              delete i.comboId)
                            : n.getType &&
                              "node" === n.getType() &&
                              ((t.comboId = r), (i.comboId = r)),
                            h.addChild(n),
                            u.push(t);
                        }),
                        !1)
                      );
                    });
                }),
                !r && o)
              ) {
                var l = i.indexOf(o);
                i.splice(l, 1),
                  o.children.forEach(function (t) {
                    t.parentId = void 0;
                    var n = e.findById(t.id).getModel();
                    delete n.parentId,
                      delete n.comboId,
                      "node" !== t.itemType && i.push(t);
                  });
              }
            }
          }),
          (e.prototype.updateCombos = function () {
            var t = this,
              e = this.get("comboTrees"),
              n = this.get("itemController"),
              r = this.get("itemMap");
            (e || []).forEach(function (e) {
              xr(e, function (e) {
                if (!e) return !0;
                var i = r[e.id];
                if (i && i.getType && "combo" === i.getType()) {
                  var o = Object(h.f)([], i.getStates());
                  Object(gt.e)(o, function (e) {
                    return t.setItemState(i, e, !1);
                  }),
                    n.updateCombo(i, e.children),
                    Object(gt.e)(o, function (e) {
                      return t.setItemState(i, e, !0);
                    });
                }
                return !0;
              });
            }),
              this.sortCombos();
          }),
          (e.prototype.updateCombo = function (t) {
            var e,
              n = this,
              r = t;
            if (
              (Object(gt.x)(t) && (r = this.findById(t)),
              !r || (r.getType && "combo" !== r.getType()))
            )
              console.warn("The item to be updated is not a combo!");
            else {
              e = r.get("id");
              var i = this.get("comboTrees"),
                o = this.get("itemController"),
                a = this.get("itemMap");
              (i || []).forEach(function (t) {
                xr(t, function (t) {
                  if (!t) return !0;
                  var r = a[t.id];
                  if (e === t.id && r && r.getType && "combo" === r.getType()) {
                    var i = Object(h.f)([], r.getStates());
                    Object(gt.e)(i, function (t) {
                      r.getStateStyle(t) && n.setItemState(r, t, !1);
                    }),
                      o.updateCombo(r, t.children),
                      Object(gt.e)(i, function (t) {
                        r.getStateStyle(t) && n.setItemState(r, t, !0);
                      }),
                      e && (e = t.parentId);
                  }
                  return !0;
                });
              });
            }
          }),
          (e.prototype.updateComboTree = function (t, e, n) {
            void 0 === n && (n = !0);
            var r;
            this.set("comboSorted", !1);
            var i,
              o = (r = Object(gt.x)(t) ? this.findById(t) : t).getModel(),
              a = o.comboId || o.parentId,
              s = "";
            if ((r.getType && (s = r.getType()), e && "combo" === s)) {
              var u,
                c = this.get("comboTrees"),
                h = !0;
              if (
                ((c || []).forEach(function (t) {
                  u ||
                    br(t, function (t) {
                      if (!u) return t.id === r.getID() && (u = t), !0;
                    });
                }),
                br(u, function (t) {
                  return t.id !== e || ((h = !1), !1);
                }),
                !h)
              )
                return void console.warn(
                  "Failed to update the combo tree! The parentId points to a descendant of the combo!",
                );
            }
            if (n && this.get("enabledStack")) {
              var l = {},
                d = {};
              "combo" === s
                ? ((l.combos = [{ id: o.id, parentId: o.parentId }]),
                  (d.combos = [{ id: o.id, parentId: e }]))
                : "node" === s &&
                  ((l.nodes = [{ id: o.id, parentId: o.comboId }]),
                  (d.nodes = [{ id: o.id, parentId: e }])),
                this.pushStack("updateComboTree", { before: l, after: d });
            }
            if (o.parentId || o.comboId) {
              var f = this.findById(o.parentId || o.comboId);
              f && f.removeChild(r);
            }
            ("combo" === s ? (o.parentId = e) : "node" === s && (o.comboId = e),
            e) &&
              (i = this.findById(e)) &&
              i.addChild(r);
            a && (i = this.findById(a)) && i.removeChild(r);
            var p = Sr(this.get("comboTrees"), o.id, e);
            this.set("comboTrees", p), this.updateCombos();
          }),
          (e.prototype.save = function () {
            var t = [],
              e = [],
              n = [];
            return (
              Object(gt.e)(this.get("nodes"), function (e) {
                t.push(e.getModel());
              }),
              Object(gt.e)(this.get("edges"), function (t) {
                e.push(t.getModel());
              }),
              Object(gt.e)(this.get("combos"), function (t) {
                n.push(t.getModel());
              }),
              { nodes: t, edges: e, combos: n }
            );
          }),
          (e.prototype.changeSize = function (t, e) {
            return this.get("viewController").changeSize(t, e), this;
          }),
          (e.prototype.refresh = function () {
            if ((this.emit("beforegraphrefresh"), this.get("animate")))
              this.positionsAnimate();
            else {
              var t = this.get("nodes"),
                e = this.get("edges"),
                n = this.get("edges");
              Object(gt.e)(t, function (t) {
                t.refresh();
              }),
                Object(gt.e)(e, function (t) {
                  t.refresh();
                }),
                Object(gt.e)(n, function (t) {
                  t.refresh();
                });
            }
            this.emit("aftergraphrefresh"), this.autoPaint();
          }),
          (e.prototype.getNodes = function () {
            return this.get("nodes");
          }),
          (e.prototype.getEdges = function () {
            return this.get("edges");
          }),
          (e.prototype.getCombos = function () {
            return this.get("combos");
          }),
          (e.prototype.getComboChildren = function (t) {
            if (
              (Object(gt.x)(t) && (t = this.findById(t)),
              t && (!t.getType || "combo" === t.getType()))
            )
              return t.getChildren();
            console.warn("The combo does not exist!");
          }),
          (e.prototype.positionsAnimate = function () {
            var t = this;
            t.emit("beforeanimate");
            var e = t.get("animateCfg"),
              n = e.onFrame,
              r = t.getNodes(),
              i = r.map(function (t) {
                var e = t.getModel();
                return { id: e.id, x: e.x, y: e.y };
              });
            t.isAnimating() && t.stopAnimate(),
              t.get("canvas").animate(
                function (e) {
                  Object(gt.e)(i, function (r) {
                    var i = t.findById(r.id);
                    if (i && !i.destroyed) {
                      var o = i.get("originAttrs"),
                        a = i.get("model");
                      if (!o) {
                        var s = i.getContainer().getMatrix();
                        s || (s = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
                          (o = { x: s[6], y: s[7] }),
                          i.set("originAttrs", o);
                      }
                      if (n) {
                        var u = n(i, e, r, o);
                        i.set("model", Object.assign(a, u));
                      } else
                        (a.x = o.x + (r.x - o.x) * e),
                          (a.y = o.y + (r.y - o.y) * e);
                    }
                  }),
                    t.refreshPositions();
                },
                {
                  duration: e.duration,
                  easing: e.easing,
                  callback: function () {
                    Object(gt.e)(r, function (t) {
                      t.set("originAttrs", null);
                    }),
                      e.callback && e.callback(),
                      t.emit("afteranimate"),
                      (t.animating = !1);
                  },
                },
              );
          }),
          (e.prototype.refreshPositions = function () {
            this.emit("beforegraphrefreshposition");
            var t,
              e = this.get("nodes"),
              n = this.get("edges"),
              r = this.get("vedges"),
              i = this.get("combos"),
              o = {};
            Object(gt.e)(e, function (e) {
              t = e.getModel();
              var n = e.get("originAttrs");
              if (!n || t.x !== n.x || t.y !== n.y) {
                var r = e.updatePosition({ x: t.x, y: t.y });
                (o[t.id] = r), t.comboId && (o[t.comboId] = o[t.comboId] || r);
              }
            }),
              i && 0 !== i.length && this.updateCombos(),
              Object(gt.e)(n, function (t) {
                var e = t.getSource().getModel(),
                  n = t.getTarget();
                if (!Object(gt.w)(n)) {
                  var r = n.getModel();
                  (o[e.id] || o[r.id] || t.getModel().isComboEdge) &&
                    t.refresh();
                }
              }),
              Object(gt.e)(r, function (t) {
                t.refresh();
              }),
              this.emit("aftergraphrefreshposition"),
              this.autoPaint();
          }),
          (e.prototype.stopAnimate = function () {
            this.get("canvas").stopAnimate();
          }),
          (e.prototype.isAnimating = function () {
            return this.animating;
          }),
          (e.prototype.getZoom = function () {
            var t = this.get("group").getMatrix();
            return t ? t[0] : 1;
          }),
          (e.prototype.getCurrentMode = function () {
            return this.get("modeController").getMode();
          }),
          (e.prototype.setMode = function (t) {
            return this.get("modeController").setMode(t), this;
          }),
          (e.prototype.clear = function (t) {
            return (
              void 0 === t && (t = !1),
              this.get("canvas").clear(),
              this.initGroups(),
              this.set({
                itemMap: {},
                nodes: [],
                edges: [],
                groups: [],
                combos: [],
                comboTrees: [],
              }),
              t || this.emit("afterrender"),
              this
            );
          }),
          (e.prototype.updateLayout = function (t) {
            var e = this.get("layoutController");
            Object(gt.x)(t) && (t = { type: t });
            var n = this.get("layout"),
              r = {};
            Object.assign(r, n, t),
              this.set("layout", r),
              e.isLayoutTypeSame(r) && r.gpuEnabled === n.gpuEnabled
                ? e.updateLayoutCfg(r)
                : e.changeLayout(r);
          }),
          (e.prototype.destroyLayout = function () {
            this.get("layoutController").destroyLayout();
          }),
          (e.prototype.layout = function () {
            var t = this.get("layoutController"),
              e = this.get("layout");
            e &&
              t &&
              (e.workerEnabled
                ? t.layout()
                : t.layoutMethod
                ? t.relayout(!0)
                : t.layout());
          }),
          (e.prototype.collapseCombo = function (t) {
            var e = this;
            if ((Object(gt.x)(t) && (t = this.findById(t)), t)) {
              this.emit("beforecollapseexpandcombo", {
                action: "expand",
                item: t,
              });
              var n = t.getModel();
              this.get("itemController").collapseCombo(t), (n.collapsed = !0);
              var r = this.getEdges().concat(this.get("vedges")),
                i = [],
                o = [],
                a = this.get("comboTrees"),
                s = !1;
              (a || []).forEach(function (t) {
                s ||
                  br(t, function (t) {
                    if (s && t.depth <= n.depth) return !1;
                    if ((n.id === t.id && (s = !0), s)) {
                      var r = e.findById(t.id);
                      r &&
                        r.getType &&
                        "combo" === r.getType() &&
                        ((i = i.concat(r.getNodes())),
                        (o = o.concat(r.getCombos())));
                    }
                    return !0;
                  });
              });
              var u = {},
                c = [];
              r.forEach(function (t) {
                if (!t.isVisible() || t.getModel().isVEdge) {
                  var r = t.getSource(),
                    a = t.getTarget();
                  if (
                    ((i.includes(r) || o.includes(r)) &&
                      !i.includes(a) &&
                      !o.includes(a)) ||
                    r.getModel().id === n.id
                  ) {
                    if ((d = t.getModel()).isVEdge)
                      return void e.removeItem(t, !1);
                    for (var s = a.getModel(); !a.isVisible(); ) {
                      if (
                        !(a = e.findById(s.parentId || s.comboId)) ||
                        (!s.parentId && !s.comboId)
                      )
                        return;
                      s = a.getModel();
                    }
                    var h = s.id;
                    if (u[n.id + "-" + h])
                      return void (u[n.id + "-" + h] += d.size || 1);
                    var l = e.addItem(
                      "vedge",
                      { source: n.id, target: h, isVEdge: !0 },
                      !1,
                    );
                    (u[n.id + "-" + h] = d.size || 1), c.push(l);
                  } else if (
                    (!i.includes(r) &&
                      !o.includes(r) &&
                      (i.includes(a) || o.includes(a))) ||
                    a.getModel().id === n.id
                  ) {
                    var d;
                    if ((d = t.getModel()).isVEdge)
                      return void e.removeItem(t, !1);
                    for (var f = r.getModel(); !r.isVisible(); ) {
                      if (
                        !(r = e.findById(f.parentId || f.comboId)) ||
                        (!f.parentId && !f.comboId)
                      )
                        return;
                      f = r.getModel();
                    }
                    var p = f.id;
                    if (u[p + "-" + n.id])
                      return void (u[p + "-" + n.id] += d.size || 1);
                    l = e.addItem(
                      "vedge",
                      { target: n.id, source: p, isVEdge: !0 },
                      !1,
                    );
                    (u[p + "-" + n.id] = d.size || 1), c.push(l);
                  }
                }
              }),
                c.forEach(function (t) {
                  var n = t.getModel();
                  e.updateItem(t, { size: u[n.source + "-" + n.target] }, !1);
                }),
                this.emit("aftercollapseexpandcombo", {
                  action: "collapse",
                  item: t,
                });
            } else console.warn("The combo to be collapsed does not exist!");
          }),
          (e.prototype.expandCombo = function (t) {
            var e = this;
            if (
              (Object(gt.x)(t) && (t = this.findById(t)),
              !t || (t.getType && "combo" !== t.getType()))
            )
              console.warn("The combo to be collapsed does not exist!");
            else {
              this.emit("beforecollapseexpandcombo", {
                action: "expand",
                item: t,
              });
              var n = t.getModel();
              this.get("itemController").expandCombo(t), (n.collapsed = !1);
              var r = this.getEdges().concat(this.get("vedges")),
                i = [],
                o = [],
                a = this.get("comboTrees"),
                s = !1;
              (a || []).forEach(function (t) {
                s ||
                  br(t, function (t) {
                    if (s && t.depth <= n.depth) return !1;
                    if ((n.id === t.id && (s = !0), s)) {
                      var r = e.findById(t.id);
                      r &&
                        r.getType &&
                        "combo" === r.getType() &&
                        ((i = i.concat(r.getNodes())),
                        (o = o.concat(r.getCombos())));
                    }
                    return !0;
                  });
              });
              var u = {},
                c = {};
              r.forEach(function (t) {
                if (!t.isVisible() || t.getModel().isVEdge) {
                  var r = t.getSource(),
                    a = t.getTarget(),
                    s = r.get("id"),
                    h = a.get("id");
                  if (
                    ((i.includes(r) || o.includes(r)) &&
                      !i.includes(a) &&
                      !o.includes(a)) ||
                    s === n.id
                  ) {
                    if (t.getModel().isVEdge) return void e.removeItem(t, !1);
                    for (var l = a.getModel(); !a.isVisible(); ) {
                      if (
                        !(a = e.findById(l.comboId || l.parentId)) ||
                        (!l.parentId && !l.comboId)
                      )
                        return;
                      l = a.getModel();
                    }
                    h = l.id;
                    for (var d = r.getModel(); !r.isVisible(); ) {
                      if (
                        !(r = e.findById(d.comboId || d.parentId)) ||
                        (!d.parentId && !d.comboId)
                      )
                        return;
                      if (d.comboId === n.id || d.parentId === n.id) break;
                      d = r.getModel();
                    }
                    if (((s = d.id), h)) {
                      if (u[(p = s + "-" + h)])
                        return (
                          (u[p] += t.getModel().size || 1),
                          void e.updateItem(c[p], { size: u[p] }, !1)
                        );
                      var f = e.addItem(
                        "vedge",
                        { source: s, target: h, isVEdge: !0 },
                        !1,
                      );
                      (u[p] = t.getModel().size || 1), (c[p] = f);
                    }
                  } else if (
                    (!i.includes(r) &&
                      !o.includes(r) &&
                      (i.includes(a) || o.includes(a))) ||
                    h === n.id
                  ) {
                    if (t.getModel().isVEdge) return void e.removeItem(t, !1);
                    for (d = r.getModel(); !r.isVisible(); ) {
                      if (
                        !(r = e.findById(d.comboId || d.parentId)) ||
                        (!d.parentId && !d.comboId)
                      )
                        return;
                      d = r.getModel();
                    }
                    s = d.id;
                    for (l = a.getModel(); !a.isVisible(); ) {
                      if (
                        !(a = e.findById(l.comboId || l.parentId)) ||
                        (!l.parentId && !l.comboId)
                      )
                        return;
                      if (l.comboId === n.id || l.parentId === n.id) break;
                      l = a.getModel();
                    }
                    if (((h = l.id), s)) {
                      var p;
                      if (u[(p = s + "-" + h)])
                        return (
                          (u[p] += t.getModel().size || 1),
                          void e.updateItem(c[p], { size: u[p] }, !1)
                        );
                      f = e.addItem(
                        "vedge",
                        { target: h, source: s, isVEdge: !0 },
                        !1,
                      );
                      (u[p] = t.getModel().size || 1), (c[p] = f);
                    }
                  } else
                    (i.includes(r) || o.includes(r)) &&
                      (i.includes(a) || o.includes(a)) &&
                      r.isVisible() &&
                      a.isVisible() &&
                      t.show();
                }
              }),
                this.emit("aftercollapseexpandcombo", {
                  action: "expand",
                  item: t,
                });
            }
          }),
          (e.prototype.collapseExpandCombo = function (t) {
            if (
              (Object(gt.x)(t) && (t = this.findById(t)),
              t && (!t.getType || "combo" === t.getType()))
            ) {
              for (var e = t.getModel(), n = this.findById(e.parentId); n; ) {
                var r = n.getModel();
                if (r.collapsed)
                  return (
                    console.warn(
                      "Fail to expand the combo since it's ancestor combo is collapsed.",
                    ),
                    void (n = void 0)
                  );
                n = this.findById(r.parentId);
              }
              e.collapsed ? this.expandCombo(t) : this.collapseCombo(t),
                this.updateCombo(t);
            }
          }),
          (e.prototype.sortCombos = function () {
            var t = this;
            if (!this.get("comboSorted")) {
              this.set("comboSorted", !0);
              var e = [],
                n = {};
              (this.get("comboTrees") || []).forEach(function (t) {
                br(t, function (t) {
                  return (
                    e[t.depth] ? e[t.depth].push(t.id) : (e[t.depth] = [t.id]),
                    (n[t.id] = t.depth),
                    !0
                  );
                });
              }),
                (this.getEdges().concat(this.get("vedges")) || []).forEach(
                  function (t) {
                    var r = t.getModel(),
                      i = n[r.source] || 0,
                      o = n[r.target] || 0,
                      a = Math.max(i, o);
                    e[a] ? e[a].push(r.id) : (e[a] = [r.id]);
                  },
                ),
                e.forEach(function (e) {
                  if (e && e.length)
                    for (var n = e.length - 1; n >= 0; n--) {
                      var r = t.findById(e[n]);
                      r && r.toFront();
                    }
                });
            }
          }),
          (e.prototype.getNeighbors = function (t, e) {
            var n = t;
            return Object(gt.x)(t) && (n = this.findById(t)), n.getNeighbors(e);
          }),
          (e.prototype.getNodeDegree = function (t, e, n) {
            void 0 === e && (e = void 0), void 0 === n && (n = !1);
            var r = t;
            Object(gt.x)(t) && (r = this.findById(t));
            var i = this.get("degrees");
            (i && !n) || ((i = fn(this.save())), this.set("degrees", i));
            var o = i[r.getID()],
              a = 0;
            if (!o) return 0;
            switch (e) {
              case "in":
                a = o.inDegree;
                break;
              case "out":
                a = o.outDegree;
                break;
              case "all":
                a = o;
                break;
              default:
                a = o.degree;
            }
            return a;
          }),
          (e.prototype.getUndoStack = function () {
            return this.undoStack;
          }),
          (e.prototype.getRedoStack = function () {
            return this.redoStack;
          }),
          (e.prototype.getStackData = function () {
            return this.get("enabledStack")
              ? {
                  undoStack: this.undoStack.toArray(),
                  redoStack: this.redoStack.toArray(),
                }
              : null;
          }),
          (e.prototype.clearStack = function () {
            this.get("enabledStack") &&
              (this.undoStack.clear(), this.redoStack.clear());
          }),
          (e.prototype.pushStack = function (t, e, n) {
            if (
              (void 0 === t && (t = "update"),
              void 0 === n && (n = "undo"),
              this.get("enabledStack"))
            ) {
              var r = e
                ? Object(gt.b)(e)
                : { before: {}, after: Object(gt.b)(this.save()) };
              "redo" === n
                ? this.redoStack.push({ action: t, data: r })
                : this.undoStack.push({ action: t, data: r }),
                this.emit("stackchange", {
                  undoStack: this.undoStack,
                  redoStack: this.redoStack,
                });
            } else
              console.warn(
                "请先启用 undo & redo 功能，在实例化 Graph 时候配置 enabledStack: true !",
              );
          }),
          (e.prototype.getAdjMatrix = function (t, e) {
            void 0 === t && (t = !0),
              void 0 === e && (e = this.get("directed"));
            var n = this.get("adjMatrix");
            return (
              (n && t) || ((n = un(this.save(), e)), this.set("adjMatrix", n)),
              n
            );
          }),
          (e.prototype.getShortestPathMatrix = function (t, e) {
            void 0 === t && (t = !0),
              void 0 === e && (e = this.get("directed"));
            var n = this.get("adjMatrix"),
              r = this.get("shortestPathMatrix");
            return (
              (n && t) || ((n = un(this.save(), e)), this.set("adjMatrix", n)),
              (r && t) ||
                ((r = pn(this.save(), e)), this.set("shortestPathMatrix", r)),
              r
            );
          }),
          (e.prototype.on = function (e, n, r) {
            return t.prototype.on.call(this, e, n, r);
          }),
          (e.prototype.destroy = function () {
            this.clear(),
              this.clearStack(),
              this.get("itemController").destroy(),
              this.get("modeController").destroy(),
              this.get("viewController").destroy(),
              this.get("stateController").destroy(),
              this.get("canvas").destroy(),
              (this.cfg = null),
              (this.destroyed = !0),
              (this.redoStack = null),
              (this.undoStack = null);
          }),
          (e.prototype.createHull = function (t) {
            if (t.members && !(t.members.length < 1)) {
              var e = this.get("hullGroup"),
                n = this.get("hullMap");
              if (
                (n || ((n = {}), this.set("hullMap", n)),
                (e && !e.get("destroyed")) ||
                  ((e = this.get("group").addGroup({
                    id: "hullGroup",
                  })).toBack(),
                  this.set("hullGroup", e)),
                n[t.id])
              )
                return console.warn("Existed hull id."), n[t.id];
              var r = e.addGroup({ id: t.id + "-container" }),
                i = new Si(this, Object(h.a)(Object(h.a)({}, t), { group: r }));
              return (n[i.id] = i), i;
            }
            console.warn("Create hull failed! The members is empty.");
          }),
          (e.prototype.getHulls = function () {
            return this.get("hullMap");
          }),
          (e.prototype.getHullById = function (t) {
            return this.get("hullMap")[t];
          }),
          (e.prototype.removeHull = function (t) {
            var e;
            (e = Object(gt.x)(t) ? this.getHullById(t) : t),
              delete this.get("hullMap")[e.id],
              e.destroy();
          }),
          (e.prototype.removeHulls = function () {
            var t = this.getHulls();
            t &&
              Object.keys(t).length &&
              (Object.keys(t).forEach(function (e) {
                t[e].destroy();
              }),
              this.set("hullMap", {}));
          }),
          (e.prototype.onTick = function (t) {
            this.get("layoutController").onTick(t), an(this.onTick.bind(this));
          });
      })(nn.a);
      function ji(t) {
        return (ji =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      var ki = sn.a.transform,
        Ei = ["startArrow", "endArrow"],
        Ni = {
          lineWidth: 1,
          stroke: void 0,
          fill: void 0,
          lineAppendWidth: 1,
          opacity: void 0,
          strokeOpacity: void 0,
          fillOpacity: void 0,
          x: 0,
          y: 0,
          r: 10,
          width: 20,
          height: 20,
          shadowColor: void 0,
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
        },
        Ti = {
          edge: {
            lineWidth: 1,
            stroke: "#000",
            lineDash: void 0,
            startArrow: !1,
            endArrow: !1,
            opacity: void 0,
            strokeOpacity: void 0,
            fillOpacity: void 0,
            shadowColor: void 0,
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
          },
          node: Ni,
          combo: Ni,
        },
        Pi = {
          options: {},
          itemType: "",
          type: "",
          getCustomConfig: function (t) {
            return {};
          },
          getOptions: function (t) {
            return Object(gt.d)(
              {
                labelCfg: {
                  style: {
                    fontFamily:
                      ("undefined" != typeof window &&
                        window.getComputedStyle &&
                        window
                          .getComputedStyle(document.body, null)
                          .getPropertyValue("font-family")) ||
                      "Arial, sans-serif",
                  },
                },
                descriptionCfg: {
                  style: {
                    fontFamily:
                      ("undefined" != typeof window &&
                        window.getComputedStyle &&
                        window
                          .getComputedStyle(document.body, null)
                          .getPropertyValue("font-family")) ||
                      "Arial, sans-serif",
                  },
                },
              },
              this.options,
              this.getCustomConfig(t) || {},
              t,
            );
          },
          draw: function (t, e) {
            var n = this.drawShape(t, e);
            (n.set("className", this.itemType + "-shape"), t.label) &&
              this.drawLabel(t, e).set("className", this.itemType + "-label");
            return n;
          },
          afterDraw: function (t, e, n) {},
          drawShape: function (t, e) {
            return null;
          },
          drawLabel: function (t, e) {
            var n = this.getOptions(t).labelCfg || {},
              r = this.getLabelStyle(t, n, e),
              i = r.rotate;
            delete r.rotate;
            var o = e.addShape("text", {
              attrs: r,
              draggable: !0,
              className: "text-shape",
              name: "text-shape",
            });
            if (i) {
              var a = o.getBBox(),
                s = o.getMatrix();
              if ((s || (s = [1, 0, 0, 0, 1, 0, 0, 0, 1]), r.rotateCenter))
                switch (r.rotateCenter) {
                  case "center":
                    s = ki(s, [
                      ["t", -a.width / 2, -a.height / 2],
                      ["r", i],
                      ["t", a.width / 2, a.height / 2],
                    ]);
                    break;
                  case "lefttop":
                    s = ki(s, [
                      ["t", -r.x, -r.y],
                      ["r", i],
                      ["t", r.x, r.y],
                    ]);
                    break;
                  case "leftcenter":
                    s = ki(s, [
                      ["t", -r.x, -r.y - a.height / 2],
                      ["r", i],
                      ["t", r.x, r.y + a.height / 2],
                    ]);
                    break;
                  default:
                    s = ki(s, [
                      ["t", -a.width / 2, -a.height / 2],
                      ["r", i],
                      ["t", a.width / 2, a.height / 2],
                    ]);
                }
              else
                s = ki(s, [
                  ["t", -r.x, -r.y - a.height / 2],
                  ["r", i],
                  ["t", r.x, r.y + a.height / 2],
                ]);
              o.setMatrix(s);
            }
            if (r.background) {
              var u = this.drawLabelBg(t, e, o),
                c = this.itemType + "-label-bg";
              u.set("classname", c), o.toFront();
            }
            return o;
          },
          drawLabelBg: function (t, e, n) {
            var r = this.options.labelCfg,
              i = Object(gt.C)({}, r, t.labelCfg),
              o = this.getLabelBgStyleByPosition(n, t, i, e);
            return e.addShape("rect", { name: "text-bg-shape", attrs: o });
          },
          getLabelStyleByPosition: function (t, e, n) {
            return { text: t.label };
          },
          getLabelBgStyleByPosition: function (t, e, n, r) {
            return {};
          },
          getLabelStyle: function (t, e, n) {
            var r = this.getLabelStyleByPosition(t, e, n),
              i = this.itemType + "Label",
              o = ur[i] ? ur[i].style : null;
            return Object(h.a)(Object(h.a)(Object(h.a)({}, o), r), e.style);
          },
          getShapeStyle: function (t) {
            return t.style;
          },
          update: function (t, e) {
            this.updateShapeStyle(t, e), this.updateLabel(t, e);
          },
          updateShapeStyle: function (t, e) {
            var n = e.getContainer(),
              r = e.getKeyShape(),
              i = Object(gt.C)({}, r.attr(), t.style),
              o = function (t) {
                var e,
                  o = i[t];
                if (Object(gt.w)(o)) {
                  var a = n.find(function (e) {
                    return e.get("name") === t;
                  });
                  a && a.attr(o);
                } else r.attr((((e = {})[t] = o), e));
              };
            for (var a in i) o(a);
          },
          updateLabel: function (t, e) {
            var n = e.getContainer(),
              r = this.getOptions({}).labelCfg,
              i = this.itemType + "-label",
              o = n.find(function (t) {
                return t.get("className") === i;
              }),
              a = this.itemType + "-label-bg",
              s = n.find(function (t) {
                return t.get("classname") === a;
              });
            if (t.label || "" === t.label)
              if (o) {
                var u = {};
                e.getModel && (u = e.getModel().labelCfg);
                var c = Object(gt.d)({}, r, u, t.labelCfg),
                  l = this.getLabelStyleByPosition(t, c, n),
                  d = t.labelCfg ? t.labelCfg.style : void 0,
                  f = c.style && c.style.background,
                  p = Object(h.a)(Object(h.a)(Object(h.a)({}, o.attr()), l), d),
                  g = p.rotate;
                if ((delete p.rotate, g)) {
                  var y = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                  (y = ki(y, [
                    ["t", -p.x, -p.y],
                    ["r", g],
                    ["t", p.x, p.y],
                  ])),
                    o.resetMatrix(),
                    o.attr(Object(h.a)(Object(h.a)({}, p), { matrix: y }));
                } else o.resetMatrix(), o.attr(p);
                if (s)
                  if (p.background) {
                    var v = this.getLabelBgStyleByPosition(o, t, c, n),
                      m = Object(h.a)(Object(h.a)({}, v), f);
                    if ((s.resetMatrix(), g)) {
                      var b = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                      (b = ki(b, [
                        ["t", -m.x, -m.y],
                        ["r", g],
                        ["t", m.x, m.y],
                      ])),
                        (m.matrix = b);
                    }
                    s.attr(m);
                  } else n.removeChild(s);
                else
                  p.background &&
                    ((s = this.drawLabelBg(t, n, o)).set("classname", a),
                    o.toFront());
              } else {
                this.drawLabel(t, n).set("className", i);
              }
          },
          afterUpdate: function (t, e) {},
          setState: function (t, e, n) {
            var r,
              i,
              o = n.get("keyShape");
            if (o && !o.destroyed) {
              var a = n.getType(),
                s = Object(gt.n)(e) ? t : t + ":" + e,
                u = this.getStateStyle(s, n),
                c = n.getStateStyle(s);
              if (c || u) {
                var h = Object(gt.C)({}, c || u),
                  l = n.getContainer(),
                  d = { x: 1, y: 1, cx: 1, cy: 1 };
                if (
                  ("combo" === a && ((d.r = 1), (d.width = 1), (d.height = 1)),
                  e)
                ) {
                  var f = function (t) {
                    var e,
                      n = h[t];
                    if (Object(gt.w)(n) && !Ei.includes(t)) {
                      var r = l.find(function (e) {
                        return e.get("name") === t;
                      });
                      r && r.attr(n);
                    } else o.attr((((e = {})[t] = n), e));
                  };
                  for (var p in h) f(p);
                } else {
                  var g = kr(n.getCurrentStatesStyle()),
                    y = n.getModel(),
                    v = Object(gt.C)({}, y.style, kr(n.getOriginStyle())),
                    m = o.get("name"),
                    b = o.attr(),
                    x = {};
                  Object.keys(b).forEach(function (t) {
                    if ("img" !== t) {
                      var e = b[t];
                      e && "object" === ji(e)
                        ? (x[t] = Object(gt.b)(e))
                        : (x[t] = e);
                    }
                  });
                  var w = {},
                    O = function (t) {
                      var e = h[t];
                      if (Object(gt.w)(e) && !Ei.includes(t)) {
                        var n = l.find(function (e) {
                          return e.get("name") === t;
                        });
                        if (n) {
                          var r = Object(gt.b)(n.attr());
                          Object(gt.e)(e, function (e, i) {
                            if (t === m && x[i] && !d[i]) {
                              delete x[i];
                              var s = v[t][i] || Ti[a][i];
                              o.attr(i, s);
                            } else if (r[i] || 0 === r[i]) {
                              delete r[i];
                              var u = v[t][i] || Ti[a][i];
                              n.attr(i, u);
                            }
                          }),
                            (w[t] = r);
                        }
                      } else if (x[t] && !d[t]) {
                        delete x[t];
                        var i = v[t] || (v[m] ? v[m][t] : void 0) || Ti[a][t];
                        o.attr(t, i);
                      }
                    };
                  for (var M in h) O(M);
                  for (var p in (m ? (w[m] = x) : Object(gt.C)(w, x), g))
                    if (!d[p]) {
                      var S = g[p];
                      (Object(gt.w)(S) && !Ei.includes(p)) ||
                        (m
                          ? (Object(gt.C)(v[m], (((i = {})[p] = S), i)),
                            delete v[p])
                          : Object(gt.C)(v, (((r = {})[p] = S), r)),
                        delete g[p]);
                    }
                  var C = {};
                  Object(gt.d)(C, v, w, g);
                  var j = !1,
                    k = function (t) {
                      var e,
                        n,
                        r = C[t];
                      if (Object(gt.w)(r) && !Ei.includes(t)) {
                        var i = l.find(function (e) {
                          return e.get("name") === t;
                        });
                        i &&
                          (t === m &&
                            ("combo" === a &&
                              (delete r.r, delete r.width, delete r.height),
                            (j = !0)),
                          i.attr(r));
                      } else if (!j) {
                        var s = r || Ti[a][t];
                        "combo" === a
                          ? m || o.attr((((e = {})[t] = s), e))
                          : o.attr((((n = {})[t] = s), n));
                      }
                    };
                  for (var E in C) k(E);
                }
              }
            }
          },
          getStateStyle: function (t, e) {
            var n = e.getModel(),
              r = e.getType(),
              i = this.getOptions(n),
              o = i.stateStyles,
              a = i.style,
              s = void 0 === a ? {} : a,
              u = n.stateStyles ? n.stateStyles[t] : o && o[t];
            return "combo" === r ? Object(gt.b)(u) : Object(gt.C)({}, s, u);
          },
          getControlPoints: function (t) {
            return t.controlPoints;
          },
          getAnchorPoints: function (t) {
            return this.getOptions(t).anchorPoints;
          },
        },
        Ii = {
          itemType: "node",
          shapeType: "single-node",
          labelPosition: "center",
          offset: ur.nodeLabel.offset,
          getSize: function (t) {
            var e = t.size || this.getOptions({}).size || ur.defaultNode.size;
            return (
              Object(gt.m)(e) && 1 === e.length && (e = [e[0], e[0]]),
              Object(gt.m)(e) || (e = [e, e]),
              e
            );
          },
          getLabelStyleByPosition: function (t, e) {
            var n = e.position || this.labelPosition;
            if ("center" === n) return { x: 0, y: 0, text: t.label };
            var r = e.offset;
            Object(gt.s)(r) && (r = this.offset);
            var i,
              o = this.getSize(t),
              a = o[0],
              s = o[1];
            switch (n) {
              case "top":
                i = { x: 0, y: 0 - s / 2 - r, textBaseline: "bottom" };
                break;
              case "bottom":
                i = { x: 0, y: s / 2 + r, textBaseline: "top" };
                break;
              case "left":
                i = { x: 0 - a / 2 - r, y: 0, textAlign: "right" };
                break;
              default:
                i = { x: a / 2 + r, y: 0, textAlign: "left" };
            }
            return (i.text = t.label), i;
          },
          getLabelBgStyleByPosition: function (t, e, n, r) {
            if (!t) return {};
            var i = t.getBBox(),
              o = n.style && n.style.background;
            if (!o) return {};
            var a,
              s = Br(o.padding),
              u = i.width + s[1] + s[3],
              c = i.height + s[0] + s[2],
              l = n.offset;
            return (
              Object(gt.s)(l) && (l = this.offset),
              (a = { x: i.minX - s[3], y: i.minY - s[0] }),
              (a = Object(h.a)(Object(h.a)(Object(h.a)({}, a), o), {
                width: u,
                height: c,
              }))
            );
          },
          drawShape: function (t, e) {
            var n = this.shapeType,
              r = this.getShapeStyle(t);
            return e.addShape(n, {
              attrs: r,
              draggable: !0,
              name: "node-shape",
            });
          },
          updateLinkPoints: function (t, e) {
            var n,
              r = this.getOptions(t).linkPoints,
              i = e.find(function (t) {
                return "link-point-left" === t.get("className");
              }),
              o = e.find(function (t) {
                return "link-point-right" === t.get("className");
              }),
              a = e.find(function (t) {
                return "link-point-top" === t.get("className");
              }),
              s = e.find(function (t) {
                return "link-point-bottom" === t.get("className");
              });
            i && (n = i.attr()),
              o && !n && (n = o.attr()),
              a && !n && (n = a.attr()),
              s && !n && (n = s.attr()),
              n || (n = r);
            var u = Object(gt.C)({}, n, t.linkPoints),
              c = u.fill,
              l = u.stroke,
              d = u.lineWidth,
              f = u.size / 2;
            f || (f = u.r);
            var p = t.linkPoints
                ? t.linkPoints
                : { left: void 0, right: void 0, top: void 0, bottom: void 0 },
              g = p.left,
              y = p.right,
              v = p.top,
              m = p.bottom,
              b = this.getSize(t),
              x = b[0],
              w = b[1],
              O = { r: f, fill: c, stroke: l, lineWidth: d };
            i
              ? g || void 0 === g
                ? i.attr(Object(h.a)(Object(h.a)({}, O), { x: -x / 2, y: 0 }))
                : i.remove()
              : g &&
                e.addShape("circle", {
                  attrs: Object(h.a)(Object(h.a)({}, O), { x: -x / 2, y: 0 }),
                  className: "link-point-left",
                  name: "link-point-left",
                  isAnchorPoint: !0,
                }),
              o
                ? (y || void 0 === y || o.remove(),
                  o.attr(Object(h.a)(Object(h.a)({}, O), { x: x / 2, y: 0 })))
                : y &&
                  e.addShape("circle", {
                    attrs: Object(h.a)(Object(h.a)({}, O), { x: x / 2, y: 0 }),
                    className: "link-point-right",
                    name: "link-point-right",
                    isAnchorPoint: !0,
                  }),
              a
                ? (v || void 0 === v || a.remove(),
                  a.attr(Object(h.a)(Object(h.a)({}, O), { x: 0, y: -w / 2 })))
                : v &&
                  e.addShape("circle", {
                    attrs: Object(h.a)(Object(h.a)({}, O), { x: 0, y: -w / 2 }),
                    className: "link-point-top",
                    name: "link-point-top",
                    isAnchorPoint: !0,
                  }),
              s
                ? m || void 0 === m
                  ? s.attr(Object(h.a)(Object(h.a)({}, O), { x: 0, y: w / 2 }))
                  : s.remove()
                : m &&
                  e.addShape("circle", {
                    attrs: Object(h.a)(Object(h.a)({}, O), { x: 0, y: w / 2 }),
                    className: "link-point-bottom",
                    name: "link-point-bottom",
                    isAnchorPoint: !0,
                  });
          },
          updateShape: function (t, e, n, r) {
            e.get("keyShape").attr(Object(h.a)({}, n)),
              this.updateLabel(t, e),
              r && this.updateIcon(t, e);
          },
          updateIcon: function (t, e) {
            var n = this,
              r = e.getContainer(),
              i = this.getOptions(t).icon,
              o = (t.icon ? t.icon : { show: void 0 }).show,
              a = r.find(function (t) {
                return t.get("className") === n.type + "-icon";
              });
            if (a)
              if (o || void 0 === o) {
                var s = Object(gt.C)({}, a.attr(), i),
                  u = s.width,
                  c = s.height;
                a.attr(
                  Object(h.a)(Object(h.a)({}, s), { x: -u / 2, y: -c / 2 }),
                );
              } else a.remove();
            else if (o) {
              (u = i.width), (c = i.height);
              r.addShape("image", {
                attrs: Object(h.a)(Object(h.a)({}, i), {
                  x: -u / 2,
                  y: -c / 2,
                }),
                className: this.type + "-icon",
                name: this.type + "-icon",
              });
              var l = r.find(function (t) {
                return "node-label" === t.get("className");
              });
              l && l.toFront();
            }
          },
        },
        Bi = Object(h.a)(Object(h.a)({}, Pi), Ii);
      Zr.registerNode("single-node", Bi);
      var Ai = {
          itemType: "edge",
          labelPosition: "center",
          refX: 0,
          refY: 0,
          labelAutoRotate: !1,
          options: {
            size: ur.defaultEdge.size,
            style: {
              x: 0,
              y: 0,
              stroke: ur.defaultEdge.style.stroke,
              lineAppendWidth: ur.defaultEdge.style.lineAppendWidth,
            },
            labelCfg: {
              style: {
                fill: ur.edgeLabel.style.fill,
                fontSize: ur.edgeLabel.style.fontSize,
              },
            },
            stateStyles: Object(h.a)({}, ur.edgeStateStyles),
          },
          getPath: function (t) {
            var e = [];
            return (
              Object(gt.e)(t, function (t, n) {
                0 === n ? e.push(["M", t.x, t.y]) : e.push(["L", t.x, t.y]);
              }),
              e
            );
          },
          getShapeStyle: function (t) {
            var e = this.options.style,
              n = { stroke: t.color },
              r = Object(gt.C)({}, e, n, t.style),
              i = t.size || ur.defaultEdge.size,
              o = (t = this.getPathPoints(t)).startPoint,
              a = t.endPoint,
              s = this.getControlPoints(t),
              u = [o];
            s && (u = u.concat(s)), u.push(a);
            var c = this.getPath(u);
            return Object(gt.C)(
              {},
              ur.defaultEdge.style,
              { stroke: ur.defaultEdge.color, lineWidth: i, path: c },
              r,
            );
          },
          updateShapeStyle: function (t, e) {
            var n = e.getContainer(),
              r = { stroke: t.color },
              i =
                n.find(function (t) {
                  return "edge-shape" === t.get("className");
                }) || e.getKeyShape(),
              o = t.size,
              a = (t = this.getPathPoints(t)).startPoint,
              s = t.endPoint,
              u = this.getControlPoints(t),
              c = [a];
            u && (c = c.concat(u)), c.push(s);
            var h = i.attr(),
              l = Object(gt.C)({}, r, h, t.style),
              d = t.sourceNode,
              f = t.targetNode,
              p = { radius: l.radius };
            u ||
              (p = {
                source: d,
                target: f,
                offset: l.offset,
                radius: l.radius,
              }),
              h.endArrow &&
                !1 === l.endArrow &&
                (t.style.endArrow = { path: "" }),
              h.startArrow &&
                !1 === l.startArrow &&
                (t.style.startArrow = { path: "" });
            var g = this.getPath(c, p),
              y = Object(gt.C)(r, i.attr(), { lineWidth: o, path: g }, t.style);
            i && i.attr(y);
          },
          getLabelStyleByPosition: function (t, e, n) {
            var r,
              i = e.position || this.labelPosition,
              o = {},
              a =
                n &&
                n.find(function (t) {
                  return "edge-shape" === t.get("className");
                });
            r = "start" === i ? 0 : "end" === i ? 1 : 0.5;
            var s,
              u = e.refX || this.refX,
              c = e.refY || this.refY;
            if (
              t.startPoint.x === t.endPoint.x &&
              t.startPoint.y === t.endPoint.y
            )
              return (
                (o.x = t.startPoint.x + u),
                (o.y = t.startPoint.y + c),
                (o.text = t.label),
                o
              );
            s = Object(gt.s)(e.autoRotate)
              ? this.labelAutoRotate
              : e.autoRotate;
            var h = vr(a, r, u, c, s);
            return (
              (o.x = h.x),
              (o.y = h.y),
              (o.rotate = h.rotate),
              (o.textAlign = this._getTextAlign(i, h.angle)),
              (o.text = t.label),
              o
            );
          },
          getLabelBgStyleByPosition: function (t, e, n, r) {
            if (!t) return {};
            var i = t.getBBox(),
              o = n.style && n.style.background;
            if (!o) return {};
            var a,
              s = o.padding,
              u = i.width + s[1] + s[3],
              c = i.height + s[0] + s[2],
              l = n.position || this.labelPosition,
              d = Object(h.a)(Object(h.a)({}, o), {
                width: u,
                height: c,
                x: i.minX - s[2],
                y: i.minY - s[0],
                rotate: 0,
              });
            a = Object(gt.s)(n.autoRotate)
              ? this.labelAutoRotate
              : n.autoRotate;
            var f,
              p =
                r &&
                r.find(function (t) {
                  return "edge-shape" === t.get("className");
                });
            f = "start" === l ? 0 : "end" === l ? 1 : 0.5;
            var g = n.refX || this.refX,
              y = n.refY || this.refY;
            if (
              e.startPoint.x === e.endPoint.x &&
              e.startPoint.y === e.endPoint.y
            )
              return (
                (d.x = e.startPoint.x + g - u / 2),
                (d.y = e.startPoint.y + y - c / 2),
                d
              );
            var v = vr(p, f, g - u / 2, y + c / 2, a),
              m = v.angle;
            return (
              m > 0.5 * Math.PI &&
                m < 1.5 * Math.PI &&
                (v = vr(p, f, g + u / 2, y + c / 2, a)),
              a && ((d.x = v.x), (d.y = v.y)),
              (d.rotate = v.rotate),
              d
            );
          },
          _getTextAlign: function (t, e) {
            var n = "center";
            return e
              ? ((e %= 2 * Math.PI),
                "center" !== t &&
                  (n =
                    (e >= 0 && e <= Math.PI / 2) ||
                    (e >= 1.5 * Math.PI && e < 2 * Math.PI)
                      ? t
                      : (function (t) {
                          var e = t;
                          return (
                            "start" === t
                              ? (e = "end")
                              : "end" === t && (e = "start"),
                            e
                          );
                        })(t)),
                n)
              : t;
          },
          getControlPoints: function (t) {
            return t.controlPoints;
          },
          getPathPoints: function (t) {
            return t;
          },
          drawShape: function (t, e) {
            var n = this.getShapeStyle(t);
            return e.addShape("path", {
              className: "edge-shape",
              name: "edge-shape",
              attrs: n,
            });
          },
          drawLabel: function (t, e) {
            var n,
              r = this.options.labelCfg;
            n =
              ("undefined" != typeof window &&
                void 0 !== window.getComputedStyle &&
                window
                  .getComputedStyle(document.body, null)
                  .getPropertyValue("font-family")) ||
              "Arial, sans-serif";
            var i = Object(gt.d)({ fontFamily: n }, r, t.labelCfg),
              o = this.getLabelStyle(t, i, e),
              a = o.rotate;
            delete o.rotate;
            var s = e.addShape("text", { attrs: o, name: "text-shape" });
            if ((a && s.rotateAtStart(a), o.background)) {
              var u = this.drawLabelBg(t, e, s),
                c = this.itemType + "-label-bg";
              u.set("classname", c), s.toFront();
            }
            return s;
          },
          drawLabelBg: function (t, e, n) {
            var r = this.options.labelCfg,
              i = Object(gt.d)({}, r, t.labelCfg),
              o = this.getLabelStyle(t, i, e).rotate,
              a = this.getLabelBgStyleByPosition(n, t, i, e);
            delete a.rotate;
            var s = e.addShape("rect", { name: "text-bg-shape", attrs: a });
            return o && s.rotateAtStart(o), s;
          },
        },
        Li = Object(h.a)(Object(h.a)({}, Pi), Ai);
      Zr.registerEdge("single-edge", Li),
        Zr.registerEdge(
          "line",
          { getControlPoints: function () {} },
          "single-edge",
        ),
        Zr.registerEdge(
          "spline",
          {
            getPath: function (t) {
              return oi(t);
            },
          },
          "single-edge",
        ),
        Zr.registerEdge(
          "arc",
          {
            curveOffset: 20,
            clockwise: 1,
            getControlPoints: function (t) {
              var e,
                n,
                r = t.startPoint,
                i = t.endPoint,
                o = (r.x + i.x) / 2,
                a = (r.y + i.y) / 2;
              if (void 0 !== t.controlPoints) {
                if (
                  ((n = t.controlPoints[0]),
                  (e = In(r, n, i)),
                  r.x <= i.x && r.y > i.y
                    ? (this.clockwise = e.x > n.x ? 0 : 1)
                    : r.x <= i.x && r.y < i.y
                    ? (this.clockwise = e.x > n.x ? 1 : 0)
                    : r.x > i.x && r.y <= i.y
                    ? (this.clockwise = e.y < n.y ? 0 : 1)
                    : (this.clockwise = e.y < n.y ? 1 : 0),
                  (n.x - r.x) / (n.y - r.y) == (i.x - r.x) / (i.y - r.y))
                )
                  return [];
              } else {
                void 0 === t.curveOffset && (t.curveOffset = this.curveOffset),
                  Object(gt.m)(t.curveOffset) &&
                    (t.curveOffset = t.curveOffset[0]),
                  t.curveOffset < 0
                    ? (this.clockwise = 0)
                    : (this.clockwise = 1);
                var s = { x: i.x - r.x, y: i.y - r.y },
                  u = Math.atan2(s.y, s.x);
                (n = {
                  x: t.curveOffset * Math.cos(-Math.PI / 2 + u) + o,
                  y: t.curveOffset * Math.sin(-Math.PI / 2 + u) + a,
                }),
                  (e = In(r, n, i));
              }
              var c = Bn(r, e);
              return [{ x: c, y: c }];
            },
            getPath: function (t) {
              var e = [];
              return (
                e.push(["M", t[0].x, t[0].y]),
                2 === t.length
                  ? e.push(["L", t[1].x, t[1].y])
                  : e.push([
                      "A",
                      t[1].x,
                      t[1].y,
                      0,
                      0,
                      this.clockwise,
                      t[2].x,
                      t[2].y,
                    ]),
                e
              );
            },
          },
          "single-edge",
        ),
        Zr.registerEdge(
          "quadratic",
          {
            curvePosition: 0.5,
            curveOffset: -20,
            getControlPoints: function (t) {
              var e = t.controlPoints;
              if (!e || !e.length) {
                var n = t.startPoint,
                  r = t.endPoint;
                void 0 === t.curveOffset && (t.curveOffset = this.curveOffset),
                  void 0 === t.curvePosition &&
                    (t.curvePosition = this.curvePosition),
                  Object(gt.m)(this.curveOffset) &&
                    (t.curveOffset = t.curveOffset[0]),
                  Object(gt.m)(this.curvePosition) &&
                    (t.curvePosition = t.curveOffset[0]),
                  (e = [ai(n, r, t.curvePosition, t.curveOffset)]);
              }
              return e;
            },
            getPath: function (t) {
              var e = [];
              return (
                e.push(["M", t[0].x, t[0].y]),
                e.push(["Q", t[1].x, t[1].y, t[2].x, t[2].y]),
                e
              );
            },
          },
          "single-edge",
        ),
        Zr.registerEdge(
          "cubic",
          {
            curvePosition: [0.5, 0.5],
            curveOffset: [-20, 20],
            getControlPoints: function (t) {
              var e = t.controlPoints;
              if (
                (void 0 === t.curveOffset && (t.curveOffset = this.curveOffset),
                void 0 === t.curvePosition &&
                  (t.curvePosition = this.curvePosition),
                Object(gt.t)(t.curveOffset) &&
                  (t.curveOffset = [t.curveOffset, -t.curveOffset]),
                Object(gt.t)(t.curvePosition) &&
                  (t.curvePosition = [t.curvePosition, 1 - t.curvePosition]),
                !e || !e.length || e.length < 2)
              ) {
                var n = t.startPoint,
                  r = t.endPoint;
                e = [
                  ai(n, r, t.curvePosition[0], t.curveOffset[0]),
                  ai(n, r, t.curvePosition[1], t.curveOffset[1]),
                ];
              }
              return e;
            },
            getPath: function (t) {
              var e = [];
              return (
                e.push(["M", t[0].x, t[0].y]),
                e.push(["C", t[1].x, t[1].y, t[2].x, t[2].y, t[3].x, t[3].y]),
                e
              );
            },
          },
          "single-edge",
        ),
        Zr.registerEdge(
          "cubic-vertical",
          {
            curvePosition: [0.5, 0.5],
            minCurveOffset: [0, 0],
            curveOffset: void 0,
            getControlPoints: function (t) {
              var e = t.startPoint,
                n = t.endPoint;
              void 0 === t.curvePosition &&
                (t.curvePosition = this.curvePosition),
                void 0 === t.curveOffset && (t.curveOffset = this.curveOffset),
                void 0 === t.minCurveOffset &&
                  (t.minCurveOffset = this.minCurveOffset),
                Object(gt.t)(t.curveOffset) &&
                  (t.curveOffset = [t.curveOffset, -t.curveOffset]),
                Object(gt.t)(t.minCurveOffset) &&
                  (t.minCurveOffset = [t.minCurveOffset, -t.minCurveOffset]),
                Object(gt.t)(t.curvePosition) &&
                  (t.curvePosition = [t.curvePosition, 1 - t.curvePosition]);
              var r = n.y - e.y,
                i = [0, 0];
              return (
                t.curveOffset
                  ? (i = t.curveOffset)
                  : Math.abs(r) < Math.abs(t.minCurveOffset[0]) &&
                    (i = t.minCurveOffset),
                [
                  { x: e.x, y: e.y + r * this.curvePosition[0] + i[0] },
                  { x: n.x, y: n.y - r * this.curvePosition[1] + i[1] },
                ]
              );
            },
          },
          "cubic",
        ),
        Zr.registerEdge(
          "cubic-horizontal",
          {
            curvePosition: [0.5, 0.5],
            minCurveOffset: [0, 0],
            curveOffset: void 0,
            getControlPoints: function (t) {
              var e = t.startPoint,
                n = t.endPoint;
              void 0 === t.curvePosition &&
                (t.curvePosition = this.curvePosition),
                void 0 === t.curveOffset && (t.curveOffset = this.curveOffset),
                void 0 === t.minCurveOffset &&
                  (t.minCurveOffset = this.minCurveOffset),
                Object(gt.t)(t.curveOffset) &&
                  (t.curveOffset = [t.curveOffset, -t.curveOffset]),
                Object(gt.t)(t.minCurveOffset) &&
                  (t.minCurveOffset = [t.minCurveOffset, -t.minCurveOffset]),
                Object(gt.t)(t.curvePosition) &&
                  (t.curvePosition = [t.curvePosition, 1 - t.curvePosition]);
              var r = n.x - e.x,
                i = [0, 0];
              return (
                t.curveOffset
                  ? (i = t.curveOffset)
                  : Math.abs(r) < Math.abs(t.minCurveOffset[0]) &&
                    (i = t.minCurveOffset),
                [
                  { x: e.x + r * this.curvePosition[0] + i[0], y: e.y },
                  { x: n.x - r * this.curvePosition[1] + i[1], y: n.y },
                ]
              );
            },
          },
          "cubic",
        ),
        Zr.registerEdge(
          "loop",
          {
            getPathPoints: function (t) {
              return yr(t);
            },
            getControlPoints: function (t) {
              return t.controlPoints;
            },
            afterDraw: function (t) {
              t.controlPoints = void 0;
            },
            afterUpdate: function (t) {
              t.controlPoints = void 0;
            },
          },
          "cubic",
        );
      var Di = {
          itemType: "combo",
          shapeType: "single-combo",
          labelPosition: "top",
          refX: ur.comboLabel.refX,
          refY: ur.comboLabel.refY,
          options: {
            style: {
              stroke: ur.defaultCombo.style.stroke,
              fill: ur.defaultCombo.style.fill,
              lineWidth: ur.defaultCombo.style.lineWidth,
            },
            labelCfg: {
              style: {
                fill: ur.comboLabel.style.fill,
                fontSize: ur.comboLabel.style.fontSize,
              },
            },
            stateStyles: Object(h.a)({}, ur.comboStateStyles),
          },
          getSize: function (t) {
            var e = Object(gt.b)(
              t.size || this.options.size || ur.defaultCombo.size,
            );
            return (
              Object(gt.m)(e) && 1 === e.length && (e = [e[0], e[0]]),
              Object(gt.m)(e) || (e = [e, e]),
              e
            );
          },
          getLabelStyleByPosition: function (t, e) {
            var n = e.position || this.labelPosition,
              r = t.style,
              i = t.padding || this.options.padding;
            Object(gt.m)(i) && (i = i[0]);
            var o = e.refX,
              a = e.refY;
            Object(gt.s)(o) && (o = this.refX),
              Object(gt.s)(a) && (a = this.refY);
            var s,
              u = this.getSize(t),
              c = (Math.max(r.r, u[0] / 2) || u[0] / 2) + i;
            switch (n) {
              case "top":
                s = {
                  x: 0,
                  y: -c - a,
                  textBaseline: "bottom",
                  textAlign: "center",
                };
                break;
              case "bottom":
                s = {
                  x: 0,
                  y: c + a,
                  textBaseline: "bottom",
                  textAlign: "center",
                };
                break;
              case "left":
                s = { x: -c + o, y: 0, textAlign: "left" };
                break;
              case "center":
                s = { x: 0, y: 0, text: t.label, textAlign: "center" };
                break;
              default:
                s = { x: c + o, y: 0, textAlign: "right" };
            }
            return (s.text = t.label), s;
          },
          drawShape: function (t, e) {
            var n = this.shapeType,
              r = this.getShapeStyle(t);
            return e.addShape(n, {
              attrs: r,
              draggable: !0,
              name: "combo-shape",
            });
          },
          updateShape: function (t, e, n) {
            var r = e.get("keyShape");
            (void 0 === t.animate ? this.options.animate : t.animate) &&
            r.animate
              ? r.animate(n, { duration: 200, easing: "easeLinear" })
              : r.attr(Object(h.a)({}, n)),
              this.updateLabel(t, e);
          },
        },
        _i = Object(h.a)(Object(h.a)({}, Pi), Di);
      Zr.registerCombo("single-combo", _i),
        Zr.registerCombo(
          "circle",
          {
            options: {
              size: [ur.defaultCombo.size[0], ur.defaultCombo.size[0]],
              padding: ur.defaultCombo.padding[0],
              animate: !0,
              style: {
                stroke: ur.defaultCombo.style.stroke,
                fill: ur.defaultCombo.style.fill,
                lineWidth: ur.defaultCombo.style.lineWidth,
              },
              labelCfg: {
                style: {
                  fill: ur.comboLabel.style.fill,
                  fontSize: ur.comboLabel.style.fontSize,
                },
                refX: 0,
                refY: 0,
              },
              stateStyles: Object(h.a)({}, ur.comboStateStyles),
            },
            shapeType: "circle",
            labelPosition: "top",
            drawShape: function (t, e) {
              var n = this.getShapeStyle(t);
              return (
                delete n.height,
                delete n.width,
                e.addShape("circle", {
                  attrs: n,
                  className: "circle-combo",
                  name: "circle-combo",
                  draggable: !0,
                })
              );
            },
            getShapeStyle: function (t) {
              var e = this.options.style,
                n = t.padding || this.options.padding;
              Object(gt.m)(n) && (n = n[0]);
              var r,
                i = { stroke: t.color },
                o = Object(gt.C)({}, e, i, t.style);
              if (t.fixSize)
                r = Object(gt.t)(t.fixSize) ? t.fixSize : t.fixSize[0];
              else {
                var a = this.getSize(t);
                r =
                  !Object(gt.t)(o.r) || isNaN(o.r)
                    ? a[0] / 2 || ur.defaultCombo.style.r
                    : Math.max(o.r, a[0] / 2) || a[0] / 2;
              }
              o.r = r + n;
              var s = Object(h.a)({ x: 0, y: 0 }, o);
              return t.style ? (t.style.r = r) : (t.style = { r: r }), s;
            },
            update: function (t, e) {
              var n = this.getSize(t),
                r = t.padding || this.options.padding;
              Object(gt.m)(r) && (r = r[0]);
              var i,
                o = Object(gt.b)(t.style);
              (i = t.fixSize
                ? Object(gt.t)(t.fixSize)
                  ? t.fixSize
                  : t.fixSize[0]
                : Math.max(o.r, n[0] / 2) || n[0] / 2),
                (o.r = i + r);
              var a = e.get("sizeCache");
              a && (a.r = o.r);
              var s = { stroke: t.color },
                u = e.get("keyShape"),
                c = Object(gt.C)({}, u.attr(), s, o);
              t.style ? (t.style.r = i) : (t.style = { r: i }),
                this.updateShape(t, e, c, !0);
            },
          },
          "single-combo",
        ),
        Zr.registerCombo(
          "rect",
          {
            options: {
              size: [40, 5],
              padding: [25, 20, 15, 20],
              animate: !0,
              style: {
                radius: 0,
                stroke: ur.defaultCombo.style.stroke,
                fill: ur.defaultCombo.style.fill,
                lineWidth: ur.defaultCombo.style.lineWidth,
              },
              labelCfg: {
                style: {
                  fill: ur.comboLabel.style.fill,
                  fontSize: ur.comboLabel.style.fontSize,
                },
              },
              anchorPoints: [
                [0, 0.5],
                [1, 0.5],
              ],
              stateStyles: Object(h.a)({}, ur.comboStateStyles),
            },
            shapeType: "rect",
            labelPosition: "top",
            drawShape: function (t, e) {
              var n = this.getShapeStyle(t);
              return e.addShape("rect", {
                attrs: n,
                className: "rect-combo",
                name: "rect-combo",
                draggable: !0,
              });
            },
            getLabelStyleByPosition: function (t, e) {
              var n = e.position || this.labelPosition,
                r = t.style,
                i = t.padding || this.options.padding;
              Object(gt.t)(i) && (i = [i, i, i, i]);
              var o = e.refX,
                a = e.refY;
              Object(gt.s)(o) && (o = this.refX),
                Object(gt.s)(a) && (a = this.refY);
              var s,
                u = r.width / 2 + i[3],
                c = r.height / 2 + i[0];
              switch (n) {
                case "top":
                  s = {
                    x: 0 - u + o,
                    y: 0 - c + a,
                    textBaseline: "top",
                    textAlign: "left",
                  };
                  break;
                case "bottom":
                  s = {
                    x: 0,
                    y: c + a,
                    textBaseline: "bottom",
                    textAlign: "center",
                  };
                  break;
                case "left":
                  s = { x: 0 - u + a, y: 0, textAlign: "left" };
                  break;
                case "center":
                  s = { x: 0, y: 0, text: t.label, textAlign: "center" };
                  break;
                default:
                  s = { x: u + o, y: 0, textAlign: "right" };
              }
              return (s.text = t.label), s;
            },
            getShapeStyle: function (t) {
              var e = this.options.style,
                n = t.padding || this.options.padding;
              Object(gt.t)(n) && (n = [n, n, n, n]);
              var r,
                i,
                o = { stroke: t.color },
                a = Object(gt.C)({}, e, o, t.style),
                s = this.getSize(t),
                u =
                  t.collapsed && t.fixCollapseSize
                    ? t.fixCollapseSize
                    : t.fixSize;
              u
                ? Object(gt.t)(u)
                  ? ((r = u), (i = u))
                  : ((r = u[0]), (i = u[1]))
                : ((r =
                    !Object(gt.t)(a.width) || isNaN(a.width)
                      ? s[0] || ur.defaultCombo.style.width
                      : Math.max(a.width, s[0]) || s[0]),
                  (i =
                    !Object(gt.t)(a.height) || isNaN(a.height)
                      ? s[1] || ur.defaultCombo.style.height
                      : Math.max(a.height, s[1]) || s[1]));
              var c = -r / 2 - n[3],
                l = -i / 2 - n[0];
              (a.width = r + n[1] + n[3]), (a.height = i + n[0] + n[2]);
              var d = Object(h.a)({ x: c, y: l }, a);
              return (
                t.style
                  ? ((t.style.width = r), (t.style.height = i))
                  : (t.style = { width: r, height: i }),
                d
              );
            },
            update: function (t, e) {
              var n = this.getSize(t),
                r = t.padding || this.options.padding;
              Object(gt.t)(r) && (r = [r, r, r, r]);
              var i,
                o,
                a = Object(gt.b)(t.style),
                s =
                  t.collapsed && t.fixCollapseSize
                    ? t.fixCollapseSize
                    : t.fixSize;
              s
                ? Object(gt.t)(s)
                  ? ((i = s), (o = s))
                  : ((i = s[0]), (o = s[1]))
                : ((i = Math.max(a.width, n[0]) || n[0]),
                  (o = Math.max(a.height, n[1]) || n[1])),
                (a.width = i + r[1] + r[3]),
                (a.height = o + r[0] + r[2]);
              var u = e.get("sizeCache");
              u && ((u.width = a.width), (u.height = a.height)),
                (a.x = -i / 2 - r[3]),
                (a.y = -o / 2 - r[0]);
              var c = { stroke: t.color },
                h = e.get("keyShape"),
                l = Object(gt.C)({}, h.attr(), c, a);
              t.style
                ? ((t.style.width = i), (t.style.height = o))
                : (t.style = { width: i, height: o }),
                this.updateShape(t, e, l, !1);
            },
            updateShape: function (t, e, n) {
              var r = e.get("keyShape");
              (void 0 === t.animate ? this.options.animate : t.animate) &&
              r.animate
                ? r.animate(n, { duration: 200, easing: "easeLinear" })
                : r.attr(Object(h.a)({}, n)),
                this.updateLabel(t, e);
            },
          },
          "single-combo",
        ),
        Zr.registerNode(
          "simple-circle",
          {
            options: {
              size: ur.defaultNode.size,
              style: {
                x: 0,
                y: 0,
                stroke: ur.defaultNode.style.stroke,
                fill: ur.defaultNode.style.fill,
                lineWidth: ur.defaultNode.style.lineWidth,
              },
              labelCfg: {
                style: {
                  fill: ur.nodeLabel.style.fill,
                  fontSize: ur.nodeLabel.style.fontSize,
                },
              },
              stateStyles: Object(h.a)({}, ur.nodeStateStyles),
            },
            shapeType: "simple-circle",
            labelPosition: "center",
            drawShape: function (t, e) {
              var n = this.getShapeStyle(t);
              return e.addShape("circle", {
                attrs: n,
                className: this.type + "-keyShape",
                draggable: !0,
              });
            },
            getShapeStyle: function (t) {
              var e = this.getOptions(t).style,
                n = { stroke: t.color },
                r = Object(gt.d)({}, e, n),
                i = this.getSize(t)[0] / 2;
              return Object(h.a)({ x: 0, y: 0, r: i }, r);
            },
            update: function (t, e) {
              var n = this.getSize(t),
                r = { stroke: t.color, r: n[0] / 2 },
                i = e.get("keyShape"),
                o = Object(gt.d)({}, i.attr(), r, t.style);
              this.updateShape(t, e, o, !0);
            },
          },
          "single-node",
        ),
        Zr.registerNode(
          "simple-rect",
          {
            options: {
              size: [100, 30],
              style: {
                radius: 0,
                stroke: ur.defaultNode.style.stroke,
                fill: ur.defaultNode.style.fill,
                lineWidth: ur.defaultNode.style.lineWidth,
              },
              labelCfg: {
                style: {
                  fill: ur.nodeLabel.style.fill,
                  fontSize: ur.nodeLabel.style.fontSize,
                },
              },
              anchorPoints: [
                [0, 0.5],
                [1, 0.5],
              ],
              stateStyles: Object(h.a)({}, ur.nodeStateStyles),
            },
            shapeType: "simple-rect",
            labelPosition: "center",
            drawShape: function (t, e) {
              var n = this.getShapeStyle(t);
              return e.addShape("rect", {
                attrs: n,
                className: this.type + "-keyShape",
                name: this.type + "-keyShape",
                draggable: !0,
              });
            },
            getShapeStyle: function (t) {
              var e = this.getOptions(t).style,
                n = { stroke: t.color },
                r = Object(gt.C)({}, e, n),
                i = this.getSize(t),
                o = r.width || i[0],
                a = r.height || i[1];
              return Object(h.a)(
                { x: -o / 2, y: -a / 2, width: o, height: a },
                r,
              );
            },
            update: function (t, e) {
              e.getContainer();
              var n = this.getOptions({}).style,
                r = this.getSize(t),
                i = e.get("keyShape");
              t.size ||
                ((r[0] = i.attr("width") || n.width),
                (r[1] = i.attr("height") || n.height));
              var o = {
                  stroke: t.color,
                  x: -r[0] / 2,
                  y: -r[1] / 2,
                  width: r[0],
                  height: r[1],
                },
                a = Object(gt.C)({}, n, i.attr(), o);
              (a = Object(gt.C)(a, t.style)), this.updateShape(t, e, a, !1);
            },
          },
          "single-node",
        ),
        Zr.registerNode(
          "image",
          {
            options: {
              img: "https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*eD7nT6tmYgAAAAAAAAAAAABkARQnAQ",
              size: 200,
              clipCfg: {
                show: !1,
                type: "circle",
                r: 50,
                rx: 50,
                ry: 35,
                width: 50,
                height: 35,
                points: [
                  [30, 12],
                  [12, 30],
                  [30, 48],
                  [48, 30],
                ],
                path: [
                  ["M", 25, 25],
                  ["L", 50, 25],
                  ["A", 12.5, 12.5, 0, 1, 1, 50, 50],
                  ["A", 12.5, 12.5, 0, 1, 0, 50, 50],
                  ["L", 25, 75],
                  ["Z"],
                ],
                x: 0,
                y: 0,
              },
            },
            shapeType: "image",
            labelPosition: "bottom",
            drawShape: function (t, e) {
              var n = this.shapeType,
                r = this.getShapeStyle(t);
              delete r.fill;
              var i = e.addShape(n, {
                attrs: r,
                className: this.type + "-keyShape",
                name: this.type + "-keyShape",
                draggable: !0,
              });
              return this.drawClip(t, i), i;
            },
            drawClip: function (t, e) {
              var n = this.getOptions(t).clipCfg;
              if (n.show) {
                var r = n.type,
                  i = n.x,
                  o = n.y,
                  a = n.style;
                if ("circle" === r) {
                  var s = n.r;
                  e.setClip({
                    type: "circle",
                    attrs: Object(h.a)({ r: s, x: i, y: o }, a),
                  });
                } else if ("rect" === r) {
                  var u = n.width,
                    c = n.height,
                    l = i - u / 2,
                    d = o - c / 2;
                  e.setClip({
                    type: "rect",
                    attrs: Object(h.a)({ x: l, y: d, width: u, height: c }, a),
                  });
                } else if ("ellipse" === r) {
                  var f = n.rx,
                    p = n.ry;
                  e.setClip({
                    type: "ellipse",
                    attrs: Object(h.a)({ x: i, y: o, rx: f, ry: p }, a),
                  });
                } else if ("polygon" === r) {
                  var g = n.points;
                  e.setClip({
                    type: "polygon",
                    attrs: Object(h.a)({ points: g }, a),
                  });
                } else if ("path" === r) {
                  var y = n.path;
                  e.setClip({
                    type: "path",
                    attrs: Object(h.a)({ path: y }, a),
                  });
                }
              }
            },
            getShapeStyle: function (t) {
              var e = this.getOptions(t).style,
                n = this.getSize(t),
                r = this.getOptions(t).img,
                i = n[0],
                o = n[1];
              return (
                e && ((i = e.width || n[0]), (o = e.height || n[1])),
                Object(h.a)(
                  { x: -i / 2, y: -o / 2, width: i, height: o, img: r },
                  e,
                )
              );
            },
            updateShapeStyle: function (t, e) {
              var n = e.getContainer(),
                r = this.itemType + "-shape",
                i =
                  n.find(function (t) {
                    return t.get("className") === r;
                  }) || e.getKeyShape(),
                o = this.getShapeStyle(t);
              i && i.attr(o);
            },
          },
          "single-node",
        );
      var Ri,
        Yi = Zr,
        Fi = [
          "#5F95FF",
          "#61DDAA",
          "#65789B",
          "#F6BD16",
          "#7262FD",
          "#78D3F8",
          "#9661BC",
          "#F6903D",
          "#008685",
          "#F08BB4",
        ],
        zi = sn.a.transform,
        Xi = Object(h.a)(
          Object(h.a)(
            Object(h.a)(Object(h.a)(Object(h.a)(Object(h.a)({}, a), o), s), i),
            u,
          ),
          { transform: zi, mat3: sn.b },
        );
      !(function () {
        function t(t) {
          (this.graph = t),
            (this.layoutCfg = t.get("layout") || {}),
            (this.layoutType = this.getLayoutType()),
            (this.layoutMethods = []),
            this.initLayout();
        }
        (t.prototype.initLayout = function () {}),
          (t.prototype.getLayoutType = function () {
            return this.getLayoutCfgType(this.layoutCfg);
          }),
          (t.prototype.getLayoutCfgType = function (t) {
            var e = t.type;
            if (e) return e;
            var n = t.pipes;
            return Array.isArray(n)
              ? n.map(function (t) {
                  return (null == t ? void 0 : t.type) || "";
                })
              : null;
          }),
          (t.prototype.isLayoutTypeSame = function (t) {
            var e = this.getLayoutCfgType(t);
            return Array.isArray(this.layoutType)
              ? this.layoutType.every(function (t, n) {
                  return t === e[n];
                })
              : (null == t ? void 0 : t.type) === this.layoutType;
          }),
          (t.prototype.refreshLayout = function () {
            var t = this.graph;
            t &&
              (t.get("animate") ? t.positionsAnimate() : t.refreshPositions());
          }),
          (t.prototype.changeLayout = function (t) {
            (this.layoutCfg = t), this.destoryLayoutMethods(), this.layout();
          }),
          (t.prototype.changeData = function () {
            this.destoryLayoutMethods(), this.layout();
          }),
          (t.prototype.destoryLayoutMethods = function () {
            var t = this.layoutMethods;
            null == t ||
              t.forEach(function (t) {
                t.destroy();
              }),
              (this.layoutMethods = []);
          }),
          (t.prototype.destroyLayout = function () {
            var t = this.graph;
            this.destoryLayoutMethods(),
              t.set("layout", void 0),
              (this.layoutCfg = void 0),
              (this.layoutType = void 0),
              (this.layoutMethods = void 0);
          }),
          (t.prototype.setDataFromGraph = function () {
            for (
              var t = [],
                e = [],
                n = [],
                r = [],
                i = [],
                o = [],
                a = this.graph.getNodes(),
                s = this.graph.getEdges(),
                u = this.graph.getCombos(),
                c = a.length,
                h = 0;
              h < c;
              h++
            ) {
              var l = a[h];
              if (l && !l.destroyed) {
                var d = l.getModel();
                l.isVisible() ? t.push(d) : e.push(d);
              }
            }
            var f = s.length;
            for (h = 0; h < f; h++) {
              var p = s[h];
              if (p && !p.destroyed) {
                d = p.getModel();
                p.isVisible()
                  ? d.isComboEdge
                    ? i.push(d)
                    : n.push(d)
                  : r.push(d);
              }
            }
            var g = u.length;
            for (h = 0; h < g; h++) {
              var y = u[h];
              if (!y.destroyed) {
                d = y.getModel();
                y.isVisible() ? o.push(d) : r.push(d);
              }
            }
            return {
              nodes: t,
              hiddenNodes: e,
              edges: n,
              hiddenEdges: r,
              combos: o,
              hiddenCombos: [],
              comboEdges: i,
            };
          }),
          (t.prototype.reLayoutMethod = function (t, e) {
            var n = this;
            return new Promise(function (r, i) {
              var o = n.graph,
                a = null == e ? void 0 : e.type;
              (e.onLayoutEnd = function () {
                o.emit("aftersublayout", { type: a }), r();
              }),
                t.init(n.data),
                "force" === a && ((t.ticking = !1), t.forceSimulation.stop()),
                o.emit("beforesublayout", { type: a }),
                t.execute(),
                t.isCustomLayout && e.onLayoutEnd && e.onLayoutEnd();
            });
          }),
          (t.prototype.relayout = function (t) {
            var e = this,
              n = this.graph,
              r = this.layoutMethods,
              i = this.layoutCfg;
            if (t) {
              this.data = this.setDataFromGraph();
              var o = this.data.nodes;
              if (!o) return !1;
              this.initPositions(i.center, o);
            }
            n.emit("beforelayout");
            var a = Promise.resolve();
            null == r ||
              r.forEach(function (t, n) {
                var r = i[n];
                a = a.then(function () {
                  return e.reLayoutMethod(t, r);
                });
              }),
              a
                .then(function () {
                  i.onAllLayoutEnd && i.onAllLayoutEnd();
                })
                .catch(function (t) {
                  console.warn("relayout failed", t);
                });
          }),
          (t.prototype.filterLayoutData = function (t, e) {
            var n,
              r,
              i = t.nodes,
              o = t.edges,
              a = Object(h.e)(t, ["nodes", "edges"]);
            if (!i) return t;
            if (
              ((n = Object(gt.r)(null == e ? void 0 : e.nodesFilter)
                ? e.nodesFilter
                : function () {
                    return !0;
                  }),
              Object(gt.r)(null == e ? void 0 : e.edgesFilter))
            )
              r = e.edgesFilter;
            else {
              var s = i.reduce(function (t, e) {
                return (t[e.id] = !0), t;
              }, {});
              r = function (t) {
                return s[t.source] && s[t.target];
              };
            }
            return Object(h.a)({ nodes: i.filter(n), edges: o.filter(r) }, a);
          }),
          (t.prototype.getLayoutBBox = function (t) {
            var e = this.graph,
              n = Object(gt.j)(e.getNodes(), function (t) {
                return t.getModel().layoutOrder;
              }),
              r = Object.values(n).map(function (t) {
                var e = _r(t);
                return (e.size = [e.width, e.height]), e;
              });
            return {
              groupNodes: Object.values(Object(gt.j)(t, "layoutOrder")),
              layoutNodes: r,
            };
          }),
          (t.prototype.layoutAnimate = function () {}),
          (t.prototype.moveToZero = function () {
            var t = this.graph.get("data").nodes;
            if (void 0 !== t[0].x && null !== t[0].x && !Dr(t[0].x)) {
              for (var e = [0, 0], n = t.length, r = 0; r < n; r++) {
                var i = t[r];
                (e[0] += i.x), (e[1] += i.y);
              }
              (e[0] /= t.length), (e[1] /= t.length);
              for (r = 0; r < n; r++) {
                ((i = t[r]).x -= e[0]), (i.y -= e[1]);
              }
            }
          }),
          (t.prototype.initPositions = function (t, e) {
            var n = this.graph;
            if (!e) return !1;
            var r = e ? e.length : 0;
            if (r) {
              var i = 0.85 * n.get("width"),
                o = 0.85 * n.get("height"),
                a = Math.ceil(Math.sqrt(r) * (i / o)),
                s = i / (a - 1),
                u = o / (Math.ceil(r / a) - 1);
              (isFinite(s) && s) || (s = 0), (isFinite(u) && s) || (u = 0);
              for (
                var c = t[0] - i / 2, h = t[1] - o / 2, l = !0, d = 0;
                d < r;
                d++
              ) {
                var f = e[d];
                Dr(f.x) && ((l = !1), (f.x = (d % a) * s + c)),
                  Dr(f.y) && ((l = !1), (f.y = Math.floor(d / a) * u + h));
              }
              return l;
            }
          }),
          (t.prototype.destroy = function () {
            (this.graph = null),
              this.destoryLayoutMethods(),
              (this.destroyed = !0);
          }),
          (t.prototype.onTick = function (t) {
            var e;
            null === (e = this.layoutMethods) ||
              void 0 === e ||
              e.forEach(function (e) {
                null == e || e.onTick(t);
              });
          });
      })();
      !(function (t) {
        (t.CLICK = "click"),
          (t.DBLCLICK = "dblclick"),
          (t.TAP = "tap"),
          (t.DBLTAP = "dbltap"),
          (t.DRAGSTART = "dragstart"),
          (t.DRAGEND = "dragend"),
          (t.DRAG = "drag"),
          (t.DRAGENTER = "dragenter"),
          (t.DRAGLEAVE = "dragleave"),
          (t.DRAGOVER = "dragover"),
          (t.DRAGOUT = "dragout"),
          (t.DDROP = "drop"),
          (t.PINCHSTART = "pinchstart"),
          (t.PINCHMOVE = "pinchmove"),
          (t.PANSTART = "panstart"),
          (t.PANMOVE = "panmove"),
          (t.PANEND = "panend"),
          (t.PRESS = "press"),
          (t.ACTION_END = "actionend"),
          (t.TOUCHSTART = "touchstart"),
          (t.TOUCHMOVE = "touchmove"),
          (t.TOUCHEND = "touchend"),
          (t.CANVAS_TOUCHSTART = "canvas:touchstart"),
          (t.CANVAS_TOUCHMOVE = "canvas:touchmove"),
          (t.CANVAS_TOUCHEND = "canvas:touchend"),
          (t.NODE_TOUCHSTART = "node:touchstart"),
          (t.NODE_TOUCHMOVE = "node:touchmove"),
          (t.NODE_TOUCHEND = "node:touchend"),
          (t.COMBO_TOUCHSTART = "combo:touchstart"),
          (t.COMBO_TOUCHMOVE = "combo:touchmove"),
          (t.COMBO_TOUCHEND = "combo:touchend"),
          (t.EDGE_TOUCHSTART = "edge:touchstart"),
          (t.EDGE_TOUCHMOVE = "edge:touchmove"),
          (t.EDGE_TOUCHEND = "edge:touchend"),
          (t.NODE_CLICK = "node:click"),
          (t.NODE_DBLCLICK = "node:dblclick"),
          (t.NODE_DROP = "node:drop"),
          (t.NODE_DRAGOVER = "node:dragover"),
          (t.NODE_DRAGENTER = "node:dragenter"),
          (t.NODE_DRAGLEAVE = "node:dragleave"),
          (t.NODE_DRAGSTART = "node:dragstart"),
          (t.NODE_DRAG = "node:drag"),
          (t.NODE_DRAGEND = "node:dragend"),
          (t.NODE_TAP = "node:tap"),
          (t.NODE_DBLTAP = "node:dbltap"),
          (t.NODE_PANSTART = "node:panstart"),
          (t.NODE_PANMOVE = "node:panmove"),
          (t.NODE_PANEND = "node:panend"),
          (t.NODE_PRESS = "node:press"),
          (t.COMBO_CLICK = "combo:click"),
          (t.COMBO_DBLCLICK = "combo:dblclick"),
          (t.COMBO_DROP = "combo:drop"),
          (t.COMBO_DRAGOVER = "combo:dragover"),
          (t.COMBO_DRAGENTER = "combo:dragenter"),
          (t.COMBO_DRAGLEAVE = "combo:dragleave"),
          (t.COMBO_DRAGSTART = "combo:dragstart"),
          (t.COMBO_DRAG = "combo:drag"),
          (t.COMBO_DRAGEND = "combo:dragend"),
          (t.COMBO_TAP = "combo:tap"),
          (t.COMBO_DBLTAP = "combo:dbltap"),
          (t.COMBO_PANSTART = "combo:panstart"),
          (t.COMBO_PANMOVE = "combo:panmove"),
          (t.COMBO_PANEND = "combo:panend"),
          (t.COMBO_PRESS = "combo:press"),
          (t.EDGE_CLICK = "edge:click"),
          (t.EDGE_DBLCLICK = "edge:dblclick"),
          (t.EDGE_DROP = "edge:drop"),
          (t.EDGE_DRAGOVER = "edge:dragover"),
          (t.EDGE_DRAGENTER = "edge:dragenter"),
          (t.EDGE_DRAGLEAVE = "edge:dragleave"),
          (t.EDGE_TAP = "edge:tap"),
          (t.EDGE_DBLTAP = "edge:dbltap"),
          (t.EDGE_PRESS = "edge:press"),
          (t.CANVAS_CLICK = "canvas:click"),
          (t.CANVAS_DBLCLICK = "canvas:dblclick"),
          (t.CANVAS_DROP = "canvas:drop"),
          (t.CANVAS_DRAGENTER = "canvas:dragenter"),
          (t.CANVAS_DRAGLEAVE = "canvas:dragleave"),
          (t.CANVAS_DRAGSTART = "canvas:dragstart"),
          (t.CANVAS_DRAG = "canvas:drag"),
          (t.CANVAS_DRAGEND = "canvas:dragend"),
          (t.CANVAS_TAP = "canvas:tap"),
          (t.CANVAS_DBLTAP = "canvas:dbltap"),
          (t.CANVAS_PANSTART = "canvas:panstart"),
          (t.CANVAS_PANMOVE = "canvas:panmove"),
          (t.CANVAS_PANEND = "canvas:panend"),
          (t.CANVAS_PRESS = "canvas:press"),
          (t.BEFORERENDER = "beforerender"),
          (t.AFTERRENDER = "afterrender"),
          (t.BEFOREADDITEM = "beforeadditem"),
          (t.AFTERADDITEM = "afteradditem"),
          (t.BEFOREREMOVEITEM = "beforeremoveitem"),
          (t.AFTERREMOVEITEM = "afterremoveitem"),
          (t.BEFOREUPDATEITEM = "beforeupdateitem"),
          (t.AFTERUPDATEITEM = "afterupdateitem"),
          (t.BEFOREITEMVISIBILITYCHANGE = "beforeitemvisibilitychange"),
          (t.AFTERITEMVISIBILITYCHANGE = "afteritemvisibilitychange"),
          (t.BEFOREITEMSTATECHANGE = "beforeitemstatechange"),
          (t.AFTERITEMSTATECHANGE = "afteritemstatechange"),
          (t.BEFOREITEMREFRESH = "beforeitemrefresh"),
          (t.AFTERITEMREFRESH = "afteritemrefresh"),
          (t.BEFOREITEMSTATESCLEAR = "beforeitemstatesclear"),
          (t.AFTERITEMSTATESCLEAR = "afteritemstatesclear"),
          (t.BEFOREMODECHANGE = "beforemodechange"),
          (t.AFTERMODECHANGE = "aftermodechange"),
          (t.BEFORELAYOUT = "beforelayout"),
          (t.AFTERLAYOUT = "afterlayout"),
          (t.BEFORECREATEEDGE = "beforecreateedge"),
          (t.AFTERCREATEEDGE = "aftercreateedge"),
          (t.BEFOREGRAPHREFRESHPOSITION = "beforegraphrefreshposition"),
          (t.AFTERGRAPHREFRESHPOSITION = "aftergraphrefreshposition"),
          (t.BEFOREGRAPHREFRESH = "beforegraphrefresh"),
          (t.AFTERGRAPHREFRESH = "aftergraphrefresh"),
          (t.BEFOREANIMATE = "beforeanimate"),
          (t.AFTERANIMATE = "afteranimate"),
          (t.BEFOREPAINT = "beforepaint"),
          (t.AFTERPAINT = "afterpaint"),
          (t.BEFORECOLLAPSEEXPANDCOMBO = "beforecollapseexpandcombo"),
          (t.AFTERCOLLAPSEEXPANDCOMBO = "aftercollapseexpandcombo"),
          (t.GRAPHSTATECHANGE = "graphstatechange"),
          (t.AFTERACTIVATERELATIONS = "afteractivaterelations"),
          (t.NODESELECTCHANGE = "nodeselectchange"),
          (t.TOOLTIPCHANGE = "tooltipchange"),
          (t.WHEELZOOM = "wheelzoom"),
          (t.VIEWPORTCHANGE = "viewportchange"),
          (t.DRAGNODEEND = "dragnodeend"),
          (t.STACKCHANGE = "stackchange");
      })(Ri || (Ri = {}));
      Yi.registerNode,
        Yi.registerEdge,
        Yi.registerCombo,
        en.registerBehavior,
        Yi.registerNode,
        Yi.registerEdge,
        Yi.registerCombo,
        en.registerBehavior;
      var Wi = Xi.pointLineDistance,
        Gi = { stroke: "#FA8C16", lineWidth: 1 },
        qi = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.getDefaultCfgs = function () {
              return {
                line: Gi,
                itemAlignType: "center",
                tolerance: 5,
                horizontalLines: {},
                verticalLines: {},
                alignLines: [],
              };
            }),
            (e.prototype.init = function () {}),
            (e.prototype.getEvents = function () {
              return {
                "node:dragstart": "onDragStart",
                "node:drag": "onDrag",
                "node:dragend": "onDragEnd",
              };
            }),
            (e.prototype.onDragStart = function () {
              this.initBoxLine();
            }),
            (e.prototype.onDrag = function (t) {
              var e = t.item,
                n = (e.get("delegateShape") || e).getBBox(),
                r = e.getModel(),
                i = r.x - n.x,
                o = r.y - n.y;
              this.show(
                { x: n.minX + i, y: n.minY + o },
                { width: n.width, height: n.height },
              );
            }),
            (e.prototype.onDragEnd = function () {
              this.destory();
            }),
            (e.prototype.initBoxLine = function () {
              var t = this._cfgs,
                e = t.horizontalLines,
                n = t.verticalLines,
                r = t.itemAlignType;
              this.get("graph")
                .getNodes()
                .forEach(function (t) {
                  var i = t.getBBox(),
                    o = t.get("id");
                  !0 === r || "horizontal" === r
                    ? ((e[o + "tltr"] = [i.minX, i.minY, i.maxX, i.minY, t]),
                      (e[o + "lcrc"] = [
                        i.minX,
                        i.centerY,
                        i.maxX,
                        i.centerY,
                        t,
                      ]),
                      (e[o + "blbr"] = [i.minX, i.maxY, i.maxX, i.maxY, t]))
                    : "center" === r &&
                      (e[o + "lcrc"] = [
                        i.minX,
                        i.centerY,
                        i.maxX,
                        i.centerY,
                        t,
                      ]),
                    !0 === r || "vertical" === r
                      ? ((n[o + "tlbl"] = [i.minX, i.minY, i.minX, i.maxY, t]),
                        (n[o + "tcbc"] = [
                          i.centerX,
                          i.minY,
                          i.centerX,
                          i.maxY,
                          t,
                        ]),
                        (n[o + "trbr"] = [i.maxX, i.minY, i.maxX, i.maxY, t]))
                      : "center" === r &&
                        (n[o + "tcbc"] = [
                          i.centerX,
                          i.minY,
                          i.centerX,
                          i.maxY,
                          t,
                        ]);
                });
            }),
            (e.prototype.show = function (t, e) {
              var n = Object(gt.C)({}, t);
              return this.itemAlign(t, e, n), t;
            }),
            (e.prototype.itemAlign = function (t, e, n) {
              var r = this,
                i = this._cfgs,
                o = i.horizontalLines,
                a = i.verticalLines,
                s = i.tolerance,
                u = { x: n.x + e.width / 2, y: n.y },
                c = { x: n.x + e.width / 2, y: n.y + e.height / 2 },
                h = { x: n.x + e.width / 2, y: n.y + e.height },
                l = { x: n.x, y: n.y + e.height / 2 },
                d = { x: n.x + e.width, y: n.y + e.height / 2 },
                f = [],
                p = [],
                g = null;
              if (
                (this.clearAlignLine(),
                Object(gt.e)(o, function (t) {
                  t[4].isVisible &&
                    (f.push(r.getLineDisObject(t, u)),
                    f.push(r.getLineDisObject(t, c)),
                    f.push(r.getLineDisObject(t, h)));
                }),
                Object(gt.e)(a, function (t) {
                  t[4].isVisible &&
                    (p.push(r.getLineDisObject(t, l)),
                    p.push(r.getLineDisObject(t, c)),
                    p.push(r.getLineDisObject(t, d)));
                }),
                f.sort(function (t, e) {
                  return t.dis - e.dis;
                }),
                p.sort(function (t, e) {
                  return t.dis - e.dis;
                }),
                0 !== f.length && f[0].dis < s)
              ) {
                (t.y = f[0].line[1] - f[0].point.y + n.y),
                  (g = { type: "item", horizontals: [f[0]] });
                for (var y = 1; y < 3; y++)
                  f[0].dis === f[y].dis && g.horizontals.push(f[y]);
              }
              if (0 !== p.length && p[0].dis < s) {
                (t.x = p[0].line[0] - p[0].point.x + n.x),
                  g
                    ? (g.verticals = [p[0]])
                    : (g = { type: "item", verticals: [p[0]] });
                for (y = 1; y < 3; y++)
                  p[0].dis === p[y].dis && g.verticals.push(p[y]);
              }
              g && ((g.bbox = e), this.addAlignLine(g));
            }),
            (e.prototype.addAlignLine = function (t) {
              var e = t.bbox,
                n = t.type,
                r = t.horizontals,
                i = t.verticals,
                o = this._cfgs,
                a = o.line,
                s = o.alignLines,
                u = this.get("graph").get("group");
              "item" === n &&
                (r &&
                  Object(gt.e)(r, function (t) {
                    var n,
                      r,
                      i = t.line,
                      o = t.point,
                      c = (i[0] + i[2]) / 2;
                    o.x < c
                      ? ((n = o.x - e.width / 2), (r = Math.max(i[0], i[2])))
                      : ((n = o.x + e.width / 2), (r = Math.min(i[0], i[2])));
                    var h = Object(gt.C)(
                        { x1: n, y1: i[1], x2: r, y2: i[1] },
                        a,
                      ),
                      l = u.addShape("line", { attrs: h, capture: !1 });
                    s.push(l);
                  }),
                i &&
                  Object(gt.e)(i, function (t) {
                    var n,
                      r,
                      i = t.line,
                      o = t.point,
                      c = (i[1] + i[3]) / 2;
                    o.y < c
                      ? ((n = o.y - e.height / 2), (r = Math.max(i[1], i[3])))
                      : ((n = o.y + e.height / 2), (r = Math.min(i[1], i[3])));
                    var h = Object(gt.C)(
                        { x1: i[0], y1: n, x2: i[0], y2: r },
                        a,
                      ),
                      l = u.addShape("line", { attrs: h, capture: !1 });
                    s.push(l);
                  }));
            }),
            (e.prototype.getLineDisObject = function (t, e) {
              return { line: t, point: e, dis: Wi(t, e) };
            }),
            (e.prototype.getContainer = function () {
              return this.get("container");
            }),
            (e.prototype.clearAlignLine = function () {
              var t = this._cfgs.alignLines;
              Object(gt.e)(t, function (t) {
                t.remove();
              }),
                (t.length = 0);
            }),
            (e.prototype.destory = function () {
              var t = this._cfgs,
                e = t.horizontalLines,
                n = t.verticalLines;
              this.get("graph")
                .getNodes()
                .forEach(function (t) {
                  var r = t.get("id");
                  delete e[r + "tltr"],
                    delete e[r + "lcrc"],
                    delete e[r + "blbr"],
                    delete n[r + "tlbl"],
                    delete n[r + "tcbc"],
                    delete n[r + "trbr"];
                }),
                this.clearAlignLine();
            }),
            e
          );
        })(Qe);
      var Hi = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          Object(h.c)(e, t),
          (e.prototype.getDefaultCfgs = function () {
            return {
              offsetX: 6,
              offsetY: 6,
              getContent: function (t) {
                var e, n;
                return (
                  "\n          <div class=\"f6-tooltip-container\">\n            <div class='tooltip-type'>类型：" +
                  (null === (e = t.item) || void 0 === e
                    ? void 0
                    : e.getType()) +
                  "</div>\n            <div class='tooltip-id'>ID：" +
                  (null === (n = t.item) || void 0 === n ? void 0 : n.getID()) +
                  "</div>\n          </div>\n        "
                );
              },
              getCss: function () {
                return "\n        .f6-tooltip-container {\n          position: absolute;\n          width: 200;\n          border: 1 solid #e2e2e2;\n          border-radius: 4;\n          font-size: 12;\n          color: #545454;\n          background-color: rgba(255, 255, 255, 0.9);\n          padding: 10 8;\n        }\n    \n        .f6-tooltip-container div{\n          height: 20;\n        }\n        \n        .tooltip-type {\n          padding: 0;\n          margin: 0;\n        }\n        .tooltip-id {\n          color: #531dab;\n        }\n      ";
              },
              shouldBegin: function (t) {
                return !0;
              },
              itemTypes: ["node", "edge", "combo"],
              trigger: "mouseenter",
              fixToNode: void 0,
            };
          }),
          (e.prototype.getEvents = function () {
            return "click" === this.get("trigger")
              ? {
                  "node:tap": "onClick",
                  "edge:tap": "onClick",
                  "combo:tap": "onClick",
                  "canvas:tap": "onMouseLeave",
                  afterremoveitem: "onMouseLeave",
                  contextmenu: "onMouseLeave",
                  drag: "onMouseLeave",
                }
              : {
                  "node:press": "onClick",
                  "edge:press": "onClick",
                  "combo:press": "onClick",
                  "canvas:press": "onMouseLeave",
                  "node:tap": "onMouseLeave",
                  "edge:tap": "onMouseLeave",
                  "combo:tap": "onMouseLeave",
                  "canvas:tap": "onMouseLeave",
                  afterremoveitem: "onMouseLeave",
                  contextmenu: "onMouseLeave",
                  drag: "onMouseLeave",
                };
          }),
          (e.prototype.onClick = function (t) {
            var e = this.get("itemTypes");
            if (
              !t.item ||
              !t.item.getType ||
              -1 !== e.indexOf(t.item.getType())
            ) {
              var n = t.item,
                r = this.get("graph");
              this.currentTarget === n
                ? ((this.currentTarget = null),
                  this.hideTooltip(),
                  r.emit("tooltipchange", { item: t.item, action: "hide" }))
                : ((this.currentTarget = n),
                  this.showTooltip(t),
                  r.emit("tooltipchange", { item: t.item, action: "show" }));
            }
          }),
          (e.prototype.onMouseEnter = function (t) {
            var e = this.get("itemTypes");
            if (
              !t.item ||
              !t.item.getType ||
              -1 !== e.indexOf(t.item.getType())
            ) {
              var n = t.item,
                r = this.get("graph");
              (this.currentTarget = n),
                this.showTooltip(t),
                r.emit("tooltipchange", { item: t.item, action: "show" });
            }
          }),
          (e.prototype.onMouseMove = function (t) {
            var e = this.get("itemTypes");
            (t.item && t.item.getType && -1 === e.indexOf(t.item.getType())) ||
              (this.currentTarget &&
                t.item === this.currentTarget &&
                this.showTooltip(t));
          }),
          (e.prototype.onMouseLeave = function () {
            this.hideTooltip(),
              this.get("graph").emit("tooltipchange", {
                item: this.currentTarget,
                action: "hide",
              }),
              (this.currentTarget = null);
          }),
          (e.prototype.showTooltip = function (t) {
            var e, n, r;
            if (t.item) {
              var i = this.get("itemTypes");
              if (!t.item.getType || -1 !== i.indexOf(t.item.getType())) {
                var o,
                  a,
                  s = this.get("graph").get("uiGroup"),
                  u = H(
                    (void 0 ===
                      (o =
                        null === (e = this.get("getContent")) || void 0 === e
                          ? void 0
                          : e(t)) && (o = ""),
                    "\n  <root> \n    " + o + "\n  </root>"),
                    (void 0 ===
                      (a =
                        null === (n = this.get("getCss")) || void 0 === n
                          ? void 0
                          : n()) && (a = ""),
                    "\n    text {\n      opacity: 1\n    }\n    " + a + "\n  "),
                    s,
                  );
                null === (r = this.get("tooltip")) ||
                  void 0 === r ||
                  r.remove(),
                  this.set("tooltip", u),
                  this.updatePosition(t);
              }
            }
          }),
          (e.prototype.hideTooltip = function () {
            var t = this.get("tooltip");
            t && t.setStyle("display", "none");
          }),
          (e.prototype.updatePosition = function (t) {
            var e = this.get("shouldBegin"),
              n = this.get("tooltip");
            if (e(t)) {
              var r = this.get("graph"),
                i = r.get("width"),
                o = r.get("height"),
                a = this.get("offsetX") || 0,
                s = this.get("offsetY") || 0,
                u = r.getPointByClient(t.clientX, t.clientY),
                c = this.get("fixToNode"),
                h = t.item;
              if (
                h.getType &&
                "node" === h.getType() &&
                c &&
                Object(gt.m)(c) &&
                c.length >= 2
              ) {
                var l = h.getBBox();
                u = { x: l.minX + l.width * c[0], y: l.minY + l.height * c[1] };
              }
              var d = r.getCanvasByPoint(u.x, u.y),
                f = d.x,
                p = d.y,
                g = { x: f + a, y: p + s };
              n.setStyle("display", "flex"),
                f + n.width + a > i && (g.x -= n.width + a),
                p + n.height + s > o && (g.y -= n.height + s),
                n.setStyle("left", g.x),
                n.setStyle("top", g.y);
            } else this.hideTooltip();
          }),
          (e.prototype.hide = function () {
            this.onMouseLeave();
          }),
          (e.prototype.destroy = function () {
            var t = this.get("tooltip");
            t && t.remove();
          }),
          e
        );
      })(Qe);
      function Vi(t, e, n) {
        var r,
          i = t.type,
          o = (function (t) {
            var e, n, r;
            t.size &&
              (Array.isArray(t.size)
                ? ((e = t.size[0]),
                  (n = t.size[1] || t.size[0]),
                  (r = t.size[0] / 2))
                : "number" == typeof t.size &&
                  ((e = t.size), (n = t.size), (r = t.size / 2)));
            t.style &&
              (t.style.width && (e = t.style.width),
              t.style.height && (n = t.style.height),
              t.style.r && (r = t.style.r));
            r || (r = 5);
            e || (e = r);
            n || (n = r);
            return { width: e, height: n, r: r };
          })(t),
          a = o.width,
          s = o.height,
          u = o.r;
        switch (t.type) {
          case "circle":
            r = { r: u, x: 0, y: 0 };
            break;
          case "rect":
            r = { width: a, height: s, x: -a / 2, y: -s / 2 };
            break;
          case "ellipse":
            r = { r1: a, r2: s, x: 0, y: 0 };
            break;
          case "line":
            (r = { x1: -a / 2, y1: 0, x2: a / 2, y2: 0 }), (i = "line");
            break;
          case "quadratic":
            (r = {
              path: [
                ["M", -a / 2, 0],
                ["Q", 0, a / 2, a / 2, 0],
              ],
            }),
              (i = "path");
            break;
          case "cubic":
            (r = {
              path: [
                ["M", -a / 2, 0],
                ["C", -a / 6, a / 2, a / 6, -a / 2, a / 2, 0],
              ],
            }),
              (i = "path");
            break;
          default:
            r = { r: u, x: 0, y: 0 };
        }
        var c =
            "\n  <div class='node-container' orignStyle=" +
            JSON.stringify(e) +
            " legendId=" +
            t.id +
            ">\n    <shape type='" +
            i +
            "' class='" +
            t.type +
            "-node-keyShape' \n      " +
            Object.entries(r).reduce(function (t, e) {
              return t + " " + e[0] + "=" + e[1] + " ";
            }, "") +
            "\n    />\n    " +
            (t.label && " <div class='text'>" + t.label + "</div>") +
            "\n  </div>\n",
          l = Object(h.a)(
            {
              textAlign: "begin",
              fontSize: 12,
              fill: "#000",
              opacity: 1,
              fontWeight: "normal",
            },
            t.labelStyle,
          );
        return V(
          c,
          "\n    .node-container {\n      width: " +
            n.width +
            ";\n      height: " +
            (n.height || Math.max(s, n.fontSize)) +
            ";\n      display: flex;\n      flex-direction: row;\n      justify-content: center;\n      align-items: center;\n      background-opacity: 0;\n      font-size: " +
            l.fontSize +
            ";\n      margin: " +
            n.margin +
            "\n    }\n    shape {\n      top: " +
            s / 2 +
            ";\n      left: " +
            a / 2 +
            ";\n      width: " +
            a +
            ";\n      height: " +
            s +
            ";\n      background: " +
            e.fill +
            ";\n      border: " +
            (e.lineWidth || "1") +
            " solid " +
            e.stroke +
            ";\n      margin-right: 3;\n    }\n    .text {\n      flex: 1;\n      height: " +
            (l.fontSize + 2) +
            ";\n      color: " +
            l.fill +
            ";\n      background-opacity: 0;\n      pointer-events: none;\n      text-align: " +
            l.textAlign +
            ";\n      font-weight: " +
            l.fontWeight +
            "\n    }\n    text {\n      opacity: " +
            l.opacity +
            ";\n      white-space: nowrap;\n    }\n",
        );
      }
      var Ui = ["click", "mouseenter"],
        Zi = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.active = []), (n.inActive = []), n;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.getDefaultCfgs = function () {
              return {
                data: {},
                position: "top",
                padding: 0,
                margin: 0,
                offsetX: -10,
                offsetY: 0,
                layout: "horizontal",
                containerStyle: {},
                align: void 0,
                filter: { enable: !1, trigger: "click" },
                itemConfig: { width: 100, height: 50, fontSize: 12 },
              };
            }),
            (e.prototype.init = function () {
              var t = this;
              this.formatArray("padding"),
                this.formatArray("margin"),
                (this.get("filter") || {}).multiple && this.set("multiple", !1);
              var e = this.get("align");
              if (!e) {
                var n = this.get("position").split("-");
                n.includes("left") && (e = "left"),
                  (e = n.includes("right") ? "right" : "center"),
                  this.set("align", e);
              }
              setTimeout(function () {
                var e = t.render(),
                  n = t.getContainerPos(e);
                t.get("graph").get("uiGroup").translate(n.left, n.top),
                  t.bindEvents();
              });
            }),
            (e.prototype.getContainerPos = function (t) {
              void 0 === t && (t = [0, 0]);
              var e = this.get("graph"),
                n = this.get("offsetX"),
                r = this.get("offsetY"),
                i = this.get("margin"),
                o = this.get("position").split("-"),
                a = { top: 0, right: 1, bottom: 2, left: 3 },
                s = {
                  left: (e.getWidth() - t[0]) / 2 + 0,
                  top: (e.getHeight() - t[1]) / 2 + 0,
                };
              return (
                o.forEach(function (n) {
                  var r = i[a[n]],
                    o = n;
                  switch (n) {
                    case "top":
                    case "left":
                      r += 0;
                      break;
                    case "bottom":
                      (r = e.getHeight() - t[1] - r + 0), (o = "top");
                      break;
                    default:
                      (r = e.getWidth() - t[0] - r + 0), (o = "left");
                  }
                  s[o] = r;
                }),
                (s.top += r),
                (s.left += n),
                Object.keys(s).forEach(function (t) {
                  s[t] = "" + s[t];
                }),
                s
              );
            }),
            (e.prototype.bindEvents = function () {
              var t = this,
                e = t.get("filter");
              if (e && e.enable) {
                var n = e.trigger || "click";
                Ui.includes(n) ||
                  (console.warn(
                    "Trigger for legend filterling must be 'click' or 'mouseenter', 'click' will take effect by default.",
                  ),
                  (n = "click")),
                  this.get("legendUI").on("tap", function (e) {
                    var n;
                    "node-container" ===
                    (null === (n = null == e ? void 0 : e.uiNode) ||
                    void 0 === n
                      ? void 0
                      : n.getAttribute("class"))
                      ? t.filterData(e.uiNode)
                      : (t.clearFilter(), t.clearActiveLegend());
                  });
              }
            }),
            (e.prototype.changeData = function (t) {
              this.set("data", t);
              var e = this.render(),
                n = this.getContainerPos(e);
              this.get("graph").get("uiGroup").translate(n.left, n.top);
            }),
            (e.prototype.goActive = function (t) {
              this.goDefault(t);
              var e = this.get("filter"),
                n = (null == e ? void 0 : e.lengedStateStyles) || {},
                r = (null == n ? void 0 : n.active) || {
                  stroke: "#000",
                  lineWidth: 2,
                  "text-shape": { fontWeight: "bold", opacity: 1 },
                };
              t.query("shape").setStyle("borderColor", r.stroke),
                t.query("shape").setStyle("borderWidth", r.lineWidth),
                t
                  .query("text")
                  .setStyle("fontWeight", r["text-shape"].fontWeight),
                t.query("text").setStyle("opacity", r["text-shape"].opacity),
                this.active.push(t),
                this.inActive.includes(t) &&
                  this.inActive.splice(this.inActive.indexOf(t), 1);
            }),
            (e.prototype.goDefault = function (t) {
              var e = t.getAttribute("orignStyle");
              t.query("shape").setStyle("borderColor", e.stroke),
                t.query("shape").setStyle("opacity", 1),
                t.query("shape").setStyle("borderWidth", e.lineWidth || 1),
                t.query("text").setStyle("fontWeight", "normal"),
                t.query("text").setStyle("opacity", 1);
            }),
            (e.prototype.goInActive = function (t) {
              this.goDefault(t);
              var e = this.get("filter"),
                n = (null == e ? void 0 : e.lengedStateStyles) || {},
                r = (null == n ? void 0 : n.inactive) || {
                  opacity: 0.5,
                  "text-shape": { opacity: 0.5 },
                };
              t.query("shape").setStyle("opacity", r.opacity),
                t.query("text").setStyle("opacity", r["text-shape"].opacity),
                this.inActive.push(t),
                this.active.includes(t) &&
                  this.active.splice(this.active.indexOf(t), 1);
            }),
            (e.prototype.activateLegend = function (t) {
              var e = this,
                n = this.get("filter");
              if (
                ((null == n ? void 0 : n.multiple) || this.clearActiveLegend(),
                !this.active.includes(t))
              ) {
                var r = this.get("legendUI").queryAll(".node-container");
                this.goActive(t),
                  r.forEach(function (t) {
                    e.active.includes(t) || e.goInActive(t);
                  });
              }
            }),
            (e.prototype.clearActiveLegend = function () {
              var t = this;
              this.get("legendUI")
                .queryAll(".node-container")
                .forEach(function (e) {
                  t.goDefault(e);
                }),
                (this.active = []),
                (this.inActive = []);
            }),
            (e.prototype.filterData = function (t) {
              var e = this,
                n = this.get("filter"),
                r = null == n ? void 0 : n.filterFunctions;
              if (n && r) {
                var i = this.get("graph"),
                  o = n.graphActiveState || "active",
                  a = n.graphInactiveState || "inactive",
                  s = n.multiple;
                if (
                  (this.clearFilter(),
                  s || this.clearActiveLegend(),
                  this.active.includes(t)
                    ? this.goInActive(t)
                    : this.activateLegend(t),
                  0 === this.active.length)
                )
                  this.get("legendUI")
                    .queryAll(".node-container")
                    .forEach(function (t) {
                      return e.goDefault(t);
                    });
                var u = 0,
                  c = ["getNodes", "getEdges"];
                c.forEach(function (t) {
                  i[t]().forEach(function (t) {
                    var n = !1;
                    e.active.forEach(function (e) {
                      var i = r[e.getAttribute("legendId")];
                      n = n || i(t.getModel());
                    }),
                      n
                        ? (i.setItemState(t, a, !1),
                          i.setItemState(t, o, !0),
                          u++)
                        : (i.setItemState(t, o, !1), i.setItemState(t, a, !0));
                  });
                }),
                  u ||
                    c.forEach(function (t) {
                      i[t]().forEach(function (t) {
                        i.clearItemStates(t, [a]);
                      });
                    });
              }
            }),
            (e.prototype.clearFilter = function () {
              var t = this.get("graph"),
                e = this.get("filter");
              if (e) {
                var n = e.graphActiveState || "active",
                  r = e.graphInactiveState || "inactive";
                t.getNodes().forEach(function (e) {
                  t.clearItemStates(e, [n, r]);
                }),
                  t.getEdges().forEach(function (e) {
                    t.clearItemStates(e, [n, r]);
                  });
              }
            }),
            (e.prototype.render = function () {
              var t,
                e,
                n = this;
              this.processData();
              var r = this.get("itemsData"),
                i = [[], []];
              ["nodes", "edges"].forEach(function (t, e) {
                r[t].forEach(function (r) {
                  var o = n.getStyle(t.substr(0, 4), r);
                  i[e].push(Vi(r, o, n.get("itemConfig")));
                });
              });
              var o = this.get("title"),
                a =
                  " \n    <div class='g6-legend-container'>\n      " +
                  (o && "<div class='text-container'>" + o + "</div>") +
                  "\n      <div class='node-wrap'>\n        <div class='node-row'> </div>\n        <div class='edge-row'> </div>\n      </div>  \n    </div>",
                s = this.get("titleConfig") || {},
                u = Object.assign(
                  {
                    fontSize: 20,
                    fontFamily: "Arial",
                    fontWeight: 300,
                    textBaseline: "top",
                    textAlign: "center",
                    fill: "#000",
                  },
                  s.style || {},
                ),
                c = this.get("containerStyle"),
                h = this.get("padding"),
                l = this.get("margin"),
                d = H(
                  a,
                  "\n      .g6-legend-container{\n        width: " +
                    this.get("width") +
                    ";\n        height: " +
                    this.get("height") +
                    ";\n        padding: " +
                    h.join(" ") +
                    ";\n        margin: " +
                    l.join(" ") +
                    ";\n        background: " +
                    (c.fill || "#f00") +
                    ";\n        border: " +
                    (c.lineWidth || "1") +
                    " solid " +
                    (c.stroke || "#000") +
                    ";\n        opacity: " +
                    (c.opacity || "0.5") +
                    "\n      }\n      .text-container {\n        font-size: " +
                    u.fontSize +
                    ";\n        font-family: " +
                    u.fontFamily +
                    ";\n        font-weight: " +
                    u.fontWeight +
                    ";\n        text-align: " +
                    u.textAlign +
                    ";\n        color: " +
                    u.fill +
                    ";\n        height: " +
                    u.fontSize +
                    ";\n        background-opacity: 0;\n        top:  " +
                    s.offsetY +
                    ";\n        left: " +
                    s.offsetX +
                    ";\n      }\n      .edge-row, .node-row {\n        display: flex;\n        flex-direction: " +
                    ("vertical" === this.get("layout") ? "column" : "row") +
                    ";\n        flex-wrap: nowrap;\n        justify-content: space-between;\n        background-opacity: 0;\n      }\n      .node-wrap {\n        flex: 1;\n        flex-direction: " +
                    ("vertical" === this.get("layout") ? "row" : "column") +
                    ";\n        justify-content: space-between;\n        background-opacity: 0;\n      }\n    ",
                  this.get("graph").get("uiGroup"),
                );
              return (
                (t = d.query(".node-row")).appendChild.apply(t, i[0]),
                (e = d.query(".edge-row")).appendChild.apply(e, i[1]),
                this.set("legendUI", d),
                [d.width, d.height]
              );
            }),
            (e.prototype.processData = function () {
              var t = this.get("data"),
                e = { nodes: [], edges: [] };
              t.nodes &&
                (t.nodes.sort(function (t, e) {
                  return t.order - e.order;
                }),
                t.nodes.forEach(function (t) {
                  var n,
                    r,
                    i,
                    o,
                    a,
                    s = t.size || [
                      (null === (n = t.style) || void 0 === n
                        ? void 0
                        : n.width) ||
                        (null === (r = t.style) || void 0 === r
                          ? void 0
                          : r.r) ||
                        8,
                      (null === (i = t.style) || void 0 === i
                        ? void 0
                        : i.height) ||
                        (null === (o = t.style) || void 0 === o
                          ? void 0
                          : o.r) ||
                        8,
                    ],
                    u =
                      (null === (a = t.labelCfg) || void 0 === a
                        ? void 0
                        : a.style) || {};
                  e.nodes.push({
                    id: t.id || Object(gt.I)(),
                    type: t.type || "circle",
                    style: Object(h.a)({}, t.style),
                    order: t.order,
                    label: t.label,
                    itemType: "node",
                    size: s,
                    labelCfg: {
                      position: "right",
                      style: Object(h.a)({ fontFamily: "Arial" }, u),
                    },
                  });
                })),
                t.edges &&
                  (t.edges.sort(function (t, e) {
                    return t.order - e.order;
                  }),
                  t.edges.forEach(function (t) {
                    var n,
                      r,
                      i = t.type || "line";
                    "cubic-horizontal" === t.type && (i = "cubic");
                    var o =
                        (null === (n = t.labelCfg) || void 0 === n
                          ? void 0
                          : n.style) || {},
                      a = t.size || [
                        (null === (r = t.style) || void 0 === r
                          ? void 0
                          : r.width) || 8,
                        1,
                      ];
                    e.edges.push({
                      id: t.id || Object(gt.I)(),
                      type: i,
                      size: a,
                      style: Object(h.a)(
                        { lineWidth: Object(gt.m)(a) ? a[1] : 1 },
                        t.style,
                      ),
                      order: t.order,
                      label: t.label,
                      itemType: "edge",
                      labelCfg: {
                        position: "right",
                        style: Object(h.a)({ fontFamily: "Arial" }, o),
                      },
                    });
                  })),
                this.set("itemsData", e);
            }),
            (e.prototype.formatArray = function (t) {
              var e = this.get(t);
              if (Object(gt.t)(e)) this.set(t, [e, e, e, e]);
              else if (Object(gt.m)(e))
                switch (e.length) {
                  case 0:
                    this.set(t, [0, 0, 0, 0]);
                    break;
                  case 1:
                    this.set(t, [e[0], e[0], e[0], e[0]]);
                    break;
                  case 2:
                    this.set(t, [e[0], e[1], e[0], e[1]]);
                    break;
                  case 3:
                    this.set(t, [e[0], e[1], e[2], e[1]]);
                }
              return this.get(t);
            }),
            (e.prototype.getStyle = function (t, e) {
              var n =
                "node" === t
                  ? { fill: "#ccc", lineWidth: 0 }
                  : { stroke: "#000", lineWidth: 1 };
              return Object(h.a)(Object(h.a)({}, n), e.style || {});
            }),
            (e.prototype.destroy = function () {
              var t = this.get("graph").get("container"),
                e = this.get("container");
              t.removeChild(e);
            }),
            e
          );
        })(Qe),
        Ki = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.getDefaultCfgs = function () {
              var t = this;
              return {
                minZoom: 0.5,
                maxZoom: 3,
                sliderWidthPercent: 0.3,
                dragTimestamp: +new Date(),
                getContent: function () {
                  return '\n          <root class="f6-zoom-slider">\n            <div class="rail"></div>\n            <div class="track"></div>\n            <div class="handle">\n              <div class="text">1 times</div>\n              <div class="circle"></div>\n            </div>\n          </root>\n        ';
                },
                getCss: function () {
                  var e = t.get("graph"),
                    n = e.get("width"),
                    r = e.get("height"),
                    i = t.get("minZoom"),
                    o = t.get("maxZoom"),
                    a = t.get("sliderWidthPercent"),
                    s = Math.floor(n * a),
                    u = s * ((1 - i) / (o - i));
                  return (
                    "\n          .f6-zoom-slider {\n            width: " +
                    s +
                    ";\n            height: 30;\n            margin-left: " +
                    Math.floor((n * (1 - a)) / 2) +
                    ";\n            padding: 13 0;\n            top: " +
                    (r - 40) +
                    ";\n            position: relative;\n            opacity: 0;\n          }\n\n          .rail {\n            width: " +
                    s +
                    ";\n            height: 4;\n            background-color: #f5f5f5;\n            border-radius: 2;\n            opacity: 1;\n          }\n\n          .track {\n            width: " +
                    (u + 2) +
                    ";\n            height: 4;\n            background-color: #91d5ff;\n            position: absolute;\n            top: 13;\n            border-radius: 2;\n            opacity: 1;\n          }\n\n          .handle {\n            height: 30;\n            width: 40;\n            position: absolute;\n            top: 0;\n            left: " +
                    (u - 9) +
                    ";\n            padding: 9;\n            opacity: 0;\n          }\n\n          .circle {\n            height: 13;\n            width: 13;\n            border-radius: 6.5;\n            border: 2px solid #1890ff;\n            background-color: #fff;\n            opacity: 1;\n          }\n\n          .text  {\n            position: absolute;\n            top: -9;\n            margin-left: -12;\n            color: #666;\n            width: 45;\n          }\n        "
                  );
                },
              };
            }),
            (e.prototype.getEvents = function () {
              return { dragstart: "onDragStart", dragend: "onDragEnd" };
            }),
            (e.prototype.init = function () {
              var t = this;
              setTimeout(function () {
                t.initSlider();
              });
            }),
            (e.prototype.initSlider = function () {
              var t = this;
              console.log("initSlider", this);
              var e = this.get("graph").get("uiGroup"),
                n = H(this.get("getContent")(), this.get("getCss")(), e),
                r = n.query(".handle"),
                i = 0;
              r.on("panstart", function (t) {
                i = t.clientX;
              }),
                r.on("panmove", function (e) {
                  var n = e.clientX - i;
                  (i = e.clientX),
                    t.set("dragTimestamp", +new Date()),
                    t.updateHandlePosition(n);
                }),
                n.setStyle("display", "none"),
                this.set("zoomSlider", n);
            }),
            (e.prototype.onDragStart = function () {
              var t = this.get("graph"),
                e = t.getZoom(),
                n = t.get("width"),
                r = this.get("zoomSlider"),
                i = this.get("minZoom"),
                o = this.get("maxZoom"),
                a = this.get("sliderWidthPercent"),
                s = r.query(".track"),
                u =
                  Math.floor(n * a) * ((e - i) / (o - i)) - s.getStyle("width");
              this.updateHandlePosition(u),
                clearInterval(this.get("clearHandle")),
                r.setStyle("display", "block");
            }),
            (e.prototype.onDragEnd = function () {
              return Object(h.b)(this, void 0, void 0, function () {
                var t,
                  e,
                  n = this;
                return Object(h.d)(this, function (r) {
                  return (
                    (t = this.get("zoomSlider")),
                    clearInterval(this.get("clearHandle")),
                    (e = setInterval(function () {
                      +new Date() - n.get("dragTimestamp") > 3e3 &&
                        (clearInterval(n.get("clearHandle")),
                        t.setStyle("display", "none"));
                    }, 3e3)),
                    this.set("clearHandle", e),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.updateHandlePosition = function (t) {
              var e = this.get("graph"),
                n = this.get("zoomSlider"),
                r = this.get("sliderWidthPercent"),
                i = this.get("minZoom"),
                o = this.get("maxZoom"),
                a = n.query(".track"),
                s = n.query(".handle"),
                u = a.getStyle("width"),
                c = e.get("width") * r,
                h = u + t;
              h < 0 && (h = 0), h > c && (h = c);
              var l = (h / c) * (o - i) + i;
              a.setStyle("width", h),
                s.setStyle("left", h - 9),
                s.setText(Math.round(10 * l) / 10 + " times"),
                this.updateScale(l);
            }),
            (e.prototype.updateScale = function (t) {
              var e = this.get("graph");
              e.zoom(t / e.getZoom());
            }),
            e
          );
        })(Qe),
        Qi = Xi.distance,
        $i = {
          stroke: "#000",
          strokeOpacity: 0.8,
          lineWidth: 2,
          fillOpacity: 1,
          fill: "#fff",
        },
        Ji = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.isUp = !0), (n.scaleTimer = null), n;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.getDefaultCfgs = function () {
              return {
                type: "both",
                trigger: "drag",
                r: 60,
                delegateStyle: Object(gt.b)($i),
                showLabel: "edge",
              };
            }),
            (e.prototype.getEvents = function () {
              var t;
              switch (this.get("trigger")) {
                case "click":
                  t = { tap: "filter" };
                  break;
                case "drag":
                  t = { press: "createDelegate" };
                  break;
                default:
                  t = { mousemove: "filter" };
              }
              return t;
            }),
            (e.prototype.init = function () {
              var t = this.get("showLabel"),
                e = "node" === t || "both" === t,
                n = "edge" === t || "both" === t;
              this.set("showNodeLabel", e),
                this.set("showEdgeLabel", n),
                this.get("shouldShow") ||
                  this.set("shouldShow", function () {
                    return !0;
                  });
            }),
            (e.prototype.createDelegate = function (t) {
              var e = this,
                n = this,
                r = n.get("delegate");
              if (!r || r.destroyed) {
                var i = this.get("graph"),
                  o = i.getPointByClient(t.clientX, t.clientY);
                n.filter(o),
                  (r = n.get("delegate")).on("dragstart", function (t) {}),
                  r.on("drag", function (t) {
                    var e = i.getPointByClient(t.clientX, t.clientY);
                    n.filter(e);
                  }),
                  r.on("dragend", function (t) {
                    e.clear();
                  });
              }
            }),
            (e.prototype.scaleRByWheel = function (t, e) {
              if (t) {
                t.preventDefault && t.preventDefault();
                var n,
                  r = this.get("graph"),
                  i = this.get("delegate");
                (i ? { x: i.attr("x"), y: i.attr("y") } : void 0) ||
                  r.getPointByClient(t.clientX, t.clientY);
                n = e ? 1 / 0.95 : 0.95;
                var o = this.get("maxR"),
                  a = this.get("minR"),
                  s = this.get("r");
                ((s > (o || r.get("height")) && n > 1) ||
                  (s < (a || 0.05 * r.get("height")) && n < 1)) &&
                  (n = 1),
                  (s *= n),
                  this.set("r", s),
                  this.filter(t);
              }
            }),
            (e.prototype.filter = function (t) {
              var e = t.x,
                n = t.y,
                r = this.get("graph"),
                i = r.getNodes(),
                o = {},
                a = this.get("r"),
                s = this.get("type"),
                u = { x: e, y: n };
              this.updateDelegate(u, a);
              var c = this.get("shouldShow"),
                h = this.get("vShapes");
              h &&
                h.forEach(function (t) {
                  t.remove(), t.destroy();
                }),
                (h = []),
                i.forEach(function (t) {
                  var e = t.getModel(),
                    n = e.x,
                    r = e.y;
                  Qi({ x: n, y: r }, u) < a && (o[e.id] = t);
                });
              var l = r.getEdges(),
                d = [];
              l.forEach(function (t) {
                var e = t.getModel(),
                  n = e.source,
                  r = e.target;
                c(e) &&
                  ("only-source" === s || "one" === s
                    ? o[n] && !o[r] && d.push(t)
                    : "only-target" === s || "one" === s
                    ? o[r] && !o[n] && d.push(t)
                    : "both" === s && o[n] && o[r] && d.push(t));
              });
              var f = this.get("showNodeLabel"),
                p = this.get("showEdgelabel"),
                g = r.get("group");
              d.forEach(function (t) {
                t.get("group")
                  .get("children")
                  .forEach(function (t) {
                    var e = t.get("type"),
                      n = g.addShape(e, { attrs: t.attr(), capture: !1 });
                    h.push(n), f && "text" === e && n.set("visible", !0);
                  });
              }),
                Object.keys(o).forEach(function (t) {
                  var e = o[t].get("group").clone();
                  if ((e.set("capture", !1), g.add(e), h.push(e), p))
                    for (var n = e.get("children"), r = 0; r < n.length; r++) {
                      var i = n[r];
                      "text" === i.get("type") && i.set("visible", !0);
                    }
                }),
                this.set("vShapes", h);
            }),
            (e.prototype.updateParams = function (t) {
              var e = t.r,
                n = t.trigger,
                r = t.minR,
                i = t.maxR,
                o = t.showLabel,
                a = t.shouldShow;
              isNaN(t.r) || this.set("r", e),
                isNaN(i) || this.set("maxR", i),
                isNaN(r) || this.set("minR", r),
                "tab" === n && this.set("trigger", n),
                ("node" !== o && "both" !== o) || this.set("showNodeLabel", !0),
                ("edge" !== o && "both" !== o) || this.set("showEdgeLabel", !0),
                a && this.set("shouldShow", a);
            }),
            (e.prototype.updateDelegate = function (t, e) {
              var n = this.get("graph"),
                r = this.get("delegate");
              if (!r || r.destroyed) {
                var i = n.get("group"),
                  o = this.get("delegateStyle") || $i;
                r = i.addShape("circle", {
                  attrs: Object(h.a)({ r: e, x: t.x, y: t.y }, o),
                  name: "lens-shape",
                  draggable: !0,
                  zIndex: 1e3,
                });
              } else r.attr({ x: t.x, y: t.y, r: e });
              this.set("delegate", r);
            }),
            (e.prototype.clear = function () {
              var t = this.get("vShapes");
              t &&
                t.forEach(function (t) {
                  t.remove(), t.destroy();
                }),
                (t = []),
                this.set("vShapes", t);
              var e = this.get("delegate");
              e && !e.destroyed && (e.remove(), e.destroy());
            }),
            (e.prototype.destroy = function () {
              this.clear();
            }),
            e
          );
        })(Qe),
        to = {
          stroke: "#000",
          strokeOpacity: 0.8,
          lineWidth: 2,
          fillOpacity: 0.1,
          fill: "#ccc",
        },
        eo = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.getDefaultCfgs = function () {
              return {
                trigger: "tap",
                d: 1.5,
                r: 300,
                delegateStyle: Object(gt.b)(to),
                showLabel: !1,
                maxD: 5,
                minD: 0,
                scaleRBy: "unset",
                scaleDBy: "unset",
                showDPercent: !0,
              };
            }),
            (e.prototype.getEvents = function () {
              var t;
              switch (this.get("trigger")) {
                case "tap":
                  t = { tap: "magnify" };
                  break;
                case "drag":
                  t = { press: "createDelegate" };
                  break;
                default:
                  t = { tap: "magnify" };
              }
              return t;
            }),
            (e.prototype.init = function () {
              var t = this.get("r");
              this.set("cachedMagnifiedModels", []),
                this.set("cachedOriginPositions", {}),
                this.set("r2", t * t);
              var e = this.get("d");
              this.set("molecularParam", (e + 1) * t);
            }),
            (e.prototype.createDelegate = function (t) {
              var e = this,
                n = this,
                r = n.get("delegate");
              (r && !r.destroyed) ||
                (n.magnify(t),
                (r = n.get("delegate")).on("dragstart", function (t) {
                  n.set("delegateCenterDiff", {
                    x: r.attr("x") - t.x,
                    y: r.attr("y") - t.y,
                  });
                }),
                r.on("drag", function (t) {
                  n.magnify(t);
                }),
                r.on("dragend", function (t) {
                  e.clear();
                }),
                "wheel" === this.get("scaleDBy") &&
                  r.on("mousewheel", function (t) {
                    e.scaleDByWheel(t);
                  }),
                "wheel" === this.get("scaleRBy") &&
                  r.on("mousewheel", function (t) {
                    n.scaleRByWheel(t);
                  }));
            }),
            (e.prototype.scaleRByWheel = function (t) {
              if (t && t.originalEvent) {
                t.preventDefault && t.preventDefault();
                var e,
                  n = this.get("graph"),
                  r = this.get("delegate"),
                  i =
                    (r ? { x: r.attr("x"), y: r.attr("y") } : void 0) ||
                    n.getPointByClient(t.clientX, t.clientY);
                e = t.originalEvent.wheelDelta < 0 ? 0.95 : 1 / 0.95;
                var o = this.get("maxR"),
                  a = this.get("minR"),
                  s = this.get("r");
                ((s > (o || n.get("height")) && e > 1) ||
                  (s < (a || 0.05 * n.get("height")) && e < 1)) &&
                  (e = 1),
                  (s *= e),
                  this.set("r", s),
                  this.set("r2", s * s);
                var u = this.get("d");
                this.set("molecularParam", (u + 1) * s),
                  this.set("delegateCenterDiff", void 0),
                  this.magnify(t, i);
              }
            }),
            (e.prototype.scaleRByDrag = function (t) {
              if (t) {
                var e,
                  n = this.get("dragPrePos"),
                  r = this.get("graph"),
                  i = r.getPointByClient(t.clientX, t.clientY);
                e = t.x - n.x < 0 ? 0.95 : 1 / 0.95;
                var o = this.get("maxR"),
                  a = this.get("minR"),
                  s = this.get("r");
                ((s > (o || r.get("height")) && e > 1) ||
                  (s < (a || 0.05 * r.get("height")) && e < 1)) &&
                  (e = 1),
                  (s *= e),
                  this.set("r", s),
                  this.set("r2", s * s);
                var u = this.get("d");
                this.set("molecularParam", (u + 1) * s),
                  this.magnify(t, i),
                  this.set("dragPrePos", { x: t.x, y: t.y });
              }
            }),
            (e.prototype.scaleDByWheel = function (t) {
              if (t || t.originalEvent) {
                t.preventDefault && t.preventDefault();
                var e = 0;
                e = t.originalEvent.wheelDelta < 0 ? -0.1 : 0.1;
                var n = this.get("d") + e,
                  r = this.get("maxD"),
                  i = this.get("minD");
                if (n < r && n > i) {
                  this.set("d", n);
                  var o = this.get("r");
                  this.set("molecularParam", (n + 1) * o);
                  var a = this.get("delegate"),
                    s = a ? { x: a.attr("x"), y: a.attr("y") } : void 0;
                  this.set("delegateCenterDiff", void 0), this.magnify(t, s);
                }
              }
            }),
            (e.prototype.scaleDByDrag = function (t) {
              var e = this.get("dragPrePos"),
                n = t.x - e.x > 0 ? 0.1 : -0.1,
                r = this.get("d") + n,
                i = this.get("maxD"),
                o = this.get("minD");
              if (r < i && r > o) {
                this.set("d", r);
                var a = this.get("r");
                this.set("molecularParam", (r + 1) * a), this.magnify(t);
              }
              this.set("dragPrePos", { x: t.x, y: t.y });
            }),
            (e.prototype.magnify = function (t, e) {
              this.restoreCache();
              var n = this.get("graph"),
                r = this.get("cachedMagnifiedModels"),
                i = this.get("cachedOriginPositions"),
                o = this.get("showLabel"),
                a = this.get("r"),
                s = this.get("r2"),
                u = this.get("d"),
                c = this.get("molecularParam"),
                h = n.getNodes(),
                l = h.length,
                d = e ? { x: e.x, y: e.y } : { x: t.x, y: t.y };
              !this.get("dragging") ||
                ("mousemove" !== this.get("trigger") &&
                  "tap" !== this.get("trigger")) ||
                ((d = this.get("cacheCenter")),
                (d = n.getPointByClient(d.x, d.y)));
              var f = this.get("delegateCenterDiff");
              f && ((d.x += f.x), (d.y += f.y)), this.updateDelegate(d, a);
              for (var p = 0; p < l; p++) {
                var g = h[p].getModel(),
                  y = g.x,
                  v = g.y;
                if (!isNaN(y) && !isNaN(v)) {
                  var m = (y - d.x) * (y - d.x) + (v - d.y) * (v - d.y);
                  if (!isNaN(m) && m < s && 0 !== m) {
                    var b = Math.sqrt(m),
                      x = (c * b) / (u * b + a),
                      w = (y - d.x) / b,
                      O = (v - d.y) / b;
                    if (
                      ((g.x = w * x + d.x),
                      (g.y = O * x + d.y),
                      i[g.id] || (i[g.id] = { x: y, y: v, texts: [] }),
                      r.push(g),
                      o && 2 * b < a)
                    )
                      for (
                        var M = h[p].getContainer().getChildren(),
                          S = M.length,
                          C = 0;
                        C < S;
                        C++
                      ) {
                        var j = M[C];
                        "text" === j.get("type") &&
                          (i[g.id].texts.push({
                            visible: j.get("visible"),
                            shape: j,
                          }),
                          j.set("visible", !0));
                      }
                  }
                }
              }
              n.refreshPositions();
            }),
            (e.prototype.restoreCache = function () {
              for (
                var t = this.get("cachedMagnifiedModels"),
                  e = this.get("cachedOriginPositions"),
                  n = t.length,
                  r = 0;
                r < n;
                r++
              ) {
                var i = t[r],
                  o = e[i.id];
                (i.x = o.x), (i.y = o.y);
                for (var a = o.texts.length, s = 0; s < a; s++) {
                  var u = o.texts[s];
                  u.shape.set("visible", u.visible);
                }
              }
              this.set("cachedMagnifiedModels", []),
                this.set("cachedOriginPositions", {});
            }),
            (e.prototype.updateParams = function (t) {
              var e = t.r,
                n = t.d,
                r = t.trigger,
                i = t.minD,
                o = t.maxD,
                a = t.minR,
                s = t.maxR,
                u = t.scaleDBy,
                c = t.scaleRBy;
              isNaN(t.r) || (this.set("r", e), this.set("r2", e * e)),
                isNaN(n) || this.set("d", n),
                isNaN(o) || this.set("maxD", o),
                isNaN(i) || this.set("minD", i),
                isNaN(s) || this.set("maxR", s),
                isNaN(a) || this.set("minR", a);
              var h,
                l = this.get("d"),
                d = this.get("r");
              (this.set("molecularParam", (l + 1) * d),
              ("mousemove" !== r && "tap" !== r && "drag" !== r) ||
                this.set("trigger", r),
              "drag" === u || "unset" === u) &&
                (this.set("scaleDBy", u),
                this.get("delegate").remove(),
                this.get("delegate").destroy(),
                (h = this.get("dPercentText")) && (h.remove(), h.destroy()));
              ("drag" !== c && "unset" !== c) ||
                (this.set("scaleRBy", c),
                this.get("delegate").remove(),
                this.get("delegate").destroy(),
                (h = this.get("dPercentText")) && (h.remove(), h.destroy()));
            }),
            (e.prototype.updateDelegate = function (t, e) {
              var n = this,
                r = this,
                i = r.get("graph"),
                o = r.get("delegate");
              if (!o || o.destroyed) {
                var a = i.get("group"),
                  s = r.get("delegateStyle") || to;
                (o = a.addShape("circle", {
                  attrs: Object(h.a)({ r: e / 1.5, x: t.x, y: t.y }, s),
                  name: "lens-shape",
                  draggable: !0,
                })),
                  "drag" !== this.get("trigger") &&
                    ("wheel" === this.get("scaleRBy")
                      ? o.on("mousewheel", function (t) {
                          r.scaleRByWheel(t);
                        })
                      : "drag" === this.get("scaleRBy") &&
                        (o.on("dragstart", function (t) {
                          r.set("dragging", !0),
                            r.set("cacheCenter", { x: t.x, y: t.y }),
                            r.set("dragPrePos", { x: t.x, y: t.y });
                        }),
                        o.on("drag", function (t) {
                          r.scaleRByDrag(t);
                        }),
                        o.on("dragend", function (t) {
                          r.set("dragging", !1);
                        })),
                    "wheel" === this.get("scaleDBy")
                      ? o.on("mousewheel", function (t) {
                          n.scaleDByWheel(t);
                        })
                      : "drag" === this.get("scaleDBy") &&
                        (o.on("dragstart", function (t) {
                          r.set("dragging", !0),
                            r.set("cacheCenter", { x: t.x, y: t.y }),
                            r.set("dragPrePos", { x: t.x, y: t.y });
                        }),
                        o.on("drag", function (t) {
                          n.scaleDByDrag(t);
                        }),
                        o.on("dragend", function (t) {
                          r.set("dragging", !1);
                        })));
              } else o.attr({ x: t.x, y: t.y, r: e / 1.5 });
              if (r.get("showDPercent")) {
                var u = Math.round(
                    ((r.get("d") - r.get("minD")) /
                      (r.get("maxD") - r.get("minD"))) *
                      100,
                  ),
                  c = r.get("dPercentText"),
                  l = t.y + e / 1.5 + 16;
                if (!c || c.destroyed)
                  (c = (a = i.get("group")).addShape("text", {
                    attrs: {
                      text: u + "%",
                      x: t.x,
                      y: l,
                      fill: "#aaa",
                      stroke: "#fff",
                      lineWidth: 1,
                      fontSize: 12,
                    },
                  })),
                    r.set("dPercentText", c);
                else c.attr({ text: u + "%", x: t.x, y: l });
              }
              r.set("delegate", o);
            }),
            (e.prototype.clear = function () {
              var t = this.get("graph");
              this.restoreCache(), t.refreshPositions();
              var e = this.get("delegate");
              e && !e.destroyed && (e.remove(), e.destroy());
              var n = this.get("dPercentText");
              n && !n.destroyed && (n.remove(), n.destroy()),
                this.set("delegateCenterDiff", void 0);
            }),
            (e.prototype.destroy = function () {
              this.clear();
            }),
            e
          );
        })(Qe),
        no = Math.max,
        ro = sn.a.transform,
        io = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (
              (n.handleUpdateCanvas = Object(gt.c)(
                function (t) {
                  var e = n;
                  e.destroyed || e.updateCanvas();
                },
                100,
                !1,
              )),
              n
            );
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.getDefaultCfgs = function () {
              return {
                container: null,
                className: "",
                viewportClassName: "",
                type: "default",
                padding: 50,
                size: [200, 120],
                delegateStyle: { fill: "#40a9ff", stroke: "#096dd9" },
                refresh: !0,
              };
            }),
            (e.prototype.getEvents = function () {
              return {
                beforepaint: "updateViewport",
                beforeanimate: "disableRefresh",
                afteranimate: "enableRefresh",
                viewportchange: "disableOneRefresh",
              };
            }),
            (e.prototype.disableRefresh = function () {
              this.set("refresh", !1);
            }),
            (e.prototype.enableRefresh = function () {
              this.set("refresh", !0), this.updateCanvas();
            }),
            (e.prototype.disableOneRefresh = function () {
              this.set("viewportChange", !0);
            }),
            (e.prototype.initViewport = function () {
              var t = this,
                e = this._cfgs,
                n = e.size,
                r = e.graph;
              if (!this.destroyed) {
                var i = this.get("container").query(".viewport"),
                  o = 0,
                  a = 0,
                  s = !1,
                  u = 0,
                  c = 0,
                  h = 0,
                  l = 0,
                  d = 0,
                  f = 0;
                i.on("panstart", function (p) {
                  (e.refresh = !1),
                    (u = parseInt(i.getStyle("left"), 10)),
                    (c = parseInt(i.getStyle("top"), 10)),
                    (h = parseInt(i.getStyle("width"), 10)),
                    (l = parseInt(i.getStyle("height"), 10)),
                    h > n[0] ||
                      l > n[1] ||
                      ((f = r.getZoom()),
                      (d = t.get("ratio")),
                      (s = !0),
                      (o = p.x),
                      (a = p.y));
                }),
                  i.on(
                    "panmove",
                    function (t) {
                      if (s && !Object(gt.s)(t.x) && !Object(gt.s)(t.y)) {
                        var e = o - t.x,
                          i = a - t.y;
                        (u - e < 0 || u - e + h >= n[0]) && (e = 0),
                          (c - i < 0 || c - i + l >= n[1]) && (i = 0),
                          (u -= e),
                          (c -= i),
                          r.translate((e * f) / d, (i * f) / d),
                          (o = t.x),
                          (a = t.y);
                      }
                    },
                    !1,
                  ),
                  i.on(
                    "panend",
                    function () {
                      (s = !1), (e.refresh = !0);
                    },
                    !1,
                  ),
                  this.set("viewport", i);
              }
            }),
            (e.prototype.updateViewport = function () {
              if (!this.destroyed) {
                var t = this.get("ratio"),
                  e = this.get("totaldx"),
                  n = this.get("totaldy"),
                  r = this.get("graph"),
                  i = this.get("size"),
                  o = r.get("width"),
                  a = r.get("height"),
                  s = r.getPointByCanvas(0, 0),
                  u = r.getPointByCanvas(o, a),
                  c = this.get("viewport"),
                  h = (u.x - s.x) * t,
                  l = (u.y - s.y) * t,
                  d = s.x * t + e,
                  f = s.y * t + n,
                  p = d + h,
                  g = f + l;
                d < 0 && ((h += d), (d = 0)),
                  p > i[0] && (h -= p - i[0]),
                  f < 0 && ((l += f), (f = 0)),
                  g > i[1] && (l -= g - i[1]),
                  this.set("ratio", t),
                  c &&
                    (c.setStyle("left", d),
                    c.setStyle("top", f),
                    c.setStyle("width", h),
                    c.setStyle("height", l));
              }
            }),
            (e.prototype.updateGraphShapes = function () {
              var t = this._cfgs.graph.get("group");
              if (!t.destroyed) {
                var e = t.clone(),
                  n = this.get("groupCanvas");
                e.resetMatrix(), n.clear(), n.add(e);
              }
            }),
            (e.prototype.updateKeyShapes = function () {
              var t = this,
                e = this._cfgs.graph,
                n = this.get("groupCanvas");
              Object(gt.e)(e.getEdges(), function (e) {
                t.updateOneEdgeKeyShape(e, n);
              }),
                Object(gt.e)(e.getNodes(), function (e) {
                  t.updateOneNodeKeyShape(e, n);
                });
              var r = e.getCombos();
              if (r && r.length) {
                var i =
                  n.find(function (t) {
                    return "comboGroup" === t.get("name");
                  }) || n.addGroup({ name: "comboGroup" });
                setTimeout(function () {
                  t.destroyed ||
                    (Object(gt.e)(r, function (e) {
                      t.updateOneComboKeyShape(e, i);
                    }),
                    null == i || i.sort(),
                    null == i || i.toBack(),
                    t.updateCanvas());
                }, 250);
              }
              this.clearDestroyedShapes();
            }),
            (e.prototype.updateOneComboKeyShape = function (t, e) {
              if (!this.destroyed) {
                var n = this.get("itemMap") || {},
                  r = n[t.get("id")],
                  i = t.getBBox(),
                  o = t.get("keyShape").clone(),
                  a = o.attr(),
                  s = { x: i.centerX, y: i.centerY };
                r ? (s = Object.assign(a, s)) : ((r = o), e.add(r));
                var u = r.get("type");
                ("rect" !== u && "image" !== u) ||
                  ((s.x = i.minX), (s.y = i.minY)),
                  r.attr(s),
                  t.isVisible() ? r.show() : r.hide(),
                  (r.exist = !0);
                var c = t.getModel().depth;
                isNaN(c) || r.set("zIndex", c),
                  (n[t.get("id")] = r),
                  this.set("itemMap", n);
              }
            }),
            (e.prototype.updateOneNodeKeyShape = function (t, e) {
              var n = this.get("itemMap") || {},
                r = n[t.get("id")],
                i = t.getBBox(),
                o = t.get("keyShape").clone(),
                a = o.attr(),
                s = { x: i.centerX, y: i.centerY };
              r ? (s = Object.assign(a, s)) : ((r = o), e.add(r));
              var u = r.get("type");
              ("rect" !== u && "image" !== u) ||
                ((s.x = i.minX), (s.y = i.minY)),
                r.attr(s),
                t.isVisible() ? r.show() : r.hide(),
                (r.exist = !0);
              var c = t.getModel().depth;
              isNaN(c) || r.set("zIndex", c),
                (n[t.get("id")] = r),
                this.set("itemMap", n);
            }),
            (e.prototype.updateDelegateShapes = function () {
              var t = this,
                e = this._cfgs.graph,
                n = this.get("groupCanvas");
              Object(gt.e)(e.getEdges(), function (e) {
                t.updateOneEdgeKeyShape(e, n);
              }),
                Object(gt.e)(e.getNodes(), function (e) {
                  t.updateOneNodeDelegateShape(e, n);
                });
              var r = e.getCombos();
              if (r && r.length) {
                var i =
                  n.find(function (t) {
                    return "comboGroup" === t.get("name");
                  }) || n.addGroup({ name: "comboGroup" });
                setTimeout(function () {
                  t.destroyed ||
                    (Object(gt.e)(r, function (e) {
                      t.updateOneComboKeyShape(e, i);
                    }),
                    null == i || i.sort(),
                    null == i || i.toBack(),
                    t.updateCanvas());
                }, 250);
              }
              this.clearDestroyedShapes();
            }),
            (e.prototype.clearDestroyedShapes = function () {
              var t = this.get("itemMap") || {},
                e = Object.keys(t);
              if (e && 0 !== e.length)
                for (var n = e.length - 1; n >= 0; n--) {
                  var r = t[e[n]],
                    i = r.exist;
                  (r.exist = !1), i || (r.remove(), delete t[e[n]]);
                }
            }),
            (e.prototype.updateOneEdgeKeyShape = function (t, e) {
              var n = this.get("itemMap") || {},
                r = n[t.get("id")];
              if (r) {
                var i = t.get("keyShape").attr("path");
                r.attr("path", i);
              } else (r = t.get("keyShape").clone()), e.add(r);
              t.isVisible() ? r.show() : r.hide(),
                (r.exist = !0),
                (n[t.get("id")] = r),
                this.set("itemMap", n);
            }),
            (e.prototype.updateOneNodeDelegateShape = function (t, e) {
              var n = this.get("delegateStyle"),
                r = this.get("itemMap") || {},
                i = r[t.get("id")],
                o = t.getBBox();
              if (i) {
                var a = {
                  x: o.minX,
                  y: o.minY,
                  width: o.width,
                  height: o.height,
                };
                i.attr(a);
              } else
                i = e.addShape("rect", {
                  attrs: Object(h.a)(
                    { x: o.minX, y: o.minY, width: o.width, height: o.height },
                    n,
                  ),
                  name: "minimap-node-shape",
                });
              t.isVisible() ? i.show() : i.hide(),
                (i.exist = !0),
                (r[t.get("id")] = i),
                this.set("itemMap", r);
            }),
            (e.prototype.init = function () {
              var t = this;
              this.get("graph").on("afterupdateitem", this.handleUpdateCanvas),
                this.get("graph").on(
                  "afteritemstatechange",
                  this.handleUpdateCanvas,
                ),
                this.get("graph").on("afteradditem", this.handleUpdateCanvas),
                this.get("graph").on(
                  "afterremoveitem",
                  this.handleUpdateCanvas,
                ),
                this.get("graph").on("afterrender", this.handleUpdateCanvas),
                this.get("graph").on("afterlayout", this.handleUpdateCanvas),
                setTimeout(function () {
                  t.initContainer();
                });
            }),
            (e.prototype.initContainer = function () {
              var t,
                e = this.get("graph"),
                n = this.get("size"),
                r = this.get("className"),
                i = this.get("viewportClassName"),
                o = this.get("getCss"),
                a = H(
                  "\n    <div class='f6-minimap " +
                    r +
                    '\'>\n      <div class="f6-minimap-container"></div>\n      <div class="viewport ' +
                    i +
                    '"></div>\n    </div>',
                  "\n      root {\n        width: " +
                    e.getWidth() +
                    ";\n        height: " +
                    e.getHeight() +
                    ";\n        opacity: 0;\n        pointer-events: none;\n      }\n      .f6-minimap{ \n        position: absolute;\n        left: 0;\n        bottom: 0;\n        width: " +
                    n[0] +
                    "; height: " +
                    n[1] +
                    ";\n      } \n      .f6-minimap-container{\n        position: relative;\n        background: rgba(0,0,0,0);\n        width: " +
                    n[0] +
                    "; height: " +
                    n[1] +
                    ";\n      }\n      .viewport{\n        position: absolute;\n        border: 3 solid blue;\n        width: 100;\n        height: 100;\n        background: rgba(0,0,0,0);\n        z-index: 1000;\n      }\n      " +
                    (null !== (t = null == o ? void 0 : o()) && void 0 !== t
                      ? t
                      : "") +
                    "\n    ",
                  e.get("uiGroup"),
                ),
                s = a.query(".f6-minimap-container").gNode.addGroup();
              this.set("groupCanvas", s),
                this.set("container", a),
                this.updateCanvas(),
                this.initViewport();
            }),
            (e.prototype.updateCanvas = function () {
              if (!this.destroyed && this.get("refresh")) {
                var t = this.get("graph");
                if (!t.get("destroyed")) {
                  this.get("viewportChange") &&
                    (this.set("viewportChange", !1), this.updateViewport());
                  var e = this.get("size"),
                    n = this.get("type"),
                    r = this.get("padding");
                  switch (n) {
                    case "default":
                      this.updateGraphShapes();
                      break;
                    case "keyShape":
                      this.updateKeyShapes();
                      break;
                    case "delegate":
                      this.updateDelegateShapes();
                  }
                  var i = this.get("groupCanvas");
                  if (i) {
                    i.resetMatrix();
                    var o = i.getBBox(),
                      a = t.get("group").getCanvasBBox(),
                      s = t.getZoom() || 1,
                      u = a.width / s,
                      c = a.height / s;
                    Number.isFinite(o.width) &&
                      ((u = no(o.width, u)), (c = no(o.height, c))),
                      (u += 2 * r),
                      (c += 2 * r);
                    var h = Math.min(e[0] / u, e[1] / c),
                      l = [1, 0, 0, 0, 1, 0, 0, 0, 1],
                      d = 0,
                      f = 0;
                    Number.isFinite(o.minX) && (d = -o.minX),
                      Number.isFinite(o.minY) && (f = -o.minY);
                    var p = (e[0] - (u - 2 * r) * h) / 2,
                      g = (e[1] - (c - 2 * r) * h) / 2;
                    (l = ro(l, [
                      ["t", d, f],
                      ["s", h, h],
                      ["t", p, g],
                    ])),
                      i.setMatrix(l),
                      this.set("ratio", h),
                      this.set("totaldx", p + d * h),
                      this.set("totaldy", g + f * h),
                      this.set("dx", p),
                      this.set("dy", g),
                      this.updateViewport();
                  }
                }
              }
            }),
            (e.prototype.getCanvas = function () {
              return this.get("canvas");
            }),
            (e.prototype.getViewport = function () {
              return this.get("viewport");
            }),
            (e.prototype.getContainer = function () {
              return this.get("container");
            }),
            (e.prototype.destroy = function () {
              var t;
              null === (t = this.get("container")) ||
                void 0 === t ||
                t.remove();
            }),
            e
          );
        })(Qe);
      function oo(t, e, n) {
        var r = t.x - e.x,
          i = t.y - e.y;
        return !n || Math.abs(r) > n || Math.abs(i) > n
          ? Math.sqrt(r * r + i * i)
          : n;
      }
      function ao(t, e) {
        var n = (e.source.y - e.target.y) / (e.source.x - e.target.x),
          r = (n * n * e.source.x + n * (t.y - e.source.y) + t.x) / (n * n + 1);
        return { x: r, y: n * (r - e.source.x) + e.source.y };
      }
      var so = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.getDefaultCfgs = function () {
              return {
                edgeBundles: [],
                edgePoints: [],
                K: 0.1,
                lambda: 0.1,
                divisions: 1,
                divRate: 2,
                cycles: 6,
                iterations: 90,
                iterRate: 0.6666667,
                bundleThreshold: 0.6,
                eps: 1e-6,
                onLayoutEnd: function () {},
                onTick: function () {},
              };
            }),
            (e.prototype.init = function () {
              var t = this.get("graph"),
                e = this.get("onTick");
              this.set("tick", function () {
                e && e(), t.refreshPositions();
              });
            }),
            (e.prototype.bundling = function (t) {
              var e = this;
              if ((e.set("data", t), !e.isTicking())) {
                var n = t.edges || [],
                  r = t.nodes || [],
                  i = {},
                  o = !1;
                if (
                  (r.forEach(function (t) {
                    (null !== t.x &&
                      null !== !t.y &&
                      void 0 !== t.x &&
                      void 0 !== !t.y) ||
                      (o = !0),
                      (i[t.id] = t);
                  }),
                  o)
                )
                  throw new Error(
                    "please layout the graph or assign x and y for nodes first",
                  );
                e.set("nodeIdMap", i);
                var a = e.get("divisions"),
                  s = e.get("divRate"),
                  u = e.divideEdges(a);
                e.set("edgePoints", u);
                var c = e.getEdgeBundles();
                e.set("edgeBundles", c);
                for (
                  var h = e.get("cycles"),
                    l = e.get("iterations"),
                    d = e.get("iterRate"),
                    f = e.get("lambda"),
                    p = 0;
                  p < h;
                  p++
                ) {
                  for (
                    var g = function (t) {
                        var r = [];
                        n.forEach(function (t, n) {
                          if (t.source !== t.target) {
                            var o = i[t.source],
                              s = i[t.target];
                            r[n] = e.getEdgeForces(
                              { source: o, target: s },
                              n,
                              a,
                              f,
                            );
                            for (var c = 0; c < a + 1; c++)
                              (u[n][c].x += r[n][c].x),
                                (u[n][c].y += r[n][c].y);
                          }
                        });
                      },
                      y = 0;
                    y < l;
                    y++
                  )
                    g();
                  (f /= 2),
                    (a *= s),
                    (l *= d),
                    (u = e.divideEdges(a)),
                    e.set("edgePoints", u);
                }
                n.forEach(function (t, e) {
                  t.source !== t.target &&
                    ((t.type = "polyline"),
                    (t.controlPoints = u[e].slice(1, u[e].length - 1)));
                }),
                  e.get("graph").refresh();
              }
            }),
            (e.prototype.updateBundling = function (t) {
              var e = this,
                n = t.data;
              if (
                (n && e.set("data", n),
                e.get("ticking") && e.set("ticking", !1),
                Object.keys(t).forEach(function (n) {
                  e.set(n, t[n]);
                }),
                t.onTick)
              ) {
                var r = this.get("graph");
                e.set("tick", function () {
                  t.onTick(), r.refresh();
                });
              }
              e.bundling(n);
            }),
            (e.prototype.divideEdges = function (t) {
              var e = this,
                n = e.get("data").edges,
                r = e.get("nodeIdMap"),
                i = e.get("edgePoints");
              return (
                (i && void 0 !== i) || (i = []),
                n.forEach(function (n, o) {
                  (i[o] && void 0 !== i[o]) || (i[o] = []);
                  var a = r[n.source],
                    s = r[n.target];
                  if (1 === t)
                    i[o].push({ x: a.x, y: a.y }),
                      i[o].push({ x: 0.5 * (a.x + s.x), y: 0.5 * (a.y + s.y) }),
                      i[o].push({ x: s.x, y: s.y });
                  else {
                    var u =
                        (i[o] && i[o] !== []
                          ? e.getEdgeLength(i[o])
                          : oo({ x: a.x, y: a.y }, { x: s.x, y: s.y })) /
                        (t + 1),
                      c = u,
                      h = [{ x: a.x, y: a.y }];
                    i[o].forEach(function (t, e) {
                      if (0 !== e) {
                        for (var n = oo(t, i[o][e - 1]); n > c; ) {
                          var r = c / n,
                            a = { x: i[o][e - 1].x, y: i[o][e - 1].y };
                          (a.x += r * (t.x - i[o][e - 1].x)),
                            (a.y += r * (t.y - i[o][e - 1].y)),
                            h.push(a),
                            (n -= c),
                            (c = u);
                        }
                        c -= n;
                      }
                    }),
                      h.push({ x: s.x, y: s.y }),
                      (i[o] = h);
                  }
                }),
                i
              );
            }),
            (e.prototype.getEdgeLength = function (t) {
              var e = 0;
              return (
                t.forEach(function (n, r) {
                  0 !== r && (e += oo(n, t[r - 1]));
                }),
                e
              );
            }),
            (e.prototype.getEdgeBundles = function () {
              var t = this,
                e = t.get("data").edges || [],
                n = t.get("bundleThreshold"),
                r = t.get("nodeIdMap"),
                i = t.get("edgeBundles");
              return (
                i || (i = []),
                e.forEach(function (t, e) {
                  (i[e] && void 0 !== i[e]) || (i[e] = []);
                }),
                e.forEach(function (o, a) {
                  var s = r[o.source],
                    u = r[o.target];
                  e.forEach(function (e, o) {
                    if (!(o <= a)) {
                      var c = r[e.source],
                        h = r[e.target];
                      t.getBundleScore(
                        { source: s, target: u },
                        { source: c, target: h },
                      ) >= n && (i[a].push(o), i[o].push(a));
                    }
                  });
                }),
                i
              );
            }),
            (e.prototype.getBundleScore = function (t, e) {
              return (
                (t.vx = t.target.x - t.source.x),
                (t.vy = t.target.y - t.source.y),
                (e.vx = e.target.x - e.source.x),
                (e.vy = e.target.y - e.source.y),
                (t.length = oo(
                  { x: t.source.x, y: t.source.y },
                  { x: t.target.x, y: t.target.y },
                )),
                (e.length = oo(
                  { x: e.source.x, y: e.source.y },
                  { x: e.target.x, y: e.target.y },
                )),
                this.getAngleScore(t, e) *
                  this.getScaleScore(t, e) *
                  this.getPositionScore(t, e) *
                  this.getVisibilityScore(t, e)
              );
            }),
            (e.prototype.getAngleScore = function (t, e) {
              return (
                (function (t, e) {
                  return t.x * e.x + t.y * e.y;
                })({ x: t.vx, y: t.vy }, { x: e.vx, y: e.vy }) /
                (t.length * e.length)
              );
            }),
            (e.prototype.getScaleScore = function (t, e) {
              var n = (t.length + e.length) / 2;
              return (
                2 /
                (n / Math.min(t.length, e.length) +
                  Math.max(t.length, e.length) / n)
              );
            }),
            (e.prototype.getPositionScore = function (t, e) {
              var n = (t.length + e.length) / 2;
              return (
                n /
                (n +
                  oo(
                    {
                      x: (t.source.x + t.target.x) / 2,
                      y: (t.source.y + t.target.y) / 2,
                    },
                    {
                      x: (e.source.x + e.target.x) / 2,
                      y: (e.source.y + e.target.y) / 2,
                    },
                  ))
              );
            }),
            (e.prototype.getVisibilityScore = function (t, e) {
              var n = this.getEdgeVisibility(t, e),
                r = this.getEdgeVisibility(e, t);
              return n < r ? n : r;
            }),
            (e.prototype.getEdgeVisibility = function (t, e) {
              var n = ao(e.source, t),
                r = ao(e.target, t),
                i = { x: (n.x + r.x) / 2, y: (n.y + r.y) / 2 },
                o = {
                  x: (t.source.x + t.target.x) / 2,
                  y: (t.source.y + t.target.y) / 2,
                };
              return Math.max(0, 1 - (2 * oo(i, o)) / oo(n, r));
            }),
            (e.prototype.getEdgeForces = function (t, e, n, r) {
              for (
                var i = this.get("edgePoints"),
                  o = this.get("K") / (oo(t.source, t.target) * (n + 1)),
                  a = [{ x: 0, y: 0 }],
                  s = 1;
                s < n;
                s++
              ) {
                var u = { x: 0, y: 0 },
                  c = this.getSpringForce(
                    { pre: i[e][s - 1], cur: i[e][s], next: i[e][s + 1] },
                    o,
                  ),
                  h = this.getElectrostaticForce(s, e);
                (u.x = r * (c.x + h.x)), (u.y = r * (c.y + h.y)), a.push(u);
              }
              return a.push({ x: 0, y: 0 }), a;
            }),
            (e.prototype.getSpringForce = function (t, e) {
              var n = t.pre.x + t.next.x - 2 * t.cur.x,
                r = t.pre.y + t.next.y - 2 * t.cur.y;
              return { x: (n *= e), y: (r *= e) };
            }),
            (e.prototype.getElectrostaticForce = function (t, e) {
              var n = this.get("eps"),
                r = this.get("edgeBundles"),
                i = this.get("edgePoints"),
                o = r[e],
                a = { x: 0, y: 0 };
              return (
                o.forEach(function (r) {
                  var o = {
                    x: i[r][t].x - i[e][t].x,
                    y: i[r][t].y - i[e][t].y,
                  };
                  if (Math.abs(o.x) > n || Math.abs(o.y) > n) {
                    var s = 1 / oo(i[r][t], i[e][t]);
                    (a.x += o.x * s), (a.y += o.y * s);
                  }
                }),
                a
              );
            }),
            (e.prototype.isTicking = function () {
              return this.get("ticking");
            }),
            (e.prototype.getSimulation = function () {
              return this.get("forceSimulation");
            }),
            (e.prototype.destroy = function () {
              this.get("ticking") && this.getSimulation().stop(),
                t.prototype.destroy.call(this);
            }),
            e
          );
        })(Qe),
        uo = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.getDefaultCfgs = function () {
              return {
                offsetX: 6,
                offsetY: 6,
                handleMenuClick: void 0,
                getContent: function (t) {
                  return "\n          <div class='f6-contextmenu-ul'>\n            <div class='f6-contextmenu-li'>菜单项1</div>\n            <div class='f6-contextmenu-li'>菜单项2</div>\n          </div>\n        ";
                },
                getCss: function () {
                  return "\n        .f6-contextmenu-ul {\n          display: flex;\n          width: 100;\n          border: 1 solid #e2e2e2;\n          border-radius: 4;\n          font-size: 12;\n          color: #545454;\n          padding: 10 8;\n          background-color: rgba(255, 255, 255, 0.9);\n        }\n        .f6-contextmenu-li {\n            opacity: 0;\n            justify-content: center;\n            text-align: center;\n            height: 50;\n          }\n        ";
                },
                shouldBegin: function (t) {
                  return !0;
                },
                onHide: function () {
                  return !0;
                },
                itemTypes: ["node", "edge", "combo"],
              };
            }),
            (e.prototype.getEvents = function () {
              return { press: "onMenuShow" };
            }),
            (e.prototype.init = function () {
              var t = this;
              this.get("graph").on("tap", function () {
                t.onMenuHide();
              });
            }),
            (e.prototype.onMenuShow = function (t) {
              var e, n;
              t.preventDefault();
              var r = this.get("itemTypes");
              if (t.item) {
                if (
                  t.item &&
                  t.item.getType &&
                  -1 === r.indexOf(t.item.getType())
                )
                  return void this.onMenuHide();
              } else if (-1 === r.indexOf("canvas"))
                return void this.onMenuHide();
              if (this.get("shouldBegin")(t)) {
                var i = this.get("className"),
                  o = this.get("graph"),
                  a = o.get("uiGroup"),
                  s = this.get("getContent"),
                  u = this.get("getCss"),
                  c =
                    "\n    root {\n      display: flex;\n      font-size: 12;\n      color: #545454;\n    }\n    text {\n      height: 12;\n      opacity: 1;\n    }\n    " +
                    (null !== (e = null == u ? void 0 : u()) && void 0 !== e
                      ? e
                      : "") +
                    "\n  ",
                  h = H(
                    "<root class=" +
                      (i || "g6-component-contextmenu") +
                      ">" +
                      s(t, o) +
                      "</root>",
                    c,
                    a,
                  );
                null === (n = this.get("menu")) || void 0 === n || n.remove(),
                  this.set("menu", h);
                var l = this.get("handleMenuClick");
                if (l) {
                  var d = function (e) {
                    var n;
                    e.stopPropagation(),
                      l(
                        null === (n = e.uiNode) || void 0 === n
                          ? void 0
                          : n.attributes,
                        t.item,
                        o,
                      );
                  };
                  this.set("handleMenuClickWrapper", d), h.on("tap", d);
                }
                var f = o.get("width"),
                  p = o.get("height"),
                  g = h.width,
                  y = h.height,
                  v = (h.left, h.right, this.get("offsetX") || 0),
                  m = this.get("offsetY") || 0,
                  b = t.canvasX + v,
                  x = t.canvasY + m;
                b + g > f && (b = t.canvasX - g - v),
                  x + y > p && (x = t.canvasY - y - m),
                  h.setStyle("left", b),
                  h.setStyle("top", x);
              }
            }),
            (e.prototype.onMenuHide = function () {
              var t = this.get("menu");
              null == t || t.remove();
            }),
            (e.prototype.destroy = function () {
              var t = this.get("menu");
              null == t || t.remove();
            }),
            e
          );
        })(Qe),
        co = {
          TimeBar: $e,
          SnapLine: qi,
          Tooltip: Hi,
          Legend: Zi,
          ZoomSlider: Ki,
          EdgeFilterLens: Ji,
          Fisheye: eo,
          MiniMap: io,
          Bundling: so,
          Menu: uo,
        };
      e.default = co;
    },
  ]).default;
});
//# sourceMappingURL=f6Plugin.js.map
