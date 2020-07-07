import { USERS_RESOURCES } from './users-resources.model';

describe('Users Resources', () => {
  describe('USERS', () => {
    it('USERS with context and user id', () => {
      expect(USERS_RESOURCES.USERS(42, '/fake/context'))
        .toEqual('/fake/context/users/42');
    });

    it('USERS with context', () => {
      expect(USERS_RESOURCES.USERS(undefined, '/fake/context'))
        .toEqual('/fake/context/users');
    });

    it('USERS with user id', () => {
      expect(USERS_RESOURCES.USERS(42))
        .toEqual('/users/42');
    });

    it('USERS without context and user id', () => {
      expect(USERS_RESOURCES.USERS())
        .toEqual('/users');
    });
  });
});
