import React from 'react';
import sinon from 'sinon';
import chai, { expect } from 'chai';
import SinonChai from 'sinon-chai';
import FlashMessage from '../FlashMessage';
import * as useTaskEditContext from 'pages/CreateOrEditTask/Form/EditTask/hooks/useTaskEditContext';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
chai.use(SinonChai);

//@TODO: Test the clicking functionality
describe('src/components/FlashMessage/__test__/FlashMessage.test.js', () => {
  describe('FlashMessage', () => {
    let wrapper;
    let context;
    const stuber = sinon.stub(useTaskEditContext, 'default');

    it('should not show FlashMessage when no message is present.', () => {
      context = {
        message: undefined
      };
      stuber.returns(context);

      wrapper = mount(<FlashMessage />);
      expect(wrapper).to.be.empty;
    });

    it('should show FlashMessage when message has a value.', () => {
      context = {
        message: 'Success'
      };
      stuber.returns(context);

      wrapper = mount(<FlashMessage />);
      expect(wrapper.find("[test-data-id='flash-message']").text()).to.be.eql(
        'Success'
      );
    });
  });
});
