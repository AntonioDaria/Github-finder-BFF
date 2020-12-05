import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import SubmissionForm from './SubmissionForm.js'
import { act } from "react-dom/test-utils";
import { findFavLanguage } from '../services/search.service'

jest.mock('../services/search.service');

describe('Submission Form component', () => {
  let container;

  beforeEach(() => {
    ({ container } = renderSubmissionForm());
  });

  it('should match the snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  describe('OnSubmit', () => {
    it('should call findFavLanguage when clicking the submit button.', async () => {
      let getAllByText;
      ({ getAllByText } = renderSubmissionForm());

      const button = getAllByText("Search User");

      act(() => {
        fireEvent.click(button[0]);
      });

      expect(findFavLanguage).toHaveBeenCalledTimes(1);

    });
  });
});

const renderSubmissionForm = () => {
  return render(
    <SubmissionForm />
  );
};