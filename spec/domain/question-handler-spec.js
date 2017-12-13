const sut = require('../../src/domain/question-handler');

describe('question-handler', () => {
  describe('when creating a question', () => {
    let result;

    beforeAll(() => {
      result = sut.create();      
    });

    it('should create something', () => {
      expect(result).toBeDefined();
    });

    it('should have an Id', () => {
      expect(result.Id).toBeDefined();
    });

    it('should have readable Text', () => {
      expect(result.Text).toBeDefined();
      expect(result.Text.length).toBeGreaterThan(0);
    });
  });
});
