import reloadAndRefresh from '../reloadAndRefresh';
import { fetchApiData } from 'utils';

jest.mock('../../../utils/api/fetchApiData/fetchApiData');

describe('src/utils/api/__test/reloadAndRefresh.test.js', () => {
    describe('reloadAndRefresh', () => {

        it('should call fetchApiData that', () => {
            // Arrange
            const url = 'testUrl';
            const urlConfig = {};
            const dispatch = jest.fn();
            
            // Act
            const target = reloadAndRefresh(url, urlConfig, dispatch);
            target();

            // Assert
            // Could pull out the anon func from reload and then mock that, but skipping it for the moment.
            expect(fetchApiData).toBeCalledWith(url, urlConfig, expect.anything());
        });
    });
});