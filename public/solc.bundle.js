!(function (e) {
  var t = {}
  function r(n) {
    if (t[n]) return t[n].exports
    var i = (t[n] = { i: n, l: !1, exports: {} })
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports
  }
  ;(r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n })
    }),
    (r.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var n = Object.create(null)
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function (t) {
              return e[t]
            }.bind(null, i)
          )
      return n
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return r.d(t, 'a', t), t
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (r.p = ''),
    r((r.s = 24))
})([
  function (e, t) {
    var r
    r = (function () {
      return this
    })()
    try {
      r = r || new Function('return this')()
    } catch (e) {
      'object' == typeof window && (r = window)
    }
    e.exports = r
  },
  function (e, t) {
    var r,
      n,
      i = (e.exports = {})
    function o() {
      throw new Error('setTimeout has not been defined')
    }
    function s() {
      throw new Error('clearTimeout has not been defined')
    }
    function a(e) {
      if (r === setTimeout) return setTimeout(e, 0)
      if ((r === o || !r) && setTimeout)
        return (r = setTimeout), setTimeout(e, 0)
      try {
        return r(e, 0)
      } catch (t) {
        try {
          return r.call(null, e, 0)
        } catch (t) {
          return r.call(this, e, 0)
        }
      }
    }
    !(function () {
      try {
        r = 'function' == typeof setTimeout ? setTimeout : o
      } catch (e) {
        r = o
      }
      try {
        n = 'function' == typeof clearTimeout ? clearTimeout : s
      } catch (e) {
        n = s
      }
    })()
    var u,
      f = [],
      c = !1,
      l = -1
    function h() {
      c &&
        u &&
        ((c = !1), u.length ? (f = u.concat(f)) : (l = -1), f.length && p())
    }
    function p() {
      if (!c) {
        var e = a(h)
        c = !0
        for (var t = f.length; t; ) {
          for (u = f, f = []; ++l < t; ) u && u[l].run()
          ;(l = -1), (t = f.length)
        }
        ;(u = null),
          (c = !1),
          (function (e) {
            if (n === clearTimeout) return clearTimeout(e)
            if ((n === s || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(e)
            try {
              n(e)
            } catch (t) {
              try {
                return n.call(null, e)
              } catch (t) {
                return n.call(this, e)
              }
            }
          })(e)
      }
    }
    function d(e, t) {
      ;(this.fun = e), (this.array = t)
    }
    function y() {}
    ;(i.nextTick = function (e) {
      var t = new Array(arguments.length - 1)
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r]
      f.push(new d(e, t)), 1 !== f.length || c || a(p)
    }),
      (d.prototype.run = function () {
        this.fun.apply(null, this.array)
      }),
      (i.title = 'browser'),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ''),
      (i.versions = {}),
      (i.on = y),
      (i.addListener = y),
      (i.once = y),
      (i.off = y),
      (i.removeListener = y),
      (i.removeAllListeners = y),
      (i.emit = y),
      (i.prependListener = y),
      (i.prependOnceListener = y),
      (i.listeners = function (e) {
        return []
      }),
      (i.binding = function (e) {
        throw new Error('process.binding is not supported')
      }),
      (i.cwd = function () {
        return '/'
      }),
      (i.chdir = function (e) {
        throw new Error('process.chdir is not supported')
      }),
      (i.umask = function () {
        return 0
      })
  },
  function (e, t) {
    'function' == typeof Object.create
      ? (e.exports = function (e, t) {
          t &&
            ((e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })))
        })
      : (e.exports = function (e, t) {
          if (t) {
            e.super_ = t
            var r = function () {}
            ;(r.prototype = t.prototype),
              (e.prototype = new r()),
              (e.prototype.constructor = e)
          }
        })
  },
  function (e, t, r) {
    'use strict'
    var n = r(7),
      i =
        Object.keys ||
        function (e) {
          var t = []
          for (var r in e) t.push(r)
          return t
        }
    e.exports = l
    var o = Object.create(r(6))
    o.inherits = r(2)
    var s = r(18),
      a = r(10)
    o.inherits(l, s)
    for (var u = i(a.prototype), f = 0; f < u.length; f++) {
      var c = u[f]
      l.prototype[c] || (l.prototype[c] = a.prototype[c])
    }
    function l(e) {
      if (!(this instanceof l)) return new l(e)
      s.call(this, e),
        a.call(this, e),
        e && !1 === e.readable && (this.readable = !1),
        e && !1 === e.writable && (this.writable = !1),
        (this.allowHalfOpen = !0),
        e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once('end', h)
    }
    function h() {
      this.allowHalfOpen || this._writableState.ended || n.nextTick(p, this)
    }
    function p(e) {
      e.end()
    }
    Object.defineProperty(l.prototype, 'writableHighWaterMark', {
      enumerable: !1,
      get: function () {
        return this._writableState.highWaterMark
      },
    }),
      Object.defineProperty(l.prototype, 'destroyed', {
        get: function () {
          return (
            void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            this._readableState.destroyed &&
            this._writableState.destroyed
          )
        },
        set: function (e) {
          void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            ((this._readableState.destroyed = e),
            (this._writableState.destroyed = e))
        },
      }),
      (l.prototype._destroy = function (e, t) {
        this.push(null), this.end(), n.nextTick(t, e)
      })
  },
  function (e, t, r) {
    'use strict'
    ;(function (e) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */
      var n = r(38),
        i = r(39),
        o = r(15)
      function s() {
        return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
      }
      function a(e, t) {
        if (s() < t) throw new RangeError('Invalid typed array length')
        return (
          u.TYPED_ARRAY_SUPPORT
            ? ((e = new Uint8Array(t)).__proto__ = u.prototype)
            : (null === e && (e = new u(t)), (e.length = t)),
          e
        )
      }
      function u(e, t, r) {
        if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(e, t, r)
        if ('number' == typeof e) {
          if ('string' == typeof t)
            throw new Error(
              'If encoding is specified then the first argument must be a string'
            )
          return l(this, e)
        }
        return f(this, e, t, r)
      }
      function f(e, t, r, n) {
        if ('number' == typeof t)
          throw new TypeError('"value" argument must not be a number')
        return 'undefined' != typeof ArrayBuffer && t instanceof ArrayBuffer
          ? (function (e, t, r, n) {
              if ((t.byteLength, r < 0 || t.byteLength < r))
                throw new RangeError("'offset' is out of bounds")
              if (t.byteLength < r + (n || 0))
                throw new RangeError("'length' is out of bounds")
              t =
                void 0 === r && void 0 === n
                  ? new Uint8Array(t)
                  : void 0 === n
                  ? new Uint8Array(t, r)
                  : new Uint8Array(t, r, n)
              u.TYPED_ARRAY_SUPPORT
                ? ((e = t).__proto__ = u.prototype)
                : (e = h(e, t))
              return e
            })(e, t, r, n)
          : 'string' == typeof t
          ? (function (e, t, r) {
              ;('string' == typeof r && '' !== r) || (r = 'utf8')
              if (!u.isEncoding(r))
                throw new TypeError(
                  '"encoding" must be a valid string encoding'
                )
              var n = 0 | d(t, r),
                i = (e = a(e, n)).write(t, r)
              i !== n && (e = e.slice(0, i))
              return e
            })(e, t, r)
          : (function (e, t) {
              if (u.isBuffer(t)) {
                var r = 0 | p(t.length)
                return 0 === (e = a(e, r)).length || t.copy(e, 0, 0, r), e
              }
              if (t) {
                if (
                  ('undefined' != typeof ArrayBuffer &&
                    t.buffer instanceof ArrayBuffer) ||
                  'length' in t
                )
                  return 'number' != typeof t.length || (n = t.length) != n
                    ? a(e, 0)
                    : h(e, t)
                if ('Buffer' === t.type && o(t.data)) return h(e, t.data)
              }
              var n
              throw new TypeError(
                'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
              )
            })(e, t)
      }
      function c(e) {
        if ('number' != typeof e)
          throw new TypeError('"size" argument must be a number')
        if (e < 0) throw new RangeError('"size" argument must not be negative')
      }
      function l(e, t) {
        if ((c(t), (e = a(e, t < 0 ? 0 : 0 | p(t))), !u.TYPED_ARRAY_SUPPORT))
          for (var r = 0; r < t; ++r) e[r] = 0
        return e
      }
      function h(e, t) {
        var r = t.length < 0 ? 0 : 0 | p(t.length)
        e = a(e, r)
        for (var n = 0; n < r; n += 1) e[n] = 255 & t[n]
        return e
      }
      function p(e) {
        if (e >= s())
          throw new RangeError(
            'Attempt to allocate Buffer larger than maximum size: 0x' +
              s().toString(16) +
              ' bytes'
          )
        return 0 | e
      }
      function d(e, t) {
        if (u.isBuffer(e)) return e.length
        if (
          'undefined' != typeof ArrayBuffer &&
          'function' == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        )
          return e.byteLength
        'string' != typeof e && (e = '' + e)
        var r = e.length
        if (0 === r) return 0
        for (var n = !1; ; )
          switch (t) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return r
            case 'utf8':
            case 'utf-8':
            case void 0:
              return D(e).length
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * r
            case 'hex':
              return r >>> 1
            case 'base64':
              return F(e).length
            default:
              if (n) return D(e).length
              ;(t = ('' + t).toLowerCase()), (n = !0)
          }
      }
      function y(e, t, r) {
        var n = !1
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return ''
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return ''
        if ((r >>>= 0) <= (t >>>= 0)) return ''
        for (e || (e = 'utf8'); ; )
          switch (e) {
            case 'hex':
              return R(this, t, r)
            case 'utf8':
            case 'utf-8':
              return O(this, t, r)
            case 'ascii':
              return T(this, t, r)
            case 'latin1':
            case 'binary':
              return j(this, t, r)
            case 'base64':
              return A(this, t, r)
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return k(this, t, r)
            default:
              if (n) throw new TypeError('Unknown encoding: ' + e)
              ;(e = (e + '').toLowerCase()), (n = !0)
          }
      }
      function g(e, t, r) {
        var n = e[t]
        ;(e[t] = e[r]), (e[r] = n)
      }
      function v(e, t, r, n, i) {
        if (0 === e.length) return -1
        if (
          ('string' == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (r = +r),
          isNaN(r) && (r = i ? 0 : e.length - 1),
          r < 0 && (r = e.length + r),
          r >= e.length)
        ) {
          if (i) return -1
          r = e.length - 1
        } else if (r < 0) {
          if (!i) return -1
          r = 0
        }
        if (('string' == typeof t && (t = u.from(t, n)), u.isBuffer(t)))
          return 0 === t.length ? -1 : m(e, t, r, n, i)
        if ('number' == typeof t)
          return (
            (t &= 255),
            u.TYPED_ARRAY_SUPPORT &&
            'function' == typeof Uint8Array.prototype.indexOf
              ? i
                ? Uint8Array.prototype.indexOf.call(e, t, r)
                : Uint8Array.prototype.lastIndexOf.call(e, t, r)
              : m(e, [t], r, n, i)
          )
        throw new TypeError('val must be string, number or Buffer')
      }
      function m(e, t, r, n, i) {
        var o,
          s = 1,
          a = e.length,
          u = t.length
        if (
          void 0 !== n &&
          ('ucs2' === (n = String(n).toLowerCase()) ||
            'ucs-2' === n ||
            'utf16le' === n ||
            'utf-16le' === n)
        ) {
          if (e.length < 2 || t.length < 2) return -1
          ;(s = 2), (a /= 2), (u /= 2), (r /= 2)
        }
        function f(e, t) {
          return 1 === s ? e[t] : e.readUInt16BE(t * s)
        }
        if (i) {
          var c = -1
          for (o = r; o < a; o++)
            if (f(e, o) === f(t, -1 === c ? 0 : o - c)) {
              if ((-1 === c && (c = o), o - c + 1 === u)) return c * s
            } else -1 !== c && (o -= o - c), (c = -1)
        } else
          for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
            for (var l = !0, h = 0; h < u; h++)
              if (f(e, o + h) !== f(t, h)) {
                l = !1
                break
              }
            if (l) return o
          }
        return -1
      }
      function b(e, t, r, n) {
        r = Number(r) || 0
        var i = e.length - r
        n ? (n = Number(n)) > i && (n = i) : (n = i)
        var o = t.length
        if (o % 2 != 0) throw new TypeError('Invalid hex string')
        n > o / 2 && (n = o / 2)
        for (var s = 0; s < n; ++s) {
          var a = parseInt(t.substr(2 * s, 2), 16)
          if (isNaN(a)) return s
          e[r + s] = a
        }
        return s
      }
      function w(e, t, r, n) {
        return z(D(t, e.length - r), e, r, n)
      }
      function _(e, t, r, n) {
        return z(
          (function (e) {
            for (var t = [], r = 0; r < e.length; ++r)
              t.push(255 & e.charCodeAt(r))
            return t
          })(t),
          e,
          r,
          n
        )
      }
      function S(e, t, r, n) {
        return _(e, t, r, n)
      }
      function E(e, t, r, n) {
        return z(F(t), e, r, n)
      }
      function x(e, t, r, n) {
        return z(
          (function (e, t) {
            for (
              var r, n, i, o = [], s = 0;
              s < e.length && !((t -= 2) < 0);
              ++s
            )
              (r = e.charCodeAt(s)),
                (n = r >> 8),
                (i = r % 256),
                o.push(i),
                o.push(n)
            return o
          })(t, e.length - r),
          e,
          r,
          n
        )
      }
      function A(e, t, r) {
        return 0 === t && r === e.length
          ? n.fromByteArray(e)
          : n.fromByteArray(e.slice(t, r))
      }
      function O(e, t, r) {
        r = Math.min(e.length, r)
        for (var n = [], i = t; i < r; ) {
          var o,
            s,
            a,
            u,
            f = e[i],
            c = null,
            l = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1
          if (i + l <= r)
            switch (l) {
              case 1:
                f < 128 && (c = f)
                break
              case 2:
                128 == (192 & (o = e[i + 1])) &&
                  (u = ((31 & f) << 6) | (63 & o)) > 127 &&
                  (c = u)
                break
              case 3:
                ;(o = e[i + 1]),
                  (s = e[i + 2]),
                  128 == (192 & o) &&
                    128 == (192 & s) &&
                    (u = ((15 & f) << 12) | ((63 & o) << 6) | (63 & s)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (c = u)
                break
              case 4:
                ;(o = e[i + 1]),
                  (s = e[i + 2]),
                  (a = e[i + 3]),
                  128 == (192 & o) &&
                    128 == (192 & s) &&
                    128 == (192 & a) &&
                    (u =
                      ((15 & f) << 18) |
                      ((63 & o) << 12) |
                      ((63 & s) << 6) |
                      (63 & a)) > 65535 &&
                    u < 1114112 &&
                    (c = u)
            }
          null === c
            ? ((c = 65533), (l = 1))
            : c > 65535 &&
              ((c -= 65536),
              n.push(((c >>> 10) & 1023) | 55296),
              (c = 56320 | (1023 & c))),
            n.push(c),
            (i += l)
        }
        return (function (e) {
          var t = e.length
          if (t <= 4096) return String.fromCharCode.apply(String, e)
          var r = '',
            n = 0
          for (; n < t; )
            r += String.fromCharCode.apply(String, e.slice(n, (n += 4096)))
          return r
        })(n)
      }
      ;(t.Buffer = u),
        (t.SlowBuffer = function (e) {
          ;+e != e && (e = 0)
          return u.alloc(+e)
        }),
        (t.INSPECT_MAX_BYTES = 50),
        (u.TYPED_ARRAY_SUPPORT =
          void 0 !== e.TYPED_ARRAY_SUPPORT
            ? e.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var e = new Uint8Array(1)
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42
                      },
                    }),
                    42 === e.foo() &&
                      'function' == typeof e.subarray &&
                      0 === e.subarray(1, 1).byteLength
                  )
                } catch (e) {
                  return !1
                }
              })()),
        (t.kMaxLength = s()),
        (u.poolSize = 8192),
        (u._augment = function (e) {
          return (e.__proto__ = u.prototype), e
        }),
        (u.from = function (e, t, r) {
          return f(null, e, t, r)
        }),
        u.TYPED_ARRAY_SUPPORT &&
          ((u.prototype.__proto__ = Uint8Array.prototype),
          (u.__proto__ = Uint8Array),
          'undefined' != typeof Symbol &&
            Symbol.species &&
            u[Symbol.species] === u &&
            Object.defineProperty(u, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (u.alloc = function (e, t, r) {
          return (function (e, t, r, n) {
            return (
              c(t),
              t <= 0
                ? a(e, t)
                : void 0 !== r
                ? 'string' == typeof n
                  ? a(e, t).fill(r, n)
                  : a(e, t).fill(r)
                : a(e, t)
            )
          })(null, e, t, r)
        }),
        (u.allocUnsafe = function (e) {
          return l(null, e)
        }),
        (u.allocUnsafeSlow = function (e) {
          return l(null, e)
        }),
        (u.isBuffer = function (e) {
          return !(null == e || !e._isBuffer)
        }),
        (u.compare = function (e, t) {
          if (!u.isBuffer(e) || !u.isBuffer(t))
            throw new TypeError('Arguments must be Buffers')
          if (e === t) return 0
          for (
            var r = e.length, n = t.length, i = 0, o = Math.min(r, n);
            i < o;
            ++i
          )
            if (e[i] !== t[i]) {
              ;(r = e[i]), (n = t[i])
              break
            }
          return r < n ? -1 : n < r ? 1 : 0
        }),
        (u.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0
            default:
              return !1
          }
        }),
        (u.concat = function (e, t) {
          if (!o(e))
            throw new TypeError('"list" argument must be an Array of Buffers')
          if (0 === e.length) return u.alloc(0)
          var r
          if (void 0 === t)
            for (t = 0, r = 0; r < e.length; ++r) t += e[r].length
          var n = u.allocUnsafe(t),
            i = 0
          for (r = 0; r < e.length; ++r) {
            var s = e[r]
            if (!u.isBuffer(s))
              throw new TypeError('"list" argument must be an Array of Buffers')
            s.copy(n, i), (i += s.length)
          }
          return n
        }),
        (u.byteLength = d),
        (u.prototype._isBuffer = !0),
        (u.prototype.swap16 = function () {
          var e = this.length
          if (e % 2 != 0)
            throw new RangeError('Buffer size must be a multiple of 16-bits')
          for (var t = 0; t < e; t += 2) g(this, t, t + 1)
          return this
        }),
        (u.prototype.swap32 = function () {
          var e = this.length
          if (e % 4 != 0)
            throw new RangeError('Buffer size must be a multiple of 32-bits')
          for (var t = 0; t < e; t += 4)
            g(this, t, t + 3), g(this, t + 1, t + 2)
          return this
        }),
        (u.prototype.swap64 = function () {
          var e = this.length
          if (e % 8 != 0)
            throw new RangeError('Buffer size must be a multiple of 64-bits')
          for (var t = 0; t < e; t += 8)
            g(this, t, t + 7),
              g(this, t + 1, t + 6),
              g(this, t + 2, t + 5),
              g(this, t + 3, t + 4)
          return this
        }),
        (u.prototype.toString = function () {
          var e = 0 | this.length
          return 0 === e
            ? ''
            : 0 === arguments.length
            ? O(this, 0, e)
            : y.apply(this, arguments)
        }),
        (u.prototype.equals = function (e) {
          if (!u.isBuffer(e)) throw new TypeError('Argument must be a Buffer')
          return this === e || 0 === u.compare(this, e)
        }),
        (u.prototype.inspect = function () {
          var e = '',
            r = t.INSPECT_MAX_BYTES
          return (
            this.length > 0 &&
              ((e = this.toString('hex', 0, r).match(/.{2}/g).join(' ')),
              this.length > r && (e += ' ... ')),
            '<Buffer ' + e + '>'
          )
        }),
        (u.prototype.compare = function (e, t, r, n, i) {
          if (!u.isBuffer(e)) throw new TypeError('Argument must be a Buffer')
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === i && (i = this.length),
            t < 0 || r > e.length || n < 0 || i > this.length)
          )
            throw new RangeError('out of range index')
          if (n >= i && t >= r) return 0
          if (n >= i) return -1
          if (t >= r) return 1
          if (this === e) return 0
          for (
            var o = (i >>>= 0) - (n >>>= 0),
              s = (r >>>= 0) - (t >>>= 0),
              a = Math.min(o, s),
              f = this.slice(n, i),
              c = e.slice(t, r),
              l = 0;
            l < a;
            ++l
          )
            if (f[l] !== c[l]) {
              ;(o = f[l]), (s = c[l])
              break
            }
          return o < s ? -1 : s < o ? 1 : 0
        }),
        (u.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r)
        }),
        (u.prototype.indexOf = function (e, t, r) {
          return v(this, e, t, r, !0)
        }),
        (u.prototype.lastIndexOf = function (e, t, r) {
          return v(this, e, t, r, !1)
        }),
        (u.prototype.write = function (e, t, r, n) {
          if (void 0 === t) (n = 'utf8'), (r = this.length), (t = 0)
          else if (void 0 === r && 'string' == typeof t)
            (n = t), (r = this.length), (t = 0)
          else {
            if (!isFinite(t))
              throw new Error(
                'Buffer.write(string, encoding, offset[, length]) is no longer supported'
              )
            ;(t |= 0),
              isFinite(r)
                ? ((r |= 0), void 0 === n && (n = 'utf8'))
                : ((n = r), (r = void 0))
          }
          var i = this.length - t
          if (
            ((void 0 === r || r > i) && (r = i),
            (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError('Attempt to write outside buffer bounds')
          n || (n = 'utf8')
          for (var o = !1; ; )
            switch (n) {
              case 'hex':
                return b(this, e, t, r)
              case 'utf8':
              case 'utf-8':
                return w(this, e, t, r)
              case 'ascii':
                return _(this, e, t, r)
              case 'latin1':
              case 'binary':
                return S(this, e, t, r)
              case 'base64':
                return E(this, e, t, r)
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return x(this, e, t, r)
              default:
                if (o) throw new TypeError('Unknown encoding: ' + n)
                ;(n = ('' + n).toLowerCase()), (o = !0)
            }
        }),
        (u.prototype.toJSON = function () {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0),
          }
        })
      function T(e, t, r) {
        var n = ''
        r = Math.min(e.length, r)
        for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i])
        return n
      }
      function j(e, t, r) {
        var n = ''
        r = Math.min(e.length, r)
        for (var i = t; i < r; ++i) n += String.fromCharCode(e[i])
        return n
      }
      function R(e, t, r) {
        var n = e.length
        ;(!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n)
        for (var i = '', o = t; o < r; ++o) i += q(e[o])
        return i
      }
      function k(e, t, r) {
        for (var n = e.slice(t, r), i = '', o = 0; o < n.length; o += 2)
          i += String.fromCharCode(n[o] + 256 * n[o + 1])
        return i
      }
      function C(e, t, r) {
        if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint')
        if (e + t > r)
          throw new RangeError('Trying to access beyond buffer length')
      }
      function P(e, t, r, n, i, o) {
        if (!u.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance')
        if (t > i || t < o)
          throw new RangeError('"value" argument is out of bounds')
        if (r + n > e.length) throw new RangeError('Index out of range')
      }
      function M(e, t, r, n) {
        t < 0 && (t = 65535 + t + 1)
        for (var i = 0, o = Math.min(e.length - r, 2); i < o; ++i)
          e[r + i] =
            (t & (255 << (8 * (n ? i : 1 - i)))) >>> (8 * (n ? i : 1 - i))
      }
      function B(e, t, r, n) {
        t < 0 && (t = 4294967295 + t + 1)
        for (var i = 0, o = Math.min(e.length - r, 4); i < o; ++i)
          e[r + i] = (t >>> (8 * (n ? i : 3 - i))) & 255
      }
      function L(e, t, r, n, i, o) {
        if (r + n > e.length) throw new RangeError('Index out of range')
        if (r < 0) throw new RangeError('Index out of range')
      }
      function I(e, t, r, n, o) {
        return o || L(e, 0, r, 4), i.write(e, t, r, n, 23, 4), r + 4
      }
      function N(e, t, r, n, o) {
        return o || L(e, 0, r, 8), i.write(e, t, r, n, 52, 8), r + 8
      }
      ;(u.prototype.slice = function (e, t) {
        var r,
          n = this.length
        if (
          ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
          (t = void 0 === t ? n : ~~t) < 0
            ? (t += n) < 0 && (t = 0)
            : t > n && (t = n),
          t < e && (t = e),
          u.TYPED_ARRAY_SUPPORT)
        )
          (r = this.subarray(e, t)).__proto__ = u.prototype
        else {
          var i = t - e
          r = new u(i, void 0)
          for (var o = 0; o < i; ++o) r[o] = this[o + e]
        }
        return r
      }),
        (u.prototype.readUIntLE = function (e, t, r) {
          ;(e |= 0), (t |= 0), r || C(e, t, this.length)
          for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
            n += this[e + o] * i
          return n
        }),
        (u.prototype.readUIntBE = function (e, t, r) {
          ;(e |= 0), (t |= 0), r || C(e, t, this.length)
          for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
            n += this[e + --t] * i
          return n
        }),
        (u.prototype.readUInt8 = function (e, t) {
          return t || C(e, 1, this.length), this[e]
        }),
        (u.prototype.readUInt16LE = function (e, t) {
          return t || C(e, 2, this.length), this[e] | (this[e + 1] << 8)
        }),
        (u.prototype.readUInt16BE = function (e, t) {
          return t || C(e, 2, this.length), (this[e] << 8) | this[e + 1]
        }),
        (u.prototype.readUInt32LE = function (e, t) {
          return (
            t || C(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              16777216 * this[e + 3]
          )
        }),
        (u.prototype.readUInt32BE = function (e, t) {
          return (
            t || C(e, 4, this.length),
            16777216 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          )
        }),
        (u.prototype.readIntLE = function (e, t, r) {
          ;(e |= 0), (t |= 0), r || C(e, t, this.length)
          for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
            n += this[e + o] * i
          return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n
        }),
        (u.prototype.readIntBE = function (e, t, r) {
          ;(e |= 0), (t |= 0), r || C(e, t, this.length)
          for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256); )
            o += this[e + --n] * i
          return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
        }),
        (u.prototype.readInt8 = function (e, t) {
          return (
            t || C(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          )
        }),
        (u.prototype.readInt16LE = function (e, t) {
          t || C(e, 2, this.length)
          var r = this[e] | (this[e + 1] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (u.prototype.readInt16BE = function (e, t) {
          t || C(e, 2, this.length)
          var r = this[e + 1] | (this[e] << 8)
          return 32768 & r ? 4294901760 | r : r
        }),
        (u.prototype.readInt32LE = function (e, t) {
          return (
            t || C(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          )
        }),
        (u.prototype.readInt32BE = function (e, t) {
          return (
            t || C(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          )
        }),
        (u.prototype.readFloatLE = function (e, t) {
          return t || C(e, 4, this.length), i.read(this, e, !0, 23, 4)
        }),
        (u.prototype.readFloatBE = function (e, t) {
          return t || C(e, 4, this.length), i.read(this, e, !1, 23, 4)
        }),
        (u.prototype.readDoubleLE = function (e, t) {
          return t || C(e, 8, this.length), i.read(this, e, !0, 52, 8)
        }),
        (u.prototype.readDoubleBE = function (e, t) {
          return t || C(e, 8, this.length), i.read(this, e, !1, 52, 8)
        }),
        (u.prototype.writeUIntLE = function (e, t, r, n) {
          ;((e = +e), (t |= 0), (r |= 0), n) ||
            P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
          var i = 1,
            o = 0
          for (this[t] = 255 & e; ++o < r && (i *= 256); )
            this[t + o] = (e / i) & 255
          return t + r
        }),
        (u.prototype.writeUIntBE = function (e, t, r, n) {
          ;((e = +e), (t |= 0), (r |= 0), n) ||
            P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0)
          var i = r - 1,
            o = 1
          for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
            this[t + i] = (e / o) & 255
          return t + r
        }),
        (u.prototype.writeUInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || P(this, e, t, 1, 255, 0),
            u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & e),
            t + 1
          )
        }),
        (u.prototype.writeUInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || P(this, e, t, 2, 65535, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : M(this, e, t, !0),
            t + 2
          )
        }),
        (u.prototype.writeUInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || P(this, e, t, 2, 65535, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : M(this, e, t, !1),
            t + 2
          )
        }),
        (u.prototype.writeUInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || P(this, e, t, 4, 4294967295, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e))
              : B(this, e, t, !0),
            t + 4
          )
        }),
        (u.prototype.writeUInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || P(this, e, t, 4, 4294967295, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : B(this, e, t, !1),
            t + 4
          )
        }),
        (u.prototype.writeIntLE = function (e, t, r, n) {
          if (((e = +e), (t |= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1)
            P(this, e, t, r, i - 1, -i)
          }
          var o = 0,
            s = 1,
            a = 0
          for (this[t] = 255 & e; ++o < r && (s *= 256); )
            e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
              (this[t + o] = (((e / s) >> 0) - a) & 255)
          return t + r
        }),
        (u.prototype.writeIntBE = function (e, t, r, n) {
          if (((e = +e), (t |= 0), !n)) {
            var i = Math.pow(2, 8 * r - 1)
            P(this, e, t, r, i - 1, -i)
          }
          var o = r - 1,
            s = 1,
            a = 0
          for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); )
            e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
              (this[t + o] = (((e / s) >> 0) - a) & 255)
          return t + r
        }),
        (u.prototype.writeInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || P(this, e, t, 1, 127, -128),
            u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          )
        }),
        (u.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || P(this, e, t, 2, 32767, -32768),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : M(this, e, t, !0),
            t + 2
          )
        }),
        (u.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || P(this, e, t, 2, 32767, -32768),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : M(this, e, t, !1),
            t + 2
          )
        }),
        (u.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || P(this, e, t, 4, 2147483647, -2147483648),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24))
              : B(this, e, t, !0),
            t + 4
          )
        }),
        (u.prototype.writeInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || P(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : B(this, e, t, !1),
            t + 4
          )
        }),
        (u.prototype.writeFloatLE = function (e, t, r) {
          return I(this, e, t, !0, r)
        }),
        (u.prototype.writeFloatBE = function (e, t, r) {
          return I(this, e, t, !1, r)
        }),
        (u.prototype.writeDoubleLE = function (e, t, r) {
          return N(this, e, t, !0, r)
        }),
        (u.prototype.writeDoubleBE = function (e, t, r) {
          return N(this, e, t, !1, r)
        }),
        (u.prototype.copy = function (e, t, r, n) {
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0
          if (0 === e.length || 0 === this.length) return 0
          if (t < 0) throw new RangeError('targetStart out of bounds')
          if (r < 0 || r >= this.length)
            throw new RangeError('sourceStart out of bounds')
          if (n < 0) throw new RangeError('sourceEnd out of bounds')
          n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r)
          var i,
            o = n - r
          if (this === e && r < t && t < n)
            for (i = o - 1; i >= 0; --i) e[i + t] = this[i + r]
          else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
            for (i = 0; i < o; ++i) e[i + t] = this[i + r]
          else Uint8Array.prototype.set.call(e, this.subarray(r, r + o), t)
          return o
        }),
        (u.prototype.fill = function (e, t, r, n) {
          if ('string' == typeof e) {
            if (
              ('string' == typeof t
                ? ((n = t), (t = 0), (r = this.length))
                : 'string' == typeof r && ((n = r), (r = this.length)),
              1 === e.length)
            ) {
              var i = e.charCodeAt(0)
              i < 256 && (e = i)
            }
            if (void 0 !== n && 'string' != typeof n)
              throw new TypeError('encoding must be a string')
            if ('string' == typeof n && !u.isEncoding(n))
              throw new TypeError('Unknown encoding: ' + n)
          } else 'number' == typeof e && (e &= 255)
          if (t < 0 || this.length < t || this.length < r)
            throw new RangeError('Out of range index')
          if (r <= t) return this
          var o
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            e || (e = 0),
            'number' == typeof e)
          )
            for (o = t; o < r; ++o) this[o] = e
          else {
            var s = u.isBuffer(e) ? e : D(new u(e, n).toString()),
              a = s.length
            for (o = 0; o < r - t; ++o) this[o + t] = s[o % a]
          }
          return this
        })
      var U = /[^+\/0-9A-Za-z-_]/g
      function q(e) {
        return e < 16 ? '0' + e.toString(16) : e.toString(16)
      }
      function D(e, t) {
        var r
        t = t || 1 / 0
        for (var n = e.length, i = null, o = [], s = 0; s < n; ++s) {
          if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                ;(t -= 3) > -1 && o.push(239, 191, 189)
                continue
              }
              if (s + 1 === n) {
                ;(t -= 3) > -1 && o.push(239, 191, 189)
                continue
              }
              i = r
              continue
            }
            if (r < 56320) {
              ;(t -= 3) > -1 && o.push(239, 191, 189), (i = r)
              continue
            }
            r = 65536 + (((i - 55296) << 10) | (r - 56320))
          } else i && (t -= 3) > -1 && o.push(239, 191, 189)
          if (((i = null), r < 128)) {
            if ((t -= 1) < 0) break
            o.push(r)
          } else if (r < 2048) {
            if ((t -= 2) < 0) break
            o.push((r >> 6) | 192, (63 & r) | 128)
          } else if (r < 65536) {
            if ((t -= 3) < 0) break
            o.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128)
          } else {
            if (!(r < 1114112)) throw new Error('Invalid code point')
            if ((t -= 4) < 0) break
            o.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            )
          }
        }
        return o
      }
      function F(e) {
        return n.toByteArray(
          (function (e) {
            if (
              (e = (function (e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '')
              })(e).replace(U, '')).length < 2
            )
              return ''
            for (; e.length % 4 != 0; ) e += '='
            return e
          })(e)
        )
      }
      function z(e, t, r, n) {
        for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i)
          t[i + r] = e[i]
        return i
      }
    }).call(this, r(0))
  },
  function (e, t, r) {
    ;((t = e.exports = r(18)).Stream = t),
      (t.Readable = t),
      (t.Writable = r(10)),
      (t.Duplex = r(3)),
      (t.Transform = r(21)),
      (t.PassThrough = r(46))
  },
  function (e, t, r) {
    ;(function (e) {
      function r(e) {
        return Object.prototype.toString.call(e)
      }
      ;(t.isArray = function (e) {
        return Array.isArray ? Array.isArray(e) : '[object Array]' === r(e)
      }),
        (t.isBoolean = function (e) {
          return 'boolean' == typeof e
        }),
        (t.isNull = function (e) {
          return null === e
        }),
        (t.isNullOrUndefined = function (e) {
          return null == e
        }),
        (t.isNumber = function (e) {
          return 'number' == typeof e
        }),
        (t.isString = function (e) {
          return 'string' == typeof e
        }),
        (t.isSymbol = function (e) {
          return 'symbol' == typeof e
        }),
        (t.isUndefined = function (e) {
          return void 0 === e
        }),
        (t.isRegExp = function (e) {
          return '[object RegExp]' === r(e)
        }),
        (t.isObject = function (e) {
          return 'object' == typeof e && null !== e
        }),
        (t.isDate = function (e) {
          return '[object Date]' === r(e)
        }),
        (t.isError = function (e) {
          return '[object Error]' === r(e) || e instanceof Error
        }),
        (t.isFunction = function (e) {
          return 'function' == typeof e
        }),
        (t.isPrimitive = function (e) {
          return (
            null === e ||
            'boolean' == typeof e ||
            'number' == typeof e ||
            'string' == typeof e ||
            'symbol' == typeof e ||
            void 0 === e
          )
        }),
        (t.isBuffer = e.isBuffer)
    }).call(this, r(4).Buffer)
  },
  function (e, t, r) {
    'use strict'
    ;(function (t) {
      void 0 === t ||
      !t.version ||
      0 === t.version.indexOf('v0.') ||
      (0 === t.version.indexOf('v1.') && 0 !== t.version.indexOf('v1.8.'))
        ? (e.exports = {
            nextTick: function (e, r, n, i) {
              if ('function' != typeof e)
                throw new TypeError('"callback" argument must be a function')
              var o,
                s,
                a = arguments.length
              switch (a) {
                case 0:
                case 1:
                  return t.nextTick(e)
                case 2:
                  return t.nextTick(function () {
                    e.call(null, r)
                  })
                case 3:
                  return t.nextTick(function () {
                    e.call(null, r, n)
                  })
                case 4:
                  return t.nextTick(function () {
                    e.call(null, r, n, i)
                  })
                default:
                  for (o = new Array(a - 1), s = 0; s < o.length; )
                    o[s++] = arguments[s]
                  return t.nextTick(function () {
                    e.apply(null, o)
                  })
              }
            },
          })
        : (e.exports = t)
    }).call(this, r(1))
  },
  function (e, t, r) {
    var n = r(4),
      i = n.Buffer
    function o(e, t) {
      for (var r in e) t[r] = e[r]
    }
    function s(e, t, r) {
      return i(e, t, r)
    }
    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
      ? (e.exports = n)
      : (o(n, t), (t.Buffer = s)),
      o(i, s),
      (s.from = function (e, t, r) {
        if ('number' == typeof e)
          throw new TypeError('Argument must not be a number')
        return i(e, t, r)
      }),
      (s.alloc = function (e, t, r) {
        if ('number' != typeof e)
          throw new TypeError('Argument must be a number')
        var n = i(e)
        return (
          void 0 !== t
            ? 'string' == typeof r
              ? n.fill(t, r)
              : n.fill(t)
            : n.fill(0),
          n
        )
      }),
      (s.allocUnsafe = function (e) {
        if ('number' != typeof e)
          throw new TypeError('Argument must be a number')
        return i(e)
      }),
      (s.allocUnsafeSlow = function (e) {
        if ('number' != typeof e)
          throw new TypeError('Argument must be a number')
        return n.SlowBuffer(e)
      })
  },
  function (e, t, r) {
    'use strict'
    var n,
      i = 'object' == typeof Reflect ? Reflect : null,
      o =
        i && 'function' == typeof i.apply
          ? i.apply
          : function (e, t, r) {
              return Function.prototype.apply.call(e, t, r)
            }
    n =
      i && 'function' == typeof i.ownKeys
        ? i.ownKeys
        : Object.getOwnPropertySymbols
        ? function (e) {
            return Object.getOwnPropertyNames(e).concat(
              Object.getOwnPropertySymbols(e)
            )
          }
        : function (e) {
            return Object.getOwnPropertyNames(e)
          }
    var s =
      Number.isNaN ||
      function (e) {
        return e != e
      }
    function a() {
      a.init.call(this)
    }
    ;(e.exports = a),
      (a.EventEmitter = a),
      (a.prototype._events = void 0),
      (a.prototype._eventsCount = 0),
      (a.prototype._maxListeners = void 0)
    var u = 10
    function f(e) {
      if ('function' != typeof e)
        throw new TypeError(
          'The "listener" argument must be of type Function. Received type ' +
            typeof e
        )
    }
    function c(e) {
      return void 0 === e._maxListeners
        ? a.defaultMaxListeners
        : e._maxListeners
    }
    function l(e, t, r, n) {
      var i, o, s, a
      if (
        (f(r),
        void 0 === (o = e._events)
          ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
          : (void 0 !== o.newListener &&
              (e.emit('newListener', t, r.listener ? r.listener : r),
              (o = e._events)),
            (s = o[t])),
        void 0 === s)
      )
        (s = o[t] = r), ++e._eventsCount
      else if (
        ('function' == typeof s
          ? (s = o[t] = n ? [r, s] : [s, r])
          : n
          ? s.unshift(r)
          : s.push(r),
        (i = c(e)) > 0 && s.length > i && !s.warned)
      ) {
        s.warned = !0
        var u = new Error(
          'Possible EventEmitter memory leak detected. ' +
            s.length +
            ' ' +
            String(t) +
            ' listeners added. Use emitter.setMaxListeners() to increase limit'
        )
        ;(u.name = 'MaxListenersExceededWarning'),
          (u.emitter = e),
          (u.type = t),
          (u.count = s.length),
          (a = u),
          console && console.warn && console.warn(a)
      }
      return e
    }
    function h() {
      if (!this.fired)
        return (
          this.target.removeListener(this.type, this.wrapFn),
          (this.fired = !0),
          0 === arguments.length
            ? this.listener.call(this.target)
            : this.listener.apply(this.target, arguments)
        )
    }
    function p(e, t, r) {
      var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: r },
        i = h.bind(n)
      return (i.listener = r), (n.wrapFn = i), i
    }
    function d(e, t, r) {
      var n = e._events
      if (void 0 === n) return []
      var i = n[t]
      return void 0 === i
        ? []
        : 'function' == typeof i
        ? r
          ? [i.listener || i]
          : [i]
        : r
        ? (function (e) {
            for (var t = new Array(e.length), r = 0; r < t.length; ++r)
              t[r] = e[r].listener || e[r]
            return t
          })(i)
        : g(i, i.length)
    }
    function y(e) {
      var t = this._events
      if (void 0 !== t) {
        var r = t[e]
        if ('function' == typeof r) return 1
        if (void 0 !== r) return r.length
      }
      return 0
    }
    function g(e, t) {
      for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n]
      return r
    }
    Object.defineProperty(a, 'defaultMaxListeners', {
      enumerable: !0,
      get: function () {
        return u
      },
      set: function (e) {
        if ('number' != typeof e || e < 0 || s(e))
          throw new RangeError(
            'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
              e +
              '.'
          )
        u = e
      },
    }),
      (a.init = function () {
        ;(void 0 !== this._events &&
          this._events !== Object.getPrototypeOf(this)._events) ||
          ((this._events = Object.create(null)), (this._eventsCount = 0)),
          (this._maxListeners = this._maxListeners || void 0)
      }),
      (a.prototype.setMaxListeners = function (e) {
        if ('number' != typeof e || e < 0 || s(e))
          throw new RangeError(
            'The value of "n" is out of range. It must be a non-negative number. Received ' +
              e +
              '.'
          )
        return (this._maxListeners = e), this
      }),
      (a.prototype.getMaxListeners = function () {
        return c(this)
      }),
      (a.prototype.emit = function (e) {
        for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r])
        var n = 'error' === e,
          i = this._events
        if (void 0 !== i) n = n && void 0 === i.error
        else if (!n) return !1
        if (n) {
          var s
          if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s
          var a = new Error(
            'Unhandled error.' + (s ? ' (' + s.message + ')' : '')
          )
          throw ((a.context = s), a)
        }
        var u = i[e]
        if (void 0 === u) return !1
        if ('function' == typeof u) o(u, this, t)
        else {
          var f = u.length,
            c = g(u, f)
          for (r = 0; r < f; ++r) o(c[r], this, t)
        }
        return !0
      }),
      (a.prototype.addListener = function (e, t) {
        return l(this, e, t, !1)
      }),
      (a.prototype.on = a.prototype.addListener),
      (a.prototype.prependListener = function (e, t) {
        return l(this, e, t, !0)
      }),
      (a.prototype.once = function (e, t) {
        return f(t), this.on(e, p(this, e, t)), this
      }),
      (a.prototype.prependOnceListener = function (e, t) {
        return f(t), this.prependListener(e, p(this, e, t)), this
      }),
      (a.prototype.removeListener = function (e, t) {
        var r, n, i, o, s
        if ((f(t), void 0 === (n = this._events))) return this
        if (void 0 === (r = n[e])) return this
        if (r === t || r.listener === t)
          0 == --this._eventsCount
            ? (this._events = Object.create(null))
            : (delete n[e],
              n.removeListener &&
                this.emit('removeListener', e, r.listener || t))
        else if ('function' != typeof r) {
          for (i = -1, o = r.length - 1; o >= 0; o--)
            if (r[o] === t || r[o].listener === t) {
              ;(s = r[o].listener), (i = o)
              break
            }
          if (i < 0) return this
          0 === i
            ? r.shift()
            : (function (e, t) {
                for (; t + 1 < e.length; t++) e[t] = e[t + 1]
                e.pop()
              })(r, i),
            1 === r.length && (n[e] = r[0]),
            void 0 !== n.removeListener &&
              this.emit('removeListener', e, s || t)
        }
        return this
      }),
      (a.prototype.off = a.prototype.removeListener),
      (a.prototype.removeAllListeners = function (e) {
        var t, r, n
        if (void 0 === (r = this._events)) return this
        if (void 0 === r.removeListener)
          return (
            0 === arguments.length
              ? ((this._events = Object.create(null)), (this._eventsCount = 0))
              : void 0 !== r[e] &&
                (0 == --this._eventsCount
                  ? (this._events = Object.create(null))
                  : delete r[e]),
            this
          )
        if (0 === arguments.length) {
          var i,
            o = Object.keys(r)
          for (n = 0; n < o.length; ++n)
            'removeListener' !== (i = o[n]) && this.removeAllListeners(i)
          return (
            this.removeAllListeners('removeListener'),
            (this._events = Object.create(null)),
            (this._eventsCount = 0),
            this
          )
        }
        if ('function' == typeof (t = r[e])) this.removeListener(e, t)
        else if (void 0 !== t)
          for (n = t.length - 1; n >= 0; n--) this.removeListener(e, t[n])
        return this
      }),
      (a.prototype.listeners = function (e) {
        return d(this, e, !0)
      }),
      (a.prototype.rawListeners = function (e) {
        return d(this, e, !1)
      }),
      (a.listenerCount = function (e, t) {
        return 'function' == typeof e.listenerCount
          ? e.listenerCount(t)
          : y.call(e, t)
      }),
      (a.prototype.listenerCount = y),
      (a.prototype.eventNames = function () {
        return this._eventsCount > 0 ? n(this._events) : []
      })
  },
  function (e, t, r) {
    'use strict'
    ;(function (t, n, i) {
      var o = r(7)
      function s(e) {
        var t = this
        ;(this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (e, t, r) {
              var n = e.entry
              e.entry = null
              for (; n; ) {
                var i = n.callback
                t.pendingcb--, i(r), (n = n.next)
              }
              t.corkedRequestsFree
                ? (t.corkedRequestsFree.next = e)
                : (t.corkedRequestsFree = e)
            })(t, e)
          })
      }
      e.exports = m
      var a,
        u =
          !t.browser && ['v0.10', 'v0.9.'].indexOf(t.version.slice(0, 5)) > -1
            ? n
            : o.nextTick
      m.WritableState = v
      var f = Object.create(r(6))
      f.inherits = r(2)
      var c = { deprecate: r(45) },
        l = r(19),
        h = r(8).Buffer,
        p = i.Uint8Array || function () {}
      var d,
        y = r(20)
      function g() {}
      function v(e, t) {
        ;(a = a || r(3)), (e = e || {})
        var n = t instanceof a
        ;(this.objectMode = !!e.objectMode),
          n && (this.objectMode = this.objectMode || !!e.writableObjectMode)
        var i = e.highWaterMark,
          f = e.writableHighWaterMark,
          c = this.objectMode ? 16 : 16384
        ;(this.highWaterMark = i || 0 === i ? i : n && (f || 0 === f) ? f : c),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1)
        var l = !1 === e.decodeStrings
        ;(this.decodeStrings = !l),
          (this.defaultEncoding = e.defaultEncoding || 'utf8'),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            !(function (e, t) {
              var r = e._writableState,
                n = r.sync,
                i = r.writecb
              if (
                ((function (e) {
                  ;(e.writing = !1),
                    (e.writecb = null),
                    (e.length -= e.writelen),
                    (e.writelen = 0)
                })(r),
                t)
              )
                !(function (e, t, r, n, i) {
                  --t.pendingcb,
                    r
                      ? (o.nextTick(i, n),
                        o.nextTick(x, e, t),
                        (e._writableState.errorEmitted = !0),
                        e.emit('error', n))
                      : (i(n),
                        (e._writableState.errorEmitted = !0),
                        e.emit('error', n),
                        x(e, t))
                })(e, r, n, t, i)
              else {
                var s = S(r)
                s ||
                  r.corked ||
                  r.bufferProcessing ||
                  !r.bufferedRequest ||
                  _(e, r),
                  n ? u(w, e, r, s, i) : w(e, r, s, i)
              }
            })(t, e)
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new s(this))
      }
      function m(e) {
        if (((a = a || r(3)), !(d.call(m, this) || this instanceof a)))
          return new m(e)
        ;(this._writableState = new v(e, this)),
          (this.writable = !0),
          e &&
            ('function' == typeof e.write && (this._write = e.write),
            'function' == typeof e.writev && (this._writev = e.writev),
            'function' == typeof e.destroy && (this._destroy = e.destroy),
            'function' == typeof e.final && (this._final = e.final)),
          l.call(this)
      }
      function b(e, t, r, n, i, o, s) {
        ;(t.writelen = n),
          (t.writecb = s),
          (t.writing = !0),
          (t.sync = !0),
          r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
          (t.sync = !1)
      }
      function w(e, t, r, n) {
        r ||
          (function (e, t) {
            0 === t.length &&
              t.needDrain &&
              ((t.needDrain = !1), e.emit('drain'))
          })(e, t),
          t.pendingcb--,
          n(),
          x(e, t)
      }
      function _(e, t) {
        t.bufferProcessing = !0
        var r = t.bufferedRequest
        if (e._writev && r && r.next) {
          var n = t.bufferedRequestCount,
            i = new Array(n),
            o = t.corkedRequestsFree
          o.entry = r
          for (var a = 0, u = !0; r; )
            (i[a] = r), r.isBuf || (u = !1), (r = r.next), (a += 1)
          ;(i.allBuffers = u),
            b(e, t, !0, t.length, i, '', o.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            o.next
              ? ((t.corkedRequestsFree = o.next), (o.next = null))
              : (t.corkedRequestsFree = new s(t)),
            (t.bufferedRequestCount = 0)
        } else {
          for (; r; ) {
            var f = r.chunk,
              c = r.encoding,
              l = r.callback
            if (
              (b(e, t, !1, t.objectMode ? 1 : f.length, f, c, l),
              (r = r.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break
          }
          null === r && (t.lastBufferedRequest = null)
        }
        ;(t.bufferedRequest = r), (t.bufferProcessing = !1)
      }
      function S(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        )
      }
      function E(e, t) {
        e._final(function (r) {
          t.pendingcb--,
            r && e.emit('error', r),
            (t.prefinished = !0),
            e.emit('prefinish'),
            x(e, t)
        })
      }
      function x(e, t) {
        var r = S(t)
        return (
          r &&
            (!(function (e, t) {
              t.prefinished ||
                t.finalCalled ||
                ('function' == typeof e._final
                  ? (t.pendingcb++, (t.finalCalled = !0), o.nextTick(E, e, t))
                  : ((t.prefinished = !0), e.emit('prefinish')))
            })(e, t),
            0 === t.pendingcb && ((t.finished = !0), e.emit('finish'))),
          r
        )
      }
      f.inherits(m, l),
        (v.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next)
          return t
        }),
        (function () {
          try {
            Object.defineProperty(v.prototype, 'buffer', {
              get: c.deprecate(
                function () {
                  return this.getBuffer()
                },
                '_writableState.buffer is deprecated. Use _writableState.getBuffer instead.',
                'DEP0003'
              ),
            })
          } catch (e) {}
        })(),
        'function' == typeof Symbol &&
        Symbol.hasInstance &&
        'function' == typeof Function.prototype[Symbol.hasInstance]
          ? ((d = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(m, Symbol.hasInstance, {
              value: function (e) {
                return (
                  !!d.call(this, e) ||
                  (this === m && e && e._writableState instanceof v)
                )
              },
            }))
          : (d = function (e) {
              return e instanceof this
            }),
        (m.prototype.pipe = function () {
          this.emit('error', new Error('Cannot pipe, not readable'))
        }),
        (m.prototype.write = function (e, t, r) {
          var n,
            i = this._writableState,
            s = !1,
            a = !i.objectMode && ((n = e), h.isBuffer(n) || n instanceof p)
          return (
            a &&
              !h.isBuffer(e) &&
              (e = (function (e) {
                return h.from(e)
              })(e)),
            'function' == typeof t && ((r = t), (t = null)),
            a ? (t = 'buffer') : t || (t = i.defaultEncoding),
            'function' != typeof r && (r = g),
            i.ended
              ? (function (e, t) {
                  var r = new Error('write after end')
                  e.emit('error', r), o.nextTick(t, r)
                })(this, r)
              : (a ||
                  (function (e, t, r, n) {
                    var i = !0,
                      s = !1
                    return (
                      null === r
                        ? (s = new TypeError(
                            'May not write null values to stream'
                          ))
                        : 'string' == typeof r ||
                          void 0 === r ||
                          t.objectMode ||
                          (s = new TypeError(
                            'Invalid non-string/buffer chunk'
                          )),
                      s && (e.emit('error', s), o.nextTick(n, s), (i = !1)),
                      i
                    )
                  })(this, i, e, r)) &&
                (i.pendingcb++,
                (s = (function (e, t, r, n, i, o) {
                  if (!r) {
                    var s = (function (e, t, r) {
                      e.objectMode ||
                        !1 === e.decodeStrings ||
                        'string' != typeof t ||
                        (t = h.from(t, r))
                      return t
                    })(t, n, i)
                    n !== s && ((r = !0), (i = 'buffer'), (n = s))
                  }
                  var a = t.objectMode ? 1 : n.length
                  t.length += a
                  var u = t.length < t.highWaterMark
                  u || (t.needDrain = !0)
                  if (t.writing || t.corked) {
                    var f = t.lastBufferedRequest
                    ;(t.lastBufferedRequest = {
                      chunk: n,
                      encoding: i,
                      isBuf: r,
                      callback: o,
                      next: null,
                    }),
                      f
                        ? (f.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1)
                  } else b(e, t, !1, a, n, i, o)
                  return u
                })(this, i, a, e, t, r))),
            s
          )
        }),
        (m.prototype.cork = function () {
          this._writableState.corked++
        }),
        (m.prototype.uncork = function () {
          var e = this._writableState
          e.corked &&
            (e.corked--,
            e.writing ||
              e.corked ||
              e.finished ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              _(this, e))
        }),
        (m.prototype.setDefaultEncoding = function (e) {
          if (
            ('string' == typeof e && (e = e.toLowerCase()),
            !(
              [
                'hex',
                'utf8',
                'utf-8',
                'ascii',
                'binary',
                'base64',
                'ucs2',
                'ucs-2',
                'utf16le',
                'utf-16le',
                'raw',
              ].indexOf((e + '').toLowerCase()) > -1
            ))
          )
            throw new TypeError('Unknown encoding: ' + e)
          return (this._writableState.defaultEncoding = e), this
        }),
        Object.defineProperty(m.prototype, 'writableHighWaterMark', {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark
          },
        }),
        (m.prototype._write = function (e, t, r) {
          r(new Error('_write() is not implemented'))
        }),
        (m.prototype._writev = null),
        (m.prototype.end = function (e, t, r) {
          var n = this._writableState
          'function' == typeof e
            ? ((r = e), (e = null), (t = null))
            : 'function' == typeof t && ((r = t), (t = null)),
            null != e && this.write(e, t),
            n.corked && ((n.corked = 1), this.uncork()),
            n.ending ||
              n.finished ||
              (function (e, t, r) {
                ;(t.ending = !0),
                  x(e, t),
                  r && (t.finished ? o.nextTick(r) : e.once('finish', r))
                ;(t.ended = !0), (e.writable = !1)
              })(this, n, r)
        }),
        Object.defineProperty(m.prototype, 'destroyed', {
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            )
          },
          set: function (e) {
            this._writableState && (this._writableState.destroyed = e)
          },
        }),
        (m.prototype.destroy = y.destroy),
        (m.prototype._undestroy = y.undestroy),
        (m.prototype._destroy = function (e, t) {
          this.end(), t(e)
        })
    }).call(this, r(1), r(43).setImmediate, r(0))
  },
  function (e, t, r) {
    'use strict'
    var n = r(8).Buffer,
      i =
        n.isEncoding ||
        function (e) {
          switch ((e = '' + e) && e.toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
            case 'raw':
              return !0
            default:
              return !1
          }
        }
    function o(e) {
      var t
      switch (
        ((this.encoding = (function (e) {
          var t = (function (e) {
            if (!e) return 'utf8'
            for (var t; ; )
              switch (e) {
                case 'utf8':
                case 'utf-8':
                  return 'utf8'
                case 'ucs2':
                case 'ucs-2':
                case 'utf16le':
                case 'utf-16le':
                  return 'utf16le'
                case 'latin1':
                case 'binary':
                  return 'latin1'
                case 'base64':
                case 'ascii':
                case 'hex':
                  return e
                default:
                  if (t) return
                  ;(e = ('' + e).toLowerCase()), (t = !0)
              }
          })(e)
          if ('string' != typeof t && (n.isEncoding === i || !i(e)))
            throw new Error('Unknown encoding: ' + e)
          return t || e
        })(e)),
        this.encoding)
      ) {
        case 'utf16le':
          ;(this.text = u), (this.end = f), (t = 4)
          break
        case 'utf8':
          ;(this.fillLast = a), (t = 4)
          break
        case 'base64':
          ;(this.text = c), (this.end = l), (t = 3)
          break
        default:
          return (this.write = h), void (this.end = p)
      }
      ;(this.lastNeed = 0),
        (this.lastTotal = 0),
        (this.lastChar = n.allocUnsafe(t))
    }
    function s(e) {
      return e <= 127
        ? 0
        : e >> 5 == 6
        ? 2
        : e >> 4 == 14
        ? 3
        : e >> 3 == 30
        ? 4
        : e >> 6 == 2
        ? -1
        : -2
    }
    function a(e) {
      var t = this.lastTotal - this.lastNeed,
        r = (function (e, t, r) {
          if (128 != (192 & t[0])) return (e.lastNeed = 0), '�'
          if (e.lastNeed > 1 && t.length > 1) {
            if (128 != (192 & t[1])) return (e.lastNeed = 1), '�'
            if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
              return (e.lastNeed = 2), '�'
          }
        })(this, e)
      return void 0 !== r
        ? r
        : this.lastNeed <= e.length
        ? (e.copy(this.lastChar, t, 0, this.lastNeed),
          this.lastChar.toString(this.encoding, 0, this.lastTotal))
        : (e.copy(this.lastChar, t, 0, e.length),
          void (this.lastNeed -= e.length))
    }
    function u(e, t) {
      if ((e.length - t) % 2 == 0) {
        var r = e.toString('utf16le', t)
        if (r) {
          var n = r.charCodeAt(r.length - 1)
          if (n >= 55296 && n <= 56319)
            return (
              (this.lastNeed = 2),
              (this.lastTotal = 4),
              (this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1]),
              r.slice(0, -1)
            )
        }
        return r
      }
      return (
        (this.lastNeed = 1),
        (this.lastTotal = 2),
        (this.lastChar[0] = e[e.length - 1]),
        e.toString('utf16le', t, e.length - 1)
      )
    }
    function f(e) {
      var t = e && e.length ? this.write(e) : ''
      if (this.lastNeed) {
        var r = this.lastTotal - this.lastNeed
        return t + this.lastChar.toString('utf16le', 0, r)
      }
      return t
    }
    function c(e, t) {
      var r = (e.length - t) % 3
      return 0 === r
        ? e.toString('base64', t)
        : ((this.lastNeed = 3 - r),
          (this.lastTotal = 3),
          1 === r
            ? (this.lastChar[0] = e[e.length - 1])
            : ((this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1])),
          e.toString('base64', t, e.length - r))
    }
    function l(e) {
      var t = e && e.length ? this.write(e) : ''
      return this.lastNeed
        ? t + this.lastChar.toString('base64', 0, 3 - this.lastNeed)
        : t
    }
    function h(e) {
      return e.toString(this.encoding)
    }
    function p(e) {
      return e && e.length ? this.write(e) : ''
    }
    ;(t.StringDecoder = o),
      (o.prototype.write = function (e) {
        if (0 === e.length) return ''
        var t, r
        if (this.lastNeed) {
          if (void 0 === (t = this.fillLast(e))) return ''
          ;(r = this.lastNeed), (this.lastNeed = 0)
        } else r = 0
        return r < e.length
          ? t
            ? t + this.text(e, r)
            : this.text(e, r)
          : t || ''
      }),
      (o.prototype.end = function (e) {
        var t = e && e.length ? this.write(e) : ''
        return this.lastNeed ? t + '�' : t
      }),
      (o.prototype.text = function (e, t) {
        var r = (function (e, t, r) {
          var n = t.length - 1
          if (n < r) return 0
          var i = s(t[n])
          if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i
          if (--n < r || -2 === i) return 0
          if ((i = s(t[n])) >= 0) return i > 0 && (e.lastNeed = i - 2), i
          if (--n < r || -2 === i) return 0
          if ((i = s(t[n])) >= 0)
            return i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i
          return 0
        })(this, e, t)
        if (!this.lastNeed) return e.toString('utf8', t)
        this.lastTotal = r
        var n = e.length - (r - this.lastNeed)
        return e.copy(this.lastChar, 0, n), e.toString('utf8', t, n)
      }),
      (o.prototype.fillLast = function (e) {
        if (this.lastNeed <= e.length)
          return (
            e.copy(
              this.lastChar,
              this.lastTotal - this.lastNeed,
              0,
              this.lastNeed
            ),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)
          )
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
          (this.lastNeed -= e.length)
      })
  },
  function (e, t, r) {
    'use strict'
    ;(function (t) {
      var n = r(25)
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */ function i(e, t) {
        if (e === t) return 0
        for (
          var r = e.length, n = t.length, i = 0, o = Math.min(r, n);
          i < o;
          ++i
        )
          if (e[i] !== t[i]) {
            ;(r = e[i]), (n = t[i])
            break
          }
        return r < n ? -1 : n < r ? 1 : 0
      }
      function o(e) {
        return t.Buffer && 'function' == typeof t.Buffer.isBuffer
          ? t.Buffer.isBuffer(e)
          : !(null == e || !e._isBuffer)
      }
      var s = r(13),
        a = Object.prototype.hasOwnProperty,
        u = Array.prototype.slice,
        f = 'foo' === function () {}.name
      function c(e) {
        return Object.prototype.toString.call(e)
      }
      function l(e) {
        return (
          !o(e) &&
          'function' == typeof t.ArrayBuffer &&
          ('function' == typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : !!e &&
              (e instanceof DataView ||
                !!(e.buffer && e.buffer instanceof ArrayBuffer)))
        )
      }
      var h = (e.exports = m),
        p = /\s*function\s+([^\(\s]*)\s*/
      function d(e) {
        if (s.isFunction(e)) {
          if (f) return e.name
          var t = e.toString().match(p)
          return t && t[1]
        }
      }
      function y(e, t) {
        return 'string' == typeof e ? (e.length < t ? e : e.slice(0, t)) : e
      }
      function g(e) {
        if (f || !s.isFunction(e)) return s.inspect(e)
        var t = d(e)
        return '[Function' + (t ? ': ' + t : '') + ']'
      }
      function v(e, t, r, n, i) {
        throw new h.AssertionError({
          message: r,
          actual: e,
          expected: t,
          operator: n,
          stackStartFunction: i,
        })
      }
      function m(e, t) {
        e || v(e, !0, t, '==', h.ok)
      }
      function b(e, t, r, n) {
        if (e === t) return !0
        if (o(e) && o(t)) return 0 === i(e, t)
        if (s.isDate(e) && s.isDate(t)) return e.getTime() === t.getTime()
        if (s.isRegExp(e) && s.isRegExp(t))
          return (
            e.source === t.source &&
            e.global === t.global &&
            e.multiline === t.multiline &&
            e.lastIndex === t.lastIndex &&
            e.ignoreCase === t.ignoreCase
          )
        if (
          (null !== e && 'object' == typeof e) ||
          (null !== t && 'object' == typeof t)
        ) {
          if (
            l(e) &&
            l(t) &&
            c(e) === c(t) &&
            !(e instanceof Float32Array || e instanceof Float64Array)
          )
            return 0 === i(new Uint8Array(e.buffer), new Uint8Array(t.buffer))
          if (o(e) !== o(t)) return !1
          var a = (n = n || { actual: [], expected: [] }).actual.indexOf(e)
          return (
            (-1 !== a && a === n.expected.indexOf(t)) ||
            (n.actual.push(e),
            n.expected.push(t),
            (function (e, t, r, n) {
              if (null == e || null == t) return !1
              if (s.isPrimitive(e) || s.isPrimitive(t)) return e === t
              if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t))
                return !1
              var i = w(e),
                o = w(t)
              if ((i && !o) || (!i && o)) return !1
              if (i) return (e = u.call(e)), (t = u.call(t)), b(e, t, r)
              var a,
                f,
                c = E(e),
                l = E(t)
              if (c.length !== l.length) return !1
              for (c.sort(), l.sort(), f = c.length - 1; f >= 0; f--)
                if (c[f] !== l[f]) return !1
              for (f = c.length - 1; f >= 0; f--)
                if (((a = c[f]), !b(e[a], t[a], r, n))) return !1
              return !0
            })(e, t, r, n))
          )
        }
        return r ? e === t : e == t
      }
      function w(e) {
        return '[object Arguments]' == Object.prototype.toString.call(e)
      }
      function _(e, t) {
        if (!e || !t) return !1
        if ('[object RegExp]' == Object.prototype.toString.call(t))
          return t.test(e)
        try {
          if (e instanceof t) return !0
        } catch (e) {}
        return !Error.isPrototypeOf(t) && !0 === t.call({}, e)
      }
      function S(e, t, r, n) {
        var i
        if ('function' != typeof t)
          throw new TypeError('"block" argument must be a function')
        'string' == typeof r && ((n = r), (r = null)),
          (i = (function (e) {
            var t
            try {
              e()
            } catch (e) {
              t = e
            }
            return t
          })(t)),
          (n =
            (r && r.name ? ' (' + r.name + ').' : '.') + (n ? ' ' + n : '.')),
          e && !i && v(i, r, 'Missing expected exception' + n)
        var o = 'string' == typeof n,
          a = !e && i && !r
        if (
          (((!e && s.isError(i) && o && _(i, r)) || a) &&
            v(i, r, 'Got unwanted exception' + n),
          (e && i && r && !_(i, r)) || (!e && i))
        )
          throw i
      }
      ;(h.AssertionError = function (e) {
        ;(this.name = 'AssertionError'),
          (this.actual = e.actual),
          (this.expected = e.expected),
          (this.operator = e.operator),
          e.message
            ? ((this.message = e.message), (this.generatedMessage = !1))
            : ((this.message = (function (e) {
                return (
                  y(g(e.actual), 128) +
                  ' ' +
                  e.operator +
                  ' ' +
                  y(g(e.expected), 128)
                )
              })(this)),
              (this.generatedMessage = !0))
        var t = e.stackStartFunction || v
        if (Error.captureStackTrace) Error.captureStackTrace(this, t)
        else {
          var r = new Error()
          if (r.stack) {
            var n = r.stack,
              i = d(t),
              o = n.indexOf('\n' + i)
            if (o >= 0) {
              var s = n.indexOf('\n', o + 1)
              n = n.substring(s + 1)
            }
            this.stack = n
          }
        }
      }),
        s.inherits(h.AssertionError, Error),
        (h.fail = v),
        (h.ok = m),
        (h.equal = function (e, t, r) {
          e != t && v(e, t, r, '==', h.equal)
        }),
        (h.notEqual = function (e, t, r) {
          e == t && v(e, t, r, '!=', h.notEqual)
        }),
        (h.deepEqual = function (e, t, r) {
          b(e, t, !1) || v(e, t, r, 'deepEqual', h.deepEqual)
        }),
        (h.deepStrictEqual = function (e, t, r) {
          b(e, t, !0) || v(e, t, r, 'deepStrictEqual', h.deepStrictEqual)
        }),
        (h.notDeepEqual = function (e, t, r) {
          b(e, t, !1) && v(e, t, r, 'notDeepEqual', h.notDeepEqual)
        }),
        (h.notDeepStrictEqual = function e(t, r, n) {
          b(t, r, !0) && v(t, r, n, 'notDeepStrictEqual', e)
        }),
        (h.strictEqual = function (e, t, r) {
          e !== t && v(e, t, r, '===', h.strictEqual)
        }),
        (h.notStrictEqual = function (e, t, r) {
          e === t && v(e, t, r, '!==', h.notStrictEqual)
        }),
        (h.throws = function (e, t, r) {
          S(!0, e, t, r)
        }),
        (h.doesNotThrow = function (e, t, r) {
          S(!1, e, t, r)
        }),
        (h.ifError = function (e) {
          if (e) throw e
        }),
        (h.strict = n(
          function e(t, r) {
            t || v(t, !0, r, '==', e)
          },
          h,
          {
            equal: h.strictEqual,
            deepEqual: h.deepStrictEqual,
            notEqual: h.notStrictEqual,
            notDeepEqual: h.notDeepStrictEqual,
          }
        )),
        (h.strict.strict = h.strict)
      var E =
        Object.keys ||
        function (e) {
          var t = []
          for (var r in e) a.call(e, r) && t.push(r)
          return t
        }
    }).call(this, r(0))
  },
  function (e, t, r) {
    ;(function (e) {
      var n =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++)
              r[t[n]] = Object.getOwnPropertyDescriptor(e, t[n])
            return r
          },
        i = /%[sdj%]/g
      ;(t.format = function (e) {
        if (!v(e)) {
          for (var t = [], r = 0; r < arguments.length; r++)
            t.push(a(arguments[r]))
          return t.join(' ')
        }
        r = 1
        for (
          var n = arguments,
            o = n.length,
            s = String(e).replace(i, function (e) {
              if ('%%' === e) return '%'
              if (r >= o) return e
              switch (e) {
                case '%s':
                  return String(n[r++])
                case '%d':
                  return Number(n[r++])
                case '%j':
                  try {
                    return JSON.stringify(n[r++])
                  } catch (e) {
                    return '[Circular]'
                  }
                default:
                  return e
              }
            }),
            u = n[r];
          r < o;
          u = n[++r]
        )
          y(u) || !w(u) ? (s += ' ' + u) : (s += ' ' + a(u))
        return s
      }),
        (t.deprecate = function (r, n) {
          if (void 0 !== e && !0 === e.noDeprecation) return r
          if (void 0 === e)
            return function () {
              return t.deprecate(r, n).apply(this, arguments)
            }
          var i = !1
          return function () {
            if (!i) {
              if (e.throwDeprecation) throw new Error(n)
              e.traceDeprecation ? console.trace(n) : console.error(n), (i = !0)
            }
            return r.apply(this, arguments)
          }
        })
      var o,
        s = {}
      function a(e, r) {
        var n = { seen: [], stylize: f }
        return (
          arguments.length >= 3 && (n.depth = arguments[2]),
          arguments.length >= 4 && (n.colors = arguments[3]),
          d(r) ? (n.showHidden = r) : r && t._extend(n, r),
          m(n.showHidden) && (n.showHidden = !1),
          m(n.depth) && (n.depth = 2),
          m(n.colors) && (n.colors = !1),
          m(n.customInspect) && (n.customInspect = !0),
          n.colors && (n.stylize = u),
          c(n, e, n.depth)
        )
      }
      function u(e, t) {
        var r = a.styles[t]
        return r
          ? '�[' + a.colors[r][0] + 'm' + e + '�[' + a.colors[r][1] + 'm'
          : e
      }
      function f(e, t) {
        return e
      }
      function c(e, r, n) {
        if (
          e.customInspect &&
          r &&
          E(r.inspect) &&
          r.inspect !== t.inspect &&
          (!r.constructor || r.constructor.prototype !== r)
        ) {
          var i = r.inspect(n, e)
          return v(i) || (i = c(e, i, n)), i
        }
        var o = (function (e, t) {
          if (m(t)) return e.stylize('undefined', 'undefined')
          if (v(t)) {
            var r =
              "'" +
              JSON.stringify(t)
                .replace(/^"|"$/g, '')
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"') +
              "'"
            return e.stylize(r, 'string')
          }
          if (g(t)) return e.stylize('' + t, 'number')
          if (d(t)) return e.stylize('' + t, 'boolean')
          if (y(t)) return e.stylize('null', 'null')
        })(e, r)
        if (o) return o
        var s = Object.keys(r),
          a = (function (e) {
            var t = {}
            return (
              e.forEach(function (e, r) {
                t[e] = !0
              }),
              t
            )
          })(s)
        if (
          (e.showHidden && (s = Object.getOwnPropertyNames(r)),
          S(r) && (s.indexOf('message') >= 0 || s.indexOf('description') >= 0))
        )
          return l(r)
        if (0 === s.length) {
          if (E(r)) {
            var u = r.name ? ': ' + r.name : ''
            return e.stylize('[Function' + u + ']', 'special')
          }
          if (b(r))
            return e.stylize(RegExp.prototype.toString.call(r), 'regexp')
          if (_(r)) return e.stylize(Date.prototype.toString.call(r), 'date')
          if (S(r)) return l(r)
        }
        var f,
          w = '',
          x = !1,
          A = ['{', '}']
        ;(p(r) && ((x = !0), (A = ['[', ']'])), E(r)) &&
          (w = ' [Function' + (r.name ? ': ' + r.name : '') + ']')
        return (
          b(r) && (w = ' ' + RegExp.prototype.toString.call(r)),
          _(r) && (w = ' ' + Date.prototype.toUTCString.call(r)),
          S(r) && (w = ' ' + l(r)),
          0 !== s.length || (x && 0 != r.length)
            ? n < 0
              ? b(r)
                ? e.stylize(RegExp.prototype.toString.call(r), 'regexp')
                : e.stylize('[Object]', 'special')
              : (e.seen.push(r),
                (f = x
                  ? (function (e, t, r, n, i) {
                      for (var o = [], s = 0, a = t.length; s < a; ++s)
                        j(t, String(s))
                          ? o.push(h(e, t, r, n, String(s), !0))
                          : o.push('')
                      return (
                        i.forEach(function (i) {
                          i.match(/^\d+$/) || o.push(h(e, t, r, n, i, !0))
                        }),
                        o
                      )
                    })(e, r, n, a, s)
                  : s.map(function (t) {
                      return h(e, r, n, a, t, x)
                    })),
                e.seen.pop(),
                (function (e, t, r) {
                  if (
                    e.reduce(function (e, t) {
                      return (
                        t.indexOf('\n') >= 0 && 0,
                        e + t.replace(/\u001b\[\d\d?m/g, '').length + 1
                      )
                    }, 0) > 60
                  )
                    return (
                      r[0] +
                      ('' === t ? '' : t + '\n ') +
                      ' ' +
                      e.join(',\n  ') +
                      ' ' +
                      r[1]
                    )
                  return r[0] + t + ' ' + e.join(', ') + ' ' + r[1]
                })(f, w, A))
            : A[0] + w + A[1]
        )
      }
      function l(e) {
        return '[' + Error.prototype.toString.call(e) + ']'
      }
      function h(e, t, r, n, i, o) {
        var s, a, u
        if (
          ((u = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }).get
            ? (a = u.set
                ? e.stylize('[Getter/Setter]', 'special')
                : e.stylize('[Getter]', 'special'))
            : u.set && (a = e.stylize('[Setter]', 'special')),
          j(n, i) || (s = '[' + i + ']'),
          a ||
            (e.seen.indexOf(u.value) < 0
              ? (a = y(r) ? c(e, u.value, null) : c(e, u.value, r - 1)).indexOf(
                  '\n'
                ) > -1 &&
                (a = o
                  ? a
                      .split('\n')
                      .map(function (e) {
                        return '  ' + e
                      })
                      .join('\n')
                      .substr(2)
                  : '\n' +
                    a
                      .split('\n')
                      .map(function (e) {
                        return '   ' + e
                      })
                      .join('\n'))
              : (a = e.stylize('[Circular]', 'special'))),
          m(s))
        ) {
          if (o && i.match(/^\d+$/)) return a
          ;(s = JSON.stringify('' + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((s = s.substr(1, s.length - 2)), (s = e.stylize(s, 'name')))
            : ((s = s
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'")),
              (s = e.stylize(s, 'string')))
        }
        return s + ': ' + a
      }
      function p(e) {
        return Array.isArray(e)
      }
      function d(e) {
        return 'boolean' == typeof e
      }
      function y(e) {
        return null === e
      }
      function g(e) {
        return 'number' == typeof e
      }
      function v(e) {
        return 'string' == typeof e
      }
      function m(e) {
        return void 0 === e
      }
      function b(e) {
        return w(e) && '[object RegExp]' === x(e)
      }
      function w(e) {
        return 'object' == typeof e && null !== e
      }
      function _(e) {
        return w(e) && '[object Date]' === x(e)
      }
      function S(e) {
        return w(e) && ('[object Error]' === x(e) || e instanceof Error)
      }
      function E(e) {
        return 'function' == typeof e
      }
      function x(e) {
        return Object.prototype.toString.call(e)
      }
      function A(e) {
        return e < 10 ? '0' + e.toString(10) : e.toString(10)
      }
      ;(t.debuglog = function (r) {
        if (
          (m(o) && (o = e.env.NODE_DEBUG || ''), (r = r.toUpperCase()), !s[r])
        )
          if (new RegExp('\\b' + r + '\\b', 'i').test(o)) {
            var n = e.pid
            s[r] = function () {
              var e = t.format.apply(t, arguments)
              console.error('%s %d: %s', r, n, e)
            }
          } else s[r] = function () {}
        return s[r]
      }),
        (t.inspect = a),
        (a.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39],
        }),
        (a.styles = {
          special: 'cyan',
          number: 'yellow',
          boolean: 'yellow',
          undefined: 'grey',
          null: 'bold',
          string: 'green',
          date: 'magenta',
          regexp: 'red',
        }),
        (t.isArray = p),
        (t.isBoolean = d),
        (t.isNull = y),
        (t.isNullOrUndefined = function (e) {
          return null == e
        }),
        (t.isNumber = g),
        (t.isString = v),
        (t.isSymbol = function (e) {
          return 'symbol' == typeof e
        }),
        (t.isUndefined = m),
        (t.isRegExp = b),
        (t.isObject = w),
        (t.isDate = _),
        (t.isError = S),
        (t.isFunction = E),
        (t.isPrimitive = function (e) {
          return (
            null === e ||
            'boolean' == typeof e ||
            'number' == typeof e ||
            'string' == typeof e ||
            'symbol' == typeof e ||
            void 0 === e
          )
        }),
        (t.isBuffer = r(26))
      var O = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ]
      function T() {
        var e = new Date(),
          t = [A(e.getHours()), A(e.getMinutes()), A(e.getSeconds())].join(':')
        return [e.getDate(), O[e.getMonth()], t].join(' ')
      }
      function j(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
      }
      ;(t.log = function () {
        console.log('%s - %s', T(), t.format.apply(t, arguments))
      }),
        (t.inherits = r(27)),
        (t._extend = function (e, t) {
          if (!t || !w(t)) return e
          for (var r = Object.keys(t), n = r.length; n--; ) e[r[n]] = t[r[n]]
          return e
        })
      var R =
        'undefined' != typeof Symbol ? Symbol('util.promisify.custom') : void 0
      function k(e, t) {
        if (!e) {
          var r = new Error('Promise was rejected with a falsy value')
          ;(r.reason = e), (e = r)
        }
        return t(e)
      }
      ;(t.promisify = function (e) {
        if ('function' != typeof e)
          throw new TypeError(
            'The "original" argument must be of type Function'
          )
        if (R && e[R]) {
          var t
          if ('function' != typeof (t = e[R]))
            throw new TypeError(
              'The "util.promisify.custom" argument must be of type Function'
            )
          return (
            Object.defineProperty(t, R, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
            t
          )
        }
        function t() {
          for (
            var t,
              r,
              n = new Promise(function (e, n) {
                ;(t = e), (r = n)
              }),
              i = [],
              o = 0;
            o < arguments.length;
            o++
          )
            i.push(arguments[o])
          i.push(function (e, n) {
            e ? r(e) : t(n)
          })
          try {
            e.apply(this, i)
          } catch (e) {
            r(e)
          }
          return n
        }
        return (
          Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
          R &&
            Object.defineProperty(t, R, {
              value: t,
              enumerable: !1,
              writable: !1,
              configurable: !0,
            }),
          Object.defineProperties(t, n(e))
        )
      }),
        (t.promisify.custom = R),
        (t.callbackify = function (t) {
          if ('function' != typeof t)
            throw new TypeError(
              'The "original" argument must be of type Function'
            )
          function r() {
            for (var r = [], n = 0; n < arguments.length; n++)
              r.push(arguments[n])
            var i = r.pop()
            if ('function' != typeof i)
              throw new TypeError('The last argument must be of type Function')
            var o = this,
              s = function () {
                return i.apply(o, arguments)
              }
            t.apply(this, r).then(
              function (t) {
                e.nextTick(s, null, t)
              },
              function (t) {
                e.nextTick(k, t, s)
              }
            )
          }
          return (
            Object.setPrototypeOf(r, Object.getPrototypeOf(t)),
            Object.defineProperties(r, n(t)),
            r
          )
        })
    }).call(this, r(1))
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e.webpackPolyfill ||
          ((e.deprecate = function () {}),
          (e.paths = []),
          e.children || (e.children = []),
          Object.defineProperty(e, 'loaded', {
            enumerable: !0,
            get: function () {
              return e.l
            },
          }),
          Object.defineProperty(e, 'id', {
            enumerable: !0,
            get: function () {
              return e.i
            },
          }),
          (e.webpackPolyfill = 1)),
        e
      )
    }
  },
  function (e, t) {
    var r = {}.toString
    e.exports =
      Array.isArray ||
      function (e) {
        return '[object Array]' == r.call(e)
      }
  },
  function (e, t, r) {
    ;(function (e) {
      ;(t.fetch = a(e.fetch) && a(e.ReadableStream)),
        (t.writableStream = a(e.WritableStream)),
        (t.abortController = a(e.AbortController)),
        (t.blobConstructor = !1)
      try {
        new Blob([new ArrayBuffer(1)]), (t.blobConstructor = !0)
      } catch (e) {}
      var r
      function n() {
        if (void 0 !== r) return r
        if (e.XMLHttpRequest) {
          r = new e.XMLHttpRequest()
          try {
            r.open('GET', e.XDomainRequest ? '/' : 'https://example.com')
          } catch (e) {
            r = null
          }
        } else r = null
        return r
      }
      function i(e) {
        var t = n()
        if (!t) return !1
        try {
          return (t.responseType = e), t.responseType === e
        } catch (e) {}
        return !1
      }
      var o = void 0 !== e.ArrayBuffer,
        s = o && a(e.ArrayBuffer.prototype.slice)
      function a(e) {
        return 'function' == typeof e
      }
      ;(t.arraybuffer = t.fetch || (o && i('arraybuffer'))),
        (t.msstream = !t.fetch && s && i('ms-stream')),
        (t.mozchunkedarraybuffer =
          !t.fetch && o && i('moz-chunked-arraybuffer')),
        (t.overrideMimeType = t.fetch || (!!n() && a(n().overrideMimeType))),
        (t.vbArray = a(e.VBArray)),
        (r = null)
    }).call(this, r(0))
  },
  function (e, t, r) {
    ;(function (e, n, i) {
      var o = r(16),
        s = r(2),
        a = r(5),
        u = (t.readyStates = {
          UNSENT: 0,
          OPENED: 1,
          HEADERS_RECEIVED: 2,
          LOADING: 3,
          DONE: 4,
        }),
        f = (t.IncomingMessage = function (t, r, s, u) {
          var f = this
          if (
            (a.Readable.call(f),
            (f._mode = s),
            (f.headers = {}),
            (f.rawHeaders = []),
            (f.trailers = {}),
            (f.rawTrailers = []),
            f.on('end', function () {
              e.nextTick(function () {
                f.emit('close')
              })
            }),
            'fetch' === s)
          ) {
            if (
              ((f._fetchResponse = r),
              (f.url = r.url),
              (f.statusCode = r.status),
              (f.statusMessage = r.statusText),
              r.headers.forEach(function (e, t) {
                ;(f.headers[t.toLowerCase()] = e), f.rawHeaders.push(t, e)
              }),
              o.writableStream)
            ) {
              var c = new WritableStream({
                write: function (e) {
                  return new Promise(function (t, r) {
                    f._destroyed
                      ? r()
                      : f.push(new n(e))
                      ? t()
                      : (f._resumeFetch = t)
                  })
                },
                close: function () {
                  i.clearTimeout(u), f._destroyed || f.push(null)
                },
                abort: function (e) {
                  f._destroyed || f.emit('error', e)
                },
              })
              try {
                return void r.body.pipeTo(c).catch(function (e) {
                  i.clearTimeout(u), f._destroyed || f.emit('error', e)
                })
              } catch (e) {}
            }
            var l = r.body.getReader()
            !(function e() {
              l.read()
                .then(function (t) {
                  if (!f._destroyed) {
                    if (t.done) return i.clearTimeout(u), void f.push(null)
                    f.push(new n(t.value)), e()
                  }
                })
                .catch(function (e) {
                  i.clearTimeout(u), f._destroyed || f.emit('error', e)
                })
            })()
          } else {
            if (
              ((f._xhr = t),
              (f._pos = 0),
              (f.url = t.responseURL),
              (f.statusCode = t.status),
              (f.statusMessage = t.statusText),
              t
                .getAllResponseHeaders()
                .split(/\r?\n/)
                .forEach(function (e) {
                  var t = e.match(/^([^:]+):\s*(.*)/)
                  if (t) {
                    var r = t[1].toLowerCase()
                    'set-cookie' === r
                      ? (void 0 === f.headers[r] && (f.headers[r] = []),
                        f.headers[r].push(t[2]))
                      : void 0 !== f.headers[r]
                      ? (f.headers[r] += ', ' + t[2])
                      : (f.headers[r] = t[2]),
                      f.rawHeaders.push(t[1], t[2])
                  }
                }),
              (f._charset = 'x-user-defined'),
              !o.overrideMimeType)
            ) {
              var h = f.rawHeaders['mime-type']
              if (h) {
                var p = h.match(/;\s*charset=([^;])(;|$)/)
                p && (f._charset = p[1].toLowerCase())
              }
              f._charset || (f._charset = 'utf-8')
            }
          }
        })
      s(f, a.Readable),
        (f.prototype._read = function () {
          var e = this._resumeFetch
          e && ((this._resumeFetch = null), e())
        }),
        (f.prototype._onXHRProgress = function () {
          var e = this,
            t = e._xhr,
            r = null
          switch (e._mode) {
            case 'text:vbarray':
              if (t.readyState !== u.DONE) break
              try {
                r = new i.VBArray(t.responseBody).toArray()
              } catch (e) {}
              if (null !== r) {
                e.push(new n(r))
                break
              }
            case 'text':
              try {
                r = t.responseText
              } catch (t) {
                e._mode = 'text:vbarray'
                break
              }
              if (r.length > e._pos) {
                var o = r.substr(e._pos)
                if ('x-user-defined' === e._charset) {
                  for (var s = new n(o.length), a = 0; a < o.length; a++)
                    s[a] = 255 & o.charCodeAt(a)
                  e.push(s)
                } else e.push(o, e._charset)
                e._pos = r.length
              }
              break
            case 'arraybuffer':
              if (t.readyState !== u.DONE || !t.response) break
              ;(r = t.response), e.push(new n(new Uint8Array(r)))
              break
            case 'moz-chunked-arraybuffer':
              if (((r = t.response), t.readyState !== u.LOADING || !r)) break
              e.push(new n(new Uint8Array(r)))
              break
            case 'ms-stream':
              if (((r = t.response), t.readyState !== u.LOADING)) break
              var f = new i.MSStreamReader()
              ;(f.onprogress = function () {
                f.result.byteLength > e._pos &&
                  (e.push(new n(new Uint8Array(f.result.slice(e._pos)))),
                  (e._pos = f.result.byteLength))
              }),
                (f.onload = function () {
                  e.push(null)
                }),
                f.readAsArrayBuffer(r)
          }
          e._xhr.readyState === u.DONE &&
            'ms-stream' !== e._mode &&
            e.push(null)
        })
    }).call(this, r(1), r(4).Buffer, r(0))
  },
  function (e, t, r) {
    'use strict'
    ;(function (t, n) {
      var i = r(7)
      e.exports = b
      var o,
        s = r(15)
      b.ReadableState = m
      r(9).EventEmitter
      var a = function (e, t) {
          return e.listeners(t).length
        },
        u = r(19),
        f = r(8).Buffer,
        c = t.Uint8Array || function () {}
      var l = Object.create(r(6))
      l.inherits = r(2)
      var h = r(40),
        p = void 0
      p = h && h.debuglog ? h.debuglog('stream') : function () {}
      var d,
        y = r(41),
        g = r(20)
      l.inherits(b, u)
      var v = ['error', 'close', 'destroy', 'pause', 'resume']
      function m(e, t) {
        e = e || {}
        var n = t instanceof (o = o || r(3))
        ;(this.objectMode = !!e.objectMode),
          n && (this.objectMode = this.objectMode || !!e.readableObjectMode)
        var i = e.highWaterMark,
          s = e.readableHighWaterMark,
          a = this.objectMode ? 16 : 16384
        ;(this.highWaterMark = i || 0 === i ? i : n && (s || 0 === s) ? s : a),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.buffer = new y()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || 'utf8'),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (d || (d = r(11).StringDecoder),
            (this.decoder = new d(e.encoding)),
            (this.encoding = e.encoding))
      }
      function b(e) {
        if (((o = o || r(3)), !(this instanceof b))) return new b(e)
        ;(this._readableState = new m(e, this)),
          (this.readable = !0),
          e &&
            ('function' == typeof e.read && (this._read = e.read),
            'function' == typeof e.destroy && (this._destroy = e.destroy)),
          u.call(this)
      }
      function w(e, t, r, n, i) {
        var o,
          s = e._readableState
        null === t
          ? ((s.reading = !1),
            (function (e, t) {
              if (t.ended) return
              if (t.decoder) {
                var r = t.decoder.end()
                r &&
                  r.length &&
                  (t.buffer.push(r), (t.length += t.objectMode ? 1 : r.length))
              }
              ;(t.ended = !0), E(e)
            })(e, s))
          : (i ||
              (o = (function (e, t) {
                var r
                ;(n = t),
                  f.isBuffer(n) ||
                    n instanceof c ||
                    'string' == typeof t ||
                    void 0 === t ||
                    e.objectMode ||
                    (r = new TypeError('Invalid non-string/buffer chunk'))
                var n
                return r
              })(s, t)),
            o
              ? e.emit('error', o)
              : s.objectMode || (t && t.length > 0)
              ? ('string' == typeof t ||
                  s.objectMode ||
                  Object.getPrototypeOf(t) === f.prototype ||
                  (t = (function (e) {
                    return f.from(e)
                  })(t)),
                n
                  ? s.endEmitted
                    ? e.emit(
                        'error',
                        new Error('stream.unshift() after end event')
                      )
                    : _(e, s, t, !0)
                  : s.ended
                  ? e.emit('error', new Error('stream.push() after EOF'))
                  : ((s.reading = !1),
                    s.decoder && !r
                      ? ((t = s.decoder.write(t)),
                        s.objectMode || 0 !== t.length
                          ? _(e, s, t, !1)
                          : A(e, s))
                      : _(e, s, t, !1)))
              : n || (s.reading = !1))
        return (function (e) {
          return (
            !e.ended &&
            (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
          )
        })(s)
      }
      function _(e, t, r, n) {
        t.flowing && 0 === t.length && !t.sync
          ? (e.emit('data', r), e.read(0))
          : ((t.length += t.objectMode ? 1 : r.length),
            n ? t.buffer.unshift(r) : t.buffer.push(r),
            t.needReadable && E(e)),
          A(e, t)
      }
      Object.defineProperty(b.prototype, 'destroyed', {
        get: function () {
          return void 0 !== this._readableState && this._readableState.destroyed
        },
        set: function (e) {
          this._readableState && (this._readableState.destroyed = e)
        },
      }),
        (b.prototype.destroy = g.destroy),
        (b.prototype._undestroy = g.undestroy),
        (b.prototype._destroy = function (e, t) {
          this.push(null), t(e)
        }),
        (b.prototype.push = function (e, t) {
          var r,
            n = this._readableState
          return (
            n.objectMode
              ? (r = !0)
              : 'string' == typeof e &&
                ((t = t || n.defaultEncoding) !== n.encoding &&
                  ((e = f.from(e, t)), (t = '')),
                (r = !0)),
            w(this, e, t, !1, r)
          )
        }),
        (b.prototype.unshift = function (e) {
          return w(this, e, null, !0, !1)
        }),
        (b.prototype.isPaused = function () {
          return !1 === this._readableState.flowing
        }),
        (b.prototype.setEncoding = function (e) {
          return (
            d || (d = r(11).StringDecoder),
            (this._readableState.decoder = new d(e)),
            (this._readableState.encoding = e),
            this
          )
        })
      function S(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
          ? 1
          : e != e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (function (e) {
                return (
                  e >= 8388608
                    ? (e = 8388608)
                    : (e--,
                      (e |= e >>> 1),
                      (e |= e >>> 2),
                      (e |= e >>> 4),
                      (e |= e >>> 8),
                      (e |= e >>> 16),
                      e++),
                  e
                )
              })(e)),
            e <= t.length ? e : t.ended ? t.length : ((t.needReadable = !0), 0))
      }
      function E(e) {
        var t = e._readableState
        ;(t.needReadable = !1),
          t.emittedReadable ||
            (p('emitReadable', t.flowing),
            (t.emittedReadable = !0),
            t.sync ? i.nextTick(x, e) : x(e))
      }
      function x(e) {
        p('emit readable'), e.emit('readable'), R(e)
      }
      function A(e, t) {
        t.readingMore || ((t.readingMore = !0), i.nextTick(O, e, t))
      }
      function O(e, t) {
        for (
          var r = t.length;
          !t.reading &&
          !t.flowing &&
          !t.ended &&
          t.length < t.highWaterMark &&
          (p('maybeReadMore read 0'), e.read(0), r !== t.length);

        )
          r = t.length
        t.readingMore = !1
      }
      function T(e) {
        p('readable nexttick read 0'), e.read(0)
      }
      function j(e, t) {
        t.reading || (p('resume read 0'), e.read(0)),
          (t.resumeScheduled = !1),
          (t.awaitDrain = 0),
          e.emit('resume'),
          R(e),
          t.flowing && !t.reading && e.read(0)
      }
      function R(e) {
        var t = e._readableState
        for (p('flow', t.flowing); t.flowing && null !== e.read(); );
      }
      function k(e, t) {
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (r = t.buffer.shift())
              : !e || e >= t.length
              ? ((r = t.decoder
                  ? t.buffer.join('')
                  : 1 === t.buffer.length
                  ? t.buffer.head.data
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (r = (function (e, t, r) {
                  var n
                  e < t.head.data.length
                    ? ((n = t.head.data.slice(0, e)),
                      (t.head.data = t.head.data.slice(e)))
                    : (n =
                        e === t.head.data.length
                          ? t.shift()
                          : r
                          ? (function (e, t) {
                              var r = t.head,
                                n = 1,
                                i = r.data
                              e -= i.length
                              for (; (r = r.next); ) {
                                var o = r.data,
                                  s = e > o.length ? o.length : e
                                if (
                                  (s === o.length
                                    ? (i += o)
                                    : (i += o.slice(0, e)),
                                  0 === (e -= s))
                                ) {
                                  s === o.length
                                    ? (++n,
                                      r.next
                                        ? (t.head = r.next)
                                        : (t.head = t.tail = null))
                                    : ((t.head = r), (r.data = o.slice(s)))
                                  break
                                }
                                ++n
                              }
                              return (t.length -= n), i
                            })(e, t)
                          : (function (e, t) {
                              var r = f.allocUnsafe(e),
                                n = t.head,
                                i = 1
                              n.data.copy(r), (e -= n.data.length)
                              for (; (n = n.next); ) {
                                var o = n.data,
                                  s = e > o.length ? o.length : e
                                if (
                                  (o.copy(r, r.length - e, 0, s),
                                  0 === (e -= s))
                                ) {
                                  s === o.length
                                    ? (++i,
                                      n.next
                                        ? (t.head = n.next)
                                        : (t.head = t.tail = null))
                                    : ((t.head = n), (n.data = o.slice(s)))
                                  break
                                }
                                ++i
                              }
                              return (t.length -= i), r
                            })(e, t))
                  return n
                })(e, t.buffer, t.decoder)),
            r)
        var r
      }
      function C(e) {
        var t = e._readableState
        if (t.length > 0)
          throw new Error('"endReadable()" called on non-empty stream')
        t.endEmitted || ((t.ended = !0), i.nextTick(P, t, e))
      }
      function P(e, t) {
        e.endEmitted ||
          0 !== e.length ||
          ((e.endEmitted = !0), (t.readable = !1), t.emit('end'))
      }
      function M(e, t) {
        for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r
        return -1
      }
      ;(b.prototype.read = function (e) {
        p('read', e), (e = parseInt(e, 10))
        var t = this._readableState,
          r = e
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
        )
          return (
            p('read: emitReadable', t.length, t.ended),
            0 === t.length && t.ended ? C(this) : E(this),
            null
          )
        if (0 === (e = S(e, t)) && t.ended)
          return 0 === t.length && C(this), null
        var n,
          i = t.needReadable
        return (
          p('need readable', i),
          (0 === t.length || t.length - e < t.highWaterMark) &&
            p('length less than watermark', (i = !0)),
          t.ended || t.reading
            ? p('reading or ended', (i = !1))
            : i &&
              (p('do read'),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = S(r, t))),
          null === (n = e > 0 ? k(e, t) : null)
            ? ((t.needReadable = !0), (e = 0))
            : (t.length -= e),
          0 === t.length &&
            (t.ended || (t.needReadable = !0), r !== e && t.ended && C(this)),
          null !== n && this.emit('data', n),
          n
        )
      }),
        (b.prototype._read = function (e) {
          this.emit('error', new Error('_read() is not implemented'))
        }),
        (b.prototype.pipe = function (e, t) {
          var r = this,
            o = this._readableState
          switch (o.pipesCount) {
            case 0:
              o.pipes = e
              break
            case 1:
              o.pipes = [o.pipes, e]
              break
            default:
              o.pipes.push(e)
          }
          ;(o.pipesCount += 1), p('pipe count=%d opts=%j', o.pipesCount, t)
          var u =
            (!t || !1 !== t.end) && e !== n.stdout && e !== n.stderr ? c : b
          function f(t, n) {
            p('onunpipe'),
              t === r &&
                n &&
                !1 === n.hasUnpiped &&
                ((n.hasUnpiped = !0),
                p('cleanup'),
                e.removeListener('close', v),
                e.removeListener('finish', m),
                e.removeListener('drain', l),
                e.removeListener('error', g),
                e.removeListener('unpipe', f),
                r.removeListener('end', c),
                r.removeListener('end', b),
                r.removeListener('data', y),
                (h = !0),
                !o.awaitDrain ||
                  (e._writableState && !e._writableState.needDrain) ||
                  l())
          }
          function c() {
            p('onend'), e.end()
          }
          o.endEmitted ? i.nextTick(u) : r.once('end', u), e.on('unpipe', f)
          var l = (function (e) {
            return function () {
              var t = e._readableState
              p('pipeOnDrain', t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && a(e, 'data') && ((t.flowing = !0), R(e))
            }
          })(r)
          e.on('drain', l)
          var h = !1
          var d = !1
          function y(t) {
            p('ondata'),
              (d = !1),
              !1 !== e.write(t) ||
                d ||
                (((1 === o.pipesCount && o.pipes === e) ||
                  (o.pipesCount > 1 && -1 !== M(o.pipes, e))) &&
                  !h &&
                  (p(
                    'false write response, pause',
                    r._readableState.awaitDrain
                  ),
                  r._readableState.awaitDrain++,
                  (d = !0)),
                r.pause())
          }
          function g(t) {
            p('onerror', t),
              b(),
              e.removeListener('error', g),
              0 === a(e, 'error') && e.emit('error', t)
          }
          function v() {
            e.removeListener('finish', m), b()
          }
          function m() {
            p('onfinish'), e.removeListener('close', v), b()
          }
          function b() {
            p('unpipe'), r.unpipe(e)
          }
          return (
            r.on('data', y),
            (function (e, t, r) {
              if ('function' == typeof e.prependListener)
                return e.prependListener(t, r)
              e._events && e._events[t]
                ? s(e._events[t])
                  ? e._events[t].unshift(r)
                  : (e._events[t] = [r, e._events[t]])
                : e.on(t, r)
            })(e, 'error', g),
            e.once('close', v),
            e.once('finish', m),
            e.emit('pipe', r),
            o.flowing || (p('pipe resume'), r.resume()),
            e
          )
        }),
        (b.prototype.unpipe = function (e) {
          var t = this._readableState,
            r = { hasUnpiped: !1 }
          if (0 === t.pipesCount) return this
          if (1 === t.pipesCount)
            return (
              (e && e !== t.pipes) ||
                (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit('unpipe', this, r)),
              this
            )
          if (!e) {
            var n = t.pipes,
              i = t.pipesCount
            ;(t.pipes = null), (t.pipesCount = 0), (t.flowing = !1)
            for (var o = 0; o < i; o++) n[o].emit('unpipe', this, r)
            return this
          }
          var s = M(t.pipes, e)
          return (
            -1 === s ||
              (t.pipes.splice(s, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit('unpipe', this, r)),
            this
          )
        }),
        (b.prototype.on = function (e, t) {
          var r = u.prototype.on.call(this, e, t)
          if ('data' === e) !1 !== this._readableState.flowing && this.resume()
          else if ('readable' === e) {
            var n = this._readableState
            n.endEmitted ||
              n.readableListening ||
              ((n.readableListening = n.needReadable = !0),
              (n.emittedReadable = !1),
              n.reading ? n.length && E(this) : i.nextTick(T, this))
          }
          return r
        }),
        (b.prototype.addListener = b.prototype.on),
        (b.prototype.resume = function () {
          var e = this._readableState
          return (
            e.flowing ||
              (p('resume'),
              (e.flowing = !0),
              (function (e, t) {
                t.resumeScheduled ||
                  ((t.resumeScheduled = !0), i.nextTick(j, e, t))
              })(this, e)),
            this
          )
        }),
        (b.prototype.pause = function () {
          return (
            p('call pause flowing=%j', this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (p('pause'),
              (this._readableState.flowing = !1),
              this.emit('pause')),
            this
          )
        }),
        (b.prototype.wrap = function (e) {
          var t = this,
            r = this._readableState,
            n = !1
          for (var i in (e.on('end', function () {
            if ((p('wrapped end'), r.decoder && !r.ended)) {
              var e = r.decoder.end()
              e && e.length && t.push(e)
            }
            t.push(null)
          }),
          e.on('data', function (i) {
            ;(p('wrapped data'),
            r.decoder && (i = r.decoder.write(i)),
            r.objectMode && null == i) ||
              ((r.objectMode || (i && i.length)) &&
                (t.push(i) || ((n = !0), e.pause())))
          }),
          e))
            void 0 === this[i] &&
              'function' == typeof e[i] &&
              (this[i] = (function (t) {
                return function () {
                  return e[t].apply(e, arguments)
                }
              })(i))
          for (var o = 0; o < v.length; o++)
            e.on(v[o], this.emit.bind(this, v[o]))
          return (
            (this._read = function (t) {
              p('wrapped _read', t), n && ((n = !1), e.resume())
            }),
            this
          )
        }),
        Object.defineProperty(b.prototype, 'readableHighWaterMark', {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark
          },
        }),
        (b._fromList = k)
    }).call(this, r(0), r(1))
  },
  function (e, t, r) {
    e.exports = r(9).EventEmitter
  },
  function (e, t, r) {
    'use strict'
    var n = r(7)
    function i(e, t) {
      e.emit('error', t)
    }
    e.exports = {
      destroy: function (e, t) {
        var r = this,
          o = this._readableState && this._readableState.destroyed,
          s = this._writableState && this._writableState.destroyed
        return o || s
          ? (t
              ? t(e)
              : !e ||
                (this._writableState && this._writableState.errorEmitted) ||
                n.nextTick(i, this, e),
            this)
          : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(e || null, function (e) {
              !t && e
                ? (n.nextTick(i, r, e),
                  r._writableState && (r._writableState.errorEmitted = !0))
                : t && t(e)
            }),
            this)
      },
      undestroy: function () {
        this._readableState &&
          ((this._readableState.destroyed = !1),
          (this._readableState.reading = !1),
          (this._readableState.ended = !1),
          (this._readableState.endEmitted = !1)),
          this._writableState &&
            ((this._writableState.destroyed = !1),
            (this._writableState.ended = !1),
            (this._writableState.ending = !1),
            (this._writableState.finished = !1),
            (this._writableState.errorEmitted = !1))
      },
    }
  },
  function (e, t, r) {
    'use strict'
    e.exports = s
    var n = r(3),
      i = Object.create(r(6))
    function o(e, t) {
      var r = this._transformState
      r.transforming = !1
      var n = r.writecb
      if (!n)
        return this.emit(
          'error',
          new Error('write callback called multiple times')
        )
      ;(r.writechunk = null),
        (r.writecb = null),
        null != t && this.push(t),
        n(e)
      var i = this._readableState
      ;(i.reading = !1),
        (i.needReadable || i.length < i.highWaterMark) &&
          this._read(i.highWaterMark)
    }
    function s(e) {
      if (!(this instanceof s)) return new s(e)
      n.call(this, e),
        (this._transformState = {
          afterTransform: o.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null,
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        e &&
          ('function' == typeof e.transform && (this._transform = e.transform),
          'function' == typeof e.flush && (this._flush = e.flush)),
        this.on('prefinish', a)
    }
    function a() {
      var e = this
      'function' == typeof this._flush
        ? this._flush(function (t, r) {
            u(e, t, r)
          })
        : u(this, null, null)
    }
    function u(e, t, r) {
      if (t) return e.emit('error', t)
      if ((null != r && e.push(r), e._writableState.length))
        throw new Error('Calling transform done when ws.length != 0')
      if (e._transformState.transforming)
        throw new Error('Calling transform done when still transforming')
      return e.push(null)
    }
    ;(i.inherits = r(2)),
      i.inherits(s, n),
      (s.prototype.push = function (e, t) {
        return (
          (this._transformState.needTransform = !1),
          n.prototype.push.call(this, e, t)
        )
      }),
      (s.prototype._transform = function (e, t, r) {
        throw new Error('_transform() is not implemented')
      }),
      (s.prototype._write = function (e, t, r) {
        var n = this._transformState
        if (
          ((n.writecb = r),
          (n.writechunk = e),
          (n.writeencoding = t),
          !n.transforming)
        ) {
          var i = this._readableState
          ;(n.needTransform || i.needReadable || i.length < i.highWaterMark) &&
            this._read(i.highWaterMark)
        }
      }),
      (s.prototype._read = function (e) {
        var t = this._transformState
        null !== t.writechunk && t.writecb && !t.transforming
          ? ((t.transforming = !0),
            this._transform(t.writechunk, t.writeencoding, t.afterTransform))
          : (t.needTransform = !0)
      }),
      (s.prototype._destroy = function (e, t) {
        var r = this
        n.prototype._destroy.call(this, e, function (e) {
          t(e), r.emit('close')
        })
      })
  },
  function (e, t, r) {
    'use strict'
    var n = r(50),
      i = r(51)
    function o() {
      ;(this.protocol = null),
        (this.slashes = null),
        (this.auth = null),
        (this.host = null),
        (this.port = null),
        (this.hostname = null),
        (this.hash = null),
        (this.search = null),
        (this.query = null),
        (this.pathname = null),
        (this.path = null),
        (this.href = null)
    }
    ;(t.parse = b),
      (t.resolve = function (e, t) {
        return b(e, !1, !0).resolve(t)
      }),
      (t.resolveObject = function (e, t) {
        return e ? b(e, !1, !0).resolveObject(t) : t
      }),
      (t.format = function (e) {
        i.isString(e) && (e = b(e))
        return e instanceof o ? e.format() : o.prototype.format.call(e)
      }),
      (t.Url = o)
    var s = /^([a-z0-9.+-]+:)/i,
      a = /:[0-9]*$/,
      u = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
      f = ['{', '}', '|', '\\', '^', '`'].concat([
        '<',
        '>',
        '"',
        '`',
        ' ',
        '\r',
        '\n',
        '\t',
      ]),
      c = ["'"].concat(f),
      l = ['%', '/', '?', ';', '#'].concat(c),
      h = ['/', '?', '#'],
      p = /^[+a-z0-9A-Z_-]{0,63}$/,
      d = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
      y = { javascript: !0, 'javascript:': !0 },
      g = { javascript: !0, 'javascript:': !0 },
      v = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        'http:': !0,
        'https:': !0,
        'ftp:': !0,
        'gopher:': !0,
        'file:': !0,
      },
      m = r(52)
    function b(e, t, r) {
      if (e && i.isObject(e) && e instanceof o) return e
      var n = new o()
      return n.parse(e, t, r), n
    }
    ;(o.prototype.parse = function (e, t, r) {
      if (!i.isString(e))
        throw new TypeError("Parameter 'url' must be a string, not " + typeof e)
      var o = e.indexOf('?'),
        a = -1 !== o && o < e.indexOf('#') ? '?' : '#',
        f = e.split(a)
      f[0] = f[0].replace(/\\/g, '/')
      var b = (e = f.join(a))
      if (((b = b.trim()), !r && 1 === e.split('#').length)) {
        var w = u.exec(b)
        if (w)
          return (
            (this.path = b),
            (this.href = b),
            (this.pathname = w[1]),
            w[2]
              ? ((this.search = w[2]),
                (this.query = t
                  ? m.parse(this.search.substr(1))
                  : this.search.substr(1)))
              : t && ((this.search = ''), (this.query = {})),
            this
          )
      }
      var _ = s.exec(b)
      if (_) {
        var S = (_ = _[0]).toLowerCase()
        ;(this.protocol = S), (b = b.substr(_.length))
      }
      if (r || _ || b.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var E = '//' === b.substr(0, 2)
        !E || (_ && g[_]) || ((b = b.substr(2)), (this.slashes = !0))
      }
      if (!g[_] && (E || (_ && !v[_]))) {
        for (var x, A, O = -1, T = 0; T < h.length; T++) {
          ;-1 !== (j = b.indexOf(h[T])) && (-1 === O || j < O) && (O = j)
        }
        ;-1 !== (A = -1 === O ? b.lastIndexOf('@') : b.lastIndexOf('@', O)) &&
          ((x = b.slice(0, A)),
          (b = b.slice(A + 1)),
          (this.auth = decodeURIComponent(x))),
          (O = -1)
        for (T = 0; T < l.length; T++) {
          var j
          ;-1 !== (j = b.indexOf(l[T])) && (-1 === O || j < O) && (O = j)
        }
        ;-1 === O && (O = b.length),
          (this.host = b.slice(0, O)),
          (b = b.slice(O)),
          this.parseHost(),
          (this.hostname = this.hostname || '')
        var R =
          '[' === this.hostname[0] &&
          ']' === this.hostname[this.hostname.length - 1]
        if (!R)
          for (
            var k = this.hostname.split(/\./), C = ((T = 0), k.length);
            T < C;
            T++
          ) {
            var P = k[T]
            if (P && !P.match(p)) {
              for (var M = '', B = 0, L = P.length; B < L; B++)
                P.charCodeAt(B) > 127 ? (M += 'x') : (M += P[B])
              if (!M.match(p)) {
                var I = k.slice(0, T),
                  N = k.slice(T + 1),
                  U = P.match(d)
                U && (I.push(U[1]), N.unshift(U[2])),
                  N.length && (b = '/' + N.join('.') + b),
                  (this.hostname = I.join('.'))
                break
              }
            }
          }
        this.hostname.length > 255
          ? (this.hostname = '')
          : (this.hostname = this.hostname.toLowerCase()),
          R || (this.hostname = n.toASCII(this.hostname))
        var q = this.port ? ':' + this.port : '',
          D = this.hostname || ''
        ;(this.host = D + q),
          (this.href += this.host),
          R &&
            ((this.hostname = this.hostname.substr(
              1,
              this.hostname.length - 2
            )),
            '/' !== b[0] && (b = '/' + b))
      }
      if (!y[S])
        for (T = 0, C = c.length; T < C; T++) {
          var F = c[T]
          if (-1 !== b.indexOf(F)) {
            var z = encodeURIComponent(F)
            z === F && (z = escape(F)), (b = b.split(F).join(z))
          }
        }
      var H = b.indexOf('#')
      ;-1 !== H && ((this.hash = b.substr(H)), (b = b.slice(0, H)))
      var Y = b.indexOf('?')
      if (
        (-1 !== Y
          ? ((this.search = b.substr(Y)),
            (this.query = b.substr(Y + 1)),
            t && (this.query = m.parse(this.query)),
            (b = b.slice(0, Y)))
          : t && ((this.search = ''), (this.query = {})),
        b && (this.pathname = b),
        v[S] && this.hostname && !this.pathname && (this.pathname = '/'),
        this.pathname || this.search)
      ) {
        q = this.pathname || ''
        var W = this.search || ''
        this.path = q + W
      }
      return (this.href = this.format()), this
    }),
      (o.prototype.format = function () {
        var e = this.auth || ''
        e &&
          ((e = (e = encodeURIComponent(e)).replace(/%3A/i, ':')), (e += '@'))
        var t = this.protocol || '',
          r = this.pathname || '',
          n = this.hash || '',
          o = !1,
          s = ''
        this.host
          ? (o = e + this.host)
          : this.hostname &&
            ((o =
              e +
              (-1 === this.hostname.indexOf(':')
                ? this.hostname
                : '[' + this.hostname + ']')),
            this.port && (o += ':' + this.port)),
          this.query &&
            i.isObject(this.query) &&
            Object.keys(this.query).length &&
            (s = m.stringify(this.query))
        var a = this.search || (s && '?' + s) || ''
        return (
          t && ':' !== t.substr(-1) && (t += ':'),
          this.slashes || ((!t || v[t]) && !1 !== o)
            ? ((o = '//' + (o || '')),
              r && '/' !== r.charAt(0) && (r = '/' + r))
            : o || (o = ''),
          n && '#' !== n.charAt(0) && (n = '#' + n),
          a && '?' !== a.charAt(0) && (a = '?' + a),
          t +
            o +
            (r = r.replace(/[?#]/g, function (e) {
              return encodeURIComponent(e)
            })) +
            (a = a.replace('#', '%23')) +
            n
        )
      }),
      (o.prototype.resolve = function (e) {
        return this.resolveObject(b(e, !1, !0)).format()
      }),
      (o.prototype.resolveObject = function (e) {
        if (i.isString(e)) {
          var t = new o()
          t.parse(e, !1, !0), (e = t)
        }
        for (var r = new o(), n = Object.keys(this), s = 0; s < n.length; s++) {
          var a = n[s]
          r[a] = this[a]
        }
        if (((r.hash = e.hash), '' === e.href)) return (r.href = r.format()), r
        if (e.slashes && !e.protocol) {
          for (var u = Object.keys(e), f = 0; f < u.length; f++) {
            var c = u[f]
            'protocol' !== c && (r[c] = e[c])
          }
          return (
            v[r.protocol] &&
              r.hostname &&
              !r.pathname &&
              (r.path = r.pathname = '/'),
            (r.href = r.format()),
            r
          )
        }
        if (e.protocol && e.protocol !== r.protocol) {
          if (!v[e.protocol]) {
            for (var l = Object.keys(e), h = 0; h < l.length; h++) {
              var p = l[h]
              r[p] = e[p]
            }
            return (r.href = r.format()), r
          }
          if (((r.protocol = e.protocol), e.host || g[e.protocol]))
            r.pathname = e.pathname
          else {
            for (
              var d = (e.pathname || '').split('/');
              d.length && !(e.host = d.shift());

            );
            e.host || (e.host = ''),
              e.hostname || (e.hostname = ''),
              '' !== d[0] && d.unshift(''),
              d.length < 2 && d.unshift(''),
              (r.pathname = d.join('/'))
          }
          if (
            ((r.search = e.search),
            (r.query = e.query),
            (r.host = e.host || ''),
            (r.auth = e.auth),
            (r.hostname = e.hostname || e.host),
            (r.port = e.port),
            r.pathname || r.search)
          ) {
            var y = r.pathname || '',
              m = r.search || ''
            r.path = y + m
          }
          return (r.slashes = r.slashes || e.slashes), (r.href = r.format()), r
        }
        var b = r.pathname && '/' === r.pathname.charAt(0),
          w = e.host || (e.pathname && '/' === e.pathname.charAt(0)),
          _ = w || b || (r.host && e.pathname),
          S = _,
          E = (r.pathname && r.pathname.split('/')) || [],
          x =
            ((d = (e.pathname && e.pathname.split('/')) || []),
            r.protocol && !v[r.protocol])
        if (
          (x &&
            ((r.hostname = ''),
            (r.port = null),
            r.host && ('' === E[0] ? (E[0] = r.host) : E.unshift(r.host)),
            (r.host = ''),
            e.protocol &&
              ((e.hostname = null),
              (e.port = null),
              e.host && ('' === d[0] ? (d[0] = e.host) : d.unshift(e.host)),
              (e.host = null)),
            (_ = _ && ('' === d[0] || '' === E[0]))),
          w)
        )
          (r.host = e.host || '' === e.host ? e.host : r.host),
            (r.hostname =
              e.hostname || '' === e.hostname ? e.hostname : r.hostname),
            (r.search = e.search),
            (r.query = e.query),
            (E = d)
        else if (d.length)
          E || (E = []),
            E.pop(),
            (E = E.concat(d)),
            (r.search = e.search),
            (r.query = e.query)
        else if (!i.isNullOrUndefined(e.search)) {
          if (x)
            (r.hostname = r.host = E.shift()),
              (R =
                !!(r.host && r.host.indexOf('@') > 0) && r.host.split('@')) &&
                ((r.auth = R.shift()), (r.host = r.hostname = R.shift()))
          return (
            (r.search = e.search),
            (r.query = e.query),
            (i.isNull(r.pathname) && i.isNull(r.search)) ||
              (r.path =
                (r.pathname ? r.pathname : '') + (r.search ? r.search : '')),
            (r.href = r.format()),
            r
          )
        }
        if (!E.length)
          return (
            (r.pathname = null),
            r.search ? (r.path = '/' + r.search) : (r.path = null),
            (r.href = r.format()),
            r
          )
        for (
          var A = E.slice(-1)[0],
            O =
              ((r.host || e.host || E.length > 1) &&
                ('.' === A || '..' === A)) ||
              '' === A,
            T = 0,
            j = E.length;
          j >= 0;
          j--
        )
          '.' === (A = E[j])
            ? E.splice(j, 1)
            : '..' === A
            ? (E.splice(j, 1), T++)
            : T && (E.splice(j, 1), T--)
        if (!_ && !S) for (; T--; T) E.unshift('..')
        !_ || '' === E[0] || (E[0] && '/' === E[0].charAt(0)) || E.unshift(''),
          O && '/' !== E.join('/').substr(-1) && E.push('')
        var R,
          k = '' === E[0] || (E[0] && '/' === E[0].charAt(0))
        x &&
          ((r.hostname = r.host = k ? '' : E.length ? E.shift() : ''),
          (R = !!(r.host && r.host.indexOf('@') > 0) && r.host.split('@')) &&
            ((r.auth = R.shift()), (r.host = r.hostname = R.shift())))
        return (
          (_ = _ || (r.host && E.length)) && !k && E.unshift(''),
          E.length
            ? (r.pathname = E.join('/'))
            : ((r.pathname = null), (r.path = null)),
          (i.isNull(r.pathname) && i.isNull(r.search)) ||
            (r.path =
              (r.pathname ? r.pathname : '') + (r.search ? r.search : '')),
          (r.auth = e.auth || r.auth),
          (r.slashes = r.slashes || e.slashes),
          (r.href = r.format()),
          r
        )
      }),
      (o.prototype.parseHost = function () {
        var e = this.host,
          t = a.exec(e)
        t &&
          (':' !== (t = t[0]) && (this.port = t.substr(1)),
          (e = e.substr(0, e.length - t.length))),
          e && (this.hostname = e)
      })
  },
  function (e, t, r) {
    var n = r(12),
      i = r(28),
      o = r(32),
      s = r(35),
      a = r(55),
      u = r(61)
    e.exports = function e(t) {
      var r
      r =
        '_solidity_version' in t
          ? t.cwrap('solidity_version', 'string', [])
          : t.cwrap('version', 'string', [])
      var f,
        c,
        l,
        h = function () {
          return i.versionToSemver(r())
        },
        p = u.gt(h(), '0.5.99')
      ;(f =
        '_solidity_license' in t
          ? t.cwrap('solidity_license', 'string', [])
          : '_license' in t
          ? t.cwrap('license', 'string', [])
          : function () {}),
        '_solidity_alloc' in t
          ? (c = t.cwrap('solidity_alloc', 'number', ['number']))
          : ((c = t._malloc), n(c, 'Expected malloc to be present.')),
        '_solidity_reset' in t && (l = t.cwrap('solidity_reset', null, []))
      var d = function (e, r) {
          var n = t.lengthBytesUTF8(e),
            i = c(n + 1)
          t.stringToUTF8(e, i, n + 1), t.setValue(r, i, '*')
        },
        y = t.UTF8ToString || t.Pointer_stringify,
        g = function (e, r, i) {
          e
            ? n('object' == typeof e, 'Invalid callback object specified.')
            : (e = {})
          var o,
            s,
            a = e.import
          if (
            (void 0 === a &&
              (a = function (e) {
                return { error: 'File import callback not supported' }
              }),
            p)
          ) {
            var u = e.smtSolver
            void 0 === u &&
              (u = function (e) {
                return { error: 'SMT solver callback not supported' }
              }),
              (o = function (e, t) {
                return 'source' === e
                  ? a(t)
                  : 'smt-query' === e
                  ? u(t)
                  : void n(!1, 'Invalid callback kind specified.')
              }),
              n('function' == typeof (s = o), 'Invalid callback specified.'),
              (o = function (e, t, r, i, o) {
                n(0 === e, 'Callback context must be null.')
                var a = s(y(t), y(r))
                'string' == typeof a.contents && d(a.contents, i),
                  'string' == typeof a.error && d(a.error, o)
              })
          } else
            o = (function (e) {
              return (
                n('function' == typeof e, 'Invalid callback specified.'),
                function (t, r, n) {
                  var i = e(y(t))
                  'string' == typeof i.contents && d(i.contents, r),
                    'string' == typeof i.error && d(i.error, n)
                }
              )
            })(a)
          var f,
            c = t.addFunction || t.Runtime.addFunction,
            h = t.removeFunction || t.Runtime.removeFunction,
            g = c(o)
          try {
            i.push(g), p && i.push(null), (f = r.apply(void 0, i))
          } catch (e) {
            throw (h(g), e)
          }
          return h(g), l && l(), f
        },
        v = null
      '_compileJSON' in t &&
        (v = t.cwrap('compileJSON', 'string', ['string', 'number']))
      var m = null
      '_compileJSONMulti' in t &&
        (m = t.cwrap('compileJSONMulti', 'string', ['string', 'number']))
      var b = null
      if ('_compileJSONCallback' in t) {
        var w = t.cwrap('compileJSONCallback', 'string', [
          'string',
          'number',
          'number',
        ])
        b = function (e, t, r) {
          return g(r, w, [e, t])
        }
      }
      var _,
        S = null
      if ('_compileStandard' in t) {
        var E = t.cwrap('compileStandard', 'string', ['string', 'number'])
        S = function (e, t) {
          return g(t, E, [e])
        }
      }
      return (
        '_solidity_compile' in t &&
          ((_ = p
            ? t.cwrap('solidity_compile', 'string', [
                'string',
                'number',
                'number',
              ])
            : t.cwrap('solidity_compile', 'string', ['string', 'number'])),
          (S = function (e, t) {
            return g(t, _, [e])
          })),
        {
          version: r,
          semver: h,
          license: f,
          lowlevel: {
            compileSingle: v,
            compileMulti: m,
            compileCallback: b,
            compileStandard: S,
          },
          features: {
            legacySingleInput: null !== v,
            multipleInputs: null !== m || null !== S,
            importCallback: null !== b || null !== S,
            nativeStandardJSON: null !== S,
          },
          compile: function (e, t) {
            if (null !== S) return S(e, t)
            function r(e) {
              return JSON.stringify({
                errors: [
                  {
                    type: 'JSONError',
                    component: 'solcjs',
                    severity: 'error',
                    message: e,
                    formattedMessage: 'Error: ' + e,
                  },
                ],
              })
            }
            try {
              e = JSON.parse(e)
            } catch (e) {
              return r('Invalid JSON supplied: ' + e.message)
            }
            if ('Solidity' !== e.language)
              return r('Only "Solidity" is supported as a language.')
            if (null == e.sources || 0 === e.sources.length)
              return r('No input sources specified.')
            function n(e) {
              return (
                e.settings &&
                e.settings.optimizer &&
                e.settings.optimizer.enabled
              )
            }
            function o(e, t) {
              try {
                e = JSON.parse(e)
              } catch (e) {
                return r('Compiler returned invalid JSON: ' + e.message)
              }
              return null == (e = i.translateJsonCompilerOutput(e, t))
                ? r('Failed to process output.')
                : JSON.stringify(e)
            }
            var s = (function (e) {
              var t = {}
              for (var r in e.sources) {
                if (null === e.sources[r].content) return null
                t[r] = e.sources[r].content
              }
              return t
            })(e)
            if (null === s || 0 === Object.keys(s).length)
              return r('Failed to process sources.')
            var a = (function (e) {
              if (e.settings) return e.settings.libraries
            })(e)
            return null !== b
              ? o(b(JSON.stringify({ sources: s }), n(e), t), a)
              : null !== m
              ? o(m(JSON.stringify({ sources: s }), n(e)), a)
              : null !== v
              ? 1 !== Object.keys(s).length
                ? r(
                    'Multiple sources provided, but compiler only supports single input.'
                  )
                : o(v(s[Object.keys(s)[0]], n(e)), a)
              : r('Compiler does not support any known interface.')
          },
          loadRemoteVersion: function (t, r) {
            var n = new a(null, { readable: !1 }),
              i =
                'https://raw.githubusercontent.com/ethereum/solc-bin/gh-pages/bin/soljson-' +
                t +
                '.js'
            s.get(i, function (i) {
              200 !== i.statusCode
                ? r(new Error('Error retrieving binary: ' + i.statusMessage))
                : (i.pipe(n),
                  i.on('end', function () {
                    r(null, e(o(n.toString(), 'soljson-' + t + '.js')))
                  }))
            }).on('error', function (e) {
              r(e)
            })
          },
          setupMethods: e,
        }
      )
    }
  },
  function (e, t, r) {
    'use strict'
    r.r(t),
      function (e) {
        var t = r(23),
          n = r.n(t)()(Module)
        try {
          e.solc = n
        } catch (e) {
          console.log('[Webpack-bundle] err ', e)
        }
      }.call(this, r(0))
  },
  function (e, t, r) {
    'use strict'
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var n = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable
    function s(e) {
      if (null == e)
        throw new TypeError(
          'Object.assign cannot be called with null or undefined'
        )
      return Object(e)
    }
    e.exports = (function () {
      try {
        if (!Object.assign) return !1
        var e = new String('abc')
        if (((e[5] = 'de'), '5' === Object.getOwnPropertyNames(e)[0])) return !1
        for (var t = {}, r = 0; r < 10; r++) t['_' + String.fromCharCode(r)] = r
        if (
          '0123456789' !==
          Object.getOwnPropertyNames(t)
            .map(function (e) {
              return t[e]
            })
            .join('')
        )
          return !1
        var n = {}
        return (
          'abcdefghijklmnopqrst'.split('').forEach(function (e) {
            n[e] = e
          }),
          'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, n)).join('')
        )
      } catch (e) {
        return !1
      }
    })()
      ? Object.assign
      : function (e, t) {
          for (var r, a, u = s(e), f = 1; f < arguments.length; f++) {
            for (var c in (r = Object(arguments[f])))
              i.call(r, c) && (u[c] = r[c])
            if (n) {
              a = n(r)
              for (var l = 0; l < a.length; l++)
                o.call(r, a[l]) && (u[a[l]] = r[a[l]])
            }
          }
          return u
        }
  },
  function (e, t) {
    e.exports = function (e) {
      return (
        e &&
        'object' == typeof e &&
        'function' == typeof e.copy &&
        'function' == typeof e.fill &&
        'function' == typeof e.readUInt8
      )
    }
  },
  function (e, t) {
    'function' == typeof Object.create
      ? (e.exports = function (e, t) {
          ;(e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            }))
        })
      : (e.exports = function (e, t) {
          e.super_ = t
          var r = function () {}
          ;(r.prototype = t.prototype),
            (e.prototype = new r()),
            (e.prototype.constructor = e)
        })
  },
  function (e, t, r) {
    var n = r(29)
    function i(e) {
      if (null === e) return 'infinite'
      if ('number' == typeof e) return e.toString()
      var t = {}
      for (var r in e) t[r] = i(e[r])
      return t
    }
    e.exports = {
      versionToSemver: function (e) {
        var t = e.match(/^([0-9]+\.[0-9]+\.[0-9]+)-([0-9a-f]{8})[/*].*$/)
        return t
          ? t[1] + '+commit.' + t[2]
          : -1 !== e.indexOf('0.1.3-0')
          ? '0.1.3'
          : -1 !== e.indexOf('0.3.5-0')
          ? '0.3.5'
          : e
      },
      translateJsonCompilerOutput: function (e, t) {
        var r,
          o = { errors: [] }
        for (var s in ((r = e.error ? [e.error] : e.errors),
        (function (e, t) {
          for (var r in t) {
            var n = 'error',
              i = /^(.*):(\d+):(\d+):(.*):/
            ;(i = i.exec(t[r]))
              ? (n = i[4].trim())
              : t[r].indexOf(': Warning:')
              ? (n = 'Warning')
              : t[r].indexOf(': Error:') && (n = 'Error'),
              e.push({
                type: n,
                component: 'general',
                severity: 'Warning' === n ? 'warning' : 'error',
                message: t[r],
                formattedMessage: t[r],
              })
          }
        })(o.errors, r),
        (o.contracts = {}),
        e.contracts)) {
          var a = s.match(/^(([^:]*):)?([^:]+)$/)
          if (4 !== a.length) return null
          var u = a[2]
          void 0 === u && (u = '')
          var f = a[3],
            c = e.contracts[s],
            l = c.gasEstimates,
            h = {}
          l.creation &&
            (h.creation = {
              codeDepositCost: i(l.creation[1]),
              executionCost: i(l.creation[0]),
            }),
            l.internal && (h.internal = i(l.internal)),
            l.external && (h.external = i(l.external))
          var p = {
            abi: JSON.parse(c.interface),
            metadata: c.metadata,
            evm: {
              legacyAssembly: c.assembly,
              bytecode: {
                object: c.bytecode && n.linkBytecode(c.bytecode, t || {}),
                opcodes: c.opcodes,
                sourceMap: c.srcmap,
                linkReferences: c.bytecode && n.findLinkReferences(c.bytecode),
              },
              deployedBytecode: {
                object:
                  c.runtimeBytecode &&
                  n.linkBytecode(c.runtimeBytecode, t || {}),
                sourceMap: c.srcmapRuntime,
                linkReferences:
                  c.runtimeBytecode && n.findLinkReferences(c.runtimeBytecode),
              },
              methodIdentifiers: c.functionHashes,
              gasEstimates: h,
            },
          }
          o.contracts[u] || (o.contracts[u] = {}), (o.contracts[u][f] = p)
        }
        var d = {}
        for (var y in e.sourceList) d[e.sourceList[y]] = y
        for (var g in ((o.sources = {}), e.sources))
          o.sources[g] = { id: d[g], legacyAST: e.sources[g].AST }
        return o
      },
      prettyPrintLegacyAssemblyJSON: function (e, t) {
        return (function e(t, r, n) {
          if ('string' == typeof t || null == t) return r + (t || '') + '\n'
          var i = r + '.code\n'
          t['.code'].forEach(function (e, t) {
            var o = void 0 === e.value ? '' : e.value,
              s = ''
            void 0 !== n &&
              void 0 !== e.begin &&
              void 0 !== e.end &&
              (s = (function (e) {
                return e
                  .replace(/\n/g, '\\n')
                  .replace(/\r/g, '\\r')
                  .replace(/\t/g, '\\t')
              })(n.slice(e.begin, e.end))),
              s.length > 30 && (s = s.slice(0, 30) + '...'),
              'tag' !== e.name && (i += '  '),
              (i += r + e.name + ' ' + o + '\t\t\t' + s + '\n')
          }),
            (i += r + '.data\n')
          var o = t['.data'] || []
          for (var s in o) {
            var a = o[s]
            ;(i += '  ' + r + s + ':\n'), (i += e(a, r + '    ', n))
          }
          return i
        })(e, '', t)
      },
    }
  },
  function (e, t, r) {
    var n = r(12),
      i = r(30).keccak256
    e.exports = {
      linkBytecode: function (e, t) {
        n('string' == typeof e), n('object' == typeof t)
        var r = {}
        for (var o in t)
          if ('object' == typeof t[o])
            for (var s in t[o]) (r[s] = t[o][s]), (r[o + ':' + s] = t[o][s])
          else {
            var a = o.match(/^([^:]+):(.+)$/)
            a && (r[a[2]] = t[o]), (r[o] = t[o])
          }
        for (o in r) {
          var u = r[o]
          if ('0x' !== u.slice(0, 2) || u.length > 42)
            throw new Error('Invalid address specified for ' + o)
          ;(u = u.slice(2)), (u = Array(40 - u.length + 1).join('0') + u)
          var f = function (t) {
            for (
              var r = t.slice(0, 36),
                n = '__' + r + Array(37 - r.length).join('_') + '__';
              e.indexOf(n) >= 0;

            )
              e = e.replace(n, u)
          }
          f(o), f('$' + i(o).slice(0, 34) + '$')
        }
        return e
      },
      findLinkReferences: function (e) {
        n('string' == typeof e)
        for (var t = {}, r = 0; ; ) {
          var i = e.match(/__(.{36})__/)
          if (!i) break
          var o = i.index,
            s = i[1].replace(/_+$/gm, '')
          t[s] || (t[s] = []),
            t[s].push({ start: (r + o) / 2, length: 20 }),
            (r += o + 20),
            (e = e.slice(o + 20))
        }
        return t
      },
    }
  },
  function (e, t, r) {
    ;(function (n, i) {
      var o
      /**
       * [js-sha3]{@link https://github.com/emn178/js-sha3}
       *
       * @version 0.8.0
       * @author Chen, Yi-Cyuan [emn178@gmail.com]
       * @copyright Chen, Yi-Cyuan 2015-2018
       * @license MIT
       */ !(function () {
        'use strict'
        var s = 'input is invalid type',
          a = 'object' == typeof window,
          u = a ? window : {}
        u.JS_SHA3_NO_WINDOW && (a = !1)
        var f = !a && 'object' == typeof self
        !u.JS_SHA3_NO_NODE_JS &&
        'object' == typeof n &&
        n.versions &&
        n.versions.node
          ? (u = i)
          : f && (u = self)
        var c = !u.JS_SHA3_NO_COMMON_JS && 'object' == typeof e && e.exports,
          l = r(31),
          h = !u.JS_SHA3_NO_ARRAY_BUFFER && 'undefined' != typeof ArrayBuffer,
          p = '0123456789abcdef'.split(''),
          d = [4, 1024, 262144, 67108864],
          y = [0, 8, 16, 24],
          g = [
            1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
            2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0,
            136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139,
            2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648,
            128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545,
            2147483648, 32896, 2147483648, 2147483649, 0, 2147516424,
            2147483648,
          ],
          v = [224, 256, 384, 512],
          m = [128, 256],
          b = ['hex', 'buffer', 'arrayBuffer', 'array', 'digest'],
          w = { 128: 168, 256: 136 }
        ;(!u.JS_SHA3_NO_NODE_JS && Array.isArray) ||
          (Array.isArray = function (e) {
            return '[object Array]' === Object.prototype.toString.call(e)
          }),
          !h ||
            (!u.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
            (ArrayBuffer.isView = function (e) {
              return (
                'object' == typeof e &&
                e.buffer &&
                e.buffer.constructor === ArrayBuffer
              )
            })
        for (
          var _ = function (e, t, r) {
              return function (n) {
                return new I(e, t, e).update(n)[r]()
              }
            },
            S = function (e, t, r) {
              return function (n, i) {
                return new I(e, t, i).update(n)[r]()
              }
            },
            E = function (e, t, r) {
              return function (t, n, i, o) {
                return j['cshake' + e].update(t, n, i, o)[r]()
              }
            },
            x = function (e, t, r) {
              return function (t, n, i, o) {
                return j['kmac' + e].update(t, n, i, o)[r]()
              }
            },
            A = function (e, t, r, n) {
              for (var i = 0; i < b.length; ++i) {
                var o = b[i]
                e[o] = t(r, n, o)
              }
              return e
            },
            O = function (e, t) {
              var r = _(e, t, 'hex')
              return (
                (r.create = function () {
                  return new I(e, t, e)
                }),
                (r.update = function (e) {
                  return r.create().update(e)
                }),
                A(r, _, e, t)
              )
            },
            T = [
              {
                name: 'keccak',
                padding: [1, 256, 65536, 16777216],
                bits: v,
                createMethod: O,
              },
              {
                name: 'sha3',
                padding: [6, 1536, 393216, 100663296],
                bits: v,
                createMethod: O,
              },
              {
                name: 'shake',
                padding: [31, 7936, 2031616, 520093696],
                bits: m,
                createMethod: function (e, t) {
                  var r = S(e, t, 'hex')
                  return (
                    (r.create = function (r) {
                      return new I(e, t, r)
                    }),
                    (r.update = function (e, t) {
                      return r.create(t).update(e)
                    }),
                    A(r, S, e, t)
                  )
                },
              },
              {
                name: 'cshake',
                padding: d,
                bits: m,
                createMethod: function (e, t) {
                  var r = w[e],
                    n = E(e, 0, 'hex')
                  return (
                    (n.create = function (n, i, o) {
                      return i || o
                        ? new I(e, t, n).bytepad([i, o], r)
                        : j['shake' + e].create(n)
                    }),
                    (n.update = function (e, t, r, i) {
                      return n.create(t, r, i).update(e)
                    }),
                    A(n, E, e, t)
                  )
                },
              },
              {
                name: 'kmac',
                padding: d,
                bits: m,
                createMethod: function (e, t) {
                  var r = w[e],
                    n = x(e, 0, 'hex')
                  return (
                    (n.create = function (n, i, o) {
                      return new N(e, t, i)
                        .bytepad(['KMAC', o], r)
                        .bytepad([n], r)
                    }),
                    (n.update = function (e, t, r, i) {
                      return n.create(e, r, i).update(t)
                    }),
                    A(n, x, e, t)
                  )
                },
              },
            ],
            j = {},
            R = [],
            k = 0;
          k < T.length;
          ++k
        )
          for (var C = T[k], P = C.bits, M = 0; M < P.length; ++M) {
            var B = C.name + '_' + P[M]
            if (
              (R.push(B),
              (j[B] = C.createMethod(P[M], C.padding)),
              'sha3' !== C.name)
            ) {
              var L = C.name + P[M]
              R.push(L), (j[L] = j[B])
            }
          }
        function I(e, t, r) {
          ;(this.blocks = []),
            (this.s = []),
            (this.padding = t),
            (this.outputBits = r),
            (this.reset = !0),
            (this.finalized = !1),
            (this.block = 0),
            (this.start = 0),
            (this.blockCount = (1600 - (e << 1)) >> 5),
            (this.byteCount = this.blockCount << 2),
            (this.outputBlocks = r >> 5),
            (this.extraBytes = (31 & r) >> 3)
          for (var n = 0; n < 50; ++n) this.s[n] = 0
        }
        function N(e, t, r) {
          I.call(this, e, t, r)
        }
        ;(I.prototype.update = function (e) {
          if (this.finalized) throw new Error('finalize already called')
          var t,
            r = typeof e
          if ('string' !== r) {
            if ('object' !== r) throw new Error(s)
            if (null === e) throw new Error(s)
            if (h && e.constructor === ArrayBuffer) e = new Uint8Array(e)
            else if (!(Array.isArray(e) || (h && ArrayBuffer.isView(e))))
              throw new Error(s)
            t = !0
          }
          for (
            var n,
              i,
              o = this.blocks,
              a = this.byteCount,
              u = e.length,
              f = this.blockCount,
              c = 0,
              l = this.s;
            c < u;

          ) {
            if (this.reset)
              for (this.reset = !1, o[0] = this.block, n = 1; n < f + 1; ++n)
                o[n] = 0
            if (t)
              for (n = this.start; c < u && n < a; ++c)
                o[n >> 2] |= e[c] << y[3 & n++]
            else
              for (n = this.start; c < u && n < a; ++c)
                (i = e.charCodeAt(c)) < 128
                  ? (o[n >> 2] |= i << y[3 & n++])
                  : i < 2048
                  ? ((o[n >> 2] |= (192 | (i >> 6)) << y[3 & n++]),
                    (o[n >> 2] |= (128 | (63 & i)) << y[3 & n++]))
                  : i < 55296 || i >= 57344
                  ? ((o[n >> 2] |= (224 | (i >> 12)) << y[3 & n++]),
                    (o[n >> 2] |= (128 | ((i >> 6) & 63)) << y[3 & n++]),
                    (o[n >> 2] |= (128 | (63 & i)) << y[3 & n++]))
                  : ((i =
                      65536 +
                      (((1023 & i) << 10) | (1023 & e.charCodeAt(++c)))),
                    (o[n >> 2] |= (240 | (i >> 18)) << y[3 & n++]),
                    (o[n >> 2] |= (128 | ((i >> 12) & 63)) << y[3 & n++]),
                    (o[n >> 2] |= (128 | ((i >> 6) & 63)) << y[3 & n++]),
                    (o[n >> 2] |= (128 | (63 & i)) << y[3 & n++]))
            if (((this.lastByteIndex = n), n >= a)) {
              for (this.start = n - a, this.block = o[f], n = 0; n < f; ++n)
                l[n] ^= o[n]
              U(l), (this.reset = !0)
            } else this.start = n
          }
          return this
        }),
          (I.prototype.encode = function (e, t) {
            var r = 255 & e,
              n = 1,
              i = [r]
            for (r = 255 & (e >>= 8); r > 0; )
              i.unshift(r), (r = 255 & (e >>= 8)), ++n
            return t ? i.push(n) : i.unshift(n), this.update(i), i.length
          }),
          (I.prototype.encodeString = function (e) {
            var t,
              r = typeof e
            if ('string' !== r) {
              if ('object' !== r) throw new Error(s)
              if (null === e) throw new Error(s)
              if (h && e.constructor === ArrayBuffer) e = new Uint8Array(e)
              else if (!(Array.isArray(e) || (h && ArrayBuffer.isView(e))))
                throw new Error(s)
              t = !0
            }
            var n = 0,
              i = e.length
            if (t) n = i
            else
              for (var o = 0; o < e.length; ++o) {
                var a = e.charCodeAt(o)
                a < 128
                  ? (n += 1)
                  : a < 2048
                  ? (n += 2)
                  : a < 55296 || a >= 57344
                  ? (n += 3)
                  : ((a =
                      65536 +
                      (((1023 & a) << 10) | (1023 & e.charCodeAt(++o)))),
                    (n += 4))
              }
            return (n += this.encode(8 * n)), this.update(e), n
          }),
          (I.prototype.bytepad = function (e, t) {
            for (var r = this.encode(t), n = 0; n < e.length; ++n)
              r += this.encodeString(e[n])
            var i = t - (r % t),
              o = []
            return (o.length = i), this.update(o), this
          }),
          (I.prototype.finalize = function () {
            if (!this.finalized) {
              this.finalized = !0
              var e = this.blocks,
                t = this.lastByteIndex,
                r = this.blockCount,
                n = this.s
              if (
                ((e[t >> 2] |= this.padding[3 & t]),
                this.lastByteIndex === this.byteCount)
              )
                for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0
              for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t]
              U(n)
            }
          }),
          (I.prototype.toString = I.prototype.hex =
            function () {
              this.finalize()
              for (
                var e,
                  t = this.blockCount,
                  r = this.s,
                  n = this.outputBlocks,
                  i = this.extraBytes,
                  o = 0,
                  s = 0,
                  a = '';
                s < n;

              ) {
                for (o = 0; o < t && s < n; ++o, ++s)
                  (e = r[o]),
                    (a +=
                      p[(e >> 4) & 15] +
                      p[15 & e] +
                      p[(e >> 12) & 15] +
                      p[(e >> 8) & 15] +
                      p[(e >> 20) & 15] +
                      p[(e >> 16) & 15] +
                      p[(e >> 28) & 15] +
                      p[(e >> 24) & 15])
                s % t == 0 && (U(r), (o = 0))
              }
              return (
                i &&
                  ((e = r[o]),
                  (a += p[(e >> 4) & 15] + p[15 & e]),
                  i > 1 && (a += p[(e >> 12) & 15] + p[(e >> 8) & 15]),
                  i > 2 && (a += p[(e >> 20) & 15] + p[(e >> 16) & 15])),
                a
              )
            }),
          (I.prototype.arrayBuffer = function () {
            this.finalize()
            var e,
              t = this.blockCount,
              r = this.s,
              n = this.outputBlocks,
              i = this.extraBytes,
              o = 0,
              s = 0,
              a = this.outputBits >> 3
            e = i ? new ArrayBuffer((n + 1) << 2) : new ArrayBuffer(a)
            for (var u = new Uint32Array(e); s < n; ) {
              for (o = 0; o < t && s < n; ++o, ++s) u[s] = r[o]
              s % t == 0 && U(r)
            }
            return i && ((u[o] = r[o]), (e = e.slice(0, a))), e
          }),
          (I.prototype.buffer = I.prototype.arrayBuffer),
          (I.prototype.digest = I.prototype.array =
            function () {
              this.finalize()
              for (
                var e,
                  t,
                  r = this.blockCount,
                  n = this.s,
                  i = this.outputBlocks,
                  o = this.extraBytes,
                  s = 0,
                  a = 0,
                  u = [];
                a < i;

              ) {
                for (s = 0; s < r && a < i; ++s, ++a)
                  (e = a << 2),
                    (t = n[s]),
                    (u[e] = 255 & t),
                    (u[e + 1] = (t >> 8) & 255),
                    (u[e + 2] = (t >> 16) & 255),
                    (u[e + 3] = (t >> 24) & 255)
                a % r == 0 && U(n)
              }
              return (
                o &&
                  ((e = a << 2),
                  (t = n[s]),
                  (u[e] = 255 & t),
                  o > 1 && (u[e + 1] = (t >> 8) & 255),
                  o > 2 && (u[e + 2] = (t >> 16) & 255)),
                u
              )
            }),
          (N.prototype = new I()),
          (N.prototype.finalize = function () {
            return (
              this.encode(this.outputBits, !0), I.prototype.finalize.call(this)
            )
          })
        var U = function (e) {
          var t,
            r,
            n,
            i,
            o,
            s,
            a,
            u,
            f,
            c,
            l,
            h,
            p,
            d,
            y,
            v,
            m,
            b,
            w,
            _,
            S,
            E,
            x,
            A,
            O,
            T,
            j,
            R,
            k,
            C,
            P,
            M,
            B,
            L,
            I,
            N,
            U,
            q,
            D,
            F,
            z,
            H,
            Y,
            W,
            $,
            J,
            V,
            G,
            X,
            K,
            Z,
            Q,
            ee,
            te,
            re,
            ne,
            ie,
            oe,
            se,
            ae,
            ue,
            fe,
            ce
          for (n = 0; n < 48; n += 2)
            (i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40]),
              (o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41]),
              (s = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42]),
              (a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43]),
              (u = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44]),
              (f = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45]),
              (c = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46]),
              (l = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47]),
              (t =
                (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^
                ((s << 1) | (a >>> 31))),
              (r =
                (p = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^
                ((a << 1) | (s >>> 31))),
              (e[0] ^= t),
              (e[1] ^= r),
              (e[10] ^= t),
              (e[11] ^= r),
              (e[20] ^= t),
              (e[21] ^= r),
              (e[30] ^= t),
              (e[31] ^= r),
              (e[40] ^= t),
              (e[41] ^= r),
              (t = i ^ ((u << 1) | (f >>> 31))),
              (r = o ^ ((f << 1) | (u >>> 31))),
              (e[2] ^= t),
              (e[3] ^= r),
              (e[12] ^= t),
              (e[13] ^= r),
              (e[22] ^= t),
              (e[23] ^= r),
              (e[32] ^= t),
              (e[33] ^= r),
              (e[42] ^= t),
              (e[43] ^= r),
              (t = s ^ ((c << 1) | (l >>> 31))),
              (r = a ^ ((l << 1) | (c >>> 31))),
              (e[4] ^= t),
              (e[5] ^= r),
              (e[14] ^= t),
              (e[15] ^= r),
              (e[24] ^= t),
              (e[25] ^= r),
              (e[34] ^= t),
              (e[35] ^= r),
              (e[44] ^= t),
              (e[45] ^= r),
              (t = u ^ ((h << 1) | (p >>> 31))),
              (r = f ^ ((p << 1) | (h >>> 31))),
              (e[6] ^= t),
              (e[7] ^= r),
              (e[16] ^= t),
              (e[17] ^= r),
              (e[26] ^= t),
              (e[27] ^= r),
              (e[36] ^= t),
              (e[37] ^= r),
              (e[46] ^= t),
              (e[47] ^= r),
              (t = c ^ ((i << 1) | (o >>> 31))),
              (r = l ^ ((o << 1) | (i >>> 31))),
              (e[8] ^= t),
              (e[9] ^= r),
              (e[18] ^= t),
              (e[19] ^= r),
              (e[28] ^= t),
              (e[29] ^= r),
              (e[38] ^= t),
              (e[39] ^= r),
              (e[48] ^= t),
              (e[49] ^= r),
              (d = e[0]),
              (y = e[1]),
              (J = (e[11] << 4) | (e[10] >>> 28)),
              (V = (e[10] << 4) | (e[11] >>> 28)),
              (R = (e[20] << 3) | (e[21] >>> 29)),
              (k = (e[21] << 3) | (e[20] >>> 29)),
              (ae = (e[31] << 9) | (e[30] >>> 23)),
              (ue = (e[30] << 9) | (e[31] >>> 23)),
              (H = (e[40] << 18) | (e[41] >>> 14)),
              (Y = (e[41] << 18) | (e[40] >>> 14)),
              (L = (e[2] << 1) | (e[3] >>> 31)),
              (I = (e[3] << 1) | (e[2] >>> 31)),
              (v = (e[13] << 12) | (e[12] >>> 20)),
              (m = (e[12] << 12) | (e[13] >>> 20)),
              (G = (e[22] << 10) | (e[23] >>> 22)),
              (X = (e[23] << 10) | (e[22] >>> 22)),
              (C = (e[33] << 13) | (e[32] >>> 19)),
              (P = (e[32] << 13) | (e[33] >>> 19)),
              (fe = (e[42] << 2) | (e[43] >>> 30)),
              (ce = (e[43] << 2) | (e[42] >>> 30)),
              (te = (e[5] << 30) | (e[4] >>> 2)),
              (re = (e[4] << 30) | (e[5] >>> 2)),
              (N = (e[14] << 6) | (e[15] >>> 26)),
              (U = (e[15] << 6) | (e[14] >>> 26)),
              (b = (e[25] << 11) | (e[24] >>> 21)),
              (w = (e[24] << 11) | (e[25] >>> 21)),
              (K = (e[34] << 15) | (e[35] >>> 17)),
              (Z = (e[35] << 15) | (e[34] >>> 17)),
              (M = (e[45] << 29) | (e[44] >>> 3)),
              (B = (e[44] << 29) | (e[45] >>> 3)),
              (A = (e[6] << 28) | (e[7] >>> 4)),
              (O = (e[7] << 28) | (e[6] >>> 4)),
              (ne = (e[17] << 23) | (e[16] >>> 9)),
              (ie = (e[16] << 23) | (e[17] >>> 9)),
              (q = (e[26] << 25) | (e[27] >>> 7)),
              (D = (e[27] << 25) | (e[26] >>> 7)),
              (_ = (e[36] << 21) | (e[37] >>> 11)),
              (S = (e[37] << 21) | (e[36] >>> 11)),
              (Q = (e[47] << 24) | (e[46] >>> 8)),
              (ee = (e[46] << 24) | (e[47] >>> 8)),
              (W = (e[8] << 27) | (e[9] >>> 5)),
              ($ = (e[9] << 27) | (e[8] >>> 5)),
              (T = (e[18] << 20) | (e[19] >>> 12)),
              (j = (e[19] << 20) | (e[18] >>> 12)),
              (oe = (e[29] << 7) | (e[28] >>> 25)),
              (se = (e[28] << 7) | (e[29] >>> 25)),
              (F = (e[38] << 8) | (e[39] >>> 24)),
              (z = (e[39] << 8) | (e[38] >>> 24)),
              (E = (e[48] << 14) | (e[49] >>> 18)),
              (x = (e[49] << 14) | (e[48] >>> 18)),
              (e[0] = d ^ (~v & b)),
              (e[1] = y ^ (~m & w)),
              (e[10] = A ^ (~T & R)),
              (e[11] = O ^ (~j & k)),
              (e[20] = L ^ (~N & q)),
              (e[21] = I ^ (~U & D)),
              (e[30] = W ^ (~J & G)),
              (e[31] = $ ^ (~V & X)),
              (e[40] = te ^ (~ne & oe)),
              (e[41] = re ^ (~ie & se)),
              (e[2] = v ^ (~b & _)),
              (e[3] = m ^ (~w & S)),
              (e[12] = T ^ (~R & C)),
              (e[13] = j ^ (~k & P)),
              (e[22] = N ^ (~q & F)),
              (e[23] = U ^ (~D & z)),
              (e[32] = J ^ (~G & K)),
              (e[33] = V ^ (~X & Z)),
              (e[42] = ne ^ (~oe & ae)),
              (e[43] = ie ^ (~se & ue)),
              (e[4] = b ^ (~_ & E)),
              (e[5] = w ^ (~S & x)),
              (e[14] = R ^ (~C & M)),
              (e[15] = k ^ (~P & B)),
              (e[24] = q ^ (~F & H)),
              (e[25] = D ^ (~z & Y)),
              (e[34] = G ^ (~K & Q)),
              (e[35] = X ^ (~Z & ee)),
              (e[44] = oe ^ (~ae & fe)),
              (e[45] = se ^ (~ue & ce)),
              (e[6] = _ ^ (~E & d)),
              (e[7] = S ^ (~x & y)),
              (e[16] = C ^ (~M & A)),
              (e[17] = P ^ (~B & O)),
              (e[26] = F ^ (~H & L)),
              (e[27] = z ^ (~Y & I)),
              (e[36] = K ^ (~Q & W)),
              (e[37] = Z ^ (~ee & $)),
              (e[46] = ae ^ (~fe & te)),
              (e[47] = ue ^ (~ce & re)),
              (e[8] = E ^ (~d & v)),
              (e[9] = x ^ (~y & m)),
              (e[18] = M ^ (~A & T)),
              (e[19] = B ^ (~O & j)),
              (e[28] = H ^ (~L & N)),
              (e[29] = Y ^ (~I & U)),
              (e[38] = Q ^ (~W & J)),
              (e[39] = ee ^ (~$ & V)),
              (e[48] = fe ^ (~te & ne)),
              (e[49] = ce ^ (~re & ie)),
              (e[0] ^= g[n]),
              (e[1] ^= g[n + 1])
        }
        if (c) e.exports = j
        else {
          for (k = 0; k < R.length; ++k) u[R[k]] = j[R[k]]
          l &&
            (void 0 ===
              (o = function () {
                return j
              }.call(t, r, t, e)) ||
              (e.exports = o))
        }
      })()
    }).call(this, r(1), r(0))
  },
  function (e, t) {
    ;(function (t) {
      e.exports = t
    }).call(this, {})
  },
  function (e, t, r) {
    'use strict'
    ;(function (e) {
      var t = r(33),
        n = r(34)
      e.exports = function (r, i, o) {
        if (
          ('object' == typeof i && ((o = i), (i = void 0)),
          (i = i || ''),
          ((o = o || {}).appendPaths = o.appendPaths || []),
          (o.prependPaths = o.prependPaths || []),
          'string' != typeof r)
        )
          throw new Error('code must be a string, not ' + typeof r)
        var s = t._nodeModulePaths(n.dirname(i)),
          a = e.parent,
          u = new t(i, a)
        ;(u.filename = i),
          (u.paths = [].concat(o.prependPaths).concat(s).concat(o.appendPaths)),
          u._compile(r, i)
        var f = u.exports
        return a && a.children && a.children.splice(a.children.indexOf(u), 1), f
      }
    }).call(this, r(14)(e))
  },
  function (e, t) {
    e.exports = void 0
  },
  function (e, t, r) {
    ;(function (e) {
      function r(e, t) {
        for (var r = 0, n = e.length - 1; n >= 0; n--) {
          var i = e[n]
          '.' === i
            ? e.splice(n, 1)
            : '..' === i
            ? (e.splice(n, 1), r++)
            : r && (e.splice(n, 1), r--)
        }
        if (t) for (; r--; r) e.unshift('..')
        return e
      }
      function n(e, t) {
        if (e.filter) return e.filter(t)
        for (var r = [], n = 0; n < e.length; n++) t(e[n], n, e) && r.push(e[n])
        return r
      }
      ;(t.resolve = function () {
        for (var t = '', i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
          var s = o >= 0 ? arguments[o] : e.cwd()
          if ('string' != typeof s)
            throw new TypeError('Arguments to path.resolve must be strings')
          s && ((t = s + '/' + t), (i = '/' === s.charAt(0)))
        }
        return (
          (i ? '/' : '') +
            (t = r(
              n(t.split('/'), function (e) {
                return !!e
              }),
              !i
            ).join('/')) || '.'
        )
      }),
        (t.normalize = function (e) {
          var o = t.isAbsolute(e),
            s = '/' === i(e, -1)
          return (
            (e = r(
              n(e.split('/'), function (e) {
                return !!e
              }),
              !o
            ).join('/')) ||
              o ||
              (e = '.'),
            e && s && (e += '/'),
            (o ? '/' : '') + e
          )
        }),
        (t.isAbsolute = function (e) {
          return '/' === e.charAt(0)
        }),
        (t.join = function () {
          var e = Array.prototype.slice.call(arguments, 0)
          return t.normalize(
            n(e, function (e, t) {
              if ('string' != typeof e)
                throw new TypeError('Arguments to path.join must be strings')
              return e
            }).join('/')
          )
        }),
        (t.relative = function (e, r) {
          function n(e) {
            for (var t = 0; t < e.length && '' === e[t]; t++);
            for (var r = e.length - 1; r >= 0 && '' === e[r]; r--);
            return t > r ? [] : e.slice(t, r - t + 1)
          }
          ;(e = t.resolve(e).substr(1)), (r = t.resolve(r).substr(1))
          for (
            var i = n(e.split('/')),
              o = n(r.split('/')),
              s = Math.min(i.length, o.length),
              a = s,
              u = 0;
            u < s;
            u++
          )
            if (i[u] !== o[u]) {
              a = u
              break
            }
          var f = []
          for (u = a; u < i.length; u++) f.push('..')
          return (f = f.concat(o.slice(a))).join('/')
        }),
        (t.sep = '/'),
        (t.delimiter = ':'),
        (t.dirname = function (e) {
          if (('string' != typeof e && (e += ''), 0 === e.length)) return '.'
          for (
            var t = e.charCodeAt(0),
              r = 47 === t,
              n = -1,
              i = !0,
              o = e.length - 1;
            o >= 1;
            --o
          )
            if (47 === (t = e.charCodeAt(o))) {
              if (!i) {
                n = o
                break
              }
            } else i = !1
          return -1 === n ? (r ? '/' : '.') : r && 1 === n ? '/' : e.slice(0, n)
        }),
        (t.basename = function (e, t) {
          var r = (function (e) {
            'string' != typeof e && (e += '')
            var t,
              r = 0,
              n = -1,
              i = !0
            for (t = e.length - 1; t >= 0; --t)
              if (47 === e.charCodeAt(t)) {
                if (!i) {
                  r = t + 1
                  break
                }
              } else -1 === n && ((i = !1), (n = t + 1))
            return -1 === n ? '' : e.slice(r, n)
          })(e)
          return (
            t &&
              r.substr(-1 * t.length) === t &&
              (r = r.substr(0, r.length - t.length)),
            r
          )
        }),
        (t.extname = function (e) {
          'string' != typeof e && (e += '')
          for (
            var t = -1, r = 0, n = -1, i = !0, o = 0, s = e.length - 1;
            s >= 0;
            --s
          ) {
            var a = e.charCodeAt(s)
            if (47 !== a)
              -1 === n && ((i = !1), (n = s + 1)),
                46 === a
                  ? -1 === t
                    ? (t = s)
                    : 1 !== o && (o = 1)
                  : -1 !== t && (o = -1)
            else if (!i) {
              r = s + 1
              break
            }
          }
          return -1 === t ||
            -1 === n ||
            0 === o ||
            (1 === o && t === n - 1 && t === r + 1)
            ? ''
            : e.slice(t, n)
        })
      var i =
        'b' === 'ab'.substr(-1)
          ? function (e, t, r) {
              return e.substr(t, r)
            }
          : function (e, t, r) {
              return t < 0 && (t = e.length + t), e.substr(t, r)
            }
    }).call(this, r(1))
  },
  function (e, t, r) {
    var n = r(36),
      i = r(22),
      o = e.exports
    for (var s in n) n.hasOwnProperty(s) && (o[s] = n[s])
    function a(e) {
      if (
        ('string' == typeof e && (e = i.parse(e)),
        e.protocol || (e.protocol = 'https:'),
        'https:' !== e.protocol)
      )
        throw new Error(
          'Protocol "' + e.protocol + '" not supported. Expected "https:"'
        )
      return e
    }
    ;(o.request = function (e, t) {
      return (e = a(e)), n.request.call(this, e, t)
    }),
      (o.get = function (e, t) {
        return (e = a(e)), n.get.call(this, e, t)
      })
  },
  function (e, t, r) {
    ;(function (e) {
      var n = r(37),
        i = r(17),
        o = r(48),
        s = r(49),
        a = r(22),
        u = t
      ;(u.request = function (t, r) {
        t = 'string' == typeof t ? a.parse(t) : o(t)
        var i = -1 === e.location.protocol.search(/^https?:$/) ? 'http:' : '',
          s = t.protocol || i,
          u = t.hostname || t.host,
          f = t.port,
          c = t.path || '/'
        u && -1 !== u.indexOf(':') && (u = '[' + u + ']'),
          (t.url = (u ? s + '//' + u : '') + (f ? ':' + f : '') + c),
          (t.method = (t.method || 'GET').toUpperCase()),
          (t.headers = t.headers || {})
        var l = new n(t)
        return r && l.on('response', r), l
      }),
        (u.get = function (e, t) {
          var r = u.request(e, t)
          return r.end(), r
        }),
        (u.ClientRequest = n),
        (u.IncomingMessage = i.IncomingMessage),
        (u.Agent = function () {}),
        (u.Agent.defaultMaxSockets = 4),
        (u.globalAgent = new u.Agent()),
        (u.STATUS_CODES = s),
        (u.METHODS = [
          'CHECKOUT',
          'CONNECT',
          'COPY',
          'DELETE',
          'GET',
          'HEAD',
          'LOCK',
          'M-SEARCH',
          'MERGE',
          'MKACTIVITY',
          'MKCOL',
          'MOVE',
          'NOTIFY',
          'OPTIONS',
          'PATCH',
          'POST',
          'PROPFIND',
          'PROPPATCH',
          'PURGE',
          'PUT',
          'REPORT',
          'SEARCH',
          'SUBSCRIBE',
          'TRACE',
          'UNLOCK',
          'UNSUBSCRIBE',
        ])
    }).call(this, r(0))
  },
  function (e, t, r) {
    ;(function (t, n, i) {
      var o = r(16),
        s = r(2),
        a = r(17),
        u = r(5),
        f = r(47),
        c = a.IncomingMessage,
        l = a.readyStates
      var h = (e.exports = function (e) {
        var r,
          n = this
        u.Writable.call(n),
          (n._opts = e),
          (n._body = []),
          (n._headers = {}),
          e.auth &&
            n.setHeader(
              'Authorization',
              'Basic ' + new t(e.auth).toString('base64')
            ),
          Object.keys(e.headers).forEach(function (t) {
            n.setHeader(t, e.headers[t])
          })
        var i = !0
        if (
          'disable-fetch' === e.mode ||
          ('requestTimeout' in e && !o.abortController)
        )
          (i = !1), (r = !0)
        else if ('prefer-streaming' === e.mode) r = !1
        else if ('allow-wrong-content-type' === e.mode) r = !o.overrideMimeType
        else {
          if (e.mode && 'default' !== e.mode && 'prefer-fast' !== e.mode)
            throw new Error('Invalid value for opts.mode')
          r = !0
        }
        ;(n._mode = (function (e, t) {
          return o.fetch && t
            ? 'fetch'
            : o.mozchunkedarraybuffer
            ? 'moz-chunked-arraybuffer'
            : o.msstream
            ? 'ms-stream'
            : o.arraybuffer && e
            ? 'arraybuffer'
            : o.vbArray && e
            ? 'text:vbarray'
            : 'text'
        })(r, i)),
          (n._fetchTimer = null),
          n.on('finish', function () {
            n._onFinish()
          })
      })
      s(h, u.Writable),
        (h.prototype.setHeader = function (e, t) {
          var r = e.toLowerCase()
          ;-1 === p.indexOf(r) && (this._headers[r] = { name: e, value: t })
        }),
        (h.prototype.getHeader = function (e) {
          var t = this._headers[e.toLowerCase()]
          return t ? t.value : null
        }),
        (h.prototype.removeHeader = function (e) {
          delete this._headers[e.toLowerCase()]
        }),
        (h.prototype._onFinish = function () {
          var e = this
          if (!e._destroyed) {
            var r = e._opts,
              s = e._headers,
              a = null
            'GET' !== r.method &&
              'HEAD' !== r.method &&
              (a = o.arraybuffer
                ? f(t.concat(e._body))
                : o.blobConstructor
                ? new n.Blob(
                    e._body.map(function (e) {
                      return f(e)
                    }),
                    { type: (s['content-type'] || {}).value || '' }
                  )
                : t.concat(e._body).toString())
            var u = []
            if (
              (Object.keys(s).forEach(function (e) {
                var t = s[e].name,
                  r = s[e].value
                Array.isArray(r)
                  ? r.forEach(function (e) {
                      u.push([t, e])
                    })
                  : u.push([t, r])
              }),
              'fetch' === e._mode)
            ) {
              var c = null
              if (o.abortController) {
                var h = new AbortController()
                ;(c = h.signal),
                  (e._fetchAbortController = h),
                  'requestTimeout' in r &&
                    0 !== r.requestTimeout &&
                    (e._fetchTimer = n.setTimeout(function () {
                      e.emit('requestTimeout'),
                        e._fetchAbortController &&
                          e._fetchAbortController.abort()
                    }, r.requestTimeout))
              }
              n.fetch(e._opts.url, {
                method: e._opts.method,
                headers: u,
                body: a || void 0,
                mode: 'cors',
                credentials: r.withCredentials ? 'include' : 'same-origin',
                signal: c,
              }).then(
                function (t) {
                  ;(e._fetchResponse = t), e._connect()
                },
                function (t) {
                  n.clearTimeout(e._fetchTimer),
                    e._destroyed || e.emit('error', t)
                }
              )
            } else {
              var p = (e._xhr = new n.XMLHttpRequest())
              try {
                p.open(e._opts.method, e._opts.url, !0)
              } catch (t) {
                return void i.nextTick(function () {
                  e.emit('error', t)
                })
              }
              'responseType' in p && (p.responseType = e._mode.split(':')[0]),
                'withCredentials' in p &&
                  (p.withCredentials = !!r.withCredentials),
                'text' === e._mode &&
                  'overrideMimeType' in p &&
                  p.overrideMimeType('text/plain; charset=x-user-defined'),
                'requestTimeout' in r &&
                  ((p.timeout = r.requestTimeout),
                  (p.ontimeout = function () {
                    e.emit('requestTimeout')
                  })),
                u.forEach(function (e) {
                  p.setRequestHeader(e[0], e[1])
                }),
                (e._response = null),
                (p.onreadystatechange = function () {
                  switch (p.readyState) {
                    case l.LOADING:
                    case l.DONE:
                      e._onXHRProgress()
                  }
                }),
                'moz-chunked-arraybuffer' === e._mode &&
                  (p.onprogress = function () {
                    e._onXHRProgress()
                  }),
                (p.onerror = function () {
                  e._destroyed || e.emit('error', new Error('XHR error'))
                })
              try {
                p.send(a)
              } catch (t) {
                return void i.nextTick(function () {
                  e.emit('error', t)
                })
              }
            }
          }
        }),
        (h.prototype._onXHRProgress = function () {
          ;(function (e) {
            try {
              var t = e.status
              return null !== t && 0 !== t
            } catch (e) {
              return !1
            }
          })(this._xhr) &&
            !this._destroyed &&
            (this._response || this._connect(), this._response._onXHRProgress())
        }),
        (h.prototype._connect = function () {
          var e = this
          e._destroyed ||
            ((e._response = new c(
              e._xhr,
              e._fetchResponse,
              e._mode,
              e._fetchTimer
            )),
            e._response.on('error', function (t) {
              e.emit('error', t)
            }),
            e.emit('response', e._response))
        }),
        (h.prototype._write = function (e, t, r) {
          this._body.push(e), r()
        }),
        (h.prototype.abort = h.prototype.destroy =
          function () {
            ;(this._destroyed = !0),
              n.clearTimeout(this._fetchTimer),
              this._response && (this._response._destroyed = !0),
              this._xhr
                ? this._xhr.abort()
                : this._fetchAbortController &&
                  this._fetchAbortController.abort()
          }),
        (h.prototype.end = function (e, t, r) {
          'function' == typeof e && ((r = e), (e = void 0)),
            u.Writable.prototype.end.call(this, e, t, r)
        }),
        (h.prototype.flushHeaders = function () {}),
        (h.prototype.setTimeout = function () {}),
        (h.prototype.setNoDelay = function () {}),
        (h.prototype.setSocketKeepAlive = function () {})
      var p = [
        'accept-charset',
        'accept-encoding',
        'access-control-request-headers',
        'access-control-request-method',
        'connection',
        'content-length',
        'cookie',
        'cookie2',
        'date',
        'dnt',
        'expect',
        'host',
        'keep-alive',
        'origin',
        'referer',
        'te',
        'trailer',
        'transfer-encoding',
        'upgrade',
        'via',
      ]
    }).call(this, r(4).Buffer, r(0), r(1))
  },
  function (e, t, r) {
    'use strict'
    ;(t.byteLength = function (e) {
      var t = f(e),
        r = t[0],
        n = t[1]
      return (3 * (r + n)) / 4 - n
    }),
      (t.toByteArray = function (e) {
        var t,
          r,
          n = f(e),
          s = n[0],
          a = n[1],
          u = new o(
            (function (e, t, r) {
              return (3 * (t + r)) / 4 - r
            })(0, s, a)
          ),
          c = 0,
          l = a > 0 ? s - 4 : s
        for (r = 0; r < l; r += 4)
          (t =
            (i[e.charCodeAt(r)] << 18) |
            (i[e.charCodeAt(r + 1)] << 12) |
            (i[e.charCodeAt(r + 2)] << 6) |
            i[e.charCodeAt(r + 3)]),
            (u[c++] = (t >> 16) & 255),
            (u[c++] = (t >> 8) & 255),
            (u[c++] = 255 & t)
        2 === a &&
          ((t = (i[e.charCodeAt(r)] << 2) | (i[e.charCodeAt(r + 1)] >> 4)),
          (u[c++] = 255 & t))
        1 === a &&
          ((t =
            (i[e.charCodeAt(r)] << 10) |
            (i[e.charCodeAt(r + 1)] << 4) |
            (i[e.charCodeAt(r + 2)] >> 2)),
          (u[c++] = (t >> 8) & 255),
          (u[c++] = 255 & t))
        return u
      }),
      (t.fromByteArray = function (e) {
        for (
          var t, r = e.length, i = r % 3, o = [], s = 0, a = r - i;
          s < a;
          s += 16383
        )
          o.push(c(e, s, s + 16383 > a ? a : s + 16383))
        1 === i
          ? ((t = e[r - 1]), o.push(n[t >> 2] + n[(t << 4) & 63] + '=='))
          : 2 === i &&
            ((t = (e[r - 2] << 8) + e[r - 1]),
            o.push(n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + '='))
        return o.join('')
      })
    for (
      var n = [],
        i = [],
        o = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
        s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        a = 0,
        u = s.length;
      a < u;
      ++a
    )
      (n[a] = s[a]), (i[s.charCodeAt(a)] = a)
    function f(e) {
      var t = e.length
      if (t % 4 > 0)
        throw new Error('Invalid string. Length must be a multiple of 4')
      var r = e.indexOf('=')
      return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)]
    }
    function c(e, t, r) {
      for (var i, o, s = [], a = t; a < r; a += 3)
        (i =
          ((e[a] << 16) & 16711680) +
          ((e[a + 1] << 8) & 65280) +
          (255 & e[a + 2])),
          s.push(
            n[((o = i) >> 18) & 63] +
              n[(o >> 12) & 63] +
              n[(o >> 6) & 63] +
              n[63 & o]
          )
      return s.join('')
    }
    ;(i['-'.charCodeAt(0)] = 62), (i['_'.charCodeAt(0)] = 63)
  },
  function (e, t) {
    ;(t.read = function (e, t, r, n, i) {
      var o,
        s,
        a = 8 * i - n - 1,
        u = (1 << a) - 1,
        f = u >> 1,
        c = -7,
        l = r ? i - 1 : 0,
        h = r ? -1 : 1,
        p = e[t + l]
      for (
        l += h, o = p & ((1 << -c) - 1), p >>= -c, c += a;
        c > 0;
        o = 256 * o + e[t + l], l += h, c -= 8
      );
      for (
        s = o & ((1 << -c) - 1), o >>= -c, c += n;
        c > 0;
        s = 256 * s + e[t + l], l += h, c -= 8
      );
      if (0 === o) o = 1 - f
      else {
        if (o === u) return s ? NaN : (1 / 0) * (p ? -1 : 1)
        ;(s += Math.pow(2, n)), (o -= f)
      }
      return (p ? -1 : 1) * s * Math.pow(2, o - n)
    }),
      (t.write = function (e, t, r, n, i, o) {
        var s,
          a,
          u,
          f = 8 * o - i - 1,
          c = (1 << f) - 1,
          l = c >> 1,
          h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          p = n ? 0 : o - 1,
          d = n ? 1 : -1,
          y = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0
        for (
          t = Math.abs(t),
            isNaN(t) || t === 1 / 0
              ? ((a = isNaN(t) ? 1 : 0), (s = c))
              : ((s = Math.floor(Math.log(t) / Math.LN2)),
                t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                (t += s + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >= 2 &&
                  (s++, (u /= 2)),
                s + l >= c
                  ? ((a = 0), (s = c))
                  : s + l >= 1
                  ? ((a = (t * u - 1) * Math.pow(2, i)), (s += l))
                  : ((a = t * Math.pow(2, l - 1) * Math.pow(2, i)), (s = 0)));
          i >= 8;
          e[r + p] = 255 & a, p += d, a /= 256, i -= 8
        );
        for (
          s = (s << i) | a, f += i;
          f > 0;
          e[r + p] = 255 & s, p += d, s /= 256, f -= 8
        );
        e[r + p - d] |= 128 * y
      })
  },
  function (e, t) {},
  function (e, t, r) {
    'use strict'
    var n = r(8).Buffer,
      i = r(42)
    ;(e.exports = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function')
        })(this, e),
          (this.head = null),
          (this.tail = null),
          (this.length = 0)
      }
      return (
        (e.prototype.push = function (e) {
          var t = { data: e, next: null }
          this.length > 0 ? (this.tail.next = t) : (this.head = t),
            (this.tail = t),
            ++this.length
        }),
        (e.prototype.unshift = function (e) {
          var t = { data: e, next: this.head }
          0 === this.length && (this.tail = t), (this.head = t), ++this.length
        }),
        (e.prototype.shift = function () {
          if (0 !== this.length) {
            var e = this.head.data
            return (
              1 === this.length
                ? (this.head = this.tail = null)
                : (this.head = this.head.next),
              --this.length,
              e
            )
          }
        }),
        (e.prototype.clear = function () {
          ;(this.head = this.tail = null), (this.length = 0)
        }),
        (e.prototype.join = function (e) {
          if (0 === this.length) return ''
          for (var t = this.head, r = '' + t.data; (t = t.next); )
            r += e + t.data
          return r
        }),
        (e.prototype.concat = function (e) {
          if (0 === this.length) return n.alloc(0)
          if (1 === this.length) return this.head.data
          for (
            var t, r, i, o = n.allocUnsafe(e >>> 0), s = this.head, a = 0;
            s;

          )
            (t = s.data),
              (r = o),
              (i = a),
              t.copy(r, i),
              (a += s.data.length),
              (s = s.next)
          return o
        }),
        e
      )
    })()),
      i &&
        i.inspect &&
        i.inspect.custom &&
        (e.exports.prototype[i.inspect.custom] = function () {
          var e = i.inspect({ length: this.length })
          return this.constructor.name + ' ' + e
        })
  },
  function (e, t) {},
  function (e, t, r) {
    ;(function (e) {
      var n =
          (void 0 !== e && e) || ('undefined' != typeof self && self) || window,
        i = Function.prototype.apply
      function o(e, t) {
        ;(this._id = e), (this._clearFn = t)
      }
      ;(t.setTimeout = function () {
        return new o(i.call(setTimeout, n, arguments), clearTimeout)
      }),
        (t.setInterval = function () {
          return new o(i.call(setInterval, n, arguments), clearInterval)
        }),
        (t.clearTimeout = t.clearInterval =
          function (e) {
            e && e.close()
          }),
        (o.prototype.unref = o.prototype.ref = function () {}),
        (o.prototype.close = function () {
          this._clearFn.call(n, this._id)
        }),
        (t.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = t)
        }),
        (t.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1)
        }),
        (t._unrefActive = t.active =
          function (e) {
            clearTimeout(e._idleTimeoutId)
            var t = e._idleTimeout
            t >= 0 &&
              (e._idleTimeoutId = setTimeout(function () {
                e._onTimeout && e._onTimeout()
              }, t))
          }),
        r(44),
        (t.setImmediate =
          ('undefined' != typeof self && self.setImmediate) ||
          (void 0 !== e && e.setImmediate) ||
          (this && this.setImmediate)),
        (t.clearImmediate =
          ('undefined' != typeof self && self.clearImmediate) ||
          (void 0 !== e && e.clearImmediate) ||
          (this && this.clearImmediate))
    }).call(this, r(0))
  },
  function (e, t, r) {
    ;(function (e, t) {
      !(function (e, r) {
        'use strict'
        if (!e.setImmediate) {
          var n,
            i,
            o,
            s,
            a,
            u = 1,
            f = {},
            c = !1,
            l = e.document,
            h = Object.getPrototypeOf && Object.getPrototypeOf(e)
          ;(h = h && h.setTimeout ? h : e),
            '[object process]' === {}.toString.call(e.process)
              ? (n = function (e) {
                  t.nextTick(function () {
                    d(e)
                  })
                })
              : !(function () {
                  if (e.postMessage && !e.importScripts) {
                    var t = !0,
                      r = e.onmessage
                    return (
                      (e.onmessage = function () {
                        t = !1
                      }),
                      e.postMessage('', '*'),
                      (e.onmessage = r),
                      t
                    )
                  }
                })()
              ? e.MessageChannel
                ? (((o = new MessageChannel()).port1.onmessage = function (e) {
                    d(e.data)
                  }),
                  (n = function (e) {
                    o.port2.postMessage(e)
                  }))
                : l && 'onreadystatechange' in l.createElement('script')
                ? ((i = l.documentElement),
                  (n = function (e) {
                    var t = l.createElement('script')
                    ;(t.onreadystatechange = function () {
                      d(e),
                        (t.onreadystatechange = null),
                        i.removeChild(t),
                        (t = null)
                    }),
                      i.appendChild(t)
                  }))
                : (n = function (e) {
                    setTimeout(d, 0, e)
                  })
              : ((s = 'setImmediate$' + Math.random() + '$'),
                (a = function (t) {
                  t.source === e &&
                    'string' == typeof t.data &&
                    0 === t.data.indexOf(s) &&
                    d(+t.data.slice(s.length))
                }),
                e.addEventListener
                  ? e.addEventListener('message', a, !1)
                  : e.attachEvent('onmessage', a),
                (n = function (t) {
                  e.postMessage(s + t, '*')
                })),
            (h.setImmediate = function (e) {
              'function' != typeof e && (e = new Function('' + e))
              for (
                var t = new Array(arguments.length - 1), r = 0;
                r < t.length;
                r++
              )
                t[r] = arguments[r + 1]
              var i = { callback: e, args: t }
              return (f[u] = i), n(u), u++
            }),
            (h.clearImmediate = p)
        }
        function p(e) {
          delete f[e]
        }
        function d(e) {
          if (c) setTimeout(d, 0, e)
          else {
            var t = f[e]
            if (t) {
              c = !0
              try {
                !(function (e) {
                  var t = e.callback,
                    r = e.args
                  switch (r.length) {
                    case 0:
                      t()
                      break
                    case 1:
                      t(r[0])
                      break
                    case 2:
                      t(r[0], r[1])
                      break
                    case 3:
                      t(r[0], r[1], r[2])
                      break
                    default:
                      t.apply(void 0, r)
                  }
                })(t)
              } finally {
                p(e), (c = !1)
              }
            }
          }
        }
      })('undefined' == typeof self ? (void 0 === e ? this : e) : self)
    }).call(this, r(0), r(1))
  },
  function (e, t, r) {
    ;(function (t) {
      function r(e) {
        try {
          if (!t.localStorage) return !1
        } catch (e) {
          return !1
        }
        var r = t.localStorage[e]
        return null != r && 'true' === String(r).toLowerCase()
      }
      e.exports = function (e, t) {
        if (r('noDeprecation')) return e
        var n = !1
        return function () {
          if (!n) {
            if (r('throwDeprecation')) throw new Error(t)
            r('traceDeprecation') ? console.trace(t) : console.warn(t), (n = !0)
          }
          return e.apply(this, arguments)
        }
      }
    }).call(this, r(0))
  },
  function (e, t, r) {
    'use strict'
    e.exports = o
    var n = r(21),
      i = Object.create(r(6))
    function o(e) {
      if (!(this instanceof o)) return new o(e)
      n.call(this, e)
    }
    ;(i.inherits = r(2)),
      i.inherits(o, n),
      (o.prototype._transform = function (e, t, r) {
        r(null, e)
      })
  },
  function (e, t, r) {
    var n = r(4).Buffer
    e.exports = function (e) {
      if (e instanceof Uint8Array) {
        if (0 === e.byteOffset && e.byteLength === e.buffer.byteLength)
          return e.buffer
        if ('function' == typeof e.buffer.slice)
          return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
      }
      if (n.isBuffer(e)) {
        for (var t = new Uint8Array(e.length), r = e.length, i = 0; i < r; i++)
          t[i] = e[i]
        return t.buffer
      }
      throw new Error('Argument must be a Buffer')
    }
  },
  function (e, t) {
    e.exports = function () {
      for (var e = {}, t = 0; t < arguments.length; t++) {
        var n = arguments[t]
        for (var i in n) r.call(n, i) && (e[i] = n[i])
      }
      return e
    }
    var r = Object.prototype.hasOwnProperty
  },
  function (e, t) {
    e.exports = {
      100: 'Continue',
      101: 'Switching Protocols',
      102: 'Processing',
      200: 'OK',
      201: 'Created',
      202: 'Accepted',
      203: 'Non-Authoritative Information',
      204: 'No Content',
      205: 'Reset Content',
      206: 'Partial Content',
      207: 'Multi-Status',
      208: 'Already Reported',
      226: 'IM Used',
      300: 'Multiple Choices',
      301: 'Moved Permanently',
      302: 'Found',
      303: 'See Other',
      304: 'Not Modified',
      305: 'Use Proxy',
      307: 'Temporary Redirect',
      308: 'Permanent Redirect',
      400: 'Bad Request',
      401: 'Unauthorized',
      402: 'Payment Required',
      403: 'Forbidden',
      404: 'Not Found',
      405: 'Method Not Allowed',
      406: 'Not Acceptable',
      407: 'Proxy Authentication Required',
      408: 'Request Timeout',
      409: 'Conflict',
      410: 'Gone',
      411: 'Length Required',
      412: 'Precondition Failed',
      413: 'Payload Too Large',
      414: 'URI Too Long',
      415: 'Unsupported Media Type',
      416: 'Range Not Satisfiable',
      417: 'Expectation Failed',
      418: "I'm a teapot",
      421: 'Misdirected Request',
      422: 'Unprocessable Entity',
      423: 'Locked',
      424: 'Failed Dependency',
      425: 'Unordered Collection',
      426: 'Upgrade Required',
      428: 'Precondition Required',
      429: 'Too Many Requests',
      431: 'Request Header Fields Too Large',
      451: 'Unavailable For Legal Reasons',
      500: 'Internal Server Error',
      501: 'Not Implemented',
      502: 'Bad Gateway',
      503: 'Service Unavailable',
      504: 'Gateway Timeout',
      505: 'HTTP Version Not Supported',
      506: 'Variant Also Negotiates',
      507: 'Insufficient Storage',
      508: 'Loop Detected',
      509: 'Bandwidth Limit Exceeded',
      510: 'Not Extended',
      511: 'Network Authentication Required',
    }
  },
  function (e, t, r) {
    ;(function (e, n) {
      var i
      /*! https://mths.be/punycode v1.4.1 by @mathias */ !(function (o) {
        t && t.nodeType, e && e.nodeType
        var s = 'object' == typeof n && n
        s.global !== s && s.window !== s && s.self
        var a,
          u = 2147483647,
          f = /^xn--/,
          c = /[^\x20-\x7E]/,
          l = /[\x2E\u3002\uFF0E\uFF61]/g,
          h = {
            overflow: 'Overflow: input needs wider integers to process',
            'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
            'invalid-input': 'Invalid input',
          },
          p = Math.floor,
          d = String.fromCharCode
        function y(e) {
          throw new RangeError(h[e])
        }
        function g(e, t) {
          for (var r = e.length, n = []; r--; ) n[r] = t(e[r])
          return n
        }
        function v(e, t) {
          var r = e.split('@'),
            n = ''
          return (
            r.length > 1 && ((n = r[0] + '@'), (e = r[1])),
            n + g((e = e.replace(l, '.')).split('.'), t).join('.')
          )
        }
        function m(e) {
          for (var t, r, n = [], i = 0, o = e.length; i < o; )
            (t = e.charCodeAt(i++)) >= 55296 && t <= 56319 && i < o
              ? 56320 == (64512 & (r = e.charCodeAt(i++)))
                ? n.push(((1023 & t) << 10) + (1023 & r) + 65536)
                : (n.push(t), i--)
              : n.push(t)
          return n
        }
        function b(e) {
          return g(e, function (e) {
            var t = ''
            return (
              e > 65535 &&
                ((t += d((((e -= 65536) >>> 10) & 1023) | 55296)),
                (e = 56320 | (1023 & e))),
              (t += d(e))
            )
          }).join('')
        }
        function w(e, t) {
          return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
        }
        function _(e, t, r) {
          var n = 0
          for (e = r ? p(e / 700) : e >> 1, e += p(e / t); e > 455; n += 36)
            e = p(e / 35)
          return p(n + (36 * e) / (e + 38))
        }
        function S(e) {
          var t,
            r,
            n,
            i,
            o,
            s,
            a,
            f,
            c,
            l,
            h,
            d = [],
            g = e.length,
            v = 0,
            m = 128,
            w = 72
          for ((r = e.lastIndexOf('-')) < 0 && (r = 0), n = 0; n < r; ++n)
            e.charCodeAt(n) >= 128 && y('not-basic'), d.push(e.charCodeAt(n))
          for (i = r > 0 ? r + 1 : 0; i < g; ) {
            for (
              o = v, s = 1, a = 36;
              i >= g && y('invalid-input'),
                ((f =
                  (h = e.charCodeAt(i++)) - 48 < 10
                    ? h - 22
                    : h - 65 < 26
                    ? h - 65
                    : h - 97 < 26
                    ? h - 97
                    : 36) >= 36 ||
                  f > p((u - v) / s)) &&
                  y('overflow'),
                (v += f * s),
                !(f < (c = a <= w ? 1 : a >= w + 26 ? 26 : a - w));
              a += 36
            )
              s > p(u / (l = 36 - c)) && y('overflow'), (s *= l)
            ;(w = _(v - o, (t = d.length + 1), 0 == o)),
              p(v / t) > u - m && y('overflow'),
              (m += p(v / t)),
              (v %= t),
              d.splice(v++, 0, m)
          }
          return b(d)
        }
        function E(e) {
          var t,
            r,
            n,
            i,
            o,
            s,
            a,
            f,
            c,
            l,
            h,
            g,
            v,
            b,
            S,
            E = []
          for (g = (e = m(e)).length, t = 128, r = 0, o = 72, s = 0; s < g; ++s)
            (h = e[s]) < 128 && E.push(d(h))
          for (n = i = E.length, i && E.push('-'); n < g; ) {
            for (a = u, s = 0; s < g; ++s) (h = e[s]) >= t && h < a && (a = h)
            for (
              a - t > p((u - r) / (v = n + 1)) && y('overflow'),
                r += (a - t) * v,
                t = a,
                s = 0;
              s < g;
              ++s
            )
              if (((h = e[s]) < t && ++r > u && y('overflow'), h == t)) {
                for (
                  f = r, c = 36;
                  !(f < (l = c <= o ? 1 : c >= o + 26 ? 26 : c - o));
                  c += 36
                )
                  (S = f - l),
                    (b = 36 - l),
                    E.push(d(w(l + (S % b), 0))),
                    (f = p(S / b))
                E.push(d(w(f, 0))), (o = _(r, v, n == i)), (r = 0), ++n
              }
            ++r, ++t
          }
          return E.join('')
        }
        ;(a = {
          version: '1.4.1',
          ucs2: { decode: m, encode: b },
          decode: S,
          encode: E,
          toASCII: function (e) {
            return v(e, function (e) {
              return c.test(e) ? 'xn--' + E(e) : e
            })
          },
          toUnicode: function (e) {
            return v(e, function (e) {
              return f.test(e) ? S(e.slice(4).toLowerCase()) : e
            })
          },
        }),
          void 0 ===
            (i = function () {
              return a
            }.call(t, r, t, e)) || (e.exports = i)
      })()
    }).call(this, r(14)(e), r(0))
  },
  function (e, t, r) {
    'use strict'
    e.exports = {
      isString: function (e) {
        return 'string' == typeof e
      },
      isObject: function (e) {
        return 'object' == typeof e && null !== e
      },
      isNull: function (e) {
        return null === e
      },
      isNullOrUndefined: function (e) {
        return null == e
      },
    }
  },
  function (e, t, r) {
    'use strict'
    ;(t.decode = t.parse = r(53)), (t.encode = t.stringify = r(54))
  },
  function (e, t, r) {
    'use strict'
    function n(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }
    e.exports = function (e, t, r, o) {
      ;(t = t || '&'), (r = r || '=')
      var s = {}
      if ('string' != typeof e || 0 === e.length) return s
      var a = /\+/g
      e = e.split(t)
      var u = 1e3
      o && 'number' == typeof o.maxKeys && (u = o.maxKeys)
      var f = e.length
      u > 0 && f > u && (f = u)
      for (var c = 0; c < f; ++c) {
        var l,
          h,
          p,
          d,
          y = e[c].replace(a, '%20'),
          g = y.indexOf(r)
        g >= 0
          ? ((l = y.substr(0, g)), (h = y.substr(g + 1)))
          : ((l = y), (h = '')),
          (p = decodeURIComponent(l)),
          (d = decodeURIComponent(h)),
          n(s, p) ? (i(s[p]) ? s[p].push(d) : (s[p] = [s[p], d])) : (s[p] = d)
      }
      return s
    }
    var i =
      Array.isArray ||
      function (e) {
        return '[object Array]' === Object.prototype.toString.call(e)
      }
  },
  function (e, t, r) {
    'use strict'
    var n = function (e) {
      switch (typeof e) {
        case 'string':
          return e
        case 'boolean':
          return e ? 'true' : 'false'
        case 'number':
          return isFinite(e) ? e : ''
        default:
          return ''
      }
    }
    e.exports = function (e, t, r, a) {
      return (
        (t = t || '&'),
        (r = r || '='),
        null === e && (e = void 0),
        'object' == typeof e
          ? o(s(e), function (s) {
              var a = encodeURIComponent(n(s)) + r
              return i(e[s])
                ? o(e[s], function (e) {
                    return a + encodeURIComponent(n(e))
                  }).join(t)
                : a + encodeURIComponent(n(e[s]))
            }).join(t)
          : a
          ? encodeURIComponent(n(a)) + r + encodeURIComponent(n(e))
          : ''
      )
    }
    var i =
      Array.isArray ||
      function (e) {
        return '[object Array]' === Object.prototype.toString.call(e)
      }
    function o(e, t) {
      if (e.map) return e.map(t)
      for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n))
      return r
    }
    var s =
      Object.keys ||
      function (e) {
        var t = []
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r)
        return t
      }
  },
  function (e, t, r) {
    'use strict'
    ;(function (t) {
      var n = r(56),
        i = r(13),
        o = r(11).StringDecoder
      function s(e, t) {
        if (!(this instanceof s)) return new s(e, t)
        s.super_.call(this, t), this.init(e, t)
      }
      function a(e, t) {
        if (!(this instanceof a)) return new a(e, t)
        a.super_.call(this, t), this.init(e, t)
      }
      function u(e, t) {
        if (!(this instanceof u)) return new u(e, t)
        u.super_.call(this, t), this.init(e, t)
      }
      function f(e, t) {
        if (!(this instanceof f)) return new f(e, t)
        var r = !(t = t || {}).hasOwnProperty('readable') || t.readable,
          n = !t.hasOwnProperty('writable') || t.writable
        if (r && n) return new u(e, t)
        if (r) return new s(e, t)
        if (n) return new a(e, t)
        throw new Error('Unknown stream type  Readable, Writable or Duplex ')
      }
      i.inherits(s, n.Readable),
        i.inherits(a, n.Writable),
        i.inherits(u, n.Duplex),
        (s.prototype.init =
          a.prototype.init =
          u.prototype.init =
            function (e, r) {
              var n = this
              ;(this.queue = []),
                e &&
                  (Array.isArray(e) || (e = [e]),
                  e.forEach(function (e) {
                    e instanceof t || (e = new t(e)), n.queue.push(e)
                  })),
                (r = r || {}),
                (this.maxbufsize = r.hasOwnProperty('maxbufsize')
                  ? r.maxbufsize
                  : null),
                (this.bufoverflow = r.hasOwnProperty('bufoverflow')
                  ? r.bufoverflow
                  : null),
                (this.frequence = r.hasOwnProperty('frequence')
                  ? r.frequence
                  : null)
            }),
        (f.createReadStream = function (e, t) {
          return ((t = t || {}).readable = !0), (t.writable = !1), new f(e, t)
        }),
        (f.createWriteStream = function (e, t) {
          return ((t = t || {}).readable = !1), (t.writable = !0), new f(e, t)
        }),
        (s.prototype._read = u.prototype._read =
          function (e) {
            var t = this,
              r = t.frequence || 0,
              i = this instanceof n.Duplex && !this._writableState.finished
            this.queue.length || i
              ? this.queue.length &&
                setTimeout(function () {
                  if (t.queue.length) {
                    var e = t.queue.shift()
                    e &&
                      !t._readableState.ended &&
                      (t.push(e) || t.queue.unshift(e))
                  }
                }, r)
              : this.push(null)
          }),
        (a.prototype._write = u.prototype._write =
          function (e, t, r) {
            var i = null
            try {
              i = this.decodeStrings && t ? new o(t) : null
            } catch (e) {
              return r(e)
            }
            var s = i ? i.write(e) : e,
              a = this._getQueueSize(),
              u = s.length
            if (this.maxbufsize && a + u > this.maxbufsize)
              return this.bufoverflow
                ? r('Buffer overflowed (' + this.bufoverflow + '/' + a + ')')
                : r()
            if (this instanceof n.Duplex) {
              for (; this.queue.length; ) this.push(this.queue.shift())
              this.push(s)
            } else this.queue.push(s)
            r()
          }),
        (u.prototype.end = function (e, t, r) {
          var n = this
          return u.super_.prototype.end.call(this, e, t, function () {
            n.push(null), r && r()
          })
        }),
        (s.prototype._getQueueSize =
          a.prototype._getQueueSize =
          u.prototype._getQueueSize =
            function () {
              var e,
                t = 0
              for (e = 0; e < this.queue.length; e++)
                t += Array.isArray(this.queue[e])
                  ? this.queue[e][0].length
                  : this.queue[e].length
              return t
            }),
        (a.prototype.toString =
          u.prototype.toString =
          s.prototype.toString =
          a.prototype.getAll =
          u.prototype.getAll =
          s.prototype.getAll =
            function () {
              var e = ''
              return (
                this.queue.forEach(function (t) {
                  e += t
                }),
                e
              )
            }),
        (a.prototype.toBuffer =
          u.prototype.toBuffer =
          s.prototype.toBuffer =
            function () {
              var e = new t(this._getQueueSize()),
                r = 0
              return (
                this.queue.forEach(function (n) {
                  ;(n instanceof t ? n : new t(n)).copy(e, r), (r += n.length)
                }),
                e
              )
            }),
        (e.exports = f)
    }).call(this, r(4).Buffer)
  },
  function (e, t, r) {
    e.exports = i
    var n = r(9).EventEmitter
    function i() {
      n.call(this)
    }
    r(2)(i, n),
      (i.Readable = r(5)),
      (i.Writable = r(57)),
      (i.Duplex = r(58)),
      (i.Transform = r(59)),
      (i.PassThrough = r(60)),
      (i.Stream = i),
      (i.prototype.pipe = function (e, t) {
        var r = this
        function i(t) {
          e.writable && !1 === e.write(t) && r.pause && r.pause()
        }
        function o() {
          r.readable && r.resume && r.resume()
        }
        r.on('data', i),
          e.on('drain', o),
          e._isStdio ||
            (t && !1 === t.end) ||
            (r.on('end', a), r.on('close', u))
        var s = !1
        function a() {
          s || ((s = !0), e.end())
        }
        function u() {
          s || ((s = !0), 'function' == typeof e.destroy && e.destroy())
        }
        function f(e) {
          if ((c(), 0 === n.listenerCount(this, 'error'))) throw e
        }
        function c() {
          r.removeListener('data', i),
            e.removeListener('drain', o),
            r.removeListener('end', a),
            r.removeListener('close', u),
            r.removeListener('error', f),
            e.removeListener('error', f),
            r.removeListener('end', c),
            r.removeListener('close', c),
            e.removeListener('close', c)
        }
        return (
          r.on('error', f),
          e.on('error', f),
          r.on('end', c),
          r.on('close', c),
          e.on('close', c),
          e.emit('pipe', r),
          e
        )
      })
  },
  function (e, t, r) {
    e.exports = r(10)
  },
  function (e, t, r) {
    e.exports = r(3)
  },
  function (e, t, r) {
    e.exports = r(5).Transform
  },
  function (e, t, r) {
    e.exports = r(5).PassThrough
  },
  function (e, t, r) {
    ;(function (r) {
      var n
      ;(t = e.exports = J),
        (n =
          'object' == typeof r &&
          r.env &&
          r.env.NODE_DEBUG &&
          /\bsemver\b/i.test(r.env.NODE_DEBUG)
            ? function () {
                var e = Array.prototype.slice.call(arguments, 0)
                e.unshift('SEMVER'), console.log.apply(console, e)
              }
            : function () {}),
        (t.SEMVER_SPEC_VERSION = '2.0.0')
      var i = Number.MAX_SAFE_INTEGER || 9007199254740991,
        o = (t.re = []),
        s = (t.src = []),
        a = 0,
        u = a++
      s[u] = '0|[1-9]\\d*'
      var f = a++
      s[f] = '[0-9]+'
      var c = a++
      s[c] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'
      var l = a++
      s[l] = '(' + s[u] + ')\\.(' + s[u] + ')\\.(' + s[u] + ')'
      var h = a++
      s[h] = '(' + s[f] + ')\\.(' + s[f] + ')\\.(' + s[f] + ')'
      var p = a++
      s[p] = '(?:' + s[u] + '|' + s[c] + ')'
      var d = a++
      s[d] = '(?:' + s[f] + '|' + s[c] + ')'
      var y = a++
      s[y] = '(?:-(' + s[p] + '(?:\\.' + s[p] + ')*))'
      var g = a++
      s[g] = '(?:-?(' + s[d] + '(?:\\.' + s[d] + ')*))'
      var v = a++
      s[v] = '[0-9A-Za-z-]+'
      var m = a++
      s[m] = '(?:\\+(' + s[v] + '(?:\\.' + s[v] + ')*))'
      var b = a++,
        w = 'v?' + s[l] + s[y] + '?' + s[m] + '?'
      s[b] = '^' + w + '$'
      var _ = '[v=\\s]*' + s[h] + s[g] + '?' + s[m] + '?',
        S = a++
      s[S] = '^' + _ + '$'
      var E = a++
      s[E] = '((?:<|>)?=?)'
      var x = a++
      s[x] = s[f] + '|x|X|\\*'
      var A = a++
      s[A] = s[u] + '|x|X|\\*'
      var O = a++
      s[O] =
        '[v=\\s]*(' +
        s[A] +
        ')(?:\\.(' +
        s[A] +
        ')(?:\\.(' +
        s[A] +
        ')(?:' +
        s[y] +
        ')?' +
        s[m] +
        '?)?)?'
      var T = a++
      s[T] =
        '[v=\\s]*(' +
        s[x] +
        ')(?:\\.(' +
        s[x] +
        ')(?:\\.(' +
        s[x] +
        ')(?:' +
        s[g] +
        ')?' +
        s[m] +
        '?)?)?'
      var j = a++
      s[j] = '^' + s[E] + '\\s*' + s[O] + '$'
      var R = a++
      s[R] = '^' + s[E] + '\\s*' + s[T] + '$'
      var k = a++
      s[k] =
        '(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])'
      var C = a++
      s[C] = '(?:~>?)'
      var P = a++
      ;(s[P] = '(\\s*)' + s[C] + '\\s+'), (o[P] = new RegExp(s[P], 'g'))
      var M = a++
      s[M] = '^' + s[C] + s[O] + '$'
      var B = a++
      s[B] = '^' + s[C] + s[T] + '$'
      var L = a++
      s[L] = '(?:\\^)'
      var I = a++
      ;(s[I] = '(\\s*)' + s[L] + '\\s+'), (o[I] = new RegExp(s[I], 'g'))
      var N = a++
      s[N] = '^' + s[L] + s[O] + '$'
      var U = a++
      s[U] = '^' + s[L] + s[T] + '$'
      var q = a++
      s[q] = '^' + s[E] + '\\s*(' + _ + ')$|^$'
      var D = a++
      s[D] = '^' + s[E] + '\\s*(' + w + ')$|^$'
      var F = a++
      ;(s[F] = '(\\s*)' + s[E] + '\\s*(' + _ + '|' + s[O] + ')'),
        (o[F] = new RegExp(s[F], 'g'))
      var z = a++
      s[z] = '^\\s*(' + s[O] + ')\\s+-\\s+(' + s[O] + ')\\s*$'
      var H = a++
      s[H] = '^\\s*(' + s[T] + ')\\s+-\\s+(' + s[T] + ')\\s*$'
      var Y = a++
      s[Y] = '(<|>)?=?\\s*\\*'
      for (var W = 0; W < 35; W++) n(W, s[W]), o[W] || (o[W] = new RegExp(s[W]))
      function $(e, t) {
        if (
          ((t && 'object' == typeof t) ||
            (t = { loose: !!t, includePrerelease: !1 }),
          e instanceof J)
        )
          return e
        if ('string' != typeof e) return null
        if (e.length > 256) return null
        if (!(t.loose ? o[S] : o[b]).test(e)) return null
        try {
          return new J(e, t)
        } catch (e) {
          return null
        }
      }
      function J(e, t) {
        if (
          ((t && 'object' == typeof t) ||
            (t = { loose: !!t, includePrerelease: !1 }),
          e instanceof J)
        ) {
          if (e.loose === t.loose) return e
          e = e.version
        } else if ('string' != typeof e)
          throw new TypeError('Invalid Version: ' + e)
        if (e.length > 256)
          throw new TypeError('version is longer than 256 characters')
        if (!(this instanceof J)) return new J(e, t)
        n('SemVer', e, t), (this.options = t), (this.loose = !!t.loose)
        var r = e.trim().match(t.loose ? o[S] : o[b])
        if (!r) throw new TypeError('Invalid Version: ' + e)
        if (
          ((this.raw = e),
          (this.major = +r[1]),
          (this.minor = +r[2]),
          (this.patch = +r[3]),
          this.major > i || this.major < 0)
        )
          throw new TypeError('Invalid major version')
        if (this.minor > i || this.minor < 0)
          throw new TypeError('Invalid minor version')
        if (this.patch > i || this.patch < 0)
          throw new TypeError('Invalid patch version')
        r[4]
          ? (this.prerelease = r[4].split('.').map(function (e) {
              if (/^[0-9]+$/.test(e)) {
                var t = +e
                if (t >= 0 && t < i) return t
              }
              return e
            }))
          : (this.prerelease = []),
          (this.build = r[5] ? r[5].split('.') : []),
          this.format()
      }
      ;(t.parse = $),
        (t.valid = function (e, t) {
          var r = $(e, t)
          return r ? r.version : null
        }),
        (t.clean = function (e, t) {
          var r = $(e.trim().replace(/^[=v]+/, ''), t)
          return r ? r.version : null
        }),
        (t.SemVer = J),
        (J.prototype.format = function () {
          return (
            (this.version = this.major + '.' + this.minor + '.' + this.patch),
            this.prerelease.length &&
              (this.version += '-' + this.prerelease.join('.')),
            this.version
          )
        }),
        (J.prototype.toString = function () {
          return this.version
        }),
        (J.prototype.compare = function (e) {
          return (
            n('SemVer.compare', this.version, this.options, e),
            e instanceof J || (e = new J(e, this.options)),
            this.compareMain(e) || this.comparePre(e)
          )
        }),
        (J.prototype.compareMain = function (e) {
          return (
            e instanceof J || (e = new J(e, this.options)),
            G(this.major, e.major) ||
              G(this.minor, e.minor) ||
              G(this.patch, e.patch)
          )
        }),
        (J.prototype.comparePre = function (e) {
          if (
            (e instanceof J || (e = new J(e, this.options)),
            this.prerelease.length && !e.prerelease.length)
          )
            return -1
          if (!this.prerelease.length && e.prerelease.length) return 1
          if (!this.prerelease.length && !e.prerelease.length) return 0
          var t = 0
          do {
            var r = this.prerelease[t],
              i = e.prerelease[t]
            if (
              (n('prerelease compare', t, r, i), void 0 === r && void 0 === i)
            )
              return 0
            if (void 0 === i) return 1
            if (void 0 === r) return -1
            if (r !== i) return G(r, i)
          } while (++t)
        }),
        (J.prototype.inc = function (e, t) {
          switch (e) {
            case 'premajor':
              ;(this.prerelease.length = 0),
                (this.patch = 0),
                (this.minor = 0),
                this.major++,
                this.inc('pre', t)
              break
            case 'preminor':
              ;(this.prerelease.length = 0),
                (this.patch = 0),
                this.minor++,
                this.inc('pre', t)
              break
            case 'prepatch':
              ;(this.prerelease.length = 0),
                this.inc('patch', t),
                this.inc('pre', t)
              break
            case 'prerelease':
              0 === this.prerelease.length && this.inc('patch', t),
                this.inc('pre', t)
              break
            case 'major':
              ;(0 === this.minor &&
                0 === this.patch &&
                0 !== this.prerelease.length) ||
                this.major++,
                (this.minor = 0),
                (this.patch = 0),
                (this.prerelease = [])
              break
            case 'minor':
              ;(0 === this.patch && 0 !== this.prerelease.length) ||
                this.minor++,
                (this.patch = 0),
                (this.prerelease = [])
              break
            case 'patch':
              0 === this.prerelease.length && this.patch++,
                (this.prerelease = [])
              break
            case 'pre':
              if (0 === this.prerelease.length) this.prerelease = [0]
              else {
                for (var r = this.prerelease.length; --r >= 0; )
                  'number' == typeof this.prerelease[r] &&
                    (this.prerelease[r]++, (r = -2))
                ;-1 === r && this.prerelease.push(0)
              }
              t &&
                (this.prerelease[0] === t
                  ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0])
                  : (this.prerelease = [t, 0]))
              break
            default:
              throw new Error('invalid increment argument: ' + e)
          }
          return this.format(), (this.raw = this.version), this
        }),
        (t.inc = function (e, t, r, n) {
          'string' == typeof r && ((n = r), (r = void 0))
          try {
            return new J(e, r).inc(t, n).version
          } catch (e) {
            return null
          }
        }),
        (t.diff = function (e, t) {
          if (Q(e, t)) return null
          var r = $(e),
            n = $(t),
            i = ''
          if (r.prerelease.length || n.prerelease.length) {
            i = 'pre'
            var o = 'prerelease'
          }
          for (var s in r)
            if (
              ('major' === s || 'minor' === s || 'patch' === s) &&
              r[s] !== n[s]
            )
              return i + s
          return o
        }),
        (t.compareIdentifiers = G)
      var V = /^[0-9]+$/
      function G(e, t) {
        var r = V.test(e),
          n = V.test(t)
        return (
          r && n && ((e = +e), (t = +t)),
          e === t ? 0 : r && !n ? -1 : n && !r ? 1 : e < t ? -1 : 1
        )
      }
      function X(e, t, r) {
        return new J(e, r).compare(new J(t, r))
      }
      function K(e, t, r) {
        return X(e, t, r) > 0
      }
      function Z(e, t, r) {
        return X(e, t, r) < 0
      }
      function Q(e, t, r) {
        return 0 === X(e, t, r)
      }
      function ee(e, t, r) {
        return 0 !== X(e, t, r)
      }
      function te(e, t, r) {
        return X(e, t, r) >= 0
      }
      function re(e, t, r) {
        return X(e, t, r) <= 0
      }
      function ne(e, t, r, n) {
        switch (t) {
          case '===':
            return (
              'object' == typeof e && (e = e.version),
              'object' == typeof r && (r = r.version),
              e === r
            )
          case '!==':
            return (
              'object' == typeof e && (e = e.version),
              'object' == typeof r && (r = r.version),
              e !== r
            )
          case '':
          case '=':
          case '==':
            return Q(e, r, n)
          case '!=':
            return ee(e, r, n)
          case '>':
            return K(e, r, n)
          case '>=':
            return te(e, r, n)
          case '<':
            return Z(e, r, n)
          case '<=':
            return re(e, r, n)
          default:
            throw new TypeError('Invalid operator: ' + t)
        }
      }
      function ie(e, t) {
        if (
          ((t && 'object' == typeof t) ||
            (t = { loose: !!t, includePrerelease: !1 }),
          e instanceof ie)
        ) {
          if (e.loose === !!t.loose) return e
          e = e.value
        }
        if (!(this instanceof ie)) return new ie(e, t)
        n('comparator', e, t),
          (this.options = t),
          (this.loose = !!t.loose),
          this.parse(e),
          this.semver === oe
            ? (this.value = '')
            : (this.value = this.operator + this.semver.version),
          n('comp', this)
      }
      ;(t.rcompareIdentifiers = function (e, t) {
        return G(t, e)
      }),
        (t.major = function (e, t) {
          return new J(e, t).major
        }),
        (t.minor = function (e, t) {
          return new J(e, t).minor
        }),
        (t.patch = function (e, t) {
          return new J(e, t).patch
        }),
        (t.compare = X),
        (t.compareLoose = function (e, t) {
          return X(e, t, !0)
        }),
        (t.rcompare = function (e, t, r) {
          return X(t, e, r)
        }),
        (t.sort = function (e, r) {
          return e.sort(function (e, n) {
            return t.compare(e, n, r)
          })
        }),
        (t.rsort = function (e, r) {
          return e.sort(function (e, n) {
            return t.rcompare(e, n, r)
          })
        }),
        (t.gt = K),
        (t.lt = Z),
        (t.eq = Q),
        (t.neq = ee),
        (t.gte = te),
        (t.lte = re),
        (t.cmp = ne),
        (t.Comparator = ie)
      var oe = {}
      function se(e, t) {
        if (
          ((t && 'object' == typeof t) ||
            (t = { loose: !!t, includePrerelease: !1 }),
          e instanceof se)
        )
          return e.loose === !!t.loose &&
            e.includePrerelease === !!t.includePrerelease
            ? e
            : new se(e.raw, t)
        if (e instanceof ie) return new se(e.value, t)
        if (!(this instanceof se)) return new se(e, t)
        if (
          ((this.options = t),
          (this.loose = !!t.loose),
          (this.includePrerelease = !!t.includePrerelease),
          (this.raw = e),
          (this.set = e
            .split(/\s*\|\|\s*/)
            .map(function (e) {
              return this.parseRange(e.trim())
            }, this)
            .filter(function (e) {
              return e.length
            })),
          !this.set.length)
        )
          throw new TypeError('Invalid SemVer Range: ' + e)
        this.format()
      }
      function ae(e) {
        return !e || 'x' === e.toLowerCase() || '*' === e
      }
      function ue(e, t, r, n, i, o, s, a, u, f, c, l, h) {
        return (
          (t = ae(r)
            ? ''
            : ae(n)
            ? '>=' + r + '.0.0'
            : ae(i)
            ? '>=' + r + '.' + n + '.0'
            : '>=' + t) +
          ' ' +
          (a = ae(u)
            ? ''
            : ae(f)
            ? '<' + (+u + 1) + '.0.0'
            : ae(c)
            ? '<' + u + '.' + (+f + 1) + '.0'
            : l
            ? '<=' + u + '.' + f + '.' + c + '-' + l
            : '<=' + a)
        ).trim()
      }
      function fe(e, t, r) {
        for (var i = 0; i < e.length; i++) if (!e[i].test(t)) return !1
        if (t.prerelease.length && !r.includePrerelease) {
          for (i = 0; i < e.length; i++)
            if (
              (n(e[i].semver),
              e[i].semver !== oe && e[i].semver.prerelease.length > 0)
            ) {
              var o = e[i].semver
              if (
                o.major === t.major &&
                o.minor === t.minor &&
                o.patch === t.patch
              )
                return !0
            }
          return !1
        }
        return !0
      }
      function ce(e, t, r) {
        try {
          t = new se(t, r)
        } catch (e) {
          return !1
        }
        return t.test(e)
      }
      function le(e, t, r, n) {
        var i, o, s, a, u
        switch (((e = new J(e, n)), (t = new se(t, n)), r)) {
          case '>':
            ;(i = K), (o = re), (s = Z), (a = '>'), (u = '>=')
            break
          case '<':
            ;(i = Z), (o = te), (s = K), (a = '<'), (u = '<=')
            break
          default:
            throw new TypeError('Must provide a hilo val of "<" or ">"')
        }
        if (ce(e, t, n)) return !1
        for (var f = 0; f < t.set.length; ++f) {
          var c = t.set[f],
            l = null,
            h = null
          if (
            (c.forEach(function (e) {
              e.semver === oe && (e = new ie('>=0.0.0')),
                (l = l || e),
                (h = h || e),
                i(e.semver, l.semver, n)
                  ? (l = e)
                  : s(e.semver, h.semver, n) && (h = e)
            }),
            l.operator === a || l.operator === u)
          )
            return !1
          if ((!h.operator || h.operator === a) && o(e, h.semver)) return !1
          if (h.operator === u && s(e, h.semver)) return !1
        }
        return !0
      }
      ;(ie.prototype.parse = function (e) {
        var t = this.options.loose ? o[q] : o[D],
          r = e.match(t)
        if (!r) throw new TypeError('Invalid comparator: ' + e)
        ;(this.operator = r[1]),
          '=' === this.operator && (this.operator = ''),
          r[2]
            ? (this.semver = new J(r[2], this.options.loose))
            : (this.semver = oe)
      }),
        (ie.prototype.toString = function () {
          return this.value
        }),
        (ie.prototype.test = function (e) {
          return (
            n('Comparator.test', e, this.options.loose),
            this.semver === oe ||
              ('string' == typeof e && (e = new J(e, this.options)),
              ne(e, this.operator, this.semver, this.options))
          )
        }),
        (ie.prototype.intersects = function (e, t) {
          if (!(e instanceof ie))
            throw new TypeError('a Comparator is required')
          var r
          if (
            ((t && 'object' == typeof t) ||
              (t = { loose: !!t, includePrerelease: !1 }),
            '' === this.operator)
          )
            return (r = new se(e.value, t)), ce(this.value, r, t)
          if ('' === e.operator)
            return (r = new se(this.value, t)), ce(e.semver, r, t)
          var n = !(
              ('>=' !== this.operator && '>' !== this.operator) ||
              ('>=' !== e.operator && '>' !== e.operator)
            ),
            i = !(
              ('<=' !== this.operator && '<' !== this.operator) ||
              ('<=' !== e.operator && '<' !== e.operator)
            ),
            o = this.semver.version === e.semver.version,
            s = !(
              ('>=' !== this.operator && '<=' !== this.operator) ||
              ('>=' !== e.operator && '<=' !== e.operator)
            ),
            a =
              ne(this.semver, '<', e.semver, t) &&
              ('>=' === this.operator || '>' === this.operator) &&
              ('<=' === e.operator || '<' === e.operator),
            u =
              ne(this.semver, '>', e.semver, t) &&
              ('<=' === this.operator || '<' === this.operator) &&
              ('>=' === e.operator || '>' === e.operator)
          return n || i || (o && s) || a || u
        }),
        (t.Range = se),
        (se.prototype.format = function () {
          return (
            (this.range = this.set
              .map(function (e) {
                return e.join(' ').trim()
              })
              .join('||')
              .trim()),
            this.range
          )
        }),
        (se.prototype.toString = function () {
          return this.range
        }),
        (se.prototype.parseRange = function (e) {
          var t = this.options.loose
          e = e.trim()
          var r = t ? o[H] : o[z]
          ;(e = e.replace(r, ue)),
            n('hyphen replace', e),
            (e = e.replace(o[F], '$1$2$3')),
            n('comparator trim', e, o[F]),
            (e = (e = (e = e.replace(o[P], '$1~')).replace(o[I], '$1^'))
              .split(/\s+/)
              .join(' '))
          var i = t ? o[q] : o[D],
            s = e
              .split(' ')
              .map(function (e) {
                return (function (e, t) {
                  return (
                    n('comp', e, t),
                    (e = (function (e, t) {
                      return e
                        .trim()
                        .split(/\s+/)
                        .map(function (e) {
                          return (function (e, t) {
                            n('caret', e, t)
                            var r = t.loose ? o[U] : o[N]
                            return e.replace(r, function (t, r, i, o, s) {
                              var a
                              return (
                                n('caret', e, t, r, i, o, s),
                                ae(r)
                                  ? (a = '')
                                  : ae(i)
                                  ? (a =
                                      '>=' + r + '.0.0 <' + (+r + 1) + '.0.0')
                                  : ae(o)
                                  ? (a =
                                      '0' === r
                                        ? '>=' +
                                          r +
                                          '.' +
                                          i +
                                          '.0 <' +
                                          r +
                                          '.' +
                                          (+i + 1) +
                                          '.0'
                                        : '>=' +
                                          r +
                                          '.' +
                                          i +
                                          '.0 <' +
                                          (+r + 1) +
                                          '.0.0')
                                  : s
                                  ? (n('replaceCaret pr', s),
                                    (a =
                                      '0' === r
                                        ? '0' === i
                                          ? '>=' +
                                            r +
                                            '.' +
                                            i +
                                            '.' +
                                            o +
                                            '-' +
                                            s +
                                            ' <' +
                                            r +
                                            '.' +
                                            i +
                                            '.' +
                                            (+o + 1)
                                          : '>=' +
                                            r +
                                            '.' +
                                            i +
                                            '.' +
                                            o +
                                            '-' +
                                            s +
                                            ' <' +
                                            r +
                                            '.' +
                                            (+i + 1) +
                                            '.0'
                                        : '>=' +
                                          r +
                                          '.' +
                                          i +
                                          '.' +
                                          o +
                                          '-' +
                                          s +
                                          ' <' +
                                          (+r + 1) +
                                          '.0.0'))
                                  : (n('no pr'),
                                    (a =
                                      '0' === r
                                        ? '0' === i
                                          ? '>=' +
                                            r +
                                            '.' +
                                            i +
                                            '.' +
                                            o +
                                            ' <' +
                                            r +
                                            '.' +
                                            i +
                                            '.' +
                                            (+o + 1)
                                          : '>=' +
                                            r +
                                            '.' +
                                            i +
                                            '.' +
                                            o +
                                            ' <' +
                                            r +
                                            '.' +
                                            (+i + 1) +
                                            '.0'
                                        : '>=' +
                                          r +
                                          '.' +
                                          i +
                                          '.' +
                                          o +
                                          ' <' +
                                          (+r + 1) +
                                          '.0.0')),
                                n('caret return', a),
                                a
                              )
                            })
                          })(e, t)
                        })
                        .join(' ')
                    })(e, t)),
                    n('caret', e),
                    (e = (function (e, t) {
                      return e
                        .trim()
                        .split(/\s+/)
                        .map(function (e) {
                          return (function (e, t) {
                            var r = t.loose ? o[B] : o[M]
                            return e.replace(r, function (t, r, i, o, s) {
                              var a
                              return (
                                n('tilde', e, t, r, i, o, s),
                                ae(r)
                                  ? (a = '')
                                  : ae(i)
                                  ? (a =
                                      '>=' + r + '.0.0 <' + (+r + 1) + '.0.0')
                                  : ae(o)
                                  ? (a =
                                      '>=' +
                                      r +
                                      '.' +
                                      i +
                                      '.0 <' +
                                      r +
                                      '.' +
                                      (+i + 1) +
                                      '.0')
                                  : s
                                  ? (n('replaceTilde pr', s),
                                    (a =
                                      '>=' +
                                      r +
                                      '.' +
                                      i +
                                      '.' +
                                      o +
                                      '-' +
                                      s +
                                      ' <' +
                                      r +
                                      '.' +
                                      (+i + 1) +
                                      '.0'))
                                  : (a =
                                      '>=' +
                                      r +
                                      '.' +
                                      i +
                                      '.' +
                                      o +
                                      ' <' +
                                      r +
                                      '.' +
                                      (+i + 1) +
                                      '.0'),
                                n('tilde return', a),
                                a
                              )
                            })
                          })(e, t)
                        })
                        .join(' ')
                    })(e, t)),
                    n('tildes', e),
                    (e = (function (e, t) {
                      return (
                        n('replaceXRanges', e, t),
                        e
                          .split(/\s+/)
                          .map(function (e) {
                            return (function (e, t) {
                              e = e.trim()
                              var r = t.loose ? o[R] : o[j]
                              return e.replace(r, function (t, r, i, o, s, a) {
                                n('xRange', e, t, r, i, o, s, a)
                                var u = ae(i),
                                  f = u || ae(o),
                                  c = f || ae(s)
                                return (
                                  '=' === r && c && (r = ''),
                                  u
                                    ? (t =
                                        '>' === r || '<' === r ? '<0.0.0' : '*')
                                    : r && c
                                    ? (f && (o = 0),
                                      (s = 0),
                                      '>' === r
                                        ? ((r = '>='),
                                          f
                                            ? ((i = +i + 1), (o = 0), (s = 0))
                                            : ((o = +o + 1), (s = 0)))
                                        : '<=' === r &&
                                          ((r = '<'),
                                          f ? (i = +i + 1) : (o = +o + 1)),
                                      (t = r + i + '.' + o + '.' + s))
                                    : f
                                    ? (t =
                                        '>=' + i + '.0.0 <' + (+i + 1) + '.0.0')
                                    : c &&
                                      (t =
                                        '>=' +
                                        i +
                                        '.' +
                                        o +
                                        '.0 <' +
                                        i +
                                        '.' +
                                        (+o + 1) +
                                        '.0'),
                                  n('xRange return', t),
                                  t
                                )
                              })
                            })(e, t)
                          })
                          .join(' ')
                      )
                    })(e, t)),
                    n('xrange', e),
                    (e = (function (e, t) {
                      return n('replaceStars', e, t), e.trim().replace(o[Y], '')
                    })(e, t)),
                    n('stars', e),
                    e
                  )
                })(e, this.options)
              }, this)
              .join(' ')
              .split(/\s+/)
          return (
            this.options.loose &&
              (s = s.filter(function (e) {
                return !!e.match(i)
              })),
            (s = s.map(function (e) {
              return new ie(e, this.options)
            }, this))
          )
        }),
        (se.prototype.intersects = function (e, t) {
          if (!(e instanceof se)) throw new TypeError('a Range is required')
          return this.set.some(function (r) {
            return r.every(function (r) {
              return e.set.some(function (e) {
                return e.every(function (e) {
                  return r.intersects(e, t)
                })
              })
            })
          })
        }),
        (t.toComparators = function (e, t) {
          return new se(e, t).set.map(function (e) {
            return e
              .map(function (e) {
                return e.value
              })
              .join(' ')
              .trim()
              .split(' ')
          })
        }),
        (se.prototype.test = function (e) {
          if (!e) return !1
          'string' == typeof e && (e = new J(e, this.options))
          for (var t = 0; t < this.set.length; t++)
            if (fe(this.set[t], e, this.options)) return !0
          return !1
        }),
        (t.satisfies = ce),
        (t.maxSatisfying = function (e, t, r) {
          var n = null,
            i = null
          try {
            var o = new se(t, r)
          } catch (e) {
            return null
          }
          return (
            e.forEach(function (e) {
              o.test(e) &&
                ((n && -1 !== i.compare(e)) || (i = new J((n = e), r)))
            }),
            n
          )
        }),
        (t.minSatisfying = function (e, t, r) {
          var n = null,
            i = null
          try {
            var o = new se(t, r)
          } catch (e) {
            return null
          }
          return (
            e.forEach(function (e) {
              o.test(e) &&
                ((n && 1 !== i.compare(e)) || (i = new J((n = e), r)))
            }),
            n
          )
        }),
        (t.minVersion = function (e, t) {
          e = new se(e, t)
          var r = new J('0.0.0')
          if (e.test(r)) return r
          if (((r = new J('0.0.0-0')), e.test(r))) return r
          r = null
          for (var n = 0; n < e.set.length; ++n) {
            e.set[n].forEach(function (e) {
              var t = new J(e.semver.version)
              switch (e.operator) {
                case '>':
                  0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0),
                    (t.raw = t.format())
                case '':
                case '>=':
                  ;(r && !K(r, t)) || (r = t)
                  break
                case '<':
                case '<=':
                  break
                default:
                  throw new Error('Unexpected operation: ' + e.operator)
              }
            })
          }
          if (r && e.test(r)) return r
          return null
        }),
        (t.validRange = function (e, t) {
          try {
            return new se(e, t).range || '*'
          } catch (e) {
            return null
          }
        }),
        (t.ltr = function (e, t, r) {
          return le(e, t, '<', r)
        }),
        (t.gtr = function (e, t, r) {
          return le(e, t, '>', r)
        }),
        (t.outside = le),
        (t.prerelease = function (e, t) {
          var r = $(e, t)
          return r && r.prerelease.length ? r.prerelease : null
        }),
        (t.intersects = function (e, t, r) {
          return (e = new se(e, r)), (t = new se(t, r)), e.intersects(t)
        }),
        (t.coerce = function (e) {
          if (e instanceof J) return e
          if ('string' != typeof e) return null
          var t = e.match(o[k])
          if (null == t) return null
          return $(t[1] + '.' + (t[2] || '0') + '.' + (t[3] || '0'))
        })
    }).call(this, r(1))
  },
])
