import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import SinonChai from 'sinon-chai';
import * as useTaskEditContext from 'hooks/useTaskEditContext';
import FlashMessage from '../FlashMessage';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createWrapperWithContext } from 'testUtils';
Enzyme.configure({ adapter: new Adapter() });
chai.use(SinonChai);

//@TODO: Test the clicking functionality
describe('src/components/FlashMessage/__test__/FlashMessage.test.js', () => {

  describe('FlashMessage', () => {
    let wrapper;
    let context;

    it('should not show FlashMessage when no message is present.', () => {
      context = {
        message: undefined
      };

      wrapper = createWrapperWithContext(<FlashMessage />, context);
      expect(wrapper).to.be.empty;
    });

    it('should show FlashMessage when message has a value.', () => {
      context = {
        message: 'Success'
      };

      wrapper = createWrapperWithContext(<FlashMessage />, context);
      expect(wrapper.find("[test-data-id='flash-message']").text()).to.be.eql(
        'Success'
      );
    });
  });
//@TODO: LEFT OFF HERE Feb 9, Sun 21:56 
  // describe('onClick', () => {
  //   it('should set the message on the FlashMessage to null', () => {
  //     wrapper = mount(<FlashMessage />);

  //   });
  // });
});
