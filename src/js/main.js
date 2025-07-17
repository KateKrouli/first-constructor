// Показывать статьи только для выбранного языка
function showArticlesByLang(lang) {
  document.querySelectorAll('[data-lang]').forEach(div => {
    div.style.display = div.getAttribute('data-lang') === lang ? '' : 'none';
  });
}

// Инициализация показа статей по языку
document.addEventListener('DOMContentLoaded', function() {
  const lang = localStorage.getItem('lang') || 'ru';
  showArticlesByLang(lang);
  // Следим за сменой языка
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.addEventListener('change', e => {
      showArticlesByLang(e.target.value);
    });
  }
  // На случай смены языка не через select
  window.showArticlesByLang = showArticlesByLang;
});

// Переопределяем setLanguage, если он есть
if (typeof setLanguage === 'function') {
  const origSetLanguage = setLanguage;
  window.setLanguage = function(lang) {
    origSetLanguage(lang);
    showArticlesByLang(lang);
  };
}

// Счетчик с рандомным числом
function startRandomCounter() {
  const el = document.getElementById('random-counter');
  if (!el) return;
  function update() {
    el.textContent = Math.floor(Math.random() * (1600 - 1200 + 1)) + 1200;
  }
  update();
  setInterval(update, 5000);
}

document.addEventListener('DOMContentLoaded', startRandomCounter);