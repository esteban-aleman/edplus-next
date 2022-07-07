import { LOCALES } from 'lib/utils/constants';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import EN from './en.json';
import ES from './es.json';

export const getLanguageDictionary = (
  lang: string
): { [key: string]: string } => {
  switch (lang) {
    case LOCALES.EN:
      return EN;
    default:
      return ES;
  }
};

export const useTranslation = () => {
  const router = useRouter();
  const [dictionary, setDictionary] = useState<{ [key: string]: string }>(
    getLanguageDictionary(router?.locale || LOCALES.ES)
  );

  useEffect(() => {
    setDictionary(getLanguageDictionary(router?.locale || LOCALES.ES));
  }, [router?.locale]);

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
