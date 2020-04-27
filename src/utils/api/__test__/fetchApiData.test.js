import fetchApiData from '../fetchApiData';

describe('src/utils/api/__test__/fetchApiData.test.js', () => {
  describe('fetchApiData', () => {
    it('should successfully call fetch with a GET method type', async () => {
      // Arrange
      const data = {
        id: 1
      };

      const responsePromise = Promise.resolve({
        ok: true,
        json: jest.fn().mockImplementation(() => Promise.resolve(data)),
      });
      global.fetch = jest.fn().mockImplementation(() => responsePromise);

      const url = 'some-route';
      // Act
      const actual = await fetchApiData(url, {});

      // Assert
      expect(global.fetch).toBeCalledWith(`/api/${url}`, { "headers": { "Content-Type": "application/json" }, "method": "GET" });
      expect(actual).toBe(data);
    });

    it('should successfully call fetch with a POST method type, when passing in a body', async () => {
      // Arrange
      const data = {
        id: 1
      };

      const responsePromise = Promise.resolve({
        ok: true,
        json: jest.fn().mockImplementation(() => Promise.resolve(data)),
      });
      global.fetch = jest.fn().mockImplementation(() => responsePromise);
      const url = 'some-route';
      const settings = {
        body: {
          id: 'objectId'
        }
      };

      // Act
      const actual = await fetchApiData(url, settings);

      // Assert
      expect(global.fetch).toBeCalledWith(`/api/${url}`, { "body": "{\"id\":\"objectId\"}", "headers": { "Content-Type": "application/json" }, "method": "POST" });
      expect(actual).toBe(data);
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it("should successfully call fetch with a GET method type, but will reject, when not a 'ok' status", async () => {
      // Arrange
      const data = {
        id: 1
      };

      const responsePromise = Promise.resolve({
        ok: false,
        json: jest.fn().mockImplementation(() => Promise.resolve(data)),
      });
      global.fetch = jest.fn().mockImplementation(() => responsePromise);

      const url = 'some-route';
      const settings = {
        body: {
          id: 'objectId'
        }
      };

      // Act
      try {
        await fetchApiData(url, settings);
      } catch (e) {
        // Assert
        expect(e).toBe(data);
        expect(global.fetch).toBeCalledWith(`/api/${url}`, { "body": "{\"id\":\"objectId\"}", "headers": { "Content-Type": "application/json" }, "method": "POST" });
        expect(global.fetch).toHaveBeenCalledTimes(1);
      }
    });
  });
});
