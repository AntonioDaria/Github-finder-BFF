import React from 'react';
import { render } from '@testing-library/react';
import SubmissionForm from './SubmissionForm.js'

describe('Submission Form component', () => {
    let container;

    beforeEach(() => {
      ({ container} = renderHeader());
    });

    it('should match the snapshot', () => {
        expect(container).toMatchSnapshot();
    });
});

const renderHeader= () => {
    return render(
      <SubmissionForm>
        
      </SubmissionForm>
    );
  };