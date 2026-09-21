const grid = document.querySelector("#productGrid");
const search = document.querySelector("#search");
const brand = document.querySelector("#brand");
const availability = document.querySelector("#availability");
const condition = document.querySelector("#condition");
const sort = document.querySelector("#sort");
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");

const money = (p) => new Intl.NumberFormat("en-IN", {
  style: "currency", currency: p.currency || "INR", maximumFractionDigits: 0
}).format(p);

function populateBrands() {
  [...new Set(PRODUCTS.map(p => p.brand).filter(Boolean))].sort().forEach(b => {
    const o = document.createElement("option"); o.value = b; o.textContent = b; brand.appendChild(o);
  });
}

function card(p) {
  const discount = p.salePrice && p.price > p.salePrice ? Math.round((1 - p.salePrice / p.price) * 100) : 0;
  return `<article class="card">
    <a href="product.html?id=${encodeURIComponent(p.id)}" class="card-image">
      <img src="${p.images[0]}" alt="${escapeHtml(p.title)}" loading="lazy">
      ${discount ? `<span class="badge">-${discount}%</span>` : ""}
    </a>
    <div class="card-body">
      <p class="muted">${escapeHtml(p.brand || "")}</p>
      <h3><a href="product.html?id=${encodeURIComponent(p.id)}">${escapeHtml(p.title)}</a></h3>
      <p class="availability">${escapeHtml(p.availability)}</p>
      <div class="price">${p.salePrice ? `<strong>${money(p.salePrice)}</strong><del>${money(p.price)}</del>` : `<strong>${money(p.price)}</strong>`}</div>
    </div>
  </article>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}

function render() {
  let list = PRODUCTS.filter(p => {
    const q = search.value.toLowerCase().trim();
    return (!q || [p.title,p.brand,p.description,p.category,p.sku].join(" ").toLowerCase().includes(q))
      && (!brand.value || p.brand === brand.value)
      && (!availability.value || p.availability === availability.value)
      && (!condition.value || p.condition === condition.value);
  });
  if (sort.value === "price-low") list.sort((a,b)=>(a.salePrice ?? a.price)-(b.salePrice ?? b.price));
  if (sort.value === "price-high") list.sort((a,b)=>(b.salePrice ?? b.price)-(a.salePrice ?? a.price));
  if (sort.value === "name") list.sort((a,b)=>a.title.localeCompare(b.title));
  count.textContent = `${list.length} product${list.length === 1 ? "" : "s"}`;
  grid.innerHTML = list.map(card).join("");
  empty.hidden = list.length !== 0;
}

[search, brand, availability, condition, sort].forEach(el => el.addEventListener("input", render));
document.querySelector("#clearFilters").addEventListener("click", () => {
  search.value = ""; brand.value = ""; availability.value = ""; condition.value = ""; sort.value = "featured"; render();
});
document.querySelector("#year").textContent = new Date().getFullYear();
populateBrands(); render();