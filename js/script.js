// Animasi scroll sederhana
window.addEventListener("scroll", function() {
  let elements = document.querySelectorAll(".product-card, .about, .hero");
  elements.forEach(el => {
    let pos = el.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (pos < windowHeight - 50) {
      el.classList.add("visible");
    }
  });
});

// Tambahan efek animasi
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.transform = "scale(1.1)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.transform = "scale(1)";
  });
});

/*teks pengembangan*/
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.createElement("div");
  banner.className = "dev-banner";

  const text = document.createElement("span");
  text.textContent = "🚧 Web ini sedang dalam proses pengembangan 🚧 design by abdulcss";

  banner.appendChild(text);
  document.body.prepend(banner);
});

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Biar menu nutup kalau link diklik
document.querySelectorAll(".nav-menu a").forEach(link =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);


/*about*/
function toggleDescription(element) {
  const desc = element.querySelector('.description');
  const isVisible = desc.style.display === 'block';

  // sembunyikan semua deskripsi
  document.querySelectorAll('.team .description').forEach(d => d.style.display = 'none');

  // tampilkan deskripsi yang diklik kalau sebelumnya tersembunyi
  if (!isVisible) {
    desc.style.display = 'block';
  }
}

function toggleDescription(member) {
  const content = member.querySelector('.member-content');
  const arrow = member.querySelector('.arrow');
  const isVisible = content.style.display === 'flex';

  // sembunyikan semua konten dan reset panah
  document.querySelectorAll('.member-content').forEach(c => c.style.display = 'none');
  document.querySelectorAll('.arrow').forEach(a => a.style.transform = 'rotate(0deg)');

  // tampilkan konten yang diklik
  if (!isVisible) {
    content.style.display = 'flex';
    arrow.style.transform = 'rotate(180deg)';
  }
}


