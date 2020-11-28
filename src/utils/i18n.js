import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import localesResourse from "../../assets/locales";
import {NativeModules} from 'react-native';
import DeviceInfo from "react-native-device-info";

export function i18nUtil(languageType) {
  const languageDetector = {
    type: "languageDetector",
    detect: () => languageType,
    init: () => {},
    cacheUserLanguage: () => {}
  };
  
  i18n
    .use(reactI18nextModule)
    .use(languageDetector)
    .init({
      resources: localesResourse,
      fallbackLng: "vi",
      debug: true,
      interpolation: {
        escapeValue: false
      },
      react: {
        wait: true
      }
    });
  
    return i18n;
}