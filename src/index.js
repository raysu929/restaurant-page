import homePage from "./home";
import {menuPage} from "./menu";
const home = document.querySelector(".home");
    home.addEventListener("click", () => {
      homePage();
    });

    homePage();

    const menu = document.querySelector(".menu");
    menu.addEventListener("click", () => {
      menuPage();
    });
