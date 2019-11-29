import React from 'react';
import sinon from 'sinon';
import chai from 'chai';
import SinonChai from 'sinon-chai';
import * as useTaskEditContext from '../../../Form/EditTask/useTaskEditContext';
import Task from '../Task';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
chai.use(SinonChai);

describe('src/components/Task/__test__/Task.test.js', () => {
  let stuber;
  stuber = sinon.stub(useTaskEditContext, 'default');

  describe('Task', () => {
    it('should display Task with ', () => {
      const context = {
        selectedProject: 0,
        projects: [],
      };
      stuber.returns(context);
      const wrapper = mount(
        <Task task={{ _id: '', description: 'this is a wonderful description' }} />
      );
      const preventDefaultSpy = sinon.spy();

      wrapper
        .find("[data-test-id='delete-task-button']")
        .props()
        .onClick({ preventDefault: preventDefaultSpy });

      expect(preventDefaultSpy).toHaveBeenCalled();
    });
    //@TODO: Must figure out how to test the `fetch` pieces.
  });
});
