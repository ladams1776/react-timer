import { shallow } from 'enzyme';
import sinon from 'sinon';
import * as useTaskEditContext from '../Form/EditTask/hooks/useTaskEditContext';

let stuber;
stuber = sinon.stub(useTaskEditContext, 'default');
/**
 *
 * @param {function} component React Component
 * @param {Object} mockContext Context for the React Component for the test
 * @param {Object} sinonStub a Sinon stub wrapping the context
 */
const createWrapperWithContext = (component, mockContext) => {
  stuber.returns(mockContext);
  return shallow(component);
};

export default createWrapperWithContext;
