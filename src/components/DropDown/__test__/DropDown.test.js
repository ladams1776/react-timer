import React from "react";
import sinon from "sinon";
import { TaskEditFormProvider } from "../../../TaskEditFormContext";
import { expect } from "chai";
import DropDown from "../DropDown";

import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<DropDown />", () => {
  const contextValues = {
    selectedProject: 0,
    updateDropDown: sinon.spy(),
    dropDownListContracts: [
      { key: 0, label: "test", value: "test" },
      { key: 0, label: "test", value: "test" }
    ]
  };

  const TestComponent = () => (
    <TaskEditFormProvider value={contextValues}>
      <DropDown />
    </TaskEditFormProvider>
  );

  it("should render DropDown", () => {
    // debugger;
    const wrapper = render(<TestComponent />);
    
    debugger;
    wrapper
      .find(DropDown)
      .dive()
      .find('[data-test-id="select"]')
      .props()
      .onChange({ currentTarget: 0 });
    // wrapper
    //   .find('[data-test-id="select"]')
    //   .props()
    //   .onChange({ currentTarget: 0 });
    contextValues.updateDropDown.calledOnceWithExactly(0);
  });
});
