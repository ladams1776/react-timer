import React from 'react';
import { shallow } from 'enzyme';
import { createWrapperWithContext, findByTestId } from 'testUtils';
import MultiSelectAdapter from '../MultiSelectAdapter';

describe('src/components/__test__/MultiSelectAdapter.test.js', () => {
  describe('MultiSelectAdapter', () => {
    // Arrange
    let wrapper;
    it('should render MultiSelectAdapter', () => {
      // Arrange
      const expected = {
        'data-test-id': 'multi-select',
        input: { value: 'hi' },
        labelledBy: 'Select',
      };

      // Act
      wrapper = shallow(<MultiSelectAdapter input={{ value: 'hi' }} />);

      // Assert
      expect(findByTestId(wrapper, 'multi-select').props('labelledBy')).toEqual(
        expected,
      );
    });
  });
});
