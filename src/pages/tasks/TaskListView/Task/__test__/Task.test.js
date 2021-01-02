import React from 'react';
import { createWrapperWithContext } from 'testUtils';
import Task from '../Task';

describe('src/pages/tasks/TaskListView/Task/__test__/Task.test.js', () => {
  let wrapper;

  describe('Task', () => {
    it('should display Task when one is present', () => {
      const context = {
        projects: [{ label: 'label of project' }],
      };

      wrapper = createWrapperWithContext(
        <li key="Need to have a unique key">
          <Task
            task={{
              _id: 'taskId',
              contractId: 0,
              description: 'this is a wonderful description',
            }}
          />
        </li>,
        context,
      );

      expect(wrapper).toBeTruthy();
    });
  });
});
