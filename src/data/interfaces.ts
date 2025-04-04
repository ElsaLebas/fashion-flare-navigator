export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  featured?: boolean;
  newArrival?: boolean;
  discount?: number;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface OccasionItem {
  id: string;
  title: string;
  image: string;
  link: string;
}

export const categories: Category[] = [
  {
    id: "women",
    name: "Women",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
  },
  {
    id: "men",
    name: "Men",
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1326&q=80"
  },
  {
    id: "accessories",
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
  }
];

export const occasions: OccasionItem[] = [
  {
    id: "casual",
    title: "Casual Day Out",
    image: "https://plus.unsplash.com/premium_photo-1688497831384-e40b2e5615cd?q=80&w=3086&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    get link() {
      return `/occasion/${this.title}`;
    }
  },
  {
    id: "formal",
    title: "Formal Evening",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=783&q=80",
    get link() {
      return `/occasion/${this.title}`;
    }
  },
  {
    id: "office",
    title: "Office Wear",
    image: "https://images.unsplash.com/photo-1636191284490-fff58f369ec6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    get link() {
      return `/occasion/${this.title}`;
    }
  },
  {
    id: "wedding",
    title: "Wedding Guest",
    image: "https://images.unsplash.com/photo-1518102885802-e869dcb9da8b?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    get link() {
      return `/occasion/${this.title}`;
    }
  },
  {
    id: "party",
    title: "Party Night",
    image: "https://plus.unsplash.com/premium_photo-1699389167605-88e5bc060a10?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    get link() {
      return `/occasion/${this.title}`;
    }
  },
  {
    id: "vacation",
    title: "Vacation Vibes",
    image: "https://images.unsplash.com/photo-1525450824786-227cbef70703?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    get link() {
      return `/occasion/${this.title}`;
    }
  },
  {
    id: "active",
    title: "Active & Sporty",
    image: "https://plus.unsplash.com/premium_photo-1664885647983-772bde237f43?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    get link() {
      return `/occasion/${this.title}`;
    }
  },
  {
    id: "cozy",
    title: "Cozy & Comfy",
    image: "https://images.unsplash.com/photo-1675379086716-95bf8a4d22f2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    get link() {
      return `/occasion/${this.title}`;
    }
  },
  {
    id: "date",
    title: "Date Night",
    image: "https://images.unsplash.com/photo-1629123384492-ebee058af32e?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    get link() {
      return `/occasion/${this.title}`;
    }
  }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Silk Blend Tailored Blazer",
    category: "women",
    price: 299.99,
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    ],
    description: "Elevate your wardrobe with this luxurious silk blend blazer. Expertly tailored with a modern fit, it features structured shoulders, a notched lapel, and a single-button closure. Perfect for both office and evening occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Cream", "Navy"],
    featured: true
  },
  {
    id: 2,
    name: "Merino Wool Crewneck Sweater",
    category: "men",
    price: 149.99,
    images: [
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
    ],
    description: "Crafted from premium merino wool, this lightweight sweater offers exceptional comfort and warmth. The classic crewneck design makes it a versatile addition to your wardrobe, easily paired with casual or formal attire.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "Burgundy", "Forest Green"],
    featured: true
  },
  {
    id: 3,
    name: "Leather Crossbody Bag",
    category: "accessories",
    price: 189.99,
    images: [
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1363&q=80"
    ],
    description: "This elegant crossbody bag is handcrafted from full-grain leather with meticulous attention to detail. Its sleek design features a spacious interior, adjustable strap, and signature gold hardware.",
    sizes: ["One Size"],
    colors: ["Tan", "Black", "Burgundy"],
    newArrival: true
  },
  {
    id: 4,
    name: "Premium Leather Chelsea Boots",
    category: "shoes",
    price: 259.99,
    images: [
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80"
    ],
    description: "Combining classic style with modern comfort, these Chelsea boots are crafted from premium Italian leather. The elastic side panels ensure a comfortable fit, while the Goodyear welt construction provides durability and water resistance.",
    sizes: ["7", "8", "9", "10", "11", "12"],
    colors: ["Black", "Brown", "Oxblood"],
    featured: true
  },
  {
    id: 5,
    name: "Cashmere Turtleneck Sweater",
    category: "women",
    price: 229.99,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
    ],
    description: "Indulge in the luxurious softness of pure cashmere with this timeless turtleneck sweater. Knitted in a fine gauge for a sleek silhouette, it offers exceptional warmth without bulk, making it perfect for layering.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "Gray", "Camel"],
    discount: 15
  },
  {
    id: 6,
    name: "Selvedge Denim Jeans",
    category: "men",
    price: 179.99,
    images: [
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
    ],
    description: "These premium selvedge denim jeans are crafted from Japanese denim and feature a classic straight-leg fit. The minimalist design is enhanced with subtle details including reinforced stitching and custom hardware.",
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Indigo", "Black", "Stonewash"],
    newArrival: true
  },
  {
    id: 7,
    name: "Oversized Wool Coat",
    category: "women",
    price: 349.99,
    images: [
      "https://images.unsplash.com/photo-1580331451062-99ff652288d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    ],
    description: "Make a statement with this oversized wool coat, designed with dropped shoulders and a relaxed fit. The premium wool blend offers exceptional warmth and comfort, while the clean lines and minimalist details create a sophisticated silhouette.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Camel", "Black", "Gray"],
    featured: true
  },
  {
    id: 8,
    name: "Fine Knit Cashmere Scarf",
    category: "accessories",
    price: 119.99,
    images: [
      "https://images.unsplash.com/photo-1584736286279-f4e3799ec8cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    ],
    description: "This luxurious scarf is crafted from the finest Mongolian cashmere, known for its exceptional softness and warmth. The lightweight, fine knit construction allows for versatile styling options, from classic wraps to modern knots.",
    sizes: ["One Size"],
    colors: ["Camel", "Burgundy", "Navy", "Gray"],
    discount: 10
  }
];

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.newArrival);
};

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};
