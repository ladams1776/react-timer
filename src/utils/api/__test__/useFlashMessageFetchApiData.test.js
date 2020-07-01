import useFlashMessageFetchApiData from '../useFlashMessageFetchApiData';
import { useFlashMessageAndIsLoadin, flashMessageHandleResponse, fetchApiData } from 'utils';

jest.mock('utils/api/flashMessageHandleResponse');
jest.mock('utils/api/useFlashMessageAndIsLoadin');
jest.mock('utils/api/fetchApiData/fetchApiData');

describe('src/utils/api/__test__/useFlashMessageFetchApiData.test.js', () => {
    describe('useFlashMessageFetchApiData', () => {

        it('should call setIsLoadin and fetchApiData when returning function is invoked', () => {
            // Arrange
            const url = 'url';
            const config = {};
            const dispatch = jest.fn();
            const message = 'message';
            const failedMessage = 'failedMessage';

            const responseHandlerSpy = jest.fn();
            flashMessageHandleResponse.mockReturnValue(responseHandlerSpy);

            const setSuccessFlashMessageSpy = jest.fn();
            const setErrorFlashMessageSpy = jest.fn();
            const setIsLoadinSpy = jest.fn();
            useFlashMessageAndIsLoadin.mockReturnValue({
                setSuccessFlashMessage: setSuccessFlashMessageSpy,
                setErrorFlashMessage: setErrorFlashMessageSpy,
                setIsLoadin: setIsLoadinSpy
            });

            // Act
            const target = useFlashMessageFetchApiData(url, config, dispatch, message, failedMessage);
            target();

            // Assert
            expect(setIsLoadinSpy).toBeCalledWith(true);
            expect(fetchApiData).toBeCalledWith(url, config, responseHandlerSpy);
        });
    });
});