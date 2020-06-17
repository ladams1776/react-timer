import React from 'react';
import { shallow } from 'enzyme';
import { createWrapperWithContext, findByTestId } from 'testUtils';
import CreateOrEditTaskPage from '../CreateOrEditTaskPage';
import TagContextProvider from '../contexts/TagContext';
import TimeContextProvider from '../contexts/TimeContext';
import AddTaskForm from '../form/AddTaskForm';

describe('src/pages/createOrEditTask/CreateOrEditTaskPage.test.js', () => {
  describe('CreateOrEditTaskPage', () => {
    let wrapper;

    it('should render', () => {
      const match = {
        params: {
          id: 1,
        },
      };
      const expected = {
        children: (
          <TimeContextProvider>
            <AddTaskForm taskId={1} />
          </TimeContextProvider>
        ),
      };
      wrapper = createWrapperWithContext(
        <CreateOrEditTaskPage match={match} />,
      );
      expect(wrapper.props()).toEqual(expected);
    });
  });
});
