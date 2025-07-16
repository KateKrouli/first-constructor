// src/js/lang.js

const translations = {
  ar: {
    header: {
      title: "مرحبًا بكم في موقعنا!",
      menuHome: "الرئيسية",
      menuAbout: "معلومات عنا",
      menuContact: "اتصل بنا"
    },
    footer: {
      copyright: "جميع الحقوق محفوظة."
    },
    main: {
      greeting: "مرحبًا، أيها المستخدم!"
    }
  },
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
  setDirection(lang);
}

function setDirection(lang) {
  if (lang === 'ar') {
    document.documentElement.dir = 'rtl';
    document.body.style.textAlign = 'right';
  } else {
    document.documentElement.dir = 'ltr';
    document.body.style.textAlign = '';
  }
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


function initLangSelect() {
  const lang = getLanguage();
  applyTranslations(lang);
  setDirection(lang);
  function tryAttach() {
    const langSelect = document.getElementById('lang-select');
    if (langSelect) {
      langSelect.value = lang;
      langSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
      });
      return true;
    }
    return false;
  }
  if (!tryAttach()) {
    // Если select еще не в DOM, ждем его появления
    const observer = new MutationObserver(() => {
      if (tryAttach()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }
}

document.addEventListener('DOMContentLoaded', initLangSelect); 
