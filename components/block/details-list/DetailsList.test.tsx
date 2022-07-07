import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DetailsList from './DetailsList';
import { mockDetailsListProps } from './DetailsList.mocks';

describe('DetailsList', () => {
  it('should render a DetailsList', () => {
    render(<DetailsList {...mockDetailsListProps.base} />);

    const detailsTitles = screen.getAllByRole('heading', { level: 2 });
    expect(detailsTitles.length).toBe(mockDetailsListProps.base.details.length);
  });
});
