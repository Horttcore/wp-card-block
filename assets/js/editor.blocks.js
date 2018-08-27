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

/***/ "./blocks/card/editor.scss":
/*!*********************************!*\
  !*** ./blocks/card/editor.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"css/editor.blocks.css\";\n\n//# sourceURL=webpack:///./blocks/card/editor.scss?");

/***/ }),

/***/ "./blocks/card/frontend.scss":
/*!***********************************!*\
  !*** ./blocks/card/frontend.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"css/frontend.blocks.css\";\n\n//# sourceURL=webpack:///./blocks/card/frontend.scss?");

/***/ }),

/***/ "./blocks/card/index.js":
/*!******************************!*\
  !*** ./blocks/card/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Internal block libraries\n */\nvar __ = wp.i18n.__;\nvar Fragment = wp.element.Fragment;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    MediaPlaceholder = _wp$editor.MediaPlaceholder,\n    BlockControls = _wp$editor.BlockControls,\n    RichText = _wp$editor.RichText;\nvar _wp$components = wp.components,\n    IconButton = _wp$components.IconButton,\n    Toolbar = _wp$components.Toolbar,\n    TextControl = _wp$components.TextControl;\n\n/**\n * Register Block\n */\n\nregisterBlockType('horttcore/card', {\n\ttitle: 'Card',\n\ticon: 'slides',\n\tcategory: 'common',\n\tkeywords: [__('Card', 'wp-card-block')],\n\tattributes: {\n\t\timgSrc: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'attribute',\n\t\t\tattribute: 'src',\n\t\t\tselector: 'img'\n\t\t},\n\t\timgId: {\n\t\t\ttype: 'number'\n\t\t},\n\t\timgAlt: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'attribute',\n\t\t\tattribute: 'alt',\n\t\t\tselector: 'img'\n\t\t},\n\t\theadline: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'text',\n\t\t\tselector: '.card__title'\n\t\t},\n\t\tbody: {\n\t\t\ttype: 'array',\n\t\t\tsource: 'children',\n\t\t\tselector: '.card__body'\n\t\t}\n\t},\n\tedit: function edit(props) {\n\t\tvar _props$attributes = props.attributes,\n\t\t    headline = _props$attributes.headline,\n\t\t    imgSrc = _props$attributes.imgSrc,\n\t\t    imgId = _props$attributes.imgId,\n\t\t    imgAlt = _props$attributes.imgAlt,\n\t\t    body = _props$attributes.body,\n\t\t    className = props.className,\n\t\t    setAttributes = props.setAttributes,\n\t\t    isSelected = props.isSelected;\n\n\t\tvar onSelectImg = function onSelectImg(img) {\n\t\t\tif (!img || !img.url) {\n\t\t\t\tsetAttributes({ imgSrc: null, imgId: null, imgAlt: null });\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tsetAttributes({ imgSrc: img.url, imgId: img.id, imgAlt: img.alt });\n\t\t};\n\t\tvar classes = 'component-card ' + className;\n\t\treturn wp.element.createElement(\n\t\t\t'section',\n\t\t\t{ className: classes },\n\t\t\twp.element.createElement(\n\t\t\t\t'figure',\n\t\t\t\t{ className: 'card__image' },\n\t\t\t\t!imgId ? wp.element.createElement(MediaPlaceholder, {\n\t\t\t\t\ticon: 'format-image',\n\t\t\t\t\tlabels: {\n\t\t\t\t\t\ttitle: __('Image', 'wp-card-block'),\n\t\t\t\t\t\theadline: __('Image', 'wp-card-block')\n\t\t\t\t\t},\n\t\t\t\t\tonSelect: onSelectImg,\n\t\t\t\t\taccept: 'image/*',\n\t\t\t\t\ttype: 'image'\n\t\t\t\t}) : wp.element.createElement(\n\t\t\t\t\tFragment,\n\t\t\t\t\tnull,\n\t\t\t\t\twp.element.createElement('img', { src: imgSrc, alt: imgAlt }),\n\t\t\t\t\tisSelected ? wp.element.createElement(IconButton, {\n\t\t\t\t\t\tclassName: 'remove-image',\n\t\t\t\t\t\tlabel: __('Remove image', 'wp-card-block'),\n\t\t\t\t\t\tonClick: function onClick() {\n\t\t\t\t\t\t\treturn setAttributes({\n\t\t\t\t\t\t\t\timgSrc: null,\n\t\t\t\t\t\t\t\timgId: null,\n\t\t\t\t\t\t\t\timgAlt: null\n\t\t\t\t\t\t\t});\n\t\t\t\t\t\t},\n\t\t\t\t\t\ticon: 'no-alt'\n\t\t\t\t\t}) : ''\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'header',\n\t\t\t\t{ className: 'card__header' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h1',\n\t\t\t\t\t{ className: 'card__title' },\n\t\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\t\tvalue: headline,\n\t\t\t\t\t\tplaceholder: __('Lorem ipsum…', 'wp-card-block'),\n\t\t\t\t\t\tkeepPlaceholderOnFocus: true,\n\t\t\t\t\t\tonChange: function onChange(headline) {\n\t\t\t\t\t\t\treturn setAttributes({ headline: headline });\n\t\t\t\t\t\t}\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'card__body' },\n\t\t\t\twp.element.createElement(RichText, {\n\t\t\t\t\ttagName: 'div',\n\t\t\t\t\tvalue: body,\n\t\t\t\t\tmultiline: 'p',\n\t\t\t\t\tplaceholder: __('…dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.', 'wp-card-block'),\n\t\t\t\t\tkeepPlaceholderOnFocus: true,\n\t\t\t\t\tonChange: function onChange(body) {\n\t\t\t\t\t\treturn setAttributes({ body: body });\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t},\n\tsave: function save(props) {\n\t\tvar _props$attributes2 = props.attributes,\n\t\t    className = _props$attributes2.className,\n\t\t    imgSrc = _props$attributes2.imgSrc,\n\t\t    imgAlt = _props$attributes2.imgAlt,\n\t\t    body = _props$attributes2.body,\n\t\t    headline = _props$attributes2.headline;\n\n\t\treturn wp.element.createElement(\n\t\t\t'section',\n\t\t\t{ className: className },\n\t\t\twp.element.createElement(\n\t\t\t\t'figure',\n\t\t\t\t{ className: 'card__image' },\n\t\t\t\twp.element.createElement('img', { src: imgSrc, alt: imgAlt })\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'header',\n\t\t\t\t{ 'class': 'card__header' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'h1',\n\t\t\t\t\t{ 'class': 'card__title' },\n\t\t\t\t\theadline\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ 'class': 'card__body' },\n\t\t\t\tbody\n\t\t\t)\n\t\t);\n\t}\n});\n\n//# sourceURL=webpack:///./blocks/card/index.js?");

/***/ }),

/***/ 0:
/*!******************************************************************************************!*\
  !*** multi ./blocks/card/index.js ./blocks/card/editor.scss ./blocks/card/frontend.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./blocks/card/index.js */\"./blocks/card/index.js\");\n__webpack_require__(/*! ./blocks/card/editor.scss */\"./blocks/card/editor.scss\");\nmodule.exports = __webpack_require__(/*! ./blocks/card/frontend.scss */\"./blocks/card/frontend.scss\");\n\n\n//# sourceURL=webpack:///multi_./blocks/card/index.js_./blocks/card/editor.scss_./blocks/card/frontend.scss?");

/***/ })

/******/ });