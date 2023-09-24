// Adding scrolling class to navbar
const navbar = document.getElementById("navbar");

function toggleScrolledClass() {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}
// Add a scroll event listener to the window
window.addEventListener("scroll", toggleScrolledClass);

// Call the function initially to handle the initial state
toggleScrolledClass();

// Scroll to top
function toTop() {
  window.scrollTo(0, 0);
}

// PRODUCT DISPLAY
var fruits = [
  { img: "assets/products/apple.jpg", name: "Apple" },
  { img: "assets/products/capsicum.jpg", name: "Capsicum" },
  { img: "assets/products/onion.jpeg", name: "Onions" },
  { img: "assets/products/carrots.webp", name: "Carrots" },
  { img: "assets/products/tomatoes.avif", name: "Tomatoes" },
  { img: "assets/products/chilli.jpg", name: "Green Chilly" },
  { img: "assets/products/Grapes.jpg", name: "Grapes" },
  { img: "assets/products/corns.avif", name: "Corn" },
  { img: "assets/products/Pistachio.avif", name: "Pistachio" },
  { img: "assets/products/Dates.avif", name: "Dates" },
  { img: "assets/products/bananas.avif", name: "Banana" },
  { img: "assets/products/Cashew Nuts.avif", name: "Cashew Nuts" },
  { img: "assets/products/Dryfruits.avif", name: "Dryfruits" },
  { img: "assets/products/cauliflower.avif", name: "Cauliflower" },
  { img: "assets/products/Almonds.avif", name: "Almonds" },
];

var gridContainer = document.getElementById("fruit-grid");

for (var i = 0; i < fruits.length; i++) {
  var fruit = fruits[i];

  var fruitDiv = document.createElement("div");
  fruitDiv.classList.add("fruit-image");

  var imgElement = document.createElement("img");
  imgElement.src = fruit.img;
  imgElement.alt = "";
  imgElement.classList.add("img");

  var nameElement = document.createElement("h6");
  nameElement.classList.add("h6");
  nameElement.textContent = fruit.name;

  fruitDiv.appendChild(imgElement);
  fruitDiv.appendChild(nameElement);

  gridContainer.appendChild(fruitDiv);
}

// Tooltip
$(function () {
  $('[data-bs-toggle="tooltip"]').tooltip();
});
