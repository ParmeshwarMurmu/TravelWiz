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
let btnSearch = document.getElementById("btns");
let textSearch = document.getElementById("tsearch");

let pagination = document.querySelector(".paginationdiv");

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
  country.textContent = `⚐ ${item.country}`;

  let category = document.createElement("div");
  category.className = "card-category";
  category.textContent = item.category;

  let br2 = document.createElement("br");

  let priceDiv = document.createElement("div");
  priceDiv.className = "card-price";
  priceDiv.textContent = `₹${item.price}`;

  let br3 = document.createElement("br");

  let a = document.createElement("a");
  a.href = "booking.html";

  a.setAttribute("data-name", item.city);
  a.className = "card-link";
  a.textContent = "Show More";
  a.addEventListener("click", () => {
    localStorage.setItem("travel-id", item.id);
  });

  card_body.append(city, state, country, category, br2, priceDiv, br3, a);
  card.append(imgDiv, card_body);
  return card;
}
//sort by price low to high
sortLtoH.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`${TravelbaseUrl}?_sort=price&_order=asc`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      appendData(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
sortHtoL.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`${TravelbaseUrl}?_sort=price&_order=desc`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      appendData(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
filterNationalTours.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`${TravelbaseUrl}?category=National`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      appendData(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
filterInternationalTours.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(`${TravelbaseUrl}?category=InterNational`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      appendData(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
//search function
btnSearch.addEventListener("click", () => {
  let query = textSearch.value;
  console.log(query);
  fetch(`${TravelbaseUrl}?q=${query}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      appendData(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

//pagination

function fetchingData(pageNumber) {
  fetch(`${TravelbaseUrl}?_limit=8&_page=${pageNumber}`)
    .then((res) => {
      let totalCount = res.headers.get("X-Total-Count");
      console.log(totalCount);
      let totalNoPage = Math.floor(totalCount / 6);
      console.log(totalCount, totalNoPage);
      let paginationwrapper = document.getElementById("pagination-wrapper");
      paginationwrapper.innerHTML = "";
      for (let i = 1; i <= totalNoPage; i++) {
        paginationwrapper.append(getBtn(i));
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
      appendData(data);
    });
}
fetchingData(1);
function getBtn(i) {
  let btn = document.createElement("button");
  btn.className = "paginationBtn";
  btn.setAttribute("data-id", i);
  btn.textContent = i;
  btn.addEventListener("click", (e) => {
    fetchingData(i);
  });
  return btn;
}
