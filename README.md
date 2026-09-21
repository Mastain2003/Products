# Company Product Catalog

A lightweight, responsive, publicly deployable product catalog.

## What is included

- Product listing page
- Search
- Brand, availability and condition filters
- Sorting
- Individual product detail page
- Multiple product images with thumbnail gallery
- Variants
- Title, description, price, sale price, brand, availability, condition, SKU and specifications
- Responsive mobile layout
- No database or server required

## Add your real products

Edit `products.js`. Each product can contain:

- `id` — unique product ID
- `title`
- `brand`
- `description`
- `price`
- `salePrice`
- `currency`
- `availability`
- `condition`
- `sku`
- `category`
- `images` — one or more image URLs/paths
- `variants` — e.g. color/size
- `specs` — arbitrary specification fields

For production, replace the example company name and About text in `index.html` and `product.html`.

## Add local images

Create an `images` folder and put product photos inside it, then use paths such as:

`images/product-001-front.jpg`

## Make it public

This is a static website, so it can be published on GitHub Pages, Netlify, Cloudflare Pages or Vercel. Upload the contents of this folder as the site/project and connect your domain if you have one.

For a larger catalog or frequent product updates, the next version should use a database + admin dashboard/CMS so products can be added without editing code.
