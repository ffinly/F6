!(function (t, r) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = r())
    : typeof define === 'function' && define.amd
    ? define([], r)
    : typeof exports === 'object'
    ? (exports.f6 = r())
    : (t.f6 = r());
})(this, () => {
  return (function (t) {
    const r = {};
    function e(o) {
      if (r[o]) return r[o].exports;
      const n = (r[o] = { i: o, l: !1, exports: {} });
      return t[o].call(n.exports, n, n.exports, e), (n.l = !0), n.exports;
    }
    return (
      (e.m = t),
      (e.c = r),
      (e.d = function (t, r, o) {
        e.o(t, r) || Object.defineProperty(t, r, { enumerable: !0, get: o });
      }),
      (e.r = function (t) {
        typeof Symbol !== 'undefined' &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(t, '__esModule', { value: !0 });
      }),
      (e.t = function (t, r) {
        if ((1 & r && (t = e(t)), 8 & r)) return t;
        if (4 & r && typeof t === 'object' && t && t.__esModule) return t;
        const o = Object.create(null);
        if (
          (e.r(o),
          Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
          2 & r && typeof t !== 'string')
        )
          for (const n in t)
            e.d(
              o,
              n,
              ((r) => {
                return t[r];
              }).bind(null, n),
            );
        return o;
      }),
      (e.n = function (t) {
        const r =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(r, 'a', r), r;
      }),
      (e.o = function (t, r) {
        return Object.prototype.hasOwnProperty.call(t, r);
      }),
      (e.p = ''),
      e((e.s = 487))
    );
  })({
    10(t, r, e) {
      'use strict';
      const o =
        (this && this.__createBinding) ||
        (Object.create
          ? function (t, r, e, o) {
              void 0 === o && (o = e),
                Object.defineProperty(t, o, {
                  enumerable: !0,
                  get() {
                    return r[e];
                  },
                });
            }
          : function (t, r, e, o) {
              void 0 === o && (o = e), (t[o] = r[e]);
            });
      const n =
        (this && this.__exportStar) ||
        function (t, r) {
          for (const e in t)
            e === 'default' || Object.prototype.hasOwnProperty.call(r, e) || o(r, t, e);
        };
      Object.defineProperty(r, '__esModule', { value: !0 }),
        n(e(11), r),
        n(e(12), r),
        n(e(13), r),
        n(e(14), r),
        n(e(15), r),
        n(e(16), r);
    },
    11(t, r, e) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.camelize = r.isString = void 0);
      r.isString = function (t) {
        return typeof t === 'string';
      };
      let o;
      let n;
      const i = /-(\w)/g;
      r.camelize =
        ((o = function (t) {
          return t.replace(i, (t, r) => {
            return r ? r.toUpperCase() : '';
          });
        }),
        (n = Object.create(null)),
        function (t) {
          return n[t] || (n[t] = o(t));
        });
    },
    12(t, r, e) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.isArray = void 0),
        (r.isArray = Array.isArray);
    },
    121(t, r, e) {
      'use strict';
      e.r(r),
        e.d(r, 'AbstractMatrix', () => {
          return Q;
        }),
        e.d(r, 'default', () => {
          return K;
        }),
        e.d(r, 'Matrix', () => {
          return K;
        }),
        e.d(r, 'MatrixColumnView', () => {
          return at;
        }),
        e.d(r, 'MatrixColumnSelectionView', () => {
          return yt;
        }),
        e.d(r, 'MatrixFlipColumnView', () => {
          return xt;
        }),
        e.d(r, 'MatrixFlipRowView', () => {
          return _t;
        }),
        e.d(r, 'MatrixRowView', () => {
          return Vt;
        }),
        e.d(r, 'MatrixRowSelectionView', () => {
          return Ut;
        }),
        e.d(r, 'MatrixSelectionView', () => {
          return Xt;
        }),
        e.d(r, 'MatrixSubView', () => {
          return or;
        }),
        e.d(r, 'MatrixTransposeView', () => {
          return cr;
        }),
        e.d(r, 'wrap', () => {
          return Or;
        }),
        e.d(r, 'WrapperMatrix1D', () => {
          return wr;
        }),
        e.d(r, 'WrapperMatrix2D', () => {
          return Er;
        }),
        e.d(r, 'solve', () => {
          return Vr;
        }),
        e.d(r, 'inverse', () => {
          return Ir;
        }),
        e.d(r, 'determinant', () => {
          return qr;
        }),
        e.d(r, 'linearDependencies', () => {
          return Br;
        }),
        e.d(r, 'pseudoInverse', () => {
          return Lr;
        }),
        e.d(r, 'covariance', () => {
          return Ur;
        }),
        e.d(r, 'correlation', () => {
          return Qr;
        }),
        e.d(r, 'SingularValueDecomposition', () => {
          return Nr;
        }),
        e.d(r, 'SVD', () => {
          return Nr;
        }),
        e.d(r, 'EigenvalueDecomposition', () => {
          return Hr;
        }),
        e.d(r, 'EVD', () => {
          return Hr;
        }),
        e.d(r, 'CholeskyDecomposition', () => {
          return re;
        }),
        e.d(r, 'CHO', () => {
          return re;
        }),
        e.d(r, 'LuDecomposition', () => {
          return jr;
        }),
        e.d(r, 'LU', () => {
          return jr;
        }),
        e.d(r, 'QrDecomposition', () => {
          return Tr;
        }),
        e.d(r, 'QR', () => {
          return Tr;
        }),
        e.d(r, 'Nipals', () => {
          return oe;
        }),
        e.d(r, 'NIPALS', () => {
          return oe;
        });
      const o = Object.prototype.toString;
      function n(t) {
        return o.call(t).endsWith('Array]');
      }
      const i = function (t) {
        const r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!n(t)) throw new TypeError('input must be an array');
        if (t.length === 0) throw new TypeError('input must not be empty');
        const e = r.fromIndex;
        const o = void 0 === e ? 0 : e;
        const i = r.toIndex;
        const s = void 0 === i ? t.length : i;
        if (o < 0 || o >= t.length || !Number.isInteger(o))
          throw new Error('fromIndex must be a positive integer smaller than length');
        if (s <= o || s > t.length || !Number.isInteger(s))
          throw new Error(
            'toIndex must be an integer greater than fromIndex and at most equal to length',
          );
        for (var u = t[o], a = o + 1; a < s; a++) t[a] > u && (u = t[a]);
        return u;
      };
      const s = function (t) {
        const r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!n(t)) throw new TypeError('input must be an array');
        if (t.length === 0) throw new TypeError('input must not be empty');
        const e = r.fromIndex;
        const o = void 0 === e ? 0 : e;
        const i = r.toIndex;
        const s = void 0 === i ? t.length : i;
        if (o < 0 || o >= t.length || !Number.isInteger(o))
          throw new Error('fromIndex must be a positive integer smaller than length');
        if (s <= o || s > t.length || !Number.isInteger(s))
          throw new Error(
            'toIndex must be an integer greater than fromIndex and at most equal to length',
          );
        for (var u = t[o], a = o + 1; a < s; a++) t[a] < u && (u = t[a]);
        return u;
      };
      const u = function (t) {
        let r;
        const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (!n(t)) throw new TypeError('input must be an array');
        if (t.length === 0) throw new TypeError('input must not be empty');
        if (void 0 !== e.output) {
          if (!n(e.output)) throw new TypeError('output option must be an array if specified');
          r = e.output;
        } else r = new Array(t.length);
        const o = s(t);
        const u = i(t);
        if (o === u)
          throw new RangeError(
            'minimum and maximum input values are equal. Cannot rescale a constant array',
          );
        const a = e.min;
        const f = void 0 === a ? (e.autoMinMax ? o : 0) : a;
        const c = e.max;
        const h = void 0 === c ? (e.autoMinMax ? u : 1) : c;
        if (f >= h) throw new RangeError('min option must be smaller than max option');
        for (let l = (h - f) / (u - o), p = 0; p < t.length; p++) r[p] = (t[p] - o) * l + f;
        return r;
      };
      const a = ' '.repeat(2);
      const f = ' '.repeat(4);
      function c(t) {
        const r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const e = r.maxRows;
        const o = void 0 === e ? 15 : e;
        const n = r.maxColumns;
        const i = void 0 === n ? 10 : n;
        const s = r.maxNumSize;
        const u = void 0 === s ? 8 : s;
        return ''
          .concat(t.constructor.name, ' {\n')
          .concat(a, '[\n')
          .concat(f)
          .concat(h(t, o, i, u), '\n')
          .concat(a, ']\n')
          .concat(a, 'rows: ')
          .concat(t.rows, '\n')
          .concat(a, 'columns: ')
          .concat(t.columns, '\n}');
      }
      function h(t, r, e, o) {
        for (
          var n = t.rows, i = t.columns, s = Math.min(n, r), u = Math.min(i, e), a = [], c = 0;
          c < s;
          c++
        ) {
          for (var h = [], p = 0; p < u; p++) h.push(l(t.get(c, p), o));
          a.push(''.concat(h.join(' ')));
        }
        return (
          u !== i && (a[a.length - 1] += ' ... '.concat(i - e, ' more columns')),
          s !== n && a.push('... '.concat(n - r, ' more rows')),
          a.join('\n'.concat(f))
        );
      }
      function l(t, r) {
        const e = String(t);
        if (e.length <= r) return e.padEnd(r, ' ');
        const o = t.toPrecision(r - 2);
        if (o.length <= r) return o;
        const n = t.toExponential(r - 2);
        const i = n.indexOf('e');
        const s = n.slice(i);
        return n.slice(0, r - s.length) + s;
      }
      function p(t) {
        return (p =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function v(t, r, e) {
        const o = e ? t.rows : t.rows - 1;
        if (r < 0 || r > o) throw new RangeError('Row index out of range');
      }
      function y(t, r, e) {
        const o = e ? t.columns : t.columns - 1;
        if (r < 0 || r > o) throw new RangeError('Column index out of range');
      }
      function m(t, r) {
        if ((r.to1DArray && (r = r.to1DArray()), r.length !== t.columns))
          throw new RangeError('vector size must be the same as the number of columns');
        return r;
      }
      function g(t, r) {
        if ((r.to1DArray && (r = r.to1DArray()), r.length !== t.rows))
          throw new RangeError('vector size must be the same as the number of rows');
        return r;
      }
      function w(t, r, e) {
        return { row: b(t, r), column: d(t, e) };
      }
      function b(t, r) {
        if (p(r) !== 'object') throw new TypeError('unexpected type for row indices');
        if (
          r.some((r) => {
            return r < 0 || r >= t.rows;
          })
        )
          throw new RangeError('row indices are out of range');
        return Array.isArray(r) || (r = Array.from(r)), r;
      }
      function d(t, r) {
        if (p(r) !== 'object') throw new TypeError('unexpected type for column indices');
        if (
          r.some((r) => {
            return r < 0 || r >= t.columns;
          })
        )
          throw new RangeError('column indices are out of range');
        return Array.isArray(r) || (r = Array.from(r)), r;
      }
      function M(t, r, e, o, n) {
        if (arguments.length !== 5) throw new RangeError('expected 4 arguments');
        if (
          (k('startRow', r),
          k('endRow', e),
          k('startColumn', o),
          k('endColumn', n),
          r > e ||
            o > n ||
            r < 0 ||
            r >= t.rows ||
            e < 0 ||
            e >= t.rows ||
            o < 0 ||
            o >= t.columns ||
            n < 0 ||
            n >= t.columns)
        )
          throw new RangeError('Submatrix indices are out of range');
      }
      function x(t) {
        for (
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, e = [], o = 0;
          o < t;
          o++
        )
          e.push(r);
        return e;
      }
      function k(t, r) {
        if (typeof r !== 'number') throw new TypeError(''.concat(t, ' must be a number'));
      }
      function S(t) {
        if (t.isEmpty()) throw new Error('Empty matrix has no elements to index');
      }
      function E(t, r, e) {
        for (var o = t.rows, n = t.columns, i = [], s = 0; s < o; s++) {
          for (var u = 0, a = 0, f = 0, c = 0; c < n; c++)
            (u += f = t.get(s, c) - e[s]), (a += f * f);
          r ? i.push((a - (u * u) / n) / (n - 1)) : i.push((a - (u * u) / n) / n);
        }
        return i;
      }
      function O(t, r, e) {
        for (var o = t.rows, n = t.columns, i = [], s = 0; s < n; s++) {
          for (var u = 0, a = 0, f = 0, c = 0; c < o; c++)
            (u += f = t.get(c, s) - e[s]), (a += f * f);
          r ? i.push((a - (u * u) / o) / (o - 1)) : i.push((a - (u * u) / o) / o);
        }
        return i;
      }
      function R(t, r, e) {
        for (var o = t.rows, n = t.columns, i = o * n, s = 0, u = 0, a = 0, f = 0; f < o; f++)
          for (let c = 0; c < n; c++) (s += a = t.get(f, c) - e), (u += a * a);
        return r ? (u - (s * s) / i) / (i - 1) : (u - (s * s) / i) / i;
      }
      function j(t, r) {
        for (let e = 0; e < t.rows; e++)
          for (let o = 0; o < t.columns; o++) t.set(e, o, t.get(e, o) - r[e]);
      }
      function _(t, r) {
        for (let e = 0; e < t.rows; e++)
          for (let o = 0; o < t.columns; o++) t.set(e, o, t.get(e, o) - r[o]);
      }
      function P(t, r) {
        for (let e = 0; e < t.rows; e++)
          for (let o = 0; o < t.columns; o++) t.set(e, o, t.get(e, o) - r);
      }
      function T(t) {
        for (var r = [], e = 0; e < t.rows; e++) {
          for (var o = 0, n = 0; n < t.columns; n++)
            o += Math.pow(t.get(e, n), 2) / (t.columns - 1);
          r.push(Math.sqrt(o));
        }
        return r;
      }
      function A(t, r) {
        for (let e = 0; e < t.rows; e++)
          for (let o = 0; o < t.columns; o++) t.set(e, o, t.get(e, o) / r[e]);
      }
      function C(t) {
        for (var r = [], e = 0; e < t.columns; e++) {
          for (var o = 0, n = 0; n < t.rows; n++) o += Math.pow(t.get(n, e), 2) / (t.rows - 1);
          r.push(Math.sqrt(o));
        }
        return r;
      }
      function N(t, r) {
        for (let e = 0; e < t.rows; e++)
          for (let o = 0; o < t.columns; o++) t.set(e, o, t.get(e, o) / r[o]);
      }
      function I(t) {
        for (var r = t.size - 1, e = 0, o = 0; o < t.columns; o++)
          for (let n = 0; n < t.rows; n++) e += Math.pow(t.get(n, o), 2) / r;
        return Math.sqrt(e);
      }
      function V(t, r) {
        for (let e = 0; e < t.rows; e++)
          for (let o = 0; o < t.columns; o++) t.set(e, o, t.get(e, o) / r);
      }
      function q(t, r) {
        return (q =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function D(t) {
        const r = (function () {
          if (typeof Reflect === 'undefined' || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if (typeof Proxy === 'function') return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})), !0;
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          let e;
          const o = B(t);
          if (r) {
            const n = B(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return F(this, e);
        };
      }
      function F(t, r) {
        return !r || (L(r) !== 'object' && typeof r !== 'function')
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function B(t) {
        return (B = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function L(t) {
        return (L =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function z(t, r) {
        if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
      }
      function U(t, r) {
        for (let e = 0; e < r.length; e++) {
          const o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function W(t, r, e) {
        return r && U(t.prototype, r), e && U(t, e), t;
      }
      var Q = (function () {
        function t() {
          z(this, t);
        }
        return (
          W(
            t,
            [
              {
                key: 'size',
                get() {
                  return this.rows * this.columns;
                },
              },
              {
                key: 'apply',
                value(t) {
                  if (typeof t !== 'function') throw new TypeError('callback must be a function');
                  for (let r = 0; r < this.rows; r++)
                    for (let e = 0; e < this.columns; e++) t.call(this, r, e);
                  return this;
                },
              },
              {
                key: 'to1DArray',
                value() {
                  for (var t = [], r = 0; r < this.rows; r++)
                    for (let e = 0; e < this.columns; e++) t.push(this.get(r, e));
                  return t;
                },
              },
              {
                key: 'to2DArray',
                value() {
                  for (var t = [], r = 0; r < this.rows; r++) {
                    t.push([]);
                    for (let e = 0; e < this.columns; e++) t[r].push(this.get(r, e));
                  }
                  return t;
                },
              },
              {
                key: 'toJSON',
                value() {
                  return this.to2DArray();
                },
              },
              {
                key: 'isRowVector',
                value() {
                  return this.rows === 1;
                },
              },
              {
                key: 'isColumnVector',
                value() {
                  return this.columns === 1;
                },
              },
              {
                key: 'isVector',
                value() {
                  return this.rows === 1 || this.columns === 1;
                },
              },
              {
                key: 'isSquare',
                value() {
                  return this.rows === this.columns;
                },
              },
              {
                key: 'isEmpty',
                value() {
                  return this.rows === 0 || this.columns === 0;
                },
              },
              {
                key: 'isSymmetric',
                value() {
                  if (this.isSquare()) {
                    for (let t = 0; t < this.rows; t++)
                      for (let r = 0; r <= t; r++) if (this.get(t, r) !== this.get(r, t)) return !1;
                    return !0;
                  }
                  return !1;
                },
              },
              {
                key: 'isEchelonForm',
                value() {
                  for (var t = 0, r = 0, e = -1, o = !0, n = !1; t < this.rows && o; ) {
                    for (r = 0, n = !1; r < this.columns && !1 === n; )
                      this.get(t, r) === 0
                        ? r++
                        : this.get(t, r) === 1 && r > e
                        ? ((n = !0), (e = r))
                        : ((o = !1), (n = !0));
                    t++;
                  }
                  return o;
                },
              },
              {
                key: 'isReducedEchelonForm',
                value() {
                  for (var t = 0, r = 0, e = -1, o = !0, n = !1; t < this.rows && o; ) {
                    for (r = 0, n = !1; r < this.columns && !1 === n; )
                      this.get(t, r) === 0
                        ? r++
                        : this.get(t, r) === 1 && r > e
                        ? ((n = !0), (e = r))
                        : ((o = !1), (n = !0));
                    for (let i = r + 1; i < this.rows; i++) this.get(t, i) !== 0 && (o = !1);
                    t++;
                  }
                  return o;
                },
              },
              {
                key: 'echelonForm',
                value() {
                  for (var t = this.clone(), r = 0, e = 0; r < t.rows && e < t.columns; ) {
                    for (var o = r, n = r; n < t.rows; n++) t.get(n, e) > t.get(o, e) && (o = n);
                    if (t.get(o, e) === 0) e++;
                    else {
                      t.swapRows(r, o);
                      for (let i = t.get(r, e), s = e; s < t.columns; s++)
                        t.set(r, s, t.get(r, s) / i);
                      for (let u = r + 1; u < t.rows; u++) {
                        const a = t.get(u, e) / t.get(r, e);
                        t.set(u, e, 0);
                        for (let f = e + 1; f < t.columns; f++)
                          t.set(u, f, t.get(u, f) - t.get(r, f) * a);
                      }
                      r++, e++;
                    }
                  }
                  return t;
                },
              },
              {
                key: 'reducedEchelonForm',
                value() {
                  for (var t = this.echelonForm(), r = t.columns, e = t.rows, o = e - 1; o >= 0; )
                    if (t.maxRow(o) === 0) o--;
                    else {
                      for (var n = 0, i = !1; n < e && !1 === i; )
                        t.get(o, n) === 1 ? (i = !0) : n++;
                      for (let s = 0; s < o; s++)
                        for (let u = t.get(s, n), a = n; a < r; a++) {
                          const f = t.get(s, a) - u * t.get(o, a);
                          t.set(s, a, f);
                        }
                      o--;
                    }
                  return t;
                },
              },
              {
                key: 'set',
                value() {
                  throw new Error('set method is unimplemented');
                },
              },
              {
                key: 'get',
                value() {
                  throw new Error('get method is unimplemented');
                },
              },
              {
                key: 'repeat',
                value() {
                  const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  if (L(t) !== 'object') throw new TypeError('options must be an object');
                  const r = t.rows;
                  const e = void 0 === r ? 1 : r;
                  const o = t.columns;
                  const n = void 0 === o ? 1 : o;
                  if (!Number.isInteger(e) || e <= 0)
                    throw new TypeError('rows must be a positive integer');
                  if (!Number.isInteger(n) || n <= 0)
                    throw new TypeError('columns must be a positive integer');
                  for (var i = new K(this.rows * e, this.columns * n), s = 0; s < e; s++)
                    for (let u = 0; u < n; u++)
                      i.setSubMatrix(this, this.rows * s, this.columns * u);
                  return i;
                },
              },
              {
                key: 'fill',
                value(t) {
                  for (let r = 0; r < this.rows; r++)
                    for (let e = 0; e < this.columns; e++) this.set(r, e, t);
                  return this;
                },
              },
              {
                key: 'neg',
                value() {
                  return this.mulS(-1);
                },
              },
              {
                key: 'getRow',
                value(t) {
                  v(this, t);
                  for (var r = [], e = 0; e < this.columns; e++) r.push(this.get(t, e));
                  return r;
                },
              },
              {
                key: 'getRowVector',
                value(t) {
                  return K.rowVector(this.getRow(t));
                },
              },
              {
                key: 'setRow',
                value(t, r) {
                  v(this, t), (r = m(this, r));
                  for (let e = 0; e < this.columns; e++) this.set(t, e, r[e]);
                  return this;
                },
              },
              {
                key: 'swapRows',
                value(t, r) {
                  v(this, t), v(this, r);
                  for (let e = 0; e < this.columns; e++) {
                    const o = this.get(t, e);
                    this.set(t, e, this.get(r, e)), this.set(r, e, o);
                  }
                  return this;
                },
              },
              {
                key: 'getColumn',
                value(t) {
                  y(this, t);
                  for (var r = [], e = 0; e < this.rows; e++) r.push(this.get(e, t));
                  return r;
                },
              },
              {
                key: 'getColumnVector',
                value(t) {
                  return K.columnVector(this.getColumn(t));
                },
              },
              {
                key: 'setColumn',
                value(t, r) {
                  y(this, t), (r = g(this, r));
                  for (let e = 0; e < this.rows; e++) this.set(e, t, r[e]);
                  return this;
                },
              },
              {
                key: 'swapColumns',
                value(t, r) {
                  y(this, t), y(this, r);
                  for (let e = 0; e < this.rows; e++) {
                    const o = this.get(e, t);
                    this.set(e, t, this.get(e, r)), this.set(e, r, o);
                  }
                  return this;
                },
              },
              {
                key: 'addRowVector',
                value(t) {
                  t = m(this, t);
                  for (let r = 0; r < this.rows; r++)
                    for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) + t[e]);
                  return this;
                },
              },
              {
                key: 'subRowVector',
                value(t) {
                  t = m(this, t);
                  for (let r = 0; r < this.rows; r++)
                    for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) - t[e]);
                  return this;
                },
              },
              {
                key: 'mulRowVector',
                value(t) {
                  t = m(this, t);
                  for (let r = 0; r < this.rows; r++)
                    for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) * t[e]);
                  return this;
                },
              },
              {
                key: 'divRowVector',
                value(t) {
                  t = m(this, t);
                  for (let r = 0; r < this.rows; r++)
                    for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) / t[e]);
                  return this;
                },
              },
              {
                key: 'addColumnVector',
                value(t) {
                  t = g(this, t);
                  for (let r = 0; r < this.rows; r++)
                    for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) + t[r]);
                  return this;
                },
              },
              {
                key: 'subColumnVector',
                value(t) {
                  t = g(this, t);
                  for (let r = 0; r < this.rows; r++)
                    for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) - t[r]);
                  return this;
                },
              },
              {
                key: 'mulColumnVector',
                value(t) {
                  t = g(this, t);
                  for (let r = 0; r < this.rows; r++)
                    for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) * t[r]);
                  return this;
                },
              },
              {
                key: 'divColumnVector',
                value(t) {
                  t = g(this, t);
                  for (let r = 0; r < this.rows; r++)
                    for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) / t[r]);
                  return this;
                },
              },
              {
                key: 'mulRow',
                value(t, r) {
                  v(this, t);
                  for (let e = 0; e < this.columns; e++) this.set(t, e, this.get(t, e) * r);
                  return this;
                },
              },
              {
                key: 'mulColumn',
                value(t, r) {
                  y(this, t);
                  for (let e = 0; e < this.rows; e++) this.set(e, t, this.get(e, t) * r);
                  return this;
                },
              },
              {
                key: 'max',
                value() {
                  if (this.isEmpty()) return NaN;
                  for (var t = this.get(0, 0), r = 0; r < this.rows; r++)
                    for (let e = 0; e < this.columns; e++)
                      this.get(r, e) > t && (t = this.get(r, e));
                  return t;
                },
              },
              {
                key: 'maxIndex',
                value() {
                  S(this);
                  for (var t = this.get(0, 0), r = [0, 0], e = 0; e < this.rows; e++)
                    for (let o = 0; o < this.columns; o++)
                      this.get(e, o) > t && ((t = this.get(e, o)), (r[0] = e), (r[1] = o));
                  return r;
                },
              },
              {
                key: 'min',
                value() {
                  if (this.isEmpty()) return NaN;
                  for (var t = this.get(0, 0), r = 0; r < this.rows; r++)
                    for (let e = 0; e < this.columns; e++)
                      this.get(r, e) < t && (t = this.get(r, e));
                  return t;
                },
              },
              {
                key: 'minIndex',
                value() {
                  S(this);
                  for (var t = this.get(0, 0), r = [0, 0], e = 0; e < this.rows; e++)
                    for (let o = 0; o < this.columns; o++)
                      this.get(e, o) < t && ((t = this.get(e, o)), (r[0] = e), (r[1] = o));
                  return r;
                },
              },
              {
                key: 'maxRow',
                value(t) {
                  if ((v(this, t), this.isEmpty())) return NaN;
                  for (var r = this.get(t, 0), e = 1; e < this.columns; e++)
                    this.get(t, e) > r && (r = this.get(t, e));
                  return r;
                },
              },
              {
                key: 'maxRowIndex',
                value(t) {
                  v(this, t), S(this);
                  for (var r = this.get(t, 0), e = [t, 0], o = 1; o < this.columns; o++)
                    this.get(t, o) > r && ((r = this.get(t, o)), (e[1] = o));
                  return e;
                },
              },
              {
                key: 'minRow',
                value(t) {
                  if ((v(this, t), this.isEmpty())) return NaN;
                  for (var r = this.get(t, 0), e = 1; e < this.columns; e++)
                    this.get(t, e) < r && (r = this.get(t, e));
                  return r;
                },
              },
              {
                key: 'minRowIndex',
                value(t) {
                  v(this, t), S(this);
                  for (var r = this.get(t, 0), e = [t, 0], o = 1; o < this.columns; o++)
                    this.get(t, o) < r && ((r = this.get(t, o)), (e[1] = o));
                  return e;
                },
              },
              {
                key: 'maxColumn',
                value(t) {
                  if ((y(this, t), this.isEmpty())) return NaN;
                  for (var r = this.get(0, t), e = 1; e < this.rows; e++)
                    this.get(e, t) > r && (r = this.get(e, t));
                  return r;
                },
              },
              {
                key: 'maxColumnIndex',
                value(t) {
                  y(this, t), S(this);
                  for (var r = this.get(0, t), e = [0, t], o = 1; o < this.rows; o++)
                    this.get(o, t) > r && ((r = this.get(o, t)), (e[0] = o));
                  return e;
                },
              },
              {
                key: 'minColumn',
                value(t) {
                  if ((y(this, t), this.isEmpty())) return NaN;
                  for (var r = this.get(0, t), e = 1; e < this.rows; e++)
                    this.get(e, t) < r && (r = this.get(e, t));
                  return r;
                },
              },
              {
                key: 'minColumnIndex',
                value(t) {
                  y(this, t), S(this);
                  for (var r = this.get(0, t), e = [0, t], o = 1; o < this.rows; o++)
                    this.get(o, t) < r && ((r = this.get(o, t)), (e[0] = o));
                  return e;
                },
              },
              {
                key: 'diag',
                value() {
                  for (var t = Math.min(this.rows, this.columns), r = [], e = 0; e < t; e++)
                    r.push(this.get(e, e));
                  return r;
                },
              },
              {
                key: 'norm',
                value() {
                  const t =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'frobenius';
                  let r = 0;
                  if (t === 'max') return this.max();
                  if (t === 'frobenius') {
                    for (let e = 0; e < this.rows; e++)
                      for (let o = 0; o < this.columns; o++) r += this.get(e, o) * this.get(e, o);
                    return Math.sqrt(r);
                  }
                  throw new RangeError('unknown norm type: '.concat(t));
                },
              },
              {
                key: 'cumulativeSum',
                value() {
                  for (let t = 0, r = 0; r < this.rows; r++)
                    for (let e = 0; e < this.columns; e++) (t += this.get(r, e)), this.set(r, e, t);
                  return this;
                },
              },
              {
                key: 'dot',
                value(r) {
                  t.isMatrix(r) && (r = r.to1DArray());
                  const e = this.to1DArray();
                  if (e.length !== r.length)
                    throw new RangeError('vectors do not have the same size');
                  for (var o = 0, n = 0; n < e.length; n++) o += e[n] * r[n];
                  return o;
                },
              },
              {
                key: 'mmul',
                value(t) {
                  t = K.checkMatrix(t);
                  for (
                    var r = this.rows,
                      e = this.columns,
                      o = t.columns,
                      n = new K(r, o),
                      i = new Float64Array(e),
                      s = 0;
                    s < o;
                    s++
                  ) {
                    for (let u = 0; u < e; u++) i[u] = t.get(u, s);
                    for (let a = 0; a < r; a++) {
                      for (var f = 0, c = 0; c < e; c++) f += this.get(a, c) * i[c];
                      n.set(a, s, f);
                    }
                  }
                  return n;
                },
              },
              {
                key: 'strassen2x2',
                value(t) {
                  t = K.checkMatrix(t);
                  const r = new K(2, 2);
                  const e = this.get(0, 0);
                  const o = t.get(0, 0);
                  const n = this.get(0, 1);
                  const i = t.get(0, 1);
                  const s = this.get(1, 0);
                  const u = t.get(1, 0);
                  const a = this.get(1, 1);
                  const f = t.get(1, 1);
                  const c = (e + a) * (o + f);
                  const h = (s + a) * o;
                  const l = e * (i - f);
                  const p = a * (u - o);
                  const v = (e + n) * f;
                  const y = c + p - v + (n - a) * (u + f);
                  const m = l + v;
                  const g = h + p;
                  const w = c - h + l + (s - e) * (o + i);
                  return r.set(0, 0, y), r.set(0, 1, m), r.set(1, 0, g), r.set(1, 1, w), r;
                },
              },
              {
                key: 'strassen3x3',
                value(t) {
                  t = K.checkMatrix(t);
                  const r = new K(3, 3);
                  const e = this.get(0, 0);
                  const o = this.get(0, 1);
                  const n = this.get(0, 2);
                  const i = this.get(1, 0);
                  const s = this.get(1, 1);
                  const u = this.get(1, 2);
                  const a = this.get(2, 0);
                  const f = this.get(2, 1);
                  const c = this.get(2, 2);
                  const h = t.get(0, 0);
                  const l = t.get(0, 1);
                  const p = t.get(0, 2);
                  const v = t.get(1, 0);
                  const y = t.get(1, 1);
                  const m = t.get(1, 2);
                  const g = t.get(2, 0);
                  const w = t.get(2, 1);
                  const b = t.get(2, 2);
                  const d = (e - i) * (-l + y);
                  const M = (-e + i + s) * (h - l + y);
                  const x = (i + s) * (-h + l);
                  const k = e * h;
                  const S = (-e + a + f) * (h - p + m);
                  const E = (-e + a) * (p - m);
                  const O = (a + f) * (-h + p);
                  const R = (-n + f + c) * (y + g - w);
                  const j = (n - c) * (y - w);
                  const _ = n * g;
                  const P = (f + c) * (-g + w);
                  const T = (-n + s + u) * (m + g - b);
                  const A = (n - u) * (m - b);
                  const C = (s + u) * (-g + b);
                  const N = k + _ + o * v;
                  const I = (e + o + n - i - s - f - c) * y + M + x + k + R + _ + P;
                  const V = k + S + O + (e + o + n - s - u - a - f) * m + _ + T + C;
                  const q = d + s * (-h + l + v - y - m - g + b) + M + k + _ + T + A;
                  const D = d + M + x + k + u * w;
                  const F = _ + T + A + C + i * p;
                  const B = k + S + E + f * (-h + p + v - y - m - g + w) + R + j + _;
                  const L = R + j + _ + P + a * l;
                  const z = k + S + E + O + c * b;
                  return (
                    r.set(0, 0, N),
                    r.set(0, 1, I),
                    r.set(0, 2, V),
                    r.set(1, 0, q),
                    r.set(1, 1, D),
                    r.set(1, 2, F),
                    r.set(2, 0, B),
                    r.set(2, 1, L),
                    r.set(2, 2, z),
                    r
                  );
                },
              },
              {
                key: 'mmulStrassen',
                value(r) {
                  r = K.checkMatrix(r);
                  let e = this.clone();
                  const o = e.rows;
                  const n = e.columns;
                  const i = r.rows;
                  const s = r.columns;
                  function u(r, e, o) {
                    const n = r.rows;
                    const i = r.columns;
                    if (n === e && i === o) return r;
                    let s = t.zeros(e, o);
                    return (s = s.setSubMatrix(r, 0, 0));
                  }
                  n !== i &&
                    console.warn(
                      'Multiplying '
                        .concat(o, ' x ')
                        .concat(n, ' and ')
                        .concat(i, ' x ')
                        .concat(s, ' matrix: dimensions do not match.'),
                    );
                  const a = Math.max(o, i);
                  const f = Math.max(n, s);
                  return (function r(e, o, n, i) {
                    if (n <= 512 || i <= 512) return e.mmul(o);
                    n % 2 == 1 && i % 2 == 1
                      ? ((e = u(e, n + 1, i + 1)), (o = u(o, n + 1, i + 1)))
                      : n % 2 == 1
                      ? ((e = u(e, n + 1, i)), (o = u(o, n + 1, i)))
                      : i % 2 == 1 && ((e = u(e, n, i + 1)), (o = u(o, n, i + 1)));
                    const s = parseInt(e.rows / 2, 10);
                    const a = parseInt(e.columns / 2, 10);
                    const f = e.subMatrix(0, s - 1, 0, a - 1);
                    const c = o.subMatrix(0, s - 1, 0, a - 1);
                    const h = e.subMatrix(0, s - 1, a, e.columns - 1);
                    const l = o.subMatrix(0, s - 1, a, o.columns - 1);
                    const p = e.subMatrix(s, e.rows - 1, 0, a - 1);
                    const v = o.subMatrix(s, o.rows - 1, 0, a - 1);
                    const y = e.subMatrix(s, e.rows - 1, a, e.columns - 1);
                    const m = o.subMatrix(s, o.rows - 1, a, o.columns - 1);
                    const g = r(t.add(f, y), t.add(c, m), s, a);
                    const w = r(t.add(p, y), c, s, a);
                    const b = r(f, t.sub(l, m), s, a);
                    const d = r(y, t.sub(v, c), s, a);
                    const M = r(t.add(f, h), m, s, a);
                    const x = r(t.sub(p, f), t.add(c, l), s, a);
                    const k = r(t.sub(h, y), t.add(v, m), s, a);
                    const S = t.add(g, d);
                    S.sub(M), S.add(k);
                    const E = t.add(b, M);
                    const O = t.add(w, d);
                    const R = t.sub(g, w);
                    R.add(b), R.add(x);
                    let j = t.zeros(2 * S.rows, 2 * S.columns);
                    return (j = (j = (j = (j = j.setSubMatrix(S, 0, 0)).setSubMatrix(
                      E,
                      S.rows,
                      0,
                    )).setSubMatrix(O, 0, S.columns)).setSubMatrix(R, S.rows, S.columns)).subMatrix(
                      0,
                      n - 1,
                      0,
                      i - 1,
                    );
                  })((e = u(e, a, f)), (r = u(r, a, f)), a, f);
                },
              },
              {
                key: 'scaleRows',
                value() {
                  const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  if (L(t) !== 'object') throw new TypeError('options must be an object');
                  const r = t.min;
                  const e = void 0 === r ? 0 : r;
                  const o = t.max;
                  const n = void 0 === o ? 1 : o;
                  if (!Number.isFinite(e)) throw new TypeError('min must be a number');
                  if (!Number.isFinite(n)) throw new TypeError('max must be a number');
                  if (e >= n) throw new RangeError('min must be smaller than max');
                  for (var i = new K(this.rows, this.columns), s = 0; s < this.rows; s++) {
                    const a = this.getRow(s);
                    a.length > 0 && u(a, { min: e, max: n, output: a }), i.setRow(s, a);
                  }
                  return i;
                },
              },
              {
                key: 'scaleColumns',
                value() {
                  const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  if (L(t) !== 'object') throw new TypeError('options must be an object');
                  const r = t.min;
                  const e = void 0 === r ? 0 : r;
                  const o = t.max;
                  const n = void 0 === o ? 1 : o;
                  if (!Number.isFinite(e)) throw new TypeError('min must be a number');
                  if (!Number.isFinite(n)) throw new TypeError('max must be a number');
                  if (e >= n) throw new RangeError('min must be smaller than max');
                  for (var i = new K(this.rows, this.columns), s = 0; s < this.columns; s++) {
                    const a = this.getColumn(s);
                    a.length && u(a, { min: e, max: n, output: a }), i.setColumn(s, a);
                  }
                  return i;
                },
              },
              {
                key: 'flipRows',
                value() {
                  for (let t = Math.ceil(this.columns / 2), r = 0; r < this.rows; r++)
                    for (let e = 0; e < t; e++) {
                      const o = this.get(r, e);
                      const n = this.get(r, this.columns - 1 - e);
                      this.set(r, e, n), this.set(r, this.columns - 1 - e, o);
                    }
                  return this;
                },
              },
              {
                key: 'flipColumns',
                value() {
                  for (let t = Math.ceil(this.rows / 2), r = 0; r < this.columns; r++)
                    for (let e = 0; e < t; e++) {
                      const o = this.get(e, r);
                      const n = this.get(this.rows - 1 - e, r);
                      this.set(e, r, n), this.set(this.rows - 1 - e, r, o);
                    }
                  return this;
                },
              },
              {
                key: 'kroneckerProduct',
                value(t) {
                  t = K.checkMatrix(t);
                  for (
                    var r = this.rows,
                      e = this.columns,
                      o = t.rows,
                      n = t.columns,
                      i = new K(r * o, e * n),
                      s = 0;
                    s < r;
                    s++
                  )
                    for (let u = 0; u < e; u++)
                      for (let a = 0; a < o; a++)
                        for (let f = 0; f < n; f++)
                          i.set(o * s + a, n * u + f, this.get(s, u) * t.get(a, f));
                  return i;
                },
              },
              {
                key: 'kroneckerSum',
                value(t) {
                  if (((t = K.checkMatrix(t)), !this.isSquare() || !t.isSquare()))
                    throw new Error('Kronecker Sum needs two Square Matrices');
                  const r = this.rows;
                  const e = t.rows;
                  const o = this.kroneckerProduct(K.eye(e, e));
                  const n = K.eye(r, r).kroneckerProduct(t);
                  return o.add(n);
                },
              },
              {
                key: 'transpose',
                value() {
                  for (var t = new K(this.columns, this.rows), r = 0; r < this.rows; r++)
                    for (let e = 0; e < this.columns; e++) t.set(e, r, this.get(r, e));
                  return t;
                },
              },
              {
                key: 'sortRows',
                value() {
                  for (
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
                      r = 0;
                    r < this.rows;
                    r++
                  )
                    this.setRow(r, this.getRow(r).sort(t));
                  return this;
                },
              },
              {
                key: 'sortColumns',
                value() {
                  for (
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : J,
                      r = 0;
                    r < this.columns;
                    r++
                  )
                    this.setColumn(r, this.getColumn(r).sort(t));
                  return this;
                },
              },
              {
                key: 'subMatrix',
                value(t, r, e, o) {
                  M(this, t, r, e, o);
                  for (var n = new K(r - t + 1, o - e + 1), i = t; i <= r; i++)
                    for (let s = e; s <= o; s++) n.set(i - t, s - e, this.get(i, s));
                  return n;
                },
              },
              {
                key: 'subMatrixRow',
                value(t, r, e) {
                  if (
                    (void 0 === r && (r = 0),
                    void 0 === e && (e = this.columns - 1),
                    r > e || r < 0 || r >= this.columns || e < 0 || e >= this.columns)
                  )
                    throw new RangeError('Argument out of range');
                  for (var o = new K(t.length, e - r + 1), n = 0; n < t.length; n++)
                    for (let i = r; i <= e; i++) {
                      if (t[n] < 0 || t[n] >= this.rows)
                        throw new RangeError('Row index out of range: '.concat(t[n]));
                      o.set(n, i - r, this.get(t[n], i));
                    }
                  return o;
                },
              },
              {
                key: 'subMatrixColumn',
                value(t, r, e) {
                  if (
                    (void 0 === r && (r = 0),
                    void 0 === e && (e = this.rows - 1),
                    r > e || r < 0 || r >= this.rows || e < 0 || e >= this.rows)
                  )
                    throw new RangeError('Argument out of range');
                  for (var o = new K(e - r + 1, t.length), n = 0; n < t.length; n++)
                    for (let i = r; i <= e; i++) {
                      if (t[n] < 0 || t[n] >= this.columns)
                        throw new RangeError('Column index out of range: '.concat(t[n]));
                      o.set(i - r, n, this.get(i, t[n]));
                    }
                  return o;
                },
              },
              {
                key: 'setSubMatrix',
                value(t, r, e) {
                  if ((t = K.checkMatrix(t)).isEmpty()) return this;
                  M(this, r, r + t.rows - 1, e, e + t.columns - 1);
                  for (let o = 0; o < t.rows; o++)
                    for (let n = 0; n < t.columns; n++) this.set(r + o, e + n, t.get(o, n));
                  return this;
                },
              },
              {
                key: 'selection',
                value(t, r) {
                  for (
                    var e = w(this, t, r), o = new K(t.length, r.length), n = 0;
                    n < e.row.length;
                    n++
                  )
                    for (let i = e.row[n], s = 0; s < e.column.length; s++) {
                      const u = e.column[s];
                      o.set(n, s, this.get(i, u));
                    }
                  return o;
                },
              },
              {
                key: 'trace',
                value() {
                  for (var t = Math.min(this.rows, this.columns), r = 0, e = 0; e < t; e++)
                    r += this.get(e, e);
                  return r;
                },
              },
              {
                key: 'clone',
                value() {
                  for (var t = new K(this.rows, this.columns), r = 0; r < this.rows; r++)
                    for (let e = 0; e < this.columns; e++) t.set(r, e, this.get(r, e));
                  return t;
                },
              },
              {
                key: 'sum',
                value(t) {
                  switch (t) {
                    case 'row':
                      return (function (t) {
                        for (var r = x(t.rows), e = 0; e < t.rows; ++e)
                          for (let o = 0; o < t.columns; ++o) r[e] += t.get(e, o);
                        return r;
                      })(this);
                    case 'column':
                      return (function (t) {
                        for (var r = x(t.columns), e = 0; e < t.rows; ++e)
                          for (let o = 0; o < t.columns; ++o) r[o] += t.get(e, o);
                        return r;
                      })(this);
                    case void 0:
                      return (function (t) {
                        for (var r = 0, e = 0; e < t.rows; e++)
                          for (let o = 0; o < t.columns; o++) r += t.get(e, o);
                        return r;
                      })(this);
                    default:
                      throw new Error('invalid option: '.concat(t));
                  }
                },
              },
              {
                key: 'product',
                value(t) {
                  switch (t) {
                    case 'row':
                      return (function (t) {
                        for (var r = x(t.rows, 1), e = 0; e < t.rows; ++e)
                          for (let o = 0; o < t.columns; ++o) r[e] *= t.get(e, o);
                        return r;
                      })(this);
                    case 'column':
                      return (function (t) {
                        for (var r = x(t.columns, 1), e = 0; e < t.rows; ++e)
                          for (let o = 0; o < t.columns; ++o) r[o] *= t.get(e, o);
                        return r;
                      })(this);
                    case void 0:
                      return (function (t) {
                        for (var r = 1, e = 0; e < t.rows; e++)
                          for (let o = 0; o < t.columns; o++) r *= t.get(e, o);
                        return r;
                      })(this);
                    default:
                      throw new Error('invalid option: '.concat(t));
                  }
                },
              },
              {
                key: 'mean',
                value(t) {
                  const r = this.sum(t);
                  switch (t) {
                    case 'row':
                      for (let e = 0; e < this.rows; e++) r[e] /= this.columns;
                      return r;
                    case 'column':
                      for (let o = 0; o < this.columns; o++) r[o] /= this.rows;
                      return r;
                    case void 0:
                      return r / this.size;
                    default:
                      throw new Error('invalid option: '.concat(t));
                  }
                },
              },
              {
                key: 'variance',
                value(t) {
                  let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  if ((L(t) === 'object' && ((r = t), (t = void 0)), L(r) !== 'object'))
                    throw new TypeError('options must be an object');
                  const e = r;
                  const o = e.unbiased;
                  const n = void 0 === o || o;
                  const i = e.mean;
                  const s = void 0 === i ? this.mean(t) : i;
                  if (typeof n !== 'boolean') throw new TypeError('unbiased must be a boolean');
                  switch (t) {
                    case 'row':
                      if (!Array.isArray(s)) throw new TypeError('mean must be an array');
                      return E(this, n, s);
                    case 'column':
                      if (!Array.isArray(s)) throw new TypeError('mean must be an array');
                      return O(this, n, s);
                    case void 0:
                      if (typeof s !== 'number') throw new TypeError('mean must be a number');
                      return R(this, n, s);
                    default:
                      throw new Error('invalid option: '.concat(t));
                  }
                },
              },
              {
                key: 'standardDeviation',
                value(t, r) {
                  L(t) === 'object' && ((r = t), (t = void 0));
                  const e = this.variance(t, r);
                  if (void 0 === t) return Math.sqrt(e);
                  for (let o = 0; o < e.length; o++) e[o] = Math.sqrt(e[o]);
                  return e;
                },
              },
              {
                key: 'center',
                value(t) {
                  let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  if ((L(t) === 'object' && ((r = t), (t = void 0)), L(r) !== 'object'))
                    throw new TypeError('options must be an object');
                  const e = r;
                  const o = e.center;
                  const n = void 0 === o ? this.mean(t) : o;
                  switch (t) {
                    case 'row':
                      if (!Array.isArray(n)) throw new TypeError('center must be an array');
                      return j(this, n), this;
                    case 'column':
                      if (!Array.isArray(n)) throw new TypeError('center must be an array');
                      return _(this, n), this;
                    case void 0:
                      if (typeof n !== 'number') throw new TypeError('center must be a number');
                      return P(this, n), this;
                    default:
                      throw new Error('invalid option: '.concat(t));
                  }
                },
              },
              {
                key: 'scale',
                value(t) {
                  let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  if ((L(t) === 'object' && ((r = t), (t = void 0)), L(r) !== 'object'))
                    throw new TypeError('options must be an object');
                  let e = r.scale;
                  switch (t) {
                    case 'row':
                      if (void 0 === e) e = T(this);
                      else if (!Array.isArray(e)) throw new TypeError('scale must be an array');
                      return A(this, e), this;
                    case 'column':
                      if (void 0 === e) e = C(this);
                      else if (!Array.isArray(e)) throw new TypeError('scale must be an array');
                      return N(this, e), this;
                    case void 0:
                      if (void 0 === e) e = I(this);
                      else if (typeof e !== 'number') throw new TypeError('scale must be a number');
                      return V(this, e), this;
                    default:
                      throw new Error('invalid option: '.concat(t));
                  }
                },
              },
              {
                key: 'toString',
                value(t) {
                  return c(this, t);
                },
              },
            ],
            [
              {
                key: 'from1DArray',
                value(t, r, e) {
                  if (t * r !== e.length)
                    throw new RangeError('data length does not match given dimensions');
                  for (var o = new K(t, r), n = 0; n < t; n++)
                    for (let i = 0; i < r; i++) o.set(n, i, e[n * r + i]);
                  return o;
                },
              },
              {
                key: 'rowVector',
                value(t) {
                  for (var r = new K(1, t.length), e = 0; e < t.length; e++) r.set(0, e, t[e]);
                  return r;
                },
              },
              {
                key: 'columnVector',
                value(t) {
                  for (var r = new K(t.length, 1), e = 0; e < t.length; e++) r.set(e, 0, t[e]);
                  return r;
                },
              },
              {
                key: 'zeros',
                value(t, r) {
                  return new K(t, r);
                },
              },
              {
                key: 'ones',
                value(t, r) {
                  return new K(t, r).fill(1);
                },
              },
              {
                key: 'rand',
                value(t, r) {
                  const e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                  if (L(e) !== 'object') throw new TypeError('options must be an object');
                  for (
                    var o = e.random, n = void 0 === o ? Math.random : o, i = new K(t, r), s = 0;
                    s < t;
                    s++
                  )
                    for (let u = 0; u < r; u++) i.set(s, u, n());
                  return i;
                },
              },
              {
                key: 'randInt',
                value(t, r) {
                  const e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                  if (L(e) !== 'object') throw new TypeError('options must be an object');
                  const o = e.min;
                  const n = void 0 === o ? 0 : o;
                  const i = e.max;
                  const s = void 0 === i ? 1e3 : i;
                  const u = e.random;
                  const a = void 0 === u ? Math.random : u;
                  if (!Number.isInteger(n)) throw new TypeError('min must be an integer');
                  if (!Number.isInteger(s)) throw new TypeError('max must be an integer');
                  if (n >= s) throw new RangeError('min must be smaller than max');
                  for (var f = s - n, c = new K(t, r), h = 0; h < t; h++)
                    for (let l = 0; l < r; l++) {
                      const p = n + Math.round(a() * f);
                      c.set(h, l, p);
                    }
                  return c;
                },
              },
              {
                key: 'eye',
                value(t, r, e) {
                  void 0 === r && (r = t), void 0 === e && (e = 1);
                  for (var o = Math.min(t, r), n = this.zeros(t, r), i = 0; i < o; i++)
                    n.set(i, i, e);
                  return n;
                },
              },
              {
                key: 'diag',
                value(t, r, e) {
                  const o = t.length;
                  void 0 === r && (r = o), void 0 === e && (e = r);
                  for (var n = Math.min(o, r, e), i = this.zeros(r, e), s = 0; s < n; s++)
                    i.set(s, s, t[s]);
                  return i;
                },
              },
              {
                key: 'min',
                value(t, r) {
                  (t = this.checkMatrix(t)), (r = this.checkMatrix(r));
                  for (var e = t.rows, o = t.columns, n = new K(e, o), i = 0; i < e; i++)
                    for (let s = 0; s < o; s++) n.set(i, s, Math.min(t.get(i, s), r.get(i, s)));
                  return n;
                },
              },
              {
                key: 'max',
                value(t, r) {
                  (t = this.checkMatrix(t)), (r = this.checkMatrix(r));
                  for (var e = t.rows, o = t.columns, n = new this(e, o), i = 0; i < e; i++)
                    for (let s = 0; s < o; s++) n.set(i, s, Math.max(t.get(i, s), r.get(i, s)));
                  return n;
                },
              },
              {
                key: 'checkMatrix',
                value(r) {
                  return t.isMatrix(r) ? r : new K(r);
                },
              },
              {
                key: 'isMatrix',
                value(t) {
                  return t != null && t.klass === 'Matrix';
                },
              },
            ],
          ),
          t
        );
      })();
      function J(t, r) {
        return t - r;
      }
      (Q.prototype.klass = 'Matrix'),
        typeof Symbol !== 'undefined' &&
          (Q.prototype[Symbol.for('nodejs.util.inspect.custom')] = function () {
            return c(this);
          }),
        (Q.random = Q.rand),
        (Q.randomInt = Q.randInt),
        (Q.diagonal = Q.diag),
        (Q.prototype.diagonal = Q.prototype.diag),
        (Q.identity = Q.eye),
        (Q.prototype.negate = Q.prototype.neg),
        (Q.prototype.tensorProduct = Q.prototype.kroneckerProduct);
      let Y;
      let H;
      var K = (function (t) {
        !(function (t, r) {
          if (typeof r !== 'function' && r !== null)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && q(t, r);
        })(e, t);
        const r = D(e);
        function e(t, o) {
          let n;
          if ((z(this, e), (n = r.call(this)), e.isMatrix(t))) return F(n, t.clone());
          if (Number.isInteger(t) && t >= 0) {
            if (((n.data = []), !(Number.isInteger(o) && o >= 0)))
              throw new TypeError('nColumns must be a positive integer');
            for (let i = 0; i < t; i++) n.data.push(new Float64Array(o));
          } else {
            if (!Array.isArray(t))
              throw new TypeError('First argument must be a positive number or an array');
            const s = t;
            if (typeof (o = (t = s.length) ? s[0].length : 0) !== 'number')
              throw new TypeError('Data must be a 2D array with at least one element');
            n.data = [];
            for (let u = 0; u < t; u++) {
              if (s[u].length !== o) throw new RangeError('Inconsistent array dimensions');
              n.data.push(Float64Array.from(s[u]));
            }
          }
          return (n.rows = t), (n.columns = o), n;
        }
        return (
          W(e, [
            {
              key: 'set',
              value(t, r, e) {
                return (this.data[t][r] = e), this;
              },
            },
            {
              key: 'get',
              value(t, r) {
                return this.data[t][r];
              },
            },
            {
              key: 'removeRow',
              value(t) {
                return v(this, t), this.data.splice(t, 1), (this.rows -= 1), this;
              },
            },
            {
              key: 'addRow',
              value(t, r) {
                return (
                  void 0 === r && ((r = t), (t = this.rows)),
                  v(this, t, !0),
                  (r = Float64Array.from(m(this, r))),
                  this.data.splice(t, 0, r),
                  (this.rows += 1),
                  this
                );
              },
            },
            {
              key: 'removeColumn',
              value(t) {
                y(this, t);
                for (let r = 0; r < this.rows; r++) {
                  for (var e = new Float64Array(this.columns - 1), o = 0; o < t; o++)
                    e[o] = this.data[r][o];
                  for (let n = t + 1; n < this.columns; n++) e[n - 1] = this.data[r][n];
                  this.data[r] = e;
                }
                return (this.columns -= 1), this;
              },
            },
            {
              key: 'addColumn',
              value(t, r) {
                void 0 === r && ((r = t), (t = this.columns)), y(this, t, !0), (r = g(this, r));
                for (let e = 0; e < this.rows; e++) {
                  for (var o = new Float64Array(this.columns + 1), n = 0; n < t; n++)
                    o[n] = this.data[e][n];
                  for (o[n++] = r[e]; n < this.columns + 1; n++) o[n] = this.data[e][n - 1];
                  this.data[e] = o;
                }
                return (this.columns += 1), this;
              },
            },
          ]),
          e
        );
      })(Q);
      function X(t) {
        return (X =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function G(t, r) {
        return (G =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function Z(t) {
        const r = (function () {
          if (typeof Reflect === 'undefined' || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if (typeof Proxy === 'function') return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})), !0;
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          let e;
          const o = tt(t);
          if (r) {
            const n = tt(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return $(this, e);
        };
      }
      function $(t, r) {
        return !r || (X(r) !== 'object' && typeof r !== 'function')
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function tt(t) {
        return (tt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      (H = K),
        ((Y = Q).prototype.add = function (t) {
          return typeof t === 'number' ? this.addS(t) : this.addM(t);
        }),
        (Y.prototype.addS = function (t) {
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) + t);
          return this;
        }),
        (Y.prototype.addM = function (t) {
          if (((t = H.checkMatrix(t)), this.rows !== t.rows || this.columns !== t.columns))
            throw new RangeError('Matrices dimensions must be equal');
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) + t.get(r, e));
          return this;
        }),
        (Y.add = function (t, r) {
          return new H(t).add(r);
        }),
        (Y.prototype.sub = function (t) {
          return typeof t === 'number' ? this.subS(t) : this.subM(t);
        }),
        (Y.prototype.subS = function (t) {
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) - t);
          return this;
        }),
        (Y.prototype.subM = function (t) {
          if (((t = H.checkMatrix(t)), this.rows !== t.rows || this.columns !== t.columns))
            throw new RangeError('Matrices dimensions must be equal');
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) - t.get(r, e));
          return this;
        }),
        (Y.sub = function (t, r) {
          return new H(t).sub(r);
        }),
        (Y.prototype.subtract = Y.prototype.sub),
        (Y.prototype.subtractS = Y.prototype.subS),
        (Y.prototype.subtractM = Y.prototype.subM),
        (Y.subtract = Y.sub),
        (Y.prototype.mul = function (t) {
          return typeof t === 'number' ? this.mulS(t) : this.mulM(t);
        }),
        (Y.prototype.mulS = function (t) {
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) * t);
          return this;
        }),
        (Y.prototype.mulM = function (t) {
          if (((t = H.checkMatrix(t)), this.rows !== t.rows || this.columns !== t.columns))
            throw new RangeError('Matrices dimensions must be equal');
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) * t.get(r, e));
          return this;
        }),
        (Y.mul = function (t, r) {
          return new H(t).mul(r);
        }),
        (Y.prototype.multiply = Y.prototype.mul),
        (Y.prototype.multiplyS = Y.prototype.mulS),
        (Y.prototype.multiplyM = Y.prototype.mulM),
        (Y.multiply = Y.mul),
        (Y.prototype.div = function (t) {
          return typeof t === 'number' ? this.divS(t) : this.divM(t);
        }),
        (Y.prototype.divS = function (t) {
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) / t);
          return this;
        }),
        (Y.prototype.divM = function (t) {
          if (((t = H.checkMatrix(t)), this.rows !== t.rows || this.columns !== t.columns))
            throw new RangeError('Matrices dimensions must be equal');
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) / t.get(r, e));
          return this;
        }),
        (Y.div = function (t, r) {
          return new H(t).div(r);
        }),
        (Y.prototype.divide = Y.prototype.div),
        (Y.prototype.divideS = Y.prototype.divS),
        (Y.prototype.divideM = Y.prototype.divM),
        (Y.divide = Y.div),
        (Y.prototype.mod = function (t) {
          return typeof t === 'number' ? this.modS(t) : this.modM(t);
        }),
        (Y.prototype.modS = function (t) {
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) % t);
          return this;
        }),
        (Y.prototype.modM = function (t) {
          if (((t = H.checkMatrix(t)), this.rows !== t.rows || this.columns !== t.columns))
            throw new RangeError('Matrices dimensions must be equal');
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) % t.get(r, e));
          return this;
        }),
        (Y.mod = function (t, r) {
          return new H(t).mod(r);
        }),
        (Y.prototype.modulus = Y.prototype.mod),
        (Y.prototype.modulusS = Y.prototype.modS),
        (Y.prototype.modulusM = Y.prototype.modM),
        (Y.modulus = Y.mod),
        (Y.prototype.and = function (t) {
          return typeof t === 'number' ? this.andS(t) : this.andM(t);
        }),
        (Y.prototype.andS = function (t) {
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) & t);
          return this;
        }),
        (Y.prototype.andM = function (t) {
          if (((t = H.checkMatrix(t)), this.rows !== t.rows || this.columns !== t.columns))
            throw new RangeError('Matrices dimensions must be equal');
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) & t.get(r, e));
          return this;
        }),
        (Y.and = function (t, r) {
          return new H(t).and(r);
        }),
        (Y.prototype.or = function (t) {
          return typeof t === 'number' ? this.orS(t) : this.orM(t);
        }),
        (Y.prototype.orS = function (t) {
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) | t);
          return this;
        }),
        (Y.prototype.orM = function (t) {
          if (((t = H.checkMatrix(t)), this.rows !== t.rows || this.columns !== t.columns))
            throw new RangeError('Matrices dimensions must be equal');
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) | t.get(r, e));
          return this;
        }),
        (Y.or = function (t, r) {
          return new H(t).or(r);
        }),
        (Y.prototype.xor = function (t) {
          return typeof t === 'number' ? this.xorS(t) : this.xorM(t);
        }),
        (Y.prototype.xorS = function (t) {
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) ^ t);
          return this;
        }),
        (Y.prototype.xorM = function (t) {
          if (((t = H.checkMatrix(t)), this.rows !== t.rows || this.columns !== t.columns))
            throw new RangeError('Matrices dimensions must be equal');
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) ^ t.get(r, e));
          return this;
        }),
        (Y.xor = function (t, r) {
          return new H(t).xor(r);
        }),
        (Y.prototype.leftShift = function (t) {
          return typeof t === 'number' ? this.leftShiftS(t) : this.leftShiftM(t);
        }),
        (Y.prototype.leftShiftS = function (t) {
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) << t);
          return this;
        }),
        (Y.prototype.leftShiftM = function (t) {
          if (((t = H.checkMatrix(t)), this.rows !== t.rows || this.columns !== t.columns))
            throw new RangeError('Matrices dimensions must be equal');
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) << t.get(r, e));
          return this;
        }),
        (Y.leftShift = function (t, r) {
          return new H(t).leftShift(r);
        }),
        (Y.prototype.signPropagatingRightShift = function (t) {
          return typeof t === 'number'
            ? this.signPropagatingRightShiftS(t)
            : this.signPropagatingRightShiftM(t);
        }),
        (Y.prototype.signPropagatingRightShiftS = function (t) {
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) >> t);
          return this;
        }),
        (Y.prototype.signPropagatingRightShiftM = function (t) {
          if (((t = H.checkMatrix(t)), this.rows !== t.rows || this.columns !== t.columns))
            throw new RangeError('Matrices dimensions must be equal');
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) >> t.get(r, e));
          return this;
        }),
        (Y.signPropagatingRightShift = function (t, r) {
          return new H(t).signPropagatingRightShift(r);
        }),
        (Y.prototype.rightShift = function (t) {
          return typeof t === 'number' ? this.rightShiftS(t) : this.rightShiftM(t);
        }),
        (Y.prototype.rightShiftS = function (t) {
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) >>> t);
          return this;
        }),
        (Y.prototype.rightShiftM = function (t) {
          if (((t = H.checkMatrix(t)), this.rows !== t.rows || this.columns !== t.columns))
            throw new RangeError('Matrices dimensions must be equal');
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, this.get(r, e) >>> t.get(r, e));
          return this;
        }),
        (Y.rightShift = function (t, r) {
          return new H(t).rightShift(r);
        }),
        (Y.prototype.zeroFillRightShift = Y.prototype.rightShift),
        (Y.prototype.zeroFillRightShiftS = Y.prototype.rightShiftS),
        (Y.prototype.zeroFillRightShiftM = Y.prototype.rightShiftM),
        (Y.zeroFillRightShift = Y.rightShift),
        (Y.prototype.not = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, ~this.get(t, r));
          return this;
        }),
        (Y.not = function (t) {
          return new H(t).not();
        }),
        (Y.prototype.abs = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.abs(this.get(t, r)));
          return this;
        }),
        (Y.abs = function (t) {
          return new H(t).abs();
        }),
        (Y.prototype.acos = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.acos(this.get(t, r)));
          return this;
        }),
        (Y.acos = function (t) {
          return new H(t).acos();
        }),
        (Y.prototype.acosh = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.acosh(this.get(t, r)));
          return this;
        }),
        (Y.acosh = function (t) {
          return new H(t).acosh();
        }),
        (Y.prototype.asin = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.asin(this.get(t, r)));
          return this;
        }),
        (Y.asin = function (t) {
          return new H(t).asin();
        }),
        (Y.prototype.asinh = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.asinh(this.get(t, r)));
          return this;
        }),
        (Y.asinh = function (t) {
          return new H(t).asinh();
        }),
        (Y.prototype.atan = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.atan(this.get(t, r)));
          return this;
        }),
        (Y.atan = function (t) {
          return new H(t).atan();
        }),
        (Y.prototype.atanh = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.atanh(this.get(t, r)));
          return this;
        }),
        (Y.atanh = function (t) {
          return new H(t).atanh();
        }),
        (Y.prototype.cbrt = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.cbrt(this.get(t, r)));
          return this;
        }),
        (Y.cbrt = function (t) {
          return new H(t).cbrt();
        }),
        (Y.prototype.ceil = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.ceil(this.get(t, r)));
          return this;
        }),
        (Y.ceil = function (t) {
          return new H(t).ceil();
        }),
        (Y.prototype.clz32 = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.clz32(this.get(t, r)));
          return this;
        }),
        (Y.clz32 = function (t) {
          return new H(t).clz32();
        }),
        (Y.prototype.cos = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.cos(this.get(t, r)));
          return this;
        }),
        (Y.cos = function (t) {
          return new H(t).cos();
        }),
        (Y.prototype.cosh = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.cosh(this.get(t, r)));
          return this;
        }),
        (Y.cosh = function (t) {
          return new H(t).cosh();
        }),
        (Y.prototype.exp = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.exp(this.get(t, r)));
          return this;
        }),
        (Y.exp = function (t) {
          return new H(t).exp();
        }),
        (Y.prototype.expm1 = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.expm1(this.get(t, r)));
          return this;
        }),
        (Y.expm1 = function (t) {
          return new H(t).expm1();
        }),
        (Y.prototype.floor = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.floor(this.get(t, r)));
          return this;
        }),
        (Y.floor = function (t) {
          return new H(t).floor();
        }),
        (Y.prototype.fround = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.fround(this.get(t, r)));
          return this;
        }),
        (Y.fround = function (t) {
          return new H(t).fround();
        }),
        (Y.prototype.log = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.log(this.get(t, r)));
          return this;
        }),
        (Y.log = function (t) {
          return new H(t).log();
        }),
        (Y.prototype.log1p = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.log1p(this.get(t, r)));
          return this;
        }),
        (Y.log1p = function (t) {
          return new H(t).log1p();
        }),
        (Y.prototype.log10 = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.log10(this.get(t, r)));
          return this;
        }),
        (Y.log10 = function (t) {
          return new H(t).log10();
        }),
        (Y.prototype.log2 = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.log2(this.get(t, r)));
          return this;
        }),
        (Y.log2 = function (t) {
          return new H(t).log2();
        }),
        (Y.prototype.round = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.round(this.get(t, r)));
          return this;
        }),
        (Y.round = function (t) {
          return new H(t).round();
        }),
        (Y.prototype.sign = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.sign(this.get(t, r)));
          return this;
        }),
        (Y.sign = function (t) {
          return new H(t).sign();
        }),
        (Y.prototype.sin = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.sin(this.get(t, r)));
          return this;
        }),
        (Y.sin = function (t) {
          return new H(t).sin();
        }),
        (Y.prototype.sinh = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.sinh(this.get(t, r)));
          return this;
        }),
        (Y.sinh = function (t) {
          return new H(t).sinh();
        }),
        (Y.prototype.sqrt = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.sqrt(this.get(t, r)));
          return this;
        }),
        (Y.sqrt = function (t) {
          return new H(t).sqrt();
        }),
        (Y.prototype.tan = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.tan(this.get(t, r)));
          return this;
        }),
        (Y.tan = function (t) {
          return new H(t).tan();
        }),
        (Y.prototype.tanh = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.tanh(this.get(t, r)));
          return this;
        }),
        (Y.tanh = function (t) {
          return new H(t).tanh();
        }),
        (Y.prototype.trunc = function () {
          for (let t = 0; t < this.rows; t++)
            for (let r = 0; r < this.columns; r++) this.set(t, r, Math.trunc(this.get(t, r)));
          return this;
        }),
        (Y.trunc = function (t) {
          return new H(t).trunc();
        }),
        (Y.pow = function (t, r) {
          return new H(t).pow(r);
        }),
        (Y.prototype.pow = function (t) {
          return typeof t === 'number' ? this.powS(t) : this.powM(t);
        }),
        (Y.prototype.powS = function (t) {
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++) this.set(r, e, Math.pow(this.get(r, e), t));
          return this;
        }),
        (Y.prototype.powM = function (t) {
          if (((t = H.checkMatrix(t)), this.rows !== t.rows || this.columns !== t.columns))
            throw new RangeError('Matrices dimensions must be equal');
          for (let r = 0; r < this.rows; r++)
            for (let e = 0; e < this.columns; e++)
              this.set(r, e, Math.pow(this.get(r, e), t.get(r, e)));
          return this;
        });
      const rt = (function (t) {
        !(function (t, r) {
          if (typeof r !== 'function' && r !== null)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && G(t, r);
        })(e, t);
        const r = Z(e);
        function e(t, o, n) {
          let i;
          return (
            (function (t, r) {
              if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
            })(this, e),
            ((i = r.call(this)).matrix = t),
            (i.rows = o),
            (i.columns = n),
            i
          );
        }
        return e;
      })(Q);
      function et(t) {
        return (et =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function ot(t, r) {
        for (let e = 0; e < r.length; e++) {
          const o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function nt(t, r) {
        return (nt =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function it(t) {
        const r = (function () {
          if (typeof Reflect === 'undefined' || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if (typeof Proxy === 'function') return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})), !0;
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          let e;
          const o = ut(t);
          if (r) {
            const n = ut(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return st(this, e);
        };
      }
      function st(t, r) {
        return !r || (et(r) !== 'object' && typeof r !== 'function')
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function ut(t) {
        return (ut = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var at = (function (t) {
        !(function (t, r) {
          if (typeof r !== 'function' && r !== null)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && nt(t, r);
        })(i, t);
        let r;
        let e;
        let o;
        const n = it(i);
        function i(t, r) {
          let e;
          return (
            (function (t, r) {
              if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
            })(this, i),
            y(t, r),
            ((e = n.call(this, t, t.rows, 1)).column = r),
            e
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: 'set',
              value(t, r, e) {
                return this.matrix.set(t, this.column, e), this;
              },
            },
            {
              key: 'get',
              value(t) {
                return this.matrix.get(t, this.column);
              },
            },
          ]) && ot(r.prototype, e),
          o && ot(r, o),
          i
        );
      })(rt);
      function ft(t) {
        return (ft =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function ct(t, r) {
        for (let e = 0; e < r.length; e++) {
          const o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function ht(t, r) {
        return (ht =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function lt(t) {
        const r = (function () {
          if (typeof Reflect === 'undefined' || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if (typeof Proxy === 'function') return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})), !0;
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          let e;
          const o = vt(t);
          if (r) {
            const n = vt(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return pt(this, e);
        };
      }
      function pt(t, r) {
        return !r || (ft(r) !== 'object' && typeof r !== 'function')
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function vt(t) {
        return (vt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var yt = (function (t) {
        !(function (t, r) {
          if (typeof r !== 'function' && r !== null)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && ht(t, r);
        })(i, t);
        let r;
        let e;
        let o;
        const n = lt(i);
        function i(t, r) {
          let e;
          return (
            (function (t, r) {
              if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
            })(this, i),
            (r = d(t, r)),
            ((e = n.call(this, t, t.rows, r.length)).columnIndices = r),
            e
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: 'set',
              value(t, r, e) {
                return this.matrix.set(t, this.columnIndices[r], e), this;
              },
            },
            {
              key: 'get',
              value(t, r) {
                return this.matrix.get(t, this.columnIndices[r]);
              },
            },
          ]) && ct(r.prototype, e),
          o && ct(r, o),
          i
        );
      })(rt);
      function mt(t) {
        return (mt =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function gt(t, r) {
        for (let e = 0; e < r.length; e++) {
          const o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function wt(t, r) {
        return (wt =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function bt(t) {
        const r = (function () {
          if (typeof Reflect === 'undefined' || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if (typeof Proxy === 'function') return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})), !0;
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          let e;
          const o = Mt(t);
          if (r) {
            const n = Mt(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return dt(this, e);
        };
      }
      function dt(t, r) {
        return !r || (mt(r) !== 'object' && typeof r !== 'function')
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function Mt(t) {
        return (Mt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var xt = (function (t) {
        !(function (t, r) {
          if (typeof r !== 'function' && r !== null)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && wt(t, r);
        })(i, t);
        let r;
        let e;
        let o;
        const n = bt(i);
        function i(t) {
          return (
            (function (t, r) {
              if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
            })(this, i),
            n.call(this, t, t.rows, t.columns)
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: 'set',
              value(t, r, e) {
                return this.matrix.set(t, this.columns - r - 1, e), this;
              },
            },
            {
              key: 'get',
              value(t, r) {
                return this.matrix.get(t, this.columns - r - 1);
              },
            },
          ]) && gt(r.prototype, e),
          o && gt(r, o),
          i
        );
      })(rt);
      function kt(t) {
        return (kt =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function St(t, r) {
        for (let e = 0; e < r.length; e++) {
          const o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function Et(t, r) {
        return (Et =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function Ot(t) {
        const r = (function () {
          if (typeof Reflect === 'undefined' || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if (typeof Proxy === 'function') return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})), !0;
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          let e;
          const o = jt(t);
          if (r) {
            const n = jt(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return Rt(this, e);
        };
      }
      function Rt(t, r) {
        return !r || (kt(r) !== 'object' && typeof r !== 'function')
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function jt(t) {
        return (jt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var _t = (function (t) {
        !(function (t, r) {
          if (typeof r !== 'function' && r !== null)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && Et(t, r);
        })(i, t);
        let r;
        let e;
        let o;
        const n = Ot(i);
        function i(t) {
          return (
            (function (t, r) {
              if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
            })(this, i),
            n.call(this, t, t.rows, t.columns)
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: 'set',
              value(t, r, e) {
                return this.matrix.set(this.rows - t - 1, r, e), this;
              },
            },
            {
              key: 'get',
              value(t, r) {
                return this.matrix.get(this.rows - t - 1, r);
              },
            },
          ]) && St(r.prototype, e),
          o && St(r, o),
          i
        );
      })(rt);
      function Pt(t) {
        return (Pt =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function Tt(t, r) {
        for (let e = 0; e < r.length; e++) {
          const o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function At(t, r) {
        return (At =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function Ct(t) {
        const r = (function () {
          if (typeof Reflect === 'undefined' || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if (typeof Proxy === 'function') return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})), !0;
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          let e;
          const o = It(t);
          if (r) {
            const n = It(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return Nt(this, e);
        };
      }
      function Nt(t, r) {
        return !r || (Pt(r) !== 'object' && typeof r !== 'function')
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function It(t) {
        return (It = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var Vt = (function (t) {
        !(function (t, r) {
          if (typeof r !== 'function' && r !== null)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && At(t, r);
        })(i, t);
        let r;
        let e;
        let o;
        const n = Ct(i);
        function i(t, r) {
          let e;
          return (
            (function (t, r) {
              if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
            })(this, i),
            v(t, r),
            ((e = n.call(this, t, 1, t.columns)).row = r),
            e
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: 'set',
              value(t, r, e) {
                return this.matrix.set(this.row, r, e), this;
              },
            },
            {
              key: 'get',
              value(t, r) {
                return this.matrix.get(this.row, r);
              },
            },
          ]) && Tt(r.prototype, e),
          o && Tt(r, o),
          i
        );
      })(rt);
      function qt(t) {
        return (qt =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function Dt(t, r) {
        for (let e = 0; e < r.length; e++) {
          const o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function Ft(t, r) {
        return (Ft =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function Bt(t) {
        const r = (function () {
          if (typeof Reflect === 'undefined' || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if (typeof Proxy === 'function') return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})), !0;
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          let e;
          const o = zt(t);
          if (r) {
            const n = zt(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return Lt(this, e);
        };
      }
      function Lt(t, r) {
        return !r || (qt(r) !== 'object' && typeof r !== 'function')
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function zt(t) {
        return (zt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var Ut = (function (t) {
        !(function (t, r) {
          if (typeof r !== 'function' && r !== null)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && Ft(t, r);
        })(i, t);
        let r;
        let e;
        let o;
        const n = Bt(i);
        function i(t, r) {
          let e;
          return (
            (function (t, r) {
              if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
            })(this, i),
            (r = b(t, r)),
            ((e = n.call(this, t, r.length, t.columns)).rowIndices = r),
            e
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: 'set',
              value(t, r, e) {
                return this.matrix.set(this.rowIndices[t], r, e), this;
              },
            },
            {
              key: 'get',
              value(t, r) {
                return this.matrix.get(this.rowIndices[t], r);
              },
            },
          ]) && Dt(r.prototype, e),
          o && Dt(r, o),
          i
        );
      })(rt);
      function Wt(t) {
        return (Wt =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function Qt(t, r) {
        for (let e = 0; e < r.length; e++) {
          const o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function Jt(t, r) {
        return (Jt =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function Yt(t) {
        const r = (function () {
          if (typeof Reflect === 'undefined' || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if (typeof Proxy === 'function') return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})), !0;
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          let e;
          const o = Kt(t);
          if (r) {
            const n = Kt(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return Ht(this, e);
        };
      }
      function Ht(t, r) {
        return !r || (Wt(r) !== 'object' && typeof r !== 'function')
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function Kt(t) {
        return (Kt = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var Xt = (function (t) {
        !(function (t, r) {
          if (typeof r !== 'function' && r !== null)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && Jt(t, r);
        })(i, t);
        let r;
        let e;
        let o;
        const n = Yt(i);
        function i(t, r, e) {
          let o;
          !(function (t, r) {
            if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
          })(this, i);
          const s = w(t, r, e);
          return (
            ((o = n.call(this, t, s.row.length, s.column.length)).rowIndices = s.row),
            (o.columnIndices = s.column),
            o
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: 'set',
              value(t, r, e) {
                return this.matrix.set(this.rowIndices[t], this.columnIndices[r], e), this;
              },
            },
            {
              key: 'get',
              value(t, r) {
                return this.matrix.get(this.rowIndices[t], this.columnIndices[r]);
              },
            },
          ]) && Qt(r.prototype, e),
          o && Qt(r, o),
          i
        );
      })(rt);
      function Gt(t) {
        return (Gt =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function Zt(t, r) {
        for (let e = 0; e < r.length; e++) {
          const o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function $t(t, r) {
        return ($t =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function tr(t) {
        const r = (function () {
          if (typeof Reflect === 'undefined' || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if (typeof Proxy === 'function') return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})), !0;
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          let e;
          const o = er(t);
          if (r) {
            const n = er(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return rr(this, e);
        };
      }
      function rr(t, r) {
        return !r || (Gt(r) !== 'object' && typeof r !== 'function')
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function er(t) {
        return (er = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var or = (function (t) {
        !(function (t, r) {
          if (typeof r !== 'function' && r !== null)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && $t(t, r);
        })(i, t);
        let r;
        let e;
        let o;
        const n = tr(i);
        function i(t, r, e, o, s) {
          let u;
          return (
            (function (t, r) {
              if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
            })(this, i),
            M(t, r, e, o, s),
            ((u = n.call(this, t, e - r + 1, s - o + 1)).startRow = r),
            (u.startColumn = o),
            u
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: 'set',
              value(t, r, e) {
                return this.matrix.set(this.startRow + t, this.startColumn + r, e), this;
              },
            },
            {
              key: 'get',
              value(t, r) {
                return this.matrix.get(this.startRow + t, this.startColumn + r);
              },
            },
          ]) && Zt(r.prototype, e),
          o && Zt(r, o),
          i
        );
      })(rt);
      function nr(t) {
        return (nr =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function ir(t, r) {
        for (let e = 0; e < r.length; e++) {
          const o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function sr(t, r) {
        return (sr =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function ur(t) {
        const r = (function () {
          if (typeof Reflect === 'undefined' || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if (typeof Proxy === 'function') return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})), !0;
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          let e;
          const o = fr(t);
          if (r) {
            const n = fr(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return ar(this, e);
        };
      }
      function ar(t, r) {
        return !r || (nr(r) !== 'object' && typeof r !== 'function')
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function fr(t) {
        return (fr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var cr = (function (t) {
        !(function (t, r) {
          if (typeof r !== 'function' && r !== null)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && sr(t, r);
        })(i, t);
        let r;
        let e;
        let o;
        const n = ur(i);
        function i(t) {
          return (
            (function (t, r) {
              if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
            })(this, i),
            n.call(this, t, t.columns, t.rows)
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: 'set',
              value(t, r, e) {
                return this.matrix.set(r, t, e), this;
              },
            },
            {
              key: 'get',
              value(t, r) {
                return this.matrix.get(r, t);
              },
            },
          ]) && ir(r.prototype, e),
          o && ir(r, o),
          i
        );
      })(rt);
      function hr(t) {
        return (hr =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function lr(t, r) {
        if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
      }
      function pr(t, r) {
        for (let e = 0; e < r.length; e++) {
          const o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function vr(t, r) {
        return (vr =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function yr(t) {
        const r = (function () {
          if (typeof Reflect === 'undefined' || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if (typeof Proxy === 'function') return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})), !0;
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          let e;
          const o = gr(t);
          if (r) {
            const n = gr(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return mr(this, e);
        };
      }
      function mr(t, r) {
        return !r || (hr(r) !== 'object' && typeof r !== 'function')
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function gr(t) {
        return (gr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var wr = (function (t) {
        !(function (t, r) {
          if (typeof r !== 'function' && r !== null)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && vr(t, r);
        })(i, t);
        let r;
        let e;
        let o;
        const n = yr(i);
        function i(t) {
          let r;
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          lr(this, i);
          const o = e.rows;
          const s = void 0 === o ? 1 : o;
          if (t.length % s != 0)
            throw new Error('the data length is not divisible by the number of rows');
          return ((r = n.call(this)).rows = s), (r.columns = t.length / s), (r.data = t), r;
        }
        return (
          (r = i),
          (e = [
            {
              key: 'set',
              value(t, r, e) {
                const o = this._calculateIndex(t, r);
                return (this.data[o] = e), this;
              },
            },
            {
              key: 'get',
              value(t, r) {
                const e = this._calculateIndex(t, r);
                return this.data[e];
              },
            },
            {
              key: '_calculateIndex',
              value(t, r) {
                return t * this.columns + r;
              },
            },
          ]) && pr(r.prototype, e),
          o && pr(r, o),
          i
        );
      })(Q);
      function br(t) {
        return (br =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function dr(t, r) {
        for (let e = 0; e < r.length; e++) {
          const o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      function Mr(t, r) {
        return (Mr =
          Object.setPrototypeOf ||
          function (t, r) {
            return (t.__proto__ = r), t;
          })(t, r);
      }
      function xr(t) {
        const r = (function () {
          if (typeof Reflect === 'undefined' || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if (typeof Proxy === 'function') return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], () => {})), !0;
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          let e;
          const o = Sr(t);
          if (r) {
            const n = Sr(this).constructor;
            e = Reflect.construct(o, arguments, n);
          } else e = o.apply(this, arguments);
          return kr(this, e);
        };
      }
      function kr(t, r) {
        return !r || (br(r) !== 'object' && typeof r !== 'function')
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : r;
      }
      function Sr(t) {
        return (Sr = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      var Er = (function (t) {
        !(function (t, r) {
          if (typeof r !== 'function' && r !== null)
            throw new TypeError('Super expression must either be null or a function');
          (t.prototype = Object.create(r && r.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            r && Mr(t, r);
        })(i, t);
        let r;
        let e;
        let o;
        const n = xr(i);
        function i(t) {
          let r;
          return (
            (function (t, r) {
              if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
            })(this, i),
            ((r = n.call(this)).data = t),
            (r.rows = t.length),
            (r.columns = t[0].length),
            r
          );
        }
        return (
          (r = i),
          (e = [
            {
              key: 'set',
              value(t, r, e) {
                return (this.data[t][r] = e), this;
              },
            },
            {
              key: 'get',
              value(t, r) {
                return this.data[t][r];
              },
            },
          ]) && dr(r.prototype, e),
          o && dr(r, o),
          i
        );
      })(Q);
      function Or(t, r) {
        if (Array.isArray(t)) return t[0] && Array.isArray(t[0]) ? new Er(t) : new wr(t, r);
        throw new Error('the argument is not an array');
      }
      function Rr(t, r) {
        for (let e = 0; e < r.length; e++) {
          const o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var jr = (function () {
        function t(r) {
          !(function (t, r) {
            if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
          })(this, t);
          let e;
          let o;
          let n;
          let i;
          let s;
          let u;
          let a;
          let f;
          let c;
          const h = (r = Er.checkMatrix(r)).clone();
          const l = h.rows;
          const p = h.columns;
          const v = new Float64Array(l);
          let y = 1;
          for (e = 0; e < l; e++) v[e] = e;
          for (f = new Float64Array(l), o = 0; o < p; o++) {
            for (e = 0; e < l; e++) f[e] = h.get(e, o);
            for (e = 0; e < l; e++) {
              for (c = Math.min(e, o), s = 0, n = 0; n < c; n++) s += h.get(e, n) * f[n];
              (f[e] -= s), h.set(e, o, f[e]);
            }
            for (i = o, e = o + 1; e < l; e++) Math.abs(f[e]) > Math.abs(f[i]) && (i = e);
            if (i !== o) {
              for (n = 0; n < p; n++) (u = h.get(i, n)), h.set(i, n, h.get(o, n)), h.set(o, n, u);
              (a = v[i]), (v[i] = v[o]), (v[o] = a), (y = -y);
            }
            if (o < l && h.get(o, o) !== 0)
              for (e = o + 1; e < l; e++) h.set(e, o, h.get(e, o) / h.get(o, o));
          }
          (this.LU = h), (this.pivotVector = v), (this.pivotSign = y);
        }
        let r;
        let e;
        let o;
        return (
          (r = t),
          (e = [
            {
              key: 'isSingular',
              value() {
                for (let t = this.LU, r = t.columns, e = 0; e < r; e++)
                  if (t.get(e, e) === 0) return !0;
                return !1;
              },
            },
            {
              key: 'solve',
              value(t) {
                t = K.checkMatrix(t);
                const r = this.LU;
                if (r.rows !== t.rows) throw new Error('Invalid matrix dimensions');
                if (this.isSingular()) throw new Error('LU matrix is singular');
                let e;
                let o;
                let n;
                const i = t.columns;
                const s = t.subMatrixRow(this.pivotVector, 0, i - 1);
                const u = r.columns;
                for (n = 0; n < u; n++)
                  for (e = n + 1; e < u; e++)
                    for (o = 0; o < i; o++) s.set(e, o, s.get(e, o) - s.get(n, o) * r.get(e, n));
                for (n = u - 1; n >= 0; n--) {
                  for (o = 0; o < i; o++) s.set(n, o, s.get(n, o) / r.get(n, n));
                  for (e = 0; e < n; e++)
                    for (o = 0; o < i; o++) s.set(e, o, s.get(e, o) - s.get(n, o) * r.get(e, n));
                }
                return s;
              },
            },
            {
              key: 'determinant',
              get() {
                const t = this.LU;
                if (!t.isSquare()) throw new Error('Matrix must be square');
                for (var r = this.pivotSign, e = t.columns, o = 0; o < e; o++) r *= t.get(o, o);
                return r;
              },
            },
            {
              key: 'lowerTriangularMatrix',
              get() {
                for (var t = this.LU, r = t.rows, e = t.columns, o = new K(r, e), n = 0; n < r; n++)
                  for (let i = 0; i < e; i++)
                    n > i ? o.set(n, i, t.get(n, i)) : n === i ? o.set(n, i, 1) : o.set(n, i, 0);
                return o;
              },
            },
            {
              key: 'upperTriangularMatrix',
              get() {
                for (var t = this.LU, r = t.rows, e = t.columns, o = new K(r, e), n = 0; n < r; n++)
                  for (let i = 0; i < e; i++) n <= i ? o.set(n, i, t.get(n, i)) : o.set(n, i, 0);
                return o;
              },
            },
            {
              key: 'pivotPermutationVector',
              get() {
                return Array.from(this.pivotVector);
              },
            },
          ]) && Rr(r.prototype, e),
          o && Rr(r, o),
          t
        );
      })();
      function _r(t, r) {
        let e = 0;
        return Math.abs(t) > Math.abs(r)
          ? ((e = r / t), Math.abs(t) * Math.sqrt(1 + e * e))
          : r !== 0
          ? ((e = t / r), Math.abs(r) * Math.sqrt(1 + e * e))
          : 0;
      }
      function Pr(t, r) {
        for (let e = 0; e < r.length; e++) {
          const o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Tr = (function () {
        function t(r) {
          !(function (t, r) {
            if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
          })(this, t);
          let e;
          let o;
          let n;
          let i;
          const s = (r = Er.checkMatrix(r)).clone();
          const u = r.rows;
          const a = r.columns;
          const f = new Float64Array(a);
          for (n = 0; n < a; n++) {
            let c = 0;
            for (e = n; e < u; e++) c = _r(c, s.get(e, n));
            if (c !== 0) {
              for (s.get(n, n) < 0 && (c = -c), e = n; e < u; e++) s.set(e, n, s.get(e, n) / c);
              for (s.set(n, n, s.get(n, n) + 1), o = n + 1; o < a; o++) {
                for (i = 0, e = n; e < u; e++) i += s.get(e, n) * s.get(e, o);
                for (i = -i / s.get(n, n), e = n; e < u; e++)
                  s.set(e, o, s.get(e, o) + i * s.get(e, n));
              }
            }
            f[n] = -c;
          }
          (this.QR = s), (this.Rdiag = f);
        }
        let r;
        let e;
        let o;
        return (
          (r = t),
          (e = [
            {
              key: 'solve',
              value(t) {
                t = K.checkMatrix(t);
                const r = this.QR;
                const e = r.rows;
                if (t.rows !== e) throw new Error('Matrix row dimensions must agree');
                if (!this.isFullRank()) throw new Error('Matrix is rank deficient');
                let o;
                let n;
                let i;
                let s;
                const u = t.columns;
                const a = t.clone();
                const f = r.columns;
                for (i = 0; i < f; i++)
                  for (n = 0; n < u; n++) {
                    for (s = 0, o = i; o < e; o++) s += r.get(o, i) * a.get(o, n);
                    for (s = -s / r.get(i, i), o = i; o < e; o++)
                      a.set(o, n, a.get(o, n) + s * r.get(o, i));
                  }
                for (i = f - 1; i >= 0; i--) {
                  for (n = 0; n < u; n++) a.set(i, n, a.get(i, n) / this.Rdiag[i]);
                  for (o = 0; o < i; o++)
                    for (n = 0; n < u; n++) a.set(o, n, a.get(o, n) - a.get(i, n) * r.get(o, i));
                }
                return a.subMatrix(0, f - 1, 0, u - 1);
              },
            },
            {
              key: 'isFullRank',
              value() {
                for (let t = this.QR.columns, r = 0; r < t; r++) if (this.Rdiag[r] === 0) return !1;
                return !0;
              },
            },
            {
              key: 'upperTriangularMatrix',
              get() {
                let t;
                let r;
                const e = this.QR;
                const o = e.columns;
                const n = new K(o, o);
                for (t = 0; t < o; t++)
                  for (r = 0; r < o; r++)
                    t < r
                      ? n.set(t, r, e.get(t, r))
                      : t === r
                      ? n.set(t, r, this.Rdiag[t])
                      : n.set(t, r, 0);
                return n;
              },
            },
            {
              key: 'orthogonalMatrix',
              get() {
                let t;
                let r;
                let e;
                let o;
                const n = this.QR;
                const i = n.rows;
                const s = n.columns;
                const u = new K(i, s);
                for (e = s - 1; e >= 0; e--) {
                  for (t = 0; t < i; t++) u.set(t, e, 0);
                  for (u.set(e, e, 1), r = e; r < s; r++)
                    if (n.get(e, e) !== 0) {
                      for (o = 0, t = e; t < i; t++) o += n.get(t, e) * u.get(t, r);
                      for (o = -o / n.get(e, e), t = e; t < i; t++)
                        u.set(t, r, u.get(t, r) + o * n.get(t, e));
                    }
                }
                return u;
              },
            },
          ]) && Pr(r.prototype, e),
          o && Pr(r, o),
          t
        );
      })();
      function Ar(t, r) {
        if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
      }
      function Cr(t, r) {
        for (let e = 0; e < r.length; e++) {
          const o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Nr = (function () {
        function t(r) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if ((Ar(this, t), (r = Er.checkMatrix(r)).isEmpty()))
            throw new Error('Matrix must be non-empty');
          let o;
          let n = r.rows;
          let i = r.columns;
          const s = e.computeLeftSingularVectors;
          const u = void 0 === s || s;
          const a = e.computeRightSingularVectors;
          const f = void 0 === a || a;
          const c = e.autoTranspose;
          const h = void 0 !== c && c;
          let l = Boolean(u);
          let p = Boolean(f);
          let v = !1;
          if (n < i)
            if (h) {
              (n = (o = r.transpose()).rows), (i = o.columns), (v = !0);
              const y = l;
              (l = p), (p = y);
            } else
              (o = r.clone()),
                console.warn(
                  'Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose',
                );
          else o = r.clone();
          for (
            var m = Math.min(n, i),
              g = Math.min(n + 1, i),
              w = new Float64Array(g),
              b = new K(n, m),
              d = new K(i, i),
              M = new Float64Array(i),
              x = new Float64Array(n),
              k = new Float64Array(g),
              S = 0;
            S < g;
            S++
          )
            k[S] = S;
          for (
            var E = Math.min(n - 1, i),
              O = Math.max(0, Math.min(i - 2, n)),
              R = Math.max(E, O),
              j = 0;
            j < R;
            j++
          ) {
            if (j < E) {
              w[j] = 0;
              for (let _ = j; _ < n; _++) w[j] = _r(w[j], o.get(_, j));
              if (w[j] !== 0) {
                o.get(j, j) < 0 && (w[j] = -w[j]);
                for (let P = j; P < n; P++) o.set(P, j, o.get(P, j) / w[j]);
                o.set(j, j, o.get(j, j) + 1);
              }
              w[j] = -w[j];
            }
            for (let T = j + 1; T < i; T++) {
              if (j < E && w[j] !== 0) {
                for (var A = 0, C = j; C < n; C++) A += o.get(C, j) * o.get(C, T);
                A = -A / o.get(j, j);
                for (let N = j; N < n; N++) o.set(N, T, o.get(N, T) + A * o.get(N, j));
              }
              M[T] = o.get(j, T);
            }
            if (l && j < E) for (let I = j; I < n; I++) b.set(I, j, o.get(I, j));
            if (j < O) {
              M[j] = 0;
              for (let V = j + 1; V < i; V++) M[j] = _r(M[j], M[V]);
              if (M[j] !== 0) {
                M[j + 1] < 0 && (M[j] = 0 - M[j]);
                for (let q = j + 1; q < i; q++) M[q] /= M[j];
                M[j + 1] += 1;
              }
              if (((M[j] = -M[j]), j + 1 < n && M[j] !== 0)) {
                for (let D = j + 1; D < n; D++) x[D] = 0;
                for (let F = j + 1; F < n; F++)
                  for (let B = j + 1; B < i; B++) x[F] += M[B] * o.get(F, B);
                for (let L = j + 1; L < i; L++)
                  for (let z = -M[L] / M[j + 1], U = j + 1; U < n; U++)
                    o.set(U, L, o.get(U, L) + z * x[U]);
              }
              if (p) for (let W = j + 1; W < i; W++) d.set(W, j, M[W]);
            }
          }
          let Q = Math.min(i, n + 1);
          if (
            (E < i && (w[E] = o.get(E, E)),
            n < Q && (w[Q - 1] = 0),
            O + 1 < Q && (M[O] = o.get(O, Q - 1)),
            (M[Q - 1] = 0),
            l)
          ) {
            for (let J = E; J < m; J++) {
              for (let Y = 0; Y < n; Y++) b.set(Y, J, 0);
              b.set(J, J, 1);
            }
            for (let H = E - 1; H >= 0; H--)
              if (w[H] !== 0) {
                for (let X = H + 1; X < m; X++) {
                  for (var G = 0, Z = H; Z < n; Z++) G += b.get(Z, H) * b.get(Z, X);
                  G = -G / b.get(H, H);
                  for (let $ = H; $ < n; $++) b.set($, X, b.get($, X) + G * b.get($, H));
                }
                for (let tt = H; tt < n; tt++) b.set(tt, H, -b.get(tt, H));
                b.set(H, H, 1 + b.get(H, H));
                for (let rt = 0; rt < H - 1; rt++) b.set(rt, H, 0);
              } else {
                for (let et = 0; et < n; et++) b.set(et, H, 0);
                b.set(H, H, 1);
              }
          }
          if (p)
            for (let ot = i - 1; ot >= 0; ot--) {
              if (ot < O && M[ot] !== 0)
                for (let nt = ot + 1; nt < i; nt++) {
                  for (var it = 0, st = ot + 1; st < i; st++) it += d.get(st, ot) * d.get(st, nt);
                  it = -it / d.get(ot + 1, ot);
                  for (let ut = ot + 1; ut < i; ut++)
                    d.set(ut, nt, d.get(ut, nt) + it * d.get(ut, ot));
                }
              for (let at = 0; at < i; at++) d.set(at, ot, 0);
              d.set(ot, ot, 1);
            }
          for (let ft = Q - 1, ct = Number.EPSILON; Q > 0; ) {
            let ht = void 0;
            let lt = void 0;
            for (ht = Q - 2; ht >= -1 && ht !== -1; ht--) {
              const pt = Number.MIN_VALUE + ct * Math.abs(w[ht] + Math.abs(w[ht + 1]));
              if (Math.abs(M[ht]) <= pt || Number.isNaN(M[ht])) {
                M[ht] = 0;
                break;
              }
            }
            if (ht === Q - 2) lt = 4;
            else {
              let vt = void 0;
              for (vt = Q - 1; vt >= ht && vt !== ht; vt--) {
                const yt =
                  (vt !== Q ? Math.abs(M[vt]) : 0) + (vt !== ht + 1 ? Math.abs(M[vt - 1]) : 0);
                if (Math.abs(w[vt]) <= ct * yt) {
                  w[vt] = 0;
                  break;
                }
              }
              vt === ht ? (lt = 3) : vt === Q - 1 ? (lt = 1) : ((lt = 2), (ht = vt));
            }
            switch ((ht++, lt)) {
              case 1:
                var mt = M[Q - 2];
                M[Q - 2] = 0;
                for (let gt = Q - 2; gt >= ht; gt--) {
                  let wt = _r(w[gt], mt);
                  const bt = w[gt] / wt;
                  const dt = mt / wt;
                  if (
                    ((w[gt] = wt),
                    gt !== ht && ((mt = -dt * M[gt - 1]), (M[gt - 1] = bt * M[gt - 1])),
                    p)
                  )
                    for (let Mt = 0; Mt < i; Mt++)
                      (wt = bt * d.get(Mt, gt) + dt * d.get(Mt, Q - 1)),
                        d.set(Mt, Q - 1, -dt * d.get(Mt, gt) + bt * d.get(Mt, Q - 1)),
                        d.set(Mt, gt, wt);
                }
                break;
              case 2:
                var xt = M[ht - 1];
                M[ht - 1] = 0;
                for (let kt = ht; kt < Q; kt++) {
                  let St = _r(w[kt], xt);
                  const Et = w[kt] / St;
                  const Ot = xt / St;
                  if (((w[kt] = St), (xt = -Ot * M[kt]), (M[kt] = Et * M[kt]), l))
                    for (let Rt = 0; Rt < n; Rt++)
                      (St = Et * b.get(Rt, kt) + Ot * b.get(Rt, ht - 1)),
                        b.set(Rt, ht - 1, -Ot * b.get(Rt, kt) + Et * b.get(Rt, ht - 1)),
                        b.set(Rt, kt, St);
                }
                break;
              case 3:
                var jt = Math.max(
                  Math.abs(w[Q - 1]),
                  Math.abs(w[Q - 2]),
                  Math.abs(M[Q - 2]),
                  Math.abs(w[ht]),
                  Math.abs(M[ht]),
                );
                var _t = w[Q - 1] / jt;
                var Pt = w[Q - 2] / jt;
                var Tt = M[Q - 2] / jt;
                var At = w[ht] / jt;
                var Ct = M[ht] / jt;
                var Nt = ((Pt + _t) * (Pt - _t) + Tt * Tt) / 2;
                var It = _t * Tt * (_t * Tt);
                var Vt = 0;
                (Nt === 0 && It === 0) ||
                  (Vt =
                    It /
                    (Nt + (Vt = Nt < 0 ? 0 - Math.sqrt(Nt * Nt + It) : Math.sqrt(Nt * Nt + It))));
                for (var qt = (At + _t) * (At - _t) + Vt, Dt = At * Ct, Ft = ht; Ft < Q - 1; Ft++) {
                  let Bt = _r(qt, Dt);
                  Bt === 0 && (Bt = Number.MIN_VALUE);
                  let Lt = qt / Bt;
                  let zt = Dt / Bt;
                  if (
                    (Ft !== ht && (M[Ft - 1] = Bt),
                    (qt = Lt * w[Ft] + zt * M[Ft]),
                    (M[Ft] = Lt * M[Ft] - zt * w[Ft]),
                    (Dt = zt * w[Ft + 1]),
                    (w[Ft + 1] = Lt * w[Ft + 1]),
                    p)
                  )
                    for (let Ut = 0; Ut < i; Ut++)
                      (Bt = Lt * d.get(Ut, Ft) + zt * d.get(Ut, Ft + 1)),
                        d.set(Ut, Ft + 1, -zt * d.get(Ut, Ft) + Lt * d.get(Ut, Ft + 1)),
                        d.set(Ut, Ft, Bt);
                  if (
                    ((Bt = _r(qt, Dt)) === 0 && (Bt = Number.MIN_VALUE),
                    (Lt = qt / Bt),
                    (zt = Dt / Bt),
                    (w[Ft] = Bt),
                    (qt = Lt * M[Ft] + zt * w[Ft + 1]),
                    (w[Ft + 1] = -zt * M[Ft] + Lt * w[Ft + 1]),
                    (Dt = zt * M[Ft + 1]),
                    (M[Ft + 1] = Lt * M[Ft + 1]),
                    l && Ft < n - 1)
                  )
                    for (let Wt = 0; Wt < n; Wt++)
                      (Bt = Lt * b.get(Wt, Ft) + zt * b.get(Wt, Ft + 1)),
                        b.set(Wt, Ft + 1, -zt * b.get(Wt, Ft) + Lt * b.get(Wt, Ft + 1)),
                        b.set(Wt, Ft, Bt);
                }
                (M[Q - 2] = qt), 1;
                break;
              case 4:
                if (w[ht] <= 0 && ((w[ht] = w[ht] < 0 ? -w[ht] : 0), p))
                  for (let Qt = 0; Qt <= ft; Qt++) d.set(Qt, ht, -d.get(Qt, ht));
                for (; ht < ft && !(w[ht] >= w[ht + 1]); ) {
                  let Jt = w[ht];
                  if (((w[ht] = w[ht + 1]), (w[ht + 1] = Jt), p && ht < i - 1))
                    for (let Yt = 0; Yt < i; Yt++)
                      (Jt = d.get(Yt, ht + 1)), d.set(Yt, ht + 1, d.get(Yt, ht)), d.set(Yt, ht, Jt);
                  if (l && ht < n - 1)
                    for (let Ht = 0; Ht < n; Ht++)
                      (Jt = b.get(Ht, ht + 1)), b.set(Ht, ht + 1, b.get(Ht, ht)), b.set(Ht, ht, Jt);
                  ht++;
                }
                0, Q--;
            }
          }
          if (v) {
            const Kt = d;
            (d = b), (b = Kt);
          }
          (this.m = n), (this.n = i), (this.s = w), (this.U = b), (this.V = d);
        }
        let r;
        let e;
        let o;
        return (
          (r = t),
          (e = [
            {
              key: 'solve',
              value(t) {
                for (
                  var r = t, e = this.threshold, o = this.s.length, n = K.zeros(o, o), i = 0;
                  i < o;
                  i++
                )
                  Math.abs(this.s[i]) <= e ? n.set(i, i, 0) : n.set(i, i, 1 / this.s[i]);
                for (
                  var s = this.U,
                    u = this.rightSingularVectors,
                    a = u.mmul(n),
                    f = u.rows,
                    c = s.rows,
                    h = K.zeros(f, c),
                    l = 0;
                  l < f;
                  l++
                )
                  for (let p = 0; p < c; p++) {
                    for (var v = 0, y = 0; y < o; y++) v += a.get(l, y) * s.get(p, y);
                    h.set(l, p, v);
                  }
                return h.mmul(r);
              },
            },
            {
              key: 'solveForDiagonal',
              value(t) {
                return this.solve(K.diag(t));
              },
            },
            {
              key: 'inverse',
              value() {
                for (
                  var t = this.V,
                    r = this.threshold,
                    e = t.rows,
                    o = t.columns,
                    n = new K(e, this.s.length),
                    i = 0;
                  i < e;
                  i++
                )
                  for (let s = 0; s < o; s++)
                    Math.abs(this.s[s]) > r && n.set(i, s, t.get(i, s) / this.s[s]);
                for (var u = this.U, a = u.rows, f = u.columns, c = new K(e, a), h = 0; h < e; h++)
                  for (let l = 0; l < a; l++) {
                    for (var p = 0, v = 0; v < f; v++) p += n.get(h, v) * u.get(l, v);
                    c.set(h, l, p);
                  }
                return c;
              },
            },
            {
              key: 'condition',
              get() {
                return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
              },
            },
            {
              key: 'norm2',
              get() {
                return this.s[0];
              },
            },
            {
              key: 'rank',
              get() {
                for (
                  var t = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON,
                    r = 0,
                    e = this.s,
                    o = 0,
                    n = e.length;
                  o < n;
                  o++
                )
                  e[o] > t && r++;
                return r;
              },
            },
            {
              key: 'diagonal',
              get() {
                return Array.from(this.s);
              },
            },
            {
              key: 'threshold',
              get() {
                return (Number.EPSILON / 2) * Math.max(this.m, this.n) * this.s[0];
              },
            },
            {
              key: 'leftSingularVectors',
              get() {
                return this.U;
              },
            },
            {
              key: 'rightSingularVectors',
              get() {
                return this.V;
              },
            },
            {
              key: 'diagonalMatrix',
              get() {
                return K.diag(this.s);
              },
            },
          ]) && Cr(r.prototype, e),
          o && Cr(r, o),
          t
        );
      })();
      function Ir(t) {
        const r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (t = Er.checkMatrix(t)), r ? new Nr(t).inverse() : Vr(t, K.eye(t.rows));
      }
      function Vr(t, r) {
        const e = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return (
          (t = Er.checkMatrix(t)),
          (r = Er.checkMatrix(r)),
          e ? new Nr(t).solve(r) : t.isSquare() ? new jr(t).solve(r) : new Tr(t).solve(r)
        );
      }
      function qr(t) {
        let r;
        let e;
        let o;
        let n;
        let i;
        let s;
        if ((t = K.checkMatrix(t)).isSquare())
          return t.columns === 0
            ? 1
            : t.columns === 2
            ? ((r = t.get(0, 0)), (e = t.get(0, 1)), (o = t.get(1, 0)), r * t.get(1, 1) - e * o)
            : t.columns === 3
            ? ((n = new Xt(t, [1, 2], [1, 2])),
              (i = new Xt(t, [1, 2], [0, 2])),
              (s = new Xt(t, [1, 2], [0, 1])),
              (r = t.get(0, 0)),
              (e = t.get(0, 1)),
              (o = t.get(0, 2)),
              r * qr(n) - e * qr(i) + o * qr(s))
            : new jr(t).determinant;
        throw Error('determinant can only be calculated for a square matrix');
      }
      function Dr(t, r) {
        for (var e = [], o = 0; o < t; o++) o !== r && e.push(o);
        return e;
      }
      function Fr(t, r, e) {
        const o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e-9;
        const n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1e-9;
        if (t > n) return new Array(r.rows + 1).fill(0);
        for (var i = r.addRow(e, [0]), s = 0; s < i.rows; s++)
          Math.abs(i.get(s, 0)) < o && i.set(s, 0, 0);
        return i.to1DArray();
      }
      function Br(t) {
        for (
          var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            e = r.thresholdValue,
            o = void 0 === e ? 1e-9 : e,
            n = r.thresholdError,
            i = void 0 === n ? 1e-9 : n,
            s = (t = K.checkMatrix(t)).rows,
            u = new K(s, s),
            a = 0;
          a < s;
          a++
        ) {
          const f = K.columnVector(t.getRow(a));
          const c = t.subMatrixRow(Dr(s, a)).transpose();
          const h = new Nr(c);
          const l = h.solve(f);
          const p = K.sub(f, c.mmul(l)).abs().max();
          u.setRow(a, Fr(p, l, a, o, i));
        }
        return u;
      }
      function Lr(t) {
        const r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.EPSILON;
        if ((t = K.checkMatrix(t)).isEmpty()) return t.transpose();
        for (
          var e = new Nr(t, { autoTranspose: !0 }),
            o = e.leftSingularVectors,
            n = e.rightSingularVectors,
            i = e.diagonal,
            s = 0;
          s < i.length;
          s++
        )
          Math.abs(i[s]) > r ? (i[s] = 1 / i[s]) : (i[s] = 0);
        return n.mmul(K.diag(i).mmul(o.transpose()));
      }
      function zr(t) {
        return (zr =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function Ur(t) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
        let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        t = new K(t);
        let o = !1;
        if (
          (zr(r) !== 'object' || K.isMatrix(r) || Array.isArray(r)
            ? (r = new K(r))
            : ((e = r), (r = t), (o = !0)),
          t.rows !== r.rows)
        )
          throw new TypeError('Both matrices must have the same number of rows');
        const n = e;
        const i = n.center;
        const s = void 0 === i || i;
        s && ((t = t.center('column')), o || (r = r.center('column')));
        for (var u = t.transpose().mmul(r), a = 0; a < u.rows; a++)
          for (let f = 0; f < u.columns; f++) u.set(a, f, u.get(a, f) * (1 / (t.rows - 1)));
        return u;
      }
      function Wr(t) {
        return (Wr =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function Qr(t) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
        let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        t = new K(t);
        let o = !1;
        if (
          (Wr(r) !== 'object' || K.isMatrix(r) || Array.isArray(r)
            ? (r = new K(r))
            : ((e = r), (r = t), (o = !0)),
          t.rows !== r.rows)
        )
          throw new TypeError('Both matrices must have the same number of rows');
        const n = e;
        const i = n.center;
        const s = void 0 === i || i;
        const u = n.scale;
        const a = void 0 === u || u;
        s && (t.center('column'), o || r.center('column')),
          a && (t.scale('column'), o || r.scale('column'));
        for (
          var f = t.standardDeviation('column', { unbiased: !0 }),
            c = o ? f : r.standardDeviation('column', { unbiased: !0 }),
            h = t.transpose().mmul(r),
            l = 0;
          l < h.rows;
          l++
        )
          for (let p = 0; p < h.columns; p++)
            h.set(l, p, h.get(l, p) * (1 / (f[l] * c[p])) * (1 / (t.rows - 1)));
        return h;
      }
      function Jr(t, r) {
        if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
      }
      function Yr(t, r) {
        for (let e = 0; e < r.length; e++) {
          const o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Hr = (function () {
        function t(r) {
          const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Jr(this, t);
          const o = e.assumeSymmetric;
          const n = void 0 !== o && o;
          if (!(r = Er.checkMatrix(r)).isSquare()) throw new Error('Matrix is not a square matrix');
          if (r.isEmpty()) throw new Error('Matrix must be non-empty');
          let i;
          let s;
          const u = r.columns;
          const a = new K(u, u);
          const f = new Float64Array(u);
          const c = new Float64Array(u);
          const h = r;
          if (!!n || r.isSymmetric()) {
            for (i = 0; i < u; i++) for (s = 0; s < u; s++) a.set(i, s, h.get(i, s));
            Kr(u, c, f, a), Xr(u, c, f, a);
          } else {
            const l = new K(u, u);
            const p = new Float64Array(u);
            for (s = 0; s < u; s++) for (i = 0; i < u; i++) l.set(i, s, h.get(i, s));
            Gr(u, l, p, a), Zr(u, c, f, a, l);
          }
          (this.n = u), (this.e = c), (this.d = f), (this.V = a);
        }
        let r;
        let e;
        let o;
        return (
          (r = t),
          (e = [
            {
              key: 'realEigenvalues',
              get() {
                return Array.from(this.d);
              },
            },
            {
              key: 'imaginaryEigenvalues',
              get() {
                return Array.from(this.e);
              },
            },
            {
              key: 'eigenvectorMatrix',
              get() {
                return this.V;
              },
            },
            {
              key: 'diagonalMatrix',
              get() {
                let t;
                let r;
                const e = this.n;
                const o = this.e;
                const n = this.d;
                const i = new K(e, e);
                for (t = 0; t < e; t++) {
                  for (r = 0; r < e; r++) i.set(t, r, 0);
                  i.set(t, t, n[t]),
                    o[t] > 0 ? i.set(t, t + 1, o[t]) : o[t] < 0 && i.set(t, t - 1, o[t]);
                }
                return i;
              },
            },
          ]) && Yr(r.prototype, e),
          o && Yr(r, o),
          t
        );
      })();
      function Kr(t, r, e, o) {
        let n;
        let i;
        let s;
        let u;
        let a;
        let f;
        let c;
        let h;
        for (a = 0; a < t; a++) e[a] = o.get(t - 1, a);
        for (u = t - 1; u > 0; u--) {
          for (h = 0, s = 0, f = 0; f < u; f++) h += Math.abs(e[f]);
          if (h === 0)
            for (r[u] = e[u - 1], a = 0; a < u; a++)
              (e[a] = o.get(u - 1, a)), o.set(u, a, 0), o.set(a, u, 0);
          else {
            for (f = 0; f < u; f++) (e[f] /= h), (s += e[f] * e[f]);
            for (
              n = e[u - 1],
                i = Math.sqrt(s),
                n > 0 && (i = -i),
                r[u] = h * i,
                s -= n * i,
                e[u - 1] = n - i,
                a = 0;
              a < u;
              a++
            )
              r[a] = 0;
            for (a = 0; a < u; a++) {
              for (n = e[a], o.set(a, u, n), i = r[a] + o.get(a, a) * n, f = a + 1; f <= u - 1; f++)
                (i += o.get(f, a) * e[f]), (r[f] += o.get(f, a) * n);
              r[a] = i;
            }
            for (n = 0, a = 0; a < u; a++) (r[a] /= s), (n += r[a] * e[a]);
            for (c = n / (s + s), a = 0; a < u; a++) r[a] -= c * e[a];
            for (a = 0; a < u; a++) {
              for (n = e[a], i = r[a], f = a; f <= u - 1; f++)
                o.set(f, a, o.get(f, a) - (n * r[f] + i * e[f]));
              (e[a] = o.get(u - 1, a)), o.set(u, a, 0);
            }
          }
          e[u] = s;
        }
        for (u = 0; u < t - 1; u++) {
          if ((o.set(t - 1, u, o.get(u, u)), o.set(u, u, 1), (s = e[u + 1]) !== 0)) {
            for (f = 0; f <= u; f++) e[f] = o.get(f, u + 1) / s;
            for (a = 0; a <= u; a++) {
              for (i = 0, f = 0; f <= u; f++) i += o.get(f, u + 1) * o.get(f, a);
              for (f = 0; f <= u; f++) o.set(f, a, o.get(f, a) - i * e[f]);
            }
          }
          for (f = 0; f <= u; f++) o.set(f, u + 1, 0);
        }
        for (a = 0; a < t; a++) (e[a] = o.get(t - 1, a)), o.set(t - 1, a, 0);
        o.set(t - 1, t - 1, 1), (r[0] = 0);
      }
      function Xr(t, r, e, o) {
        let n;
        let i;
        let s;
        let u;
        let a;
        let f;
        let c;
        let h;
        let l;
        let p;
        let v;
        let y;
        let m;
        let g;
        let w;
        let b;
        for (s = 1; s < t; s++) r[s - 1] = r[s];
        r[t - 1] = 0;
        let d = 0;
        let M = 0;
        const x = Number.EPSILON;
        for (f = 0; f < t; f++) {
          for (
            M = Math.max(M, Math.abs(e[f]) + Math.abs(r[f])), c = f;
            c < t && !(Math.abs(r[c]) <= x * M);

          )
            c++;
          if (c > f) {
            0;
            do {
              for (
                1,
                  n = e[f],
                  l = _r((h = (e[f + 1] - n) / (2 * r[f])), 1),
                  h < 0 && (l = -l),
                  e[f] = r[f] / (h + l),
                  e[f + 1] = r[f] * (h + l),
                  p = e[f + 1],
                  i = n - e[f],
                  s = f + 2;
                s < t;
                s++
              )
                e[s] -= i;
              for (
                d += i, h = e[c], y = v = 1, m = v, g = r[f + 1], w = 0, b = 0, s = c - 1;
                s >= f;
                s--
              )
                for (
                  m = y,
                    y = v,
                    b = w,
                    n = v * r[s],
                    i = v * h,
                    l = _r(h, r[s]),
                    r[s + 1] = w * l,
                    w = r[s] / l,
                    h = (v = h / l) * e[s] - w * n,
                    e[s + 1] = i + w * (v * n + w * e[s]),
                    a = 0;
                  a < t;
                  a++
                )
                  (i = o.get(a, s + 1)),
                    o.set(a, s + 1, w * o.get(a, s) + v * i),
                    o.set(a, s, v * o.get(a, s) - w * i);
              (h = (-w * b * m * g * r[f]) / p), (r[f] = w * h), (e[f] = v * h);
            } while (Math.abs(r[f]) > x * M);
          }
          (e[f] = e[f] + d), (r[f] = 0);
        }
        for (s = 0; s < t - 1; s++) {
          for (a = s, h = e[s], u = s + 1; u < t; u++) e[u] < h && ((a = u), (h = e[u]));
          if (a !== s)
            for (e[a] = e[s], e[s] = h, u = 0; u < t; u++)
              (h = o.get(u, s)), o.set(u, s, o.get(u, a)), o.set(u, a, h);
        }
      }
      function Gr(t, r, e, o) {
        let n;
        let i;
        let s;
        let u;
        let a;
        let f;
        let c;
        const h = t - 1;
        for (f = 1; f <= h - 1; f++) {
          for (c = 0, u = f; u <= h; u++) c += Math.abs(r.get(u, f - 1));
          if (c !== 0) {
            for (s = 0, u = h; u >= f; u--) (e[u] = r.get(u, f - 1) / c), (s += e[u] * e[u]);
            for (
              i = Math.sqrt(s), e[f] > 0 && (i = -i), s -= e[f] * i, e[f] = e[f] - i, a = f;
              a < t;
              a++
            ) {
              for (n = 0, u = h; u >= f; u--) n += e[u] * r.get(u, a);
              for (n /= s, u = f; u <= h; u++) r.set(u, a, r.get(u, a) - n * e[u]);
            }
            for (u = 0; u <= h; u++) {
              for (n = 0, a = h; a >= f; a--) n += e[a] * r.get(u, a);
              for (n /= s, a = f; a <= h; a++) r.set(u, a, r.get(u, a) - n * e[a]);
            }
            (e[f] = c * e[f]), r.set(f, f - 1, c * i);
          }
        }
        for (u = 0; u < t; u++) for (a = 0; a < t; a++) o.set(u, a, u === a ? 1 : 0);
        for (f = h - 1; f >= 1; f--)
          if (r.get(f, f - 1) !== 0) {
            for (u = f + 1; u <= h; u++) e[u] = r.get(u, f - 1);
            for (a = f; a <= h; a++) {
              for (i = 0, u = f; u <= h; u++) i += e[u] * o.get(u, a);
              for (i = i / e[f] / r.get(f, f - 1), u = f; u <= h; u++)
                o.set(u, a, o.get(u, a) + i * e[u]);
            }
          }
      }
      function Zr(t, r, e, o, n) {
        let i;
        let s;
        let u;
        let a;
        let f;
        let c;
        let h;
        let l;
        let p;
        let v;
        let y;
        let m;
        let g;
        let w;
        let b;
        let d = t - 1;
        const M = t - 1;
        const x = Number.EPSILON;
        let k = 0;
        let S = 0;
        let E = 0;
        let O = 0;
        let R = 0;
        let j = 0;
        let _ = 0;
        let P = 0;
        for (i = 0; i < t; i++)
          for (
            (i < 0 || i > M) && ((e[i] = n.get(i, i)), (r[i] = 0)), s = Math.max(i - 1, 0);
            s < t;
            s++
          )
            S += Math.abs(n.get(i, s));
        for (; d >= 0; ) {
          for (
            a = d;
            a > 0 &&
            ((j = Math.abs(n.get(a - 1, a - 1)) + Math.abs(n.get(a, a))) === 0 && (j = S),
            !(Math.abs(n.get(a, a - 1)) < x * j));

          )
            a--;
          if (a === d) n.set(d, d, n.get(d, d) + k), (e[d] = n.get(d, d)), (r[d] = 0), d--, (P = 0);
          else if (a === d - 1) {
            if (
              ((h = n.get(d, d - 1) * n.get(d - 1, d)),
              (O = (E = (n.get(d - 1, d - 1) - n.get(d, d)) / 2) * E + h),
              (_ = Math.sqrt(Math.abs(O))),
              n.set(d, d, n.get(d, d) + k),
              n.set(d - 1, d - 1, n.get(d - 1, d - 1) + k),
              (l = n.get(d, d)),
              O >= 0)
            ) {
              for (
                _ = E >= 0 ? E + _ : E - _,
                  e[d - 1] = l + _,
                  e[d] = e[d - 1],
                  _ !== 0 && (e[d] = l - h / _),
                  r[d - 1] = 0,
                  r[d] = 0,
                  E = (l = n.get(d, d - 1)) / (j = Math.abs(l) + Math.abs(_)),
                  O = _ / j,
                  E /= R = Math.sqrt(E * E + O * O),
                  O /= R,
                  s = d - 1;
                s < t;
                s++
              )
                (_ = n.get(d - 1, s)),
                  n.set(d - 1, s, O * _ + E * n.get(d, s)),
                  n.set(d, s, O * n.get(d, s) - E * _);
              for (i = 0; i <= d; i++)
                (_ = n.get(i, d - 1)),
                  n.set(i, d - 1, O * _ + E * n.get(i, d)),
                  n.set(i, d, O * n.get(i, d) - E * _);
              for (i = 0; i <= M; i++)
                (_ = o.get(i, d - 1)),
                  o.set(i, d - 1, O * _ + E * o.get(i, d)),
                  o.set(i, d, O * o.get(i, d) - E * _);
            } else (e[d - 1] = l + E), (e[d] = l + E), (r[d - 1] = _), (r[d] = -_);
            (d -= 2), (P = 0);
          } else {
            if (
              ((l = n.get(d, d)),
              (p = 0),
              (h = 0),
              a < d && ((p = n.get(d - 1, d - 1)), (h = n.get(d, d - 1) * n.get(d - 1, d))),
              P === 10)
            ) {
              for (k += l, i = 0; i <= d; i++) n.set(i, i, n.get(i, i) - l);
              (l = p = 0.75 * (j = Math.abs(n.get(d, d - 1)) + Math.abs(n.get(d - 1, d - 2)))),
                (h = -0.4375 * j * j);
            }
            if (P === 30 && (j = (j = (p - l) / 2) * j + h) > 0) {
              for (
                j = Math.sqrt(j), p < l && (j = -j), j = l - h / ((p - l) / 2 + j), i = 0;
                i <= d;
                i++
              )
                n.set(i, i, n.get(i, i) - j);
              (k += j), (l = p = h = 0.964);
            }
            for (
              P += 1, f = d - 2;
              f >= a &&
              ((E =
                ((R = l - (_ = n.get(f, f))) * (j = p - _) - h) / n.get(f + 1, f) +
                n.get(f, f + 1)),
              (O = n.get(f + 1, f + 1) - _ - R - j),
              (R = n.get(f + 2, f + 1)),
              (E /= j = Math.abs(E) + Math.abs(O) + Math.abs(R)),
              (O /= j),
              (R /= j),
              f !== a) &&
              !(
                Math.abs(n.get(f, f - 1)) * (Math.abs(O) + Math.abs(R)) <
                x *
                  (Math.abs(E) *
                    (Math.abs(n.get(f - 1, f - 1)) + Math.abs(_) + Math.abs(n.get(f + 1, f + 1))))
              );

            )
              f--;
            for (i = f + 2; i <= d; i++) n.set(i, i - 2, 0), i > f + 2 && n.set(i, i - 3, 0);
            for (
              u = f;
              u <= d - 1 &&
              ((w = u !== d - 1),
              u !== f &&
                ((E = n.get(u, u - 1)),
                (O = n.get(u + 1, u - 1)),
                (R = w ? n.get(u + 2, u - 1) : 0),
                (l = Math.abs(E) + Math.abs(O) + Math.abs(R)) !== 0 &&
                  ((E /= l), (O /= l), (R /= l))),
              l !== 0);
              u++
            )
              if (((j = Math.sqrt(E * E + O * O + R * R)), E < 0 && (j = -j), j !== 0)) {
                for (
                  u !== f ? n.set(u, u - 1, -j * l) : a !== f && n.set(u, u - 1, -n.get(u, u - 1)),
                    l = (E += j) / j,
                    p = O / j,
                    _ = R / j,
                    O /= E,
                    R /= E,
                    s = u;
                  s < t;
                  s++
                )
                  (E = n.get(u, s) + O * n.get(u + 1, s)),
                    w && ((E += R * n.get(u + 2, s)), n.set(u + 2, s, n.get(u + 2, s) - E * _)),
                    n.set(u, s, n.get(u, s) - E * l),
                    n.set(u + 1, s, n.get(u + 1, s) - E * p);
                for (i = 0; i <= Math.min(d, u + 3); i++)
                  (E = l * n.get(i, u) + p * n.get(i, u + 1)),
                    w && ((E += _ * n.get(i, u + 2)), n.set(i, u + 2, n.get(i, u + 2) - E * R)),
                    n.set(i, u, n.get(i, u) - E),
                    n.set(i, u + 1, n.get(i, u + 1) - E * O);
                for (i = 0; i <= M; i++)
                  (E = l * o.get(i, u) + p * o.get(i, u + 1)),
                    w && ((E += _ * o.get(i, u + 2)), o.set(i, u + 2, o.get(i, u + 2) - E * R)),
                    o.set(i, u, o.get(i, u) - E),
                    o.set(i, u + 1, o.get(i, u + 1) - E * O);
              }
          }
        }
        if (S !== 0) {
          for (d = t - 1; d >= 0; d--)
            if (((E = e[d]), (O = r[d]) === 0))
              for (a = d, n.set(d, d, 1), i = d - 1; i >= 0; i--) {
                for (h = n.get(i, i) - E, R = 0, s = a; s <= d; s++) R += n.get(i, s) * n.get(s, d);
                if (r[i] < 0) (_ = h), (j = R);
                else if (
                  ((a = i),
                  r[i] === 0
                    ? n.set(i, d, h !== 0 ? -R / h : -R / (x * S))
                    : ((l = n.get(i, i + 1)),
                      (p = n.get(i + 1, i)),
                      (c = (l * j - _ * R) / (O = (e[i] - E) * (e[i] - E) + r[i] * r[i])),
                      n.set(i, d, c),
                      n.set(
                        i + 1,
                        d,
                        Math.abs(l) > Math.abs(_) ? (-R - h * c) / l : (-j - p * c) / _,
                      )),
                  x * (c = Math.abs(n.get(i, d))) * c > 1)
                )
                  for (s = i; s <= d; s++) n.set(s, d, n.get(s, d) / c);
              }
            else if (O < 0)
              for (
                a = d - 1,
                  Math.abs(n.get(d, d - 1)) > Math.abs(n.get(d - 1, d))
                    ? (n.set(d - 1, d - 1, O / n.get(d, d - 1)),
                      n.set(d - 1, d, -(n.get(d, d) - E) / n.get(d, d - 1)))
                    : ((b = $r(0, -n.get(d - 1, d), n.get(d - 1, d - 1) - E, O)),
                      n.set(d - 1, d - 1, b[0]),
                      n.set(d - 1, d, b[1])),
                  n.set(d, d - 1, 0),
                  n.set(d, d, 1),
                  i = d - 2;
                i >= 0;
                i--
              ) {
                for (v = 0, y = 0, s = a; s <= d; s++)
                  (v += n.get(i, s) * n.get(s, d - 1)), (y += n.get(i, s) * n.get(s, d));
                if (((h = n.get(i, i) - E), r[i] < 0)) (_ = h), (R = v), (j = y);
                else if (
                  ((a = i),
                  r[i] === 0
                    ? ((b = $r(-v, -y, h, O)), n.set(i, d - 1, b[0]), n.set(i, d, b[1]))
                    : ((l = n.get(i, i + 1)),
                      (p = n.get(i + 1, i)),
                      (m = (e[i] - E) * (e[i] - E) + r[i] * r[i] - O * O),
                      (g = 2 * (e[i] - E) * O),
                      m === 0 &&
                        g === 0 &&
                        (m =
                          x *
                          S *
                          (Math.abs(h) + Math.abs(O) + Math.abs(l) + Math.abs(p) + Math.abs(_))),
                      (b = $r(l * R - _ * v + O * y, l * j - _ * y - O * v, m, g)),
                      n.set(i, d - 1, b[0]),
                      n.set(i, d, b[1]),
                      Math.abs(l) > Math.abs(_) + Math.abs(O)
                        ? (n.set(i + 1, d - 1, (-v - h * n.get(i, d - 1) + O * n.get(i, d)) / l),
                          n.set(i + 1, d, (-y - h * n.get(i, d) - O * n.get(i, d - 1)) / l))
                        : ((b = $r(-R - p * n.get(i, d - 1), -j - p * n.get(i, d), _, O)),
                          n.set(i + 1, d - 1, b[0]),
                          n.set(i + 1, d, b[1]))),
                  x * (c = Math.max(Math.abs(n.get(i, d - 1)), Math.abs(n.get(i, d)))) * c > 1)
                )
                  for (s = i; s <= d; s++)
                    n.set(s, d - 1, n.get(s, d - 1) / c), n.set(s, d, n.get(s, d) / c);
              }
          for (i = 0; i < t; i++)
            if (i < 0 || i > M) for (s = i; s < t; s++) o.set(i, s, n.get(i, s));
          for (s = t - 1; s >= 0; s--)
            for (i = 0; i <= M; i++) {
              for (_ = 0, u = 0; u <= Math.min(s, M); u++) _ += o.get(i, u) * n.get(u, s);
              o.set(i, s, _);
            }
        }
      }
      function $r(t, r, e, o) {
        let n;
        let i;
        return Math.abs(e) > Math.abs(o)
          ? [(t + (n = o / e) * r) / (i = e + n * o), (r - n * t) / i]
          : [((n = e / o) * t + r) / (i = o + n * e), (n * r - t) / i];
      }
      function te(t, r) {
        for (let e = 0; e < r.length; e++) {
          const o = r[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var re = (function () {
        function t(r) {
          if (
            ((function (t, r) {
              if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
            })(this, t),
            !(r = Er.checkMatrix(r)).isSymmetric())
          )
            throw new Error('Matrix is not symmetric');
          let e;
          let o;
          let n;
          const i = r;
          const s = i.rows;
          const u = new K(s, s);
          let a = !0;
          for (o = 0; o < s; o++) {
            let f = 0;
            for (n = 0; n < o; n++) {
              let c = 0;
              for (e = 0; e < n; e++) c += u.get(n, e) * u.get(o, e);
              (c = (i.get(o, n) - c) / u.get(n, n)), u.set(o, n, c), (f += c * c);
            }
            for (
              a &= (f = i.get(o, o) - f) > 0, u.set(o, o, Math.sqrt(Math.max(f, 0))), n = o + 1;
              n < s;
              n++
            )
              u.set(o, n, 0);
          }
          (this.L = u), (this.positiveDefinite = Boolean(a));
        }
        let r;
        let e;
        let o;
        return (
          (r = t),
          (e = [
            {
              key: 'isPositiveDefinite',
              value() {
                return this.positiveDefinite;
              },
            },
            {
              key: 'solve',
              value(t) {
                t = Er.checkMatrix(t);
                const r = this.L;
                const e = r.rows;
                if (t.rows !== e) throw new Error('Matrix dimensions do not match');
                if (!1 === this.isPositiveDefinite())
                  throw new Error('Matrix is not positive definite');
                let o;
                let n;
                let i;
                const s = t.columns;
                const u = t.clone();
                for (i = 0; i < e; i++)
                  for (n = 0; n < s; n++) {
                    for (o = 0; o < i; o++) u.set(i, n, u.get(i, n) - u.get(o, n) * r.get(i, o));
                    u.set(i, n, u.get(i, n) / r.get(i, i));
                  }
                for (i = e - 1; i >= 0; i--)
                  for (n = 0; n < s; n++) {
                    for (o = i + 1; o < e; o++)
                      u.set(i, n, u.get(i, n) - u.get(o, n) * r.get(o, i));
                    u.set(i, n, u.get(i, n) / r.get(i, i));
                  }
                return u;
              },
            },
            {
              key: 'lowerTriangularMatrix',
              get() {
                return this.L;
              },
            },
          ]) && te(r.prototype, e),
          o && te(r, o),
          t
        );
      })();
      function ee(t, r) {
        if (!(t instanceof r)) throw new TypeError('Cannot call a class as a function');
      }
      var oe = function t(r) {
        const e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        ee(this, t), (r = Er.checkMatrix(r));
        let o;
        let n = e.Y;
        const i = e.scaleScores;
        const s = void 0 !== i && i;
        const u = e.maxIterations;
        const a = void 0 === u ? 1e3 : u;
        const f = e.terminationCriteria;
        const c = void 0 === f ? 1e-10 : f;
        if (n) {
          if (
            (n =
              Array.isArray(n) && typeof n[0] === 'number' ? K.columnVector(n) : Er.checkMatrix(n))
              .rows !== r.rows
          )
            throw new Error('Y should have the same number of rows as X');
          o = n.getColumnVector(0);
        } else o = r.getColumnVector(0);
        for (var h, l, p, v, y = 1, m = 0; m < a && y > c; m++)
          (p = (p = r.transpose().mmul(o).div(o.transpose().mmul(o).get(0, 0))).div(p.norm())),
            (h = r.mmul(p).div(p.transpose().mmul(p).get(0, 0))),
            m > 0 && (y = h.clone().sub(v).pow(2).sum()),
            (v = h.clone()),
            n
              ? ((l = (l = n.transpose().mmul(h).div(h.transpose().mmul(h).get(0, 0))).div(
                  l.norm(),
                )),
                (o = n.mmul(l).div(l.transpose().mmul(l).get(0, 0))))
              : (o = h);
        if (n) {
          let g = r.transpose().mmul(h).div(h.transpose().mmul(h).get(0, 0));
          g = g.div(g.norm());
          const w = r.clone().sub(h.clone().mmul(g.transpose()));
          const b = o.transpose().mmul(h).div(h.transpose().mmul(h).get(0, 0));
          const d = n.clone().sub(h.clone().mulS(b.get(0, 0)).mmul(l.transpose()));
          (this.t = h),
            (this.p = g.transpose()),
            (this.w = p.transpose()),
            (this.q = l),
            (this.u = o),
            (this.s = h.transpose().mmul(h)),
            (this.xResidual = w),
            (this.yResidual = d),
            (this.betas = b);
        } else
          (this.w = p.transpose()),
            (this.s = h.transpose().mmul(h).sqrt()),
            (this.t = s ? h.clone().div(this.s.get(0, 0)) : h),
            (this.xResidual = r.sub(h.mmul(p.transpose())));
      };
    },
    13(t, r, e) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.toNumber = r.isNaN = r.isNumber = void 0);
      r.isNumber = function (t) {
        return typeof t === 'number';
      };
      r.isNaN = function (t) {
        return Number.isNaN(Number(t));
      };
      r.toNumber = function (t) {
        const e = parseFloat(t);
        return r.isNaN(e) ? t : e;
      };
    },
    14(t, r, e) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }),
        (r.traverseTreeUp =
          r.scaleMatrix =
          r.getAdjMatrix =
          r.floydWarshall =
          r.getDegree =
            void 0);
      r.getDegree = function (t, r, e) {
        for (var o = [], n = 0; n < t; n++) o[n] = 0;
        return e
          ? (e.forEach((t) => {
              t.source && (o[r[t.source]] += 1), t.target && (o[r[t.target]] += 1);
            }),
            o)
          : o;
      };
      r.floydWarshall = function (t) {
        for (var r = [], e = t.length, o = 0; o < e; o += 1) {
          r[o] = [];
          for (var n = 0; n < e; n += 1)
            o === n
              ? (r[o][n] = 0)
              : t[o][n] !== 0 && t[o][n]
              ? (r[o][n] = t[o][n])
              : (r[o][n] = 1 / 0);
        }
        for (let i = 0; i < e; i += 1)
          for (o = 0; o < e; o += 1)
            for (n = 0; n < e; n += 1) r[o][n] > r[o][i] + r[i][n] && (r[o][n] = r[o][i] + r[i][n]);
        return r;
      };
      r.getAdjMatrix = function (t, r) {
        const e = t.nodes;
        const o = t.edges;
        const n = [];
        const i = {};
        if (!e) throw new Error('invalid nodes data!');
        return (
          e &&
            e.forEach((t, r) => {
              i[t.id] = r;
              n.push([]);
            }),
          o &&
            o.forEach((t) => {
              const e = t.source;
              const o = t.target;
              const s = i[e];
              const u = i[o];
              (n[s][u] = 1), r || (n[u][s] = 1);
            }),
          n
        );
      };
      r.scaleMatrix = function (t, r) {
        const e = [];
        return (
          t.forEach((t) => {
            const o = [];
            t.forEach((t) => {
              o.push(t * r);
            }),
              e.push(o);
          }),
          e
        );
      };
      r.traverseTreeUp = function (t, r) {
        typeof r === 'function' &&
          (function t(r, e) {
            if (r && r.children)
              for (let o = r.children.length - 1; o >= 0; o--) if (!t(r.children[o], e)) return;
            return !!e(r);
          })(t, r);
      };
    },
    15(t, r, e) {
      'use strict';
      function o(t) {
        return (o =
          typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol === 'function' &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      var n =
        (this && this.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (t) {
              for (var r, e = 1, o = arguments.length; e < o; e++)
                for (const n in (r = arguments[e]))
                  Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
              return t;
            }).apply(this, arguments);
        };
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.clone = r.isObject = void 0);
      r.isObject = function (t) {
        return t !== null && o(t) === 'object';
      };
      r.clone = function (t) {
        if (t === null) return t;
        if (t instanceof Date) return new Date(t.getTime());
        if (t instanceof Array) {
          const e = [];
          return (
            t.forEach((t) => {
              e.push(t);
            }),
            e.map((t) => {
              return r.clone(t);
            })
          );
        }
        if (o(t) === 'object' && t !== {}) {
          const i = n({}, t);
          return (
            Object.keys(i).forEach((t) => {
              i[t] = r.clone(i[t]);
            }),
            i
          );
        }
        return t;
      };
    },
    16(t, r, e) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.isFunction = void 0);
      r.isFunction = function (t) {
        return typeof t === 'function';
      };
    },
    229(t, r, e) {
      'use strict';
      let o;
      const n =
        (this && this.__extends) ||
        ((o = function (t, r) {
          return (o =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, r) {
                t.__proto__ = r;
              }) ||
            function (t, r) {
              for (const e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
            })(t, r);
        }),
        function (t, r) {
          if (typeof r !== 'function' && r !== null)
            throw new TypeError(`Class extends value ${String(r)} is not a constructor or null`);
          function e() {
            this.constructor = t;
          }
          o(t, r),
            (t.prototype = r === null ? Object.create(r) : ((e.prototype = r.prototype), new e()));
        });
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.MDSLayout = void 0);
      const i = e(121);
      const s = e(10);
      const u = (function (t) {
        function r(r) {
          const e = t.call(this) || this;
          return (
            (e.center = [0, 0]),
            (e.linkDistance = 50),
            (e.nodes = []),
            (e.edges = []),
            (e.onLayoutEnd = function () {}),
            e.updateCfg(r),
            e
          );
        }
        return (
          n(r, t),
          (r.prototype.getDefaultCfg = function () {
            return { center: [0, 0], linkDistance: 50 };
          }),
          (r.prototype.execute = function () {
            const t = this.nodes;
            const r = this.edges;
            const e = void 0 === r ? [] : r;
            const o = this.center;
            if (t && t.length !== 0) {
              if (t.length === 1)
                return (
                  (t[0].x = o[0]), (t[0].y = o[1]), void (this.onLayoutEnd && this.onLayoutEnd())
                );
              const n = this.linkDistance;
              const i = s.getAdjMatrix({ nodes: t, edges: e }, !1);
              const u = s.floydWarshall(i);
              this.handleInfinity(u);
              const a = s.scaleMatrix(u, n);
              this.scaledDistances = a;
              const f = this.runMDS();
              return (
                (this.positions = f),
                f.forEach((r, e) => {
                  (t[e].x = r[0] + o[0]), (t[e].y = r[1] + o[1]);
                }),
                this.onLayoutEnd && this.onLayoutEnd(),
                { nodes: t, edges: e }
              );
            }
            this.onLayoutEnd && this.onLayoutEnd();
          }),
          (r.prototype.runMDS = function () {
            const t = this.scaledDistances;
            const r = i.Matrix.mul(i.Matrix.pow(t, 2), -0.5);
            const e = r.mean('row');
            const o = r.mean('column');
            const n = r.mean();
            r.add(n).subRowVector(e).subColumnVector(o);
            const s = new i.SingularValueDecomposition(r);
            const u = i.Matrix.sqrt(s.diagonalMatrix).diagonal();
            return s.leftSingularVectors.toJSON().map((t) => {
              return i.Matrix.mul([t], [u]).toJSON()[0].splice(0, 2);
            });
          }),
          (r.prototype.handleInfinity = function (t) {
            let r = -999999;
            t.forEach((t) => {
              t.forEach((t) => {
                t !== 1 / 0 && r < t && (r = t);
              });
            }),
              t.forEach((e, o) => {
                e.forEach((e, n) => {
                  e === 1 / 0 && (t[o][n] = r);
                });
              });
          }),
          (r.prototype.getType = function () {
            return 'mds';
          }),
          r
        );
      })(e(7).Base);
      r.MDSLayout = u;
    },
    487(t, r, e) {
      'use strict';
      e.r(r);
      const o = e(229);
      r.default = o.MDSLayout;
    },
    7(t, r, e) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 }), (r.Base = void 0);
      const o = (function () {
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
            return 'base';
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
      r.Base = o;
    },
  }).default;
});
// # sourceMappingURL=mdsLayout.js.map
