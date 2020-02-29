import React from 'react';
import Timer from '../Timer';
import ms from 'pretty-ms';
import displayMsInFractionalHourFormat from 'utils/displayMsInFractionalHourFormat';
import { createWrapperWithContext, findByTestId } from "testUtils";
// import * as useUpdateCurrentTime from './hooks/useUpdateCurrentTime';
import { render } from '@testing-library/react';

import sinon from 'sinon';
import Enzyme, { shallow } from 'enzyme';
import chai from 'chai';
import SinonChai from 'sinon-chai';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
chai.use(SinonChai);

describe.only('src/pages/createOrEditTask/timer/__test__/Timer.test.js', () => {
    describe('Timer', () => {
        let wrapper;

        it('', () => {
            const context = {
                isActive: false,
                setIsActive: sinon.spy()
            };
            const time = 1000;
            const setTimeSpy = jest.fn().mockImplementation();
            wrapper = createWrapperWithContext(<Timer time={time} setTime={setTimeSpy} />, context);
            expect(wrapper.find(findByTestId("timer__display__content")).text()).toEqual(`${ms(time)} - hours: ${displayMsInFractionalHourFormat(time)}`);
        });
    });
});