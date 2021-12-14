let menuItems = [
  {
    id: 0,
    name: "rubio kinder nutella",
    price: "$80",
    category: "pastry",
  },
  {
    id: 1,
    name: "rubio chocomenta",
    price: "$85",
    category: "pastry",
  },
  {
    id: 2,
    name: "rubio cookies and cream",
    price: "$80",
    category: "pastry",
  },
  {
    id: 3,
    name: "rubio kit kat blanco",
    price: "$85",
    category: "pastry",
  },
  {
    id: 4,
    name: "morenito reeses",
    price: "$85",
    category: "pastry",
  },
  {
    id: 5,
    name: "brookie reeses",
    price: "$70",
    category: "pastry",
  },
  {
    id: 6,
    name: "brookie choco chispas",
    price: "$60",
    category: "pastry",
  },
  {
    id: 7,
    name: "brookie m&m",
    price: "$80",
    category: "pastry",
  },
  {
    id: 8,
    name: "galleta choco chispas",
    price: "$50",
    category: "pastry",
  },
  {
    id: 9,
    name: "galleta kit kat blanco",
    price: "$50",
    category: "pastry",
  },
  {
    id: 10,
    name: "cafe americano",
    price: "$25",
    category: "beverage",
  },
  {
    id: 11,
    name: "cold brew",
    price: "$60",
    category: "beverage",
  },
  {
    id: 12,
    name: "brewchata",
    price: "$70",
    category: "beverage",
  },
  {
    id: 13,
    name: "chai",
    price: "$70",
    category: "beverage",
  },
  {
    id: 14,
    name: "chai sugar free",
    price: "$80",
    category: "beverage",
  },
  {
    id: 15,
    name: "matcha",
    price: "$70",
    category: "beverage",
  },
  {
    id: 16,
    name: "taro",
    price: "$70",
    category: "beverage",
  },
];

module.exports = {
  getFullMenu: (req, res) => {
    if (req.query.categ) {
      const { categ } = req.query;
      let filteredItems = menuItems.filter((element) => {
        return categ === element.category;
      });
      res.status(200).send(filteredItems);
    } else {
      res.status(200).send(menuItems);
    }
  },
};
