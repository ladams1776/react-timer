import React from "react";
import sinon from "sinon";
import * as useTaskEditContext from "../../../Form/EditTask/useTaskEditContext";
import chai, { expect } from "chai";
import SinonChai from 'sinon-chai';
import DropDown from "../DropDown";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
chai.use(SinonChai);

const SELECT_OPTION = 1001;

describe("<DropDown />", () => {
  const context = {
    selectedProject: 0,
    updateDropDown: sinon.spy(),
    dropDownListContracts: [
      { key: 0, label: "test", value: "test" },
      { key: 1, label: "test", value: "test" }
    ]
  };

  let stuber;

  beforeEach(() => {
    stuber = sinon.stub(useTaskEditContext, "default");
  });

  afterEach(() => {
    stuber.restore();
  });

  it("should render DropDown", () => {
    stuber.returns(context);
    const wrapper = shallow(<DropDown />);

    wrapper
      .find('[data-test-id="select"]')
      .props()
      .onChange({ currentTarget: { selectedIndex: 1 } });

    expect(context.updateDropDown).to.have.been.calledOnceWith(SELECT_OPTION);
  });
});
