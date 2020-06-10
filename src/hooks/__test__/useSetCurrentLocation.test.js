import { renderHook } from '@testing-library/react-hooks';
import useSetCurrentLocation from '../useSetCurrentLocation';

describe('src/hooks/__test__/useSetCurrentLocation.test.js', () => {
  describe('#useSetCurrentLocation', () => {
    // Arrange
    const setTimeSpy = jest.spyOn(Storage.prototype, 'setItem');

    it('should set sessionStorage of location to specific location', () => {
      // Arrange
      const expected = 'some-url-location';
      const locationConstant = 'LOCATION';

      // Act
      renderHook(() => useSetCurrentLocation('some-url-location'));
      // Assert
      expect(setTimeSpy).toBeCalledWith(locationConstant, expected);
    });
  });
});
