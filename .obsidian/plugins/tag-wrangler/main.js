var Rn = Object.create;
var Ie = Object.defineProperty;
var Un = Object.getOwnPropertyDescriptor;
var Vn = Object.getOwnPropertyNames;
var Jn = Object.getPrototypeOf,
  Yn = Object.prototype.hasOwnProperty;
var Gn = (s, e, t) => (e in s ? Ie(s, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (s[e] = t));
var Ce = (s, e) => () => (e || s((e = { exports: {} }).exports, e), e.exports),
  Cs = (s, e) => {
    for (var t in e) Ie(s, t, { get: e[t], enumerable: !0 });
  },
  $s = (s, e, t, n) => {
    if ((e && typeof e == 'object') || typeof e == 'function')
      for (let i of Vn(e))
        !Yn.call(s, i) && i !== t && Ie(s, i, { get: () => e[i], enumerable: !(n = Un(e, i)) || n.enumerable });
    return s;
  };
var Yt = (s, e, t) => (
    (t = s != null ? Rn(Jn(s)) : {}),
    $s(e || !s || !s.__esModule ? Ie(t, 'default', { value: s, enumerable: !0 }) : t, s)
  ),
  Qn = (s) => $s(Ie({}, '__esModule', { value: !0 }), s);
var Gt = (s, e, t) => (Gn(s, typeof e != 'symbol' ? e + '' : e, t), t);
var Ps = Ce((or, Wn) => {
  Wn.exports = {};
});
var Qt = Ce((ar, Ms) => {
  'use strict';
  var Hn = (s) => [
      function (e) {
        return s(...arguments);
      },
      function (e, t) {
        return s(...arguments);
      },
      function (e, t, n) {
        return s(...arguments);
      },
      function (e, t, n, i) {
        return s(...arguments);
      },
      function (e, t, n, i, r) {
        return s(...arguments);
      },
    ],
    _s = (s, ...e) => {
      if ((Xn(s), e.length >= s.length)) return s(...e);
      let t = (...r) => _s(s, ...e, ...r),
        n = s.length - e.length - 1;
      return Hn(t)[n] || t;
    };
  Ms.exports = _s;
  function Xn(s) {
    if (typeof s != 'function') throw Error('fn should be function!');
  }
});
var Bs = Ce((lr, xs) => {
  'use strict';
  xs.exports = (s) => {
    let e = { value: s };
    return (...t) => {
      let [n] = t;
      return t.length ? ((e.value = n), n) : e.value;
    };
  };
});
var qs = Ce((cr, Ht) => {
  'use strict';
  var Wt = Qt(),
    zn = (s) => document.querySelector(`[data-name="${s}"]`),
    Zn = Wt((s, e, t) => s.setAttribute(t, e[t])),
    ei = Wt((s, e, t) => (s[t] = e[t])),
    ti = Wt((s, e) => !s(e)),
    js = (s) => s != s.toLowerCase();
  Ht.exports = (s, e = {}) => {
    let { dataName: t, notAppend: n, parent: i = document.body, uniq: r = !0, ...o } = e,
      a = Ds(t);
    if (r && a) return a;
    let l = document.createElement(s);
    return (
      t && (l.dataset.name = t),
      Object.keys(o).filter(js).map(ei(l, e)),
      Object.keys(o).filter(ti(js)).map(Zn(l, e)),
      n || i.appendChild(l),
      l
    );
  };
  Ht.exports.isElementPresent = Ds;
  function Ds(s) {
    if (!!s) return zn(s);
  }
});
var ct = Ce((Pe) => {
  'use strict';
  Ps();
  var zt = Qt(),
    Xt = Bs(),
    si = qs(),
    ni = zt(li),
    ii = { ok: 'OK' },
    Rs = { ok: 'OK', cancel: 'Cancel' },
    Fs = Xt(100);
  Pe.alert = (s, e, t) => {
    let n = Zt(t) || ii;
    return lt(s, e, '', n, t);
  };
  Pe.prompt = (s, e, t = '', n) => {
    let i = ri(n),
      r = String(t).replace(/"/g, '&quot;'),
      o = `<input type="${i}" value="${r}" data-name="js-input">`,
      a = Zt(n) || Rs;
    return lt(s, e, o, a, n);
  };
  Pe.confirm = (s, e, t) => {
    let n = Zt(t) || Rs;
    return lt(s, e, '', n, t);
  };
  Pe.progress = (s, e, t) => {
    let r = lt(
        s,
        e,
        `
        <progress value="0" data-name="js-progress" class="progress" max="100"></progress>
        <span data-name="js-counter">0%</span>
    `,
        { cancel: 'Abort' },
        t,
      ),
      { ok: o, dialog: a } = r,
      l = o();
    return (
      R(a, ['cancel']).map((c) => {
        c.focus();
      }),
      Object.assign(r, {
        setProgress(c) {
          let [f] = R(a, ['progress']),
            [u] = R(a, ['counter']);
          (f.value = c), (u.textContent = `${c}%`), c === 100 && ($e(a), l());
        },
        remove() {
          $e(a);
        },
      }),
      r
    );
  };
  function Zt(s = {}) {
    let { buttons: e } = s;
    return e || null;
  }
  function ri(s = {}) {
    let { type: e } = s;
    return e === 'password' ? 'password' : 'text';
  }
  function oi(s, e, t, n) {
    let i = e.replace(/\n/g, '<br>');
    return `<div class="page">
        <div data-name="js-close" class="close-button"></div>
        <header>${s}</header>
        <div class="content-area">${i}${t}</div>
        <div class="action-area">
            <div class="button-strip">
                ${ai(n)}
            </div>
        </div>
    </div>`;
  }
  function ai(s) {
    let e = Object.keys(s),
      t = zt(
        (n, i, r) => `<button
            tabindex=${r}
            data-name="js-${i.toLowerCase()}">
            ${n[i]}
        </button>`,
      );
    return e.map(t(s)).join('');
  }
  function lt(s, e, t, n, i) {
    let r = Xt(),
      o = Xt(),
      a = ['cancel', 'close', 'ok'],
      l = new Promise((u, h) => {
        let p = i && i.cancel === !1,
          g = () => {},
          m = () => h(Error());
        r(u), o(p ? g : m);
      }),
      c = oi(s, e, t, n),
      f = si('div', { innerHTML: c, className: 'smalltalk', style: `z-index: ${Fs(Fs() + 1)}` });
    for (let u of R(f, ['ok', 'input'])) u.focus();
    for (let u of R(f, ['input'])) u.setSelectionRange(0, t.length);
    pi('click', f, a, (u) => {
      Us(u.target, f, r(), o());
    });
    for (let u of ['click', 'contextmenu'])
      f.addEventListener(u, (h) => {
        h.stopPropagation();
        for (let p of R(f, ['ok', 'input'])) p.focus();
      });
    return f.addEventListener('keydown', ni(f, r(), o())), Object.assign(l, { dialog: f, ok: r });
  }
  function li(s, e, t, n) {
    let i = { ENTER: 13, ESC: 27, TAB: 9, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40 },
      { keyCode: r } = n,
      o = n.target,
      l = R(s, ['ok', 'cancel', 'input']).map(es);
    switch (r) {
      case i.ENTER:
        Us(o, s, e, t), n.preventDefault();
        break;
      case i.ESC:
        $e(s), t();
        break;
      case i.TAB:
        n.shiftKey && Ks(s, l), Ks(s, l), n.preventDefault();
        break;
      default:
        ['left', 'right', 'up', 'down']
          .filter((c) => r === i[c.toUpperCase()])
          .forEach(() => {
            fi(s, l);
          });
        break;
    }
    n.stopPropagation();
  }
  function es(s) {
    return s.getAttribute('data-name').replace('js-', '');
  }
  var ci = (s) => (s === 'cancel' ? 'ok' : 'cancel');
  function fi(s, e) {
    let t = document.activeElement,
      n = es(t),
      i = /ok|cancel/.test(n),
      r = e.length - 1;
    if (n === 'input' || !r || !i) return;
    let o = ci(n);
    for (let a of R(s, [o])) a.focus();
  }
  var ui = (s, e) => (e === s ? 0 : e + 1);
  function Ks(s, e) {
    let t = document.activeElement,
      n = es(t),
      i = e.length - 1,
      r = e.indexOf(n),
      o = ui(i, r),
      a = e[o];
    for (let l of R(s, [a])) l.focus();
  }
  function Us(s, e, t, n) {
    let i = s.getAttribute('data-name').replace('js-', '');
    if (/close|cancel/.test(i)) {
      n(), $e(e);
      return;
    }
    let r = R(e, ['input']).reduce((o, a) => a.value, null);
    t(r), $e(e);
  }
  var hi = zt((s, e) => s.querySelector(`[data-name="js-${e}"]`));
  function R(s, e) {
    return e.map(hi(s)).filter(Boolean);
  }
  function pi(s, e, t, n) {
    for (let i of R(e, t)) i.addEventListener(s, n);
  }
  function $e(s) {
    let { parentElement: e } = s;
    e && e.removeChild(s);
  }
});
var ir = {};
Cs(ir, { default: () => Vt });
module.exports = Qn(ir);
var P = require('obsidian');
var Dn = Yt(ct());
var Vs = Yt(ct()),
  _e = class {
    constructor(e, t) {
      (this.progress = (0, Vs.progress)(e, t)),
        this.progress.catch((n) => {
          (this.aborted = !0), n && (n.constructor !== Error || n.message !== '') && console.error(n);
        }),
        (this.dialog = this.progress.dialog),
        (this.aborted = !1);
    }
    async forEach(e, t) {
      try {
        if (this.aborted) return;
        let n = 0,
          i = e.length,
          r = 0,
          o = 0;
        for (let a of e) {
          if ((await t(a, n++, e, this), this.aborted)) return;
          if (((r += 100), r > i)) {
            let l = r % i,
              c = (r - l) / i;
            this.progress.setProgress((o += c)), (r = l);
          }
        }
        return o < 100 && this.progress.setProgress(100), this;
      } finally {
        this.progress.remove();
      }
    }
    set title(e) {
      this.dialog.querySelector('header').textContent = e;
    }
    get title() {
      return this.dialog.querySelector('header').textContent;
    }
    set message(e) {
      let t = (this.dialog.querySelector('.content-area').childNodes[0].textContent = e);
    }
    get message() {
      return this.dialog.querySelector('.content-area').childNodes[0].textContent;
    }
  };
var Js = require('obsidian'),
  Ys = Yt(ct());
async function Gs(s, e, t = '', n = '.*', i = 'entry') {
  for (;;) {
    let r = (0, Ys.prompt)(s, e, t),
      o = r.dialog.find('input'),
      a = (c) => new RegExp(`^${n}$`).test(c);
    o.setSelectionRange(t.length, t.length),
      (o.pattern = n),
      (o.oninput = () => o.setAttribute('aria-invalid', !a(o.value)));
    let l = await r;
    if (a(l)) return l;
    new Js.Notice(`"${l}" is not a valid ${i}`);
  }
}
var we = require('obsidian');
var mi = /^#[^\u2000-\u206F\u2E00-\u2E7F'!"#$%&()*+,.:;<=>?@^`{|}~\[\]\\\s]+$/,
  I = class {
    constructor(e) {
      let t = (this.tag = I.toTag(e)),
        n = (this.canonical = t.toLowerCase()),
        i = (this.canonical_prefix = n + '/');
      (this.name = t.slice(1)),
        (this.matches = function (r) {
          return (r = r.toLowerCase()), r == n || r.startsWith(i);
        });
    }
    toString() {
      return this.tag;
    }
    static isTag(e) {
      return mi.test(e);
    }
    static toTag(e) {
      for (; e.startsWith('##'); ) e = e.slice(1);
      return e.startsWith('#') ? e : '#' + e;
    }
    static canonical(e) {
      return I.toTag(e).toLowerCase();
    }
  },
  ft = class {
    constructor(e, t) {
      let n = Object.assign(Object.create(null), { [e.tag]: t.tag, [e.name]: t.name });
      (this.inString = function (i, r = 0) {
        return i.slice(0, r) + t.tag + i.slice(r + e.tag.length);
      }),
        (this.inArray = (i, r, o) =>
          i.map((a, l) => {
            if ((r && l & 1) || !a) return a;
            if (o) {
              if (!a.startsWith('#') || !I.isTag(a)) return a;
            } else if (/[ ,\n]/.test(a)) return this.inArray(a.split(/([, \n]+)/), !0).join('');
            if (n[a]) return n[a];
            let c = a.toLowerCase();
            return n[c]
              ? (n[a] = n[c])
              : c.startsWith(e.canonical_prefix)
              ? (n[a] = n[c] = this.inString(a))
              : ('#' + c).startsWith(e.canonical_prefix)
              ? (n[a] = n[c] = this.inString('#' + a).slice(1))
              : (n[a] = n[c] = a);
          })),
        (this.willMergeTags = function (i) {
          if (e.canonical === t.canonical) return;
          let r = new Set(i.map((o) => o.toLowerCase()));
          for (let o of i.filter(e.matches)) {
            let a = this.inString(o);
            if (r.has(a.toLowerCase())) return [new I(o), new I(a)];
          }
        });
    }
  };
var Ls = require('obsidian');
var ut = Symbol.for('yaml.alias'),
  ht = Symbol.for('yaml.document'),
  U = Symbol.for('yaml.map'),
  ts = Symbol.for('yaml.pair'),
  q = Symbol.for('yaml.scalar'),
  ne = Symbol.for('yaml.seq'),
  x = Symbol.for('yaml.node.type'),
  V = (s) => !!s && typeof s == 'object' && s[x] === ut,
  Se = (s) => !!s && typeof s == 'object' && s[x] === ht,
  D = (s) => !!s && typeof s == 'object' && s[x] === U,
  O = (s) => !!s && typeof s == 'object' && s[x] === ts,
  v = (s) => !!s && typeof s == 'object' && s[x] === q,
  J = (s) => !!s && typeof s == 'object' && s[x] === ne;
function T(s) {
  if (s && typeof s == 'object')
    switch (s[x]) {
      case U:
      case ne:
        return !0;
    }
  return !1;
}
function E(s) {
  if (s && typeof s == 'object')
    switch (s[x]) {
      case ut:
      case U:
      case q:
      case ne:
        return !0;
    }
  return !1;
}
var Qs = (s) => (v(s) || T(s)) && !!s.anchor,
  ce = class {
    constructor(e) {
      Object.defineProperty(this, x, { value: e });
    }
    clone() {
      let e = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
      return this.range && (e.range = this.range.slice()), e;
    }
  };
var ge = Symbol('break visit'),
  di = Symbol('skip children'),
  Me = Symbol('remove node');
function Y(s, e) {
  typeof e == 'object' &&
    (e.Collection || e.Node || e.Value) &&
    (e = Object.assign(
      { Alias: e.Node, Map: e.Node, Scalar: e.Node, Seq: e.Node },
      e.Value && { Map: e.Value, Scalar: e.Value, Seq: e.Value },
      e.Collection && { Map: e.Collection, Seq: e.Collection },
      e,
    )),
    Se(s)
      ? ke(null, s.contents, e, Object.freeze([s])) === Me && (s.contents = null)
      : ke(null, s, e, Object.freeze([]));
}
Y.BREAK = ge;
Y.SKIP = di;
Y.REMOVE = Me;
function ke(s, e, t, n) {
  let i;
  if (
    (typeof t == 'function'
      ? (i = t(s, e, n))
      : D(e)
      ? t.Map && (i = t.Map(s, e, n))
      : J(e)
      ? t.Seq && (i = t.Seq(s, e, n))
      : O(e)
      ? t.Pair && (i = t.Pair(s, e, n))
      : v(e)
      ? t.Scalar && (i = t.Scalar(s, e, n))
      : V(e) && t.Alias && (i = t.Alias(s, e, n)),
    E(i) || O(i))
  ) {
    let r = n[n.length - 1];
    if (T(r)) r.items[s] = i;
    else if (O(r)) s === 'key' ? (r.key = i) : (r.value = i);
    else if (Se(r)) r.contents = i;
    else {
      let o = V(r) ? 'alias' : 'scalar';
      throw new Error(`Cannot replace node with ${o} parent`);
    }
    return ke(s, i, t, n);
  }
  if (typeof i != 'symbol') {
    if (T(e)) {
      n = Object.freeze(n.concat(e));
      for (let r = 0; r < e.items.length; ++r) {
        let o = ke(r, e.items[r], t, n);
        if (typeof o == 'number') r = o - 1;
        else {
          if (o === ge) return ge;
          o === Me && (e.items.splice(r, 1), (r -= 1));
        }
      }
    } else if (O(e)) {
      n = Object.freeze(n.concat(e));
      let r = ke('key', e.key, t, n);
      if (r === ge) return ge;
      r === Me && (e.key = null);
      let o = ke('value', e.value, t, n);
      if (o === ge) return ge;
      o === Me && (e.value = null);
    }
  }
  return i;
}
var gi = { '!': '%21', ',': '%2C', '[': '%5B', ']': '%5D', '{': '%7B', '}': '%7D' },
  yi = (s) => s.replace(/[!,[\]{}]/g, (e) => gi[e]),
  C = class {
    constructor(e, t) {
      (this.marker = null),
        (this.yaml = Object.assign({}, C.defaultYaml, e)),
        (this.tags = Object.assign({}, C.defaultTags, t));
    }
    clone() {
      let e = new C(this.yaml, this.tags);
      return (e.marker = this.marker), e;
    }
    atDocument() {
      let e = new C(this.yaml, this.tags);
      switch (this.yaml.version) {
        case '1.1':
          this.atNextDocument = !0;
          break;
        case '1.2':
          (this.atNextDocument = !1),
            (this.yaml = { explicit: C.defaultYaml.explicit, version: '1.2' }),
            (this.tags = Object.assign({}, C.defaultTags));
          break;
      }
      return e;
    }
    add(e, t) {
      this.atNextDocument &&
        ((this.yaml = { explicit: C.defaultYaml.explicit, version: '1.1' }),
        (this.tags = Object.assign({}, C.defaultTags)),
        (this.atNextDocument = !1));
      let n = e.trim().split(/[ \t]+/),
        i = n.shift();
      switch (i) {
        case '%TAG': {
          if (n.length !== 2 && (t(0, '%TAG directive should contain exactly two parts'), n.length < 2)) return !1;
          let [r, o] = n;
          return (this.tags[r] = o), !0;
        }
        case '%YAML': {
          if (((this.yaml.explicit = !0), n.length < 1))
            return t(0, '%YAML directive should contain exactly one part'), !1;
          let [r] = n;
          return r === '1.1' || r === '1.2'
            ? ((this.yaml.version = r), !0)
            : (t(6, `Unsupported YAML version ${r}`, !0), !1);
        }
        default:
          return t(0, `Unknown directive ${i}`, !0), !1;
      }
    }
    tagName(e, t) {
      if (e === '!') return '!';
      if (e[0] !== '!') return t(`Not a valid tag: ${e}`), null;
      if (e[1] === '<') {
        let o = e.slice(2, -1);
        return o === '!' || o === '!!'
          ? (t(`Verbatim tags aren't resolved, so ${e} is invalid.`), null)
          : (e[e.length - 1] !== '>' && t('Verbatim tags must end with a >'), o);
      }
      let [, n, i] = e.match(/^(.*!)([^!]*)$/);
      i || t(`The ${e} tag has no suffix`);
      let r = this.tags[n];
      return r ? r + decodeURIComponent(i) : n === '!' ? e : (t(`Could not resolve tag: ${e}`), null);
    }
    tagString(e) {
      for (let [t, n] of Object.entries(this.tags)) if (e.startsWith(n)) return t + yi(e.substring(n.length));
      return e[0] === '!' ? e : `!<${e}>`;
    }
    toString(e) {
      let t = this.yaml.explicit ? [`%YAML ${this.yaml.version || '1.2'}`] : [],
        n = Object.entries(this.tags),
        i;
      if (e && n.length > 0 && E(e.contents)) {
        let r = {};
        Y(e.contents, (o, a) => {
          E(a) && a.tag && (r[a.tag] = !0);
        }),
          (i = Object.keys(r));
      } else i = [];
      for (let [r, o] of n)
        (r === '!!' && o === 'tag:yaml.org,2002:') ||
          ((!e || i.some((a) => a.startsWith(o))) && t.push(`%TAG ${r} ${o}`));
      return t.join(`
`);
    }
  };
C.defaultYaml = { explicit: !1, version: '1.2' };
C.defaultTags = { '!!': 'tag:yaml.org,2002:' };
function pt(s) {
  if (/[\x00-\x19\s,[\]{}]/.test(s)) {
    let t = `Anchor must not contain whitespace or control characters: ${JSON.stringify(s)}`;
    throw new Error(t);
  }
  return !0;
}
function ss(s) {
  let e = new Set();
  return (
    Y(s, {
      Value(t, n) {
        n.anchor && e.add(n.anchor);
      },
    }),
    e
  );
}
function ns(s, e) {
  for (let t = 1; ; ++t) {
    let n = `${s}${t}`;
    if (!e.has(n)) return n;
  }
}
function Ws(s, e) {
  let t = [],
    n = new Map(),
    i = null;
  return {
    onAnchor(r) {
      t.push(r), i || (i = ss(s));
      let o = ns(e, i);
      return i.add(o), o;
    },
    setAnchors() {
      for (let r of t) {
        let o = n.get(r);
        if (typeof o == 'object' && o.anchor && (v(o.node) || T(o.node))) o.node.anchor = o.anchor;
        else {
          let a = new Error('Failed to resolve repeated object (this should not happen)');
          throw ((a.source = r), a);
        }
      }
    },
    sourceObjects: n,
  };
}
var ie = class extends ce {
  constructor(e) {
    super(ut),
      (this.source = e),
      Object.defineProperty(this, 'tag', {
        set() {
          throw new Error('Alias nodes cannot have tags');
        },
      });
  }
  resolve(e) {
    let t;
    return (
      Y(e, {
        Node: (n, i) => {
          if (i === this) return Y.BREAK;
          i.anchor === this.source && (t = i);
        },
      }),
      t
    );
  }
  toJSON(e, t) {
    if (!t) return { source: this.source };
    let { anchors: n, doc: i, maxAliasCount: r } = t,
      o = this.resolve(i);
    if (!o) {
      let l = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
      throw new ReferenceError(l);
    }
    let a = n.get(o);
    if (!a || a.res === void 0) {
      let l = 'This should not happen: Alias anchor was not resolved?';
      throw new ReferenceError(l);
    }
    if (r >= 0 && ((a.count += 1), a.aliasCount === 0 && (a.aliasCount = mt(i, o, n)), a.count * a.aliasCount > r)) {
      let l = 'Excessive alias count indicates a resource exhaustion attack';
      throw new ReferenceError(l);
    }
    return a.res;
  }
  toString(e, t, n) {
    let i = `*${this.source}`;
    if (e) {
      if ((pt(this.source), e.options.verifyAliasOrder && !e.anchors.has(this.source))) {
        let r = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new Error(r);
      }
      if (e.implicitKey) return `${i} `;
    }
    return i;
  }
};
function mt(s, e, t) {
  if (V(e)) {
    let n = e.resolve(s),
      i = t && n && t.get(n);
    return i ? i.count * i.aliasCount : 0;
  } else if (T(e)) {
    let n = 0;
    for (let i of e.items) {
      let r = mt(s, i, t);
      r > n && (n = r);
    }
    return n;
  } else if (O(e)) {
    let n = mt(s, e.key, t),
      i = mt(s, e.value, t);
    return Math.max(n, i);
  }
  return 1;
}
function M(s, e, t) {
  if (Array.isArray(s)) return s.map((n, i) => M(n, String(i), t));
  if (s && typeof s.toJSON == 'function') {
    if (!t || !Qs(s)) return s.toJSON(e, t);
    let n = { aliasCount: 0, count: 1, res: void 0 };
    t.anchors.set(s, n),
      (t.onCreate = (r) => {
        (n.res = r), delete t.onCreate;
      });
    let i = s.toJSON(e, t);
    return t.onCreate && t.onCreate(i), i;
  }
  return typeof s == 'bigint' && !(t && t.keep) ? Number(s) : s;
}
var dt = (s) => !s || (typeof s != 'function' && typeof s != 'object'),
  S = class extends ce {
    constructor(e) {
      super(q), (this.value = e);
    }
    toJSON(e, t) {
      return t && t.keep ? this.value : M(this.value, e, t);
    }
    toString() {
      return String(this.value);
    }
  };
S.BLOCK_FOLDED = 'BLOCK_FOLDED';
S.BLOCK_LITERAL = 'BLOCK_LITERAL';
S.PLAIN = 'PLAIN';
S.QUOTE_DOUBLE = 'QUOTE_DOUBLE';
S.QUOTE_SINGLE = 'QUOTE_SINGLE';
var bi = 'tag:yaml.org,2002:';
function wi(s, e, t) {
  if (e) {
    let n = t.filter((r) => r.tag === e),
      i = n.find((r) => !r.format) || n[0];
    if (!i) throw new Error(`Tag ${e} not found`);
    return i;
  }
  return t.find((n) => n.identify && n.identify(s) && !n.format);
}
function re(s, e, t) {
  var n, i;
  if ((Se(s) && (s = s.contents), E(s))) return s;
  if (O(s)) {
    let p = (i = (n = t.schema[U]).createNode) === null || i === void 0 ? void 0 : i.call(n, t.schema, null, t);
    return p.items.push(s), p;
  }
  (s instanceof String ||
    s instanceof Number ||
    s instanceof Boolean ||
    (typeof BigInt == 'function' && s instanceof BigInt)) &&
    (s = s.valueOf());
  let { aliasDuplicateObjects: r, onAnchor: o, onTagObj: a, schema: l, sourceObjects: c } = t,
    f;
  if (r && s && typeof s == 'object') {
    if (((f = c.get(s)), f)) return f.anchor || (f.anchor = o(s)), new ie(f.anchor);
    (f = { anchor: null, node: null }), c.set(s, f);
  }
  e && e.startsWith('!!') && (e = bi + e.slice(2));
  let u = wi(s, e, l.tags);
  if (!u) {
    if ((s && typeof s.toJSON == 'function' && (s = s.toJSON()), !s || typeof s != 'object')) {
      let p = new S(s);
      return f && (f.node = p), p;
    }
    u = s instanceof Map ? l[U] : Symbol.iterator in Object(s) ? l[ne] : l[U];
  }
  a && (a(u), delete t.onTagObj);
  let h = u != null && u.createNode ? u.createNode(t.schema, s, t) : new S(s);
  return e && (h.tag = e), f && (f.node = h), h;
}
function xe(s, e, t) {
  let n = t;
  for (let i = e.length - 1; i >= 0; --i) {
    let r = e[i];
    if (typeof r == 'number' && Number.isInteger(r) && r >= 0) {
      let o = [];
      (o[r] = n), (n = o);
    } else n = new Map([[r, n]]);
  }
  return re(n, void 0, {
    aliasDuplicateObjects: !1,
    keepUndefined: !1,
    onAnchor: () => {
      throw new Error('This should not happen, please report a bug.');
    },
    schema: s,
    sourceObjects: new Map(),
  });
}
var Ne = (s) => s == null || (typeof s == 'object' && !!s[Symbol.iterator]().next().done),
  oe = class extends ce {
    constructor(e, t) {
      super(e), Object.defineProperty(this, 'schema', { value: t, configurable: !0, enumerable: !1, writable: !0 });
    }
    clone(e) {
      let t = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
      return (
        e && (t.schema = e),
        (t.items = t.items.map((n) => (E(n) || O(n) ? n.clone(e) : n))),
        this.range && (t.range = this.range.slice()),
        t
      );
    }
    addIn(e, t) {
      if (Ne(e)) this.add(t);
      else {
        let [n, ...i] = e,
          r = this.get(n, !0);
        if (T(r)) r.addIn(i, t);
        else if (r === void 0 && this.schema) this.set(n, xe(this.schema, i, t));
        else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${i}`);
      }
    }
    deleteIn(e) {
      let [t, ...n] = e;
      if (n.length === 0) return this.delete(t);
      let i = this.get(t, !0);
      if (T(i)) return i.deleteIn(n);
      throw new Error(`Expected YAML collection at ${t}. Remaining path: ${n}`);
    }
    getIn(e, t) {
      let [n, ...i] = e,
        r = this.get(n, !0);
      return i.length === 0 ? (!t && v(r) ? r.value : r) : T(r) ? r.getIn(i, t) : void 0;
    }
    hasAllNullValues(e) {
      return this.items.every((t) => {
        if (!O(t)) return !1;
        let n = t.value;
        return n == null || (e && v(n) && n.value == null && !n.commentBefore && !n.comment && !n.tag);
      });
    }
    hasIn(e) {
      let [t, ...n] = e;
      if (n.length === 0) return this.has(t);
      let i = this.get(t, !0);
      return T(i) ? i.hasIn(n) : !1;
    }
    setIn(e, t) {
      let [n, ...i] = e;
      if (i.length === 0) this.set(n, t);
      else {
        let r = this.get(n, !0);
        if (T(r)) r.setIn(i, t);
        else if (r === void 0 && this.schema) this.set(n, xe(this.schema, i, t));
        else throw new Error(`Expected YAML collection at ${n}. Remaining path: ${i}`);
      }
    }
  };
oe.maxFlowStringSingleLineLength = 60;
var Hs = (s) => s.replace(/^(?!$)(?: $)?/gm, '#');
function z(s, e) {
  return /^\n+$/.test(s) ? s.substring(1) : e ? s.replace(/^(?! *$)/gm, e) : s;
}
var G = (s, e, t) =>
  t.includes(`
`)
    ? `
` + z(t, e)
    : (s.endsWith(' ') ? '' : ' ') + t;
var is = 'flow',
  gt = 'block',
  Be = 'quoted';
function je(
  s,
  e,
  t = 'flow',
  { indentAtStart: n, lineWidth: i = 80, minContentWidth: r = 20, onFold: o, onOverflow: a } = {},
) {
  if (!i || i < 0) return s;
  let l = Math.max(1 + r, 1 + i - e.length);
  if (s.length <= l) return s;
  let c = [],
    f = {},
    u = i - e.length;
  typeof n == 'number' && (n > i - Math.max(2, r) ? c.push(0) : (u = i - n));
  let h,
    p,
    g = !1,
    m = -1,
    d = -1,
    y = -1;
  t === gt && ((m = Xs(s, m)), m !== -1 && (u = m + l));
  for (let N; (N = s[(m += 1)]); ) {
    if (t === Be && N === '\\') {
      switch (((d = m), s[m + 1])) {
        case 'x':
          m += 3;
          break;
        case 'u':
          m += 5;
          break;
        case 'U':
          m += 9;
          break;
        default:
          m += 1;
      }
      y = m;
    }
    if (
      N ===
      `
`
    )
      t === gt && (m = Xs(s, m)), (u = m + l), (h = void 0);
    else {
      if (
        N === ' ' &&
        p &&
        p !== ' ' &&
        p !==
          `
` &&
        p !== '    '
      ) {
        let b = s[m + 1];
        b &&
          b !== ' ' &&
          b !==
            `
` &&
          b !== '    ' &&
          (h = m);
      }
      if (m >= u)
        if (h) c.push(h), (u = h + l), (h = void 0);
        else if (t === Be) {
          for (; p === ' ' || p === '    '; ) (p = N), (N = s[(m += 1)]), (g = !0);
          let b = m > y + 1 ? m - 2 : d - 1;
          if (f[b]) return s;
          c.push(b), (f[b] = !0), (u = b + l), (h = void 0);
        } else g = !0;
    }
    p = N;
  }
  if ((g && a && a(), c.length === 0)) return s;
  o && o();
  let w = s.slice(0, c[0]);
  for (let N = 0; N < c.length; ++N) {
    let b = c[N],
      k = c[N + 1] || s.length;
    b === 0
      ? (w = `
${e}${s.slice(0, k)}`)
      : (t === Be && f[b] && (w += `${s[b]}\\`),
        (w += `
${e}${s.slice(b + 1, k)}`));
  }
  return w;
}
function Xs(s, e) {
  let t = s[e + 1];
  for (; t === ' ' || t === '    '; ) {
    do t = s[(e += 1)];
    while (
      t &&
      t !==
        `
`
    );
    t = s[e + 1];
  }
  return e;
}
var bt = (s) => ({
    indentAtStart: s.indentAtStart,
    lineWidth: s.options.lineWidth,
    minContentWidth: s.options.minContentWidth,
  }),
  wt = (s) => /^(%|---|\.\.\.)/m.test(s);
function Si(s, e, t) {
  if (!e || e < 0) return !1;
  let n = e - t,
    i = s.length;
  if (i <= n) return !1;
  for (let r = 0, o = 0; r < i; ++r)
    if (
      s[r] ===
      `
`
    ) {
      if (r - o > n) return !0;
      if (((o = r + 1), i - o <= n)) return !1;
    }
  return !0;
}
function De(s, e) {
  let t = JSON.stringify(s);
  if (e.options.doubleQuotedAsJSON) return t;
  let { implicitKey: n } = e,
    i = e.options.doubleQuotedMinMultiLineLength,
    r = e.indent || (wt(s) ? '  ' : ''),
    o = '',
    a = 0;
  for (let l = 0, c = t[l]; c; c = t[++l])
    if (
      (c === ' ' &&
        t[l + 1] === '\\' &&
        t[l + 2] === 'n' &&
        ((o += t.slice(a, l) + '\\ '), (l += 1), (a = l), (c = '\\')),
      c === '\\')
    )
      switch (t[l + 1]) {
        case 'u':
          {
            o += t.slice(a, l);
            let f = t.substr(l + 2, 4);
            switch (f) {
              case '0000':
                o += '\\0';
                break;
              case '0007':
                o += '\\a';
                break;
              case '000b':
                o += '\\v';
                break;
              case '001b':
                o += '\\e';
                break;
              case '0085':
                o += '\\N';
                break;
              case '00a0':
                o += '\\_';
                break;
              case '2028':
                o += '\\L';
                break;
              case '2029':
                o += '\\P';
                break;
              default:
                f.substr(0, 2) === '00' ? (o += '\\x' + f.substr(2)) : (o += t.substr(l, 6));
            }
            (l += 5), (a = l + 1);
          }
          break;
        case 'n':
          if (n || t[l + 2] === '"' || t.length < i) l += 1;
          else {
            for (
              o +=
                t.slice(a, l) +
                `

`;
              t[l + 2] === '\\' && t[l + 3] === 'n' && t[l + 4] !== '"';

            )
              (o += `
`),
                (l += 2);
            (o += r), t[l + 2] === ' ' && (o += '\\'), (l += 1), (a = l + 1);
          }
          break;
        default:
          l += 1;
      }
  return (o = a ? o + t.slice(a) : t), n ? o : je(o, r, Be, bt(e));
}
function rs(s, e) {
  if (
    e.options.singleQuote === !1 ||
    (e.implicitKey &&
      s.includes(`
`)) ||
    /[ \t]\n|\n[ \t]/.test(s)
  )
    return De(s, e);
  let t = e.indent || (wt(s) ? '  ' : ''),
    n =
      "'" +
      s.replace(/'/g, "''").replace(
        /\n+/g,
        `$&
${t}`,
      ) +
      "'";
  return e.implicitKey ? n : je(n, t, is, bt(e));
}
function qe(s, e) {
  let { singleQuote: t } = e.options,
    n;
  if (t === !1) n = De;
  else {
    let i = s.includes('"'),
      r = s.includes("'");
    i && !r ? (n = rs) : r && !i ? (n = De) : (n = t ? rs : De);
  }
  return n(s, e);
}
function yt({ comment: s, type: e, value: t }, n, i, r) {
  let { blockQuote: o, commentString: a, lineWidth: l } = n.options;
  if (!o || /\n[\t ]+$/.test(t) || /^\s*$/.test(t)) return qe(t, n);
  let c = n.indent || (n.forceBlockIndent || wt(t) ? '  ' : ''),
    f =
      o === 'literal'
        ? !0
        : o === 'folded' || e === S.BLOCK_FOLDED
        ? !1
        : e === S.BLOCK_LITERAL
        ? !0
        : !Si(t, l, c.length);
  if (!t)
    return f
      ? `|
`
      : `>
`;
  let u, h;
  for (h = t.length; h > 0; --h) {
    let A = t[h - 1];
    if (
      A !==
        `
` &&
      A !== '    ' &&
      A !== ' '
    )
      break;
  }
  let p = t.substring(h),
    g = p.indexOf(`
`);
  g === -1 ? (u = '-') : t === p || g !== p.length - 1 ? ((u = '+'), r && r()) : (u = ''),
    p &&
      ((t = t.slice(0, -p.length)),
      p[p.length - 1] ===
        `
` && (p = p.slice(0, -1)),
      (p = p.replace(/\n+(?!\n|$)/g, `$&${c}`)));
  let m = !1,
    d,
    y = -1;
  for (d = 0; d < t.length; ++d) {
    let A = t[d];
    if (A === ' ') m = !0;
    else if (
      A ===
      `
`
    )
      y = d;
    else break;
  }
  let w = t.substring(0, y < d ? y + 1 : d);
  w && ((t = t.substring(w.length)), (w = w.replace(/\n+/g, `$&${c}`)));
  let b = (f ? '|' : '>') + (m ? (c ? '2' : '1') : '') + u;
  if ((s && ((b += ' ' + a(s.replace(/ ?[\r\n]+/g, ' '))), i && i()), f))
    return (
      (t = t.replace(/\n+/g, `$&${c}`)),
      `${b}
${c}${w}${t}${p}`
    );
  t = t
    .replace(
      /\n+/g,
      `
$&`,
    )
    .replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, '$1$2')
    .replace(/\n+/g, `$&${c}`);
  let k = je(`${w}${t}${p}`, c, gt, bt(n));
  return `${b}
${c}${k}`;
}
function ki(s, e, t, n) {
  let { type: i, value: r } = s,
    { actualString: o, implicitKey: a, indent: l, inFlow: c } = e;
  if ((a && /[\n[\]{},]/.test(r)) || (c && /[[\]{},]/.test(r))) return qe(r, e);
  if (!r || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(r))
    return a ||
      c ||
      r.indexOf(`
`) === -1
      ? qe(r, e)
      : yt(s, e, t, n);
  if (
    !a &&
    !c &&
    i !== S.PLAIN &&
    r.indexOf(`
`) !== -1
  )
    return yt(s, e, t, n);
  if (l === '' && wt(r)) return (e.forceBlockIndent = !0), yt(s, e, t, n);
  let f = r.replace(
    /\n+/g,
    `$&
${l}`,
  );
  if (o) {
    let u = (g) => {
        var m;
        return (
          g.default && g.tag !== 'tag:yaml.org,2002:str' && ((m = g.test) === null || m === void 0 ? void 0 : m.test(f))
        );
      },
      { compat: h, tags: p } = e.doc.schema;
    if (p.some(u) || (h == null ? void 0 : h.some(u))) return qe(r, e);
  }
  return a ? f : je(f, l, is, bt(e));
}
function ae(s, e, t, n) {
  let { implicitKey: i, inFlow: r } = e,
    o = typeof s.value == 'string' ? s : Object.assign({}, s, { value: String(s.value) }),
    { type: a } = s;
  a !== S.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value) && (a = S.QUOTE_DOUBLE);
  let l = (f) => {
      switch (f) {
        case S.BLOCK_FOLDED:
        case S.BLOCK_LITERAL:
          return i || r ? qe(o.value, e) : yt(o, e, t, n);
        case S.QUOTE_DOUBLE:
          return De(o.value, e);
        case S.QUOTE_SINGLE:
          return rs(o.value, e);
        case S.PLAIN:
          return ki(o, e, t, n);
        default:
          return null;
      }
    },
    c = l(a);
  if (c === null) {
    let { defaultKeyType: f, defaultStringType: u } = e.options,
      h = (i && f) || u;
    if (((c = l(h)), c === null)) throw new Error(`Unsupported default string type ${h}`);
  }
  return c;
}
function St(s, e) {
  let t = Object.assign(
      {
        blockQuote: !0,
        commentString: Hs,
        defaultKeyType: null,
        defaultStringType: 'PLAIN',
        directives: null,
        doubleQuotedAsJSON: !1,
        doubleQuotedMinMultiLineLength: 40,
        falseStr: 'false',
        indentSeq: !0,
        lineWidth: 80,
        minContentWidth: 20,
        nullStr: 'null',
        simpleKeys: !1,
        singleQuote: null,
        trueStr: 'true',
        verifyAliasOrder: !0,
      },
      s.schema.toStringOptions,
      e,
    ),
    n;
  switch (t.collectionStyle) {
    case 'block':
      n = !1;
      break;
    case 'flow':
      n = !0;
      break;
    default:
      n = null;
  }
  return {
    anchors: new Set(),
    doc: s,
    indent: '',
    indentStep: typeof t.indent == 'number' ? ' '.repeat(t.indent) : '  ',
    inFlow: n,
    options: t,
  };
}
function Ni(s, e) {
  if (e.tag) {
    let i = s.filter((r) => r.tag === e.tag);
    if (i.length > 0) return i.find((r) => r.format === e.format) || i[0];
  }
  let t, n;
  if (v(e)) {
    n = e.value;
    let i = s.filter((r) => r.identify && r.identify(n));
    t = i.find((r) => r.format === e.format) || i.find((r) => !r.format);
  } else (n = e), (t = s.find((i) => i.nodeClass && n instanceof i.nodeClass));
  if (!t) {
    let i = n && n.constructor ? n.constructor.name : typeof n;
    throw new Error(`Tag not resolved for ${i} value`);
  }
  return t;
}
function vi(s, e, { anchors: t, doc: n }) {
  if (!n.directives) return '';
  let i = [],
    r = (v(s) || T(s)) && s.anchor;
  r && pt(r) && (t.add(r), i.push(`&${r}`));
  let o = s.tag || (e.default ? null : e.tag);
  return o && i.push(n.directives.tagString(o)), i.join(' ');
}
function Q(s, e, t, n) {
  var i;
  if (O(s)) return s.toString(e, t, n);
  if (V(s)) {
    if (e.doc.directives) return s.toString(e);
    if (!((i = e.resolvedAliases) === null || i === void 0) && i.has(s))
      throw new TypeError('Cannot stringify circular structure without alias nodes');
    e.resolvedAliases ? e.resolvedAliases.add(s) : (e.resolvedAliases = new Set([s])), (s = s.resolve(e.doc));
  }
  let r,
    o = E(s) ? s : e.doc.createNode(s, { onTagObj: (c) => (r = c) });
  r || (r = Ni(e.doc.schema.tags, o));
  let a = vi(o, r, e);
  a.length > 0 && (e.indentAtStart = (e.indentAtStart || 0) + a.length + 1);
  let l = typeof r.stringify == 'function' ? r.stringify(o, e, t, n) : v(o) ? ae(o, e, t, n) : o.toString(e, t, n);
  return a
    ? v(o) || l[0] === '{' || l[0] === '['
      ? `${a} ${l}`
      : `${a}
${e.indent}${l}`
    : l;
}
function zs({ key: s, value: e }, t, n, i) {
  let {
      allNullValues: r,
      doc: o,
      indent: a,
      indentStep: l,
      options: { commentString: c, indentSeq: f, simpleKeys: u },
    } = t,
    h = (E(s) && s.comment) || null;
  if (u) {
    if (h) throw new Error('With simple keys, key nodes cannot have comments');
    if (T(s)) {
      let A = 'With simple keys, collection cannot be used as a key value';
      throw new Error(A);
    }
  }
  let p =
    !u &&
    (!s ||
      (h && e == null && !t.inFlow) ||
      T(s) ||
      (v(s) ? s.type === S.BLOCK_FOLDED || s.type === S.BLOCK_LITERAL : typeof s == 'object'));
  t = Object.assign({}, t, { allNullValues: !1, implicitKey: !p && (u || !r), indent: a + l });
  let g = !1,
    m = !1,
    d = Q(
      s,
      t,
      () => (g = !0),
      () => (m = !0),
    );
  if (!p && !t.inFlow && d.length > 1024) {
    if (u) throw new Error('With simple keys, single line scalar must not span more than 1024 characters');
    p = !0;
  }
  if (t.inFlow) {
    if (r || e == null) return g && n && n(), p ? `? ${d}` : d;
  } else if ((r && !u) || (e == null && p))
    return (d = `? ${d}`), h && !g ? (d += G(d, t.indent, c(h))) : m && i && i(), d;
  g && (h = null),
    p
      ? (h && (d += G(d, t.indent, c(h))),
        (d = `? ${d}
${a}:`))
      : ((d = `${d}:`), h && (d += G(d, t.indent, c(h))));
  let y = '',
    w = null;
  if (E(e)) {
    if (
      (e.spaceBefore &&
        (y = `
`),
      e.commentBefore)
    ) {
      let A = c(e.commentBefore);
      y += `
${z(A, t.indent)}`;
    }
    w = e.comment;
  } else e && typeof e == 'object' && (e = o.createNode(e));
  (t.implicitKey = !1),
    !p && !h && v(e) && (t.indentAtStart = d.length + 1),
    (m = !1),
    !f && l.length >= 2 && !t.inFlow && !p && J(e) && !e.flow && !e.tag && !e.anchor && (t.indent = t.indent.substr(2));
  let N = !1,
    b = Q(
      e,
      t,
      () => (N = !0),
      () => (m = !0),
    ),
    k = ' ';
  return (
    y || h
      ? (k =
          b === '' && !t.inFlow
            ? y
            : `${y}
${t.indent}`)
      : !p && T(e)
      ? (!(b[0] === '[' || b[0] === '{') ||
          b.includes(`
`)) &&
        (k = `
${t.indent}`)
      : (b === '' ||
          b[0] ===
            `
`) &&
        (k = ''),
    (d += k + b),
    t.inFlow ? N && n && n() : w && !N ? (d += G(d, t.indent, c(w))) : m && i && i(),
    d
  );
}
function os(s, e) {
  (s === 'debug' || s === 'warn') &&
    (typeof process != 'undefined' && process.emitWarning ? process.emitWarning(e) : console.warn(e));
}
var Zs = '<<';
function kt(s, e, { key: t, value: n }) {
  if (s && s.doc.schema.merge && Oi(t))
    if (((n = V(n) ? n.resolve(s.doc) : n), J(n))) for (let i of n.items) as(s, e, i);
    else if (Array.isArray(n)) for (let i of n) as(s, e, i);
    else as(s, e, n);
  else {
    let i = M(t, '', s);
    if (e instanceof Map) e.set(i, M(n, i, s));
    else if (e instanceof Set) e.add(i);
    else {
      let r = Ai(t, i, s),
        o = M(n, r, s);
      r in e ? Object.defineProperty(e, r, { value: o, writable: !0, enumerable: !0, configurable: !0 }) : (e[r] = o);
    }
  }
  return e;
}
var Oi = (s) => s === Zs || (v(s) && s.value === Zs && (!s.type || s.type === S.PLAIN));
function as(s, e, t) {
  let n = s && V(t) ? t.resolve(s.doc) : t;
  if (!D(n)) throw new Error('Merge sources must be maps or map aliases');
  let i = n.toJSON(null, s, Map);
  for (let [r, o] of i)
    e instanceof Map
      ? e.has(r) || e.set(r, o)
      : e instanceof Set
      ? e.add(r)
      : Object.prototype.hasOwnProperty.call(e, r) ||
        Object.defineProperty(e, r, { value: o, writable: !0, enumerable: !0, configurable: !0 });
  return e;
}
function Ai(s, e, t) {
  if (e === null) return '';
  if (typeof e != 'object') return String(e);
  if (E(s) && t && t.doc) {
    let n = St(t.doc, {});
    n.anchors = new Set();
    for (let r of t.anchors.keys()) n.anchors.add(r.anchor);
    (n.inFlow = !0), (n.inStringifyKey = !0);
    let i = s.toString(n);
    if (!t.mapKeyWarned) {
      let r = JSON.stringify(i);
      r.length > 40 && (r = r.substring(0, 36) + '..."'),
        os(
          t.doc.options.logLevel,
          `Keys with collection values will be stringified due to JS Object restrictions: ${r}. Set mapAsMap: true to use object keys.`,
        ),
        (t.mapKeyWarned = !0);
    }
    return i;
  }
  return JSON.stringify(e);
}
function ve(s, e, t) {
  let n = re(s, void 0, t),
    i = re(e, void 0, t);
  return new L(n, i);
}
var L = class {
  constructor(e, t = null) {
    Object.defineProperty(this, x, { value: ts }), (this.key = e), (this.value = t);
  }
  clone(e) {
    let { key: t, value: n } = this;
    return E(t) && (t = t.clone(e)), E(n) && (n = n.clone(e)), new L(t, n);
  }
  toJSON(e, t) {
    let n = t && t.mapAsMap ? new Map() : {};
    return kt(t, n, this);
  }
  toString(e, t, n) {
    return e && e.doc ? zs(this, e, t, n) : JSON.stringify(this);
  }
};
var Fe = {
  intAsBigInt: !1,
  keepSourceTokens: !1,
  logLevel: 'warn',
  prettyErrors: !0,
  strict: !0,
  uniqueKeys: !0,
  version: '1.2',
};
function vt(s, e, t) {
  var n;
  return (((n = e.inFlow) !== null && n !== void 0 ? n : s.flow) ? Ti : Ei)(s, e, t);
}
function Ei(
  { comment: s, items: e },
  t,
  { blockItemPrefix: n, flowChars: i, itemIndent: r, onChompKeep: o, onComment: a },
) {
  let {
      indent: l,
      options: { commentString: c },
    } = t,
    f = Object.assign({}, t, { indent: r, type: null }),
    u = !1,
    h = [];
  for (let g = 0; g < e.length; ++g) {
    let m = e[g],
      d = null;
    if (E(m)) !u && m.spaceBefore && h.push(''), Nt(t, h, m.commentBefore, u), m.comment && (d = m.comment);
    else if (O(m)) {
      let w = E(m.key) ? m.key : null;
      w && (!u && w.spaceBefore && h.push(''), Nt(t, h, w.commentBefore, u));
    }
    u = !1;
    let y = Q(
      m,
      f,
      () => (d = null),
      () => (u = !0),
    );
    d && (y += G(y, r, c(d))), u && d && (u = !1), h.push(n + y);
  }
  let p;
  if (h.length === 0) p = i.start + i.end;
  else {
    p = h[0];
    for (let g = 1; g < h.length; ++g) {
      let m = h[g];
      p += m
        ? `
${l}${m}`
        : `
`;
    }
  }
  return (
    s
      ? ((p +=
          `
` + z(c(s), l)),
        a && a())
      : u && o && o(),
    p
  );
}
function Ti({ comment: s, items: e }, t, { flowChars: n, itemIndent: i, onComment: r }) {
  let {
    indent: o,
    indentStep: a,
    options: { commentString: l },
  } = t;
  i += a;
  let c = Object.assign({}, t, { indent: i, inFlow: !0, type: null }),
    f = !1,
    u = 0,
    h = [];
  for (let d = 0; d < e.length; ++d) {
    let y = e[d],
      w = null;
    if (E(y)) y.spaceBefore && h.push(''), Nt(t, h, y.commentBefore, !1), y.comment && (w = y.comment);
    else if (O(y)) {
      let b = E(y.key) ? y.key : null;
      b && (b.spaceBefore && h.push(''), Nt(t, h, b.commentBefore, !1), b.comment && (f = !0));
      let k = E(y.value) ? y.value : null;
      k
        ? (k.comment && (w = k.comment), k.commentBefore && (f = !0))
        : y.value == null && b && b.comment && (w = b.comment);
    }
    w && (f = !0);
    let N = Q(y, c, () => (w = null));
    d < e.length - 1 && (N += ','),
      w && (N += G(N, i, l(w))),
      !f &&
        (h.length > u ||
          N.includes(`
`)) &&
        (f = !0),
      h.push(N),
      (u = h.length);
  }
  let p,
    { start: g, end: m } = n;
  if (h.length === 0) p = g + m;
  else if ((f || (f = h.reduce((y, w) => y + w.length + 2, 2) > oe.maxFlowStringSingleLineLength), f)) {
    p = g;
    for (let d of h)
      p += d
        ? `
${a}${o}${d}`
        : `
`;
    p += `
${o}${m}`;
  } else p = `${g} ${h.join(' ')} ${m}`;
  return s && ((p += G(p, l(s), o)), r && r()), p;
}
function Nt({ indent: s, options: { commentString: e } }, t, n, i) {
  if ((n && i && (n = n.replace(/^\n+/, '')), n)) {
    let r = z(e(n), s);
    t.push(r.trimStart());
  }
}
function fe(s, e) {
  let t = v(e) ? e.value : e;
  for (let n of s) if (O(n) && (n.key === e || n.key === t || (v(n.key) && n.key.value === t))) return n;
}
var $ = class extends oe {
  constructor(e) {
    super(U, e), (this.items = []);
  }
  static get tagName() {
    return 'tag:yaml.org,2002:map';
  }
  add(e, t) {
    let n;
    O(e)
      ? (n = e)
      : !e || typeof e != 'object' || !('key' in e)
      ? (n = new L(e, e.value))
      : (n = new L(e.key, e.value));
    let i = fe(this.items, n.key),
      r = this.schema && this.schema.sortMapEntries;
    if (i) {
      if (!t) throw new Error(`Key ${n.key} already set`);
      v(i.value) && dt(n.value) ? (i.value.value = n.value) : (i.value = n.value);
    } else if (r) {
      let o = this.items.findIndex((a) => r(n, a) < 0);
      o === -1 ? this.items.push(n) : this.items.splice(o, 0, n);
    } else this.items.push(n);
  }
  delete(e) {
    let t = fe(this.items, e);
    return t ? this.items.splice(this.items.indexOf(t), 1).length > 0 : !1;
  }
  get(e, t) {
    let n = fe(this.items, e),
      i = n && n.value;
    return !t && v(i) ? i.value : i;
  }
  has(e) {
    return !!fe(this.items, e);
  }
  set(e, t) {
    this.add(new L(e, t), !0);
  }
  toJSON(e, t, n) {
    let i = n ? new n() : t && t.mapAsMap ? new Map() : {};
    t && t.onCreate && t.onCreate(i);
    for (let r of this.items) kt(t, i, r);
    return i;
  }
  toString(e, t, n) {
    if (!e) return JSON.stringify(this);
    for (let i of this.items)
      if (!O(i)) throw new Error(`Map items must all be pairs; found ${JSON.stringify(i)} instead`);
    return (
      !e.allNullValues && this.hasAllNullValues(!1) && (e = Object.assign({}, e, { allNullValues: !0 })),
      vt(this, e, {
        blockItemPrefix: '',
        flowChars: { start: '{', end: '}' },
        itemIndent: e.indent || '',
        onChompKeep: n,
        onComment: t,
      })
    );
  }
};
function Li(s, e, t) {
  let { keepUndefined: n, replacer: i } = t,
    r = new $(s),
    o = (a, l) => {
      if (typeof i == 'function') l = i.call(e, a, l);
      else if (Array.isArray(i) && !i.includes(a)) return;
      (l !== void 0 || n) && r.items.push(ve(a, l, t));
    };
  if (e instanceof Map) for (let [a, l] of e) o(a, l);
  else if (e && typeof e == 'object') for (let a of Object.keys(e)) o(a, e[a]);
  return typeof s.sortMapEntries == 'function' && r.items.sort(s.sortMapEntries), r;
}
var W = {
  collection: 'map',
  createNode: Li,
  default: !0,
  nodeClass: $,
  tag: 'tag:yaml.org,2002:map',
  resolve(s, e) {
    return D(s) || e('Expected a mapping for this tag'), s;
  },
};
var B = class extends oe {
  constructor(e) {
    super(ne, e), (this.items = []);
  }
  static get tagName() {
    return 'tag:yaml.org,2002:seq';
  }
  add(e) {
    this.items.push(e);
  }
  delete(e) {
    let t = Ot(e);
    return typeof t != 'number' ? !1 : this.items.splice(t, 1).length > 0;
  }
  get(e, t) {
    let n = Ot(e);
    if (typeof n != 'number') return;
    let i = this.items[n];
    return !t && v(i) ? i.value : i;
  }
  has(e) {
    let t = Ot(e);
    return typeof t == 'number' && t < this.items.length;
  }
  set(e, t) {
    let n = Ot(e);
    if (typeof n != 'number') throw new Error(`Expected a valid index, not ${e}.`);
    let i = this.items[n];
    v(i) && dt(t) ? (i.value = t) : (this.items[n] = t);
  }
  toJSON(e, t) {
    let n = [];
    t && t.onCreate && t.onCreate(n);
    let i = 0;
    for (let r of this.items) n.push(M(r, String(i++), t));
    return n;
  }
  toString(e, t, n) {
    return e
      ? vt(this, e, {
          blockItemPrefix: '- ',
          flowChars: { start: '[', end: ']' },
          itemIndent: (e.indent || '') + '  ',
          onChompKeep: n,
          onComment: t,
        })
      : JSON.stringify(this);
  }
};
function Ot(s) {
  let e = v(s) ? s.value : s;
  return e && typeof e == 'string' && (e = Number(e)), typeof e == 'number' && Number.isInteger(e) && e >= 0 ? e : null;
}
function Ii(s, e, t) {
  let { replacer: n } = t,
    i = new B(s);
  if (e && Symbol.iterator in Object(e)) {
    let r = 0;
    for (let o of e) {
      if (typeof n == 'function') {
        let a = e instanceof Set ? o : String(r++);
        o = n.call(e, a, o);
      }
      i.items.push(re(o, void 0, t));
    }
  }
  return i;
}
var H = {
  collection: 'seq',
  createNode: Ii,
  default: !0,
  nodeClass: B,
  tag: 'tag:yaml.org,2002:seq',
  resolve(s, e) {
    return J(s) || e('Expected a sequence for this tag'), s;
  },
};
var ue = {
  identify: (s) => typeof s == 'string',
  default: !0,
  tag: 'tag:yaml.org,2002:str',
  resolve: (s) => s,
  stringify(s, e, t, n) {
    return (e = Object.assign({ actualString: !0 }, e)), ae(s, e, t, n);
  },
};
var ye = {
  identify: (s) => s == null,
  createNode: () => new S(null),
  default: !0,
  tag: 'tag:yaml.org,2002:null',
  test: /^(?:~|[Nn]ull|NULL)?$/,
  resolve: () => new S(null),
  stringify: ({ source: s }, e) => (s && ye.test.test(s) ? s : e.options.nullStr),
};
var Ke = {
  identify: (s) => typeof s == 'boolean',
  default: !0,
  tag: 'tag:yaml.org,2002:bool',
  test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
  resolve: (s) => new S(s[0] === 't' || s[0] === 'T'),
  stringify({ source: s, value: e }, t) {
    if (s && Ke.test.test(s)) {
      let n = s[0] === 't' || s[0] === 'T';
      if (e === n) return s;
    }
    return e ? t.options.trueStr : t.options.falseStr;
  },
};
function _({ format: s, minFractionDigits: e, tag: t, value: n }) {
  if (typeof n == 'bigint') return String(n);
  let i = typeof n == 'number' ? n : Number(n);
  if (!isFinite(i)) return isNaN(i) ? '.nan' : i < 0 ? '-.inf' : '.inf';
  let r = JSON.stringify(n);
  if (!s && e && (!t || t === 'tag:yaml.org,2002:float') && /^\d/.test(r)) {
    let o = r.indexOf('.');
    o < 0 && ((o = r.length), (r += '.'));
    let a = e - (r.length - o - 1);
    for (; a-- > 0; ) r += '0';
  }
  return r;
}
var At = {
    identify: (s) => typeof s == 'number',
    default: !0,
    tag: 'tag:yaml.org,2002:float',
    test: /^(?:[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN))$/,
    resolve: (s) =>
      s.slice(-3).toLowerCase() === 'nan' ? NaN : s[0] === '-' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
    stringify: _,
  },
  Et = {
    identify: (s) => typeof s == 'number',
    default: !0,
    tag: 'tag:yaml.org,2002:float',
    format: 'EXP',
    test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
    resolve: (s) => parseFloat(s),
    stringify(s) {
      let e = Number(s.value);
      return isFinite(e) ? e.toExponential() : _(s);
    },
  },
  Tt = {
    identify: (s) => typeof s == 'number',
    default: !0,
    tag: 'tag:yaml.org,2002:float',
    test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
    resolve(s) {
      let e = new S(parseFloat(s)),
        t = s.indexOf('.');
      return t !== -1 && s[s.length - 1] === '0' && (e.minFractionDigits = s.length - t - 1), e;
    },
    stringify: _,
  };
var Lt = (s) => typeof s == 'bigint' || Number.isInteger(s),
  ls = (s, e, t, { intAsBigInt: n }) => (n ? BigInt(s) : parseInt(s.substring(e), t));
function en(s, e, t) {
  let { value: n } = s;
  return Lt(n) && n >= 0 ? t + n.toString(e) : _(s);
}
var It = {
    identify: (s) => Lt(s) && s >= 0,
    default: !0,
    tag: 'tag:yaml.org,2002:int',
    format: 'OCT',
    test: /^0o[0-7]+$/,
    resolve: (s, e, t) => ls(s, 2, 8, t),
    stringify: (s) => en(s, 8, '0o'),
  },
  Ct = {
    identify: Lt,
    default: !0,
    tag: 'tag:yaml.org,2002:int',
    test: /^[-+]?[0-9]+$/,
    resolve: (s, e, t) => ls(s, 0, 10, t),
    stringify: _,
  },
  $t = {
    identify: (s) => Lt(s) && s >= 0,
    default: !0,
    tag: 'tag:yaml.org,2002:int',
    format: 'HEX',
    test: /^0x[0-9a-fA-F]+$/,
    resolve: (s, e, t) => ls(s, 2, 16, t),
    stringify: (s) => en(s, 16, '0x'),
  };
var tn = [W, H, ue, ye, Ke, It, Ct, $t, At, Et, Tt];
function sn(s) {
  return typeof s == 'bigint' || Number.isInteger(s);
}
var Pt = ({ value: s }) => JSON.stringify(s),
  Ci = [
    {
      identify: (s) => typeof s == 'string',
      default: !0,
      tag: 'tag:yaml.org,2002:str',
      resolve: (s) => s,
      stringify: Pt,
    },
    {
      identify: (s) => s == null,
      createNode: () => new S(null),
      default: !0,
      tag: 'tag:yaml.org,2002:null',
      test: /^null$/,
      resolve: () => null,
      stringify: Pt,
    },
    {
      identify: (s) => typeof s == 'boolean',
      default: !0,
      tag: 'tag:yaml.org,2002:bool',
      test: /^true|false$/,
      resolve: (s) => s === 'true',
      stringify: Pt,
    },
    {
      identify: sn,
      default: !0,
      tag: 'tag:yaml.org,2002:int',
      test: /^-?(?:0|[1-9][0-9]*)$/,
      resolve: (s, e, { intAsBigInt: t }) => (t ? BigInt(s) : parseInt(s, 10)),
      stringify: ({ value: s }) => (sn(s) ? s.toString() : JSON.stringify(s)),
    },
    {
      identify: (s) => typeof s == 'number',
      default: !0,
      tag: 'tag:yaml.org,2002:float',
      test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
      resolve: (s) => parseFloat(s),
      stringify: Pt,
    },
  ],
  $i = {
    default: !0,
    tag: '',
    test: /^/,
    resolve(s, e) {
      return e(`Unresolved plain scalar ${JSON.stringify(s)}`), s;
    },
  },
  nn = [W, H].concat(Ci, $i);
var Re = {
  identify: (s) => s instanceof Uint8Array,
  default: !1,
  tag: 'tag:yaml.org,2002:binary',
  resolve(s, e) {
    if (typeof Buffer == 'function') return Buffer.from(s, 'base64');
    if (typeof atob == 'function') {
      let t = atob(s.replace(/[\n\r]/g, '')),
        n = new Uint8Array(t.length);
      for (let i = 0; i < t.length; ++i) n[i] = t.charCodeAt(i);
      return n;
    } else return e('This environment does not support reading binary tags; either Buffer or atob is required'), s;
  },
  stringify({ comment: s, type: e, value: t }, n, i, r) {
    let o = t,
      a;
    if (typeof Buffer == 'function')
      a = o instanceof Buffer ? o.toString('base64') : Buffer.from(o.buffer).toString('base64');
    else if (typeof btoa == 'function') {
      let l = '';
      for (let c = 0; c < o.length; ++c) l += String.fromCharCode(o[c]);
      a = btoa(l);
    } else throw new Error('This environment does not support writing binary tags; either Buffer or btoa is required');
    if ((e || (e = S.BLOCK_LITERAL), e !== S.QUOTE_DOUBLE)) {
      let l = Math.max(n.options.lineWidth - n.indent.length, n.options.minContentWidth),
        c = Math.ceil(a.length / l),
        f = new Array(c);
      for (let u = 0, h = 0; u < c; ++u, h += l) f[u] = a.substr(h, l);
      a = f.join(
        e === S.BLOCK_LITERAL
          ? `
`
          : ' ',
      );
    }
    return ae({ comment: s, type: e, value: a }, n, i, r);
  },
};
function cs(s, e) {
  if (J(s))
    for (let t = 0; t < s.items.length; ++t) {
      let n = s.items[t];
      if (!O(n)) {
        if (D(n)) {
          n.items.length > 1 && e('Each pair must have its own sequence indicator');
          let i = n.items[0] || new L(new S(null));
          if (
            (n.commentBefore &&
              (i.key.commentBefore = i.key.commentBefore
                ? `${n.commentBefore}
${i.key.commentBefore}`
                : n.commentBefore),
            n.comment)
          ) {
            let r = i.value || i.key;
            r.comment = r.comment
              ? `${n.comment}
${r.comment}`
              : n.comment;
          }
          n = i;
        }
        s.items[t] = O(n) ? n : new L(n);
      }
    }
  else e('Expected a sequence for this tag');
  return s;
}
function fs(s, e, t) {
  let { replacer: n } = t,
    i = new B(s);
  i.tag = 'tag:yaml.org,2002:pairs';
  let r = 0;
  if (e && Symbol.iterator in Object(e))
    for (let o of e) {
      typeof n == 'function' && (o = n.call(e, String(r++), o));
      let a, l;
      if (Array.isArray(o))
        if (o.length === 2) (a = o[0]), (l = o[1]);
        else throw new TypeError(`Expected [key, value] tuple: ${o}`);
      else if (o && o instanceof Object) {
        let c = Object.keys(o);
        if (c.length === 1) (a = c[0]), (l = o[a]);
        else throw new TypeError(`Expected { key: value } tuple: ${o}`);
      } else a = o;
      i.items.push(ve(a, l, t));
    }
  return i;
}
var Ue = { collection: 'seq', default: !1, tag: 'tag:yaml.org,2002:pairs', resolve: cs, createNode: fs };
var he = class extends B {
  constructor() {
    super(),
      (this.add = $.prototype.add.bind(this)),
      (this.delete = $.prototype.delete.bind(this)),
      (this.get = $.prototype.get.bind(this)),
      (this.has = $.prototype.has.bind(this)),
      (this.set = $.prototype.set.bind(this)),
      (this.tag = he.tag);
  }
  toJSON(e, t) {
    if (!t) return super.toJSON(e);
    let n = new Map();
    t && t.onCreate && t.onCreate(n);
    for (let i of this.items) {
      let r, o;
      if ((O(i) ? ((r = M(i.key, '', t)), (o = M(i.value, r, t))) : (r = M(i, '', t)), n.has(r)))
        throw new Error('Ordered maps must not include duplicate keys');
      n.set(r, o);
    }
    return n;
  }
};
he.tag = 'tag:yaml.org,2002:omap';
var Ve = {
  collection: 'seq',
  identify: (s) => s instanceof Map,
  nodeClass: he,
  default: !1,
  tag: 'tag:yaml.org,2002:omap',
  resolve(s, e) {
    let t = cs(s, e),
      n = [];
    for (let { key: i } of t.items)
      v(i) && (n.includes(i.value) ? e(`Ordered maps must not include duplicate keys: ${i.value}`) : n.push(i.value));
    return Object.assign(new he(), t);
  },
  createNode(s, e, t) {
    let n = fs(s, e, t),
      i = new he();
    return (i.items = n.items), i;
  },
};
function rn({ value: s, source: e }, t) {
  return e && (s ? us : hs).test.test(e) ? e : s ? t.options.trueStr : t.options.falseStr;
}
var us = {
    identify: (s) => s === !0,
    default: !0,
    tag: 'tag:yaml.org,2002:bool',
    test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
    resolve: () => new S(!0),
    stringify: rn,
  },
  hs = {
    identify: (s) => s === !1,
    default: !0,
    tag: 'tag:yaml.org,2002:bool',
    test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/i,
    resolve: () => new S(!1),
    stringify: rn,
  };
var on = {
    identify: (s) => typeof s == 'number',
    default: !0,
    tag: 'tag:yaml.org,2002:float',
    test: /^[-+]?\.(?:inf|Inf|INF|nan|NaN|NAN)$/,
    resolve: (s) =>
      s.slice(-3).toLowerCase() === 'nan' ? NaN : s[0] === '-' ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
    stringify: _,
  },
  an = {
    identify: (s) => typeof s == 'number',
    default: !0,
    tag: 'tag:yaml.org,2002:float',
    format: 'EXP',
    test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
    resolve: (s) => parseFloat(s.replace(/_/g, '')),
    stringify(s) {
      let e = Number(s.value);
      return isFinite(e) ? e.toExponential() : _(s);
    },
  },
  ln = {
    identify: (s) => typeof s == 'number',
    default: !0,
    tag: 'tag:yaml.org,2002:float',
    test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
    resolve(s) {
      let e = new S(parseFloat(s.replace(/_/g, ''))),
        t = s.indexOf('.');
      if (t !== -1) {
        let n = s.substring(t + 1).replace(/_/g, '');
        n[n.length - 1] === '0' && (e.minFractionDigits = n.length);
      }
      return e;
    },
    stringify: _,
  };
var Je = (s) => typeof s == 'bigint' || Number.isInteger(s);
function _t(s, e, t, { intAsBigInt: n }) {
  let i = s[0];
  if (((i === '-' || i === '+') && (e += 1), (s = s.substring(e).replace(/_/g, '')), n)) {
    switch (t) {
      case 2:
        s = `0b${s}`;
        break;
      case 8:
        s = `0o${s}`;
        break;
      case 16:
        s = `0x${s}`;
        break;
    }
    let o = BigInt(s);
    return i === '-' ? BigInt(-1) * o : o;
  }
  let r = parseInt(s, t);
  return i === '-' ? -1 * r : r;
}
function ps(s, e, t) {
  let { value: n } = s;
  if (Je(n)) {
    let i = n.toString(e);
    return n < 0 ? '-' + t + i.substr(1) : t + i;
  }
  return _(s);
}
var cn = {
    identify: Je,
    default: !0,
    tag: 'tag:yaml.org,2002:int',
    format: 'BIN',
    test: /^[-+]?0b[0-1_]+$/,
    resolve: (s, e, t) => _t(s, 2, 2, t),
    stringify: (s) => ps(s, 2, '0b'),
  },
  fn = {
    identify: Je,
    default: !0,
    tag: 'tag:yaml.org,2002:int',
    format: 'OCT',
    test: /^[-+]?0[0-7_]+$/,
    resolve: (s, e, t) => _t(s, 1, 8, t),
    stringify: (s) => ps(s, 8, '0'),
  },
  un = {
    identify: Je,
    default: !0,
    tag: 'tag:yaml.org,2002:int',
    test: /^[-+]?[0-9][0-9_]*$/,
    resolve: (s, e, t) => _t(s, 0, 10, t),
    stringify: _,
  },
  hn = {
    identify: Je,
    default: !0,
    tag: 'tag:yaml.org,2002:int',
    format: 'HEX',
    test: /^[-+]?0x[0-9a-fA-F_]+$/,
    resolve: (s, e, t) => _t(s, 2, 16, t),
    stringify: (s) => ps(s, 16, '0x'),
  };
var pe = class extends $ {
  constructor(e) {
    super(e), (this.tag = pe.tag);
  }
  add(e) {
    let t;
    O(e)
      ? (t = e)
      : typeof e == 'object' && 'key' in e && 'value' in e && e.value === null
      ? (t = new L(e.key, null))
      : (t = new L(e, null)),
      fe(this.items, t.key) || this.items.push(t);
  }
  get(e, t) {
    let n = fe(this.items, e);
    return !t && O(n) ? (v(n.key) ? n.key.value : n.key) : n;
  }
  set(e, t) {
    if (typeof t != 'boolean')
      throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);
    let n = fe(this.items, e);
    n && !t ? this.items.splice(this.items.indexOf(n), 1) : !n && t && this.items.push(new L(e));
  }
  toJSON(e, t) {
    return super.toJSON(e, t, Set);
  }
  toString(e, t, n) {
    if (!e) return JSON.stringify(this);
    if (this.hasAllNullValues(!0)) return super.toString(Object.assign({}, e, { allNullValues: !0 }), t, n);
    throw new Error('Set items must all have null values');
  }
};
pe.tag = 'tag:yaml.org,2002:set';
var Ye = {
  collection: 'map',
  identify: (s) => s instanceof Set,
  nodeClass: pe,
  default: !1,
  tag: 'tag:yaml.org,2002:set',
  resolve(s, e) {
    if (D(s)) {
      if (s.hasAllNullValues(!0)) return Object.assign(new pe(), s);
      e('Set items must all have null values');
    } else e('Expected a mapping for this tag');
    return s;
  },
  createNode(s, e, t) {
    let { replacer: n } = t,
      i = new pe(s);
    if (e && Symbol.iterator in Object(e))
      for (let r of e) typeof n == 'function' && (r = n.call(e, r, r)), i.items.push(ve(r, null, t));
    return i;
  },
};
function ms(s, e) {
  let t = s[0],
    n = t === '-' || t === '+' ? s.substring(1) : s,
    i = (o) => (e ? BigInt(o) : Number(o)),
    r = n
      .replace(/_/g, '')
      .split(':')
      .reduce((o, a) => o * i(60) + i(a), i(0));
  return t === '-' ? i(-1) * r : r;
}
function pn(s) {
  let { value: e } = s,
    t = (o) => o;
  if (typeof e == 'bigint') t = (o) => BigInt(o);
  else if (isNaN(e) || !isFinite(e)) return _(s);
  let n = '';
  e < 0 && ((n = '-'), (e *= t(-1)));
  let i = t(60),
    r = [e % i];
  return (
    e < 60 ? r.unshift(0) : ((e = (e - r[0]) / i), r.unshift(e % i), e >= 60 && ((e = (e - r[0]) / i), r.unshift(e))),
    n +
      r
        .map((o) => (o < 10 ? '0' + String(o) : String(o)))
        .join(':')
        .replace(/000000\d*$/, '')
  );
}
var Mt = {
    identify: (s) => typeof s == 'bigint' || Number.isInteger(s),
    default: !0,
    tag: 'tag:yaml.org,2002:int',
    format: 'TIME',
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
    resolve: (s, e, { intAsBigInt: t }) => ms(s, t),
    stringify: pn,
  },
  xt = {
    identify: (s) => typeof s == 'number',
    default: !0,
    tag: 'tag:yaml.org,2002:float',
    format: 'TIME',
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
    resolve: (s) => ms(s, !1),
    stringify: pn,
  },
  Oe = {
    identify: (s) => s instanceof Date,
    default: !0,
    tag: 'tag:yaml.org,2002:timestamp',
    test: RegExp(
      '^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$',
    ),
    resolve(s) {
      let e = s.match(Oe.test);
      if (!e) throw new Error('!!timestamp expects a date, starting with yyyy-mm-dd');
      let [, t, n, i, r, o, a] = e.map(Number),
        l = e[7] ? Number((e[7] + '00').substr(1, 3)) : 0,
        c = Date.UTC(t, n - 1, i, r || 0, o || 0, a || 0, l),
        f = e[8];
      if (f && f !== 'Z') {
        let u = ms(f, !1);
        Math.abs(u) < 30 && (u *= 60), (c -= 6e4 * u);
      }
      return new Date(c);
    },
    stringify: ({ value: s }) => s.toISOString().replace(/((T00:00)?:00)?\.000Z$/, ''),
  };
var ds = [W, H, ue, ye, us, hs, cn, fn, un, hn, on, an, ln, Re, Ve, Ue, Ye, Mt, xt, Oe];
var mn = new Map([
    ['core', tn],
    ['failsafe', [W, H, ue]],
    ['json', nn],
    ['yaml11', ds],
    ['yaml-1.1', ds],
  ]),
  dn = {
    binary: Re,
    bool: Ke,
    float: Tt,
    floatExp: Et,
    floatNaN: At,
    floatTime: xt,
    int: Ct,
    intHex: $t,
    intOct: It,
    intTime: Mt,
    map: W,
    null: ye,
    omap: Ve,
    pairs: Ue,
    seq: H,
    set: Ye,
    timestamp: Oe,
  },
  gn = {
    'tag:yaml.org,2002:binary': Re,
    'tag:yaml.org,2002:omap': Ve,
    'tag:yaml.org,2002:pairs': Ue,
    'tag:yaml.org,2002:set': Ye,
    'tag:yaml.org,2002:timestamp': Oe,
  };
function Bt(s, e) {
  let t = mn.get(e);
  if (!t)
    if (Array.isArray(s)) t = [];
    else {
      let n = Array.from(mn.keys())
        .filter((i) => i !== 'yaml11')
        .map((i) => JSON.stringify(i))
        .join(', ');
      throw new Error(`Unknown schema "${e}"; use one of ${n} or define customTags array`);
    }
  if (Array.isArray(s)) for (let n of s) t = t.concat(n);
  else typeof s == 'function' && (t = s(t.slice()));
  return t.map((n) => {
    if (typeof n != 'string') return n;
    let i = dn[n];
    if (i) return i;
    let r = Object.keys(dn)
      .map((o) => JSON.stringify(o))
      .join(', ');
    throw new Error(`Unknown custom tag "${n}"; use one of ${r}`);
  });
}
var Pi = (s, e) => (s.key < e.key ? -1 : s.key > e.key ? 1 : 0),
  be = class {
    constructor({
      compat: e,
      customTags: t,
      merge: n,
      resolveKnownTags: i,
      schema: r,
      sortMapEntries: o,
      toStringDefaults: a,
    }) {
      (this.compat = Array.isArray(e) ? Bt(e, 'compat') : e ? Bt(null, e) : null),
        (this.merge = !!n),
        (this.name = (typeof r == 'string' && r) || 'core'),
        (this.knownTags = i ? gn : {}),
        (this.tags = Bt(t, this.name)),
        (this.toStringOptions = a || null),
        Object.defineProperty(this, U, { value: W }),
        Object.defineProperty(this, q, { value: ue }),
        Object.defineProperty(this, ne, { value: H }),
        (this.sortMapEntries = o === !0 ? Pi : o || null);
    }
    clone() {
      let e = Object.create(be.prototype, Object.getOwnPropertyDescriptors(this));
      return (e.tags = this.tags.slice()), e;
    }
  };
function yn(s, e) {
  let t = [],
    n = e.directives === !0;
  if (e.directives !== !1 && s.directives) {
    let c = s.directives.toString(s);
    c ? (t.push(c), (n = !0)) : s.directives.marker && (n = !0);
  }
  n && t.push('---');
  let i = St(s, e),
    { commentString: r } = i.options;
  if (s.commentBefore) {
    t.length !== 1 && t.unshift('');
    let c = r(s.commentBefore);
    t.unshift(z(c, ''));
  }
  let o = !1,
    a = null;
  if (s.contents) {
    if (E(s.contents)) {
      if ((s.contents.spaceBefore && n && t.push(''), s.contents.commentBefore)) {
        let u = r(s.contents.commentBefore);
        t.push(z(u, ''));
      }
      (i.forceBlockIndent = !!s.comment), (a = s.contents.comment);
    }
    let c = a ? void 0 : () => (o = !0),
      f = Q(s.contents, i, () => (a = null), c);
    a && (f += G(f, '', r(a))),
      (f[0] === '|' || f[0] === '>') && t[t.length - 1] === '---' ? (t[t.length - 1] = `--- ${f}`) : t.push(f);
  } else t.push(Q(s.contents, i));
  let l = s.comment;
  return (
    l && o && (l = l.replace(/^\n+/, '')),
    l && ((!o || a) && t[t.length - 1] !== '' && t.push(''), t.push(z(r(l), ''))),
    t.join(`
`) +
      `
`
  );
}
function Ae(s, e, t, n) {
  if (n && typeof n == 'object')
    if (Array.isArray(n))
      for (let i = 0, r = n.length; i < r; ++i) {
        let o = n[i],
          a = Ae(s, n, String(i), o);
        a === void 0 ? delete n[i] : a !== o && (n[i] = a);
      }
    else if (n instanceof Map)
      for (let i of Array.from(n.keys())) {
        let r = n.get(i),
          o = Ae(s, n, i, r);
        o === void 0 ? n.delete(i) : o !== r && n.set(i, o);
      }
    else if (n instanceof Set)
      for (let i of Array.from(n)) {
        let r = Ae(s, n, i, i);
        r === void 0 ? n.delete(i) : r !== i && (n.delete(i), n.add(r));
      }
    else
      for (let [i, r] of Object.entries(n)) {
        let o = Ae(s, n, i, r);
        o === void 0 ? delete n[i] : o !== r && (n[i] = o);
      }
  return s.call(e, t, n);
}
var Z = class {
  constructor(e, t, n) {
    (this.commentBefore = null),
      (this.comment = null),
      (this.errors = []),
      (this.warnings = []),
      Object.defineProperty(this, x, { value: ht });
    let i = null;
    typeof t == 'function' || Array.isArray(t) ? (i = t) : n === void 0 && t && ((n = t), (t = void 0));
    let r = Object.assign({}, Fe, n);
    this.options = r;
    let { version: o } = r;
    n != null && n.directives
      ? ((this.directives = n.directives.atDocument()),
        this.directives.yaml.explicit && (o = this.directives.yaml.version))
      : (this.directives = new C({ version: o })),
      this.setSchema(o, n),
      e === void 0 ? (this.contents = null) : (this.contents = this.createNode(e, i, n));
  }
  clone() {
    let e = Object.create(Z.prototype, { [x]: { value: ht } });
    return (
      (e.commentBefore = this.commentBefore),
      (e.comment = this.comment),
      (e.errors = this.errors.slice()),
      (e.warnings = this.warnings.slice()),
      (e.options = Object.assign({}, this.options)),
      this.directives && (e.directives = this.directives.clone()),
      (e.schema = this.schema.clone()),
      (e.contents = E(this.contents) ? this.contents.clone(e.schema) : this.contents),
      this.range && (e.range = this.range.slice()),
      e
    );
  }
  add(e) {
    Ee(this.contents) && this.contents.add(e);
  }
  addIn(e, t) {
    Ee(this.contents) && this.contents.addIn(e, t);
  }
  createAlias(e, t) {
    if (!e.anchor) {
      let n = ss(this);
      e.anchor = !t || n.has(t) ? ns(t || 'a', n) : t;
    }
    return new ie(e.anchor);
  }
  createNode(e, t, n) {
    let i;
    if (typeof t == 'function') (e = t.call({ '': e }, '', e)), (i = t);
    else if (Array.isArray(t)) {
      let d = (w) => typeof w == 'number' || w instanceof String || w instanceof Number,
        y = t.filter(d).map(String);
      y.length > 0 && (t = t.concat(y)), (i = t);
    } else n === void 0 && t && ((n = t), (t = void 0));
    let { aliasDuplicateObjects: r, anchorPrefix: o, flow: a, keepUndefined: l, onTagObj: c, tag: f } = n || {},
      { onAnchor: u, setAnchors: h, sourceObjects: p } = Ws(this, o || 'a'),
      g = {
        aliasDuplicateObjects: r != null ? r : !0,
        keepUndefined: l != null ? l : !1,
        onAnchor: u,
        onTagObj: c,
        replacer: i,
        schema: this.schema,
        sourceObjects: p,
      },
      m = re(e, f, g);
    return a && T(m) && (m.flow = !0), h(), m;
  }
  createPair(e, t, n = {}) {
    let i = this.createNode(e, null, n),
      r = this.createNode(t, null, n);
    return new L(i, r);
  }
  delete(e) {
    return Ee(this.contents) ? this.contents.delete(e) : !1;
  }
  deleteIn(e) {
    return Ne(e)
      ? this.contents == null
        ? !1
        : ((this.contents = null), !0)
      : Ee(this.contents)
      ? this.contents.deleteIn(e)
      : !1;
  }
  get(e, t) {
    return T(this.contents) ? this.contents.get(e, t) : void 0;
  }
  getIn(e, t) {
    return Ne(e)
      ? !t && v(this.contents)
        ? this.contents.value
        : this.contents
      : T(this.contents)
      ? this.contents.getIn(e, t)
      : void 0;
  }
  has(e) {
    return T(this.contents) ? this.contents.has(e) : !1;
  }
  hasIn(e) {
    return Ne(e) ? this.contents !== void 0 : T(this.contents) ? this.contents.hasIn(e) : !1;
  }
  set(e, t) {
    this.contents == null ? (this.contents = xe(this.schema, [e], t)) : Ee(this.contents) && this.contents.set(e, t);
  }
  setIn(e, t) {
    Ne(e)
      ? (this.contents = t)
      : this.contents == null
      ? (this.contents = xe(this.schema, Array.from(e), t))
      : Ee(this.contents) && this.contents.setIn(e, t);
  }
  setSchema(e, t = {}) {
    typeof e == 'number' && (e = String(e));
    let n;
    switch (e) {
      case '1.1':
        this.directives ? (this.directives.yaml.version = '1.1') : (this.directives = new C({ version: '1.1' })),
          (n = { merge: !0, resolveKnownTags: !1, schema: 'yaml-1.1' });
        break;
      case '1.2':
        this.directives ? (this.directives.yaml.version = '1.2') : (this.directives = new C({ version: '1.2' })),
          (n = { merge: !1, resolveKnownTags: !0, schema: 'core' });
        break;
      case null:
        this.directives && delete this.directives, (n = null);
        break;
      default: {
        let i = JSON.stringify(e);
        throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`);
      }
    }
    if (t.schema instanceof Object) this.schema = t.schema;
    else if (n) this.schema = new be(Object.assign(n, t));
    else throw new Error('With a null YAML version, the { schema: Schema } option is required');
  }
  toJS({ json: e, jsonArg: t, mapAsMap: n, maxAliasCount: i, onAnchor: r, reviver: o } = {}) {
    let a = {
        anchors: new Map(),
        doc: this,
        keep: !e,
        mapAsMap: n === !0,
        mapKeyWarned: !1,
        maxAliasCount: typeof i == 'number' ? i : 100,
        stringify: Q,
      },
      l = M(this.contents, t || '', a);
    if (typeof r == 'function') for (let { count: c, res: f } of a.anchors.values()) r(f, c);
    return typeof o == 'function' ? Ae(o, { '': l }, '', l) : l;
  }
  toJSON(e, t) {
    return this.toJS({ json: !0, jsonArg: e, mapAsMap: !1, onAnchor: t });
  }
  toString(e = {}) {
    if (this.errors.length > 0) throw new Error('Document with errors cannot be stringified');
    if ('indent' in e && (!Number.isInteger(e.indent) || Number(e.indent) <= 0)) {
      let t = JSON.stringify(e.indent);
      throw new Error(`"indent" option must be a positive integer, not ${t}`);
    }
    return yn(this, e);
  }
};
function Ee(s) {
  if (T(s)) return !0;
  throw new Error('Expected a YAML collection as document contents');
}
var Ge = class extends Error {
    constructor(e, t, n, i) {
      super(), (this.name = e), (this.code = n), (this.message = i), (this.pos = t);
    }
  },
  F = class extends Ge {
    constructor(e, t, n) {
      super('YAMLParseError', e, t, n);
    }
  },
  Qe = class extends Ge {
    constructor(e, t, n) {
      super('YAMLWarning', e, t, n);
    }
  },
  gs = (s, e) => (t) => {
    if (t.pos[0] === -1) return;
    t.linePos = t.pos.map((a) => e.linePos(a));
    let { line: n, col: i } = t.linePos[0];
    t.message += ` at line ${n}, column ${i}`;
    let r = i - 1,
      o = s.substring(e.lineStarts[n - 1], e.lineStarts[n]).replace(/[\n\r]+$/, '');
    if (r >= 60 && o.length > 80) {
      let a = Math.min(r - 39, o.length - 79);
      (o = '\u2026' + o.substring(a)), (r -= a - 1);
    }
    if ((o.length > 80 && (o = o.substring(0, 79) + '\u2026'), n > 1 && /^ *$/.test(o.substring(0, r)))) {
      let a = s.substring(e.lineStarts[n - 2], e.lineStarts[n - 1]);
      a.length > 80 &&
        (a =
          a.substring(0, 79) +
          `\u2026
`),
        (o = a + o);
    }
    if (/[^ ]/.test(o)) {
      let a = 1,
        l = t.linePos[1];
      l && l.line === n && l.col > i && (a = Math.min(l.col - i, 80 - r));
      let c = ' '.repeat(r) + '^'.repeat(a);
      t.message += `:

${o}
${c}
`;
    }
  };
function ee(s, { flow: e, indicator: t, next: n, offset: i, onError: r, startOnNewline: o }) {
  let a = !1,
    l = o,
    c = o,
    f = '',
    u = '',
    h = !1,
    p = !1,
    g = null,
    m = null,
    d = null,
    y = null,
    w = null;
  for (let k of s)
    switch (
      (p &&
        (k.type !== 'space' &&
          k.type !== 'newline' &&
          k.type !== 'comma' &&
          r(k.offset, 'MISSING_CHAR', 'Tags and anchors must be separated from the next token by white space'),
        (p = !1)),
      k.type)
    ) {
      case 'space':
        !e &&
          l &&
          t !== 'doc-start' &&
          k.source[0] === '    ' &&
          r(k, 'TAB_AS_INDENT', 'Tabs are not allowed as indentation'),
          (c = !0);
        break;
      case 'comment': {
        c || r(k, 'MISSING_CHAR', 'Comments must be separated from other tokens by white space characters');
        let A = k.source.substring(1) || ' ';
        f ? (f += u + A) : (f = A), (u = ''), (l = !1);
        break;
      }
      case 'newline':
        l ? (f ? (f += k.source) : (a = !0)) : (u += k.source), (l = !0), (h = !0), (c = !0);
        break;
      case 'anchor':
        g && r(k, 'MULTIPLE_ANCHORS', 'A node can have at most one anchor'),
          (g = k),
          w === null && (w = k.offset),
          (l = !1),
          (c = !1),
          (p = !0);
        break;
      case 'tag': {
        m && r(k, 'MULTIPLE_TAGS', 'A node can have at most one tag'),
          (m = k),
          w === null && (w = k.offset),
          (l = !1),
          (c = !1),
          (p = !0);
        break;
      }
      case t:
        (g || m) && r(k, 'BAD_PROP_ORDER', `Anchors and tags must be after the ${k.source} indicator`),
          y && r(k, 'UNEXPECTED_TOKEN', `Unexpected ${k.source} in ${e || 'collection'}`),
          (y = k),
          (l = !1),
          (c = !1);
        break;
      case 'comma':
        if (e) {
          d && r(k, 'UNEXPECTED_TOKEN', `Unexpected , in ${e}`), (d = k), (l = !1), (c = !1);
          break;
        }
      default:
        r(k, 'UNEXPECTED_TOKEN', `Unexpected ${k.type} token`), (l = !1), (c = !1);
    }
  let N = s[s.length - 1],
    b = N ? N.offset + N.source.length : i;
  return (
    p &&
      n &&
      n.type !== 'space' &&
      n.type !== 'newline' &&
      n.type !== 'comma' &&
      (n.type !== 'scalar' || n.source !== '') &&
      r(n.offset, 'MISSING_CHAR', 'Tags and anchors must be separated from the next token by white space'),
    {
      comma: d,
      found: y,
      spaceBefore: a,
      comment: f,
      hasNewline: h,
      anchor: g,
      tag: m,
      end: b,
      start: w != null ? w : b,
    }
  );
}
function me(s) {
  if (!s) return null;
  switch (s.type) {
    case 'alias':
    case 'scalar':
    case 'double-quoted-scalar':
    case 'single-quoted-scalar':
      if (
        s.source.includes(`
`)
      )
        return !0;
      if (s.end) {
        for (let e of s.end) if (e.type === 'newline') return !0;
      }
      return !1;
    case 'flow-collection':
      for (let e of s.items) {
        for (let t of e.start) if (t.type === 'newline') return !0;
        if (e.sep) {
          for (let t of e.sep) if (t.type === 'newline') return !0;
        }
        if (me(e.key) || me(e.value)) return !0;
      }
      return !1;
    default:
      return !0;
  }
}
function We(s, e, t) {
  if ((e == null ? void 0 : e.type) === 'flow-collection') {
    let n = e.end[0];
    n.indent === s &&
      (n.source === ']' || n.source === '}') &&
      me(e) &&
      t(n, 'BAD_INDENT', 'Flow end indicator should be more indented than parent', !0);
  }
}
function jt(s, e, t) {
  let { uniqueKeys: n } = s.options;
  if (n === !1) return !1;
  let i =
    typeof n == 'function'
      ? n
      : (r, o) => r === o || (v(r) && v(o) && r.value === o.value && !(r.value === '<<' && s.schema.merge));
  return e.some((r) => i(r.key, t));
}
var bn = 'All mapping items must start at the same column';
function wn({ composeNode: s, composeEmptyNode: e }, t, n, i) {
  var r;
  let o = new $(t.schema);
  t.atRoot && (t.atRoot = !1);
  let a = n.offset;
  for (let l of n.items) {
    let { start: c, key: f, sep: u, value: h } = l,
      p = ee(c, {
        indicator: 'explicit-key-ind',
        next: f || (u == null ? void 0 : u[0]),
        offset: a,
        onError: i,
        startOnNewline: !0,
      }),
      g = !p.found;
    if (g) {
      if (
        (f &&
          (f.type === 'block-seq'
            ? i(a, 'BLOCK_AS_IMPLICIT_KEY', 'A block sequence may not be used as an implicit map key')
            : 'indent' in f && f.indent !== n.indent && i(a, 'BAD_INDENT', bn)),
        !p.anchor && !p.tag && !u)
      ) {
        p.comment &&
          (o.comment
            ? (o.comment +=
                `
` + p.comment)
            : (o.comment = p.comment));
        continue;
      }
    } else ((r = p.found) === null || r === void 0 ? void 0 : r.indent) !== n.indent && i(a, 'BAD_INDENT', bn);
    g && me(f) && i(f, 'MULTILINE_IMPLICIT_KEY', 'Implicit keys need to be on a single line');
    let m = p.end,
      d = f ? s(t, f, p, i) : e(t, m, c, null, p, i);
    t.schema.compat && We(n.indent, f, i), jt(t, o.items, d) && i(m, 'DUPLICATE_KEY', 'Map keys must be unique');
    let y = ee(u || [], {
      indicator: 'map-value-ind',
      next: h,
      offset: d.range[2],
      onError: i,
      startOnNewline: !f || f.type === 'block-scalar',
    });
    if (((a = y.end), y.found)) {
      g &&
        ((h == null ? void 0 : h.type) === 'block-map' &&
          !y.hasNewline &&
          i(a, 'BLOCK_AS_IMPLICIT_KEY', 'Nested mappings are not allowed in compact mappings'),
        t.options.strict &&
          p.start < y.found.offset - 1024 &&
          i(
            d.range,
            'KEY_OVER_1024_CHARS',
            'The : indicator must be at most 1024 chars after the start of an implicit block mapping key',
          ));
      let w = h ? s(t, h, y, i) : e(t, a, u, null, y, i);
      t.schema.compat && We(n.indent, h, i), (a = w.range[2]);
      let N = new L(d, w);
      t.options.keepSourceTokens && (N.srcToken = l), o.items.push(N);
    } else {
      g && i(d.range, 'MISSING_CHAR', 'Implicit map keys need to be followed by map values'),
        y.comment &&
          (d.comment
            ? (d.comment +=
                `
` + y.comment)
            : (d.comment = y.comment));
      let w = new L(d);
      t.options.keepSourceTokens && (w.srcToken = l), o.items.push(w);
    }
  }
  return (o.range = [n.offset, a, a]), o;
}
function Sn({ composeNode: s, composeEmptyNode: e }, t, n, i) {
  let r = new B(t.schema);
  t.atRoot && (t.atRoot = !1);
  let o = n.offset;
  for (let { start: a, value: l } of n.items) {
    let c = ee(a, { indicator: 'seq-item-ind', next: l, offset: o, onError: i, startOnNewline: !0 });
    if (((o = c.end), !c.found))
      if (c.anchor || c.tag || l)
        l && l.type === 'block-seq'
          ? i(o, 'BAD_INDENT', 'All sequence items must start at the same column')
          : i(o, 'MISSING_CHAR', 'Sequence item without - indicator');
      else {
        c.comment && (r.comment = c.comment);
        continue;
      }
    let f = l ? s(t, l, c, i) : e(t, o, a, null, c, i);
    t.schema.compat && We(n.indent, l, i), (o = f.range[2]), r.items.push(f);
  }
  return (r.range = [n.offset, o, o]), r;
}
function te(s, e, t, n) {
  let i = '';
  if (s) {
    let r = !1,
      o = '';
    for (let a of s) {
      let { source: l, type: c } = a;
      switch (c) {
        case 'space':
          r = !0;
          break;
        case 'comment': {
          t && !r && n(a, 'MISSING_CHAR', 'Comments must be separated from other tokens by white space characters');
          let f = l.substring(1) || ' ';
          i ? (i += o + f) : (i = f), (o = '');
          break;
        }
        case 'newline':
          i && (o += l), (r = !0);
          break;
        default:
          n(a, 'UNEXPECTED_TOKEN', `Unexpected ${c} at node end`);
      }
      e += l.length;
    }
  }
  return { comment: i, offset: e };
}
var ys = 'Block collections are not allowed within flow collections',
  bs = (s) => s && (s.type === 'block-map' || s.type === 'block-seq');
function kn({ composeNode: s, composeEmptyNode: e }, t, n, i) {
  let r = n.start.source === '{',
    o = r ? 'flow map' : 'flow sequence',
    a = r ? new $(t.schema) : new B(t.schema);
  a.flow = !0;
  let l = t.atRoot;
  l && (t.atRoot = !1);
  let c = n.offset + n.start.source.length;
  for (let g = 0; g < n.items.length; ++g) {
    let m = n.items[g],
      { start: d, key: y, sep: w, value: N } = m,
      b = ee(d, {
        flow: o,
        indicator: 'explicit-key-ind',
        next: y || (w == null ? void 0 : w[0]),
        offset: c,
        onError: i,
        startOnNewline: !1,
      });
    if (!b.found) {
      if (!b.anchor && !b.tag && !w && !N) {
        g === 0 && b.comma
          ? i(b.comma, 'UNEXPECTED_TOKEN', `Unexpected , in ${o}`)
          : g < n.items.length - 1 && i(b.start, 'UNEXPECTED_TOKEN', `Unexpected empty item in ${o}`),
          b.comment &&
            (a.comment
              ? (a.comment +=
                  `
` + b.comment)
              : (a.comment = b.comment)),
          (c = b.end);
        continue;
      }
      !r &&
        t.options.strict &&
        me(y) &&
        i(y, 'MULTILINE_IMPLICIT_KEY', 'Implicit keys of flow sequence pairs need to be on a single line');
    }
    if (g === 0) b.comma && i(b.comma, 'UNEXPECTED_TOKEN', `Unexpected , in ${o}`);
    else if ((b.comma || i(b.start, 'MISSING_CHAR', `Missing , between ${o} items`), b.comment)) {
      let k = '';
      e: for (let A of d)
        switch (A.type) {
          case 'comma':
          case 'space':
            break;
          case 'comment':
            k = A.source.substring(1);
            break e;
          default:
            break e;
        }
      if (k) {
        let A = a.items[a.items.length - 1];
        O(A) && (A = A.value || A.key),
          A.comment
            ? (A.comment +=
                `
` + k)
            : (A.comment = k),
          (b.comment = b.comment.substring(k.length + 1));
      }
    }
    if (!r && !w && !b.found) {
      let k = N ? s(t, N, b, i) : e(t, b.end, w, null, b, i);
      a.items.push(k), (c = k.range[2]), bs(N) && i(k.range, 'BLOCK_IN_FLOW', ys);
    } else {
      let k = b.end,
        A = y ? s(t, y, b, i) : e(t, k, d, null, b, i);
      bs(y) && i(A.range, 'BLOCK_IN_FLOW', ys);
      let j = ee(w || [], {
        flow: o,
        indicator: 'map-value-ind',
        next: N,
        offset: A.range[2],
        onError: i,
        startOnNewline: !1,
      });
      if (j.found) {
        if (!r && !b.found && t.options.strict) {
          if (w)
            for (let X of w) {
              if (X === j.found) break;
              if (X.type === 'newline') {
                i(X, 'MULTILINE_IMPLICIT_KEY', 'Implicit keys of flow sequence pairs need to be on a single line');
                break;
              }
            }
          b.start < j.found.offset - 1024 &&
            i(
              j.found,
              'KEY_OVER_1024_CHARS',
              'The : indicator must be at most 1024 chars after the start of an implicit flow sequence key',
            );
        }
      } else
        N &&
          ('source' in N && N.source && N.source[0] === ':'
            ? i(N, 'MISSING_CHAR', `Missing space after : in ${o}`)
            : i(j.start, 'MISSING_CHAR', `Missing , or : between ${o} items`));
      let Le = N ? s(t, N, j, i) : j.found ? e(t, j.end, w, null, j, i) : null;
      Le
        ? bs(N) && i(Le.range, 'BLOCK_IN_FLOW', ys)
        : j.comment &&
          (A.comment
            ? (A.comment +=
                `
` + j.comment)
            : (A.comment = j.comment));
      let Jt = new L(A, Le);
      if ((t.options.keepSourceTokens && (Jt.srcToken = m), r)) {
        let X = a;
        jt(t, X.items, A) && i(k, 'DUPLICATE_KEY', 'Map keys must be unique'), X.items.push(Jt);
      } else {
        let X = new $(t.schema);
        (X.flow = !0), X.items.push(Jt), a.items.push(X);
      }
      c = Le ? Le.range[2] : j.end;
    }
  }
  let f = r ? '}' : ']',
    [u, ...h] = n.end,
    p = c;
  if (u && u.source === f) p = u.offset + u.source.length;
  else {
    let g = o[0].toUpperCase() + o.substring(1),
      m = l
        ? `${g} must end with a ${f}`
        : `${g} in block collection must be sufficiently indented and end with a ${f}`;
    i(c, l ? 'MISSING_CHAR' : 'BAD_INDENT', m), u && u.source.length !== 1 && h.unshift(u);
  }
  if (h.length > 0) {
    let g = te(h, p, t.options.strict, i);
    g.comment &&
      (a.comment
        ? (a.comment +=
            `
` + g.comment)
        : (a.comment = g.comment)),
      (a.range = [n.offset, p, g.offset]);
  } else a.range = [n.offset, p, p];
  return a;
}
function Nn(s, e, t, n, i) {
  let r;
  switch (t.type) {
    case 'block-map': {
      r = wn(s, e, t, i);
      break;
    }
    case 'block-seq': {
      r = Sn(s, e, t, i);
      break;
    }
    case 'flow-collection': {
      r = kn(s, e, t, i);
      break;
    }
  }
  if (!n) return r;
  let o = e.directives.tagName(n.source, (h) => i(n, 'TAG_RESOLVE_FAILED', h));
  if (!o) return r;
  let a = r.constructor;
  if (o === '!' || o === a.tagName) return (r.tag = a.tagName), r;
  let l = D(r) ? 'map' : 'seq',
    c = e.schema.tags.find((h) => h.collection === l && h.tag === o);
  if (!c) {
    let h = e.schema.knownTags[o];
    if (h && h.collection === l) e.schema.tags.push(Object.assign({}, h, { default: !1 })), (c = h);
    else return i(n, 'TAG_RESOLVE_FAILED', `Unresolved tag: ${o}`, !0), (r.tag = o), r;
  }
  let f = c.resolve(r, (h) => i(n, 'TAG_RESOLVE_FAILED', h), e.options),
    u = E(f) ? f : new S(f);
  return (u.range = r.range), (u.tag = o), c != null && c.format && (u.format = c.format), u;
}
function Dt(s, e, t) {
  let n = s.offset,
    i = _i(s, e, t);
  if (!i) return { value: '', type: null, comment: '', range: [n, n, n] };
  let r = i.mode === '>' ? S.BLOCK_FOLDED : S.BLOCK_LITERAL,
    o = s.source ? Mi(s.source) : [],
    a = o.length;
  for (let m = o.length - 1; m >= 0; --m) {
    let d = o[m][1];
    if (d === '' || d === '\r') a = m;
    else break;
  }
  if (!s.source || a === 0) {
    let m =
        i.chomp === '+'
          ? `
`.repeat(Math.max(0, o.length - 1))
          : '',
      d = n + i.length;
    return s.source && (d += s.source.length), { value: m, type: r, comment: i.comment, range: [n, d, d] };
  }
  let l = s.indent + i.indent,
    c = s.offset + i.length,
    f = 0;
  for (let m = 0; m < a; ++m) {
    let [d, y] = o[m];
    if (y === '' || y === '\r') i.indent === 0 && d.length > l && (l = d.length);
    else {
      if (d.length < l) {
        let w = 'Block scalars with more-indented leading empty lines must use an explicit indentation indicator';
        t(c + d.length, 'MISSING_CHAR', w);
      }
      i.indent === 0 && (l = d.length), (f = m);
      break;
    }
    c += d.length + y.length + 1;
  }
  let u = '',
    h = '',
    p = !1;
  for (let m = 0; m < f; ++m)
    u +=
      o[m][0].slice(l) +
      `
`;
  for (let m = f; m < a; ++m) {
    let [d, y] = o[m];
    c += d.length + y.length + 1;
    let w = y[y.length - 1] === '\r';
    if ((w && (y = y.slice(0, -1)), y && d.length < l)) {
      let b = `Block scalar lines must not be less indented than their ${
        i.indent ? 'explicit indentation indicator' : 'first line'
      }`;
      t(c - y.length - (w ? 2 : 1), 'BAD_INDENT', b), (d = '');
    }
    r === S.BLOCK_LITERAL
      ? ((u += h + d.slice(l) + y),
        (h = `
`))
      : d.length > l || y[0] === '    '
      ? (h === ' '
          ? (h = `
`)
          : !p &&
            h ===
              `
` &&
            (h = `

`),
        (u += h + d.slice(l) + y),
        (h = `
`),
        (p = !0))
      : y === ''
      ? h ===
        `
`
        ? (u += `
`)
        : (h = `
`)
      : ((u += h + y), (h = ' '), (p = !1));
  }
  switch (i.chomp) {
    case '-':
      break;
    case '+':
      for (let m = a; m < o.length; ++m)
        u +=
          `
` + o[m][0].slice(l);
      u[u.length - 1] !==
        `
` &&
        (u += `
`);
      break;
    default:
      u += `
`;
  }
  let g = n + i.length + s.source.length;
  return { value: u, type: r, comment: i.comment, range: [n, g, g] };
}
function _i({ offset: s, props: e }, t, n) {
  if (e[0].type !== 'block-scalar-header') return n(e[0], 'IMPOSSIBLE', 'Block scalar header not found'), null;
  let { source: i } = e[0],
    r = i[0],
    o = 0,
    a = '',
    l = -1;
  for (let h = 1; h < i.length; ++h) {
    let p = i[h];
    if (!a && (p === '-' || p === '+')) a = p;
    else {
      let g = Number(p);
      !o && g ? (o = g) : l === -1 && (l = s + h);
    }
  }
  l !== -1 && n(l, 'UNEXPECTED_TOKEN', `Block scalar header includes extra characters: ${i}`);
  let c = !1,
    f = '',
    u = i.length;
  for (let h = 1; h < e.length; ++h) {
    let p = e[h];
    switch (p.type) {
      case 'space':
        c = !0;
      case 'newline':
        u += p.source.length;
        break;
      case 'comment':
        t && !c && n(p, 'MISSING_CHAR', 'Comments must be separated from other tokens by white space characters'),
          (u += p.source.length),
          (f = p.source.substring(1));
        break;
      case 'error':
        n(p, 'UNEXPECTED_TOKEN', p.message), (u += p.source.length);
        break;
      default: {
        let g = `Unexpected token in block scalar header: ${p.type}`;
        n(p, 'UNEXPECTED_TOKEN', g);
        let m = p.source;
        m && typeof m == 'string' && (u += m.length);
      }
    }
  }
  return { mode: r, indent: o, chomp: a, comment: f, length: u };
}
function Mi(s) {
  let e = s.split(/\n( *)/),
    t = e[0],
    n = t.match(/^( *)/),
    r = [n && n[1] ? [n[1], t.slice(n[1].length)] : ['', t]];
  for (let o = 1; o < e.length; o += 2) r.push([e[o], e[o + 1]]);
  return r;
}
function qt(s, e, t) {
  let { offset: n, type: i, source: r, end: o } = s,
    a,
    l,
    c = (h, p, g) => t(n + h, p, g);
  switch (i) {
    case 'scalar':
      (a = S.PLAIN), (l = xi(r, c));
      break;
    case 'single-quoted-scalar':
      (a = S.QUOTE_SINGLE), (l = Bi(r, c));
      break;
    case 'double-quoted-scalar':
      (a = S.QUOTE_DOUBLE), (l = ji(r, c));
      break;
    default:
      return (
        t(s, 'UNEXPECTED_TOKEN', `Expected a flow scalar value, but found: ${i}`),
        { value: '', type: null, comment: '', range: [n, n + r.length, n + r.length] }
      );
  }
  let f = n + r.length,
    u = te(o, f, e, t);
  return { value: l, type: a, comment: u.comment, range: [n, f, u.offset] };
}
function xi(s, e) {
  let t = '';
  switch (s[0]) {
    case '    ':
      t = 'a tab character';
      break;
    case ',':
      t = 'flow indicator character ,';
      break;
    case '%':
      t = 'directive indicator character %';
      break;
    case '|':
    case '>': {
      t = `block scalar indicator ${s[0]}`;
      break;
    }
    case '@':
    case '`': {
      t = `reserved character ${s[0]}`;
      break;
    }
  }
  return t && e(0, 'BAD_SCALAR_START', `Plain value cannot start with ${t}`), vn(s);
}
function Bi(s, e) {
  return (
    (s[s.length - 1] !== "'" || s.length === 1) && e(s.length, 'MISSING_CHAR', "Missing closing 'quote"),
    vn(s.slice(1, -1)).replace(/''/g, "'")
  );
}
function vn(s) {
  let e, t;
  try {
    (e = new RegExp(
      `(.*?)(?<![     ])[     ]*\r?
`,
      'sy',
    )),
      (t = new RegExp(
        `[     ]*(.*?)(?:(?<![     ])[     ]*)?\r?
`,
        'sy',
      ));
  } catch (l) {
    (e = /(.*?)[ \t]*\r?\n/sy), (t = /[ \t]*(.*?)[ \t]*\r?\n/sy);
  }
  let n = e.exec(s);
  if (!n) return s;
  let i = n[1],
    r = ' ',
    o = e.lastIndex;
  for (t.lastIndex = o; (n = t.exec(s)); )
    n[1] === ''
      ? r ===
        `
`
        ? (i += r)
        : (r = `
`)
      : ((i += r + n[1]), (r = ' ')),
      (o = t.lastIndex);
  let a = /[ \t]*(.*)/sy;
  return (a.lastIndex = o), (n = a.exec(s)), i + r + ((n && n[1]) || '');
}
function ji(s, e) {
  let t = '';
  for (let n = 1; n < s.length - 1; ++n) {
    let i = s[n];
    if (
      !(
        i === '\r' &&
        s[n + 1] ===
          `
`
      )
    )
      if (
        i ===
        `
`
      ) {
        let { fold: r, offset: o } = Di(s, n);
        (t += r), (n = o);
      } else if (i === '\\') {
        let r = s[++n],
          o = qi[r];
        if (o) t += o;
        else if (
          r ===
          `
`
        )
          for (r = s[n + 1]; r === ' ' || r === '    '; ) r = s[++n + 1];
        else if (
          r === '\r' &&
          s[n + 1] ===
            `
`
        )
          for (r = s[++n + 1]; r === ' ' || r === '    '; ) r = s[++n + 1];
        else if (r === 'x' || r === 'u' || r === 'U') {
          let a = { x: 2, u: 4, U: 8 }[r];
          (t += Fi(s, n + 1, a, e)), (n += a);
        } else {
          let a = s.substr(n - 1, 2);
          e(n - 1, 'BAD_DQ_ESCAPE', `Invalid escape sequence ${a}`), (t += a);
        }
      } else if (i === ' ' || i === '    ') {
        let r = n,
          o = s[n + 1];
        for (; o === ' ' || o === '    '; ) o = s[++n + 1];
        o !==
          `
` &&
          !(
            o === '\r' &&
            s[n + 2] ===
              `
`
          ) &&
          (t += n > r ? s.slice(r, n + 1) : i);
      } else t += i;
  }
  return (s[s.length - 1] !== '"' || s.length === 1) && e(s.length, 'MISSING_CHAR', 'Missing closing "quote'), t;
}
function Di(s, e) {
  let t = '',
    n = s[e + 1];
  for (
    ;
    (n === ' ' ||
      n === '    ' ||
      n ===
        `
` ||
      n === '\r') &&
    !(
      n === '\r' &&
      s[e + 2] !==
        `
`
    );

  )
    n ===
      `
` &&
      (t += `
`),
      (e += 1),
      (n = s[e + 1]);
  return t || (t = ' '), { fold: t, offset: e };
}
var qi = {
  0: '\0',
  a: '\x07',
  b: '\b',
  e: '\x1B',
  f: '\f',
  n: `
`,
  r: '\r',
  t: '    ',
  v: '\v',
  N: '\x85',
  _: '\xA0',
  L: '\u2028',
  P: '\u2029',
  ' ': ' ',
  '"': '"',
  '/': '/',
  '\\': '\\',
  '    ': '    ',
};
function Fi(s, e, t, n) {
  let i = s.substr(e, t),
    o = i.length === t && /^[0-9a-fA-F]+$/.test(i) ? parseInt(i, 16) : NaN;
  if (isNaN(o)) {
    let a = s.substr(e - 2, t + 2);
    return n(e - 2, 'BAD_DQ_ESCAPE', `Invalid escape sequence ${a}`), a;
  }
  return String.fromCodePoint(o);
}
function ws(s, e, t, n) {
  let {
      value: i,
      type: r,
      comment: o,
      range: a,
    } = e.type === 'block-scalar' ? Dt(e, s.options.strict, n) : qt(e, s.options.strict, n),
    l = t ? s.directives.tagName(t.source, (u) => n(t, 'TAG_RESOLVE_FAILED', u)) : null,
    c = t && l ? Ki(s.schema, i, l, t, n) : e.type === 'scalar' ? Ri(s, i, e, n) : s.schema[q],
    f;
  try {
    let u = c.resolve(i, (h) => n(t || e, 'TAG_RESOLVE_FAILED', h), s.options);
    f = v(u) ? u : new S(u);
  } catch (u) {
    let h = u instanceof Error ? u.message : String(u);
    n(t || e, 'TAG_RESOLVE_FAILED', h), (f = new S(i));
  }
  return (
    (f.range = a),
    (f.source = i),
    r && (f.type = r),
    l && (f.tag = l),
    c.format && (f.format = c.format),
    o && (f.comment = o),
    f
  );
}
function Ki(s, e, t, n, i) {
  var r;
  if (t === '!') return s[q];
  let o = [];
  for (let l of s.tags)
    if (!l.collection && l.tag === t)
      if (l.default && l.test) o.push(l);
      else return l;
  for (let l of o) if (!((r = l.test) === null || r === void 0) && r.test(e)) return l;
  let a = s.knownTags[t];
  return a && !a.collection
    ? (s.tags.push(Object.assign({}, a, { default: !1, test: void 0 })), a)
    : (i(n, 'TAG_RESOLVE_FAILED', `Unresolved tag: ${t}`, t !== 'tag:yaml.org,2002:str'), s[q]);
}
function Ri({ directives: s, schema: e }, t, n, i) {
  let r =
    e.tags.find((o) => {
      var a;
      return o.default && ((a = o.test) === null || a === void 0 ? void 0 : a.test(t));
    }) || e[q];
  if (e.compat) {
    let o =
      e.compat.find((a) => {
        var l;
        return a.default && ((l = a.test) === null || l === void 0 ? void 0 : l.test(t));
      }) || e[q];
    if (r.tag !== o.tag) {
      let a = s.tagString(r.tag),
        l = s.tagString(o.tag),
        c = `Value may be parsed as either ${a} or ${l}`;
      i(n, 'TAG_RESOLVE_FAILED', c, !0);
    }
  }
  return r;
}
function On(s, e, t) {
  if (e) {
    t === null && (t = e.length);
    for (let n = t - 1; n >= 0; --n) {
      let i = e[n];
      switch (i.type) {
        case 'space':
        case 'comment':
        case 'newline':
          s -= i.source.length;
          continue;
      }
      for (i = e[++n]; (i == null ? void 0 : i.type) === 'space'; ) (s += i.source.length), (i = e[++n]);
      break;
    }
  }
  return s;
}
var Ui = { composeNode: Ss, composeEmptyNode: ks };
function Ss(s, e, t, n) {
  let { spaceBefore: i, comment: r, anchor: o, tag: a } = t,
    l;
  switch (e.type) {
    case 'alias':
      (l = Vi(s, e, n)), (o || a) && n(e, 'ALIAS_PROPS', 'An alias node must not specify any properties');
      break;
    case 'scalar':
    case 'single-quoted-scalar':
    case 'double-quoted-scalar':
    case 'block-scalar':
      (l = ws(s, e, a, n)), o && (l.anchor = o.source.substring(1));
      break;
    case 'block-map':
    case 'block-seq':
    case 'flow-collection':
      (l = Nn(Ui, s, e, a, n)), o && (l.anchor = o.source.substring(1));
      break;
    default:
      throw (console.log(e), new Error(`Unsupporten token type: ${e.type}`));
  }
  return (
    o && l.anchor === '' && n(o, 'BAD_ALIAS', 'Anchor cannot be an empty string'),
    i && (l.spaceBefore = !0),
    r && (e.type === 'scalar' && e.source === '' ? (l.comment = r) : (l.commentBefore = r)),
    s.options.keepSourceTokens && (l.srcToken = e),
    l
  );
}
function ks(s, e, t, n, { spaceBefore: i, comment: r, anchor: o, tag: a }, l) {
  let c = { type: 'scalar', offset: On(e, t, n), indent: -1, source: '' },
    f = ws(s, c, a, l);
  return (
    o && ((f.anchor = o.source.substring(1)), f.anchor === '' && l(o, 'BAD_ALIAS', 'Anchor cannot be an empty string')),
    i && (f.spaceBefore = !0),
    r && (f.comment = r),
    f
  );
}
function Vi({ options: s }, { offset: e, source: t, end: n }, i) {
  let r = new ie(t.substring(1));
  r.source === '' && i(e, 'BAD_ALIAS', 'Alias cannot be an empty string');
  let o = e + t.length,
    a = te(n, o, s.strict, i);
  return (r.range = [e, o, a.offset]), a.comment && (r.comment = a.comment), r;
}
function An(s, e, { offset: t, start: n, value: i, end: r }, o) {
  let a = Object.assign({ directives: e }, s),
    l = new Z(void 0, a),
    c = { atRoot: !0, directives: l.directives, options: l.options, schema: l.schema },
    f = ee(n, {
      indicator: 'doc-start',
      next: i || (r == null ? void 0 : r[0]),
      offset: t,
      onError: o,
      startOnNewline: !0,
    });
  f.found &&
    ((l.directives.marker = !0),
    i &&
      (i.type === 'block-map' || i.type === 'block-seq') &&
      !f.hasNewline &&
      o(f.end, 'MISSING_CHAR', 'Block collection cannot start on same line with directives-end marker')),
    (l.contents = i ? Ss(c, i, f, o) : ks(c, f.end, n, null, f, o));
  let u = l.contents.range[2],
    h = te(r, u, !1, o);
  return h.comment && (l.comment = h.comment), (l.range = [t, u, h.offset]), l;
}
function He(s) {
  if (typeof s == 'number') return [s, s + 1];
  if (Array.isArray(s)) return s.length === 2 ? s : [s[0], s[1]];
  let { offset: e, source: t } = s;
  return [e, e + (typeof t == 'string' ? t.length : 1)];
}
function En(s) {
  var e;
  let t = '',
    n = !1,
    i = !1;
  for (let r = 0; r < s.length; ++r) {
    let o = s[r];
    switch (o[0]) {
      case '#':
        (t +=
          (t === ''
            ? ''
            : i
            ? `

`
            : `
`) + (o.substring(1) || ' ')),
          (n = !0),
          (i = !1);
        break;
      case '%':
        ((e = s[r + 1]) === null || e === void 0 ? void 0 : e[0]) !== '#' && (r += 1), (n = !1);
        break;
      default:
        n || (i = !0), (n = !1);
    }
  }
  return { comment: t, afterEmptyLine: i };
}
var Xe = class {
  constructor(e = {}) {
    (this.doc = null),
      (this.atDirectives = !1),
      (this.prelude = []),
      (this.errors = []),
      (this.warnings = []),
      (this.onError = (t, n, i, r) => {
        let o = He(t);
        r ? this.warnings.push(new Qe(o, n, i)) : this.errors.push(new F(o, n, i));
      }),
      (this.directives = new C({ version: e.version || Fe.version })),
      (this.options = e);
  }
  decorate(e, t) {
    let { comment: n, afterEmptyLine: i } = En(this.prelude);
    if (n) {
      let r = e.contents;
      if (t)
        e.comment = e.comment
          ? `${e.comment}
${n}`
          : n;
      else if (i || e.directives.marker || !r) e.commentBefore = n;
      else if (T(r) && !r.flow && r.items.length > 0) {
        let o = r.items[0];
        O(o) && (o = o.key);
        let a = o.commentBefore;
        o.commentBefore = a
          ? `${n}
${a}`
          : n;
      } else {
        let o = r.commentBefore;
        r.commentBefore = o
          ? `${n}
${o}`
          : n;
      }
    }
    t
      ? (Array.prototype.push.apply(e.errors, this.errors), Array.prototype.push.apply(e.warnings, this.warnings))
      : ((e.errors = this.errors), (e.warnings = this.warnings)),
      (this.prelude = []),
      (this.errors = []),
      (this.warnings = []);
  }
  streamInfo() {
    return {
      comment: En(this.prelude).comment,
      directives: this.directives,
      errors: this.errors,
      warnings: this.warnings,
    };
  }
  *compose(e, t = !1, n = -1) {
    for (let i of e) yield* this.next(i);
    yield* this.end(t, n);
  }
  *next(e) {
    switch (e.type) {
      case 'directive':
        this.directives.add(e.source, (t, n, i) => {
          let r = He(e);
          (r[0] += t), this.onError(r, 'BAD_DIRECTIVE', n, i);
        }),
          this.prelude.push(e.source),
          (this.atDirectives = !0);
        break;
      case 'document': {
        let t = An(this.options, this.directives, e, this.onError);
        this.atDirectives &&
          !t.directives.marker &&
          this.onError(e, 'MISSING_CHAR', 'Missing directives-end indicator line'),
          this.decorate(t, !1),
          this.doc && (yield this.doc),
          (this.doc = t),
          (this.atDirectives = !1);
        break;
      }
      case 'byte-order-mark':
      case 'space':
        break;
      case 'comment':
      case 'newline':
        this.prelude.push(e.source);
        break;
      case 'error': {
        let t = e.source ? `${e.message}: ${JSON.stringify(e.source)}` : e.message,
          n = new F(He(e), 'UNEXPECTED_TOKEN', t);
        this.atDirectives || !this.doc ? this.errors.push(n) : this.doc.errors.push(n);
        break;
      }
      case 'doc-end': {
        if (!this.doc) {
          let n = 'Unexpected doc-end without preceding document';
          this.errors.push(new F(He(e), 'UNEXPECTED_TOKEN', n));
          break;
        }
        let t = te(e.end, e.offset + e.source.length, this.doc.options.strict, this.onError);
        if ((this.decorate(this.doc, !0), t.comment)) {
          let n = this.doc.comment;
          this.doc.comment = n
            ? `${n}
${t.comment}`
            : t.comment;
        }
        this.doc.range[2] = t.offset;
        break;
      }
      default:
        this.errors.push(new F(He(e), 'UNEXPECTED_TOKEN', `Unsupported token ${e.type}`));
    }
  }
  *end(e = !1, t = -1) {
    if (this.doc) this.decorate(this.doc, !0), yield this.doc, (this.doc = null);
    else if (e) {
      let n = Object.assign({ directives: this.directives }, this.options),
        i = new Z(void 0, n);
      this.atDirectives && this.onError(t, 'MISSING_CHAR', 'Missing directives-end indicator line'),
        (i.range = [0, t, t]),
        this.decorate(i, !1),
        yield i;
    }
  }
};
var tt = {};
Cs(tt, {
  BOM: () => ze,
  DOCUMENT: () => Ze,
  FLOW_END: () => et,
  SCALAR: () => Te,
  createScalarToken: () => Ln,
  isCollection: () => Gi,
  isScalar: () => Qi,
  prettyToken: () => Wi,
  resolveAsScalar: () => Tn,
  setScalarValue: () => In,
  stringify: () => $n,
  tokenType: () => Os,
  visit: () => de,
});
function Tn(s, e = !0, t) {
  if (s) {
    let n = (i, r, o) => {
      let a = typeof i == 'number' ? i : Array.isArray(i) ? i[0] : i.offset;
      if (t) t(a, r, o);
      else throw new F([a, a + 1], r, o);
    };
    switch (s.type) {
      case 'scalar':
      case 'single-quoted-scalar':
      case 'double-quoted-scalar':
        return qt(s, e, n);
      case 'block-scalar':
        return Dt(s, e, n);
    }
  }
  return null;
}
function Ln(s, e) {
  var t;
  let { implicitKey: n = !1, indent: i, inFlow: r = !1, offset: o = -1, type: a = 'PLAIN' } = e,
    l = ae(
      { type: a, value: s },
      { implicitKey: n, indent: i > 0 ? ' '.repeat(i) : '', inFlow: r, options: { blockQuote: !0, lineWidth: -1 } },
    ),
    c =
      (t = e.end) !== null && t !== void 0
        ? t
        : [
            {
              type: 'newline',
              offset: -1,
              indent: i,
              source: `
`,
            },
          ];
  switch (l[0]) {
    case '|':
    case '>': {
      let f = l.indexOf(`
`),
        u = l.substring(0, f),
        h =
          l.substring(f + 1) +
          `
`,
        p = [{ type: 'block-scalar-header', offset: o, indent: i, source: u }];
      return (
        Cn(p, c) ||
          p.push({
            type: 'newline',
            offset: -1,
            indent: i,
            source: `
`,
          }),
        { type: 'block-scalar', offset: o, indent: i, props: p, source: h }
      );
    }
    case '"':
      return { type: 'double-quoted-scalar', offset: o, indent: i, source: l, end: c };
    case "'":
      return { type: 'single-quoted-scalar', offset: o, indent: i, source: l, end: c };
    default:
      return { type: 'scalar', offset: o, indent: i, source: l, end: c };
  }
}
function In(s, e, t = {}) {
  let { afterKey: n = !1, implicitKey: i = !1, inFlow: r = !1, type: o } = t,
    a = 'indent' in s ? s.indent : null;
  if ((n && typeof a == 'number' && (a += 2), !o))
    switch (s.type) {
      case 'single-quoted-scalar':
        o = 'QUOTE_SINGLE';
        break;
      case 'double-quoted-scalar':
        o = 'QUOTE_DOUBLE';
        break;
      case 'block-scalar': {
        let c = s.props[0];
        if (c.type !== 'block-scalar-header') throw new Error('Invalid block scalar header');
        o = c.source[0] === '>' ? 'BLOCK_FOLDED' : 'BLOCK_LITERAL';
        break;
      }
      default:
        o = 'PLAIN';
    }
  let l = ae(
    { type: o, value: e },
    {
      implicitKey: i || a === null,
      indent: a !== null && a > 0 ? ' '.repeat(a) : '',
      inFlow: r,
      options: { blockQuote: !0, lineWidth: -1 },
    },
  );
  switch (l[0]) {
    case '|':
    case '>':
      Ji(s, l);
      break;
    case '"':
      Ns(s, l, 'double-quoted-scalar');
      break;
    case "'":
      Ns(s, l, 'single-quoted-scalar');
      break;
    default:
      Ns(s, l, 'scalar');
  }
}
function Ji(s, e) {
  let t = e.indexOf(`
`),
    n = e.substring(0, t),
    i =
      e.substring(t + 1) +
      `
`;
  if (s.type === 'block-scalar') {
    let r = s.props[0];
    if (r.type !== 'block-scalar-header') throw new Error('Invalid block scalar header');
    (r.source = n), (s.source = i);
  } else {
    let { offset: r } = s,
      o = 'indent' in s ? s.indent : -1,
      a = [{ type: 'block-scalar-header', offset: r, indent: o, source: n }];
    Cn(a, 'end' in s ? s.end : void 0) ||
      a.push({
        type: 'newline',
        offset: -1,
        indent: o,
        source: `
`,
      });
    for (let l of Object.keys(s)) l !== 'type' && l !== 'offset' && delete s[l];
    Object.assign(s, { type: 'block-scalar', indent: o, props: a, source: i });
  }
}
function Cn(s, e) {
  if (e)
    for (let t of e)
      switch (t.type) {
        case 'space':
        case 'comment':
          s.push(t);
          break;
        case 'newline':
          return s.push(t), !0;
      }
  return !1;
}
function Ns(s, e, t) {
  switch (s.type) {
    case 'scalar':
    case 'double-quoted-scalar':
    case 'single-quoted-scalar':
      (s.type = t), (s.source = e);
      break;
    case 'block-scalar': {
      let n = s.props.slice(1),
        i = e.length;
      s.props[0].type === 'block-scalar-header' && (i -= s.props[0].source.length);
      for (let r of n) r.offset += i;
      delete s.props, Object.assign(s, { type: t, source: e, end: n });
      break;
    }
    case 'block-map':
    case 'block-seq': {
      let n = s.offset + e.length,
        i = {
          type: 'newline',
          offset: n,
          indent: s.indent,
          source: `
`,
        };
      delete s.items, Object.assign(s, { type: t, source: e, end: [i] });
      break;
    }
    default: {
      let n = 'indent' in s ? s.indent : -1,
        i =
          'end' in s && Array.isArray(s.end)
            ? s.end.filter((r) => r.type === 'space' || r.type === 'comment' || r.type === 'newline')
            : [];
      for (let r of Object.keys(s)) r !== 'type' && r !== 'offset' && delete s[r];
      Object.assign(s, { type: t, indent: n, source: e, end: i });
    }
  }
}
var $n = (s) => ('type' in s ? Kt(s) : Ft(s));
function Kt(s) {
  switch (s.type) {
    case 'block-scalar': {
      let e = '';
      for (let t of s.props) e += Kt(t);
      return e + s.source;
    }
    case 'block-map':
    case 'block-seq': {
      let e = '';
      for (let t of s.items) e += Ft(t);
      return e;
    }
    case 'flow-collection': {
      let e = s.start.source;
      for (let t of s.items) e += Ft(t);
      for (let t of s.end) e += t.source;
      return e;
    }
    case 'document': {
      let e = Ft(s);
      if (s.end) for (let t of s.end) e += t.source;
      return e;
    }
    default: {
      let e = s.source;
      if ('end' in s && s.end) for (let t of s.end) e += t.source;
      return e;
    }
  }
}
function Ft({ start: s, key: e, sep: t, value: n }) {
  let i = '';
  for (let r of s) i += r.source;
  if ((e && (i += Kt(e)), t)) for (let r of t) i += r.source;
  return n && (i += Kt(n)), i;
}
var vs = Symbol('break visit'),
  Yi = Symbol('skip children'),
  Pn = Symbol('remove item');
function de(s, e) {
  'type' in s && s.type === 'document' && (s = { start: s.start, value: s.value }), _n(Object.freeze([]), s, e);
}
de.BREAK = vs;
de.SKIP = Yi;
de.REMOVE = Pn;
de.itemAtPath = (s, e) => {
  let t = s;
  for (let [n, i] of e) {
    let r = t && t[n];
    if (r && 'items' in r) t = r.items[i];
    else return;
  }
  return t;
};
de.parentCollection = (s, e) => {
  let t = de.itemAtPath(s, e.slice(0, -1)),
    n = e[e.length - 1][0],
    i = t && t[n];
  if (i && 'items' in i) return i;
  throw new Error('Parent collection not found');
};
function _n(s, e, t) {
  let n = t(e, s);
  if (typeof n == 'symbol') return n;
  for (let i of ['key', 'value']) {
    let r = e[i];
    if (r && 'items' in r) {
      for (let o = 0; o < r.items.length; ++o) {
        let a = _n(Object.freeze(s.concat([[i, o]])), r.items[o], t);
        if (typeof a == 'number') o = a - 1;
        else {
          if (a === vs) return vs;
          a === Pn && (r.items.splice(o, 1), (o -= 1));
        }
      }
      typeof n == 'function' && i === 'key' && (n = n(e, s));
    }
  }
  return typeof n == 'function' ? n(e, s) : n;
}
var ze = '\uFEFF',
  Ze = '',
  et = '',
  Te = '',
  Gi = (s) => !!s && 'items' in s,
  Qi = (s) =>
    !!s &&
    (s.type === 'scalar' ||
      s.type === 'single-quoted-scalar' ||
      s.type === 'double-quoted-scalar' ||
      s.type === 'block-scalar');
function Wi(s) {
  switch (s) {
    case ze:
      return '<BOM>';
    case Ze:
      return '<DOC>';
    case et:
      return '<FLOW_END>';
    case Te:
      return '<SCALAR>';
    default:
      return JSON.stringify(s);
  }
}
function Os(s) {
  switch (s) {
    case ze:
      return 'byte-order-mark';
    case Ze:
      return 'doc-mode';
    case et:
      return 'flow-error-end';
    case Te:
      return 'scalar';
    case '---':
      return 'doc-start';
    case '...':
      return 'doc-end';
    case '':
    case `
`:
    case `\r
`:
      return 'newline';
    case '-':
      return 'seq-item-ind';
    case '?':
      return 'explicit-key-ind';
    case ':':
      return 'map-value-ind';
    case '{':
      return 'flow-map-start';
    case '}':
      return 'flow-map-end';
    case '[':
      return 'flow-seq-start';
    case ']':
      return 'flow-seq-end';
    case ',':
      return 'comma';
  }
  switch (s[0]) {
    case ' ':
    case '    ':
      return 'space';
    case '#':
      return 'comment';
    case '%':
      return 'directive-line';
    case '*':
      return 'alias';
    case '&':
      return 'anchor';
    case '!':
      return 'tag';
    case "'":
      return 'single-quoted-scalar';
    case '"':
      return 'double-quoted-scalar';
    case '|':
    case '>':
      return 'block-scalar-header';
  }
  return null;
}
function K(s) {
  switch (s) {
    case void 0:
    case ' ':
    case `
`:
    case '\r':
    case '    ':
      return !0;
    default:
      return !1;
  }
}
var Mn = '0123456789ABCDEFabcdef'.split(''),
  Hi = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()".split(''),
  xn = ',[]{}'.split(''),
  Xi = ` ,[]{}
\r    `.split(''),
  As = (s) => !s || Xi.includes(s),
  st = class {
    constructor() {
      (this.atEnd = !1),
        (this.blockScalarIndent = -1),
        (this.blockScalarKeep = !1),
        (this.buffer = ''),
        (this.flowKey = !1),
        (this.flowLevel = 0),
        (this.indentNext = 0),
        (this.indentValue = 0),
        (this.lineEndPos = null),
        (this.next = null),
        (this.pos = 0);
    }
    *lex(e, t = !1) {
      e && ((this.buffer = this.buffer ? this.buffer + e : e), (this.lineEndPos = null)), (this.atEnd = !t);
      let n = this.next || 'stream';
      for (; n && (t || this.hasChars(1)); ) n = yield* this.parseNext(n);
    }
    atLineEnd() {
      let e = this.pos,
        t = this.buffer[e];
      for (; t === ' ' || t === '    '; ) t = this.buffer[++e];
      return !t ||
        t === '#' ||
        t ===
          `
`
        ? !0
        : t === '\r'
        ? this.buffer[e + 1] ===
          `
`
        : !1;
    }
    charAt(e) {
      return this.buffer[this.pos + e];
    }
    continueScalar(e) {
      let t = this.buffer[e];
      if (this.indentNext > 0) {
        let n = 0;
        for (; t === ' '; ) t = this.buffer[++n + e];
        if (t === '\r') {
          let i = this.buffer[n + e + 1];
          if (
            i ===
              `
` ||
            (!i && !this.atEnd)
          )
            return e + n + 1;
        }
        return t ===
          `
` ||
          n >= this.indentNext ||
          (!t && !this.atEnd)
          ? e + n
          : -1;
      }
      if (t === '-' || t === '.') {
        let n = this.buffer.substr(e, 3);
        if ((n === '---' || n === '...') && K(this.buffer[e + 3])) return -1;
      }
      return e;
    }
    getLine() {
      let e = this.lineEndPos;
      return (
        (typeof e != 'number' || (e !== -1 && e < this.pos)) &&
          ((e = this.buffer.indexOf(
            `
`,
            this.pos,
          )),
          (this.lineEndPos = e)),
        e === -1
          ? this.atEnd
            ? this.buffer.substring(this.pos)
            : null
          : (this.buffer[e - 1] === '\r' && (e -= 1), this.buffer.substring(this.pos, e))
      );
    }
    hasChars(e) {
      return this.pos + e <= this.buffer.length;
    }
    setNext(e) {
      return (
        (this.buffer = this.buffer.substring(this.pos)), (this.pos = 0), (this.lineEndPos = null), (this.next = e), null
      );
    }
    peek(e) {
      return this.buffer.substr(this.pos, e);
    }
    *parseNext(e) {
      switch (e) {
        case 'stream':
          return yield* this.parseStream();
        case 'line-start':
          return yield* this.parseLineStart();
        case 'block-start':
          return yield* this.parseBlockStart();
        case 'doc':
          return yield* this.parseDocument();
        case 'flow':
          return yield* this.parseFlowCollection();
        case 'quoted-scalar':
          return yield* this.parseQuotedScalar();
        case 'block-scalar':
          return yield* this.parseBlockScalar();
        case 'plain-scalar':
          return yield* this.parsePlainScalar();
      }
    }
    *parseStream() {
      let e = this.getLine();
      if (e === null) return this.setNext('stream');
      if ((e[0] === ze && (yield* this.pushCount(1), (e = e.substring(1))), e[0] === '%')) {
        let t = e.length,
          n = e.indexOf('#');
        if (n !== -1) {
          let r = e[n - 1];
          (r === ' ' || r === '    ') && (t = n - 1);
        }
        for (;;) {
          let r = e[t - 1];
          if (r === ' ' || r === '    ') t -= 1;
          else break;
        }
        let i = (yield* this.pushCount(t)) + (yield* this.pushSpaces(!0));
        return yield* this.pushCount(e.length - i), this.pushNewline(), 'stream';
      }
      if (this.atLineEnd()) {
        let t = yield* this.pushSpaces(!0);
        return yield* this.pushCount(e.length - t), yield* this.pushNewline(), 'stream';
      }
      return yield Ze, yield* this.parseLineStart();
    }
    *parseLineStart() {
      let e = this.charAt(0);
      if (!e && !this.atEnd) return this.setNext('line-start');
      if (e === '-' || e === '.') {
        if (!this.atEnd && !this.hasChars(4)) return this.setNext('line-start');
        let t = this.peek(3);
        if (t === '---' && K(this.charAt(3)))
          return yield* this.pushCount(3), (this.indentValue = 0), (this.indentNext = 0), 'doc';
        if (t === '...' && K(this.charAt(3))) return yield* this.pushCount(3), 'stream';
      }
      return (
        (this.indentValue = yield* this.pushSpaces(!1)),
        this.indentNext > this.indentValue && !K(this.charAt(1)) && (this.indentNext = this.indentValue),
        yield* this.parseBlockStart()
      );
    }
    *parseBlockStart() {
      let [e, t] = this.peek(2);
      if (!t && !this.atEnd) return this.setNext('block-start');
      if ((e === '-' || e === '?' || e === ':') && K(t)) {
        let n = (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0));
        return (this.indentNext = this.indentValue + 1), (this.indentValue += n), yield* this.parseBlockStart();
      }
      return 'doc';
    }
    *parseDocument() {
      yield* this.pushSpaces(!0);
      let e = this.getLine();
      if (e === null) return this.setNext('doc');
      let t = yield* this.pushIndicators();
      switch (e[t]) {
        case '#':
          yield* this.pushCount(e.length - t);
        case void 0:
          return yield* this.pushNewline(), yield* this.parseLineStart();
        case '{':
        case '[':
          return yield* this.pushCount(1), (this.flowKey = !1), (this.flowLevel = 1), 'flow';
        case '}':
        case ']':
          return yield* this.pushCount(1), 'doc';
        case '*':
          return yield* this.pushUntil(As), 'doc';
        case '"':
        case "'":
          return yield* this.parseQuotedScalar();
        case '|':
        case '>':
          return (
            (t += yield* this.parseBlockScalarHeader()),
            (t += yield* this.pushSpaces(!0)),
            yield* this.pushCount(e.length - t),
            yield* this.pushNewline(),
            yield* this.parseBlockScalar()
          );
        default:
          return yield* this.parsePlainScalar();
      }
    }
    *parseFlowCollection() {
      let e,
        t,
        n = -1;
      do (e = yield* this.pushNewline()), (t = yield* this.pushSpaces(!0)), e > 0 && (this.indentValue = n = t);
      while (e + t > 0);
      let i = this.getLine();
      if (i === null) return this.setNext('flow');
      if (
        ((n !== -1 && n < this.indentNext && i[0] !== '#') ||
          (n === 0 && (i.startsWith('---') || i.startsWith('...')) && K(i[3]))) &&
        !(n === this.indentNext - 1 && this.flowLevel === 1 && (i[0] === ']' || i[0] === '}'))
      )
        return (this.flowLevel = 0), yield et, yield* this.parseLineStart();
      let r = 0;
      for (; i[r] === ','; ) (r += yield* this.pushCount(1)), (r += yield* this.pushSpaces(!0)), (this.flowKey = !1);
      switch (((r += yield* this.pushIndicators()), i[r])) {
        case void 0:
          return 'flow';
        case '#':
          return yield* this.pushCount(i.length - r), 'flow';
        case '{':
        case '[':
          return yield* this.pushCount(1), (this.flowKey = !1), (this.flowLevel += 1), 'flow';
        case '}':
        case ']':
          return yield* this.pushCount(1), (this.flowKey = !0), (this.flowLevel -= 1), this.flowLevel ? 'flow' : 'doc';
        case '*':
          return yield* this.pushUntil(As), 'flow';
        case '"':
        case "'":
          return (this.flowKey = !0), yield* this.parseQuotedScalar();
        case ':': {
          let o = this.charAt(1);
          if (this.flowKey || K(o) || o === ',')
            return (this.flowKey = !1), yield* this.pushCount(1), yield* this.pushSpaces(!0), 'flow';
        }
        default:
          return (this.flowKey = !1), yield* this.parsePlainScalar();
      }
    }
    *parseQuotedScalar() {
      let e = this.charAt(0),
        t = this.buffer.indexOf(e, this.pos + 1);
      if (e === "'") for (; t !== -1 && this.buffer[t + 1] === "'"; ) t = this.buffer.indexOf("'", t + 2);
      else
        for (; t !== -1; ) {
          let r = 0;
          for (; this.buffer[t - 1 - r] === '\\'; ) r += 1;
          if (r % 2 === 0) break;
          t = this.buffer.indexOf('"', t + 1);
        }
      let n = this.buffer.substring(0, t),
        i = n.indexOf(
          `
`,
          this.pos,
        );
      if (i !== -1) {
        for (; i !== -1; ) {
          let r = this.continueScalar(i + 1);
          if (r === -1) break;
          i = n.indexOf(
            `
`,
            r,
          );
        }
        i !== -1 && (t = i - (n[i - 1] === '\r' ? 2 : 1));
      }
      if (t === -1) {
        if (!this.atEnd) return this.setNext('quoted-scalar');
        t = this.buffer.length;
      }
      return yield* this.pushToIndex(t + 1, !1), this.flowLevel ? 'flow' : 'doc';
    }
    *parseBlockScalarHeader() {
      (this.blockScalarIndent = -1), (this.blockScalarKeep = !1);
      let e = this.pos;
      for (;;) {
        let t = this.buffer[++e];
        if (t === '+') this.blockScalarKeep = !0;
        else if (t > '0' && t <= '9') this.blockScalarIndent = Number(t) - 1;
        else if (t !== '-') break;
      }
      return yield* this.pushUntil((t) => K(t) || t === '#');
    }
    *parseBlockScalar() {
      let e = this.pos - 1,
        t = 0,
        n;
      e: for (let i = this.pos; (n = this.buffer[i]); ++i)
        switch (n) {
          case ' ':
            t += 1;
            break;
          case `
`:
            (e = i), (t = 0);
            break;
          case '\r': {
            let r = this.buffer[i + 1];
            if (!r && !this.atEnd) return this.setNext('block-scalar');
            if (
              r ===
              `
`
            )
              break;
          }
          default:
            break e;
        }
      if (!n && !this.atEnd) return this.setNext('block-scalar');
      if (t >= this.indentNext) {
        this.blockScalarIndent === -1 ? (this.indentNext = t) : (this.indentNext += this.blockScalarIndent);
        do {
          let i = this.continueScalar(e + 1);
          if (i === -1) break;
          e = this.buffer.indexOf(
            `
`,
            i,
          );
        } while (e !== -1);
        if (e === -1) {
          if (!this.atEnd) return this.setNext('block-scalar');
          e = this.buffer.length;
        }
      }
      if (!this.blockScalarKeep)
        do {
          let i = e - 1,
            r = this.buffer[i];
          for (r === '\r' && (r = this.buffer[--i]); r === ' ' || r === '    '; ) r = this.buffer[--i];
          if (
            r ===
              `
` &&
            i >= this.pos
          )
            e = i;
          else break;
        } while (!0);
      return yield Te, yield* this.pushToIndex(e + 1, !0), yield* this.parseLineStart();
    }
    *parsePlainScalar() {
      let e = this.flowLevel > 0,
        t = this.pos - 1,
        n = this.pos - 1,
        i;
      for (; (i = this.buffer[++n]); )
        if (i === ':') {
          let r = this.buffer[n + 1];
          if (K(r) || (e && r === ',')) break;
          t = n;
        } else if (K(i)) {
          let r = this.buffer[n + 1];
          if (
            (i === '\r' &&
              (r ===
              `
`
                ? ((n += 1),
                  (i = `
`),
                  (r = this.buffer[n + 1]))
                : (t = n)),
            r === '#' || (e && xn.includes(r)))
          )
            break;
          if (
            i ===
            `
`
          ) {
            let o = this.continueScalar(n + 1);
            if (o === -1) break;
            n = Math.max(n, o - 2);
          }
        } else {
          if (e && xn.includes(i)) break;
          t = n;
        }
      return !i && !this.atEnd
        ? this.setNext('plain-scalar')
        : (yield Te, yield* this.pushToIndex(t + 1, !0), e ? 'flow' : 'doc');
    }
    *pushCount(e) {
      return e > 0 ? (yield this.buffer.substr(this.pos, e), (this.pos += e), e) : 0;
    }
    *pushToIndex(e, t) {
      let n = this.buffer.slice(this.pos, e);
      return n ? (yield n, (this.pos += n.length), n.length) : (t && (yield ''), 0);
    }
    *pushIndicators() {
      switch (this.charAt(0)) {
        case '!':
          return (yield* this.pushTag()) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators());
        case '&':
          return (yield* this.pushUntil(As)) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators());
        case ':':
        case '?':
        case '-':
          if (K(this.charAt(1)))
            return (
              this.flowLevel === 0 ? (this.indentNext = this.indentValue + 1) : this.flowKey && (this.flowKey = !1),
              (yield* this.pushCount(1)) + (yield* this.pushSpaces(!0)) + (yield* this.pushIndicators())
            );
      }
      return 0;
    }
    *pushTag() {
      if (this.charAt(1) === '<') {
        let e = this.pos + 2,
          t = this.buffer[e];
        for (; !K(t) && t !== '>'; ) t = this.buffer[++e];
        return yield* this.pushToIndex(t === '>' ? e + 1 : e, !1);
      } else {
        let e = this.pos + 1,
          t = this.buffer[e];
        for (; t; )
          if (Hi.includes(t)) t = this.buffer[++e];
          else if (t === '%' && Mn.includes(this.buffer[e + 1]) && Mn.includes(this.buffer[e + 2]))
            t = this.buffer[(e += 3)];
          else break;
        return yield* this.pushToIndex(e, !1);
      }
    }
    *pushNewline() {
      let e = this.buffer[this.pos];
      return e ===
        `
`
        ? yield* this.pushCount(1)
        : e === '\r' &&
          this.charAt(1) ===
            `
`
        ? yield* this.pushCount(2)
        : 0;
    }
    *pushSpaces(e) {
      let t = this.pos - 1,
        n;
      do n = this.buffer[++t];
      while (n === ' ' || (e && n === '    '));
      let i = t - this.pos;
      return i > 0 && (yield this.buffer.substr(this.pos, i), (this.pos = t)), i;
    }
    *pushUntil(e) {
      let t = this.pos,
        n = this.buffer[t];
      for (; !e(n); ) n = this.buffer[++t];
      return yield* this.pushToIndex(t, !1);
    }
  };
var nt = class {
  constructor() {
    (this.lineStarts = []),
      (this.addNewLine = (e) => this.lineStarts.push(e)),
      (this.linePos = (e) => {
        let t = 0,
          n = this.lineStarts.length;
        for (; t < n; ) {
          let r = (t + n) >> 1;
          this.lineStarts[r] < e ? (t = r + 1) : (n = r);
        }
        if (this.lineStarts[t] === e) return { line: t + 1, col: 1 };
        if (t === 0) return { line: 0, col: e };
        let i = this.lineStarts[t - 1];
        return { line: t, col: e - i + 1 };
      });
  }
};
function se(s, e) {
  for (let t = 0; t < s.length; ++t) if (s[t].type === e) return !0;
  return !1;
}
function Es(s) {
  for (let e = 0; e < s.length; ++e)
    switch (s[e].type) {
      case 'space':
      case 'comment':
      case 'newline':
        break;
      default:
        return !0;
    }
  return !1;
}
function jn(s) {
  switch (s == null ? void 0 : s.type) {
    case 'alias':
    case 'scalar':
    case 'single-quoted-scalar':
    case 'double-quoted-scalar':
    case 'flow-collection':
      return !0;
    default:
      return !1;
  }
}
function Rt(s) {
  switch (s.type) {
    case 'document':
      return s.start;
    case 'block-map': {
      let e = s.items[s.items.length - 1];
      return e.sep || e.start;
    }
    case 'block-seq':
      return s.items[s.items.length - 1].start;
    default:
      return [];
  }
}
function it(s) {
  var e;
  if (s.length === 0) return [];
  let t = s.length;
  e: for (; --t >= 0; )
    switch (s[t].type) {
      case 'doc-start':
      case 'explicit-key-ind':
      case 'map-value-ind':
      case 'seq-item-ind':
      case 'newline':
        break e;
    }
  for (; ((e = s[++t]) === null || e === void 0 ? void 0 : e.type) === 'space'; );
  return s.splice(t, s.length);
}
function Bn(s) {
  if (s.start.type === 'flow-seq-start')
    for (let e of s.items)
      e.sep &&
        !e.value &&
        !se(e.start, 'explicit-key-ind') &&
        !se(e.sep, 'map-value-ind') &&
        (e.key && (e.value = e.key),
        delete e.key,
        jn(e.value)
          ? e.value.end
            ? Array.prototype.push.apply(e.value.end, e.sep)
            : (e.value.end = e.sep)
          : Array.prototype.push.apply(e.start, e.sep),
        delete e.sep);
}
var rt = class {
  constructor(e) {
    (this.atNewLine = !0),
      (this.atScalar = !1),
      (this.indent = 0),
      (this.offset = 0),
      (this.onKeyLine = !1),
      (this.stack = []),
      (this.source = ''),
      (this.type = ''),
      (this.lexer = new st()),
      (this.onNewLine = e);
  }
  *parse(e, t = !1) {
    this.onNewLine && this.offset === 0 && this.onNewLine(0);
    for (let n of this.lexer.lex(e, t)) yield* this.next(n);
    t || (yield* this.end());
  }
  *next(e) {
    if (((this.source = e), this.atScalar)) {
      (this.atScalar = !1), yield* this.step(), (this.offset += e.length);
      return;
    }
    let t = Os(e);
    if (t)
      if (t === 'scalar') (this.atNewLine = !1), (this.atScalar = !0), (this.type = 'scalar');
      else {
        switch (((this.type = t), yield* this.step(), t)) {
          case 'newline':
            (this.atNewLine = !0), (this.indent = 0), this.onNewLine && this.onNewLine(this.offset + e.length);
            break;
          case 'space':
            this.atNewLine && e[0] === ' ' && (this.indent += e.length);
            break;
          case 'explicit-key-ind':
          case 'map-value-ind':
          case 'seq-item-ind':
            this.atNewLine && (this.indent += e.length);
            break;
          case 'doc-mode':
          case 'flow-error-end':
            return;
          default:
            this.atNewLine = !1;
        }
        this.offset += e.length;
      }
    else {
      let n = `Not a YAML token: ${e}`;
      yield* this.pop({ type: 'error', offset: this.offset, message: n, source: e }), (this.offset += e.length);
    }
  }
  *end() {
    for (; this.stack.length > 0; ) yield* this.pop();
  }
  get sourceToken() {
    return { type: this.type, offset: this.offset, indent: this.indent, source: this.source };
  }
  *step() {
    let e = this.peek(1);
    if (this.type === 'doc-end' && (!e || e.type !== 'doc-end')) {
      for (; this.stack.length > 0; ) yield* this.pop();
      this.stack.push({ type: 'doc-end', offset: this.offset, source: this.source });
      return;
    }
    if (!e) return yield* this.stream();
    switch (e.type) {
      case 'document':
        return yield* this.document(e);
      case 'alias':
      case 'scalar':
      case 'single-quoted-scalar':
      case 'double-quoted-scalar':
        return yield* this.scalar(e);
      case 'block-scalar':
        return yield* this.blockScalar(e);
      case 'block-map':
        return yield* this.blockMap(e);
      case 'block-seq':
        return yield* this.blockSequence(e);
      case 'flow-collection':
        return yield* this.flowCollection(e);
      case 'doc-end':
        return yield* this.documentEnd(e);
    }
    yield* this.pop();
  }
  peek(e) {
    return this.stack[this.stack.length - e];
  }
  *pop(e) {
    let t = e || this.stack.pop();
    if (t)
      if (this.stack.length === 0) yield t;
      else {
        let n = this.peek(1);
        switch (
          (t.type === 'block-scalar'
            ? (t.indent = 'indent' in n ? n.indent : 0)
            : t.type === 'flow-collection' && n.type === 'document' && (t.indent = 0),
          t.type === 'flow-collection' && Bn(t),
          n.type)
        ) {
          case 'document':
            n.value = t;
            break;
          case 'block-scalar':
            n.props.push(t);
            break;
          case 'block-map': {
            let i = n.items[n.items.length - 1];
            if (i.value) {
              n.items.push({ start: [], key: t, sep: [] }), (this.onKeyLine = !0);
              return;
            } else if (i.sep) i.value = t;
            else {
              Object.assign(i, { key: t, sep: [] }), (this.onKeyLine = !se(i.start, 'explicit-key-ind'));
              return;
            }
            break;
          }
          case 'block-seq': {
            let i = n.items[n.items.length - 1];
            i.value ? n.items.push({ start: [], value: t }) : (i.value = t);
            break;
          }
          case 'flow-collection': {
            let i = n.items[n.items.length - 1];
            !i || i.value
              ? n.items.push({ start: [], key: t, sep: [] })
              : i.sep
              ? (i.value = t)
              : Object.assign(i, { key: t, sep: [] });
            return;
          }
          default:
            yield* this.pop(), yield* this.pop(t);
        }
        if (
          (n.type === 'document' || n.type === 'block-map' || n.type === 'block-seq') &&
          (t.type === 'block-map' || t.type === 'block-seq')
        ) {
          let i = t.items[t.items.length - 1];
          i &&
            !i.sep &&
            !i.value &&
            i.start.length > 0 &&
            !Es(i.start) &&
            (t.indent === 0 || i.start.every((r) => r.type !== 'comment' || r.indent < t.indent)) &&
            (n.type === 'document' ? (n.end = i.start) : n.items.push({ start: i.start }), t.items.splice(-1, 1));
        }
      }
    else {
      let n = 'Tried to pop an empty stack';
      yield { type: 'error', offset: this.offset, source: '', message: n };
    }
  }
  *stream() {
    switch (this.type) {
      case 'directive-line':
        yield { type: 'directive', offset: this.offset, source: this.source };
        return;
      case 'byte-order-mark':
      case 'space':
      case 'comment':
      case 'newline':
        yield this.sourceToken;
        return;
      case 'doc-mode':
      case 'doc-start': {
        let e = { type: 'document', offset: this.offset, start: [] };
        this.type === 'doc-start' && e.start.push(this.sourceToken), this.stack.push(e);
        return;
      }
    }
    yield {
      type: 'error',
      offset: this.offset,
      message: `Unexpected ${this.type} token in YAML stream`,
      source: this.source,
    };
  }
  *document(e) {
    if (e.value) return yield* this.lineEnd(e);
    switch (this.type) {
      case 'doc-start': {
        Es(e.start) ? (yield* this.pop(), yield* this.step()) : e.start.push(this.sourceToken);
        return;
      }
      case 'anchor':
      case 'tag':
      case 'space':
      case 'comment':
      case 'newline':
        e.start.push(this.sourceToken);
        return;
    }
    let t = this.startBlockValue(e);
    t
      ? this.stack.push(t)
      : yield {
          type: 'error',
          offset: this.offset,
          message: `Unexpected ${this.type} token in YAML document`,
          source: this.source,
        };
  }
  *scalar(e) {
    if (this.type === 'map-value-ind') {
      let t = Rt(this.peek(2)),
        n = it(t),
        i;
      e.end ? ((i = e.end), i.push(this.sourceToken), delete e.end) : (i = [this.sourceToken]);
      let r = { type: 'block-map', offset: e.offset, indent: e.indent, items: [{ start: n, key: e, sep: i }] };
      (this.onKeyLine = !0), (this.stack[this.stack.length - 1] = r);
    } else yield* this.lineEnd(e);
  }
  *blockScalar(e) {
    switch (this.type) {
      case 'space':
      case 'comment':
      case 'newline':
        e.props.push(this.sourceToken);
        return;
      case 'scalar':
        if (((e.source = this.source), (this.atNewLine = !0), (this.indent = 0), this.onNewLine)) {
          let t =
            this.source.indexOf(`
`) + 1;
          for (; t !== 0; )
            this.onNewLine(this.offset + t),
              (t =
                this.source.indexOf(
                  `
`,
                  t,
                ) + 1);
        }
        yield* this.pop();
        break;
      default:
        yield* this.pop(), yield* this.step();
    }
  }
  *blockMap(e) {
    var t;
    let n = e.items[e.items.length - 1];
    switch (this.type) {
      case 'newline':
        if (((this.onKeyLine = !1), n.value)) {
          let i = 'end' in n.value ? n.value.end : void 0,
            r = Array.isArray(i) ? i[i.length - 1] : void 0;
          (r == null ? void 0 : r.type) === 'comment'
            ? i == null || i.push(this.sourceToken)
            : e.items.push({ start: [this.sourceToken] });
        } else n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
        return;
      case 'space':
      case 'comment':
        if (n.value) e.items.push({ start: [this.sourceToken] });
        else if (n.sep) n.sep.push(this.sourceToken);
        else {
          if (this.atIndentedComment(n.start, e.indent)) {
            let i = e.items[e.items.length - 2],
              r = (t = i == null ? void 0 : i.value) === null || t === void 0 ? void 0 : t.end;
            if (Array.isArray(r)) {
              Array.prototype.push.apply(r, n.start), r.push(this.sourceToken), e.items.pop();
              return;
            }
          }
          n.start.push(this.sourceToken);
        }
        return;
    }
    if (this.indent >= e.indent) {
      let i = !this.onKeyLine && this.indent === e.indent && (n.sep || Es(n.start));
      switch (this.type) {
        case 'anchor':
        case 'tag':
          i || n.value
            ? (e.items.push({ start: [this.sourceToken] }), (this.onKeyLine = !0))
            : n.sep
            ? n.sep.push(this.sourceToken)
            : n.start.push(this.sourceToken);
          return;
        case 'explicit-key-ind':
          !n.sep && !se(n.start, 'explicit-key-ind')
            ? n.start.push(this.sourceToken)
            : i || n.value
            ? e.items.push({ start: [this.sourceToken] })
            : this.stack.push({
                type: 'block-map',
                offset: this.offset,
                indent: this.indent,
                items: [{ start: [this.sourceToken] }],
              }),
            (this.onKeyLine = !0);
          return;
        case 'map-value-ind':
          if (!n.sep) Object.assign(n, { key: null, sep: [this.sourceToken] });
          else if (n.value || (i && !se(n.start, 'explicit-key-ind')))
            e.items.push({ start: [], key: null, sep: [this.sourceToken] });
          else if (se(n.sep, 'map-value-ind'))
            this.stack.push({
              type: 'block-map',
              offset: this.offset,
              indent: this.indent,
              items: [{ start: [], key: null, sep: [this.sourceToken] }],
            });
          else if (se(n.start, 'explicit-key-ind') && jn(n.key) && !se(n.sep, 'newline')) {
            let r = it(n.start),
              o = n.key,
              a = n.sep;
            a.push(this.sourceToken),
              delete n.key,
              delete n.sep,
              this.stack.push({
                type: 'block-map',
                offset: this.offset,
                indent: this.indent,
                items: [{ start: r, key: o, sep: a }],
              });
          } else n.sep.push(this.sourceToken);
          this.onKeyLine = !0;
          return;
        case 'alias':
        case 'scalar':
        case 'single-quoted-scalar':
        case 'double-quoted-scalar': {
          let r = this.flowScalar(this.type);
          i || n.value
            ? (e.items.push({ start: [], key: r, sep: [] }), (this.onKeyLine = !0))
            : n.sep
            ? this.stack.push(r)
            : (Object.assign(n, { key: r, sep: [] }), (this.onKeyLine = !0));
          return;
        }
        default: {
          let r = this.startBlockValue(e);
          if (r) {
            i && r.type !== 'block-seq' && se(n.start, 'explicit-key-ind') && e.items.push({ start: [] }),
              this.stack.push(r);
            return;
          }
        }
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *blockSequence(e) {
    var t;
    let n = e.items[e.items.length - 1];
    switch (this.type) {
      case 'newline':
        if (n.value) {
          let i = 'end' in n.value ? n.value.end : void 0,
            r = Array.isArray(i) ? i[i.length - 1] : void 0;
          (r == null ? void 0 : r.type) === 'comment'
            ? i == null || i.push(this.sourceToken)
            : e.items.push({ start: [this.sourceToken] });
        } else n.start.push(this.sourceToken);
        return;
      case 'space':
      case 'comment':
        if (n.value) e.items.push({ start: [this.sourceToken] });
        else {
          if (this.atIndentedComment(n.start, e.indent)) {
            let i = e.items[e.items.length - 2],
              r = (t = i == null ? void 0 : i.value) === null || t === void 0 ? void 0 : t.end;
            if (Array.isArray(r)) {
              Array.prototype.push.apply(r, n.start), r.push(this.sourceToken), e.items.pop();
              return;
            }
          }
          n.start.push(this.sourceToken);
        }
        return;
      case 'anchor':
      case 'tag':
        if (n.value || this.indent <= e.indent) break;
        n.start.push(this.sourceToken);
        return;
      case 'seq-item-ind':
        if (this.indent !== e.indent) break;
        n.value || se(n.start, 'seq-item-ind')
          ? e.items.push({ start: [this.sourceToken] })
          : n.start.push(this.sourceToken);
        return;
    }
    if (this.indent > e.indent) {
      let i = this.startBlockValue(e);
      if (i) {
        this.stack.push(i);
        return;
      }
    }
    yield* this.pop(), yield* this.step();
  }
  *flowCollection(e) {
    let t = e.items[e.items.length - 1];
    if (this.type === 'flow-error-end') {
      let n;
      do yield* this.pop(), (n = this.peek(1));
      while (n && n.type === 'flow-collection');
    } else if (e.end.length === 0) {
      switch (this.type) {
        case 'comma':
        case 'explicit-key-ind':
          !t || t.sep ? e.items.push({ start: [this.sourceToken] }) : t.start.push(this.sourceToken);
          return;
        case 'map-value-ind':
          !t || t.value
            ? e.items.push({ start: [], key: null, sep: [this.sourceToken] })
            : t.sep
            ? t.sep.push(this.sourceToken)
            : Object.assign(t, { key: null, sep: [this.sourceToken] });
          return;
        case 'space':
        case 'comment':
        case 'newline':
        case 'anchor':
        case 'tag':
          !t || t.value
            ? e.items.push({ start: [this.sourceToken] })
            : t.sep
            ? t.sep.push(this.sourceToken)
            : t.start.push(this.sourceToken);
          return;
        case 'alias':
        case 'scalar':
        case 'single-quoted-scalar':
        case 'double-quoted-scalar': {
          let i = this.flowScalar(this.type);
          !t || t.value
            ? e.items.push({ start: [], key: i, sep: [] })
            : t.sep
            ? this.stack.push(i)
            : Object.assign(t, { key: i, sep: [] });
          return;
        }
        case 'flow-map-end':
        case 'flow-seq-end':
          e.end.push(this.sourceToken);
          return;
      }
      let n = this.startBlockValue(e);
      n ? this.stack.push(n) : (yield* this.pop(), yield* this.step());
    } else {
      let n = this.peek(2);
      if (
        n.type === 'block-map' &&
        (this.type === 'map-value-ind' || (this.type === 'newline' && !n.items[n.items.length - 1].sep))
      )
        yield* this.pop(), yield* this.step();
      else if (this.type === 'map-value-ind' && n.type !== 'flow-collection') {
        let i = Rt(n),
          r = it(i);
        Bn(e);
        let o = e.end.splice(1, e.end.length);
        o.push(this.sourceToken);
        let a = { type: 'block-map', offset: e.offset, indent: e.indent, items: [{ start: r, key: e, sep: o }] };
        (this.onKeyLine = !0), (this.stack[this.stack.length - 1] = a);
      } else yield* this.lineEnd(e);
    }
  }
  flowScalar(e) {
    if (this.onNewLine) {
      let t =
        this.source.indexOf(`
`) + 1;
      for (; t !== 0; )
        this.onNewLine(this.offset + t),
          (t =
            this.source.indexOf(
              `
`,
              t,
            ) + 1);
    }
    return { type: e, offset: this.offset, indent: this.indent, source: this.source };
  }
  startBlockValue(e) {
    switch (this.type) {
      case 'alias':
      case 'scalar':
      case 'single-quoted-scalar':
      case 'double-quoted-scalar':
        return this.flowScalar(this.type);
      case 'block-scalar-header':
        return {
          type: 'block-scalar',
          offset: this.offset,
          indent: this.indent,
          props: [this.sourceToken],
          source: '',
        };
      case 'flow-map-start':
      case 'flow-seq-start':
        return {
          type: 'flow-collection',
          offset: this.offset,
          indent: this.indent,
          start: this.sourceToken,
          items: [],
          end: [],
        };
      case 'seq-item-ind':
        return { type: 'block-seq', offset: this.offset, indent: this.indent, items: [{ start: [this.sourceToken] }] };
      case 'explicit-key-ind': {
        this.onKeyLine = !0;
        let t = Rt(e),
          n = it(t);
        return (
          n.push(this.sourceToken),
          { type: 'block-map', offset: this.offset, indent: this.indent, items: [{ start: n }] }
        );
      }
      case 'map-value-ind': {
        this.onKeyLine = !0;
        let t = Rt(e),
          n = it(t);
        return {
          type: 'block-map',
          offset: this.offset,
          indent: this.indent,
          items: [{ start: n, key: null, sep: [this.sourceToken] }],
        };
      }
    }
    return null;
  }
  atIndentedComment(e, t) {
    return this.type !== 'comment' || this.indent <= t
      ? !1
      : e.every((n) => n.type === 'newline' || n.type === 'space');
  }
  *documentEnd(e) {
    this.type !== 'doc-mode' &&
      (e.end ? e.end.push(this.sourceToken) : (e.end = [this.sourceToken]),
      this.type === 'newline' && (yield* this.pop()));
  }
  *lineEnd(e) {
    switch (this.type) {
      case 'comma':
      case 'doc-start':
      case 'doc-end':
      case 'flow-seq-end':
      case 'flow-map-end':
      case 'map-value-ind':
        yield* this.pop(), yield* this.step();
        break;
      case 'newline':
        this.onKeyLine = !1;
      case 'space':
      case 'comment':
      default:
        e.end ? e.end.push(this.sourceToken) : (e.end = [this.sourceToken]),
          this.type === 'newline' && (yield* this.pop());
    }
  }
};
function zi(s) {
  let e = s.prettyErrors !== !1;
  return { lineCounter: s.lineCounter || (e && new nt()) || null, prettyErrors: e };
}
function Ts(s, e = {}) {
  let { lineCounter: t, prettyErrors: n } = zi(e),
    i = new rt(t == null ? void 0 : t.addNewLine),
    r = new Xe(e),
    o = null;
  for (let a of r.compose(i.parse(s), !0, s.length))
    if (!o) o = a;
    else if (o.options.logLevel !== 'silent') {
      o.errors.push(
        new F(
          a.range.slice(0, 2),
          'MULTIPLE_DOCS',
          'Source contains multiple documents; please use YAML.parseAllDocuments()',
        ),
      );
      break;
    }
  return n && t && (o.errors.forEach(gs(s, t)), o.warnings.forEach(gs(s, t))), o;
}
var Ut = class {
  constructor(e, t, n, i) {
    (this.app = e),
      (this.filename = t),
      (this.basename = t.split('/').pop()),
      (this.tagPositions = n),
      (this.hasFrontMatter = !!i);
  }
  async renamed(e) {
    let t = this.app.vault.getAbstractFileByPath(this.filename),
      n = await this.app.vault.read(t),
      i = n;
    for (let {
      position: { start: r, end: o },
      tag: a,
    } of this.tagPositions) {
      if (i.slice(r.offset, o.offset) !== a) {
        let l = `File ${this.filename} has changed; skipping`;
        new Ls.Notice(l), console.error(l), console.debug(i.slice(r.offset, o.offset), a);
        return;
      }
      i = e.inString(i, r.offset);
    }
    if ((this.hasFrontMatter && (i = this.replaceInFrontMatter(i, e)), i !== n))
      return await this.app.vault.modify(t, i), !0;
  }
  replaceInFrontMatter(e, t) {
    let [n, i] = e.split(/^---\r?$\n?/m, 2);
    if (
      n.trim() !== '' ||
      !i.trim() ||
      !i.endsWith(`
`)
    )
      return e;
    let r = Ts(i, { keepSourceTokens: !0 });
    if (r.errors.length) {
      let f = `YAML issue with ${this.filename}: ${r.errors[0]}`;
      console.error(f), new Ls.Notice(f + '; skipping frontmatter');
      return;
    }
    let o = !1,
      a = r.toJSON();
    function l(f, u, h = !1) {
      tt.setScalarValue(f.srcToken, u, { afterKey: h }), (o = !0), (f.value = u);
    }
    function c(f, u) {
      let h = r.get(f, !0);
      if (!h) return;
      let p = a[f];
      if (!(!p || !p.length))
        if (typeof p == 'string') {
          let g = p.split(u ? /(^\s+|\s*,\s*|\s+$)/ : /([\s,]+)/),
            m = t.inArray(g, !0, u).join('');
          p != m && l(h, m, !0);
        } else
          Array.isArray(p) &&
            t.inArray(p, !1, u).forEach((g, m) => {
              p[m] !== g && l(h.get(m, !0), g);
            });
    }
    for (let {
      key: { value: f },
    } of r.contents.items)
      /^tags?$/i.test(f) ? c(f, !1) : /^alias(es)?$/i.test(f) && c(f, !0);
    return o ? e.replace(i, tt.stringify(r.contents.srcToken)) : e;
  }
};
async function qn(s, e) {
  let t = await tr(e);
  if (t === !1) return;
  if (!t || t === e) return new we.Notice('Unchanged or empty tag: No changes made.');
  let n = new I(e),
    i = new I(t),
    r = new ft(n, i),
    o = r.willMergeTags(er(s).reverse());
  if (o && (await sr(o, n, i))) return;
  let l = await Is(s, n);
  if (!l) return;
  let c = new _e(`Renaming to #${t}/*`, 'Processing files...'),
    f = 0;
  return (
    await c.forEach(l, async (u) => {
      (c.message = 'Processing ' + u.basename), (await u.renamed(r)) && f++;
    }),
    new we.Notice(`Operation ${c.aborted ? 'cancelled' : 'complete'}: ${f} file(s) updated`)
  );
}
function er(s) {
  return Object.keys(s.metadataCache.getTags());
}
async function Is(s, e) {
  let t = [],
    n = new _e(`Searching for ${e}/*`, 'Matching files...');
  if (
    (await n.forEach(s.metadataCache.getCachedFiles(), (i) => {
      let { frontmatter: r, tags: o } = s.metadataCache.getCache(i) || {};
      o = (o || []).filter((c) => c.tag && e.matches(c.tag)).reverse();
      let a = ((0, we.parseFrontMatterTags)(r) || []).filter(e.matches),
        l = ((0, we.parseFrontMatterAliases)(r) || []).filter(I.isTag).filter(e.matches);
      (o.length || a.length || l.length) && t.push(new Ut(s, i, o, a.length + l.length));
    }),
    !n.aborted)
  )
    return t;
}
async function tr(s) {
  try {
    return await Gs(
      `Renaming #${s} (and any sub-tags)`,
      `Enter new name (must be a valid Obsidian tag):
`,
      s,
      '[^\u2000-\u206F\u2E00-\u2E7F\'!"#$%&()*+,.:;<=>?@^`{|}~\\[\\]\\\\\\s]+',
      'Obsidian tag name',
    );
  } catch (e) {
    return !1;
  }
}
async function sr([s, e], t, n) {
  try {
    await (0, Dn.confirm)(
      'WARNING: No Undo!',
      `Renaming <code>${t}</code> to <code>${n}</code> will merge ${
        s.canonical === t.canonical
          ? 'these tags'
          : `multiple tags
                    into existing tags (such as <code>${s}</code>
                    merging with <code>${e}</code>)`
      }.

            This <b>cannot</b> be undone.  Do you wish to proceed?`,
    );
  } catch (i) {
    return !0;
  }
}
function Fn(s, e) {
  let t = Object.keys(e).map((n) => nr(s, n, e[n]));
  return t.length === 1
    ? t[0]
    : function () {
        t.forEach((n) => n());
      };
}
function nr(s, e, t) {
  let n = s[e],
    i = s.hasOwnProperty(e),
    r = t(n);
  return n && Object.setPrototypeOf(r, n), Object.setPrototypeOf(o, r), (s[e] = o), a;
  function o(...l) {
    return r === n && s[e] === o && a(), r.apply(this, l);
  }
  function a() {
    s[e] === o && (i ? (s[e] = n) : delete s[e]), r !== n && ((r = n), Object.setPrototypeOf(o, n || Function));
  }
}
var Kn = 'tag-wrangler:tag-pane';
function ot(s, e, t, n, i) {
  return s.on(e, t, n, i), () => s.off(e, t, n, i);
}
var Vt = class extends P.Plugin {
  constructor() {
    super(...arguments);
    Gt(this, 'pageAliases', new Map());
    Gt(this, 'tagPages', new Map());
  }
  tagPage(t) {
    return Array.from(this.tagPages.get(I.canonical(t)) || '')[0];
  }
  openTagPage(t, n, i) {
    let r = { eState: n ? { rename: 'all' } : { focus: !0 }, ...(n ? { state: { mode: 'source' } } : {}) };
    return this.app.workspace.getLeaf(i).openFile(t, r);
  }
  async createTagPage(t, n) {
    var a;
    let i = new I(t).name.split('/').join(' '),
      r = this.app.fileManager.getNewFileParent(
        ((a = this.app.workspace.getActiveFile()) == null ? void 0 : a.path) || '',
      ),
      o = this.app.vault.getAvailablePath(r.getParentPrefix() + i, 'md');
    this.openTagPage(
      await this.app.vault.create(
        o,
        ['---', `Aliases: [ ${JSON.stringify(I.toTag(t))} ]`, '---', ''].join(`
`),
      ),
      !0,
      n,
    );
  }
  async onload() {
    this.register(ot(document, 'contextmenu', '.tag-pane-tag', this.onMenu.bind(this), { capture: !0 })),
      this.app.workspace.registerHoverLinkSource(Kn, { display: 'Tag pane', defaultMod: !0 }),
      this.addChild(
        new at(this, {
          hoverSource: Kn,
          selector: '.tag-pane-tag',
          container: '.tag-container',
          toTag(i) {
            var r;
            return (r = i.find('.tag-pane-tag-text, tag-pane-tag-text, .tag-pane-tag .tree-item-inner-text')) == null
              ? void 0
              : r.textContent;
          },
        }),
      ),
      this.addChild(
        new at(this, {
          hoverSource: 'preview',
          selector: 'a.tag[href^="#"]',
          container: '.markdown-preview-view, .markdown-embed, .workspace-leaf-content',
          toTag(i) {
            return i.getAttribute('href');
          },
        }),
      ),
      this.addChild(
        new at(this, {
          hoverSource: 'editor',
          selector: 'span.cm-hashtag',
          container: '.markdown-source-view',
          toTag(i) {
            let r = i.textContent;
            if (!i.matches('.cm-formatting'))
              for (
                let o = i.previousElementSibling;
                o != null && o.matches('span.cm-hashtag:not(.cm-formatting)');
                o = o.previousElementSibling
              )
                r = o.textContent + r;
            for (
              let o = i.nextElementSibling;
              o != null && o.matches('span.cm-hashtag:not(.cm-formatting)');
              o = o.nextElementSibling
            )
              r += o.textContent;
            return r;
          },
        }),
      ),
      this.register(
        ot(
          document,
          'pointerdown',
          '.tag-pane-tag',
          (i, r) => {
            r.draggable = 'true';
          },
          { capture: !0 },
        ),
      ),
      this.register(
        ot(
          document,
          'dragstart',
          '.tag-pane-tag',
          (i, r) => {
            var a;
            let o =
              (a = r.find('.tag-pane-tag-text, tag-pane-tag-text, .tag-pane-tag .tree-item-inner-text')) == null
                ? void 0
                : a.textContent;
            i.dataTransfer.setData('text/plain', '#' + o),
              app.dragManager.onDragStart(i, { source: 'tag-wrangler', type: 'text', title: o, icon: 'hashtag' });
          },
          { capture: !1 },
        ),
      );
    let t = this.app.metadataCache,
      n = this;
    this.register(
      Fn(t, {
        getTags(i) {
          return function () {
            let o = i.call(this),
              a = new Set(Object.keys(o).map((l) => l.toLowerCase()));
            for (let l of n.tagPages.keys()) a.has(l) || (o[n.tagPages.get(l).tag] = 0);
            return o;
          };
        },
      }),
    ),
      this.app.workspace.onLayoutReady(() => {
        t.getCachedFiles().forEach((i) => {
          var o, a;
          let r = (o = t.getCache(i)) == null ? void 0 : o.frontmatter;
          r &&
            ((a = (0, P.parseFrontMatterAliases)(r)) == null ? void 0 : a.filter(I.isTag)) &&
            this.updatePage(this.app.vault.getAbstractFileByPath(i), r);
        }),
          this.registerEvent(t.on('changed', (i, r, o) => this.updatePage(i, o == null ? void 0 : o.frontmatter))),
          this.registerEvent(this.app.vault.on('delete', (i) => this.updatePage(i))),
          app.workspace.getLeavesOfType('tag').forEach((i) => {
            var r, o;
            (o = (r = i == null ? void 0 : i.view) == null ? void 0 : r.requestUpdateTags) == null || o.call(r);
          });
      });
  }
  updatePage(t, n) {
    var r;
    let i = ((r = (0, P.parseFrontMatterAliases)(n)) == null ? void 0 : r.filter(I.isTag)) || [];
    if (this.pageAliases.has(t)) {
      let o = new Set(i || []);
      for (let a of this.pageAliases.get(t)) {
        if (o.has(a)) continue;
        let l = I.canonical(a),
          c = this.tagPages.get(l);
        c && (c.delete(t), c.size || this.tagPages.delete(l));
      }
      i.length || this.pageAliases.delete(t);
    }
    if (i.length) {
      this.pageAliases.set(t, i);
      for (let o of i) {
        let a = I.canonical(o);
        if (this.tagPages.has(a)) this.tagPages.get(a).add(t);
        else {
          let l = new Set([t]);
          (l.tag = I.toTag(o)), this.tagPages.set(a, l);
        }
      }
    }
  }
  onMenu(t, n) {
    t.obsidian_contextmenu ||
      ((t.obsidian_contextmenu = new P.Menu(this.app)),
      setTimeout(() => u.showAtPosition({ x: t.pageX, y: t.pageY }), 0));
    let i = n.find('.tag-pane-tag-text, .tag-pane-tag .tree-item-inner-text').textContent,
      r = this.tagPage(i),
      o = n.parentElement.parentElement.find('.collapse-icon'),
      a = this.app.internalPlugins.getPluginById('global-search'),
      l = a && a.instance,
      c = l && l.getGlobalSearchQuery(),
      f = this.app.plugins.plugins['smart-random-note'],
      u = t.obsidian_contextmenu.addItem(le('pencil', 'Rename #' + i, () => this.rename(i)));
    if (
      (u.addSeparator(),
      r
        ? u.addItem(le('popup-open', 'Open tag page', (h) => this.openTagPage(r, !1, P.Keymap.isModEvent(h))))
        : u.addItem(le('create-new', 'Create tag page', (h) => this.createTagPage(i, P.Keymap.isModEvent(h)))),
      l &&
        (u.addSeparator().addItem(le('magnifying-glass', 'New search for #' + i, () => l.openGlobalSearch('tag:' + i))),
        c && u.addItem(le('sheets-in-box', 'Require #' + i + ' in search', () => l.openGlobalSearch(c + ' tag:' + i))),
        u.addItem(le('crossed-star', 'Exclude #' + i + ' from search', () => l.openGlobalSearch(c + ' -tag:' + i)))),
      f &&
        u.addSeparator().addItem(
          le('dice', 'Open random note', async () => {
            let h = await Is(this.app, new I(i));
            f.openRandomNote(h.map((p) => this.app.vault.getAbstractFileByPath(p.filename)));
          }),
        ),
      this.app.workspace.trigger('tag-wrangler:contextmenu', u, i, { search: l, query: c, isHierarchy: o, tagPage: r }),
      o)
    ) {
      let m = function (d) {
          var y;
          for (let w of (y = g.children) != null ? y : g.vChildren.children) w.setCollapsed(d);
        },
        h = i.split('/').slice(0, -1).join('/'),
        p = this.leafView(n.matchParent('.workspace-leaf')),
        g = h ? p.tagDoms['#' + h.toLowerCase()] : p.root;
      u.addSeparator()
        .addItem(le('vertical-three-dots', 'Collapse tags at this level', () => m(!0)))
        .addItem(le('expand-vertically', 'Expand tags at this level', () => m(!1)));
    }
  }
  leafView(t) {
    let n;
    return (
      this.app.workspace.iterateAllLeaves((i) => {
        if (i.containerEl === t) return (n = i.view), !0;
      }),
      n
    );
  }
  async rename(t) {
    let n = new P.Scope();
    this.app.keymap.pushScope(n);
    try {
      await qn(this.app, t);
    } catch (i) {
      console.error(i), new P.Notice('error: ' + i);
    }
    this.app.keymap.popScope(n);
  }
};
function le(s, e, t) {
  return (n) => n.setIcon(s).setTitle(e).onClick(t);
}
var at = class extends P.Component {
  constructor(e, t) {
    super(), (this.opts = t), (this.plugin = e);
  }
  onload() {
    let { selector: e, container: t, hoverSource: n, toTag: i } = this.opts;
    this.register(
      ot(
        document,
        'mouseover',
        e,
        (r, o) => {
          let a = i(o),
            l = a && this.plugin.tagPage(a);
          l &&
            this.plugin.app.workspace.trigger('hover-link', {
              event: r,
              source: n,
              targetEl: o,
              linktext: l.path,
              hoverParent: o.matchParent(t),
            });
        },
        { capture: !1 },
      ),
    ),
      this.register(
        ot(
          document,
          'click',
          e,
          (r, o) => {
            let { altKey: a } = r;
            if (!P.Keymap.isModEvent(r) && !a) return;
            let l = i(o),
              c = l && this.plugin.tagPage(l);
            if (c) return this.plugin.openTagPage(c, !1, !a), r.preventDefault(), r.stopPropagation(), !1;
          },
          { capture: !0 },
        ),
      );
  }
};
