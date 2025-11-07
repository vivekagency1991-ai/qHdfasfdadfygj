// product.js
const STORE_DATA = [
  { id:1, brand:'RR Signature Fans', title:'LUMAIRE BLDC(fans)', price:'₹ 12,125/-', img:'images/lumaire.jpeg', description:'The Edge Wall Mixer with Over Head Shower Provision ensures smooth switching between bath and shower functions, combining modern aesthetics with reliable performance—ideal for elegant bathrooms. ' },
  { id:2, brand:'RR Signature Fans', title:'CHELSEA BLDC(fans)', price:'₹ 9,990/-', img:'images/chelsea.jpeg', description:'Elegant, ergonomic, and engineered for comfort — the Hindware Cora Single Lever Bath & Hand Shower Wall Mixer with Tip-Ton offers seamless water control with modern styling. Ideal for dual-function bathing setups, it blends durability with a refined design aesthetic.' },
 { id:3, brand:'RR Signature Fans', title:'BROOKLYN BLDC(fans)', price:'₹ 2,400/-', img:'images/brooklyn.jpeg', description:'Sleek Flora Design: Inspired by nature, the gentle curves add a touch of elegance to any bathroom decor.'},
  { id:4, brand:'RR Signature Fans', title:'SOHO BLDC(fans)', price:'₹ 11,900/-', img:'images/sohobldc.jpeg', description:'Where contemporary form meets intuitive function — the Hindware Fluid Senso Pillar Sensor Faucet redefines hands-free hygiene with sleek aesthetics and intelligent control. Sensor-Activated Flow: Touch-free infrared technology promotes hygiene and water conservation. ' },
  { id:5, brand:'RR Signature Fans', title:'AUDIE BLDC(fans)', price:'₹ 5,990/-', img:'images/audie.jpeg', description:'The Single Lever 4-Way Diverter gives sleek control to concealed showers, guiding water to four outlets with one intuitive motion. Crafted for bathrooms where form meets function, it makes every shower a tailored ritual.' },
 { id: 6, brand: 'RR Signature Fans', title: 'RAZOREDGE BLDC(fans)', price: '₹ 5,990/-', img: 'images/razoredge.jpeg',description:'' },
  { id: 7, brand: 'RR Signature Fans', title: 'BONSAI BLDC(fans)', price: '₹ 54,990/-', img: 'images/bonsai.jpeg', description:'' },
  { id: 8, brand: 'RR Signature Fans', title: 'SLIMAIRE BLDC(fans)', price: '₹ 13,500/-', img: 'images/slimaire.jpeg',description:'' },
  { id: 9, brand: 'RR Signature Fans', title: 'EFFAIRE BLDC(fans)', price: '₹ 6,810/-', img: 'images/effaire.jpeg', description:'' },
  { id: 10, brand: 'RR Signature Fans', title: 'JAIPUR MAHAL(fans)', price: '₹ 25,240/-', img: 'images/jaipur.jpeg', description:'' },
  { id: 11, brand: 'RR Signature Fans', title: 'AETHER FLOW(fans)', price: 'Rs. 7499', img: 'images/aetherflow.jpeg', description:'' },
  { id: 12, brand: 'RR Signature Fans', title: 'NEW YORK BROOKLYN(fans)', price: 'Rs. 14999', img: 'images/newyorkbrooklyn.jpeg', description:'' },
  { id: 13, brand: 'RR Signature Fans', title: 'NEW YORK BROOKLYN 2(more fans)', price: 'Rs. 11499', img: 'images/newyorkbrooklyn2.jpeg', description:'' },
  { id: 14, brand: 'RR Signature Fans', title: 'RIO REDEEMER(fans)', price: 'Rs. 7499', img: 'images/rioredeemer.jpeg', description:'Hi-Air Delivery, Free Installation, 3+2 year warranty'},
  { id: 15, brand: 'RR Signature Fans', title: 'PROPELAIRE 2.0(fans)', price: 'Rs. 2199', img: 'images/propelaire2.0.jpeg', description:'' },
  { id: 16, brand: 'RR Signature Fans', title: 'NEW YORK RICHMOND(fans)', price: 'Rs. 1899', img: 'images/newyorkrichmond.jpeg', description:'' },
  { id: 17, brand: 'RR Signature Fans', title: 'ARIANA(fans)', price: 'Rs. 1849', img: 'images/ariana.jpeg', description:''},
  { id: 18, brand: 'RR Signature Fans', title: 'AUDIE(fans)', price: 'Rs. 800', img: 'images/audie2.jpeg', description:'' },
  { id: 19, brand: 'RR Signature Fans', title: 'AUDIE 2(more fans)', price: 'Rs. 15600', img: 'images/audiemore.jpeg', description:'' },
  { id: 20, brand: 'RR Signature Fans', title: 'NEW YORK BROADWAY(fans)', price: 'Rs. 15300', img: 'images/broadway.jpeg', description:'Hi-Air Delivery,3 Years Warranty,65% Extra Air spread,250 Cmm in High AD' },
    { id: 21, brand: 'RR Signature Fans', title: 'JAIPUR TAMRA(fans)', price: '₹ 12,125/-', img: 'images/jaipurtamra.jpeg', description:'' },
  { id: 22, brand: 'RR Signature Fans', title: 'JAIPUR AMER(fans)', price: '₹ 12,125/-', img:'images/jaipuramer.jpeg', description:'' },
  { id: 23, brand: 'RR Signature Fans', title: 'PETALAIRE(fans)', price: '₹ 9,990/-', img: 'images/petalaire.jpeg', description:'' },
  { id: 24, brand: 'RR Signature Fans', title: 'OVALO(fans)', price: '₹ 2,400/-', img: 'images/ovalo.jpeg', description:'' },
  { id: 25, brand: 'RR Signature Fans', title: 'GRAVITO(fans)', price: '₹ 11,900/-', img: 'images/gravito.jpeg', description:'Hi-Air Delivery,Super Hi-Speed 400RPM,3 years warranty' },
  { id: 26, brand: 'RR Signature Fans', title: 'RAPID PRIME 2.0(fans)', price: '₹ 5,990/-', img: 'images/rapidprime2.0.jpeg', description:'' },
  { id: 27, brand: 'RR Signature Fans', title: 'RAPID DECO(fans)', price: '₹ 54,990/-', img: 'images/rapiddeco.jpeg', description:'' },
  { id: 28, brand: 'RR Signature Fans', title: 'RAPID PRO(fans)', price: '₹ 13,500/-', img: 'images/rapidpro.jpeg', description:'' },
  { id: 29, brand: 'RR Signature Fans', title: 'KRAZE 650(fans)', price: '₹ 6,810/-', img: 'images/kraze650.jpeg', description:'' },
  { id: 30, brand: 'RR Signature Fans', title: 'KRAZE 425(fans)', price: '₹ 25,240/-', img: 'images/kraze425.jpeg', description:'' },
  { id: 31, brand: 'RR Signature Fans', title: 'RAPID(fans)', price: 'Rs. 7499', img: 'images/rapid.jpeg', description:'' },
  { id: 32, brand: 'RR Signature Fans', title: 'JOSH(fans)', price: 'Rs. 14999', img: 'images/josh.jpeg', description:'Hi-Speed,HPLV,3 years warranty' },
  { id: 33, brand: 'RR Signature Fans', title: 'FARRARI PRO(long stand fans)', price: 'Rs. 11499', img: 'images/farraripro.jpeg', description:'' },
  { id: 34, brand: 'RR Signature Fans', title: 'FARRARI(long stand fans)', price: 'Rs. 7499', img: 'images/farrari.jpeg', description:'' },
  { id: 35, brand: 'RR Signature Fans', title: 'SHATABDI(long stand fans)', price: 'Rs. 2199', img: 'images/shatabdi.jpeg', description:'' },
  { id: 36, brand: 'RR Signature Fans', title: 'KATANA(long stand & wall fans)', price: 'Rs. 1899', img: 'images/katana.jpeg', description:'' },
  { id: 37, brand: 'RR Signature Fans', title: 'SPEED MAX(long stand fans)', price: 'Rs. 1849', img: 'images/speedmax.jpeg', description:'' },
  { id: 38, brand: 'RR Signature Fans', title: 'SPEED MAX(wall fans)', price: 'Rs. 800', img: 'images/speedmaxwall.jpeg', description:'' },
  { id: 39, brand: 'RR Signature Fans', title: 'SPEED PLUS(table fans)', price: 'Rs. 15600', img: 'images/speedplus.jpeg', description:'' },
  { id: 40, brand: 'RR Signature Fans', title: 'MOJO PLUS HS(long stand, table & wall fans)', price: 'Rs. 15300', img: 'images/mojoplushs.jpeg', description:'' },
   { id: 41, brand: 'RR Signature Fans', title: 'SPEED ROYALE(long stand fans)', price: '₹ 11,900/-', img: 'images/speedroyale.jpeg', description:'' },
  { id: 42, brand: 'RR Signature Fans', title: 'SPEED ROYALE(wall fans)', price: '₹ 5990/-', img: 'images/speedroyalewall.jpeg', description:'' },
  { id: 43, brand: 'RR Signature Fans', title: 'SPEED FLO(long stand & wall fans)', price: '₹ 54,990/-', img: 'images/speedflo.jpeg', description:'' },
  { id: 44, brand: 'RR Signature Fans', title: 'MOJO PLUS(long stand, table & wall fans)', price: '₹ 13,500/-', img: 'images/mojoplus.jpeg', description:'' },
  { id: 45, brand: 'RR Signature Fans', title: 'KRAZE PLUS(wall fans)', price: '₹ 6,810/-', img:'images/krazeplus.jpeg', description:'' },
  { id: 46, brand: 'RR Signature Fans', title: 'BUDDY 360(wall fans)', price: '₹ 25,240/-', img: 'images/buddy360.jpeg', description:'' },
  { id: 47, brand: 'RR Signature Fans', title: 'BUDDY CABIN(wall fans)', price: 'Rs. 7499', img: 'images/buddycabin.jpeg', description:'' },
  { id: 48, brand: 'RR Signature Fans', title: 'BUDDY PRO(table fans)', price: 'Rs. 14999', img: 'images/buddypro.jpeg', description:'' },
  { id: 49, brand: 'RR Signature Fans', title: 'BUDDY(table fans)', price: 'Rs. 11499', img: 'images/buddy.jpeg', description:'' },
  { id: 50, brand: 'RR Signature Fans', title: 'FRESHER(exhaust fans)', price: 'Rs. 7499', img: 'images/fresher.jpeg', description:'' },
  { id: 51, brand: 'RR Signature Fans', title: 'VENTO HI SPEED(exhaust fans)', price: 'Rs. 2199', img: 'images/ventohispeed.jpeg', description:'' },
  { id: 52, brand: 'RR Signature Fans', title: 'VENTO WITH GUARD(exhaust fans)', price: 'Rs. 1899', img: 'images/ventowithguard.jpeg', description:'' },
  { id: 53, brand: 'RR Signature Fans', title: 'VENTO PRIME(exhaust fans)', price: 'Rs. 1849', img: 'images/ventoprime.jpeg', description:'' },
  { id: 54, brand: 'RR Signature Fans', title: 'VENTO DELUXE HS(exhaust fans)', price: 'Rs. 800', img: 'images/ventodeluxehs.jpeg', description:'' },
  { id: 55, brand: 'RR Signature Fans', title: 'VENTO DELUXE(exhaust fans)', price: 'Rs. 15600', img: 'images/ventodeluxe.jpeg', description:'' },
  { id: 56, brand: 'RR Signature Fans', title: 'VENTO AIR(exhaust fans)', price: 'Rs. 15300', img: 'images/ventoair.jpeg', description:'' },
   { id: 57, brand: 'RR Signature Fans', title: 'VENTO AXIAL(exhaust fans)', price: 'Rs. 15300', img: 'images/ventoaxial.jpeg', description:'' },
];

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get("id"), 10);
  const product = STORE_DATA.find(p => p.id === id) || STORE_DATA[0];

  document.getElementById("productTitle").textContent = product.title;
  document.getElementById("productBrand").textContent = product.brand;
  document.getElementById("productPrice").textContent = product.price;
  document.getElementById("productImage").src = product.img;
  document.getElementById("productDescription").textContent = product.description;

  // Related items (same brand)
  const related = STORE_DATA.filter(p => p.brand === product.brand && p.id !== product.id);
  const relatedContainer = document.getElementById("relatedItems");
  related.forEach(p => {
    const el = document.createElement("div");
    el.className = "item";
    el.innerHTML = `
      <img src="${p.img}" alt="${escapeHtml(p.title)}">
      <h3>${escapeHtml(p.title)}</h3>
      <div class="price">${p.price}</div>
    `;
    el.addEventListener("click", () => {
      window.location.href = `product.html?id=${p.id}`;
    });
    relatedContainer.appendChild(el);
  });

  document.getElementById("year3").textContent = new Date().getFullYear();
});

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, function(m){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]});
}