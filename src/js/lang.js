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
      title: "Top Türkiye players",
      digit1: "Player 1",
      digit2: "Player 2",
      digit3: "Player 3",
    },
    secondary: {
      button: "Bet Now"
    },
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
        greeting: { html: "<span>Site engellendi,</span> ama kuponun güvende" },
        description: "Çalışan bağlantıyı senin için bulduk — üstelik hesabına özel bir bonus hazırladık.",
        button: "Bonusu Al",
        bonus: "+100 ₺ bonus",
        erroreSpan: "Engellendi",
        erroreSpan2: "BTK kararına göre hizmete erişim kısıtlandı."
      },
    xbet: {
      title: "Güçlü Markayla Güçlü Ortaklıklar",
      description: "1xBet, dünya çapında tanınan kulüplerin, sporcuların ve teknoloji markalarının güvenilir sponsoru ve iş ortağıdır."
    },
    players: {
      title: "Top Türkiye oyuncuları",
      digit1: "Oyuncu 1",
      digit2: "Oyuncu 2",
      digit3: "Oyuncu 3",
    },
    secondary: {
      button: "Bahis Yap"
    },
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
  // Players
  const playersTitleEl = document.querySelector('[data-i18n="players.title"]');
  if (playersTitleEl) playersTitleEl.textContent = t.players.title;
  const playersDigit1El = document.querySelector('[data-i18n="players.digit1"]');
  if (playersDigit1El) playersDigit1El.textContent = t.players.digit1;
  const playersDigit2El = document.querySelector('[data-i18n="players.digit2"]');
  if (playersDigit2El) playersDigit2El.textContent = t.players.digit2;
  const playersDigit3El = document.querySelector('[data-i18n="players.digit3"]');
  if (playersDigit3El) playersDigit3El.textContent = t.players.digit3;
  const secondaryButtonEl = document.querySelector('[data-i18n="secondary.button"]');
  if (secondaryButtonEl) secondaryButtonEl.textContent = t.secondary.button;
  // Header
  document.querySelector('[data-i18n="header.title"]').textContent = t.header.title;
  document.querySelector('[data-i18n="header.menuHome"]').textContent = t.header.menuHome;
  document.querySelector('[data-i18n="header.menuAbout"]').textContent = t.header.menuAbout;
  document.querySelector('[data-i18n="header.menuContact"]').textContent = t.header.menuContact;
  // Footer
  document.querySelector('[data-i18n="footer.copyright"]').textContent = t.footer.copyright;
  // Main
  const greetingEl = document.querySelector('[data-i18n="main.greeting"]');
  if (greetingEl) {
    if (typeof t.main.greeting === 'object' && t.main.greeting.html) {
      greetingEl.innerHTML = t.main.greeting.html;
    } else {
      greetingEl.textContent = t.main.greeting;
    }
  }
  const descriptionEl = document.querySelector('[data-i18n="main.description"]');
  if (descriptionEl) descriptionEl.textContent = t.main.description;
  const buttonEl = document.querySelector('[data-i18n="main.button"]');
  if (buttonEl) buttonEl.textContent = t.main.button;
  const bonusEl = document.querySelector('[data-i18n="main.bonus"]');
  if (bonusEl) bonusEl.textContent = t.main.bonus;
  document.querySelector('[data-i18n="main.erroreSpan"]').textContent = t.main.erroreSpan;
  document.querySelector('[data-i18n="main.erroreSpan2"]').textContent = t.main.erroreSpan2;

  // XBet
  const xbetTitleEl = document.querySelector('[data-i18n="xbet.title"]');
  if (xbetTitleEl) xbetTitleEl.textContent = t.xbet.title;
  const xbetDescEl = document.querySelector('[data-i18n="xbet.description"]');
  if (xbetDescEl) xbetDescEl.textContent = t.xbet.description;
} 


document.addEventListener('DOMContentLoaded', function() {
  const lang = getLanguage();
  applyTranslations(lang);
  setDirection(lang);
});

// Экспортируем функцию для глобального доступа (кастомный дропдаун)
window.setLanguage = setLanguage;
