import { encodeId, safeContext } from './utils.model';

export const TAGS_RESOURCES = {
  TAGS: (tagName?: string, context?: string) =>
    `${safeContext(context)}/tags${encodeId(tagName)}`
};
