var products = [
  // Category: Fruits
  [
    { img: "assets/products/apple.jpg", name: "Apple" },
    { img: "assets/products/fruits-APPLE GREEN.avif ", name: " APPLE GREEN  " },
    { img: "assets/products/bananas.avif", name: "Banana" },

    { img: "assets/products/fruits 21-MANGO.avif ", name: " MANGO  " },
    { img: "assets/products/fruits12-cherry.avif ", name: " cherry   " },
    {
      img: "assets/products/fruits13-DRAGON FRUITS.avif ",
      name: " DRAGON FRUITS ",
    },
    { img: "assets/products/fruits14-FIGS FRESH.jpg ", name: "  FIGS FRESH  " },
    {
      img: "assets/products/fruits15-GRAPES FRUITS.avif ",
      name: " GRAPES FRUITS ",
    },
    { img: "assets/products/fruits16-kiwi.avif ", name: "  kiwi  " },
    { img: "assets/products/fruits18-LIME GREEN.avif ", name: " LIME GREEN  " },
    { img: "assets/products/fruits19-LYCHEE.avif ", name: "  LYCHEE " },
    {
      img: "assets/products/fruits20-MANDARINE (SPAIN).jpg ",
      name: " MANDARINE (SPAIN)  ",
    },
    {
      img: "assets/products/fruits22-MELON SWEET.avif ",
      name: " MELON SWEET ",
    },
    { img: "assets/products/Grapes.jpg", name: "  Grapes  " },
    {
      img: "assets/products/fruits6-APRICOT FRESH.avif ",
      name: " APRICOT FRESH  ",
    },
    { img: "assets/products/fruits8-BANANA.avif ", name: "BANANA  " },
    {
      img: "assets/products/fruits9-BLACK BERRY.avif ",
      name: "  BLACK BERRY  ",
    },
    { img: "assets/products/fruits10-BLUEBERRY.avif ", name: " BLUEBERRY  " },
    {
      img: "assets/products/fruits11-COCONUT (YOUNG).avif ",
      name: " COCONUT (YOUNG)  ",
    },
  ],

  // Category: Vegetables
  [
    { img: "assets/products/tomatoes.avif", name: "Tomatoes" },
    { img: "assets/products/carrots.webp", name: "Carrots" },
    { img: "assets/products/onion.jpeg", name: "Onions" },
    { img: "assets/products/capsicum.jpg", name: "Capsicum" },
    { img: "assets/products/cauliflower.avif", name: "Cauliflower" },
    { img: "assets/products/corns.avif", name: "Corn" },
    { img: "assets/products/beans23-BEANS LONG.jpg", name: "BEANS LONG" },
    {
      img: "assets/products/beans24-beans sprouts fresh.avif",
      name: "beans sprouts fresh",
    },
    { img: "assets/products/leave- bakleh.jpg", name: "  bakleh " },
    {
      img: "assets/products/crops3-CABBAGE RED.jpg",
      name: "crops3-CABBAGE RED   ",
    },
    {
      img: "assets/products/crops5-CAULIFLOWER (LOCAL).avif ",
      name: "CAULIFLOWER (LOCAL)  ",
    },
    {
      img: "assets/products/chilli25-CHILI GREEN FRESH (IND).avif",
      name: "CHILI GREEN FRESH (IND)",
    },
    { img: "assets/products/capsicum.jpg", name: "capsicum" },
    { img: "assets/products/carrots.avif", name: "carrots " },
    { img: "assets/products/carrots.webp", name: "carrots" },
    { img: "assets/products/cauliflower.avif ", name: "cauliflower" },
    { img: "assets/products/onion.jpeg ", name: "onion " },
    {
      img: "assets/products/chilli26-CHILI RED LONG.avif",
      name: "CHILI RED LONG",
    },
    {
      img: "assets/products/chilli26-CHILI RED SMALL.avif",
      name: "CHILI RED SMALL",
    },
    { img: "assets/products/leaves-BABY CORN.avif", name: "BABY CORN" },
    { img: "assets/products/corns.avif ", name: "corns  " },
    {
      img: "assets/products/crops1-BRUSSEL SPROUTS.avif ",
      name: " BRUSSEL SPROUTS ",
    },
    { img: "assets/products/crops2-CABBAGE FLAT.jpg ", name: "CABBAGE FLAT  " },
    { img: "assets/products/chilli.jpg", name: "Green Chilly" },
  ],

  // Category: Dry Fruits
  [
    { img: "assets/products/Cashew Nuts.avif", name: "Cashew Nuts" },
    { img: "assets/products/Dates.avif", name: "Dates" },
    { img: "assets/products/Pistachio.avif", name: "Pistachio" },
    { img: "assets/products/Dryfruits.avif", name: "Dryfruits" },
    { img: "assets/products/Almonds.avif", name: "Almonds" },
    { img: "assets/products/Dryfruits.avif ", name: "Dryfruits  " },
  ],
  [
    { img: "assets/products/leaves-banana.jpg", name: "leaves-banana  " },
    { img: "assets/products/leave- bakleh.jpg", name: "  bakleh" },
    { img: "assets/products/leaves-CHIVES.avif", name: "CHIVES" },
    { img: "assets/products/leaves-CURRYLEAVES.jpg", name: " CURRYLEAVES" },
    { img: "assets/products/leaves-Spinach.webp", name: "Spinach" },
    { img: "assets/products/leaved-CORIANDER.avif", name: "CORIANDER" },
    { img: "assets/products/leaves20-BEETROOT.jpg", name: " BEETROOT " },
    { img: "assets/products/leaved-CORIANDER.avif", name: "CORIANDER" },
    { img: "assets/products/leaves_basil-pot.webp", name: " basil-pot" },
    { img: "assets/products/leaves_basil181624-51036.avif", name: " basil " },
    {
      img: "assets/products/leaves- RADISH RED WITH LEAVES.avif",
      name: " RED RADISH   ",
    },
    { img: "assets/products/leaves-BROCOLLI.avif", name: "BROCOLLI" },
  ],
];

function addProductsToCategory(categoryId, products) {
  var categoryGrid = document.getElementById(categoryId);

  if (!categoryGrid) {
    return;
  } else {
    products.forEach(function (product) {
      var productContainer = document.createElement("div");
      productContainer.classList.add("product-container");

      var productImg = document.createElement("img");
      productImg.classList.add("img");
      productImg.classList.add("slide-from-left");

      productImg.src = product.img;
      productImg.alt = product.name;
      productImg.classList.add("w-100", "h-100");

      var nameElement = document.createElement("h6");
      nameElement.classList.add("h6");
      nameElement.textContent = product.name;

      productContainer.appendChild(productImg);
      productContainer.appendChild(nameElement);

      categoryGrid.appendChild(productContainer);
    });
  }
}

addProductsToCategory("fruits-grid", products[0]);
addProductsToCategory("vegetables-grid", products[1]);
addProductsToCategory("dry-fruits-grid", products[2]);
addProductsToCategory("leaves-grid", products[3]);
