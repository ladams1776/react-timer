const hydrate = require('../hydrate');

describe('server/infrastructurehydrators/__test__/hydrate.test.js', () => {
  describe('hydrate', () => {
    it('should return object, when no error is present', () => {
      const err = undefined;
      const docs = {
        id: 1,
      };

      const actual = hydrate(err, docs);
      expect(actual).toEqual(docs);
    });
    it('should return object, when no error is present', () => {
      const err = 'problems';
      const docs = {
        id: 1,
      };

      const actual = hydrate(err, docs);
      expect(actual).toEqual(`There was an issue! ${err}`);
    });
  });
});
