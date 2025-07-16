(() => {
  // src/js/lang.js
  var translations = {
    ar: {
      header: {
        title: "\u0645\u0631\u062D\u0628\u064B\u0627 \u0628\u0643\u0645 \u0641\u064A \u0645\u0648\u0642\u0639\u0646\u0627!",
        menuHome: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629",
        menuAbout: "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0639\u0646\u0627",
        menuContact: "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627"
      },
      footer: {
        copyright: "\u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629."
      },
      main: {
        greeting: "\u0645\u0631\u062D\u0628\u064B\u0627\u060C \u0623\u064A\u0647\u0627 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645!"
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
    setDirection(lang);
  }
  function setDirection(lang) {
    if (lang === "ar") {
      document.documentElement.dir = "rtl";
      document.body.style.textAlign = "right";
    } else {
      document.documentElement.dir = "ltr";
      document.body.style.textAlign = "";
    }
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
  function initLangSelect() {
    const lang = getLanguage();
    applyTranslations(lang);
    setDirection(lang);
    function tryAttach() {
      const langSelect = document.getElementById("lang-select");
      if (langSelect) {
        langSelect.value = lang;
        langSelect.addEventListener("change", (e) => {
          setLanguage(e.target.value);
        });
        return true;
      }
      return false;
    }
    if (!tryAttach()) {
      const observer = new MutationObserver(() => {
        if (tryAttach())
          observer.disconnect();
      });
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }
  document.addEventListener("DOMContentLoaded", initLangSelect);
})();
