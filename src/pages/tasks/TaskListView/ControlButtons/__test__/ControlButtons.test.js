import React from 'react';
import { shallow } from 'enzyme';
import { findByTestId } from 'testUtils';
import ControlButtons from '../ControlButtons';

jest.mock('hooks/useBrowserHistory');

describe('src/components/ControlButtons/__test__/ControlButtons.test.js', () => {
  // Arrange
  let wrapper;

  describe('ControlButtons', () => {
    it('should display ControlButtons', () => {
      // Arrange

      // Act
      wrapper = shallow(<ControlButtons />);

      // Assert
      expect(findByTestId(wrapper, 'control-buttons')).toHaveLength(1);
    });
  });
});
