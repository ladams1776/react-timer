import React from 'react';
import sinon from 'sinon';
import * as useTaskEditContext from '../../../Form/EditTask/useTaskEditContext';
import chai, { expect } from 'chai';
import SinonChai from 'sinon-chai';
import DropDown from '../DropDown';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
chai.use(SinonChai);

describe('src/components/DropDown/__test__/DropDown.test.js', () => {
  let wrapper;
  let stuber;
  stuber = sinon.stub(useTaskEditContext, 'default');

  describe('DropDown', () => {
    it('should not display when no options', () => {
      const context = {
        selectedProject: 0,
        projects: [],
      };

      stuber.returns(context);

      wrapper = shallow(<DropDown />);
      const props = wrapper.find("[data-test-id='select']").props();
      expect(props.children).to.have.lengthOf(0);
    });

    it('should have as many options as dropDownListContracts', () => {
      const context = {
        selectedProject: 0,
        projects: [
          { key: 0, label: 'test', value: 'test' },
          { key: 1, label: 'test', value: 'test' },
        ],
      };

      stuber.returns(context);

      wrapper = shallow(<DropDown />);
      const props = wrapper.find("[data-test-id='select']").props();
      expect(props.children).to.have.lengthOf(2);
    });
  });

  describe('onClick ', () => {
    it('should invoke updateDropDown when an option is selected, with the value of the option', () => {
      const context = {
        selectedProject: 0,
        updateDropDown: sinon.spy(),
        projects: [
          { key: 0, label: 'test', value: 'test' },
          { key: 1, label: 'test', value: 'test' },
        ],
      };

      const SELECT_OPTION = 1001;
      stuber.returns(context);
      wrapper = shallow(<DropDown />);

      wrapper
        .find("[data-test-id='select']")
        .props()
        .onChange({ currentTarget: { selectedIndex: SELECT_OPTION } });

      expect(context.updateDropDown).to.have.been.calledOnceWith(SELECT_OPTION);
    });
  });
});
