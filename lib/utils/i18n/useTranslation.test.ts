import { renderHook } from '@testing-library/react';
import { LOCALES } from '../constants';
import EN from './en.json';
import ES from './es.json';
import { useTranslation } from './useTranslation';

describe('useTranslation', () => {
  test('should return default dictionary', () => {
    const { result } = renderHook(() => useTranslation());
    const { t } = result.current;

    expect(t('alternative-language')).toBe(ES['alternative-language']);
  });

  test('should return alternative dictionary', () => {
    const { result } = renderHook(() => useTranslation(LOCALES.EN));
    const { t } = result.current;

    expect(t('alternative-language')).toBe(EN['alternative-language']);
  });
});
