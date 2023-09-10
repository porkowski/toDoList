/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 426:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(613), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(105), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(746), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(680), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `

@font-face {
    font-family: 'Script';
    src:url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-weight: 600;
    font-style:normal;
}

@font-face {
    font-family: 'base';
    src:url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    font-weight: 600;
    font-style:normal;
}

body{
    height:95vh;
    margin:0;
}

#MainGrid {
    display:grid;
    grid-template-rows:1fr 8fr;
    grid-template-columns:3fr 7fr;
    gap:.5rem;
    max-height:auto;
}

.griditem1, .griditem2 {
    border:solid 1px rgba(77, 160, 255, 0.281);
    border-radius:5px;
    padding:.5rem;
}

.banner {
    grid-column:1/3;
    font-family: 'Script';
    text-align: center;
    font-size:3rem;
    padding: 10px;
}

ul {
    list-style-type: none;
    margin:0;
    padding: 1rem 0 0 0;
    font-family: 'base';
    text-align: center;
}

.griditem1,.griditem2 {
    display:flex;
    flex-direction: column;
    justify-content: space-between;
}
.project {
    padding:.5rem;
    background-color: aliceblue;
    border-radius:.5rem;
    margin-bottom:.5rem;
}

#expanded {
    background-color: aliceblue;
    border:solid 2px rgba(77, 160, 255, 0.548);
    padding:1rem;
}

.project:hover,
.todoitem:hover {
    cursor:pointer;
}

#addbtn,
#todobtn,#submitButton {
    display:flex;
    justify-content:space-evenly;
    background-color: aliceblue;
    border:solid rgba(77, 160, 255, 0.548) 2px;
    border-radius:.5rem;
    font-family: 'Script';
    padding:.5rem;
}

#addbtn:hover,
#todobtn:hover,
#submitButton:hover {
    cursor:pointer;
    box-shadow: -3px 3px rgba(77, 160, 255, 0.548);
}


#addbtn:active,
#todobtn:active,
#submitButton:active {
    cursor:pointer;
    translate: -3px 3px;
    box-shadow:none;
}

.formHidden {
display:none !important;
}
    
.formDisplay {
display:block;
}
    
#projectForm>form {
    display:flex;
    flex-direction:column;
    align-items: center;
    font-family:'base';
}

.form-row1,.form-row2 {
    font-family:'base';
    display:flex;
    flex-direction:column;
    align-items: center;
    margin-bottom:5px;
    gap:5px;
}

.form-row1>input[type=text] {
    outline:none;
    border:solid 1px rgba(77, 160, 255, 0.548);
    width:min(300px,90%);
    border-radius:4px;

} 

textarea {
    outline:none;
    border:solid 1px rgba(77, 160, 255, 0.548);
    width:min(300px,90%);
    border-radius:4px; 
}

#submitButton {
    padding-left:20px;
    padding-right:20px;
}

input[type=text]:hover,
textarea:hover {
    background-color:rgba(240, 248, 255, 0.534);
}

input[type=text]:active,
textarea:active {
    background-color:rgba(240, 248, 255, 0.534);
}

.removebtn,
.prioritychanger{
outline:none;
border:none;
background-color: aliceblue;
cursor:pointer;
}

.removebtn:before {
    content:url(${___CSS_LOADER_URL_REPLACEMENT_2___})
}

.prioritychanger:before {
    content:url(${___CSS_LOADER_URL_REPLACEMENT_3___});
}

.removebtn:hover,
.prioritychanger:hover {
    transform:scale(.95);
    opacity: .75;
}

.removebtn:active,
.prioritychanger:active {
    transform:scale(.85);
    opacity: .75;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 667:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 81:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 105:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1036357b9651eff7d3dd.ttf";

/***/ }),

/***/ 613:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68015177cbf9575be4a4.ttf";

/***/ }),

/***/ 680:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26282881583dcc1c3371.svg";

/***/ }),

/***/ 746:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc206c2b3a24c4ad59ac.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m0: () => (/* binding */ addItemToDom),
  Ex: () => (/* binding */ addProjectToDom),
  Xj: () => (/* binding */ generatetodos)
});

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css
var style = __webpack_require__(426);
;// CONCATENATED MODULE: ./src/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ const src_style = (style/* default */.Z && style/* default */.Z.locals ? style/* default */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Logic.js





class Project {
    static myLibrary = [];
    
    //Add addProj to this class as a method

    constructor(projectTitle) {

        this.projectTitle = projectTitle;
    
        this.toDoList = [];

        this.toDoItem = function(title,dueDate,description,priority) {
            const item = {
                title,
                dueDate,
                description,
                priority
            }
            
            let add2dom = addItem.bind(this);
            add2dom(item);
        
        }


        //Push project to project library upon creation
        let addProj = addProject.bind(this);
        addProj();


    };
}


function addProject() {
        Project.myLibrary.push(this);
        //Get index of project in the library
        const index = Project.myLibrary.length -1;
        let addToDom = addProjectToDom.bind(this);
        addToDom(index);

        //Update local storage after adding project
        updateLocalStorage();


}

function addItem(item) {
        this.toDoList.push(item);
        let addToDom = addItemToDom.bind(this);
        addToDom(item);

        // Add object to local storage once Items are added
        updateLocalStorage();

}



function removeToDo(projectId,i) {
    //splice the specific to do out of the library. 
    Project.myLibrary[projectId].toDoList.splice(i,1);
    updateLocalStorage();

}

function changePriority(projectId,i) {
    let currentPriority = Project.myLibrary[projectId].toDoList[i].priority;
    //Toggle priority switch
        if (currentPriority == 'Low') {currentPriority = 'Medium';
        Project.myLibrary[projectId].toDoList[i].priority = currentPriority;
        updateLocalStorage();} 
        else if (currentPriority == 'Medium') {currentPriority = 'High';
        Project.myLibrary[projectId].toDoList[i].priority = currentPriority;
        updateLocalStorage();}
        else if (currentPriority == 'High') {currentPriority = 'Low';
        Project.myLibrary[projectId].toDoList[i].priority = currentPriority;
        updateLocalStorage();}
        
}




//Create first instance of Project for demo, along with to do items
function initialProject(){ 
    document.addEventListener('DOMContentLoaded',(event)=> { 
        const proj1 = new Project('Clean The Porsche 911');
        proj1.toDoItem('Detail the exterior','2023-09-10', 'Use claybar on the exterior','Medium');
        proj1.toDoItem('Clean the interior','2023-09-15', 'Stick a tree freshener in there and call it a day','Low');
    });
};

function updateLocalStorage() {

    let myLibrary_serialized = JSON.stringify(Project.myLibrary);
    localStorage.setItem("library",myLibrary_serialized);
    //let myLibrary_deserialized = JSON.parse(localStorage.getItem("library"));
};


//Check local storage at Page start
function checkLS() {   
    //grab local storage data from refresh before DOM content loads
    let myLibrary_deserialized = JSON.parse(localStorage.getItem("library"));

    if (myLibrary_deserialized == null) {
        initialProject();
        updateLocalStorage();}
    else {
        let myLibrary_redone = JSON.stringify(myLibrary_deserialized);
        localStorage.setItem("library",myLibrary_redone);
        let myLibrary_New = JSON.parse(localStorage.getItem("library")); 

        document.addEventListener('DOMContentLoaded',(event)=> { 
            //Set local storage item to what the user updated in previous session
            checkProjects(myLibrary_New);
            checkProperties(myLibrary_New);

            //Create new Project instance if something in the properties changed

            generatetodos();
        })
    }

}
checkLS();

//Function to check what projects need to be added
function checkProjects(myLibrary_New) {

    for (let i=0;i<myLibrary_New.length;i++) {
        if (myLibrary_New[i] !==undefined && Project.myLibrary[i] ==undefined) {
                const pTitle = myLibrary_New[i].projectTitle;
                new Project(pTitle);
            }  
    }
}

//Function to check if properties in local storage have changed
function checkProperties(myLibrary_New) {

    //Loop through each project instance
     for (let y=0;y<myLibrary_New.length;y++) {
        //Check properties WITHIN a project
        let librarytodolist = myLibrary_New[y].toDoList;
        let initialtodo= Project.myLibrary[y].toDoList;

        for (let i=0;i<librarytodolist.length;i++) {
            //Check which to do items were added 
            console.log(librarytodolist[i]);
            if (librarytodolist[i] !== undefined && initialtodo[i] == undefined) {
                let currentProject = Project.myLibrary[y];
                const newvalues = Object.values(librarytodolist[i]).toString().split(',');
                let title = newvalues[0];
                let duedate = newvalues[1];
                let description = newvalues[2];
                let priority = newvalues[3];

                //Create new to do item instance
                currentProject.toDoItem(title,duedate,description,priority);

            }
        }
    }


}




;// CONCATENATED MODULE: ./src/index.js






function grid() {
    const element = document.createElement('div');
    element.setAttribute('id','MainGrid');

    const banner = document.createElement('div');
    banner.setAttribute('class','banner');
    banner.textContent = 'To Do List';
    element.appendChild(banner);

    const leftRow = document.createElement('div');
    leftRow.setAttribute('class','griditem1');
    element.appendChild(leftRow);

    const main = document.createElement('div');
    main.setAttribute('class','griditem2');
    element.appendChild(main);

    return element
}

function projectList() {
    const element = document.createElement('ul');
    element.setAttribute('class','projects');

    return element
}

function addNewProjBtn() {
    const element = document.createElement('button');
    element.textContent= 'Add Project';
    element.setAttribute('id','addbtn');

    return element
}

function addNewToDoBtn() {
    const element = document.createElement('button');
    element.textContent= 'Add New To Do';
    element.setAttribute('id','todobtn');

    return element
}

function toDoList() {
    const element = document.createElement('ul');
    element.setAttribute('class','todos');

    return element
}

const body = document.body;
body.appendChild(grid());
const banner = document.querySelector('.griditem1');
banner.appendChild(projectList());
const ul = document.querySelector('.projects');
const rightSide = document.querySelector('.griditem2');
rightSide.appendChild(toDoList());
const leftSide = document.querySelector('.griditem1');
const submitBtn = document.querySelector('#submitButton');
const pform = document.querySelector('#projectForm');
const tform = document.querySelector('#toDoForm');
const radios = document.getElementsByName("priority");



//Remove project form from body, append to left column
body.removeChild(pform);
leftSide.appendChild(pform);

//Remove todo form from body, append to right column
body.removeChild(tform);
rightSide.appendChild(tform);

rightSide.appendChild(addNewToDoBtn());


leftSide.appendChild(addNewProjBtn());
const ul2 = document.querySelector('.todos');

//Initialize project id variable. used to determine which project the to do items are based off.
let projectId = '0';




function addProjectToDom(index) {
        const project = document.createElement('li');
        project.setAttribute('id',`${index}`);
        project.setAttribute('class',`project`);
        project.textContent = this.projectTitle;
        ul.appendChild(project);
    }


function addItemToDom(item) {
    const todoitem = document.createElement('li');
    todoitem.setAttribute('class',`todoitem`)
    if (`${item.dueDate}` == 'undefined') {
        todoitem.textContent = `${item.title}`;   
    } else {
        todoitem.textContent = `${item.title} due by ${item.dueDate}`;
    };
    ul2.appendChild(todoitem);
}


function clearToDos() {
    const list = document.querySelectorAll('.todoitem');
    list.forEach((listitem)=> {
        listitem.remove();
    })
}

(function expandProject() {
    document.addEventListener("click", (event) => {
        const target = event.target;
        if (target.getAttribute("class") == 'project') {
            projectId = target.id;
            generatetodos();
        }
    })
})();

function generatetodos() {
    const projList = Project.myLibrary[projectId].toDoList;

    //Clear rightside of current to do items in preparation for this projects.
    clearToDos();
    
    //Add current projects todos to right side of screen
    projList.forEach((object)=> {
        addItemToDom(object);
    })
}

(function toDoListener() {
    document.addEventListener("click", (event) => {
        const target =event.target;
        const li = document.querySelectorAll('.todoitem');

        if (target.getAttribute("class") == 'todoitem') {
            const project = Project.myLibrary[projectId].toDoList[findIndex(li,target)];
            if (target.getAttribute('id') !== 'expanded') {
                expandToDo(target,project);
            } else if (target.getAttribute('id') == 'expanded') {
                minimizeToDo(target,project);
                target.setAttribute('id','')

            }
        }
    })
})();

function findIndex(li,target) {
    for (let i=0; i<li.length;i++) {
        if (li[i] == target) {
            return i
        }
    }
}

function expandToDo(target,project) {

    for (const key in project) {
        const projectKey = document.createElement("li");
        projectKey.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${project[key]}`;
        target.appendChild(projectKey);
        target.setAttribute('id','expanded');
    }

        //Create 'completed'/remove button and priority changer
        const remove = document.createElement('button');
        remove.setAttribute('class','removebtn');
        target.appendChild(remove);
        const prioritys = document.createElement('button');
        prioritys.setAttribute('class','prioritychanger');
        target.appendChild(prioritys);
    
}

function minimizeToDo(target,project) {
    //Get length of object to determine how many children to remove from DOM
    const objectlength = Object.keys(project).length;
    //Remove child nodes for many ever properties the object has. Continue iterating until objectlength+2 to compensate for the added buttons
    for (let i=1;i<=objectlength+2;i++) {
       target.childNodes[1].remove()
    }
}

(function addButtonListener() {
    document.addEventListener(("click"), (event)=> {
        if (event.target.id == 'addbtn') {
            pform.setAttribute('class','formDisplay');
    
    }}
    )
})();

(function addToDoListener() {
    document.addEventListener(("click"), (event)=> {
        if (event.target.id == 'todobtn') {
            tform.setAttribute('class','formDisplay');    
        }})
})();

//Function to add new project upon submit
function handleForm(event) {
    //prevent default to stop page from refreshing upon submit
    event.preventDefault();
    new Project(project_title.value);
    pform.setAttribute('class','formHidden');
    project_title.value='';

};

function handleTForm(event) {
    let radioChoice ='';

    event.preventDefault();
    //Grab key values from DOM search box.
         const ttitle = title.value;
         const tdueDate = dueDate.value;
         const tdescription = description.value;
         radios.forEach(radio => {
            if (radio.checked) {radioChoice = radio.value};
        })
    

    const currentProject = Project.myLibrary[projectId];
    //From ES6 module on Logic.js, add to do item to array and DOM
    currentProject.toDoItem(ttitle,tdueDate,tdescription,radioChoice);

    //hide todoform upon submission and clear values
    tform.setAttribute('class','formHidden');
    title.value= '';
    dueDate.value= '';
    description.value= '';
    radios.forEach(radio => {
        if (radio.value == 'Medium') {radio.checked=true};
    })
}


pform.addEventListener("submit",handleForm);
tform.addEventListener("submit",handleTForm);

(function BtnListener() {
    document.addEventListener('mouseup',(event) => {
        if (event.target.getAttribute('class') == 'removebtn') {
            const li = document.querySelectorAll('.todoitem');
            const target = event.target.parentElement;
            const i = findIndex(li,target);
            removeToDo(projectId,i);

            //Refresh right side of page with current todo's.
            generatetodos();

        } else if (event.target.getAttribute('class') == 'prioritychanger') {
            const li = document.querySelectorAll('.todoitem');
            const target = event.target.parentElement;
            const i = findIndex(li,target);
            changePriority(projectId,i);

            //Refresh right side of page with current todo's.
            generatetodos();

        }
    })
})();





})();

/******/ })()
;