import { encodeId, safeContext } from './utils.model';

export const ACCESS_REQUESTS_RESOURCES = {
  ACCESS_REQUESTS: (userId?: number, context?: string) =>
    `${safeContext(context)}/access_requests${encodeId(userId)}`,
  APPROVE: (userId: number, context?: string) =>
    `${ACCESS_REQUESTS_RESOURCES.ACCESS_REQUESTS(userId, context)}/approve`
};
