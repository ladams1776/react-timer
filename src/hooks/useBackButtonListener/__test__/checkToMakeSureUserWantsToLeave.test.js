import checkToMakeSureUserWantsToLeave from '../checkToMakeSureUserWantsToLeave';

describe('src/hooks/useBackButtonListener/__test__/checkToMakeSureUserWantsToLeave.test.js', () => {
    describe('checkToMakeSureUserWantsToLeave', () => {

        it("should return 'Are you sure you want to leave this page?', when pathname equals '/'", () => {
            // Arrange
            const location = {
                pathname: "/",
            };

            // Act
            const actual = checkToMakeSureUserWantsToLeave(location, null);

            // Assert
            expect(actual).toEqual('Are you sure you want to leave this page?');
        });

        it("should return null, when pathname is anything but '/'", () => {
            // Arrange
            const location = {
                pathname: "nothing",
            };

            // Act
            const actual = checkToMakeSureUserWantsToLeave(location, null);

            // Assert
            expect(actual).toEqual(undefined);
        });
    });
});