import React from 'react';
import sinon from 'sinon';
import chai from 'chai';
import SinonChai from 'sinon-chai';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createWrapperWithContext, findByTestId } from 'testUtils';
import FlashMessage from '../FlashMessage';
Enzyme.configure({ adapter: new Adapter() });
chai.use(SinonChai);

describe('src/components/FlashMessage/__test__/FlashMessage.test.js', () => {
  let wrapper;
  let context;

  describe('FlashMessage', () => {

    it('should not show FlashMessage when no message is present.', () => {
      context = {
        message: undefined
      };

      wrapper = createWrapperWithContext(<FlashMessage />, context);
      expect(wrapper).tobeNull;
    });

    it('should show FlashMessage when message has a value.', () => {
      context = {
        message: 'Success'
      };

      wrapper = createWrapperWithContext(<FlashMessage />, context);

      expect(wrapper.text()).toEqual('SuccessX');
    }); 
  });

  describe('onClick', () => {
    it('should set the message on the FlashMessage to null', () => {
      context = {
        message: 'Success',
        setMessage: jest.fn()
      };


      wrapper = createWrapperWithContext(<FlashMessage />, context);

      wrapper.props().onClick();
      expect(context.setMessage).toHaveBeenNthCalledWith(1, null);
      expect(wrapper).tobeNull;
    });
  });
});
