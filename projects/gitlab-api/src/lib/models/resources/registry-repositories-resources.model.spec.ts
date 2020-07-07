import { REGISTRY_REPOSITORIES_RESOURCES } from './registry-repositories-resources.model';

describe('Registry Repositories Resources', () => {
  describe('REGISTRY_REPOSITORIES', () => {
    it('REGISTRY_REPOSITORIES with context and registry repository id', () => {
      expect(REGISTRY_REPOSITORIES_RESOURCES.REGISTRY_REPOSITORIES(42, '/fake/context'))
        .toEqual('/fake/context/registry/repositories/42');
    });

    it('REGISTRY_REPOSITORIES with context', () => {
      expect(REGISTRY_REPOSITORIES_RESOURCES.REGISTRY_REPOSITORIES(undefined, '/fake/context'))
        .toEqual('/fake/context/registry/repositories');
    });

    it('REGISTRY_REPOSITORIES with registry repository id', () => {
      expect(REGISTRY_REPOSITORIES_RESOURCES.REGISTRY_REPOSITORIES(42))
        .toEqual('/registry/repositories/42');
    });

    it('REGISTRY_REPOSITORIES without context and registry repository id', () => {
      expect(REGISTRY_REPOSITORIES_RESOURCES.REGISTRY_REPOSITORIES())
        .toEqual('/registry/repositories');
    });
  });

  describe('TAGS', () => {
    it('TAGS with context, registry repository id and tag name', () => {
      expect(REGISTRY_REPOSITORIES_RESOURCES.TAGS(42, 'fakeTagName', '/fake/context'))
        .toEqual('/fake/context/registry/repositories/42/tags/fakeTagName');
    });

    it('TAGS with context and registry repository id', () => {
      expect(REGISTRY_REPOSITORIES_RESOURCES.TAGS(42, undefined, '/fake/context'))
        .toEqual('/fake/context/registry/repositories/42/tags');
    });

    it('TAGS without context', () => {
      expect(REGISTRY_REPOSITORIES_RESOURCES.TAGS(42))
        .toEqual('/registry/repositories/42/tags');
    });
  });
});
