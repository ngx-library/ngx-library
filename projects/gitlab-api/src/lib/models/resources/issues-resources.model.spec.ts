import { ISSUES_RESOURCES } from './issues-resources.model';

describe('Issues Resources', () => {
  describe('ISSUES', () => {
    it('ISSUES with context and issue id', () => {
      expect(ISSUES_RESOURCES.ISSUES(42, '/fake/context'))
        .toEqual('/fake/context/issues/42');
    });

    it('ISSUES with context', () => {
      expect(ISSUES_RESOURCES.ISSUES(undefined, '/fake/context'))
        .toEqual('/fake/context/issues');
    });

    it('ISSUES with issue id', () => {
      expect(ISSUES_RESOURCES.ISSUES(42))
        .toEqual('/issues/42');
    });

    it('ISSUES without context and issue id', () => {
      expect(ISSUES_RESOURCES.ISSUES())
        .toEqual('/issues');
    });
  });
});
