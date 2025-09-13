import homePage from "../scripts/home";
import { menuPage } from "../scripts/menu";
import { aboutPage } from "../scripts/about";
import "../styles/general.css";
import "../styles/home.css";
import "../styles/menu.css";
import "../styles/about.css";

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
