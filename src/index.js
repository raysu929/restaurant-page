import homePage from "./home";
import {menuPage} from "./menu";
import {aboutPage} from "./about";

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
