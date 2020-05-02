import React from 'react';
import { createWrapperWithContext, findByTestId } from 'testUtils';
import MultiSelectDropdown from '../MultiSelectDropdown';

describe('src/components/__test__/MultiSelectDropdown.test.js', () => {
  let wrapper;

  describe('MultiSelectDropdown', () => {
    // Arrange
    const data = [
      {
        _id: 1,
        name: 'name of a data'
      }
    ];

    it("should render MultiSelectDropdown, when there is data present", () => {
      // Arrange

      // Act
      wrapper = createWrapperWithContext(<MultiSelectDropdown data={data} />);

      // Assert
      expect(findByTestId(wrapper, "multi-select-dropdown").text()).toEqual(data[0].name);
      expect(findByTestId(wrapper, "multi-select-dropdown")).toHaveLength(data.length);
    });

    it("should render no item in MultiSelectDropdown, when there is no data present", () => {
      // Arrange

      // Act
      wrapper = createWrapperWithContext(<MultiSelectDropdown />);

      // Assert
      expect(findByTestId(wrapper, "multi-select-dropdown")).toHaveLength(0);
    });
  });
});