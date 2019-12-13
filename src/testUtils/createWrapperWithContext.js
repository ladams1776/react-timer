import { shallow } from "enzyme";

/**
 *
 * @param {function} component React Component
 * @param {Object} mockContext Context for the React Component for the test
 * @param {Object} sinonStub a Sinon stub wrapping the context
 */
const createWrapperWithContext = (component, mockContext, sinonStub) => {
  sinonStub.returns(mockContext);
  return shallow(component);
};

export default createWrapperWithContext;
