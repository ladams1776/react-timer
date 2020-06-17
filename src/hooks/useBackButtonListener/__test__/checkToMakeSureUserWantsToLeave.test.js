import checkToMakeSureUserWantsToLeave from '../checkToMakeSureUserWantsToLeave';

describe('src/hooks/useBackButtonListener/__test__/checkToMakeSureUserWantsToLeave.test.js', () => {
  describe('checkToMakeSureUserWantsToLeave', () => {
    // Arrange

    it("should return 'Are you sure you want to leave this page?', when destLocation.pathname equals '/', but destLocation does not.", () => {
      // Arrange
      const location = {
        pathname: '/',
      };
      window.confirm = jest.fn(() => true); // always click 'yes'            // Act
      const target = checkToMakeSureUserWantsToLeave();

      // act
      const actual = target(location);

      // Assert
      expect(actual).toEqual(true);
      expect(window.confirm).toHaveBeenNthCalledWith(
        1,
        'Are you sure you want to leave this page?',
      );
    });

    it("should return null, when pathname is anything but '/'", () => {
      // Arrange
      const location = '/';
      window.confirm = jest.fn(() => true); // always click 'yes'            // Act
      const target = checkToMakeSureUserWantsToLeave();

      // act
      target(location);

      // Assert
      expect(window.confirm).not.toHaveBeenCalled();
    });
  });
});
