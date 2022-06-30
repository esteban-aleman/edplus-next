import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DEFAULT } from 'lib/utils/constants';
import { getLanguageDictionary } from 'lib/utils/i18n/useTranslation';
import Header from './Header';
import { mockHeaderProps } from './Header.mocks';

const dictionary = getLanguageDictionary(DEFAULT.locale);

describe('Header rendering', () => {
  it('renders a Header with the logo', () => {
    render(<Header {...mockHeaderProps.base} />);

    const base = screen.getByAltText(dictionary['alt-logo']);
    expect(base).toBeInTheDocument();
  });
});
