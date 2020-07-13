import { encodeId, safeContext } from './utils.model';

export const USERS_RESOURCES = {
  USERS: (userId?: number, context?: string) =>
    `${safeContext(context)}/users${encodeId(userId)}`
};
