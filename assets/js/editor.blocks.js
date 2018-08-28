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

eval("/**\n * Internal block libraries\n */\nvar __ = wp.i18n.__;\nvar Fragment = wp.element.Fragment;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$editor = wp.editor,\n    MediaPlaceholder = _wp$editor.MediaPlaceholder,\n    BlockControls = _wp$editor.BlockControls,\n    RichText = _wp$editor.RichText;\nvar _wp$components = wp.components,\n    IconButton = _wp$components.IconButton,\n    Toolbar = _wp$components.Toolbar,\n    TextControl = _wp$components.TextControl;\n/**\n * Register Block\n */\n\nregisterBlockType('horttcore/card', {\n  title: 'Card',\n  icon: 'slides',\n  category: 'common',\n  keywords: [__('Card', 'wp-card-block')],\n  attributes: {\n    imgSrc: {\n      type: 'string',\n      source: 'attribute',\n      attribute: 'src',\n      selector: 'img'\n    },\n    imgId: {\n      type: 'number'\n    },\n    imgAlt: {\n      type: 'string',\n      source: 'attribute',\n      attribute: 'alt',\n      selector: 'img'\n    },\n    headline: {\n      type: 'string',\n      source: 'text',\n      selector: '.card__title'\n    },\n    body: {\n      type: 'array',\n      source: 'children',\n      selector: '.card__body'\n    }\n  },\n  edit: function edit(props) {\n    var _props$attributes = props.attributes,\n        headline = _props$attributes.headline,\n        imgSrc = _props$attributes.imgSrc,\n        imgId = _props$attributes.imgId,\n        imgAlt = _props$attributes.imgAlt,\n        body = _props$attributes.body,\n        className = props.className,\n        setAttributes = props.setAttributes,\n        isSelected = props.isSelected;\n\n    var onSelectImg = function onSelectImg(img) {\n      if (!img || !img.url) {\n        setAttributes({\n          imgSrc: null,\n          imgId: null,\n          imgAlt: null\n        });\n        return;\n      }\n\n      setAttributes({\n        imgSrc: img.url,\n        imgId: img.id,\n        imgAlt: img.alt\n      });\n    };\n\n    var classes = 'component-card ' + className;\n    return createElement(\"section\", {\n      className: classes\n    }, createElement(\"figure\", {\n      className: \"card__image\"\n    }, !imgId ? createElement(MediaPlaceholder, {\n      icon: \"format-image\",\n      labels: {\n        title: __('Image', 'wp-card-block'),\n        headline: __('Image', 'wp-card-block')\n      },\n      onSelect: onSelectImg,\n      accept: \"image/*\",\n      type: \"image\"\n    }) : createElement(Fragment, null, createElement(\"img\", {\n      src: imgSrc,\n      alt: imgAlt\n    }), isSelected ? createElement(IconButton, {\n      className: \"remove-image\",\n      label: __('Remove image', 'wp-card-block'),\n      onClick: function onClick() {\n        return setAttributes({\n          imgSrc: null,\n          imgId: null,\n          imgAlt: null\n        });\n      },\n      icon: \"no-alt\"\n    }) : '')), createElement(\"header\", {\n      className: \"card__header\"\n    }, createElement(\"h1\", {\n      className: \"card__title\"\n    }, createElement(RichText, {\n      value: headline,\n      placeholder: __('Lorem ipsum…', 'wp-card-block'),\n      keepPlaceholderOnFocus: true,\n      onChange: function onChange(headline) {\n        return setAttributes({\n          headline: headline\n        });\n      }\n    }))), createElement(\"div\", {\n      className: \"card__body\"\n    }, createElement(RichText, {\n      tagName: \"div\",\n      value: body,\n      multiline: \"p\",\n      placeholder: __('…dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.', 'wp-card-block'),\n      keepPlaceholderOnFocus: true,\n      onChange: function onChange(body) {\n        return setAttributes({\n          body: body\n        });\n      }\n    })));\n  },\n  save: function save(props) {\n    var _props$attributes2 = props.attributes,\n        className = _props$attributes2.className,\n        imgSrc = _props$attributes2.imgSrc,\n        imgAlt = _props$attributes2.imgAlt,\n        body = _props$attributes2.body,\n        headline = _props$attributes2.headline;\n    return createElement(\"section\", {\n      className: className\n    }, createElement(\"figure\", {\n      className: \"card__image\"\n    }, createElement(\"img\", {\n      src: imgSrc,\n      alt: imgAlt\n    })), createElement(\"header\", {\n      class: \"card__header\"\n    }, createElement(\"h1\", {\n      class: \"card__title\"\n    }, headline)), createElement(\"div\", {\n      class: \"card__body\"\n    }, body));\n  }\n});\n\n//# sourceURL=webpack:///./blocks/card/index.js?");

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