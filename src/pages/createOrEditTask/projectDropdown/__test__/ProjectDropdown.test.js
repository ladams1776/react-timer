import React from 'react';
import ProjectDropdown from '../ProjectDropdown';
import { useFetchProjectOptions } from 'hooks';
import { shallow, ShallowWrapper } from 'enzyme';
import { createWrapperWithContext, findByTestId } from 'testUtils';

jest.mock('hooks/useFetchProjectOptions');

describe('src/pages/createOrEditTask/projectDropdown/__test__/ProjectDropdown.test.js', () => {
  describe('ProjectDropdown', () => {
      // Arrange
    let wrapper;
    const projects = [
      {
        label: 'label',
        value: 'value',
      },
    ];

    beforeEach(() => {
      useFetchProjectOptions.mockReturnValue(projects);
    });

    it('should return the specific tag', () => {
      // Arrange

      // Act
      wrapper = createWrapperWithContext(<ProjectDropdown />);

      // Assert
      expect(wrapper.length).toEqual(1);
    });
  });
});
