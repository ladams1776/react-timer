import React from "react";
import sinon from "sinon";
import { createWrapperWithContext } from "testUtils";
import Task from "../Task";

describe("src/pages/home/TaskListView/Task/__test__/Task.test.js", () => {
  let wrapper;

  describe("Task", () => {
    it("should display Task when one is present", () => {
      const context = {
        projects: [{ label: "label of project" }]
      };

      wrapper = createWrapperWithContext(
        <Task
          task={{
            _id: "taskId",
            contractId: 0,
            description: "this is a wonderful description"
          }}
        />,
        context
      );

      expect(wrapper).toBeTruthy();
    });
  });
});
