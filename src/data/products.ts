export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  images: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  featured: boolean;
  brand: string;
  tags: string[];
};

export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
  subcategories: {
    id: string;
    name: string;
  }[];
};

// Mock products data
export const products: Product[] = [
  // Stationery Category
  {
    id: "stationery-pen-1",
    name: "Premium Ballpoint Pen",
    description: "Smooth-writing premium ballpoint pen with comfortable grip. Perfect for everyday writing tasks with its long-lasting ink and sleek design.",
    price: 12.99,
    category: "stationery",
    subcategory: "pens",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=1200",
      "https://images.unsplash.com/photo-1625850299896-273a376afdae?q=80&w=1200",
    ],
    rating: 4.7,
    reviewCount: 128,
    stock: 250,
    featured: true,
    brand: "WriteCraft",
    tags: ["pen", "ballpoint", "office supplies"]
  },
  {
    id: "stationery-pen-2",
    name: "Fountain Pen Set",
    description: "Elegant fountain pen set with multiple nib options. Comes in a luxurious case perfect for gifting. Includes converter and ink cartridges.",
    price: 49.99,
    category: "stationery",
    subcategory: "pens",
    images: [
      "https://images.unsplash.com/photo-1579083390476-968b261e718d?q=80&w=1200", 
      "https://images.unsplash.com/photo-1607164828513-6ebab4e2660f?q=80&w=1200"
    ],
    rating: 4.9,
    reviewCount: 57,
    stock: 45,
    featured: true,
    brand: "InkMaster",
    tags: ["pen", "fountain pen", "gift", "luxury"]
  },
  {
    id: "stationery-notebook-1",
    name: "Leather-Bound Journal",
    description: "Handcrafted leather journal with premium paper. Features 240 pages of acid-free paper suitable for all writing instruments. Includes bookmark ribbon and elastic closure.",
    price: 29.99,
    category: "stationery",
    subcategory: "notebooks",
    images: [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200",
      "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?q=80&w=1200"
    ],
    rating: 4.8,
    reviewCount: 93,
    stock: 78,
    featured: true,
    brand: "PaperLux",
    tags: ["notebook", "journal", "leather", "gift"]
  },
  {
    id: "stationery-notebook-2",
    name: "Spiral-Bound Notebook Pack",
    description: "Set of 5 spiral-bound notebooks in different colors. Perfect for students and professionals alike. Each notebook contains 80 college-ruled pages.",
    price: 18.99,
    category: "stationery",
    subcategory: "notebooks",
    images: [
      "https://images.unsplash.com/photo-1531346680769-a1d79b57de5c?q=80&w=1200",
      "https://images.unsplash.com/photo-1606388172956-5250e8cb0d3d?q=80&w=1200"
    ],
    rating: 4.5,
    reviewCount: 214,
    stock: 320,
    featured: false,
    brand: "StudyMate",
    tags: ["notebook", "spiral", "school supplies", "office"]
  },
  {
    id: "stationery-office-1",
    name: "Designer Stapler Set",
    description: "Modern designed stapler set with matching staple remover and box of staples. Capable of stapling up to 20 sheets at once. Ergonomic grip for comfort.",
    price: 24.95,
    category: "stationery",
    subcategory: "office supplies",
    images: [
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=1200",
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=1200"
    ],
    rating: 4.3,
    reviewCount: 67,
    stock: 112,
    featured: false,
    brand: "OfficeStyle",
    tags: ["stapler", "office supplies", "desk accessories"]
  },
  
  // Furniture & Home Appliances Category
  {
    id: "furniture-tv-1",
    name: "55-inch Smart OLED TV",
    description: "Ultra-thin 55-inch OLED smart TV with 4K resolution. Features built-in streaming apps, voice control, and 120Hz refresh rate for smooth motion. Includes multiple HDMI and USB ports.",
    price: 1299.99,
    category: "furniture",
    subcategory: "tvs",
    images: [
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1200",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200"
    ],
    rating: 4.8,
    reviewCount: 342,
    stock: 38,
    featured: true,
    brand: "VisualPro",
    tags: ["TV", "smart TV", "OLED", "entertainment"]
  },
  {
    id: "furniture-tv-2",
    name: "65-inch QLED Smart TV",
    description: "Premium 65-inch QLED TV with quantum dot technology for vibrant colors. Features include AI upscaling, gaming mode with low latency, and integrated sound system.",
    price: 1499.99,
    category: "furniture",
    subcategory: "tvs",
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200",
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1200"
    ],
    rating: 4.9,
    reviewCount: 187,
    stock: 25,
    featured: true,
    brand: "QuantumView",
    tags: ["TV", "QLED", "smart TV", "home theater"]
  },
  {
    id: "furniture-ac-1",
    name: "Smart Inverter Air Conditioner",
    description: "Energy-efficient 12,000 BTU air conditioner with smart inverter technology. Features include Wi-Fi connectivity, app control, and quiet operation. Cools up to 550 sq. ft.",
    price: 549.99,
    category: "furniture",
    subcategory: "acs",
    images: [
      "https://images.unsplash.com/photo-1625502548391-bf40a5fc75fc?q=80&w=1200",
      "https://images.unsplash.com/photo-1664728712503-545a0ddf5c07?q=80&w=1200"
    ],
    rating: 4.6,
    reviewCount: 128,
    stock: 42,
    featured: false,
    brand: "CoolMaster",
    tags: ["air conditioner", "AC", "smart home", "cooling"]
  },
  {
    id: "furniture-refrigerator-1",
    name: "French Door Refrigerator",
    description: "Spacious 26 cu. ft. french door refrigerator with water and ice dispenser. Features adjustable shelving, temperature-controlled drawers, and energy-saving mode.",
    price: 1899.99,
    category: "furniture",
    subcategory: "refrigerators",
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1200",
      "https://images.unsplash.com/photo-1543539748-a3eb58215726?q=80&w=1200"
    ],
    rating: 4.7,
    reviewCount: 203,
    stock: 18,
    featured: true,
    brand: "FrostTech",
    tags: ["refrigerator", "french door", "kitchen appliance", "food storage"]
  },
  {
    id: "furniture-sofa-1",
    name: "Modular Sectional Sofa",
    description: "Customizable modular sectional sofa with chaise lounge. Features stain-resistant fabric upholstery, hardwood frame, and high-density foam cushions for maximum comfort.",
    price: 1249.99,
    category: "furniture",
    subcategory: "sofas",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200"
    ],
    rating: 4.5,
    reviewCount: 156,
    stock: 12,
    featured: true,
    brand: "ComfortLiving",
    tags: ["sofa", "sectional", "living room", "furniture"]
  },
  {
    id: "furniture-sofa-2",
    name: "Convertible Sleeper Sofa",
    description: "Modern sleeper sofa that easily converts from couch to bed. Features memory foam mattress, USB charging ports, and durable linen upholstery.",
    price: 899.99,
    category: "furniture",
    subcategory: "sofas",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=1200",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200"
    ],
    rating: 4.4,
    reviewCount: 98,
    stock: 22,
    featured: false,
    brand: "SleepWell",
    tags: ["sofa", "sleeper", "convertible", "guest bed"]
  },
  
  // Mobile Phones Category
  {
    id: "mobile-smartphone-1",
    name: "Ultra Pro Smartphone",
    description: "Flagship smartphone with 6.7-inch AMOLED display, 108MP camera system, 5G connectivity, and all-day battery life. Includes the latest AI features for enhanced photography and productivity.",
    price: 999.99,
    category: "electronics",
    subcategory: "smartphones",
    images: [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1200",
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=1200"
    ],
    rating: 4.8,
    reviewCount: 342,
    stock: 45,
    featured: true,
    brand: "TechGiant",
    tags: ["smartphone", "mobile", "5G", "camera"]
  },
  {
    id: "mobile-smartphone-2",
    name: "Mini Lite Smartphone",
    description: "Compact 5.4-inch smartphone with premium build quality, dual camera system, and fast charging capability. Perfect for one-handed use without compromising on performance.",
    price: 699.99,
    category: "electronics",
    subcategory: "smartphones",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200",
      "https://images.unsplash.com/photo-1623126908029-58c31ac6eb6e?q=80&w=1200"
    ],
    rating: 4.6,
    reviewCount: 187,
    stock: 62,
    featured: false,
    brand: "TechGiant",
    tags: ["smartphone", "mobile", "compact", "lightweight"]
  },
  {
    id: "mobile-smartphone-3",
    name: "Value Z Phone",
    description: "Mid-range smartphone with impressive specs at an affordable price. Features a 6.5-inch display, 64MP main camera, large battery, and expandable storage.",
    price: 349.99,
    category: "electronics",
    subcategory: "smartphones",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=1200",
      "https://images.unsplash.com/photo-1598965402089-897c5de12065?q=80&w=1200"
    ],
    rating: 4.5,
    reviewCount: 256,
    stock: 89,
    featured: true,
    brand: "ValueTech",
    tags: ["smartphone", "mobile", "budget", "value"]
  },
  
  // Laptops Category
  {
    id: "laptop-ultrabook-1",
    name: "ProBook Ultra Slim",
    description: "Flagship ultrabook with 14-inch 4K display, latest processor, 16GB RAM, and 1TB SSD. Weighs just 2.6 pounds with up to 18 hours of battery life.",
    price: 1499.99,
    category: "electronics",
    subcategory: "laptops",
    images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200"
    ],
    rating: 4.9,
    reviewCount: 176,
    stock: 27,
    featured: true,
    brand: "TechPro",
    tags: ["laptop", "ultrabook", "lightweight", "premium"]
  },
  {
    id: "laptop-gaming-1",
    name: "Gaming Powerhouse RTX",
    description: "Powerful gaming laptop with 17-inch high-refresh display, RGB keyboard, latest graphics card, and advanced cooling system. Designed for immersive gaming experience.",
    price: 1899.99,
    category: "electronics",
    subcategory: "laptops",
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1200",
      "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1200"
    ],
    rating: 4.7,
    reviewCount: 134,
    stock: 18,
    featured: true,
    brand: "GameForce",
    tags: ["laptop", "gaming", "RTX", "high-performance"]
  },
  {
    id: "laptop-budget-1",
    name: "Everyday Laptop",
    description: "Affordable laptop for everyday tasks with 15.6-inch display, reliable performance, and long battery life. Perfect for students and casual users.",
    price: 549.99,
    category: "electronics",
    subcategory: "laptops",
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1200",
      "https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1200"
    ],
    rating: 4.3,
    reviewCount: 289,
    stock: 54,
    featured: false,
    brand: "ValueTech",
    tags: ["laptop", "budget", "everyday", "student"]
  }
];

export const categories: Category[] = [
  {
    id: "stationery",
    name: "Stationery",
    description: "High-quality pens, notebooks, and office supplies for work and study.",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?q=80&w=1200",
    subcategories: [
      { id: "pens", name: "Pens & Writing Tools" },
      { id: "notebooks", name: "Notebooks & Journals" },
      { id: "office supplies", name: "Office Supplies" }
    ]
  },
  {
    id: "furniture",
    name: "Furniture & Appliances",
    description: "Modern furniture and home appliances for comfortable living.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200",
    subcategories: [
      { id: "tvs", name: "TVs & Entertainment" },
      { id: "acs", name: "Air Conditioners" },
      { id: "refrigerators", name: "Refrigerators" },
      { id: "sofas", name: "Sofas & Seating" }
    ]
  },
  {
    id: "electronics",
    name: "Electronics",
    description: "Latest smartphones, laptops, and gadgets with cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200",
    subcategories: [
      { id: "smartphones", name: "Smartphones" },
      { id: "laptops", name: "Laptops" },
      { id: "accessories", name: "Accessories" }
    ]
  }
];

// Helper functions to get products
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsBySubcategory = (subcategory: string): Product[] => {
  return products.filter(product => product.subcategory === subcategory);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const filterProducts = (
  categoryFilter?: string,
  priceRange?: { min: number; max: number },
  brandFilter?: string[],
  sortBy?: 'price-asc' | 'price-desc' | 'rating' | 'newest'
): Product[] => {
  let filteredProducts = [...products];
  
  // Apply category filter
  if (categoryFilter) {
    filteredProducts = filteredProducts.filter(
      product => product.category === categoryFilter
    );
  }
  
  // Apply price range filter
  if (priceRange) {
    filteredProducts = filteredProducts.filter(
      product => product.price >= priceRange.min && product.price <= priceRange.max
    );
  }
  
  // Apply brand filter
  if (brandFilter && brandFilter.length > 0) {
    filteredProducts = filteredProducts.filter(
      product => brandFilter.includes(product.brand)
    );
  }
  
  // Apply sorting
  if (sortBy) {
    switch (sortBy) {
      case 'price-asc':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Assuming newest would be based on id for our mock data
        filteredProducts.sort((a, b) => b.id.localeCompare(a.id));
        break;
    }
  }
  
  return filteredProducts;
};
