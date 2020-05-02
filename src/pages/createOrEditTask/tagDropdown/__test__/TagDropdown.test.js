import React from 'react';
import TagDropdown from '../TagDropdown';
import useTagContext from '../../hooks/useTagContext';
import { createWrapperWithContext, findByTestId } from 'testUtils';

jest.mock('../../hooks/useFetchTagOptions');
jest.mock('../../hooks/useTagContext');

describe('src/pages/createOrEditTask/tagDropdown/__test__/TagDropdown.test.js', () => {
    describe('TagDropdown', () => {
        // Arrange
        let wrapper;

        const useTagContextMock = {
            tags: [{
                id: 1
            }],
        };

        it('should render', () => {
            // Arrange
            useTagContext.mockReturnValue(useTagContextMock);

            // Act
            wrapper = createWrapperWithContext(<TagDropdown />);

            // Assert
            expect(findByTestId(wrapper, 'tagDropdown')).toEqual({});
        });
    });
});