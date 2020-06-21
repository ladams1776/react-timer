import React from 'react';
import TagPage from '../TagPage';
import { shallow } from 'enzyme';
import { findByTestId } from "testUtils";
import TagsListView from '../TagListView/TagListView';

describe('serc/pages/tags/__test__/TagPage.test.js', () => {
    describe('TagPage', () => {
        // Arrange
        let wrapper;

        it('should render', () => {
            // Arrange
            const expected = {
                "children": <TagsListView />,
                "data-test-id": "tag-page",
            };

            // Act
            wrapper = shallow(<TagPage />);

            // Assert
            expect(findByTestId(wrapper, 'tag-page').props()).toEqual(expected);
        });
    });
});
