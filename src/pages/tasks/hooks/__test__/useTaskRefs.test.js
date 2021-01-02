import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useTaskRefs from '../useTaskRefs';

describe('src/pages/tasks/hooks/__test__/useTaskRefs.test.js', () => {
    describe('useTaskRefs', () => {
        it('should expect tasks to be returned from useMemo, when useTaskRefs is called', () => {
            // Arrange
            const tasks = [{ value: { _id: 1 } }];
            React.useMemo = jest.fn().mockImplementation(() => tasks);
            React.createRef = jest.fn().mockImplementation(() => tasks)

            // Act
            const { result } = renderHook(() => useTaskRefs(tasks));

            // Assert
            expect(React.useMemo).toBeCalledWith(expect.anything(), [tasks]);
            expect(result.current).toEqual(tasks);
        });
    })
});