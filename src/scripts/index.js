import "/src/style.css";
// import { camelCase } from "lodash";
import big_logo from "/src/media/logo-no-background-white-transparent.svg";
import small_logo from "/src/media/favicon.png";
import { home_elememts } from "./home.js";
import { menu_elememts } from "./menu.js";
import { about_us_elememts } from "./about_us.js";



window.onload = () => {
  let map_link = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d240.48255591252982!2d76.459992!3d15.3373958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77f76dfa86db3%3A0xf7307c8c668626f7!2z4LKV4LOD4LK34LON4LKjIOCyuOCyguCypOCzhuCyrOCzgOCypuCyvyDgspXgs4rgsrM!5e0!3m2!1sen!2sin!4v1680008688310!5m2!1sen!2sin"

  let bg_colors = ['rgb(41, 2, 2)','rgb(7, 2, 34)','rgb(15, 15, 15)','rgb(43, 2, 24)','rgb(17, 33, 12)','rgb(0, 0, 0)','rgb(8, 43, 25)']
  let rand = Math.floor(Math.random() * bg_colors.length);
  document.body.style.backgroundColor = bg_colors[rand];

  let fav_icon = document.createElement('link')
  fav_icon.rel = 'shortcut icon'
  fav_icon.href = small_logo;
  document.head.appendChild(fav_icon);

  let content = document.getElementById("content");

  let logo_container = document.createElement("div");
  logo_container.classList.add("logo-container");
  logo_container.style.margin = "4rem 0rem 2rem";

  let logo = document.createElement("img");
  logo.src = big_logo;
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
    content.appendChild(home_elememts(tab_contents));
  });

  menu_tab.addEventListener("click", () => {
    content.appendChild(menu_elememts(tab_contents));
  });

  about_us_tab.addEventListener("click", () => {
    content.appendChild(about_us_elememts(tab_contents,map_link));
  });

  let line = document.createElement('hr')
  line.classList.add('solid')

  tabs.appendChild(home_tab);
  tabs.appendChild(menu_tab);
  tabs.appendChild(about_us_tab);

  content.appendChild(tabs);
  content.appendChild(line);
  content.appendChild(home_elememts(tab_contents));


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
