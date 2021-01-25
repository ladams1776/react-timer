import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// target
import TagsListView from '../TagListView';

// mock
jest.mock('../Tag/Tag', () => {
    return () => <>TagComp</>
});

describe('serc/pages/tags/__test__/TagListView.test.js', () => {
    describe('TagListView', () => {
        it('should render', () => {
            // Arrange

            // Act
            const { queryByText } = render(<TagsListView
                className={"className"}
                tagId={"1"}
                tags={[{ _id: 'id' }]} />);

            // Assert
            expect(queryByText('TagComp')).toBeInTheDocument();
        })
    });
});
