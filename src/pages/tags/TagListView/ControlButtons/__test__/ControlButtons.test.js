import React from 'react';
import { shallow } from 'enzyme';
import { findByTestId } from 'testUtils';
import ControlButtons from '../ControlButtons';
import NewButton from '../NewButton/NewButton';

jest.mock('hooks/useBrowserHistory');

describe('src/pages/tags/TagsPage/TagListView/ControlButtons/__test__/ControlButtons.test.js', () => {
  describe('ControlButtons', () => {
    // Arrange
    let wrapper;

    describe('ControlButtons', () => {
      it('should display ControlButtons', () => {
        // Arrange
        const expected = {
          children: <NewButton />,
          className: "controlButtons",
          "data-test-id": "control-buttons"
        };
        // Act
        wrapper = shallow(<ControlButtons />);

        // Assert
        expect(findByTestId(wrapper, 'control-buttons').props()).toEqual(expected);
      });
    });
  });
});
