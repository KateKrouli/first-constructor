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
        greeting: { html: "<span>Hello, user!</span> Welcome to the site." },
        description: "This is the main content area.",
        button: "Get Bonus",
        bonus: "Your bonus is active!",
        erroreSpan: "Test",
        erroreSpan2: "Test"
      },
      xbet: {
        title: "Strong Partnerships with a Strong Brand",
        description: "1xBet is a trusted sponsor and business partner of world-renowned clubs, athletes, and technology brands."
      },
      players: {
        title: "Top T\xFCrkiye players",
        digit1: "Player 1",
        digit2: "Player 2",
        digit3: "Player 3"
      },
      secondary: {
        button: "Bet Now"
      }
    },
    tr: {
      header: {
        title: "Sitemize ho\u015F geldiniz!",
        menuHome: "Ana Sayfa",
        menuAbout: "Hakk\u0131m\u0131zda",
        menuContact: "\u0130leti\u015Fim"
      },
      footer: {
        copyright: "T\xFCm haklar\u0131 sakl\u0131d\u0131r."
      },
      main: {
        greeting: { html: "<span>Site engellendi,</span> ama kuponun g\xFCvende" },
        description: "\xC7al\u0131\u015Fan ba\u011Flant\u0131y\u0131 senin i\xE7in bulduk \u2014 \xFCstelik hesab\u0131na \xF6zel bir bonus haz\u0131rlad\u0131k.",
        button: "Bonusu Al",
        bonus: "+100 \u20BA bonus",
        erroreSpan: "Engellendi",
        erroreSpan2: "BTK karar\u0131na g\xF6re hizmete eri\u015Fim k\u0131s\u0131tland\u0131."
      },
      xbet: {
        title: "G\xFC\xE7l\xFC Markayla G\xFC\xE7l\xFC Ortakl\u0131klar",
        description: "1xBet, d\xFCnya \xE7ap\u0131nda tan\u0131nan kul\xFCplerin, sporcular\u0131n ve teknoloji markalar\u0131n\u0131n g\xFCvenilir sponsoru ve i\u015F orta\u011F\u0131d\u0131r."
      },
      players: {
        title: "Top T\xFCrkiye oyuncular\u0131",
        digit1: "Oyuncu 1",
        digit2: "Oyuncu 2",
        digit3: "Oyuncu 3"
      },
      secondary: {
        button: "Bahis Yap"
      }
    }
  };
  function setLanguage(lang) {
    localStorage.setItem("lang", lang);
    applyTranslations(lang);
    setDirection(lang);
  }
  function setDirection(lang) {
    document.documentElement.dir = "ltr";
    document.body.style.textAlign = "";
  }
  function getLanguage() {
    return localStorage.getItem("lang") || "en";
  }
  function applyTranslations(lang) {
    const t = translations[lang];
    if (!t)
      return;
    const playersTitleEl = document.querySelector('[data-i18n="players.title"]');
    if (playersTitleEl)
      playersTitleEl.textContent = t.players.title;
    const playersDigit1El = document.querySelector('[data-i18n="players.digit1"]');
    if (playersDigit1El)
      playersDigit1El.textContent = t.players.digit1;
    const playersDigit2El = document.querySelector('[data-i18n="players.digit2"]');
    if (playersDigit2El)
      playersDigit2El.textContent = t.players.digit2;
    const playersDigit3El = document.querySelector('[data-i18n="players.digit3"]');
    if (playersDigit3El)
      playersDigit3El.textContent = t.players.digit3;
    const secondaryButtonEl = document.querySelector('[data-i18n="secondary.button"]');
    if (secondaryButtonEl)
      secondaryButtonEl.textContent = t.secondary.button;
    document.querySelector('[data-i18n="header.title"]').textContent = t.header.title;
    document.querySelector('[data-i18n="header.menuHome"]').textContent = t.header.menuHome;
    document.querySelector('[data-i18n="header.menuAbout"]').textContent = t.header.menuAbout;
    document.querySelector('[data-i18n="header.menuContact"]').textContent = t.header.menuContact;
    document.querySelector('[data-i18n="footer.copyright"]').textContent = t.footer.copyright;
    const greetingEl = document.querySelector('[data-i18n="main.greeting"]');
    if (greetingEl) {
      if (typeof t.main.greeting === "object" && t.main.greeting.html) {
        greetingEl.innerHTML = t.main.greeting.html;
      } else {
        greetingEl.textContent = t.main.greeting;
      }
    }
    const descriptionEl = document.querySelector('[data-i18n="main.description"]');
    if (descriptionEl)
      descriptionEl.textContent = t.main.description;
    const buttonEl = document.querySelector('[data-i18n="main.button"]');
    if (buttonEl)
      buttonEl.textContent = t.main.button;
    const bonusEl = document.querySelector('[data-i18n="main.bonus"]');
    if (bonusEl)
      bonusEl.textContent = t.main.bonus;
    document.querySelector('[data-i18n="main.erroreSpan"]').textContent = t.main.erroreSpan;
    document.querySelector('[data-i18n="main.erroreSpan2"]').textContent = t.main.erroreSpan2;
    const xbetTitleEl = document.querySelector('[data-i18n="xbet.title"]');
    if (xbetTitleEl)
      xbetTitleEl.textContent = t.xbet.title;
    const xbetDescEl = document.querySelector('[data-i18n="xbet.description"]');
    if (xbetDescEl)
      xbetDescEl.textContent = t.xbet.description;
  }
  document.addEventListener("DOMContentLoaded", function() {
    const lang = getLanguage();
    applyTranslations(lang);
    setDirection(lang);
  });
  window.setLanguage = setLanguage;
})();
