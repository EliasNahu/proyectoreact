const productos = [
  {
    id: 1, 
    title: "Producto 1",
    price: 1000,
    pictureUrl: "https://i.postimg.cc/wMLyQGGf/SQUARE-73d2214d-d873-4c0a-b3c8-ff7b34fee962-900x.webp",
    description: "saco de lana con botones y bolsillos, ideal para mantenerte abrigada en los días fríos.",
    stock: 10,
    category: "Mujeres"
    },  
    {
    id: 2,
    title: "Producto 2",
    price: 2000,
    pictureUrl: "https://i.postimg.cc/kGTrznzB/Chat-GPTImage-Jun19-2026-10-29-18AM-900x.webp",
    description: "vestido largo de seda, ideal para ocasiones especiales y eventos formales.",
    stock: 5,
    category: "Mujeres"
  },
  {
    id: 3,
    title: "Producto 3",
    price: 3000,
    pictureUrl: "https://i.postimg.cc/bvk7804P/Gemini-900x.webp",
    description: "Pollera larga de jean con botones y bolsillos, ideal para un look casual y cómodo.",
    stock: 15,
    category: "Mujeres"
  },
  {
    id: 4,
    title: "Producto 4",
    price: 4000,
    pictureUrl: "https://i.postimg.cc/dQ4zqVNh/1-9995bf3b-3f36-4990-bf6d-0a8691048dd4-900x.webp",
    description: "bucaneras de cuero con detalles de hebilla, perfectas para un estilo elegante y sofisticado.",
    stock: 8,
    category: "Mujeres"
  },
  {
    id: 5,
    title: "Producto 5",
    price: 5000,
    pictureUrl: "https://i.postimg.cc/5NzQzQzQ/5-9995bf3b-3f36-4990-bf6d-0a8691048dd4-900x.webp",
    description: "zapatos de cuero con tacón alto, perfectos para ocasiones especiales y eventos formales.",
    stock: 12,
    category: "Mujeres"
    },
     {
    id: 6,
    title: "Producto 6",
    price: 5000,
    pictureUrl: "https://i.postimg.cc/02LxsNr7/1-3250926d-743c-44e3-8936-86d865c41976.webp",
    description: "chaqueta de lona con capucha y bolsillos, ideal para protegerte del viento y la lluvia.",
    stock: 12,
    category: "Hombres"
    },
     {
    id: 7,
    title: "Producto 7",
    price: 5000,
    pictureUrl: "https://i.postimg.cc/xjmVP26D/C2997-Rudolf-darkblue-900x.webp",
    description: "camisa de vestir de algodón con botones y cuello clásico, perfecta para un look formal y elegante.",
    stock: 4,
    category: "Hombres"
    },
     {
    id: 8,
    title: "Producto 8",
    price: 5000,
    pictureUrl: "https://i.postimg.cc/FzSvdtBR/IMG-7027-900x.webp",
    description: "pantalón de vestir de lana con corte recto, ideal para un look elegante y profesional.",
    stock: 2,
    category: "Hombres"
    },
     {
    id: 9,
    title: "Producto 9",
    price: 5000,
    pictureUrl: "https://i.postimg.cc/sxY8C3L4/james-ribgebreid-katoenen-poloshirt-beige-deqalli-900x.jpg",
    description: "camiseta de algodon , perfecta para un look casual y cómodo.",
    stock: 1,
    category: "Hombres"
    },
     {  
    id: 10,
    title: "Producto 10",
    price: 5000,
    pictureUrl: "https://i.postimg.cc/Hndz5XSp/Adrian-Klassischem-und-hochwertige-zweifarbige-Lederstiefel-5-900x.webp",
    description: "zapatos de cuero con suela de goma, ideales para un estilo casual y cómodo.",
    stock: 9,
    category: "Hombres"
    }
]


export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {resolve(items) }, 2000)
  })
};
