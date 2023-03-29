/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/about_us.js":
/*!*********************************!*\
  !*** ./src/scripts/about_us.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "about_us_elememts": () => (/* binding */ about_us_elememts)
/* harmony export */ });
function about_us_elememts(about_us_tab_contents,map_link) {
  about_us_tab_contents.textContent =''
  let structure = document.createElement("div");
  structure.classList.add("flexbox_about_us");
  structure.style.display = "flexbox";
  structure.style.flexFlow = "column wrap";

  let info = document.createElement("div");
  info.classList.add("info");
  info.textContent = `Contact us at`;
  
  let number = document.createElement("div");
  number.classList.add('number')
  number.textContent = '1234567893'+'\r\n~'

  let address = document.createElement("div");
  address.classList.add('address')
  address.textContent = 'Pushkarani, Krishnapura, Karnataka 583239';
  info.appendChild(number)
  info.appendChild(address)


  let map_container = document.createElement("div");
  map_container.classList.add("map");
  // let map_link = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d240.48255591252982!2d76.459992!3d15.3373958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77f76dfa86db3%3A0xf7307c8c668626f7!2z4LKV4LOD4LK34LON4LKjIOCyuOCyguCypOCzhuCyrOCzgOCypuCyvyDgspXgs4rgsrM!5e0!3m2!1sen!2sin!4v1680008688310!5m2!1sen!2sin"
  let map = document.createElement("iframe");
  // map.defer = true;
  map.setAttribute('defer', 'defer')
  map.src = map_link;
  map.width = 350;
  map.height = 400;
  map.allowFullscreen = "";
  map.loading = "lazy";
  map.style.border = 0;
  map.referrerpolicy="no-referrer-when-downgrade" ;
  

  map_container.appendChild(map);
  structure.appendChild(info);
  structure.appendChild(map_container);

  about_us_tab_contents.appendChild(structure);
  return about_us_tab_contents;
}


/***/ }),

/***/ "./src/scripts/home.js":
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "home_elememts": () => (/* binding */ home_elememts)
/* harmony export */ });
function home_elememts(home_tab_contents) {
  let msg = `The restaurant is a concept restaurant and focus ont he essence of food beyond taste. Plating all the exquisuite tastes from the coastal state of Andhra Pradesh.<br>
  Dedicated to delivering flavours of the sea for 19 years.<br>
  Food prepared by a team of connoisseurs.<br>
  Have a fine dining experience with<br>\r\n KULAM
  ~
 `;

  home_tab_contents.innerHTML = msg;

  return home_tab_contents;
}


/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu_elememts": () => (/* binding */ menu_elememts)
/* harmony export */ });
function menu_elememts(menu_tab_contents) {
  menu_tab_contents.textContent = "";

  let food_items = [
    [
      "Idli",
      100,
      "A soft rice based delicay cooked in steam popular in the souhern states of India, served with side of rich coconut chutney and a lentil based sambhar.",
    ],
    [
      "Vada",
      100,
      "A donut shaped riced based delicay, fried to crisp and served with the sides of coconut chutney and sambhar. A popular snack throughout the indian subcontinent.",
    ],
    [
      "Dosa",
      100,
      "A riced based flat and crip bread, pan fried and served with the same sides of cocnut chutney and sambhar.",
    ],
    [
      "Veg Thali",
      100,
      "A platter consisting of all the vegetarian items popular from south india. Tamrind rice, Lemon rice,Biryani, White rice, Dal, vegetable curries, raaita, papad and desert.",
    ],
    [
      "Non-veg Thali",
      100,
      "A platter consisting of all the non-vegetarian items popular in souther india, Includes Chicken Biryani, Andhra fried chicken, chicken, curry, fried fish, fish curry, white rice and desert.",
    ],
  ];


  let food_structure = document.createElement("div");
  food_structure.classList.add("flexbox");
  food_structure.style.display = "flexbox";
  food_structure.style.flexFlow = "column wrap";

  let i = -1;
  food_items.forEach((food) => {
    i++;
    let flex_item = document.createElement("div");
    flex_item.classList.add(`flex-${i}`);

    let flex_food_name = document.createElement("div");
    flex_food_name.classList.add(`food-name`);
    flex_food_name.textContent = `${food[0]}`;

    let flex_food_description = document.createElement("div");
    flex_food_description.classList.add(`food-description`);
    flex_food_description.textContent = `${food[2]}`+ '\r\n~'

    flex_item.appendChild(flex_food_name);
    flex_item.appendChild(flex_food_description);
    food_structure.appendChild(flex_item);
  });

  menu_tab_contents.appendChild(food_structure);
  return menu_tab_contents;
}



/***/ }),

/***/ "./src/media/favicon.png":
/*!*******************************!*\
  !*** ./src/media/favicon.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ad425929d3aaf8c12005.png";

/***/ }),

/***/ "./src/media/logo-no-background-white-transparent.svg":
/*!************************************************************!*\
  !*** ./src/media/logo-no-background-white-transparent.svg ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ed2a7057262e4373cded.svg";

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/dist/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../../src/style.css */ "./src/style.css");
/* harmony import */ var _src_media_logo_no_background_white_transparent_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../../src/media/logo-no-background-white-transparent.svg */ "./src/media/logo-no-background-white-transparent.svg");
/* harmony import */ var _src_media_favicon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../src/media/favicon.png */ "./src/media/favicon.png");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/scripts/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ "./src/scripts/menu.js");
/* harmony import */ var _about_us_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about_us.js */ "./src/scripts/about_us.js");

// import { camelCase } from "lodash";








window.onload = () => {
  let map_link = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d240.48255591252982!2d76.459992!3d15.3373958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77f76dfa86db3%3A0xf7307c8c668626f7!2z4LKV4LOD4LK34LON4LKjIOCyuOCyguCypOCzhuCyrOCzgOCypuCyvyDgspXgs4rgsrM!5e0!3m2!1sen!2sin!4v1680008688310!5m2!1sen!2sin"

  let bg_colors = ['rgb(41, 2, 2)','rgb(7, 2, 34)','rgb(15, 15, 15)','rgb(43, 2, 24)','rgb(17, 33, 12)','rgb(0, 0, 0)','rgb(8, 43, 25)']
  let rand = Math.floor(Math.random() * bg_colors.length);
  document.body.style.backgroundColor = bg_colors[rand];

  let fav_icon = document.createElement('link')
  fav_icon.rel = 'shortcut icon'
  fav_icon.href = _src_media_favicon_png__WEBPACK_IMPORTED_MODULE_2__;
  document.head.appendChild(fav_icon);

  let content = document.getElementById("content");

  let logo_container = document.createElement("div");
  logo_container.classList.add("logo-container");
  logo_container.style.margin = "4rem 0rem 2rem";

  let logo = document.createElement("img");
  logo.src = _src_media_logo_no_background_white_transparent_svg__WEBPACK_IMPORTED_MODULE_1__;
  logo.id = "kulam-logo";
  logo.style.width = "18rem";
  logo.addEventListener("click", () => {
    window.open("https://goo.gl/maps/Wu7c47ZJbv5AKBEs6");
  });
  logo_container.appendChild(logo);
  content.appendChild(logo_container);

  let tabs = document.createElement("div");
  tabs.id = "tabs";

  let home_tab = document.createElement("div");
  home_tab.textContent = "Home";
  home_tab.classList.add("tab");
  home_tab.classList.add("selected-tab");

  let menu_tab = document.createElement("div");
  menu_tab.textContent = "Menu";
  menu_tab.classList.add("tab");

  let about_us_tab = document.createElement("div");
  about_us_tab.textContent = "About-us";
  about_us_tab.classList.add("tab");

  let tab_contents = document.createElement("div");
  tab_contents.classList.add("tab-content");

  home_tab.addEventListener("click", () => {
    content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_3__.home_elememts)(tab_contents));
  });

  menu_tab.addEventListener("click", () => {
    content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_4__.menu_elememts)(tab_contents));
  });

  about_us_tab.addEventListener("click", () => {
    content.appendChild((0,_about_us_js__WEBPACK_IMPORTED_MODULE_5__.about_us_elememts)(tab_contents,map_link));
  });

  let line = document.createElement('hr')
  line.classList.add('solid')

  tabs.appendChild(home_tab);
  tabs.appendChild(menu_tab);
  tabs.appendChild(about_us_tab);

  content.appendChild(tabs);
  content.appendChild(line);
  content.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_3__.home_elememts)(tab_contents));


  // Get all buttons with class="btn" inside the container
  let btns = document.getElementById("tabs").getElementsByClassName("tab");

  // Loop through the buttons and add the active class to the current/clicked button
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let current = document.getElementsByClassName("selected-tab");
      current[0].className = current[0].className.replace(" selected-tab", "");
      this.className += " selected-tab";
    });
  }
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNYTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEVBQUU7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFFBQVE7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFFBQVE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3QjtBQUN4QixZQUFZLFlBQVk7QUFDbUQ7QUFDM0I7QUFDTjtBQUNBO0FBQ1E7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLG1EQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsZ0ZBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1REFBYTtBQUNyQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLHdCQUF3Qix1REFBYTtBQUNyQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLHdCQUF3QiwrREFBaUI7QUFDekMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVEQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vc3JjL3NjcmlwdHMvYWJvdXRfdXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9zcmMvc2NyaXB0cy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vc3JjL3NjcmlwdHMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vc3JjL3NjcmlwdHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGZ1bmN0aW9uIGFib3V0X3VzX2VsZW1lbXRzKGFib3V0X3VzX3RhYl9jb250ZW50cyxtYXBfbGluaykge1xyXG4gIGFib3V0X3VzX3RhYl9jb250ZW50cy50ZXh0Q29udGVudCA9JydcclxuICBsZXQgc3RydWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzdHJ1Y3R1cmUuY2xhc3NMaXN0LmFkZChcImZsZXhib3hfYWJvdXRfdXNcIik7XHJcbiAgc3RydWN0dXJlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhib3hcIjtcclxuICBzdHJ1Y3R1cmUuc3R5bGUuZmxleEZsb3cgPSBcImNvbHVtbiB3cmFwXCI7XHJcblxyXG4gIGxldCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJpbmZvXCIpO1xyXG4gIGluZm8udGV4dENvbnRlbnQgPSBgQ29udGFjdCB1cyBhdGA7XHJcbiAgXHJcbiAgbGV0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbnVtYmVyLmNsYXNzTGlzdC5hZGQoJ251bWJlcicpXHJcbiAgbnVtYmVyLnRleHRDb250ZW50ID0gJzEyMzQ1Njc4OTMnKydcXHJcXG5+J1xyXG5cclxuICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzJylcclxuICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ1B1c2hrYXJhbmksIEtyaXNobmFwdXJhLCBLYXJuYXRha2EgNTgzMjM5JztcclxuICBpbmZvLmFwcGVuZENoaWxkKG51bWJlcilcclxuICBpbmZvLmFwcGVuZENoaWxkKGFkZHJlc3MpXHJcblxyXG5cclxuICBsZXQgbWFwX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWFwX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWFwXCIpO1xyXG4gIC8vIGxldCBtYXBfbGluayA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE0ITFtOCExbTMhMWQyNDAuNDgyNTU1OTEyNTI5ODIhMmQ3Ni40NTk5OTIhM2QxNS4zMzczOTU4ITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDNiYjc3Zjc2ZGZhODZkYjMlM0EweGY3MzA3YzhjNjY4NjI2ZjchMno0TEtWNExPRDRMSzM0TE9ONExLaklPQ3l1T0N5Z3VDeXBPQ3podUN5ck9DemdPQ3lwdUN5dnlEZ3NwWGdzNHJnc3JNITVlMCEzbTIhMXNlbiEyc2luITR2MTY4MDAwODY4ODMxMCE1bTIhMXNlbiEyc2luXCJcclxuICBsZXQgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKTtcclxuICAvLyBtYXAuZGVmZXIgPSB0cnVlO1xyXG4gIG1hcC5zZXRBdHRyaWJ1dGUoJ2RlZmVyJywgJ2RlZmVyJylcclxuICBtYXAuc3JjID0gbWFwX2xpbms7XHJcbiAgbWFwLndpZHRoID0gMzUwO1xyXG4gIG1hcC5oZWlnaHQgPSA0MDA7XHJcbiAgbWFwLmFsbG93RnVsbHNjcmVlbiA9IFwiXCI7XHJcbiAgbWFwLmxvYWRpbmcgPSBcImxhenlcIjtcclxuICBtYXAuc3R5bGUuYm9yZGVyID0gMDtcclxuICBtYXAucmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiIDtcclxuICBcclxuXHJcbiAgbWFwX2NvbnRhaW5lci5hcHBlbmRDaGlsZChtYXApO1xyXG4gIHN0cnVjdHVyZS5hcHBlbmRDaGlsZChpbmZvKTtcclxuICBzdHJ1Y3R1cmUuYXBwZW5kQ2hpbGQobWFwX2NvbnRhaW5lcik7XHJcblxyXG4gIGFib3V0X3VzX3RhYl9jb250ZW50cy5hcHBlbmRDaGlsZChzdHJ1Y3R1cmUpO1xyXG4gIHJldHVybiBhYm91dF91c190YWJfY29udGVudHM7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGhvbWVfZWxlbWVtdHMoaG9tZV90YWJfY29udGVudHMpIHtcclxuICBsZXQgbXNnID0gYFRoZSByZXN0YXVyYW50IGlzIGEgY29uY2VwdCByZXN0YXVyYW50IGFuZCBmb2N1cyBvbnQgaGUgZXNzZW5jZSBvZiBmb29kIGJleW9uZCB0YXN0ZS4gUGxhdGluZyBhbGwgdGhlIGV4cXVpc3VpdGUgdGFzdGVzIGZyb20gdGhlIGNvYXN0YWwgc3RhdGUgb2YgQW5kaHJhIFByYWRlc2guPGJyPlxyXG4gIERlZGljYXRlZCB0byBkZWxpdmVyaW5nIGZsYXZvdXJzIG9mIHRoZSBzZWEgZm9yIDE5IHllYXJzLjxicj5cclxuICBGb29kIHByZXBhcmVkIGJ5IGEgdGVhbSBvZiBjb25ub2lzc2V1cnMuPGJyPlxyXG4gIEhhdmUgYSBmaW5lIGRpbmluZyBleHBlcmllbmNlIHdpdGg8YnI+XFxyXFxuIEtVTEFNXHJcbiAgflxyXG4gYDtcclxuXHJcbiAgaG9tZV90YWJfY29udGVudHMuaW5uZXJIVE1MID0gbXNnO1xyXG5cclxuICByZXR1cm4gaG9tZV90YWJfY29udGVudHM7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIG1lbnVfZWxlbWVtdHMobWVudV90YWJfY29udGVudHMpIHtcclxuICBtZW51X3RhYl9jb250ZW50cy50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gIGxldCBmb29kX2l0ZW1zID0gW1xyXG4gICAgW1xyXG4gICAgICBcIklkbGlcIixcclxuICAgICAgMTAwLFxyXG4gICAgICBcIkEgc29mdCByaWNlIGJhc2VkIGRlbGljYXkgY29va2VkIGluIHN0ZWFtIHBvcHVsYXIgaW4gdGhlIHNvdWhlcm4gc3RhdGVzIG9mIEluZGlhLCBzZXJ2ZWQgd2l0aCBzaWRlIG9mIHJpY2ggY29jb251dCBjaHV0bmV5IGFuZCBhIGxlbnRpbCBiYXNlZCBzYW1iaGFyLlwiLFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgXCJWYWRhXCIsXHJcbiAgICAgIDEwMCxcclxuICAgICAgXCJBIGRvbnV0IHNoYXBlZCByaWNlZCBiYXNlZCBkZWxpY2F5LCBmcmllZCB0byBjcmlzcCBhbmQgc2VydmVkIHdpdGggdGhlIHNpZGVzIG9mIGNvY29udXQgY2h1dG5leSBhbmQgc2FtYmhhci4gQSBwb3B1bGFyIHNuYWNrIHRocm91Z2hvdXQgdGhlIGluZGlhbiBzdWJjb250aW5lbnQuXCIsXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBcIkRvc2FcIixcclxuICAgICAgMTAwLFxyXG4gICAgICBcIkEgcmljZWQgYmFzZWQgZmxhdCBhbmQgY3JpcCBicmVhZCwgcGFuIGZyaWVkIGFuZCBzZXJ2ZWQgd2l0aCB0aGUgc2FtZSBzaWRlcyBvZiBjb2NudXQgY2h1dG5leSBhbmQgc2FtYmhhci5cIixcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIFwiVmVnIFRoYWxpXCIsXHJcbiAgICAgIDEwMCxcclxuICAgICAgXCJBIHBsYXR0ZXIgY29uc2lzdGluZyBvZiBhbGwgdGhlIHZlZ2V0YXJpYW4gaXRlbXMgcG9wdWxhciBmcm9tIHNvdXRoIGluZGlhLiBUYW1yaW5kIHJpY2UsIExlbW9uIHJpY2UsQmlyeWFuaSwgV2hpdGUgcmljZSwgRGFsLCB2ZWdldGFibGUgY3VycmllcywgcmFhaXRhLCBwYXBhZCBhbmQgZGVzZXJ0LlwiLFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgXCJOb24tdmVnIFRoYWxpXCIsXHJcbiAgICAgIDEwMCxcclxuICAgICAgXCJBIHBsYXR0ZXIgY29uc2lzdGluZyBvZiBhbGwgdGhlIG5vbi12ZWdldGFyaWFuIGl0ZW1zIHBvcHVsYXIgaW4gc291dGhlciBpbmRpYSwgSW5jbHVkZXMgQ2hpY2tlbiBCaXJ5YW5pLCBBbmRocmEgZnJpZWQgY2hpY2tlbiwgY2hpY2tlbiwgY3VycnksIGZyaWVkIGZpc2gsIGZpc2ggY3VycnksIHdoaXRlIHJpY2UgYW5kIGRlc2VydC5cIixcclxuICAgIF0sXHJcbiAgXTtcclxuXHJcblxyXG4gIGxldCBmb29kX3N0cnVjdHVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZm9vZF9zdHJ1Y3R1cmUuY2xhc3NMaXN0LmFkZChcImZsZXhib3hcIik7XHJcbiAgZm9vZF9zdHJ1Y3R1cmUuc3R5bGUuZGlzcGxheSA9IFwiZmxleGJveFwiO1xyXG4gIGZvb2Rfc3RydWN0dXJlLnN0eWxlLmZsZXhGbG93ID0gXCJjb2x1bW4gd3JhcFwiO1xyXG5cclxuICBsZXQgaSA9IC0xO1xyXG4gIGZvb2RfaXRlbXMuZm9yRWFjaCgoZm9vZCkgPT4ge1xyXG4gICAgaSsrO1xyXG4gICAgbGV0IGZsZXhfaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmbGV4X2l0ZW0uY2xhc3NMaXN0LmFkZChgZmxleC0ke2l9YCk7XHJcblxyXG4gICAgbGV0IGZsZXhfZm9vZF9uYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZsZXhfZm9vZF9uYW1lLmNsYXNzTGlzdC5hZGQoYGZvb2QtbmFtZWApO1xyXG4gICAgZmxleF9mb29kX25hbWUudGV4dENvbnRlbnQgPSBgJHtmb29kWzBdfWA7XHJcblxyXG4gICAgbGV0IGZsZXhfZm9vZF9kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBmbGV4X2Zvb2RfZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChgZm9vZC1kZXNjcmlwdGlvbmApO1xyXG4gICAgZmxleF9mb29kX2Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7Zm9vZFsyXX1gKyAnXFxyXFxufidcclxuXHJcbiAgICBmbGV4X2l0ZW0uYXBwZW5kQ2hpbGQoZmxleF9mb29kX25hbWUpO1xyXG4gICAgZmxleF9pdGVtLmFwcGVuZENoaWxkKGZsZXhfZm9vZF9kZXNjcmlwdGlvbik7XHJcbiAgICBmb29kX3N0cnVjdHVyZS5hcHBlbmRDaGlsZChmbGV4X2l0ZW0pO1xyXG4gIH0pO1xyXG5cclxuICBtZW51X3RhYl9jb250ZW50cy5hcHBlbmRDaGlsZChmb29kX3N0cnVjdHVyZSk7XHJcbiAgcmV0dXJuIG1lbnVfdGFiX2NvbnRlbnRzO1xyXG59XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7IiwiaW1wb3J0IFwiL3NyYy9zdHlsZS5jc3NcIjtcclxuLy8gaW1wb3J0IHsgY2FtZWxDYXNlIH0gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgYmlnX2xvZ28gZnJvbSBcIi9zcmMvbWVkaWEvbG9nby1uby1iYWNrZ3JvdW5kLXdoaXRlLXRyYW5zcGFyZW50LnN2Z1wiO1xyXG5pbXBvcnQgc21hbGxfbG9nbyBmcm9tIFwiL3NyYy9tZWRpYS9mYXZpY29uLnBuZ1wiO1xyXG5pbXBvcnQgeyBob21lX2VsZW1lbXRzIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xyXG5pbXBvcnQgeyBtZW51X2VsZW1lbXRzIH0gZnJvbSBcIi4vbWVudS5qc1wiO1xyXG5pbXBvcnQgeyBhYm91dF91c19lbGVtZW10cyB9IGZyb20gXCIuL2Fib3V0X3VzLmpzXCI7XHJcblxyXG5cclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgbGV0IG1hcF9saW5rID0gXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTQhMW04ITFtMyExZDI0MC40ODI1NTU5MTI1Mjk4MiEyZDc2LjQ1OTk5MiEzZDE1LjMzNzM5NTghM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4M2JiNzdmNzZkZmE4NmRiMyUzQTB4ZjczMDdjOGM2Njg2MjZmNyEyejRMS1Y0TE9ENExLMzRMT040TEtqSU9DeXVPQ3lndUN5cE9Demh1Q3lyT0N6Z09DeXB1Q3l2eURnc3BYZ3M0cmdzck0hNWUwITNtMiExc2VuITJzaW4hNHYxNjgwMDA4Njg4MzEwITVtMiExc2VuITJzaW5cIlxyXG5cclxuICBsZXQgYmdfY29sb3JzID0gWydyZ2IoNDEsIDIsIDIpJywncmdiKDcsIDIsIDM0KScsJ3JnYigxNSwgMTUsIDE1KScsJ3JnYig0MywgMiwgMjQpJywncmdiKDE3LCAzMywgMTIpJywncmdiKDAsIDAsIDApJywncmdiKDgsIDQzLCAyNSknXVxyXG4gIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYmdfY29sb3JzLmxlbmd0aCk7XHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiZ19jb2xvcnNbcmFuZF07XHJcblxyXG4gIGxldCBmYXZfaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxyXG4gIGZhdl9pY29uLnJlbCA9ICdzaG9ydGN1dCBpY29uJ1xyXG4gIGZhdl9pY29uLmhyZWYgPSBzbWFsbF9sb2dvO1xyXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZmF2X2ljb24pO1xyXG5cclxuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuXHJcbiAgbGV0IGxvZ29fY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBsb2dvX2NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibG9nby1jb250YWluZXJcIik7XHJcbiAgbG9nb19jb250YWluZXIuc3R5bGUubWFyZ2luID0gXCI0cmVtIDByZW0gMnJlbVwiO1xyXG5cclxuICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgbG9nby5zcmMgPSBiaWdfbG9nbztcclxuICBsb2dvLmlkID0gXCJrdWxhbS1sb2dvXCI7XHJcbiAgbG9nby5zdHlsZS53aWR0aCA9IFwiMThyZW1cIjtcclxuICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vZ29vLmdsL21hcHMvV3U3YzQ3WkpidjVBS0JFczZcIik7XHJcbiAgfSk7XHJcbiAgbG9nb19jb250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChsb2dvX2NvbnRhaW5lcik7XHJcblxyXG4gIGxldCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0YWJzLmlkID0gXCJ0YWJzXCI7XHJcblxyXG4gIGxldCBob21lX3RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG9tZV90YWIudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuICBob21lX3RhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xyXG4gIGhvbWVfdGFiLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC10YWJcIik7XHJcblxyXG4gIGxldCBtZW51X3RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudV90YWIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICBtZW51X3RhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xyXG5cclxuICBsZXQgYWJvdXRfdXNfdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhYm91dF91c190YWIudGV4dENvbnRlbnQgPSBcIkFib3V0LXVzXCI7XHJcbiAgYWJvdXRfdXNfdGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XHJcblxyXG4gIGxldCB0YWJfY29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhYl9jb250ZW50cy5jbGFzc0xpc3QuYWRkKFwidGFiLWNvbnRlbnRcIik7XHJcblxyXG4gIGhvbWVfdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVfZWxlbWVtdHModGFiX2NvbnRlbnRzKSk7XHJcbiAgfSk7XHJcblxyXG4gIG1lbnVfdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVfZWxlbWVtdHModGFiX2NvbnRlbnRzKSk7XHJcbiAgfSk7XHJcblxyXG4gIGFib3V0X3VzX3RhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dF91c19lbGVtZW10cyh0YWJfY29udGVudHMsbWFwX2xpbmspKTtcclxuICB9KTtcclxuXHJcbiAgbGV0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpXHJcbiAgbGluZS5jbGFzc0xpc3QuYWRkKCdzb2xpZCcpXHJcblxyXG4gIHRhYnMuYXBwZW5kQ2hpbGQoaG9tZV90YWIpO1xyXG4gIHRhYnMuYXBwZW5kQ2hpbGQobWVudV90YWIpO1xyXG4gIHRhYnMuYXBwZW5kQ2hpbGQoYWJvdXRfdXNfdGFiKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJzKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZV9lbGVtZW10cyh0YWJfY29udGVudHMpKTtcclxuXHJcblxyXG4gIC8vIEdldCBhbGwgYnV0dG9ucyB3aXRoIGNsYXNzPVwiYnRuXCIgaW5zaWRlIHRoZSBjb250YWluZXJcclxuICBsZXQgYnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFic1wiKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFiXCIpO1xyXG5cclxuICAvLyBMb29wIHRocm91Z2ggdGhlIGJ1dHRvbnMgYW5kIGFkZCB0aGUgYWN0aXZlIGNsYXNzIHRvIHRoZSBjdXJyZW50L2NsaWNrZWQgYnV0dG9uXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBidG5zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlbGVjdGVkLXRhYlwiKTtcclxuICAgICAgY3VycmVudFswXS5jbGFzc05hbWUgPSBjdXJyZW50WzBdLmNsYXNzTmFtZS5yZXBsYWNlKFwiIHNlbGVjdGVkLXRhYlwiLCBcIlwiKTtcclxuICAgICAgdGhpcy5jbGFzc05hbWUgKz0gXCIgc2VsZWN0ZWQtdGFiXCI7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==