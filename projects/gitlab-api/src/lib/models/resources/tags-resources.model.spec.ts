import { TAGS_RESOURCES } from './tags-resources.model';

describe('Tags Resources', () => {
  describe('TAGS', () => {
    it('TAGS with context and tag name', () => {
      expect(TAGS_RESOURCES.TAGS('fakeTagName', '/fake/context'))
        .toEqual('/fake/context/tags/fakeTagName');
    });

    it('TAGS with context', () => {
      expect(TAGS_RESOURCES.TAGS(undefined, '/fake/context'))
        .toEqual('/fake/context/tags');
    });

    it('TAGS with tag name', () => {
      expect(TAGS_RESOURCES.TAGS('fakeTagName'))
        .toEqual('/tags/fakeTagName');
    });

    it('TAGS without context and tag name', () => {
      expect(TAGS_RESOURCES.TAGS())
        .toEqual('/tags');
    });
  });
});
