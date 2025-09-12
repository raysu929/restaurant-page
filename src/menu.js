export function menuPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";
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
      price: "R45",
    },
    {
      name: "Paneer Tikka",
      description:
        "Grilled cubes of marinated cottage cheese with bell peppers and onions.",
      price: "R95",
    },
    {
      name: "Chicken Pakora",
      description:
        "Tender chicken pieces battered in spiced chickpea flour and deep-fried.",
      price: "R80",
    },
    {
      name: "Onion Bhaji",
      description:
        "Thinly sliced onions mixed with gram flour and spices, deep-fried to golden perfection.",
      price: "R60",
    },
  ];
  items.forEach((item) => {
    const li = document.createElement("li");
    const dishName = document.createElement("strong");
    dishName.innerText = item.name;
dishName.classList.add("dishName");
    const desc = document.createElement("p");
    desc.innerText = item.description;

    const price = document.createElement("div");
    price.innerText = item.price;
price.classList.add("price");
    dishName.appendChild(price);
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
      price: "R120",
    },
    {
      name: "Lamb Rogan Josh",
      description:
        "Slow-cooked lamb in a rich, aromatic curry sauce with Kashmiri spices.",
      price: "R140",
    },
    {
      name: "Chana Masala",
      description:
        "Chickpeas simmered in a tangy tomato and onion gravy, flavoured with garam masala.",
      price: "R90",
    },
    {
      name: "Saag Paneer",
      description:
        "Homemade paneer cooked in a creamy spinach sauce with garlic and spices.",
      price: "R110",
    },
    {
      name: "Tandoori Chicken",
      description:
        "Juicy chicken marinated in yogurt and spices, cooked in the traditional clay oven.",
      price: "R135",
    },
  ];
  mainItems.forEach((item) => {
    const mainLi = document.createElement("li");
    const mainName = document.createElement("strong");
    mainName.innerText = item.name;
    mainName.classList.add("dishName");

    const mainP = document.createElement("p");
    mainP.innerText = item.description;
 const mainPrice = document.createElement("div");
 mainPrice.innerText = item.price;
mainPrice.classList.add("price");

 mainName.appendChild(mainPrice);
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
      price: "R130",
    },
    {
      name: "Vegetable Biryani",
      description:
        "Basmati rice cooked with mixed vegetables and aromatic spices.",
      price: "R110",
    },
    {
      name: "Jeera Rice",
      description: "Basmati rice tempered with cumin seeds and lightly spiced.",
      price: "R45",
    },
  ];
  riceItems.forEach((item) => {
    const riceLi = document.createElement("li");
    const riceName = document.createElement("strong");
    riceName.innerText = item.name;
riceName.classList.add("dishName");

    const riceP = document.createElement("p");
    riceP.innerText = item.description;
const ricePrice = document.createElement("div");
ricePrice.innerText = item.price;
ricePrice.classList.add("price");

riceName.appendChild(ricePrice);
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
      description:
        "Soft leavened bread topped with fresh garlic and coriander.",
      price: "R35",
    },
    {
      name: "Plain Naan",
      description: "Classic tandoori bread, fluffy and perfect for dipping.",
      price: "R28",
    },
    {
      name: "Paratha",
      description: "Layered, flaky flatbread cooked with butter.",
      price: "R38",
    },
  ];
  breadsItems.forEach((item) => {
    const breadsLi = document.createElement("li");
    const breadsName = document.createElement("strong");
    breadsName.innerText = item.name;
breadsName.classList.add("dishName");

    const breadsP = document.createElement("p");
    breadsP.innerText = item.description;
const breadsPrice = document.createElement("div");
breadsPrice.innerText = item.price;
breadsPrice.classList.add("price");

breadsName.appendChild(breadsPrice);
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
      price: "R30",
    },
    {
      name: "Mango Chutney",
      description: "Sweet and tangy mango relish.",
      price: "R25",
    },
    {
      name: "Papadum",
      description: "Thin and crispy lentil wafers.",
      price: "R15",
    },
  ];
  sidesItems.forEach((item) => {
    const sidesLi = document.createElement("li");
    const sidesName = document.createElement("strong");
    sidesName.innerText = item.name;
sidesName.classList.add("dishNameS");

    const sidesP = document.createElement("p");
    sidesP.innerText = item.description;
const sidesPrice = document.createElement("div");
sidesPrice.innerText = item.price;
sidesPrice.classList.add("price");

sidesName.appendChild(sidesPrice);
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
      price: "R50",
    },
    {
      name: "Kheer",
      description: "Creamy rice pudding infused with saffron and nuts.",
      price: "R45",
    },
  ];
  dessertsItems.forEach((item) => {
    const dessertsLi = document.createElement("li");
    const dessertsName = document.createElement("strong");
    dessertsName.innerText = item.name;
dessertsName.classList.add("dishNameS");

    const dessertsP = document.createElement("p");
    dessertsP.innerText = item.description;
const dessertPrice = document.createElement("div");
dessertPrice.innerText = item.price;
dessertPrice.classList.add("price");

dessertsName.appendChild(dessertPrice);
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
