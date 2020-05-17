import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import selectNormalizer from 'utils/normalizers/selectNormalizer';
import useTagTransformer from '../useTagTransformer';

jest.mock('utils/normalizers/selectNormalizer');

describe('src/pages/createOrEditTask/hooks/__test__/useTagTransformer.test.js', () => {
    describe('useTagTransformer', () => {
        // Arrange
        const tag = {
            value: 1,
            name: 2
        }

        selectNormalizer.mockReturnValue(tag);
        React.useMemo = jest.fn().mockImplementation(() => selectNormalizer(tag));

        it("should call fetchApiData with 'tags' and 'setTags' as a dispatch", () => {
            // Arrange

            // Act
            renderHook(() => useTagTransformer());

            // Assert
            expect(selectNormalizer).toHaveBeenNthCalledWith(1, tag);
        });
    });
});