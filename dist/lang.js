(() => {
  // src/js/lang.js
  var translations = {
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
        title: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u043D\u0430\u0448 \u0441\u0430\u0439\u0442!",
        menuHome: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
        menuAbout: "\u041E \u043D\u0430\u0441",
        menuContact: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"
      },
      footer: {
        copyright: "\u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B."
      },
      main: {
        greeting: "\u041F\u0440\u0438\u0432\u0435\u0442, \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C!"
      }
    }
  };
  function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    applyTranslations(lang);
  }
  function getLanguage() {
    return localStorage.getItem("lang") || "ru";
  }
  function applyTranslations(lang) {
    const t = translations[lang];
    if (!t)
      return;
    document.querySelector('[data-i18n="header.title"]').textContent = t.header.title;
    document.querySelector('[data-i18n="header.menuHome"]').textContent = t.header.menuHome;
    document.querySelector('[data-i18n="header.menuAbout"]').textContent = t.header.menuAbout;
    document.querySelector('[data-i18n="header.menuContact"]').textContent = t.header.menuContact;
    document.querySelector('[data-i18n="footer.copyright"]').textContent = t.footer.copyright;
    document.querySelector('[data-i18n="main.greeting"]').textContent = t.main.greeting;
  }
  document.addEventListener("DOMContentLoaded", () => {
    const lang = getLanguage();
    applyTranslations(lang);
    const langSelect = document.getElementById("lang-select");
    if (langSelect) {
      langSelect.value = lang;
      langSelect.addEventListener("change", (e) => {
        setLanguage(e.target.value);
      });
    }
  });
})();
