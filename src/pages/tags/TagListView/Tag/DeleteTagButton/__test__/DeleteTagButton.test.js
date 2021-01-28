import React from "react";
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// target
import DeleteTagButton from "../DeleteTagButton";

// mocks
jest.mock('utils/api/reloadAndRefresh', () => {
  return () => jest.fn();
});

jest.mock('utils/api/useFlashMessageFetchApiData', () => {
  return () => jest.fn();
});

describe("src/pages/tags/TaskListView/Tag/DeleteTagButton/__test__/DeleteTagButton.test.js", () => {
  describe('DeleteTagButton', () => {
    it('should render the button, and helper functions should be called to be ready for the onClick', () => {
      // Arrange
      const tagId = 'tagId';
      const isSelected = true;
      
      // Act
      const target = render(<DeleteTagButton tagId={tagId} isSelected={isSelected} />);

      // Assert
      expect(target.getByTestId('delete-tag-button')).toBeInTheDocument();
    });
  });
});
