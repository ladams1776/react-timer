import getFormattedDate from '../getFormattedDate';

describe('src/utils/__test__/DateFormat.test.js', () => {
  describe('getFormattedDate', () => {
    it('should format the time correctly - 1 hr', () => {
      // Arrange
      const todaysDate = new Date();

      const expected = (parseInt(todaysDate.getMonth()) + 1)
        + '/'
        + todaysDate.getDate().toString()
        + '/'
        + todaysDate.getFullYear().toString();

      // Act
      const todaysFormattedDate = getFormattedDate();

      // Assert
      expect(todaysFormattedDate).toEqual(expected);
    });
  });
});
