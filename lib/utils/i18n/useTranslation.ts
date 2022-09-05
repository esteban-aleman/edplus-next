import { LOCALES } from 'lib/utils/constants';
import { useCallback, useEffect, useState } from 'react';
import EN from './en.json';
import ES from './es.json';

export const getLanguageDictionary = (
  lang: string | string[]
): { [key: string]: string } => {
  switch (lang) {
    case LOCALES.EN:
      return EN;
    default:
      return ES;
  }
};

// Default locale is ES
export const useTranslation = (locale = 'es') => {
  const [dictionary, setDictionary] = useState<{ [key: string]: string }>(
    getLanguageDictionary(locale)
  );

  useEffect(() => {
    setDictionary(getLanguageDictionary(locale));
  }, [locale]);

  const t = useCallback(
    (key?: string, ...params: string[]) => {
      if (!key) {
        return '';
      }
      if (params) {
        const translation = dictionary?.[key] || key;
        return params.reduce((t, value, index) => {
          return t.replace(`{${index}}`, value);
        }, translation);
      }
      return dictionary?.[key] || key;
    },
    [dictionary]
  );

  return { t };
};
