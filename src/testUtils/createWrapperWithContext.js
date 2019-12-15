import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import chai from 'chai';
import SinonChai from 'sinon-chai';
import Adapter from 'enzyme-adapter-react-16';
import * as useTaskEditContext from 'Form/EditTask/hooks/useTaskEditContext';

Enzyme.configure({ adapter: new Adapter() });
chai.use(SinonChai);

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
