import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useDateTimeState from '../useDateTimeState';

describe('useDateTimeState.test.js', () => {
    it('should return dateTimes and editDateTime', () => {
        // Arrange
        React.useState = jest.fn().mockImplementation(() => [1, 2]);
        const expected = {
            dateTimes: 1,
            editDateTime: 1,
            setDateTimes: 2,
            setEditDateTime: 2
        };
        
        // Act
        const { result } = renderHook(() => useDateTimeState());

        // Assert
        expect(result.current).toEqual(expected);
    });
});