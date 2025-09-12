import homePage from "./home";
import {menuPage} from "./menu";
import {aboutPage} from "./about";
import "./general.css";
import "./home.css";
import "./menu.css";
import "./about.css";

const home = document.querySelector(".home");
    home.addEventListener("click", () => {
      homePage();
    });

    homePage();

    const menu = document.querySelector(".menu");
    menu.addEventListener("click", () => {
      menuPage();
    });

const about = document.querySelector(".about");
    about.addEventListener("click", () => {
    aboutPage();
});
