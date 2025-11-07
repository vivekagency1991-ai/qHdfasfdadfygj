// explore.js — now includes brand + search functionality

const STORE_DATA = [
  { id: 1, brand: 'RR Signature Fans', title: 'LUMAIRE BLDC(fans)', priceText: '₹ 12,125/-', img: 'images/lumaire.jpeg' },
  { id: 2, brand: 'RR Signature Fans', title: 'CHELSEA BLDC(fans)', priceText: '₹ 12,125/-', img: 'images/chelsea.jpeg' },
  { id: 3, brand: 'RR Signature Fans', title: 'BROOKLYN BLDC(fans)', priceText: '₹ 9,990/-', img: 'images/brooklyn.jpeg' },
  { id: 4, brand: 'RR Signature Fans', title: 'SOHO BLDC(fans)', priceText: '₹ 2,400/-', img: 'images/sohobldc.jpeg' },
  { id: 5, brand: 'RR Signature Fans', title: 'AUDIE BLDC(fans)', priceText: '₹ 11,900/-', img: 'images/audie.jpeg' },
  { id: 6, brand: 'RR Signature Fans', title: 'RAZOREDGE BLDC(fans)', priceText: '₹ 5,990/-', img: 'images/razoredge.jpeg' },
  { id: 7, brand: 'RR Signature Fans', title: 'BONSAI BLDC(fans)', priceText: '₹ 54,990/-', img: 'images/bonsai.jpeg' },
  { id: 8, brand: 'RR Signature Fans', title: 'SLIMAIRE BLDC(fans)', priceText: '₹ 13,500/-', img: 'images/slimaire.jpeg' },
  { id: 9, brand: 'RR Signature Fans', title: 'EFFAIRE BLDC(fans)', priceText: '₹ 6,810/-', img: 'images/effaire.jpeg' },
  { id: 10, brand: 'RR Signature Fans', title: 'JAIPUR MAHAL(fans)', priceText: '₹ 25,240/-', img: 'images/jaipur.jpeg' },
  { id: 11, brand: 'RR Signature Fans', title: 'AETHER FLOW(fans)', priceText: 'Rs. 7499', img: 'images/aetherflow.jpeg' },
  { id: 12, brand: 'RR Signature Fans', title: 'NEW YORK BROOKLYN(fans)', priceText: 'Rs. 14999', img: 'images/newyorkbrooklyn.jpeg' },
  { id: 13, brand: 'RR Signature Fans', title: 'NEW YORK BROOKLYN 2(more fans)', priceText: 'Rs. 11499', img: 'images/newyorkbrooklyn2.jpeg' },
  { id: 14, brand: 'RR Signature Fans', title: 'RIO REDEEMER(fans)', priceText: 'Rs. 7499', img: 'images/rioredeemer.jpeg' },
  { id: 15, brand: 'RR Signature Fans', title: 'PROPELAIRE 2.0(fans)', priceText: 'Rs. 2199', img: 'images/propelaire2.0.jpeg' },
  { id: 16, brand: 'RR Signature Fans', title: 'NEW YORK RICHMOND(fans)', priceText: 'Rs. 1899', img: 'images/newyorkrichmond.jpeg' },
  { id: 17, brand: 'RR Signature Fans', title: 'ARIANA(fans)', priceText: 'Rs. 1849', img: 'images/ariana.jpeg' },
  { id: 18, brand: 'RR Signature Fans', title: 'AUDIE(fans)', priceText: 'Rs. 800', img: 'images/audie2.jpeg' },
  { id: 19, brand: 'RR Signature Fans', title: 'AUDIE 2(more fans)', priceText: 'Rs. 15600', img: 'images/audiemore.jpeg' },
  { id: 20, brand: 'RR Signature Fans', title: 'NEW YORK BROADWAY(fans)', priceText: 'Rs. 15300', img: 'images/broadway.jpeg' },
  { id: 21, brand: 'RR Signature Fans', title: 'JAIPUR TAMRA(fans)', priceText: '₹ 12,125/-', img: 'images/jaipurtamra.jpeg' },
  { id: 22, brand: 'RR Signature Fans', title: 'JAIPUR AMER(fans)', priceText: '₹ 12,125/-', img: 'images/jaipuramer.jpeg' },
  { id: 23, brand: 'RR Signature Fans', title: 'PETALAIRE(fans)', priceText: '₹ 9,990/-', img: 'images/petalaire.jpeg' },
  { id: 24, brand: 'RR Signature Fans', title: 'OVALO(fans)', priceText: '₹ 2,400/-', img: 'images/ovalo.jpeg' },
  { id: 25, brand: 'RR Signature Fans', title: 'GRAVITO(fans)', priceText: '₹ 11,900/-', img: 'images/gravito.jpeg' },
  { id: 26, brand: 'RR Signature Fans', title: 'RAPID PRIME 2.0(fans)', priceText: '₹ 5,990/-', img: 'images/rapidprime2.0.jpeg' },
  { id: 27, brand: 'RR Signature Fans', title: 'RAPID DECO(fans)', priceText: '₹ 54,990/-', img: 'images/rapiddeco.jpeg' },
  { id: 28, brand: 'RR Signature Fans', title: 'RAPID PRO(fans)', priceText: '₹ 13,500/-', img: 'images/rapidpro.jpeg' },
  { id: 29, brand: 'RR Signature Fans', title: 'KRAZE 650(fans)', priceText: '₹ 6,810/-', img: 'images/kraze650.jpeg' },
  { id: 30, brand: 'RR Signature Fans', title: 'KRAZE 425(fans)', priceText: '₹ 25,240/-', img: 'images/kraze425.jpeg' },
  { id: 31, brand: 'RR Signature Fans', title: 'RAPID(fans)', priceText: 'Rs. 7499', img: 'images/rapid.jpeg' },
  { id: 32, brand: 'RR Signature Fans', title: 'JOSH(fans)', priceText: 'Rs. 14999', img: 'images/josh.jpeg' },
  { id: 33, brand: 'RR Signature Fans', title: 'FARRARI PRO(long stand fans)', priceText: 'Rs. 11499', img: 'images/farraripro.jpeg' },
  { id: 34, brand: 'RR Signature Fans', title: 'FARRARI(long stand fans)', priceText: 'Rs. 7499', img: 'images/farrari.jpeg' },
  { id: 35, brand: 'RR Signature Fans', title: 'SHATABDI(long stand fans)', priceText: 'Rs. 2199', img: 'images/shatabdi.jpeg' },
  { id: 36, brand: 'RR Signature Fans', title: 'KATANA(long stand & wall fans)', priceText: 'Rs. 1899', img: 'images/katana.jpeg' },
  { id: 37, brand: 'RR Signature Fans', title: 'SPEED MAX(long stand fans)', priceText: 'Rs. 1849', img: 'images/speedmax.jpeg' },
  { id: 38, brand: 'RR Signature Fans', title: 'SPEED MAX(wall fans)', priceText: 'Rs. 800', img: 'images/speedmaxwall.jpeg' },
  { id: 39, brand: 'RR Signature Fans', title: 'SPEED PLUS(table fans)', priceText: 'Rs. 15600', img: 'images/speedplus.jpeg' },
  { id: 40, brand: 'RR Signature Fans', title: 'MOJO PLUS HS(long stand, table & wall fans)', priceText: 'Rs. 15300', img: 'images/mojoplushs.jpeg' },
   { id: 41, brand: 'RR Signature Fans', title: 'SPEED ROYALE(long stand fans)', priceText: '₹ 11,900/-', img: 'images/speedroyale.jpeg' },
  { id: 42, brand: 'RR Signature Fans', title: 'SPEED ROYALE(wall fans)', priceText: '₹ 5,990/-', img: 'images/speedroyalewall.jpeg' },
  { id: 43, brand: 'RR Signature Fans', title: 'SPEED FLO(long stand & wall fans)', priceText: '₹ 54,990/-', img: 'images/speedflo.jpeg' },
  { id: 44, brand: 'RR Signature Fans', title: 'MOJO PLUS(long stand, table & wall fans)', priceText: '₹ 13,500/-', img: 'images/mojoplus.jpeg' },
  { id: 45, brand: 'RR Signature Fans', title: 'KRAZE PLUS(wall fans)', priceText: '₹ 6,810/-', img: 'images/krazeplus.jpeg' },
  { id: 46, brand: 'RR Signature Fans', title: 'BUDDY 360(wall fans)', priceText: '₹ 25,240/-', img: 'images/buddy360.jpeg' },
  { id: 47, brand: 'RR Signature Fans', title: 'BUDDY CABIN(wall fans)', priceText: 'Rs. 7499', img: 'images/buddycabin.jpeg' },
  { id: 48, brand: 'RR Signature Fans', title: 'BUDDY PRO(table fans)', priceText: 'Rs. 14999', img: 'images/buddypro.jpeg' },
  { id: 49, brand: 'RR Signature Fans', title: 'BUDDY(table fans)', priceText: 'Rs. 11499', img: 'images/buddy.jpeg' },
  { id: 50, brand: 'RR Signature Fans', title: 'FRESHER(exhaust fans)', priceText: 'Rs. 7499', img: 'images/fresher.jpeg' },
  { id: 51, brand: 'RR Signature Fans', title: 'VENTO HI SPEED(exhaust fans)', priceText: 'Rs. 2199', img: 'images/ventohispeed.jpeg' },
  { id: 52, brand: 'RR Signature Fans', title: 'VENTO WITH GUARD(exhaust fans)', priceText: 'Rs. 1899', img: 'images/ventowithguard.jpeg' },
  { id: 53, brand: 'RR Signature Fans', title: 'VENTO PRIME(exhaust fans)', priceText: 'Rs. 1849', img: 'images/ventoprime.jpeg' },
  { id: 54, brand: 'RR Signature Fans', title: 'VENTO DELUXE HS(exhaust fans)', priceText: 'Rs. 800', img: 'images/ventodeluxehs.jpeg' },
  { id: 55, brand: 'RR Signature Fans', title: 'VENTO DELUXE(exhaust fans)', priceText: 'Rs. 15600', img: 'images/ventodeluxe.jpeg' },
  { id: 56, brand: 'RR Signature Fans', title: 'VENTO AIR(exhaust fans)', priceText: 'Rs. 15300', img: 'images/ventoair.jpeg' },
   { id: 57, brand: 'RR Signature Fans', title: 'VENTO AXIAL(exhaust fans)', priceText: 'Rs. 15300', img: 'images/ventoaxial.jpeg' },
];

document.addEventListener('DOMContentLoaded', () => {
  const brandsContainer = document.getElementById('brandButtons');
  const itemsGrid = document.getElementById('itemsGrid');
  const searchInput = document.getElementById('searchInput');

  let selectedBrand = 'All';
  let searchTerm = '';

  const brands = ['All', ...Array.from(new Set(STORE_DATA.map(i => i.brand)))];

  // Create brand buttons
  function createBrandButtons() {
    brandsContainer.innerHTML = '';
    brands.forEach((b, idx) => {
      const btn = document.createElement('button');
      btn.className = 'brand-btn' + (idx === 0 ? ' active' : '');
      btn.textContent = b;
      btn.dataset.brand = b;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.brand-btn').forEach(el => el.classList.remove('active'));
        btn.classList.add('active');
        selectedBrand = b;
        renderItems();
      });
      brandsContainer.appendChild(btn);
    });
  }

  // Render items based on brand & search
  function renderItems() {
    const filtered = STORE_DATA.filter(item => {
      const brandMatch = selectedBrand === 'All' || item.brand === selectedBrand;
      const searchMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      return brandMatch && searchMatch;
    });

    itemsGrid.innerHTML = '';

    if (!filtered.length) {
      const empty = document.createElement('div');
      empty.className = 'card';
      empty.textContent = 'No matching products found.';
      itemsGrid.appendChild(empty);
      return;
    }

    filtered.forEach(item => {
      const el = document.createElement('article');
      el.className = 'item';
      el.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <h3>${item.title}</h3>
        <div class="meta">${item.brand}</div>
        <div class="price">${item.priceText}</div>
      `;
      el.addEventListener('click', () => {
        window.location.href = `product.html?id=${item.id}`;
      });
      itemsGrid.appendChild(el);
    });
  }

  // Search input listener
  searchInput.addEventListener('input', e => {
    searchTerm = e.target.value.trim();
    renderItems();
  });

  createBrandButtons();
  renderItems();
});