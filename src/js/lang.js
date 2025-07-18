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
        greeting: "Hello, user!", 
        erroreSpan: "Test",
        erroreSpan2: "Test"
      }
  },
  tr: {
    header: {
      title: "Sitemize hoş geldiniz!",
      menuHome: "Ana Sayfa",
      menuAbout: "Hakkımızda",
      menuContact: "İletişim"
    },
    footer: {
      copyright: "Tüm hakları saklıdır."
    },
    main: {
        greeting: "", 
        erroreSpan: "Engellendi",
        erroreSpan2: "BTK kararına göre hizmete erişim kısıtlandı."
      }
  }
};



function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
  setDirection(lang);
}


function setDirection(lang) {
  document.documentElement.dir = 'ltr';
  document.body.style.textAlign = '';
}


function getLanguage() {
  return localStorage.getItem('lang') || 'en';
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
  const erroreSpan = document.querySelector('[data-i18n="main.erroreSpan"]');
  if (erroreSpan) erroreSpan.textContent = t.main.erroreSpan;
  const erroreSpan2 = document.querySelector('[data-i18n="main.erroreSpan2"]');
  if (erroreSpan2) erroreSpan2.textContent = t.main.erroreSpan2;
} 


document.addEventListener('DOMContentLoaded', function() {
  const lang = getLanguage();
  applyTranslations(lang);
  setDirection(lang);
});

// Экспортируем функцию для глобального доступа (кастомный дропдаун)
window.setLanguage = setLanguage;
