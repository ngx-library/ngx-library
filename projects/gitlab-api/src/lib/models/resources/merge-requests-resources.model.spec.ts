import { MERGE_REQUESTS_RESOURCES } from './merge-requests-resources.model';

describe('Merge Requests Resources', () => {
  describe('MERGE_REQUESTS', () => {
    it('MERGE_REQUESTS with context and merge request id', () => {
      expect(MERGE_REQUESTS_RESOURCES.MERGE_REQUESTS(42, '/fake/context'))
        .toEqual('/fake/context/merge_requests/42');
    });

    it('MERGE_REQUESTS with context', () => {
      expect(MERGE_REQUESTS_RESOURCES.MERGE_REQUESTS(undefined, '/fake/context'))
        .toEqual('/fake/context/merge_requests');
    });

    it('MERGE_REQUESTS with merge request id', () => {
      expect(MERGE_REQUESTS_RESOURCES.MERGE_REQUESTS(42))
        .toEqual('/merge_requests/42');
    });

    it('MERGE_REQUESTS without context and merge request id', () => {
      expect(MERGE_REQUESTS_RESOURCES.MERGE_REQUESTS())
        .toEqual('/merge_requests');
    });
  });
});
