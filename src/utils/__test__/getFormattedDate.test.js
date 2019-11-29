import getFormattedDate from '../getFormattedDate';

describe('src/utils/__test__/DateFormat.test.js', () => {
  describe('getFormattedDate', () => {
    it('should format the time correctly - 1 hr', () => {
      const todaysDate = new Date();

      const todaysFormattedDate = getFormattedDate(todaysDate);
      expect(todaysFormattedDate).toEqual(
        todaysDate.getMonth() +
          1 +
          '/' +
          todaysDate.getDate().toString() +
          '/' +
          todaysDate.getFullYear().toString()
      );
    });
  });
});
