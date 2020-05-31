import React from 'react';
import ms from 'pretty-ms';
import { displayMsInFractionalHourFormat } from 'utils';
import { createWrapperWithContext, findByTestId } from 'testUtils';
import { useTimeContext } from '../../hooks';
import Timer from '../Timer';

jest.mock('../../hooks/useTimeContext');

describe('src/pages/createOrEditTask/timer/__test__/Timer.test.js', () => {
  describe('Timer', () => {
    let wrapper;
    const timeContext = {
      time: 20000,
    };

    useTimeContext.mockReturnValue(timeContext);
    
    it('should display the time in the right format', () => {
      wrapper = createWrapperWithContext(<Timer />);
      
      expect(findByTestId(wrapper, 'fractionHour').text()).toEqual(
        `Hours: ${displayMsInFractionalHourFormat(timeContext.time)}`,
      );

      expect(findByTestId(wrapper, 'secondDecimalDigitHour').text()).toEqual(
        `${ms(timeContext.time, { secondsDecimalDigits: 2 })}`,
      );
    });
  });
});
