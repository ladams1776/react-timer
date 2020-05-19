import React from "react";
import { shallow } from 'enzyme';
import { findByTestId } from "testUtils";
import useBrowserHistory from 'hooks/useBrowserHistory';
import ControlButtons from "../ControlButtons";

jest.mock('hooks/useBrowserHistory');

//@TODO: ‼️ Fill in this test's onClick ‼️
describe("src/components/ControlButtons/__test__/ControlButtons.test.js", () => {
  // Arrange 
  let wrapper;
  const historyMock = {
    push: jest.fn()
  };

  beforeEach(() => {
    useBrowserHistory.mockReturnValue(historyMock);
  });

  describe("ControlButtons", () => {
    it("should display ControlButtons", () => {
      // Arrange

      // Act
      wrapper = shallow(<ControlButtons />);

      // Assert
      expect(findByTestId(wrapper, "btn-new")).toHaveLength(1);
    });

    describe('onClick', () => {
      it("should call 'push' function", () => {
        // Arrange

        // Act
        wrapper = shallow(<ControlButtons />);
        findByTestId(wrapper, "btn-new").props().onClick()

        // Assert
        expect(historyMock.push).toHaveBeenNthCalledWith(1, '/task/-1');
      });
    });
  });
});
