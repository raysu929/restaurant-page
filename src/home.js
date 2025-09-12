import Image from "./images2.jpg";
export default function homePage(){
const content = document.getElementById("content");
content.innerHTML = '';
const image = document.createElement("img");
image.src = Image;
image.classList.add("image");

const heading = document.createElement("h1");
heading.innerText =
  "Welcome to Rapanzo! Where Every Meal Feels Like a Celebration";
heading.classList.add("heading");
const paragraph = document.createElement("p");
paragraph.innerText =
  "Step inside and experience more than just dining, discover a place where passion for flavor meets heartfelt hospitality. At Rapanzo, we believe that great food brings people together, creating moments worth savoring. Our chefs craft each dish using the freshest, locally sourced ingredients, blending tradition with creativity to surprise your palate.";
const paragraph2 = document.createElement("p");
paragraph2.innerText =
  "Whether you’re here for a cozy dinner, a family gathering, or a special occasion, we promise a warm atmosphere and attentive service that make every visit memorable. From our signature dishes to delightful seasonal specials, every bite tells a story of quality and care.";

const paragraph3 = document.createElement("p");
paragraph3.innerText =
  "Come taste the difference, share a laugh, and make memories. Because here at Rapanzo, you’re not just a guest, you’re part of our family.";

  paragraph.classList.add("p1");
    paragraph2.classList.add("p2");
  paragraph3.classList.add("p3");

content.appendChild(image);
content.appendChild(heading);
content.appendChild(paragraph);
content.appendChild(paragraph2);
content.appendChild(paragraph3);
}