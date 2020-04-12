import React from 'react';
import ms from 'pretty-ms';
import { displayMsInFractionalHourFormat } from 'utils';
import { createWrapperWithContext, findByTestId } from 'testUtils';
import Timer from '../Timer';

describe('src/pages/createOrEditTask/timer/__test__/Timer.test.js', () => {
  describe('Timer', () => {
    let wrapper;

    it('should display the time in the right format', () => {
      const time = 20000;
      wrapper = createWrapperWithContext(<Timer time={time} />);

      expect(findByTestId(wrapper, 'fractionHour').text())
        .toEqual(`Hours: ${displayMsInFractionalHourFormat(time)}`);

      expect(findByTestId(wrapper, 'secondDecimalDigitHour').text())
        .toEqual(`${ms(time, { secondsDecimalDigits: 2 })}`);
    });
  });
});
