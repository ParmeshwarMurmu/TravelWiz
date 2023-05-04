const TravelbaseUrl = `http://localhost:3000/travel`;
let mainSection = document.getElementById("data-list-wrapper");

//sorting by price
let sortLtoH = document.getElementById("lth");
let sortHtoL = document.getElementById("htl");

//filter by category(country)
let filterNationalTours = document.getElementById("filter-National-tours");
let filterInternationalTours = document.getElementById(
  "filter-International-tours"
);

//fetching data
function fetchData() {
  fetch(TravelbaseUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      appendData(data);
    })
    .catch((err) => {
      console.log(err);
    });
}
fetchData();
//appending on main section
function appendData(data) {
  mainSection.innerHTML = "";
  let card_list = document.createElement("div");
  card_list.className = "card-list";
  mainSection.append(card_list);

  data.forEach((item) => {
    let card = createCard(item);
    card_list.append(card);
  });
}

//Travelcard element
function createCard(item) {
  let card = document.createElement("div");
  card.className = "card";

  let imgDiv = document.createElement("div");
  imgDiv.className = "card-image";
  let img = document.createElement("img");
  img.src = item.image;
  img.setAttribute("alt", "image");

  let desc = document.createElement("div");
  desc.className = "card-desc";
  let p = document.createElement("p");
  p.textContent = item.placeDescription;
  desc.append(p);
  imgDiv.append(img, desc);

  let card_body = document.createElement("div");
  card_body.className = "card-body";

  let city = document.createElement("h2");
  city.className = "card-city";
  city.textContent = `⟟ ${item.city}`;

  let state = document.createElement("h3");
  state.className = "card-state";
  state.textContent = item.state;

  let country = document.createElement("h3");
  country.className = "card-country";
  country.textContent = `⚐${item.country}`;

  let category = document.createElement("div");
  category.className = "card-category";
  category.textContent = item.category;

  let br2 = document.createElement("br");

  let priceDiv = document.createElement("div");
  priceDiv.className = "card-price";
  priceDiv.textContent = `₹${item.price}`;

  let br3 = document.createElement("br");

  let a = document.createElement("a");
  a.href = "#";
  a.setAttribute("data-name", item.city);
  a.className = "card-link";
  a.textContent = "Show More";

  card_body.append(city, state, country, category, br2, priceDiv, br3, a);
  card.append(imgDiv, card_body);
  return card;
}
