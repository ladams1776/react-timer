import fetchApiData from '../fetchApiData';

describe('src/utils/api/__test__/fetchApiData.test.js', () => {
  describe('fetchApiData', () => {
    const url = 'some-route';
    const data = {
      id: 1
    };
    const dispatchSpy = jest.fn().mockImplementation();

    beforeEach(() => {
      dispatchSpy.mockReset();
    });

    it('should successfully call fetch with a GET method type', async () => {
      // Arrange
      const responsePromise = Promise.resolve({
        ok: true,
        json: jest.fn().mockImplementation(() => Promise.resolve(data)),
      });
      global.fetch = jest.fn().mockImplementation(() => responsePromise);

      // Act
      await fetchApiData(url, {}, dispatchSpy);

      // Assert
      expect(global.fetch).toHaveBeenNthCalledWith(1, `/api/${url}`, { "headers": { "Content-Type": "application/json" }, "method": "GET" });
      expect(dispatchSpy).toHaveBeenNthCalledWith(1, data);
    });

    it('should successfully call fetch with a POST method type, when passing in a body', async () => {
      // Arrange
      const responsePromise = Promise.resolve({
        ok: true,
        json: jest.fn().mockImplementation(() => Promise.resolve(data)),
      });
      global.fetch = jest.fn().mockImplementation(() => responsePromise);
      const settings = {
        body: {
          id: 'objectId'
        }
      };

      // Act
      await fetchApiData(url, settings, dispatchSpy);

      // Assert
      expect(global.fetch).toHaveBeenNthCalledWith(1, `/api/${url}`, { "body": "{\"id\":\"objectId\"}", "headers": { "Content-Type": "application/json" }, "method": "POST" });
      expect(dispatchSpy).toHaveBeenNthCalledWith(1, data);
    });

    it("should successfully call fetch with a GET method type, but will reject, when not a 'ok' status", async () => {
      // Arrange
      const responsePromise = Promise.resolve({
        ok: false,
        json: jest.fn().mockImplementation(() => Promise.resolve(data)),
      });
      global.fetch = jest.fn().mockImplementation(() => responsePromise);

      const settings = {
        body: {
          id: 'objectId'
        }
      };

      // Act
      try {
        await fetchApiData(url, settings, dispatchSpy);
      } catch (e) {
        // Assert
        expect(global.fetch).toHaveBeenNthCalledWith(1, `/api/${url}`, { "body": "{\"id\":\"objectId\"}", "headers": { "Content-Type": "application/json" }, "method": "POST" });
        expect(dispatchSpy).toHaveBeenNthCalledWith(1, data);
      }
    });
  });
});
