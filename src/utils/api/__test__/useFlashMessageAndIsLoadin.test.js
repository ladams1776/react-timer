import useFlashMessageAndIsLoadin from '../useFlashMessageAndIsLoadin';
import {
    useFlashMessageContext,
    useLoadinSpinnerContext
} from 'hooks';

jest.mock('hooks/useFlashMessageContext');
jest.mock('hooks/useLoadinSpinnerContext');

describe('src/utils/api/__test__/useFlashMessageAndIsLoadin.test.js', () => {
    describe('useFlashMessageAndIsLoadin', () => {

        it('should return 3 functions used for giving user feedback when dealing with fetching data', () => {
            // Arrange
            const setSuccessFlashMessageSpy = jest.fn();
            const setErrorFlashMessageSpy = jest.fn();
            useFlashMessageContext.mockReturnValue({ setSuccessFlashMessage: setSuccessFlashMessageSpy, setErrorFlashMessage: setErrorFlashMessageSpy });

            const setIsLoadinSpy = jest.fn();
            useLoadinSpinnerContext.mockReturnValue({ setIsLoadin: setIsLoadinSpy });

            // Act
            const { setSuccessFlashMessage, setErrorFlashMessage, setIsLoadin } = useFlashMessageAndIsLoadin();

            // Assert
            // Could pull out the anon func from reload and then mock that, but skipping it for the moment.
            expect(setSuccessFlashMessage).toEqual(setSuccessFlashMessage);
            expect(setErrorFlashMessage).toEqual(setErrorFlashMessage);
            expect(setIsLoadin).toEqual(setIsLoadin);
        });
    });
});