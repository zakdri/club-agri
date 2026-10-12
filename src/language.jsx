import React, { createContext, useContext, useEffect, useState } from 'react';
import '../assets/club-data.js';

export const data = globalThis.ClubData;
const LanguageContext = createContext(null);

export function translate(value, language) {
  if (!value || typeof value[language] !== 'string') throw new Error(`Missing ${language} translation`);
  return value[language];
}

export function LanguageProvider({ children, initialLanguage = 'fr', page = 'home' }) {
  const [language, setLanguage] = useState(initialLanguage);
  useEffect(() => {
    try {
      const saved = localStorage.getItem('club-agri.language');
      if (data.languages.includes(saved)) setLanguage(saved);
    } catch { /* Storage is optional. */ }
  }, []);
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.title = `Club AGRI | ${translate(data.navigation.find(item => item.id === page).label, language)}`;
    document.querySelector('meta[name="description"]').content = translate(data.text.description, language);
  }, [language, page]);
  const changeLanguage = next => {
    if (!data.languages.includes(next)) return;
    setLanguage(next);
    try { localStorage.setItem('club-agri.language', next); } catch { /* Optional. */ }
  };
  return <LanguageContext.Provider value={{ language, changeLanguage, tr: value => translate(value, language), t: key => translate(data.text[key], language) }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);

// Isolate numbers and official Latin names without forcing an Arabic sentence LTR.
export function Text({ children }) {
  return String(children).split(/(Club AGRI|FOS-Agri|\d+(?:[+.,]\d*|\s?%)?)/g).map((part, index) =>
    /^(Club AGRI|FOS-Agri|\d)/.test(part) ? <bdi dir="ltr" key={index}>{part}</bdi> : part);
}

export function T({ id }) {
  const { t } = useLanguage();
  return <Text>{t(id)}</Text>;
}
