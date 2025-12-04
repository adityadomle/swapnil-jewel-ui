export interface Product {
  id: string;
  name: string;
  weight: string;
  rating: number;
  image: string;
  category: string;
  purity: string;
  description: string;
  specifications: {
    material: string;
    purity: string;
    weight: string;
    finish: string;
    style: string;
  };
}

export const products: Product[] = [
  {
    id: "mangalsutra-1",
    name: "Pure Gold Mangalsutra",
    weight: "6.2 gm",
    rating: 5,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    category: "Necklaces",
    purity: "22K",
    description: "A beautifully crafted traditional mangalsutra in pure 22K gold. This timeless piece features intricate detailing and represents the sacred bond of marriage. Perfect for everyday wear or special occasions.",
    specifications: {
      material: "Pure Gold",
      purity: "22 Karat (916 Hallmark)",
      weight: "6.2 grams",
      finish: "High Polish",
      style: "Traditional"
    }
  },
  {
    id: "jhumka-1",
    name: "Gold Jhumka Earrings",
    weight: "5.8 gm",
    rating: 5,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    category: "Earrings",
    purity: "22K",
    description: "Elegant traditional jhumka earrings handcrafted in pure 22K gold. These stunning earrings feature classic bell-shaped design with delicate goldwork, perfect for weddings and festive occasions.",
    specifications: {
      material: "Pure Gold",
      purity: "22 Karat (916 Hallmark)",
      weight: "5.8 grams",
      finish: "Matte & Polish",
      style: "Traditional Jhumka"
    }
  },
  {
    id: "figaro-chain-1",
    name: "22K Gold Figaro Chain",
    weight: "12.5 gm",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    category: "Chains",
    purity: "22K",
    description: "Classic Figaro link chain crafted in premium 22K gold. This versatile chain features alternating flat links creating a timeless pattern. Ideal for both men and women.",
    specifications: {
      material: "Pure Gold",
      purity: "22 Karat (916 Hallmark)",
      weight: "12.5 grams",
      finish: "High Polish",
      style: "Figaro Link"
    }
  },
  {
    id: "choker-1",
    name: "Traditional Gold Choker",
    weight: "22.0 gm",
    rating: 5,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=800&q=80",
    category: "Necklaces",
    purity: "22K",
    description: "Magnificent traditional choker necklace in pure 22K gold. This statement piece features elaborate craftsmanship with intricate patterns, perfect for bridal wear and grand celebrations.",
    specifications: {
      material: "Pure Gold",
      purity: "22 Karat (916 Hallmark)",
      weight: "22.0 grams",
      finish: "Antique & Polish",
      style: "Traditional Choker"
    }
  },
  {
    id: "stud-earrings-1",
    name: "Gold Stud Earrings",
    weight: "2.4 gm",
    rating: 5,
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=80",
    category: "Earrings",
    purity: "22K",
    description: "Elegant minimalist stud earrings in pure 22K gold. These timeless studs feature a classic design perfect for everyday elegance. Lightweight and comfortable for all-day wear.",
    specifications: {
      material: "Pure Gold",
      purity: "22 Karat (916 Hallmark)",
      weight: "2.4 grams",
      finish: "High Polish",
      style: "Classic Stud"
    }
  },
  {
    id: "signet-ring-1",
    name: "Pure Gold Signet Ring",
    weight: "4.8 gm",
    rating: 5,
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80",
    category: "Rings",
    purity: "22K",
    description: "Distinguished signet ring crafted in pure 22K gold. This classic design features a smooth polished surface with comfortable fit. Perfect for men seeking timeless elegance.",
    specifications: {
      material: "Pure Gold",
      purity: "22 Karat (916 Hallmark)",
      weight: "4.8 grams",
      finish: "High Polish",
      style: "Signet"
    }
  },
  {
    id: "snake-chain-1",
    name: "Gold Snake Chain",
    weight: "9.2 gm",
    rating: 5,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    category: "Chains",
    purity: "22K",
    description: "Sleek snake chain necklace in pure 22K gold. This modern chain features smooth, flexible links that create an elegant serpentine effect. Perfect for contemporary styling.",
    specifications: {
      material: "Pure Gold",
      purity: "22 Karat (916 Hallmark)",
      weight: "9.2 grams",
      finish: "High Polish",
      style: "Snake Link"
    }
  },
  {
    id: "bangles-set-1",
    name: "Traditional Bangles Set",
    weight: "28.0 gm",
    rating: 5,
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
    category: "Bangles",
    purity: "22K",
    description: "Exquisite set of traditional bangles in pure 22K gold. These beautifully crafted bangles feature classic designs with intricate patterns. Perfect for weddings and festive occasions.",
    specifications: {
      material: "Pure Gold",
      purity: "22 Karat (916 Hallmark)",
      weight: "28.0 grams (set)",
      finish: "High Polish",
      style: "Traditional"
    }
  },
  {
    id: "box-chain-1",
    name: "Gold Box Chain Necklace",
    weight: "7.5 gm",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80",
    category: "Chains",
    purity: "22K",
    description: "Modern box chain necklace crafted in pure 22K gold. This contemporary design features square links for a geometric aesthetic. Versatile piece suitable for any occasion.",
    specifications: {
      material: "Pure Gold",
      purity: "22 Karat (916 Hallmark)",
      weight: "7.5 grams",
      finish: "High Polish",
      style: "Box Link"
    }
  },
  {
    id: "cuff-bracelet-1",
    name: "Pure Gold Cuff Bracelet",
    weight: "14.2 gm",
    rating: 5,
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80",
    category: "Bracelets",
    purity: "22K",
    description: "Bold cuff bracelet in pure 22K gold. This statement piece features a smooth, minimalist design with comfortable open-back fit. Perfect for those who appreciate understated luxury.",
    specifications: {
      material: "Pure Gold",
      purity: "22 Karat (916 Hallmark)",
      weight: "14.2 grams",
      finish: "High Polish",
      style: "Modern Cuff"
    }
  },
  {
    id: "traditional-ring-1",
    name: "Pure Gold Traditional Ring",
    weight: "2.5 gm",
    rating: 5,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
    category: "Rings",
    purity: "22K",
    description: "Beautiful traditional ring in pure 22K gold. This elegant piece features classic Indian design elements perfect for everyday wear or special occasions.",
    specifications: {
      material: "Pure Gold",
      purity: "22 Karat (916 Hallmark)",
      weight: "2.5 grams",
      finish: "High Polish",
      style: "Traditional"
    }
  },
  {
    id: "wedding-band-1",
    name: "22K Gold Wedding Band",
    weight: "3.2 gm",
    rating: 5,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343a?w=800&q=80",
    category: "Rings",
    purity: "22K",
    description: "Classic wedding band in pure 22K gold. This timeless ring symbolizes eternal love with its smooth, comfortable design. Perfect for the most special day of your life.",
    specifications: {
      material: "Pure Gold",
      purity: "22 Karat (916 Hallmark)",
      weight: "3.2 grams",
      finish: "High Polish",
      style: "Classic Band"
    }
  },
  {
    id: "rope-chain-1",
    name: "Gold Rope Chain Necklace",
    weight: "8.5 gm",
    rating: 5,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    category: "Chains",
    purity: "22K",
    description: "Stunning rope chain necklace in pure 22K gold. This classic design features twisted links creating a beautiful rope-like texture. A versatile piece for any wardrobe.",
    specifications: {
      material: "Pure Gold",
      purity: "22 Karat (916 Hallmark)",
      weight: "8.5 grams",
      finish: "High Polish",
      style: "Rope Link"
    }
  },
  {
    id: "bangle-set-classic-1",
    name: "Classic Gold Bangle Set",
    weight: "12.0 gm",
    rating: 5,
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&q=80",
    category: "Bangles",
    purity: "22K",
    description: "Elegant classic bangle set in pure 22K gold. These beautiful bangles feature simple yet sophisticated design perfect for daily wear and special occasions alike.",
    specifications: {
      material: "Pure Gold",
      purity: "22 Karat (916 Hallmark)",
      weight: "12.0 grams (set)",
      finish: "High Polish",
      style: "Classic"
    }
  },
  {
    id: "hoop-earrings-1",
    name: "Pure Gold Hoop Earrings",
    weight: "4.1 gm",
    rating: 5,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    category: "Earrings",
    purity: "22K",
    description: "Classic hoop earrings in pure 22K gold. These timeless hoops feature a perfect circular design with secure closure. A must-have accessory for every jewelry collection.",
    specifications: {
      material: "Pure Gold",
      purity: "22 Karat (916 Hallmark)",
      weight: "4.1 grams",
      finish: "High Polish",
      style: "Classic Hoop"
    }
  },
  {
    id: "cuban-chain-1",
    name: "22K Gold Cuban Link Chain",
    weight: "15.8 gm",
    rating: 5,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
    category: "Chains",
    purity: "22K",
    description: "Bold Cuban link chain in pure 22K gold. This iconic design features interlocking oval links creating a strong, masculine aesthetic. Perfect for making a statement.",
    specifications: {
      material: "Pure Gold",
      purity: "22 Karat (916 Hallmark)",
      weight: "15.8 grams",
      finish: "High Polish",
      style: "Cuban Link"
    }
  },
  {
    id: "temple-pendant-1",
    name: "Gold Temple Pendant",
    weight: "5.5 gm",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80",
    category: "Pendants",
    purity: "22K",
    description: "Sacred temple pendant in pure 22K gold. This devotional piece features traditional temple jewelry design with intricate detailing. Perfect for those who value tradition.",
    specifications: {
      material: "Pure Gold",
      purity: "22 Karat (916 Hallmark)",
      weight: "5.5 grams",
      finish: "Antique & Polish",
      style: "Temple Jewelry"
    }
  },
  {
    id: "kada-1",
    name: "Traditional Gold Kada",
    weight: "18.0 gm",
    rating: 5,
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80",
    category: "Bracelets",
    purity: "22K",
    description: "Majestic traditional kada in pure 22K gold. This statement bracelet features classic Indian design with substantial weight and presence. Perfect for men seeking traditional elegance.",
    specifications: {
      material: "Pure Gold",
      purity: "22 Karat (916 Hallmark)",
      weight: "18.0 grams",
      finish: "Matte & Polish",
      style: "Traditional Kada"
    }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (currentId: string, category: string, limit: number = 4): Product[] => {
  return products
    .filter(product => product.id !== currentId && product.category === category)
    .slice(0, limit);
};
