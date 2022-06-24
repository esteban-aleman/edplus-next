import { LOCALES } from 'lib/utils/constants';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import EN from './en.json';
import ES from './es.json';

const getLanguageDictionary = (lang: string): { [key: string]: string } => {
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
    (key: string) => {
      return dictionary?.[key] || key;
    },
    [dictionary]
  );

  return { t };
};
