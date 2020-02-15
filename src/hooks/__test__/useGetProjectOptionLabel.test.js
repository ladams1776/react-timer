import { renderHook, act } from '@testing-library/react-hooks';
import useGetProjectOptionLabel from '../useGetProjectOptionLabel';
import useFetchProjectOptions from '../useFetchProjectOptions';
jest.mock('../useFetchProjectOptions');
const projectOptions = require('../projects.json');

describe('src/hooks/__test__/useGetProjectOptionLabel.test.js', () => {
    describe('#useGetProjectOptionLabel', () => {
        it('should return project objects', () => {
            useFetchProjectOptions.mockReturnValue(projectOptions);

            const { result } = renderHook(() => useGetProjectOptionLabel(projectOptions[0].value));
            expect(result.current).toEqual(projectOptions[0].label);
        });
    });
});