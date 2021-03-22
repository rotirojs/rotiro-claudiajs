import { replaceVariables } from './index';

describe('utils', () => {
  describe('replaceVariables', () => {
    it('Replace express style variables with curly braces', () => {
      const result = replaceVariables('/test/:carName/:redCat');
      expect(result).toEqual('/test/{carName}/{redCat}');
    });

    it('Return path with no vars as it was', () => {
      const result = replaceVariables('/test/carName/redCat');
      expect(result).toEqual('/test/carName/redCat');
    });
  });
});
