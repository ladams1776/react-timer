import React from 'react';
import { shallow } from 'enzyme';
import { findByTestId } from "testUtils";
import TagsListView from '../TagListView';
import ControlButtons from '../ControlButtons/ControlButtons';

describe('serc/pages/tags/__test__/TagListView.test.js', () => {
    describe('TagListView', () => {
        // Arrange
        let wrapper;

        const realUseState = React.useState;
        jest.spyOn(React, 'useState')
            .mockImplementationOnce(() => realUseState([]));

        it('should render', () => {
            // Arrange
            const expected = {
                children: [
                    <div className="tag-list__header">
                        <ControlButtons />
                    </div>,
                    <ul className="tag-list" />,
                ],
                "data-test-id": "list-view",
            }.toString();

            // Act
            wrapper = shallow(<TagsListView />);

            // Assert
            expect(findByTestId(wrapper, 'list-view').props().toString()).toEqual(expected);
        });
    });
});
