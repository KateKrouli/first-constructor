// src/js/lang.js

const translations = {
  en: {
    header: {
      title: "Welcome to our site!",
      menuHome: "Home",
      menuAbout: "About",
      menuContact: "Contact"
    },
    footer: {
      copyright: "All rights reserved."
    },
    main: {
      greeting: "Hello, user!"
    }
  },
  ru: {
    header: {
      title: "Добро пожаловать на наш сайт!",
      menuHome: "Главная",
      menuAbout: "О нас",
      menuContact: "Контакты"
    },
    footer: {
      copyright: "Все права защищены."
    },
    main: {
      greeting: "Привет, пользователь!"
    }
  }
};

function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
}

function getLanguage() {
  return localStorage.getItem('lang') || 'ru';
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;
  // Header
  document.querySelector('[data-i18n="header.title"]').textContent = t.header.title;
  document.querySelector('[data-i18n="header.menuHome"]').textContent = t.header.menuHome;
  document.querySelector('[data-i18n="header.menuAbout"]').textContent = t.header.menuAbout;
  document.querySelector('[data-i18n="header.menuContact"]').textContent = t.header.menuContact;
  // Footer
  document.querySelector('[data-i18n="footer.copyright"]').textContent = t.footer.copyright;
  // Main
  document.querySelector('[data-i18n="main.greeting"]').textContent = t.main.greeting;
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = getLanguage();
  applyTranslations(lang);
  const langSelect = document.getElementById('lang-select');
  if (langSelect) {
    langSelect.value = lang;
    langSelect.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
});
