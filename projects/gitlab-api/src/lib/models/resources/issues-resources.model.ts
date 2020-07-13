import { encodeId, safeContext } from './utils.model';

export const ISSUES_RESOURCES = {
  ISSUES: (issueId?: number, context?: string) =>
    `${safeContext(context)}/issues${encodeId(issueId)}`
};
