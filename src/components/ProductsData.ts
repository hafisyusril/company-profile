export const ProductsData = {
  "Coffee Series": [
    {
      name: "Iced Americano",
      price: "IDR 28K",
      desc: "Refreshing iced espresso with a smooth finish.",
      image: "/americano-iced.avif",
    },
    {
      name: "Hot Americano",
      price: "IDR 27K",
      desc: "Bold and classic hot espresso with water.",
      image: "/hot-americano.avif",
    },
    {
      name: "Iced Manuka Americano",
      price: "IDR 32K",
      desc: "Americano sweetened with Manuka honey and chilled.",
      image: "/iced-manuka-americano.avif",
    },
    {
      name: "Triple Peach Americano",
      price: "IDR 34K",
      desc: "Fruity peach-infused iced americano with triple flavor shot.",
      image: "/triple-peach-americano.avif",
    },
  ],
  "Non Coffee Series" : [
    {
      name: "Iced Dark Chocolate",
      price: "IDR 28K",
      desc: "Made from 100% dark chocolate and milk",
      image: "/iced-dark-chocolate.avif",
    },
    {
      name: "Hot Dark Chocolate",
      price: "IDR 27K",
      desc: "Made from 100% dark chocolate and milk",
      image: "/hot-dark-chocolate.avif",
    },
    {
      name: "Iced Matcha Green Tea",
      price: "IDR 32K",
      desc: "Fore's special matcha powder is soft and creamy combined with fresh milk",
      image: "/iced-matcha-green-tea.avif",
    },
    {
      name: "Hot Matcha Green Tea",
      price: "IDR 34K",
      desc: "Fore's special matcha powder is soft and creamy combined with fresh milk.",
      image: "/hot-matcha-green-tea.avif",
    },
  ]
} as const;

export type ProductCategory = keyof typeof ProductsData;
