import { CUSTOM_ATTRIBUTES_RESOURCES } from './custom-attributes-resources.model';

describe('Custom Attributes Resources', () => {
  describe('CUSTOM_ATTRIBUTES', () => {
    it('CUSTOM_ATTRIBUTES with context and custom attribute key', () => {
      expect(CUSTOM_ATTRIBUTES_RESOURCES.CUSTOM_ATTRIBUTES('fakeCustomAttributeKey', '/fake/context'))
        .toEqual('/fake/context/custom_attributes/fakeCustomAttributeKey');
    });

    it('CUSTOM_ATTRIBUTES with context', () => {
      expect(CUSTOM_ATTRIBUTES_RESOURCES.CUSTOM_ATTRIBUTES(undefined, '/fake/context'))
        .toEqual('/fake/context/custom_attributes');
    });

    it('CUSTOM_ATTRIBUTES with custom attribute key', () => {
      expect(CUSTOM_ATTRIBUTES_RESOURCES.CUSTOM_ATTRIBUTES('fakeCustomAttributeKey'))
        .toEqual('/custom_attributes/fakeCustomAttributeKey');
    });

    it('CUSTOM_ATTRIBUTES without context and custom attribute key', () => {
      expect(CUSTOM_ATTRIBUTES_RESOURCES.CUSTOM_ATTRIBUTES())
        .toEqual('/custom_attributes');
    });
  });
});
