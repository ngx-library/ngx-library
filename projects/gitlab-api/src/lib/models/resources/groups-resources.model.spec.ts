import { GROUPS_RESOURCES } from './groups-resources.model';

describe('Groups Resources', () => {
  describe('GROUPS', () => {
    it('GROUPS with context and group id', () => {
      expect(GROUPS_RESOURCES.GROUPS(42, '/fake/context'))
        .toEqual('/fake/context/groups/42');
    });

    it('GROUPS with context', () => {
      expect(GROUPS_RESOURCES.GROUPS(undefined, '/fake/context'))
        .toEqual('/fake/context/groups');
    });

    it('GROUPS without context and group id', () => {
      expect(GROUPS_RESOURCES.GROUPS())
        .toEqual('/groups');
    });

    it('GROUPS with integer group id', () => {
      expect(GROUPS_RESOURCES.GROUPS('42'))
        .toEqual('/groups/42');
    });

    it('GROUPS with string group id', () => {
      expect(GROUPS_RESOURCES.GROUPS('fake/string/id'))
        .toEqual('/groups/fake%2Fstring%2Fid');
    });
  });

  describe('ACCESS_REQUESTS', () => {
    it('ACCESS_REQUESTS with context, group id and user id', () => {
      expect(GROUPS_RESOURCES.ACCESS_REQUESTS(43,  42, '/fake/context'))
        .toEqual('/fake/context/groups/43/access_requests/42');
    });

    it('ACCESS_REQUESTS with context and group id', () => {
      expect(GROUPS_RESOURCES.ACCESS_REQUESTS(42,  undefined, '/fake/context'))
        .toEqual('/fake/context/groups/42/access_requests');
    });

    it('ACCESS_REQUESTS with integer group id', () => {
      expect(GROUPS_RESOURCES.ACCESS_REQUESTS(42))
        .toEqual('/groups/42/access_requests');
    });

    it('ACCESS_REQUESTS with string group id', () => {
      expect(GROUPS_RESOURCES.ACCESS_REQUESTS('fake/string/id'))
        .toEqual('/groups/fake%2Fstring%2Fid/access_requests');
    });
  });

  describe('ACCESS_REQUESTS_APPROVE', () => {
    it('ACCESS_REQUESTS_APPROVE with context, group id and user id', () => {
      expect(GROUPS_RESOURCES.ACCESS_REQUESTS_APPROVE(42, 43, '/fake/context'))
        .toEqual('/fake/context/groups/42/access_requests/43/approve');
    });

    it('ACCESS_REQUESTS_APPROVE with integer group id and user id', () => {
      expect(GROUPS_RESOURCES.ACCESS_REQUESTS_APPROVE(42, 43))
        .toEqual('/groups/42/access_requests/43/approve');
    });

    it('ACCESS_REQUESTS_APPROVE with string group id', () => {
      expect(GROUPS_RESOURCES.ACCESS_REQUESTS_APPROVE('fake/string/id', 43))
        .toEqual('/groups/fake%2Fstring%2Fid/access_requests/43/approve');
    });
  });
});
