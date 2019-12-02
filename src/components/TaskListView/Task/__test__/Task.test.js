import React from 'react';
import sinon from 'sinon';
import chai from 'chai';
import SinonChai from 'sinon-chai';
import * as useTaskEditContext from '../../../../Form/EditTask/useTaskEditContext';
import Task from '../Task';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
chai.use(SinonChai);

describe('src/components/Task/__test__/Task.test.js', () => {
  let stuber;
  stuber = sinon.stub(useTaskEditContext, 'default');

  describe('Task', () => {
    it('should display Task when one is present', () => {
      const context = {
        projects: [{ label: 'label of project' }],
      };

      stuber.returns(context);

      const wrapper = shallow(
        <Task
          task={{ _id: 'taskId', contractId: 0, description: 'this is a wonderful description' }}
        />
      );

      expect(wrapper).toBeTruthy();
    });
  });
});
