(this["webpackJsonpsocial-network-ui"] = this["webpackJsonpsocial-network-ui"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!normalize.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/normalize.css/normalize.css"), "");
exports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!@blueprintjs/core/lib/css/blueprint.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@blueprintjs/core/lib/css/blueprint.css"), "");
exports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!@blueprintjs/icons/lib/css/blueprint-icons.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css"), "");
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background: #a8ff78;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #78ffd6, #a8ff78); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  \n  \n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\n.navbar {\n  width: 90% !important;\n  margin: auto;\n  margin-top: 10px;\n  border-radius: 5px;\n  background-color: rgb(20, 20, 20) !important;\n  color: white;\n}\n\n.navbar-content{\n  width: 95%;\n  margin: auto;\n}\n\n.navbar-input {\n  background-color: rgb(54, 54, 54) !important;\n}\n\n.card-component {\n  width: 300px;\n  margin:8px;\n  display: inline-block;\n  position: relative;\n  border-radius: 10px;\n}\n\n.card-component img {\n  object-fit: cover;\n  width:260px;\n  height:260px;\n  border-radius: 10px;\n  margin: 5px 0px;\n  transition: .5s ease;\n}\n\n.card-title {\n  word-break: keep-all;\n  height: 30px;\n  word-wrap: break-word;\n}\n\n.card-component img:hover{\n  opacity: 0.5;\n}\n\n.card-component Button {\n  margin: 2px auto\n}\n\n.card-container {\n  display: block;\n  position: relative;\n  width: 90%;\n  margin: 20px auto;\n  text-align: center;\n}\n\n.character-details-container{\n  display: inline-flex;\n}\n\n.character-details-container img{\n  margin:15px;\n  width: 35%;\n}\n\n.character-details-container table{\n  margin:15px;\n  width: 65%;\n}\n\n.search-container {\n  width: 90%;\n  margin: 20px auto;\n  padding: 20px;\n  border-radius: 15px;\n}\n\n.search-container h1{\n  text-shadow:2px 2px 10px lightblue;\n  text-align: center;\n}\n\n.search-container hr{\n  background-color: black;\n}\n\n.search-filters {\n  width: 70%;\n  background-color: rgb(240, 240, 240);\n  margin: auto;\n  justify-content: center;\n  padding-bottom: 10px;\n  border-radius: 10px;\n}\n\n.search-filters-table{\n  width: 90%;\n  text-align: center;\n  margin: auto;\n  padding: 20px 0 20px 0;\n}\n\n.home-container{\n  width: 80%;\n  color: white;\n  margin: auto;\n  text-align: center;\n}\n\n.home-container img{\n  margin: 30px auto;\n}\n\n.rick-and-morty-navbar .navbar-link {\n  color: white;\n}", ""]);


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_juanpablogonzalez_Desktop_practice_rick_and_morty_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navigation */ "./src/components/Navigation.js");
/* harmony import */ var _components_characters_CharactersContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/characters/CharactersContainer */ "./src/components/characters/CharactersContainer.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redux/store */ "./src/redux/store.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_search_AdvancedSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search/AdvancedSearch */ "./src/components/search/AdvancedSearch.js");
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");

var _jsxFileName = "/Users/juanpablogonzalez/Desktop/practice/rick-and-morty-app/src/App.js";









function App() {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        _useState2 = Object(_Users_juanpablogonzalez_Desktop_practice_rick_and_morty_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        search = _useState2[0],
        setSearch = _useState2[1];

  const handleChange = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    exact: true,
    path: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    search: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: "/characters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    search: true,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_characters_CharactersContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    query: "",
    search: search,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Route"], {
    path: "/advanced-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    search: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_search_AdvancedSearch__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/rick-and-morty-logo.png":
/*!********************************************!*\
  !*** ./src/assets/rick-and-morty-logo.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/rick-and-morty-logo.dc06f50f.png";

/***/ }),

/***/ "./src/assets/wallpaper1.jpg":
/*!***********************************!*\
  !*** ./src/assets/wallpaper1.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/wallpaper1.b90bffc4.jpg";

/***/ }),

/***/ "./src/assets/wallpaper2.jpg":
/*!***********************************!*\
  !*** ./src/assets/wallpaper2.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/wallpaper2.58351c5b.jpg";

/***/ }),

/***/ "./src/assets/wallpaper3.jpg":
/*!***********************************!*\
  !*** ./src/assets/wallpaper3.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/wallpaper3.b7a3751c.jpg";

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_awesome_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-awesome-slider */ "./node_modules/react-awesome-slider/dist/index.js");
/* harmony import */ var react_awesome_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_awesome_slider_src_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-awesome-slider/src/styles */ "./node_modules/react-awesome-slider/src/styles.js");
/* harmony import */ var react_awesome_slider_dist_autoplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-awesome-slider/dist/autoplay */ "./node_modules/react-awesome-slider/dist/autoplay.js");
/* harmony import */ var react_awesome_slider_dist_autoplay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_awesome_slider_dist_autoplay__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_rick_and_morty_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/rick-and-morty-logo.png */ "./src/assets/rick-and-morty-logo.png");
/* harmony import */ var _assets_rick_and_morty_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_rick_and_morty_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_wallpaper1_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/wallpaper1.jpg */ "./src/assets/wallpaper1.jpg");
/* harmony import */ var _assets_wallpaper1_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_wallpaper1_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_wallpaper2_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/wallpaper2.jpg */ "./src/assets/wallpaper2.jpg");
/* harmony import */ var _assets_wallpaper2_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_wallpaper2_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_wallpaper3_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/wallpaper3.jpg */ "./src/assets/wallpaper3.jpg");
/* harmony import */ var _assets_wallpaper3_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_wallpaper3_jpg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/juanpablogonzalez/Desktop/practice/rick-and-morty-app/src/components/Home.js";








function Home() {
  const AutoplaySlider = react_awesome_slider_dist_autoplay__WEBPACK_IMPORTED_MODULE_3___default()(react_awesome_slider__WEBPACK_IMPORTED_MODULE_1___default.a);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_rick_and_morty_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AutoplaySlider, {
    cssModule: react_awesome_slider_src_styles__WEBPACK_IMPORTED_MODULE_2__["default"],
    play: true,
    cancelOnInteraction: false,
    interval: 5000,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-src": _assets_wallpaper1_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-src": _assets_wallpaper2_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-src": _assets_wallpaper3_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })));
}

/***/ }),

/***/ "./src/components/Navigation.js":
/*!**************************************!*\
  !*** ./src/components/Navigation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_rick_and_morty_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/rick-and-morty-logo.png */ "./src/assets/rick-and-morty-logo.png");
/* harmony import */ var _assets_rick_and_morty_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_rick_and_morty_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/juanpablogonzalez/Desktop/practice/rick-and-morty-app/src/components/Navigation.js";



function Navigation(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "bp3-navbar bp3-dark navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navbar-content rick-and-morty-navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bp3-navbar-group bp3-align-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_rick_and_morty_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Rick and Morty's logo",
    height: "85%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bp3-navbar-group bp3-align-left",
    style: {
      marginLeft: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.search && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "bp3-input navbar-input",
    placeholder: "Search",
    type: "text",
    onChange: props.onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bp3-navbar-group bp3-align-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/",
    className: "navbar-link",
    activeClassName: "navbar-link-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bp3-button bp3-minimal bp3-icon-home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/characters",
    className: "navbar-link",
    activeClassName: "navbar-link-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bp3-button bp3-minimal bp3-icon-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Characters")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    to: "/advanced-search",
    className: "navbar-link",
    activeClassName: "navbar-link-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bp3-button bp3-minimal bp3-icon-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Advanced Search")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "bp3-navbar-divider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))));
}

/***/ }),

/***/ "./src/components/characters/CharacterCard.js":
/*!****************************************************!*\
  !*** ./src/components/characters/CharacterCard.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharacterCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
var _jsxFileName = "/Users/juanpablogonzalez/Desktop/practice/rick-and-morty-app/src/components/characters/CharacterCard.js";


function CharacterCard(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    className: "card-component",
    interactive: true,
    elevation: _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Elevation"].THREE,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "bp3-heading card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.imgSrc,
    alt: props.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    intent: "success",
    onClick: () => props.onClick(props.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "More details"));
}

/***/ }),

/***/ "./src/components/characters/CharacterDetails.js":
/*!*******************************************************!*\
  !*** ./src/components/characters/CharacterDetails.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharacterDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
var _jsxFileName = "/Users/juanpablogonzalez/Desktop/practice/rick-and-morty-app/src/components/characters/CharacterDetails.js";


function CharacterDetails(props) {
  const character = props.character;
  const location = character.location;
  const origin = character.origin;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    icon: "info-sign",
    onClose: props.handleDetailsToggle,
    title: character.name,
    autoFocus: true,
    canEscapeKeyClose: true,
    canOusideClickClose: true,
    enforceFocus: true,
    hasBackdrop: true,
    isOpen: props.detailsToggle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "character-details-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: character.image,
    alt: character.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "bp3-html-table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Basic Information")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Status"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, character.status)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Gender"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, character.gender)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Species"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, character.species)), character.type !== "" && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, character.type)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Location"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, location.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Origin"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, origin.name))))));
}

/***/ }),

/***/ "./src/components/characters/CharactersContainer.js":
/*!**********************************************************!*\
  !*** ./src/components/characters/CharactersContainer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CharactersContainer; });
/* harmony import */ var _Users_juanpablogonzalez_Desktop_practice_rick_and_morty_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _CharacterCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CharacterCard */ "./src/components/characters/CharacterCard.js");
/* harmony import */ var react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-infinite-scroll-component */ "./node_modules/react-infinite-scroll-component/dist/index.es.js");
/* harmony import */ var _CharacterDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CharacterDetails */ "./src/components/characters/CharacterDetails.js");
/* harmony import */ var _redux_actions_CharacterActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/CharacterActions */ "./src/redux/actions/CharacterActions.js");
/* harmony import */ var _js_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../js/api */ "./src/js/api.js");

var _jsxFileName = "/Users/juanpablogonzalez/Desktop/practice/rick-and-morty-app/src/components/characters/CharactersContainer.js";







function CharactersContainer(props) {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        _useState2 = Object(_Users_juanpablogonzalez_Desktop_practice_rick_and_morty_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        characters = _useState2[0],
        setCharacters = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
        _useState4 = Object(_Users_juanpablogonzalez_Desktop_practice_rick_and_morty_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
        nextPage = _useState4[0],
        setNextPage = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
        _useState6 = Object(_Users_juanpablogonzalez_Desktop_practice_rick_and_morty_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
        hasMore = _useState6[0],
        setHasMore = _useState6[1];

  const _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        _useState8 = Object(_Users_juanpablogonzalez_Desktop_practice_rick_and_morty_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
        detailsToggle = _useState8[0],
        setDetailsToggle = _useState8[1];

  const selectedCharacter = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.selectedCharacter);
  const savedCharacters = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.savedCharacters);
  const dispatcher = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const api = "https://rickandmortyapi.com/api/character/";
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const initialRequest = async () => {
      const reqData = await Object(_js_api__WEBPACK_IMPORTED_MODULE_7__["request"])(api + props.query);
      setCharacters(reqData.response.results);
      setNextPage(reqData.response.info.next);
    };

    initialRequest();
  }, []);

  const getCharacters = async () => {
    const reqData = await Object(_js_api__WEBPACK_IMPORTED_MODULE_7__["request"])(nextPage);

    if (reqData.response.results !== undefined) {
      setCharacters([...characters, ...reqData.response.results]);
      setNextPage(reqData.response.info.next);
    } else {
      setHasMore(false);
    }
  };

  const handleDetailsToggle = id => {
    detailsToggle ? dispatcher({
      type: _redux_actions_CharacterActions__WEBPACK_IMPORTED_MODULE_6__["UNSELECT_CHARACTER"]
    }) : savedCharacters.find(c => c.id === id) === undefined ? dispatcher({
      type: _redux_actions_CharacterActions__WEBPACK_IMPORTED_MODULE_6__["SELECT_NEW_CHARACTER"],
      payload: {
        character: characters.find(c => c.id === id)
      }
    }) : dispatcher({
      type: _redux_actions_CharacterActions__WEBPACK_IMPORTED_MODULE_6__["SELECT_SAVED_CHARACTER"],
      payload: {
        id: id
      }
    });
    setDetailsToggle(!detailsToggle);
  };

  const charactersCards = characters.map(c => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CharacterCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      imgSrc: c.image,
      id: c.id,
      name: c.name,
      onClick: id => handleDetailsToggle(id),
      key: c.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, detailsToggle && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CharacterDetails__WEBPACK_IMPORTED_MODULE_5__["default"], {
    handleDetailsToggle: handleDetailsToggle,
    detailsToggle: detailsToggle,
    character: selectedCharacter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_infinite_scroll_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    dataLength: characters.length,
    next: getCharacters,
    hasMore: hasMore,
    loader: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "Loading..."),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, charactersCards)));
}

/***/ }),

/***/ "./src/components/search/AdvancedSearch.js":
/*!*************************************************!*\
  !*** ./src/components/search/AdvancedSearch.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AdvancedSearch; });
/* harmony import */ var _Users_juanpablogonzalez_Desktop_practice_rick_and_morty_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_juanpablogonzalez_Desktop_practice_rick_and_morty_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blueprintjs/core */ "./node_modules/@blueprintjs/core/lib/esm/index.js");
/* harmony import */ var _characters_CharactersContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../characters/CharactersContainer */ "./src/components/characters/CharactersContainer.js");


var _jsxFileName = "/Users/juanpablogonzalez/Desktop/practice/rick-and-morty-app/src/components/search/AdvancedSearch.js";



function AdvancedSearch() {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: "",
    type: "",
    gender: "",
    status: "",
    species: ""
  }),
        _useState2 = Object(_Users_juanpablogonzalez_Desktop_practice_rick_and_morty_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        queryObject = _useState2[0],
        setQueryObject = _useState2[1];

  const _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
        _useState4 = Object(_Users_juanpablogonzalez_Desktop_practice_rick_and_morty_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
        queryString = _useState4[0],
        setQueryString = _useState4[1];

  const _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        _useState6 = Object(_Users_juanpablogonzalez_Desktop_practice_rick_and_morty_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
        searchToggle = _useState6[0],
        setSearchToggle = _useState6[1];

  const handleSubmit = e => {
    setSearchToggle(false);
    e.preventDefault();
    setSearchToggle(true);
    Object.keys(queryObject).forEach(key => queryObject[key] === "" && delete queryObject[key]);
    const str = "?" + new URLSearchParams(queryObject);
    setQueryString(str);
  };

  const handleChange = event => {
    setQueryObject(Object(_Users_juanpablogonzalez_Desktop_practice_rick_and_morty_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, queryObject, {
      [event.target.id]: event.target.value
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "search-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Advanced Search"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "search-filters",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
    className: "search-filters-table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", {
    align: "center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Species"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Type")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    id: "name",
    value: queryObject.name,
    onChange: handleChange,
    className: "bp3-input bp3-round",
    type: "text",
    placeholder: "Text input",
    dir: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    id: "species",
    value: queryObject.species,
    onChange: handleChange,
    className: "bp3-input bp3-round",
    type: "text",
    placeholder: "Text input",
    dir: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    id: "type",
    value: queryObject.type,
    onChange: handleChange,
    className: "bp3-input bp3-round",
    type: "text",
    placeholder: "Text input",
    dir: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Status"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Gender")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "bp3-select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    id: "status",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Choose status..."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "Alive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Alive"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "Dead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Dead"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "unknown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "unknown")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "bp3-select",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    id: "gender",
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Choose gender..."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "Female",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Female"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "Male",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Male"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "Genderless",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Genderless"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
    value: "unknown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "unknown"))))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    intent: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Search")))), searchToggle && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_characters_CharactersContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    query: queryString,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/juanpablogonzalez/Desktop/practice/rick-and-morty-app/src/index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["HashRouter"], {
  basename: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/*! exports provided: request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const request = async requestStr => {
  const res = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(requestStr);
  return {
    response: res.data
  };
};

/***/ }),

/***/ "./src/redux/actions/CharacterActions.js":
/*!***********************************************!*\
  !*** ./src/redux/actions/CharacterActions.js ***!
  \***********************************************/
/*! exports provided: SELECT_SAVED_CHARACTER, SELECT_NEW_CHARACTER, UNSELECT_CHARACTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_SAVED_CHARACTER", function() { return SELECT_SAVED_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_NEW_CHARACTER", function() { return SELECT_NEW_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSELECT_CHARACTER", function() { return UNSELECT_CHARACTER; });
const SELECT_SAVED_CHARACTER = "SELECT_SAVED_CHARACTER";
const SELECT_NEW_CHARACTER = "SELECT_NEW_CHARACTER";
const UNSELECT_CHARACTER = "UNSELECT_CHARACTER";

/***/ }),

/***/ "./src/redux/reducers/CharactersReducer.js":
/*!*************************************************!*\
  !*** ./src/redux/reducers/CharactersReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_juanpablogonzalez_Desktop_practice_rick_and_morty_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _actions_CharacterActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/CharacterActions */ "./src/redux/actions/CharacterActions.js");


const initialState = {
  selectedCharacter: {},
  savedCharacters: []
};

const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case _actions_CharacterActions__WEBPACK_IMPORTED_MODULE_1__["SELECT_NEW_CHARACTER"]:
      return {
        selectedCharacter: action.payload.character,
        savedCharacters: [...state.savedCharacters, action.payload.character]
      };

    case _actions_CharacterActions__WEBPACK_IMPORTED_MODULE_1__["SELECT_SAVED_CHARACTER"]:
      return Object(_Users_juanpablogonzalez_Desktop_practice_rick_and_morty_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        selectedCharacter: state.savedCharacters.find(character => character.id === action.payload.id)
      });

    case _actions_CharacterActions__WEBPACK_IMPORTED_MODULE_1__["UNSELECT_CHARACTER"]:
      return Object(_Users_juanpablogonzalez_Desktop_practice_rick_and_morty_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        selectedCharacter: {}
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (charactersReducer);

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers_CharactersReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/CharactersReducer */ "./src/redux/reducers/CharactersReducer.js");


const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_CharactersReducer__WEBPACK_IMPORTED_MODULE_1__["default"], window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/juanpablogonzalez/Desktop/practice/rick-and-morty-app/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/juanpablogonzalez/Desktop/practice/rick-and-morty-app/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/juanpablogonzalez/Desktop/practice/rick-and-morty-app/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map