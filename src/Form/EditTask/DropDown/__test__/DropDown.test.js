import React from 'react';
import sinon from 'sinon';
import { findByTestId, createWrapperWithContext } from '../../../../testUtils';
import chai, { expect } from 'chai';
import SinonChai from 'sinon-chai';
import DropDown from '../DropDown';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
chai.use(SinonChai);

describe('src/Form/EditTask/DropDown/__test__/DropDown.test.js', () => {
  let wrapper;

  describe('DropDown', () => {
    it('should not display when no options', () => {
      const context = {
        selectedProject: 0,
        projects: []
      };

      wrapper = createWrapperWithContext(<DropDown />, context);

      const props = wrapper.find(findByTestId('select')).props();
      expect(props.children).to.have.lengthOf(0);
    });

    it('should have as many options as dropDownListContracts', () => {
      const context = {
        selectedProject: 0,
        projects: [
          { key: 0, label: 'test', value: 'test' },
          { key: 1, label: 'test', value: 'test' }
        ]
      };

      wrapper = createWrapperWithContext(<DropDown />, context);

      const props = wrapper.find(findByTestId('select')).props();
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
          { key: 1, label: 'test', value: 'test' }
        ]
      };

      const SELECT_OPTION = 1001;
      wrapper = createWrapperWithContext(<DropDown />, context);

      wrapper
        .find(findByTestId('select'))
        .props()
        .onChange({ currentTarget: { selectedIndex: SELECT_OPTION } });

      expect(context.updateDropDown).to.have.been.calledOnceWith(SELECT_OPTION);
    });
  });
});
