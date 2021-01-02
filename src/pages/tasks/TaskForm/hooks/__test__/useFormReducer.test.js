import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useFormReducer from '../useFormReducer';


describe('src/pages/tasks/TaskForm/hooks/__test__/useFormReducer.test.js', () => {
    describe('useFormReducer', () => {
        describe('initialState', () => {
            it('should return initial state', () => {
                // Arrange
                const expected = {
                    id: -1,
                    description: '',
                    tags: [],
                    project: 0,
                    time: 0,
                    dateTimes: []
                };
                const dispatchSpy = jest.fn();
                React.useReducer = jest.fn().mockImplementation(() => [expected, dispatchSpy]);

                const { result } = renderHook(() => useFormReducer());

                // Act
                const target = result.current[0];

                // Assert
                expect(target).toEqual(expected);
            });
        });
        describe('onProjectDropDownChange', () => {
            it('should dispatchSpy with expected arguments when invoked', () => {
                // Arrange
                const expected = { project: 1 };
                const initialState = {
                    id: -1,
                    description: '',
                    tags: [],
                    project: 0,
                    time: 0,
                    dateTimes: []
                };
                const dispatchSpy = jest.fn();
                React.useReducer = jest.fn().mockImplementation(() => [initialState, dispatchSpy]);

                const { result } = renderHook(() => useFormReducer());

                // Act
                const target = result.current[1];
                target({ target: { value: 1 } });

                // Assert
                expect(dispatchSpy).toBeCalledWith(expected);
            });
        });
    });

    describe('onTextAreaChange', () => {
        it('should dispatchSpy with expected arguments when invoked', () => {
            // Arrange
            const expected = { description: 1 };
            const initialState = {
                id: -1,
                description: '',
                tags: [],
                project: 0,
                time: 0,
                dateTimes: []
            };
            const dispatchSpy = jest.fn();
            React.useReducer = jest.fn().mockImplementation(() => [initialState, dispatchSpy]);

            const { result } = renderHook(() => useFormReducer());

            // Act
            const target = result.current[2];
            target(1);

            // Assert
            expect(dispatchSpy).toBeCalledWith(expected);
        });
    });

    describe('onTagChange', () => {
        it('should dispatchSpy with expected arguments when invoked', () => {
            // Arrange
            const expected = { tags: 1 };
            const initialState = {
                id: -1,
                description: '',
                tags: [],
                project: 0,
                time: 0,
                dateTimes: []
            };
            const dispatchSpy = jest.fn();
            React.useReducer = jest.fn().mockImplementation(() => [initialState, dispatchSpy]);

            const { result } = renderHook(() => useFormReducer());

            // Act
            const target = result.current[3];
            target(1);

            // Assert
            expect(dispatchSpy).toBeCalledWith(expected);
        });
    });
    describe('onDateTimes', () => {
        it('should dispatchSpy with expected arguments when invoked', () => {
            // Arrange
            const expected = { dateTimes: 1 };
            const initialState = {
                id: -1,
                description: '',
                tags: [],
                project: 0,
                time: 0,
                dateTimes: []
            };
            const dispatchSpy = jest.fn();
            React.useReducer = jest.fn().mockImplementation(() => [initialState, dispatchSpy]);

            const { result } = renderHook(() => useFormReducer());

            // Act
            const target = result.current[4];
            target(1);

            // Assert
            expect(dispatchSpy).toBeCalledWith(expected);
        });
    });
    describe('dispatchTask', () => {
        it('should dispatchSpy with expected arguments when invoked', () => {
            // Arrange
            const expected = { dateTimes: 1 };
            const initialState = {
                id: -1,
                description: '',
                tags: [],
                project: 2,
                time: 0,
                dateTimes: [],
            };
            const dispatchSpy = jest.fn();
            React.useReducer = jest.fn().mockImplementation(() => [initialState, dispatchSpy]);

            const { result } = renderHook(() => useFormReducer());

            // Act
            const target = result.current[5];
            target({ ...initialState, _id: -1, contractId: 2});

            // Assert
            expect(dispatchSpy).toBeCalledWith(initialState);
        });
    });
});