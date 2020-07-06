import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Search from '../../components/Search';

const onSubmit = jest.fn();

describe('PlanetsDetails', () => {
  it('Should search for a planet', () => {
    const value = 'planeta';

    const { getByLabelText, getByTestId } = render(
      <Search loading={false} onSubmit={onSubmit} />
    );

    const searchInput = getByLabelText('Search for planet:');
    const button = getByTestId('submit-button');

    fireEvent.change(searchInput, { target: { value } });
    fireEvent.click(button);

    expect(onSubmit).toHaveBeenCalledWith(value);
  });
});
