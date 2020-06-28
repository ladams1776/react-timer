import flashMessageHandleResponse from '../flashMessageHandleResponse';
import { fetchApiData } from 'utils';

jest.mock('../../../utils/api/fetchApiData/fetchApiData');

describe('src/utils/api/__test__/flashMessageHandleResponse.test.js', () => {
    describe('flashMessageHandleResponse', () => {
        it('should call setIsLoadin, dispatch, setSuccessFlashMessage, when no error', () => {
            // Arrange
            const dispatch = jest.fn();
            const setErrorFlashMessage = jest.fn();
            const setSuccessFlashMessage = jest.fn();
            const setIsLoadin = jest.fn();
            const message = 'message';
            const failedMessage = 'failedMessage';

            const items = { _id: 1 };

            // Act
            const target = flashMessageHandleResponse(dispatch,
                setErrorFlashMessage,
                setSuccessFlashMessage,
                setIsLoadin,
                message,
                failedMessage);

            target({ items });

            // Assert
            expect(setIsLoadin).toHaveBeenNthCalledWith(1, false);
            expect(dispatch).toHaveBeenNthCalledWith(1, items);
            expect(setSuccessFlashMessage).toHaveBeenNthCalledWith(1, message);
        });

        it('should call setIsLoadin, dispatch, setErrorFlashMessage, when error is present.', () => {
            // Arrange
            const dispatch = jest.fn();
            const setErrorFlashMessage = jest.fn();
            const setSuccessFlashMessage = jest.fn();
            const setIsLoadin = jest.fn();
            const message = 'message';
            const failedMessage = 'failedMessage';

            const error = {name: 'errorMessage'};
            const items = { _id: 1 };

            const expected = `failedMessage: ${error.name}`;

            // Act
            const target = flashMessageHandleResponse(dispatch,
                setErrorFlashMessage,
                setSuccessFlashMessage,
                setIsLoadin,
                message,
                failedMessage);

            target({ error, items });

            // Assert
            expect(setIsLoadin).toHaveBeenNthCalledWith(1, false);
            expect(dispatch).toHaveBeenNthCalledWith(1, items);
            expect(setErrorFlashMessage).toHaveBeenNthCalledWith(1, expected);
        });
    });
});