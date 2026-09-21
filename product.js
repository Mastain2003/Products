const root = document.querySelector("#detail");
const id = new URLSearchParams(location.search).get("id");
const p = PRODUCTS.find(x => x.id === id);
const money = v => new Intl.NumberFormat("en-IN", {style:"currency",currency:p.currency||"INR",maximumFractionDigits:0}).format(v);
const esc = s => String(s ?? "").replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));

if (!p) {
  root.innerHTML = `<div class="not-found"><h1>Product not found</h1><a class="button" href="./">Back to products</a></div>`;
} else {
  document.title = `${p.title} | YOUR COMPANY`;
  const sale = p.salePrice && p.salePrice < p.price;
  root.innerHTML = `
    <a class="back" href="./">← Back to products</a>
    <div class="product-layout">
      <section>
        <div class="main-image"><img id="mainImage" src="${p.images[0]}" alt="${esc(p.title)}"></div>
        <div class="thumbs">${p.images.map((src,i)=>`<button class="thumb ${i===0?"active":""}" data-src="${src}"><img src="${src}" alt="Product image ${i+1}"></button>`).join("")}</div>
      </section>
      <section class="product-info">
        <p class="eyebrow">${esc(p.brand)} · ${esc(p.category)}</p>
        <h1>${esc(p.title)}</h1>
        <p class="sku">SKU: ${esc(p.sku)}</p>
        <div class="detail-price">${sale ? `<strong>${money(p.salePrice)}</strong><del>${money(p.price)}</del>` : `<strong>${money(p.price)}</strong>`}</div>
        <p class="availability">${esc(p.availability)} · ${esc(p.condition)}</p>
        <p class="description">${esc(p.description)}</p>
        ${p.variants?.length ? `<div class="variants">${p.variants.map((v,vi)=>`<label>${esc(v.name)}<select>${v.options.map((o,i)=>`<option>${esc(o)}</option>`).join("")}</select></label>`).join("")}</div>` : ""}
        <div class="facts">
          <div><span>Brand</span><b>${esc(p.brand)}</b></div>
          <div><span>Availability</span><b>${esc(p.availability)}</b></div>
          <div><span>Condition</span><b>${esc(p.condition)}</b></div>
          <div><span>SKU</span><b>${esc(p.sku)}</b></div>
        </div>
      </section>
    </div>
    ${p.specs && Object.keys(p.specs).length ? `<section class="specs"><h2>Specifications</h2><dl>${Object.entries(p.specs).map(([k,v])=>`<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl></section>` : ""}
  `;
  document.querySelectorAll(".thumb").forEach(btn => btn.onclick = () => {
    document.querySelector("#mainImage").src = btn.dataset.src;
    document.querySelectorAll(".thumb").forEach(x=>x.classList.remove("active")); btn.classList.add("active");
  });
}
document.querySelector("#year").textContent = new Date().getFullYear();