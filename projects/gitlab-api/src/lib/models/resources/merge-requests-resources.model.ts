import { encodeId, safeContext } from './utils.model';

export const MERGE_REQUESTS_RESOURCES = {
  MERGE_REQUESTS: (mergeRequestsId?: number, context?: string) =>
    `${safeContext(context)}/merge_requests${encodeId(mergeRequestsId)}`
};
