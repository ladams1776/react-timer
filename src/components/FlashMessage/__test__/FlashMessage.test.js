import React from 'react';
import { createWrapperWithContext } from 'testUtils';
import FlashMessage from '../FlashMessage';
import useFlashMessageContext from 'hooks/useFlashMessageContext';
import useFadeOutFlashMessage from '../hooks/useFadeOutFlashMessage';

jest.mock('hooks/useFlashMessageContext');
jest.mock('../hooks/useFadeOutFlashMessage');

describe('src/components/FlashMessage/__test__/FlashMessage.test.js', () => {
  let wrapper;
  let context;

  beforeEach(() => {
    useFadeOutFlashMessage.mockClear();
  });

  describe('FlashMessage', () => {
    it("should not show FlashMessage when 'message' is NOT present.", () => {
      // arrange
      context = {
        message: undefined,
        resetFlashMessage: jest.fn()
      };
      useFlashMessageContext.mockReturnValue(context);

      // act
      wrapper = createWrapperWithContext(<FlashMessage />);

      // assert
      expect(useFadeOutFlashMessage).toHaveBeenNthCalledWith(1);
      expect(wrapper).tobeNull;
    });

    it('should show FlashMessage when message is present.', () => {
      // arrange
      context = {
        message: 'Success',
        success: false,
        info: false,
        error: false,
        resetFlashMessage: jest.fn()
      };
      useFlashMessageContext.mockReturnValue(context);

      // act
      wrapper = createWrapperWithContext(<FlashMessage />);

      // assert
      expect(useFadeOutFlashMessage).toHaveBeenNthCalledWith(1);
      expect(wrapper.text()).toEqual('Success');
    });

    describe('onClick', () => {
      it("should call 'resetFlashMessage()', when 'FlashMessage' is clicked", () => {
        // arrange
        context = {
          message: 'Success',
          resetFlashMessage: jest.fn()
        };
        useFlashMessageContext.mockReturnValue(context);

        wrapper = createWrapperWithContext(<FlashMessage />);

        // act
        wrapper.props().onClick();

        // assert
        expect(context.resetFlashMessage).toHaveBeenNthCalledWith(1);
        expect(wrapper).tobeNull;
      });
    });
  });
});
