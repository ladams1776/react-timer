import React from "react";
import sinon from "sinon";
import * as useTaskEditContext from "~/useTaskEditContext";
import chai, { expect } from "chai";
import SinonChai from "sinon-chai";
import FlashMessage from "../FlashMessage";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
chai.use(SinonChai);

describe.only("src/components/FlashMessage/__test__/FlashMessage.test.js", () => {
  describe("FlashMessage", () => {
    let wrapper;
    let context;
    const stuber = sinon.stub(useTaskEditContext, "default");

    it("should not show FlashMessage when isFlashMessage is false.", () => {
      context = {
        isFlashMessage: false
      };
      stuber.returns(context);

      const props = { message: "test-message" };

      wrapper = shallow(<FlashMessage props={props} />);
      expect(wrapper).to.be.empty;
    });

    it("should show FlashMessage when isFlashMessage is true.", () => {
      context = {
        isFlashMessage: true
      };
      stuber.returns(context);

      wrapper = mount(<FlashMessage message={"test-message"} />);
      expect(wrapper.find("[data-test-id='flash-message']")).to.exist;
    });
  });
});
