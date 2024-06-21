!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.FruchtermanLayout = e())
    : (t.FruchtermanLayout = e());
})(this, function () {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
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
          for (var o in t)
            n.d(
              r,
              o,
              function (e) {
                return t[e];
              }.bind(null, o),
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
      n((n.s = 386))
    );
  })({
    10: function (t, e, n) {
      "use strict";
      var r =
          (this && this.__createBinding) ||
          (Object.create
            ? function (t, e, n, r) {
                void 0 === r && (r = n),
                  Object.defineProperty(t, r, {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  });
              }
            : function (t, e, n, r) {
                void 0 === r && (r = n), (t[r] = e[n]);
              }),
        o =
          (this && this.__exportStar) ||
          function (t, e) {
            for (var n in t)
              "default" === n ||
                Object.prototype.hasOwnProperty.call(e, n) ||
                r(e, t, n);
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        o(n(11), e),
        o(n(12), e),
        o(n(13), e),
        o(n(14), e),
        o(n(15), e),
        o(n(16), e);
    },
    11: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.camelize = e.isString = void 0);
      e.isString = function (t) {
        return "string" == typeof t;
      };
      var r,
        o,
        i = /-(\w)/g;
      e.camelize =
        ((r = function (t) {
          return t.replace(i, function (t, e) {
            return e ? e.toUpperCase() : "";
          });
        }),
        (o = Object.create(null)),
        function (t) {
          return o[t] || (o[t] = r(t));
        });
    },
    12: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isArray = void 0),
        (e.isArray = Array.isArray);
    },
    13: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.toNumber = e.isNaN = e.isNumber = void 0);
      e.isNumber = function (t) {
        return "number" == typeof t;
      };
      e.isNaN = function (t) {
        return Number.isNaN(Number(t));
      };
      e.toNumber = function (t) {
        var n = parseFloat(t);
        return e.isNaN(n) ? t : n;
      };
    },
    14: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.traverseTreeUp =
          e.scaleMatrix =
          e.getAdjMatrix =
          e.floydWarshall =
          e.getDegree =
            void 0);
      e.getDegree = function (t, e, n) {
        for (var r = [], o = 0; o < t; o++) r[o] = 0;
        return n
          ? (n.forEach(function (t) {
              t.source && (r[e[t.source]] += 1),
                t.target && (r[e[t.target]] += 1);
            }),
            r)
          : r;
      };
      e.floydWarshall = function (t) {
        for (var e = [], n = t.length, r = 0; r < n; r += 1) {
          e[r] = [];
          for (var o = 0; o < n; o += 1)
            r === o
              ? (e[r][o] = 0)
              : 0 !== t[r][o] && t[r][o]
              ? (e[r][o] = t[r][o])
              : (e[r][o] = 1 / 0);
        }
        for (var i = 0; i < n; i += 1)
          for (r = 0; r < n; r += 1)
            for (o = 0; o < n; o += 1)
              e[r][o] > e[r][i] + e[i][o] && (e[r][o] = e[r][i] + e[i][o]);
        return e;
      };
      e.getAdjMatrix = function (t, e) {
        var n = t.nodes,
          r = t.edges,
          o = [],
          i = {};
        if (!n) throw new Error("invalid nodes data!");
        return (
          n &&
            n.forEach(function (t, e) {
              i[t.id] = e;
              o.push([]);
            }),
          r &&
            r.forEach(function (t) {
              var n = t.source,
                r = t.target,
                u = i[n],
                c = i[r];
              (o[u][c] = 1), e || (o[c][u] = 1);
            }),
          o
        );
      };
      e.scaleMatrix = function (t, e) {
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
      };
      e.traverseTreeUp = function (t, e) {
        "function" == typeof e &&
          (function t(e, n) {
            if (e && e.children)
              for (var r = e.children.length - 1; r >= 0; r--)
                if (!t(e.children[r], n)) return;
            return !!n(e);
          })(t, e);
      };
    },
    15: function (t, e, n) {
      "use strict";
      function r(t) {
        return (r =
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
      var o =
        (this && this.__assign) ||
        function () {
          return (o =
            Object.assign ||
            function (t) {
              for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var o in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              return t;
            }).apply(this, arguments);
        };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.clone = e.isObject = void 0);
      e.isObject = function (t) {
        return null !== t && "object" === r(t);
      };
      e.clone = function (t) {
        if (null === t) return t;
        if (t instanceof Date) return new Date(t.getTime());
        if (t instanceof Array) {
          var n = [];
          return (
            t.forEach(function (t) {
              n.push(t);
            }),
            n.map(function (t) {
              return e.clone(t);
            })
          );
        }
        if ("object" === r(t) && t !== {}) {
          var i = o({}, t);
          return (
            Object.keys(i).forEach(function (t) {
              i[t] = e.clone(i[t]);
            }),
            i
          );
        }
        return t;
      };
    },
    16: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.isFunction = void 0);
      e.isFunction = function (t) {
        return "function" == typeof t;
      };
    },
    164: function (t, e, n) {
      "use strict";
      var r,
        o =
          (this && this.__extends) ||
          ((r = function (t, e) {
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
          }),
          function (t, e) {
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
          });
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.FruchtermanLayout = void 0);
      var i = n(9),
        u = n(10),
        c = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              (n.maxIteration = 1e3),
              (n.gravity = 10),
              (n.speed = 5),
              (n.clustering = !1),
              (n.clusterGravity = 10),
              (n.nodes = []),
              (n.edges = []),
              (n.width = 300),
              (n.height = 300),
              (n.nodeMap = {}),
              (n.nodeIdxMap = {}),
              (n.onLayoutEnd = function () {}),
              (n.tick = function () {}),
              n.updateCfg(e),
              n
            );
          }
          return (
            o(e, t),
            (e.prototype.getDefaultCfg = function () {
              return {
                maxIteration: 1e3,
                gravity: 10,
                speed: 1,
                clustering: !1,
                clusterGravity: 10,
              };
            }),
            (e.prototype.execute = function () {
              var t = this,
                e = this.nodes;
              if (
                (void 0 !== this.timeInterval &&
                  "undefined" != typeof window &&
                  window.clearInterval(this.timeInterval),
                e && 0 !== e.length)
              ) {
                this.width ||
                  "undefined" == typeof window ||
                  (this.width = window.innerWidth),
                  this.height ||
                    "undefined" == typeof window ||
                    (this.height = window.innerHeight),
                  this.center ||
                    (this.center = [this.width / 2, this.height / 2]);
                var n = this.center;
                if (1 === e.length)
                  return (
                    (e[0].x = n[0]),
                    (e[0].y = n[1]),
                    void (this.onLayoutEnd && this.onLayoutEnd())
                  );
                var r = {},
                  o = {};
                return (
                  e.forEach(function (e, n) {
                    u.isNumber(e.x) || (e.x = Math.random() * t.width),
                      u.isNumber(e.y) || (e.y = Math.random() * t.height),
                      (r[e.id] = e),
                      (o[e.id] = n);
                  }),
                  (this.nodeMap = r),
                  (this.nodeIdxMap = o),
                  this.run()
                );
              }
              this.onLayoutEnd && this.onLayoutEnd();
            }),
            (e.prototype.run = function () {
              var t = this,
                e = t.nodes;
              if (e) {
                var n = t.edges,
                  r = t.maxIteration,
                  o = t.center,
                  i = t.height * t.width,
                  c = Math.sqrt(i) / 10,
                  s = i / (e.length + 1),
                  a = Math.sqrt(s),
                  f = t.gravity,
                  y = t.speed,
                  l = t.clustering,
                  d = {};
                if (l)
                  for (var p in (e.forEach(function (t) {
                    if (void 0 === d[t.cluster]) {
                      var e = { name: t.cluster, cx: 0, cy: 0, count: 0 };
                      d[t.cluster] = e;
                    }
                    var n = d[t.cluster];
                    u.isNumber(t.x) && (n.cx += t.x),
                      u.isNumber(t.y) && (n.cy += t.y),
                      n.count++;
                  }),
                  d))
                    (d[p].cx /= d[p].count), (d[p].cy /= d[p].count);
                if ("undefined" != typeof window) {
                  var h = 0;
                  return (
                    (this.timeInterval = window.setInterval(function () {
                      if (e) {
                        var i = [];
                        if (
                          (e.forEach(function (t, e) {
                            i[e] = { x: 0, y: 0 };
                          }),
                          t.applyCalculate(e, n, i, a, s),
                          l)
                        ) {
                          var p = t.clusterGravity || f;
                          for (var v in (e.forEach(function (t, e) {
                            if (u.isNumber(t.x) && u.isNumber(t.y)) {
                              var n = d[t.cluster],
                                r = Math.sqrt(
                                  (t.x - n.cx) * (t.x - n.cx) +
                                    (t.y - n.cy) * (t.y - n.cy),
                                ),
                                o = a * p;
                              (i[e].x -= (o * (t.x - n.cx)) / r),
                                (i[e].y -= (o * (t.y - n.cy)) / r);
                            }
                          }),
                          d))
                            (d[v].cx = 0), (d[v].cy = 0), (d[v].count = 0);
                          for (var v in (e.forEach(function (t) {
                            var e = d[t.cluster];
                            u.isNumber(t.x) && (e.cx += t.x),
                              u.isNumber(t.y) && (e.cy += t.y),
                              e.count++;
                          }),
                          d))
                            (d[v].cx /= d[v].count), (d[v].cy /= d[v].count);
                        }
                        e.forEach(function (t, e) {
                          if (u.isNumber(t.x) && u.isNumber(t.y)) {
                            var n = 0.01 * a * f;
                            (i[e].x -= n * (t.x - o[0])),
                              (i[e].y -= n * (t.y - o[1]));
                          }
                        }),
                          e.forEach(function (t, e) {
                            if (u.isNumber(t.fx) && u.isNumber(t.fy))
                              return (t.x = t.fx), void (t.y = t.fy);
                            if (u.isNumber(t.x) && u.isNumber(t.y)) {
                              var n = Math.sqrt(
                                i[e].x * i[e].x + i[e].y * i[e].y,
                              );
                              if (n > 0) {
                                var r = Math.min(c * (y / 800), n);
                                (t.x += (i[e].x / n) * r),
                                  (t.y += (i[e].y / n) * r);
                              }
                            }
                          }),
                          t.tick && t.tick(),
                          ++h >= r &&
                            (t.onLayoutEnd && t.onLayoutEnd(),
                            window.clearInterval(t.timeInterval));
                      }
                    }, 0)),
                    { nodes: e, edges: n }
                  );
                }
              }
            }),
            (e.prototype.applyCalculate = function (t, e, n, r, o) {
              this.calRepulsive(t, n, o), e && this.calAttractive(e, n, r);
            }),
            (e.prototype.calRepulsive = function (t, e, n) {
              t.forEach(function (r, o) {
                (e[o] = { x: 0, y: 0 }),
                  t.forEach(function (t, i) {
                    if (
                      o !== i &&
                      u.isNumber(r.x) &&
                      u.isNumber(t.x) &&
                      u.isNumber(r.y) &&
                      u.isNumber(t.y)
                    ) {
                      var c = r.x - t.x,
                        s = r.y - t.y,
                        a = c * c + s * s;
                      if (0 === a) {
                        a = 1;
                        var f = o > i ? 1 : -1;
                        (c = 0.01 * f), (s = 0.01 * f);
                      }
                      var y = n / a;
                      (e[o].x += c * y), (e[o].y += s * y);
                    }
                  });
              });
            }),
            (e.prototype.calAttractive = function (t, e, n) {
              var r = this;
              t.forEach(function (t) {
                if (t.source && t.target) {
                  var o = r.nodeIdxMap[t.source],
                    i = r.nodeIdxMap[t.target];
                  if (o !== i) {
                    var c = r.nodeMap[t.source],
                      s = r.nodeMap[t.target];
                    if (
                      u.isNumber(s.x) &&
                      u.isNumber(c.x) &&
                      u.isNumber(s.y) &&
                      u.isNumber(c.y)
                    ) {
                      var a = s.x - c.x,
                        f = s.y - c.y,
                        y = Math.sqrt(a * a + f * f),
                        l = (y * y) / n;
                      (e[i].x -= (a / y) * l),
                        (e[i].y -= (f / y) * l),
                        (e[o].x += (a / y) * l),
                        (e[o].y += (f / y) * l);
                    }
                  }
                }
              });
            }),
            (e.prototype.stop = function () {
              this.timeInterval &&
                "undefined" != typeof window &&
                window.clearInterval(this.timeInterval);
            }),
            (e.prototype.destroy = function () {
              this.stop(),
                (this.tick = null),
                (this.nodes = null),
                (this.edges = null),
                (this.destroyed = !0);
            }),
            (e.prototype.getType = function () {
              return "fruchterman";
            }),
            e
          );
        })(i.Base);
      e.FruchtermanLayout = c;
    },
    386: function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(164);
      e.default = r.FruchtermanLayout;
    },
    9: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Base = void 0);
      var r = (function () {
        function t() {
          (this.nodes = []),
            (this.edges = []),
            (this.combos = []),
            (this.positions = []),
            (this.destroyed = !1),
            (this.onLayoutEnd = function () {});
        }
        return (
          (t.prototype.layout = function (t) {
            return this.init(t), this.execute(!0);
          }),
          (t.prototype.init = function (t) {
            (this.nodes = t.nodes || []),
              (this.edges = t.edges || []),
              (this.combos = t.combos || []);
          }),
          (t.prototype.execute = function (t) {}),
          (t.prototype.executeWithWorker = function () {}),
          (t.prototype.getDefaultCfg = function () {
            return {};
          }),
          (t.prototype.updateCfg = function (t) {
            t && Object.assign(this, t);
          }),
          (t.prototype.getType = function () {
            return "base";
          }),
          (t.prototype.destroy = function () {
            (this.nodes = null),
              (this.edges = null),
              (this.combos = null),
              (this.positions = null),
              (this.destroyed = !0);
          }),
          t
        );
      })();
      e.Base = r;
    },
  }).default;
});
//# sourceMappingURL=fruchtermanLayout.js.map
