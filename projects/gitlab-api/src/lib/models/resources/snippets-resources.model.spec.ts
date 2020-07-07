import { SNIPPETS_RESOURCES } from './snippets-resources.model';

describe('Snippets Resources', () => {
  describe('SNIPPETS', () => {
    it('SNIPPETS with context and snippet id', () => {
      expect(SNIPPETS_RESOURCES.SNIPPETS(42, '/fake/context'))
        .toEqual('/fake/context/snippets/42');
    });

    it('SNIPPETS with context', () => {
      expect(SNIPPETS_RESOURCES.SNIPPETS(undefined, '/fake/context'))
        .toEqual('/fake/context/snippets');
    });

    it('SNIPPETS with snippet id', () => {
      expect(SNIPPETS_RESOURCES.SNIPPETS(42))
        .toEqual('/snippets/42');
    });

    it('SNIPPETS without context and snippet id', () => {
      expect(SNIPPETS_RESOURCES.SNIPPETS())
        .toEqual('/snippets');
    });
  });
});
