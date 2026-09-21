// Replace these examples with your real products.
// Images can be local paths such as "images/product-1.jpg" or public HTTPS image URLs.
const PRODUCTS = [
  {
    id: "product-001",
    title: "Example Product",
    brand: "Your Brand",
    description: "A sample product description. Replace this with the complete description of your product.",
    price: 1999,
    salePrice: 1499,
    currency: "INR",
    availability: "In Stock",
    condition: "New",
    sku: "SKU-001",
    category: "Featured",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1200&q=80"
    ],
    variants: [
      { name: "Color", options: ["Mulberry", "Black", "White"] },
      { name: "Size", options: ["Small", "Medium", "Large"] }
    ],
    specs: {
      "Material": "Premium finish",
      "Warranty": "1 year",
      "Country of origin": "India"
    }
  },
  {
    id: "product-002",
    title: "Another Product",
    brand: "Your Brand",
    description: "Another example item for the catalog.",
    price: 2499,
    salePrice: null,
    currency: "INR",
    availability: "Preorder",
    condition: "New",
    sku: "SKU-002",
    category: "New",
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80"
    ],
    variants: [],
    specs: {
      "Warranty": "2 years"
    }
  }
];