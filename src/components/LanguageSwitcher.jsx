import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      <label htmlFor="lang-select" className="text-slate-100 font-semibold">Idioma:</label>
      <select
        id="lang-select"
        onChange={handleChange}
        value={i18n.language}
        className="px-2 py-1 rounded border border-slate-300 bg-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
      >
        <option value="pt">Português</option>
        <option value="en">English</option>
      </select>
    </div>
  );
}

export default LanguageSwitcher;
