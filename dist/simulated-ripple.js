(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("SimulatedRipple", [], factory);
	else if(typeof exports === 'object')
		exports["SimulatedRipple"] = factory();
	else
		root["SimulatedRipple"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 105);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var core = module.exports = { version: '2.4.0' };
if (typeof __e == 'number') __e = core;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = !__webpack_require__(12)(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if (typeof __g == 'number') __g = global;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var IObject = __webpack_require__(81),
    defined = __webpack_require__(17);
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__(31);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var anObject = __webpack_require__(14),
    IE8_DOM_DEFINE = __webpack_require__(35),
    toPrimitive = __webpack_require__(28),
    dP = _defineProperty2.default;

exports.f = __webpack_require__(1) ? _defineProperty2.default : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof3 = __webpack_require__(6);

var _typeof4 = _interopRequireDefault2(_typeof3);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.__esModule = true;

var _iterator = __webpack_require__(62);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(61);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && (0, _typeof4.default)(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : (0, _typeof4.default)(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : (0, _typeof4.default)(obj);
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2),
    core = __webpack_require__(0),
    ctx = __webpack_require__(78),
    hide = __webpack_require__(8),
    PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F,
      IS_GLOBAL = type & $export.G,
      IS_STATIC = type & $export.S,
      IS_PROTO = type & $export.P,
      IS_BIND = type & $export.B,
      IS_WRAP = type & $export.W,
      exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
      expProto = exports[PROTOTYPE],
      target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
      key,
      own,
      out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;

    out = own ? target[key] : source[key];

    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();
            case 1:
              return new C(a);
            case 2:
              return new C(a, b);
          }return new C(a, b, c);
        }return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;

    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;

      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};

$export.F = 1;
$export.G = 2;
$export.S = 4;
$export.P = 8;
$export.B = 16;
$export.W = 32;
$export.U = 64;
$export.R = 128;
module.exports = $export;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(5),
    createDesc = __webpack_require__(15);
module.exports = __webpack_require__(1) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(6);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (it) {
  return (typeof it === 'undefined' ? 'undefined' : (0, _typeof3.default)(it)) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(7),
    core = __webpack_require__(0),
    fails = __webpack_require__(12);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY],
      exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = __webpack_require__(25)('wks'),
    uid = __webpack_require__(16),
    _Symbol = __webpack_require__(2).Symbol,
    USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(59);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $keys = __webpack_require__(44),
    enumBugKeys = __webpack_require__(18);

module.exports = _keys2.default || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var id = 0,
    px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = true;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _create = __webpack_require__(53);

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var anObject = __webpack_require__(14),
    dPs = __webpack_require__(38),
    enumBugKeys = __webpack_require__(18),
    IE_PROTO = __webpack_require__(24)('IE_PROTO'),
    Empty = function Empty() {},
    PROTOTYPE = 'prototype';

var _createDict = function createDict() {
  var iframe = __webpack_require__(34)('iframe'),
      i = enumBugKeys.length,
      lt = '<',
      gt = '>',
      iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(80).appendChild(iframe);
  iframe.src = 'javascript:';
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }return _createDict();
};

module.exports = _create2.default || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;

    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var def = __webpack_require__(5).f,
    has = __webpack_require__(4),
    TAG = __webpack_require__(11)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var shared = __webpack_require__(25)('keys'),
    uid = __webpack_require__(16);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2),
    SHARED = '__core-js_shared__',
    store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ceil = Math.ceil,
    floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defined = __webpack_require__(17);
module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(9);

module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2),
    core = __webpack_require__(0),
    LIBRARY = __webpack_require__(20),
    wksExt = __webpack_require__(30),
    defineProperty = __webpack_require__(5).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = __webpack_require__(11);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(65), __esModule: true };

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(67), __esModule: true };

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(9),
    document = __webpack_require__(2).document,
    is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = !__webpack_require__(1) && !__webpack_require__(12)(function () {
  return Object.defineProperty(__webpack_require__(34)('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(20),
    $export = __webpack_require__(7),
    redefine = __webpack_require__(45),
    hide = __webpack_require__(8),
    has = __webpack_require__(4),
    Iterators = __webpack_require__(19),
    $iterCreate = __webpack_require__(83),
    setToStringTag = __webpack_require__(23),
    getPrototypeOf = __webpack_require__(43),
    ITERATOR = __webpack_require__(11)('iterator'),
    BUGGY = !([].keys && 'next' in [].keys()),
    FF_ITERATOR = '@@iterator',
    KEYS = 'keys',
    VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator',
      DEF_VALUES = DEFAULT == VALUES,
      VALUES_BUG = false,
      proto = Base.prototype,
      $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
      $default = $native || getMethod(DEFAULT),
      $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
      $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
      methods,
      key,
      IteratorPrototype;

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype) {
      setToStringTag(IteratorPrototype, TAG, true);

      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }

  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }

  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }

  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(6);

var _typeof3 = _interopRequireDefault(_typeof2);

var _preventExtensions = __webpack_require__(60);

var _preventExtensions2 = _interopRequireDefault(_preventExtensions);

var _isExtensible = __webpack_require__(58);

var _isExtensible2 = _interopRequireDefault(_isExtensible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var META = __webpack_require__(16)('meta'),
    isObject = __webpack_require__(9),
    has = __webpack_require__(4),
    setDesc = __webpack_require__(5).f,
    id = 0;
var isExtensible = _isExtensible2.default || function () {
  return true;
};
var FREEZE = !__webpack_require__(12)(function () {
  return isExtensible((0, _preventExtensions2.default)({}));
});
var setMeta = function setMeta(it) {
  setDesc(it, META, { value: {
      i: 'O' + ++id,
      w: {} } });
};
var fastKey = function fastKey(it, create) {
  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : (0, _typeof3.default)(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    if (!isExtensible(it)) return 'F';

    if (!create) return 'E';

    setMeta(it);
  }return it[META].i;
};
var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    if (!isExtensible(it)) return true;

    if (!create) return false;

    setMeta(it);
  }return it[META].w;
};

var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperties = __webpack_require__(54);

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dP = __webpack_require__(5),
    anObject = __webpack_require__(14),
    getKeys = __webpack_require__(13);

module.exports = __webpack_require__(1) ? _defineProperties2.default : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties),
      length = keys.length,
      i = 0,
      P;
  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }return O;
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getOwnPropertyDescriptor = __webpack_require__(55);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pIE = __webpack_require__(22),
    createDesc = __webpack_require__(15),
    toIObject = __webpack_require__(3),
    toPrimitive = __webpack_require__(28),
    has = __webpack_require__(4),
    IE8_DOM_DEFINE = __webpack_require__(35),
    gOPD = _getOwnPropertyDescriptor2.default;

exports.f = __webpack_require__(1) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {}
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getOwnPropertyNames = __webpack_require__(32);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _typeof2 = __webpack_require__(6);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toIObject = __webpack_require__(3),
    gOPN = __webpack_require__(41).f,
    toString = {}.toString;

var windowNames = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) == 'object' && window && _getOwnPropertyNames2.default ? (0, _getOwnPropertyNames2.default)(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getOwnPropertyNames = __webpack_require__(32);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $keys = __webpack_require__(44),
    hiddenKeys = __webpack_require__(18).concat('length', 'prototype');

exports.f = _getOwnPropertyNames2.default || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getOwnPropertySymbols = __webpack_require__(56);

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.f = _getOwnPropertySymbols2.default;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(57);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var has = __webpack_require__(4),
    toObject = __webpack_require__(27),
    IE_PROTO = __webpack_require__(24)('IE_PROTO'),
    ObjectProto = Object.prototype;

module.exports = _getPrototypeOf2.default || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(4),
    toIObject = __webpack_require__(3),
    arrayIndexOf = __webpack_require__(77)(false),
    IE_PROTO = __webpack_require__(24)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object),
      i = 0,
      result = [],
      key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  }
  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(8);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(6);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var global = __webpack_require__(2),
    has = __webpack_require__(4),
    DESCRIPTORS = __webpack_require__(1),
    $export = __webpack_require__(7),
    redefine = __webpack_require__(45),
    META = __webpack_require__(37).KEY,
    $fails = __webpack_require__(12),
    shared = __webpack_require__(25),
    setToStringTag = __webpack_require__(23),
    uid = __webpack_require__(16),
    wks = __webpack_require__(11),
    wksExt = __webpack_require__(30),
    wksDefine = __webpack_require__(29),
    keyOf = __webpack_require__(85),
    enumKeys = __webpack_require__(79),
    isArray = __webpack_require__(82),
    anObject = __webpack_require__(14),
    toIObject = __webpack_require__(3),
    toPrimitive = __webpack_require__(28),
    createDesc = __webpack_require__(15),
    _create = __webpack_require__(21),
    gOPNExt = __webpack_require__(40),
    $GOPD = __webpack_require__(39),
    $DP = __webpack_require__(5),
    $keys = __webpack_require__(13),
    gOPD = $GOPD.f,
    dP = $DP.f,
    gOPN = gOPNExt.f,
    $Symbol = global.Symbol,
    $JSON = global.JSON,
    _stringify = $JSON && $JSON.stringify,
    PROTOTYPE = 'prototype',
    HIDDEN = wks('_hidden'),
    TO_PRIMITIVE = wks('toPrimitive'),
    isEnum = {}.propertyIsEnumerable,
    SymbolRegistry = shared('symbol-registry'),
    AllSymbols = shared('symbols'),
    OPSymbols = shared('op-symbols'),
    ObjectProto = Object[PROTOTYPE],
    USE_NATIVE = typeof $Symbol == 'function',
    QObject = global.QObject;

var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', { value: 7 }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && (0, _typeof3.default)($Symbol.iterator) == 'symbol' ? function (it) {
  return (typeof it === 'undefined' ? 'undefined' : (0, _typeof3.default)(it)) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    }return setSymbolDesc(it, key, D);
  }return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P)),
      i = 0,
      l = keys.length,
      key;
  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it)),
      result = [],
      i = 0,
      key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto,
      names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
      result = [],
      i = 0,
      key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }return result;
};

if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(41).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(22).f = $propertyIsEnumerable;
  __webpack_require__(42).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(20)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var symbols = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), i = 0; symbols.length > i;) {
  wks(symbols[i++]);
}for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) {
  wksDefine(symbols[i++]);
}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },

  keyFor: function keyFor(key) {
    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  create: $create,

  defineProperty: $defineProperty,

  defineProperties: $defineProperties,

  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,

  getOwnPropertyNames: $getOwnPropertyNames,

  getOwnPropertySymbols: $getOwnPropertySymbols
});

$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();

  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return;
    var args = [it],
        i = 1,
        replacer,
        $replacer;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function replacer(key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(8)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);

setToStringTag($Symbol, 'Symbol');

setToStringTag(Math, 'Math', true);

setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(31);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var base64Ripple = exports.base64Ripple = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjQ5NEFGN0EzN0RFMTFFNzk5REVDRkREOUNDNDRDNkMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjQ5NEFGNzkzN0RFMTFFNzk5REVDRkREOUNDNDRDNkMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNUQ2RURGOUVCOUUxMUU1OUNFNjlFOERBMzAwMkE0MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNUQ2RURGQUVCOUUxMUU1OUNFNjlFOERBMzAwMkE0MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuoXlG0AAMmfSURBVHja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";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(6);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.checkNode = checkNode;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkNode(el) {
  HTMLElement.prototype.__defineGetter__('currentStyle', function () {
    return this.ownerDocument.defaultView.getComputedStyle(this, null);
  });
  var result = el;
  if (!result) {
    return console.error('找不到当前节点', el);
  }
  if (typeof el === 'string') {
    var domName = el;
    result = document.querySelector(domName);
    if (!result) {
      return console.error('找不到当前节点', el);
    }
  } else if ((typeof el === 'undefined' ? 'undefined' : (0, _typeof3.default)(el)) === 'object') {
    if (!el.nodeName) {
      return console.error('找不到当前节点', el);
    }
  }
  return result;
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
function isPC() {
   var userAgentInfo = navigator.userAgent;
   var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
   var flag = true;
   for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
         flag = false;break;
      }
   }
   return flag;
}
exports.default = isPC;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _config = __webpack_require__(104);

function showWarn(str) {
  console.warn(str + ' 请参考相关文档: ' + _config.DOCUMENT_ADDR);
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(63), __esModule: true };

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(68), __esModule: true };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(69), __esModule: true };

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(70), __esModule: true };

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(71), __esModule: true };

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(73), __esModule: true };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(74), __esModule: true };

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(90);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(91);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(92);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(93);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(94);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(46);
module.exports = __webpack_require__(0).Object.getOwnPropertySymbols;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(95);
module.exports = __webpack_require__(0).Object.getPrototypeOf;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(96);
module.exports = __webpack_require__(0).Object.isExtensible;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(97);
module.exports = __webpack_require__(0).Object.keys;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(98);
module.exports = __webpack_require__(0).Object.preventExtensions;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(46);
__webpack_require__(99);
__webpack_require__(101);
__webpack_require__(102);
module.exports = __webpack_require__(0).Symbol;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(100);
__webpack_require__(103);
module.exports = __webpack_require__(30).f('iterator');

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toIObject = __webpack_require__(3),
    toLength = __webpack_require__(88),
    toIndex = __webpack_require__(87);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this),
        length = toLength(O.length),
        index = toIndex(fromIndex, length),
        value;

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFunction = __webpack_require__(75);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () {
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getKeys = __webpack_require__(13),
    gOPS = __webpack_require__(42),
    pIE = __webpack_require__(22);
module.exports = function (it) {
  var result = getKeys(it),
      getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it),
        isEnum = pIE.f,
        i = 0,
        key;
    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }return result;
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(2).document && document.documentElement;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cof = __webpack_require__(33);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cof = __webpack_require__(33);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(21),
    descriptor = __webpack_require__(15),
    setToStringTag = __webpack_require__(23),
    IteratorPrototype = {};

__webpack_require__(8)(IteratorPrototype, __webpack_require__(11)('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (done, value) {
  return { value: value, done: !!done };
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getKeys = __webpack_require__(13),
    toIObject = __webpack_require__(3);
module.exports = function (object, el) {
  var O = toIObject(object),
      keys = getKeys(O),
      length = keys.length,
      index = 0,
      key;
  while (length > index) {
    if (O[key = keys[index++]] === el) return key;
  }
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(26),
    defined = __webpack_require__(17);

module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that)),
        i = toInteger(pos),
        l = s.length,
        a,
        b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(26),
    max = Math.max,
    min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(26),
    min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(76),
    step = __webpack_require__(84),
    Iterators = __webpack_require__(19),
    toIObject = __webpack_require__(3);

module.exports = __webpack_require__(36)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated);
  this._i = 0;
  this._k = kind;
}, function () {
  var O = this._t,
      kind = this._k,
      index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(7);

$export($export.S, 'Object', { create: __webpack_require__(21) });

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(7);

$export($export.S + $export.F * !__webpack_require__(1), 'Object', { defineProperties: __webpack_require__(38) });

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(7);

$export($export.S + $export.F * !__webpack_require__(1), 'Object', { defineProperty: __webpack_require__(5).f });

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toIObject = __webpack_require__(3),
    $getOwnPropertyDescriptor = __webpack_require__(39).f;

__webpack_require__(10)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(10)('getOwnPropertyNames', function () {
  return __webpack_require__(40).f;
});

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toObject = __webpack_require__(27),
    $getPrototypeOf = __webpack_require__(43);

__webpack_require__(10)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(9);

__webpack_require__(10)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toObject = __webpack_require__(27),
    $keys = __webpack_require__(13);

__webpack_require__(10)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(9),
    meta = __webpack_require__(37).onFreeze;

__webpack_require__(10)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(86)(true);

__webpack_require__(36)(String, 'String', function (iterated) {
  this._t = String(iterated);
  this._i = 0;
}, function () {
  var O = this._t,
      index = this._i,
      point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(29)('asyncIterator');

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(29)('observable');

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(89);
var global = __webpack_require__(2),
    hide = __webpack_require__(8),
    Iterators = __webpack_require__(19),
    TO_STRING_TAG = __webpack_require__(11)('toStringTag');

for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
  var NAME = collections[i],
      Collection = global[NAME],
      proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DOCUMENT_ADDR = exports.DOCUMENT_ADDR = 'https://github.com/qgh810/simulated-ripple';

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck2 = __webpack_require__(47);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(48);

var _createClass3 = _interopRequireDefault(_createClass2);

var _check = __webpack_require__(50);

var _log = __webpack_require__(52);

var _isPC = __webpack_require__(51);

var _isPC2 = _interopRequireDefault(_isPC);

var _ripple = __webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BOX_CLASSNAME = 'simulated-ripple-box';
var ISPC = (0, _isPC2.default)();

var TouchRipple = function () {
  function TouchRipple(el, options) {
    (0, _classCallCheck3.default)(this, TouchRipple);

    this.initData(el, options) && this.init();
  }

  (0, _createClass3.default)(TouchRipple, [{
    key: 'initData',
    value: function initData(el) {
      this.el = (0, _check.checkNode)(el);
      if (!this.el) return;
      this.filterId = 'filter-ripple-' + (new Date() - 0);
      return true;
    }
  }, {
    key: 'init',
    value: function init() {
      this.createSvg();
      this.addClickEvent();
    }
  }, {
    key: 'createSvg',
    value: function createSvg() {
      var _el = this.el,
          offsetTop = _el.offsetTop,
          offsetLeft = _el.offsetLeft;

      var el = this.el;
      this.svg = document.createElement('svg');
      var svg = this.svg;
      svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      svg.setAttribute('version', '1.1');
      svg.setAttribute('class', 'svg-filter');
      svg.setAttribute('style', ' position: absolute;\n                                left: ' + offsetLeft + 'px; \n                                top: ' + offsetTop + 'px; \n                                z-index: -1;\n                                opacity: 0;');
      svg.innerHTML += '\n    <defs>\n      <filter id="' + this.filterId + '">\n        <feImage xlink:href="' + _ripple.base64Ripple + '" x="30" y="20" width="0" height="0" result="ripple"></feImage>\n        <feDisplacementMap xChannelSelector="R" yChannelSelector="G" color-interpolation-filters="sRGB" in="SourceGraphic" in2="ripple" scale="20" result="dm" />\n        <feComposite operator="in" in2="ripple"></feComposite>\n        <feComposite in2="SourceGraphic"></feComposite>\n      </filter>\n    </defs>\n    ';

      el.parentNode.insertBefore(svg, el);
    }
  }, {
    key: 'addClickEvent',
    value: function addClickEvent() {}
  }]);
  return TouchRipple;
}();

module.exports = TouchRipple;

/***/ })
/******/ ]);
});