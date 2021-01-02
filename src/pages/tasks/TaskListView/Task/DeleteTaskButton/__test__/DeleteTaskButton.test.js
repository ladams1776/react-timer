import React from "react";
import { fetchApiData } from 'utils';
import useDispatch from '../useDispatch';
import { shallow } from 'enzyme';
import { findByTestId } from "testUtils";
import DeleteTaskButton from "../DeleteTaskButton";

jest.mock('utils/api/fetchApiData/fetchApiData');
jest.mock('../useDispatch');

describe("src/pages/tasks/TaskListView/Task/DeleteTaskButton/__test__/DeleteTaskButton.test.js", () => {
  describe('DeleteTaskButton', () => {
    // Arrange
    let wrapper;

    it('should render the button when tasks are available', () => {
      // Arrange

      // Act
      wrapper = shallow(<DeleteTaskButton taskId={1} />);

      // Assert
      expect(findByTestId(wrapper, 'delete-task-button')).toHaveLength(1);
    });

    describe('#handleDownload', () => {
      // Arrange
      const dispatch = jest.fn();

      beforeEach(() => {
        useDispatch.mockReturnValue(dispatch);
      });

      it("should call 'fetchApiData' with `dispatch' function", async () => {
        // Arrange
        const taskId = 1;
        wrapper = shallow(<DeleteTaskButton taskId={taskId} />);

        // Act
        await findByTestId(wrapper, 'delete-task-button').props().onClick({ preventDefault: () => { } });

        // Assert
        expect(fetchApiData).toHaveBeenNthCalledWith(1, `task/${taskId}`, { "method": "DELETE" }, dispatch);
      });
    });
  });
});
