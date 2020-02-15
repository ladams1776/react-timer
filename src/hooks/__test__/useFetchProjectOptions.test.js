import { renderHook, act } from '@testing-library/react-hooks';
import useFetchProjectOptions from '../useFetchProjectOptions';
const projectOptions = require('../projects.json');

describe('src/hooks/__test__/useFetchProjectOptions.test.js', () => {
    describe('#useFetchProjectOptions', () => {
        it('should return project objects', () => {
            const { result } = renderHook(() => useFetchProjectOptions());
            expect(result.current).toEqual(projectOptions);
        });
    });
});