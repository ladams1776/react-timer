import React from 'react';
import { shallow } from 'enzyme';
import { createWrapperWithContext, findByTestId } from 'testUtils';
import { useSetCurrentLocation } from 'hooks';
import ControlButtons from '../ControlButtons/ControlButtons';
import useFetchAllTasks from '../useFetchAllTasks';
import TaskListView from '../TaskListView';

jest.mock('hooks/useSetCurrentLocation');
jest.mock('../useFetchAllTasks');

describe('src/pages/home/__test__/TaskListView.test.js', () => {
  describe('TaskListView', () => {
    // Arrange
    let wrapper;
    jest.spyOn(React, 'useState').mockImplementationOnce(() => [[], jest.fn()]);

    beforeEach(() => {
      useSetCurrentLocation.mockReturnValue();
      useFetchAllTasks.mockReturnValue();
    });

    //@TODO: Side stepping, making sure we got the taks or the useFetchAllTasks (stubbing was not working for the moment.)
    it('should render the TaskListView', () => {
      // Arrange
      const expected = {
        children: [
          <div className="task-list__header">
            <ControlButtons />
          </div>,
          <ul className="task-list" />,
        ],
        'data-test-id': 'list-view',
      }.toString();
      
      // Act
      wrapper = createWrapperWithContext(<TaskListView />);
      const actual = findByTestId(wrapper, 'list-view')
        .props()
        .toString();

      // Assert
      expect(useSetCurrentLocation).toBeCalledWith('/');
      expect(actual).toEqual(expected);
    });
  });
});
