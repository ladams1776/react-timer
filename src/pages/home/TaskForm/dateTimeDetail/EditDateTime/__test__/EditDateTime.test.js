import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import EditDateTime from '../EditDateTime';


describe('src/pages/home/TaskForm/dateTimeDetail/EditDateTime/__test__/EditDateTime.test.js', () => {
    describe('EditDateTime', () => {
        it('should do something', () => {
            const target = render(<EditDateTime id={'id'} date={'date'} minutes={123} />);
            // expect(target.container.);
        })
    });
});