import React from "react";
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { useBrowserHistory } from 'hooks';

// target
import Tag from '../Tag';
import DeleteTagButton from "../DeleteTagButton/DeleteTagButton";

// mock components
jest.mock('hooks/useBrowserHistory');
jest.mock('../DeleteTagButton/DeleteTagButton', () => {
  return () => <div>DeleteTagButton</div>
});

describe('src/pages/tasks/TaskListView/Tag/__test__/Tag.test.js', () => {
  describe('Tag', () => {
    it('should display Tag when one is present', () => {
      // Arrange
      const id = 'id';
      const name = 'name';
      const selectedId = 'selectedId';
      const setTimeSpy = jest.spyOn(Storage.prototype, 'setItem');

      const history = { push: jest.fn() };
      useBrowserHistory.mockReturnValue(history);

      // Act
      const target = render(<Tag _id={id} name={name} selectedId={selectedId} />);
    
      // Assert
      expect(target.getByTestId("tag")).toBeInTheDocument();
    });
  });
});
