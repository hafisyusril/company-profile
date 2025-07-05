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
  // Tambahkan kategori lain jika perlu
} as const;

export type ProductCategory = keyof typeof ProductsData;
