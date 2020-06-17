import React from 'react';
import { shallow } from 'enzyme';
import { createWrapperWithContext, findByTestId } from 'testUtils';
import AddTaskForm from '../AddTaskForm';
import { TextAreaAdapter } from 'components';
import { useBackButtonListener, useSetCurrentLocation } from 'hooks';
import {
  useFetchTaskById,
  useTagContext,
  useFetchTags,
  useSubmit,
  useFormReducer,
} from '../../hooks';
import Timer from '../../timer/Timer';
import ProjectDropDown from '../../projectDropdown/ProjectDropdown';
import TagMultiSelect from '../../tagMultiSelect/TagMultiSelect';

jest.mock('hooks/useBackButtonListener/useBackButtonListener');
jest.mock('hooks/useSetCurrentLocation');
jest.mock('../../hooks/useFetchTaskById/useFetchTaskById');
jest.mock('../../hooks/useTagContext');
jest.mock('../../hooks/useFetchTags');
jest.mock('../../hooks/useSubmit/useSubmit');
jest.mock('../../hooks/useFormReducer');

describe('src/pages/createOrEditTask/form/__test__/AddTaskForm.test.js', () => {
  describe('AddTaskForm', () => {
    // Arrange
    let wrapper;

    const taskId = 1;
    const state = {
      description: 'describe',
      tags: [{ id: 1 }],
      project: 1,
    };
    const dispatch = jest.fn();
    const onProjectChange = jest.fn();
    const onTextChange = jest.fn();
    const onTagChange = jest.fn();

    const allTags = [{ id: 1 }];

    const onSubmit = jest.fn();

    beforeEach(() => {
      useFormReducer.mockReturnValue([
        state,
        dispatch,
        onProjectChange,
        onTextChange,
        onTagChange,
      ]);
      useTagContext.mockReturnValue(allTags);
      useSubmit.mockReturnValue(onSubmit);
    });

    it('should display', () => {
      // Arrange
      const expected = {
        children: [
          <Timer />,
          <ProjectDropDown onChange={onProjectChange} value={1} />,
          <TagMultiSelect onChange={onTagChange} tags={allTags} />,
          <TextAreaAdapter description="describe" setDescription={onTextChange} />,
          <button className="submit" onClick={onSubmit} type="submit" data-test-id="submit">
            Submit
          </button>,
        ],
        className: 'taskForm',
        'data-test-id': 'form',
        method: 'PUT',
      };

      // Act
      wrapper = createWrapperWithContext(<AddTaskForm taskId={taskId} />);

      // Assert
      expect(findByTestId(wrapper, 'form').props()).toEqual(expected);
    });

    describe('#onSubmit', () => {
      it('should invoke onSubmit mock', () => {
        // Arrange

        // Act
        wrapper = shallow(<AddTaskForm taskId={taskId} />);
        wrapper.find('form').simulate('submit');
        findByTestId(wrapper, 'submit').props().onClick();
        
        // Assert
        expect(onSubmit).toHaveBeenCalledTimes(1);
      });
    });
  });
});
