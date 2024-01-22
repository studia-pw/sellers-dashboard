import { useTranslation } from "react-i18next";

export default function LanguageSwitchButton() {
  const supportedLanguages = {
    en: { nativeName: "English" },
    pl: { nativeName: "Polish" },
  };

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language).then();
  }

  return (
    <div>
      {Object.keys(supportedLanguages).map((language) => (
        <button
          type="submit"
          key={language}
          onClick={() => changeLanguage(language)}
          disabled={i18n.resolvedLanguage === language}
        >
          {supportedLanguages[language].nativeName}
        </button>
      ))}
    </div>


  );
}
