!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.f6 = e())
    : (t.f6 = e());
})(this, function () {
  return (function (t) {
    var e = {};
    function n(o) {
      if (e[o]) return e[o].exports;
      var r = (e[o] = { i: o, l: !1, exports: {} });
      return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
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
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var r in t)
            n.d(
              o,
              r,
              function (e) {
                return t[e];
              }.bind(null, r),
            );
        return o;
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
      n((n.s = 413))
    );
  })({
    413: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n(57);
      e.default = o.RandomLayout;
    },
    57: function (t, e, n) {
      "use strict";
      var o,
        r =
          (this && this.__extends) ||
          ((o = function (t, e) {
            return (o =
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
            o(t, e),
              (t.prototype =
                null === e
                  ? Object.create(e)
                  : ((n.prototype = e.prototype), new n()));
          });
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.RandomLayout = void 0);
      var i = (function (t) {
        function e(e) {
          var n = t.call(this) || this;
          return (
            (n.center = [0, 0]),
            (n.width = 300),
            (n.height = 300),
            (n.nodes = []),
            (n.edges = []),
            (n.onLayoutEnd = function () {}),
            n.updateCfg(e),
            n
          );
        }
        return (
          r(e, t),
          (e.prototype.getDefaultCfg = function () {
            return { center: [0, 0], width: 300, height: 300 };
          }),
          (e.prototype.execute = function () {
            var t = this,
              e = t.nodes,
              n = t.center;
            return (
              t.width ||
                "undefined" == typeof window ||
                (t.width = window.innerWidth),
              t.height ||
                "undefined" == typeof window ||
                (t.height = window.innerHeight),
              e &&
                e.forEach(function (e) {
                  (e.x = 0.9 * (Math.random() - 0.5) * t.width + n[0]),
                    (e.y = 0.9 * (Math.random() - 0.5) * t.height + n[1]);
                }),
              t.onLayoutEnd && t.onLayoutEnd(),
              { nodes: e, edges: this.edges }
            );
          }),
          (e.prototype.getType = function () {
            return "random";
          }),
          e
        );
      })(n(7).Base);
      e.RandomLayout = i;
    },
    7: function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Base = void 0);
      var o = (function () {
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
      e.Base = o;
    },
  }).default;
});
//# sourceMappingURL=randomLayout.js.map
