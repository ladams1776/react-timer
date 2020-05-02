import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import fetchApiData from 'utils/api/fetchApiData';
import useTagContext from '../../hooks/useTagContext';
import useFetchTagOptions from '../useFetchTagOptions';

jest.mock('utils/api/fetchApiData');
jest.mock('../../hooks/useTagContext');

describe('src/pages/createOrEditTask/hooks/__test__/useFetchTagOptions.test.js', () => {
    describe('useFetchTagOptions', () => {
        // Arrange
        const useTagContextStub = {
            setTags: jest.fn(),
        };

        useTagContext.mockReturnValue(useTagContextStub);

        it("should call fetchApiData with 'tags' and 'setTags' as a dispatch", () => {
            // Arrange

            // Act
            renderHook(() => useFetchTagOptions());

            // Assert
            expect(fetchApiData).toHaveBeenNthCalledWith(1, 'tags', {}, useTagContextStub.setTags);
        });
    });
});