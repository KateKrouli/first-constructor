(() => {
  // src/js/main.js
  function showArticlesByLang(lang) {
    document.querySelectorAll("[data-lang]").forEach((div) => {
      div.style.display = div.getAttribute("data-lang") === lang ? "" : "none";
    });
  }
  document.addEventListener("DOMContentLoaded", function() {
    const lang = localStorage.getItem("lang") || "ru";
    showArticlesByLang(lang);
    const langSelect = document.getElementById("lang-select");
    if (langSelect) {
      langSelect.addEventListener("change", (e) => {
        showArticlesByLang(e.target.value);
      });
    }
    window.showArticlesByLang = showArticlesByLang;
  });
  if (typeof setLanguage === "function") {
    const origSetLanguage = setLanguage;
    window.setLanguage = function(lang) {
      origSetLanguage(lang);
      showArticlesByLang(lang);
    };
  }
  function startRandomCounter() {
    const el = document.getElementById("random-counter");
    if (!el)
      return;
    function update() {
      el.textContent = Math.floor(Math.random() * (1600 - 1200 + 1)) + 1200;
    }
    update();
    setInterval(update, 5e3);
  }
  document.addEventListener("DOMContentLoaded", startRandomCounter);
})();
