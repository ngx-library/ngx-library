import { encodeId, safeContext } from './utils.model';

export const SNIPPETS_RESOURCES = {
  SNIPPETS: (snippetId?: number, context?: string) =>
    `${safeContext(context)}/snippets${encodeId(snippetId)}`
};
