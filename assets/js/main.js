(() => {
  "use strict";
  const root = document.documentElement;
  const themeButtons = document.querySelectorAll(".theme-toggle");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  function setTheme(theme) {
    if (theme === "light") root.dataset.theme = "light";
    else delete root.dataset.theme;
    themeButtons.forEach(button => {
      button.textContent = theme === "light" ? "☼" : "◐";
      button.setAttribute("aria-label", theme === "light" ? "Ativar tema escuro" : "Ativar tema claro");
      button.title = theme === "light" ? "Ativar tema escuro" : "Ativar tema claro";
    });
  }
  let initial = "dark";
  try { const saved = localStorage.getItem("umemai-theme"); if (saved === "light" || saved === "dark") initial = saved; } catch (_) {}
  setTheme(initial);
  themeButtons.forEach(button => button.addEventListener("click", () => {
    const next = root.dataset.theme === "light" ? "dark" : "light";
    setTheme(next);
    try { localStorage.setItem("umemai-theme", next); } catch (_) {}
  }));

  function setMenu(open) {
    if (!menuButton || !nav) return;
    nav.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  }
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => setMenu(menuButton.getAttribute("aria-expanded") !== "true"));
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", event => { if (event.key === "Escape") setMenu(false); });
    window.addEventListener("resize", () => { if (window.innerWidth > 760) setMenu(false); });
  }
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = String(new Date().getFullYear()));

  const search = document.querySelector("#project-search");
  const cards = [...document.querySelectorAll("#project-catalog [data-category]")];
  const filters = [...document.querySelectorAll("[data-filter]")];
  const count = document.querySelector("#project-count");
  const empty = document.querySelector("#project-empty");
  const reset = document.querySelector("#reset-project-filters");
  let active = "todos";
  function filterProjects() {
    if (!cards.length) return;
    const query = (search?.value || "").trim().toLocaleLowerCase("pt-BR");
    let shown = 0;
    cards.forEach(card => {
      const categoryMatch = active === "todos" || card.dataset.category === active;
      const content = `${card.dataset.search || ""} ${card.textContent || ""}`.toLocaleLowerCase("pt-BR");
      const visible = categoryMatch && (!query || content.includes(query));
      card.hidden = !visible;
      if (visible) shown++;
    });
    if (count) count.textContent = `${shown} ${shown === 1 ? "projeto" : "projetos"}`;
    if (empty) empty.hidden = shown !== 0;
  }
  filters.forEach(button => {
    button.setAttribute("aria-pressed", String(button.classList.contains("active")));
    button.addEventListener("click", () => {
      active = button.dataset.filter || "todos";
      filters.forEach(item => {
        const selected = item === button;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      filterProjects();
    });
  });
  search?.addEventListener("input", filterProjects);
  reset?.addEventListener("click", () => {
    if (search) search.value = "";
    active = "todos";
    filters.forEach(button => {
      const selected = button.dataset.filter === "todos";
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    filterProjects();
    search?.focus();
  });
  filterProjects();
})();