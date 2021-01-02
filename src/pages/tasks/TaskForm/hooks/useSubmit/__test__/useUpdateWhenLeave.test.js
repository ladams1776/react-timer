import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import useUpdateWhenLeave from '../useUpdateWhenLeave';

// import essentials for target
import useTimeContext from '../../useTimeContext';
import hydrateTaskForm from '../hydrateTaskForm';
import useTagContext from '../../useTagContext';
import useTaskEditContext from '../../../../hooks/useTaskEditContext';
import { fetchApiData } from 'utils';

// mock essentials for target
jest.mock('../../useTimeContext');
jest.mock('../hydrateTaskForm');
jest.mock('../../useTagContext');
jest.mock('../../../../hooks/useTaskEditContext');
jest.mock('utils/api/fetchApiData/fetchApiData');

describe('useUpdateWhenLeave', () => {

    beforeEach(() => {
        fetchApiData.mockReset();
    });
    it('should invoke fetchApiData with PUT, because of state.id', () => {
        // Arrange
        const time = 1;
        const state = {
            id: 'id',
            project: 'project',
            tags: 'tags',
            description: 'description'
        };
        const allTags = [{ id: 'allTagsID' }];
        const expected = 'yeah'
        useTimeContext.mockReturnValue({ time });
        useTaskEditContext.mockReturnValue({ state });
        useTagContext.mockReturnValue({ allTags });
        const localStorageMock = (() => {
            return {
                getItem: jest.fn().mockImplementation(key => ''),
            };
        })();

        Object.defineProperty(window, 'sessionStorage', {
            value: localStorageMock
        });
        hydrateTaskForm.mockImplementation(() => expected);
        
        // Act
        const { result } = renderHook(() => useUpdateWhenLeave());
        const expectedDate = new Date(); //@todo: use a match for this
        act(() => result.current());

        // Assert
        expect(window.sessionStorage.getItem).toBeCalledWith('LOCATION');
        expect(hydrateTaskForm).toBeCalledWith(state.id, allTags, state.project, state.description, expectedDate, time, state.tags);
        expect(fetchApiData).toHaveBeenCalledWith("task", { body: expected, method: "PUT"}, expect.anything());
    });

    it('should invoke fetchApiData with POST, because of state.id', () => {
        // Arrange
        const time = 1;
        const state = {
            id: undefined,
            project: 'project',
            tags: 'tags',
            description: 'description'
        };
        const allTags = [{ id: 'allTagsID' }];
        const expected = 'yeah'
        useTimeContext.mockReturnValue({ time });
        useTaskEditContext.mockReturnValue({ state });
        useTagContext.mockReturnValue({ allTags });
        const localStorageMock = (() => {
            return {
                getItem: jest.fn().mockImplementation(key => ''),
            };
        })();

        Object.defineProperty(window, 'sessionStorage', {
            value: localStorageMock
        });
        hydrateTaskForm.mockImplementation(() => expected);

        // Act
        const { result } = renderHook(() => useUpdateWhenLeave());
        const expectedDate = new Date(); //@todo: use a match for this
        act(() => result.current());

        // Assert
        expect(window.sessionStorage.getItem).toBeCalledWith('LOCATION');
        expect(hydrateTaskForm).toBeCalledWith(state.id, allTags, state.project, state.description, expectedDate, time, state.tags);
        expect(fetchApiData).toHaveBeenCalledWith("task", { body: expected, method: "POST" }, expect.anything());
    });

    describe("won't call fetchApiData", () => {
        it('should not invoke fetchApiData, because of state.id equals -1', () => {
            // Arrange
            const time = 1;
            const state = {
                id: -1,
                project: 'project',
                tags: 'tags',
                description: 'description'
            };
            const allTags = [{ id: 'allTagsID' }];
            const expected = 'yeah'
            useTimeContext.mockReturnValue({ time });
            useTaskEditContext.mockReturnValue({ state });
            useTagContext.mockReturnValue({ allTags });
            const localStorageMock = (() => {
                return {
                    getItem: jest.fn().mockImplementation(key => ''),
                };
            })();

            Object.defineProperty(window, 'sessionStorage', {
                value: localStorageMock
            });
            hydrateTaskForm.mockImplementation(() => expected);

            // Act
            const { result } = renderHook(() => useUpdateWhenLeave());
            const expectedDate = new Date(); //@todo: use a match for this
            act(() => result.current());

            // Assert
            expect(window.sessionStorage.getItem).toBeCalledWith('LOCATION');
            expect(hydrateTaskForm).toBeCalledWith(state.id, allTags, state.project, state.description, expectedDate, time, state.tags);
            expect(fetchApiData).not.toHaveBeenCalled();
        });

        it('should not invoke fetchApiData, when location has -1 index', () => {
            // Arrange
            const time = 1;
            const state = {
                id: -1,
                project: 'project',
                tags: 'tags',
                description: 'description'
            };
            const allTags = [{ id: 'allTagsID' }];
            const expected = 'yeah'
            useTimeContext.mockReturnValue({ time });
            useTaskEditContext.mockReturnValue({ state });
            useTagContext.mockReturnValue({ allTags });
            const localStorageMock = (() => {
                return {
                    getItem: jest.fn().mockImplementation(key => [-1]),
                };
            })();

            Object.defineProperty(window, 'sessionStorage', {
                value: localStorageMock
            });
            hydrateTaskForm.mockImplementation(() => expected);

            // Act
            const { result } = renderHook(() => useUpdateWhenLeave());
            const expectedDate = new Date(); //@todo: use a match for this
            act(() => result.current());

            // Assert
            expect(window.sessionStorage.getItem).toBeCalledWith('LOCATION');
            expect(hydrateTaskForm).toBeCalledWith(state.id, allTags, state.project, state.description, expectedDate, time, state.tags);
            expect(fetchApiData).not.toHaveBeenCalled();
        });
    });
});