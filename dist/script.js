/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var EN = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'DEL'], ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '\;', '\'', 'Enter'], ['Shift', '\\', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '\,', '\.', '\/', '&#8593;', 'Shift'], ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '&#8592;', '&#8595;', '&#8594;']];
var KEYCODE = [['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'], ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'], ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'], ['ShiftLeft', 'Backslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'], ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']];
var RU = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'], ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'DEL'], ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'], ['Shift', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '\/', '&#8593;', 'Shift'], ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Ctrl', '&#8592;', '&#8595;', '&#8594;']]; //множество для подсветки клавиш нажатых с клавиатуры

var pressed = new Set(); //множество для подсветки клавиш нажатых с экрана

var pressedVirtual = new Set();
var lang;

var saveLang = function saveLang(bool) {
  localStorage.setItem('En', bool);
  console.log(bool);
};

if (localStorage.getItem('En') == true || localStorage.getItem('En') == null) {
  lang = EN;
} else {
  lang = RU;
}

window.onload = function () {
  generateElementsBlock();
  generateElementKey(lang);
  keyPressHandler();
  clickKey();
};

var generateElementsBlock = function generateElementsBlock() {
  var section = document.createElement('section');
  var input = document.createElement('textarea');
  input.classList.add('input');
  var div = document.createElement('div');
  div.classList.add('key-wrapper');
  document.body.append(section);
  section.append(input);
  section.append(div);
};

var generateElementKey = function generateElementKey(arrLang) {
  lang = arrLang;
  var bool = arrLang == EN ? true : false;
  console.log(bool);
  localStorage.setItem('En', false);

  for (var i = 0; i < arrLang.length; i++) {
    var div = document.createElement('div');
    div.classList.add('row');

    for (var j = 0; j < arrLang[i].length; j++) {
      var p = document.createElement('p');
      p.classList.add('key-elem');
      p.setAttribute('data-key', KEYCODE[i][j]);
      p.innerHTML = arrLang[i][j];
      div.append(p);
    }

    var keyWrapper = document.querySelector('.key-wrapper');
    keyWrapper.append(div);
  }
};

var keyPressHandler = function keyPressHandler() {
  document.addEventListener('keydown', keyShow);
  changeLanguage('ShiftLeft', 'ControlLeft');
  document.addEventListener('keyup', function (event) {
    pressed["delete"](event.code);
  });
};

var changeLanguage = function changeLanguage() {
  for (var _len = arguments.length, codes = new Array(_len), _key = 0; _key < _len; _key++) {
    codes[_key] = arguments[_key];
  }

  var pressed = new Set();
  document.addEventListener('keydown', function (event) {
    pressed.add(event.code);

    var _iterator = _createForOfIteratorHelper(codes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var code = _step.value;

        if (!pressed.has(code)) {
          return;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    pressed.clear();
    document.querySelector('.key-wrapper').innerHTML = '';

    if (lang == EN) {
      generateElementKey(RU);
      saveLang(false);
    } else {
      generateElementKey(EN);
      saveLang(true);
    }
  });
  document.addEventListener('keyup', function (event) {
    pressed["delete"](event.code);
  });
};

var keyShow = function keyShow(event) {
  var input = document.querySelector('textarea');
  var code = event.code;
  var keys = document.querySelectorAll('.key-elem');

  if (event.key.length == 1) {
    input.innerHTML += event.key;
    input.focus();
  }

  pressed.add(event.code);

  for (var i = 0; i < keys.length; i++) {
    keys[i].classList.remove('active');
    ;

    if (pressed.has(keys[i].getAttribute('data-key'))) {
      keys[i].classList.add('active');
    }
  }
};

var clickKey = function clickKey() {
  var keys = document.querySelector('.key-wrapper');
  keys.addEventListener('click', clickVirtual);
};

var clickVirtual = function clickVirtual(event) {
  var input = document.querySelector('textarea');
  var pos = getCaretPosition(input);
  var keys = document.querySelectorAll('.key-elem');
  pressedVirtual.add(event.target.getAttribute('data-key'));
  var capital = false;

  if (pressedVirtual.has('CapsLock')) {
    capital = true;
    event.target.classList.add('active');
    event.target.addEventListener('click', capitalCancel);

    for (var i = 0; i < keys.length; i++) {
      if (keys[i].innerHTML.length == 1) {
        keys[i].innerHTML = keys[i].innerHTML.toUpperCase();
      }
    }
  }

  if (event.target.closest('.key-elem') && event.target.innerHTML.length == 1) {
    input.innerHTML += event.target.innerHTML;
    setCaretPosition(input, pos + 1);

    for (var _i = 0; _i < keys.length; _i++) {
      keys[_i].classList.remove('active');
    }

    event.target.classList.add('active');

    if (!capital) {
      capitalCancel();
    }
  }

  if (event.target.getAttribute(['data-key']) == 'Delete') {
    var inputValue = input.innerHTML.split('');
    inputValue.splice(pos, 1);
    input.innerHTML = inputValue.join('');
    setCaretPosition(input, pos);
    input.focus();
  }

  if (event.target.getAttribute(['data-key']) == 'Backspace') {
    var _inputValue = input.innerHTML.split('');

    _inputValue.splice(pos - 1, 1);

    input.innerHTML = _inputValue.join('');
    setCaretPosition(input, pos - 1);
    input.focus();
  }

  if (event.target.getAttribute(['data-key']) == 'Tab') {
    input.innerHTML = input.innerHTML + '   ';
    setCaretPosition(input, pos + 3);
    input.focus();
  }

  if (event.target.getAttribute(['data-key']) == 'Enter') {
    var _inputValue2 = input.innerHTML.split('');

    _inputValue2.splice(pos, 0, '\r\n');

    input.innerHTML = _inputValue2.join('');
    setCaretPosition(input, input.innerHTML.length);
    input.focus();
  }

  if (pressedVirtual.has('ShiftLeft') || pressedVirtual.has('ShiftRight')) {
    event.target.classList.add('active');

    for (var _i2 = 0; _i2 < keys.length; _i2++) {
      if (keys[_i2].innerHTML.length == 1) {
        keys[_i2].innerHTML = keys[_i2].innerHTML.toUpperCase();
      }
    }
  }
};

var getCaretPosition = function getCaretPosition(elem) {
  var caretPos = 0;

  if (document.selection) {
    // ie
    elem.focus();
    var range = document.selection.createRange();
    elem.moveStart('character', -elem.innerHTML.length);
    caretPos = range.text.length;
  } else if (elem.selectionStart || elem.selectionStart == '0') {
    // Mozilla
    caretPos = elem.selectionStart;
  }

  return caretPos;
};

var setCaretPosition = function setCaretPosition(elem, caretPos) {
  if (document.selection) {
    // ie
    elem.focus();
    var range = document.selection.createRange();
    range.moveStart('character', -elem.innerHTML.length);
    range.moveStart('character', caretPos);
    range.moveEnd('character', 0);
    range.select();
  } else if (elem.selectionStart || elem.selectionStart == '0') {
    // Mozilla
    elem.selectionStart = caretPos;
    elem.selectionEnd = caretPos;
    elem.focus();
  }
};

var capitalCancel = function capitalCancel() {
  var keys = document.querySelectorAll('.key-elem');

  for (var i = 0; i < keys.length; i++) {
    if (keys[i].innerHTML.length == 1) {
      keys[i].innerHTML = keys[i].innerHTML.toLowerCase();
    }
  }

  capital = false;
  pressedVirtual.clear();
};

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/script.js ./src/scss/style.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/script.js */"./src/script.js");
module.exports = __webpack_require__(/*! ./src/scss/style.scss */"./src/scss/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map