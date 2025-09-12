import Image from "./images.jpeg";
export default function homePage(){
const content = document.getElementById("content");
content.innerHTML = '';
const image = document.createElement("img");
image.src = Image;

const heading = document.createElement("h1");
heading.innerText =
  "Welcome to Rapanzo! Where Every Meal Feels Like a Celebration";

const paragraph = document.createElement("p");
paragraph.innerText =
  "Step inside and experience more than just dining, discover a place where passion for flavor meets heartfelt hospitality. At Rapanzo, we believe that great food brings people together, creating moments worth savoring. Our chefs craft each dish using the freshest, locally sourced ingredients, blending tradition with creativity to surprise your palate.";
const paragraph2 = document.createElement("p");
paragraph2.innerText =
  "Whether you’re here for a cozy dinner, a family gathering, or a special occasion, we promise a warm atmosphere and attentive service that make every visit memorable. From our signature dishes to delightful seasonal specials, every bite tells a story of quality and care.";

const paragraph3 = document.createElement("p");
paragraph3.innerText =
  "Come taste the difference, share a laugh, and make memories. Because here at Rapanzo, you’re not just a guest, you’re part of our family.";

content.appendChild(image);
content.appendChild(heading);
content.appendChild(paragraph);
content.appendChild(paragraph2);
content.appendChild(paragraph3);
}
export function menuPage(){
const menu = document.createElement("h1");
menu.innerText = "Rapanzo Indian Takeaway Menu";
const starters = document.createElement("h2");
starters.innerText = "Starters:";

const ul = document.createElement("ul");
 const items = [
   {
     name: "Samosa",
     description:
       "Crispy pastry filled with spiced potatoes and peas, served with mint chutney.",
   },
   {
     name: "Paneer Tikka",
     description:
       "Grilled cubes of marinated cottage cheese with bell peppers and onions.",
   },
   {
     name: "Chicken Pakora",
     description:
       "Tender chicken pieces battered in spiced chickpea flour and deep-fried.",
   },
   {
     name: "Onion Bhaji",
     description:
       "Thinly sliced onions mixed with gram flour and spices, deep-fried to golden perfection.",
   },
 ];
 items.forEach(item => {
const li = document.createElement("li");
 const dishName = document.createElement("strong");
 dishName.innerText = item.name;

 const desc = document.createElement("p");
 desc.innerText = item.description;

 li.appendChild(dishName);
 li.appendChild(desc);
ul.appendChild(li);
 });

 const main = document.createElement("h2");
main.innerText = "Main Courses:";

const mainUl = document.createElement("ul");
 const mainItems = [
   {
     name: "Butter Chicken",
     description:
       "Tender chicken cooked in a creamy tomato and butter sauce, mildly spiced.",
   },
   {
     name: "Lamb Rogan Josh",
     description:
       "Slow-cooked lamb in a rich, aromatic curry sauce with Kashmiri spices.",
   },
   {
     name: "Chana Masala",
     description:
       "Chickpeas simmered in a tangy tomato and onion gravy, flavoured with garam masala.",
   },
   {
     name: "Saag Paneer",
     description:
       "Homemade paneer cooked in a creamy spinach sauce with garlic and spices.",
   },
   {
     name: "Tandoori Chicken",
     description:
       "Juicy chicken marinated in yogurt and spices, cooked in the traditional clay oven.",
   },
 ];
 mainItems.forEach(item => {
const mainLi = document.createElement("li");
 const mainName = document.createElement("strong");
 mainName.innerText = item.name;

 const mainP = document.createElement("p");
 mainP.innerText = item.description;

 mainLi.appendChild(mainName);
 mainLi.appendChild(mainP);
mainUl.appendChild(mainLi);
 });
 
 const riceDish = document.createElement("h2");
 riceDish.innerText = "Biryani & Rice:";

 const riceUl = document.createElement("ul");
 const riceItems = [
   {
     name: "Chicken Biryani",
     description:
       "Fragrant basmati rice layered with tender chicken, herbs, and spices.",
   },
   {
     name: "Vegetable Biryani",
     description:
       "Basmati rice cooked with mixed vegetables and aromatic spices.",
   },
   {
     name: "Jeera Rice",
     description: "Basmati rice tempered with cumin seeds and lightly spiced.",
   },
 ];
 riceItems.forEach((item) => {
   const riceLi = document.createElement("li");
   const riceName = document.createElement("strong");
   riceName.innerText = item.name;

   const riceP = document.createElement("p");
   riceP.innerText = item.description;

   riceLi.appendChild(riceName);
   riceLi.appendChild(riceP);
   riceUl.appendChild(riceLi);
 });
 const breads = document.createElement("h2");
 breads.innerText = "Breads:";

 const breadsUl = document.createElement("ul");
 const breadsItems = [
   {
     name: "Garlic Naan",
     description: "Soft leavened bread topped with fresh garlic and coriander.",
   },
   {
     name: "Plain Naan",
     description: "Classic tandoori bread, fluffy and perfect for dipping.",
   },
   {
     name: "Paratha",
     description: "Layered, flaky flatbread cooked with butter.",
   },
 ];
 breadsItems.forEach((item) => {
   const breadsLi = document.createElement("li");
   const breadsName = document.createElement("strong");
   breadsName.innerText = item.name;

   const breadsP = document.createElement("p");
   breadsP.innerText = item.description;

   breadsLi.appendChild(breadsName);
   breadsLi.appendChild(breadsP);
   breadsUl.appendChild(breadsLi);
 });

 const sides = document.createElement("h2");
 sides.innerText = "Sides & Extras:";

 const sidesUl = document.createElement("ul");
 const sidesItems = [
   {
     name: "Raita",
     description: "Cooling yogurt with cucumber and mint.",
   },
   {
     name: "Mango Chutney",
     description: "Sweet and tangy mango relish.",
   },
   {
     name: "Papadum",
     description: "Thin and crispy lentil wafers.",
   },
 ];
 sidesItems.forEach((item) => {
   const sidesLi = document.createElement("li");
   const sidesName = document.createElement("strong");
   sidesName.innerText = item.name;

   const sidesP = document.createElement("p");
   sidesP.innerText = item.description;

   sidesLi.appendChild(sidesName);
   sidesLi.appendChild(sidesP);
   sidesUl.appendChild(sidesLi);
 });

 const desserts = document.createElement("h2");
 desserts.innerText = "Desserts:";

 const dessertsUl = document.createElement("ul");
 const dessertsItems = [
   {
     name: "Gulab Jamun",
     description: "Soft, syrup-soaked dumplings flavored with cardamom.",
   },
   {
     name: "Kheer",
     description: "Creamy rice pudding infused with saffron and nuts.",
   },
 ];
 dessertsItems.forEach((item) => {
   const dessertsLi = document.createElement("li");
   const dessertsName = document.createElement("strong");
   dessertsName.innerText = item.name;

   const dessertsP = document.createElement("p");
   dessertsP.innerText = item.description;

   dessertsLi.appendChild(dessertsName);
   dessertsLi.appendChild(dessertsP);
   dessertsUl.appendChild(dessertsLi);
 });

content.appendChild(menu);

content.appendChild(starters);
content.appendChild(ul);

content.appendChild(main);
content.appendChild(mainUl);

content.appendChild(riceDish);
content.appendChild(riceUl);

content.appendChild(breads);
content.appendChild(breadsUl);


content.appendChild(sides);
content.appendChild(sidesUl);


content.appendChild(desserts);
content.appendChild(dessertsUl);

}