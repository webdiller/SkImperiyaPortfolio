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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/about/about.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/about/about.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var aboutBtnLg = document.querySelector(".js-about-content-link-lg");
var aboutBtnSm = document.querySelector(".js-about-content-link-sm");
var aboutText = document.querySelector(".js-about-content-text");

try {
  aboutBtnLg.addEventListener("click", function (e) {
    aboutText.classList.add("active");
  });
  aboutBtnSm.addEventListener("click", function (e) {
    aboutText.classList.add("active");
  });
} catch (error) {
  console.log(error);
}

/***/ }),

/***/ "./src/blocks/modules/complectations/complectations.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/complectations/complectations.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var elements = document.querySelector(".js-complectations-hidden-elements");
var complectationsBtn = document.querySelector(".js-complectations-show-more-btn");

try {
  complectationsBtn.addEventListener("click", function (e) {
    elements.classList.add("active");
  });
} catch (error) {
  console.log(error);
}

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header-middle/header-middle.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/header-middle/header-middle.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var headerParent = document.querySelector(".js-header-middle-container");
var headerBtn = document.querySelector(".js-header-middle-search-btn");
var headerInput = document.querySelector(".js-header-middle-search-input");

try {
  headerBtn.addEventListener("click", function (e) {
    if (window.innerWidth <= 991) {
      headerParent.classList.add("active");
    }
  });
} catch (error) {
  console.log(error);
}

/***/ }),

/***/ "./src/blocks/modules/header-top/header-top.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/header-top/header-top.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var menuTriggerParent = document.querySelector(".js-header-top");
var menuTrigger = document.querySelector(".js-header-top-menu-trigger");
var menuList = document.querySelector(".js-header-top-menu");

try {
  menuTrigger.addEventListener('click', function (e) {
    e.target.classList.toggle('active');
    menuTriggerParent.classList.toggle('active');
    menuList.classList.toggle('active');
  });
} catch (error) {
  console.log(error);
}

/***/ }),

/***/ "./src/blocks/modules/photos-objects/photos-objects.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/photos-objects/photos-objects.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var photosObjectsParent = document.querySelector(".js-photos-objects-items");
var photosObjectsBtn = document.querySelector(".js-photos-objects-show-more-btn");

var renderElements = function renderElements() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? "#" : _ref$href,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data;

  var item = "\n        <a class=\"photos-objects__item\" href=\"".concat(href, "\">\n          <img class=\"photos-objects__img\" src=\"./img/img03_320.jpg\" alt=\"\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0445 \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432\">\n        </a>\n      ");
  photosObjectsParent.insertAdjacentHTML("beforeend", item);
};

try {
  photosObjectsBtn.addEventListener("click", function (e) {
    renderElements();
    renderElements();
    renderElements();
    renderElements();
    renderElements();
    renderElements();
  });
} catch (e) {
  console.log(e);
}

/***/ }),

/***/ "./src/blocks/modules/projects/projects.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/projects/projects.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var projectsParent = document.querySelector(".js-projects-items");
var projectsBtn = document.querySelector(".js-projects-show-more-btn");

var renderElements = function renderElements() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$price = _ref.price,
      price = _ref$price === void 0 ? 1000 : _ref$price,
      _ref$innerWidth = _ref.innerWidth,
      innerWidth = _ref$innerWidth === void 0 ? 100 : _ref$innerWidth,
      _ref$outWidth = _ref.outWidth,
      outWidth = _ref$outWidth === void 0 ? 140 : _ref$outWidth,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "Каркасный дом" : _ref$type,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? "Проект лидер" : _ref$name,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data;

  var item = "\n        <div class=\"projects__item\">\n          <img class=\"projects__item-img\" src=\"./img/img03_320.jpg\" alt=\"\u041F\u0440\u043E\u0435\u043A\u0442 \u043B\u0438\u0434\u0435\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0434\u043E\u043C\u0430\">\n            <div class=\"projects__item-data\">\n                <div class=\"projects__item-top\">\n                <div class=\"projects__item-info\">\n                    <p class=\"projects__item-info-type\">".concat(type, ":</p>\n                    <p class=\"projects__item-info-name\">").concat(name, "</p>\n                </div>\n                <div class=\"projects__item-values\">\n                    <div class=\"projects__item-value\"><img class=\"projects__item-value-icon\" src=\"./img/svg/icon-inner.svg\"><span class=\"projects__item-value-text\">").concat(innerWidth, "</span></div>\n                    <div class=\"projects__item-value\"><img class=\"projects__item-value-icon\" src=\"./img/svg/icon-outer.svg\"><span class=\"projects__item-value-text\">").concat(outWidth, " \u043C2</span></div>\n                </div>\n                </div>\n                <div class=\"projects__item-bottom\">\n                <p class=\"projects__item-price\">\u043E\u0442 <strong>").concat(price, "</strong> \u0440\u0443\u0431\u043B\u0435\u0439</p>\n                </div><a class=\"ui-btn ui-btn_accent ui-btn_round projects__item-link\" href=\"#\">\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435</a>\n            </div>\n        </div>\n      ");
  projectsParent.insertAdjacentHTML("beforeend", item);
};

try {
  projectsBtn.addEventListener("click", function (e) {
    renderElements();
    renderElements();
    renderElements();
    renderElements();
    renderElements();
    renderElements();
  });
} catch (e) {
  console.log(e);
}

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_top_header_top__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header-top/header-top */ "./src/blocks/modules/header-top/header-top.js");
/* harmony import */ var _modules_header_top_header_top__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_top_header_top__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_header_middle_header_middle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header-middle/header-middle */ "./src/blocks/modules/header-middle/header-middle.js");
/* harmony import */ var _modules_header_middle_header_middle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header_middle_header_middle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_about_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/about/about */ "./src/blocks/modules/about/about.js");
/* harmony import */ var _modules_about_about__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_about_about__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_complectations_complectations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/complectations/complectations */ "./src/blocks/modules/complectations/complectations.js");
/* harmony import */ var _modules_complectations_complectations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_complectations_complectations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_projects_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/projects/projects */ "./src/blocks/modules/projects/projects.js");
/* harmony import */ var _modules_projects_projects__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_projects_projects__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_photos_objects_photos_objects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/photos-objects/photos-objects */ "./src/blocks/modules/photos-objects/photos-objects.js");
/* harmony import */ var _modules_photos_objects_photos_objects__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_photos_objects_photos_objects__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ });
//# sourceMappingURL=main.js.map