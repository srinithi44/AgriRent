import translations from '../utils/translations';

const useLanguage = () => {
  const lang = localStorage.getItem('selectedLanguage') || 'en';
  const t = translations[lang] || translations.en;
  return t;
};

export default useLanguage;
