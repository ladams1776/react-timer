import React from "react";
import { shallow } from 'enzyme';
import { findByTestId } from "testUtils";
import ControlButtons from "../ControlButtons";

describe("src/components/ControlButtons/__test__/ControlButtons.test.js", () => {
  // Arrange 
  let wrapper;

  describe("ControlButtons", () => {
    it("should display ControlButtons", () => {
      // Arrange
      
      // Act
      wrapper = shallow(<ControlButtons />);
      
      // Assert
      expect(findByTestId(wrapper, "btn-new")).toHaveLength(1);
    });
  });
});
