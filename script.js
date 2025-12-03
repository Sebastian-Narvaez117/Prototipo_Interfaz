// Modo oscuro global
const htmlElement = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    htmlElement.classList.add("dark");
  } else if (savedTheme === "light") {
    htmlElement.classList.remove("dark");
  }

  themeToggle.addEventListener("click", () => {
    htmlElement.classList.toggle("dark");
    localStorage.setItem("theme", htmlElement.classList.contains("dark") ? "dark" : "light");
  });
}

// Aquí podrás agregar funciones para login, catálogo, búsqueda, etc.
// ==== BUSCADOR ====
const searchInput = document.querySelector("input[placeholder='Buscar...']");
const cards = document.querySelectorAll(".card");

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const text = searchInput.value.toLowerCase();
        cards.forEach(card => {
            const title = card.querySelector("p").textContent.toLowerCase();
            card.style.display = title.includes(text) ? "block" : "none";
        });
    });
}

// ==== BOTONES VER MÁS ====
document.querySelectorAll(".btn-ver").forEach(btn => {
    btn.addEventListener("click", () => {
        const title = btn.closest(".card").querySelector("p").textContent;
        alert("Información de: " + title);
    });
});

// ==== DARK MODE ====
document.addEventListener("keydown", (e) => {
    if (e.key === "d") { 
        document.documentElement.classList.toggle("dark");
    }
});

// ==== MENU MOVIL ====
const menuBtn = document.querySelector("header button");
const navLinks = document.querySelectorAll("header a");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.forEach(link => link.classList.toggle("hidden"));
    });
}
