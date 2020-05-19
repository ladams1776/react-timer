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
      expect(findByTestId(wrapper, "control-buttons")).toHaveLength(1);
    });
  });
});
