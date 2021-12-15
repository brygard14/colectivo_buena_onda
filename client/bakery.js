console.log("bakery.js loaded");

const fullMenuBtn = document.querySelector("#all");
const categoryBtns = document.querySelectorAll(".categ-btns");

const menuList = document.querySelector("#menu-items");

const baseURL = "http://localhost:4011/";

function getFullMenu() {
  removeAllChildNodes(menuList);

  axios
    .get(baseURL + "api/products")
    .then((res) => {
      mapDataToList(res.data);
    })
    .catch((err) => console.log(err));
}

function getCategoryMenu(evt) {
  removeAllChildNodes(menuList);

  const category = evt.target.value;

  axios
    .get(baseURL + `api/products/?categ=${category}`)
    .then((res) => {
      console.log(res.data);
      mapDataToList(res.data);
    })
    .catch((err) => console.log(err));
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function mapDataToList(arr) {
  arr.map((element) => {
    let displayName = document.createElement("li");
    let displayPrice = document.createElement("span");
    displayName.textContent = element.name + ' ';
    displayPrice.textContent = element.price;
    displayName.appendChild(displayPrice);
    menuList.appendChild(displayName);
  });
}

fullMenuBtn.addEventListener("click", getFullMenu);

[...categoryBtns].map((element) =>
  element.addEventListener("click", getCategoryMenu)
);
