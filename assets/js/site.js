// Utilidades compartidas por todas las páginas del sitio:
// persistencia del idioma elegido + footer legal (brokerage / Equal Housing / privacidad).

var SITE_LANG_KEY = 'ab_lang';
var SITE_LANG_ORDER = ['en', 'es', 'pt'];

function getSavedLang(fallback){
  try {
    var v = localStorage.getItem(SITE_LANG_KEY);
    return (v && SITE_LANG_ORDER.indexOf(v) !== -1) ? v : (fallback || 'es');
  } catch (e){
    return fallback || 'es';
  }
}

function saveLang(lang){
  try { localStorage.setItem(SITE_LANG_KEY, lang); } catch (e){ /* localStorage no disponible */ }
}

var SITE_FOOTER_I18N = {
  en: {
    eho: "Equal Housing Opportunity",
    brokerage: "LIFESTYLE INTERNATIONAL REALTY LLC",
    privacy: "Privacy Policy"
  },
  es: {
    eho: "Igualdad de Oportunidad de Vivienda",
    brokerage: "LIFESTYLE INTERNATIONAL REALTY LLC",
    privacy: "Política de privacidad"
  },
  pt: {
    eho: "Igualdade de Oportunidade de Moradia",
    brokerage: "LIFESTYLE INTERNATIONAL REALTY LLC",
    privacy: "Política de privacidade"
  }
};

function renderSiteFooter(lang){
  var slot = document.getElementById('siteFooter');
  if (!slot) return;
  var t = SITE_FOOTER_I18N[lang] || SITE_FOOTER_I18N.es;
  slot.innerHTML =
    '<div class="footer-eho">' +
      '<img src="/assets/img/equal-housing-icon.png" alt="Equal Housing Opportunity" class="eho-icon">' +
      '<span>' + t.eho + '</span>' +
    '</div>' +
    '<p class="footer-brokerage">' + t.brokerage + '</p>' +
    '<p class="footer-links"><a href="/privacidad/">' + t.privacy + '</a></p>';
}
