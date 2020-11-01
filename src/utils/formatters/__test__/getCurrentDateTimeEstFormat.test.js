import getCurrentDateTimeEstFormat from '../getCurrentDateTimeEstFormat';
import moment from 'moment-timezone';

describe('src/utils/__test__/getCurrentDateTimeEstFormat.test.js', () => {
  describe('getCurrentDateTimeEstFormat', () => {
    it('Should format the date and time in EST', () => {
      // Arrange
      const myTimezone = "America/Toronto";
      const myDatetimeFormat = "YYYY-MM-DD hh:mm:ss a z";
      const expected = moment(new Date()).tz(myTimezone).format(myDatetimeFormat);

      // Act
      const actual = getCurrentDateTimeEstFormat();

      // Assert
      expect(expected).toEqual(actual);
    });
  });
});
