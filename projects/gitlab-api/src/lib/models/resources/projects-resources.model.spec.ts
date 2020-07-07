import { PROJECTS_RESOURCES } from './projects-resources.model';

describe('Projects Resources', () => {
  describe('PROJECTS', () => {
    it('PROJECTS with context and project id', () => {
      expect(PROJECTS_RESOURCES.PROJECTS(42, '/fake/context'))
        .toEqual('/fake/context/projects/42');
    });

    it('PROJECTS with context', () => {
      expect(PROJECTS_RESOURCES.PROJECTS(undefined, '/fake/context'))
        .toEqual('/fake/context/projects');
    });

    it('PROJECTS without context and project id', () => {
      expect(PROJECTS_RESOURCES.PROJECTS())
        .toEqual('/projects');
    });

    it('PROJECTS with integer project id', () => {
      expect(PROJECTS_RESOURCES.PROJECTS(42))
        .toEqual('/projects/42');
    });

    it('PROJECTS with string project id', () => {
      expect(PROJECTS_RESOURCES.PROJECTS('fake/string/id'))
        .toEqual('/projects/fake%2Fstring%2Fid');
    });
  });

  describe('ACCESS_REQUESTS', () => {
    it('ACCESS_REQUESTS with context, project id and user id', () => {
      expect(PROJECTS_RESOURCES.ACCESS_REQUESTS(42, 43, '/fake/context'))
        .toEqual('/fake/context/projects/42/access_requests/43');
    });

    it('ACCESS_REQUESTS with context and project id', () => {
      expect(PROJECTS_RESOURCES.ACCESS_REQUESTS(42, undefined, '/fake/context'))
        .toEqual('/fake/context/projects/42/access_requests');
    });

    it('ACCESS_REQUESTS with integer project id', () => {
      expect(PROJECTS_RESOURCES.ACCESS_REQUESTS(42))
        .toEqual('/projects/42/access_requests');
    });

    it('ACCESS_REQUESTS with string project id', () => {
      expect(PROJECTS_RESOURCES.ACCESS_REQUESTS('fake/string/id'))
        .toEqual('/projects/fake%2Fstring%2Fid/access_requests');
    });
  });

  describe('ACCESS_REQUESTS_APPROVE', () => {
    it('ACCESS_REQUESTS_APPROVE with context, project id and user id', () => {
      expect(PROJECTS_RESOURCES.ACCESS_REQUESTS_APPROVE(42, 43, '/fake/context'))
        .toEqual('/fake/context/projects/42/access_requests/43/approve');
    });

    it('ACCESS_REQUESTS_APPROVE with integer project id and user id', () => {
      expect(PROJECTS_RESOURCES.ACCESS_REQUESTS_APPROVE(42, 43))
        .toEqual('/projects/42/access_requests/43/approve');
    });

    it('ACCESS_REQUESTS_APPROVE with string project id', () => {
      expect(PROJECTS_RESOURCES.ACCESS_REQUESTS_APPROVE('fake/string/id', 43))
        .toEqual('/projects/fake%2Fstring%2Fid/access_requests/43/approve');
    });
  });
});
