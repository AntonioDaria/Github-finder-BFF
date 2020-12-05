import React from 'react';
import { render } from '@testing-library/react';
import Results from './Results.js'

describe('Results component', () => {
    let container;

    beforeEach(() => {
      ({ container} = renderResult());
    });

    it('should match the snapshot', () => {
        expect(container).toMatchSnapshot();
    });
});

const renderResult = () => {
    return render(
      <Results />
    );
  };