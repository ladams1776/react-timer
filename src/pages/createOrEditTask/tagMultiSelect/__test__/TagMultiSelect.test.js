import React from 'react';
import { shallow } from 'enzyme';
import TagMultiSelect from '../TagMultiSelect';
import { findByTestId } from 'testUtils';
import { useTagContext, useTagTransformer } from '../../hooks';

jest.mock('../hooks/useTagContext');
jest.mock('../hooks/useTagTransformer');

describe('src/pages/createOrEditTask/form/__test__/TagMultiSelect.test.js', () => {
  describe('TagMultiSelect', () => {
    // Arrange
    let wrapper;
    const allTags = [{ id: 1 }, { id: 2 }];

    beforeEach(() => {
      useTagContext.mockReturnValue(allTags);
      useTagTransformer.mockReturnValue(allTags);
    });

    it('should display TagMultiSelect', () => {
      // Arrange
      const expected = {
        'data-test-id': 'tag-multi-select',
        name: 'tags',
        options: allTags,
        value: allTags,
      };

      // Act
      wrapper = shallow(<TagMultiSelect tags={allTags} />);

      // Assert
      expect(findByTestId(wrapper, 'tag-multi-select').props()).toEqual(expected);
    });
  });
});