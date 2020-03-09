import React from 'react';
import ms from 'pretty-ms';
import { displayMsInFractionalHourFormat } from 'utils';
import { createWrapperWithContext, findByTestId } from 'testUtils';
import Timer from '../Timer';

describe('src/pages/createOrEditTask/timer/__test__/Timer.test.js', () => {
  describe('Timer', () => {
    let wrapper;

    it('should display the time in the right format', () => {
      const context = {
        isActive: false,
        setIsActive: jest.fn().mockImplementation(),
      };
      const time = 1000;
      const setTimeSpy = jest.fn().mockImplementation();

      wrapper = createWrapperWithContext(
        <Timer time={time} setTime={setTimeSpy} />,
        context,
      );

      expect(
        wrapper.find(findByTestId('timer__display__content')).text(),
      ).toEqual(
        `${ms(time)} - hours: ${displayMsInFractionalHourFormat(time)}`,
      );
    });

    describe('timerButtons', () => {
      describe('reset button', () => {
        it("should be disabled, if time equals '0' ", () => {
          wrapper = createWrapperWithContext(<Timer time={0} />);
          var timerResetButton = wrapper.find(findByTestId('timerReset'));
          expect(timerResetButton.prop('disabled')).toBeTruthy();
        });

        it("reset button should be enabled, if time is equal to anything BUT '0' ", () => {
          wrapper = createWrapperWithContext(<Timer time={1} />);
          const timerResetButton = wrapper.find(findByTestId('timerReset'));
          expect(timerResetButton.prop('disabled')).toBeFalsy();
        });

        describe('onClick', () => {
          it("should call 'reset()'", () => {
            const stubTime = 1000;
            const spySetTime = jest.fn().mockImplementation();
            const spySetIsActive = jest.fn().mockImplementation();

            wrapper = createWrapperWithContext(
              <Timer
                time={stubTime}
                setTime={spySetTime}
                setIsActive={spySetIsActive}
              />,
            );

            wrapper
              .find(findByTestId('timerReset'))
              .props()
              .onClick();

            expect(spySetTime).toBeCalledWith(0);
            expect(spySetIsActive).toBeCalledWith(false);
          });
        });
      });

      describe('stop button', () => {
        it("should be displaying, if 'isActive' is true", () => {
          wrapper = createWrapperWithContext(
            <Timer time={0} isActive={true} />,
          );

          expect(wrapper.find(findByTestId('timerStop')).text()).toBe('stop');
        });

        it("should NOT be displaying, if 'isActive' is false", () => {
          wrapper = createWrapperWithContext(
            <Timer time={0} isActive={false} />,
          );

          expect(wrapper.find(findByTestId('timerStop'))).toEqual({});
        });

        describe('onClick', () => {
          it("should call 'setIsActive'", () => {
            const stubTime = 0;
            const spySetIsActive = jest.fn().mockImplementation();

            wrapper = createWrapperWithContext(
              <Timer
                time={stubTime}
                isActive={true}
                setIsActive={spySetIsActive}
              />,
            );

            wrapper
              .find(findByTestId('timerStop'))
              .props()
              .onClick();

            expect(spySetIsActive).toBeCalledWith(false);
          });
        });
      });

      //@TODO test resume
    });
  });
});
