import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useSmoothScrolling from '../useSmoothScrolling';

describe('useSmoothScrolling',  () => {
    it('should ... ', () => {
        // Arrange
        const id = 'id';
        const scrollIntoViewSpy = jest.fn();
        const refs = [{
            id: 'id',
            current: {
                scrollIntoView: scrollIntoViewSpy
            }
        }];
        const description = 'description';
        window.addEventListener = jest.fn().mockImplementation();
        window.removeEventListener = jest.fn().mockImplementation();

        // Act
        renderHook(() => useSmoothScrolling(refs, id, description));
        
        // Assert
        expect(window.addEventListener).toHaveBeenCalledWith('load', expect.anything());
    });
});