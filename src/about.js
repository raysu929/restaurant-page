
export function aboutPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  const about = document.createElement("h1");
  about.innerText = "About Us";
  const subHeader = document.createElement("h2");
  subHeader.innerText =
    "Welcome to Rapanzo Indian Takeaway, where flavour meets tradition.";
const p1 = document.createElement("p");
p1.innerText =
  "At Rapanzo, we bring the rich, vibrant taste of authentic Indian cuisine straight to your table. Whether you're craving the bold heat of a classic curry or the comforting warmth of freshly baked naan, every dish is prepared with care, passion, and genuine Indian spices.";

  const p2 = document.createElement("p");
  p2.innerText =
    "Founded with a love for traditional recipes and a modern approach to takeaway dining, Rapanzo was created to offer more than just food — we offer an experience. From North Indian favourites to South Indian specialties, our menu celebrates the diversity of Indian cooking while staying true to its roots.";

    
  const p3 = document.createElement("p");
  p3.innerText =
    "We believe great food starts with quality ingredients, so we source fresh produce, fragrant spices, and high-quality meats to ensure every bite is bursting with flavour. Our chefs bring years of experience and a deep understanding of Indian cuisine, combining time-honoured methods with a fresh, contemporary twist.";

    
  const p4 = document.createElement("p");
  p4.innerText =
    "Whether you're picking up dinner for the family or ordering a late-night treat, we’re here to make your meal memorable — with friendly service, fast preparation, and food that speaks for itself.";

    const p5 = document.createElement("strong");
    p5.innerText =
      "Rapanzo isn’t just another takeaway — it’s your new go-to for real Indian food, made right.";

      const p6 = document.createElement("p");
      p6.innerText = "Thank you for choosing us — we can’t wait to serve you.";

      const call = document.createElement("strong");
      call.innerText = "📞 Call us to order: 074 399 0423 0";
 
      const visit = document.createElement("div");
      visit.innerText = "📍 Visit us at: 923 Fluffy Street , Alexander";

      const open = document.createElement("strong");
      open.innerText = `🕒 Open daily:`;
      const openUl = document.createElement("ul");
      const openLi = document.createElement("li");
      openLi.innerText = "Monday to Friday: 10:00 AM – 7:30 PM";
      const openLiW = document.createElement("li");
      openLiW.innerText = "Saturday & Sunday: 9:00 AM – 10:00 PM";

content.appendChild(about);
content.appendChild(subHeader);
content.appendChild(p1);
content.appendChild(p2);
content.appendChild(p3);
content.appendChild(p4);
content.appendChild(p5);
content.appendChild(p6);
content.appendChild(call);
content.appendChild(visit);
content.appendChild(open);
content.appendChild(openUl);
openUl.appendChild(openLi);
openUl.appendChild(openLiW);
const openSection = document.createElement("div");
openSection.appendChild(open);
openSection.appendChild(openUl);
content.appendChild(openSection);
}
