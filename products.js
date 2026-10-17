const PRODUCTS = [
  {
    productId: 'Gold-01',
    productTitle: 'Sanchi Gold',
    brand: 'Sanchi',
    description: 'pasteurized full cream milk',
    category: 'Milk',
    variants: [
      {
        id: 'Gold-01-500ml',
        title: 'Sanchi Gold 500ml',
        sku: 'S-gold-500',
        attributes: { Quantity: '500 ML' },
        price: 35,
        salePrice: 33.5,
        currency: 'INR',
        availability: 'In Stock',
        condition: 'New',
        images: ['img/milk/GOLD_500.jpg'],
        specs: { Validity: '2 Days' }
      },
      {
        id: 'Gold-01-1000ml',
        title: 'Sanchi Gold 1000ml',
        sku: 'S-gold-1000',
        attributes: { Quantity: '1000 ML' },
        price: 70,
        salePrice: 67,
        currency: 'INR',
        availability: 'In Stock',
        condition: 'New',
        images: ['img/milk/GOLD_1000.jpg'],
        specs: { Validity: '2 Days' }
      },
      {
        id: 'Gold-01-6000ml',
        title: 'Sanchi Gold 6000ml',
        sku: 'S-gold-6000',
        attributes: { Quantity: '6000 ML' },
        price: 420,
        salePrice: 386.20,
        currency: 'INR',
        availability: 'In Stock',
        condition: 'New',
        images: ['img/milk/GOLD_6000.jpg'],
        specs: { Validity: '2 Days' }
      }
    ]
  },
  {
    productId: 'STD-01',
    productTitle: 'Sanchi Standard',
    brand: 'Sanchi',
    description: 'pasteurized Standard milk',
    category: 'Milk',
    variants: [
      {
        id: 'STD-01-500ml',
        title: 'Sanchi Standard 500ml',
        sku: 'S-std-500',
        attributes: { Quantity: '500 ML' },
        price: 32,
        salePrice: 30.5,
        currency: 'INR',
        availability: 'In Stock',
        condition: 'New',
        images: ['img/milk/STD_500.jpg'],
        specs: { Validity: '2 Days' }
      },
      {
        id: 'STD-01-6000ml',
        title: 'Sanchi Standard 6000ml',
        sku: 'S-std-6000',
        attributes: { Quantity: '6000 ML' },
        price: 378,
        salePrice: 360,
        currency: 'INR',
        availability: 'In Stock',
        condition: 'New',
        images: ['img/milk/STD_6000.jpg'],
        specs: { Validity: '2 Days' }
      }
    ]
  },
  {
    productId: 'DTM-01',
    productTitle: 'Sanchi Double Toned Milk',
    brand: 'Sanchi',
    description: 'pasteurized Double Toned milk',
    category: 'Milk',
    variants: [
      {
        id: 'DTM-01-500ml',
        title: 'Sanchi Double Toned 500ml',
        sku: 'S-DTM-500',
        attributes: { Quantity: '500 ML' },
        price: 27,
        salePrice: 25.5,
        currency: 'INR',
        availability: 'In Stock',
        condition: 'New',
        images: ['img/milk/DTM_500.jpg'],
        specs: { Validity: '2 Days' }
      },
      {
        id: 'DTM-01-200ml',
        title: 'Sanchi Double Toned 200ml',
        sku: 'S-DTM-200',
        attributes: { Quantity: '200 ML' },
        price: 10,
        salePrice: 9,
        currency: 'INR',
        availability: 'In Stock',
        condition: 'New',
        images: ['img/milk/DTM_200.jpg'],
        specs: { Validity: '2 Days' }
      }
    ]
  },
  {
    productId: 'TM-01',
    productTitle: 'Sanchi Toned Milk',
    brand: 'Sanchi',
    description: 'pasteurized homogenized Toned milk',
    category: 'Milk',
    variants: [
      {
        id: 'TM-01-500ml',
        title: 'Sanchi homogenized Toned 500ml',
        sku: 'S-TM-500',
        attributes: { Quantity: '500 ML' },
        price: 29,
        salePrice: 27.5,
        currency: 'INR',
        availability: 'In Stock',
        condition: 'New',
        images: ['img/milk/TM_500.jpg'],
        specs: { Validity: '2 Days' }
      }
    ]
  },
  {
    productId: 'TSP-01',
    productTitle: 'Sanchi Toned Milk (Special)',
    brand: 'Sanchi',
    description: 'Pasteurized homogenized Toned milk',
    category: 'Milk',
    variants: [
      {
        id: 'TSP-01-1000ml',
        title: 'Sanchi homogenized Toned 1000ml',
        sku: 'S-TSP-1000',
        attributes: { Quantity: '1000 ML' },
        price: 56,
        salePrice: 53,
        currency: 'INR',
        availability: 'In Stock',
        condition: 'New',
        images: ['img/milk/TSP_1000.jpg'],
        specs: { Validity: '2 Days' }
      }
    ]
  },
  {
    productId: 'Chah-01',
    productTitle: 'Sanchi Chah Milk',
    brand: 'Sanchi',
    description: 'Pasteurized homogenized Standard milk',
    category: 'Milk',
    variants: [
      {
        id: 'Chah-01-1000ml',
        title: 'Sanchi homogenized Standard 1000ml',
        sku: 'S-Chah-1000',
        attributes: { Quantity: '1000 ML' },
        price: 62,
        salePrice: 59,
        currency: 'INR',
        availability: 'In Stock',
        condition: 'New',
        images: ['img/milk/CHAH_1000.jpg'],
        specs: { Validity: '2 Days' }
      }
    ]
  },
  {
    productId: 'Skim-01',
    productTitle: 'Sanchi Skimmed Milk',
    brand: 'Sanchi',
    description: 'pasteurized Skimmed milk',
    category: 'Milk',
    variants: [
      {
        id: 'Skim-01-200ml',
        title: 'Sanchi pasteurized Skimmed 200ml',
        sku: 'S-skim-200',
        attributes: { Quantity: '200 ML' },
        price: 10,
        salePrice: 7,
        currency: 'INR',
        availability: 'In Stock',
        condition: 'New',
        images: ['img/milk/SKIM_200.jpg'],
        specs: { Validity: '2 Days' }
      }
    ]
  },
  {
    productId: 'Peda-001',
    productTitle: 'Sanchi Peda',
    brand: 'Sanchi',
    description: 'Peda made up of pure mawa.',
    category: 'Sweets',
    variants: [
      {
        id: 'Peda-001-250gm',
        title: 'Sanchi Peda 250gm',
        sku: 'S-Pead-250',
        attributes: { Quantity: '250 Gm' },
        price: 120,
        salePrice: 110,
        currency: 'INR',
        availability: 'In Stock',
        condition: 'New',
        images: [
          'img/peda 250/1789992001302(1).png',
          'img/peda 250/1789992001302(2).png',
          'img/peda 250/1789992001302(3).png',
          'img/peda 250/1789992001302(4).png',
          'img/peda 250/1789992001302(5).png',
          'img/peda 250/1789992001302.png'
        ],
        specs: { Validity: '1 Month' }
      },
      {
        id: 'Peda-001-500gm',
        title: 'Sanchi Peda 500gm',
        sku: 'S-Pead-500',
        attributes: { Quantity: '500 Gm' },
        price: 230,
        salePrice: 210,
        currency: 'INR',
        availability: 'In Stock',
        condition: 'New',
        images: ['img/peda 500/178999281742.png'],
        specs: { Validity: '1 Month' }
      },
      {
        id: 'Peda-001-1Kg',
        title: 'Sanchi Peda 1KG',
        sku: 'S-Pead-1000',
        attributes: { Quantity: '1 KG' },
        price: 420,
        salePrice: 388,
        currency: 'INR',
        availability: 'In Stock',
        condition: 'New',
        images: [
          'images/tshirt-mulberry-s-front.jpg',
          'images/tshirt-mulberry-s-back.jpg'
        ],
        specs: { Validity: '1 Month' }
      }
    ]
  },
  {
    productId: 'milk-cake-001',
    productTitle: 'Sanchi Milk Cake',
    brand: 'Sanchi',
    description: 'Milk cake made up of pure mawa.',
    category: 'Sweets',
    variants: [
      {
        id: 'Milk Cake-001-250gm',
        title: 'Sanchi Milk cake 250gm',
        sku: 'S-milk-cake-250',
        attributes: { Quantity: '250 Gm' },
        price: 125,
        salePrice: 115,
        currency: 'INR',
        availability: 'In Stock',
        condition: 'New',
        images: ['img/peda 250/1789992001302.png'],
        specs: { Validity: '1 Month' }
      }
    ]
  }
];
