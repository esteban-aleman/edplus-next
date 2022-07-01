import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { DEFAULT } from 'lib/utils/constants';
import { getLanguageDictionary } from 'lib/utils/i18n/useTranslation';
import Footer from './Footer';
import { mockFooterProps } from './Footer.mocks';

const dictionary = getLanguageDictionary(DEFAULT.locale);
describe('Footer', () => {
  it('should render a Footer with logo', () => {
    render(<Footer {...mockFooterProps} />);

    const base = screen.getByAltText(dictionary['alt-logo']);
    expect(base).toBeInTheDocument();
  });

  it('should render all the columns in the Footer', () => {
    render(<Footer {...mockFooterProps} />);

    const columns = screen.getAllByRole('list');
    expect(columns.length).toBe(mockFooterProps.columns.length);
  });
});
