import fetchApiData from '../fetchApiData';

describe('src/utils/api/fetchApiData/__test__/fetchApiData.test.js', () => {
  describe('fetchApiData', () => {
    // Arrange
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

    it('should successfully call fetch with a PUT method type, when passing it in as an argument', async () => {
      // Arrange
      const responsePromise = Promise.resolve({
        ok: true,
        json: jest.fn().mockImplementation(() => Promise.resolve(data)),
      });
      global.fetch = jest.fn().mockImplementation(() => responsePromise);
      const settings = {
        body: {
          id: 'objectId'
        },
        method: 'PUT'
      };

      // Act
      await fetchApiData(url, settings, dispatchSpy);

      // Assert
      expect(global.fetch).toHaveBeenNthCalledWith(1, `/api/${url}`, { "body": "{\"id\":\"objectId\"}", "headers": { "Content-Type": "application/json" }, "method": "PUT" });
      expect(dispatchSpy).toHaveBeenNthCalledWith(1, data);
    });


    it("should successfully call fetch with a GET method type, but will return an empty array, when not an 'ok' status", async () => {
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

      const expected = [];

      // Act
      await fetchApiData(url, settings, dispatchSpy);

      // Assert
      expect(global.fetch).toHaveBeenNthCalledWith(1, `/api/${url}`, { "body": "{\"id\":\"objectId\"}", "headers": { "Content-Type": "application/json" }, "method": "POST" });
      expect(dispatchSpy).toHaveBeenNthCalledWith(1, expected);

    });
  });
});
