import React from "react";
import { createWrapperWithContext, findByTestId } from "testUtils";
import DeleteTaskButton from "../DeleteTaskButton";

describe("src/pages/home/TaskListView/Task/__test__/DeleteTaskButton/__test__/DeleteTaskButton.test.js", () => {
  let wrapper;
  describe("#_deleteClick", () => {
    describe("DeleteTaskButton", () => {
      it("should display DeleteTaskButton", () => {
        const wrapper = createWrapperWithContext(
          <DeleteTaskButton taskId={"stubTaskID"} />,
          {}
        );

        expect(wrapper.length).toEqual(1);
      });

      describe("#_deleteClick", () => {
        it("should display DeleteTaskButton", async () => {
          const preventDefaultSpy = jest.fn().mockImplementation();

          global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
              json: jest.fn().mockImplementation(() => Promise.resolve())
            })
          );

          global.window.location.reload = jest.fn().mockImplementation();

          jest.useFakeTimers(); // Need to declare we are using setTimeout

          const context = {
            setMessage: jest.fn().mockImplementation()
          };

          const wrapper = createWrapperWithContext(
            <DeleteTaskButton taskId={"stubTaskID"} />,
            context
          );

          const response = await wrapper
            .find(findByTestId("delete-task-button"))
            .props()
            .onClick({ preventDefault: preventDefaultSpy });

          jest.runTimersToTime(500); // speed up the time on the setTimeout

          expect(preventDefaultSpy).toBeCalled();
          expect(context.setMessage).toBeCalledWith(
            "Successfully Deleted Task with id of stubTaskID"
          );
          expect(global.window.location.reload).toBeCalled();
        });
      });
    });
  });
});
