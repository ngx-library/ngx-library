import { ACCESS_REQUESTS_RESOURCES } from './access-requests-resources.model';

describe('Access Requests Resources', () => {
  describe('ACCESS_REQUESTS', () => {
    it('ACCESS_REQUESTS with context and user id', () => {
      expect(ACCESS_REQUESTS_RESOURCES.ACCESS_REQUESTS(42, '/fake/context'))
        .toEqual('/fake/context/access_requests/42');
    });

    it('ACCESS_REQUESTS with context', () => {
      expect(ACCESS_REQUESTS_RESOURCES.ACCESS_REQUESTS(undefined, '/fake/context'))
        .toEqual('/fake/context/access_requests');
    });

    it('ACCESS_REQUESTS with user id', () => {
      expect(ACCESS_REQUESTS_RESOURCES.ACCESS_REQUESTS(42))
        .toEqual('/access_requests/42');
    });

    it('ACCESS_REQUESTS without context and user id', () => {
      expect(ACCESS_REQUESTS_RESOURCES.ACCESS_REQUESTS())
        .toEqual('/access_requests');
    });
  });

  describe('APPROVE', () => {
    it('APPROVE with context and user id', () => {
      expect(ACCESS_REQUESTS_RESOURCES.APPROVE(42, '/fake/context'))
        .toEqual('/fake/context/access_requests/42/approve');
    });

    it('APPROVE with user id', () => {
      expect(ACCESS_REQUESTS_RESOURCES.APPROVE(42))
        .toEqual('/access_requests/42/approve');
    });
  });
});
