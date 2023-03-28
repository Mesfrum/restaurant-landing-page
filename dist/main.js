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

module.exports = __webpack_require__.p + "bbe62823dd634e575ae7.svg";

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
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../src/style.css */ "./src/style.css");
/* harmony import */ var _src_media_logo_no_background_white_transparent_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../src/media/logo-no-background-white-transparent.svg */ "./src/media/logo-no-background-white-transparent.svg");
/* harmony import */ var _src_media_favicon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../src/media/favicon.png */ "./src/media/favicon.png");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ "./src/scripts/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ "./src/scripts/menu.js");
/* harmony import */ var _about_us_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about_us.js */ "./src/scripts/about_us.js");

// import { camelCase } from "lodash";








window.onload = () => {
  let map_link = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d240.48255591252982!2d76.459992!3d15.3373958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77f76dfa86db3%3A0xf7307c8c668626f7!2z4LKV4LOD4LK34LON4LKjIOCyuOCyguCypOCzhuCyrOCzgOCypuCyvyDgspXgs4rgsrM!5e0!3m2!1sen!2sin!4v1680008688310!5m2!1sen!2sin"

  let bg_colors = ['rgb(41, 2, 2)','rgb(7, 2, 34)','rgb(15, 15, 15)','rgb(43, 2, 24)','rgb(17, 33, 12)','rgb(0, 0, 0)','rgb(8, 43, 25)']
  let rand = Math.floor(Math.random() * bg_colors.length);
  document.body.style.backgroundColor = bg_colors[rand];

  let favIcon = document.createElement('link')
  favIcon.rel = 'shortcut icon'
  favIcon.href = '/dist/ad425929d3aaf8c12005.png'
  document.head.appendChild(favIcon);

  let content = document.getElementById("content");

  let logo_container = document.createElement("div");
  logo_container.classList.add("logo-container");
  logo_container.style.margin = "4rem 0rem 2rem";

  let logo = document.createElement("img");
  logo.src = "/dist/bbe62823dd634e575ae7.svg";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNYTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLEVBQUU7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFFBQVE7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFFBQVE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3QjtBQUN4QixZQUFZLFlBQVk7QUFDcUM7QUFDN0I7QUFDVTtBQUNBO0FBQ1E7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdURBQWE7QUFDckMsR0FBRztBQUNIO0FBQ0E7QUFDQSx3QkFBd0IsdURBQWE7QUFDckMsR0FBRztBQUNIO0FBQ0E7QUFDQSx3QkFBd0IsK0RBQWlCO0FBQ3pDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQix1REFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWZpcmVzaGlwLWRlbW8vLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vd2VicGFjay1maXJlc2hpcC1kZW1vLy4vc3JjL3NjcmlwdHMvYWJvdXRfdXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1maXJlc2hpcC1kZW1vLy4vc3JjL3NjcmlwdHMvaG9tZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWZpcmVzaGlwLWRlbW8vLi9zcmMvc2NyaXB0cy9tZW51LmpzIiwid2VicGFjazovL3dlYnBhY2stZmlyZXNoaXAtZGVtby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLWZpcmVzaGlwLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZmlyZXNoaXAtZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZmlyZXNoaXAtZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZmlyZXNoaXAtZGVtby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLWZpcmVzaGlwLWRlbW8vLi9zcmMvc2NyaXB0cy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJleHBvcnQgZnVuY3Rpb24gYWJvdXRfdXNfZWxlbWVtdHMoYWJvdXRfdXNfdGFiX2NvbnRlbnRzLG1hcF9saW5rKSB7XHJcbiAgYWJvdXRfdXNfdGFiX2NvbnRlbnRzLnRleHRDb250ZW50ID0nJ1xyXG4gIGxldCBzdHJ1Y3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHN0cnVjdHVyZS5jbGFzc0xpc3QuYWRkKFwiZmxleGJveF9hYm91dF91c1wiKTtcclxuICBzdHJ1Y3R1cmUuc3R5bGUuZGlzcGxheSA9IFwiZmxleGJveFwiO1xyXG4gIHN0cnVjdHVyZS5zdHlsZS5mbGV4RmxvdyA9IFwiY29sdW1uIHdyYXBcIjtcclxuXHJcbiAgbGV0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XHJcbiAgaW5mby50ZXh0Q29udGVudCA9IGBDb250YWN0IHVzIGF0YDtcclxuICBcclxuICBsZXQgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBudW1iZXIuY2xhc3NMaXN0LmFkZCgnbnVtYmVyJylcclxuICBudW1iZXIudGV4dENvbnRlbnQgPSAnMTIzNDU2Nzg5MycrJ1xcclxcbn4nXHJcblxyXG4gIGxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3MnKVxyXG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSAnUHVzaGthcmFuaSwgS3Jpc2huYXB1cmEsIEthcm5hdGFrYSA1ODMyMzknO1xyXG4gIGluZm8uYXBwZW5kQ2hpbGQobnVtYmVyKVxyXG4gIGluZm8uYXBwZW5kQ2hpbGQoYWRkcmVzcylcclxuXHJcblxyXG4gIGxldCBtYXBfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtYXBfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYXBcIik7XHJcbiAgLy8gbGV0IG1hcF9saW5rID0gXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTQhMW04ITFtMyExZDI0MC40ODI1NTU5MTI1Mjk4MiEyZDc2LjQ1OTk5MiEzZDE1LjMzNzM5NTghM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4M2JiNzdmNzZkZmE4NmRiMyUzQTB4ZjczMDdjOGM2Njg2MjZmNyEyejRMS1Y0TE9ENExLMzRMT040TEtqSU9DeXVPQ3lndUN5cE9Demh1Q3lyT0N6Z09DeXB1Q3l2eURnc3BYZ3M0cmdzck0hNWUwITNtMiExc2VuITJzaW4hNHYxNjgwMDA4Njg4MzEwITVtMiExc2VuITJzaW5cIlxyXG4gIGxldCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xyXG4gIC8vIG1hcC5kZWZlciA9IHRydWU7XHJcbiAgbWFwLnNldEF0dHJpYnV0ZSgnZGVmZXInLCAnZGVmZXInKVxyXG4gIG1hcC5zcmMgPSBtYXBfbGluaztcclxuICBtYXAud2lkdGggPSAzNTA7XHJcbiAgbWFwLmhlaWdodCA9IDQwMDtcclxuICBtYXAuYWxsb3dGdWxsc2NyZWVuID0gXCJcIjtcclxuICBtYXAubG9hZGluZyA9IFwibGF6eVwiO1xyXG4gIG1hcC5zdHlsZS5ib3JkZXIgPSAwO1xyXG4gIG1hcC5yZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCIgO1xyXG4gIFxyXG5cclxuICBtYXBfY29udGFpbmVyLmFwcGVuZENoaWxkKG1hcCk7XHJcbiAgc3RydWN0dXJlLmFwcGVuZENoaWxkKGluZm8pO1xyXG4gIHN0cnVjdHVyZS5hcHBlbmRDaGlsZChtYXBfY29udGFpbmVyKTtcclxuXHJcbiAgYWJvdXRfdXNfdGFiX2NvbnRlbnRzLmFwcGVuZENoaWxkKHN0cnVjdHVyZSk7XHJcbiAgcmV0dXJuIGFib3V0X3VzX3RhYl9jb250ZW50cztcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gaG9tZV9lbGVtZW10cyhob21lX3RhYl9jb250ZW50cykge1xyXG4gIGxldCBtc2cgPSBgVGhlIHJlc3RhdXJhbnQgaXMgYSBjb25jZXB0IHJlc3RhdXJhbnQgYW5kIGZvY3VzIG9udCBoZSBlc3NlbmNlIG9mIGZvb2QgYmV5b25kIHRhc3RlLiBQbGF0aW5nIGFsbCB0aGUgZXhxdWlzdWl0ZSB0YXN0ZXMgZnJvbSB0aGUgY29hc3RhbCBzdGF0ZSBvZiBBbmRocmEgUHJhZGVzaC48YnI+XHJcbiAgRGVkaWNhdGVkIHRvIGRlbGl2ZXJpbmcgZmxhdm91cnMgb2YgdGhlIHNlYSBmb3IgMTkgeWVhcnMuPGJyPlxyXG4gIEZvb2QgcHJlcGFyZWQgYnkgYSB0ZWFtIG9mIGNvbm5vaXNzZXVycy48YnI+XHJcbiAgSGF2ZSBhIGZpbmUgZGluaW5nIGV4cGVyaWVuY2Ugd2l0aDxicj5cXHJcXG4gS1VMQU1cclxuICB+XHJcbiBgO1xyXG5cclxuICBob21lX3RhYl9jb250ZW50cy5pbm5lckhUTUwgPSBtc2c7XHJcblxyXG4gIHJldHVybiBob21lX3RhYl9jb250ZW50cztcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gbWVudV9lbGVtZW10cyhtZW51X3RhYl9jb250ZW50cykge1xyXG4gIG1lbnVfdGFiX2NvbnRlbnRzLnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgbGV0IGZvb2RfaXRlbXMgPSBbXHJcbiAgICBbXHJcbiAgICAgIFwiSWRsaVwiLFxyXG4gICAgICAxMDAsXHJcbiAgICAgIFwiQSBzb2Z0IHJpY2UgYmFzZWQgZGVsaWNheSBjb29rZWQgaW4gc3RlYW0gcG9wdWxhciBpbiB0aGUgc291aGVybiBzdGF0ZXMgb2YgSW5kaWEsIHNlcnZlZCB3aXRoIHNpZGUgb2YgcmljaCBjb2NvbnV0IGNodXRuZXkgYW5kIGEgbGVudGlsIGJhc2VkIHNhbWJoYXIuXCIsXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBcIlZhZGFcIixcclxuICAgICAgMTAwLFxyXG4gICAgICBcIkEgZG9udXQgc2hhcGVkIHJpY2VkIGJhc2VkIGRlbGljYXksIGZyaWVkIHRvIGNyaXNwIGFuZCBzZXJ2ZWQgd2l0aCB0aGUgc2lkZXMgb2YgY29jb251dCBjaHV0bmV5IGFuZCBzYW1iaGFyLiBBIHBvcHVsYXIgc25hY2sgdGhyb3VnaG91dCB0aGUgaW5kaWFuIHN1YmNvbnRpbmVudC5cIixcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIFwiRG9zYVwiLFxyXG4gICAgICAxMDAsXHJcbiAgICAgIFwiQSByaWNlZCBiYXNlZCBmbGF0IGFuZCBjcmlwIGJyZWFkLCBwYW4gZnJpZWQgYW5kIHNlcnZlZCB3aXRoIHRoZSBzYW1lIHNpZGVzIG9mIGNvY251dCBjaHV0bmV5IGFuZCBzYW1iaGFyLlwiLFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgXCJWZWcgVGhhbGlcIixcclxuICAgICAgMTAwLFxyXG4gICAgICBcIkEgcGxhdHRlciBjb25zaXN0aW5nIG9mIGFsbCB0aGUgdmVnZXRhcmlhbiBpdGVtcyBwb3B1bGFyIGZyb20gc291dGggaW5kaWEuIFRhbXJpbmQgcmljZSwgTGVtb24gcmljZSxCaXJ5YW5pLCBXaGl0ZSByaWNlLCBEYWwsIHZlZ2V0YWJsZSBjdXJyaWVzLCByYWFpdGEsIHBhcGFkIGFuZCBkZXNlcnQuXCIsXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBcIk5vbi12ZWcgVGhhbGlcIixcclxuICAgICAgMTAwLFxyXG4gICAgICBcIkEgcGxhdHRlciBjb25zaXN0aW5nIG9mIGFsbCB0aGUgbm9uLXZlZ2V0YXJpYW4gaXRlbXMgcG9wdWxhciBpbiBzb3V0aGVyIGluZGlhLCBJbmNsdWRlcyBDaGlja2VuIEJpcnlhbmksIEFuZGhyYSBmcmllZCBjaGlja2VuLCBjaGlja2VuLCBjdXJyeSwgZnJpZWQgZmlzaCwgZmlzaCBjdXJyeSwgd2hpdGUgcmljZSBhbmQgZGVzZXJ0LlwiLFxyXG4gICAgXSxcclxuICBdO1xyXG5cclxuXHJcbiAgbGV0IGZvb2Rfc3RydWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmb29kX3N0cnVjdHVyZS5jbGFzc0xpc3QuYWRkKFwiZmxleGJveFwiKTtcclxuICBmb29kX3N0cnVjdHVyZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4Ym94XCI7XHJcbiAgZm9vZF9zdHJ1Y3R1cmUuc3R5bGUuZmxleEZsb3cgPSBcImNvbHVtbiB3cmFwXCI7XHJcblxyXG4gIGxldCBpID0gLTE7XHJcbiAgZm9vZF9pdGVtcy5mb3JFYWNoKChmb29kKSA9PiB7XHJcbiAgICBpKys7XHJcbiAgICBsZXQgZmxleF9pdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZsZXhfaXRlbS5jbGFzc0xpc3QuYWRkKGBmbGV4LSR7aX1gKTtcclxuXHJcbiAgICBsZXQgZmxleF9mb29kX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZmxleF9mb29kX25hbWUuY2xhc3NMaXN0LmFkZChgZm9vZC1uYW1lYCk7XHJcbiAgICBmbGV4X2Zvb2RfbmFtZS50ZXh0Q29udGVudCA9IGAke2Zvb2RbMF19YDtcclxuXHJcbiAgICBsZXQgZmxleF9mb29kX2Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGZsZXhfZm9vZF9kZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKGBmb29kLWRlc2NyaXB0aW9uYCk7XHJcbiAgICBmbGV4X2Zvb2RfZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtmb29kWzJdfWArICdcXHJcXG5+J1xyXG5cclxuICAgIGZsZXhfaXRlbS5hcHBlbmRDaGlsZChmbGV4X2Zvb2RfbmFtZSk7XHJcbiAgICBmbGV4X2l0ZW0uYXBwZW5kQ2hpbGQoZmxleF9mb29kX2Rlc2NyaXB0aW9uKTtcclxuICAgIGZvb2Rfc3RydWN0dXJlLmFwcGVuZENoaWxkKGZsZXhfaXRlbSk7XHJcbiAgfSk7XHJcblxyXG4gIG1lbnVfdGFiX2NvbnRlbnRzLmFwcGVuZENoaWxkKGZvb2Rfc3RydWN0dXJlKTtcclxuICByZXR1cm4gbWVudV90YWJfY29udGVudHM7XHJcbn1cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjsiLCJpbXBvcnQgXCIvc3JjL3N0eWxlLmNzc1wiO1xyXG4vLyBpbXBvcnQgeyBjYW1lbENhc2UgfSBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBcIi9zcmMvbWVkaWEvbG9nby1uby1iYWNrZ3JvdW5kLXdoaXRlLXRyYW5zcGFyZW50LnN2Z1wiO1xyXG5pbXBvcnQgXCIvc3JjL21lZGlhL2Zhdmljb24ucG5nXCI7XHJcbmltcG9ydCB7IGhvbWVfZWxlbWVtdHMgfSBmcm9tIFwiLi9ob21lLmpzXCI7XHJcbmltcG9ydCB7IG1lbnVfZWxlbWVtdHMgfSBmcm9tIFwiLi9tZW51LmpzXCI7XHJcbmltcG9ydCB7IGFib3V0X3VzX2VsZW1lbXRzIH0gZnJvbSBcIi4vYWJvdXRfdXMuanNcIjtcclxuXHJcblxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICBsZXQgbWFwX2xpbmsgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xNCExbTghMW0zITFkMjQwLjQ4MjU1NTkxMjUyOTgyITJkNzYuNDU5OTkyITNkMTUuMzM3Mzk1OCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgzYmI3N2Y3NmRmYTg2ZGIzJTNBMHhmNzMwN2M4YzY2ODYyNmY3ITJ6NExLVjRMT0Q0TEszNExPTjRMS2pJT0N5dU9DeWd1Q3lwT0N6aHVDeXJPQ3pnT0N5cHVDeXZ5RGdzcFhnczRyZ3NyTSE1ZTAhM20yITFzZW4hMnNpbiE0djE2ODAwMDg2ODgzMTAhNW0yITFzZW4hMnNpblwiXHJcblxyXG4gIGxldCBiZ19jb2xvcnMgPSBbJ3JnYig0MSwgMiwgMiknLCdyZ2IoNywgMiwgMzQpJywncmdiKDE1LCAxNSwgMTUpJywncmdiKDQzLCAyLCAyNCknLCdyZ2IoMTcsIDMzLCAxMiknLCdyZ2IoMCwgMCwgMCknLCdyZ2IoOCwgNDMsIDI1KSddXHJcbiAgbGV0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBiZ19jb2xvcnMubGVuZ3RoKTtcclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJnX2NvbG9yc1tyYW5kXTtcclxuXHJcbiAgbGV0IGZhdkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcclxuICBmYXZJY29uLnJlbCA9ICdzaG9ydGN1dCBpY29uJ1xyXG4gIGZhdkljb24uaHJlZiA9ICcvZGlzdC9hZDQyNTkyOWQzYWFmOGMxMjAwNS5wbmcnXHJcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChmYXZJY29uKTtcclxuXHJcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcblxyXG4gIGxldCBsb2dvX2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbG9nb19jb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvZ28tY29udGFpbmVyXCIpO1xyXG4gIGxvZ29fY29udGFpbmVyLnN0eWxlLm1hcmdpbiA9IFwiNHJlbSAwcmVtIDJyZW1cIjtcclxuXHJcbiAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGxvZ28uc3JjID0gXCIvZGlzdC9iYmU2MjgyM2RkNjM0ZTU3NWFlNy5zdmdcIjtcclxuICBsb2dvLmlkID0gXCJrdWxhbS1sb2dvXCI7XHJcbiAgbG9nby5zdHlsZS53aWR0aCA9IFwiMThyZW1cIjtcclxuICBsb2dvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICB3aW5kb3cub3BlbihcImh0dHBzOi8vZ29vLmdsL21hcHMvV3U3YzQ3WkpidjVBS0JFczZcIik7XHJcbiAgfSk7XHJcbiAgbG9nb19jb250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChsb2dvX2NvbnRhaW5lcik7XHJcblxyXG4gIGxldCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0YWJzLmlkID0gXCJ0YWJzXCI7XHJcblxyXG4gIGxldCBob21lX3RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaG9tZV90YWIudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuICBob21lX3RhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xyXG4gIGhvbWVfdGFiLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC10YWJcIik7XHJcblxyXG4gIGxldCBtZW51X3RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudV90YWIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICBtZW51X3RhYi5jbGFzc0xpc3QuYWRkKFwidGFiXCIpO1xyXG5cclxuICBsZXQgYWJvdXRfdXNfdGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBhYm91dF91c190YWIudGV4dENvbnRlbnQgPSBcIkFib3V0LXVzXCI7XHJcbiAgYWJvdXRfdXNfdGFiLmNsYXNzTGlzdC5hZGQoXCJ0YWJcIik7XHJcblxyXG4gIGxldCB0YWJfY29udGVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhYl9jb250ZW50cy5jbGFzc0xpc3QuYWRkKFwidGFiLWNvbnRlbnRcIik7XHJcblxyXG4gIGhvbWVfdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVfZWxlbWVtdHModGFiX2NvbnRlbnRzKSk7XHJcbiAgfSk7XHJcblxyXG4gIG1lbnVfdGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVfZWxlbWVtdHModGFiX2NvbnRlbnRzKSk7XHJcbiAgfSk7XHJcblxyXG4gIGFib3V0X3VzX3RhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dF91c19lbGVtZW10cyh0YWJfY29udGVudHMsbWFwX2xpbmspKTtcclxuICB9KTtcclxuXHJcbiAgbGV0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpXHJcbiAgbGluZS5jbGFzc0xpc3QuYWRkKCdzb2xpZCcpXHJcblxyXG4gIHRhYnMuYXBwZW5kQ2hpbGQoaG9tZV90YWIpO1xyXG4gIHRhYnMuYXBwZW5kQ2hpbGQobWVudV90YWIpO1xyXG4gIHRhYnMuYXBwZW5kQ2hpbGQoYWJvdXRfdXNfdGFiKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0YWJzKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGxpbmUpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZV9lbGVtZW10cyh0YWJfY29udGVudHMpKTtcclxuXHJcblxyXG4gIC8vIEdldCBhbGwgYnV0dG9ucyB3aXRoIGNsYXNzPVwiYnRuXCIgaW5zaWRlIHRoZSBjb250YWluZXJcclxuICBsZXQgYnRucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFic1wiKS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFiXCIpO1xyXG5cclxuICAvLyBMb29wIHRocm91Z2ggdGhlIGJ1dHRvbnMgYW5kIGFkZCB0aGUgYWN0aXZlIGNsYXNzIHRvIHRoZSBjdXJyZW50L2NsaWNrZWQgYnV0dG9uXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidG5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBidG5zW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBjdXJyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlbGVjdGVkLXRhYlwiKTtcclxuICAgICAgY3VycmVudFswXS5jbGFzc05hbWUgPSBjdXJyZW50WzBdLmNsYXNzTmFtZS5yZXBsYWNlKFwiIHNlbGVjdGVkLXRhYlwiLCBcIlwiKTtcclxuICAgICAgdGhpcy5jbGFzc05hbWUgKz0gXCIgc2VsZWN0ZWQtdGFiXCI7XHJcbiAgICB9KTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==