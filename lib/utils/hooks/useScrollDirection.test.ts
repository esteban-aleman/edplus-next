import { act, fireEvent, renderHook } from '@testing-library/react';
import useScrollDirection from './useScrollDirection';

window.onscroll = jest
  .fn()
  .mockImplementationOnce(() => {
    window.pageYOffset = 100;
  })
  .mockImplementationOnce(() => {
    window.pageYOffset = 0;
  });

describe('useScrollDirection', () => {
  test('should reflect scroll changes', () => {
    const { result } = renderHook(() => useScrollDirection());
    expect(result.current).toBeTruthy();

    act(() => {
      fireEvent.scroll(window);
    });
    expect(result.current).toBeFalsy();

    act(() => {
      fireEvent.scroll(window);
    });
    expect(result.current).toBeTruthy();
  });
});
