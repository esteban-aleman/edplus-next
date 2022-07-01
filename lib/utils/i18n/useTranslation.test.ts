import { renderHook } from '@testing-library/react';
import EN from './en.json';
import ES from './es.json';
import { useTranslation } from './useTranslation';

jest.mock('next/router', () => ({
  useRouter: jest
    .fn()
    .mockImplementationOnce(() => ({
      locale: 'es',
    }))
    .mockImplementationOnce(() => ({
      locale: 'en',
    })),
}));

describe('useTranslation', () => {
  test('should return default dictionary', () => {
    const { result } = renderHook(() => useTranslation());
    const { t } = result.current;

    expect(t('alternative-language')).toBe(ES['alternative-language']);
  });

  test('should return alternative dictionary', () => {
    const { result } = renderHook(() => useTranslation());
    const { t } = result.current;

    expect(t('alternative-language')).toBe(EN['alternative-language']);
  });
});
