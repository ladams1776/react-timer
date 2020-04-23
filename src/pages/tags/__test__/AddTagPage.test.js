import React from 'react';
import { createWrapperWithContext, findByTestId } from 'testUtils';
import AddTagPage, { submitForm } from '../AddTagPage';
import useLoadinSpinnerContext from 'hooks/useLoadinSpinnerContext';
import useFlashMessageContext from 'hooks/useFlashMessageContext';
import { shallow } from 'enzyme';
jest.mock('hooks/useLoadinSpinnerContext');
jest.mock('hooks/useFlashMessageContext');

describe('src/pages/tags/__test__/AddTagPage.test.js', () => {
    // Arrange
    // Setup Flash Message Context
    const flashMessageContext = {
        setSuccessFlashMessage: jest.fn().mockImplementation(),
        setErrorFlashMessage: jest.fn().mockImplementation()
    }
    useFlashMessageContext.mockReturnValue(flashMessageContext);

    // Setup Loadin Context
    const loadinSpinnerContext = {
        setIsLoadin: jest.fn().mockImplementation()
    }
    useLoadinSpinnerContext.mockReturnValue(loadinSpinnerContext);

    describe('AddTagPage', () => {
        it('should be present', () => {
            // Arrange
            const wrapper = createWrapperWithContext(<AddTagPage />);

            // Act

            // Assert
            expect(wrapper).toEqual(expect.anything());
        });

        describe('#_submitForm', () => {
            // Arrange
            const setSuccessFlashMessageSpy = jest.fn().mockImplementation();
            const setErrorFlashMessageSpy = jest.fn().mockImplementation();
            const setIsLoadinSpy = jest.fn().mockImplementation();

            beforeEach(() => {
                setSuccessFlashMessageSpy.mockClear();
                setErrorFlashMessageSpy.mockClear();
                setIsLoadinSpy.mockReset();
            });

            it('should fetch data and display success when we get back anything but 500, and there is no error', async () => {
                // Arrange
                const expectedTag = {
                    status: 200,
                    id: 'stub id',
                    name: 'another tag name',
                    description: 'tag description'
                }
                const responsePromise = Promise.resolve({
                    json: jest.fn().mockImplementation(() => Promise.resolve(expectedTag))
                });
                global.fetch = jest.fn().mockImplementation(() => responsePromise);

                const expectedAPI = '/api/tag';
                const expectedAPIOptions = { "body": "{\"name\":\"tag name\",\"description\":\"tag description\"}", "headers": { "Content-Type": "application/json" }, "method": "POST" };

                const tag = {
                    name: 'tag name',
                    description: 'tag description'
                };

                const target = submitForm(setSuccessFlashMessageSpy, setErrorFlashMessageSpy, setIsLoadinSpy);

                // Act
                await target(tag);
                // Assert
                expect(global.fetch).toBeCalledWith(expectedAPI, expectedAPIOptions);
                expect(setIsLoadinSpy).toHaveBeenCalledTimes(2);
                expect(setIsLoadinSpy).toHaveBeenNthCalledWith(1, true);
                expect(setIsLoadinSpy).toHaveBeenNthCalledWith(2, false);
                expect(setSuccessFlashMessageSpy).toHaveBeenNthCalledWith(1, `Added Tag: ${expectedTag.name}`);

                // Clean up
                global.fetch.mockClear();
            });

            it('should fetch data and display error when done, when 500 status', async () => {
                // Arrange
                const tag = {
                    name: 'tag name',
                    description: 'tag description'
                };
                
                const expectedFailedTag = {
                    status: 500,
                    id: 'stub id',
                    name: 'another tag name',
                    description: 'tag description'
                }
                const responsePromise = Promise.resolve({
                    json: jest.fn().mockImplementation(() => Promise.resolve(expectedFailedTag))
                });
                global.fetch = jest.fn().mockImplementation(() => responsePromise);

                const expectedAPI = '/api/tag';
                const expectedAPIOptions = { "body": "{\"name\":\"tag name\",\"description\":\"tag description\"}", "headers": { "Content-Type": "application/json" }, "method": "POST" };

                const target = submitForm(setSuccessFlashMessageSpy, setErrorFlashMessageSpy, setIsLoadinSpy);

                // Act
                await target(tag);

                // Assert
                expect(global.fetch).toBeCalledWith(expectedAPI, expectedAPIOptions);
                expect(setIsLoadinSpy).toHaveBeenCalledTimes(2);
                expect(setIsLoadinSpy).toHaveBeenNthCalledWith(1, true);
                expect(setIsLoadinSpy).toHaveBeenNthCalledWith(2, false);
                expect(setErrorFlashMessageSpy).toHaveBeenNthCalledWith(1, `Problem creating new tag: ${tag.name}`);

                // Clean up
                global.fetch.mockClear();
            });

            it('should fetch data and display error when issue with Promise', async () => {
                // Arrange
                // const tag = {
                //     status: 500,
                //     id: 'stub id',
                //     name: 'another tag name',
                //     description: 'tag description'
                // }
                const responsePromise = Promise.resolve({
                    json: jest.fn().mockImplementation(() => Promise.reject())

                });
                global.fetch = jest.fn().mockImplementation(() => responsePromise);

                const expectedAPI = '/api/tag';
                const expectedAPIOptions = { "body": "{\"name\":\"tag name\",\"description\":\"tag description\"}", "headers": { "Content-Type": "application/json" }, "method": "POST" };

                const tag = {
                    name: 'tag name',
                    description: 'tag description'
                };

                // Act
                const target = submitForm(setSuccessFlashMessageSpy, setErrorFlashMessageSpy, setIsLoadinSpy);

                // Act
                await target(tag);

                // Assert
                expect(global.fetch).toBeCalledWith(expectedAPI, expectedAPIOptions);
                expect(setIsLoadinSpy).toHaveBeenCalledTimes(2);
                expect(setIsLoadinSpy).toHaveBeenNthCalledWith(1, true);
                expect(setIsLoadinSpy).toHaveBeenNthCalledWith(2, false);
                expect(setErrorFlashMessageSpy).toHaveBeenNthCalledWith(1, `Problem creating new tag: ${tag.name}. Error: undefined`);

                // Clean up
                global.fetch.mockClear();
            });
        });
    });
});